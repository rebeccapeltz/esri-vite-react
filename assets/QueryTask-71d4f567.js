import{ba as y,bb as _,a$ as T,K as a,L as c,fc as b,M as A,bB as w,I as Q,a6 as P,O as j,fd as d,_ as n,bY as f,bZ as h,s as q}from"./index-4f223f87.js";import{n as L,s as $}from"./executeForIds-026d1edd.js";import{x as J}from"./query-87bf5668.js";import{a as N}from"./executeQueryJSON-3cfdf774.js";import{n as z}from"./executeQueryPBF-8e2eaad1.js";async function C(e,t,r){const o=y(e);return J(o,_.from(t),{...r}).then(s=>({count:s.data.count,extent:T.fromJSON(s.data.extent)}))}let i=class extends w{constructor(e){super(e),this.dynamicDataSource=null,this.fieldsIndex=null,this.gdbVersion=null,this.infoFor3D=null,this.pbfSupported=!1,this.queryAttachmentsSupported=!1,this.sourceSpatialReference=null,this.url=null}get parsedUrl(){return Q(this.url)}async execute(e,t){const r=await this.executeJSON(e,t);return this.featureSetFromJSON(e,r,t)}async executeJSON(e,t){var u;const r=this._normalizeQuery(e),o=((u=e.outStatistics)==null?void 0:u[0])!=null,s=P("featurelayer-pbf-statistics"),l=!o||s;let p;if(this.pbfSupported&&l)try{p=await z(this.url,r,t)}catch(m){if(m.name!=="query:parsing-pbf")throw m;this.pbfSupported=!1}return this.pbfSupported&&l||(p=await N(this.url,r,t)),this._normalizeFields(p.fields),p}async featureSetFromJSON(e,t,r){if(!this._queryIs3DObjectFormat(e)||this.infoFor3D==null||!t.features)return j.fromJSON(t);const{meshFeatureSetFromJSON:o}=await d(n(()=>import("./meshFeatureSet-482457f2.js").then(s=>s.b),["assets/meshFeatureSet-482457f2.js","assets/index-4f223f87.js","assets/index-12d70eb6.css","assets/georeference-a6f32c2f.js","assets/mat3f64-221ce671.js","assets/mat4f64-1413b4a7.js","assets/spatialReferenceEllipsoidUtils-534655e8.js","assets/MeshLocalVertexSpace-7d514a5e.js","assets/MeshGeoreferencedRelativeVertexSpace-8c62ed44.js","assets/quat-f528f64e.js","assets/quatf64-3363c48e.js","assets/vec32-7bce0cd7.js","assets/BufferView-05b53f2d.js","assets/imageUtils-aed01f25.js","assets/earcut-08493f02.js","assets/Indices-78020089.js","assets/deduplicate-c19ff657.js","assets/plane-39cb8762.js","assets/sphere-3ff459b8.js","assets/ByteSizeUnit-d4757d40.js","assets/triangle-d261c379.js","assets/lineSegment-c6a9d5ed.js","assets/basicInterfaces-11f56cb3.js","assets/VertexAttribute-0e674613.js","assets/External-9aee3a81.js"]),r);return o(e,this.infoFor3D,t)}executeForCount(e,t){return L(this.url,this._normalizeQuery(e),t)}executeForExtent(e,t){return C(this.url,this._normalizeQuery(e),t)}executeForIds(e,t){return $(this.url,this._normalizeQuery(e),t)}async executeRelationshipQuery(e,t){const[{default:r},{executeRelationshipQuery:o}]=await d(Promise.all([n(()=>import("./index-4f223f87.js").then(s=>s.mR),["assets/index-4f223f87.js","assets/index-12d70eb6.css"]),n(()=>import("./executeRelationshipQuery-bced7e0f.js"),["assets/executeRelationshipQuery-bced7e0f.js","assets/index-4f223f87.js","assets/index-12d70eb6.css","assets/query-87bf5668.js","assets/pbfQueryUtils-596665ae.js","assets/pbf-62b6db65.js","assets/OptimizedGeometry-d94e541f.js","assets/OptimizedFeatureSet-1d1ac4b9.js"])]),t);return e=r.from(e),(this.gdbVersion||this.dynamicDataSource)&&((e=e.clone()).gdbVersion=e.gdbVersion||this.gdbVersion,e.dynamicDataSource=e.dynamicDataSource||this.dynamicDataSource),o(this.url,e,t)}async executeRelationshipQueryForCount(e,t){const[{default:r},{executeRelationshipQueryForCount:o}]=await d(Promise.all([n(()=>import("./index-4f223f87.js").then(s=>s.mR),["assets/index-4f223f87.js","assets/index-12d70eb6.css"]),n(()=>import("./executeRelationshipQuery-bced7e0f.js"),["assets/executeRelationshipQuery-bced7e0f.js","assets/index-4f223f87.js","assets/index-12d70eb6.css","assets/query-87bf5668.js","assets/pbfQueryUtils-596665ae.js","assets/pbf-62b6db65.js","assets/OptimizedGeometry-d94e541f.js","assets/OptimizedFeatureSet-1d1ac4b9.js"])]),t);return e=r.from(e),(this.gdbVersion||this.dynamicDataSource)&&((e=e.clone()).gdbVersion=e.gdbVersion||this.gdbVersion,e.dynamicDataSource=e.dynamicDataSource||this.dynamicDataSource),o(this.url,e,t)}async executeAttachmentQuery(e,t){const{executeAttachmentQuery:r,fetchAttachments:o,processAttachmentQueryResult:s}=await d(n(()=>import("./queryAttachments-a9fa91b2.js"),["assets/queryAttachments-a9fa91b2.js","assets/index-4f223f87.js","assets/index-12d70eb6.css","assets/query-87bf5668.js","assets/pbfQueryUtils-596665ae.js","assets/pbf-62b6db65.js","assets/OptimizedGeometry-d94e541f.js","assets/OptimizedFeatureSet-1d1ac4b9.js","assets/AttachmentInfo-92333cd1.js"]),t),l=y(this.url);return s(l,await(this.queryAttachmentsSupported?r(l,e,t):o(l,e,t)))}async executeTopFeaturesQuery(e,t){const{executeTopFeaturesQuery:r}=await d(n(()=>import("./executeTopFeaturesQuery-d0de07b8.js"),["assets/executeTopFeaturesQuery-d0de07b8.js","assets/index-4f223f87.js","assets/index-12d70eb6.css","assets/queryTopFeatures-185ab7c8.js","assets/query-87bf5668.js","assets/pbfQueryUtils-596665ae.js","assets/pbf-62b6db65.js","assets/OptimizedGeometry-d94e541f.js","assets/OptimizedFeatureSet-1d1ac4b9.js"]),t);return r(this.parsedUrl,e,this.sourceSpatialReference,t)}async executeForTopIds(e,t){const{executeForTopIds:r}=await d(n(()=>import("./executeForTopIds-1c996d06.js"),["assets/executeForTopIds-1c996d06.js","assets/index-4f223f87.js","assets/index-12d70eb6.css","assets/queryTopFeatures-185ab7c8.js","assets/query-87bf5668.js","assets/pbfQueryUtils-596665ae.js","assets/pbf-62b6db65.js","assets/OptimizedGeometry-d94e541f.js","assets/OptimizedFeatureSet-1d1ac4b9.js"]),t);return r(this.parsedUrl,e,t)}async executeForTopExtents(e,t){const{executeForTopExtents:r}=await d(n(()=>import("./executeForTopExtents-e96ab104.js"),["assets/executeForTopExtents-e96ab104.js","assets/index-4f223f87.js","assets/index-12d70eb6.css","assets/queryTopFeatures-185ab7c8.js","assets/query-87bf5668.js","assets/pbfQueryUtils-596665ae.js","assets/pbf-62b6db65.js","assets/OptimizedGeometry-d94e541f.js","assets/OptimizedFeatureSet-1d1ac4b9.js"]),t);return r(this.parsedUrl,e,t)}async executeForTopCount(e,t){const{executeForTopCount:r}=await d(n(()=>import("./executeForTopCount-262a761e.js"),["assets/executeForTopCount-262a761e.js","assets/index-4f223f87.js","assets/index-12d70eb6.css","assets/queryTopFeatures-185ab7c8.js","assets/query-87bf5668.js","assets/pbfQueryUtils-596665ae.js","assets/pbf-62b6db65.js","assets/OptimizedGeometry-d94e541f.js","assets/OptimizedFeatureSet-1d1ac4b9.js"]),t);return r(this.parsedUrl,e,t)}_normalizeQuery(e){let t=_.from(e);t.sourceSpatialReference=t.sourceSpatialReference||this.sourceSpatialReference,(this.gdbVersion||this.dynamicDataSource)&&(t=t===e?t.clone():t,t.gdbVersion=e.gdbVersion||this.gdbVersion,t.dynamicDataSource=e.dynamicDataSource?b.from(e.dynamicDataSource):this.dynamicDataSource);const{infoFor3D:r}=this;if(r!=null&&this._queryIs3DObjectFormat(e)){t=t===e?t.clone():t,t.formatOf3DObjects=null;const{supportedFormats:o,queryFormats:s}=r,l=f("model/gltf-binary",o)??h("glb",o),p=f("model/gltf+json",o)??h("gtlf",o);for(const u of s){if(u===l){t.formatOf3DObjects=u;break}u!==p||t.formatOf3DObjects||(t.formatOf3DObjects=u)}if(!t.formatOf3DObjects)throw new q("query:unsupported-3d-query-formats","Could not find any supported 3D object query format. Only supported formats are 3D_glb and 3D_gltf");if(t.outFields==null||!t.outFields.includes("*")){t=t===e?t.clone():t,t.outFields==null&&(t.outFields=[]);const{originX:u,originY:m,originZ:D,translationX:S,translationY:F,translationZ:O,scaleX:x,scaleY:g,scaleZ:R,rotationX:V,rotationY:E,rotationZ:I,rotationDeg:v}=r.transformFieldRoles;t.outFields.push(u,m,D,S,F,O,x,g,R,V,E,I,v)}}return t}_normalizeFields(e){if(this.fieldsIndex!=null&&e!=null)for(const t of e){const r=this.fieldsIndex.get(t.name);r&&Object.assign(t,r.toJSON())}}_queryIs3DObjectFormat(e){return this.infoFor3D!=null&&e.returnGeometry===!0&&e.multipatchOption!=="xyFootprint"&&!e.outStatistics}};a([c({type:b})],i.prototype,"dynamicDataSource",void 0),a([c()],i.prototype,"fieldsIndex",void 0),a([c()],i.prototype,"gdbVersion",void 0),a([c()],i.prototype,"infoFor3D",void 0),a([c({readOnly:!0})],i.prototype,"parsedUrl",null),a([c()],i.prototype,"pbfSupported",void 0),a([c()],i.prototype,"queryAttachmentsSupported",void 0),a([c()],i.prototype,"sourceSpatialReference",void 0),a([c({type:String})],i.prototype,"url",void 0),i=a([A("esri.tasks.QueryTask")],i);const K=i;export{K as x};