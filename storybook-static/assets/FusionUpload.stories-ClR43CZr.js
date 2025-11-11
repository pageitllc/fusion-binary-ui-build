import{d as A,r as v,c as o,b as c,F as M,s as O,l as x,g as L,y as _,C as F,n as P,o as i,t as E}from"./iframe-o7SUGoga.js";import{c as C}from"./createLucideIcon-D5kBsy5g.js";import{_ as N}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./preload-helper-Ct5FWWRu.js";/**
 * @license lucide-vue-next v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const w=C("monitor-smartphone",[["path",{d:"M18 8V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h8",key:"10dyio"}],["path",{d:"M10 19v-3.96 3.15",key:"1irgej"}],["path",{d:"M7 19h5",key:"qswx4l"}],["rect",{width:"6",height:"10",x:"16",y:"12",rx:"2",key:"1egngj"}]]),V={class:"fu-upload__content"},B={key:0,class:"fu-upload__previews"},G=["src"],W={key:1,class:"fu-upload__file-fallback"},T={key:1,class:"fu-upload__prompt"},z=["multiple","accept"],S=A({__name:"FusionUpload",props:{multiple:{type:Boolean,default:!1},accept:{type:String,default:"*"}},emits:["filesSelected"],setup(t,{emit:a}){const n=v(!1),r=v([]),y=v(null),h=a;function b(){y.value?.click()}function k(l){const e=l.target;e.files?.length&&(h("filesSelected",e.files),U(e.files))}function D(l){n.value=!1;const e=l.dataTransfer?.files;e?.length&&(h("filesSelected",e),U(e))}function U(l){r.value=[],Array.from(l).forEach(e=>{if(e.type.startsWith("image/")){const s=new FileReader;s.onload=p=>{typeof p.target?.result=="string"&&r.value.push(p.target.result)},s.readAsDataURL(e)}else r.value.push("non-image")})}function I(l){return l.startsWith("data:image")||l.startsWith("http")}return(l,e)=>(i(),o("div",{class:P(["fu-upload",{dragging:n.value}]),onClick:b,onDragover:e[0]||(e[0]=F(s=>n.value=!0,["prevent"])),onDragleave:e[1]||(e[1]=F(s=>n.value=!1,["prevent"])),onDrop:F(D,["prevent"])},[c("div",V,[r.value.length?(i(),o("div",B,[(i(!0),o(M,null,O(r.value,(s,p)=>(i(),o("div",{key:p,class:"fu-upload__preview-item"},[I(s)?(i(),o("img",{key:0,src:s,class:"fu-upload__preview-img",alt:"Preview"},null,8,G)):(i(),o("div",W,[x(_(w),{size:20}),c("span",null,"File "+E(p+1),1)]))]))),128))])):(i(),o("div",T,[x(_(w),{class:"fu-upload__icon",size:22}),L(l.$slots,"description",{},()=>[e[2]||(e[2]=c("p",{class:"fu-upload__text"},"Drag & drop files or click to browse",-1))],!0)])),c("input",{ref_key:"fileInput",ref:y,type:"file",class:"fu-upload__input",multiple:t.multiple,accept:t.accept,onChange:k},null,40,z)])],34))}}),d=N(S,[["__scopeId","data-v-49e0100b"]]);S.__docgenInfo={exportName:"default",displayName:"FusionUpload",description:"",tags:{},props:[{name:"multiple",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"accept",type:{name:"string"},defaultValue:{func:!1,value:'"*"'}}],events:[{name:"filesSelected",type:{names:["FileList"]}}],slots:[{name:"description"}],sourceFiles:["/Users/tommys/Documents/Skkido/Fusion-binary-ui/src/components/fileUploader/FusionUpload.vue"]};const J={title:"Components/Forms/FusionUpload",component:d,tags:["autodocs"],args:{multiple:!1},parameters:{docs:{description:{component:`
The **FusionUpload** component provides a drag-and-drop or file picker interface  
for uploading and previewing files directly within your Fusion Binary UI system.

---

### Example Usage

\`\`\`vue
<template>
  <div style="max-width: 600px; margin: auto;">
    <FusionUpload :multiple="true" @filesSelected="handleFiles">
      <template #description>
        <p>Drag and drop files here or click to browse from your device</p>
      </template>
    </FusionUpload>
  </div>
</template>

<script setup>
import FusionUpload from "@/components/upload/FusionUpload.vue";

function handleFiles(files) {
  console.log("Selected files:", Array.from(files));
}
<\/script>
\`\`\`

---

### Features
- Drag-and-drop or click-to-upload  
- Live image preview support  
- Works with single or multiple file uploads  
- Emits a \`filesSelected\` event with the selected \`FileList\`  
- Uses Fusion Binary design tokens for consistent theming  
- Honors the native \`accept\` attribute (e.g. \`accept="image/*"\` or \`accept=".pdf,.docx"\`)
        `}}},argTypes:{multiple:{description:"Allows selecting and previewing multiple files.",control:{type:"boolean"},table:{category:"Props",defaultValue:{summary:"false"},type:{summary:"boolean"}}},accept:{description:"Restricts selectable file types (e.g. `image/*` or `.pdf,.docx`). Non-matching files are greyed out in the picker.",control:{type:"text"},table:{category:"Props",defaultValue:{summary:"*"},type:{summary:"string"}}},onFilesSelected:{description:"Triggered when one or more files are selected or dropped.",action:"filesSelected",table:{category:"Events"}}}},u={name:"Single File Upload",args:{multiple:!1},render:t=>({components:{FusionUpload:d},setup(){function a(n){console.log("Single file selected:",Array.from(n))}return{args:t,handleFiles:a}},template:`
      <div style="max-width: 600px; margin: auto;">
        <FusionUpload v-bind="args" @filesSelected="handleFiles">
          <template #description>
            <p>Upload a single file from your device</p>
          </template>
        </FusionUpload>
      </div>
    `})},m={name:"Multiple File Upload",args:{multiple:!0},render:t=>({components:{FusionUpload:d},setup(){function a(n){console.log("Multiple files selected:",Array.from(n))}return{args:t,handleFiles:a}},template:`
      <div style="max-width: 600px; margin: auto;">
        <FusionUpload v-bind="args" @filesSelected="handleFiles">
          <template #description>
            <p>Upload multiple images to see live previews in a responsive grid</p>
          </template>
        </FusionUpload>
      </div>
    `})},f={name:"Image-Only Upload",args:{multiple:!1,accept:"image/*"},render:t=>({components:{FusionUpload:d},setup(){function a(n){console.log("Image selected:",Array.from(n))}return{args:t,handleFiles:a}},template:`
      <div style="max-width: 600px; margin: auto;">
        <FusionUpload v-bind="args" @filesSelected="handleFiles">
          <template #description>
            <p>Only image files (JPG, PNG, GIF) are selectable</p>
          </template>
        </FusionUpload>
      </div>
    `})},g={name:"Document-Only Upload",args:{multiple:!0,accept:".pdf,.doc,.docx,.xls,.xlsx"},render:t=>({components:{FusionUpload:d},setup(){function a(n){console.log("Documents selected:",Array.from(n))}return{args:t,handleFiles:a}},template:`
      <div style="max-width: 600px; margin: auto;">
        <FusionUpload v-bind="args" @filesSelected="handleFiles">
          <template #description>
            <p>Upload PDF, Word, or Excel files (non-images are shown as icons)</p>
          </template>
        </FusionUpload>
      </div>
    `})};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  name: "Single File Upload",
  args: {
    multiple: false
  },
  render: args => ({
    components: {
      FusionUpload
    },
    setup() {
      function handleFiles(files: FileList) {
        console.log("Single file selected:", Array.from(files));
      }
      return {
        args,
        handleFiles
      };
    },
    template: \`
      <div style="max-width: 600px; margin: auto;">
        <FusionUpload v-bind="args" @filesSelected="handleFiles">
          <template #description>
            <p>Upload a single file from your device</p>
          </template>
        </FusionUpload>
      </div>
    \`
  })
}`,...u.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  name: "Multiple File Upload",
  args: {
    multiple: true
  },
  render: args => ({
    components: {
      FusionUpload
    },
    setup() {
      function handleFiles(files: FileList) {
        console.log("Multiple files selected:", Array.from(files));
      }
      return {
        args,
        handleFiles
      };
    },
    template: \`
      <div style="max-width: 600px; margin: auto;">
        <FusionUpload v-bind="args" @filesSelected="handleFiles">
          <template #description>
            <p>Upload multiple images to see live previews in a responsive grid</p>
          </template>
        </FusionUpload>
      </div>
    \`
  })
}`,...m.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  name: "Image-Only Upload",
  args: {
    multiple: false,
    accept: "image/*"
  },
  render: args => ({
    components: {
      FusionUpload
    },
    setup() {
      function handleFiles(files: FileList) {
        console.log("Image selected:", Array.from(files));
      }
      return {
        args,
        handleFiles
      };
    },
    template: \`
      <div style="max-width: 600px; margin: auto;">
        <FusionUpload v-bind="args" @filesSelected="handleFiles">
          <template #description>
            <p>Only image files (JPG, PNG, GIF) are selectable</p>
          </template>
        </FusionUpload>
      </div>
    \`
  })
}`,...f.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  name: "Document-Only Upload",
  args: {
    multiple: true,
    accept: ".pdf,.doc,.docx,.xls,.xlsx"
  },
  render: args => ({
    components: {
      FusionUpload
    },
    setup() {
      function handleFiles(files: FileList) {
        console.log("Documents selected:", Array.from(files));
      }
      return {
        args,
        handleFiles
      };
    },
    template: \`
      <div style="max-width: 600px; margin: auto;">
        <FusionUpload v-bind="args" @filesSelected="handleFiles">
          <template #description>
            <p>Upload PDF, Word, or Excel files (non-images are shown as icons)</p>
          </template>
        </FusionUpload>
      </div>
    \`
  })
}`,...g.parameters?.docs?.source}}};const q=["Default","Multiple","ImageOnly","DocumentOnly"];export{u as Default,g as DocumentOnly,f as ImageOnly,m as Multiple,q as __namedExportsOrder,J as default};
