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
define(["./Matrix4-d3db9505","./Check-436535f3","./defined-b681f02d","./EllipseOutlineGeometry-9f4005be","./Rectangle-0610a1c7","./Math-5b6faca9","./RuntimeError-14317824","./Transforms-99c89742","./Interval-49d6e8fc","./_commonjsHelpers-a32ac251","./combine-8b9ba6cb","./RequestType-e53aab71","./ComponentDatatype-46a1cf7a","./WebGLConstants-f100e3dd","./EllipseGeometryLibrary-b010fa13","./GeometryAttribute-ef6ca9ab","./Matrix2-7384588e","./GeometryAttributes-18ccc0d6","./GeometryOffsetAttribute-3e5f3e97","./IndexDatatype-1b44a4e6"],(function(e,i,t,r,n,l,s,o,a,c,d,u,m,p,y,f,G,_,b,h){"use strict";function x(e){const i=(e=t.defaultValue(e,t.defaultValue.EMPTY_OBJECT)).radius,n={center:e.center,semiMajorAxis:i,semiMinorAxis:i,ellipsoid:e.ellipsoid,height:e.height,extrudedHeight:e.extrudedHeight,granularity:e.granularity,numberOfVerticalLines:e.numberOfVerticalLines};this._ellipseGeometry=new r.EllipseOutlineGeometry(n),this._workerName="createCircleOutlineGeometry"}x.packedLength=r.EllipseOutlineGeometry.packedLength,x.pack=function(e,i,t){return r.EllipseOutlineGeometry.pack(e._ellipseGeometry,i,t)};const g=new r.EllipseOutlineGeometry({center:new e.Cartesian3,semiMajorAxis:1,semiMinorAxis:1}),E={center:new e.Cartesian3,radius:void 0,ellipsoid:n.Ellipsoid.clone(n.Ellipsoid.UNIT_SPHERE),height:void 0,extrudedHeight:void 0,granularity:void 0,numberOfVerticalLines:void 0,semiMajorAxis:void 0,semiMinorAxis:void 0};return x.unpack=function(i,l,s){const o=r.EllipseOutlineGeometry.unpack(i,l,g);return E.center=e.Cartesian3.clone(o._center,E.center),E.ellipsoid=n.Ellipsoid.clone(o._ellipsoid,E.ellipsoid),E.height=o._height,E.extrudedHeight=o._extrudedHeight,E.granularity=o._granularity,E.numberOfVerticalLines=o._numberOfVerticalLines,t.defined(s)?(E.semiMajorAxis=o._semiMajorAxis,E.semiMinorAxis=o._semiMinorAxis,s._ellipseGeometry=new r.EllipseOutlineGeometry(E),s):(E.radius=o._semiMajorAxis,new x(E))},x.createGeometry=function(e){return r.EllipseOutlineGeometry.createGeometry(e._ellipseGeometry)},function(i,r){return t.defined(r)&&(i=x.unpack(i,r)),i._ellipseGeometry._center=e.Cartesian3.clone(i._ellipseGeometry._center),i._ellipseGeometry._ellipsoid=n.Ellipsoid.clone(i._ellipseGeometry._ellipsoid),x.createGeometry(i)}}));
