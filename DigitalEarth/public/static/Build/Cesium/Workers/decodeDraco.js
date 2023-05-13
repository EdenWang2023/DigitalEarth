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
define(["./ComponentDatatype-46a1cf7a","./defined-b681f02d","./IndexDatatype-1b44a4e6","./RuntimeError-14317824","./createTaskProcessorWorker","./Check-436535f3","./WebGLConstants-f100e3dd","./Math-5b6faca9"],(function(t,e,r,n,o,a,i,s){"use strict";let c;function u(t,e){const n=t.num_points(),o=t.num_faces(),a=new c.DracoInt32Array,i=3*o,s=r.IndexDatatype.createTypedArray(n,i);let u=0;for(let r=0;r<o;++r)e.GetFaceFromMesh(t,r,a),s[u+0]=a.GetValue(0),s[u+1]=a.GetValue(1),s[u+2]=a.GetValue(2),u+=3;return c.destroy(a),{typedArray:s,numberOfIndices:i}}function d(r,n,o){const a=r.num_points(),i=o.num_components();let s,u=new c.AttributeQuantizationTransform;if(u.InitFromAttribute(o)){const t=new Array(i);for(let e=0;e<i;++e)t[e]=u.min_value(e);s={quantizationBits:u.quantization_bits(),minValues:t,range:u.range(),octEncoded:!1}}c.destroy(u),u=new c.AttributeOctahedronTransform,u.InitFromAttribute(o)&&(s={quantizationBits:u.quantization_bits(),octEncoded:!0}),c.destroy(u);const d=a*i;let f;f=e.defined(s)?function(t,e,r,n,o){let a,i;n.quantizationBits<=8?(i=new c.DracoUInt8Array,a=new Uint8Array(o),e.GetAttributeUInt8ForAllPoints(t,r,i)):(i=new c.DracoUInt16Array,a=new Uint16Array(o),e.GetAttributeUInt16ForAllPoints(t,r,i));for(let t=0;t<o;++t)a[t]=i.GetValue(t);return c.destroy(i),a}(r,n,o,s,d):function(t,e,r,n){let o,a;switch(r.data_type()){case 1:case 11:a=new c.DracoInt8Array,o=new Int8Array(n),e.GetAttributeInt8ForAllPoints(t,r,a);break;case 2:a=new c.DracoUInt8Array,o=new Uint8Array(n),e.GetAttributeUInt8ForAllPoints(t,r,a);break;case 3:a=new c.DracoInt16Array,o=new Int16Array(n),e.GetAttributeInt16ForAllPoints(t,r,a);break;case 4:a=new c.DracoUInt16Array,o=new Uint16Array(n),e.GetAttributeUInt16ForAllPoints(t,r,a);break;case 5:case 7:a=new c.DracoInt32Array,o=new Int32Array(n),e.GetAttributeInt32ForAllPoints(t,r,a);break;case 6:case 8:a=new c.DracoUInt32Array,o=new Uint32Array(n),e.GetAttributeUInt32ForAllPoints(t,r,a);break;case 9:case 10:a=new c.DracoFloat32Array,o=new Float32Array(n),e.GetAttributeFloatForAllPoints(t,r,a)}for(let t=0;t<n;++t)o[t]=a.GetValue(t);return c.destroy(a),o}(r,n,o,d);const y=t.ComponentDatatype.fromTypedArray(f);return{array:f,data:{componentsPerAttribute:i,componentDatatype:y,byteOffset:o.byte_offset(),byteStride:t.ComponentDatatype.getSizeInBytes(y)*i,normalized:o.normalized(),quantization:s}}}function f(t){return e.defined(t.bufferView)?function(t){const e=new c.Decoder,r=["POSITION","NORMAL","COLOR","TEX_COORD"];if(t.dequantizeInShader)for(let t=0;t<r.length;++t)e.SkipAttributeTransform(c[r[t]]);const o=t.bufferView,a=new c.DecoderBuffer;if(a.Init(t.array,o.byteLength),e.GetEncodedGeometryType(a)!==c.TRIANGULAR_MESH)throw new n.RuntimeError("Unsupported draco mesh geometry type.");const i=new c.Mesh,s=e.DecodeBufferToMesh(a,i);if(!s.ok()||0===i.ptr)throw new n.RuntimeError(`Error decoding draco mesh geometry: ${s.error_msg()}`);c.destroy(a);const f={},y=t.compressedAttributes;for(const t in y)if(y.hasOwnProperty(t)){const r=y[t],n=e.GetAttributeByUniqueId(i,r);f[t]=d(i,e,n)}const A={indexArray:u(i,e),attributeData:f};return c.destroy(i),c.destroy(e),A}(t):function(t){const e=new c.Decoder;t.dequantizeInShader&&(e.SkipAttributeTransform(c.POSITION),e.SkipAttributeTransform(c.NORMAL));const r=new c.DecoderBuffer;if(r.Init(t.buffer,t.buffer.length),e.GetEncodedGeometryType(r)!==c.POINT_CLOUD)throw new n.RuntimeError("Draco geometry type must be POINT_CLOUD.");const o=new c.PointCloud,a=e.DecodeBufferToPointCloud(r,o);if(!a.ok()||0===o.ptr)throw new n.RuntimeError(`Error decoding draco point cloud: ${a.error_msg()}`);c.destroy(r);const i={},s=t.properties;for(const t in s)if(s.hasOwnProperty(t)){let r;if("POSITION"===t||"NORMAL"===t){const n=e.GetAttributeId(o,c[t]);r=e.GetAttribute(o,n)}else{const n=s[t];r=e.GetAttributeByUniqueId(o,n)}i[t]=d(o,e,r)}return c.destroy(o),c.destroy(e),i}(t)}function y(t){c=t,self.onmessage=o(f),self.postMessage(!0)}return function(t){const r=t.data.webAssemblyConfig;if(e.defined(r))return require([r.modulePath],(function(t){e.defined(r.wasmBinaryFile)?(e.defined(t)||(t=self.DracoDecoderModule),t(r).then((function(t){y(t)}))):y(t())}))}}));