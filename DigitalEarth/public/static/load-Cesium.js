/*
 * @Description: 
 * @Version: 2.0
 * @Autor: zhangxin
 * @Date: 2022-12-13 16:06:07
 * @LastEditors: zhangxin
 * @LastEditTime: 2022-12-13 16:06:17
 */
import * as Cesium from "./Build/Cesium/index.js";
//CesiumExternal模块对Cesium模块有依赖，需要挂载在全局对象下
window.Cesium = Cesium;
//插件必须在Cesium主库被加载以后才能开始进行加载
document.onreadystatechange = function () {
    if (document.readyState == 'complete') {
        Promise.all([
            import('./Build/Cesium/indexExternal.js'),
            import('./Build/Cesium/indexEMExtensions.js'),
            import('./Build/Cesium/indexVideoFusion.js')
        ]).then(modules => {
            if (typeof window.startup === "function") {
                window.startup({
                    Cesium: Cesium,
                    CesiumExternal: modules[0],
                    CesiumEMExtensions: modules[1],
                    CesiumVideoFusion: modules[2],
                });
            } else {
                throw Cesium.RuntimeError("startup is not a function!");
            }
        })
    }
}