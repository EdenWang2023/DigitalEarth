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
define(["./Transforms-99c89742","./Matrix4-d3db9505","./Check-436535f3","./ComponentDatatype-46a1cf7a","./defined-b681f02d","./GeometryAttribute-ef6ca9ab","./GeometryAttributes-18ccc0d6","./GeometryOffsetAttribute-3e5f3e97","./Rectangle-0610a1c7","./Math-5b6faca9","./Interval-49d6e8fc","./_commonjsHelpers-a32ac251","./combine-8b9ba6cb","./RequestType-e53aab71","./RuntimeError-14317824","./WebGLConstants-f100e3dd","./Matrix2-7384588e"],(function(e,t,n,a,i,r,o,u,s,m,f,c,d,p,b,l,y){"use strict";const C=new t.Cartesian3;function A(e){const n=(e=i.defaultValue(e,i.defaultValue.EMPTY_OBJECT)).minimum,a=e.maximum;this._min=t.Cartesian3.clone(n),this._max=t.Cartesian3.clone(a),this._offsetAttribute=e.offsetAttribute,this._workerName="createBoxOutlineGeometry"}A.fromDimensions=function(e){const n=(e=i.defaultValue(e,i.defaultValue.EMPTY_OBJECT)).dimensions,a=t.Cartesian3.multiplyByScalar(n,.5,new t.Cartesian3);return new A({minimum:t.Cartesian3.negate(a,new t.Cartesian3),maximum:a,offsetAttribute:e.offsetAttribute})},A.fromAxisAlignedBoundingBox=function(e){return new A({minimum:e.minimum,maximum:e.maximum})},A.packedLength=2*t.Cartesian3.packedLength+1,A.pack=function(e,n,a){return a=i.defaultValue(a,0),t.Cartesian3.pack(e._min,n,a),t.Cartesian3.pack(e._max,n,a+t.Cartesian3.packedLength),n[a+2*t.Cartesian3.packedLength]=i.defaultValue(e._offsetAttribute,-1),n};const x=new t.Cartesian3,_=new t.Cartesian3,w={minimum:x,maximum:_,offsetAttribute:void 0};return A.unpack=function(e,n,a){n=i.defaultValue(n,0);const r=t.Cartesian3.unpack(e,n,x),o=t.Cartesian3.unpack(e,n+t.Cartesian3.packedLength,_),u=e[n+2*t.Cartesian3.packedLength];return i.defined(a)?(a._min=t.Cartesian3.clone(r,a._min),a._max=t.Cartesian3.clone(o,a._max),a._offsetAttribute=-1===u?void 0:u,a):(w.offsetAttribute=-1===u?void 0:u,new A(w))},A.createGeometry=function(n){const s=n._min,m=n._max;if(t.Cartesian3.equals(s,m))return;const f=new o.GeometryAttributes,c=new Uint16Array(24),d=new Float64Array(24);d[0]=s.x,d[1]=s.y,d[2]=s.z,d[3]=m.x,d[4]=s.y,d[5]=s.z,d[6]=m.x,d[7]=m.y,d[8]=s.z,d[9]=s.x,d[10]=m.y,d[11]=s.z,d[12]=s.x,d[13]=s.y,d[14]=m.z,d[15]=m.x,d[16]=s.y,d[17]=m.z,d[18]=m.x,d[19]=m.y,d[20]=m.z,d[21]=s.x,d[22]=m.y,d[23]=m.z,f.position=new r.GeometryAttribute({componentDatatype:a.ComponentDatatype.DOUBLE,componentsPerAttribute:3,values:d}),c[0]=4,c[1]=5,c[2]=5,c[3]=6,c[4]=6,c[5]=7,c[6]=7,c[7]=4,c[8]=0,c[9]=1,c[10]=1,c[11]=2,c[12]=2,c[13]=3,c[14]=3,c[15]=0,c[16]=0,c[17]=4,c[18]=1,c[19]=5,c[20]=2,c[21]=6,c[22]=3,c[23]=7;const p=t.Cartesian3.subtract(m,s,C),b=.5*t.Cartesian3.magnitude(p);if(i.defined(n._offsetAttribute)){const e=d.length,t=n._offsetAttribute===u.GeometryOffsetAttribute.NONE?0:1,i=new Uint8Array(e/3).fill(t);f.applyOffset=new r.GeometryAttribute({componentDatatype:a.ComponentDatatype.UNSIGNED_BYTE,componentsPerAttribute:1,values:i})}return new r.Geometry({attributes:f,indices:c,primitiveType:r.PrimitiveType.LINES,boundingSphere:new e.BoundingSphere(t.Cartesian3.ZERO,b),offsetAttribute:n._offsetAttribute})},function(e,t){return i.defined(t)&&(e=A.unpack(e,t)),A.createGeometry(e)}}));
