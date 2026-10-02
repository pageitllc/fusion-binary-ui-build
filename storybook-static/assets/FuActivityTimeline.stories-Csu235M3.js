import{q as f,b as i,B as x,i as v,F as b,g as _,o as n,e as w,d as s,s as A,z as k,p as S,t as a}from"./iframe-D8JpMP6T.js";import{_ as F}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{F as T}from"./file-plus-Co4OEh_T.js";import{c as r}from"./createLucideIcon-Dev6r3pU.js";import{E as m}from"./eye-27CK1jmT.js";import{C}from"./circle-x-CWpg3m5e.js";import{R as E}from"./refresh-ccw-DuerM9Im.js";import{C as z}from"./circle-check-CI_jfcuM.js";import{C as M}from"./clock-DN7EX-mt.js";import"./preload-helper-Ct5FWWRu.js";/**
 * @license lucide-vue-next v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const V=r("message-square-text",[["path",{d:"M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z",key:"18887p"}],["path",{d:"M7 11h10",key:"1twpyw"}],["path",{d:"M7 15h6",key:"d9of3u"}],["path",{d:"M7 7h8",key:"af5zfr"}]]);/**
 * @license lucide-vue-next v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const q=r("pen-line",[["path",{d:"M13 21h8",key:"1jsn5i"}],["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",key:"1a8usu"}]]);/**
 * @license lucide-vue-next v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const N=r("pencil",[["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",key:"1a8usu"}],["path",{d:"m15 5 4 4",key:"1mk7zo"}]]);/**
 * @license lucide-vue-next v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const u=r("send",[["path",{d:"M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",key:"1ffxy3"}],["path",{d:"m21.854 2.147-10.94 10.939",key:"12cjpa"}]]);/**
 * @license lucide-vue-next v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const O=r("shield-check",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]),B={class:"fu-timeline"},J={key:0,class:"fu-timeline__empty"},P={class:"fu-evt__body"},L={class:"fu-evt__line"},D={class:"fu-evt__desc"},I={key:0,class:"fu-evt__version"},R={class:"fu-evt__date"},j={key:0,class:"fu-evt__note"},g=f({__name:"FuActivityTimeline",props:{events:{}},setup(e){return(h,y)=>(n(),i("ul",B,[e.events.length?v("",!0):(n(),i("li",J,[x(h.$slots,"empty",{},()=>[y[0]||(y[0]=w("No activity yet.",-1))],!0)])),(n(!0),i(b,null,_(e.events,t=>(n(),i("li",{key:t.id,class:"fu-evt"},[s("span",{class:S(["fu-evt__icon",`fu-evt__icon--${t.type}`])},[(n(),A(k(t.icon),{size:14}))],2),s("div",P,[s("div",L,[s("span",D,a(t.description),1),t.version!=null?(n(),i("span",I,"v"+a(t.version),1)):v("",!0)]),s("div",R,a(t.date),1),t.note?(n(),i("p",j,a(t.note),1)):v("",!0)])]))),128))]))}}),o=F(g,[["__scopeId","data-v-5508145c"]]);g.__docgenInfo={exportName:"default",displayName:"FuActivityTimeline",description:"",tags:{},props:[{name:"events",required:!0,type:{name:"Array",elements:[{name:"FuTimelineEvent"}]}}],slots:[{name:"empty"}],sourceFiles:["/Users/xavier/Documents/Websites/Skkido/Fusion-binary-ui/src/components/activityTimeline/FuActivityTimeline.vue"]};const ie={title:"Fusion/Display/FuActivityTimeline",component:o,tags:["autodocs"],parameters:{docs:{description:{component:`
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
        `}}}},U=[{id:"1",type:"sent",icon:u,description:"Sent by Sarah to 2 recipients",date:"1 Oct 2026, 09:14",version:2},{id:"2",type:"viewed",icon:m,description:"John Appleseed (Approver) viewed the proposal",date:"1 Oct 2026, 10:32"},{id:"3",type:"change_requested",icon:V,description:"John Appleseed (Approver) requested changes",date:"1 Oct 2026, 11:05",note:"Please update the pricing section to reflect the Q4 discount."},{id:"4",type:"revised",icon:N,description:"Reopened for editing by Sarah",date:"2 Oct 2026, 08:45"},{id:"5",type:"sent",icon:E,description:"Resent by Sarah to 2 recipients",date:"2 Oct 2026, 09:00",version:3},{id:"6",type:"viewed",icon:m,description:"John Appleseed (Approver) viewed the proposal",date:"2 Oct 2026, 09:47"},{id:"7",type:"accepted",icon:z,description:"John Appleseed (Approver) accepted the proposal",date:"2 Oct 2026, 10:01"}],W=[{id:"1",type:"created",icon:T,description:"Created by Sarah",date:"28 Sep 2026, 14:00"},{id:"2",type:"sent",icon:u,description:"Sent to 2 recipients",date:"28 Sep 2026, 14:15"},{id:"3",type:"viewed",icon:m,description:"Jane Cooper (Signer) viewed the contract",date:"29 Sep 2026, 08:20"},{id:"4",type:"consent_given",icon:O,description:"Jane Cooper (Signer) consented to sign electronically",date:"29 Sep 2026, 08:21"},{id:"5",type:"signed",icon:q,description:"Jane Cooper (Signer) signed",date:"29 Sep 2026, 08:23"},{id:"6",type:"declined",icon:C,description:"Bob Martin (Signer) declined",date:"30 Sep 2026, 11:10",note:"I need to review this with our legal team first."}],$=[{id:"1",type:"sent",icon:u,description:"Sent by Sarah to 1 recipient",date:"1 Sep 2026, 09:00",version:1},{id:"2",type:"viewed",icon:m,description:"Alice Brown (Approver) viewed the proposal",date:"3 Sep 2026, 14:22"},{id:"3",type:"validity_extended",icon:M,description:"Validity extended by Sarah",date:"15 Sep 2026, 10:00",note:"Extended from 15 Sep 2026 to 30 Sep 2026"}],d={render:e=>({components:{FuActivityTimeline:o},setup(){return{args:e}},template:`
      <div style="max-width: 480px; padding: 24px; background: #fff; border: 1px solid #e5e7eb; border-radius: 12px;">
        <FuActivityTimeline v-bind="args" />
      </div>
    `}),args:{events:U},parameters:{docs:{description:{story:"A full proposal lifecycle: sent → viewed → changes requested → revised → resent → accepted."}}}},c={render:e=>({components:{FuActivityTimeline:o},setup(){return{args:e}},template:`
      <div style="max-width: 480px; padding: 24px; background: #fff; border: 1px solid #e5e7eb; border-radius: 12px;">
        <FuActivityTimeline v-bind="args" />
      </div>
    `}),args:{events:W},parameters:{docs:{description:{story:"Contract events including consent, signing, and a decline with a reason note."}}}},p={render:e=>({components:{FuActivityTimeline:o},setup(){return{args:e}},template:`
      <div style="max-width: 480px; padding: 24px; background: #fff; border: 1px solid #e5e7eb; border-radius: 12px;">
        <FuActivityTimeline v-bind="args" />
      </div>
    `}),args:{events:$},parameters:{docs:{description:{story:"Shows a validity_extended event with a date-range note."}}}},l={render:e=>({components:{FuActivityTimeline:o},setup(){return{args:e}},template:`
      <div style="max-width: 480px; padding: 24px; background: #fff; border: 1px solid #e5e7eb; border-radius: 12px;">
        <FuActivityTimeline v-bind="args" />
      </div>
    `}),args:{events:[]},parameters:{docs:{description:{story:"Empty state — shows the default 'No activity yet.' message."}}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
    events: contractEvents
  },
  parameters: {
    docs: {
      description: {
        story: "Contract events including consent, signing, and a decline with a reason note."
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
    events: validityExtendedEvents
  },
  parameters: {
    docs: {
      description: {
        story: "Shows a validity_extended event with a date-range note."
      }
    }
  }
}`,...p.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
}`,...l.parameters?.docs?.source}}};const se=["ProposalActivity","ContractActivity","WithValidityExtension","Empty"];export{c as ContractActivity,l as Empty,d as ProposalActivity,p as WithValidityExtension,se as __namedExportsOrder,ie as default};
