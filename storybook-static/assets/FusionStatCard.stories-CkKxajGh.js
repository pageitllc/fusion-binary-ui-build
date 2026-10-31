import{q as F,s as k,j as T,p as x,y as C,o as n,b as s,F as i,d as t,i as g,t as o,r as w}from"./iframe-BJCCdSEh.js";import{_ as L}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{c as h}from"./createLucideIcon-B6nnLSzH.js";import{C as B}from"./calendar-afJbKsoi.js";import{C as b}from"./circle-check-EB6CJLkE.js";import"./preload-helper-Ct5FWWRu.js";/**
 * @license @lucide/vue v1.54.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const q={name:"clock-3",size:24,node:[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 6v6h4",key:"135r8i"}]]},y=h(q);/**
 * @license @lucide/vue v1.54.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const I={name:"target",size:24,node:[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["circle",{cx:"12",cy:"12",r:"6",key:"1vlfrh"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}]]},V=h(I),D={key:0,class:"icon-box"},j={class:"content"},O={class:"value"},H={class:"subtitle"},P={key:0,class:"caption"},A={class:"title"},N={class:"value"},z={key:0,class:"caption"},S=F({__name:"FusionStatCard",props:{variant:{default:"icon-left"},title:{},value:{default:""},subtitle:{default:""},icon:{type:[Function,Object,String,null],default:null},bordered:{type:Boolean,default:!0},shadow:{type:Boolean,default:!1},loading:{type:Boolean,default:!1},href:{default:""}},setup(e){return(E,a)=>(n(),k(C(e.href?"a":"div"),{class:x(["fu-stat-card",[e.href?"is-link":"",`variant-${e.variant}`,e.bordered?"bordered":"",e.shadow?"shadow":"",e.loading?"is-loading":""]]),href:e.href||void 0},{default:T(()=>[e.loading?(n(),s(i,{key:0},[e.variant==="icon-left"?(n(),s(i,{key:0},[a[0]||(a[0]=t("div",{class:"skeleton-icon"},null,-1)),a[1]||(a[1]=t("div",{class:"skeleton-content"},[t("div",{class:"skeleton-line skeleton-value"}),t("div",{class:"skeleton-line skeleton-subtitle"}),t("div",{class:"skeleton-line skeleton-caption"})],-1))],64)):(n(),s(i,{key:1},[a[2]||(a[2]=t("div",{class:"skeleton-line skeleton-title"},null,-1)),a[3]||(a[3]=t("div",{class:"skeleton-line skeleton-value--lg"},null,-1)),a[4]||(a[4]=t("div",{class:"skeleton-line skeleton-caption"},null,-1))],64))],64)):e.variant==="icon-left"?(n(),s(i,{key:1},[e.icon?(n(),s("div",D,[(n(),k(C(e.icon),{class:"fu-icon"}))])):g("",!0),t("div",j,[t("div",O,o(e.value),1),t("div",H,o(e.title),1),e.subtitle?(n(),s("div",P,o(e.subtitle),1)):g("",!0)])],64)):(n(),s(i,{key:2},[t("div",A,o(e.title),1),t("div",N,o(e.value),1),e.subtitle?(n(),s("div",z,o(e.subtitle),1)):g("",!0)],64))]),_:1},8,["href","class"]))}}),f=L(S,[["__scopeId","data-v-193e24ce"]]);S.__docgenInfo={exportName:"default",displayName:"FusionStatCard",description:"",tags:{},props:[{name:"variant",required:!1,type:{name:"union",elements:[{name:'"icon-left"'},{name:'"title-top"'}]},defaultValue:{func:!1,value:'"icon-left"'}},{name:"title",required:!0,type:{name:"string"}},{name:"value",required:!1,type:{name:"union",elements:[{name:"string"},{name:"number"}]},defaultValue:{func:!1,value:'""'}},{name:"subtitle",required:!1,type:{name:"string"},defaultValue:{func:!1,value:'""'}},{name:"icon",required:!1,type:{name:"union",elements:[{name:"FunctionalComponent"},{name:"object"},{name:"string"},{name:"null"}]},defaultValue:{func:!1,value:"null"}},{name:"bordered",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"true"}},{name:"shadow",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"loading",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"href",description:"Makes the whole card a link (an <a>). Click handlers still work through @click.",required:!1,type:{name:"string"},defaultValue:{func:!1,value:'""'}}],sourceFiles:["/Users/xavier/Documents/Websites/Skkido/Fusion-binary-ui/src/components/cards/FusionStatCard.vue"]};const J={title:"Fusion/Data Display/FusionStatCard",component:f,tags:["autodocs"],parameters:{docs:{description:{component:`
The \`FusionStatCard\` component is a flexible, responsive stat or info box for dashboards and analytics views.

It supports two variants:

- **icon-left** → Icon on the left, title & subtitle stacked on the right.  
- **title-top** → Title above the main value, minimal and clean for metric grids.

You can combine it inside grid layouts, such as 4-column Bootstrap or CSS Grid dashboards.

#### Example usage
\`\`\`vue
<template>
  <div class="row g-3">
    <div class="col-md-3">
      <FusionStatCard
        variant="icon-left"
        :icon="CheckCircle2"
        title="Completed"
        value="10"
        subtitle="This week"
      />
    </div>
    <div class="col-md-3">
      <FusionStatCard
        variant="title-top"
        title="Total Hours"
        value="120"
      />
    </div>
  </div>
</template>
\`\`\`
        `}}},argTypes:{variant:{control:{type:"select"},options:["icon-left","title-top"]},title:{control:"text"},value:{control:"text"},subtitle:{control:"text"},icon:{control:!1},bordered:{control:"boolean"},shadow:{control:"boolean"},loading:{control:"boolean"}}},p=e=>({components:{FusionStatCard:f},setup(){return{args:e}},template:`
    <div style="background: #f9fafb; padding: 32px;">
      <FusionStatCard v-bind="args" />
    </div>
  `}),l=p.bind({});l.args={variant:"title-top",title:"Open Tickets",value:"12",bordered:!0,href:"#tickets"};const r=p.bind({});r.args={variant:"icon-left",icon:b,value:"10",title:"Completed",subtitle:"In the last 7 days",bordered:!0,shadow:!1,loading:!1};const d=p.bind({});d.args={variant:"title-top",title:"Total Hours Booked",value:"120",bordered:!0,shadow:!1,loading:!1};const c=p.bind({});c.args={variant:"icon-left",title:"Completed",bordered:!0,shadow:!1,loading:!0};const u=p.bind({});u.args={variant:"title-top",title:"Total Hours Booked",bordered:!0,shadow:!1,loading:!0};const m=()=>({components:{FusionStatCard:f},setup(){const e=w(!0);return setTimeout(()=>e.value=!1,2e3),{isLoading:e,CheckCircle2:b,Clock3:y}},template:`
    <div style="background: #f9fafb; padding: 32px; display: grid; grid-template-columns: repeat(2, 1fr); gap: 16px;">
      <FusionStatCard
        variant="icon-left"
        :icon="CheckCircle2"
        title="Completed"
        value="10"
        subtitle="This week"
        :loading="isLoading"
        bordered
      />
      <FusionStatCard
        variant="title-top"
        title="Total Hours"
        value="120"
        :loading="isLoading"
        bordered
      />
    </div>
  `});m.parameters={docs:{description:{story:"Simulates a 2s async load — cards start in skeleton state and resolve to real data automatically on mount."}}};const v=()=>({components:{FusionStatCard:f},setup(){return{CheckCircle2:b,Clock3:y,Calendar:B,Target:V}},template:`
    <div style="background: #f9fafb; padding: 40px; min-height: 100vh;">
      <div class="d-flex align-items-center justify-content-between mb-4">
        <h3 class="m-0 fw-semibold fs-5 text-dark">Team Performance Overview</h3>
        <span class="text-muted small">Last updated 5 mins ago</span>
      </div>

      <div class="row g-4">
        <div class="col-12 col-sm-6 col-lg-3">
          <FusionStatCard
            :icon="CheckCircle2"
            variant="icon-left"
            value="10"
            title="Completed"
            subtitle="This week"
          />
        </div>
        <div class="col-12 col-sm-6 col-lg-3">
          <FusionStatCard
            :icon="Clock3"
            variant="icon-left"
            value="24h"
            title="Tracked"
            subtitle="This week"
          />
        </div>
        <div class="col-12 col-sm-6 col-lg-3">
          <FusionStatCard
            :icon="Calendar"
            variant="title-top"
            title="Total Hours Booked"
            value="120"
          />
        </div>
        <div class="col-12 col-sm-6 col-lg-3">
          <FusionStatCard
            :icon="Target"
            variant="title-top"
            title="Active Projects"
            value="8"
            subtitle="Ongoing"
          />
        </div>
      </div>
    </div>
  `});v.parameters={docs:{description:{story:`
A full dashboard preview using **FusionStatCard** inside a responsive Bootstrap grid.

\`\`\`vue
<template>
  <div class="row g-4">
    <div class="col-12 col-sm-6 col-lg-3">
      <FusionStatCard
        :icon="CheckCircle2"
        variant="icon-left"
        value="10"
        title="Completed"
        subtitle="This week"
      />
    </div>
    <div class="col-12 col-sm-6 col-lg-3">
      <FusionStatCard
        variant="title-top"
        title="Active Projects"
        value="8"
        subtitle="Ongoing"
      />
    </div>
  </div>
</template>
\`\`\`
      `}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`args => ({
  components: {
    FusionStatCard
  },
  setup() {
    return {
      args
    };
  },
  template: \`
    <div style="background: #f9fafb; padding: 32px;">
      <FusionStatCard v-bind="args" />
    </div>
  \`
})`,...l.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`args => ({
  components: {
    FusionStatCard
  },
  setup() {
    return {
      args
    };
  },
  template: \`
    <div style="background: #f9fafb; padding: 32px;">
      <FusionStatCard v-bind="args" />
    </div>
  \`
})`,...r.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`args => ({
  components: {
    FusionStatCard
  },
  setup() {
    return {
      args
    };
  },
  template: \`
    <div style="background: #f9fafb; padding: 32px;">
      <FusionStatCard v-bind="args" />
    </div>
  \`
})`,...d.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`args => ({
  components: {
    FusionStatCard
  },
  setup() {
    return {
      args
    };
  },
  template: \`
    <div style="background: #f9fafb; padding: 32px;">
      <FusionStatCard v-bind="args" />
    </div>
  \`
})`,...c.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`args => ({
  components: {
    FusionStatCard
  },
  setup() {
    return {
      args
    };
  },
  template: \`
    <div style="background: #f9fafb; padding: 32px;">
      <FusionStatCard v-bind="args" />
    </div>
  \`
})`,...u.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`() => ({
  components: {
    FusionStatCard
  },
  setup() {
    const isLoading = ref(true);
    setTimeout(() => isLoading.value = false, 2000);
    return {
      isLoading,
      CheckCircle2,
      Clock3
    };
  },
  template: \`
    <div style="background: #f9fafb; padding: 32px; display: grid; grid-template-columns: repeat(2, 1fr); gap: 16px;">
      <FusionStatCard
        variant="icon-left"
        :icon="CheckCircle2"
        title="Completed"
        value="10"
        subtitle="This week"
        :loading="isLoading"
        bordered
      />
      <FusionStatCard
        variant="title-top"
        title="Total Hours"
        value="120"
        :loading="isLoading"
        bordered
      />
    </div>
  \`
})`,...m.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`() => ({
  components: {
    FusionStatCard
  },
  setup() {
    return {
      CheckCircle2,
      Clock3,
      Calendar,
      Target
    };
  },
  template: \`
    <div style="background: #f9fafb; padding: 40px; min-height: 100vh;">
      <div class="d-flex align-items-center justify-content-between mb-4">
        <h3 class="m-0 fw-semibold fs-5 text-dark">Team Performance Overview</h3>
        <span class="text-muted small">Last updated 5 mins ago</span>
      </div>

      <div class="row g-4">
        <div class="col-12 col-sm-6 col-lg-3">
          <FusionStatCard
            :icon="CheckCircle2"
            variant="icon-left"
            value="10"
            title="Completed"
            subtitle="This week"
          />
        </div>
        <div class="col-12 col-sm-6 col-lg-3">
          <FusionStatCard
            :icon="Clock3"
            variant="icon-left"
            value="24h"
            title="Tracked"
            subtitle="This week"
          />
        </div>
        <div class="col-12 col-sm-6 col-lg-3">
          <FusionStatCard
            :icon="Calendar"
            variant="title-top"
            title="Total Hours Booked"
            value="120"
          />
        </div>
        <div class="col-12 col-sm-6 col-lg-3">
          <FusionStatCard
            :icon="Target"
            variant="title-top"
            title="Active Projects"
            value="8"
            subtitle="Ongoing"
          />
        </div>
      </div>
    </div>
  \`
})`,...v.parameters?.docs?.source}}};const K=["AsLink","IconLeft","TitleTop","LoadingIconLeft","LoadingTitleTop","LoadingTransition","DashboardPreview"];export{l as AsLink,v as DashboardPreview,r as IconLeft,c as LoadingIconLeft,u as LoadingTitleTop,m as LoadingTransition,d as TitleTop,K as __namedExportsOrder,J as default};
