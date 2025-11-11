import{r as p}from"./iframe-o7SUGoga.js";import{F as m}from"./FusionTextInput-C0SJgCer.js";import{c as d}from"./createLucideIcon-D5kBsy5g.js";import{C as h}from"./circle-x-D-CJgVax.js";import{M as g}from"./mail-CpRZj7G3.js";import"./preload-helper-Ct5FWWRu.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";/**
 * @license lucide-vue-next v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const b=d("search",[["path",{d:"m21 21-4.34-4.34",key:"14j7rj"}],["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}]]),E={title:"Components/Form/FusionTextInput",component:m,tags:["autodocs"],argTypes:{type:{control:"select",options:["text","email","password","number"]},size:{control:"select",options:["sm","md","lg"]},variant:{control:"select",options:["subtle","outline","plain"]},label:{control:"text"},placeholder:{control:"text"},error:{control:"text"},required:{control:"boolean"},min:{control:"number"},max:{control:"number"},step:{control:"number"}},parameters:{docs:{description:{component:`
# FusionTextInput

A flexible and accessible input component with support for **icons, avatars, and clear actions** using left/right slots.

---

### Features

- Supports **left** and **right** slots for icons or avatars  
- Works with all **variants** (\`outline\`, \`subtle\`, \`plain\`)  
- Sizes: \`sm\`, \`md\`, \`lg\`  
- Compatible with Lucide icons or any custom content  
- Type-safe and reactive (\`v-model\` support)

---

### Example Usage

\`\`\`vue
<script setup>
import { ref } from "vue";
import { Search, XCircle } from "lucide-vue-next";
import FusionTextInput from "@/components/ui/FusionTextInput.vue";

const search = ref("");
<\/script>

<template>
  <FusionTextInput v-model="search" placeholder="Search...">
    <template #left>
      <Search size="16" />
    </template>

    <template #right>
      <button @click="search = ''" class="fu-clear-btn">
        <XCircle size="16" />
      </button>
    </template>
  </FusionTextInput>
</template>
\`\`\`
        `}}}},e={args:{label:"Name",placeholder:"Enter your name",variant:"outline"}},t={args:{label:"Email",placeholder:"Enter email",error:"Invalid email address",variant:"outline"}},a={args:{label:"Password",type:"password",size:"lg",variant:"outline"}},r={args:{label:"Age",type:"number",placeholder:"Enter age",min:1,max:120,variant:"outline"}},n={args:{label:"Username",placeholder:"Enter username",required:!0,variant:"outline"}},s={args:{label:"Email",placeholder:"Enter email",variant:"subtle"}},o={args:{label:"Search",placeholder:"Search something...",variant:"plain"}},l={render:()=>({components:{FusionTextInput:m,Search:b},setup(){return{model:p("")}},template:`
      <FusionTextInput v-model="model" placeholder="Search users..." label="Search">
        <template #left>
          <Search size="16" />
        </template>
      </FusionTextInput>
      <p class="mt-2">Value: {{ model }}</p>
    `})},c={render:()=>({components:{FusionTextInput:m,Mail:g,XCircle:h},setup(){return{email:p("user@example.com")}},template:`
      <FusionTextInput v-model="email" placeholder="Enter your email" label="Email">
        <template #left>
          <Mail size="16" />
        </template>

        <template #right>
          <button class="fu-clear-btn" @click="email = ''">
            <XCircle size="16" />
          </button>
        </template>
      </FusionTextInput>
      <p class="mt-2">Value: {{ email }}</p>
    `})},i={render:()=>({components:{FusionTextInput:m},setup(){return{msg:p("")}},template:`
      <FusionTextInput v-model="msg" placeholder="Write a comment..." variant="subtle">
        <template #left>
          <img src="https://i.pravatar.cc/30" class="fu-avatar-sm" alt="User avatar" />
        </template>
      </FusionTextInput>
      <p class="mt-2">Message: {{ msg }}</p>
    `})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Name",
    placeholder: "Enter your name",
    variant: "outline"
  }
}`,...e.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Email",
    placeholder: "Enter email",
    error: "Invalid email address",
    variant: "outline"
  }
}`,...t.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Password",
    type: "password",
    size: "lg",
    variant: "outline"
  }
}`,...a.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Age",
    type: "number",
    placeholder: "Enter age",
    min: 1,
    max: 120,
    variant: "outline"
  }
}`,...r.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Username",
    placeholder: "Enter username",
    required: true,
    variant: "outline"
  }
}`,...n.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Email",
    placeholder: "Enter email",
    variant: "subtle"
  }
}`,...s.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Search",
    placeholder: "Search something...",
    variant: "plain"
  }
}`,...o.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      FusionTextInput,
      Search
    },
    setup() {
      const model = ref("");
      return {
        model
      };
    },
    template: \`
      <FusionTextInput v-model="model" placeholder="Search users..." label="Search">
        <template #left>
          <Search size="16" />
        </template>
      </FusionTextInput>
      <p class="mt-2">Value: {{ model }}</p>
    \`
  })
}`,...l.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      FusionTextInput,
      Mail,
      XCircle
    },
    setup() {
      const email = ref("user@example.com");
      return {
        email
      };
    },
    template: \`
      <FusionTextInput v-model="email" placeholder="Enter your email" label="Email">
        <template #left>
          <Mail size="16" />
        </template>

        <template #right>
          <button class="fu-clear-btn" @click="email = ''">
            <XCircle size="16" />
          </button>
        </template>
      </FusionTextInput>
      <p class="mt-2">Value: {{ email }}</p>
    \`
  })
}`,...c.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      FusionTextInput
    },
    setup() {
      const msg = ref("");
      return {
        msg
      };
    },
    template: \`
      <FusionTextInput v-model="msg" placeholder="Write a comment..." variant="subtle">
        <template #left>
          <img src="https://i.pravatar.cc/30" class="fu-avatar-sm" alt="User avatar" />
        </template>
      </FusionTextInput>
      <p class="mt-2">Message: {{ msg }}</p>
    \`
  })
}`,...i.parameters?.docs?.source}}};const y=["Default","WithError","Large","NumberInput","Required","SubtleVariant","PlainVariant","WithLeftIcon","WithRightIcon","WithAvatar"];export{e as Default,a as Large,r as NumberInput,o as PlainVariant,n as Required,s as SubtleVariant,i as WithAvatar,t as WithError,l as WithLeftIcon,c as WithRightIcon,y as __namedExportsOrder,E as default};
