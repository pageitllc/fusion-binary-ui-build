import{r as u}from"./iframe-D7VSQkaL.js";import{F as e,U as c}from"./FuAvatar-Cl3DFHgX.js";import{F as m}from"./FuAvatarGroup-D6iZ1RrL.js";import"./preload-helper-Ct5FWWRu.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const A={title:"Fusion/Data Display/FuAvatar",component:e,tags:["autodocs"],parameters:{docs:{description:{component:`
The **Avatar** component in Fusion Binary is a versatile profile element used to represent users or team members.  
It supports **images**, **initials**, **status indicators**, and **grouped avatars**.

---

### Variants
| Variant | Description |
|----------|--------------|
| **Single Avatar (Name + Image)** | Displays a user's image and name. |
| **Image Only** | Shows only the circular profile image. |
| **With Status** | Displays a colored dot indicating user presence (Active, Away, Busy, etc.). |
| **Avatar Group** | Shows multiple avatars in a stack with a \`+X\` overflow count. |

---

### Props

| Prop | Type | Default | Description |
|------|------|----------|-------------|
| \`src\` | \`string\` | — | Image source URL. |
| \`alt\` | \`string\` | — | Alternative text for the image. |
| \`name\` | \`string\` | — | Used to render initials if no image exists. |
| \`bg\` | \`string\` | — | Overrides the initials placeholder background color (only applies when there's no \`src\`). |
| \`color\` | \`string\` | — | Overrides the initials text color (only applies when there's no \`src\`). |
| \`size\` | \`"xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl"\` | \`"md"\` | Controls avatar size. |
| \`status\` | \`UserStatus | number\` | — | Indicates presence status (enum or numeric). |
| \`showStatus\` | \`boolean\` | \`true\` | Toggles visibility of status dot. |
| \`editable\` | \`boolean\` | \`false\` | Enables image upload/edit mode. |
| \`allowRemove\` | \`boolean\` | \`true\` | Allows removing existing image. |
| \`max\` *(Group only)* | \`number\` | \`3\` | Max avatars to show before overflow. |

---

### Status Enum Mapping

| Status | Enum | Numeric |
|---------|-------|----------|
| Offline | \`UserStatus.Offline\` | 0 |
| Active | \`UserStatus.Active\` | 1 |
| Away | \`UserStatus.Away\` | 2 |
| Busy | \`UserStatus.Busy\` | 3 |
| Do Not Disturb | \`UserStatus.DoNotDisturb\` | 4 |
| Invisible | \`UserStatus.Invisible\` | 5 |

---

### Available Sizes

| Size | Dimension |
|-------|------------|
| xs | 20px |
| sm | 28px |
| md | 36px |
| lg | 48px |
| xl | 64px |
| 2xl | 80px |
| 3xl | 96px |

---

## Editable Avatar (Upload & Remove)

When \`editable\` is true:

- Clicking avatar opens native file picker
- Selecting file emits \`update:src\`
- Remove button emits \`remove\`
- The component does **not** upload or delete anything automatically

---

## Controlled Component Contract

\`FuAvatar\` is a **controlled UI component**.

It does NOT:
- Upload images
- Persist images
- Delete images
- Call APIs

It only:
- Displays image or initials
- Emits \`update:src\`
- Emits \`remove\`

The parent owns persistence.

---

## Create Resource Usage

\`\`\`vue
<script setup>
import { ref } from "vue";
const avatar = ref<string | undefined>(undefined);
<\/script>

<template>
  <FuAvatar v-model:src="avatar" editable />
</template>
\`\`\`

Save logic:

\`\`\`ts
if (avatar.value?.startsWith("data:")) {
  await api.uploadAvatar(avatar.value);
}
\`\`\`

---

## Edit Resource Usage

\`\`\`vue
<script setup>
import { ref } from "vue";
const avatar = ref(user.profileImage);
const avatarRemoved = ref(false);

const handleRemove = () => {
  avatar.value = undefined;
  avatarRemoved.value = true;
};
<\/script>

<template>
  <FuAvatar
    v-model:src="avatar"
    editable
    @remove="handleRemove"
  />
</template>
\`\`\`

Save logic:

\`\`\`ts
if (avatarRemoved.value) {
  await api.deleteUserAvatar(user.id);
}

if (avatar.value?.startsWith("data:")) {
  await api.uploadAvatar(user.id, avatar.value);
}
\`\`\`

---

## Remove Button Clarification

The remove icon only emits:

\`\`\`
emit("remove")
\`\`\`

It does NOT delete automatically.

Always track removal intent in edit flows.

---

## Example Usage

\`\`\`vue
<script setup>
import { FuAvatar, FuAvatarGroup, UserStatus } from "fusion-binary";

const users = [
  { src: "/avatars/a.jpg", alt: "A" },
  { src: "/avatars/b.jpg", alt: "B" },
  { src: "/avatars/c.jpg", alt: "C" },
  { src: "/avatars/d.jpg", alt: "D" },
];
<\/script>

<template>
  <!-- Avatar with image + name -->
  <FuAvatar src="/avatars/jane.jpg" name="Jane Doe" size="sm" />

  <!-- Avatar using enum -->
  <FuAvatar src="/avatars/john.jpg" :status="UserStatus.Active" />

  <!-- Avatar using numeric backend value -->
  <FuAvatar src="/avatars/kate.jpg" :status="1" />

  <!-- Avatar group -->
  <FuAvatarGroup :users="users" :max="3" />
</template>
\`\`\`

---

*Tip: You may pass numeric backend values or \`UserStatus.Active\` enum for the status prop.*
        `}}}},s={render:a=>({components:{FuAvatar:e},setup(){return{args:a}},template:'<FuAvatar v-bind="args" />'}),args:{src:"/src/stories/assets/avatars/70a23294beb91b4ad5a439e2c6ea5a6d.png",name:"Jane Doe",size:"lg"}},t={render:a=>({components:{FuAvatar:e},setup(){return{args:a}},template:`
      <div style="display:flex; gap:1rem; align-items:center;">
        <FuAvatar v-bind="args" name="Emma Evans" bg="#fee2e2" color="#991b1b" />
        <FuAvatar v-bind="args" name="Marcus Ltd" bg="#fef3c7" color="#92400e" />
        <FuAvatar v-bind="args" name="Brightfield Agency" bg="#dcfce7" color="#166534" />
      </div>
    `}),args:{size:"lg"}},r={render:a=>({components:{FuAvatar:e},setup(){return{args:a}},template:'<FuAvatar v-bind="args" />'}),args:{src:"/src/stories/assets/avatars/d1499909450ba526d5297e3ebc7f6d07.png",size:"md"}},n={render:a=>({components:{FuAvatar:e},setup(){return{args:a,UserStatus:c}},template:`
      <div style="display:flex; gap:2rem; align-items:center;">
        <FuAvatar v-bind="args" :status="UserStatus.Active" name="Active" />
        <FuAvatar v-bind="args" :status="UserStatus.Away" name="Away" />
        <FuAvatar v-bind="args" :status="UserStatus.Busy" name="Busy" />
        <FuAvatar v-bind="args" :status="UserStatus.Offline" name="Offline" />
        <FuAvatar v-bind="args" :status="UserStatus.DoNotDisturb" name="DND" />
      </div>
    `}),args:{src:"/src/stories/assets/avatars/119d9abaee7a1e987571f0fe776bd1a5.png",size:"md"}},o={render:a=>({components:{FuAvatarGroup:m},setup(){return{args:a}},template:'<FuAvatarGroup v-bind="args" />'}),args:{users:[{src:"",alt:"A",name:"Kehinde Akinbola"},{src:"/src/stories/assets/avatars/70a23294beb91b4ad5a439e2c6ea5a6d.png",alt:"B",name:"Alex Johnson"},{src:"/src/stories/assets/avatars/cae99bb14b21ec41ecf03b58f59ff292.png",alt:"C",name:"Adisa Ola"},{src:"/src/stories/assets/avatars/119d9abaee7a1e987571f0fe776bd1a5.png",alt:"D",name:"Funke Ade"},{src:"/src/stories/assets/avatars/9854663aec5741bbbe84290b6edc0aed.png",alt:"E",name:"Tom Jas"}],max:3,size:"sm"}},i={render:a=>({components:{FuAvatar:e},setup(){return{avatar:u(a.src),args:a}},template:`
      <FuAvatar
        v-bind="args"
        v-model:src="avatar"
        editable
        name="Editable User"
        @remove="avatar = undefined"
      />
    `}),args:{src:"/src/stories/assets/avatars/70a23294beb91b4ad5a439e2c6ea5a6d.png",size:"lg"}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: args => ({
    components: {
      FuAvatar
    },
    setup() {
      return {
        args
      };
    },
    template: \`<FuAvatar v-bind="args" />\`
  }),
  args: {
    src: "/src/stories/assets/avatars/70a23294beb91b4ad5a439e2c6ea5a6d.png",
    name: "Jane Doe",
    size: "lg"
  }
}`,...s.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => ({
    components: {
      FuAvatar
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <div style="display:flex; gap:1rem; align-items:center;">
        <FuAvatar v-bind="args" name="Emma Evans" bg="#fee2e2" color="#991b1b" />
        <FuAvatar v-bind="args" name="Marcus Ltd" bg="#fef3c7" color="#92400e" />
        <FuAvatar v-bind="args" name="Brightfield Agency" bg="#dcfce7" color="#166534" />
      </div>
    \`
  }),
  args: {
    size: "lg"
  }
}`,...t.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: args => ({
    components: {
      FuAvatar
    },
    setup() {
      return {
        args
      };
    },
    template: \`<FuAvatar v-bind="args" />\`
  }),
  args: {
    src: "/src/stories/assets/avatars/d1499909450ba526d5297e3ebc7f6d07.png",
    size: "md"
  }
}`,...r.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: args => ({
    components: {
      FuAvatar
    },
    setup() {
      return {
        args,
        UserStatus
      };
    },
    template: \`
      <div style="display:flex; gap:2rem; align-items:center;">
        <FuAvatar v-bind="args" :status="UserStatus.Active" name="Active" />
        <FuAvatar v-bind="args" :status="UserStatus.Away" name="Away" />
        <FuAvatar v-bind="args" :status="UserStatus.Busy" name="Busy" />
        <FuAvatar v-bind="args" :status="UserStatus.Offline" name="Offline" />
        <FuAvatar v-bind="args" :status="UserStatus.DoNotDisturb" name="DND" />
      </div>
    \`
  }),
  args: {
    src: "/src/stories/assets/avatars/119d9abaee7a1e987571f0fe776bd1a5.png",
    size: "md"
  }
}`,...n.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: args => ({
    components: {
      FuAvatarGroup
    },
    setup() {
      return {
        args
      };
    },
    template: \`<FuAvatarGroup v-bind="args" />\`
  }),
  args: {
    users: [{
      src: "",
      alt: "A",
      name: "Kehinde Akinbola"
    }, {
      src: "/src/stories/assets/avatars/70a23294beb91b4ad5a439e2c6ea5a6d.png",
      alt: "B",
      name: "Alex Johnson"
    }, {
      src: "/src/stories/assets/avatars/cae99bb14b21ec41ecf03b58f59ff292.png",
      alt: "C",
      name: "Adisa Ola"
    }, {
      src: "/src/stories/assets/avatars/119d9abaee7a1e987571f0fe776bd1a5.png",
      alt: "D",
      name: "Funke Ade"
    }, {
      src: "/src/stories/assets/avatars/9854663aec5741bbbe84290b6edc0aed.png",
      alt: "E",
      name: "Tom Jas"
    }],
    max: 3,
    size: "sm"
  }
}`,...o.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: args => ({
    components: {
      FuAvatar
    },
    setup() {
      const avatar = ref<string | undefined>(args.src);
      return {
        avatar,
        args
      };
    },
    template: \`
      <FuAvatar
        v-bind="args"
        v-model:src="avatar"
        editable
        name="Editable User"
        @remove="avatar = undefined"
      />
    \`
  }),
  args: {
    src: "/src/stories/assets/avatars/70a23294beb91b4ad5a439e2c6ea5a6d.png",
    size: "lg"
  }
}`,...i.parameters?.docs?.source}}};const f=["WithName","CustomColors","ImageOnly","WithStatus","Group","Editable"];export{t as CustomColors,i as Editable,o as Group,r as ImageOnly,s as WithName,n as WithStatus,f as __namedExportsOrder,A as default};
