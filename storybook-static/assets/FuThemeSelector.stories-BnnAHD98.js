import{d as S,b as a,g as o,F as g,e as v,o as l,j as h,l as T,u as F,i as _,t as V,r as i}from"./iframe-D3vfv6YP.js";import{C}from"./check--DD4wOi7.js";import{_ as D}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./preload-helper-Ct5FWWRu.js";import"./createLucideIcon-DKFlsGA7.js";const b={class:"fu-theme-selector"},N={class:"fu-theme-grid"},x=["onClick"],z={key:0,class:"fu-theme-check"},L={class:"fu-theme-label"},f=S({__name:"FuThemeSelector",props:{modelValue:{default:"auto"},themes:{default:()=>[{key:"light",name:"Day Light"},{key:"dark",name:"Timeless Night"},{key:"auto",name:"Automatic"}]}},emits:["update:modelValue"],setup(e,{emit:n}){const k=n;function y(p){k("update:modelValue",p)}return(p,t)=>(l(),a("div",b,[o("div",N,[(l(!0),a(g,null,v(e.themes,s=>(l(),a("div",{key:s.key,class:h(["fu-theme-card",{"is-active":e.modelValue===s.key}]),onClick:A=>y(s.key),tabindex:"0",role:"button"},[o("div",{class:h(["fu-theme-preview",`fu-theme-preview--${s.key}`])},[t[0]||(t[0]=o("div",{class:"fu-theme-header"},null,-1)),t[1]||(t[1]=o("div",{class:"fu-theme-body"},null,-1)),t[2]||(t[2]=o("div",{class:"fu-theme-footer"},null,-1)),e.modelValue===s.key?(l(),a("div",z,[T(F(C),{class:"fu-check-icon"})])):_("",!0)],2),o("span",L,V(s.name),1)],10,x))),128))])]))}}),r=D(f,[["__scopeId","data-v-405e1dba"]]);f.__docgenInfo={exportName:"default",displayName:"FuThemeSelector",description:"",tags:{},props:[{name:"modelValue",required:!1,type:{name:"string"},defaultValue:{func:!1,value:'"auto"'}},{name:"themes",required:!1,type:{name:"Array",elements:[{name:"ThemeOption"}]},defaultValue:{func:!1,value:`() => [
  { key: "light", name: "Day Light" },
  { key: "dark", name: "Timeless Night" },
  { key: "auto", name: "Automatic" },
]`}}],events:[{name:"update:modelValue"}],sourceFiles:["/Users/xavier/Documents/Websites/Skkido/Fusion-binary-ui/src/components/theme/FuThemeSelector.vue"]};const I={title:"Components/ThemeSelector",component:r,tags:["autodocs"],argTypes:{modelValue:{control:"select",options:["light","dark","auto"]},themes:{control:"object"}}},c={render:e=>({components:{FuThemeSelector:r},setup(){const n=i("auto");return{args:e,selected:n}},template:'<FuThemeSelector v-model="selected" />'})},m={render:()=>({components:{FuThemeSelector:r},setup(){return{selected:i("light")}},template:'<FuThemeSelector v-model="selected" />'})},d={render:()=>({components:{FuThemeSelector:r},setup(){return{selected:i("dark")}},template:'<FuThemeSelector v-model="selected" />'})},u={render:()=>({components:{FuThemeSelector:r},setup(){return{selected:i("nord"),themes:[{key:"solarized",name:"Solarized"},{key:"nord",name:"Nord"},{key:"dracula",name:"Dracula"}]}},template:'<FuThemeSelector v-model="selected" :themes="themes" />'})};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: args => ({
    components: {
      FuThemeSelector
    },
    setup() {
      const selected = ref('auto');
      return {
        args,
        selected
      };
    },
    template: \`<FuThemeSelector v-model="selected" />\`
  })
}`,...c.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      FuThemeSelector
    },
    setup() {
      const selected = ref('light');
      return {
        selected
      };
    },
    template: \`<FuThemeSelector v-model="selected" />\`
  })
}`,...m.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      FuThemeSelector
    },
    setup() {
      const selected = ref('dark');
      return {
        selected
      };
    },
    template: \`<FuThemeSelector v-model="selected" />\`
  })
}`,...d.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      FuThemeSelector
    },
    setup() {
      const selected = ref('nord');
      const themes = [{
        key: 'solarized',
        name: 'Solarized'
      }, {
        key: 'nord',
        name: 'Nord'
      }, {
        key: 'dracula',
        name: 'Dracula'
      }];
      return {
        selected,
        themes
      };
    },
    template: \`<FuThemeSelector v-model="selected" :themes="themes" />\`
  })
}`,...u.parameters?.docs?.source}}};const O=["Default","SelectedLight","SelectedDark","CustomThemes"];export{u as CustomThemes,c as Default,d as SelectedDark,m as SelectedLight,O as __namedExportsOrder,I as default};
