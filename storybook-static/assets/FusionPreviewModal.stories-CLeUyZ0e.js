import{d as h,s as f,x as F,k as g,f as y,b as P,g as o,A as i,i as B,T as V,o as m,l as k,r as v}from"./iframe-BWX2pLPr.js";import{F as r}from"./FusionButton-rEE2o6aG.js";import{_ as M}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./preload-helper-Ct5FWWRu.js";const _={key:0,class:"fu-preview-backdrop"},x={class:"fu-preview-modal"},S={class:"fu-preview-header"},C={class:"fu-preview-header__left"},T={class:"fu-preview-header__right"},E={class:"fu-preview-body"},b=h({__name:"FusionPreviewModal",props:{isVisible:{type:Boolean}},emits:["close"],setup(e,{emit:a}){const l=e,w=a,d=()=>w("close");f(()=>l.isVisible,s=>{document.body.style.overflow=s?"hidden":""},{immediate:!0});function c(s){s.key==="Escape"&&d()}return F(()=>{window.addEventListener("keydown",c)}),g(()=>{window.removeEventListener("keydown",c),document.body.style.overflow=""}),(s,p)=>(m(),y(V,{to:"body"},[e.isVisible?(m(),P("div",_,[o("div",x,[o("header",S,[o("div",C,[i(s.$slots,"header-left",{},void 0,!0)]),o("div",T,[i(s.$slots,"header-right",{},()=>[k(r,{variant:"subtle",size:"sm",text:"Close preview",onClick:d})],!0)])]),i(s.$slots,"subheader",{},()=>[p[0]||(p[0]=o("header",{class:"fu-preview-subheader"},null,-1))],!0),o("main",E,[i(s.$slots,"default",{},void 0,!0)])])])):B("",!0)]))}}),u=M(b,[["__scopeId","data-v-d53784c5"]]);b.__docgenInfo={exportName:"default",displayName:"FusionPreviewModal",description:"",tags:{},props:[{name:"isVisible",required:!0,type:{name:"boolean"}}],events:[{name:"close"}],slots:[{name:"header-left"},{name:"header-right"},{name:"subheader"},{name:"default"}],sourceFiles:["/Users/xavier/Documents/Websites/Skkido/Fusion-binary-ui/src/components/modal/FusionPreviewModal.vue"]};const A={title:"Components/PreviewModal",component:u,tags:["autodocs"],argTypes:{isVisible:{control:"boolean",description:"Controls visibility of the preview modal."}},parameters:{docs:{description:{component:`
The **FusionPreviewModal** is a full-screen, preview-only modal designed for
client-facing previews such as **forms, proposals, scheduling pages, and documents**.

Unlike standard modals, this component:
- Always occupies the full viewport
- Locks background scrolling
- Uses two fixed headers (primary + secondary)
- Allows only the body area to scroll
- Is optimized for read-only or simulated client interaction

---

### Features
- Full-screen preview overlay
- Background scroll lock
- Two static headers
- Scrollable body area
- Slot-based header composition
- Default close action using \`FusionButton\`
- Emits only \`close\`

---

### Example Usage

\`\`\`vue
<template>
  <FusionButton variant="solid" @click="open">
    Open Preview
  </FusionButton>

  <FusionPreviewModal
    :isVisible="isPreviewVisible"
    @close="close"
  >
    <!-- Primary header (left side) -->
    <template #header-left>
      <strong>Client Preview</strong>
    </template>

    <!-- Primary header (right side) -->
    <template #header-right>
      <FusionButton variant="subtle" @click="close">
        Exit Preview
      </FusionButton>
    </template>

    <!-- Secondary header -->
    <template #subheader>
      Page 1 of 4 · About
    </template>

    <!-- Scrollable body -->
    <div style="padding: 2rem; max-width: 720px; margin: 0 auto;">
      <h1>Welcome to Skkido</h1>
      <p>
        This is a full-screen preview simulating how a client will experience
        a form, proposal, or scheduling page.
      </p>

      <p>
        Only this content area scrolls. Headers remain fixed.
      </p>
    </div>
  </FusionPreviewModal>
</template>

<script setup>
import { ref } from "vue"
import FusionPreviewModal from "./FusionPreviewModal.vue"
import FusionButton from "../button/FusionButton.vue"

// Control visibility of the preview modal
const isPreviewVisible = ref(false)

// Open preview
const open = () => {
  isPreviewVisible.value = true
}

// Close preview
const close = () => {
  isPreviewVisible.value = false
}
<\/script>
\`\`\`
  `}}}},t={render:()=>({components:{FusionPreviewModal:u,FusionButton:r},setup(){const e=v(!1);return{isVisible:e,open:()=>e.value=!0,close:()=>e.value=!1}},template:`
      <div>
        <FusionButton variant="solid" @click="open">
          Open Preview
        </FusionButton>

        <FusionPreviewModal :isVisible="isVisible" @close="close">
          <template #header-left>
            <strong>Preview Mode</strong>
          </template>

          <template #subheader>
            Static preview header
          </template>

          <div style="padding: 2rem">
            <p>This is a basic preview body.</p>
            <p>The content here is scrollable.</p>
          </div>
        </FusionPreviewModal>
      </div>
    `})},n={render:()=>({components:{FusionPreviewModal:u,FusionButton:r},setup(){const e=v(!1);return{isVisible:e,open:()=>e.value=!0,close:()=>e.value=!1}},template:`
      <div>
        <FusionButton variant="subtle" @click="open">
          Preview Lead Form
        </FusionButton>

        <FusionPreviewModal :isVisible="isVisible" @close="close">
          <template #header-left>
            <strong>Lead Capture Preview</strong>
          </template>

          <template #subheader>
            Public form · Nothing will be submitted
          </template>

          <div style="padding: 2rem; max-width: 640px; margin: 0 auto;">
            <h2>Tell us about your project</h2>

            <label>Name</label>
            <input class="fu-input" placeholder="Your name" />

            <label>Email</label>
            <input class="fu-input" placeholder="you@email.com" />

            <label>Message</label>
            <textarea class="fu-input" rows="4"></textarea>

            <FusionButton variant="solid" style="margin-top: 1rem;">
              Submit (Preview)
            </FusionButton>
          </div>
        </FusionPreviewModal>
      </div>
    `})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      FusionPreviewModal,
      FusionButton
    },
    setup() {
      const isVisible = ref(false);
      const open = () => isVisible.value = true;
      const close = () => isVisible.value = false;
      return {
        isVisible,
        open,
        close
      };
    },
    template: \`
      <div>
        <FusionButton variant="solid" @click="open">
          Open Preview
        </FusionButton>

        <FusionPreviewModal :isVisible="isVisible" @close="close">
          <template #header-left>
            <strong>Preview Mode</strong>
          </template>

          <template #subheader>
            Static preview header
          </template>

          <div style="padding: 2rem">
            <p>This is a basic preview body.</p>
            <p>The content here is scrollable.</p>
          </div>
        </FusionPreviewModal>
      </div>
    \`
  })
}`,...t.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      FusionPreviewModal,
      FusionButton
    },
    setup() {
      const isVisible = ref(false);
      const open = () => isVisible.value = true;
      const close = () => isVisible.value = false;
      return {
        isVisible,
        open,
        close
      };
    },
    template: \`
      <div>
        <FusionButton variant="subtle" @click="open">
          Preview Lead Form
        </FusionButton>

        <FusionPreviewModal :isVisible="isVisible" @close="close">
          <template #header-left>
            <strong>Lead Capture Preview</strong>
          </template>

          <template #subheader>
            Public form · Nothing will be submitted
          </template>

          <div style="padding: 2rem; max-width: 640px; margin: 0 auto;">
            <h2>Tell us about your project</h2>

            <label>Name</label>
            <input class="fu-input" placeholder="Your name" />

            <label>Email</label>
            <input class="fu-input" placeholder="you@email.com" />

            <label>Message</label>
            <textarea class="fu-input" rows="4"></textarea>

            <FusionButton variant="solid" style="margin-top: 1rem;">
              Submit (Preview)
            </FusionButton>
          </div>
        </FusionPreviewModal>
      </div>
    \`
  })
}`,...n.parameters?.docs?.source}}};const $=["BasicPreview","FormPreview"];export{t as BasicPreview,n as FormPreview,$ as __namedExportsOrder,A as default};
