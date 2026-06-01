import{r as h,c as f,s as Q,b as o,g as i,F as c,q as S,t as m,l as Y,u as V,e as y,w as X,v as Z,m as W,i as x,n as H,o as r,j as C}from"./iframe-BWX2pLPr.js";import{d as v}from"./dayjs.min-C8Kx736W.js";import"./FusionButton-rEE2o6aG.js";import"./FusionActionButton-Ca-SR80j.js";import{F as ee}from"./FusionTextInput-cbn4CYAx.js";import{_ as te}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{C as ae,a as ne}from"./chevron-right-CxP2LKb3.js";import{C as oe}from"./chevron-down-bo5ElzX-.js";import"./preload-helper-Ct5FWWRu.js";import"./_commonjsHelpers-CqkleIqs.js";import"./createLucideIcon-BuC7IBSO.js";const re={class:"calendar-header"},se={class:"flex flex--gap-sm"},le={key:0},ie={class:"calendar-weekdays"},de={class:"calendar-days"},me=["onClick"],ue={key:1,class:"calendar-months"},ce=["onClick"],pe={key:2,class:"calendar-years"},ve=["onClick"],fe={key:3,class:"calendar-time"},he={key:0,class:"fu-time-dropdown customScrollBar"},ye=["onMousedown"],g=12,b={__name:"FusionPlainDatePicker",props:{modelValue:String,variant:{type:String,default:"date"},formWrapperWidth:String,fontSize:{type:String,default:"0.625rem"}},emits:["update:modelValue"],setup(p,{emit:_}){const P=p,D=_,n=h(v().startOf("month")),l=h(null),u=h("00:00"),d=h("days"),k=h(!1),T=["Su","Mo","Tu","We","Th","Fr","Sa"],O=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],w=f(()=>Math.floor(n.value.year()/g)*g),$=f(()=>w.value+g-1),A=f(()=>Array.from({length:g},(t,a)=>w.value+a)),z=f(()=>{const t=n.value.startOf("month").startOf("week"),a=n.value.endOf("month").endOf("week"),e=[];let s=t.clone();for(;s.isBefore(a)||s.isSame(a,"day");)e.push({date:s.clone(),isCurrentMonth:s.month()===n.value.month()}),s=s.add(1,"day");return e}),N=f(()=>{const t=[];for(let a=0;a<24;a++)for(let e=0;e<60;e+=15)t.push(v().hour(a).minute(e).format("h:mm A"));return t}),B=f(()=>N.value),R=()=>!1,E=t=>l.value&&t.isSame(l.value,"day");function I(t){if(l.value=t.clone(),P.variant==="date-time"){const a=v(`${l.value.format("YYYY-MM-DD")} ${u.value}`,"YYYY-MM-DD HH:mm");D("update:modelValue",a.format("YYYY-MM-DDTHH:mm"))}else D("update:modelValue",l.value.format("YYYY-MM-DD"))}const J=()=>n.value=n.value.subtract(1,"month"),K=()=>n.value=n.value.add(1,"month"),U=()=>d.value=d.value==="days"?"months":d.value==="months"?"years":"days",j=t=>{n.value=n.value.month(t),d.value="days"},L=t=>{n.value=n.value.year(t),d.value="months"};function q(){if(!l.value)return;const t=v(`${l.value.format("YYYY-MM-DD")} ${u.value}`,["YYYY-MM-DD HH:mm","YYYY-MM-DD h:mm A"]);t.isValid()&&(u.value=t.format("HH:mm"),D("update:modelValue",t.format("YYYY-MM-DDTHH:mm")),k.value=!1)}function G(t){if(!l.value)return;u.value=v(t,"h:mm A").format("HH:mm");const a=v(`${l.value.format("YYYY-MM-DD")} ${u.value}`,"YYYY-MM-DD HH:mm");D("update:modelValue",a.format("YYYY-MM-DDTHH:mm")),k.value=!1}return Q(()=>P.modelValue,t=>{if(!t){l.value=null;return}const a=v(t);a.isValid()&&(l.value=a,n.value=a.startOf("month"),P.variant==="date-time"&&(u.value=a.format("HH:mm")))},{immediate:!0}),(t,a)=>(r(),o("div",{class:"fu-date-picker fu-date-picker--plain",style:H({width:p.formWrapperWidth,fontSize:p.fontSize})},[i("div",{class:"fu-date-picker",style:H({width:p.formWrapperWidth})},[i("div",re,[i("button",{onClick:U},[d.value==="days"?(r(),o(c,{key:0},[S(m(n.value.format("MMMM YYYY")),1)],64)):d.value==="months"?(r(),o(c,{key:1},[S(m(n.value.year()),1)],64)):(r(),o(c,{key:2},[S(m(w.value)+" - "+m($.value),1)],64))]),i("div",se,[i("button",{onClick:J},[Y(V(ae),{size:16,color:"var(--fu-color-text)"})]),i("button",{onClick:K},[Y(V(ne),{size:16})])])]),d.value==="days"?(r(),o("div",le,[i("div",ie,[(r(),o(c,null,y(T,e=>i("div",{key:e,class:"calendar-weekday"},m(e),1)),64))]),i("div",de,[(r(!0),o(c,null,y(z.value,e=>(r(),o("div",{key:e.date.toString(),class:C(["calendar-day",{"calendar-day--other-month":!e.isCurrentMonth,"calendar-day--selected":E(e.date),"calendar-day--disabled":R(e.date)}]),onClick:s=>I(e.date)},m(e.date.date()),11,me))),128))])])):d.value==="months"?(r(),o("div",ue,[(r(),o(c,null,y(O,(e,s)=>i("div",{key:e,class:C(["calendar-month",{"calendar-month--selected":s===n.value.month()}]),onClick:De=>j(s)},m(e),11,ce)),64))])):(r(),o("div",pe,[(r(!0),o(c,null,y(A.value,e=>(r(),o("div",{key:e,class:C(["calendar-year",{"calendar-year--selected":e===n.value.year()}]),onClick:s=>L(e)},m(e),11,ve))),128))])),p.variant==="date-time"?(r(),o("div",fe,[Y(ee,{type:"text",modelValue:u.value,"onUpdate:modelValue":a[0]||(a[0]=e=>u.value=e),placeholder:"HH:mm or 4:30pm",onFocus:a[1]||(a[1]=e=>k.value=!0),onKeydown:Z(W(q,["prevent"]),["enter"]),formWrapperWidth:"100%"},{right:X(()=>[Y(V(oe))]),_:1},8,["modelValue","onKeydown"]),k.value?(r(),o("div",he,[(r(!0),o(c,null,y(B.value,e=>(r(),o("div",{key:e,class:"fu-time-option",onMousedown:W(s=>G(e),["prevent"])},m(e),41,ye))),128))])):x("",!0)])):x("",!0)],4)],4))}},F=te(b,[["__scopeId","data-v-885d1491"]]);b.__docgenInfo={exportName:"default",displayName:"FusionPlainDatePicker",description:"",tags:{},props:[{name:"modelValue",type:{name:"string"}},{name:"variant",type:{name:"string"},defaultValue:{func:!1,value:'"date"'}},{name:"formWrapperWidth",type:{name:"string"}},{name:"fontSize",type:{name:"string"},defaultValue:{func:!1,value:'"0.625rem"'}}],events:[{name:"update:modelValue"}],sourceFiles:["/Users/xavier/Documents/Websites/Skkido/Fusion-binary-ui/src/components/datePicker/plainDate/FusionPlainDatePicker.vue"]};const xe={title:"Components/Date-and-Time/PlainDatePicker",component:F,tags:["autodocs"],argTypes:{formWrapperWidth:{control:{type:"text"},description:"Width of the date picker wrapper (e.g., '240px', '100%')",table:{category:"Props",defaultValue:{summary:"undefined"},type:{summary:"string | undefined"}}}},parameters:{docs:{description:{component:`
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
        `}}}},M={name:"Default",render:p=>({components:{PlainDatePicker:F},setup(){const _=h("2025-12-28");return{args:p,model:_}},template:`
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
}`,...M.parameters?.docs?.source}}};const He=["Default"];export{M as Default,He as __namedExportsOrder,xe as default};
