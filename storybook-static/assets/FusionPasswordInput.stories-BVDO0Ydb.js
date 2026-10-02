import{q,r as m,w as y,b as t,e as V,t as v,i,d as p,C as E,D as F,E as k,s as I,z as x,u as g,p as z,m as W,o as s}from"./iframe-D8JpMP6T.js";import{c as C}from"./createLucideIcon-Dev6r3pU.js";import{E as D}from"./eye-27CK1jmT.js";import"./preload-helper-Ct5FWWRu.js";/**
 * @license lucide-vue-next v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const S=C("eye-off",[["path",{d:"M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49",key:"ct8e1f"}],["path",{d:"M14.084 14.158a3 3 0 0 1-4.242-4.242",key:"151rxh"}],["path",{d:"M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143",key:"13bj9a"}],["path",{d:"m2 2 20 20",key:"1ooewy"}]]),B={key:0,class:"fu-input-label"},N={key:0,class:"fu-input-required"},M=["type","placeholder","disabled","required"],T={key:1,class:"fu-input-error"},c=q({__name:"FusionPasswordInput",props:{modelValue:{default:""},label:{default:""},placeholder:{default:"Enter password"},size:{default:"sm"},variant:{default:"outline"},disabled:{type:Boolean,default:!1},error:{default:null},required:{type:Boolean,default:!1},formWrapperWidth:{default:"fit-content"}},emits:["update:modelValue"],setup(e,{emit:d}){const f=e,h=d,r=m(f.modelValue),n=m(!1),b=()=>{n.value=!n.value};return y(r,a=>h("update:modelValue",a)),y(()=>f.modelValue,a=>r.value=a),(a,w)=>(s(),t("div",{class:"fu-input-wrapper",style:W({width:e.formWrapperWidth})},[e.label?(s(),t("label",B,[V(v(e.label)+" ",1),e.required?(s(),t("span",N,"*")):i("",!0)])):i("",!0),p("div",{class:z(["fu-input-container",[`fu-input--${e.size}`,`fu-input--${e.variant}`,{"fu-input--error":e.error}]])},[E(p("input",k(a.$attrs,{class:"fu-input",type:n.value?"text":"password",placeholder:e.placeholder,disabled:e.disabled,required:e.required,"onUpdate:modelValue":w[0]||(w[0]=P=>r.value=P)}),null,16,M),[[F,r.value]]),p("button",{type:"button",class:"fu-password-toggle",onClick:b},[(s(),I(x(n.value?g(S):g(D)),{class:"fu-password-icon"}))])],2),e.error?(s(),t("span",T,v(e.error),1)):i("",!0)],4))}});c.__docgenInfo={exportName:"default",displayName:"FusionPasswordInput",description:"",tags:{},props:[{name:"modelValue",required:!1,type:{name:"string"},defaultValue:{func:!1,value:'""'}},{name:"label",required:!1,type:{name:"string"},defaultValue:{func:!1,value:'""'}},{name:"placeholder",required:!1,type:{name:"string"},defaultValue:{func:!1,value:'"Enter password"'}},{name:"size",required:!1,type:{name:"union",elements:[{name:'"sm"'},{name:'"md"'},{name:'"lg"'}]},defaultValue:{func:!1,value:'"sm"'}},{name:"variant",required:!1,type:{name:"union",elements:[{name:'"subtle"'},{name:'"outline"'},{name:'"plain"'}]},defaultValue:{func:!1,value:'"outline"'}},{name:"disabled",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"error",required:!1,type:{name:"union",elements:[{name:"string"},{name:"null"}]},defaultValue:{func:!1,value:"null"}},{name:"required",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"formWrapperWidth",required:!1,type:{name:"string"},defaultValue:{func:!1,value:'"fit-content"'}}],events:[{name:"update:modelValue",type:{names:["string"]}}],sourceFiles:["/Users/xavier/Documents/Websites/Skkido/Fusion-binary-ui/src/components/password/FusionPasswordInput.vue"]};const L={title:"Fusion/Forms/Text/FusionPasswordInput",component:c,tags:["autodocs"],parameters:{docs:{description:{component:`
**FusionPasswordInput** is a controlled password field with toggle visibility.  

- Use \`v-model\` to bind the password value.  
- The field hides input by default and can toggle visibility with an eye/eye-off icon.  
- Props:  
  - \`label\` → optional field label  
  - \`placeholder\` → placeholder text  
  - \`size\` → "sm" | "md" | "lg"  
  - \`error\` → error message  
  - \`required\` → mark input as required  

Example:

\`\`\`vue
<script setup>
import { ref } from "vue";
import FusionPasswordInput from "@/components/FusionPasswordInput.vue";

const password = ref("");
<\/script>

<template>
  <FusionPasswordInput
    v-model="password"
    label="Password"
    placeholder="Enter your password"
    size="md"
    required
  />
</template>
\`\`\`
        `}}}},o={render:e=>({components:{FusionPasswordInput:c},setup(){const d=m("");return{args:e,password:d}},template:`
      <FusionPasswordInput 
        v-bind="args" 
        v-model="password" 
        label="Password" 
        placeholder="Enter password" 
      />
      <p style="margin-top: 1rem; font-size: 14px;">
        Current value: <strong>{{ password }}</strong>
      </p>
    `})},l={args:{label:"Password",placeholder:"Enter your password",error:"Password is required"}},u={args:{label:"Password",placeholder:"Enter password",size:"sm"}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: args => ({
    components: {
      FusionPasswordInput
    },
    setup() {
      const password = ref("");
      return {
        args,
        password
      };
    },
    template: \`
      <FusionPasswordInput 
        v-bind="args" 
        v-model="password" 
        label="Password" 
        placeholder="Enter password" 
      />
      <p style="margin-top: 1rem; font-size: 14px;">
        Current value: <strong>{{ password }}</strong>
      </p>
    \`
  })
}`,...o.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Password",
    placeholder: "Enter your password",
    error: "Password is required"
  }
}`,...l.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Password",
    placeholder: "Enter password",
    size: "sm"
  }
}`,...u.parameters?.docs?.source}}};const A=["Default","WithError","SmallPasswordField"];export{o as Default,u as SmallPasswordField,l as WithError,A as __namedExportsOrder,L as default};
