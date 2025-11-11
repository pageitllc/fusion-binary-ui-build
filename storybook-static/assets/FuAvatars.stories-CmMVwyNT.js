import{F as n,U as b}from"./FuAvatar-CO6FnC2I.js";import{d as A,c,a as y,F as x,s as h,y as S,n as U,t as F,o,k as w}from"./iframe-o7SUGoga.js";import{_ as D}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./preload-helper-Ct5FWWRu.js";const d=A({__name:"FuAvatarGroup",props:{users:{},max:{},size:{}},emits:["click"],setup(a){const u=a,p=u.max??3,v=u.users.slice(0,p),m=u.users.length-p;return(g,l)=>(o(),c("div",{class:"fu-avatar-group",onClick:l[0]||(l[0]=i=>g.$emit("click"))},[(o(!0),c(x,null,h(S(v),(i,f)=>(o(),w(n,{key:i.id||f,src:i.src,alt:i.alt,size:a.size},null,8,["src","alt","size"]))),128)),m>0?(o(),c("div",{key:0,class:U(["fu-avatar fu-avatar--more",`fu-avatar--${a.size}`])}," +"+F(m),2)):y("",!0)]))}}),z=D(d,[["__scopeId","data-v-a10ba7ff"]]);d.__docgenInfo={exportName:"default",displayName:"FuAvatarGroup",description:"",tags:{},props:[{name:"users",required:!0,type:{name:"Array",elements:[{name:"User"}]}},{name:"max",required:!1,type:{name:"number"}},{name:"size",required:!1,type:{name:"union",elements:[{name:'"xs"'},{name:'"sm"'},{name:'"md"'},{name:'"lg"'},{name:'"xl"'},{name:'"2xl"'},{name:'"3xl"'}]}}],events:[{name:"click"}],sourceFiles:["/Users/tommys/Documents/Skkido/Fusion-binary-ui/src/components/avatar/FuAvatarGroup.vue"]};const I={title:"Components/Avatar",component:n,tags:["autodocs"],parameters:{docs:{description:{component:'\nThe **Avatar** component in Fusion Binary is a versatile profile element used to represent users or team members.  \nIt supports **images**, **initials**, **status indicators**, and **grouped avatars**.\n\n---\n\n### Variants\n| Variant | Description |\n|----------|--------------|\n| **Single Avatar (Name + Image)** | Displays a user\'s image and name. |\n| **Image Only** | Shows only the circular profile image. |\n| **With Status** | Displays a colored dot indicating user presence (Active, Away, Busy, etc.). |\n| **Avatar Group** | Shows multiple avatars in a stack with a `+X` overflow count. |\n\n---\n\n### Props\n\n| Prop | Type | Default | Description |\n|------|------|----------|-------------|\n| `src` | `string` | — | Image source URL. |\n| `alt` | `string` | — | Alternative text for the image. |\n| `name` | `string` | — | Full name — used to render initials if no image is provided. |\n| `size` | `"xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl"` | `"md"` | Controls avatar size. |\n| `status` | `UserStatus | number` | — | Indicates presence status (enum or numeric). |\n| `showStatus` | `boolean` | `true` | Toggles visibility of status dot. |\n| `max` *(Group only)* | `number` | `3` | Max avatars to show before displaying `+X`. |\n\n---\n\n###  Status Enum Mapping\n\n| Status | Enum | Numeric | Dot Color |\n|---------|-------|----------|------------|\n| **Offline** | `UserStatus.Offline` | `0` | Gray |\n| **Active** | `UserStatus.Active` | `1` | Green |\n| **Away** | `UserStatus.Away` | `2` | Yellow |\n| **Busy** | `UserStatus.Busy` | `3` | Red |\n| **Do Not Disturb** | `UserStatus.DoNotDisturb` | `4` | Purple |\n| **Invisible** | `UserStatus.Invisible` | `5` | Dark Gray |\n\n---\n\n###  Available Sizes\n\n| Size | Class | Example Dimension |\n|-------|--------|-------------------|\n| `xs` | `.fu-avatar--xs` | 20×20px |\n| `sm` | `.fu-avatar--sm` | 28×28px |\n| `md` | `.fu-avatar--md` | 36×36px |\n| `lg` | `.fu-avatar--lg` | 48×48px |\n| `xl` | `.fu-avatar--xl` | 64×64px |\n| `2xl` | `.fu-avatar--2xl` | 80×80px |\n| `3xl` | `.fu-avatar--3xl` | 96×96px |\n\n---\n\n###  Example Usage\n\n```vue\n<script setup lang="ts">\nimport { FuAvatar, FuAvatarGroup, UserStatus } from "fusion-binary";\n\nconst users = [\n  { src: "/avatars/a.jpg", alt: "A" },\n  { src: "/avatars/b.jpg", alt: "B" },\n  { src: "/avatars/c.jpg", alt: "C" },\n  { src: "/avatars/d.jpg", alt: "D" },\n];\n<\/script>\n\n<template>\n  <!--  Avatar with image + name -->\n  <FuAvatar src="/avatars/jane.jpg" name="Jane Doe" size="sm" />\n\n  <!--  Avatar showing status (enum) -->\n  <FuAvatar src="/avatars/john.jpg" :status="UserStatus.Active" />\n\n  <!--  Avatar showing status (numeric from backend) -->\n  <FuAvatar src="/avatars/kate.jpg" :status="1" />\n\n  <!--  Avatar group with overflow -->\n  <FuAvatarGroup :users="users" :max="3" />\n</template>\n```\n\n---\n\n *Tip: You can use either the numeric code (e.g. `1`) or the `UserStatus.Active` enum for the `status` prop.*\n        '}}}},s={render:a=>({components:{FuAvatar:n},setup(){return{args:a}},template:'<FuAvatar v-bind="args" />'}),args:{src:"/src/stories/assets/avatars/70a23294beb91b4ad5a439e2c6ea5a6d.png",name:"Jane Doe",size:"lg"},parameters:{docs:{description:{story:"A single avatar with a profile image and name label."}}}},e={render:a=>({components:{FuAvatar:n},setup(){return{args:a}},template:'<FuAvatar v-bind="args" />'}),args:{src:"/src/stories/assets/avatars/d1499909450ba526d5297e3ebc7f6d07.png",size:"md"},parameters:{docs:{description:{story:"A single avatar showing only the user's profile picture."}}}},t={render:a=>({components:{FuAvatar:n},setup(){return{args:a,UserStatus:b}},template:`
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
        `}}}},r={render:a=>({components:{FuAvatarGroup:z},setup(){return{args:a}},template:'<FuAvatarGroup v-bind="args" />'}),args:{users:[{src:"/src/stories/assets/avatars/d1499909450ba526d5297e3ebc7f6d07.png",alt:"A"},{src:"/src/stories/assets/avatars/70a23294beb91b4ad5a439e2c6ea5a6d.png",alt:"B"},{src:"/src/stories/assets/avatars/cae99bb14b21ec41ecf03b58f59ff292.png",alt:"C"},{src:"/src/stories/assets/avatars/119d9abaee7a1e987571f0fe776bd1a5.png",alt:"D"},{src:"/src/stories/assets/avatars/9854663aec5741bbbe84290b6edc0aed.png",alt:"E"}],max:3,size:"sm"},parameters:{docs:{description:{story:"Displays multiple avatars together. If more users exist than the `max` prop allows, a `+X` overflow indicator appears."}}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source},description:{story:"Single Avatar (with image + name)",...s.parameters?.docs?.description}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
}`,...e.parameters?.docs?.source},description:{story:"Single Avatar (image only)",...e.parameters?.docs?.description}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...t.parameters?.docs?.source},description:{story:"Single Avatar (with status indicator)",...t.parameters?.docs?.description}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
      src: "/src/stories/assets/avatars/d1499909450ba526d5297e3ebc7f6d07.png",
      alt: "A"
    }, {
      src: "/src/stories/assets/avatars/70a23294beb91b4ad5a439e2c6ea5a6d.png",
      alt: "B"
    }, {
      src: "/src/stories/assets/avatars/cae99bb14b21ec41ecf03b58f59ff292.png",
      alt: "C"
    }, {
      src: "/src/stories/assets/avatars/119d9abaee7a1e987571f0fe776bd1a5.png",
      alt: "D"
    }, {
      src: "/src/stories/assets/avatars/9854663aec5741bbbe84290b6edc0aed.png",
      alt: "E"
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
}`,...r.parameters?.docs?.source},description:{story:"👥 Avatar Group (with max = 3)",...r.parameters?.docs?.description}}};const C=["WithName","ImageOnly","WithStatus","Group"];export{r as Group,e as ImageOnly,s as WithName,t as WithStatus,C as __namedExportsOrder,I as default};
