import{T as a,C as o}from"./FusionTab-DLdDQMOX.js";import{F as s}from"./file-text-CuNb_1UT.js";import{c as r}from"./createLucideIcon-DU4KFhpq.js";import"./iframe-D7VSQkaL.js";import"./preload-helper-Ct5FWWRu.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";/**
 * @license @lucide/vue v1.54.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const l={name:"settings-2",size:24,node:[["path",{d:"M14 17H5",key:"gfn3mx"}],["path",{d:"M19 7h-9",key:"6i9tg"}],["circle",{cx:"17",cy:"17",r:"3",key:"18b49y"}],["circle",{cx:"7",cy:"7",r:"3",key:"dfmy0x"}]]},i=r(l),b={title:"Fusion/Navigation/FusionTab",component:a,tags:["autodocs"],parameters:{docs:{description:{component:`
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
        `}}}},e={render:n=>({components:{Tabs:a},setup(){return{args:n}},template:`
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
    `}),args:{defaultActiveDesktop:"upcomingEvents",defaultActiveMobile:"bookingPages",tabs:[{key:"upcomingEvents",title:"Upcoming Events",icon:o,count:550},{key:"bookingPages",title:"Booking Pages",icon:s,count:2},{key:"eventTypes",title:"Event Types",icon:i},{key:"mobileTools",title:"Quick Add",icon:i,mobileOnly:!0,count:1}]},parameters:{docs:{description:{story:`
This example demonstrates:

- Icon-based tabs
- Optional **count badges**
- A **mobileOnly** tab
- Desktop and mobile default tab behaviour
        `}}}},t={render:n=>({components:{Tabs:a},setup(){return{args:n}},template:`
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
        `}}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
}`,...e.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...t.parameters?.docs?.source}}};const v=["SchedulingTabs","AvatarTabs"];export{t as AvatarTabs,e as SchedulingTabs,v as __namedExportsOrder,b as default};
