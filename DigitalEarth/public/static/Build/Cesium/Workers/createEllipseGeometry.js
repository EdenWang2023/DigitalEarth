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
define(["./Matrix4-d3db9505","./defined-b681f02d","./EllipseGeometry-a925dd20","./Rectangle-0610a1c7","./Check-436535f3","./Math-5b6faca9","./RuntimeError-14317824","./Transforms-99c89742","./Interval-49d6e8fc","./_commonjsHelpers-a32ac251","./combine-8b9ba6cb","./RequestType-e53aab71","./ComponentDatatype-46a1cf7a","./WebGLConstants-f100e3dd","./EllipseGeometryLibrary-b010fa13","./GeometryAttribute-ef6ca9ab","./Matrix2-7384588e","./GeometryAttributes-18ccc0d6","./GeometryInstance-458833d1","./GeometryOffsetAttribute-3e5f3e97","./GeometryPipeline-7151dba5","./AttributeCompression-055d015a","./EncodedCartesian3-e8f321af","./IndexDatatype-1b44a4e6","./IntersectionTests-3ac7f0c9","./Plane-172c23d7","./VertexFormat-1359575c"],(function(e,t,a,r,n,c,i,o,s,d,l,f,b,m,p,y,u,G,E,C,_,x,A,I,M,R,T){"use strict";return function(n,c){return t.defined(c)&&(n=a.EllipseGeometry.unpack(n,c)),n._center=e.Cartesian3.clone(n._center),n._ellipsoid=r.Ellipsoid.clone(n._ellipsoid),a.EllipseGeometry.createGeometry(n)}}));
