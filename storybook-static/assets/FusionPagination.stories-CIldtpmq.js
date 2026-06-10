import{F as d}from"./FusionPagination-cb4iyToT.js";import{r as l}from"./iframe-D3vfv6YP.js";import"./FusionStatusDropdown-DuP42DBo.js";import"./chevron-down-CgrmphEu.js";import"./createLucideIcon-DKFlsGA7.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./chevron-right-BVdJWT0t.js";import"./preload-helper-Ct5FWWRu.js";const h={title:"Components/FusionPagination",component:d,tags:["autodocs"],argTypes:{page:{control:{type:"number"},description:"Current page (1-based index)",table:{category:"Props",type:{summary:"number"}}},pageSize:{control:{type:"number"},description:"Number of items per page",table:{category:"Props",type:{summary:"number"}}},total:{control:{type:"number"},description:"Total number of items",table:{category:"Props",type:{summary:"number"}}},variant:{control:{type:"select"},options:["default","simple"],description:"Pagination display variant",table:{category:"Props",defaultValue:{summary:"default"},type:{summary:'"default" | "simple"'}}},showInfo:{control:{type:"boolean"},description:"Show range info (e.g. 21–40 of 137)",table:{category:"Props",defaultValue:{summary:"true"},type:{summary:"boolean"}}},siblingCount:{control:{type:"number"},description:"Number of pages shown on each side of the active page",table:{category:"Props",defaultValue:{summary:"1"},type:{summary:"number"}}},loading:{control:{type:"boolean"},description:"Shows skeleton state — disables controls and replaces page numbers with placeholders",table:{category:"Props",defaultValue:{summary:"false"},type:{summary:"boolean"}}}},parameters:{docs:{description:{component:`
The **FusionPagination** component provides navigation controls for paginated
content such as tables, lists, and dashboards.

It is intentionally **stateless** — the parent owns pagination state
(\`page\`, \`pageSize\`, \`total\`) and reacts to emitted updates.

---

### Features

- Truncated pagination with ellipsis
- Simple **Previous / Next** mode
- Lucide chevron icons for navigation
- Optional result count display
- **Loading skeleton** state via \`:loading\` prop
- Designed to pair with **FusionListView**

---

### Example Usage

\`\`\`vue
<script setup lang="ts">
import { ref } from "vue";
import FusionPagination from "@/components/pagination/FusionPagination.vue";

const page = ref(1);
const isLoading = ref(true);
<\/script>

<template>
  <FusionPagination
    v-model:page="page"
    :pageSize="10"
    :total="137"
    :loading="isLoading"
  />
</template>
\`\`\`
        `}}}},e=a=>({components:{FusionPagination:d},setup(){const n=l(a.page);return{args:a,page:n}},template:`
    <div style="padding:2rem; display:flex; flex-direction:column; gap:12px;">
      <FusionPagination v-bind="args" v-model:page="page" />
      <div style="font-size:13px; color:var(--fu-color-text-muted);">
        Current page: {{ page }}
      </div>
    </div>
  `}),t={name:"Default",render:e,args:{page:1,pageSize:10,total:137,variant:"default",showInfo:!0,siblingCount:1,loading:!1}},o={name:"Simple (Previous / Next)",render:e,args:{page:3,pageSize:25,total:137,variant:"simple",showInfo:!0,loading:!1}},r={name:"Without Info Text",render:e,args:{page:2,pageSize:10,total:42,variant:"default",showInfo:!1,siblingCount:1,loading:!1}},s={name:"Wide Range Pagination",render:e,args:{page:7,pageSize:10,total:240,variant:"default",showInfo:!0,siblingCount:2,loading:!1}},i={name:"Loading",render:e,args:{page:1,pageSize:10,total:137,variant:"default",showInfo:!0,siblingCount:1,loading:!0}},p={name:"Loading → Loaded transition",render:()=>({components:{FusionPagination:d},setup(){const a=l(1),n=l(!0);return setTimeout(()=>n.value=!1,2e3),{page:a,isLoading:n}},template:`
      <div style="padding:2rem; display:flex; flex-direction:column; gap:12px;">
        <FusionPagination
          v-model:page="page"
          :pageSize="10"
          :total="137"
          :loading="isLoading"
        />
        <div style="font-size:13px; color:var(--fu-color-text-muted);">
          Current page: {{ page }}
        </div>
      </div>
    `}),parameters:{docs:{description:{story:"Skeleton state for 2s then resolves to real pagination automatically on mount."}}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  name: "Default",
  render: BaseRender,
  args: {
    page: 1,
    pageSize: 10,
    total: 137,
    variant: "default",
    showInfo: true,
    siblingCount: 1,
    loading: false
  }
}`,...t.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "Simple (Previous / Next)",
  render: BaseRender,
  args: {
    page: 3,
    pageSize: 25,
    total: 137,
    variant: "simple",
    showInfo: true,
    loading: false
  }
}`,...o.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  name: "Without Info Text",
  render: BaseRender,
  args: {
    page: 2,
    pageSize: 10,
    total: 42,
    variant: "default",
    showInfo: false,
    siblingCount: 1,
    loading: false
  }
}`,...r.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  name: "Wide Range Pagination",
  render: BaseRender,
  args: {
    page: 7,
    pageSize: 10,
    total: 240,
    variant: "default",
    showInfo: true,
    siblingCount: 2,
    loading: false
  }
}`,...s.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  name: "Loading",
  render: BaseRender,
  args: {
    page: 1,
    pageSize: 10,
    total: 137,
    variant: "default",
    showInfo: true,
    siblingCount: 1,
    loading: true
  }
}`,...i.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  name: "Loading → Loaded transition",
  render: () => ({
    components: {
      FusionPagination
    },
    setup() {
      const page = ref(1);
      const isLoading = ref(true);
      setTimeout(() => isLoading.value = false, 2000);
      return {
        page,
        isLoading
      };
    },
    template: \`
      <div style="padding:2rem; display:flex; flex-direction:column; gap:12px;">
        <FusionPagination
          v-model:page="page"
          :pageSize="10"
          :total="137"
          :loading="isLoading"
        />
        <div style="font-size:13px; color:var(--fu-color-text-muted);">
          Current page: {{ page }}
        </div>
      </div>
    \`
  }),
  parameters: {
    docs: {
      description: {
        story: "Skeleton state for 2s then resolves to real pagination automatically on mount."
      }
    }
  }
}`,...p.parameters?.docs?.source}}};const S=["Default","Simple","WithoutInfo","WideRange","Loading","LoadingTransition"];export{t as Default,i as Loading,p as LoadingTransition,o as Simple,s as WideRange,r as WithoutInfo,S as __namedExportsOrder,h as default};
