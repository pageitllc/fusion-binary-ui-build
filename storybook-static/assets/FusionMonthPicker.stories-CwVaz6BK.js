import{r as s,c as y,o as se,a as l,b as c,d as ie,w,e as q,f as ue,g as f,u as S,F as V,h as $,n as U,T as de,i as ce,j as r,k as C,t as M,l as O}from"./iframe-4anGkjM3.js";import{F as A}from"./FusionButton-DDWoq9Vu.js";import{F as I}from"./FusionActionButton-DOSunp5G.js";import{F as me}from"./FusionTextInput-B7zbcKHf.js";import{d as m}from"./dayjs.min-C8Kx736W.js";import{_ as pe}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{C as J}from"./chevron-down-pi8uy0el.js";import{C as fe,a as ve}from"./chevron-right-BlwsVKhl.js";import"./preload-helper-Ct5FWWRu.js";import"./_commonjsHelpers-CqkleIqs.js";import"./createLucideIcon-MAVkZFkt.js";const he={class:"calendar-header"},ge={class:"flex flex--gap-sm"},ye={key:0,class:"calendar-months"},Me=["onClick"],be={key:1,class:"calendar-years"},ke=["onClick"],Ye={class:"flex flex--space flex--gap-md px-2 pb-2"},F=12,X={__name:"FusionMonthPicker",props:{modelValue:String,min:String,max:String,formWrapperWidth:String,size:{type:String,default:"md",validator:t=>["sm","md","lg"].includes(t)},error:{type:[String,null],default:null},required:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},label:String},emits:["update:modelValue"],setup(t,{emit:v}){const i=t,_=v,u=s(!1),b=s(null),k=s(null),d=s("months"),a=s(m().year()),j=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],Y=y(()=>a.value-a.value%F),L=y(()=>Y.value+F-1),H=y(()=>{const e=Y.value;return Array.from({length:F},(n,o)=>e+o)}),h=y(()=>{if(!i.modelValue)return null;const e=m(i.modelValue,"YYYY-MM",!0);return e.isValid()?e:null});function G(e){return h.value?h.value.month()===e&&h.value.year()===a.value:!1}function N(e){const n=m(`${a.value}-${(e+1).toString().padStart(2,"0")}`,"YYYY-MM");return!!(i.min&&n.isBefore(m(i.min,"YYYY-MM"),"month")||i.max&&n.isAfter(m(i.max,"YYYY-MM"),"month"))}function K(e){a.value=e,d.value="months"}function Q(e){if(N(e))return;const n=m(`${a.value}-${(e+1).toString().padStart(2,"0")}`,"YYYY-MM");_("update:modelValue",n.format("MMM, YYYY")),u.value=!1}function Z(){const e=m();a.value=e.year(),_("update:modelValue",e.format("MMM, YYYY")),u.value=!1}function ee(){i.disabled||(u.value=!u.value,u.value?(h.value&&(a.value=h.value.year()),ce(()=>{g(),window.addEventListener("resize",g),window.addEventListener("click",x)})):(window.removeEventListener("resize",g),window.removeEventListener("click",x)))}function D(){u.value=!1,window.removeEventListener("resize",g),window.removeEventListener("click",x)}function x(e){!b.value?.contains(e.target)&&!k.value?.contains(e.target)&&D()}const T=s({position:"absolute",top:"0px",left:"0px",zIndex:9999});function g(){if(!b.value||!k.value)return;const e=b.value.getBoundingClientRect(),n=k.value.getBoundingClientRect(),o=window.innerHeight-e.bottom,p=e.top,R=window.scrollY||window.pageYOffset,le=window.scrollX||window.pageXOffset;let B;o<n.height&&p>n.height?B=e.top+R-n.height-6:B=e.bottom+R+6,T.value={position:"absolute",top:`${B}px`,left:`${e.left+le}px`,zIndex:9999}}function ne(){d.value=d.value==="months"?"years":"months"}function te(){d.value==="months"?a.value--:a.value=Math.max(Y.value-F,0)}function ae(){d.value==="months"?a.value++:a.value=L.value+1}function oe(){_("update:modelValue",null),u.value=!1}const re=y(()=>i.modelValue||"");return se(()=>{window.removeEventListener("resize",g),window.removeEventListener("click",x)}),(e,n)=>(r(),l("div",{class:"fu-month-picker",ref_key:"pickerRef",ref:b,style:U({width:t.formWrapperWidth})},[c(me,{type:"text",modelValue:re.value,placeholder:"Select month",readonly:"",onClick:[ee,q(D,["self"])],formWrapperWidth:t.formWrapperWidth,size:t.size,error:t.error,required:t.required,label:t.label,disabled:t.disabled},{right:w(()=>[c(S(J))]),_:1},8,["modelValue","formWrapperWidth","size","error","required","label","disabled"]),(r(),ie(de,{to:"body"},[u.value?(r(),l("div",{key:0,class:"fu-month-picker__calendar-overlay",onClick:q(D,["self"])},[f("div",{class:"fu-month-picker__calendar",style:U(T.value),ref_key:"calendarRef",ref:k,onClick:n[0]||(n[0]=q(()=>{},["stop"]))},[f("div",he,[c(A,{variant:"ghost",size:"sm",onClick:ne,icon:S(J)},{default:w(()=>[d.value==="months"?(r(),l(V,{key:0},[C(M(a.value),1)],64)):(r(),l(V,{key:1},[C(M(Y.value)+" - "+M(L.value),1)],64))]),_:1},8,["icon"]),f("div",ge,[c(I,{icon:S(fe),size:"sm",onClick:te},null,8,["icon"]),c(I,{icon:S(ve),size:"sm",onClick:ae},null,8,["icon"])])]),d.value==="months"?(r(),l("div",ye,[(r(),l(V,null,$(j,(o,p)=>f("div",{key:o,class:O(["calendar-month",{"calendar-month--selected":G(p),"calendar-month--disabled":N(p)}]),onClick:R=>Q(p)},M(o),11,Me)),64))])):(r(),l("div",be,[(r(!0),l(V,null,$(H.value,o=>(r(),l("div",{key:o,class:O(["calendar-year",{"calendar-year--selected":o===a.value}]),onClick:p=>K(o)},M(o),11,ke))),128))])),n[3]||(n[3]=f("hr",null,null,-1)),f("div",Ye,[c(A,{variant:"outline",onClick:Z},{default:w(()=>[...n[1]||(n[1]=[C(" This Month ",-1)])]),_:1}),c(A,{variant:"outline",onClick:oe},{default:w(()=>[...n[2]||(n[2]=[C(" Clear ",-1)])]),_:1})])],4)])):ue("",!0)]))],4))}},E=pe(X,[["__scopeId","data-v-7377986b"]]);X.__docgenInfo={exportName:"default",displayName:"FusionMonthPicker",description:"",tags:{},props:[{name:"modelValue",type:{name:"string"}},{name:"min",type:{name:"string"}},{name:"max",type:{name:"string"}},{name:"formWrapperWidth",type:{name:"string"}},{name:"size",type:{name:"string"},defaultValue:{func:!1,value:'"md"'},values:["sm","md","lg"]},{name:"error",type:{name:"string|null"},defaultValue:{func:!1,value:"null"}},{name:"required",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"disabled",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"label",type:{name:"string"}}],events:[{name:"update:modelValue"}],sourceFiles:["/Users/xavier/Documents/Websites/Skkido/Fusion-binary-ui/src/components/datePicker/monthPicker/FusionMonthPicker.vue"]};const De={title:"Components/Date-and-Time/FusionMonthPicker",component:E,tags:["autodocs"],argTypes:{modelValue:{control:{type:"text"},description:"Selected month in 'MMM, YYYY' format or null",table:{category:"Props",defaultValue:{summary:null},type:{summary:"string | null"}}},formWrapperWidth:{control:{type:"text"},description:"Width of the input wrapper (e.g., '240px')",table:{category:"Props",defaultValue:{summary:"undefined"},type:{summary:"string | undefined"}}},size:{control:{type:"select"},options:["sm","md","lg"],description:"Size of the input",table:{category:"Props",defaultValue:{summary:"md"},type:{summary:"string"}}},error:{control:{type:"text"},description:"Error message (string) or null",table:{category:"Props",defaultValue:{summary:"null"},type:{summary:"string | null"}}},required:{control:{type:"boolean"},description:"Whether the input is required",table:{category:"Props",defaultValue:{summary:!1},type:{summary:"boolean"}}},disabled:{control:{type:"boolean"},description:"Whether the input is disabled",table:{category:"Props",defaultValue:{summary:!1},type:{summary:"boolean"}}},label:{control:{type:"text"},description:"Label for the input",table:{category:"Props",defaultValue:{summary:"undefined"},type:{summary:"string | undefined"}}},"update:modelValue":{action:"update:modelValue",description:"Emitted when the selected month changes",table:{category:"Events",type:{summary:"(value: string | null) => void"}}}},parameters:{docs:{description:{component:`
A simple and accessible Month Picker component for selecting month and year only.

---

### Features

- Select only month and year (no day or time)  
- Emits value in \`MMM, YYYY\` format or \`null\` when cleared  
- Supports disabled, required, error states, and size variants  
- Label support  
- Responsive calendar popup  

---

### Example Usage

\`\`\`vue
<script setup>
import { ref } from "vue";
import FusionMonthPicker from "@/components/FusionMonthPicker.vue";

const selectedMonth = ref("Aug, 2025");
<\/script>

<template>
  <FusionMonthPicker
    v-model="selectedMonth"
    label="Choose Month"
    size="md"
    formWrapperWidth="240px"
  />
  <p>Selected Month: {{ selectedMonth }}</p>
</template>
\`\`\`
        `}}}},P={name:"Default",render:t=>({components:{FusionMonthPicker:E},setup(){const v=s("Aug, 2025");return{args:t,model:v}},template:'<FusionMonthPicker v-bind="args" v-model="model" />'}),args:{formWrapperWidth:void 0,size:"md",error:null,required:!1,disabled:!1,label:"Select Month"}},W={name:"Disabled",render:t=>({components:{FusionMonthPicker:E},setup(){const v=s(null);return{args:t,model:v}},template:'<FusionMonthPicker v-bind="args" v-model="model" />'}),args:{disabled:!0,size:"md",error:null,required:!1,formWrapperWidth:void 0,label:"Select Month"}},z={name:"Example Usage",render:()=>({components:{FusionMonthPicker:E},setup(){return{selectedMonth:s(null)}},template:`
      <div>
        <FusionMonthPicker v-model="selectedMonth" label="Choose Month" size="md" />
        <p>Selected Month: {{ selectedMonth || 'None' }}</p>
      </div>
    `})};P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  name: "Default",
  render: args => ({
    components: {
      FusionMonthPicker
    },
    setup() {
      const model = ref("Aug, 2025");
      return {
        args,
        model
      };
    },
    template: \`<FusionMonthPicker v-bind="args" v-model="model" />\`
  }),
  args: {
    formWrapperWidth: undefined,
    size: "md",
    error: null,
    required: false,
    disabled: false,
    label: "Select Month"
  }
}`,...P.parameters?.docs?.source}}};W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
  name: "Disabled",
  render: args => ({
    components: {
      FusionMonthPicker
    },
    setup() {
      const model = ref(null);
      return {
        args,
        model
      };
    },
    template: \`<FusionMonthPicker v-bind="args" v-model="model" />\`
  }),
  args: {
    disabled: true,
    size: "md",
    error: null,
    required: false,
    formWrapperWidth: undefined,
    label: "Select Month"
  }
}`,...W.parameters?.docs?.source}}};z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  name: "Example Usage",
  render: () => ({
    components: {
      FusionMonthPicker
    },
    setup() {
      const selectedMonth = ref<string | null>(null);
      return {
        selectedMonth
      };
    },
    template: \`
      <div>
        <FusionMonthPicker v-model="selectedMonth" label="Choose Month" size="md" />
        <p>Selected Month: {{ selectedMonth || 'None' }}</p>
      </div>
    \`
  })
}`,...z.parameters?.docs?.source}}};const Re=["Default","Disabled","ExampleUsage"];export{P as Default,W as Disabled,z as ExampleUsage,Re as __namedExportsOrder,De as default};
