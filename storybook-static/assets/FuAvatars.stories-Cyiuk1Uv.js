import{s as A,a as p,f as h,F as y,h as w,u as x,l as F,t as S,j as c,d as U,r as D}from"./iframe-BeZJQ65s.js";import{F as a,U as k}from"./FuAvatar-tORvbocF.js";import{_ as z}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./preload-helper-Ct5FWWRu.js";const v=A({__name:"FuAvatarGroup",props:{users:{},max:{},size:{}},emits:["click"],setup(e){const m=e,u=m.max??3,g=m.users.slice(0,u),l=m.users.length-u;return(b,d)=>(c(),p("div",{class:"fu-avatar-group",onClick:d[0]||(d[0]=s=>b.$emit("click"))},[(c(!0),p(y,null,w(x(g),(s,f)=>(c(),U(a,{key:s.id||f,src:s.src,name:s.name,alt:s.alt,size:e.size},null,8,["src","name","alt","size"]))),128)),l>0?(c(),p("div",{key:0,class:F(["fu-avatar fu-avatar--more",`fu-avatar--${e.size}`])}," +"+S(l),2)):h("",!0)]))}}),E=z(v,[["__scopeId","data-v-d339fd2f"]]);v.__docgenInfo={exportName:"default",displayName:"FuAvatarGroup",description:"",tags:{},props:[{name:"users",required:!0,type:{name:"Array",elements:[{name:"User"}]}},{name:"max",required:!1,type:{name:"number"}},{name:"size",required:!1,type:{name:"union",elements:[{name:'"xs"'},{name:'"sm"'},{name:'"md"'},{name:'"lg"'},{name:'"xl"'},{name:'"2xl"'},{name:'"3xl"'}]}}],events:[{name:"click"}],sourceFiles:["/Users/xavier/Documents/Websites/Skkido/Fusion-binary-ui/src/components/avatar/FuAvatarGroup.vue"]};const N={title:"Components/Avatar",component:a,tags:["autodocs"],parameters:{docs:{description:{component:`
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
| \`name\` | \`string\` | — | Full name — used to render initials if no image is provided. |
| \`size\` | \`"xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl"\` | \`"md"\` | Controls avatar size. |
| \`status\` | \`UserStatus | number\` | — | Indicates presence status (enum or numeric). |
| \`showStatus\` | \`boolean\` | \`true\` | Toggles visibility of status dot. |
| \`max\` *(Group only)* | \`number\` | \`3\` | Max avatars to show before displaying \`+X\`. |

---

###  Status Enum Mapping

| Status | Enum | Numeric | Dot Color |
|---------|-------|----------|------------|
| **Offline** | \`UserStatus.Offline\` | \`0\` | Gray |
| **Active** | \`UserStatus.Active\` | \`1\` | Green |
| **Away** | \`UserStatus.Away\` | \`2\` | Yellow |
| **Busy** | \`UserStatus.Busy\` | \`3\` | Red |
| **Do Not Disturb** | \`UserStatus.DoNotDisturb\` | \`4\` | Purple |
| **Invisible** | \`UserStatus.Invisible\` | \`5\` | Dark Gray |

---

###  Available Sizes

| Size | Class | Example Dimension |
|-------|--------|-------------------|
| \`xs\` | \`.fu-avatar--xs\` | 20×20px |
| \`sm\` | \`.fu-avatar--sm\` | 28×28px |
| \`md\` | \`.fu-avatar--md\` | 36×36px |
| \`lg\` | \`.fu-avatar--lg\` | 48×48px |
| \`xl\` | \`.fu-avatar--xl\` | 64×64px |
| \`2xl\` | \`.fu-avatar--2xl\` | 80×80px |
| \`3xl\` | \`.fu-avatar--3xl\` | 96×96px |

---

---

### Editable Avatar (Upload & Remove)

The Avatar component can optionally support **image editing** when enabled.

When \`editable\` is set to \`true\`:
- Clicking the avatar opens the native **file picker**
- Users can upload an image **from their device**
- If an image exists, a **remove (×)** button is shown
- Image persistence is controlled by the parent via events

By default, editing is **disabled**.

#### Additional Props

| Prop | Type | Default | Description |
|------|------|----------|-------------|
| \`editable\` | \`boolean\` | \`false\` | Enables image upload/edit mode. |
| \`allowRemove\` | \`boolean\` | \`true\` | Allows removing the existing image. |

#### Events

| Event | Payload | Description |
|------|--------|-------------|
| \`update:src\` | \`string\` | Fired when a new image is selected. |
| \`remove\` | — | Fired when the image is removed. |




### Editable Avatar – Example (Upload & Remove)

Below is a minimal example showing how to enable avatar editing using
\`v-model:src\` and handle image removal.

The avatar component does **not** persist files by itself — the parent
controls the image state.

#### Vue Example

\`\`\`vue
<script setup ">
import { ref } from "vue";
import { FuAvatar } from "fusion-binary";

const avatar = ref<string | undefined>(
  "/avatars/profile.jpg"
);

// Optional: handle removal
const clearAvatar = () => {
  avatar.value = undefined;
};
<\/script>

<template>
  <FuAvatar
    v-model:src="avatar"
    name="John Doe"
    size="lg"
    editable
    @remove="clearAvatar"
  />
</template>
\`\`\`

#### How it works
- Clicking the avatar opens the file picker
- Selecting an image emits \`update:src\`
- Removing the image emits \`remove\`
- The parent decides how and where to store the image (local, API upload, etc.)

This pattern is recommended for **profile pages**, **account settings**, and
**workspace configuration screens**.



###  Example Usage

\`\`\`vue
<script setup ">
import { FuAvatar, FuAvatarGroup, UserStatus } from "fusion-binary";

const users = [
  { src: "/avatars/a.jpg", alt: "A" },
  { src: "/avatars/b.jpg", alt: "B" },
  { src: "/avatars/c.jpg", alt: "C" },
  { src: "/avatars/d.jpg", alt: "D" },
];
<\/script>

<template>
  <!--  Avatar with image + name -->
  <FuAvatar src="/avatars/jane.jpg" name="Jane Doe" size="sm" />

  <!--  Avatar showing status (enum) -->
  <FuAvatar src="/avatars/john.jpg" :status="UserStatus.Active" />

  <!--  Avatar showing status (numeric from backend) -->
  <FuAvatar src="/avatars/kate.jpg" :status="1" />

  <!--  Avatar group with overflow -->
  <FuAvatarGroup :users="users" :max="3" />
</template>
\`\`\`

---

 *Tip: You can use either the numeric code (e.g. \`1\`) or the \`UserStatus.Active\` enum for the \`status\` prop.*
        `}}}},t={render:e=>({components:{FuAvatar:a},setup(){return{args:e}},template:'<FuAvatar v-bind="args" />'}),args:{src:"/src/stories/assets/avatars/70a23294beb91b4ad5a439e2c6ea5a6d.png",name:"Jane Doe",size:"lg"},parameters:{docs:{description:{story:"A single avatar with a profile image and name label."}}}},r={render:e=>({components:{FuAvatar:a},setup(){return{args:e}},template:'<FuAvatar v-bind="args" />'}),args:{src:"/src/stories/assets/avatars/d1499909450ba526d5297e3ebc7f6d07.png",size:"md"},parameters:{docs:{description:{story:"A single avatar showing only the user's profile picture."}}}},n={render:e=>({components:{FuAvatar:a},setup(){return{args:e,UserStatus:k}},template:`
      <div style="display: flex; gap: 2rem; align-items: center;">
        <FuAvatar v-bind="args" :status="UserStatus.Active" name="Active User" />
        <FuAvatar v-bind="args" :status="UserStatus.Away" name="Away User" />
        <FuAvatar v-bind="args" :status="UserStatus.Busy" name="Busy User" />
        <FuAvatar v-bind="args" :status="UserStatus.Offline" name="Offline User" />
        <FuAvatar v-bind="args" :status="UserStatus.DoNotDisturb" name="DND User" />
      </div>
    `}),args:{src:"/src/stories/assets/avatars/119d9abaee7a1e987571f0fe776bd1a5.png",size:"md"},parameters:{docs:{description:{story:`
This story showcases different **user presence states** using the \`UserStatus\` enum:
- 🟢 Active  
- 🟡 Away  
- 🔴 Busy  
- ⚫ Offline  
- 🟣 Do Not Disturb  
        `}}}},i={render:e=>({components:{FuAvatarGroup:E},setup(){return{args:e}},template:'<FuAvatarGroup v-bind="args" />'}),args:{users:[{src:"",alt:"A",name:"Kehinde Akinbola"},{src:"/src/stories/assets/avatars/70a23294beb91b4ad5a439e2c6ea5a6d.png",alt:"B",name:"Alex Johnson"},{src:"/src/stories/assets/avatars/cae99bb14b21ec41ecf03b58f59ff292.png",alt:"C",name:"Adisa Ola"},{src:"/src/stories/assets/avatars/119d9abaee7a1e987571f0fe776bd1a5.png",alt:"D",name:"Funke Ade"},{src:"/src/stories/assets/avatars/9854663aec5741bbbe84290b6edc0aed.png",alt:"E",name:"Tom Jas"}],max:3,size:"sm"},parameters:{docs:{description:{story:"Displays multiple avatars together. If more users exist than the `max` prop allows, a `+X` overflow indicator appears."}}}},o={render:e=>({components:{FuAvatar:a},setup(){return{avatar:D(e.src),args:e}},template:`
      <FuAvatar
        v-bind="args"
        v-model:src="avatar"
        editable
        name="Editable User"
        @remove="avatar = undefined"
      />
    `}),args:{src:"/src/stories/assets/avatars/70a23294beb91b4ad5a439e2c6ea5a6d.png",size:"lg"},parameters:{docs:{description:{story:`
An avatar with **edit mode enabled**.

- Click the avatar to upload a new image
- A remove (×) button appears when an image exists
- Image state is controlled by the parent via \`v-model:src\`

This pattern is ideal for **profile settings**, **workspace avatars**, and **account pages**.
        `}}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
  },
  parameters: {
    docs: {
      description: {
        story: "A single avatar with a profile image and name label."
      }
    }
  }
}`,...t.parameters?.docs?.source},description:{story:"Single Avatar (with image + name)",...t.parameters?.docs?.description}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
  },
  parameters: {
    docs: {
      description: {
        story: "A single avatar showing only the user's profile picture."
      }
    }
  }
}`,...r.parameters?.docs?.source},description:{story:"Single Avatar (image only)",...r.parameters?.docs?.description}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
      <div style="display: flex; gap: 2rem; align-items: center;">
        <FuAvatar v-bind="args" :status="UserStatus.Active" name="Active User" />
        <FuAvatar v-bind="args" :status="UserStatus.Away" name="Away User" />
        <FuAvatar v-bind="args" :status="UserStatus.Busy" name="Busy User" />
        <FuAvatar v-bind="args" :status="UserStatus.Offline" name="Offline User" />
        <FuAvatar v-bind="args" :status="UserStatus.DoNotDisturb" name="DND User" />
      </div>
    \`
  }),
  args: {
    src: "/src/stories/assets/avatars/119d9abaee7a1e987571f0fe776bd1a5.png",
    size: "md"
  },
  parameters: {
    docs: {
      description: {
        story: \`
This story showcases different **user presence states** using the \\\`UserStatus\\\` enum:
- 🟢 Active  
- 🟡 Away  
- 🔴 Busy  
- ⚫ Offline  
- 🟣 Do Not Disturb  
        \`
      }
    }
  }
}`,...n.parameters?.docs?.source},description:{story:"Single Avatar (with status indicator)",...n.parameters?.docs?.description}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
  },
  parameters: {
    docs: {
      description: {
        story: "Displays multiple avatars together. If more users exist than the \`max\` prop allows, a \`+X\` overflow indicator appears."
      }
    }
  }
}`,...i.parameters?.docs?.source},description:{story:"👥 Avatar Group (with max = 3)",...i.parameters?.docs?.description}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
  },
  parameters: {
    docs: {
      description: {
        story: \`
An avatar with **edit mode enabled**.

- Click the avatar to upload a new image
- A remove (×) button appears when an image exists
- Image state is controlled by the parent via \\\`v-model:src\\\`

This pattern is ideal for **profile settings**, **workspace avatars**, and **account pages**.
        \`
      }
    }
  }
}`,...o.parameters?.docs?.source},description:{story:"Editable Avatar (upload + remove)",...o.parameters?.docs?.description}}};const O=["WithName","ImageOnly","WithStatus","Group","Editable"];export{o as Editable,i as Group,r as ImageOnly,t as WithName,n as WithStatus,O as __namedExportsOrder,N as default};
