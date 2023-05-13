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
define(["./defined-b681f02d","./RequestType-e53aab71","./createTaskProcessorWorker","./EV_IndexedDBProvider-bd33ee3c"],(function(e,r,t,s){"use strict";let a;function n(e){const t=self.webkitPostMessage||self.postMessage;try{t({workerType:r.RequestType.TERRAIN})}catch(e){t({})}}return t((function(t,i){const d=t.indexedDB;let o=t.taskData;o.workerTaskID=t.workerTaskID,e.defined(a)?e.defined(a.iDB)&&(o.requestType==r.RequestType.TERRAIN?a.saveTerrainData("EVIDB",1,"terrain",o):o.requestType==r.RequestType.IMAGERY&&a.saveTerrainData("EVIDB",1,"imagery",o)):(a=new s.EV_IndexedDBProvider(d),a.createIDB("EVIDB",1,["model","imagery","terrain","3DTile"],n))}))}));
