import{F as i}from"./FusionActionButton-BT3uiOIB.js";import{c as s}from"./createLucideIcon-DU4KFhpq.js";import{E as a}from"./ellipsis-vertical-68dCxCkv.js";import{R as r}from"./refresh-ccw-C6PZQZ3K.js";import"./iframe-D7VSQkaL.js";import"./preload-helper-Ct5FWWRu.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";/**
 * @license @lucide/vue v1.54.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const c={name:"funnel",size:24,node:[["path",{d:"M10 20a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341L21.74 4.67A1 1 0 0 0 21 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14z",key:"sc7q7i"}]],aliases:["filter"]},l=s(c);/**
 * @license @lucide/vue v1.54.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const d={name:"plus",size:24,node:[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]]},p=s(d),z={title:"Fusion/Buttons/FusionActionButton",component:i,tags:["autodocs"],parameters:{docs:{description:{component:`
**FusionActionButton** is a compact, icon-only button component.  
Use it for contextual actions such as filter, add, or "more actions".

- Props are the same as \`FusionButton\`:
  - \`size\` → "sm" | "md" | "lg"
  - \`variant\` → "solid" | "subtle" | "outline" | "ghost" | "danger"
  - \`tooltip\` → optional hover tooltip
  - \`loading\` → show a spinner
  - \`disabled\` → disable the button
  - \`icon\` → pass a Lucide (or custom) icon component

- Emits:
  - \`click\` → when the button is clicked

Example usage:

\`\`\`vue
<FusionActionButton 
  :icon="Filter" 
  variant="subtle" 
  size="md" 
  tooltip="Filter results"
  @click="onFilterClick" 
/>
\`\`\`
        `}}},argTypes:{size:{control:"select",options:["sm","md","lg"],description:"Size of the action button"},variant:{control:"select",options:["solid","subtle","outline","ghost","danger"],description:"Visual style of the button"},tooltip:{control:"text",description:"Optional tooltip text shown on hover"},icon:{control:"object",description:"Lucide (or any) icon component to display inside"},disabled:{control:"boolean"},loading:{control:"boolean"}}},o={args:{icon:l,tooltip:"Filter",variant:"subtle",size:"md"}},t={args:{icon:p,tooltip:"Add new item",variant:"solid",size:"md"}},e={args:{icon:a,tooltip:"More actions",variant:"ghost",size:"md"}},n={args:{icon:r,variant:"subtle",size:"md"}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    icon: Filter,
    tooltip: "Filter",
    variant: "subtle",
    size: "md"
  }
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    icon: Plus,
    tooltip: "Add new item",
    variant: "solid",
    size: "md"
  }
}`,...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    icon: MoreVertical,
    tooltip: "More actions",
    variant: "ghost",
    size: "md"
  }
}`,...e.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    icon: RefreshCcw,
    variant: "subtle",
    size: "md"
  }
}`,...n.parameters?.docs?.source}}};const B=["IconButton","AddButton","MoreButton","RefreshButton"];export{t as AddButton,o as IconButton,e as MoreButton,n as RefreshButton,B as __namedExportsOrder,z as default};
