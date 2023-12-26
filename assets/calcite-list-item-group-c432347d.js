import{p as o,H as l,c,h as i,a as r}from"./index-4f223f87.js";import{c as d,u as h,d as u}from"./interactive-6c606ef2.js";import{g as m,M as p}from"./utils3-485db38b.js";/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/main/LICENSE.md for details.
 * v1.11.0
 */const a={container:"container",heading:"heading"},g=":host([disabled]){cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-ui-opacity-disabled)}:host([disabled]) *,:host([disabled]) ::slotted(*){pointer-events:none}:host{display:flex;flex-direction:column;background-color:var(--calcite-ui-foreground-1);--calcite-list-item-spacing-indent:1rem}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}.container{margin:0px;display:flex;flex:1 1 0%;background-color:var(--calcite-ui-foreground-2);padding:0.75rem;font-family:var(--calcite-sans-family);font-size:var(--calcite-font-size--1);font-weight:var(--calcite-font-weight-bold);color:var(--calcite-ui-text-2)}.heading{padding-inline-start:calc(var(--calcite-list-item-spacing-indent) * var(--calcite-list-item-spacing-indent-multiplier))}::slotted(calcite-list-item){--tw-shadow:0 -1px 0 var(--calcite-ui-border-3);--tw-shadow-colored:0 -1px 0 var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);margin-block-start:1px}::slotted(calcite-list-item:nth-child(1 of :not([hidden]))){--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);margin-block-start:0px}:host([hidden]){display:none}[hidden]{display:none}",s=o(class extends l{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.calciteInternalListItemGroupDefaultSlotChange=c(this,"calciteInternalListItemGroupDefaultSlotChange",6),this.handleDefaultSlotChange=()=>{this.calciteInternalListItemGroupDefaultSlotChange.emit()},this.disabled=!1,this.heading=void 0,this.visualLevel=null}connectedCallback(){const{el:e}=this;this.visualLevel=m(e,!0),d(this)}componentDidRender(){h(this)}disconnectedCallback(){u(this)}render(){const{heading:e,visualLevel:t}=this;return i(r,null,i("tr",{class:a.container,style:{"--calcite-list-item-spacing-indent-multiplier":`${t}`}},i("td",{class:a.heading,colSpan:p},e)),i("slot",{onSlotchange:this.handleDefaultSlotChange}))}get el(){return this}static get style(){return g}},[1,"calcite-list-item-group",{disabled:[516],heading:[513],visualLevel:[32]}]);function n(){if(typeof customElements>"u")return;["calcite-list-item-group"].forEach(t=>{switch(t){case"calcite-list-item-group":customElements.get(t)||customElements.define(t,s);break}})}n();const b=s,x=n;export{b as CalciteListItemGroup,x as defineCustomElement};
