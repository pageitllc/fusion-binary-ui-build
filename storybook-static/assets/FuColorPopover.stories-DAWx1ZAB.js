import{q as Ke,c as C,r as c,x as Oe,v as Ue,w as fe,b as d,d as l,A as qe,k as he,l as ye,m,p as S,s as Xe,F as k,g as D,f as je,u as we,i as R,t as N,T as Je,n as re,o as u}from"./iframe-BJCCdSEh.js";import{c as Ye}from"./createLucideIcon-B6nnLSzH.js";import{_ as Qe}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./preload-helper-Ct5FWWRu.js";/**
 * @license @lucide/vue v1.54.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ze={name:"pipette",size:24,node:[["path",{d:"m12 9-8.414 8.414A2 2 0 0 0 3 18.828v1.344a2 2 0 0 1-.586 1.414A2 2 0 0 1 3.828 21h1.344a2 2 0 0 0 1.414-.586L15 12",key:"1y3wsu"}],["path",{d:"m18 9 .4.4a1 1 0 1 1-3 3l-3.8-3.8a1 1 0 1 1 3-3l.4.4 3.4-3.4a1 1 0 1 1 3 3z",key:"110lr1"}],["path",{d:"m2 22 .414-.414",key:"jhxm08"}]]},eo=Ye(Ze),oo=["aria-expanded","onKeydown"],to={class:"fu-color-tabs",role:"tablist"},ro=["aria-selected","onClick"],no={key:0,class:"fu-color-custom"},so=["aria-valuetext"],ao=["aria-valuenow"],lo={class:"fu-controls"},io={class:"fu-preview",title:"New colour on the left, the colour it started as on the right"},co=["value"],uo={class:"fu-swatches"},po=["title","aria-label","onClick"],mo={key:1,class:"fu-color-swatches"},vo={class:"fu-swatch-grid"},go=["title","aria-label","onClick"],fo={class:"fu-swatches"},ho=["title","aria-label","onClick"],yo={class:"fu-swatches"},wo=["title","aria-label","onClick"],xe="fu-color-recent",be=Ke({__name:"FuColorPopover",props:{modelValue:{},size:{},swatches:{},contrastWith:{},eyedropper:{type:Boolean},bare:{type:Boolean},keepFocus:{type:Boolean}},emits:["update:modelValue"],setup(p,{emit:A}){const v=p,Ce=A,ke=C(()=>v.size??"md");function Fe(e,t,o){t/=100,o/=100;const r=i=>(i+e/30)%12,n=t*Math.min(o,1-o),a=i=>o-n*Math.max(-1,Math.min(r(i)-3,Math.min(9-r(i),1))),s=i=>Math.round(i*255).toString(16).padStart(2,"0");return`#${s(a(0))}${s(a(8))}${s(a(4))}`.toUpperCase()}const Pe=[[92,85],[75,70],[58,70],[40,70]].flatMap(([e,t])=>[0,25,48,100,160,200,230,275].map(o=>Fe(o,t,e))),Se=["#FFFFFF","#F3F3F3","#E2E2E2","#9CA3AF","#525252","#171717","#000000"],ze=[{key:"custom",label:"Custom"},{key:"swatches",label:"Swatches"}],M=c("custom"),w=c(!1),E=c(null),j=c(null),ne=c({top:"0px",left:"0px"});function J(){if(w.value)return Y(!1);ie.value=y.value,M.value="custom",w.value=!0,re(()=>{Q(),v.keepFocus||j.value?.querySelector(".fu-color-tab.is-active")?.focus({preventScroll:!0})})}function se(e){v.keepFocus&&(e.target.closest?.("input, textarea")||e.preventDefault())}function Y(e){w.value=!1,e&&re(()=>E.value?.focus())}function Ae(e){M.value=e,re(Q)}function Q(){if(!E.value)return;const e=E.value.getBoundingClientRect(),t=j.value,o=t?.offsetWidth||264,r=t?.offsetHeight||340,n=8;let a=e.bottom+6,s=e.left,i="top left";s+o>window.innerWidth-n&&(s=e.right-o,i="top right"),s=Math.max(n,s),a+r>window.innerHeight-n&&(a=e.top-r-6,i=i.includes("right")?"bottom right":"bottom left"),a=Math.max(n,a),ne.value={top:`${a}px`,left:`${s}px`,transformOrigin:i}}function ae(e){if(!w.value)return;const t=e.target;E.value?.contains(t)||t.closest?.(".fu-color-popover")||Y(!1)}function le(e){!w.value||e.key!=="Escape"||(e.stopPropagation(),Y(!0))}function I(){w.value&&Q()}Oe(()=>{window.addEventListener("pointerdown",ae),window.addEventListener("keydown",le,!0),window.addEventListener("resize",I),window.addEventListener("scroll",I,!0),Le(),v.modelValue&&ue(v.modelValue)}),Ue(()=>{window.removeEventListener("pointerdown",ae),window.removeEventListener("keydown",le,!0),window.removeEventListener("resize",I),window.removeEventListener("scroll",I,!0)});const Z=c("hex"),g=c(0),f=c(100),h=c(100),x=c(""),ie=c("#000000");function ce(e,t,o){t/=100,o/=100;const r=o*t,n=r*(1-Math.abs(e/60%2-1)),a=o-r;let s=0,i=0,P=0;return e<60?[s,i,P]=[r,n,0]:e<120?[s,i,P]=[n,r,0]:e<180?[s,i,P]=[0,r,n]:e<240?[s,i,P]=[0,n,r]:e<300?[s,i,P]=[n,0,r]:[s,i,P]=[r,0,n],{r:Math.round((s+a)*255),g:Math.round((i+a)*255),b:Math.round((P+a)*255)}}function Me(e,t,o){e/=255,t/=255,o/=255;const r=Math.max(e,t,o),n=Math.min(e,t,o),a=r-n;let s=0;return a&&(r===e?s=(t-o)/a%6:r===t?s=(o-e)/a+2:s=(e-t)/a+4,s*=60,s<0&&(s+=360)),{h:s,s:(r===0?0:a/r)*100,v:r*100}}function ee(e,t,o){return"#"+[e,t,o].map(r=>r.toString(16).padStart(2,"0")).join("").toUpperCase()}const Ee=(e,t,o)=>`rgb(${e}, ${t}, ${o})`;function $(e){const t=e.trim().replace(/;$/,""),o=t.match(/^#([0-9a-f])([0-9a-f])([0-9a-f])$/i);if(o)return{format:"hex",rgb:{r:parseInt(o[1]+o[1],16),g:parseInt(o[2]+o[2],16),b:parseInt(o[3]+o[3],16)}};if(/^#([0-9a-f]{6})$/i.test(t))return{format:"hex",rgb:{r:parseInt(t.slice(1,3),16),g:parseInt(t.slice(3,5),16),b:parseInt(t.slice(5,7),16)}};const r=t.match(/^rgba?\((\d{1,3}),\s*(\d{1,3}),\s*(\d{1,3})/i);if(r){const n=a=>Math.min(255,+a);return{format:"rgb",rgb:{r:n(r[1]),g:n(r[2]),b:n(r[3])}}}return null}const _=C(()=>ce(g.value,f.value,h.value)),y=C(()=>ee(_.value.r,_.value.g,_.value.b)),_e=C(()=>{const e=ce(g.value,100,100);return ee(e.r,e.g,e.b)}),Be=C(()=>({background:`linear-gradient(to top, #000, transparent), linear-gradient(to right, #fff, hsl(${g.value}, 100%, 50%))`})),B=()=>{const{r:e,g:t,b:o}=_.value;return Z.value==="rgb"?Ee(e,t,o):y.value};function b(){Ce("update:modelValue",B())}function H(e){const t=$(e);if(!t)return!1;Z.value=t.format;const o=Me(t.rgb.r,t.rgb.g,t.rgb.b);return o.s>0&&o.v>0&&(g.value=o.h),f.value=o.s,h.value=o.v,!0}function ue(e){H(e)&&(x.value=e,B()!==e.trim()&&b())}fe(()=>v.modelValue,e=>{!e||e===B()||ue(e)});const oe=c(!1);fe([g,f,h,Z],()=>{oe.value||(x.value=B())});function de(e){const t=e.currentTarget.getBoundingClientRect();f.value=Math.round(Math.min(Math.max(0,e.clientX-t.left),t.width)/t.width*100),h.value=Math.round(100-Math.min(Math.max(0,e.clientY-t.top),t.height)/t.height*100),b()}function Te(e){e.currentTarget.setPointerCapture(e.pointerId),de(e)}function Ve(e){e.currentTarget.hasPointerCapture(e.pointerId)&&de(e)}function pe(e){const t=e.currentTarget.getBoundingClientRect();g.value=Math.round(Math.min(Math.max(0,e.clientX-t.left),t.width)/t.width*360),b()}function De(e){e.currentTarget.setPointerCapture(e.pointerId),pe(e)}function Re(e){e.currentTarget.hasPointerCapture(e.pointerId)&&pe(e)}function W(e){const t=e.currentTarget;t.hasPointerCapture(e.pointerId)&&t.releasePointerCapture(e.pointerId),te(y.value)}function Ie(e){const t=e.shiftKey?10:1,o={ArrowLeft:()=>f.value=Math.max(0,Math.round(f.value)-t),ArrowRight:()=>f.value=Math.min(100,Math.round(f.value)+t),ArrowUp:()=>h.value=Math.min(100,Math.round(h.value)+t),ArrowDown:()=>h.value=Math.max(0,Math.round(h.value)-t)};o[e.key]&&(e.preventDefault(),o[e.key](),b())}function $e(e){const t=e.shiftKey?15:1;e.key!=="ArrowLeft"&&e.key!=="ArrowRight"||(e.preventDefault(),g.value=Math.min(360,Math.max(0,Math.round(g.value)+(e.key==="ArrowRight"?t:-t))),b())}function He(e){oe.value=!0,x.value=e.target.value,$(x.value)&&(H(x.value),b())}function me(){oe.value=!1,H(x.value)&&(b(),te(y.value)),x.value=B()}function We(e){e.key==="Enter"&&me()}const ve=C(()=>{const e=new Set;for(const t of v.swatches??[]){const o=typeof t=="string"?$(t):null;o&&e.add(ee(o.rgb.r,o.rgb.g,o.rgb.b))}return[...e].slice(0,14)}),L=e=>e.toUpperCase()===y.value;function T(e){H(e),b(),te(y.value)}const F=c([]);function Le(){try{const e=JSON.parse(localStorage.getItem(xe)||"[]");Array.isArray(e)&&(F.value=e.filter(t=>typeof t=="string").slice(0,8))}catch{F.value=[]}}function te(e){F.value=[e,...F.value.filter(t=>t!==e)].slice(0,8);try{localStorage.setItem(xe,JSON.stringify(F.value))}catch{}}const Ne=C(()=>v.eyedropper!==!1&&typeof window<"u"&&"EyeDropper"in window);async function Ge(){try{const e=await new window.EyeDropper().open();e?.sRGBHex&&T(e.sRGBHex)}catch{}}function ge({r:e,g:t,b:o}){const r=[e,t,o].map(n=>(n/=255,n<=.03928?n/12.92:((n+.055)/1.055)**2.4));return .2126*r[0]+.7152*r[1]+.0722*r[2]}const V=C(()=>{const e=v.contrastWith?$(v.contrastWith):null;if(!e)return null;const t=ge(_.value),o=ge(e.rgb),r=(Math.max(t,o)+.05)/(Math.min(t,o)+.05),n=r>=7?"aaa":r>=4.5?"aa":r>=3?"large":"fail",a={aaa:"AAA",aa:"AA",large:"Large text only",fail:"Too low to read"}[n];return{ratio:r.toFixed(1),level:n,label:a}});return(e,t)=>(u(),d(k,null,[l("div",{ref_key:"triggerRef",ref:E,class:S(["fu-color-trigger",[`fu-color-trigger--${ke.value}`,{"fu-color-trigger--bare":p.bare}]]),style:m(p.bare?void 0:{backgroundColor:y.value}),role:"button",tabindex:"0","aria-haspopup":"dialog","aria-expanded":w.value,onMousedown:se,onClick:J,onKeydown:[he(ye(J,["prevent"]),["enter"]),he(ye(J,["prevent"]),["space"])]},[qe(e.$slots,"trigger",{},void 0,!0)],46,oo),(u(),Xe(Je,{to:"body"},[w.value?(u(),d("div",{key:0,ref_key:"popoverRef",ref:j,class:"fu-color-popover",role:"dialog","aria-label":"Choose a colour",style:m(ne.value),onMousedown:se},[l("div",to,[(u(),d(k,null,D(ze,o=>l("button",{key:o.key,type:"button",role:"tab",class:S(["fu-color-tab",{"is-active":M.value===o.key}]),"aria-selected":M.value===o.key,onClick:r=>Ae(o.key)},N(o.label),11,ro)),64))]),M.value==="custom"?(u(),d("div",no,[l("div",{class:"fu-saturation",style:m(Be.value),role:"slider",tabindex:"0","aria-label":"Saturation and brightness","aria-valuetext":`Saturation ${Math.round(f.value)} percent, brightness ${Math.round(h.value)} percent`,onPointerdown:Te,onPointermove:Ve,onPointerup:W,onPointercancel:W,onKeydown:Ie},[l("div",{class:"fu-cursor",style:m({left:f.value+"%",top:100-h.value+"%",backgroundColor:y.value})},null,4)],44,so),l("div",{class:"fu-hue",role:"slider",tabindex:"0","aria-label":"Hue","aria-valuemin":"0","aria-valuemax":"360","aria-valuenow":Math.round(g.value),onPointerdown:De,onPointermove:Re,onPointerup:W,onPointercancel:W,onKeydown:$e},[l("div",{class:"fu-cursor fu-cursor--hue",style:m({left:g.value/360*100+"%",backgroundColor:_e.value})},null,4)],40,ao),l("div",lo,[l("div",io,[l("i",{style:m({backgroundColor:y.value})},null,4),l("i",{style:m({backgroundColor:ie.value})},null,4)]),l("input",{class:"fu-output",value:x.value,spellcheck:"false",autocomplete:"off","aria-label":"Colour value",placeholder:"#RRGGBB or rgb(...)",onInput:He,onBlur:me,onKeydown:We},null,40,co),Ne.value?(u(),d("button",{key:0,type:"button",class:"fu-icon-btn",title:"Pick a colour from the screen","aria-label":"Pick a colour from the screen",onClick:Ge},[je(we(eo),{size:16})])):R("",!0)]),V.value?(u(),d("div",{key:0,class:S(["fu-contrast",`is-${V.value.level}`])},[l("span",null,N(V.value.level==="fail"?"!":"✓"),1),l("span",null,N(V.value.ratio)+" : 1 · "+N(V.value.label),1)],2)):R("",!0),ve.value.length?(u(),d(k,{key:1},[t[0]||(t[0]=l("div",{class:"fu-color-label"},"In this document",-1)),l("div",uo,[(u(!0),d(k,null,D(ve.value,o=>(u(),d("button",{key:o,type:"button",class:S(["fu-swatch",{"is-on":L(o)}]),style:m({backgroundColor:o}),title:o,"aria-label":o,onClick:r=>T(o)},null,14,po))),128))])],64)):R("",!0)])):(u(),d("div",mo,[t[2]||(t[2]=l("div",{class:"fu-color-label fu-color-label--first"},"Palette",-1)),l("div",vo,[(u(!0),d(k,null,D(we(Pe),o=>(u(),d("button",{key:o,type:"button",class:S(["fu-swatch",{"is-on":L(o)}]),style:m({backgroundColor:o}),title:o,"aria-label":o,onClick:r=>T(o)},null,14,go))),128))]),t[3]||(t[3]=l("div",{class:"fu-color-label"},"Neutrals",-1)),l("div",fo,[(u(),d(k,null,D(Se,o=>l("button",{key:o,type:"button",class:S(["fu-swatch",{"is-on":L(o)}]),style:m({backgroundColor:o}),title:o,"aria-label":o,onClick:r=>T(o)},null,14,ho)),64))]),F.value.length?(u(),d(k,{key:0},[t[1]||(t[1]=l("div",{class:"fu-color-label"},"Recent",-1)),l("div",yo,[(u(!0),d(k,null,D(F.value,o=>(u(),d("button",{key:o,type:"button",class:S(["fu-swatch",{"is-on":L(o)}]),style:m({backgroundColor:o}),title:o,"aria-label":o,onClick:r=>T(o)},null,14,wo))),128))])],64)):R("",!0)]))],36)):R("",!0)]))],64))}}),z=Qe(be,[["__scopeId","data-v-755f6933"]]);be.__docgenInfo={exportName:"default",displayName:"FuColorPopover",description:"",tags:{},props:[{name:"modelValue",required:!1,type:{name:"string"}},{name:"size",required:!1,type:{name:"union",elements:[{name:'"xs"'},{name:'"sm"'},{name:'"md"'}]}},{name:"swatches",description:'Colours already used in the document, shown under the picker ("In this document")',required:!1,type:{name:"Array",elements:[{name:"string"}]}},{name:"contrastWith",description:"A background colour: shows the contrast ratio of the chosen colour against it",required:!1,type:{name:"string"}},{name:"eyedropper",description:"Show the screen eyedropper where the browser has one (Chrome, Edge). Default true",required:!1,type:{name:"boolean"}},{name:"bare",description:"No circle: the trigger slot is the whole button, so a host (a toolbar, say) draws its own",required:!1,type:{name:"boolean"}},{name:"keepFocus",description:"The page keeps its focus and text selection while the picker is used, so a colour can be applied to selected text",required:!1,type:{name:"boolean"}}],events:[{name:"update:modelValue",type:{names:["string"]}}],slots:[{name:"trigger"}],sourceFiles:["/Users/xavier/Documents/Websites/Skkido/Fusion-binary-ui/src/components/colourPallet/FuColorPopover.vue"]};const Fo={title:"Fusion/Forms/Selection/FuColorPopover",component:z,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:`
The **FuColorPopover** component provides a compact, popover-based color picker with full \`v-model\` support.

It renders a **circle swatch trigger** that opens a floating color palette, allowing users to select or manually enter colors using **HEX** or **RGB** formats.

The popover is **teleported to \`body\`**, positioned relative to the trigger, and automatically closes on outside click.

---

### Features
- **Custom** tab: colour field, hue slider, new-versus-current preview, HEX / RGB input and a screen eyedropper (Chrome, Edge)
- **Swatches** tab: a palette, neutrals and the colours you picked recently
- Optional **contrast check** against a background colour (WCAG AA / AAA)
- Optional **"In this document"** swatches for colours already used on the page
- Follows light and dark mode (Fusion theme tokens) and works with the keyboard (arrow keys, Esc)
- Circle swatch trigger with **toggle open / close**
- Popover teleported to \`body\` (no overflow or z-index issues)
- Full **\`v-model\`** two-way binding
- Supports **HEX** and **RGB** input
- Click-outside to close
- Hue + saturation/value picker
- Accepts external color updates
- **Three sizes:** \`xs\`, \`sm\`, \`md\` (default)

---

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| \`modelValue\` | \`string\` | — | Selected color (HEX or RGB) |
| \`size\` | \`'xs' \\| 'sm' \\| 'md'\` | \`'md'\` | Size of the trigger swatch |
| \`swatches\` | \`string[]\` | — | Colours already used in the document, shown as "In this document" |
| \`contrastWith\` | \`string\` | — | A background colour: shows the contrast ratio of the chosen colour against it |
| \`eyedropper\` | \`boolean\` | \`true\` | Show the screen eyedropper where the browser supports it |
| \`bare\` | \`boolean\` | \`false\` | No circle: the \`trigger\` slot is the whole button, so a host (a toolbar) draws its own |
| \`keepFocus\` | \`boolean\` | \`false\` | The page keeps its focus and text selection while the picker is used (colouring selected text) |

---

### Example Usage

\`\`\`vue
<script setup>
import { ref } from 'vue'
import FuColorPopover from '@/components/FuColorPopover.vue'

const color = ref('#69CC8A')
<\/script>

<template>
  <FuColorPopover v-model="color" />
  <FuColorPopover v-model="color" size="sm" />
  <FuColorPopover v-model="color" size="xs" />
</template>
\`\`\`
        `}}},argTypes:{modelValue:{control:"text",description:"Selected color (HEX or RGB)",table:{category:"v-model"}},size:{control:"select",options:["xs","sm","md"],description:"Size of the trigger swatch",table:{category:"Props",defaultValue:{summary:"md"}}}}},G={render:p=>({components:{FuColorPopover:z},setup(){return{color:c(p.modelValue)}},template:`
      <div style="padding: 2rem; min-width: 320px;">
        <FuColorPopover v-model="color" />
        <div style="margin-top: 12px; font-size: 13px;">
          <strong>v-model value:</strong> {{ color }}
        </div>
      </div>
    `}),args:{modelValue:"#69CC8A"},parameters:{docs:{description:{story:"Default usage with the medium swatch (30px)."}}}},K={render:p=>({components:{FuColorPopover:z},setup(){return{color:c(p.modelValue)}},template:`
      <div style="padding: 2rem; min-width: 320px;">
        <FuColorPopover
          v-model="color"
          :swatches="['#1A3D2B', '#F3F1E8', '#33453B', '#D63A21', '#FFFFFF']"
          contrastWith="#1A3D2B"
        />
        <div style="margin-top: 12px; font-size: 13px;">
          <strong>v-model value:</strong> {{ color }}
        </div>
      </div>
    `}),args:{modelValue:"#F3F1E8"},parameters:{docs:{description:{story:"Pass `swatches` to list the colours the document already uses, and `contrastWith` to show the WCAG contrast ratio against a background."}}}},O={render:p=>({components:{FuColorPopover:z},setup(){return{color:c(p.modelValue)}},template:`
      <div style="padding: 2rem; min-width: 320px;">
        <FuColorPopover v-model="color" size="sm" />
        <div style="margin-top: 12px; font-size: 13px;">
          <strong>v-model value:</strong> {{ color }}
        </div>
      </div>
    `}),args:{modelValue:"#3B82F6"},parameters:{docs:{description:{story:"Small swatch (22px) — suits compact toolbars."}}}},U={render:p=>({components:{FuColorPopover:z},setup(){return{color:c(p.modelValue)}},template:`
      <div style="padding: 2rem; min-width: 320px;">
        <FuColorPopover v-model="color" size="xs" />
        <div style="margin-top: 12px; font-size: 13px;">
          <strong>v-model value:</strong> {{ color }}
        </div>
      </div>
    `}),args:{modelValue:"#EF4444"},parameters:{docs:{description:{story:"Extra small swatch (16px) — for tight inline use like the message composer toolbar."}}}},q={render:()=>({components:{FuColorPopover:z},setup(){return{color:c("#8B5CF6")}},template:`
      <div style="padding: 2rem; display: flex; align-items: center; gap: 16px;">
        <div style="display: flex; flex-direction: column; align-items: center; gap: 6px; font-size: 12px; color: #888;">
          <FuColorPopover v-model="color" size="xs" />
          <span>xs</span>
        </div>
        <div style="display: flex; flex-direction: column; align-items: center; gap: 6px; font-size: 12px; color: #888;">
          <FuColorPopover v-model="color" size="sm" />
          <span>sm</span>
        </div>
        <div style="display: flex; flex-direction: column; align-items: center; gap: 6px; font-size: 12px; color: #888;">
          <FuColorPopover v-model="color" />
          <span>md (default)</span>
        </div>
        <div style="margin-left: 16px; font-size: 13px;">
          <strong>Shared v-model:</strong> {{ color }}
        </div>
      </div>
    `}),parameters:{docs:{description:{story:"All three sizes side by side sharing the same v-model."}}}},X={render:()=>({components:{FuColorPopover:z},setup(){return{color:c("#F59E0B")}},template:`
      <div style="padding: 2rem; min-width: 320px;">
        <FuColorPopover v-model="color">
          <template #trigger>
            <div style="display:flex;flex-direction:column;align-items:center;gap:2px;cursor:pointer;">
              <span style="font-size:13px;font-weight:700;line-height:1;">A</span>
              <div :style="{ width: '14px', height: '2px', borderRadius: '2px', background: color }" />
            </div>
          </template>
        </FuColorPopover>
        <div style="margin-top: 12px; font-size: 13px;">
          <strong>v-model value:</strong> {{ color }}
        </div>
      </div>
    `}),parameters:{docs:{description:{story:"Using the #trigger slot to render a custom trigger — e.g. the text colour button in the composer toolbar."}}}};G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
  render: args => ({
    components: {
      FuColorPopover
    },
    setup() {
      const color = ref(args.modelValue);
      return {
        color
      };
    },
    template: \`
      <div style="padding: 2rem; min-width: 320px;">
        <FuColorPopover v-model="color" />
        <div style="margin-top: 12px; font-size: 13px;">
          <strong>v-model value:</strong> {{ color }}
        </div>
      </div>
    \`
  }),
  args: {
    modelValue: "#69CC8A"
  },
  parameters: {
    docs: {
      description: {
        story: "Default usage with the medium swatch (30px)."
      }
    }
  }
}`,...G.parameters?.docs?.source}}};K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
  render: args => ({
    components: {
      FuColorPopover
    },
    setup() {
      const color = ref(args.modelValue);
      return {
        color
      };
    },
    template: \`
      <div style="padding: 2rem; min-width: 320px;">
        <FuColorPopover
          v-model="color"
          :swatches="['#1A3D2B', '#F3F1E8', '#33453B', '#D63A21', '#FFFFFF']"
          contrastWith="#1A3D2B"
        />
        <div style="margin-top: 12px; font-size: 13px;">
          <strong>v-model value:</strong> {{ color }}
        </div>
      </div>
    \`
  }),
  args: {
    modelValue: "#F3F1E8"
  },
  parameters: {
    docs: {
      description: {
        story: "Pass \`swatches\` to list the colours the document already uses, and \`contrastWith\` to show the WCAG contrast ratio against a background."
      }
    }
  }
}`,...K.parameters?.docs?.source}}};O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  render: args => ({
    components: {
      FuColorPopover
    },
    setup() {
      const color = ref(args.modelValue);
      return {
        color
      };
    },
    template: \`
      <div style="padding: 2rem; min-width: 320px;">
        <FuColorPopover v-model="color" size="sm" />
        <div style="margin-top: 12px; font-size: 13px;">
          <strong>v-model value:</strong> {{ color }}
        </div>
      </div>
    \`
  }),
  args: {
    modelValue: "#3B82F6"
  },
  parameters: {
    docs: {
      description: {
        story: "Small swatch (22px) — suits compact toolbars."
      }
    }
  }
}`,...O.parameters?.docs?.source}}};U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
  render: args => ({
    components: {
      FuColorPopover
    },
    setup() {
      const color = ref(args.modelValue);
      return {
        color
      };
    },
    template: \`
      <div style="padding: 2rem; min-width: 320px;">
        <FuColorPopover v-model="color" size="xs" />
        <div style="margin-top: 12px; font-size: 13px;">
          <strong>v-model value:</strong> {{ color }}
        </div>
      </div>
    \`
  }),
  args: {
    modelValue: "#EF4444"
  },
  parameters: {
    docs: {
      description: {
        story: "Extra small swatch (16px) — for tight inline use like the message composer toolbar."
      }
    }
  }
}`,...U.parameters?.docs?.source}}};q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      FuColorPopover
    },
    setup() {
      const color = ref("#8B5CF6");
      return {
        color
      };
    },
    template: \`
      <div style="padding: 2rem; display: flex; align-items: center; gap: 16px;">
        <div style="display: flex; flex-direction: column; align-items: center; gap: 6px; font-size: 12px; color: #888;">
          <FuColorPopover v-model="color" size="xs" />
          <span>xs</span>
        </div>
        <div style="display: flex; flex-direction: column; align-items: center; gap: 6px; font-size: 12px; color: #888;">
          <FuColorPopover v-model="color" size="sm" />
          <span>sm</span>
        </div>
        <div style="display: flex; flex-direction: column; align-items: center; gap: 6px; font-size: 12px; color: #888;">
          <FuColorPopover v-model="color" />
          <span>md (default)</span>
        </div>
        <div style="margin-left: 16px; font-size: 13px;">
          <strong>Shared v-model:</strong> {{ color }}
        </div>
      </div>
    \`
  }),
  parameters: {
    docs: {
      description: {
        story: "All three sizes side by side sharing the same v-model."
      }
    }
  }
}`,...q.parameters?.docs?.source}}};X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      FuColorPopover
    },
    setup() {
      const color = ref("#F59E0B");
      return {
        color
      };
    },
    template: \`
      <div style="padding: 2rem; min-width: 320px;">
        <FuColorPopover v-model="color">
          <template #trigger>
            <div style="display:flex;flex-direction:column;align-items:center;gap:2px;cursor:pointer;">
              <span style="font-size:13px;font-weight:700;line-height:1;">A</span>
              <div :style="{ width: '14px', height: '2px', borderRadius: '2px', background: color }" />
            </div>
          </template>
        </FuColorPopover>
        <div style="margin-top: 12px; font-size: 13px;">
          <strong>v-model value:</strong> {{ color }}
        </div>
      </div>
    \`
  }),
  parameters: {
    docs: {
      description: {
        story: "Using the #trigger slot to render a custom trigger — e.g. the text colour button in the composer toolbar."
      }
    }
  }
}`,...X.parameters?.docs?.source}}};const Po=["Default","WithDocumentColours","Small","XSmall","AllSizes","CustomTrigger"];export{q as AllSizes,X as CustomTrigger,G as Default,O as Small,K as WithDocumentColours,U as XSmall,Po as __namedExportsOrder,Fo as default};
