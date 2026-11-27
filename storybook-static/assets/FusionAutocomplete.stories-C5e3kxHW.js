import{F as a}from"./FusionAutocomplete-Cy4NuD5z.js";import{r as n}from"./iframe-DLJy-DHW.js";import{U as v}from"./user-C3sMijFT.js";import{B as A,M as w}from"./map-pin-CQLMr-6r.js";import"./FusionTextInput-Cj_2MCld.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./FuAvatar-BRVPIokn.js";import"./preload-helper-Ct5FWWRu.js";import"./createLucideIcon-CURt8gZv.js";const U={title:"Fusion/Forms/Text/FusionAutocomplete",component:a,tags:["autodocs"],parameters:{docs:{description:{component:`
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
        `}}}},t=[{label:"John Doe",value:"john",type:"icon",icon:v},{label:"Jane Smith",value:"jane",type:"icon",icon:v},{label:"Marketing Team",value:"marketing",type:"icon",icon:A},{label:"London Region",value:"london",type:"image"},{label:"New York Region",value:"ny",type:"icon",icon:w}],F=[{label:"Jane Cooper",value:"jane",type:"image",imageUrl:"https://picsum.photos/seed/jane/40/40"},{label:"Wade Warren",value:"wade",type:"image",imageUrl:"https://picsum.photos/seed/wade/40/40"},{label:"Esther Howard",value:"esther",type:"image"},{label:"Cameron Williamson",value:"cam",type:"image"},{label:"Brooklyn Simmons",value:"brook",type:"image",imageUrl:"https://picsum.photos/seed/brook/40/40"},{label:"Leslie Alexander",value:"leslie",type:"image"},{label:"Jenny Wilson",value:"jenny",type:"image",imageUrl:"https://picsum.photos/seed/jenny/40/40"},{label:"Guy Hawkins",value:"guy",type:"image"}],y=[{key:"people",label:"People",options:[{label:"Jane Cooper",value:"jane",type:"image",imageUrl:"https://picsum.photos/seed/jane/40/40"},{label:"Wade Warren",value:"wade",type:"image",imageUrl:"https://picsum.photos/seed/wade/40/40"},{label:"Esther Howard",value:"esther",type:"image"}]},{key:"teams",label:"Teams",options:[{label:"Marketing",value:"marketing",type:"image"},{label:"Jane's Team",value:"jane",type:"image"},{label:"London Region",value:"london",type:"image"}]}],r={args:{options:t,placeholder:"Select an option",searchPlaceholder:"Search...",noResultsText:"No results found",size:"sm"},render:e=>({components:{FusionAutocomplete:a},setup(){const o=n(null);return{args:e,model:o}},template:`
      <FusionAutocomplete v-bind="args" v-model="model" />
      <p class="mt-2">Selected: {{ model }}</p>
    `})},l={args:{options:F,placeholder:"Select a teammate",searchPlaceholder:"Search people...",size:"lg"},render:e=>({components:{FusionAutocomplete:a},setup(){const o=n(null);return{args:e,model:o}},template:`
      <FusionAutocomplete v-bind="args" v-model="model" />
      <p class="mt-2">Selected: {{ model?.label }}</p>
    `})},i={args:{options:t,multiple:!0,placeholder:"Add collaborators or regions",searchPlaceholder:"Search to add...",size:"sm"},render:e=>({components:{FusionAutocomplete:a},setup(){const o=n([]);return{args:e,model:o}},template:`
      <FusionAutocomplete v-bind="args" v-model="model" />
      <p class="mt-2">Selected: {{ model.map(i => i.label).join(', ') }}</p>
    `})},p={args:{async:!0,placeholder:"Search users",searchPlaceholder:"Type to search...",minSearchLength:2,size:"md"},render:e=>({components:{FusionAutocomplete:a},setup(){const o=n(null),b=n([]),h=n(!1);async function f(S){h.value=!0,await new Promise(g=>setTimeout(g,600)),b.value=t.filter(g=>g.label.toLowerCase().includes(S.toLowerCase())),h.value=!1}return{args:e,model:o,options:b,loading:h,search:f}},template:`
      <FusionAutocomplete
        v-bind="args"
        v-model="model"
        :options="options"
        :loading="loading"
        @search="search"
      />
      <p class="mt-2">Selected: {{ model }}</p>
    `})},m={args:{options:t,placeholder:"Select an option",label:"Assigned user",error:"This field is required",size:"md"},render:e=>({components:{FusionAutocomplete:a},setup(){const o=n(null);return{args:e,model:o}},template:`
      <FusionAutocomplete v-bind="args" v-model="model" />
      <p class="mt-2">Selected: {{ model }}</p>
    `})},c={args:{options:[{label:"Jane Cooper",value:"jane",type:"image",imageUrl:"https://picsum.photos/seed/jane/40/40",email:"jane.cooper@acme.com"},{label:"Wade Warren",value:"wade",type:"image",imageUrl:"https://picsum.photos/seed/wade/40/40",email:"wade.warren@acme.com"},{label:"Esther Howard",value:"esther",type:"image",email:"esther.howard@acme.com"},{label:"Cameron Williamson",value:"cam",type:"image",email:"cam.williamson@acme.com"},{label:"Brooklyn Simmons",value:"brook",type:"image",imageUrl:"https://picsum.photos/seed/brook/40/40",email:"brooklyn.simmons@acme.com"}],placeholder:"Select a contact",searchPlaceholder:"Search contacts...",size:"md",meta:"email"},render:e=>({components:{FusionAutocomplete:a},setup(){const o=n(null);return{args:e,model:o}},template:`
      <FusionAutocomplete v-bind="args" v-model="model" />
      <p class="mt-2" v-if="model">Selected: {{ model.label }} — {{ model.email }}</p>
    `})},d={args:{groups:y,placeholder:"Assign to...",searchPlaceholder:"Search people or teams...",label:"Assignee",size:"md"},render:e=>({components:{FusionAutocomplete:a},setup(){const o=n(null);return{args:e,model:o}},template:`
      <FusionAutocomplete v-bind="args" v-model="model" />
      <p class="mt-2" v-if="model">Selected: {{ model.label }} (from "{{ model.groupKey }}" group)</p>
    `})},u={args:{groups:y,multiple:!0,placeholder:"Add people or teams",searchPlaceholder:"Search to add...",size:"sm"},render:e=>({components:{FusionAutocomplete:a},setup(){const o=n([]);return{args:e,model:o}},template:`
      <FusionAutocomplete v-bind="args" v-model="model" />
      <p class="mt-2">
        Selected: {{ model.map(i => \`\${i.label} (\${i.groupKey})\`).join(', ') }}
      </p>
    `})},s={parameters:{docs:{description:{story:"`required` adds the red `*` after the label, matching FusionTextInput, and sets `aria-required` on the trigger. It's visual only: no validation."}}},render:()=>({components:{FusionAutocomplete:a},setup(){const e=n(null),o=n([]);return{pipeline:e,people:o,baseOptions:t}},template:`
      <div style="display: flex; flex-direction: column; gap: 16px; max-width: 320px">
        <FusionAutocomplete v-model="pipeline" :options="baseOptions" label="Pipeline" required size="sm" />
        <FusionAutocomplete v-model="people" :options="baseOptions" label="Team members" required multiple size="md" />
        <FusionAutocomplete v-model="pipeline" :options="baseOptions" label="Stage (input variant)" required variant="input" size="sm" />
      </div>
    `})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...r.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
}`,...l.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
}`,...i.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
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
}`,...c.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
}`,...d.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
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
}`,...u.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "\`required\` adds the red \`*\` after the label, matching FusionTextInput, and sets \`aria-required\` on the trigger. It's visual only: no validation."
      }
    }
  },
  render: () => ({
    components: {
      FusionAutocomplete
    },
    setup() {
      const pipeline = ref(null);
      const people = ref([]);
      return {
        pipeline,
        people,
        baseOptions
      };
    },
    template: \`
      <div style="display: flex; flex-direction: column; gap: 16px; max-width: 320px">
        <FusionAutocomplete v-model="pipeline" :options="baseOptions" label="Pipeline" required size="sm" />
        <FusionAutocomplete v-model="people" :options="baseOptions" label="Team members" required multiple size="md" />
        <FusionAutocomplete v-model="pipeline" :options="baseOptions" label="Stage (input variant)" required variant="input" size="sm" />
      </div>
    \`
  })
}`,...s.parameters?.docs?.source},description:{story:`Required: a red * after the label (same as FusionTextInput) and aria-required on the trigger.
Visual only: validation stays in your form.`,...s.parameters?.docs?.description}}};const M=["Default","WithAvatars","MultipleSelect","AsyncSearch","WithError","WithMeta","GroupedOptions","GroupedMultipleSelect","Required"];export{p as AsyncSearch,r as Default,u as GroupedMultipleSelect,d as GroupedOptions,i as MultipleSelect,s as Required,l as WithAvatars,m as WithError,c as WithMeta,M as __namedExportsOrder,U as default};
