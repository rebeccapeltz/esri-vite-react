import{K as t,L as p,M as e}from"./index-4f223f87.js";import a from"./FeatureLayerView2D-41655244.js";import"./Container-f6a10f50.js";import"./definitions-bd9226bb.js";import"./enums-bdecffa2.js";import"./Texture-c521344f.js";import"./LayerView-4512f29b.js";import"./scaleUtils-15892928.js";import"./AttributeStoreView-1f3ba8a0.js";import"./TiledDisplayObject-136f5b81.js";import"./color-19ec2e02.js";import"./enums-f1a6a48a.js";import"./VertexElementDescriptor-2925c6af.js";import"./WGLContainer-a78f1963.js";import"./FramebufferObject-bebc1e31.js";import"./ProgramTemplate-01fb8414.js";import"./GeometryUtils-8cbe63b7.js";import"./StyleDefinition-29c49b98.js";import"./config-1337d16e.js";import"./earcut-08493f02.js";import"./featureConversionUtils-923ac988.js";import"./OptimizedGeometry-d94e541f.js";import"./OptimizedFeatureSet-1d1ac4b9.js";import"./visualVariablesUtils-b3ad2960.js";import"./ExpandedCIM-b2f6ce2a.js";import"./BidiEngine-9a40f2f4.js";import"./GeometryUtils-984e8446.js";import"./utils-dfd58d3b.js";import"./Rect-ea14f53a.js";import"./quantizationUtils-f4c8be77.js";import"./floatRGBA-bf0b0d3b.js";import"./util-b280f9b1.js";import"./BitmapTileContainer-d6593528.js";import"./Bitmap-9ec6fcf5.js";import"./TileContainer-31f2e62c.js";import"./CircularArray-ef508845.js";import"./BufferPool-8cb7fa3b.js";import"./FeatureContainer-440f59f5.js";import"./floorFilterUtils-080a7cd2.js";import"./popupUtils-caf2e428.js";import"./RefreshableLayerView-29ceed72.js";const s=i=>{let r=class extends i{get availableFields(){return this.layer.fieldsIndex.fields.map(m=>m.name)}};return t([p()],r.prototype,"layer",void 0),t([p({readOnly:!0})],r.prototype,"availableFields",null),r=t([e("esri.views.layers.OGCFeatureLayerView")],r),r};let o=class extends s(a){supportsSpatialReference(i){return this.layer.serviceSupportsSpatialReference(i)}};o=t([e("esri.views.2d.layers.OGCFeatureLayerView2D")],o);const Y=o;export{Y as default};