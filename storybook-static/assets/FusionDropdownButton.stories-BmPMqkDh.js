import{I as A,d as y,r as p,i as I,j as S,c as i,b as d,e as m,k as g,a as b,t as f,u as k,F as L,s as B,n as R,o as t}from"./iframe-o7SUGoga.js";import{_ as T}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{E}from"./ellipsis-vertical-Bj6VV73G.js";import{U as V}from"./user-CShBQRq7.js";import{S as h}from"./settings-bDNpDAQL.js";import{L as O}from"./log-out-DVojqSRd.js";import{c as U}from"./createLucideIcon-D5kBsy5g.js";import"./preload-helper-Ct5FWWRu.js";/**
 * @license lucide-vue-next v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const F=U("chevrons-up-down",[["path",{d:"m7 15 5 5 5-5",key:"1hf1tw"}],["path",{d:"m7 9 5-5 5 5",key:"sgt6xg"}]]);/*!
  * vue-router v4.5.1
  * (c) 2025 Eduardo San Martin Morote
  * @license MIT
  */var C;(function(o){o.pop="pop",o.push="push"})(C||(C={}));var w;(function(o){o.back="back",o.forward="forward",o.unknown=""})(w||(w={}));var v;(function(o){o[o.aborted=4]="aborted",o[o.cancelled=8]="cancelled",o[o.duplicated=16]="duplicated"})(v||(v={}));const P=Symbol("");function q(){return A(P)}const M=["onClick"],x=y({__name:"FusionDropdownButton",props:{buttonText:{},buttonIcon:{},actions:{},align:{default:"right"}},setup(o){const e=p(!1),r=p(null),D=()=>{e.value=!e.value},_=l=>{l.onClick?.(),e.value=!1},u=l=>{r.value&&!r.value.contains(l.target)&&(e.value=!1)};return I(()=>{document.addEventListener("click",u)}),S(()=>{document.removeEventListener("click",u)}),(l,z)=>(t(),i("div",{class:"fu-dropdown",ref_key:"dropdown",ref:r},[d("button",{class:"fu-dropdown__button",onClick:D},[m(f(o.buttonText)+" ",1),o.buttonIcon?(t(),g(k(o.buttonIcon),{key:0,class:"fu-dropdown__icon"})):b("",!0)]),d("ul",{class:R(["fu-dropdown__menu",[{show:e.value},`fu-dropdown__menu--${o.align}`]])},[(t(!0),i(L,null,B(o.actions,n=>(t(),i("li",{key:n.label},[d("a",{class:"fu-dropdown__item",onClick:K=>_(n)},[n.icon?(t(),g(k(n.icon),{key:0,class:"fu-dropdown__icon"})):b("",!0),m(" "+f(n.label),1)],8,M)]))),128))],2)],512))}}),j=T(x,[["__scopeId","data-v-feab6d60"]]);x.__docgenInfo={exportName:"default",displayName:"FusionDropdownButton",description:"",tags:{},props:[{name:"buttonText",required:!0,type:{name:"string"}},{name:"buttonIcon",required:!1,type:{name:"Component"}},{name:"actions",required:!0,type:{name:"Array",elements:[{name:"Action"}]}},{name:"align",required:!1,type:{name:"union",elements:[{name:'"left"'},{name:'"center"'},{name:'"right"'}]},defaultValue:{func:!1,value:'"right"'}}],sourceFiles:["/Users/tommys/Documents/Skkido/Fusion-binary-ui/src/components/dropdown/FusionDropdownButton.vue"]};const $=q(),Z={title:"Components/DropdownButton",component:j,tags:["autodocs"],parameters:{docs:{description:{component:`

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
        `}}},argTypes:{buttonText:{control:"text",description:"Label of the main button"},buttonIcon:{control:"object",description:"Optional Lucide icon for the button"},actions:{control:"object",description:"Array of dropdown actions, each `{ label, icon?, onClick? }`. If `onClick` is provided → executes the function when clicked."},align:{control:"select",options:["left","center","right"],description:"Alignment of the dropdown relative to the button"}}},c={args:{buttonText:"Appointment",buttonIcon:E,align:"left",actions:[{label:"Interested Applicants",onClick:()=>window.open("https://pageit.io","_blank")},{label:"Duplicate Property Details",onClick:()=>$.push("/applicants")},{label:"Send Reminder",onClick:()=>console.log("Reminder sent!")},{label:"Archive",onClick:()=>console.log("Archived!")}]}},s={args:{buttonText:"Settings",buttonIcon:h,align:"center",actions:[{label:"Profile",icon:V,onClick:()=>console.log("Profile opened!")},{label:"Settings",icon:h,onClick:()=>console.log("Settings opened!")},{label:"Logout",icon:O,onClick:()=>console.log("Logged out!")}]}},a={args:{buttonText:"Options",align:"right",buttonIcon:F,actions:[{label:"Dashboard",onClick:()=>console.log("Dashboard opened!")},{label:"Reports",onClick:()=>console.log("Reports opened!")},{label:"Analytics",onClick:()=>console.log("Analytics opened!")}]}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
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
}`,...c.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...a.parameters?.docs?.source}}};const oo=["LeftAligned","CenterAligned","RightAligned"];export{s as CenterAligned,c as LeftAligned,a as RightAligned,oo as __namedExportsOrder,Z as default};
