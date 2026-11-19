import{q as w,b as s,t as d,i as D,d as n,A as h,F as k,g as F,m as _,p as A,o as a,s as S,y as B,e as x,r as N}from"./iframe-Bit2fKoK.js";import{_ as C}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{F as V}from"./FusionBadge-1hJbE7nu.js";import{F as z}from"./FuAvatar-Ds1maJTR.js";import"./preload-helper-Ct5FWWRu.js";const W={key:0,class:"fu-details__head"},q={key:0,class:"fu-details__title"},T={class:"fu-details__actions"},I=["href"],$={key:2,class:"fu-details__empty"},L=w({__name:"FusionDetailsList",props:{items:{},title:{},layout:{default:"inline"},divided:{type:Boolean,default:!1},card:{type:Boolean,default:!0},labelWidth:{default:"40%"},loading:{type:Boolean,default:!1}},setup(e){return(u,r)=>(a(),s("section",{class:A(["fu-details",[`fu-details--${e.layout}`,{"is-card":e.card,"is-divided":e.divided}]])},[e.title||u.$slots.actions?(a(),s("header",W,[e.title?(a(),s("h3",q,d(e.title),1)):D("",!0),n("div",T,[h(u.$slots,"actions",{},void 0,!0)])])):D("",!0),n("dl",{class:"fu-details__list",style:_({"--fu-dl-label":e.labelWidth})},[e.loading?(a(),s(k,{key:0},F(5,t=>n("div",{key:t,class:"fu-details__row"},[...r[0]||(r[0]=[n("dt",null,[n("span",{class:"fu-details__skeleton"})],-1),n("dd",null,[n("span",{class:"fu-details__skeleton fu-details__skeleton--wide"})],-1)])])),64)):(a(!0),s(k,{key:1},F(e.items.filter(t=>!t.hidden),t=>(a(),s("div",{key:t.key,class:"fu-details__row"},[n("dt",null,[t.icon?(a(),S(B(t.icon),{key:0,size:14,class:"fu-details__icon"})):D("",!0),x(" "+d(t.label),1)]),n("dd",null,[h(u.$slots,`value-${t.key}`,{item:t},()=>[t.href&&t.value?(a(),s("a",{key:0,href:t.href},d(t.value),9,I)):t.value!==void 0&&t.value!==null&&t.value!==""?(a(),s(k,{key:1},[x(d(t.value),1)],64)):(a(),s("span",$,d(t.emptyText||"None"),1))],!0)])]))),128))],4)],2))}}),i=C(L,[["__scopeId","data-v-e401532d"]]);L.__docgenInfo={exportName:"default",displayName:"FusionDetailsList",description:"",tags:{},props:[{name:"items",required:!0,type:{name:"Array",elements:[{name:"DetailItem"}]}},{name:"title",required:!1,type:{name:"string"}},{name:"layout",description:"stacked: label above value. inline: label left, value right.",required:!1,type:{name:"union",elements:[{name:'"inline"'},{name:'"stacked"'}]},defaultValue:{func:!1,value:'"inline"'}},{name:"divided",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"card",description:"A bordered white card.",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"true"}},{name:"labelWidth",description:"Width of the label column in inline layout.",required:!1,type:{name:"string"},defaultValue:{func:!1,value:'"40%"'}},{name:"loading",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}],slots:[{name:"actions"},{name:"`value-${i.key}`",scoped:!0,bindings:[{name:"name",title:"binding"},{name:"item",title:"binding"}]}],sourceFiles:["/Users/xavier/Documents/Websites/Skkido/Fusion-binary-ui/src/components/detailsList/FusionDetailsList.vue"]};const H={title:"Fusion/Data Display/FusionDetailsList",component:i,tags:["autodocs"],parameters:{layout:"padded",docs:{description:{component:'\nLabel and value pairs, like the **Details** panel next to a task.\n\n- `items`: `{ key, label, value, icon, href, hidden, emptyText }`. A row with `hidden: true` is left out (use it for money that team members should not see).\n- Show any value your own way with the slot `value-<key>` (a badge, an avatar, an editable field).\n- `layout`: `inline` (label left, value right) or `stacked` (label above value).\n- `divided` draws lines between rows. `card` (default) draws the white bordered card. `title` adds a heading; the `actions` slot sits at its right.\n- `loading` shows a skeleton.\n\n```vue\n<FusionDetailsList title="Details" :items="items">\n  <template #value-status="{ item }"><FusionBadge :text="item.value" /></template>\n</FusionDetailsList>\n```\n'}}},argTypes:{layout:{control:"radio",options:["inline","stacked"]},divided:{control:"boolean"},card:{control:"boolean"},loading:{control:"boolean"}}},o=[{key:"priority",label:"Priority",value:"Urgent"},{key:"assignee",label:"Assignee",value:"Faris Ansari"},{key:"reviewer",label:"Reviewer",value:"Priya Nair"},{key:"deliverable",label:"Deliverable",value:"UI/UX Design Pages"},{key:"wp",label:"Work package",value:"Requirement gathering"},{key:"start",label:"Start date",value:"10 Nov"},{key:"due",label:"Due date",value:"12 Nov"},{key:"estimate",label:"Estimate",value:"6 h"},{key:"labels",label:"Labels",value:"Design, Website"},{key:"amount",label:"Amount",value:"£650"},{key:"billable",label:"Billable",value:"Yes"}],l=e=>`<div style="max-width:340px">${e}</div>`,m={args:{title:"Details",items:o},render:e=>({components:{FusionDetailsList:i},setup:()=>({args:e}),template:l('<FusionDetailsList v-bind="args" />')})},c={name:"Money hidden for team members (toggle)",render:()=>({components:{FusionDetailsList:i},setup(){const e=N(!0);return{manager:e,list:()=>o.map(r=>["amount","billable"].includes(r.key)?{...r,hidden:!e.value}:r)}},template:l(`
<div>
  <label style="display:flex;gap:8px;align-items:center;font-size:13px;margin-bottom:12px"><input type="checkbox" v-model="manager" /> Viewing as a manager</label>
  <FusionDetailsList title="Details" :items="list()" />
</div>`)})},p={args:{title:"Details",items:o.slice(0,7),divided:!0},render:e=>({components:{FusionDetailsList:i},setup:()=>({args:e}),template:l('<FusionDetailsList v-bind="args" />')})},v={args:{items:o.slice(0,6),layout:"stacked",divided:!0},render:e=>({components:{FusionDetailsList:i},setup:()=>({args:e}),template:l('<FusionDetailsList v-bind="args" />')})},g={name:"Badges, avatars and links in the values",render:()=>({components:{FusionDetailsList:i,FusionBadge:V,FuAvatar:z},setup(){return{rows:[{key:"status",label:"Status",value:"Internal QC"},{key:"assignee",label:"Assignee",value:"Faris Ansari"},{key:"client",label:"Client",value:"Northwind Coffee",href:"#client"},{key:"due",label:"Due date",value:"12 Nov"},{key:"reminder",label:"Reminder",value:"",emptyText:"Not set"}]}},template:l(`
<FusionDetailsList title="Details" :items="rows" divided>
  <template #value-status="{ item }"><FusionBadge :text="item.value" size="sm" variant="subtle" /></template>
  <template #value-assignee="{ item }"><span style="display:inline-flex;align-items:center;gap:8px"><FuAvatar :name="item.value" size="xs" />{{ item.value }}</span></template>
</FusionDetailsList>`)})},b={name:"A heading with actions",args:{title:"Details",items:o.slice(0,4)},render:e=>({components:{FusionDetailsList:i},setup:()=>({args:e}),template:l('<FusionDetailsList v-bind="args"><template #actions><button style="font-size:12px;border:0;background:none;cursor:pointer;text-decoration:underline">Edit</button></template></FusionDetailsList>')})},y={args:{title:"Details",items:[],loading:!0},render:e=>({components:{FusionDetailsList:i},setup:()=>({args:e}),template:l('<FusionDetailsList v-bind="args" />')})},f={name:"Plain, no card",args:{items:o.slice(0,5),card:!1,divided:!0},render:e=>({components:{FusionDetailsList:i},setup:()=>({args:e}),template:l('<FusionDetailsList v-bind="args" />')})};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    title: "Details",
    items
  },
  render: args => ({
    components: {
      FusionDetailsList
    },
    setup: () => ({
      args
    }),
    template: box(\`<FusionDetailsList v-bind="args" />\`)
  })
}`,...m.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  name: "Money hidden for team members (toggle)",
  render: () => ({
    components: {
      FusionDetailsList
    },
    setup() {
      const manager = ref(true);
      const list = () => items.map(i => ["amount", "billable"].includes(i.key) ? {
        ...i,
        hidden: !manager.value
      } : i);
      return {
        manager,
        list
      };
    },
    template: box(\`
<div>
  <label style="display:flex;gap:8px;align-items:center;font-size:13px;margin-bottom:12px"><input type="checkbox" v-model="manager" /> Viewing as a manager</label>
  <FusionDetailsList title="Details" :items="list()" />
</div>\`)
  })
}`,...c.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    title: "Details",
    items: items.slice(0, 7),
    divided: true
  },
  render: args => ({
    components: {
      FusionDetailsList
    },
    setup: () => ({
      args
    }),
    template: box(\`<FusionDetailsList v-bind="args" />\`)
  })
}`,...p.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    items: items.slice(0, 6),
    layout: "stacked",
    divided: true
  },
  render: args => ({
    components: {
      FusionDetailsList
    },
    setup: () => ({
      args
    }),
    template: box(\`<FusionDetailsList v-bind="args" />\`)
  })
}`,...v.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  name: "Badges, avatars and links in the values",
  render: () => ({
    components: {
      FusionDetailsList,
      FusionBadge,
      FuAvatar
    },
    setup() {
      const rows: DetailItem[] = [{
        key: "status",
        label: "Status",
        value: "Internal QC"
      }, {
        key: "assignee",
        label: "Assignee",
        value: "Faris Ansari"
      }, {
        key: "client",
        label: "Client",
        value: "Northwind Coffee",
        href: "#client"
      }, {
        key: "due",
        label: "Due date",
        value: "12 Nov"
      }, {
        key: "reminder",
        label: "Reminder",
        value: "",
        emptyText: "Not set"
      }];
      return {
        rows
      };
    },
    template: box(\`
<FusionDetailsList title="Details" :items="rows" divided>
  <template #value-status="{ item }"><FusionBadge :text="item.value" size="sm" variant="subtle" /></template>
  <template #value-assignee="{ item }"><span style="display:inline-flex;align-items:center;gap:8px"><FuAvatar :name="item.value" size="xs" />{{ item.value }}</span></template>
</FusionDetailsList>\`)
  })
}`,...g.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  name: "A heading with actions",
  args: {
    title: "Details",
    items: items.slice(0, 4)
  },
  render: args => ({
    components: {
      FusionDetailsList
    },
    setup: () => ({
      args
    }),
    template: box(\`<FusionDetailsList v-bind="args"><template #actions><button style="font-size:12px;border:0;background:none;cursor:pointer;text-decoration:underline">Edit</button></template></FusionDetailsList>\`)
  })
}`,...b.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    title: "Details",
    items: [],
    loading: true
  },
  render: args => ({
    components: {
      FusionDetailsList
    },
    setup: () => ({
      args
    }),
    template: box(\`<FusionDetailsList v-bind="args" />\`)
  })
}`,...y.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  name: "Plain, no card",
  args: {
    items: items.slice(0, 5),
    card: false,
    divided: true
  },
  render: args => ({
    components: {
      FusionDetailsList
    },
    setup: () => ({
      args
    }),
    template: box(\`<FusionDetailsList v-bind="args" />\`)
  })
}`,...f.parameters?.docs?.source}}};const Q=["Default","HiddenForTeamMembers","Divided","Stacked","CustomValues","WithActions","Loading","WithoutCard"];export{g as CustomValues,m as Default,p as Divided,c as HiddenForTeamMembers,y as Loading,v as Stacked,b as WithActions,f as WithoutCard,Q as __namedExportsOrder,H as default};
