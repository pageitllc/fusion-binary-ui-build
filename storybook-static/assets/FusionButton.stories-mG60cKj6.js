import{F as d}from"./FusionButton-DDWoq9Vu.js";import{C as p}from"./check-DKZdV503.js";import"./iframe-4anGkjM3.js";import"./preload-helper-Ct5FWWRu.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./createLucideIcon-MAVkZFkt.js";const b={title:"Components/Button",component:d,tags:["autodocs"],argTypes:{text:{control:"text",description:"Button text (used when no default slot is provided)."},size:{control:"select",options:["sm","md","lg"],description:"Button size."},variant:{control:"select",options:["solid","subtle","outline","ghost","danger"],description:"Visual style of the button."},disabled:{control:"boolean",description:"Disables the button."},loading:{control:"boolean",description:"Shows a loading spinner and disables interaction."},loadingText:{control:"text",description:"Text displayed when loading is true."},tooltip:{control:"text",description:"Tooltip shown on hover."},icon:{control:"text",description:"Icon component to render before the text."},link:{control:"text",description:"If set, renders the button as an anchor tag."},target:{control:"select",options:["_parent","_blank"],description:"Target used when link is set."},buttonWidth:{control:"text",description:"Sets the width of the button wrapper. Accepts values like `100%`, `200px`, `fit-content`, etc.",table:{defaultValue:{summary:'""'}}},onClick:{action:"clicked",description:"Emitted when the button is clicked."}},parameters:{docs:{description:{component:`
The **FusionButton** component offers a consistent button element with variants, sizes, loading state, tooltips, and optional icons.

### ButtonWidth (New)

You can now control the width of the button's wrapper using \`buttonWidth\`.

Examples:
\`\`\`vue
<FusionButton text="Save" buttonWidth="100%" />
<FusionButton text="Next" buttonWidth="180px" />
<FusionButton text="Auto" buttonWidth="fit-content" />
\`\`\`
`}}}},t={args:{text:"Click Me",size:"md",variant:"solid"}},e={args:{text:"Confirm",icon:p,variant:"outline",size:"md"}},o={args:{text:"Hover me",variant:"subtle",tooltip:"This is a tooltip"}},n={args:{text:"Ghost Button",variant:"ghost"}},s={args:{text:"Delete",variant:"danger"}},r={args:{text:"Submitting",loading:!0,loadingText:"Please wait..."}},a={args:{text:"Disabled",disabled:!0}},i={args:{text:"Visit Fusion",link:"https://fusionbinary.dev",target:"_blank"}},c={args:{text:"Fixed Width",variant:"solid",size:"md",buttonWidth:"200px"},parameters:{docs:{description:{story:"Demonstrates using the new `buttonWidth` prop to control button wrapper width."}}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...o.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    text: "Ghost Button",
    variant: "ghost"
  }
}`,...n.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    text: "Delete",
    variant: "danger"
  }
}`,...s.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    text: "Submitting",
    loading: true,
    loadingText: "Please wait..."
  }
}`,...r.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    text: "Disabled",
    disabled: true
  }
}`,...a.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    text: "Visit Fusion",
    link: "https://fusionbinary.dev",
    target: "_blank"
  }
}`,...i.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    text: "Fixed Width",
    variant: "solid",
    size: "md",
    buttonWidth: "200px"
  },
  parameters: {
    docs: {
      description: {
        story: "Demonstrates using the new \`buttonWidth\` prop to control button wrapper width."
      }
    }
  }
}`,...c.parameters?.docs?.source}}};const v=["Solid","OutlineWithIcon","SubtleWithTooltip","Ghost","Danger","Loading","Disabled","AsLink","FixedWidthButton"];export{i as AsLink,s as Danger,a as Disabled,c as FixedWidthButton,n as Ghost,r as Loading,e as OutlineWithIcon,t as Solid,o as SubtleWithTooltip,v as __namedExportsOrder,b as default};
