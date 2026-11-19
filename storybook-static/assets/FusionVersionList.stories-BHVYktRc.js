import{q as W,r as L,c as $,b as s,t as o,i as c,F as f,g as S,o as t,d as n,f as q,p as A,u as z,A as B}from"./iframe-Bit2fKoK.js";import{C as I}from"./chevron-right-C5PQv8YI.js";import{_ as R}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./preload-helper-Ct5FWWRu.js";import"./createLucideIcon-xyDXa4T9.js";const j={class:"fu-versions"},D={key:0,class:"fu-versions__empty"},H={class:"fu-versions__head"},M=["aria-expanded","onClick"],P={class:"fu-versions__titles"},Y={class:"fu-versions__line"},U={class:"fu-versions__label"},G={key:0,class:"fu-versions__tag"},J={class:"fu-versions__sent"},K={key:0,class:"fu-versions__summary"},Q={class:"fu-versions__side"},X=["onClick"],Z={key:0,class:"fu-versions__body"},ee={class:"fu-versions__col"},ne={class:"fu-versions__grow"},se={class:"fu-versions__muted"},te={key:0,class:"fu-versions__muted"},oe={class:"fu-versions__sentrow"},ae={class:"fu-versions__grow"},re=["onClick"],ie={class:"fu-versions__col"},ce={class:"fu-versions__grow"},le={key:0,class:"fu-versions__muted"},E=W({__name:"FusionVersionList",props:{versions:{},open:{},startAllOpen:{type:Boolean,default:!1},emptyText:{default:"Not sent yet. The first send creates v1."}},emits:["update:open","compare","open-email"],setup(l,{emit:u}){const r=l,T=u,N=L(r.startAllOpen?r.versions.map(m=>m.id):r.versions[0]?[r.versions[0].id]:[]),d=$(()=>r.open??N.value);function O(m){const i=d.value.includes(m)?d.value.filter(e=>e!==m):[...d.value,m];N.value=i,T("update:open",i)}return(m,i)=>(t(),s("div",j,[l.versions.length?c("",!0):(t(),s("p",D,o(l.emptyText),1)),(t(!0),s(f,null,S(l.versions,e=>(t(),s("div",{key:e.id,class:"fu-versions__item"},[n("div",H,[n("button",{type:"button",class:"fu-versions__toggle","aria-expanded":d.value.includes(e.id),onClick:a=>O(e.id)},[q(z(I),{size:14,class:A(["fu-versions__chev",{"is-open":d.value.includes(e.id)}])},null,8,["class"]),n("span",P,[n("span",Y,[n("b",U,o(e.label),1),e.tag?(t(),s("span",G,o(e.tag),1)):c("",!0),n("span",J,o(e.sentText),1)]),e.summary?(t(),s("span",K,o(e.summary),1)):c("",!0)])],8,M),n("div",Q,[e.answer?(t(),s("span",{key:0,class:A(["fu-versions__pill",`is-${e.answer.tone||"neutral"}`])},o(e.answer.text),3)):c("",!0),e.compareLabel?(t(),s("button",{key:1,type:"button",class:"fu-versions__link",onClick:a=>T("compare",e.id)},o(e.compareLabel),9,X)):c("",!0)])]),d.value.includes(e.id)?(t(),s("div",Z,[B(m.$slots,"body",{version:e},()=>[i[1]||(i[1]=n("span",{class:"fu-versions__key"},"Sent",-1)),n("div",ee,[(t(!0),s(f,null,S(e.sent||[],a=>(t(),s("div",{key:a.name,class:"fu-versions__sentrow"},[n("span",ne,o(a.name),1),n("span",se,o(a.type)+" · "+o(a.count),1)]))),128)),e.sent?.length?c("",!0):(t(),s("span",te,"Nothing recorded."))]),e.email?(t(),s(f,{key:0},[i[0]||(i[0]=n("span",{class:"fu-versions__key"},"Email",-1)),n("div",oe,[n("span",ae,o(e.email.subject),1),n("button",{type:"button",class:"fu-versions__link",onClick:a=>T("open-email",e.id)},"Open",8,re)])],64)):c("",!0),i[2]||(i[2]=n("span",{class:"fu-versions__key"},"Client said",-1)),n("div",ie,[(t(!0),s(f,null,S(e.feedback||[],a=>(t(),s("div",{key:a.text,class:"fu-versions__sentrow"},[n("span",ce,o(a.text),1),n("span",{class:A(["fu-versions__pill fu-versions__pill--sm",`is-${a.tone||"neutral"}`])},o(a.state),3)]))),128)),e.feedback?.length?c("",!0):(t(),s("span",le,o(e.feedbackEmpty||"No comments."),1))])],!0)])):c("",!0)]))),128))]))}}),V=R(E,[["__scopeId","data-v-b10ca0a9"]]);E.__docgenInfo={exportName:"default",displayName:"FusionVersionList",description:"",tags:{},props:[{name:"versions",required:!0,type:{name:"Array",elements:[{name:"VersionItem"}]}},{name:"open",description:"Ids of open versions (v-model:open). When omitted the list manages it and opens the first one.",required:!1,type:{name:"Array",elements:[{name:"TSParenthesizedType"}]}},{name:"startAllOpen",description:"Open every version to start.",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"emptyText",required:!1,type:{name:"string"},defaultValue:{func:!1,value:'"Not sent yet. The first send creates v1."'}}],events:[{name:"update:open",type:{names:["Array"],elements:[{name:"TSParenthesizedType"}]}},{name:"compare",type:{names:["union"],elements:[{name:"string"},{name:"number"}]}},{name:"open-email",type:{names:["union"],elements:[{name:"string"},{name:"number"}]}}],slots:[{name:"body",scoped:!0,bindings:[{name:"version",title:"binding"}]}],sourceFiles:["/Users/xavier/Documents/Websites/Skkido/Fusion-binary-ui/src/components/versionList/FusionVersionList.vue"]};const ge={title:"Fusion/Data Display/FusionVersionList",component:V,tags:["autodocs"],parameters:{layout:"padded",docs:{description:{component:'\nThe history of what was sent to a client, newest first. A version is **one send of one task**: v1 is the first send, and after the client asks for changes, the next send is v2.\n\nEach version opens to show three things:\n\n- **Sent**: the task and each subtask, with what was shown and how much of it.\n- **Email**: the subject that went out, with an **Open** link.\n- **Client said**: the client\'s comments for that version, each with a coloured state (To fix, Fixed in v3, Approved).\n\nProps:\n\n- `versions`: `{ id, label, sentText, summary, tag, answer: { text, tone }, sent, email, feedback, feedbackEmpty, compareLabel }`.\n- `v-model:open`: which versions are open. By default the newest is open. `startAllOpen` opens all.\n- Events: `compare` (the compare link), `open-email`.\n- Slot `body` replaces the open content of a version.\n- Tones: `neutral`, `info`, `success`, `warning`, `danger`.\n\n```vue\n<FusionVersionList :versions="versions" @compare="showCompare" @open-email="openEmail" />\n```\n'}}},argTypes:{startAllOpen:{control:"boolean"}}},p={id:1,label:"v1",sentText:"Sent 3 Nov by Romeo Tumbee",summary:"4 frames · First send",answer:{text:"Changes requested",tone:"danger"},sent:[{name:"This task",type:"Figma frames",count:"2 frames"},{name:"Header and navigation",type:"Figma frames",count:"1 frame"},{name:"Hero section",type:"Images",count:"2 images"}],email:{subject:"Ready to check: Create wireframes for new landing page"},feedback:[{text:"Make the sign-up button more prominent",state:"Fixed in v2",tone:"success"},{text:"Sign-up button is still small on mobile",state:"Fixed in v2",tone:"success"}]},v={id:2,label:"v2",sentText:"Sent 10 Nov by Faris Ansari",summary:"4 frames · 2 updated",answer:{text:"Changes requested",tone:"danger"},compareLabel:"Compare with v1",sent:[{name:"This task",type:"Figma frames",count:"2 frames, updated"},{name:"Header and navigation",type:"Figma frames",count:"1 frame"},{name:"Hero section",type:"Images",count:"2 images"}],email:{subject:"Version 2 ready to check: Create wireframes for new landing page"},feedback:[{text:"Button is too close to the edge on mobile",state:"Fixed in v3",tone:"success"}]},g={id:3,label:"v3",tag:"Latest sent",sentText:"Sent 14 Nov by Romeo Tumbee",summary:"4 frames · 1 updated",answer:{text:"Waiting for the client",tone:"info"},compareLabel:"Compare with v2",sent:[{name:"This task",type:"Figma frames",count:"2 frames"},{name:"Header and navigation",type:"Figma frames",count:"1 frame, updated"},{name:"Hero section",type:"Images",count:"2 images"}],email:{subject:"Version 3 ready to check: Create wireframes for new landing page"},feedback:[],feedbackEmpty:"Waiting for the client."},_={name:"Three versions, v3 waiting",args:{versions:[g,v,p]}},h={name:"First send (v1 waiting)",args:{versions:[{...p,tag:"Latest sent",answer:{text:"Waiting for the client",tone:"info"},feedback:[],feedbackEmpty:"Waiting for the client."}]}},y={name:"The client asked for changes",args:{versions:[{...p,tag:"Latest sent",feedback:[{text:"Make the sign-up button more prominent",state:"To fix",tone:"warning"},{text:"Sign-up button is still small on mobile",state:"To fix",tone:"warning"}]}]}},b={name:"Fixed, ready to send as the next version",args:{versions:[{...p,tag:"Latest sent",feedback:[{text:"Make the sign-up button more prominent",state:"Fixed, going in v2",tone:"success"},{text:"Sign-up button is still small on mobile",state:"Fixed, going in v2",tone:"success"}]}]}},x={name:"Approved on the last version",args:{versions:[{...g,answer:{text:"Approved",tone:"success"},feedback:[{text:"Approved this version",state:"Approved",tone:"success"}]},v,p]}},k={name:"Nothing sent yet",args:{versions:[]}},w={args:{versions:[g,v,p],startAllOpen:!0}},F={name:"Controlled open state",render:()=>({components:{FusionVersionList:V},setup(){const l=L([2]),u=L("");return{open:l,log:u,versions:[g,v,p],onCompare:r=>u.value=`compare ${r}`,onEmail:r=>u.value=`open email of ${r}`}},template:`
<div>
  <p style="margin:0 0 10px;font-size:13px">Open: {{ open.join(', ') || 'none' }} · {{ log }}</p>
  <FusionVersionList :versions="versions" v-model:open="open" @compare="onCompare" @open-email="onEmail" />
</div>`})},C={name:"Your own content when a version opens",args:{versions:[g,v]},render:l=>({components:{FusionVersionList:V},setup:()=>({args:l}),template:`
<FusionVersionList v-bind="args">
  <template #body="{ version }">
    <div style="grid-column:1 / -1;font-size:13px">Anything can go here for <b>{{ version.label }}</b>: a side by side compare, a download, a file list.</div>
  </template>
</FusionVersionList>`})};_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  name: "Three versions, v3 waiting",
  args: {
    versions: [v3Waiting, v2, v1]
  }
}`,..._.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  name: "First send (v1 waiting)",
  args: {
    versions: [{
      ...v1,
      tag: "Latest sent",
      answer: {
        text: "Waiting for the client",
        tone: "info"
      },
      feedback: [],
      feedbackEmpty: "Waiting for the client."
    }]
  }
}`,...h.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  name: "The client asked for changes",
  args: {
    versions: [{
      ...v1,
      tag: "Latest sent",
      feedback: [{
        text: "Make the sign-up button more prominent",
        state: "To fix",
        tone: "warning"
      }, {
        text: "Sign-up button is still small on mobile",
        state: "To fix",
        tone: "warning"
      }]
    }]
  }
}`,...y.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  name: "Fixed, ready to send as the next version",
  args: {
    versions: [{
      ...v1,
      tag: "Latest sent",
      feedback: [{
        text: "Make the sign-up button more prominent",
        state: "Fixed, going in v2",
        tone: "success"
      }, {
        text: "Sign-up button is still small on mobile",
        state: "Fixed, going in v2",
        tone: "success"
      }]
    }]
  }
}`,...b.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  name: "Approved on the last version",
  args: {
    versions: [{
      ...v3Waiting,
      answer: {
        text: "Approved",
        tone: "success"
      },
      feedback: [{
        text: "Approved this version",
        state: "Approved",
        tone: "success"
      }]
    }, v2, v1]
  }
}`,...x.parameters?.docs?.source}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  name: "Nothing sent yet",
  args: {
    versions: []
  }
}`,...k.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    versions: [v3Waiting, v2, v1],
    startAllOpen: true
  }
}`,...w.parameters?.docs?.source}}};F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  name: "Controlled open state",
  render: () => ({
    components: {
      FusionVersionList
    },
    setup() {
      const open = ref<(string | number)[]>([2]);
      const log = ref("");
      return {
        open,
        log,
        versions: [v3Waiting, v2, v1],
        onCompare: (id: string | number) => log.value = \`compare \${id}\`,
        onEmail: (id: string | number) => log.value = \`open email of \${id}\`
      };
    },
    template: \`
<div>
  <p style="margin:0 0 10px;font-size:13px">Open: {{ open.join(', ') || 'none' }} · {{ log }}</p>
  <FusionVersionList :versions="versions" v-model:open="open" @compare="onCompare" @open-email="onEmail" />
</div>\`
  })
}`,...F.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  name: "Your own content when a version opens",
  args: {
    versions: [v3Waiting, v2]
  },
  render: args => ({
    components: {
      FusionVersionList
    },
    setup: () => ({
      args
    }),
    template: \`
<FusionVersionList v-bind="args">
  <template #body="{ version }">
    <div style="grid-column:1 / -1;font-size:13px">Anything can go here for <b>{{ version.label }}</b>: a side by side compare, a download, a file list.</div>
  </template>
</FusionVersionList>\`
  })
}`,...C.parameters?.docs?.source}}};const fe=["Default","FirstSend","ChangesRequested","FixedReadyForNext","Approved","NothingSent","AllOpen","Controlled","CustomBody"];export{w as AllOpen,x as Approved,y as ChangesRequested,F as Controlled,C as CustomBody,_ as Default,h as FirstSend,b as FixedReadyForNext,k as NothingSent,fe as __namedExportsOrder,ge as default};
