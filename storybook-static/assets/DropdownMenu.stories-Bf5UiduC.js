import{D as n}from"./DropdownMenu-T05_rL4n.js";import{F as b}from"./FuAvatar-Cl3DFHgX.js";import{F as c}from"./FusionButton-uKQ8jdTT.js";import{c as d}from"./createLucideIcon-DU4KFhpq.js";import{M as v}from"./moon-GwGnKaoW.js";import{L as t}from"./log-out-DiXrJDr-.js";import{U as p}from"./user-MrbnWp6R.js";import{S as u}from"./settings-RGp2g92p.js";import{L as m}from"./layout-grid-BVTCgRus.js";import{T as y}from"./trash-Ddd_QVf6.js";import"./iframe-D7VSQkaL.js";import"./preload-helper-Ct5FWWRu.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";/**
 * @license @lucide/vue v1.54.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const f={name:"credit-card",size:24,node:[["rect",{width:"20",height:"14",x:"2",y:"5",rx:"2",key:"ynyp8z"}],["line",{x1:"2",x2:"22",y1:"10",y2:"10",key:"1b3vmo"}],["path",{d:"M6 14h2",key:"mk7k0u"}]]},g=d(f);/**
 * @license @lucide/vue v1.54.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const k={name:"globe",size:24,node:[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20",key:"13o1zl"}],["path",{d:"M2 12h20",key:"9i4pu4"}]]},w=d(k);/**
 * @license @lucide/vue v1.54.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const M={name:"maximize-2",size:24,node:[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"m21 3-7 7",key:"1l2asr"}],["path",{d:"m3 21 7-7",key:"tjx5ai"}],["path",{d:"M9 21H3v-6",key:"wtvkvv"}]]},C=d(M);/**
 * @license @lucide/vue v1.54.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const D={name:"refresh-cw",size:24,node:[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",key:"v9h5vc"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",key:"3uifl3"}],["path",{d:"M8 16H3v5",key:"1cv678"}]]},h=d(D),I={title:"Fusion/Menus/DropdownMenu",component:n,tags:["autodocs"],parameters:{docs:{description:{component:`
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
- Individual actions can be **disabled** via the \`disabled\` property

---

### Props

| Prop | Type | Default | Description |
|------|------|----------|-------------|
| \`actions\` | \`{ label: string; icon?: Component; onClick?: () => void; disabled?: boolean }[]\` | — | Array of menu options |
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
import { User, Settings, LogOut } from "@lucide/vue";

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
        `}}}},o={render:e=>({components:{DropdownMenu:n,FuAvatar:b},setup(){return{args:e}},template:`
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
    `}),args:{align:"right",actions:[{label:"My Profile",icon:p,onClick:()=>alert("Profile clicked")},{label:"My Settings",icon:u,onClick:()=>alert("Settings clicked")},{label:"Manage Billing",icon:g,onClick:()=>alert("Billing opened")},{label:"Log Out",icon:t,onClick:()=>alert("Logging out...")}]},parameters:{docs:{description:{story:"Shows a dropdown triggered by an avatar with a custom header (content slot) for context."}}}},i={render:e=>({components:{DropdownMenu:n,FuAvatar:b},setup(){return{args:e}},template:`
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
    `}),args:{align:"right",actions:[{label:"Reload",icon:h,onClick:()=>alert("Page reloaded")},{label:"Switch Theme",icon:v,onClick:()=>alert("Theme toggled")},{label:"Full Width",icon:C,onClick:()=>alert("Width toggled")},{label:"Log Out",icon:t,onClick:()=>alert("Logged out")}]},parameters:{docs:{description:{story:"Same dropdown but without the content slot — no padding or header is rendered."}}}},r={render:e=>({components:{DropdownMenu:n,FusionButton:c},setup(){return{args:e}},template:`
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
    `}),args:{align:"right",actions:[{label:"Add Item",icon:m,onClick:()=>alert("Item added")},{label:"Duplicate",icon:h,onClick:()=>alert("Item duplicated")},{label:"Move to Folder",icon:w,onClick:()=>alert("Moved to folder")},{label:"Delete",icon:t,onClick:()=>alert("Deleted")}]},parameters:{docs:{description:{story:"Demonstrates a dropdown menu triggered by a button, showing the optional header slot for context."}}}},a={render:e=>({components:{DropdownMenu:n,FusionButton:c},setup(){return{args:e}},template:`
      <div style="display: flex; justify-content: center; padding: 2rem;">
        <DropdownMenu v-bind="args" :content="true">
          <template #trigger>
            <FusionButton text="Actions" />
          </template>

          <template #content>
            <div style="font-size: 13px; color: var(--fu-color-text-muted); padding-bottom: .25rem;">
              Item Actions
            </div>
          </template>
        </DropdownMenu>
      </div>
    `}),args:{align:"right",actions:[{label:"My Profile",icon:p,onClick:()=>alert("Profile clicked")},{label:"Settings",icon:u,onClick:()=>alert("Settings clicked"),disabled:!0},{label:"Manage Billing",icon:g,onClick:()=>alert("Billing opened"),disabled:!0},{label:"Delete",icon:y,onClick:()=>alert("Deleted")}]},parameters:{docs:{description:{story:"Actions can be individually disabled by setting `disabled: true` on any action object. Disabled items are visually dimmed, show a `not-allowed` cursor, and cannot be clicked."}}}},l={render:e=>({components:{DropdownMenu:n,FusionButton:c},setup(){return{args:e}},template:`
      <div style="display: flex; justify-content: center; padding: 2rem;">
        <DropdownMenu v-bind="args" :content="true">
          <template #trigger>
            <FusionButton text="Open Menu" />
          </template>

          <template #content>
            <div style="font-size: 13px; color: var(--fu-color-text-muted); padding-bottom: .25rem;">
              User Menu
            </div>
          </template>
        </DropdownMenu>
      </div>
    `}),args:{align:"right",groups:[{label:"Account",actions:[{label:"Profile",icon:p,onClick:()=>alert("Profile")},{label:"Settings",icon:u,onClick:()=>alert("Settings")}]},{label:"Workspace",actions:[{label:"Dashboard",icon:m,onClick:()=>alert("Dashboard")},{label:"Switch Theme",icon:v,onClick:()=>alert("Theme")}]},{actions:[{label:"Billing",icon:g,onClick:()=>alert("Billing")},{label:"Logout",icon:t,onClick:()=>alert("Logout")}]}]},parameters:{docs:{description:{story:`
Demonstrates the new **grouped dropdown menu** with:

- Section labels (e.g. *Account*, *Workspace*)
- Automatic divider lines between groups
- Mixed labeled and unlabeled groups

This is useful for organizing complex menus into logical sections.
        `}}}},s={render:e=>({components:{DropdownMenu:n,FusionButton:c},setup(){return{args:e}},template:`
      <div style="display: flex; justify-content: center; padding: 2rem;">
        <DropdownMenu v-bind="args" :content="true">
          <template #trigger>
            <FusionButton text="Open Menu" />
          </template>

          <template #content>
            <div style="font-size: 13px; color: var(--fu-color-text-muted); padding-bottom: .25rem;">
              Actions
            </div>
          </template>
        </DropdownMenu>
      </div>
    `}),args:{align:"right",actions:[{label:"Profile",icon:p,onClick:()=>alert("Profile")},{label:"Settings",icon:u,onClick:()=>alert("Settings")},{type:"divider"},{label:"Billing",icon:g,onClick:()=>alert("Billing")},{label:"Workspace",icon:m,onClick:()=>alert("Workspace")},{type:"divider"},{label:"Logout",icon:t,onClick:()=>alert("Logout")}]},parameters:{docs:{description:{story:`
Demonstrates **manual divider lines** inside the dropdown using:

\`{ type: "divider" }\`

### Use cases:
- Separate logical sections without full grouping
- Highlight destructive or important actions
- Improve scanability in long menus

Dividers can be placed **anywhere** in the actions array.
        `}}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...o.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
}`,...i.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...r.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
            <FusionButton text="Actions" />
          </template>

          <template #content>
            <div style="font-size: 13px; color: var(--fu-color-text-muted); padding-bottom: .25rem;">
              Item Actions
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
      label: "Settings",
      icon: Settings,
      onClick: () => alert("Settings clicked"),
      disabled: true
    }, {
      label: "Manage Billing",
      icon: CreditCard,
      onClick: () => alert("Billing opened"),
      disabled: true
    }, {
      label: "Delete",
      icon: Trash2,
      onClick: () => alert("Deleted")
    }]
  },
  parameters: {
    docs: {
      description: {
        story: "Actions can be individually disabled by setting \`disabled: true\` on any action object. Disabled items are visually dimmed, show a \`not-allowed\` cursor, and cannot be clicked."
      }
    }
  }
}`,...a.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
            <FusionButton text="Open Menu" />
          </template>

          <template #content>
            <div style="font-size: 13px; color: var(--fu-color-text-muted); padding-bottom: .25rem;">
              User Menu
            </div>
          </template>
        </DropdownMenu>
      </div>
    \`
  }),
  args: {
    align: "right",
    groups: [{
      label: "Account",
      actions: [{
        label: "Profile",
        icon: User,
        onClick: () => alert("Profile")
      }, {
        label: "Settings",
        icon: Settings,
        onClick: () => alert("Settings")
      }]
    }, {
      label: "Workspace",
      actions: [{
        label: "Dashboard",
        icon: LayoutGrid,
        onClick: () => alert("Dashboard")
      }, {
        label: "Switch Theme",
        icon: Moon,
        onClick: () => alert("Theme")
      }]
    }, {
      actions: [{
        label: "Billing",
        icon: CreditCard,
        onClick: () => alert("Billing")
      }, {
        label: "Logout",
        icon: LogOut,
        onClick: () => alert("Logout")
      }]
    }]
  },
  parameters: {
    docs: {
      description: {
        story: \`
Demonstrates the new **grouped dropdown menu** with:

- Section labels (e.g. *Account*, *Workspace*)
- Automatic divider lines between groups
- Mixed labeled and unlabeled groups

This is useful for organizing complex menus into logical sections.
        \`
      }
    }
  }
}`,...l.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
            <FusionButton text="Open Menu" />
          </template>

          <template #content>
            <div style="font-size: 13px; color: var(--fu-color-text-muted); padding-bottom: .25rem;">
              Actions
            </div>
          </template>
        </DropdownMenu>
      </div>
    \`
  }),
  args: {
    align: "right",
    actions: [{
      label: "Profile",
      icon: User,
      onClick: () => alert("Profile")
    }, {
      label: "Settings",
      icon: Settings,
      onClick: () => alert("Settings")
    }, {
      type: "divider"
    }, {
      label: "Billing",
      icon: CreditCard,
      onClick: () => alert("Billing")
    }, {
      label: "Workspace",
      icon: LayoutGrid,
      onClick: () => alert("Workspace")
    }, {
      type: "divider"
    }, {
      label: "Logout",
      icon: LogOut,
      onClick: () => alert("Logout")
    }]
  },
  parameters: {
    docs: {
      description: {
        story: \`
Demonstrates **manual divider lines** inside the dropdown using:

\\\`{ type: "divider" }\\\`

### Use cases:
- Separate logical sections without full grouping
- Highlight destructive or important actions
- Improve scanability in long menus

Dividers can be placed **anywhere** in the actions array.
        \`
      }
    }
  }
}`,...s.parameters?.docs?.source}}};const _=["AvatarWithContent","AvatarSimple","ButtonTrigger","WithDisabledActions","GroupedActions","WithDividers"];export{i as AvatarSimple,o as AvatarWithContent,r as ButtonTrigger,l as GroupedActions,a as WithDisabledActions,s as WithDividers,_ as __namedExportsOrder,I as default};
