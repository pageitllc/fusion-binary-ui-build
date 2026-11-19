import{r as c}from"./iframe-Bit2fKoK.js";import{F as d}from"./FuSegmentedControl-DYZ1OzoQ.js";import{M as u}from"./monitor-DuJ2FVle.js";import{c as p}from"./createLucideIcon-xyDXa4T9.js";import"./preload-helper-Ct5FWWRu.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";/**
 * @license @lucide/vue v1.54.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const b={name:"columns-2",size:24,node:[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M12 3v18",key:"108xh3"}]],aliases:["columns"]},v=p(b);/**
 * @license @lucide/vue v1.54.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const h={name:"smartphone",size:24,node:[["rect",{width:"14",height:"20",x:"5",y:"2",rx:"2",ry:"2",key:"1yt0o3"}],["path",{d:"M12 18h.01",key:"mhygvu"}]]},g=p(h),i=[{value:"desktop",label:"Desktop"},{value:"mobile",label:"Mobile"},{value:"both",label:"Side by side"}],F={title:"Fusion/Navigation/FuSegmentedControl",component:d,tags:["autodocs"],parameters:{layout:"padded",docs:{description:{component:`
### **FuSegmentedControl**

A switch with a few options shown side by side, of which exactly one is selected, for example Desktop / Mobile / Side by side. Use it to change how the same content is shown. Use \`FuViewSwitcher\` when there are many options or they carry counts.

---

#### Key features
- **One selected option**, bound with \`v-model\`
- **Keyboard**: arrow keys move the selection, Tab enters and leaves the group
- **Accessible**: exposed as a radio group, each option as a radio
- **Theme aware**: colours come from Fusion tokens and the selected option has its own surface in dark mode
- **Sizes**: \`sm\`, \`md\` and \`lg\`, with \`block\` for a full width control
- **Icons** and per option \`disabled\`

---

#### Example

\`\`\`vue
<script setup lang="ts">
import { ref } from "vue";
const device = ref("desktop");
<\/script>

<template>
  <FuSegmentedControl
    v-model="device"
    aria-label="View"
    :options="[
      { value: 'desktop', label: 'Desktop' },
      { value: 'mobile', label: 'Mobile' },
      { value: 'both', label: 'Side by side' },
    ]"
  />
</template>
\`\`\`
        `}}},argTypes:{modelValue:{control:"text",description:"Selected option value"},options:{control:"object",description:"Options: value, label, optional icon and disabled"},size:{control:"select",options:["sm","md","lg"]},block:{control:"boolean",description:"Full width with equal segments"},disabled:{control:"boolean",description:"Disables every option"},ariaLabel:{control:"text"}}},r=l=>({components:{FuSegmentedControl:d},setup(){const m=c(l.modelValue);return{args:l,value:m}},template:'<FuSegmentedControl v-bind="args" v-model="value" />'}),e={render:r,args:{modelValue:"desktop",options:i,ariaLabel:"View"}},o={render:r,args:{modelValue:"desktop",ariaLabel:"View",options:[{value:"desktop",label:"Desktop",icon:u},{value:"mobile",label:"Mobile",icon:g},{value:"both",label:"Side by side",icon:v}]}},t={render:()=>({components:{FuSegmentedControl:d},setup(){return{value:c("mobile"),devices:i}},template:`
      <div style="display: flex; flex-direction: column; align-items: flex-start; gap: 16px;">
        <FuSegmentedControl v-model="value" :options="devices" size="sm" />
        <FuSegmentedControl v-model="value" :options="devices" size="md" />
        <FuSegmentedControl v-model="value" :options="devices" size="lg" />
      </div>
    `})},s={render:r,args:{modelValue:"mobile",options:i,block:!0},decorators:[()=>({template:'<div style="max-width: 420px;"><story /></div>'})]},n={render:r,args:{modelValue:"desktop",options:[{value:"desktop",label:"Desktop"},{value:"mobile",label:"Mobile"},{value:"both",label:"Side by side",disabled:!0}]}},a={render:r,args:{modelValue:"desktop",options:i,disabled:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  render: interactive,
  args: {
    modelValue: "desktop",
    options: devices,
    ariaLabel: "View"
  }
}`,...e.parameters?.docs?.source},description:{story:"Default control with three text options.",...e.parameters?.docs?.description}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: interactive,
  args: {
    modelValue: "desktop",
    ariaLabel: "View",
    options: [{
      value: "desktop",
      label: "Desktop",
      icon: Monitor
    }, {
      value: "mobile",
      label: "Mobile",
      icon: Smartphone
    }, {
      value: "both",
      label: "Side by side",
      icon: Columns2
    }]
  }
}`,...o.parameters?.docs?.source},description:{story:"Options with icons.",...o.parameters?.docs?.description}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      FuSegmentedControl
    },
    setup() {
      const value = ref("mobile");
      return {
        value,
        devices
      };
    },
    template: \`
      <div style="display: flex; flex-direction: column; align-items: flex-start; gap: 16px;">
        <FuSegmentedControl v-model="value" :options="devices" size="sm" />
        <FuSegmentedControl v-model="value" :options="devices" size="md" />
        <FuSegmentedControl v-model="value" :options="devices" size="lg" />
      </div>
    \`
  })
}`,...t.parameters?.docs?.source},description:{story:"Three sizes.",...t.parameters?.docs?.description}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: interactive,
  args: {
    modelValue: "mobile",
    options: devices,
    block: true
  },
  decorators: [() => ({
    template: '<div style="max-width: 420px;"><story /></div>'
  })]
}`,...s.parameters?.docs?.source},description:{story:"Full width with equal segments.",...s.parameters?.docs?.description}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: interactive,
  args: {
    modelValue: "desktop",
    options: [{
      value: "desktop",
      label: "Desktop"
    }, {
      value: "mobile",
      label: "Mobile"
    }, {
      value: "both",
      label: "Side by side",
      disabled: true
    }]
  }
}`,...n.parameters?.docs?.source},description:{story:"One option disabled.",...n.parameters?.docs?.description}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: interactive,
  args: {
    modelValue: "desktop",
    options: devices,
    disabled: true
  }
}`,...a.parameters?.docs?.source},description:{story:"The whole control disabled.",...a.parameters?.docs?.description}}};const V=["Default","WithIcons","Sizes","Block","DisabledOption","Disabled"];export{s as Block,e as Default,a as Disabled,n as DisabledOption,t as Sizes,o as WithIcons,V as __namedExportsOrder,F as default};
