import{s as k,r as S,a as t,f as s,g as w,y as v,b as A,u as y,l as D,j as a}from"./iframe-4anGkjM3.js";import{F as _}from"./FusionActionButton-DOSunp5G.js";import{c as I}from"./createLucideIcon-MAVkZFkt.js";import{X as B}from"./x-CRu_ipwL.js";import{_ as x}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./FusionButton-DDWoq9Vu.js";import"./preload-helper-Ct5FWWRu.js";/**
 * @license lucide-vue-next v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const W=I("circle-alert",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]]),C={key:0,class:"fu-alert__icon"},R={class:"fu-alert__content"},q={key:1,class:"fu-alert__actions"},O={key:2,class:"fu-alert__close"},h=k({__name:"FuAlert",props:{variant:{},icon:{type:Boolean},border:{type:Boolean},dismissible:{type:Boolean}},setup(e){const F=S(!0);return(r,f)=>F.value?(a(),t("div",{key:0,class:D(["fu-alert",`fu-alert--${e.variant}`,{"fu-alert--bordered":e.border}])},[e.icon?(a(),t("div",C,[v(r.$slots,"icon",{},()=>[A(y(W))],!0)])):s("",!0),w("div",R,[v(r.$slots,"default",{},void 0,!0)]),r.$slots.actions?(a(),t("div",q,[v(r.$slots,"actions",{},void 0,!0)])):s("",!0),e.dismissible?(a(),t("div",O,[A(_,{icon:y(B),size:"sm",variant:"ghost",onClick:f[0]||(f[0]=N=>F.value=!1)},null,8,["icon"])])):s("",!0)],2)):s("",!0)}}),n=x(h,[["__scopeId","data-v-7cd3e248"]]);h.__docgenInfo={exportName:"default",displayName:"FuAlert",description:"",tags:{},props:[{name:"variant",required:!1,type:{name:"union",elements:[{name:'"info"'},{name:'"danger"'},{name:'"success"'},{name:'"warning"'},{name:'"dark"'}]}},{name:"icon",required:!1,type:{name:"boolean"}},{name:"border",required:!1,type:{name:"boolean"}},{name:"dismissible",required:!1,type:{name:"boolean"}}],slots:[{name:"icon"},{name:"default"},{name:"actions"}],sourceFiles:["/Users/xavier/Documents/Websites/Skkido/Fusion-binary-ui/src/components/notifications/FuAlert.vue"]};const Y={title:"Components/FuAlert",component:n,tags:["autodocs"],parameters:{docs:{description:{component:`
The **FuAlert** component provides contextual feedback messages such as success, warning, error, and informational notifications.

It is designed to be flexible, composable, and slot-driven.

---

## Features

- Five variants: \`info\`, \`danger\`, \`success\`, \`warning\`, \`dark\`
- Optional **icon**
- Optional **border**
- Optional **dismiss button**
- Custom **actions slot** for buttons like Retry, Undo, etc.
- Fully typed props
- Slot-based content for maximum flexibility

---

## Basic Usage

\`\`\`vue
<FuAlert variant="info">
  <b>Info alert!</b> Something happened.
</FuAlert>
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

## With Custom Actions (Retry Example)

\`\`\`vue
<FuAlert variant="danger" dismissible border>
  <b>Save failed.</b> Unable to process your request.

  <template #actions>
    <FusionButton
      size="sm"
      text="Retry"
      variant="subtle"
      @click="retry"
   />
   
   
  </template>
</FuAlert>
\`\`\`

---

## Slots

| Slot | Description |
|------|-------------|
| default | Main alert content |
| icon | Override default icon |
| actions | Custom action buttons |

---

## Props

| Prop | Type | Default | Description |
|------|------|----------|-------------|
| \`variant\` | \`"info" | "danger" | "success" | "warning" | "dark"\` | \`"info"\` | Visual style of the alert |
| \`icon\` | boolean | false | Show leading icon |
| \`border\` | boolean | false | Add border |
| \`dismissible\` | boolean | false | Show close button |
  `}}},argTypes:{variant:{control:"select",options:["info","danger","success","warning","dark"],description:"Visual appearance of the alert"},icon:{control:"boolean",description:"Show a leading icon"},border:{control:"boolean",description:"Add border around the alert"},dismissible:{control:"boolean",description:"Enable close button"}}},o={args:{variant:"info",icon:!1,border:!1,dismissible:!1},render:e=>({components:{FuAlert:n},setup(){return{args:e}},template:`
      <FuAlert v-bind="args">
        <b>Info alert! </b> Change a few things up and try submitting again.
      </FuAlert>
    `})},i={args:{variant:"success"},render:e=>({components:{FuAlert:n},setup(){return{args:e}},template:`
      <FuAlert v-bind="args">
        <b>Success alert!</b> Your changes were saved successfully.
      </FuAlert>
    `})},l={args:{variant:"danger"},render:e=>({components:{FuAlert:n},setup(){return{args:e}},template:`
      <FuAlert v-bind="args">
        <b>Danger alert!</b> Something went wrong. Please try again.
      </FuAlert>
    `})},u={args:{variant:"warning"},render:e=>({components:{FuAlert:n},setup(){return{args:e}},template:`
      <FuAlert v-bind="args">
        <b>Warning alert!</b> Please check your input.
      </FuAlert>
    `})},c={args:{variant:"dark"},render:e=>({components:{FuAlert:n},setup(){return{args:e}},template:`
      <FuAlert v-bind="args">
        <b>Dark alert!</b> Neutral notification content here.
      </FuAlert>
    `})},d={args:{variant:"success",icon:!0},render:e=>({components:{FuAlert:n},setup(){return{args:e}},template:`
      <FuAlert v-bind="args">
        <b>Success with Icon!</b> Operation completed smoothly.
      </FuAlert>
    `})},m={args:{variant:"info",border:!0},render:e=>({components:{FuAlert:n},setup(){return{args:e}},template:`
      <FuAlert v-bind="args">
        <b>Info alert with border!</b>
      </FuAlert>
    `})},p={args:{variant:"danger",dismissible:!0},render:e=>({components:{FuAlert:n},setup(){return{args:e}},template:`
      <FuAlert v-bind="args">
        <b>Dismissible alert!</b> You can close this alert.
      </FuAlert>
    `})},b={args:{variant:"warning",icon:!0,border:!0,dismissible:!0},render:e=>({components:{FuAlert:n},setup(){return{args:e}},template:`
      <FuAlert v-bind="args">
        <b>Full feature alert!</b> Icon, border, and dismissible enabled.
      </FuAlert>
    `})},g={args:{variant:"danger",dismissible:!0,border:!0},render:e=>({components:{FuAlert:n},setup(){return{args:e,retry:()=>{console.log("Retry clicked")}}},template:`
      <FuAlert v-bind="args">
        <b>Save failed.</b> Unable to process your request.

        <template #actions>
          <FusionButton
            size="sm"
            variant="subtle"
            @click="retry"
          >
            Retry
          </FusionButton>
        </template>
      </FuAlert>
    `})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...o.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
}`,...i.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
}`,...l.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
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
}`,...u.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
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
}`,...c.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
}`,...d.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
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
}`,...b.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "danger",
    dismissible: true,
    border: true
  },
  render: args => ({
    components: {
      FuAlert
    },
    setup() {
      const retry = () => {
        console.log("Retry clicked");
      };
      return {
        args,
        retry
      };
    },
    template: \`
      <FuAlert v-bind="args">
        <b>Save failed.</b> Unable to process your request.

        <template #actions>
          <FusionButton
            size="sm"
            variant="subtle"
            @click="retry"
          >
            Retry
          </FusionButton>
        </template>
      </FuAlert>
    \`
  })
}`,...g.parameters?.docs?.source}}};const j=["Default","Success","Danger","Warning","Dark","WithIcon","WithBorder","Dismissible","FullFeature","WithRetryAction"];export{l as Danger,c as Dark,o as Default,p as Dismissible,b as FullFeature,i as Success,u as Warning,m as WithBorder,d as WithIcon,g as WithRetryAction,j as __namedExportsOrder,Y as default};
