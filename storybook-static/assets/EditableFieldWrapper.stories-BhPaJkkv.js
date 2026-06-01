import{F as N}from"./FusionListView-BJ2K0ZnU.js";import{d as j,r as a,a as H,x as z,k as K,b as w,A as h,g as y,f as C,n as X,i as D,T as Q,F as G,p as O,O as Y,o as m,t as V,u as Z,j as ee}from"./iframe-BWX2pLPr.js";import{_ as L}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{F as te}from"./FusionActionButton-Ca-SR80j.js";import{F as ne}from"./FuAvatar-CzPWL7dE.js";import{S as ae}from"./square-pen-KjXrytOP.js";import{F as A}from"./FusionTextInput-cbn4CYAx.js";import{F as $}from"./FusionTextArea-CcvGrLU5.js";import{F as b}from"./FusionButton-rEE2o6aG.js";import{F as P}from"./FusionAutocomplete-mkhKeyJv.js";import"./FusionCheckbox-BvKzVjiA.js";import"./preload-helper-Ct5FWWRu.js";import"./createLucideIcon-BuC7IBSO.js";const le={key:0,class:"efw-read"},ie={key:1,class:"efw-edit"},oe={class:"efw-footer"},re={class:"efw-read"},se={class:"efw-footer"},q=j({__name:"EditableFieldWrapper",props:{modelValue:{default:()=>({})},mode:{default:"inline"},teleportTo:{default:"body"},align:{default:"right"},disableOutsideClose:{type:Boolean,default:!1}},setup(e,{expose:o}){const n=e,t=a(!1),r=a(null),i=H({top:0,left:0}),l=a(null),s=a(null);function c(d){if(d===null||typeof d!="object")return d;const u=Y(d);return Array.isArray(u)?[...u]:u.constructor===Object?{...u}:u}function x(){document.dispatchEvent(new CustomEvent("close-all-editors")),r.value=c(n.modelValue),t.value=!0}function J(d){if(t.value){v();return}document.dispatchEvent(new CustomEvent("close-all-editors")),r.value=c(n.modelValue),O(()=>{t.value=!0,O(()=>{const u=d?.currentTarget;if(!u||!s.value)return;const E=u.getBoundingClientRect(),M=s.value.offsetWidth;i.top=E.bottom+6+window.scrollY,n.align==="left"?i.left=E.left+window.scrollX:n.align==="center"?i.left=E.left+E.width/2-M/2+window.scrollX:i.left=E.right-M+window.scrollX})})}function v(){t.value=!1}function B(){t.value&&v()}function _(d){if(!t.value||n.disableOutsideClose)return;const u=d.target;u.closest(".fu-status-dropdown, .fu-status-dropdown__menu, .fu-autocomplete-dropdown, .fu-select-dropdown, .fu-datepicker-dropdown")||(n.mode==="inline"?l.value&&!l.value.contains(u)&&v():s.value&&!s.value.contains(u)&&v())}return z(()=>{document.addEventListener("close-all-editors",B),document.addEventListener("ew-close",v),document.addEventListener("pointerdown",_),window.addEventListener("resize",v)}),K(()=>{document.removeEventListener("close-all-editors",B),document.removeEventListener("ew-close",v),document.removeEventListener("pointerdown",_),window.removeEventListener("resize",v)}),o({startEditing:x,openTeleport:J,closeEditor:v}),(d,u)=>e.mode==="inline"?(m(),w("div",{key:0,class:"efw-wrapper",ref_key:"inlineRef",ref:l},[t.value?(m(),w("div",ie,[h(d.$slots,"edit",{model:r.value},void 0,!0),y("div",oe,[h(d.$slots,"actions",{},void 0,!0)])])):(m(),w("div",le,[h(d.$slots,"read",{},void 0,!0)]))],512)):(m(),w(G,{key:1},[y("div",re,[h(d.$slots,"read",{},void 0,!0)]),(m(),C(Q,{to:e.teleportTo},[t.value?(m(),w("div",{key:0,class:"efw-teleport-card",ref_key:"teleportRef",ref:s,style:X({top:i.top+"px",left:i.left+"px"})},[h(d.$slots,"edit",{model:r.value},void 0,!0),y("div",se,[h(d.$slots,"actions",{},void 0,!0)])],4)):D("",!0)],8,["to"]))],64))}}),f=L(q,[["__scopeId","data-v-90094e16"]]);q.__docgenInfo={exportName:"default",displayName:"EditableFieldWrapper",description:"",tags:{},expose:[{name:"startEditing"},{name:"openTeleport"},{name:"closeEditor"}],props:[{name:"modelValue",required:!0,type:{name:"T"},defaultValue:{func:!1,value:"() => ({})"}},{name:"mode",required:!1,type:{name:"union",elements:[{name:'"inline"'},{name:'"teleport"'}]},defaultValue:{func:!1,value:'"inline"'}},{name:"teleportTo",required:!1,type:{name:"string"},defaultValue:{func:!1,value:'"body"'}},{name:"align",required:!1,type:{name:"union",elements:[{name:'"left"'},{name:'"center"'},{name:'"right"'}]},defaultValue:{func:!1,value:'"right"'}},{name:"disableOutsideClose",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}],slots:[{name:"read"},{name:"edit",scoped:!0,bindings:[{name:"model",title:"binding"}]},{name:"actions"}],sourceFiles:["/Users/xavier/Documents/Websites/Skkido/Fusion-binary-ui/src/components/editWrapper/EditableFieldWrapper.vue"]};const de={class:"edf-container"},pe={key:0,class:"edf-label"},ue={class:"edf-text"},U=j({__name:"EditableDisplayField",props:{text:{},label:{default:""},variant:{default:"solid"},avatarSrc:{},avatarName:{}},emits:["edit"],setup(e,{emit:o}){const n=o,t=a(!1);function r(i){n("edit",i)}return(i,l)=>(m(),w("div",de,[e.label?(m(),w("label",pe,V(e.label),1)):D("",!0),y("div",{class:ee(["edf-wrapper",[`edf--${e.variant}`]]),onMouseenter:l[0]||(l[0]=s=>t.value=!0),onMouseleave:l[1]||(l[1]=s=>t.value=!1),ref:"container"},[e.avatarSrc||e.avatarName?(m(),C(ne,{key:0,src:e.avatarSrc,name:e.avatarName,size:"xs","show-status":!1,class:"edf-avatar"},null,8,["src","name"])):D("",!0),y("span",ue,V(e.text),1),t.value?(m(),C(te,{key:1,class:"edf-edit-btn",icon:Z(ae),size:"sm",variant:"subtle",onClick:r},null,8,["icon"])):D("",!0)],34)]))}}),F=L(U,[["__scopeId","data-v-f0200fd3"]]);U.__docgenInfo={exportName:"default",displayName:"EditableDisplayField",description:"",tags:{},props:[{name:"text",required:!0,type:{name:"string"}},{name:"label",required:!1,type:{name:"string"},defaultValue:{func:!1,value:'""'}},{name:"variant",required:!1,type:{name:"union",elements:[{name:'"solid"'},{name:'"outline"'},{name:'"ghost"'}]},defaultValue:{func:!1,value:'"solid"'}},{name:"avatarSrc",required:!1,type:{name:"string"}},{name:"avatarName",required:!1,type:{name:"string"}}],events:[{name:"edit",type:{names:["MouseEvent"]}}],sourceFiles:["/Users/xavier/Documents/Websites/Skkido/Fusion-binary-ui/src/components/TextInput/EditableDisplayField.vue"]};const We={title:"Components/EditableFieldWrapper",component:f,tags:["autodocs"],parameters:{docs:{description:{component:`
# EditableFieldWrapper

A lightweight wrapper that manages **edit visibility only**.

It does **not** validate, save, or transform values — the parent owns all state.

---

## How it works

\`\`\`
┌──────────────────────────────────────────┐
│  EditableFieldWrapper                    │
│                                          │
│  #read   → what the user sees normally   │
│  #edit   → shown when editing            │
│  #actions → Save / Cancel buttons        │
└──────────────────────────────────────────┘
\`\`\`

1. User clicks the field → wrapper switches to edit mode
2. User types into the input → local draft value updates
3. User clicks **Save** → parent copies draft → real value → closes editor
4. User clicks **Cancel** → editor closes, nothing changes

---

## Two modes

| Mode | When to use |
|---|---|
| \`inline\` | Form fields, detail panels, profile pages |
| \`teleport\` | Table cells, compact lists — editor floats above the page |

---

## Closing the editor

The wrapper listens for a global DOM event. Call this from Save/Cancel:

\`\`\`ts
document.dispatchEvent(new CustomEvent("ew-close"));
\`\`\`

---

## Outside click and dropdowns

Autocomplete, Select, and Datepicker menus render **outside** the wrapper DOM tree.
This can accidentally close the editor when the user clicks a dropdown option.

Fix: disable outside-click handling whenever the edit slot contains a dropdown:

\`\`\`vue
<EditableFieldWrapper :disableOutsideClose="true" />
\`\`\`

Use this whenever \`#edit\` contains:
- \`FusionAutocomplete\`
- \`FusionSelect\` / \`FusionDropdown\`
- \`FusionDatepicker\`
- Any teleported overlay

---

## Available input types in \`#edit\`

| Component | Use for |
|---|---|
| \`FusionTextInput\` | Single-line text — names, emails, titles |
| \`FusionTextArea\` | Multi-line text — descriptions, notes, messages |
| \`FusionAutocomplete\` | Searchable dropdowns — roles, tags, assignees |
| \`FusionDatepicker\` | Date fields (use \`disableOutsideClose\`) |

---

## Avatar on the read view

\`EditableDisplayField\` supports an optional avatar to the left of the text.

| Scenario | Props |
|---|---|
| Photo | \`avatarSrc\` |
| Initials only | \`avatarName\` |
| Photo + initials fallback *(recommended)* | \`avatarSrc\` + \`avatarName\` |
        `}}}};function p(){document.dispatchEvent(new CustomEvent("ew-close"))}const g={name:"Inline / Text Input",parameters:{docs:{description:{story:`
**When to use:** Single-line fields like name, email, title, phone number.

The \`#edit\` slot receives a reactive \`model\` object via slot props.
Bind your input to \`model\` — it holds a safe clone of \`modelValue\`.
When the user saves, pass \`model\` back to the parent to commit.

\`\`\`vue
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
    <FusionTextInput v-model="model" label="Full Name" formWrapperWidth="100%" />
  </template>

  <template #actions="{ model }">
    <FusionButton text="Cancel" variant="subtle" @click="closeEditor()" />
    <FusionButton text="Save" variant="solid" @click="save(model)" />
  </template>
</EditableFieldWrapper>
\`\`\`
        `}}},render(){const e=a("John Carter"),o=a(null);function n(t){e.value=t,p()}return{components:{EditableFieldWrapper:f,EditableDisplayField:F,FusionTextInput:A,FusionButton:b},setup(){return{fullName:e,wrapperRef:o,save:n,closeEditor:p}},template:`
      <div style="max-width:380px;padding:20px;">
        <EditableFieldWrapper ref="wrapperRef" v-model="fullName">
          <template #read>
            <EditableDisplayField label="Full Name" :text="fullName" variant="ghost" @edit="wrapperRef.startEditing()" />
          </template>
          <template #edit="{ model }">
            <FusionTextInput v-model="model" label="Full Name" formWrapperWidth="100%" />
          </template>
          <template #actions="{ model }">
            <div style="display:flex;justify-content:flex-end;gap:8px;">
              <FusionButton text="Cancel" variant="subtle" @click="closeEditor()" />
              <FusionButton text="Save" variant="solid" @click="save(model)" />
            </div>
          </template>
        </EditableFieldWrapper>
      </div>
      `}}},T={name:"Inline / Text Area",parameters:{docs:{description:{story:`
**When to use:** Multi-line fields — descriptions, notes, bios, messages, comments.

Swap \`FusionTextInput\` for \`FusionTextArea\` in the \`#edit\` slot.
Everything else is identical.

\`\`\`vue
<EditableFieldWrapper ref="wrapperRef" v-model="description">
  <template #read>
    <EditableDisplayField
      label="Description"
      :text="description"
      variant="ghost"
      @edit="wrapperRef.startEditing()"
    />
  </template>

  <template #edit="{ model }">
    <!-- Use FusionTextArea instead of FusionTextInput -->
    <FusionTextArea
      v-model="model"
      label="Description"
      placeholder="Type your description..."
      variant="outline"
    />
  </template>

  <template #actions="{ model }">
    <FusionButton text="Cancel" variant="subtle" @click="closeEditor()" />
    <FusionButton text="Save" variant="solid" @click="save(model)" />
  </template>
</EditableFieldWrapper>
\`\`\`
        `}}},render(){const e=a("This channel is for backend engineering discussions, deploys, and incidents."),o=a(null);function n(t){e.value=t,p()}return{components:{EditableFieldWrapper:f,EditableDisplayField:F,FusionTextArea:$,FusionButton:b},setup(){return{description:e,wrapperRef:o,save:n,closeEditor:p}},template:`
      <div style="max-width:420px;padding:20px;">
        <EditableFieldWrapper ref="wrapperRef" v-model="description">
          <template #read>
            <EditableDisplayField label="Description" :text="description" variant="ghost" @edit="wrapperRef.startEditing()" />
          </template>
          <template #edit="{ model }">
            <FusionTextArea
              v-model="model"
              label="Description"
              placeholder="Type your description..."
              variant="outline"
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
      `}}},W={name:"Inline / Autocomplete",parameters:{docs:{description:{story:`
**When to use:** Searchable single-select fields — roles, status, assignee, category.

> ⚠️ **Always add \`:disableOutsideClose="true"\`** when using Autocomplete, Select, or any dropdown
> in the edit slot. Without it, clicking a dropdown option triggers an outside-click and closes
> the editor before the selection is registered.

\`\`\`vue
<EditableFieldWrapper
  ref="wrapperRef"
  v-model="salutation"
  :disableOutsideClose="true"
>
  ...
</EditableFieldWrapper>
\`\`\`
        `}}},render(){const e=a("Mr"),o=a("Mr"),n=a(null),t=[{label:"Mr",value:"Mr"},{label:"Mrs",value:"Mrs"},{label:"Miss",value:"Miss"},{label:"Dr",value:"Dr"}];function r(){e.value=o.value,p()}return{components:{EditableFieldWrapper:f,EditableDisplayField:F,FusionAutocomplete:P,FusionButton:b},setup(){return{salutation:e,selectedSalutation:o,options:t,wrapperRef:n,save:r,closeEditor:p}},template:`
      <div style="max-width:380px;padding:20px;">
        <EditableFieldWrapper ref="wrapperRef" v-model="salutation" :disableOutsideClose="true">
          <template #read>
            <EditableDisplayField label="Salutation" :text="salutation" variant="ghost" @edit="wrapperRef.startEditing()" />
          </template>
          <template #edit>
            <FusionAutocomplete v-model="selectedSalutation" :options="options" label="Salutation" variant="button" formWrapperWidth="100%" />
          </template>
          <template #actions>
            <div style="display:flex;justify-content:flex-end;gap:8px;">
              <FusionButton text="Cancel" variant="subtle" @click="closeEditor()" />
              <FusionButton text="Save" variant="solid" @click="save()" />
            </div>
          </template>
        </EditableFieldWrapper>
      </div>
      `}}},k={name:"Inline / With Avatar",parameters:{docs:{description:{story:`
**When to use:** Owner, assignee, or any person field where showing a face adds context.

Pass \`avatarSrc\` and/or \`avatarName\` directly to \`EditableDisplayField\`.
The wrapper itself needs no changes.

| Props | Result |
|---|---|
| \`avatarSrc\` only | Shows photo |
| \`avatarName\` only | Shows initials |
| \`avatarSrc\` + \`avatarName\` | Shows photo, falls back to initials if image fails *(recommended)* |

\`\`\`vue
<EditableDisplayField
  label="Owner"
  :text="ownerName"
  variant="ghost"
  avatarSrc="https://cdn.example.com/avatars/john.jpg"
  avatarName="John Carter"
  @edit="wrapperRef.startEditing()"
/>
\`\`\`
        `}}},render(){const e=a("John Carter"),o=a("John Carter"),n=a(null),t=a(null);function r(l){e.value=l,p()}function i(l){o.value=l,p()}return{components:{EditableFieldWrapper:f,EditableDisplayField:F,FusionTextInput:A,FusionButton:b},setup(){return{fullName:e,fullNameInitials:o,wrapperRefImg:n,wrapperRefInitials:t,saveImg:r,saveInitials:i,closeEditor:p}},template:`
      <div style="max-width:380px;padding:20px;display:flex;flex-direction:column;gap:16px;">
        <!-- Photo + initials fallback -->
        <EditableFieldWrapper ref="wrapperRefImg" v-model="fullName">
          <template #read>
            <EditableDisplayField label="Owner (photo + fallback)" :text="fullName" variant="ghost"
              avatarSrc="https://i.pravatar.cc/150?img=12" avatarName="John Carter"
              @edit="wrapperRefImg.startEditing()" />
          </template>
          <template #edit="{ model }">
            <FusionTextInput v-model="model" label="Owner" formWrapperWidth="100%" />
          </template>
          <template #actions="{ model }">
            <div style="display:flex;justify-content:flex-end;gap:8px;">
              <FusionButton text="Cancel" variant="subtle" @click="closeEditor()" />
              <FusionButton text="Save" variant="solid" @click="saveImg(model)" />
            </div>
          </template>
        </EditableFieldWrapper>

        <!-- Initials only -->
        <EditableFieldWrapper ref="wrapperRefInitials" v-model="fullNameInitials">
          <template #read>
            <EditableDisplayField label="Owner (initials only)" :text="fullNameInitials" variant="ghost"
              avatarName="John Carter" @edit="wrapperRefInitials.startEditing()" />
          </template>
          <template #edit="{ model }">
            <FusionTextInput v-model="model" label="Owner" formWrapperWidth="100%" />
          </template>
          <template #actions="{ model }">
            <div style="display:flex;justify-content:flex-end;gap:8px;">
              <FusionButton text="Cancel" variant="subtle" @click="closeEditor()" />
              <FusionButton text="Save" variant="solid" @click="saveInitials(model)" />
            </div>
          </template>
        </EditableFieldWrapper>
      </div>
      `}}},I={name:"Teleport / Text Input (Table)",parameters:{docs:{description:{story:`
**When to use:** Table cells, compact lists — anywhere inline editing would break the layout.

In teleport mode the editor card floats above the page, anchored to the cell that was clicked.
Use \`openTeleport(event)\` instead of \`startEditing()\` — the click event is needed to
calculate the popup position.

\`\`\`vue
<EditableFieldWrapper
  :ref="el => wrapperRefs[row.id] = el"
  mode="teleport"
  v-model="row.email"
>
  <template #read>
    <EditableDisplayField
      :text="row.email"
      variant="outline"
      @edit="wrapperRefs[row.id]?.openTeleport($event)"
    />
  </template>
  <template #edit="{ model }">
    <FusionTextInput v-model="model" label="Email" />
  </template>
  <template #actions="{ model }">
    <FusionButton text="Cancel" variant="subtle" @click="closeEditor()" />
    <FusionButton text="Save" variant="solid" @click="save(row.id, model)" />
  </template>
</EditableFieldWrapper>
\`\`\`
        `}}},render(){const e=a([{id:1,email:"john@doe.com"},{id:2,email:"jane@doe.com"},{id:3,email:"sam@doe.com"}]),o=[{label:"Email",key:"email",width:"220px"}];return{components:{FusionListView:N,EditableFieldWrapper:f,EditableDisplayField:F,FusionTextInput:A,FusionButton:b},setup(){const n=a({});function t(i,l){n.value[i]?.openTeleport?.(l)}function r(i,l){const s=e.value.find(c=>c.id===i);s&&(s.email=l),p()}return{rows:e,columns:o,wrapperRefs:n,openEditor:t,saveField:r,closeEditor:p}},template:`
      <FusionListView :columns="columns" :rows="rows" rowKey="id" showHeader>
        <template #cell-email="{ row }">
          <EditableFieldWrapper :ref="el => wrapperRefs[row.id] = el" mode="teleport" v-model="row.email">
            <template #read>
              <EditableDisplayField :text="row.email" variant="outline" @edit="openEditor(row.id, $event)" />
            </template>
            <template #edit="{ model }">
              <FusionTextInput v-model="model" label="Email" />
            </template>
            <template #actions="{ model }">
              <div style="display:flex;justify-content:flex-end;gap:8px;">
                <FusionButton text="Cancel" variant="subtle" @click="closeEditor()" />
                <FusionButton text="Save" variant="solid" @click="saveField(row.id, model)" />
              </div>
            </template>
          </EditableFieldWrapper>
        </template>
      </FusionListView>
      `}}},R={name:"Teleport / Text Area (Table)",parameters:{docs:{description:{story:`
**When to use:** Multi-line fields (notes, descriptions) inside a table — same teleport
pattern as Text Input but with \`FusionTextArea\` in the edit slot.

\`\`\`vue
<template #edit="{ model }">
  <FusionTextArea
    v-model="model"
    label="Notes"
    placeholder="Add a note..."
    variant="outline"
  />
</template>
\`\`\`
        `}}},render(){const e=a([{id:1,notes:"Needs follow-up after the Q2 review."},{id:2,notes:"Reached out via email, awaiting response."},{id:3,notes:""}]),o=[{label:"Notes",key:"notes",width:"280px"}];return{components:{FusionListView:N,EditableFieldWrapper:f,EditableDisplayField:F,FusionTextArea:$,FusionButton:b},setup(){const n=a({});function t(i,l){n.value[i]?.openTeleport?.(l)}function r(i,l){const s=e.value.find(c=>c.id===i);s&&(s.notes=l),p()}return{rows:e,columns:o,wrapperRefs:n,openEditor:t,saveField:r,closeEditor:p}},template:`
      <FusionListView :columns="columns" :rows="rows" rowKey="id" showHeader>
        <template #cell-notes="{ row }">
          <EditableFieldWrapper :ref="el => wrapperRefs[row.id] = el" mode="teleport" v-model="row.notes">
            <template #read>
              <EditableDisplayField :text="row.notes || 'Add a note...'" variant="outline" @edit="openEditor(row.id, $event)" />
            </template>
            <template #edit="{ model }">
              <FusionTextArea v-model="model" label="Notes" placeholder="Add a note..." variant="outline" />
            </template>
            <template #actions="{ model }">
              <div style="display:flex;justify-content:flex-end;gap:8px;">
                <FusionButton text="Cancel" variant="subtle" @click="closeEditor()" />
                <FusionButton text="Save" variant="solid" @click="saveField(row.id, model)" />
              </div>
            </template>
          </EditableFieldWrapper>
        </template>
      </FusionListView>
      `}}},S={name:"Teleport / Autocomplete (Table)",parameters:{docs:{description:{story:`
**When to use:** Dropdown fields inside a table — roles, status, tags.

Combine \`mode="teleport"\` with \`:disableOutsideClose="true"\`.
Both are required when the edit slot contains a dropdown component.

\`\`\`vue
<EditableFieldWrapper
  mode="teleport"
  :disableOutsideClose="true"
  v-model="row.role"
>
\`\`\`
        `}}},render(){const e=a([{id:1,role:"Developer"},{id:2,role:"Designer"}]),o=[{label:"Role",key:"role",width:"200px"}],n=[{label:"Developer",value:"Developer"},{label:"Designer",value:"Designer"},{label:"Product Manager",value:"PM"}];return{components:{FusionListView:N,EditableFieldWrapper:f,EditableDisplayField:F,FusionAutocomplete:P,FusionButton:b},setup(){const t=a({}),r=a(null);function i(s,c){r.value=e.value.find(x=>x.id===s)?.role||null,t.value[s]?.openTeleport?.(c)}function l(s){const c=e.value.find(x=>x.id===s);c&&r.value&&(c.role=r.value),p()}return{rows:e,columns:o,options:n,selected:r,wrapperRefs:t,openEditor:i,saveField:l,closeEditor:p}},template:`
      <FusionListView :columns="columns" :rows="rows" rowKey="id" showHeader>
        <template #cell-role="{ row }">
          <EditableFieldWrapper :ref="el => wrapperRefs[row.id] = el" mode="teleport" v-model="row.role" :disableOutsideClose="true">
            <template #read>
              <EditableDisplayField :text="row.role" variant="outline" @edit="openEditor(row.id, $event)" />
            </template>
            <template #edit>
              <FusionAutocomplete v-model="selected" :options="options" label="Role" variant="button" formWrapperWidth="100%" />
            </template>
            <template #actions>
              <div style="display:flex;justify-content:flex-end;gap:8px;">
                <FusionButton text="Cancel" variant="subtle" @click="closeEditor()" />
                <FusionButton text="Save" variant="solid" @click="saveField(row.id)" />
              </div>
            </template>
          </EditableFieldWrapper>
        </template>
      </FusionListView>
      `}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  name: "Inline / Text Input",
  parameters: {
    docs: {
      description: {
        story: \`
**When to use:** Single-line fields like name, email, title, phone number.

The \\\`#edit\\\` slot receives a reactive \\\`model\\\` object via slot props.
Bind your input to \\\`model\\\` — it holds a safe clone of \\\`modelValue\\\`.
When the user saves, pass \\\`model\\\` back to the parent to commit.

\\\`\\\`\\\`vue
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
    <FusionTextInput v-model="model" label="Full Name" formWrapperWidth="100%" />
  </template>

  <template #actions="{ model }">
    <FusionButton text="Cancel" variant="subtle" @click="closeEditor()" />
    <FusionButton text="Save" variant="solid" @click="save(model)" />
  </template>
</EditableFieldWrapper>
\\\`\\\`\\\`
        \`
      }
    }
  },
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
            <EditableDisplayField label="Full Name" :text="fullName" variant="ghost" @edit="wrapperRef.startEditing()" />
          </template>
          <template #edit="{ model }">
            <FusionTextInput v-model="model" label="Full Name" formWrapperWidth="100%" />
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
}`,...g.parameters?.docs?.source}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  name: "Inline / Text Area",
  parameters: {
    docs: {
      description: {
        story: \`
**When to use:** Multi-line fields — descriptions, notes, bios, messages, comments.

Swap \\\`FusionTextInput\\\` for \\\`FusionTextArea\\\` in the \\\`#edit\\\` slot.
Everything else is identical.

\\\`\\\`\\\`vue
<EditableFieldWrapper ref="wrapperRef" v-model="description">
  <template #read>
    <EditableDisplayField
      label="Description"
      :text="description"
      variant="ghost"
      @edit="wrapperRef.startEditing()"
    />
  </template>

  <template #edit="{ model }">
    <!-- Use FusionTextArea instead of FusionTextInput -->
    <FusionTextArea
      v-model="model"
      label="Description"
      placeholder="Type your description..."
      variant="outline"
    />
  </template>

  <template #actions="{ model }">
    <FusionButton text="Cancel" variant="subtle" @click="closeEditor()" />
    <FusionButton text="Save" variant="solid" @click="save(model)" />
  </template>
</EditableFieldWrapper>
\\\`\\\`\\\`
        \`
      }
    }
  },
  render() {
    const description = ref("This channel is for backend engineering discussions, deploys, and incidents.");
    const wrapperRef = ref<any>(null);
    function save(value: string) {
      description.value = value;
      closeEditor();
    }
    return {
      components: {
        EditableFieldWrapper,
        EditableDisplayField,
        FusionTextArea,
        FusionButton
      },
      setup() {
        return {
          description,
          wrapperRef,
          save,
          closeEditor
        };
      },
      template: \`
      <div style="max-width:420px;padding:20px;">
        <EditableFieldWrapper ref="wrapperRef" v-model="description">
          <template #read>
            <EditableDisplayField label="Description" :text="description" variant="ghost" @edit="wrapperRef.startEditing()" />
          </template>
          <template #edit="{ model }">
            <FusionTextArea
              v-model="model"
              label="Description"
              placeholder="Type your description..."
              variant="outline"
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
}`,...T.parameters?.docs?.source}}};W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
  name: "Inline / Autocomplete",
  parameters: {
    docs: {
      description: {
        story: \`
**When to use:** Searchable single-select fields — roles, status, assignee, category.

> ⚠️ **Always add \\\`:disableOutsideClose="true"\\\`** when using Autocomplete, Select, or any dropdown
> in the edit slot. Without it, clicking a dropdown option triggers an outside-click and closes
> the editor before the selection is registered.

\\\`\\\`\\\`vue
<EditableFieldWrapper
  ref="wrapperRef"
  v-model="salutation"
  :disableOutsideClose="true"
>
  ...
</EditableFieldWrapper>
\\\`\\\`\\\`
        \`
      }
    }
  },
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
        <EditableFieldWrapper ref="wrapperRef" v-model="salutation" :disableOutsideClose="true">
          <template #read>
            <EditableDisplayField label="Salutation" :text="salutation" variant="ghost" @edit="wrapperRef.startEditing()" />
          </template>
          <template #edit>
            <FusionAutocomplete v-model="selectedSalutation" :options="options" label="Salutation" variant="button" formWrapperWidth="100%" />
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
}`,...W.parameters?.docs?.source}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  name: "Inline / With Avatar",
  parameters: {
    docs: {
      description: {
        story: \`
**When to use:** Owner, assignee, or any person field where showing a face adds context.

Pass \\\`avatarSrc\\\` and/or \\\`avatarName\\\` directly to \\\`EditableDisplayField\\\`.
The wrapper itself needs no changes.

| Props | Result |
|---|---|
| \\\`avatarSrc\\\` only | Shows photo |
| \\\`avatarName\\\` only | Shows initials |
| \\\`avatarSrc\\\` + \\\`avatarName\\\` | Shows photo, falls back to initials if image fails *(recommended)* |

\\\`\\\`\\\`vue
<EditableDisplayField
  label="Owner"
  :text="ownerName"
  variant="ghost"
  avatarSrc="https://cdn.example.com/avatars/john.jpg"
  avatarName="John Carter"
  @edit="wrapperRef.startEditing()"
/>
\\\`\\\`\\\`
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
      <div style="max-width:380px;padding:20px;display:flex;flex-direction:column;gap:16px;">
        <!-- Photo + initials fallback -->
        <EditableFieldWrapper ref="wrapperRefImg" v-model="fullName">
          <template #read>
            <EditableDisplayField label="Owner (photo + fallback)" :text="fullName" variant="ghost"
              avatarSrc="https://i.pravatar.cc/150?img=12" avatarName="John Carter"
              @edit="wrapperRefImg.startEditing()" />
          </template>
          <template #edit="{ model }">
            <FusionTextInput v-model="model" label="Owner" formWrapperWidth="100%" />
          </template>
          <template #actions="{ model }">
            <div style="display:flex;justify-content:flex-end;gap:8px;">
              <FusionButton text="Cancel" variant="subtle" @click="closeEditor()" />
              <FusionButton text="Save" variant="solid" @click="saveImg(model)" />
            </div>
          </template>
        </EditableFieldWrapper>

        <!-- Initials only -->
        <EditableFieldWrapper ref="wrapperRefInitials" v-model="fullNameInitials">
          <template #read>
            <EditableDisplayField label="Owner (initials only)" :text="fullNameInitials" variant="ghost"
              avatarName="John Carter" @edit="wrapperRefInitials.startEditing()" />
          </template>
          <template #edit="{ model }">
            <FusionTextInput v-model="model" label="Owner" formWrapperWidth="100%" />
          </template>
          <template #actions="{ model }">
            <div style="display:flex;justify-content:flex-end;gap:8px;">
              <FusionButton text="Cancel" variant="subtle" @click="closeEditor()" />
              <FusionButton text="Save" variant="solid" @click="saveInitials(model)" />
            </div>
          </template>
        </EditableFieldWrapper>
      </div>
      \`
    };
  }
}`,...k.parameters?.docs?.source}}};I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  name: "Teleport / Text Input (Table)",
  parameters: {
    docs: {
      description: {
        story: \`
**When to use:** Table cells, compact lists — anywhere inline editing would break the layout.

In teleport mode the editor card floats above the page, anchored to the cell that was clicked.
Use \\\`openTeleport(event)\\\` instead of \\\`startEditing()\\\` — the click event is needed to
calculate the popup position.

\\\`\\\`\\\`vue
<EditableFieldWrapper
  :ref="el => wrapperRefs[row.id] = el"
  mode="teleport"
  v-model="row.email"
>
  <template #read>
    <EditableDisplayField
      :text="row.email"
      variant="outline"
      @edit="wrapperRefs[row.id]?.openTeleport($event)"
    />
  </template>
  <template #edit="{ model }">
    <FusionTextInput v-model="model" label="Email" />
  </template>
  <template #actions="{ model }">
    <FusionButton text="Cancel" variant="subtle" @click="closeEditor()" />
    <FusionButton text="Save" variant="solid" @click="save(row.id, model)" />
  </template>
</EditableFieldWrapper>
\\\`\\\`\\\`
        \`
      }
    }
  },
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
          <EditableFieldWrapper :ref="el => wrapperRefs[row.id] = el" mode="teleport" v-model="row.email">
            <template #read>
              <EditableDisplayField :text="row.email" variant="outline" @edit="openEditor(row.id, $event)" />
            </template>
            <template #edit="{ model }">
              <FusionTextInput v-model="model" label="Email" />
            </template>
            <template #actions="{ model }">
              <div style="display:flex;justify-content:flex-end;gap:8px;">
                <FusionButton text="Cancel" variant="subtle" @click="closeEditor()" />
                <FusionButton text="Save" variant="solid" @click="saveField(row.id, model)" />
              </div>
            </template>
          </EditableFieldWrapper>
        </template>
      </FusionListView>
      \`
    };
  }
}`,...I.parameters?.docs?.source}}};R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  name: "Teleport / Text Area (Table)",
  parameters: {
    docs: {
      description: {
        story: \`
**When to use:** Multi-line fields (notes, descriptions) inside a table — same teleport
pattern as Text Input but with \\\`FusionTextArea\\\` in the edit slot.

\\\`\\\`\\\`vue
<template #edit="{ model }">
  <FusionTextArea
    v-model="model"
    label="Notes"
    placeholder="Add a note..."
    variant="outline"
  />
</template>
\\\`\\\`\\\`
        \`
      }
    }
  },
  render() {
    const rows = ref([{
      id: 1,
      notes: "Needs follow-up after the Q2 review."
    }, {
      id: 2,
      notes: "Reached out via email, awaiting response."
    }, {
      id: 3,
      notes: ""
    }]);
    const columns = [{
      label: "Notes",
      key: "notes",
      width: "280px"
    }];
    return {
      components: {
        FusionListView,
        EditableFieldWrapper,
        EditableDisplayField,
        FusionTextArea,
        FusionButton
      },
      setup() {
        const wrapperRefs = ref<Record<number, any>>({});
        function openEditor(id: number, event: MouseEvent) {
          wrapperRefs.value[id]?.openTeleport?.(event);
        }
        function saveField(id: number, value: string) {
          const row = rows.value.find(r => r.id === id);
          if (row) row.notes = value;
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
        <template #cell-notes="{ row }">
          <EditableFieldWrapper :ref="el => wrapperRefs[row.id] = el" mode="teleport" v-model="row.notes">
            <template #read>
              <EditableDisplayField :text="row.notes || 'Add a note...'" variant="outline" @edit="openEditor(row.id, $event)" />
            </template>
            <template #edit="{ model }">
              <FusionTextArea v-model="model" label="Notes" placeholder="Add a note..." variant="outline" />
            </template>
            <template #actions="{ model }">
              <div style="display:flex;justify-content:flex-end;gap:8px;">
                <FusionButton text="Cancel" variant="subtle" @click="closeEditor()" />
                <FusionButton text="Save" variant="solid" @click="saveField(row.id, model)" />
              </div>
            </template>
          </EditableFieldWrapper>
        </template>
      </FusionListView>
      \`
    };
  }
}`,...R.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  name: "Teleport / Autocomplete (Table)",
  parameters: {
    docs: {
      description: {
        story: \`
**When to use:** Dropdown fields inside a table — roles, status, tags.

Combine \\\`mode="teleport"\\\` with \\\`:disableOutsideClose="true"\\\`.
Both are required when the edit slot contains a dropdown component.

\\\`\\\`\\\`vue
<EditableFieldWrapper
  mode="teleport"
  :disableOutsideClose="true"
  v-model="row.role"
>
\\\`\\\`\\\`
        \`
      }
    }
  },
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
          <EditableFieldWrapper :ref="el => wrapperRefs[row.id] = el" mode="teleport" v-model="row.role" :disableOutsideClose="true">
            <template #read>
              <EditableDisplayField :text="row.role" variant="outline" @edit="openEditor(row.id, $event)" />
            </template>
            <template #edit>
              <FusionAutocomplete v-model="selected" :options="options" label="Role" variant="button" formWrapperWidth="100%" />
            </template>
            <template #actions>
              <div style="display:flex;justify-content:flex-end;gap:8px;">
                <FusionButton text="Cancel" variant="subtle" @click="closeEditor()" />
                <FusionButton text="Save" variant="solid" @click="saveField(row.id)" />
              </div>
            </template>
          </EditableFieldWrapper>
        </template>
      </FusionListView>
      \`
    };
  }
}`,...S.parameters?.docs?.source}}};const ke=["Inline_TextInput","Inline_TextArea","Inline_Autocomplete","Inline_WithAvatar","Teleport_TextInput_Table","Teleport_TextArea_Table","Teleport_Autocomplete_Table"];export{W as Inline_Autocomplete,T as Inline_TextArea,g as Inline_TextInput,k as Inline_WithAvatar,S as Teleport_Autocomplete_Table,R as Teleport_TextArea_Table,I as Teleport_TextInput_Table,ke as __namedExportsOrder,We as default};
