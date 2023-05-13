// 地图服务URL地址
var mapServe = {
    // 基础影像 - 国恒
    // baseImageUrl: "http://183.223.249.238:3600/services/wgs84/startlvlone/wmts?REQUEST=GetTile&version=1.0.0&service=wmts&layer=geearth&style={style}&TILEMATRIXSET={TileMatrixSet}&TILEMATRIX={TileMatrix}&TILEROW={TileRow}&TILECOL={TileCol}",
    // 地形 - 国恒
    terraiImageUrl: "http://183.223.249.238:9877",

    // 基础影像 - 国遥
    baseImageUrl:
        "http://47.94.8.209:8080/earthview/services/2000New/RasterService/WMTS?tilematrix={TileMatrix}&serviceName=2000New&layer=2000New&style={style}&tilerow={TileRow}&tilecol={TileCol}&tilematrixset={TileMatrixSet}&format=image%2Fjpg&service=WMTS&version=1.0.0&request=GetTile",
};

// SseEmitter建立连接服务地址
var sseEmitterServer = "http://localhost:8083/sse/connect";

// 基础影像 - 国恒
// var baseImage = {
//     url: mapServe.baseImageUrl,
//     format: "tiles",
//     layer: "geearth",
//     style: "default",
//     tileMatrixSetID: "ge",
//     tileMatrixLabels: [
//         "1",
//         "2",
//         "3",
//         "4",
//         "5",
//         "6",
//         "7",
//         "8",
//         "9",
//         "10",
//         "11",
//         "12",
//         "13",
//         "14",
//         "15",
//         "16",
//         "17",
//         "18",
//         "19",
//         "20",
//     ],
//     minimumLevel: 0,
//     maximumLevel: 19,
// }
// 基础影像 - 国遥
var baseImage = {
    url: mapServe.baseImageUrl,
    format: "image%2Fjpg",
    layer: "2000New",
    style: "default",
    tileMatrixSetID: "OGC_WebMercator",
    tileMatrixLabels: [
        "1",
        "2",
        "3",
        "4",
        "5",
        "6",
        "7",
        "8",
        "9",
        "10",
        "11",
        "12",
        "13",
        "14",
        "15",
        "16",
        "17",
        "18",
        "19",
        "20",
    ],
    minimumLevel: 0,
    maximumLevel: 19,
}; 
