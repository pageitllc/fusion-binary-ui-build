import{s as E,r as s,c as J,m as L,q as $,o as N,a as x,g as f,d as R,y as C,b as y,w as j,x as z,T as q,j as g,f as b,n as M,l as P,t as V,u as I,i as k}from"./iframe-4anGkjM3.js";import{F as c}from"./FusionButton-DDWoq9Vu.js";import{F as X}from"./FusionActionButton-DOSunp5G.js";import{X as Y}from"./x-CRu_ipwL.js";import{_ as G}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{F as H}from"./FusionAutocomplete-o9jjGkFG.js";import"./preload-helper-Ct5FWWRu.js";import"./createLucideIcon-MAVkZFkt.js";import"./FusionTextInput-B7zbcKHf.js";const K={key:0,class:"fu-filter-dropdown__header"},Q={class:"fu-filter-dropdown__title"},Z={class:"fu-filter-dropdown__body"},ee={class:"fu-filter-dropdown__footer"},_=E({__name:"FusionFilterDropdown",props:{align:{default:"left"},isOpen:{type:Boolean,default:void 0},payload:{},title:{default:""},width:{default:280},maxWidth:{default:360}},emits:["apply","cancel","open","close","update:isOpen"],setup(o,{emit:l}){const e=o,n=l,a=s(!1),p=s(null),i=s(null),d=s({top:"0px",left:"0px"}),B=J(()=>({width:typeof e.width=="number"?`${e.width}px`:e.width,maxWidth:typeof e.maxWidth=="number"?`${e.maxWidth}px`:e.maxWidth}));L(()=>e.isOpen,t=>{typeof t=="boolean"&&(a.value=t,t?(n("open"),k(D)):n("close"))});function S(t){t?.stopPropagation();const r=!a.value;r&&document.dispatchEvent(new CustomEvent("close-all-dropdowns")),a.value=r,n("update:isOpen",r),r?(n("open"),k(D)):n("close")}function O(){n("apply",e.payload),u()}function T(){n("cancel"),u()}function u(){a.value&&(a.value=!1,n("update:isOpen",!1),n("close"))}function D(){if(!p.value||!i.value)return;const t=p.value.getBoundingClientRect(),r=t.bottom+window.scrollY+8;let A=t.left+window.scrollX;e.align==="center"&&(A+=t.width/2-i.value.offsetWidth/2),e.align==="right"&&(A=t.right-i.value.offsetWidth+window.scrollX),d.value={position:"absolute",top:`${r}px`,left:`${A}px`,zIndex:2e3}}function U(t){a.value&&p.value&&!p.value.contains(t.target)&&i.value&&!i.value.contains(t.target)&&u()}function W(){u()}return $(()=>{}),N(()=>{document.removeEventListener("click",U),document.removeEventListener("close-all-dropdowns",W)}),(t,r)=>(g(),x("div",{class:"fu-filter-dropdown",ref_key:"dropdown",ref:p},[f("div",{class:"fu-filter-dropdown__trigger",onClick:S},[C(t.$slots,"trigger",{},void 0,!0)]),(g(),R(q,{to:"body"},[y(z,{name:"fade"},{default:j(()=>[a.value?(g(),x("div",{key:0,ref_key:"menuRef",ref:i,class:P(["fu-filter-dropdown__menu",[`fu-filter-dropdown__menu--${o.align}`]]),style:M([d.value,B.value])},[o.title?(g(),x("div",K,[f("span",Q,V(o.title),1),y(X,{size:"sm",variant:"subtle",icon:I(Y),onClick:u},null,8,["icon"])])):b("",!0),f("div",Z,[C(t.$slots,"content",{},void 0,!0)]),f("div",ee,[C(t.$slots,"footer",{},()=>[y(c,{variant:"subtle",size:"sm",text:"Cancel",onClick:T}),y(c,{variant:"solid",size:"sm",text:"Apply",onClick:O})],!0)])],6)):b("",!0)]),_:3})]))],512))}}),m=G(_,[["__scopeId","data-v-6439f409"]]);_.__docgenInfo={exportName:"default",displayName:"FusionFilterDropdown",description:"",tags:{},props:[{name:"align",required:!1,type:{name:"union",elements:[{name:'"left"'},{name:'"center"'},{name:'"right"'}]},defaultValue:{func:!1,value:'"left"'}},{name:"isOpen",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"undefined"}},{name:"payload",required:!1,type:{name:"unknown"}},{name:"title",required:!1,type:{name:"string"},defaultValue:{func:!1,value:'""'}},{name:"width",required:!1,type:{name:"union",elements:[{name:"number"},{name:"string"}]},defaultValue:{func:!1,value:"280"}},{name:"maxWidth",required:!1,type:{name:"union",elements:[{name:"number"},{name:"string"}]},defaultValue:{func:!1,value:"360"}}],events:[{name:"apply",type:{names:["unknown"]}},{name:"cancel"},{name:"open"},{name:"close"},{name:"update:isOpen",type:{names:["boolean"]}}],slots:[{name:"trigger"},{name:"content"},{name:"footer"}],sourceFiles:["/Users/xavier/Documents/Websites/Skkido/Fusion-binary-ui/src/components/filterDropdown/FusionFilterDropdown.vue"]};const de={title:"Components/FusionFilterDropdown",component:m,tags:["autodocs"],parameters:{docs:{description:{component:`
The **FusionFilterDropdown** component provides a structured, teleported dropdown panel designed specifically for **filters and contextual controls**.

Unlike a simple menu, it introduces an explicit layout model — **Header → Body → Footer** — making it ideal for cases where users need to review or adjust criteria before applying changes.

This component is intentionally opinionated to promote clarity, consistency, and deliberate user actions.

---

### Features
- Works with **any trigger element** (button, icon, chip, etc.)
- Optional **header** with title and close button
- Fully custom **content slot** for filter UI or descriptive text
- Built-in **Apply / Cancel** actions (footer override supported)
- Explicit width control via props
- Teleported to \`body\` to avoid z-index and overflow issues
- Auto-closes on outside click
- Supports alignment: \`left\`, \`center\`, or \`right\`

---

### Props

| Prop | Type | Default | Description |
|------|------|----------|-------------|
| \`title\` | \`string\` | \`""\` | Optional header title |
| \`align\` | \`"left" \\| "center" \\| "right"\` | \`"left"\` | Dropdown alignment |
| \`width\` | \`number \\| string\` | \`280\` | Fixed dropdown width |
| \`maxWidth\` | \`number \\| string\` | \`360\` | Maximum dropdown width |
| \`payload\` | \`unknown\` | — | Data emitted when Apply is clicked |
| \`isOpen\` | \`boolean\` | — | (optional) External open state |

---

### Events

| Event | Payload | Description |
|------|--------|-------------|
| \`@apply\` | \`payload\` | Fired when Apply is clicked |
| \`@cancel\` | — | Fired when Cancel is clicked |
| \`@open\` | — | Dropdown opened |
| \`@close\` | — | Dropdown closed |
| \`@update:isOpen\` | \`boolean\` | Sync open state |

---

### Slots

| Slot | Description |
|------|--------------|
| \`trigger\` | Element that opens the dropdown |
| \`content\` | Main body content (filters, text, controls) |
| \`footer\` | (optional) Override default Apply / Cancel actions |

---

### Example Usage

\`\`\`vue
<script setup lang="ts">
import { ref } from "vue";
import FusionFilterDropdown from "@/components/filterDropdown/FusionFilterDropdown.vue";
import FusionButton from "@/components/button/FusionButton.vue";

const filters = ref({
  status: "active",
  owner: "me",
});

function applyFilters(payload: unknown) {
  console.log("Applied filters:", payload);
}
<\/script>

<template>
  <FusionFilterDropdown
    title="Filter content"
    :width="260"
    align="right"
    :payload="filters"
    @apply="applyFilters"
  >
    <template #trigger>
      <FusionButton text="Filters" />
    </template>

    <template #content>
      <div style="display:grid; gap:8px;">
        <strong>Status</strong>
        <span>Active</span>

        <strong>Owner</strong>
        <span>Assigned to me</span>
      </div>
    </template>
  </FusionFilterDropdown>
</template>
\`\`\`

---

### When to use this component

Use **FusionFilterDropdown** when:
- Filters should not apply immediately
- Users need explicit confirmation (Apply / Cancel)
- You want consistent filter structure across dashboards or tables

For simple action lists, use **DropdownMenu** instead.
        `}}}},h={name:"Align Left",render:()=>({components:{FusionFilterDropdown:m,FusionButton:c},setup(){const o={alignment:"left"};function l(n){alert(`Apply
${JSON.stringify(n,null,2)}`)}function e(){alert("Cancel")}return{payload:o,onApply:l,onCancel:e}},template:`
      <div style="padding:4rem; display:flex; justify-content:center;">
        <FusionFilterDropdown
          title="Left aligned filter"
          :width="260"
          align="left"
          :payload="payload"
          @apply="onApply"
          @cancel="onCancel"
        >
          <template #trigger>
            <FusionButton text="Filter (Left)" />
          </template>

          <template #content>
            <p>This dropdown is aligned to the left of the trigger.</p>
          </template>
        </FusionFilterDropdown>
      </div>
    `})},w={name:"Align Center",render:()=>({components:{FusionFilterDropdown:m,FusionButton:c},setup(){const o={alignment:"center"};function l(n){alert(`Apply
${JSON.stringify(n,null,2)}`)}function e(){alert("Cancel")}return{payload:o,onApply:l,onCancel:e}},template:`
      <div style="padding:4rem; display:flex; justify-content:center;">
        <FusionFilterDropdown
          title="Center aligned filter"
          :width="260"
          align="center"
          :payload="payload"
          @apply="onApply"
          @cancel="onCancel"
        >
          <template #trigger>
            <FusionButton text="Filter (Center)" />
          </template>

          <template #content>
            <p>This dropdown is centered relative to the trigger.</p>
          </template>
        </FusionFilterDropdown>
      </div>
    `})},F={name:"Align Right",render:()=>({components:{FusionFilterDropdown:m,FusionButton:c},setup(){const o={alignment:"right"};function l(n){alert(`Apply
${JSON.stringify(n,null,2)}`)}function e(){alert("Cancel")}return{payload:o,onApply:l,onCancel:e}},template:`
      <div style="padding:4rem; display:flex; justify-content:center;">
        <FusionFilterDropdown
          title="Right aligned filter"
          :width="260"
          align="right"
          :payload="payload"
          @apply="onApply"
          @cancel="onCancel"
        >
          <template #trigger>
            <FusionButton text="Filter (Right)" />
          </template>

          <template #content>
            <p>This dropdown is aligned to the right edge of the trigger.</p>
          </template>
        </FusionFilterDropdown>
      </div>
    `})},v={render:()=>({components:{FusionFilterDropdown:m,FusionButton:c,FusionAutocomplete:H},setup(){const o=s({user:null}),l=s(!1),e=[{id:1,label:"John Doe"},{id:2,label:"Jane Smith"},{id:3,label:"Michael Brown"},{id:4,label:"Emily Davis"},{id:5,label:"Daniel Wilson"},{id:6,label:"Sophia Taylor"},{id:7,label:"James Anderson"},{id:8,label:"Olivia Martinez"}],n=s([...e]);async function a(i){l.value=!0,await new Promise(d=>setTimeout(d,400)),i?n.value=e.filter(d=>d.label.toLowerCase().includes(i.toLowerCase())):n.value=[...e],l.value=!1}return{payload:o,options:n,loading:l,searchUsers:a,onApply:i=>{alert(JSON.stringify(i,null,2))}}},template:`
      <div style="padding:4rem; display:flex; justify-content:center;">
        <FusionFilterDropdown
          title="Filter with Autocomplete"
          :width="320"
          align="right"
          :payload="payload"
          @apply="onApply"
        >
          <template #trigger>
            <FusionButton text="Filter (Autocomplete)" />
          </template>

          <template #content>
            <div style="display:flex; flex-direction:column; gap:12px;">
              <strong>Assign User</strong>

              <div data-fu-ignore-close>
                <FusionAutocomplete
                  async
                  searchable
                  :options="options"
                  :loading="loading"
                  placeholder="Search users"
                  searchPlaceholder="Type to search..."
                  @search="searchUsers"
                />
              </div>
            </div>
          </template>
        </FusionFilterDropdown>
      </div>
    `})};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  name: "Align Left",
  render: () => ({
    components: {
      FusionFilterDropdown,
      FusionButton
    },
    setup() {
      const payload = {
        alignment: "left"
      };
      function onApply(payload: unknown) {
        alert(\`Apply\\n\${JSON.stringify(payload, null, 2)}\`);
      }
      function onCancel() {
        alert("Cancel");
      }
      return {
        payload,
        onApply,
        onCancel
      };
    },
    template: \`
      <div style="padding:4rem; display:flex; justify-content:center;">
        <FusionFilterDropdown
          title="Left aligned filter"
          :width="260"
          align="left"
          :payload="payload"
          @apply="onApply"
          @cancel="onCancel"
        >
          <template #trigger>
            <FusionButton text="Filter (Left)" />
          </template>

          <template #content>
            <p>This dropdown is aligned to the left of the trigger.</p>
          </template>
        </FusionFilterDropdown>
      </div>
    \`
  })
}`,...h.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  name: "Align Center",
  render: () => ({
    components: {
      FusionFilterDropdown,
      FusionButton
    },
    setup() {
      const payload = {
        alignment: "center"
      };
      function onApply(payload: unknown) {
        alert(\`Apply\\n\${JSON.stringify(payload, null, 2)}\`);
      }
      function onCancel() {
        alert("Cancel");
      }
      return {
        payload,
        onApply,
        onCancel
      };
    },
    template: \`
      <div style="padding:4rem; display:flex; justify-content:center;">
        <FusionFilterDropdown
          title="Center aligned filter"
          :width="260"
          align="center"
          :payload="payload"
          @apply="onApply"
          @cancel="onCancel"
        >
          <template #trigger>
            <FusionButton text="Filter (Center)" />
          </template>

          <template #content>
            <p>This dropdown is centered relative to the trigger.</p>
          </template>
        </FusionFilterDropdown>
      </div>
    \`
  })
}`,...w.parameters?.docs?.source}}};F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  name: "Align Right",
  render: () => ({
    components: {
      FusionFilterDropdown,
      FusionButton
    },
    setup() {
      const payload = {
        alignment: "right"
      };
      function onApply(payload: unknown) {
        alert(\`Apply\\n\${JSON.stringify(payload, null, 2)}\`);
      }
      function onCancel() {
        alert("Cancel");
      }
      return {
        payload,
        onApply,
        onCancel
      };
    },
    template: \`
      <div style="padding:4rem; display:flex; justify-content:center;">
        <FusionFilterDropdown
          title="Right aligned filter"
          :width="260"
          align="right"
          :payload="payload"
          @apply="onApply"
          @cancel="onCancel"
        >
          <template #trigger>
            <FusionButton text="Filter (Right)" />
          </template>

          <template #content>
            <p>This dropdown is aligned to the right edge of the trigger.</p>
          </template>
        </FusionFilterDropdown>
      </div>
    \`
  })
}`,...F.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      FusionFilterDropdown,
      FusionButton,
      FusionAutocomplete
    },
    setup() {
      const payload = ref({
        user: null
      });
      const loading = ref(false);
      const allUsers = [{
        id: 1,
        label: "John Doe"
      }, {
        id: 2,
        label: "Jane Smith"
      }, {
        id: 3,
        label: "Michael Brown"
      }, {
        id: 4,
        label: "Emily Davis"
      }, {
        id: 5,
        label: "Daniel Wilson"
      }, {
        id: 6,
        label: "Sophia Taylor"
      }, {
        id: 7,
        label: "James Anderson"
      }, {
        id: 8,
        label: "Olivia Martinez"
      }];
      const options = ref([...allUsers]);
      async function searchUsers(query: string) {
        loading.value = true;
        await new Promise(resolve => setTimeout(resolve, 400));
        if (!query) {
          options.value = [...allUsers];
        } else {
          options.value = allUsers.filter(u => u.label.toLowerCase().includes(query.toLowerCase()));
        }
        loading.value = false;
      }
      const onApply = (payload: unknown) => {
        alert(JSON.stringify(payload, null, 2));
      };
      return {
        payload,
        options,
        loading,
        searchUsers,
        onApply
      };
    },
    template: \`
      <div style="padding:4rem; display:flex; justify-content:center;">
        <FusionFilterDropdown
          title="Filter with Autocomplete"
          :width="320"
          align="right"
          :payload="payload"
          @apply="onApply"
        >
          <template #trigger>
            <FusionButton text="Filter (Autocomplete)" />
          </template>

          <template #content>
            <div style="display:flex; flex-direction:column; gap:12px;">
              <strong>Assign User</strong>

              <div data-fu-ignore-close>
                <FusionAutocomplete
                  async
                  searchable
                  :options="options"
                  :loading="loading"
                  placeholder="Search users"
                  searchPlaceholder="Type to search..."
                  @search="searchUsers"
                />
              </div>
            </div>
          </template>
        </FusionFilterDropdown>
      </div>
    \`
  })
}`,...v.parameters?.docs?.source}}};const ce=["AlignLeft","AlignCenter","AlignRight","WithAutocomplete"];export{w as AlignCenter,h as AlignLeft,F as AlignRight,v as WithAutocomplete,ce as __namedExportsOrder,de as default};
