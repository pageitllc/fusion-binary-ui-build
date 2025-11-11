import{F as c}from"./FusionButton-DEEa7fmw.js";import{C as d}from"./check-DULYM39g.js";import"./iframe-o7SUGoga.js";import"./preload-helper-Ct5FWWRu.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./createLucideIcon-D5kBsy5g.js";const h={title:"Components/Button",component:c,tags:["autodocs"],argTypes:{text:{control:"text",description:"The button text (displayed inside the button if no default slot content is provided)."},size:{control:"select",options:["sm","md","lg"],description:"Controls the button size."},variant:{control:"select",options:["solid","subtle","outline","ghost","danger"],description:"Defines the visual style of the button."},disabled:{control:"boolean",description:"Disables the button and prevents click events."},loading:{control:"boolean",description:"Displays a loading spinner and prevents interaction."},loadingText:{control:"text",description:"Custom text displayed when `loading` is true (defaults to `'Loading…'`)."},tooltip:{control:"text",description:"Optional tooltip text shown when hovering over the button."},icon:{control:"text",description:"Optional icon component (e.g. from `lucide-vue-next`) displayed before the text."},link:{control:"text",description:"If provided, renders the button as an `<a>` element linking to this URL."},target:{control:"select",options:["_parent","_blank"],description:"Specifies how the link is opened when `link` is provided."},onClick:{action:"clicked",description:"Emits when the button is clicked (only if not disabled or loading)."}},parameters:{docs:{description:{component:`
The **Button** component in Fusion Binary provides a flexible, consistent button element supporting multiple styles, sizes, states, and icons.

### Features
- **Variants:** \`solid\`, \`subtle\`, \`outline\`, \`ghost\`, \`danger\`
- **Sizes:** \`sm\`, \`md\`, \`lg\`
- **States:** Default, Disabled, Loading
- **Icons:** Optional icon on the left
- **Tooltip:** Optional hover text
- **Link Mode:** Renders as an anchor tag when \`link\` is provided

### Example Usage

\`\`\`vue
<script setup lang="ts">
import { ref } from "vue";
import { FusionButton } from "fusion-binary";
import { Check } from "lucide-vue-next";

const isLoading = ref(false);

function handleClick() {
  isLoading.value = true;
  setTimeout(() => (isLoading.value = false), 2000);
}
<\/script>

<template>
  <!-- Default solid button -->
  <FusionButton text="Click Me" @click="handleClick" />

  <!-- Outline button with icon -->
  <FusionButton :icon="Check" variant="outline" text="Confirm" />

  <!-- Subtle button with tooltip -->
  <FusionButton variant="subtle" text="Hover me" tooltip="Tooltip text" />

  <!-- Loading state -->
  <FusionButton :loading="isLoading" loadingText="Processing..." />

  <!-- Link button -->
  <FusionButton link="https://fusionbinary.dev" target="_blank" text="Visit Site" />
</template>
\`\`\`
        `}}}},t={args:{text:"Click Me",size:"md",variant:"solid"}},e={args:{text:"Confirm",icon:d,variant:"outline",size:"md"}},o={args:{text:"Hover me",variant:"subtle",tooltip:"This is a tooltip"}},n={args:{text:"Ghost Button",variant:"ghost"}},i={args:{text:"Delete",variant:"danger"}},s={args:{text:"Submitting",loading:!0,loadingText:"Please wait..."}},r={args:{text:"Disabled",disabled:!0}},a={args:{text:"Visit Fusion",link:"https://fusionbinary.dev",target:"_blank"}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    text: "Click Me",
    size: "md",
    variant: "solid"
  }
}`,...t.parameters?.docs?.source},description:{story:"Default solid button",...t.parameters?.docs?.description}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    text: "Confirm",
    icon: Check,
    variant: "outline",
    size: "md"
  }
}`,...e.parameters?.docs?.source},description:{story:"Outline button with icon",...e.parameters?.docs?.description}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    text: "Hover me",
    variant: "subtle",
    tooltip: "This is a tooltip"
  }
}`,...o.parameters?.docs?.source},description:{story:"Subtle variant with tooltip",...o.parameters?.docs?.description}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    text: "Ghost Button",
    variant: "ghost"
  }
}`,...n.parameters?.docs?.source},description:{story:"Ghost button",...n.parameters?.docs?.description}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    text: "Delete",
    variant: "danger"
  }
}`,...i.parameters?.docs?.source},description:{story:"Danger button",...i.parameters?.docs?.description}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    text: "Submitting",
    loading: true,
    loadingText: "Please wait..."
  }
}`,...s.parameters?.docs?.source},description:{story:"Loading state",...s.parameters?.docs?.description}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    text: "Disabled",
    disabled: true
  }
}`,...r.parameters?.docs?.source},description:{story:"Disabled state",...r.parameters?.docs?.description}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    text: "Visit Fusion",
    link: "https://fusionbinary.dev",
    target: "_blank"
  }
}`,...a.parameters?.docs?.source},description:{story:"Link button",...a.parameters?.docs?.description}}};const x=["Solid","OutlineWithIcon","SubtleWithTooltip","Ghost","Danger","Loading","Disabled","AsLink"];export{a as AsLink,i as Danger,r as Disabled,n as Ghost,s as Loading,e as OutlineWithIcon,t as Solid,o as SubtleWithTooltip,x as __namedExportsOrder,h as default};
