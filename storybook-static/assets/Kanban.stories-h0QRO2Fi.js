import{s as j,r as v,m as P,a as c,g as a,f as U,F as S,h as w,t as g,u as B,e as C,j as p,l as E,n as W,y as A}from"./iframe-4anGkjM3.js";import{_ as R}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./preload-helper-Ct5FWWRu.js";const G={class:"fu-kanban scrollbar__control customScrollBar"},H=["draggable","onDragstart","onDrop"],Q={class:"fu-kanban__column-header"},X={class:"flex flex--center flex--space"},Y={class:"fu-kanban__column-title"},Z=["title"],ee={class:"fu-kanban__header-right"},te=["title","onClick"],ne={class:"flex flex--center flex--gap-sm"},oe={class:"fu-kanban__count"},ae={key:0,class:"fu-kanban__edit-body"},de=["onDragover","onDrop"],le=["onDragstart","onDrop","onClick"],se={class:"fu-kanban__card-header"},re={class:"fu-kanban__card-body"},ie={key:0,class:"fu-kanban__empty"},me=["onClick"],$=j({__name:"Kanban",props:{columns:{},editMode:{type:Boolean},addItemButtonText:{},addColumnButtonText:{},noItemtext:{}},emits:["update:columns","update:items","card-click","add-item"],setup(s,{emit:b}){const i=s,d=b,r=i.addItemButtonText||"+ Add Item",z=i.addColumnButtonText||"+ Add Stage",l=v(JSON.parse(JSON.stringify(i.columns||[]))),k=v(null),I=v(null),f=v(null);P(()=>i.columns,t=>{l.value=JSON.parse(JSON.stringify(t))},{deep:!0});function N(t,n){k.value={fromColumnId:t,item:n}}function F(t){f.value=t}function L(){f.value=null}function D(t,n){const e=k.value;if(!e)return;const m=l.value.find(u=>u.id===e.fromColumnId),o=l.value.find(u=>u.id===t);!m||!o||(m.items=m.items.filter(u=>u.id!==e.item.id),n===null?o.items.push(e.item):o.items.splice(n,0,e.item),d("update:items",l.value),k.value=null,f.value=null)}function O(t){i.editMode&&(I.value=t)}function q(t){if(!i.editMode)return;const n=I.value;if(n===null||n===t)return;const e=[...l.value],[m]=e.splice(n,1);e.splice(t,0,m),l.value=e.map((o,u)=>({...o,position:u+1})),d("update:columns",l.value),I.value=null}function J(){const t={id:`col-${l.value.length+1}`,title:`Stage ${l.value.length+1}`,color:"#8B5CF6",position:l.value.length+1,items:[]};l.value.push(t),d("update:columns",l.value)}function K(t,n){d("add-item",{column:t,index:n})}function V(t,n){d("card-click",{id:t.id,item:t,column:n})}return(t,n)=>(p(),c("div",G,[a("div",{class:"fu-kanban__columns",onDragover:n[1]||(n[1]=C(()=>{},["prevent"]))},[(p(!0),c(S,null,w(l.value,(e,m)=>(p(),c("div",{key:e.id,class:E(["fu-kanban__column",{"fu-kanban__column--drag":s.editMode}]),draggable:s.editMode,onDragstart:o=>O(m),onDrop:o=>q(m),onDragover:n[0]||(n[0]=C(()=>{},["prevent"]))},[a("header",Q,[a("div",X,[a("div",Y,[a("span",{class:"fu-kanban__dot",style:W({background:e.color||"#9ca3af"})},null,4),a("span",{class:"fu-kanban__column-name",title:e.title},g(e.title),9,Z)]),a("div",ee,[a("button",{class:"fu-kanban__add-item-btn",title:B(r),onClick:C(o=>K(e,m),["stop"])}," + ",8,te)])]),a("div",ne,[A(t.$slots,"column-header",{},void 0,!0),a("span",oe,g(e.items.length),1)])]),s.editMode?(p(),c("div",ae,[A(t.$slots,"edit-column",{column:e,index:m},void 0,!0)])):(p(),c(S,{key:1},[a("div",{class:E(["fu-kanban__cards scrollbar__control customScrollBar",{"fu-kanban__cards--hover":f.value===e.id}]),onDragover:C(o=>F(e.id),["prevent"]),onDragleave:L,onDrop:o=>D(e.id,null)},[(p(!0),c(S,null,w(e.items,(o,u)=>(p(),c("div",{key:o.id,class:"fu-kanban__card",draggable:"true",onDragstart:M=>N(e.id,o),onDrop:M=>D(e.id,u),onClick:M=>V(o,e)},[a("header",se,[a("strong",null,g(o.title),1)]),a("div",re,[A(t.$slots,"card-body",{item:o,column:e},void 0,!0)])],40,le))),128)),e.items.length?U("",!0):(p(),c("div",ie,g(s.noItemtext),1))],42,de),a("button",{class:"fu-kanban__add-card",onClick:o=>K(e,m)},g(B(r)),9,me)],64))],42,H))),128)),s.editMode?(p(),c("div",{key:0,class:"fu-kanban__add-column",onClick:J},g(B(z)),1)):U("",!0)],32)]))}}),_=R($,[["__scopeId","data-v-11abb07b"]]);$.__docgenInfo={exportName:"default",displayName:"Kanban",description:"",tags:{},props:[{name:"columns",required:!0,type:{name:"Array",elements:[{name:"KanbanColumn"}]}},{name:"editMode",required:!1,type:{name:"boolean"}},{name:"addItemButtonText",required:!1,type:{name:"string"}},{name:"addColumnButtonText",required:!1,type:{name:"string"}},{name:"noItemtext",required:!1,type:{name:"string"}}],events:[{name:"update:columns",type:{names:["Array"],elements:[{name:"KanbanColumn"}]}},{name:"update:items",type:{names:["Array"],elements:[{name:"KanbanColumn"}]}},{name:"card-click",type:{names:["{ id: string; item: KanbanItem; column: KanbanColumn }"]}},{name:"add-item",type:{names:["{ column: KanbanColumn; index: number }"]}}],slots:[{name:"column-header"},{name:"edit-column",scoped:!0,bindings:[{name:"column",title:"binding"},{name:"index",title:"binding"}]},{name:"card-body",scoped:!0,bindings:[{name:"item",title:"binding"},{name:"column",title:"binding"}]}],sourceFiles:["/Users/xavier/Documents/Websites/Skkido/Fusion-binary-ui/src/components/kanban/Kanban.vue"]};const ge={title:"Components/Kanban",component:_,tags:["autodocs"],argTypes:{columns:{control:"object",description:"List of Kanban columns containing cards (items)."},editMode:{control:"boolean",description:"Toggles between normal and edit mode (column reorder + editing)."},addItemButtonText:{control:"text",description:"Custom text for the add item button at the bottom of each column.",defaultValue:"+ Add Item"},addColumnButtonText:{control:"text",description:"Custom text for the add stage button in edit mode.",defaultValue:"+ Add Stage"}},parameters:{docs:{description:{component:`
The **Kanban** component provides a modular board interface for visualizing stages and items.
It supports:

- **Drag-and-drop cards** between columns  
- **Edit Mode** for reordering columns and editing stage details  
- **Custom button text** for both "Add Item" and "Add Stage" buttons  
- **Custom card body slots** for flexible display  
- **Events** for column/item updates and adding new items  

This component is useful for deal pipelines, project boards, recruitment stages, or any structured workflow.

### Props
| Prop | Type | Default | Description |
|------|------|----------|-------------|
| \`columns\` | \`KanbanColumn[]\` | — | Array of column data including items. |
| \`editMode\` | \`boolean\` | false | Enables editing and reordering of columns. |
| \`addItemButtonText\` | \`string\` | "+ Add Item" | Text for the add-item button at the bottom of each column. |
| \`addColumnButtonText\` | \`string\` | "+ Add Stage" | Text for the add-stage button shown in edit mode. |

### Key Events
| Event | Payload | Description |
|--------|----------|-------------|
| \`update:columns\` | \`KanbanColumn[]\` | Fired when columns are reordered or added. |
| \`update:items\` | \`KanbanColumn[]\` | Fired when cards are moved between columns. |
| \`card-click\` | \`{ item, column }\` | Fired when a card is clicked. |
| \`add-item\` | \`{ column, index }\` | Fired when the user presses the **Add Item** button on a column. |

### Slots
| Slot | Description |
|------|--------------|
| \`#card-body="{ item, column }"\` | Custom content for each card body. |
| \`#edit-column="{ column, index }"\` | Custom editing controls for each column when in edit mode. |

---

#### Example Usage

\`\`\`vue
<Kanban
  :columns="columns"
  :edit-mode="true"
  add-item-button-text="+ Add Deal"
  add-column-button-text="+ Add Stage"
  @update:columns="onUpdateColumns"
  @update:items="onUpdateItems"
  @add-item="onAddItem"
>
  <template #card-body="{ item, column }">
    <div>
      <p>{{ item.title }}</p>
      <small>Stage: {{ column.title }}</small>
    </div>
  </template>
</Kanban>
\`\`\`
        `}}}},T=[{id:"1",title:"New Leads",color:"#60A5FA",position:1,items:[{id:"a1",title:"Lead from Website",position:1},{id:"a2",title:"Referral: John Smith",position:2}]},{id:"2",title:"Contacted",color:"#8B5CF6",position:2,items:[{id:"b1",title:"Agency Deal - Follow up",position:1},{id:"b2",title:"Social Ad Lead",position:2}]},{id:"3",title:"Negotiation",color:"#F59E0B",position:3,items:[{id:"c1",title:"Dean & Co Estate",position:1}]}],h={args:{columns:T,editMode:!1,addItemButtonText:"+ Add Deal",addColumnButtonText:"+ Add Stage"},render:s=>({components:{Kanban:_},setup(){return{args:s,handleUpdateColumns:r=>{console.log("Updated Columns:",r)},handleUpdateItems:r=>{console.log("Items Updated:",r)},handleCardClick:r=>{console.log("Card Clicked:",r)}}},template:`
      <div style="padding: 2rem; background: #f9fafb; min-height: 100vh;">
        <Kanban
          :columns="args.columns"
          :edit-mode="args.editMode"
          :add-item-button-text="args.addItemButtonText"
          :add-column-button-text="args.addColumnButtonText"
          @update:columns="handleUpdateColumns"
          @update:items="handleUpdateItems"
          @card-click="handleCardClick"
        >
          <!-- Custom card body slot -->
          <template #card-body="{ item, column }">
            <div style="font-size: 0.85rem; color: var(--fu-color-text);">
              <p style="margin: 0;">{{ item.title }}</p>
              <small style="color: #6b7280;">Stage: {{ column.title }}</small>
            </div>
          </template>
        </Kanban>
      </div>
    `})},x={args:{columns:T,editMode:!0,addItemButtonText:"+ Add Listing",addColumnButtonText:"+ Add New Stage"},render:s=>({components:{Kanban:_},setup(){return{args:s,handleUpdateColumns:d=>{console.log("Columns reordered:",d.map(r=>r.title))},deleteStage:(d,r)=>{r.splice(d,1),console.log("Stage deleted:",d)}}},template:`
      <div style="padding: 2rem; background: #f3f4f6; min-height: 100vh;">
        <Kanban
          :columns="args.columns"
          :edit-mode="args.editMode"
          :add-item-button-text="args.addItemButtonText"
          :add-column-button-text="args.addColumnButtonText"
          @update:columns="handleUpdateColumns"
        >
          <!-- Custom Edit Column Slot -->
          <template #edit-column="{ column, index }">
            <div style="display:flex; flex-direction:column; gap:0.5rem;">
              <label style="font-size:0.8rem; color:#6b7280;">Stage Name</label>
              <input v-model="column.title" style="padding:0.3rem 0.5rem; border:1px solid #d1d5db; border-radius:4px; font-size:0.85rem;" />

              <label style="font-size:0.8rem; color:#6b7280;">Color</label>
              <input type="color" v-model="column.color" />

              <button
                @click="deleteStage(index, args.columns)"
                style="margin-top:0.5rem; padding:0.3rem 0.5rem; background:#ef4444; color:white; border:none; border-radius:4px; font-size:0.8rem;"
              >
                Delete Stage
              </button>
            </div>
          </template>
        </Kanban>
      </div>
    `})},y={args:{columns:T,editMode:!1,addItemButtonText:"+ Add Deal",addColumnButtonText:"+ Add Stage"},render:s=>({components:{Kanban:_},setup(){return{args:s,handleAddItem:({column:i,index:d})=>{console.log("Add item triggered for column:",i.title,"at index:",d),alert(`Opening modal for stage: ${i.title}`)}}},template:`
      <div style="padding: 2rem; background: #f9fafb;">
        <Kanban
          :columns="args.columns"
          :edit-mode="args.editMode"
          :add-item-button-text="args.addItemButtonText"
          :add-column-button-text="args.addColumnButtonText"
          @add-item="handleAddItem"
        >
          <template #card-body="{ item, column }">
            <div style="font-size: 0.85rem; color: var(--fu-color-text);">
              <p style="margin: 0;"><strong>{{ item.title }}</strong></p>
              <small style="color: #6b7280;">Stage: {{ column.title }}</small>
            </div>
          </template>
        </Kanban>
      </div>
    `})};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    columns: sampleColumns,
    editMode: false,
    addItemButtonText: "+ Add Deal",
    addColumnButtonText: "+ Add Stage"
  },
  render: args => ({
    components: {
      Kanban
    },
    setup() {
      const handleUpdateColumns = (cols: KanbanColumn[]) => {
        console.log("Updated Columns:", cols);
      };
      const handleUpdateItems = (cols: KanbanColumn[]) => {
        console.log("Items Updated:", cols);
      };
      const handleCardClick = (payload: any) => {
        console.log("Card Clicked:", payload);
      };
      return {
        args,
        handleUpdateColumns,
        handleUpdateItems,
        handleCardClick
      };
    },
    template: \`
      <div style="padding: 2rem; background: #f9fafb; min-height: 100vh;">
        <Kanban
          :columns="args.columns"
          :edit-mode="args.editMode"
          :add-item-button-text="args.addItemButtonText"
          :add-column-button-text="args.addColumnButtonText"
          @update:columns="handleUpdateColumns"
          @update:items="handleUpdateItems"
          @card-click="handleCardClick"
        >
          <!-- Custom card body slot -->
          <template #card-body="{ item, column }">
            <div style="font-size: 0.85rem; color: var(--fu-color-text);">
              <p style="margin: 0;">{{ item.title }}</p>
              <small style="color: #6b7280;">Stage: {{ column.title }}</small>
            </div>
          </template>
        </Kanban>
      </div>
    \`
  })
}`,...h.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    columns: sampleColumns,
    editMode: true,
    addItemButtonText: "+ Add Listing",
    addColumnButtonText: "+ Add New Stage"
  },
  render: args => ({
    components: {
      Kanban
    },
    setup() {
      const handleUpdateColumns = (cols: KanbanColumn[]) => {
        console.log("Columns reordered:", cols.map(c => c.title));
      };
      const deleteStage = (index: number, cols: KanbanColumn[]) => {
        cols.splice(index, 1);
        console.log("Stage deleted:", index);
      };
      return {
        args,
        handleUpdateColumns,
        deleteStage
      };
    },
    template: \`
      <div style="padding: 2rem; background: #f3f4f6; min-height: 100vh;">
        <Kanban
          :columns="args.columns"
          :edit-mode="args.editMode"
          :add-item-button-text="args.addItemButtonText"
          :add-column-button-text="args.addColumnButtonText"
          @update:columns="handleUpdateColumns"
        >
          <!-- Custom Edit Column Slot -->
          <template #edit-column="{ column, index }">
            <div style="display:flex; flex-direction:column; gap:0.5rem;">
              <label style="font-size:0.8rem; color:#6b7280;">Stage Name</label>
              <input v-model="column.title" style="padding:0.3rem 0.5rem; border:1px solid #d1d5db; border-radius:4px; font-size:0.85rem;" />

              <label style="font-size:0.8rem; color:#6b7280;">Color</label>
              <input type="color" v-model="column.color" />

              <button
                @click="deleteStage(index, args.columns)"
                style="margin-top:0.5rem; padding:0.3rem 0.5rem; background:#ef4444; color:white; border:none; border-radius:4px; font-size:0.8rem;"
              >
                Delete Stage
              </button>
            </div>
          </template>
        </Kanban>
      </div>
    \`
  })
}`,...x.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    columns: sampleColumns,
    editMode: false,
    addItemButtonText: "+ Add Deal",
    addColumnButtonText: "+ Add Stage"
  },
  render: args => ({
    components: {
      Kanban
    },
    setup() {
      const handleAddItem = ({
        column,
        index
      }: any) => {
        console.log("Add item triggered for column:", column.title, "at index:", index);
        alert(\`Opening modal for stage: \${column.title}\`);
      };
      return {
        args,
        handleAddItem
      };
    },
    template: \`
      <div style="padding: 2rem; background: #f9fafb;">
        <Kanban
          :columns="args.columns"
          :edit-mode="args.editMode"
          :add-item-button-text="args.addItemButtonText"
          :add-column-button-text="args.addColumnButtonText"
          @add-item="handleAddItem"
        >
          <template #card-body="{ item, column }">
            <div style="font-size: 0.85rem; color: var(--fu-color-text);">
              <p style="margin: 0;"><strong>{{ item.title }}</strong></p>
              <small style="color: #6b7280;">Stage: {{ column.title }}</small>
            </div>
          </template>
        </Kanban>
      </div>
    \`
  })
}`,...y.parameters?.docs?.source}}};const be=["Default","EditMode","AddItemEvent"];export{y as AddItemEvent,h as Default,x as EditMode,be as __namedExportsOrder,ge as default};
