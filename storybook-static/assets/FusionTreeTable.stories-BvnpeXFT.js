import{r as m,q as me,v as ve,x as ye,h as w}from"./iframe-DLJy-DHW.js";import{_ as k}from"./FusionTreeTable-Cih8Bc9f.js";import{F as A}from"./FusionBadge-C19OGssr.js";import{F as T}from"./FusionButton-CSaeGhtG.js";import{F as he}from"./FusionTab-CKvnT3mV.js";import{F as R}from"./FuAvatar-BRVPIokn.js";import{F as B}from"./FusionDatePicker-CbONsWak.js";import{F as I}from"./FusionAutocomplete-Cy4NuD5z.js";import{M as ke}from"./mail-BiPqprj8.js";import{P as xe}from"./pencil-nSEnWSRm.js";import{C as Te}from"./copy-Duk3I6XN.js";import{U as Fe}from"./upload-C1Wi6t5-.js";import{A as Ce}from"./archive-B-OnDCl_.js";import"./preload-helper-Ct5FWWRu.js";import"./FusionActionButton-D4JlY0zq.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./DropdownMenu-Bg1wQL3v.js";import"./check-BvnC0Elc.js";import"./createLucideIcon-CURt8gZv.js";import"./FuColorPopover-mwIrK7E5.js";import"./plus-LMukCZn9.js";import"./ellipsis-CeooarVg.js";import"./FusionPickerPopover-DtGvTBws.js";import"./FuPopover-CNNK0jy6.js";import"./star-0D891e5k.js";import"./x-GJVIuc3e.js";import"./dayjs.min-C8Kx736W.js";import"./_commonjsHelpers-CqkleIqs.js";import"./FusionTextInput-Cj_2MCld.js";import"./chevron-down-CUXnPYIZ.js";import"./chevron-left-DXfoJJ8S.js";import"./chevron-right-DxdVyPGM.js";function le(e,o,t={}){const n=t.idField??"id",s=t.childrenField??"children",{groupField:l}=t,i=c=>c.map(b=>{const y={...b};return Array.isArray(b[s])&&(y[s]=i(b[s])),y}),d=i(e),h=(c,b)=>{for(let y=0;y<c.length;y++){if(c[y][n]===b)return{list:c,index:y};const p=c[y][s];if(Array.isArray(p)){const r=h(p,b);if(r)return r}}return null},u=h(d,o.id);if(!u||o.id===o.targetId)return e;const a=u.list[u.index];if(o.targetId!==null&&Array.isArray(a[s])&&h(a[s],o.targetId))return e;if(u.list.splice(u.index,1),o.targetId===null){if(!l||o.toGroupId==null)return e;a[l]=o.toGroupId;const c=d.findIndex(b=>b[l]===o.toGroupId);return c===-1?d.push(a):d.splice(c,0,a),d}const g=h(d,o.targetId);if(!g)return e;if(o.position==="inside"){const c=g.list[g.index];Array.isArray(c[s])||(c[s]=[]),c[s].push(a),l&&delete a[l]}else{const c=o.position==="before"?g.index:g.index+1;if(g.list.splice(c,0,a),l)if(g.list===d){const b=d[c===g.index?c+1:g.index];a[l]=b[l]}else delete a[l]}return d}function Se(e,o,t){const n=t.idField??"id",{parentField:s,groupField:l}=t,i=new Map(e.map(p=>[p[n],p])),d=i.get(o.id);if(!d||o.id===o.targetId)return e;if(o.targetId!==null){let p=i.get(o.targetId);for(;p;){if(p[n]===o.id)return e;const r=p[s];p=r==null?void 0:i.get(r)}}const h=p=>{let r=p;for(;r&&r[s]!=null;)r=i.get(r[s]);return r?r[l]??null:null},u=e.filter(p=>p!==d);let a=null,g=null,c=u.length;if(o.targetId===null){if(o.toGroupId==null)return e;g=o.toGroupId;const p=u.findIndex(r=>r[s]==null&&r[l]===g);c=p===-1?u.length:p}else{const p=u.findIndex(f=>f[n]===o.targetId);if(p===-1)return e;const r=u[p];if(o.position==="inside"){a=r[n];let f=p;u.forEach((S,$)=>{S[s]===a&&(f=$)}),c=f+1}else a=r[s]??null,c=o.position==="before"?p:p+1,a===null&&(g=h(r))}const b={...d,[s]:a};b[l]=a===null?g:null;const y=u.slice();return y.splice(c,0,b),y}const go={title:"Fusion/Data Display/FusionTreeTable",component:k,tags:["autodocs"],parameters:{layout:"padded",docs:{description:{component:'\nA collapsible tree table built on [Tabulator](https://www.tabulator.info/) and styled to match **FusionListView**.\n\n- Rows nest through a children field (`children` by default). The arrow sits in the tree column.\n- Columns can be reordered by dragging the header and resized from the edge. Listen to `columns-reordered` and `column-resized` to store the layout.\n- Selection is controlled with `v-model:selectedIds`. Selecting a parent selects its children when `propagateSelection` is on.\n- Render any cell with a `cell-<key>` slot. The slot receives `{ row, value, level }`.\n- Drag a row by its grip to reorder it or drop it onto another task to nest it. The table emits `row-move`; update your rows with the `moveTreeRow` helper.\n- Footer: put anything under the last row with the `footer` slot, for example an "Add folder" button at the bottom left.\n- Group bars (task lists): set `groupField` and `groups`. Add `groupAdd` for a + button and `groupActions` for a ... menu. Listen to `add-task` and `group-action`. Hide an action in one folder with `hiddenActions` on that group. Use the `group` slot to draw the whole bar yourself, or the `group-extra` slot to add content (for example hours) between the count and the controls while keeping the built-in bar. Both get `{ group, count, open }`. Clicks inside `group-extra` don\'t open or close the group.\n- Group header look: `groupStyle` is `plain` (default), `plain-color`, `band` or `band-color`. The band is a light grey strip across the full width with a line above and below; the `-color` styles add a square in the group\'s `color`. Changing it restyles the headers without rebuilding the table.\n- Task colour: `rowColor(row)` returns a colour for a small square before each task\'s name, for example its status colour. No colour, no square. `showRowColor` (default on) turns the squares off and on without rebuilding the table.\n- New tasks: `groupAddRow` ends each group with an "Enter task title" row, like Productive. Enter emits `create-task` with `{ groupId, title }` and the field stays ready for the next one; add the task to your rows. The row isn\'t data: it can\'t be selected, dragged, sorted or counted.\n- Complete tasks: `rowCompleted(row)` returns true for a finished task; its name is struck through and greyed. Cell slots get `completed` too.\n- Group colours: `groupColorEditable` makes the square clickable (an empty square when a group has no colour). It opens the colour picker with `groupColors` as the palette and emits `group-color-change` with `{ groupId, color }` once, when the picker closes. Save it and pass the new colour back in `groups`.\n- Exposed methods: `expandAll()`, `collapseAll()`, `clearSelection()`, `redraw()`, `getTable()`.\n\n```vue\n<FusionTreeTable\n  v-model:selectedIds="selected"\n  :columns="columns"\n  :rows="tasks"\n  @columns-reordered="saveOrder"\n>\n  <template #cell-status="{ value }">\n    <FusionBadge :text="value" size="sm" variant="subtle" />\n  </template>\n</FusionTreeTable>\n```\n'}}},argTypes:{idField:{control:"text"},childrenField:{control:"text"},selectable:{control:"boolean"},propagateSelection:{control:"boolean"},startExpanded:{control:"boolean"},movableColumns:{control:"boolean"},resizableColumns:{control:"boolean"},sortable:{control:"boolean"},loading:{control:"boolean"},indent:{control:{type:"number",min:8,max:48}},emptyText:{control:"text"},groupStyle:{control:"radio",options:["plain","plain-color","band","band-color"],description:"Look of the group headers. The -color styles show a square in each group's `color`."},groupColorEditable:{control:"boolean",description:"Click a group's colour square to pick a new colour. Emits `group-color-change` with { groupId, color } when the picker closes."},groupColors:{control:"object",description:"Colours offered in the group colour picker."},showRowColor:{control:"boolean",description:"Turns the row colour squares (from `rowColor`) on and off. Default on."},groupAddRow:{control:"boolean",description:"A last row in each group for typing a new task's title. Enter emits `create-task` with { groupId, title }."},groupAddRowPlaceholder:{control:"text"},rowCompleted:{control:!1,description:"`(row) => boolean`: a complete task's name is struck through and greyed. Map your own closed statuses."},rowColor:{control:!1,description:"`(row) => colour`: a small square in that colour before each task's name, for example its status colour."}}},x=[{key:"name",label:"Task",minWidth:300},{key:"status",label:"Status",width:190},{key:"dependency",label:"Dependency",width:230},{key:"assignee",label:"Assignee",width:190},{key:"due",label:"Due date",width:110},{key:"hours",label:"Worked / estimate",width:170,textAlign:"right"},{key:"progress",label:"Progress",width:140}],C=[{group_id:"rebrand",id:1,num:201,name:"Rebrand: Northwind Coffee",status:"Working on it",dependency:"",assignee:"Amara Okafor",due:"2026-12-12",logged:41.5,est:78,progress:53,children:[{id:11,num:202,name:"Discovery workshop",status:"Done",dependency:"blocking",dependsOn:"Brand strategy deck",assignee:"Amara Okafor",due:"2026-11-14",logged:6,est:6,progress:100},{id:12,num:203,name:"Brand strategy deck",status:"Internal QC",dependency:"blocking",dependsOn:"Logo concepts",assignee:"Amara Okafor",due:"2026-11-18",logged:9.5,est:10,progress:90,children:[{id:121,num:204,name:"Competitor audit",status:"Done",dependency:"",assignee:"Jonas Lind",due:"2026-11-15",logged:3,est:3,progress:100},{id:122,num:205,name:"Positioning statement",status:"Internal QC",dependency:"linked",dependsOn:"Tone of voice",assignee:"Amara Okafor",due:"2026-11-18",logged:2.5,est:3,progress:85}]},{id:13,num:206,name:"Logo concepts",status:"Working on it",dependency:"waiting",dependsOn:"Brand strategy deck",assignee:"Jonas Lind",due:"2026-11-22",logged:11,est:16,progress:60,children:[{id:131,num:207,name:"Sketch round",status:"Done",dependency:"",assignee:"Jonas Lind",due:"2026-11-19",logged:4,est:4,progress:100},{id:132,num:208,name:"Digital concepts (3 routes)",status:"Working on it",dependency:"",assignee:"Jonas Lind",due:"2026-11-22",logged:7,est:12,progress:45}]},{id:14,num:209,name:"Colour palette and type",status:"Backlog",dependency:"waiting",dependsOn:"Logo concepts",assignee:"Jonas Lind",due:"2026-11-27",logged:0,est:8,progress:0},{id:15,num:210,name:"Brand guidelines PDF",status:"Backlog",dependency:"waiting",dependsOn:"Colour palette and type",assignee:"Amara Okafor",due:"2026-12-05",logged:0,est:14,progress:0}]},{group_id:"website",id:2,num:211,name:"Website: Northwind Coffee",status:"Client feedback",dependency:"",assignee:"Lee Park",due:"2026-12-19",logged:58,est:96,progress:55,children:[{id:21,num:212,name:"Sitemap and wireframes",status:"Done",dependency:"blocking",dependsOn:"Homepage design",assignee:"Priya Nair",due:"2026-11-13",logged:12,est:12,progress:100},{id:22,num:213,name:"Homepage design",status:"Sent to client",dependency:"blocking",dependsOn:"Build and QA",assignee:"Lee Park",due:"2026-11-20",logged:16,est:16,progress:100},{id:23,num:214,name:"Shop and product pages",status:"Working on it",dependency:"linked",dependsOn:"Homepage design",assignee:"Lee Park",due:"2026-11-28",logged:21,est:34,progress:60},{id:24,num:215,name:"Build and QA",status:"Backlog",dependency:"waiting",dependsOn:"Homepage design",assignee:"Priya Nair",due:"2026-12-17",logged:9,est:34,progress:25}]},{group_id:"admin",id:3,num:216,name:"Admin: Meetings",status:"Working on it",dependency:"linked",dependsOn:"Launch checklist",assignee:"Amara Okafor",due:"2026-12-19",logged:7.5,est:12,progress:60},{group_id:"admin",id:4,num:217,name:"Launch checklist",status:"Backlog",dependency:"waiting",dependsOn:"Build and QA",assignee:"Priya Nair",due:"2026-12-19",logged:0,est:6,progress:0}],j=C.flatMap(e=>e.children?e.children.map(o=>({...o,group_id:e.group_id})):[e]);function be(e,o=null,t=[]){return e.forEach(n=>{const{children:s,group_id:l,...i}=n;t.push(o===null?{...i,parent_id:null,group_id:l}:{...i,parent_id:o,group_id:null}),s&&be(s,n.id,t)}),t}const Ae=be(j),ie=[{id:"rebrand",label:"Rebrand: Northwind Coffee",color:"#2f6bff"},{id:"website",label:"Website: Northwind Coffee",color:"#16a34a"},{id:"admin",label:"Admin and launch",color:"#f59e0b"},{id:"later",label:"Later (empty list)"}],O={Backlog:"fu-badge--draft","Working on it":"fu-badge--warning-subtle","Internal QC":"fu-badge--warning","Sent to client":"fu-badge--published","Client feedback":"fu-badge--danger",Done:"fu-badge--success"},Re=e=>()=>w("span",{style:{display:"inline-block",width:"10px",height:"10px",borderRadius:"999px",background:e,flex:"none"}}),F=[{label:"Backlog",value:"Backlog",color:"#9ca3af"},{label:"Working on it",value:"Working on it",color:"#f59e0b"},{label:"Internal QC",value:"Internal QC",color:"#8b5cf6"},{label:"Sent to client",value:"Sent to client",color:"#3b82f6"},{label:"Client feedback",value:"Client feedback",color:"#ef4444"},{label:"Done",value:"Done",color:"#16a34a"}].map(e=>({...e,type:"icon",icon:Re(e.color)}));function H(e,o,t,n){return e.map(s=>({...s,...s.id===o?{[t]:n}:{},...s.children?{children:H(s.children,o,t,n)}:{}}))}const _=["Amara Okafor","Jonas Lind","Lee Park","Priya Nair"].map(e=>({label:e,value:e,type:"image",imageUrl:""})),z={waiting:"fu-badge--warning",blocking:"fu-badge--danger",linked:"fu-badge--draft"},L={waiting:"Waiting on",blocking:"Blocking",linked:"Linked"},P=`

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
`;function U(e=""){return o=>({components:{FusionTreeTable:k,FusionBadge:A,FuAvatar:R,FusionAutocomplete:I,FusionDatePicker:B,FusionButton:T},setup(){const t=m([]),n=m(o.rows??[]);return{args:o,selected:t,data:n,onMove:i=>{n.value=le(n.value,i,{groupField:"group_id"})},setField:(i,d,h)=>{n.value=H(n.value,i,d,h)},people:_,statusOptions:F,statusTheme:O,dependencyTheme:z,dependencyLabel:L}},template:`<div>${e}<FusionTreeTable v-bind="args" :rows="data" v-model:selectedIds="selected" @row-move="onMove">${P}</FusionTreeTable></div>`})}const K={args:{columns:x,rows:C,selectable:!0,startExpanded:!0},render:U()},Be=[{key:"email",label:"Email to this list",icon:ke},{key:"rename",label:"Rename task list",icon:xe,dividerBefore:!0},{key:"duplicate",label:"Duplicate task list",icon:Te},{key:"import",label:"Import tasks from CSV",icon:Fe},{key:"archive",label:"Archive task list",icon:Ce,dividerBefore:!0}];function fe(e){return o=>({components:{FusionTreeTable:k,FusionBadge:A,FuAvatar:R,FusionAutocomplete:I,FusionDatePicker:B,FusionButton:T},setup(){const t=m([]),n=m(o.rows??[]),s=m("Drag a task onto another folder, or open a folder's ... menu");return{args:o,selected:t,data:n,last:s,onMove:d=>{n.value=e?Se(n.value,d,{parentField:"parent_id",groupField:"group_id"}):le(n.value,d,{groupField:"group_id"});const h=e?n.value.find(u=>u.id===d.id):null;s.value=e?`moved #${d.id}: parent_id = ${h?.parent_id}, group_id = ${h?.group_id}`:`moved #${d.id} to ${d.toGroupId}`},setField:(d,h,u)=>{n.value=e?n.value.map(a=>a.id===d?{...a,[h]:u}:a):H(n.value,d,h,u)},people:_,statusOptions:F,statusTheme:O,dependencyTheme:z,dependencyLabel:L,onAction:d=>s.value=`group-action: ${d.action} on "${d.groupId}"`,onAdd:d=>s.value=`add-task on "${d.groupId}"`}},template:`<div><p style="margin:0 0 12px;font-size:14px">{{ last }}</p><FusionTreeTable v-bind="args" :rows="data" v-model:selectedIds="selected" @row-move="onMove" @group-action="onAction" @add-task="onAdd">${P}<template #footer><FusionButton text="Add folder" variant="ghost" size="sm" @click="last = 'footer: add folder'" /></template></FusionTreeTable></div>`})}const de={columns:x,groupField:"group_id",groups:ie.map(e=>e.id==="admin"?{...e,hiddenActions:["archive"]}:e),groupActions:Be,groupAdd:!0,selectable:!0,startExpanded:!0},J={name:"Task lists (folders under one header)",args:{...de,rows:j},render:fe(!1)};function Ie(e,o){let t=0,n=0;const s=l=>l.forEach(i=>{t+=i.logged??0,n+=i.est??0,i.children&&s(i.children)});return s(e.filter(l=>l.group_id===o)),{logged:t,est:n,pct:n?Math.min(100,Math.round(t/n*100)):0}}const X={name:"Group header styles and extra content",parameters:{docs:{description:{story:"Pick a `groupStyle` to restyle the headers live (the table isn't rebuilt). Each header also uses the `group-extra` slot to show the list's hours with a small bar, between the count and the add and actions buttons.\n\nWith `groupColorEditable`, click a list's colour square to pick a new colour from `groupColors` (or a custom one). The table emits `group-color-change` once, when the picker closes; the story saves it into `groups`, and the square and the hours bar take the new colour.\n\nThe small square before each task's name is the task's **status** colour, from `rowColor`: `(row) => statusColors[row.status]`. Change a task's status and its square follows. Turn the squares off and on with `showRowColor`.\n\nComplete tasks are struck through and greyed with `rowCompleted`: here `(row) => row.status === \"Done\"`. In the app, map your workflow's closed statuses. Cell slots also get `completed` in their props.\n\nEach list ends with an **Enter task title** row (`groupAddRow`), the empty list too, like Productive. Type a title and press Enter: the table emits `create-task` with `{ groupId, title }`, the task appears at the end of the list, and the field stays ready for the next one. Escape clears it. The row can't be selected, dragged, sorted or counted. The last list has no colour yet, so it shows an empty square to set one."}}},args:{...de,rows:j,groups:ie,groupStyle:"band-color",groupColorEditable:!0,groupAddRow:!0,rowColor:e=>F.find(o=>o.value===e.status)?.color,groupColors:["#2f6bff","#16a34a","#f59e0b","#e43838","#8b5cf6","#0ea5e9","#ec4899","#64748b"]},render:e=>({components:{FusionTreeTable:k,FusionBadge:A,FuAvatar:R,FusionAutocomplete:I,FusionDatePicker:B,FusionButton:T},setup(){const o=m([]),t=m(e.rows??[]),n=m(e.groupStyle??"band-color"),s=m(e.showRowColor??!0),l=m(!0),i=r=>r.status==="Done",d=m(e.groups??[]),h=m("Click a colour square to change a list's colour"),u=(r,f)=>r.reduce((S,$)=>Math.max(S,$[f]??0,$.children?u($.children,f):0),0);return{args:e,selected:o,data:t,style:n,styles:["plain","plain-color","band","band-color"],showStatus:s,strike:l,isDone:i,onCreate:r=>{const f=u(t.value,"id")+1,S=u(t.value,"num")+1;t.value=[...t.value,{group_id:r.groupId,id:f,num:S,name:r.title,status:"Backlog",dependency:"",assignee:"",due:"",logged:0,est:0,progress:0}],h.value=`create-task: "${r.title}" in "${r.groupId}"`},groups:d,last:h,onColor:r=>{d.value=d.value.map(f=>f.id===r.groupId?{...f,color:r.color}:f),h.value=`group-color-change: "${r.groupId}" is now ${r.color}`},onMove:r=>{t.value=le(t.value,r,{groupField:"group_id"})},setField:(r,f,S)=>{t.value=H(t.value,r,f,S)},hours:r=>Ie(t.value,r),people:_,statusOptions:F,statusTheme:O,dependencyTheme:z,dependencyLabel:L}},template:`<div>
  <p style="margin:0 0 12px;font-size:14px">{{ last }}</p>
  <div role="radiogroup" aria-label="Group style" style="display:flex;gap:8px;margin:0 0 12px">
    <FusionButton v-for="s in styles" :key="s" :text="s" size="sm" :variant="style === s ? 'solid' : 'outline'" :aria-checked="style === s" role="radio" @click="style = s" />
    <FusionButton :text="showStatus ? 'Status colours on' : 'Status colours off'" size="sm" :variant="showStatus ? 'solid' : 'outline'" :aria-pressed="showStatus" @click="showStatus = !showStatus" />
    <FusionButton :text="strike ? 'Strike completed on' : 'Strike completed off'" size="sm" :variant="strike ? 'solid' : 'outline'" :aria-pressed="strike" @click="strike = !strike" />
  </div>
  <FusionTreeTable v-bind="args" :groups="groups" :groupStyle="style" :showRowColor="showStatus" :rowCompleted="strike ? isDone : undefined" :rows="data" v-model:selectedIds="selected" @row-move="onMove" @group-color-change="onColor" @create-task="onCreate">
    ${P}
    <template #group-extra="{ group }">
      <span v-if="hours(group.id).est" style="display:inline-flex;align-items:center;gap:8px;color:var(--fu-color-text-secondary)">
        <span>{{ hours(group.id).logged }} h logged of {{ hours(group.id).est }} h</span>
        <span style="width:64px;height:6px;border-radius:999px;background:var(--fu-line);overflow:hidden">
          <span :style="{ display: 'block', height: '100%', width: hours(group.id).pct + '%', background: group.color || 'var(--fu-color-accent)' }" />
        </span>
        <span>{{ hours(group.id).pct }}%</span>
      </span>
    </template>
  </FusionTreeTable>
</div>`})},Y={name:"Task lists from flat rows (id + parent_id)",args:{...de,rows:Ae,parentField:"parent_id"},render:fe(!0)},Z={name:"Sticky header (page scrolls)",args:{columns:x,rows:j,groupField:"group_id",groups:ie,stickyHeader:!0,selectable:!0,startExpanded:!0},render:e=>({components:{FusionTreeTable:k,FusionBadge:A,FuAvatar:R,FusionAutocomplete:I,FusionDatePicker:B,FusionButton:T},setup(){const o=m([]);return{args:e,selected:o,people:_,statusOptions:F,statusTheme:O,dependencyTheme:z,dependencyLabel:L,setField:()=>{}}},template:`<div id="sticky-demo" class="customScrollBar" style="height:420px;overflow:auto;border:1px solid var(--fu-line,#e5e7eb);border-radius:12px;padding:0 8px"><FusionTreeTable v-bind="args" v-model:selectedIds="selected">${P}</FusionTreeTable></div>`})},ee={name:"Plain text (no slots)",args:{columns:x,rows:C}},oe={render:U(),args:{columns:x,rows:C,startExpanded:!1}},te={render:U(),args:{columns:x,rows:C,selectable:!1}},ne={render:U(),args:{columns:x,rows:C,height:220}},se={args:{columns:x,rows:[],emptyText:"No tasks yet"}},ae={render:U(),args:{columns:x,rows:C,loading:!0}},re={name:"Column order stored by the parent",render:e=>({components:{FusionTreeTable:k,FusionBadge:A,FuAvatar:R,FusionAutocomplete:I,FusionDatePicker:B,FusionButton:T},setup(){const o=m([...x]),t=m(x.map(l=>l.key).join(" > "));function n(l){o.value=l.map(i=>x.find(d=>d.key===i)).filter(Boolean),t.value=l.join(" > ")}return{args:e,cols:o,rows:C,order:t,onReorder:n,setField:()=>{},people:_,statusOptions:F,statusTheme:O,dependencyTheme:z,dependencyLabel:L}},template:`
<div>
  <p style="margin:0 0 12px;font-size:14px">Order: {{ order }}</p>
  <FusionTreeTable :columns="cols" :rows="rows" @columns-reordered="onReorder">${P}</FusionTreeTable>
</div>`})},M={name:"Groups change",parameters:{docs:{description:{story:"Click the buttons to change `groups`, then check that no row goes blank, every list keeps its *Add a task…* field, a list you closed stays closed, and the console stays clear. Toggle `groupAddRow` and try again. Adding tasks still works as before."}}},render:()=>({components:{FusionTreeTable:k,FusionButton:T},setup(){const e=m(!0),o=[{key:"name",label:"Task"},{key:"status",label:"Status",width:160}],t=m([{id:"g1",label:"General",color:"#3a8be0"},{id:"g2",label:"Cleaning",color:"#2f7d3b"}]),n=m([{id:1,group_id:"g1",parent_id:null,name:"Write brief",status:"Open"},{id:2,group_id:null,parent_id:1,name:"Sub of brief",status:"Open"},{id:3,group_id:"g1",parent_id:null,name:"Plan sprint",status:"Open"},{id:4,group_id:"g2",parent_id:null,name:"Mop floors",status:"Open"}]),s=m("Change the groups with the buttons");let l=10;const i=["#c2417a","#d97706","#7c3aed","#0891b2"];return{addRow:e,columns:o,groups:t,rows:n,last:s,addTask:()=>{n.value=[...n.value,{id:++l,group_id:"g2",parent_id:null,name:"Task "+l,status:"Open"}],s.value="Added a task to Cleaning"},addGroup:()=>{t.value=[...t.value,{id:"g"+ ++l,label:"List "+l,color:i[l%i.length]}],s.value="Added a group"},rename:()=>{t.value=t.value.map((p,r)=>r===0?{...p,label:p.label+"!"}:p),s.value="Renamed the first group"},recolor:()=>{t.value=t.value.map((p,r)=>r===0?{...p,color:i[++l%i.length]}:p),s.value="Recoloured the first group"},move:()=>{if(t.value.length<2)return;const[p,...r]=t.value;t.value=[...r,p],s.value="Moved the first group to the end"},remove:()=>{if(t.value.length<2)return;const p=t.value[t.value.length-1];t.value=t.value.slice(0,-1),n.value=n.value.filter(r=>r.group_id!==p.id),s.value=`Removed "${p.label}"`},onCreate:({groupId:p,title:r})=>{n.value=[...n.value,{id:"n"+ ++l,group_id:p,parent_id:null,name:r,status:"Open"}],s.value=`create-task: "${r}" in ${p}`},onColor:({groupId:p,color:r})=>{t.value=t.value.map(f=>f.id===p?{...f,color:r}:f),s.value=`group-color-change: ${p} is now ${r}`}}},template:`
          <div>
            <p style="margin: 0 0 12px; font-size: 14px">{{ last }}</p>
            <div style="display: flex; flex-wrap: wrap; gap: 8px; margin: 0 0 12px">
              <FusionButton text="Add task" size="sm" variant="outline" @click="addTask" />
              <FusionButton text="Add group" size="sm" variant="outline" @click="addGroup" />
              <FusionButton text="Rename group" size="sm" variant="outline" @click="rename" />
              <FusionButton text="Recolour group" size="sm" variant="outline" @click="recolor" />
              <FusionButton text="Move group" size="sm" variant="outline" @click="move" />
              <FusionButton text="Remove group" size="sm" variant="outline" @click="remove" />
              <FusionButton :text="addRow ? 'Add row on' : 'Add row off'" size="sm" :variant="addRow ? 'solid' : 'outline'" :aria-pressed="addRow" @click="addRow = !addRow" />
            </div>
            <FusionTreeTable
              :columns="columns"
              :rows="rows"
              groupField="group_id"
              :groups="groups"
              parentField="parent_id"
              :groupAddRow="addRow"
              groupAddRowPlaceholder="Add a task…"
              groupStyle="plain-color"
              :groupColorEditable="true"
              @create-task="onCreate"
              @group-color-change="onColor"
            >
              <template #cell-name="{ row }"><span class="slot-name">{{ row.name }}</span></template>
              <template #cell-status="{ row }"><span class="slot-status">{{ row.status }}</span></template>
            </FusionTreeTable>
          </div>
        `})},G={name:"Inside a scrolling tab",parameters:{docs:{description:{story:"The table sits in a `FusionTab` with a fixed height, so the tab body scrolls, and it scrolls smoothly. Scroll down to the last list and type five tasks into its *Enter task title* row: the tab stays where it is and the title row stays in view. Before, each new task could make the tab fly back to the top."}}},render:()=>({components:{FusionTreeTable:k,FusionTab:he,FusionBadge:A,FuAvatar:R,FusionAutocomplete:I,FusionDatePicker:B,FusionButton:T},setup(){const e=m([]),o=m(j),t=[{key:"tasks",title:"Tasks"},{key:"notes",title:"Notes"}],n=(h,u)=>h.reduce((a,g)=>Math.max(a,g[u]??0,g.children?n(g.children,u):0),0),s=h=>{const u=n(o.value,"id")+1,a=n(o.value,"num")+1;o.value=[...o.value,{group_id:h.groupId,id:u,num:a,name:h.title,status:"Backlog",dependency:"",assignee:"",due:"",logged:0,est:0,progress:0}]},l=h=>{o.value=le(o.value,h,{groupField:"group_id"})},i=(h,u,a)=>{o.value=H(o.value,h,u,a)};return{args:{...de,groups:ie,groupAddRow:!0,groupStyle:"plain-color"},tabs:t,selected:e,data:o,onCreate:s,onMove:l,setField:i,people:_,statusOptions:F,statusTheme:O,dependencyTheme:z,dependencyLabel:L}},template:`<div style="height: 460px">
  <FusionTab :tabs="tabs" defaultActiveDesktop="tasks">
    <template #tasks>
      <FusionTreeTable v-bind="args" :rows="data" v-model:selectedIds="selected" @row-move="onMove" @create-task="onCreate">${P}</FusionTreeTable>
    </template>
    <template #notes><p style="padding: 16px">Notes</p></template>
  </FusionTab>
</div>`})},we="/src/stories/assets/avatars/70a23294beb91b4ad5a439e2c6ea5a6d.png",Oe="/src/stories/assets/avatars/cae99bb14b21ec41ecf03b58f59ff292.png",pe=["Backlog","Working on it","Internal QC","Sent to client","Done"],Q=e=>F.find(o=>o.value===e)?.color,ge=["Logo system","Moodboard","Copy deck","Homepage","Kick-off","QA pass","Brand guide","Photo shoot","Launch email","Sitemap"];function v(e,o,t,n){return Array.from({length:n},(s,l)=>{const i=t+l+1;return{id:`${e}-${i}`,group_id:e,key:`${o}-${i}`,name:`${ge[i%ge.length]} ${i}`,status:pe[i%pe.length],due:`2026-12-${String(i%27+1).padStart(2,"0")}`}})}const V=[{key:"name",label:"Task"},{key:"status",label:"Status",width:170},{key:"due",label:"Due date",width:130}],ue=`
  <template #cell-name="{ row }">
    <span style="display:inline-flex;gap:8px;align-items:baseline;min-width:0">
      <span style="color:var(--fu-color-text-secondary);font-size:12px">{{ row.key }}</span>
      <span>{{ row.name }}</span>
    </span>
  </template>
  <template #cell-status="{ row }">
    <span style="display:inline-flex;align-items:center;gap:6px">
      <span :style="{ width: '8px', height: '8px', borderRadius: '999px', background: statusColorOf(row.status) }" />
      {{ row.status }}
    </span>
  </template>
`,D={name:"Lazy groups",parameters:{docs:{description:{story:"Five groups the way Projects › Tasks loads them. **Brand refresh** has 1,000 tasks: 25 are loaded and **Show 25 more** loads the next 25 after 500 ms (placeholder rows show meanwhile, and the focus stays on the row, so Enter keeps loading). **Client onboarding** has all 7. **Website** is loading when the story opens. **Archive** starts closed (`open: false`) and loads only when opened (`group-toggle`). **Due diligence** stays loading. Headers show `total`, not the rows loaded. Tick some rows, then load more: the selection stays."}}},render:()=>({components:{FusionTreeTable:k},setup(){const e=m([{id:"br",label:"Brand refresh",color:"#8a3fd1",total:1e3,meta:"BR · Acme Ltd",avatar:{src:we,name:"Brand refresh",bg:"#8a3fd1"},more:{shown:25,total:1e3}},{id:"co",label:"Client onboarding portal",color:"#0f766e",total:7,avatar:{name:"Client onboarding portal",bg:"#0f766e"},more:null},{id:"web",label:"Website",color:"#2f6bff",total:40,loading:!0,more:null},{id:"arc",label:"Archive",color:"#64748b",total:12,open:!1,more:null},{id:"dd",label:"Due diligence",color:"#d97706",total:64,loading:!0,more:null}]),o=m([...v("br","BR",0,25),...v("co","CO",0,7)]),t=m([]),n=m([]),s=a=>n.value=[a,...n.value].slice(0,4),l=(a,g)=>e.value=e.value.map(c=>c.id===a?{...c,...g}:c),i=new Set(["br","co"]);function d(a,g=700){const c=e.value.find(b=>b.id===a);!c||i.has(a)||(i.add(a),l(a,{loading:!0}),setTimeout(()=>{const b=Math.min(25,c.total);o.value=[...o.value,...v(a,a.toUpperCase(),0,b)],l(a,{loading:!1,more:b<c.total?{shown:b,total:c.total}:null}),s(`loaded ${b} of ${c.total} in ${c.label}`)},g))}d("web",1200);function h({groupId:a}){const g=e.value.find(c=>c.id===a);!g?.more||g.loadingMore||(l(a,{loadingMore:!0}),s(`group-load-more: ${g.label}`),setTimeout(()=>{const c=Math.min(25,g.more.total-g.more.shown);o.value=[...o.value,...v(a,a.toUpperCase(),g.more.shown,c)];const b=g.more.shown+c;l(a,{loadingMore:!1,more:b<g.more.total?{shown:b,total:g.more.total}:null})},500))}function u({groupId:a,open:g}){s(`group-toggle: ${a} ${g?"opened":"closed"}`),g&&a!=="dd"&&d(a)}return{groups:e,rows:o,selected:t,log:n,onLoadMore:h,onToggle:u,columns:V,statusColorOf:Q}},template:`<div>
  <p style="margin:0 0 4px;font-size:13px">Selected: <strong data-testid="selected-count">{{ selected.length }}</strong></p>
  <ul style="margin:0 0 12px;padding:0;list-style:none;font-size:12px;color:var(--fu-color-text-secondary)"><li v-for="(l, i) in log" :key="i">{{ l }}</li></ul>
  <FusionTreeTable
    :columns="columns" :rows="rows" groupField="group_id" :groups="groups"
    groupStyle="plain-color" groupAvatarShape="square" :draggableRows="false"
    :rowColor="(row) => statusColorOf(row.status)" :rowCompleted="(row) => row.status === 'Done'"
    v-model:selectedIds="selected" :skeletonRows="3"
    @group-load-more="onLoadMore" @group-toggle="onToggle"
  >${ue}</FusionTreeTable>
</div>`})},E={name:"Remote sort",parameters:{docs:{description:{story:'`sortMode="remote"`: a header click shows the arrow and emits `sort-change` once; the story fetches the rows sorted by the "server" (300 ms) and replaces `rows`, which the table keeps in the order given. Replacing rows never emits `sort-change`. **Rebuild table** remounts it with the `sort` prop, and the arrow is still there.'}}},render:()=>({components:{FusionTreeTable:k,FusionButton:T},setup(){const e=v("all","TS",0,40),o=m(null),t=m(e.slice(0,20)),n=m(0),s=m("none yet"),l=m(0),i=m(!1);function d(u){i.value=!0,setTimeout(()=>{const a=[...e];u&&a.sort((g,c)=>String(g[u.key]).localeCompare(String(c[u.key]),void 0,{numeric:!0})*(u.dir==="asc"?1:-1)),t.value=a.slice(0,20),i.value=!1},300)}function h(u){n.value++,s.value=u?`${u.key} ${u.dir}`:"none",o.value=u,d(u)}return{rows:t,sort:o,events:n,lastEvent:s,tableKey:l,busy:i,onSort:h,columns:V,statusColorOf:Q}},template:`<div>
  <p style="margin:0 0 8px;font-size:13px">sort-change events: <strong data-testid="sort-events">{{ events }}</strong> · last: <span data-testid="sort-last">{{ lastEvent }}</span> <span v-if="busy">· loading…</span></p>
  <div style="margin:0 0 12px"><FusionButton text="Rebuild table" size="sm" variant="outline" @click="tableKey++" /></div>
  <FusionTreeTable :key="tableKey" :columns="columns" :rows="rows" sortMode="remote" :sort="sort" :draggableRows="false" :selectable="false" @sort-change="onSort">${ue}</FusionTreeTable>
</div>`})},q={name:"Group avatars",parameters:{docs:{description:{story:"`group.avatar` (`{ src, name, bg }`) draws a FuAvatar before the title and takes the colour square's place. **Acme** has a logo, **Northwind** has none (initials on its colour), **Globex**'s image is broken (falls back to initials), and **Internal** has no avatar, so it keeps its colour square. Try each `groupStyle` and both `groupAvatarShape`s."}}},render:()=>({components:{FusionTreeTable:k,FusionButton:T},setup(){const e=m("plain-color"),o=m("square"),t=[{id:"acme",label:"Acme Ltd",color:"#8a3fd1",avatar:{src:we,name:"Acme Ltd",bg:"#8a3fd1"}},{id:"nw",label:"Northwind Coffee",color:"#0f766e",avatar:{name:"Northwind Coffee",bg:"#0f766e"}},{id:"gx",label:"Globex",color:"#d97706",avatar:{src:"/this-image-does-not-exist.png",name:"Globex",bg:"#d97706"}},{id:"int",label:"Internal",color:"#2f6bff"}],n=[...v("acme","AC",0,2),...v("nw","NW",0,2),...v("gx","GX",0,2),...v("int","IN",0,2)];return{style:e,shape:o,groups:t,rows:n,columns:V,statusColorOf:Q,styles:["plain","plain-color","band","band-color"]}},template:`<div>
  <div style="display:flex;flex-wrap:wrap;gap:8px;margin:0 0 12px">
    <FusionButton v-for="s in styles" :key="s" :text="s" size="sm" :variant="style === s ? 'solid' : 'outline'" @click="style = s" />
    <FusionButton :text="'shape: ' + shape" size="sm" variant="outline" @click="shape = shape === 'square' ? 'circle' : 'square'" />
  </div>
  <FusionTreeTable :columns="columns" :rows="rows" groupField="group_id" :groups="groups" :groupStyle="style" :groupAvatarShape="shape" :draggableRows="false">${ue}</FusionTreeTable>
</div>`})},_e=me({props:{group:{type:Object,required:!0}},emits:["open"],setup(e,{emit:o}){return()=>w("div",{style:"padding:14px 16px;display:flex;flex-direction:column;gap:10px;font-size:13px"},[w("div",{style:"font-weight:600;font-size:15px"},e.group.label),w("div",{style:"display:grid;grid-template-columns:90px 1fr;gap:4px 8px"},[w("span",{style:"color:var(--fu-color-text-secondary)"},"Client"),w("span",e.group.client??"—"),w("span",{style:"color:var(--fu-color-text-secondary)"},"Lead"),w("span",e.group.lead??"—"),w("span",{style:"color:var(--fu-color-text-secondary)"},"Dates"),w("span",e.group.dates??"—"),w("span",{style:"color:var(--fu-color-text-secondary)"},"Open tasks"),w("span",String(e.group.total??0))]),w("div",{style:"height:6px;border-radius:999px;background:var(--fu-line);overflow:hidden"},[w("span",{style:`display:block;height:100%;width:${e.group.progress??0}%;background:${e.group.color}`})]),w("div",{style:"display:flex;justify-content:flex-end"},[w(T,{text:"Open project",size:"sm",variant:"solid",onClick:()=>o("open")})])])}}),N={name:"Group details",parameters:{docs:{description:{story:"With a `#group-details` slot, a group's title (and avatar) becomes a button that opens a card under it. The chevron and the rest of the header still open and close the group. Escape or a click outside closes the card and the focus goes back to the title. The table sits in a `FusionTab` with a scrolling body and a sticky header: scroll with the card open and it stays anchored."}}},render:()=>({components:{FusionTreeTable:k,FusionTab:he,ProjectCard:_e},setup(){const e=[{id:"br",label:"Brand refresh",color:"#8a3fd1",total:12,client:"Acme Ltd",lead:"Amara Okafor",dates:"3 Nov – 19 Dec",progress:62,avatar:{src:Oe,name:"Brand refresh",bg:"#8a3fd1"}},{id:"co",label:"Client onboarding portal",color:"#0f766e",total:8,client:"Northwind Coffee",lead:"Lee Park",dates:"10 Nov – 30 Jan",progress:25,avatar:{name:"Client onboarding portal",bg:"#0f766e"}},{id:"web",label:"Website",color:"#2f6bff",total:10,client:"Globex",lead:"Priya Nair",dates:"1 Dec – 28 Feb",progress:10}],o=[...v("br","BR",0,12),...v("co","CO",0,8),...v("web","WE",0,10)],t=m("Click a group's title");return{groups:e,rows:o,log:t,tabs:[{key:"tasks",title:"Tasks"},{key:"notes",title:"Notes"}],columns:V,statusColorOf:Q}},template:`<div>
  <p style="margin:0 0 8px;font-size:13px" data-testid="details-log">{{ log }}</p>
  <div style="height:460px">
    <FusionTab :tabs="tabs" defaultActiveDesktop="tasks">
      <template #tasks>
        <FusionTreeTable :columns="columns" :rows="rows" groupField="group_id" :groups="groups" groupStyle="plain-color" groupAvatarShape="square" :stickyHeader="true" :draggableRows="false"
          @group-details-open="({ groupId }) => (log = 'group-details-open: ' + groupId)"
          @group-details-close="({ groupId }) => (log = 'group-details-close: ' + groupId)">
          ${ue}
          <template #group-details="{ group, close }">
            <ProjectCard :group="group" @open="close(); log = 'Open project: ' + group.id" />
          </template>
        </FusionTreeTable>
      </template>
      <template #notes><p style="padding:16px">Notes</p></template>
    </FusionTab>
  </div>
</div>`})},ce=m(0),ze=me({props:{text:{type:String,default:""}},setup(e){return ve(()=>ce.value++),ye(()=>ce.value--),()=>w("span",e.text)}}),W={name:"Fixed height, 2,000 rows with cell slots",parameters:{docs:{description:{story:'`height="100%"` inside a 520px box, 2,000 rows, a Vue component in every Task and Status cell. Only the rows on screen (plus a small buffer) are drawn: scroll and the number of live slot components stays about the same instead of growing to 4,000.'}}},render:()=>({components:{FusionTreeTable:k,SlotProbe:ze},setup(){return{rows:[...v("a","AA",0,1e3),...v("b","BB",0,1e3)],groups:[{id:"a",label:"Project A",color:"#8a3fd1"},{id:"b",label:"Project B",color:"#0f766e"}],alive:ce,columns:V,statusColorOf:Q}},template:`<div>
  <p style="margin:0 0 8px;font-size:13px">Live slot components: <strong data-testid="alive">{{ alive }}</strong> (of {{ rows.length * 2 }} cells)</p>
  <div style="height:520px;display:flex;flex-direction:column">
    <FusionTreeTable :columns="columns" :rows="rows" groupField="group_id" :groups="groups" groupStyle="plain-color" height="100%" :draggableRows="false"
      :rowColor="(row) => statusColorOf(row.status)">
      <template #cell-name="{ row }"><SlotProbe :text="row.key + '  ' + row.name" /></template>
      <template #cell-status="{ row }"><SlotProbe :text="row.status" /></template>
    </FusionTreeTable>
  </div>
</div>`})};K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
  args: {
    columns,
    rows,
    selectable: true,
    startExpanded: true
  },
  render: rich()
}`,...K.parameters?.docs?.source}}};J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  name: "Task lists (folders under one header)",
  args: {
    ...listArgs,
    rows: taskListRows
  },
  render: listsRender(false)
}`,...J.parameters?.docs?.source}}};X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  name: "Group header styles and extra content",
  parameters: {
    docs: {
      description: {
        story: "Pick a \`groupStyle\` to restyle the headers live (the table isn't rebuilt). Each header also uses the \`group-extra\` slot to show the list's hours with a small bar, between the count and the add and actions buttons.\\n\\nWith \`groupColorEditable\`, click a list's colour square to pick a new colour from \`groupColors\` (or a custom one). The table emits \`group-color-change\` once, when the picker closes; the story saves it into \`groups\`, and the square and the hours bar take the new colour.\\n\\nThe small square before each task's name is the task's **status** colour, from \`rowColor\`: \`(row) => statusColors[row.status]\`. Change a task's status and its square follows. Turn the squares off and on with \`showRowColor\`.\\n\\nComplete tasks are struck through and greyed with \`rowCompleted\`: here \`(row) => row.status === \\"Done\\"\`. In the app, map your workflow's closed statuses. Cell slots also get \`completed\` in their props.\\n\\nEach list ends with an **Enter task title** row (\`groupAddRow\`), the empty list too, like Productive. Type a title and press Enter: the table emits \`create-task\` with \`{ groupId, title }\`, the task appears at the end of the list, and the field stays ready for the next one. Escape clears it. The row can't be selected, dragged, sorted or counted. The last list has no colour yet, so it shows an empty square to set one."
      }
    }
  },
  args: {
    ...listArgs,
    rows: taskListRows,
    groups: taskLists,
    groupStyle: "band-color",
    groupColorEditable: true,
    groupAddRow: true,
    rowColor: (row: any) => statusOptions.find(o => o.value === row.status)?.color,
    groupColors: ["#2f6bff", "#16a34a", "#f59e0b", "#e43838", "#8b5cf6", "#0ea5e9", "#ec4899", "#64748b"]
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
      const data = ref<any[]>(args.rows ?? []);
      const style = ref(args.groupStyle ?? "band-color");
      const showStatus = ref(args.showRowColor ?? true);
      const strike = ref(true);
      const isDone = (row: any) => row.status === "Done";
      const groups = ref<any[]>(args.groups ?? []);
      const last = ref("Click a colour square to change a list's colour");
      const maxOf = (list: any[], f: string): number => list.reduce((m, r) => Math.max(m, r[f] ?? 0, r.children ? maxOf(r.children, f) : 0), 0);
      const onCreate = (p: {
        groupId: string | number;
        title: string;
      }) => {
        const id = maxOf(data.value, "id") + 1;
        const num = maxOf(data.value, "num") + 1;
        data.value = [...data.value, {
          group_id: p.groupId,
          id,
          num,
          name: p.title,
          status: "Backlog",
          dependency: "",
          assignee: "",
          due: "",
          logged: 0,
          est: 0,
          progress: 0
        }];
        last.value = \`create-task: "\${p.title}" in "\${p.groupId}"\`;
      };
      const onColor = (p: {
        groupId: string | number;
        color: string;
      }) => {
        groups.value = groups.value.map(g => g.id === p.groupId ? {
          ...g,
          color: p.color
        } : g);
        last.value = \`group-color-change: "\${p.groupId}" is now \${p.color}\`;
      };
      const styles = ["plain", "plain-color", "band", "band-color"];
      const onMove = (m: TreeTableMove) => {
        data.value = moveTreeRow(data.value, m, {
          groupField: "group_id"
        });
      };
      const setField = (id: number | string, field: string, value: unknown) => {
        data.value = withField(data.value, id, field, value);
      };
      const hours = (id: string | number) => groupHours(data.value, id);
      return {
        args,
        selected,
        data,
        style,
        styles,
        showStatus,
        strike,
        isDone,
        onCreate,
        groups,
        last,
        onColor,
        onMove,
        setField,
        hours,
        people,
        statusOptions,
        statusTheme,
        dependencyTheme,
        dependencyLabel
      };
    },
    template: \`<div>
  <p style="margin:0 0 12px;font-size:14px">{{ last }}</p>
  <div role="radiogroup" aria-label="Group style" style="display:flex;gap:8px;margin:0 0 12px">
    <FusionButton v-for="s in styles" :key="s" :text="s" size="sm" :variant="style === s ? 'solid' : 'outline'" :aria-checked="style === s" role="radio" @click="style = s" />
    <FusionButton :text="showStatus ? 'Status colours on' : 'Status colours off'" size="sm" :variant="showStatus ? 'solid' : 'outline'" :aria-pressed="showStatus" @click="showStatus = !showStatus" />
    <FusionButton :text="strike ? 'Strike completed on' : 'Strike completed off'" size="sm" :variant="strike ? 'solid' : 'outline'" :aria-pressed="strike" @click="strike = !strike" />
  </div>
  <FusionTreeTable v-bind="args" :groups="groups" :groupStyle="style" :showRowColor="showStatus" :rowCompleted="strike ? isDone : undefined" :rows="data" v-model:selectedIds="selected" @row-move="onMove" @group-color-change="onColor" @create-task="onCreate">
    \${richSlots}
    <template #group-extra="{ group }">
      <span v-if="hours(group.id).est" style="display:inline-flex;align-items:center;gap:8px;color:var(--fu-color-text-secondary)">
        <span>{{ hours(group.id).logged }} h logged of {{ hours(group.id).est }} h</span>
        <span style="width:64px;height:6px;border-radius:999px;background:var(--fu-line);overflow:hidden">
          <span :style="{ display: 'block', height: '100%', width: hours(group.id).pct + '%', background: group.color || 'var(--fu-color-accent)' }" />
        </span>
        <span>{{ hours(group.id).pct }}%</span>
      </span>
    </template>
  </FusionTreeTable>
</div>\`
  })
}`,...X.parameters?.docs?.source}}};Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  name: "Task lists from flat rows (id + parent_id)",
  args: {
    ...listArgs,
    rows: flatRows,
    parentField: "parent_id"
  },
  render: listsRender(true)
}`,...Y.parameters?.docs?.source}}};Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
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
}`,...Z.parameters?.docs?.source}}};ee.parameters={...ee.parameters,docs:{...ee.parameters?.docs,source:{originalSource:`{
  name: "Plain text (no slots)",
  args: {
    columns,
    rows
  }
}`,...ee.parameters?.docs?.source}}};oe.parameters={...oe.parameters,docs:{...oe.parameters?.docs,source:{originalSource:`{
  render: rich(),
  args: {
    columns,
    rows,
    startExpanded: false
  }
}`,...oe.parameters?.docs?.source}}};te.parameters={...te.parameters,docs:{...te.parameters?.docs,source:{originalSource:`{
  render: rich(),
  args: {
    columns,
    rows,
    selectable: false
  }
}`,...te.parameters?.docs?.source}}};ne.parameters={...ne.parameters,docs:{...ne.parameters?.docs,source:{originalSource:`{
  render: rich(),
  args: {
    columns,
    rows,
    height: 220
  }
}`,...ne.parameters?.docs?.source}}};se.parameters={...se.parameters,docs:{...se.parameters?.docs,source:{originalSource:`{
  args: {
    columns,
    rows: [],
    emptyText: "No tasks yet"
  }
}`,...se.parameters?.docs?.source}}};ae.parameters={...ae.parameters,docs:{...ae.parameters?.docs,source:{originalSource:`{
  render: rich(),
  args: {
    columns,
    rows,
    loading: true
  }
}`,...ae.parameters?.docs?.source}}};re.parameters={...re.parameters,docs:{...re.parameters?.docs,source:{originalSource:`{
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
}`,...re.parameters?.docs?.source}}};M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  name: "Groups change",
  parameters: {
    docs: {
      description: {
        story: "Click the buttons to change \`groups\`, then check that no row goes blank, every list keeps its *Add a task…* field, a list you closed stays closed, and the console stays clear. Toggle \`groupAddRow\` and try again. Adding tasks still works as before."
      }
    }
  },
  render: () => ({
    components: {
      FusionTreeTable,
      FusionButton
    },
    setup() {
      const addRow = ref(true);
      const columns = [{
        key: "name",
        label: "Task"
      }, {
        key: "status",
        label: "Status",
        width: 160
      }];
      const groups = ref<any[]>([{
        id: "g1",
        label: "General",
        color: "#3a8be0"
      }, {
        id: "g2",
        label: "Cleaning",
        color: "#2f7d3b"
      }]);
      const rows = ref<any[]>([{
        id: 1,
        group_id: "g1",
        parent_id: null,
        name: "Write brief",
        status: "Open"
      }, {
        id: 2,
        group_id: null,
        parent_id: 1,
        name: "Sub of brief",
        status: "Open"
      }, {
        id: 3,
        group_id: "g1",
        parent_id: null,
        name: "Plan sprint",
        status: "Open"
      }, {
        id: 4,
        group_id: "g2",
        parent_id: null,
        name: "Mop floors",
        status: "Open"
      }]);
      const last = ref("Change the groups with the buttons");
      let n = 10;
      const palette = ["#c2417a", "#d97706", "#7c3aed", "#0891b2"];
      const addTask = () => {
        rows.value = [...rows.value, {
          id: ++n,
          group_id: "g2",
          parent_id: null,
          name: "Task " + n,
          status: "Open"
        }];
        last.value = "Added a task to Cleaning";
      };
      const addGroup = () => {
        groups.value = [...groups.value, {
          id: "g" + ++n,
          label: "List " + n,
          color: palette[n % palette.length]
        }];
        last.value = "Added a group";
      };
      const rename = () => {
        groups.value = groups.value.map((g, i) => i === 0 ? {
          ...g,
          label: g.label + "!"
        } : g);
        last.value = "Renamed the first group";
      };
      const recolor = () => {
        groups.value = groups.value.map((g, i) => i === 0 ? {
          ...g,
          color: palette[++n % palette.length]
        } : g);
        last.value = "Recoloured the first group";
      };
      const move = () => {
        if (groups.value.length < 2) return;
        const [first, ...rest] = groups.value;
        groups.value = [...rest, first];
        last.value = "Moved the first group to the end";
      };
      const remove = () => {
        if (groups.value.length < 2) return;
        const gone = groups.value[groups.value.length - 1];
        groups.value = groups.value.slice(0, -1);
        rows.value = rows.value.filter(r => r.group_id !== gone.id);
        last.value = \`Removed "\${gone.label}"\`;
      };
      const onCreate = ({
        groupId,
        title
      }: {
        groupId: string | number;
        title: string;
      }) => {
        rows.value = [...rows.value, {
          id: "n" + ++n,
          group_id: groupId,
          parent_id: null,
          name: title,
          status: "Open"
        }];
        last.value = \`create-task: "\${title}" in \${groupId}\`;
      };
      const onColor = ({
        groupId,
        color
      }: {
        groupId: string | number;
        color: string;
      }) => {
        groups.value = groups.value.map(g => g.id === groupId ? {
          ...g,
          color
        } : g);
        last.value = \`group-color-change: \${groupId} is now \${color}\`;
      };
      return {
        addRow,
        columns,
        groups,
        rows,
        last,
        addTask,
        addGroup,
        rename,
        recolor,
        move,
        remove,
        onCreate,
        onColor
      };
    },
    template: \`
          <div>
            <p style="margin: 0 0 12px; font-size: 14px">{{ last }}</p>
            <div style="display: flex; flex-wrap: wrap; gap: 8px; margin: 0 0 12px">
              <FusionButton text="Add task" size="sm" variant="outline" @click="addTask" />
              <FusionButton text="Add group" size="sm" variant="outline" @click="addGroup" />
              <FusionButton text="Rename group" size="sm" variant="outline" @click="rename" />
              <FusionButton text="Recolour group" size="sm" variant="outline" @click="recolor" />
              <FusionButton text="Move group" size="sm" variant="outline" @click="move" />
              <FusionButton text="Remove group" size="sm" variant="outline" @click="remove" />
              <FusionButton :text="addRow ? 'Add row on' : 'Add row off'" size="sm" :variant="addRow ? 'solid' : 'outline'" :aria-pressed="addRow" @click="addRow = !addRow" />
            </div>
            <FusionTreeTable
              :columns="columns"
              :rows="rows"
              groupField="group_id"
              :groups="groups"
              parentField="parent_id"
              :groupAddRow="addRow"
              groupAddRowPlaceholder="Add a task…"
              groupStyle="plain-color"
              :groupColorEditable="true"
              @create-task="onCreate"
              @group-color-change="onColor"
            >
              <template #cell-name="{ row }"><span class="slot-name">{{ row.name }}</span></template>
              <template #cell-status="{ row }"><span class="slot-status">{{ row.status }}</span></template>
            </FusionTreeTable>
          </div>
        \`
  })
}`,...M.parameters?.docs?.source},description:{story:"Changes to `groups` (add, rename, recolour, move, remove) only redraw the group headers: every cell\nkeeps its slot content, every group keeps its title row, closed groups stay closed and the page\ndoesn't scroll. Built from the repro page in the bug report.",...M.parameters?.docs?.description}}};G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
  name: "Inside a scrolling tab",
  parameters: {
    docs: {
      description: {
        story: "The table sits in a \`FusionTab\` with a fixed height, so the tab body scrolls, and it scrolls smoothly. Scroll down to the last list and type five tasks into its *Enter task title* row: the tab stays where it is and the title row stays in view. Before, each new task could make the tab fly back to the top."
      }
    }
  },
  render: () => ({
    components: {
      FusionTreeTable,
      FusionTab,
      FusionBadge,
      FuAvatar,
      FusionAutocomplete,
      FusionDatePicker,
      FusionButton
    },
    setup() {
      const selected = ref<(string | number)[]>([]);
      const data = ref<any[]>(taskListRows);
      const tabs = [{
        key: "tasks",
        title: "Tasks"
      }, {
        key: "notes",
        title: "Notes"
      }];
      const maxOf = (list: any[], f: string): number => list.reduce((m, r) => Math.max(m, r[f] ?? 0, r.children ? maxOf(r.children, f) : 0), 0);
      const onCreate = (p: {
        groupId: string | number;
        title: string;
      }) => {
        const id = maxOf(data.value, "id") + 1;
        const num = maxOf(data.value, "num") + 1;
        data.value = [...data.value, {
          group_id: p.groupId,
          id,
          num,
          name: p.title,
          status: "Backlog",
          dependency: "",
          assignee: "",
          due: "",
          logged: 0,
          est: 0,
          progress: 0
        }];
      };
      const onMove = (m: TreeTableMove) => {
        data.value = moveTreeRow(data.value, m, {
          groupField: "group_id"
        });
      };
      const setField = (id: number | string, field: string, value: unknown) => {
        data.value = withField(data.value, id, field, value);
      };
      const args = {
        ...listArgs,
        groups: taskLists,
        groupAddRow: true,
        groupStyle: "plain-color"
      };
      return {
        args,
        tabs,
        selected,
        data,
        onCreate,
        onMove,
        setField,
        people,
        statusOptions,
        statusTheme,
        dependencyTheme,
        dependencyLabel
      };
    },
    template: \`<div style="height: 460px">
  <FusionTab :tabs="tabs" defaultActiveDesktop="tasks">
    <template #tasks>
      <FusionTreeTable v-bind="args" :rows="data" v-model:selectedIds="selected" @row-move="onMove" @create-task="onCreate">\${richSlots}</FusionTreeTable>
    </template>
    <template #notes><p style="padding: 16px">Notes</p></template>
  </FusionTab>
</div>\`
  })
}`,...G.parameters?.docs?.source},description:{story:`Inside a FusionTab whose body scrolls (with smooth scrolling). Adding tasks from a list near the bottom
keeps the tab where it was, with the title row in view: scroll positions are put back without animation.`,...G.parameters?.docs?.description}}};D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  name: "Lazy groups",
  parameters: {
    docs: {
      description: {
        story: "Five groups the way Projects › Tasks loads them. **Brand refresh** has 1,000 tasks: 25 are loaded and **Show 25 more** loads the next 25 after 500 ms (placeholder rows show meanwhile, and the focus stays on the row, so Enter keeps loading). **Client onboarding** has all 7. **Website** is loading when the story opens. **Archive** starts closed (\`open: false\`) and loads only when opened (\`group-toggle\`). **Due diligence** stays loading. Headers show \`total\`, not the rows loaded. Tick some rows, then load more: the selection stays."
      }
    }
  },
  render: () => ({
    components: {
      FusionTreeTable
    },
    setup() {
      const groups = ref<any[]>([{
        id: "br",
        label: "Brand refresh",
        color: "#8a3fd1",
        total: 1000,
        meta: "BR · Acme Ltd",
        avatar: {
          src: LOGO,
          name: "Brand refresh",
          bg: "#8a3fd1"
        },
        more: {
          shown: 25,
          total: 1000
        }
      }, {
        id: "co",
        label: "Client onboarding portal",
        color: "#0f766e",
        total: 7,
        avatar: {
          name: "Client onboarding portal",
          bg: "#0f766e"
        },
        more: null
      }, {
        id: "web",
        label: "Website",
        color: "#2f6bff",
        total: 40,
        loading: true,
        more: null
      }, {
        id: "arc",
        label: "Archive",
        color: "#64748b",
        total: 12,
        open: false,
        more: null
      }, {
        id: "dd",
        label: "Due diligence",
        color: "#d97706",
        total: 64,
        loading: true,
        more: null
      }]);
      const rows = ref<any[]>([...taskPage("br", "BR", 0, 25), ...taskPage("co", "CO", 0, 7)]);
      const selected = ref<(string | number)[]>([]);
      const log = ref<string[]>([]);
      const say = (m: string) => log.value = [m, ...log.value].slice(0, 4);
      const patch = (id: string, change: Record<string, any>) => groups.value = groups.value.map(g => g.id === id ? {
        ...g,
        ...change
      } : g);
      const loaded = new Set(["br", "co"]);

      /* First page of a group (as GET /tasks?group_id=…&page=1) */
      function loadFirst(id: string, delay = 700) {
        const g = groups.value.find(x => x.id === id);
        if (!g || loaded.has(id)) return;
        loaded.add(id);
        patch(id, {
          loading: true
        });
        setTimeout(() => {
          const n = Math.min(25, g.total);
          rows.value = [...rows.value, ...taskPage(id, id.toUpperCase(), 0, n)];
          patch(id, {
            loading: false,
            more: n < g.total ? {
              shown: n,
              total: g.total
            } : null
          });
          say(\`loaded \${n} of \${g.total} in \${g.label}\`);
        }, delay);
      }
      /* Website is loading when the story opens */
      loadFirst("web", 1200);
      function onLoadMore({
        groupId
      }: {
        groupId: string;
      }) {
        const g = groups.value.find(x => x.id === groupId);
        if (!g?.more || g.loadingMore) return;
        patch(groupId, {
          loadingMore: true
        });
        say(\`group-load-more: \${g.label}\`);
        setTimeout(() => {
          const n = Math.min(25, g.more.total - g.more.shown);
          rows.value = [...rows.value, ...taskPage(groupId, groupId.toUpperCase(), g.more.shown, n)];
          const shown = g.more.shown + n;
          patch(groupId, {
            loadingMore: false,
            more: shown < g.more.total ? {
              shown,
              total: g.more.total
            } : null
          });
        }, 500);
      }
      function onToggle({
        groupId,
        open
      }: {
        groupId: string;
        open: boolean;
      }) {
        say(\`group-toggle: \${groupId} \${open ? "opened" : "closed"}\`);
        if (open && groupId !== "dd") loadFirst(groupId);
      }
      return {
        groups,
        rows,
        selected,
        log,
        onLoadMore,
        onToggle,
        columns: lazyColumns,
        statusColorOf
      };
    },
    template: \`<div>
  <p style="margin:0 0 4px;font-size:13px">Selected: <strong data-testid="selected-count">{{ selected.length }}</strong></p>
  <ul style="margin:0 0 12px;padding:0;list-style:none;font-size:12px;color:var(--fu-color-text-secondary)"><li v-for="(l, i) in log" :key="i">{{ l }}</li></ul>
  <FusionTreeTable
    :columns="columns" :rows="rows" groupField="group_id" :groups="groups"
    groupStyle="plain-color" groupAvatarShape="square" :draggableRows="false"
    :rowColor="(row) => statusColorOf(row.status)" :rowCompleted="(row) => row.status === 'Done'"
    v-model:selectedIds="selected" :skeletonRows="3"
    @group-load-more="onLoadMore" @group-toggle="onToggle"
  >\${lazySlots}</FusionTreeTable>
</div>\`
  })
}`,...D.parameters?.docs?.source},description:{story:`Groups load first, rows per group: headers show the real totals, an open group loads its first page,
"Show more" loads the next, and a closed group loads nothing until it's opened.`,...D.parameters?.docs?.description}}};E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  name: "Remote sort",
  parameters: {
    docs: {
      description: {
        story: "\`sortMode=\\"remote\\"\`: a header click shows the arrow and emits \`sort-change\` once; the story fetches the rows sorted by the \\"server\\" (300 ms) and replaces \`rows\`, which the table keeps in the order given. Replacing rows never emits \`sort-change\`. **Rebuild table** remounts it with the \`sort\` prop, and the arrow is still there."
      }
    }
  },
  render: () => ({
    components: {
      FusionTreeTable,
      FusionButton
    },
    setup() {
      const all = taskPage("all", "TS", 0, 40);
      const sort = ref<{
        key: string;
        dir: "asc" | "desc";
      } | null>(null);
      const rows = ref<any[]>(all.slice(0, 20));
      const events = ref(0);
      const lastEvent = ref("none yet");
      const tableKey = ref(0);
      const busy = ref(false);
      function fetchSorted(s: {
        key: string;
        dir: "asc" | "desc";
      } | null) {
        busy.value = true;
        setTimeout(() => {
          const list = [...all];
          if (s) list.sort((a: any, b: any) => String(a[s.key]).localeCompare(String(b[s.key]), undefined, {
            numeric: true
          }) * (s.dir === "asc" ? 1 : -1));
          rows.value = list.slice(0, 20);
          busy.value = false;
        }, 300);
      }
      function onSort(s: {
        key: string;
        dir: "asc" | "desc";
      } | null) {
        events.value++;
        lastEvent.value = s ? \`\${s.key} \${s.dir}\` : "none";
        sort.value = s;
        fetchSorted(s);
      }
      return {
        rows,
        sort,
        events,
        lastEvent,
        tableKey,
        busy,
        onSort,
        columns: lazyColumns,
        statusColorOf
      };
    },
    template: \`<div>
  <p style="margin:0 0 8px;font-size:13px">sort-change events: <strong data-testid="sort-events">{{ events }}</strong> · last: <span data-testid="sort-last">{{ lastEvent }}</span> <span v-if="busy">· loading…</span></p>
  <div style="margin:0 0 12px"><FusionButton text="Rebuild table" size="sm" variant="outline" @click="tableKey++" /></div>
  <FusionTreeTable :key="tableKey" :columns="columns" :rows="rows" sortMode="remote" :sort="sort" :draggableRows="false" :selectable="false" @sort-change="onSort">\${lazySlots}</FusionTreeTable>
</div>\`
  })
}`,...E.parameters?.docs?.source},description:{story:'Remote sort: the table only shows the arrow and reports the click; the "server" returns the rows in order.',...E.parameters?.docs?.description}}};q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  name: "Group avatars",
  parameters: {
    docs: {
      description: {
        story: "\`group.avatar\` (\`{ src, name, bg }\`) draws a FuAvatar before the title and takes the colour square's place. **Acme** has a logo, **Northwind** has none (initials on its colour), **Globex**'s image is broken (falls back to initials), and **Internal** has no avatar, so it keeps its colour square. Try each \`groupStyle\` and both \`groupAvatarShape\`s."
      }
    }
  },
  render: () => ({
    components: {
      FusionTreeTable,
      FusionButton
    },
    setup() {
      const style = ref<any>("plain-color");
      const shape = ref<"circle" | "square">("square");
      const groups = [{
        id: "acme",
        label: "Acme Ltd",
        color: "#8a3fd1",
        avatar: {
          src: LOGO,
          name: "Acme Ltd",
          bg: "#8a3fd1"
        }
      }, {
        id: "nw",
        label: "Northwind Coffee",
        color: "#0f766e",
        avatar: {
          name: "Northwind Coffee",
          bg: "#0f766e"
        }
      }, {
        id: "gx",
        label: "Globex",
        color: "#d97706",
        avatar: {
          src: "/this-image-does-not-exist.png",
          name: "Globex",
          bg: "#d97706"
        }
      }, {
        id: "int",
        label: "Internal",
        color: "#2f6bff"
      }];
      const rows = [...taskPage("acme", "AC", 0, 2), ...taskPage("nw", "NW", 0, 2), ...taskPage("gx", "GX", 0, 2), ...taskPage("int", "IN", 0, 2)];
      return {
        style,
        shape,
        groups,
        rows,
        columns: lazyColumns,
        statusColorOf,
        styles: ["plain", "plain-color", "band", "band-color"]
      };
    },
    template: \`<div>
  <div style="display:flex;flex-wrap:wrap;gap:8px;margin:0 0 12px">
    <FusionButton v-for="s in styles" :key="s" :text="s" size="sm" :variant="style === s ? 'solid' : 'outline'" @click="style = s" />
    <FusionButton :text="'shape: ' + shape" size="sm" variant="outline" @click="shape = shape === 'square' ? 'circle' : 'square'" />
  </div>
  <FusionTreeTable :columns="columns" :rows="rows" groupField="group_id" :groups="groups" :groupStyle="style" :groupAvatarShape="shape" :draggableRows="false">\${lazySlots}</FusionTreeTable>
</div>\`
  })
}`,...q.parameters?.docs?.source},description:{story:"Group avatars: logos, initials, a broken image, every group style, circle and square.",...q.parameters?.docs?.description}}};N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  name: "Group details",
  parameters: {
    docs: {
      description: {
        story: "With a \`#group-details\` slot, a group's title (and avatar) becomes a button that opens a card under it. The chevron and the rest of the header still open and close the group. Escape or a click outside closes the card and the focus goes back to the title. The table sits in a \`FusionTab\` with a scrolling body and a sticky header: scroll with the card open and it stays anchored."
      }
    }
  },
  render: () => ({
    components: {
      FusionTreeTable,
      FusionTab,
      ProjectCard
    },
    setup() {
      const groups = [{
        id: "br",
        label: "Brand refresh",
        color: "#8a3fd1",
        total: 12,
        client: "Acme Ltd",
        lead: "Amara Okafor",
        dates: "3 Nov – 19 Dec",
        progress: 62,
        avatar: {
          src: LOGO_2,
          name: "Brand refresh",
          bg: "#8a3fd1"
        }
      }, {
        id: "co",
        label: "Client onboarding portal",
        color: "#0f766e",
        total: 8,
        client: "Northwind Coffee",
        lead: "Lee Park",
        dates: "10 Nov – 30 Jan",
        progress: 25,
        avatar: {
          name: "Client onboarding portal",
          bg: "#0f766e"
        }
      }, {
        id: "web",
        label: "Website",
        color: "#2f6bff",
        total: 10,
        client: "Globex",
        lead: "Priya Nair",
        dates: "1 Dec – 28 Feb",
        progress: 10
      }];
      const rows = [...taskPage("br", "BR", 0, 12), ...taskPage("co", "CO", 0, 8), ...taskPage("web", "WE", 0, 10)];
      const log = ref("Click a group's title");
      const tabs = [{
        key: "tasks",
        title: "Tasks"
      }, {
        key: "notes",
        title: "Notes"
      }];
      return {
        groups,
        rows,
        log,
        tabs,
        columns: lazyColumns,
        statusColorOf
      };
    },
    template: \`<div>
  <p style="margin:0 0 8px;font-size:13px" data-testid="details-log">{{ log }}</p>
  <div style="height:460px">
    <FusionTab :tabs="tabs" defaultActiveDesktop="tasks">
      <template #tasks>
        <FusionTreeTable :columns="columns" :rows="rows" groupField="group_id" :groups="groups" groupStyle="plain-color" groupAvatarShape="square" :stickyHeader="true" :draggableRows="false"
          @group-details-open="({ groupId }) => (log = 'group-details-open: ' + groupId)"
          @group-details-close="({ groupId }) => (log = 'group-details-close: ' + groupId)">
          \${lazySlots}
          <template #group-details="{ group, close }">
            <ProjectCard :group="group" @open="close(); log = 'Open project: ' + group.id" />
          </template>
        </FusionTreeTable>
      </template>
      <template #notes><p style="padding:16px">Notes</p></template>
    </FusionTab>
  </div>
</div>\`
  })
}`,...N.parameters?.docs?.source},description:{story:"Group details: the title opens a card about the group; the chevron still opens and closes it.",...N.parameters?.docs?.description}}};W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
  name: "Fixed height, 2,000 rows with cell slots",
  parameters: {
    docs: {
      description: {
        story: "\`height=\\"100%\\"\` inside a 520px box, 2,000 rows, a Vue component in every Task and Status cell. Only the rows on screen (plus a small buffer) are drawn: scroll and the number of live slot components stays about the same instead of growing to 4,000."
      }
    }
  },
  render: () => ({
    components: {
      FusionTreeTable,
      SlotProbe
    },
    setup() {
      const rows = [...taskPage("a", "AA", 0, 1000), ...taskPage("b", "BB", 0, 1000)];
      const groups = [{
        id: "a",
        label: "Project A",
        color: "#8a3fd1"
      }, {
        id: "b",
        label: "Project B",
        color: "#0f766e"
      }];
      return {
        rows,
        groups,
        alive,
        columns: lazyColumns,
        statusColorOf
      };
    },
    template: \`<div>
  <p style="margin:0 0 8px;font-size:13px">Live slot components: <strong data-testid="alive">{{ alive }}</strong> (of {{ rows.length * 2 }} cells)</p>
  <div style="height:520px;display:flex;flex-direction:column">
    <FusionTreeTable :columns="columns" :rows="rows" groupField="group_id" :groups="groups" groupStyle="plain-color" height="100%" :draggableRows="false"
      :rowColor="(row) => statusColorOf(row.status)">
      <template #cell-name="{ row }"><SlotProbe :text="row.key + '  ' + row.name" /></template>
      <template #cell-status="{ row }"><SlotProbe :text="row.status" /></template>
    </FusionTreeTable>
  </div>
</div>\`
  })
}`,...W.parameters?.docs?.source},description:{story:"Fixed height with 2,000 rows and cell slots: only the rows on screen are drawn.",...W.parameters?.docs?.description}}};const mo=["Default","TaskLists","GroupStyles","TaskListsFlat","StickyHeader","PlainText","Collapsed","NoSelection","FixedHeight","Empty","Loading","ColumnOrderStored","GroupsChange","InScrollingTab","LazyGroups","RemoteSort","GroupAvatars","GroupDetails","FixedHeightManyRows"];export{oe as Collapsed,re as ColumnOrderStored,K as Default,se as Empty,ne as FixedHeight,W as FixedHeightManyRows,q as GroupAvatars,N as GroupDetails,X as GroupStyles,M as GroupsChange,G as InScrollingTab,D as LazyGroups,ae as Loading,te as NoSelection,ee as PlainText,E as RemoteSort,Z as StickyHeader,J as TaskLists,Y as TaskListsFlat,mo as __namedExportsOrder,go as default};
