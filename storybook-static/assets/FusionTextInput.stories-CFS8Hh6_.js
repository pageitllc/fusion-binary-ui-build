import{r as a}from"./iframe-DKpyqR87.js";import{F as n}from"./FusionTextInput-DD6iUAuU.js";import{c as x}from"./createLucideIcon-H_lQUGxs.js";import{C as I}from"./circle-x-BYgSydPS.js";import{M as f}from"./mail-DglP8dI4.js";import"./preload-helper-Ct5FWWRu.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";/**
 * @license lucide-vue-next v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const k=x("search",[["path",{d:"m21 21-4.34-4.34",key:"14j7rj"}],["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}]]),V={title:"Components/FusionTextInput",component:n,tags:["autodocs"],argTypes:{type:{control:"select",options:["text","email","password","number","tel","url","search"]},size:{control:"select",options:["sm","md","lg"]},variant:{control:"select",options:["subtle","outline","plain"]},label:{control:"text"},placeholder:{control:"text"},error:{control:"text"},required:{control:"boolean"},min:{control:"number"},max:{control:"number"},step:{control:"number"},mask:{control:"select",options:[null,"phone","card","currency","custom"]},maskPattern:{control:"text"}},parameters:{docs:{description:{component:`
A flexible and accessible input component with support for **icons, avatars, clear actions, and optional input masking**.

---

### Features

- Automatically generates a unique \`id\`
- Supports native form attributes
- Supports **left** and **right** slots
- Works with all **variants**
- Type-safe \`v-model\`
- Optional input masking

---

### Masking Support

- \`mask="phone"\`
- \`mask="card"\`
- \`mask="currency"\`
- \`mask="custom"\` (use \`maskPattern\`)
        `}}}},r={args:{label:"Name",placeholder:"Enter your name",variant:"outline"}},t={args:{label:"Email",placeholder:"Enter email",error:"Invalid email address",variant:"outline"}},s={args:{label:"Password",type:"password",size:"lg",variant:"outline"}},o={args:{label:"Age",type:"number",placeholder:"Enter age",min:1,max:120,variant:"outline"}},l={args:{label:"Username",placeholder:"Enter username",required:!0,variant:"outline"}},m={args:{label:"Email",placeholder:"Enter email",variant:"subtle"}},c={args:{label:"Search",placeholder:"Search something...",variant:"plain"}},p={render:()=>({components:{FusionTextInput:n,Search:k},setup(){return{model:a("")}},template:`
      <FusionTextInput v-model="model" placeholder="Search users..." label="Search">
        <template #left>
          <Search size="16" />
        </template>
      </FusionTextInput>
      <p class="mt-2">Value: {{ model }}</p>
    `})},u={render:e=>({components:{FusionTextInput:n,Mail:f,XCircle:I},setup(){const v=a("user@example.com");return{args:e,email:v}},template:`
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
    `}),args:{label:"Email",placeholder:"Enter your email",variant:"outline"}},i={render:e=>({components:{FusionTextInput:n},setup(){const v=a("");return{args:e,msg:v}},template:`
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
    `}),args:{placeholder:"Write a comment...",variant:"subtle"}},d={render:()=>({components:{FusionTextInput:n},setup(){return{phone:a("")}},template:`
      <FusionTextInput v-model="phone" label="Phone Number" mask="phone" />
      <p class="mt-2">Value: {{ phone }}</p>
    `})},g={render:()=>({components:{FusionTextInput:n},setup(){return{card:a("")}},template:`
      <FusionTextInput v-model="card" label="Card Number" mask="card" />
      <p class="mt-2">Value: {{ card }}</p>
    `})},h={render:()=>({components:{FusionTextInput:n},setup(){return{amount:a("")}},template:`
      <FusionTextInput v-model="amount" label="Amount" mask="currency" />
      <p class="mt-2">Value: {{ amount }}</p>
    `})},b={render:()=>({components:{FusionTextInput:n},setup(){return{value:a("")}},template:`
      <FusionTextInput
        v-model="value"
        label="Custom Pattern"
        mask="custom"
        maskPattern="##-##-####"
      />
      <p class="mt-2">Value: {{ value }}</p>
    `})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Name",
    placeholder: "Enter your name",
    variant: "outline"
  }
}`,...r.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Email",
    placeholder: "Enter email",
    error: "Invalid email address",
    variant: "outline"
  }
}`,...t.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Password",
    type: "password",
    size: "lg",
    variant: "outline"
  }
}`,...s.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Age",
    type: "number",
    placeholder: "Enter age",
    min: 1,
    max: 120,
    variant: "outline"
  }
}`,...o.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Username",
    placeholder: "Enter username",
    required: true,
    variant: "outline"
  }
}`,...l.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Email",
    placeholder: "Enter email",
    variant: "subtle"
  }
}`,...m.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Search",
    placeholder: "Search something...",
    variant: "plain"
  }
}`,...c.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
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
}`,...u.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
}`,...i.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      FusionTextInput
    },
    setup() {
      const phone = ref("");
      return {
        phone
      };
    },
    template: \`
      <FusionTextInput v-model="phone" label="Phone Number" mask="phone" />
      <p class="mt-2">Value: {{ phone }}</p>
    \`
  })
}`,...d.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      FusionTextInput
    },
    setup() {
      const card = ref("");
      return {
        card
      };
    },
    template: \`
      <FusionTextInput v-model="card" label="Card Number" mask="card" />
      <p class="mt-2">Value: {{ card }}</p>
    \`
  })
}`,...g.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      FusionTextInput
    },
    setup() {
      const amount = ref("");
      return {
        amount
      };
    },
    template: \`
      <FusionTextInput v-model="amount" label="Amount" mask="currency" />
      <p class="mt-2">Value: {{ amount }}</p>
    \`
  })
}`,...h.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      FusionTextInput
    },
    setup() {
      const value = ref("");
      return {
        value
      };
    },
    template: \`
      <FusionTextInput
        v-model="value"
        label="Custom Pattern"
        mask="custom"
        maskPattern="##-##-####"
      />
      <p class="mt-2">Value: {{ value }}</p>
    \`
  })
}`,...b.parameters?.docs?.source}}};const P=["Default","WithError","Large","NumberInput","Required","SubtleVariant","PlainVariant","WithLeftIcon","WithRightIcon","WithAvatar","MaskPhone","MaskCard","MaskCurrency","MaskCustom"];export{r as Default,s as Large,g as MaskCard,h as MaskCurrency,b as MaskCustom,d as MaskPhone,o as NumberInput,c as PlainVariant,l as Required,m as SubtleVariant,i as WithAvatar,t as WithError,p as WithLeftIcon,u as WithRightIcon,P as __namedExportsOrder,V as default};
