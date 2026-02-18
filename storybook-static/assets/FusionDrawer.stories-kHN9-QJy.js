import{s as N,q as C,o as S,d as w,w as z,x as P,j as r,a as x,f as l,g as a,l as y,y as b,b as T,u as D,r as p,c as F}from"./iframe-4anGkjM3.js";import{F as B}from"./FusionActionButton-DOSunp5G.js";import{X as O}from"./x-CRu_ipwL.js";import{c as E}from"./createLucideIcon-MAVkZFkt.js";import{C as _}from"./chevron-down-pi8uy0el.js";import{_ as $}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{F as h}from"./FusionButton-DDWoq9Vu.js";import"./preload-helper-Ct5FWWRu.js";/**
 * @license lucide-vue-next v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const q=E("chevron-up",[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]]),L={key:0,class:"fu-drawer"},V={class:"fu-drawer__header-content"},A={key:0,class:"fu-drawer__header-actions"},U={class:"fu-drawer__body"},H={class:"fu-drawer__footer"},k=N({__name:"FusionDrawer",props:{open:{type:Boolean},title:{},position:{default:"right"},size:{default:"half"},showControls:{type:Boolean,default:!0},hideHeaderBorder:{type:Boolean,default:!1},canNext:{type:Boolean},canPrev:{type:Boolean}},emits:["close","next","prev"],setup(e,{emit:u}){const o=e,g=u;function s(n){n.key==="Escape"&&o.open&&g("close")}return C(()=>window.addEventListener("keydown",s)),S(()=>window.removeEventListener("keydown",s)),(n,t)=>(r(),w(P,{name:"drawer-fade"},{default:z(()=>[e.open?(r(),x("div",L,[a("div",{class:"fu-drawer__backdrop",onClick:t[0]||(t[0]=i=>n.$emit("close"))}),a("div",{class:y(["fu-drawer__panel",[`fu-drawer__panel--${e.position}`,`fu-drawer__panel--${e.size}`,{"fu-drawer__panel--with-controls":e.showControls}]])},[n.$slots.header||e.showControls?(r(),x("div",{key:0,class:y(["fu-drawer__header",{"border-bottom-0":e.hideHeaderBorder}])},[a("div",V,[b(n.$slots,"header",{},void 0,!0)]),e.showControls?(r(),x("div",A,[T(B,{size:"sm",variant:"subtle",icon:D(O),onClick:t[1]||(t[1]=i=>n.$emit("close"))},null,8,["icon"])])):l("",!0)],2)):l("",!0),a("div",U,[b(n.$slots,"default",{class:"slot-body"},void 0,!0)]),a("div",{class:y(["fu-drawer__nav",[e.position==="right"?"fu-drawer__nav--left":"",e.position==="left"?"fu-drawer__nav--right":"",e.position==="bottom"?"fu-drawer__nav--center":""]])},[e.canPrev?(r(),w(B,{key:0,size:"sm",variant:"subtle",icon:D(q),onClick:t[2]||(t[2]=i=>n.$emit("prev"))},null,8,["icon"])):l("",!0),e.canNext?(r(),w(B,{key:1,size:"sm",variant:"subtle",icon:D(_),onClick:t[3]||(t[3]=i=>n.$emit("next"))},null,8,["icon"])):l("",!0)],2),a("div",H,[b(n.$slots,"footer",{},void 0,!0)])],2)])):l("",!0)]),_:3}))}}),d=$(k,[["__scopeId","data-v-37927fd4"]]);k.__docgenInfo={exportName:"default",displayName:"FusionDrawer",description:"",tags:{},props:[{name:"open",required:!0,type:{name:"boolean"}},{name:"title",required:!1,type:{name:"string"}},{name:"position",required:!1,type:{name:"union",elements:[{name:'"left"'},{name:'"right"'},{name:'"bottom"'}]},defaultValue:{func:!1,value:'"right"'}},{name:"size",required:!1,type:{name:"union",elements:[{name:'"half"'},{name:'"full"'}]},defaultValue:{func:!1,value:'"half"'}},{name:"showControls",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"true"}},{name:"hideHeaderBorder",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"canNext",required:!1,type:{name:"boolean"}},{name:"canPrev",required:!1,type:{name:"boolean"}}],events:[{name:"close"},{name:"prev"},{name:"next"}],slots:[{name:"header"},{name:"default",scoped:!0,bindings:[{name:"class",title:"binding"}]},{name:"footer"}],sourceFiles:["/Users/xavier/Documents/Websites/Skkido/Fusion-binary-ui/src/components/drawer/FusionDrawer.vue"]};const G={title:"Components/Drawer",component:d,tags:["autodocs"],argTypes:{open:{control:"boolean",description:"Controls drawer visibility."},title:{control:"text",description:"Drawer header title text."},position:{control:"select",options:["left","right","bottom"],description:"Sets the drawer position on screen."},size:{control:"select",options:["half","full"],description:"Sets the drawer size (half = 50%, full = 70%)."},showControls:{control:"boolean",description:"Toggles the header with navigation and close buttons."},canNext:{control:"boolean",description:"Enable the Next button."},canPrev:{control:"boolean",description:"Enable the Previous button."}},parameters:{docs:{description:{component:`
The **FusionDrawer** component provides a flexible, adaptive off-canvas panel that can slide in from **left**, **right**, or **bottom**.  
Navigation buttons automatically align to the *opposite edge* of the opening side —  
for example, drawers from the **right** show navigation on the **top-left corner**, and drawers from the **left** show it on the **top-right corner**.

---

### Props

| Prop | Type | Default | Description |
|------|------|----------|-------------|
| \`open\` | \`boolean\` | — | Controls visibility of the drawer. |
| \`title\` | \`string\` | — | Drawer header title text. |
| \`position\` | \`"left" | "right" | "bottom"\` | \`"right"\` | Sets where the drawer appears. |
| \`size\` | \`"half" | "full"\` | \`"half"\` | Determines the drawer width or height (depending on position). |
| \`showControls\` | \`boolean\` | \`true\` | Shows or hides the header and floating navigation. |
| \`canNext\` | \`boolean\` | — | Enables navigation forward. |
| \`canPrev\` | \`boolean\` | — | Enables navigation backward. |

---

### Events

| Event | Description |
|--------|-------------|
| \`close\` | Triggered when backdrop or Close button is clicked. |
| \`next\` | Triggered when Next button is clicked. |
| \`prev\` | Triggered when Previous button is clicked. |

---

###  Example Usage

\`\`\`vue
<template>
  <div style="padding: 2rem">
    <!-- Trigger -->
    <FusionButton
      text="Open Drawer"
      variant="solid"
      @click="open = true"
    />

    <!-- Drawer -->
    <FusionDrawer
      :open="open"
      position="right"
      size="full"
      :can-next="true"
      :can-prev="step > 1"
      @close="handleClose"
      @next="handleNext"
      @prev="handlePrev"
    >
      <!-- HEADER SLOT -->
      <template #header>
        <div style="display: flex; flex-direction: column;">
          <h4 style="margin: 0">Deal Details</h4>
          <small style="opacity: 0.6">
            Step {{ step }} of 3
          </small>
        </div>
      </template>

      <!-- BODY -->
      <div
        style="
          padding: 1.5rem;
          overflow: auto;
          flex: 1;
          display: flex;
          flex-direction: column;
          gap: 1rem;
        "
      >
        <p>
          This drawer opens from the <strong>right</strong> and takes
          <strong>70% width</strong>.
        </p>

        <p>
          It is fully controlled by the parent component using the
          <code>open</code> state.
        </p>

        <div
          style="
            height: 500px;
            border-radius: 8px;
            background: var(--fu-surface-muted);
            display: flex;
            align-items: center;
            justify-content: center;
          "
        >
          Scrollable content area
        </div>

        <div style="display: flex; gap: 0.75rem; justify-content: flex-end">
          <FusionButton
            text="Close"
            variant="subtle"
            @click="handleClose"
          />

          <FusionButton
            text="Save"
            variant="solid"
          />
        </div>
      </div>
    </FusionDrawer>
  </div>
</template>
<script setup lang="ts">
import { ref } from "vue";

import FusionDrawer from "@/components/drawer/FusionDrawer.vue";
import FusionButton from "@/components/button/FusionButton.vue";

/**
 * Drawer open state
 * Parent controls visibility
 */
const open = ref(false);

/**
 * Example step state
 * Used with can-next / can-prev
 */
const step = ref(1);

function handleClose() {
  open.value = false;
  step.value = 1; // optional reset
}

function handleNext() {
  if (step.value < 3) {
    step.value++;
  }
}

function handlePrev() {
  if (step.value > 1) {
    step.value--;
  }
}
<\/script>

\`\`\`
        `}}}},c={render:()=>({components:{FusionDrawer:d,FusionButton:h},setup(){return{open:p(!1)}},template:`
      <div style="padding:2rem;">
        <FusionButton text="Open Drawer (Right)" variant="solid" @click="open = true" />

        <FusionDrawer
          :open="open"
          position="right"
          size="half"
          title="Deal Overview"
          @close="open = false"
        >
          <p>This drawer slides from the <strong>right side</strong>.</p>
          <p>Notice navigation appears at the <strong>top-left corner</strong>.</p>
        </FusionDrawer>
      </div>
    `})},f={render:()=>({components:{FusionDrawer:d,FusionButton:h},setup(){return{open:p(!1)}},template:`
      <div style="padding:2rem;">
        <FusionButton text="Open Bottom Drawer" variant="solid" @click="open = true" />

        <FusionDrawer
          :open="open"
          position="bottom"
          size="full"
          title="Activity Feed"
          @close="open = false"
        >
          <p>This drawer slides from the <strong>bottom</strong>.</p>
          <p>Navigation (if enabled) is <strong>centered at the top</strong>.</p>
        </FusionDrawer>
      </div>
    `})},m={render:()=>({components:{FusionDrawer:d,FusionButton:h},setup(){return{open:p(!1)}},template:`
      <div style="padding:2rem;">
        <FusionButton text="Open Left Drawer" variant="solid" @click="open = true" />

        <FusionDrawer
          :open="open"
          position="left"
          size="half"
          title="Pipeline Filters"
          @close="open = false"
        >
          <p>This drawer slides from the <strong>left side</strong>.</p>
          <p>Navigation appears at the <strong>top-right corner</strong>.</p>
        </FusionDrawer>
      </div>
    `})},v={render:()=>({components:{FusionDrawer:d,FusionButton:h},setup(){const e=p(!1),u=["Overview","Details","Activity"],o=p(0),g=F(()=>u[o.value]),s=F(()=>o.value>0),n=F(()=>o.value<u.length-1);function t(){n.value&&o.value++}function i(){s.value&&o.value--}return{open:e,current:g,canPrev:s,canNext:n,nextStep:t,prevStep:i}},template:`
      <div style="padding:2rem;">
        <FusionButton text="Open Navigable Drawer" variant="solid" @click="open = true" />

        <FusionDrawer
          :open="open"
          position="right"
          size="full"
          :title="current"
          :can-next="canNext"
          :can-prev="canPrev"
          @close="open = false"
          @next="nextStep"
          @prev="prevStep"
        >
          <p>You are currently viewing the <strong>{{ current }}</strong> section.</p>
          <p>This demonstrates floating navigation in the <strong>top-left corner</strong> (right drawer).</p>
        </FusionDrawer>
      </div>
    `})};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      FusionDrawer,
      FusionButton
    },
    setup() {
      const open = ref(false);
      return {
        open
      };
    },
    template: \`
      <div style="padding:2rem;">
        <FusionButton text="Open Drawer (Right)" variant="solid" @click="open = true" />

        <FusionDrawer
          :open="open"
          position="right"
          size="half"
          title="Deal Overview"
          @close="open = false"
        >
          <p>This drawer slides from the <strong>right side</strong>.</p>
          <p>Notice navigation appears at the <strong>top-left corner</strong>.</p>
        </FusionDrawer>
      </div>
    \`
  })
}`,...c.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      FusionDrawer,
      FusionButton
    },
    setup() {
      const open = ref(false);
      return {
        open
      };
    },
    template: \`
      <div style="padding:2rem;">
        <FusionButton text="Open Bottom Drawer" variant="solid" @click="open = true" />

        <FusionDrawer
          :open="open"
          position="bottom"
          size="full"
          title="Activity Feed"
          @close="open = false"
        >
          <p>This drawer slides from the <strong>bottom</strong>.</p>
          <p>Navigation (if enabled) is <strong>centered at the top</strong>.</p>
        </FusionDrawer>
      </div>
    \`
  })
}`,...f.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      FusionDrawer,
      FusionButton
    },
    setup() {
      const open = ref(false);
      return {
        open
      };
    },
    template: \`
      <div style="padding:2rem;">
        <FusionButton text="Open Left Drawer" variant="solid" @click="open = true" />

        <FusionDrawer
          :open="open"
          position="left"
          size="half"
          title="Pipeline Filters"
          @close="open = false"
        >
          <p>This drawer slides from the <strong>left side</strong>.</p>
          <p>Navigation appears at the <strong>top-right corner</strong>.</p>
        </FusionDrawer>
      </div>
    \`
  })
}`,...m.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      FusionDrawer,
      FusionButton
    },
    setup() {
      const open = ref(false);
      const steps = ["Overview", "Details", "Activity"];
      const index = ref(0);
      const current = computed(() => steps[index.value]);
      const canPrev = computed(() => index.value > 0);
      const canNext = computed(() => index.value < steps.length - 1);
      function nextStep() {
        if (canNext.value) index.value++;
      }
      function prevStep() {
        if (canPrev.value) index.value--;
      }
      return {
        open,
        current,
        canPrev,
        canNext,
        nextStep,
        prevStep
      };
    },
    template: \`
      <div style="padding:2rem;">
        <FusionButton text="Open Navigable Drawer" variant="solid" @click="open = true" />

        <FusionDrawer
          :open="open"
          position="right"
          size="full"
          :title="current"
          :can-next="canNext"
          :can-prev="canPrev"
          @close="open = false"
          @next="nextStep"
          @prev="prevStep"
        >
          <p>You are currently viewing the <strong>{{ current }}</strong> section.</p>
          <p>This demonstrates floating navigation in the <strong>top-left corner</strong> (right drawer).</p>
        </FusionDrawer>
      </div>
    \`
  })
}`,...v.parameters?.docs?.source}}};const J=["Default","Bottom","Left","WithNavigation"];export{f as Bottom,c as Default,m as Left,v as WithNavigation,J as __namedExportsOrder,G as default};
