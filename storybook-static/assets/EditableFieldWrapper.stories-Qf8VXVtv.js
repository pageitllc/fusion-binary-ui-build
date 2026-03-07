import{F as V}from"./FusionListView-B6D7lsVc.js";import{s as M,r as a,C as P,q as J,o as z,a as f,y as w,g as y,d as R,f as S,n as H,T as K,F as U,i as _,L as X,j as m,t as A,u as Y,l as G}from"./iframe-DKpyqR87.js";import{_ as O}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{F as Q}from"./FusionActionButton-aAxFyKPs.js";import{F as Z}from"./FuAvatar-0TuGBkq_.js";import{S as ee}from"./square-pen-CsjlTlmd.js";import{F as N}from"./FusionTextInput-DD6iUAuU.js";import{F as E}from"./FusionButton-Dv3ry6EW.js";import{F as L}from"./FusionAutocomplete-BdBVihKD.js";import"./FusionCheckbox-CNMfF2ok.js";import"./preload-helper-Ct5FWWRu.js";import"./createLucideIcon-H_lQUGxs.js";const te={key:0,class:"efw-read"},ne={key:1,class:"efw-edit"},ae={class:"efw-footer"},le={class:"efw-read"},ie={class:"efw-footer"},j=M({__name:"EditableFieldWrapper",props:{modelValue:{default:()=>({})},mode:{default:"inline"},teleportTo:{default:"body"},align:{default:"right"},disableOutsideClose:{type:Boolean,default:!1}},setup(e,{expose:r}){const n=e,t=a(!1),i=a(null),o=P({top:0,left:0}),l=a(null),s=a(null);function c(d){if(d===null||typeof d!="object")return d;const p=X(d);return Array.isArray(p)?[...p]:p.constructor===Object?{...p}:p}function F(){document.dispatchEvent(new CustomEvent("close-all-editors")),i.value=c(n.modelValue),t.value=!0}function q(d){if(t.value){v();return}document.dispatchEvent(new CustomEvent("close-all-editors")),i.value=c(n.modelValue),_(()=>{t.value=!0,_(()=>{const p=d?.currentTarget;if(!p||!s.value)return;const x=p.getBoundingClientRect(),B=s.value.offsetWidth;o.top=x.bottom+6+window.scrollY,n.align==="left"?o.left=x.left+window.scrollX:n.align==="center"?o.left=x.left+x.width/2-B/2+window.scrollX:o.left=x.right-B+window.scrollX})})}function v(){t.value=!1}function D(){t.value&&v()}function C(d){if(!t.value||n.disableOutsideClose)return;const p=d.target;p.closest(".fu-status-dropdown, .fu-status-dropdown__menu, .fu-autocomplete-dropdown, .fu-select-dropdown, .fu-datepicker-dropdown")||(n.mode==="inline"?l.value&&!l.value.contains(p)&&v():s.value&&!s.value.contains(p)&&v())}return J(()=>{document.addEventListener("close-all-editors",D),document.addEventListener("ew-close",v),document.addEventListener("pointerdown",C),window.addEventListener("resize",v)}),z(()=>{document.removeEventListener("close-all-editors",D),document.removeEventListener("ew-close",v),document.removeEventListener("pointerdown",C),window.removeEventListener("resize",v)}),r({startEditing:F,openTeleport:q,closeEditor:v}),(d,p)=>e.mode==="inline"?(m(),f("div",{key:0,class:"efw-wrapper",ref_key:"inlineRef",ref:l},[t.value?(m(),f("div",ne,[w(d.$slots,"edit",{model:i.value},void 0,!0),y("div",ae,[w(d.$slots,"actions",{},void 0,!0)])])):(m(),f("div",te,[w(d.$slots,"read",{},void 0,!0)]))],512)):(m(),f(U,{key:1},[y("div",le,[w(d.$slots,"read",{},void 0,!0)]),(m(),R(K,{to:e.teleportTo},[t.value?(m(),f("div",{key:0,class:"efw-teleport-card",ref_key:"teleportRef",ref:s,style:H({top:o.top+"px",left:o.left+"px"})},[w(d.$slots,"edit",{model:i.value},void 0,!0),y("div",ie,[w(d.$slots,"actions",{},void 0,!0)])],4)):S("",!0)],8,["to"]))],64))}}),b=O(j,[["__scopeId","data-v-90094e16"]]);j.__docgenInfo={exportName:"default",displayName:"EditableFieldWrapper",description:"",tags:{},expose:[{name:"startEditing"},{name:"openTeleport"},{name:"closeEditor"}],props:[{name:"modelValue",required:!0,type:{name:"T"},defaultValue:{func:!1,value:"() => ({})"}},{name:"mode",required:!1,type:{name:"union",elements:[{name:'"inline"'},{name:'"teleport"'}]},defaultValue:{func:!1,value:'"inline"'}},{name:"teleportTo",required:!1,type:{name:"string"},defaultValue:{func:!1,value:'"body"'}},{name:"align",required:!1,type:{name:"union",elements:[{name:'"left"'},{name:'"center"'},{name:'"right"'}]},defaultValue:{func:!1,value:'"right"'}},{name:"disableOutsideClose",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}],slots:[{name:"read"},{name:"edit",scoped:!0,bindings:[{name:"model",title:"binding"}]},{name:"actions"}],sourceFiles:["/Users/xavier/Documents/Websites/Skkido/Fusion-binary-ui/src/components/editWrapper/EditableFieldWrapper.vue"]};const oe={class:"edf-container"},re={key:0,class:"edf-label"},se={class:"edf-text"},$=M({__name:"EditableDisplayField",props:{text:{},label:{default:""},variant:{default:"solid"},avatarSrc:{},avatarName:{}},emits:["edit"],setup(e,{emit:r}){const n=r,t=a(!1);function i(o){n("edit",o)}return(o,l)=>(m(),f("div",oe,[e.label?(m(),f("label",re,A(e.label),1)):S("",!0),y("div",{class:G(["edf-wrapper",[`edf--${e.variant}`]]),onMouseenter:l[0]||(l[0]=s=>t.value=!0),onMouseleave:l[1]||(l[1]=s=>t.value=!1),ref:"container"},[e.avatarSrc||e.avatarName?(m(),R(Z,{key:0,src:e.avatarSrc,name:e.avatarName,size:"xs","show-status":!1,class:"edf-avatar"},null,8,["src","name"])):S("",!0),y("span",se,A(e.text),1),t.value?(m(),R(Q,{key:1,class:"edf-edit-btn",icon:Y(ee),size:"sm",variant:"subtle",onClick:i},null,8,["icon"])):S("",!0)],34)]))}}),g=O($,[["__scopeId","data-v-f0200fd3"]]);$.__docgenInfo={exportName:"default",displayName:"EditableDisplayField",description:"",tags:{},props:[{name:"text",required:!0,type:{name:"string"}},{name:"label",required:!1,type:{name:"string"},defaultValue:{func:!1,value:'""'}},{name:"variant",required:!1,type:{name:"union",elements:[{name:'"solid"'},{name:'"outline"'},{name:'"ghost"'}]},defaultValue:{func:!1,value:'"solid"'}},{name:"avatarSrc",required:!1,type:{name:"string"}},{name:"avatarName",required:!1,type:{name:"string"}}],events:[{name:"edit",type:{names:["MouseEvent"]}}],sourceFiles:["/Users/xavier/Documents/Websites/Skkido/Fusion-binary-ui/src/components/TextInput/EditableDisplayField.vue"]};const Ee={title:"Components/EditableFieldWrapper",component:b,tags:["autodocs"],parameters:{docs:{description:{component:`
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

That's it.
        `}}}};function u(){document.dispatchEvent(new CustomEvent("ew-close"))}const h={name:"Inline / TextInput",render(){const e=a("John Carter"),r=a(null);function n(t){e.value=t,u()}return{components:{EditableFieldWrapper:b,EditableDisplayField:g,FusionTextInput:N,FusionButton:E},setup(){return{fullName:e,wrapperRef:r,save:n,closeEditor:u}},template:`
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
      `}}},I={name:"Inline / Autocomplete (Salutation)",render(){const e=a("Mr"),r=a("Mr"),n=a(null),t=[{label:"Mr",value:"Mr"},{label:"Mrs",value:"Mrs"},{label:"Miss",value:"Miss"},{label:"Dr",value:"Dr"}];function i(){e.value=r.value,u()}return{components:{EditableFieldWrapper:b,EditableDisplayField:g,FusionAutocomplete:L,FusionButton:E},setup(){return{salutation:e,selectedSalutation:r,options:t,wrapperRef:n,save:i,closeEditor:u}},template:`
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
      `}}},W={name:"Teleport / TextInput (Table)",render(){const e=a([{id:1,email:"john@doe.com"},{id:2,email:"jane@doe.com"},{id:3,email:"sam@doe.com"}]),r=[{label:"Email",key:"email",width:"220px"}];return{components:{FusionListView:V,EditableFieldWrapper:b,EditableDisplayField:g,FusionTextInput:N,FusionButton:E},setup(){const n=a({});function t(o,l){n.value[o]?.openTeleport?.(l)}function i(o,l){const s=e.value.find(c=>c.id===o);s&&(s.email=l),u()}return{rows:e,columns:r,wrapperRefs:n,openEditor:t,saveField:i,closeEditor:u}},template:`
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
      `}}},k={name:"Teleport / Autocomplete (Table)",render(){const e=a([{id:1,role:"Developer"},{id:2,role:"Designer"}]),r=[{label:"Role",key:"role",width:"200px"}],n=[{label:"Developer",value:"Developer"},{label:"Designer",value:"Designer"},{label:"Product Manager",value:"PM"}];return{components:{FusionListView:V,EditableFieldWrapper:b,EditableDisplayField:g,FusionAutocomplete:L,FusionButton:E},setup(){const t=a({}),i=a(null);function o(s,c){i.value=e.value.find(F=>F.id===s)?.role||null,t.value[s]?.openTeleport?.(c)}function l(s){const c=e.value.find(F=>F.id===s);c&&i.value&&(c.role=i.value),u()}return{rows:e,columns:r,options:n,selected:i,wrapperRefs:t,openEditor:o,saveField:l,closeEditor:u}},template:`
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
      `}}},T={name:"Inline / With Avatar",parameters:{docs:{description:{story:`
Demonstrates the optional avatar feature on \`EditableDisplayField\`.

The avatar appears **left of the text** and is activated purely by prop presence —
no extra configuration required.

| Scenario | Props to pass |
|---|---|
| Photo | \`avatarSrc\` |
| Initials fallback | \`avatarName\` |
| Photo + graceful fallback *(recommended)* | \`avatarSrc\` + \`avatarName\` |

The two fields below are **fully independent** — each has its own wrapper ref,
its own state, and its own save handler. Editing one does not affect the other.
        `}}},render(){const e=a("John Carter"),r=a("John Carter"),n=a(null),t=a(null);function i(l){e.value=l,u()}function o(l){r.value=l,u()}return{components:{EditableFieldWrapper:b,EditableDisplayField:g,FusionTextInput:N,FusionButton:E},setup(){return{fullName:e,fullNameInitials:r,wrapperRefImg:n,wrapperRefInitials:t,saveImg:i,saveInitials:o,closeEditor:u}},template:`
      <!-- ── Variant A: avatarSrc + avatarName (image with initials fallback) ── -->
      <div style="max-width:380px;padding:20px;">
        <EditableFieldWrapper ref="wrapperRefImg" v-model="fullName">

          <template #read>
            <EditableDisplayField
              label="Owner (photo + initials fallback)"
              :text="fullName"
              variant="ghost"
              avatarSrc="https://i.pravatar.cc/150?img=12"
              avatarName="John Carter"
              @edit="wrapperRefImg.startEditing()"
            />
          </template>

          <template #edit="{ model }">
            <FusionTextInput
              v-model="model"
              label="Owner"
              formWrapperWidth="100%"
            />
          </template>

          <template #actions="{ model }">
            <div style="display:flex;justify-content:flex-end;gap:8px;">
              <FusionButton text="Cancel" variant="subtle" @click="closeEditor()" />
              <FusionButton text="Save"   variant="solid"  @click="saveImg(model)" />
            </div>
          </template>

        </EditableFieldWrapper>
      </div>

      <!-- ── Variant B: avatarName only (initials, no image) ── -->
      <div style="max-width:380px;padding:20px;margin-top:8px;">
        <EditableFieldWrapper ref="wrapperRefInitials" v-model="fullNameInitials">

          <template #read>
            <EditableDisplayField
              label="Owner (initials only)"
              :text="fullNameInitials"
              variant="ghost"
              avatarName="John Carter"
              @edit="wrapperRefInitials.startEditing()"
            />
          </template>

          <template #edit="{ model }">
            <FusionTextInput
              v-model="model"
              label="Owner"
              formWrapperWidth="100%"
            />
          </template>

          <template #actions="{ model }">
            <div style="display:flex;justify-content:flex-end;gap:8px;">
              <FusionButton text="Cancel" variant="subtle" @click="closeEditor()" />
              <FusionButton text="Save"   variant="solid"  @click="saveInitials(model)" />
            </div>
          </template>

        </EditableFieldWrapper>
      </div>
      `}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
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
}`,...h.parameters?.docs?.source}}};I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
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
}`,...I.parameters?.docs?.source}}};W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
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
}`,...W.parameters?.docs?.source}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
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
}`,...k.parameters?.docs?.source}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  name: "Inline / With Avatar",
  parameters: {
    docs: {
      description: {
        story: \`
Demonstrates the optional avatar feature on \\\`EditableDisplayField\\\`.

The avatar appears **left of the text** and is activated purely by prop presence —
no extra configuration required.

| Scenario | Props to pass |
|---|---|
| Photo | \\\`avatarSrc\\\` |
| Initials fallback | \\\`avatarName\\\` |
| Photo + graceful fallback *(recommended)* | \\\`avatarSrc\\\` + \\\`avatarName\\\` |

The two fields below are **fully independent** — each has its own wrapper ref,
its own state, and its own save handler. Editing one does not affect the other.
        \`
      }
    }
  },
  render() {
    const fullName = ref("John Carter");
    const fullNameInitials = ref("John Carter");
    const wrapperRefImg = ref<any>(null);
    const wrapperRefInitials = ref<any>(null);
    function saveImg(value: string) {
      fullName.value = value;
      closeEditor();
    }
    function saveInitials(value: string) {
      fullNameInitials.value = value;
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
          fullNameInitials,
          wrapperRefImg,
          wrapperRefInitials,
          saveImg,
          saveInitials,
          closeEditor
        };
      },
      template: \`
      <!-- ── Variant A: avatarSrc + avatarName (image with initials fallback) ── -->
      <div style="max-width:380px;padding:20px;">
        <EditableFieldWrapper ref="wrapperRefImg" v-model="fullName">

          <template #read>
            <EditableDisplayField
              label="Owner (photo + initials fallback)"
              :text="fullName"
              variant="ghost"
              avatarSrc="https://i.pravatar.cc/150?img=12"
              avatarName="John Carter"
              @edit="wrapperRefImg.startEditing()"
            />
          </template>

          <template #edit="{ model }">
            <FusionTextInput
              v-model="model"
              label="Owner"
              formWrapperWidth="100%"
            />
          </template>

          <template #actions="{ model }">
            <div style="display:flex;justify-content:flex-end;gap:8px;">
              <FusionButton text="Cancel" variant="subtle" @click="closeEditor()" />
              <FusionButton text="Save"   variant="solid"  @click="saveImg(model)" />
            </div>
          </template>

        </EditableFieldWrapper>
      </div>

      <!-- ── Variant B: avatarName only (initials, no image) ── -->
      <div style="max-width:380px;padding:20px;margin-top:8px;">
        <EditableFieldWrapper ref="wrapperRefInitials" v-model="fullNameInitials">

          <template #read>
            <EditableDisplayField
              label="Owner (initials only)"
              :text="fullNameInitials"
              variant="ghost"
              avatarName="John Carter"
              @edit="wrapperRefInitials.startEditing()"
            />
          </template>

          <template #edit="{ model }">
            <FusionTextInput
              v-model="model"
              label="Owner"
              formWrapperWidth="100%"
            />
          </template>

          <template #actions="{ model }">
            <div style="display:flex;justify-content:flex-end;gap:8px;">
              <FusionButton text="Cancel" variant="subtle" @click="closeEditor()" />
              <FusionButton text="Save"   variant="solid"  @click="saveInitials(model)" />
            </div>
          </template>

        </EditableFieldWrapper>
      </div>
      \`
    };
  }
}`,...T.parameters?.docs?.source}}};const ge=["Inline_TextInput","Inline_Autocomplete","Teleport_TextInput_Table","Teleport_Autocomplete_Table","Inline_WithAvatar"];export{I as Inline_Autocomplete,h as Inline_TextInput,T as Inline_WithAvatar,k as Teleport_Autocomplete_Table,W as Teleport_TextInput_Table,ge as __namedExportsOrder,Ee as default};
