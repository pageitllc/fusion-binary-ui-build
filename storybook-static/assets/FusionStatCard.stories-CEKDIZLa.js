import{d as y,b as a,F as i,K as h,g as o,f as S,y as F,i as f,t as s,j as T,o as t,r as x}from"./iframe-D3vfv6YP.js";import{_ as w}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{c as b}from"./createLucideIcon-DKFlsGA7.js";import{C as L}from"./calendar-D2HB_VTl.js";import{C as g}from"./circle-check-DmlQamQa.js";import"./preload-helper-Ct5FWWRu.js";/**
 * @license lucide-vue-next v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const C=b("clock-3",[["path",{d:"M12 6v6h4",key:"135r8i"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]]);/**
 * @license lucide-vue-next v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const B=b("target",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["circle",{cx:"12",cy:"12",r:"6",key:"1vlfrh"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}]]),I={key:0,class:"icon-box"},V={class:"content"},j={class:"value"},q={class:"subtitle"},H={key:0,class:"caption"},O={class:"title"},P={class:"value"},D={key:0,class:"caption"},k=y({__name:"FusionStatCard",props:{variant:{default:"icon-left"},title:{},value:{default:""},subtitle:{default:""},icon:{type:[Function,Object,String,null],default:null},bordered:{type:Boolean,default:!0},shadow:{type:Boolean,default:!1},loading:{type:Boolean,default:!1}},setup(e){return(N,n)=>(t(),a("div",{class:T(["fu-stat-card",[`variant-${e.variant}`,e.bordered?"bordered":"",e.shadow?"shadow":"",e.loading?"is-loading":""]])},[e.loading?(t(),a(i,{key:0},[e.variant==="icon-left"?(t(),a(i,{key:0},[n[0]||(n[0]=h('<div class="skeleton-icon" data-v-5fd69633></div><div class="skeleton-content" data-v-5fd69633><div class="skeleton-line skeleton-value" data-v-5fd69633></div><div class="skeleton-line skeleton-subtitle" data-v-5fd69633></div><div class="skeleton-line skeleton-caption" data-v-5fd69633></div></div>',2))],64)):(t(),a(i,{key:1},[n[1]||(n[1]=o("div",{class:"skeleton-line skeleton-title"},null,-1)),n[2]||(n[2]=o("div",{class:"skeleton-line skeleton-value--lg"},null,-1)),n[3]||(n[3]=o("div",{class:"skeleton-line skeleton-caption"},null,-1))],64))],64)):e.variant==="icon-left"?(t(),a(i,{key:1},[e.icon?(t(),a("div",I,[(t(),S(F(e.icon),{class:"fu-icon"}))])):f("",!0),o("div",V,[o("div",j,s(e.value),1),o("div",q,s(e.title),1),e.subtitle?(t(),a("div",H,s(e.subtitle),1)):f("",!0)])],64)):(t(),a(i,{key:2},[o("div",O,s(e.title),1),o("div",P,s(e.value),1),e.subtitle?(t(),a("div",D,s(e.subtitle),1)):f("",!0)],64))],2))}}),m=w(k,[["__scopeId","data-v-5fd69633"]]);k.__docgenInfo={exportName:"default",displayName:"FusionStatCard",description:"",tags:{},props:[{name:"variant",required:!1,type:{name:"union",elements:[{name:'"icon-left"'},{name:'"title-top"'}]},defaultValue:{func:!1,value:'"icon-left"'}},{name:"title",required:!0,type:{name:"string"}},{name:"value",required:!1,type:{name:"union",elements:[{name:"string"},{name:"number"}]},defaultValue:{func:!1,value:'""'}},{name:"subtitle",required:!1,type:{name:"string"},defaultValue:{func:!1,value:'""'}},{name:"icon",required:!1,type:{name:"union",elements:[{name:"FunctionalComponent"},{name:"object"},{name:"string"},{name:"null"}]},defaultValue:{func:!1,value:"null"}},{name:"bordered",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"true"}},{name:"shadow",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"loading",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}],sourceFiles:["/Users/xavier/Documents/Websites/Skkido/Fusion-binary-ui/src/components/cards/FusionStatCard.vue"]};const U={title:"Fusion/Components/FusionStatCard",component:m,tags:["autodocs"],parameters:{docs:{description:{component:`
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
        `}}},argTypes:{variant:{control:{type:"select"},options:["icon-left","title-top"]},title:{control:"text"},value:{control:"text"},subtitle:{control:"text"},icon:{control:!1},bordered:{control:"boolean"},shadow:{control:"boolean"},loading:{control:"boolean"}}},p=e=>({components:{FusionStatCard:m},setup(){return{args:e}},template:`
    <div style="background: #f9fafb; padding: 32px;">
      <FusionStatCard v-bind="args" />
    </div>
  `}),l=p.bind({});l.args={variant:"icon-left",icon:g,value:"10",title:"Completed",subtitle:"In the last 7 days",bordered:!0,shadow:!1,loading:!1};const r=p.bind({});r.args={variant:"title-top",title:"Total Hours Booked",value:"120",bordered:!0,shadow:!1,loading:!1};const d=p.bind({});d.args={variant:"icon-left",title:"Completed",bordered:!0,shadow:!1,loading:!0};const c=p.bind({});c.args={variant:"title-top",title:"Total Hours Booked",bordered:!0,shadow:!1,loading:!0};const u=()=>({components:{FusionStatCard:m},setup(){const e=x(!0);return setTimeout(()=>e.value=!1,2e3),{isLoading:e,CheckCircle2:g,Clock3:C}},template:`
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
  `});u.parameters={docs:{description:{story:"Simulates a 2s async load — cards start in skeleton state and resolve to real data automatically on mount."}}};const v=()=>({components:{FusionStatCard:m},setup(){return{CheckCircle2:g,Clock3:C,Calendar:L,Target:B}},template:`
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
})`,...c.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`() => ({
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
})`,...u.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`() => ({
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
})`,...v.parameters?.docs?.source}}};const W=["IconLeft","TitleTop","LoadingIconLeft","LoadingTitleTop","LoadingTransition","DashboardPreview"];export{v as DashboardPreview,l as IconLeft,d as LoadingIconLeft,c as LoadingTitleTop,u as LoadingTransition,r as TitleTop,W as __namedExportsOrder,U as default};
