import{s as $,r,c as g,q as P,o as V,a as c,g as b,d as x,f as _,v as O,y as I,b as C,u as N,w as R,x as X,T as j,n as z,l as A,j as s,F as G,h as Y,t as H,i as J}from"./iframe-DKpyqR87.js";import{C as K}from"./chevron-down-F2v8riTe.js";import{_ as Q}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{U as Z}from"./user-CViPPjdI.js";import{M as nn,B as tn}from"./map-pin-D-CzUoyZ.js";import"./preload-helper-Ct5FWWRu.js";import"./createLucideIcon-H_lQUGxs.js";const en=["disabled","aria-expanded"],on=["aria-expanded","disabled"],sn=["onClick"],an=["src"],ln={class:"fu-split-button__option-label"},D=$({__name:"FusionSplitButton",props:{options:{},disabled:{type:Boolean},size:{},variant:{},color:{},icon:{},align:{},buttonWidth:{}},emits:["main-action","select"],setup(t,{emit:a}){const e=t,l=a,i=r(!1),d=r(null),m=r(null),w=g(()=>e.align??"right"),M=r({}),W=g(()=>`fu-split-button--${e.size??"sm"}`),U=g(()=>`fu-split-button--${e.variant??"solid"}`),L=g(()=>({...e.color?{"--fu-split-bg":e.color}:{},...e.buttonWidth?{width:e.buttonWidth}:{}}));function T(){e.disabled||(i.value=!i.value,i.value&&J(()=>{p(),window.addEventListener("click",v),window.addEventListener("resize",p)}))}function p(){if(!m.value||!d.value)return;const n=m.value.getBoundingClientRect(),k=d.value.offsetWidth,o={top:`${n.bottom+window.scrollY+4}px`,left:`${n.left+window.scrollX}px`};w.value==="right"?o.left=`${n.right-k+window.scrollX}px`:w.value==="center"&&(o.left=`${n.left+n.width/2-k/2+window.scrollX}px`),M.value={position:"absolute",...o,zIndex:"1000"}}function v(n){m.value?.contains(n.target)||d.value?.contains(n.target)||(i.value=!1,window.removeEventListener("click",v),window.removeEventListener("resize",p))}function E(){e.disabled||l("main-action")}function q(n){n.onClick&&n.onClick(),l("select",n),i.value=!1,window.removeEventListener("click",v),window.removeEventListener("resize",p)}return P(()=>{V(()=>{window.removeEventListener("click",v),window.removeEventListener("resize",p)})}),(n,k)=>(s(),c("div",{class:A(["fu-split-button",[W.value,U.value]]),style:z(L.value),ref_key:"splitButtonRef",ref:m},[b("button",{class:"fu-split-button__main",disabled:t.disabled,onClick:E,type:"button","aria-haspopup":"true","aria-expanded":i.value},[t.icon?(s(),x(O(t.icon),{key:0,class:"fu-split-button__icon"})):_("",!0),b("span",null,[I(n.$slots,"default",{},void 0,!0)])],8,en),b("button",{class:"fu-split-button__toggle",onClick:T,"aria-expanded":i.value,disabled:t.disabled,type:"button","aria-label":"Toggle dropdown"},[C(N(K))],8,on),(s(),x(j,{to:"body"},[C(X,{name:"fade"},{default:R(()=>[i.value?(s(),c("div",{key:0,class:A(["fu-split-button__dropdown",[`fu-split-button__dropdown--${w.value}`]]),ref_key:"dropdownRef",ref:d,style:z(M.value)},[(s(!0),c(G,null,Y(t.options,o=>(s(),c("div",{key:o.value,class:"fu-split-button__option",onClick:un=>q(o)},[o.type==="icon"?(s(),x(O(o.icon),{key:0,class:"fu-split-button__option-icon"})):o.type==="image"?(s(),c("img",{key:1,src:o.imageUrl,class:"fu-split-button__option-image",alt:""},null,8,an)):_("",!0),b("span",ln,H(o.label),1)],8,sn))),128))],6)):_("",!0)]),_:1})]))],6))}}),u=Q(D,[["__scopeId","data-v-569e263d"]]);D.__docgenInfo={exportName:"default",displayName:"FusionSplitButton",description:"",tags:{},props:[{name:"options",required:!0,type:{name:"Array",elements:[{name:"Option"}]}},{name:"disabled",required:!1,type:{name:"boolean"}},{name:"size",required:!1,type:{name:"union",elements:[{name:'"sm"'},{name:'"md"'},{name:'"lg"'}]}},{name:"variant",required:!1,type:{name:"union",elements:[{name:'"solid"'},{name:'"subtle"'},{name:'"outline"'},{name:'"ghost"'},{name:'"danger"'}]}},{name:"color",required:!1,type:{name:"string"}},{name:"icon",required:!1,type:{name:"any"}},{name:"align",required:!1,type:{name:"union",elements:[{name:'"left"'},{name:'"center"'},{name:'"right"'}]}},{name:"buttonWidth",required:!1,type:{name:"string"}}],events:[{name:"main-action"},{name:"select",type:{names:["Option"]}}],slots:[{name:"default"}],sourceFiles:["/Users/xavier/Documents/Websites/Skkido/Fusion-binary-ui/src/components/splitButton/FusionSplitButton.vue"]};const fn={title:"Components/FusionSplitButton",component:u,tags:["autodocs"],parameters:{docs:{description:{component:`
The **FusionSplitButton** combines a primary action with a dropdown of secondary actions.

It follows the **same sizing, variant, and styling system as \`FusionButton\`**, so it fits perfectly into your design system.

---

## Features

- Primary action + dropdown actions
- Icon or image options
- Teleported dropdown
- Smart positioning
- Size variants: \`sm | md | lg\`
- Style variants: \`solid | subtle | outline | ghost | danger\`
- Optional custom background color
- Optional button width
- Fully typed with TypeScript
- Dropdown options can have individual \`onClick\` handlers

---

### Example Usage

\`\`\`vue
<template>
  <FusionSplitButton
    :options="options"
    @main-action="handleMainAction"
    buttonWidth="200px"
    variant="solid"
    size="md"
  >
    Save
  </FusionSplitButton>
</template>

<script setup lang="ts">
import FusionSplitButton from "@/components/splitButton/FusionSplitButton.vue";
import { User, MapPin, Briefcase } from "lucide-vue-next";

function openAssignModal() {
  alert('Assign User clicked');
}

function openMoveModal() {
  alert('Move Location clicked');
}

function openMarketingModal() {
  alert('Marketing Team clicked');
}

const options = [
  {
    label: "Assign User",
    value: "assign",
    type: "icon",
    icon: User,
    onClick: openAssignModal,
  },
  {
    label: "Move Location",
    value: "move",
    type: "icon",
    icon: MapPin,
    onClick: openMoveModal,
  },
  {
    label: "Marketing Team",
    value: "marketing",
    type: "icon",
    icon: Briefcase,
    onClick: openMarketingModal,
  },
];

function handleMainAction() {
  alert("Main action clicked");
}
<\/script>
\`\`\`
`}}},argTypes:{options:{control:"object",description:"Dropdown options with label, value, and optional icon or image."},size:{control:"select",options:["sm","md","lg"],description:"Controls the size of the split button."},variant:{control:"select",options:["solid","subtle","outline","ghost","danger"],description:"Visual style variant (same as FusionButton)."},color:{control:"color",description:"Optional custom background color (solid variant only)."},buttonWidth:{control:"text",description:"Optional width for the button wrapper (e.g., '200px', '100%')."},disabled:{control:"boolean",description:"Disables both the main button and dropdown."}}},F=[{label:"Assign User",value:"assign",type:"icon",icon:Z},{label:"Move Location",value:"move",type:"icon",icon:nn},{label:"Marketing Team",value:"marketing",type:"icon",icon:tn}],rn=[{label:"Alice",value:"a",type:"image",imageUrl:"/src/stories/assets/avatars/d1499909450ba526d5297e3ebc7f6d07.png"},{label:"Ben",value:"b",type:"image",imageUrl:"/src/stories/assets/avatars/70a23294beb91b4ad5a439e2c6ea5a6d.png"},{label:"Charlie",value:"c",type:"image",imageUrl:"/src/stories/assets/avatars/cae99bb14b21ec41ecf03b58f59ff292.png"}],f={args:{options:F,size:"md",variant:"solid",buttonWidth:"180px"},render:t=>({components:{FusionSplitButton:u},setup(){const a=r(null);function e(i){a.value=i.value}function l(){alert("Main action clicked")}return{args:t,selected:a,handleSelect:e,handleMainAction:l}},template:`
      <FusionSplitButton
        v-bind="args"
        @select="handleSelect"
        @main-action="handleMainAction"
      >
        Save
      </FusionSplitButton>

      <p style="margin-top: 8px">Selected: {{ selected }}</p>
    `})},S={render:()=>({components:{FusionSplitButton:u},setup(){return{baseOptions:F}},template:`
      <div style="display: flex; gap: 12px; flex-wrap: wrap">
        <FusionSplitButton variant="solid" :options="baseOptions">Solid</FusionSplitButton>
        <FusionSplitButton variant="subtle" :options="baseOptions">Subtle</FusionSplitButton>
        <FusionSplitButton variant="outline" :options="baseOptions">Outline</FusionSplitButton>
        <FusionSplitButton variant="ghost" :options="baseOptions">Ghost</FusionSplitButton>
        <FusionSplitButton variant="danger" :options="baseOptions">Danger</FusionSplitButton>
      </div>
    `})},h={args:{options:F,variant:"solid",color:"#7c3aed",size:"md",buttonWidth:"500px"},render:t=>({components:{FusionSplitButton:u},setup(){return{args:t}},template:`
      <FusionSplitButton v-bind="args">
        Purple Action
      </FusionSplitButton>
    `})},B={args:{options:rn,size:"lg",variant:"outline",buttonWidth:"220px"},render:t=>({components:{FusionSplitButton:u},setup(){const a=r(null);function e(l){a.value=l.value}return{args:t,selected:a,handleSelect:e}},template:`
      <FusionSplitButton
        v-bind="args"
        @select="handleSelect"
      >
        Assign
      </FusionSplitButton>

      <p style="margin-top: 8px">Selected: {{ selected }}</p>
    `})},y={args:{options:F,disabled:!0,size:"md",variant:"solid"},render:t=>({components:{FusionSplitButton:u},template:`
      <FusionSplitButton v-bind="args">
        Disabled
      </FusionSplitButton>
    `})};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    options: baseOptions,
    size: "md",
    variant: "solid",
    buttonWidth: "180px"
  },
  render: args => ({
    components: {
      FusionSplitButton
    },
    setup() {
      const selected = ref<string | number | null>(null);
      function handleSelect(option: Option) {
        selected.value = option.value;
      }
      function handleMainAction() {
        alert("Main action clicked");
      }
      return {
        args,
        selected,
        handleSelect,
        handleMainAction
      };
    },
    template: \`
      <FusionSplitButton
        v-bind="args"
        @select="handleSelect"
        @main-action="handleMainAction"
      >
        Save
      </FusionSplitButton>

      <p style="margin-top: 8px">Selected: {{ selected }}</p>
    \`
  })
}`,...f.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      FusionSplitButton
    },
    setup() {
      return {
        baseOptions
      };
    },
    template: \`
      <div style="display: flex; gap: 12px; flex-wrap: wrap">
        <FusionSplitButton variant="solid" :options="baseOptions">Solid</FusionSplitButton>
        <FusionSplitButton variant="subtle" :options="baseOptions">Subtle</FusionSplitButton>
        <FusionSplitButton variant="outline" :options="baseOptions">Outline</FusionSplitButton>
        <FusionSplitButton variant="ghost" :options="baseOptions">Ghost</FusionSplitButton>
        <FusionSplitButton variant="danger" :options="baseOptions">Danger</FusionSplitButton>
      </div>
    \`
  })
}`,...S.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    options: baseOptions,
    variant: "solid",
    color: "#7c3aed",
    size: "md",
    buttonWidth: "500px"
  },
  render: args => ({
    components: {
      FusionSplitButton
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <FusionSplitButton v-bind="args">
        Purple Action
      </FusionSplitButton>
    \`
  })
}`,...h.parameters?.docs?.source}}};B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  args: {
    options: avatarOptions,
    size: "lg",
    variant: "outline",
    buttonWidth: "220px"
  },
  render: args => ({
    components: {
      FusionSplitButton
    },
    setup() {
      const selected = ref<string | number | null>(null);
      function handleSelect(option: Option) {
        selected.value = option.value;
      }
      return {
        args,
        selected,
        handleSelect
      };
    },
    template: \`
      <FusionSplitButton
        v-bind="args"
        @select="handleSelect"
      >
        Assign
      </FusionSplitButton>

      <p style="margin-top: 8px">Selected: {{ selected }}</p>
    \`
  })
}`,...B.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    options: baseOptions,
    disabled: true,
    size: "md",
    variant: "solid"
  },
  render: args => ({
    components: {
      FusionSplitButton
    },
    template: \`
      <FusionSplitButton v-bind="args">
        Disabled
      </FusionSplitButton>
    \`
  })
}`,...y.parameters?.docs?.source}}};const Sn=["Default","Variants","CustomColor","WithAvatars","Disabled"];export{h as CustomColor,f as Default,y as Disabled,S as Variants,B as WithAvatars,Sn as __namedExportsOrder,fn as default};
