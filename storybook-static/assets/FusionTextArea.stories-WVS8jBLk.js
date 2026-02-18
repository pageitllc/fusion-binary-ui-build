import{s as x,r as q,m as f,a as t,f as i,z as h,k as V,t as p,D as T,g as w,B as k,j as l}from"./iframe-4anGkjM3.js";import{_ as S}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./preload-helper-Ct5FWWRu.js";const E={class:"fu-textarea-wrapper"},F={key:0,class:"fu-textarea-label"},z={key:0,class:"fu-textarea-required"},A=["placeholder","disabled","rows","required"],B={key:1,class:"fu-textarea-error"},b=x({__name:"FusionTextArea",props:{modelValue:{default:""},label:{default:""},variant:{default:"subtle"},placeholder:{default:""},size:{default:"sm"},disabled:{type:Boolean,default:!1},error:{default:null},rows:{default:3},required:{type:Boolean,default:!1}},emits:["update:modelValue"],setup(e,{emit:g}){const c=e,v=g,r=q(c.modelValue);return f(r,a=>v("update:modelValue",a)),f(()=>c.modelValue,a=>r.value=a),(a,m)=>(l(),t("div",E,[e.label?(l(),t("label",F,[V(p(e.label)+" ",1),e.required?(l(),t("span",z,"*")):i("",!0)])):i("",!0),h(w("textarea",k(a.$attrs,{class:["fu-textarea fu-form-control",[`fu-textarea--${e.size}`,{"fu-textarea--error":e.error},e.variant?`fu-textarea--${e.variant}`:null]],placeholder:e.placeholder,disabled:e.disabled,rows:e.rows,required:e.required,"onUpdate:modelValue":m[0]||(m[0]=y=>r.value=y)}),null,16,A),[[T,r.value]]),e.error?(l(),t("span",B,p(e.error),1)):i("",!0)]))}}),D=S(b,[["__scopeId","data-v-3beafd95"]]);b.__docgenInfo={exportName:"default",displayName:"FusionTextArea",description:"",tags:{},props:[{name:"modelValue",required:!1,type:{name:"string"},defaultValue:{func:!1,value:'""'}},{name:"label",required:!1,type:{name:"string"},defaultValue:{func:!1,value:'""'}},{name:"variant",required:!1,type:{name:"union",elements:[{name:'"subtle"'},{name:'"outline"'},{name:'"plain"'}]},defaultValue:{func:!1,value:'"subtle"'}},{name:"placeholder",required:!1,type:{name:"string"},defaultValue:{func:!1,value:'""'}},{name:"size",required:!1,type:{name:"union",elements:[{name:'"sm"'},{name:'"md"'},{name:'"lg"'}]},defaultValue:{func:!1,value:'"sm"'}},{name:"disabled",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"error",required:!1,type:{name:"union",elements:[{name:"string"},{name:"null"}]},defaultValue:{func:!1,value:"null"}},{name:"rows",required:!1,type:{name:"number"},defaultValue:{func:!1,value:"3"}},{name:"required",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}],events:[{name:"update:modelValue",type:{names:["string"]}}],sourceFiles:["/Users/xavier/Documents/Websites/Skkido/Fusion-binary-ui/src/components/textArea/FusionTextArea.vue"]};const R={title:"Components/TextArea",component:D,tags:["autodocs"],argTypes:{size:{control:"select",options:["sm","md","lg"]},label:{control:"text"},placeholder:{control:"text"},error:{control:"text"},rows:{control:"number"},required:{control:"boolean"},variant:{control:"select",options:["subtle","outline"]}}},s={args:{label:"Message",placeholder:"Type your message...",variant:"outline"}},n={args:{label:"Message",placeholder:"Type your message...",variant:"subtle"}},o={args:{label:"Comment",placeholder:"Enter comment",error:"Required field"}},u={args:{label:"Feedback",size:"lg",rows:5}},d={args:{label:"Description",placeholder:"Enter description",variant:"subtle",required:!0}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Message",
    placeholder: "Type your message...",
    variant: "outline"
  }
}`,...s.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Message",
    placeholder: "Type your message...",
    variant: "subtle"
  }
}`,...n.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Comment",
    placeholder: "Enter comment",
    error: "Required field"
  }
}`,...o.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Feedback",
    size: "lg",
    rows: 5
  }
}`,...u.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Description",
    placeholder: "Enter description",
    variant: "subtle",
    required: true
  }
}`,...d.parameters?.docs?.source}}};const O=["Outline","Subtle","WithError","Large","Required"];export{u as Large,s as Outline,d as Required,n as Subtle,o as WithError,O as __namedExportsOrder,R as default};
