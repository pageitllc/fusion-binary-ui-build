import{s as A,r as x,a as c,F as w,h as D,l as y,j as s,g as a,z as S,d as _,f as T,v as F,t as O,H as I,y as C}from"./iframe-4anGkjM3.js";import{_ as U}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{U as f}from"./user-C5GbdiJV.js";import{S as v}from"./settings-B1V3NTcq.js";import{F as g}from"./file-text-DK81Ft0a.js";import{c as P}from"./createLucideIcon-MAVkZFkt.js";import"./preload-helper-Ct5FWWRu.js";/**
 * @license lucide-vue-next v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const q=P("lock",[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]]),L=["onClick","disabled"],z={class:"fu-accordion__header-content"},B={class:"fu-accordion__body"},k=A({__name:"FusionAccordion",props:{items:{},defaultOpen:{},type:{},theme:{}},setup(t){const h=t,i=x(h.defaultOpen||[]);function l(n){return i.value.includes(n)}function b(n){const o=l(n);h.type==="single"?i.value=o?[]:[n]:o?i.value=i.value.filter(e=>e!==n):i.value.push(n)}return(n,o)=>(s(),c("div",{class:y(["fu-accordion",[`fu-accordion--${t.theme}`]])},[(s(!0),c(w,null,D(t.items,e=>(s(),c("div",{key:e.key,class:"fu-accordion__item"},[a("button",{class:y(["fu-accordion__header",{"is-open":l(e.key),"is-disabled":e.disabled}]),onClick:M=>b(e.key),disabled:e.disabled},[a("div",z,[e.icon?(s(),_(F(e.icon),{key:0,size:16,class:"fu-accordion__icon"})):T("",!0),a("span",null,O(e.title),1)]),(s(),c("svg",{class:y(["fu-accordion__chevron",{"is-open":l(e.key)}]),xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[...o[0]||(o[0]=[a("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M6 9l6 6 6-6"},null,-1)])],2))],10,L),S(a("div",B,[C(n.$slots,e.key,{},void 0,!0)],512),[[I,l(e.key)]])]))),128))],2))}}),r=U(k,[["__scopeId","data-v-f069f986"]]);k.__docgenInfo={exportName:"default",displayName:"FusionAccordion",description:"",tags:{},props:[{name:"items",required:!0,type:{name:"Array",elements:[{name:"AccordionItem"}]}},{name:"defaultOpen",required:!1,type:{name:"Array",elements:[{name:"string"}]}},{name:"type",required:!1,type:{name:"union",elements:[{name:'"single"'},{name:'"multiple"'}]}},{name:"theme",required:!1,type:{name:"union",elements:[{name:'"default"'},{name:'"plain"'}]}}],slots:[{name:"item.key",scoped:!0,bindings:[{name:"name",title:"binding"}]}],sourceFiles:["/Users/xavier/Documents/Websites/Skkido/Fusion-binary-ui/src/components/accordion/FusionAccordion.vue"]};const G={title:"Components/FusionAccordion",component:r,tags:["autodocs"],parameters:{docs:{description:{component:`
The **FusionAccordion** component organizes content into expandable sections.  
It supports *single* or *multiple* open panels, icons, themes, and disabled states —  
all styled consistently with the Fusion design system.

---

### Features
- Expand/collapse sections individually  
- Optional \`single\` mode (auto-closes others)  
- Lucide icon support  
- Disabled item support  
- Theming support: \`default\` (bordered) or \`plain\` (flat)  
- Slot-based content structure  

---

### Props

| Prop | Type | Default | Description |
|------|------|----------|-------------|
| \`items\` | \`AccordionItem[]\` | — | Array of accordion items with keys, titles, and optional icons |
| \`defaultOpen\` | \`string[]\` | \`[]\` | Keys that should be open by default |
| \`type\` | \`'single' | 'multiple'\` | 'multiple' | Determines if only one panel can stay open |
| \`theme\` | \`'default' | 'plain'\` | 'default' | Defines the visual appearance of the accordion |

---

### Example Usage

\`\`\`vue
<script setup lang="ts">
import { FusionAccordion } from "fusion-binary";
import { User, Settings, FileText } from "lucide-vue-next";

const myAccordion = [
  { key: "profile", title: "Profile", icon: User },
  { key: "settings", title: "Settings", icon: Settings },
  { key: "docs", title: "Docs", icon: FileText, disabled: false },
  { key: "archived", title: "Archived", disabled: true },
];
<\/script>

<template>
  <!-- Default Theme -->
  <FusionAccordion :items="myAccordion" type="multiple" theme="default" :defaultOpen="['profile']">
    <template #profile>
      <h3>Profile</h3>
      <p>User profile content here.</p>
    </template>
    <template #settings>
      <h3>Settings</h3>
      <p>Manage preferences and configurations.</p>
    </template>
    <template #docs>
      <h3>Docs</h3>
      <p>Helpful guides and documentation.</p>
    </template>
    <template #archived>
      <h3>Archived</h3>
      <p>This section is disabled and cannot be expanded.</p>
    </template>
  </FusionAccordion>

  <!-- Plain Theme -->
  <FusionAccordion :items="myAccordion" type="single" theme="plain" />
</template>
\`\`\`

---

### Slots

| Slot | Description |
|------|-------------|
| \`#<item.key>\` | Content displayed when the corresponding accordion item is expanded |
        `}}}},p={render:t=>({components:{Accordion:r},setup(){return{args:t}},template:`
      <div style="padding: 2rem; max-width: 520px; margin: auto;">
        <Accordion v-bind="args">
          <template #profile>
            <p>This section contains profile details and personal information.</p>
          </template>
          <template #settings>
            <p>Settings for account configuration and notifications.</p>
          </template>
          <template #docs>
            <p>Documentation, guides, and frequently asked questions.</p>
          </template>
        </Accordion>
      </div>
    `}),args:{type:"multiple",defaultOpen:["profile"],theme:"default",items:[{key:"profile",title:"Profile",icon:f},{key:"settings",title:"Settings",icon:v},{key:"docs",title:"Docs",icon:g}]},parameters:{docs:{description:{story:"Multiple panels can be expanded at once. Icons are supported beside titles."}}}},d={render:t=>({components:{Accordion:r},setup(){return{args:t}},template:`
      <div style="padding: 2rem; max-width: 520px; margin: auto;">
        <Accordion v-bind="args">
          <template #overview>
            <p>This panel is open by default. Opening another closes this one.</p>
          </template>
          <template #details>
            <p>Details about the project, metrics, and analytics.</p>
          </template>
          <template #history>
            <p>Revision and activity history of your workspace.</p>
          </template>
        </Accordion>
      </div>
    `}),args:{type:"single",defaultOpen:["overview"],theme:"default",items:[{key:"overview",title:"Overview",icon:f},{key:"details",title:"Details",icon:v},{key:"history",title:"History",icon:g}]},parameters:{docs:{description:{story:"Single mode allows only one accordion section to be open at a time — ideal for compact layouts like sidebars or settings."}}}},m={render:t=>({components:{Accordion:r},setup(){return{args:t}},template:`
      <div style="padding: 2rem; max-width: 520px; margin: auto;">
        <Accordion v-bind="args">
          <template #intro>
            <p>This is a simple text-only accordion — no icons, minimal style.</p>
          </template>
          <template #details>
            <p>Clean and accessible design for basic content sections.</p>
          </template>
          <template #summary>
            <p>Perfect for documentation or help panels.</p>
          </template>
        </Accordion>
      </div>
    `}),args:{type:"multiple",theme:"default",items:[{key:"intro",title:"Introduction"},{key:"details",title:"Details"},{key:"summary",title:"Summary"}]},parameters:{docs:{description:{story:"Accordion example without icons — best for simple informational layouts."}}}},u={render:t=>({components:{Accordion:r},setup(){return{args:t}},template:`
      <div style="padding: 2rem; max-width: 520px; margin: auto;">
        <Accordion v-bind="args">
          <template #active>
            <p>This section is active and expandable.</p>
          </template>
          <template #locked>
            <p>This section is disabled and cannot be opened.</p>
          </template>
          <template #info>
            <p>General information and helpful tips go here.</p>
          </template>
        </Accordion>
      </div>
    `}),args:{type:"multiple",theme:"default",items:[{key:"active",title:"Active",icon:f},{key:"locked",title:"Locked",icon:q,disabled:!0},{key:"info",title:"Info",icon:g}]},parameters:{docs:{description:{story:"Demonstrates a disabled accordion item that cannot be opened or interacted with."}}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: args => ({
    components: {
      Accordion
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <div style="padding: 2rem; max-width: 520px; margin: auto;">
        <Accordion v-bind="args">
          <template #profile>
            <p>This section contains profile details and personal information.</p>
          </template>
          <template #settings>
            <p>Settings for account configuration and notifications.</p>
          </template>
          <template #docs>
            <p>Documentation, guides, and frequently asked questions.</p>
          </template>
        </Accordion>
      </div>
    \`
  }),
  args: {
    type: "multiple",
    defaultOpen: ["profile"],
    theme: "default",
    items: [{
      key: "profile",
      title: "Profile",
      icon: User
    }, {
      key: "settings",
      title: "Settings",
      icon: Settings
    }, {
      key: "docs",
      title: "Docs",
      icon: FileText
    }] as AccordionItem[]
  },
  parameters: {
    docs: {
      description: {
        story: "Multiple panels can be expanded at once. Icons are supported beside titles."
      }
    }
  }
}`,...p.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: args => ({
    components: {
      Accordion
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <div style="padding: 2rem; max-width: 520px; margin: auto;">
        <Accordion v-bind="args">
          <template #overview>
            <p>This panel is open by default. Opening another closes this one.</p>
          </template>
          <template #details>
            <p>Details about the project, metrics, and analytics.</p>
          </template>
          <template #history>
            <p>Revision and activity history of your workspace.</p>
          </template>
        </Accordion>
      </div>
    \`
  }),
  args: {
    type: "single",
    defaultOpen: ["overview"],
    theme: "default",
    items: [{
      key: "overview",
      title: "Overview",
      icon: User
    }, {
      key: "details",
      title: "Details",
      icon: Settings
    }, {
      key: "history",
      title: "History",
      icon: FileText
    }] as AccordionItem[]
  },
  parameters: {
    docs: {
      description: {
        story: "Single mode allows only one accordion section to be open at a time — ideal for compact layouts like sidebars or settings."
      }
    }
  }
}`,...d.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: args => ({
    components: {
      Accordion
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <div style="padding: 2rem; max-width: 520px; margin: auto;">
        <Accordion v-bind="args">
          <template #intro>
            <p>This is a simple text-only accordion — no icons, minimal style.</p>
          </template>
          <template #details>
            <p>Clean and accessible design for basic content sections.</p>
          </template>
          <template #summary>
            <p>Perfect for documentation or help panels.</p>
          </template>
        </Accordion>
      </div>
    \`
  }),
  args: {
    type: "multiple",
    theme: "default",
    items: [{
      key: "intro",
      title: "Introduction"
    }, {
      key: "details",
      title: "Details"
    }, {
      key: "summary",
      title: "Summary"
    }] as AccordionItem[]
  },
  parameters: {
    docs: {
      description: {
        story: "Accordion example without icons — best for simple informational layouts."
      }
    }
  }
}`,...m.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: args => ({
    components: {
      Accordion
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <div style="padding: 2rem; max-width: 520px; margin: auto;">
        <Accordion v-bind="args">
          <template #active>
            <p>This section is active and expandable.</p>
          </template>
          <template #locked>
            <p>This section is disabled and cannot be opened.</p>
          </template>
          <template #info>
            <p>General information and helpful tips go here.</p>
          </template>
        </Accordion>
      </div>
    \`
  }),
  args: {
    type: "multiple",
    theme: "default",
    items: [{
      key: "active",
      title: "Active",
      icon: User
    }, {
      key: "locked",
      title: "Locked",
      icon: Lock,
      disabled: true
    }, {
      key: "info",
      title: "Info",
      icon: FileText
    }] as AccordionItem[]
  },
  parameters: {
    docs: {
      description: {
        story: "Demonstrates a disabled accordion item that cannot be opened or interacted with."
      }
    }
  }
}`,...u.parameters?.docs?.source}}};const K=["Default","SingleOpen","TextOnly","WithDisabled"];export{p as Default,d as SingleOpen,m as TextOnly,u as WithDisabled,K as __namedExportsOrder,G as default};
