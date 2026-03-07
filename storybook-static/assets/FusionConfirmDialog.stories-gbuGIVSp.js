import{s as B,c as V,q as x,o as _,d as h,a as L,f as q,g as s,v as A,t as c,b as D,w as y,l as O,e as W,T as E,j as b,k as F,r as t}from"./iframe-DKpyqR87.js";import{F as a}from"./FusionButton-Dv3ry6EW.js";import{T as N}from"./trash-2-ZY17TnPX.js";import{c as S}from"./createLucideIcon-H_lQUGxs.js";import{C as P}from"./circle-check-big-Cw2vmiEi.js";import{_ as I}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./preload-helper-Ct5FWWRu.js";/**
 * @license lucide-vue-next v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const M=S("triangle-alert",[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",key:"wmoenq"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]]),U={class:"fu-confirm__body"},z={class:"fu-confirm__icon"},j={class:"fu-confirm__title"},Y={class:"fu-confirm__message"},K={class:"fu-confirm__footer"},k=B({__name:"FusionConfirmDialog",props:{isVisible:{type:Boolean},title:{},message:{},variant:{default:"confirm"},confirmText:{default:"Confirm"},cancelText:{default:"Cancel"},loading:{type:Boolean,default:!1}},emits:["cancel","confirm"],setup(e,{emit:n}){const o=e,i=n,g=()=>{o.loading||i("cancel")},p=()=>{o.loading||i("confirm")},v=()=>{o.loading||i("cancel")},T=V(()=>o.variant==="delete"?N:o.variant==="warning"?M:P),w=V(()=>o.variant==="delete"||o.variant==="warning"?"danger":"solid"),C=l=>{o.isVisible&&(o.loading||(l.key==="Enter"&&(l.preventDefault(),p()),l.key==="Escape"&&g()))};return x(()=>{window.addEventListener("keydown",C)}),_(()=>{window.removeEventListener("keydown",C)}),(l,R)=>(b(),h(E,{to:"body"},[e.isVisible?(b(),L("div",{key:0,class:"fu-modal__backdrop",onClick:W(v,["self"])},[s("div",{class:O(["fu-confirm",`fu-confirm--${e.variant}`])},[s("div",U,[s("div",z,[(b(),h(A(T.value)))]),s("h3",j,c(e.title),1),s("p",Y,c(e.message),1)]),s("div",K,[D(a,{variant:"outline",buttonWidth:"100%",disabled:e.loading,onClick:g},{default:y(()=>[F(c(e.cancelText),1)]),_:1},8,["disabled"]),D(a,{variant:w.value,buttonWidth:"100%",loading:e.loading,disabled:e.loading,onClick:p},{default:y(()=>[F(c(e.confirmText),1)]),_:1},8,["variant","loading","disabled"])])],2)])):q("",!0)]))}}),r=I(k,[["__scopeId","data-v-094e1d3b"]]);k.__docgenInfo={exportName:"default",displayName:"FusionConfirmDialog",description:"",tags:{},props:[{name:"isVisible",required:!0,type:{name:"boolean"}},{name:"title",required:!0,type:{name:"string"}},{name:"message",required:!0,type:{name:"string"}},{name:"variant",required:!1,type:{name:"union",elements:[{name:'"delete"'},{name:'"warning"'},{name:'"confirm"'}]},defaultValue:{func:!1,value:'"confirm"'}},{name:"confirmText",required:!1,type:{name:"string"},defaultValue:{func:!1,value:'"Confirm"'}},{name:"cancelText",required:!1,type:{name:"string"},defaultValue:{func:!1,value:'"Cancel"'}},{name:"loading",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}],events:[{name:"cancel"},{name:"confirm"}],sourceFiles:["/Users/xavier/Documents/Websites/Skkido/Fusion-binary-ui/src/components/modal/FusionConfirmDialog.vue"]};const ee={title:"Components/Confirm Dialog",component:r,tags:["autodocs"],argTypes:{variant:{control:"select",options:["confirm","warning","delete"],description:"Defines the intent and visual style of the dialog."},title:{control:"text",description:"Primary confirmation title shown to the user."},message:{control:"text",description:"Supporting message explaining the impact of the action."},confirmText:{control:"text",description:"Label for the primary confirm button."}},parameters:{docs:{description:{component:`
The **FusionConfirmDialog** component is a focused, action-first dialog
used for destructive or high-impact actions.

## When to use

Use this dialog when the user is about to:

- Delete data
- Lock or suspend an account
- Perform an irreversible action
- Confirm a risky operation

Do **not** use it for forms, long content, multi-step flows,
or informational messages.

---

## Design principles

- No header or close icon  
- Confirm button is visually emphasized  
- Variant communicates severity  
- Enter = confirm  
- Escape = cancel  

---

## Variants

| Variant | Usage |
|---------|--------|
| confirm | Neutral confirmation |
| warning | Risky but reversible |
| delete  | Destructive action |

---

## Loading state

When \`loading\` is true:

- Confirm button shows spinner
- Confirm button is disabled
- Cancel can optionally be disabled

Parent component controls loading state.
        `}}}},u={args:{variant:"confirm",title:"Confirm action",message:"Are you sure you want to continue?",confirmText:"Confirm"},render:e=>({components:{FusionConfirmDialog:r,FusionButton:a},setup(){const n=t(!1);return{args:e,isVisible:n,open:()=>n.value=!0,close:()=>n.value=!1}},template:`
      <FusionButton @click="open">
        Open Confirm Dialog
      </FusionButton>

      <FusionConfirmDialog
        v-bind="args"
        :isVisible="isVisible"
        @cancel="close"
        @confirm="close"
      />
    `})},m={args:{variant:"warning",title:"Lock account?",message:"The user will be logged out of all active sessions.",confirmText:"Lock account"},render:e=>({components:{FusionConfirmDialog:r,FusionButton:a},setup(){const n=t(!1);return{args:e,isVisible:n,open:()=>n.value=!0,close:()=>n.value=!1}},template:`
      <FusionButton variant="outline" @click="open">
        Open Warning Dialog
      </FusionButton>

      <FusionConfirmDialog
        v-bind="args"
        :isVisible="isVisible"
        @cancel="close"
        @confirm="close"
      />
    `})},f={args:{variant:"delete",title:"Delete user?",message:"This action cannot be undone.",confirmText:"Yes, delete"},render:e=>({components:{FusionConfirmDialog:r,FusionButton:a},setup(){const n=t(!1);return{args:e,isVisible:n,open:()=>n.value=!0,close:()=>n.value=!1}},template:`
      <FusionButton variant="danger" @click="open">
        Open Delete Dialog
      </FusionButton>

      <FusionConfirmDialog
        v-bind="args"
        :isVisible="isVisible"
        @cancel="close"
        @confirm="close"
      />
    `})},d={args:{variant:"delete",title:"Delete user?",message:"This action cannot be undone.",confirmText:"Delete"},render:e=>({components:{FusionConfirmDialog:r,FusionButton:a},setup(){const n=t(!1),o=t(!1);return{args:e,isVisible:n,loading:o,open:()=>n.value=!0,close:()=>{o.value||(n.value=!1)},handleConfirm:async()=>{o.value=!0,await new Promise(v=>setTimeout(v,2e3)),o.value=!1,n.value=!1}}},template:`
      <FusionButton variant="danger" @click="open">
        Open Async Delete Dialog
      </FusionButton>

      <FusionConfirmDialog
        v-bind="args"
        :isVisible="isVisible"
        :loading="loading"
        @cancel="close"
        @confirm="handleConfirm"
      />
    `})};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "confirm",
    title: "Confirm action",
    message: "Are you sure you want to continue?",
    confirmText: "Confirm"
  },
  render: args => ({
    components: {
      FusionConfirmDialog,
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
      <FusionButton @click="open">
        Open Confirm Dialog
      </FusionButton>

      <FusionConfirmDialog
        v-bind="args"
        :isVisible="isVisible"
        @cancel="close"
        @confirm="close"
      />
    \`
  })
}`,...u.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "warning",
    title: "Lock account?",
    message: "The user will be logged out of all active sessions.",
    confirmText: "Lock account"
  },
  render: args => ({
    components: {
      FusionConfirmDialog,
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
      <FusionButton variant="outline" @click="open">
        Open Warning Dialog
      </FusionButton>

      <FusionConfirmDialog
        v-bind="args"
        :isVisible="isVisible"
        @cancel="close"
        @confirm="close"
      />
    \`
  })
}`,...m.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "delete",
    title: "Delete user?",
    message: "This action cannot be undone.",
    confirmText: "Yes, delete"
  },
  render: args => ({
    components: {
      FusionConfirmDialog,
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
      <FusionButton variant="danger" @click="open">
        Open Delete Dialog
      </FusionButton>

      <FusionConfirmDialog
        v-bind="args"
        :isVisible="isVisible"
        @cancel="close"
        @confirm="close"
      />
    \`
  })
}`,...f.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "delete",
    title: "Delete user?",
    message: "This action cannot be undone.",
    confirmText: "Delete"
  },
  render: args => ({
    components: {
      FusionConfirmDialog,
      FusionButton
    },
    setup() {
      const isVisible = ref(false);
      const loading = ref(false);
      const open = () => isVisible.value = true;
      const close = () => {
        if (!loading.value) {
          isVisible.value = false;
        }
      };
      const handleConfirm = async () => {
        loading.value = true;

        // simulate API call
        await new Promise(resolve => setTimeout(resolve, 2000));
        loading.value = false;
        isVisible.value = false;
      };
      return {
        args,
        isVisible,
        loading,
        open,
        close,
        handleConfirm
      };
    },
    template: \`
      <FusionButton variant="danger" @click="open">
        Open Async Delete Dialog
      </FusionButton>

      <FusionConfirmDialog
        v-bind="args"
        :isVisible="isVisible"
        :loading="loading"
        @cancel="close"
        @confirm="handleConfirm"
      />
    \`
  })
}`,...d.parameters?.docs?.source}}};const ne=["Confirm","Warning","Delete","AsyncLoading"];export{d as AsyncLoading,u as Confirm,f as Delete,m as Warning,ne as __namedExportsOrder,ee as default};
