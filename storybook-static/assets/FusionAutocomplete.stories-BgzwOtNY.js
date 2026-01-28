import{s as X,r as s,c as B,m as P,q as G,o as H,a as o,f as v,d as S,t as g,g as f,F as L,h as R,B as x,l as K,b as q,w as I,A as Z,T as ee,j as t,k as ae,e as ne,n as te,x as oe,i as D}from"./iframe-BeZJQ65s.js";import{F as E}from"./FusionTextInput-IuYEpiOi.js";import{_ as se}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{U as N}from"./user-B_aocALJ.js";import{B as le,M}from"./map-pin-BCK2pYvT.js";import"./preload-helper-Ct5FWWRu.js";import"./createLucideIcon-7ncFRN9y.js";const re={key:0,class:"fu-status-dropdown__label-text"},ue={key:1},ie={key:0},ce=["src"],de=["onClick"],pe={key:1,class:"fu-placeholder"},me={key:1,class:"flex flex--center flex--gap-md"},fe=["src"],he={key:2,class:"fu-status-dropdown__input-trigger"},ve={key:0,class:"fu-search-wrapper"},ge={key:1,class:"fu-options-scroll scrollbar__control customScrollBar"},ye=["onClick"],be=["src"],Se={key:2,class:"fu-status-dropdown__empty"},we={key:3,class:"fu-input-error"},$=X({__name:"FusionAutocomplete",props:{options:{},modelValue:{default:null},multiple:{type:Boolean,default:!1},placeholder:{default:"Select..."},searchable:{type:Boolean,default:!0},noResultsText:{default:"No results found"},searchPlaceholder:{default:"Search..."},label:{default:""},variant:{default:"button"},size:{default:"md"},formWrapperWidth:{default:""},error:{default:null},async:{type:Boolean,default:!1},minSearchLength:{default:2},loading:{type:Boolean,default:!1}},emits:["update:modelValue","search"],setup(e,{emit:u}){const r=e,c=u,d=s(!1),p=s(""),h=s(null),b=s(null),j=s(null),z=s(null),C=s({}),m=s(null),i=s([]),U=B(()=>r.async===!0);P(()=>r.modelValue,n=>{r.multiple&&Array.isArray(n)?i.value=n:m.value=n},{immediate:!0}),P(p,n=>{U.value&&(n.length<r.minSearchLength||c("search",n))});const O=B(()=>U.value||!p.value?r.options:r.options.filter(n=>n.label.toLowerCase().includes(p.value.toLowerCase())));function T(){d.value=!d.value,d.value&&D(()=>{const n=h.value?.querySelector("button, input");if(!n||!b.value)return;const l=n.getBoundingClientRect();C.value={position:"absolute",top:`${l.bottom+window.scrollY}px`,left:`${l.left+window.scrollX}px`,width:`${l.width}px`,zIndex:"9999"},r.searchable&&D(()=>{const a=z.value?.$el?.querySelector("input")||b.value?.querySelector("input");a?.focus(),a?.select()})})}function J(n){if(r.multiple){const l=i.value.find(a=>a.value===n.value);i.value=l?i.value.filter(a=>a.value!==n.value):[...i.value,n],c("update:modelValue",i.value)}else m.value=n,c("update:modelValue",n),d.value=!1}function Y(n){i.value=i.value.filter(l=>l.value!==n.value),c("update:modelValue",i.value)}function W(n){h.value?.contains(n.target)||b.value?.contains(n.target)||(d.value=!1)}return G(()=>document.addEventListener("click",W)),H(()=>document.removeEventListener("click",W)),(n,l)=>(t(),o("div",{class:"fu-status-dropdown",ref_key:"dropdownRef",ref:h},[e.label?(t(),o("div",re,g(e.label),1)):v("",!0),e.variant==="button"?(t(),o("div",ue,[f("button",{class:K(["fu-status-dropdown__button",[`fu-input--${e.size}`,{"fu-input--error":e.error}]]),onClick:T},[e.multiple?(t(),o("div",ie,[i.value.length?(t(!0),o(L,{key:0},R(i.value,a=>(t(),o("span",{key:a.value,class:"fu-tag"},[a.type==="icon"?(t(),S(x(a.icon),{key:0,size:"14"})):a.type==="image"?(t(),o("img",{key:1,src:a.imageUrl,class:"fu-option-image",alt:"User Image"},null,8,ce)):v("",!0),ae(" "+g(a.label)+" ",1),f("span",{class:"fu-tag__remove",onClick:ne(Q=>Y(a),["stop"])},"×",8,de)]))),128)):(t(),o("span",pe,g(e.placeholder),1))])):(t(),o("div",me,[m.value?.type==="icon"?(t(),S(x(m.value.icon),{key:0,size:"16"})):m.value?.type==="image"?(t(),o("img",{key:1,src:m.value.imageUrl,class:"fu-option-image",alt:"User Image"},null,8,fe)):v("",!0),f("span",null,g(m.value?.label||e.placeholder),1)])),l[2]||(l[2]=f("svg",{class:"fu-status-dropdown__chevron",viewBox:"0 0 20 20"},[f("path",{d:"M6 8l4 4 4-4",stroke:"currentColor","stroke-width":"1.5"})],-1))],2)])):(t(),o("div",he,[q(E,{size:e.size,readonly:"",variant:"outline",formWrapperWidth:e.formWrapperWidth,placeholder:m.value?.label||e.placeholder,onFocus:T,onClick:T},null,8,["size","formWrapperWidth","placeholder"])])),(t(),S(ee,{to:"body"},[q(Z,{name:"fade"},{default:I(()=>[d.value?(t(),o("div",{key:0,class:"fu-status-dropdown__menu",style:te(C.value),ref_key:"menuRef",ref:b},[e.searchable?(t(),o("div",ve,[q(E,{ref_key:"searchInputRef",ref:z,modelValue:p.value,"onUpdate:modelValue":l[1]||(l[1]=a=>p.value=a),type:"text",placeholder:e.searchPlaceholder,size:e.size,formWrapperWidth:"100%"},{right:I(()=>[f("button",{class:"fu-search-clear",onClick:l[0]||(l[0]=a=>p.value="")},"×")]),_:1},8,["modelValue","placeholder","size"])])):v("",!0),O.value.length?(t(),o("div",ge,[(t(!0),o(L,null,R(O.value,a=>(t(),o("div",{key:a.value,class:"fu-status-dropdown__item",onClick:Q=>J(a)},[a.type==="icon"?(t(),S(x(a.icon),{key:0,size:"16"})):a.type==="image"?(t(),o("img",{key:1,src:a.imageUrl,class:"fu-option-image"},null,8,be)):v("",!0),f("span",null,g(a.label),1)],8,ye))),128)),f("div",{class:"fu-status-dropdown__slot-actions",ref_key:"actionsRef",ref:j},[oe(n.$slots,"actions")],512)])):(t(),o("div",Se,g(e.noResultsText),1))],4)):v("",!0)]),_:3})])),e.error?(t(),o("span",we,g(e.error),1)):v("",!0)],512))}}),y=se($,[["__scopeId","data-v-5655257c"]]);$.__docgenInfo={exportName:"default",displayName:"FusionAutocomplete",description:"",tags:{},props:[{name:"options",required:!0,type:{name:"Array",elements:[{name:"Option"}]}},{name:"modelValue",required:!1,type:{name:"union",elements:[{name:"Option"},{name:"Array",elements:[{name:"Option"}]},{name:"null"}]},defaultValue:{func:!1,value:"null"}},{name:"multiple",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"placeholder",required:!1,type:{name:"string"},defaultValue:{func:!1,value:'"Select..."'}},{name:"searchable",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"true"}},{name:"noResultsText",required:!1,type:{name:"string"},defaultValue:{func:!1,value:'"No results found"'}},{name:"searchPlaceholder",required:!1,type:{name:"string"},defaultValue:{func:!1,value:'"Search..."'}},{name:"label",required:!1,type:{name:"string"},defaultValue:{func:!1,value:'""'}},{name:"variant",required:!1,type:{name:"union",elements:[{name:'"button"'},{name:'"input"'}]},defaultValue:{func:!1,value:'"button"'}},{name:"size",required:!1,type:{name:"union",elements:[{name:'"sm"'},{name:'"md"'},{name:'"lg"'}]},defaultValue:{func:!1,value:'"md"'}},{name:"formWrapperWidth",required:!1,type:{name:"string"},defaultValue:{func:!1,value:'""'}},{name:"error",required:!1,type:{name:"union",elements:[{name:"string"},{name:"null"}]},defaultValue:{func:!1,value:"null"}},{name:"async",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"minSearchLength",required:!1,type:{name:"number"},defaultValue:{func:!1,value:"2"}},{name:"loading",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}],events:[{name:"update:modelValue"},{name:"search"}],slots:[{name:"actions"}],sourceFiles:["/Users/xavier/Documents/Websites/Skkido/Fusion-binary-ui/src/components/autocomplete/FusionAutocomplete.vue"]};const ze={title:"Components/FusionAutocomplete",component:y,tags:["autodocs"],parameters:{docs:{description:{component:`
The **FusionAutocomplete** component provides a flexible searchable select input that supports both **client-side** and **server-side (async)** search.

It is designed to scale from **small static lists** to **very large datasets (100k+ records)** without performance issues.

---

## Features

- Single or multiple selection  
- Optional search bar with auto-focus on open  
- Supports **client-side filtering** or **async backend search**  
- Teleported dropdown body  
- Supports **icons or image avatars**  
- Emits \`update:modelValue\` on selection  
- Emits \`search\` event in async mode  
- Fully typed with TypeScript  

---

## Search Modes

### 1. Client-side Search (Default)

By default, FusionAutocomplete filters the provided \`options\` array locally.

Use this when:
- The dataset is small
- All options are already available in memory

No additional configuration is required.

---

### 2. Async Search (Server-side)

When working with **large datasets** (e.g. users, companies, locations),
FusionAutocomplete can operate in **async mode**.

In async mode:
- The component **does not filter options locally**
- It emits a \`search\` event whenever the user types
- The **parent component is responsible** for querying the backend
- The dropdown updates when \`options\` change

This pattern supports **pagination, ranking, and remote search engines**.

---

## Async Props

| Prop | Type | Default | Description |
|-----|------|---------|-------------|
| \`async\` | \`boolean\` | \`false\` | Enables async search mode |
| \`minSearchLength\` | \`number\` | \`2\` | Minimum characters before search emits |
| \`loading\` | \`boolean\` | \`false\` | Displays loading state in dropdown |

---

## Async Usage Example

\`\`\`vue
<script setup>
import { ref } from "vue";
import FusionAutocomplete from "fusion-binary";

const options = ref([]);
const loading = ref(false);

async function searchUsers(query) {
  loading.value = true;

  const res = await fetch(\`/api/users?search=\${query}&limit=20\`);
  options.value = await res.json();

  loading.value = false;
}
<\/script>

<template>
  <FusionAutocomplete
    async
    searchable
    :options="options"
    :loading="loading"
    placeholder="Search users"
    searchPlaceholder="Type to search..."
    @search="searchUsers"
  />
</template>
\`\`\`

This approach allows FusionAutocomplete to scale to **hundreds of thousands of records** without performance degradation.

---
        `}}}},_=[{label:"John Doe",value:"john",type:"icon",icon:N},{label:"Jane Smith",value:"jane",type:"icon",icon:N},{label:"Marketing Team",value:"marketing",type:"icon",icon:le},{label:"London Region",value:"london",type:"icon",icon:M},{label:"New York Region",value:"ny",type:"icon",icon:M}],ke=[{label:"Alice",value:"a",type:"image",imageUrl:"/src/stories/assets/avatars/d1499909450ba526d5297e3ebc7f6d07.png"},{label:"Ben",value:"b",type:"image",imageUrl:"/src/stories/assets/avatars/70a23294beb91b4ad5a439e2c6ea5a6d.png"},{label:"Charlie",value:"c",type:"image",imageUrl:"/src/stories/assets/avatars/cae99bb14b21ec41ecf03b58f59ff292.png"},{label:"Diane",value:"d",type:"image",imageUrl:"/src/stories/assets/avatars/119d9abaee7a1e987571f0fe776bd1a5.png"},{label:"Eli",value:"e",type:"image",imageUrl:"/src/stories/assets/avatars/9854663aec5741bbbe84290b6edc0aed.png"}],w={args:{options:_,placeholder:"Select an option",searchPlaceholder:"Search...",noResultsText:"No results found",size:"sm"},render:e=>({components:{FusionAutocomplete:y},setup(){const u=s(null);return{args:e,model:u}},template:`
      <FusionAutocomplete v-bind="args" v-model="model" />
      <p class="mt-2">Selected: {{ model }}</p>
    `})},k={args:{options:ke,placeholder:"Select a teammate",searchPlaceholder:"Search people...",size:"lg"},render:e=>({components:{FusionAutocomplete:y},setup(){const u=s(null);return{args:e,model:u}},template:`
      <FusionAutocomplete v-bind="args" v-model="model" />
      <p class="mt-2">Selected: {{ model?.label }}</p>
    `})},A={args:{options:_,multiple:!0,placeholder:"Add collaborators or regions",searchPlaceholder:"Search to add...",size:"sm"},render:e=>({components:{FusionAutocomplete:y},setup(){const u=s([]);return{args:e,model:u}},template:`
      <FusionAutocomplete v-bind="args" v-model="model" />
      <p class="mt-2">Selected: {{ model.map(i => i.label).join(', ') }}</p>
    `})},F={args:{async:!0,placeholder:"Search users",searchPlaceholder:"Type to search...",minSearchLength:2,size:"md"},render:e=>({components:{FusionAutocomplete:y},setup(){const u=s(null),r=s([]),c=s(!1);async function d(p){c.value=!0,await new Promise(h=>setTimeout(h,600)),r.value=_.filter(h=>h.label.toLowerCase().includes(p.toLowerCase())),c.value=!1}return{args:e,model:u,options:r,loading:c,search:d}},template:`
      <FusionAutocomplete
        v-bind="args"
        v-model="model"
        :options="options"
        :loading="loading"
        @search="search"
      />
      <p class="mt-2">Selected: {{ model }}</p>
    `})},V={args:{options:_,placeholder:"Select an option",label:"Assigned user",error:"This field is required",size:"md"},render:e=>({components:{FusionAutocomplete:y},setup(){const u=s(null);return{args:e,model:u}},template:`
      <FusionAutocomplete v-bind="args" v-model="model" />
      <p class="mt-2">Selected: {{ model }}</p>
    `})};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    options: baseOptions,
    placeholder: "Select an option",
    searchPlaceholder: "Search...",
    noResultsText: "No results found",
    size: "sm"
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
}`,...w.parameters?.docs?.source}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  args: {
    options: avatarOptions,
    placeholder: "Select a teammate",
    searchPlaceholder: "Search people...",
    size: "lg"
  },
  render: args => ({
    components: {
      FusionAutocomplete
    },
    setup() {
      const model = ref<Option | null>(null);
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
}`,...k.parameters?.docs?.source}}};A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  args: {
    options: baseOptions,
    multiple: true,
    placeholder: "Add collaborators or regions",
    searchPlaceholder: "Search to add...",
    size: "sm"
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
}`,...A.parameters?.docs?.source}}};F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  args: {
    async: true,
    placeholder: "Search users",
    searchPlaceholder: "Type to search...",
    minSearchLength: 2,
    size: "md"
  },
  render: args => ({
    components: {
      FusionAutocomplete
    },
    setup() {
      const model = ref(null);
      const options = ref<Option[]>([]);
      const loading = ref(false);
      async function search(query: string) {
        loading.value = true;

        // Mock async request
        await new Promise(r => setTimeout(r, 600));
        options.value = baseOptions.filter(o => o.label.toLowerCase().includes(query.toLowerCase()));
        loading.value = false;
      }
      return {
        args,
        model,
        options,
        loading,
        search
      };
    },
    template: \`
      <FusionAutocomplete
        v-bind="args"
        v-model="model"
        :options="options"
        :loading="loading"
        @search="search"
      />
      <p class="mt-2">Selected: {{ model }}</p>
    \`
  })
}`,...F.parameters?.docs?.source}}};V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  args: {
    options: baseOptions,
    placeholder: "Select an option",
    label: "Assigned user",
    error: "This field is required",
    size: "md"
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
}`,...V.parameters?.docs?.source}}};const Ce=["Default","WithAvatars","MultipleSelect","AsyncSearch","WithError"];export{F as AsyncSearch,w as Default,A as MultipleSelect,k as WithAvatars,V as WithError,Ce as __namedExportsOrder,ze as default};
