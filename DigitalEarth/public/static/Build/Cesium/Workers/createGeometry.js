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
define(["./defined-b681f02d","./PrimitivePipeline-85654d6b","./createTaskProcessorWorker","./Transforms-99c89742","./Matrix4-d3db9505","./Check-436535f3","./Math-5b6faca9","./RuntimeError-14317824","./Rectangle-0610a1c7","./Interval-49d6e8fc","./_commonjsHelpers-a32ac251","./combine-8b9ba6cb","./RequestType-e53aab71","./ComponentDatatype-46a1cf7a","./WebGLConstants-f100e3dd","./GeometryAttribute-ef6ca9ab","./Matrix2-7384588e","./GeometryAttributes-18ccc0d6","./GeometryPipeline-7151dba5","./AttributeCompression-055d015a","./EncodedCartesian3-e8f321af","./IndexDatatype-1b44a4e6","./IntersectionTests-3ac7f0c9","./Plane-172c23d7","./WebMercatorProjection-05e4c9ff"],(function(e,t,r,n,o,a,c,i,s,f,d,u,b,m,l,p,y,P,k,C,G,T,W,h,x){"use strict";const A={};function M(t){let r=A[t];return e.defined(r)||("object"==typeof exports?A[r]=r=require(`Workers/${t}`):require([`Workers/${t}`],(function(e){r=e,A[r]=e}))),r}return r((function(r,n){const o=r.subTasks,a=o.length,c=new Array(a);for(let t=0;t<a;t++){const r=o[t],n=r.geometry,a=r.moduleName;if(e.defined(a)){const e=M(a);c[t]=e(n,r.offset)}else c[t]=n}return Promise.all(c).then((function(e){return t.PrimitivePipeline.packCreateGeometryResults(e,n)}))}))}));
