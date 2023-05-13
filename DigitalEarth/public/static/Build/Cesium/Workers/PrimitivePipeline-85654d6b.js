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
define(["exports","./Transforms-99c89742","./ComponentDatatype-46a1cf7a","./defined-b681f02d","./Check-436535f3","./Rectangle-0610a1c7","./GeometryAttribute-ef6ca9ab","./GeometryAttributes-18ccc0d6","./GeometryPipeline-7151dba5","./IndexDatatype-1b44a4e6","./Matrix4-d3db9505","./WebMercatorProjection-05e4c9ff"],(function(e,t,n,o,r,i,s,c,a,d,p,u){"use strict";function f(e,t,n){e=o.defaultValue(e,0),t=o.defaultValue(t,0),n=o.defaultValue(n,0),this.value=new Float32Array([e,t,n])}function l(e,t){const o=e.attributes,r=o.position,i=r.values.length/r.componentsPerAttribute;o.batchId=new s.GeometryAttribute({componentDatatype:n.ComponentDatatype.FLOAT,componentsPerAttribute:1,values:new Float32Array(i)});const c=o.batchId.values;for(let e=0;e<i;++e)c[e]=t}function m(e){const r=e.instances,i=e.projection,s=e.elementIndexUintSupported,c=e.scene3DOnly,d=e.vertexCacheOptimize,u=e.compressVertices,f=e.modelMatrix;let m,h,g=r.length;for(m=0;m<g;++m)if(o.defined(r[m].geometry)){r[m].geometry.primitiveType;break}if(function(e,t,n){let r=!n;const i=e.length;let s;if(!r&&i>1){const t=e[0].modelMatrix;for(s=1;s<i;++s)if(!p.Matrix4.equals(t,e[s].modelMatrix)){r=!0;break}}if(r)for(s=0;s<i;++s)o.defined(e[s].geometry)&&a.GeometryPipeline.transformToWorldCoordinates(e[s]);else p.Matrix4.multiplyTransformation(t,e[0].modelMatrix,t)}(r,f,c),!c)for(m=0;m<g;++m)o.defined(r[m].geometry)&&a.GeometryPipeline.splitLongitude(r[m]);if(function(e){const t=e.length;for(let n=0;n<t;++n){const t=e[n];o.defined(t.geometry)?l(t.geometry,n):o.defined(t.westHemisphereGeometry)&&o.defined(t.eastHemisphereGeometry)&&(l(t.westHemisphereGeometry,n),l(t.eastHemisphereGeometry,n))}}(r),d)for(m=0;m<g;++m){const e=r[m];o.defined(e.geometry)?(a.GeometryPipeline.reorderForPostVertexCache(e.geometry),a.GeometryPipeline.reorderForPreVertexCache(e.geometry)):o.defined(e.westHemisphereGeometry)&&o.defined(e.eastHemisphereGeometry)&&(a.GeometryPipeline.reorderForPostVertexCache(e.westHemisphereGeometry),a.GeometryPipeline.reorderForPreVertexCache(e.westHemisphereGeometry),a.GeometryPipeline.reorderForPostVertexCache(e.eastHemisphereGeometry),a.GeometryPipeline.reorderForPreVertexCache(e.eastHemisphereGeometry))}let y=a.GeometryPipeline.combineInstances(r);for(g=y.length,m=0;m<g;++m){h=y[m];const e=h.attributes;if(c)for(const t in e)e.hasOwnProperty(t)&&e[t].componentDatatype===n.ComponentDatatype.DOUBLE&&a.GeometryPipeline.encodeAttribute(h,t,`${t}3DHigh`,`${t}3DLow`);else for(const r in e)if(e.hasOwnProperty(r)&&e[r].componentDatatype===n.ComponentDatatype.DOUBLE){const e=`${r}3D`,n=`${r}2D`;a.GeometryPipeline.projectTo2D(h,r,e,n,i),o.defined(h.boundingSphere)&&"position"===r&&(h.boundingSphereCV=t.BoundingSphere.fromVertices(h.attributes.position2D.values)),a.GeometryPipeline.encodeAttribute(h,e,`${e}High`,`${e}Low`),a.GeometryPipeline.encodeAttribute(h,n,`${n}High`,`${n}Low`)}u&&a.GeometryPipeline.compressVertices(h)}if(!s){let e=[];for(g=y.length,m=0;m<g;++m)h=y[m],e=e.concat(a.GeometryPipeline.fitToUnsignedShortIndices(h));y=e}return y}function h(e,t,n,r){let i,s,c;const a=r.length-1;if(a>=0){const e=r[a];i=e.offset+e.count,c=e.index,s=n[c].indices.length}else i=0,c=0,s=n[c].indices.length;const d=e.length;for(let a=0;a<d;++a){const d=e[a][t];if(!o.defined(d))continue;const p=d.indices.length;i+p>s&&(i=0,s=n[++c].indices.length),r.push({index:c,offset:i,count:p}),i+=p}}Object.defineProperties(f.prototype,{componentDatatype:{get:function(){return n.ComponentDatatype.FLOAT}},componentsPerAttribute:{get:function(){return 3}},normalize:{get:function(){return!1}}}),f.fromCartesian3=function(e){return new f(e.x,e.y,e.z)},f.toValue=function(e,t){return o.defined(t)||(t=new Float32Array([e.x,e.y,e.z])),t[0]=e.x,t[1]=e.y,t[2]=e.z,t};const g={};function y(e,t){const n=e.attributes;for(const e in n)if(n.hasOwnProperty(e)){const r=n[e];o.defined(r)&&o.defined(r.values)&&t.push(r.values.buffer)}o.defined(e.indices)&&t.push(e.indices.buffer)}function b(e,t){const n=e.length,r=new Float64Array(1+19*n);let i=0;r[i++]=n;for(let t=0;t<n;t++){const n=e[t];if(p.Matrix4.pack(n.modelMatrix,r,i),i+=p.Matrix4.packedLength,o.defined(n.attributes)&&o.defined(n.attributes.offset)){const e=n.attributes.offset.value;r[i]=e[0],r[i+1]=e[1],r[i+2]=e[2]}i+=3}return t.push(r.buffer),r}function x(e){const n=e.length,r=1+(t.BoundingSphere.packedLength+1)*n,i=new Float32Array(r);let s=0;i[s++]=n;for(let r=0;r<n;++r){const n=e[r];o.defined(n)?(i[s++]=1,t.BoundingSphere.pack(e[r],i,s)):i[s++]=0,s+=t.BoundingSphere.packedLength}return i}function G(e){const n=new Array(e[0]);let o=0,r=1;for(;r<e.length;)1===e[r++]&&(n[o]=t.BoundingSphere.unpack(e,r)),++o,r+=t.BoundingSphere.packedLength;return n}g.combineGeometry=function(e){let n,r;const i=e.instances,s=i.length;let c,d,p=!1;s>0&&(n=m(e),n.length>0&&(r=a.GeometryPipeline.createAttributeLocations(n[0]),e.createPickOffsets&&(c=function(e,t){const n=[];return h(e,"geometry",t,n),h(e,"westHemisphereGeometry",t,n),h(e,"eastHemisphereGeometry",t,n),n}(i,n))),o.defined(i[0].attributes)&&o.defined(i[0].attributes.offset)&&(d=new Array(s),p=!0));const u=new Array(s),f=new Array(s);for(let e=0;e<s;++e){const n=i[e],r=n.geometry;o.defined(r)&&(u[e]=r.boundingSphere,f[e]=r.boundingSphereCV,p&&(d[e]=n.geometry.offsetAttribute));const s=n.eastHemisphereGeometry,c=n.westHemisphereGeometry;o.defined(s)&&o.defined(c)&&(o.defined(s.boundingSphere)&&o.defined(c.boundingSphere)&&(u[e]=t.BoundingSphere.union(s.boundingSphere,c.boundingSphere)),o.defined(s.boundingSphereCV)&&o.defined(c.boundingSphereCV)&&(f[e]=t.BoundingSphere.union(s.boundingSphereCV,c.boundingSphereCV)))}return{geometries:n,modelMatrix:e.modelMatrix,attributeLocations:r,pickOffsets:c,offsetInstanceExtend:d,boundingSpheres:u,boundingSpheresCV:f}},g.packCreateGeometryResults=function(e,n){const r=new Float64Array(function(e){let n=1;const r=e.length;for(let i=0;i<r;i++){const r=e[i];if(++n,!o.defined(r))continue;const s=r.attributes;n+=7+2*t.BoundingSphere.packedLength+(o.defined(r.indices)?r.indices.length:0);for(const e in s)s.hasOwnProperty(e)&&o.defined(s[e])&&(n+=5+s[e].values.length)}return n}(e)),i=[],s={},c=e.length;let a=0;r[a++]=c;for(let n=0;n<c;n++){const c=e[n],d=o.defined(c);if(r[a++]=d?1:0,!d)continue;r[a++]=c.primitiveType,r[a++]=c.geometryType,r[a++]=o.defaultValue(c.offsetAttribute,-1);const p=o.defined(c.boundingSphere)?1:0;r[a++]=p,p&&t.BoundingSphere.pack(c.boundingSphere,r,a),a+=t.BoundingSphere.packedLength;const u=o.defined(c.boundingSphereCV)?1:0;r[a++]=u,u&&t.BoundingSphere.pack(c.boundingSphereCV,r,a),a+=t.BoundingSphere.packedLength;const f=c.attributes,l=[];for(const e in f)f.hasOwnProperty(e)&&o.defined(f[e])&&(l.push(e),o.defined(s[e])||(s[e]=i.length,i.push(e)));r[a++]=l.length;for(let e=0;e<l.length;e++){const t=l[e],n=f[t];r[a++]=s[t],r[a++]=n.componentDatatype,r[a++]=n.componentsPerAttribute,r[a++]=n.normalize?1:0,r[a++]=n.values.length,r.set(n.values,a),a+=n.values.length}const m=o.defined(c.indices)?c.indices.length:0;r[a++]=m,m>0&&(r.set(c.indices,a),a+=m)}return n.push(r.buffer),{stringTable:i,packedData:r}},g.unpackCreateGeometryResults=function(e){const o=e.stringTable,r=e.packedData;let i;const a=new Array(r[0]);let p=0,u=1;for(;u<r.length;){if(!(1===r[u++])){a[p++]=void 0;continue}const e=r[u++],f=r[u++];let l,m,h=r[u++];-1===h&&(h=void 0);1===r[u++]&&(l=t.BoundingSphere.unpack(r,u)),u+=t.BoundingSphere.packedLength;let g,y,b;1===r[u++]&&(m=t.BoundingSphere.unpack(r,u)),u+=t.BoundingSphere.packedLength;const x=new c.GeometryAttributes,G=r[u++];for(i=0;i<G;i++){const e=o[r[u++]],t=r[u++];b=r[u++];const i=0!==r[u++];g=r[u++],y=n.ComponentDatatype.createTypedArray(t,g);for(let e=0;e<g;e++)y[e]=r[u++];x[e]=new s.GeometryAttribute({componentDatatype:t,componentsPerAttribute:b,normalize:i,values:y})}let S;if(g=r[u++],g>0){const e=y.length/b;for(S=d.IndexDatatype.createTypedArray(e,g),i=0;i<g;i++)S[i]=r[u++]}a[p++]=new s.Geometry({primitiveType:e,geometryType:f,boundingSphere:l,boundingSphereCV:m,indices:S,attributes:x,offsetAttribute:h})}return a},g.packCombineGeometryParameters=function(e,n){const o=e.createGeometryResults,r=o.length;for(let e=0;e<r;e++)n.push(o[e].packedData.buffer);return{createGeometryResults:e.createGeometryResults,packedInstances:b(e.instances,n),ellipsoid:e.ellipsoid,isGeographic:e.projection instanceof t.GeographicProjection,elementIndexUintSupported:e.elementIndexUintSupported,scene3DOnly:e.scene3DOnly,vertexCacheOptimize:e.vertexCacheOptimize,compressVertices:e.compressVertices,modelMatrix:e.modelMatrix,createPickOffsets:e.createPickOffsets}},g.unpackCombineGeometryParameters=function(e){const n=function(e){const t=e,n=new Array(t[0]);let r=0,i=1;for(;i<t.length;){const e=p.Matrix4.unpack(t,i);let s;i+=p.Matrix4.packedLength,o.defined(t[i])&&(s={offset:new f(t[i],t[i+1],t[i+2])}),i+=3,n[r++]={modelMatrix:e,attributes:s}}return n}(e.packedInstances),r=e.createGeometryResults,s=r.length;let c=0;for(let e=0;e<s;e++){const t=g.unpackCreateGeometryResults(r[e]),o=t.length;for(let e=0;e<o;e++){const o=t[e];n[c].geometry=o,++c}}const a=i.Ellipsoid.clone(e.ellipsoid);return{instances:n,ellipsoid:a,projection:e.isGeographic?new t.GeographicProjection(a):new u.WebMercatorProjection(a),elementIndexUintSupported:e.elementIndexUintSupported,scene3DOnly:e.scene3DOnly,vertexCacheOptimize:e.vertexCacheOptimize,compressVertices:e.compressVertices,modelMatrix:p.Matrix4.clone(e.modelMatrix),createPickOffsets:e.createPickOffsets}},g.packCombineGeometryResults=function(e,t){o.defined(e.geometries)&&function(e,t){const n=e.length;for(let o=0;o<n;++o)y(e[o],t)}(e.geometries,t);const n=x(e.boundingSpheres),r=x(e.boundingSpheresCV);return t.push(n.buffer,r.buffer),{geometries:e.geometries,attributeLocations:e.attributeLocations,modelMatrix:e.modelMatrix,pickOffsets:e.pickOffsets,offsetInstanceExtend:e.offsetInstanceExtend,boundingSpheres:n,boundingSpheresCV:r}},g.unpackCombineGeometryResults=function(e){return{geometries:e.geometries,attributeLocations:e.attributeLocations,modelMatrix:e.modelMatrix,pickOffsets:e.pickOffsets,offsetInstanceExtend:e.offsetInstanceExtend,boundingSpheres:G(e.boundingSpheres),boundingSpheresCV:G(e.boundingSpheresCV)}},e.PrimitivePipeline=g}));
