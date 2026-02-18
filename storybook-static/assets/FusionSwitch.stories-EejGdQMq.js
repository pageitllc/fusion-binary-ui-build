import{s as p,c as v,a as b,g,l as f,j as h,r as n}from"./iframe-4anGkjM3.js";import{_ as w}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./preload-helper-Ct5FWWRu.js";const S=["aria-checked","disabled"],c=p({__name:"FusionSwitch",props:{modelValue:{type:Boolean},disabled:{type:Boolean},size:{}},emits:["update:modelValue"],setup(e,{emit:s}){const a=e,t=s;function m(){a.disabled||t("update:modelValue",!a.modelValue)}const u=v(()=>{switch(a.size){case"sm":return"fu-switch--sm";case"lg":return"fu-switch--lg";default:return"fu-switch--md"}});return(x,r)=>(h(),b("button",{type:"button",class:f(["fu-switch",[{"fu-switch--checked":e.modelValue,disabled:e.disabled},u.value]]),role:"switch","aria-checked":e.modelValue,disabled:e.disabled,onClick:m},[...r[0]||(r[0]=[g("span",{class:"fu-switch__thumb"},null,-1)])],10,S))}}),d=w(c,[["__scopeId","data-v-c8285d1a"]]);c.__docgenInfo={exportName:"default",displayName:"FusionSwitch",description:"",tags:{},props:[{name:"modelValue",required:!0,type:{name:"boolean"}},{name:"disabled",required:!1,type:{name:"boolean"}},{name:"size",required:!1,type:{name:"union",elements:[{name:'"sm"'},{name:'"md"'},{name:'"lg"'}]}}],events:[{name:"update:modelValue",type:{names:["boolean"]}}],sourceFiles:["/Users/xavier/Documents/Websites/Skkido/Fusion-binary-ui/src/components/switch/FusionSwitch.vue"]};const V={title:"UI/FusionSwitch",component:d,tags:["autodocs"],parameters:{docs:{description:{component:`
**FusionSwitch** is a minimalist, accessible toggle component for boolean inputs such as “Enable feature” or “Dark mode”.

---

### Example Usage

\`\`\`vue
<template>
  <div class="p-6">
    <h2 class="text-lg font-semibold mb-3">Fusion Switch Example</h2>

    <FusionSwitch v-model="enabled" />
    <span class="ml-2 text-sm text-gray-700">
      {{ enabled ? "Enabled" : "Disabled" }}
    </span>
  </div>
</template>

<script setup lang="ts">
import FusionSwitch from "@/components/ui/FusionSwitch.vue"
import { ref } from "vue"

const enabled = ref(false)
<\/script>
\`\`\`
`}}},argTypes:{modelValue:{control:"boolean",description:"Current toggle state (v-model)"},size:{control:"select",options:["sm","md","lg"],description:"Switch size"},disabled:{control:"boolean",description:"Disable interaction"}}},i={render:e=>({components:{FusionSwitch:d},setup(){const s=n(e.modelValue??!1);return{args:e,value:s,onUpdate:t=>{s.value=t,console.log("Switch changed:",t)}}},template:`
      <div style="display:flex; align-items:center; gap:12px;">
        <FusionSwitch v-model="value" v-bind="args" @update:modelValue="onUpdate" />
        <span>{{ value ? 'Enabled' : 'Disabled' }}</span>
      </div>
    `}),args:{modelValue:!1,size:"md"}},l={render:()=>({components:{FusionSwitch:d},setup(){const e=n(!1),s=n(!0),a=n(!1);return{small:e,medium:s,large:a}},template:`
      <div style="display:flex; gap:24px; align-items:center;">
        <div>
          <FusionSwitch v-model="small" size="sm" /> <span>Small</span>
        </div>
        <div>
          <FusionSwitch v-model="medium" size="md" /> <span>Medium</span>
        </div>
        <div>
          <FusionSwitch v-model="large" size="lg" /> <span>Large</span>
        </div>
      </div>
    `})},o={render:()=>({components:{FusionSwitch:d},setup(){const e=n(!0),s=n(!1);return{enabledSwitch:e,disabledSwitch:s}},template:`
      <div style="display:flex; gap:24px; align-items:center;">
        <div>
          <FusionSwitch v-model="enabledSwitch" disabled />
          <span class="ml-2 text-sm text-gray-500">Disabled (On)</span>
        </div>
        <div>
          <FusionSwitch v-model="disabledSwitch" disabled />
          <span class="ml-2 text-sm text-gray-500">Disabled (Off)</span>
        </div>
      </div>
    `})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: args => ({
    components: {
      FusionSwitch
    },
    setup() {
      const value = ref(args.modelValue ?? false);
      const onUpdate = (val: boolean) => {
        value.value = val;
        console.log("Switch changed:", val);
      };
      return {
        args,
        value,
        onUpdate
      };
    },
    template: \`
      <div style="display:flex; align-items:center; gap:12px;">
        <FusionSwitch v-model="value" v-bind="args" @update:modelValue="onUpdate" />
        <span>{{ value ? 'Enabled' : 'Disabled' }}</span>
      </div>
    \`
  }),
  args: {
    modelValue: false,
    size: "md"
  }
}`,...i.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      FusionSwitch
    },
    setup() {
      const small = ref(false);
      const medium = ref(true);
      const large = ref(false);
      return {
        small,
        medium,
        large
      };
    },
    template: \`
      <div style="display:flex; gap:24px; align-items:center;">
        <div>
          <FusionSwitch v-model="small" size="sm" /> <span>Small</span>
        </div>
        <div>
          <FusionSwitch v-model="medium" size="md" /> <span>Medium</span>
        </div>
        <div>
          <FusionSwitch v-model="large" size="lg" /> <span>Large</span>
        </div>
      </div>
    \`
  })
}`,...l.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      FusionSwitch
    },
    setup() {
      const enabledSwitch = ref(true);
      const disabledSwitch = ref(false);
      return {
        enabledSwitch,
        disabledSwitch
      };
    },
    template: \`
      <div style="display:flex; gap:24px; align-items:center;">
        <div>
          <FusionSwitch v-model="enabledSwitch" disabled />
          <span class="ml-2 text-sm text-gray-500">Disabled (On)</span>
        </div>
        <div>
          <FusionSwitch v-model="disabledSwitch" disabled />
          <span class="ml-2 text-sm text-gray-500">Disabled (Off)</span>
        </div>
      </div>
    \`
  })
}`,...o.parameters?.docs?.source}}};const D=["Default","Sizes","Disabled"];export{i as Default,o as Disabled,l as Sizes,D as __namedExportsOrder,V as default};
