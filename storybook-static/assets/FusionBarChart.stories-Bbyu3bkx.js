import{q as W,r as I,c as k,b as r,m,t as f,d as g,F as h,g as p,i as C,p as w,o as s,e as U}from"./iframe-DLJy-DHW.js";import{_ as j}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./preload-helper-Ct5FWWRu.js";const K={key:2,class:"fu-bars__v"},Q={class:"fu-bars__plotwrap"},R={key:0,class:"fu-bars__grid","aria-hidden":"true"},X=["title","onMouseenter","onClick"],Y={key:0,class:"fu-bars__val"},Z={class:"fu-bars__xaxis"},ee={key:3,class:"fu-bars__h"},ae={class:"fu-bars__hlabel"},ne={class:"fu-bars__htrack"},re=["title","onMouseenter","onClick"],se={key:0,class:"fu-bars__hval"},te={key:4,class:"fu-bars__legend"},J=W({__name:"FusionBarChart",props:{categories:{},series:{},orientation:{default:"vertical"},stacked:{type:Boolean,default:!1},height:{default:240},max:{},showValues:{type:Boolean,default:!1},showGrid:{type:Boolean,default:!0},legend:{type:Boolean,default:!0},formatValue:{},loading:{type:Boolean,default:!1},emptyText:{default:"No data"}},emits:["select"],setup(e,{emit:O}){const q=["var(--fu-brand-primary-base, #2a0808)","#3a8be0","var(--fu-color-success, #6c9a2e)","var(--fu-color-warning, #f0a135)","var(--fu-color-danger, #c2417a)"],i=e,A=O,d=I(null),b=t=>i.formatValue?i.formatValue(t):String(Math.round(t*100)/100),H=k(()=>i.series.map((t,o)=>({...t,color:t.color??q[o%q.length]}))),E=k(()=>i.stacked?Math.max(0,...i.categories.map((t,o)=>i.series.reduce((a,u)=>a+(u.values[o]||0),0))):Math.max(0,...i.series.flatMap(t=>t.values))),P=k(()=>{if(i.max!==void 0)return i.max;const t=E.value||1,o=Math.pow(10,Math.floor(Math.log10(t)));return([1,2,2.5,5,10].find(u=>u*o>=t)??10)*o}),D=k(()=>[0,1,2,3,4].map(t=>P.value/4*t)),G=k(()=>E.value>0),N=t=>`${Math.min(100,t/P.value*100)}%`;function V(t){return H.value.map(o=>({name:o.name,color:o.color,value:o.values[t]||0}))}return(t,o)=>(s(),r("figure",{class:w(["fu-bars",`fu-bars--${e.orientation}`])},[e.loading?(s(),r("div",{key:0,class:"fu-bars__loading",style:m({height:`${e.height}px`})},null,4)):G.value?e.orientation==="vertical"?(s(),r("div",K,[g("div",{class:"fu-bars__yaxis",style:m({height:`${e.height}px`})},[(s(!0),r(h,null,p([...D.value].reverse(),a=>(s(),r("span",{key:a},f(b(a)),1))),128))],4),g("div",Q,[g("div",{class:"fu-bars__plot",style:m({height:`${e.height}px`})},[e.showGrid?(s(),r("div",R,[(s(!0),r(h,null,p(D.value,a=>(s(),r("span",{key:a,style:m({bottom:N(a)})},null,4))),128))])):C("",!0),(s(!0),r(h,null,p(e.categories,(a,u)=>(s(),r("div",{key:a,class:w(["fu-bars__group",{"is-stacked":e.stacked}])},[(s(!0),r(h,null,p(V(u),n=>(s(),r("div",{key:n.name,class:w(["fu-bars__bar",{"is-dim":d.value&&d.value!==`${a}|${n.name}`}]),style:m({height:N(n.value),background:n.color}),title:`${a} · ${n.name}: ${b(n.value)}`,tabindex:"0",onMouseenter:v=>d.value=`${a}|${n.name}`,onMouseleave:o[0]||(o[0]=v=>d.value=null),onClick:v=>A("select",{category:a,series:n.name,value:n.value})},[e.showValues&&n.value&&!e.stacked?(s(),r("span",Y,f(b(n.value)),1)):C("",!0)],46,X))),128))],2))),128))],4),g("div",Z,[(s(!0),r(h,null,p(e.categories,a=>(s(),r("span",{key:a},f(a),1))),128))])])])):(s(),r("div",ee,[(s(!0),r(h,null,p(e.categories,(a,u)=>(s(),r("div",{key:a,class:"fu-bars__hrow"},[g("span",ae,f(a),1),g("div",ne,[g("div",{class:w(["fu-bars__hgroup",{"is-stacked":e.stacked}])},[(s(!0),r(h,null,p(V(u),n=>(s(),r("div",{key:n.name,class:w(["fu-bars__hbar",{"is-dim":d.value&&d.value!==`${a}|${n.name}`}]),style:m({width:N(n.value),background:n.color}),title:`${a} · ${n.name}: ${b(n.value)}`,tabindex:"0",onMouseenter:v=>d.value=`${a}|${n.name}`,onMouseleave:o[1]||(o[1]=v=>d.value=null),onClick:v=>A("select",{category:a,series:n.name,value:n.value})},null,46,re))),128))],2)]),e.showValues?(s(),r("span",se,f(b(e.stacked?V(u).reduce((n,v)=>n+v.value,0):Math.max(...V(u).map(n=>n.value)))),1)):C("",!0)]))),128))])):(s(),r("p",{key:1,class:"fu-bars__empty",style:m({minHeight:`${e.height}px`})},f(e.emptyText),5)),e.legend&&e.series.length>1&&G.value&&!e.loading?(s(),r("figcaption",te,[(s(!0),r(h,null,p(H.value,a=>(s(),r("span",{key:a.name},[g("i",{style:m({background:a.color})},null,4),U(f(a.name),1)]))),128))])):C("",!0)],2))}}),l=j(J,[["__scopeId","data-v-a965cbc7"]]);J.__docgenInfo={exportName:"default",displayName:"FusionBarChart",description:"",tags:{},props:[{name:"categories",required:!0,type:{name:"Array",elements:[{name:"string"}]}},{name:"series",required:!0,type:{name:"Array",elements:[{name:"BarSeries"}]}},{name:"orientation",required:!1,type:{name:"union",elements:[{name:'"vertical"'},{name:'"horizontal"'}]},defaultValue:{func:!1,value:'"vertical"'}},{name:"stacked",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"height",description:"Plot height in px (vertical only).",required:!1,type:{name:"number"},defaultValue:{func:!1,value:"240"}},{name:"max",description:"Top of the scale. By default it rounds the biggest value up to a tidy number.",required:!1,type:{name:"number"}},{name:"showValues",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"showGrid",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"true"}},{name:"legend",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"true"}},{name:"formatValue",required:!1,type:{name:"TSFunctionType"}},{name:"loading",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"emptyText",required:!1,type:{name:"string"},defaultValue:{func:!1,value:'"No data"'}}],events:[{name:"select",type:{names:["{ category: string; series: string; value: number }"]}}],sourceFiles:["/Users/xavier/Documents/Websites/Skkido/Fusion-binary-ui/src/components/charts/FusionBarChart.vue"]};const ue={title:"Fusion/Data Display/FusionBarChart",component:l,tags:["autodocs"],parameters:{layout:"padded",docs:{description:{component:"\nBars for one or several series. Vertical or horizontal, side by side or stacked.\n\n- `categories`: the labels along the axis. `series`: `{ name, values, color? }`, where `values` lines up with the categories.\n- `orientation`: `vertical` or `horizontal`. `stacked` stacks the series instead of putting them side by side.\n- The scale rounds up to a tidy number by itself. Set `max` to fix it.\n- `showValues` writes the number on each bar. `showGrid` draws the dashed grid. `legend` shows when there is more than one series.\n- `formatValue` formats numbers. Hover a bar to highlight it. Click emits `select`.\n- `loading` and an empty state are built in.\n\n```vue\n<FusionBarChart :categories=\"['Jun','Jul','Aug']\" :series=\"[{ name: 'Logged', values: [32, 41, 38] }]\" />\n```\n"}}},argTypes:{orientation:{control:"radio",options:["vertical","horizontal"]},stacked:{control:"boolean"},showValues:{control:"boolean"},showGrid:{control:"boolean"},height:{control:{type:"range",min:120,max:400,step:10}},loading:{control:"boolean"}}},y=["Jun","Jul","Aug","Sep","Oct","Nov"],c=e=>`<div style="max-width:640px">${e}</div>`,B=e=>`${e} h`,F={name:"Hours logged per month",args:{categories:y,series:[{name:"Logged",values:[32,41,38,52,47,29]}],formatValue:B},render:e=>({components:{FusionBarChart:l},setup:()=>({args:e}),template:c('<FusionBarChart v-bind="args" />')})},x={name:"Estimate against logged",args:{categories:["Brand","Website","Admin","Launch"],series:[{name:"Estimated",values:[30,96,12,6],color:"#c9c9c9"},{name:"Logged",values:[18.5,58,7.5,0]}],showValues:!0,formatValue:B},render:e=>({components:{FusionBarChart:l},setup:()=>({args:e}),template:c('<FusionBarChart v-bind="args" />')})},_={name:"Stacked: billable and not",args:{categories:y,series:[{name:"Billable",values:[24,33,30,40,38,22],color:"var(--fu-color-success, #6c9a2e)"},{name:"Not billable",values:[8,8,8,12,9,7],color:"#c9c9c9"}],stacked:!0,formatValue:B},render:e=>({components:{FusionBarChart:l},setup:()=>({args:e}),template:c('<FusionBarChart v-bind="args" />')})},$={name:"Workload by person (horizontal)",args:{orientation:"horizontal",categories:["Amara Okafor","Jonas Lind","Lee Park","Priya Nair"],series:[{name:"Hours this week",values:[34,29,38,21]}],showValues:!0,formatValue:B},render:e=>({components:{FusionBarChart:l},setup:()=>({args:e}),template:c('<FusionBarChart v-bind="args" />')})},L={name:"Horizontal and stacked",args:{orientation:"horizontal",stacked:!0,categories:["Amara Okafor","Jonas Lind","Lee Park","Priya Nair"],series:[{name:"Design",values:[20,12,30,5]},{name:"Build",values:[8,14,4,12]},{name:"Admin",values:[6,3,4,4],color:"var(--fu-color-warning, #f0a135)"}],showValues:!0,formatValue:B},render:e=>({components:{FusionBarChart:l},setup:()=>({args:e}),template:c('<FusionBarChart v-bind="args" />')})},S={name:"Money, with values",args:{categories:y,series:[{name:"Invoiced",values:[4200,5100,3800,6400,5900,2700],color:"#3a8be0"}],showValues:!0,formatValue:e=>`£${(e/1e3).toFixed(1)}k`},render:e=>({components:{FusionBarChart:l},setup:()=>({args:e}),template:c('<FusionBarChart v-bind="args" />')})},M={name:"Taller, no grid",args:{categories:y,series:[{name:"Logged",values:[32,41,38,52,47,29]}],height:340,showGrid:!1},render:e=>({components:{FusionBarChart:l},setup:()=>({args:e}),template:c('<FusionBarChart v-bind="args" />')})},z={args:{categories:y,series:[{name:"Logged",values:[]}],loading:!0},render:e=>({components:{FusionBarChart:l},setup:()=>({args:e}),template:c('<FusionBarChart v-bind="args" />')})},T={args:{categories:y,series:[{name:"Logged",values:[0,0,0,0,0,0]}],emptyText:"No time logged yet"},render:e=>({components:{FusionBarChart:l},setup:()=>({args:e}),template:c('<FusionBarChart v-bind="args" />')})};F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  name: "Hours logged per month",
  args: {
    categories: months,
    series: [{
      name: "Logged",
      values: [32, 41, 38, 52, 47, 29]
    }],
    formatValue: hours
  },
  render: args => ({
    components: {
      FusionBarChart
    },
    setup: () => ({
      args
    }),
    template: wrap(\`<FusionBarChart v-bind="args" />\`)
  })
}`,...F.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  name: "Estimate against logged",
  args: {
    categories: ["Brand", "Website", "Admin", "Launch"],
    series: [{
      name: "Estimated",
      values: [30, 96, 12, 6],
      color: "#c9c9c9"
    }, {
      name: "Logged",
      values: [18.5, 58, 7.5, 0]
    }],
    showValues: true,
    formatValue: hours
  },
  render: args => ({
    components: {
      FusionBarChart
    },
    setup: () => ({
      args
    }),
    template: wrap(\`<FusionBarChart v-bind="args" />\`)
  })
}`,...x.parameters?.docs?.source}}};_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  name: "Stacked: billable and not",
  args: {
    categories: months,
    series: [{
      name: "Billable",
      values: [24, 33, 30, 40, 38, 22],
      color: "var(--fu-color-success, #6c9a2e)"
    }, {
      name: "Not billable",
      values: [8, 8, 8, 12, 9, 7],
      color: "#c9c9c9"
    }],
    stacked: true,
    formatValue: hours
  },
  render: args => ({
    components: {
      FusionBarChart
    },
    setup: () => ({
      args
    }),
    template: wrap(\`<FusionBarChart v-bind="args" />\`)
  })
}`,..._.parameters?.docs?.source}}};$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`{
  name: "Workload by person (horizontal)",
  args: {
    orientation: "horizontal",
    categories: ["Amara Okafor", "Jonas Lind", "Lee Park", "Priya Nair"],
    series: [{
      name: "Hours this week",
      values: [34, 29, 38, 21]
    }],
    showValues: true,
    formatValue: hours
  },
  render: args => ({
    components: {
      FusionBarChart
    },
    setup: () => ({
      args
    }),
    template: wrap(\`<FusionBarChart v-bind="args" />\`)
  })
}`,...$.parameters?.docs?.source}}};L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  name: "Horizontal and stacked",
  args: {
    orientation: "horizontal",
    stacked: true,
    categories: ["Amara Okafor", "Jonas Lind", "Lee Park", "Priya Nair"],
    series: [{
      name: "Design",
      values: [20, 12, 30, 5]
    }, {
      name: "Build",
      values: [8, 14, 4, 12]
    }, {
      name: "Admin",
      values: [6, 3, 4, 4],
      color: "var(--fu-color-warning, #f0a135)"
    }],
    showValues: true,
    formatValue: hours
  },
  render: args => ({
    components: {
      FusionBarChart
    },
    setup: () => ({
      args
    }),
    template: wrap(\`<FusionBarChart v-bind="args" />\`)
  })
}`,...L.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  name: "Money, with values",
  args: {
    categories: months,
    series: [{
      name: "Invoiced",
      values: [4200, 5100, 3800, 6400, 5900, 2700],
      color: "#3a8be0"
    }],
    showValues: true,
    formatValue: (n: number) => \`£\${(n / 1000).toFixed(1)}k\`
  },
  render: args => ({
    components: {
      FusionBarChart
    },
    setup: () => ({
      args
    }),
    template: wrap(\`<FusionBarChart v-bind="args" />\`)
  })
}`,...S.parameters?.docs?.source}}};M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  name: "Taller, no grid",
  args: {
    categories: months,
    series: [{
      name: "Logged",
      values: [32, 41, 38, 52, 47, 29]
    }],
    height: 340,
    showGrid: false
  },
  render: args => ({
    components: {
      FusionBarChart
    },
    setup: () => ({
      args
    }),
    template: wrap(\`<FusionBarChart v-bind="args" />\`)
  })
}`,...M.parameters?.docs?.source}}};z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  args: {
    categories: months,
    series: [{
      name: "Logged",
      values: []
    }],
    loading: true
  },
  render: args => ({
    components: {
      FusionBarChart
    },
    setup: () => ({
      args
    }),
    template: wrap(\`<FusionBarChart v-bind="args" />\`)
  })
}`,...z.parameters?.docs?.source}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  args: {
    categories: months,
    series: [{
      name: "Logged",
      values: [0, 0, 0, 0, 0, 0]
    }],
    emptyText: "No time logged yet"
  },
  render: args => ({
    components: {
      FusionBarChart
    },
    setup: () => ({
      args
    }),
    template: wrap(\`<FusionBarChart v-bind="args" />\`)
  })
}`,...T.parameters?.docs?.source}}};const ce=["Default","Grouped","Stacked","Horizontal","HorizontalStacked","Money","Tall","Loading","Empty"];export{F as Default,T as Empty,x as Grouped,$ as Horizontal,L as HorizontalStacked,z as Loading,S as Money,_ as Stacked,M as Tall,ce as __namedExportsOrder,ue as default};
