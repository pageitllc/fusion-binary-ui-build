import{q as z,r as f,c as H,w as q,x as I,v as P,b as c,d as p,l as G,f as W,u as k,F as J,g as S,i as _,p as j,o as t,t as U,A as R,s as w,y as A}from"./iframe-D7VSQkaL.js";import{C as $}from"./chevron-down-BijdinOd.js";import{C as Q}from"./check-4KJzke2l.js";import{_ as T}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{U as l}from"./user-MrbnWp6R.js";import{c as K}from"./createLucideIcon-DU4KFhpq.js";import"./preload-helper-Ct5FWWRu.js";/**
 * @license @lucide/vue v1.54.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const X={name:"circle-question-mark",size:24,node:[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3",key:"1u773s"}],["path",{d:"M12 17h.01",key:"p32p05"}]],aliases:["help-circle","circle-help"]},F=K(X),Y={class:"fu-combobox__control"},Z=["value","placeholder","disabled"],ee={key:0,class:"fu-combobox__dropdown scrollbar__control customScrollBar"},oe={class:"fu-combobox__group-title"},ne=["onClick"],ae={class:"fu-combobox__option-left"},le={class:"fu-combobox__option-right"},se={key:1,class:"fu-combobox__empty"},O=z({__name:"FuCombobox",props:{options:{},modelValue:{},placeholder:{},disabled:{type:Boolean}},emits:["update:modelValue"],setup(r,{emit:B}){const m=r,M=B,i=f(!1),u=f(""),n=f(null),x=f(null),D=H(()=>{if(!u.value||n.value&&u.value.toLowerCase()===n.value.label.toLowerCase())return C(m.options);const e=m.options.filter(a=>a.label.toLowerCase().includes(u.value.toLowerCase()));return C(e)});function C(e){const a={};return e.forEach(s=>{const o=s.group||"Options";a[o]||(a[o]=[]),a[o].push(s)}),Object.entries(a).map(([s,o])=>({title:s,items:o}))}q(()=>m.modelValue,e=>{n.value=m.options.find(a=>a.value===e)||null,!i.value&&n.value&&(u.value=n.value.label)},{immediate:!0});function L(e){u.value=e.target.value}function N(e){n.value=e,u.value=e.label,M("update:modelValue",e.value),i.value=!1}function E(){i.value=!i.value}function y(e){x.value&&!x.value.contains(e.target)&&(i.value=!1,n.value&&(u.value=n.value.label))}return I(()=>{document.addEventListener("click",y)}),P(()=>{document.removeEventListener("click",y)}),(e,a)=>(t(),c("div",{class:j(["fu-combobox",{"fu-combobox--disabled":r.disabled}]),ref_key:"comboboxRef",ref:x},[p("div",Y,[p("input",{type:"text",value:i.value?u.value:n.value?.label||"",placeholder:r.placeholder,class:"fu-combobox__input",disabled:r.disabled,onInput:L,onFocus:a[0]||(a[0]=s=>!r.disabled&&(i.value=!0))},null,40,Z),p("span",{class:"fu-combobox__icon",onClick:G(E,["stop"])},[W(k($),{size:18,"stroke-width":1})])]),i.value&&!r.disabled?(t(),c("div",ee,[D.value.length>0?(t(!0),c(J,{key:0},S(D.value,s=>(t(),c("div",{key:s.title,class:"fu-combobox__group"},[p("div",oe,U(s.title),1),(t(!0),c(J,null,S(s.items,o=>(t(),c("div",{key:o.value,class:j(["fu-combobox__option",{"fu-combobox__option--selected":o.value===n.value?.value}]),onClick:te=>N(o)},[p("div",ae,[R(e.$slots,"option",{option:o},()=>[o.icon?(t(),w(A(o.icon),{key:0,class:"fu-combobox__option-icon"})):_("",!0),p("span",null,U(o.label),1)],!0)]),p("div",le,[o.value===n.value?.value?(t(),w(k(Q),{key:0,class:"fu-combobox__check"})):_("",!0)])],10,ne))),128))]))),128)):(t(),c("div",se,"No results found"))])):_("",!0)],2))}}),V=T(O,[["__scopeId","data-v-f511904e"]]);O.__docgenInfo={exportName:"default",displayName:"FuCombobox",description:"",tags:{},props:[{name:"options",required:!0,type:{name:"Array",elements:[{name:"ComboboxOption"}]}},{name:"modelValue",required:!1,type:{name:"union",elements:[{name:"string"},{name:"number"},{name:"null"}]}},{name:"placeholder",required:!1,type:{name:"string"}},{name:"disabled",required:!1,type:{name:"boolean"}}],events:[{name:"update:modelValue",type:{names:["union"],elements:[{name:"string"},{name:"number"},{name:"null"}]}}],slots:[{name:"option",scoped:!0,bindings:[{name:"option",title:"binding"}]}],sourceFiles:["/Users/xavier/Documents/Websites/Skkido/Fusion-binary-ui/src/components/combobox/FuCombobox.vue"]};const be={title:"Fusion/Forms/Selection/FuCombobox",component:V,tags:["autodocs"],argTypes:{placeholder:{control:"text",description:"Placeholder text when no option is selected"},options:{control:"object",description:"Array of options with { label, value, icon?, group? }"},modelValue:{control:"text",description:"v-model binding for selected value"},disabled:{control:"boolean",description:"Disables the combobox"}},parameters:{docs:{description:{component:`
The **Combobox** component in Fusion Binary is a searchable select input with support for:

- **Placeholder** → Shown when no option is selected  
- **Options as objects** → { label, value, icon?, group? }  
- **Searchable** → Filters options as you type  
- **Grouped Options** → Supports option groups with headings  
- **Disabled state** → Prevents interaction  
- **Custom slot** → Pass your own template for rendering options  

### Example Usage

\`\`\`vue
<script setup lang="ts">
import { FuCombobox } from "fusion-binary";
import { User, HelpCircle } from "@lucide/vue";

const groupedOptions = [
  { label: "John Doe", value: "john", group: "Users", icon: User },
  { label: "Jane Doe", value: "jane", group: "Users", icon: User },
  { label: "Sales", value: "sales", group: "Departments" },
  { label: "Marketing", value: "marketing", group: "Departments" },
];
<\/script>

<template>
  <!-- Basic -->
  <FuCombobox v-model="selected" :options="groupedOptions" placeholder="Select an option" />

  <!-- Disabled -->
  <FuCombobox :options="groupedOptions" placeholder="Disabled state" disabled />

  <!-- Custom slot -->
  <FuCombobox v-model="selected" :options="groupedOptions">
    <template #option="{ option }">
      <component v-if="option.icon" :is="option.icon" class="w-4 h-4" />
      <span class="ml-2 font-medium">{{ option.label }}</span>
    </template>
  </FuCombobox>
</template>
\`\`\`
        `}}}},d={args:{placeholder:"Select an option...",options:[{label:"John Doe",value:"john"},{label:"Jane Doe",value:"jane"},{label:"Michael Carter",value:"mcarter"},{label:"Sophia Lee",value:"slee"},{label:"David Johnson",value:"djohnson"},{label:"Emily Watson",value:"ewatson"},{label:"James Parker",value:"jparker"},{label:"Olivia Martinez",value:"omartinez"},{label:"Joshua Reed",value:"jreed"}],modelValue:null}},b={args:{placeholder:"Select a user",options:[{label:"John Doe",value:"john",icon:l},{label:"Jane Doe",value:"jane",icon:l},{label:"John Smith",value:"smith",icon:l},{label:"Need Help?",value:"help",icon:F}],modelValue:null}},v={render:r=>({components:{FuCombobox:V},setup(){return{args:r}},template:`
      <FuCombobox v-bind="args">
        <template #option="{ option }">
          <component v-if="option.icon" :is="option.icon" class="w-4 h-4" />
          <span class="ml-2 font-medium">{{ option.label }}</span>
        </template>
      </FuCombobox>
    `}),args:{placeholder:"Custom option render",options:[{label:"John Doe",value:"john",icon:l},{label:"Jane Doe",value:"jane",icon:l},{label:"John Smith",value:"smith",icon:l},{label:"Need Help?",value:"help",icon:F}],modelValue:null}},h={args:{placeholder:"Select from group...",options:[{label:"John Doe",value:"john",group:"Users",icon:l},{label:"Jane Doe",value:"jane",group:"Users",icon:l},{label:"Sales",value:"sales",group:"Departments"},{label:"Marketing",value:"marketing",group:"Departments"}],modelValue:null}},g={args:{placeholder:"Disabled input",options:[{label:"John Doe",value:"john",group:"Users",icon:l},{label:"Jane Doe",value:"jane",group:"Users",icon:l}],disabled:!0}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    placeholder: "Select an option...",
    options: [{
      label: "John Doe",
      value: "john"
    }, {
      label: "Jane Doe",
      value: "jane"
    }, {
      label: "Michael Carter",
      value: "mcarter"
    }, {
      label: "Sophia Lee",
      value: "slee"
    }, {
      label: "David Johnson",
      value: "djohnson"
    }, {
      label: "Emily Watson",
      value: "ewatson"
    }, {
      label: "James Parker",
      value: "jparker"
    }, {
      label: "Olivia Martinez",
      value: "omartinez"
    }, {
      label: "Joshua Reed",
      value: "jreed"
    }],
    modelValue: null
  }
}`,...d.parameters?.docs?.source},description:{story:"Basic Combobox with placeholder and simple options",...d.parameters?.docs?.description}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    placeholder: "Select a user",
    options: [{
      label: "John Doe",
      value: "john",
      icon: User
    }, {
      label: "Jane Doe",
      value: "jane",
      icon: User
    }, {
      label: "John Smith",
      value: "smith",
      icon: User
    }, {
      label: "Need Help?",
      value: "help",
      icon: HelpCircle
    }],
    modelValue: null
  }
}`,...b.parameters?.docs?.source},description:{story:"Combobox with icons for options",...b.parameters?.docs?.description}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: args => ({
    components: {
      FuCombobox
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <FuCombobox v-bind="args">
        <template #option="{ option }">
          <component v-if="option.icon" :is="option.icon" class="w-4 h-4" />
          <span class="ml-2 font-medium">{{ option.label }}</span>
        </template>
      </FuCombobox>
    \`
  }),
  args: {
    placeholder: "Custom option render",
    options: [{
      label: "John Doe",
      value: "john",
      icon: User
    }, {
      label: "Jane Doe",
      value: "jane",
      icon: User
    }, {
      label: "John Smith",
      value: "smith",
      icon: User
    }, {
      label: "Need Help?",
      value: "help",
      icon: HelpCircle
    }],
    modelValue: null
  }
}`,...v.parameters?.docs?.source},description:{story:"Custom Slot for rendering options (e.g. icons + styled labels)",...v.parameters?.docs?.description}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    placeholder: "Select from group...",
    options: [{
      label: "John Doe",
      value: "john",
      group: "Users",
      icon: User
    }, {
      label: "Jane Doe",
      value: "jane",
      group: "Users",
      icon: User
    }, {
      label: "Sales",
      value: "sales",
      group: "Departments"
    }, {
      label: "Marketing",
      value: "marketing",
      group: "Departments"
    }],
    modelValue: null
  }
}`,...h.parameters?.docs?.source},description:{story:"Grouped options",...h.parameters?.docs?.description}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    placeholder: "Disabled input",
    options: [{
      label: "John Doe",
      value: "john",
      group: "Users",
      icon: User
    }, {
      label: "Jane Doe",
      value: "jane",
      group: "Users",
      icon: User
    }],
    disabled: true
  }
}`,...g.parameters?.docs?.source},description:{story:"Disabled Combobox",...g.parameters?.docs?.description}}};const ve=["Basic","WithIcons","CustomSlot","Grouped","Disabled"];export{d as Basic,v as CustomSlot,g as Disabled,h as Grouped,b as WithIcons,ve as __namedExportsOrder,be as default};
