import{q as D,c as _,s as S,j as C,z as I,o as s,b as r,p as B,d as g,t as F,F as N,g as $,i as h,B as W,f as z,u as P,r as y}from"./iframe-DLJy-DHW.js";import{F as q}from"./FusionButton-CSaeGhtG.js";import{X as L}from"./x-GJVIuc3e.js";import{_ as V}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{_ as Q}from"./FusionTreeTable-Cih8Bc9f.js";import{F as M}from"./FusionBadge-C19OGssr.js";import{S as f}from"./send-BW5AE_Pj.js";import{T as v}from"./trash-juoE6ocj.js";import{C as w}from"./copy-Duk3I6XN.js";import{c as j}from"./createLucideIcon-CURt8gZv.js";import{A as U}from"./archive-B-OnDCl_.js";import"./preload-helper-Ct5FWWRu.js";import"./FusionActionButton-D4JlY0zq.js";import"./DropdownMenu-Bg1wQL3v.js";import"./check-BvnC0Elc.js";import"./FuAvatar-BRVPIokn.js";import"./FuColorPopover-mwIrK7E5.js";import"./plus-LMukCZn9.js";import"./ellipsis-CeooarVg.js";/**
 * @license @lucide/vue v1.54.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const E={name:"user-plus",size:24,node:[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["line",{x1:"19",x2:"19",y1:"8",y2:"14",key:"1bvyxn"}],["line",{x1:"22",x2:"16",y1:"11",y2:"11",key:"1shjgl"}]]},H=j(E),O={class:"fu-selbar__count","aria-live":"polite"},R={class:"fu-selbar__num"},X={key:0,class:"fu-selbar__actions"},G=["aria-label"],A=D({__name:"FusionSelectionBar",props:{count:{},label:{default:"selected"},actions:{default:()=>[]},clearable:{type:Boolean,default:!0},clearLabel:{default:"Clear selection"},position:{default:"fixed"},visible:{type:Boolean,default:void 0}},emits:["action","clear"],setup(e,{emit:a}){const t=e,i=a,b=_(()=>t.visible===void 0?t.count>0:t.visible);function T(l){return l.tone==="danger"?"danger":l.tone==="primary"?"success":"ghost"}return(l,x)=>(s(),S(I,{name:"fu-selbar"},{default:C(()=>[b.value?(s(),r("div",{key:0,class:B(["fu-selbar",`fu-selbar--${e.position}`]),role:"toolbar","aria-label":"Selection actions"},[g("div",O,[g("span",R,F(e.count),1),g("span",null,F(e.label),1)]),e.actions.length?(s(),r("div",X,[(s(!0),r(N,null,$(e.actions,n=>(s(),S(q,{key:n.key,text:n.label,icon:n.icon,variant:T(n),disabled:n.disabled,loading:n.loading,size:"sm",class:B({"fu-selbar__btn":n.tone!=="primary"&&n.tone!=="danger"}),onClick:J=>i("action",n.key)},null,8,["text","icon","variant","disabled","loading","class","onClick"]))),128))])):h("",!0),W(l.$slots,"default",{},void 0,!0),e.clearable?(s(),r("button",{key:1,type:"button",class:"fu-selbar__clear","aria-label":e.clearLabel,onClick:x[0]||(x[0]=n=>i("clear"))},[z(P(L),{size:16})],8,G)):h("",!0)],2)):h("",!0)]),_:3}))}}),o=V(A,[["__scopeId","data-v-79d6d906"]]);A.__docgenInfo={exportName:"default",displayName:"FusionSelectionBar",description:"",tags:{},props:[{name:"count",description:"How many things are selected. The bar hides itself at 0.",required:!0,type:{name:"number"}},{name:"label",description:'Word after the number, for example "selected" or "tasks selected".',required:!1,type:{name:"string"},defaultValue:{func:!1,value:'"selected"'}},{name:"actions",required:!1,type:{name:"Array",elements:[{name:"SelectionBarAction"}]},defaultValue:{func:!1,value:"() => []"}},{name:"clearable",description:"Show the x that clears the selection.",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"true"}},{name:"clearLabel",required:!1,type:{name:"string"},defaultValue:{func:!1,value:'"Clear selection"'}},{name:"position",description:"fixed: pinned to the bottom of the screen. sticky: sticks to the bottom of its scrolling parent. inline: sits where you place it.",required:!1,type:{name:"union",elements:[{name:'"fixed"'},{name:'"sticky"'},{name:'"inline"'}]},defaultValue:{func:!1,value:'"fixed"'}},{name:"visible",description:"Force it shown or hidden. By default it shows when count is above 0.",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"undefined"}}],events:[{name:"action",type:{names:["string"]}},{name:"clear"}],slots:[{name:"default"}],sourceFiles:["/Users/xavier/Documents/Websites/Skkido/Fusion-binary-ui/src/components/selectionBar/FusionSelectionBar.vue"]};const ge={title:"Fusion/Data Display/FusionSelectionBar",component:o,tags:["autodocs"],parameters:{layout:"fullscreen",docs:{description:{component:`
The bar that appears once something is selected. It says **how many** are selected and offers what you can do with them. It hides itself at 0.

- It shows only the number, not the names of what is selected.
- Actions are \`{ key, label, icon, tone }\`. \`tone: "primary"\` is the main action (green), \`"danger"\` is destructive (red). The bar emits \`action\` with the key, so the page decides what happens.
- \`position\`: \`fixed\` pins it to the bottom of the screen, \`sticky\` sticks it to the bottom of a scrolling area, \`inline\` places it wherever you put it.
- The × clears the selection (\`clear\` event).
- Use the default slot to add anything extra (a menu, a hint).

\`\`\`vue
<FusionSelectionBar
  :count="selected.length"
  :actions="[
    { key: 'send', label: 'Send to client', icon: Send, tone: 'primary' },
    { key: 'delete', label: 'Delete', icon: Trash2, tone: 'danger' },
  ]"
  @action="onAction"
  @clear="selected = []"
/>
\`\`\`
`}}},argTypes:{count:{control:{type:"number",min:0,max:99}},position:{control:"radio",options:["fixed","sticky","inline"]},clearable:{control:"boolean"},label:{control:"text"}}},k=[{key:"send",label:"Send to client",icon:f,tone:"primary"},{key:"delete",label:"Delete",icon:v,tone:"danger"}],c={args:{count:3,position:"inline",actions:k},render:e=>({components:{FusionSelectionBar:o},setup:()=>({args:e}),template:'<div style="padding:32px"><FusionSelectionBar v-bind="args" /></div>'})},d={name:"Plain, primary and danger actions",args:{count:12,position:"inline",label:"tasks selected",actions:[{key:"assign",label:"Assign",icon:H},{key:"copy",label:"Duplicate",icon:w},{key:"archive",label:"Archive",icon:U},{key:"send",label:"Send to client",icon:f,tone:"primary"},{key:"delete",label:"Delete",icon:v,tone:"danger"}]},render:e=>({components:{FusionSelectionBar:o},setup:()=>({args:e}),template:'<div style="padding:32px"><FusionSelectionBar v-bind="args" /></div>'})},u={name:"A disabled action and one that is working",args:{count:2,position:"inline",actions:[{key:"send",label:"Send to client",icon:f,tone:"primary",loading:!0},{key:"copy",label:"Duplicate",icon:w,disabled:!0},{key:"delete",label:"Delete",icon:v,tone:"danger"}]},render:e=>({components:{FusionSelectionBar:o},setup:()=>({args:e}),template:'<div style="padding:32px"><FusionSelectionBar v-bind="args" /></div>'})},p={name:"Appears when something is selected (try it)",render:()=>({components:{FusionSelectionBar:o},setup(){const e=y(0),a=y("Press + to select things");return{count:e,last:a,actions:k,onAction:t=>a.value=`action: ${t} on ${e.value}`}},template:`
<div style="padding:32px;min-height:260px">
  <div style="display:flex;gap:8px;align-items:center;margin-bottom:12px">
    <button @click="count++" style="padding:6px 12px">+ select one</button>
    <button @click="count = Math.max(0, count - 1)" style="padding:6px 12px">- deselect one</button>
    <span style="font-size:14px">{{ last }}</span>
  </div>
  <FusionSelectionBar :count="count" :actions="actions" position="sticky" @action="onAction" @clear="count = 0; last = 'cleared'" />
</div>`})},m={name:"With the tree table (tick tasks, the bar appears)",parameters:{layout:"padded"},render:()=>({components:{FusionSelectionBar:o,FusionTreeTable:Q,FusionBadge:M},setup(){const e=[{key:"name",label:"Task",minWidth:280},{key:"status",label:"Status",width:160},{key:"due",label:"Due",width:110}],a=[{id:1,name:"Navigation shell",status:"Internal QC",due:"24 Nov"},{id:2,name:"Cashier screen",status:"Internal QC",due:"1 Dec",children:[{id:21,name:"Basket",status:"Internal QC",due:"28 Nov"},{id:22,name:"Payment screen",status:"Working on it",due:"1 Dec"}]},{id:3,name:"API contract",status:"Backlog",due:"19 Nov"},{id:4,name:"Launch checklist",status:"Backlog",due:"12 Dec"}],t=y([]),i=y("");return{columns:e,rows:a,selected:t,note:i,actions:k,onAction:b=>i.value=`${b}: ${t.value.join(", ")}`}},template:`
<div style="height:420px;overflow:auto;position:relative">
  <p style="margin:0 0 8px;font-size:13px">{{ note || 'Tick a task' }}</p>
  <FusionTreeTable :columns="columns" :rows="rows" v-model:selectedIds="selected" :draggableRows="false">
    <template #cell-status="{ value }"><FusionBadge :text="value" size="sm" variant="subtle" /></template>
  </FusionTreeTable>
  <FusionSelectionBar :count="selected.length" :actions="actions" position="sticky" @action="onAction" @clear="selected = []" />
</div>`})};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    count: 3,
    position: "inline",
    actions
  },
  render: args => ({
    components: {
      FusionSelectionBar
    },
    setup: () => ({
      args
    }),
    template: \`<div style="padding:32px"><FusionSelectionBar v-bind="args" /></div>\`
  })
}`,...c.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  name: "Plain, primary and danger actions",
  args: {
    count: 12,
    position: "inline",
    label: "tasks selected",
    actions: [{
      key: "assign",
      label: "Assign",
      icon: UserPlus
    }, {
      key: "copy",
      label: "Duplicate",
      icon: Copy
    }, {
      key: "archive",
      label: "Archive",
      icon: Archive
    }, {
      key: "send",
      label: "Send to client",
      icon: Send,
      tone: "primary"
    }, {
      key: "delete",
      label: "Delete",
      icon: Trash2,
      tone: "danger"
    }]
  },
  render: args => ({
    components: {
      FusionSelectionBar
    },
    setup: () => ({
      args
    }),
    template: \`<div style="padding:32px"><FusionSelectionBar v-bind="args" /></div>\`
  })
}`,...d.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  name: "A disabled action and one that is working",
  args: {
    count: 2,
    position: "inline",
    actions: [{
      key: "send",
      label: "Send to client",
      icon: Send,
      tone: "primary",
      loading: true
    }, {
      key: "copy",
      label: "Duplicate",
      icon: Copy,
      disabled: true
    }, {
      key: "delete",
      label: "Delete",
      icon: Trash2,
      tone: "danger"
    }]
  },
  render: args => ({
    components: {
      FusionSelectionBar
    },
    setup: () => ({
      args
    }),
    template: \`<div style="padding:32px"><FusionSelectionBar v-bind="args" /></div>\`
  })
}`,...u.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  name: "Appears when something is selected (try it)",
  render: () => ({
    components: {
      FusionSelectionBar
    },
    setup() {
      const count = ref(0);
      const last = ref("Press + to select things");
      return {
        count,
        last,
        actions,
        onAction: (k: string) => last.value = \`action: \${k} on \${count.value}\`
      };
    },
    template: \`
<div style="padding:32px;min-height:260px">
  <div style="display:flex;gap:8px;align-items:center;margin-bottom:12px">
    <button @click="count++" style="padding:6px 12px">+ select one</button>
    <button @click="count = Math.max(0, count - 1)" style="padding:6px 12px">- deselect one</button>
    <span style="font-size:14px">{{ last }}</span>
  </div>
  <FusionSelectionBar :count="count" :actions="actions" position="sticky" @action="onAction" @clear="count = 0; last = 'cleared'" />
</div>\`
  })
}`,...p.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  name: "With the tree table (tick tasks, the bar appears)",
  parameters: {
    layout: "padded"
  },
  render: () => ({
    components: {
      FusionSelectionBar,
      FusionTreeTable,
      FusionBadge
    },
    setup() {
      const columns = [{
        key: "name",
        label: "Task",
        minWidth: 280
      }, {
        key: "status",
        label: "Status",
        width: 160
      }, {
        key: "due",
        label: "Due",
        width: 110
      }];
      const rows = [{
        id: 1,
        name: "Navigation shell",
        status: "Internal QC",
        due: "24 Nov"
      }, {
        id: 2,
        name: "Cashier screen",
        status: "Internal QC",
        due: "1 Dec",
        children: [{
          id: 21,
          name: "Basket",
          status: "Internal QC",
          due: "28 Nov"
        }, {
          id: 22,
          name: "Payment screen",
          status: "Working on it",
          due: "1 Dec"
        }]
      }, {
        id: 3,
        name: "API contract",
        status: "Backlog",
        due: "19 Nov"
      }, {
        id: 4,
        name: "Launch checklist",
        status: "Backlog",
        due: "12 Dec"
      }];
      const selected = ref<(string | number)[]>([]);
      const note = ref("");
      return {
        columns,
        rows,
        selected,
        note,
        actions,
        onAction: (k: string) => note.value = \`\${k}: \${selected.value.join(", ")}\`
      };
    },
    template: \`
<div style="height:420px;overflow:auto;position:relative">
  <p style="margin:0 0 8px;font-size:13px">{{ note || 'Tick a task' }}</p>
  <FusionTreeTable :columns="columns" :rows="rows" v-model:selectedIds="selected" :draggableRows="false">
    <template #cell-status="{ value }"><FusionBadge :text="value" size="sm" variant="subtle" /></template>
  </FusionTreeTable>
  <FusionSelectionBar :count="selected.length" :actions="actions" position="sticky" @action="onAction" @clear="selected = []" />
</div>\`
  })
}`,...m.parameters?.docs?.source}}};const he=["Default","ManyActions","DisabledAndLoading","AppearsWhenSelected","WithTreeTable"];export{p as AppearsWhenSelected,c as Default,u as DisabledAndLoading,d as ManyActions,m as WithTreeTable,he as __namedExportsOrder,ge as default};
