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
define(["./defined-b681f02d","./Rectangle-0610a1c7","./arrayRemoveDuplicates-bbac3e0e","./BoundingRectangle-3739fff5","./Transforms-99c89742","./Matrix4-d3db9505","./ComponentDatatype-46a1cf7a","./PolylineVolumeGeometryLibrary-9b126e47","./Check-436535f3","./GeometryAttribute-ef6ca9ab","./GeometryAttributes-18ccc0d6","./IndexDatatype-1b44a4e6","./Math-5b6faca9","./PolygonPipeline-5a6c6b44","./Interval-49d6e8fc","./_commonjsHelpers-a32ac251","./combine-8b9ba6cb","./RequestType-e53aab71","./RuntimeError-14317824","./WebGLConstants-f100e3dd","./EllipsoidTangentPlane-34e5c0ac","./AxisAlignedBoundingBox-321a482b","./IntersectionTests-3ac7f0c9","./Plane-172c23d7","./PolylinePipeline-c42c443b","./EllipsoidGeodesic-bd79a412","./EllipsoidRhumbLine-65d4aeca","./Matrix2-7384588e"],(function(e,t,n,i,o,a,r,l,s,c,p,d,u,y,g,h,f,m,b,E,_,P,k,C,L,T,D,G){"use strict";function v(n){const i=(n=e.defaultValue(n,e.defaultValue.EMPTY_OBJECT)).polylinePositions,o=n.shapePositions;this._positions=i,this._shape=o,this._ellipsoid=t.Ellipsoid.clone(e.defaultValue(n.ellipsoid,t.Ellipsoid.WGS84)),this._cornerType=e.defaultValue(n.cornerType,l.CornerType.ROUNDED),this._granularity=e.defaultValue(n.granularity,u.CesiumMath.RADIANS_PER_DEGREE),this._workerName="createPolylineVolumeOutlineGeometry";let r=1+i.length*a.Cartesian3.packedLength;r+=1+o.length*a.Cartesian2.packedLength,this.packedLength=r+t.Ellipsoid.packedLength+2}v.pack=function(n,i,o){let r;o=e.defaultValue(o,0);const l=n._positions;let s=l.length;for(i[o++]=s,r=0;r<s;++r,o+=a.Cartesian3.packedLength)a.Cartesian3.pack(l[r],i,o);const c=n._shape;for(s=c.length,i[o++]=s,r=0;r<s;++r,o+=a.Cartesian2.packedLength)a.Cartesian2.pack(c[r],i,o);return t.Ellipsoid.pack(n._ellipsoid,i,o),o+=t.Ellipsoid.packedLength,i[o++]=n._cornerType,i[o]=n._granularity,i};const R=t.Ellipsoid.clone(t.Ellipsoid.UNIT_SPHERE),A={polylinePositions:void 0,shapePositions:void 0,ellipsoid:R,height:void 0,cornerType:void 0,granularity:void 0};v.unpack=function(n,i,o){let r;i=e.defaultValue(i,0);let l=n[i++];const s=new Array(l);for(r=0;r<l;++r,i+=a.Cartesian3.packedLength)s[r]=a.Cartesian3.unpack(n,i);l=n[i++];const c=new Array(l);for(r=0;r<l;++r,i+=a.Cartesian2.packedLength)c[r]=a.Cartesian2.unpack(n,i);const p=t.Ellipsoid.unpack(n,i,R);i+=t.Ellipsoid.packedLength;const d=n[i++],u=n[i];return e.defined(o)?(o._positions=s,o._shape=c,o._ellipsoid=t.Ellipsoid.clone(p,o._ellipsoid),o._cornerType=d,o._granularity=u,o):(A.polylinePositions=s,A.shapePositions=c,A.cornerType=d,A.granularity=u,new v(A))};const V=new i.BoundingRectangle;return v.createGeometry=function(e){const t=e._positions,s=n.arrayRemoveDuplicates(t,a.Cartesian3.equalsEpsilon);let u=e._shape;if(u=l.PolylineVolumeGeometryLibrary.removeDuplicatesFromShape(u),s.length<2||u.length<3)return;y.PolygonPipeline.computeWindingOrder2D(u)===y.WindingOrder.CLOCKWISE&&u.reverse();const g=i.BoundingRectangle.fromPoints(u,V);return function(e,t){const n=new p.GeometryAttributes;n.position=new c.GeometryAttribute({componentDatatype:r.ComponentDatatype.DOUBLE,componentsPerAttribute:3,values:e});const i=t.length,a=n.position.values.length/3,l=e.length/3/i,s=d.IndexDatatype.createTypedArray(a,2*i*(l+1));let u,y,g=0;u=0;let h=u*i;for(y=0;y<i-1;y++)s[g++]=y+h,s[g++]=y+h+1;for(s[g++]=i-1+h,s[g++]=h,u=l-1,h=u*i,y=0;y<i-1;y++)s[g++]=y+h,s[g++]=y+h+1;for(s[g++]=i-1+h,s[g++]=h,u=0;u<l-1;u++){const e=i*u,t=e+i;for(y=0;y<i;y++)s[g++]=y+e,s[g++]=y+t}return new c.Geometry({attributes:n,indices:d.IndexDatatype.createTypedArray(a,s),boundingSphere:o.BoundingSphere.fromVertices(e),primitiveType:c.PrimitiveType.LINES})}(l.PolylineVolumeGeometryLibrary.computePositions(s,u,g,e,!1),u)},function(n,i){return e.defined(i)&&(n=v.unpack(n,i)),n._ellipsoid=t.Ellipsoid.clone(n._ellipsoid),v.createGeometry(n)}}));
