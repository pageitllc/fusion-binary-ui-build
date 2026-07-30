import{F as r}from"./FusionListView-CGohmKuT.js";import{F as k}from"./FuAvatar-iBKHnci-.js";import{F as P}from"./FusionPagination-B-nicmN-.js";import{r as s,c as F}from"./iframe-D33anl-W.js";import{U as V}from"./user-CSGLuGNz.js";import{c as C}from"./createLucideIcon-DaJMaH6u.js";import{C as z}from"./circle-check-big-Zr21v5Q4.js";import"./FusionCheckbox-DMwrLE7b.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./FusionStatusDropdown-Iv_kZIlk.js";import"./chevron-down-DcKD7Z_7.js";import"./chevron-right-BEYfzP2c.js";import"./preload-helper-Ct5FWWRu.js";/**
 * @license lucide-vue-next v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const A=C("at-sign",[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-4 8",key:"7n84p3"}]]);/**
 * @license lucide-vue-next v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const E=C("users",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["path",{d:"M16 3.128a4 4 0 0 1 0 7.744",key:"16gr8j"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}]]),_={title:"Components/FusionListView",component:r,tags:["autodocs"],parameters:{actions:{handles:["sort-change","columns-reordered"]},docs:{description:{component:`
# FusionListView

FusionListView is a **headless, state-agnostic, production-grade data table renderer**.

It is intentionally designed as a **pure presentation component**.

It does NOT:
- Fetch data
- Paginate data
- Filter data
- Persist sorting
- Persist column order or visibility
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
  visible?: boolean         // defaults to true
  orderPosition?: number    // defaults to original array index
}
\`\`\`

\`visible\` and \`orderPosition\` are read every render — hide a column or change its
position by mutating those fields on the column objects you pass in. FusionListView
never mutates \`columns\` itself; it only reports intent back up via the
\`columns-reordered\` event when the user drags in edit mode (see below).

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

## editMode

When \`true\`, each header shows a drag handle (⠿) and columns become draggable.
Dropping a column on another one reorders them and emits \`columns-reordered\`
with the full new order — it's up to the parent to apply that back onto its
\`columns\` array (see "Drag to Reorder" story below).

While \`editMode\` is on, click-to-sort is disabled so dragging and sorting
don't fight each other.

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

# Column Reordering

Emits \`columns-reordered\` with the full new column order:

\`\`\`ts
[{ key: "email", orderPosition: 0 }, { key: "name", orderPosition: 1 }, ...]
\`\`\`

Apply it back to your own columns ref:

\`\`\`ts
function handleColumnsReordered(payload) {
  payload.forEach(({ key, orderPosition }) => {
    const col = columns.value.find((c) => c.key === key);
    if (col) col.orderPosition = orderPosition;
  });
}
\`\`\`

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
        `}}}},R=[{label:"Name",key:"name",width:"200px",icon:V,textAlign:"start"},{label:"Email",key:"email",width:"220px",icon:A},{label:"Role",key:"role",icon:E,textAlign:"center"},{label:"Status",key:"status",width:"150px",icon:z,textAlign:"end"}],x=[{id:1,name:"John Doe",email:"john@doe.com",role:"Developer",status:"Active",avatar:"/avatars/john.jpg"},{id:2,name:"Jane Doe",email:"jane@doe.com",role:"HR",status:"Inactive",avatar:"/avatars/jane.jpg"},{id:3,name:"Sam Lee",email:"sam@doe.com",role:"Designer",status:"Active",avatar:"/avatars/sam.jpg"}],p={render:e=>({components:{FusionListView:r,FuAvatar:k},setup(){return{args:e}},template:`
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
    `}),args:{columns:R,rows:x,rowKey:"id",showHeader:!0,loading:!1,options:{selectable:!0,resizeColumn:!0}}},g={render:e=>({components:{FusionListView:r,FuAvatar:k},setup(){return{args:e}},template:`
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
    `}),args:{columns:R,rows:[],rowKey:"id",showHeader:!0,loading:!0,skeletonRows:6,options:{selectable:!0,resizeColumn:!0}}},w={name:"Loading → Loaded transition",render:e=>({components:{FusionListView:r,FuAvatar:k},setup(){const n=s(!0);return setTimeout(()=>n.value=!1,2e3),{args:e,isLoading:n}},template:`
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
    `}),args:{columns:R,rows:x,options:{selectable:!0,resizeColumn:!0}},parameters:{docs:{description:{story:"Skeleton rows shimmer for 2s then resolve to real data automatically on mount."}}}},y={name:"With Pagination",render:e=>({components:{FusionListView:r,FusionPagination:P},setup(){const n=s(1),a=s(5),i=s(!0);setTimeout(()=>i.value=!1,1500);const d=F(()=>{const l=(n.value-1)*a.value;return e.rows.slice(l,l+a.value)});return{args:e,page:n,pageSize:a,paginatedRows:d,isLoading:i}},template:`
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
    `}),args:{showHeader:!0,columns:[{label:"Name",key:"name",sortable:!0},{label:"Email",key:"email",sortable:!0},{label:"Role",key:"role"},{label:"Status",key:"status"}],rows:Array.from({length:23}).map((e,n)=>({id:n+1,name:`User ${n+1}`,email:`user${n+1}@company.com`,role:"Developer",status:n%2===0?"Active":"Inactive"})),options:{selectable:!0,resizeColumn:!0}}},h={name:"With Sorting (Controlled + Pagination)",render:e=>({components:{FusionListView:r,FusionPagination:P},setup(){const n=s(1),a=s(5),i=s([...e.rows]),d=s(!0);setTimeout(()=>d.value=!1,1500);const l=s({key:null,direction:"asc"});function L(o){l.value=o,n.value=1,o.key&&(i.value=[...i.value].sort((c,u)=>{const m=c[o.key],S=u[o.key];return m===S?0:o.direction==="asc"?m>S?1:-1:m<S?1:-1}))}const t=F(()=>{const o=(n.value-1)*a.value;return i.value.slice(o,o+a.value)});return{args:e,page:n,pageSize:a,paginatedRows:t,activeSort:l,handleSortChange:L,isLoading:d}},template:`
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
    `}),args:{columns:[{label:"Name",key:"name",sortable:!0},{label:"Email",key:"email",sortable:!0},{label:"Role",key:"role"}],rows:[{id:1,name:"Charlie",email:"charlie@skkido.com",role:"Admin"},{id:2,name:"Alice",email:"alice@skkido.com",role:"User"},{id:3,name:"Bob",email:"bob@skkido.com",role:"Manager"},{id:4,name:"Zara",email:"zara@skkido.com",role:"Editor"},{id:5,name:"Ethan",email:"ethan@skkido.com",role:"User"},{id:6,name:"Liam",email:"liam@skkido.com",role:"Admin"},{id:7,name:"Olivia",email:"olivia@skkido.com",role:"User"}]}},v={name:"With Disabled Rows",args:{columns:[{label:"Name",key:"name"},{label:"Email",key:"email"},{label:"Status",key:"status"}],rows:[{id:1,name:"Alice",email:"alice@company.com",status:"Active"},{id:2,name:"Bob",email:"bob@company.com",status:"Locked"},{id:3,name:"Charlie",email:"charlie@company.com",status:"Active"},{id:4,name:"David",email:"david@company.com",status:"Locked"}],rowKey:"id",showHeader:!0,loading:!1,options:{selectable:!0,resizeColumn:!0,isRowSelectable:e=>e.status!=="Locked"}}},b={name:"With Hidden Columns",render:e=>({components:{FusionListView:r},setup(){return{args:e}},template:'<FusionListView v-bind="args" />'}),args:{columns:[{label:"Name",key:"name",orderPosition:0,visible:!0},{label:"Email",key:"email",orderPosition:1,visible:!0},{label:"Role",key:"role",orderPosition:2,visible:!1},{label:"Status",key:"status",orderPosition:3,visible:!0}],rows:x,rowKey:"id",showHeader:!0,loading:!1,options:{resizeColumn:!0}},parameters:{docs:{description:{story:"Setting `visible: false` on a column removes it from the header and every row without touching the underlying data. Toggle it in your own app's args/state to show/hide columns dynamically."}}}},f={name:"Drag to Reorder Columns (Edit Mode)",render:e=>({components:{FusionListView:r,FuAvatar:k},setup(){const n=s(e.columns.map((t,o)=>({...t,orderPosition:t.orderPosition??o,visible:t.visible??!0}))),a=s(!1);function i(){a.value=!a.value}function d(t){const o=n.value.find(c=>c.key===t);o&&(o.visible=!o.visible)}function l(t){t.forEach(({key:o,orderPosition:c})=>{const u=n.value.find(m=>m.key===o);u&&(u.orderPosition=c)})}const L=F(()=>[...n.value].sort((t,o)=>t.orderPosition-o.orderPosition));return{args:e,columns:n,editMode:a,toggleEditMode:i,toggleVisibility:d,handleColumnsReordered:l,orderedForDisplay:L}},template:`
      <div style="display:flex; flex-direction:column; gap:12px;">
        <div style="display:flex; align-items:center; gap:8px; flex-wrap:wrap;">
          <button
            @click="toggleEditMode"
            style="padding:6px 14px; border-radius:6px; border:1px solid #ccc; cursor:pointer;"
          >
            {{ editMode ? "Done editing" : "Edit columns" }}
          </button>

          <label
            v-for="col in columns"
            :key="col.key"
            style="display:flex; align-items:center; gap:4px; font-size:12px;"
          >
            <input type="checkbox" :checked="col.visible" @change="toggleVisibility(col.key)" />
            {{ col.label }}
          </label>
        </div>

        <p v-if="editMode" style="font-size:12px; opacity:0.7; margin:0;">
          Drag a column by its ⠿ handle and drop it on another column to reorder.
        </p>

        <FusionListView
          :columns="columns"
          :rows="args.rows"
          rowKey="id"
          :showHeader="true"
          :editMode="editMode"
          :options="{ selectable: true, resizeColumn: true }"
          @columns-reordered="handleColumnsReordered"
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

        <pre style="padding:8px; background:#f5f5f5; border-radius:6px; font-size:11px;">{{
          orderedForDisplay.map(c => ({ key: c.key, orderPosition: c.orderPosition, visible: c.visible }))
        }}</pre>
      </div>
    `}),args:{columns:[{label:"Name",key:"name",width:"200px",icon:V,textAlign:"start"},{label:"Email",key:"email",width:"220px",icon:A},{label:"Role",key:"role",icon:E,textAlign:"center"},{label:"Status",key:"status",width:"150px",icon:z,textAlign:"end"}],rows:x},parameters:{docs:{description:{story:"\nToggle **Edit columns** to enter edit mode — each header shows a ⠿ drag handle.\nDrag a header and drop it on another to reorder; FusionListView emits\n`columns-reordered` with the full new order, and this story applies it back\nonto its own `columns` ref (the JSON readout below the table reflects live\n`orderPosition`/`visible` state). The checkboxes above the table toggle\n`visible` directly, independent of edit mode.\n        "}}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
}`,...g.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
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
}`,...w.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
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
}`,...y.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
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
}`,...h.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
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
}`,...v.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  name: "With Hidden Columns",
  render: args => ({
    components: {
      FusionListView
    },
    setup() {
      return {
        args
      };
    },
    template: \`<FusionListView v-bind="args" />\`
  }),
  args: {
    columns: [{
      label: "Name",
      key: "name",
      orderPosition: 0,
      visible: true
    }, {
      label: "Email",
      key: "email",
      orderPosition: 1,
      visible: true
    }, {
      label: "Role",
      key: "role",
      orderPosition: 2,
      visible: false
    }, {
      label: "Status",
      key: "status",
      orderPosition: 3,
      visible: true
    }],
    rows: sharedRows,
    rowKey: "id",
    showHeader: true,
    loading: false,
    options: {
      resizeColumn: true
    }
  },
  parameters: {
    docs: {
      description: {
        story: "Setting \`visible: false\` on a column removes it from the header and every row without touching the underlying data. Toggle it in your own app's args/state to show/hide columns dynamically."
      }
    }
  }
}`,...b.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  name: "Drag to Reorder Columns (Edit Mode)",
  render: args => ({
    components: {
      FusionListView,
      FuAvatar
    },
    setup() {
      // parent owns the columns array — orderPosition/visible live here,
      // FusionListView only ever reads them and reports drag intent back up.
      const columns = ref(args.columns.map((c: any, i: number) => ({
        ...c,
        orderPosition: c.orderPosition ?? i,
        visible: c.visible ?? true
      })));
      const editMode = ref(false);
      function toggleEditMode() {
        editMode.value = !editMode.value;
      }
      function toggleVisibility(key: string) {
        const col = columns.value.find((c: any) => c.key === key);
        if (col) col.visible = !col.visible;
      }
      function handleColumnsReordered(payload: ReorderPayload) {
        payload.forEach(({
          key,
          orderPosition
        }) => {
          const col = columns.value.find((c: any) => c.key === key);
          if (col) col.orderPosition = orderPosition;
        });
      }

      // just for the on-screen debug readout
      const orderedForDisplay = computed(() => [...columns.value].sort((a, b) => a.orderPosition - b.orderPosition));
      return {
        args,
        columns,
        editMode,
        toggleEditMode,
        toggleVisibility,
        handleColumnsReordered,
        orderedForDisplay
      };
    },
    template: \`
      <div style="display:flex; flex-direction:column; gap:12px;">
        <div style="display:flex; align-items:center; gap:8px; flex-wrap:wrap;">
          <button
            @click="toggleEditMode"
            style="padding:6px 14px; border-radius:6px; border:1px solid #ccc; cursor:pointer;"
          >
            {{ editMode ? "Done editing" : "Edit columns" }}
          </button>

          <label
            v-for="col in columns"
            :key="col.key"
            style="display:flex; align-items:center; gap:4px; font-size:12px;"
          >
            <input type="checkbox" :checked="col.visible" @change="toggleVisibility(col.key)" />
            {{ col.label }}
          </label>
        </div>

        <p v-if="editMode" style="font-size:12px; opacity:0.7; margin:0;">
          Drag a column by its ⠿ handle and drop it on another column to reorder.
        </p>

        <FusionListView
          :columns="columns"
          :rows="args.rows"
          rowKey="id"
          :showHeader="true"
          :editMode="editMode"
          :options="{ selectable: true, resizeColumn: true }"
          @columns-reordered="handleColumnsReordered"
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

        <pre style="padding:8px; background:#f5f5f5; border-radius:6px; font-size:11px;">{{
          orderedForDisplay.map(c => ({ key: c.key, orderPosition: c.orderPosition, visible: c.visible }))
        }}</pre>
      </div>
    \`
  }),
  args: {
    columns: [{
      label: "Name",
      key: "name",
      width: "200px",
      icon: User,
      textAlign: "start" as const
    }, {
      label: "Email",
      key: "email",
      width: "220px",
      icon: AtSign
    }, {
      label: "Role",
      key: "role",
      icon: Users,
      textAlign: "center" as const
    }, {
      label: "Status",
      key: "status",
      width: "150px",
      icon: CheckCircle,
      textAlign: "end" as const
    }],
    rows: sharedRows
  },
  parameters: {
    docs: {
      description: {
        story: \`
Toggle **Edit columns** to enter edit mode — each header shows a ⠿ drag handle.
Drag a header and drop it on another to reorder; FusionListView emits
\\\`columns-reordered\\\` with the full new order, and this story applies it back
onto its own \\\`columns\\\` ref (the JSON readout below the table reflects live
\\\`orderPosition\\\`/\\\`visible\\\` state). The checkboxes above the table toggle
\\\`visible\\\` directly, independent of edit mode.
        \`
      }
    }
  }
}`,...f.parameters?.docs?.source}}};const $=["WithAvatar","Loading","LoadingTransition","WithPagination","WithSorting","WithDisabledRows","WithHiddenColumns","DragToReorderColumns"];export{f as DragToReorderColumns,g as Loading,w as LoadingTransition,p as WithAvatar,v as WithDisabledRows,b as WithHiddenColumns,y as WithPagination,h as WithSorting,$ as __namedExportsOrder,_ as default};
