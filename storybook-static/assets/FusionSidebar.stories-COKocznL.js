import{s as k,a as s,g as o,F as _,h as g,j as a,l as y,d as h,f as b,B as v,t as u}from"./iframe-BeZJQ65s.js";import{_ as M}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{c as l}from"./createLucideIcon-7ncFRN9y.js";import{C as f}from"./calendar-Be6xfgZ-.js";import"./preload-helper-Ct5FWWRu.js";/**
 * @license lucide-vue-next v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const x=l("banknote",[["rect",{width:"20",height:"12",x:"2",y:"6",rx:"2",key:"9lu3g6"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}],["path",{d:"M6 12h.01M18 12h.01",key:"113zkx"}]]);/**
 * @license lucide-vue-next v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const S=l("folder-kanban",[["path",{d:"M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2Z",key:"1fr9dc"}],["path",{d:"M8 10v4",key:"tgpxqk"}],["path",{d:"M12 10v2",key:"hh53o1"}],["path",{d:"M16 10v6",key:"1d6xys"}]]);/**
 * @license lucide-vue-next v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const C=l("git-merge",[["circle",{cx:"18",cy:"18",r:"3",key:"1xkwt0"}],["circle",{cx:"6",cy:"6",r:"3",key:"1lh9wr"}],["path",{d:"M6 21V9a9 9 0 0 0 9 9",key:"7kw0sc"}]]);/**
 * @license lucide-vue-next v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const j=l("shell",[["path",{d:"M14 11a2 2 0 1 1-4 0 4 4 0 0 1 8 0 6 6 0 0 1-12 0 8 8 0 0 1 16 0 10 10 0 1 1-20 0 11.93 11.93 0 0 1 2.42-7.22 2 2 0 1 1 3.16 2.44",key:"1cn552"}]]),F={class:"fu-sidebar"},B={class:"fu-sidebar__list"},w=["onClick"],A={class:"fu-sidebar__icon-wrapper"},D={key:0,class:"fu-sidebar__badge"},E={class:"fu-sidebar__label"},m=k({__name:"FusionSidebar",props:{modules:{},activeModule:{}},emits:["select"],setup(d){return(p,V)=>(a(),s("nav",F,[o("ul",B,[(a(!0),s(_,null,g(d.modules,e=>(a(),s("li",{key:e.name,class:y({active:d.activeModule===e.name})},[o("div",{class:"fu-sidebar__item",onClick:q=>p.$emit("select",e)},[o("div",A,[(a(),h(v(e.icon),{class:"fu-sidebar__icon",size:20})),e.count?(a(),s("span",D,u(e.count>99?"99+":e.count),1)):b("",!0)]),o("span",E,u(e.label),1)],8,w)],2))),128))])]))}}),N=M(m,[["__scopeId","data-v-eba81ecd"]]);m.__docgenInfo={exportName:"default",displayName:"FusionSidebar",description:"",tags:{},props:[{name:"modules",required:!0,type:{name:"Array",elements:[{name:"Module"}]}},{name:"activeModule",required:!1,type:{name:"string"}}],events:[{name:"select"}],sourceFiles:["/Users/xavier/Documents/Websites/Skkido/Fusion-binary-ui/src/components/sidebarmenu/FusionSidebar.vue"]};const $={title:"Components/Sidebar",component:N,tags:["autodocs"],argTypes:{activeModule:{control:"select",options:["crm","project","accounting","calendar"],description:"Array of modules with `name`, `label`, `link`, `count` and a Lucide `icon` component."}}},i=[{name:"mydesk",label:"Desk",link:"/desk",icon:j,count:1},{name:"project",label:"Project",link:"/project",icon:S,count:0},{name:"crm",label:"CRM",link:"/crm",icon:C,count:0},{name:"accounting",label:"Account",link:"/accounting",icon:x},{name:"calendar",label:"Calendar",link:"/calendar",icon:f,count:0}],t={args:{modules:i,activeModule:"mydesk"}},c={args:{modules:i,activeModule:"project"}},r={args:{modules:i,activeModule:"calendar"}},n={args:{modules:[]}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    modules: sampleModules,
    activeModule: "mydesk"
  }
}`,...t.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    modules: sampleModules,
    activeModule: "project"
  }
}`,...c.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    modules: sampleModules,
    activeModule: "calendar"
  }
}`,...r.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    modules: []
  }
}`,...n.parameters?.docs?.source}}};const G=["Default","ProjectActive","WithBadges","Empty"];export{t as Default,n as Empty,c as ProjectActive,r as WithBadges,G as __namedExportsOrder,$ as default};
