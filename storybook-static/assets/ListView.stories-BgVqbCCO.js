import{F as i}from"./FusionListView-BJ2K0ZnU.js";import{F as y}from"./FuAvatar-CzPWL7dE.js";import{F as b}from"./FusionPagination-DnHk7TNw.js";import{r as a,c as k}from"./iframe-BWX2pLPr.js";import{U as V}from"./user-ZGyZZpkb.js";import{c as f}from"./createLucideIcon-BuC7IBSO.js";import{C as A}from"./circle-check-big-DvwUkOIa.js";import"./FusionCheckbox-BvKzVjiA.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./FusionStatusDropdown-C5n0LvQG.js";import"./chevron-down-bo5ElzX-.js";import"./chevron-right-CxP2LKb3.js";import"./preload-helper-Ct5FWWRu.js";/**
 * @license lucide-vue-next v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const x=f("at-sign",[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-4 8",key:"7n84p3"}]]);/**
 * @license lucide-vue-next v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const C=f("users",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["path",{d:"M16 3.128a4 4 0 0 1 0 7.744",key:"16gr8j"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}]]),B={title:"Components/FusionListView",component:i,tags:["autodocs"],parameters:{actions:{handles:["sort-change"]},docs:{description:{component:`
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

---

## rows

Array of objects. FusionListView does NOT clone or mutate rows.

---

## rowKey

Unique identifier per row. Required for rendering performance and stable DOM diffing.

---

## loading

Shows skeleton rows while data is being fetched.

\`\`\`vue
<FusionListView :loading="isLoading" :skeletonRows="8" />
\`\`\`

---

## options

\`\`\`ts
{
  selectable?: boolean
  resizeColumn?: boolean
  isRowSelectable?: (row) => boolean
}
\`\`\`

---

# Slots

\`\`\`vue
<template #cell-name="{ row }">
  <td>
    <FuAvatar :src="row.avatar" />
    {{ row.name }}
  </td>
</template>
\`\`\`

---

# Sorting

Emits \`sort-change\` with \`{ key, direction }\`. Parent owns sorted state.

---

# Pagination (External by Design)

Slice rows before passing in:

\`\`\`ts
const paginatedRows = computed(() => {
  const start = (page.value - 1) * pageSize.value;
  return rows.value.slice(start, start + pageSize.value);
});
\`\`\`

---

FusionListView is intentionally minimal in responsibility. That is its strength.
        `}}}},h=[{label:"Name",key:"name",width:"200px",icon:V,textAlign:"start"},{label:"Email",key:"email",width:"220px",icon:x},{label:"Role",key:"role",icon:C,textAlign:"center"},{label:"Status",key:"status",width:"150px",icon:A,textAlign:"end"}],L=[{id:1,name:"John Doe",email:"john@doe.com",role:"Developer",status:"Active",avatar:"/avatars/john.jpg"},{id:2,name:"Jane Doe",email:"jane@doe.com",role:"HR",status:"Inactive",avatar:"/avatars/jane.jpg"},{id:3,name:"Sam Lee",email:"sam@doe.com",role:"Designer",status:"Active",avatar:"/avatars/sam.jpg"}],m={render:e=>({components:{FusionListView:i,FuAvatar:y},setup(){return{args:e}},template:`
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
    `}),args:{columns:h,rows:L,rowKey:"id",showHeader:!0,loading:!1,options:{selectable:!0,resizeColumn:!0}}},d={render:e=>({components:{FusionListView:i,FuAvatar:y},setup(){return{args:e}},template:`
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
    `}),args:{columns:h,rows:[],rowKey:"id",showHeader:!0,loading:!0,skeletonRows:6,options:{selectable:!0,resizeColumn:!0}}},c={name:"Loading → Loaded transition",render:e=>({components:{FusionListView:i,FuAvatar:y},setup(){const n=a(!0);return setTimeout(()=>n.value=!1,2e3),{args:e,isLoading:n}},template:`
      <FusionListView
        :columns="args.columns"
        :rows="args.rows"
        rowKey="id"
        :showHeader="true"
        :loading="isLoading"
        :skeletonRows="3"
        :options="args.options"
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
    `}),args:{columns:h,rows:L,options:{selectable:!0,resizeColumn:!0}},parameters:{docs:{description:{story:"Skeleton rows shimmer for 2s then resolve to real data automatically on mount."}}}},u={name:"With Pagination",render:e=>({components:{FusionListView:i,FusionPagination:b},setup(){const n=a(1),t=a(5),s=a(!0);setTimeout(()=>s.value=!1,1500);const l=k(()=>{const r=(n.value-1)*t.value;return e.rows.slice(r,r+t.value)});return{args:e,page:n,pageSize:t,paginatedRows:l,isLoading:s}},template:`
      <div style="display:flex; flex-direction:column; gap:12px;">
        <FusionListView
          :columns="args.columns"
          :rows="paginatedRows"
          rowKey="id"
          :options="args.options"
          :showHeader="args.showHeader"
          :loading="isLoading"
          :skeletonRows="5"
        />
        <FusionPagination
          v-model:page="page"
          v-model:pageSize="pageSize"
          :total="args.rows.length"
          :pageSizeOptions="[5, 10, 25]"
        />
      </div>
    `}),args:{showHeader:!0,columns:[{label:"Name",key:"name",sortable:!0},{label:"Email",key:"email",sortable:!0},{label:"Role",key:"role"},{label:"Status",key:"status"}],rows:Array.from({length:23}).map((e,n)=>({id:n+1,name:`User ${n+1}`,email:`user${n+1}@company.com`,role:"Developer",status:n%2===0?"Active":"Inactive"})),options:{selectable:!0,resizeColumn:!0}}},p={name:"With Sorting (Controlled + Pagination)",render:e=>({components:{FusionListView:i,FusionPagination:b},setup(){const n=a(1),t=a(5),s=a([...e.rows]),l=a(!0);setTimeout(()=>l.value=!1,1500);const r=a({key:null,direction:"asc"});function S(o){r.value=o,n.value=1,o.key&&(s.value=[...s.value].sort((R,z)=>{const w=R[o.key],v=z[o.key];return w===v?0:o.direction==="asc"?w>v?1:-1:w<v?1:-1}))}const F=k(()=>{const o=(n.value-1)*t.value;return s.value.slice(o,o+t.value)});return{args:e,page:n,pageSize:t,paginatedRows:F,activeSort:r,handleSortChange:S,isLoading:l}},template:`
      <div style="display:flex; flex-direction:column; gap:12px;">
        <FusionListView
          :columns="args.columns"
          :rows="paginatedRows"
          :showHeader="true"
          rowKey="id"
          :sort="activeSort"
          :loading="isLoading"
          :skeletonRows="5"
          @sort-change="handleSortChange"
        />
        <FusionPagination
          v-model:page="page"
          v-model:pageSize="pageSize"
          :total="args.rows.length"
          :pageSizeOptions="[5, 10, 25]"
        />
        <pre style="padding:8px; background:#f5f5f5; border-radius:6px;">{{ activeSort }}</pre>
      </div>
    `}),args:{columns:[{label:"Name",key:"name",sortable:!0},{label:"Email",key:"email",sortable:!0},{label:"Role",key:"role"}],rows:[{id:1,name:"Charlie",email:"charlie@skkido.com",role:"Admin"},{id:2,name:"Alice",email:"alice@skkido.com",role:"User"},{id:3,name:"Bob",email:"bob@skkido.com",role:"Manager"},{id:4,name:"Zara",email:"zara@skkido.com",role:"Editor"},{id:5,name:"Ethan",email:"ethan@skkido.com",role:"User"},{id:6,name:"Liam",email:"liam@skkido.com",role:"Admin"},{id:7,name:"Olivia",email:"olivia@skkido.com",role:"User"}]}},g={name:"With Disabled Rows",args:{columns:[{label:"Name",key:"name"},{label:"Email",key:"email"},{label:"Status",key:"status"}],rows:[{id:1,name:"Alice",email:"alice@company.com",status:"Active"},{id:2,name:"Bob",email:"bob@company.com",status:"Locked"},{id:3,name:"Charlie",email:"charlie@company.com",status:"Active"},{id:4,name:"David",email:"david@company.com",status:"Locked"}],rowKey:"id",showHeader:!0,loading:!1,options:{selectable:!0,resizeColumn:!0,isRowSelectable:e=>e.status!=="Locked"}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: args => ({
    components: {
      FusionListView,
      FuAvatar
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
    columns: sharedColumns,
    rows: sharedRows,
    rowKey: "id",
    showHeader: true,
    loading: false,
    options: {
      selectable: true,
      resizeColumn: true
    }
  }
}`,...m.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: args => ({
    components: {
      FusionListView,
      FuAvatar
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
    columns: sharedColumns,
    rows: [],
    rowKey: "id",
    showHeader: true,
    loading: true,
    skeletonRows: 6,
    options: {
      selectable: true,
      resizeColumn: true
    }
  }
}`,...d.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  name: "Loading → Loaded transition",
  render: args => ({
    components: {
      FusionListView,
      FuAvatar
    },
    setup() {
      const isLoading = ref(true);
      setTimeout(() => isLoading.value = false, 2000);
      return {
        args,
        isLoading
      };
    },
    template: \`
      <FusionListView
        :columns="args.columns"
        :rows="args.rows"
        rowKey="id"
        :showHeader="true"
        :loading="isLoading"
        :skeletonRows="3"
        :options="args.options"
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
    \`
  }),
  args: {
    columns: sharedColumns,
    rows: sharedRows,
    options: {
      selectable: true,
      resizeColumn: true
    }
  },
  parameters: {
    docs: {
      description: {
        story: "Skeleton rows shimmer for 2s then resolve to real data automatically on mount."
      }
    }
  }
}`,...c.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  name: "With Pagination",
  render: args => ({
    components: {
      FusionListView,
      FusionPagination
    },
    setup() {
      const page = ref(1);
      const pageSize = ref(5);
      const isLoading = ref(true);
      setTimeout(() => isLoading.value = false, 1500);
      const paginatedRows = computed(() => {
        const start = (page.value - 1) * pageSize.value;
        return args.rows.slice(start, start + pageSize.value);
      });
      return {
        args,
        page,
        pageSize,
        paginatedRows,
        isLoading
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
          :loading="isLoading"
          :skeletonRows="5"
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
}`,...u.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
      const isLoading = ref(true);
      setTimeout(() => isLoading.value = false, 1500);
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
        handleSortChange,
        isLoading
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
          :loading="isLoading"
          :skeletonRows="5"
          @sort-change="handleSortChange"
        />
        <FusionPagination
          v-model:page="page"
          v-model:pageSize="pageSize"
          :total="args.rows.length"
          :pageSizeOptions="[5, 10, 25]"
        />
        <pre style="padding:8px; background:#f5f5f5; border-radius:6px;">{{ activeSort }}</pre>
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
}`,...p.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
    loading: false,
    options: {
      selectable: true,
      resizeColumn: true,
      isRowSelectable: (row: any) => row.status !== "Locked"
    }
  }
}`,...g.parameters?.docs?.source}}};const _=["WithAvatar","Loading","LoadingTransition","WithPagination","WithSorting","WithDisabledRows"];export{d as Loading,c as LoadingTransition,m as WithAvatar,g as WithDisabledRows,u as WithPagination,p as WithSorting,_ as __namedExportsOrder,B as default};
