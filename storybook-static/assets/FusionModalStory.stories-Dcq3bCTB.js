import{d as M,x as V,k as y,f as B,b as F,g as c,t as k,l as w,u as x,A as b,i as g,j as _,m as z,T as C,o as p,q as E,r as d}from"./iframe-BWX2pLPr.js";import{F as S}from"./FusionActionButton-Ca-SR80j.js";import{F as m}from"./FusionButton-rEE2o6aG.js";import{X as T}from"./x-AYRQd-8C.js";import{_ as D}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./preload-helper-Ct5FWWRu.js";import"./createLucideIcon-BuC7IBSO.js";const O={class:"fu-modal__header"},N={class:"fu-modal__title"},q={class:"fu-modal__body"},L={key:0,class:"fu-modal__footer"},h=M({__name:"FusionModal",props:{isVisible:{type:Boolean},title:{},size:{default:"md"},showFooter:{type:Boolean,default:!0},fixedHeight:{type:Boolean}},emits:["close","cancel","confirm"],setup(o,{emit:e}){const s=e,n=()=>s("close");function f(t){(t.key==="Escape"||t.key==="Esc")&&n()}return V(()=>{window.addEventListener("keydown",f)}),y(()=>{window.removeEventListener("keydown",f)}),(t,v)=>(p(),B(C,{to:"body"},[o.isVisible?(p(),F("div",{key:0,class:"fu-modal__backdrop",onClick:z(n,["self"])},[c("div",{class:_(["fu-modal",[`fu-modal--${o.size}`,{"fu-modal--fixed-height":o.fixedHeight}]])},[c("div",O,[c("h3",N,k(o.title),1),w(S,{text:" ",icon:x(T),class:"fu-modal__close",onClick:n,variant:"ghost",size:"sm"},null,8,["icon"])]),c("div",q,[b(t.$slots,"default",{},()=>[v[0]||(v[0]=E(" Default modal content. ",-1))],!0)]),o.showFooter?(p(),F("div",L,[b(t.$slots,"footer",{},void 0,!0)])):g("",!0)],2)])):g("",!0)]))}}),u=D(h,[["__scopeId","data-v-9804bf15"]]);h.__docgenInfo={exportName:"default",displayName:"FusionModal",description:"",tags:{},props:[{name:"isVisible",required:!0,type:{name:"boolean"}},{name:"title",required:!0,type:{name:"string"}},{name:"size",required:!1,type:{name:"union",elements:[{name:'"sm"'},{name:'"md"'},{name:'"lg"'}]},defaultValue:{func:!1,value:'"md"'}},{name:"showFooter",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"true"}},{name:"fixedHeight",required:!1,type:{name:"boolean"}}],events:[{name:"close"},{name:"cancel"},{name:"confirm"}],slots:[{name:"default"},{name:"footer"}],sourceFiles:["/Users/xavier/Documents/Websites/Skkido/Fusion-binary-ui/src/components/modal/FusionModal.vue"]};const R={title:"Components/Modal",component:u,tags:["autodocs"],argTypes:{size:{control:"select",options:["sm","md","lg"],description:"Sets the modal width (small, medium, or large)."},showFooter:{control:"boolean",description:"Toggles visibility of the footer section.",table:{defaultValue:{summary:"true"}}},title:{control:"text",description:"Sets the modal header title."}},parameters:{docs:{description:{component:`
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
        `}}}},i={args:{size:"sm",title:"Small Modal"},render:o=>({components:{FusionModal:u,FusionButton:m},setup(){const e=d(!1);return{args:o,isVisible:e,open:()=>e.value=!0,close:()=>e.value=!1}},template:`
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
    `})},l={args:{size:"md",title:"Edit Details"},render:o=>({components:{FusionModal:u,FusionButton:m},setup(){const e=d(!1);return{args:o,isVisible:e,open:()=>e.value=!0,close:()=>e.value=!1}},template:`
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
    `})},a={args:{size:"lg",title:"Delete Confirmation"},render:o=>({components:{FusionModal:u,FusionButton:m},setup(){const e=d(!1);return{args:o,isVisible:e,open:()=>e.value=!0,close:()=>e.value=!1}},template:`
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
    `})},r={args:{size:"md",showFooter:!1,title:"Read-Only Modal"},render:o=>({components:{FusionModal:u,FusionButton:m},setup(){const e=d(!1);return{args:o,isVisible:e,open:()=>e.value=!0,close:()=>e.value=!1}},template:`
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
}`,...r.parameters?.docs?.source},description:{story:"Modal Without Footer",...r.parameters?.docs?.description}}};const j=["SmallModal","MediumFormModal","LargeModal","WithoutFooter"];export{a as LargeModal,l as MediumFormModal,i as SmallModal,r as WithoutFooter,j as __namedExportsOrder,R as default};
