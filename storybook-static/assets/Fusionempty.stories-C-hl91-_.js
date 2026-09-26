import{d as V,b as a,f as v,y as j,i as n,g as w,t as z,A as q,F as S,e as F,j as B,o as t}from"./iframe-DQPhCJt3.js";import{F as N}from"./FusionButton-BZkn3sOM.js";import{F as T}from"./FusionInfoCard-BFZLn-rM.js";import{_ as P}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{C as E}from"./circle-alert-Bf6BEDQV.js";import{S as U}from"./search-rSlasJ90.js";import{c as k}from"./createLucideIcon-D8o8pLjL.js";import"./preload-helper-Ct5FWWRu.js";/**
 * @license lucide-vue-next v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const D=k("building-2",[["path",{d:"M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z",key:"1b4qmf"}],["path",{d:"M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2",key:"i71pzd"}],["path",{d:"M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2",key:"10jefs"}],["path",{d:"M10 6h4",key:"1itunk"}],["path",{d:"M10 10h4",key:"tcdvrf"}],["path",{d:"M10 14h4",key:"kelpxr"}],["path",{d:"M10 18h4",key:"1ulq68"}]]);/**
 * @license lucide-vue-next v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const b=k("file-plus",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M9 15h6",key:"cctwl0"}],["path",{d:"M12 18v-6",key:"17g6i2"}]]);/**
 * @license lucide-vue-next v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const L=k("folder-open",[["path",{d:"m6 14 1.5-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.54 6a2 2 0 0 1-1.95 1.5H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H18a2 2 0 0 1 2 2v2",key:"usdka0"}]]);/**
 * @license lucide-vue-next v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const I=k("inbox",[["polyline",{points:"22 12 16 12 14 15 10 15 8 12 2 12",key:"o97t9d"}],["path",{d:"M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z",key:"oot6mr"}]]),_={key:0,class:"fu-empty__visual"},$=["src","alt"],H={class:"fu-empty__body"},O={class:"fu-empty__title"},R={key:0,class:"fu-empty__description"},Y={key:1,class:"fu-empty__content"},J={key:2,class:"fu-empty__actions"},Z={key:3,class:"fu-empty__cards"},M=V({__name:"FusionEmpty",props:{title:{},description:{},visual:{},primaryAction:{},secondaryActions:{},cards:{},size:{default:"md"},variant:{default:"default"}},setup(e){return(C,A)=>(t(),a("div",{class:B(["fu-empty",[`fu-empty--${e.size}`,`fu-empty--${e.variant}`]])},[e.visual&&e.visual.type!=="none"?(t(),a("div",_,[e.visual.type==="icon"?(t(),v(j(e.visual.value),{key:0,class:"fu-empty__icon"})):e.visual.type==="image"?(t(),a("img",{key:1,src:e.visual.src,alt:e.visual.alt,class:"fu-empty__image"},null,8,$)):n("",!0)])):n("",!0),w("div",H,[w("p",O,z(e.title),1),e.description?(t(),a("p",R,z(e.description),1)):n("",!0)]),C.$slots.default?(t(),a("div",Y,[q(C.$slots,"default",{},void 0,!0)])):n("",!0),e.primaryAction||e.secondaryActions?.length?(t(),a("div",J,[e.primaryAction?(t(),v(N,{key:0,text:e.primaryAction.label,buttonWidth:"fit-content",onClick:A[0]||(A[0]=i=>e.primaryAction.onClick?.())},null,8,["text"])):n("",!0),(t(!0),a(S,null,F(e.secondaryActions,i=>(t(),v(N,{key:i.label,text:i.label,buttonWidth:"fit-content",variant:"subtle",onClick:x=>i.onClick?.()},null,8,["text","onClick"]))),128))])):n("",!0),e.cards?.length?(t(),a("div",Z,[(t(!0),a(S,null,F(e.cards,(i,x)=>(t(),v(T,{key:i.title+x,title:i.title,description:i.description,image:i.image,initial:i.initial,color:i.color,onClick:K=>i.onClick?.()},null,8,["title","description","image","initial","color","onClick"]))),128))])):n("",!0)],2))}}),W=P(M,[["__scopeId","data-v-6b182dfb"]]);M.__docgenInfo={exportName:"default",displayName:"FusionEmpty",description:"",tags:{},props:[{name:"title",required:!0,type:{name:"string"}},{name:"description",required:!1,type:{name:"string"}},{name:"visual",required:!1,type:{name:"union",elements:[{name:'{ type: "icon"; value: Component }'},{name:'{ type: "image"; src: string; alt: string }'},{name:'{ type: "none" }'}]}},{name:"primaryAction",required:!1,type:{name:"Action"}},{name:"secondaryActions",required:!1,type:{name:"Array",elements:[{name:"Action"}]}},{name:"cards",description:"Optional list of picker cards rendered below the actions (see `FusionInfoCard`)",required:!1,type:{name:"Array",elements:[{name:"EmptyCardItem"}]}},{name:"size",required:!1,type:{name:"union",elements:[{name:'"sm"'},{name:'"md"'},{name:'"lg"'}]},defaultValue:{func:!1,value:'"md"'}},{name:"variant",required:!1,type:{name:"union",elements:[{name:'"default"'},{name:'"subtle"'},{name:'"minimal"'}]},defaultValue:{func:!1,value:'"default"'}}],slots:[{name:"default"}],sourceFiles:["/Users/xavier/Documents/Websites/Skkido/Fusion-binary-ui/src/components/states/FusionEmpty.vue"]};const se={title:"Fusion/Feedback/FusionEmpty",component:W,tags:["autodocs"],parameters:{layout:"fullscreen",docs:{description:{component:`
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
- **Default slot** for custom content that doesn't fit title/description (a details card, an info callout)
- **\`cards\`** prop — renders a list of \`FusionInfoCard\` rows below the actions, for picker-style empty states ("select a workspace")

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
        `}}},argTypes:{title:{control:"text",description:"Main heading of the empty state"},description:{control:"text",description:"Supporting description text"},size:{control:"select",options:["sm","md","lg"],description:"Controls padding, icon size, and font sizes"},variant:{control:"select",options:["default","subtle","minimal"],description:"`default` — standard with background. `subtle` — transparent, dimmed text. `minimal` — no visual, compact, text-only."},visual:{control:"object",description:"Visual indicator: `{ type: 'icon', value: Component }`, `{ type: 'image', src, alt }`, or `{ type: 'none' }`"},primaryAction:{control:"object",description:"Primary CTA rendered as a `FusionButton`"},secondaryActions:{control:"object",description:"Optional secondary actions rendered as secondary `FusionButton` instances"},cards:{control:"object",description:"Optional list of `{ title, description?, image?, initial?, color?, onClick? }` rendered as `FusionInfoCard` rows below the actions"}},decorators:[()=>({template:'<div style="width: 100%; height: 320px;"><story /></div>'})]},s={args:{title:"No items yet",description:"Create your first item to get started.",visual:{type:"icon",value:I},primaryAction:{label:"Create item",onClick:()=>{}},secondaryActions:[{label:"Learn more",onClick:()=>{}}],size:"md",variant:"default"}},o={args:{title:"Nothing here",visual:{type:"icon",value:L},primaryAction:{label:"Add folder",onClick:()=>{}},size:"md",variant:"default"}},r={args:{title:"No results found",description:"Try adjusting your filters or search terms.",visual:{type:"icon",value:U},primaryAction:{label:"Clear filters",onClick:()=>{}},size:"md",variant:"default"}},l={args:{title:"Something went wrong",description:"We couldn't load your data. Please try again.",visual:{type:"icon",value:E},primaryAction:{label:"Retry",onClick:()=>{}},size:"md",variant:"default"}},c={args:{title:"Your workspace is empty",description:"Upload files or invite teammates to get started.",visual:{type:"image",src:"https://illustrations.popsy.co/gray/work-from-home.svg",alt:"Empty workspace illustration"},primaryAction:{label:"Upload files",onClick:()=>{}},secondaryActions:[{label:"Invite team",onClick:()=>{}}],size:"lg",variant:"default"}},d={args:{title:"No documents found",description:"Start by creating your first document.",visual:{type:"none"},primaryAction:{label:"New document",onClick:()=>{}},size:"md",variant:"default"}},h={args:{title:"Nothing here",description:"Add something to get started.",visual:{type:"icon",value:b},primaryAction:{label:"Add",onClick:()=>{}},size:"sm",variant:"default"},decorators:[()=>({template:'<div style="width: 100%; height: 180px;"><story /></div>'})]},f={args:{title:"Nothing here",description:"Add something to get started.",visual:{type:"icon",value:b},primaryAction:{label:"Add",onClick:()=>{}},size:"md",variant:"default"}},g={args:{title:"Nothing here",description:"Add something to get started.",visual:{type:"icon",value:b},primaryAction:{label:"Add",onClick:()=>{}},size:"lg",variant:"default"},decorators:[()=>({template:'<div style="width: 100%; height: 480px;"><story /></div>'})]},p={args:{title:"No activity yet",description:"Actions performed here will show up in this feed.",visual:{type:"icon",value:I},size:"md",variant:"subtle"}},m={args:{title:"No results",description:"Try a different search.",size:"md",variant:"minimal"},decorators:[()=>({template:'<div style="width: 100%; height: 120px;"><story /></div>'})]},u={args:{title:"Select a workspace",description:"Choose which workspace to open.",visual:{type:"icon",value:D},variant:"minimal",cards:[{title:"Tommy",description:"tommy",color:"#2563eb",onClick:()=>{}},{title:"Acme Studio",description:"acme-studio",color:"#16a34a",onClick:()=>{}},{title:"North Wind Co",description:"north-wind",color:"#d97706",onClick:()=>{}}]},decorators:[()=>({template:'<div style="width: 100%; height: 520px;"><story /></div>'})]},y={render:e=>({components:{FusionEmpty:W},setup(){return{args:e}},template:`
      <FusionEmpty v-bind="args">
        <div style="background: var(--fu-modal-surface); border: 1px solid var(--fu-border); border-radius: var(--fu-rounded-lg); padding: 16px; text-align: left;">
          <div style="display: flex; justify-content: space-between; padding: 6px 0;">
            <span style="color: var(--fu-color-text-muted); font-size: 13px;">Reason</span>
            <span style="font-size: 13px;">Payment failed</span>
          </div>
          <div style="display: flex; justify-content: space-between; padding: 6px 0; border-top: 1px solid var(--fu-border);">
            <span style="color: var(--fu-color-text-muted); font-size: 13px;">Suspended on</span>
            <span style="font-size: 13px;">Jan 12, 2026</span>
          </div>
        </div>
      </FusionEmpty>
    `}),args:{title:"Access Suspended",description:"Your access to this workspace has been suspended.",visual:{type:"icon",value:E},primaryAction:{label:"Contact support",onClick:()=>{}}},decorators:[()=>({template:'<div style="width: 100%; height: 480px;"><story /></div>'})]};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source},description:{story:"Default empty state with an icon visual and both action types.",...s.parameters?.docs?.description}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...o.parameters?.docs?.source},description:{story:"Icon empty state without a description.",...o.parameters?.docs?.description}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...r.parameters?.docs?.source},description:{story:"No results found — typical search empty state.",...r.parameters?.docs?.description}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
}`,...l.parameters?.docs?.source},description:{story:"Error-style empty state using the AlertCircle icon.",...l.parameters?.docs?.description}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
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
}`,...c.parameters?.docs?.source},description:{story:"Empty state with an image illustration.",...c.parameters?.docs?.description}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
}`,...d.parameters?.docs?.source},description:{story:"No visual — text and actions only.",...d.parameters?.docs?.description}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
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
}`,...h.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
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
}`,...f.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
}`,...g.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source},description:{story:`Subtle — transparent background, slightly dimmed content.
Use inside cards or panels that already have a background.`,...p.parameters?.docs?.description}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
Use for small containers like sidebars or table cells.`,...m.parameters?.docs?.description}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    title: "Select a workspace",
    description: "Choose which workspace to open.",
    visual: {
      type: "icon",
      value: Building2
    },
    variant: "minimal",
    cards: [{
      title: "Tommy",
      description: "tommy",
      color: "#2563eb",
      onClick: () => {}
    }, {
      title: "Acme Studio",
      description: "acme-studio",
      color: "#16a34a",
      onClick: () => {}
    }, {
      title: "North Wind Co",
      description: "north-wind",
      color: "#d97706",
      onClick: () => {}
    }]
  },
  decorators: [() => ({
    template: '<div style="width: 100%; height: 520px;"><story /></div>'
  })]
}`,...u.parameters?.docs?.source},description:{story:'`cards` renders a list of `FusionInfoCard` rows below the actions —\na picker-style empty state, e.g. "you have no active workspace, pick one".',...u.parameters?.docs?.description}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: args => ({
    components: {
      FusionEmpty
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <FusionEmpty v-bind="args">
        <div style="background: var(--fu-modal-surface); border: 1px solid var(--fu-border); border-radius: var(--fu-rounded-lg); padding: 16px; text-align: left;">
          <div style="display: flex; justify-content: space-between; padding: 6px 0;">
            <span style="color: var(--fu-color-text-muted); font-size: 13px;">Reason</span>
            <span style="font-size: 13px;">Payment failed</span>
          </div>
          <div style="display: flex; justify-content: space-between; padding: 6px 0; border-top: 1px solid var(--fu-border);">
            <span style="color: var(--fu-color-text-muted); font-size: 13px;">Suspended on</span>
            <span style="font-size: 13px;">Jan 12, 2026</span>
          </div>
        </div>
      </FusionEmpty>
    \`
  }),
  args: {
    title: "Access Suspended",
    description: "Your access to this workspace has been suspended.",
    visual: {
      type: "icon",
      value: AlertCircle
    },
    primaryAction: {
      label: "Contact support",
      onClick: () => {}
    }
  },
  decorators: [() => ({
    template: '<div style="width: 100%; height: 480px;"><story /></div>'
  })]
}`,...y.parameters?.docs?.source},description:{story:`The default slot accepts arbitrary custom content — here, a details
card and an info callout that don't fit the title/description shape.`,...y.parameters?.docs?.description}}};const oe=["WithIcon","WithIconNoDescription","SearchEmpty","ErrorState","WithImage","NoVisual","SizeSmall","SizeMedium","SizeLarge","VariantSubtle","VariantMinimal","WithCards","WithCustomContent"];export{l as ErrorState,d as NoVisual,r as SearchEmpty,g as SizeLarge,f as SizeMedium,h as SizeSmall,m as VariantMinimal,p as VariantSubtle,u as WithCards,y as WithCustomContent,s as WithIcon,o as WithIconNoDescription,c as WithImage,oe as __namedExportsOrder,se as default};
