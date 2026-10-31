import{F as i}from"./FusionActionButton-C9R2n9bK.js";import{c as r}from"./createLucideIcon-B6nnLSzH.js";import{E as a}from"./ellipsis-vertical-CEBAfBr7.js";import{R as c}from"./refresh-ccw-x_2QNT5v.js";import{U as d}from"./users-DRmkBFYR.js";import"./iframe-BJCCdSEh.js";import"./preload-helper-Ct5FWWRu.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";/**
 * @license @lucide/vue v1.54.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const l={name:"funnel",size:24,node:[["path",{d:"M10 20a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341L21.74 4.67A1 1 0 0 0 21 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14z",key:"sc7q7i"}]],aliases:["filter"]},p=r(l);/**
 * @license @lucide/vue v1.54.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const u={name:"plus",size:24,node:[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]]},m=r(u),y={title:"Fusion/Buttons/FusionActionButton",component:i,tags:["autodocs"],parameters:{docs:{description:{component:`
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
        `}}},argTypes:{size:{control:"select",options:["sm","md","lg"],description:"Size of the action button"},variant:{control:"select",options:["solid","subtle","outline","ghost","danger"],description:"Visual style of the button"},tooltip:{control:"text",description:"Optional tooltip text shown on hover"},icon:{control:"object",description:"Lucide (or any) icon component to display inside"},disabled:{control:"boolean"},loading:{control:"boolean"}}},o={args:{icon:p,tooltip:"Filter",variant:"subtle",size:"md"}},t={render:()=>({components:{FusionActionButton:i},setup:()=>({Users:d}),template:`
      <div style="display:flex;gap:20px;padding:20px">
        <FusionActionButton :icon="Users" tooltip="Recipients" :badge="1" />
        <FusionActionButton :icon="Users" tooltip="Recipients" :badge="120" />
        <FusionActionButton :icon="Users" tooltip="Alerts" badge badgeTone="danger" />
        <FusionActionButton :icon="Users" tooltip="Nobody yet" :badge="0" />
      </div>`}),parameters:{docs:{description:{story:"`badge` puts a count (or `true` for a dot) on the button's corner, and hides itself for 0, empty or null. Counts above `badgeMax` (99) show as 99+. Screen readers hear the count."}}}},e={args:{icon:m,tooltip:"Add new item",variant:"solid",size:"md"}},n={args:{icon:a,tooltip:"More actions",variant:"ghost",size:"md"}},s={args:{icon:c,variant:"subtle",size:"md"}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    icon: Filter,
    tooltip: "Filter",
    variant: "subtle",
    size: "md"
  }
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      FusionActionButton
    },
    setup: () => ({
      Users
    }),
    template: \`
      <div style="display:flex;gap:20px;padding:20px">
        <FusionActionButton :icon="Users" tooltip="Recipients" :badge="1" />
        <FusionActionButton :icon="Users" tooltip="Recipients" :badge="120" />
        <FusionActionButton :icon="Users" tooltip="Alerts" badge badgeTone="danger" />
        <FusionActionButton :icon="Users" tooltip="Nobody yet" :badge="0" />
      </div>\`
  }),
  parameters: {
    docs: {
      description: {
        story: "\`badge\` puts a count (or \`true\` for a dot) on the button's corner, and hides itself for 0, empty or null. Counts above \`badgeMax\` (99) show as 99+. Screen readers hear the count."
      }
    }
  }
}`,...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    icon: Plus,
    tooltip: "Add new item",
    variant: "solid",
    size: "md"
  }
}`,...e.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    icon: MoreVertical,
    tooltip: "More actions",
    variant: "ghost",
    size: "md"
  }
}`,...n.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    icon: RefreshCcw,
    variant: "subtle",
    size: "md"
  }
}`,...s.parameters?.docs?.source}}};const z=["IconButton","WithBadge","AddButton","MoreButton","RefreshButton"];export{e as AddButton,o as IconButton,n as MoreButton,s as RefreshButton,t as WithBadge,z as __namedExportsOrder,y as default};
