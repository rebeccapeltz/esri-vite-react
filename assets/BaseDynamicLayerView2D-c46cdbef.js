import{F as s,J as p,K as r,L as a,M as m}from"./index-4f223f87.js";import{a as h}from"./BitmapContainer-7f21a932.js";import{m as n,u as d}from"./LayerView-4512f29b.js";import{v as c}from"./ExportStrategy-ea0813dc.js";import{a as u}from"./RefreshableLayerView-29ceed72.js";import"./WGLContainer-a78f1963.js";import"./definitions-bd9226bb.js";import"./FramebufferObject-bebc1e31.js";import"./Texture-c521344f.js";import"./enums-bdecffa2.js";import"./ProgramTemplate-01fb8414.js";import"./VertexElementDescriptor-2925c6af.js";import"./color-19ec2e02.js";import"./enums-f1a6a48a.js";import"./GeometryUtils-8cbe63b7.js";import"./StyleDefinition-29c49b98.js";import"./config-1337d16e.js";import"./Container-f6a10f50.js";import"./earcut-08493f02.js";import"./featureConversionUtils-923ac988.js";import"./OptimizedGeometry-d94e541f.js";import"./OptimizedFeatureSet-1d1ac4b9.js";import"./scaleUtils-15892928.js";import"./Bitmap-9ec6fcf5.js";let t=class extends u(n(d)){update(e){this._strategy.update(e).catch(i=>{s(i)||p.getLogger(this).error(i)}),this.notifyChange("updating")}attach(){this._bitmapContainer=new h,this.container.addChild(this._bitmapContainer),this._strategy=new c({container:this._bitmapContainer,fetchSource:this.fetchBitmapData.bind(this),requestUpdate:this.requestUpdate.bind(this)})}detach(){this._strategy.destroy(),this._strategy=null,this.container.removeChild(this._bitmapContainer),this._bitmapContainer.removeAllChildren()}moveStart(){}viewChange(){}moveEnd(){this.requestUpdate()}fetchBitmapData(e,i,o){return this.layer.fetchImageBitmap(e,i,o)}async doRefresh(){this.requestUpdate()}isUpdating(){return this._strategy.updating||this.updateRequested}};r([a()],t.prototype,"_strategy",void 0),r([a()],t.prototype,"updating",void 0),t=r([m("esri.views.2d.layers.BaseDynamicLayerView2D")],t);const M=t;export{M as default};