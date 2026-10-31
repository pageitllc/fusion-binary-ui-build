import{q as p,c as l,b as m,f as c,u as d,o as u}from"./iframe-BJCCdSEh.js";import{L as f}from"./loader-circle-iKGYZ_2Y.js";import{_ as g}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./preload-helper-Ct5FWWRu.js";import"./createLucideIcon-B6nnLSzH.js";const S=["aria-label"],i=p({__name:"FusionSpinner",props:{size:{default:"md"},label:{default:"Loading"}},setup(n){const o=n,r={xs:12,sm:16,md:20,lg:28},t=l(()=>r[o.size]);return(z,F)=>(u(),m("span",{class:"fu-spinner",role:"status","aria-label":n.label},[c(d(f),{size:t.value,class:"fu-spinner__icon"},null,8,["size"])],8,S))}}),a=g(i,[["__scopeId","data-v-1ca57cc0"]]);i.__docgenInfo={exportName:"default",displayName:"FusionSpinner",description:"",tags:{},props:[{name:"size",required:!1,type:{name:"union",elements:[{name:'"xs"'},{name:'"sm"'},{name:'"md"'},{name:'"lg"'}]},defaultValue:{func:!1,value:'"md"'}},{name:"label",description:"Read out by screen readers",required:!1,type:{name:"string"},defaultValue:{func:!1,value:'"Loading"'}}],sourceFiles:["/Users/xavier/Documents/Websites/Skkido/Fusion-binary-ui/src/components/spinner/FusionSpinner.vue"]};const h={title:"Fusion/Feedback/FusionSpinner",component:a,tags:["autodocs"],parameters:{docs:{description:{component:'\n### **FusionSpinner**\n\nA small spinning ring that shows something is loading. It takes the colour of the text around it.\n\n```vue\n<FusionSpinner v-if="loading" size="sm" />\n```\n\n| Prop | Type | Default | What it does |\n|---|---|---|---|\n| `size` | `"xs" \\| "sm" \\| "md" \\| "lg"` | `"md"` | 12, 16, 20 or 28 pixels. |\n| `label` | `string` | `"Loading"` | Read out by screen readers. |\n'}}},argTypes:{size:{control:"inline-radio",options:["xs","sm","md","lg"]}}},e={args:{size:"md"}},s={render:()=>({components:{FusionSpinner:a},template:`
      <div style="display: flex; align-items: center; gap: 1rem">
        <FusionSpinner size="xs" />
        <FusionSpinner size="sm" />
        <FusionSpinner size="md" />
        <FusionSpinner size="lg" />
      </div>`})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    size: "md"
  }
}`,...e.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      FusionSpinner
    },
    template: \`
      <div style="display: flex; align-items: center; gap: 1rem">
        <FusionSpinner size="xs" />
        <FusionSpinner size="sm" />
        <FusionSpinner size="md" />
        <FusionSpinner size="lg" />
      </div>\`
  })
}`,...s.parameters?.docs?.source}}};const k=["Default","Sizes"];export{e as Default,s as Sizes,k as __namedExportsOrder,h as default};
