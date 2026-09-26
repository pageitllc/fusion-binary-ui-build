import{F as r}from"./FusionInfoCard-BFZLn-rM.js";import"./iframe-DQPhCJt3.js";import"./preload-helper-Ct5FWWRu.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const l={title:"Fusion/Data Display/FusionInfoCard",component:r,tags:["autodocs"],parameters:{layout:"padded",docs:{description:{component:`
The **FusionInfoCard** component is a full-width row card showing a visual (image or colored initial square), a title, and a description — the pattern used for pickers like "select a workspace" or "select an item from a list".

---

### Key Features
- **Visual**: an \`image\` URL, or a colored initial square auto-derived from \`title\` (override with \`initial\`/\`color\`)
- **Clickable** by default — renders as a \`<button>\` with hover/focus affordance and emits \`click\`; set \`clickable="false\`" for a static row
- **Actions slot** for a trailing control (e.g. a menu button) that doesn't trigger the card's own click

---

### Example Usage

\`\`\`vue
<script setup lang="ts">
import FusionInfoCard from "@/components/cards/FusionInfoCard.vue";
<\/script>

<template>
  <FusionInfoCard
    title="Tommy"
    description="tommy"
    color="#2563eb"
    @click="selectWorkspace('tommy')"
  />
</template>
\`\`\`
        `}}},argTypes:{title:{control:"text",description:"Main heading, and the source for the auto-derived initial"},description:{control:"text",description:"Supporting text under the title"},image:{control:"text",description:"Image URL for the visual — omit to show a colored initial square"},imageAlt:{control:"text"},initial:{control:"text",description:"Overrides the auto-derived initial (first letter of title)"},color:{control:"color",description:"Background color of the initial square"},clickable:{control:"boolean",description:"Renders as a button and emits click"}},decorators:[()=>({template:'<div style="max-width: 420px;"><story /></div>'})]},t={args:{title:"Tommy",description:"tommy",color:"#2563eb"}},e={args:{title:"Acme Studio",description:"acme-studio.skkido.com",image:"https://i.pravatar.cc/96?img=12"}},o={args:{title:"Tommy",description:"tommy",color:"#2563eb",clickable:!1}},i={render:()=>({components:{FusionInfoCard:r},setup(){return{items:[{title:"Tommy",description:"tommy",color:"#2563eb"},{title:"Acme Studio",description:"acme-studio",color:"#16a34a"},{title:"North Wind Co",description:"north-wind",color:"#d97706"}]}},template:`
      <div style="display: flex; flex-direction: column; gap: 8px;">
        <FusionInfoCard
          v-for="item in items"
          :key="item.title"
          v-bind="item"
        />
      </div>
    `})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    title: "Tommy",
    description: "tommy",
    color: "#2563eb"
  }
}`,...t.parameters?.docs?.source},description:{story:"Default — colored initial square, title, and description.",...t.parameters?.docs?.description}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    title: "Acme Studio",
    description: "acme-studio.skkido.com",
    image: "https://i.pravatar.cc/96?img=12"
  }
}`,...e.parameters?.docs?.source},description:{story:"With an image instead of an initial square.",...e.parameters?.docs?.description}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    title: "Tommy",
    description: "tommy",
    color: "#2563eb",
    clickable: false
  }
}`,...o.parameters?.docs?.source},description:{story:"Static, non-interactive row — no hover/focus affordance, no click emitted.",...o.parameters?.docs?.description}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      FusionInfoCard
    },
    setup() {
      const items = [{
        title: "Tommy",
        description: "tommy",
        color: "#2563eb"
      }, {
        title: "Acme Studio",
        description: "acme-studio",
        color: "#16a34a"
      }, {
        title: "North Wind Co",
        description: "north-wind",
        color: "#d97706"
      }];
      return {
        items
      };
    },
    template: \`
      <div style="display: flex; flex-direction: column; gap: 8px;">
        <FusionInfoCard
          v-for="item in items"
          :key="item.title"
          v-bind="item"
        />
      </div>
    \`
  })
}`,...i.parameters?.docs?.source},description:{story:"A list of cards, as used in a workspace picker.",...i.parameters?.docs?.description}}};const m=["Default","WithImage","NotClickable","List"];export{t as Default,i as List,o as NotClickable,e as WithImage,m as __namedExportsOrder,l as default};
