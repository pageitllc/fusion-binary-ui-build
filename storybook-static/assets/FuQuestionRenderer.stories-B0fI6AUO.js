import{a as d,c as l}from"./iframe-BWX2pLPr.js";import p from"./FuQuestionRenderer-Ip7AfEOG.js";import"./preload-helper-Ct5FWWRu.js";import"./FusionTextInput-cbn4CYAx.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./FusionTextArea-CcvGrLU5.js";import"./FusionDatePicker-C2Ek2qmO.js";import"./dayjs.min-C8Kx736W.js";import"./_commonjsHelpers-CqkleIqs.js";import"./FusionButton-rEE2o6aG.js";import"./FusionActionButton-Ca-SR80j.js";import"./chevron-down-bo5ElzX-.js";import"./createLucideIcon-BuC7IBSO.js";import"./chevron-right-CxP2LKb3.js";import"./FusionStatusDropdown-C5n0LvQG.js";import"./FusionRadio-DrilAk6c.js";import"./FusionCheckbox-BvKzVjiA.js";import"./FusionUpload-CeDTJxBs.js";function u(t,o,i){const e=t==null?"":String(t).toLowerCase().trim(),n=i==null?"":String(i).toLowerCase().trim();switch(o){case"equals":return e===n;case"not_equals":return e!==n;case"is_empty":return e==="";case"is_not_empty":return e!=="";default:return!0}}const A={title:"Renderer/FuQuestionRenderer",component:p,tags:["autodocs"],parameters:{layout:"fullscreen",docs:{description:{component:`
A **runtime question widget** used inside the **FuPayloadRenderer document engine**.

#  JSON Data Schema Reference
Below is the standard data structure for every question type handled by this renderer. Use this when constructing JSON objects in the DB.

### 1. Text & Numeric Inputs
\`\`\`json
{
  "questionType": "short_text" | "long_text" | "number" | "link",
  "label": "<h3>Your Question</h3>",
  "placeholder": "Enter text...",
  "required": true,
  "value": "" | 0
}
\`\`\`

### 2. Selection (Dropdown & Single Choice)
\`\`\`json
{
  "questionType": "dropdown" | "single_choice",
  "label": "<h3>Select One</h3>",
  "options": [
    { "id": "opt_1", "text": "Option A" },
    { "id": "opt_2", "text": "Option B" }
  ],
  "value": "opt_1"
}
\`\`\`

### 3. Multiple Choice
\`\`\`json
{
  "questionType": "multiple_choice",
  "label": "<h3>Select Many</h3>",
  "options": [
    { "id": "opt_1", "text": "Option A" },
    { "id": "opt_2", "text": "Option B" }
  ],
  "value": ["opt_1", "opt_2"] 
}
\`\`\`

### 4. File Upload
\`\`\`json
{
  "questionType": "upload",
  "label": "<h3>Attachments</h3>",
  "value": [] 
}
\`\`\`

### 5. Conditional Logic Props (Parent Logic Layer)
\`\`\`json
{
  "conditions": [
    {
      "sourceWidgetId": "widget_id_to_watch",
      "operator": "equals",
      "value": "expected_value"
    }
  ],
  "conditionLogic": "all" | "any"
}
\`\`\`
`}}}},r={args:{widgetId:"q_001",questionType:"short_text",label:'<h3>What is your <span style="color:#6366f1;">full name</span>?</h3>',placeholder:"Enter your name",required:!0}},a={args:{widgetId:"q_007",questionType:"multiple_choice",label:'<h3>Which <span style="color:#6366f1;">features</span> are you interested in?</h3>',options:[{id:"ai",text:"AI automation"},{id:"api",text:"API access"},{id:"support",text:"Priority support"}],value:["ai"]}},s={render:()=>({components:{FuQuestionRenderer:p},setup(){const t=d({status:null,details:""}),o={id:"widget-1776894572325-kl20sn",props:{questionType:"short_text",label:"<h4>Spouse / Anniversary Details</h4>",placeholder:"Enter details here...",required:!0,conditions:[{sourceWidgetId:"trigger-dropdown",operator:"equals",value:"married-opt"}]}},i=l(()=>{const e=o.props.conditions[0];return u(t.status,e.operator,e.value)});return{formState:t,maritalStatusWidget:o,isDetailsVisible:i}},template:`
      <div style="background-color: #f3f4f6; min-height: 100vh; padding: 40px; display: flex; justify-content: center; font-family: sans-serif;">
        <div style="width: 100%; max-width: 500px; background: white; padding: 32px; border-radius: 12px; box-shadow: 0 10px 15px -3px rgba(0,0,0,0.1);">
          
          <div style="display: flex; flex-direction: column; gap: 24px;">
            <FuQuestionRenderer 
              widgetId="trigger-dropdown"
              questionType="dropdown"
              label="Current Relationship Status"
              placeholder="Select an option"
              :options="[
                { id: 'single-opt', text: 'Single' },
                { id: 'married-opt', text: 'Married' }
              ]"
              :value="formState.status"
              :isVisible="true"
              @update="(p) => formState.status = p.value"
            />

            <FuQuestionRenderer 
              v-bind="maritalStatusWidget.props"
              :widgetId="maritalStatusWidget.id"
              :isVisible="isDetailsVisible"
              :value="formState.details"
              @update="(p) => formState.details = p.value"
            />
          </div>

          <div style="margin-top: 40px; padding: 16px; background: #1e293b; border-radius: 8px;">
             <p style="font-size: 10px; color: #94a3b8; text-transform: uppercase; margin-bottom: 8px; font-weight: bold;">Live Payload</p>
             <pre style="font-size: 12px; color: #38bdf8; margin: 0;">{{ formState }}</pre>
          </div>
        </div>
      </div>
    `})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    widgetId: "q_001",
    questionType: "short_text",
    label: \`<h3>What is your <span style="color:#6366f1;">full name</span>?</h3>\`,
    placeholder: "Enter your name",
    required: true
  }
}`,...r.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    widgetId: "q_007",
    questionType: "multiple_choice",
    label: \`<h3>Which <span style="color:#6366f1;">features</span> are you interested in?</h3>\`,
    options: [{
      id: "ai",
      text: "AI automation"
    }, {
      id: "api",
      text: "API access"
    }, {
      id: "support",
      text: "Priority support"
    }],
    value: ["ai"]
  }
}`,...a.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      FuQuestionRenderer
    },
    setup() {
      const formState = reactive({
        status: null as any,
        details: ""
      });
      const maritalStatusWidget = {
        id: "widget-1776894572325-kl20sn",
        props: {
          questionType: "short_text",
          label: "<h4>Spouse / Anniversary Details</h4>",
          placeholder: "Enter details here...",
          required: true,
          conditions: [{
            sourceWidgetId: "trigger-dropdown",
            operator: "equals",
            value: "married-opt"
          }]
        }
      };
      const isDetailsVisible = computed(() => {
        const cond = maritalStatusWidget.props.conditions[0];
        return evalLogic(formState.status, cond.operator, cond.value);
      });
      return {
        formState,
        maritalStatusWidget,
        isDetailsVisible
      };
    },
    template: \`
      <div style="background-color: #f3f4f6; min-height: 100vh; padding: 40px; display: flex; justify-content: center; font-family: sans-serif;">
        <div style="width: 100%; max-width: 500px; background: white; padding: 32px; border-radius: 12px; box-shadow: 0 10px 15px -3px rgba(0,0,0,0.1);">
          
          <div style="display: flex; flex-direction: column; gap: 24px;">
            <FuQuestionRenderer 
              widgetId="trigger-dropdown"
              questionType="dropdown"
              label="Current Relationship Status"
              placeholder="Select an option"
              :options="[
                { id: 'single-opt', text: 'Single' },
                { id: 'married-opt', text: 'Married' }
              ]"
              :value="formState.status"
              :isVisible="true"
              @update="(p) => formState.status = p.value"
            />

            <FuQuestionRenderer 
              v-bind="maritalStatusWidget.props"
              :widgetId="maritalStatusWidget.id"
              :isVisible="isDetailsVisible"
              :value="formState.details"
              @update="(p) => formState.details = p.value"
            />
          </div>

          <div style="margin-top: 40px; padding: 16px; background: #1e293b; border-radius: 8px;">
             <p style="font-size: 10px; color: #94a3b8; text-transform: uppercase; margin-bottom: 8px; font-weight: bold;">Live Payload</p>
             <pre style="font-size: 12px; color: #38bdf8; margin: 0;">{{ formState }}</pre>
          </div>
        </div>
      </div>
    \`
  })
}`,...s.parameters?.docs?.source}}};const D=["ShortText","MultipleChoice","LiveLogicScenario"];export{s as LiveLogicScenario,a as MultipleChoice,r as ShortText,D as __namedExportsOrder,A as default};
