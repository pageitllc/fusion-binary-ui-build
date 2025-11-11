import{d as Y,r,w as Q,D as X,i as G,j as K,c as l,a as m,k,t as f,b as u,F as L,s as q,u as V,l as C,p as N,T as Z,q as ee,o as a,e as te,C as ae,h as oe,g as le,z as W}from"./iframe-o7SUGoga.js";import{F as B}from"./FusionTextInput-C0SJgCer.js";import{_ as se}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{U as D}from"./user-CShBQRq7.js";import{c as M}from"./createLucideIcon-D5kBsy5g.js";import"./preload-helper-Ct5FWWRu.js";/**
 * @license lucide-vue-next v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ne=M("briefcase",[["path",{d:"M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16",key:"jecpp"}],["rect",{width:"20",height:"14",x:"2",y:"6",rx:"2",key:"i6l2r4"}]]);/**
 * @license lucide-vue-next v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const I=M("map-pin",[["path",{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",key:"1r0f0z"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]]),re={key:0,class:"fu-status-dropdown__label-text"},ie={key:1},ce={key:0},ue=["src"],de=["onClick"],pe={key:1,class:"fu-placeholder"},me={key:1,class:"flex flex--center flex--gap-md"},fe=["src"],ve={key:2,class:"fu-status-dropdown__input-trigger"},he={key:0,class:"fu-search-wrapper"},ge={key:1,class:"fu-options-scroll scrollbar__control customScrollBar"},be=["onClick"],ye=["src"],ke={key:2,class:"fu-status-dropdown__empty"},j=Y({__name:"FusionAutocomplete",props:{options:{},modelValue:{default:null},multiple:{type:Boolean,default:!1},placeholder:{default:"Select..."},searchable:{type:Boolean,default:!0},noResultsText:{default:"No results found"},searchPlaceholder:{default:"Search..."},label:{default:""},variant:{default:"button"},size:{default:"md"},formWrapperWidth:{default:""}},emits:["update:modelValue"],setup(o,{emit:d}){const p=o,A=d,i=r(!1),v=r(""),h=r(null),b=r(null),g=r(null),T=r({}),c=r(null),n=r([]);Q(()=>p.modelValue,t=>{p.multiple&&Array.isArray(t)?n.value=t:c.value=t},{immediate:!0});function U(){i.value=!i.value,i.value&&W(()=>{const t=b.value?.querySelector("button, input"),s=g.value;if(t&&s){const e=t.getBoundingClientRect(),F=window.innerHeight;let P=e.bottom+window.scrollY;F-e.bottom<200&&e.top>200&&(P=e.top+window.scrollY-s.offsetHeight-8),T.value={position:"absolute",top:`${P}px`,left:`${e.left+window.scrollX}px`,width:`${e.width}px`,zIndex:"9999"}}p.searchable&&W(()=>{const e=g.value?.querySelector("input[type='text']");e&&(e.focus(),e.select())})})}function J(t){if(p.multiple){const s=n.value.find(e=>e.value===t.value);n.value=s?n.value.filter(e=>e.value!==t.value):[...n.value,t],A("update:modelValue",n.value)}else c.value=t,A("update:modelValue",t),i.value=!1}function H(t){n.value=n.value.filter(s=>s.value!==t.value),A("update:modelValue",n.value)}const E=X(()=>v.value?p.options.filter(t=>t.label.toLowerCase().includes(v.value.toLowerCase())):p.options),R=t=>{t.stopPropagation(),t.preventDefault(),i.value=!1,requestAnimationFrame(()=>{t.target?.dispatchEvent(new Event("click",{bubbles:!0}))})};function y(){setTimeout(()=>{const t=document.activeElement;!b.value?.contains(t)&&!g.value?.contains(t)&&(i.value=!1)},80)}function O(t){const s=t.target;b.value?.contains(s)||g.value?.contains(s)||(i.value=!1)}function z(){i.value&&(i.value=!1)}return G(()=>{document.addEventListener("click",O),document.addEventListener("focusin",y),document.addEventListener("focusout",y),window.addEventListener("resize",z),h.value&&h.value.addEventListener("click",R,!0)}),K(()=>{document.removeEventListener("click",O),document.removeEventListener("focusin",y),document.removeEventListener("focusout",y),window.removeEventListener("resize",z),h.value&&h.value.removeEventListener("click",R)}),(t,s)=>(a(),l("div",{class:"fu-status-dropdown",ref_key:"dropdownRef",ref:b},[o.label?(a(),l("div",re,f(o.label),1)):m("",!0),o.variant==="button"?(a(),l("div",ie,[u("button",{class:"fu-status-dropdown__button",onClick:U},[o.multiple?(a(),l("div",ce,[n.value.length?(a(!0),l(L,{key:0},q(n.value,e=>(a(),l("span",{key:e.value,class:"fu-tag"},[e.type==="icon"?(a(),k(V(e.icon),{key:0,size:"14"})):e.type==="image"?(a(),l("img",{key:1,src:e.imageUrl,class:"fu-option-image",alt:"User Image"},null,8,ue)):m("",!0),te(" "+f(e.label)+" ",1),u("span",{class:"fu-tag__remove",onClick:ae(F=>H(e),["stop"])},"×",8,de)]))),128)):(a(),l("span",pe,f(o.placeholder),1))])):(a(),l("div",me,[c.value?.type==="icon"?(a(),k(V(c.value.icon),{key:0,size:"16"})):c.value?.type==="image"?(a(),l("img",{key:1,src:c.value.imageUrl,class:"fu-option-image",alt:"User Image"},null,8,fe)):m("",!0),u("span",null,f(c.value?.label||o.placeholder),1)])),s[2]||(s[2]=u("svg",{class:"fu-status-dropdown__chevron",viewBox:"0 0 20 20",fill:"none"},[u("path",{d:"M6 8l4 4 4-4",stroke:"currentColor","stroke-width":"1.5"})],-1))])])):(a(),l("div",ve,[C(B,{size:o.size,readonly:!0,variant:"outline",formWrapperWidth:o.formWrapperWidth,placeholder:c.value?.label||o.placeholder,onFocus:U,onClick:U},null,8,["size","formWrapperWidth","placeholder"])])),(a(),k(ee,{to:"body"},[C(Z,{name:"fade"},{default:N(()=>[i.value?(a(),l("div",{key:0,class:"fu-status-dropdown__menu",style:oe(T.value),ref_key:"menuRef",ref:g},[o.searchable?(a(),l("div",he,[C(B,{class:"fu-search-input",type:"text",modelValue:v.value,"onUpdate:modelValue":s[1]||(s[1]=e=>v.value=e),placeholder:o.searchPlaceholder,size:o.size,formWrapperWidth:"100%"},{right:N(()=>[u("button",{class:"fu-search-clear",onClick:s[0]||(s[0]=e=>v.value="")},"×")]),_:1},8,["modelValue","placeholder","size"])])):m("",!0),E.value.length?(a(),l("div",ge,[(a(!0),l(L,null,q(E.value,e=>(a(),l("div",{key:e.value,class:"fu-status-dropdown__item",onClick:F=>J(e)},[e.type==="icon"?(a(),k(V(e.icon),{key:0,size:"16"})):e.type==="image"?(a(),l("img",{key:1,src:e.imageUrl,class:"fu-option-image",alt:""},null,8,ye)):m("",!0),u("span",null,f(e.label),1)],8,be))),128)),u("div",{class:"fu-status-dropdown__slot-actions",ref_key:"actionsRef",ref:h},[le(t.$slots,"actions")],512)])):(a(),l("div",ke,f(o.noResultsText),1))],4)):m("",!0)]),_:3})]))],512))}}),_=se(j,[["__scopeId","data-v-297882b6"]]);j.__docgenInfo={exportName:"default",displayName:"FusionAutocomplete",description:"",tags:{},props:[{name:"options",required:!0,type:{name:"Array",elements:[{name:"Option"}]}},{name:"modelValue",required:!1,type:{name:"union",elements:[{name:"Option"},{name:"Array",elements:[{name:"Option"}]},{name:"null"}]},defaultValue:{func:!1,value:"null"}},{name:"multiple",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"placeholder",required:!1,type:{name:"string"},defaultValue:{func:!1,value:'"Select..."'}},{name:"searchable",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"true"}},{name:"noResultsText",required:!1,type:{name:"string"},defaultValue:{func:!1,value:'"No results found"'}},{name:"searchPlaceholder",required:!1,type:{name:"string"},defaultValue:{func:!1,value:'"Search..."'}},{name:"label",required:!1,type:{name:"string"},defaultValue:{func:!1,value:'""'}},{name:"variant",required:!1,type:{name:"union",elements:[{name:'"button"'},{name:'"input"'}]},defaultValue:{func:!1,value:'"button"'}},{name:"size",required:!1,type:{name:"union",elements:[{name:'"sm"'},{name:'"md"'},{name:'"lg"'}]},defaultValue:{func:!1,value:'"md"'}},{name:"formWrapperWidth",required:!1,type:{name:"string"},defaultValue:{func:!1,value:'""'}}],events:[{name:"update:modelValue"}],slots:[{name:"actions"}],sourceFiles:["/Users/tommys/Documents/Skkido/Fusion-binary-ui/src/components/autocomplete/FusionAutocomplete.vue"]};const Te={title:"Components/Form/FusionAutocomplete",component:_,tags:["autodocs"],parameters:{docs:{description:{component:`
# FusionAutocomplete

The **FusionAutocomplete** component provides a flexible searchable select input that supports both single and multiple selection modes.  
It’s ideal for assigning users, selecting regions, or filtering datasets.

---

## Features

- Single or multiple selection  
- Optional search bar with clear (×) button  
- Customizable placeholder and “no results” messages  
- Teleported dropdown body  
- Supports **icons or image avatars** (via \`type: "icon"\` or \`type: "image"\`)  
- Emits \`update:modelValue\` on selection  
- Fully typed with TypeScript

---

## Example Usage

### Basic Single Select
\`\`\`vue
<template>
  <FusionAutocomplete
    v-model="selectedUser"
    :options="userOptions"
    placeholder="Select a user"
    searchPlaceholder="Search users..."
    noResultsText="No users found"
  />
</template>

<script>
import { ref } from "vue";
import { User } from "lucide-vue-next";

export default {
  setup() {
    const selectedUser = ref(null);
    const userOptions = [
      { label: "John Doe", value: "john", type: "icon", icon: User },
      { label: "Jane Smith", value: "jane", type: "icon", icon: User },
      { label: "Mark Lee", value: "mark", type: "icon", icon: User },
    ];
    return { selectedUser, userOptions };
  },
};
<\/script>
\`\`\`

### With Image Avatars
\`\`\`vue
<template>
  <FusionAutocomplete
    v-model="selectedPerson"
    :options="avatarOptions"
    placeholder="Select a teammate"
    searchPlaceholder="Search people..."
  />
</template>

<script>
import { ref } from "vue";

export default {
  setup() {
    const selectedPerson = ref(null);
    const avatarOptions = [
      { label: "Alice", value: "a", type: "image", imageUrl: "/src/stories/assets/avatars/d1499909450ba526d5297e3ebc7f6d07.png" },
      { label: "Ben", value: "b", type: "image", imageUrl: "/src/stories/assets/avatars/70a23294beb91b4ad5a439e2c6ea5a6d.png" },
      { label: "Charlie", value: "c", type: "image", imageUrl: "/src/stories/assets/avatars/cae99bb14b21ec41ecf03b58f59ff292.png" },
      { label: "Diane", value: "d", type: "image", imageUrl: "/src/stories/assets/avatars/119d9abaee7a1e987571f0fe776bd1a5.png" },
      { label: "Eli", value: "e", type: "image", imageUrl: "/src/stories/assets/avatars/9854663aec5741bbbe84290b6edc0aed.png" },
    ];
    return { selectedPerson, avatarOptions };
  },
};
<\/script>
\`\`\`
        `}}},argTypes:{options:{control:"object",description:"Array of selectable items with label, value, and optional icon or image URL."},multiple:{control:"boolean",description:"Enables multiple selection mode."},searchable:{control:"boolean",description:"Enables or disables the search input."},placeholder:{control:"text",description:"Placeholder text when no selection is made."},searchPlaceholder:{control:"text",description:"Placeholder text inside the search bar."},noResultsText:{control:"text",description:"Message displayed when no search results are found."},modelValue:{control:!1,description:"Current selected value(s)."}}},$=[{label:"John Doe",value:"john",type:"icon",icon:D},{label:"Jane Smith",value:"jane",type:"icon",icon:D},{label:"Marketing Team",value:"marketing",type:"icon",icon:ne},{label:"London Region",value:"london",type:"icon",icon:I},{label:"New York Region",value:"ny",type:"icon",icon:I}],we=[{label:"Alice",value:"a",type:"image",imageUrl:"/src/stories/assets/avatars/d1499909450ba526d5297e3ebc7f6d07.png"},{label:"Ben",value:"b",type:"image",imageUrl:"/src/stories/assets/avatars/70a23294beb91b4ad5a439e2c6ea5a6d.png"},{label:"Charlie",value:"c",type:"image",imageUrl:"/src/stories/assets/avatars/cae99bb14b21ec41ecf03b58f59ff292.png"},{label:"Diane",value:"d",type:"image",imageUrl:"/src/stories/assets/avatars/119d9abaee7a1e987571f0fe776bd1a5.png"},{label:"Eli",value:"e",type:"image",imageUrl:"/src/stories/assets/avatars/9854663aec5741bbbe84290b6edc0aed.png"}],w={args:{options:$,placeholder:"Select an option",searchPlaceholder:"Search...",noResultsText:"No results found"},render:o=>({components:{FusionAutocomplete:_},setup(){const d=r(null);return{args:o,model:d}},template:`
      <FusionAutocomplete v-bind="args" v-model="model" />
      <p class="mt-2">Selected: {{ model }}</p>
    `})},S={args:{options:we,placeholder:"Select a teammate",searchPlaceholder:"Search people...",noResultsText:"No matches found"},render:o=>({components:{FusionAutocomplete:_},setup(){const d=r(null);return{args:o,model:d}},template:`
      <FusionAutocomplete v-bind="args" v-model="model" />
      <p class="mt-2">Selected: {{ model?.label }}</p>
    `})},x={args:{options:$,multiple:!0,placeholder:"Add collaborators or regions",searchPlaceholder:"Search to add...",noResultsText:"No matching options"},render:o=>({components:{FusionAutocomplete:_},setup(){const d=r([]);return{args:o,model:d}},template:`
      <FusionAutocomplete v-bind="args" v-model="model" />
      <p class="mt-2">Selected: {{ model.map(i => i.label).join(', ') }}</p>
    `})};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    options: baseOptions,
    placeholder: "Select an option",
    searchPlaceholder: "Search...",
    noResultsText: "No results found"
  },
  render: args => ({
    components: {
      FusionAutocomplete
    },
    setup() {
      const model = ref(null);
      return {
        args,
        model
      };
    },
    template: \`
      <FusionAutocomplete v-bind="args" v-model="model" />
      <p class="mt-2">Selected: {{ model }}</p>
    \`
  })
}`,...w.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    options: avatarOptions,
    placeholder: "Select a teammate",
    searchPlaceholder: "Search people...",
    noResultsText: "No matches found"
  },
  render: args => ({
    components: {
      FusionAutocomplete
    },
    setup() {
      const model = ref(null);
      return {
        args,
        model
      };
    },
    template: \`
      <FusionAutocomplete v-bind="args" v-model="model" />
      <p class="mt-2">Selected: {{ model?.label }}</p>
    \`
  })
}`,...S.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    options: baseOptions,
    multiple: true,
    placeholder: "Add collaborators or regions",
    searchPlaceholder: "Search to add...",
    noResultsText: "No matching options"
  },
  render: args => ({
    components: {
      FusionAutocomplete
    },
    setup() {
      const model = ref<Option[]>([]);
      return {
        args,
        model
      };
    },
    template: \`
      <FusionAutocomplete v-bind="args" v-model="model" />
      <p class="mt-2">Selected: {{ model.map(i => i.label).join(', ') }}</p>
    \`
  })
}`,...x.parameters?.docs?.source}}};const Ee=["Default","WithAvatars","MultipleSelect"];export{w as Default,x as MultipleSelect,S as WithAvatars,Ee as __namedExportsOrder,Te as default};
