import Vue from 'vue'
import VueRouter from 'vue-router'
import ScenarioSelect from '../components/ScenarioSelect.vue'
import MapViewer from '../components/MapViewer.vue'
Vue.use(VueRouter)      //Vue中使用router插件

const routes = [        //路由配置，配置路由路径与组件的对应关系
  {
    path: '/',
    redirect: '/scenario'
  },
  {
    path: '/scenario',
    name: 'Scenario',
    component: ScenarioSelect
  },
  {
    path: '/earth',
    name: 'Earth',
    component: MapViewer
  }
]
const router = new VueRouter({ //新建路由实例
  routes
})
export default router  //导出路由实例，在main.js中导入使用