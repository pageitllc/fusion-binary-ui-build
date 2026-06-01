import{d as H,c as h,r as C,H as j,b as r,g as s,F,t as B,l as D,D as I,q as G,e as K,i as M,n as X,o as i,a as Z}from"./iframe-BWX2pLPr.js";import $ from"./FuSchedulerWidget-CpQd7mO-.js";import ee from"./FuQuestionRenderer-Ip7AfEOG.js";import{_ as ne}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./preload-helper-Ct5FWWRu.js";import"./search-DALccjr0.js";import"./createLucideIcon-BuC7IBSO.js";import"./FusionTextInput-cbn4CYAx.js";import"./FusionTextArea-CcvGrLU5.js";import"./FusionDatePicker-C2Ek2qmO.js";import"./dayjs.min-C8Kx736W.js";import"./_commonjsHelpers-CqkleIqs.js";import"./FusionButton-rEE2o6aG.js";import"./FusionActionButton-Ca-SR80j.js";import"./chevron-down-bo5ElzX-.js";import"./chevron-right-CxP2LKb3.js";import"./FusionStatusDropdown-C5n0LvQG.js";import"./FusionRadio-DrilAk6c.js";import"./FusionCheckbox-BvKzVjiA.js";import"./FusionUpload-CeDTJxBs.js";const oe={key:0,class:"fu-embed-error-state"},te={key:0,class:"fu-embed-success"},se={class:"fu-embed-success__sub"},re={key:1,class:"fu-panel"},ie={key:2,class:"fu-panel"},ae={class:"fu-form-slot-bar"},le={class:"fu-form-slot-bar__date"},de={class:"fu-embed-questions"},ce={key:0,class:"fu-embed-error"},ue=["disabled"],pe={key:0},me={key:1,class:"fu-embed-submit__spinner"},O=H({__name:"FuEmbedRenderer",props:{document:{}},emits:["submit"],setup(t,{emit:y}){const u=t,p=y;function N(e){const n=[];for(const o of e?.pages??[])for(const l of o?.blocks??[])for(const a of l?.columns??[])for(const d of a?.widgets??[])n.push(d);return n}const R=h(()=>N(u.document)),P=h(()=>R.value.find(e=>e.type==="scheduler")),T=h(()=>R.value.filter(e=>e.type==="question")),m=C("idle"),f=j(null);function J(e){f.value=e.bookedSlot,m.value=T.value.length?"form":"submitted"}function U(){m.value="idle",g.value={},b.value=new Set}const g=C({});function z(e,n){g.value={...g.value,[e]:n.value},b.value.delete(e)}function A(e){const n=e.props.conditions??[];if(!n.length)return!0;const o=e.props.conditionLogic??"all",l=n.map(a=>{const d=g.value[a.sourceWidgetId];switch(a.operator){case"equals":return d===a.value;case"not_equals":return d!==a.value;case"contains":return Array.isArray(d)?d.includes(a.value):String(d??"").includes(a.value);default:return!0}});return o==="all"?l.every(Boolean):l.some(Boolean)}const b=C(new Set);function Q(){const e=new Set;for(const n of T.value){if(!A(n)||!n.props.required)continue;const o=g.value[n.id];(o==null||o===""||Array.isArray(o)&&!o.length)&&e.add(n.id)}return b.value=e,e.size===0}const E=C(!1);async function V(){if(!(!f.value||!Q())){E.value=!0;try{p("submit",{slot:f.value,answers:g.value}),m.value="submitted"}finally{E.value=!1}}}const W=h(()=>f.value?.date?new Date(f.value.date).toLocaleString("en-GB",{weekday:"long",day:"numeric",month:"long",hour:"numeric",minute:"2-digit",hour12:!0}):""),Y=h(()=>{const e=u.document?.meta?.theme?.brandColor??"#4f46e5";return{"--embed-brand":e,"--embed-brand-light":e+"18","--embed-brand-mid":e+"44"}});return(e,n)=>(i(),r("div",{class:"fu-embed",style:X(Y.value)},[P.value?(i(),r(F,{key:1},[m.value==="submitted"?(i(),r("div",te,[n[1]||(n[1]=s("div",{class:"fu-embed-success__icon"},"✓",-1)),n[2]||(n[2]=s("p",{class:"fu-embed-success__title"},"You're booked in",-1)),s("p",se,B(W.value),1)])):m.value==="idle"?(i(),r("div",re,[D($,I(P.value.props,{widgetId:P.value.id,onUpdate:J}),null,16,["widgetId"])])):m.value==="form"?(i(),r("div",ie,[s("div",ae,[s("button",{class:"fu-form-slot-bar__back",onClick:U},[...n[3]||(n[3]=[s("span",null,"←",-1),G(" Change time ",-1)])]),s("span",le,B(W.value),1)]),s("div",de,[(i(!0),r(F,null,K(T.value,o=>(i(),r(F,{key:o.id},[D(ee,I({ref_for:!0},o.props,{widgetId:o.id,isVisible:A(o),class:{"fu-embed-question--error":b.value.has(o.id)},onUpdate:l=>z(o.id,l)}),null,16,["widgetId","isVisible","class","onUpdate"]),b.value.has(o.id)?(i(),r("p",ce,"This field is required")):M("",!0)],64))),128))]),s("button",{class:"fu-embed-submit",disabled:E.value,onClick:V},[E.value?(i(),r("span",me)):(i(),r("span",pe,"Confirm booking"))],8,ue)])):M("",!0)],64)):(i(),r("div",oe,[...n[0]||(n[0]=[s("div",{class:"fu-embed-error-state__icon"},"📅",-1),s("p",{class:"fu-embed-error-state__title"},"No scheduler found",-1),s("p",{class:"fu-embed-error-state__sub"}," This document doesn't contain a booking widget. ",-1)])]))],4))}}),c=ne(O,[["__scopeId","data-v-50151cce"]]);O.__docgenInfo={exportName:"default",displayName:"FuEmbedRenderer",description:"",tags:{},props:[{name:"document",required:!0,type:{name:"any"}}],events:[{name:"submit",type:{names:["{ slot: any; answers: Record<string, any> }"]}}],sourceFiles:["/Users/xavier/Documents/Websites/Skkido/Fusion-binary-ui/src/components/editor/renders/FuEmbedRenderer.vue"]};const ge=[{day:1,start:"9:00 AM",end:"12:30 PM"},{day:1,start:"2:00 PM",end:"5:00 PM"},{day:2,start:"9:00 AM",end:"12:30 PM"},{day:2,start:"2:00 PM",end:"5:00 PM"},{day:3,start:"9:00 AM",end:"12:30 PM"},{day:3,start:"2:00 PM",end:"5:00 PM"},{day:4,start:"9:00 AM",end:"12:30 PM"},{day:4,start:"2:00 PM",end:"5:00 PM"},{day:5,start:"9:00 AM",end:"12:00 PM"}],L={eventTypeId:"evt_onboarding_001",eventTypeName:"Client Onboarding Call",duration:45,description:"A 45-minute kickoff to align on goals, meet your team, and get things moving.",timezone:"Europe/London",availability:ge,slots:[],style:{bgColor:"#ffffff",bgOpacity:100,borderRadius:16,shadow:2,dayShape:"circle",dayColor:"#16a34a"}};function S(t){const{brandColor:y="#16a34a",schedulerProps:u={},extraWidgets:p=[]}=t;return{id:"embed-doc-fixture",meta:{theme:{brandColor:y,accentColor:"#dcfce7",textColor:"#0a0a0a"},presentation:{mode:"embed"},name:"Client Onboarding Call",type:"bookingPage"},pages:[{id:"page-hero",name:"Hero",styles:{backgroundColor:"#0a0a0a"},blocks:[{id:"block-hero",columns:[{width:100,widgets:[{id:"w-hero-title",type:"text",props:{content:"<h1>Client Onboarding Call</h1>"}}]}]}]},{id:"page-scheduler",name:"Book a Time",styles:{backgroundColor:"#ffffff"},blocks:[{id:"block-scheduler",columns:[{width:100,widgets:[{id:"w-scheduler",type:"scheduler",props:{...L,...u}},...p]}]}]}]}}const Be={title:"Renderer/FuEmbedRenderer",component:c,tags:["autodocs"],parameters:{layout:"padded",docs:{description:{component:`
The **Embed Renderer** is a constrained view of a full booking-page document.

It walks the entire document JSON — regardless of page, block, or column structure — and surfaces only two widget types:

- **\`scheduler\`** — always rendered first
- **\`question\`** — revealed after the booker confirms a slot

Everything else (text, image, divider, hero sections) is silently ignored. The same document JSON that powers a full scroll/step page can power an iframe embed with zero schema changes.

---

## Staging

| Stage | What's visible |
|-------|---------------|
| \`idle\` | Scheduler only |
| \`slot_confirmed\` | Scheduler + questions + submit |
| \`submitted\` | Success state |

---

## Usage

\`\`\`vue
<FuEmbedRenderer
  :document="docJson"
  @submit="({ slot, answers }) => bookSlot(slot, answers)"
/>
\`\`\`
        `.trim()}}}},v={render:()=>({components:{FuEmbedRenderer:c},setup(){return{doc:S({})}},template:'<FuEmbedRenderer :document="doc" />'})},q={render:()=>({components:{FuEmbedRenderer:c},setup(){return{doc:S({extraWidgets:[{id:"q-name",type:"question",props:{questionType:"short_text",label:"<p><strong>Full name</strong></p>",placeholder:"Jane Smith",required:!0,options:[],value:null,conditions:[],conditionLogic:"all"}},{id:"q-email",type:"question",props:{questionType:"short_text",label:"<p><strong>Email address</strong></p>",placeholder:"jane@example.com",required:!0,options:[],value:null,conditions:[],conditionLogic:"all"}},{id:"q-contact",type:"question",props:{questionType:"single_choice",label:"<p>Would you like a follow-up after the call?</p>",required:!1,options:[{id:"opt-yes",text:"Yes please",order:0},{id:"opt-no",text:"No thanks",order:1}],value:null,conditions:[],conditionLogic:"all"}}]})}},template:'<FuEmbedRenderer :document="doc" />'})},x={render:()=>({components:{FuEmbedRenderer:c},setup(){return{doc:S({extraWidgets:[{id:"q-name",type:"question",props:{questionType:"short_text",label:"<p><strong>Full name</strong></p>",placeholder:"Jane Smith",required:!0,options:[],value:null,conditions:[],conditionLogic:"all"}},{id:"q-followup",type:"question",props:{questionType:"single_choice",label:"<p>Do you want to be contacted after the call?</p>",required:!1,options:[{id:"opt-yes",text:"Yes",order:0},{id:"opt-no",text:"No",order:1}],value:null,conditions:[],conditionLogic:"all"}},{id:"q-followup-date",type:"question",props:{questionType:"date",label:"<p>Best date to follow up?</p>",required:!1,options:[],value:null,conditions:[{id:"cond-001",sourceWidgetId:"q-followup",operator:"equals",value:"opt-yes"}],conditionLogic:"all"}}]})}},template:'<FuEmbedRenderer :document="doc" />'})},w={render:()=>({components:{FuEmbedRenderer:c},setup(){return{doc:{id:"embed-scattered-fixture",meta:{theme:{brandColor:"#6366f1"},presentation:{mode:"embed"},name:"Discovery Call",type:"bookingPage"},pages:[{id:"page-hero",name:"Hero",styles:{backgroundColor:"#0a0a0a"},blocks:[{id:"block-hero",columns:[{width:100,widgets:[{id:"q-company",type:"question",props:{questionType:"short_text",label:"<p><strong>Company name</strong></p>",placeholder:"Acme Ltd",required:!0,options:[],value:null,conditions:[],conditionLogic:"all"}}]}]}]},{id:"page-about",name:"About",styles:{backgroundColor:"#ffffff"},blocks:[{id:"block-about",columns:[{width:50,widgets:[{id:"w-text",type:"text",props:{content:"<p>About section</p>"}}]},{width:50,widgets:[{id:"q-goal",type:"question",props:{questionType:"long_text",label:"<p>What are your main goals for this call?</p>",placeholder:"Tell us what you're hoping to achieve...",required:!1,options:[],value:null,conditions:[],conditionLogic:"all"}}]}]}]},{id:"page-scheduler",name:"Book",styles:{backgroundColor:"#ffffff"},blocks:[{id:"block-scheduler",columns:[{width:100,widgets:[{id:"w-scheduler",type:"scheduler",props:{...L,style:{...L.style,dayColor:"#6366f1"}}},{id:"q-name",type:"question",props:{questionType:"short_text",label:"<p><strong>Your name</strong></p>",placeholder:"Jane Smith",required:!0,options:[],value:null,conditions:[],conditionLogic:"all"}}]}]}]}]}}},template:'<FuEmbedRenderer :document="doc" />'})},k={render:()=>({components:{FuEmbedRenderer:c},setup(){return{doc:S({brandColor:"#6366f1",schedulerProps:{style:{...L.style,dayColor:"#6366f1"}},extraWidgets:[{id:"q-name",type:"question",props:{questionType:"short_text",label:"<p><strong>Full name</strong></p>",placeholder:"Jane Smith",required:!0,options:[],value:null,conditions:[],conditionLogic:"all"}},{id:"q-email",type:"question",props:{questionType:"short_text",label:"<p><strong>Email address</strong></p>",placeholder:"jane@example.com",required:!0,options:[],value:null,conditions:[],conditionLogic:"all"}}]})}},template:'<FuEmbedRenderer :document="doc" />'})},_={render:()=>({components:{FuEmbedRenderer:c},setup(){const t=Z({slot:null,answers:{}}),y=S({extraWidgets:[{id:"q-name",type:"question",props:{questionType:"short_text",label:"<p><strong>Full name</strong></p>",placeholder:"Jane Smith",required:!0,options:[],value:null,conditions:[],conditionLogic:"all"}},{id:"q-email",type:"question",props:{questionType:"short_text",label:"<p><strong>Email address</strong></p>",placeholder:"jane@example.com",required:!0,options:[],value:null,conditions:[],conditionLogic:"all"}},{id:"q-notes",type:"question",props:{questionType:"long_text",label:"<p>Anything we should know before the call?</p>",placeholder:"Optional notes...",required:!1,options:[],value:null,conditions:[],conditionLogic:"all"}}]});function u(p){t.slot=p.slot,t.answers=p.answers}return{doc:y,lastPayload:t,onSubmit:u}},template:`
      <div style="display:flex;gap:32px;align-items:flex-start;padding:32px;background:#f8fafc;min-height:100vh;font-family:system-ui,sans-serif;">
        <div style="flex:1;max-width:680px;">
          <FuEmbedRenderer :document="doc" @submit="onSubmit" />
        </div>
        <div style="flex:0 0 320px;position:sticky;top:32px;">
          <div style="background:#0f172a;border-radius:12px;padding:20px;">
            <p style="font-size:10px;font-weight:700;letter-spacing:0.12em;text-transform:uppercase;color:#475569;margin:0 0 12px;">@submit payload</p>
            <pre style="font-size:12px;color:#38bdf8;margin:0;white-space:pre-wrap;word-break:break-all;">{{ JSON.stringify(lastPayload, null, 2) }}</pre>
          </div>
          <p style="font-size:12px;color:#94a3b8;margin-top:12px;line-height:1.6;">Pick a slot, fill the form, and confirm to see the payload your backend receives.</p>
        </div>
      </div>
    `})};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      FuEmbedRenderer
    },
    setup() {
      const doc = makeDoc({});
      return {
        doc
      };
    },
    template: \`<FuEmbedRenderer :document="doc" />\`
  })
}`,...v.parameters?.docs?.source},description:{story:`Scheduler only — no question widgets anywhere in the document.
Submit button appears immediately after slot confirm.`,...v.parameters?.docs?.description}}};q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      FuEmbedRenderer
    },
    setup() {
      const doc = makeDoc({
        extraWidgets: [{
          id: "q-name",
          type: "question",
          props: {
            questionType: "short_text",
            label: "<p><strong>Full name</strong></p>",
            placeholder: "Jane Smith",
            required: true,
            options: [],
            value: null,
            conditions: [],
            conditionLogic: "all"
          }
        }, {
          id: "q-email",
          type: "question",
          props: {
            questionType: "short_text",
            label: "<p><strong>Email address</strong></p>",
            placeholder: "jane@example.com",
            required: true,
            options: [],
            value: null,
            conditions: [],
            conditionLogic: "all"
          }
        }, {
          id: "q-contact",
          type: "question",
          props: {
            questionType: "single_choice",
            label: "<p>Would you like a follow-up after the call?</p>",
            required: false,
            options: [{
              id: "opt-yes",
              text: "Yes please",
              order: 0
            }, {
              id: "opt-no",
              text: "No thanks",
              order: 1
            }],
            value: null,
            conditions: [],
            conditionLogic: "all"
          }
        }]
      });
      return {
        doc
      };
    },
    template: \`<FuEmbedRenderer :document="doc" />\`
  })
}`,...q.parameters?.docs?.source},description:{story:"Standard case — name + email required, one optional single choice.",...q.parameters?.docs?.description}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      FuEmbedRenderer
    },
    setup() {
      const doc = makeDoc({
        extraWidgets: [{
          id: "q-name",
          type: "question",
          props: {
            questionType: "short_text",
            label: "<p><strong>Full name</strong></p>",
            placeholder: "Jane Smith",
            required: true,
            options: [],
            value: null,
            conditions: [],
            conditionLogic: "all"
          }
        }, {
          id: "q-followup",
          type: "question",
          props: {
            questionType: "single_choice",
            label: "<p>Do you want to be contacted after the call?</p>",
            required: false,
            options: [{
              id: "opt-yes",
              text: "Yes",
              order: 0
            }, {
              id: "opt-no",
              text: "No",
              order: 1
            }],
            value: null,
            conditions: [],
            conditionLogic: "all"
          }
        }, {
          id: "q-followup-date",
          type: "question",
          props: {
            questionType: "date",
            label: "<p>Best date to follow up?</p>",
            required: false,
            options: [],
            value: null,
            conditions: [{
              id: "cond-001",
              sourceWidgetId: "q-followup",
              operator: "equals",
              value: "opt-yes"
            }],
            conditionLogic: "all"
          }
        }]
      });
      return {
        doc
      };
    },
    template: \`<FuEmbedRenderer :document="doc" />\`
  })
}`,...x.parameters?.docs?.source},description:{story:`Conditional logic — date picker only appears when "Yes" is selected.
Uses the exact same condition schema as the full document renderer.`,...x.parameters?.docs?.description}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      FuEmbedRenderer
    },
    setup() {
      const doc = {
        id: "embed-scattered-fixture",
        meta: {
          theme: {
            brandColor: "#6366f1"
          },
          presentation: {
            mode: "embed"
          },
          name: "Discovery Call",
          type: "bookingPage"
        },
        pages: [{
          id: "page-hero",
          name: "Hero",
          styles: {
            backgroundColor: "#0a0a0a"
          },
          blocks: [{
            id: "block-hero",
            columns: [{
              width: 100,
              widgets: [{
                id: "q-company",
                type: "question",
                props: {
                  questionType: "short_text",
                  label: "<p><strong>Company name</strong></p>",
                  placeholder: "Acme Ltd",
                  required: true,
                  options: [],
                  value: null,
                  conditions: [],
                  conditionLogic: "all"
                }
              }]
            }]
          }]
        }, {
          id: "page-about",
          name: "About",
          styles: {
            backgroundColor: "#ffffff"
          },
          blocks: [{
            id: "block-about",
            columns: [{
              width: 50,
              widgets: [{
                id: "w-text",
                type: "text",
                props: {
                  content: "<p>About section</p>"
                }
              }]
            }, {
              width: 50,
              widgets: [{
                id: "q-goal",
                type: "question",
                props: {
                  questionType: "long_text",
                  label: "<p>What are your main goals for this call?</p>",
                  placeholder: "Tell us what you're hoping to achieve...",
                  required: false,
                  options: [],
                  value: null,
                  conditions: [],
                  conditionLogic: "all"
                }
              }]
            }]
          }]
        }, {
          id: "page-scheduler",
          name: "Book",
          styles: {
            backgroundColor: "#ffffff"
          },
          blocks: [{
            id: "block-scheduler",
            columns: [{
              width: 100,
              widgets: [{
                id: "w-scheduler",
                type: "scheduler",
                props: {
                  ...BASE_SCHEDULER_PROPS,
                  style: {
                    ...BASE_SCHEDULER_PROPS.style,
                    dayColor: "#6366f1"
                  }
                }
              }, {
                id: "q-name",
                type: "question",
                props: {
                  questionType: "short_text",
                  label: "<p><strong>Your name</strong></p>",
                  placeholder: "Jane Smith",
                  required: true,
                  options: [],
                  value: null,
                  conditions: [],
                  conditionLogic: "all"
                }
              }]
            }]
          }]
        }]
      };
      return {
        doc
      };
    },
    template: \`<FuEmbedRenderer :document="doc" />\`
  })
}`,...w.parameters?.docs?.source},description:{story:`Questions scattered across pages — one in the hero, one in an about section,
two after the scheduler. Proves the embed renderer flattens everything
regardless of where the editor user placed the widgets.`,...w.parameters?.docs?.description}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      FuEmbedRenderer
    },
    setup() {
      const doc = makeDoc({
        brandColor: "#6366f1",
        schedulerProps: {
          style: {
            ...BASE_SCHEDULER_PROPS.style,
            dayColor: "#6366f1"
          }
        },
        extraWidgets: [{
          id: "q-name",
          type: "question",
          props: {
            questionType: "short_text",
            label: "<p><strong>Full name</strong></p>",
            placeholder: "Jane Smith",
            required: true,
            options: [],
            value: null,
            conditions: [],
            conditionLogic: "all"
          }
        }, {
          id: "q-email",
          type: "question",
          props: {
            questionType: "short_text",
            label: "<p><strong>Email address</strong></p>",
            placeholder: "jane@example.com",
            required: true,
            options: [],
            value: null,
            conditions: [],
            conditionLogic: "all"
          }
        }]
      });
      return {
        doc
      };
    },
    template: \`<FuEmbedRenderer :document="doc" />\`
  })
}`,...k.parameters?.docs?.source},description:{story:"Indigo brand — verifies brandColor flows to submit button + success state.",...k.parameters?.docs?.description}}};_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      FuEmbedRenderer
    },
    setup() {
      const lastPayload = reactive<{
        slot: any;
        answers: any;
      }>({
        slot: null,
        answers: {}
      });
      const doc = makeDoc({
        extraWidgets: [{
          id: "q-name",
          type: "question",
          props: {
            questionType: "short_text",
            label: "<p><strong>Full name</strong></p>",
            placeholder: "Jane Smith",
            required: true,
            options: [],
            value: null,
            conditions: [],
            conditionLogic: "all"
          }
        }, {
          id: "q-email",
          type: "question",
          props: {
            questionType: "short_text",
            label: "<p><strong>Email address</strong></p>",
            placeholder: "jane@example.com",
            required: true,
            options: [],
            value: null,
            conditions: [],
            conditionLogic: "all"
          }
        }, {
          id: "q-notes",
          type: "question",
          props: {
            questionType: "long_text",
            label: "<p>Anything we should know before the call?</p>",
            placeholder: "Optional notes...",
            required: false,
            options: [],
            value: null,
            conditions: [],
            conditionLogic: "all"
          }
        }]
      });
      function onSubmit(payload: {
        slot: any;
        answers: any;
      }) {
        lastPayload.slot = payload.slot;
        lastPayload.answers = payload.answers;
      }
      return {
        doc,
        lastPayload,
        onSubmit
      };
    },
    template: \`
      <div style="display:flex;gap:32px;align-items:flex-start;padding:32px;background:#f8fafc;min-height:100vh;font-family:system-ui,sans-serif;">
        <div style="flex:1;max-width:680px;">
          <FuEmbedRenderer :document="doc" @submit="onSubmit" />
        </div>
        <div style="flex:0 0 320px;position:sticky;top:32px;">
          <div style="background:#0f172a;border-radius:12px;padding:20px;">
            <p style="font-size:10px;font-weight:700;letter-spacing:0.12em;text-transform:uppercase;color:#475569;margin:0 0 12px;">@submit payload</p>
            <pre style="font-size:12px;color:#38bdf8;margin:0;white-space:pre-wrap;word-break:break-all;">{{ JSON.stringify(lastPayload, null, 2) }}</pre>
          </div>
          <p style="font-size:12px;color:#94a3b8;margin-top:12px;line-height:1.6;">Pick a slot, fill the form, and confirm to see the payload your backend receives.</p>
        </div>
      </div>
    \`
  })
}`,..._.parameters?.docs?.source},description:{story:`Live payload inspector — pick a slot, fill the form, confirm,
and watch the @submit payload build in the panel on the right.`,..._.parameters?.docs?.description}}};const De=["SchedulerOnly","WithBasicQuestions","WithConditionalQuestion","QuestionsScatteredAcrossPages","IndigoBrand","LivePayloadInspector"];export{k as IndigoBrand,_ as LivePayloadInspector,w as QuestionsScatteredAcrossPages,v as SchedulerOnly,q as WithBasicQuestions,x as WithConditionalQuestion,De as __namedExportsOrder,Be as default};
