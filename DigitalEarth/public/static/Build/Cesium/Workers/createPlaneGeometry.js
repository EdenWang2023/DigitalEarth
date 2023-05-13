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
define(["./defined-b681f02d","./Transforms-99c89742","./Matrix4-d3db9505","./Check-436535f3","./ComponentDatatype-46a1cf7a","./GeometryAttribute-ef6ca9ab","./GeometryAttributes-18ccc0d6","./VertexFormat-1359575c","./Rectangle-0610a1c7","./Math-5b6faca9","./Interval-49d6e8fc","./_commonjsHelpers-a32ac251","./combine-8b9ba6cb","./RequestType-e53aab71","./RuntimeError-14317824","./WebGLConstants-f100e3dd","./Matrix2-7384588e"],(function(e,t,n,a,r,o,i,c,m,u,p,s,y,f,l,b,A){"use strict";function d(t){t=e.defaultValue(t,e.defaultValue.EMPTY_OBJECT);const n=e.defaultValue(t.vertexFormat,c.VertexFormat.DEFAULT);this._vertexFormat=n,this._workerName="createPlaneGeometry"}d.packedLength=c.VertexFormat.packedLength,d.pack=function(t,n,a){return a=e.defaultValue(a,0),c.VertexFormat.pack(t._vertexFormat,n,a),n};const F=new c.VertexFormat,x={vertexFormat:F};d.unpack=function(t,n,a){n=e.defaultValue(n,0);const r=c.VertexFormat.unpack(t,n,F);return e.defined(a)?(a._vertexFormat=c.VertexFormat.clone(r,a._vertexFormat),a):new d(x)};const w=new n.Cartesian3(-.5,-.5,0),v=new n.Cartesian3(.5,.5,0);return d.createGeometry=function(e){const a=e._vertexFormat,c=new i.GeometryAttributes;let m,u;if(a.position){if(u=new Float64Array(12),u[0]=w.x,u[1]=w.y,u[2]=0,u[3]=v.x,u[4]=w.y,u[5]=0,u[6]=v.x,u[7]=v.y,u[8]=0,u[9]=w.x,u[10]=v.y,u[11]=0,c.position=new o.GeometryAttribute({componentDatatype:r.ComponentDatatype.DOUBLE,componentsPerAttribute:3,values:u}),a.normal){const e=new Float32Array(12);e[0]=0,e[1]=0,e[2]=1,e[3]=0,e[4]=0,e[5]=1,e[6]=0,e[7]=0,e[8]=1,e[9]=0,e[10]=0,e[11]=1,c.normal=new o.GeometryAttribute({componentDatatype:r.ComponentDatatype.FLOAT,componentsPerAttribute:3,values:e})}if(a.st){const e=new Float32Array(8);e[0]=0,e[1]=0,e[2]=1,e[3]=0,e[4]=1,e[5]=1,e[6]=0,e[7]=1,c.st=new o.GeometryAttribute({componentDatatype:r.ComponentDatatype.FLOAT,componentsPerAttribute:2,values:e})}if(a.tangent){const e=new Float32Array(12);e[0]=1,e[1]=0,e[2]=0,e[3]=1,e[4]=0,e[5]=0,e[6]=1,e[7]=0,e[8]=0,e[9]=1,e[10]=0,e[11]=0,c.tangent=new o.GeometryAttribute({componentDatatype:r.ComponentDatatype.FLOAT,componentsPerAttribute:3,values:e})}if(a.bitangent){const e=new Float32Array(12);e[0]=0,e[1]=1,e[2]=0,e[3]=0,e[4]=1,e[5]=0,e[6]=0,e[7]=1,e[8]=0,e[9]=0,e[10]=1,e[11]=0,c.bitangent=new o.GeometryAttribute({componentDatatype:r.ComponentDatatype.FLOAT,componentsPerAttribute:3,values:e})}m=new Uint16Array(6),m[0]=0,m[1]=1,m[2]=2,m[3]=0,m[4]=2,m[5]=3}return new o.Geometry({attributes:c,indices:m,primitiveType:o.PrimitiveType.TRIANGLES,boundingSphere:new t.BoundingSphere(n.Cartesian3.ZERO,Math.sqrt(2))})},function(t,n){return e.defined(n)&&(t=d.unpack(t,n)),d.createGeometry(t)}}));
