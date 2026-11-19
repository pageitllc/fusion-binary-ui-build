import{r as y,h as ee}from"./iframe-Bit2fKoK.js";import{_ as w}from"./FusionTreeTable-DG8yJsFr.js";import{F as P}from"./FusionBadge-1hJbE7nu.js";import{F as R}from"./FusionButton-CPNI8xRP.js";import{F as z}from"./FuAvatar-Ds1maJTR.js";import{F as E}from"./FusionDatePicker-lodDVT15.js";import{F as $}from"./FusionAutocomplete-Ch_UhJie.js";import{M as ne}from"./mail-Bv0Qdlah.js";import{P as te}from"./pencil-DTtodqD_.js";import{C as se}from"./copy-BFpBXG-1.js";import{U as oe}from"./upload-Bk_H7HbT.js";import{A as re}from"./archive-DDdIGxqT.js";import"./preload-helper-Ct5FWWRu.js";import"./FusionActionButton-tr1hkM4H.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./DropdownMenu-6zTm6FVK.js";import"./check-DzxBtvcd.js";import"./createLucideIcon-xyDXa4T9.js";import"./plus-D9zVjLWI.js";import"./ellipsis-CzlSGs8p.js";import"./dayjs.min-C8Kx736W.js";import"./_commonjsHelpers-CqkleIqs.js";import"./FusionTextInput-BsHpNw-M.js";import"./chevron-down-BVqdWp0k.js";import"./chevron-left-BxwmHgr8.js";import"./chevron-right-C5PQv8YI.js";function U(e,n,d={}){const o=d.idField??"id",t=d.childrenField??"children",{groupField:a}=d,p=i=>i.map(f=>{const b={...f};return Array.isArray(f[t])&&(b[t]=p(f[t])),b}),s=p(e),g=(i,f)=>{for(let b=0;b<i.length;b++){if(i[b][o]===f)return{list:i,index:b};const r=i[b][t];if(Array.isArray(r)){const u=g(r,f);if(u)return u}}return null},c=g(s,n.id);if(!c||n.id===n.targetId)return e;const l=c.list[c.index];if(n.targetId!==null&&Array.isArray(l[t])&&g(l[t],n.targetId))return e;if(c.list.splice(c.index,1),n.targetId===null){if(!a||n.toGroupId==null)return e;l[a]=n.toGroupId;const i=s.findIndex(f=>f[a]===n.toGroupId);return i===-1?s.push(l):s.splice(i,0,l),s}const m=g(s,n.targetId);if(!m)return e;if(n.position==="inside"){const i=m.list[m.index];Array.isArray(i[t])||(i[t]=[]),i[t].push(l),a&&delete l[a]}else{const i=n.position==="before"?m.index:m.index+1;if(m.list.splice(i,0,l),a)if(m.list===s){const f=s[i===m.index?i+1:m.index];l[a]=f[a]}else delete l[a]}return s}function ae(e,n,d){const o=d.idField??"id",{parentField:t,groupField:a}=d,p=new Map(e.map(r=>[r[o],r])),s=p.get(n.id);if(!s||n.id===n.targetId)return e;if(n.targetId!==null){let r=p.get(n.targetId);for(;r;){if(r[o]===n.id)return e;const u=r[t];r=u==null?void 0:p.get(u)}}const g=r=>{let u=r;for(;u&&u[t]!=null;)u=p.get(u[t]);return u?u[a]??null:null},c=e.filter(r=>r!==s);let l=null,m=null,i=c.length;if(n.targetId===null){if(n.toGroupId==null)return e;m=n.toGroupId;const r=c.findIndex(u=>u[t]==null&&u[a]===m);i=r===-1?c.length:r}else{const r=c.findIndex(F=>F[o]===n.targetId);if(r===-1)return e;const u=c[r];if(n.position==="inside"){l=u[o];let F=r;c.forEach((Y,Z)=>{Y[t]===l&&(F=Z)}),i=F+1}else l=u[t]??null,i=n.position==="before"?r:r+1,l===null&&(m=g(u))}const f={...s,[t]:l};f[a]=l===null?m:null;const b=c.slice();return b.splice(i,0,f),b}const ze={title:"Fusion/Data Display/FusionTreeTable",component:w,tags:["autodocs"],parameters:{layout:"padded",docs:{description:{component:'\nA collapsible tree table built on [Tabulator](https://www.tabulator.info/) and styled to match **FusionListView**.\n\n- Rows nest through a children field (`children` by default). The arrow sits in the tree column.\n- Columns can be reordered by dragging the header and resized from the edge. Listen to `columns-reordered` and `column-resized` to store the layout.\n- Selection is controlled with `v-model:selectedIds`. Selecting a parent selects its children when `propagateSelection` is on.\n- Render any cell with a `cell-<key>` slot. The slot receives `{ row, value, level }`.\n- Drag a row by its grip to reorder it or drop it onto another task to nest it. The table emits `row-move`; update your rows with the `moveTreeRow` helper.\n- Footer: put anything under the last row with the `footer` slot, for example an "Add folder" button at the bottom left.\n- Group bars (task lists): set `groupField` and `groups`. Add `groupAdd` for a + button and `groupActions` for a ... menu. Listen to `add-task` and `group-action`. Hide an action in one folder with `hiddenActions` on that group. Use the `group` slot to draw the whole bar yourself.\n- Exposed methods: `expandAll()`, `collapseAll()`, `clearSelection()`, `redraw()`, `getTable()`.\n\n```vue\n<FusionTreeTable\n  v-model:selectedIds="selected"\n  :columns="columns"\n  :rows="tasks"\n  @columns-reordered="saveOrder"\n>\n  <template #cell-status="{ value }">\n    <FusionBadge :text="value" size="sm" variant="subtle" />\n  </template>\n</FusionTreeTable>\n```\n'}}},argTypes:{idField:{control:"text"},childrenField:{control:"text"},selectable:{control:"boolean"},propagateSelection:{control:"boolean"},startExpanded:{control:"boolean"},movableColumns:{control:"boolean"},resizableColumns:{control:"boolean"},sortable:{control:"boolean"},loading:{control:"boolean"},indent:{control:{type:"number",min:8,max:48}},emptyText:{control:"text"}}},h=[{key:"name",label:"Task",minWidth:300},{key:"status",label:"Status",width:190},{key:"dependency",label:"Dependency",width:230},{key:"assignee",label:"Assignee",width:190},{key:"due",label:"Due date",width:110},{key:"hours",label:"Worked / estimate",width:170,textAlign:"right"},{key:"progress",label:"Progress",width:140}],k=[{group_id:"rebrand",id:1,num:201,name:"Rebrand: Northwind Coffee",status:"Working on it",dependency:"",assignee:"Amara Okafor",due:"2026-12-12",logged:41.5,est:78,progress:53,children:[{id:11,num:202,name:"Discovery workshop",status:"Done",dependency:"blocking",dependsOn:"Brand strategy deck",assignee:"Amara Okafor",due:"2026-11-14",logged:6,est:6,progress:100},{id:12,num:203,name:"Brand strategy deck",status:"Internal QC",dependency:"blocking",dependsOn:"Logo concepts",assignee:"Amara Okafor",due:"2026-11-18",logged:9.5,est:10,progress:90,children:[{id:121,num:204,name:"Competitor audit",status:"Done",dependency:"",assignee:"Jonas Lind",due:"2026-11-15",logged:3,est:3,progress:100},{id:122,num:205,name:"Positioning statement",status:"Internal QC",dependency:"linked",dependsOn:"Tone of voice",assignee:"Amara Okafor",due:"2026-11-18",logged:2.5,est:3,progress:85}]},{id:13,num:206,name:"Logo concepts",status:"Working on it",dependency:"waiting",dependsOn:"Brand strategy deck",assignee:"Jonas Lind",due:"2026-11-22",logged:11,est:16,progress:60,children:[{id:131,num:207,name:"Sketch round",status:"Done",dependency:"",assignee:"Jonas Lind",due:"2026-11-19",logged:4,est:4,progress:100},{id:132,num:208,name:"Digital concepts (3 routes)",status:"Working on it",dependency:"",assignee:"Jonas Lind",due:"2026-11-22",logged:7,est:12,progress:45}]},{id:14,num:209,name:"Colour palette and type",status:"Backlog",dependency:"waiting",dependsOn:"Logo concepts",assignee:"Jonas Lind",due:"2026-11-27",logged:0,est:8,progress:0},{id:15,num:210,name:"Brand guidelines PDF",status:"Backlog",dependency:"waiting",dependsOn:"Colour palette and type",assignee:"Amara Okafor",due:"2026-12-05",logged:0,est:14,progress:0}]},{group_id:"website",id:2,num:211,name:"Website: Northwind Coffee",status:"Client feedback",dependency:"",assignee:"Lee Park",due:"2026-12-19",logged:58,est:96,progress:55,children:[{id:21,num:212,name:"Sitemap and wireframes",status:"Done",dependency:"blocking",dependsOn:"Homepage design",assignee:"Priya Nair",due:"2026-11-13",logged:12,est:12,progress:100},{id:22,num:213,name:"Homepage design",status:"Sent to client",dependency:"blocking",dependsOn:"Build and QA",assignee:"Lee Park",due:"2026-11-20",logged:16,est:16,progress:100},{id:23,num:214,name:"Shop and product pages",status:"Working on it",dependency:"linked",dependsOn:"Homepage design",assignee:"Lee Park",due:"2026-11-28",logged:21,est:34,progress:60},{id:24,num:215,name:"Build and QA",status:"Backlog",dependency:"waiting",dependsOn:"Homepage design",assignee:"Priya Nair",due:"2026-12-17",logged:9,est:34,progress:25}]},{group_id:"admin",id:3,num:216,name:"Admin: Meetings",status:"Working on it",dependency:"linked",dependsOn:"Launch checklist",assignee:"Amara Okafor",due:"2026-12-19",logged:7.5,est:12,progress:60},{group_id:"admin",id:4,num:217,name:"Launch checklist",status:"Backlog",dependency:"waiting",dependsOn:"Build and QA",assignee:"Priya Nair",due:"2026-12-19",logged:0,est:6,progress:0}],G=k.flatMap(e=>e.children?e.children.map(n=>({...n,group_id:e.group_id})):[e]);function j(e,n=null,d=[]){return e.forEach(o=>{const{children:t,group_id:a,...p}=o;d.push(n===null?{...p,parent_id:null,group_id:a}:{...p,parent_id:n,group_id:null}),t&&j(t,o.id,d)}),d}const ie=j(G),q=[{id:"rebrand",label:"Rebrand: Northwind Coffee"},{id:"website",label:"Website: Northwind Coffee"},{id:"admin",label:"Admin and launch"},{id:"later",label:"Later (empty list)"}],M={Backlog:"fu-badge--draft","Working on it":"fu-badge--warning-subtle","Internal QC":"fu-badge--warning","Sent to client":"fu-badge--published","Client feedback":"fu-badge--danger",Done:"fu-badge--success"},le=e=>()=>ee("span",{style:{display:"inline-block",width:"10px",height:"10px",borderRadius:"999px",background:e,flex:"none"}}),W=[{label:"Backlog",value:"Backlog",color:"#9ca3af"},{label:"Working on it",value:"Working on it",color:"#f59e0b"},{label:"Internal QC",value:"Internal QC",color:"#8b5cf6"},{label:"Sent to client",value:"Sent to client",color:"#3b82f6"},{label:"Client feedback",value:"Client feedback",color:"#ef4444"},{label:"Done",value:"Done",color:"#16a34a"}].map(e=>({...e,type:"icon",icon:le(e.color)}));function J(e,n,d,o){return e.map(t=>({...t,...t.id===n?{[d]:o}:{},...t.children?{children:J(t.children,n,d,o)}:{}}))}const N=["Amara Okafor","Jonas Lind","Lee Park","Priya Nair"].map(e=>({label:e,value:e,type:"image",imageUrl:""})),H={waiting:"fu-badge--warning",blocking:"fu-badge--danger",linked:"fu-badge--draft"},Q={waiting:"Waiting on",blocking:"Blocking",linked:"Linked"},V=`

  <template #cell-name="{ row, level }">
    <span style="display:inline-flex;align-items:baseline;gap:8px">
      <span style="font-size:12px;opacity:.55">#{{ row.num }}</span>
      <span :style="{ fontWeight: level === 0 ? 500 : 400 }">{{ row.name }}</span>
    </span>
  </template>
  <template #cell-status="{ row, value }">
    <FusionAutocomplete
      ghost
      size="sm"
      searchPlaceholder="Search status"
      :options="statusOptions"
      :modelValue="statusOptions.find((o) => o.value === value) || null"
      @update:modelValue="(o) => setField(row.id, 'status', o.value)"
    />
  </template>
  <template #cell-dependency="{ row, value }">
    <span v-if="value" :title="dependencyLabel[value] + ' ' + row.dependsOn" style="display:inline-flex;align-items:center;gap:6px;min-width:0">
      <FusionBadge :text="dependencyLabel[value]" size="sm" variant="subtle" :themeClass="dependencyTheme[value]" />
      <span style="font-size:12px;opacity:.7;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">{{ row.dependsOn }}</span>
    </span>
  </template>
  <template #cell-assignee="{ row, value }">
    <FusionAutocomplete
      ghost
      size="sm"
      placeholder="Unassigned"
      searchPlaceholder="Search people"
      :options="people"
      :modelValue="people.find((o) => o.value === value) || null"
      @update:modelValue="(o) => setField(row.id, 'assignee', o.value)"
    />
  </template>
  <template #cell-due="{ row, value }">
    <FusionDatePicker
      ghost
      size="sm"
      displayFormat="D MMM"
      :modelValue="value"
      @update:modelValue="(v) => setField(row.id, 'due', v)"
    />
  </template>
  <template #cell-hours="{ row }">
    <span :style="{ color: row.logged > row.est ? 'var(--fu-danger, #dc2626)' : 'inherit' }">{{ row.logged }} h / {{ row.est }} h</span>
  </template>
  <template #cell-progress="{ value }">
    <span style="display:inline-flex;align-items:center;gap:8px;width:100%">
      <span style="flex:1;height:6px;border-radius:999px;background:var(--fu-line,#e5e7eb);overflow:hidden">
        <span :style="{ display:'block', height:'100%', width: value + '%', borderRadius:'999px', background: value === 100 ? 'var(--fu-success, #16a34a)' : 'var(--fu-primary, #4f46e5)' }" />
      </span>
      <span style="font-size:12px;min-width:32px;text-align:right">{{ value }}%</span>
    </span>
  </template>
`;function v(e=""){return n=>({components:{FusionTreeTable:w,FusionBadge:P,FuAvatar:z,FusionAutocomplete:$,FusionDatePicker:E,FusionButton:R},setup(){const d=y([]),o=y(n.rows??[]);return{args:n,selected:d,data:o,onMove:p=>{o.value=U(o.value,p,{groupField:"group_id"})},setField:(p,s,g)=>{o.value=J(o.value,p,s,g)},people:N,statusOptions:W,statusTheme:M,dependencyTheme:H,dependencyLabel:Q}},template:`<div>${e}<FusionTreeTable v-bind="args" :rows="data" v-model:selectedIds="selected" @row-move="onMove">${V}</FusionTreeTable></div>`})}const x={args:{columns:h,rows:k,selectable:!0,startExpanded:!0},render:v()},de=[{key:"email",label:"Email to this list",icon:ne},{key:"rename",label:"Rename task list",icon:te,dividerBefore:!0},{key:"duplicate",label:"Duplicate task list",icon:se},{key:"import",label:"Import tasks from CSV",icon:oe},{key:"archive",label:"Archive task list",icon:re,dividerBefore:!0}];function K(e){return n=>({components:{FusionTreeTable:w,FusionBadge:P,FuAvatar:z,FusionAutocomplete:$,FusionDatePicker:E,FusionButton:R},setup(){const d=y([]),o=y(n.rows??[]),t=y("Drag a task onto another folder, or open a folder's ... menu");return{args:n,selected:d,data:o,last:t,onMove:s=>{o.value=e?ae(o.value,s,{parentField:"parent_id",groupField:"group_id"}):U(o.value,s,{groupField:"group_id"});const g=e?o.value.find(c=>c.id===s.id):null;t.value=e?`moved #${s.id}: parent_id = ${g?.parent_id}, group_id = ${g?.group_id}`:`moved #${s.id} to ${s.toGroupId}`},setField:(s,g,c)=>{o.value=e?o.value.map(l=>l.id===s?{...l,[g]:c}:l):J(o.value,s,g,c)},people:N,statusOptions:W,statusTheme:M,dependencyTheme:H,dependencyLabel:Q,onAction:s=>t.value=`group-action: ${s.action} on "${s.groupId}"`,onAdd:s=>t.value=`add-task on "${s.groupId}"`}},template:`<div><p style="margin:0 0 12px;font-size:14px">{{ last }}</p><FusionTreeTable v-bind="args" :rows="data" v-model:selectedIds="selected" @row-move="onMove" @group-action="onAction" @add-task="onAdd">${V}<template #footer><FusionButton text="Add folder" variant="ghost" size="sm" @click="last = 'footer: add folder'" /></template></FusionTreeTable></div>`})}const X={columns:h,groupField:"group_id",groups:q.map(e=>e.id==="admin"?{...e,hiddenActions:["archive"]}:e),groupActions:de,groupAdd:!0,selectable:!0,startExpanded:!0},T={name:"Task lists (folders under one header)",args:{...X,rows:G},render:K(!1)},A={name:"Task lists from flat rows (id + parent_id)",args:{...X,rows:ie,parentField:"parent_id"},render:K(!0)},S={name:"Sticky header (page scrolls)",args:{columns:h,rows:G,groupField:"group_id",groups:q,stickyHeader:!0,selectable:!0,startExpanded:!0},render:e=>({components:{FusionTreeTable:w,FusionBadge:P,FuAvatar:z,FusionAutocomplete:$,FusionDatePicker:E,FusionButton:R},setup(){const n=y([]);return{args:e,selected:n,people:N,statusOptions:W,statusTheme:M,dependencyTheme:H,dependencyLabel:Q,setField:()=>{}}},template:`<div id="sticky-demo" class="customScrollBar" style="height:420px;overflow:auto;border:1px solid var(--fu-line,#e5e7eb);border-radius:12px;padding:0 8px"><FusionTreeTable v-bind="args" v-model:selectedIds="selected">${V}</FusionTreeTable></div>`})},L={name:"Plain text (no slots)",args:{columns:h,rows:k}},I={render:v(),args:{columns:h,rows:k,startExpanded:!1}},O={render:v(),args:{columns:h,rows:k,selectable:!1}},B={render:v(),args:{columns:h,rows:k,height:220}},_={args:{columns:h,rows:[],emptyText:"No tasks yet"}},C={render:v(),args:{columns:h,rows:k,loading:!0}},D={name:"Column order stored by the parent",render:e=>({components:{FusionTreeTable:w,FusionBadge:P,FuAvatar:z,FusionAutocomplete:$,FusionDatePicker:E,FusionButton:R},setup(){const n=y([...h]),d=y(h.map(a=>a.key).join(" > "));function o(a){n.value=a.map(p=>h.find(s=>s.key===p)).filter(Boolean),d.value=a.join(" > ")}return{args:e,cols:n,rows:k,order:d,onReorder:o,setField:()=>{},people:N,statusOptions:W,statusTheme:M,dependencyTheme:H,dependencyLabel:Q}},template:`
<div>
  <p style="margin:0 0 12px;font-size:14px">Order: {{ order }}</p>
  <FusionTreeTable :columns="cols" :rows="rows" @columns-reordered="onReorder">${V}</FusionTreeTable>
</div>`})};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    columns,
    rows,
    selectable: true,
    startExpanded: true
  },
  render: rich()
}`,...x.parameters?.docs?.source}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  name: "Task lists (folders under one header)",
  args: {
    ...listArgs,
    rows: taskListRows
  },
  render: listsRender(false)
}`,...T.parameters?.docs?.source}}};A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  name: "Task lists from flat rows (id + parent_id)",
  args: {
    ...listArgs,
    rows: flatRows,
    parentField: "parent_id"
  },
  render: listsRender(true)
}`,...A.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  name: "Sticky header (page scrolls)",
  args: {
    columns,
    rows: taskListRows,
    groupField: "group_id",
    groups: taskLists,
    stickyHeader: true,
    selectable: true,
    startExpanded: true
  },
  render: (args: any) => ({
    components: {
      FusionTreeTable,
      FusionBadge,
      FuAvatar,
      FusionAutocomplete,
      FusionDatePicker,
      FusionButton
    },
    setup() {
      const selected = ref<(string | number)[]>([]);
      return {
        args,
        selected,
        people,
        statusOptions,
        statusTheme,
        dependencyTheme,
        dependencyLabel,
        setField: () => {}
      };
    },
    template: \`<div id="sticky-demo" class="customScrollBar" style="height:420px;overflow:auto;border:1px solid var(--fu-line,#e5e7eb);border-radius:12px;padding:0 8px"><FusionTreeTable v-bind="args" v-model:selectedIds="selected">\${richSlots}</FusionTreeTable></div>\`
  })
}`,...S.parameters?.docs?.source}}};L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  name: "Plain text (no slots)",
  args: {
    columns,
    rows
  }
}`,...L.parameters?.docs?.source}}};I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  render: rich(),
  args: {
    columns,
    rows,
    startExpanded: false
  }
}`,...I.parameters?.docs?.source}}};O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  render: rich(),
  args: {
    columns,
    rows,
    selectable: false
  }
}`,...O.parameters?.docs?.source}}};B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  render: rich(),
  args: {
    columns,
    rows,
    height: 220
  }
}`,...B.parameters?.docs?.source}}};_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    columns,
    rows: [],
    emptyText: "No tasks yet"
  }
}`,..._.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  render: rich(),
  args: {
    columns,
    rows,
    loading: true
  }
}`,...C.parameters?.docs?.source}}};D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  name: "Column order stored by the parent",
  render: args => ({
    components: {
      FusionTreeTable,
      FusionBadge,
      FuAvatar,
      FusionAutocomplete,
      FusionDatePicker,
      FusionButton
    },
    setup() {
      const cols = ref([...columns]);
      const order = ref(columns.map(c => c.key).join(" > "));
      function onReorder(keys: string[]) {
        cols.value = keys.map(k => columns.find(c => c.key === k)!).filter(Boolean);
        order.value = keys.join(" > ");
      }
      const setField = () => {};
      return {
        args,
        cols,
        rows,
        order,
        onReorder,
        setField,
        people,
        statusOptions,
        statusTheme,
        dependencyTheme,
        dependencyLabel
      };
    },
    template: \`
<div>
  <p style="margin:0 0 12px;font-size:14px">Order: {{ order }}</p>
  <FusionTreeTable :columns="cols" :rows="rows" @columns-reordered="onReorder">\${richSlots}</FusionTreeTable>
</div>\`
  })
}`,...D.parameters?.docs?.source}}};const Ee=["Default","TaskLists","TaskListsFlat","StickyHeader","PlainText","Collapsed","NoSelection","FixedHeight","Empty","Loading","ColumnOrderStored"];export{I as Collapsed,D as ColumnOrderStored,x as Default,_ as Empty,B as FixedHeight,C as Loading,O as NoSelection,L as PlainText,S as StickyHeader,T as TaskLists,A as TaskListsFlat,Ee as __namedExportsOrder,ze as default};
