import d from"./FuVideoRenderer-Bee_gudR.js";import"./iframe-D3vfv6YP.js";import"./preload-helper-Ct5FWWRu.js";import"./video-BM-zgExQ.js";import"./createLucideIcon-DKFlsGA7.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const b={title:"Renderer/FuVideoWidget",component:d,tags:["autodocs"],parameters:{layout:"fullscreen",docs:{description:{component:`
A **responsive embedded video renderer** for the FuPayload system.

---

# 1. Purpose
This component is a **pure UI renderer**.  
It takes structured JSON props and renders a video frame.

It supports:
- YouTube
- Vimeo
- Loom
- Any iframe-compatible URL

---

# 2. Behaviour Model

### Empty state
If \`src\` is empty:
- Shows placeholder UI
- No iframe is rendered

### Active state
If \`src\` exists:
- Converts URL into embeddable format
- Renders responsive iframe

---

# 3. Layout System

- \`aspectRatio\`: controls height scaling (e.g. 16:9, 1:1)
- \`contentWidth\`: sm | md | lg | full
- \`borderRadius\`: UI styling only
- Fully responsive via padding-top trick

---

# 4. Supported Providers
- YouTube (watch + short links)
- Vimeo
- Loom
- Direct iframe URLs

---

# 5. Usage Example

\`\`\`vue
<script setup lang="ts">
import FuVideoWidget from "@/components/FuVideoWidget.vue";
<\/script>

<template>
  <FuVideoWidget
    widgetId="video-001"
    src="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
    aspectRatio="16:9"
    contentWidth="md"
    :borderRadius="10"
  />
</template>
\`\`\`
        `}}}},e={args:{src:"",aspectRatio:"16:9",contentWidth:"md",borderRadius:8,backgroundColor:"#f5f7ff"}},t={args:{src:"https://www.youtube.com/watch?v=dQw4w9WgXcQ",aspectRatio:"16:9",contentWidth:"lg",borderRadius:10}},o={args:{src:"https://youtu.be/dQw4w9WgXcQ",aspectRatio:"16:9",contentWidth:"md",borderRadius:10}},r={args:{src:"https://vimeo.com/76979871",aspectRatio:"16:9",contentWidth:"md",borderRadius:10}},s={args:{src:"https://www.loom.com/share/abcd1234",aspectRatio:"16:9",contentWidth:"lg",borderRadius:10}},a={args:{src:"https://www.youtube.com/watch?v=dQw4w9WgXcQ",aspectRatio:"1:1",contentWidth:"sm",borderRadius:12}},n={args:{src:"https://www.youtube.com/watch?v=dQw4w9WgXcQ",aspectRatio:"21:9",contentWidth:"full",borderRadius:0}},c={render:i=>({components:{FuVideoWidget:d},setup(){return{args:i,onPick:()=>{console.log("[video-picker-open]"),alert("Open video picker UI")}}},template:`
      <div style="padding: 24px;">
        <FuVideoWidget v-bind="args" @click="onPick" />
      </div>
    `}),args:{src:"",aspectRatio:"16:9",contentWidth:"md",borderRadius:8}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    src: "",
    aspectRatio: "16:9",
    contentWidth: "md",
    borderRadius: 8,
    backgroundColor: "#f5f7ff"
  }
}`,...e.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    src: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    aspectRatio: "16:9",
    contentWidth: "lg",
    borderRadius: 10
  }
}`,...t.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    src: "https://youtu.be/dQw4w9WgXcQ",
    aspectRatio: "16:9",
    contentWidth: "md",
    borderRadius: 10
  }
}`,...o.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    src: "https://vimeo.com/76979871",
    aspectRatio: "16:9",
    contentWidth: "md",
    borderRadius: 10
  }
}`,...r.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    src: "https://www.loom.com/share/abcd1234",
    aspectRatio: "16:9",
    contentWidth: "lg",
    borderRadius: 10
  }
}`,...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    src: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    aspectRatio: "1:1",
    contentWidth: "sm",
    borderRadius: 12
  }
}`,...a.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    src: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    aspectRatio: "21:9",
    contentWidth: "full",
    borderRadius: 0
  }
}`,...n.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: args => ({
    components: {
      FuVideoWidget
    },
    setup() {
      const onPick = () => {
        console.log("[video-picker-open]");
        alert("Open video picker UI");
      };
      return {
        args,
        onPick
      };
    },
    template: \`
      <div style="padding: 24px;">
        <FuVideoWidget v-bind="args" @click="onPick" />
      </div>
    \`
  }),
  args: {
    src: "",
    aspectRatio: "16:9",
    contentWidth: "md",
    borderRadius: 8
  }
}`,...c.parameters?.docs?.source}}};const R=["EmptyState","YouTube","YouTubeShort","Vimeo","Loom","Square","Cinematic","InteractiveEmpty"];export{n as Cinematic,e as EmptyState,c as InteractiveEmpty,s as Loom,a as Square,r as Vimeo,t as YouTube,o as YouTubeShort,R as __namedExportsOrder,b as default};
