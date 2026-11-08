import{q as L,s as k,j as S,p as x,y as A,o as d,b as c,A as u,i as p,d as w,e as b,t as g,l as B}from"./iframe-oXApuAUj.js";import{_ as C}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{F as W}from"./FuCard-Bf7YENEN.js";import{F as h}from"./FusionButton-DnybXJhl.js";import{F as D}from"./FuAvatar-BHdXkO0m.js";import"./preload-helper-Ct5FWWRu.js";const O={key:0,class:"fu-list-row__leading"},M={class:"fu-list-row__body"},N={class:"fu-list-row__title"},q={key:0,class:"fu-list-row__subtitle"},v=L({__name:"FuListRow",props:{title:{},subtitle:{},divided:{type:Boolean,default:!0},href:{},clickable:{type:Boolean,default:!1}},emits:["click"],setup(e,{emit:F}){const m=e,y=F;function R(t){m.clickable&&!m.href&&y("click",t)}return(t,f)=>(d(),k(A(e.href?"a":e.clickable?"button":"div"),{class:x(["fu-list-row",{"fu-list-row--clickable":e.href||e.clickable,"fu-list-row--divided":e.divided}]),href:e.href||void 0,type:!e.href&&e.clickable?"button":void 0,onClick:R},{default:S(()=>[t.$slots.leading?(d(),c("div",O,[u(t.$slots,"leading",{},void 0,!0)])):p("",!0),w("div",M,[w("span",N,[u(t.$slots,"default",{},()=>[b(g(e.title),1)],!0)]),e.subtitle||t.$slots.subtitle?(d(),c("span",q,[u(t.$slots,"subtitle",{},()=>[b(g(e.subtitle),1)],!0)])):p("",!0)]),t.$slots.actions?(d(),c("div",{key:1,class:"fu-list-row__actions",onClick:f[0]||(f[0]=B(()=>{},["stop"]))},[u(t.$slots,"actions",{},void 0,!0)])):p("",!0)]),_:3},8,["class","href","type"]))}}),l=C(v,[["__scopeId","data-v-0e7965dc"]]);v.__docgenInfo={exportName:"default",displayName:"FuListRow",description:"",tags:{},props:[{name:"title",description:"Main line. Use the default slot instead for rich text (e.g. a bold name)",required:!1,type:{name:"string"}},{name:"subtitle",description:"Supporting line under the title. Use the `subtitle` slot for rich text",required:!1,type:{name:"string"}},{name:"divided",description:"Draws a divider above every row except the first. Off = no lines at all",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"true"}},{name:"href",description:"Renders the row as a link",required:!1,type:{name:"string"}},{name:"clickable",description:"Renders the row as a button and emits `click`",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}],events:[{name:"click",type:{names:["MouseEvent"]}}],slots:[{name:"leading"},{name:"default"},{name:"subtitle"},{name:"actions"}],sourceFiles:["/Users/xavier/Documents/Websites/Skkido/Fusion-binary-ui/src/components/items/list/FuListRow.vue"]};const z={title:"Fusion/Data Display/FuListRow",component:l,tags:["autodocs"],parameters:{layout:"padded",docs:{description:{component:`
The **FuListRow** component is a single row in a list: an optional leading element, a title with a supporting line, and an optional trailing action. One component covers task lists, activity feeds and people lists.

---

### Key Features
- **Leading slot**: a dot, an avatar or an icon
- **Title and subtitle**: pass plain text with \`title\` and \`subtitle\`, or use the default and \`subtitle\` slots for rich text such as a bold name
- **Actions slot**: trailing buttons, which do not trigger the row's own click
- **Dividers**: a line is drawn only between rows, never above the first or below the last. Set \`divided="false"\` for no lines
- **Clickable**: pass \`href\` or \`clickable\` for an interactive row

---

### Example Usage

\`\`\`vue
<template>
  <FuCard flush>
    <FuListRow title="Approve the homepage design" subtitle="Website redesign">
      <template #actions>
        <FusionButton text="Review" />
      </template>
    </FuListRow>
    <FuListRow title="Sign the retainer contract" subtitle="Ongoing support" />
  </FuCard>
</template>
\`\`\`
        `}}},argTypes:{title:{control:"text",description:"Main line"},subtitle:{control:"text",description:"Supporting line under the title"},divided:{control:"boolean",description:"Draws a divider between rows"},href:{control:"text",description:"Renders the row as a link"},clickable:{control:"boolean",description:"Renders the row as a button and emits click"}},decorators:[()=>({template:'<div style="max-width: 520px;"><story /></div>'})]},s={args:{title:"Approve the homepage design",subtitle:"Website redesign, shared by Mustafa yesterday"}},i={render:()=>({components:{FuListRow:l,FusionButton:h},template:`
      <FuListRow title="Sign the retainer contract" subtitle="Ongoing support, sent 28 Oct">
        <template #actions>
          <FusionButton text="Sign" />
        </template>
      </FuListRow>
    `})},n={render:()=>({components:{FuListRow:l,FuAvatar:D},template:`
      <FuListRow subtitle="Yesterday, Website redesign">
        <template #leading>
          <FuAvatar name="Mustafa Omar" size="md" />
        </template>
        <strong>Mustafa</strong> shared the homepage design for your review.
      </FuListRow>
    `})},o={render:()=>({components:{FuListRow:l,FuCard:W,FusionButton:h},template:`
      <FuCard title="Waiting on you">
        <FuListRow title="Approve the homepage design" subtitle="Website redesign">
          <template #actions><FusionButton text="Review" /></template>
        </FuListRow>
        <FuListRow title="Sign the retainer contract" subtitle="Ongoing support">
          <template #actions><FusionButton text="Sign" /></template>
        </FuListRow>
        <FuListRow title="Answer three questions about your brand" subtitle="Brand brief form">
          <template #actions><FusionButton text="Open form" variant="outline" /></template>
        </FuListRow>
      </FuCard>
    `})},a={render:()=>({components:{FuListRow:l},template:`
      <div>
        <FuListRow :divided="false" title="First row" subtitle="No line below" />
        <FuListRow :divided="false" title="Second row" subtitle="No line above" />
      </div>
    `})},r={args:{title:"Brand assets",subtitle:"12 files",href:"#"}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    title: "Approve the homepage design",
    subtitle: "Website redesign, shared by Mustafa yesterday"
  }
}`,...s.parameters?.docs?.source},description:{story:"Default row with a title and subtitle.",...s.parameters?.docs?.description}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      FuListRow,
      FusionButton
    },
    template: \`
      <FuListRow title="Sign the retainer contract" subtitle="Ongoing support, sent 28 Oct">
        <template #actions>
          <FusionButton text="Sign" />
        </template>
      </FuListRow>
    \`
  })
}`,...i.parameters?.docs?.source},description:{story:"Row with a trailing action button.",...i.parameters?.docs?.description}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      FuListRow,
      FuAvatar
    },
    template: \`
      <FuListRow subtitle="Yesterday, Website redesign">
        <template #leading>
          <FuAvatar name="Mustafa Omar" size="md" />
        </template>
        <strong>Mustafa</strong> shared the homepage design for your review.
      </FuListRow>
    \`
  })
}`,...n.parameters?.docs?.source},description:{story:"Avatar in the leading slot with rich text in the title.",...n.parameters?.docs?.description}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      FuListRow,
      FuCard,
      FusionButton
    },
    template: \`
      <FuCard title="Waiting on you">
        <FuListRow title="Approve the homepage design" subtitle="Website redesign">
          <template #actions><FusionButton text="Review" /></template>
        </FuListRow>
        <FuListRow title="Sign the retainer contract" subtitle="Ongoing support">
          <template #actions><FusionButton text="Sign" /></template>
        </FuListRow>
        <FuListRow title="Answer three questions about your brand" subtitle="Brand brief form">
          <template #actions><FusionButton text="Open form" variant="outline" /></template>
        </FuListRow>
      </FuCard>
    \`
  })
}`,...o.parameters?.docs?.source},description:{story:"Several rows in a flush card. Dividers appear only between rows.",...o.parameters?.docs?.description}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      FuListRow
    },
    template: \`
      <div>
        <FuListRow :divided="false" title="First row" subtitle="No line below" />
        <FuListRow :divided="false" title="Second row" subtitle="No line above" />
      </div>
    \`
  })
}`,...a.parameters?.docs?.source},description:{story:"Dividers turned off.",...a.parameters?.docs?.description}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    title: "Brand assets",
    subtitle: "12 files",
    href: "#"
  }
}`,...r.parameters?.docs?.source},description:{story:"Whole row as a link.",...r.parameters?.docs?.description}}};const _=["Default","WithAction","WithAvatar","InACard","WithoutDividers","AsLink"];export{r as AsLink,s as Default,o as InACard,i as WithAction,n as WithAvatar,a as WithoutDividers,_ as __namedExportsOrder,z as default};
