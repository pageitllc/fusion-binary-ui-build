import{d as R,r as a,s as _,x as C,k as E,b as r,g as v,n as g,i as V,f as q,F as B,e as P,T as U,j as N,o as l,m as T,q as j,t as z}from"./iframe-D3vfv6YP.js";import{_ as L}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./preload-helper-Ct5FWWRu.js";const M={class:"fu-dropdown-inline__wrapper"},W=["value","placeholder","disabled"],$=["onMousedown"],k=R({__name:"FusionDropdownInline",props:{modelValue:{},options:{},placeholder:{},isOpen:{type:Boolean},disabled:{type:Boolean},readonly:{type:Boolean}},emits:["update:modelValue","open","close"],setup(t,{emit:O}){const o=t,b=O,y=a(null),S=a(null),s=a(o.modelValue||null),n=a(!1),I=a({});_(()=>o.modelValue,e=>s.value=e),_(()=>o.isOpen,e=>{o.disabled||o.readonly||(n.value=!!e,e&&h())});function x(){o.disabled||o.readonly||(n.value||b("open"),n.value=!0,h())}function F(e){s.value=e,b("update:modelValue",e),b("close"),n.value=!1,S.value?.blur()}function D(e){y.value&&!y.value.contains(e.target)&&(n.value&&b("close"),n.value=!1)}function h(){const e=y.value;if(!e)return;const f=e.getBoundingClientRect();I.value={position:"absolute",top:`${f.bottom+4}px`,left:`${f.left}px`,width:`${f.width}px`,zIndex:"9999"}}return C(()=>{window.addEventListener("click",D),window.addEventListener("resize",h)}),E(()=>{window.removeEventListener("click",D),window.removeEventListener("resize",h)}),(e,f)=>(l(),r("div",{class:N(["fu-dropdown-inline",{"fu-dropdown-inline--disabled":t.disabled,"fu-dropdown-inline--readonly":t.readonly}]),ref_key:"inlineRef",ref:y},[v("div",M,[s.value?(l(),r("span",{key:0,class:"fu-dropdown-inline__dot",style:g({backgroundColor:s.value.color})},null,4)):V("",!0),v("input",{ref_key:"inputRef",ref:S,type:"text",class:"fu-dropdown-inline__input",value:s.value?.label||"",placeholder:t.placeholder,readonly:"",disabled:t.disabled,onFocus:x},null,40,W)]),(l(),q(U,{to:"body"},[n.value?(l(),r("ul",{key:0,class:"fu-dropdown-inline__menu",style:g(I.value)},[(l(!0),r(B,null,P(t.options,w=>(l(),r("li",{key:w.label,class:"fu-dropdown-inline__item",onMousedown:T(K=>F(w),["prevent"])},[v("span",{class:"fu-dropdown-inline__dot",style:g({backgroundColor:w.color})},null,4),j(" "+z(w.label),1)],40,$))),128))],4)):V("",!0)]))],2))}}),A=L(k,[["__scopeId","data-v-cf4bb282"]]);k.__docgenInfo={exportName:"default",displayName:"FusionDropdownInline",description:"",tags:{},props:[{name:"modelValue",required:!0,type:{name:"union",elements:[{name:"Option"},{name:"null"}]}},{name:"options",required:!0,type:{name:"Array",elements:[{name:"Option"}]}},{name:"placeholder",required:!1,type:{name:"string"}},{name:"isOpen",required:!1,type:{name:"boolean"}},{name:"disabled",required:!1,type:{name:"boolean"}},{name:"readonly",required:!1,type:{name:"boolean"}}],events:[{name:"update:modelValue",type:{names:["Option"]}},{name:"open"},{name:"close"}],sourceFiles:["/Users/xavier/Documents/Websites/Skkido/Fusion-binary-ui/src/components/dropdownInline/FusionDropdownInline.vue"]};const m=[{label:"Not Started",color:"#999999"},{label:"Planning",color:"#d97706"},{label:"In Progress",color:"#16a34a"},{label:"In Review",color:"#dc2626"},{label:"Completed",color:"#2563eb"}],Q={title:"components/FusionDropdownInline",component:A,tags:["autodocs"],argTypes:{modelValue:{control:"object",description:"Currently selected option object `{ label, color }`."},options:{control:"object",description:"Array of selectable options. Each option requires a `label` and a `color`."},placeholder:{control:"text",description:"Optional placeholder shown when no option is selected."},disabled:{control:"boolean",description:"When `true`, the dropdown is non-interactive and visually dimmed."},readonly:{control:"boolean",description:"When `true`, the current value is displayed but the dropdown cannot be opened. Unlike `disabled`, the field appearance remains normal."}},parameters:{actions:{handles:["update:modelValue"]},docs:{description:{component:`
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
- Supports \`disabled\` state — visually dimmed and fully non-interactive
- Supports \`readonly\` state — displays current value only, no interaction, no dimming

---

### \`disabled\` vs \`readonly\`

| | \`disabled\` | \`readonly\` |
|---|---|---|
| Shows current value | ✅ | ✅ |
| Can open menu | ❌ | ❌ |
| Visually dimmed | ✅ | ❌ |
| \`pointer-events: none\` | ✅ | ❌ |
| Cursor | \`not-allowed\` | \`default\` |

Use \`disabled\` when the field is unavailable. Use \`readonly\` when the value should be visible but not editable.

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
  <!-- Default -->
  <FusionDropdownInline
    v-model="selectedStatus"
    :options="statusOptions"
    placeholder="Select status"
  />

  <!-- Disabled -->
  <FusionDropdownInline
    v-model="selectedStatus"
    :options="statusOptions"
    placeholder="Select status"
    disabled
  />

  <!-- Readonly -->
  <FusionDropdownInline
    v-model="selectedStatus"
    :options="statusOptions"
    placeholder="Select status"
    readonly
  />
</template>
\`\`\`
        `}}}},i={args:{modelValue:{label:"In Progress",color:"#16a34a"},options:m,placeholder:"Select status"}},d={args:{modelValue:{label:"In Progress",color:"#16a34a"},options:m,placeholder:"Select status",disabled:!0}},c={args:{modelValue:null,options:m,placeholder:"Select status",disabled:!0}},u={args:{modelValue:{label:"In Review",color:"#dc2626"},options:m,placeholder:"Select status",readonly:!0}},p={args:{modelValue:null,options:m,placeholder:"Select status",readonly:!0}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    modelValue: {
      label: "In Progress",
      color: "#16a34a"
    },
    options: statusOptions,
    placeholder: "Select status"
  }
}`,...i.parameters?.docs?.source},description:{story:"Default example showing inline dropdown behavior",...i.parameters?.docs?.description}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    modelValue: {
      label: "In Progress",
      color: "#16a34a"
    },
    options: statusOptions,
    placeholder: "Select status",
    disabled: true
  }
}`,...d.parameters?.docs?.source},description:{story:`Disabled state — the dropdown is fully non-interactive and visually dimmed.
Use when the field should be read-only in context (e.g. insufficient permissions).`,...d.parameters?.docs?.description}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    modelValue: null,
    options: statusOptions,
    placeholder: "Select status",
    disabled: true
  }
}`,...c.parameters?.docs?.source},description:{story:"Disabled with no selection — shows how the placeholder renders in a disabled state.",...c.parameters?.docs?.description}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    modelValue: {
      label: "In Review",
      color: "#dc2626"
    },
    options: statusOptions,
    placeholder: "Select status",
    readonly: true
  }
}`,...u.parameters?.docs?.source},description:{story:`Readonly state — the current value is displayed normally but the dropdown cannot be opened.
Use when the field is intentionally non-editable but should still look active
(e.g. view-only mode, locked rows, or insufficient permissions without visual penalty).`,...u.parameters?.docs?.description}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    modelValue: null,
    options: statusOptions,
    placeholder: "Select status",
    readonly: true
  }
}`,...p.parameters?.docs?.source},description:{story:"Readonly with no selection — shows how the placeholder renders in a readonly state.",...p.parameters?.docs?.description}}};const X=["Default","Disabled","DisabledEmpty","Readonly","ReadonlyEmpty"];export{i as Default,d as Disabled,c as DisabledEmpty,u as Readonly,p as ReadonlyEmpty,X as __namedExportsOrder,Q as default};
