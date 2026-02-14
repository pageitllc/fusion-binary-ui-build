import{s as T,r as c,c as $,m as L,q as W,o as N,a as h,g as r,d as R,y as F,b as j,w as V,x as q,T as U,j as u,f as b,n as J,l as z,t as M,i as _}from"./iframe-LVkgWH8l.js";import{_ as P}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{F as v}from"./FusionButton-DRIYy3ox.js";import"./preload-helper-Ct5FWWRu.js";const I={key:0,class:"fu-filter-dropdown__header"},X={class:"fu-filter-dropdown__title"},Y={class:"fu-filter-dropdown__body"},G={class:"fu-filter-dropdown__footer"},k=T({__name:"FusionFilterDropdown",props:{align:{default:"left"},isOpen:{type:Boolean,default:void 0},payload:{},title:{default:""},width:{default:280},maxWidth:{default:360}},emits:["apply","cancel","open","close","update:isOpen"],setup(o,{emit:l}){const n=o,t=l,i=c(!1),p=c(null),s=c(null),C=c({top:"0px",left:"0px"}),O=$(()=>({width:typeof n.width=="number"?`${n.width}px`:n.width,maxWidth:typeof n.maxWidth=="number"?`${n.maxWidth}px`:n.maxWidth}));L(()=>n.isOpen,e=>{typeof e=="boolean"&&(i.value=e,e?(t("open"),_(x)):t("close"))});function B(e){e?.stopPropagation();const a=!i.value;a&&document.dispatchEvent(new CustomEvent("close-all-dropdowns")),i.value=a,t("update:isOpen",a),a?(t("open"),_(x)):t("close")}function S(){t("apply",n.payload),d()}function E(){t("cancel"),d()}function d(){i.value&&(i.value=!1,t("update:isOpen",!1),t("close"))}function x(){if(!p.value||!s.value)return;const e=p.value.getBoundingClientRect(),a=e.bottom+window.scrollY+8;let w=e.left+window.scrollX;n.align==="center"&&(w+=e.width/2-s.value.offsetWidth/2),n.align==="right"&&(w=e.right-s.value.offsetWidth+window.scrollX),C.value={position:"absolute",top:`${a}px`,left:`${w}px`,zIndex:2e3}}function A(e){i.value&&p.value&&!p.value.contains(e.target)&&s.value&&!s.value.contains(e.target)&&d()}function D(){d()}return W(()=>{document.addEventListener("click",A),document.addEventListener("close-all-dropdowns",D)}),N(()=>{document.removeEventListener("click",A),document.removeEventListener("close-all-dropdowns",D)}),(e,a)=>(u(),h("div",{class:"fu-filter-dropdown",ref_key:"dropdown",ref:p},[r("div",{class:"fu-filter-dropdown__trigger",onClick:B},[F(e.$slots,"trigger",{},void 0,!0)]),(u(),R(U,{to:"body"},[j(q,{name:"fade"},{default:V(()=>[i.value?(u(),h("div",{key:0,ref_key:"menuRef",ref:s,class:z(["fu-filter-dropdown__menu",[`fu-filter-dropdown__menu--${o.align}`]]),style:J([C.value,O.value])},[o.title?(u(),h("div",I,[r("span",X,M(o.title),1),r("button",{type:"button",class:"fu-filter-dropdown__close",onClick:d,"aria-label":"Close"}," × ")])):b("",!0),r("div",Y,[F(e.$slots,"content",{},void 0,!0)]),r("div",G,[F(e.$slots,"footer",{},()=>[r("button",{type:"button",class:"fu-btn fu-btn--outline",onClick:E}," Cancel "),r("button",{type:"button",class:"fu-btn fu-btn--primary",onClick:S}," Apply ")],!0)])],6)):b("",!0)]),_:3})]))],512))}}),y=P(k,[["__scopeId","data-v-338720a3"]]);k.__docgenInfo={exportName:"default",displayName:"FusionFilterDropdown",description:"",tags:{},props:[{name:"align",required:!1,type:{name:"union",elements:[{name:'"left"'},{name:'"center"'},{name:'"right"'}]},defaultValue:{func:!1,value:'"left"'}},{name:"isOpen",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"undefined"}},{name:"payload",required:!1,type:{name:"unknown"}},{name:"title",required:!1,type:{name:"string"},defaultValue:{func:!1,value:'""'}},{name:"width",required:!1,type:{name:"union",elements:[{name:"number"},{name:"string"}]},defaultValue:{func:!1,value:"280"}},{name:"maxWidth",required:!1,type:{name:"union",elements:[{name:"number"},{name:"string"}]},defaultValue:{func:!1,value:"360"}}],events:[{name:"apply",type:{names:["unknown"]}},{name:"cancel"},{name:"open"},{name:"close"},{name:"update:isOpen",type:{names:["boolean"]}}],slots:[{name:"trigger"},{name:"content"},{name:"footer"}],sourceFiles:["/Users/xavier/Documents/Websites/Skkido/Fusion-binary-ui/src/components/filterDropdown/FusionFilterDropdown.vue"]};const ee={title:"Components/FusionFilterDropdown",component:y,tags:["autodocs"],parameters:{docs:{description:{component:`
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
        `}}}},m={name:"Align Left",render:()=>({components:{FusionFilterDropdown:y,FusionButton:v},setup(){const o={alignment:"left"};function l(t){alert(`Apply
${JSON.stringify(t,null,2)}`)}function n(){alert("Cancel")}return{payload:o,onApply:l,onCancel:n}},template:`
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
    `})},f={name:"Align Center",render:()=>({components:{FusionFilterDropdown:y,FusionButton:v},setup(){const o={alignment:"center"};function l(t){alert(`Apply
${JSON.stringify(t,null,2)}`)}function n(){alert("Cancel")}return{payload:o,onApply:l,onCancel:n}},template:`
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
    `})},g={name:"Align Right",render:()=>({components:{FusionFilterDropdown:y,FusionButton:v},setup(){const o={alignment:"right"};function l(t){alert(`Apply
${JSON.stringify(t,null,2)}`)}function n(){alert("Cancel")}return{payload:o,onApply:l,onCancel:n}},template:`
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
    `})};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
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
}`,...f.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
}`,...g.parameters?.docs?.source}}};const ne=["AlignLeft","AlignCenter","AlignRight"];export{f as AlignCenter,m as AlignLeft,g as AlignRight,ne as __namedExportsOrder,ee as default};
