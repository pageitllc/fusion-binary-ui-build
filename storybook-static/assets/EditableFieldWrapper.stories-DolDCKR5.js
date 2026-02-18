import{F as B}from"./FusionListView-DNIi_Iaq.js";import{s as M,r,C as q,q as P,o as z,a as f,y as w,g as E,d as V,f as D,n as H,T as K,F as U,i as S,L as X,j as m,t as I,u as J,l as Y}from"./iframe-4anGkjM3.js";import{_ as A}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{F as G}from"./FusionActionButton-DOSunp5G.js";import{S as Q}from"./square-pen-BnMzxydQ.js";import{F as L}from"./FusionTextInput-B7zbcKHf.js";import{F as W}from"./FusionButton-DDWoq9Vu.js";import{F as N}from"./FusionAutocomplete-o9jjGkFG.js";import"./FusionCheckbox-E0ZNdIAP.js";import"./preload-helper-Ct5FWWRu.js";import"./createLucideIcon-MAVkZFkt.js";const Z={key:0,class:"efw-read"},ee={key:1,class:"efw-edit"},te={class:"efw-footer"},ne={class:"efw-read"},le={class:"efw-footer"},$=M({__name:"EditableFieldWrapper",props:{modelValue:{default:()=>({})},mode:{default:"inline"},teleportTo:{default:"body"},align:{default:"right"},disableOutsideClose:{type:Boolean,default:!1}},setup(e,{expose:u}){const n=e,t=r(!1),l=r(null),o=q({top:0,left:0}),s=r(null),a=r(null);function p(i){if(i===null||typeof i!="object")return i;const d=X(i);return Array.isArray(d)?[...d]:d.constructor===Object?{...d}:d}function b(){document.dispatchEvent(new CustomEvent("close-all-editors")),l.value=p(n.modelValue),t.value=!0}function O(i){if(t.value){c();return}document.dispatchEvent(new CustomEvent("close-all-editors")),l.value=p(n.modelValue),S(()=>{t.value=!0,S(()=>{const d=i?.currentTarget;if(!d||!a.value)return;const F=d.getBoundingClientRect(),C=a.value.offsetWidth;o.top=F.bottom+6+window.scrollY,n.align==="left"?o.left=F.left+window.scrollX:n.align==="center"?o.left=F.left+F.width/2-C/2+window.scrollX:o.left=F.right-C+window.scrollX})})}function c(){t.value=!1}function R(){t.value&&c()}function _(i){if(!t.value||n.disableOutsideClose)return;const d=i.target;d.closest(".fu-status-dropdown, .fu-status-dropdown__menu, .fu-autocomplete-dropdown, .fu-select-dropdown, .fu-datepicker-dropdown")||(n.mode==="inline"?s.value&&!s.value.contains(d)&&c():a.value&&!a.value.contains(d)&&c())}return P(()=>{document.addEventListener("close-all-editors",R),document.addEventListener("ew-close",c),document.addEventListener("pointerdown",_),window.addEventListener("resize",c)}),z(()=>{document.removeEventListener("close-all-editors",R),document.removeEventListener("ew-close",c),document.removeEventListener("pointerdown",_),window.removeEventListener("resize",c)}),u({startEditing:b,openTeleport:O,closeEditor:c}),(i,d)=>e.mode==="inline"?(m(),f("div",{key:0,class:"efw-wrapper",ref_key:"inlineRef",ref:s},[t.value?(m(),f("div",ee,[w(i.$slots,"edit",{model:l.value},void 0,!0),E("div",te,[w(i.$slots,"actions",{},void 0,!0)])])):(m(),f("div",Z,[w(i.$slots,"read",{},void 0,!0)]))],512)):(m(),f(U,{key:1},[E("div",ne,[w(i.$slots,"read",{},void 0,!0)]),(m(),V(K,{to:e.teleportTo},[t.value?(m(),f("div",{key:0,class:"efw-teleport-card",ref_key:"teleportRef",ref:a,style:H({top:o.top+"px",left:o.left+"px"})},[w(i.$slots,"edit",{model:l.value},void 0,!0),E("div",le,[w(i.$slots,"actions",{},void 0,!0)])],4)):D("",!0)],8,["to"]))],64))}}),y=A($,[["__scopeId","data-v-90094e16"]]);$.__docgenInfo={exportName:"default",displayName:"EditableFieldWrapper",description:"",tags:{},expose:[{name:"startEditing"},{name:"openTeleport"},{name:"closeEditor"}],props:[{name:"modelValue",required:!0,type:{name:"T"},defaultValue:{func:!1,value:"() => ({})"}},{name:"mode",required:!1,type:{name:"union",elements:[{name:'"inline"'},{name:'"teleport"'}]},defaultValue:{func:!1,value:'"inline"'}},{name:"teleportTo",required:!1,type:{name:"string"},defaultValue:{func:!1,value:'"body"'}},{name:"align",required:!1,type:{name:"union",elements:[{name:'"left"'},{name:'"center"'},{name:'"right"'}]},defaultValue:{func:!1,value:'"right"'}},{name:"disableOutsideClose",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}],slots:[{name:"read"},{name:"edit",scoped:!0,bindings:[{name:"model",title:"binding"}]},{name:"actions"}],sourceFiles:["/Users/xavier/Documents/Websites/Skkido/Fusion-binary-ui/src/components/editWrapper/EditableFieldWrapper.vue"]};const oe={class:"edf-container"},ae={key:0,class:"edf-label"},ie={class:"edf-text"},j=M({__name:"EditableDisplayField",props:{text:{},label:{default:""},variant:{default:"solid"}},emits:["edit"],setup(e,{emit:u}){const n=u,t=r(!1);function l(o){n("edit",o)}return(o,s)=>(m(),f("div",oe,[e.label?(m(),f("label",ae,I(e.label),1)):D("",!0),E("div",{class:Y(["edf-wrapper",[`edf--${e.variant}`]]),onMouseenter:s[0]||(s[0]=a=>t.value=!0),onMouseleave:s[1]||(s[1]=a=>t.value=!1),ref:"container"},[E("span",ie,I(e.text),1),t.value?(m(),V(G,{key:0,class:"edf-edit-btn",icon:J(Q),size:"sm",variant:"subtle",onClick:l},null,8,["icon"])):D("",!0)],34)]))}}),k=A(j,[["__scopeId","data-v-1e56c520"]]);j.__docgenInfo={exportName:"default",displayName:"EditableDisplayField",description:"",tags:{},props:[{name:"text",required:!0,type:{name:"string"}},{name:"label",required:!1,type:{name:"string"},defaultValue:{func:!1,value:'""'}},{name:"variant",required:!1,type:{name:"union",elements:[{name:'"solid"'},{name:'"outline"'},{name:'"ghost"'}]},defaultValue:{func:!1,value:'"solid"'}}],events:[{name:"edit",type:{names:["MouseEvent"]}}],sourceFiles:["/Users/xavier/Documents/Websites/Skkido/Fusion-binary-ui/src/components/TextInput/EditableDisplayField.vue"]};const Fe={title:"Components/EditableFieldWrapper",component:y,tags:["autodocs"],parameters:{docs:{description:{component:`
EditableFieldWrapper manages **edit visibility only**.

It does NOT:
- validate
- save
- transform values

The parent owns all state.

---

## Closing the editor

EditableFieldWrapper listens for a global close event.

\`\`\`ts
document.dispatchEvent(new CustomEvent("ew-close"));
\`\`\`

You are responsible for deciding **when** to close (Save / Cancel / external click).

---

## Outside click and Autocomplete

Autocomplete and other dropdown-based components render their menus
outside the wrapper DOM tree.

This can trigger an outside click and close the editor immediately.

To prevent this, disable outside click handling:

\`\`\`vue
<EditableFieldWrapper :disableOutsideClose="true" />
\`\`\`

Use this whenever the edit slot contains:
- FusionAutocomplete
- Select / Dropdown
- Datepicker
- Any teleported overlay

---

## Mental model

- Wrapper controls visibility
- Inputs control draft values
- Save = copy draft → real value → close
- Cancel = close only

That’s it.
        `}}}};function v(){document.dispatchEvent(new CustomEvent("ew-close"))}const x={name:"Inline / TextInput",render(){const e=r("John Carter"),u=r(null);function n(t){e.value=t,v()}return{components:{EditableFieldWrapper:y,EditableDisplayField:k,FusionTextInput:L,FusionButton:W},setup(){return{fullName:e,wrapperRef:u,save:n,closeEditor:v}},template:`
      <div style="max-width:380px;padding:20px;">
        <EditableFieldWrapper ref="wrapperRef" v-model="fullName">

          <template #read>
            <EditableDisplayField
              label="Full Name"
              :text="fullName"
              variant="ghost"
              @edit="wrapperRef.startEditing()"
            />
          </template>

          <template #edit="{ model }">
            <FusionTextInput
              v-model="model"
              label="Full Name"
              formWrapperWidth="100%"
            />
          </template>

          <template #actions="{ model }">
            <div style="display:flex;justify-content:flex-end;gap:8px;">
              <FusionButton text="Cancel" variant="subtle" @click="closeEditor()" />
              <FusionButton text="Save" variant="solid" @click="save(model)" />
            </div>
          </template>

        </EditableFieldWrapper>
      </div>
      `}}},g={name:"Inline / Autocomplete (Salutation)",render(){const e=r("Mr"),u=r("Mr"),n=r(null),t=[{label:"Mr",value:"Mr"},{label:"Mrs",value:"Mrs"},{label:"Miss",value:"Miss"},{label:"Dr",value:"Dr"}];function l(){e.value=u.value,v()}return{components:{EditableFieldWrapper:y,EditableDisplayField:k,FusionAutocomplete:N,FusionButton:W},setup(){return{salutation:e,selectedSalutation:u,options:t,wrapperRef:n,save:l,closeEditor:v}},template:`
      <div style="max-width:380px;padding:20px;">
        <EditableFieldWrapper
          ref="wrapperRef"
          v-model="salutation"
          :disableOutsideClose="true"
        >

          <template #read>
            <EditableDisplayField
              label="Salutation"
              :text="salutation"
              variant="ghost"
              @edit="wrapperRef.startEditing()"
            />
          </template>

          <template #edit>
            <FusionAutocomplete
              v-model="selectedSalutation"
              :options="options"
              label="Salutation"
              variant="button"
              formWrapperWidth="100%"
            />
          </template>

          <template #actions>
            <div style="display:flex;justify-content:flex-end;gap:8px;">
              <FusionButton text="Cancel" variant="subtle" @click="closeEditor()" />
              <FusionButton text="Save" variant="solid" @click="save()" />
            </div>
          </template>

        </EditableFieldWrapper>
      </div>
      `}}},h={name:"Teleport / TextInput (Table)",render(){const e=r([{id:1,email:"john@doe.com"},{id:2,email:"jane@doe.com"},{id:3,email:"sam@doe.com"}]),u=[{label:"Email",key:"email",width:"220px"}];return{components:{FusionListView:B,EditableFieldWrapper:y,EditableDisplayField:k,FusionTextInput:L,FusionButton:W},setup(){const n=r({});function t(o,s){n.value[o]?.openTeleport?.(s)}function l(o,s){const a=e.value.find(p=>p.id===o);a&&(a.email=s),v()}return{rows:e,columns:u,wrapperRefs:n,openEditor:t,saveField:l,closeEditor:v}},template:`
      <FusionListView :columns="columns" :rows="rows" rowKey="id" showHeader>
        <template #cell-email="{ row }">

          <EditableFieldWrapper
            :ref="el => wrapperRefs[row.id] = el"
            mode="teleport"
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
              <FusionTextInput v-model="model" label="Email" />
            </template>

            <template #actions="{ model }">
              <div style="display:flex;justify-content:flex-end;gap:8px;">
                <FusionButton text="Cancel" variant="subtle" @click="closeEditor()" />
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
      `}}},T={name:"Teleport / Autocomplete (Table)",render(){const e=r([{id:1,role:"Developer"},{id:2,role:"Designer"}]),u=[{label:"Role",key:"role",width:"200px"}],n=[{label:"Developer",value:"Developer"},{label:"Designer",value:"Designer"},{label:"Product Manager",value:"PM"}];return{components:{FusionListView:B,EditableFieldWrapper:y,EditableDisplayField:k,FusionAutocomplete:N,FusionButton:W},setup(){const t=r({}),l=r(null);function o(a,p){l.value=e.value.find(b=>b.id===a)?.role||null,t.value[a]?.openTeleport?.(p)}function s(a){const p=e.value.find(b=>b.id===a);p&&l.value&&(p.role=l.value),v()}return{rows:e,columns:u,options:n,selected:l,wrapperRefs:t,openEditor:o,saveField:s,closeEditor:v}},template:`
      <FusionListView :columns="columns" :rows="rows" rowKey="id" showHeader>
        <template #cell-role="{ row }">

          <EditableFieldWrapper
            :ref="el => wrapperRefs[row.id] = el"
            mode="teleport"
            v-model="row.role"
            :disableOutsideClose="true"
          >

            <template #read>
              <EditableDisplayField
                :text="row.role"
                variant="outline"
                @edit="openEditor(row.id, $event)"
              />
            </template>

            <template #edit>
              <FusionAutocomplete
                v-model="selected"
                :options="options"
                label="Role"
                variant="button"
                formWrapperWidth="100%"
              />
            </template>

            <template #actions>
              <div style="display:flex;justify-content:flex-end;gap:8px;">
                <FusionButton text="Cancel" variant="subtle" @click="closeEditor()" />
                <FusionButton
                  text="Save"
                  variant="solid"
                  @click="saveField(row.id)"
                />
              </div>
            </template>

          </EditableFieldWrapper>

        </template>
      </FusionListView>
      `}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  name: "Inline / TextInput",
  render() {
    const fullName = ref("John Carter");
    const wrapperRef = ref<any>(null);
    function save(value: string) {
      fullName.value = value;
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
      <div style="max-width:380px;padding:20px;">
        <EditableFieldWrapper ref="wrapperRef" v-model="fullName">

          <template #read>
            <EditableDisplayField
              label="Full Name"
              :text="fullName"
              variant="ghost"
              @edit="wrapperRef.startEditing()"
            />
          </template>

          <template #edit="{ model }">
            <FusionTextInput
              v-model="model"
              label="Full Name"
              formWrapperWidth="100%"
            />
          </template>

          <template #actions="{ model }">
            <div style="display:flex;justify-content:flex-end;gap:8px;">
              <FusionButton text="Cancel" variant="subtle" @click="closeEditor()" />
              <FusionButton text="Save" variant="solid" @click="save(model)" />
            </div>
          </template>

        </EditableFieldWrapper>
      </div>
      \`
    };
  }
}`,...x.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  name: "Inline / Autocomplete (Salutation)",
  render() {
    const salutation = ref("Mr");
    const selectedSalutation = ref("Mr");
    const wrapperRef = ref<any>(null);
    const options = [{
      label: "Mr",
      value: "Mr"
    }, {
      label: "Mrs",
      value: "Mrs"
    }, {
      label: "Miss",
      value: "Miss"
    }, {
      label: "Dr",
      value: "Dr"
    }];
    function save() {
      salutation.value = selectedSalutation.value;
      closeEditor();
    }
    return {
      components: {
        EditableFieldWrapper,
        EditableDisplayField,
        FusionAutocomplete,
        FusionButton
      },
      setup() {
        return {
          salutation,
          selectedSalutation,
          options,
          wrapperRef,
          save,
          closeEditor
        };
      },
      template: \`
      <div style="max-width:380px;padding:20px;">
        <EditableFieldWrapper
          ref="wrapperRef"
          v-model="salutation"
          :disableOutsideClose="true"
        >

          <template #read>
            <EditableDisplayField
              label="Salutation"
              :text="salutation"
              variant="ghost"
              @edit="wrapperRef.startEditing()"
            />
          </template>

          <template #edit>
            <FusionAutocomplete
              v-model="selectedSalutation"
              :options="options"
              label="Salutation"
              variant="button"
              formWrapperWidth="100%"
            />
          </template>

          <template #actions>
            <div style="display:flex;justify-content:flex-end;gap:8px;">
              <FusionButton text="Cancel" variant="subtle" @click="closeEditor()" />
              <FusionButton text="Save" variant="solid" @click="save()" />
            </div>
          </template>

        </EditableFieldWrapper>
      </div>
      \`
    };
  }
}`,...g.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  name: "Teleport / TextInput (Table)",
  render() {
    const rows = ref([{
      id: 1,
      email: "john@doe.com"
    }, {
      id: 2,
      email: "jane@doe.com"
    }, {
      id: 3,
      email: "sam@doe.com"
    }]);
    const columns = [{
      label: "Email",
      key: "email",
      width: "220px"
    }];
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
        function saveField(id: number, value: string) {
          const row = rows.value.find(r => r.id === id);
          if (row) row.email = value;
          closeEditor();
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
      <FusionListView :columns="columns" :rows="rows" rowKey="id" showHeader>
        <template #cell-email="{ row }">

          <EditableFieldWrapper
            :ref="el => wrapperRefs[row.id] = el"
            mode="teleport"
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
              <FusionTextInput v-model="model" label="Email" />
            </template>

            <template #actions="{ model }">
              <div style="display:flex;justify-content:flex-end;gap:8px;">
                <FusionButton text="Cancel" variant="subtle" @click="closeEditor()" />
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
}`,...h.parameters?.docs?.source}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  name: "Teleport / Autocomplete (Table)",
  render() {
    const rows = ref([{
      id: 1,
      role: "Developer"
    }, {
      id: 2,
      role: "Designer"
    }]);
    const columns = [{
      label: "Role",
      key: "role",
      width: "200px"
    }];
    const options = [{
      label: "Developer",
      value: "Developer"
    }, {
      label: "Designer",
      value: "Designer"
    }, {
      label: "Product Manager",
      value: "PM"
    }];
    return {
      components: {
        FusionListView,
        EditableFieldWrapper,
        EditableDisplayField,
        FusionAutocomplete,
        FusionButton
      },
      setup() {
        const wrapperRefs = ref<Record<number, any>>({});
        const selected = ref<string | null>(null);
        function openEditor(id: number, event: MouseEvent) {
          selected.value = rows.value.find(r => r.id === id)?.role || null;
          wrapperRefs.value[id]?.openTeleport?.(event);
        }
        function saveField(id: number) {
          const row = rows.value.find(r => r.id === id);
          if (row && selected.value) row.role = selected.value;
          closeEditor();
        }
        return {
          rows,
          columns,
          options,
          selected,
          wrapperRefs,
          openEditor,
          saveField,
          closeEditor
        };
      },
      template: \`
      <FusionListView :columns="columns" :rows="rows" rowKey="id" showHeader>
        <template #cell-role="{ row }">

          <EditableFieldWrapper
            :ref="el => wrapperRefs[row.id] = el"
            mode="teleport"
            v-model="row.role"
            :disableOutsideClose="true"
          >

            <template #read>
              <EditableDisplayField
                :text="row.role"
                variant="outline"
                @edit="openEditor(row.id, $event)"
              />
            </template>

            <template #edit>
              <FusionAutocomplete
                v-model="selected"
                :options="options"
                label="Role"
                variant="button"
                formWrapperWidth="100%"
              />
            </template>

            <template #actions>
              <div style="display:flex;justify-content:flex-end;gap:8px;">
                <FusionButton text="Cancel" variant="subtle" @click="closeEditor()" />
                <FusionButton
                  text="Save"
                  variant="solid"
                  @click="saveField(row.id)"
                />
              </div>
            </template>

          </EditableFieldWrapper>

        </template>
      </FusionListView>
      \`
    };
  }
}`,...T.parameters?.docs?.source}}};const Ee=["Inline_TextInput","Inline_Autocomplete","Teleport_TextInput_Table","Teleport_Autocomplete_Table"];export{g as Inline_Autocomplete,x as Inline_TextInput,T as Teleport_Autocomplete_Table,h as Teleport_TextInput_Table,Ee as __namedExportsOrder,Fe as default};
