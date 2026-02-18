import{s as h,a as x,y as B,l as C,j as v,k as S,t as F}from"./iframe-4anGkjM3.js";import{_ as P}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./preload-helper-Ct5FWWRu.js";const p=h({__name:"FusionBadge",props:{text:{default:"Badge"},size:{default:"md"},variant:{default:"solid"},themeClass:{default:""}},setup(e){return(b,D)=>(v(),x("span",{class:C(["fu-badge",[`fu-badge--${e.variant}`,`fu-badge--${e.size}`,e.themeClass]])},[B(b.$slots,"default",{},()=>[S(F(e.text),1)],!0)],2))}}),f=P(p,[["__scopeId","data-v-3281b175"]]);p.__docgenInfo={exportName:"default",displayName:"FusionBadge",description:"",tags:{},props:[{name:"text",required:!1,type:{name:"string"},defaultValue:{func:!1,value:'"Badge"'}},{name:"size",required:!1,type:{name:"union",elements:[{name:'"sm"'},{name:'"md"'},{name:'"lg"'}]},defaultValue:{func:!1,value:'"md"'}},{name:"variant",required:!1,type:{name:"union",elements:[{name:'"solid"'},{name:'"subtle"'},{name:'"outline"'},{name:'"ghost"'}]},defaultValue:{func:!1,value:'"solid"'}},{name:"themeClass",description:`Theme color class e.g. 
"fu-badge--success" | "fu-badge--warning" | "fu-badge--published"`,required:!1,type:{name:"string"},defaultValue:{func:!1,value:'""'}}],slots:[{name:"default"}],sourceFiles:["/Users/xavier/Documents/Websites/Skkido/Fusion-binary-ui/src/components/badge/FusionBadge.vue"]};const T={title:"Components/Badge",component:f,tags:["autodocs"],argTypes:{variant:{control:"select",options:["solid","subtle","outline","ghost"],description:"Badge visual style"},size:{control:"select",options:["sm","md","lg"],description:"Badge size"},text:{control:"text",description:"Badge text content"},themeClass:{control:"text",description:"Theme class, e.g. 'fu-badge--success' or 'fu-badge--published'"}},parameters:{docs:{description:{component:'\n### FusionBadge\nA flexible badge component used for statuses, labels, and highlights across the app.\n\n**Available Variants:**\n- `solid`, `subtle`, `outline`, `ghost`\n\n**Available Theme Classes:**\n- Core: `fu-badge--success`, `fu-badge--danger`, `fu-badge--warning`, `fu-badge--info`\n- Booking/Page: `fu-badge--published`, `fu-badge--draft`, `fu-badge--public`, `fu-badge--private`\n\n```vue\n<FusionBadge text="Published" themeClass="fu-badge--published" />\n<FusionBadge text="Draft" themeClass="fu-badge--draft" />\n```\n        '}}}},a={args:{text:"Solid",variant:"solid"}},s={args:{text:"Subtle",variant:"subtle"}},t={args:{text:"Outline",variant:"outline"}},r={args:{text:"Ghost",variant:"ghost"}},n={args:{text:"Success",themeClass:"fu-badge--success"}},o={args:{text:"Danger",themeClass:"fu-badge--danger"}},d={args:{text:"Warning",themeClass:"fu-badge--warning"}},u={args:{text:"Info",themeClass:"fu-badge--info"}},i={args:{text:"Published",themeClass:"fu-badge--published"}},l={args:{text:"Draft",themeClass:"fu-badge--draft"}},g={args:{text:"Public",themeClass:"fu-badge--public"}},c={args:{text:"Private",themeClass:"fu-badge--private"}},m={render:()=>({components:{FusionBadge:f},template:`
      <div class="story-grid">
        <FusionBadge text="Success" themeClass="fu-badge--success" />
        <FusionBadge text="Danger" themeClass="fu-badge--danger" />
        <FusionBadge text="Warning" themeClass="fu-badge--warning" />
        <FusionBadge text="Info" themeClass="fu-badge--info" />

        <FusionBadge text="Published" themeClass="fu-badge--published" />
        <FusionBadge text="Draft" themeClass="fu-badge--draft" />
        <FusionBadge text="Public" themeClass="fu-badge--public" />
        <FusionBadge text="Private" themeClass="fu-badge--private" />
      </div>
    `})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    text: "Solid",
    variant: "solid"
  }
}`,...a.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    text: "Subtle",
    variant: "subtle"
  }
}`,...s.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    text: "Outline",
    variant: "outline"
  }
}`,...t.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    text: "Ghost",
    variant: "ghost"
  }
}`,...r.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    text: "Success",
    themeClass: "fu-badge--success"
  }
}`,...n.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    text: "Danger",
    themeClass: "fu-badge--danger"
  }
}`,...o.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    text: "Warning",
    themeClass: "fu-badge--warning"
  }
}`,...d.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    text: "Info",
    themeClass: "fu-badge--info"
  }
}`,...u.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    text: "Published",
    themeClass: "fu-badge--published"
  }
}`,...i.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    text: "Draft",
    themeClass: "fu-badge--draft"
  }
}`,...l.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    text: "Public",
    themeClass: "fu-badge--public"
  }
}`,...g.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    text: "Private",
    themeClass: "fu-badge--private"
  }
}`,...c.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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

        <FusionBadge text="Published" themeClass="fu-badge--published" />
        <FusionBadge text="Draft" themeClass="fu-badge--draft" />
        <FusionBadge text="Public" themeClass="fu-badge--public" />
        <FusionBadge text="Private" themeClass="fu-badge--private" />
      </div>
    \`
  })
}`,...m.parameters?.docs?.source}}};const W=["Solid","Subtle","Outline","Ghost","SuccessBadge","DangerBadge","WarningBadge","InfoBadge","PublishedBadge","DraftBadge","PublicBadge","PrivateBadge","AllThemes"];export{m as AllThemes,o as DangerBadge,l as DraftBadge,r as Ghost,u as InfoBadge,t as Outline,c as PrivateBadge,g as PublicBadge,i as PublishedBadge,a as Solid,s as Subtle,n as SuccessBadge,d as WarningBadge,W as __namedExportsOrder,T as default};
