import{F as f}from"./FusionStatusDropdown-DuP42DBo.js";import{c as g}from"./createLucideIcon-DKFlsGA7.js";import{C as b}from"./circle-check-big-zFgBy0I7.js";import{C as S}from"./circle-x--tvJFhpb.js";import"./iframe-D3vfv6YP.js";import"./preload-helper-Ct5FWWRu.js";import"./chevron-down-CgrmphEu.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";/**
 * @license lucide-vue-next v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const y=g("circle-pause",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"10",x2:"10",y1:"15",y2:"9",key:"c1nkhi"}],["line",{x1:"14",x2:"14",y1:"15",y2:"9",key:"h65svq"}]]);/**
 * @license lucide-vue-next v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const h=g("circle-play",[["path",{d:"M9 9.003a1 1 0 0 1 1.517-.859l4.997 2.997a1 1 0 0 1 0 1.718l-4.997 2.997A1 1 0 0 1 9 14.996z",key:"kmsa83"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]]);/**
 * @license lucide-vue-next v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const v=g("clock",[["path",{d:"M12 6v6l4 2",key:"mmk7yg"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]]),B={title:"Components/FusionStatusDropdown",component:f,tags:["autodocs"],parameters:{docs:{description:{component:`
The **FusionStatusDropdown** component provides a flexible status selector supporting either:

- **Color-coded dots** (e.g. for project/task progress), or  
- **Icon indicators** (using Lucide icons or any Vue component).

It supports alignment control (\`left\`, \`center\`, \`right\`), optional label text, and two-way binding through \`v-model\`.

---

### \`disabled\` vs \`readonly\`

| | \`disabled\` | \`readonly\` |
|---|---|---|
| Shows current value | ✅ | ✅ |
| Can open menu | ❌ | ❌ |
| Visually dimmed | ✅ | ❌ |
| \`pointer-events: none\` | ✅ | ✅ |
| Chevron visible | ✅ (dimmed) | ❌ (hidden) |
| Cursor | \`not-allowed\` | \`default\` |

Use \`disabled\` when the field is unavailable. Use \`readonly\` when the value should be visible but not editable.

---

### Example Usage

\`\`\`vue
<template>
  <FusionStatusDropdown v-model="selected" :options="statusOptions" label="Task Status" />
  <FusionStatusDropdown v-model="selected" :options="statusOptions" disabled />
  <FusionStatusDropdown v-model="selected" :options="statusOptions" readonly />
</template>
\`\`\`
        `}}},argTypes:{modelValue:{control:"object",description:"Currently selected option (two-way bound with v-model)"},options:{control:"object",description:"Array of options: `{ label: string, color?: string, icon?: Component }`"},align:{control:"select",options:["left","center","right"],description:"Alignment of the dropdown relative to the button"},label:{control:"text",description:"Optional text label displayed above the dropdown"},disabled:{control:"boolean",description:"When `true`, the dropdown is fully non-interactive and visually dimmed."},readonly:{control:"boolean",description:"When `true`, the current value is displayed but the dropdown cannot be opened. The chevron is hidden. Unlike `disabled`, the field appearance remains normal."}}},e=[{label:"Not Started",color:"#9ca3af"},{label:"Planning",color:"#d97706"},{label:"In Progress",color:"#16a34a"},{label:"In Review",color:"#2563eb"},{label:"Completed",color:"#10b981"}],o=[{label:"Pending",icon:v},{label:"Active",icon:h},{label:"Paused",icon:y},{label:"Completed",icon:b},{label:"Cancelled",icon:S}],a=[{label:"Draft",color:"#9ca3af"},{label:"In Progress",icon:h},{label:"Paused",icon:y},{label:"Completed",icon:b}],s={args:{modelValue:e[2],options:e,align:"left",label:"Task Status"}},n={args:{modelValue:e[2],options:e,align:"left",label:"Task Status",disabled:!0}},t={args:{modelValue:null,options:e,align:"left",label:"Task Status",disabled:!0}},r={args:{modelValue:e[3],options:e,align:"left",label:"Task Status",readonly:!0}},l={args:{modelValue:null,options:e,align:"left",label:"Task Status",readonly:!0}},i={args:{modelValue:o[1],options:o,align:"center",label:"Workflow State"}},d={args:{modelValue:o[1],options:o,align:"center",label:"Workflow State",disabled:!0}},c={args:{modelValue:o[3],options:o,align:"center",label:"Workflow State",readonly:!0}},p={args:{modelValue:a[0],options:a,align:"right",label:"Project Phase"}},u={args:{modelValue:a[1],options:a,align:"right",label:"Project Phase",disabled:!0}},m={args:{modelValue:a[2],options:a,align:"right",label:"Project Phase",readonly:!0}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    modelValue: colorOptions[2],
    options: colorOptions,
    align: "left",
    label: "Task Status"
  }
}`,...s.parameters?.docs?.source},description:{story:"Default color-dot dropdown — interactive, left-aligned.",...s.parameters?.docs?.description}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    modelValue: colorOptions[2],
    options: colorOptions,
    align: "left",
    label: "Task Status",
    disabled: true
  }
}`,...n.parameters?.docs?.source},description:{story:`Disabled state — visually dimmed, fully non-interactive.
Use when the field is unavailable (e.g. insufficient permissions).`,...n.parameters?.docs?.description}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    modelValue: null,
    options: colorOptions,
    align: "left",
    label: "Task Status",
    disabled: true
  }
}`,...t.parameters?.docs?.source},description:{story:"Disabled with no selection — shows placeholder rendering in a disabled state.",...t.parameters?.docs?.description}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    modelValue: colorOptions[3],
    options: colorOptions,
    align: "left",
    label: "Task Status",
    readonly: true
  }
}`,...r.parameters?.docs?.source},description:{story:`Readonly state — value is visible and normal-looking, but the menu cannot be opened.
The chevron is hidden to signal non-interactivity without the dimmed appearance.`,...r.parameters?.docs?.description}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    modelValue: null,
    options: colorOptions,
    align: "left",
    label: "Task Status",
    readonly: true
  }
}`,...l.parameters?.docs?.source},description:{story:"Readonly with no selection — shows placeholder rendering in a readonly state.",...l.parameters?.docs?.description}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    modelValue: iconOptions[1],
    options: iconOptions,
    align: "center",
    label: "Workflow State"
  }
}`,...i.parameters?.docs?.source},description:{story:"Icon-based dropdown — interactive, center-aligned.",...i.parameters?.docs?.description}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    modelValue: iconOptions[1],
    options: iconOptions,
    align: "center",
    label: "Workflow State",
    disabled: true
  }
}`,...d.parameters?.docs?.source},description:{story:"Icon-based, disabled.",...d.parameters?.docs?.description}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    modelValue: iconOptions[3],
    options: iconOptions,
    align: "center",
    label: "Workflow State",
    readonly: true
  }
}`,...c.parameters?.docs?.source},description:{story:"Icon-based, readonly.",...c.parameters?.docs?.description}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    modelValue: mixedOptions[0],
    options: mixedOptions,
    align: "right",
    label: "Project Phase"
  }
}`,...p.parameters?.docs?.source},description:{story:"Mixed color + icon options, right-aligned.",...p.parameters?.docs?.description}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    modelValue: mixedOptions[1],
    options: mixedOptions,
    align: "right",
    label: "Project Phase",
    disabled: true
  }
}`,...u.parameters?.docs?.source},description:{story:"Mixed, disabled.",...u.parameters?.docs?.description}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    modelValue: mixedOptions[2],
    options: mixedOptions,
    align: "right",
    label: "Project Phase",
    readonly: true
  }
}`,...m.parameters?.docs?.source},description:{story:"Mixed, readonly.",...m.parameters?.docs?.description}}};const I=["ColorBased","ColorBasedDisabled","ColorBasedDisabledEmpty","ColorBasedReadonly","ColorBasedReadonlyEmpty","IconBased","IconBasedDisabled","IconBasedReadonly","Mixed","MixedDisabled","MixedReadonly"];export{s as ColorBased,n as ColorBasedDisabled,t as ColorBasedDisabledEmpty,r as ColorBasedReadonly,l as ColorBasedReadonlyEmpty,i as IconBased,d as IconBasedDisabled,c as IconBasedReadonly,p as Mixed,u as MixedDisabled,m as MixedReadonly,I as __namedExportsOrder,B as default};
