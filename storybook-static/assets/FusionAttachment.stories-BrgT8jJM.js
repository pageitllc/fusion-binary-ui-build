import{d as N,D as p,c as d,b as t,k as u,y as h,t as o,l as y,B as S,o as m}from"./iframe-o7SUGoga.js";import{F as U}from"./FuAvatar-CO6FnC2I.js";import{c as C}from"./createLucideIcon-D5kBsy5g.js";import{F}from"./file-text-BX0vmVid.js";import{_ as w}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./preload-helper-Ct5FWWRu.js";/**
 * @license lucide-vue-next v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const z=C("video",[["path",{d:"m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5",key:"ftymec"}],["rect",{x:"2",y:"6",width:"14",height:"12",rx:"2",key:"158x01"}]]),B={class:"fu-attachment-left flex flex--gap-md flex--align-center"},b={class:"fu-attachment-preview"},_=["src","alt"],M={class:"fu-attachment-info flex flex--column"},E={class:"fu-attachment-title"},D={class:"fu-attachment-meta"},O={class:"fu-attachment-right flex flex--column flex--align-center flex--gap-md"},I={class:"fu-attachment-time"},f=N({__name:"FusionAttachment",props:{id:{},fileName:{},fileUrl:{},fileSize:{default:""},timestamp:{},userName:{},userAvatar:{default:null}},emits:["click"],setup(e,{emit:g}){const c=e,A=g;function l(){A("click",c.id)}const x=p(()=>/\.(png|jpe?g|gif|webp|svg)$/i.test(c.fileName)),k=p(()=>/\.(mp4|mov|avi|webm)$/i.test(c.fileName));return(K,V)=>(m(),d("div",{class:"fu-attachment-item",role:"button",tabindex:"0",onClick:l,onKeypress:S(l,["enter"])},[t("div",B,[t("div",b,[x.value?(m(),d("img",{key:0,src:e.fileUrl,alt:e.fileName,class:"fu-attachment-thumbnail"},null,8,_)):k.value?(m(),u(h(z),{key:1,class:"fu-attachment-icon",size:20})):(m(),u(h(F),{key:2,class:"fu-attachment-icon",size:20}))]),t("div",M,[t("span",E,o(e.fileName),1),t("span",D,o(e.fileSize),1)])]),t("div",O,[y(U,{src:e.userAvatar||void 0,name:e.userName,alt:e.userName,size:"xs","show-status":!1},null,8,["src","name","alt"]),t("span",I,o(e.timestamp),1)])],32))}}),v=w(f,[["__scopeId","data-v-3301bbcd"]]);f.__docgenInfo={exportName:"default",displayName:"FusionAttachment",description:"",tags:{},props:[{name:"id",required:!0,type:{name:"union",elements:[{name:"string"},{name:"number"}]}},{name:"fileName",required:!0,type:{name:"string"}},{name:"fileUrl",required:!0,type:{name:"string"}},{name:"fileSize",required:!1,type:{name:"string"},defaultValue:{func:!1,value:'""'}},{name:"timestamp",required:!0,type:{name:"string"}},{name:"userName",required:!0,type:{name:"string"}},{name:"userAvatar",required:!1,type:{name:"union",elements:[{name:"string"},{name:"null"}]},defaultValue:{func:!1,value:"null"}}],events:[{name:"click",type:{names:["union"],elements:[{name:"string"},{name:"number"}]}}],sourceFiles:["/Users/tommys/Documents/Skkido/Fusion-binary-ui/src/components/items/attachments/FusionAttachment.vue"]};const J={title:"Components/Items/FusionAttachment",component:v,tags:["autodocs"],parameters:{docs:{description:{component:`
The **FusionAttachment** component displays uploaded files (e.g. images, documents, or videos) in a consistent, task-style list item.  
It automatically detects file types based on the file extension and renders the appropriate preview or icon.  
Each attachment has a unique **\`id\`** and emits a **\`click\` event** with that id for use in modals, downloads, or preview actions.

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
    @click="handleAttachmentClick"
  />
</template>

<script setup>
import FusionAttachment from "@/components/attachment/FusionAttachment.vue";

function handleAttachmentClick(id) {
  console.log("Attachment clicked:", id);
}
<\/script>
\`\`\`

---

### List Example

You can render multiple attachments by looping through an array:

\`\`\`vue
<script setup>
import FusionAttachment from "@/components/attachment/FusionAttachment.vue";

const attachments = [
  {
    id: 1,
    fileName: "footer-horse.png",
    fileUrl: "https://placehold.co/200x200.png",
    fileSize: "170 KB",
    timestamp: "Today at 2:30 PM",
    userName: "Daniel Smith",
    userAvatar: "https://randomuser.me/api/portraits/men/22.jpg",
  },
  {
    id: 2,
    fileName: "dnsdumpster.csv",
    fileUrl: "/files/dnsdumpster.csv",
    fileSize: "3.53 KB",
    timestamp: "Today at 3:15 PM",
    userName: "Sarah Jones",
    userAvatar: "https://randomuser.me/api/portraits/women/45.jpg",
  },
  {
    id: 3,
    fileName: "launch-video.mp4",
    fileUrl: "https://example.com/video.mp4",
    fileSize: "22 MB",
    timestamp: "Today at 4:00 PM",
    userName: "Michael Green",
    userAvatar: "https://randomuser.me/api/portraits/men/19.jpg",
  },
];
<\/script>

<template>
  <div class="fu-attachment-list">
    <FusionAttachment
      v-for="(item, index) in attachments"
      :key="item.id"
      v-bind="item"
      @click="handleAttachmentClick"
    />
  </div>
</template>
\`\`\`

---

### Notes
- Supports **image previews** for \`.jpg\`, \`.png\`, \`.jpeg\`, \`.gif\`.
- Displays **file icons** for documents like \`.pdf\`, \`.docx\`, \`.csv\`.
- Uses **video icons** for \`.mp4\`, \`.mov\`, and other video formats.
- Emits \`@click(id)\` when the user clicks an attachment.
- Typically used in CRM notes, project files, or activity feeds.
        `}}},argTypes:{id:{control:"text",description:"Unique identifier for the attachment."},fileName:{control:"text",description:"Name of the attached file."},fileUrl:{control:"text",description:"URL or path of the attachment."},fileSize:{control:"text",description:"Human-readable file size label."},timestamp:{control:"text",description:"When the attachment was added."},userName:{control:"text",description:"Name of the user who uploaded the file."},userAvatar:{control:"text",description:"User avatar URL (defaults to initials if not provided)."},onClick:{action:"attachmentClicked",description:"Emits when the attachment is clicked (returns the id)."}}},a={name:"Image Attachment",args:{id:1,fileName:"footer-horse.png",fileUrl:"https://placehold.co/200x200.png",fileSize:"170 KB",timestamp:"Oct 17, 2025, 16:35",userName:"John Doe",userAvatar:"https://i.pravatar.cc/40?img=5"}},i={name:"Document Attachment",args:{id:2,fileName:"dnsdumpster.csv",fileUrl:"/downloads/dnsdumpster.csv",fileSize:"3.53 KB",timestamp:"Oct 17, 2025, 16:40",userName:"Sarah Chen",userAvatar:"https://i.pravatar.cc/40?img=12"}},n={name:"Video Attachment",args:{id:3,fileName:"training-footage.mp4",fileUrl:"https://example.com/video.mp4",fileSize:"24 MB",timestamp:"Oct 17, 2025, 17:00",userName:"Michael Ross",userAvatar:"https://i.pravatar.cc/40?img=9"}},s={name:"Clickable Attachment (Event Example)",args:{id:"att_123",fileName:"proposal.pdf",fileUrl:"/files/proposal.pdf",fileSize:"2.1 MB",timestamp:"Oct 17, 2025, 18:00",userName:"Emma Brown",userAvatar:"https://i.pravatar.cc/40?img=13"},parameters:{docs:{description:{story:"Demonstrates the `@click` event — open the **Actions panel** to see the emitted `id` when clicked."}}}},r={name:"Attachment List",render:()=>({components:{FusionAttachment:v},template:`
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
    `,methods:{onClick(e){console.log("Attachment clicked:",e)}}})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...a.parameters?.docs?.source},description:{story:"Default Example - Image File",...a.parameters?.docs?.description}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
}`,...i.parameters?.docs?.source},description:{story:"Document File Example",...i.parameters?.docs?.description}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
}`,...n.parameters?.docs?.source},description:{story:"Video File Example",...n.parameters?.docs?.description}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source},description:{story:"Clickable Interaction Example",...s.parameters?.docs?.description}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...r.parameters?.docs?.source},description:{story:"Multiple Attachments Example",...r.parameters?.docs?.description}}};const $=["ImageAttachment","DocumentAttachment","VideoAttachment","ClickableAttachment","AttachmentList"];export{r as AttachmentList,s as ClickableAttachment,i as DocumentAttachment,a as ImageAttachment,n as VideoAttachment,$ as __namedExportsOrder,J as default};
