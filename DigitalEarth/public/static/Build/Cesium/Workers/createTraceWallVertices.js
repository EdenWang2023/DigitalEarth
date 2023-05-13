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
define(["./createTaskProcessorWorker","./Matrix4-d3db9505","./Transforms-99c89742","./defined-b681f02d","./IndexDatatype-1b44a4e6","./Color-151cb095","./Math-5b6faca9","./Check-436535f3","./RuntimeError-14317824","./Rectangle-0610a1c7","./Interval-49d6e8fc","./_commonjsHelpers-a32ac251","./combine-8b9ba6cb","./RequestType-e53aab71","./WebGLConstants-f100e3dd"],(function(o,r,e,t,a,i,n,s,f,l,c,p,d,u,h){"use strict";return o((function(o,n){var s=o.traceWalls;e.Transforms.localFrameToFixedFrameGenerator("north","west"),new r.Matrix4;for(var f=s.length,l=[],c=0,p=0,d=0;d<f;d++)if(t.defined(s[d])&&s[d].trackPoints.length>1){var u=s[d].trackPoints,h=[],g=u.length;if(g>300){for(var b=g-50,C=Math.floor(b/250)+1,m=g-50-C,v=0;v<m;v+=C){h.push({position:u[v].wcPosition});var y=r.Cartographic.fromCartesian(u[v].wcPosition),w=r.Cartesian3.fromRadians(y.longitude,y.latitude);h.push({position:w}),c+=2}for(;v<g-1;v++){h.push({position:u[v].wcPosition});y=r.Cartographic.fromCartesian(u[v].wcPosition),w=r.Cartesian3.fromRadians(y.longitude,y.latitude);h.push({position:w}),c+=2}}else for(var P=0;P<u.length;P++){h.push({position:u[P].wcPosition});y=r.Cartographic.fromCartesian(u[P].wcPosition),w=r.Cartesian3.fromRadians(y.longitude,y.latitude);h.push({position:w}),c+=2}l.push(h),p+=3*(c-2)}if(0!=l.length){var T=new e.BoundingSphere,B=a.IndexDatatype.createTypedArray(c,p),x=new Float64Array(3*c),R=new Uint8Array(4*c),k=[],F=0,M=0;for(d=0;d<l.length;d++){for(var W=s[d].color,A=(h=l[d]).length,I=0;I<A;I++){k.push(h[I].position),x[3*(M+I)]=h[I].position.x,x[3*(M+I)+1]=h[I].position.y,x[3*(M+I)+2]=h[I].position.z;var S=1-(A-I)/A*1;R[4*(M+I)]=i.Color.floatToByte(W.red),R[4*(M+I)+1]=i.Color.floatToByte(W.green),R[4*(M+I)+2]=i.Color.floatToByte(W.blue),R[4*(M+I)+3]=i.Color.floatToByte(W.alpha*S)}for(var D=0;D+3<A;D+=2)B[F++]=M+D,B[F++]=M+D+1,B[F++]=M+D+2,B[F++]=M+D+1,B[F++]=M+D+3,B[F++]=M+D+2;M+=A}return k.length>0&&(T=e.BoundingSphere.fromPoints(k)),o.traceWalls=void 0,{positionBuffer:x.buffer,colorBuffer:R.buffer,indices:B.buffer,boundingSphere:T}}}))}));
