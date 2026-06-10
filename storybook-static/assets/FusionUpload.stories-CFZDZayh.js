import{F as r}from"./FusionUpload-B1l8koyS.js";import"./iframe-D3vfv6YP.js";import"./preload-helper-Ct5FWWRu.js";import"./createLucideIcon-DKFlsGA7.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const g={title:"Components/FusionUpload",component:r,tags:["autodocs"],args:{multiple:!1,accept:"*",maxFiles:1/0,maxFileSizeMB:1/0},parameters:{docs:{description:{component:`
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
        `}}},argTypes:{multiple:{description:"Allow selecting, previewing, and managing multiple files.",control:{type:"boolean"},table:{category:"Props",defaultValue:{summary:"false"},type:{summary:"boolean"}}},accept:{description:"Restricts selectable file types (e.g. `image/*`, `.pdf,.docx`).",control:{type:"text"},table:{category:"Props",defaultValue:{summary:"*"},type:{summary:"string"}}},maxFiles:{description:"Maximum number of files allowed to upload.",control:{type:"number"},table:{category:"Props",defaultValue:{summary:"Infinity"},type:{summary:"number"}}},maxFileSizeMB:{description:"Maximum size in megabytes allowed for each file.",control:{type:"number"},table:{category:"Props",defaultValue:{summary:"Infinity"},type:{summary:"number"}}},onFilesSelected:{description:"Emitted whenever files are added or removed. Returns a File array.",action:"filesSelected",table:{category:"Events",type:{summary:"(files: File[]) => void"}}},onUploadError:{description:"Emitted when a file is rejected due to size or max files limit. Returns an error message string.",action:"uploadError",table:{category:"Events",type:{summary:"(message: string) => void"}}}}},o={name:"Single File Upload",args:{multiple:!1},render:n=>({components:{FusionUpload:r},setup(){function a(e){console.log("Selected file:",e)}function l(e){console.warn("Upload error:",e)}return{args:n,handleFiles:a,handleError:l}},template:`
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
    `})},i={name:"Multiple File Upload",args:{multiple:!0,maxFiles:5,maxFileSizeMB:5},render:n=>({components:{FusionUpload:r},setup(){function a(e){console.log("Current files:",e)}function l(e){console.warn("Upload error:",e)}return{args:n,handleFiles:a,handleError:l}},template:`
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
    `})},s={name:"Image-Only Upload",args:{multiple:!0,accept:"image/*",maxFiles:10,maxFileSizeMB:3},render:n=>({components:{FusionUpload:r},setup(){function a(e){console.log("Images:",e)}function l(e){console.warn("Upload error:",e)}return{args:n,handleFiles:a,handleError:l}},template:`
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
    `})},t={name:"Document Upload",args:{multiple:!0,accept:".pdf,.doc,.docx,.xls,.xlsx",maxFiles:8,maxFileSizeMB:4},render:n=>({components:{FusionUpload:r},setup(){function a(e){console.log("Documents:",e)}function l(e){console.warn("Upload error:",e)}return{args:n,handleFiles:a,handleError:l}},template:`
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
    `})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...o.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
}`,...i.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...t.parameters?.docs?.source}}};const f=["Default","Multiple","ImageOnly","DocumentOnly"];export{o as Default,t as DocumentOnly,s as ImageOnly,i as Multiple,f as __namedExportsOrder,g as default};
