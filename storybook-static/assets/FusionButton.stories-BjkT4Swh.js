import{r as d}from"./iframe-D3vfv6YP.js";import{F as e}from"./FusionRadio-D5kjNvGU.js";import"./preload-helper-Ct5FWWRu.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const p={title:"Fusion/Forms/FusionRadio",component:e,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:`


FusionRadio is a controlled radio input component built for the Fusion Design System.

It allows selecting **one option from a group**.

---

## Features

- Multiple sizes (xs → xl)
- Controlled \`modelValue\`
- Disabled state
- Slot-based label
- Clean circular UI
- Fully TypeScript safe

---

## Basic Usage

\`\`\`vue
<script setup lang="ts">
import { ref } from "vue"
import FusionRadio from "@/components/radio/FusionRadio.vue"

const selected = ref("sm")
<\/script>

<template>
  <FusionRadio v-model="selected" value="sm">
    Size 'sm'
  </FusionRadio>
</template>
\`\`\`

---

## Radio Group Example

\`\`\`vue
<div style="display:flex; gap:16px;">
  <FusionRadio v-model="selected" value="xs">XS</FusionRadio>
  <FusionRadio v-model="selected" value="sm">SM</FusionRadio>
  <FusionRadio v-model="selected" value="md">MD</FusionRadio>
</div>
\`\`\`
        `}}},argTypes:{value:{control:"text",description:"The value associated with this radio option."},size:{control:"select",options:["xs","sm","md","lg","xl"],description:"Controls the visual size of the radio."},disabled:{control:"boolean",description:"Disables the radio option."}}},o={args:{value:"sm",size:"md",disabled:!1},render:s=>({components:{FusionRadio:e},setup(){const i=d("sm");return{args:s,selected:i}},template:`
      <div>
        <FusionRadio
          :modelValue="selected"
          @update:modelValue="selected = $event"
          :value="args.value"
          :size="args.size"
          :disabled="args.disabled"
        >
          Radio Option
        </FusionRadio>

        <div style="margin-top:16px; font-size:14px;">
          Selected: {{ selected }}
        </div>
      </div>
    `})},l={render:()=>({components:{FusionRadio:e},setup(){return{selected:d("md")}},template:`
      <div>
        <div style="display:flex; gap:24px;">
          <FusionRadio
            :modelValue="selected"
            @update:modelValue="selected = $event"
            value="xs"
          >
            XS
          </FusionRadio>

          <FusionRadio
            :modelValue="selected"
            @update:modelValue="selected = $event"
            value="sm"
          >
            SM
          </FusionRadio>

          <FusionRadio
            :modelValue="selected"
            @update:modelValue="selected = $event"
            value="md"
          >
            MD
          </FusionRadio>

          <FusionRadio
            :modelValue="selected"
            @update:modelValue="selected = $event"
            value="lg"
          >
            LG
          </FusionRadio>
        </div>

        <div style="margin-top:16px;">
          Selected: {{ selected }}
        </div>
      </div>
    `})},n={render:()=>({components:{FusionRadio:e},setup(){return{selected:d("md")}},template:`
      <div style="display:flex; gap:24px; align-items:center;">
        <FusionRadio :modelValue="selected" @update:modelValue="selected = $event" value="xs" size="xs">XS</FusionRadio>
        <FusionRadio :modelValue="selected" @update:modelValue="selected = $event" value="sm" size="sm">SM</FusionRadio>
        <FusionRadio :modelValue="selected" @update:modelValue="selected = $event" value="md" size="md">MD</FusionRadio>
        <FusionRadio :modelValue="selected" @update:modelValue="selected = $event" value="lg" size="lg">LG</FusionRadio>
        <FusionRadio :modelValue="selected" @update:modelValue="selected = $event" value="xl" size="xl">XL</FusionRadio>
      </div>
    `})},a={render:()=>({components:{FusionRadio:e},setup(){return{selected:d("sm")}},template:`
      <div style="display:flex; gap:24px;">
        <FusionRadio
          :modelValue="selected"
          @update:modelValue="selected = $event"
          value="sm"
        >
          Enabled
        </FusionRadio>

        <FusionRadio
          :modelValue="selected"
          @update:modelValue="selected = $event"
          value="md"
          disabled
        >
          Disabled
        </FusionRadio>
      </div>
    `})},t={render:()=>({components:{FusionRadio:e},setup(){return{selected:d("sm")}},template:`
      <div style="
        background:#111827;
        padding:40px;
        border-radius:16px;
        display:flex;
        gap:40px;
        align-items:center;
      ">
        <FusionRadio :modelValue="selected" @update:modelValue="selected = $event" value="xs" size="lg">
          Size 'xs'
        </FusionRadio>

        <FusionRadio :modelValue="selected" @update:modelValue="selected = $event" value="sm" size="lg">
          Size 'sm'
        </FusionRadio>

        <FusionRadio :modelValue="selected" @update:modelValue="selected = $event" value="md" size="lg">
          Size 'md'
        </FusionRadio>
      </div>
    `})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    value: "sm",
    size: "md",
    disabled: false
  },
  render: args => ({
    components: {
      FusionRadio
    },
    setup() {
      const selected = ref<string | number>("sm");
      return {
        args,
        selected
      };
    },
    template: \`
      <div>
        <FusionRadio
          :modelValue="selected"
          @update:modelValue="selected = $event"
          :value="args.value"
          :size="args.size"
          :disabled="args.disabled"
        >
          Radio Option
        </FusionRadio>

        <div style="margin-top:16px; font-size:14px;">
          Selected: {{ selected }}
        </div>
      </div>
    \`
  })
}`,...o.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      FusionRadio
    },
    setup() {
      const selected = ref<string | number>("md");
      return {
        selected
      };
    },
    template: \`
      <div>
        <div style="display:flex; gap:24px;">
          <FusionRadio
            :modelValue="selected"
            @update:modelValue="selected = $event"
            value="xs"
          >
            XS
          </FusionRadio>

          <FusionRadio
            :modelValue="selected"
            @update:modelValue="selected = $event"
            value="sm"
          >
            SM
          </FusionRadio>

          <FusionRadio
            :modelValue="selected"
            @update:modelValue="selected = $event"
            value="md"
          >
            MD
          </FusionRadio>

          <FusionRadio
            :modelValue="selected"
            @update:modelValue="selected = $event"
            value="lg"
          >
            LG
          </FusionRadio>
        </div>

        <div style="margin-top:16px;">
          Selected: {{ selected }}
        </div>
      </div>
    \`
  })
}`,...l.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      FusionRadio
    },
    setup() {
      const selected = ref<string | number>("md");
      return {
        selected
      };
    },
    template: \`
      <div style="display:flex; gap:24px; align-items:center;">
        <FusionRadio :modelValue="selected" @update:modelValue="selected = $event" value="xs" size="xs">XS</FusionRadio>
        <FusionRadio :modelValue="selected" @update:modelValue="selected = $event" value="sm" size="sm">SM</FusionRadio>
        <FusionRadio :modelValue="selected" @update:modelValue="selected = $event" value="md" size="md">MD</FusionRadio>
        <FusionRadio :modelValue="selected" @update:modelValue="selected = $event" value="lg" size="lg">LG</FusionRadio>
        <FusionRadio :modelValue="selected" @update:modelValue="selected = $event" value="xl" size="xl">XL</FusionRadio>
      </div>
    \`
  })
}`,...n.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      FusionRadio
    },
    setup() {
      const selected = ref<string | number>("sm");
      return {
        selected
      };
    },
    template: \`
      <div style="display:flex; gap:24px;">
        <FusionRadio
          :modelValue="selected"
          @update:modelValue="selected = $event"
          value="sm"
        >
          Enabled
        </FusionRadio>

        <FusionRadio
          :modelValue="selected"
          @update:modelValue="selected = $event"
          value="md"
          disabled
        >
          Disabled
        </FusionRadio>
      </div>
    \`
  })
}`,...a.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      FusionRadio
    },
    setup() {
      const selected = ref<string | number>("sm");
      return {
        selected
      };
    },
    template: \`
      <div style="
        background:#111827;
        padding:40px;
        border-radius:16px;
        display:flex;
        gap:40px;
        align-items:center;
      ">
        <FusionRadio :modelValue="selected" @update:modelValue="selected = $event" value="xs" size="lg">
          Size 'xs'
        </FusionRadio>

        <FusionRadio :modelValue="selected" @update:modelValue="selected = $event" value="sm" size="lg">
          Size 'sm'
        </FusionRadio>

        <FusionRadio :modelValue="selected" @update:modelValue="selected = $event" value="md" size="lg">
          Size 'md'
        </FusionRadio>
      </div>
    \`
  })
}`,...t.parameters?.docs?.source}}};const v=["Playground","RadioGroup","Sizes","DisabledStates","DarkPreview"];export{t as DarkPreview,a as DisabledStates,o as Playground,l as RadioGroup,n as Sizes,v as __namedExportsOrder,p as default};
