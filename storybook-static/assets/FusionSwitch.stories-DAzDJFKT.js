import{F as l}from"./FusionSwitch-qMj_yHzU.js";import{r as n}from"./iframe-DLJy-DHW.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./preload-helper-Ct5FWWRu.js";const u={title:"Fusion/Forms/Selection/FusionSwitch",component:l,tags:["autodocs"],parameters:{docs:{description:{component:`
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
`}}},argTypes:{modelValue:{control:"boolean",description:"Current toggle state (v-model)"},size:{control:"select",options:["sm","md","lg"],description:"Switch size"},disabled:{control:"boolean",description:"Disable interaction"}}},a={render:e=>({components:{FusionSwitch:l},setup(){const s=n(e.modelValue??!1);return{args:e,value:s,onUpdate:d=>{s.value=d,console.log("Switch changed:",d)}}},template:`
      <div style="display:flex; align-items:center; gap:12px;">
        <FusionSwitch v-model="value" v-bind="args" @update:modelValue="onUpdate" />
        <span>{{ value ? 'Enabled' : 'Disabled' }}</span>
      </div>
    `}),args:{modelValue:!1,size:"md"}},t={render:()=>({components:{FusionSwitch:l},setup(){const e=n(!1),s=n(!0),o=n(!1);return{small:e,medium:s,large:o}},template:`
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
    `})},i={render:()=>({components:{FusionSwitch:l},setup(){const e=n(!0),s=n(!1);return{enabledSwitch:e,disabledSwitch:s}},template:`
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
    `})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...a.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...t.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
}`,...i.parameters?.docs?.source}}};const v=["Default","Sizes","Disabled"];export{a as Default,i as Disabled,t as Sizes,v as __namedExportsOrder,u as default};
