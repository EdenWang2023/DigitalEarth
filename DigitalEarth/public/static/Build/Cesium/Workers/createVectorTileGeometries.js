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
define(["./Transforms-99c89742","./BoxGeometry-c11f9f89","./Matrix4-d3db9505","./Color-151cb095","./CylinderGeometry-a9f90053","./defined-b681f02d","./EllipsoidGeometry-15457086","./IndexDatatype-1b44a4e6","./createTaskProcessorWorker","./Check-436535f3","./Rectangle-0610a1c7","./Math-5b6faca9","./Interval-49d6e8fc","./_commonjsHelpers-a32ac251","./combine-8b9ba6cb","./RequestType-e53aab71","./RuntimeError-14317824","./ComponentDatatype-46a1cf7a","./WebGLConstants-f100e3dd","./GeometryAttribute-ef6ca9ab","./Matrix2-7384588e","./GeometryAttributes-18ccc0d6","./GeometryOffsetAttribute-3e5f3e97","./VertexFormat-1359575c","./CylinderGeometryLibrary-2359532f"],(function(e,t,n,r,a,i,o,s,c,d,l,f,u,h,b,p,y,x,g,m,C,I,k,M,B){"use strict";function w(e){this.offset=e.offset,this.count=e.count,this.color=e.color,this.batchIds=e.batchIds}const A=new n.Cartesian3,O=n.Matrix4.packedLength+n.Cartesian3.packedLength,v=n.Matrix4.packedLength+2,L=n.Matrix4.packedLength+n.Cartesian3.packedLength,E=n.Cartesian3.packedLength+1,U={modelMatrix:new n.Matrix4,boundingVolume:new e.BoundingSphere};function G(e,t){let r=t*O;const a=n.Cartesian3.unpack(e,r,A);r+=n.Cartesian3.packedLength;const i=n.Matrix4.unpack(e,r,U.modelMatrix);n.Matrix4.multiplyByScale(i,a,i);const o=U.boundingVolume;return n.Cartesian3.clone(n.Cartesian3.ZERO,o.center),o.radius=Math.sqrt(3),U}function S(e,t){let r=t*v;const a=e[r++],i=e[r++],o=n.Cartesian3.fromElements(a,a,i,A),s=n.Matrix4.unpack(e,r,U.modelMatrix);n.Matrix4.multiplyByScale(s,o,s);const c=U.boundingVolume;return n.Cartesian3.clone(n.Cartesian3.ZERO,c.center),c.radius=Math.sqrt(2),U}function T(e,t){let r=t*L;const a=n.Cartesian3.unpack(e,r,A);r+=n.Cartesian3.packedLength;const i=n.Matrix4.unpack(e,r,U.modelMatrix);n.Matrix4.multiplyByScale(i,a,i);const o=U.boundingVolume;return n.Cartesian3.clone(n.Cartesian3.ZERO,o.center),o.radius=1,U}function R(e,t){let r=t*E;const a=e[r++],i=n.Cartesian3.unpack(e,r,A),o=n.Matrix4.fromTranslation(i,U.modelMatrix);n.Matrix4.multiplyByUniformScale(o,a,o);const s=U.boundingVolume;return n.Cartesian3.clone(n.Cartesian3.ZERO,s.center),s.radius=1,U}const V=new n.Cartesian3;function F(t,a,o,s,c){if(!i.defined(a))return;const d=o.length,l=s.attributes.position.values,f=s.indices,u=t.positions,h=t.vertexBatchIds,b=t.indices,p=t.batchIds,y=t.batchTableColors,x=t.batchedIndices,g=t.indexOffsets,m=t.indexCounts,C=t.boundingVolumes,I=t.modelMatrix,k=t.center;let M=t.positionOffset,B=t.batchIdIndex,A=t.indexOffset;const O=t.batchedIndicesOffset;for(let t=0;t<d;++t){const i=c(a,t),s=i.modelMatrix;n.Matrix4.multiply(I,s,s);const d=o[t],v=l.length;for(let e=0;e<v;e+=3){const t=n.Cartesian3.unpack(l,e,V);n.Matrix4.multiplyByPoint(s,t,t),n.Cartesian3.subtract(t,k,t),n.Cartesian3.pack(t,u,3*M+e),h[B++]=d}const L=f.length;for(let e=0;e<L;++e)b[A+e]=f[e]+M;const E=t+O;x[E]=new w({offset:A,count:L,color:r.Color.fromRgba(y[d]),batchIds:[d]}),p[E]=d,g[E]=A,m[E]=L,C[E]=e.BoundingSphere.transform(i.boundingVolume,s),M+=v/3,A+=L}t.positionOffset=M,t.batchIdIndex=B,t.indexOffset=A,t.batchedIndicesOffset+=d}const Z=new n.Cartesian3,q=new n.Matrix4;function D(t,n,a){const i=a.length,o=2+i*e.BoundingSphere.packedLength+1+function(e){const t=e.length;let n=0;for(let a=0;a<t;++a)n+=r.Color.packedLength+3+e[a].batchIds.length;return n}(n),s=new Float64Array(o);let c=0;s[c++]=t,s[c++]=i;for(let t=0;t<i;++t)e.BoundingSphere.pack(a[t],s,c),c+=e.BoundingSphere.packedLength;const d=n.length;s[c++]=d;for(let e=0;e<d;++e){const t=n[e];r.Color.pack(t.color,s,c),c+=r.Color.packedLength,s[c++]=t.offset,s[c++]=t.count;const a=t.batchIds,i=a.length;s[c++]=i;for(let e=0;e<i;++e)s[c++]=a[e]}return s}return c((function(e,r){const c=i.defined(e.boxes)?new Float32Array(e.boxes):void 0,d=i.defined(e.boxBatchIds)?new Uint16Array(e.boxBatchIds):void 0,l=i.defined(e.cylinders)?new Float32Array(e.cylinders):void 0,f=i.defined(e.cylinderBatchIds)?new Uint16Array(e.cylinderBatchIds):void 0,u=i.defined(e.ellipsoids)?new Float32Array(e.ellipsoids):void 0,h=i.defined(e.ellipsoidBatchIds)?new Uint16Array(e.ellipsoidBatchIds):void 0,b=i.defined(e.spheres)?new Float32Array(e.spheres):void 0,p=i.defined(e.sphereBatchIds)?new Uint16Array(e.sphereBatchIds):void 0,y=i.defined(c)?d.length:0,x=i.defined(l)?f.length:0,g=i.defined(u)?h.length:0,m=i.defined(b)?p.length:0,C=t.BoxGeometry.getUnitBox(),I=a.CylinderGeometry.getUnitCylinder(),k=o.EllipsoidGeometry.getUnitEllipsoid(),M=C.attributes.position.values,B=I.attributes.position.values,w=k.attributes.position.values;let A=M.length*y;A+=B.length*x,A+=w.length*(g+m);const O=C.indices,v=I.indices,L=k.indices;let E=O.length*y;E+=v.length*x,E+=L.length*(g+m);const U=new Float32Array(A),V=new Uint16Array(A/3),P=s.IndexDatatype.createTypedArray(A/3,E),_=y+x+g+m,W=new Uint16Array(_),j=new Array(_),H=new Uint32Array(_),N=new Uint32Array(_),Y=new Array(_);!function(e){const t=new Float64Array(e);let r=0;n.Cartesian3.unpack(t,r,Z),r+=n.Cartesian3.packedLength,n.Matrix4.unpack(t,r,q)}(e.packedBuffer);const z={batchTableColors:new Uint32Array(e.batchTableColors),positions:U,vertexBatchIds:V,indices:P,batchIds:W,batchedIndices:j,indexOffsets:H,indexCounts:N,boundingVolumes:Y,positionOffset:0,batchIdIndex:0,indexOffset:0,batchedIndicesOffset:0,modelMatrix:q,center:Z};F(z,c,d,C,G),F(z,l,f,I,S),F(z,u,h,k,T),F(z,b,p,k,R);const J=D(P.BYTES_PER_ELEMENT,j,Y);return r.push(U.buffer,V.buffer,P.buffer),r.push(W.buffer,H.buffer,N.buffer),r.push(J.buffer),{positions:U.buffer,vertexBatchIds:V.buffer,indices:P.buffer,indexOffsets:H.buffer,indexCounts:N.buffer,batchIds:W.buffer,packedBuffer:J.buffer}}))}));
