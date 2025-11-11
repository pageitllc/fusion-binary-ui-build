import{d as J,r as u,w as H,i as P,j as X,c as s,b as i,a as p,f as V,J as j,F as f,s as _,o as a,h as U,k as Y,u as O,t as D,g as M,C as T}from"./iframe-o7SUGoga.js";import{_ as G}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{F as Q}from"./FuAvatar-CO6FnC2I.js";import{U as x}from"./user-CShBQRq7.js";import{c as I}from"./createLucideIcon-D5kBsy5g.js";import{C}from"./circle-check-big-Djl5qEVr.js";import"./preload-helper-Ct5FWWRu.js";/**
 * @license lucide-vue-next v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const A=I("at-sign",[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-4 8",key:"7n84p3"}]]);/**
 * @license lucide-vue-next v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const L=I("users",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["path",{d:"M16 3.128a4 4 0 0 1 0 7.744",key:"16gr8j"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}]]),Z={key:0,class:"fu-listview__th fu-listview__th--checkbox"},ee={class:"fu-listview__th-content"},te=["onMousedown"],ne=["onClick"],ae=["onUpdate:modelValue"],oe={class:"fu-listview__cell"},N=J({__name:"FusionListView",props:{columns:{},rows:{},rowKey:{},options:{}},emits:["row-selected","row-clicked"],setup(r,{emit:c}){const l=r,F=c,m=u(l.columns.map(e=>({...e,width:e.width||"150px"}))),h=u(!1),B=u(null),z=u(null);function k(){const e=z.value;e&&(e.style.overflowY="hidden",requestAnimationFrame(()=>{e.style.overflowY="auto"}))}function S(){const e=l.rows.filter(n=>n.__selected);F("row-selected",e)}H(h,e=>{l.options?.selectable&&(l.rows.forEach(n=>n.__selected=e),S())});function K(e){F("row-clicked",e),l.options?.onRowClick&&l.options.onRowClick(e)}let d=null,R=0,E=0;function W(e,n){l.options?.resizeColumn&&(d=n,R=e.clientX,E=parseInt(m.value[n].width,10),document.addEventListener("mousemove",b),document.addEventListener("mouseup",g))}function b(e){if(d===null)return;const n=e.clientX-R,t=Math.max(3,E+n);m.value[d].width=`${t}px`}function g(){d=null,document.removeEventListener("mousemove",b),document.removeEventListener("mouseup",g)}return P(()=>{k(),window.addEventListener("resize",k)}),X(()=>{window.removeEventListener("resize",k),document.removeEventListener("mousemove",b),document.removeEventListener("mouseup",g)}),(e,n)=>(a(),s("div",{class:"fu-listview",ref_key:"listviewRef",ref:B},[i("div",{class:"fu-listview__table-wrapper customScrollBar",ref_key:"tableWrapper",ref:z},[i("table",null,[i("thead",null,[i("tr",null,[r.options?.selectable?(a(),s("th",Z,[V(i("input",{type:"checkbox","onUpdate:modelValue":n[0]||(n[0]=t=>h.value=t)},null,512),[[j,h.value]])])):p("",!0),(a(!0),s(f,null,_(m.value,(t,o)=>(a(),s("th",{key:t.key,style:U({width:t.width||"auto"}),class:"fu-listview__th"},[i("div",ee,[t.icon?(a(),Y(O(t.icon),{key:0,class:"fu-listview__th-icon"})):p("",!0),i("span",null,D(t.label),1),r.options?.resizeColumn?(a(),s("span",{key:1,class:"fu-listview__resize-handle",onMousedown:q=>W(q,o)},null,40,te)):p("",!0)])],4))),128))])]),i("tbody",null,[(a(!0),s(f,null,_(r.rows,t=>(a(),s("tr",{key:t[r.rowKey],class:"fu-listview__row",onClick:o=>K(t)},[r.options?.selectable?(a(),s("td",{key:0,class:"fu-listview__td fu-listview__td--checkbox",onClick:n[1]||(n[1]=T(()=>{},["stop"]))},[V(i("input",{type:"checkbox","onUpdate:modelValue":o=>t.__selected=o,onChange:S},null,40,ae),[[j,t.__selected]])])):p("",!0),M(e.$slots,"tableRow",{row:t},()=>[(a(!0),s(f,null,_(m.value,o=>(a(),s("td",{key:o.key,class:"fu-listview__td",style:U({width:o.width})},[M(e.$slots,`cell-${o.key}`,{row:t,col:o},()=>[i("span",oe,D(t[o.key]),1)],!0)],4))),128))],!0)],8,ne))),128))])])],512)],512))}}),$=G(N,[["__scopeId","data-v-67ab1a89"]]);N.__docgenInfo={exportName:"default",displayName:"FusionListView",description:"",tags:{},props:[{name:"columns",required:!0,type:{name:"Array",elements:[{name:"ListColumn"}]}},{name:"rows",required:!0,type:{name:"Array",elements:[{name:"Record",elements:[{name:"string"},{name:"any"}]}]}},{name:"rowKey",required:!0,type:{name:"string"}},{name:"options",required:!1,type:{name:`{
  onRowClick?: (row: any) => void;
  selectable?: boolean;
  resizeColumn?: boolean;
}`}}],events:[{name:"row-selected",type:{names:["Array"],elements:[{name:"any"}]}},{name:"row-clicked",type:{names:["any"]}}],slots:[{name:"tableRow",scoped:!0,bindings:[{name:"row",title:"binding"}]},{name:"`cell-${col.key}`",scoped:!0,bindings:[{name:"name",title:"binding"},{name:"row",title:"binding"},{name:"col",title:"binding"}]}],sourceFiles:["/Users/tommys/Documents/Skkido/Fusion-binary-ui/src/components/list/FusionListView.vue"]};const ue={title:"Components/FusionListView",component:$,tags:["autodocs"],parameters:{docs:{description:{component:`
The **FusionListView** component renders a modern, resizable data table with optional row selection, scrolling, and click events.

### Props
- **columns** → \`[{ label, key, width?, icon? }]\`
- **rows** → Array of objects with keys matching column keys
- **row-key** → Unique key per row (e.g., \`id\`)
- **options** → \`{ selectable?: boolean, resizeColumn?: boolean }\`
- **maxHeight** → e.g. \`"400px"\`, \`"60vh"\` — fixes header and scrolls body

### Features
- **Selectable rows** — Adds left checkbox + "Select all" in header
- **Row click** — Emits \`row-click\` with \`(id, row)\`
- **Custom cells** — Use slots like \`#cell-{column.key}\` for per-column rendering
- **Resizable headers** — Drag column edges to resize
- **Ellipsis** — Long content truncates with "..."
- **Fixed header** when scrolling

---

### Example — Avatar inside cell + row click + scrollable body

\`\`\`vue
<FusionListView
  :columns="columns"
  :rows="rows"
  row-key="id"
  max-height="300px"
  :options="{ selectable: true, resizeColumn: true }"
  @row-click="(id, row) => alert(\`Clicked row \${id}: \${row.name}\`)"
>
  <template #cell-name="{ row }">
    <td>
      <div style="display: flex; align-items: center; gap: 0.5rem;">
        <FuAvatar :src="row.avatar" size="sm" :name="row.name" />
        <span>{{ row.name }}</span>
      </div>
    </td>
  </template>
</FusionListView>
\`\`\`
        `}}}},w={render:r=>({components:{FusionListView:$,FuAvatar:Q,User:x,AtSign:A,Users:L,CheckCircle:C},setup(){return{args:r}},template:`
      <FusionListView
        v-bind="args"
        @row-click="(id, row) => alert('Row clicked: ' + id + ' (' + row.name + ')')"
      >
        <template #cell-name="{ row }">
          <td>
            <div style="display: flex; align-items: center; gap: 0.5rem;">
              <FuAvatar :src="row.avatar" size="sm" :name="row.name" />
              <span>{{ row.name }}</span>
            </div>
          </td>
        </template>
      </FusionListView>
    `}),args:{columns:[{label:"Name",key:"name",width:"200px",icon:x},{label:"Email",key:"email",width:"220px",icon:A},{label:"Role",key:"role",icon:L},{label:"Status",key:"status",width:"150px",icon:C}],rows:[{id:1,name:"John Doe",email:"john@doe.com",role:"Developer",status:"Active",avatar:"/avatars/john.jpg"},{id:2,name:"Jane Doe",email:"jane@doe.com",role:"HR",status:"Inactive",avatar:"/avatars/jane.jpg"},{id:3,name:"Sam Lee",email:"sam@doe.com",role:"Designer",status:"Active",avatar:"/avatars/sam.jpg"}],rowKey:"id",options:{selectable:!0,resizeColumn:!0}}},v={args:{columns:[{label:"Name",key:"name",width:"200px",icon:x},{label:"Email",key:"email",width:"220px",icon:A},{label:"Role",key:"role",icon:L},{label:"Status",key:"status",width:"150px",icon:C}],rows:[{id:1,name:"Alice",email:"alice@company.com",role:"PM",status:"Active"},{id:2,name:"Bob",email:"bob@company.com",role:"Engineer",status:"Inactive"}],rowKey:"id",options:{resizeColumn:!0}}},y={args:{columns:[{label:"ID",key:"id",width:"80px"},{label:"Name",key:"name",width:"200px"}],rows:Array.from({length:25}).map((r,c)=>({id:c+1,name:`Item ${c+1}`})),rowKey:"id",options:{resizeColumn:!0}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
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
      <FusionListView
        v-bind="args"
        @row-click="(id, row) => alert('Row clicked: ' + id + ' (' + row.name + ')')"
      >
        <template #cell-name="{ row }">
          <td>
            <div style="display: flex; align-items: center; gap: 0.5rem;">
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
      icon: User
    }, {
      label: "Email",
      key: "email",
      width: "220px",
      icon: AtSign
    }, {
      label: "Role",
      key: "role",
      icon: Users
    }, {
      label: "Status",
      key: "status",
      width: "150px",
      icon: CheckCircle
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
    options: {
      selectable: true,
      resizeColumn: true
    }
  }
}`,...w.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    columns: [{
      label: "Name",
      key: "name",
      width: "200px",
      icon: User
    }, {
      label: "Email",
      key: "email",
      width: "220px",
      icon: AtSign
    }, {
      label: "Role",
      key: "role",
      icon: Users
    }, {
      label: "Status",
      key: "status",
      width: "150px",
      icon: CheckCircle
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
    options: {
      resizeColumn: true
    }
  }
}`,...v.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    columns: [{
      label: "ID",
      key: "id",
      width: "80px"
    }, {
      label: "Name",
      key: "name",
      width: "200px"
    }],
    rows: Array.from({
      length: 25
    }).map((_, i) => ({
      id: i + 1,
      name: \`Item \${i + 1}\`
    })),
    rowKey: "id",
    options: {
      resizeColumn: true
    }
  }
}`,...y.parameters?.docs?.source}}};const pe=["WithAvatar","WithoutCheckbox","Minimal"];export{y as Minimal,w as WithAvatar,v as WithoutCheckbox,pe as __namedExportsOrder,ue as default};
