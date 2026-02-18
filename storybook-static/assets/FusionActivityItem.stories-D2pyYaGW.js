import{s as g,a as k,g as t,d as h,v as A,l as N,b as m,u as x,t as s,j as u}from"./iframe-4anGkjM3.js";import{F}from"./FuAvatar-ItnBA4Ru.js";import{C as T}from"./circle-check-big-Cj8Wpp5q.js";import{_}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{F as c}from"./file-text-DK81Ft0a.js";import{M as I}from"./mail-Dm3OTdwX.js";import{c as P}from"./createLucideIcon-MAVkZFkt.js";import"./preload-helper-Ct5FWWRu.js";/**
 * @license lucide-vue-next v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const w=P("paperclip",[["path",{d:"m16 6-8.414 8.586a2 2 0 0 0 2.829 2.829l8.414-8.586a4 4 0 1 0-5.657-5.657l-8.379 8.551a6 6 0 1 0 8.485 8.485l8.379-8.551",key:"1miecu"}]]),C={class:"fu-activity-item"},b={class:"fu-activity-icon"},D={class:"fu-activity-content"},S={class:"fu-activity-header"},E={class:"fu-activity-title"},M={class:"fu-activity-status"},B={class:"fu-activity-text"},U={class:"fu-activity-subtitle"},V={class:"fu-activity-footer"},q={class:"fu-activity-timestamp"},J={class:"fu-activity-user"},d=g({__name:"FusionActivityItem",props:{icon:{},title:{},fileName:{},timestamp:{},userName:{},userAvatar:{default:null},clickable:{type:Boolean,default:!0}},emits:["click"],setup(e,{emit:p}){const v=e,y=p;function f(){v.clickable&&y("click")}return(R,l)=>(u(),k("div",C,[t("div",b,[(u(),h(A(e.icon),{class:"fu-activity-icon__svg",size:18}))]),l[0]||(l[0]=t("div",{class:"fu-activity-line"},null,-1)),t("div",D,[t("div",{class:N(["fu-activity-card",{"is-clickable":e.clickable}]),onClick:f},[t("div",S,[t("div",E,[t("span",M,[m(x(T),{class:"fu-activity-status__icon",size:16})]),t("p",B,s(e.title),1)])]),t("p",U,s(e.fileName),1),t("div",V,[t("span",q,s(e.timestamp),1),t("div",J,[m(F,{src:e.userAvatar||void 0,name:e.userName,alt:e.userName,size:"xs","show-status":!1},null,8,["src","name","alt"])])])],2)])]))}}),r=_(d,[["__scopeId","data-v-3de71024"]]);d.__docgenInfo={exportName:"default",displayName:"FusionActivityItem",description:"",tags:{},props:[{name:"icon",required:!0,type:{name:"Component"}},{name:"title",required:!0,type:{name:"string"}},{name:"fileName",required:!0,type:{name:"string"}},{name:"timestamp",required:!0,type:{name:"string"}},{name:"userName",required:!0,type:{name:"string"}},{name:"userAvatar",required:!1,type:{name:"union",elements:[{name:"string"},{name:"null"}]},defaultValue:{func:!1,value:"null"}},{name:"clickable",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"true"}}],events:[{name:"click"}],sourceFiles:["/Users/xavier/Documents/Websites/Skkido/Fusion-binary-ui/src/components/items/activity/FusionActivityItem.vue"]};const Z={title:"Components/ActivityItem",component:r,tags:["autodocs"],parameters:{docs:{description:{component:`
The **FusionActivityItem** component displays an individual activity entry in a vertical timeline.

Each item includes:
- An activity icon
- Title and supporting context (e.g. file name)
- Timestamp
- User avatar or initials

---

## Icon usage

The \`icon\` prop expects a **Vue component**, typically from \`lucide-vue-next\`.

\`\`\`ts
import { FileText } from "lucide-vue-next";
\`\`\`

Then pass it directly:

\`\`\`vue
<FusionActivityItem :icon="FileText" />
\`\`\`

---

## Interaction

This component is **interactive by design**:

- Cursor changes on hover
- Card lifts slightly
- Emits a native \`click\` event

It is intended to be used as a **navigation or drill-down trigger**.

---

## Example (click handling)

\`\`\`vue
<template>
  <FusionActivityItem
    :icon="FileText"
    title="Document Uploaded"
    fileName="Proposal.pdf"
    timestamp="Just now"
    userName="Romeo"
    @click="openActivity"
  />
</template>

<script setup>
import { FileText } from "lucide-vue-next";

function openActivity() {
  console.log("Activity clicked");
}
<\/script>
\`\`\`
        `}}},argTypes:{icon:{control:!1,description:"Lucide icon component representing the activity type."},title:{control:"text",description:"Primary activity title or description."},fileName:{control:"text",description:"Associated file, note, or contextual label."},timestamp:{control:"text",description:"When the activity occurred."},userName:{control:"text",description:"Name of the user who performed the activity."},userAvatar:{control:"text",description:"Optional user avatar URL. Falls back to initials when omitted."}}},i={args:{icon:c,title:"Proposal Document Uploaded",fileName:"Company_Overview.pdf",timestamp:"Today at 2:45 PM",userName:"Nathan Caldwell",userAvatar:"https://storage.googleapis.com/pageit-bucket/01J47TZXPQBE50Y1QV4599FE3W.png"}},a={args:{icon:I,title:"Follow-up Email Sent to Client",fileName:"Re: Skkido Platform Demo",timestamp:"Yesterday at 4:05 PM",userName:"Maya Thompson",userAvatar:"https://randomuser.me/api/portraits/women/12.jpg"}},n={render:()=>({components:{FusionActivityItem:r},setup(){function e(){console.log("Activity clicked"),alert("Activity clicked")}return{FileText:c,openActivity:e}},template:`
      <FusionActivityItem
        :icon="FileText"
        title="Document Uploaded"
        fileName="Proposal.pdf"
        timestamp="Just now"
        userName="Romeo"
        @click="openActivity"
      />
    `})},o={render:()=>({components:{FusionActivityItem:r},setup(){return{activities:[{icon:c,title:"Document Uploaded",fileName:"Skylark_Proposal_V2.pdf",timestamp:"Today at 1:45 PM",userName:"Nathan Caldwell"},{icon:w,title:"Attachment Added to Deal",fileName:"Budget_Breakdown.xlsx",timestamp:"Today at 3:22 PM",userName:"Tomy Jackson"}]}},template:`
      <div class="fu-activity-list">
        <FusionActivityItem
          v-for="(item, index) in activities"
          :key="index"
          v-bind="item"
        />
      </div>
    `})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    icon: FileText,
    title: "Proposal Document Uploaded",
    fileName: "Company_Overview.pdf",
    timestamp: "Today at 2:45 PM",
    userName: "Nathan Caldwell",
    userAvatar: "https://storage.googleapis.com/pageit-bucket/01J47TZXPQBE50Y1QV4599FE3W.png"
  }
}`,...i.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    icon: Mail,
    title: "Follow-up Email Sent to Client",
    fileName: "Re: Skkido Platform Demo",
    timestamp: "Yesterday at 4:05 PM",
    userName: "Maya Thompson",
    userAvatar: "https://randomuser.me/api/portraits/women/12.jpg"
  }
}`,...a.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      FusionActivityItem
    },
    setup() {
      function openActivity() {
        console.log("Activity clicked");
        alert("Activity clicked");
      }
      return {
        FileText,
        openActivity
      };
    },
    template: \`
      <FusionActivityItem
        :icon="FileText"
        title="Document Uploaded"
        fileName="Proposal.pdf"
        timestamp="Just now"
        userName="Romeo"
        @click="openActivity"
      />
    \`
  })
}`,...n.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
        userName: "Nathan Caldwell"
      }, {
        icon: Paperclip,
        title: "Attachment Added to Deal",
        fileName: "Budget_Breakdown.xlsx",
        timestamp: "Today at 3:22 PM",
        userName: "Tomy Jackson"
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
}`,...o.parameters?.docs?.source}}};const G=["DocumentUploaded","EmailSent","Interactive","TimelineView"];export{i as DocumentUploaded,a as EmailSent,n as Interactive,o as TimelineView,G as __namedExportsOrder,Z as default};
