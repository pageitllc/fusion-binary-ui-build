import{d as p,c,b as n,a as h,t as f,n as k,o as i}from"./iframe-o7SUGoga.js";import{_ as x}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./preload-helper-Ct5FWWRu.js";const g=["for"],C=["id","checked","disabled"],y={key:0,class:"fu-checkbox__label"},m=p({__name:"FusionCheckbox",props:{modelValue:{type:Boolean,default:!1},label:{},id:{},size:{default:"md"},disabled:{type:Boolean}},emits:["update:modelValue"],setup(e){return(u,r)=>(i(),c("label",{class:k(["fu-checkbox",[`fu-checkbox--${e.size}`,{"fu-checkbox--disabled":e.disabled}]]),for:e.id},[n("input",{type:"checkbox",class:"fu-checkbox__input",id:e.id,checked:e.modelValue,disabled:e.disabled,onChange:r[0]||(r[0]=b=>u.$emit("update:modelValue",b.target.checked))},null,40,C),r[1]||(r[1]=n("span",{class:"fu-checkbox__box"},null,-1)),e.label?(i(),c("span",y,f(e.label),1)):h("",!0)],10,g))}}),z=x(m,[["__scopeId","data-v-0753ce68"]]);m.__docgenInfo={exportName:"default",displayName:"FusionCheckbox",description:"",tags:{},props:[{name:"modelValue",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"label",required:!1,type:{name:"string"}},{name:"id",required:!1,type:{name:"string"}},{name:"size",required:!1,type:{name:"union",elements:[{name:'"sm"'},{name:'"md"'}]},defaultValue:{func:!1,value:'"md"'}},{name:"disabled",required:!1,type:{name:"boolean"}}],events:[{name:"update:modelValue",type:{names:["boolean"]}}],sourceFiles:["/Users/tommys/Documents/Skkido/Fusion-binary-ui/src/components/checkbox/FusionCheckbox.vue"]};const F={title:"Components/Checkbox",component:z,tags:["autodocs"],argTypes:{size:{control:"select",options:["sm","md"],description:"Controls the size of the checkbox"},label:{control:"text",description:"Optional label displayed next to the checkbox"},modelValue:{control:"boolean",description:"v-model binding for checked state"},disabled:{control:"boolean",description:"Disables the checkbox"},id:{control:"text",description:"ID for the checkbox (used to bind <label> to <input>)"}},parameters:{docs:{description:{component:`
The **Checkbox** component in Fusion Binary is a customizable checkbox supporting labels, sizes, checked/disabled states, and v-model.

- **Label** → Show text next to the checkbox  
- **Without Label** → Render just the checkbox  
- **Sizes** → \`sm\` | \`md\` (default: \`md\`)  
- **States** → Checked, unchecked, disabled  
- **v-model** → Sync checked state  

### Example Usage

\`\`\`vue
<script setup lang="ts">
import { FuCheckbox } from "fusion-binary";
import { ref } from "vue";

const enabled = ref(false);
<\/script>

<template>
  <!-- With label -->
  <FuCheckbox v-model="enabled" label="Enable feature" id="feature-toggle" />

  <!-- Without label -->
  <FuCheckbox v-model="enabled" />

  <!-- Small size -->
  <FuCheckbox v-model="enabled" size="sm" label="Small option" />

  <!-- Disabled -->
  <FuCheckbox v-model="enabled" label="Disabled" disabled />
</template>
\`\`\`
        `}}}},a={args:{modelValue:!1,label:"Enable feature",id:"feature-checkbox",size:"md"}},s={args:{modelValue:!1,size:"md"}},o={args:{modelValue:!1,label:"Small Checkbox",size:"sm"}},l={args:{modelValue:!1,label:"Medium Checkbox",size:"md"}},t={args:{modelValue:!0,label:"I am checked",size:"md"}},d={args:{modelValue:!1,label:"Disabled Checkbox",disabled:!0}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    modelValue: false,
    label: "Enable feature",
    id: "feature-checkbox",
    size: "md"
  }
}`,...a.parameters?.docs?.source},description:{story:"With label (default)",...a.parameters?.docs?.description}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    modelValue: false,
    size: "md"
  }
}`,...s.parameters?.docs?.source},description:{story:"Without label",...s.parameters?.docs?.description}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    modelValue: false,
    label: "Small Checkbox",
    size: "sm"
  }
}`,...o.parameters?.docs?.source},description:{story:"Small size",...o.parameters?.docs?.description}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    modelValue: false,
    label: "Medium Checkbox",
    size: "md"
  }
}`,...l.parameters?.docs?.source},description:{story:"Medium size (default)",...l.parameters?.docs?.description}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    modelValue: true,
    label: "I am checked",
    size: "md"
  }
}`,...t.parameters?.docs?.source},description:{story:"Checked by default",...t.parameters?.docs?.description}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    modelValue: false,
    label: "Disabled Checkbox",
    disabled: true
  }
}`,...d.parameters?.docs?.source},description:{story:"Disabled",...d.parameters?.docs?.description}}};const D=["WithLabel","WithoutLabel","Small","Medium","Checked","Disabled"];export{t as Checked,d as Disabled,l as Medium,o as Small,a as WithLabel,s as WithoutLabel,D as __namedExportsOrder,F as default};
