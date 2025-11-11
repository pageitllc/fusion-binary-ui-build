import{d,c as u,b as e,k as v,u as y,l as r,y as f,t as o,o as m}from"./iframe-o7SUGoga.js";import{F as g}from"./FuAvatar-CO6FnC2I.js";import{C as h}from"./circle-check-big-Djl5qEVr.js";import{_ as N}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{F as c}from"./file-text-BX0vmVid.js";import{M as _}from"./mail-CpRZj7G3.js";import{c as A}from"./createLucideIcon-D5kBsy5g.js";import"./preload-helper-Ct5FWWRu.js";/**
 * @license lucide-vue-next v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const x=A("paperclip",[["path",{d:"m16 6-8.414 8.586a2 2 0 0 0 2.829 2.829l8.414-8.586a4 4 0 1 0-5.657-5.657l-8.379 8.551a6 6 0 1 0 8.485 8.485l8.379-8.551",key:"1miecu"}]]),F={class:"fu-activity-item"},T={class:"fu-activity-icon"},k={class:"fu-activity-content"},P={class:"fu-activity-card"},w={class:"fu-activity-header"},C={class:"fu-activity-title"},I={class:"fu-activity-status"},M={class:"fu-activity-text"},D={class:"fu-activity-subtitle"},E={class:"fu-activity-footer"},S={class:"fu-activity-timestamp"},B={class:"fu-activity-user"},l=d({__name:"FusionActivityItem",props:{icon:{},title:{},fileName:{},timestamp:{},userName:{},userAvatar:{default:null}},setup(t){return(U,n)=>(m(),u("div",F,[e("div",T,[(m(),v(y(t.icon),{class:"fu-activity-icon__svg",size:18}))]),n[0]||(n[0]=e("div",{class:"fu-activity-line"},null,-1)),e("div",k,[e("div",P,[e("div",w,[e("div",C,[e("span",I,[r(f(h),{class:"fu-activity-status__icon",size:16})]),e("p",M,o(t.title),1)])]),e("p",D,o(t.fileName),1),e("div",E,[e("span",S,o(t.timestamp),1),e("div",B,[r(g,{src:t.userAvatar||void 0,name:t.userName,alt:t.userName,size:"xs","show-status":!1},null,8,["src","name","alt"])])])])])]))}}),p=N(l,[["__scopeId","data-v-cefa8c96"]]);l.__docgenInfo={exportName:"default",displayName:"FusionActivityItem",description:"",tags:{},props:[{name:"icon",required:!0,type:{name:"Component"}},{name:"title",required:!0,type:{name:"string"}},{name:"fileName",required:!0,type:{name:"string"}},{name:"timestamp",required:!0,type:{name:"string"}},{name:"userName",required:!0,type:{name:"string"}},{name:"userAvatar",required:!1,type:{name:"union",elements:[{name:"string"},{name:"null"},{name:"undefined"}]},defaultValue:{func:!1,value:"null"}}],sourceFiles:["/Users/tommys/Documents/Skkido/Fusion-binary-ui/src/components/items/activity/FusionActivityItem.vue"]};const L={title:"Components/Items/ActivityItem",component:p,tags:["autodocs"],parameters:{docs:{description:{component:`
The **FusionActivityItem** component displays an individual activity entry in a vertical timeline format.  
Each entry includes an icon, title, supporting text (e.g. document name), timestamp, and user avatar or initials.

---

### Example Usage

\`\`\`vue
<template>
  <FusionActivityItem
    :icon="FileText"
    title="Document Uploaded"
    fileName="Company_Overview.pdf"
    timestamp="Today at 2:45 PM"
    userName="Nathan Caldwell"
    userAvatar="https://storage.googleapis.com/pageit-bucket/01J47TZXPQBE50Y1QV4599FE3W.png"
  />
</template>

<script setup>
import { FileText } from "lucide-vue-next";
import FusionActivityItem from "@/components/activity/FusionActivityItem.vue";
<\/script>
\`\`\`

---

### Timeline Example

You can loop through an array of activity data to render a full feed:

\`\`\`vue
<script setup>
import { FileText, Paperclip } from "lucide-vue-next";
import FusionActivityItem from "@/components/activity/FusionActivityItem.vue";

const activities = [
  {
    icon: FileText,
    title: "Document Uploaded",
    fileName: "Project_Proposal.pdf",
    timestamp: "Today at 1:45 PM",
    userName: "Nathan Caldwell",
    userAvatar: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    icon: Paperclip,
    title: "Attachment Added to Lead Record",
    fileName: "Client_Notes.docx",
    timestamp: "Today at 3:22 PM",
    userName: "Tomy Jackson",
    userAvatar: "https://randomuser.me/api/portraits/men/44.jpg",
  },
];
<\/script>

<template>
  <div class="fu-activity-list">
    <FusionActivityItem
      v-for="(item, index) in activities"
      :key="index"
      v-bind="item"
    />
  </div>
</template>
\`\`\`
        `}}},argTypes:{icon:{control:!1,description:"Lucide icon component for the activity."},title:{control:"text",description:"Activity title or description."},fileName:{control:"text",description:"Associated file, note, or item name."},timestamp:{control:"text",description:"When the activity occurred."},userName:{control:"text",description:"Name of the user who performed the activity."},userAvatar:{control:"text",description:"User avatar URL (defaults to initials if not provided)."}}},a={args:{icon:c,title:"Proposal Document Uploaded",fileName:"Company_Overview.pdf",timestamp:"Today at 2:45 PM",userName:"Nathan Caldwell",userAvatar:"https://storage.googleapis.com/pageit-bucket/01J47TZXPQBE50Y1QV4599FE3W.png"}},i={args:{icon:_,title:"Follow-up Email Sent to Client",fileName:"Re: Skkido Platform Demo",timestamp:"Yesterday at 4:05 PM",userName:"Maya Thompson",userAvatar:"https://randomuser.me/api/portraits/women/12.jpg"}},s={render:()=>({components:{FusionActivityItem:p},setup(){return{activities:[{icon:c,title:"Document Uploaded",fileName:"Skylark_Proposal_V2.pdf",timestamp:"Today at 1:45 PM",userName:"Nathan Caldwell",userAvatar:"https://randomuser.me/api/portraits/men/32.jpg"},{icon:x,title:"Attachment Added to Deal Record",fileName:"Budget_Breakdown.xlsx",timestamp:"Today at 3:22 PM",userName:"Tomy Jackson",userAvatar:"https://randomuser.me/api/portraits/men/44.jpg"}]}},template:`
      <div class="fu-activity-list">
        <FusionActivityItem
          v-for="(item, index) in activities"
          :key="index"
          v-bind="item"
        />
      </div>
    `})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    icon: FileText,
    title: "Proposal Document Uploaded",
    fileName: "Company_Overview.pdf",
    timestamp: "Today at 2:45 PM",
    userName: "Nathan Caldwell",
    userAvatar: "https://storage.googleapis.com/pageit-bucket/01J47TZXPQBE50Y1QV4599FE3W.png"
  }
}`,...a.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    icon: Mail,
    title: "Follow-up Email Sent to Client",
    fileName: "Re: Skkido Platform Demo",
    timestamp: "Yesterday at 4:05 PM",
    userName: "Maya Thompson",
    userAvatar: "https://randomuser.me/api/portraits/women/12.jpg"
  }
}`,...i.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      FusionActivityItem
    },
    setup() {
      const activities = [{
        icon: FileText,
        title: "Document Uploaded",
        fileName: "Skylark_Proposal_V2.pdf",
        timestamp: "Today at 1:45 PM",
        userName: "Nathan Caldwell",
        userAvatar: "https://randomuser.me/api/portraits/men/32.jpg"
      }, {
        icon: Paperclip,
        title: "Attachment Added to Deal Record",
        fileName: "Budget_Breakdown.xlsx",
        timestamp: "Today at 3:22 PM",
        userName: "Tomy Jackson",
        userAvatar: "https://randomuser.me/api/portraits/men/44.jpg"
      }];
      return {
        activities
      };
    },
    template: \`
      <div class="fu-activity-list">
        <FusionActivityItem
          v-for="(item, index) in activities"
          :key="index"
          v-bind="item"
        />
      </div>
    \`
  })
}`,...s.parameters?.docs?.source}}};const O=["DocumentUploaded","EmailSent","TimelineView"];export{a as DocumentUploaded,i as EmailSent,s as TimelineView,O as __namedExportsOrder,L as default};
