import{q as C,c as F,s as D,j as p,o as s,d as S,b as i,t as f,i as h,F as q,g as z,f as b,r as v}from"./iframe-DLJy-DHW.js";import{F as O}from"./FuPopover-CNNK0jy6.js";import{F as H}from"./FusionButton-CSaeGhtG.js";import{F as L}from"./FusionCheckbox-rvjkAkyC.js";import{_ as A}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{S as T}from"./sliders-horizontal-CEMGihAZ.js";import{c as N}from"./createLucideIcon-CURt8gZv.js";import"./preload-helper-Ct5FWWRu.js";/**
 * @license @lucide/vue v1.54.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const j={name:"columns-3",size:24,node:[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M9 3v18",key:"fh3hqa"}],["path",{d:"M15 3v18",key:"14nvp0"}]],aliases:["panels-left-right"]},B=N(j),_=["aria-label"],P={key:0,class:"fu-checkbox-dropdown__title"},$={key:0,class:"fu-checkbox-dropdown__desc"},x=C({__name:"FusionCheckboxDropdown",props:{options:{},modelValue:{default:()=>[]},text:{default:"Options"},icon:{default:null},showCount:{type:Boolean,default:!0},title:{default:""},size:{default:"sm"},variant:{default:"ghost"},align:{default:"left"},width:{default:"240px"},maxHeight:{default:"360px"},ariaLabel:{default:""}},emits:["update:modelValue"],setup(e,{emit:c}){const t=e,g=c,w=`fu-cbd-${Math.random().toString(36).slice(2,8)}`,y=o=>t.modelValue.includes(o),k=F(()=>t.showCount&&t.modelValue.length?`${t.text} · ${t.modelValue.length}`:t.text);function V(o,m){const n=t.modelValue.filter(a=>a!==o),u=m?t.options.map(a=>a.value).filter(a=>a===o||n.includes(a)):n;g("update:modelValue",u)}return(o,m)=>(s(),D(O,{align:e.align,side:"bottom",width:e.width,maxHeight:e.maxHeight},{trigger:p(()=>[b(H,{size:e.size,text:k.value,icon:e.icon,variant:e.variant,"aria-label":e.ariaLabel||e.text},null,8,["size","text","icon","variant","aria-label"])]),default:p(()=>[S("div",{class:"fu-checkbox-dropdown__menu",role:"group","aria-label":e.ariaLabel||e.text},[e.title?(s(),i("span",P,f(e.title),1)):h("",!0),(s(!0),i(q,null,z(e.options,n=>(s(),i("div",{key:String(n.value),class:"fu-checkbox-dropdown__item"},[b(L,{id:`${w}-${n.value}`,size:"sm",label:n.label,disabled:n.disabled,modelValue:y(n.value),"onUpdate:modelValue":u=>V(n.value,u)},null,8,["id","label","disabled","modelValue","onUpdate:modelValue"]),n.description?(s(),i("span",$,f(n.description),1)):h("",!0)]))),128))],8,_)]),_:1},8,["align","width","maxHeight"]))}}),d=A(x,[["__scopeId","data-v-2b5f43c8"]]);x.__docgenInfo={exportName:"default",displayName:"FusionCheckboxDropdown",description:"",tags:{},props:[{name:"options",required:!0,type:{name:"Array",elements:[{name:"CheckboxDropdownOption"}]}},{name:"modelValue",description:"The values that are on",required:!1,type:{name:"Array",elements:[{name:"TSParenthesizedType"}]},defaultValue:{func:!1,value:"() => []"}},{name:"text",description:"The button's text",required:!1,type:{name:"string"},defaultValue:{func:!1,value:'"Options"'}},{name:"icon",required:!1,type:{name:"union",elements:[{name:"Component"},{name:"null"}]},defaultValue:{func:!1,value:"null"}},{name:"showCount",description:'Show how many are on, as "View · 3"',required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"true"}},{name:"title",description:"A small heading inside the menu",required:!1,type:{name:"string"},defaultValue:{func:!1,value:'""'}},{name:"size",required:!1,type:{name:"union",elements:[{name:'"sm"'},{name:'"md"'}]},defaultValue:{func:!1,value:'"sm"'}},{name:"variant",required:!1,type:{name:"union",elements:[{name:'"solid"'},{name:'"subtle"'},{name:'"outline"'},{name:'"ghost"'}]},defaultValue:{func:!1,value:'"ghost"'}},{name:"align",required:!1,type:{name:"FuPopoverAlign"},defaultValue:{func:!1,value:'"left"'}},{name:"width",required:!1,type:{name:"string"},defaultValue:{func:!1,value:'"240px"'}},{name:"maxHeight",required:!1,type:{name:"string"},defaultValue:{func:!1,value:'"360px"'}},{name:"ariaLabel",required:!1,type:{name:"string"},defaultValue:{func:!1,value:'""'}}],events:[{name:"update:modelValue",type:{names:["Array"],elements:[{name:"TSParenthesizedType"}]}}],sourceFiles:["/Users/xavier/Documents/Websites/Skkido/Fusion-binary-ui/src/components/checkboxDropdown/FusionCheckboxDropdown.vue"]};const R={title:"Fusion/Menus/FusionCheckboxDropdown",component:d,tags:["autodocs"],parameters:{docs:{description:{component:'\nA button that opens a list of checkboxes. Use it to tuck away options that can be on together\n(view options, visible columns, quick filters) so a toolbar stays clean.\n\n- `v-model` is the list of values that are on.\n- The button shows how many are on ("View · 3"); turn that off with `showCount: false`.\n- Each option can have a `description` line and can be `disabled`.\n        '}}}},M=[{value:"bands",label:"Project bands"},{value:"gridlines",label:"Week gridlines"},{value:"rowHover",label:"Full-row hover"},{value:"smartLabels",label:"Smart bar labels"}],l={render:()=>({components:{FusionCheckboxDropdown:d},setup(){return{on:v(["bands","gridlines","rowHover"]),viewOptions:M,SlidersHorizontal:T}},template:`<div style="padding:16px;display:flex;justify-content:flex-end;min-height:240px">
      <FusionCheckboxDropdown v-model="on" :options="viewOptions" text="View" :icon="SlidersHorizontal" align="right" />
    </div>
    <p style="font-size:13px;padding:0 16px">On: <b>{{ on.join(', ') || 'none' }}</b></p>`})},r={render:()=>({components:{FusionCheckboxDropdown:d},setup(){return{on:v(["name","status"]),options:[{value:"name",label:"Name",description:"Always shown",disabled:!0},{value:"status",label:"Status"},{value:"due",label:"Due date",description:"Late dates show in red"},{value:"hours",label:"Logged / estimate"}],Columns3:B}},template:`<div style="padding:16px;min-height:280px">
      <FusionCheckboxDropdown v-model="on" :options="options" text="Columns" title="Show columns" :icon="Columns3" variant="outline" />
    </div>`})};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      FusionCheckboxDropdown
    },
    setup() {
      const on = ref(["bands", "gridlines", "rowHover"]);
      return {
        on,
        viewOptions,
        SlidersHorizontal
      };
    },
    template: \`<div style="padding:16px;display:flex;justify-content:flex-end;min-height:240px">
      <FusionCheckboxDropdown v-model="on" :options="viewOptions" text="View" :icon="SlidersHorizontal" align="right" />
    </div>
    <p style="font-size:13px;padding:0 16px">On: <b>{{ on.join(', ') || 'none' }}</b></p>\`
  })
}`,...l.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      FusionCheckboxDropdown
    },
    setup() {
      const on = ref(["name", "status"]);
      const options = [{
        value: "name",
        label: "Name",
        description: "Always shown",
        disabled: true
      }, {
        value: "status",
        label: "Status"
      }, {
        value: "due",
        label: "Due date",
        description: "Late dates show in red"
      }, {
        value: "hours",
        label: "Logged / estimate"
      }];
      return {
        on,
        options,
        Columns3
      };
    },
    template: \`<div style="padding:16px;min-height:280px">
      <FusionCheckboxDropdown v-model="on" :options="options" text="Columns" title="Show columns" :icon="Columns3" variant="outline" />
    </div>\`
  })
}`,...r.parameters?.docs?.source}}};const X=["ViewOptions","WithDescriptions"];export{l as ViewOptions,r as WithDescriptions,X as __namedExportsOrder,R as default};
