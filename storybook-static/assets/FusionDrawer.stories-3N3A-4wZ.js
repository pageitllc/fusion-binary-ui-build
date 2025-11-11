import{d as N,i as C,j as z,k as w,p as S,T,o as r,c as b,a as i,b as l,n as D,g as k,l as P,y as F,r as p,D as y}from"./iframe-o7SUGoga.js";import{F as x}from"./FusionActionButton-BJUvvBPP.js";import{X as O}from"./x-BhVw2qjo.js";import{c as $}from"./createLucideIcon-D5kBsy5g.js";import{C as E}from"./chevron-down-BkqrEgKA.js";import{_}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{F as h}from"./FusionButton-DEEa7fmw.js";import"./preload-helper-Ct5FWWRu.js";/**
 * @license lucide-vue-next v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const q=$("chevron-up",[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]]),L={key:0,class:"fu-drawer"},V={class:"fu-drawer__header-content"},A={key:0,class:"fu-drawer__header-actions"},U={class:"fu-drawer__body"},B=N({__name:"FusionDrawer",props:{open:{type:Boolean},title:{},position:{default:"right"},size:{default:"half"},showControls:{type:Boolean,default:!0},hideHeaderBorder:{type:Boolean,default:!1},canNext:{type:Boolean},canPrev:{type:Boolean}},emits:["close","next","prev"],setup(e,{emit:c}){const o=e,g=c;function a(n){n.key==="Escape"&&o.open&&g("close")}return C(()=>window.addEventListener("keydown",a)),z(()=>window.removeEventListener("keydown",a)),(n,t)=>(r(),w(T,{name:"drawer-fade"},{default:S(()=>[e.open?(r(),b("div",L,[l("div",{class:"fu-drawer__backdrop",onClick:t[0]||(t[0]=s=>n.$emit("close"))}),l("div",{class:D(["fu-drawer__panel",[`fu-drawer__panel--${e.position}`,`fu-drawer__panel--${e.size}`,{"fu-drawer__panel--with-controls":e.showControls}]])},[n.$slots.header||e.showControls?(r(),b("div",{key:0,class:D(["fu-drawer__header",{"border-bottom-0":e.hideHeaderBorder}])},[l("div",V,[k(n.$slots,"header",{},void 0,!0)]),e.showControls?(r(),b("div",A,[P(x,{size:"sm",variant:"subtle",icon:F(O),onClick:t[1]||(t[1]=s=>n.$emit("close"))},null,8,["icon"])])):i("",!0)],2)):i("",!0),l("div",U,[k(n.$slots,"default",{class:"slot-body"},void 0,!0)]),l("div",{class:D(["fu-drawer__nav",[e.position==="right"?"fu-drawer__nav--left":"",e.position==="left"?"fu-drawer__nav--right":"",e.position==="bottom"?"fu-drawer__nav--center":""]])},[e.canPrev?(r(),w(x,{key:0,size:"sm",variant:"subtle",icon:F(q),onClick:t[2]||(t[2]=s=>n.$emit("prev"))},null,8,["icon"])):i("",!0),e.canNext?(r(),w(x,{key:1,size:"sm",variant:"subtle",icon:F(E),onClick:t[3]||(t[3]=s=>n.$emit("next"))},null,8,["icon"])):i("",!0)],2)],2)])):i("",!0)]),_:3}))}}),d=_(B,[["__scopeId","data-v-3d4f1a2c"]]);B.__docgenInfo={exportName:"default",displayName:"FusionDrawer",description:"",tags:{},props:[{name:"open",required:!0,type:{name:"boolean"}},{name:"title",required:!1,type:{name:"string"}},{name:"position",required:!1,type:{name:"union",elements:[{name:'"left"'},{name:'"right"'},{name:'"bottom"'}]},defaultValue:{func:!1,value:'"right"'}},{name:"size",required:!1,type:{name:"union",elements:[{name:'"half"'},{name:'"full"'}]},defaultValue:{func:!1,value:'"half"'}},{name:"showControls",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"true"}},{name:"hideHeaderBorder",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"canNext",required:!1,type:{name:"boolean"}},{name:"canPrev",required:!1,type:{name:"boolean"}}],events:[{name:"close"},{name:"prev"},{name:"next"}],slots:[{name:"header"},{name:"default",scoped:!0,bindings:[{name:"class",title:"binding"}]}],sourceFiles:["/Users/tommys/Documents/Skkido/Fusion-binary-ui/src/components/drawer/FusionDrawer.vue"]};const X={title:"Components/Drawer",component:d,tags:["autodocs"],argTypes:{open:{control:"boolean",description:"Controls drawer visibility."},title:{control:"text",description:"Drawer header title text."},position:{control:"select",options:["left","right","bottom"],description:"Sets the drawer position on screen."},size:{control:"select",options:["half","full"],description:"Sets the drawer size (half = 50%, full = 70%)."},showControls:{control:"boolean",description:"Toggles the header with navigation and close buttons."},canNext:{control:"boolean",description:"Enable the Next button."},canPrev:{control:"boolean",description:"Enable the Previous button."}},parameters:{docs:{description:{component:'\nThe **FusionDrawer** component provides a flexible, adaptive off-canvas panel that can slide in from **left**, **right**, or **bottom**.  \nNavigation buttons automatically align to the *opposite edge* of the opening side —  \nfor example, drawers from the **right** show navigation on the **top-left corner**, and drawers from the **left** show it on the **top-right corner**.\n\n---\n\n### Props\n\n| Prop | Type | Default | Description |\n|------|------|----------|-------------|\n| `open` | `boolean` | — | Controls visibility of the drawer. |\n| `title` | `string` | — | Drawer header title text. |\n| `position` | `"left" | "right" | "bottom"` | `"right"` | Sets where the drawer appears. |\n| `size` | `"half" | "full"` | `"half"` | Determines the drawer width or height (depending on position). |\n| `showControls` | `boolean` | `true` | Shows or hides the header and floating navigation. |\n| `canNext` | `boolean` | — | Enables navigation forward. |\n| `canPrev` | `boolean` | — | Enables navigation backward. |\n\n---\n\n### Events\n\n| Event | Description |\n|--------|-------------|\n| `close` | Triggered when backdrop or Close button is clicked. |\n| `next` | Triggered when Next button is clicked. |\n| `prev` | Triggered when Previous button is clicked. |\n\n---\n\n###  Example Usage\n\n```vue\n<FusionDrawer\n  :open="open"\n  position="right"\n  size="full"\n  title="Deal Details"\n  :can-next="true"\n  @close="open = false"\n>\n  <p>This drawer opens from the right and takes 70% width.</p>\n</FusionDrawer>\n```\n        '}}}},u={render:()=>({components:{FusionDrawer:d,FusionButton:h},setup(){return{open:p(!1)}},template:`
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
    `})},v={render:()=>({components:{FusionDrawer:d,FusionButton:h},setup(){const e=p(!1),c=["Overview","Details","Activity"],o=p(0),g=y(()=>c[o.value]),a=y(()=>o.value>0),n=y(()=>o.value<c.length-1);function t(){n.value&&o.value++}function s(){a.value&&o.value--}return{open:e,current:g,canPrev:a,canNext:n,nextStep:t,prevStep:s}},template:`
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
    `})};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
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
}`,...u.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
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
}`,...v.parameters?.docs?.source}}};const G=["Default","Bottom","Left","WithNavigation"];export{f as Bottom,u as Default,m as Left,v as WithNavigation,G as __namedExportsOrder,X as default};
