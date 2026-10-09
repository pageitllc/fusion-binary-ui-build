import{q as B,c as w,b as o,d as g,F as b,g as T,i as n,A as P,S as E,o as s,t as M,p as q,f as I,j as N,s as C,y as G}from"./iframe-D7VSQkaL.js";import{F as U}from"./FusionBadge-BgmdZv1V.js";import{_ as R}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{c as _}from"./createLucideIcon-DU4KFhpq.js";import{K as e,M as F}from"./message-square-OSjuP4Wl.js";import{C as t}from"./calendar-BRryK5We.js";import{T as W}from"./triangle-alert-CTpCSD1e.js";import{E as L}from"./eye-XhX_67wr.js";import{C as z}from"./check-4KJzke2l.js";import{M as j}from"./moon-GwGnKaoW.js";import"./preload-helper-Ct5FWWRu.js";/**
 * @license @lucide/vue v1.54.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const V={name:"layout-dashboard",size:24,node:[["rect",{width:"7",height:"9",x:"3",y:"3",rx:"1",key:"10lvy0"}],["rect",{width:"7",height:"5",x:"14",y:"3",rx:"1",key:"16une8"}],["rect",{width:"7",height:"9",x:"14",y:"12",rx:"1",key:"1hutg5"}],["rect",{width:"7",height:"5",x:"3",y:"16",rx:"1",key:"ldoo1y"}]]},f=_(V);/**
 * @license @lucide/vue v1.54.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const H={name:"list-todo",size:24,node:[["path",{d:"M13 5h8",key:"a7qcls"}],["path",{d:"M13 12h8",key:"h98zly"}],["path",{d:"M13 19h8",key:"c3s6r1"}],["path",{d:"m3 17 2 2 4-4",key:"1jhpwq"}],["rect",{x:"3",y:"4",width:"6",height:"6",rx:"1",key:"cif1o7"}]]},k=_(H),K={class:"fu-module-menu-wrapper scrollbar__control customScrollBar"},O={class:"fu-module-menu-wrapper__list"},$={key:0,class:"fu-module-menu-divider",role:"separator"},J={key:1,class:"fu-module-menu-group-title"},Q={class:"fu-module-menu-link__start"},X={key:0,class:"fu-module-menu-empty"},A=B({__name:"FusionModuleMenu",props:{items:{},groups:{},activePath:{}},setup(h){const r=h,v=w(()=>r.groups&&r.groups.length?r.groups:[{items:r.items||[]}]),D=w(()=>v.value.every(l=>!l.items||!l.items.length));return(l,te)=>{const x=E("router-link");return s(),o("div",K,[g("ul",O,[(s(!0),o(b,null,T(v.value,(i,y)=>(s(),o(b,{key:y},[y>0&&(i.divider??!!i.title)?(s(),o("li",$)):n("",!0),i.title?(s(),o("li",J,M(i.title),1)):n("",!0),(s(!0),o(b,null,T(i.items,a=>(s(),o("li",{key:a.path,class:q({active:h.activePath&&h.activePath.startsWith(a.path)})},[I(x,{class:"fu-module-menu-link",to:a.path},{default:N(()=>[g("span",Q,[a.icon?(s(),C(G(a.icon),{key:0,size:15,class:"fu-module-menu-icon"})):n("",!0),g("span",null,M(a.label),1)]),a.badge!==void 0&&a.badge!==null&&a.badge!==""?(s(),C(U,{key:0,class:"fu-module-menu-badge",text:String(a.badge),size:"sm",themeClass:a.badgeTheme||"fu-badge--danger-subtle"},null,8,["text","themeClass"])):n("",!0)]),_:2},1032,["to"])],2))),128))],64))),128)),D.value?(s(),o("li",X,"No menu items")):n("",!0)]),P(l.$slots,"default",{},void 0,!0)])}}}),Y=R(A,[["__scopeId","data-v-d0c0df3d"]]);A.__docgenInfo={exportName:"default",displayName:"FusionModuleMenu",description:"",tags:{},props:[{name:"items",description:"Flat list of menu items — ignored when `groups` is provided",required:!1,type:{name:"Array",elements:[{name:"MenuItem"}]}},{name:"groups",description:"Sectioned menu items, each with an optional title and divider",required:!1,type:{name:"Array",elements:[{name:"MenuGroup"}]}},{name:"activePath",required:!1,type:{name:"string"}}],slots:[{name:"default"}],sourceFiles:["/Users/xavier/Documents/Websites/Skkido/Fusion-binary-ui/src/components/modulemenu/FusionModuleMenu.vue"]};const me={title:"Fusion/Navigation/FusionModuleMenu",component:Y,tags:["autodocs"],parameters:{docs:{description:{component:`
### **FusionModuleMenu**

The \`FusionModuleMenu\` component displays a **vertical navigation menu** used inside module layouts
(like CRM, Projects, or HR).

Each menu item can include an icon and label, automatically highlighting the currently active route.

Use this inside your \`AppShell\`’s \`#module-menu\` slot to render a context-specific sidebar.

---

#### Two menu states: flat vs. grouped

\`FusionModuleMenu\` renders in one of two states depending on which prop you pass. They are mutually
exclusive — when \`groups\` is set, it wins and \`items\` is ignored.

**1. Flat state (\`items\`)** — a single, unsectioned list. No title, no divider. Use this for a simple
module sidebar like CRM or Projects (see \`Default\` / \`EnquiriesActive\` stories).

\`\`\`vue
<template>
  <AppShell>
    <template #module-menu>
      <FusionModuleMenu :items="crmMenu" :activePath="route.path" />
    </template>
    <RouterView />
  </AppShell>
</template>

<script setup lang="ts">
import { useRoute } from "vue-router";
import { LayoutDashboard, User, Users, FileText } from "@lucide/vue";

const route = useRoute();

const crmMenu = [
  { label: "Dashboard", path: "/crm/dashboard", icon: LayoutDashboard },
  { label: "Leads", path: "/crm/leads", icon: User },
  { label: "Clients", path: "/crm/clients", icon: Users },
  { label: "Proposals", path: "/crm/proposals", icon: FileText },
];
<\/script>
\`\`\`

**2. Grouped state (\`groups\`)** — one or more labelled sections, each with its own \`items\`. A
divider rule is shown above a group automatically whenever it has a \`title\`, except the first
group (set \`divider: false\` on a group to suppress it). Use this when the sidebar has multiple
sections, like the Desk sidebar's "Desk" / "Attention states" split (see \`WithGroups\` story).

\`\`\`vue
<template>
  <AppShell>
    <template #module-menu>
      <FusionModuleMenu :groups="deskGroups" :activePath="route.path" />
    </template>
    <RouterView />
  </AppShell>
</template>

<script setup lang="ts">
import { useRoute } from "vue-router";
import { Home, Target, Clock, AlertTriangle, Eye } from "@lucide/vue";

const route = useRoute();

const deskGroups = [
  {
    title: "Desk",
    items: [
      { label: "Home", path: "/desk/home", icon: Home },
      { label: "Client intelligence", path: "/desk/clients", icon: Target, badge: 2, badgeTheme: "fu-badge--danger-subtle" },
      { label: "Follow-ups", path: "/desk/follow-ups", icon: Clock, badge: 4, badgeTheme: "fu-badge--warning-subtle" },
    ],
  },
  {
    title: "Attention states",
    items: [
      { label: "At risk", path: "/desk/at-risk", icon: AlertTriangle, badge: 2, badgeTheme: "fu-badge--danger-subtle" },
      { label: "Needs attention", path: "/desk/needs-attention", icon: Eye, badge: 3, badgeTheme: "fu-badge--warning-subtle" },
    ],
  },
];
<\/script>
\`\`\`

---

#### Props
| Prop | Type | Description |
|------|------|-------------|
| \`items\` | \`MenuItem[]?\` | Flat list of navigation entries. Ignored when \`groups\` is passed. |
| \`groups\` | \`MenuGroup[]?\` | Sectioned entries, each with an optional \`title\` and \`divider\`. Use this instead of \`items\` for grouped menus. |
| \`activePath\` | \`string?\` | The currently active route path (used to highlight the item) |

#### MenuGroup fields
| Field | Type | Description |
|-------|------|-------------|
| \`title\` | \`string?\` | Section label rendered above the group, e.g. \`"DESK"\` or \`"ATTENTION STATES"\` |
| \`divider\` | \`boolean?\` | Shows a horizontal rule above the group. Defaults to \`true\` when the group has a title (except the first group) — set \`false\` to show just the label with no rule. |
| \`items\` | \`MenuItem[]\` | The items in this group |

#### MenuItem badge fields
| Field | Type | Description |
|-------|------|-------------|
| \`badge\` | \`string \\| number\` | Count or label rendered on the right of the item, e.g. \`2\`, \`"99+"\` |
| \`badgeTheme\` | \`string\` | A \`FusionBadge\` \`themeClass\`, e.g. \`"fu-badge--danger-subtle"\` or \`"fu-badge--warning-subtle"\`. Defaults to \`"fu-badge--danger-subtle"\` when a badge is set but no theme is given. |

\`\`\`ts
const desktMenu = [
  { label: "Client intelligence", path: "/desk/clients", badge: 2, badgeTheme: "fu-badge--danger-subtle" },
  { label: "Follow-ups", path: "/desk/follow-ups", badge: 4, badgeTheme: "fu-badge--warning-subtle" },
];
\`\`\`

---

####  Features
- Scrollable vertical list with hover and active states
- Works seamlessly with Vue Router
- Fully composable — accepts any Vue icon component (e.g., Lucide icons)
- Optional badge/count per item, with a selectable color via \`badgeTheme\`
- Shows a fallback message (“No menu items”) when list is empty
        `}}},argTypes:{activePath:{control:"select",options:["/dashboard","/enquiries","/calendar","/users"],description:"Currently active route path (to highlight the correct item)."},items:{control:"object",description:"Array of menu items with `label`, `path`, and optional Lucide `icon` component."},groups:{control:"object",description:"Array of `{ title?, divider?, items }` groups. Takes priority over `items` when set."}}},S=[{label:"Dashboard",path:"/dashboard",icon:f},{label:"Tasks",path:"/enquiries",icon:k},{label:"Boards",path:"/calendar",icon:e},{label:"Calendar",path:"/users",icon:t},{label:"Boards",path:"/calendar",icon:e},{label:"Calendar",path:"/users",icon:t},{label:"Boards",path:"/calendar",icon:e},{label:"Calendar",path:"/users",icon:t},{label:"Boards",path:"/calendar",icon:e},{label:"Calendar",path:"/users",icon:t},{label:"Boards",path:"/calendar",icon:e},{label:"Calendar",path:"/users",icon:t},{label:"Boards",path:"/calendar",icon:e},{label:"Calendar",path:"/users",icon:t},{label:"Boards",path:"/calendar",icon:e},{label:"Calendar",path:"/users",icon:t},{label:"Boards",path:"/calendar",icon:e},{label:"Calendar",path:"/users",icon:t},{label:"Boards",path:"/calendar",icon:e},{label:"Calendar",path:"/users",icon:t},{label:"Boards",path:"/calendar",icon:e},{label:"Calendar",path:"/users",icon:t},{label:"Boards",path:"/calendar",icon:e},{label:"Calendar",path:"/users",icon:t},{label:"Boards",path:"/calendar",icon:e},{label:"Calendar",path:"/users",icon:t},{label:"Boards",path:"/calendar",icon:e},{label:"Calendar",path:"/users",icon:t}],d={args:{items:S,activePath:"/dashboard/m3e3e3e/here"}},u={args:{items:S,activePath:"/enquiries"}},c={args:{items:[]}},Z=[{label:"Home",path:"/desk/home",icon:f},{label:"Client intelligence",path:"/desk/clients",icon:k,badge:2,badgeTheme:"fu-badge--danger-subtle"},{label:"Follow-ups",path:"/desk/follow-ups",icon:t,badge:4,badgeTheme:"fu-badge--warning-subtle"},{label:"Activity feed",path:"/desk/activity",icon:F},{label:"Upcoming",path:"/desk/upcoming",icon:e}],p={args:{items:Z,activePath:"/desk/clients"}},ee=[{title:"Desk",items:[{label:"Home",path:"/desk/home",icon:F},{label:"Client intelligence",path:"/desk/clients",icon:e,badge:2,badgeTheme:"fu-badge--danger-subtle"},{label:"Follow-ups",path:"/desk/follow-ups",icon:t,badge:4,badgeTheme:"fu-badge--warning-subtle"},{label:"Activity feed",path:"/desk/activity",icon:k},{label:"Upcoming",path:"/desk/upcoming",icon:f}]},{title:"Attention states",items:[{label:"At risk",path:"/desk/at-risk",icon:W,badge:2,badgeTheme:"fu-badge--danger-subtle"},{label:"Needs attention",path:"/desk/needs-attention",icon:L,badge:3,badgeTheme:"fu-badge--warning-subtle"},{label:"Active",path:"/desk/active",icon:z},{label:"Dormant",path:"/desk/dormant",icon:j}]}],m={name:"With grouped sections",args:{groups:ee,activePath:"/desk/clients"}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    items: sampleItems,
    activePath: "/dashboard/m3e3e3e/here"
  }
}`,...d.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    items: sampleItems,
    activePath: "/enquiries"
  }
}`,...u.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    items: []
  }
}`,...c.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    items: deskItems,
    activePath: "/desk/clients"
  }
}`,...p.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  name: "With grouped sections",
  args: {
    groups: deskGroups,
    activePath: "/desk/clients"
  }
}`,...m.parameters?.docs?.source}}};const he=["Default","EnquiriesActive","Empty","WithBadges","WithGroups"];export{d as Default,c as Empty,u as EnquiriesActive,p as WithBadges,m as WithGroups,he as __namedExportsOrder,me as default};
