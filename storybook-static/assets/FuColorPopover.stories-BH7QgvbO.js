import{d as ee,c as F,r as a,x as oe,k as te,s as re,b as U,g as p,A as ne,v as G,m as K,n as x,j as se,f as le,B as ae,E as ie,i as pe,T as de,F as ce,o as R,p as ue}from"./iframe-BWX2pLPr.js";import{_ as me}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./preload-helper-Ct5FWWRu.js";const ve=["onKeydown"],ge={class:"fu-controls"},fe={class:"fu-sliders"},xe=["value"],O=ee({__name:"FuColorPopover",props:{modelValue:{},size:{}},emits:["update:modelValue"],setup(i,{emit:h}){const v=i,L=h,N=F(()=>v.size??"md"),u=a(!1),y=a(null),A=a({top:"0px",left:"0px"});function M(){u.value=!u.value,u.value&&ue(E)}function E(){if(!y.value)return;const e=y.value.getBoundingClientRect(),t=260,o=320,r=8;let s=e.bottom+6,l=e.left,n="top left";l+t>window.innerWidth-r&&(l=e.right-t,n="top right"),l=Math.max(r,l),s+o>window.innerHeight-r&&(s=e.top-o-6,n=n.includes("right")?"bottom right":"bottom left"),s=Math.max(r,s),A.value={top:`${s+window.scrollY}px`,left:`${l+window.scrollX}px`,transformOrigin:n}}function I(e){if(!u.value)return;const t=e.target;y.value?.contains(t)||t.closest(".fu-color-popover")||(u.value=!1)}oe(()=>{window.addEventListener("mousedown",I),window.addEventListener("resize",E),v.modelValue&&(f.value=v.modelValue,T(v.modelValue))}),te(()=>{window.removeEventListener("mousedown",I),window.removeEventListener("resize",E)});const w=a("hex"),g=a(0),C=a(100),b=a(100),f=a(""),$=a(!1);function W(e,t,o){t/=100,o/=100;const r=o*t,s=r*(1-Math.abs(e/60%2-1)),l=o-r;let n=0,d=0,c=0;return e<60?[n,d,c]=[r,s,0]:e<120?[n,d,c]=[s,r,0]:e<180?[n,d,c]=[0,r,s]:e<240?[n,d,c]=[0,s,r]:e<300?[n,d,c]=[s,0,r]:[n,d,c]=[r,0,s],{r:Math.round((n+l)*255),g:Math.round((d+l)*255),b:Math.round((c+l)*255)}}function j(e,t,o){e/=255,t/=255,o/=255;const r=Math.max(e,t,o),s=Math.min(e,t,o),l=r-s;let n=0;return l&&(r===e?n=(t-o)/l%6:r===t?n=(o-e)/l+2:n=(e-t)/l+4,n*=60,n<0&&(n+=360)),{h:Math.round(n),s:Math.round((r===0?0:l/r)*100),v:Math.round(r*100)}}function q(e,t,o){return"#"+[e,t,o].map(r=>r.toString(16).padStart(2,"0")).join("").toUpperCase()}function Y(e,t,o){return`rgb(${e}, ${t}, ${o})`}const z=F(()=>W(g.value,C.value,b.value)),_=F(()=>q(z.value.r,z.value.g,z.value.b)),J=F(()=>({background:`linear-gradient(to top, black, transparent), linear-gradient(to right, white, hsl(${g.value}, 100%, 50%))`}));function D(){const{r:e,g:t,b:o}=z.value;L("update:modelValue",w.value==="rgb"?Y(e,t,o):_.value)}function T(e){const t=e.trim().replace(/;$/,"");let o=null;/^#([0-9a-f]{6})$/i.test(t)&&(w.value="hex",o={r:parseInt(t.slice(1,3),16),g:parseInt(t.slice(3,5),16),b:parseInt(t.slice(5,7),16)});const r=t.match(/^rgba?\((\d{1,3}),\s*(\d{1,3}),\s*(\d{1,3})/);if(r&&(w.value="rgb",o={r:+r[1],g:+r[2],b:+r[3]}),!o)return;const s=j(o.r,o.g,o.b);g.value=s.h,C.value=s.s,b.value=s.v,D()}function Q(e){$.value=!0,f.value=e.target.value}function H(){$.value=!1,T(f.value)}function Z(e){e.key==="Enter"&&H()}function X(e){w.value="hex";const o=e.currentTarget.getBoundingClientRect();C.value=Math.round(Math.min(Math.max(0,e.clientX-o.left),o.width)/o.width*100),b.value=Math.round(100-Math.min(Math.max(0,e.clientY-o.top),o.height)/o.height*100),D()}return re(()=>v.modelValue,e=>{e&&(f.value=e,T(e))}),(e,t)=>(R(),U(ce,null,[p("div",{ref_key:"triggerRef",ref:y,class:se(["fu-color-trigger",`fu-color-trigger--${N.value}`]),style:x({backgroundColor:_.value}),role:"button",tabindex:"0",onClick:M,onKeydown:[G(K(M,["prevent"]),["enter"]),G(K(M,["prevent"]),["space"])]},[ne(e.$slots,"trigger",{},void 0,!0)],46,ve),(R(),le(de,{to:"body"},[u.value?(R(),U("div",{key:0,class:"fu-color-popover",style:x(A.value)},[p("div",{class:"fu-saturation",style:x(J.value),onPointerdown:X,onPointermove:t[0]||(t[0]=o=>o.buttons===1&&X(o))},[p("div",{class:"fu-cursor",style:x({left:C.value+"%",top:100-b.value+"%"})},null,4)],36),p("div",ge,[p("div",{class:"fu-preview",style:x({backgroundColor:_.value})},null,4),p("div",fe,[ae(p("input",{type:"range",min:"0",max:"360","onUpdate:modelValue":t[1]||(t[1]=o=>g.value=o),class:"fu-hue"},null,512),[[ie,g.value]])])]),p("input",{class:"fu-output",value:f.value,onInput:Q,onBlur:H,onKeydown:Z,placeholder:"#RRGGBB or rgb(...)"},null,40,xe)],4)):pe("",!0)]))],64))}}),m=me(O,[["__scopeId","data-v-40795315"]]);O.__docgenInfo={exportName:"default",displayName:"FuColorPopover",description:"",tags:{},props:[{name:"modelValue",required:!1,type:{name:"string"}},{name:"size",required:!1,type:{name:"union",elements:[{name:'"xs"'},{name:'"sm"'},{name:'"md"'}]}}],events:[{name:"update:modelValue",type:{names:["string"]}}],slots:[{name:"trigger"}],sourceFiles:["/Users/xavier/Documents/Websites/Skkido/Fusion-binary-ui/src/components/colourPallet/FuColorPopover.vue"]};const Ce={title:"Components/FuColorPopover",component:m,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:`
The **FuColorPopover** component provides a compact, popover-based color picker with full \`v-model\` support.

It renders a **circle swatch trigger** that opens a floating color palette, allowing users to select or manually enter colors using **HEX** or **RGB** formats.

The popover is **teleported to \`body\`**, positioned relative to the trigger, and automatically closes on outside click.

---

### Features
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
        `}}},argTypes:{modelValue:{control:"text",description:"Selected color (HEX or RGB)",table:{category:"v-model"}},size:{control:"select",options:["xs","sm","md"],description:"Size of the trigger swatch",table:{category:"Props",defaultValue:{summary:"md"}}}}},P={render:i=>({components:{FuColorPopover:m},setup(){return{color:a(i.modelValue)}},template:`
      <div style="padding: 2rem; min-width: 320px;">
        <FuColorPopover v-model="color" />
        <div style="margin-top: 12px; font-size: 13px;">
          <strong>v-model value:</strong> {{ color }}
        </div>
      </div>
    `}),args:{modelValue:"#69CC8A"},parameters:{docs:{description:{story:"Default usage with the medium swatch (30px)."}}}},S={render:i=>({components:{FuColorPopover:m},setup(){return{color:a(i.modelValue)}},template:`
      <div style="padding: 2rem; min-width: 320px;">
        <FuColorPopover v-model="color" size="sm" />
        <div style="margin-top: 12px; font-size: 13px;">
          <strong>v-model value:</strong> {{ color }}
        </div>
      </div>
    `}),args:{modelValue:"#3B82F6"},parameters:{docs:{description:{story:"Small swatch (22px) — suits compact toolbars."}}}},V={render:i=>({components:{FuColorPopover:m},setup(){return{color:a(i.modelValue)}},template:`
      <div style="padding: 2rem; min-width: 320px;">
        <FuColorPopover v-model="color" size="xs" />
        <div style="margin-top: 12px; font-size: 13px;">
          <strong>v-model value:</strong> {{ color }}
        </div>
      </div>
    `}),args:{modelValue:"#EF4444"},parameters:{docs:{description:{story:"Extra small swatch (16px) — for tight inline use like the message composer toolbar."}}}},k={render:()=>({components:{FuColorPopover:m},setup(){return{color:a("#8B5CF6")}},template:`
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
    `}),parameters:{docs:{description:{story:"All three sizes side by side sharing the same v-model."}}}},B={render:()=>({components:{FuColorPopover:m},setup(){return{color:a("#F59E0B")}},template:`
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
    `}),parameters:{docs:{description:{story:"Using the #trigger slot to render a custom trigger — e.g. the text colour button in the composer toolbar."}}}};P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
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
}`,...P.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
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
}`,...S.parameters?.docs?.source}}};V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
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
}`,...V.parameters?.docs?.source}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
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
}`,...k.parameters?.docs?.source}}};B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
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
}`,...B.parameters?.docs?.source}}};const be=["Default","Small","XSmall","AllSizes","CustomTrigger"];export{k as AllSizes,B as CustomTrigger,P as Default,S as Small,V as XSmall,be as __namedExportsOrder,Ce as default};
