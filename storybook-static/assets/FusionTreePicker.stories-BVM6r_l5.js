import{r as a}from"./iframe-DLJy-DHW.js";import{F as r}from"./FusionTreePicker-C-LF5mJc.js";import{F as k}from"./FusionBadge-C19OGssr.js";import"./preload-helper-Ct5FWWRu.js";import"./search-APFKcIyT.js";import"./createLucideIcon-CURt8gZv.js";import"./x-GJVIuc3e.js";import"./plus-LMukCZn9.js";import"./chevron-right-DxdVyPGM.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const A={title:"Fusion/Forms/FusionTreePicker",component:r,tags:["autodocs"],parameters:{layout:"padded",docs:{description:{component:'\nPick one row from a tree: a task and its subtasks, or a client and its budgets. It draws proper curved connector lines, opens and closes branches, and can search.\n\n- `nodes`: nested `{ id, label, meta?, metaTone?, color?, icon?, disabled?, children? }`.\n- `v-model`: the picked id.\n- `searchable`: a search box. Matches keep their parents and open them.\n- `footer`: "Collapse all / Expand all".\n- `variant`: `list` is plain rows; `panel` is a card with a shadow, for use inside a dropdown.\n- `expanded` / `v-model:expanded`: control which branches are open, or let it manage itself.\n- Slot `node` replaces what is drawn inside a row.\n- Disabled rows cannot be picked but can still be opened (for example, clients in a budget picker).\n\n```vue\n<FusionTreePicker v-model="taskId" :nodes="tasks" searchable footer variant="panel" />\n```\n'}}},argTypes:{variant:{control:"radio",options:["list","panel"]},searchable:{control:"boolean"},footer:{control:"boolean"},startExpanded:{control:"boolean"},indent:{control:{type:"number",min:12,max:40}}}},g="#c9c9c9",t="#3a8be0",h="#a975d8",v="#6c9a2e",o=[{id:"main",label:"This task: Create wireframes for new landing page",meta:"Figma frames",children:[{id:"header",label:"Header and navigation",meta:"Figma frames",color:t},{id:"hero",label:"Hero section",meta:"Images",color:h,children:[{id:"copy",label:"Headline and copy",meta:"Figma frames",color:g},{id:"img",label:"Hero image",meta:"Images",color:h}]},{id:"signup",label:"Sign-up form",meta:"Video",color:v},{id:"pricing",label:"Pricing table",meta:"No frames yet",metaTone:"warning",color:g},{id:"footer",label:"Footer",meta:"Document",color:t}]}],i={name:"A task and its subtasks",args:{nodes:o},render:e=>({components:{FusionTreePicker:r},setup(){const n=a("hero");return{args:e,picked:n}},template:'<div style="max-width:420px"><FusionTreePicker v-bind="args" v-model="picked" /><p style="font-size:13px;margin-top:12px">Picked: <b>{{ picked }}</b></p></div>'})},d={name:"Searchable panel (as a dropdown)",args:{nodes:o,variant:"panel",searchable:!0,footer:!0,maxHeight:"18rem"},render:e=>({components:{FusionTreePicker:r},setup(){const n=a(null);return{args:e,picked:n}},template:'<div style="max-width:420px"><FusionTreePicker v-bind="args" v-model="picked" /><p style="font-size:13px;margin-top:12px">Try searching "hero". Picked: <b>{{ picked }}</b></p></div>'})},l={name:"Task lists with tasks (like the time panel)",args:{variant:"panel",searchable:!0,footer:!0},render:e=>({components:{FusionTreePicker:r},setup(){const n=[{id:"l1",label:"Front end build",children:[{id:412,label:"#412 Navigation shell",color:h},{id:413,label:"#413 Cashier screen",color:t,children:[{id:414,label:"#414 Payment screen",color:t},{id:415,label:"#415 Basket",color:g}]}]},{id:"l2",label:"Design and architecture",children:[{id:420,label:"#420 Database schema",color:t},{id:421,label:"#421 API contract",color:g}]}],s=a(414);return{args:e,nodes:n,picked:s}},template:'<div style="max-width:380px"><FusionTreePicker v-bind="args" :nodes="nodes" v-model="picked" /></div>'})},c={name:"Clients with budgets (clients open, budgets are picked)",args:{variant:"panel",searchable:!0,footer:!0,startExpanded:!1,searchPlaceholder:"Search clients and budgets"},render:e=>({components:{FusionTreePicker:r},setup(){const n=[{id:"c1",label:"Business ERP (Apple Inc)",disabled:!0,children:[{id:"b1",label:"Retainer: November",meta:"14.5 of 20 h"},{id:"b2",label:"Fixed price",meta:"62 of 90 h"},{id:"b3",label:"Not billable",meta:"No budget"}]},{id:"c2",label:"Cloudline Systems",disabled:!0,children:[{id:"b4",label:"Ad hoc",meta:"Unlimited"},{id:"b5",label:"Admin"}]},{id:"c3",label:"Harbor and Co",disabled:!0,children:[{id:"b6",label:"Support hours",meta:"3 of 10 h",metaTone:"success"}]},{id:"c4",label:"Northwind Coffee",disabled:!0,children:[{id:"b7",label:"Website rebuild",meta:"38 of 40 h",metaTone:"danger"}]}],s=a("b1");return{args:e,nodes:n,picked:s}},template:'<div style="max-width:380px"><FusionTreePicker v-bind="args" :nodes="nodes" v-model="picked" /></div>'})},p={name:"Custom row (the node slot)",args:{nodes:o},render:e=>({components:{FusionTreePicker:r,FusionBadge:k},setup(){const n=a(null);return{args:e,picked:n}},template:`
<div style="max-width:460px">
  <FusionTreePicker v-bind="args" v-model="picked">
    <template #node="{ node, level }">
      <span style="flex:1;min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap" :style="{ fontWeight: level === 0 ? 600 : 400 }">{{ node.label }}</span>
      <FusionBadge v-if="node.meta" :text="node.meta" size="sm" variant="subtle" />
    </template>
  </FusionTreePicker>
</div>`})},m={name:"Starts closed, controlled from outside",args:{nodes:o,startExpanded:!1},render:e=>({components:{FusionTreePicker:r},setup(){const n=a(null),s=a([]);return{args:e,picked:n,open:s}},template:`
<div style="max-width:420px">
  <div style="display:flex;gap:8px;margin-bottom:10px">
    <button @click="open = ['main','hero']" style="padding:4px 10px">Open main and hero</button>
    <button @click="open = []" style="padding:4px 10px">Close all</button>
  </div>
  <FusionTreePicker v-bind="args" v-model="picked" v-model:expanded="open" />
</div>`})},u={name:"Wider indent",args:{nodes:o,indent:30},render:e=>({components:{FusionTreePicker:r},setup(){const n=a("copy");return{args:e,picked:n}},template:'<div style="max-width:480px"><FusionTreePicker v-bind="args" v-model="picked" /></div>'})},b={name:"Budget usage (small)",args:{size:"sm",toggle:"circle",searchable:!0,nodes:[{id:"p",label:"Website redesign",disabled:!0,children:[{id:"a",label:"Design",meta:"22 / 40 hrs",usage:.55},{id:"b",label:"Build and launch of the new website, with the long name that wraps",meta:"55 / 40 hrs",metaTone:"danger",usage:1.37}]}]},render:e=>({components:{FusionTreePicker:r},setup(){const n=a(null);return{args:e,picked:n}},template:'<div style="max-width:340px"><FusionTreePicker v-bind="args" v-model="picked" /></div>'})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  name: "A task and its subtasks",
  args: {
    nodes: taskTree
  },
  render: args => ({
    components: {
      FusionTreePicker
    },
    setup() {
      const picked = ref<string | number | null>("hero");
      return {
        args,
        picked
      };
    },
    template: \`<div style="max-width:420px"><FusionTreePicker v-bind="args" v-model="picked" /><p style="font-size:13px;margin-top:12px">Picked: <b>{{ picked }}</b></p></div>\`
  })
}`,...i.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  name: "Searchable panel (as a dropdown)",
  args: {
    nodes: taskTree,
    variant: "panel",
    searchable: true,
    footer: true,
    maxHeight: "18rem"
  },
  render: args => ({
    components: {
      FusionTreePicker
    },
    setup() {
      const picked = ref<string | number | null>(null);
      return {
        args,
        picked
      };
    },
    template: \`<div style="max-width:420px"><FusionTreePicker v-bind="args" v-model="picked" /><p style="font-size:13px;margin-top:12px">Try searching "hero". Picked: <b>{{ picked }}</b></p></div>\`
  })
}`,...d.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  name: "Task lists with tasks (like the time panel)",
  args: {
    variant: "panel",
    searchable: true,
    footer: true
  },
  render: args => ({
    components: {
      FusionTreePicker
    },
    setup() {
      const nodes: TreePickerNode[] = [{
        id: "l1",
        label: "Front end build",
        children: [{
          id: 412,
          label: "#412 Navigation shell",
          color: purple
        }, {
          id: 413,
          label: "#413 Cashier screen",
          color: blue,
          children: [{
            id: 414,
            label: "#414 Payment screen",
            color: blue
          }, {
            id: 415,
            label: "#415 Basket",
            color: grey
          }]
        }]
      }, {
        id: "l2",
        label: "Design and architecture",
        children: [{
          id: 420,
          label: "#420 Database schema",
          color: blue
        }, {
          id: 421,
          label: "#421 API contract",
          color: grey
        }]
      }];
      const picked = ref<string | number | null>(414);
      return {
        args,
        nodes,
        picked
      };
    },
    template: \`<div style="max-width:380px"><FusionTreePicker v-bind="args" :nodes="nodes" v-model="picked" /></div>\`
  })
}`,...l.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  name: "Clients with budgets (clients open, budgets are picked)",
  args: {
    variant: "panel",
    searchable: true,
    footer: true,
    startExpanded: false,
    searchPlaceholder: "Search clients and budgets"
  },
  render: args => ({
    components: {
      FusionTreePicker
    },
    setup() {
      const nodes: TreePickerNode[] = [{
        id: "c1",
        label: "Business ERP (Apple Inc)",
        disabled: true,
        children: [{
          id: "b1",
          label: "Retainer: November",
          meta: "14.5 of 20 h"
        }, {
          id: "b2",
          label: "Fixed price",
          meta: "62 of 90 h"
        }, {
          id: "b3",
          label: "Not billable",
          meta: "No budget"
        }]
      }, {
        id: "c2",
        label: "Cloudline Systems",
        disabled: true,
        children: [{
          id: "b4",
          label: "Ad hoc",
          meta: "Unlimited"
        }, {
          id: "b5",
          label: "Admin"
        }]
      }, {
        id: "c3",
        label: "Harbor and Co",
        disabled: true,
        children: [{
          id: "b6",
          label: "Support hours",
          meta: "3 of 10 h",
          metaTone: "success"
        }]
      }, {
        id: "c4",
        label: "Northwind Coffee",
        disabled: true,
        children: [{
          id: "b7",
          label: "Website rebuild",
          meta: "38 of 40 h",
          metaTone: "danger"
        }]
      }];
      const picked = ref<string | number | null>("b1");
      return {
        args,
        nodes,
        picked
      };
    },
    template: \`<div style="max-width:380px"><FusionTreePicker v-bind="args" :nodes="nodes" v-model="picked" /></div>\`
  })
}`,...c.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  name: "Custom row (the node slot)",
  args: {
    nodes: taskTree
  },
  render: args => ({
    components: {
      FusionTreePicker,
      FusionBadge
    },
    setup() {
      const picked = ref<string | number | null>(null);
      return {
        args,
        picked
      };
    },
    template: \`
<div style="max-width:460px">
  <FusionTreePicker v-bind="args" v-model="picked">
    <template #node="{ node, level }">
      <span style="flex:1;min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap" :style="{ fontWeight: level === 0 ? 600 : 400 }">{{ node.label }}</span>
      <FusionBadge v-if="node.meta" :text="node.meta" size="sm" variant="subtle" />
    </template>
  </FusionTreePicker>
</div>\`
  })
}`,...p.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  name: "Starts closed, controlled from outside",
  args: {
    nodes: taskTree,
    startExpanded: false
  },
  render: args => ({
    components: {
      FusionTreePicker
    },
    setup() {
      const picked = ref<string | number | null>(null);
      const open = ref<(string | number)[]>([]);
      return {
        args,
        picked,
        open
      };
    },
    template: \`
<div style="max-width:420px">
  <div style="display:flex;gap:8px;margin-bottom:10px">
    <button @click="open = ['main','hero']" style="padding:4px 10px">Open main and hero</button>
    <button @click="open = []" style="padding:4px 10px">Close all</button>
  </div>
  <FusionTreePicker v-bind="args" v-model="picked" v-model:expanded="open" />
</div>\`
  })
}`,...m.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  name: "Wider indent",
  args: {
    nodes: taskTree,
    indent: 30
  },
  render: args => ({
    components: {
      FusionTreePicker
    },
    setup() {
      const picked = ref<string | number | null>("copy");
      return {
        args,
        picked
      };
    },
    template: \`<div style="max-width:480px"><FusionTreePicker v-bind="args" v-model="picked" /></div>\`
  })
}`,...u.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  name: "Budget usage (small)",
  args: {
    size: "sm",
    toggle: "circle",
    searchable: true,
    nodes: [{
      id: "p",
      label: "Website redesign",
      disabled: true,
      children: [{
        id: "a",
        label: "Design",
        meta: "22 / 40 hrs",
        usage: 0.55
      }, {
        id: "b",
        label: "Build and launch of the new website, with the long name that wraps",
        meta: "55 / 40 hrs",
        metaTone: "danger",
        usage: 1.37
      }]
    }]
  },
  render: args => ({
    components: {
      FusionTreePicker
    },
    setup() {
      const picked = ref<string | number | null>(null);
      return {
        args,
        picked
      };
    },
    template: \`<div style="max-width:340px"><FusionTreePicker v-bind="args" v-model="picked" /></div>\`
  })
}`,...b.parameters?.docs?.source}}};const N=["Default","SearchablePanel","TaskLists","ClientsAndBudgets","CustomRow","Collapsed","DeepAndWide","BudgetUsage"];export{b as BudgetUsage,c as ClientsAndBudgets,m as Collapsed,p as CustomRow,u as DeepAndWide,i as Default,d as SearchablePanel,l as TaskLists,N as __namedExportsOrder,A as default};
