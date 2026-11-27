import{r}from"./iframe-DLJy-DHW.js";import{F as s}from"./FusionModal-DoAB7CeA.js";import{F as c}from"./FusionButton-CSaeGhtG.js";import"./preload-helper-Ct5FWWRu.js";import"./FusionActionButton-D4JlY0zq.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./x-GJVIuc3e.js";import"./createLucideIcon-CURt8gZv.js";const h={title:"Fusion/Overlays/FusionModal",component:s,tags:["autodocs"],argTypes:{size:{control:"select",options:["sm","md","lg","xl","2xl","full"],description:"Sets the modal's max-width: `sm` 400px, `md` 500px, `lg` 900px, `xl` 1152px, `2xl` 1400px, `full` the whole window (minus the backdrop padding). Every size shrinks to fit narrow screens.",table:{type:{summary:"'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'full'"},defaultValue:{summary:"md"}}},showFooter:{control:"boolean",description:"Toggles visibility of the footer section.",table:{defaultValue:{summary:"true"}}},title:{control:"text",description:"Sets the modal header title."}},parameters:{docs:{description:{component:`
The **FusionModal** component provides a reusable, flexible dialog window for confirmations, editing, or displaying information.
Test test
---

### Features
- Controlled visibility via \`isVisible\`
- Responsive sizes: \`sm\` (400px), \`md\` (500px), \`lg\` (900px), \`xl\` (1152px), \`2xl\` (1400px) and \`full\` (the whole window minus the backdrop padding). They all shrink to fit narrow screens and work with \`fixedHeight\`.
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
        `}}}},n={args:{size:"sm",title:"Small Modal"},render:o=>({components:{FusionModal:s,FusionButton:c},setup(){const e=r(!1);return{args:o,isVisible:e,open:()=>e.value=!0,close:()=>e.value=!1}},template:`
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
    `})},i={args:{size:"md",title:"Edit Details"},render:o=>({components:{FusionModal:s,FusionButton:c},setup(){const e=r(!1);return{args:o,isVisible:e,open:()=>e.value=!0,close:()=>e.value=!1}},template:`
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
    `})},t={args:{size:"lg",title:"Delete Confirmation"},render:o=>({components:{FusionModal:s,FusionButton:c},setup(){const e=r(!1);return{args:o,isVisible:e,open:()=>e.value=!0,close:()=>e.value=!1}},template:`
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
    `})},l={args:{size:"md",showFooter:!1,title:"Read-Only Modal"},render:o=>({components:{FusionModal:s,FusionButton:c},setup(){const e=r(!1);return{args:o,isVisible:e,open:()=>e.value=!0,close:()=>e.value=!1}},template:`
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
    `})},a={name:"Wide sizes (xl, 2xl, full)",parameters:{docs:{description:{story:"`xl` (1152px) fits a three-record comparison, `2xl` (1400px) wide tables, and `full` fills the window for previews. Pick a size to open it."}}},render:()=>({components:{FusionModal:s,FusionButton:c},setup(){const o=r(null);return{size:o,close:()=>o.value=null,records:["Acme Ltd","Acme Limited","ACME (UK)"],fields:[["Email","hello@acme.com","info@acme-limited.co.uk","contact@acme.uk"],["Website","https://www.acme.com","https://acme-limited.co.uk","https://acme.uk/en"],["Phone","+44 20 7946 0000","+44 20 7946 0101","—"],["Notes","Met at the London expo","Imported from the 2024 list","Referred by Jane Doe"]]}},template:`
      <div style="display: flex; gap: 8px">
        <FusionButton variant="outline" @click="size = 'xl'">Open xl</FusionButton>
        <FusionButton variant="outline" @click="size = '2xl'">Open 2xl</FusionButton>
        <FusionButton variant="outline" @click="size = 'full'">Open full</FusionButton>

        <FusionModal
          :isVisible="!!size"
          :size="size || 'xl'"
          :title="'Merge companies (' + size + ')'"
          @close="close"
        >
          <div style="display: grid; grid-template-columns: 120px repeat(3, 1fr); gap: 8px 16px; font-size: 14px">
            <div></div>
            <strong v-for="r in records" :key="r">{{ r }}</strong>
            <template v-for="row in fields" :key="row[0]">
              <span style="color: var(--fu-color-text-secondary)">{{ row[0] }}</span>
              <span v-for="(v, i) in row.slice(1)" :key="i">{{ v }}</span>
            </template>
          </div>
          <template #footer>
            <FusionButton size="md" variant="outline" @click="close">Cancel</FusionButton>
            <FusionButton size="md" variant="solid" @click="close">Merge</FusionButton>
          </template>
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
}`,...n.parameters?.docs?.source},description:{story:"Small Modal — Default Footer",...n.parameters?.docs?.description}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
}`,...i.parameters?.docs?.source},description:{story:"Medium Modal — Form Example",...i.parameters?.docs?.description}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...t.parameters?.docs?.source},description:{story:"Large Modal — Custom Footer (e.g., Delete Confirmation)",...t.parameters?.docs?.description}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
}`,...l.parameters?.docs?.source},description:{story:"Modal Without Footer",...l.parameters?.docs?.description}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  name: "Wide sizes (xl, 2xl, full)",
  parameters: {
    docs: {
      description: {
        story: "\`xl\` (1152px) fits a three-record comparison, \`2xl\` (1400px) wide tables, and \`full\` fills the window for previews. Pick a size to open it."
      }
    }
  },
  render: () => ({
    components: {
      FusionModal,
      FusionButton
    },
    setup() {
      const size = ref<"xl" | "2xl" | "full" | null>(null);
      const close = () => size.value = null;
      const records = ["Acme Ltd", "Acme Limited", "ACME (UK)"];
      const fields = [["Email", "hello@acme.com", "info@acme-limited.co.uk", "contact@acme.uk"], ["Website", "https://www.acme.com", "https://acme-limited.co.uk", "https://acme.uk/en"], ["Phone", "+44 20 7946 0000", "+44 20 7946 0101", "—"], ["Notes", "Met at the London expo", "Imported from the 2024 list", "Referred by Jane Doe"]];
      return {
        size,
        close,
        records,
        fields
      };
    },
    template: \`
      <div style="display: flex; gap: 8px">
        <FusionButton variant="outline" @click="size = 'xl'">Open xl</FusionButton>
        <FusionButton variant="outline" @click="size = '2xl'">Open 2xl</FusionButton>
        <FusionButton variant="outline" @click="size = 'full'">Open full</FusionButton>

        <FusionModal
          :isVisible="!!size"
          :size="size || 'xl'"
          :title="'Merge companies (' + size + ')'"
          @close="close"
        >
          <div style="display: grid; grid-template-columns: 120px repeat(3, 1fr); gap: 8px 16px; font-size: 14px">
            <div></div>
            <strong v-for="r in records" :key="r">{{ r }}</strong>
            <template v-for="row in fields" :key="row[0]">
              <span style="color: var(--fu-color-text-secondary)">{{ row[0] }}</span>
              <span v-for="(v, i) in row.slice(1)" :key="i">{{ v }}</span>
            </template>
          </div>
          <template #footer>
            <FusionButton size="md" variant="outline" @click="close">Cancel</FusionButton>
            <FusionButton size="md" variant="solid" @click="close">Merge</FusionButton>
          </template>
        </FusionModal>
      </div>
    \`
  })
}`,...a.parameters?.docs?.source},description:{story:"Wide sizes: xl, 2xl and full — side-by-side comparisons, wide tables, previews",...a.parameters?.docs?.description}}};const M=["SmallModal","MediumFormModal","LargeModal","WithoutFooter","WideSizes"];export{t as LargeModal,i as MediumFormModal,n as SmallModal,a as WideSizes,l as WithoutFooter,M as __namedExportsOrder,h as default};
