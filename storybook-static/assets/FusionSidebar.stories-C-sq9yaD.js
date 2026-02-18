import{s as S,c as C,a as n,g as t,F as _,h as x,n as N,j as o,l as R,d as j,f as F,v as A,t as p}from"./iframe-4anGkjM3.js";import{_ as B}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{c as d}from"./createLucideIcon-MAVkZFkt.js";import{C as b}from"./calendar-BhX05SNM.js";import"./preload-helper-Ct5FWWRu.js";/**
 * @license lucide-vue-next v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const g=d("banknote",[["rect",{width:"20",height:"12",x:"2",y:"6",rx:"2",key:"9lu3g6"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}],["path",{d:"M6 12h.01M18 12h.01",key:"113zkx"}]]);/**
 * @license lucide-vue-next v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const h=d("folder-kanban",[["path",{d:"M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2Z",key:"1fr9dc"}],["path",{d:"M8 10v4",key:"tgpxqk"}],["path",{d:"M12 10v2",key:"hh53o1"}],["path",{d:"M16 10v6",key:"1d6xys"}]]);/**
 * @license lucide-vue-next v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const v=d("git-merge",[["circle",{cx:"18",cy:"18",r:"3",key:"1xkwt0"}],["circle",{cx:"6",cy:"6",r:"3",key:"1lh9wr"}],["path",{d:"M6 21V9a9 9 0 0 0 9 9",key:"7kw0sc"}]]);/**
 * @license lucide-vue-next v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const k=d("shell",[["path",{d:"M14 11a2 2 0 1 1-4 0 4 4 0 0 1 8 0 6 6 0 0 1-12 0 8 8 0 0 1 16 0 10 10 0 1 1-20 0 11.93 11.93 0 0 1 2.42-7.22 2 2 0 1 1 3.16 2.44",key:"1cn552"}]]),D={class:"fu-sidebar__list"},E=["onClick"],w={class:"fu-sidebar__icon-wrapper"},V={key:0,class:"fu-sidebar__badge"},P={class:"fu-sidebar__label"},y=S({__name:"FusionSidebar",props:{modules:{},activeModule:{},backgroundColor:{},borderRadius:{}},emits:["select"],setup(a){const m=a,f=C(()=>({"--fu-sidebar-bg":m.backgroundColor??"var(--fu-brand-background)","--fu-sidebar-radius":m.borderRadius??"0px"}));return(M,K)=>(o(),n("nav",{class:"fu-sidebar",style:N(f.value)},[t("ul",D,[(o(!0),n(_,null,x(a.modules,e=>(o(),n("li",{key:e.name,class:R({active:a.activeModule===e.name})},[t("div",{class:"fu-sidebar__item",onClick:L=>M.$emit("select",e)},[t("div",w,[(o(),j(A(e.icon),{class:"fu-sidebar__icon",size:20})),e.count?(o(),n("span",V,p(e.count>99?"99+":e.count),1)):F("",!0)]),t("span",P,p(e.label),1)],8,E)],2))),128))])],4))}}),q=B(y,[["__scopeId","data-v-dfe88081"]]);y.__docgenInfo={exportName:"default",displayName:"FusionSidebar",description:"",tags:{},props:[{name:"modules",required:!0,type:{name:"Array",elements:[{name:"Module"}]}},{name:"activeModule",required:!1,type:{name:"string"}},{name:"backgroundColor",required:!1,type:{name:"string"}},{name:"borderRadius",required:!1,type:{name:"string"}}],events:[{name:"select"}],sourceFiles:["/Users/xavier/Documents/Websites/Skkido/Fusion-binary-ui/src/components/sidebarmenu/FusionSidebar.vue"]};const T={title:"Components/Sidebar",component:q,tags:["autodocs"],parameters:{docs:{description:{component:`
**FusionSidebar** is a vertical navigation component for switching between application modules.

### Example usage (with Vue Router)

\`\`\`vue
<template>
  <AppShell>
    <template #modules-sidebar>
      <FusionSidebar
        :modules="modules"
        :activeModule="activeModule"
        backgroundColor="var(--fu-brand-surface)"
        borderRadius="16px"
        @select="onSelectModule"
      />
    </template>
  </AppShell>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";
import { useRoute, useRouter } from "vue-router";
import FusionSidebar from "@/components/FusionSidebar.vue";
import { Shell, GitMerge, FolderKanban, Banknote, Calendar } from "lucide-vue-next";

const router = useRouter();
const route = useRoute();

/* Sidebar modules — each has a routeName used for navigation */
const modules = [
  { name: "desk", label: "Desk", icon: Shell, count: 1, routeName: "DESK" },
  { name: "crm", label: "CRM", icon: GitMerge, routeName: "CRM" },
  { name: "project", label: "Project", icon: FolderKanban, routeName: "ProjectHome" },
  { name: "accounting", label: "Account", icon: Banknote, routeName: "AccountingHome" },
  { name: "calendar", label: "Calendar", icon: Calendar, routeName: "CALENDAR" },
];

/* Compute active module based on current route */
const activeModule = computed(() => {
  const matchedNames = route.matched.map(r => r.name);
  return modules.find(m => matchedNames.includes(m.routeName))?.name || null;
});

/* Navigate to the selected module */
function onSelectModule(mod) {
  if (mod.routeName) {
    router.push({ name: mod.routeName });
  }
}
<\/script>
\`\`\`

### Notes

- \`activeModule\` refers to the **module name**.
- Each module can include a \`routeName\` to navigate to a Vue Router route.
- The sidebar emits the full module object on \`@select\`.
      `}}},argTypes:{modules:{description:"List of sidebar modules. Each module includes a `name`, `label`, Lucide `icon`, and optional `count` badge.",control:!1,table:{type:{summary:"{ name: string; label: string; icon: Component; count?: number }[]"}}},activeModule:{description:"Name of the currently active module. Matches the `name` of a module.",control:"select",options:["mydesk","project","crm","accounting","calendar"],table:{type:{summary:"string"}}},backgroundColor:{description:"Background color of the sidebar. Accepts any valid CSS color or CSS variable.",control:"text",table:{defaultValue:{summary:"var(--fu-brand-background)"}}},borderRadius:{description:"Border radius applied to the sidebar container.",control:"text",table:{defaultValue:{summary:"0px"}}},onSelect:{description:"Emitted when a module is clicked.",table:{category:"Events",type:{summary:"(module) => void"}}}}},i=[{name:"mydesk",label:"Desk",icon:k,count:1},{name:"project",label:"Project",icon:h},{name:"crm",label:"CRM",icon:v},{name:"accounting",label:"Account",icon:g},{name:"calendar",label:"Calendar",icon:b}],r={args:{modules:i,activeModule:"mydesk",onSelect:a=>console.log("select:",a)}},s={args:{modules:i,activeModule:"project"}},c={args:{modules:[{name:"mydesk",label:"Desk",icon:k,count:12},{name:"project",label:"Project",icon:h,count:3},{name:"crm",label:"CRM",icon:v,count:120},{name:"accounting",label:"Account",icon:g},{name:"calendar",label:"Calendar",icon:b,count:1}],activeModule:"crm"}},l={args:{modules:i,activeModule:"crm",backgroundColor:"#020617",borderRadius:"20px"}},u={args:{modules:[]}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    modules: sampleModules,
    activeModule: "mydesk",
    onSelect: module => console.log("select:", module)
  }
}`,...r.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    modules: sampleModules,
    activeModule: "project"
  }
}`,...s.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    modules: [{
      name: "mydesk",
      label: "Desk",
      icon: Shell,
      count: 12
    }, {
      name: "project",
      label: "Project",
      icon: FolderKanban,
      count: 3
    }, {
      name: "crm",
      label: "CRM",
      icon: GitMerge,
      count: 120
    }, {
      name: "accounting",
      label: "Account",
      icon: Banknote
    }, {
      name: "calendar",
      label: "Calendar",
      icon: Calendar,
      count: 1
    }],
    activeModule: "crm"
  }
}`,...c.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    modules: sampleModules,
    activeModule: "crm",
    backgroundColor: "#020617",
    borderRadius: "20px"
  }
}`,...l.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    modules: []
  }
}`,...u.parameters?.docs?.source}}};const $=["Default","ProjectActive","WithBadges","CustomStyled","Empty"];export{l as CustomStyled,r as Default,u as Empty,s as ProjectActive,c as WithBadges,$ as __namedExportsOrder,T as default};
