import{_ as o}from"./Header-CV6bQxE4.js";import"./iframe-4anGkjM3.js";import"./preload-helper-Ct5FWWRu.js";const{fn:a}=__STORYBOOK_MODULE_TEST__,u={title:"Example/Header",component:o,render:s=>({components:{MyHeader:o},setup(){return{args:s}},template:'<my-header :user="args.user" />'}),parameters:{layout:"fullscreen"},args:{onLogin:a(),onLogout:a(),onCreateAccount:a()},tags:["autodocs"]},e={args:{user:{name:"Jane Doe"}}},r={args:{user:null}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    user: {
      name: 'Jane Doe'
    }
  }
}`,...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    user: null
  }
}`,...r.parameters?.docs?.source}}};const m=["LoggedIn","LoggedOut"];export{e as LoggedIn,r as LoggedOut,m as __namedExportsOrder,u as default};
