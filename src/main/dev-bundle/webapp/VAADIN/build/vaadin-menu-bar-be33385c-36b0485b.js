import{U as e,y as n,j as i,k as s,F as r}from"./indexhtml-9bf01dcb.js";const l={tagName:"vaadin-menu-bar",displayName:"MenuBar",elements:[{selector:"vaadin-menu-bar vaadin-menu-bar-button",displayName:"Buttons",properties:[e.backgroundColor,e.borderColor,e.borderWidth,e.borderRadius,{propertyName:"--lumo-button-size",displayName:"Size",editorType:n.range,presets:i.lumoSize,icon:"square"},s.paddingInline]},{selector:"vaadin-menu-bar vaadin-menu-bar-button vaadin-menu-bar-item",displayName:"Button labels",properties:[r.textColor,r.fontSize,r.fontWeight]},{selector:"vaadin-menu-bar-overlay::part(overlay)",displayName:"Menus",properties:[e.backgroundColor,e.borderColor,e.borderWidth,e.borderRadius,e.padding]},{selector:"vaadin-menu-bar-overlay vaadin-menu-bar-item",displayName:"Menu items",properties:[r.textColor,r.fontSize,r.fontWeight]}],async setupElement(a){a.overlayClass=a.getAttribute("class");const t=document.createElement("vaadin-menu-bar-item");a.items=[{component:t,children:[{text:"Sub item"}]}],a.querySelector("vaadin-menu-bar-button").click(),await new Promise(o=>setTimeout(o,10))},async cleanupElement(a){a._close()}};export{l as default};
