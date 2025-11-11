import{d as P,r as p,x as I,w as R,i as A,j as L,c as a,a as m,b as y,k as T,t as _,l as O,h,y as N,p as j,T as B,q as $,o as n,F as q,s as z,z as X}from"./iframe-o7SUGoga.js";import{C as K}from"./chevron-down-BkqrEgKA.js";import{_ as U}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./preload-helper-Ct5FWWRu.js";import"./createLucideIcon-D5kBsy5g.js";const M={key:0,class:"fu-status-dropdown__label-text"},W={class:"fu-status-dropdown__label"},Y=["onClick"],G={class:"fu-status-dropdown__item-label"},x=P({__name:"FusionStatusDropdown",props:{modelValue:{},options:{},align:{default:"left"},label:{default:""}},emits:["update:modelValue"],setup(u,{emit:C}){const c=u,D=C,o=p(!1),l=p(null),v=p(null),r=p(c.modelValue||null),t=I({visibility:"hidden",opacity:"0"});R(()=>c.modelValue,e=>r.value=e);function k(){if(!l.value)return;const e=l.value.getBoundingClientRect();t.position="absolute",t.zIndex="9999",t.top=`${e.bottom+window.scrollY-2}px`,c.align==="center"?(t.left=`${e.left+window.scrollX+e.width/2}px`,t.transform="translateX(-50%)"):c.align==="right"?(t.left=`${e.right+window.scrollX}px`,t.transform="translateX(-100%)"):(t.left=`${e.left+window.scrollX}px`,t.transform="none"),t.minWidth=`${e.width}px`}const E=async()=>{o.value=!o.value,o.value&&(k(),await X(),k(),t.visibility="visible",t.opacity="1")},F=e=>{r.value=e,D("update:modelValue",e),o.value=!1},S=e=>{const b=e.target;o.value&&l.value&&v.value&&!l.value.contains(b)&&!v.value.contains(b)&&(o.value=!1)},d=()=>{o.value&&(o.value=!1)},V=e=>{e.key==="Escape"&&o.value&&(o.value=!1)};return A(()=>{document.addEventListener("click",S),window.addEventListener("resize",d),window.addEventListener("scroll",d,!0),document.addEventListener("keydown",V)}),L(()=>{document.removeEventListener("click",S),window.removeEventListener("resize",d),window.removeEventListener("scroll",d,!0),document.removeEventListener("keydown",V)}),(e,b)=>(n(),a("div",{class:"fu-status-dropdown",ref_key:"dropdown",ref:l},[u.label?(n(),a("div",M,_(u.label),1)):m("",!0),y("button",{class:"fu-status-dropdown__button",onClick:E},[r.value?.color?(n(),a("span",{key:0,class:"fu-status-dropdown__dot",style:h({backgroundColor:r.value.color})},null,4)):m("",!0),y("span",W,_(r.value?.label||"Select Status"),1),O(N(K),{class:"fu-status-dropdown__chevron"})]),(n(),T($,{to:"body"},[O(B,{name:"fade"},{default:j(()=>[o.value?(n(),a("ul",{key:0,ref_key:"menuRef",ref:v,class:"fu-status-dropdown__menu",style:h(t)},[(n(!0),a(q,null,z(u.options,i=>(n(),a("li",{key:i.label,class:"fu-status-dropdown__item",onClick:J=>F(i)},[i.color?(n(),a("span",{key:0,class:"fu-status-dropdown__dot",style:h({backgroundColor:i.color})},null,4)):m("",!0),y("span",G,_(i.label),1)],8,Y))),128))],4)):m("",!0)]),_:1})]))],512))}}),H=U(x,[["__scopeId","data-v-408ca4c3"]]);x.__docgenInfo={exportName:"default",displayName:"FusionStatusDropdown",description:"",tags:{},props:[{name:"modelValue",required:!0,type:{name:"union",elements:[{name:"Option"},{name:"null"}]}},{name:"options",required:!0,type:{name:"Array",elements:[{name:"Option"}]}},{name:"align",required:!1,type:{name:"union",elements:[{name:'"left"'},{name:'"center"'},{name:'"right"'}]},defaultValue:{func:!1,value:'"left"'}},{name:"label",required:!1,type:{name:"string"},defaultValue:{func:!1,value:'""'}}],events:[{name:"update:modelValue",type:{names:["Option"]}}],sourceFiles:["/Users/tommys/Documents/Skkido/Fusion-binary-ui/src/components/StatusDropdown/FusionStatusDropdown.vue"]};const ne={title:"Components/StatusDropdown",component:H,tags:["autodocs"],parameters:{docs:{description:{component:`
The **StatusDropdown** component provides a simple color-coded selector for representing project or task states.

It supports alignment control (\`left\`, \`center\`, \`right\`), an optional label prop, and two-way binding through \`v-model\`.

---

### Example Usage

\`\`\`vue
<template>
  <FusionStatusDropdown
    v-model="selectedStatus"
    :options="statusOptions"
    align="left"
    label="Task Status"
  />
</template>

<script setup>
import FusionStatusDropdown from "@/components/status/FusionStatusDropdown.vue";

const statusOptions = [
  { label: "Not Started", color: "#999999" },
  { label: "Planning", color: "#d97706" },
  { label: "Awaiting Kick Off", color: "#2563eb" },
  { label: "In Progress", color: "#16a34a" },
  { label: "In Review", color: "#dc2626" },
];

const selectedStatus = ref(statusOptions[0]);
<\/script>
\`\`\`
        `}}},argTypes:{modelValue:{control:"object",description:"Currently selected status (two-way bound with v-model)"},options:{control:"object",description:"Array of status options: `{ label: string, color: string }`"},align:{control:"select",options:["left","center","right"],description:"Alignment of the dropdown relative to the button"},label:{control:"text",description:"Optional text label displayed above the dropdown"}}},s=[{label:"Not Started",color:"#999999"},{label:"Planning",color:"#d97706"},{label:"Awaiting Kick Off",color:"#2563eb"},{label:"In Progress",color:"#16a34a"},{label:"In Review",color:"#dc2626"}],f={args:{modelValue:s[3],options:s,align:"left",label:"Task Status"}},g={args:{modelValue:s[1],options:s,align:"center",label:"Project Stage"}},w={args:{modelValue:s[4],options:s,align:"right",label:"Review Phase"}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    modelValue: sampleOptions[3],
    // In Progress
    options: sampleOptions,
    align: "left",
    label: "Task Status"
  }
}`,...f.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    modelValue: sampleOptions[1],
    // Planning
    options: sampleOptions,
    align: "center",
    label: "Project Stage"
  }
}`,...g.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    modelValue: sampleOptions[4],
    // In Review
    options: sampleOptions,
    align: "right",
    label: "Review Phase"
  }
}`,...w.parameters?.docs?.source}}};const ae=["Default","CenterAligned","RightAligned"];export{g as CenterAligned,f as Default,w as RightAligned,ae as __namedExportsOrder,ne as default};
