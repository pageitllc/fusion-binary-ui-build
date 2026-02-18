import{r as a,c as k,m as F,q as O,i as V,o as U,a as c,b as z,d as N,w as _,p as K,e as C,f as j,n as G,l as J,F as Q,h as X,T as Y,j as d,u as Z,t as ee}from"./iframe-4anGkjM3.js";import{F as te}from"./FusionTextInput-B7zbcKHf.js";import{_ as re}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{C as ne}from"./chevron-down-pi8uy0el.js";import"./preload-helper-Ct5FWWRu.js";import"./createLucideIcon-MAVkZFkt.js";const oe=["onMousedown"],q=240,I={__name:"FusionTimePicker",props:{modelValue:String,interval:{type:Number,default:30},error:String,label:String,required:Boolean,disabled:Boolean,size:String,formWrapperWidth:String},emits:["update:modelValue","change"],setup(n,{emit:s}){const g=n,p=s,o=a(g.modelValue||""),l=a(!1),y=a(!1),b=a(null),B=a(null),u=a({left:0,top:0,bottom:0,width:0}),h=a(null),w=k(()=>{const e=[];for(let t=0;t<24;t++)for(let r=0;r<60;r+=g.interval){const i=new Date;i.setHours(t,r,0),e.push({label:i.toLocaleTimeString([],{hour:"numeric",minute:"2-digit",hour12:!0}),value:`${String(t).padStart(2,"0")}:${String(r).padStart(2,"0")}`})}return e}),W=k(()=>o.value?w.value.filter(e=>e.label.toLowerCase().includes(o.value.toLowerCase())):w.value),D=k(()=>W.value.length?W.value:w.value),L=e=>{let t=e.target.value.toLowerCase();t=t.replace(/[^0-9:apm]/g,"");const r=e.target;if(/^\d{2}$/.test(t)){t+=":",o.value=t,V(()=>r.setSelectionRange(3,3));return}o.value=t},R=e=>{if(!e)return null;const t=e.trim().toLowerCase().match(/^(\d{1,2})(?::(\d{2}))?\s?(am|pm)?$/);if(!t)return null;let r=parseInt(t[1],10);const i=parseInt(t[2]||"00",10),m=t[3];if(m==="pm"&&r<12&&(r+=12),m==="am"&&r===12&&(r=0),r>23||i>59)return null;const H=r%12||12,A=r<12?"am":"pm";return`${String(H).padStart(2,"0")}:${String(i).padStart(2,"0")}${A}`},T=()=>{if(!b.value)return;const e=b.value.getBoundingClientRect();u.value={left:e.left,top:e.top,bottom:e.bottom,width:e.width};const t=window.innerHeight-e.bottom,r=e.top;y.value=t<q&&r>t},$=(e,t)=>{t===0&&e&&(h.value=e)},E=e=>{o.value=e,p("update:modelValue",e),p("change",e),l.value=!1},S=()=>{const e=R(o.value);e&&(o.value=e,p("update:modelValue",e),p("change",e),l.value=!1)},M=()=>setTimeout(()=>{S(),l.value=!1},120);F(()=>g.modelValue,e=>o.value=e||""),F(o,async()=>{await V(),h.value&&h.value.scrollIntoView({behavior:"smooth",block:"nearest"})});const x=()=>T();return O(()=>{window.addEventListener("resize",x),V(T)}),U(()=>window.removeEventListener("resize",x)),(e,t)=>(d(),c("div",{class:"fu-time-picker",ref_key:"inputRef",ref:b},[z(te,{type:"text",modelValue:o.value,"onUpdate:modelValue":t[0]||(t[0]=r=>o.value=r),placeholder:"HH:mm or 4:30pm",onFocus:t[1]||(t[1]=r=>{l.value=!0,T()}),onInput:L,onKeydown:K(C(S,["prevent"]),["enter"]),onBlur:M,label:n.label,error:n.error,required:n.required,disabled:n.disabled,size:n.size,formWrapperWidth:n.formWrapperWidth},{right:_(()=>[z(Z(ne))]),_:1},8,["modelValue","onKeydown","label","error","required","disabled","size","formWrapperWidth"]),(d(),N(Y,{to:"body"},[l.value?(d(),c("div",{key:0,ref_key:"dropdownRef",ref:B,class:J(["fu-time-dropdown customScrollBar",{"open-up":y.value}]),style:G({left:u.value.left+"px",width:u.value.width+"px",top:y.value?u.value.top-q+"px":u.value.bottom+"px"})},[(d(!0),c(Q,null,X(D.value,(r,i)=>(d(),c("div",{key:r.value,class:"fu-time-option",ref_for:!0,ref:m=>$(m,i),onMousedown:C(m=>E(r.value),["prevent"])},ee(r.label),41,oe))),128))],6)):j("",!0)]))],512))}},P=re(I,[["__scopeId","data-v-de0d9c0d"]]);I.__docgenInfo={exportName:"default",displayName:"FusionTimePicker",description:"",tags:{},props:[{name:"modelValue",type:{name:"string"}},{name:"interval",type:{name:"number"},defaultValue:{func:!1,value:"30"}},{name:"error",type:{name:"string"}},{name:"label",type:{name:"string"}},{name:"required",type:{name:"boolean"}},{name:"disabled",type:{name:"boolean"}},{name:"size",type:{name:"string"}},{name:"formWrapperWidth",type:{name:"string"}}],events:[{name:"update:modelValue"},{name:"change"}],sourceFiles:["/Users/xavier/Documents/Websites/Skkido/Fusion-binary-ui/src/components/datePicker/time/FusionTimePicker.vue"]};const de={title:"Components/Date-and-Time/TimePicker",component:P,tags:["autodocs"],argTypes:{interval:{control:{type:"number"},description:"Time interval in minutes for dropdown options",table:{category:"Props",defaultValue:{summary:30},type:{summary:"number"}}},formWrapperWidth:{control:{type:"text"},description:"Width of the input wrapper (e.g. '200px')",table:{category:"Props",defaultValue:{summary:"undefined"},type:{summary:"string | undefined"}}},size:{control:{type:"select"},options:["sm","md","lg"],description:"Size of the input",table:{category:"Props",defaultValue:{summary:"md"},type:{summary:"string"}}},error:{control:{type:"text"},description:"Error message (string) or null",table:{category:"Props",defaultValue:{summary:"null"},type:{summary:"string | null"}}},required:{control:{type:"boolean"},description:"Whether the input is required",table:{category:"Props",defaultValue:{summary:!1},type:{summary:"boolean"}}},label:{control:{type:"text"},description:"The Label of the input",table:{category:"Props",defaultValue:{summary:!1},type:{summary:"string"}}},disabled:{control:{type:"boolean"},description:"Whether the input is disabled",table:{category:"Props",defaultValue:{summary:!1},type:{summary:"boolean"}}},onUpdateModelValue:{action:"update:modelValue",description:"Emitted when selected time changes",table:{category:"Events",type:{summary:"(value: string) => void"}}}},parameters:{docs:{description:{component:`
A flexible and accessible **time picker component** supporting manual input or dropdown selection.

---

### Features

- Auto-formats typed input with **HH:mm** and **AM/PM**
- Dropdown with configurable interval (default: 30 min)
- Reactive with \`v-model\`
- Supports disabling, required flag, error messages, and different sizes
- Auto-scrolls to first visible option when typing
- Auto-position dropdown up or down depending on viewport

---

### Example Usage

\`\`\`vue
<script setup>
import { ref } from "vue";
import FusionTimePicker from "@/components/FusionTimePicker.vue";

const time1 = ref("");
const time2 = ref("14:30");
<\/script>

<template>
  <h3>Default Time Picker</h3>
  <FusionTimePicker v-model="time1" placeholder="Select time" />

  <h3 class="mt-6">Configured Interval & Size</h3>
  <FusionTimePicker
    v-model="time2"
    :interval="15"
    size="lg"
    formWrapperWidth="200px"
    :required="true"
    :error="'Invalid time'"
  />
</template>
\`\`\`
        `}}}},f={name:"Default",render:n=>({components:{FusionTimePicker:P},setup(){const s=a("");return{args:n,model:s}},template:'<FusionTimePicker v-bind="args" v-model="model" />'}),args:{interval:30,size:"sm",formWrapperWidth:void 0,error:null,required:!1,disabled:!1}},v={name:"Configured",render:n=>({components:{FusionTimePicker:P},setup(){const s=a("14:30");return{args:n,model:s}},template:'<FusionTimePicker v-bind="args" v-model="model" />'}),args:{interval:15,size:"sm",formWrapperWidth:"200px",error:"Invalid time",required:!0,disabled:!1}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  name: "Default",
  render: args => ({
    components: {
      FusionTimePicker
    },
    setup() {
      const model = ref("");
      return {
        args,
        model
      };
    },
    template: \`<FusionTimePicker v-bind="args" v-model="model" />\`
  }),
  args: {
    interval: 30,
    size: "sm",
    formWrapperWidth: undefined,
    error: null,
    required: false,
    disabled: false
  }
}`,...f.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  name: "Configured",
  render: args => ({
    components: {
      FusionTimePicker
    },
    setup() {
      const model = ref("14:30");
      return {
        args,
        model
      };
    },
    template: \`<FusionTimePicker v-bind="args" v-model="model" />\`
  }),
  args: {
    interval: 15,
    size: "sm",
    formWrapperWidth: "200px",
    error: "Invalid time",
    required: true,
    disabled: false
  }
}`,...v.parameters?.docs?.source}}};const pe=["Default","Configured"];export{v as Configured,f as Default,pe as __namedExportsOrder,de as default};
