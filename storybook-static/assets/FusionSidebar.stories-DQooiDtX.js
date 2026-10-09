import{q as H,r as C,c as E,b as n,d as t,F as $,g as I,s as m,m as S,y as L,t as d,i as p,T as K,o as a,p as P}from"./iframe-D7VSQkaL.js";import{_ as G}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{c as M}from"./createLucideIcon-DU4KFhpq.js";import{C as x}from"./calendar-BRryK5We.js";import"./preload-helper-Ct5FWWRu.js";/**
 * @license @lucide/vue v1.54.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const O={name:"banknote",size:24,node:[["rect",{width:"20",height:"12",x:"2",y:"6",rx:"2",key:"9lu3g6"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}],["path",{d:"M6 12h.01M18 12h.01",key:"113zkx"}]]},R=M(O);/**
 * @license @lucide/vue v1.54.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const U={name:"folder-kanban",size:24,node:[["path",{d:"M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2Z",key:"1fr9dc"}],["path",{d:"M8 10v4",key:"tgpxqk"}],["path",{d:"M12 10v2",key:"hh53o1"}],["path",{d:"M16 10v6",key:"1d6xys"}]]},B=M(U);/**
 * @license @lucide/vue v1.54.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Y={name:"git-merge",size:24,node:[["circle",{cx:"18",cy:"18",r:"3",key:"1xkwt0"}],["circle",{cx:"6",cy:"6",r:"3",key:"1lh9wr"}],["path",{d:"M6 21V9a9 9 0 0 0 9 9",key:"7kw0sc"}]]},N=M(Y);/**
 * @license @lucide/vue v1.54.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Z={name:"shell",size:24,node:[["path",{d:"M14 11a2 2 0 1 1-4 0 4 4 0 0 1 8 0 6 6 0 0 1-12 0 8 8 0 0 1 16 0 10 10 0 1 1-20 0 11.93 11.93 0 0 1 2.42-7.22 2 2 0 1 1 3.16 2.44",key:"1cn552"}]]},j=M(Z),J={class:"fu-sidebar__list"},Q=["onMouseenter"],X=["onClick"],ee={class:"fu-sidebar__icon-wrapper"},ae={key:0,class:"fu-sidebar__badge"},oe={key:0,class:"fu-sidebar__label"},ne={class:"fu-sidebar__flyout-inner"},te={class:"fu-sidebar__flyout-header"},se={class:"fu-sidebar__flyout-links"},le=["onClick"],V=H({__name:"FusionSidebar",props:{modules:{},activeModule:{},backgroundColor:{},borderRadius:{},hideLabels:{type:Boolean},isCollapsed:{type:Boolean}},emits:["select"],setup(o,{emit:ce}){const r=o,s=C(null),F=C({}),D=C({});let c=null;const i=E(()=>r.modules.find(l=>l.name===s.value)??null),q=E(()=>({"--fu-sidebar-bg":r.backgroundColor??"var(--fu-brand-background)","--fu-sidebar-radius":r.borderRadius??"0px",width:r.hideLabels?"54px":"70px"}));function T(l,z){if(!r.hideLabels)return;w(),s.value=z;const e=l.currentTarget.getBoundingClientRect(),u=e.top+e.height/2;F.value={position:"fixed",left:`${e.right+7}px`,top:`${e.top}px`,zIndex:"99999","--arrow-top":`${u-e.top}px`},D.value={position:"fixed",left:`${e.right+8}px`,top:`${e.top+e.height/2}px`,transform:"translateY(-50%)",zIndex:"99999"}}function A(){c=setTimeout(()=>{s.value=null,c=null},120)}function w(){c!==null&&(clearTimeout(c),c=null)}function W(l){s.value=null,l.onClick?.()}return(l,z)=>(a(),n("nav",{class:"fu-sidebar",style:S(q.value)},[t("ul",J,[(a(!0),n($,null,I(o.modules,e=>(a(),n("li",{key:e.name,class:P({active:o.activeModule===e.name,"fu-sidebar__li--flyout-open":o.isCollapsed&&s.value===e.name&&e.links?.length}),onMouseenter:u=>T(u,e.name),onMouseleave:A},[t("div",{class:P(["fu-sidebar__item",{"fu-sidebar__item--collapsed":o.hideLabels}]),onClick:u=>l.$emit("select",e)},[t("div",ee,[(a(),m(L(e.icon),{class:"fu-sidebar__icon",size:20})),e.count?(a(),n("span",ae,d(e.count>99?"99+":e.count),1)):p("",!0)]),o.hideLabels?p("",!0):(a(),n("span",oe,d(e.label),1))],10,X)],42,Q))),128))]),(a(),m(K,{to:"body"},[o.hideLabels&&o.isCollapsed&&s.value&&i.value?.links?.length?(a(),n("div",{key:0,class:"fu-sidebar__flyout",style:S(F.value),onMouseenter:w,onMouseleave:A},[t("div",ne,[t("div",te,[(a(),m(L(i.value.icon),{size:15})),t("span",null,d(i.value.label),1)]),t("ul",se,[(a(!0),n($,null,I(i.value.links,e=>(a(),n("li",{key:e.label,class:"fu-sidebar__flyout-link",onClick:u=>W(e)},[e.icon?(a(),m(L(e.icon),{key:0,size:14})):p("",!0),t("span",null,d(e.label),1)],8,le))),128))])])],36)):o.hideLabels&&!o.isCollapsed&&s.value?(a(),n("span",{key:1,class:"fu-sidebar__tooltip",style:S(D.value)},d(i.value?.label),5)):p("",!0)]))],4))}}),re=G(V,[["__scopeId","data-v-a9891999"]]);V.__docgenInfo={exportName:"default",displayName:"FusionSidebar",description:"",tags:{},props:[{name:"modules",required:!0,type:{name:"Array",elements:[{name:"Module"}]}},{name:"activeModule",required:!1,type:{name:"string"}},{name:"backgroundColor",required:!1,type:{name:"string"}},{name:"borderRadius",required:!1,type:{name:"string"}},{name:"hideLabels",required:!1,type:{name:"boolean"}},{name:"isCollapsed",required:!1,type:{name:"boolean"}}],events:[{name:"select"}],sourceFiles:["/Users/xavier/Documents/Websites/Skkido/Fusion-binary-ui/src/components/sidebarmenu/FusionSidebar.vue"]};const be={title:"Fusion/Navigation/FusionSidebar",component:re,tags:["autodocs"],parameters:{docs:{description:{component:`
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
import { Shell, GitMerge, FolderKanban, Banknote, Calendar } from "@lucide/vue";

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
        `}}},argTypes:{modules:{description:"List of sidebar modules.",control:!1,table:{type:{summary:"{ name: string; label: string; icon: Component; count?: number }[]"}}},activeModule:{description:"Name of the currently active module.",control:"select",options:["mydesk","project","crm","accounting","calendar"],table:{type:{summary:"string"}}},hideLabels:{description:"When `true`, hides the text labels and shows them as tooltips on hover instead. Useful for compact/collapsed sidebar layouts.",control:"boolean",table:{defaultValue:{summary:"false"}}},backgroundColor:{description:"Background color of the sidebar.",control:"text",table:{defaultValue:{summary:"var(--fu-brand-background)"}}},borderRadius:{description:"Border radius applied to the sidebar container.",control:"text",table:{defaultValue:{summary:"0px"}}},onSelect:{description:"Emitted when a module is clicked.",table:{category:"Events",type:{summary:"(module) => void"}}}}},_=[{name:"mydesk",label:"Desk",icon:j,count:1},{name:"project",label:"Project",icon:B},{name:"crm",label:"CRM",icon:N},{name:"accounting",label:"Account",icon:R},{name:"calendar",label:"Calendar",icon:x}],b={args:{modules:_,activeModule:"mydesk",hideLabels:!1,onSelect:o=>console.log("select:",o)}},h={name:"Icon Only (hideLabels)",args:{modules:_,activeModule:"mydesk",hideLabels:!0}},f={args:{modules:_,activeModule:"project",hideLabels:!1}},g={args:{modules:[{name:"mydesk",label:"Desk",icon:j,count:12},{name:"project",label:"Project",icon:B,count:3},{name:"crm",label:"CRM",icon:N,count:120},{name:"accounting",label:"Account",icon:R},{name:"calendar",label:"Calendar",icon:x,count:1}],activeModule:"crm",hideLabels:!1}},y={name:"With Badges (Icon Only)",args:{modules:[{name:"mydesk",label:"Desk",icon:j,count:12},{name:"project",label:"Project",icon:B,count:3},{name:"crm",label:"CRM",icon:N,count:120},{name:"accounting",label:"Account",icon:R},{name:"calendar",label:"Calendar",icon:x,count:1}],activeModule:"crm",hideLabels:!0}},v={args:{modules:_,activeModule:"crm",backgroundColor:"#020617",borderRadius:"20px",hideLabels:!1}},k={args:{modules:[],hideLabels:!1}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    modules: sampleModules,
    activeModule: "mydesk",
    hideLabels: false,
    onSelect: module => console.log("select:", module)
  }
}`,...b.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  name: "Icon Only (hideLabels)",
  args: {
    modules: sampleModules,
    activeModule: "mydesk",
    hideLabels: true
  }
}`,...h.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    modules: sampleModules,
    activeModule: "project",
    hideLabels: false
  }
}`,...f.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
}`,...g.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
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
}`,...y.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    modules: sampleModules,
    activeModule: "crm",
    backgroundColor: "#020617",
    borderRadius: "20px",
    hideLabels: false
  }
}`,...v.parameters?.docs?.source}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  args: {
    modules: [],
    hideLabels: false
  }
}`,...k.parameters?.docs?.source}}};const he=["Default","HideLabels","ProjectActive","WithBadges","WithBadgesCollapsed","CustomStyled","Empty"];export{v as CustomStyled,b as Default,k as Empty,h as HideLabels,f as ProjectActive,g as WithBadges,y as WithBadgesCollapsed,he as __namedExportsOrder,be as default};
