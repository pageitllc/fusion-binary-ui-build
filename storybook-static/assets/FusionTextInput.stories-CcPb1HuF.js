import{r as d}from"./iframe-4anGkjM3.js";import{F as p}from"./FusionTextInput-B7zbcKHf.js";import{c as g}from"./createLucideIcon-MAVkZFkt.js";import{C as h}from"./circle-x-DkYjwenm.js";import{M as b}from"./mail-Dm3OTdwX.js";import"./preload-helper-Ct5FWWRu.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";/**
 * @license lucide-vue-next v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const v=g("search",[["path",{d:"m21 21-4.34-4.34",key:"14j7rj"}],["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}]]),y={title:"Components/FusionTextInput",component:p,tags:["autodocs"],argTypes:{type:{control:"select",options:["text","email","password","number","tel","url","search"]},size:{control:"select",options:["sm","md","lg"]},variant:{control:"select",options:["subtle","outline","plain"]},label:{control:"text"},placeholder:{control:"text"},error:{control:"text"},required:{control:"boolean"},min:{control:"number"},max:{control:"number"},step:{control:"number"}},parameters:{docs:{description:{component:`


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
        `}}}},a={args:{label:"Name",placeholder:"Enter your name",variant:"outline"}},r={args:{label:"Email",placeholder:"Enter email",error:"Invalid email address",variant:"outline"}},t={args:{label:"Password",type:"password",size:"lg",variant:"outline"}},n={args:{label:"Age",type:"number",placeholder:"Enter age",min:1,max:120,variant:"outline"}},s={args:{label:"Username",placeholder:"Enter username",required:!0,variant:"outline"}},o={args:{label:"Email",placeholder:"Enter email",variant:"subtle"}},l={args:{label:"Search",placeholder:"Search something...",variant:"plain"}},c={render:()=>({components:{FusionTextInput:p,Search:v},setup(){return{model:d("")}},template:`
      <FusionTextInput v-model="model" placeholder="Search users..." label="Search">
        <template #left>
          <Search size="16" />
        </template>
      </FusionTextInput>
      <p class="mt-2">Value: {{ model }}</p>
    `})},i={render:e=>({components:{FusionTextInput:p,Mail:b,XCircle:h},setup(){const u=d("user@example.com");return{args:e,email:u}},template:`
      <FusionTextInput v-bind="args" v-model="email">
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
    `}),args:{label:"Email",placeholder:"Enter your email",variant:"outline"}},m={render:e=>({components:{FusionTextInput:p},setup(){const u=d("");return{args:e,msg:u}},template:`
      <FusionTextInput v-bind="args" v-model="msg">
        <template #left>
          <img
            src="https://i.pravatar.cc/30"
            class="fu-avatar-sm"
            alt="User avatar"
          />
        </template>
      </FusionTextInput>
      <p class="mt-2">Message: {{ msg }}</p>
    `}),args:{placeholder:"Write a comment...",variant:"subtle"}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Name",
    placeholder: "Enter your name",
    variant: "outline"
  }
}`,...a.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Email",
    placeholder: "Enter email",
    error: "Invalid email address",
    variant: "outline"
  }
}`,...r.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Password",
    type: "password",
    size: "lg",
    variant: "outline"
  }
}`,...t.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Age",
    type: "number",
    placeholder: "Enter age",
    min: 1,
    max: 120,
    variant: "outline"
  }
}`,...n.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Username",
    placeholder: "Enter username",
    required: true,
    variant: "outline"
  }
}`,...s.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Email",
    placeholder: "Enter email",
    variant: "subtle"
  }
}`,...o.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Search",
    placeholder: "Search something...",
    variant: "plain"
  }
}`,...l.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
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
}`,...c.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: args => ({
    components: {
      FusionTextInput,
      Mail,
      XCircle
    },
    setup() {
      const email = ref("user@example.com");
      return {
        args,
        email
      };
    },
    template: \`
      <FusionTextInput v-bind="args" v-model="email">
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
  }),
  args: {
    label: "Email",
    placeholder: "Enter your email",
    variant: "outline"
  }
}`,...i.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: args => ({
    components: {
      FusionTextInput
    },
    setup() {
      const msg = ref("");
      return {
        args,
        msg
      };
    },
    template: \`
      <FusionTextInput v-bind="args" v-model="msg">
        <template #left>
          <img
            src="https://i.pravatar.cc/30"
            class="fu-avatar-sm"
            alt="User avatar"
          />
        </template>
      </FusionTextInput>
      <p class="mt-2">Message: {{ msg }}</p>
    \`
  }),
  args: {
    placeholder: "Write a comment...",
    variant: "subtle"
  }
}`,...m.parameters?.docs?.source}}};const z=["Default","WithError","Large","NumberInput","Required","SubtleVariant","PlainVariant","WithLeftIcon","WithRightIcon","WithAvatar"];export{a as Default,t as Large,n as NumberInput,l as PlainVariant,s as Required,o as SubtleVariant,m as WithAvatar,r as WithError,c as WithLeftIcon,i as WithRightIcon,z as __namedExportsOrder,y as default};
