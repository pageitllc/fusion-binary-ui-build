import{s as C,c as g,a as l,g as t,d as v,u as p,t as d,f as w,b as u,e as b,w as U,p as D,j as a}from"./iframe-4anGkjM3.js";import{F as E}from"./FuAvatar-ItnBA4Ru.js";import{D as F}from"./DropdownMenu-DWNHW_9w.js";import{F as z}from"./FusionActionButton-DOSunp5G.js";import{c as B}from"./createLucideIcon-MAVkZFkt.js";import{F as O}from"./file-text-DK81Ft0a.js";import{E as _}from"./ellipsis-vertical-BjiTTk2z.js";import{_ as M}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{S as V}from"./square-pen-BnMzxydQ.js";import{T as q}from"./trash-2-B6Y63mvG.js";import{S as T}from"./share-2-BqZbIxWK.js";import"./preload-helper-Ct5FWWRu.js";/**
 * @license lucide-vue-next v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const I=B("video",[["path",{d:"m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5",key:"ftymec"}],["rect",{x:"2",y:"6",width:"14",height:"12",rx:"2",key:"158x01"}]]),K={class:"fu-attachment-left flex flex--gap-md flex--align-center"},P={class:"fu-attachment-preview"},R=["src","alt"],j={class:"fu-attachment-info flex flex--column"},L={class:"fu-attachment-title"},W={class:"fu-attachment-meta"},J={class:"fu-attachment-right flex flex--align-center flex--gap-md"},$={class:"flex flex--column flex--align-center"},H={class:"fu-attachment-time"},A=C({__name:"FusionAttachment",props:{id:{},fileName:{},fileUrl:{},fileSize:{default:""},timestamp:{},userName:{},userAvatar:{default:null},actions:{default:()=>[]}},emits:["click"],setup(e,{emit:x}){const m=e,N=x;function h(){N("click",m.id)}const S=g(()=>/\.(png|jpe?g|gif|webp|svg)$/i.test(m.fileName)),y=g(()=>/\.(mp4|mov|avi|webm)$/i.test(m.fileName));return(G,f)=>(a(),l("div",{class:"fu-attachment-item",role:"button",tabindex:"0",onClick:h,onKeypress:D(h,["enter"])},[t("div",K,[t("div",P,[S.value?(a(),l("img",{key:0,src:e.fileUrl,alt:e.fileName,class:"fu-attachment-thumbnail"},null,8,R)):y.value?(a(),v(p(I),{key:1,class:"fu-attachment-icon",size:20})):(a(),v(p(O),{key:2,class:"fu-attachment-icon",size:20}))]),t("div",j,[t("span",L,d(e.fileName),1),t("span",W,d(e.fileSize),1)])]),t("div",J,[t("div",$,[u(E,{src:e.userAvatar||void 0,name:e.userName,alt:e.userName,size:"xs","show-status":!1},null,8,["src","name","alt"]),t("span",H,d(e.timestamp),1)]),e.actions?.length?(a(),l("div",{key:0,class:"fu-attachment-actions",onClick:f[0]||(f[0]=b(()=>{},["stop"]))},[u(F,{actions:e.actions,align:"right"},{trigger:U(()=>[u(z,{icon:p(_),variant:"ghost",size:"sm"},null,8,["icon"])]),_:1},8,["actions"])])):w("",!0)])],32))}}),k=M(A,[["__scopeId","data-v-c5d821de"]]);A.__docgenInfo={exportName:"default",displayName:"FusionAttachment",description:"",tags:{},props:[{name:"id",required:!0,type:{name:"union",elements:[{name:"string"},{name:"number"}]}},{name:"fileName",required:!0,type:{name:"string"}},{name:"fileUrl",required:!0,type:{name:"string"}},{name:"fileSize",required:!1,type:{name:"string"},defaultValue:{func:!1,value:'""'}},{name:"timestamp",required:!0,type:{name:"string"}},{name:"userName",required:!0,type:{name:"string"}},{name:"userAvatar",required:!1,type:{name:"union",elements:[{name:"string"},{name:"null"}]},defaultValue:{func:!1,value:"null"}},{name:"actions",required:!1,type:{name:"Array",elements:[{name:"Action"}]},defaultValue:{func:!1,value:"() => []"}}],events:[{name:"click",type:{names:["union"],elements:[{name:"string"},{name:"number"}]}}],sourceFiles:["/Users/xavier/Documents/Websites/Skkido/Fusion-binary-ui/src/components/items/attachments/FusionAttachment.vue"]};const re={title:"Components/FusionAttachment",component:k,tags:["autodocs"],parameters:{docs:{description:{component:`
The **FusionAttachment** component displays uploaded files (e.g. images, documents, or videos) in a consistent, task-style list item.  
It automatically detects file types based on the file extension and renders the appropriate preview or icon.  
Each attachment has a unique **\`id\`** and emits a **\`click\` event** with that id for use in modals, downloads, or preview actions.

It also supports an optional **actions dropdown** (three-dot menu) for contextual actions such as Edit, Delete, or Share.

---

### Example Usage

\`\`\`vue
<template>
  <FusionAttachment
    id="att_01"
    fileName="Project_Proposal.pdf"
    fileUrl="/files/Project_Proposal.pdf"
    fileSize="2.1 MB"
    timestamp="Today at 2:45 PM"
    userName="Nathan Caldwell"
    userAvatar="https://randomuser.me/api/portraits/men/22.jpg"
    :actions="actions"
    @click="handleAttachmentClick"
  />
</template>

<script setup>
import { SquarePen, Trash2, Share2 } from "lucide-vue-next";
import FusionAttachment from "@/components/attachment/FusionAttachment.vue";

const actions = [
  { label: "Edit", icon: SquarePen, onClick: () => console.log("Edit") },
  { label: "Delete", icon: Trash2, onClick: () => console.log("Delete") },
  { label: "Share", icon: Share2, onClick: () => console.log("Share") },
];

function handleAttachmentClick(id) {
  console.log("Attachment clicked:", id);
}
<\/script>
\`\`\`

---

### Actions Pattern

The \`actions\` prop accepts an array of:

\`\`\`ts
{
  label: string;
  icon?: Component;
  onClick?: () => void;
}
\`\`\`

- Actions appear as a three-dot dropdown on hover
- Clicking an action does NOT trigger the attachment click event
- Designed for contextual operations

---

### Notes
- Supports **image previews** for \`.jpg\`, \`.png\`, \`.jpeg\`, \`.gif\`.
- Displays **file icons** for documents like \`.pdf\`, \`.docx\`, \`.csv\`.
- Uses **video icons** for \`.mp4\`, \`.mov\`, and other video formats.
- Emits \`@click(id)\` when the user clicks an attachment.
- Supports contextual \`actions\` dropdown.
- Typically used in CRM notes, project files, or activity feeds.
        `}}},argTypes:{id:{control:"text",description:"Unique identifier for the attachment."},fileName:{control:"text",description:"Name of the attached file."},fileUrl:{control:"text",description:"URL or path of the attachment."},fileSize:{control:"text",description:"Human-readable file size label."},timestamp:{control:"text",description:"When the attachment was added."},userName:{control:"text",description:"Name of the user who uploaded the file."},userAvatar:{control:"text",description:"User avatar URL (defaults to initials if not provided)."},actions:{control:!1,description:"Optional array of contextual dropdown actions. Each action supports label, icon, and onClick."},onClick:{action:"attachmentClicked",description:"Emits when the attachment is clicked (returns the id)."}}},n={name:"Image Attachment",args:{id:1,fileName:"footer-horse.png",fileUrl:"https://placehold.co/200x200.png",fileSize:"170 KB",timestamp:"Oct 17, 2025, 16:35",userName:"John Doe",userAvatar:"https://i.pravatar.cc/40?img=5"}},i={name:"Document Attachment",args:{id:2,fileName:"dnsdumpster.csv",fileUrl:"/downloads/dnsdumpster.csv",fileSize:"3.53 KB",timestamp:"Oct 17, 2025, 16:40",userName:"Sarah Chen",userAvatar:"https://i.pravatar.cc/40?img=12"}},s={name:"Video Attachment",args:{id:3,fileName:"training-footage.mp4",fileUrl:"https://example.com/video.mp4",fileSize:"24 MB",timestamp:"Oct 17, 2025, 17:00",userName:"Michael Ross",userAvatar:"https://i.pravatar.cc/40?img=9"}},o={name:"Clickable Attachment (Event Example)",args:{id:"att_123",fileName:"proposal.pdf",fileUrl:"/files/proposal.pdf",fileSize:"2.1 MB",timestamp:"Oct 17, 2025, 18:00",userName:"Emma Brown",userAvatar:"https://i.pravatar.cc/40?img=13"},parameters:{docs:{description:{story:"Demonstrates the `@click` event — open the **Actions panel** to see the emitted `id` when clicked."}}}},c={name:"Attachment List",render:()=>({components:{FusionAttachment:k},template:`
      <div style="display: flex; flex-direction: column; gap: 0.5rem; max-width: 500px;">
        <FusionAttachment
          id="1"
          fileName="footer-horse.png"
          fileUrl="https://placehold.co/200x200.png"
          fileSize="170 KB"
          timestamp="Oct 17, 2025, 16:35"
          userName="John Doe"
          userAvatar="https://i.pravatar.cc/40?img=5"
          @click="onClick"
        />
        <FusionAttachment
          id="2"
          fileName="dnsdumpster.csv"
          fileUrl="/downloads/dnsdumpster.csv"
          fileSize="3.53 KB"
          timestamp="Oct 17, 2025, 16:40"
          userName="Sarah Chen"
          userAvatar="https://i.pravatar.cc/40?img=12"
          @click="onClick"
        />
        <FusionAttachment
          id="3"
          fileName="training-footage.mp4"
          fileUrl="https://example.com/video.mp4"
          fileSize="24 MB"
          timestamp="Oct 17, 2025, 17:00"
          userName="Michael Ross"
          userAvatar="https://i.pravatar.cc/40?img=9"
          @click="onClick"
        />
      </div>
    `,methods:{onClick(e){console.log("Attachment clicked:",e)}}})},r={name:"Attachment With Actions",args:{id:"att_900",fileName:"design-spec.pdf",fileUrl:"/files/design-spec.pdf",fileSize:"1.9 MB",timestamp:"Oct 18, 2025, 10:15",userName:"Romeo Tumbee",userAvatar:"https://i.pravatar.cc/40?img=21",actions:[{label:"Edit",icon:V,onClick:()=>console.log("Edit clicked")},{label:"Delete",icon:q,onClick:()=>console.log("Delete clicked")},{label:"Share",icon:T,onClick:()=>console.log("Share clicked")}]},parameters:{docs:{description:{story:"Demonstrates contextual actions via the three-dot dropdown menu. Actions do not trigger the main attachment click event."}}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  name: "Image Attachment",
  args: {
    id: 1,
    fileName: "footer-horse.png",
    fileUrl: "https://placehold.co/200x200.png",
    fileSize: "170 KB",
    timestamp: "Oct 17, 2025, 16:35",
    userName: "John Doe",
    userAvatar: "https://i.pravatar.cc/40?img=5"
  }
}`,...n.parameters?.docs?.source},description:{story:"Default Example - Image File",...n.parameters?.docs?.description}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  name: "Document Attachment",
  args: {
    id: 2,
    fileName: "dnsdumpster.csv",
    fileUrl: "/downloads/dnsdumpster.csv",
    fileSize: "3.53 KB",
    timestamp: "Oct 17, 2025, 16:40",
    userName: "Sarah Chen",
    userAvatar: "https://i.pravatar.cc/40?img=12"
  }
}`,...i.parameters?.docs?.source},description:{story:"Document File Example",...i.parameters?.docs?.description}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  name: "Video Attachment",
  args: {
    id: 3,
    fileName: "training-footage.mp4",
    fileUrl: "https://example.com/video.mp4",
    fileSize: "24 MB",
    timestamp: "Oct 17, 2025, 17:00",
    userName: "Michael Ross",
    userAvatar: "https://i.pravatar.cc/40?img=9"
  }
}`,...s.parameters?.docs?.source},description:{story:"Video File Example",...s.parameters?.docs?.description}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "Clickable Attachment (Event Example)",
  args: {
    id: "att_123",
    fileName: "proposal.pdf",
    fileUrl: "/files/proposal.pdf",
    fileSize: "2.1 MB",
    timestamp: "Oct 17, 2025, 18:00",
    userName: "Emma Brown",
    userAvatar: "https://i.pravatar.cc/40?img=13"
  },
  parameters: {
    docs: {
      description: {
        story: "Demonstrates the \`@click\` event — open the **Actions panel** to see the emitted \`id\` when clicked."
      }
    }
  }
}`,...o.parameters?.docs?.source},description:{story:"Clickable Interaction Example",...o.parameters?.docs?.description}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  name: "Attachment List",
  render: () => ({
    components: {
      FusionAttachment
    },
    template: \`
      <div style="display: flex; flex-direction: column; gap: 0.5rem; max-width: 500px;">
        <FusionAttachment
          id="1"
          fileName="footer-horse.png"
          fileUrl="https://placehold.co/200x200.png"
          fileSize="170 KB"
          timestamp="Oct 17, 2025, 16:35"
          userName="John Doe"
          userAvatar="https://i.pravatar.cc/40?img=5"
          @click="onClick"
        />
        <FusionAttachment
          id="2"
          fileName="dnsdumpster.csv"
          fileUrl="/downloads/dnsdumpster.csv"
          fileSize="3.53 KB"
          timestamp="Oct 17, 2025, 16:40"
          userName="Sarah Chen"
          userAvatar="https://i.pravatar.cc/40?img=12"
          @click="onClick"
        />
        <FusionAttachment
          id="3"
          fileName="training-footage.mp4"
          fileUrl="https://example.com/video.mp4"
          fileSize="24 MB"
          timestamp="Oct 17, 2025, 17:00"
          userName="Michael Ross"
          userAvatar="https://i.pravatar.cc/40?img=9"
          @click="onClick"
        />
      </div>
    \`,
    methods: {
      onClick(id: string | number) {
        console.log("Attachment clicked:", id);
      }
    }
  })
}`,...c.parameters?.docs?.source},description:{story:"Multiple Attachments Example",...c.parameters?.docs?.description}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  name: "Attachment With Actions",
  args: {
    id: "att_900",
    fileName: "design-spec.pdf",
    fileUrl: "/files/design-spec.pdf",
    fileSize: "1.9 MB",
    timestamp: "Oct 18, 2025, 10:15",
    userName: "Romeo Tumbee",
    userAvatar: "https://i.pravatar.cc/40?img=21",
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
        story: "Demonstrates contextual actions via the three-dot dropdown menu. Actions do not trigger the main attachment click event."
      }
    }
  }
}`,...r.parameters?.docs?.source},description:{story:"Attachment With Actions",...r.parameters?.docs?.description}}};const me=["ImageAttachment","DocumentAttachment","VideoAttachment","ClickableAttachment","AttachmentList","AttachmentWithActions"];export{c as AttachmentList,r as AttachmentWithActions,o as ClickableAttachment,i as DocumentAttachment,n as ImageAttachment,s as VideoAttachment,me as __namedExportsOrder,re as default};
