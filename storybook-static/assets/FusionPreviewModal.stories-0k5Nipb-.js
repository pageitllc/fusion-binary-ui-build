import{s as w,m as h,q as f,o as F,d as g,a as y,f as P,g as o,y as i,T as B,j as p,b as V,r as m}from"./iframe-4anGkjM3.js";import{F as l}from"./FusionButton-DDWoq9Vu.js";import{_}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./preload-helper-Ct5FWWRu.js";const M={key:0,class:"fu-preview-backdrop"},k={class:"fu-preview-modal"},x={class:"fu-preview-header"},S={class:"fu-preview-header__left"},C={class:"fu-preview-header__right"},T={class:"fu-preview-subheader"},E={class:"fu-preview-body"},v=w({__name:"FusionPreviewModal",props:{isVisible:{type:Boolean}},emits:["close"],setup(e,{emit:a}){const r=e,b=a,u=()=>b("close");h(()=>r.isVisible,s=>{document.body.style.overflow=s?"hidden":""},{immediate:!0});function c(s){s.key==="Escape"&&u()}return f(()=>{window.addEventListener("keydown",c)}),F(()=>{window.removeEventListener("keydown",c),document.body.style.overflow=""}),(s,N)=>(p(),g(B,{to:"body"},[e.isVisible?(p(),y("div",M,[o("div",k,[o("header",x,[o("div",S,[i(s.$slots,"header-left",{},void 0,!0)]),o("div",C,[i(s.$slots,"header-right",{},()=>[V(l,{variant:"subtle",size:"sm",text:"Close preview",onClick:u})],!0)])]),o("header",T,[i(s.$slots,"subheader",{},void 0,!0)]),o("main",E,[i(s.$slots,"default",{},void 0,!0)])])])):P("",!0)]))}}),d=_(v,[["__scopeId","data-v-fa20d496"]]);v.__docgenInfo={exportName:"default",displayName:"FusionPreviewModal",description:"",tags:{},props:[{name:"isVisible",required:!0,type:{name:"boolean"}}],events:[{name:"close"}],slots:[{name:"header-left"},{name:"header-right"},{name:"subheader"},{name:"default"}],sourceFiles:["/Users/xavier/Documents/Websites/Skkido/Fusion-binary-ui/src/components/modal/FusionPreviewModal.vue"]};const j={title:"Components/PreviewModal",component:d,tags:["autodocs"],argTypes:{isVisible:{control:"boolean",description:"Controls visibility of the preview modal."}},parameters:{docs:{description:{component:`
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
  `}}}},t={render:()=>({components:{FusionPreviewModal:d,FusionButton:l},setup(){const e=m(!1);return{isVisible:e,open:()=>e.value=!0,close:()=>e.value=!1}},template:`
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
    `})},n={render:()=>({components:{FusionPreviewModal:d,FusionButton:l},setup(){const e=m(!1);return{isVisible:e,open:()=>e.value=!0,close:()=>e.value=!1}},template:`
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
}`,...n.parameters?.docs?.source}}};const A=["BasicPreview","FormPreview"];export{t as BasicPreview,n as FormPreview,A as __namedExportsOrder,j as default};
