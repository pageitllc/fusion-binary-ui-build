import{d as w,r as a,w as I,c as s,a as y,b as S,e as k,t as F,F as W,s as A,n as B,h as E,o as r,f as N,A as P,B as T,z as V}from"./iframe-o7SUGoga.js";import{_}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./preload-helper-Ct5FWWRu.js";const O={key:0,class:"fu-input-label"},U={key:0,class:"fu-input-required"},j=["onUpdate:modelValue","onInput","onKeydown","disabled"],K={key:1,class:"fu-input-error"},x=w({__name:"FusionCodeInput",props:{modelValue:{default:""},label:{default:""},length:{default:6},size:{default:"md"},variant:{default:"outline"},disabled:{type:Boolean,default:!1},error:{default:null},required:{type:Boolean,default:!1},formWrapperWidth:{default:"fit-content"}},emits:["update:modelValue"],setup(e,{emit:o}){const t=e,z=o,l=a(Array(t.length).fill("")),b=a([]);I(()=>t.modelValue,n=>{n&&n.length===t.length&&(l.value=n.split(""))}),I(l,()=>{z("update:modelValue",l.value.join(""))});function D(n,C){const h=C.target.value.replace(/\D/g,"");l.value[n]=h,h&&n<t.length-1&&V(()=>b.value[n+1]?.focus())}function q(n){!l.value[n]&&n>0&&V(()=>b.value[n-1]?.focus())}return(n,C)=>(r(),s("div",{class:"fu-input-wrapper",style:E({width:e.formWrapperWidth})},[e.label?(r(),s("label",O,[k(F(e.label)+" ",1),e.required?(r(),s("span",U,"*")):y("",!0)])):y("",!0),S("div",{class:B(["fu-code-container",[`fu-input--${e.size}`,`fu-input--${e.variant}`,{"fu-input--error":e.error}]])},[(r(!0),s(W,null,A(l.value,(h,i)=>N((r(),s("input",{key:i,ref_for:!0,ref_key:"inputs",ref:b,type:"text",maxlength:"1",inputmode:"numeric",pattern:"[0-9]*",class:"fu-code-box fu-input-container","onUpdate:modelValue":u=>l.value[i]=u,onInput:u=>D(i,u),onKeydown:T(u=>q(i),["backspace"]),disabled:e.disabled},null,40,j)),[[P,l.value[i]]])),128))],2),e.error?(r(),s("span",K,F(e.error),1)):y("",!0)],4))}}),g=_(x,[["__scopeId","data-v-8a5c5958"]]);x.__docgenInfo={exportName:"default",displayName:"FusionCodeInput",description:"",tags:{},props:[{name:"modelValue",required:!1,type:{name:"string"},defaultValue:{func:!1,value:'""'}},{name:"label",required:!1,type:{name:"string"},defaultValue:{func:!1,value:'""'}},{name:"length",required:!1,type:{name:"number"},defaultValue:{func:!1,value:"6"}},{name:"size",required:!1,type:{name:"union",elements:[{name:'"sm"'},{name:'"md"'},{name:'"lg"'}]},defaultValue:{func:!1,value:'"md"'}},{name:"variant",required:!1,type:{name:"union",elements:[{name:'"outline"'},{name:'"subtle"'},{name:'"plain"'}]},defaultValue:{func:!1,value:'"outline"'}},{name:"disabled",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"error",required:!1,type:{name:"union",elements:[{name:"string"},{name:"null"}]},defaultValue:{func:!1,value:"null"}},{name:"required",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"formWrapperWidth",required:!1,type:{name:"string"},defaultValue:{func:!1,value:'"fit-content"'}}],events:[{name:"update:modelValue",type:{names:["string"]}}],sourceFiles:["/Users/tommys/Documents/Skkido/Fusion-binary-ui/src/components/codeInput/FusionCodeInput.vue"]};const G={title:"Components/CodeInput",component:g,tags:["autodocs"],parameters:{docs:{description:{component:`
**FusionCodeInput** is a controlled multi-field verification code input used for authentication and OTP workflows.  

- Automatically moves focus as the user types.  
- Accepts only numeric characters.  
- Emits the full concatenated value via \`v-model\`.  
- Integrates seamlessly with the **Fusion design system** (sizes + variants).  

### Props  
| Prop | Type | Default | Description |
|------|------|----------|-------------|
| \`length\` | number | 6 | Number of code boxes |
| \`label\` | string | "" | Field label |
| \`size\` | "sm" | "md" | "lg" | "md" | Adjusts code box dimensions |
| \`variant\` | "outline" | "subtle" | "plain" | "outline" | Adjusts style scheme |
| \`error\` | string | null | Shows an error message |
| \`disabled\` | boolean | false | Disables all boxes |
| \`required\` | boolean | false | Adds a required marker |

---

### Example Usage

\`\`\`vue
<script setup>
import { ref } from "vue";
import FusionCodeInput from "@/components/FusionCodeInput.vue";

const code = ref("");
<\/script>

<template>
  <FusionCodeInput 
    v-model="code" 
    label="Verification Code" 
    :length="6" 
    size="md" 
    variant="outline"
    required
  />
  <p class="text-sm mt-2">Entered: {{ code }}</p>
</template>
\`\`\`
        `}}}},d={render:e=>({components:{FusionCodeInput:g},setup(){const o=a("");return{args:e,code:o}},template:`
      <FusionCodeInput 
        v-bind="args" 
        v-model="code" 
        label="Verification Code"
        :length="6"
      />
      <p style="margin-top: 1rem; font-size: 14px; color: #555;">
        Current value: <strong>{{ code }}</strong>
      </p>
    `}),args:{label:"Verification Code",length:6,size:"md",variant:"outline"}},m={args:{label:"Verification Code",error:"Invalid or expired code",length:6,size:"md",variant:"outline"}},c={args:{label:"4-Digit Code",length:4,size:"md",variant:"outline"}},p={args:{label:"Verification Code",length:6,disabled:!0,size:"md",variant:"outline"}},f={render:()=>({components:{FusionCodeInput:g},setup(){const e=a(""),o=a(""),t=a("");return{small:e,medium:o,large:t}},template:`
      <div style="display: flex; flex-direction: column; gap: 1rem; max-width: 400px;">
        <FusionCodeInput v-model="small" label="Small" size="sm" />
        <FusionCodeInput v-model="medium" label="Medium (Default)" size="md" />
        <FusionCodeInput v-model="large" label="Large" size="lg" />
      </div>
    `})},v={render:()=>({components:{FusionCodeInput:g},setup(){const e=a(""),o=a(""),t=a("");return{outline:e,subtle:o,plain:t}},template:`
      <div style="display: flex; flex-direction: column; gap: 1rem; max-width: 400px;">
        <FusionCodeInput v-model="outline" label="Outline" variant="outline" />
        <FusionCodeInput v-model="subtle" label="Subtle" variant="subtle" />
        <FusionCodeInput v-model="plain" label="Plain" variant="plain" />
      </div>
    `})};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: args => ({
    components: {
      FusionCodeInput
    },
    setup() {
      const code = ref("");
      return {
        args,
        code
      };
    },
    template: \`
      <FusionCodeInput 
        v-bind="args" 
        v-model="code" 
        label="Verification Code"
        :length="6"
      />
      <p style="margin-top: 1rem; font-size: 14px; color: #555;">
        Current value: <strong>{{ code }}</strong>
      </p>
    \`
  }),
  args: {
    label: "Verification Code",
    length: 6,
    size: "md",
    variant: "outline"
  }
}`,...d.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Verification Code",
    error: "Invalid or expired code",
    length: 6,
    size: "md",
    variant: "outline"
  }
}`,...m.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    label: "4-Digit Code",
    length: 4,
    size: "md",
    variant: "outline"
  }
}`,...c.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Verification Code",
    length: 6,
    disabled: true,
    size: "md",
    variant: "outline"
  }
}`,...p.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      FusionCodeInput
    },
    setup() {
      const small = ref("");
      const medium = ref("");
      const large = ref("");
      return {
        small,
        medium,
        large
      };
    },
    template: \`
      <div style="display: flex; flex-direction: column; gap: 1rem; max-width: 400px;">
        <FusionCodeInput v-model="small" label="Small" size="sm" />
        <FusionCodeInput v-model="medium" label="Medium (Default)" size="md" />
        <FusionCodeInput v-model="large" label="Large" size="lg" />
      </div>
    \`
  })
}`,...f.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      FusionCodeInput
    },
    setup() {
      const outline = ref("");
      const subtle = ref("");
      const plain = ref("");
      return {
        outline,
        subtle,
        plain
      };
    },
    template: \`
      <div style="display: flex; flex-direction: column; gap: 1rem; max-width: 400px;">
        <FusionCodeInput v-model="outline" label="Outline" variant="outline" />
        <FusionCodeInput v-model="subtle" label="Subtle" variant="subtle" />
        <FusionCodeInput v-model="plain" label="Plain" variant="plain" />
      </div>
    \`
  })
}`,...v.parameters?.docs?.source}}};const H=["Default","WithError","FourDigitCode","Disabled","Sizes","Variants"];export{d as Default,p as Disabled,c as FourDigitCode,f as Sizes,v as Variants,m as WithError,H as __namedExportsOrder,G as default};
