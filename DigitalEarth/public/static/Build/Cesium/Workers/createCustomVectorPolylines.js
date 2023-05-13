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
define(["./AttributeCompression-055d015a","./Matrix4-d3db9505","./Rectangle-0610a1c7","./IndexDatatype-1b44a4e6","./Math-5b6faca9","./createTaskProcessorWorker","./combine-8b9ba6cb","./ComponentDatatype-46a1cf7a","./defined-b681f02d","./Check-436535f3","./WebGLConstants-f100e3dd","./Matrix2-7384588e","./RuntimeError-14317824"],(function(a,e,r,t,n,i,s,o,c,f,u,d,p){"use strict";var b,C=new e.Cartographic,l=new e.Cartesian3;var h=new r.Rectangle,w=new r.Ellipsoid,y=new e.Cartesian3,k={min:void 0,max:void 0};var v=new e.Cartesian3,A=new e.Cartesian3,g=new e.Cartesian3,m=new e.Cartesian3,D=new e.Cartesian3;return i((function(i,o){var c;i.highPrecision?(b=2147483647,c=new Uint32Array(i.positions)):(b=32767,c=new Uint16Array(i.positions));var f=new Uint16Array(i.widths),u=new Uint32Array(i.counts),d=new Uint16Array(i.batchIds),p=new Float32Array(i.disableDepthTestDistance);!function(a){a=new Float64Array(a);var t=0;k.min=a[t++],k.max=a[t++],r.Rectangle.unpack(a,t,h),t+=r.Rectangle.packedLength,r.Ellipsoid.unpack(a,t,w),t+=r.Ellipsoid.packedLength,e.Cartesian3.unpack(a,t,y)}(i.packedBuffer);var x,E=w,I=y,P=function(r,t,i,s,o){var c=r.length/3,f=r.subarray(0,c),u=r.subarray(c,2*c),d=r.subarray(2*c,3*c);a.AttributeCompression.zigZagDeltaDecode(f,u,d);for(var p=new Float64Array(r.length),h=0;h<c;++h){var w=f[h],y=u[h],k=d[h],v=n.CesiumMath.lerp(t.west,t.east,w/b),A=n.CesiumMath.lerp(t.south,t.north,y/b),g=n.CesiumMath.lerp(i,s,k/b),m=e.Cartographic.fromRadians(v,A,g,C),D=o.cartographicToCartesian(m,l);e.Cartesian3.pack(D,p,3*h)}return p}(c,h,k.min,k.max,E),T=P.length/3,U=4*T-4,F=new Float32Array(3*U),R=new Float32Array(3*U),M=new Float32Array(3*U),N=new Float32Array(3*U),L=new Uint16Array(U),S=new Float32Array(U),_=0,G=0,W=0,B=0,O=u.length;for(x=0;x<O;++x){for(var z=u[x],H=f[x],Y=d[x],Z=p[x],j=0;j<z;++j){var q;if(0===j){var J=e.Cartesian3.unpack(P,3*B,v),K=e.Cartesian3.unpack(P,3*(B+1),A);q=e.Cartesian3.subtract(J,K,g),e.Cartesian3.add(J,q,q)}else q=e.Cartesian3.unpack(P,3*(B+j-1),g);var Q,V=e.Cartesian3.unpack(P,3*(B+j),m);if(j===z-1){var X=e.Cartesian3.unpack(P,3*(B+z-1),v),$=e.Cartesian3.unpack(P,3*(B+z-2),A);Q=e.Cartesian3.subtract(X,$,D),e.Cartesian3.add(X,Q,Q)}else Q=e.Cartesian3.unpack(P,3*(B+j+1),D);e.Cartesian3.subtract(q,I,q),e.Cartesian3.subtract(V,I,V),e.Cartesian3.subtract(Q,I,Q);for(var aa=j===z-1?2:4,ea=0===j?2:0;ea<aa;++ea){e.Cartesian3.pack(V,F,_),e.Cartesian3.pack(q,R,_),e.Cartesian3.pack(Q,M,_),_+=3;var ra=ea-2<0?-1:1;N[G++]=ea%2*2-1,N[G++]=ra*H,N[G++]=ea/(z-1),S[W]=Z,L[W++]=Y}}B+=z}var ta=t.IndexDatatype.createTypedArray(U,6*T-6),na=0,ia=0;for(O=T-1,x=0;x<O;++x)ta[ia++]=na,ta[ia++]=na+2,ta[ia++]=na+1,ta[ia++]=na+1,ta[ia++]=na+2,ta[ia++]=na+3,na+=4;o.push(F.buffer,R.buffer,M.buffer),o.push(N.buffer,L.buffer,ta.buffer);let sa={indexDatatype:2===ta.BYTES_PER_ELEMENT?t.IndexDatatype.UNSIGNED_SHORT:t.IndexDatatype.UNSIGNED_INT,currentPositions:F.buffer,previousPositions:R.buffer,nextPositions:M.buffer,expandAndWidth:N.buffer,batchIds:L.buffer,indices:ta.buffer,disableDepthTestDistance:S.buffer};if(i.keepDecodedPositions){const a=function(a){const e=a.length,r=new Uint32Array(e+1);let t=0;for(let n=0;n<e;++n)r[n]=t,t+=a[n];return r[e]=t,r}(u);o.push(P.buffer,a.buffer),sa=s.combine(sa,{decodedPositions:P.buffer,decodedPositionOffsets:a.buffer})}return sa}))}));
