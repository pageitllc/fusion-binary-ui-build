import{s as w,c as b,q as T,o as x,d as h,a as _,f as B,g as i,v as E,t as r,b as C,w as V,l as L,e as q,T as N,j as d,k as y,r as p}from"./iframe-4anGkjM3.js";import{F as s}from"./FusionButton-DDWoq9Vu.js";import{T as W}from"./trash-2-B6Y63mvG.js";import{c as O}from"./createLucideIcon-MAVkZFkt.js";import{C as M}from"./circle-check-big-Cj8Wpp5q.js";import{_ as S}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./preload-helper-Ct5FWWRu.js";/**
 * @license lucide-vue-next v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const U=O("triangle-alert",[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",key:"wmoenq"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]]),A={class:"fu-confirm__body"},I={class:"fu-confirm__icon"},Y={class:"fu-confirm__title"},z={class:"fu-confirm__message"},K={class:"fu-confirm__footer"},D=w({__name:"FusionConfirmDialog",props:{isVisible:{type:Boolean},title:{},message:{},variant:{default:"confirm"},confirmText:{default:"Confirm"},cancelText:{default:"Cancel"}},emits:["cancel","confirm"],setup(e,{emit:n}){const o=e,t=n,f=()=>t("cancel"),g=()=>t("confirm"),F=b(()=>o.variant==="delete"?W:o.variant==="warning"?U:M),k=b(()=>o.variant==="delete"||o.variant==="warning"?"danger":"solid"),v=a=>{o.isVisible&&(a.key==="Enter"&&(a.preventDefault(),g()),a.key==="Escape"&&f())};return T(()=>{window.addEventListener("keydown",v)}),x(()=>{window.removeEventListener("keydown",v)}),(a,j)=>(d(),h(N,{to:"body"},[e.isVisible?(d(),_("div",{key:0,class:"fu-modal__backdrop",onClick:q(f,["self"])},[i("div",{class:L(["fu-confirm",`fu-confirm--${e.variant}`])},[i("div",A,[i("div",I,[(d(),h(E(F.value)))]),i("h3",Y,r(e.title),1),i("p",z,r(e.message),1)]),i("div",K,[C(s,{variant:"outline",buttonWidth:"100%",onClick:f},{default:V(()=>[y(r(e.cancelText),1)]),_:1}),C(s,{variant:k.value,buttonWidth:"100%",onClick:g},{default:V(()=>[y(r(e.confirmText),1)]),_:1},8,["variant"])])],2)])):B("",!0)]))}}),m=S(D,[["__scopeId","data-v-ea4f0f2e"]]);D.__docgenInfo={exportName:"default",displayName:"FusionConfirmDialog",description:"",tags:{},props:[{name:"isVisible",required:!0,type:{name:"boolean"}},{name:"title",required:!0,type:{name:"string"}},{name:"message",required:!0,type:{name:"string"}},{name:"variant",required:!1,type:{name:"union",elements:[{name:'"delete"'},{name:'"warning"'},{name:'"confirm"'}]},defaultValue:{func:!1,value:'"confirm"'}},{name:"confirmText",required:!1,type:{name:"string"},defaultValue:{func:!1,value:'"Confirm"'}},{name:"cancelText",required:!1,type:{name:"string"},defaultValue:{func:!1,value:'"Cancel"'}}],events:[{name:"cancel"},{name:"confirm"}],sourceFiles:["/Users/xavier/Documents/Websites/Skkido/Fusion-binary-ui/src/components/modal/FusionConfirmDialog.vue"]};const Q={title:"Components/Confirm Dialog",component:m,tags:["autodocs"],argTypes:{variant:{control:"select",options:["confirm","warning","delete"],description:"Defines the intent and visual style of the dialog."},title:{control:"text",description:"Primary confirmation title shown to the user."},message:{control:"text",description:"Supporting message explaining the impact of the action."},confirmText:{control:"text",description:"Label for the primary confirm button."}},parameters:{docs:{description:{component:`
The **FusionConfirmDialog** component is a focused, action-first confirmation dialog
used for **destructive or high-impact actions**.

This component is intentionally stricter and simpler than \`FusionModal\`.

---

## When to use this dialog

Use **FusionConfirmDialog** when the user is about to:

- Delete data
- Lock or suspend an account
- Perform an irreversible action
- Confirm a risky operation

Do **not** use this component for:
- Forms
- Long content
- Multi-step flows
- Informational messages

---

## Key design decisions

- **No header or close icon**  
  Users must explicitly confirm or cancel the action.

- **Action-first layout**  
  The confirm button is visually emphasized.

- **Variant-based intent**  
  Visual styling communicates severity without extra copy.

- **Keyboard support**
  - \`Enter\` → confirms the action
  - \`Escape\` → cancels the dialog

---

## Variants

| Variant | Usage |
|------|------|
| \`confirm\` | Neutral confirmation |
| \`warning\` | Risky but reversible action |
| \`delete\` | Destructive / irreversible action |

---

## Events

- **@confirm**  
  Emitted when the user confirms the action  
  (button click or pressing Enter)

- **@cancel**  
  Emitted when the user cancels  
  (cancel button, backdrop click, or Escape key)

You should always close the dialog on both events.

---

## Example usage

\`\`\`vue
<FusionConfirmDialog
  :isVisible="showDialog"
  variant="delete"
  title="Delete user?"
  message="This action cannot be undone."
  confirmText="Yes, delete"
  @confirm="handleDelete"
  @cancel="showDialog = false"
/>
\`\`\`

This component ensures consistent, safe confirmation UX across the platform.
        `}}}},c={args:{variant:"confirm",title:"Confirm action",message:"Are you sure you want to continue?",confirmText:"Confirm"},render:e=>({components:{FusionConfirmDialog:m,FusionButton:s},setup(){const n=p(!1);return{args:e,isVisible:n,open:()=>n.value=!0,close:()=>n.value=!1}},template:`
      <FusionButton @click="open">
        Open Confirm Dialog
      </FusionButton>

      <FusionConfirmDialog
        v-bind="args"
        :isVisible="isVisible"
        @cancel="close"
        @confirm="close"
      />
    `})},l={args:{variant:"warning",title:"Lock account?",message:"The user will be logged out of all active sessions.",confirmText:"Lock account"},render:e=>({components:{FusionConfirmDialog:m,FusionButton:s},setup(){const n=p(!1);return{args:e,isVisible:n,open:()=>n.value=!0,close:()=>n.value=!1}},template:`
      <FusionButton variant="outline" @click="open">
        Open Warning Dialog
      </FusionButton>

      <FusionConfirmDialog
        v-bind="args"
        :isVisible="isVisible"
        @cancel="close"
        @confirm="close"
      />
    `})},u={args:{variant:"delete",title:"Delete user?",message:"This action cannot be undone.",confirmText:"Yes, delete"},render:e=>({components:{FusionConfirmDialog:m,FusionButton:s},setup(){const n=p(!1);return{args:e,isVisible:n,open:()=>n.value=!0,close:()=>n.value=!1}},template:`
      <FusionButton variant="danger" @click="open">
        Open Delete Dialog
      </FusionButton>

      <FusionConfirmDialog
        v-bind="args"
        :isVisible="isVisible"
        @cancel="close"
        @confirm="close"
      />
    `})};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
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
}`,...c.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
}`,...l.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
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
}`,...u.parameters?.docs?.source}}};const Z=["Confirm","Warning","Delete"];export{c as Confirm,u as Delete,l as Warning,Z as __namedExportsOrder,Q as default};
