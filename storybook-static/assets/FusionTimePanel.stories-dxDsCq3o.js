import{q as J,r as c,c as y,b as d,d as t,f as m,u as v,t as r,F as A,p as N,i as p,B as K,g as Y,s as Z,e as R,o,m as ee}from"./iframe-DLJy-DHW.js";import{F as E}from"./FusionTreePicker-C-LF5mJc.js";import{F as te}from"./FusionSwitch-qMj_yHzU.js";import{F as ne}from"./FuSegmentedControl-CB1wRafJ.js";import{C as ae}from"./chevron-left-DXfoJJ8S.js";import{C as le}from"./chevron-right-DxdVyPGM.js";import{X as se}from"./x-GJVIuc3e.js";import{c as H}from"./createLucideIcon-CURt8gZv.js";import{C as O}from"./chevron-down-CUXnPYIZ.js";import{P as oe}from"./pin-PqCxoy6k.js";import{_ as ie}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{F as de}from"./FusionTimerButton-B_HL3Y00.js";import"./preload-helper-Ct5FWWRu.js";import"./search-APFKcIyT.js";import"./plus-LMukCZn9.js";import"./clock-D6A6Xg7P.js";/**
 * @license @lucide/vue v1.54.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const re={name:"pause",size:24,node:[["rect",{x:"14",y:"3",width:"5",height:"18",rx:"1",key:"kaeet6"}],["rect",{x:"5",y:"3",width:"5",height:"18",rx:"1",key:"1wsw3u"}]]},ue=H(re);/**
 * @license @lucide/vue v1.54.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ce={name:"play",size:24,node:[["path",{d:"M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z",key:"10ikf1"}]]},j=H(ce),me={class:"fu-timepanel",role:"dialog","aria-label":"Time tracker"},pe={class:"fu-timepanel__head"},be={class:"fu-timepanel__day"},fe={class:"fu-timepanel__clock","aria-live":"off"},ge={class:"fu-timepanel__now"},ve=["disabled"],he={class:"fu-timepanel__steps"},ke={class:"fu-timepanel__step"},ye=["aria-expanded"],xe={key:0},Te={key:0,class:"fu-timepanel__pop"},Ie=["disabled","aria-expanded"],Ne={key:0,class:"fu-timepanel__pop"},we=["value"],Ce={key:1,class:"fu-timepanel__bill"},Pe={key:0},Fe={class:"fu-timepanel__quick"},Se={class:"fu-timepanel__items customScrollBar"},_e={class:"fu-timepanel__text"},Be=["aria-label","onClick"],Le={key:0,class:"fu-timepanel__none"},Ve={key:0,class:"fu-timepanel__foot"},$e={key:0},ze={key:1},M=J({__name:"FusionTimePanel",props:{dateLabel:{},elapsed:{default:"00:00:00"},running:{type:Boolean,default:!1},budgetNodes:{},budgetId:{default:null},taskNodes:{default:()=>[]},taskId:{default:null},pinned:{default:()=>[]},scheduled:{default:()=>[]},recent:{default:()=>[]},note:{default:""},billable:{type:Boolean,default:!0},billableText:{default:""},emptyTitle:{default:"What are you working on?"},emptyText:{default:"Pick a budget to start tracking time."},todayTotal:{default:""},weekTotal:{default:""},timesheetLabel:{default:"Open timesheet"}},emits:["update:budgetId","update:taskId","update:note","update:billable","start","stop","prev-day","next-day","today","pick","timesheet","close"],setup(n,{emit:h}){const s=n,i=h,u=c(null),f=c("recent");function k(b,e){if(e===null)return null;for(const a of b){if(a.id===e)return{node:a};const C=a.children?k(a.children,e):null;if(C)return{node:C.node,parent:C.parent??a}}return null}const l=y(()=>k(s.budgetNodes,s.budgetId)),g=y(()=>k(s.taskNodes,s.taskId)?.node??null),$=y(()=>{const b=e=>({...e,disabled:!!e.children?.length,children:e.children?.map(b)});return s.budgetNodes.map(b)});function z(b){i("update:budgetId",b),u.value=null}function I(b){i("update:taskId",b),u.value=null}const q=y(()=>[{value:"recent",label:`Recent ${s.recent.length}`},{value:"pinned",label:`Pinned ${s.pinned.length}`},{value:"scheduled",label:`Scheduled ${s.scheduled.length}`}]),W=y(()=>f.value==="pinned"?s.pinned:f.value==="scheduled"?s.scheduled:s.recent),X=y(()=>f.value==="pinned"?"Pin a budget to keep it here.":f.value==="scheduled"?"Nothing scheduled for this day.":"Nothing tracked recently."),G=y(()=>!!l.value&&(!s.taskNodes.length||!!g.value));return(b,e)=>(o(),d("div",me,[t("header",pe,[e[12]||(e[12]=t("h2",null,"Time",-1)),t("div",be,[t("button",{type:"button","aria-label":"Previous day",onClick:e[0]||(e[0]=a=>i("prev-day"))},[m(v(ae),{size:16})]),t("button",{type:"button",class:"fu-timepanel__daylabel",onClick:e[1]||(e[1]=a=>i("today"))},r(n.dateLabel),1),t("button",{type:"button","aria-label":"Next day",onClick:e[2]||(e[2]=a=>i("next-day"))},[m(v(le),{size:16})])]),t("button",{type:"button",class:"fu-timepanel__close","aria-label":"Close",onClick:e[3]||(e[3]=a=>i("close"))},[m(v(se),{size:18})])]),t("section",{class:N(["fu-timepanel__timer",{"is-running":n.running,"is-idle":!l.value}])},[t("div",fe,r(n.elapsed),1),t("div",ge,[l.value?(o(),d(A,{key:0},[t("b",null,r(g.value?.label||l.value.node.label),1),t("span",null,r(g.value?l.value.node.label:l.value.parent?.label),1)],64)):(o(),d(A,{key:1},[t("b",null,r(n.emptyTitle),1),t("span",null,r(n.emptyText),1)],64))]),n.running?(o(),d("button",{key:1,type:"button",class:"fu-timepanel__go is-stop","aria-label":"Stop and save",onClick:e[5]||(e[5]=a=>i("stop"))},[m(v(ue),{size:22,fill:"currentColor"})])):(o(),d("button",{key:0,type:"button",class:"fu-timepanel__go",disabled:!G.value,"aria-label":"Start timer",onClick:e[4]||(e[4]=a=>i("start"))},[m(v(j),{size:22,fill:"currentColor"})],8,ve))],2),t("section",he,[t("div",ke,[e[13]||(e[13]=t("label",null,"1 · Budget",-1)),t("button",{type:"button",class:N(["fu-timepanel__field",{"is-empty":!l.value,"is-open":u.value==="budget"}]),"aria-haspopup":"tree","aria-expanded":u.value==="budget",onClick:e[6]||(e[6]=a=>u.value=u.value==="budget"?null:"budget")},[t("span",null,r(l.value?l.value.node.label:"Choose a budget"),1),l.value?.parent?(o(),d("small",xe,r(l.value.parent.label),1)):p("",!0),m(v(O),{size:14})],10,ye),u.value==="budget"?(o(),d("div",Te,[m(E,{variant:"panel",nodes:$.value,"model-value":n.budgetId,"start-expanded":!1,searchable:"",footer:"","search-placeholder":"Search clients and budgets","max-height":"15rem","onUpdate:modelValue":z},null,8,["nodes","model-value"])])):p("",!0)]),t("div",{class:N(["fu-timepanel__step",{"is-locked":!l.value}])},[e[14]||(e[14]=t("label",null,"2 · Task",-1)),t("button",{type:"button",class:N(["fu-timepanel__field",{"is-empty":!g.value,"is-open":u.value==="task"}]),disabled:!l.value,"aria-haspopup":"tree","aria-expanded":u.value==="task",onClick:e[7]||(e[7]=a=>u.value=u.value==="task"?null:"task")},[t("span",null,r(g.value?g.value.label:l.value?"Choose a task":"Pick a budget first"),1),m(v(O),{size:14})],10,Ie),u.value==="task"?(o(),d("div",Ne,[m(E,{variant:"panel",nodes:n.taskNodes,"model-value":n.taskId,searchable:"",footer:"","max-height":"14rem","onUpdate:modelValue":I},null,8,["nodes","model-value"])])):p("",!0)],2),l.value?(o(),d("input",{key:0,class:"fu-timepanel__note",type:"text",placeholder:"Add a note (optional)",value:n.note,onInput:e[8]||(e[8]=a=>i("update:note",a.target.value))},null,40,we)):p("",!0),l.value?(o(),d("div",Ce,[t("div",null,[e[15]||(e[15]=t("b",null,"Billable",-1)),n.billableText?(o(),d("span",Pe,r(n.billableText),1)):p("",!0)]),m(te,{"model-value":n.billable,size:"sm","onUpdate:modelValue":e[9]||(e[9]=a=>i("update:billable",a))},null,8,["model-value"])])):p("",!0),K(b.$slots,"entry-footer",{},void 0,!0)]),t("section",Fe,[m(ne,{modelValue:f.value,"onUpdate:modelValue":e[10]||(e[10]=a=>f.value=a),options:q.value,size:"sm",block:"","aria-label":"Quick lists"},null,8,["modelValue","options"]),t("ul",Se,[(o(!0),d(A,null,Y(W.value,a=>(o(),d("li",{key:a.id,class:N({"is-current":a.id===n.budgetId})},[t("span",{class:"fu-timepanel__tile",style:ee({background:a.color})},r(a.initials),5),t("span",_e,[t("b",null,r(a.title),1),t("span",null,r(a.subtitle),1)]),t("button",{type:"button","aria-label":`Track ${a.title}`,onClick:C=>i("pick",a.id)},[m(v(j),{size:14,fill:"currentColor"})],8,Be)],2))),128)),W.value.length?p("",!0):(o(),d("li",Le,[f.value==="pinned"?(o(),Z(v(oe),{key:0,size:14})):p("",!0),R(" "+r(X.value),1)]))])]),n.todayTotal||n.weekTotal||n.timesheetLabel?(o(),d("footer",Ve,[n.todayTotal?(o(),d("span",$e,[e[16]||(e[16]=R("Today ",-1)),t("b",null,r(n.todayTotal),1)])):p("",!0),n.weekTotal?(o(),d("span",ze,[e[17]||(e[17]=R("Week ",-1)),t("b",null,r(n.weekTotal),1)])):p("",!0),t("button",{type:"button",onClick:e[11]||(e[11]=a=>i("timesheet"))},r(n.timesheetLabel)+" →",1)])):p("",!0)]))}}),V=ie(M,[["__scopeId","data-v-fbee8203"]]);M.__docgenInfo={exportName:"default",displayName:"FusionTimePanel",description:"",tags:{},props:[{name:"dateLabel",description:'Day shown in the header, for example "Nov 14".',required:!0,type:{name:"string"}},{name:"elapsed",description:'Running or entered time, for example "00:42:17".',required:!1,type:{name:"string"},defaultValue:{func:!1,value:'"00:00:00"'}},{name:"running",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"budgetNodes",description:"Clients with their budgets underneath. Only budgets (leaves) can be picked.",required:!0,type:{name:"Array",elements:[{name:"TreePickerNode"}]}},{name:"budgetId",required:!1,type:{name:"union",elements:[{name:"string"},{name:"number"},{name:"null"}]},defaultValue:{func:!1,value:"null"}},{name:"taskNodes",description:"Tasks of the chosen budget, as a tree.",required:!1,type:{name:"Array",elements:[{name:"TreePickerNode"}]},defaultValue:{func:!1,value:"() => []"}},{name:"taskId",required:!1,type:{name:"union",elements:[{name:"string"},{name:"number"},{name:"null"}]},defaultValue:{func:!1,value:"null"}},{name:"pinned",required:!1,type:{name:"Array",elements:[{name:"TimeShortcut"}]},defaultValue:{func:!1,value:"() => []"}},{name:"scheduled",required:!1,type:{name:"Array",elements:[{name:"TimeShortcut"}]},defaultValue:{func:!1,value:"() => []"}},{name:"recent",required:!1,type:{name:"Array",elements:[{name:"TimeShortcut"}]},defaultValue:{func:!1,value:"() => []"}},{name:"note",required:!1,type:{name:"string"},defaultValue:{func:!1,value:'""'}},{name:"billable",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"true"}},{name:"billableText",description:"Text under the Billable switch.",required:!1,type:{name:"string"},defaultValue:{func:!1,value:'""'}},{name:"emptyTitle",description:"Shown in the timer card when nothing is chosen.",required:!1,type:{name:"string"},defaultValue:{func:!1,value:'"What are you working on?"'}},{name:"emptyText",required:!1,type:{name:"string"},defaultValue:{func:!1,value:'"Pick a budget to start tracking time."'}},{name:"todayTotal",description:'For example "5h 12m". Shown in the footer with the week total.',required:!1,type:{name:"string"},defaultValue:{func:!1,value:'""'}},{name:"weekTotal",required:!1,type:{name:"string"},defaultValue:{func:!1,value:'""'}},{name:"timesheetLabel",required:!1,type:{name:"string"},defaultValue:{func:!1,value:'"Open timesheet"'}}],events:[{name:"update:budgetId",type:{names:["union"],elements:[{name:"string"},{name:"number"}]}},{name:"update:taskId",type:{names:["union"],elements:[{name:"string"},{name:"number"}]}},{name:"update:note",type:{names:["string"]}},{name:"update:billable",type:{names:["boolean"]}},{name:"start"},{name:"stop"},{name:"prev-day"},{name:"next-day"},{name:"today"},{name:"pick",type:{names:["union"],elements:[{name:"string"},{name:"number"}]}},{name:"timesheet"},{name:"close"}],slots:[{name:"entry-footer"}],sourceFiles:["/Users/xavier/Documents/Websites/Skkido/Fusion-binary-ui/src/components/timer/FusionTimePanel.vue"]};const Ye={title:"Fusion/Overlays/FusionTimePanel",component:V,tags:["autodocs"],parameters:{layout:"padded",docs:{description:{component:"\nThe time tracker that drops from the top bar. One column, in four parts.\n\n1. **Timer card** on top: the time in large digits, what is being tracked, and a round play or pause button. The card is dark when idle and turns green while running.\n2. **What you are working on**: step 1 picks a budget (a searchable tree of clients and budgets), step 2 picks a task (a searchable tree of task lists and tasks). Then a one-line note and the **Billable** switch.\n3. **Quick lists**: **Recent**, **Pinned** and **Scheduled**, each with a play button to start straight away.\n4. **Footer**: the day and week totals, and a link to the timesheet.\n\nProps:\n\n- `budgetNodes`: clients with budgets under them. Only budgets (rows with no children) can be picked.\n- `v-model:budgetId`, `v-model:taskId`, `v-model:note`, `v-model:billable`.\n- `taskNodes`: a tree of tasks for the chosen budget.\n- `pinned`, `scheduled`, `recent`: `{ id, title, subtitle, initials, color }`.\n- `elapsed` and `running`: the clock and the button state.\n- `todayTotal`, `weekTotal`, `timesheetLabel`: the footer.\n- Events: `start`, `stop`, `pick`, `prev-day`, `next-day`, `today`, `timesheet`, `close`.\n- Slot `entry-footer` adds your own row under the Billable switch (a retainer bar, for example).\n\nOpen it from a **FusionTimerButton**.\n"}}}},x=[{id:"c1",label:"Business ERP (Apple Inc)",children:[{id:"b1",label:"Retainer: November",meta:"14.5 of 20 h"},{id:"b2",label:"Fixed price",meta:"62 of 90 h"},{id:"b3",label:"Not billable",meta:"No budget"}]},{id:"c2",label:"Cloudline Systems",children:[{id:"b4",label:"Ad hoc"},{id:"b5",label:"Admin"}]},{id:"c3",label:"Harbor and Co",children:[{id:"b6",label:"Support hours",meta:"3 of 10 h"}]},{id:"c4",label:"Northwind Coffee",children:[{id:"b7",label:"Website rebuild",meta:"38 of 40 h",metaTone:"danger"}]}],w=[{id:"l1",label:"Front end build",children:[{id:412,label:"#412 Navigation shell",color:"#a975d8"},{id:413,label:"#413 Cashier screen",color:"#3a8be0",children:[{id:414,label:"#414 Payment screen",color:"#3a8be0"},{id:415,label:"#415 Basket",color:"#c9c9c9"}]}]},{id:"l2",label:"Design and architecture",children:[{id:420,label:"#420 Database schema",color:"#3a8be0"},{id:421,label:"#421 API contract",color:"#c9c9c9"}]}],T=[{id:"b4",title:"Ad hoc",subtitle:"Cloudline: Ad hoc budget",initials:"CL",color:"#222244"},{id:"b5",title:"Admin time",subtitle:"Cloudline: Admin",initials:"CL",color:"#222244"},{id:"b1",title:"Retainer: November",subtitle:"Business ERP Development (Cashier APP)",initials:"BE",color:"#3a8be0"},{id:"b2",title:"Fixed price",subtitle:"Business ERP Development (Cashier APP)",initials:"BE",color:"#3a8be0"},{id:"b7",title:"Website rebuild",subtitle:"Northwind Coffee: Website",initials:"NW",color:"#2f7d3b"},{id:"b6",title:"Support hours",subtitle:"Harbor and Co: Support",initials:"HC",color:"#c2417a"}],D=[{id:"b1",title:"Retainer: November",subtitle:"Business ERP Development (Cashier APP)",initials:"BE",color:"#3a8be0"}],U=[{id:"b6",title:"Support hours",subtitle:"Harbor and Co: Support, 15:00",initials:"HC",color:"#c2417a"}],Q={todayTotal:"5h 12m",weekTotal:"21h 40m"},P={name:"Nothing chosen yet",args:{dateLabel:"Nov 14",elapsed:"00:00",budgetNodes:x,recent:T}},F={name:"A budget chosen, ready to start",args:{dateLabel:"Nov 14",elapsed:"00:00",budgetNodes:x,budgetId:"b1",taskNodes:w,taskId:414,recent:T,pinned:D,scheduled:U,...Q,billableText:"Counts against the November retainer"}},S={name:"Timer running",args:{dateLabel:"Nov 14",elapsed:"00:42:17",running:!0,budgetNodes:x,budgetId:"b1",taskNodes:w,taskId:414,note:"Fixing the card payment flow",recent:T,pinned:D,...Q,billableText:"Counts against the November retainer"}},_={name:"Try it: pick, start, stop",render:()=>({components:{FusionTimePanel:V},setup(){const n=c(null),h=c(null),s=c(!1),i=c(0),u=c(""),f=c(!0);let k=null;const l=I=>[Math.floor(I/3600),Math.floor(I%3600/60),I%60].map(q=>String(q).padStart(2,"0")).join(":"),g=c("");function $(){s.value=!0,k=setInterval(()=>i.value++,1e3)}function z(){s.value=!1,k&&clearInterval(k),g.value=`Saved ${l(i.value)} on budget ${n.value}, task ${h.value}`,i.value=0}return{budgetId:n,taskId:h,running:s,secs:i,note:u,billable:f,fmt:l,start:$,stop:z,budgets:x,tasks:w,recent:T,pinned:D,scheduled:U,log:g}},template:`
<div>
  <p style="margin:0 0 12px;font-size:13px">{{ log || 'Pick a budget (left), then a task, then Start.' }}</p>
  <FusionTimePanel
    dateLabel="Nov 14"
    :elapsed="fmt(secs)"
    :running="running"
    :budgetNodes="budgets"
    v-model:budgetId="budgetId"
    :taskNodes="tasks"
    v-model:taskId="taskId"
    v-model:note="note"
    v-model:billable="billable"
    :recent="recent"
    :pinned="pinned"
    :scheduled="scheduled"
    todayTotal="5h 12m"
    weekTotal="21h 40m"
    billableText="Counts against the retainer"
    @pick="budgetId = $event"
    @start="start"
    @stop="stop"
  />
</div>`})},B={name:"Dropping from the timer button",parameters:{layout:"fullscreen"},render:()=>({components:{FusionTimePanel:V,FusionTimerButton:de},setup(){const n=c(!0),h=c("b1"),s=c(414);return{open:n,budgetId:h,taskId:s,budgets:x,tasks:w,recent:T}},template:`
<div style="min-height:700px;background:#f4f4f5">
  <div style="height:56px;background:#240a0a;display:flex;align-items:center;justify-content:flex-end;padding:0 24px;position:relative">
    <FusionTimerButton :expanded="open" @click="open = !open" />
    <div v-if="open" style="position:absolute;right:24px;top:62px;z-index:20;width:440px;max-width:calc(100vw - 48px)">
      <FusionTimePanel
        dateLabel="Nov 14"
        :budgetNodes="budgets"
        v-model:budgetId="budgetId"
        :taskNodes="tasks"
        v-model:taskId="taskId"
        :recent="recent"
        @pick="budgetId = $event"
        @close="open = false"
      />
    </div>
  </div>
</div>`})},L={name:"With a retainer bar under the switch",render:()=>({components:{FusionTimePanel:V},setup(){const n=c("b1"),h=c(414);return{budgetId:n,taskId:h,budgets:x,tasks:w,recent:T}},template:`
<FusionTimePanel dateLabel="Nov 14" :budgetNodes="budgets" v-model:budgetId="budgetId" :taskNodes="tasks" v-model:taskId="taskId" :recent="recent" billableText="Counts against the retainer">
  <template #entry-footer>
    <div style="border:1px solid #ececec;border-radius:10px;padding:10px 12px;font-size:13px">
      <div style="display:flex;justify-content:space-between"><b style="font-weight:500">Retainer: November</b><span>14.5 of 20 h</span></div>
      <div style="height:6px;border-radius:999px;background:#e3e3e5;margin-top:8px;overflow:hidden"><div style="height:100%;width:72.5%;background:#240a0a"></div></div>
    </div>
  </template>
</FusionTimePanel>`})};P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  name: "Nothing chosen yet",
  args: {
    dateLabel: "Nov 14",
    elapsed: "00:00",
    budgetNodes: budgets,
    recent
  }
}`,...P.parameters?.docs?.source}}};F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  name: "A budget chosen, ready to start",
  args: {
    dateLabel: "Nov 14",
    elapsed: "00:00",
    budgetNodes: budgets,
    budgetId: "b1",
    taskNodes: tasks,
    taskId: 414,
    recent,
    pinned,
    scheduled,
    ...totals,
    billableText: "Counts against the November retainer"
  }
}`,...F.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  name: "Timer running",
  args: {
    dateLabel: "Nov 14",
    elapsed: "00:42:17",
    running: true,
    budgetNodes: budgets,
    budgetId: "b1",
    taskNodes: tasks,
    taskId: 414,
    note: "Fixing the card payment flow",
    recent,
    pinned,
    ...totals,
    billableText: "Counts against the November retainer"
  }
}`,...S.parameters?.docs?.source}}};_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  name: "Try it: pick, start, stop",
  render: () => ({
    components: {
      FusionTimePanel
    },
    setup() {
      const budgetId = ref<string | number | null>(null);
      const taskId = ref<string | number | null>(null);
      const running = ref(false);
      const secs = ref(0);
      const note = ref("");
      const billable = ref(true);
      let id: ReturnType<typeof setInterval> | null = null;
      const fmt = (s: number) => [Math.floor(s / 3600), Math.floor(s % 3600 / 60), s % 60].map(n => String(n).padStart(2, "0")).join(":");
      const log = ref("");
      function start() {
        running.value = true;
        id = setInterval(() => secs.value++, 1000);
      }
      function stop() {
        running.value = false;
        if (id) clearInterval(id);
        log.value = \`Saved \${fmt(secs.value)} on budget \${budgetId.value}, task \${taskId.value}\`;
        secs.value = 0;
      }
      return {
        budgetId,
        taskId,
        running,
        secs,
        note,
        billable,
        fmt,
        start,
        stop,
        budgets,
        tasks,
        recent,
        pinned,
        scheduled,
        log
      };
    },
    template: \`
<div>
  <p style="margin:0 0 12px;font-size:13px">{{ log || 'Pick a budget (left), then a task, then Start.' }}</p>
  <FusionTimePanel
    dateLabel="Nov 14"
    :elapsed="fmt(secs)"
    :running="running"
    :budgetNodes="budgets"
    v-model:budgetId="budgetId"
    :taskNodes="tasks"
    v-model:taskId="taskId"
    v-model:note="note"
    v-model:billable="billable"
    :recent="recent"
    :pinned="pinned"
    :scheduled="scheduled"
    todayTotal="5h 12m"
    weekTotal="21h 40m"
    billableText="Counts against the retainer"
    @pick="budgetId = $event"
    @start="start"
    @stop="stop"
  />
</div>\`
  })
}`,..._.parameters?.docs?.source}}};B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  name: "Dropping from the timer button",
  parameters: {
    layout: "fullscreen"
  },
  render: () => ({
    components: {
      FusionTimePanel,
      FusionTimerButton
    },
    setup() {
      const open = ref(true);
      const budgetId = ref<string | number | null>("b1");
      const taskId = ref<string | number | null>(414);
      return {
        open,
        budgetId,
        taskId,
        budgets,
        tasks,
        recent
      };
    },
    template: \`
<div style="min-height:700px;background:#f4f4f5">
  <div style="height:56px;background:#240a0a;display:flex;align-items:center;justify-content:flex-end;padding:0 24px;position:relative">
    <FusionTimerButton :expanded="open" @click="open = !open" />
    <div v-if="open" style="position:absolute;right:24px;top:62px;z-index:20;width:440px;max-width:calc(100vw - 48px)">
      <FusionTimePanel
        dateLabel="Nov 14"
        :budgetNodes="budgets"
        v-model:budgetId="budgetId"
        :taskNodes="tasks"
        v-model:taskId="taskId"
        :recent="recent"
        @pick="budgetId = $event"
        @close="open = false"
      />
    </div>
  </div>
</div>\`
  })
}`,...B.parameters?.docs?.source}}};L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  name: "With a retainer bar under the switch",
  render: () => ({
    components: {
      FusionTimePanel
    },
    setup() {
      const budgetId = ref<string | number | null>("b1");
      const taskId = ref<string | number | null>(414);
      return {
        budgetId,
        taskId,
        budgets,
        tasks,
        recent
      };
    },
    template: \`
<FusionTimePanel dateLabel="Nov 14" :budgetNodes="budgets" v-model:budgetId="budgetId" :taskNodes="tasks" v-model:taskId="taskId" :recent="recent" billableText="Counts against the retainer">
  <template #entry-footer>
    <div style="border:1px solid #ececec;border-radius:10px;padding:10px 12px;font-size:13px">
      <div style="display:flex;justify-content:space-between"><b style="font-weight:500">Retainer: November</b><span>14.5 of 20 h</span></div>
      <div style="height:6px;border-radius:999px;background:#e3e3e5;margin-top:8px;overflow:hidden"><div style="height:100%;width:72.5%;background:#240a0a"></div></div>
    </div>
  </template>
</FusionTimePanel>\`
  })
}`,...L.parameters?.docs?.source}}};const Ze=["Empty","Chosen","Running","Interactive","FromTheTopBar","WithRetainer"];export{F as Chosen,P as Empty,B as FromTheTopBar,_ as Interactive,S as Running,L as WithRetainer,Ze as __namedExportsOrder,Ye as default};
