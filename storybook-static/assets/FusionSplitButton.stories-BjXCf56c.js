import{q as Se,r as p,c as h,v as ye,b as m,d as F,s as D,y as ee,i as k,A as H,f as ne,u as te,j as ke,z as Be,T as xe,m as ae,p as ie,n as Fe,o as r,F as R,g as oe,t as G}from"./iframe-Bit2fKoK.js";import{C as _e}from"./chevron-down-BVqdWp0k.js";import{C as Me}from"./check-DzxBtvcd.js";import{_ as Ce}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{U as se}from"./user-ilvVHAb5.js";import{M as le,B as re}from"./map-pin-CwxvroIE.js";import{T as ue}from"./trash-BRtQSCKA.js";import{S as De}from"./star-DK3-mIdM.js";import{F as Ae}from"./funnel-CtVzjEYZ.js";import{U as ze}from"./users-Ct8QH-Oc.js";import{c as ce}from"./createLucideIcon-xyDXa4T9.js";import{P as Oe}from"./plus-D9zVjLWI.js";import{P as Ue}from"./pencil-DTtodqD_.js";import{C as Te}from"./copy-BFpBXG-1.js";import{P as Le}from"./pin-CvXoqPQk.js";import{S as We}from"./share-2-Dx4hpAOg.js";import{X as Ie}from"./x-J4WyOWB5.js";import"./preload-helper-Ct5FWWRu.js";/**
 * @license @lucide/vue v1.54.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pe={name:"save",size:24,node:[["path",{d:"M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z",key:"1c8476"}],["path",{d:"M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7",key:"1ydtos"}],["path",{d:"M7 3v4a1 1 0 0 0 1 1h7",key:"t51u73"}]]},$e=ce(Pe);/**
 * @license @lucide/vue v1.54.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ee={name:"undo-2",size:24,node:[["path",{d:"M9 14 4 9l5-5",key:"102s5s"}],["path",{d:"M4 9h10.5a5.5 5.5 0 0 1 5.5 5.5a5.5 5.5 0 0 1-5.5 5.5H11",key:"f3b9sd"}]]},Ne=ce(Ee),Ve=["disabled"],qe={class:"fu-split-button__label"},He=["aria-expanded","aria-controls","aria-label","disabled"],Re=["aria-label"],Ge={key:0,class:"fu-split-button__divider",role:"separator"},je=["aria-labelledby"],Xe=["id"],Ke=["role","aria-checked","aria-disabled","onClick"],Ye=["src"],Je={class:"fu-split-button__option-text"},Qe={class:"fu-split-button__option-label"},Ze={key:0,class:"fu-split-button__option-description"},de=Se({__name:"FusionSplitButton",props:{options:{default:()=>[]},groups:{default:void 0},disabled:{type:Boolean},size:{default:"sm"},variant:{default:"solid"},color:{},icon:{},align:{default:"right"},buttonWidth:{},ariaLabel:{default:"Toggle dropdown"}},emits:["main-action","select"],setup(l,{expose:u,emit:c}){const o=l,g=c,d=p(!1),f=p(null),B=p(null),_=p(null),v=p([]),s=p({}),b=`fu-split-button-${Math.random().toString(36).slice(2,9)}`,S=h(()=>`fu-split-button--${o.size}`),pe=h(()=>`fu-split-button--${o.variant}`),me=h(()=>({...o.color?{"--fu-split-bg":o.color}:{},...o.buttonWidth?{width:o.buttonWidth}:{}})),ve=h(()=>o.groups?.length?o.groups:[{actions:o.options??[]}]),j=h(()=>{let e=0;return ve.value.filter(i=>i.actions?.length).map((i,a)=>({label:i.label,entries:i.actions.map((t,n)=>({item:t,index:e++,key:`${a}-${n}-${t.value??t.label}`}))}))}),P=h(()=>j.value.flatMap(e=>e.entries.map(i=>i.item)));function ge(){o.disabled||(d.value?y():$())}async function $(e="selected"){if(o.disabled||d.value)return;v.value=[],d.value=!0,await Fe(),M(),window.addEventListener("click",K),window.addEventListener("resize",M),window.addEventListener("scroll",M,!0);const i=P.value;let a=-1;e==="selected"&&(a=i.findIndex(t=>t.selected&&!t.disabled)),a===-1&&(a=E(e==="last"?-1:1)),v.value[a]?.focus()}function y({focusToggle:e=!1}={}){d.value&&(d.value=!1,X(),e&&_.value?.focus())}function X(){window.removeEventListener("click",K),window.removeEventListener("resize",M),window.removeEventListener("scroll",M,!0)}function K(e){B.value?.contains(e.target)||f.value?.contains(e.target)||y()}function M(e){if(!B.value||!f.value||e?.type==="scroll"&&f.value.contains(e.target))return;const i=B.value.getBoundingClientRect(),a=f.value,t=4,n=8,x=a.offsetWidth,N=a.scrollHeight+(a.offsetHeight-a.clientHeight),V=window.innerHeight-i.bottom-t-n,Q=i.top-t-n,Z=N>V&&Q>V,q=Z?Q:V,he=Math.min(N,q),we=Z?i.top-t-he:i.bottom+t;let C=i.left;o.align==="right"?C=i.right-x:o.align==="center"&&(C=i.left+i.width/2-x/2),C=Math.max(n,Math.min(C,window.innerWidth-x-n)),s.value={position:"absolute",top:`${we+window.scrollY}px`,left:`${C+window.scrollX}px`,zIndex:"1000",...N>q?{maxHeight:`${q}px`}:{}}}function fe(){o.disabled||g("main-action")}function be(e){e.disabled||(e.onClick?.(),g("select",e),y({focusToggle:!0}))}function E(e){const i=P.value,a=i.length;for(let t=0;t<a;t++){const n=e===1?t:a-1-t;if(!i[n].disabled)return n}return-1}function Y(e){const i=P.value,a=i.length;if(!a)return;let t=v.value.findIndex(n=>n===document.activeElement);t===-1&&(t=e===1?-1:a);for(let n=0;n<a&&(t=(t+e+a)%a,!!i[t]?.disabled);n++);v.value[t]?.focus()}function J(e){if(!d.value){e.target===_.value&&["ArrowDown","ArrowUp"].includes(e.key)&&(e.preventDefault(),$(e.key==="ArrowUp"?"last":"first"));return}switch(e.key){case"Escape":e.preventDefault(),e.stopPropagation(),y({focusToggle:!0});break;case"ArrowDown":e.preventDefault(),Y(1);break;case"ArrowUp":e.preventDefault(),Y(-1);break;case"Home":e.preventDefault(),v.value[E(1)]?.focus();break;case"End":e.preventDefault(),v.value[E(-1)]?.focus();break;case"Tab":f.value?.contains(e.target)?(e.preventDefault(),y({focusToggle:!0})):y();break}}return ye(X),u({open:$,close:y}),(e,i)=>(r(),m("div",{class:ie(["fu-split-button",[S.value,pe.value]]),style:ae(me.value),ref_key:"splitButtonRef",ref:B,onKeydown:J},[F("button",{class:"fu-split-button__main",disabled:l.disabled,onClick:fe,type:"button"},[l.icon?(r(),D(ee(l.icon),{key:0,class:"fu-split-button__icon"})):k("",!0),H(e.$slots,"main",{open:d.value},()=>[F("span",qe,[H(e.$slots,"default",{},void 0,!0)])],!0),H(e.$slots,"badge",{},void 0,!0)],8,Ve),F("button",{ref_key:"toggleRef",ref:_,class:"fu-split-button__toggle",onClick:ge,"aria-haspopup":"menu","aria-expanded":d.value,"aria-controls":d.value?b:void 0,"aria-label":l.ariaLabel,disabled:l.disabled,type:"button"},[ne(te(_e))],8,He),(r(),D(xe,{to:"body"},[ne(Be,{name:"fade"},{default:ke(()=>[d.value?(r(),m("div",{key:0,id:b,ref_key:"dropdownRef",ref:f,class:"fu-split-button__dropdown",role:"menu","aria-label":l.ariaLabel,style:ae(s.value),onKeydown:J},[(r(!0),m(R,null,oe(j.value,(a,t)=>(r(),m(R,{key:t},[t>0?(r(),m("div",Ge)):k("",!0),F("div",{role:"group","aria-labelledby":a.label?`${b}-g${t}`:void 0},[a.label?(r(),m("div",{key:0,id:`${b}-g${t}`,class:"fu-split-button__group-label"},G(a.label),9,Xe)):k("",!0),(r(!0),m(R,null,oe(a.entries,n=>(r(),m("button",{key:n.key,ref_for:!0,ref:x=>v.value[n.index]=x,type:"button",class:ie(["fu-split-button__option",{"fu-split-button__option--selected":n.item.selected,"fu-split-button__option--disabled":n.item.disabled}]),role:n.item.selected!==void 0?"menuitemradio":"menuitem","aria-checked":n.item.selected!==void 0?!!n.item.selected:void 0,"aria-disabled":n.item.disabled||void 0,tabindex:"-1",onClick:x=>be(n.item)},[n.item.type==="image"&&n.item.imageUrl?(r(),m("img",{key:0,src:n.item.imageUrl,class:"fu-split-button__option-image",alt:""},null,8,Ye)):n.item.icon?(r(),D(ee(n.item.icon),{key:1,class:"fu-split-button__option-icon","aria-hidden":"true"})):k("",!0),F("span",Je,[F("span",Qe,G(n.item.label),1),n.item.description?(r(),m("small",Ze,G(n.item.description),1)):k("",!0)]),n.item.selected?(r(),D(te(Me),{key:2,class:"fu-split-button__option-check","aria-hidden":"true"})):k("",!0)],10,Ke))),128))],8,je)],64))),128))],44,Re)):k("",!0)]),_:1})]))],38))}}),w=Ce(de,[["__scopeId","data-v-6b026e89"]]);de.__docgenInfo={exportName:"default",displayName:"FusionSplitButton",description:"",tags:{},expose:[{name:"open"},{name:"close"}],props:[{name:"options",description:"Flat list of options. Ignored when `groups` is given.",required:!1,type:{name:"Array",elements:[{name:"SplitButtonItem"}]},defaultValue:{func:!1,value:"() => []"}},{name:"groups",description:"Labelled sections with dividers between them. Used instead of `options`.",required:!1,type:{name:"Array",elements:[{name:"SplitButtonGroup"}]},defaultValue:{func:!1,value:"undefined"}},{name:"disabled",required:!1,type:{name:"boolean"}},{name:"size",required:!1,type:{name:"union",elements:[{name:'"sm"'},{name:'"md"'},{name:'"lg"'}]},defaultValue:{func:!1,value:'"sm"'}},{name:"variant",required:!1,type:{name:"union",elements:[{name:'"solid"'},{name:'"subtle"'},{name:'"outline"'},{name:'"ghost"'},{name:'"danger"'}]},defaultValue:{func:!1,value:'"solid"'}},{name:"color",required:!1,type:{name:"string"}},{name:"icon",required:!1,type:{name:"any"}},{name:"align",required:!1,type:{name:"union",elements:[{name:'"left"'},{name:'"center"'},{name:'"right"'}]},defaultValue:{func:!1,value:'"right"'}},{name:"buttonWidth",required:!1,type:{name:"string"}},{name:"ariaLabel",description:"Accessible name for the toggle and the menu.",required:!1,type:{name:"string"},defaultValue:{func:!1,value:'"Toggle dropdown"'}}],events:[{name:"main-action"},{name:"select",type:{names:["SplitButtonItem"]}}],slots:[{name:"main",scoped:!0,bindings:[{name:"open",title:"binding",description:""}],description:"Replaces the whole main button content (label + badge)."},{name:"default",description:"Main button label."},{name:"badge",description:'Small badge or dot shown after the label, e.g. "unsaved changes".'}],sourceFiles:["/Users/xavier/Documents/Websites/Skkido/Fusion-binary-ui/src/components/splitButton/FusionSplitButton.vue"]};const Sn={title:"Fusion/Buttons/FusionSplitButton",component:w,tags:["autodocs"],parameters:{docs:{description:{component:`
The **FusionSplitButton** combines a primary action with a dropdown of secondary actions.

It follows the **same sizing, variant, and styling system as \`FusionButton\`**, so it fits perfectly into your design system.

---

## Features

- Primary action + dropdown actions
- Flat \`options\` or grouped \`groups\` (headings + dividers, like \`DropdownMenu\`)
- Items support \`icon\`, \`description\`, \`selected\` (check mark) and \`disabled\`
- Icon or image options
- Teleported dropdown
- Smart positioning: flips upwards when there isn't room below, scrolls when the menu is taller than the screen
- Keyboard: Tab to the toggle, Enter / Space / Arrow Down to open, arrows to move, Enter to pick, Escape to close
- ARIA: \`role="menu"\`, \`menuitem\` / \`menuitemradio\`, \`aria-haspopup\` on the toggle, \`ariaLabel\` prop
- \`badge\` slot for a small dot or badge next to the main label
- Size variants: \`sm | md | lg\`
- Style variants: \`solid | subtle | outline | ghost | danger\`
- Optional custom background color
- Optional button width
- Fully typed with TypeScript
- Dropdown options can have individual \`onClick\` handlers

---

### Example Usage

\`\`\`vue
<template>
  <FusionSplitButton
    :options="options"
    @main-action="handleMainAction"
    buttonWidth="200px"
    variant="solid"
    size="md"
  >
    Save
  </FusionSplitButton>
</template>

<script setup lang="ts">
import FusionSplitButton from "@/components/splitButton/FusionSplitButton.vue";
import { User, MapPin, Briefcase } from "@lucide/vue";

function openAssignModal() {
  alert('Assign User clicked');
}

function openMoveModal() {
  alert('Move Location clicked');
}

function openMarketingModal() {
  alert('Marketing Team clicked');
}

const options = [
  {
    label: "Assign User",
    value: "assign",
    type: "icon",
    icon: User,
    onClick: openAssignModal,
  },
  {
    label: "Move Location",
    value: "move",
    type: "icon",
    icon: MapPin,
    onClick: openMoveModal,
  },
  {
    label: "Marketing Team",
    value: "marketing",
    type: "icon",
    icon: Briefcase,
    onClick: openMarketingModal,
  },
];

function handleMainAction() {
  alert("Main action clicked");
}
<\/script>
\`\`\`
`}}},argTypes:{options:{control:"object",description:"Flat list of dropdown options with label, value, and optional icon or image."},groups:{control:"object",description:"Labelled sections (`{ label?, actions[] }`) with dividers between them. When given, it is used instead of `options`."},ariaLabel:{control:"text",description:'Accessible name for the toggle and the menu. Defaults to "Toggle dropdown".'},align:{control:"select",options:["left","center","right"],description:"Which edge of the button the menu lines up with."},size:{control:"select",options:["sm","md","lg"],description:"Controls the size of the split button."},variant:{control:"select",options:["solid","subtle","outline","ghost","danger"],description:"Visual style variant (same as FusionButton)."},color:{control:"color",description:"Optional custom background color (solid variant only)."},buttonWidth:{control:"text",description:"Optional width for the button wrapper (e.g., '200px', '100%')."},disabled:{control:"boolean",description:"Disables both the main button and dropdown."}}},I=[{label:"Assign User",value:"assign",type:"icon",icon:se},{label:"Move Location",value:"move",type:"icon",icon:le},{label:"Marketing Team",value:"marketing",type:"icon",icon:re}],en=[{label:"Alice",value:"a",type:"image",imageUrl:"/src/stories/assets/avatars/d1499909450ba526d5297e3ebc7f6d07.png"},{label:"Ben",value:"b",type:"image",imageUrl:"/src/stories/assets/avatars/70a23294beb91b4ad5a439e2c6ea5a6d.png"},{label:"Charlie",value:"c",type:"image",imageUrl:"/src/stories/assets/avatars/cae99bb14b21ec41ecf03b58f59ff292.png"}],A={args:{options:I,size:"md",variant:"solid",buttonWidth:"180px"},render:l=>({components:{FusionSplitButton:w},setup(){const u=p(null);function c(g){u.value=g.value}function o(){alert("Main action clicked")}return{args:l,selected:u,handleSelect:c,handleMainAction:o}},template:`
      <FusionSplitButton
        v-bind="args"
        @select="handleSelect"
        @main-action="handleMainAction"
      >
        Save
      </FusionSplitButton>

      <p style="margin-top: 8px">Selected: {{ selected }}</p>
    `})},z={render:()=>({components:{FusionSplitButton:w},setup(){return{baseOptions:I}},template:`
      <div style="display: flex; gap: 12px; flex-wrap: wrap">
        <FusionSplitButton variant="solid" :options="baseOptions">Solid</FusionSplitButton>
        <FusionSplitButton variant="subtle" :options="baseOptions">Subtle</FusionSplitButton>
        <FusionSplitButton variant="outline" :options="baseOptions">Outline</FusionSplitButton>
        <FusionSplitButton variant="ghost" :options="baseOptions">Ghost</FusionSplitButton>
        <FusionSplitButton variant="danger" :options="baseOptions">Danger</FusionSplitButton>
      </div>
    `})},O={args:{options:I,variant:"solid",color:"#7c3aed",size:"md",buttonWidth:"500px"},render:l=>({components:{FusionSplitButton:w},setup(){return{args:l}},template:`
      <FusionSplitButton v-bind="args">
        Purple Action
      </FusionSplitButton>
    `})},U={args:{options:en,size:"lg",variant:"outline",buttonWidth:"220px"},render:l=>({components:{FusionSplitButton:w},setup(){const u=p(null);function c(o){u.value=o.value}return{args:l,selected:u,handleSelect:c}},template:`
      <FusionSplitButton
        v-bind="args"
        @select="handleSelect"
      >
        Assign
      </FusionSplitButton>

      <p style="margin-top: 8px">Selected: {{ selected }}</p>
    `})},T={args:{options:I,disabled:!0,size:"md",variant:"solid"},render:l=>({components:{FusionSplitButton:w},template:`
      <FusionSplitButton v-bind="args">
        Disabled
      </FusionSplitButton>
    `})},L={parameters:{docs:{description:{story:`
Pass \`groups\` instead of \`options\` for a menu with headings and dividers, shaped like \`DropdownMenu\`'s \`groups\`.
Leave \`label\` out for a group with no heading (here, *Delete view…*).

Items can show a \`description\`, a check (\`selected\`) and can be \`disabled\`. Disabled items are skipped by the arrow keys.
An item's \`onClick\` runs first, then \`select\` is emitted, then the menu closes.

The \`badge\` slot shows the "unsaved changes" dot inside the main part. Toggle **Changed** to see the *Changes* group and the solid variant.

\`\`\`vue
<FusionSplitButton
  :groups="groups"
  :variant="changed ? 'solid' : 'outline'"
  size="sm"
  align="right"
  ariaLabel="Saved views and view options"
  @main-action="saveChanges"
>
  {{ active ? active.name : "Saved views" }}
  <template #badge>
    <span v-if="changed" class="dot" />
  </template>
</FusionSplitButton>
\`\`\`
`}}},render:()=>({components:{FusionSplitButton:w},setup(){const l=[{id:"hot",name:"Hot leads",icon:De,shared:!1,isDefault:!0},{id:"gold",name:"Gold tier, no NDA",icon:Ae,shared:!1,isDefault:!1},{id:"next",name:"Starting next quarter",icon:ze,shared:!0,isDefault:!1}],u=p("hot"),c=p(!1),o=p([]),g=s=>{o.value=[s,...o.value].slice(0,5)},d=s=>({label:s.name,value:s.id,icon:s.icon,description:s.isDefault?"Opens by default":void 0,selected:s.id===u.value,onClick:()=>{u.value=s.id,c.value=!1}}),f=h(()=>{const s=l.find(S=>S.id===u.value),b=[{label:"My views",actions:l.filter(S=>!S.shared).map(d)},{label:"Shared with workspace",actions:l.filter(S=>S.shared).map(d)}];return c.value&&b.push({label:"Changes",actions:[{label:"Save changes",value:"save",icon:$e,disabled:!s,onClick:()=>c.value=!1},{label:"Save as new view…",value:"save-as",icon:Oe},{label:"Discard changes",value:"discard",icon:Ne,onClick:()=>c.value=!1}]}),s&&b.push({label:"This view",actions:[{label:"Rename",value:"rename",icon:Ue},{label:"Duplicate",value:"duplicate",icon:Te},{label:"Open by default",value:"default",icon:Le,disabled:s.isDefault},{label:s.shared?"Make personal":"Share with workspace",value:"share",icon:We},{label:"Close view",value:"close",icon:Ie,onClick:()=>u.value=null}]},{actions:[{label:"Delete view…",value:"delete",icon:ue}]}),b}),B=h(()=>l.find(s=>s.id===u.value)?.name??"Saved views");function _(s){g(`select → ${s.value??s.label}`)}function v(){c.value?(c.value=!1,g("main-action → saved changes")):g("main-action")}return{groups:f,changed:c,activeName:B,log:o,onSelect:_,onMain:v}},template:`
      <div style="display: flex; flex-direction: column; align-items: flex-end; gap: 16px; max-width: 520px">
        <div style="display: flex; gap: 8px; align-items: center">
          <label style="font-size: 13px; display: flex; gap: 6px; align-items: center">
            <input type="checkbox" v-model="changed" /> Changed
          </label>
          <FusionSplitButton
            :groups="groups"
            :variant="changed ? 'solid' : 'outline'"
            size="sm"
            align="right"
            ariaLabel="Saved views and view options"
            @main-action="onMain"
            @select="onSelect"
          >
            {{ activeName }}
            <template #badge>
              <span
                v-if="changed"
                aria-label="Unsaved changes"
                style="width: 6px; height: 6px; border-radius: 50%; background: currentColor; flex: none"
              />
            </template>
          </FusionSplitButton>
        </div>
        <ul style="font-size: 12px; margin: 0; padding: 0; list-style: none; opacity: 0.7; align-self: stretch">
          <li v-for="(line, i) in log" :key="i">{{ line }}</li>
        </ul>
      </div>
    `})},W={parameters:{docs:{description:{story:"When there isn't room below the button, the menu opens above it. When it doesn't fit either way, it uses the bigger side and scrolls."}}},render:()=>({components:{FusionSplitButton:w},setup(){return{groups:[{label:"Create",actions:[{label:"New lead",value:"lead",icon:se},{label:"New company",value:"company",icon:re}]},{label:"Move",actions:[{label:"Move location",value:"move",icon:le,description:"Pick a new office"}]},{actions:[{label:"Delete",value:"delete",icon:ue}]}]}},template:`
      <div style="height: 360px; display: flex; align-items: flex-end">
        <FusionSplitButton :groups="groups" align="left" variant="subtle" size="md">Actions</FusionSplitButton>
      </div>
    `})};A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  args: {
    options: baseOptions,
    size: "md",
    variant: "solid",
    buttonWidth: "180px"
  },
  render: args => ({
    components: {
      FusionSplitButton
    },
    setup() {
      const selected = ref<string | number | null>(null);
      function handleSelect(option: Option) {
        selected.value = option.value;
      }
      function handleMainAction() {
        alert("Main action clicked");
      }
      return {
        args,
        selected,
        handleSelect,
        handleMainAction
      };
    },
    template: \`
      <FusionSplitButton
        v-bind="args"
        @select="handleSelect"
        @main-action="handleMainAction"
      >
        Save
      </FusionSplitButton>

      <p style="margin-top: 8px">Selected: {{ selected }}</p>
    \`
  })
}`,...A.parameters?.docs?.source}}};z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      FusionSplitButton
    },
    setup() {
      return {
        baseOptions
      };
    },
    template: \`
      <div style="display: flex; gap: 12px; flex-wrap: wrap">
        <FusionSplitButton variant="solid" :options="baseOptions">Solid</FusionSplitButton>
        <FusionSplitButton variant="subtle" :options="baseOptions">Subtle</FusionSplitButton>
        <FusionSplitButton variant="outline" :options="baseOptions">Outline</FusionSplitButton>
        <FusionSplitButton variant="ghost" :options="baseOptions">Ghost</FusionSplitButton>
        <FusionSplitButton variant="danger" :options="baseOptions">Danger</FusionSplitButton>
      </div>
    \`
  })
}`,...z.parameters?.docs?.source}}};O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  args: {
    options: baseOptions,
    variant: "solid",
    color: "#7c3aed",
    size: "md",
    buttonWidth: "500px"
  },
  render: args => ({
    components: {
      FusionSplitButton
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <FusionSplitButton v-bind="args">
        Purple Action
      </FusionSplitButton>
    \`
  })
}`,...O.parameters?.docs?.source}}};U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
  args: {
    options: avatarOptions,
    size: "lg",
    variant: "outline",
    buttonWidth: "220px"
  },
  render: args => ({
    components: {
      FusionSplitButton
    },
    setup() {
      const selected = ref<string | number | null>(null);
      function handleSelect(option: Option) {
        selected.value = option.value;
      }
      return {
        args,
        selected,
        handleSelect
      };
    },
    template: \`
      <FusionSplitButton
        v-bind="args"
        @select="handleSelect"
      >
        Assign
      </FusionSplitButton>

      <p style="margin-top: 8px">Selected: {{ selected }}</p>
    \`
  })
}`,...U.parameters?.docs?.source}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  args: {
    options: baseOptions,
    disabled: true,
    size: "md",
    variant: "solid"
  },
  render: args => ({
    components: {
      FusionSplitButton
    },
    template: \`
      <FusionSplitButton v-bind="args">
        Disabled
      </FusionSplitButton>
    \`
  })
}`,...T.parameters?.docs?.source}}};L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: \`
Pass \\\`groups\\\` instead of \\\`options\\\` for a menu with headings and dividers, shaped like \\\`DropdownMenu\\\`'s \\\`groups\\\`.
Leave \\\`label\\\` out for a group with no heading (here, *Delete view…*).

Items can show a \\\`description\\\`, a check (\\\`selected\\\`) and can be \\\`disabled\\\`. Disabled items are skipped by the arrow keys.
An item's \\\`onClick\\\` runs first, then \\\`select\\\` is emitted, then the menu closes.

The \\\`badge\\\` slot shows the "unsaved changes" dot inside the main part. Toggle **Changed** to see the *Changes* group and the solid variant.

\\\`\\\`\\\`vue
<FusionSplitButton
  :groups="groups"
  :variant="changed ? 'solid' : 'outline'"
  size="sm"
  align="right"
  ariaLabel="Saved views and view options"
  @main-action="saveChanges"
>
  {{ active ? active.name : "Saved views" }}
  <template #badge>
    <span v-if="changed" class="dot" />
  </template>
</FusionSplitButton>
\\\`\\\`\\\`
\`
      }
    }
  },
  render: () => ({
    components: {
      FusionSplitButton
    },
    setup() {
      const views = [{
        id: "hot",
        name: "Hot leads",
        icon: Star,
        shared: false,
        isDefault: true
      }, {
        id: "gold",
        name: "Gold tier, no NDA",
        icon: Filter,
        shared: false,
        isDefault: false
      }, {
        id: "next",
        name: "Starting next quarter",
        icon: Users,
        shared: true,
        isDefault: false
      }];
      const activeId = ref<string | null>("hot");
      const changed = ref(false);
      const log = ref<string[]>([]);
      const say = (msg: string) => {
        log.value = [msg, ...log.value].slice(0, 5);
      };
      const viewItem = (v: (typeof views)[number]) => ({
        label: v.name,
        value: v.id,
        icon: v.icon,
        description: v.isDefault ? "Opens by default" : undefined,
        selected: v.id === activeId.value,
        onClick: () => {
          activeId.value = v.id;
          changed.value = false;
        }
      });
      const groups = computed(() => {
        const active = views.find(v => v.id === activeId.value);
        const result: any[] = [{
          label: "My views",
          actions: views.filter(v => !v.shared).map(viewItem)
        }, {
          label: "Shared with workspace",
          actions: views.filter(v => v.shared).map(viewItem)
        }];
        if (changed.value) {
          result.push({
            label: "Changes",
            actions: [{
              label: "Save changes",
              value: "save",
              icon: Save,
              disabled: !active,
              onClick: () => changed.value = false
            }, {
              label: "Save as new view…",
              value: "save-as",
              icon: Plus
            }, {
              label: "Discard changes",
              value: "discard",
              icon: Undo2,
              onClick: () => changed.value = false
            }]
          });
        }
        if (active) {
          result.push({
            label: "This view",
            actions: [{
              label: "Rename",
              value: "rename",
              icon: Pencil
            }, {
              label: "Duplicate",
              value: "duplicate",
              icon: Copy
            }, {
              label: "Open by default",
              value: "default",
              icon: Pin,
              disabled: active.isDefault
            }, {
              label: active.shared ? "Make personal" : "Share with workspace",
              value: "share",
              icon: Share2
            }, {
              label: "Close view",
              value: "close",
              icon: X,
              onClick: () => activeId.value = null
            }]
          }, {
            actions: [{
              label: "Delete view…",
              value: "delete",
              icon: Trash2
            }]
          });
        }
        return result;
      });
      const activeName = computed(() => views.find(v => v.id === activeId.value)?.name ?? "Saved views");
      function onSelect(item: {
        label: string;
        value?: string | number;
      }) {
        say(\`select → \${item.value ?? item.label}\`);
      }
      function onMain() {
        if (changed.value) {
          changed.value = false;
          say("main-action → saved changes");
        } else {
          say("main-action");
        }
      }
      return {
        groups,
        changed,
        activeName,
        log,
        onSelect,
        onMain
      };
    },
    template: \`
      <div style="display: flex; flex-direction: column; align-items: flex-end; gap: 16px; max-width: 520px">
        <div style="display: flex; gap: 8px; align-items: center">
          <label style="font-size: 13px; display: flex; gap: 6px; align-items: center">
            <input type="checkbox" v-model="changed" /> Changed
          </label>
          <FusionSplitButton
            :groups="groups"
            :variant="changed ? 'solid' : 'outline'"
            size="sm"
            align="right"
            ariaLabel="Saved views and view options"
            @main-action="onMain"
            @select="onSelect"
          >
            {{ activeName }}
            <template #badge>
              <span
                v-if="changed"
                aria-label="Unsaved changes"
                style="width: 6px; height: 6px; border-radius: 50%; background: currentColor; flex: none"
              />
            </template>
          </FusionSplitButton>
        </div>
        <ul style="font-size: 12px; margin: 0; padding: 0; list-style: none; opacity: 0.7; align-self: stretch">
          <li v-for="(line, i) in log" :key="i">{{ line }}</li>
        </ul>
      </div>
    \`
  })
}`,...L.parameters?.docs?.source}}};W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "When there isn't room below the button, the menu opens above it. When it doesn't fit either way, it uses the bigger side and scrolls."
      }
    }
  },
  render: () => ({
    components: {
      FusionSplitButton
    },
    setup() {
      const groups = [{
        label: "Create",
        actions: [{
          label: "New lead",
          value: "lead",
          icon: User
        }, {
          label: "New company",
          value: "company",
          icon: Briefcase
        }]
      }, {
        label: "Move",
        actions: [{
          label: "Move location",
          value: "move",
          icon: MapPin,
          description: "Pick a new office"
        }]
      }, {
        actions: [{
          label: "Delete",
          value: "delete",
          icon: Trash2
        }]
      }];
      return {
        groups
      };
    },
    template: \`
      <div style="height: 360px; display: flex; align-items: flex-end">
        <FusionSplitButton :groups="groups" align="left" variant="subtle" size="md">Actions</FusionSplitButton>
      </div>
    \`
  })
}`,...W.parameters?.docs?.source}}};const yn=["Default","Variants","CustomColor","WithAvatars","Disabled","WithGroups","OpensUpwards"];export{O as CustomColor,A as Default,T as Disabled,W as OpensUpwards,z as Variants,U as WithAvatars,L as WithGroups,yn as __namedExportsOrder,Sn as default};
