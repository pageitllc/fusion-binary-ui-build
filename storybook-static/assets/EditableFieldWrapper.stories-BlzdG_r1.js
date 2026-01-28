import{F as O}from"./FusionListView-DSS-EXwE.js";import{s as I,r as d,C as $,q as j,o as A,a as m,x as f,g as E,d as R,f as b,n as q,T as J,F as z,i as W,j as r,t as k,u as M,l as H}from"./iframe-BeZJQ65s.js";import{_ as C}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{F as U}from"./FusionActionButton-DxSYCmZ-.js";import{S as K}from"./square-pen-BtmaaVMn.js";import{F as D}from"./FusionTextInput-IuYEpiOi.js";import{F as N}from"./FusionButton-DmtKrqn1.js";import"./FusionCheckbox-a53pfdqT.js";import"./preload-helper-Ct5FWWRu.js";import"./createLucideIcon-7ncFRN9y.js";const X={key:0,class:"efw-read"},G={key:1,class:"efw-edit"},P={class:"efw-footer"},Y={class:"efw-read"},Q={class:"efw-footer"},V=I({__name:"EditableFieldWrapper",props:{modelValue:{default:()=>({})},mode:{default:"inline"},teleportTo:{default:"body"},align:{default:"right"}},setup(t,{expose:p}){const n=t,e=d(!1),o=d({}),l=$({top:0,left:0}),i=d(null),a=d(null);function _(){document.dispatchEvent(new CustomEvent("close-all-editors")),o.value=structuredClone(n.modelValue),e.value=!0}function L(s){if(e.value){e.value=!1;return}document.dispatchEvent(new CustomEvent("close-all-editors")),o.value=structuredClone(n.modelValue),W(()=>{e.value=!0,W(()=>{const c=s?.currentTarget;if(!c||!a.value)return;const v=c.getBoundingClientRect(),T=a.value.offsetWidth;l.top=v.bottom+6+window.scrollY,n.align==="left"?l.left=v.left+window.scrollX:n.align==="center"?l.left=v.left+v.width/2-T/2+window.scrollX:l.left=v.right-T+window.scrollX})})}function u(){e.value=!1}function y(){e.value&&u()}function h(s){if(!e.value)return;const c=s.target;n.mode==="inline"&&i.value&&!i.value.contains(c)&&u(),n.mode==="teleport"&&a.value&&!a.value.contains(c)&&u()}function g(){u()}return j(()=>{document.addEventListener("close-all-editors",y),document.addEventListener("ew-close",u),document.addEventListener("click",h,!0),window.addEventListener("resize",g)}),A(()=>{document.removeEventListener("close-all-editors",y),document.removeEventListener("ew-close",u),document.removeEventListener("click",h,!0),window.removeEventListener("resize",g)}),p({startEditing:_,openTeleport:L,closeEditor:u}),(s,c)=>t.mode==="inline"?(r(),m("div",{key:0,class:"efw-wrapper",ref_key:"inlineRef",ref:i},[e.value?(r(),m("div",G,[f(s.$slots,"edit",{model:o.value},void 0,!0),E("div",P,[f(s.$slots,"actions",{},void 0,!0)])])):(r(),m("div",X,[f(s.$slots,"read",{},void 0,!0)]))],512)):(r(),m(z,{key:1},[E("div",Y,[f(s.$slots,"read",{},void 0,!0)]),(r(),R(J,{to:t.teleportTo},[e.value?(r(),m("div",{key:0,class:"efw-teleport-card",ref_key:"teleportRef",ref:a,style:q({top:l.top+"px",left:l.left+"px"})},[f(s.$slots,"edit",{model:o.value},void 0,!0),E("div",Q,[f(s.$slots,"actions",{},void 0,!0)])],4)):b("",!0)],8,["to"]))],64))}}),x=C(V,[["__scopeId","data-v-2b8a910d"]]);V.__docgenInfo={exportName:"default",displayName:"EditableFieldWrapper",description:"",tags:{},expose:[{name:"startEditing"},{name:"openTeleport"},{name:"closeEditor"}],props:[{name:"modelValue",required:!0,type:{name:"T"},defaultValue:{func:!1,value:"() => ({})"}},{name:"mode",required:!1,type:{name:"union",elements:[{name:'"inline"'},{name:'"teleport"'}]},defaultValue:{func:!1,value:'"inline"'}},{name:"teleportTo",required:!1,type:{name:"string"},defaultValue:{func:!1,value:'"body"'}},{name:"align",required:!1,type:{name:"union",elements:[{name:'"left"'},{name:'"center"'},{name:'"right"'}]},defaultValue:{func:!1,value:'"right"'}}],slots:[{name:"read"},{name:"edit",scoped:!0,bindings:[{name:"model",title:"binding"}]},{name:"actions"}],sourceFiles:["/Users/xavier/Documents/Websites/Skkido/Fusion-binary-ui/src/components/editWrapper/EditableFieldWrapper.vue"]};const Z={class:"edf-container"},ee={key:0,class:"edf-label"},te={class:"edf-text"},B=I({__name:"EditableDisplayField",props:{text:{},label:{default:""},variant:{default:"solid"}},emits:["edit"],setup(t,{emit:p}){const n=p,e=d(!1);function o(l){n("edit",l)}return(l,i)=>(r(),m("div",Z,[t.label?(r(),m("label",ee,k(t.label),1)):b("",!0),E("div",{class:H(["edf-wrapper",[`edf--${t.variant}`]]),onMouseenter:i[0]||(i[0]=a=>e.value=!0),onMouseleave:i[1]||(i[1]=a=>e.value=!1),ref:"container"},[E("span",te,k(t.text),1),e.value?(r(),R(U,{key:0,class:"edf-edit-btn",icon:M(K),size:"sm",variant:"subtle",onClick:o},null,8,["icon"])):b("",!0)],34)]))}}),S=C(B,[["__scopeId","data-v-1e56c520"]]);B.__docgenInfo={exportName:"default",displayName:"EditableDisplayField",description:"",tags:{},props:[{name:"text",required:!0,type:{name:"string"}},{name:"label",required:!1,type:{name:"string"},defaultValue:{func:!1,value:'""'}},{name:"variant",required:!1,type:{name:"union",elements:[{name:'"solid"'},{name:'"outline"'},{name:'"ghost"'}]},defaultValue:{func:!1,value:'"solid"'}}],events:[{name:"edit",type:{names:["MouseEvent"]}}],sourceFiles:["/Users/xavier/Documents/Websites/Skkido/Fusion-binary-ui/src/components/TextInput/EditableDisplayField.vue"]};const me={title:"Components/EditableFieldWrapper",component:x,tags:["autodocs"],parameters:{docs:{description:{component:`








EditableFieldWrapper manages the *visibility* and *positioning* of inline or teleport editors.  
It does **not** perform validation or saving.  
The parent is responsible for updating values and closing the editor.

### Closing the editor

To close the editor in any mode:

\`\`\`js
document.dispatchEvent(new CustomEvent("ew-close"));
\`\`\`

### Slots

- \`#read\`  
- \`#edit="{ model }"\`  
- \`#actions\`

### Editing Modes

1. **Inline** — expands inside the container  
2. **Teleport** — floating editor positioned near the clicked element  

---

# Inline Example

Demonstrates custom Save/Cancel actions.  
Save and Cancel both simply fire \`ew-close\`.
\`\`\`vue
<template>
  <EditableFieldWrapper
    ref="wrapperRef"
    v-model="fullName"
  >

    <template #read>
      <EditableDisplayField
        :text="fullName"
        variant="solid"
        @edit="wrapperRef.startEditing()"
      />
    </template>


    <template #edit="{ model }">
      <FusionTextInput  formWrapperWidth="100%" v-model="model" label="Full Name" />
    </template>


    <template #actions="{ model }">
      <div style="display:flex; justify-content:flex-end; gap:8px;">
        <FusionButton
          text="Cancel"
          variant="subtle"
          @click="closeEditor()"
        />

        <FusionButton
          text="Save"
          variant="solid"
          @click="save(model)"
        />
      </div>
    </template>

  </EditableFieldWrapper>
</template>

<script setup>
import { ref } from "vue";

import EditableFieldWrapper from "@/components/editWrapper/EditableFieldWrapper.vue";
import EditableDisplayField from "@/components/textInput/EditableDisplayField.vue";
import FusionTextInput from "@/components/textInput/FusionTextInput.vue";
import FusionButton from "@/components/button/FusionButton.vue";

const fullName = ref("John Carter");
const wrapperRef = ref(null);

// Update the field, then close editor
function save(v) {
  fullName.value = v;
  closeEditor();
}

// Only close editor — no validation
function closeEditor() {
  document.dispatchEvent(new CustomEvent("ew-close"));
}
<\/script>

\`\`\`
---

# Teleport Example

Shows usage inside a table.  
Editor is positioned using \`openTeleport(event)\`.
## Teleport Example

\`\`\`vue
<template>
  <FusionListView :columns="columns" :rows="rows" rowKey="id" showHeader>
    <template #cell-email="{ row }">

      <EditableFieldWrapper
        :ref="el => wrapperRefs[row.id] = el"
        mode="teleport"
        teleport-to="body"
        align="right"
        v-model="row.email"
      >


        <template #read>
          <EditableDisplayField
            :text="row.email"
            variant="outline"
            @edit="openEditor(row.id, $event)"
          />
        </template>

   
        <template #edit="{ model }">
          <FusionTextInput  formWrapperWidth="100%" v-model="model" label="Email" />
        </template>

     
        <template #actions="{ model }">
          <div style="display:flex; justify-content:flex-end; gap:8px;">
            <FusionButton text="Cancel" variant="subtle" @click="closeEditor()" />
            <FusionButton text="Save" variant="solid" @click="saveField(row.id, model)" />
          </div>
        </template>

      </EditableFieldWrapper>

    </template>
  </FusionListView>
</template>

<script setup>
import { ref } from "vue";
import FusionListView from "@/components/list/FusionListView.vue";
import EditableFieldWrapper from "@/components/editWrapper/EditableFieldWrapper.vue";
import EditableDisplayField from "@/components/textInput/EditableDisplayField.vue";
import FusionTextInput from "@/components/textInput/FusionTextInput.vue";
import FusionButton from "@/components/button/FusionButton.vue";

const rows = ref([
  { id: 1, email: "john@doe.com" },
  { id: 2, email: "jane@doe.com" },
  { id: 3, email: "sam@doe.com" }
]);

const columns = [
  { label: "Email", key: "email", width: "220px" }
];

const wrapperRefs = ref({});

// Open floating editor positioned using the click event
function openEditor(id, event) {
  wrapperRefs.value[id]?.openTeleport?.(event);
}

// Save new value, then close editor
function saveField(id, value) {
  const row = rows.value.find(r => r.id === id);
  if (row) row.email = value;

  closeEditor();
}

// Close with no validation
function closeEditor() {
  document.dispatchEvent(new CustomEvent("ew-close"));
}
<\/script>

\`\`\`

---
`}}}},w={render(){const t=d("John Carter"),p=d();function n(){document.dispatchEvent(new CustomEvent("ew-close"))}function e(o){t.value=o,n()}return{components:{EditableFieldWrapper:x,EditableDisplayField:S,FusionTextInput:D,FusionButton:N},setup(){return{fullName:t,wrapperRef:p,save:e,closeEditor:n}},template:`
      <div style="max-width: 380px; padding: 20px;">

        <EditableFieldWrapper ref="wrapperRef" v-model="fullName">

          <!-- READ VIEW -->
          <template #read>
            <EditableDisplayField
              :text="fullName"
              variant="solid"
              @edit="wrapperRef.startEditing()"
            />
          </template>

          <!-- EDIT VIEW -->
          <template #edit="{ model }">
            <FusionTextInput  formWrapperWidth="100%" v-model="model" label="Full Name" />
          </template>

          <!-- ACTION FOOTER -->
          <template #actions="{ model }">
            <div style="display:flex; justify-content:flex-end; gap:8px;">
              <FusionButton
                text="Cancel"
                variant="subtle"
                @click="closeEditor()"
              />

              <FusionButton
                text="Save"
                variant="solid"
                @click="save(model)"
              />
            </div>
          </template>

        </EditableFieldWrapper>

      </div>
      `}}},F={render(){const t=d([{id:1,name:"John Doe",email:"john@doe.com",role:"Developer",status:"Active"},{id:2,name:"Jane Doe",email:"jane@doe.com",role:"HR",status:"Inactive"},{id:3,name:"Sam Lee",email:"sam@doe.com",role:"Designer",status:"Active"}]),p=[{label:"Name",key:"name",width:"200px"},{label:"Email",key:"email",width:"220px"},{label:"Role",key:"role"},{label:"Status",key:"status"}];function n(){document.dispatchEvent(new CustomEvent("ew-close"))}function e(o,l){const i=t.value.find(a=>a.id===o);i&&(i.email=l),n()}return{components:{FusionListView:O,EditableFieldWrapper:x,EditableDisplayField:S,FusionTextInput:D,FusionButton:N},setup(){const o=d({});function l(i,a){o.value[i]?.openTeleport?.(a)}return{rows:t,columns:p,wrapperRefs:o,openEditor:l,saveField:e,closeEditor:n}},template:`
      <FusionListView 
        :columns="columns" 
        :rows="rows" 
        rowKey="id"
        showHeader
      >

        <template #cell-email="{ row }">

          <EditableFieldWrapper
            :ref="el => wrapperRefs[row.id] = el"
            mode="teleport"
            teleport-to="body"
            align="right"
            v-model="row.email"
          >

            <!-- READ -->
            <template #read>
              <EditableDisplayField
                :text="row.email"
                variant="outline"
                @edit="openEditor(row.id, $event)"
              />
            </template>

            <!-- EDIT -->
            <template #edit="{ model }">
              <FusionTextInput  formWrapperWidth="100%" v-model="model" label="Email" />
            </template>

            <!-- ACTION FOOTER -->
            <template #actions="{ model }">
              <div style="display:flex; justify-content:flex-end; gap:8px;">
                <FusionButton
                  text="Cancel"
                  variant="subtle"
                  @click="closeEditor()"
                />
                <FusionButton
                  text="Save"
                  variant="solid"
                  @click="saveField(row.id, model)"
                />
              </div>
            </template>

          </EditableFieldWrapper>

        </template>

      </FusionListView>
      `}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  render() {
    const fullName = ref("John Carter");
    const wrapperRef = ref();
    function closeEditor() {
      document.dispatchEvent(new CustomEvent("ew-close"));
    }
    function save(model: string) {
      fullName.value = model;
      closeEditor();
    }
    return {
      components: {
        EditableFieldWrapper,
        EditableDisplayField,
        FusionTextInput,
        FusionButton
      },
      setup() {
        return {
          fullName,
          wrapperRef,
          save,
          closeEditor
        };
      },
      template: \`
      <div style="max-width: 380px; padding: 20px;">

        <EditableFieldWrapper ref="wrapperRef" v-model="fullName">

          <!-- READ VIEW -->
          <template #read>
            <EditableDisplayField
              :text="fullName"
              variant="solid"
              @edit="wrapperRef.startEditing()"
            />
          </template>

          <!-- EDIT VIEW -->
          <template #edit="{ model }">
            <FusionTextInput  formWrapperWidth="100%" v-model="model" label="Full Name" />
          </template>

          <!-- ACTION FOOTER -->
          <template #actions="{ model }">
            <div style="display:flex; justify-content:flex-end; gap:8px;">
              <FusionButton
                text="Cancel"
                variant="subtle"
                @click="closeEditor()"
              />

              <FusionButton
                text="Save"
                variant="solid"
                @click="save(model)"
              />
            </div>
          </template>

        </EditableFieldWrapper>

      </div>
      \`
    };
  }
}`,...w.parameters?.docs?.source}}};F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  render() {
    const rows = ref([{
      id: 1,
      name: "John Doe",
      email: "john@doe.com",
      role: "Developer",
      status: "Active"
    }, {
      id: 2,
      name: "Jane Doe",
      email: "jane@doe.com",
      role: "HR",
      status: "Inactive"
    }, {
      id: 3,
      name: "Sam Lee",
      email: "sam@doe.com",
      role: "Designer",
      status: "Active"
    }]);
    const columns = [{
      label: "Name",
      key: "name",
      width: "200px"
    }, {
      label: "Email",
      key: "email",
      width: "220px"
    }, {
      label: "Role",
      key: "role"
    }, {
      label: "Status",
      key: "status"
    }];
    function closeEditor() {
      document.dispatchEvent(new CustomEvent("ew-close"));
    }
    function saveField(id: number, value: string) {
      const row = rows.value.find(x => x.id === id);
      if (row) row.email = value;
      closeEditor();
    }
    return {
      components: {
        FusionListView,
        EditableFieldWrapper,
        EditableDisplayField,
        FusionTextInput,
        FusionButton
      },
      setup() {
        const wrapperRefs = ref<Record<number, any>>({});
        function openEditor(id: number, event: MouseEvent) {
          wrapperRefs.value[id]?.openTeleport?.(event);
        }
        return {
          rows,
          columns,
          wrapperRefs,
          openEditor,
          saveField,
          closeEditor
        };
      },
      template: \`
      <FusionListView 
        :columns="columns" 
        :rows="rows" 
        rowKey="id"
        showHeader
      >

        <template #cell-email="{ row }">

          <EditableFieldWrapper
            :ref="el => wrapperRefs[row.id] = el"
            mode="teleport"
            teleport-to="body"
            align="right"
            v-model="row.email"
          >

            <!-- READ -->
            <template #read>
              <EditableDisplayField
                :text="row.email"
                variant="outline"
                @edit="openEditor(row.id, $event)"
              />
            </template>

            <!-- EDIT -->
            <template #edit="{ model }">
              <FusionTextInput  formWrapperWidth="100%" v-model="model" label="Email" />
            </template>

            <!-- ACTION FOOTER -->
            <template #actions="{ model }">
              <div style="display:flex; justify-content:flex-end; gap:8px;">
                <FusionButton
                  text="Cancel"
                  variant="subtle"
                  @click="closeEditor()"
                />
                <FusionButton
                  text="Save"
                  variant="solid"
                  @click="saveField(row.id, model)"
                />
              </div>
            </template>

          </EditableFieldWrapper>

        </template>

      </FusionListView>
      \`
    };
  }
}`,...F.parameters?.docs?.source}}};const ce=["InlineExample","TeleportInTable"];export{w as InlineExample,F as TeleportInTable,ce as __namedExportsOrder,me as default};
