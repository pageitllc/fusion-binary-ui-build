import{q as f,b as i,A as b,i as m,F as x,g as _,o as n,e as A,d as s,s as S,y as w,p as F,t as o}from"./iframe-Bit2fKoK.js";import{_ as k}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{F as T}from"./file-plus-DhL6NXvk.js";import{S as v}from"./send-DuSINlNZ.js";import{E as l}from"./eye-C6fZyEA3.js";import{S as E}from"./shield-check-ZemTLmbu.js";import{c as y}from"./createLucideIcon-xyDXa4T9.js";import{C}from"./circle-x-Di9ff9Of.js";import{P as q}from"./pencil-DTtodqD_.js";import{R as M}from"./refresh-ccw-xdMU3FVX.js";import{C as N}from"./circle-check-_mYXeQml.js";import{C as O}from"./clock-sS4aKIEf.js";import"./preload-helper-Ct5FWWRu.js";/**
 * @license @lucide/vue v1.54.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const P={name:"message-square-text",size:24,node:[["path",{d:"M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z",key:"18887p"}],["path",{d:"M7 11h10",key:"1twpyw"}],["path",{d:"M7 15h6",key:"d9of3u"}],["path",{d:"M7 7h8",key:"af5zfr"}]]},V=y(P);/**
 * @license @lucide/vue v1.54.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const z={name:"pen-line",size:24,node:[["path",{d:"M13 21h8",key:"1jsn5i"}],["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",key:"1a8usu"}]],aliases:["edit-3"]},J=y(z),B={class:"fu-timeline"},D={key:0,class:"fu-timeline__empty"},L={class:"fu-evt__body"},I={class:"fu-evt__line"},R={class:"fu-evt__desc"},U={key:0,class:"fu-evt__version"},W={class:"fu-evt__date"},$={key:0,class:"fu-evt__note"},g=f({__name:"FuActivityTimeline",props:{events:{}},setup(e){return(h,u)=>(n(),i("ul",B,[e.events.length?m("",!0):(n(),i("li",D,[b(h.$slots,"empty",{},()=>[u[0]||(u[0]=A("No activity yet.",-1))],!0)])),(n(!0),i(x,null,_(e.events,t=>(n(),i("li",{key:t.id,class:"fu-evt"},[s("span",{class:F(["fu-evt__icon",`fu-evt__icon--${t.type}`])},[(n(),S(w(t.icon),{size:14}))],2),s("div",L,[s("div",I,[s("span",R,o(t.description),1),t.version!=null?(n(),i("span",U,"v"+o(t.version),1)):m("",!0)]),s("div",W,o(t.date),1),t.note?(n(),i("p",$,o(t.note),1)):m("",!0)])]))),128))]))}}),r=k(g,[["__scopeId","data-v-14200bb4"]]);g.__docgenInfo={exportName:"default",displayName:"FuActivityTimeline",description:"",tags:{},props:[{name:"events",required:!0,type:{name:"Array",elements:[{name:"FuTimelineEvent"}]}}],slots:[{name:"empty"}],sourceFiles:["/Users/xavier/Documents/Websites/Skkido/Fusion-binary-ui/src/components/activityTimeline/FuActivityTimeline.vue"]};const de={title:"Fusion/Display/FuActivityTimeline",component:r,tags:["autodocs"],parameters:{docs:{description:{component:`
**FuActivityTimeline** renders an append-only activity log as a vertical timeline.

Used in proposal history drawers and contract activity drawers to show events like sent, viewed, signed, declined, etc.

---

## Usage

Pass an array of pre-computed \`FuTimelineEvent\` objects. The domain-specific description/note logic stays in the consumer — this component handles only presentation.

\`\`\`ts
interface FuTimelineEvent {
  id: string
  type: string        // drives the icon colour (e.g. "signed", "declined")
  icon: Component     // any Vue component, typically a Lucide icon
  description: string // pre-computed readable label
  date: string        // pre-formatted date string
  version?: string | number  // optional version badge (e.g. "v2")
  note?: string | null       // optional context block below the description
}
\`\`\`

\`\`\`vue
<FuActivityTimeline :events="timelineEvents" />
\`\`\`
        `}}}},j=[{id:"1",type:"sent",icon:v,description:"Sent by Sarah to 2 recipients",date:"1 Oct 2026, 09:14",version:2},{id:"2",type:"viewed",icon:l,description:"John Appleseed (Approver) viewed the proposal",date:"1 Oct 2026, 10:32"},{id:"3",type:"change_requested",icon:V,description:"John Appleseed (Approver) requested changes",date:"1 Oct 2026, 11:05",note:"Please update the pricing section to reflect the Q4 discount."},{id:"4",type:"revised",icon:q,description:"Reopened for editing by Sarah",date:"2 Oct 2026, 08:45"},{id:"5",type:"sent",icon:M,description:"Resent by Sarah to 2 recipients",date:"2 Oct 2026, 09:00",version:3},{id:"6",type:"viewed",icon:l,description:"John Appleseed (Approver) viewed the proposal",date:"2 Oct 2026, 09:47"},{id:"7",type:"accepted",icon:N,description:"John Appleseed (Approver) accepted the proposal",date:"2 Oct 2026, 10:01"}],H=[{id:"1",type:"created",icon:T,description:"Created by Sarah",date:"28 Sep 2026, 14:00"},{id:"2",type:"sent",icon:v,description:"Sent to 2 recipients",date:"28 Sep 2026, 14:15"},{id:"3",type:"viewed",icon:l,description:"Jane Cooper (Signer) viewed the contract",date:"29 Sep 2026, 08:20"},{id:"4",type:"consent_given",icon:E,description:"Jane Cooper (Signer) consented to sign electronically",date:"29 Sep 2026, 08:21"},{id:"5",type:"signed",icon:J,description:"Jane Cooper (Signer) signed",date:"29 Sep 2026, 08:23"},{id:"6",type:"declined",icon:C,description:"Bob Martin (Signer) declined",date:"30 Sep 2026, 11:10",note:"I need to review this with our legal team first."}],Q=[{id:"1",type:"sent",icon:v,description:"Sent by Sarah to 1 recipient",date:"1 Sep 2026, 09:00",version:1},{id:"2",type:"viewed",icon:l,description:"Alice Brown (Approver) viewed the proposal",date:"3 Sep 2026, 14:22"},{id:"3",type:"validity_extended",icon:O,description:"Validity extended by Sarah",date:"15 Sep 2026, 10:00",note:"Extended from 15 Sep 2026 to 30 Sep 2026"}],a={render:e=>({components:{FuActivityTimeline:r},setup(){return{args:e}},template:`
      <div style="max-width: 480px; padding: 24px; background: #fff; border: 1px solid #e5e7eb; border-radius: 12px;">
        <FuActivityTimeline v-bind="args" />
      </div>
    `}),args:{events:j},parameters:{docs:{description:{story:"A full proposal lifecycle: sent → viewed → changes requested → revised → resent → accepted."}}}},d={render:e=>({components:{FuActivityTimeline:r},setup(){return{args:e}},template:`
      <div style="max-width: 480px; padding: 24px; background: #fff; border: 1px solid #e5e7eb; border-radius: 12px;">
        <FuActivityTimeline v-bind="args" />
      </div>
    `}),args:{events:H},parameters:{docs:{description:{story:"Contract events including consent, signing, and a decline with a reason note."}}}},c={render:e=>({components:{FuActivityTimeline:r},setup(){return{args:e}},template:`
      <div style="max-width: 480px; padding: 24px; background: #fff; border: 1px solid #e5e7eb; border-radius: 12px;">
        <FuActivityTimeline v-bind="args" />
      </div>
    `}),args:{events:Q},parameters:{docs:{description:{story:"Shows a validity_extended event with a date-range note."}}}},p={render:e=>({components:{FuActivityTimeline:r},setup(){return{args:e}},template:`
      <div style="max-width: 480px; padding: 24px; background: #fff; border: 1px solid #e5e7eb; border-radius: 12px;">
        <FuActivityTimeline v-bind="args" />
      </div>
    `}),args:{events:[]},parameters:{docs:{description:{story:"Empty state — shows the default 'No activity yet.' message."}}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: args => ({
    components: {
      FuActivityTimeline
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <div style="max-width: 480px; padding: 24px; background: #fff; border: 1px solid #e5e7eb; border-radius: 12px;">
        <FuActivityTimeline v-bind="args" />
      </div>
    \`
  }),
  args: {
    events: proposalEvents
  },
  parameters: {
    docs: {
      description: {
        story: "A full proposal lifecycle: sent → viewed → changes requested → revised → resent → accepted."
      }
    }
  }
}`,...a.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: args => ({
    components: {
      FuActivityTimeline
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <div style="max-width: 480px; padding: 24px; background: #fff; border: 1px solid #e5e7eb; border-radius: 12px;">
        <FuActivityTimeline v-bind="args" />
      </div>
    \`
  }),
  args: {
    events: contractEvents
  },
  parameters: {
    docs: {
      description: {
        story: "Contract events including consent, signing, and a decline with a reason note."
      }
    }
  }
}`,...d.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: args => ({
    components: {
      FuActivityTimeline
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <div style="max-width: 480px; padding: 24px; background: #fff; border: 1px solid #e5e7eb; border-radius: 12px;">
        <FuActivityTimeline v-bind="args" />
      </div>
    \`
  }),
  args: {
    events: validityExtendedEvents
  },
  parameters: {
    docs: {
      description: {
        story: "Shows a validity_extended event with a date-range note."
      }
    }
  }
}`,...c.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: args => ({
    components: {
      FuActivityTimeline
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <div style="max-width: 480px; padding: 24px; background: #fff; border: 1px solid #e5e7eb; border-radius: 12px;">
        <FuActivityTimeline v-bind="args" />
      </div>
    \`
  }),
  args: {
    events: []
  },
  parameters: {
    docs: {
      description: {
        story: "Empty state — shows the default 'No activity yet.' message."
      }
    }
  }
}`,...p.parameters?.docs?.source}}};const ce=["ProposalActivity","ContractActivity","WithValidityExtension","Empty"];export{d as ContractActivity,p as Empty,a as ProposalActivity,c as WithValidityExtension,ce as __namedExportsOrder,de as default};
