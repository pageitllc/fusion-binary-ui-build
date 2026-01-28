import{F as l}from"./FusionListView-DSS-EXwE.js";import{F as b}from"./FuAvatar-tORvbocF.js";import{F as A}from"./FusionPagination-nfnRPnEw.js";import{r as w,c as F}from"./iframe-BeZJQ65s.js";import{U as o}from"./user-B_aocALJ.js";import{c as x}from"./createLucideIcon-7ncFRN9y.js";import{C as s}from"./circle-check-big-Dnvel0Bh.js";import{M as V}from"./mail-DNaROll7.js";import"./FusionCheckbox-a53pfdqT.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./FusionStatusDropdown-mu6-aFVS.js";import"./chevron-down-7Eu6qkOl.js";import"./chevron-right-BrJdV6Qz.js";import"./preload-helper-Ct5FWWRu.js";/**
 * @license lucide-vue-next v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const r=x("at-sign",[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-4 8",key:"7n84p3"}]]);/**
 * @license lucide-vue-next v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const i=x("users",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["path",{d:"M16 3.128a4 4 0 0 1 0 7.744",key:"16gr8j"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}]]),W={title:"Components/FusionListView",component:l,tags:["autodocs"],parameters:{actions:{handles:["sort-change"]},docs:{description:{component:`
The **FusionListView** component renders a modern, scroll-safe, resizable data table
used across Fusion dashboards and admin views.

It is a **pure rendering component**:
- It does **not** fetch data
- It does **not** paginate
- It does **not** filter

The parent controls data — ListView only renders it.

---

## Basic Usage

At minimum, you provide:
- \`columns\`
- \`rows\`
- \`rowKey\`

\`\`\`vue
<script setup lang="ts">
import FusionListView from "@/components/listView/FusionListView.vue";
import { User, AtSign } from "lucide-vue-next";

const columns = [
  { label: "Name", key: "name", icon: User, textAlign: "start" },
  { label: "Email", key: "email", icon: AtSign }
];

const rows = [
  { id: 1, name: "John Doe", email: "john@doe.com" },
  { id: 2, name: "Jane Doe", email: "jane@doe.com" }
];
<\/script>

<template>
  <FusionListView
    :columns="columns"
    :rows="rows"
    rowKey="id"
  />
</template>
\`\`\`

---

## Custom Cell Rendering

Use \`#cell-{column.key}\` to override how a column renders.

\`\`\`vue
<template #cell-name="{ row }">
  <td>
    <strong>{{ row.name }}</strong>
  </td>
</template>
\`\`\`

The header is still driven by \`columns\`.

---

## Pagination (External by Design)

**FusionListView does NOT paginate internally.**

Pagination is handled by **FusionPagination**, and the **parent owns the state**.

### Pagination flow

1. User clicks pagination
2. \`FusionPagination\` emits \`update:page\` / \`update:pageSize\`
3. Parent recalculates rows
4. ListView receives updated rows

This design supports:
- Client-side pagination
- Server-side pagination
- Cursor / API-driven pagination

### Example: ListView + Pagination

\`\`\`vue
<script setup lang="ts">
import { ref, computed } from "vue";
import FusionListView from "@/components/listView/FusionListView.vue";
import FusionPagination from "@/components/pagination/FusionPagination.vue";

const page = ref(1);
const pageSize = ref(10);

const rows = ref([...]); // full dataset

const paginatedRows = computed(() => {
  const start = (page.value - 1) * pageSize.value;
  return rows.value.slice(start, start + pageSize.value);
});
<\/script>

<template>
  <FusionListView
    :columns="columns"
    :rows="paginatedRows"
    rowKey="id"
  />

  <FusionPagination
    v-model:page="page"
    v-model:pageSize="pageSize"
    :total="rows.length"
    :pageSizeOptions="[10, 25, 50]"
  />
</template>
\`\`\`

FusionListView remains a **pure renderer**.

---

## Sorting (Server-side)

### 1) Enable sorting per column

When defining a column, specify:

- \`sortable: true\` = user can click that header to sort
- no sortable flag = header is not clickable (no sort emitted)

Example:

\`\`\`ts
const columns = [
  { label: "Name", key: "name", sortable: true },
  { label: "Email", key: "email", sortable: true },
  { label: "Role", key: "role" } // not sortable
];
\`\`\`

### 2) Listen for \`sort-change\`

When the user clicks a sortable header, ListView emits:

\`\`\`ts
{ key: string; direction: "asc" | "desc" }
\`\`\`

You then send that payload to the backend and replace rows
with the sorted response.

### Full usage example (recommended pattern)

\`\`\`vue
<script setup lang="ts">
import { ref } from "vue";
import FusionListView from "@/components/listView/FusionListView.vue";

type SortDirection = "asc" | "desc";
type SortPayload = { key: string; direction: SortDirection };

const rows = ref<any[]>([]);
const loading = ref(false);

const columns = [
  { label: "Name", key: "name", sortable: true },
  { label: "Email", key: "email", sortable: true },
  { label: "Role", key: "role" }
];

async function handleSortChange(payload: SortPayload) {
  loading.value = true;

  // Example request:
  // /api/users?sort=name&direction=asc
  const res = await fetch(\`/api/users?sort=\${payload.key}&direction=\${payload.direction}\`);
  const data = await res.json();

  rows.value = data;
  loading.value = false;
}
<\/script>

<template>
  <FusionListView
    :columns="columns"
    :rows="rows"
    rowKey="id"
    :showHeader="true"
    @sort-change="handleSortChange"
  />
</template>
\`\`\`
        `}}},argTypes:{columns:{description:"Table columns. To enable sorting per column: add `sortable: true` on the column object."}}},m={render:n=>({components:{FusionListView:l,FuAvatar:b,User:o,AtSign:r,Users:i,CheckCircle:s},setup(){return{args:n}},template:`
      <FusionListView v-bind="args">
        <template #cell-name="{ row }">
          <td>
            <div style="display:flex; align-items:center; gap:0.5rem;">
              <FuAvatar :src="row.avatar" size="sm" :name="row.name" />
              <span>{{ row.name }}</span>
            </div>
          </td>
        </template>
      </FusionListView>
    `}),args:{columns:[{label:"Name",key:"name",width:"200px",icon:o,textAlign:"start"},{label:"Email",key:"email",width:"220px",icon:r},{label:"Role",key:"role",icon:i,textAlign:"center"},{label:"Status",key:"status",width:"150px",icon:s,textAlign:"end"}],rows:[{id:1,name:"John Doe",email:"john@doe.com",role:"Developer",status:"Active",avatar:"/avatars/john.jpg"},{id:2,name:"Jane Doe",email:"jane@doe.com",role:"HR",status:"Inactive",avatar:"/avatars/jane.jpg"},{id:3,name:"Sam Lee",email:"sam@doe.com",role:"Designer",status:"Active",avatar:"/avatars/sam.jpg"}],rowKey:"id",showHeader:!0,options:{selectable:!0,resizeColumn:!0}}},c={args:{columns:[{label:"Name",key:"name",width:"200px",icon:o,textAlign:"start"},{label:"Email",key:"email",width:"220px",icon:r},{label:"Role",key:"role",icon:i,textAlign:"center"},{label:"Status",key:"status",width:"150px",icon:s,textAlign:"end"}],rows:[{id:1,name:"Alice",email:"alice@company.com",role:"PM",status:"Active"},{id:2,name:"Bob",email:"bob@company.com",role:"Engineer",status:"Inactive"}],rowKey:"id",showHeader:!0,options:{resizeColumn:!0,selectable:!0}}},d={args:{columns:[{label:"ID",key:"id",width:"80px",textAlign:"center"},{label:"Name",key:"name",width:"200px",textAlign:"start"}],rows:Array.from({length:25}).map((n,e)=>({id:e+1,name:`Item ${e+1}`})),rowKey:"id",showHeader:!0,options:{resizeColumn:!0}}},u={render:n=>({components:{FusionListView:l,Mail:V},setup(){return{args:n}},template:`
      <FusionListView v-bind="args" :showHeader="false">
        <template #cell-subject="{ row }">
          <td>
            <div style="display:flex; align-items:center; gap:0.5rem;">
              <Mail style="width:16px; height:16px;" />
              <div>
                <strong>{{ row.subject }}</strong><br />
                <small style="color:var(--fu-color-text-muted);">{{ row.sender }}</small>
              </div>
            </div>
          </td>
        </template>
      </FusionListView>
    `}),args:{columns:[{label:"Subject",key:"subject",textAlign:"start"},{label:"Sender",key:"sender",textAlign:"justify"},{label:"Time",key:"time",width:"140px",textAlign:"end"}],rows:[{id:1,subject:"Welcome to Fusion UI!",sender:"support@fusion.io",time:"09:12 AM"},{id:2,subject:"Your invoice is ready",sender:"billing@fusion.io",time:"Yesterday"},{id:3,subject:"Team Meeting Reminder",sender:"noreply@fusion.io",time:"2 days ago"}],rowKey:"id",showHeader:!1,options:{resizeColumn:!1}}},p={name:"With Pagination",render:n=>({components:{FusionListView:l,FusionPagination:A,FuAvatar:b,User:o,AtSign:r,Users:i,CheckCircle:s},setup(){const e=w(1),a=w(5),y=F(()=>{const t=(e.value-1)*a.value;return n.rows.slice(t,t+a.value)});return{args:n,page:e,pageSize:a,paginatedRows:y}},template:`
      <div style="display:flex; flex-direction:column; gap:12px;">
        <FusionListView
          :columns="args.columns"
          :rows="paginatedRows"
          rowKey="id"
          :options="args.options"
          :showHeader="args.showHeader"
        >
          <template #cell-name="{ row }">
            <td>
              <div style="display:flex; align-items:center; gap:0.5rem;">
                <FuAvatar :src="row.avatar" size="sm" :name="row.name" />
                <span>{{ row.name }}</span>
              </div>
            </td>
          </template>
        </FusionListView>

        <FusionPagination
          v-model:page="page"
          v-model:pageSize="pageSize"
          :total="args.rows.length"
          :pageSizeOptions="[5, 10, 25]"
        />

        <div style="font-size:13px; color:var(--fu-color-text-muted);">
          Page: {{ page }} · Rows per page: {{ pageSize }}
        </div>
      </div>
    `}),args:{showHeader:!0,columns:[{label:"Name",key:"name",width:"200px",icon:o,textAlign:"start"},{label:"Email",key:"email",width:"220px",icon:r},{label:"Role",key:"role",icon:i,textAlign:"center"},{label:"Status",key:"status",width:"150px",icon:s,textAlign:"end"}],rows:Array.from({length:23}).map((n,e)=>({id:e+1,name:`User ${e+1}`,email:`user${e+1}@company.com`,role:e%2===0?"Developer":"Designer",status:e%3===0?"Inactive":"Active",avatar:`/avatars/user-${e%5+1}.jpg`})),options:{selectable:!0,resizeColumn:!0}}},g={name:"With Sorting (Server-side)",render:n=>({components:{FusionListView:l},setup(){const e=w([...n.rows]),a=w(null);function y(t){a.value=t;const k=[...e.value].sort((f,S)=>{const v=f[t.key],h=S[t.key];return v===h?0:t.direction==="asc"?v>h?1:-1:v<h?1:-1});e.value=k}return{args:n,rows:e,activeSort:a,handleSortChange:y}},template:`
      <div style="display:flex; flex-direction:column; gap:10px;">
        <FusionListView
          :columns="args.columns"
          :rows="rows"
          rowKey="id"
          :showHeader="true"
          :options="{ resizeColumn: true }"
          @sort-change="handleSortChange"
        />

        <div style="font-size:13px; color:var(--fu-color-text-muted);">
          <div><strong>Sort payload (send this to backend):</strong></div>
          <pre style="margin:6px 0 0 0; padding:8px; background:var(--fu-bg-soft); border-radius:8px;">
{{ activeSort }}
          </pre>
          <div style="margin-top:6px;">
            This story reorders rows to simulate the backend returning sorted results.
          </div>
        </div>
      </div>
    `}),args:{columns:[{label:"Name",key:"name",sortable:!0},{label:"Email",key:"email",sortable:!0},{label:"Role",key:"role",sortable:!1}],rows:[{id:1,name:"Charlie",email:"charlie@skkido.com",role:"Admin"},{id:2,name:"Alice",email:"alice@skkido.com",role:"User"},{id:3,name:"Bob",email:"bob@skkido.com",role:"Manager"}]}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: args => ({
    components: {
      FusionListView,
      FuAvatar,
      User,
      AtSign,
      Users,
      CheckCircle
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <FusionListView v-bind="args">
        <template #cell-name="{ row }">
          <td>
            <div style="display:flex; align-items:center; gap:0.5rem;">
              <FuAvatar :src="row.avatar" size="sm" :name="row.name" />
              <span>{{ row.name }}</span>
            </div>
          </td>
        </template>
      </FusionListView>
    \`
  }),
  args: {
    columns: [{
      label: "Name",
      key: "name",
      width: "200px",
      icon: User,
      textAlign: "start"
    }, {
      label: "Email",
      key: "email",
      width: "220px",
      icon: AtSign
    }, {
      label: "Role",
      key: "role",
      icon: Users,
      textAlign: "center"
    }, {
      label: "Status",
      key: "status",
      width: "150px",
      icon: CheckCircle,
      textAlign: "end"
    }],
    rows: [{
      id: 1,
      name: "John Doe",
      email: "john@doe.com",
      role: "Developer",
      status: "Active",
      avatar: "/avatars/john.jpg"
    }, {
      id: 2,
      name: "Jane Doe",
      email: "jane@doe.com",
      role: "HR",
      status: "Inactive",
      avatar: "/avatars/jane.jpg"
    }, {
      id: 3,
      name: "Sam Lee",
      email: "sam@doe.com",
      role: "Designer",
      status: "Active",
      avatar: "/avatars/sam.jpg"
    }],
    rowKey: "id",
    showHeader: true,
    options: {
      selectable: true,
      resizeColumn: true
    }
  }
}`,...m.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    columns: [{
      label: "Name",
      key: "name",
      width: "200px",
      icon: User,
      textAlign: "start"
    }, {
      label: "Email",
      key: "email",
      width: "220px",
      icon: AtSign
    }, {
      label: "Role",
      key: "role",
      icon: Users,
      textAlign: "center"
    }, {
      label: "Status",
      key: "status",
      width: "150px",
      icon: CheckCircle,
      textAlign: "end"
    }],
    rows: [{
      id: 1,
      name: "Alice",
      email: "alice@company.com",
      role: "PM",
      status: "Active"
    }, {
      id: 2,
      name: "Bob",
      email: "bob@company.com",
      role: "Engineer",
      status: "Inactive"
    }],
    rowKey: "id",
    showHeader: true,
    options: {
      resizeColumn: true,
      selectable: true
    }
  }
}`,...c.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    columns: [{
      label: "ID",
      key: "id",
      width: "80px",
      textAlign: "center"
    }, {
      label: "Name",
      key: "name",
      width: "200px",
      textAlign: "start"
    }],
    rows: Array.from({
      length: 25
    }).map((_, i) => ({
      id: i + 1,
      name: \`Item \${i + 1}\`
    })),
    rowKey: "id",
    showHeader: true,
    options: {
      resizeColumn: true
    }
  }
}`,...d.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: args => ({
    components: {
      FusionListView,
      Mail
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <FusionListView v-bind="args" :showHeader="false">
        <template #cell-subject="{ row }">
          <td>
            <div style="display:flex; align-items:center; gap:0.5rem;">
              <Mail style="width:16px; height:16px;" />
              <div>
                <strong>{{ row.subject }}</strong><br />
                <small style="color:var(--fu-color-text-muted);">{{ row.sender }}</small>
              </div>
            </div>
          </td>
        </template>
      </FusionListView>
    \`
  }),
  args: {
    columns: [{
      label: "Subject",
      key: "subject",
      textAlign: "start"
    }, {
      label: "Sender",
      key: "sender",
      textAlign: "justify"
    }, {
      label: "Time",
      key: "time",
      width: "140px",
      textAlign: "end"
    }],
    rows: [{
      id: 1,
      subject: "Welcome to Fusion UI!",
      sender: "support@fusion.io",
      time: "09:12 AM"
    }, {
      id: 2,
      subject: "Your invoice is ready",
      sender: "billing@fusion.io",
      time: "Yesterday"
    }, {
      id: 3,
      subject: "Team Meeting Reminder",
      sender: "noreply@fusion.io",
      time: "2 days ago"
    }],
    rowKey: "id",
    showHeader: false,
    options: {
      resizeColumn: false
    }
  }
}`,...u.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  name: "With Pagination",
  render: args => ({
    components: {
      FusionListView,
      FusionPagination,
      FuAvatar,
      User,
      AtSign,
      Users,
      CheckCircle
    },
    setup() {
      const page = ref(1);
      const pageSize = ref(5);
      const paginatedRows = computed(() => {
        const start = (page.value - 1) * pageSize.value;
        return args.rows.slice(start, start + pageSize.value);
      });
      return {
        args,
        page,
        pageSize,
        paginatedRows
      };
    },
    template: \`
      <div style="display:flex; flex-direction:column; gap:12px;">
        <FusionListView
          :columns="args.columns"
          :rows="paginatedRows"
          rowKey="id"
          :options="args.options"
          :showHeader="args.showHeader"
        >
          <template #cell-name="{ row }">
            <td>
              <div style="display:flex; align-items:center; gap:0.5rem;">
                <FuAvatar :src="row.avatar" size="sm" :name="row.name" />
                <span>{{ row.name }}</span>
              </div>
            </td>
          </template>
        </FusionListView>

        <FusionPagination
          v-model:page="page"
          v-model:pageSize="pageSize"
          :total="args.rows.length"
          :pageSizeOptions="[5, 10, 25]"
        />

        <div style="font-size:13px; color:var(--fu-color-text-muted);">
          Page: {{ page }} · Rows per page: {{ pageSize }}
        </div>
      </div>
    \`
  }),
  args: {
    showHeader: true,
    // ✅ THIS IS THE KEY

    columns: [{
      label: "Name",
      key: "name",
      width: "200px",
      icon: User,
      textAlign: "start"
    }, {
      label: "Email",
      key: "email",
      width: "220px",
      icon: AtSign
    }, {
      label: "Role",
      key: "role",
      icon: Users,
      textAlign: "center"
    }, {
      label: "Status",
      key: "status",
      width: "150px",
      icon: CheckCircle,
      textAlign: "end"
    }],
    rows: Array.from({
      length: 23
    }).map((_, i) => ({
      id: i + 1,
      name: \`User \${i + 1}\`,
      email: \`user\${i + 1}@company.com\`,
      role: i % 2 === 0 ? "Developer" : "Designer",
      status: i % 3 === 0 ? "Inactive" : "Active",
      avatar: \`/avatars/user-\${i % 5 + 1}.jpg\`
    })),
    options: {
      selectable: true,
      resizeColumn: true
    }
  }
}`,...p.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  name: "With Sorting (Server-side)",
  render: args => ({
    components: {
      FusionListView
    },
    setup() {
      /**
       * In real usage:
       * - explain this is server-side
       * - when event is emitted, call API and replace rows
       *
       * Here in Storybook:
       * - we simulate "server response" by sorting locally
       * - so you can visually confirm it works
       */
      const rows = ref<Record<string, any>[]>([...args.rows]);
      const activeSort = ref<SortPayload | null>(null);
      function handleSortChange(payload: SortPayload) {
        activeSort.value = payload;

        // simulate server response (replace rows)
        const next = [...rows.value].sort((a, b) => {
          const aVal = a[payload.key];
          const bVal = b[payload.key];
          if (aVal === bVal) return 0;
          if (payload.direction === "asc") return aVal > bVal ? 1 : -1;
          return aVal < bVal ? 1 : -1;
        });
        rows.value = next;
      }
      return {
        args,
        rows,
        activeSort,
        handleSortChange
      };
    },
    template: \`
      <div style="display:flex; flex-direction:column; gap:10px;">
        <FusionListView
          :columns="args.columns"
          :rows="rows"
          rowKey="id"
          :showHeader="true"
          :options="{ resizeColumn: true }"
          @sort-change="handleSortChange"
        />

        <div style="font-size:13px; color:var(--fu-color-text-muted);">
          <div><strong>Sort payload (send this to backend):</strong></div>
          <pre style="margin:6px 0 0 0; padding:8px; background:var(--fu-bg-soft); border-radius:8px;">
{{ activeSort }}
          </pre>
          <div style="margin-top:6px;">
            This story reorders rows to simulate the backend returning sorted results.
          </div>
        </div>
      </div>
    \`
  }),
  args: {
    columns: [{
      label: "Name",
      key: "name",
      sortable: true
    }, {
      label: "Email",
      key: "email",
      sortable: true
    }, {
      label: "Role",
      key: "role",
      sortable: false
    }],
    rows: [{
      id: 1,
      name: "Charlie",
      email: "charlie@skkido.com",
      role: "Admin"
    }, {
      id: 2,
      name: "Alice",
      email: "alice@skkido.com",
      role: "User"
    }, {
      id: 3,
      name: "Bob",
      email: "bob@skkido.com",
      role: "Manager"
    }]
  }
}`,...g.parameters?.docs?.source}}};const N=["WithAvatar","WithoutCheckbox","Minimal","Headless","WithPagination","WithSorting"];export{u as Headless,d as Minimal,m as WithAvatar,p as WithPagination,g as WithSorting,c as WithoutCheckbox,N as __namedExportsOrder,W as default};
