import{s as $,r,c as v,q as P,o as V,a as p,g as b,d as _,f as O,v as z,y as I,b as C,u as N,w as R,x as X,T as j,n as M,l as A,j as s,F as G,h as Y,t as H,i as J}from"./iframe-4anGkjM3.js";import{C as K}from"./chevron-down-pi8uy0el.js";import{_ as Q}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{U as Z}from"./user-C5GbdiJV.js";import{M as tt,B as nt}from"./map-pin-1YJTodNf.js";import"./preload-helper-Ct5FWWRu.js";import"./createLucideIcon-MAVkZFkt.js";const et=["disabled","aria-expanded"],ot=["aria-expanded","disabled"],it=["onClick"],st=["src"],at={class:"fu-split-button__option-label"},W=$({__name:"FusionSplitButton",props:{options:{},disabled:{type:Boolean},size:{},variant:{},color:{},icon:{},align:{},buttonWidth:{}},emits:["main-action","select"],setup(t,{emit:a}){const n=t,l=a,i=r(!1),c=r(null),d=r(null),F=v(()=>n.align??"right"),k=r({}),D=v(()=>`fu-split-button--${n.size??"sm"}`),U=v(()=>`fu-split-button--${n.variant??"solid"}`),T=v(()=>({...n.color?{"--fu-split-bg":n.color}:{},...n.buttonWidth?{width:n.buttonWidth}:{}}));function q(){n.disabled||(i.value=!i.value,i.value&&J(()=>{m(),window.addEventListener("click",w),window.addEventListener("resize",m)}))}function m(){if(!d.value||!c.value)return;const e=d.value.getBoundingClientRect(),x=c.value.offsetWidth,o={top:`${e.bottom+window.scrollY+4}px`,left:`${e.left+window.scrollX}px`};F.value==="right"?o.left=`${e.right-x+window.scrollX}px`:F.value==="center"&&(o.left=`${e.left+e.width/2-x/2+window.scrollX}px`),k.value={position:"absolute",...o,zIndex:"1000"}}function w(e){d.value?.contains(e.target)||c.value?.contains(e.target)||(i.value=!1,window.removeEventListener("click",w),window.removeEventListener("resize",m))}function E(){n.disabled||l("main-action")}function L(e){l("select",e),i.value=!1}return P(()=>{V(()=>{window.removeEventListener("click",w),window.removeEventListener("resize",m)})}),(e,x)=>(s(),p("div",{class:A(["fu-split-button",[D.value,U.value]]),style:M(T.value),ref_key:"splitButtonRef",ref:d},[b("button",{class:"fu-split-button__main",disabled:t.disabled,onClick:E,type:"button","aria-haspopup":"true","aria-expanded":i.value},[t.icon?(s(),_(z(t.icon),{key:0,class:"fu-split-button__icon"})):O("",!0),b("span",null,[I(e.$slots,"default",{},void 0,!0)])],8,et),b("button",{class:"fu-split-button__toggle",onClick:q,"aria-expanded":i.value,disabled:t.disabled,type:"button","aria-label":"Toggle dropdown"},[C(N(K))],8,ot),(s(),_(j,{to:"body"},[C(X,{name:"fade"},{default:R(()=>[i.value?(s(),p("div",{key:0,class:A(["fu-split-button__dropdown",[`fu-split-button__dropdown--${F.value}`]]),ref_key:"dropdownRef",ref:c,style:M(k.value)},[(s(!0),p(G,null,Y(t.options,o=>(s(),p("div",{key:o.value,class:"fu-split-button__option",onClick:rt=>L(o)},[o.type==="icon"?(s(),_(z(o.icon),{key:0,class:"fu-split-button__option-icon"})):o.type==="image"?(s(),p("img",{key:1,src:o.imageUrl,class:"fu-split-button__option-image",alt:""},null,8,st)):O("",!0),b("span",at,H(o.label),1)],8,it))),128))],6)):O("",!0)]),_:1})]))],6))}}),u=Q(W,[["__scopeId","data-v-c4af5250"]]);W.__docgenInfo={exportName:"default",displayName:"FusionSplitButton",description:"",tags:{},props:[{name:"options",required:!0,type:{name:"Array",elements:[{name:"Option"}]}},{name:"disabled",required:!1,type:{name:"boolean"}},{name:"size",required:!1,type:{name:"union",elements:[{name:'"sm"'},{name:'"md"'},{name:'"lg"'}]}},{name:"variant",required:!1,type:{name:"union",elements:[{name:'"solid"'},{name:'"subtle"'},{name:'"outline"'},{name:'"ghost"'},{name:'"danger"'}]}},{name:"color",required:!1,type:{name:"string"}},{name:"icon",required:!1,type:{name:"any"}},{name:"align",required:!1,type:{name:"union",elements:[{name:'"left"'},{name:'"center"'},{name:'"right"'}]}},{name:"buttonWidth",required:!1,type:{name:"string"}}],events:[{name:"main-action"},{name:"select",type:{names:["Option"]}}],slots:[{name:"default"}],sourceFiles:["/Users/xavier/Documents/Websites/Skkido/Fusion-binary-ui/src/components/splitButton/FusionSplitButton.vue"]};const gt={title:"Components/FusionSplitButton",component:u,tags:["autodocs"],parameters:{docs:{description:{component:`
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

---

### Example Usage

\`\`\`vue
<template>
  <FusionSplitButton
    :options="options"
    @main-action="handleMainAction"
    @select="handleSelect"
    buttonWidth="200px"
    variant="solid"
    size="md"
  >
    Save
  </FusionSplitButton>

  <p>Selected: {{ selected }}</p>
</template>

<script setup lang="ts">
import FusionSplitButton from "@/components/splitButton/FusionSplitButton.vue";
import { User, MapPin, Briefcase } from "lucide-vue-next";
import { ref } from "vue";

const options = [
  { label: "Assign User", value: "assign", type: "icon", icon: User },
  { label: "Move Location", value: "move", type: "icon", icon: MapPin },
  { label: "Marketing Team", value: "marketing", type: "icon", icon: Briefcase },
];

const selected = ref<string | number | null>(null);

function handleSelect(option: any) {
  selected.value = option.value;
}

function handleMainAction() {
  alert("Main action clicked");
}
<\/script>
\`\`\`
`}}},argTypes:{options:{control:"object",description:"Dropdown options with label, value, and optional icon or image."},size:{control:"select",options:["sm","md","lg"],description:"Controls the size of the split button."},variant:{control:"select",options:["solid","subtle","outline","ghost","danger"],description:"Visual style variant (same as FusionButton)."},color:{control:"color",description:"Optional custom background color (solid variant only)."},buttonWidth:{control:"text",description:"Optional width for the button wrapper (e.g., '200px', '100%')."},disabled:{control:"boolean",description:"Disables both the main button and dropdown."}}},y=[{label:"Assign User",value:"assign",type:"icon",icon:Z},{label:"Move Location",value:"move",type:"icon",icon:tt},{label:"Marketing Team",value:"marketing",type:"icon",icon:nt}],lt=[{label:"Alice",value:"a",type:"image",imageUrl:"/src/stories/assets/avatars/d1499909450ba526d5297e3ebc7f6d07.png"},{label:"Ben",value:"b",type:"image",imageUrl:"/src/stories/assets/avatars/70a23294beb91b4ad5a439e2c6ea5a6d.png"},{label:"Charlie",value:"c",type:"image",imageUrl:"/src/stories/assets/avatars/cae99bb14b21ec41ecf03b58f59ff292.png"}],g={args:{options:y,size:"md",variant:"solid",buttonWidth:"180px"},render:t=>({components:{FusionSplitButton:u},setup(){const a=r(null);function n(i){a.value=i.value}function l(){alert("Main action clicked")}return{args:t,selected:a,handleSelect:n,handleMainAction:l}},template:`
      <FusionSplitButton
        v-bind="args"
        @select="handleSelect"
        @main-action="handleMainAction"
      >
        Save
      </FusionSplitButton>

      <p style="margin-top: 8px">Selected: {{ selected }}</p>
    `})},f={render:()=>({components:{FusionSplitButton:u},setup(){return{baseOptions:y}},template:`
      <div style="display: flex; gap: 12px; flex-wrap: wrap">
        <FusionSplitButton variant="solid" :options="baseOptions">Solid</FusionSplitButton>
        <FusionSplitButton variant="subtle" :options="baseOptions">Subtle</FusionSplitButton>
        <FusionSplitButton variant="outline" :options="baseOptions">Outline</FusionSplitButton>
        <FusionSplitButton variant="ghost" :options="baseOptions">Ghost</FusionSplitButton>
        <FusionSplitButton variant="danger" :options="baseOptions">Danger</FusionSplitButton>
      </div>
    `})},S={args:{options:y,variant:"solid",color:"#7c3aed",size:"md",buttonWidth:"500px"},render:t=>({components:{FusionSplitButton:u},setup(){return{args:t}},template:`
      <FusionSplitButton v-bind="args">
        Purple Action
      </FusionSplitButton>
    `})},h={args:{options:lt,size:"lg",variant:"outline",buttonWidth:"220px"},render:t=>({components:{FusionSplitButton:u},setup(){const a=r(null);function n(l){a.value=l.value}return{args:t,selected:a,handleSelect:n}},template:`
      <FusionSplitButton
        v-bind="args"
        @select="handleSelect"
      >
        Assign
      </FusionSplitButton>

      <p style="margin-top: 8px">Selected: {{ selected }}</p>
    `})},B={args:{options:y,disabled:!0,size:"md",variant:"solid"},render:t=>({components:{FusionSplitButton:u},template:`
      <FusionSplitButton v-bind="args">
        Disabled
      </FusionSplitButton>
    `})};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
}`,...g.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
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
}`,...f.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
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
}`,...S.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
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
}`,...h.parameters?.docs?.source}}};B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
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
}`,...B.parameters?.docs?.source}}};const ft=["Default","Variants","CustomColor","WithAvatars","Disabled"];export{S as CustomColor,g as Default,B as Disabled,f as Variants,h as WithAvatars,ft as __namedExportsOrder,gt as default};
