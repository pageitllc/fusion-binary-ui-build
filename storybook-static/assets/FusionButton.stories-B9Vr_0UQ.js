import{F as u}from"./FusionButton-Dv3ry6EW.js";import{C as p}from"./check-Df0iNiTD.js";import"./iframe-DKpyqR87.js";import"./preload-helper-Ct5FWWRu.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./createLucideIcon-H_lQUGxs.js";const v={title:"Components/Button",component:u,tags:["autodocs"],argTypes:{text:{control:"text",description:"Button text (used when no default slot is provided)."},size:{control:"select",options:["sm","md","lg"],description:"Button size."},variant:{control:"select",options:["solid","subtle","outline","ghost","danger","success"],description:"Visual style of the button."},disabled:{control:"boolean",description:"Disables the button."},loading:{control:"boolean",description:"Shows a loading spinner and disables interaction."},loadingText:{control:"text",description:"Text displayed when loading is true."},tooltip:{control:"text",description:"Tooltip shown on hover."},icon:{control:"object",description:"Icon component to render before the text."},link:{control:"text",description:"If set, renders the button as an anchor tag."},target:{control:"select",options:["_parent","_blank"],description:"Target used when link is set."},buttonWidth:{control:"text",description:"Sets the width of the button wrapper. Accepts values like `100%`, `200px`, `fit-content`, etc.",table:{defaultValue:{summary:'""'}}},onClick:{action:"clicked",description:"Emitted when the button is clicked."}},parameters:{docs:{description:{component:`
The **FusionButton** component offers a consistent button element with variants, sizes, loading state, tooltips, and optional icons.

### Variants

- \`solid\`
- \`subtle\`
- \`outline\`
- \`ghost\`
- \`danger\`
- \`success\` (for positive actions like Won, Approved, Completed)

### ButtonWidth

You can control the width of the button wrapper using \`buttonWidth\`.

\`\`\`vue
<FusionButton text="Save" buttonWidth="100%" />
<FusionButton text="Next" buttonWidth="180px" />
<FusionButton text="Auto" buttonWidth="fit-content" />
\`\`\`
`}}}},t={args:{text:"Click Me",size:"md",variant:"solid"}},e={args:{text:"Confirm",icon:p,variant:"outline",size:"md"}},o={args:{text:"Hover me",variant:"subtle",tooltip:"This is a tooltip"}},s={args:{text:"Ghost Button",variant:"ghost"}},n={args:{text:"Delete",variant:"danger"}},r={args:{text:"Mark as Won",variant:"success",icon:p,size:"md"}},a={args:{text:"Submitting",loading:!0,loadingText:"Please wait..."}},i={args:{text:"Disabled",disabled:!0}},c={args:{text:"Visit Fusion",link:"https://fusionbinary.dev",target:"_blank"}},d={args:{text:"Fixed Width",variant:"solid",size:"md",buttonWidth:"200px"},parameters:{docs:{description:{story:"Demonstrates using the `buttonWidth` prop to control button wrapper width."}}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    text: "Click Me",
    size: "md",
    variant: "solid"
  }
}`,...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    text: "Confirm",
    icon: Check,
    variant: "outline",
    size: "md"
  }
}`,...e.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    text: "Hover me",
    variant: "subtle",
    tooltip: "This is a tooltip"
  }
}`,...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    text: "Ghost Button",
    variant: "ghost"
  }
}`,...s.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    text: "Delete",
    variant: "danger"
  }
}`,...n.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    text: "Mark as Won",
    variant: "success",
    icon: Check,
    size: "md"
  }
}`,...r.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    text: "Submitting",
    loading: true,
    loadingText: "Please wait..."
  }
}`,...a.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    text: "Disabled",
    disabled: true
  }
}`,...i.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    text: "Visit Fusion",
    link: "https://fusionbinary.dev",
    target: "_blank"
  }
}`,...c.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    text: "Fixed Width",
    variant: "solid",
    size: "md",
    buttonWidth: "200px"
  },
  parameters: {
    docs: {
      description: {
        story: "Demonstrates using the \`buttonWidth\` prop to control button wrapper width."
      }
    }
  }
}`,...d.parameters?.docs?.source}}};const k=["Solid","OutlineWithIcon","SubtleWithTooltip","Ghost","Danger","Success","Loading","Disabled","AsLink","FixedWidthButton"];export{c as AsLink,n as Danger,i as Disabled,d as FixedWidthButton,s as Ghost,a as Loading,e as OutlineWithIcon,t as Solid,o as SubtleWithTooltip,r as Success,k as __namedExportsOrder,v as default};
