import{s as N,r as g,a as s,g as m,F as $,h as P,b,y as O,u as _,e as v,l as R,j as t,t as j}from"./iframe-4anGkjM3.js";import{c as A}from"./createLucideIcon-MAVkZFkt.js";import{_ as L}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./preload-helper-Ct5FWWRu.js";/**
 * @license lucide-vue-next v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const M=A("monitor-smartphone",[["path",{d:"M18 8V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h8",key:"10dyio"}],["path",{d:"M10 19v-3.96 3.15",key:"1irgej"}],["path",{d:"M7 19h5",key:"qswx4l"}],["rect",{width:"6",height:"10",x:"16",y:"12",rx:"2",key:"1egngj"}]]),T={class:"fu-upload__content"},H={key:0,class:"fu-upload__previews"},W=["onClick"],q=["src"],G={key:1,class:"fu-upload__file-fallback"},J={key:1,class:"fu-upload__prompt"},K=["multiple","accept"],k=N({__name:"FusionUpload",props:{multiple:{type:Boolean,default:!1},accept:{type:String,default:"*"},maxFiles:{type:Number,default:1/0},maxFileSizeMB:{type:Number,default:1/0}},emits:["filesSelected","uploadError"],setup(o,{emit:i}){const l=o,e=i,f=g(!1),E=g(null),d=g([]),p=g([]);function I(){return typeof crypto<"u"&&crypto.randomUUID?crypto.randomUUID():`file_${Date.now()}_${Math.random().toString(36).slice(2,9)}`}function B(){E.value?.click()}function z(r){const n=r.target;n.files?.length&&(S(n.files),n.value="")}function D(r){f.value=!1;const n=r.dataTransfer?.files;n?.length&&S(n)}function S(r){const n=Array.from(r);l.multiple||(d.value=[],p.value=[]);for(const a of n){const U=l.maxFileSizeMB*1024*1024;if(a.size>U){const u=`File "${a.name}" exceeds max size of ${l.maxFileSizeMB} MB.`;e("uploadError",u);continue}if(d.value.length>=l.maxFiles){const u=`Maximum of ${l.maxFiles} files allowed.`;e("uploadError",u);break}d.value.push(a);const w=I();if(a.type.startsWith("image/")){const u=new FileReader;u.onload=C=>{p.value.push({id:w,src:C.target?.result,file:a,isImage:!0})},u.readAsDataURL(a)}else p.value.push({id:w,src:"",file:a,isImage:!1})}e("filesSelected",d.value)}function V(r){d.value.splice(r,1),p.value.splice(r,1),e("filesSelected",d.value)}return(r,n)=>(t(),s("div",{class:R(["fu-upload",{dragging:f.value}]),onClick:B,onDragover:n[0]||(n[0]=v(a=>f.value=!0,["prevent"])),onDragleave:n[1]||(n[1]=v(a=>f.value=!1,["prevent"])),onDrop:v(D,["prevent"])},[m("div",T,[p.value.length?(t(),s("div",H,[(t(!0),s($,null,P(p.value,(a,U)=>(t(),s("div",{key:a.id,class:"fu-upload__preview-item"},[m("button",{class:"fu-upload__remove",onClick:v(w=>V(U),["stop"])}," ✕ ",8,W),a.isImage?(t(),s("img",{key:0,src:a.src,class:"fu-upload__preview-img",alt:"Preview"},null,8,q)):(t(),s("div",G,[b(_(M),{size:20}),m("span",null,j(a.file.name),1)]))]))),128))])):(t(),s("div",J,[b(_(M),{class:"fu-upload__icon",size:22}),O(r.$slots,"description",{},()=>[n[2]||(n[2]=m("p",{class:"fu-upload__text"}," Drag & drop files or click to browse ",-1))],!0)])),m("input",{ref_key:"fileInput",ref:E,type:"file",class:"fu-upload__input",multiple:o.multiple,accept:o.accept,onChange:z},null,40,K)])],34))}}),c=L(k,[["__scopeId","data-v-1b1249ff"]]);k.__docgenInfo={exportName:"default",displayName:"FusionUpload",description:"",tags:{},props:[{name:"multiple",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"accept",type:{name:"string"},defaultValue:{func:!1,value:'"*"'}},{name:"maxFiles",type:{name:"number"},defaultValue:{func:!1,value:"Infinity"}},{name:"maxFileSizeMB",type:{name:"number"},defaultValue:{func:!1,value:"Infinity"}}],events:[{name:"filesSelected",type:{names:["Array"],elements:[{name:"File"}]}},{name:"uploadError",type:{names:["string"]}}],slots:[{name:"description"}],sourceFiles:["/Users/xavier/Documents/Websites/Skkido/Fusion-binary-ui/src/components/fileUploader/FusionUpload.vue"]};const ne={title:"Components/FusionUpload",component:c,tags:["autodocs"],args:{multiple:!1,accept:"*",maxFiles:1/0,maxFileSizeMB:1/0},parameters:{docs:{description:{component:`
The **FusionUpload** component provides a drag-and-drop or file picker interface  
for uploading **one or multiple files** with live previews and per-file removal.

Files are accumulated when \`multiple\` is enabled, and each preview includes a  
remove (✕) action to delete individual files before submission.

---

### Example Usage

\`\`\`vue
<template>
  <FusionUpload
    multiple
    accept="image/*"
    :maxFiles="3"
    :maxFileSizeMB="2"
    @filesSelected="handleFiles"
    @uploadError="handleError"
  />
</template>

<script setup>
function handleFiles(files) {
  console.log(files); // File[]
}
function handleError(message) {
  console.warn("Upload error:", message);
}
<\/script>
\`\`\`

---

### Features
- Drag-and-drop or click-to-upload
- Supports single or multiple file uploads
- Max files and max file size restrictions
- Live image previews in a responsive grid
- Per-file removal before upload
- Non-image fallback preview
- Emits a \`filesSelected\` event with a **File[]**
- Emits an \`uploadError\` event with a **string** message on validation failures
- Honors native \`accept\` restrictions
- Fully themeable with Fusion Binary design tokens
        `}}},argTypes:{multiple:{description:"Allow selecting, previewing, and managing multiple files.",control:{type:"boolean"},table:{category:"Props",defaultValue:{summary:"false"},type:{summary:"boolean"}}},accept:{description:"Restricts selectable file types (e.g. `image/*`, `.pdf,.docx`).",control:{type:"text"},table:{category:"Props",defaultValue:{summary:"*"},type:{summary:"string"}}},maxFiles:{description:"Maximum number of files allowed to upload.",control:{type:"number"},table:{category:"Props",defaultValue:{summary:"Infinity"},type:{summary:"number"}}},maxFileSizeMB:{description:"Maximum size in megabytes allowed for each file.",control:{type:"number"},table:{category:"Props",defaultValue:{summary:"Infinity"},type:{summary:"number"}}},onFilesSelected:{description:"Emitted whenever files are added or removed. Returns a File array.",action:"filesSelected",table:{category:"Events",type:{summary:"(files: File[]) => void"}}},onUploadError:{description:"Emitted when a file is rejected due to size or max files limit. Returns an error message string.",action:"uploadError",table:{category:"Events",type:{summary:"(message: string) => void"}}}}},h={name:"Single File Upload",args:{multiple:!1},render:o=>({components:{FusionUpload:c},setup(){function i(e){console.log("Selected file:",e)}function l(e){console.warn("Upload error:",e)}return{args:o,handleFiles:i,handleError:l}},template:`
      <div style="max-width: 600px; margin: auto;">
        <FusionUpload
          v-bind="args"
          @filesSelected="handleFiles"
          @uploadError="handleError"
        >
          <template #description>
            <p>Select a single file from your device</p>
          </template>
        </FusionUpload>
      </div>
    `})},F={name:"Multiple File Upload",args:{multiple:!0,maxFiles:5,maxFileSizeMB:5},render:o=>({components:{FusionUpload:c},setup(){function i(e){console.log("Current files:",e)}function l(e){console.warn("Upload error:",e)}return{args:o,handleFiles:i,handleError:l}},template:`
      <div style="max-width: 600px; margin: auto;">
        <FusionUpload
          v-bind="args"
          @filesSelected="handleFiles"
          @uploadError="handleError"
        >
          <template #description>
            <p>
              Upload multiple files (max 5 files, max 5 MB each). Each preview includes a remove button.
            </p>
          </template>
        </FusionUpload>
      </div>
    `})},y={name:"Image-Only Upload",args:{multiple:!0,accept:"image/*",maxFiles:10,maxFileSizeMB:3},render:o=>({components:{FusionUpload:c},setup(){function i(e){console.log("Images:",e)}function l(e){console.warn("Upload error:",e)}return{args:o,handleFiles:i,handleError:l}},template:`
      <div style="max-width: 600px; margin: auto;">
        <FusionUpload
          v-bind="args"
          @filesSelected="handleFiles"
          @uploadError="handleError"
        >
          <template #description>
            <p>Upload images only. Previews are shown in a grid. Max 10 files, 3MB each.</p>
          </template>
        </FusionUpload>
      </div>
    `})},x={name:"Document Upload",args:{multiple:!0,accept:".pdf,.doc,.docx,.xls,.xlsx",maxFiles:8,maxFileSizeMB:4},render:o=>({components:{FusionUpload:c},setup(){function i(e){console.log("Documents:",e)}function l(e){console.warn("Upload error:",e)}return{args:o,handleFiles:i,handleError:l}},template:`
      <div style="max-width: 600px; margin: auto;">
        <FusionUpload
          v-bind="args"
          @filesSelected="handleFiles"
          @uploadError="handleError"
        >
          <template #description>
            <p>
              Upload documents. Non-image files are shown with a fallback preview.
              Max 8 files, 4MB each.
            </p>
          </template>
        </FusionUpload>
      </div>
    `})};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  name: "Single File Upload",
  args: {
    multiple: false
  },
  render: args => ({
    components: {
      FusionUpload
    },
    setup() {
      function handleFiles(files: File[]) {
        console.log("Selected file:", files);
      }
      function handleError(message: string) {
        console.warn("Upload error:", message);
      }
      return {
        args,
        handleFiles,
        handleError
      };
    },
    template: \`
      <div style="max-width: 600px; margin: auto;">
        <FusionUpload
          v-bind="args"
          @filesSelected="handleFiles"
          @uploadError="handleError"
        >
          <template #description>
            <p>Select a single file from your device</p>
          </template>
        </FusionUpload>
      </div>
    \`
  })
}`,...h.parameters?.docs?.source}}};F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  name: "Multiple File Upload",
  args: {
    multiple: true,
    maxFiles: 5,
    maxFileSizeMB: 5
  },
  render: args => ({
    components: {
      FusionUpload
    },
    setup() {
      function handleFiles(files: File[]) {
        console.log("Current files:", files);
      }
      function handleError(message: string) {
        console.warn("Upload error:", message);
      }
      return {
        args,
        handleFiles,
        handleError
      };
    },
    template: \`
      <div style="max-width: 600px; margin: auto;">
        <FusionUpload
          v-bind="args"
          @filesSelected="handleFiles"
          @uploadError="handleError"
        >
          <template #description>
            <p>
              Upload multiple files (max 5 files, max 5 MB each). Each preview includes a remove button.
            </p>
          </template>
        </FusionUpload>
      </div>
    \`
  })
}`,...F.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  name: "Image-Only Upload",
  args: {
    multiple: true,
    accept: "image/*",
    maxFiles: 10,
    maxFileSizeMB: 3
  },
  render: args => ({
    components: {
      FusionUpload
    },
    setup() {
      function handleFiles(files: File[]) {
        console.log("Images:", files);
      }
      function handleError(message: string) {
        console.warn("Upload error:", message);
      }
      return {
        args,
        handleFiles,
        handleError
      };
    },
    template: \`
      <div style="max-width: 600px; margin: auto;">
        <FusionUpload
          v-bind="args"
          @filesSelected="handleFiles"
          @uploadError="handleError"
        >
          <template #description>
            <p>Upload images only. Previews are shown in a grid. Max 10 files, 3MB each.</p>
          </template>
        </FusionUpload>
      </div>
    \`
  })
}`,...y.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  name: "Document Upload",
  args: {
    multiple: true,
    accept: ".pdf,.doc,.docx,.xls,.xlsx",
    maxFiles: 8,
    maxFileSizeMB: 4
  },
  render: args => ({
    components: {
      FusionUpload
    },
    setup() {
      function handleFiles(files: File[]) {
        console.log("Documents:", files);
      }
      function handleError(message: string) {
        console.warn("Upload error:", message);
      }
      return {
        args,
        handleFiles,
        handleError
      };
    },
    template: \`
      <div style="max-width: 600px; margin: auto;">
        <FusionUpload
          v-bind="args"
          @filesSelected="handleFiles"
          @uploadError="handleError"
        >
          <template #description>
            <p>
              Upload documents. Non-image files are shown with a fallback preview.
              Max 8 files, 4MB each.
            </p>
          </template>
        </FusionUpload>
      </div>
    \`
  })
}`,...x.parameters?.docs?.source}}};const ae=["Default","Multiple","ImageOnly","DocumentOnly"];export{h as Default,x as DocumentOnly,y as ImageOnly,F as Multiple,ae as __namedExportsOrder,ne as default};
