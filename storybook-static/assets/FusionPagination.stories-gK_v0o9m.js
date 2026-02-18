import{F as s}from"./FusionPagination-D4WnTVAn.js";import{r as p}from"./iframe-4anGkjM3.js";import"./FusionStatusDropdown-BAonsDQY.js";import"./chevron-down-pi8uy0el.js";import"./createLucideIcon-MAVkZFkt.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./chevron-right-BlwsVKhl.js";import"./preload-helper-Ct5FWWRu.js";const b={title:"Components/FusionPagination",component:s,tags:["autodocs"],argTypes:{page:{control:{type:"number"},description:"Current page (1-based index)",table:{category:"Props",type:{summary:"number"}}},pageSize:{control:{type:"number"},description:"Number of items per page",table:{category:"Props",type:{summary:"number"}}},total:{control:{type:"number"},description:"Total number of items",table:{category:"Props",type:{summary:"number"}}},variant:{control:{type:"select"},options:["default","simple"],description:"Pagination display variant",table:{category:"Props",defaultValue:{summary:"default"},type:{summary:'"default" | "simple"'}}},showInfo:{control:{type:"boolean"},description:"Show range info (e.g. 21–40 of 137)",table:{category:"Props",defaultValue:{summary:"true"},type:{summary:"boolean"}}},siblingCount:{control:{type:"number"},description:"Number of pages shown on each side of the active page",table:{category:"Props",defaultValue:{summary:"1"},type:{summary:"number"}}}},parameters:{docs:{description:{component:`
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
- Designed to pair with **FusionListView**

---

### Example Usage

\`\`\`vue
<script setup lang="ts">
import { ref } from "vue";
import FusionPagination from "@/components/pagination/FusionPagination.vue";

const page = ref(1);
<\/script>

<template>
  <FusionPagination
    v-model:page="page"
    :pageSize="10"
    :total="137"
  />
</template>
\`\`\`
        `}}}},o=r=>({components:{FusionPagination:s},setup(){const i=p(r.page);return{args:r,page:i}},template:`
    <div style="padding:2rem; display:flex; flex-direction:column; gap:12px;">
      <FusionPagination
        v-bind="args"
        v-model:page="page"
      />
      <div style="font-size:13px; color:var(--fu-color-text-muted);">
        Current page: {{ page }}
      </div>
    </div>
  `}),e={name:"Default",render:o,args:{page:1,pageSize:10,total:137,variant:"default",showInfo:!0,siblingCount:1}},a={name:"Simple (Previous / Next)",render:o,args:{page:3,pageSize:25,total:137,variant:"simple",showInfo:!0}},t={name:"Without Info Text",render:o,args:{page:2,pageSize:10,total:42,variant:"default",showInfo:!1,siblingCount:1}},n={name:"Wide Range Pagination",render:o,args:{page:7,pageSize:10,total:240,variant:"default",showInfo:!0,siblingCount:2}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  name: "Default",
  render: BaseRender,
  args: {
    page: 1,
    pageSize: 10,
    total: 137,
    variant: "default",
    showInfo: true,
    siblingCount: 1
  }
}`,...e.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  name: "Simple (Previous / Next)",
  render: BaseRender,
  args: {
    page: 3,
    pageSize: 25,
    total: 137,
    variant: "simple",
    showInfo: true
  }
}`,...a.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  name: "Without Info Text",
  render: BaseRender,
  args: {
    page: 2,
    pageSize: 10,
    total: 42,
    variant: "default",
    showInfo: false,
    siblingCount: 1
  }
}`,...t.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  name: "Wide Range Pagination",
  render: BaseRender,
  args: {
    page: 7,
    pageSize: 10,
    total: 240,
    variant: "default",
    showInfo: true,
    siblingCount: 2
  }
}`,...n.parameters?.docs?.source}}};const v=["Default","Simple","WithoutInfo","WideRange"];export{e as Default,a as Simple,n as WideRange,t as WithoutInfo,v as __namedExportsOrder,b as default};
