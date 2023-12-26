import{N as l,P as h,O as g,V as w,Q as f,T as d,X as n,K as u,M as V}from"./index-4f223f87.js";import{m as b,u as S}from"./LayerView-4512f29b.js";import{i as T}from"./GraphicContainer-5201c2da.js";import{r as _}from"./GraphicsView2D-b1bf96b5.js";import"./scaleUtils-15892928.js";import"./Container-f6a10f50.js";import"./definitions-bd9226bb.js";import"./enums-bdecffa2.js";import"./Texture-c521344f.js";import"./color-19ec2e02.js";import"./enums-f1a6a48a.js";import"./VertexElementDescriptor-2925c6af.js";import"./BaseGraphicContainer-24cc5593.js";import"./FeatureContainer-440f59f5.js";import"./AttributeStoreView-1f3ba8a0.js";import"./TiledDisplayObject-136f5b81.js";import"./WGLContainer-a78f1963.js";import"./FramebufferObject-bebc1e31.js";import"./ProgramTemplate-01fb8414.js";import"./GeometryUtils-8cbe63b7.js";import"./StyleDefinition-29c49b98.js";import"./config-1337d16e.js";import"./earcut-08493f02.js";import"./featureConversionUtils-923ac988.js";import"./OptimizedGeometry-d94e541f.js";import"./OptimizedFeatureSet-1d1ac4b9.js";import"./visualVariablesUtils-b3ad2960.js";import"./ExpandedCIM-b2f6ce2a.js";import"./BidiEngine-9a40f2f4.js";import"./GeometryUtils-984e8446.js";import"./utils-dfd58d3b.js";import"./Rect-ea14f53a.js";import"./quantizationUtils-f4c8be77.js";import"./floatRGBA-bf0b0d3b.js";import"./util-b280f9b1.js";import"./TileContainer-31f2e62c.js";import"./vec3f32-2da9db36.js";import"./normalizeUtilsSync-0621f740.js";import"./projectionSupport-f3bc28ec.js";import"./json-48e3ea08.js";import"./Matcher-9eb3eb70.js";import"./tileUtils-c2f19f52.js";import"./TurboLine-141bc973.js";import"./ComputedAttributeStorage-82eed6cf.js";import"./TimeOnly-8a84a147.js";let y=class extends b(S){constructor(){super(...arguments),this._graphicsViewMap={},this._popupTemplates=new Map,this.graphicsViews=[]}async hitTest(e,r){if(!this.graphicsViews.length)return null;const o=this.layer;return this.graphicsViews.reverse().flatMap(t=>{const i=this._popupTemplates.get(t),s=t.hitTest(e);for(const p of s)p.layer=o,p.sourceLayer=o,p.popupTemplate=i;return s}).map(t=>({type:"graphic",graphic:t,layer:o,mapPoint:e}))}update(e){if(this.graphicsViews)for(const r of this.graphicsViews)r.processUpdate(e)}attach(){this.addAttachHandles([l(()=>{var e;return(e=this.layer)==null?void 0:e.featureCollections},e=>{this._clear();for(const{popupInfo:r,featureSet:o,layerDefinition:t}of e){const i=g.fromJSON(o),s=new w(i.features),p=t.drawingInfo,c=r?f.fromJSON(r):null,a=d(p.renderer),m=new _({requestUpdateCallback:()=>this.requestUpdate(),view:this.view,graphics:s,renderer:a,container:new T(this.view.featuresTilingScheme)});this._graphicsViewMap[i.geometryType]=m,this._popupTemplates.set(m,c),i.geometryType!=="polygon"||this.layer.polygonSymbol?i.geometryType!=="polyline"||this.layer.lineSymbol?i.geometryType!=="point"||this.layer.pointSymbol||(this.layer.pointSymbol=a.symbol):this.layer.lineSymbol=a.symbol:this.layer.polygonSymbol=a.symbol,this.graphicsViews.push(m),this.container.addChild(m.container)}},h),l(()=>{var e;return(e=this.layer)==null?void 0:e.polygonSymbol},e=>{this._graphicsViewMap.polygon.renderer=new n({symbol:e})},h),l(()=>{var e;return(e=this.layer)==null?void 0:e.lineSymbol},e=>{this._graphicsViewMap.polyline.renderer=new n({symbol:e})},h),l(()=>{var e;return(e=this.layer)==null?void 0:e.pointSymbol},e=>{this._graphicsViewMap.point.renderer=new n({symbol:e})},h)])}detach(){this._clear()}moveStart(){}moveEnd(){}viewChange(){for(const e of this.graphicsViews)e.viewChange()}_clear(){this.container.removeAllChildren();for(const e of this.graphicsViews)e.destroy();this._graphicsViewMap={},this._popupTemplates.clear(),this.graphicsViews.length=0}};y=u([V("esri.views.2d.layers.GeoRSSLayerView2D")],y);const we=y;export{we as default};
