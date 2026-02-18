import{F as i}from"./FusionActionButton-DOSunp5G.js";import{c as s}from"./createLucideIcon-MAVkZFkt.js";import{E as r}from"./ellipsis-vertical-BjiTTk2z.js";import"./iframe-4anGkjM3.js";import"./preload-helper-Ct5FWWRu.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";/**
 * @license lucide-vue-next v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const a=s("funnel",[["path",{d:"M10 20a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341L21.74 4.67A1 1 0 0 0 21 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14z",key:"sc7q7i"}]]);/**
 * @license lucide-vue-next v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const c=s("plus",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]]);/**
 * @license lucide-vue-next v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const l=s("refresh-ccw",[["path",{d:"M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"14sxne"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}],["path",{d:"M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16",key:"1hlbsb"}],["path",{d:"M16 16h5v5",key:"ccwih5"}]]),b={title:"Components/ActionButton",component:i,tags:["autodocs"],parameters:{docs:{description:{component:`
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
        `}}},argTypes:{size:{control:"select",options:["sm","md","lg"],description:"Size of the action button"},variant:{control:"select",options:["solid","subtle","outline","ghost","danger"],description:"Visual style of the button"},tooltip:{control:"text",description:"Optional tooltip text shown on hover"},icon:{control:"object",description:"Lucide (or any) icon component to display inside"},disabled:{control:"boolean"},loading:{control:"boolean"}}},o={args:{icon:a,tooltip:"Filter",variant:"subtle",size:"md"}},t={args:{icon:c,tooltip:"Add new item",variant:"solid",size:"md"}},e={args:{icon:r,tooltip:"More actions",variant:"ghost",size:"md"}},n={args:{icon:l,variant:"subtle",size:"md"}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...n.parameters?.docs?.source}}};const v=["IconButton","AddButton","MoreButton","RefreshButton"];export{t as AddButton,o as IconButton,e as MoreButton,n as RefreshButton,v as __namedExportsOrder,b as default};
