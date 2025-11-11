import{d as k,c as s,b as o,F as y,s as g,o as a,n as u,k as h,a as M,u as _,t as m}from"./iframe-o7SUGoga.js";import{_ as f}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{c as l}from"./createLucideIcon-D5kBsy5g.js";import{C as v}from"./calendar-BI7jLF9e.js";import"./preload-helper-Ct5FWWRu.js";/**
 * @license lucide-vue-next v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const b=l("banknote",[["rect",{width:"20",height:"12",x:"2",y:"6",rx:"2",key:"9lu3g6"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}],["path",{d:"M6 12h.01M18 12h.01",key:"113zkx"}]]);/**
 * @license lucide-vue-next v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const x=l("folder-kanban",[["path",{d:"M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2Z",key:"1fr9dc"}],["path",{d:"M8 10v4",key:"tgpxqk"}],["path",{d:"M12 10v2",key:"hh53o1"}],["path",{d:"M16 10v6",key:"1d6xys"}]]);/**
 * @license lucide-vue-next v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const S=l("git-merge",[["circle",{cx:"18",cy:"18",r:"3",key:"1xkwt0"}],["circle",{cx:"6",cy:"6",r:"3",key:"1lh9wr"}],["path",{d:"M6 21V9a9 9 0 0 0 9 9",key:"7kw0sc"}]]);/**
 * @license lucide-vue-next v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const C=l("shell",[["path",{d:"M14 11a2 2 0 1 1-4 0 4 4 0 0 1 8 0 6 6 0 0 1-12 0 8 8 0 0 1 16 0 10 10 0 1 1-20 0 11.93 11.93 0 0 1 2.42-7.22 2 2 0 1 1 3.16 2.44",key:"1cn552"}]]),F={class:"fu-side-menu-wrapper"},j={class:"fu-side-menu-wrapper__list"},w=["href"],B={key:0,class:"fu-side-menu-badge"},p=k({__name:"FusionSidebar",props:{modules:{},activeModule:{}},setup(i){return(D,E)=>(a(),s("nav",F,[o("ul",j,[(a(!0),s(y,null,g(i.modules,e=>(a(),s("li",{key:e.name,class:u({active:i.activeModule===e.name})},[o("a",{href:e.link},[o("div",{class:u(["fu-side-menu-wrapper__list__module",{active:i.activeModule===e.name}])},[(a(),h(_(e.icon),{size:16})),e.count?(a(),s("span",B,m(e.count>99?"99+":e.count),1)):M("",!0)],2),o("span",null,m(e.label),1)],8,w)],2))),128))])]))}}),A=f(p,[["__scopeId","data-v-1f8750fc"]]);p.__docgenInfo={exportName:"default",displayName:"FusionSidebar",description:"",tags:{},props:[{name:"modules",required:!0,type:{name:"Array",elements:[{name:"Module"}]}},{name:"activeModule",required:!1,type:{name:"string"}}],sourceFiles:["/Users/tommys/Documents/Skkido/Fusion-binary-ui/src/components/sidebarmenu/FusionSidebar.vue"]};const L={title:"Components/Sidebar",component:A,tags:["autodocs"],argTypes:{activeModule:{control:"select",options:["crm","project","accounting","calendar"],description:"Array of modules with `name`, `label`, `link`, `count` and a Lucide `icon` component."}}},d=[{name:"mydesk",label:"Desk",link:"/desk",icon:C,count:1},{name:"project",label:"Project",link:"/project",icon:x,count:0},{name:"crm",label:"CRM",link:"/crm",icon:S,count:0},{name:"accounting",label:"Account",link:"/accounting",icon:b},{name:"calendar",label:"Calendar",link:"/calendar",icon:v,count:0}],n={args:{modules:d,activeModule:"mydesk"}},r={args:{modules:d,activeModule:"project"}},t={args:{modules:d,activeModule:"calendar"}},c={args:{modules:[]}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    modules: sampleModules,
    activeModule: "mydesk"
  }
}`,...n.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    modules: sampleModules,
    activeModule: "project"
  }
}`,...r.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    modules: sampleModules,
    activeModule: "calendar"
  }
}`,...t.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    modules: []
  }
}`,...c.parameters?.docs?.source}}};const P=["Default","ProjectActive","WithBadges","Empty"];export{n as Default,c as Empty,r as ProjectActive,t as WithBadges,P as __namedExportsOrder,L as default};
