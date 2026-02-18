import{r as k,c as B,m as We,o as ze,a as f,d as Ce,w as N,f as oe,e as me,g as L,b as V,u as te,F as Z,h as se,p as Le,n as Te,T as Oe,l as ce,j as c,k as J,t as _,i as $e}from"./iframe-4anGkjM3.js";import{d as F}from"./dayjs.min-C8Kx736W.js";import{g as Re}from"./_commonjsHelpers-CqkleIqs.js";import{F as le}from"./FusionButton-DDWoq9Vu.js";import{F as Ve}from"./FusionActionButton-DOSunp5G.js";import{F as Se}from"./FusionTextInput-B7zbcKHf.js";import{_ as He}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{C as fe}from"./chevron-down-pi8uy0el.js";import{C as qe,a as Ae}from"./chevron-right-BlwsVKhl.js";import"./preload-helper-Ct5FWWRu.js";import"./createLucideIcon-MAVkZFkt.js";var ge={exports:{}},Be=ge.exports,Fe;function _e(){return Fe||(Fe=1,(function(i,E){(function(d,O){i.exports=O()})(Be,(function(){var d={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"},O=/(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|Q|YYYY|YY?|ww?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g,$=/\d/,R=/\d\d/,g=/\d\d?/,P=/\d*[^-_:/,()\s\d]+/,M={},s=function(t){return(t=+t)+(t>68?1900:2e3)},r=function(t){return function(l){this[t]=+l}},o=[/[+-]\d\d:?(\d\d)?|Z/,function(t){(this.zone||(this.zone={})).offset=(function(l){if(!l||l==="Z")return 0;var u=l.match(/([+-]|\d\d)/g),m=60*u[1]+(+u[2]||0);return m===0?0:u[0]==="+"?-m:m})(t)}],y=function(t){var l=M[t];return l&&(l.indexOf?l:l.s.concat(l.f))},ie=function(t,l){var u,m=M.meridiem;if(m){for(var x=1;x<=24;x+=1)if(t.indexOf(m(x,0,l))>-1){u=x>12;break}}else u=t===(l?"pm":"PM");return u},De={A:[P,function(t){this.afternoon=ie(t,!1)}],a:[P,function(t){this.afternoon=ie(t,!0)}],Q:[$,function(t){this.month=3*(t-1)+1}],S:[$,function(t){this.milliseconds=100*+t}],SS:[R,function(t){this.milliseconds=10*+t}],SSS:[/\d{3}/,function(t){this.milliseconds=+t}],s:[g,r("seconds")],ss:[g,r("seconds")],m:[g,r("minutes")],mm:[g,r("minutes")],H:[g,r("hours")],h:[g,r("hours")],HH:[g,r("hours")],hh:[g,r("hours")],D:[g,r("day")],DD:[R,r("day")],Do:[P,function(t){var l=M.ordinal,u=t.match(/\d+/);if(this.day=u[0],l)for(var m=1;m<=31;m+=1)l(m).replace(/\[|\]/g,"")===t&&(this.day=m)}],w:[g,r("week")],ww:[R,r("week")],M:[g,r("month")],MM:[R,r("month")],MMM:[P,function(t){var l=y("months"),u=(y("monthsShort")||l.map((function(m){return m.slice(0,3)}))).indexOf(t)+1;if(u<1)throw new Error;this.month=u%12||u}],MMMM:[P,function(t){var l=y("months").indexOf(t)+1;if(l<1)throw new Error;this.month=l%12||l}],Y:[/[+-]?\d+/,r("year")],YY:[R,function(t){this.year=s(t)}],YYYY:[/\d{4}/,r("year")],Z:o,ZZ:o};function p(t){var l,u;l=t,u=M&&M.formats;for(var m=(t=l.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g,(function(D,C,w){var h=w&&w.toUpperCase();return C||u[w]||d[w]||u[h].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,(function(W,z,q){return z||q.slice(1)}))}))).match(O),x=m.length,S=0;S<x;S+=1){var j=m[S],H=De[j],T=H&&H[0],b=H&&H[1];m[S]=b?{regex:T,parser:b}:j.replace(/^\[|\]$/g,"")}return function(D){for(var C={},w=0,h=0;w<x;w+=1){var W=m[w];if(typeof W=="string")h+=W.length;else{var z=W.regex,q=W.parser,K=D.slice(h),I=z.exec(K)[0];q.call(C,I),D=D.replace(I,"")}}return(function(A){var Q=A.afternoon;if(Q!==void 0){var Y=A.hours;Q?Y<12&&(A.hours+=12):Y===12&&(A.hours=0),delete A.afternoon}})(C),C}}return function(t,l,u){u.p.customParseFormat=!0,t&&t.parseTwoDigitYear&&(s=t.parseTwoDigitYear);var m=l.prototype,x=m.parse;m.parse=function(S){var j=S.date,H=S.utc,T=S.args;this.$u=H;var b=T[1];if(typeof b=="string"){var D=T[2]===!0,C=T[3]===!0,w=D||C,h=T[2];C&&(h=T[2]),M=this.$locale(),!D&&h&&(M=u.Ls[h]),this.$d=(function(K,I,A,Q){try{if(["x","X"].indexOf(I)>-1)return new Date((I==="X"?1e3:1)*K);var Y=p(I)(K),ne=Y.year,G=Y.month,Ye=Y.day,ue=Y.hours,ke=Y.minutes,re=Y.seconds,Me=Y.milliseconds,de=Y.zone,e=Y.week,a=new Date,n=Ye||(ne||G?1:a.getDate()),v=ne||a.getFullYear(),U=0;ne&&!G||(U=G>0?G-1:a.getMonth());var ee,X=ue||0,we=ke||0,xe=re||0,be=Me||0;return de?new Date(Date.UTC(v,U,n,X,we,xe,be+60*de.offset*1e3)):A?new Date(Date.UTC(v,U,n,X,we,xe,be)):(ee=new Date(v,U,n,X,we,xe,be),e&&(ee=Q(ee).week(e).toDate()),ee)}catch{return new Date("")}})(j,b,H,u),this.init(),h&&h!==!0&&(this.$L=this.locale(h).$L),w&&j!=this.format(b)&&(this.$d=new Date("")),M={}}else if(b instanceof Array)for(var W=b.length,z=1;z<=W;z+=1){T[1]=b[z-1];var q=u.apply(this,T);if(q.isValid()){this.$d=q.$d,this.$L=q.$L,this.init();break}z===W&&(this.$d=new Date(""))}else x.call(this,S)}}}))})(ge)),ge.exports}var Ee=_e();const Ie=Re(Ee),Ue={class:"calendar-header"},Ne={class:"flex flex--gap-sm"},Ze={key:0},je={class:"calendar-weekdays"},Xe={class:"calendar-days"},Je=["onClick"],Ke={key:1,class:"calendar-months"},Qe=["onClick"],Ge={key:2,class:"calendar-years"},et=["onClick"],tt={class:"flex flex--space flex--gap-md px-2 pb-2"},at={key:0,class:"flex flex--gap-sm"},nt={key:1},rt={key:3,class:"calendar-time"},ot={class:"fu-time-input-wrapper"},st={key:0,class:"fu-time-dropdown customScrollBar"},lt=["onMousedown"],ae=12,Pe={__name:"FusionDatePicker",props:{modelValue:[String,Object],variant:{type:String,default:"date",validator:i=>["date","date-time","date-range"].includes(i)},min:String,max:String,formWrapperWidth:String,size:{type:String,default:"md",validator:i=>["sm","md","lg"].includes(i)},error:{type:[String,null],default:null},label:{type:String,default:null},required:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1}},emits:["update:modelValue"],setup(i,{emit:E}){F.extend(Ie);const d=i,O=k(!1),$=E,R=k(!1),g=k(null),P=k(null),M=k(null),s=k(F().startOf("month")),r=k(null),o=k({start:null,end:null}),y=k("00:00"),ie=["Su","Mo","Tu","We","Th","Fr","Sa"],De=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],p=k("days"),t=B(()=>Math.floor(s.value.year()/ae)*ae),l=B(()=>t.value+ae-1),u=B(()=>Array.from({length:ae},(e,a)=>t.value+a)),m=B(()=>{const e=s.value.startOf("month").startOf("week"),a=s.value.endOf("month").endOf("week"),n=[];let v=e.clone();for(;v.isBefore(a)||v.isSame(a,"day");)n.push({date:v.clone(),isCurrentMonth:v.month()===s.value.month()}),v=v.add(1,"day");return n});function x(e){return!!(d.min&&e.isBefore(F(d.min),"day")||d.max&&e.isAfter(F(d.max),"day"))}function S(e){return d.variant==="date-range"?o.value.start&&e.isSame(o.value.start,"day")||o.value.end&&e.isSame(o.value.end,"day"):r.value&&e.isSame(r.value,"day")}function j(e){return d.variant==="date-range"&&o.value.start&&o.value.end&&e.isAfter(o.value.start,"day")&&e.isBefore(o.value.end,"day")}function H(e){if(!x(e)){if(d.variant==="date-range"){!o.value.start||g.value==="start"?(o.value.start=e.clone(),o.value.end=null,g.value="end"):e.isBefore(o.value.start,"day")?(o.value.end=o.value.start.clone(),o.value.start=e.clone()):o.value.end=e.clone();return}r.value=e.clone(),$("update:modelValue",d.variant==="date-time"?r.value.format("YYYY-MM-DDTHH:mm"):r.value.format("YYYY-MM-DD")),D()}}function T(){o.value.start&&o.value.end&&($("update:modelValue",{start:o.value.start.format("YYYY-MM-DD"),end:o.value.end.format("YYYY-MM-DD")}),D())}function b(e=null){g.value=e,R.value=!0,d.variant==="date-range"?o.value.start?s.value=o.value.start.startOf("month"):s.value=F().startOf("month"):r.value?s.value=r.value.startOf("month"):s.value=F().startOf("month"),$e(()=>{h(),window.addEventListener("resize",h),window.addEventListener("click",C)})}function D(){R.value=!1,window.removeEventListener("resize",h),window.removeEventListener("click",C)}function C(e){!P.value?.contains(e.target)&&!M.value?.contains(e.target)&&D()}const w=k({position:"absolute",top:"0px",left:"0px",zIndex:9999});function h(){if(!P.value||!M.value)return;const e=P.value.getBoundingClientRect(),a=M.value.getBoundingClientRect(),n=window.innerHeight-e.bottom,v=e.top,U=window.scrollY||window.pageYOffset,ee=window.scrollX||window.pageXOffset;let X;n<a.height&&v>a.height?X=e.top+U-a.height-6:X=e.bottom+U+6,w.value={position:"absolute",top:`${X}px`,left:`${e.left+ee}px`,zIndex:9999}}const W=B(()=>r.value?d.variant==="date-time"?r.value.format("YYYY-MM-DD HH:mm"):r.value.format("YYYY-MM-DD"):""),z=B(()=>d.variant!=="date-range"?"":o.value.start&&o.value.end?`${o.value.start.format("YYYY-MM-DD")} to ${o.value.end.format("YYYY-MM-DD")}`:o.value.start?`${o.value.start.format("YYYY-MM-DD")} to ...`:""),q=B(()=>`fu-date-picker--${d.variant}`);We(()=>d.modelValue,e=>{if(d.variant!=="date-range"){if(typeof e=="string"&&e){const a=F(e);if(a.isValid()){r.value=a,s.value=a.startOf("month"),d.variant==="date-time"?y.value=a.format("h:mm A"):y.value="00:00";return}}(e===null||e==="")&&(r.value=null,o.value={start:null,end:null},y.value="00:00")}},{immediate:!0});function K(){p.value==="days"?p.value="months":p.value==="months"?p.value="years":p.value="days"}function I(){p.value==="days"?s.value=s.value.subtract(1,"month"):p.value==="months"?s.value=s.value.subtract(1,"year"):s.value=s.value.subtract(ae,"year")}function A(){p.value==="days"?s.value=s.value.add(1,"month"):p.value==="months"?s.value=s.value.add(1,"year"):s.value=s.value.add(ae,"year")}function Q(e){s.value=s.value.month(e),p.value="days"}function Y(e){s.value=s.value.year(e),p.value="months"}function ne(){const e=F();d.variant==="date-range"?o.value={start:e.clone(),end:e.clone()}:(r.value=e.clone(),$("update:modelValue",d.variant==="date-time"?e.format("YYYY-MM-DDTHH:mm"):e.format("YYYY-MM-DD")),D())}function G(){const e=F().add(1,"day");d.variant==="date-range"?o.value={start:e.clone(),end:e.clone()}:(r.value=e.clone(),$("update:modelValue",d.variant==="date-time"?e.format("YYYY-MM-DDTHH:mm"):e.format("YYYY-MM-DD")),D())}function Ye(){r.value=null,o.value={start:null,end:null},$("update:modelValue",d.variant==="date-range"?{start:null,end:null}:null),D()}const ue=B(()=>{const e=[];for(let a=0;a<24;a++)for(let n=0;n<60;n+=15)e.push(F().hour(a).minute(n).format("h:mm A"));return e}),ke=B(()=>{if(!y.value)return ue.value;const e=y.value.toLowerCase().replace(/\s+/g,"");return ue.value.filter(a=>a.toLowerCase().replace(/\s+/g,"").startsWith(e))});function re(){if(!r.value||!y.value)return;const e=String(y.value).trim().toLowerCase(),a=F(e,["h:mm a","h:mma","ha","h a","hh:mm a","H:mm","HH:mm","H"],!0);if(!a.isValid()){O.value=!1;return}r.value=r.value.hour(a.hour()).minute(a.minute()),y.value=r.value.format("h:mm A"),$("update:modelValue",r.value.format("YYYY-MM-DDTHH:mm")),O.value=!1}function Me(e){y.value=e,re()}function de(){setTimeout(()=>{re(),O.value=!1},120)}return ze(()=>{window.removeEventListener("resize",h),window.removeEventListener("click",C)}),(e,a)=>(c(),f("div",{class:ce(["fu-date-picker",q.value]),ref_key:"pickerRef",ref:P,style:Te({width:i.formWrapperWidth})},[i.variant!=="date-range"?(c(),Ce(Se,{key:0,type:"text",modelValue:W.value,placeholder:"Select date",readonly:"",onClick:b,formWrapperWidth:i.formWrapperWidth,size:i.size,error:i.error,required:i.required,label:i.label,disabled:i.disabled},{right:N(()=>[V(te(fe))]),_:1},8,["modelValue","formWrapperWidth","size","error","required","label","disabled"])):(c(),Ce(Se,{key:1,type:"text",modelValue:z.value,placeholder:"Select date range",onClick:b,readonly:"",formWrapperWidth:i.formWrapperWidth,size:i.size,error:i.error,required:i.required,disabled:i.disabled},{right:N(()=>[V(te(fe))]),_:1},8,["modelValue","formWrapperWidth","size","error","required","disabled"])),(c(),Ce(Oe,{to:"body"},[R.value?(c(),f("div",{key:0,class:"fu-date-picker__calendar-overlay",onClick:me(D,["self"])},[L("div",{class:"fu-date-picker__calendar",style:Te(w.value),ref_key:"calendarRef",ref:M,onClick:a[2]||(a[2]=me(()=>{},["stop"]))},[L("div",Ue,[V(le,{variant:"ghost",size:"sm",icon:te(fe),onClick:K},{default:N(()=>[p.value==="days"?(c(),f(Z,{key:0},[J(_(s.value.format("MMMM YYYY")),1)],64)):p.value==="months"?(c(),f(Z,{key:1},[J(_(s.value.year()),1)],64)):(c(),f(Z,{key:2},[J(_(t.value)+" - "+_(l.value),1)],64))]),_:1},8,["icon"]),L("div",Ne,[V(Ve,{icon:te(qe),size:"sm",onClick:I},null,8,["icon"]),V(Ve,{icon:te(Ae),size:"sm",onClick:A},null,8,["icon"])])]),p.value==="days"?(c(),f("div",Ze,[L("div",je,[(c(),f(Z,null,se(ie,n=>L("div",{key:n,class:"calendar-weekday"},_(n),1)),64))]),L("div",Xe,[(c(!0),f(Z,null,se(m.value,n=>(c(),f("div",{key:n.date.toString(),class:ce(["calendar-day",{"calendar-day--other-month":!n.isCurrentMonth,"calendar-day--selected":S(n.date),"calendar-day--in-range":j(n.date),"calendar-day--disabled":x(n.date)}]),onClick:v=>H(n.date)},_(n.date.date()),11,Je))),128))])])):p.value==="months"?(c(),f("div",Ke,[(c(),f(Z,null,se(De,(n,v)=>L("div",{key:n,class:ce(["calendar-month",{"calendar-month--selected":v===s.value.month()}]),onClick:U=>Q(v)},_(n),11,Qe)),64))])):(c(),f("div",Ge,[(c(!0),f(Z,null,se(u.value,n=>(c(),f("div",{key:n,class:ce(["calendar-year",{"calendar-year--selected":n===s.value.year()}]),onClick:v=>Y(n)},_(n),11,et))),128))])),a[7]||(a[7]=L("hr",null,null,-1)),L("div",tt,[i.variant!=="date-range"?(c(),f("div",at,[V(le,{variant:"outline",onClick:ne},{default:N(()=>[...a[3]||(a[3]=[J("Today",-1)])]),_:1}),V(le,{variant:"outline",onClick:G},{default:N(()=>[...a[4]||(a[4]=[J("Tomorrow",-1)])]),_:1})])):oe("",!0),i.variant==="date-range"?(c(),f("div",nt,[V(le,{variant:"outline",onClick:T},{default:N(()=>[...a[5]||(a[5]=[J("Apply",-1)])]),_:1})])):oe("",!0),V(le,{variant:"outline",onClick:Ye},{default:N(()=>[...a[6]||(a[6]=[J("Clear",-1)])]),_:1})]),i.variant==="date-time"?(c(),f("div",rt,[L("div",ot,[V(Se,{type:"text",modelValue:y.value,"onUpdate:modelValue":a[0]||(a[0]=n=>y.value=n),placeholder:"HH:mm or 4:30pm",onFocus:a[1]||(a[1]=n=>O.value=!0),onKeydown:Le(me(re,["prevent"]),["enter"]),onBlur:de,formWrapperWidth:"100%"},{right:N(()=>[V(te(fe))]),_:1},8,["modelValue","onKeydown"]),O.value?(c(),f("div",st,[(c(!0),f(Z,null,se(ke.value,n=>(c(),f("div",{key:n,class:"fu-time-option",onMousedown:me(v=>Me(n),["prevent"])},_(n),41,lt))),128))])):oe("",!0)])])):oe("",!0)],4)])):oe("",!0)]))],6))}},ye=He(Pe,[["__scopeId","data-v-41bea5ec"]]);Pe.__docgenInfo={exportName:"default",displayName:"FusionDatePicker",description:"",tags:{},props:[{name:"modelValue",type:{name:"string|object"}},{name:"variant",type:{name:"string"},defaultValue:{func:!1,value:'"date"'},values:["date","date-time","date-range"]},{name:"min",type:{name:"string"}},{name:"max",type:{name:"string"}},{name:"formWrapperWidth",type:{name:"string"}},{name:"size",type:{name:"string"},defaultValue:{func:!1,value:'"md"'},values:["sm","md","lg"]},{name:"error",type:{name:"string|null"},defaultValue:{func:!1,value:"null"}},{name:"label",type:{name:"string"},defaultValue:{func:!1,value:"null"}},{name:"required",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"disabled",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}],events:[{name:"update:modelValue"}],sourceFiles:["/Users/xavier/Documents/Websites/Skkido/Fusion-binary-ui/src/components/datePicker/dateField/FusionDatePicker.vue"]};const Yt={title:"Components/Date-and-Time/FusionDatePicker",component:ye,tags:["autodocs"],argTypes:{variant:{control:{type:"select"},options:["date","date-time","date-range"],description:"Select variant of the date picker",table:{category:"Props",defaultValue:{summary:"date"},type:{summary:"string"}}},min:{control:{type:"text"},description:"Minimum date (ISO format)",table:{category:"Props",defaultValue:{summary:"undefined"},type:{summary:"string | undefined"}}},max:{control:{type:"text"},description:"Maximum date (ISO format)",table:{category:"Props",defaultValue:{summary:"undefined"},type:{summary:"string | undefined"}}},onUpdateModelValue:{action:"update:modelValue",description:"Emitted on date selection change",table:{category:"Events",type:{summary:"(value: string | { start: string; end: string }) => void"}}},formWrapperWidth:{control:{type:"text"},description:"Width of the input wrapper (e.g. '200px')",table:{category:"Props",defaultValue:{summary:"undefined"},type:{summary:"string | undefined"}}},size:{control:{type:"select"},options:["sm","md","lg"],description:"Size of the input",table:{category:"Props",defaultValue:{summary:"md"},type:{summary:"string"}}},error:{control:{type:"text"},description:"Error message (string) or null",table:{category:"Props",defaultValue:{summary:"null"},type:{summary:"string | null"}}},required:{control:{type:"boolean"},description:"Whether the input is required",table:{category:"Props",defaultValue:{summary:!1},type:{summary:"boolean"}}},disabled:{control:{type:"boolean"},description:"Whether the input is disabled",table:{category:"Props",defaultValue:{summary:!1},type:{summary:"boolean"}}}},parameters:{docs:{description:{component:`
A flexible and accessible date picker component supporting **single date, date + time, and date ranges**.

---

### Features

- Supports three variants: \`date\`, \`date-time\`, and \`date-range\`  
- Reactive with \`v-model\` binding  
- Supports disabling, required flag, error messages, and different sizes  
- Configurable min/max date/time limits  
- Customizable input wrapper width  

---

### Example Usage

\`\`\`vue
<script setup>
import { ref } from "vue";
import FusionDatePicker from "@/components/FusionDatePicker.vue";

const singleDate = ref("2025-12-28");
const dateTime = ref("2025-12-28T14:30");
const dateRange = ref({ start: "2025-12-01", end: "2025-12-28" });
<\/script>

<template>
  <h3>Single Date Picker</h3>
  <FusionDatePicker
    v-model="singleDate"
    variant="date"
    placeholder="Select a date"
    :required="true"
    size="md"
  />

  <h3 class="mt-6">Date + Time Picker</h3>
  <FusionDatePicker
    v-model="dateTime"
    variant="date-time"
    min="2020-01-01T00:00"
    max="2030-12-31T23:59"
    size="md"
  />

  <h3 class="mt-6">Date Range Picker</h3>
  <FusionDatePicker
    v-model="dateRange"
    variant="date-range"
    min="2020-01-01"
    max="2030-12-31"
    size="md"
    formWrapperWidth="320px"
    :error="'Please select a valid range'"
  />
</template>
\`\`\`
        `}}}},ve={name:"Date",render:i=>({components:{FusionDatePicker:ye},setup(){const E=k("2025-12-28");return{args:i,model:E}},template:'<FusionDatePicker v-bind="args" v-model="model" />'}),args:{variant:"date",min:void 0,max:void 0,formWrapperWidth:void 0,size:"md",error:null,required:!1,disabled:!1}},pe={name:"Date Time",render:i=>({components:{FusionDatePicker:ye},setup(){const E=k("2025-12-28T14:30");return{args:i,model:E}},template:'<FusionDatePicker v-bind="args" v-model="model" />'}),args:{variant:"date-time",min:"2020-01-01T00:00",max:"2030-12-31T23:59",formWrapperWidth:void 0,size:"md",error:null,required:!1,disabled:!1}},he={name:"Date Range",render:i=>({components:{FusionDatePicker:ye},setup(){const E=k({start:"2025-12-01",end:"2025-12-28"});return{args:i,model:E}},template:'<FusionDatePicker v-bind="args" v-model="model" />'}),args:{variant:"date-range",min:"2020-01-01",max:"2030-12-31",formWrapperWidth:"320px",size:"md",error:null,required:!1,disabled:!1}};ve.parameters={...ve.parameters,docs:{...ve.parameters?.docs,source:{originalSource:`{
  name: "Date",
  render: args => ({
    components: {
      FusionDatePicker
    },
    setup() {
      const model = ref("2025-12-28");
      return {
        args,
        model
      };
    },
    template: \`<FusionDatePicker v-bind="args" v-model="model" />\`
  }),
  args: {
    variant: "date",
    min: undefined,
    max: undefined,
    formWrapperWidth: undefined,
    size: "md",
    error: null,
    required: false,
    disabled: false
  }
}`,...ve.parameters?.docs?.source}}};pe.parameters={...pe.parameters,docs:{...pe.parameters?.docs,source:{originalSource:`{
  name: "Date Time",
  render: args => ({
    components: {
      FusionDatePicker
    },
    setup() {
      const model = ref("2025-12-28T14:30");
      return {
        args,
        model
      };
    },
    template: \`<FusionDatePicker v-bind="args" v-model="model" />\`
  }),
  args: {
    variant: "date-time",
    min: "2020-01-01T00:00",
    max: "2030-12-31T23:59",
    formWrapperWidth: undefined,
    size: "md",
    error: null,
    required: false,
    disabled: false
  }
}`,...pe.parameters?.docs?.source}}};he.parameters={...he.parameters,docs:{...he.parameters?.docs,source:{originalSource:`{
  name: "Date Range",
  render: args => ({
    components: {
      FusionDatePicker
    },
    setup() {
      const model = ref({
        start: "2025-12-01",
        end: "2025-12-28"
      });
      return {
        args,
        model
      };
    },
    template: \`<FusionDatePicker v-bind="args" v-model="model" />\`
  }),
  args: {
    variant: "date-range",
    min: "2020-01-01",
    max: "2030-12-31",
    formWrapperWidth: "320px",
    size: "md",
    error: null,
    required: false,
    disabled: false
  }
}`,...he.parameters?.docs?.source}}};const kt=["Date","DateTime","DateRange"];export{ve as Date,he as DateRange,pe as DateTime,kt as __namedExportsOrder,Yt as default};
