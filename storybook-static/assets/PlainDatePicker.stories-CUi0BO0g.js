import{F as r}from"./FusionPlainDatePicker-C-s0-Hkg.js";import{r as s}from"./iframe-D8JpMP6T.js";import"./dayjs.min-C8Kx736W.js";import"./_commonjsHelpers-CqkleIqs.js";import"./FusionTextInput-LCd-9LPA.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./chevron-right-TjplCL6K.js";import"./createLucideIcon-Dev6r3pU.js";import"./chevron-down-BzHStrbV.js";import"./preload-helper-Ct5FWWRu.js";const P={title:"Fusion/Forms/Date and Time/PlainDatePicker",component:r,tags:["autodocs"],argTypes:{formWrapperWidth:{control:{type:"text"},description:"Width of the date picker wrapper (e.g., '240px', '100%')",table:{category:"Props",defaultValue:{summary:"undefined"},type:{summary:"string | undefined"}}},mode:{control:{type:"select"},options:["single","multi"],description:"Selection mode — single date or multiple dates",table:{category:"Props",defaultValue:{summary:"single"},type:{summary:'"single" | "multi"'}}},variant:{control:{type:"select"},options:["date","date-time"],description:"Whether to show a time picker alongside the date",table:{category:"Props",defaultValue:{summary:"date"},type:{summary:'"date" | "date-time"'}}},fontSize:{control:{type:"text"},description:"Font size of the calendar (e.g. '0.75rem')",table:{category:"Props",defaultValue:{summary:"0.625rem"},type:{summary:"string"}}},disabledDates:{control:{type:"object"},description:'Array of dates to block from selection (e.g. dates that already have overrides). Format: `"YYYY-MM-DD"`',table:{category:"Props",defaultValue:{summary:"[]"},type:{summary:"string[]"}}}},parameters:{docs:{description:{component:`
A simple and accessible **date picker** with single and multi-select modes.

---

### Features

- Single or multi-date selection via \`mode\` prop
- Optional time picker via \`variant="date-time"\`
- Tap a selected date again to deselect it (multi mode)
- Block specific dates via \`disabled-dates\` — greyed out with strikethrough, unclickable
- Reactive with \`v-model\` — returns a \`string\` in single mode, \`string[]\` in multi mode
- Configurable wrapper width and font size

---

### Single mode (default)

\`\`\`vue
<script setup>
import { ref } from "vue";
const selectedDate = ref("2025-12-28");
<\/script>

<template>
  <FusionPlainDatePicker v-model="selectedDate" formWrapperWidth="240px" />
</template>
\`\`\`

---

### Multi mode

\`\`\`vue
<script setup>
import { ref } from "vue";
const selectedDates = ref(["2025-12-24", "2025-12-25", "2025-12-26"]);
<\/script>

<template>
  <FusionPlainDatePicker v-model="selectedDates" mode="multi" formWrapperWidth="240px" />
</template>
\`\`\`

---

### With disabled dates (e.g. existing overrides)

\`\`\`vue
<script setup>
import { ref } from "vue";
const selectedDates = ref([]);
const takenDates = ["2025-12-20", "2025-12-21", "2025-12-22"];
<\/script>

<template>
  <FusionPlainDatePicker
    v-model="selectedDates"
    mode="multi"
    :disabled-dates="takenDates"
    formWrapperWidth="240px"
  />
</template>
\`\`\`
        `}}}},n={name:"Single (default)",render:e=>({components:{PlainDatePicker:r},setup(){const t=s("2025-12-28");return{args:e,model:t}},template:`
      <div>
        <PlainDatePicker v-bind="args" v-model="model" />
        <p style="margin-top: 0.75rem; font-size: 0.85rem;">Selected: {{ model }}</p>
      </div>
    `}),args:{formWrapperWidth:"240px",mode:"single",variant:"date",disabledDates:[]}},a={name:"Multi-select",render:e=>({components:{PlainDatePicker:r},setup(){const t=s(["2025-12-24","2025-12-25","2025-12-26"]);return{args:e,model:t}},template:`
      <div>
        <PlainDatePicker v-bind="args" v-model="model" />
        <p style="margin-top: 0.75rem; font-size: 0.85rem;">
          Selected ({{ model.length }}): {{ model.join(", ") || "none" }}
        </p>
      </div>
    `}),args:{formWrapperWidth:"240px",mode:"multi",variant:"date",disabledDates:[]}},i={name:"Multi-select with disabled dates",render:e=>({components:{PlainDatePicker:r},setup(){const t=s(["2025-12-24","2025-12-26"]);return{args:e,model:t}},template:`
      <div>
        <PlainDatePicker v-bind="args" v-model="model" />
        <p style="margin-top: 0.75rem; font-size: 0.85rem;">
          Selected ({{ model.length }}): {{ model.join(", ") || "none" }}
        </p>
        <p style="margin-top: 0.25rem; font-size: 0.8rem; color: #888;">
          Disabled (already overridden): {{ args.disabledDates.join(", ") }}
        </p>
      </div>
    `}),args:{formWrapperWidth:"240px",mode:"multi",variant:"date",disabledDates:["2025-12-20","2025-12-21","2025-12-22","2025-12-25"]}},o={name:"With time picker",render:e=>({components:{PlainDatePicker:r},setup(){const t=s("2025-12-28T09:00");return{args:e,model:t}},template:`
      <div>
        <PlainDatePicker v-bind="args" v-model="model" />
        <p style="margin-top: 0.75rem; font-size: 0.85rem;">Selected: {{ model }}</p>
      </div>
    `}),args:{formWrapperWidth:"240px",mode:"single",variant:"date-time",disabledDates:[]}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  name: "Single (default)",
  render: args => ({
    components: {
      PlainDatePicker
    },
    setup() {
      const model = ref("2025-12-28");
      return {
        args,
        model
      };
    },
    template: \`
      <div>
        <PlainDatePicker v-bind="args" v-model="model" />
        <p style="margin-top: 0.75rem; font-size: 0.85rem;">Selected: {{ model }}</p>
      </div>
    \`
  }),
  args: {
    formWrapperWidth: "240px",
    mode: "single",
    variant: "date",
    disabledDates: []
  }
}`,...n.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  name: "Multi-select",
  render: args => ({
    components: {
      PlainDatePicker
    },
    setup() {
      const model = ref(["2025-12-24", "2025-12-25", "2025-12-26"]);
      return {
        args,
        model
      };
    },
    template: \`
      <div>
        <PlainDatePicker v-bind="args" v-model="model" />
        <p style="margin-top: 0.75rem; font-size: 0.85rem;">
          Selected ({{ model.length }}): {{ model.join(", ") || "none" }}
        </p>
      </div>
    \`
  }),
  args: {
    formWrapperWidth: "240px",
    mode: "multi",
    variant: "date",
    disabledDates: []
  }
}`,...a.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  name: "Multi-select with disabled dates",
  render: args => ({
    components: {
      PlainDatePicker
    },
    setup() {
      const model = ref(["2025-12-24", "2025-12-26"]);
      return {
        args,
        model
      };
    },
    template: \`
      <div>
        <PlainDatePicker v-bind="args" v-model="model" />
        <p style="margin-top: 0.75rem; font-size: 0.85rem;">
          Selected ({{ model.length }}): {{ model.join(", ") || "none" }}
        </p>
        <p style="margin-top: 0.25rem; font-size: 0.8rem; color: #888;">
          Disabled (already overridden): {{ args.disabledDates.join(", ") }}
        </p>
      </div>
    \`
  }),
  args: {
    formWrapperWidth: "240px",
    mode: "multi",
    variant: "date",
    disabledDates: ["2025-12-20", "2025-12-21", "2025-12-22", "2025-12-25"]
  }
}`,...i.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "With time picker",
  render: args => ({
    components: {
      PlainDatePicker
    },
    setup() {
      const model = ref("2025-12-28T09:00");
      return {
        args,
        model
      };
    },
    template: \`
      <div>
        <PlainDatePicker v-bind="args" v-model="model" />
        <p style="margin-top: 0.75rem; font-size: 0.85rem;">Selected: {{ model }}</p>
      </div>
    \`
  }),
  args: {
    formWrapperWidth: "240px",
    mode: "single",
    variant: "date-time",
    disabledDates: []
  }
}`,...o.parameters?.docs?.source}}};const y=["Default","MultiSelect","MultiSelectWithDisabled","WithTimePicker"];export{n as Default,a as MultiSelect,i as MultiSelectWithDisabled,o as WithTimePicker,y as __namedExportsOrder,P as default};
