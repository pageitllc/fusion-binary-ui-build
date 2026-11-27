import{q as G,r as O,c as v,b as o,d as c,F as P,g as N,i as F,B as U,t as i,m as C,p as $,o as r}from"./iframe-DLJy-DHW.js";import{_ as W}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./preload-helper-Ct5FWWRu.js";const Y=["width","height","viewBox","aria-label"],H=["cx","cy","r","stroke-width"],Q=["transform"],R=["cx","cy","r","stroke","stroke-width","stroke-dasharray","stroke-dashoffset","onMouseenter"],j={class:"fu-donut__center"},J={class:"fu-donut__value"},K={key:0,class:"fu-donut__caption"},X={key:1,class:"fu-donut__caption"},Z={key:0,class:"fu-donut__legend"},ee=["onMouseenter"],ne={class:"fu-donut__name"},te={class:"fu-donut__num"},ae=2,q=G({__name:"FusionDonut",props:{segments:{},size:{default:160},thickness:{default:18},centerValue:{},centerLabel:{},legend:{default:"right"},showPercent:{type:Boolean,default:!1},formatValue:{},emptyText:{default:"No data"}},emits:["hover"],setup(e,{emit:E}){const T=["var(--fu-brand-primary-base, #2a0808)","#3a8be0","var(--fu-color-success, #6c9a2e)","var(--fu-color-warning, #f0a135)","var(--fu-color-danger, #c2417a)","var(--fu-color-surface-gray-5, #9aa0a6)"],l=e,I=E,d=O(null),u=v(()=>l.segments.reduce((n,s)=>n+Math.max(0,s.value),0)),S=v(()=>(l.size-l.thickness)/2),V=v(()=>2*Math.PI*S.value),B=v(()=>{let n=0;return l.segments.map((s,t)=>{const a=u.value>0?Math.max(0,s.value)/u.value:0,m=Math.max(0,a*V.value-(l.segments.length>1&&a>0?ae:0)),A={...s,color:s.color??T[t%T.length],share:a,dash:`${m} ${V.value-m}`,offset:-n};return n+=a*V.value,A})}),f=n=>l.formatValue?l.formatValue(n):String(n),_=n=>`${Math.round(n*100)}%`;function p(n){d.value=n,I("hover",n===null?null:l.segments[n])}return(n,s)=>(r(),o("figure",{class:$(["fu-donut",`fu-donut--${e.legend}`])},[c("div",{class:"fu-donut__ring",style:C({width:`${e.size}px`,height:`${e.size}px`})},[(r(),o("svg",{width:e.size,height:e.size,viewBox:`0 0 ${e.size} ${e.size}`,role:"img","aria-label":`Chart, total ${f(u.value)}`},[c("circle",{class:"fu-donut__track",cx:e.size/2,cy:e.size/2,r:S.value,fill:"none","stroke-width":e.thickness},null,8,H),u.value>0?(r(),o("g",{key:0,transform:`rotate(-90 ${e.size/2} ${e.size/2})`},[(r(!0),o(P,null,N(B.value,(t,a)=>(r(),o("circle",{key:t.label,class:$(["fu-donut__arc",{"is-dim":d.value!==null&&d.value!==a}]),cx:e.size/2,cy:e.size/2,r:S.value,fill:"none",stroke:t.color,"stroke-width":d.value===a?e.thickness+3:e.thickness,"stroke-dasharray":t.dash,"stroke-dashoffset":t.offset,onMouseenter:m=>p(a),onMouseleave:s[0]||(s[0]=m=>p(null))},[c("title",null,i(t.label)+": "+i(f(t.value))+" ("+i(_(t.share))+")",1)],42,R))),128))],8,Q)):F("",!0)],8,Y)),c("div",j,[u.value>0?U(n.$slots,"center",{key:0,total:u.value},()=>[c("b",J,i(e.centerValue??f(u.value)),1),e.centerLabel?(r(),o("span",K,i(e.centerLabel),1)):F("",!0)],!0):(r(),o("span",X,i(e.emptyText),1))])],4),e.legend!=="none"&&u.value>0?(r(),o("figcaption",Z,[(r(!0),o(P,null,N(B.value,(t,a)=>(r(),o("div",{key:t.label,class:$(["fu-donut__item",{"is-active":d.value===a}]),onMouseenter:m=>p(a),onMouseleave:s[1]||(s[1]=m=>p(null))},[c("span",{class:"fu-donut__dot",style:C({background:t.color})},null,4),c("span",ne,i(t.label),1),c("b",te,i(e.showPercent?_(t.share):f(t.value)),1)],42,ee))),128))])):F("",!0)],2))}}),M=W(q,[["__scopeId","data-v-abd81bb3"]]);q.__docgenInfo={exportName:"default",displayName:"FusionDonut",description:"",tags:{},props:[{name:"segments",required:!0,type:{name:"Array",elements:[{name:"DonutSegment"}]}},{name:"size",description:"Diameter in px.",required:!1,type:{name:"number"},defaultValue:{func:!1,value:"160"}},{name:"thickness",description:"Ring thickness in px.",required:!1,type:{name:"number"},defaultValue:{func:!1,value:"18"}},{name:"centerValue",required:!1,type:{name:"union",elements:[{name:"string"},{name:"number"}]}},{name:"centerLabel",required:!1,type:{name:"string"}},{name:"legend",required:!1,type:{name:"union",elements:[{name:'"right"'},{name:'"bottom"'},{name:'"none"'}]},defaultValue:{func:!1,value:'"right"'}},{name:"showPercent",description:"Show each value as a percentage in the legend.",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"formatValue",required:!1,type:{name:"TSFunctionType"}},{name:"emptyText",required:!1,type:{name:"string"},defaultValue:{func:!1,value:'"No data"'}}],events:[{name:"hover",type:{names:["union"],elements:[{name:"DonutSegment"},{name:"null"}]}}],slots:[{name:"center",scoped:!0,bindings:[{name:"total",title:"binding"}]}],sourceFiles:["/Users/xavier/Documents/Websites/Skkido/Fusion-binary-ui/src/components/charts/FusionDonut.vue"]};const le={title:"Fusion/Data Display/FusionDonut",component:M,tags:["autodocs"],parameters:{layout:"padded",docs:{description:{component:"\nParts of a whole as a ring, with a number in the middle and a legend. Hover a slice or a legend row to highlight it.\n\n- `segments`: `{ label, value, color? }`. Colours default to the library palette.\n- `centerValue` / `centerLabel`: what shows in the middle. Defaults to the total. The `center` slot replaces it.\n- `legend`: `right`, `bottom` or `none`. `showPercent` shows percentages instead of values.\n- `size` and `thickness` are in px. `formatValue` formats numbers (money, hours).\n- Emits `hover` with the segment, or null.\n\n```vue\n<FusionDonut :segments=\"[{ label: 'Done', value: 12 }, { label: 'In progress', value: 8 }]\" centerLabel=\"tasks\" />\n```\n"}}},argTypes:{size:{control:{type:"range",min:100,max:280,step:10}},thickness:{control:{type:"range",min:6,max:40}},legend:{control:"radio",options:["right","bottom","none"]},showPercent:{control:"boolean"}}},g=[{label:"Done",value:12,color:"var(--fu-color-success, #6c9a2e)"},{label:"Working on it",value:8,color:"#3a8be0"},{label:"Internal QC",value:4,color:"#a975d8"},{label:"Client feedback",value:3,color:"var(--fu-color-danger, #c2417a)"},{label:"Backlog",value:9,color:"#c9c9c9"}],h={name:"Tasks by status",args:{segments:g,centerLabel:"tasks"}},b={name:"Money, formatted",args:{segments:[{label:"Paid",value:7600},{label:"Invoiced",value:3400},{label:"Not yet invoiced",value:2200}],centerLabel:"total value",formatValue:e=>`£${e.toLocaleString("en-GB")}`}},y={name:"Legend below, percentages",args:{segments:g,legend:"bottom",showPercent:!0,centerLabel:"tasks"},render:e=>({components:{FusionDonut:M},setup:()=>({args:e}),template:'<div style="max-width:320px"><FusionDonut v-bind="args" /></div>'})},k={args:{segments:g,legend:"none",size:120,thickness:14,centerLabel:"tasks"}},x={args:{segments:g.slice(0,3),size:200,thickness:40,centerLabel:"tasks"}},w={name:"A budget: used and left",args:{segments:[{label:"Used",value:62,color:"var(--fu-brand-primary-base, #2a0808)"},{label:"Left",value:28,color:"#e4e4e6"}],centerValue:"69%",centerLabel:"of 90 h",formatValue:e=>`${e} h`}},L={name:"Your own centre",args:{segments:g},render:e=>({components:{FusionDonut:M},setup:()=>({args:e}),template:`
<FusionDonut v-bind="args">
  <template #center="{ total }">
    <b style="font-size:30px">{{ Math.round((12 / total) * 100) }}%</b>
    <span style="font-size:12px;opacity:.7">complete</span>
  </template>
</FusionDonut>`})},D={args:{segments:[],emptyText:"No tasks yet"}},z={args:{segments:[{label:"Done",value:5}],centerLabel:"tasks"}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  name: "Tasks by status",
  args: {
    segments: tasks,
    centerLabel: "tasks"
  }
}`,...h.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  name: "Money, formatted",
  args: {
    segments: [{
      label: "Paid",
      value: 7600
    }, {
      label: "Invoiced",
      value: 3400
    }, {
      label: "Not yet invoiced",
      value: 2200
    }],
    centerLabel: "total value",
    formatValue: (n: number) => \`£\${n.toLocaleString("en-GB")}\`
  }
}`,...b.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  name: "Legend below, percentages",
  args: {
    segments: tasks,
    legend: "bottom",
    showPercent: true,
    centerLabel: "tasks"
  },
  render: args => ({
    components: {
      FusionDonut
    },
    setup: () => ({
      args
    }),
    template: \`<div style="max-width:320px"><FusionDonut v-bind="args" /></div>\`
  })
}`,...y.parameters?.docs?.source}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  args: {
    segments: tasks,
    legend: "none",
    size: 120,
    thickness: 14,
    centerLabel: "tasks"
  }
}`,...k.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    segments: tasks.slice(0, 3),
    size: 200,
    thickness: 40,
    centerLabel: "tasks"
  }
}`,...x.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  name: "A budget: used and left",
  args: {
    segments: [{
      label: "Used",
      value: 62,
      color: "var(--fu-brand-primary-base, #2a0808)"
    }, {
      label: "Left",
      value: 28,
      color: "#e4e4e6"
    }],
    centerValue: "69%",
    centerLabel: "of 90 h",
    formatValue: (n: number) => \`\${n} h\`
  }
}`,...w.parameters?.docs?.source}}};L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  name: "Your own centre",
  args: {
    segments: tasks
  },
  render: args => ({
    components: {
      FusionDonut
    },
    setup: () => ({
      args
    }),
    template: \`
<FusionDonut v-bind="args">
  <template #center="{ total }">
    <b style="font-size:30px">{{ Math.round((12 / total) * 100) }}%</b>
    <span style="font-size:12px;opacity:.7">complete</span>
  </template>
</FusionDonut>\`
  })
}`,...L.parameters?.docs?.source}}};D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  args: {
    segments: [],
    emptyText: "No tasks yet"
  }
}`,...D.parameters?.docs?.source}}};z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  args: {
    segments: [{
      label: "Done",
      value: 5
    }],
    centerLabel: "tasks"
  }
}`,...z.parameters?.docs?.source}}};const ue=["Default","Money","LegendBelow","NoLegend","Thick","Budget","CustomCenter","Empty","OneSlice"];export{w as Budget,L as CustomCenter,h as Default,D as Empty,y as LegendBelow,b as Money,k as NoLegend,z as OneSlice,x as Thick,ue as __namedExportsOrder,le as default};
