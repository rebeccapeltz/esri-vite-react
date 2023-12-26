import{fo as O,$ as C,m as I,fp as k,fq as x}from"./index-4f223f87.js";import{O as $}from"./quat-f528f64e.js";import{e as D}from"./quatf64-3363c48e.js";import{r as F,n as A}from"./vec3f32-2da9db36.js";import{a as R,b as U,d as z}from"./PointCloudUniqueValueRenderer-44abd7b8.js";import{w as B,l as J,c as N,I as V}from"./I3SBinaryReader-4073a50c.js";import"./mat3f64-221ce671.js";import"./VertexAttribute-0e674613.js";function q(u,t,a,r){const{rendererJSON:f,isRGBRenderer:p}=u;let n=null,l=null;if(t&&p)n=t;else if(t&&(f==null?void 0:f.type)==="pointCloudUniqueValueRenderer"){l=R.fromJSON(f);const e=l.colorUniqueValueInfos;n=new Uint8Array(3*r);const i=g(l.fieldTransformType);for(let o=0;o<r;o++){const c=(i?i(t[o]):t[o])+"";for(let s=0;s<e.length;s++)if(e[s].values.includes(c)){n[3*o]=e[s].color.r,n[3*o+1]=e[s].color.g,n[3*o+2]=e[s].color.b;break}}}else if(t&&(f==null?void 0:f.type)==="pointCloudStretchRenderer"){l=U.fromJSON(f);const e=l.stops;n=new Uint8Array(3*r);const i=g(l.fieldTransformType);for(let o=0;o<r;o++){const c=i?i(t[o]):t[o],s=e.length-1;if(c<e[0].value)n[3*o]=e[0].color.r,n[3*o+1]=e[0].color.g,n[3*o+2]=e[0].color.b;else if(c>=e[s].value)n[3*o]=e[s].color.r,n[3*o+1]=e[s].color.g,n[3*o+2]=e[s].color.b;else for(let b=1;b<e.length;b++)if(c<e[b].value){const m=(c-e[b-1].value)/(e[b].value-e[b-1].value);n[3*o]=e[b].color.r*m+e[b-1].color.r*(1-m),n[3*o+1]=e[b].color.g*m+e[b-1].color.g*(1-m),n[3*o+2]=e[b].color.b*m+e[b-1].color.b*(1-m);break}}}else if(t&&(f==null?void 0:f.type)==="pointCloudClassBreaksRenderer"){l=z.fromJSON(f);const e=l.colorClassBreakInfos;n=new Uint8Array(3*r);const i=g(l.fieldTransformType);for(let o=0;o<r;o++){const c=i?i(t[o]):t[o];for(let s=0;s<e.length;s++)if(c>=e[s].minValue&&c<=e[s].maxValue){n[3*o]=e[s].color.r,n[3*o+1]=e[s].color.g,n[3*o+2]=e[s].color.b;break}}}else n=new Uint8Array(3*r).fill(255);if(a&&(l!=null&&l.colorModulation)){const e=l.colorModulation.minValue,i=l.colorModulation.maxValue,o=.3;for(let c=0;c<r;c++){const s=a[c],b=s>=i?1:s<=e?o:o+(1-o)*(s-e)/(i-e);n[3*c]=b*n[3*c],n[3*c+1]=b*n[3*c+1],n[3*c+2]=b*n[3*c+2]}}return n}function T(u,t){if(u.encoding==null||u.encoding===""){const a=B(t,u);if(a.vertexAttributes.position==null)return;const r=J(t,a.vertexAttributes.position),f=a.header.fields,p=[f.offsetX,f.offsetY,f.offsetZ],n=[f.scaleX,f.scaleY,f.scaleZ],l=r.length/3,e=new Float64Array(3*l);for(let i=0;i<l;i++)e[3*i]=r[3*i]*n[0]+p[0],e[3*i+1]=r[3*i+1]*n[1]+p[1],e[3*i+2]=r[3*i+2]*n[2]+p[2];return e}if(u.encoding==="lepcc-xyz")return N(t).result}function h(u,t,a){return u!=null&&u.attributeInfo.useElevation?t?_(t,a):null:u!=null&&u.attributeInfo.storageInfo?V(u.attributeInfo.storageInfo,u.buffer,a):null}function _(u,t){const a=new Float64Array(t);for(let r=0;r<t;r++)a[r]=u[3*r+2];return a}function E(u,t,a,r,f){const p=u.length/3;let n=0;for(let l=0;l<p;l++){let e=!0;for(let i=0;i<r.length&&e;i++){const{filterJSON:o}=r[i],c=f[i].values[l];switch(o.type){case"pointCloudValueFilter":{const s=o.mode==="exclude";o.values.includes(c)===s&&(e=!1);break}case"pointCloudBitfieldFilter":{const s=w(o.requiredSetBits),b=w(o.requiredClearBits);(c&s)===s&&!(c&b)||(e=!1);break}case"pointCloudReturnFilter":{const s=15&c,b=c>>>4&15,m=b>1,M=s===1,y=s===b;let v=!1;for(const d of o.includedReturns)if(d==="last"&&y||d==="firstOfMany"&&M&&m||d==="lastOfMany"&&y&&m||d==="single"&&!m){v=!0;break}v||(e=!1);break}}}e&&(a[n]=l,u[3*n]=u[3*l],u[3*n+1]=u[3*l+1],u[3*n+2]=u[3*l+2],t[3*n]=t[3*l],t[3*n+1]=t[3*l+1],t[3*n+2]=t[3*l+2],n++)}return n}function g(u){switch(u){default:case null:case"none":return t=>t;case"low-four-bit":return t=>15&t;case"high-four-bit":return t=>(240&t)>>4;case"absolute-value":return t=>Math.abs(t);case"modulo-ten":return t=>t%10}}function w(u){let t=0;for(const a of u||[])t|=1<<a;return t}class P{transform(t){const a=this._transform(t),r=[a.points.buffer,a.rgb.buffer];a.pointIdFilterMap!=null&&r.push(a.pointIdFilterMap.buffer);for(const f of a.attributes)"buffer"in f.values&&O(f.values.buffer)&&f.values.buffer!==a.rgb.buffer&&r.push(f.values.buffer);return Promise.resolve({result:a,transferList:r})}_transform(t){const a=T(t.schema,t.geometryBuffer);let r=a.length/3,f=null;const p=new Array,n=h(t.primaryAttributeData,a,r);t.primaryAttributeData!=null&&n&&p.push({attributeInfo:t.primaryAttributeData.attributeInfo,values:n});const l=h(t.modulationAttributeData,a,r);t.modulationAttributeData!=null&&l&&p.push({attributeInfo:t.modulationAttributeData.attributeInfo,values:l});let e=q(t.rendererInfo,n,l,r);if(t.filterInfo&&t.filterInfo.length>0&&t.filterAttributesData!=null){const o=t.filterAttributesData.filter(C).map(c=>{const s=h(c,a,r),b={attributeInfo:c.attributeInfo,values:s};return p.push(b),b});f=new Uint32Array(r),r=E(a,e,f,t.filterInfo,o)}for(const o of t.userAttributesData){const c=h(o,a,r);p.push({attributeInfo:o.attributeInfo,values:c})}3*r<e.length&&(e=new Uint8Array(e.buffer.slice(0,3*r))),this._applyElevationOffsetInPlace(a,r,t.elevationOffset);const i=this._transformCoordinates(a,r,t.obb,I.fromJSON(t.inSR),I.fromJSON(t.outSR));return{obb:t.obb,points:i,rgb:e,attributes:p,pointIdFilterMap:f}}_transformCoordinates(t,a,r,f,p){if(!k(t,f,0,t,p,0,a))throw new Error("Can't reproject");const n=F(r.center[0],r.center[1],r.center[2]),l=A(),e=A();$(S,r.quaternion);const i=new Float32Array(3*a);for(let o=0;o<a;o++)l[0]=t[3*o]-n[0],l[1]=t[3*o+1]-n[1],l[2]=t[3*o+2]-n[2],x(e,l,S),r.halfSize[0]=Math.max(r.halfSize[0],Math.abs(e[0])),r.halfSize[1]=Math.max(r.halfSize[1],Math.abs(e[1])),r.halfSize[2]=Math.max(r.halfSize[2],Math.abs(e[2])),i[3*o]=l[0],i[3*o+1]=l[1],i[3*o+2]=l[2];return i}_applyElevationOffsetInPlace(t,a,r){if(r!==0)for(let f=0;f<a;f++)t[3*f+2]+=r}}const S=D();function Q(){return new P}export{Q as default};
