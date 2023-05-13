
// 引入request
import request from "@/utils/request";
import Url from "@/url/url"

// 获取初始化数据
export const getInitialize = (params) => {
    return request({
        url: Url.get_Initialize + "?scenarioId=" + params.scenarioId,
        method: 'get',
    })
}
// 推演服务数据
export const pushInferServer = (params) => {
    return request({
        url: Url.get_inferServer + "/" + params.userId + "?gameId=" + params.gameId,
        method: 'get',
    })
}