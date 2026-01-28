import{s as y,r as k,a as d,f as p,g as S,x as f,b as v,u as A,l as w,j as m}from"./iframe-BeZJQ65s.js";import{F as D}from"./FusionActionButton-DxSYCmZ-.js";import{c as _}from"./createLucideIcon-7ncFRN9y.js";import{X as I}from"./x-jetkAV5y.js";import{_ as x}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./preload-helper-Ct5FWWRu.js";/**
 * @license lucide-vue-next v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const B=_("circle-alert",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]]),W={key:0,class:"fu-alert__icon"},C={class:"fu-alert__content"},N={key:1,class:"fu-alert__close"},h=y({__name:"FuAlert",props:{variant:{},icon:{type:Boolean},border:{type:Boolean},dismissible:{type:Boolean}},setup(e){const b=k(!0);return(g,F)=>b.value?(m(),d("div",{key:0,class:w(["fu-alert",`fu-alert--${e.variant}`,{"fu-alert--bordered":e.border}])},[e.icon?(m(),d("div",W,[f(g.$slots,"icon",{},()=>[v(A(B))],!0)])):p("",!0),S("div",C,[f(g.$slots,"default",{},void 0,!0)]),e.dismissible?(m(),d("div",N,[v(D,{icon:A(I),size:"sm",variant:"ghost",onClick:F[0]||(F[0]=O=>b.value=!1)},null,8,["icon"])])):p("",!0)],2)):p("",!0)}}),n=x(h,[["__scopeId","data-v-d43b4e98"]]);h.__docgenInfo={exportName:"default",displayName:"FuAlert",description:"",tags:{},props:[{name:"variant",required:!1,type:{name:"union",elements:[{name:'"info"'},{name:'"danger"'},{name:'"success"'},{name:'"warning"'},{name:'"dark"'}]}},{name:"icon",required:!1,type:{name:"boolean"}},{name:"border",required:!1,type:{name:"boolean"}},{name:"dismissible",required:!1,type:{name:"boolean"}}],slots:[{name:"icon"},{name:"default"}],sourceFiles:["/Users/xavier/Documents/Websites/Skkido/Fusion-binary-ui/src/components/notifications/FuAlert.vue"]};const $={title:"Components/FuAlert",component:n,tags:["autodocs"],parameters:{docs:{description:{component:`
The **FuAlert** component provides contextual feedback messages such as success, warning, error, and informational notifications (Tom Test).

It supports:

- Five variants: \`info\`, \`danger\`, \`success\`, \`warning\`, \`dark\`  
- Optional **icon**  
- Optional **border**  
- Optional **dismiss button** (uses FusionActionButton)
- Fully typed props
- Slot-based content so you can pass any markup

---

## Basic Usage

\`\`\`vue
<template>
  <FuAlert variant="info">
    <b>Info alert!</b> Something happened.
  </FuAlert>
</template>
\`\`\`

---

## With Icon

\`\`\`vue
<FuAlert variant="success" icon>
  <b>Success!</b> Operation completed.
</FuAlert>
\`\`\`

---

## Dismissible

\`\`\`vue
<FuAlert variant="danger" dismissible>
  This alert can be closed.
</FuAlert>
\`\`\`

---

## All Props

| Prop | Type | Default | Description |
|------|-------|-------------|--------------|
| \`variant\` | \`"info" | "danger" | "success" | "warning" | "dark"\` | "info" | The visual style of the alert |
| \`icon\` | boolean | false | Shows an icon at the start |
| \`border\` | boolean | false | Enables border around the alert |
| \`dismissible\` | boolean | false | Adds a close button |
        `}}},argTypes:{variant:{control:"select",options:["info","danger","success","warning","dark"],description:"Visual appearance of the alert"},icon:{control:"boolean",description:"Show a leading icon"},border:{control:"boolean",description:"Add border around the alert"},dismissible:{control:"boolean",description:"Enable close button"}}},r={args:{variant:"info",icon:!1,border:!1,dismissible:!1},render:e=>({components:{FuAlert:n},setup(){return{args:e}},template:`
      <FuAlert v-bind="args">
        <b>Info alert! </b> Change a few things up and try submitting again.
      </FuAlert>
    `})},a={args:{variant:"success"},render:e=>({components:{FuAlert:n},setup(){return{args:e}},template:`
      <FuAlert v-bind="args">
        <b>Success alert!</b> Your changes were saved successfully.
      </FuAlert>
    `})},t={args:{variant:"danger"},render:e=>({components:{FuAlert:n},setup(){return{args:e}},template:`
      <FuAlert v-bind="args">
        <b>Danger alert!</b> Something went wrong. Please try again.
      </FuAlert>
    `})},s={args:{variant:"warning"},render:e=>({components:{FuAlert:n},setup(){return{args:e}},template:`
      <FuAlert v-bind="args">
        <b>Warning alert!</b> Please check your input.
      </FuAlert>
    `})},o={args:{variant:"dark"},render:e=>({components:{FuAlert:n},setup(){return{args:e}},template:`
      <FuAlert v-bind="args">
        <b>Dark alert!</b> Neutral notification content here.
      </FuAlert>
    `})},i={args:{variant:"success",icon:!0},render:e=>({components:{FuAlert:n},setup(){return{args:e}},template:`
      <FuAlert v-bind="args">
        <b>Success with Icon!</b> Operation completed smoothly.
      </FuAlert>
    `})},l={args:{variant:"info",border:!0},render:e=>({components:{FuAlert:n},setup(){return{args:e}},template:`
      <FuAlert v-bind="args">
        <b>Info alert with border!</b>
      </FuAlert>
    `})},u={args:{variant:"danger",dismissible:!0},render:e=>({components:{FuAlert:n},setup(){return{args:e}},template:`
      <FuAlert v-bind="args">
        <b>Dismissible alert!</b> You can close this alert.
      </FuAlert>
    `})},c={args:{variant:"warning",icon:!0,border:!0,dismissible:!0},render:e=>({components:{FuAlert:n},setup(){return{args:e}},template:`
      <FuAlert v-bind="args">
        <b>Full feature alert!</b> Icon, border, and dismissible enabled.
      </FuAlert>
    `})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "info",
    icon: false,
    border: false,
    dismissible: false
  },
  render: args => ({
    components: {
      FuAlert
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <FuAlert v-bind="args">
        <b>Info alert! </b> Change a few things up and try submitting again.
      </FuAlert>
    \`
  })
}`,...r.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "success"
  },
  render: args => ({
    components: {
      FuAlert
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <FuAlert v-bind="args">
        <b>Success alert!</b> Your changes were saved successfully.
      </FuAlert>
    \`
  })
}`,...a.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "danger"
  },
  render: args => ({
    components: {
      FuAlert
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <FuAlert v-bind="args">
        <b>Danger alert!</b> Something went wrong. Please try again.
      </FuAlert>
    \`
  })
}`,...t.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "warning"
  },
  render: args => ({
    components: {
      FuAlert
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <FuAlert v-bind="args">
        <b>Warning alert!</b> Please check your input.
      </FuAlert>
    \`
  })
}`,...s.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "dark"
  },
  render: args => ({
    components: {
      FuAlert
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <FuAlert v-bind="args">
        <b>Dark alert!</b> Neutral notification content here.
      </FuAlert>
    \`
  })
}`,...o.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "success",
    icon: true
  },
  render: args => ({
    components: {
      FuAlert
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <FuAlert v-bind="args">
        <b>Success with Icon!</b> Operation completed smoothly.
      </FuAlert>
    \`
  })
}`,...i.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "info",
    border: true
  },
  render: args => ({
    components: {
      FuAlert
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <FuAlert v-bind="args">
        <b>Info alert with border!</b>
      </FuAlert>
    \`
  })
}`,...l.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "danger",
    dismissible: true
  },
  render: args => ({
    components: {
      FuAlert
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <FuAlert v-bind="args">
        <b>Dismissible alert!</b> You can close this alert.
      </FuAlert>
    \`
  })
}`,...u.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "warning",
    icon: true,
    border: true,
    dismissible: true
  },
  render: args => ({
    components: {
      FuAlert
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <FuAlert v-bind="args">
        <b>Full feature alert!</b> Icon, border, and dismissible enabled.
      </FuAlert>
    \`
  })
}`,...c.parameters?.docs?.source}}};const z=["Default","Success","Danger","Warning","Dark","WithIcon","WithBorder","Dismissible","FullFeature"];export{t as Danger,o as Dark,r as Default,u as Dismissible,c as FullFeature,a as Success,s as Warning,l as WithBorder,i as WithIcon,z as __namedExportsOrder,$ as default};
