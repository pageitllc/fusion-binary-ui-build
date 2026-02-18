import{s as C,r,q as k,o as N,a as p,g as i,d as m,f as b,v as D,l as x,u as F,t as T,b as S,w as _,x as B,T as I,j as o,n as A,y as E}from"./iframe-4anGkjM3.js";import{c as V}from"./createLucideIcon-MAVkZFkt.js";import{_ as P}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./preload-helper-Ct5FWWRu.js";/**
 * @license lucide-vue-next v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const h=V("bell",[["path",{d:"M10.268 21a2 2 0 0 0 3.464 0",key:"vwvbt9"}],["path",{d:"M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326",key:"11g9vi"}]]),q={class:"fu-bell-icon"},M={key:2,class:"fu-badge"},v=C({__name:"FuNotification",props:{unreadCount:{default:0},bellIcon:{default:void 0},align:{default:"right"},bellClass:{default:""},bellStyle:{default:"light"}},setup(e){const s=e,a=r(!1),l=r(null),u=r(null),g=r({}),w=()=>{if(a.value=!a.value,a.value&&l.value){const n=l.value.getBoundingClientRect();let t=n.left+window.scrollX;s.align==="right"?t=n.right+window.scrollX-300:s.align==="center"&&(t=n.left+window.scrollX-160+n.width/2),g.value={top:`${n.bottom+window.scrollY+8}px`,left:`${Math.max(t,8)}px`,position:"absolute",zIndex:"2000"}}},y=n=>{const t=n.target;a.value&&l.value&&!l.value.contains(t)&&(!u.value||!u.value.contains(t))&&(a.value=!1)};return k(()=>document.addEventListener("click",y)),N(()=>document.removeEventListener("click",y)),(n,t)=>(o(),p("div",{class:"fu-notification-dropdown",ref_key:"dropdown",ref:l},[i("div",{class:"fu-notification__trigger",onClick:w},[i("div",q,[e.bellIcon?(o(),m(D(e.bellIcon),{key:0,"stroke-width":1.5,class:"fu-bell-svg"})):(o(),m(F(h),{key:1,class:x(["fu-bell-svg",[s.bellStyle,s.bellClass]])},null,8,["class"])),e.unreadCount>0?(o(),p("span",M,T(e.unreadCount),1)):b("",!0)])]),(o(),m(I,{to:"body"},[S(B,{name:"fade"},{default:_(()=>[a.value?(o(),p("div",{key:0,ref_key:"panelEl",ref:u,class:"fu-notification__panel",style:A(g.value)},[E(n.$slots,"default",{},()=>[t[0]||(t[0]=i("div",{class:"fu-empty"},[i("h4",null,"No Content"),i("p",null,"Use the default slot to pass custom dropdown body.")],-1))],!0)],4)):b("",!0)]),_:3})]))],512))}}),f=P(v,[["__scopeId","data-v-b710a214"]]);v.__docgenInfo={exportName:"default",displayName:"FuNotification",description:"",tags:{},props:[{name:"unreadCount",required:!1,type:{name:"number"},defaultValue:{func:!1,value:"0"}},{name:"bellIcon",required:!1,type:{name:"any"},defaultValue:{func:!1,value:"undefined"}},{name:"align",required:!1,type:{name:"union",elements:[{name:'"left"'},{name:'"center"'},{name:'"right"'}]},defaultValue:{func:!1,value:'"right"'}},{name:"bellClass",required:!1,type:{name:"string"},defaultValue:{func:!1,value:'""'}},{name:"bellStyle",required:!1,type:{name:"union",elements:[{name:'"light"'},{name:'"dark"'}]},defaultValue:{func:!1,value:'"light"'}}],slots:[{name:"default"}],sourceFiles:["/Users/xavier/Documents/Websites/Skkido/Fusion-binary-ui/src/components/notification/FuNotification.vue"]};const O={title:"components/FuNotificationDropdown",component:f,tags:["autodocs"],parameters:{docs:{description:{component:`
The **FuNotificationDropdown** component displays a notification bell with an unread badge and a dropdown panel.  
The dropdown uses **Teleport** to render above all content with clean layering.

---

## Key Features
- Unread badge with configurable count  
- Dropdown aligns left, center, or right  
- Smooth fade and slide animation  
- Auto-closes when clicking outside  
- Supports dark and light bell styling  
- Accepts custom class overrides  
- Fully customizable dropdown body  

---

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| \`unreadCount\` | \`number\` | \`0\` | Number of unread items shown in the badge |
| \`bellIcon\` | \`Component | undefined\` | Lucide Bell | Override the bell icon |
| \`align\` | \`"left" | "center" | "right"\` | \`"right"\` | Aligns the dropdown panel |
| \`bellStyle\` | \`"light" | "dark"\` | \`"light"\` | Sets bell color mode |
| \`bellClass\` | \`string\` | \`""\` | Custom class applied to the bell trigger wrapper |

---

## Slots

| Slot | Description |
|------|-------------|
| *(default)* | Dropdown content |

---

## Example: Using a Custom Class

\`\`\`vue
<template>
  <FuNotificationDropdown
    :unreadCount="4"
    align="right"
    bell-class="custom-bell-wrapper"
  >
    <div style="padding: 1rem;">
      <h4>System Alerts</h4>
      <p style="margin: 0;">This is a custom dropdown using a provided class.</p>
    </div>
  </FuNotificationDropdown>
</template>

<style>
.custom-bell-wrapper {
  background: #f4f4f4;
  padding: 6px;
  border-radius: 50%;
  border: 1px solid #ddd;
}
</style>
\`\`\`

        `}}}},d={render:e=>({components:{FuNotificationDropdown:f},setup(){return{args:e,notifications:[{id:1,title:"New Property Added",message:"A new listing was added by your team."},{id:2,title:"Tenant Payment",message:"John Doe paid rent for Flat 3B."},{id:3,title:"Maintenance Ticket",message:"Ticket #342 has been resolved."}]}},template:`
      <div style="display: flex; justify-content: center; padding: 2rem;">
        <FuNotificationDropdown v-bind="args">
          <div style="padding: 1rem;">
            <h4 style="margin-bottom: .5rem;">Recent Notifications</h4>

            <ul style="list-style: none; padding: 0; margin: 0;">
              <li v-for="n in notifications" :key="n.id" style="padding: .35rem 0;">
                <strong>{{ n.title }}</strong><br />
                <small>{{ n.message }}</small>
              </li>
            </ul>
          </div>
        </FuNotificationDropdown>
      </div>
    `}),args:{unreadCount:3,align:"right",bellIcon:h,bellStyle:"light",bellClass:""},parameters:{docs:{description:{story:"The default example displays an unread badge and a custom dropdown body listing recent notifications."}}}},c={render:e=>({components:{FuNotificationDropdown:f},setup(){return{args:e}},template:`
      <div style="display: flex; justify-content: center; padding: 2rem;">
        <FuNotificationDropdown v-bind="args">
          <div style="padding: 1rem;">
            <h4>Custom Class Example</h4>
            <p style="margin: 0;">This dropdown uses a custom wrapper class on the bell.</p>
          </div>
        </FuNotificationDropdown>
      </div>
    `}),args:{unreadCount:4,align:"right",bellClass:"storybook-custom-bell"},parameters:{docs:{description:{story:"This example demonstrates how `bellClass` can be used to style or theme the bell trigger area."}}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
            <h4 style="margin-bottom: .5rem;">Recent Notifications</h4>

            <ul style="list-style: none; padding: 0; margin: 0;">
              <li v-for="n in notifications" :key="n.id" style="padding: .35rem 0;">
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
    bellIcon: Bell,
    bellStyle: "light",
    bellClass: ""
  },
  parameters: {
    docs: {
      description: {
        story: "The default example displays an unread badge and a custom dropdown body listing recent notifications."
      }
    }
  }
}`,...d.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: args => ({
    components: {
      FuNotificationDropdown
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <div style="display: flex; justify-content: center; padding: 2rem;">
        <FuNotificationDropdown v-bind="args">
          <div style="padding: 1rem;">
            <h4>Custom Class Example</h4>
            <p style="margin: 0;">This dropdown uses a custom wrapper class on the bell.</p>
          </div>
        </FuNotificationDropdown>
      </div>
    \`
  }),
  args: {
    unreadCount: 4,
    align: "right",
    bellClass: "storybook-custom-bell"
  },
  parameters: {
    docs: {
      description: {
        story: "This example demonstrates how \`bellClass\` can be used to style or theme the bell trigger area."
      }
    }
  }
}`,...c.parameters?.docs?.source}}};const R=["Default","WithCustomClass"];export{d as Default,c as WithCustomClass,R as __namedExportsOrder,O as default};
