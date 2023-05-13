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
define(["./arrayRemoveDuplicates-bbac3e0e","./Transforms-99c89742","./Matrix4-d3db9505","./Check-436535f3","./ComponentDatatype-46a1cf7a","./CoplanarPolygonGeometryLibrary-ae7df4a1","./defined-b681f02d","./GeometryAttribute-ef6ca9ab","./GeometryAttributes-18ccc0d6","./GeometryInstance-458833d1","./GeometryPipeline-7151dba5","./IndexDatatype-1b44a4e6","./PolygonGeometryLibrary-681888dc","./Rectangle-0610a1c7","./Math-5b6faca9","./Interval-49d6e8fc","./_commonjsHelpers-a32ac251","./combine-8b9ba6cb","./RequestType-e53aab71","./RuntimeError-14317824","./WebGLConstants-f100e3dd","./OrientedBoundingBox-4ee28786","./EllipsoidTangentPlane-34e5c0ac","./AxisAlignedBoundingBox-321a482b","./IntersectionTests-3ac7f0c9","./Plane-172c23d7","./Matrix2-7384588e","./AttributeCompression-055d015a","./EncodedCartesian3-e8f321af","./ArcType-f5af12f9","./EllipsoidRhumbLine-65d4aeca","./PolygonPipeline-5a6c6b44"],(function(e,t,n,o,r,a,i,c,y,s,l,p,u,d,m,f,g,b,h,P,G,C,L,T,E,H,k,A,x,I,_,v){"use strict";function w(e){const t=e.length,n=new Float64Array(3*t),o=p.IndexDatatype.createTypedArray(t,2*t);let a=0,i=0;for(let r=0;r<t;r++){const c=e[r];n[a++]=c.x,n[a++]=c.y,n[a++]=c.z,o[i++]=r,o[i++]=(r+1)%t}const s=new y.GeometryAttributes({position:new c.GeometryAttribute({componentDatatype:r.ComponentDatatype.DOUBLE,componentsPerAttribute:3,values:n})});return new c.Geometry({attributes:s,indices:o,primitiveType:c.PrimitiveType.LINES})}function B(e){const t=(e=i.defaultValue(e,i.defaultValue.EMPTY_OBJECT)).polygonHierarchy;this._polygonHierarchy=t,this._workerName="createCoplanarPolygonOutlineGeometry",this.packedLength=u.PolygonGeometryLibrary.computeHierarchyPackedLength(t,n.Cartesian3)+1}B.fromPositions=function(e){return new B({polygonHierarchy:{positions:(e=i.defaultValue(e,i.defaultValue.EMPTY_OBJECT)).positions}})},B.pack=function(e,t,o){return o=i.defaultValue(o,0),t[o=u.PolygonGeometryLibrary.packPolygonHierarchy(e._polygonHierarchy,t,o,n.Cartesian3)]=e.packedLength,t};const D={polygonHierarchy:{}};return B.unpack=function(e,t,o){t=i.defaultValue(t,0);const r=u.PolygonGeometryLibrary.unpackPolygonHierarchy(e,t,n.Cartesian3);t=r.startingIndex,delete r.startingIndex;const a=e[t];return i.defined(o)||(o=new B(D)),o._polygonHierarchy=r,o.packedLength=a,o},B.createGeometry=function(o){const r=o._polygonHierarchy;let i=r.positions;if(i=e.arrayRemoveDuplicates(i,n.Cartesian3.equalsEpsilon,!0),i.length<3)return;if(!a.CoplanarPolygonGeometryLibrary.validOutline(i))return;const y=u.PolygonGeometryLibrary.polygonOutlinesFromHierarchy(r,!1);if(0===y.length)return;const p=[];for(let e=0;e<y.length;e++){const t=new s.GeometryInstance({geometry:w(y[e])});p.push(t)}const d=l.GeometryPipeline.combineInstances(p)[0],m=t.BoundingSphere.fromPoints(r.positions);return new c.Geometry({attributes:d.attributes,indices:d.indices,primitiveType:d.primitiveType,boundingSphere:m})},function(e,t){return i.defined(t)&&(e=B.unpack(e,t)),e._ellipsoid=d.Ellipsoid.clone(e._ellipsoid),B.createGeometry(e)}}));
