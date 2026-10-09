import{q as w,c as V,x,v as _,s as h,b as L,d as s,y as O,t as c,f as D,j as F,p as W,l as q,i as A,T as E,o as b,e as y,r as t}from"./iframe-D7VSQkaL.js";import{F as a}from"./FusionButton-uKQ8jdTT.js";import{T as N}from"./trash-Ddd_QVf6.js";import{T as S}from"./triangle-alert-CTpCSD1e.js";import{C as P}from"./circle-check-big-UM1BAd0c.js";import{_ as U}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./preload-helper-Ct5FWWRu.js";import"./createLucideIcon-DU4KFhpq.js";const I={class:"fu-confirm__body"},z={class:"fu-confirm__icon"},M={class:"fu-confirm__title"},Y={class:"fu-confirm__message"},j={class:"fu-confirm__footer"},T=w({__name:"FusionConfirmDialog",props:{isVisible:{type:Boolean},title:{},message:{},variant:{default:"confirm"},confirmText:{default:"Confirm"},cancelText:{default:"Cancel"},loading:{type:Boolean,default:!1}},emits:["cancel","confirm"],setup(e,{emit:n}){const i=e,o=n,g=()=>{i.loading||o("cancel")},p=()=>{i.loading||o("confirm")},v=()=>{i.loading||o("cancel")},k=V(()=>i.variant==="delete"?N:i.variant==="warning"?S:P),B=V(()=>i.variant==="delete"||i.variant==="warning"?"danger":"solid"),C=l=>{i.isVisible&&(i.loading||(l.key==="Enter"&&(l.preventDefault(),p()),l.key==="Escape"&&g()))};return x(()=>{window.addEventListener("keydown",C)}),_(()=>{window.removeEventListener("keydown",C)}),(l,K)=>(b(),h(E,{to:"body"},[e.isVisible?(b(),L("div",{key:0,class:"fu-modal__backdrop",onClick:q(v,["self"])},[s("div",{class:W(["fu-confirm",`fu-confirm--${e.variant}`])},[s("div",I,[s("div",z,[(b(),h(O(k.value)))]),s("h3",M,c(e.title),1),s("p",Y,c(e.message),1)]),s("div",j,[D(a,{variant:"outline",buttonWidth:"100%",disabled:e.loading,onClick:g},{default:F(()=>[y(c(e.cancelText),1)]),_:1},8,["disabled"]),D(a,{variant:B.value,buttonWidth:"100%",loading:e.loading,disabled:e.loading,onClick:p},{default:F(()=>[y(c(e.confirmText),1)]),_:1},8,["variant","loading","disabled"])])],2)])):A("",!0)]))}}),r=U(T,[["__scopeId","data-v-703fba8f"]]);T.__docgenInfo={exportName:"default",displayName:"FusionConfirmDialog",description:"",tags:{},props:[{name:"isVisible",required:!0,type:{name:"boolean"}},{name:"title",required:!0,type:{name:"string"}},{name:"message",required:!0,type:{name:"string"}},{name:"variant",required:!1,type:{name:"union",elements:[{name:'"delete"'},{name:'"warning"'},{name:'"confirm"'}]},defaultValue:{func:!1,value:'"confirm"'}},{name:"confirmText",required:!1,type:{name:"string"},defaultValue:{func:!1,value:'"Confirm"'}},{name:"cancelText",required:!1,type:{name:"string"},defaultValue:{func:!1,value:'"Cancel"'}},{name:"loading",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}],events:[{name:"cancel"},{name:"confirm"}],sourceFiles:["/Users/xavier/Documents/Websites/Skkido/Fusion-binary-ui/src/components/modal/FusionConfirmDialog.vue"]};const ee={title:"Fusion/Overlays/FusionConfirmDialog",component:r,tags:["autodocs"],argTypes:{variant:{control:"select",options:["confirm","warning","delete"],description:"Defines the intent and visual style of the dialog."},title:{control:"text",description:"Primary confirmation title shown to the user."},message:{control:"text",description:"Supporting message explaining the impact of the action."},confirmText:{control:"text",description:"Label for the primary confirm button."}},parameters:{docs:{description:{component:`
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
    `})},d={args:{variant:"delete",title:"Delete user?",message:"This action cannot be undone.",confirmText:"Delete"},render:e=>({components:{FusionConfirmDialog:r,FusionButton:a},setup(){const n=t(!1),i=t(!1);return{args:e,isVisible:n,loading:i,open:()=>n.value=!0,close:()=>{i.value||(n.value=!1)},handleConfirm:async()=>{i.value=!0,await new Promise(v=>setTimeout(v,2e3)),i.value=!1,n.value=!1}}},template:`
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
