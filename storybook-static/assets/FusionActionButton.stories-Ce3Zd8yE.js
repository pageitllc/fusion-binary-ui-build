import{F as i}from"./FusionActionButton-tr1hkM4H.js";import{P as r}from"./plus-D9zVjLWI.js";import{F as a}from"./funnel-CtVzjEYZ.js";import{E as c}from"./ellipsis-vertical-CemXSMKH.js";import{R as d}from"./refresh-ccw-xdMU3FVX.js";import{U as p}from"./users-Ct8QH-Oc.js";import"./iframe-Bit2fKoK.js";import"./preload-helper-Ct5FWWRu.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./createLucideIcon-xyDXa4T9.js";const A={title:"Fusion/Buttons/FusionActionButton",component:i,tags:["autodocs"],parameters:{docs:{description:{component:`
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
        `}}},argTypes:{size:{control:"select",options:["sm","md","lg"],description:"Size of the action button"},variant:{control:"select",options:["solid","subtle","outline","ghost","danger"],description:"Visual style of the button"},tooltip:{control:"text",description:"Optional tooltip text shown on hover"},icon:{control:"object",description:"Lucide (or any) icon component to display inside"},disabled:{control:"boolean"},loading:{control:"boolean"}}},o={args:{icon:a,tooltip:"Filter",variant:"subtle",size:"md"}},t={render:()=>({components:{FusionActionButton:i},setup:()=>({Users:p}),template:`
      <div style="display:flex;gap:20px;padding:20px">
        <FusionActionButton :icon="Users" tooltip="Recipients" :badge="1" />
        <FusionActionButton :icon="Users" tooltip="Recipients" :badge="120" />
        <FusionActionButton :icon="Users" tooltip="Alerts" badge badgeTone="danger" />
        <FusionActionButton :icon="Users" tooltip="Nobody yet" :badge="0" />
      </div>`}),parameters:{docs:{description:{story:"`badge` puts a count (or `true` for a dot) on the button's corner, and hides itself for 0, empty or null. Counts above `badgeMax` (99) show as 99+. Screen readers hear the count."}}}},e={args:{icon:r,tooltip:"Add new item",variant:"solid",size:"md"}},n={args:{icon:c,tooltip:"More actions",variant:"ghost",size:"md"}},s={args:{icon:d,variant:"subtle",size:"md"}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};const y=["IconButton","WithBadge","AddButton","MoreButton","RefreshButton"];export{e as AddButton,o as IconButton,n as MoreButton,s as RefreshButton,t as WithBadge,y as __namedExportsOrder,A as default};
