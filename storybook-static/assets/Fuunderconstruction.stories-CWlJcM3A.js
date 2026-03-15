import{a as u,g as t,y as l,t as a,j as d}from"./iframe-C5iHKGGS.js";import{_ as g}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./preload-helper-Ct5FWWRu.js";const i={name:"FuUnderConstruction",props:{imageSrc:{type:String,default:"/images/development-code.svg"},imageAlt:{type:String,default:"Page under construction illustration"},title:{type:String,default:"Page Under Construction"},subtitle:{type:String,default:"We're working hard to get this ready. Check back soon!"}}},m={class:"fu-under-construction"},p={class:"fu-under-construction__inner"},f=["src","alt"],b={class:"fu-under-construction__content"},_={class:"fu-under-construction__title"},y={class:"fu-under-construction__subtitle"};function h(s,k,e,C,S,v){return d(),u("div",m,[t("div",p,[t("img",{class:"fu-under-construction__image",src:e.imageSrc,alt:e.imageAlt},null,8,f),t("div",b,[t("h1",_,a(e.title),1),t("p",y,a(e.subtitle),1),l(s.$slots,"default")])])])}const c=g(i,[["render",h]]);i.__docgenInfo={displayName:"FuUnderConstruction",exportName:"default",description:"",tags:{},props:[{name:"imageSrc",type:{name:"string"},defaultValue:{func:!1,value:'"/images/development-code.svg"'}},{name:"imageAlt",type:{name:"string"},defaultValue:{func:!1,value:'"Page under construction illustration"'}},{name:"title",type:{name:"string"},defaultValue:{func:!1,value:'"Page Under Construction"'}},{name:"subtitle",type:{name:"string"},defaultValue:{func:!1,value:`"We're working hard to get this ready. Check back soon!"`}}],slots:[{name:"default"}],sourceFiles:["/Users/xavier/Documents/Websites/Skkido/Fusion-binary-ui/src/components/utilities/Fuunderconstruction.vue"]};const A={title:"UnderConstruction",component:c,tags:["autodocs"],argTypes:{imageSrc:{control:"text"},imageAlt:{control:"text"},title:{control:"text"},subtitle:{control:"text"}}},n={args:{imageAlt:"Page under construction illustration",title:"Page Under Construction",subtitle:"We're working hard to get this ready. Check back soon!"}},o={args:{imageSrc:"/under-construction.png",imageAlt:"Coming soon illustration",title:"Coming Soon",subtitle:"Something awesome is on its way. Stay tuned!"}},r={args:{imageSrc:"/under-construction.png",title:"Not Quite Ready",subtitle:"This page is still being built. Head back to safety."},render:s=>({components:{FuUnderConstruction:c},setup(){return{args:s}},template:`
      <FuUnderConstruction v-bind="args">
        <button
          style="
            margin-top: 1rem;
            padding: 0.65rem 1.5rem;
            background: #6c63ff;
            color: #fff;
            border: none;
            border-radius: 10px;
            font-size: 0.95rem;
            cursor: pointer;
          "
          @click="() => alert('Going back!')"
        >
          ← Go Back Home
        </button>
      </FuUnderConstruction>
    `})};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    imageAlt: 'Page under construction illustration',
    title: 'Page Under Construction',
    subtitle: "We're working hard to get this ready. Check back soon!"
  }
}`,...n.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    imageSrc: '/under-construction.png',
    imageAlt: 'Coming soon illustration',
    title: 'Coming Soon',
    subtitle: 'Something awesome is on its way. Stay tuned!'
  }
}`,...o.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    imageSrc: '/under-construction.png',
    title: 'Not Quite Ready',
    subtitle: 'This page is still being built. Head back to safety.'
  },
  render: args => ({
    components: {
      FuUnderConstruction
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <FuUnderConstruction v-bind="args">
        <button
          style="
            margin-top: 1rem;
            padding: 0.65rem 1.5rem;
            background: #6c63ff;
            color: #fff;
            border: none;
            border-radius: 10px;
            font-size: 0.95rem;
            cursor: pointer;
          "
          @click="() => alert('Going back!')"
        >
          ← Go Back Home
        </button>
      </FuUnderConstruction>
    \`
  })
}`,...r.parameters?.docs?.source}}};const w=["Default","CustomText","WithCTA"];export{o as CustomText,n as Default,r as WithCTA,w as __namedExportsOrder,A as default};
