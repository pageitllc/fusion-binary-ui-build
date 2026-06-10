import{r as s,s as E,c as M,x as te,p as F,k as ae,b as x,l as U,w as ne,v as re,m as $,f as se,n as oe,j as ie,F as le,e as de,i as me,T as pe,o as h,u as ue,t as ce}from"./iframe-D3vfv6YP.js";import{F as ve}from"./FusionTextInput-WcBW8h59.js";import{_ as fe}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{C as ye}from"./chevron-down-CgrmphEu.js";import"./preload-helper-Ct5FWWRu.js";import"./createLucideIcon-DKFlsGA7.js";const he=["onMousedown"],_=240,K={__name:"FusionTimePicker",props:{modelValue:String,displayFormat:{type:String,default:"12",validator:a=>["12","24"].includes(a)},interval:{type:Number,default:30},error:String,label:String,required:Boolean,disabled:Boolean,size:String,formWrapperWidth:String},emits:["update:modelValue","change"],setup(a,{emit:o}){const d=a,g=o,i=s(""),c=s(d.modelValue||""),l=s(""),m=s(!1),V=s(!1),f=s(null),q=s(null),y=s({left:0,top:0,bottom:0,width:0}),I=s(null),p=t=>{if(!t||!/^\d{2}:\d{2}$/.test(t))return t||"";const[n,e]=t.split(":").map(Number);if(d.displayFormat==="24")return`${String(n).padStart(2,"0")}:${String(e).padStart(2,"0")}`;const r=n<12?"am":"pm",v=n%12||12;return`${String(v).padStart(2,"0")}:${String(e).padStart(2,"0")} ${r}`},j=t=>{if(!t)return null;const n=t.trim().toLowerCase();if(d.displayFormat==="24"){const H=n.match(/^(\d{1,2}):(\d{2})$/);if(!H)return null;const N=parseInt(H[1],10),A=parseInt(H[2],10);return N>23||A>59?null:`${String(N).padStart(2,"0")}:${String(A).padStart(2,"0")}`}const e=n.match(/^(\d{1,2})(?::(\d{2}))?\s*(am|pm)$/);if(!e)return null;let r=parseInt(e[1],10);const v=parseInt(e[2]||"00",10),R=e[3];return r<1||r>12||v>59?null:(R==="pm"&&r!==12&&(r+=12),R==="am"&&r===12&&(r=0),`${String(r).padStart(2,"0")}:${String(v).padStart(2,"0")}`)};i.value=p(d.modelValue),E(()=>d.modelValue,t=>{c.value=t||"",document.activeElement!==f.value?.querySelector("input")&&(i.value=p(t))}),E(()=>d.displayFormat,()=>{i.value=p(c.value)});const D=M(()=>{d.displayFormat;const t=[];for(let n=0;n<24;n++)for(let e=0;e<60;e+=d.interval){const r=`${String(n).padStart(2,"0")}:${String(e).padStart(2,"0")}`;t.push({label:p(r),value:r})}return t}),C=M(()=>l.value?D.value.filter(t=>t.label.toLowerCase().includes(l.value.toLowerCase())):D.value),Q=M(()=>C.value.length?C.value:D.value),G=t=>{const n=t.target;let e=n.value;if(d.displayFormat==="24"){if(e=e.replace(/[^0-9:]/g,"").slice(0,5),/^\d{2}$/.test(e)){e+=":",i.value=e,l.value=e,F(()=>n.setSelectionRange(3,3));return}/^\d{2}:\d/.test(e)&&parseInt(e.slice(0,2),10)>23&&(e="23:"+e.slice(3)),/^\d{2}:\d{2}$/.test(e)&&parseInt(e.slice(3),10)>59&&(e=e.slice(0,3)+"59")}else{if(e=e.replace(/[^0-9: apm]/g,""),e=e.replace(/([ap])m*([ap])/g,"$1").replace(/(am|pm).+/,"$1").slice(0,8),/^\d{2}$/.test(e)){e+=":",i.value=e,l.value=e,F(()=>n.setSelectionRange(3,3));return}if(/^\d{2}/.test(e)){const r=parseInt(e.slice(0,2),10);r>12&&(e="12"+e.slice(2)),r===0&&(e="01"+e.slice(2))}/^\d{2}:\d{2}/.test(e)&&parseInt(e.slice(3,5),10)>59&&(e=e.slice(0,3)+"59"+e.slice(5))}i.value=e,l.value=e},B=()=>{const t=j(i.value);if(!t){i.value=p(c.value),l.value="",m.value=!1;return}c.value=t,i.value=p(t),l.value="",g("update:modelValue",t),g("change",t),m.value=!1},b=()=>{if(!f.value)return;const t=f.value.getBoundingClientRect();y.value={left:t.left,top:t.top,bottom:t.bottom,width:t.width};const n=window.innerHeight-t.bottom;V.value=n<_&&t.top>n},J=(t,n)=>{n===0&&t&&(I.value=t)},X=t=>{c.value=t,i.value=p(t),l.value="",g("update:modelValue",t),g("change",t),m.value=!1},Y=()=>{i.value=p(c.value),l.value="",m.value=!0,b()},Z=()=>setTimeout(()=>{B(),m.value=!1},120),L=t=>{f.value&&!f.value.contains(t.target)&&q.value&&!q.value.contains(t.target)&&(m.value=!1)};E(l,async()=>{await F(),I.value&&I.value.scrollIntoView({behavior:"smooth",block:"nearest"})});const O=()=>b();te(()=>{window.addEventListener("resize",O),document.addEventListener("mousedown",L),F(b)}),ae(()=>{window.removeEventListener("resize",O),document.removeEventListener("mousedown",L)});const ee=()=>{d.disabled||(m.value?m.value=!1:(i.value=p(c.value),l.value="",m.value=!0,b()))};return(t,n)=>(h(),x("div",{class:"fu-time-picker",ref_key:"inputRef",ref:f},[U(ve,{type:"text",modelValue:i.value,"onUpdate:modelValue":n[0]||(n[0]=e=>i.value=e),placeholder:a.displayFormat==="12"?"hh:mm am/pm":"HH:mm",onFocus:Y,onInput:G,onKeydown:re($(B,["prevent"]),["enter"]),onBlur:Z,label:a.label,error:a.error,required:a.required,disabled:a.disabled,size:a.size,formWrapperWidth:a.formWrapperWidth},{right:ne(()=>[U(ue(ye),{style:{cursor:"pointer"},onMousedown:$(ee,["prevent"])})]),_:1},8,["modelValue","placeholder","onKeydown","label","error","required","disabled","size","formWrapperWidth"]),(h(),se(pe,{to:"body"},[m.value?(h(),x("div",{key:0,ref_key:"dropdownRef",ref:q,class:ie(["fu-time-dropdown customScrollBar",{"open-up":V.value}]),style:oe({left:y.value.left+"px",width:y.value.width+"px",top:V.value?y.value.top-_+"px":y.value.bottom+"px"})},[(h(!0),x(le,null,de(Q.value,(e,r)=>(h(),x("div",{key:e.value,class:"fu-time-option",ref_for:!0,ref:v=>J(v,r),onMousedown:$(v=>X(e.value),["prevent"])},ce(e.label),41,he))),128))],6)):me("",!0)]))],512))}},u=fe(K,[["__scopeId","data-v-72c32689"]]);K.__docgenInfo={exportName:"default",displayName:"FusionTimePicker",description:"",tags:{},props:[{name:"modelValue",type:{name:"string"}},{name:"displayFormat",type:{name:"string"},defaultValue:{func:!1,value:'"12"'},values:["12","24"]},{name:"interval",type:{name:"number"},defaultValue:{func:!1,value:"30"}},{name:"error",type:{name:"string"}},{name:"label",type:{name:"string"}},{name:"required",type:{name:"boolean"}},{name:"disabled",type:{name:"boolean"}},{name:"size",type:{name:"string"}},{name:"formWrapperWidth",type:{name:"string"}}],events:[{name:"update:modelValue"},{name:"change"}],sourceFiles:["/Users/xavier/Documents/Websites/Skkido/Fusion-binary-ui/src/components/datePicker/time/FusionTimePicker.vue"]};const ke={title:"Components/Date-and-Time/TimePicker",component:u,tags:["autodocs"],argTypes:{displayFormat:{control:{type:"select"},options:["12","24"],description:"Controls how the time is displayed in the input. The model value (v-model) is always emitted as 24h HH:mm regardless of this setting.",table:{category:"Props",defaultValue:{summary:"12"},type:{summary:'"12" | "24"'}}},interval:{control:{type:"number"},description:"Time interval in minutes for the dropdown slot options.",table:{category:"Props",defaultValue:{summary:30},type:{summary:"number"}}},formWrapperWidth:{control:{type:"text"},description:"Width of the input wrapper (e.g. '200px').",table:{category:"Props",defaultValue:{summary:"undefined"},type:{summary:"string | undefined"}}},size:{control:{type:"select"},options:["sm","md","lg"],description:"Size of the input.",table:{category:"Props",defaultValue:{summary:"md"},type:{summary:'"sm" | "md" | "lg"'}}},error:{control:{type:"text"},description:"Error message shown beneath the input.",table:{category:"Props",defaultValue:{summary:"null"},type:{summary:"string | null"}}},label:{control:{type:"text"},description:"Label rendered above the input.",table:{category:"Props",defaultValue:{summary:"undefined"},type:{summary:"string"}}},required:{control:{type:"boolean"},description:"Marks the field as required.",table:{category:"Props",defaultValue:{summary:!1},type:{summary:"boolean"}}},disabled:{control:{type:"boolean"},description:"Disables the input and dropdown.",table:{category:"Props",defaultValue:{summary:!1},type:{summary:"boolean"}}},onUpdateModelValue:{action:"update:modelValue",description:"Emitted whenever the committed time changes. Always a 24h HH:mm string.",table:{category:"Events",type:{summary:"(value: string) => void"}}},onChange:{action:"change",description:"Emitted alongside update:modelValue. Always a 24h HH:mm string.",table:{category:"Events",type:{summary:"(value: string) => void"}}}},parameters:{docs:{description:{component:`
A time picker supporting manual keyboard input or dropdown slot selection.

---

### Model value contract

The \`v-model\` value is **always a 24h \`HH:mm\` string** (e.g. \`"14:30"\`), regardless of the \`displayFormat\` prop.
This makes the value safe to use directly in APIs, \`<input type="time">\`, or date libraries without any conversion on the consuming side.

---

### Display format

The \`displayFormat\` prop controls only what the user sees inside the input:

| \`displayFormat\` | Input shows | Model emits |
|---|---|---|
| \`"12"\` (default) | \`05:00 pm\` | \`"17:00"\` |
| \`"24"\` | \`17:00\` | \`"17:00"\` |

Switching format at runtime re-renders the displayed value automatically without changing the emitted value.

---

### Input validation

- Only valid characters are accepted while typing (digits, colon, and \`am\`/\`pm\` where applicable).
- Hours and minutes are clamped in real time — it is not possible to type \`26:99\` or \`10:20pppppp\`.
- A colon is auto-inserted after two hour digits.
- On blur or Enter, the typed value is parsed and committed. If the input cannot be parsed it reverts to the last valid value.

---

### Example usage

\`\`\`vue
<script setup>
import { ref } from "vue";
import FusionTimePicker from "@/components/FusionTimePicker.vue";

const time = ref("17:00");
<\/script>

<template>
  <!-- 12h display, model always returns "HH:mm" -->
  <FusionTimePicker v-model="time" display-format="12" label="Start time" />

  <!-- 24h display -->
  <FusionTimePicker v-model="time" display-format="24" label="Start time (24h)" />

  <!-- 15-minute slots -->
  <FusionTimePicker v-model="time" :interval="15" label="Meeting time" />
</template>
\`\`\`
        `}}}},w={name:"Default (12h display)",render:a=>({components:{FusionTimePicker:u},setup(){const o=s("");return{args:a,model:o}},template:`
      <div style="display: flex; flex-direction: column; gap: 8px;">
        <FusionTimePicker v-bind="args" v-model="model" />
        <span style="font-size: 12px; color: #888;">model value: {{ model || '(empty)' }}</span>
      </div>
    `}),args:{displayFormat:"12",interval:30,size:"sm",label:"Time",formWrapperWidth:void 0,error:null,required:!1,disabled:!1}},T={name:"24h Display Format",render:a=>({components:{FusionTimePicker:u},setup(){const o=s("17:00");return{args:a,model:o}},template:`
      <div style="display: flex; flex-direction: column; gap: 8px;">
        <FusionTimePicker v-bind="args" v-model="model" />
        <span style="font-size: 12px; color: #888;">model value: {{ model }}</span>
      </div>
    `}),args:{displayFormat:"24",interval:30,size:"sm",label:"Start time",formWrapperWidth:"180px",error:null,required:!1,disabled:!1},parameters:{docs:{description:{story:'The model is pre-seeded with `"17:00"`. With `displayFormat="24"` the input shows `17:00`. Focus the field and blur it — it stays as `17:00` with no reformatting side-effects.'}}}},k={name:"12h Display Format (pre-seeded)",render:a=>({components:{FusionTimePicker:u},setup(){const o=s("17:00");return{args:a,model:o}},template:`
      <div style="display: flex; flex-direction: column; gap: 8px;">
        <FusionTimePicker v-bind="args" v-model="model" />
        <span style="font-size: 12px; color: #888;">model value: {{ model }}</span>
      </div>
    `}),args:{displayFormat:"12",interval:30,size:"sm",label:"Start time",formWrapperWidth:"180px",error:null,required:!1,disabled:!1},parameters:{docs:{description:{story:'Model is pre-seeded with `"17:00"`. With `displayFormat="12"` the input displays `05:00 pm`. The model value remains `"17:00"` throughout — no conversion needed by the parent.'}}}},S={name:"15-Minute Interval",render:a=>({components:{FusionTimePicker:u},setup(){const o=s("09:00");return{args:a,model:o}},template:`
      <div style="display: flex; flex-direction: column; gap: 8px;">
        <FusionTimePicker v-bind="args" v-model="model" />
        <span style="font-size: 12px; color: #888;">model value: {{ model }}</span>
      </div>
    `}),args:{displayFormat:"12",interval:15,size:"sm",label:"Meeting time",formWrapperWidth:"200px",error:null,required:!1,disabled:!1},parameters:{docs:{description:{story:"Dropdown slots are generated every 15 minutes instead of the default 30."}}}},P={name:"Error State",render:a=>({components:{FusionTimePicker:u},setup(){const o=s("");return{args:a,model:o}},template:'<FusionTimePicker v-bind="args" v-model="model" />'}),args:{displayFormat:"12",interval:30,size:"sm",label:"End time",formWrapperWidth:"200px",error:"Please select a valid time",required:!0,disabled:!1}},W={name:"Disabled",render:a=>({components:{FusionTimePicker:u},setup(){const o=s("10:30");return{args:a,model:o}},template:'<FusionTimePicker v-bind="args" v-model="model" />'}),args:{displayFormat:"12",interval:30,size:"sm",label:"Time (disabled)",formWrapperWidth:"200px",error:null,required:!1,disabled:!0}},z={name:"Format Comparison (same model)",render:a=>({components:{FusionTimePicker:u},setup(){const o=s("14:30");return{args:a,model:o}},template:`
      <div style="display: flex; gap: 24px; align-items: flex-end; flex-wrap: wrap;">
        <div>
          <FusionTimePicker v-bind="args" display-format="12" label="12h display" v-model="model" />
        </div>
        <div>
          <FusionTimePicker v-bind="args" display-format="24" label="24h display" v-model="model" />
        </div>
        <span style="font-size: 12px; color: #888; align-self: center;">
          shared model value: {{ model }}
        </span>
      </div>
    `}),args:{interval:30,size:"sm",formWrapperWidth:"180px",error:null,required:!1,disabled:!1},parameters:{docs:{description:{story:"Both pickers share the same `ref`. Selecting a slot in either one updates the shared model and the other picker's display re-syncs automatically. The emitted value is always `HH:mm`."}}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  name: "Default (12h display)",
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
    template: \`
      <div style="display: flex; flex-direction: column; gap: 8px;">
        <FusionTimePicker v-bind="args" v-model="model" />
        <span style="font-size: 12px; color: #888;">model value: {{ model || '(empty)' }}</span>
      </div>
    \`
  }),
  args: {
    displayFormat: "12",
    interval: 30,
    size: "sm",
    label: "Time",
    formWrapperWidth: undefined,
    error: null,
    required: false,
    disabled: false
  }
}`,...w.parameters?.docs?.source}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  name: "24h Display Format",
  render: args => ({
    components: {
      FusionTimePicker
    },
    setup() {
      const model = ref("17:00");
      return {
        args,
        model
      };
    },
    template: \`
      <div style="display: flex; flex-direction: column; gap: 8px;">
        <FusionTimePicker v-bind="args" v-model="model" />
        <span style="font-size: 12px; color: #888;">model value: {{ model }}</span>
      </div>
    \`
  }),
  args: {
    displayFormat: "24",
    interval: 30,
    size: "sm",
    label: "Start time",
    formWrapperWidth: "180px",
    error: null,
    required: false,
    disabled: false
  },
  parameters: {
    docs: {
      description: {
        story: "The model is pre-seeded with \`\\"17:00\\"\`. With \`displayFormat=\\"24\\"\` the input shows \`17:00\`. Focus the field and blur it — it stays as \`17:00\` with no reformatting side-effects."
      }
    }
  }
}`,...T.parameters?.docs?.source}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  name: "12h Display Format (pre-seeded)",
  render: args => ({
    components: {
      FusionTimePicker
    },
    setup() {
      const model = ref("17:00");
      return {
        args,
        model
      };
    },
    template: \`
      <div style="display: flex; flex-direction: column; gap: 8px;">
        <FusionTimePicker v-bind="args" v-model="model" />
        <span style="font-size: 12px; color: #888;">model value: {{ model }}</span>
      </div>
    \`
  }),
  args: {
    displayFormat: "12",
    interval: 30,
    size: "sm",
    label: "Start time",
    formWrapperWidth: "180px",
    error: null,
    required: false,
    disabled: false
  },
  parameters: {
    docs: {
      description: {
        story: "Model is pre-seeded with \`\\"17:00\\"\`. With \`displayFormat=\\"12\\"\` the input displays \`05:00 pm\`. The model value remains \`\\"17:00\\"\` throughout — no conversion needed by the parent."
      }
    }
  }
}`,...k.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  name: "15-Minute Interval",
  render: args => ({
    components: {
      FusionTimePicker
    },
    setup() {
      const model = ref("09:00");
      return {
        args,
        model
      };
    },
    template: \`
      <div style="display: flex; flex-direction: column; gap: 8px;">
        <FusionTimePicker v-bind="args" v-model="model" />
        <span style="font-size: 12px; color: #888;">model value: {{ model }}</span>
      </div>
    \`
  }),
  args: {
    displayFormat: "12",
    interval: 15,
    size: "sm",
    label: "Meeting time",
    formWrapperWidth: "200px",
    error: null,
    required: false,
    disabled: false
  },
  parameters: {
    docs: {
      description: {
        story: "Dropdown slots are generated every 15 minutes instead of the default 30."
      }
    }
  }
}`,...S.parameters?.docs?.source}}};P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  name: "Error State",
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
    displayFormat: "12",
    interval: 30,
    size: "sm",
    label: "End time",
    formWrapperWidth: "200px",
    error: "Please select a valid time",
    required: true,
    disabled: false
  }
}`,...P.parameters?.docs?.source}}};W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
  name: "Disabled",
  render: args => ({
    components: {
      FusionTimePicker
    },
    setup() {
      const model = ref("10:30");
      return {
        args,
        model
      };
    },
    template: \`<FusionTimePicker v-bind="args" v-model="model" />\`
  }),
  args: {
    displayFormat: "12",
    interval: 30,
    size: "sm",
    label: "Time (disabled)",
    formWrapperWidth: "200px",
    error: null,
    required: false,
    disabled: true
  }
}`,...W.parameters?.docs?.source}}};z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  name: "Format Comparison (same model)",
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
    template: \`
      <div style="display: flex; gap: 24px; align-items: flex-end; flex-wrap: wrap;">
        <div>
          <FusionTimePicker v-bind="args" display-format="12" label="12h display" v-model="model" />
        </div>
        <div>
          <FusionTimePicker v-bind="args" display-format="24" label="24h display" v-model="model" />
        </div>
        <span style="font-size: 12px; color: #888; align-self: center;">
          shared model value: {{ model }}
        </span>
      </div>
    \`
  }),
  args: {
    interval: 30,
    size: "sm",
    formWrapperWidth: "180px",
    error: null,
    required: false,
    disabled: false
  },
  parameters: {
    docs: {
      description: {
        story: "Both pickers share the same \`ref\`. Selecting a slot in either one updates the shared model and the other picker's display re-syncs automatically. The emitted value is always \`HH:mm\`."
      }
    }
  }
}`,...z.parameters?.docs?.source}}};const Se=["Default","Format24h","Format12hPreseeded","FifteenMinuteInterval","WithError","Disabled","FormatComparison"];export{w as Default,W as Disabled,S as FifteenMinuteInterval,k as Format12hPreseeded,T as Format24h,z as FormatComparison,P as WithError,Se as __namedExportsOrder,ke as default};
