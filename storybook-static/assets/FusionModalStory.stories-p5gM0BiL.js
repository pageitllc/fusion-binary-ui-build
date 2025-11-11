import{d as V,i as h,j as y,k as B,c as F,a as b,b as u,l as k,t as w,y as _,g,n as z,C,q as E,o as p,e as S,r as d}from"./iframe-o7SUGoga.js";import{F as x}from"./FusionActionButton-BJUvvBPP.js";import{F as m}from"./FusionButton-DEEa7fmw.js";import{X as T}from"./x-BhVw2qjo.js";import{_ as D}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./preload-helper-Ct5FWWRu.js";import"./createLucideIcon-D5kBsy5g.js";const O={class:"fu-modal__header"},N={class:"fu-modal__title"},q={class:"fu-modal__body"},L={key:0,class:"fu-modal__footer"},M=V({__name:"FusionModal",props:{isVisible:{type:Boolean},title:{},size:{default:"md"},showFooter:{type:Boolean,default:!0}},emits:["close","cancel","confirm"],setup(o,{emit:e}){const s=e,n=()=>s("close");function f(t){(t.key==="Escape"||t.key==="Esc")&&n()}return h(()=>{window.addEventListener("keydown",f)}),y(()=>{window.removeEventListener("keydown",f)}),(t,v)=>(p(),B(E,{to:"body"},[o.isVisible?(p(),F("div",{key:0,class:"fu-modal__backdrop",onClick:C(n,["self"])},[u("div",{class:z(["fu-modal",`fu-modal--${o.size}`])},[u("div",O,[u("h3",N,w(o.title),1),k(x,{text:" ",icon:_(T),class:"fu-modal__close",onClick:n,variant:"ghost",size:"sm"},null,8,["icon"])]),u("div",q,[g(t.$slots,"default",{},()=>[v[0]||(v[0]=S(" Default modal content. ",-1))],!0)]),o.showFooter?(p(),F("div",L,[g(t.$slots,"footer",{},void 0,!0)])):b("",!0)],2)])):b("",!0)]))}}),c=D(M,[["__scopeId","data-v-dbf14e0e"]]);M.__docgenInfo={exportName:"default",displayName:"FusionModal",description:"",tags:{},props:[{name:"isVisible",required:!0,type:{name:"boolean"}},{name:"title",required:!0,type:{name:"string"}},{name:"size",required:!1,type:{name:"union",elements:[{name:'"sm"'},{name:'"md"'},{name:'"lg"'}]},defaultValue:{func:!1,value:'"md"'}},{name:"showFooter",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"true"}}],events:[{name:"close"},{name:"cancel"},{name:"confirm"}],slots:[{name:"default"},{name:"footer"}],sourceFiles:["/Users/tommys/Documents/Skkido/Fusion-binary-ui/src/components/modal/FusionModal.vue"]};const j={title:"Components/Modal",component:c,tags:["autodocs"],argTypes:{size:{control:"select",options:["sm","md","lg"],description:"Sets the modal width (small, medium, or large)."},showFooter:{control:"boolean",description:"Toggles visibility of the footer section.",table:{defaultValue:{summary:"true"}}},title:{control:"text",description:"Sets the modal header title."}},parameters:{docs:{description:{component:`
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
        `}}}},i={args:{size:"sm",title:"Small Modal"},render:o=>({components:{FusionModal:c,FusionButton:m},setup(){const e=d(!1);return{args:o,isVisible:e,open:()=>e.value=!0,close:()=>e.value=!1}},template:`
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
    `})},l={args:{size:"md",title:"Edit Details"},render:o=>({components:{FusionModal:c,FusionButton:m},setup(){const e=d(!1);return{args:o,isVisible:e,open:()=>e.value=!0,close:()=>e.value=!1}},template:`
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
    `})},a={args:{size:"lg",title:"Delete Confirmation"},render:o=>({components:{FusionModal:c,FusionButton:m},setup(){const e=d(!1);return{args:o,isVisible:e,open:()=>e.value=!0,close:()=>e.value=!1}},template:`
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
    `})},r={args:{size:"md",showFooter:!1,title:"Read-Only Modal"},render:o=>({components:{FusionModal:c,FusionButton:m},setup(){const e=d(!1);return{args:o,isVisible:e,open:()=>e.value=!0,close:()=>e.value=!1}},template:`
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
    `})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
}`,...i.parameters?.docs?.source},description:{story:"Small Modal — Default Footer",...i.parameters?.docs?.description}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
}`,...l.parameters?.docs?.source},description:{story:"Medium Modal — Form Example",...l.parameters?.docs?.description}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...a.parameters?.docs?.source},description:{story:"Large Modal — Custom Footer (e.g., Delete Confirmation)",...a.parameters?.docs?.description}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...r.parameters?.docs?.source},description:{story:"Modal Without Footer",...r.parameters?.docs?.description}}};const K=["SmallModal","MediumFormModal","LargeModal","WithoutFooter"];export{a as LargeModal,l as MediumFormModal,i as SmallModal,r as WithoutFooter,K as __namedExportsOrder,j as default};
