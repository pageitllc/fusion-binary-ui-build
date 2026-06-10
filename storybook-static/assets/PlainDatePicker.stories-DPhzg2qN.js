import{r as u,c as k,s as ae,b as n,g as d,F as g,q as C,t as c,l as P,u as z,e as Y,i as H,w as ne,v as re,m as A,n as O,o as r,j as F}from"./iframe-D3vfv6YP.js";import{d as h}from"./dayjs.min-C8Kx736W.js";import{F as se}from"./FusionTextInput-WcBW8h59.js";import{_ as oe}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{C as le,a as ie}from"./chevron-right-BVdJWT0t.js";import{C as de}from"./chevron-down-CgrmphEu.js";import"./preload-helper-Ct5FWWRu.js";import"./_commonjsHelpers-CqkleIqs.js";import"./createLucideIcon-DKFlsGA7.js";const me={class:"calendar-header"},ce={class:"flex flex--gap-sm"},ue={key:0},pe={class:"calendar-weekdays"},ve={class:"calendar-days"},fe=["onClick"],ge={key:1,class:"calendar-months"},ye=["onClick"],he={key:2,class:"calendar-years"},De=["onClick"],ke={key:3,class:"calendar-multi-summary"},Ye={key:4,class:"calendar-time"},be={key:0,class:"fu-time-dropdown customScrollBar"},Me=["onMousedown"],W=12,$={__name:"FusionPlainDatePicker",props:{modelValue:[String,Array],mode:{type:String,default:"single"},variant:{type:String,default:"date"},formWrapperWidth:String,fontSize:{type:String,default:"0.625rem"},disabledDates:{type:Array,default:()=>[]}},emits:["update:modelValue"],setup(o,{emit:p}){const y=o,D=p,s=u(h().startOf("month")),v=u("days"),f=u("00:00"),M=u(!1),m=u(null),l=u([]),j=["Su","Mo","Tu","We","Th","Fr","Sa"],N=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],w=k(()=>Math.floor(s.value.year()/W)*W),B=k(()=>w.value+W-1),R=k(()=>Array.from({length:W},(t,a)=>w.value+a)),I=k(()=>{const t=s.value.startOf("month").startOf("week"),a=s.value.endOf("month").endOf("week"),e=[];let i=t.clone();for(;i.isBefore(a)||i.isSame(a,"day");)e.push({date:i.clone(),isCurrentMonth:i.month()===s.value.month()}),i=i.add(1,"day");return e}),E=k(()=>{const t=[];for(let a=0;a<24;a++)for(let e=0;e<60;e+=15)t.push(h().hour(a).minute(e).format("h:mm A"));return t}),J=k(()=>E.value),T=t=>y.disabledDates.includes(t.format("YYYY-MM-DD"));function K(t){return y.mode==="multi"?l.value.includes(t.format("YYYY-MM-DD")):m.value&&t.isSame(m.value,"day")}function L(t){if(!T(t))if(y.mode==="multi"){const a=t.format("YYYY-MM-DD");l.value.indexOf(a)===-1?l.value=[...l.value,a]:l.value=l.value.filter(i=>i!==a),l.value=[...l.value].sort(),D("update:modelValue",[...l.value])}else if(m.value=t.clone(),y.variant==="date-time"){const a=h(`${m.value.format("YYYY-MM-DD")} ${f.value}`,"YYYY-MM-DD HH:mm");D("update:modelValue",a.format("YYYY-MM-DDTHH:mm"))}else D("update:modelValue",m.value.format("YYYY-MM-DD"))}function U(){l.value=[],D("update:modelValue",[])}const q=()=>s.value=s.value.subtract(1,"month"),G=()=>s.value=s.value.add(1,"month"),Q=()=>v.value=v.value==="days"?"months":v.value==="months"?"years":"days",X=t=>{s.value=s.value.month(t),v.value="days"},Z=t=>{s.value=s.value.year(t),v.value="months"};function ee(){if(!m.value)return;const t=h(`${m.value.format("YYYY-MM-DD")} ${f.value}`,["YYYY-MM-DD HH:mm","YYYY-MM-DD h:mm A"]);t.isValid()&&(f.value=t.format("HH:mm"),D("update:modelValue",t.format("YYYY-MM-DDTHH:mm")),M.value=!1)}function te(t){if(!m.value)return;f.value=h(t,"h:mm A").format("HH:mm");const a=h(`${m.value.format("YYYY-MM-DD")} ${f.value}`,"YYYY-MM-DD HH:mm");D("update:modelValue",a.format("YYYY-MM-DDTHH:mm")),M.value=!1}return ae(()=>y.modelValue,t=>{if(y.mode==="multi")l.value=Array.isArray(t)?[...t]:[];else{if(!t){m.value=null;return}const a=h(t);a.isValid()&&(m.value=a,s.value=a.startOf("month"),y.variant==="date-time"&&(f.value=a.format("HH:mm")))}},{immediate:!0}),(t,a)=>(r(),n("div",{class:"fu-date-picker fu-date-picker--plain",style:O({width:o.formWrapperWidth,fontSize:o.fontSize})},[d("div",{class:"fu-date-picker",style:O({width:o.formWrapperWidth})},[d("div",me,[d("button",{onClick:Q},[v.value==="days"?(r(),n(g,{key:0},[C(c(s.value.format("MMMM YYYY")),1)],64)):v.value==="months"?(r(),n(g,{key:1},[C(c(s.value.year()),1)],64)):(r(),n(g,{key:2},[C(c(w.value)+" - "+c(B.value),1)],64))]),d("div",ce,[d("button",{onClick:q},[P(z(le),{size:16,color:"var(--fu-color-text)"})]),d("button",{onClick:G},[P(z(ie),{size:16})])])]),v.value==="days"?(r(),n("div",ue,[d("div",pe,[(r(),n(g,null,Y(j,e=>d("div",{key:e,class:"calendar-weekday"},c(e),1)),64))]),d("div",ve,[(r(!0),n(g,null,Y(I.value,e=>(r(),n("div",{key:e.date.toString(),class:F(["calendar-day",{"calendar-day--other-month":!e.isCurrentMonth,"calendar-day--selected":K(e.date),"calendar-day--disabled":T(e.date)}]),onClick:i=>L(e.date)},c(e.date.date()),11,fe))),128))])])):v.value==="months"?(r(),n("div",ge,[(r(),n(g,null,Y(N,(e,i)=>d("div",{key:e,class:F(["calendar-month",{"calendar-month--selected":i===s.value.month()}]),onClick:Pe=>X(i)},c(e),11,ye)),64))])):(r(),n("div",he,[(r(!0),n(g,null,Y(R.value,e=>(r(),n("div",{key:e,class:F(["calendar-year",{"calendar-year--selected":e===s.value.year()}]),onClick:i=>Z(e)},c(e),11,De))),128))])),o.mode==="multi"&&l.value.length?(r(),n("div",ke,[d("span",null,c(l.value.length)+" date"+c(l.value.length>1?"s":"")+" selected",1),d("button",{class:"calendar-multi-clear",onClick:U},"Clear all")])):H("",!0),o.variant==="date-time"?(r(),n("div",Ye,[P(se,{type:"text",modelValue:f.value,"onUpdate:modelValue":a[0]||(a[0]=e=>f.value=e),placeholder:"HH:mm or 4:30pm",onFocus:a[1]||(a[1]=e=>M.value=!0),onKeydown:re(A(ee,["prevent"]),["enter"]),formWrapperWidth:"100%"},{right:ne(()=>[P(z(de))]),_:1},8,["modelValue","onKeydown"]),M.value?(r(),n("div",be,[(r(!0),n(g,null,Y(J.value,e=>(r(),n("div",{key:e,class:"fu-time-option",onMousedown:A(i=>te(e),["prevent"])},c(e),41,Me))),128))])):H("",!0)])):H("",!0)],4)],4))}},b=oe($,[["__scopeId","data-v-edb78133"]]);$.__docgenInfo={exportName:"default",displayName:"FusionPlainDatePicker",description:"",tags:{},props:[{name:"modelValue",type:{name:"string|array"}},{name:"mode",type:{name:"string"},defaultValue:{func:!1,value:'"single"'}},{name:"variant",type:{name:"string"},defaultValue:{func:!1,value:'"date"'}},{name:"formWrapperWidth",type:{name:"string"}},{name:"fontSize",type:{name:"string"},defaultValue:{func:!1,value:'"0.625rem"'}},{name:"disabledDates",type:{name:"array"},defaultValue:{func:!1,value:"[]"}}],events:[{name:"update:modelValue"}],sourceFiles:["/Users/xavier/Documents/Websites/Skkido/Fusion-binary-ui/src/components/datePicker/plainDate/FusionPlainDatePicker.vue"]};const Fe={title:"Components/Date-and-Time/PlainDatePicker",component:b,tags:["autodocs"],argTypes:{formWrapperWidth:{control:{type:"text"},description:"Width of the date picker wrapper (e.g., '240px', '100%')",table:{category:"Props",defaultValue:{summary:"undefined"},type:{summary:"string | undefined"}}},mode:{control:{type:"select"},options:["single","multi"],description:"Selection mode — single date or multiple dates",table:{category:"Props",defaultValue:{summary:"single"},type:{summary:'"single" | "multi"'}}},variant:{control:{type:"select"},options:["date","date-time"],description:"Whether to show a time picker alongside the date",table:{category:"Props",defaultValue:{summary:"date"},type:{summary:'"date" | "date-time"'}}},fontSize:{control:{type:"text"},description:"Font size of the calendar (e.g. '0.75rem')",table:{category:"Props",defaultValue:{summary:"0.625rem"},type:{summary:"string"}}},disabledDates:{control:{type:"object"},description:'Array of dates to block from selection (e.g. dates that already have overrides). Format: `"YYYY-MM-DD"`',table:{category:"Props",defaultValue:{summary:"[]"},type:{summary:"string[]"}}}},parameters:{docs:{description:{component:`
A simple and accessible **date picker** with single and multi-select modes.

---

### Features

- Single or multi-date selection via \`mode\` prop
- Optional time picker via \`variant="date-time"\`
- Tap a selected date again to deselect it (multi mode)
- Block specific dates via \`disabled-dates\` — greyed out with strikethrough, unclickable
- Reactive with \`v-model\` — returns a \`string\` in single mode, \`string[]\` in multi mode
- Configurable wrapper width and font size

---

### Single mode (default)

\`\`\`vue
<script setup>
import { ref } from "vue";
const selectedDate = ref("2025-12-28");
<\/script>

<template>
  <FusionPlainDatePicker v-model="selectedDate" formWrapperWidth="240px" />
</template>
\`\`\`

---

### Multi mode

\`\`\`vue
<script setup>
import { ref } from "vue";
const selectedDates = ref(["2025-12-24", "2025-12-25", "2025-12-26"]);
<\/script>

<template>
  <FusionPlainDatePicker v-model="selectedDates" mode="multi" formWrapperWidth="240px" />
</template>
\`\`\`

---

### With disabled dates (e.g. existing overrides)

\`\`\`vue
<script setup>
import { ref } from "vue";
const selectedDates = ref([]);
const takenDates = ["2025-12-20", "2025-12-21", "2025-12-22"];
<\/script>

<template>
  <FusionPlainDatePicker
    v-model="selectedDates"
    mode="multi"
    :disabled-dates="takenDates"
    formWrapperWidth="240px"
  />
</template>
\`\`\`
        `}}}},S={name:"Single (default)",render:o=>({components:{PlainDatePicker:b},setup(){const p=u("2025-12-28");return{args:o,model:p}},template:`
      <div>
        <PlainDatePicker v-bind="args" v-model="model" />
        <p style="margin-top: 0.75rem; font-size: 0.85rem;">Selected: {{ model }}</p>
      </div>
    `}),args:{formWrapperWidth:"240px",mode:"single",variant:"date",disabledDates:[]}},x={name:"Multi-select",render:o=>({components:{PlainDatePicker:b},setup(){const p=u(["2025-12-24","2025-12-25","2025-12-26"]);return{args:o,model:p}},template:`
      <div>
        <PlainDatePicker v-bind="args" v-model="model" />
        <p style="margin-top: 0.75rem; font-size: 0.85rem;">
          Selected ({{ model.length }}): {{ model.join(", ") || "none" }}
        </p>
      </div>
    `}),args:{formWrapperWidth:"240px",mode:"multi",variant:"date",disabledDates:[]}},V={name:"Multi-select with disabled dates",render:o=>({components:{PlainDatePicker:b},setup(){const p=u(["2025-12-24","2025-12-26"]);return{args:o,model:p}},template:`
      <div>
        <PlainDatePicker v-bind="args" v-model="model" />
        <p style="margin-top: 0.75rem; font-size: 0.85rem;">
          Selected ({{ model.length }}): {{ model.join(", ") || "none" }}
        </p>
        <p style="margin-top: 0.25rem; font-size: 0.8rem; color: #888;">
          Disabled (already overridden): {{ args.disabledDates.join(", ") }}
        </p>
      </div>
    `}),args:{formWrapperWidth:"240px",mode:"multi",variant:"date",disabledDates:["2025-12-20","2025-12-21","2025-12-22","2025-12-25"]}},_={name:"With time picker",render:o=>({components:{PlainDatePicker:b},setup(){const p=u("2025-12-28T09:00");return{args:o,model:p}},template:`
      <div>
        <PlainDatePicker v-bind="args" v-model="model" />
        <p style="margin-top: 0.75rem; font-size: 0.85rem;">Selected: {{ model }}</p>
      </div>
    `}),args:{formWrapperWidth:"240px",mode:"single",variant:"date-time",disabledDates:[]}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  name: "Single (default)",
  render: args => ({
    components: {
      PlainDatePicker
    },
    setup() {
      const model = ref("2025-12-28");
      return {
        args,
        model
      };
    },
    template: \`
      <div>
        <PlainDatePicker v-bind="args" v-model="model" />
        <p style="margin-top: 0.75rem; font-size: 0.85rem;">Selected: {{ model }}</p>
      </div>
    \`
  }),
  args: {
    formWrapperWidth: "240px",
    mode: "single",
    variant: "date",
    disabledDates: []
  }
}`,...S.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  name: "Multi-select",
  render: args => ({
    components: {
      PlainDatePicker
    },
    setup() {
      const model = ref(["2025-12-24", "2025-12-25", "2025-12-26"]);
      return {
        args,
        model
      };
    },
    template: \`
      <div>
        <PlainDatePicker v-bind="args" v-model="model" />
        <p style="margin-top: 0.75rem; font-size: 0.85rem;">
          Selected ({{ model.length }}): {{ model.join(", ") || "none" }}
        </p>
      </div>
    \`
  }),
  args: {
    formWrapperWidth: "240px",
    mode: "multi",
    variant: "date",
    disabledDates: []
  }
}`,...x.parameters?.docs?.source}}};V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  name: "Multi-select with disabled dates",
  render: args => ({
    components: {
      PlainDatePicker
    },
    setup() {
      const model = ref(["2025-12-24", "2025-12-26"]);
      return {
        args,
        model
      };
    },
    template: \`
      <div>
        <PlainDatePicker v-bind="args" v-model="model" />
        <p style="margin-top: 0.75rem; font-size: 0.85rem;">
          Selected ({{ model.length }}): {{ model.join(", ") || "none" }}
        </p>
        <p style="margin-top: 0.25rem; font-size: 0.8rem; color: #888;">
          Disabled (already overridden): {{ args.disabledDates.join(", ") }}
        </p>
      </div>
    \`
  }),
  args: {
    formWrapperWidth: "240px",
    mode: "multi",
    variant: "date",
    disabledDates: ["2025-12-20", "2025-12-21", "2025-12-22", "2025-12-25"]
  }
}`,...V.parameters?.docs?.source}}};_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  name: "With time picker",
  render: args => ({
    components: {
      PlainDatePicker
    },
    setup() {
      const model = ref("2025-12-28T09:00");
      return {
        args,
        model
      };
    },
    template: \`
      <div>
        <PlainDatePicker v-bind="args" v-model="model" />
        <p style="margin-top: 0.75rem; font-size: 0.85rem;">Selected: {{ model }}</p>
      </div>
    \`
  }),
  args: {
    formWrapperWidth: "240px",
    mode: "single",
    variant: "date-time",
    disabledDates: []
  }
}`,..._.parameters?.docs?.source}}};const Te=["Default","MultiSelect","MultiSelectWithDisabled","WithTimePicker"];export{S as Default,x as MultiSelect,V as MultiSelectWithDisabled,_ as WithTimePicker,Te as __namedExportsOrder,Fe as default};
