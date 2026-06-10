import{d as P,r as y,c as V,b as t,g as v,F as I,e as W,f as j,n as B,t as k,i as M,T as q,o,j as F,y as K}from"./iframe-D3vfv6YP.js";import{_ as z}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{c as b}from"./createLucideIcon-DKFlsGA7.js";import{C}from"./calendar-D2HB_VTl.js";import"./preload-helper-Ct5FWWRu.js";/**
 * @license lucide-vue-next v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const S=b("banknote",[["rect",{width:"20",height:"12",x:"2",y:"6",rx:"2",key:"9lu3g6"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}],["path",{d:"M6 12h.01M18 12h.01",key:"113zkx"}]]);/**
 * @license lucide-vue-next v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const L=b("folder-kanban",[["path",{d:"M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2Z",key:"1fr9dc"}],["path",{d:"M8 10v4",key:"tgpxqk"}],["path",{d:"M12 10v2",key:"hh53o1"}],["path",{d:"M16 10v6",key:"1d6xys"}]]);/**
 * @license lucide-vue-next v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const x=b("git-merge",[["circle",{cx:"18",cy:"18",r:"3",key:"1xkwt0"}],["circle",{cx:"6",cy:"6",r:"3",key:"1lh9wr"}],["path",{d:"M6 21V9a9 9 0 0 0 9 9",key:"7kw0sc"}]]);/**
 * @license lucide-vue-next v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _=b("shell",[["path",{d:"M14 11a2 2 0 1 1-4 0 4 4 0 0 1 8 0 6 6 0 0 1-12 0 8 8 0 0 1 16 0 10 10 0 1 1-20 0 11.93 11.93 0 0 1 2.42-7.22 2 2 0 1 1 3.16 2.44",key:"1cn552"}]]),G={class:"fu-sidebar__list"},H=["onClick","onMouseenter"],O={class:"fu-sidebar__icon-wrapper"},T={key:0,class:"fu-sidebar__badge"},$={key:0,class:"fu-sidebar__label"},N=P({__name:"FusionSidebar",props:{modules:{},activeModule:{},backgroundColor:{},borderRadius:{},hideLabels:{type:Boolean}},emits:["select"],setup(a){const s=a;y(null);const r=y(null),R=y({}),A=V(()=>({"--fu-sidebar-bg":s.backgroundColor??"var(--fu-brand-background)","--fu-sidebar-radius":s.borderRadius??"0px",width:s.hideLabels?"54px":"70px"}));function D(g,f){if(!s.hideLabels)return;const e=s.modules.find(E=>E.name===f);r.value=e?.label??f;const n=g.currentTarget.getBoundingClientRect();R.value={position:"fixed",left:`${n.right+8}px`,top:`${n.top+n.height/2}px`,transform:"translateY(-50%)",zIndex:"99999"}}function w(){r.value=null}return(g,f)=>(o(),t("nav",{class:"fu-sidebar",style:B(A.value)},[v("ul",G,[(o(!0),t(I,null,W(a.modules,e=>(o(),t("li",{key:e.name,class:F({active:a.activeModule===e.name})},[v("div",{class:F(["fu-sidebar__item",{"fu-sidebar__item--collapsed":a.hideLabels}]),onClick:n=>g.$emit("select",e),onMouseenter:n=>D(n,e.name),onMouseleave:w},[v("div",O,[(o(),j(K(e.icon),{class:"fu-sidebar__icon",size:20})),e.count?(o(),t("span",T,k(e.count>99?"99+":e.count),1)):M("",!0)]),a.hideLabels?M("",!0):(o(),t("span",$,k(e.label),1))],42,H)],2))),128))]),(o(),j(q,{to:"body"},[a.hideLabels&&r.value?(o(),t("span",{key:0,class:"fu-sidebar__tooltip",style:B(R.value)},k(r.value),5)):M("",!0)]))],4))}}),U=z(N,[["__scopeId","data-v-3af597f2"]]);N.__docgenInfo={exportName:"default",displayName:"FusionSidebar",description:"",tags:{},props:[{name:"modules",required:!0,type:{name:"Array",elements:[{name:"Module"}]}},{name:"activeModule",required:!1,type:{name:"string"}},{name:"backgroundColor",required:!1,type:{name:"string"}},{name:"borderRadius",required:!1,type:{name:"string"}},{name:"hideLabels",required:!1,type:{name:"boolean"}}],events:[{name:"select"}],sourceFiles:["/Users/xavier/Documents/Websites/Skkido/Fusion-binary-ui/src/components/sidebarmenu/FusionSidebar.vue"]};const ee={title:"Components/Sidebar",component:U,tags:["autodocs"],parameters:{docs:{description:{component:`
**FusionSidebar** is a vertical navigation component for switching between application modules.

### Example usage (with Vue Router)

\`\`\`vue
<template>
  <AppShell>
    <template #modules-sidebar>
      <FusionSidebar
        :modules="modules"
        :activeModule="activeModule"
        :hideLabels="false"
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

const modules = [
  { name: "desk", label: "Desk", icon: Shell, count: 1, routeName: "DESK" },
  { name: "crm", label: "CRM", icon: GitMerge, routeName: "CRM" },
  { name: "project", label: "Project", icon: FolderKanban, routeName: "ProjectHome" },
  { name: "accounting", label: "Account", icon: Banknote, routeName: "AccountingHome" },
  { name: "calendar", label: "Calendar", icon: Calendar, routeName: "CALENDAR" },
];

const activeModule = computed(() => {
  const matchedNames = route.matched.map(r => r.name);
  return modules.find(m => matchedNames.includes(m.routeName))?.name || null;
});

function onSelectModule(mod) {
  if (mod.routeName) router.push({ name: mod.routeName });
}
<\/script>
\`\`\`

### Notes

- \`activeModule\` refers to the **module name**.
- \`hideLabels\` collapses the sidebar to icon-only mode. Labels appear as tooltips on hover to the right of each item.
- Each module can include a \`routeName\` to navigate to a Vue Router route.
- The sidebar emits the full module object on \`@select\`.
        `}}},argTypes:{modules:{description:"List of sidebar modules.",control:!1,table:{type:{summary:"{ name: string; label: string; icon: Component; count?: number }[]"}}},activeModule:{description:"Name of the currently active module.",control:"select",options:["mydesk","project","crm","accounting","calendar"],table:{type:{summary:"string"}}},hideLabels:{description:"When `true`, hides the text labels and shows them as tooltips on hover instead. Useful for compact/collapsed sidebar layouts.",control:"boolean",table:{defaultValue:{summary:"false"}}},backgroundColor:{description:"Background color of the sidebar.",control:"text",table:{defaultValue:{summary:"var(--fu-brand-background)"}}},borderRadius:{description:"Border radius applied to the sidebar container.",control:"text",table:{defaultValue:{summary:"0px"}}},onSelect:{description:"Emitted when a module is clicked.",table:{category:"Events",type:{summary:"(module) => void"}}}}},h=[{name:"mydesk",label:"Desk",icon:_,count:1},{name:"project",label:"Project",icon:L},{name:"crm",label:"CRM",icon:x},{name:"accounting",label:"Account",icon:S},{name:"calendar",label:"Calendar",icon:C}],l={args:{modules:h,activeModule:"mydesk",hideLabels:!1,onSelect:a=>console.log("select:",a)}},c={name:"Icon Only (hideLabels)",args:{modules:h,activeModule:"mydesk",hideLabels:!0}},i={args:{modules:h,activeModule:"project",hideLabels:!1}},d={args:{modules:[{name:"mydesk",label:"Desk",icon:_,count:12},{name:"project",label:"Project",icon:L,count:3},{name:"crm",label:"CRM",icon:x,count:120},{name:"accounting",label:"Account",icon:S},{name:"calendar",label:"Calendar",icon:C,count:1}],activeModule:"crm",hideLabels:!1}},u={name:"With Badges (Icon Only)",args:{modules:[{name:"mydesk",label:"Desk",icon:_,count:12},{name:"project",label:"Project",icon:L,count:3},{name:"crm",label:"CRM",icon:x,count:120},{name:"accounting",label:"Account",icon:S},{name:"calendar",label:"Calendar",icon:C,count:1}],activeModule:"crm",hideLabels:!0}},m={args:{modules:h,activeModule:"crm",backgroundColor:"#020617",borderRadius:"20px",hideLabels:!1}},p={args:{modules:[],hideLabels:!1}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    modules: sampleModules,
    activeModule: "mydesk",
    hideLabels: false,
    onSelect: module => console.log("select:", module)
  }
}`,...l.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  name: "Icon Only (hideLabels)",
  args: {
    modules: sampleModules,
    activeModule: "mydesk",
    hideLabels: true
  }
}`,...c.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    modules: sampleModules,
    activeModule: "project",
    hideLabels: false
  }
}`,...i.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
    activeModule: "crm",
    hideLabels: false
  }
}`,...d.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  name: "With Badges (Icon Only)",
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
    activeModule: "crm",
    hideLabels: true
  }
}`,...u.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    modules: sampleModules,
    activeModule: "crm",
    backgroundColor: "#020617",
    borderRadius: "20px",
    hideLabels: false
  }
}`,...m.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    modules: [],
    hideLabels: false
  }
}`,...p.parameters?.docs?.source}}};const ae=["Default","HideLabels","ProjectActive","WithBadges","WithBadgesCollapsed","CustomStyled","Empty"];export{m as CustomStyled,l as Default,p as Empty,c as HideLabels,i as ProjectActive,d as WithBadges,u as WithBadgesCollapsed,ae as __namedExportsOrder,ee as default};
