import{F as s}from"./FusionAutocomplete-o9jjGkFG.js";import{r as n}from"./iframe-4anGkjM3.js";import{U as u}from"./user-C5GbdiJV.js";import{B as f,M as h}from"./map-pin-1YJTodNf.js";import"./FusionTextInput-B7zbcKHf.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./preload-helper-Ct5FWWRu.js";import"./createLucideIcon-MAVkZFkt.js";const U={title:"Components/FusionAutocomplete",component:s,tags:["autodocs"],parameters:{docs:{description:{component:`
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
        `}}}},i=[{label:"John Doe",value:"john",type:"icon",icon:u},{label:"Jane Smith",value:"jane",type:"icon",icon:u},{label:"Marketing Team",value:"marketing",type:"icon",icon:f},{label:"London Region",value:"london",type:"icon",icon:h},{label:"New York Region",value:"ny",type:"icon",icon:h}],v=[{label:"Alice",value:"a",type:"image",imageUrl:"/src/stories/assets/avatars/d1499909450ba526d5297e3ebc7f6d07.png"},{label:"Ben",value:"b",type:"image",imageUrl:"/src/stories/assets/avatars/70a23294beb91b4ad5a439e2c6ea5a6d.png"},{label:"Charlie",value:"c",type:"image",imageUrl:"/src/stories/assets/avatars/cae99bb14b21ec41ecf03b58f59ff292.png"},{label:"Diane",value:"d",type:"image",imageUrl:"/src/stories/assets/avatars/119d9abaee7a1e987571f0fe776bd1a5.png"},{label:"Eli",value:"e",type:"image",imageUrl:"/src/stories/assets/avatars/9854663aec5741bbbe84290b6edc0aed.png"}],a={args:{options:i,placeholder:"Select an option",searchPlaceholder:"Search...",noResultsText:"No results found",size:"sm"},render:e=>({components:{FusionAutocomplete:s},setup(){const o=n(null);return{args:e,model:o}},template:`
      <FusionAutocomplete v-bind="args" v-model="model" />
      <p class="mt-2">Selected: {{ model }}</p>
    `})},t={args:{options:v,placeholder:"Select a teammate",searchPlaceholder:"Search people...",size:"lg"},render:e=>({components:{FusionAutocomplete:s},setup(){const o=n(null);return{args:e,model:o}},template:`
      <FusionAutocomplete v-bind="args" v-model="model" />
      <p class="mt-2">Selected: {{ model?.label }}</p>
    `})},r={args:{options:i,multiple:!0,placeholder:"Add collaborators or regions",searchPlaceholder:"Search to add...",size:"sm"},render:e=>({components:{FusionAutocomplete:s},setup(){const o=n([]);return{args:e,model:o}},template:`
      <FusionAutocomplete v-bind="args" v-model="model" />
      <p class="mt-2">Selected: {{ model.map(i => i.label).join(', ') }}</p>
    `})},l={args:{async:!0,placeholder:"Search users",searchPlaceholder:"Type to search...",minSearchLength:2,size:"md"},render:e=>({components:{FusionAutocomplete:s},setup(){const o=n(null),m=n([]),p=n(!1);async function g(b){p.value=!0,await new Promise(d=>setTimeout(d,600)),m.value=i.filter(d=>d.label.toLowerCase().includes(b.toLowerCase())),p.value=!1}return{args:e,model:o,options:m,loading:p,search:g}},template:`
      <FusionAutocomplete
        v-bind="args"
        v-model="model"
        :options="options"
        :loading="loading"
        @search="search"
      />
      <p class="mt-2">Selected: {{ model }}</p>
    `})},c={args:{options:i,placeholder:"Select an option",label:"Assigned user",error:"This field is required",size:"md"},render:e=>({components:{FusionAutocomplete:s},setup(){const o=n(null);return{args:e,model:o}},template:`
      <FusionAutocomplete v-bind="args" v-model="model" />
      <p class="mt-2">Selected: {{ model }}</p>
    `})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...a.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...t.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...r.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
}`,...l.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
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
}`,...c.parameters?.docs?.source}}};const z=["Default","WithAvatars","MultipleSelect","AsyncSearch","WithError"];export{l as AsyncSearch,a as Default,r as MultipleSelect,t as WithAvatars,c as WithError,z as __namedExportsOrder,U as default};
