<!--
 * @Description: 
 * @Version: 2.0
 * @Autor: zhangxin
 * @Date: 2022-11-30 09:45:35
 * @LastEditors: zhangxin
 * @LastEditTime: 2022-12-12 15:40:23
-->
<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import ScenarioSelect from './components/ScenarioSelect.vue';
import MapViewer from './components/MapViewer.vue'
export default {
  name: 'App',
  components: {
    ScenarioSelect,
    MapViewer
  }
}
</script>

<style lang="scss">
html,
body,
#app {
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0;
  margin-left: 0;
}

.cesium-viewer-bottom {
  display: none;
}
</style>
