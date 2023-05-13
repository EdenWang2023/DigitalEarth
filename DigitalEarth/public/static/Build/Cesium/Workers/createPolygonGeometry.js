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
define(["./defined-b681f02d","./Rectangle-0610a1c7","./ArcType-f5af12f9","./BoundingRectangle-3739fff5","./Transforms-99c89742","./Matrix4-d3db9505","./Check-436535f3","./ComponentDatatype-46a1cf7a","./EllipsoidGeodesic-bd79a412","./EllipsoidTangentPlane-34e5c0ac","./GeometryAttribute-ef6ca9ab","./GeometryInstance-458833d1","./GeometryOffsetAttribute-3e5f3e97","./GeometryPipeline-7151dba5","./IndexDatatype-1b44a4e6","./Math-5b6faca9","./PolygonGeometryLibrary-681888dc","./PolygonPipeline-5a6c6b44","./VertexFormat-1359575c","./Interval-49d6e8fc","./_commonjsHelpers-a32ac251","./combine-8b9ba6cb","./RequestType-e53aab71","./RuntimeError-14317824","./WebGLConstants-f100e3dd","./AxisAlignedBoundingBox-321a482b","./IntersectionTests-3ac7f0c9","./Plane-172c23d7","./Matrix2-7384588e","./AttributeCompression-055d015a","./EncodedCartesian3-e8f321af","./arrayRemoveDuplicates-bbac3e0e","./EllipsoidRhumbLine-65d4aeca","./GeometryAttributes-18ccc0d6"],(function(e,t,o,r,i,n,a,s,l,c,u,d,p,y,m,g,h,f,b,_,P,C,x,w,T,I,A,v,E,G,O,L,H,V){"use strict";const D=new n.Cartographic,N=new n.Cartographic;function F(e,t,o,r){const i=r.cartesianToCartographic(e,D).height,n=r.cartesianToCartographic(t,N);n.height=i,r.cartographicToCartesian(n,t);const a=r.cartesianToCartographic(o,N);a.height=i-100,r.cartographicToCartesian(a,o)}const R=new r.BoundingRectangle,M=new n.Cartesian3,S=new n.Cartesian3,k=new n.Cartesian3,B=new n.Cartesian3,z=new n.Cartesian3,W=new n.Cartesian3;let Y=new n.Cartesian3,U=new n.Cartesian3,j=new n.Cartesian3;const Q=new n.Cartesian2,q=new n.Cartesian2,K=new n.Cartesian3,Z=new i.Quaternion,J=new n.Matrix3,X=new n.Matrix3;function $(t){const o=t.vertexFormat,r=t.geometry,a=t.shadowVolume,l=r.attributes.position.values,c=e.defined(r.attributes.st)?r.attributes.st.values:void 0;let d=l.length;const y=t.wall,m=t.top||y,h=t.bottom||y;if(o.st||o.normal||o.tangent||o.bitangent||a){const p=t.boundingRectangle,f=t.tangentPlane,b=t.ellipsoid,_=t.stRotation,P=t.perPositionHeight,C=Q;C.x=p.x,C.y=p.y;const x=o.st?new Float32Array(d/3*2):void 0;let w;o.normal&&(w=P&&m&&!y?r.attributes.normal.values:new Float32Array(d));const T=o.tangent?new Float32Array(d):void 0,I=o.bitangent?new Float32Array(d):void 0,A=a?new Float32Array(d):void 0;let v=0,E=0,G=S,O=k,L=B,H=!0,V=J,D=X;if(0!==_){let e=i.Quaternion.fromAxisAngle(f._plane.normal,_,Z);V=n.Matrix3.fromQuaternion(e,V),e=i.Quaternion.fromAxisAngle(f._plane.normal,-_,Z),D=n.Matrix3.fromQuaternion(e,D)}else V=n.Matrix3.clone(n.Matrix3.IDENTITY,V),D=n.Matrix3.clone(n.Matrix3.IDENTITY,D);let N=0,R=0;m&&h&&(N=d/2,R=d/3,d/=2);for(let r=0;r<d;r+=3){const i=n.Cartesian3.fromArray(l,r,K);if(o.st&&!e.defined(c)){let e=n.Matrix3.multiplyByVector(V,i,M);e=b.scaleToGeodeticSurface(e,e);const t=f.projectPointOntoPlane(e,q);n.Cartesian2.subtract(t,C,t);const o=g.CesiumMath.clamp(t.x/p.width,0,1),r=g.CesiumMath.clamp(t.y/p.height,0,1);h&&(x[v+R]=o,x[v+1+R]=r),m&&(x[v]=o,x[v+1]=r),v+=2}if(o.normal||o.tangent||o.bitangent||a){const e=E+1,s=E+2;if(y){if(r+3<d){const e=n.Cartesian3.fromArray(l,r+3,z);if(H){const t=n.Cartesian3.fromArray(l,r+d,W);P&&F(i,e,t,b),n.Cartesian3.subtract(e,i,e),n.Cartesian3.subtract(t,i,t),G=n.Cartesian3.normalize(n.Cartesian3.cross(t,e,G),G),H=!1}n.Cartesian3.equalsEpsilon(e,i,g.CesiumMath.EPSILON10)&&(H=!0)}(o.tangent||o.bitangent)&&(L=b.geodeticSurfaceNormal(i,L),o.tangent&&(O=n.Cartesian3.normalize(n.Cartesian3.cross(L,G,O),O)))}else G=b.geodeticSurfaceNormal(i,G),(o.tangent||o.bitangent)&&(P&&(Y=n.Cartesian3.fromArray(w,E,Y),U=n.Cartesian3.cross(n.Cartesian3.UNIT_Z,Y,U),U=n.Cartesian3.normalize(n.Matrix3.multiplyByVector(D,U,U),U),o.bitangent&&(j=n.Cartesian3.normalize(n.Cartesian3.cross(Y,U,j),j))),O=n.Cartesian3.cross(n.Cartesian3.UNIT_Z,G,O),O=n.Cartesian3.normalize(n.Matrix3.multiplyByVector(D,O,O),O),o.bitangent&&(L=n.Cartesian3.normalize(n.Cartesian3.cross(G,O,L),L)));o.normal&&(t.wall?(w[E+N]=G.x,w[e+N]=G.y,w[s+N]=G.z):h&&(w[E+N]=-G.x,w[e+N]=-G.y,w[s+N]=-G.z),(m&&!P||y)&&(w[E]=G.x,w[e]=G.y,w[s]=G.z)),a&&(y&&(G=b.geodeticSurfaceNormal(i,G)),A[E+N]=-G.x,A[e+N]=-G.y,A[s+N]=-G.z),o.tangent&&(t.wall?(T[E+N]=O.x,T[e+N]=O.y,T[s+N]=O.z):h&&(T[E+N]=-O.x,T[e+N]=-O.y,T[s+N]=-O.z),m&&(P?(T[E]=U.x,T[e]=U.y,T[s]=U.z):(T[E]=O.x,T[e]=O.y,T[s]=O.z))),o.bitangent&&(h&&(I[E+N]=L.x,I[e+N]=L.y,I[s+N]=L.z),m&&(P?(I[E]=j.x,I[e]=j.y,I[s]=j.z):(I[E]=L.x,I[e]=L.y,I[s]=L.z))),E+=3}}o.st&&!e.defined(c)&&(r.attributes.st=new u.GeometryAttribute({componentDatatype:s.ComponentDatatype.FLOAT,componentsPerAttribute:2,values:x})),o.normal&&(r.attributes.normal=new u.GeometryAttribute({componentDatatype:s.ComponentDatatype.FLOAT,componentsPerAttribute:3,values:w})),o.tangent&&(r.attributes.tangent=new u.GeometryAttribute({componentDatatype:s.ComponentDatatype.FLOAT,componentsPerAttribute:3,values:T})),o.bitangent&&(r.attributes.bitangent=new u.GeometryAttribute({componentDatatype:s.ComponentDatatype.FLOAT,componentsPerAttribute:3,values:I})),a&&(r.attributes.extrudeDirection=new u.GeometryAttribute({componentDatatype:s.ComponentDatatype.FLOAT,componentsPerAttribute:3,values:A}))}if(t.extrude&&e.defined(t.offsetAttribute)){const e=l.length/3;let o=new Uint8Array(e);if(t.offsetAttribute===p.GeometryOffsetAttribute.TOP)m&&h||y?o=o.fill(1,0,e/2):m&&(o=o.fill(1));else{const e=t.offsetAttribute===p.GeometryOffsetAttribute.NONE?0:1;o=o.fill(e)}r.attributes.applyOffset=new u.GeometryAttribute({componentDatatype:s.ComponentDatatype.UNSIGNED_BYTE,componentsPerAttribute:1,values:o})}return r}const ee=new n.Cartographic,te=new n.Cartographic,oe={westOverIDL:0,eastOverIDL:0};let re=new l.EllipsoidGeodesic;function ie(r,i,n,a,s){if(s=e.defaultValue(s,new t.Rectangle),!e.defined(r)||r.length<3)return s.west=0,s.north=0,s.south=0,s.east=0,s;if(n===o.ArcType.RHUMB)return t.Rectangle.fromCartesianArray(r,i,s);re.ellipsoid.equals(i)||(re=new l.EllipsoidGeodesic(void 0,void 0,i)),s.west=Number.POSITIVE_INFINITY,s.east=Number.NEGATIVE_INFINITY,s.south=Number.POSITIVE_INFINITY,s.north=Number.NEGATIVE_INFINITY,oe.westOverIDL=Number.POSITIVE_INFINITY,oe.eastOverIDL=Number.NEGATIVE_INFINITY;const c=1/g.CesiumMath.chordLength(a,i.maximumRadius),u=r.length;let d,p=i.cartesianToCartographic(r[0],te),y=ee;for(let e=1;e<u;e++)d=y,y=p,p=i.cartesianToCartographic(r[e],d),re.setEndPoints(y,p),ae(re,c,s,oe);return d=y,y=p,p=i.cartesianToCartographic(r[0],d),re.setEndPoints(y,p),ae(re,c,s,oe),s.east-s.west>oe.eastOverIDL-oe.westOverIDL&&(s.west=oe.westOverIDL,s.east=oe.eastOverIDL,s.east>g.CesiumMath.PI&&(s.east=s.east-g.CesiumMath.TWO_PI),s.west>g.CesiumMath.PI&&(s.west=s.west-g.CesiumMath.TWO_PI)),s}const ne=new n.Cartographic;function ae(e,t,o,r){const i=e.surfaceDistance,n=Math.ceil(i*t),a=n>0?i/(n-1):Number.POSITIVE_INFINITY;let s=0;for(let t=0;t<n;t++){const t=e.interpolateUsingSurfaceDistance(s,ne);s+=a;const i=t.longitude,n=t.latitude;o.west=Math.min(o.west,i),o.east=Math.max(o.east,i),o.south=Math.min(o.south,n),o.north=Math.max(o.north,n);const l=i>=0?i:i+g.CesiumMath.TWO_PI;r.westOverIDL=Math.min(r.westOverIDL,l),r.eastOverIDL=Math.max(r.eastOverIDL,l)}}const se=[];function le(t,o,r,i,n,a,s,l,u,p){const y={walls:[]};let g;if(s||l){const n=h.PolygonGeometryLibrary.createGeometryFromPositions(t,o,r,i,a,u,p),c=n.attributes.position.values,f=n.indices;let b,_;if(s&&l){const t=c.concat(c);b=t.length/3,_=m.IndexDatatype.createTypedArray(b,2*f.length),_.set(f);const o=f.length,i=b/2;for(g=0;g<o;g+=3){const e=_[g]+i,t=_[g+1]+i,r=_[g+2]+i;_[g+o]=r,_[g+1+o]=t,_[g+2+o]=e}if(n.attributes.position.values=t,a&&u.normal){const e=n.attributes.normal.values;n.attributes.normal.values=new Float32Array(t.length),n.attributes.normal.values.set(e)}if(u.st&&e.defined(r)){const e=n.attributes.st.values;n.attributes.st.values=new Float32Array(2*b),n.attributes.st.values=e.concat(e)}n.indices=_}else if(l){for(b=c.length/3,_=m.IndexDatatype.createTypedArray(b,f.length),g=0;g<f.length;g+=3)_[g]=f[g+2],_[g+1]=f[g+1],_[g+2]=f[g];n.indices=_}y.topAndBottom=new d.GeometryInstance({geometry:n})}let b=n.outerRing,_=c.EllipsoidTangentPlane.fromPoints(b,t),P=_.projectPointsOntoPlane(b,se),C=f.PolygonPipeline.computeWindingOrder2D(P);C===f.WindingOrder.CLOCKWISE&&(b=b.slice().reverse());let x=h.PolygonGeometryLibrary.computeWallGeometry(b,r,t,i,a,p);y.walls.push(new d.GeometryInstance({geometry:x}));const w=n.holes;for(g=0;g<w.length;g++){let e=w[g];_=c.EllipsoidTangentPlane.fromPoints(e,t),P=_.projectPointsOntoPlane(e,se),C=f.PolygonPipeline.computeWindingOrder2D(P),C===f.WindingOrder.COUNTER_CLOCKWISE&&(e=e.slice().reverse()),x=h.PolygonGeometryLibrary.computeWallGeometry(e,r,t,i,a,p),y.walls.push(new d.GeometryInstance({geometry:x}))}return y}function ce(r){const i=r.polygonHierarchy,a=e.defaultValue(r.vertexFormat,b.VertexFormat.DEFAULT),s=e.defaultValue(r.ellipsoid,t.Ellipsoid.WGS84),l=e.defaultValue(r.granularity,g.CesiumMath.RADIANS_PER_DEGREE),c=e.defaultValue(r.stRotation,0),u=r.textureCoordinates,d=e.defaultValue(r.perPositionHeight,!1),p=d&&e.defined(r.extrudedHeight);let y=e.defaultValue(r.height,0),m=e.defaultValue(r.extrudedHeight,y);if(!p){const e=Math.max(y,m);m=Math.min(y,m),y=e}this._vertexFormat=b.VertexFormat.clone(a),this._ellipsoid=t.Ellipsoid.clone(s),this._granularity=l,this._stRotation=c,this._height=y,this._extrudedHeight=m,this._closeTop=e.defaultValue(r.closeTop,!0),this._closeBottom=e.defaultValue(r.closeBottom,!0),this._polygonHierarchy=i,this._perPositionHeight=d,this._perPositionHeightExtrude=p,this._shadowVolume=e.defaultValue(r.shadowVolume,!1),this._workerName="createPolygonGeometry",this._offsetAttribute=r.offsetAttribute,this._arcType=e.defaultValue(r.arcType,o.ArcType.GEODESIC),this._rectangle=void 0,this._textureCoordinateRotationPoints=void 0,this._textureCoordinates=u,this.packedLength=h.PolygonGeometryLibrary.computeHierarchyPackedLength(i,n.Cartesian3)+t.Ellipsoid.packedLength+b.VertexFormat.packedLength+(u?h.PolygonGeometryLibrary.computeHierarchyPackedLength(u,n.Cartesian2):1)+12}ce.fromPositions=function(t){return new ce({polygonHierarchy:{positions:(t=e.defaultValue(t,e.defaultValue.EMPTY_OBJECT)).positions},height:t.height,extrudedHeight:t.extrudedHeight,vertexFormat:t.vertexFormat,stRotation:t.stRotation,ellipsoid:t.ellipsoid,granularity:t.granularity,perPositionHeight:t.perPositionHeight,closeTop:t.closeTop,closeBottom:t.closeBottom,offsetAttribute:t.offsetAttribute,arcType:t.arcType,textureCoordinates:t.textureCoordinates})},ce.pack=function(o,r,i){return i=e.defaultValue(i,0),i=h.PolygonGeometryLibrary.packPolygonHierarchy(o._polygonHierarchy,r,i,n.Cartesian3),t.Ellipsoid.pack(o._ellipsoid,r,i),i+=t.Ellipsoid.packedLength,b.VertexFormat.pack(o._vertexFormat,r,i),i+=b.VertexFormat.packedLength,r[i++]=o._height,r[i++]=o._extrudedHeight,r[i++]=o._granularity,r[i++]=o._stRotation,r[i++]=o._perPositionHeightExtrude?1:0,r[i++]=o._perPositionHeight?1:0,r[i++]=o._closeTop?1:0,r[i++]=o._closeBottom?1:0,r[i++]=o._shadowVolume?1:0,r[i++]=e.defaultValue(o._offsetAttribute,-1),r[i++]=o._arcType,e.defined(o._textureCoordinates)?i=h.PolygonGeometryLibrary.packPolygonHierarchy(o._textureCoordinates,r,i,n.Cartesian2):r[i++]=-1,r[i++]=o.packedLength,r};const ue=t.Ellipsoid.clone(t.Ellipsoid.UNIT_SPHERE),de=new b.VertexFormat,pe={polygonHierarchy:{}};return ce.unpack=function(o,r,i){r=e.defaultValue(r,0);const a=h.PolygonGeometryLibrary.unpackPolygonHierarchy(o,r,n.Cartesian3);r=a.startingIndex,delete a.startingIndex;const s=t.Ellipsoid.unpack(o,r,ue);r+=t.Ellipsoid.packedLength;const l=b.VertexFormat.unpack(o,r,de);r+=b.VertexFormat.packedLength;const c=o[r++],u=o[r++],d=o[r++],p=o[r++],y=1===o[r++],m=1===o[r++],g=1===o[r++],f=1===o[r++],_=1===o[r++],P=o[r++],C=o[r++],x=-1===o[r]?void 0:h.PolygonGeometryLibrary.unpackPolygonHierarchy(o,r,n.Cartesian2);e.defined(x)?(r=x.startingIndex,delete x.startingIndex):r++;const w=o[r++];return e.defined(i)||(i=new ce(pe)),i._polygonHierarchy=a,i._ellipsoid=t.Ellipsoid.clone(s,i._ellipsoid),i._vertexFormat=b.VertexFormat.clone(l,i._vertexFormat),i._height=c,i._extrudedHeight=u,i._granularity=d,i._stRotation=p,i._perPositionHeightExtrude=y,i._perPositionHeight=m,i._closeTop=g,i._closeBottom=f,i._shadowVolume=_,i._offsetAttribute=-1===P?void 0:P,i._arcType=C,i._textureCoordinates=x,i.packedLength=w,i},ce.computeRectangle=function(r,i){const n=e.defaultValue(r.granularity,g.CesiumMath.RADIANS_PER_DEGREE),a=e.defaultValue(r.arcType,o.ArcType.GEODESIC),s=r.polygonHierarchy,l=e.defaultValue(r.ellipsoid,t.Ellipsoid.WGS84);return ie(s.positions,l,a,n,i)},ce.createGeometry=function(t){const o=t._vertexFormat,r=t._ellipsoid,n=t._granularity,a=t._stRotation,l=t._polygonHierarchy,b=t._perPositionHeight,_=t._closeTop,P=t._closeBottom,C=t._arcType,x=t._textureCoordinates,w=e.defined(x);let T=l.positions;if(T.length<3)return;const I=c.EllipsoidTangentPlane.fromPoints(T,r),A=h.PolygonGeometryLibrary.polygonsFromHierarchy(l,w,I.projectPointsOntoPlane.bind(I),!b,r),v=A.hierarchy,E=A.polygons,G=w?h.PolygonGeometryLibrary.polygonsFromHierarchy(x,!0,(function(e){return e}),!1).polygons:void 0;if(0===v.length)return;T=v[0].outerRing;const O=h.PolygonGeometryLibrary.computeBoundingRectangle(I.plane.normal,I.projectPointOntoPlane.bind(I),T,a,R),L=[],H=t._height,V=t._extrudedHeight,D={perPositionHeight:b,vertexFormat:o,geometry:void 0,tangentPlane:I,boundingRectangle:O,ellipsoid:r,stRotation:a,textureCoordinates:void 0,bottom:!1,top:!0,wall:!1,extrude:!1,arcType:C};let N;if(t._perPositionHeightExtrude||!g.CesiumMath.equalsEpsilon(H,V,0,g.CesiumMath.EPSILON2))for(D.extrude=!0,D.top=_,D.bottom=P,D.shadowVolume=t._shadowVolume,D.offsetAttribute=t._offsetAttribute,N=0;N<E.length;N++){const e=le(r,E[N],w?G[N]:void 0,n,v[N],b,_,P,o,C);let t;_&&P?(t=e.topAndBottom,D.geometry=h.PolygonGeometryLibrary.scaleToGeodeticHeightExtruded(t.geometry,H,V,r,b)):_?(t=e.topAndBottom,t.geometry.attributes.position.values=f.PolygonPipeline.scaleToGeodeticHeight(t.geometry.attributes.position.values,H,r,!b),D.geometry=t.geometry):P&&(t=e.topAndBottom,t.geometry.attributes.position.values=f.PolygonPipeline.scaleToGeodeticHeight(t.geometry.attributes.position.values,V,r,!0),D.geometry=t.geometry),(_||P)&&(D.wall=!1,t.geometry=$(D),L.push(t));const i=e.walls;D.wall=!0;for(let e=0;e<i.length;e++){const t=i[e];D.geometry=h.PolygonGeometryLibrary.scaleToGeodeticHeightExtruded(t.geometry,H,V,r,b),t.geometry=$(D),L.push(t)}}else for(N=0;N<E.length;N++){const i=new d.GeometryInstance({geometry:h.PolygonGeometryLibrary.createGeometryFromPositions(r,E[N],w?G[N]:void 0,n,b,o,C)});if(i.geometry.attributes.position.values=f.PolygonPipeline.scaleToGeodeticHeight(i.geometry.attributes.position.values,H,r,!b),D.geometry=i.geometry,i.geometry=$(D),e.defined(t._offsetAttribute)){const e=i.geometry.attributes.position.values.length,o=t._offsetAttribute===p.GeometryOffsetAttribute.NONE?0:1,r=new Uint8Array(e/3).fill(o);i.geometry.attributes.applyOffset=new u.GeometryAttribute({componentDatatype:s.ComponentDatatype.UNSIGNED_BYTE,componentsPerAttribute:1,values:r})}L.push(i)}const F=y.GeometryPipeline.combineInstances(L)[0];F.attributes.position.values=new Float64Array(F.attributes.position.values),F.indices=m.IndexDatatype.createTypedArray(F.attributes.position.values.length/3,F.indices);const M=F.attributes,S=i.BoundingSphere.fromVertices(M.position.values);return o.position||delete M.position,new u.Geometry({attributes:M,indices:F.indices,primitiveType:F.primitiveType,boundingSphere:S,offsetAttribute:t._offsetAttribute})},ce.createShadowVolume=function(e,t,o){const r=e._granularity,i=e._ellipsoid,n=t(r,i),a=o(r,i);return new ce({polygonHierarchy:e._polygonHierarchy,ellipsoid:i,stRotation:e._stRotation,granularity:r,perPositionHeight:!1,extrudedHeight:n,height:a,vertexFormat:b.VertexFormat.POSITION_ONLY,shadowVolume:!0,arcType:e._arcType})},Object.defineProperties(ce.prototype,{rectangle:{get:function(){if(!e.defined(this._rectangle)){const e=this._polygonHierarchy.positions;this._rectangle=ie(e,this._ellipsoid,this._arcType,this._granularity)}return this._rectangle}},textureCoordinateRotationPoints:{get:function(){return e.defined(this._textureCoordinateRotationPoints)||(this._textureCoordinateRotationPoints=function(e){const t=-e._stRotation;if(0===t)return[0,0,0,1,1,0];const o=e._ellipsoid,r=e._polygonHierarchy.positions,i=e.rectangle;return u.Geometry._textureCoordinateRotationPoints(r,t,o,i)}(this)),this._textureCoordinateRotationPoints}}}),function(o,r){return e.defined(r)&&(o=ce.unpack(o,r)),o._ellipsoid=t.Ellipsoid.clone(o._ellipsoid),ce.createGeometry(o)}}));
