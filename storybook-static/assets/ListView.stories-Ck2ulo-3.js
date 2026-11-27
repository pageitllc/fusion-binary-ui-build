import{F as u}from"./FusionListView-CYUhTuhR.js";import{F as L}from"./FuAvatar-BRVPIokn.js";import{F as z}from"./FusionPagination-BEZxOR3b.js";import{r,c as C}from"./iframe-DLJy-DHW.js";import{U as D}from"./user-C3sMijFT.js";import{A as P}from"./at-sign-BQ_FFPus.js";import{U as A}from"./users-BRDFX4XK.js";import{C as T}from"./circle-check-big-B3sKmeGd.js";import{c as E}from"./createLucideIcon-CURt8gZv.js";import"./FusionCheckbox-rvjkAkyC.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./FusionStatusDropdown-9U1oczfP.js";import"./chevron-down-CUXnPYIZ.js";import"./chevron-left-DXfoJJ8S.js";import"./chevron-right-DxdVyPGM.js";import"./preload-helper-Ct5FWWRu.js";/**
 * @license @lucide/vue v1.54.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const M={name:"grip-vertical",size:24,node:[["circle",{cx:"9",cy:"12",r:"1",key:"1vctgf"}],["circle",{cx:"9",cy:"5",r:"1",key:"hp0tcf"}],["circle",{cx:"9",cy:"19",r:"1",key:"fkjjf6"}],["circle",{cx:"15",cy:"12",r:"1",key:"1tmaij"}],["circle",{cx:"15",cy:"5",r:"1",key:"19l28e"}],["circle",{cx:"15",cy:"19",r:"1",key:"f4zoj3"}]]},j=E(M),Z={title:"Fusion/Data Display/FusionListView",component:u,tags:["autodocs"],parameters:{actions:{handles:["sort-change","columns-reordered"]},docs:{description:{component:`
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

## Row states: rowTone and rowClass

\`rowTone(row)\` returns a state the library styles itself, with hover and selected still visible on top:

| Tone | Looks like | For |
|---|---|---|
| \`muted\` | faint grey background, secondary text | read, archived |
| \`highlight\` | soft accent background | new, open in a side panel |
| \`danger\` | soft red background | overdue, failed to import |

\`rowClass(row)\` adds your own classes to the \`<tr>\` (string, array or object, like \`:class\`), next to \`fu-listview__row\`:

\`\`\`vue
<FusionListView
  :rows="rows"
  :rowTone="(row) => (row.hasUnread ? null : 'muted')"
  :rowClass="(row) => ({ 'is-read': !row.hasUnread })"
/>
\`\`\`

Selected rows (with \`options.selectable\`) get \`is-selected\` and a soft accent background.

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
        `}}}},V=[{label:"Name",key:"name",width:"200px",icon:D,textAlign:"start"},{label:"Email",key:"email",width:"220px",icon:P},{label:"Role",key:"role",icon:A,textAlign:"center"},{label:"Status",key:"status",width:"150px",icon:T,textAlign:"end"}],F=[{id:1,name:"John Doe",email:"john@doe.com",role:"Developer",status:"Active",avatar:"/avatars/john.jpg"},{id:2,name:"Jane Doe",email:"jane@doe.com",role:"HR",status:"Inactive",avatar:"/avatars/jane.jpg"},{id:3,name:"Sam Lee",email:"sam@doe.com",role:"Designer",status:"Active",avatar:"/avatars/sam.jpg"}],w={render:n=>({components:{FusionListView:u,FuAvatar:L},setup(){return{args:n}},template:`
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
    `}),args:{columns:V,rows:F,rowKey:"id",showHeader:!0,loading:!1,options:{selectable:!0,resizeColumn:!0}}},y={render:n=>({components:{FusionListView:u,FuAvatar:L},setup(){return{args:n}},template:`
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
    `}),args:{columns:V,rows:[],rowKey:"id",showHeader:!0,loading:!0,skeletonRows:6,options:{selectable:!0,resizeColumn:!0}}},h={name:"Loading → Loaded transition",render:n=>({components:{FusionListView:u,FuAvatar:L},setup(){const e=r(!0);return setTimeout(()=>e.value=!1,2e3),{args:n,isLoading:e}},template:`
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
    `}),args:{columns:V,rows:F,options:{selectable:!0,resizeColumn:!0}},parameters:{docs:{description:{story:"Skeleton rows shimmer for 2s then resolve to real data automatically on mount."}}}},v={name:"With Pagination",render:n=>({components:{FusionListView:u,FusionPagination:z},setup(){const e=r(1),a=r(5),i=r(!0);setTimeout(()=>i.value=!1,1500);const c=C(()=>{const t=(e.value-1)*a.value;return n.rows.slice(t,t+a.value)});return{args:n,page:e,pageSize:a,paginatedRows:c,isLoading:i}},template:`
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
    `}),args:{showHeader:!0,columns:[{label:"Name",key:"name",sortable:!0},{label:"Email",key:"email",sortable:!0},{label:"Role",key:"role"},{label:"Status",key:"status"}],rows:Array.from({length:23}).map((n,e)=>({id:e+1,name:`User ${e+1}`,email:`user${e+1}@company.com`,role:"Developer",status:e%2===0?"Active":"Inactive"})),options:{selectable:!0,resizeColumn:!0}}},b={name:"With Sorting (Controlled + Pagination)",render:n=>({components:{FusionListView:u,FusionPagination:z},setup(){const e=r(1),a=r(5),i=r([...n.rows]),c=r(!0);setTimeout(()=>c.value=!1,1500);const t=r({key:null,direction:"asc"});function l(o){t.value=o,e.value=1,o.key&&(i.value=[...i.value].sort((m,p)=>{const d=m[o.key],R=p[o.key];return d===R?0:o.direction==="asc"?d>R?1:-1:d<R?1:-1}))}const s=C(()=>{const o=(e.value-1)*a.value;return i.value.slice(o,o+a.value)});return{args:n,page:e,pageSize:a,paginatedRows:s,activeSort:t,handleSortChange:l,isLoading:c}},template:`
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
    `}),args:{columns:[{label:"Name",key:"name",sortable:!0},{label:"Email",key:"email",sortable:!0},{label:"Role",key:"role"}],rows:[{id:1,name:"Charlie",email:"charlie@skkido.com",role:"Admin"},{id:2,name:"Alice",email:"alice@skkido.com",role:"User"},{id:3,name:"Bob",email:"bob@skkido.com",role:"Manager"},{id:4,name:"Zara",email:"zara@skkido.com",role:"Editor"},{id:5,name:"Ethan",email:"ethan@skkido.com",role:"User"},{id:6,name:"Liam",email:"liam@skkido.com",role:"Admin"},{id:7,name:"Olivia",email:"olivia@skkido.com",role:"User"}]}},f={name:"With Disabled Rows",args:{columns:[{label:"Name",key:"name"},{label:"Email",key:"email"},{label:"Status",key:"status"}],rows:[{id:1,name:"Alice",email:"alice@company.com",status:"Active"},{id:2,name:"Bob",email:"bob@company.com",status:"Locked"},{id:3,name:"Charlie",email:"charlie@company.com",status:"Active"},{id:4,name:"David",email:"david@company.com",status:"Locked"}],rowKey:"id",showHeader:!0,loading:!1,options:{selectable:!0,resizeColumn:!0,isRowSelectable:n=>n.status!=="Locked"}}},k={name:"With Hidden Columns",render:n=>({components:{FusionListView:u},setup(){return{args:n}},template:'<FusionListView v-bind="args" />'}),args:{columns:[{label:"Name",key:"name",orderPosition:0,visible:!0},{label:"Email",key:"email",orderPosition:1,visible:!0},{label:"Role",key:"role",orderPosition:2,visible:!1},{label:"Status",key:"status",orderPosition:3,visible:!0}],rows:F,rowKey:"id",showHeader:!0,loading:!1,options:{resizeColumn:!0}},parameters:{docs:{description:{story:"Setting `visible: false` on a column removes it from the header and every row without touching the underlying data. Toggle it in your own app's args/state to show/hide columns dynamically."}}}},x={name:"Drag to Reorder Columns (Edit Mode)",render:n=>({components:{FusionListView:u,FuAvatar:L},setup(){const e=r(n.columns.map((s,o)=>({...s,orderPosition:s.orderPosition??o,visible:s.visible??!0}))),a=r(!1);function i(){a.value=!a.value}function c(s){const o=e.value.find(m=>m.key===s);o&&(o.visible=!o.visible)}function t(s){s.forEach(({key:o,orderPosition:m})=>{const p=e.value.find(d=>d.key===o);p&&(p.orderPosition=m)})}const l=C(()=>[...e.value].sort((s,o)=>s.orderPosition-o.orderPosition));return{args:n,columns:e,editMode:a,toggleEditMode:i,toggleVisibility:c,handleColumnsReordered:t,orderedForDisplay:l}},template:`
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
    `}),args:{columns:[{label:"Name",key:"name",width:"200px",icon:D,textAlign:"start"},{label:"Email",key:"email",width:"220px",icon:P},{label:"Role",key:"role",icon:A,textAlign:"center"},{label:"Status",key:"status",width:"150px",icon:T,textAlign:"end"}],rows:F},parameters:{docs:{description:{story:"\nToggle **Edit columns** to enter edit mode — each header shows a ⠿ drag handle.\nDrag a header and drop it on another to reorder; FusionListView emits\n`columns-reordered` with the full new order, and this story applies it back\nonto its own `columns` ref (the JSON readout below the table reflects live\n`orderPosition`/`visible` state). The checkboxes above the table toggle\n`visible` directly, independent of edit mode.\n        "}}}},g={name:"Drag to Reorder Rows (between lists too)",render:()=>({components:{FusionListView:u,GripVertical:j},setup(){const n=r([{id:"discovery",name:"Discovery"},{id:"build",name:"Build"}]),e=r([{id:1,section:"discovery",name:"Discovery workshop",qty:"1 day",total:"£1,200"},{id:2,section:"discovery",name:"UX and UI design",qty:"40 hours",total:"£3,000"},{id:3,section:"build",name:"Front-end development",qty:"60 hours",total:"£4,590"},{id:4,section:"build",name:"CMS setup",qty:"1 item",total:"£800"}]),a=[{label:"Service",key:"name"},{label:"Qty",key:"qty",width:"120px"},{label:"Total",key:"total",width:"120px",textAlign:"end"}],i=r(null),c=l=>e.value.filter(s=>s.section===l);function t({row:l,position:s}){const o=e.value.find(d=>d.id===i.value);if(!o||o.id===l.id)return;const m=e.value.filter(d=>d.id!==o.id),p=m.findIndex(d=>d.id===l.id)+(s==="after"?1:0);e.value=[...m.slice(0,p),{...o,section:l.section},...m.slice(p)],i.value=null}return{sections:n,columns:a,linesOf:c,dragging:i,onDrop:t}},template:`
      <div style="display:flex; flex-direction:column; gap:20px; max-width:720px;">
        <p style="margin:0; font-size:13px;">Drag a row by its grip. Drop it on any row, in either section.</p>
        <section v-for="sec in sections" :key="sec.id" style="display:flex; flex-direction:column; gap:8px;">
          <b style="font-size:14px;">{{ sec.name }}</b>
          <FusionListView
            :columns="columns"
            :rows="linesOf(sec.id)"
            rowKey="id"
            :showHeader="true"
            :options="{ selectable: false, rowDraggable: true }"
            @row-drag-start="(row) => (dragging = row.id)"
            @row-drop="onDrop"
          >
            <template #cell-name="{ row }">
              <span style="display:flex; align-items:center; gap:6px;">
                <span data-row-drag-handle title="Drag to reorder" style="display:grid; place-items:center; cursor:grab; opacity:.6;">
                  <GripVertical :size="14" />
                </span>
                {{ row.name }}
              </span>
            </template>
          </FusionListView>
        </section>
      </div>
    `})},S={name:"Row States (rowTone / rowClass)",parameters:{docs:{description:{story:"\nAn inbox: unread conversations are bold with an accent dot, read ones use the `muted` tone.\nA failed one uses `danger`, and the one open in the side panel uses `highlight`.\nHover and select rows to see that both still show on top of a tone.\n\nThe dot uses `--fu-color-accent`, and the preview text uses `--fu-color-text-secondary`.\n"}}},render:()=>({components:{FusionListView:u},setup(){const n=[{label:"From",key:"from",width:"220px"},{label:"Subject",key:"subject",width:"380px"},{label:"Date",key:"date",width:"100px"}],e=r([{id:1,from:"Priya Raman",subject:"Contract for Q1",preview:"Signed copy attached",date:"09:42",unread:!0},{id:2,from:"Tom Hargreaves",subject:"Re: Site visit",preview:"Thursday works for us",date:"08:15",unread:!0,open:!0},{id:3,from:"Jane Doe",subject:"Invoice #2041",preview:"Paid, thanks!",date:"Yesterday",unread:!1},{id:4,from:"Import bot",subject:"12 contacts failed to import",preview:"Missing email address",date:"Yesterday",unread:!1,failed:!0},{id:5,from:"Ben Ito",subject:"Lunch?",preview:"New place on Main St",date:"Mon",unread:!1}]),a=t=>t.failed?"danger":t.open?"highlight":t.unread?null:"muted",i=t=>({"is-unread":t.unread,"is-read":!t.unread});function c(t){e.value.forEach(l=>l.open=l.id===t.id),t.unread=!1}return{columns:n,rows:e,rowTone:a,rowClass:i,onRowClick:c}},template:`
      <div style="height: 320px">
        <FusionListView
          :columns="columns"
          :rows="rows"
          rowKey="id"
          :rowTone="rowTone"
          :rowClass="rowClass"
          :options="{ selectable: true }"
          @row-clicked="onRowClick"
        >
          <template #cell-from="{ row }">
            <span style="display: inline-flex; align-items: center; gap: 8px" :style="{ fontWeight: row.unread ? 600 : 400 }">
              <span
                style="width: 8px; height: 8px; border-radius: 50%; flex: none"
                :style="{ background: row.unread ? 'var(--fu-color-accent)' : 'transparent' }"
              />
              <span v-if="row.unread" style="position: absolute; width: 1px; height: 1px; overflow: hidden; clip: rect(0 0 0 0)">Unread</span>
              {{ row.from }}
            </span>
          </template>
          <template #cell-subject="{ row }">
            <span :style="{ fontWeight: row.unread ? 600 : 400 }">{{ row.subject }}</span>
            <span style="color: var(--fu-color-text-secondary)"> — {{ row.preview }}</span>
          </template>
        </FusionListView>
      </div>
    `})};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
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
}`,...w.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
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
}`,...y.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
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
}`,...h.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
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
}`,...v.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
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
}`,...b.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
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
}`,...f.parameters?.docs?.source}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
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
}`,...k.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
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
}`,...x.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  name: "Drag to Reorder Rows (between lists too)",
  render: () => ({
    components: {
      FusionListView,
      GripVertical
    },
    setup() {
      const sections = ref([{
        id: "discovery",
        name: "Discovery"
      }, {
        id: "build",
        name: "Build"
      }]);
      const lines = ref([{
        id: 1,
        section: "discovery",
        name: "Discovery workshop",
        qty: "1 day",
        total: "£1,200"
      }, {
        id: 2,
        section: "discovery",
        name: "UX and UI design",
        qty: "40 hours",
        total: "£3,000"
      }, {
        id: 3,
        section: "build",
        name: "Front-end development",
        qty: "60 hours",
        total: "£4,590"
      }, {
        id: 4,
        section: "build",
        name: "CMS setup",
        qty: "1 item",
        total: "£800"
      }]);
      const columns = [{
        label: "Service",
        key: "name"
      }, {
        label: "Qty",
        key: "qty",
        width: "120px"
      }, {
        label: "Total",
        key: "total",
        width: "120px",
        textAlign: "end"
      }];
      const dragging = ref<number | null>(null);
      const linesOf = (sectionId: string) => lines.value.filter(l => l.section === sectionId);
      function onDrop({
        row,
        position
      }: {
        row: any;
        position: "before" | "after";
      }) {
        const moving = lines.value.find(l => l.id === dragging.value);
        if (!moving || moving.id === row.id) return;
        const rest = lines.value.filter(l => l.id !== moving.id);
        const at = rest.findIndex(l => l.id === row.id) + (position === "after" ? 1 : 0);
        lines.value = [...rest.slice(0, at), {
          ...moving,
          section: row.section
        }, ...rest.slice(at)];
        dragging.value = null;
      }
      return {
        sections,
        columns,
        linesOf,
        dragging,
        onDrop
      };
    },
    template: \`
      <div style="display:flex; flex-direction:column; gap:20px; max-width:720px;">
        <p style="margin:0; font-size:13px;">Drag a row by its grip. Drop it on any row, in either section.</p>
        <section v-for="sec in sections" :key="sec.id" style="display:flex; flex-direction:column; gap:8px;">
          <b style="font-size:14px;">{{ sec.name }}</b>
          <FusionListView
            :columns="columns"
            :rows="linesOf(sec.id)"
            rowKey="id"
            :showHeader="true"
            :options="{ selectable: false, rowDraggable: true }"
            @row-drag-start="(row) => (dragging = row.id)"
            @row-drop="onDrop"
          >
            <template #cell-name="{ row }">
              <span style="display:flex; align-items:center; gap:6px;">
                <span data-row-drag-handle title="Drag to reorder" style="display:grid; place-items:center; cursor:grab; opacity:.6;">
                  <GripVertical :size="14" />
                </span>
                {{ row.name }}
              </span>
            </template>
          </FusionListView>
        </section>
      </div>
    \`
  })
}`,...g.parameters?.docs?.source},description:{story:"Rows move by a handle: put `data-row-drag-handle` on any element in a cell and set\n`options.rowDraggable`. The whole row lifts and the row it will land above or below is marked.\nThe list only reports what was dropped where (row-drag-start, row-drop); the parent moves it,\nso a row can also go from one list to another, like the two sections here.",...g.parameters?.docs?.description}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  name: "Row States (rowTone / rowClass)",
  parameters: {
    docs: {
      description: {
        story: \`
An inbox: unread conversations are bold with an accent dot, read ones use the \\\`muted\\\` tone.
A failed one uses \\\`danger\\\`, and the one open in the side panel uses \\\`highlight\\\`.
Hover and select rows to see that both still show on top of a tone.

The dot uses \\\`--fu-color-accent\\\`, and the preview text uses \\\`--fu-color-text-secondary\\\`.
\`
      }
    }
  },
  render: () => ({
    components: {
      FusionListView
    },
    setup() {
      const columns = [{
        label: "From",
        key: "from",
        width: "220px"
      }, {
        label: "Subject",
        key: "subject",
        width: "380px"
      }, {
        label: "Date",
        key: "date",
        width: "100px"
      }];
      const rows = ref([{
        id: 1,
        from: "Priya Raman",
        subject: "Contract for Q1",
        preview: "Signed copy attached",
        date: "09:42",
        unread: true
      }, {
        id: 2,
        from: "Tom Hargreaves",
        subject: "Re: Site visit",
        preview: "Thursday works for us",
        date: "08:15",
        unread: true,
        open: true
      }, {
        id: 3,
        from: "Jane Doe",
        subject: "Invoice #2041",
        preview: "Paid, thanks!",
        date: "Yesterday",
        unread: false
      }, {
        id: 4,
        from: "Import bot",
        subject: "12 contacts failed to import",
        preview: "Missing email address",
        date: "Yesterday",
        unread: false,
        failed: true
      }, {
        id: 5,
        from: "Ben Ito",
        subject: "Lunch?",
        preview: "New place on Main St",
        date: "Mon",
        unread: false
      }]);
      const rowTone = (row: any) => row.failed ? "danger" : row.open ? "highlight" : row.unread ? null : "muted";
      const rowClass = (row: any) => ({
        "is-unread": row.unread,
        "is-read": !row.unread
      });
      function onRowClick(row: any) {
        rows.value.forEach(r => r.open = r.id === row.id);
        row.unread = false;
      }
      return {
        columns,
        rows,
        rowTone,
        rowClass,
        onRowClick
      };
    },
    template: \`
      <div style="height: 320px">
        <FusionListView
          :columns="columns"
          :rows="rows"
          rowKey="id"
          :rowTone="rowTone"
          :rowClass="rowClass"
          :options="{ selectable: true }"
          @row-clicked="onRowClick"
        >
          <template #cell-from="{ row }">
            <span style="display: inline-flex; align-items: center; gap: 8px" :style="{ fontWeight: row.unread ? 600 : 400 }">
              <span
                style="width: 8px; height: 8px; border-radius: 50%; flex: none"
                :style="{ background: row.unread ? 'var(--fu-color-accent)' : 'transparent' }"
              />
              <span v-if="row.unread" style="position: absolute; width: 1px; height: 1px; overflow: hidden; clip: rect(0 0 0 0)">Unread</span>
              {{ row.from }}
            </span>
          </template>
          <template #cell-subject="{ row }">
            <span :style="{ fontWeight: row.unread ? 600 : 400 }">{{ row.subject }}</span>
            <span style="color: var(--fu-color-text-secondary)"> — {{ row.preview }}</span>
          </template>
        </FusionListView>
      </div>
    \`
  })
}`,...S.parameters?.docs?.source}}};const ee=["WithAvatar","Loading","LoadingTransition","WithPagination","WithSorting","WithDisabledRows","WithHiddenColumns","DragToReorderColumns","DragToReorderRows","RowStates"];export{x as DragToReorderColumns,g as DragToReorderRows,y as Loading,h as LoadingTransition,S as RowStates,w as WithAvatar,f as WithDisabledRows,k as WithHiddenColumns,v as WithPagination,b as WithSorting,ee as __namedExportsOrder,Z as default};
