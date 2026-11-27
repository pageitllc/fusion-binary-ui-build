import{r as s}from"./iframe-DLJy-DHW.js";import{F as i}from"./FusionTab-CKvnT3mV.js";import{C as p}from"./calendar-days-4ccAMA9d.js";import{F as c}from"./file-text-BU0GPV47.js";import{c as r}from"./createLucideIcon-CURt8gZv.js";import{L as v}from"./layout-dashboard-BbW0ecyt.js";import{L as b}from"./list-checks-CN3bWWAo.js";import{A as u}from"./archive-B-OnDCl_.js";import{P as y}from"./paperclip-D_82-YPg.js";import{T as h}from"./target-D9R5dV8n.js";import"./preload-helper-Ct5FWWRu.js";import"./DropdownMenu-Bg1wQL3v.js";import"./check-BvnC0Elc.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./FusionPickerPopover-DtGvTBws.js";import"./FuPopover-CNNK0jy6.js";import"./FusionButton-CSaeGhtG.js";import"./FusionActionButton-D4JlY0zq.js";import"./ellipsis-CeooarVg.js";import"./plus-LMukCZn9.js";import"./star-0D891e5k.js";import"./pencil-nSEnWSRm.js";import"./x-GJVIuc3e.js";/**
 * @license @lucide/vue v1.54.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const g={name:"settings-2",size:24,node:[["path",{d:"M14 17H5",key:"gfn3mx"}],["path",{d:"M19 7h-9",key:"6i9tg"}],["circle",{cx:"17",cy:"17",r:"3",key:"18b49y"}],["circle",{cx:"7",cy:"7",r:"3",key:"dfmy0x"}]]},o=r(g);/**
 * @license @lucide/vue v1.54.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const k={name:"square-kanban",size:24,node:[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M8 7v7",key:"1x2jlm"}],["path",{d:"M12 7v4",key:"xawao1"}],["path",{d:"M16 7v9",key:"1hp2iy"}]],aliases:["kanban-square"]},f=r(k),G={title:"Fusion/Navigation/FusionTab",component:i,tags:["autodocs"],parameters:{docs:{description:{component:`
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
- Optional **customizable** mode: a + adds tabs from a list, and a ... on each tab (it takes the icon's place on hover) opens Set as default, Rename, Move tab left, Move tab right and Remove. Use \`v-model:visibleKeys\` (order), \`v-model:labels\` (custom names by key) and \`v-model:defaultKey\` to save them. Drag a tab to move it (on touch, press and hold, then drag). On touch screens the ... shows on the active tab. Each tab needs an icon. See the Customizable story.

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
        `}}}},t={render:e=>({components:{Tabs:i},setup(){return{args:e}},template:`
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
    `}),args:{defaultActiveDesktop:"upcomingEvents",defaultActiveMobile:"bookingPages",tabs:[{key:"upcomingEvents",title:"Upcoming Events",icon:p,count:550},{key:"bookingPages",title:"Booking Pages",icon:c,count:2},{key:"eventTypes",title:"Event Types",icon:o},{key:"mobileTools",title:"Quick Add",icon:o,mobileOnly:!0,count:1}]},parameters:{docs:{description:{story:`
This example demonstrates:

- Icon-based tabs
- Optional **count badges**
- A **mobileOnly** tab
- Desktop and mobile default tab behaviour
        `}}}},a={render:e=>({components:{Tabs:i},setup(){return{args:e}},template:`
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
        `}}}},n={name:"Customizable (a + adds tabs, an x removes them)",render:()=>({components:{Tabs:i},setup(){const e=[{key:"summary",title:"Summary",icon:v},{key:"list",title:"List",icon:b,count:24,description:"Every work item in a list"},{key:"board",title:"Board",icon:f,description:"Drag work items between columns"},{key:"archived",title:"Archived work items",icon:u,description:"View the work items archived in your space"},{key:"files",title:"Attachments",icon:y,description:"Every file attached to a work item"},{key:"goals",title:"Goals",icon:h,description:"Track what the team is aiming for"}],l=s(["summary","list","board"]),d=s({}),m=s(null);return{tabs:e,visible:l,labels:d,defaultKey:m}},template:`
      <div style="padding:1.5rem;height:360px;">
        <p style="margin:0 0 12px;font-size:14px">Order: {{ visible.join(", ") }} · names: {{ JSON.stringify(labels) }} · default: {{ defaultKey ?? "none" }}. Point at a tab and use its ... menu. Summary is locked, so it has no Remove.</p>
        <Tabs :tabs="tabs" customizable v-model:visibleKeys="visible" v-model:labels="labels" v-model:defaultKey="defaultKey" :lockedKeys="['summary']" defaultActiveDesktop="summary">
          <template #summary><div style="padding:1rem">Summary</div></template>
          <template #list><div style="padding:1rem">List</div></template>
          <template #board><div style="padding:1rem">Board</div></template>
          <template #archived><div style="padding:1rem">Archived work items</div></template>
          <template #files><div style="padding:1rem">Attachments</div></template>
          <template #goals><div style="padding:1rem">Goals</div></template>
        </Tabs>
      </div>`})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...t.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...a.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  name: "Customizable (a + adds tabs, an x removes them)",
  render: () => ({
    components: {
      Tabs
    },
    setup() {
      const tabs = [{
        key: "summary",
        title: "Summary",
        icon: LayoutDashboard
      }, {
        key: "list",
        title: "List",
        icon: ListChecks,
        count: 24,
        description: "Every work item in a list"
      }, {
        key: "board",
        title: "Board",
        icon: KanbanSquare,
        description: "Drag work items between columns"
      }, {
        key: "archived",
        title: "Archived work items",
        icon: Archive,
        description: "View the work items archived in your space"
      }, {
        key: "files",
        title: "Attachments",
        icon: Paperclip,
        description: "Every file attached to a work item"
      }, {
        key: "goals",
        title: "Goals",
        icon: Target,
        description: "Track what the team is aiming for"
      }];
      // Only some tabs show to begin with; the + lists the rest
      const visible = ref(["summary", "list", "board"]);
      const labels = ref<Record<string, string>>({});
      const defaultKey = ref<string | null>(null);
      return {
        tabs,
        visible,
        labels,
        defaultKey
      };
    },
    template: \`
      <div style="padding:1.5rem;height:360px;">
        <p style="margin:0 0 12px;font-size:14px">Order: {{ visible.join(", ") }} · names: {{ JSON.stringify(labels) }} · default: {{ defaultKey ?? "none" }}. Point at a tab and use its ... menu. Summary is locked, so it has no Remove.</p>
        <Tabs :tabs="tabs" customizable v-model:visibleKeys="visible" v-model:labels="labels" v-model:defaultKey="defaultKey" :lockedKeys="['summary']" defaultActiveDesktop="summary">
          <template #summary><div style="padding:1rem">Summary</div></template>
          <template #list><div style="padding:1rem">List</div></template>
          <template #board><div style="padding:1rem">Board</div></template>
          <template #archived><div style="padding:1rem">Archived work items</div></template>
          <template #files><div style="padding:1rem">Attachments</div></template>
          <template #goals><div style="padding:1rem">Goals</div></template>
        </Tabs>
      </div>\`
  })
}`,...n.parameters?.docs?.source}}};const Q=["SchedulingTabs","AvatarTabs","Customizable"];export{a as AvatarTabs,n as Customizable,t as SchedulingTabs,Q as __namedExportsOrder,G as default};
