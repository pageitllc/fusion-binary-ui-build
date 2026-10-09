import{r as a}from"./iframe-D7VSQkaL.js";import{F as l}from"./FusionModal-DD1PFXbo.js";import{F as r}from"./FusionButton-uKQ8jdTT.js";import"./preload-helper-Ct5FWWRu.js";import"./FusionActionButton-BT3uiOIB.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./x-DubITC5T.js";import"./createLucideIcon-DU4KFhpq.js";const M={title:"Fusion/Overlays/FusionModal",component:l,tags:["autodocs"],argTypes:{size:{control:"select",options:["sm","md","lg"],description:"Sets the modal width (small, medium, or large)."},showFooter:{control:"boolean",description:"Toggles visibility of the footer section.",table:{defaultValue:{summary:"true"}}},title:{control:"text",description:"Sets the modal header title."}},parameters:{docs:{description:{component:`
The **FusionModal** component provides a reusable, flexible dialog window for confirmations, editing, or displaying information.
Test test
---

### Features
- Controlled visibility via \`isVisible\`
- Three responsive sizes: \`sm\`, \`md\`, \`lg\`
- Optional footer via the \`showFooter\` prop
- Emits \`close\`, \`cancel\`, and \`confirm\` events
- Custom header and footer slots for advanced layouts

---

### Example Usage

\`\`\`vue
<template>
  <FusionButton @click="open">Edit Profile</FusionButton>

  <FusionModal
    :isVisible="isVisible"
    title="Edit Profile"
    size="lg"
    @close="close"
  >
    <p>This modal allows users to update their information.</p>

    <template #footer>
      <FusionButton variant="outline" @click="close">Cancel</FusionButton>
      <FusionButton variant="solid" @click="save">Save</FusionButton>
    </template>
  </FusionModal>
</template>
<script setup>
import { ref } from "vue"

// Control visibility of the modal
const isVisible = ref(false)

// Open and close handlers
const open = () => {
  isVisible.value = true
}

const close = () => {
  isVisible.value = false
}


<\/script>


\`\`\`
        `}}}},n={args:{size:"sm",title:"Small Modal"},render:o=>({components:{FusionModal:l,FusionButton:r},setup(){const e=a(!1);return{args:o,isVisible:e,open:()=>e.value=!0,close:()=>e.value=!1}},template:`
      <div>
        <FusionButton @click="open">Open Small Modal</FusionButton>
        <FusionModal
          v-bind="args"
          :isVisible="isVisible"
          @close="close"
          @cancel="close"
          @confirm="close"
        >
          <p>This modal shows the default Cancel + Save footer buttons.</p>
        </FusionModal>
      </div>
    `})},s={args:{size:"md",title:"Edit Details"},render:o=>({components:{FusionModal:l,FusionButton:r},setup(){const e=a(!1);return{args:o,isVisible:e,open:()=>e.value=!0,close:()=>e.value=!1}},template:`
      <div>
        <FusionButton variant="subtle" @click="open">Open Form Modal</FusionButton>
        <FusionModal
          v-bind="args"
          :isVisible="isVisible"
          @close="close"
          @cancel="close"
          @confirm="close"
        >
          <p><strong>Update your profile information:</strong></p>
          <div class="flex flex--column flex--gap-md">
            <label>Name:</label>
            <input type="text" placeholder="Enter name" class="fu-input"/>
            <label>Email:</label>
            <input type="email" placeholder="Enter email" class="fu-input"/>
          </div>
        </FusionModal>
      </div>
    `})},i={args:{size:"lg",title:"Delete Confirmation"},render:o=>({components:{FusionModal:l,FusionButton:r},setup(){const e=a(!1);return{args:o,isVisible:e,open:()=>e.value=!0,close:()=>e.value=!1}},template:`
      <div>
        <FusionButton variant="danger" @click="open">Open Delete Modal</FusionButton>
        <FusionModal
          v-bind="args"
          :isVisible="isVisible"
          @close="close"
        >
          <p>
            Are you sure you want to delete this record? This action cannot be undone.
          </p>

          <template #footer>
            <FusionButton size="md" variant="outline" @click="close">Cancel</FusionButton>
            <FusionButton size="md" variant="danger" @click="close">Delete</FusionButton>
          </template>
        </FusionModal>
      </div>
    `})},t={args:{size:"md",showFooter:!1,title:"Read-Only Modal"},render:o=>({components:{FusionModal:l,FusionButton:r},setup(){const e=a(!1);return{args:o,isVisible:e,open:()=>e.value=!0,close:()=>e.value=!1}},template:`
      <div>
        <FusionButton variant="solid" @click="open">Open Modal (No Footer)</FusionButton>
        <FusionModal
          v-bind="args"
          :isVisible="isVisible"
          @close="close"
        >
          <p>This modal hides the footer entirely — useful for previews or read-only views.</p>
        </FusionModal>
      </div>
    `})};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    size: "sm",
    title: "Small Modal"
  },
  render: args => ({
    components: {
      FusionModal,
      FusionButton
    },
    setup() {
      const isVisible = ref(false);
      const open = () => isVisible.value = true;
      const close = () => isVisible.value = false;
      return {
        args,
        isVisible,
        open,
        close
      };
    },
    template: \`
      <div>
        <FusionButton @click="open">Open Small Modal</FusionButton>
        <FusionModal
          v-bind="args"
          :isVisible="isVisible"
          @close="close"
          @cancel="close"
          @confirm="close"
        >
          <p>This modal shows the default Cancel + Save footer buttons.</p>
        </FusionModal>
      </div>
    \`
  })
}`,...n.parameters?.docs?.source},description:{story:"Small Modal — Default Footer",...n.parameters?.docs?.description}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    size: "md",
    title: "Edit Details"
  },
  render: args => ({
    components: {
      FusionModal,
      FusionButton
    },
    setup() {
      const isVisible = ref(false);
      const open = () => isVisible.value = true;
      const close = () => isVisible.value = false;
      return {
        args,
        isVisible,
        open,
        close
      };
    },
    template: \`
      <div>
        <FusionButton variant="subtle" @click="open">Open Form Modal</FusionButton>
        <FusionModal
          v-bind="args"
          :isVisible="isVisible"
          @close="close"
          @cancel="close"
          @confirm="close"
        >
          <p><strong>Update your profile information:</strong></p>
          <div class="flex flex--column flex--gap-md">
            <label>Name:</label>
            <input type="text" placeholder="Enter name" class="fu-input"/>
            <label>Email:</label>
            <input type="email" placeholder="Enter email" class="fu-input"/>
          </div>
        </FusionModal>
      </div>
    \`
  })
}`,...s.parameters?.docs?.source},description:{story:"Medium Modal — Form Example",...s.parameters?.docs?.description}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    size: "lg",
    title: "Delete Confirmation"
  },
  render: args => ({
    components: {
      FusionModal,
      FusionButton
    },
    setup() {
      const isVisible = ref(false);
      const open = () => isVisible.value = true;
      const close = () => isVisible.value = false;
      return {
        args,
        isVisible,
        open,
        close
      };
    },
    template: \`
      <div>
        <FusionButton variant="danger" @click="open">Open Delete Modal</FusionButton>
        <FusionModal
          v-bind="args"
          :isVisible="isVisible"
          @close="close"
        >
          <p>
            Are you sure you want to delete this record? This action cannot be undone.
          </p>

          <template #footer>
            <FusionButton size="md" variant="outline" @click="close">Cancel</FusionButton>
            <FusionButton size="md" variant="danger" @click="close">Delete</FusionButton>
          </template>
        </FusionModal>
      </div>
    \`
  })
}`,...i.parameters?.docs?.source},description:{story:"Large Modal — Custom Footer (e.g., Delete Confirmation)",...i.parameters?.docs?.description}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    size: "md",
    showFooter: false,
    title: "Read-Only Modal"
  },
  render: args => ({
    components: {
      FusionModal,
      FusionButton
    },
    setup() {
      const isVisible = ref(false);
      const open = () => isVisible.value = true;
      const close = () => isVisible.value = false;
      return {
        args,
        isVisible,
        open,
        close
      };
    },
    template: \`
      <div>
        <FusionButton variant="solid" @click="open">Open Modal (No Footer)</FusionButton>
        <FusionModal
          v-bind="args"
          :isVisible="isVisible"
          @close="close"
        >
          <p>This modal hides the footer entirely — useful for previews or read-only views.</p>
        </FusionModal>
      </div>
    \`
  })
}`,...t.parameters?.docs?.source},description:{story:"Modal Without Footer",...t.parameters?.docs?.description}}};const V=["SmallModal","MediumFormModal","LargeModal","WithoutFooter"];export{i as LargeModal,s as MediumFormModal,n as SmallModal,t as WithoutFooter,V as __namedExportsOrder,M as default};
