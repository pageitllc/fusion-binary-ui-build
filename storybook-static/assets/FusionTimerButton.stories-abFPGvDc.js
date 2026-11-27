import{r as p}from"./iframe-DLJy-DHW.js";import{F as e}from"./FusionTimerButton-B_HL3Y00.js";import"./preload-helper-Ct5FWWRu.js";import"./clock-D6A6Xg7P.js";import"./createLucideIcon-CURt8gZv.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const F={title:"Fusion/Navigation/FusionTimerButton",component:e,tags:["autodocs"],parameters:{docs:{description:{component:"\nThe clock button in the top bar. Plain when nothing runs. Green, with the running time and a pulsing dot, when a timer is on.\n\n- `running` and `elapsed`: show the live time.\n- `onDark`: the look for the dark top bar (default). Turn it off for a light bar.\n- `expanded`: tells screen readers the panel is open.\n- Emits `click`. Open a **FusionTimePanel** from it.\n"}}},argTypes:{running:{control:"boolean"},onDark:{control:"boolean"},elapsed:{control:"text"}}},i=(n,r=!0)=>`<div style="padding:10px 16px;display:inline-flex;gap:8px;align-items:center;border-radius:12px;background:${r?"#240a0a":"#f4f4f5"}">${n}</div>`,t={args:{running:!1},render:n=>({components:{FusionTimerButton:e},setup:()=>({args:n}),template:i('<FusionTimerButton v-bind="args" />')})},a={args:{running:!0,elapsed:"00:42:17"},render:n=>({components:{FusionTimerButton:e},setup:()=>({args:n}),template:i('<FusionTimerButton v-bind="args" />')})},s={name:"On a light bar",args:{onDark:!1,running:!1},render:n=>({components:{FusionTimerButton:e},setup:()=>({args:n}),template:i('<FusionTimerButton v-bind="args" /><FusionTimerButton v-bind="args" running elapsed="01:05:09" />',!1)})},o={name:"Counting (click to start and stop)",render:()=>({components:{FusionTimerButton:e},setup(){const n=p(!1),r=p(0);let u=null;const m=l=>[Math.floor(l/3600),Math.floor(l%3600/60),l%60].map(g=>String(g).padStart(2,"0")).join(":");function c(){n.value=!n.value,n.value?u=setInterval(()=>r.value++,1e3):u&&clearInterval(u)}return{running:n,secs:r,fmt:m,toggle:c}},template:i('<FusionTimerButton :running="running" :elapsed="fmt(secs)" @click="toggle" />')})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    running: false
  },
  render: args => ({
    components: {
      FusionTimerButton
    },
    setup: () => ({
      args
    }),
    template: bar(\`<FusionTimerButton v-bind="args" />\`)
  })
}`,...t.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    running: true,
    elapsed: "00:42:17"
  },
  render: args => ({
    components: {
      FusionTimerButton
    },
    setup: () => ({
      args
    }),
    template: bar(\`<FusionTimerButton v-bind="args" />\`)
  })
}`,...a.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  name: "On a light bar",
  args: {
    onDark: false,
    running: false
  },
  render: args => ({
    components: {
      FusionTimerButton
    },
    setup: () => ({
      args
    }),
    template: bar(\`<FusionTimerButton v-bind="args" /><FusionTimerButton v-bind="args" running elapsed="01:05:09" />\`, false)
  })
}`,...s.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "Counting (click to start and stop)",
  render: () => ({
    components: {
      FusionTimerButton
    },
    setup() {
      const running = ref(false);
      const secs = ref(0);
      let id: ReturnType<typeof setInterval> | null = null;
      const fmt = (s: number) => [Math.floor(s / 3600), Math.floor(s % 3600 / 60), s % 60].map(n => String(n).padStart(2, "0")).join(":");
      function toggle() {
        running.value = !running.value;
        if (running.value) id = setInterval(() => secs.value++, 1000);else if (id) clearInterval(id);
      }
      return {
        running,
        secs,
        fmt,
        toggle
      };
    },
    template: bar(\`<FusionTimerButton :running="running" :elapsed="fmt(secs)" @click="toggle" />\`)
  })
}`,...o.parameters?.docs?.source}}};const B=["Idle","Running","OnALightBar","Live"];export{t as Idle,o as Live,s as OnALightBar,a as Running,B as __namedExportsOrder,F as default};
