import{s as S,r as o,m as F,a as d,f as C,g as k,k as W,t as V,F as B,h as E,l as N,n as P,j as m,z as T,D as O,p as A,i as I}from"./iframe-4anGkjM3.js";import{_ as K}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./preload-helper-Ct5FWWRu.js";const M={key:0,class:"fu-input-label"},U={key:0,class:"fu-input-required"},_=["onUpdate:modelValue","onInput","onKeydown","disabled"],L={key:1,class:"fu-input-error"},x=S({__name:"FusionCodeInput",props:{modelValue:{default:""},label:{default:""},length:{default:6},size:{default:"md"},variant:{default:"outline"},disabled:{type:Boolean,default:!1},error:{default:null},required:{type:Boolean,default:!1},formWrapperWidth:{default:"fit-content"}},emits:["update:modelValue"],setup(e,{emit:r}){const a=e,z=r,l=o(Array(a.length).fill("")),c=o([]);F(()=>a.modelValue,t=>{if(!t){l.value=Array(a.length).fill("");return}const i=t.split("").slice(0,a.length);for(;i.length<a.length;)i.push("");l.value=i},{immediate:!0}),F(l,()=>{z("update:modelValue",l.value.join(""))},{deep:!0});function D(t,i){const n=i.target.value.replace(/\D/g,"");l.value[t]=n,n&&t<a.length-1&&I(()=>c.value[t+1]?.focus())}function w(t){!l.value[t]&&t>0&&I(()=>c.value[t-1]?.focus())}function q(t){t.preventDefault();const u=(t.clipboardData?.getData("text")||"").replace(/\D/g,"").slice(0,a.length).split("");if(u.length!==0){u.forEach((n,s)=>{l.value[s]=n});for(let n=u.length;n<a.length;n++)l.value[n]="";I(()=>{const n=Math.min(u.length-1,a.length-1);c.value[n]?.focus()})}}return(t,i)=>(m(),d("div",{class:"fu-input-wrapper",style:P({width:e.formWrapperWidth})},[e.label?(m(),d("label",M,[W(V(e.label)+" ",1),e.required?(m(),d("span",U,"*")):C("",!0)])):C("",!0),k("div",{class:N(["fu-code-container",[`fu-input--${e.size}`,`fu-input--${e.variant}`,{"fu-input--error":e.error}]])},[(m(!0),d(B,null,E(l.value,(u,n)=>T((m(),d("input",{key:n,ref_for:!0,ref:s=>c.value[n]=s,type:"text",maxlength:"1",inputmode:"numeric",pattern:"[0-9]*",class:"fu-code-box fu-input-container","onUpdate:modelValue":s=>l.value[n]=s,onInput:s=>D(n,s),onKeydown:A(s=>w(n),["backspace"]),onPaste:q,disabled:e.disabled},null,40,_)),[[O,l.value[n]]])),128))],2),e.error?(m(),d("span",L,V(e.error),1)):C("",!0)],4))}}),y=K(x,[["__scopeId","data-v-8582d137"]]);x.__docgenInfo={exportName:"default",displayName:"FusionCodeInput",description:"",tags:{},props:[{name:"modelValue",required:!1,type:{name:"string"},defaultValue:{func:!1,value:'""'}},{name:"label",required:!1,type:{name:"string"},defaultValue:{func:!1,value:'""'}},{name:"length",required:!1,type:{name:"number"},defaultValue:{func:!1,value:"6"}},{name:"size",required:!1,type:{name:"union",elements:[{name:'"sm"'},{name:'"md"'},{name:'"lg"'}]},defaultValue:{func:!1,value:'"md"'}},{name:"variant",required:!1,type:{name:"union",elements:[{name:'"outline"'},{name:'"subtle"'},{name:'"plain"'}]},defaultValue:{func:!1,value:'"outline"'}},{name:"disabled",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"error",required:!1,type:{name:"union",elements:[{name:"string"},{name:"null"}]},defaultValue:{func:!1,value:"null"}},{name:"required",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"formWrapperWidth",required:!1,type:{name:"string"},defaultValue:{func:!1,value:'"fit-content"'}}],events:[{name:"update:modelValue",type:{names:["string"]}}],sourceFiles:["/Users/xavier/Documents/Websites/Skkido/Fusion-binary-ui/src/components/codeInput/FusionCodeInput.vue"]};const H={title:"Components/CodeInput",component:y,tags:["autodocs"],parameters:{docs:{description:{component:`
**FusionCodeInput** is a multi-field numeric input designed for verification codes and OTP workflows.  
It emits the full code string using \`v-model\` and handles focus transitions automatically.

### Key Features
- Fully controlled using \`v-model\`.
- Numeric-only input with one digit per box.
- Auto-focus progression and backspace navigation.
- Supports size and variant styling from the Fusion design system.
- Displays validation and error states.

---

### Props
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| \`modelValue\` | string | "" | Bound v-model value |
| \`length\` | number | 6 | Number of input boxes |
| \`label\` | string | "" | Optional field label |
| \`size\` | "sm" | "md" | "lg" | "md" | Input sizing |
| \`variant\` | "outline" | "subtle" | "plain" | "outline" | Visual style |
| \`error\` | string | null | Validation message |
| \`disabled\` | boolean | false | Disables entire component |
| \`required\` | boolean | false | Adds required indicator |

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

This example shows how the entered digits form a single string as the user types.
        `}}}},p={render:e=>({components:{FusionCodeInput:y},setup(){const r=o("");return{args:e,code:r}},template:`
      <FusionCodeInput 
        v-bind="args" 
        v-model="code" 
      />

      <p style="margin-top: 1rem; font-size: 14px; color: #555;">
        Current value: <strong>{{ code }}</strong>
      </p>
    `}),args:{label:"Verification Code",length:6,size:"md",variant:"outline"}},f={args:{label:"Verification Code",error:"Invalid or expired code",length:6,size:"md",variant:"outline"}},g={args:{label:"4-Digit Code",length:4,size:"md",variant:"outline"}},v={args:{label:"Verification Code",length:6,disabled:!0,size:"md",variant:"outline"}},b={render:()=>({components:{FusionCodeInput:y},setup(){const e=o(""),r=o(""),a=o("");return{small:e,medium:r,large:a}},template:`
      <div style="display: flex; flex-direction: column; gap: 1rem; max-width: 400px;">
        <FusionCodeInput v-model="small" label="Small" size="sm" />
        <FusionCodeInput v-model="medium" label="Medium (Default)" size="md" />
        <FusionCodeInput v-model="large" label="Large" size="lg" />
      </div>
    `})},h={render:()=>({components:{FusionCodeInput:y},setup(){const e=o(""),r=o(""),a=o("");return{outline:e,subtle:r,plain:a}},template:`
      <div style="display: flex; flex-direction: column; gap: 1rem; max-width: 400px;">
        <FusionCodeInput v-model="outline" label="Outline" variant="outline" />
        <FusionCodeInput v-model="subtle" label="Subtle" variant="subtle" />
        <FusionCodeInput v-model="plain" label="Plain" variant="plain" />
      </div>
    `})};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Verification Code",
    error: "Invalid or expired code",
    length: 6,
    size: "md",
    variant: "outline"
  }
}`,...f.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    label: "4-Digit Code",
    length: 4,
    size: "md",
    variant: "outline"
  }
}`,...g.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Verification Code",
    length: 6,
    disabled: true,
    size: "md",
    variant: "outline"
  }
}`,...v.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
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
}`,...b.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
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
}`,...h.parameters?.docs?.source}}};const J=["Default","WithError","FourDigitCode","Disabled","Sizes","Variants"];export{p as Default,v as Disabled,g as FourDigitCode,b as Sizes,h as Variants,f as WithError,J as __namedExportsOrder,H as default};
