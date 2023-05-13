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
define(["./defined-b681f02d","./Transforms-99c89742","./Matrix4-d3db9505","./Check-436535f3","./ComponentDatatype-46a1cf7a","./GeometryAttribute-ef6ca9ab","./GeometryAttributes-18ccc0d6","./Rectangle-0610a1c7","./Math-5b6faca9","./Interval-49d6e8fc","./_commonjsHelpers-a32ac251","./combine-8b9ba6cb","./RequestType-e53aab71","./RuntimeError-14317824","./WebGLConstants-f100e3dd","./Matrix2-7384588e"],(function(e,t,n,r,a,i,o,c,u,s,m,y,p,d,f,b){"use strict";function w(){this._workerName="createPlaneOutlineGeometry"}w.packedLength=0,w.pack=function(e,t){return t},w.unpack=function(t,n,r){return e.defined(r)?r:new w};const G=new n.Cartesian3(-.5,-.5,0),h=new n.Cartesian3(.5,.5,0);return w.createGeometry=function(){const e=new o.GeometryAttributes,r=new Uint16Array(8),c=new Float64Array(12);return c[0]=G.x,c[1]=G.y,c[2]=G.z,c[3]=h.x,c[4]=G.y,c[5]=G.z,c[6]=h.x,c[7]=h.y,c[8]=G.z,c[9]=G.x,c[10]=h.y,c[11]=G.z,e.position=new i.GeometryAttribute({componentDatatype:a.ComponentDatatype.DOUBLE,componentsPerAttribute:3,values:c}),r[0]=0,r[1]=1,r[2]=1,r[3]=2,r[4]=2,r[5]=3,r[6]=3,r[7]=0,new i.Geometry({attributes:e,indices:r,primitiveType:i.PrimitiveType.LINES,boundingSphere:new t.BoundingSphere(n.Cartesian3.ZERO,Math.sqrt(2))})},function(t,n){return e.defined(n)&&(t=w.unpack(t,n)),w.createGeometry(t)}}));
