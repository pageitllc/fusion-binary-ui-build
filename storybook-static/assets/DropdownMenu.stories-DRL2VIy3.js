import{D as a}from"./DropdownMenu-BrLItLUF.js";import{F as s}from"./FuAvatar-CO6FnC2I.js";import{F as c}from"./FusionButton-DEEa7fmw.js";import{U as d}from"./user-CShBQRq7.js";import{S as p}from"./settings-bDNpDAQL.js";import{c as e}from"./createLucideIcon-D5kBsy5g.js";import{L as i}from"./log-out-DVojqSRd.js";import"./iframe-o7SUGoga.js";import"./preload-helper-Ct5FWWRu.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";/**
 * @license lucide-vue-next v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const m=e("credit-card",[["rect",{width:"20",height:"14",x:"2",y:"5",rx:"2",key:"ynyp8z"}],["line",{x1:"2",x2:"22",y1:"10",y2:"10",key:"1b3vmo"}]]);/**
 * @license lucide-vue-next v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const g=e("globe",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20",key:"13o1zl"}],["path",{d:"M2 12h20",key:"9i4pu4"}]]);/**
 * @license lucide-vue-next v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const u=e("layout-grid",[["rect",{width:"7",height:"7",x:"3",y:"3",rx:"1",key:"1g98yp"}],["rect",{width:"7",height:"7",x:"14",y:"3",rx:"1",key:"6d4xhi"}],["rect",{width:"7",height:"7",x:"14",y:"14",rx:"1",key:"nxv5o0"}],["rect",{width:"7",height:"7",x:"3",y:"14",rx:"1",key:"1bb6yr"}]]);/**
 * @license lucide-vue-next v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const h=e("maximize-2",[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"m21 3-7 7",key:"1l2asr"}],["path",{d:"m3 21 7-7",key:"tjx5ai"}],["path",{d:"M9 21H3v-6",key:"wtvkvv"}]]);/**
 * @license lucide-vue-next v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const y=e("moon",[["path",{d:"M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401",key:"kfwtm"}]]);/**
 * @license lucide-vue-next v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const l=e("refresh-cw",[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",key:"v9h5vc"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",key:"3uifl3"}],["path",{d:"M8 16H3v5",key:"1cv678"}]]),A={title:"Components/DropdownMenu",component:a,tags:["autodocs"],parameters:{docs:{description:{component:`
The **DropdownMenu** component in Fusion Binary provides a flexible and minimal menu system that can be triggered by any element — such as an avatar, icon, or button.

It supports both **menu actions** and **optional content slots**, useful for showing contextual info or section titles.

---

### Features
- Works with **any trigger element** (avatar, button, icon, etc.)
- **Optional content section** at the top via \`<template #content>\`
- Auto-closes when clicking outside
- Supports menu alignment: \`left\`, \`center\`, or \`right\`
- Accepts an array of actions (label, icon, onClick)
- Clean design with hover effects and icon support

---

### Props

| Prop | Type | Default | Description |
|------|------|----------|-------------|
| \`actions\` | \`{ label: string; icon?: Component; onClick?: () => void }[]\` | — | Array of menu options |
| \`align\` | \`"left" | "center" | "right"\` | \`"right"\` | Aligns the dropdown |
| \`content\` | \`boolean\` | \`false\` | Whether to render a custom content slot before actions |
| \`isOpen\` | \`boolean\` | — | (optional) external open state |
| \`@open\` / \`@close\` | — | — | Events emitted when dropdown opens or closes |

---

### Slots

| Slot | Description |
|------|--------------|
| \`trigger\` | Element that opens the dropdown |
| \`content\` | Optional content shown at the top of the menu |

---

### Example Usage

\`\`\`vue
<script setup>
import { DropdownMenu, FuAvatar } from "fusion-binary";
import { User, Settings, LogOut } from "lucide-vue-next";

const userActions = [
  { label: "Profile", icon: User, onClick: () => console.log("Profile clicked") },
  { label: "Settings", icon: Settings, onClick: () => console.log("Settings clicked") },
  { label: "Log Out", icon: LogOut, onClick: () => console.log("Logging out...") },
];
<\/script>

<template>
  <DropdownMenu :actions="userActions" :content="true" align="right">
    <template #trigger>
      <FuAvatar src="/avatars/jane.jpg" name="Jane Doe" size="sm" />
    </template>

    <template #content>
      <div class="text-sm text-muted">User Menu</div>
    </template>
  </DropdownMenu>
</template>
\`\`\`
        `}}}},n={render:t=>({components:{DropdownMenu:a,FuAvatar:s},setup(){return{args:t}},template:`
      <div style="display: flex; justify-content: center; padding: 2rem;">
        <DropdownMenu v-bind="args" :content="true">
          <template #trigger>
            <FuAvatar
              src="/src/stories/assets/avatars/70a23294beb91b4ad5a439e2c6ea5a6d.png"
              name="Jane Doe"
              size="md"
            />
          </template>

          <template #content>
            <div style="font-size: 13px; color: var(--fu-color-text-muted); padding-bottom: .25rem;">
              Quick Actions
            </div>
          </template>
        </DropdownMenu>
      </div>
    `}),args:{align:"right",actions:[{label:"My Profile",icon:d,onClick:()=>alert("Profile clicked")},{label:"My Settings",icon:p,onClick:()=>alert("Settings clicked")},{label:"Manage Billing",icon:m,onClick:()=>alert("Billing opened")},{label:"Log Out",icon:i,onClick:()=>alert("Logging out...")}]},parameters:{docs:{description:{story:"Shows a dropdown triggered by an avatar with a custom header (content slot) for context."}}}},o={render:t=>({components:{DropdownMenu:a,FuAvatar:s},setup(){return{args:t}},template:`
      <div style="display: flex; justify-content: center; padding: 2rem;">
        <DropdownMenu v-bind="args">
          <template #trigger>
            <FuAvatar
              src="/src/stories/assets/avatars/3d5c49b3ad3f4c409c18c9c184d183b7.png"
              name="Tom Reed"
              size="md"
            />
          </template>
        </DropdownMenu>
      </div>
    `}),args:{align:"right",actions:[{label:"Reload",icon:l,onClick:()=>alert("Page reloaded")},{label:"Switch Theme",icon:y,onClick:()=>alert("Theme toggled")},{label:"Full Width",icon:h,onClick:()=>alert("Width toggled")},{label:"Log Out",icon:i,onClick:()=>alert("Logged out")}]},parameters:{docs:{description:{story:"Same dropdown but without the content slot — no padding or header is rendered."}}}},r={render:t=>({components:{DropdownMenu:a,FusionButton:c},setup(){return{args:t}},template:`
      <div style="display: flex; justify-content: center; padding: 2rem;">
        <DropdownMenu v-bind="args" :content="true">
          <template #trigger>
            <FusionButton text="More Options" />
          </template>

          <template #content>
            <div style="font-size: 13px; color: var(--fu-color-text-muted); padding-bottom: .25rem;">
              Workspace Tools
            </div>
          </template>
        </DropdownMenu>
      </div>
    `}),args:{align:"right",actions:[{label:"Add Item",icon:u,onClick:()=>alert("Item added")},{label:"Duplicate",icon:l,onClick:()=>alert("Item duplicated")},{label:"Move to Folder",icon:g,onClick:()=>alert("Moved to folder")},{label:"Delete",icon:i,onClick:()=>alert("Deleted")}]},parameters:{docs:{description:{story:"Demonstrates a dropdown menu triggered by a button, showing the optional header slot for context."}}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: args => ({
    components: {
      DropdownMenu,
      FuAvatar
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <div style="display: flex; justify-content: center; padding: 2rem;">
        <DropdownMenu v-bind="args" :content="true">
          <template #trigger>
            <FuAvatar
              src="/src/stories/assets/avatars/70a23294beb91b4ad5a439e2c6ea5a6d.png"
              name="Jane Doe"
              size="md"
            />
          </template>

          <template #content>
            <div style="font-size: 13px; color: var(--fu-color-text-muted); padding-bottom: .25rem;">
              Quick Actions
            </div>
          </template>
        </DropdownMenu>
      </div>
    \`
  }),
  args: {
    align: "right",
    actions: [{
      label: "My Profile",
      icon: User,
      onClick: () => alert("Profile clicked")
    }, {
      label: "My Settings",
      icon: Settings,
      onClick: () => alert("Settings clicked")
    }, {
      label: "Manage Billing",
      icon: CreditCard,
      onClick: () => alert("Billing opened")
    }, {
      label: "Log Out",
      icon: LogOut,
      onClick: () => alert("Logging out...")
    }]
  },
  parameters: {
    docs: {
      description: {
        story: "Shows a dropdown triggered by an avatar with a custom header (content slot) for context."
      }
    }
  }
}`,...n.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: args => ({
    components: {
      DropdownMenu,
      FuAvatar
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <div style="display: flex; justify-content: center; padding: 2rem;">
        <DropdownMenu v-bind="args">
          <template #trigger>
            <FuAvatar
              src="/src/stories/assets/avatars/3d5c49b3ad3f4c409c18c9c184d183b7.png"
              name="Tom Reed"
              size="md"
            />
          </template>
        </DropdownMenu>
      </div>
    \`
  }),
  args: {
    align: "right",
    actions: [{
      label: "Reload",
      icon: RefreshCw,
      onClick: () => alert("Page reloaded")
    }, {
      label: "Switch Theme",
      icon: Moon,
      onClick: () => alert("Theme toggled")
    }, {
      label: "Full Width",
      icon: Maximize2,
      onClick: () => alert("Width toggled")
    }, {
      label: "Log Out",
      icon: LogOut,
      onClick: () => alert("Logged out")
    }]
  },
  parameters: {
    docs: {
      description: {
        story: "Same dropdown but without the content slot — no padding or header is rendered."
      }
    }
  }
}`,...o.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: args => ({
    components: {
      DropdownMenu,
      FusionButton
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <div style="display: flex; justify-content: center; padding: 2rem;">
        <DropdownMenu v-bind="args" :content="true">
          <template #trigger>
            <FusionButton text="More Options" />
          </template>

          <template #content>
            <div style="font-size: 13px; color: var(--fu-color-text-muted); padding-bottom: .25rem;">
              Workspace Tools
            </div>
          </template>
        </DropdownMenu>
      </div>
    \`
  }),
  args: {
    align: "right",
    actions: [{
      label: "Add Item",
      icon: LayoutGrid,
      onClick: () => alert("Item added")
    }, {
      label: "Duplicate",
      icon: RefreshCw,
      onClick: () => alert("Item duplicated")
    }, {
      label: "Move to Folder",
      icon: Globe,
      onClick: () => alert("Moved to folder")
    }, {
      label: "Delete",
      icon: LogOut,
      onClick: () => alert("Deleted")
    }]
  },
  parameters: {
    docs: {
      description: {
        story: "Demonstrates a dropdown menu triggered by a button, showing the optional header slot for context."
      }
    }
  }
}`,...r.parameters?.docs?.source}}};const L=["AvatarWithContent","AvatarSimple","ButtonTrigger"];export{o as AvatarSimple,n as AvatarWithContent,r as ButtonTrigger,L as __namedExportsOrder,A as default};
