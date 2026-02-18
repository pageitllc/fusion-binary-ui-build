import{I as B,s as O,r as i,q as V,o as U,a as u,g as w,d as f,k as x,f as b,t as y,v as D,n as q,l as F,F as P,h as M,T as $,j as l,i as j}from"./iframe-4anGkjM3.js";import{_ as W}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{E as z}from"./ellipsis-vertical-BjiTTk2z.js";import{U as K}from"./user-C5GbdiJV.js";import{S as A}from"./settings-B1V3NTcq.js";import{L as G}from"./log-out-KJVN8NLn.js";import{c as H}from"./createLucideIcon-MAVkZFkt.js";import"./preload-helper-Ct5FWWRu.js";/**
 * @license lucide-vue-next v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const J=H("chevrons-up-down",[["path",{d:"m7 15 5 5 5-5",key:"1hf1tw"}],["path",{d:"m7 9 5-5 5 5",key:"sgt6xg"}]]);/*!
  * vue-router v4.5.1
  * (c) 2025 Eduardo San Martin Morote
  * @license MIT
  */var _;(function(e){e.pop="pop",e.push="push"})(_||(_={}));var S;(function(e){e.back="back",e.forward="forward",e.unknown=""})(S||(S={}));var I;(function(e){e[e.aborted=4]="aborted",e[e.cancelled=8]="cancelled",e[e.duplicated=16]="duplicated"})(I||(I={}));const N=Symbol("");function Q(){return B(N)}const X=["onClick"],L=O({__name:"FusionDropdownButton",props:{buttonText:{},buttonIcon:{},actions:{},align:{default:"right"}},setup(e){const k=e,n=i(!1),s=i(null),a=i(null),h=i({});let g=null;function R(){if(n.value=!n.value,n.value){if(g&&g!==s.value){const o=new CustomEvent("close-other-dropdowns");document.dispatchEvent(o)}g=s.value,j(E)}}function E(){const o=s.value?.querySelector("button");if(!o||!a.value)return;const c=o.getBoundingClientRect(),t=a.value.offsetWidth,r={left:`${c.left}px`,top:`${c.bottom+4}px`};k.align==="right"?r.left=`${c.right-t}px`:k.align==="center"&&(r.left=`${c.left+c.width/2-t/2}px`),h.value={position:"absolute",...r,zIndex:"1000"}}function T(o){o.onClick?.(),n.value=!1}function v(o){s.value&&!s.value.contains(o.target)&&a.value&&!a.value.contains(o.target)&&(n.value=!1)}function C(){n.value=!1}return V(()=>{document.addEventListener("click",v),document.addEventListener("close-other-dropdowns",C)}),U(()=>{document.removeEventListener("click",v),document.removeEventListener("close-other-dropdowns",C)}),(o,c)=>(l(),u("div",{class:"fu-dropdown",ref_key:"dropdown",ref:s},[w("button",{class:"fu-dropdown__button",onClick:R},[x(y(e.buttonText)+" ",1),e.buttonIcon?(l(),f(D(e.buttonIcon),{key:0,class:"fu-dropdown__icon"})):b("",!0)]),(l(),f($,{to:"body"},[n.value?(l(),u("ul",{key:0,class:F(["fu-dropdown__menu",[`fu-dropdown__menu--${e.align}`,{show:n.value}]]),style:q(h.value),ref_key:"menuRef",ref:a},[(l(!0),u(P,null,M(e.actions,t=>(l(),u("li",{key:t.label},[w("a",{class:"fu-dropdown__item",onClick:r=>T(t)},[t.icon?(l(),f(D(t.icon),{key:0,class:"fu-dropdown__icon"})):b("",!0),x(" "+y(t.label),1)],8,X)]))),128))],6)):b("",!0)]))],512))}}),Y=W(L,[["__scopeId","data-v-478aec9e"]]);L.__docgenInfo={exportName:"default",displayName:"FusionDropdownButton",description:"",tags:{},props:[{name:"buttonText",required:!0,type:{name:"string"}},{name:"buttonIcon",required:!1,type:{name:"Component"}},{name:"actions",required:!0,type:{name:"Array",elements:[{name:"Action"}]}},{name:"align",required:!1,type:{name:"union",elements:[{name:'"left"'},{name:'"center"'},{name:'"right"'}]},defaultValue:{func:!1,value:'"right"'}}],sourceFiles:["/Users/xavier/Documents/Websites/Skkido/Fusion-binary-ui/src/components/dropdown/FusionDropdownButton.vue"]};const Z=Q(),re={title:"Components/DropdownButton",component:Y,tags:["autodocs"],parameters:{docs:{description:{component:`

The **FusionDropdownButton** component provides a combined button and dropdown action list.  
It’s perfect for quick actions, contextual menus, or toolbar utilities.

---

##  Features
- Supports **Lucide icons**
- Custom alignment: \`left\`, \`center\`, or \`right\`
- Each item can execute a **custom \`onClick()\` handler**
- Works with **Vue Router navigation** or **external links**

---

## Example Usage

\`\`\`vue
<template>
  <FusionDropdownButton
    buttonText="More Actions"
    :buttonIcon="MoreVertical"
    align="right"
    :actions="actions"
  />
</template>

<script setup>
import { MoreVertical } from "lucide-vue-next";

const actions = [
  { label: "Edit", onClick: () => console.log("Edit clicked!") },
  { label: "Duplicate", onClick: () => console.log("Duplicate clicked!") },
  { label: "Delete", onClick: () => console.log("Deleted!") },
];
<\/script>
\`\`\`

The dropdown can also contain **icons** or trigger **router navigation**.
        `}}},argTypes:{buttonText:{control:"text",description:"Label of the main button"},buttonIcon:{control:"object",description:"Optional Lucide icon for the button"},actions:{control:"object",description:"Array of dropdown actions, each `{ label, icon?, onClick? }`. If `onClick` is provided → executes the function when clicked."},align:{control:"select",options:["left","center","right"],description:"Alignment of the dropdown relative to the button"}}},d={args:{buttonText:"Appointment",buttonIcon:z,align:"left",actions:[{label:"Interested Applicants",onClick:()=>window.open("https://pageit.io","_blank")},{label:"Duplicate Property Details",onClick:()=>Z.push("/applicants")},{label:"Send Reminder",onClick:()=>console.log("Reminder sent!")},{label:"Archive",onClick:()=>console.log("Archived!")}]}},p={args:{buttonText:"Settings",buttonIcon:A,align:"center",actions:[{label:"Profile",icon:K,onClick:()=>console.log("Profile opened!")},{label:"Settings",icon:A,onClick:()=>console.log("Settings opened!")},{label:"Logout",icon:G,onClick:()=>console.log("Logged out!")}]}},m={args:{buttonText:"Options",align:"right",buttonIcon:J,actions:[{label:"Dashboard",onClick:()=>console.log("Dashboard opened!")},{label:"Reports",onClick:()=>console.log("Reports opened!")},{label:"Analytics",onClick:()=>console.log("Analytics opened!")}]}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    buttonText: "Appointment",
    buttonIcon: MoreVertical,
    align: "left",
    actions: [{
      label: "Interested Applicants",
      onClick: () => window.open("https://pageit.io", "_blank")
    }, {
      label: "Duplicate Property Details",
      onClick: () => router.push("/applicants")
    }, {
      label: "Send Reminder",
      onClick: () => console.log("Reminder sent!")
    }, {
      label: "Archive",
      onClick: () => console.log("Archived!")
    }]
  }
}`,...d.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    buttonText: "Settings",
    buttonIcon: Settings,
    align: "center",
    actions: [{
      label: "Profile",
      icon: User,
      onClick: () => console.log("Profile opened!")
    }, {
      label: "Settings",
      icon: Settings,
      onClick: () => console.log("Settings opened!")
    }, {
      label: "Logout",
      icon: LogOut,
      onClick: () => console.log("Logged out!")
    }]
  }
}`,...p.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    buttonText: "Options",
    align: "right",
    buttonIcon: ChevronsUpDown,
    actions: [{
      label: "Dashboard",
      onClick: () => console.log("Dashboard opened!")
    }, {
      label: "Reports",
      onClick: () => console.log("Reports opened!")
    }, {
      label: "Analytics",
      onClick: () => console.log("Analytics opened!")
    }]
  }
}`,...m.parameters?.docs?.source}}};const ie=["LeftAligned","CenterAligned","RightAligned"];export{p as CenterAligned,d as LeftAligned,m as RightAligned,ie as __namedExportsOrder,re as default};
