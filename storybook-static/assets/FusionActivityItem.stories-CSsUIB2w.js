import{q as g,b as k,d as t,s as h,y as A,p as N,f as m,u as x,t as s,o as u}from"./iframe-BJCCdSEh.js";import{F}from"./FuAvatar-CShzGodt.js";import{C as T}from"./circle-check-big-C-8DXOOP.js";import{_}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{F as c}from"./file-text-EiT8E8mh.js";import{M as P}from"./mail-BZZs6n4q.js";import{P as w}from"./paperclip-C6tsKhXV.js";import"./preload-helper-Ct5FWWRu.js";import"./createLucideIcon-B6nnLSzH.js";const I={class:"fu-activity-item"},b={class:"fu-activity-icon"},C={class:"fu-activity-content"},D={class:"fu-activity-header"},S={class:"fu-activity-title"},E={class:"fu-activity-status"},M={class:"fu-activity-text"},B={class:"fu-activity-subtitle"},U={class:"fu-activity-footer"},V={class:"fu-activity-timestamp"},q={class:"fu-activity-user"},p=g({__name:"FusionActivityItem",props:{icon:{},title:{},fileName:{},timestamp:{},userName:{},userAvatar:{default:null},clickable:{type:Boolean,default:!0}},emits:["click"],setup(e,{emit:d}){const v=e,y=d;function f(){v.clickable&&y("click")}return(J,l)=>(u(),k("div",I,[t("div",b,[(u(),h(A(e.icon),{class:"fu-activity-icon__svg",size:18}))]),l[0]||(l[0]=t("div",{class:"fu-activity-line"},null,-1)),t("div",C,[t("div",{class:N(["fu-activity-card",{"is-clickable":e.clickable}]),onClick:f},[t("div",D,[t("div",S,[t("span",E,[m(x(T),{class:"fu-activity-status__icon",size:16})]),t("p",M,s(e.title),1)])]),t("p",B,s(e.fileName),1),t("div",U,[t("span",V,s(e.timestamp),1),t("div",q,[m(F,{src:e.userAvatar||void 0,name:e.userName,alt:e.userName,size:"xs","show-status":!1},null,8,["src","name","alt"])])])],2)])]))}}),r=_(p,[["__scopeId","data-v-5eae58b1"]]);p.__docgenInfo={exportName:"default",displayName:"FusionActivityItem",description:"",tags:{},props:[{name:"icon",required:!0,type:{name:"Component"}},{name:"title",required:!0,type:{name:"string"}},{name:"fileName",required:!0,type:{name:"string"}},{name:"timestamp",required:!0,type:{name:"string"}},{name:"userName",required:!0,type:{name:"string"}},{name:"userAvatar",required:!1,type:{name:"union",elements:[{name:"string"},{name:"null"}]},defaultValue:{func:!1,value:"null"}},{name:"clickable",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"true"}}],events:[{name:"click"}],sourceFiles:["/Users/xavier/Documents/Websites/Skkido/Fusion-binary-ui/src/components/items/activity/FusionActivityItem.vue"]};const Z={title:"Fusion/Data Display/FusionActivityItem",component:r,tags:["autodocs"],parameters:{docs:{description:{component:`
The **FusionActivityItem** component displays an individual activity entry in a vertical timeline.

Each item includes:
- An activity icon
- Title and supporting context (e.g. file name)
- Timestamp
- User avatar or initials

---

## Icon usage

The \`icon\` prop expects a **Vue component**, typically from \`@lucide/vue\`.

\`\`\`ts
import { FileText } from "@lucide/vue";
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
import { FileText } from "@lucide/vue";

function openActivity() {
  console.log("Activity clicked");
}
<\/script>
\`\`\`
        `}}},argTypes:{icon:{control:!1,description:"Lucide icon component representing the activity type."},title:{control:"text",description:"Primary activity title or description."},fileName:{control:"text",description:"Associated file, note, or contextual label."},timestamp:{control:"text",description:"When the activity occurred."},userName:{control:"text",description:"Name of the user who performed the activity."},userAvatar:{control:"text",description:"Optional user avatar URL. Falls back to initials when omitted."}}},i={args:{icon:c,title:"Proposal Document Uploaded",fileName:"Company_Overview.pdf",timestamp:"Today at 2:45 PM",userName:"Nathan Caldwell",userAvatar:"https://storage.googleapis.com/pageit-bucket/01J47TZXPQBE50Y1QV4599FE3W.png"}},a={args:{icon:P,title:"Follow-up Email Sent to Client",fileName:"Re: Skkido Platform Demo",timestamp:"Yesterday at 4:05 PM",userName:"Maya Thompson",userAvatar:"https://randomuser.me/api/portraits/women/12.jpg"}},n={render:()=>({components:{FusionActivityItem:r},setup(){function e(){console.log("Activity clicked"),alert("Activity clicked")}return{FileText:c,openActivity:e}},template:`
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
