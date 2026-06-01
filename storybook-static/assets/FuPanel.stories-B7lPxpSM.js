import{d as f,c as x,b as n,t as h,i as c,A as g,g as b,J as F,n as P,o as t,r as k}from"./iframe-BWX2pLPr.js";import"./preload-helper-Ct5FWWRu.js";const A={key:0,class:"fu-panel__header px-2"},_={key:0,class:"fu-panel__title-skeleton"},L={key:1,class:"fu-panel__title"},w={key:2,class:"fu-panel__actions"},S={class:"fu-panel__body-wrapper"},N={class:"fu-panel__body scrollbar__control customScrollBar px-2"},I={key:0,class:"fu-panel__skeleton-body"},i=f({__name:"FuPanel",props:{title:{},basis:{},loading:{type:Boolean}},setup(e){const p=e,y=x(()=>p.basis?typeof p.basis=="number"?`${p.basis}px`:p.basis:"300px");return(u,v)=>(t(),n("div",{class:"fu-panel",style:P({flexBasis:y.value})},[e.title||u.$slots.actions?(t(),n("div",A,[e.loading?(t(),n("div",_)):e.title?(t(),n("h3",L,h(e.title),1)):c("",!0),u.$slots.actions&&!e.loading?(t(),n("div",w,[g(u.$slots,"actions")])):c("",!0)])):c("",!0),b("div",S,[b("div",N,[e.loading?(t(),n("div",I,[...v[0]||(v[0]=[F('<div class="skeleton-line" style="width:60%;height:14px;"></div><div class="skeleton-line" style="width:85%;height:14px;"></div><div class="skeleton-line" style="width:45%;height:14px;"></div><div class="skeleton-line" style="width:70%;height:14px;"></div><div class="skeleton-line" style="width:55%;height:14px;"></div>',5)])])):g(u.$slots,"default",{key:1})])])],4))}});i.__docgenInfo={exportName:"default",displayName:"FuPanel",description:"",tags:{},props:[{name:"title",required:!1,type:{name:"string"}},{name:"basis",required:!1,type:{name:"union",elements:[{name:"string"},{name:"number"}]}},{name:"loading",required:!1,type:{name:"boolean"}}],slots:[{name:"actions"},{name:"default"}],sourceFiles:["/Users/xavier/Documents/Websites/Skkido/Fusion-binary-ui/src/components/panel/FuPanel.vue"]};const E={title:"Fusion/FuPanel",component:i,tags:["autodocs"],parameters:{docs:{description:{component:`
The \`FuPanel\` component is a flexible layout container used to group related content
inside dashboards, admin views, and internal tools.

It provides:

- A header with an optional **title**
- A right-aligned **actions slot**
- A scroll-safe body area for lists, tables, and dynamic content
- A configurable **flex-basis** via the \`basis\` prop
- A **loading** prop that shows a skeleton state for both the title and body

The panel is designed to work correctly inside complex flex layouts and ensures
internal scrolling without breaking parent containers.

#### Example usage
\`\`\`vue
<template>
  <div style="display: flex; gap: 24px; height: 420px;">
    <FuPanel title="Needs Attention" :basis="320" :loading="isLoading">
      <template #actions>
        <FusionActionButton
          :icon="Filter"
          variant="subtle"
          size="md"
          tooltip="Filter results"
          @click="onFilterClick"
        />
      </template>

      <IssueList />
    </FuPanel>

    <FuPanel title="Recent Activity" basis="360px" :loading="isLoading">
      <ActivityFeed />
    </FuPanel>
  </div>
</template>
\`\`\`
        `}}},argTypes:{title:{control:"text",description:"Panel title displayed in the header"},basis:{control:"text",description:"Flex-basis for the panel (number = px, or any valid CSS size e.g. '320px', '30%')"},loading:{control:"boolean",description:"Shows skeleton state for title and body content"}}},m=e=>({components:{FuPanel:i},setup(){return{args:e}},template:`
    <div style="height: 420px; display: flex; background: #f9fafb; padding: 24px;">
      <FuPanel v-bind="args">
        <template #actions>
          <button style="background:none;border:0;cursor:pointer">⋮</button>
        </template>
        <div>
          <div v-for="i in 20" :key="i" style="padding: 12px 0; border-bottom: 1px solid #eee">
            Item {{ i }}
          </div>
        </div>
      </FuPanel>
    </div>
  `}),s=m.bind({});s.args={title:"Needs Attention",basis:300,loading:!1};const a=m.bind({});a.args={title:"Wider Panel",basis:380,loading:!1};const o=e=>({components:{FuPanel:i},setup(){return{args:e}},template:`
    <div style="height: 420px; display: flex; background: #f9fafb; padding: 24px;">
      <FuPanel v-bind="args">
        <p>This panel has no header actions.</p>
      </FuPanel>
    </div>
  `});o.args={title:"Activity",basis:300,loading:!1};const l=m.bind({});l.args={title:"Needs Attention",basis:300,loading:!0};const d=()=>({components:{FuPanel:i},setup(){const e=k(!0);return setTimeout(()=>e.value=!1,2e3),{isLoading:e}},template:`
    <div style="height: 420px; display: flex; gap: 24px; background: #f9fafb; padding: 24px;">
      <FuPanel title="Needs Attention" :basis="320" :loading="isLoading">
        <div>
          <div v-for="i in 8" :key="i" style="padding: 12px 0; border-bottom: 1px solid #eee">
            Issue {{ i }}
          </div>
        </div>
      </FuPanel>
      <FuPanel title="Recent Activity" :basis="320" :loading="isLoading">
        <div>
          <div v-for="i in 6" :key="i" style="padding: 12px 0; border-bottom: 1px solid #eee">
            Event {{ i }}
          </div>
        </div>
      </FuPanel>
    </div>
  `});d.parameters={docs:{description:{story:"Simulates a 2s async load — panels start in skeleton state and resolve to real content automatically on mount."}}};const r=()=>({components:{FuPanel:i},template:`
    <div style="background: #f9fafb; padding: 40px; min-height: 100vh;">
      <div class="d-flex align-items-center justify-content-between mb-4">
        <h3 class="m-0 fw-semibold fs-5 text-dark">Operations</h3>
        <span class="text-muted small">Live system status</span>
      </div>

      <div style="display: flex; gap: 24px; height: 420px;">
        <FuPanel title="Needs Attention" :basis="320">
          <template #actions>
            <button style="background:none;border:0;cursor:pointer">⋮</button>
          </template>
          <div>
            <div v-for="i in 15" :key="i" style="padding: 12px 0; border-bottom: 1px solid #eee">
              Issue {{ i }}
            </div>
          </div>
        </FuPanel>

        <FuPanel title="Recent Activity" basis="360px">
          <div>
            <div v-for="i in 10" :key="i" style="padding: 12px 0; border-bottom: 1px solid #eee">
              Event {{ i }}
            </div>
          </div>
        </FuPanel>
      </div>
    </div>
  `});r.parameters={docs:{description:{story:`
A realistic dashboard layout using multiple **FuPanel** components side by side.

This example demonstrates:

- Independent scrolling per panel
- Header actions slot usage
- Different \`basis\` values per panel
- Flex-based layouts for internal tools and admin dashboards

#### Code Example
\`\`\`vue
<template>
  <div style="display: flex; gap: 24px; height: 420px;">
    <FuPanel title="Needs Attention" :basis="320" :loading="isLoading">
      <template #actions>
        <button>⋮</button>
      </template>
      <IssueList />
    </FuPanel>

    <FuPanel title="Recent Activity" basis="360px" :loading="isLoading">
      <ActivityFeed />
    </FuPanel>
  </div>
</template>
\`\`\`
      `}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`args => ({
  components: {
    FuPanel
  },
  setup() {
    return {
      args
    };
  },
  template: \`
    <div style="height: 420px; display: flex; background: #f9fafb; padding: 24px;">
      <FuPanel v-bind="args">
        <template #actions>
          <button style="background:none;border:0;cursor:pointer">⋮</button>
        </template>
        <div>
          <div v-for="i in 20" :key="i" style="padding: 12px 0; border-bottom: 1px solid #eee">
            Item {{ i }}
          </div>
        </div>
      </FuPanel>
    </div>
  \`
})`,...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`args => ({
  components: {
    FuPanel
  },
  setup() {
    return {
      args
    };
  },
  template: \`
    <div style="height: 420px; display: flex; background: #f9fafb; padding: 24px;">
      <FuPanel v-bind="args">
        <template #actions>
          <button style="background:none;border:0;cursor:pointer">⋮</button>
        </template>
        <div>
          <div v-for="i in 20" :key="i" style="padding: 12px 0; border-bottom: 1px solid #eee">
            Item {{ i }}
          </div>
        </div>
      </FuPanel>
    </div>
  \`
})`,...a.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`args => ({
  components: {
    FuPanel
  },
  setup() {
    return {
      args
    };
  },
  template: \`
    <div style="height: 420px; display: flex; background: #f9fafb; padding: 24px;">
      <FuPanel v-bind="args">
        <p>This panel has no header actions.</p>
      </FuPanel>
    </div>
  \`
})`,...o.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`args => ({
  components: {
    FuPanel
  },
  setup() {
    return {
      args
    };
  },
  template: \`
    <div style="height: 420px; display: flex; background: #f9fafb; padding: 24px;">
      <FuPanel v-bind="args">
        <template #actions>
          <button style="background:none;border:0;cursor:pointer">⋮</button>
        </template>
        <div>
          <div v-for="i in 20" :key="i" style="padding: 12px 0; border-bottom: 1px solid #eee">
            Item {{ i }}
          </div>
        </div>
      </FuPanel>
    </div>
  \`
})`,...l.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`() => ({
  components: {
    FuPanel
  },
  setup() {
    const isLoading = ref(true);
    setTimeout(() => isLoading.value = false, 2000);
    return {
      isLoading
    };
  },
  template: \`
    <div style="height: 420px; display: flex; gap: 24px; background: #f9fafb; padding: 24px;">
      <FuPanel title="Needs Attention" :basis="320" :loading="isLoading">
        <div>
          <div v-for="i in 8" :key="i" style="padding: 12px 0; border-bottom: 1px solid #eee">
            Issue {{ i }}
          </div>
        </div>
      </FuPanel>
      <FuPanel title="Recent Activity" :basis="320" :loading="isLoading">
        <div>
          <div v-for="i in 6" :key="i" style="padding: 12px 0; border-bottom: 1px solid #eee">
            Event {{ i }}
          </div>
        </div>
      </FuPanel>
    </div>
  \`
})`,...d.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`() => ({
  components: {
    FuPanel
  },
  template: \`
    <div style="background: #f9fafb; padding: 40px; min-height: 100vh;">
      <div class="d-flex align-items-center justify-content-between mb-4">
        <h3 class="m-0 fw-semibold fs-5 text-dark">Operations</h3>
        <span class="text-muted small">Live system status</span>
      </div>

      <div style="display: flex; gap: 24px; height: 420px;">
        <FuPanel title="Needs Attention" :basis="320">
          <template #actions>
            <button style="background:none;border:0;cursor:pointer">⋮</button>
          </template>
          <div>
            <div v-for="i in 15" :key="i" style="padding: 12px 0; border-bottom: 1px solid #eee">
              Issue {{ i }}
            </div>
          </div>
        </FuPanel>

        <FuPanel title="Recent Activity" basis="360px">
          <div>
            <div v-for="i in 10" :key="i" style="padding: 12px 0; border-bottom: 1px solid #eee">
              Event {{ i }}
            </div>
          </div>
        </FuPanel>
      </div>
    </div>
  \`
})`,...r.parameters?.docs?.source}}};const C=["Default","CustomBasis","NoActions","Loading","LoadingTransition","DashboardPreview"];export{a as CustomBasis,r as DashboardPreview,s as Default,l as Loading,d as LoadingTransition,o as NoActions,C as __namedExportsOrder,E as default};
