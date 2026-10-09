import{q as I,r as N,x as O,c as k,s as W,b as a,f as w,j as M,I as P,i as o,T as q,o as r,F as U,g as R,p as E,d as l,t as h,l as $,u as z}from"./iframe-D7VSQkaL.js";import{X as K}from"./x-DubITC5T.js";import{_ as V}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./preload-helper-Ct5FWWRu.js";import"./createLucideIcon-DU4KFhpq.js";const j={key:0,class:"fu-alert-stack"},G={class:"fu-alert-strip__body"},X={class:"fu-alert-strip__msg"},Y={key:0,class:"fu-alert-strip__sub"},H={class:"fu-alert-strip__actions"},J=["href","onClick"],L=["onClick"],Q="fu-alert-dismissed-",_=I({__name:"FusionAlertBanner",props:{alerts:{}},setup(B){const f=B;function v(e){return e.storageKey??`${Q}${e.id}`}function A(e){try{return e.persistent===!1?sessionStorage:localStorage}catch{return null}}const i=N(new Set);O(()=>{const e=new Set;for(const t of f.alerts){if(t.dismissible===!1)continue;A(t)?.getItem(v(t))==="1"&&e.add(t.id)}i.value=e});const x=k(()=>{const e=new Set;for(const t of f.alerts)i.value.has(t.id)||e.add(t.id);return e}),T=k(()=>f.alerts.filter(e=>!i.value.has(e.id)));function C(e){i.value=new Set([...i.value,e.id]);try{A(e)?.setItem(v(e),"1")}catch{}}return(e,t)=>(r(),W(q,{to:"body"},[x.value.size>0?(r(),a("div",j,[w(P,{name:"fu-alert-strip",tag:"div",class:"fu-alert-stack__inner"},{default:M(()=>[(r(!0),a(U,null,R(T.value,s=>(r(),a("div",{key:s.id,class:E(["fu-alert-strip",`fu-alert-strip--${s.type}`])},[t[0]||(t[0]=l("span",{class:"fu-alert-strip__dot"},null,-1)),l("div",G,[l("span",X,h(s.message),1),s.sub?(r(),a("span",Y,h(s.sub),1)):o("",!0)]),l("div",H,[s.cta?(r(),a("a",{key:0,href:s.cta.href??"#",class:"fu-alert-strip__cta",onClick:$(D=>s.cta.action?s.cta.action():null,["prevent"])},h(s.cta.label),9,J)):o("",!0),s.dismissible!==!1?(r(),a("button",{key:1,class:"fu-alert-strip__dismiss",title:"Dismiss",onClick:D=>C(s)},[w(z(K),{size:13,"stroke-width":2.5})],8,L)):o("",!0)])],2))),128))]),_:1})])):o("",!0)]))}}),n=V(_,[["__scopeId","data-v-8242f9e7"]]);_.__docgenInfo={exportName:"default",displayName:"FusionAlertBanner",description:"",tags:{},props:[{name:"alerts",required:!0,type:{name:"Array",elements:[{name:"AlertItem"}]}}],sourceFiles:["/Users/xavier/Documents/Websites/Skkido/Fusion-binary-ui/src/components/alertBanner/FusionAlertBanner.vue"]};const ne={title:"Fusion/Feedback/FusionAlertBanner",component:n,tags:["autodocs"],parameters:{layout:"fullscreen",docs:{description:{component:"\n**FusionAlertBanner** renders a stack of alert strips pinned to the bottom of the viewport.\nIt teleports to `<body>` so it floats above all app content without shifting the layout.\n\n---\n\n## Features\n\n- Four types: `trial`, `warning`, `outage`, `info`\n- Stacks upward — multiple alerts appear as rows\n- **Dismissible by default** — user clicks ✕, strip slides out\n- **Non-dismissible** — `dismissible: false` for critical outages that must stay until resolved\n- **Persistent vs session dismissal** — controls whether the user's close is remembered across page loads\n- Optional **CTA button** per alert (link or callback)\n\n---\n\n## Usage\n\n```vue\n<FusionAlertBanner :alerts=\"alerts\" />\n```\n\n```ts\nconst alerts = [\n  {\n    id: 'trial-acme',\n    type: 'trial',\n    message: 'Your trial ends in 7 days.',\n    sub: 'Upgrade to keep your data.',\n    dismissible: true,\n    persistent: false,          // reappears each new browser session\n    cta: { label: 'Upgrade now', href: '/settings/billing' },\n  },\n  {\n    id: 'cms-announcement-1',\n    type: 'info',\n    message: 'Template Studio is now live.',\n    dismissible: true,\n    persistent: true,           // stays dismissed forever (default)\n  },\n  {\n    id: 'cms-outage-1',\n    type: 'outage',\n    message: 'We are experiencing an outage.',\n    dismissible: false,         // user cannot close this at all\n  },\n]\n```\n\n---\n\n## Alert object\n\n| Field | Type | Default | Notes |\n|---|---|---|---|\n| `id` | `string` | — | **Required.** Unique identifier, used as storage key base |\n| `type` | `\"trial\" \\| \"warning\" \\| \"outage\" \\| \"info\"` | — | **Required.** Drives colour scheme |\n| `message` | `string` | — | **Required.** Bold primary line |\n| `sub` | `string` | — | Dimmer secondary line |\n| `dismissible` | `boolean` | `true` | Set `false` for hard outages with no ✕ button |\n| `persistent` | `boolean` | `true` | `true` → `localStorage` (dismissed forever). `false` → `sessionStorage` (dismissed per session — reappears on next load) |\n| `cta` | `{ label, href?, action? }` | — | Button rendered on the right |\n| `storageKey` | `string` | `fu-alert-dismissed-{id}` | Override the storage key |\n\n---\n\n## Persistence behaviour\n\n| Scenario | `persistent` | Result |\n|---|---|---|\n| CMS announcement | `true` (default) | Dismissed once → gone until CMS changes the alert `id` |\n| Trial banner | `false` | Dismissed → hidden for this browser session only. Comes back next time the user opens the app |\n| Hard outage | `dismissible: false` | No ✕ button. Stays until removed from the `alerts` array |\n        "}}}},y={id:"story-trial",type:"trial",message:"Your trial ends in 7 days.",sub:"Upgrade to keep your proposals, templates, and client data.",dismissible:!0,persistent:!1,cta:{label:"Upgrade now",href:"#"}},b={id:"story-warning",type:"warning",message:"Elevated API response times detected.",sub:"Some features may be slower than usual. We're investigating.",dismissible:!0,persistent:!0},S={id:"story-outage",type:"outage",message:"Active service outage — email delivery is down.",sub:"Sent emails are queued and will be delivered when resolved.",dismissible:!1},F={id:"story-info",type:"info",message:"Template Studio is now live.",sub:"Build reusable document templates and export JSON.",dismissible:!0,persistent:!0},d={name:"Trial — session dismiss (persistent: false)",parameters:{docs:{description:{story:"Closing this hides it for the current browser session only. It reappears on the next page load — keeping the upgrade reminder alive without being permanently dismissible."}}},render:()=>({components:{FusionAlertBanner:n},setup(){return{alerts:[y]}},template:'<div style="height:160px;background:#f1f5f9;" /><FusionAlertBanner :alerts="alerts" />'})},u={name:"Warning — persistent dismiss (persistent: true)",parameters:{docs:{description:{story:"Closing this saves the dismissal to localStorage. The alert won't reappear unless the alert's id changes (e.g. a new CMS entry)."}}},render:()=>({components:{FusionAlertBanner:n},setup(){return{alerts:[b]}},template:'<div style="height:160px;background:#f1f5f9;" /><FusionAlertBanner :alerts="alerts" />'})},c={name:"Outage — non-dismissible",parameters:{docs:{description:{story:"No ✕ button. Stays until removed from the alerts array (i.e. when the CMS entry is deactivated or deleted)."}}},render:()=>({components:{FusionAlertBanner:n},setup(){return{alerts:[S]}},template:'<div style="height:160px;background:#f1f5f9;" /><FusionAlertBanner :alerts="alerts" />'})},p={name:"Info alert",render:()=>({components:{FusionAlertBanner:n},setup(){return{alerts:[F]}},template:'<div style="height:160px;background:#f1f5f9;" /><FusionAlertBanner :alerts="alerts" />'})},m={name:"All types stacked",parameters:{docs:{description:{story:"Trial sits on top (most urgent), then warning, outage, info at the bottom."}}},render:()=>({components:{FusionAlertBanner:n},setup(){return{alerts:[y,b,S,F]}},template:'<div style="height:260px;background:#f1f5f9;" /><FusionAlertBanner :alerts="alerts" />'})},g={name:"Trial + service warning",render:()=>({components:{FusionAlertBanner:n},setup(){return{alerts:[y,b]}},template:'<div style="height:200px;background:#f1f5f9;" /><FusionAlertBanner :alerts="alerts" />'})};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  name: "Trial — session dismiss (persistent: false)",
  parameters: {
    docs: {
      description: {
        story: "Closing this hides it for the current browser session only. It reappears on the next page load — keeping the upgrade reminder alive without being permanently dismissible."
      }
    }
  },
  render: () => ({
    components: {
      FusionAlertBanner
    },
    setup() {
      return {
        alerts: [trialAlert]
      };
    },
    template: \`<div style="height:160px;background:#f1f5f9;" /><FusionAlertBanner :alerts="alerts" />\`
  })
}`,...d.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  name: "Warning — persistent dismiss (persistent: true)",
  parameters: {
    docs: {
      description: {
        story: "Closing this saves the dismissal to localStorage. The alert won't reappear unless the alert's id changes (e.g. a new CMS entry)."
      }
    }
  },
  render: () => ({
    components: {
      FusionAlertBanner
    },
    setup() {
      return {
        alerts: [warningAlert]
      };
    },
    template: \`<div style="height:160px;background:#f1f5f9;" /><FusionAlertBanner :alerts="alerts" />\`
  })
}`,...u.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  name: "Outage — non-dismissible",
  parameters: {
    docs: {
      description: {
        story: "No ✕ button. Stays until removed from the alerts array (i.e. when the CMS entry is deactivated or deleted)."
      }
    }
  },
  render: () => ({
    components: {
      FusionAlertBanner
    },
    setup() {
      return {
        alerts: [outageAlert]
      };
    },
    template: \`<div style="height:160px;background:#f1f5f9;" /><FusionAlertBanner :alerts="alerts" />\`
  })
}`,...c.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  name: "Info alert",
  render: () => ({
    components: {
      FusionAlertBanner
    },
    setup() {
      return {
        alerts: [infoAlert]
      };
    },
    template: \`<div style="height:160px;background:#f1f5f9;" /><FusionAlertBanner :alerts="alerts" />\`
  })
}`,...p.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  name: "All types stacked",
  parameters: {
    docs: {
      description: {
        story: "Trial sits on top (most urgent), then warning, outage, info at the bottom."
      }
    }
  },
  render: () => ({
    components: {
      FusionAlertBanner
    },
    setup() {
      return {
        alerts: [trialAlert, warningAlert, outageAlert, infoAlert]
      };
    },
    template: \`<div style="height:260px;background:#f1f5f9;" /><FusionAlertBanner :alerts="alerts" />\`
  })
}`,...m.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  name: "Trial + service warning",
  render: () => ({
    components: {
      FusionAlertBanner
    },
    setup() {
      return {
        alerts: [trialAlert, warningAlert]
      };
    },
    template: \`<div style="height:200px;background:#f1f5f9;" /><FusionAlertBanner :alerts="alerts" />\`
  })
}`,...g.parameters?.docs?.source}}};const ae=["TrialSessionDismiss","WarningPersistentDismiss","OutageNonDismissible","InfoOnly","AllStacked","TrialPlusWarning"];export{m as AllStacked,p as InfoOnly,c as OutageNonDismissible,g as TrialPlusWarning,d as TrialSessionDismiss,u as WarningPersistentDismiss,ae as __namedExportsOrder,ne as default};
