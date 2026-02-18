import{s as b,c as R,a as m,g as V,f as g,y as z,l as y,j as c,r as d}from"./iframe-4anGkjM3.js";import{_ as S}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./preload-helper-Ct5FWWRu.js";const $=["value","disabled","checked"],_={class:"fu-radio__control"},h={key:0,class:"fu-radio__dot"},D={key:0,class:"fu-radio__label"},f=b({__name:"FusionRadio",props:{modelValue:{},value:{},size:{default:"md"},disabled:{type:Boolean,default:!1}},emits:["update:modelValue"],setup(e,{emit:u}){const p=e,v=u,x=R({get:()=>p.modelValue,set:a=>v("update:modelValue",a)}),r=R(()=>x.value===p.value);return(a,F)=>(c(),m("label",{class:y(["fu-radio",[`fu-radio--${e.size}`,{"is-checked":r.value,"is-disabled":e.disabled}]])},[V("input",{type:"radio",class:"fu-radio__input",value:e.value,disabled:e.disabled,checked:r.value,onChange:F[0]||(F[0]=k=>v("update:modelValue",e.value))},null,40,$),V("span",_,[r.value?(c(),m("span",h)):g("",!0)]),a.$slots.default?(c(),m("span",D,[z(a.$slots,"default",{},void 0,!0)])):g("",!0)],2))}}),s=S(f,[["__scopeId","data-v-3c5ecc5b"]]);f.__docgenInfo={exportName:"default",displayName:"FusionRadio",description:"",tags:{},props:[{name:"modelValue",required:!1,type:{name:"union",elements:[{name:"string"},{name:"number"}]}},{name:"value",required:!0,type:{name:"union",elements:[{name:"string"},{name:"number"}]}},{name:"size",required:!1,type:{name:"Size"},defaultValue:{func:!1,value:'"md"'}},{name:"disabled",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}],events:[{name:"update:modelValue"}],slots:[{name:"default"}],sourceFiles:["/Users/xavier/Documents/Websites/Skkido/Fusion-binary-ui/src/components/radio/FusionRadio.vue"]};const X={title:"Fusion/Forms/FusionRadio",component:s,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:`


FusionRadio is a controlled radio input component built for the Fusion Design System.

It allows selecting **one option from a group**.

---

## Features

- Multiple sizes (xs → xl)
- Controlled \`modelValue\`
- Disabled state
- Slot-based label
- Clean circular UI
- Fully TypeScript safe

---

## Basic Usage

\`\`\`vue
<script setup lang="ts">
import { ref } from "vue"
import FusionRadio from "@/components/radio/FusionRadio.vue"

const selected = ref("sm")
<\/script>

<template>
  <FusionRadio v-model="selected" value="sm">
    Size 'sm'
  </FusionRadio>
</template>
\`\`\`

---

## Radio Group Example

\`\`\`vue
<div style="display:flex; gap:16px;">
  <FusionRadio v-model="selected" value="xs">XS</FusionRadio>
  <FusionRadio v-model="selected" value="sm">SM</FusionRadio>
  <FusionRadio v-model="selected" value="md">MD</FusionRadio>
</div>
\`\`\`
        `}}},argTypes:{value:{control:"text",description:"The value associated with this radio option."},size:{control:"select",options:["xs","sm","md","lg","xl"],description:"Controls the visual size of the radio."},disabled:{control:"boolean",description:"Disables the radio option."}}},l={args:{value:"sm",size:"md",disabled:!1},render:e=>({components:{FusionRadio:s},setup(){const u=d("sm");return{args:e,selected:u}},template:`
      <div>
        <FusionRadio
          :modelValue="selected"
          @update:modelValue="selected = $event"
          :value="args.value"
          :size="args.size"
          :disabled="args.disabled"
        >
          Radio Option
        </FusionRadio>

        <div style="margin-top:16px; font-size:14px;">
          Selected: {{ selected }}
        </div>
      </div>
    `})},o={render:()=>({components:{FusionRadio:s},setup(){return{selected:d("md")}},template:`
      <div>
        <div style="display:flex; gap:24px;">
          <FusionRadio
            :modelValue="selected"
            @update:modelValue="selected = $event"
            value="xs"
          >
            XS
          </FusionRadio>

          <FusionRadio
            :modelValue="selected"
            @update:modelValue="selected = $event"
            value="sm"
          >
            SM
          </FusionRadio>

          <FusionRadio
            :modelValue="selected"
            @update:modelValue="selected = $event"
            value="md"
          >
            MD
          </FusionRadio>

          <FusionRadio
            :modelValue="selected"
            @update:modelValue="selected = $event"
            value="lg"
          >
            LG
          </FusionRadio>
        </div>

        <div style="margin-top:16px;">
          Selected: {{ selected }}
        </div>
      </div>
    `})},n={render:()=>({components:{FusionRadio:s},setup(){return{selected:d("md")}},template:`
      <div style="display:flex; gap:24px; align-items:center;">
        <FusionRadio :modelValue="selected" @update:modelValue="selected = $event" value="xs" size="xs">XS</FusionRadio>
        <FusionRadio :modelValue="selected" @update:modelValue="selected = $event" value="sm" size="sm">SM</FusionRadio>
        <FusionRadio :modelValue="selected" @update:modelValue="selected = $event" value="md" size="md">MD</FusionRadio>
        <FusionRadio :modelValue="selected" @update:modelValue="selected = $event" value="lg" size="lg">LG</FusionRadio>
        <FusionRadio :modelValue="selected" @update:modelValue="selected = $event" value="xl" size="xl">XL</FusionRadio>
      </div>
    `})},t={render:()=>({components:{FusionRadio:s},setup(){return{selected:d("sm")}},template:`
      <div style="display:flex; gap:24px;">
        <FusionRadio
          :modelValue="selected"
          @update:modelValue="selected = $event"
          value="sm"
        >
          Enabled
        </FusionRadio>

        <FusionRadio
          :modelValue="selected"
          @update:modelValue="selected = $event"
          value="md"
          disabled
        >
          Disabled
        </FusionRadio>
      </div>
    `})},i={render:()=>({components:{FusionRadio:s},setup(){return{selected:d("sm")}},template:`
      <div style="
        background:#111827;
        padding:40px;
        border-radius:16px;
        display:flex;
        gap:40px;
        align-items:center;
      ">
        <FusionRadio :modelValue="selected" @update:modelValue="selected = $event" value="xs" size="lg">
          Size 'xs'
        </FusionRadio>

        <FusionRadio :modelValue="selected" @update:modelValue="selected = $event" value="sm" size="lg">
          Size 'sm'
        </FusionRadio>

        <FusionRadio :modelValue="selected" @update:modelValue="selected = $event" value="md" size="lg">
          Size 'md'
        </FusionRadio>
      </div>
    `})};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    value: "sm",
    size: "md",
    disabled: false
  },
  render: args => ({
    components: {
      FusionRadio
    },
    setup() {
      const selected = ref<string | number>("sm");
      return {
        args,
        selected
      };
    },
    template: \`
      <div>
        <FusionRadio
          :modelValue="selected"
          @update:modelValue="selected = $event"
          :value="args.value"
          :size="args.size"
          :disabled="args.disabled"
        >
          Radio Option
        </FusionRadio>

        <div style="margin-top:16px; font-size:14px;">
          Selected: {{ selected }}
        </div>
      </div>
    \`
  })
}`,...l.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      FusionRadio
    },
    setup() {
      const selected = ref<string | number>("md");
      return {
        selected
      };
    },
    template: \`
      <div>
        <div style="display:flex; gap:24px;">
          <FusionRadio
            :modelValue="selected"
            @update:modelValue="selected = $event"
            value="xs"
          >
            XS
          </FusionRadio>

          <FusionRadio
            :modelValue="selected"
            @update:modelValue="selected = $event"
            value="sm"
          >
            SM
          </FusionRadio>

          <FusionRadio
            :modelValue="selected"
            @update:modelValue="selected = $event"
            value="md"
          >
            MD
          </FusionRadio>

          <FusionRadio
            :modelValue="selected"
            @update:modelValue="selected = $event"
            value="lg"
          >
            LG
          </FusionRadio>
        </div>

        <div style="margin-top:16px;">
          Selected: {{ selected }}
        </div>
      </div>
    \`
  })
}`,...o.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      FusionRadio
    },
    setup() {
      const selected = ref<string | number>("md");
      return {
        selected
      };
    },
    template: \`
      <div style="display:flex; gap:24px; align-items:center;">
        <FusionRadio :modelValue="selected" @update:modelValue="selected = $event" value="xs" size="xs">XS</FusionRadio>
        <FusionRadio :modelValue="selected" @update:modelValue="selected = $event" value="sm" size="sm">SM</FusionRadio>
        <FusionRadio :modelValue="selected" @update:modelValue="selected = $event" value="md" size="md">MD</FusionRadio>
        <FusionRadio :modelValue="selected" @update:modelValue="selected = $event" value="lg" size="lg">LG</FusionRadio>
        <FusionRadio :modelValue="selected" @update:modelValue="selected = $event" value="xl" size="xl">XL</FusionRadio>
      </div>
    \`
  })
}`,...n.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      FusionRadio
    },
    setup() {
      const selected = ref<string | number>("sm");
      return {
        selected
      };
    },
    template: \`
      <div style="display:flex; gap:24px;">
        <FusionRadio
          :modelValue="selected"
          @update:modelValue="selected = $event"
          value="sm"
        >
          Enabled
        </FusionRadio>

        <FusionRadio
          :modelValue="selected"
          @update:modelValue="selected = $event"
          value="md"
          disabled
        >
          Disabled
        </FusionRadio>
      </div>
    \`
  })
}`,...t.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      FusionRadio
    },
    setup() {
      const selected = ref<string | number>("sm");
      return {
        selected
      };
    },
    template: \`
      <div style="
        background:#111827;
        padding:40px;
        border-radius:16px;
        display:flex;
        gap:40px;
        align-items:center;
      ">
        <FusionRadio :modelValue="selected" @update:modelValue="selected = $event" value="xs" size="lg">
          Size 'xs'
        </FusionRadio>

        <FusionRadio :modelValue="selected" @update:modelValue="selected = $event" value="sm" size="lg">
          Size 'sm'
        </FusionRadio>

        <FusionRadio :modelValue="selected" @update:modelValue="selected = $event" value="md" size="lg">
          Size 'md'
        </FusionRadio>
      </div>
    \`
  })
}`,...i.parameters?.docs?.source}}};const L=["Playground","RadioGroup","Sizes","DisabledStates","DarkPreview"];export{i as DarkPreview,t as DisabledStates,l as Playground,o as RadioGroup,n as Sizes,L as __namedExportsOrder,X as default};
