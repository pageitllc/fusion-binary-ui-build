import{s as h,r as v,a as m,g as o,f,t as p,b as l,w,j as u,u as b}from"./iframe-4anGkjM3.js";import{F as y}from"./FuAvatar-ItnBA4Ru.js";import{D as C}from"./DropdownMenu-DWNHW_9w.js";import{F as N}from"./FusionActionButton-DOSunp5G.js";import{E as k}from"./ellipsis-vertical-BjiTTk2z.js";import{_ as F}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{S}from"./square-pen-BnMzxydQ.js";import{T as D}from"./trash-2-B6Y63mvG.js";import{S as x}from"./share-2-BqZbIxWK.js";import"./preload-helper-Ct5FWWRu.js";import"./createLucideIcon-MAVkZFkt.js";const A={class:"fu-note-header"},E={class:"fu-note-title"},O=["innerHTML"],q={class:"fu-note-actions"},T={class:"fu-note-footer"},L={class:"fu-note-owner"},j={class:"fu-note-date"},g=h({__name:"FusionNoteCard",props:{id:{},title:{},content:{default:""},ownerName:{},ownerAvatar:{default:null},date:{},actions:{default:()=>[]}},emits:["open"],setup(e){const a=v(!1);return(i,n)=>(u(),m("div",{class:"fu-note-card",onMouseenter:n[0]||(n[0]=d=>a.value=!0),onMouseleave:n[1]||(n[1]=d=>a.value=!1),onClick:n[2]||(n[2]=d=>i.$emit("open",e.id))},[o("div",A,[o("div",E,[o("h4",null,p(e.title),1),e.content?(u(),m("div",{key:0,class:"fu-note-content",innerHTML:e.content},null,8,O)):f("",!0)]),o("div",q,[l(C,{actions:e.actions,align:"right"},{trigger:w(()=>[l(N,{icon:b(k),variant:"ghost",size:"sm",class:"fu-action-trigger"},null,8,["icon"])]),_:1},8,["actions"])])]),o("div",T,[o("div",L,[l(y,{src:e.ownerAvatar||void 0,name:e.ownerName,alt:e.ownerName,size:"xs","show-status":!1},null,8,["src","name","alt"])]),o("span",j,p(e.date),1)])],32))}}),c=F(g,[["__scopeId","data-v-2819a085"]]);g.__docgenInfo={exportName:"default",displayName:"FusionNoteCard",description:"",tags:{},props:[{name:"id",required:!0,type:{name:"union",elements:[{name:"string"},{name:"number"}]}},{name:"title",required:!0,type:{name:"string"}},{name:"content",required:!1,type:{name:"string"},defaultValue:{func:!1,value:'""'}},{name:"ownerName",required:!0,type:{name:"string"}},{name:"ownerAvatar",required:!1,type:{name:"union",elements:[{name:"string"},{name:"null"}]},defaultValue:{func:!1,value:"null"}},{name:"date",required:!0,type:{name:"string"}},{name:"actions",required:!1,type:{name:"Array",elements:[{name:"Action"}]},defaultValue:{func:!1,value:"() => []"}}],events:[{name:"open",type:{names:["union"],elements:[{name:"string"},{name:"number"}]}}],sourceFiles:["/Users/xavier/Documents/Websites/Skkido/Fusion-binary-ui/src/components/items/notes/FusionNoteCard.vue"]};const $={title:"components/FusionNoteCard",component:c,tags:["autodocs"],parameters:{docs:{description:{component:`
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
    `}),args:{id:2,title:"UI Feedback – Client Review",content:"<p>Client approved the main design but requested smaller button text and improved spacing for better readability.</p>",ownerName:"Lara Goodwin",ownerAvatar:"https://randomuser.me/api/portraits/women/45.jpg",date:"Yesterday",actions:[{label:"Edit",icon:S,onClick:()=>console.log("Edit clicked")},{label:"Delete",icon:D,onClick:()=>console.log("Delete clicked")},{label:"Share",icon:x,onClick:()=>console.log("Share clicked")}]},parameters:{docs:{description:{story:"This variant includes an action dropdown for managing the note — useful in admin or team collaboration views."}}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
