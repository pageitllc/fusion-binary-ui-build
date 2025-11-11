import{d as f,c as a,F as d,a as r,b as o,k as g,u as b,t as n,n as C,o as t}from"./iframe-o7SUGoga.js";import{_ as h}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{c as u}from"./createLucideIcon-D5kBsy5g.js";import{C as k}from"./calendar-BI7jLF9e.js";import{C as m}from"./circle-check-D1HF_Us0.js";import"./preload-helper-Ct5FWWRu.js";/**
 * @license lucide-vue-next v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const y=u("clock-3",[["path",{d:"M12 6v6h4",key:"135r8i"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]]);/**
 * @license lucide-vue-next v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const S=u("target",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["circle",{cx:"12",cy:"12",r:"6",key:"1vlfrh"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}]]),F={key:0,class:"icon-box"},x={class:"content"},w={class:"value"},T={class:"subtitle"},B={key:0,class:"caption"},I={class:"title"},V={class:"value"},j={key:0,class:"caption"},v=f({__name:"FusionStatCard",props:{variant:{default:"icon-left"},title:{},value:{default:""},subtitle:{default:""},icon:{type:[Function,Object,String,null],default:null},bordered:{type:Boolean,default:!0},shadow:{type:Boolean,default:!1}},setup(e){return(q,O)=>(t(),a("div",{class:C(["fu-stat-card",[`variant-${e.variant}`,e.bordered?"bordered":"",e.shadow?"shadow":""]])},[e.variant==="icon-left"?(t(),a(d,{key:0},[e.icon?(t(),a("div",F,[(t(),g(b(e.icon),{class:"fu-icon"}))])):r("",!0),o("div",x,[o("div",w,n(e.value),1),o("div",T,n(e.title),1),e.subtitle?(t(),a("div",B,n(e.subtitle),1)):r("",!0)])],64)):(t(),a(d,{key:1},[o("div",I,n(e.title),1),o("div",V,n(e.value),1),e.subtitle?(t(),a("div",j,n(e.subtitle),1)):r("",!0)],64))],2))}}),c=h(v,[["__scopeId","data-v-a52997b8"]]);v.__docgenInfo={exportName:"default",displayName:"FusionStatCard",description:"",tags:{},props:[{name:"variant",required:!1,type:{name:"union",elements:[{name:'"icon-left"'},{name:'"title-top"'}]},defaultValue:{func:!1,value:'"icon-left"'}},{name:"title",required:!0,type:{name:"string"}},{name:"value",required:!1,type:{name:"union",elements:[{name:"string"},{name:"number"}]},defaultValue:{func:!1,value:'""'}},{name:"subtitle",required:!1,type:{name:"string"},defaultValue:{func:!1,value:'""'}},{name:"icon",required:!1,type:{name:"union",elements:[{name:"FunctionalComponent"},{name:"object"},{name:"string"},{name:"null"}]},defaultValue:{func:!1,value:"null"}},{name:"bordered",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"true"}},{name:"shadow",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}],sourceFiles:["/Users/tommys/Documents/Skkido/Fusion-binary-ui/src/components/cards/FusionStatCard.vue"]};const H={title:"Fusion/Components/FusionStatCard",component:c,tags:["autodocs"],parameters:{docs:{description:{component:`
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
        `}}},argTypes:{variant:{control:{type:"select"},options:["icon-left","title-top"]},title:{control:"text"},value:{control:"text"},subtitle:{control:"text"},icon:{control:!1},bordered:{control:"boolean"},shadow:{control:"boolean"}}},p=e=>({components:{FusionStatCard:c},setup(){return{args:e}},template:`
    <div style="background: #f9fafb; padding: 32px;">
      <FusionStatCard v-bind="args" />
    </div>
  `}),s=p.bind({});s.args={variant:"icon-left",icon:m,value:"10",title:"Completed",subtitle:"In the last 7 days",bordered:!0,shadow:!1};const i=p.bind({});i.args={variant:"title-top",title:"Total Hours Booked",value:"120",bordered:!0,shadow:!1};const l=()=>({components:{FusionStatCard:c},setup(){return{CheckCircle2:m,Clock3:y,Calendar:k,Target:S}},template:`
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
  `});l.parameters={docs:{description:{story:`
A full dashboard preview example using **FusionStatCard** components inside a responsive **Bootstrap grid layout**.

####  Code Example:
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
      `}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`args => ({
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
})`,...s.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`args => ({
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
})`,...i.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`() => ({
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
})`,...l.parameters?.docs?.source}}};const N=["IconLeft","TitleTop","DashboardPreview"];export{l as DashboardPreview,s as IconLeft,i as TitleTop,N as __namedExportsOrder,H as default};
