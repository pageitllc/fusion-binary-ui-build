import{d as D,r as t,w as y,i as F,j as V,c as a,b as f,k as C,a as _,h as w,F as O,s as S,q as P,o as n,C as E,e as N,t as R}from"./iframe-o7SUGoga.js";import{_ as q}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./preload-helper-Ct5FWWRu.js";const B={class:"fu-dropdown-inline__wrapper"},j=["value","placeholder"],L=["onMousedown"],g=D({__name:"FusionDropdownInline",props:{modelValue:{},options:{},placeholder:{},isOpen:{type:Boolean}},emits:["update:modelValue","open","close"],setup(u,{emit:I}){const m=u,r=I,i=t(null),b=t(null),l=t(m.modelValue||null),o=t(!1),v=t({});y(()=>m.modelValue,e=>l.value=e),y(()=>m.isOpen,e=>{o.value=!!e,e&&d()});function k(){o.value||r("open"),o.value=!0,d()}function x(e){l.value=e,r("update:modelValue",e),r("close"),o.value=!1,b.value?.blur()}function h(e){i.value&&!i.value.contains(e.target)&&(o.value&&r("close"),o.value=!1)}function d(){const e=i.value;if(!e)return;const c=e.getBoundingClientRect();v.value={position:"absolute",top:`${c.bottom+4}px`,left:`${c.left}px`,width:`${c.width}px`,zIndex:"9999"}}return F(()=>{window.addEventListener("click",h),window.addEventListener("resize",d)}),V(()=>{window.removeEventListener("click",h),window.removeEventListener("resize",d)}),(e,c)=>(n(),a("div",{class:"fu-dropdown-inline",ref_key:"inlineRef",ref:i},[f("div",B,[l.value?(n(),a("span",{key:0,class:"fu-dropdown-inline__dot",style:w({backgroundColor:l.value.color})},null,4)):_("",!0),f("input",{ref_key:"inputRef",ref:b,type:"text",class:"fu-dropdown-inline__input",value:l.value?.label||"",placeholder:u.placeholder,readonly:"",onFocus:k},null,40,j)]),(n(),C(P,{to:"body"},[o.value?(n(),a("ul",{key:0,class:"fu-dropdown-inline__menu",style:w(v.value)},[(n(!0),a(O,null,S(u.options,p=>(n(),a("li",{key:p.label,class:"fu-dropdown-inline__item",onMousedown:E(z=>x(p),["prevent"])},[f("span",{class:"fu-dropdown-inline__dot",style:w({backgroundColor:p.color})},null,4),N(" "+R(p.label),1)],40,L))),128))],4)):_("",!0)]))],512))}}),T=q(g,[["__scopeId","data-v-2181a04e"]]);g.__docgenInfo={exportName:"default",displayName:"FusionDropdownInline",description:"",tags:{},props:[{name:"modelValue",required:!0,type:{name:"union",elements:[{name:"Option"},{name:"null"}]}},{name:"options",required:!0,type:{name:"Array",elements:[{name:"Option"}]}},{name:"placeholder",required:!1,type:{name:"string"}},{name:"isOpen",required:!1,type:{name:"boolean"}}],events:[{name:"update:modelValue",type:{names:["Option"]}},{name:"open"},{name:"close"}],sourceFiles:["/Users/tommys/Documents/Skkido/Fusion-binary-ui/src/components/dropdownInline/FusionDropdownInline.vue"]};const A={title:"components/FusionDropdownInline",component:T,tags:["autodocs"],argTypes:{modelValue:{control:"object",description:"Currently selected option object `{ label, color }`."},options:{control:"object",description:"Array of selectable options. Each option requires a `label` and a `color`."},placeholder:{control:"text",description:"Optional placeholder shown when no option is selected."}},parameters:{actions:{handles:["update:modelValue"]},docs:{description:{component:`
The **FusionDropdownInline** component provides an inline-editable dropdown input.  
It looks like a plain text field until focused, then opens a dropdown for quick selection.  
When an option is selected, it closes automatically and displays the chosen label with its color indicator.

Use this for inline editing inside tables, contact lists, or project dashboards.

---

### Key Features
- Inline appearance — no button or chevron
- Color indicator shown next to the label
- Closes automatically when selection is made
- Teleported dropdown ensures correct layering (above modals or tables)

---

### Example Usage
\`\`\`vue
<script setup lang="ts">
import { ref } from "vue";
import FusionDropdownInline from "@/components/dropdown-inline/FusionDropdownInline.vue";

const statusOptions = [
  { label: "Not Started", color: "#999999" },
  { label: "Planning", color: "#d97706" },
  { label: "In Progress", color: "#16a34a" },
  { label: "In Review", color: "#dc2626" },
  { label: "Completed", color: "#2563eb" },
];

const selectedStatus = ref(statusOptions[2]);
<\/script>

<template>
  <FusionDropdownInline
    v-model="selectedStatus"
    :options="statusOptions"
    placeholder="Select status"
  />
</template>
\`\`\`
        `}}}},s={args:{modelValue:{label:"In Progress",color:"#16a34a"},options:[{label:"Not Started",color:"#999999"},{label:"Planning",color:"#d97706"},{label:"In Progress",color:"#16a34a"},{label:"In Review",color:"#dc2626"},{label:"Completed",color:"#2563eb"}],placeholder:"Select status"}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    modelValue: {
      label: "In Progress",
      color: "#16a34a"
    },
    options: [{
      label: "Not Started",
      color: "#999999"
    }, {
      label: "Planning",
      color: "#d97706"
    }, {
      label: "In Progress",
      color: "#16a34a"
    }, {
      label: "In Review",
      color: "#dc2626"
    }, {
      label: "Completed",
      color: "#2563eb"
    }],
    placeholder: "Select status"
  }
}`,...s.parameters?.docs?.source},description:{story:"Default example showing inline dropdown behavior",...s.parameters?.docs?.description}}};const K=["Default"];export{s as Default,K as __namedExportsOrder,A as default};
