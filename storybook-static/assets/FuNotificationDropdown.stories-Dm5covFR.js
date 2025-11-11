import{d as h,r,i as k,j as N,c as u,b as s,k as f,a as g,u as D,y as F,t as C,l as x,p as _,T,q as B,o as i,h as I,g as A}from"./iframe-o7SUGoga.js";import{c as S}from"./createLucideIcon-D5kBsy5g.js";import{_ as E}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./FusionButton-DEEa7fmw.js";import"./preload-helper-Ct5FWWRu.js";/**
 * @license lucide-vue-next v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const y=S("bell",[["path",{d:"M10.268 21a2 2 0 0 0 3.464 0",key:"vwvbt9"}],["path",{d:"M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326",key:"11g9vi"}]]),M={class:"fu-bell-icon"},P={key:2,class:"fu-badge"},v=h({__name:"FuNotification",props:{unreadCount:{default:0},bellIcon:{default:void 0},align:{default:"right"}},setup(t){const d=t,o=r(!1),a=r(null),c=r(null),m=r({}),w=()=>{if(o.value=!o.value,o.value&&a.value){const e=a.value.getBoundingClientRect();let n=e.left+window.scrollX;d.align==="right"?n=e.right+window.scrollX-300:d.align==="center"&&(n=e.left+window.scrollX-160+e.width/2),m.value={top:`${e.bottom+window.scrollY+8}px`,left:`${Math.max(n,8)}px`,position:"absolute",zIndex:"2000"}}},p=e=>{const n=e.target;o.value&&a.value&&!a.value.contains(n)&&(!c.value||!c.value.contains(n))&&(o.value=!1)};return k(()=>document.addEventListener("click",p)),N(()=>document.removeEventListener("click",p)),(e,n)=>(i(),u("div",{class:"fu-notification-dropdown",ref_key:"dropdown",ref:a},[s("div",{class:"fu-notification__trigger",onClick:w},[s("div",M,[t.bellIcon?(i(),f(D(t.bellIcon),{key:0,"stroke-width":1.5,class:"fu-bell-svg"})):(i(),f(F(y),{key:1,class:"fu-bell-svg"})),t.unreadCount>0?(i(),u("span",P,C(t.unreadCount),1)):g("",!0)])]),(i(),f(B,{to:"body"},[x(T,{name:"fade"},{default:_(()=>[o.value?(i(),u("div",{key:0,ref_key:"panelEl",ref:c,class:"fu-notification__panel",style:I(m.value)},[A(e.$slots,"default",{},()=>[n[0]||(n[0]=s("div",{class:"fu-empty"},[s("h4",null,"No Content"),s("p",null,"Use the default slot to pass custom dropdown body.")],-1))],!0)],4)):g("",!0)]),_:3})]))],512))}}),b=E(v,[["__scopeId","data-v-32f377b6"]]);v.__docgenInfo={exportName:"default",displayName:"FuNotification",description:"",tags:{},props:[{name:"unreadCount",required:!1,type:{name:"number"},defaultValue:{func:!1,value:"0"}},{name:"bellIcon",required:!1,type:{name:"any"},defaultValue:{func:!1,value:"undefined"}},{name:"align",required:!1,type:{name:"union",elements:[{name:'"left"'},{name:'"center"'},{name:'"right"'}]},defaultValue:{func:!1,value:'"right"'}}],slots:[{name:"default"}],sourceFiles:["/Users/tommys/Documents/Skkido/Fusion-binary-ui/src/components/notification/FuNotification.vue"]};const j={title:"components/FuNotificationDropdown",component:b,tags:["autodocs"],parameters:{docs:{description:{component:`
The **FuNotificationDropdown** component provides a compact, interactive way to display notifications in Fusion Binary.  
It features a bell icon with an unread badge and a dropdown panel rendered using **Teleport** for clean layering.

---

### Features
- Unread badge with configurable count
- Smooth fade + slide animation
- Dropdown aligns **left**, **center**, or **right**
- Auto-closes when clicking outside
- Fully **customisable content** via default slot

---

### Props

| Prop | Type | Default | Description |
|------|------|----------|-------------|
| \`unreadCount\` | \`number\` | \`0\` | Number of unread notifications shown in badge |
| \`bellIcon\` | \`Component | undefined\` | Lucide Bell | Optional custom icon |
| \`align\` | \`"left" | "center" | "right"\` | \`"right"\` | Alignment of dropdown relative to bell |

---

### Slots

| Slot | Description |
|------|--------------|
| *(default)* | Content of the dropdown body (e.g., notifications list, actions) |

---

### Example Usage

\`\`\`vue
<script setup lang="ts">
import { FuNotificationDropdown } from "fusion-binary";

const notifications = [
  { id: 1, title: "New Message", message: "You received a message from Sarah." },
  { id: 2, title: "System Update", message: "Your system was successfully updated." },
];
<\/script>

<template>
  <FuNotificationDropdown :unreadCount="2" align="right">
    <div style="padding: 1rem;">
      <h4>Notifications</h4>
      <ul style="list-style: none; padding: 0; margin: 0;">
        <li v-for="n in notifications" :key="n.id" style="padding: 0.4rem 0;">
          <strong>{{ n.title }}</strong><br />
          <small>{{ n.message }}</small>
        </li>
      </ul>
      <button
        style="
          margin-top: 1rem;
          background: #2A0808;
          color: #fff;
          border: none;
          padding: 0.4rem 0.75rem;
          border-radius: 6px;
          cursor: pointer;
          font-size: 13px;
        "
      >
        View All
      </button>
    </div>
  </FuNotificationDropdown>
</template>
\`\`\`
        `}}}},l={render:t=>({components:{FuNotificationDropdown:b},setup(){return{args:t,notifications:[{id:1,title:"New Property Added",message:"A new listing was added by your team."},{id:2,title:"Tenant Payment",message:"John Doe paid rent for Flat 3B."},{id:3,title:"Maintenance Ticket",message:"Ticket #342 has been resolved."}]}},template:`
      <div style="display: flex; justify-content: center; padding: 2rem;">
        <FuNotificationDropdown v-bind="args">
          <div style="padding: 1rem;">
            <h4 style="margin-bottom: 0.5rem;">Recent Notifications</h4>
            <ul style="list-style: none; padding: 0; margin: 0;">
              <li v-for="n in notifications" :key="n.id" style="padding: 0.3rem 0;">
                <strong>{{ n.title }}</strong><br />
                <small>{{ n.message }}</small>
              </li>
            </ul>
          </div>
        </FuNotificationDropdown>
      </div>
    `}),args:{unreadCount:3,align:"right",bellIcon:y},parameters:{docs:{description:{story:"The default example shows the notification bell with an unread badge and a custom dropdown body listing recent notifications."}}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: args => ({
    components: {
      FuNotificationDropdown
    },
    setup() {
      const notifications = [{
        id: 1,
        title: "New Property Added",
        message: "A new listing was added by your team."
      }, {
        id: 2,
        title: "Tenant Payment",
        message: "John Doe paid rent for Flat 3B."
      }, {
        id: 3,
        title: "Maintenance Ticket",
        message: "Ticket #342 has been resolved."
      }];
      return {
        args,
        notifications
      };
    },
    template: \`
      <div style="display: flex; justify-content: center; padding: 2rem;">
        <FuNotificationDropdown v-bind="args">
          <div style="padding: 1rem;">
            <h4 style="margin-bottom: 0.5rem;">Recent Notifications</h4>
            <ul style="list-style: none; padding: 0; margin: 0;">
              <li v-for="n in notifications" :key="n.id" style="padding: 0.3rem 0;">
                <strong>{{ n.title }}</strong><br />
                <small>{{ n.message }}</small>
              </li>
            </ul>
          </div>
        </FuNotificationDropdown>
      </div>
    \`
  }),
  args: {
    unreadCount: 3,
    align: "right",
    bellIcon: Bell
  },
  parameters: {
    docs: {
      description: {
        story: "The default example shows the notification bell with an unread badge and a custom dropdown body listing recent notifications."
      }
    }
  }
}`,...l.parameters?.docs?.source},description:{story:"Default Notification Dropdown",...l.parameters?.docs?.description}}};const z=["Default"];export{l as Default,z as __namedExportsOrder,j as default};
