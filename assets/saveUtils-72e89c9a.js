import{aQ as I,aR as v,aS as g,s as b,aT as R,aU as h}from"./index-4f223f87.js";import{getSiblingOfSameTypeI as T,contentToBlob as f}from"./resourceUtils-e8671736.js";async function U(e,t,s=null){const o=await l(e,t,s);await m(o,t,s)}async function x(e,t,s,o,r=null){const n=await l(s,o,r);await e.update({data:t}),await m(n,o,r)}async function l(e,t,s=null){if(!(t!=null&&t.resources))return;const o=t.portalItem===e.portalItem?new Set(e.paths):new Set;e.paths.length=0,e.portalItem=t.portalItem;const r=new Set(t.resources.toKeep.map(a=>a.resource.path)),n=new Set,c=[];r.forEach(a=>{o.delete(a),e.paths.push(a)});for(const a of t.resources.toUpdate)if(o.delete(a.resource.path),r.has(a.resource.path)||n.has(a.resource.path)){const{resource:w,content:d,finish:S,error:y}=a,p=T(w,I());e.paths.push(p.path),c.push(i({resource:p,content:d,compress:a.compress,finish:S,error:y},s))}else e.paths.push(a.resource.path),c.push(k(a,s)),n.add(a.resource.path);for(const a of t.resources.toAdd)e.paths.push(a.resource.path),o.has(a.resource.path)?o.delete(a.resource.path):c.push(i(a,s));if(c.length===0)return o;const u=await v(c);if(g(s),u.length>0)throw new b("save:resources","Failed to save one or more resources",{errors:u});return o}async function m(e,t,s=null){if(!e||!t.portalItem)return;const o=[];for(const r of e){const n=t.portalItem.resourceFromPath(r);o.push(n.portalItem.removeResource(n,s))}await R(o)}async function i(e,t){var r,n;const s={...t??{},compress:e.compress},o=await h(e.resource.portalItem.addResource(e.resource,await f(e.content),s));if(o.ok!==!0)throw(r=e.error)==null||r.call(e,o.error),o.error;(n=e.finish)==null||n.call(e,e.resource)}async function k(e,t){var o,r;const s=await h(e.resource.update(await f(e.content),t));if(s.ok!==!0)throw(o=e.error)==null||o.call(e,s.error),s.error;(r=e.finish)==null||r.call(e,e.resource)}async function A(e){const t=[];for(const s of e.allLayers)if("beforeSave"in s&&typeof s.beforeSave=="function"){const o=s.beforeSave();o&&t.push(o)}await Promise.allSettled(t)}export{A as m,x as p,U as u};
