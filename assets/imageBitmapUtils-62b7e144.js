import{s as l,aS as c}from"./index-4f223f87.js";async function u(a,e,t){let r;try{r=await createImageBitmap(a)}catch(o){throw new l("request:server",`Unable to load ${e}`,{url:e,error:o})}return c(t),r}async function w(a,e,t,r,o){let n;try{n=await createImageBitmap(a)}catch(s){throw new l("request:server",`Unable to load tile ${e}/${t}/${r}`,{error:s,level:e,row:t,col:r})}return c(o),n}export{w as o,u as t};
