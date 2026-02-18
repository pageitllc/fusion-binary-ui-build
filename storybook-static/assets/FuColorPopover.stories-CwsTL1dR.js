import{s as Y,r as s,q as H,o as J,c as _,m as Q,a as $,g as i,d as Z,p as z,e as G,n as v,f as ee,z as oe,D as te,T as ne,F as re,j as F,i as le}from"./iframe-4anGkjM3.js";import{_ as ae}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./preload-helper-Ct5FWWRu.js";const se=["onKeydown"],ie={class:"fu-controls"},ue={class:"fu-sliders"},ce=["value"],U=Y({__name:"FuColorPopover",props:{modelValue:{}},emits:["update:modelValue"],setup(C,{emit:B}){const g=C,K=B,f=s("hex"),p=s(!1),h=s(null),T=s({top:"0px",left:"0px"});function k(){p.value=!p.value,p.value&&le(P)}function P(){if(!h.value)return;const e=h.value.getBoundingClientRect(),t=260,o=320,n=8;let r=e.bottom+6,a=e.left,l="top left";a+t>window.innerWidth-n&&(a=e.right-t,l="top right"),a=Math.max(n,a),r+o>window.innerHeight-n&&(r=e.top-o-6,l=l.includes("right")?"bottom right":"bottom left"),r=Math.max(n,r),T.value={top:`${r+window.scrollY}px`,left:`${a+window.scrollX}px`,transformOrigin:l}}function S(e){if(!p.value)return;const t=e.target;h.value?.contains(t)||t.closest(".fu-color-popover")||(p.value=!1)}H(()=>{window.addEventListener("mousedown",S),window.addEventListener("resize",P)}),J(()=>{window.removeEventListener("mousedown",S),window.removeEventListener("resize",P)});const d=s(0),w=s(100),y=s(100),m=s(""),E=s(!1);function O(e,t,o){t/=100,o/=100;const n=o*t,r=n*(1-Math.abs(e/60%2-1)),a=o-n;let l=0,u=0,c=0;return e<60?[l,u,c]=[n,r,0]:e<120?[l,u,c]=[r,n,0]:e<180?[l,u,c]=[0,n,r]:e<240?[l,u,c]=[0,r,n]:e<300?[l,u,c]=[r,0,n]:[l,u,c]=[n,0,r],{r:Math.round((l+a)*255),g:Math.round((u+a)*255),b:Math.round((c+a)*255)}}function A(e,t,o){e/=255,t/=255,o/=255;const n=Math.max(e,t,o),r=Math.min(e,t,o),a=n-r;let l=0;return a&&(n===e?l=(t-o)/a%6:n===t?l=(o-e)/a+2:l=(e-t)/a+4,l*=60,l<0&&(l+=360)),{h:Math.round(l),s:Math.round((n===0?0:a/n)*100),v:Math.round(n*100)}}function L(e,t,o){return"#"+[e,t,o].map(n=>n.toString(16).padStart(2,"0")).join("").toUpperCase()}function N(e,t,o){return`rgb(${e}, ${t}, ${o})`}const x=_(()=>O(d.value,w.value,y.value)),V=_(()=>L(x.value.r,x.value.g,x.value.b)),W=_(()=>({background:`
    linear-gradient(to top, black, transparent),
    linear-gradient(to right, white, hsl(${d.value}, 100%, 50%))
  `}));function R(){const{r:e,g:t,b:o}=x.value;K("update:modelValue",f.value==="rgb"?N(e,t,o):V.value)}function M(e){const t=e.trim().replace(/;$/,"");let o=null;/^#([0-9a-f]{6})$/i.test(t)&&(f.value="hex",o={r:parseInt(t.slice(1,3),16),g:parseInt(t.slice(3,5),16),b:parseInt(t.slice(5,7),16)});const n=t.match(/^rgba?\((\d{1,3}),\s*(\d{1,3}),\s*(\d{1,3})/);if(n&&(f.value="rgb",o={r:+n[1],g:+n[2],b:+n[3]}),!o)return;const r=A(o.r,o.g,o.b);d.value=r.h,w.value=r.s,y.value=r.v,R()}function j(e){E.value=!0,m.value=e.target.value}function I(){E.value=!1,M(m.value)}function q(e){e.key==="Enter"&&I()}function D(e){f.value="hex";const o=e.currentTarget.getBoundingClientRect(),n=Math.min(Math.max(0,e.clientX-o.left),o.width),r=Math.min(Math.max(0,e.clientY-o.top),o.height);w.value=Math.round(n/o.width*100),y.value=Math.round(100-r/o.height*100),R()}return H(()=>{g.modelValue&&(m.value=g.modelValue,M(g.modelValue))}),Q(()=>g.modelValue,e=>{e&&(m.value=e,M(e))}),(e,t)=>(F(),$(re,null,[i("div",{ref_key:"triggerRef",ref:h,class:"fu-color-trigger",style:v({backgroundColor:V.value}),role:"button",tabindex:"0",onClick:k,onKeydown:[z(G(k,["prevent"]),["enter"]),z(G(k,["prevent"]),["space"])]},null,44,se),(F(),Z(ne,{to:"body"},[p.value?(F(),$("div",{key:0,class:"fu-color-popover",style:v(T.value)},[i("div",{class:"fu-saturation",style:v(W.value),onPointerdown:D,onPointermove:t[0]||(t[0]=o=>o.buttons===1&&D(o))},[i("div",{class:"fu-cursor",style:v({left:w.value+"%",top:100-y.value+"%"})},null,4)],36),i("div",ie,[i("div",{class:"fu-preview",style:v({backgroundColor:V.value})},null,4),i("div",ue,[oe(i("input",{type:"range",min:"0",max:"360","onUpdate:modelValue":t[1]||(t[1]=o=>d.value=o),class:"fu-hue"},null,512),[[te,d.value]])])]),i("input",{class:"fu-output",value:m.value,onInput:j,onBlur:I,onKeydown:q,placeholder:"#RRGGBB or rgb(...)"},null,40,ce)],4)):ee("",!0)]))],64))}}),X=ae(U,[["__scopeId","data-v-568b3b3c"]]);U.__docgenInfo={exportName:"default",displayName:"FuColorPopover",description:"",tags:{},props:[{name:"modelValue",required:!1,type:{name:"string"}}],events:[{name:"update:modelValue",type:{names:["string"]}}],sourceFiles:["/Users/xavier/Documents/Websites/Skkido/Fusion-binary-ui/src/components/colourPallet/FuColorPopover.vue"]};const ve={title:"FuColorPopover",component:X,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:`
The **FuColorPopover** component provides a compact, popover-based color picker with full \`v-model\` support.

It renders a **trigger input** that opens a floating color palette, allowing users to select or manually enter colors using **HEX** or **RGB** formats.

The popover is **teleported to \`body\`**, positioned relative to the trigger, and automatically closes on outside click.

---

### Features
- Trigger input with **toggle open / close**
- Popover teleported to \`body\` (no overflow or z-index issues)
- Full **\`v-model\`** two-way binding
- Supports **HEX** and **RGB** input
- Click-outside to close
- Hue + saturation/value picker
- Accepts external color updates

---

### Props

| Prop | Type | Description |
|------|------|-------------|
| \`modelValue\` | \`string\` | Selected color (HEX or RGB) |

---

### Example Usage

\`\`\`vue
<script setup>
import { ref } from 'vue'
import FuColorPopover from '@/components/FuColorPopover.vue'

const modelValue = ref('#69CC8A')
<\/script>

<template>
  <FuColorPopover v-model="modelValue" />
</template>
\`\`\`

- Clicking the input toggles the popover
- Selecting a color updates \`modelValue\`
- Updating \`modelValue\` updates the picker
        `}}},argTypes:{modelValue:{control:"text",description:"Selected color (HEX or RGB)",table:{category:"v-model"}}}},b={render:C=>({components:{FuColorPopover:X},setup(){return{color:s(C.modelValue)}},template:`
      <div style="padding: 2rem; min-width: 320px;">
        <FuColorPopover v-model="color" />

        <div style="margin-top: 12px; font-size: 13px;">
          <strong>v-model value:</strong> {{ color }}
        </div>
      </div>
    `}),args:{modelValue:"#69CC8A"},parameters:{docs:{description:{story:"Default usage of the color picker with a mid-tone brand color."}}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
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
        story: "Default usage of the color picker with a mid-tone brand color."
      }
    }
  }
}`,...b.parameters?.docs?.source}}};const ge=["Default"];export{b as Default,ge as __namedExportsOrder,ve as default};
