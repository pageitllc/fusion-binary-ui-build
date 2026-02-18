import{s as y,c as f,a as o,g as a,f as x,n as F,F as k,h as w,j as p,l as P,t as S,r as v}from"./iframe-4anGkjM3.js";import{_}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./preload-helper-Ct5FWWRu.js";const T={class:"fu-progress-stepper"},A={class:"fu-progress-bar"},B={key:0,class:"fu-step-labels"},L=["onClick"],C={class:"circle"},D={class:"label"},b=y({__name:"FusionProgressStepper",props:{currentStep:{},totalSteps:{},showLabels:{type:Boolean},steps:{}},emits:["step-click"],setup(e,{emit:t}){const s=e,n=t,m=f(()=>`${(s.currentStep+1)/s.totalSteps*100}%`),d=g=>n("step-click",g);return(g,N)=>(p(),o("div",T,[a("div",A,[a("div",{class:"fu-progress-fill",style:F({width:m.value})},null,4)]),e.showLabels&&e.steps?(p(),o("div",B,[(p(!0),o(k,null,w(e.steps,(h,r)=>(p(),o("div",{key:r,class:P(["fu-step-label",{active:e.currentStep===r}]),onClick:z=>d(r)},[a("div",C,S(r+1),1),a("div",D,S(h.title),1)],10,L))),128))])):x("",!0)]))}}),u=_(b,[["__scopeId","data-v-6ac0e869"]]);b.__docgenInfo={exportName:"default",displayName:"FusionProgressStepper",description:"",tags:{},props:[{name:"currentStep",required:!0,type:{name:"number"}},{name:"totalSteps",required:!0,type:{name:"number"}},{name:"showLabels",required:!1,type:{name:"boolean"}},{name:"steps",required:!1,type:{name:"Array",elements:[{name:"{ title: string }"}]}}],events:[{name:"step-click"}],sourceFiles:["/Users/xavier/Documents/Websites/Skkido/Fusion-binary-ui/src/components/progress/FusionProgressStepper.vue"]};const E={title:"Components/FusionProgressStepper",component:u,tags:["autodocs"],parameters:{docs:{description:{component:`
The **FusionProgressStepper** component provides a lightweight, animated progress indicator used across setup wizards, onboarding flows, or multi-step forms.

It supports both **plain progress bars** and **labeled step indicators** for responsive or guided experiences.

---

###  Features
- Animated linear progress bar  
- Clickable step labels and circles  
- Configurable step count and current step  
- Matches Fusion Binary color tokens  
- Works in modals, sidebars, or forms  

---

###  Props

| Prop | Type | Default | Description |
|------|------|----------|-------------|
| \`currentStep\` | \`number\` | — | The current active step index (0-based) |
| \`totalSteps\` | \`number\` | — | Total number of steps in the process |
| \`showLabels\` | \`boolean\` | \`false\` | Whether to display step circles and labels below the bar |
| \`steps\` | \`{ title: string }[]\` | — | Array of step titles to render if \`showLabels\` is enabled |
| \`@step-click\` | \`(index: number) => void\` | — | Emitted when a user clicks on a label or circle |

---

### Usage Example

\`\`\`vue
<template>
  <FusionProgressStepper
    :current-step="currentStep"
    :total-steps="steps.length"
    :steps="steps"
    show-labels
    @step-click="goToStep"
  />
</template>

<script setup lang="ts">
import FusionProgressStepper from "@/components/progress/FusionProgressStepper.vue"

const steps = [
  { title: "Details" },
  { title: "Availability" },
  { title: "Advanced" },
]

const currentStep = 1
const goToStep = (index: number) => {
  currentStep = index
}
<\/script>
\`\`\`
        `}}}},i={render:e=>({components:{FusionProgressStepper:u},setup(){return{args:e}},template:`
      <div style="max-width: 600px; margin: 2rem auto;">
        <FusionProgressStepper v-bind="args" />
      </div>
    `}),args:{currentStep:1,totalSteps:5,showLabels:!1},parameters:{docs:{description:{story:"A simple, clean linear progress bar showing completion percentage based on current step."}}}},l={render:e=>({components:{FusionProgressStepper:u},setup(){const t=v(1);return{args:e,currentStep:t,goToStep:n=>{t.value=n}}},template:`
      <div style="max-width: 600px; margin: 2rem auto;">
        <FusionProgressStepper
          v-bind="args"
          :current-step="currentStep"
          @step-click="goToStep"
        />
        <p style="text-align:center; margin-top: 1rem;">Active Step: {{ currentStep + 1 }}</p>
      </div>
    `}),args:{currentStep:1,totalSteps:3,showLabels:!0,steps:[{title:"Details"},{title:"Availability"},{title:"Advanced"}]},parameters:{docs:{description:{story:"Displays a stepper with clickable labels and active step highlighting for multi-step flows."}}}},c={render:e=>({components:{FusionProgressStepper:u},setup(){const t=v(0);return{args:e,currentStep:t,next:()=>{t.value<e.totalSteps-1&&t.value++},prev:()=>{t.value>0&&t.value--},goToStep:d=>{t.value=d}}},template:`
      <div style="max-width: 600px; margin: 2rem auto; text-align: center;">
        <FusionProgressStepper
          v-bind="args"
          :current-step="currentStep"
          @step-click="goToStep"
        />

        <div style="margin-top: 1.5rem;">
          <FusionButton variant="outline" size="sm" @click="prev" style="margin-right: 0.5rem;">Previous</FusionButton>
          <FusionButton variant="solid" size="sm" @click="next">Next</FusionButton>
        </div>

        <p style="margin-top: 1rem;">Current Step: {{ currentStep + 1 }} / {{ args.totalSteps }}</p>
      </div>
    `}),args:{totalSteps:4,showLabels:!0,steps:[{title:"Step 1"},{title:"Step 2"},{title:"Step 3"},{title:"Step 4"}]},parameters:{docs:{description:{story:"A fully interactive stepper that supports both clickable step labels and Next/Previous navigation buttons."}}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: args => ({
    components: {
      FusionProgressStepper
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <div style="max-width: 600px; margin: 2rem auto;">
        <FusionProgressStepper v-bind="args" />
      </div>
    \`
  }),
  args: {
    currentStep: 1,
    totalSteps: 5,
    showLabels: false
  },
  parameters: {
    docs: {
      description: {
        story: "A simple, clean linear progress bar showing completion percentage based on current step."
      }
    }
  }
}`,...i.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: args => ({
    components: {
      FusionProgressStepper
    },
    setup() {
      const currentStep = ref(1);
      const goToStep = (index: number) => {
        currentStep.value = index;
      };
      return {
        args,
        currentStep,
        goToStep
      };
    },
    template: \`
      <div style="max-width: 600px; margin: 2rem auto;">
        <FusionProgressStepper
          v-bind="args"
          :current-step="currentStep"
          @step-click="goToStep"
        />
        <p style="text-align:center; margin-top: 1rem;">Active Step: {{ currentStep + 1 }}</p>
      </div>
    \`
  }),
  args: {
    currentStep: 1,
    totalSteps: 3,
    showLabels: true,
    steps: [{
      title: "Details"
    }, {
      title: "Availability"
    }, {
      title: "Advanced"
    }]
  },
  parameters: {
    docs: {
      description: {
        story: "Displays a stepper with clickable labels and active step highlighting for multi-step flows."
      }
    }
  }
}`,...l.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: args => ({
    components: {
      FusionProgressStepper
    },
    setup() {
      const currentStep = ref(0);
      const next = () => {
        if (currentStep.value < args.totalSteps - 1) currentStep.value++;
      };
      const prev = () => {
        if (currentStep.value > 0) currentStep.value--;
      };
      const goToStep = (index: number) => {
        currentStep.value = index;
      };
      return {
        args,
        currentStep,
        next,
        prev,
        goToStep
      };
    },
    template: \`
      <div style="max-width: 600px; margin: 2rem auto; text-align: center;">
        <FusionProgressStepper
          v-bind="args"
          :current-step="currentStep"
          @step-click="goToStep"
        />

        <div style="margin-top: 1.5rem;">
          <FusionButton variant="outline" size="sm" @click="prev" style="margin-right: 0.5rem;">Previous</FusionButton>
          <FusionButton variant="solid" size="sm" @click="next">Next</FusionButton>
        </div>

        <p style="margin-top: 1rem;">Current Step: {{ currentStep + 1 }} / {{ args.totalSteps }}</p>
      </div>
    \`
  }),
  args: {
    totalSteps: 4,
    showLabels: true,
    steps: [{
      title: "Step 1"
    }, {
      title: "Step 2"
    }, {
      title: "Step 3"
    }, {
      title: "Step 4"
    }]
  },
  parameters: {
    docs: {
      description: {
        story: "A fully interactive stepper that supports both clickable step labels and Next/Previous navigation buttons."
      }
    }
  }
}`,...c.parameters?.docs?.source}}};const U=["Basic","WithLabels","Interactive"];export{i as Basic,c as Interactive,l as WithLabels,U as __namedExportsOrder,E as default};
