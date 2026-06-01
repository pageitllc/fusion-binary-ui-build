import{r as n}from"./iframe-BWX2pLPr.js";import{F as t}from"./FusionTextInput-cbn4CYAx.js";import{S as F}from"./search-DALccjr0.js";import{C as T}from"./circle-x-CgwPT-6V.js";import{M as k}from"./mail-DfeqGUoj.js";import"./preload-helper-Ct5FWWRu.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./createLucideIcon-BuC7IBSO.js";const R={title:"Components/FusionTextInput",component:t,tags:["autodocs"],argTypes:{type:{control:"select",options:["text","email","password","number","tel","url","search"]},size:{control:"select",options:["sm","md","lg"]},variant:{control:"select",options:["subtle","outline","plain"]},label:{control:"text"},placeholder:{control:"text"},error:{control:"text"},required:{control:"boolean"},min:{control:"number"},max:{control:"number"},step:{control:"number"},mask:{control:"select",options:[null,"phone","card","currency","custom"]},maskPattern:{control:"text"}},parameters:{docs:{description:{component:`
A flexible and accessible input component with support for **icons, avatars, clear actions, and optional input masking**.

---

### Features

- Automatically generates a unique \`id\`
- Supports native form attributes
- Supports **left** and **right** slots
- Works with all **variants**
- Type-safe \`v-model\`
- Optional input masking
- Built-in search mode with clear button

---

### Masking Support

- \`mask="phone"\`
- \`mask="card"\`
- \`mask="currency"\`
- \`mask="custom"\` (use \`maskPattern\`)

---

### Search Mode

Use \`type="search"\` to get a built-in search icon on the left. A clear (×) button appears on the right automatically while there is a value, and clicking it resets the input.
        `}}}},r={args:{label:"Name",placeholder:"Enter your name",variant:"outline"}},s={args:{label:"Email",placeholder:"Enter email",error:"Invalid email address",variant:"outline"}},o={args:{label:"Password",type:"password",size:"lg",variant:"outline"}},l={args:{label:"Age",type:"number",placeholder:"Enter age",min:1,max:120,variant:"outline"}},u={args:{label:"Username",placeholder:"Enter username",required:!0,variant:"outline"}},c={args:{label:"Email",placeholder:"Enter email",variant:"subtle"}},p={args:{label:"Search",placeholder:"Search something...",variant:"plain"}},m={render:()=>({components:{FusionTextInput:t},setup(){return{query:n("")}},template:`
      <FusionTextInput
        v-model="query"
        type="search"
        label="Search"
        placeholder="Search..."
        variant="outline"
      />
      <p class="mt-2">Value: {{ query }}</p>
    `})},i={render:()=>({components:{FusionTextInput:t},setup(){return{query:n("")}},template:`
      <FusionTextInput
        v-model="query"
        type="search"
        placeholder="Search users..."
        variant="subtle"
      />
      <p class="mt-2">Value: {{ query }}</p>
    `})},d={render:()=>({components:{FusionTextInput:t,Search:F},setup(){return{model:n("")}},template:`
      <FusionTextInput v-model="model" placeholder="Search users..." label="Search">
        <template #left>
          <Search size="16" />
        </template>
      </FusionTextInput>
      <p class="mt-2">Value: {{ model }}</p>
    `})},h={render:e=>({components:{FusionTextInput:t,Mail:k,XCircle:T},setup(){const a=n("user@example.com");return{args:e,email:a}},template:`
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
    `}),args:{label:"Email",placeholder:"Enter your email",variant:"outline"}},g={render:e=>({components:{FusionTextInput:t},setup(){const a=n("");return{args:e,msg:a}},template:`
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
    `}),args:{placeholder:"Write a comment...",variant:"subtle"}},v={render:()=>({components:{FusionTextInput:t},setup(){return{phone:n("")}},template:`
      <FusionTextInput v-model="phone" label="Phone Number" mask="phone" />
      <p class="mt-2">Value: {{ phone }}</p>
    `})},b={render:()=>({components:{FusionTextInput:t},setup(){return{card:n("")}},template:`
      <FusionTextInput v-model="card" label="Card Number" mask="card" />
      <p class="mt-2">Value: {{ card }}</p>
    `})},x={render:()=>({components:{FusionTextInput:t},setup(){return{amount:n("")}},template:`
      <FusionTextInput v-model="amount" label="Amount" mask="currency" />
      <p class="mt-2">Value: {{ amount }}</p>
    `})},f={render:()=>({components:{FusionTextInput:t},setup(){return{value:n("")}},template:`
      <FusionTextInput
        v-model="value"
        label="Custom Pattern"
        mask="custom"
        maskPattern="##-##-####"
      />
      <p class="mt-2">Value: {{ value }}</p>
    `})},I={render:()=>({components:{FusionTextInput:t},setup(){const e=n(""),a=n(null);function S(){a.value?.focus()}function y(){a.value?.select?.()}return{model:e,inputRef:a,focusInput:S,selectInput:y}},template:`
      <div style="display: flex; flex-direction: column; gap: 12px; max-width: 300px;">

        <FusionTextInput
          ref="inputRef"
          v-model="model"
          label="Auto Focus Input"
          placeholder="Click button to focus me"
        />

        <div style="display: flex; gap: 8px;">
          <button @click="focusInput">Focus</button>
          <button @click="selectInput">Select</button>
        </div>

        <p>Value: {{ model }}</p>
      </div>
    `})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Name",
    placeholder: "Enter your name",
    variant: "outline"
  }
}`,...r.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Email",
    placeholder: "Enter email",
    error: "Invalid email address",
    variant: "outline"
  }
}`,...s.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Password",
    type: "password",
    size: "lg",
    variant: "outline"
  }
}`,...o.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Age",
    type: "number",
    placeholder: "Enter age",
    min: 1,
    max: 120,
    variant: "outline"
  }
}`,...l.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Username",
    placeholder: "Enter username",
    required: true,
    variant: "outline"
  }
}`,...u.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Email",
    placeholder: "Enter email",
    variant: "subtle"
  }
}`,...c.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Search",
    placeholder: "Search something...",
    variant: "plain"
  }
}`,...p.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      FusionTextInput
    },
    setup() {
      const query = ref("");
      return {
        query
      };
    },
    template: \`
      <FusionTextInput
        v-model="query"
        type="search"
        label="Search"
        placeholder="Search..."
        variant="outline"
      />
      <p class="mt-2">Value: {{ query }}</p>
    \`
  })
}`,...m.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      FusionTextInput
    },
    setup() {
      const query = ref("");
      return {
        query
      };
    },
    template: \`
      <FusionTextInput
        v-model="query"
        type="search"
        placeholder="Search users..."
        variant="subtle"
      />
      <p class="mt-2">Value: {{ query }}</p>
    \`
  })
}`,...i.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
}`,...d.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
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
}`,...h.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
}`,...g.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
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
}`,...v.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
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
}`,...b.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
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
}`,...x.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
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
}`,...f.parameters?.docs?.source}}};I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      FusionTextInput
    },
    setup() {
      const model = ref("");
      const inputRef = ref<any>(null);
      function focusInput() {
        inputRef.value?.focus();
      }
      function selectInput() {
        inputRef.value?.select?.();
      }
      return {
        model,
        inputRef,
        focusInput,
        selectInput
      };
    },
    template: \`
      <div style="display: flex; flex-direction: column; gap: 12px; max-width: 300px;">

        <FusionTextInput
          ref="inputRef"
          v-model="model"
          label="Auto Focus Input"
          placeholder="Click button to focus me"
        />

        <div style="display: flex; gap: 8px;">
          <button @click="focusInput">Focus</button>
          <button @click="selectInput">Select</button>
        </div>

        <p>Value: {{ model }}</p>
      </div>
    \`
  })
}`,...I.parameters?.docs?.source}}};const W=["Default","WithError","Large","NumberInput","Required","SubtleVariant","PlainVariant","SearchInput","SearchSubtle","WithLeftIcon","WithRightIcon","WithAvatar","MaskPhone","MaskCard","MaskCurrency","MaskCustom","AutoFocusExpose"];export{I as AutoFocusExpose,r as Default,o as Large,b as MaskCard,x as MaskCurrency,f as MaskCustom,v as MaskPhone,l as NumberInput,p as PlainVariant,u as Required,m as SearchInput,i as SearchSubtle,c as SubtleVariant,g as WithAvatar,s as WithError,d as WithLeftIcon,h as WithRightIcon,W as __namedExportsOrder,R as default};
