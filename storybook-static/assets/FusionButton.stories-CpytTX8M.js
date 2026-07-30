import{r as o}from"./iframe-D33anl-W.js";import{F as n}from"./FusionRadio-DRUDkNhV.js";import"./preload-helper-Ct5FWWRu.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const F={title:"Fusion/Forms/FusionRadio",component:n,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:`


FusionRadio is a controlled radio input component built for the Fusion Design System.

It allows selecting **one option from a group**.

---

## Features

- Multiple sizes (xs → xl)
- Controlled \`modelValue\`
- Disabled state
- Readonly state (visible, focusable, not clickable)
- \`typeform\` variant — font/fontSize/color driven by the document theme
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

---

## Typeform Variant

\`\`\`vue
<FusionRadio
  v-model="selected"
  value="sm"
  variant="typeform"
  font="'Poppins', sans-serif"
  fontSize="18px"
  color="#183028"
>
  Size 'sm'
</FusionRadio>
\`\`\`

The ring and dot only pick up \`color\` once the option is checked — an
unselected option in a group still reads as a normal neutral radio.
        `}}},argTypes:{value:{control:"text",description:"The value associated with this radio option."},size:{control:"select",options:["xs","sm","md","lg","xl"],description:"Controls the visual size of the radio."},variant:{control:"select",options:["default","typeform"],description:"'typeform' picks up font/fontSize/color and only tints the ring + dot once checked."},disabled:{control:"boolean",description:"Disables the radio option."},readonly:{control:"boolean",description:"Visible and focusable, but not clickable — unlike disabled, no dimming/greyscale."},font:{control:"text",description:"typeform variant only — font-family for the label."},fontSize:{control:"text",description:"typeform variant only — font-size for the label, e.g. '26px'."},color:{control:"color",description:"typeform variant only — ring/dot color once checked, and the label's text color."}}},a={args:{value:"sm",size:"md",variant:"default",disabled:!1,readonly:!1},render:e=>({components:{FusionRadio:n},setup(){const c=o("sm");return{args:e,selected:c}},template:`
      <div>
        <FusionRadio
          :modelValue="selected"
          @update:modelValue="selected = $event"
          :value="args.value"
          :size="args.size"
          :variant="args.variant"
          :disabled="args.disabled"
          :readonly="args.readonly"
          :font="args.font"
          :fontSize="args.fontSize"
          :color="args.color"
        >
          Radio Option
        </FusionRadio>

        <div style="margin-top:16px; font-size:14px;">
          Selected: {{ selected }}
        </div>
      </div>
    `})},d={render:()=>({components:{FusionRadio:n},setup(){return{selected:o("md")}},template:`
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
    `})},l={render:()=>({components:{FusionRadio:n},setup(){return{selected:o("md")}},template:`
      <div style="display:flex; gap:24px; align-items:center;">
        <FusionRadio :modelValue="selected" @update:modelValue="selected = $event" value="xs" size="xs">XS</FusionRadio>
        <FusionRadio :modelValue="selected" @update:modelValue="selected = $event" value="sm" size="sm">SM</FusionRadio>
        <FusionRadio :modelValue="selected" @update:modelValue="selected = $event" value="md" size="md">MD</FusionRadio>
        <FusionRadio :modelValue="selected" @update:modelValue="selected = $event" value="lg" size="lg">LG</FusionRadio>
        <FusionRadio :modelValue="selected" @update:modelValue="selected = $event" value="xl" size="xl">XL</FusionRadio>
      </div>
    `})},s={render:()=>({components:{FusionRadio:n},setup(){return{selected:o("sm")}},template:`
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
    `})},t={render:()=>({components:{FusionRadio:n},setup(){return{selected:o("sm")}},template:`
      <div style="display:flex; gap:24px;">
        <FusionRadio
          :modelValue="selected"
          @update:modelValue="selected = $event"
          value="sm"
        >
          Editable
        </FusionRadio>

        <FusionRadio
          :modelValue="selected"
          @update:modelValue="selected = $event"
          value="md"
          readonly
        >
          Readonly (unselected)
        </FusionRadio>

        <FusionRadio
          :modelValue="'lg'"
          value="lg"
          readonly
        >
          Readonly (checked)
        </FusionRadio>
      </div>
    `})},i={render:()=>({components:{FusionRadio:n},setup(){return{selected:o("")}},template:`
      <div style="display:flex; flex-direction:column; gap:16px; max-width:320px;">
        <FusionRadio
          :modelValue="selected"
          @update:modelValue="selected = $event"
          value="one"
          size="lg"
          variant="typeform"
          font="'Poppins', sans-serif"
          fontSize="20px"
          color="#183028"
        >
          Option one
        </FusionRadio>

        <FusionRadio
          :modelValue="selected"
          @update:modelValue="selected = $event"
          value="two"
          size="lg"
          variant="typeform"
          font="'Poppins', sans-serif"
          fontSize="20px"
          color="#183028"
        >
          Option two
        </FusionRadio>

        <div style="margin-top:8px; font-size:14px;">
          Selected: {{ selected || "(none yet)" }}
        </div>
      </div>
    `})},u={render:()=>({components:{FusionRadio:n},setup(){const e=o("a1"),c=o("b1");return{a:e,b:c}},template:`
      <div style="display:flex; gap:48px;">
        <div style="display:flex; flex-direction:column; gap:12px;">
          <FusionRadio :modelValue="a" @update:modelValue="a = $event" value="a1" variant="typeform" color="#4362FF" fontSize="18px">Brand blue</FusionRadio>
          <FusionRadio :modelValue="a" @update:modelValue="a = $event" value="a2" variant="typeform" color="#4362FF" fontSize="18px">Second option</FusionRadio>
        </div>

        <div style="display:flex; flex-direction:column; gap:12px;">
          <FusionRadio :modelValue="b" @update:modelValue="b = $event" value="b1" variant="typeform" color="#a6423a" fontSize="18px" font="'Georgia', serif">Warm red</FusionRadio>
          <FusionRadio :modelValue="b" @update:modelValue="b = $event" value="b2" variant="typeform" color="#a6423a" fontSize="18px" font="'Georgia', serif">Second option</FusionRadio>
        </div>
      </div>
    `})},r={render:()=>({components:{FusionRadio:n},setup(){return{selected:o("sm")}},template:`
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
    `})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    value: "sm",
    size: "md",
    variant: "default",
    disabled: false,
    readonly: false
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
          :variant="args.variant"
          :disabled="args.disabled"
          :readonly="args.readonly"
          :font="args.font"
          :fontSize="args.fontSize"
          :color="args.color"
        >
          Radio Option
        </FusionRadio>

        <div style="margin-top:16px; font-size:14px;">
          Selected: {{ selected }}
        </div>
      </div>
    \`
  })
}`,...a.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
}`,...d.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
}`,...l.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
          Editable
        </FusionRadio>

        <FusionRadio
          :modelValue="selected"
          @update:modelValue="selected = $event"
          value="md"
          readonly
        >
          Readonly (unselected)
        </FusionRadio>

        <FusionRadio
          :modelValue="'lg'"
          value="lg"
          readonly
        >
          Readonly (checked)
        </FusionRadio>
      </div>
    \`
  })
}`,...t.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      FusionRadio
    },
    setup() {
      const selected = ref<string | number>("");
      return {
        selected
      };
    },
    template: \`
      <div style="display:flex; flex-direction:column; gap:16px; max-width:320px;">
        <FusionRadio
          :modelValue="selected"
          @update:modelValue="selected = $event"
          value="one"
          size="lg"
          variant="typeform"
          font="'Poppins', sans-serif"
          fontSize="20px"
          color="#183028"
        >
          Option one
        </FusionRadio>

        <FusionRadio
          :modelValue="selected"
          @update:modelValue="selected = $event"
          value="two"
          size="lg"
          variant="typeform"
          font="'Poppins', sans-serif"
          fontSize="20px"
          color="#183028"
        >
          Option two
        </FusionRadio>

        <div style="margin-top:8px; font-size:14px;">
          Selected: {{ selected || "(none yet)" }}
        </div>
      </div>
    \`
  })
}`,...i.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      FusionRadio
    },
    setup() {
      const a = ref<string | number>("a1");
      const b = ref<string | number>("b1");
      return {
        a,
        b
      };
    },
    template: \`
      <div style="display:flex; gap:48px;">
        <div style="display:flex; flex-direction:column; gap:12px;">
          <FusionRadio :modelValue="a" @update:modelValue="a = $event" value="a1" variant="typeform" color="#4362FF" fontSize="18px">Brand blue</FusionRadio>
          <FusionRadio :modelValue="a" @update:modelValue="a = $event" value="a2" variant="typeform" color="#4362FF" fontSize="18px">Second option</FusionRadio>
        </div>

        <div style="display:flex; flex-direction:column; gap:12px;">
          <FusionRadio :modelValue="b" @update:modelValue="b = $event" value="b1" variant="typeform" color="#a6423a" fontSize="18px" font="'Georgia', serif">Warm red</FusionRadio>
          <FusionRadio :modelValue="b" @update:modelValue="b = $event" value="b2" variant="typeform" color="#a6423a" fontSize="18px" font="'Georgia', serif">Second option</FusionRadio>
        </div>
      </div>
    \`
  })
}`,...u.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...r.parameters?.docs?.source}}};const R=["Playground","RadioGroup","Sizes","DisabledStates","ReadOnlyStates","TypeformVariant","TypeformCustomColors","DarkPreview"];export{r as DarkPreview,s as DisabledStates,a as Playground,d as RadioGroup,t as ReadOnlyStates,l as Sizes,u as TypeformCustomColors,i as TypeformVariant,R as __namedExportsOrder,F as default};
