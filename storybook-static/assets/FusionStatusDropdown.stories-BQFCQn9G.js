import{F as p}from"./FusionStatusDropdown-BAonsDQY.js";import{c as l}from"./createLucideIcon-MAVkZFkt.js";import{C as s}from"./circle-check-big-Cj8Wpp5q.js";import{C as d}from"./circle-x-DkYjwenm.js";import"./iframe-4anGkjM3.js";import"./preload-helper-Ct5FWWRu.js";import"./chevron-down-pi8uy0el.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";/**
 * @license lucide-vue-next v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const c=l("circle-pause",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"10",x2:"10",y1:"15",y2:"9",key:"c1nkhi"}],["line",{x1:"14",x2:"14",y1:"15",y2:"9",key:"h65svq"}]]);/**
 * @license lucide-vue-next v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const i=l("circle-play",[["path",{d:"M9 9.003a1 1 0 0 1 1.517-.859l4.997 2.997a1 1 0 0 1 0 1.718l-4.997 2.997A1 1 0 0 1 9 14.996z",key:"kmsa83"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]]);/**
 * @license lucide-vue-next v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const m=l("clock",[["path",{d:"M12 6v6l4 2",key:"mmk7yg"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]]),x={title:"Components/FusionStatusDropdown",component:p,tags:["autodocs"],parameters:{docs:{description:{component:`
The **FusionStatusDropdown** component provides a flexible status selector supporting either:

- **Color-coded dots** (e.g. for project/task progress), or  
- **Icon indicators** (using Lucide icons or any Vue component).

It supports alignment control (\`left\`, \`center\`, \`right\`), optional label text, and two-way binding through \`v-model\`.

---

### Example Usage (Color + Icon)

\`\`\`vue
<template>
  <FusionStatusDropdown
    v-model="selected"
    :options="statusOptions"
    align="left"
    label="Task Status"
  />
</template>

<script setup>
import { CheckCircle, Clock, XCircle } from "lucide-vue-next";
import FusionStatusDropdown from "@/components/status/FusionStatusDropdown.vue";

const statusOptions = [
  { label: "Pending", color: "#f59e0b" },
  { label: "Active", icon: PlayCircle },
  { label: "Paused", icon: PauseCircle },
  { label: "Completed", icon: CheckCircle },
  { label: "Cancelled", icon: XCircle },
];

const selected = ref(statusOptions[1]);
<\/script>
\`\`\`
        `}}},argTypes:{modelValue:{control:"object",description:"Currently selected option (two-way bound with v-model)"},options:{control:"object",description:"Array of options: `{ label: string, color?: string, icon?: Component }`"},align:{control:"select",options:["left","center","right"],description:"Alignment of the dropdown relative to the button"},label:{control:"text",description:"Optional text label displayed above the dropdown"}}},n=[{label:"Not Started",color:"#9ca3af"},{label:"Planning",color:"#d97706"},{label:"In Progress",color:"#16a34a"},{label:"In Review",color:"#2563eb"},{label:"Completed",color:"#10b981"}],o={args:{modelValue:n[2],options:n,align:"left",label:"Task Status"}},a=[{label:"Pending",icon:m},{label:"Active",icon:i},{label:"Paused",icon:c},{label:"Completed",icon:s},{label:"Cancelled",icon:d}],e={args:{modelValue:a[1],options:a,align:"center",label:"Workflow State"}},r=[{label:"Draft",color:"#9ca3af"},{label:"In Progress",icon:i},{label:"Paused",icon:c},{label:"Completed",icon:s}],t={args:{modelValue:r[0],options:r,align:"right",label:"Project Phase"}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    modelValue: colorOptions[2],
    options: colorOptions,
    align: "left",
    label: "Task Status"
  }
}`,...o.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    modelValue: iconOptions[1],
    options: iconOptions,
    align: "center",
    label: "Workflow State"
  }
}`,...e.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    modelValue: mixedOptions[0],
    options: mixedOptions,
    align: "right",
    label: "Project Phase"
  }
}`,...t.parameters?.docs?.source}}};const w=["ColorBased","IconBased","Mixed"];export{o as ColorBased,e as IconBased,t as Mixed,w as __namedExportsOrder,x as default};
