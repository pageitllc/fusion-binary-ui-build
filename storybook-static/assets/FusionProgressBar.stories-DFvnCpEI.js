import{q as A,c as m,b as s,d,t as u,i as g,F as z,g as V,m as T,p as c,o as r,e as N,r as I}from"./iframe-DLJy-DHW.js";import{_ as $}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./preload-helper-Ct5FWWRu.js";const R={key:0,class:"fu-progress__head"},_={class:"fu-progress__label"},M={key:0,class:"fu-progress__value"},W=["aria-valuenow","aria-label"],C=["title"],L={key:1,class:"fu-progress__value fu-progress__value--inline"},j={key:2,class:"fu-progress__legend"},D=A({__name:"FusionProgressBar",props:{value:{default:0},max:{default:100},segments:{},label:{},valueText:{},showValue:{type:Boolean,default:!0},size:{default:"md"},tone:{default:"default"},warnAt:{default:80},dangerAt:{default:100},legend:{type:Boolean,default:!0},indeterminate:{type:Boolean},inline:{type:Boolean}},setup(e){const n=e,P=m(()=>{const o=n.segments?.length?n.segments.reduce((a,w)=>a+w.value,0):n.max,i=n.segments?.length?o:n.value;return o>0?Math.min(100,Math.max(0,i/n.max*100)):0}),q=m(()=>{if(n.tone!=="auto")return n.tone;const o=n.max>0?n.value/n.max*100:0;return o>=n.dangerAt?"danger":o>=n.warnAt?"warning":"default"}),k=m(()=>n.valueText??`${Math.round(P.value)}%`),S=m(()=>{const o=n.segments??[],i=o.reduce((a,w)=>a+w.value,0)||1;return o.map(a=>({...a,width:`${a.value/i*100}%`}))});return(o,i)=>(r(),s("div",{class:c(["fu-progress",[`fu-progress--${e.size}`,{"fu-progress--inline":e.inline}]])},[!e.inline&&(e.label||e.showValue)?(r(),s("div",R,[d("span",_,u(e.label),1),e.showValue&&!e.indeterminate&&!e.segments?.length?(r(),s("span",M,u(k.value),1)):g("",!0)])):g("",!0),d("div",{class:"fu-progress__track",role:"progressbar","aria-valuenow":e.indeterminate?void 0:Math.round(P.value),"aria-valuemin":"0","aria-valuemax":"100","aria-label":e.label||"Progress"},[e.segments?.length?(r(!0),s(z,{key:0},V(S.value,a=>(r(),s("span",{key:a.label||a.value,class:c(["fu-progress__seg",`is-${a.tone||"default"}`]),style:T({width:a.width,background:a.color}),title:a.label?`${a.label}: ${a.value}`:void 0},null,14,C))),128)):(r(),s("span",{key:1,class:c(["fu-progress__fill",[`is-${q.value}`,{"is-indeterminate":e.indeterminate}]]),style:T(e.indeterminate?void 0:{width:`${P.value}%`})},null,6))],8,W),e.inline&&e.showValue&&!e.indeterminate&&!e.segments?.length?(r(),s("span",L,u(k.value),1)):g("",!0),e.segments?.length&&e.legend?(r(),s("ul",j,[(r(!0),s(z,null,V(S.value,a=>(r(),s("li",{key:a.label||a.value},[d("span",{class:c(["fu-progress__dot",`is-${a.tone||"default"}`]),style:T({background:a.color})},null,6),N(" "+u(a.label)+" ",1),d("b",null,u(a.value),1)]))),128))])):g("",!0)],2))}}),t=$(D,[["__scopeId","data-v-98a69cf8"]]);D.__docgenInfo={exportName:"default",displayName:"FusionProgressBar",description:"",tags:{},props:[{name:"value",description:"Current amount. Use with `max`.",required:!1,type:{name:"number"},defaultValue:{func:!1,value:"0"}},{name:"max",required:!1,type:{name:"number"},defaultValue:{func:!1,value:"100"}},{name:"segments",description:"Several parts of one whole instead of a single value.",required:!1,type:{name:"Array",elements:[{name:"ProgressSegment"}]}},{name:"label",required:!1,type:{name:"string"}},{name:"valueText",description:'Text on the right, for example "14.5 of 20 h". Defaults to the percentage.',required:!1,type:{name:"string"}},{name:"showValue",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"true"}},{name:"size",required:!1,type:{name:"union",elements:[{name:'"sm"'},{name:'"md"'},{name:'"lg"'}]},defaultValue:{func:!1,value:'"md"'}},{name:"tone",description:"default: one colour. auto: grows amber at warnAt and red at dangerAt.",required:!1,type:{name:"union",elements:[{name:'"default"'},{name:'"success"'},{name:'"warning"'},{name:'"danger"'},{name:'"auto"'}]},defaultValue:{func:!1,value:'"default"'}},{name:"warnAt",required:!1,type:{name:"number"},defaultValue:{func:!1,value:"80"}},{name:"dangerAt",required:!1,type:{name:"number"},defaultValue:{func:!1,value:"100"}},{name:"legend",description:"Show a legend under a segmented bar.",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"true"}},{name:"indeterminate",required:!1,type:{name:"boolean"}},{name:"inline",description:"One line: the bar, then the value on its right. For table cells. No label is shown.",required:!1,type:{name:"boolean"}}],sourceFiles:["/Users/xavier/Documents/Websites/Skkido/Fusion-binary-ui/src/components/progressBar/FusionProgressBar.vue"]};const G={title:"Fusion/Data Display/FusionProgressBar",component:t,tags:["autodocs"],parameters:{layout:"padded",docs:{description:{component:'\nA plain bar for progress, budget and retainer use.\n\n- `value` and `max`: a single bar.\n- `tone="auto"`: the bar turns amber at `warnAt` (default 80%) and red at `dangerAt` (default 100%). This is what the retainer uses ("Alerts at 80% and 100%").\n- `segments`: several parts of one whole (Done, In progress, To do) with a legend.\n- `valueText`: the text on the right, for example "14.5 of 20 h". By default it shows the percentage.\n- `size`: `sm`, `md`, `lg`. `indeterminate` for unknown progress.\n\n```vue\n<FusionProgressBar label="Retainer: November" :value="14.5" :max="20" tone="auto" valueText="14.5 of 20 h" />\n<FusionProgressBar :segments="[{ value: 12, label: \'Done\', tone: \'success\' }, { value: 8, label: \'In progress\', tone: \'info\' }, { value: 5, label: \'To do\', tone: \'muted\' }]" />\n```\n'}}},argTypes:{value:{control:{type:"range",min:0,max:120}},max:{control:"number"},size:{control:"radio",options:["sm","md","lg"]},tone:{control:"select",options:["default","success","warning","danger","auto"]},showValue:{control:"boolean"},indeterminate:{control:"boolean"}}},l=e=>`<div style="max-width:460px">${e}</div>`,p={args:{label:"Project progress",value:52,max:100},render:e=>({components:{FusionProgressBar:t},setup:()=>({args:e}),template:l('<FusionProgressBar v-bind="args" />')})},v={name:"Retainer with alerts at 80% and 100%",render:()=>({components:{FusionProgressBar:t},setup:()=>({}),template:l(`
<div style="display:flex;flex-direction:column;gap:20px">
  <FusionProgressBar label="Retainer: November" :value="14.5" :max="20" tone="auto" valueText="14.5 of 20 h" />
  <FusionProgressBar label="Support hours" :value="17" :max="20" tone="auto" valueText="17 of 20 h" />
  <FusionProgressBar label="Website rebuild" :value="38" :max="36" tone="auto" valueText="38 of 36 h, over" />
</div>`)})},f={name:"Segments: tasks by status",render:()=>({components:{FusionProgressBar:t},setup:()=>({segments:[{value:12,label:"Done",tone:"success"},{value:8,label:"Working on it",tone:"info"},{value:3,label:"Client feedback",tone:"danger"},{value:9,label:"Backlog",tone:"muted"}]}),template:l('<FusionProgressBar label="32 tasks" :segments="segments" :max="32" size="lg" />')})},b={render:()=>({components:{FusionProgressBar:t},template:l(`
<div style="display:flex;flex-direction:column;gap:16px">
  <FusionProgressBar size="sm" label="Small" :value="30" />
  <FusionProgressBar size="md" label="Medium" :value="55" />
  <FusionProgressBar size="lg" label="Large" :value="80" />
</div>`)})},x={render:()=>({components:{FusionProgressBar:t},template:l(`
<div style="display:flex;flex-direction:column;gap:16px">
  <FusionProgressBar label="Default" :value="60" />
  <FusionProgressBar label="Success" :value="100" tone="success" />
  <FusionProgressBar label="Warning" :value="85" tone="warning" />
  <FusionProgressBar label="Danger" :value="95" tone="danger" />
</div>`)})},h={args:{label:"Pulling frames from Figma",indeterminate:!0},render:e=>({components:{FusionProgressBar:t},setup:()=>({args:e}),template:l('<FusionProgressBar v-bind="args" />')})},y={name:"Bar only, no label or number",args:{value:40,showValue:!1},render:e=>({components:{FusionProgressBar:t},setup:()=>({args:e}),template:l('<FusionProgressBar v-bind="args" />')})},B={name:"Moving (try the slider)",render:()=>({components:{FusionProgressBar:t},setup(){return{logged:I(14.5)}},template:l(`
<div>
  <input type="range" min="0" max="26" step="0.5" v-model.number="logged" style="width:100%;margin-bottom:12px" />
  <FusionProgressBar label="Retainer: November" :value="logged" :max="20" tone="auto" :valueText="logged + ' of 20 h'" />
</div>`)})},F={name:"Inline (for table cells)",args:{value:100,max:100,size:"md",tone:"success",inline:!0},render:e=>({components:{FusionProgressBar:t},setup:()=>({args:e}),template:`<div style="display:flex; flex-direction:column; gap:16px; max-width:280px">
            <FusionProgressBar v-bind="args" />
            <FusionProgressBar :value="30" :max="38" size="md" tone="success" inline valueText="30 of 38 h" />
            <FusionProgressBar :value="46" :max="40" size="md" tone="danger" inline valueText="46 of 40 h" />
        </div>`})};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
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
}`,...v.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
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
}`,...f.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
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
}`,...b.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
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
}`,...x.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
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
}`,...h.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
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
}`,...y.parameters?.docs?.source}}};B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
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
}`,...B.parameters?.docs?.source}}};F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  name: "Inline (for table cells)",
  args: {
    value: 100,
    max: 100,
    size: "md",
    tone: "success",
    inline: true
  },
  render: args => ({
    components: {
      FusionProgressBar
    },
    setup: () => ({
      args
    }),
    template: \`<div style="display:flex; flex-direction:column; gap:16px; max-width:280px">
            <FusionProgressBar v-bind="args" />
            <FusionProgressBar :value="30" :max="38" size="md" tone="success" inline valueText="30 of 38 h" />
            <FusionProgressBar :value="46" :max="40" size="md" tone="danger" inline valueText="46 of 40 h" />
        </div>\`
  })
}`,...F.parameters?.docs?.source}}};const H=["Default","Retainer","SegmentedTasks","Sizes","Tones","Indeterminate","NoText","LiveTimer","Inline"];export{p as Default,h as Indeterminate,F as Inline,B as LiveTimer,y as NoText,v as Retainer,f as SegmentedTasks,b as Sizes,x as Tones,H as __namedExportsOrder,G as default};
