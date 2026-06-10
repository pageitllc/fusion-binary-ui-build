import{F as a}from"./FusionAutocomplete-BcNl-XFr.js";import{r as n}from"./iframe-D3vfv6YP.js";import{U as h}from"./user-DV1Lykeh.js";import{B as v,M as g}from"./map-pin-DyqiZuN6.js";import"./FusionTextInput-WcBW8h59.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./FuAvatar-z2FOHrlT.js";import"./preload-helper-Ct5FWWRu.js";import"./createLucideIcon-DKFlsGA7.js";const j={title:"Components/FusionAutocomplete",component:a,tags:["autodocs"],parameters:{docs:{description:{component:`
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
        `}}}},m=[{label:"John Doe",value:"john",type:"icon",icon:h},{label:"Jane Smith",value:"jane",type:"icon",icon:h},{label:"Marketing Team",value:"marketing",type:"icon",icon:v},{label:"London Region",value:"london",type:"icon",icon:g},{label:"New York Region",value:"ny",type:"icon",icon:g}],f=[{label:"Jane Cooper",value:"jane",type:"image",imageUrl:"https://picsum.photos/seed/jane/40/40"},{label:"Wade Warren",value:"wade",type:"image",imageUrl:"https://picsum.photos/seed/wade/40/40"},{label:"Esther Howard",value:"esther",type:"image"},{label:"Cameron Williamson",value:"cam",type:"image"},{label:"Brooklyn Simmons",value:"brook",type:"image",imageUrl:"https://picsum.photos/seed/brook/40/40"},{label:"Leslie Alexander",value:"leslie",type:"image"},{label:"Jenny Wilson",value:"jenny",type:"image",imageUrl:"https://picsum.photos/seed/jenny/40/40"},{label:"Guy Hawkins",value:"guy",type:"image"}],s={args:{options:m,placeholder:"Select an option",searchPlaceholder:"Search...",noResultsText:"No results found",size:"sm"},render:e=>({components:{FusionAutocomplete:a},setup(){const o=n(null);return{args:e,model:o}},template:`
      <FusionAutocomplete v-bind="args" v-model="model" />
      <p class="mt-2">Selected: {{ model }}</p>
    `})},t={args:{options:f,placeholder:"Select a teammate",searchPlaceholder:"Search people...",size:"lg"},render:e=>({components:{FusionAutocomplete:a},setup(){const o=n(null);return{args:e,model:o}},template:`
      <FusionAutocomplete v-bind="args" v-model="model" />
      <p class="mt-2">Selected: {{ model?.label }}</p>
    `})},l={args:{options:m,multiple:!0,placeholder:"Add collaborators or regions",searchPlaceholder:"Search to add...",size:"sm"},render:e=>({components:{FusionAutocomplete:a},setup(){const o=n([]);return{args:e,model:o}},template:`
      <FusionAutocomplete v-bind="args" v-model="model" />
      <p class="mt-2">Selected: {{ model.map(i => i.label).join(', ') }}</p>
    `})},r={args:{async:!0,placeholder:"Search users",searchPlaceholder:"Type to search...",minSearchLength:2,size:"md"},render:e=>({components:{FusionAutocomplete:a},setup(){const o=n(null),u=n([]),p=n(!1);async function b(y){p.value=!0,await new Promise(d=>setTimeout(d,600)),u.value=m.filter(d=>d.label.toLowerCase().includes(y.toLowerCase())),p.value=!1}return{args:e,model:o,options:u,loading:p,search:b}},template:`
      <FusionAutocomplete
        v-bind="args"
        v-model="model"
        :options="options"
        :loading="loading"
        @search="search"
      />
      <p class="mt-2">Selected: {{ model }}</p>
    `})},i={args:{options:m,placeholder:"Select an option",label:"Assigned user",error:"This field is required",size:"md"},render:e=>({components:{FusionAutocomplete:a},setup(){const o=n(null);return{args:e,model:o}},template:`
      <FusionAutocomplete v-bind="args" v-model="model" />
      <p class="mt-2">Selected: {{ model }}</p>
    `})},c={args:{options:[{label:"Jane Cooper",value:"jane",type:"image",imageUrl:"https://picsum.photos/seed/jane/40/40",email:"jane.cooper@acme.com"},{label:"Wade Warren",value:"wade",type:"image",imageUrl:"https://picsum.photos/seed/wade/40/40",email:"wade.warren@acme.com"},{label:"Esther Howard",value:"esther",type:"image",email:"esther.howard@acme.com"},{label:"Cameron Williamson",value:"cam",type:"image",email:"cam.williamson@acme.com"},{label:"Brooklyn Simmons",value:"brook",type:"image",imageUrl:"https://picsum.photos/seed/brook/40/40",email:"brooklyn.simmons@acme.com"}],placeholder:"Select a contact",searchPlaceholder:"Search contacts...",size:"md",meta:"email"},render:e=>({components:{FusionAutocomplete:a},setup(){const o=n(null);return{args:e,model:o}},template:`
      <FusionAutocomplete v-bind="args" v-model="model" />
      <p class="mt-2" v-if="model">Selected: {{ model.label }} — {{ model.email }}</p>
    `})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...t.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
}`,...l.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...r.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
}`,...i.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    options: [{
      label: "Jane Cooper",
      value: "jane",
      type: "image",
      imageUrl: "https://picsum.photos/seed/jane/40/40",
      email: "jane.cooper@acme.com"
    }, {
      label: "Wade Warren",
      value: "wade",
      type: "image",
      imageUrl: "https://picsum.photos/seed/wade/40/40",
      email: "wade.warren@acme.com"
    }, {
      label: "Esther Howard",
      value: "esther",
      type: "image",
      email: "esther.howard@acme.com"
    }, {
      label: "Cameron Williamson",
      value: "cam",
      type: "image",
      email: "cam.williamson@acme.com"
    }, {
      label: "Brooklyn Simmons",
      value: "brook",
      type: "image",
      imageUrl: "https://picsum.photos/seed/brook/40/40",
      email: "brooklyn.simmons@acme.com"
    }],
    placeholder: "Select a contact",
    searchPlaceholder: "Search contacts...",
    size: "md",
    meta: "email"
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
      <p class="mt-2" v-if="model">Selected: {{ model.label }} — {{ model.email }}</p>
    \`
  })
}`,...c.parameters?.docs?.source}}};const O=["Default","WithAvatars","MultipleSelect","AsyncSearch","WithError","WithMeta"];export{r as AsyncSearch,s as Default,l as MultipleSelect,t as WithAvatars,i as WithError,c as WithMeta,O as __namedExportsOrder,j as default};
