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
define(["./Matrix4-d3db9505","./combine-8b9ba6cb","./AttributeCompression-055d015a","./Math-5b6faca9","./Rectangle-0610a1c7","./IndexDatatype-1b44a4e6","./createTaskProcessorWorker","./Check-436535f3","./defined-b681f02d","./RuntimeError-14317824","./ComponentDatatype-46a1cf7a","./WebGLConstants-f100e3dd","./Matrix2-7384588e"],(function(e,a,t,n,r,s,i,o,c,f,u,d,p){"use strict";const b=32767,l=new e.Cartographic,C=new e.Cartesian3;const h=new r.Rectangle,w=new r.Ellipsoid,y=new e.Cartesian3,k={min:void 0,max:void 0};const g=new e.Cartesian3,m=new e.Cartesian3,A=new e.Cartesian3,x=new e.Cartesian3,D=new e.Cartesian3;return i((function(i,o){const c=new Uint16Array(i.positions),f=new Uint16Array(i.widths),u=new Uint32Array(i.counts),d=new Uint16Array(i.batchIds);!function(a){a=new Float64Array(a);let t=0;k.min=a[t++],k.max=a[t++],r.Rectangle.unpack(a,t,h),t+=r.Rectangle.packedLength,r.Ellipsoid.unpack(a,t,w),t+=r.Ellipsoid.packedLength,e.Cartesian3.unpack(a,t,y)}(i.packedBuffer);const p=w,E=y,I=function(a,r,s,i,o){const c=a.length/3,f=a.subarray(0,c),u=a.subarray(c,2*c),d=a.subarray(2*c,3*c);t.AttributeCompression.zigZagDeltaDecode(f,u,d);const p=new Float64Array(a.length);for(let a=0;a<c;++a){const t=f[a],c=u[a],h=d[a],w=n.CesiumMath.lerp(r.west,r.east,t/b),y=n.CesiumMath.lerp(r.south,r.north,c/b),k=n.CesiumMath.lerp(s,i,h/b),g=e.Cartographic.fromRadians(w,y,k,l),m=o.cartographicToCartesian(g,C);e.Cartesian3.pack(m,p,3*a)}return p}(c,h,k.min,k.max,p),P=I.length/3,R=4*P-4,U=new Float32Array(3*R),M=new Float32Array(3*R),T=new Float32Array(3*R),F=new Float32Array(2*R),N=new Uint16Array(R);let L,S=0,_=0,v=0,G=0,W=u.length;for(L=0;L<W;++L){const a=u[L],t=f[L],n=d[L];for(let r=0;r<a;++r){let s;if(0===r){const a=e.Cartesian3.unpack(I,3*G,g),t=e.Cartesian3.unpack(I,3*(G+1),m);s=e.Cartesian3.subtract(a,t,A),e.Cartesian3.add(a,s,s)}else s=e.Cartesian3.unpack(I,3*(G+r-1),A);const i=e.Cartesian3.unpack(I,3*(G+r),x);let o;if(r===a-1){const t=e.Cartesian3.unpack(I,3*(G+a-1),g),n=e.Cartesian3.unpack(I,3*(G+a-2),m);o=e.Cartesian3.subtract(t,n,D),e.Cartesian3.add(t,o,o)}else o=e.Cartesian3.unpack(I,3*(G+r+1),D);e.Cartesian3.subtract(s,E,s),e.Cartesian3.subtract(i,E,i),e.Cartesian3.subtract(o,E,o);const c=r===a-1?2:4;for(let a=0===r?2:0;a<c;++a){e.Cartesian3.pack(i,U,S),e.Cartesian3.pack(s,M,S),e.Cartesian3.pack(o,T,S),S+=3;const r=a-2<0?-1:1;F[_++]=a%2*2-1,F[_++]=r*t,N[v++]=n}}G+=a}const B=s.IndexDatatype.createTypedArray(R,6*P-6);let O=0,z=0;for(W=P-1,L=0;L<W;++L)B[z++]=O,B[z++]=O+2,B[z++]=O+1,B[z++]=O+1,B[z++]=O+2,B[z++]=O+3,O+=4;o.push(U.buffer,M.buffer,T.buffer),o.push(F.buffer,N.buffer,B.buffer);let H={indexDatatype:2===B.BYTES_PER_ELEMENT?s.IndexDatatype.UNSIGNED_SHORT:s.IndexDatatype.UNSIGNED_INT,currentPositions:U.buffer,previousPositions:M.buffer,nextPositions:T.buffer,expandAndWidth:F.buffer,batchIds:N.buffer,indices:B.buffer};if(i.keepDecodedPositions){const e=function(e){const a=e.length,t=new Uint32Array(a+1);let n=0;for(let r=0;r<a;++r)t[r]=n,n+=e[r];return t[a]=n,t}(u);o.push(I.buffer,e.buffer),H=a.combine(H,{decodedPositions:I.buffer,decodedPositionOffsets:e.buffer})}return H}))}));
