import{s as y,a as r,g as u,y as g,f as d,F as v,h as f,M as k,j as o,l as M,b as C,w as x,d as _,v as w,t as B}from"./iframe-DKpyqR87.js";import{_ as F}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{c}from"./createLucideIcon-H_lQUGxs.js";import{C as e}from"./calendar-C8aNlwQU.js";import"./preload-helper-Ct5FWWRu.js";/**
 * @license lucide-vue-next v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const a=c("kanban",[["path",{d:"M5 3v14",key:"9nsxs2"}],["path",{d:"M12 3v8",key:"1h2ygw"}],["path",{d:"M19 3v18",key:"1sk56x"}]]);/**
 * @license lucide-vue-next v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const P=c("layout-dashboard",[["rect",{width:"7",height:"9",x:"3",y:"3",rx:"1",key:"10lvy0"}],["rect",{width:"7",height:"5",x:"14",y:"3",rx:"1",key:"16une8"}],["rect",{width:"7",height:"9",x:"14",y:"12",rx:"1",key:"1hutg5"}],["rect",{width:"7",height:"5",x:"3",y:"16",rx:"1",key:"ldoo1y"}]]);/**
 * @license lucide-vue-next v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const S=c("list-todo",[["path",{d:"M13 5h8",key:"a7qcls"}],["path",{d:"M13 12h8",key:"h98zly"}],["path",{d:"M13 19h8",key:"c3s6r1"}],["path",{d:"m3 17 2 2 4-4",key:"1jhpwq"}],["rect",{x:"3",y:"4",width:"6",height:"6",rx:"1",key:"cif1o7"}]]),D={class:"fu-module-menu-wrapper scrollbar__control customScrollBar"},q={class:"fu-module-menu-wrapper__list"},L={key:0,class:"fu-module-menu-empty"},p=y({__name:"FusionModuleMenu",props:{items:{},activePath:{}},setup(s){return(m,I)=>{const b=k("router-link");return o(),r("div",D,[u("ul",q,[(o(!0),r(v,null,f(s.items,t=>(o(),r("li",{key:t.path,class:M({active:s.activePath&&s.activePath.startsWith(t.path)})},[C(b,{class:"fu-module-menu-link",to:t.path},{default:x(()=>[t.icon?(o(),_(w(t.icon),{key:0,size:15,class:"fu-module-menu-icon"})):d("",!0),u("span",null,B(t.label),1)]),_:2},1032,["to"])],2))),128)),!s.items||!s.items.length?(o(),r("li",L,"No menu items")):d("",!0)]),g(m.$slots,"default",{},void 0,!0)])}}}),T=F(p,[["__scopeId","data-v-7ff3c35c"]]);p.__docgenInfo={exportName:"default",displayName:"FusionModuleMenu",description:"",tags:{},props:[{name:"items",required:!0,type:{name:"Array",elements:[{name:"MenuItem"}]}},{name:"activePath",required:!1,type:{name:"string"}}],slots:[{name:"default"}],sourceFiles:["/Users/xavier/Documents/Websites/Skkido/Fusion-binary-ui/src/components/modulemenu/FusionModuleMenu.vue"]};const V={title:"Components/ModuleMenu",component:T,tags:["autodocs"],parameters:{docs:{description:{component:`
### **FusionModuleMenu**

The \`FusionModuleMenu\` component displays a **vertical navigation menu** used inside module layouts
(like CRM, Projects, or HR).

Each menu item can include an icon and label, automatically highlighting the currently active route.

---

#### Typical Usage
Use this inside your \`AppShell\`’s \`#module-menu\` slot to render a context-specific sidebar.

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
import { LayoutDashboard, User, Users, FileText } from "lucide-vue-next";

const route = useRoute();

const crmMenu = [
  { label: "Dashboard", path: "/crm/dashboard", icon: LayoutDashboard },
  { label: "Leads", path: "/crm/leads", icon: User },
  { label: "Clients", path: "/crm/clients", icon: Users },
  { label: "Proposals", path: "/crm/proposals", icon: FileText },
];
<\/script>
\`\`\`

---

#### Props
| Prop | Type | Description |
|------|------|-------------|
| \`items\` | \`MenuItem[]\` | List of navigation entries with label, path, and optional icon |
| \`activePath\` | \`string?\` | The currently active route path (used to highlight the item) |

---

####  Features
- Scrollable vertical list with hover and active states  
- Works seamlessly with Vue Router  
- Fully composable — accepts any Vue icon component (e.g., Lucide icons)  
- Shows a fallback message (“No menu items”) when list is empty  
        `}}},argTypes:{activePath:{control:"select",options:["/dashboard","/enquiries","/calendar","/users"],description:"Currently active route path (to highlight the correct item)."},items:{control:"object",description:"Array of menu items with `label`, `path`, and optional Lucide `icon` component."}}},h=[{label:"Dashboard",path:"/dashboard",icon:P},{label:"Tasks",path:"/enquiries",icon:S},{label:"Boards",path:"/calendar",icon:a},{label:"Calendar",path:"/users",icon:e},{label:"Boards",path:"/calendar",icon:a},{label:"Calendar",path:"/users",icon:e},{label:"Boards",path:"/calendar",icon:a},{label:"Calendar",path:"/users",icon:e},{label:"Boards",path:"/calendar",icon:a},{label:"Calendar",path:"/users",icon:e},{label:"Boards",path:"/calendar",icon:a},{label:"Calendar",path:"/users",icon:e},{label:"Boards",path:"/calendar",icon:a},{label:"Calendar",path:"/users",icon:e},{label:"Boards",path:"/calendar",icon:a},{label:"Calendar",path:"/users",icon:e},{label:"Boards",path:"/calendar",icon:a},{label:"Calendar",path:"/users",icon:e},{label:"Boards",path:"/calendar",icon:a},{label:"Calendar",path:"/users",icon:e},{label:"Boards",path:"/calendar",icon:a},{label:"Calendar",path:"/users",icon:e},{label:"Boards",path:"/calendar",icon:a},{label:"Calendar",path:"/users",icon:e},{label:"Boards",path:"/calendar",icon:a},{label:"Calendar",path:"/users",icon:e},{label:"Boards",path:"/calendar",icon:a},{label:"Calendar",path:"/users",icon:e}],n={args:{items:h,activePath:"/dashboard/m3e3e3e/here"}},l={args:{items:h,activePath:"/enquiries"}},i={args:{items:[]}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    items: sampleItems,
    activePath: "/dashboard/m3e3e3e/here"
  }
}`,...n.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    items: sampleItems,
    activePath: "/enquiries"
  }
}`,...l.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    items: []
  }
}`,...i.parameters?.docs?.source}}};const j=["Default","EnquiriesActive","Empty"];export{n as Default,i as Empty,l as EnquiriesActive,j as __namedExportsOrder,V as default};
