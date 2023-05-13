/*
 * @Description: 
 * @Version: 2.0
 * @Autor: zhangxin
 * @Date: 2022-12-14 09:46:47
 * @LastEditors: wangyindi
 * @LastEditTime: 2023-05-13 10:46:51
 */
import { EventSourcePolyfill } from "event-source-polyfill";
class SseEmitter {
    constructor(url, userId, callback) {
        this.source = new EventSourcePolyfill(`${url}/${userId}`);
        this.source.onopen = this.onopen;
        this.source.onmessage = callback;
        this.source.onerror = this.onerror;
        this.source.closeSse = this.closeSse;
        // 监听窗口关闭事件，主动去关闭sse连接，如果服务端设置永不过期，浏览器关闭后手动清理服务端数据
        window.onbeforeunload = function () {
            this.closeSse();
        };
    }
    //建立连接
    onopen (e) {
        console.debug('建立连接', e);
    }
    // 错误
    onerror (e) {
        console.error('错误', e.error.message);
    }
    // 关闭
    closeSse () {
        this.source.close();
        const httpRequest = new XMLHttpRequest();
        httpRequest.open('GET', 'http://localhost:8083/sse/close/', true);
        httpRequest.send();
        console.log("关闭连接");
    }
}

export default SseEmitter;