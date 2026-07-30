import{F as a}from"./FusionAutocomplete-qoJuwe7q.js";import{r as n}from"./iframe-D33anl-W.js";import{U as b}from"./user-CSGLuGNz.js";import{B as S,M as w}from"./map-pin-BV0x4GbT.js";import"./FusionTextInput-B7r6Jz1s.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./FuAvatar-iBKHnci-.js";import"./preload-helper-Ct5FWWRu.js";import"./createLucideIcon-DaJMaH6u.js";const C={title:"Components/FusionAutocomplete",component:a,tags:["autodocs"],parameters:{docs:{description:{component:`
The **FusionAutocomplete** component provides a flexible searchable select input that supports both **client-side** and **server-side (async)** search.

It is designed to scale from **small static lists** to **very large datasets (100k+ records)** without performance issues.

---

## Features

- Single or multiple selection  
- Optional search bar with auto-focus on open  
- Supports **client-side filtering** or **async backend search**  
- Teleported dropdown body  
- Supports **icons or image avatars**  
- Supports **grouped sections** with headers  
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

## Grouped Options

Pass \`groups\` instead of \`options\` to render sections with their own
headers (e.g. **People** + **Teams** in one dropdown) — the pattern used by
Slack's @mention picker, GitHub's reviewer picker, Linear's assignee
dropdown, etc.

- Each group is \`{ key, label, options }\`
- Search filters within each group; a group with zero matches is hidden entirely
- Two different groups can safely reuse the same \`value\` — selection is
  tracked by \`(value, group key)\` together, not \`value\` alone, so there's no
  collision risk
- If both \`groups\` and \`options\` are passed, \`groups\` takes priority

\`\`\`vue
<script setup>
import { ref } from "vue";
import FusionAutocomplete from "fusion-binary";

const groups = [
  {
    key: "people",
    label: "People",
    options: [
      { label: "Jane Cooper", value: "jane", type: "image", imageUrl: "..." },
      { label: "Wade Warren", value: "wade", type: "image", imageUrl: "..." },
    ],
  },
  {
    key: "teams",
    label: "Teams",
    options: [
      { label: "Marketing", value: "marketing", type: "icon", icon: Briefcase },
      { label: "Engineering", value: "engineering", type: "icon", icon: Briefcase },
    ],
  },
];

const model = ref(null);
<\/script>

<template>
  <FusionAutocomplete :groups="groups" v-model="model" placeholder="Assign to..." />
</template>
\`\`\`

---
        `}}}},d=[{label:"John Doe",value:"john",type:"icon",icon:b},{label:"Jane Smith",value:"jane",type:"icon",icon:b},{label:"Marketing Team",value:"marketing",type:"icon",icon:S},{label:"London Region",value:"london",type:"image"},{label:"New York Region",value:"ny",type:"icon",icon:w}],A=[{label:"Jane Cooper",value:"jane",type:"image",imageUrl:"https://picsum.photos/seed/jane/40/40"},{label:"Wade Warren",value:"wade",type:"image",imageUrl:"https://picsum.photos/seed/wade/40/40"},{label:"Esther Howard",value:"esther",type:"image"},{label:"Cameron Williamson",value:"cam",type:"image"},{label:"Brooklyn Simmons",value:"brook",type:"image",imageUrl:"https://picsum.photos/seed/brook/40/40"},{label:"Leslie Alexander",value:"leslie",type:"image"},{label:"Jenny Wilson",value:"jenny",type:"image",imageUrl:"https://picsum.photos/seed/jenny/40/40"},{label:"Guy Hawkins",value:"guy",type:"image"}],y=[{key:"people",label:"People",options:[{label:"Jane Cooper",value:"jane",type:"image",imageUrl:"https://picsum.photos/seed/jane/40/40"},{label:"Wade Warren",value:"wade",type:"image",imageUrl:"https://picsum.photos/seed/wade/40/40"},{label:"Esther Howard",value:"esther",type:"image"}]},{key:"teams",label:"Teams",options:[{label:"Marketing",value:"marketing",type:"image"},{label:"Jane's Team",value:"jane",type:"image"},{label:"London Region",value:"london",type:"image"}]}],s={args:{options:d,placeholder:"Select an option",searchPlaceholder:"Search...",noResultsText:"No results found",size:"sm"},render:e=>({components:{FusionAutocomplete:a},setup(){const o=n(null);return{args:e,model:o}},template:`
      <FusionAutocomplete v-bind="args" v-model="model" />
      <p class="mt-2">Selected: {{ model }}</p>
    `})},t={args:{options:A,placeholder:"Select a teammate",searchPlaceholder:"Search people...",size:"lg"},render:e=>({components:{FusionAutocomplete:a},setup(){const o=n(null);return{args:e,model:o}},template:`
      <FusionAutocomplete v-bind="args" v-model="model" />
      <p class="mt-2">Selected: {{ model?.label }}</p>
    `})},l={args:{options:d,multiple:!0,placeholder:"Add collaborators or regions",searchPlaceholder:"Search to add...",size:"sm"},render:e=>({components:{FusionAutocomplete:a},setup(){const o=n([]);return{args:e,model:o}},template:`
      <FusionAutocomplete v-bind="args" v-model="model" />
      <p class="mt-2">Selected: {{ model.map(i => i.label).join(', ') }}</p>
    `})},r={args:{async:!0,placeholder:"Search users",searchPlaceholder:"Type to search...",minSearchLength:2,size:"md"},render:e=>({components:{FusionAutocomplete:a},setup(){const o=n(null),g=n([]),u=n(!1);async function v(f){u.value=!0,await new Promise(h=>setTimeout(h,600)),g.value=d.filter(h=>h.label.toLowerCase().includes(f.toLowerCase())),u.value=!1}return{args:e,model:o,options:g,loading:u,search:v}},template:`
      <FusionAutocomplete
        v-bind="args"
        v-model="model"
        :options="options"
        :loading="loading"
        @search="search"
      />
      <p class="mt-2">Selected: {{ model }}</p>
    `})},i={args:{options:d,placeholder:"Select an option",label:"Assigned user",error:"This field is required",size:"md"},render:e=>({components:{FusionAutocomplete:a},setup(){const o=n(null);return{args:e,model:o}},template:`
      <FusionAutocomplete v-bind="args" v-model="model" />
      <p class="mt-2">Selected: {{ model }}</p>
    `})},p={args:{options:[{label:"Jane Cooper",value:"jane",type:"image",imageUrl:"https://picsum.photos/seed/jane/40/40",email:"jane.cooper@acme.com"},{label:"Wade Warren",value:"wade",type:"image",imageUrl:"https://picsum.photos/seed/wade/40/40",email:"wade.warren@acme.com"},{label:"Esther Howard",value:"esther",type:"image",email:"esther.howard@acme.com"},{label:"Cameron Williamson",value:"cam",type:"image",email:"cam.williamson@acme.com"},{label:"Brooklyn Simmons",value:"brook",type:"image",imageUrl:"https://picsum.photos/seed/brook/40/40",email:"brooklyn.simmons@acme.com"}],placeholder:"Select a contact",searchPlaceholder:"Search contacts...",size:"md",meta:"email"},render:e=>({components:{FusionAutocomplete:a},setup(){const o=n(null);return{args:e,model:o}},template:`
      <FusionAutocomplete v-bind="args" v-model="model" />
      <p class="mt-2" v-if="model">Selected: {{ model.label }} — {{ model.email }}</p>
    `})},m={args:{groups:y,placeholder:"Assign to...",searchPlaceholder:"Search people or teams...",label:"Assignee",size:"md"},render:e=>({components:{FusionAutocomplete:a},setup(){const o=n(null);return{args:e,model:o}},template:`
      <FusionAutocomplete v-bind="args" v-model="model" />
      <p class="mt-2" v-if="model">Selected: {{ model.label }} (from "{{ model.groupKey }}" group)</p>
    `})},c={args:{groups:y,multiple:!0,placeholder:"Add people or teams",searchPlaceholder:"Search to add...",size:"sm"},render:e=>({components:{FusionAutocomplete:a},setup(){const o=n([]);return{args:e,model:o}},template:`
      <FusionAutocomplete v-bind="args" v-model="model" />
      <p class="mt-2">
        Selected: {{ model.map(i => \`\${i.label} (\${i.groupKey})\`).join(', ') }}
      </p>
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
}`,...i.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    groups: peopleTeamsGroups,
    placeholder: "Assign to...",
    searchPlaceholder: "Search people or teams...",
    label: "Assignee",
    size: "md"
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
      <p class="mt-2" v-if="model">Selected: {{ model.label }} (from "{{ model.groupKey }}" group)</p>
    \`
  })
}`,...m.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    groups: peopleTeamsGroups,
    multiple: true,
    placeholder: "Add people or teams",
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
      <p class="mt-2">
        Selected: {{ model.map(i => \\\`\\\${i.label} (\\\${i.groupKey})\\\`).join(', ') }}
      </p>
    \`
  })
}`,...c.parameters?.docs?.source}}};const M=["Default","WithAvatars","MultipleSelect","AsyncSearch","WithError","WithMeta","GroupedOptions","GroupedMultipleSelect"];export{r as AsyncSearch,s as Default,c as GroupedMultipleSelect,m as GroupedOptions,l as MultipleSelect,t as WithAvatars,i as WithError,p as WithMeta,M as __namedExportsOrder,C as default};
