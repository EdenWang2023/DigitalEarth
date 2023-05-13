/*
 * @Description: 
 * @Version: 2.0
 * @Autor: zhangxin
 * @Date: 2022-11-30 09:45:35
 * @LastEditors: zhangxin
 * @LastEditTime: 2022-12-14 09:50:38
 */
import Vue from 'vue'
import App from './App.vue'
import router from './router/index.js'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.config.productionTip = false;
Vue.use(ElementUI);
new Vue({
  router,
  ElementUI,
  render: h => h(App)
}).$mount('#app')
