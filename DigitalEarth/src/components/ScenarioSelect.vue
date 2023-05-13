<template>
  <div class="scenario_body">
    <div class="scenario_header">
      <div class="scenario_title">
        <img src="../assets/list-title.png"/>
      </div>
    </div>
    <div class="ele_table">
      <el-table :data="scenarioLists" 
        border 
        style="width: 80%;margin-left: 10%;margin-top: 2%;"
        @row-click="handleClick"
        >
        <el-table-column prop="scenarioName" label="想定名称" width="180" height="30"/>
        <el-table-column prop="homeName" label="房间名称" width="180" height="30"/>
        <el-table-column prop="redblueUser" label="用户" width="180" height="30"/>
        <el-table-column prop="startTime" label="已开始时间" height="30"/>
        <el-table-column prop="redCamp" label="红方" height="30"/>
        <el-table-column prop="blueCamp" label="蓝方" height="30"/>
        <el-table-column prop="scenarioId" label="scenarioId" height="30" v-if="false"/>
        <el-table-column prop="gameId" label="gameId" height="30" v-if="false"/>
      </el-table>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import {nanoid} from 'nanoid'
import { getInitialize, pushInferServer } from "@/api/api.js"
import SseEmitter from "@/utils/sseEmitter"
import Url from "@/url/url"
export default {
  name: 'ScenarioSelect',
  props: {
    msg: String
  },
  data() {
    return {
      scenarioLists: [],
      userId:nanoid(),
    }
  },
  methods: {
    //想定列表点击后传gameId和scenarioId
    handleClick(row) {
      console.log(this.userId)
      sessionStorage.setItem("gameId", row.gameId);
      sessionStorage.setItem("scenarioId", row.scenarioId);
      sessionStorage.setItem("userId", this.userId);
      this.sseDelete();
      //点击跳转到地图页面
      this.$router.push({name: 'Earth', path: '/earth'})
    },
    //关闭列表推送连接
    sseDelete() {
      axios.get(process.env.VUE_APP_BASE_API + '/sse/delete',{
        params: {
          userId:this.userId
        }
      })
    },
    // 关闭Sse连接
    closeSse() {
      this.source.close();
      console.log("close");
    },
    //获取初始化信息
    pushInferList() {
      axios.get(process.env.VUE_APP_BASE_API + '/sse/push/inferList',{
        params: {
          userId:this.userId
        }
      })
    }
  },
  mounted() {
    window.addEventListener('beforeunload', this.sseDelete)
    var that = this;
    const userId = this.userId;
    this.source = new EventSource(Url.ip_config + '/sse/connect/' + userId);
    this.source.addEventListener('message', function (e) {
      if (JSON.parse(e.data).rehearsal) {
        that.scenarioLists = [];
        JSON.parse(e.data).rehearsal.forEach(e => {
          if (e.gameId) {
            that.scenarioLists.push(e);
          }
        });
      }
    });
    this.source.addEventListener('error', function (e) {
        if (e.readyState === EventSource.CLOSED) {
            console.log('连接关闭')
        } else {
            console.log(e);
        }
    }, false);
    setTimeout(function () {
      that.pushInferList();
    }, 100);
  },
  created() {
  },
  beforeDestroy() {
    window.removeEventListener('beforeunload', this.sseDelete)
  }, 
}
</script>
<style scoped>
.scenario_body {
  height: 1920px;
  width: 100%;
  margin: 0;
  padding: 0;
  position: relative;
  background:url('../assets/list-bg.png') no-repeat center top;
  background-size:cover;
  background-attachment:fixed;
  position:fixed;
}
.scenario_header {
  position: relative;
  top: 0;
  left: 0;
  width: 100%;
  height: 78px;
  background:url('../assets/list-header.png') no-repeat center top;
  opacity: 1;
}
.scenario_title {
  position: relative;
  top: 0px;
  left: 0;
  width: 295px;
  height: 35px;
  opacity: 1;
  /* 居中 */
  margin: 0 auto;
}
.scenario_title img {
  position: relative;
  top: 17px;
  left: 0;
  width: 295px;
  height: 35px;
}
.select_tool > Option {
  width: 100%;
  height: 50px;
  /* background-color: #152979; */
  opacity: 0.5;
  font-size: 50px;
  color: azure;
}
.select_tool > Option:hover {
  background-color: green;
  cursor: pointer;
  opacity: 1;
}
.ele_table {
  position: relative;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 1;
}
.ele_table /deep/  .el-table, .el-table__expanded-cell {
    background-color: transparent;
    color: white;
}
.ele_table /deep/ .el-table tr {
    background-color: transparent!important;
}
/* 表头背景颜色透明 */
.ele_table /deep/ .el-table th {
    background-color: transparent!important;
}

.ele_table ::v-deep .el-table__body tr:hover > td {
     background-color: grey !important;
     cursor: pointer;
 } 
.el-table tbody tr { 
    pointer-events:none; 
}
</style>