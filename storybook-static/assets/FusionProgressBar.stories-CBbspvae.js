import{q as _,c as i,b as s,d as m,t as d,i as P,F as k,g as S,m as w,p as g,o as t,e as q,r as A}from"./iframe-Bit2fKoK.js";import{_ as N}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./preload-helper-Ct5FWWRu.js";const $={key:0,class:"fu-progress__head"},R={class:"fu-progress__label"},M={key:0,class:"fu-progress__value"},W=["aria-valuenow","aria-label"],C=["title"],I={key:1,class:"fu-progress__legend"},V=_({__name:"FusionProgressBar",props:{value:{default:0},max:{default:100},segments:{},label:{},valueText:{},showValue:{type:Boolean,default:!0},size:{default:"md"},tone:{default:"default"},warnAt:{default:80},dangerAt:{default:100},legend:{type:Boolean,default:!0},indeterminate:{type:Boolean}},setup(e){const n=e,B=i(()=>{const r=n.segments?.length?n.segments.reduce((a,F)=>a+F.value,0):n.max,u=n.segments?.length?r:n.value;return r>0?Math.min(100,Math.max(0,u/n.max*100)):0}),z=i(()=>{if(n.tone!=="auto")return n.tone;const r=n.max>0?n.value/n.max*100:0;return r>=n.dangerAt?"danger":r>=n.warnAt?"warning":"default"}),D=i(()=>n.valueText??`${Math.round(B.value)}%`),T=i(()=>{const r=n.segments??[],u=r.reduce((a,F)=>a+F.value,0)||1;return r.map(a=>({...a,width:`${a.value/u*100}%`}))});return(r,u)=>(t(),s("div",{class:g(["fu-progress",[`fu-progress--${e.size}`]])},[e.label||e.showValue?(t(),s("div",$,[m("span",R,d(e.label),1),e.showValue&&!e.indeterminate&&!e.segments?.length?(t(),s("span",M,d(D.value),1)):P("",!0)])):P("",!0),m("div",{class:"fu-progress__track",role:"progressbar","aria-valuenow":e.indeterminate?void 0:Math.round(B.value),"aria-valuemin":"0","aria-valuemax":"100","aria-label":e.label||"Progress"},[e.segments?.length?(t(!0),s(k,{key:0},S(T.value,a=>(t(),s("span",{key:a.label||a.value,class:g(["fu-progress__seg",`is-${a.tone||"default"}`]),style:w({width:a.width,background:a.color}),title:a.label?`${a.label}: ${a.value}`:void 0},null,14,C))),128)):(t(),s("span",{key:1,class:g(["fu-progress__fill",[`is-${z.value}`,{"is-indeterminate":e.indeterminate}]]),style:w(e.indeterminate?void 0:{width:`${B.value}%`})},null,6))],8,W),e.segments?.length&&e.legend?(t(),s("ul",I,[(t(!0),s(k,null,S(T.value,a=>(t(),s("li",{key:a.label||a.value},[m("span",{class:g(["fu-progress__dot",`is-${a.tone||"default"}`]),style:w({background:a.color})},null,6),q(" "+d(a.label)+" ",1),m("b",null,d(a.value),1)]))),128))])):P("",!0)],2))}}),o=N(V,[["__scopeId","data-v-6f6e1909"]]);V.__docgenInfo={exportName:"default",displayName:"FusionProgressBar",description:"",tags:{},props:[{name:"value",description:"Current amount. Use with `max`.",required:!1,type:{name:"number"},defaultValue:{func:!1,value:"0"}},{name:"max",required:!1,type:{name:"number"},defaultValue:{func:!1,value:"100"}},{name:"segments",description:"Several parts of one whole instead of a single value.",required:!1,type:{name:"Array",elements:[{name:"ProgressSegment"}]}},{name:"label",required:!1,type:{name:"string"}},{name:"valueText",description:'Text on the right, for example "14.5 of 20 h". Defaults to the percentage.',required:!1,type:{name:"string"}},{name:"showValue",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"true"}},{name:"size",required:!1,type:{name:"union",elements:[{name:'"sm"'},{name:'"md"'},{name:'"lg"'}]},defaultValue:{func:!1,value:'"md"'}},{name:"tone",description:"default: one colour. auto: grows amber at warnAt and red at dangerAt.",required:!1,type:{name:"union",elements:[{name:'"default"'},{name:'"success"'},{name:'"warning"'},{name:'"danger"'},{name:'"auto"'}]},defaultValue:{func:!1,value:'"default"'}},{name:"warnAt",required:!1,type:{name:"number"},defaultValue:{func:!1,value:"80"}},{name:"dangerAt",required:!1,type:{name:"number"},defaultValue:{func:!1,value:"100"}},{name:"legend",description:"Show a legend under a segmented bar.",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"true"}},{name:"indeterminate",required:!1,type:{name:"boolean"}}],sourceFiles:["/Users/xavier/Documents/Websites/Skkido/Fusion-binary-ui/src/components/progressBar/FusionProgressBar.vue"]};const U={title:"Fusion/Data Display/FusionProgressBar",component:o,tags:["autodocs"],parameters:{layout:"padded",docs:{description:{component:'\nA plain bar for progress, budget and retainer use.\n\n- `value` and `max`: a single bar.\n- `tone="auto"`: the bar turns amber at `warnAt` (default 80%) and red at `dangerAt` (default 100%). This is what the retainer uses ("Alerts at 80% and 100%").\n- `segments`: several parts of one whole (Done, In progress, To do) with a legend.\n- `valueText`: the text on the right, for example "14.5 of 20 h". By default it shows the percentage.\n- `size`: `sm`, `md`, `lg`. `indeterminate` for unknown progress.\n\n```vue\n<FusionProgressBar label="Retainer: November" :value="14.5" :max="20" tone="auto" valueText="14.5 of 20 h" />\n<FusionProgressBar :segments="[{ value: 12, label: \'Done\', tone: \'success\' }, { value: 8, label: \'In progress\', tone: \'info\' }, { value: 5, label: \'To do\', tone: \'muted\' }]" />\n```\n'}}},argTypes:{value:{control:{type:"range",min:0,max:120}},max:{control:"number"},size:{control:"radio",options:["sm","md","lg"]},tone:{control:"select",options:["default","success","warning","danger","auto"]},showValue:{control:"boolean"},indeterminate:{control:"boolean"}}},l=e=>`<div style="max-width:460px">${e}</div>`,c={args:{label:"Project progress",value:52,max:100},render:e=>({components:{FusionProgressBar:o},setup:()=>({args:e}),template:l('<FusionProgressBar v-bind="args" />')})},p={name:"Retainer with alerts at 80% and 100%",render:()=>({components:{FusionProgressBar:o},setup:()=>({}),template:l(`
<div style="display:flex;flex-direction:column;gap:20px">
  <FusionProgressBar label="Retainer: November" :value="14.5" :max="20" tone="auto" valueText="14.5 of 20 h" />
  <FusionProgressBar label="Support hours" :value="17" :max="20" tone="auto" valueText="17 of 20 h" />
  <FusionProgressBar label="Website rebuild" :value="38" :max="36" tone="auto" valueText="38 of 36 h, over" />
</div>`)})},v={name:"Segments: tasks by status",render:()=>({components:{FusionProgressBar:o},setup:()=>({segments:[{value:12,label:"Done",tone:"success"},{value:8,label:"Working on it",tone:"info"},{value:3,label:"Client feedback",tone:"danger"},{value:9,label:"Backlog",tone:"muted"}]}),template:l('<FusionProgressBar label="32 tasks" :segments="segments" :max="32" size="lg" />')})},f={render:()=>({components:{FusionProgressBar:o},template:l(`
<div style="display:flex;flex-direction:column;gap:16px">
  <FusionProgressBar size="sm" label="Small" :value="30" />
  <FusionProgressBar size="md" label="Medium" :value="55" />
  <FusionProgressBar size="lg" label="Large" :value="80" />
</div>`)})},b={render:()=>({components:{FusionProgressBar:o},template:l(`
<div style="display:flex;flex-direction:column;gap:16px">
  <FusionProgressBar label="Default" :value="60" />
  <FusionProgressBar label="Success" :value="100" tone="success" />
  <FusionProgressBar label="Warning" :value="85" tone="warning" />
  <FusionProgressBar label="Danger" :value="95" tone="danger" />
</div>`)})},x={args:{label:"Pulling frames from Figma",indeterminate:!0},render:e=>({components:{FusionProgressBar:o},setup:()=>({args:e}),template:l('<FusionProgressBar v-bind="args" />')})},h={name:"Bar only, no label or number",args:{value:40,showValue:!1},render:e=>({components:{FusionProgressBar:o},setup:()=>({args:e}),template:l('<FusionProgressBar v-bind="args" />')})},y={name:"Moving (try the slider)",render:()=>({components:{FusionProgressBar:o},setup(){return{logged:A(14.5)}},template:l(`
<div>
  <input type="range" min="0" max="26" step="0.5" v-model.number="logged" style="width:100%;margin-bottom:12px" />
  <FusionProgressBar label="Retainer: November" :value="logged" :max="20" tone="auto" :valueText="logged + ' of 20 h'" />
</div>`)})};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Project progress",
    value: 52,
    max: 100
  },
  render: args => ({
    components: {
      FusionProgressBar
    },
    setup: () => ({
      args
    }),
    template: narrow(\`<FusionProgressBar v-bind="args" />\`)
  })
}`,...c.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  name: "Retainer with alerts at 80% and 100%",
  render: () => ({
    components: {
      FusionProgressBar
    },
    setup: () => ({}),
    template: narrow(\`
<div style="display:flex;flex-direction:column;gap:20px">
  <FusionProgressBar label="Retainer: November" :value="14.5" :max="20" tone="auto" valueText="14.5 of 20 h" />
  <FusionProgressBar label="Support hours" :value="17" :max="20" tone="auto" valueText="17 of 20 h" />
  <FusionProgressBar label="Website rebuild" :value="38" :max="36" tone="auto" valueText="38 of 36 h, over" />
</div>\`)
  })
}`,...p.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  name: "Segments: tasks by status",
  render: () => ({
    components: {
      FusionProgressBar
    },
    setup: () => ({
      segments: [{
        value: 12,
        label: "Done",
        tone: "success"
      }, {
        value: 8,
        label: "Working on it",
        tone: "info"
      }, {
        value: 3,
        label: "Client feedback",
        tone: "danger"
      }, {
        value: 9,
        label: "Backlog",
        tone: "muted"
      }]
    }),
    template: narrow(\`<FusionProgressBar label="32 tasks" :segments="segments" :max="32" size="lg" />\`)
  })
}`,...v.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      FusionProgressBar
    },
    template: narrow(\`
<div style="display:flex;flex-direction:column;gap:16px">
  <FusionProgressBar size="sm" label="Small" :value="30" />
  <FusionProgressBar size="md" label="Medium" :value="55" />
  <FusionProgressBar size="lg" label="Large" :value="80" />
</div>\`)
  })
}`,...f.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      FusionProgressBar
    },
    template: narrow(\`
<div style="display:flex;flex-direction:column;gap:16px">
  <FusionProgressBar label="Default" :value="60" />
  <FusionProgressBar label="Success" :value="100" tone="success" />
  <FusionProgressBar label="Warning" :value="85" tone="warning" />
  <FusionProgressBar label="Danger" :value="95" tone="danger" />
</div>\`)
  })
}`,...b.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Pulling frames from Figma",
    indeterminate: true
  },
  render: args => ({
    components: {
      FusionProgressBar
    },
    setup: () => ({
      args
    }),
    template: narrow(\`<FusionProgressBar v-bind="args" />\`)
  })
}`,...x.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  name: "Bar only, no label or number",
  args: {
    value: 40,
    showValue: false
  },
  render: args => ({
    components: {
      FusionProgressBar
    },
    setup: () => ({
      args
    }),
    template: narrow(\`<FusionProgressBar v-bind="args" />\`)
  })
}`,...h.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  name: "Moving (try the slider)",
  render: () => ({
    components: {
      FusionProgressBar
    },
    setup() {
      const logged = ref(14.5);
      return {
        logged
      };
    },
    template: narrow(\`
<div>
  <input type="range" min="0" max="26" step="0.5" v-model.number="logged" style="width:100%;margin-bottom:12px" />
  <FusionProgressBar label="Retainer: November" :value="logged" :max="20" tone="auto" :valueText="logged + ' of 20 h'" />
</div>\`)
  })
}`,...y.parameters?.docs?.source}}};const O=["Default","Retainer","SegmentedTasks","Sizes","Tones","Indeterminate","NoText","LiveTimer"];export{c as Default,x as Indeterminate,y as LiveTimer,h as NoText,p as Retainer,v as SegmentedTasks,f as Sizes,b as Tones,O as __namedExportsOrder,U as default};
