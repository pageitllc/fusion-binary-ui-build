import{s as h,r as v,a as m,g as o,f,t as p,b as l,w,j as u,u as y}from"./iframe-BeZJQ65s.js";import{F as b}from"./FuAvatar-tORvbocF.js";import{D as k}from"./DropdownMenu-Bi3l5qmL.js";import{F as C}from"./FusionActionButton-DxSYCmZ-.js";import{E as N}from"./ellipsis-vertical-Db7OGby1.js";import{_ as x}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{S as F}from"./square-pen-BtmaaVMn.js";import{T as S}from"./trash-2-BbDLqBqo.js";import{c as D}from"./createLucideIcon-7ncFRN9y.js";import"./preload-helper-Ct5FWWRu.js";/**
 * @license lucide-vue-next v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const A=D("share-2",[["circle",{cx:"18",cy:"5",r:"3",key:"gq8acd"}],["circle",{cx:"6",cy:"12",r:"3",key:"w7nqdw"}],["circle",{cx:"18",cy:"19",r:"3",key:"1xt0gg"}],["line",{x1:"8.59",x2:"15.42",y1:"13.51",y2:"17.49",key:"47mynk"}],["line",{x1:"15.41",x2:"8.59",y1:"6.51",y2:"10.49",key:"1n3mei"}]]),E={class:"fu-note-header"},O={class:"fu-note-title"},q=["innerHTML"],T={class:"fu-note-actions"},L={class:"fu-note-footer"},I={class:"fu-note-owner"},j={class:"fu-note-date"},g=h({__name:"FusionNoteCard",props:{id:{},title:{},content:{default:""},ownerName:{},ownerAvatar:{default:null},date:{},actions:{default:()=>[]}},emits:["open"],setup(e){const a=v(!1);return(i,n)=>(u(),m("div",{class:"fu-note-card",onMouseenter:n[0]||(n[0]=d=>a.value=!0),onMouseleave:n[1]||(n[1]=d=>a.value=!1),onClick:n[2]||(n[2]=d=>i.$emit("open",e.id))},[o("div",E,[o("div",O,[o("h4",null,p(e.title),1),e.content?(u(),m("div",{key:0,class:"fu-note-content",innerHTML:e.content},null,8,q)):f("",!0)]),o("div",T,[l(k,{actions:e.actions,align:"right"},{trigger:w(()=>[l(C,{icon:y(N),variant:"ghost",size:"sm",class:"fu-action-trigger"},null,8,["icon"])]),_:1},8,["actions"])])]),o("div",L,[o("div",I,[l(b,{src:e.ownerAvatar||void 0,name:e.ownerName,alt:e.ownerName,size:"xs","show-status":!1},null,8,["src","name","alt"])]),o("span",j,p(e.date),1)])],32))}}),c=x(g,[["__scopeId","data-v-eb334bae"]]);g.__docgenInfo={exportName:"default",displayName:"FusionNoteCard",description:"",tags:{},props:[{name:"id",required:!0,type:{name:"union",elements:[{name:"string"},{name:"number"}]}},{name:"title",required:!0,type:{name:"string"}},{name:"content",required:!1,type:{name:"string"},defaultValue:{func:!1,value:'""'}},{name:"ownerName",required:!0,type:{name:"string"}},{name:"ownerAvatar",required:!1,type:{name:"union",elements:[{name:"string"},{name:"null"}]},defaultValue:{func:!1,value:"null"}},{name:"date",required:!0,type:{name:"string"}},{name:"actions",required:!1,type:{name:"Array",elements:[{name:"Action"}]},defaultValue:{func:!1,value:"() => []"}}],events:[{name:"open",type:{names:["union"],elements:[{name:"string"},{name:"number"}]}}],sourceFiles:["/Users/xavier/Documents/Websites/Skkido/Fusion-binary-ui/src/components/items/notes/FusionNoteCard.vue"]};const $={title:"components/FusionNoteCard",component:c,tags:["autodocs"],parameters:{docs:{description:{component:`
The **FusionNoteCard** component displays a compact note preview — typically used inside dashboards, project spaces, or collaborative work areas.

It shows a **title**, **short content preview**, and **owner information**.  
A contextual **action dropdown** (Edit, Delete, Share, etc.) appears when hovering.

---

### Features
- Clickable card that emits an **open** event.
- Automatic truncation for long titles and WYSIWYG content.
- Optional dropdown actions for editing, deleting, or sharing notes.
- Smooth hover effects with subtle shadows and transitions.

---

###  Props

| Prop | Type | Default | Description |
|------|------|----------|-------------|
| \`id\` | \`string | number\` | — | Unique identifier for the note. |
| \`title\` | \`string\` | — | Note title (auto-truncated if too long). |
| \`content\` | \`string\` | \`""\` | HTML or text snippet (already sanitized). |
| \`ownerName\` | \`string\` | — | Display name of the note owner. |
| \`ownerAvatar\` | \`string | null\` | \`null\` | Optional avatar image for the owner. |
| \`date\` | \`string\` | — | Relative time or formatted date. |
| \`actions\` | \`{ label: string; icon?: Component; onClick?: () => void }[]\` | \`[]\` | List of dropdown actions. |

---

### Events

| Event | Payload | Description |
|--------|----------|-------------|
| \`open\` | \`{ id: string | number }\` | Fired when a note card is clicked. |

---

###  Example Grid Layout
You can loop multiple note cards in a responsive grid:
\`\`\`vue


<script lang="ts" setup>
const actions = [
  {
    "label": "Edit"
  },
  {
    "label": "Delete"
  },
  {
    "label": "Share"
  }
];
<\/script>

<template>

<div class="fu-note-grid">
<FusionNoteCard :actions="actions" content="<p>Client approved the main design but requested smaller button text and improved spacing for better readability.</p>" date="Yesterday" :id="2" ownerAvatar="https://randomuser.me/api/portraits/women/45.jpg" ownerName="Lara Goodwin" title="UI Feedback – Client Review" />
</div>
  
</template>

\`\`\`
        `}}}},r={render:e=>({components:{FusionNoteCard:c},setup(){return{args:e,handleOpen:i=>{console.log("Note opened:",i)}}},template:`
      <div style="max-width: 280px; margin: auto; padding: 1.5rem;">
        <FusionNoteCard v-bind="args" @open="handleOpen" />
      </div>
    `}),args:{id:1,title:"Project Overview",content:"<p>Quick summary of the ongoing sprint goals and deliverables.</p>",ownerName:"Administrator",date:"2 days ago"},parameters:{docs:{description:{story:"A minimal note card showing title, content preview, author, and date. Clicking anywhere emits the `open` event."}}}},s={render:e=>({components:{FusionNoteCard:c},setup(){return{args:e,handleOpen:t=>console.log("Note opened:",t),handleEdit:t=>console.log("Edit note:",t),handleDelete:t=>console.log("Delete note:",t),handleShare:t=>console.log("Share note:",t)}},template:`
      <div style="max-width: 280px; margin: auto; padding: 1.5rem;">
        <FusionNoteCard v-bind="args" @open="handleOpen" />
      </div>
    `}),args:{id:2,title:"UI Feedback – Client Review",content:"<p>Client approved the main design but requested smaller button text and improved spacing for better readability.</p>",ownerName:"Lara Goodwin",ownerAvatar:"https://randomuser.me/api/portraits/women/45.jpg",date:"Yesterday",actions:[{label:"Edit",icon:F,onClick:()=>console.log("Edit clicked")},{label:"Delete",icon:S,onClick:()=>console.log("Delete clicked")},{label:"Share",icon:A,onClick:()=>console.log("Share clicked")}]},parameters:{docs:{description:{story:"This variant includes an action dropdown for managing the note — useful in admin or team collaboration views."}}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: args => ({
    components: {
      FusionNoteCard
    },
    setup() {
      const handleOpen = (id: number) => {
        console.log("Note opened:", id);
      };
      return {
        args,
        handleOpen
      };
    },
    template: \`
      <div style="max-width: 280px; margin: auto; padding: 1.5rem;">
        <FusionNoteCard v-bind="args" @open="handleOpen" />
      </div>
    \`
  }),
  args: {
    id: 1,
    title: "Project Overview",
    content: "<p>Quick summary of the ongoing sprint goals and deliverables.</p>",
    ownerName: "Administrator",
    date: "2 days ago"
  },
  parameters: {
    docs: {
      description: {
        story: "A minimal note card showing title, content preview, author, and date. Clicking anywhere emits the \`open\` event."
      }
    }
  }
}`,...r.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: args => ({
    components: {
      FusionNoteCard
    },
    setup() {
      const handleOpen = (id: number) => console.log("Note opened:", id);
      const handleEdit = (id: number) => console.log("Edit note:", id);
      const handleDelete = (id: number) => console.log("Delete note:", id);
      const handleShare = (id: number) => console.log("Share note:", id);
      return {
        args,
        handleOpen,
        handleEdit,
        handleDelete,
        handleShare
      };
    },
    template: \`
      <div style="max-width: 280px; margin: auto; padding: 1.5rem;">
        <FusionNoteCard v-bind="args" @open="handleOpen" />
      </div>
    \`
  }),
  args: {
    id: 2,
    title: "UI Feedback – Client Review",
    content: "<p>Client approved the main design but requested smaller button text and improved spacing for better readability.</p>",
    ownerName: "Lara Goodwin",
    ownerAvatar: "https://randomuser.me/api/portraits/women/45.jpg",
    date: "Yesterday",
    actions: [{
      label: "Edit",
      icon: SquarePen,
      onClick: () => console.log("Edit clicked")
    }, {
      label: "Delete",
      icon: Trash2,
      onClick: () => console.log("Delete clicked")
    }, {
      label: "Share",
      icon: Share2,
      onClick: () => console.log("Share clicked")
    }]
  },
  parameters: {
    docs: {
      description: {
        story: "This variant includes an action dropdown for managing the note — useful in admin or team collaboration views."
      }
    }
  }
}`,...s.parameters?.docs?.source}}};const z=["Default","WithActions"];export{r as Default,s as WithActions,z as __namedExportsOrder,$ as default};
