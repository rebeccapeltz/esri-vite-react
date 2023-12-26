import{ir as tt,as as pt,at as ct,aq as ft,ar as _t,ap as dt,bs as et,is as yt,it as mt,iu as gt,ak as A,iv as xt,iw as Pt,J as Nt,s as It,i6 as st,eX as zt}from"./index-4f223f87.js";import{t as k}from"./OptimizedGeometry-d94e541f.js";import{$ as J,L as N,r as St}from"./color-19ec2e02.js";import{t as vt}from"./definitions-bd9226bb.js";let it=class{static fromOptimized(t,s,i=!1,n=!1){return new C().initialize(t,s,i,n,1)}static fromJSON(t,s=!1,i=!1){const[n,r]=X(t);return new T().initialize(n,r,s,i,1)}static fromOptimizedCIM(t,s,i=!1,n=!1){return new Y().initialize(t,s,i,n,1)}static fromJSONCIM(t,s=!1,i=!1){const[n,r]=X(t);return new j().initialize(n,r,s,i,1)}static fromFeatureSetReader(t){const s=t.readGeometryForDisplay(),i=t.geometryType;return s&&i?this.fromOptimized(s,i):null}static fromFeatureSetReaderCIM(t){const s=t.readGeometryForDisplay(),i=t.geometryType;return s&&i?this.fromOptimizedCIM(s,i):null}static createEmptyOptimized(t,s=!1,i=!1){return new C().initialize(new k,t,s,i,1)}static createEmptyJSON(t,s=!1,i=!1){return new T().initialize([],t,s,i,1)}static createEmptyOptimizedCIM(t,s=!1,i=!1){return new Y().initialize(new k,t,s,i,1)}static createEmptyJSONCIM(t,s=!1,i=!1){return new j().initialize([],t,s,i,1)}asJSON(){const t=tt(this);return this.geometryType==="esriGeometryEnvelope"?{xmin:t[0][0][0],ymin:t[0][0][1],xmax:t[0][2][0],ymax:t[0][2][1]}:this.geometryType==="esriGeometryMultipoint"?{points:t.flat()}:this.geometryType==="esriGeometryPoint"?{x:t[0][0][0],y:t[0][0][1]}:this.geometryType==="esriGeometryPolygon"?{rings:t}:{paths:t}}getCurrentRingArea(){if(!this||this.pathSize<3)return 0;let t,s,i=0;if(this.seekPathStart(),!this.nextPoint())return 0;t=this.x,s=this.y;const n=t,r=s;for(;this.nextPoint();)i+=(t-this.x)*(s+this.y),t=this.x,s=this.y;return i+=(t-n)*(s+r),-.5*i}invertY(){this.yFactor*=-1}},C=class nt extends it{constructor(){super(...arguments),this._end=-1}initialize(t,s,i,n,r){return this.hasZ=i,this.hasM=n,this.geometryType=s,this._stride=2+Number(i)+Number(n),this._geometry=t,this._pathIndex=-1,this._pathOffset=0,this._pointOffset=-this._stride,this._end=-1,this.yFactor=r,this}reset(){this.initialize(this._geometry,this.geometryType,this.hasZ,this.hasM,this.yFactor)}seekPath(t){if(t>=0&&t<this.totalSize){if(this._pathIndex<t)for(;this._pathIndex<t&&this.nextPath(););else if(this._pathIndex>t)for(;this._pathIndex>t&&this.prevPath(););return!0}return!1}seekPathStart(){this._pointOffset=this._pathOffset-this._stride}seekPathEnd(){this._pointOffset=this._end}seekInPath(t){const s=this._pathOffset+t*this._stride;return s>=0&&s<this._end&&(this._pointOffset=s,!0)}nextPoint(){return(this._pointOffset+=this._stride)<this._end}prevPoint(){return(this._pointOffset-=this._stride)>=this._pathOffset}nextPath(){if(this._pathIndex>=0){const s=this._geometry.isPoint?1:this._geometry.lengths[this._pathIndex];this._pathOffset+=this._stride*s}this._pointOffset=this._pathOffset-this._stride;const t=this._geometry.isPoint?1:this._geometry.lengths[this._pathIndex+1];return this._end=this._pointOffset+this._stride+this._stride*t,++this._pathIndex<this.totalSize}prevPath(){this._end=this._pathOffset;const t=this._geometry.isPoint?1:this._geometry.lengths[this._pathIndex-1];return this._pathOffset-=this._stride*t,this._pointOffset=this._pathOffset-this._stride,--this._pathIndex>=0}pathLength(){const t=this._end,s=this._stride,i=this._geometry.coords;let n=0;for(let r=this._pathOffset+s;r<t;r+=s){const h=i[r-s],o=i[r-s+1],a=i[r]-h,u=i[r+1]-o;n+=Math.sqrt(a*a+u*u)}return n}startPath(){this._geometry.lengths.push(0)}pushPath(t){this.startPath(),this.pushPoints(t)}pushPoint(t){for(let s=0;s<this._stride;++s)this._geometry.coords.push(t[s]);this._geometry.lengths[this.totalSize-1]++}pushXY(t,s){this._geometry.coords.push(t,s),this._geometry.lengths[this.totalSize-1]++}pushPoints(t){for(const s of t)for(let i=0;i<this._stride;++i)this._geometry.coords.push(s[i]);this._geometry.lengths[this.totalSize-1]+=t.length}pushCursor(t){const s=t.asOptimized();this._geometry.coords.push(...s.coords),this._geometry.lengths.push(...s.lengths)}asOptimized(){const t=this._geometry.clone();if(this.yFactor!==1)for(let s=1;s<t.coords.length;s+=this._stride)t.coords[s]*=this.yFactor;return this.geometryType==="esriGeometryPoint"&&(t.lengths.length=0),t}isClosed(){const t=this._geometry.coords,s=this._pathOffset,i=this._end-this._stride;for(let n=0;n<this._stride;n++)if(t[s+n]!==t[i+n])return!1;return!0}clone(){return new nt().initialize(this._geometry.clone(),this.geometryType,this.hasZ,this.hasM,this.yFactor)}get totalPoints(){return this._geometry.coords.length/this._stride}get pathSize(){const{lengths:t}=this._geometry;return this._pathIndex<0||this._pathIndex>t.length-1?0:t[this._pathIndex]}get totalSize(){return this._geometry.lengths.length}get x(){return this._geometry.coords[this._pointOffset]}set x(t){this._geometry.coords[this._pointOffset]=t}get y(){return this.yFactor*this._geometry.coords[this._pointOffset+1]}set y(t){this._geometry.coords[this._pointOffset+1]=this.yFactor*t}get z(){return this._geometry.coords[this._pointOffset+2]}set z(t){this._geometry.coords[this._pointOffset+2]=t}get m(){const t=this.hasZ?3:2;return this._geometry.coords[this._pointOffset+t]}set m(t){this._geometry.coords[this._pointOffset+3]=t}get pathIndex(){return this._pathIndex}get _coordIndex(){return this._pointOffset/this._stride}};function Ot(e){const t=[e.x,e.y];return e.z&&t.push(e.z),e.m&&t.push(e.m),t}function X(e){return pt(e)?[e.rings,"esriGeometryPolygon"]:ct(e)?[e.paths,"esriGeometryPolyline"]:ft(e)?[[e.points],"esriGeometryMultipoint"]:_t(e)?[[[[e.xmin,e.ymin],[e.xmin,e.ymax],[e.xmax,e.ymax],[e.xmax,e.ymin],[e.xmin,e.ymin]]],"esriGeometryEnvelope"]:dt(e)?[[[Ot(e)]],"esriGeometryPoint"]:[[],"esriGeometryPolyline"]}let T=class rt extends it{initialize(t,s,i,n,r){return this._paths=t,this.geometryType=s,this.hasZ=i,this.hasM=n,this._pathIndex=this._pointIndex=-1,this.yFactor=r,this._mIndex=this.hasZ?3:2,this}reset(){this._pathIndex=this._pointIndex=-1}seekPath(t){return t>=0&&t<this.totalSize&&(this._pathIndex=t,this._pointIndex=-1,this._currentPath=this._paths[t],!0)}seekPathStart(){this._pointIndex=-1}seekPathEnd(){this._pointIndex=this._currentPath.length}seekInPath(t){return t>=0&&t<this._currentPath.length&&(this._pointIndex=t,this._currentPoint=this._currentPath[this._pointIndex],!0)}nextPoint(){return this._currentPoint=this._currentPath[++this._pointIndex],this._pointIndex<this._currentPath.length}prevPoint(){return this._currentPoint=this._currentPath[--this._pointIndex],this._pointIndex>=0}nextPath(){return this._pointIndex=-1,this._currentPath=this._paths[++this._pathIndex],this._pathIndex<this.totalSize}prevPath(){return this._pointIndex=-1,this._currentPath=this._paths[--this._pathIndex],this._pathIndex>=0}pathLength(){const t=this._currentPath.length,s=this._currentPath;let i=0;for(let n=1;n<t;n++){const r=s[n-1],h=s[n],o=r[0],a=r[1],u=h[0]-o,p=h[1]-a;i+=Math.sqrt(u*u+p*p)}return i}startPath(){this._paths.push([])}pushPath(t){this._paths.push(t)}pushPoint(t){this._paths[this.totalSize-1].push(t)}pushXY(t,s){this._paths[this.totalSize-1].push([t,s])}pushPoints(t){this._paths[this.totalSize-1].push(...t)}pushCursor(t){const s=tt(t);for(const i of s)this.pushPath(i)}asOptimized(){const t=new k;if(this.geometryType==="esriGeometryPoint")t.coords.push(...this._paths[0][0]),t.lengths.length=0;else for(const s of this._paths){for(const i of s)t.coords.push(i[0]),t.coords.push(i[1]*this.yFactor),this.hasZ&&t.coords.push(i[2]),this.hasM&&t.coords.push(i[this._mIndex]);t.lengths.push(s.length)}return t}isClosed(){const t=this._currentPath[0],s=this._currentPath[this._currentPath.length-1];for(let i=0;i<t.length;i++)if(t[i]!==s[i])return!1;return!0}clone(){return new rt().initialize(et(this._paths),this.geometryType,this.hasZ,this.hasM,this.yFactor)}get totalPoints(){return this._paths.map(t=>t.length).reduce((t,s)=>t+s)}get pathSize(){return this._pathIndex<0||this._pathIndex>this.totalSize-1?-1:this._paths[this._pathIndex].length}get totalSize(){return this._paths.length}get x(){return this._currentPoint[0]}set x(t){this._currentPoint[0]=t}get y(){return this.yFactor*this._currentPoint[1]}set y(t){this._currentPoint[1]=this.yFactor*t}get z(){return this._currentPoint[2]}set z(t){this._currentPoint[2]=t}get m(){return this._currentPoint[this._mIndex]}set m(t){this._currentPoint[this._mIndex]=t}get pathIndex(){return this._pathIndex}};const O=4,$=1;let Y=class ot extends C{initialize(t,s,i,n,r){return super.initialize(t,s,i,n,r),this._controlPoints||(this._controlPoints=this._controlPoints=new Array(this.totalSize).fill(void 0).map(h=>new Set)),this}startPath(){super.startPath(),this._controlPoints.push(new Set)}clone(){const t=new ot().initialize(this._geometry.clone(),this.geometryType,this.hasZ,this.hasM,this.yFactor);return t._controlPoints=this._controlPoints,t}setControlPoint(){this._controlPoints[this.pathIndex].add(this._coordIndex)}getControlPoint(){return this._controlPoints[this.pathIndex].has(this._coordIndex)}setControlPointAt(t){this._controlPoints[this.pathIndex].add(t)}getControlPointAt(t){return this._controlPoints[this.pathIndex].has(t)}},j=class ht extends T{initialize(t,s,i,n,r){return super.initialize(t,s,i,n,r)}clone(){return new ht().initialize(et(this._paths),this.geometryType,this.hasZ,this.hasM,1)}setControlPoint(){this._paths[this.pathIndex][this._pointIndex][O]=$}getControlPoint(){return this._paths[this.pathIndex][this._pointIndex][O]===$}setControlPointAt(t){this._paths[this.pathIndex][t][O]=$}getControlPointAt(t){return this._paths[this.pathIndex][t][O]===$}};const $t=100*222045e-21;function Rt(e){if(e.totalSize===0)return null;const t=yt(e);if(!t)return null;const s=4*(Math.abs(t[0])+Math.abs(t[2])+Math.abs(t[1])+Math.abs(t[3])+1)*$t;let i=0,n=0;e.reset();for(let m=0;e.nextPath();m++){const g=e.getCurrentRingArea();g>n&&(n=g,i=m)}if(e.seekPath(i),e.pathSize===0)return null;e.seekPathStart();const r=mt(e);if(Math.abs(n)<=2*s*s)return[(r[0]+r[2])/2,(r[1]+r[3])/2];e.seekPathStart();const h=gt(e,A());if(h===null)return null;if(e.totalPoints<4)return h;const o=[[NaN,NaN],[NaN,NaN],[NaN,NaN],[NaN,NaN]],a=[NaN,NaN,NaN,NaN],u=[NaN,NaN,NaN,NaN];let p=!1,l=S(h,e,!0);l.distance===0&&(p=!0,o[0][0]=h[0],o[0][1]=h[1],l=S(h,e,!1)),a[0]=l.distance,u[0]=0;const d=[NaN,NaN];let f=!1,y=.25,_=-1,c=NaN;do if(c=NaN,o[1]=F(e,b(r[0],r[2],y),s,t),isNaN(o[1][0])||isNaN(o[1][1])||(l=S(o[1],e,!1),c=l.distance),!isNaN(c)&&c>s&&E(o[1],e))f=!0,a[1]=c,u[1]=I(o[1],h);else if(!isNaN(c)&&c>_&&(_=c,d[0]=o[1][0],d[1]=o[1][1]),y-=.01,y<.1){if(!(_>=0))break;f=!0,a[1]=_,o[1][0]=d[0],o[1][1]=d[1],u[1]=I(o[1],h)}while(!f);f=!1,y=.5,_=-1;let G=.01,V=1;do if(c=NaN,o[2]=F(e,b(r[0],r[2],y),s,t),isNaN(o[2][0])||isNaN(o[2][1])||(l=S(o[2],e,!1),c=l.distance),!isNaN(c)&&c>s&&E(o[2],e))f=!0,a[2]=c,u[2]=I(o[2],h);else if(!isNaN(c)&&c>_)_=c,d[0]=o[2][0],d[1]=o[2][1];else if(c>_&&(_=c,d[0]=o[2][0],d[1]=o[2][1]),y=.5+G*V,G+=.01,V*=-1,y<.3||y>.7){if(!(_>=0))break;f=!0,a[2]=_,o[2][0]=d[0],o[2][1]=d[1],u[2]=I(o[2],h)}while(!f);f=!1,y=.75,_=-1;do if(c=NaN,o[3]=F(e,b(r[0],r[2],y),s,t),isNaN(o[3][0])||isNaN(o[3][1])||(l=S(o[3],e,!1),c=l.distance),!isNaN(c)&&c>s&&E(o[3],e))f=!0,a[3]=c,u[3]=I(o[3],h);else if(c>_&&(_=c,d[0]=o[3][0],d[1]=o[3][1]),y+=.01,y>.9){if(!(_>=0))break;f=!0,a[3]=_,o[3][0]=d[0],o[3][1]=d[1],u[3]=I(o[3],h)}while(!f);const P=[0,1,2,3],v=p?0:1;let D;for(let m=v;m<4;m++)for(let g=v;g<3;g++){const R=u[g],q=u[g+1];Et(R,q)>0&&(D=P[g],P[g]=P[g+1],P[g+1]=D,u[g]=q,u[g+1]=R)}let L=v,U=0,z=0;for(let m=v;m<4;m++){switch(m){case 0:z=2*a[P[m]];break;case 1:z=1.66666666*a[P[m]];break;case 2:z=1.33333333*a[P[m]];break;case 3:z=a[P[m]]}z>U&&(U=z,L=P[m])}return o[L]}function E(e,t){let s,i,n,r,h=0;for(t.reset();t.nextPath()&&t.nextPoint();)for(s=t.x,i=t.y;t.nextPoint();s=n,i=r)n=t.x,r=t.y,i>e[1]!=r>e[1]&&((n-s)*(e[1]-i)-(r-i)*(e[0]-s)>0?h++:h--);return h!==0}function S(e,t,s){if(s&&E(e,t))return{coord:e,distance:0};let i=1/0,n=0,r=0,h=[0,0],o=[0,0];const a=[0,0];for(t.reset();t.nextPath()&&t.nextPoint();)if(!(t.pathSize<2))for(h[0]=t.x,h[1]=t.y;t.nextPoint();h=o){o=[t.x,t.y],xt(a,e,h,o);const u=I(e,a);u<i&&(i=u,n=a[0],r=a[1])}return{coord:[n,r],distance:Math.sqrt(i)}}function F(e,t,s,i){const n=[t,0];let r=1/0,h=1/0,o=!1,a=!1;const u=[[t,i[1]-1],[t,i[3]+1]],p=[0,0],l=[0,0],d=[0,0],f=[[0,0],[0,0]],y=A();for(e.reset();e.nextPath()&&e.nextPoint();)if(!(e.pathSize<2))for(f[0][0]=e.x,f[0][1]=e.y;e.nextPoint();f[0][0]=f[1][0],f[0][1]=f[1][1]){if(f[1][0]=e.x,f[1][1]=e.y,wt(y,f)===null||(l[0]=u[0][0],l[1]=u[0][1],d[0]=u[1][0],d[1]=u[1][1],Mt(y,l,d)===0)||!Pt(u[0],u[1],f[0],f[1],p))continue;const _=p[1];r>h?_<r&&(r=_,o=!0):_<h&&(h=_,a=!0)}return o&&a?n[1]=(r+h)/2:n[0]=n[1]=NaN,n}function wt(e,t){if(t.length<2)return null;e||(e=A());const[s,i]=t[0],[n,r]=t[1];return e[0]=Math.min(s,n),e[1]=Math.min(i,r),e[2]=Math.max(s,n),e[3]=Math.max(i,r),e}const w=1,M=4,B=3,Q=12;function Mt(e,t,s){let i=x(t,e),n=x(s,e);const r=e[0],h=e[1],o=e[2],a=e[3];if(i&n)return 0;if(!(i|n))return 4;const u=(i?1:0)|(n?2:0);do{const p=s[0]-t[0],l=s[1]-t[1];if(p>l)i&B?(i&w?(t[1]+=l*(r-t[0])/p,t[0]=r):(t[1]+=l*(o-t[0])/p,t[0]=o),i=x(t,e)):n&B?(n&w?(s[1]+=l*(r-s[0])/p,s[0]=r):(s[1]+=l*(o-s[0])/p,s[0]=o),n=x(s,e)):i?(i&M?(t[0]+=p*(h-t[1])/l,t[1]=h):(t[0]+=p*(a-t[1])/l,t[1]=a),i=x(t,e)):(n&M?(s[0]+=p*(h-s[1])/l,s[1]=h):(s[0]+=p*(a-s[1])/l,s[1]=a),n=x(s,e));else if(i&Q?(i&M?(t[0]+=p*(h-t[1])/l,t[1]=h):(t[0]+=p*(a-t[1])/l,t[1]=a),i=x(t,e)):n&Q?(n&M?(s[0]+=p*(h-s[1])/l,s[1]=h):(s[0]+=p*(a-s[1])/l,s[1]=a),n=x(s,e)):i?(i&w?(t[1]+=l*(r-t[0])/p,t[0]=r):(t[1]+=l*(o-t[0])/p,t[0]=o),i=x(t,e)):(n&w?(s[1]+=l*(r-s[0])/p,s[0]=r):(s[1]+=l*(o-s[0])/p,s[0]=o),n=x(s,e)),i&n)return 0}while(i|n);return u}function x(e,t){return(e[0]<t[0]?1:0)|(e[0]>t[2]?1:0)<<1|(e[1]<t[1]?1:0)<<2|(e[1]>t[3]?1:0)<<3}function b(e,t,s){return e+(t-e)*s}function I(e,t){return(e[0]-t[0])*(e[0]-t[0])+(e[1]-t[1])*(e[1]-t[1])}function Et(e,t){if(e<t)return-1;if(e>t)return 1;if(e===t)return 0;const s=isNaN(e),i=isNaN(t);return s<i?-1:s>i?1:0}const Ft=8388607,at=8388608,bt=254,kt=255,qt=0,lt=1,ut=e=>(e&at)>>>23,Jt=e=>e&Ft,Xt=e=>ut(e)===lt?bt:kt;function Yt(e){return ut(e)===lt}function jt(e,t){return((t?at:0)|e)>>>0}const Bt=(e,t)=>e&&((...s)=>t.warn("DEBUG:",...s))||(()=>null),Qt=!1;function Ct(e){return J(e.minDataValue)&&J(e.maxDataValue)&&e.minSize!=null&&e.maxSize!=null?N.SIZE_MINMAX_VALUE:(e.expression&&e.expression==="view.scale"||e.valueExpression&&e.valueExpression==="$view.scale")&&Array.isArray(e.stops)?N.SIZE_SCALE_STOPS:(e.field!=null||e.expression&&e.expression!=="view.scale"||e.valueExpression&&e.valueExpression!=="$view.scale")&&(Array.isArray(e.stops)||"levels"in e&&e.levels)?N.SIZE_FIELD_STOPS:(e.field!=null||e.expression&&e.expression!=="view.scale"||e.valueExpression&&e.valueExpression!=="$view.scale")&&e.valueUnit!=null?N.SIZE_UNIT_VALUE:(Nt.getLogger("esri.views.2d.engine.webgl").error(new It("mapview-bad-type","Found invalid size VisualVariable",e)),N.NONE)}function Ht(e,t){if(!e||!t)return e;switch(t){case"radius":case"distance":return 2*e;case"diameter":case"width":return e;case"area":return Math.sqrt(e)}return e}function Tt(e){return{value:e.value,size:st(e.size)}}function Z(e){return(e??[]).map(t=>Tt(t))}function H(e){if(typeof e=="string"||typeof e=="number")return st(e);const t=e;return{type:"size",expression:t.expression,stops:Z(t.stops)}}const K=e=>{const t=[],s=[],i=Z(e),n=i.length;for(let r=0;r<6;r++){const h=i[Math.min(r,n-1)];t.push(h.value),s.push(h.size==null?vt:zt(h.size))}return{values:new Float32Array(t),sizes:new Float32Array(s)}};function Kt(e){const t=e&&e.length>0?{}:null,s=t?{}:null;if(!t||!s)return{vvFields:t,vvRanges:s};for(const i of e)if(i.field&&(t[i.type]=i.field),i.type==="size"){s.size||(s.size={});const n=i;switch(Ct(n)){case N.SIZE_MINMAX_VALUE:s.size.minMaxValue={minDataValue:n.minDataValue,maxDataValue:n.maxDataValue,minSize:H(n.minSize),maxSize:H(n.maxSize)};break;case N.SIZE_SCALE_STOPS:s.size.scaleStops={stops:Z(n.stops)};break;case N.SIZE_FIELD_STOPS:if(n.levels){const r={};for(const h in n.levels)r[h]=K(n.levels[h]);s.size.fieldStops={type:"level-dependent",levels:r}}else s.size.fieldStops={type:"static",...K(n.stops)};break;case N.SIZE_UNIT_VALUE:s.size.unitValue={unit:n.valueUnit,valueRepresentation:n.valueRepresentation??void 0}}}else if(i.type==="color")s.color=Zt(i);else if(i.type==="opacity")s.opacity=At(i);else if(i.type==="rotation"){const n=i;s.rotation={type:n.rotationType}}return{vvFields:t,vvRanges:s}}function At(e){const t={values:[0,0,0,0,0,0,0,0],opacities:[0,0,0,0,0,0,0,0]};if(typeof e.field=="string"){if(!e.stops)return null;{if(e.stops.length>8)return null;const s=e.stops;for(let i=0;i<8;++i){const n=s[Math.min(i,s.length-1)];t.values[i]=n.value,t.opacities[i]=n.opacity}}}else{if(!(e.stops&&e.stops.length>=0))return null;{const s=e.stops&&e.stops.length>=0?e.stops[0].opacity:0;for(let i=0;i<8;i++)t.values[i]=1/0,t.opacities[i]=s}}return t}function W(e,t,s){e[4*t]=s.r/255,e[4*t+1]=s.g/255,e[4*t+2]=s.b/255,e[4*t+3]=s.a}function Zt(e){if(e==null||e.normalizationField)return null;const t={field:null,values:[0,0,0,0,0,0,0,0],colors:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]};if(typeof e.field=="string"){if(!e.stops)return null;{if(e.stops.length>8)return null;t.field=e.field;const s=e.stops;for(let i=0;i<8;++i){const n=s[Math.min(i,s.length-1)];t.values[i]=n.value,W(t.colors,i,n.color)}}}else{if(!(e.stops&&e.stops.length>=0))return null;{const s=e.stops&&e.stops.length>=0&&e.stops[0].color;for(let i=0;i<8;i++)t.values[i]=1/0,W(t.colors,i,s)}}for(let s=0;s<32;s+=4)St(t.colors,s,!0);return t}export{it as a,Qt as b,lt as c,Ht as d,ut as e,Jt as f,Ft as g,Ct as h,Xt as i,Kt as j,Rt as l,Bt as n,Yt as p,jt as s,qt as u};
