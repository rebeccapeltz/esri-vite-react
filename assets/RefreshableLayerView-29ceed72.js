import{K as s,L as i,M as h,a4 as o,F as l,J as d}from"./index-4f223f87.js";const y=r=>{let e=class extends r{initialize(){this.addHandles(o(()=>this.layer,"refresh",t=>{this.doRefresh(t.dataChanged).catch(a=>{l(a)||d.getLogger(this).error(a)})}),"RefreshableLayerView")}};return s([i()],e.prototype,"layer",void 0),e=s([h("esri.layers.mixins.RefreshableLayerView")],e),e};export{y as a};
