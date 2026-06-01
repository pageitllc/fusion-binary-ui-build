import{d as x,b as a,f as g,y as N,i,g as A,t as k,F as w,e as F,j as E,o as t}from"./iframe-BWX2pLPr.js";import{F as C}from"./FusionButton-rEE2o6aG.js";import{_ as I}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{C as V}from"./circle-alert--4qdXdXD.js";import{S as M}from"./search-DALccjr0.js";import{c as h}from"./createLucideIcon-BuC7IBSO.js";import"./preload-helper-Ct5FWWRu.js";/**
 * @license lucide-vue-next v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const f=h("file-plus",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M9 15h6",key:"cctwl0"}],["path",{d:"M12 18v-6",key:"17g6i2"}]]);/**
 * @license lucide-vue-next v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const W=h("folder-open",[["path",{d:"m6 14 1.5-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.54 6a2 2 0 0 1-1.95 1.5H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H18a2 2 0 0 1 2 2v2",key:"usdka0"}]]);/**
 * @license lucide-vue-next v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const z=h("inbox",[["polyline",{points:"22 12 16 12 14 15 10 15 8 12 2 12",key:"o97t9d"}],["path",{d:"M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z",key:"oot6mr"}]]),B={key:0,class:"fu-empty__visual"},q=["src","alt"],T={class:"fu-empty__body"},P={class:"fu-empty__title"},U={key:0,class:"fu-empty__description"},L={key:1,class:"fu-empty__actions"},S=x({__name:"FusionEmpty",props:{title:{},description:{},visual:{},primaryAction:{},secondaryActions:{},size:{default:"md"},variant:{default:"default"}},setup(e){return(D,b)=>(t(),a("div",{class:E(["fu-empty",[`fu-empty--${e.size}`,`fu-empty--${e.variant}`]])},[e.visual&&e.visual.type!=="none"?(t(),a("div",B,[e.visual.type==="icon"?(t(),g(N(e.visual.value),{key:0,class:"fu-empty__icon"})):e.visual.type==="image"?(t(),a("img",{key:1,src:e.visual.src,alt:e.visual.alt,class:"fu-empty__image"},null,8,q)):i("",!0)])):i("",!0),A("div",T,[A("p",P,k(e.title),1),e.description?(t(),a("p",U,k(e.description),1)):i("",!0)]),e.primaryAction||e.secondaryActions?.length?(t(),a("div",L,[e.primaryAction?(t(),g(C,{key:0,text:e.primaryAction.label,buttonWidth:"fit-content",onClick:b[0]||(b[0]=p=>e.primaryAction.onClick?.())},null,8,["text"])):i("",!0),(t(!0),a(w,null,F(e.secondaryActions,p=>(t(),g(C,{key:p.label,text:p.label,buttonWidth:"fit-content",variant:"subtle",onClick:H=>p.onClick?.()},null,8,["text","onClick"]))),128))])):i("",!0)],2))}}),j=I(S,[["__scopeId","data-v-625fa32d"]]);S.__docgenInfo={exportName:"default",displayName:"FusionEmpty",description:"",tags:{},props:[{name:"title",required:!0,type:{name:"string"}},{name:"description",required:!1,type:{name:"string"}},{name:"visual",required:!1,type:{name:"union",elements:[{name:'{ type: "icon"; value: Component }'},{name:'{ type: "image"; src: string; alt: string }'},{name:'{ type: "none" }'}]}},{name:"primaryAction",required:!1,type:{name:"Action"}},{name:"secondaryActions",required:!1,type:{name:"Array",elements:[{name:"Action"}]}},{name:"size",required:!1,type:{name:"union",elements:[{name:'"sm"'},{name:'"md"'},{name:'"lg"'}]},defaultValue:{func:!1,value:'"md"'}},{name:"variant",required:!1,type:{name:"union",elements:[{name:'"default"'},{name:'"subtle"'},{name:'"minimal"'}]},defaultValue:{func:!1,value:'"default"'}}],sourceFiles:["/Users/xavier/Documents/Websites/Skkido/Fusion-binary-ui/src/components/states/FusionEmpty.vue"]};const G={title:"Components/FusionEmpty",component:j,tags:["autodocs"],parameters:{layout:"fullscreen",docs:{description:{component:`
The **FusionEmpty** component displays an empty state that fills its parent container — no fixed height or width is set, so it stretches to whatever space is available.

It supports three visual types, three sizes, and three variants, with optional primary and secondary actions rendered using \`FusionButton\`.

---

### Key Features
- Fills parent container (\`width: 100%; height: 100%\`)
- Three **sizes**: \`sm\`, \`md\` (default), \`lg\`
- Three **variants**: \`default\`, \`subtle\`, \`minimal\`
- **Visual** slot: icon component, image, or none
- **Primary action** rendered as a primary \`FusionButton\`
- **Secondary actions** rendered as secondary \`FusionButton\` instances

---

### Example Usage

\`\`\`vue
<script setup lang="ts">
import FusionEmpty from "@/components/empty/FusionEmpty.vue";
import { Inbox } from "lucide-vue-next";
<\/script>

<template>
  <!-- Icon + actions -->
  <FusionEmpty
    title="No items yet"
    description="Create your first item to get started."
    :visual="{ type: 'icon', value: Inbox }"
    :primaryAction="{ label: 'Create item', onClick: () => {} }"
    :secondaryActions="[{ label: 'Learn more', onClick: () => {} }]"
  />

  <!-- Image visual -->
  <FusionEmpty
    title="Nothing here"
    :visual="{ type: 'image', src: '/empty.svg', alt: 'Empty state illustration' }"
    size="lg"
  />

  <!-- Minimal — text only, no visual, compact -->
  <FusionEmpty
    title="No results"
    variant="minimal"
  />
</template>
\`\`\`
        `}}},argTypes:{title:{control:"text",description:"Main heading of the empty state"},description:{control:"text",description:"Supporting description text"},size:{control:"select",options:["sm","md","lg"],description:"Controls padding, icon size, and font sizes"},variant:{control:"select",options:["default","subtle","minimal"],description:"`default` — standard with background. `subtle` — transparent, dimmed text. `minimal` — no visual, compact, text-only."},visual:{control:"object",description:"Visual indicator: `{ type: 'icon', value: Component }`, `{ type: 'image', src, alt }`, or `{ type: 'none' }`"},primaryAction:{control:"object",description:"Primary CTA rendered as a `FusionButton`"},secondaryActions:{control:"object",description:"Optional secondary actions rendered as secondary `FusionButton` instances"}},decorators:[()=>({template:'<div style="width: 100%; height: 320px;"><story /></div>'})]},n={args:{title:"No items yet",description:"Create your first item to get started.",visual:{type:"icon",value:z},primaryAction:{label:"Create item",onClick:()=>{}},secondaryActions:[{label:"Learn more",onClick:()=>{}}],size:"md",variant:"default"}},r={args:{title:"Nothing here",visual:{type:"icon",value:W},primaryAction:{label:"Add folder",onClick:()=>{}},size:"md",variant:"default"}},s={args:{title:"No results found",description:"Try adjusting your filters or search terms.",visual:{type:"icon",value:M},primaryAction:{label:"Clear filters",onClick:()=>{}},size:"md",variant:"default"}},o={args:{title:"Something went wrong",description:"We couldn't load your data. Please try again.",visual:{type:"icon",value:V},primaryAction:{label:"Retry",onClick:()=>{}},size:"md",variant:"default"}},l={args:{title:"Your workspace is empty",description:"Upload files or invite teammates to get started.",visual:{type:"image",src:"https://illustrations.popsy.co/gray/work-from-home.svg",alt:"Empty workspace illustration"},primaryAction:{label:"Upload files",onClick:()=>{}},secondaryActions:[{label:"Invite team",onClick:()=>{}}],size:"lg",variant:"default"}},c={args:{title:"No documents found",description:"Start by creating your first document.",visual:{type:"none"},primaryAction:{label:"New document",onClick:()=>{}},size:"md",variant:"default"}},u={args:{title:"Nothing here",description:"Add something to get started.",visual:{type:"icon",value:f},primaryAction:{label:"Add",onClick:()=>{}},size:"sm",variant:"default"},decorators:[()=>({template:'<div style="width: 100%; height: 180px;"><story /></div>'})]},y={args:{title:"Nothing here",description:"Add something to get started.",visual:{type:"icon",value:f},primaryAction:{label:"Add",onClick:()=>{}},size:"md",variant:"default"}},v={args:{title:"Nothing here",description:"Add something to get started.",visual:{type:"icon",value:f},primaryAction:{label:"Add",onClick:()=>{}},size:"lg",variant:"default"},decorators:[()=>({template:'<div style="width: 100%; height: 480px;"><story /></div>'})]},d={args:{title:"No activity yet",description:"Actions performed here will show up in this feed.",visual:{type:"icon",value:z},size:"md",variant:"subtle"}},m={args:{title:"No results",description:"Try a different search.",size:"md",variant:"minimal"},decorators:[()=>({template:'<div style="width: 100%; height: 120px;"><story /></div>'})]};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    title: "No items yet",
    description: "Create your first item to get started.",
    visual: {
      type: "icon",
      value: Inbox
    },
    primaryAction: {
      label: "Create item",
      onClick: () => {}
    },
    secondaryActions: [{
      label: "Learn more",
      onClick: () => {}
    }],
    size: "md",
    variant: "default"
  }
}`,...n.parameters?.docs?.source},description:{story:"Default empty state with an icon visual and both action types.",...n.parameters?.docs?.description}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    title: "Nothing here",
    visual: {
      type: "icon",
      value: FolderOpen
    },
    primaryAction: {
      label: "Add folder",
      onClick: () => {}
    },
    size: "md",
    variant: "default"
  }
}`,...r.parameters?.docs?.source},description:{story:"Icon empty state without a description.",...r.parameters?.docs?.description}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    title: "No results found",
    description: "Try adjusting your filters or search terms.",
    visual: {
      type: "icon",
      value: Search
    },
    primaryAction: {
      label: "Clear filters",
      onClick: () => {}
    },
    size: "md",
    variant: "default"
  }
}`,...s.parameters?.docs?.source},description:{story:"No results found — typical search empty state.",...s.parameters?.docs?.description}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    title: "Something went wrong",
    description: "We couldn't load your data. Please try again.",
    visual: {
      type: "icon",
      value: AlertCircle
    },
    primaryAction: {
      label: "Retry",
      onClick: () => {}
    },
    size: "md",
    variant: "default"
  }
}`,...o.parameters?.docs?.source},description:{story:"Error-style empty state using the AlertCircle icon.",...o.parameters?.docs?.description}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    title: "Your workspace is empty",
    description: "Upload files or invite teammates to get started.",
    visual: {
      type: "image",
      src: "https://illustrations.popsy.co/gray/work-from-home.svg",
      alt: "Empty workspace illustration"
    },
    primaryAction: {
      label: "Upload files",
      onClick: () => {}
    },
    secondaryActions: [{
      label: "Invite team",
      onClick: () => {}
    }],
    size: "lg",
    variant: "default"
  }
}`,...l.parameters?.docs?.source},description:{story:"Empty state with an image illustration.",...l.parameters?.docs?.description}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    title: "No documents found",
    description: "Start by creating your first document.",
    visual: {
      type: "none"
    },
    primaryAction: {
      label: "New document",
      onClick: () => {}
    },
    size: "md",
    variant: "default"
  }
}`,...c.parameters?.docs?.source},description:{story:"No visual — text and actions only.",...c.parameters?.docs?.description}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    title: "Nothing here",
    description: "Add something to get started.",
    visual: {
      type: "icon",
      value: FilePlus
    },
    primaryAction: {
      label: "Add",
      onClick: () => {}
    },
    size: "sm",
    variant: "default"
  },
  decorators: [() => ({
    template: '<div style="width: 100%; height: 180px;"><story /></div>'
  })]
}`,...u.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    title: "Nothing here",
    description: "Add something to get started.",
    visual: {
      type: "icon",
      value: FilePlus
    },
    primaryAction: {
      label: "Add",
      onClick: () => {}
    },
    size: "md",
    variant: "default"
  }
}`,...y.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    title: "Nothing here",
    description: "Add something to get started.",
    visual: {
      type: "icon",
      value: FilePlus
    },
    primaryAction: {
      label: "Add",
      onClick: () => {}
    },
    size: "lg",
    variant: "default"
  },
  decorators: [() => ({
    template: '<div style="width: 100%; height: 480px;"><story /></div>'
  })]
}`,...v.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    title: "No activity yet",
    description: "Actions performed here will show up in this feed.",
    visual: {
      type: "icon",
      value: Inbox
    },
    size: "md",
    variant: "subtle"
  }
}`,...d.parameters?.docs?.source},description:{story:`Subtle — transparent background, slightly dimmed content.
Use inside cards or panels that already have a background.`,...d.parameters?.docs?.description}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    title: "No results",
    description: "Try a different search.",
    size: "md",
    variant: "minimal"
  },
  decorators: [() => ({
    template: '<div style="width: 100%; height: 120px;"><story /></div>'
  })]
}`,...m.parameters?.docs?.source},description:{story:`Minimal — no visual, compact padding, heavily dimmed text.
Use for small containers like sidebars or table cells.`,...m.parameters?.docs?.description}}};const J=["WithIcon","WithIconNoDescription","SearchEmpty","ErrorState","WithImage","NoVisual","SizeSmall","SizeMedium","SizeLarge","VariantSubtle","VariantMinimal"];export{o as ErrorState,c as NoVisual,s as SearchEmpty,v as SizeLarge,y as SizeMedium,u as SizeSmall,m as VariantMinimal,d as VariantSubtle,n as WithIcon,r as WithIconNoDescription,l as WithImage,J as __namedExportsOrder,G as default};
