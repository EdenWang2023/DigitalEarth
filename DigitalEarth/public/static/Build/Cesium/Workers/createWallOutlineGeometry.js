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
define(["./defined-b681f02d","./Rectangle-0610a1c7","./Transforms-99c89742","./Matrix4-d3db9505","./ComponentDatatype-46a1cf7a","./Check-436535f3","./GeometryAttribute-ef6ca9ab","./GeometryAttributes-18ccc0d6","./IndexDatatype-1b44a4e6","./Math-5b6faca9","./WallGeometryLibrary-e12447a2","./Interval-49d6e8fc","./_commonjsHelpers-a32ac251","./combine-8b9ba6cb","./RequestType-e53aab71","./RuntimeError-14317824","./WebGLConstants-f100e3dd","./Matrix2-7384588e","./arrayRemoveDuplicates-bbac3e0e","./PolylinePipeline-c42c443b","./EllipsoidGeodesic-bd79a412","./EllipsoidRhumbLine-65d4aeca","./IntersectionTests-3ac7f0c9","./Plane-172c23d7"],(function(e,i,t,n,a,o,s,r,l,m,d,c,u,p,f,h,g,y,_,E,b,C,H,A){"use strict";const k=new n.Cartesian3,w=new n.Cartesian3;function x(t){const a=(t=e.defaultValue(t,e.defaultValue.EMPTY_OBJECT)).positions,o=t.maximumHeights,s=t.minimumHeights,r=e.defaultValue(t.granularity,m.CesiumMath.RADIANS_PER_DEGREE),l=e.defaultValue(t.ellipsoid,i.Ellipsoid.WGS84);this._positions=a,this._minimumHeights=s,this._maximumHeights=o,this._granularity=r,this._ellipsoid=i.Ellipsoid.clone(l),this._workerName="createWallOutlineGeometry";let d=1+a.length*n.Cartesian3.packedLength+2;e.defined(s)&&(d+=s.length),e.defined(o)&&(d+=o.length),this.packedLength=d+i.Ellipsoid.packedLength+1}x.pack=function(t,a,o){let s;o=e.defaultValue(o,0);const r=t._positions;let l=r.length;for(a[o++]=l,s=0;s<l;++s,o+=n.Cartesian3.packedLength)n.Cartesian3.pack(r[s],a,o);const m=t._minimumHeights;if(l=e.defined(m)?m.length:0,a[o++]=l,e.defined(m))for(s=0;s<l;++s)a[o++]=m[s];const d=t._maximumHeights;if(l=e.defined(d)?d.length:0,a[o++]=l,e.defined(d))for(s=0;s<l;++s)a[o++]=d[s];return i.Ellipsoid.pack(t._ellipsoid,a,o),a[o+=i.Ellipsoid.packedLength]=t._granularity,a};const G=i.Ellipsoid.clone(i.Ellipsoid.UNIT_SPHERE),L={positions:void 0,minimumHeights:void 0,maximumHeights:void 0,ellipsoid:G,granularity:void 0};return x.unpack=function(t,a,o){let s;a=e.defaultValue(a,0);let r=t[a++];const l=new Array(r);for(s=0;s<r;++s,a+=n.Cartesian3.packedLength)l[s]=n.Cartesian3.unpack(t,a);let m,d;if(r=t[a++],r>0)for(m=new Array(r),s=0;s<r;++s)m[s]=t[a++];if(r=t[a++],r>0)for(d=new Array(r),s=0;s<r;++s)d[s]=t[a++];const c=i.Ellipsoid.unpack(t,a,G),u=t[a+=i.Ellipsoid.packedLength];return e.defined(o)?(o._positions=l,o._minimumHeights=m,o._maximumHeights=d,o._ellipsoid=i.Ellipsoid.clone(c,o._ellipsoid),o._granularity=u,o):(L.positions=l,L.minimumHeights=m,L.maximumHeights=d,L.granularity=u,new x(L))},x.fromConstantHeights=function(i){const t=(i=e.defaultValue(i,e.defaultValue.EMPTY_OBJECT)).positions;let n,a;const o=i.minimumHeight,s=i.maximumHeight,r=e.defined(o),l=e.defined(s);if(r||l){const e=t.length;n=r?new Array(e):void 0,a=l?new Array(e):void 0;for(let i=0;i<e;++i)r&&(n[i]=o),l&&(a[i]=s)}return new x({positions:t,maximumHeights:a,minimumHeights:n,ellipsoid:i.ellipsoid})},x.createGeometry=function(i){const o=i._positions,c=i._minimumHeights,u=i._maximumHeights,p=i._granularity,f=i._ellipsoid,h=d.WallGeometryLibrary.computePositions(f,o,u,c,p,!1);if(!e.defined(h))return;const g=h.bottomPositions,y=h.topPositions;let _=y.length,E=2*_;const b=new Float64Array(E);let C,H=0;for(_/=3,C=0;C<_;++C){const e=3*C,i=n.Cartesian3.fromArray(y,e,k),t=n.Cartesian3.fromArray(g,e,w);b[H++]=t.x,b[H++]=t.y,b[H++]=t.z,b[H++]=i.x,b[H++]=i.y,b[H++]=i.z}const A=new r.GeometryAttributes({position:new s.GeometryAttribute({componentDatatype:a.ComponentDatatype.DOUBLE,componentsPerAttribute:3,values:b})}),x=E/3;E=2*x-4+x;const G=l.IndexDatatype.createTypedArray(x,E);let L=0;for(C=0;C<x-2;C+=2){const e=C,i=C+2,t=n.Cartesian3.fromArray(b,3*e,k),a=n.Cartesian3.fromArray(b,3*i,w);if(n.Cartesian3.equalsEpsilon(t,a,m.CesiumMath.EPSILON10))continue;const o=C+1,s=C+3;G[L++]=o,G[L++]=e,G[L++]=o,G[L++]=s,G[L++]=e,G[L++]=i}return G[L++]=x-2,G[L++]=x-1,new s.Geometry({attributes:A,indices:G,primitiveType:s.PrimitiveType.LINES,boundingSphere:new t.BoundingSphere.fromVertices(b)})},function(t,n){return e.defined(n)&&(t=x.unpack(t,n)),t._ellipsoid=i.Ellipsoid.clone(t._ellipsoid),x.createGeometry(t)}}));
