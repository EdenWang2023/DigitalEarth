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
define(["./Matrix4-d3db9505","./Check-436535f3","./defined-b681f02d","./EllipseGeometry-a925dd20","./Rectangle-0610a1c7","./VertexFormat-1359575c","./Math-5b6faca9","./RuntimeError-14317824","./Transforms-99c89742","./Interval-49d6e8fc","./_commonjsHelpers-a32ac251","./combine-8b9ba6cb","./RequestType-e53aab71","./ComponentDatatype-46a1cf7a","./WebGLConstants-f100e3dd","./EllipseGeometryLibrary-b010fa13","./GeometryAttribute-ef6ca9ab","./Matrix2-7384588e","./GeometryAttributes-18ccc0d6","./GeometryInstance-458833d1","./GeometryOffsetAttribute-3e5f3e97","./GeometryPipeline-7151dba5","./AttributeCompression-055d015a","./EncodedCartesian3-e8f321af","./IndexDatatype-1b44a4e6","./IntersectionTests-3ac7f0c9","./Plane-172c23d7"],(function(e,t,i,r,o,a,n,s,l,d,m,c,u,p,y,_,x,G,h,f,g,b,E,v,w,A,M){"use strict";function C(e){const t=(e=i.defaultValue(e,i.defaultValue.EMPTY_OBJECT)).radius,o={center:e.center,semiMajorAxis:t,semiMinorAxis:t,ellipsoid:e.ellipsoid,height:e.height,extrudedHeight:e.extrudedHeight,granularity:e.granularity,vertexFormat:e.vertexFormat,stRotation:e.stRotation,shadowVolume:e.shadowVolume};this._ellipseGeometry=new r.EllipseGeometry(o),this._workerName="createCircleGeometry"}C.packedLength=r.EllipseGeometry.packedLength,C.pack=function(e,t,i){return r.EllipseGeometry.pack(e._ellipseGeometry,t,i)};const R=new r.EllipseGeometry({center:new e.Cartesian3,semiMajorAxis:1,semiMinorAxis:1}),V={center:new e.Cartesian3,radius:void 0,ellipsoid:o.Ellipsoid.clone(o.Ellipsoid.UNIT_SPHERE),height:void 0,extrudedHeight:void 0,granularity:void 0,vertexFormat:new a.VertexFormat,stRotation:void 0,semiMajorAxis:void 0,semiMinorAxis:void 0,shadowVolume:void 0};return C.unpack=function(t,n,s){const l=r.EllipseGeometry.unpack(t,n,R);return V.center=e.Cartesian3.clone(l._center,V.center),V.ellipsoid=o.Ellipsoid.clone(l._ellipsoid,V.ellipsoid),V.height=l._height,V.extrudedHeight=l._extrudedHeight,V.granularity=l._granularity,V.vertexFormat=a.VertexFormat.clone(l._vertexFormat,V.vertexFormat),V.stRotation=l._stRotation,V.shadowVolume=l._shadowVolume,i.defined(s)?(V.semiMajorAxis=l._semiMajorAxis,V.semiMinorAxis=l._semiMinorAxis,s._ellipseGeometry=new r.EllipseGeometry(V),s):(V.radius=l._semiMajorAxis,new C(V))},C.createGeometry=function(e){return r.EllipseGeometry.createGeometry(e._ellipseGeometry)},C.createShadowVolume=function(e,t,i){const r=e._ellipseGeometry._granularity,o=e._ellipseGeometry._ellipsoid,n=t(r,o),s=i(r,o);return new C({center:e._ellipseGeometry._center,radius:e._ellipseGeometry._semiMajorAxis,ellipsoid:o,stRotation:e._ellipseGeometry._stRotation,granularity:r,extrudedHeight:n,height:s,vertexFormat:a.VertexFormat.POSITION_ONLY,shadowVolume:!0})},Object.defineProperties(C.prototype,{rectangle:{get:function(){return this._ellipseGeometry.rectangle}},textureCoordinateRotationPoints:{get:function(){return this._ellipseGeometry.textureCoordinateRotationPoints}}}),function(t,r){return i.defined(r)&&(t=C.unpack(t,r)),t._ellipseGeometry._center=e.Cartesian3.clone(t._ellipseGeometry._center),t._ellipseGeometry._ellipsoid=o.Ellipsoid.clone(t._ellipseGeometry._ellipsoid),C.createGeometry(t)}}));
