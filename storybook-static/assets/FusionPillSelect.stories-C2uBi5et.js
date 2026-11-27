import{r as v}from"./iframe-DLJy-DHW.js";import{F as g}from"./FusionPillSelect-CA-1S41A.js";import{c as u}from"./createLucideIcon-CURt8gZv.js";import{I as y}from"./image-CmEpHuTp.js";import{F as x}from"./file-text-BU0GPV47.js";import{G as w}from"./globe-D6JH5QUw.js";import"./preload-helper-Ct5FWWRu.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";/**
 * @license @lucide/vue v1.54.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const k={name:"camera",size:24,node:[["path",{d:"M13.997 4a2 2 0 0 1 1.76 1.05l.486.9A2 2 0 0 0 18.003 7H20a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h1.997a2 2 0 0 0 1.759-1.048l.489-.904A2 2 0 0 1 10.004 4z",key:"18u6gg"}],["circle",{cx:"12",cy:"13",r:"3",key:"1vg3eu"}]]},F=u(k);/**
 * @license @lucide/vue v1.54.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const S={name:"film",size:24,node:[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M7 3v18",key:"bbkbws"}],["path",{d:"M3 7.5h4",key:"zfgn84"}],["path",{d:"M3 12h18",key:"1i2n21"}],["path",{d:"M3 16.5h4",key:"1230mu"}],["path",{d:"M17 3v18",key:"in4fa5"}],["path",{d:"M17 7.5h4",key:"myr1c1"}],["path",{d:"M17 16.5h4",key:"go4c1d"}]]},z=u(S);/**
 * @license @lucide/vue v1.54.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const P={name:"frame",size:24,node:[["line",{x1:"22",x2:"2",y1:"6",y2:"6",key:"15w7dq"}],["line",{x1:"22",x2:"2",y1:"18",y2:"18",key:"1ip48p"}],["line",{x1:"6",x2:"6",y1:"2",y2:"22",key:"a2lnyx"}],["line",{x1:"18",x2:"18",y1:"2",y2:"22",key:"8vb6jd"}]]},L=u(P);/**
 * @license @lucide/vue v1.54.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const I={name:"sticky-note",size:24,node:[["path",{d:"M21 9a2.4 2.4 0 0 0-.706-1.706l-3.588-3.588A2.4 2.4 0 0 0 15 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2z",key:"1dfntj"}],["path",{d:"M15 3v5a1 1 0 0 0 1 1h5",key:"6s6qgf"}]]},D=u(I),G={title:"Fusion/Forms/FusionPillSelect",component:g,tags:["autodocs"],parameters:{layout:"padded",docs:{description:{component:'\nA row of rounded pills where **one** is chosen. Good for a short list of types or modes ("Figma frames", "Images", "Video"). It wraps onto more lines when the space is narrow.\n\n- `options`: `{ value, label, icon?, disabled?, disabledReason? }`. `icon` is a Lucide component or an image URL.\n- `v-model`: the chosen value.\n- `variant`: `outline` (thin border, the chosen pill keeps it) or `filled` (the chosen pill is solid dark).\n- `size`: `xs` (24px, default), `sm` (36px), `md` (44px), `lg` (52px).\n- `disabled` turns off the whole group. `disabled` on one option turns off just that pill, and `disabledReason` is its tooltip.\n- `readonly` shows the choice but does not change it.\n- `wrap`: set to false for one scrolling line.\n- Built as a radio group: arrow keys move between pills (skipping disabled ones).\n- `color`, `font` and `fontSize` set the chosen colour and text for themed uses such as onboarding.\n\nTo choose several at once use **FusionPillMultiSelect**. For a joined bar of two or three options use **FuSegmentedControl**.\n\n```vue\n<FusionPillSelect\n  v-model="type"\n  variant="filled"\n  ariaLabel="Type of work"\n  :options="[\n    { value: \'figma\', label: \'Figma frames\' },\n    { value: \'images\', label: \'Images\' },\n    { value: \'video\', label: \'Video\' },\n  ]"\n/>\n```\n'}}},argTypes:{variant:{control:"radio",options:["outline","filled"]},size:{control:"radio",options:["xs","sm","md","lg"]},disabled:{control:"boolean"},readonly:{control:"boolean"},wrap:{control:"boolean"}}},o=[{value:"figma",label:"Figma frames"},{value:"images",label:"Images"},{value:"video",label:"Video"},{value:"photos",label:"Photos"},{value:"doc",label:"Document"},{value:"url",label:"URL"},{value:"none",label:"Nothing, just my note"}];function a(e,h,f=""){return{components:{FusionPillSelect:g},setup(){const b=v(h);return{args:e,value:b}},template:`<div style="${f}"><FusionPillSelect v-bind="args" v-model="value" /><p style="font-size:13px;margin-top:14px">Chosen: <b>{{ value }}</b></p></div>`}}const n={name:"Outline (default)",args:{options:o,size:"xs",ariaLabel:"Type of work"},render:e=>a(e,"photos","max-width:560px")},s={name:"Filled: the chosen pill is solid dark",args:{options:o,variant:"filled",ariaLabel:"Type of work"},render:e=>a(e,"photos","max-width:560px")},i={args:{variant:"filled",options:[{value:"figma",label:"Figma frames",icon:L},{value:"images",label:"Images",icon:y},{value:"video",label:"Video",icon:z},{value:"photos",label:"Photos",icon:F},{value:"doc",label:"Document",icon:x},{value:"url",label:"URL",icon:w},{value:"none",label:"Just my note",icon:D}]},render:e=>a(e,"images","max-width:720px")},r={render:()=>({components:{FusionPillSelect:g},setup(){return{a:v("images"),types:o.slice(0,4)}},template:`
<div style="display:flex;flex-direction:column;gap:18px">
  <FusionPillSelect v-model="a" :options="types" size="xs" variant="filled" />
  <FusionPillSelect v-model="a" :options="types" size="sm" variant="filled" />
  <FusionPillSelect v-model="a" :options="types" size="md" variant="filled" />
  <FusionPillSelect v-model="a" :options="types" size="lg" variant="filled" />
</div>`})},l={name:"One pill disabled, with a reason on hover",args:{variant:"filled",options:[{value:"figma",label:"Figma frames"},{value:"images",label:"Images"},{value:"video",label:"Video",disabled:!0,disabledReason:"Videos need a link first"},{value:"photos",label:"Photos"}]},render:e=>a(e,"images")},t={args:{options:o.slice(0,4),variant:"filled",disabled:!0},render:e=>a(e,"images")},d={name:"Read only (shows the choice, cannot change it)",args:{options:o.slice(0,4),variant:"filled",readonly:!0},render:e=>a(e,"video")},p={name:"A narrow space: it wraps",args:{options:o,variant:"filled"},render:e=>a(e,"figma","max-width:300px")},c={name:"No wrap: one scrolling line",args:{options:o,variant:"filled",wrap:!1},render:e=>a(e,"figma","max-width:380px")},m={name:"Keyboard: click one, then use the arrow keys",args:{options:o.slice(0,5),variant:"filled",ariaLabel:"Type of work"},render:e=>a(e,"images")};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  name: "Outline (default)",
  args: {
    options: types,
    size: "xs",
    ariaLabel: "Type of work"
  },
  render: args => bound(args, "photos", "max-width:560px")
}`,...n.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  name: "Filled: the chosen pill is solid dark",
  args: {
    options: types,
    variant: "filled",
    ariaLabel: "Type of work"
  },
  render: args => bound(args, "photos", "max-width:560px")
}`,...s.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "filled",
    options: [{
      value: "figma",
      label: "Figma frames",
      icon: Frame
    }, {
      value: "images",
      label: "Images",
      icon: Image
    }, {
      value: "video",
      label: "Video",
      icon: Film
    }, {
      value: "photos",
      label: "Photos",
      icon: Camera
    }, {
      value: "doc",
      label: "Document",
      icon: FileText
    }, {
      value: "url",
      label: "URL",
      icon: Globe
    }, {
      value: "none",
      label: "Just my note",
      icon: StickyNote
    }]
  },
  render: args => bound(args, "images", "max-width:720px")
}`,...i.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      FusionPillSelect
    },
    setup() {
      const a = ref("images");
      return {
        a,
        types: types.slice(0, 4)
      };
    },
    template: \`
<div style="display:flex;flex-direction:column;gap:18px">
  <FusionPillSelect v-model="a" :options="types" size="xs" variant="filled" />
  <FusionPillSelect v-model="a" :options="types" size="sm" variant="filled" />
  <FusionPillSelect v-model="a" :options="types" size="md" variant="filled" />
  <FusionPillSelect v-model="a" :options="types" size="lg" variant="filled" />
</div>\`
  })
}`,...r.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  name: "One pill disabled, with a reason on hover",
  args: {
    variant: "filled",
    options: [{
      value: "figma",
      label: "Figma frames"
    }, {
      value: "images",
      label: "Images"
    }, {
      value: "video",
      label: "Video",
      disabled: true,
      disabledReason: "Videos need a link first"
    }, {
      value: "photos",
      label: "Photos"
    }]
  },
  render: args => bound(args, "images")
}`,...l.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    options: types.slice(0, 4),
    variant: "filled",
    disabled: true
  },
  render: args => bound(args, "images")
}`,...t.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  name: "Read only (shows the choice, cannot change it)",
  args: {
    options: types.slice(0, 4),
    variant: "filled",
    readonly: true
  },
  render: args => bound(args, "video")
}`,...d.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  name: "A narrow space: it wraps",
  args: {
    options: types,
    variant: "filled"
  },
  render: args => bound(args, "figma", "max-width:300px")
}`,...p.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  name: "No wrap: one scrolling line",
  args: {
    options: types,
    variant: "filled",
    wrap: false
  },
  render: args => bound(args, "figma", "max-width:380px")
}`,...c.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  name: "Keyboard: click one, then use the arrow keys",
  args: {
    options: types.slice(0, 5),
    variant: "filled",
    ariaLabel: "Type of work"
  },
  render: args => bound(args, "images")
}`,...m.parameters?.docs?.source}}};const W=["Default","Filled","WithIcons","Sizes","OneOptionDisabled","WholeGroupDisabled","ReadOnly","NarrowSoItWraps","OneScrollingLine","KeyboardAndLabels"];export{n as Default,s as Filled,m as KeyboardAndLabels,p as NarrowSoItWraps,l as OneOptionDisabled,c as OneScrollingLine,d as ReadOnly,r as Sizes,t as WholeGroupDisabled,i as WithIcons,W as __namedExportsOrder,G as default};
