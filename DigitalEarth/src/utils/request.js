import { Message } from 'element-ui';
import axios from 'axios';

//创建一个 axios 实例
const service = axios.create({
    headers: {
        'content-type': 'application/json;charset=UTF-8',
        // 'Content-Type':'multipart/form-data; boundary=----WebKitFormBoundarynl6gT1BKdPWIejNq'
    },
    timeout: 30000, // 请求超时
    baseURL: 'http://localhost:8083',
    baseURL: process.env.VUE_APP_BASE_API
    // withCredentials: true   // 表示跨域请求时是否需要使用凭证（发请求是否携带cookie）
});

// 设置请求此时、请求间隙
service.defaults.retry = 4;
service.defaults.retryDelay = 1000;

//请求拦截器
// service.interceptors.request.use(function (config) {
//     // 在发送请求之前做些什么
//     return config;
// }, function (error) {
//     Message.closeAll();
//     // 对请求错误做些什么
//     Message({
//         type: 'error',
//         message: '请求错误'
//     });
//     return Promise.reject(error);
// });


//添加响应拦截器<==>响应回来后做的事
service.interceptors.response.use(
    // code 为0是正常的，其他都是异常
    function (config) {
        return config;
    },
    function (error) {
        return Promise.reject(error);
    }
);


export default service;