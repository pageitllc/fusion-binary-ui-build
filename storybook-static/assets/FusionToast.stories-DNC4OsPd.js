import{s as h,r as y,q as k,d as m,b as v,w,x as T,T as b,j as l,a as S,f as x,l as D,g as p,v as _,t as F,J as C}from"./iframe-4anGkjM3.js";import{c as B}from"./createLucideIcon-MAVkZFkt.js";import{C as I}from"./circle-x-DkYjwenm.js";import{C as E}from"./circle-check-KyZHJlQV.js";import{_ as N}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./preload-helper-Ct5FWWRu.js";/**
 * @license lucide-vue-next v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const d=B("info",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]]),U={class:"fu-toast__content"},q={class:"fu-toast__message"},f=h({__name:"FusionToast",props:{message:{},type:{default:"info"},duration:{default:3500}},setup(e){const a=e,s=y(!1),t={success:E,error:I,info:d,dark:d};k(()=>{s.value=!0,setTimeout(()=>s.value=!1,a.duration)});function o(){s.value=!1}return(V,M)=>(l(),m(b,{to:"body"},[v(T,{name:"fu-toast-fade"},{default:w(()=>[s.value?(l(),S("div",{key:0,class:D(["fu-toast",[`fu-toast--${e.type}`]]),role:"alert"},[p("div",U,[(l(),m(_(t[e.type]),{class:"fu-toast__icon"})),p("span",q,F(e.message),1),p("button",{class:"fu-toast__close",onClick:o},"×")])],2)):x("",!0)]),_:1})]))}}),g=N(f,[["__scopeId","data-v-9f423b9f"]]);f.__docgenInfo={exportName:"default",displayName:"FusionToast",description:"",tags:{},props:[{name:"message",required:!0,type:{name:"string"}},{name:"type",required:!1,type:{name:"ToastType"},defaultValue:{func:!1,value:'"info"'}},{name:"duration",required:!1,type:{name:"number"},defaultValue:{func:!1,value:"3500"}}],sourceFiles:["/Users/xavier/Documents/Websites/Skkido/Fusion-binary-ui/src/components/notifications/FusionToast.vue"]};function O(){return({message:e,type:a="info",duration:s=3500})=>{const t=document.createElement("div");document.body.appendChild(t);const o=C(g,{message:e,type:a,duration:s});o.mount(t),setTimeout(()=>{o.unmount(),document.body.removeChild(t)},s+500)}}const J={title:"Components/FusionToast",component:g,tags:["autodocs"],parameters:{docs:{description:{component:`


The **FusionToast** component provides lightweight notifications for user feedback such as success, error, or information messages.

It is **teleported to the body** and automatically disappears after a configurable duration.

---

## Features
- Teleports to \`<body>\`
- Auto-dismiss after a set duration
- Supports types: \`success\`, \`error\`, \`info\`, \`dark\`
- Optional close button
- Fully typed in TypeScript
- Works both as a component and through the \`useToast()\` composable

---

## Basic Usage

### Inline Component
\`\`\`vue
<template>
  <FusionToast message="This is an inline toast" type="success" />
</template>
\`\`\`

### Programmatic Usage
\`\`\`vue
<script setup lang="ts">
import { useToast } from "fusion-binary-ui";

const toast = useToast();

function handleClick() {
  toast({ message: "Note created successfully!", type: "success" });
}
<\/script>

<template>
  <FusionButton text="Show Toast" variant="solid" @click="handleClick" />
</template>
\`\`\`

---

### Available Types
| Type | Description | Color |
|------|--------------|--------|
| \`success\` | Operation succeeded | Green |
| \`error\` | Error or failure | Red |
| \`info\` | Informational message | Blue |
| \`dark\` | Neutral or general | Black/Gray |
        `}}},argTypes:{message:{control:"text",description:"The message displayed inside the toast."},type:{control:"select",options:["success","error","info","dark"],description:"The visual variant of the toast."},duration:{control:"number",description:"Time in milliseconds before the toast disappears."}}},r={args:{message:"This is a default info toast",type:"info"}},n={args:{message:"Data saved successfully!",type:"success"}},c={args:{message:"Something went wrong.",type:"error"}},i={args:{message:"Dark mode active",type:"dark"}},u={render:()=>({setup(){const e=O();return{showSuccess:()=>e({message:"Operation completed successfully.",type:"success"}),showError:()=>e({message:"Unable to process request.",type:"error"}),showInfo:()=>e({message:"New updates available.",type:"info"}),showDark:()=>e({message:"Dark theme notification.",type:"dark"})}},template:`
      <div class="flex flex-col gap-2">
        <FusionButton variant="solid" text="Show Success Toast" @click="showSuccess" />
        <FusionButton variant="outline" text="Show Error Toast" @click="showError" />
        <FusionButton variant="subtle" text="Show Info Toast" @click="showInfo" />
        <FusionButton variant="black" text="Show Dark Toast" @click="showDark" />
      </div>
    `})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    message: "This is a default info toast",
    type: "info"
  }
}`,...r.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    message: "Data saved successfully!",
    type: "success"
  }
}`,...n.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    message: "Something went wrong.",
    type: "error"
  }
}`,...c.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    message: "Dark mode active",
    type: "dark"
  }
}`,...i.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: () => ({
    setup() {
      const toast = useToast();
      const showSuccess = () => toast({
        message: "Operation completed successfully.",
        type: "success"
      });
      const showError = () => toast({
        message: "Unable to process request.",
        type: "error"
      });
      const showInfo = () => toast({
        message: "New updates available.",
        type: "info"
      });
      const showDark = () => toast({
        message: "Dark theme notification.",
        type: "dark"
      });
      return {
        showSuccess,
        showError,
        showInfo,
        showDark
      };
    },
    template: \`
      <div class="flex flex-col gap-2">
        <FusionButton variant="solid" text="Show Success Toast" @click="showSuccess" />
        <FusionButton variant="outline" text="Show Error Toast" @click="showError" />
        <FusionButton variant="subtle" text="Show Info Toast" @click="showInfo" />
        <FusionButton variant="black" text="Show Dark Toast" @click="showDark" />
      </div>
    \`
  })
}`,...u.parameters?.docs?.source}}};const L=["Default","Success","Error","Dark","ProgrammaticUsage"];export{i as Dark,r as Default,c as Error,u as ProgrammaticUsage,n as Success,L as __namedExportsOrder,J as default};
