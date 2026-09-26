import{d as V,c as h,b as s,g as f,i as y,A as g,n as C,j as R,o as l,q as F,t as B,r as a}from"./iframe-DQPhCJt3.js";import{_}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./preload-helper-Ct5FWWRu.js";const $=["name","value","disabled","checked","aria-readonly"],q={class:"fu-button-tab__control","aria-hidden":"true"},D={key:0,class:"fu-button-tab__dot"},O={class:"fu-button-tab__content"},P={key:0,class:"fu-button-tab__title"},I={key:1,class:"fu-button-tab__description"},T=V({__name:"FusionButtonTab",props:{modelValue:{},value:{},title:{default:void 0},description:{default:void 0},name:{default:void 0},size:{default:"md"},disabled:{type:Boolean,default:!1},readonly:{type:Boolean,default:!1},color:{default:void 0}},emits:["update:modelValue"],setup(e,{emit:v}){const n=e,w=v,b=h(()=>n.modelValue===n.value),k=h(()=>n.color?{"--fu-button-tab-accent":n.color}:{});function z(o){n.readonly&&o.preventDefault()}function S(){n.readonly||w("update:modelValue",n.value)}return(o,L)=>(l(),s("label",{class:R(["fu-button-tab",[`fu-button-tab--${e.size}`,{"is-checked":b.value,"is-disabled":e.disabled,"is-readonly":e.readonly}]]),style:C(k.value)},[f("input",{type:"radio",class:"fu-button-tab__input",name:e.name,value:e.value,disabled:e.disabled,checked:b.value,"aria-readonly":e.readonly,onClick:z,onChange:S},null,40,$),f("span",q,[b.value?(l(),s("span",D)):y("",!0)]),f("span",O,[e.title||o.$slots.title?(l(),s("span",P,[g(o.$slots,"title",{},()=>[F(B(e.title),1)],!0)])):y("",!0),e.description||o.$slots.description?(l(),s("span",I,[g(o.$slots,"description",{},()=>[F(B(e.description),1)],!0)])):y("",!0),g(o.$slots,"default",{},void 0,!0)])],6))}}),t=_(T,[["__scopeId","data-v-c6dff9b5"]]);T.__docgenInfo={exportName:"default",displayName:"FusionButtonTab",description:"",tags:{},props:[{name:"modelValue",required:!1,type:{name:"union",elements:[{name:"string"},{name:"number"}]}},{name:"value",required:!0,type:{name:"union",elements:[{name:"string"},{name:"number"}]}},{name:"title",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"undefined"}},{name:"description",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"undefined"}},{name:"name",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"undefined"}},{name:"size",required:!1,type:{name:"Size"},defaultValue:{func:!1,value:'"md"'}},{name:"disabled",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"readonly",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"color",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"undefined"}}],events:[{name:"update:modelValue"}],slots:[{name:"title"},{name:"description"},{name:"default"}],sourceFiles:["/Users/xavier/Documents/Websites/Skkido/Fusion-binary-ui/src/components/buttonTab/FusionButtonTab.vue"]};const E={title:"Fusion/Forms/Selection/FusionButtonTab",component:t,tags:["autodocs"],parameters:{docs:{description:{component:`
FusionButtonTab is a card-style radio option with a **title** and **description**.

It selects **one option from a group**, like FusionRadio, but the whole card is clickable.

---

## Features

- Title + description (props or slots)
- Controlled \`modelValue\`
- Stretches to fill its container on its own
- Inside a \`display:flex\` row, every tab takes an equal share of the width and the title/description wrap to fit
- Sizes: sm, md, lg
- Disabled and readonly states
- Custom accent \`color\`
- Keyboard accessible (native radio underneath)

---

## Basic Usage

\`\`\`vue
<FusionButtonTab
  v-model="strategy"
  value="round-robin"
  title="Round robin"
  description="Distribute new leads evenly across reps, one at a time."
/>
\`\`\`

---

## In a flex row

\`\`\`vue
<div style="display:flex; gap:12px;">
  <FusionButtonTab v-model="strategy" value="round-robin" title="Round robin" description="..." />
  <FusionButtonTab v-model="strategy" value="manual" title="Manual assignment" description="..." />
  <FusionButtonTab v-model="strategy" value="load" title="Load balanced" description="..." />
</div>
\`\`\`
        `}}},argTypes:{value:{control:"text",description:"The value associated with this option."},title:{control:"text",description:"Bold heading text."},description:{control:"text",description:"Muted supporting text under the title."},size:{control:"select",options:["sm","md","lg"],description:"Controls padding, radio size and font sizes."},disabled:{control:"boolean",description:"Disables the option."},readonly:{control:"boolean",description:"Visible but not clickable. Unlike disabled, it isn't dimmed."},color:{control:"color",description:"Accent color for the ring, dot, border and tint once checked."}}},x=[{value:"round-robin",title:"Round robin",description:"Distribute new leads evenly across reps, one at a time."},{value:"manual",title:"Manual assignment",description:"Leads stay unassigned until a manager picks them up."},{value:"load",title:"Load balanced",description:"Send each new lead to whoever has the fewest open leads."}],i={args:{value:"round-robin",title:"Round robin",description:"Distribute new leads evenly across reps, one at a time.",size:"md",disabled:!1,readonly:!1},render:e=>({components:{FusionButtonTab:t},setup(){const v=a("round-robin");return{args:e,selected:v}},template:`
      <div style="max-width:720px;">
        <FusionButtonTab
          v-bind="args"
          :modelValue="selected"
          @update:modelValue="selected = $event"
        />
        <div style="margin-top:16px; font-size:14px;">Selected: {{ selected }}</div>
      </div>
    `})},d={render:()=>({components:{FusionButtonTab:t},setup(){return{selected:a("round-robin"),leadOptions:x}},template:`
      <div style="display:flex; flex-direction:column; gap:12px; max-width:720px;">
        <FusionButtonTab
          v-for="opt in leadOptions"
          :key="opt.value"
          v-model="selected"
          name="stacked"
          :value="opt.value"
          :title="opt.title"
          :description="opt.description"
        />
        <div style="font-size:14px;">Selected: {{ selected }}</div>
      </div>
    `})},r={render:()=>({components:{FusionButtonTab:t},setup(){return{selected:a("load"),leadOptions:x}},template:`
      <div style="display:flex; gap:12px; max-width:900px;">
        <FusionButtonTab
          v-for="opt in leadOptions"
          :key="opt.value"
          v-model="selected"
          name="flex-row"
          :value="opt.value"
          :title="opt.title"
          :description="opt.description"
        />
      </div>
    `})},u={render:()=>({components:{FusionButtonTab:t},setup(){return{selected:a("manual"),leadOptions:x}},template:`
      <div style="
        display:flex; gap:12px; width:700px; min-width:240px; max-width:100%;
        resize:horizontal; overflow:auto; padding:8px;
        border:1px dashed #cbd5e1; border-radius:8px;
      ">
        <FusionButtonTab
          v-for="opt in leadOptions"
          :key="opt.value"
          v-model="selected"
          name="resizable"
          :value="opt.value"
          :title="opt.title"
          :description="opt.description"
        />
      </div>
    `})},c={render:()=>({components:{FusionButtonTab:t},setup(){return{selected:a("md")}},template:`
      <div style="display:flex; gap:12px; max-width:900px; align-items:flex-start;">
        <FusionButtonTab v-model="selected" value="sm" size="sm" title="Small" description="Compact padding and text." />
        <FusionButtonTab v-model="selected" value="md" size="md" title="Medium" description="The default size." />
        <FusionButtonTab v-model="selected" value="lg" size="lg" title="Large" description="Roomier padding and text." />
      </div>
    `})},p={render:()=>({components:{FusionButtonTab:t},setup(){return{selected:a("a")}},template:`
      <div style="display:flex; gap:12px; max-width:900px;">
        <FusionButtonTab v-model="selected" value="a" title="Enabled" description="Click to select." />
        <FusionButtonTab v-model="selected" value="b" disabled title="Disabled" description="Can't be selected." />
        <FusionButtonTab :modelValue="'c'" value="c" readonly title="Readonly (checked)" description="Visible but not clickable." />
      </div>
    `})},m={render:()=>({components:{FusionButtonTab:t},setup(){return{selected:a("pro")}},template:`
      <div style="display:flex; gap:12px; max-width:720px;">
        <FusionButtonTab v-model="selected" value="starter" color="#16a34a">
          <template #title>Starter</template>
          <template #description>For small teams. <strong>$9</strong>/month.</template>
        </FusionButtonTab>

        <FusionButtonTab v-model="selected" value="pro" color="#16a34a">
          <template #title>Pro <span style="font-size:11px; color:#16a34a;">Popular</span></template>
          <template #description>For growing teams. <strong>$29</strong>/month.</template>
        </FusionButtonTab>
      </div>
    `})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    value: "round-robin",
    title: "Round robin",
    description: "Distribute new leads evenly across reps, one at a time.",
    size: "md",
    disabled: false,
    readonly: false
  },
  render: args => ({
    components: {
      FusionButtonTab
    },
    setup() {
      const selected = ref<string | number>("round-robin");
      return {
        args,
        selected
      };
    },
    template: \`
      <div style="max-width:720px;">
        <FusionButtonTab
          v-bind="args"
          :modelValue="selected"
          @update:modelValue="selected = $event"
        />
        <div style="margin-top:16px; font-size:14px;">Selected: {{ selected }}</div>
      </div>
    \`
  })
}`,...i.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      FusionButtonTab
    },
    setup() {
      const selected = ref<string | number>("round-robin");
      return {
        selected,
        leadOptions
      };
    },
    template: \`
      <div style="display:flex; flex-direction:column; gap:12px; max-width:720px;">
        <FusionButtonTab
          v-for="opt in leadOptions"
          :key="opt.value"
          v-model="selected"
          name="stacked"
          :value="opt.value"
          :title="opt.title"
          :description="opt.description"
        />
        <div style="font-size:14px;">Selected: {{ selected }}</div>
      </div>
    \`
  })
}`,...d.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      FusionButtonTab
    },
    setup() {
      const selected = ref<string | number>("load");
      return {
        selected,
        leadOptions
      };
    },
    template: \`
      <div style="display:flex; gap:12px; max-width:900px;">
        <FusionButtonTab
          v-for="opt in leadOptions"
          :key="opt.value"
          v-model="selected"
          name="flex-row"
          :value="opt.value"
          :title="opt.title"
          :description="opt.description"
        />
      </div>
    \`
  })
}`,...r.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      FusionButtonTab
    },
    setup() {
      const selected = ref<string | number>("manual");
      return {
        selected,
        leadOptions
      };
    },
    template: \`
      <div style="
        display:flex; gap:12px; width:700px; min-width:240px; max-width:100%;
        resize:horizontal; overflow:auto; padding:8px;
        border:1px dashed #cbd5e1; border-radius:8px;
      ">
        <FusionButtonTab
          v-for="opt in leadOptions"
          :key="opt.value"
          v-model="selected"
          name="resizable"
          :value="opt.value"
          :title="opt.title"
          :description="opt.description"
        />
      </div>
    \`
  })
}`,...u.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      FusionButtonTab
    },
    setup() {
      const selected = ref<string | number>("md");
      return {
        selected
      };
    },
    template: \`
      <div style="display:flex; gap:12px; max-width:900px; align-items:flex-start;">
        <FusionButtonTab v-model="selected" value="sm" size="sm" title="Small" description="Compact padding and text." />
        <FusionButtonTab v-model="selected" value="md" size="md" title="Medium" description="The default size." />
        <FusionButtonTab v-model="selected" value="lg" size="lg" title="Large" description="Roomier padding and text." />
      </div>
    \`
  })
}`,...c.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      FusionButtonTab
    },
    setup() {
      const selected = ref<string | number>("a");
      return {
        selected
      };
    },
    template: \`
      <div style="display:flex; gap:12px; max-width:900px;">
        <FusionButtonTab v-model="selected" value="a" title="Enabled" description="Click to select." />
        <FusionButtonTab v-model="selected" value="b" disabled title="Disabled" description="Can't be selected." />
        <FusionButtonTab :modelValue="'c'" value="c" readonly title="Readonly (checked)" description="Visible but not clickable." />
      </div>
    \`
  })
}`,...p.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      FusionButtonTab
    },
    setup() {
      const selected = ref<string | number>("pro");
      return {
        selected
      };
    },
    template: \`
      <div style="display:flex; gap:12px; max-width:720px;">
        <FusionButtonTab v-model="selected" value="starter" color="#16a34a">
          <template #title>Starter</template>
          <template #description>For small teams. <strong>$9</strong>/month.</template>
        </FusionButtonTab>

        <FusionButtonTab v-model="selected" value="pro" color="#16a34a">
          <template #title>Pro <span style="font-size:11px; color:#16a34a;">Popular</span></template>
          <template #description>For growing teams. <strong>$29</strong>/month.</template>
        </FusionButtonTab>
      </div>
    \`
  })
}`,...m.parameters?.docs?.source}}};const U=["Playground","Stacked","FlexRow","Resizable","Sizes","States","CustomColorAndSlots"];export{m as CustomColorAndSlots,r as FlexRow,i as Playground,u as Resizable,c as Sizes,d as Stacked,p as States,U as __namedExportsOrder,E as default};
