import{K as o,bL as l,L as d,ff as m,M as p,ba as y,bP as b,bO as N,aj as h}from"./index-4f223f87.js";let t=class extends l{constructor(r){super(r),this.namedTraceConfigurations=[]}};o([d({type:[m],json:{read:{source:"traceConfigurations"},write:{target:"traceConfigurations"}}})],t.prototype,"namedTraceConfigurations",void 0),t=o([p("esri.rest.networks.support.QueryNamedTraceConfigurationsResult")],t);const C=t;async function $(r,s,i){const e=y(r),a=s.toJSON();s.globalIds&&s.globalIds.length>0&&(a.globalIds=JSON.stringify(s.globalIds)),s.creators&&s.creators.length>0&&(a.creators=JSON.stringify(s.creators)),s.tags&&s.tags.length>0&&(a.tags=JSON.stringify(s.tags)),s.names&&s.names.length>0&&(a.names=JSON.stringify(s.names));const n={...a,f:"json"},g=b({...e.query,...n}),c=N(g,{...i,method:"post"}),f=`${e.path}/traceConfigurations/query`,{data:u}=await h(f,c);return C.fromJSON(u)}export{$ as queryNamedTraceConfigurations};