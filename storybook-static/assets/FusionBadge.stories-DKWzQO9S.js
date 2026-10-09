import{F as p}from"./FusionBadge-BgmdZv1V.js";import"./iframe-D7VSQkaL.js";import"./preload-helper-Ct5FWWRu.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const C={title:"Fusion/Data Display/FusionBadge",component:p,tags:["autodocs"],argTypes:{variant:{control:"select",options:["solid","subtle","outline","ghost"],description:"Badge visual style"},size:{control:"select",options:["sm","md","lg"],description:"Badge size"},text:{control:"text",description:"Badge text content"},themeClass:{control:"text",description:"Theme class, e.g. 'fu-badge--success' or 'fu-badge--published'"}},parameters:{docs:{description:{component:'\n### FusionBadge\nA flexible badge component used for statuses, labels, and highlights across the app.\n\n**Available Variants:**\n- `solid`, `subtle`, `outline`, `ghost`\n\n**Available Theme Classes:**\n- Core: `fu-badge--success`, `fu-badge--danger`, `fu-badge--warning`, `fu-badge--info`\n- Subtle: `fu-badge--danger-subtle`, `fu-badge--warning-subtle`\n- Booking/Page: `fu-badge--published`, `fu-badge--draft`, `fu-badge--public`, `fu-badge--private`\n\n```vue\n<FusionBadge text="Published" themeClass="fu-badge--published" />\n<FusionBadge text="Draft" themeClass="fu-badge--draft" />\n```\n        '}}}},e={args:{text:"Solid",variant:"solid"}},a={args:{text:"Subtle",variant:"subtle"}},s={args:{text:"Outline",variant:"outline"}},t={args:{text:"Ghost",variant:"ghost"}},r={args:{text:"Success",themeClass:"fu-badge--success"}},n={args:{text:"Danger",themeClass:"fu-badge--danger"}},o={args:{text:"Warning",themeClass:"fu-badge--warning"}},d={args:{text:"Info",themeClass:"fu-badge--info"}},u={args:{text:"2",themeClass:"fu-badge--danger-subtle"}},g={args:{text:"4",themeClass:"fu-badge--warning-subtle"}},i={args:{text:"Published",themeClass:"fu-badge--published"}},c={args:{text:"Draft",themeClass:"fu-badge--draft"}},l={args:{text:"Public",themeClass:"fu-badge--public"}},m={args:{text:"Private",themeClass:"fu-badge--private"}},b={render:()=>({components:{FusionBadge:p},template:`
      <div class="story-grid">
        <FusionBadge text="Success" themeClass="fu-badge--success" />
        <FusionBadge text="Danger" themeClass="fu-badge--danger" />
        <FusionBadge text="Warning" themeClass="fu-badge--warning" />
        <FusionBadge text="Info" themeClass="fu-badge--info" />

        <FusionBadge text="2" themeClass="fu-badge--danger-subtle" />
        <FusionBadge text="4" themeClass="fu-badge--warning-subtle" />

        <FusionBadge text="Published" themeClass="fu-badge--published" />
        <FusionBadge text="Draft" themeClass="fu-badge--draft" />
        <FusionBadge text="Public" themeClass="fu-badge--public" />
        <FusionBadge text="Private" themeClass="fu-badge--private" />
      </div>
    `})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    text: "Solid",
    variant: "solid"
  }
}`,...e.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    text: "Subtle",
    variant: "subtle"
  }
}`,...a.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    text: "Outline",
    variant: "outline"
  }
}`,...s.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    text: "Ghost",
    variant: "ghost"
  }
}`,...t.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    text: "Success",
    themeClass: "fu-badge--success"
  }
}`,...r.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    text: "Danger",
    themeClass: "fu-badge--danger"
  }
}`,...n.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    text: "Warning",
    themeClass: "fu-badge--warning"
  }
}`,...o.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    text: "Info",
    themeClass: "fu-badge--info"
  }
}`,...d.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    text: "2",
    themeClass: "fu-badge--danger-subtle"
  }
}`,...u.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    text: "4",
    themeClass: "fu-badge--warning-subtle"
  }
}`,...g.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    text: "Published",
    themeClass: "fu-badge--published"
  }
}`,...i.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    text: "Draft",
    themeClass: "fu-badge--draft"
  }
}`,...c.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    text: "Public",
    themeClass: "fu-badge--public"
  }
}`,...l.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    text: "Private",
    themeClass: "fu-badge--private"
  }
}`,...m.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      FusionBadge
    },
    template: \`
      <div class="story-grid">
        <FusionBadge text="Success" themeClass="fu-badge--success" />
        <FusionBadge text="Danger" themeClass="fu-badge--danger" />
        <FusionBadge text="Warning" themeClass="fu-badge--warning" />
        <FusionBadge text="Info" themeClass="fu-badge--info" />

        <FusionBadge text="2" themeClass="fu-badge--danger-subtle" />
        <FusionBadge text="4" themeClass="fu-badge--warning-subtle" />

        <FusionBadge text="Published" themeClass="fu-badge--published" />
        <FusionBadge text="Draft" themeClass="fu-badge--draft" />
        <FusionBadge text="Public" themeClass="fu-badge--public" />
        <FusionBadge text="Private" themeClass="fu-badge--private" />
      </div>
    \`
  })
}`,...b.parameters?.docs?.source}}};const S=["Solid","Subtle","Outline","Ghost","SuccessBadge","DangerBadge","WarningBadge","InfoBadge","DangerSubtleBadge","WarningSubtleBadge","PublishedBadge","DraftBadge","PublicBadge","PrivateBadge","AllThemes"];export{b as AllThemes,n as DangerBadge,u as DangerSubtleBadge,c as DraftBadge,t as Ghost,d as InfoBadge,s as Outline,m as PrivateBadge,l as PublicBadge,i as PublishedBadge,e as Solid,a as Subtle,r as SuccessBadge,o as WarningBadge,g as WarningSubtleBadge,S as __namedExportsOrder,C as default};
