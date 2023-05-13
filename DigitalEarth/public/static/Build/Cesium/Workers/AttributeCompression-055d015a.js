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
define(["exports","./Matrix4-d3db9505","./ComponentDatatype-46a1cf7a","./Check-436535f3","./defined-b681f02d","./Math-5b6faca9","./Matrix2-7384588e"],(function(t,e,n,o,a,c,r){"use strict";const s={SCALAR:"SCALAR",VEC2:"VEC2",VEC3:"VEC3",VEC4:"VEC4",MAT2:"MAT2",MAT3:"MAT3",MAT4:"MAT4",getMathType:function(t){switch(t){case s.SCALAR:return Number;case s.VEC2:return e.Cartesian2;case s.VEC3:return e.Cartesian3;case s.VEC4:return e.Cartesian4;case s.MAT2:return r.Matrix2;case s.MAT3:return e.Matrix3;case s.MAT4:return e.Matrix4}},getNumberOfComponents:function(t){switch(t){case s.SCALAR:return 1;case s.VEC2:return 2;case s.VEC3:return 3;case s.VEC4:case s.MAT2:return 4;case s.MAT3:return 9;case s.MAT4:return 16}},getAttributeLocationCount:function(t){switch(t){case s.SCALAR:case s.VEC2:case s.VEC3:case s.VEC4:return 1;case s.MAT2:return 2;case s.MAT3:return 3;case s.MAT4:return 4}},getGlslType:function(t){switch(t){case s.SCALAR:return"float";case s.VEC2:return"vec2";case s.VEC3:return"vec3";case s.VEC4:return"vec4";case s.MAT2:return"mat2";case s.MAT3:return"mat3";case s.MAT4:return"mat4"}}};var u=Object.freeze(s);const i=1/256,C={octEncodeInRange:function(t,e,n){if(n.x=t.x/(Math.abs(t.x)+Math.abs(t.y)+Math.abs(t.z)),n.y=t.y/(Math.abs(t.x)+Math.abs(t.y)+Math.abs(t.z)),t.z<0){const t=n.x,e=n.y;n.x=(1-Math.abs(e))*c.CesiumMath.signNotZero(t),n.y=(1-Math.abs(t))*c.CesiumMath.signNotZero(e)}return n.x=c.CesiumMath.toSNorm(n.x,e),n.y=c.CesiumMath.toSNorm(n.y,e),n},octEncode:function(t,e){return C.octEncodeInRange(t,255,e)}},M=new e.Cartesian2,f=new Uint8Array(1);function d(t){return f[0]=t,f[0]}C.octEncodeToCartesian4=function(t,e){return C.octEncodeInRange(t,65535,M),e.x=d(M.x*i),e.y=d(M.x),e.z=d(M.y*i),e.w=d(M.y),e},C.octDecodeInRange=function(t,n,o,a){if(a.x=c.CesiumMath.fromSNorm(t,o),a.y=c.CesiumMath.fromSNorm(n,o),a.z=1-(Math.abs(a.x)+Math.abs(a.y)),a.z<0){const t=a.x;a.x=(1-Math.abs(a.y))*c.CesiumMath.signNotZero(t),a.y=(1-Math.abs(t))*c.CesiumMath.signNotZero(a.y)}return e.Cartesian3.normalize(a,a)},C.octDecode=function(t,e,n){return C.octDecodeInRange(t,e,255,n)},C.octDecodeFromCartesian4=function(t,e){const n=256*t.x+t.y,o=256*t.z+t.w;return C.octDecodeInRange(n,o,65535,e)},C.octPackFloat=function(t){return 256*t.x+t.y};const h=new e.Cartesian2;function m(t){return t>>1^-(1&t)}C.octEncodeFloat=function(t){return C.octEncode(t,h),C.octPackFloat(h)},C.octDecodeFloat=function(t,e){const n=t/256,o=Math.floor(n),a=256*(n-o);return C.octDecode(o,a,e)},C.octPack=function(t,e,n,o){const a=C.octEncodeFloat(t),c=C.octEncodeFloat(e),r=C.octEncode(n,h);return o.x=65536*r.x+a,o.y=65536*r.y+c,o},C.octUnpack=function(t,e,n,o){let a=t.x/65536;const c=Math.floor(a),r=65536*(a-c);a=t.y/65536;const s=Math.floor(a),u=65536*(a-s);C.octDecodeFloat(r,e),C.octDecodeFloat(u,n),C.octDecode(c,s,o)},C.compressTextureCoordinates=function(t){return 4096*(4095*t.x|0)+(4095*t.y|0)},C.decompressTextureCoordinates=function(t,e){const n=t/4096,o=Math.floor(n);return e.x=o/4095,e.y=(t-4096*o)/4095,e},C.zigZagDeltaDecode=function(t,e,n){const o=t.length;let c=0,r=0,s=0;for(let u=0;u<o;++u)c+=m(t[u]),r+=m(e[u]),t[u]=c,e[u]=r,a.defined(n)&&(s+=m(n[u]),n[u]=s)},C.dequantize=function(t,e,o,a){const c=u.getNumberOfComponents(o);let r;switch(e){case n.ComponentDatatype.BYTE:r=127;break;case n.ComponentDatatype.UNSIGNED_BYTE:r=255;break;case n.ComponentDatatype.SHORT:r=32767;break;case n.ComponentDatatype.UNSIGNED_SHORT:r=65535;break;case n.ComponentDatatype.INT:r=2147483647;break;case n.ComponentDatatype.UNSIGNED_INT:r=4294967295}const s=new Float32Array(a*c);for(let e=0;e<a;e++)for(let n=0;n<c;n++){const o=e*c+n;s[o]=Math.max(t[o]/r,-1)}return s},C.decodeRGB565=function(t,e){const n=t.length;a.defined(e)||(e=new Float32Array(3*n));const o=1/31;for(let a=0;a<n;a++){const n=t[a],c=n>>11,r=n>>5&63,s=31&n,u=3*a;e[u]=c*o,e[u+1]=.015873015873015872*r,e[u+2]=s*o}return e},t.AttributeCompression=C}));
