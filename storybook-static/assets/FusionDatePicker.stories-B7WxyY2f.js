import{r as s}from"./iframe-BWX2pLPr.js";import{F as i}from"./FusionDatePicker-C2Ek2qmO.js";import"./preload-helper-Ct5FWWRu.js";import"./dayjs.min-C8Kx736W.js";import"./_commonjsHelpers-CqkleIqs.js";import"./FusionButton-rEE2o6aG.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./FusionActionButton-Ca-SR80j.js";import"./FusionTextInput-cbn4CYAx.js";import"./chevron-down-bo5ElzX-.js";import"./createLucideIcon-BuC7IBSO.js";import"./chevron-right-CxP2LKb3.js";const b={title:"Components/Date-and-Time/FusionDatePicker",component:i,tags:["autodocs"],argTypes:{variant:{control:{type:"select"},options:["date","date-time","date-range"],description:"Select variant of the date picker",table:{category:"Props",defaultValue:{summary:"date"},type:{summary:"string"}}},min:{control:{type:"text"},description:"Minimum date (ISO format)",table:{category:"Props",defaultValue:{summary:"undefined"},type:{summary:"string | undefined"}}},max:{control:{type:"text"},description:"Maximum date (ISO format)",table:{category:"Props",defaultValue:{summary:"undefined"},type:{summary:"string | undefined"}}},onUpdateModelValue:{action:"update:modelValue",description:"Emitted on date selection change",table:{category:"Events",type:{summary:"(value: string | { start: string; end: string }) => void"}}},formWrapperWidth:{control:{type:"text"},description:"Width of the input wrapper (e.g. '200px')",table:{category:"Props",defaultValue:{summary:"undefined"},type:{summary:"string | undefined"}}},size:{control:{type:"select"},options:["sm","md","lg"],description:"Size of the input",table:{category:"Props",defaultValue:{summary:"md"},type:{summary:"string"}}},error:{control:{type:"text"},description:"Error message (string) or null",table:{category:"Props",defaultValue:{summary:"null"},type:{summary:"string | null"}}},required:{control:{type:"boolean"},description:"Whether the input is required",table:{category:"Props",defaultValue:{summary:!1},type:{summary:"boolean"}}},disabled:{control:{type:"boolean"},description:"Whether the input is disabled",table:{category:"Props",defaultValue:{summary:!1},type:{summary:"boolean"}}}},parameters:{docs:{description:{component:`
A flexible and accessible date picker component supporting **single date, date + time, and date ranges**.

---

### Features

- Supports three variants: \`date\`, \`date-time\`, and \`date-range\`  
- Reactive with \`v-model\` binding  
- Supports disabling, required flag, error messages, and different sizes  
- Configurable min/max date/time limits  
- Customizable input wrapper width  

---

### Example Usage

\`\`\`vue
<script setup>
import { ref } from "vue";
import FusionDatePicker from "@/components/FusionDatePicker.vue";

const singleDate = ref("2025-12-28");
const dateTime = ref("2025-12-28T14:30");
const dateRange = ref({ start: "2025-12-01", end: "2025-12-28" });
<\/script>

<template>
  <h3>Single Date Picker</h3>
  <FusionDatePicker
    v-model="singleDate"
    variant="date"
    placeholder="Select a date"
    :required="true"
    size="md"
  />

  <h3 class="mt-6">Date + Time Picker</h3>
  <FusionDatePicker
    v-model="dateTime"
    variant="date-time"
    min="2020-01-01T00:00"
    max="2030-12-31T23:59"
    size="md"
  />

  <h3 class="mt-6">Date Range Picker</h3>
  <FusionDatePicker
    v-model="dateRange"
    variant="date-range"
    min="2020-01-01"
    max="2030-12-31"
    size="md"
    formWrapperWidth="320px"
    :error="'Please select a valid range'"
  />
</template>
\`\`\`
        `}}}},t={name:"Date",render:e=>({components:{FusionDatePicker:i},setup(){const r=s("2025-12-28");return{args:e,model:r}},template:'<FusionDatePicker v-bind="args" v-model="model" />'}),args:{variant:"date",min:void 0,max:void 0,formWrapperWidth:void 0,size:"md",error:null,required:!1,disabled:!1}},a={name:"Date Time",render:e=>({components:{FusionDatePicker:i},setup(){const r=s("2025-12-28T14:30");return{args:e,model:r}},template:'<FusionDatePicker v-bind="args" v-model="model" />'}),args:{variant:"date-time",min:"2020-01-01T00:00",max:"2030-12-31T23:59",formWrapperWidth:void 0,size:"md",error:null,required:!1,disabled:!1}},n={name:"Date Range",render:e=>({components:{FusionDatePicker:i},setup(){const r=s({start:"2025-12-01",end:"2025-12-28"});return{args:e,model:r}},template:'<FusionDatePicker v-bind="args" v-model="model" />'}),args:{variant:"date-range",min:"2020-01-01",max:"2030-12-31",formWrapperWidth:"320px",size:"md",error:null,required:!1,disabled:!1}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  name: "Date",
  render: args => ({
    components: {
      FusionDatePicker
    },
    setup() {
      const model = ref("2025-12-28");
      return {
        args,
        model
      };
    },
    template: \`<FusionDatePicker v-bind="args" v-model="model" />\`
  }),
  args: {
    variant: "date",
    min: undefined,
    max: undefined,
    formWrapperWidth: undefined,
    size: "md",
    error: null,
    required: false,
    disabled: false
  }
}`,...t.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  name: "Date Time",
  render: args => ({
    components: {
      FusionDatePicker
    },
    setup() {
      const model = ref("2025-12-28T14:30");
      return {
        args,
        model
      };
    },
    template: \`<FusionDatePicker v-bind="args" v-model="model" />\`
  }),
  args: {
    variant: "date-time",
    min: "2020-01-01T00:00",
    max: "2030-12-31T23:59",
    formWrapperWidth: undefined,
    size: "md",
    error: null,
    required: false,
    disabled: false
  }
}`,...a.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  name: "Date Range",
  render: args => ({
    components: {
      FusionDatePicker
    },
    setup() {
      const model = ref({
        start: "2025-12-01",
        end: "2025-12-28"
      });
      return {
        args,
        model
      };
    },
    template: \`<FusionDatePicker v-bind="args" v-model="model" />\`
  }),
  args: {
    variant: "date-range",
    min: "2020-01-01",
    max: "2030-12-31",
    formWrapperWidth: "320px",
    size: "md",
    error: null,
    required: false,
    disabled: false
  }
}`,...n.parameters?.docs?.source}}};const h=["Date","DateTime","DateRange"];export{t as Date,n as DateRange,a as DateTime,h as __namedExportsOrder,b as default};
