var T,c;(function(o){o[o.Unknown=0]="Unknown",o[o.Point=1]="Point",o[o.LineString=2]="LineString",o[o.Polygon=3]="Polygon"})(T||(T={}));class g{constructor(t,s){this.x=t,this.y=s}clone(){return new g(this.x,this.y)}equals(t,s){return t===this.x&&s===this.y}isEqual(t){return t.x===this.x&&t.y===this.y}setCoords(t,s){this.x=t,this.y=s}normalize(){const t=this.x,s=this.y,i=Math.sqrt(t*t+s*s);this.x/=i,this.y/=i}rightPerpendicular(){const t=this.x;this.x=this.y,this.y=-t}move(t,s){this.x+=t,this.y+=s}assign(t){this.x=t.x,this.y=t.y}assignAdd(t,s){this.x=t.x+s.x,this.y=t.y+s.y}assignSub(t,s){this.x=t.x-s.x,this.y=t.y-s.y}rotate(t,s){const i=this.x,h=this.y;this.x=i*t-h*s,this.y=i*s+h*t}scale(t){this.x*=t,this.y*=t}length(){const t=this.x,s=this.y;return Math.sqrt(t*t+s*s)}static distance(t,s){const i=s.x-t.x,h=s.y-t.y;return Math.sqrt(i*i+h*h)}static add(t,s){return new g(t.x+s.x,t.y+s.y)}static sub(t,s){return new g(t.x-s.x,t.y-s.y)}}let M=class{constructor(t,s,i){this.ratio=t,this.x=s,this.y=i}},q=class{constructor(t,s,i,h=8,e=8){this._lines=[],this._starts=[],this.validateTessellation=!0,this._pixelRatio=h,this._pixelMargin=e,this._tileSize=512*h,this._dz=t,this._yPos=s,this._xPos=i}setPixelMargin(t){t!==this._pixelMargin&&(this._pixelMargin=t,this.setExtent(this._extent))}setExtent(t){this._extent=t,this._finalRatio=this._tileSize/t*(1<<this._dz);let s=this._pixelRatio*this._pixelMargin;s/=this._finalRatio;const i=t>>this._dz;s>i&&(s=i),this._margin=s,this._xmin=i*this._xPos-s,this._ymin=i*this._yPos-s,this._xmax=this._xmin+i+2*s,this._ymax=this._ymin+i+2*s}reset(t){this._type=t,this._lines=[],this._starts=[],this._line=null,this._start=0}moveTo(t,s){this._pushLine(),this._prevIsIn=this._isIn(t,s),this._moveTo(t,s,this._prevIsIn),this._prevPt=new g(t,s),this._firstPt=new g(t,s),this._dist=0}lineTo(t,s){const i=this._isIn(t,s),h=new g(t,s),e=g.distance(this._prevPt,h);let n,a,_,y,d,f,r,p;if(i)this._prevIsIn?this._lineTo(t,s,!0):(n=this._prevPt,a=h,_=this._intersect(a,n),this._start=this._dist+e*(1-this._r),this._lineTo(_.x,_.y,!0),this._lineTo(a.x,a.y,!0));else if(this._prevIsIn)a=this._prevPt,n=h,_=this._intersect(a,n),this._lineTo(_.x,_.y,!0),this._lineTo(n.x,n.y,!1);else{const l=this._prevPt,x=h;if(l.x<=this._xmin&&x.x<=this._xmin||l.x>=this._xmax&&x.x>=this._xmax||l.y<=this._ymin&&x.y<=this._ymin||l.y>=this._ymax&&x.y>=this._ymax)this._lineTo(x.x,x.y,!1);else{const u=[];if((l.x<this._xmin&&x.x>this._xmin||l.x>this._xmin&&x.x<this._xmin)&&(y=(this._xmin-l.x)/(x.x-l.x),p=l.y+y*(x.y-l.y),p<=this._ymin?f=!1:p>=this._ymax?f=!0:u.push(new M(y,this._xmin,p))),(l.x<this._xmax&&x.x>this._xmax||l.x>this._xmax&&x.x<this._xmax)&&(y=(this._xmax-l.x)/(x.x-l.x),p=l.y+y*(x.y-l.y),p<=this._ymin?f=!1:p>=this._ymax?f=!0:u.push(new M(y,this._xmax,p))),(l.y<this._ymin&&x.y>this._ymin||l.y>this._ymin&&x.y<this._ymin)&&(y=(this._ymin-l.y)/(x.y-l.y),r=l.x+y*(x.x-l.x),r<=this._xmin?d=!1:r>=this._xmax?d=!0:u.push(new M(y,r,this._ymin))),(l.y<this._ymax&&x.y>this._ymax||l.y>this._ymax&&x.y<this._ymax)&&(y=(this._ymax-l.y)/(x.y-l.y),r=l.x+y*(x.x-l.x),r<=this._xmin?d=!1:r>=this._xmax?d=!0:u.push(new M(y,r,this._ymax))),u.length===0)d?f?this._lineTo(this._xmax,this._ymax,!0):this._lineTo(this._xmax,this._ymin,!0):f?this._lineTo(this._xmin,this._ymax,!0):this._lineTo(this._xmin,this._ymin,!0);else if(u.length>1&&u[0].ratio>u[1].ratio)this._start=this._dist+e*u[1].ratio,this._lineTo(u[1].x,u[1].y,!0),this._lineTo(u[0].x,u[0].y,!0);else{this._start=this._dist+e*u[0].ratio;for(let m=0;m<u.length;m++)this._lineTo(u[m].x,u[m].y,!0)}this._lineTo(x.x,x.y,!1)}}this._dist+=e,this._prevIsIn=i,this._prevPt=h}close(){if(this._line.length>2){const t=this._firstPt,s=this._prevPt;t.x===s.x&&t.y===s.y||this.lineTo(t.x,t.y);const i=this._line;let h=i.length;for(;h>=4&&(i[0].x===i[1].x&&i[0].x===i[h-2].x||i[0].y===i[1].y&&i[0].y===i[h-2].y);)i.pop(),i[0].x=i[h-2].x,i[0].y=i[h-2].y,--h}}result(t=!0){return this._pushLine(),this._lines.length===0?null:(this._type===T.Polygon&&t&&P.simplify(this._tileSize,this._margin*this._finalRatio,this._lines),this._lines)}resultWithStarts(){if(this._type!==T.LineString)throw new Error("Only valid for lines");this._pushLine();const t=this._lines,s=t.length;if(s===0)return null;const i=[];for(let h=0;h<s;h++)i.push({line:t[h],start:this._starts[h]||0});return i}_isIn(t,s){return t>=this._xmin&&t<=this._xmax&&s>=this._ymin&&s<=this._ymax}_intersect(t,s){let i,h,e;if(s.x>=this._xmin&&s.x<=this._xmax)h=s.y<=this._ymin?this._ymin:this._ymax,e=(h-t.y)/(s.y-t.y),i=t.x+e*(s.x-t.x);else if(s.y>=this._ymin&&s.y<=this._ymax)i=s.x<=this._xmin?this._xmin:this._xmax,e=(i-t.x)/(s.x-t.x),h=t.y+e*(s.y-t.y);else{h=s.y<=this._ymin?this._ymin:this._ymax,i=s.x<=this._xmin?this._xmin:this._xmax;const n=(i-t.x)/(s.x-t.x),a=(h-t.y)/(s.y-t.y);n<a?(e=n,h=t.y+n*(s.y-t.y)):(e=a,i=t.x+a*(s.x-t.x))}return this._r=e,new g(i,h)}_pushLine(){this._line&&(this._type===T.Point?this._line.length>0&&(this._lines.push(this._line),this._starts.push(this._start)):this._type===T.LineString?this._line.length>1&&(this._lines.push(this._line),this._starts.push(this._start)):this._type===T.Polygon&&this._line.length>3&&(this._lines.push(this._line),this._starts.push(this._start))),this._line=[],this._start=0}_moveTo(t,s,i){this._type!==T.Polygon?i&&(t=Math.round((t-(this._xmin+this._margin))*this._finalRatio),s=Math.round((s-(this._ymin+this._margin))*this._finalRatio),this._line.push(new g(t,s))):(i||(t<this._xmin&&(t=this._xmin),t>this._xmax&&(t=this._xmax),s<this._ymin&&(s=this._ymin),s>this._ymax&&(s=this._ymax)),t=Math.round((t-(this._xmin+this._margin))*this._finalRatio),s=Math.round((s-(this._ymin+this._margin))*this._finalRatio),this._line.push(new g(t,s)),this._isH=!1,this._isV=!1)}_lineTo(t,s,i){let h,e;if(this._type!==T.Polygon)if(i){if(t=Math.round((t-(this._xmin+this._margin))*this._finalRatio),s=Math.round((s-(this._ymin+this._margin))*this._finalRatio),this._line.length>0&&(h=this._line[this._line.length-1],h.equals(t,s)))return;this._line.push(new g(t,s))}else this._line&&this._line.length>0&&this._pushLine();else if(i||(t<this._xmin&&(t=this._xmin),t>this._xmax&&(t=this._xmax),s<this._ymin&&(s=this._ymin),s>this._ymax&&(s=this._ymax)),t=Math.round((t-(this._xmin+this._margin))*this._finalRatio),s=Math.round((s-(this._ymin+this._margin))*this._finalRatio),this._line&&this._line.length>0){h=this._line[this._line.length-1];const n=h.x===t,a=h.y===s;if(n&&a)return;this._isH&&n||this._isV&&a?(h.x=t,h.y=s,e=this._line[this._line.length-2],e.x===t&&e.y===s?(this._line.pop(),this._line.length<=1?(this._isH=!1,this._isV=!1):(e=this._line[this._line.length-2],this._isH=e.x===t,this._isV=e.y===s)):(this._isH=e.x===t,this._isV=e.y===s)):(this._line.push(new g(t,s)),this._isH=n,this._isV=a)}else this._line.push(new g(t,s))}};class E{setExtent(t){this._ratio=t===4096?1:4096/t}get validateTessellation(){return this._ratio<1}reset(t){this._lines=[],this._line=null}moveTo(t,s){this._line&&this._lines.push(this._line),this._line=[];const i=this._ratio;this._line.push(new g(t*i,s*i))}lineTo(t,s){const i=this._ratio;this._line.push(new g(t*i,s*i))}close(){const t=this._line;t&&!t[0].isEqual(t[t.length-1])&&t.push(t[0])}result(){return this._line&&this._lines.push(this._line),this._lines.length===0?null:this._lines}}(function(o){o[o.sideLeft=0]="sideLeft",o[o.sideRight=1]="sideRight",o[o.sideTop=2]="sideTop",o[o.sideBottom=3]="sideBottom"})(c||(c={}));class P{static simplify(t,s,i){if(!i)return;const h=-s,e=t+s,n=-s,a=t+s,_=[],y=[],d=i.length;for(let r=0;r<d;++r){const p=i[r];if(!p||p.length<2)continue;let l,x=p[0];const u=p.length;for(let m=1;m<u;++m)l=p[m],x.x===l.x&&(x.x<=h&&(x.y>l.y?(_.push(r),_.push(m),_.push(c.sideLeft),_.push(-1)):(y.push(r),y.push(m),y.push(c.sideLeft),y.push(-1))),x.x>=e&&(x.y<l.y?(_.push(r),_.push(m),_.push(c.sideRight),_.push(-1)):(y.push(r),y.push(m),y.push(c.sideRight),y.push(-1)))),x.y===l.y&&(x.y<=n&&(x.x<l.x?(_.push(r),_.push(m),_.push(c.sideTop),_.push(-1)):(y.push(r),y.push(m),y.push(c.sideTop),y.push(-1))),x.y>=a&&(x.x>l.x?(_.push(r),_.push(m),_.push(c.sideBottom),_.push(-1)):(y.push(r),y.push(m),y.push(c.sideBottom),y.push(-1)))),x=l}if(_.length===0||y.length===0)return;P.fillParent(i,y,_),P.fillParent(i,_,y);const f=[];P.calcDeltas(f,y,_),P.calcDeltas(f,_,y),P.addDeltas(f,i)}static fillParent(t,s,i){const h=i.length,e=s.length;for(let n=0;n<e;n+=4){const a=s[n],_=s[n+1],y=s[n+2],d=t[a][_-1],f=t[a][_];let r=8092,p=-1;for(let l=0;l<h;l+=4){if(i[l+2]!==y)continue;const x=i[l],u=i[l+1],m=t[x][u-1],w=t[x][u];switch(y){case c.sideLeft:case c.sideRight:if(I(d.y,m.y,w.y)&&I(f.y,m.y,w.y)){const v=Math.abs(w.y-m.y);v<r&&(r=v,p=l)}break;case c.sideTop:case c.sideBottom:if(I(d.x,m.x,w.x)&&I(f.x,m.x,w.x)){const v=Math.abs(w.x-m.x);v<r&&(r=v,p=l)}}}s[n+3]=p}}static calcDeltas(t,s,i){const h=s.length;for(let e=0;e<h;e+=4){const n=[],a=P.calcDelta(e,s,i,n);t.push(s[e]),t.push(s[e+1]),t.push(s[e+2]),t.push(a)}}static calcDelta(t,s,i,h){const e=s[t+3];if(e===-1)return 0;const n=h.length;return n>1&&h[n-2]===e?0:(h.push(e),P.calcDelta(e,i,s,h)+1)}static addDeltas(t,s){const i=t.length;let h=0;for(let e=0;e<i;e+=4){const n=t[e+3];n>h&&(h=n)}for(let e=0;e<i;e+=4){const n=s[t[e]],a=t[e+1],_=h-t[e+3];switch(t[e+2]){case c.sideLeft:n[a-1].x-=_,n[a].x-=_,a===1&&(n[n.length-1].x-=_),a===n.length-1&&(n[0].x-=_);break;case c.sideRight:n[a-1].x+=_,n[a].x+=_,a===1&&(n[n.length-1].x+=_),a===n.length-1&&(n[0].x+=_);break;case c.sideTop:n[a-1].y-=_,n[a].y-=_,a===1&&(n[n.length-1].y-=_),a===n.length-1&&(n[0].y-=_);break;case c.sideBottom:n[a-1].y+=_,n[a].y+=_,a===1&&(n[n.length-1].y+=_),a===n.length-1&&(n[0].y+=_)}}}}const I=(o,t,s)=>o>=t&&o<=s||o>=s&&o<=t,V=Number.POSITIVE_INFINITY,R=Math.PI,k=2*R,L=128/R,B=R/180,b=1/Math.LN2;function S(o,t){return(o%=t)>=0?o:o+t}function H(o){return S(o*L,256)}function $(o){return Math.log(o)*b}function N(o,t,s){return o*(1-s)+t*s}export{$ as N,E as _,g as a,R as b,q as c,B as e,S as f,N as h,H as i,V as n,k as r,T as t};