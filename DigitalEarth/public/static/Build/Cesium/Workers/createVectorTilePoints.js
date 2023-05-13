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
define(["./AttributeCompression-055d015a","./Matrix4-d3db9505","./Rectangle-0610a1c7","./Math-5b6faca9","./createTaskProcessorWorker","./ComponentDatatype-46a1cf7a","./defined-b681f02d","./Check-436535f3","./WebGLConstants-f100e3dd","./Matrix2-7384588e","./RuntimeError-14317824"],(function(e,a,t,n,r,i,o,s,c,u,p){"use strict";const f=32767,l=new a.Cartographic,d=new a.Cartesian3,h=new t.Rectangle,m=new t.Ellipsoid,C={min:void 0,max:void 0};return r((function(r,i){const o=new Uint16Array(r.positions);!function(e){e=new Float64Array(e);let a=0;C.min=e[a++],C.max=e[a++],t.Rectangle.unpack(e,a,h),a+=t.Rectangle.packedLength,t.Ellipsoid.unpack(e,a,m)}(r.packedBuffer);const s=h,c=m,u=C.min,p=C.max,g=o.length/3,b=o.subarray(0,g),k=o.subarray(g,2*g),w=o.subarray(2*g,3*g);e.AttributeCompression.zigZagDeltaDecode(b,k,w);const y=new Float64Array(o.length);for(let e=0;e<g;++e){const t=b[e],r=k[e],i=w[e],o=n.CesiumMath.lerp(s.west,s.east,t/f),h=n.CesiumMath.lerp(s.south,s.north,r/f),m=n.CesiumMath.lerp(u,p,i/f),C=a.Cartographic.fromRadians(o,h,m,l),g=c.cartographicToCartesian(C,d);a.Cartesian3.pack(g,y,3*e)}return i.push(y.buffer),{positions:y.buffer}}))}));
