import{q as f,s as y,j as k,o as t,d as b,t as c,b as a,F as m,e as l,i as r}from"./iframe-oXApuAUj.js";import{F as x}from"./FuCard-Bf7YENEN.js";import{_ as F}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./preload-helper-Ct5FWWRu.js";const j={class:"fu-project-card__name"},C={key:0,class:"fu-project-card__status"},S={key:2,class:"fu-project-card__highlight"},w={key:1,class:"fu-project-card__meta"},g=f({__name:"FuProjectCard",props:{name:{},stage:{},highlight:{},meta:{},href:{},clickable:{type:Boolean,default:!1}},emits:["click"],setup(e){return(h,d)=>(t(),y(x,{href:e.href,clickable:e.clickable,class:"fu-project-card",onClick:d[0]||(d[0]=u=>h.$emit("click",u))},{default:k(()=>[b("span",j,c(e.name),1),e.stage||e.highlight?(t(),a("span",C,[e.stage?(t(),a(m,{key:0},[l(c(e.stage),1)],64)):r("",!0),e.stage&&e.highlight?(t(),a(m,{key:1},[l(" · ")],64)):r("",!0),e.highlight?(t(),a("strong",S,c(e.highlight),1)):r("",!0)])):r("",!0),e.meta?(t(),a("span",w,c(e.meta),1)):r("",!0)]),_:1},8,["href","clickable"]))}}),p=F(g,[["__scopeId","data-v-e40c6724"]]);g.__docgenInfo={exportName:"default",displayName:"FuProjectCard",description:"",tags:{},props:[{name:"name",description:"Project name",required:!0,type:{name:"string"}},{name:"stage",description:'Current stage, e.g. "Design stage"',required:!1,type:{name:"string"}},{name:"highlight",description:'What is needed next, shown in the accent colour, e.g. "we need your feedback"',required:!1,type:{name:"string"}},{name:"meta",description:'Small footer line, e.g. "Step 2 of 4"',required:!1,type:{name:"string"}},{name:"href",required:!1,type:{name:"string"}},{name:"clickable",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}],events:[{name:"click",type:{names:["MouseEvent"]}}],sourceFiles:["/Users/xavier/Documents/Websites/Skkido/Fusion-binary-ui/src/components/cards/FuProjectCard.vue"]};const B={title:"Fusion/Data Display/FuProjectCard",component:p,tags:["autodocs"],parameters:{layout:"padded",docs:{description:{component:`
The **FuProjectCard** component summarises one project: its name, the current stage, what is needed next, and a small footer line. It is built on \`FuCard\`, so it uses the same theme-aware background and single border.

---

### Key Features
- **Name** in a semibold heading
- **Stage and highlight**: the stage in normal text, followed by an accented phrase such as "we need your feedback"
- **Meta** footer in muted text, for example a step count
- **Clickable**: pass \`href\` to make the whole card a link

---

### Example Usage

\`\`\`vue
<template>
  <FuProjectCard
    name="Website redesign"
    stage="Design stage"
    highlight="we need your feedback"
    meta="Step 2 of 4"
    href="/projects/1"
  />
</template>
\`\`\`
        `}}},argTypes:{name:{control:"text",description:"Project name"},stage:{control:"text",description:"Current stage"},highlight:{control:"text",description:"What is needed next, shown in the accent colour"},meta:{control:"text",description:"Small footer line"},href:{control:"text",description:"Renders the card as a link"},clickable:{control:"boolean",description:"Renders the card as a button and emits click"}},decorators:[()=>({template:'<div style="max-width: 320px;"><story /></div>'})]},s={args:{name:"Website redesign",stage:"Design stage",highlight:"we need your feedback",meta:"Step 2 of 4"}},n={args:{name:"Brand refresh",stage:"Final files",meta:"Step 4 of 4"}},o={args:{name:"Ongoing support",stage:"Retainer",highlight:"contract to sign",meta:"Starts once signed",href:"#"}},i={decorators:[()=>({template:'<div style="max-width: 1000px;"><story /></div>'})],render:()=>({components:{FuProjectCard:p},template:`
      <div style="display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 16px;">
        <FuProjectCard name="Website redesign" stage="Design stage" highlight="we need your feedback" meta="Step 2 of 4" />
        <FuProjectCard name="Brand refresh" stage="Final files" meta="Step 4 of 4" />
        <FuProjectCard name="Ongoing support" stage="Retainer" highlight="contract to sign" meta="Starts once signed" />
      </div>
    `})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    name: "Website redesign",
    stage: "Design stage",
    highlight: "we need your feedback",
    meta: "Step 2 of 4"
  }
}`,...s.parameters?.docs?.source},description:{story:"Default card showing a project that needs the client.",...s.parameters?.docs?.description}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    name: "Brand refresh",
    stage: "Final files",
    meta: "Step 4 of 4"
  }
}`,...n.parameters?.docs?.source},description:{story:"Nothing needed from the client.",...n.parameters?.docs?.description}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    name: "Ongoing support",
    stage: "Retainer",
    highlight: "contract to sign",
    meta: "Starts once signed",
    href: "#"
  }
}`,...o.parameters?.docs?.source},description:{story:"Whole card is a link.",...o.parameters?.docs?.description}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  decorators: [() => ({
    template: '<div style="max-width: 1000px;"><story /></div>'
  })],
  render: () => ({
    components: {
      FuProjectCard
    },
    template: \`
      <div style="display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 16px;">
        <FuProjectCard name="Website redesign" stage="Design stage" highlight="we need your feedback" meta="Step 2 of 4" />
        <FuProjectCard name="Brand refresh" stage="Final files" meta="Step 4 of 4" />
        <FuProjectCard name="Ongoing support" stage="Retainer" highlight="contract to sign" meta="Starts once signed" />
      </div>
    \`
  })
}`,...i.parameters?.docs?.source},description:{story:"Three cards in a row, as on the portal home page.",...i.parameters?.docs?.description}}};const W=["Default","NothingNeeded","AsLink","Row"];export{o as AsLink,s as Default,n as NothingNeeded,i as Row,W as __namedExportsOrder,B as default};
