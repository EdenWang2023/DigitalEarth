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
define(["./defined-b681f02d","./RequestType-e53aab71","./createTaskProcessorWorker","./EV_IndexedDBProvider-bd33ee3c"],(function(e,s,t,r){"use strict";let a;function i(e){const t=self.webkitPostMessage||self.postMessage;try{t({workerType:s.RequestType.TILES3D,dataName:e.keyName,workerTaskID:e.workerTaskID,data:void 0,meshPrimitives:[]})}catch(e){t({})}}function o(e,t){(new Date).getTime(),e.requestTime;const r=self.webkitPostMessage||self.postMessage;try{r({workerType:s.RequestType.TILES3D,dataName:e.keyName,workerTaskID:e.workerTaskID,data:t,meshPrimitives:e.meshPrimitives})}catch(e){r({})}}return t((function(s,t){const d=s.indexedDB,n=s.taskData;if(n.workerTaskID=s.workerTaskID,e.defined(a))if(e.defined(a.iDB)){const e=new Date;n.requestTime=e.getTime(),a.download3DTileArrayBuffer("EVIDB",1,"3DTile",n,i,o)}else i(n);else a=new r.EV_IndexedDBProvider(d),a.createIDB("EVIDB",1,["model","imagery","terrain","3DTile"]),i(n)}))}));
