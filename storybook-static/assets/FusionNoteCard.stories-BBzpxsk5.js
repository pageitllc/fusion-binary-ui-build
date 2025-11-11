import{d as v,r as f,c as p,b as o,a as y,t as u,l,p as w,o as h,y as b}from"./iframe-o7SUGoga.js";import{F as k}from"./FuAvatar-CO6FnC2I.js";import{D as C}from"./DropdownMenu-BrLItLUF.js";import{F as N}from"./FusionActionButton-BJUvvBPP.js";import{E as x}from"./ellipsis-vertical-Bj6VV73G.js";import{_ as F}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{c}from"./createLucideIcon-D5kBsy5g.js";import"./preload-helper-Ct5FWWRu.js";/**
 * @license lucide-vue-next v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const D=c("share-2",[["circle",{cx:"18",cy:"5",r:"3",key:"gq8acd"}],["circle",{cx:"6",cy:"12",r:"3",key:"w7nqdw"}],["circle",{cx:"18",cy:"19",r:"3",key:"1xt0gg"}],["line",{x1:"8.59",x2:"15.42",y1:"13.51",y2:"17.49",key:"47mynk"}],["line",{x1:"15.41",x2:"8.59",y1:"6.51",y2:"10.49",key:"1n3mei"}]]);/**
 * @license lucide-vue-next v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const S=c("square-pen",[["path",{d:"M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7",key:"1m0v6g"}],["path",{d:"M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z",key:"ohrbg2"}]]);/**
 * @license lucide-vue-next v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const A=c("trash-2",[["path",{d:"M10 11v6",key:"nco0om"}],["path",{d:"M14 11v6",key:"outv1u"}],["path",{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6",key:"miytrc"}],["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2",key:"e791ji"}]]),E={class:"fu-note-header"},O={class:"fu-note-title"},q=["innerHTML"],M={class:"fu-note-actions"},T={class:"fu-note-footer"},V={class:"fu-note-owner"},L={class:"fu-note-date"},g=v({__name:"FusionNoteCard",props:{id:{},title:{},content:{default:""},ownerName:{},ownerAvatar:{default:null},date:{},actions:{default:()=>[]}},emits:["open"],setup(e){const a=f(!1);return(i,n)=>(h(),p("div",{class:"fu-note-card",onMouseenter:n[0]||(n[0]=d=>a.value=!0),onMouseleave:n[1]||(n[1]=d=>a.value=!1),onClick:n[2]||(n[2]=d=>i.$emit("open",e.id))},[o("div",E,[o("div",O,[o("h4",null,u(e.title),1),e.content?(h(),p("div",{key:0,class:"fu-note-content",innerHTML:e.content},null,8,q)):y("",!0)]),o("div",M,[l(C,{actions:e.actions,align:"right"},{trigger:w(()=>[l(N,{icon:b(x),variant:"ghost",size:"sm",class:"fu-action-trigger"},null,8,["icon"])]),_:1},8,["actions"])])]),o("div",T,[o("div",V,[l(k,{src:e.ownerAvatar||void 0,name:e.ownerName,alt:e.ownerName,size:"xs","show-status":!1},null,8,["src","name","alt"])]),o("span",L,u(e.date),1)])],32))}}),m=F(g,[["__scopeId","data-v-eb334bae"]]);g.__docgenInfo={exportName:"default",displayName:"FusionNoteCard",description:"",tags:{},props:[{name:"id",required:!0,type:{name:"union",elements:[{name:"string"},{name:"number"}]}},{name:"title",required:!0,type:{name:"string"}},{name:"content",required:!1,type:{name:"string"},defaultValue:{func:!1,value:'""'}},{name:"ownerName",required:!0,type:{name:"string"}},{name:"ownerAvatar",required:!1,type:{name:"union",elements:[{name:"string"},{name:"null"}]},defaultValue:{func:!1,value:"null"}},{name:"date",required:!0,type:{name:"string"}},{name:"actions",required:!1,type:{name:"Array",elements:[{name:"Action"}]},defaultValue:{func:!1,value:"() => []"}}],events:[{name:"open",type:{names:["union"],elements:[{name:"string"},{name:"number"}]}}],sourceFiles:["/Users/tommys/Documents/Skkido/Fusion-binary-ui/src/components/items/notes/FusionNoteCard.vue"]};const G={title:"components/items/FusionNoteCard",component:m,tags:["autodocs"],parameters:{docs:{description:{component:`
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
<div class="fu-note-grid">
  <FusionNoteCard v-for="note in notes" :key="note.id" v-bind="note" />
</div>
\`\`\`
        `}}}},r={render:e=>({components:{FusionNoteCard:m},setup(){return{args:e,handleOpen:i=>{console.log("Note opened:",i)}}},template:`
      <div style="max-width: 280px; margin: auto; padding: 1.5rem;">
        <FusionNoteCard v-bind="args" @open="handleOpen" />
      </div>
    `}),args:{id:1,title:"Project Overview",content:"<p>Quick summary of the ongoing sprint goals and deliverables.</p>",ownerName:"Administrator",date:"2 days ago"},parameters:{docs:{description:{story:"A minimal note card showing title, content preview, author, and date. Clicking anywhere emits the `open` event."}}}},s={render:e=>({components:{FusionNoteCard:m},setup(){return{args:e,handleOpen:t=>console.log("Note opened:",t),handleEdit:t=>console.log("Edit note:",t),handleDelete:t=>console.log("Delete note:",t),handleShare:t=>console.log("Share note:",t)}},template:`
      <div style="max-width: 280px; margin: auto; padding: 1.5rem;">
        <FusionNoteCard v-bind="args" @open="handleOpen" />
      </div>
    `}),args:{id:2,title:"UI Feedback – Client Review",content:"<p>Client approved the main design but requested smaller button text and improved spacing for better readability.</p>",ownerName:"Lara Goodwin",ownerAvatar:"https://randomuser.me/api/portraits/women/45.jpg",date:"Yesterday",actions:[{label:"Edit",icon:S,onClick:()=>console.log("Edit clicked")},{label:"Delete",icon:A,onClick:()=>console.log("Delete clicked")},{label:"Share",icon:D,onClick:()=>console.log("Share clicked")}]},parameters:{docs:{description:{story:"This variant includes an action dropdown for managing the note — useful in admin or team collaboration views."}}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};const U=["Default","WithActions"];export{r as Default,s as WithActions,U as __namedExportsOrder,G as default};
