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
define(["./defined-b681f02d","./Matrix4-d3db9505","./Check-436535f3","./EllipsoidOutlineGeometry-8fdf4c60","./Math-5b6faca9","./RuntimeError-14317824","./Transforms-99c89742","./Rectangle-0610a1c7","./Interval-49d6e8fc","./_commonjsHelpers-a32ac251","./combine-8b9ba6cb","./RequestType-e53aab71","./ComponentDatatype-46a1cf7a","./WebGLConstants-f100e3dd","./GeometryAttribute-ef6ca9ab","./Matrix2-7384588e","./GeometryAttributes-18ccc0d6","./GeometryOffsetAttribute-3e5f3e97","./IndexDatatype-1b44a4e6"],(function(e,i,t,n,r,o,s,a,c,d,l,u,m,p,f,y,G,b,k){"use strict";function _(t){const r=e.defaultValue(t.radius,1),o={radii:new i.Cartesian3(r,r,r),stackPartitions:t.stackPartitions,slicePartitions:t.slicePartitions,subdivisions:t.subdivisions};this._ellipsoidGeometry=new n.EllipsoidOutlineGeometry(o),this._workerName="createSphereOutlineGeometry"}_.packedLength=n.EllipsoidOutlineGeometry.packedLength,_.pack=function(e,i,t){return n.EllipsoidOutlineGeometry.pack(e._ellipsoidGeometry,i,t)};const v=new n.EllipsoidOutlineGeometry,O={radius:void 0,radii:new i.Cartesian3,stackPartitions:void 0,slicePartitions:void 0,subdivisions:void 0};return _.unpack=function(t,r,o){const s=n.EllipsoidOutlineGeometry.unpack(t,r,v);return O.stackPartitions=s._stackPartitions,O.slicePartitions=s._slicePartitions,O.subdivisions=s._subdivisions,e.defined(o)?(i.Cartesian3.clone(s._radii,O.radii),o._ellipsoidGeometry=new n.EllipsoidOutlineGeometry(O),o):(O.radius=s._radii.x,new _(O))},_.createGeometry=function(e){return n.EllipsoidOutlineGeometry.createGeometry(e._ellipsoidGeometry)},function(i,t){return e.defined(t)&&(i=_.unpack(i,t)),_.createGeometry(i)}}));
