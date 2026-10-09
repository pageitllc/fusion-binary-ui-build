import{F as n}from"./FuAvatarGroup-D6iZ1RrL.js";import"./iframe-D7VSQkaL.js";import"./preload-helper-Ct5FWWRu.js";import"./FuAvatar-Cl3DFHgX.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const u={title:"Fusion/Avatar/FuAvatarGroup",component:n,tags:["autodocs"],argTypes:{size:{control:"select",options:["xs","sm","md","lg","xl","2xl","3xl"]},max:{control:"number"}},parameters:{docs:{description:{component:'\n**FuAvatarGroup** stacks multiple avatars with an overlap effect. When the list exceeds `max`, a `+N` overflow bubble is shown.\n\n```vue\n<FuAvatarGroup :users="users" :max="4" size="sm" />\n```\n\nEach user object accepts `{ id?, src, name?, alt? }`. When `src` is empty or fails to load, `FuAvatar` falls back to initials from `name`.\n        '}}}},t=[{id:"1",src:"https://randomuser.me/api/portraits/women/44.jpg",name:"Alice Brown"},{id:"2",src:"https://randomuser.me/api/portraits/men/32.jpg",name:"Bob Martin"},{id:"3",src:"https://randomuser.me/api/portraits/women/68.jpg",name:"Carol White"},{id:"4",src:"https://randomuser.me/api/portraits/men/75.jpg",name:"Dan Green"},{id:"5",src:"",name:"Eve Black"},{id:"6",src:"",name:"Frank Red"}],s={args:{users:t,max:4,size:"md"}},e={args:{users:t,max:3,size:"md"},parameters:{docs:{description:{story:"Shows the +N bubble when users exceed `max`."}}}},r={args:{users:[{id:"1",src:"",name:"Alice Brown"},{id:"2",src:"",name:"Bob Martin"},{id:"3",src:"",name:"Carol White"}],max:5,size:"md"},parameters:{docs:{description:{story:"No image src — all avatars fall back to initials."}}}},a={render:()=>({components:{FuAvatarGroup:n},setup(){return{users:[{id:"1",src:"https://randomuser.me/api/portraits/women/44.jpg",name:"Alice Brown"},{id:"2",src:"https://randomuser.me/api/portraits/men/32.jpg",name:"Bob Martin"},{id:"3",src:"",name:"Carol White"}],sizes:["xs","sm","md","lg","xl"]}},template:`
      <div style="display: flex; flex-direction: column; gap: 20px; padding: 24px;">
        <div v-for="s in sizes" :key="s" style="display: flex; align-items: center; gap: 16px;">
          <span style="width: 32px; font-size: 12px; color: #6b7280;">{{ s }}</span>
          <FuAvatarGroup :users="users" :max="3" :size="s" />
        </div>
      </div>
    `}),parameters:{docs:{description:{story:"All available sizes from `xs` to `xl`."}}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    users: sampleUsers,
    max: 4,
    size: "md"
  }
}`,...s.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    users: sampleUsers,
    max: 3,
    size: "md"
  },
  parameters: {
    docs: {
      description: {
        story: "Shows the +N bubble when users exceed \`max\`."
      }
    }
  }
}`,...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    users: [{
      id: "1",
      src: "",
      name: "Alice Brown"
    }, {
      id: "2",
      src: "",
      name: "Bob Martin"
    }, {
      id: "3",
      src: "",
      name: "Carol White"
    }],
    max: 5,
    size: "md"
  },
  parameters: {
    docs: {
      description: {
        story: "No image src — all avatars fall back to initials."
      }
    }
  }
}`,...r.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      FuAvatarGroup
    },
    setup() {
      const users = [{
        id: "1",
        src: "https://randomuser.me/api/portraits/women/44.jpg",
        name: "Alice Brown"
      }, {
        id: "2",
        src: "https://randomuser.me/api/portraits/men/32.jpg",
        name: "Bob Martin"
      }, {
        id: "3",
        src: "",
        name: "Carol White"
      }];
      const sizes = ["xs", "sm", "md", "lg", "xl"];
      return {
        users,
        sizes
      };
    },
    template: \`
      <div style="display: flex; flex-direction: column; gap: 20px; padding: 24px;">
        <div v-for="s in sizes" :key="s" style="display: flex; align-items: center; gap: 16px;">
          <span style="width: 32px; font-size: 12px; color: #6b7280;">{{ s }}</span>
          <FuAvatarGroup :users="users" :max="3" :size="s" />
        </div>
      </div>
    \`
  }),
  parameters: {
    docs: {
      description: {
        story: "All available sizes from \`xs\` to \`xl\`."
      }
    }
  }
}`,...a.parameters?.docs?.source}}};const x=["Default","WithOverflow","InitialsFallback","Sizes"];export{s as Default,r as InitialsFallback,a as Sizes,e as WithOverflow,x as __namedExportsOrder,u as default};
