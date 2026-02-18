import{F as d}from"./FusionListView-DNIi_Iaq.js";import{F as R}from"./FuAvatar-ItnBA4Ru.js";import{F as y}from"./FusionPagination-D4WnTVAn.js";import{r as o,c as h}from"./iframe-4anGkjM3.js";import{U as g}from"./user-C5GbdiJV.js";import{c as k}from"./createLucideIcon-MAVkZFkt.js";import{C as w}from"./circle-check-big-Cj8Wpp5q.js";import"./FusionCheckbox-E0ZNdIAP.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./FusionStatusDropdown-BAonsDQY.js";import"./chevron-down-pi8uy0el.js";import"./chevron-right-BlwsVKhl.js";import"./preload-helper-Ct5FWWRu.js";/**
 * @license lucide-vue-next v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const v=k("at-sign",[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-4 8",key:"7n84p3"}]]);/**
 * @license lucide-vue-next v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const b=k("users",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["path",{d:"M16 3.128a4 4 0 0 1 0 7.744",key:"16gr8j"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}]]),I={title:"Components/FusionListView",component:d,tags:["autodocs"],parameters:{actions:{handles:["sort-change"]},docs:{description:{component:`
# FusionListView

FusionListView is a **headless, state-agnostic, production-grade data table renderer**.

It is intentionally designed as a **pure presentation component**.

It does NOT:
- Fetch data
- Paginate data
- Filter data
- Persist sorting
- Mutate datasets internally (in controlled mode)

Instead — **the parent owns all state**.

This makes FusionListView:
- Predictable
- SSR safe
- Easy to test
- Compatible with REST or GraphQL
- Compatible with server-side pagination
- Compatible with infinite scroll
- Fully controllable in enterprise environments

---

# Mental Model

Think of FusionListView as:

> "A renderer for structured row data"

You give it:
- columns
- rows
- configuration
- optional sort state

It renders exactly what you pass.

Nothing more.
Nothing hidden.

---

# Core Props

## columns

Defines table structure.

\`\`\`ts
{
  label: string
  key: string
  width?: string
  icon?: Component
  sortable?: boolean
  textAlign?: "start" | "center" | "end"
}
\`\`\`

- \`key\` maps to row[key]
- \`sortable\` enables click-based sorting
- \`icon\` renders in header
- \`width\` controls column width

---

## rows

Array of objects.

FusionListView does NOT clone or mutate rows.

\`\`\`ts
[
  { id: 1, name: "John" },
  { id: 2, name: "Jane" }
]
\`\`\`

---

## rowKey

Unique identifier per row.

Required for:
- Rendering performance
- Stable DOM diffing
- Correct reactivity

\`\`\`vue
rowKey="id"
\`\`\`

---

## options

Optional configuration object:

\`\`\`ts
{
  selectable?: boolean
  resizeColumn?: boolean
  isRowSelectable?: (row) => boolean
}
\`\`\`

### selectable
Enables checkbox column.

### resizeColumn
Allows column resizing via drag.

### isRowSelectable
Function-based row-level control.

Example:
\`\`\`ts
isRowSelectable: (row) => row.status !== "Locked"
\`\`\`

---

# Slots

FusionListView supports cell-level customization via named slots.

Slot format:

\`\`\`vue
#cell-{columnKey}
\`\`\`

Example:

\`\`\`vue
<template #cell-name="{ row }">
  <td>
    <FuAvatar :src="row.avatar" />
    {{ row.name }}
  </td>
</template>
\`\`\`

This allows:
- Avatar columns
- Custom badges
- Buttons
- Complex cell layouts

Without breaking table layout.

---

# Sorting

Sorting is opt-in per column.

\`\`\`ts
{ label: "Name", key: "name", sortable: true }
\`\`\`

When a sortable column is clicked:

FusionListView emits:

\`\`\`ts
{
  key: string | null,
  direction: "asc" | "desc"
}
\`\`\`

---

## Controlled Sorting (Recommended)

Parent owns sorted state.

\`\`\`vue
<FusionListView
  :columns="columns"
  :rows="rows"
  :sort="activeSort"
  @sort-change="handleSortChange"
/>
\`\`\`

When sorting changes:
1. Update sort state
2. Reset pagination if needed
3. Sort locally OR fetch from API
4. Replace rows

This pattern supports:
- Server-side sorting
- Debounced API sorting
- Multi-column sorting (if extended)
- Infinite scroll sorting

FusionListView never mutates your dataset.

---

# Pagination (External by Design)

FusionListView does NOT paginate internally.

You must slice rows before passing them in.

\`\`\`ts
const paginatedRows = computed(() => {
  const start = (page.value - 1) * pageSize.value;
  return rows.value.slice(start, start + pageSize.value);
});
\`\`\`

This enables:

- Server-side pagination
- Cursor-based pagination
- Offset-based pagination
- Hybrid pagination strategies

FusionListView only renders what it receives.

---

# Architectural Benefits

Because FusionListView is stateless:

✔ No hidden watchers  
✔ No internal mutation loops  
✔ No recursive reactivity  
✔ No accidental double-sorting  
✔ No forced pagination logic  
✔ No coupling to API layer  

It scales cleanly in:

- Admin dashboards
- CRM systems
- ERP systems
- Analytics dashboards
- Enterprise applications

---

# Performance Notes

- Requires stable \`rowKey\`
- Does not deep watch rows
- Renders minimal reactive dependencies
- Compatible with virtual scrolling if wrapped externally

---

# Recommended Production Pattern

- Keep raw dataset in a ref
- Store active sort in a ref
- Store page + pageSize in refs
- Compute derived dataset
- Pass derived dataset into FusionListView

FusionListView remains your rendering layer only.

---

FusionListView is intentionally minimal in responsibility.

That is its strength.
`}}}},r={render:n=>({components:{FusionListView:d,FuAvatar:R,User:g,AtSign:v,Users:b,CheckCircle:w},setup(){return{args:n}},template:`
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
    `}),args:{columns:[{label:"Name",key:"name",width:"200px",icon:g,textAlign:"start"},{label:"Email",key:"email",width:"220px",icon:v},{label:"Role",key:"role",icon:b,textAlign:"center"},{label:"Status",key:"status",width:"150px",icon:w,textAlign:"end"}],rows:[{id:1,name:"John Doe",email:"john@doe.com",role:"Developer",status:"Active",avatar:"/avatars/john.jpg"},{id:2,name:"Jane Doe",email:"jane@doe.com",role:"HR",status:"Inactive",avatar:"/avatars/jane.jpg"},{id:3,name:"Sam Lee",email:"sam@doe.com",role:"Designer",status:"Active",avatar:"/avatars/sam.jpg"}],rowKey:"id",showHeader:!0,options:{selectable:!0,resizeColumn:!0}}},l={name:"With Pagination",render:n=>({components:{FusionListView:d,FusionPagination:y},setup(){const e=o(1),t=o(5),i=h(()=>{const s=(e.value-1)*t.value;return n.rows.slice(s,s+t.value)});return{args:n,page:e,pageSize:t,paginatedRows:i}},template:`
      <div style="display:flex; flex-direction:column; gap:12px;">
        <FusionListView
          :columns="args.columns"
          :rows="paginatedRows"
          rowKey="id"
          :options="args.options"
          :showHeader="args.showHeader"
        />

        <FusionPagination
          v-model:page="page"
          v-model:pageSize="pageSize"
          :total="args.rows.length"
          :pageSizeOptions="[5, 10, 25]"
        />
      </div>
    `}),args:{showHeader:!0,columns:[{label:"Name",key:"name",sortable:!0},{label:"Email",key:"email",sortable:!0},{label:"Role",key:"role"},{label:"Status",key:"status"}],rows:Array.from({length:23}).map((n,e)=>({id:e+1,name:`User ${e+1}`,email:`user${e+1}@company.com`,role:"Developer",status:e%2===0?"Active":"Inactive"})),options:{selectable:!0,resizeColumn:!0}}},c={name:"With Sorting (Controlled + Pagination)",render:n=>({components:{FusionListView:d,FusionPagination:y},setup(){const e=o(1),t=o(5),i=o([...n.rows]),s=o({key:null,direction:"asc"});function S(a){s.value=a,e.value=1,a.key&&(i.value=[...i.value].sort((A,F)=>{const u=A[a.key],p=F[a.key];return u===p?0:a.direction==="asc"?u>p?1:-1:u<p?1:-1}))}const f=h(()=>{const a=(e.value-1)*t.value;return i.value.slice(a,a+t.value)});return{args:n,page:e,pageSize:t,paginatedRows:f,activeSort:s,handleSortChange:S}},template:`
      <div style="display:flex; flex-direction:column; gap:12px;">
        <FusionListView
          :columns="args.columns"
          :rows="paginatedRows"
          :showHeader="true"
          rowKey="id"
          :sort="activeSort"
          @sort-change="handleSortChange"
        />

        <FusionPagination
          v-model:page="page"
          v-model:pageSize="pageSize"
          :total="args.rows.length"
          :pageSizeOptions="[5, 10, 25]"
        />

        <pre style="padding:8px; background:#f5f5f5; border-radius:6px;">
{{ activeSort }}
        </pre>
      </div>
    `}),args:{columns:[{label:"Name",key:"name",sortable:!0},{label:"Email",key:"email",sortable:!0},{label:"Role",key:"role"}],rows:[{id:1,name:"Charlie",email:"charlie@skkido.com",role:"Admin"},{id:2,name:"Alice",email:"alice@skkido.com",role:"User"},{id:3,name:"Bob",email:"bob@skkido.com",role:"Manager"},{id:4,name:"Zara",email:"zara@skkido.com",role:"Editor"},{id:5,name:"Ethan",email:"ethan@skkido.com",role:"User"},{id:6,name:"Liam",email:"liam@skkido.com",role:"Admin"},{id:7,name:"Olivia",email:"olivia@skkido.com",role:"User"}]}},m={name:"With Disabled Rows",args:{columns:[{label:"Name",key:"name"},{label:"Email",key:"email"},{label:"Status",key:"status"}],rows:[{id:1,name:"Alice",email:"alice@company.com",status:"Active"},{id:2,name:"Bob",email:"bob@company.com",status:"Locked"},{id:3,name:"Charlie",email:"charlie@company.com",status:"Active"},{id:4,name:"David",email:"david@company.com",status:"Locked"}],rowKey:"id",showHeader:!0,options:{selectable:!0,resizeColumn:!0,isRowSelectable:n=>n.status!=="Locked"}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...r.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  name: "With Pagination",
  render: args => ({
    components: {
      FusionListView,
      FusionPagination
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
        />

        <FusionPagination
          v-model:page="page"
          v-model:pageSize="pageSize"
          :total="args.rows.length"
          :pageSizeOptions="[5, 10, 25]"
        />
      </div>
    \`
  }),
  args: {
    showHeader: true,
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
      key: "role"
    }, {
      label: "Status",
      key: "status"
    }],
    rows: Array.from({
      length: 23
    }).map((_, i) => ({
      id: i + 1,
      name: \`User \${i + 1}\`,
      email: \`user\${i + 1}@company.com\`,
      role: "Developer",
      status: i % 2 === 0 ? "Active" : "Inactive"
    })),
    options: {
      selectable: true,
      resizeColumn: true
    }
  }
}`,...l.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  name: "With Sorting (Controlled + Pagination)",
  render: args => ({
    components: {
      FusionListView,
      FusionPagination
    },
    setup() {
      const page = ref(1);
      const pageSize = ref(5);
      const baseRows = ref([...args.rows]);
      const activeSort = ref<SortPayload>({
        key: null,
        direction: "asc"
      });
      function handleSortChange(payload: SortPayload) {
        activeSort.value = payload;
        page.value = 1;
        if (!payload.key) return;
        baseRows.value = [...baseRows.value].sort((a, b) => {
          const aVal = a[payload.key!];
          const bVal = b[payload.key!];
          if (aVal === bVal) return 0;
          return payload.direction === "asc" ? aVal > bVal ? 1 : -1 : aVal < bVal ? 1 : -1;
        });
      }
      const paginatedRows = computed(() => {
        const start = (page.value - 1) * pageSize.value;
        return baseRows.value.slice(start, start + pageSize.value);
      });
      return {
        args,
        page,
        pageSize,
        paginatedRows,
        activeSort,
        handleSortChange
      };
    },
    template: \`
      <div style="display:flex; flex-direction:column; gap:12px;">
        <FusionListView
          :columns="args.columns"
          :rows="paginatedRows"
          :showHeader="true"
          rowKey="id"
          :sort="activeSort"
          @sort-change="handleSortChange"
        />

        <FusionPagination
          v-model:page="page"
          v-model:pageSize="pageSize"
          :total="args.rows.length"
          :pageSizeOptions="[5, 10, 25]"
        />

        <pre style="padding:8px; background:#f5f5f5; border-radius:6px;">
{{ activeSort }}
        </pre>
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
      key: "role"
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
    }, {
      id: 4,
      name: "Zara",
      email: "zara@skkido.com",
      role: "Editor"
    }, {
      id: 5,
      name: "Ethan",
      email: "ethan@skkido.com",
      role: "User"
    }, {
      id: 6,
      name: "Liam",
      email: "liam@skkido.com",
      role: "Admin"
    }, {
      id: 7,
      name: "Olivia",
      email: "olivia@skkido.com",
      role: "User"
    }]
  }
}`,...c.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  name: "With Disabled Rows",
  args: {
    columns: [{
      label: "Name",
      key: "name"
    }, {
      label: "Email",
      key: "email"
    }, {
      label: "Status",
      key: "status"
    }],
    rows: [{
      id: 1,
      name: "Alice",
      email: "alice@company.com",
      status: "Active"
    }, {
      id: 2,
      name: "Bob",
      email: "bob@company.com",
      status: "Locked"
    }, {
      id: 3,
      name: "Charlie",
      email: "charlie@company.com",
      status: "Active"
    }, {
      id: 4,
      name: "David",
      email: "david@company.com",
      status: "Locked"
    }],
    rowKey: "id",
    showHeader: true,
    options: {
      selectable: true,
      resizeColumn: true,
      isRowSelectable: (row: any) => row.status !== "Locked"
    }
  }
}`,...m.parameters?.docs?.source}}};const O=["WithAvatar","WithPagination","WithSorting","WithDisabledRows"];export{r as WithAvatar,m as WithDisabledRows,l as WithPagination,c as WithSorting,O as __namedExportsOrder,I as default};
