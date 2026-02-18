import{s as C,c as R,a as p,f as y,g as l,t as g,j as f,r as u}from"./iframe-4anGkjM3.js";import{_ as F}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./preload-helper-Ct5FWWRu.js";const V={class:"fu-range-control"},h={key:0,class:"fu-range-label"},_={class:"fu-range-track"},S=["min","max","step","value"],k={class:"fu-range-value"},v=C({__name:"FusionRangeControl",props:{modelValue:{default:0},min:{default:0},max:{default:100},step:{default:1},label:{default:""},unit:{default:""}},emits:["update:modelValue","change"],setup(e,{emit:n}){const a=e,i=n;function b(m){const c=m.target,d=Number(c.value);i("update:modelValue",d),i("change",d)}const x=R(()=>a.unit?`${a.modelValue}${a.unit}`:String(a.modelValue));return(m,c)=>(f(),p("div",V,[e.label?(f(),p("label",h,g(e.label),1)):y("",!0),l("div",_,[l("input",{type:"range",min:e.min,max:e.max,step:e.step,value:e.modelValue,onInput:b},null,40,S),l("span",k,g(x.value),1)])]))}}),o=F(v,[["__scopeId","data-v-9c1e4c91"]]);v.__docgenInfo={exportName:"default",displayName:"FusionRangeControl",description:"",tags:{},props:[{name:"modelValue",required:!0,type:{name:"union",elements:[{name:"number"},{name:"string"}]},defaultValue:{func:!1,value:"0"}},{name:"min",required:!1,type:{name:"number"},defaultValue:{func:!1,value:"0"}},{name:"max",required:!1,type:{name:"number"},defaultValue:{func:!1,value:"100"}},{name:"step",required:!1,type:{name:"number"},defaultValue:{func:!1,value:"1"}},{name:"label",required:!1,type:{name:"string"},defaultValue:{func:!1,value:'""'}},{name:"unit",required:!1,type:{name:"string"},defaultValue:{func:!1,value:'""'}}],events:[{name:"update:modelValue",type:{names:["number"]}},{name:"change",type:{names:["number"]}}],sourceFiles:["/Users/xavier/Documents/Websites/Skkido/Fusion-binary-ui/src/components/rangeControl/FusionRangeControl.vue"]};const D={title:"Fusion/FusionRangeControl",component:o,tags:["autodocs"],parameters:{actions:{handles:["update:modelValue","change"]},docs:{description:{component:`


A reusable, two-way range slider with label, value display, and unit suffix.  
Use it for things like **opacity**, **corner radius**, or **size** settings.

---

#### Example
\`\`\`vue
<template>
  <FusionRangeControl
    v-model="radius"
    label="Corner Radius"
    min="0"
    max="999"
    step="1"
    unit="px"
  />
  <p>Current radius: {{ radius }}px</p>
</template>

<script setup lang="ts">
import { ref } from "vue";
import FusionRangeControl from "@/components/fusion/FusionRangeControl.vue";

const radius = ref(24);
<\/script>

\`\`\`
        `}}},argTypes:{label:{control:"text"},min:{control:"number"},max:{control:"number"},step:{control:"number"},unit:{control:"text"}}},t={args:{label:"Opacity",min:0,max:100,step:1,unit:"%"},render:e=>({components:{FusionRangeControl:o},setup(){const n=u(65);return{args:e,value:n}},template:'<FusionRangeControl v-bind="args" v-model="value" />'})},s={args:{label:"Corner Radius",min:0,max:999,step:1,unit:"px"},render:e=>({components:{FusionRangeControl:o},setup(){const n=u(24);return{args:e,value:n}},template:'<FusionRangeControl v-bind="args" v-model="value" />'})},r={args:{label:"Grid Size",min:0,max:200,step:10,unit:"px"},render:e=>({components:{FusionRangeControl:o},setup(){const n=u(40);return{args:e,value:n}},template:'<FusionRangeControl v-bind="args" v-model="value" />'})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Opacity",
    min: 0,
    max: 100,
    step: 1,
    unit: "%"
  },
  render: args => ({
    components: {
      FusionRangeControl
    },
    setup() {
      const value = ref(65);
      return {
        args,
        value
      };
    },
    template: \`<FusionRangeControl v-bind="args" v-model="value" />\`
  })
}`,...t.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Corner Radius",
    min: 0,
    max: 999,
    step: 1,
    unit: "px"
  },
  render: args => ({
    components: {
      FusionRangeControl
    },
    setup() {
      const value = ref(24);
      return {
        args,
        value
      };
    },
    template: \`<FusionRangeControl v-bind="args" v-model="value" />\`
  })
}`,...s.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Grid Size",
    min: 0,
    max: 200,
    step: 10,
    unit: "px"
  },
  render: args => ({
    components: {
      FusionRangeControl
    },
    setup() {
      const value = ref(40);
      return {
        args,
        value
      };
    },
    template: \`<FusionRangeControl v-bind="args" v-model="value" />\`
  })
}`,...r.parameters?.docs?.source}}};const G=["Default","PixelRange","GridSize"];export{t as Default,r as GridSize,s as PixelRange,G as __namedExportsOrder,D as default};
