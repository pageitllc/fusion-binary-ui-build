import{r as t}from"./iframe-Bit2fKoK.js";import{F as n}from"./FusionPillMultiSelect-DuGmWMb5.js";import"./preload-helper-Ct5FWWRu.js";import"./check-DzxBtvcd.js";import"./createLucideIcon-xyDXa4T9.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const m={title:"Fusion/Forms/FusionPillMultiSelect",component:n,tags:["autodocs"],parameters:{layout:"padded",docs:{description:{component:"\nPills where **several** can be chosen at once. A tick shows on each chosen pill. Same options as **FusionPillSelect**: `{ value, label, icon?, disabled?, disabledReason? }`.\n\n- `v-model`: an array of the chosen values.\n- `size`: `sm`, `md`, `lg`. `disabled` and `readonly` work on the whole group, and `disabled` on one option turns off that pill.\n- For a single choice use **FusionPillSelect**.\n"}}}},a=[{value:"design",label:"Design"},{value:"build",label:"Build"},{value:"copy",label:"Copywriting"},{value:"seo",label:"SEO"},{value:"hosting",label:"Hosting",disabled:!0,disabledReason:"Already included in the plan"},{value:"photo",label:"Photography"}],e={args:{options:a},render:s=>({components:{FusionPillMultiSelect:n},setup(){const o=t(["design","seo"]);return{args:s,value:o}},template:`<div style="max-width:560px"><FusionPillMultiSelect v-bind="args" v-model="value" /><p style="font-size:13px;margin-top:14px">Chosen: <b>{{ value.join(', ') || 'none' }}</b></p></div>`})},l={args:{options:a,size:"sm"},render:s=>({components:{FusionPillMultiSelect:n},setup(){const o=t([]);return{args:s,value:o}},template:'<div style="max-width:560px"><FusionPillMultiSelect v-bind="args" v-model="value" /></div>'})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    options
  },
  render: args => ({
    components: {
      FusionPillMultiSelect
    },
    setup() {
      const value = ref<(string | number)[]>(["design", "seo"]);
      return {
        args,
        value
      };
    },
    template: \`<div style="max-width:560px"><FusionPillMultiSelect v-bind="args" v-model="value" /><p style="font-size:13px;margin-top:14px">Chosen: <b>{{ value.join(', ') || 'none' }}</b></p></div>\`
  })
}`,...e.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    options,
    size: "sm"
  },
  render: args => ({
    components: {
      FusionPillMultiSelect
    },
    setup() {
      const value = ref<(string | number)[]>([]);
      return {
        args,
        value
      };
    },
    template: \`<div style="max-width:560px"><FusionPillMultiSelect v-bind="args" v-model="value" /></div>\`
  })
}`,...l.parameters?.docs?.source}}};const v=["Default","Small"];export{e as Default,l as Small,v as __namedExportsOrder,m as default};
