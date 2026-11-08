import{F as e}from"./FuCard-Bf7YENEN.js";import{F as d}from"./FusionButton-DnybXJhl.js";import"./iframe-oXApuAUj.js";import"./preload-helper-Ct5FWWRu.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const u={title:"Fusion/Data Display/FuCard",component:e,tags:["autodocs"],parameters:{layout:"padded",docs:{description:{component:`
The **FuCard** component is the basic content surface: a rounded box with an optional small caps title and a free body slot. Use it as the shell for any block of content on a page.

---

### Key Features
- **Title**: optional small caps heading, with an \`actions\` slot on the right of the header
- **Theme aware**: background and border come from Fusion tokens, so it follows light and dark mode
- **Single border**: the card draws one border and nothing inside it adds another. Set \`bordered="false"\` when it sits inside another bordered surface
- **Flush**: removes body padding so list rows can run edge to edge
- **Clickable**: pass \`href\` to render a link, or \`clickable\` to render a button that emits \`click\`

---

### Example Usage

\`\`\`vue
<template>
  <FuCard title="Next call">
    <p>Thu 31 Oct, 10:00</p>
  </FuCard>
</template>
\`\`\`
        `}}},argTypes:{title:{control:"text",description:"Small caps heading at the top of the card"},bordered:{control:"boolean",description:"Draws the 1px Fusion border"},flush:{control:"boolean",description:"Removes the body padding"},href:{control:"text",description:"Renders the card as a link"},clickable:{control:"boolean",description:"Renders the card as a button and emits click"}},decorators:[()=>({template:'<div style="max-width: 420px;"><story /></div>'})]},t={render:s=>({components:{FuCard:e},setup:()=>({args:s}),template:`
      <FuCard v-bind="args">
        <p style="margin: 0;">Homepage feedback, 30 min with Mustafa.</p>
      </FuCard>
    `}),args:{title:"Next call"}},r={render:()=>({components:{FuCard:e},template:`
      <FuCard>
        <p style="margin: 0;">A card does not need a heading.</p>
      </FuCard>
    `})},a={render:()=>({components:{FuCard:e,FusionButton:d},template:`
      <FuCard title="Your team">
        <template #actions>
          <FusionButton text="View all" variant="ghost" size="sm" />
        </template>
        <p style="margin: 0;">Mustafa Omar and Rachel Amelia.</p>
      </FuCard>
    `})},n={render:()=>({components:{FuCard:e},template:`
      <FuCard title="Borderless" :bordered="false">
        <p style="margin: 0;">Background only, no outline.</p>
      </FuCard>
    `})},o={render:()=>({components:{FuCard:e},template:`
      <FuCard href="#" title="Open the files">
        <p style="margin: 0;">The entire card is clickable.</p>
      </FuCard>
    `})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => ({
    components: {
      FuCard
    },
    setup: () => ({
      args
    }),
    template: \`
      <FuCard v-bind="args">
        <p style="margin: 0;">Homepage feedback, 30 min with Mustafa.</p>
      </FuCard>
    \`
  }),
  args: {
    title: "Next call"
  }
}`,...t.parameters?.docs?.source},description:{story:"Default card with a title and body content.",...t.parameters?.docs?.description}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      FuCard
    },
    template: \`
      <FuCard>
        <p style="margin: 0;">A card does not need a heading.</p>
      </FuCard>
    \`
  })
}`,...r.parameters?.docs?.source},description:{story:"No title, body content only.",...r.parameters?.docs?.description}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      FuCard,
      FusionButton
    },
    template: \`
      <FuCard title="Your team">
        <template #actions>
          <FusionButton text="View all" variant="ghost" size="sm" />
        </template>
        <p style="margin: 0;">Mustafa Omar and Rachel Amelia.</p>
      </FuCard>
    \`
  })
}`,...a.parameters?.docs?.source},description:{story:"Actions slot places controls on the right of the header.",...a.parameters?.docs?.description}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      FuCard
    },
    template: \`
      <FuCard title="Borderless" :bordered="false">
        <p style="margin: 0;">Background only, no outline.</p>
      </FuCard>
    \`
  })
}`,...n.parameters?.docs?.source},description:{story:"Without a border, for use inside another bordered surface.",...n.parameters?.docs?.description}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      FuCard
    },
    template: \`
      <FuCard href="#" title="Open the files">
        <p style="margin: 0;">The entire card is clickable.</p>
      </FuCard>
    \`
  })
}`,...o.parameters?.docs?.source},description:{story:"Whole card is a link with a hover state.",...o.parameters?.docs?.description}}};const h=["Default","WithoutTitle","WithActions","NoBorder","AsLink"];export{o as AsLink,t as Default,n as NoBorder,a as WithActions,r as WithoutTitle,h as __namedExportsOrder,u as default};
