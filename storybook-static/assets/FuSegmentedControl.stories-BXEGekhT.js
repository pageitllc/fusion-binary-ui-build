import{q as _,r as h,c as L,b as g,F as q,g as I,p as V,o as b,s as B,y as O,i as A,d as T,t as N}from"./iframe-oXApuAUj.js";import{_ as U}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{M as E}from"./monitor-CVFpVZxL.js";import{c as F}from"./createLucideIcon-CJDmVqsr.js";import"./preload-helper-Ct5FWWRu.js";/**
 * @license @lucide/vue v1.54.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const K={name:"columns-2",size:24,node:[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M12 3v18",key:"108xh3"}]],aliases:["columns"]},W=F(K);/**
 * @license @lucide/vue v1.54.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $={name:"smartphone",size:24,node:[["rect",{width:"14",height:"20",x:"5",y:"2",rx:"2",ry:"2",key:"1yt0o3"}],["path",{d:"M12 18h.01",key:"mhygvu"}]]},R=F($),j=["aria-label"],G=["aria-checked","tabindex","disabled","onClick"],C=_({__name:"FuSegmentedControl",props:{modelValue:{},options:{},size:{default:"md"},block:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},ariaLabel:{}},emits:["update:modelValue"],setup(e,{emit:f}){const a=e,D=f,k=h([]),w=L(()=>{const o=a.options.findIndex(l=>l.value===a.modelValue);return o===-1?a.options.findIndex(l=>!l.disabled):o});function z(o){return o===w.value}function S(o){a.disabled||o.disabled||o.value===a.modelValue||D("update:modelValue",o.value)}function M(o){const t={ArrowRight:1,ArrowDown:1,ArrowLeft:-1,ArrowUp:-1}[o.key];if(!t)return;const n=a.options.length;let s=w.value;for(let x=0;x<n&&(s=(s+t+n)%n,!!a.options[s].disabled);x++);o.preventDefault(),S(a.options[s]),k.value[s]?.focus()}return(o,l)=>(b(),g("div",{class:V(["fu-segmented",[`fu-segmented--${e.size}`,{"fu-segmented--block":e.block}]]),role:"radiogroup","aria-label":e.ariaLabel,onKeydown:M},[(b(!0),g(q,null,I(e.options,(t,n)=>(b(),g("button",{key:t.value,ref_for:!0,ref:s=>k.value[n]=s,type:"button",role:"radio",class:V(["fu-segmented__option",{"is-active":t.value===e.modelValue}]),"aria-checked":t.value===e.modelValue,tabindex:z(n)?0:-1,disabled:e.disabled||t.disabled,onClick:s=>S(t)},[t.icon?(b(),B(O(t.icon),{key:0,size:16,"stroke-width":2})):A("",!0),T("span",null,N(t.label),1)],10,G))),128))],42,j))}}),y=U(C,[["__scopeId","data-v-d73b450d"]]);C.__docgenInfo={exportName:"default",displayName:"FuSegmentedControl",description:"",tags:{},props:[{name:"modelValue",description:"Selected option value (use with `v-model`)",required:!0,type:{name:"string"}},{name:"options",required:!0,type:{name:"Array",elements:[{name:"FuSegmentedOption"}]}},{name:"size",required:!1,type:{name:"union",elements:[{name:'"sm"'},{name:'"md"'},{name:'"lg"'}]},defaultValue:{func:!1,value:'"md"'}},{name:"block",description:"Stretches the control to the full width with equal segments",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"disabled",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"ariaLabel",required:!1,type:{name:"string"}}],events:[{name:"update:modelValue",type:{names:["string"]}}],sourceFiles:["/Users/xavier/Documents/Websites/Skkido/Fusion-binary-ui/src/components/segmented/FuSegmentedControl.vue"]};const v=[{value:"desktop",label:"Desktop"},{value:"mobile",label:"Mobile"},{value:"both",label:"Side by side"}],Y={title:"Fusion/Navigation/FuSegmentedControl",component:y,tags:["autodocs"],parameters:{layout:"padded",docs:{description:{component:`
### **FuSegmentedControl**

A switch with a few options shown side by side, of which exactly one is selected, for example Desktop / Mobile / Side by side. Use it to change how the same content is shown. Use \`FuViewSwitcher\` when there are many options or they carry counts.

---

#### Key features
- **One selected option**, bound with \`v-model\`
- **Keyboard**: arrow keys move the selection, Tab enters and leaves the group
- **Accessible**: exposed as a radio group, each option as a radio
- **Theme aware**: colours come from Fusion tokens and the selected option has its own surface in dark mode
- **Sizes**: \`sm\`, \`md\` and \`lg\`, with \`block\` for a full width control
- **Icons** and per option \`disabled\`

---

#### Example

\`\`\`vue
<script setup lang="ts">
import { ref } from "vue";
const device = ref("desktop");
<\/script>

<template>
  <FuSegmentedControl
    v-model="device"
    aria-label="View"
    :options="[
      { value: 'desktop', label: 'Desktop' },
      { value: 'mobile', label: 'Mobile' },
      { value: 'both', label: 'Side by side' },
    ]"
  />
</template>
\`\`\`
        `}}},argTypes:{modelValue:{control:"text",description:"Selected option value"},options:{control:"object",description:"Options: value, label, optional icon and disabled"},size:{control:"select",options:["sm","md","lg"]},block:{control:"boolean",description:"Full width with equal segments"},disabled:{control:"boolean",description:"Disables every option"},ariaLabel:{control:"text"}}},p=e=>({components:{FuSegmentedControl:y},setup(){const f=h(e.modelValue);return{args:e,value:f}},template:'<FuSegmentedControl v-bind="args" v-model="value" />'}),r={render:p,args:{modelValue:"desktop",options:v,ariaLabel:"View"}},i={render:p,args:{modelValue:"desktop",ariaLabel:"View",options:[{value:"desktop",label:"Desktop",icon:E},{value:"mobile",label:"Mobile",icon:R},{value:"both",label:"Side by side",icon:W}]}},d={render:()=>({components:{FuSegmentedControl:y},setup(){return{value:h("mobile"),devices:v}},template:`
      <div style="display: flex; flex-direction: column; align-items: flex-start; gap: 16px;">
        <FuSegmentedControl v-model="value" :options="devices" size="sm" />
        <FuSegmentedControl v-model="value" :options="devices" size="md" />
        <FuSegmentedControl v-model="value" :options="devices" size="lg" />
      </div>
    `})},c={render:p,args:{modelValue:"mobile",options:v,block:!0},decorators:[()=>({template:'<div style="max-width: 420px;"><story /></div>'})]},u={render:p,args:{modelValue:"desktop",options:[{value:"desktop",label:"Desktop"},{value:"mobile",label:"Mobile"},{value:"both",label:"Side by side",disabled:!0}]}},m={render:p,args:{modelValue:"desktop",options:v,disabled:!0}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: interactive,
  args: {
    modelValue: "desktop",
    options: devices,
    ariaLabel: "View"
  }
}`,...r.parameters?.docs?.source},description:{story:"Default control with three text options.",...r.parameters?.docs?.description}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: interactive,
  args: {
    modelValue: "desktop",
    ariaLabel: "View",
    options: [{
      value: "desktop",
      label: "Desktop",
      icon: Monitor
    }, {
      value: "mobile",
      label: "Mobile",
      icon: Smartphone
    }, {
      value: "both",
      label: "Side by side",
      icon: Columns2
    }]
  }
}`,...i.parameters?.docs?.source},description:{story:"Options with icons.",...i.parameters?.docs?.description}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      FuSegmentedControl
    },
    setup() {
      const value = ref("mobile");
      return {
        value,
        devices
      };
    },
    template: \`
      <div style="display: flex; flex-direction: column; align-items: flex-start; gap: 16px;">
        <FuSegmentedControl v-model="value" :options="devices" size="sm" />
        <FuSegmentedControl v-model="value" :options="devices" size="md" />
        <FuSegmentedControl v-model="value" :options="devices" size="lg" />
      </div>
    \`
  })
}`,...d.parameters?.docs?.source},description:{story:"Three sizes.",...d.parameters?.docs?.description}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: interactive,
  args: {
    modelValue: "mobile",
    options: devices,
    block: true
  },
  decorators: [() => ({
    template: '<div style="max-width: 420px;"><story /></div>'
  })]
}`,...c.parameters?.docs?.source},description:{story:"Full width with equal segments.",...c.parameters?.docs?.description}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: interactive,
  args: {
    modelValue: "desktop",
    options: [{
      value: "desktop",
      label: "Desktop"
    }, {
      value: "mobile",
      label: "Mobile"
    }, {
      value: "both",
      label: "Side by side",
      disabled: true
    }]
  }
}`,...u.parameters?.docs?.source},description:{story:"One option disabled.",...u.parameters?.docs?.description}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: interactive,
  args: {
    modelValue: "desktop",
    options: devices,
    disabled: true
  }
}`,...m.parameters?.docs?.source},description:{story:"The whole control disabled.",...m.parameters?.docs?.description}}};const Z=["Default","WithIcons","Sizes","Block","DisabledOption","Disabled"];export{c as Block,r as Default,m as Disabled,u as DisabledOption,d as Sizes,i as WithIcons,Z as __namedExportsOrder,Y as default};
