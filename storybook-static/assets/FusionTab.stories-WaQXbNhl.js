import{r as b,c as j,q as P,o as I,a as n,g as c,F as x,h as _,f as d,d as A,K as O,y as M,i as S,j as a,l as U,t as y,v as J,z,H as R}from"./iframe-4anGkjM3.js";import{_ as L}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{c as D}from"./createLucideIcon-MAVkZFkt.js";import{F as N}from"./file-text-DK81Ft0a.js";import"./preload-helper-Ct5FWWRu.js";/**
 * @license lucide-vue-next v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Q=D("calendar-days",[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}],["path",{d:"M8 14h.01",key:"6423bh"}],["path",{d:"M12 14h.01",key:"1etili"}],["path",{d:"M16 14h.01",key:"1gbofw"}],["path",{d:"M8 18h.01",key:"lrp35t"}],["path",{d:"M12 18h.01",key:"mhygvu"}],["path",{d:"M16 18h.01",key:"kzsmim"}]]);/**
 * @license lucide-vue-next v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const w=D("settings-2",[["path",{d:"M14 17H5",key:"gfn3mx"}],["path",{d:"M19 7h-9",key:"6i9tg"}],["circle",{cx:"17",cy:"17",r:"3",key:"18b49y"}],["circle",{cx:"7",cy:"7",r:"3",key:"dfmy0x"}]]),V={class:"fu-tabs"},W={class:"fu-tabs__header-wrapper"},Y={class:"fu-tabs-buttons scrollbar__control customScrollBar"},$=["onClick","disabled"],K={key:0,class:"fu-tab__avatar"},q=["src"],H={key:1,class:"fu-tab__avatar-fallback"},G={key:2,class:"fu-tab__title"},X={key:3,class:"fu-tab__count"},Z={class:"fu-tabs__content-wrapper"},ee={key:0,class:"fu-tabs__footer"},E={__name:"FusionTab",props:{tabs:Array,defaultActiveDesktop:String,defaultActiveMobile:String},emits:["tab-change"],setup(s,{expose:F,emit:B}){const i=s,C=B,o=b(window.innerWidth<=768),l=b(""),u=b(null),g=j(()=>i.tabs.filter(t=>!t.mobileOnly||o.value));function k(){const t=u.value;t&&(t.style.overflowY="hidden",requestAnimationFrame(()=>{t.style.overflowY="auto"}))}function f(t){const r=i.tabs.find(e=>e.key===t);!r||r.disabled||(l.value=t,C("tab-change",t),S(()=>{const e=u.value;e&&(e.scrollTop=0,k())}))}function T(){const t=i.tabs[0]?.key,r=o.value?i.defaultActiveMobile||t:i.defaultActiveDesktop||t;l.value=r}function v(){const t=o.value;o.value=window.innerWidth<=768,t!==o.value&&S(T)}return P(()=>{v(),T(),k(),window.addEventListener("resize",v)}),I(()=>{window.removeEventListener("resize",v)}),F({setActive:f}),(t,r)=>(a(),n("div",V,[c("div",W,[c("div",Y,[(a(!0),n(x,null,_(g.value,e=>(a(),n("button",{key:e.key,onClick:te=>f(e.key),class:U(["fu-tab",{"fu-tab--active":l.value===e.key}]),disabled:e.disabled},[e.avatarSrc||e.avatarText?(a(),n("div",K,[e.avatarSrc?(a(),n("img",{key:0,src:e.avatarSrc,class:"fu-tab__avatar-img",alt:"avatar"},null,8,q)):(a(),n("div",H,y(e.avatarText?.charAt(0)?.toUpperCase()),1))])):e.icon?(a(),A(J(e.icon),{key:1,size:16,class:"fu-tab__icon"})):d("",!0),!e.avatarSrc&&!e.avatarText&&e.title?(a(),n("span",G,y(e.title),1)):d("",!0),typeof e.count=="number"?(a(),n("span",X,y(e.count),1)):d("",!0)],10,$))),128))])]),c("div",Z,[c("div",{class:"fu-tabs__body scrollbar__control customScrollBar",ref_key:"tabBody",ref:u},[(a(),A(O,null,[(a(!0),n(x,null,_(g.value,e=>z((a(),n("div",{key:e.key,class:"fu-tab-panel"},[M(t.$slots,e.key,{},void 0,!0)])),[[R,l.value===e.key]])),128))],1024))],512),t.$slots.footer?(a(),n("div",ee,[M(t.$slots,"footer",{},void 0,!0)])):d("",!0)])]))}},h=L(E,[["__scopeId","data-v-b6516c96"]]);E.__docgenInfo={exportName:"default",displayName:"FusionTab",description:"",tags:{},expose:[{name:"setActive"}],props:[{name:"tabs",type:{name:"array"}},{name:"defaultActiveDesktop",type:{name:"string"}},{name:"defaultActiveMobile",type:{name:"string"}}],events:[{name:"tab-change"}],slots:[{name:"tab.key",scoped:!0,bindings:[{name:"name",title:"binding"}]},{name:"footer"}],sourceFiles:["/Users/xavier/Documents/Websites/Skkido/Fusion-binary-ui/src/components/tabs/FusionTab.vue"]};const re={title:"Fusion/FusionTabs",component:h,tags:["autodocs"],parameters:{docs:{description:{component:`
The **FusionTabs** component provides a flexible and extensible tab system with
first-class support for modern application layouts.

---

## Features
- Text, icon, and avatar tabs
- Optional numeric **count / badge**
- Responsive desktop & mobile behaviour
- Mobile-only and desktop-only tabs
- Smooth scroll reset on tab change
- KeepAlive content caching
- Sticky footer slot support

---

##  Basic Example
\`\`\`ts
const scheduleTabs = [
  { key: "events", title: "Events", icon: CalendarDays },
  { key: "pages", title: "Pages", icon: FileText },
  { key: "types", title: "Types", icon: Settings2 },
]
\`\`\`

---

## Avatar Example
\`\`\`ts
const peopleTabs = [
  { key: "john", avatarText: "John Doe" },
  { key: "mary", avatarSrc: "/img/mary.jpg" },
  { key: "alex", avatarText: "Alex" },
]
\`\`\`

---

##  Count / Badge Example
Tabs can optionally display a numeric **count badge** on the right-hand side.

\`\`\`ts
const notificationTabs = [
  { key: "inbox", title: "Inbox", icon: Mail, count: 12 },
  { key: "drafts", title: "Drafts", icon: FileText, count: 3 },
  { key: "archived", title: "Archived", icon: Settings2 },
]
\`\`\`

- The badge is shown automatically when \`count\` is provided
- Works with **text**, **icon**, and **avatar** tabs
- Active tabs visually highlight the badge

---

##  Example Usage
\`\`\`vue
<Tabs
  :tabs="tabs"
  defaultActiveDesktop="inbox"
>
  <template #inbox>
    <InboxView />
  </template>

  <template #drafts>
    <DraftsView />
  </template>
</Tabs>
\`\`\`
        `}}}},p={render:s=>({components:{Tabs:h},setup(){return{args:s}},template:`
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
              <p>Configure durations, availability, and automation rules.</p>
            </div>
          </template>

          <template #mobileTools>
            <div style="padding:1rem;">
              <h3>Quick Add</h3>
              <p>Mobile-only shortcuts and tools.</p>
            </div>
          </template>

        </Tabs>
      </div>
    `}),args:{defaultActiveDesktop:"upcomingEvents",defaultActiveMobile:"bookingPages",tabs:[{key:"upcomingEvents",title:"Upcoming Events",icon:Q,count:550},{key:"bookingPages",title:"Booking Pages",icon:N,count:2},{key:"eventTypes",title:"Event Types",icon:w},{key:"mobileTools",title:"Quick Add",icon:w,mobileOnly:!0,count:1}]},parameters:{docs:{description:{story:`
This example demonstrates:

- Icon-based tabs
- Optional **count badges**
- A **mobileOnly** tab
- Desktop and mobile default tab behaviour
        `}}}},m={render:s=>({components:{Tabs:h},setup(){return{args:s}},template:`
      <div style="padding:2rem; height:500px; background:#f9fafb;">
        <Tabs v-bind="args">

          <template #john>
            <div style="padding:1rem;">
              <h3>John Doe</h3>
              <p>Email activity, calls, notes, tasks, etc.</p>
            </div>
          </template>

          <template #mary>
            <div style="padding:1rem;">
              <h3>Mary Smith</h3>
              <p>Mary's timeline and interactions.</p>
            </div>
          </template>

          <template #alex>
            <div style="padding:1rem;">
              <h3>Alex R.</h3>
              <p>Alex's communication thread details.</p>
            </div>
          </template>

        </Tabs>
      </div>
    `}),args:{defaultActiveDesktop:"john",defaultActiveMobile:"john",tabs:[{key:"john",avatarText:"John Doe",title:"John Doe",count:2},{key:"mary",avatarSrc:"https://randomuser.me/api/portraits/women/44.jpg",title:"Mary Smith",count:7},{key:"alex",avatarText:"Alex",title:"Alex"}]},parameters:{docs:{description:{story:`
This example demonstrates **Avatar Tabs** with optional count badges:

### Supported:
- \`avatarSrc\`: circular image avatar
- \`avatarText\`: fallback initials
- \`count\`: numeric badge (e.g. unread items)
- Automatic priority: avatar → initials → icon/title

Ideal for inboxes, chat participants, CRM contacts, and activity feeds.
        `}}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
              <p>Configure durations, availability, and automation rules.</p>
            </div>
          </template>

          <template #mobileTools>
            <div style="padding:1rem;">
              <h3>Quick Add</h3>
              <p>Mobile-only shortcuts and tools.</p>
            </div>
          </template>

        </Tabs>
      </div>
    \`
  }),
  args: {
    defaultActiveDesktop: "upcomingEvents",
    defaultActiveMobile: "bookingPages",
    tabs: [{
      key: "upcomingEvents",
      title: "Upcoming Events",
      icon: CalendarDays,
      count: 550
    }, {
      key: "bookingPages",
      title: "Booking Pages",
      icon: FileText,
      count: 2
    }, {
      key: "eventTypes",
      title: "Event Types",
      icon: Settings2
    }, {
      key: "mobileTools",
      title: "Quick Add",
      icon: Settings2,
      mobileOnly: true,
      count: 1
    }]
  },
  parameters: {
    docs: {
      description: {
        story: \`
This example demonstrates:

- Icon-based tabs
- Optional **count badges**
- A **mobileOnly** tab
- Desktop and mobile default tab behaviour
        \`
      }
    }
  }
}`,...p.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
      <div style="padding:2rem; height:500px; background:#f9fafb;">
        <Tabs v-bind="args">

          <template #john>
            <div style="padding:1rem;">
              <h3>John Doe</h3>
              <p>Email activity, calls, notes, tasks, etc.</p>
            </div>
          </template>

          <template #mary>
            <div style="padding:1rem;">
              <h3>Mary Smith</h3>
              <p>Mary's timeline and interactions.</p>
            </div>
          </template>

          <template #alex>
            <div style="padding:1rem;">
              <h3>Alex R.</h3>
              <p>Alex's communication thread details.</p>
            </div>
          </template>

        </Tabs>
      </div>
    \`
  }),
  args: {
    defaultActiveDesktop: "john",
    defaultActiveMobile: "john",
    tabs: [{
      key: "john",
      avatarText: "John Doe",
      title: "John Doe",
      count: 2
    }, {
      key: "mary",
      avatarSrc: "https://randomuser.me/api/portraits/women/44.jpg",
      title: "Mary Smith",
      count: 7
    }, {
      key: "alex",
      avatarText: "Alex",
      title: "Alex"
    }]
  },
  parameters: {
    docs: {
      description: {
        story: \`
This example demonstrates **Avatar Tabs** with optional count badges:

### Supported:
- \\\`avatarSrc\\\`: circular image avatar
- \\\`avatarText\\\`: fallback initials
- \\\`count\\\`: numeric badge (e.g. unread items)
- Automatic priority: avatar → initials → icon/title

Ideal for inboxes, chat participants, CRM contacts, and activity feeds.
        \`
      }
    }
  }
}`,...m.parameters?.docs?.source}}};const le=["SchedulingTabs","AvatarTabs"];export{m as AvatarTabs,p as SchedulingTabs,le as __namedExportsOrder,re as default};
