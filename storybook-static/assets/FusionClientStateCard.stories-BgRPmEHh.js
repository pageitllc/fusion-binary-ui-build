import{q as x,s,j as k,p as S,y as A,o as t,f as w,d as o,t as F,b as c,F as d,g as m,i as g}from"./iframe-D7VSQkaL.js";import{F as u}from"./FusionBadge-BgmdZv1V.js";import{F as B}from"./FuAvatar-Cl3DFHgX.js";import{_ as N}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./preload-helper-Ct5FWWRu.js";const R={class:"fu-client-state-card__body"},M={class:"fu-client-state-card__header"},P={class:"fu-client-state-card__name"},E={key:0,class:"fu-client-state-card__signals"},f=x({__name:"FusionClientStateCard",props:{name:{},initial:{},avatarBg:{default:"#fee2e2"},avatarColor:{default:"#991b1b"},sources:{default:()=>[]},signals:{default:()=>[]},status:{},clickable:{type:Boolean,default:!0}},emits:["click"],setup(e,{emit:v}){const h=e,b=v;function C(){h.clickable&&b("click")}return(I,j)=>(t(),s(A(e.clickable?"button":"div"),{class:S(["fu-client-state-card",{"fu-client-state-card--clickable":e.clickable}]),type:e.clickable?"button":void 0,onClick:C},{default:k(()=>[w(B,{class:"fu-client-state-card__avatar",name:e.initial||e.name,bg:e.avatarBg,color:e.avatarColor,size:"lg"},null,8,["name","bg","color"]),o("div",R,[o("div",M,[o("span",P,F(e.name),1),(t(!0),c(d,null,m(e.sources,a=>(t(),s(u,{key:a,class:"fu-client-state-card__source",text:a,size:"sm",variant:"subtle"},null,8,["text"]))),128))]),e.signals&&e.signals.length?(t(),c("div",E,[(t(!0),c(d,null,m(e.signals,(a,y)=>(t(),s(u,{key:y,text:a.text,size:"sm",themeClass:a.theme||"fu-badge--danger-subtle"},null,8,["text","themeClass"]))),128))])):g("",!0)]),e.status?(t(),s(u,{key:0,class:"fu-client-state-card__status",text:e.status.text,size:"md",themeClass:e.status.theme||"fu-badge--danger-subtle"},null,8,["text","themeClass"])):g("",!0)]),_:1},8,["class","type"]))}}),p=N(f,[["__scopeId","data-v-2ff9c35d"]]);f.__docgenInfo={exportName:"default",displayName:"FusionClientStateCard",description:"",tags:{},props:[{name:"name",description:"Client/company name — also the source for the auto-derived initials when no `initial` is given",required:!0,type:{name:"string"}},{name:"initial",description:"Overrides the auto-derived (first letter of each word) initials shown in the avatar",required:!1,type:{name:"string"}},{name:"avatarBg",description:"Avatar circle background color",required:!1,type:{name:"string"},defaultValue:{func:!1,value:'"#fee2e2"'}},{name:"avatarColor",description:"Avatar initials text color",required:!1,type:{name:"string"},defaultValue:{func:!1,value:'"#991b1b"'}},{name:"sources",description:'Connected signal sources this client is read from, e.g. ["CRM", "Stripe", "Gmail"]',required:!1,type:{name:"Array",elements:[{name:"string"}]},defaultValue:{func:!1,value:"() => []"}},{name:"signals",description:'Specific attention signals read from those sources, e.g. "Invoice overdue · 7 days"',required:!1,type:{name:"Array",elements:[{name:"ClientSignalBadge"}]},defaultValue:{func:!1,value:"() => []"}},{name:"status",description:'Overall attention state shown on the right, e.g. "At risk"',required:!1,type:{name:"ClientStatusBadge"}},{name:"clickable",description:"Renders as a `<button>` with hover/focus affordance and emits `click`",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"true"}}],events:[{name:"click"}],sourceFiles:["/Users/xavier/Documents/Websites/Skkido/Fusion-binary-ui/src/components/cards/FusionClientStateCard.vue"]};const L={title:"Fusion/Data Display/FusionClientStateCard",component:p,tags:["autodocs"],parameters:{docs:{description:{component:"\n### **FusionClientStateCard**\n\nA row card used in client intelligence lists to show a client's name, which signal\nsources feed it, the specific attention signals read from those sources, and an\noverall status — e.g. the Desk \"Client intelligence\" list.\n\nIt uses **two different kinds of badge**, both backed by `FusionBadge`:\n\n- **`sources`** — neutral, subtle gray pills naming the connected signal sources this\n  client is read from (e.g. `CRM`, `Stripe`, `Gmail`). Rendered next to the name.\n- **`signals`** — colored pills for the specific attention signals those sources\n  produced (e.g. `\"No reply · 14 days\"`, `\"Project stalled\"`). Each can have its own\n  `theme` (a `FusionBadge` themeClass), defaulting to `fu-badge--danger-subtle`.\n\nA separate **`status`** badge (e.g. `\"At risk\"`) is pinned to the right of the card.\n\n---\n\n```vue\n<FusionClientStateCard\n  name=\"Emma Evans\"\n  :sources=\"['CRM', 'Stripe', 'Gmail']\"\n  :signals=\"[\n    { text: 'No reply · 14 days' },\n    { text: 'Invoice overdue · 7 days' },\n    { text: 'Project stalled', theme: 'fu-badge--warning-subtle' },\n  ]\"\n  :status=\"{ text: 'At risk' }\"\n/>\n```\n\n#### Props\n| Prop | Type | Description |\n|------|------|-------------|\n| `name` | `string` | Client/company name. Also used to derive avatar initials. |\n| `initial` | `string?` | Overrides the auto-derived initials. |\n| `avatarBg` / `avatarColor` | `string?` | Avatar circle colors. Defaults to the \"at risk\" pink/red pair — tie these to the client's status. |\n| `sources` | `string[]?` | Connected signal sources, rendered as subtle gray badges. |\n| `signals` | `{ text, theme? }[]?` | Attention signals, rendered as colored badges. |\n| `status` | `{ text, theme? }?` | Overall status badge shown on the right. |\n| `clickable` | `boolean?` | Renders as a button and emits `click` (default `true`). |\n        "}}},argTypes:{name:{control:"text"},sources:{control:"object"},signals:{control:"object"},status:{control:"object"},avatarBg:{control:"color"},avatarColor:{control:"color"}}},n={args:{name:"Emma Evans",sources:["CRM","Stripe","Gmail"],signals:[{text:"No reply · 14 days"},{text:"Invoice overdue · 7 days"},{text:"Project stalled",theme:"fu-badge--warning-subtle"}],status:{text:"At risk"}}},r={args:{name:"Marcus Ltd",avatarBg:"#fef3c7",avatarColor:"#92400e",sources:["CRM","Jira"],signals:[{text:"No activity · 8 days",theme:"fu-badge--warning-subtle"},{text:"Proposal unsigned",theme:"fu-badge--warning-subtle"}],status:{text:"Needs attention",theme:"fu-badge--warning-subtle"}}},i={args:{name:"Brightfield Agency",avatarBg:"#dcfce7",avatarColor:"#166534",sources:["CRM","Gmail","Stripe"],signals:[{text:"All signals healthy",theme:"fu-badge--success"}],status:{text:"Active",theme:"fu-badge--success"}}},l={render:()=>({components:{FusionClientStateCard:p},template:`
      <div style="display: flex; flex-direction: column; gap: 12px;">
        <FusionClientStateCard
          name="Emma Evans"
          :sources="['CRM', 'Stripe', 'Gmail']"
          :signals="[
            { text: 'No reply · 14 days' },
            { text: 'Invoice overdue · 7 days' },
            { text: 'Project stalled', theme: 'fu-badge--warning-subtle' },
          ]"
          :status="{ text: 'At risk' }"
        />
        <FusionClientStateCard
          name="TechSpark Inc"
          :sources="['CRM', 'Stripe', 'Jira']"
          :signals="[
            { text: 'Payment failed' },
            { text: 'No reply · 5 days' },
          ]"
          :status="{ text: 'At risk' }"
        />
        <FusionClientStateCard
          name="Marcus Ltd"
          avatarBg="#fef3c7"
          avatarColor="#92400e"
          :sources="['CRM', 'Jira']"
          :signals="[
            { text: 'No activity · 8 days', theme: 'fu-badge--warning-subtle' },
            { text: 'Proposal unsigned', theme: 'fu-badge--warning-subtle' },
          ]"
          :status="{ text: 'Needs attention', theme: 'fu-badge--warning-subtle' }"
        />
      </div>
    `})};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    name: "Emma Evans",
    sources: ["CRM", "Stripe", "Gmail"],
    signals: [{
      text: "No reply · 14 days"
    }, {
      text: "Invoice overdue · 7 days"
    }, {
      text: "Project stalled",
      theme: "fu-badge--warning-subtle"
    }],
    status: {
      text: "At risk"
    }
  }
}`,...n.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    name: "Marcus Ltd",
    avatarBg: "#fef3c7",
    avatarColor: "#92400e",
    sources: ["CRM", "Jira"],
    signals: [{
      text: "No activity · 8 days",
      theme: "fu-badge--warning-subtle"
    }, {
      text: "Proposal unsigned",
      theme: "fu-badge--warning-subtle"
    }],
    status: {
      text: "Needs attention",
      theme: "fu-badge--warning-subtle"
    }
  }
}`,...r.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    name: "Brightfield Agency",
    avatarBg: "#dcfce7",
    avatarColor: "#166534",
    sources: ["CRM", "Gmail", "Stripe"],
    signals: [{
      text: "All signals healthy",
      theme: "fu-badge--success"
    }],
    status: {
      text: "Active",
      theme: "fu-badge--success"
    }
  }
}`,...i.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      FusionClientStateCard
    },
    template: \`
      <div style="display: flex; flex-direction: column; gap: 12px;">
        <FusionClientStateCard
          name="Emma Evans"
          :sources="['CRM', 'Stripe', 'Gmail']"
          :signals="[
            { text: 'No reply · 14 days' },
            { text: 'Invoice overdue · 7 days' },
            { text: 'Project stalled', theme: 'fu-badge--warning-subtle' },
          ]"
          :status="{ text: 'At risk' }"
        />
        <FusionClientStateCard
          name="TechSpark Inc"
          :sources="['CRM', 'Stripe', 'Jira']"
          :signals="[
            { text: 'Payment failed' },
            { text: 'No reply · 5 days' },
          ]"
          :status="{ text: 'At risk' }"
        />
        <FusionClientStateCard
          name="Marcus Ltd"
          avatarBg="#fef3c7"
          avatarColor="#92400e"
          :sources="['CRM', 'Jira']"
          :signals="[
            { text: 'No activity · 8 days', theme: 'fu-badge--warning-subtle' },
            { text: 'Proposal unsigned', theme: 'fu-badge--warning-subtle' },
          ]"
          :status="{ text: 'Needs attention', theme: 'fu-badge--warning-subtle' }"
        />
      </div>
    \`
  })
}`,...l.parameters?.docs?.source}}};const J=["AtRisk","NeedsAttention","Active","ClientIntelligenceList"];export{i as Active,n as AtRisk,l as ClientIntelligenceList,r as NeedsAttention,J as __namedExportsOrder,L as default};
