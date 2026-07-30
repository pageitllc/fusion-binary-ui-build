import{r as n}from"./iframe-D33anl-W.js";import{F as t}from"./FusionTextInput-B7r6Jz1s.js";import{S as k}from"./search-BYOiEbjA.js";import{C as V}from"./circle-x-DMUdeiLq.js";import{M as C}from"./mail-cGof7_s1.js";import"./preload-helper-Ct5FWWRu.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./createLucideIcon-DaJMaH6u.js";const A={title:"Components/FusionTextInput",component:t,tags:["autodocs"],argTypes:{type:{control:"select",options:["text","email","number","tel","url","search"]},size:{control:"select",options:["sm","md","lg"]},variant:{control:"select",options:["subtle","outline","plain","typeform"]},label:{control:"text"},placeholder:{control:"text"},error:{control:"text"},required:{control:"boolean"},readonly:{control:"boolean"},min:{control:"number"},max:{control:"number"},step:{control:"number"},mask:{control:"select",options:[null,"phone","card","currency","custom"]},maskPattern:{control:"text"}},parameters:{docs:{description:{component:`
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
        `}}}},a={args:{label:"Name",placeholder:"Enter your name",variant:"outline"}},o={args:{label:"Email",placeholder:"Enter email",error:"Invalid email address",variant:"outline"}},s={args:{label:"Age",type:"number",placeholder:"Enter age",min:1,max:120,variant:"outline"}},l={args:{label:"Username",placeholder:"Enter username",required:!0,variant:"outline"}},u={args:{label:"Email",placeholder:"Enter email",variant:"subtle"}},p={args:{label:"Search",placeholder:"Search something...",variant:"plain"}},c={render:()=>({components:{FusionTextInput:t},setup(){return{answer:n("")}},template:`
      <FusionTextInput
        v-model="answer"
        placeholder="Type your answer here..."
        variant="typeform"
        label="Styled and passed in from the editor"
        font="'Poppins', sans-serif"
        color="#183028"
        fontSize="28px"
      />
      <p class="mt-2">Value: {{ answer }}</p>
    `})},m={render:()=>({components:{FusionTextInput:t},setup(){const e=n(""),r=n("");return{a:e,b:r}},template:`
      <div style="display: flex; flex-direction: column; gap: 24px; max-width: 400px;">
        <FusionTextInput
          v-model="a"
          placeholder="Default typeform..."
          variant="typeform"
          size="lg"
        />
        <FusionTextInput
          v-model="b"
          placeholder="Custom font + color..."
          variant="typeform"
          size="lg"
          font="'Georgia', serif"
          color="#a6423a"
        />
      </div>
    `})},i={render:()=>({components:{FusionTextInput:t},setup(){return{value:n("You can see this but not edit it")}},template:`
      <FusionTextInput
        v-model="value"
        label="Read Only Field"
        variant="typeform"
        formWrapperWidth="100%"
        readonly
      />
      <p class="mt-2">Value: {{ value }}</p>
    `})},d={render:()=>({components:{FusionTextInput:t},setup(){return{query:n("")}},template:`
      <FusionTextInput
        v-model="query"
        type="search"
        label="Search"
        placeholder="Search..."
        variant="outline"
      />
      <p class="mt-2">Value: {{ query }}</p>
    `})},h={render:()=>({components:{FusionTextInput:t},setup(){return{query:n("")}},template:`
      <FusionTextInput
        v-model="query"
        type="search"
        placeholder="Search users..."
        variant="subtle"
      />
      <p class="mt-2">Value: {{ query }}</p>
    `})},v={render:()=>({components:{FusionTextInput:t,Search:k},setup(){return{model:n("")}},template:`
      <FusionTextInput v-model="model" placeholder="Search users..." label="Search">
        <template #left>
          <Search size="16" />
        </template>
      </FusionTextInput>
      <p class="mt-2">Value: {{ model }}</p>
    `})},f={render:e=>({components:{FusionTextInput:t,Mail:C,XCircle:V},setup(){const r=n("user@example.com");return{args:e,email:r}},template:`
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
    `}),args:{label:"Email",placeholder:"Enter your email",variant:"outline"}},b={render:e=>({components:{FusionTextInput:t},setup(){const r=n("");return{args:e,msg:r}},template:`
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
    `}),args:{placeholder:"Write a comment...",variant:"subtle"}},x={render:()=>({components:{FusionTextInput:t},setup(){return{phone:n("")}},template:`
      <FusionTextInput v-model="phone" label="Phone Number" mask="phone" />
      <p class="mt-2">Value: {{ phone }}</p>
    `})},g={render:()=>({components:{FusionTextInput:t},setup(){return{card:n("")}},template:`
      <FusionTextInput v-model="card" label="Card Number" mask="card" />
      <p class="mt-2">Value: {{ card }}</p>
    `})},y={render:()=>({components:{FusionTextInput:t},setup(){return{amount:n("")}},template:`
      <FusionTextInput v-model="amount" label="Amount" mask="currency" />
      <p class="mt-2">Value: {{ amount }}</p>
    `})},I={render:()=>({components:{FusionTextInput:t},setup(){return{value:n("")}},template:`
      <FusionTextInput
        v-model="value"
        label="Custom Pattern"
        mask="custom"
        maskPattern="##-##-####"
      />
      <p class="mt-2">Value: {{ value }}</p>
    `})},F={render:()=>({components:{FusionTextInput:t},setup(){const e=n(""),r=n(null);function S(){r.value?.focus()}function T(){r.value?.select?.()}return{model:e,inputRef:r,focusInput:S,selectInput:T}},template:`
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
    `})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Name",
    placeholder: "Enter your name",
    variant: "outline"
  }
}`,...a.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Email",
    placeholder: "Enter email",
    error: "Invalid email address",
    variant: "outline"
  }
}`,...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Age",
    type: "number",
    placeholder: "Enter age",
    min: 1,
    max: 120,
    variant: "outline"
  }
}`,...s.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Username",
    placeholder: "Enter username",
    required: true,
    variant: "outline"
  }
}`,...l.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Email",
    placeholder: "Enter email",
    variant: "subtle"
  }
}`,...u.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Search",
    placeholder: "Search something...",
    variant: "plain"
  }
}`,...p.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      FusionTextInput
    },
    setup() {
      const answer = ref("");
      return {
        answer
      };
    },
    template: \`
      <FusionTextInput
        v-model="answer"
        placeholder="Type your answer here..."
        variant="typeform"
        label="Styled and passed in from the editor"
        font="'Poppins', sans-serif"
        color="#183028"
        fontSize="28px"
      />
      <p class="mt-2">Value: {{ answer }}</p>
    \`
  })
}`,...c.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      FusionTextInput
    },
    setup() {
      const a = ref("");
      const b = ref("");
      return {
        a,
        b
      };
    },
    template: \`
      <div style="display: flex; flex-direction: column; gap: 24px; max-width: 400px;">
        <FusionTextInput
          v-model="a"
          placeholder="Default typeform..."
          variant="typeform"
          size="lg"
        />
        <FusionTextInput
          v-model="b"
          placeholder="Custom font + color..."
          variant="typeform"
          size="lg"
          font="'Georgia', serif"
          color="#a6423a"
        />
      </div>
    \`
  })
}`,...m.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      FusionTextInput
    },
    setup() {
      const value = ref("You can see this but not edit it");
      return {
        value
      };
    },
    template: \`
      <FusionTextInput
        v-model="value"
        label="Read Only Field"
        variant="typeform"
        formWrapperWidth="100%"
        readonly
      />
      <p class="mt-2">Value: {{ value }}</p>
    \`
  })
}`,...i.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
}`,...d.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
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
}`,...h.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
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
}`,...v.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
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
}`,...f.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
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
}`,...b.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
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
}`,...x.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
}`,...g.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
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
}`,...y.parameters?.docs?.source}}};I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
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
}`,...I.parameters?.docs?.source}}};F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
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
}`,...F.parameters?.docs?.source}}};const N=["Default","WithError","NumberInput","Required","SubtleVariant","PlainVariant","TypeformVariant","TypeformCustomStyle","ReadOnly","SearchInput","SearchSubtle","WithLeftIcon","WithRightIcon","WithAvatar","MaskPhone","MaskCard","MaskCurrency","MaskCustom","AutoFocusExpose"];export{F as AutoFocusExpose,a as Default,g as MaskCard,y as MaskCurrency,I as MaskCustom,x as MaskPhone,s as NumberInput,p as PlainVariant,i as ReadOnly,l as Required,d as SearchInput,h as SearchSubtle,u as SubtleVariant,m as TypeformCustomStyle,c as TypeformVariant,b as WithAvatar,o as WithError,v as WithLeftIcon,f as WithRightIcon,N as __namedExportsOrder,A as default};
