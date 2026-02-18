import{r as h,c as f,m as Q,a as o,g as i,f as x,F as u,k as C,t as m,b as Y,u as V,h as y,w as X,p as Z,e as H,n as b,j as r,l as W}from"./iframe-4anGkjM3.js";import{d as p}from"./dayjs.min-C8Kx736W.js";import"./FusionButton-DDWoq9Vu.js";import"./FusionActionButton-DOSunp5G.js";import{F as ee}from"./FusionTextInput-B7zbcKHf.js";import{_ as te}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{C as ae,a as ne}from"./chevron-right-BlwsVKhl.js";import{C as oe}from"./chevron-down-pi8uy0el.js";import"./preload-helper-Ct5FWWRu.js";import"./_commonjsHelpers-CqkleIqs.js";import"./createLucideIcon-MAVkZFkt.js";const re={class:"calendar-header"},se={class:"flex flex--gap-sm"},le={key:0},ie={class:"calendar-weekdays"},de={class:"calendar-days"},me=["onClick"],ce={key:1,class:"calendar-months"},ue=["onClick"],pe={key:2,class:"calendar-years"},ve=["onClick"],fe={key:3,class:"calendar-time"},he={key:0,class:"fu-time-dropdown customScrollBar"},ye=["onMousedown"],g=12,S={__name:"FusionPlainDatePicker",props:{modelValue:String,variant:{type:String,default:"date"},formWrapperWidth:String},emits:["update:modelValue"],setup(v,{emit:_}){const P=v,k=_,n=h(p().startOf("month")),l=h(null),c=h("00:00"),d=h("days"),D=h(!1),T=["Su","Mo","Tu","We","Th","Fr","Sa"],O=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],w=f(()=>Math.floor(n.value.year()/g)*g),$=f(()=>w.value+g-1),A=f(()=>Array.from({length:g},(t,a)=>w.value+a)),N=f(()=>{const t=n.value.startOf("month").startOf("week"),a=n.value.endOf("month").endOf("week"),e=[];let s=t.clone();for(;s.isBefore(a)||s.isSame(a,"day");)e.push({date:s.clone(),isCurrentMonth:s.month()===n.value.month()}),s=s.add(1,"day");return e}),B=f(()=>{const t=[];for(let a=0;a<24;a++)for(let e=0;e<60;e+=15)t.push(p().hour(a).minute(e).format("h:mm A"));return t}),R=f(()=>B.value),z=()=>!1,E=t=>l.value&&t.isSame(l.value,"day");function I(t){if(l.value=t.clone(),P.variant==="date-time"){const a=p(`${l.value.format("YYYY-MM-DD")} ${c.value}`,"YYYY-MM-DD HH:mm");k("update:modelValue",a.format("YYYY-MM-DDTHH:mm"))}else k("update:modelValue",l.value.format("YYYY-MM-DD"))}const J=()=>n.value=n.value.subtract(1,"month"),K=()=>n.value=n.value.add(1,"month"),U=()=>d.value=d.value==="days"?"months":d.value==="months"?"years":"days",j=t=>{n.value=n.value.month(t),d.value="days"},L=t=>{n.value=n.value.year(t),d.value="months"};function q(){if(!l.value)return;const t=p(`${l.value.format("YYYY-MM-DD")} ${c.value}`,["YYYY-MM-DD HH:mm","YYYY-MM-DD h:mm A"]);t.isValid()&&(c.value=t.format("HH:mm"),k("update:modelValue",t.format("YYYY-MM-DDTHH:mm")),D.value=!1)}function G(t){if(!l.value)return;c.value=p(t,"h:mm A").format("HH:mm");const a=p(`${l.value.format("YYYY-MM-DD")} ${c.value}`,"YYYY-MM-DD HH:mm");k("update:modelValue",a.format("YYYY-MM-DDTHH:mm")),D.value=!1}return Q(()=>P.modelValue,t=>{if(!t){l.value=null;return}const a=p(t);a.isValid()&&(l.value=a,n.value=a.startOf("month"),P.variant==="date-time"&&(c.value=a.format("HH:mm")))},{immediate:!0}),(t,a)=>(r(),o("div",{class:"fu-date-picker fu-date-picker--plain",style:b({width:v.formWrapperWidth})},[i("div",{class:"fu-date-picker",style:b({width:v.formWrapperWidth})},[i("div",re,[i("button",{onClick:U},[d.value==="days"?(r(),o(u,{key:0},[C(m(n.value.format("MMMM YYYY")),1)],64)):d.value==="months"?(r(),o(u,{key:1},[C(m(n.value.year()),1)],64)):(r(),o(u,{key:2},[C(m(w.value)+" - "+m($.value),1)],64))]),i("div",se,[i("button",{onClick:J},[Y(V(ae),{size:16,color:"var(--fu-color-text)"})]),i("button",{onClick:K},[Y(V(ne),{size:16})])])]),d.value==="days"?(r(),o("div",le,[i("div",ie,[(r(),o(u,null,y(T,e=>i("div",{key:e,class:"calendar-weekday"},m(e),1)),64))]),i("div",de,[(r(!0),o(u,null,y(N.value,e=>(r(),o("div",{key:e.date.toString(),class:W(["calendar-day",{"calendar-day--other-month":!e.isCurrentMonth,"calendar-day--selected":E(e.date),"calendar-day--disabled":z(e.date)}]),onClick:s=>I(e.date)},m(e.date.date()),11,me))),128))])])):d.value==="months"?(r(),o("div",ce,[(r(),o(u,null,y(O,(e,s)=>i("div",{key:e,class:W(["calendar-month",{"calendar-month--selected":s===n.value.month()}]),onClick:ke=>j(s)},m(e),11,ue)),64))])):(r(),o("div",pe,[(r(!0),o(u,null,y(A.value,e=>(r(),o("div",{key:e,class:W(["calendar-year",{"calendar-year--selected":e===n.value.year()}]),onClick:s=>L(e)},m(e),11,ve))),128))])),v.variant==="date-time"?(r(),o("div",fe,[Y(ee,{type:"text",modelValue:c.value,"onUpdate:modelValue":a[0]||(a[0]=e=>c.value=e),placeholder:"HH:mm or 4:30pm",onFocus:a[1]||(a[1]=e=>D.value=!0),onKeydown:Z(H(q,["prevent"]),["enter"]),formWrapperWidth:"100%"},{right:X(()=>[Y(V(oe))]),_:1},8,["modelValue","onKeydown"]),D.value?(r(),o("div",he,[(r(!0),o(u,null,y(R.value,e=>(r(),o("div",{key:e,class:"fu-time-option",onMousedown:H(s=>G(e),["prevent"])},m(e),41,ye))),128))])):x("",!0)])):x("",!0)],4)],4))}},F=te(S,[["__scopeId","data-v-4161642e"]]);S.__docgenInfo={exportName:"default",displayName:"FusionPlainDatePicker",description:"",tags:{},props:[{name:"modelValue",type:{name:"string"}},{name:"variant",type:{name:"string"},defaultValue:{func:!1,value:'"date"'}},{name:"formWrapperWidth",type:{name:"string"}}],events:[{name:"update:modelValue"}],sourceFiles:["/Users/xavier/Documents/Websites/Skkido/Fusion-binary-ui/src/components/datePicker/plainDate/FusionPlainDatePicker.vue"]};const He={title:"Components/Date-and-Time/PlainDatePicker",component:F,tags:["autodocs"],argTypes:{formWrapperWidth:{control:{type:"text"},description:"Width of the date picker wrapper (e.g., '240px', '100%')",table:{category:"Props",defaultValue:{summary:"undefined"},type:{summary:"string | undefined"}}}},parameters:{docs:{description:{component:`
A simple and accessible **date-only picker**.

---

### Features

- Pure date selection (no time, no range)  
- Reactive with \`v-model\` binding  
- Configurable wrapper width  

---

### Example Usage

\`\`\`vue
<script setup>
import { ref } from "vue";
import FusionPlainDatePicker from "@/components/datePicker/FusionPlainDatePicker.vue";

const selectedDate = ref("2025-12-28");
<\/script>

<template>
  <FusionPlainDatePicker
    v-model="selectedDate"
    formWrapperWidth="240px"
  />
</template>
\`\`\`
        `}}}},M={name:"Default",render:v=>({components:{PlainDatePicker:F},setup(){const _=h("2025-12-28");return{args:v,model:_}},template:`
      <div>
        <PlainDatePicker v-bind="args" v-model="model" />
        <p>Selected Date: {{ model }}</p>
      </div>
    `}),args:{formWrapperWidth:"240px"}};M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  name: "Default",
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
        <p>Selected Date: {{ model }}</p>
      </div>
    \`
  }),
  args: {
    formWrapperWidth: "240px"
  }
}`,...M.parameters?.docs?.source}}};const be=["Default"];export{M as Default,be as __namedExportsOrder,He as default};
