import{F as l}from"./FusionCheckbox-E0ZNdIAP.js";import"./iframe-4anGkjM3.js";import"./preload-helper-Ct5FWWRu.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const m={title:"Components/Checkbox",component:l,tags:["autodocs"],argTypes:{size:{control:"select",options:["sm","md"],description:"Controls the size of the checkbox"},label:{control:"text",description:"Optional label displayed next to the checkbox"},modelValue:{control:"boolean",description:"v-model binding for checked state"},disabled:{control:"boolean",description:"Disables the checkbox"},id:{control:"text",description:"ID for the checkbox (used to bind <label> to <input>)"}},parameters:{docs:{description:{component:`
The **Checkbox** component in Fusion Binary is a customizable checkbox supporting labels, sizes, checked/disabled states, and v-model.

- **Label** → Show text next to the checkbox  
- **Without Label** → Render just the checkbox  
- **Sizes** → \`sm\` | \`md\` (default: \`md\`)  
- **States** → Checked, unchecked, disabled  
- **v-model** → Sync checked state  

### Example Usage

\`\`\`vue
<script setup lang="ts">
import { FusionCheckbox } from "fusion-binary";
import { ref } from "vue";

const enabled = ref(false);
<\/script>

<template>
  <!-- With label -->
  <FusionCheckbox v-model="enabled" label="Enable feature" id="feature-toggle" />

  <!-- Without label -->
  <FusionCheckbox v-model="enabled" />

  <!-- Small size -->
  <FusionCheckbox v-model="enabled" size="sm" label="Small option" />

  <!-- Disabled -->
  <FusionCheckbox v-model="enabled" label="Disabled" disabled />
</template>
\`\`\`
        `}}}},e={args:{modelValue:!1,label:"Enable feature",id:"feature-checkbox",size:"md"}},a={args:{modelValue:!1,size:"md"}},s={args:{modelValue:!1,label:"Small Checkbox",size:"sm"}},o={args:{modelValue:!1,label:"Medium Checkbox",size:"md"}},r={args:{modelValue:!0,label:"I am checked",size:"md"}},t={args:{modelValue:!1,label:"Disabled Checkbox",disabled:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    modelValue: false,
    label: "Enable feature",
    id: "feature-checkbox",
    size: "md"
  }
}`,...e.parameters?.docs?.source},description:{story:"With label (default)",...e.parameters?.docs?.description}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    modelValue: false,
    size: "md"
  }
}`,...a.parameters?.docs?.source},description:{story:"Without label",...a.parameters?.docs?.description}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    modelValue: false,
    label: "Small Checkbox",
    size: "sm"
  }
}`,...s.parameters?.docs?.source},description:{story:"Small size",...s.parameters?.docs?.description}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    modelValue: false,
    label: "Medium Checkbox",
    size: "md"
  }
}`,...o.parameters?.docs?.source},description:{story:"Medium size (default)",...o.parameters?.docs?.description}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    modelValue: true,
    label: "I am checked",
    size: "md"
  }
}`,...r.parameters?.docs?.source},description:{story:"Checked by default",...r.parameters?.docs?.description}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    modelValue: false,
    label: "Disabled Checkbox",
    disabled: true
  }
}`,...t.parameters?.docs?.source},description:{story:"Disabled",...t.parameters?.docs?.description}}};const b=["WithLabel","WithoutLabel","Small","Medium","Checked","Disabled"];export{r as Checked,t as Disabled,o as Medium,s as Small,e as WithLabel,a as WithoutLabel,b as __namedExportsOrder,m as default};
