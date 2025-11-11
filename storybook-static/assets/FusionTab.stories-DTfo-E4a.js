import{r as v,D as B,w as K,i as P,j as C,c as a,b as i,F as h,s as k,a as f,k as T,K as U,g as _,z as w,o as s,n as I,u as z,t as $,f as L,H as Y}from"./iframe-o7SUGoga.js";import{_ as N}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{c as E}from"./createLucideIcon-D5kBsy5g.js";import{F as V}from"./file-text-BX0vmVid.js";import"./preload-helper-Ct5FWWRu.js";/**
 * @license lucide-vue-next v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const H=E("calendar-days",[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}],["path",{d:"M8 14h.01",key:"6423bh"}],["path",{d:"M12 14h.01",key:"1etili"}],["path",{d:"M16 14h.01",key:"1gbofw"}],["path",{d:"M8 18h.01",key:"lrp35t"}],["path",{d:"M12 18h.01",key:"mhygvu"}],["path",{d:"M16 18h.01",key:"kzsmim"}]]);/**
 * @license lucide-vue-next v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const x=E("settings-2",[["path",{d:"M14 17H5",key:"gfn3mx"}],["path",{d:"M19 7h-9",key:"6i9tg"}],["circle",{cx:"17",cy:"17",r:"3",key:"18b49y"}],["circle",{cx:"7",cy:"7",r:"3",key:"dfmy0x"}]]),Q={class:"fu-tabs"},W={class:"fu-tabs__header-wrapper"},j={class:"fu-tabs-buttons scrollbar__control customScrollBar"},q=["onClick","disabled"],G={class:"fu-tab__title"},R={class:"fu-tabs__content-wrapper"},J={key:0,class:"fu-tabs__footer"},S="fusiontab-active",M={__name:"FusionTab",props:{tabs:Array,defaultActiveDesktop:String,defaultActiveMobile:String,contextKey:{type:String,default:""}},emits:["tab-change"],setup(d,{emit:F}){const n=d,D=F,o=v(window.innerWidth<=768),l=v(""),p=v(null),g=B(()=>n.tabs.filter(e=>!e.mobileOnly||o.value));function u(){const e=p.value;e&&(e.style.overflowY="hidden",requestAnimationFrame(()=>{e.style.overflowY="auto"}))}function m(){return n.contextKey?`${S}-${n.contextKey}`:S}function O(e){const r=n.tabs.find(t=>t.key===e);!r||r.disabled||(l.value=e,localStorage.setItem(m(),e),D("tab-change",e),w(()=>{const t=p.value;t&&(t.scrollTop=0,u())}))}function y(){const e=n.tabs[0]?.key,t=localStorage.getItem(m())||(o.value?n.defaultActiveMobile||e:n.defaultActiveDesktop||e);l.value=t}function b(){const e=o.value;o.value=window.innerWidth<=768,e!==o.value&&w(y)}return K(()=>n.contextKey,()=>{localStorage.removeItem(m()),y(),u()}),P(()=>{b(),y(),u(),window.addEventListener("resize",b)}),C(()=>{window.removeEventListener("resize",b)}),(e,r)=>(s(),a("div",Q,[i("div",W,[i("div",j,[(s(!0),a(h,null,k(g.value,t=>(s(),a("button",{key:t.key,onClick:X=>O(t.key),class:I(["fu-tab",{"fu-tab--active":l.value===t.key}]),disabled:t.disabled},[t.icon?(s(),T(z(t.icon),{key:0,size:16,class:"fu-tab__icon"})):f("",!0),i("span",G,$(t.title),1)],10,q))),128))])]),i("div",R,[i("div",{class:"fu-tabs__body scrollbar__control customScrollBar",ref_key:"tabBody",ref:p},[(s(),T(U,null,[(s(!0),a(h,null,k(g.value,t=>L((s(),a("div",{key:t.key,class:"fu-tab-panel"},[_(e.$slots,t.key,{},void 0,!0)])),[[Y,l.value===t.key]])),128))],1024))],512),e.$slots.footer?(s(),a("div",J,[_(e.$slots,"footer",{},void 0,!0)])):f("",!0)])]))}},A=N(M,[["__scopeId","data-v-00f19252"]]);M.__docgenInfo={exportName:"default",displayName:"FusionTab",description:"",tags:{},props:[{name:"tabs",type:{name:"array"}},{name:"defaultActiveDesktop",type:{name:"string"}},{name:"defaultActiveMobile",type:{name:"string"}},{name:"contextKey",type:{name:"string"},defaultValue:{func:!1,value:'""'}}],events:[{name:"tab-change"}],slots:[{name:"tab.key",scoped:!0,bindings:[{name:"name",title:"binding"}]},{name:"footer"}],sourceFiles:["/Users/tommys/Documents/Skkido/Fusion-binary-ui/src/components/tabs/FusionTab.vue"]};const ae={title:"Fusion/Components/FusionTabs",component:A,tags:["autodocs"],parameters:{docs:{description:{component:`
The **FusionTabs** component provides a responsive tab system that adapts between desktop and mobile.

### Features
- Independent default tabs for desktop & mobile
- Mobile-only or desktop-only tabs via \`mobileOnly\` flag
- Scroll reset & smooth transitions
- LocalStorage persistence with \`contextKey\`

---

###  Example Usage
\`\`\`vue
<script setup>
import FusionTabs from "@/components/tabs/FusionTab.vue"
import { CalendarDays, FileText, Settings2 } from "lucide-vue-next"

const scheduleTabs = [
  { key: "upcomingEvents", title: "Upcoming Events", icon: CalendarDays },
  { key: "bookingPages", title: "Booking Pages", icon: FileText },
  { key: "eventTypes", title: "Event Types", icon: Settings2, mobileOnly: false },
]
<\/script>

<template>
  <FusionTabs
    :tabs="scheduleTabs"
    contextKey="scheduler"
    defaultActiveDesktop="upcomingEvents"
    defaultActiveMobile="bookingPages"
  />
</template>
\`\`\`
        `}}}},c={render:d=>({components:{Tabs:A},setup(){return{args:d}},template:`
      <div style="padding:2rem; height:480px; background:#f9fafb;">
        <Tabs v-bind="args">
          <template #upcomingEvents>
            <div style="padding:1rem;">
              <h3>Upcoming Events</h3>
              <p>You have 5 upcoming bookings this week.</p>
            </div>
          </template>

          <template #bookingPages>
            <div style="padding:1rem;">
              <h3>Booking Pages</h3>
              <p>Manage your public booking pages and links here.</p>
            </div>
          </template>

          <template #eventTypes>
            <div style="padding:1rem;">
              <h3>Event Types</h3>
              <p>Set duration, availability, and scheduling rules.</p>
            </div>
          </template>
        </Tabs>
      </div>
    `}),args:{contextKey:"scheduler",defaultActiveDesktop:"upcomingEvents",defaultActiveMobile:"bookingPages",tabs:[{key:"upcomingEvents",title:"Upcoming Events",icon:H},{key:"bookingPages",title:"Booking Pages",icon:V},{key:"eventTypes",title:"Event Types",icon:x,mobileOnly:!1},{key:"mobileTools",title:"Quick Add",icon:x,mobileOnly:!0}]},parameters:{docs:{description:{story:`
This story demonstrates how to use **mobileOnly** and **desktopOnly** tabs.

- Tabs marked with \`mobileOnly: true\` appear *only* below 768px width.  
- Tabs with \`mobileOnly: false\` (or no flag) are visible on all devices.
        `}}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: (args: any) => ({
    components: {
      Tabs
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <div style="padding:2rem; height:480px; background:#f9fafb;">
        <Tabs v-bind="args">
          <template #upcomingEvents>
            <div style="padding:1rem;">
              <h3>Upcoming Events</h3>
              <p>You have 5 upcoming bookings this week.</p>
            </div>
          </template>

          <template #bookingPages>
            <div style="padding:1rem;">
              <h3>Booking Pages</h3>
              <p>Manage your public booking pages and links here.</p>
            </div>
          </template>

          <template #eventTypes>
            <div style="padding:1rem;">
              <h3>Event Types</h3>
              <p>Set duration, availability, and scheduling rules.</p>
            </div>
          </template>
        </Tabs>
      </div>
    \`
  }),
  args: {
    contextKey: "scheduler",
    defaultActiveDesktop: "upcomingEvents",
    defaultActiveMobile: "bookingPages",
    tabs: [{
      key: "upcomingEvents",
      title: "Upcoming Events",
      icon: CalendarDays
    }, {
      key: "bookingPages",
      title: "Booking Pages",
      icon: FileText
    }, {
      key: "eventTypes",
      title: "Event Types",
      icon: Settings2,
      mobileOnly: false
    }, {
      key: "mobileTools",
      title: "Quick Add",
      icon: Settings2,
      mobileOnly: true
    }]
  },
  parameters: {
    docs: {
      description: {
        story: \`
This story demonstrates how to use **mobileOnly** and **desktopOnly** tabs.

- Tabs marked with \\\`mobileOnly: true\\\` appear *only* below 768px width.  
- Tabs with \\\`mobileOnly: false\\\` (or no flag) are visible on all devices.
        \`
      }
    }
  }
}`,...c.parameters?.docs?.source}}};const oe=["SchedulingTabs"];export{c as SchedulingTabs,oe as __namedExportsOrder,ae as default};
