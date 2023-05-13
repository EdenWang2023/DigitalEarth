/**
 * @license
 * Cesium - https://github.com/CesiumGS/cesium
 * Version 1.96
 *
 * Copyright 2011-2022 Cesium Contributors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * Columbus View (Pat. Pend.)
 *
 * Portions licensed separately.
 * See https://github.com/CesiumGS/cesium/blob/main/LICENSE.md for full licensing details.
 */
define(["./defined-b681f02d","./RequestType-e53aab71","./createTaskProcessorWorker","./EV_IndexedDBProvider-bd33ee3c"],(function(e,a,r,t){"use strict";let s;function o(e){const a=self.webkitPostMessage||self.postMessage;try{a({workerType:e.requestType,dataName:e.keyName,workerTaskID:e.workerTaskID,data:void 0})}catch(e){a({})}}function d(e,a){let r=self.webkitPostMessage||self.postMessage;try{r({workerType:e.requestType,dataName:e.keyName,workerTaskID:e.workerTaskID,level:e.level,x:e.x,y:e.y,upsample:e.upsample,data:a})}catch(e){r({})}}return r((function(r,n){const i=r.indexedDB;let k=r.taskData;k.workerTaskID=r.workerTaskID,e.defined(s)?e.defined(s.iDB)?k.requestType==a.RequestType.TERRAIN?s.downloadTerrainData("EVIDB",1,"terrain",k,o,d):k.requestType==a.RequestType.IMAGERY&&s.downloadTerrainData("EVIDB",1,"imagery",k,o,d):o(k):(s=new t.EV_IndexedDBProvider(i),s.createIDB("EVIDB",1,["model","imagery","terrain","3DTile"]),o(k))}))}));
