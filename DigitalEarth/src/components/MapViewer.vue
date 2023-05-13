<!--
 * @Description:
 * @Version: 2.0
 * @Autor: zhangxin
 * @Date: 2022-12-12 14:16:04
 * @LastEditors: wangyindi
 * @LastEditTime: 2023-03-22 16:29:37
-->
<!--地图-->
<template>
  <div class="map-viwer">
    <div id="map">
      <div class="toolBar">
        <span>请选择目标</span>
        <el-select style="width: 150px"
          size="mini"
          v-model="allSelect"
          placeholder="请选择目标"
          @change="selectChange"
        >
        <el-option
          v-for="item in allTargetSelect"
          :key="item.id"
          :label="item.id"
          :value="item.id"
        ></el-option>
        </el-select>  
      </div>
      <el-button  @click="defaultView" round >默认视角</el-button>     
    </div>
    <div id="map_1" v-show="false">
      <span>我方视角</span>
      <el-select style="width: 150px"
        size="mini"
        v-model="ourSelect"
        placeholder="请选择我方目标"
        @change="selectChange1"
      >
      <el-option
        v-for="item in ourTargetSelect"
        :key="item.id"
        :label="item.id"
        :value="item.id"
      ></el-option>
      </el-select>
    </div>
    <div id="map_2" v-show="false">
      <span>敌方视角</span>
      <el-select style="width: 150px"
        size="mini"
        v-model="enemySelect"
        placeholder="请选择敌方目标"
        @change="selectChange2"
      >
      <el-option
        v-for="item in enemyTargetSelect"
        :key="item.id"
        :label="item.id"
        :value="item.id"
      ></el-option>
      </el-select>
    </div>
  </div>
</template>
<script>
import { getInitialize, pushInferServer } from "@/api/api.js";
import SseEmitter from "@/utils/sseEmitter";
import axios from "axios";
import Url from "@/url/url";
export default {
  name: "MapViewer",
  data() {
    return {
      emitter: undefined, // 新建SseEmitter
      userId: sessionStorage.getItem("userId"),// 连接所需用户id
      initMovingTarget: [],// 初始化动目标数据
      startTime: null,// 开始时间
      endTime: null,// 结束时间
      mtFlightDatas: [],// 动目标对象组，用于存放动目标数据，更新此数组驱动位置更新
      timer: null, // 定时器
      curTime: 0,// 当前时间
      allSelect: [],// 所有目标
      ourSelect: [],// 我方目标
      enemySelect: [],// 敌方目标
      allTargetSelect: [],// 所有目标的选择
      ourTargetSelect: [],// 我方目标的选择
      enemyTargetSelect: []// 敌方目标的选择
    };
  },
  methods: {
    init() {
      // 获取初始化动目标数据并创建
      getInitialize({
        userId: this.userId,
        scenarioId: sessionStorage.getItem("scenarioId"),
      })
        .then((res) => {
          console.log(0);
          this.startTime = new Date(res.data.data.startTime).getTime();
          this.endTime = new Date(res.data.data.endTime).getTime();
          console.log("初始化动目标数据-startTime---->", this.startTime);
          console.log("初始化动目标数据-endTime---->", this.endTime);
          console.log("初始化动目标数据---->", res.data.data);
          this.initMovingTarget = res.data.data.target;
          this.EV_MovingTarget(res.data.data.target);
        })
        .then(() => {
          // 建立连接
          console.log(111);
          this.sseEmitterInit();
        })
        .then(() => {
          // 推演服务数据
          pushInferServer({
            userId: this.userId,
            gameId: sessionStorage.getItem("gameId"),
          });
        });
    },
    // 建立连接
    sseEmitterInit() {
      console.log(222);
      const url = Url.ip_config + "/sse/connect";
      if (!this.emitter) {
        this.emitter = new SseEmitter(url, this.userId, this.getMessage);
      }
    },
    // 地图初始化
    mapInit() {
      const { mapServe } = window;
      let imageryProvider = new Cesium.SingleTileImageryProvider({
        //引入本地图片
        url:require("@/assets/globe.jpg"),
      });
      // 主界面地球
      window.viewer = new Cesium.Viewer("map", {
        animation: true, //动目标的时候要设置为true
        baseLayerPicker: false,
        fullscreenButton: true,
        geocoder: true,
        infoBox: false,
        sceneModePicker: true,
        selectionIndicator: false,
        timeline: true, //动目标的时候要设置为true
        navigationHelpButten: false,
      });
      //设置初始化镜头
      setTimeout(() =>{
        viewer.camera.setView({
          destination: Cesium.Cartesian3.fromDegrees(this.mtFlightDatas[0].lon,this.mtFlightDatas[0].lat, 4000.0),
        });
      },1000)
      const scene = viewer.scene;
      const imageryLayers = viewer.scene.imageryLayers;
      viewer.timeline.container.style.visibility = "hidden";
      viewer.animation.container.style.visibility = "hidden";

      // 我方视角地球
      window.viewer1 = new Cesium.Viewer("map_1", {
        imageryProvider:imageryProvider,
        animation: true, //动目标的时候要设置为true
        baseLayerPicker: false,
        fullscreenButton: false,
        geocoder: false,
        homeButton: false,
        infoBox: false,
        sceneModePicker: false,
        selectionIndicator: false,
        timeline: true, //动目标的时候要设置为true
        navigationHelpButten: false,
      });
      const scene1 = viewer1.scene;
      const imageryLayers1 = viewer1.scene.imageryLayers;
      viewer1.timeline.container.style.visibility = "hidden";
      viewer1.animation.container.style.visibility = "hidden";

      // 敌方视角地球
      window.viewer2 = new Cesium.Viewer("map_2", {
        imageryProvider:imageryProvider,
        animation: true, //动目标的时候要设置为true
        baseLayerPicker: false,
        fullscreenButton: false,
        geocoder: false,
        homeButton: false,
        infoBox: false,
        sceneModePicker: false,
        selectionIndicator: false,
        timeline: true, //动目标的时候要设置为true
        navigationHelpButten: false,
      });
      const scene2 = viewer2.scene;
      const imageryLayers2 = viewer2.scene.imageryLayers;
      viewer2.timeline.container.style.visibility = "hidden";
      viewer2.animation.container.style.visibility = "hidden";    
      
      // 加载基础影像
      const baseMapObj = window.baseImage;
      baseMapObj.tilingScheme = new Cesium.GeographicTilingScheme();
      baseMapObj.rectangle = Cesium.Rectangle.MAX_VALUE;
      const imageryProvider1 = new Cesium.WebMapTileServiceImageryProvider(
        baseMapObj
      );
      imageryLayers.addImageryProvider(imageryProvider1);

      // 加载地形
      // const terrainProvider = new Cesium.GoogleEarthEnterpriseTerrainProvider({
      //   url: mapServe.terraiImageUrl,
      // });
      // scene.terrainProvider = terrainProvider;
      this.init();
    },
    entityMovingTarget() {
      //数据
      var pointsInfo = {
        s_id: "40905",
        //开始时间
        start: 1604937600000,
        //结束时间
        end: 1604938600000,
        //时间轴开始时间
        start_for_timeline: 1604937600000,
        //时间轴结束时间
        end_for_timeline: 1604938600000,
        on_circle_milliseconds: 1000,
        sat_locations_array: [
          //a为经度，b为纬度，c为高度具体可根据自己的数据来修改下面方法内对应的属性名称
          {
            a: 16.644356,
            b: 16.906161,
            c: 0,
          },
          {
            a: 5.961894,
            b: 54.23244,
            c: 0,
          },
          {
            a: -95.029766,
            b: 82.126711,
            c: 0,
          },
        ],
      };
      var entity_sat = viewer.entities.add({
        // id是唯一的不能重复。
        id: "111",
        //加载模型
        model: {
          //uri: 'weixin.gltf',
          uri: "Assets/EMExtensions/gltf/ZhongGuoHaiJing3210_D+M2+R.gltf",
          minimumPixelSize: 30,
        },
        //路径
        path: {
          leadTime: 0,
          resolution: 1,
          material: new Cesium.PolylineGlowMaterialProperty({
            glowPower: 0.1,
            color: Cesium.Color.PINK,
          }),
          width: 5,
        },
      });
      var entity_sat1 = viewer1.entities.add({
        // id是唯一的不能重复。
        id: "222",
        //加载模型
        model: {
          //uri: 'weixin.gltf',
          uri: "Assets/EMExtensions/gltf/ZhongGuoHaiJing3210_D+M2+R.gltf",
          minimumPixelSize: 30,
        },
        //路径
        path: {
          leadTime: 0,
          resolution: 1,
          material: new Cesium.PolylineGlowMaterialProperty({
            glowPower: 0.1,
            color: Cesium.Color.PINK,
          }),
          width: 5,
        },
      });
      var situation_time_start = pointsInfo.start;
      var situation_time_end = pointsInfo.end;
      // 下边两个时间用于控制时间轴日期显示
      var situation_time_start_for_timeline = pointsInfo.start_for_timeline;
      var situation_time_end_for_timeline = pointsInfo.end_for_timeline;
      // 原始位置、位置加上经度偏移
      var sat_locations_array = pointsInfo.sat_locations_array;
      var on_circle_milliseconds = pointsInfo.on_circle_milliseconds;
      // 起始时间（卫星可见）
      var start = Cesium.JulianDate.fromDate(new Date(situation_time_start));
      var stop = Cesium.JulianDate.fromDate(new Date(situation_time_end));
      // 起始时间（时间轴）
      var start_for_timeline = Cesium.JulianDate.fromDate(
        new Date(situation_time_start_for_timeline)
      );
      var stop_for_timeline = Cesium.JulianDate.fromDate(
        new Date(situation_time_end_for_timeline)
      );
      // // 设置始时钟始时间
      viewer.clock.startTime = start_for_timeline.clone();
      // 设置始终停止时间
      viewer.clock.stopTime = stop_for_timeline.clone();
      //设置时间轴从什么时间开始进行（不是设置时间轴的起始时间）
      viewer.clock.currentTime = start_for_timeline.clone();
      // 时间轴
      viewer.timeline.zoomTo(start_for_timeline, stop_for_timeline);
      // 循环执行，到达终止时间，重新从起点时间开始
      viewer.clock.clockRange = Cesium.ClockRange.LOOP_STOP;

      var sat_position_sample = new Cesium.SampledPositionProperty();
      var time_split_min = 10;
      //循环：后台计算出来的位置数组
      for (var i = 0; i < sat_locations_array.length; i++) {
        //添加：按分钟增加时间(注意：要和后台的时间点位置 时间维度一样！！)
        var time = Cesium.JulianDate.addMinutes(
          start,
          i * time_split_min,
          new Cesium.JulianDate()
        );
        //获得：该时间点的实体位置(经纬高)
        var sat_location = sat_locations_array[i];
        var lon = sat_location.a;
        var lat = sat_location.b;
        var alt = sat_location.c;
        var sat_position = Cesium.Cartesian3.fromDegrees(lon, lat, alt);
        //该时间点的 星下点位置
        var sat_position_InInertial = new Cesium.Cartesian3();
        sat_position_InInertial = sat_position;
        sat_position_sample.addSample(time, sat_position_InInertial);
      }
      //差值
      sat_position_sample.setInterpolationOptions({
        interpolationDegree: 5,
        interpolationAlgorithm: Cesium.LagrangePolynomialApproximation,
      });

      // entity_sat.sat_position_sample = sat_position_sample;

      //设置：卫星位置
      entity_sat.position = sat_position_sample;
      //设置：根据所提供的位置计算模型的朝向
      entity_sat.orientation = new Cesium.VelocityOrientationProperty(
        sat_position_sample
      );

      //设置：该卫星的可见时间
      entity_sat.availability = new Cesium.TimeIntervalCollection([
        new Cesium.TimeInterval({
          start: start.clone(),
          stop: stop.clone(),
        }),
      ]);
      viewer.clock.shouldAnimate = true;
      viewer.clock.multiplier = 20;

      viewer.scene.postRender.addEventListener(function () {
        var car_position = Cesium.ReferenceProperty.fromString(
          viewer.entities,
          "111#position"
        );
      });
    },
    // 创建初始动目标
    EV_MovingTarget(data) {
      console.log("创建初始动目标--->", data);
      viewer.scene.postProcessStages.fxaa.enabled = true;
      viewer1.scene.postProcessStages.fxaa.enabled = true;
      viewer2.scene.postProcessStages.fxaa.enabled = true;
      //设置时间
      var sTime = this.startTime;
      var eTime = this.endTime;
      console.log("标准开始时间----->", new Date(sTime));
      console.log("标准开始时间----->", new Date(eTime));
      var timeSpace = eTime - sTime;
      var trainingClock = new Cesium.Clock({
        startTime: Cesium.JulianDate.fromDate(new Date(sTime)),
        currentTime: Cesium.JulianDate.fromDate(new Date(sTime)),
        stopTime: Cesium.JulianDate.fromDate(new Date(eTime)),
        clockStep: Cesium.ClockStep.SYSTEM_CLOCK_MULTIPLIER,
        clockRange: Cesium.ClockRange.UNBOUNDED,
      });
      function DateManager() {}
      DateManager.prototype.addReceiveDataListener = function () {};
      //设置动目标基础类
      var ev_dataMgr = new DateManager();
      ev_mtMgr = new CesiumEMExtensions.EV_MovingTargetManager({
        viewer: viewer,
        ev_dataMgr: ev_dataMgr,
        trainingClock: trainingClock,
        useInstancedColor: false,
        retainOutdatedData: false,
        blShowOutdated: true,
      });
      ev_mtMgr1 = new CesiumEMExtensions.EV_MovingTargetManager({
        viewer: viewer1,
        ev_dataMgr: ev_dataMgr,
        trainingClock: trainingClock,
        useInstancedColor: false,
        retainOutdatedData: false,
        blShowOutdated: true,
      });
      ev_mtMgr2 = new CesiumEMExtensions.EV_MovingTargetManager({
        viewer: viewer2,
        ev_dataMgr: ev_dataMgr,
        trainingClock: trainingClock,
        useInstancedColor: false,
        retainOutdatedData: false,
        blShowOutdated: true,
      });
      //设置标牌
      var ev_mtLabelConfiTable =
        new CesiumEMExtensions.EV_MTLabelConfigurationTable({
          showBackground: false,
          font: "12px sans-serif",
          distanceDisplayCondition: new Cesium.DistanceDisplayCondition(0.00001, 4000.0),
          showLabelLine: false,
        });
      //设置标牌信息
      ev_mtLabelConfiTable.addDisplayFieldPara("名称:", "uId", -1);
      ev_mtLabelConfiTable.addDisplayFieldPara("经度:", "fLon", 2);
      ev_mtLabelConfiTable.addDisplayFieldPara("纬度:", "fLat", 2);
      ev_mtLabelConfiTable.addDisplayFieldPara("海拔:", "fAlt", 2);
      ev_mtMgr.ev_MTLabelConfigurationTables.set(1, ev_mtLabelConfiTable);
      //设置动目标运动
      trainingClock.shouldAnimate = true;
      trainingClock.tick();
      var mtFlightDatas = [];
      var tempMTFlightData;
      //循环创建动目标实体类
      for (var i of data) {
        if (!i.name || !i.position) continue;
        tempMTFlightData = new CesiumEMExtensions.EV_MovingTargetFlightData({
          uId: i.name,
          mtType: 1,
          name: i.name,
          modelType: 1,
          modelUri: Cesium.buildModuleUrl(
            "Assets/EMExtensions/gltf/ZhongGuoHaiJing3210_D+M2+R.gltf"
          ),
          modelIconUri: "Assets/EMExtensions/plane.png",
          modelIconDisplayDistance: new Cesium.DistanceDisplayCondition(
            5000000.0,
            50000000.0
          ), // 可见高度范围
          modelIconScale: 1, // 缩放比
          scale: 1, // 模型大小
          modelLabelPullWireColor:new Cesium.Color(1.0,0.0,0.0,0.0),
          specialAttributes: {},
          ribbonVisible: true, // 设置飘带 模型后面拖的线（轨迹）
          forwardOffset: -10,
          upOffset: 5,
          traceTimeDuration: 3000,
        });
        // 初始位置
        // let posionts = i["算子阶段属性"]["想定阶段属性"]["位置"].split("-")
        console.log(i.position, "i.position");
        if (i.position != "") {
          let positions = i.position.split("-");
          console.log(positions, "positions");
          tempMTFlightData.addTimeAttitude({
            realTime: sTime,
            fLon: Number(positions[0]),
            fLat: Number(positions[1]), 
            fAlt: 0,
            position: Cesium.Cartesian3.fromDegrees(
              Number(positions[0]),
              Number(positions[1]),
              0
            ), 
            nRedOrBlue: 0,
            headingPitchRoll: new Cesium.HeadingPitchRoll(0.0, 0.0, 0.0),
          });
          ev_mtMgr.addMovingTargetTimeAttitude(tempMTFlightData.uId, tempMTFlightData);
          ev_mtMgr1.addMovingTargetTimeAttitude(tempMTFlightData.uId, tempMTFlightData);
          ev_mtMgr2.addMovingTargetTimeAttitude(tempMTFlightData.uId, tempMTFlightData);
          ev_mtMgr.setTraceVisible(CesiumEMExtensions.EV_TraceType.Line, 1, true);
          ev_mtMgr.graduatedColors.set(1, {
            traceRibbonColor: new Cesium.Color(1.0, 0.0, 0.0, 0.7),//轨迹飘带颜色
            traceLineColor: new Cesium.Color(1.0, 0.0, 0.0, 1),//轨迹线颜色
          });
          // ev_mtMgr.lockingTarget(tempMTFlightData.uId);
          this.mtFlightDatas.push({
            lon: Number(positions[0]),
            lat: Number(positions[1]), //目前由于位置的坐标不对所以纬度除以了10做正常纬度值
            // lat: Number(positions[1]) / 10,//目前由于位置的坐标不对所以纬度除以了10做正常纬度值
            rollDeg: 0,
            id: i.name,
            mtFlightData: tempMTFlightData,
          });
          console.log("this.mtFlightDatas-----------", this.mtFlightDatas);
        }
      };
      this.allTargetSelect = this.mtFlightDatas;
      this.ourTargetSelect = this.mtFlightDatas;
      this.enemyTargetSelect = this.mtFlightDatas;
    },
    // 更新实体目标位置信息
    upDateMovingTargets(data) {
      // var curTime = new Date().getTime();
      // console.log('mtFlightDatas', this.mtFlightDatas)
      console.log("更新实体目标位置信息", data, data.pointsInfoList[0]);
      if (!data.pointsInfoList.length) return;
      //   将时间变为毫秒数
      let curTimes = data.curTime + 1000;
      console.log("标准更新时间----->", curTimes);
      //   循环使动目标更新坐标动起来
      for (let i of data.pointsInfoList) {
        for (let l of this.mtFlightDatas) {
          if (i.name == l.id) {
            console.log("目标更新---->", i);
            l.mtFlightData.timeAttitudeCollection = [];
            //设置下一个点的位置经纬高及时间和俯仰滚动偏航
            l.mtFlightData.addTimeAttitude({
              realTime: curTimes,
              fLon: Number(i.lon), // 经度
              fLat: Number(i.lat), // 纬度
              fAlt: Number(i.height), // 高度
              position: Cesium.Cartesian3.fromDegrees(
                Number(i.lon),
                Number(i.lat),
                Number(i.height)
              ), //坐标
              nRedOrBlue: 0,
              headingPitchRoll: new Cesium.HeadingPitchRoll(
                Cesium.Math.toRadians(i.angele),
                0.0,
                0.0
              ),
            });
            ev_mtMgr.addMovingTargetTimeAttitude(
              l.mtFlightData.uId,
              l.mtFlightData
            );
            ev_mtMgr1.addMovingTargetTimeAttitude(
              l.mtFlightData.uId,
              l.mtFlightData
            );
            ev_mtMgr2.addMovingTargetTimeAttitude(
              l.mtFlightData.uId,
              l.mtFlightData
            );
          }
        }
      }
    },
    // 动目标删除方法
    decstoryAllMovingTarget() {
      if (ev_mtMgr) {
        this.emitter.closeSse();
        ev_mtMgr.removeAllMovingTargets();
        ev_mtMgr.destroy();
        ev_mtMgr = undefined;
        mtFlightDatas = [];
      }
    },
    // 接收SseEmitter推送数据
    getMessage(e) {
      const { data } = e;
      console.log(data, "data");
      if (!data.includes("code")) {
        let getData = JSON.parse(data);
        this.upDateMovingTargets(getData);
      }
    },
    selectChange (e) {
      ev_mtMgr.lockingTarget(e);
    },
    selectChange1 (e) {
      ev_mtMgr1.lockingTarget(e);
    },
    selectChange2 (e) {
      ev_mtMgr2.lockingTarget(e);
    },
    // 默认视角
    defaultView() {
      viewer.camera.flyTo({
        destination: Cesium.Cartesian3.fromDegrees(
          this.mtFlightDatas[0].lon,
          this.mtFlightDatas[0].lat, 
          4000.0
        ),
        orientation: {
          heading: Cesium.Math.toRadians(0.0),
          pitch: Cesium.Math.toRadians(-90.0),
          roll: 0.0,
        },
      });
    },
  },
  mounted() {
    // this.init();
    this.mapInit();
    // this.EV_MovingTarget()
    window.ev_mtMgr = null;
    window.ev_mtMgr1 = null;
    window.ev_mtMgr2 = null;
    window.mtFlightDatas = [];
  },
  beforeDestroy() {
    this.emitter.closeSse();
    this.emitter = null;
    this.decstoryAllMovingTarget();
  },
};
</script>
<style scoped lang="scss">
.map-viwer {
  width: 100%;
  height: 100%;
  overflow:hidden
}
.map-viwer #map {
  position:absolute;
  width: 100%;
  height: 100%;
  overflow:hidden
}
.map-viwer #map .toolBar {
  position: absolute;
  z-index: 999;
}
.map-viwer #map span{
  color: rgb(14, 101, 173);
  font-size: 15px;
  font-weight: bolder;
  margin-left: 10px;
  z-index: 999
}
.map-viwer #map button {
  position: absolute;
  top: 10px;
  left: 40%;
  z-index: 999;
}
.map-viwer #map_1 {
  width: 30%;
  height: 40%;
  position: absolute;
  top: 10%;
  left: 68%;
  border: 1px solid lightblue;
  border-radius: 10px;
  background-color:azure;
}
.map-viwer #map_1 span {
  color: rgb(14, 101, 173);
  font-size: 15px;
  font-weight: bolder;
  margin-left: 10px;
}
.map-viwer #map_2 {
  width: 30%;
  height: 40%;
  position: absolute;
  top: 53%;
  left: 68%;
  border: 1px solid lightblue;
  border-radius: 10px;
  background-color:azure;
}
.map-viwer #map_2 span {
  color: red;
  font-size: 15px;
  font-weight: bolder;  
  margin-left: 10px;
}
</style>
