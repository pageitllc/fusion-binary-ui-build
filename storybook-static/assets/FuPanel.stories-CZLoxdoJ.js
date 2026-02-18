import{s as v,c as g,a as r,f as p,g as u,t as f,y as c,n as y,j as d}from"./iframe-4anGkjM3.js";import"./preload-helper-Ct5FWWRu.js";const x={key:0,class:"fu-panel__header px-2"},h={key:0,class:"fu-panel__title"},F={key:1,class:"fu-panel__actions"},P={class:"fu-panel__body-wrapper"},k={class:"fu-panel__body scrollbar__control customScrollBar px-2"},i=v({__name:"FuPanel",props:{title:{},basis:{}},setup(e){const o=e,b=g(()=>o.basis?typeof o.basis=="number"?`${o.basis}px`:o.basis:"300px");return(l,_)=>(d(),r("div",{class:"fu-panel",style:y({flexBasis:b.value})},[e.title||l.$slots.actions?(d(),r("div",x,[e.title?(d(),r("h3",h,f(e.title),1)):p("",!0),l.$slots.actions?(d(),r("div",F,[c(l.$slots,"actions")])):p("",!0)])):p("",!0),u("div",P,[u("div",k,[c(l.$slots,"default")])])],4))}});i.__docgenInfo={exportName:"default",displayName:"FuPanel",description:"",tags:{},props:[{name:"title",required:!1,type:{name:"string"}},{name:"basis",required:!1,type:{name:"union",elements:[{name:"string"},{name:"number"}]}}],slots:[{name:"actions"},{name:"default"}],sourceFiles:["/Users/xavier/Documents/Websites/Skkido/Fusion-binary-ui/src/components/panel/FuPanel.vue"]};const N={title:"Fusion/FuPanel",component:i,tags:["autodocs"],parameters:{docs:{description:{component:`
The \`FuPanel\` component is a flexible layout container used to group related content
inside dashboards, admin views, and internal tools.

It provides:

- A header with an optional **title**
- A right-aligned **actions slot**
- A scroll-safe body area for lists, tables, and dynamic content
- A configurable **flex-basis** via the \`basis\` prop

The panel is designed to work correctly inside complex flex layouts and ensures
internal scrolling without breaking parent containers.

#### Example usage
\`\`\`vue
<template>
  <div style="display: flex; gap: 24px; height: 420px;">
    <FuPanel title="Needs Attention" :basis="320">
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

    <FuPanel title="Recent Activity" basis="360px">
      <ActivityFeed />
    </FuPanel>
  </div>
</template>
\`\`\`
        `}}},argTypes:{title:{control:"text",description:"Panel title displayed in the header"},basis:{control:"text",description:"Flex-basis for the panel (number = px, or any valid CSS size e.g. '320px', '30%')"}}},m=e=>({components:{FuPanel:i},setup(){return{args:e}},template:`
    <div style="height: 420px; display: flex; background: #f9fafb; padding: 24px;">
      <FuPanel v-bind="args">
        <template #actions>
          <button style="background:none;border:0;cursor:pointer">
            ⋮
          </button>
        </template>

        <div>
          <div
            v-for="i in 20"
            :key="i"
            style="padding: 12px 0; border-bottom: 1px solid #eee"
          >
            Item {{ i }}
          </div>
        </div>
      </FuPanel>
    </div>
  `}),n=m.bind({});n.args={title:"Needs Attention",basis:300};const t=m.bind({});t.args={title:"Wider Panel",basis:380};const s=e=>({components:{FuPanel:i},setup(){return{args:e}},template:`
    <div style="height: 420px; display: flex; background: #f9fafb; padding: 24px;">
      <FuPanel v-bind="args">
        <p>This panel has no header actions.</p>
      </FuPanel>
    </div>
  `});s.args={title:"Activity",basis:300};const a=()=>({components:{FuPanel:i},template:`
    <div style="background: #f9fafb; padding: 40px; min-height: 100vh;">
      <div class="d-flex align-items-center justify-content-between mb-4">
        <h3 class="m-0 fw-semibold fs-5 text-dark">Operations</h3>
        <span class="text-muted small">Live system status</span>
      </div>

      <div style="display: flex; gap: 24px; height: 420px;">
        <FuPanel title="Needs Attention" :basis="320">
          <template #actions>
            <button style="background:none;border:0;cursor:pointer">
              ⋮
            </button>
          </template>

          <div>
            <div
              v-for="i in 15"
              :key="i"
              style="padding: 12px 0; border-bottom: 1px solid #eee"
            >
              Issue {{ i }}
            </div>
          </div>
        </FuPanel>

        <FuPanel title="Recent Activity" basis="360px">
          <div>
            <div
              v-for="i in 10"
              :key="i"
              style="padding: 12px 0; border-bottom: 1px solid #eee"
            >
              Event {{ i }}
            </div>
          </div>
        </FuPanel>
      </div>
    </div>
  `});a.parameters={docs:{description:{story:`
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
    <FuPanel title="Needs Attention" :basis="320">
      <template #actions>
        <button>⋮</button>
      </template>

      <IssueList />
    </FuPanel>

    <FuPanel title="Recent Activity" basis="360px">
      <ActivityFeed />
    </FuPanel>
  </div>
</template>
\`\`\`
      `}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`args => ({
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
          <button style="background:none;border:0;cursor:pointer">
            ⋮
          </button>
        </template>

        <div>
          <div
            v-for="i in 20"
            :key="i"
            style="padding: 12px 0; border-bottom: 1px solid #eee"
          >
            Item {{ i }}
          </div>
        </div>
      </FuPanel>
    </div>
  \`
})`,...n.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`args => ({
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
          <button style="background:none;border:0;cursor:pointer">
            ⋮
          </button>
        </template>

        <div>
          <div
            v-for="i in 20"
            :key="i"
            style="padding: 12px 0; border-bottom: 1px solid #eee"
          >
            Item {{ i }}
          </div>
        </div>
      </FuPanel>
    </div>
  \`
})`,...t.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`(args: any) => ({
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
})`,...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`() => ({
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
            <button style="background:none;border:0;cursor:pointer">
              ⋮
            </button>
          </template>

          <div>
            <div
              v-for="i in 15"
              :key="i"
              style="padding: 12px 0; border-bottom: 1px solid #eee"
            >
              Issue {{ i }}
            </div>
          </div>
        </FuPanel>

        <FuPanel title="Recent Activity" basis="360px">
          <div>
            <div
              v-for="i in 10"
              :key="i"
              style="padding: 12px 0; border-bottom: 1px solid #eee"
            >
              Event {{ i }}
            </div>
          </div>
        </FuPanel>
      </div>
    </div>
  \`
})`,...a.parameters?.docs?.source}}};const S=["Default","CustomBasis","NoActions","DashboardPreview"];export{t as CustomBasis,a as DashboardPreview,n as Default,s as NoActions,S as __namedExportsOrder,N as default};
