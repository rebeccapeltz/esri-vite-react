import{d0 as c,c2 as e,d1 as g,d2 as s,cG as m,d3 as p,d4 as b,aL as h,d5 as l}from"./index-4f223f87.js";import{s as w,c as x}from"./sphere-3ff459b8.js";function a(r){return r?{origin:c(r.origin),vector:c(r.vector)}:{origin:e(),vector:e()}}function j(r,o,n=a()){return g(n.origin,r),s(n.vector,o,r),n}function k(r,o,n){return G(r,o,0,1,n)}function G(r,o,n,u,i){const{vector:t,origin:v}=r,d=s(x.get(),o,v),f=m(t,d)/p(t);return b(i,t,h(f,n,u)),l(i,i,r.origin)}new w(()=>a());export{j as b,k as l,a as v};
