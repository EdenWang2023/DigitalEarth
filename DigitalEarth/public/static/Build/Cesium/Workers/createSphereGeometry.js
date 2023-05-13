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
define(["./defined-b681f02d","./Matrix4-d3db9505","./Check-436535f3","./EllipsoidGeometry-15457086","./VertexFormat-1359575c","./Math-5b6faca9","./RuntimeError-14317824","./Transforms-99c89742","./Rectangle-0610a1c7","./Interval-49d6e8fc","./_commonjsHelpers-a32ac251","./combine-8b9ba6cb","./RequestType-e53aab71","./ComponentDatatype-46a1cf7a","./WebGLConstants-f100e3dd","./GeometryAttribute-ef6ca9ab","./Matrix2-7384588e","./GeometryAttributes-18ccc0d6","./GeometryOffsetAttribute-3e5f3e97","./IndexDatatype-1b44a4e6"],(function(e,t,i,r,a,o,n,s,c,d,l,m,p,u,f,y,G,b,k,x){"use strict";function _(i){const a=e.defaultValue(i.radius,1),o={radii:new t.Cartesian3(a,a,a),stackPartitions:i.stackPartitions,slicePartitions:i.slicePartitions,vertexFormat:i.vertexFormat};this._ellipsoidGeometry=new r.EllipsoidGeometry(o),this._workerName="createSphereGeometry"}_.packedLength=r.EllipsoidGeometry.packedLength,_.pack=function(e,t,i){return r.EllipsoidGeometry.pack(e._ellipsoidGeometry,t,i)};const v=new r.EllipsoidGeometry,P={radius:void 0,radii:new t.Cartesian3,vertexFormat:new a.VertexFormat,stackPartitions:void 0,slicePartitions:void 0};return _.unpack=function(i,o,n){const s=r.EllipsoidGeometry.unpack(i,o,v);return P.vertexFormat=a.VertexFormat.clone(s._vertexFormat,P.vertexFormat),P.stackPartitions=s._stackPartitions,P.slicePartitions=s._slicePartitions,e.defined(n)?(t.Cartesian3.clone(s._radii,P.radii),n._ellipsoidGeometry=new r.EllipsoidGeometry(P),n):(P.radius=s._radii.x,new _(P))},_.createGeometry=function(e){return r.EllipsoidGeometry.createGeometry(e._ellipsoidGeometry)},function(t,i){return e.defined(i)&&(t=_.unpack(t,i)),_.createGeometry(t)}}));
