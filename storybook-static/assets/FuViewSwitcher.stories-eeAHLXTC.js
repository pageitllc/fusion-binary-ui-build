import{q as O,r as l,c as G,w as J,v as Q,b as a,d as p,s as A,m as P,y as H,i as d,t as v,f as Z,p as D,u as z,j as X,z as Y,n as ee,o as i,F as I,g as ne,A as te}from"./iframe-Bit2fKoK.js";import{C as ie}from"./chevron-down-BVqdWp0k.js";import{C as re}from"./check-DzxBtvcd.js";import{_ as oe}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{B as ae}from"./building-complex-BngImMjP.js";import{A as R}from"./archive-DDdIGxqT.js";import{L as se}from"./list-CyK9fB--.js";import{U as le}from"./users-Ct8QH-Oc.js";import{c as ce}from"./createLucideIcon-xyDXa4T9.js";import"./preload-helper-Ct5FWWRu.js";/**
 * @license @lucide/vue v1.54.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ue={name:"user-check",size:24,node:[["path",{d:"m16 11 2 2 4-4",key:"9rsbq5"}],["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}]]},de=ce(ue),me=["disabled","aria-expanded"],he={class:"fu-view-switcher__trigger-label"},pe={key:1,class:"fu-view-switcher__count"},ve=["aria-label"],we={key:0,class:"fu-view-switcher__heading"},fe=["aria-checked","disabled","onClick"],ge={class:"fu-view-switcher__item-icon"},ye={class:"fu-view-switcher__item-text"},be={class:"fu-view-switcher__item-label"},ke={key:0,class:"fu-view-switcher__item-desc"},Ve={key:0,class:"fu-view-switcher__item-count"},_e={key:2,class:"fu-view-switcher__check-placeholder"},N=O({__name:"FuViewSwitcher",props:{views:{},modelValue:{default:null},disabled:{type:Boolean,default:!1},align:{default:"left"},heading:{default:"Views"},placeholder:{default:"Select view"},ariaLabel:{default:"List views"},hideZeroCounts:{type:Boolean,default:!1}},emits:["update:modelValue","change"],setup(t,{expose:r,emit:W}){const o=t,L=W,c=l(!1),C=l(null),S=l(null),h=l([]),E=`fu-view-switcher-${Math.random().toString(36).slice(2,9)}`,u=G(()=>o.views.find(e=>e.key===o.modelValue)??null);function q(e){return!e||e.count==null?!1:!(o.hideZeroCounts&&e.count===0)}function B(e){return Number(e).toLocaleString()}function M(){c.value?m():F()}async function F(e=null){if(o.disabled)return;c.value=!0,await ee();const s=e??Math.max(0,o.views.findIndex(n=>n.key===o.modelValue));h.value[s]?.focus()}function m({focusTrigger:e=!1}={}){c.value=!1,e&&S.value?.focus()}function $(e){e.disabled||(m({focusTrigger:!0}),e.key!==o.modelValue&&(L("update:modelValue",e.key),L("change",e)))}function x(e){C.value&&!C.value.contains(e.target)&&m()}J(c,e=>{e?document.addEventListener("pointerdown",x):document.removeEventListener("pointerdown",x)}),Q(()=>document.removeEventListener("pointerdown",x));function j(){return h.value.findIndex(e=>e===document.activeElement)}function T(e){const s=o.views.length;if(!s)return;let n=j();for(let f=0;f<s&&(n=(n+e+s)%s,!!o.views[n]?.disabled);f++);h.value[n]?.focus()}function K(e){if(!c.value){e.target===S.value&&["ArrowDown","ArrowUp"].includes(e.key)&&(e.preventDefault(),F(e.key==="ArrowUp"?o.views.length-1:null));return}switch(e.key){case"Escape":e.preventDefault(),m({focusTrigger:!0});break;case"ArrowDown":e.preventDefault(),T(1);break;case"ArrowUp":e.preventDefault(),T(-1);break;case"Home":e.preventDefault(),h.value[0]?.focus();break;case"End":e.preventDefault(),h.value[o.views.length-1]?.focus();break;case"Tab":m();break}}return r({open:F,close:m}),(e,s)=>(i(),a("div",{ref_key:"rootRef",ref:C,class:"fu-view-switcher",onKeydown:K},[p("button",{ref_key:"triggerRef",ref:S,type:"button",class:"fu-view-switcher__trigger",disabled:t.disabled,"aria-haspopup":"menu","aria-expanded":c.value,"aria-controls":E,onClick:M},[u.value?.icon?(i(),A(H(u.value.icon),{key:0,size:16,"stroke-width":2,class:"fu-view-switcher__trigger-icon",style:P(u.value.color?{color:u.value.color}:void 0)},null,8,["style"])):d("",!0),p("span",he,v(u.value?.title??u.value?.label??t.placeholder),1),q(u.value)?(i(),a("span",pe,v(B(u.value.count)),1)):d("",!0),Z(z(ie),{size:16,"stroke-width":2,class:D(["fu-view-switcher__chevron",{"is-open":c.value}])},null,8,["class"])],8,me),Z(Y,{name:"fu-view-switcher-fade"},{default:X(()=>[c.value?(i(),a("div",{key:0,id:E,role:"menu","aria-label":t.ariaLabel,class:D(["fu-view-switcher__menu",`fu-view-switcher__menu--${t.align}`])},[t.heading?(i(),a("div",we,v(t.heading),1)):d("",!0),(i(!0),a(I,null,ne(t.views,(n,f)=>(i(),a("button",{key:n.key,ref_for:!0,ref:U=>h.value[f]=U,type:"button",role:"menuitemradio","aria-checked":n.key===t.modelValue,class:D(["fu-view-switcher__item",{"is-active":n.key===t.modelValue}]),disabled:n.disabled,onClick:U=>$(n)},[p("span",ge,[n.icon?(i(),A(H(n.icon),{key:0,size:16,"stroke-width":2,style:P(n.color?{color:n.color}:void 0)},null,8,["style"])):d("",!0)]),p("span",ye,[p("span",be,v(n.label),1),n.description?(i(),a("span",ke,v(n.description),1)):d("",!0)]),q(n)?(i(),a("span",Ve,v(B(n.count)),1)):d("",!0),n.key===t.modelValue?(i(),A(z(re),{key:1,size:16,"stroke-width":2,class:"fu-view-switcher__check"})):(i(),a("span",_e))],10,fe))),128)),e.$slots.footer?(i(),a(I,{key:1},[s[0]||(s[0]=p("div",{class:"fu-view-switcher__divider"},null,-1)),te(e.$slots,"footer",{close:m},void 0,!0)],64)):d("",!0)],10,ve)):d("",!0)]),_:3})],544))}}),w=oe(N,[["__scopeId","data-v-3a253b2f"]]);N.__docgenInfo={exportName:"default",displayName:"FuViewSwitcher",description:"",tags:{},expose:[{name:"open"},{name:"close"}],props:[{name:"views",required:!0,type:{name:"Array",elements:[{name:"FuView"}]}},{name:"modelValue",required:!1,type:{name:"union",elements:[{name:"string"},{name:"null"}]},defaultValue:{func:!1,value:"null"}},{name:"disabled",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"align",required:!1,type:{name:"union",elements:[{name:'"left"'},{name:'"right"'}]},defaultValue:{func:!1,value:'"left"'}},{name:"heading",required:!1,type:{name:"string"},defaultValue:{func:!1,value:'"Views"'}},{name:"placeholder",required:!1,type:{name:"string"},defaultValue:{func:!1,value:'"Select view"'}},{name:"ariaLabel",required:!1,type:{name:"string"},defaultValue:{func:!1,value:'"List views"'}},{name:"hideZeroCounts",description:"Hide the count when it is 0",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}],events:[{name:"update:modelValue",type:{names:["string"]}},{name:"change",type:{names:["FuView"]}}],slots:[{name:"footer",scoped:!0,bindings:[{name:"close",title:"binding",description:""}],description:"Extra menu items under a divider, e.g. saved views"}],sourceFiles:["/Users/xavier/Documents/Websites/Skkido/Fusion-binary-ui/src/components/viewSwitcher/FuViewSwitcher.vue"]};const Te={title:"Fusion/Navigation/FuViewSwitcher",component:w,tags:["autodocs"],parameters:{layout:"padded",docs:{description:{component:'\n### **FuViewSwitcher**\n\nA compact picker for list pages whose records are split into **views that are never shown together**,\nfor example Companies / Archived / All, or Open / Converted / Archived leads.\n\nThe button shows the current view with its icon and count. Clicking it opens a menu with a heading,\none row per view (icon, label, count) and a tick on the active one.\n\n---\n\n#### How to use it\n\n`FuViewSwitcher` is registered globally by the Fusion plugin, so there is nothing to import in an app.\n\n```vue\n<template>\n  <FuViewSwitcher\n    v-model="currentView"\n    :views="views"\n    heading="Company views"\n    ariaLabel="Company views"\n  />\n</template>\n\n<script setup>\nimport { computed, ref } from "vue";\nimport { Archive, Building2, List } from "@lucide/vue";\n\nconst currentView = ref("active");\n\n// Build it as a computed so the counts stay live\nconst views = computed(() => [\n  { key: "active", label: "Companies", icon: Building2, color: "#2563eb", count: activeCount.value },\n  { key: "archived", label: "Archived", icon: Archive, color: "#a8631f", count: archivedCount.value },\n  { key: "all", label: "All, incl. archived", icon: List, count: totalCount.value },\n]);\n<\/script>\n```\n\n---\n\n#### View shape\n\n| Field | Type | Description |\n|------|------|-------------|\n| `key` | `string` | Required and unique. This is the value `v-model` holds. |\n| `label` | `string` | Label in the menu. |\n| `title` | `string` | Label on the button. Falls back to `label`. |\n| `icon` | Lucide component | Shown on the button and in the menu. |\n| `color` | `string` | Icon colour, any CSS colour. |\n| `count` | `number` | Hidden when `null` or `undefined`. |\n| `description` | `string` | Muted second line in the menu. |\n| `disabled` | `boolean` | Greys the row out and stops it being picked. |\n\n#### Props\n\n| Prop | Type | Default | Description |\n|------|------|---------|-------------|\n| `modelValue` | `string` | `null` | Key of the active view (use `v-model`). |\n| `views` | `FuView[]` | required | The views to list. |\n| `heading` | `string` | `"Views"` | Small uppercase heading at the top of the menu. Pass `""` to hide it. |\n| `align` | `"left" \\| "right"` | `"left"` | Which edge of the button the menu lines up with. |\n| `hideZeroCounts` | `boolean` | `false` | Hide a count when it is 0. |\n| `disabled` | `boolean` | `false` | Disables the button. |\n| `placeholder` | `string` | `"Select view"` | Button text when no view matches `modelValue`. |\n| `ariaLabel` | `string` | `"List views"` | Accessible name for the menu. |\n\n**Events:** `update:modelValue` (the new key) and `change` (the whole view object).\n\n**Slot:** `#footer="{ close }"` adds extra rows under a divider, e.g. saved views.\n\n**Keyboard:** Enter, Space or the arrow keys open the menu. Up, Down, Home and End move, Esc closes.\n'}}},argTypes:{align:{control:"inline-radio",options:["left","right"]},heading:{control:"text"},hideZeroCounts:{control:"boolean"},disabled:{control:"boolean"}}},_=[{key:"active",label:"Companies",icon:ae,color:"#2563eb",count:8},{key:"archived",label:"Archived",icon:R,color:"#a8631f",count:0},{key:"all",label:"All, incl. archived",icon:se,count:8}],g={args:{views:_,heading:"Company views",ariaLabel:"Company views"},render:t=>({components:{FuViewSwitcher:w},setup(){const r=l("active");return{args:t,current:r}},template:'<div style="min-height: 18rem"><FuViewSwitcher v-model="current" v-bind="args" /></div>'})},y={args:{heading:"People views",views:[{key:"active",label:"People",icon:le,color:"#2563eb",count:24,description:"Everyone you work with"},{key:"clients",label:"Clients",icon:de,color:"#16794c",count:9,description:"People with a signed deal"},{key:"archived",label:"Archived",icon:R,color:"#a8631f",count:3}]},render:t=>({components:{FuViewSwitcher:w},setup(){const r=l("active");return{args:t,current:r}},template:'<div style="min-height: 20rem"><FuViewSwitcher v-model="current" v-bind="args" /></div>'})},b={args:{views:_,heading:"Company views",hideZeroCounts:!0},render:t=>({components:{FuViewSwitcher:w},setup(){const r=l("active");return{args:t,current:r}},template:'<div style="min-height: 18rem"><FuViewSwitcher v-model="current" v-bind="args" /></div>'})},k={args:{views:_,heading:"Company views",align:"right"},render:t=>({components:{FuViewSwitcher:w},setup(){const r=l("all");return{args:t,current:r}},template:'<div style="min-height: 18rem; display: flex; justify-content: flex-end"><FuViewSwitcher v-model="current" v-bind="args" /></div>'})},V={args:{views:_,heading:"Company views"},render:t=>({components:{FuViewSwitcher:w},setup(){const r=l("active");return{args:t,current:r}},template:`
      <div style="min-height: 20rem">
        <FuViewSwitcher v-model="current" v-bind="args">
          <template #footer="{ close }">
            <button type="button" style="padding: .5rem .625rem; border: 0; background: none; font: inherit; cursor: pointer" @click="close()">
              Save current view…
            </button>
          </template>
        </FuViewSwitcher>
      </div>`})};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    views: companyViews,
    heading: "Company views",
    ariaLabel: "Company views"
  },
  render: args => ({
    components: {
      FuViewSwitcher
    },
    setup() {
      const current = ref("active");
      return {
        args,
        current
      };
    },
    template: \`<div style="min-height: 18rem"><FuViewSwitcher v-model="current" v-bind="args" /></div>\`
  })
}`,...g.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    heading: "People views",
    views: [{
      key: "active",
      label: "People",
      icon: Users,
      color: "#2563eb",
      count: 24,
      description: "Everyone you work with"
    }, {
      key: "clients",
      label: "Clients",
      icon: UserCheck,
      color: "#16794c",
      count: 9,
      description: "People with a signed deal"
    }, {
      key: "archived",
      label: "Archived",
      icon: Archive,
      color: "#a8631f",
      count: 3
    }]
  },
  render: args => ({
    components: {
      FuViewSwitcher
    },
    setup() {
      const current = ref("active");
      return {
        args,
        current
      };
    },
    template: \`<div style="min-height: 20rem"><FuViewSwitcher v-model="current" v-bind="args" /></div>\`
  })
}`,...y.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    views: companyViews,
    heading: "Company views",
    hideZeroCounts: true
  },
  render: args => ({
    components: {
      FuViewSwitcher
    },
    setup() {
      const current = ref("active");
      return {
        args,
        current
      };
    },
    template: \`<div style="min-height: 18rem"><FuViewSwitcher v-model="current" v-bind="args" /></div>\`
  })
}`,...b.parameters?.docs?.source}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  args: {
    views: companyViews,
    heading: "Company views",
    align: "right"
  },
  render: args => ({
    components: {
      FuViewSwitcher
    },
    setup() {
      const current = ref("all");
      return {
        args,
        current
      };
    },
    template: \`<div style="min-height: 18rem; display: flex; justify-content: flex-end"><FuViewSwitcher v-model="current" v-bind="args" /></div>\`
  })
}`,...k.parameters?.docs?.source}}};V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  args: {
    views: companyViews,
    heading: "Company views"
  },
  render: args => ({
    components: {
      FuViewSwitcher
    },
    setup() {
      const current = ref("active");
      return {
        args,
        current
      };
    },
    template: \`
      <div style="min-height: 20rem">
        <FuViewSwitcher v-model="current" v-bind="args">
          <template #footer="{ close }">
            <button type="button" style="padding: .5rem .625rem; border: 0; background: none; font: inherit; cursor: pointer" @click="close()">
              Save current view…
            </button>
          </template>
        </FuViewSwitcher>
      </div>\`
  })
}`,...V.parameters?.docs?.source}}};const Ue=["Default","WithDescriptions","HideZeroCounts","AlignRight","WithFooter"];export{k as AlignRight,g as Default,b as HideZeroCounts,y as WithDescriptions,V as WithFooter,Ue as __namedExportsOrder,Te as default};
