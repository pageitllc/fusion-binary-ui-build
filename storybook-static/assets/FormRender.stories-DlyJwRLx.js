import{d as ge,G as fe,c as r,r as k,x as he,k as be,b as g,g as p,n as J,l as x,w as ye,z as ve,u as U,A as H,i as M,o as f,F as Y,q as K,t as we}from"./iframe-D33anl-W.js";import{B as xe}from"./BlockRenderer-Dr5NLlbZ.js";import{F as G}from"./FusionActionButton-CzHwIieA.js";import{F as ke}from"./FusionButton-DnzNle8_.js";import{C as qe}from"./chevron-up-tfMIVdjx.js";import{C as Fe}from"./chevron-down-DcKD7Z_7.js";import{_ as Re}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./preload-helper-Ct5FWWRu.js";import"./createLucideIcon-DaJMaH6u.js";const Ce={class:"fu-form-render__progress-track"},Te={class:"fu-form-render__stage"},Se={key:0,class:"fu-form-render__ok-row"},_e={class:"fu-form-render__ok-hint"},Be={key:0,class:"fu-form-render__nav"},We={class:"fu-form-render__nav-group"},X=ge({__name:"FormRender",props:{document:{}},emits:["submit"],setup(s,{emit:y}){const l=s,ee=y,te=fe(),E=r(()=>l.document?.meta?.theme||{}),oe=r(()=>({"--brand-color":E.value.brandColor||"#4362FF","--accent-color":E.value.accentColor||"#E0E7FF"})),ne=r(()=>typeof navigator>"u"?"Ctrl":/Mac|iPhone|iPad|iPod/.test(navigator.userAgent)?"Cmd ⌘":"Ctrl");function ie(e){return{backgroundColor:e.backgroundColor,backgroundOpacity:e.backgroundOpacity,backgroundImage:e.backgroundImage,contentWidth:e.contentWidth,paddingTop:e.paddingTop,paddingBottom:e.paddingBottom}}function P(e,t,n){return{...ie(e),id:t,columns:[{width:100,widgets:n}]}}const se=r(()=>{const e={};for(const t of l.document?.pages??[])for(const n of t.blocks??[])for(const o of n.columns??[])for(const i of o.widgets??[])i.type==="question"&&(e[i.id]=i);return e});function re(e){const t=u.value[e],o=se.value[e]?.props?.options?.find(i=>i.id===t);return o?o.text:t}function ae(e){const t=re(e.sourceWidgetId);return e.operator==="equals"?t===e.value:e.operator==="not_equals"?t!==e.value:!0}function V(e){const t=e.props?.conditions||[];if(!t.length)return!0;const n=e.props?.conditionLogic||"all",o=t.map(ae);return n==="any"?o.some(Boolean):o.every(Boolean)}function $(e){return(e.columns??[]).flatMap(t=>t.widgets??[]).filter(t=>t.type==="question")}const de=r(()=>{const e=l.document?.pages??[],t=[];for(const n of e)for(const o of n.blocks??[]){if((o.columns??[]).length>1){t.push({kind:"block",id:o.id,block:o});continue}const a=o.columns?.[0]?.widgets??[],D=a.filter(m=>m.type==="question"),S=a.filter(m=>m.type!=="question");if(D.length===0){S.length&&t.push({kind:"block",id:`${o.id}-content`,block:P(o,`${o.id}-content`,S)});continue}S.length&&t.push({kind:"block",id:`${o.id}-content`,block:P(o,`${o.id}-content`,S)});for(const m of D)t.push({kind:"block",id:m.id,block:P(o,`${o.id}-${m.id}`,[m])})}return t});function q(e){return e.kind!=="block"?[]:$(e.block).filter(V)}const u=k({}),h=r(()=>{const e=de.value.filter(a=>a.kind!=="block"||$(a.block).length===0?!0:q(a).length>0);if(!te.review)return e;const t=a=>a.kind==="block"&&q(a).length>0,n=[...e].reverse().findIndex(t);if(n===-1)return e;const o=e.length-n,i={kind:"review",id:"__fu-form-render-review__"};return[...e.slice(0,o),i,...e.slice(o)]}),F=k(!1),v=k(0),w=r(()=>Math.min(v.value,Math.max(h.value.length-1,0))),b=r(()=>h.value[w.value]??null),c=r(()=>w.value===h.value.length-1),N=r(()=>b.value?.kind==="review");function le(e){return{...e,columns:(e.columns??[]).map(t=>({...t,widgets:(t.widgets??[]).filter(n=>n.type!=="question"||V(n))}))}}const R=r(()=>{const e=b.value;if(!e||e.kind!=="block")return e;const t=le(e.block);return t.columns=t.columns.map(n=>({...n,widgets:n.widgets.map(o=>{if(o.type!=="question")return o;const i=u.value[o.id];return i===void 0?o:{...o,props:{...o.props,value:i}}})})),{...e,block:t}}),pe=r(()=>h.value.length?Math.min(100,(w.value+1)/h.value.length*100):0);function ue(e,t){return e==="multiple_choice"?!Array.isArray(t)||t.length===0:e==="contact_details"?!t||!t.firstName?.trim()||!t.lastName?.trim():t==null||t===""}const C=r(()=>{const e=b.value;return!e||e.kind!=="block"?!0:q(e).every(t=>t.props.required?!ue(t.props.questionType,u.value[t.id]):!0)});function T(){!C.value||c.value||N.value||(v.value+=1)}function ce(){v.value>0&&(v.value-=1)}function Q(){C.value&&(F.value=!0,ee("submit",{...u.value}),w.value<h.value.length-1&&(v.value+=1))}function j(e){if(F.value||!b.value)return;const t=e.metaKey||e.ctrlKey;if(c.value||N.value){t&&e.key==="Enter"&&(e.preventDefault(),Q());return}e.key==="Enter"&&!e.shiftKey&&!t&&(e.preventDefault(),T())}he(()=>window.addEventListener("keydown",j)),be(()=>window.removeEventListener("keydown",j));function me(e){if(e?.type!=="update"||!e.widgetId)return;u.value={...u.value,[e.widgetId]:e.payload?.value};const t=b.value;if(!t||t.kind!=="block"||c.value)return;const n=q(t);if(n.length!==1)return;const o=n[0];if(o.id!==e.widgetId||o.props.questionType!=="single_choice")return;const i=e.payload?.value;i!=null&&i!==""&&setTimeout(()=>{b.value===t&&T()},350)}return(e,t)=>(f(),g("div",{class:"fu-form-render",style:J(oe.value)},[p("div",Ce,[p("div",{class:"fu-form-render__progress-fill",style:J({width:pe.value+"%"})},null,4)]),p("div",Te,[x(ve,{name:"fu-form-render-slide",mode:"out-in"},{default:ye(()=>[R.value?(f(),g("div",{key:R.value.id,class:"fu-form-render__step"},[R.value.kind==="review"?H(e.$slots,"review",{key:0,answers:u.value,submit:Q},void 0,!0):(f(),g(Y,{key:1},[x(xe,{block:R.value.block,theme:E.value,onAction:me},null,8,["block","theme"]),F.value?M("",!0):(f(),g("div",Se,[x(ke,{text:c.value?"Submit":"OK",variant:"solid",size:"lg",disabled:!C.value,onClick:t[0]||(t[0]=n=>c.value?Q():T())},null,8,["text","disabled"]),p("span",_e,[c.value?(f(),g(Y,{key:0},[t[1]||(t[1]=K(" press ",-1)),p("strong",null,we(ne.value),1),t[2]||(t[2]=K(" + ",-1)),t[3]||(t[3]=p("strong",null,"Enter ↵",-1))],64)):(f(),g(Y,{key:1},[t[4]||(t[4]=K(" press ",-1)),t[5]||(t[5]=p("strong",null,"Enter ↵",-1))],64))])]))],64))])):M("",!0)]),_:3})]),F.value?M("",!0):(f(),g("div",Be,[p("div",We,[x(G,{icon:U(qe),variant:"subtle",size:"md",tooltip:"Previous",disabled:w.value===0,onClick:ce},null,8,["icon","disabled"]),x(G,{icon:U(Fe),variant:"solid",size:"md",tooltip:"Next",disabled:!C.value||c.value||N.value,onClick:T},null,8,["icon","disabled"])]),H(e.$slots,"branding",{},void 0,!0)]))],4))}}),d=Re(X,[["__scopeId","data-v-7c5a12e5"]]);X.__docgenInfo={exportName:"default",displayName:"FormRender",description:"",tags:{},props:[{name:"document",required:!0,type:{name:"any"}}],events:[{name:"submit",type:{names:["Record"],elements:[{name:"string"},{name:"any"}]}}],slots:[{name:"review",scoped:!0,bindings:[{name:"answers",title:"binding"},{name:"submit",title:"binding"}]},{name:"branding"}],sourceFiles:["/Users/xavier/Documents/Websites/Skkido/Fusion-binary-ui/src/components/editor/pageRender/FormRender.vue"]};const De={title:"Editor/Render/FuFormRender",component:d,tags:["autodocs"],parameters:{layout:"fullscreen",docs:{description:{component:`
FuFormRender is a Typeform-style, page-at-a-time player for \`formPage\`
documents. It's a sibling of \`PageRenderer\`/\`BlockRenderer\`/
\`FuQuestionRenderer\` in the render package — a reusable component, not tied
to any one app's routing, fetch, or submission logic. It takes the raw
document as a prop and emits \`submit\` once the flow is confirmed.

It's deliberately **separate** from the scroll/slide presentation viewer —
mount this instead whenever \`document.meta.type === "formPage"\`, and leave
the presentation viewer untouched for everything else.

---

## Step model — one step per page

Each page in the document becomes one step, rendered exactly as authored —
every block on that page, in the order it was built, via \`BlockRenderer\`,
with no forced layout. A block with two questions in it shows both together
on the same screen, the same as it looks in the editor. One question per
page behaves like classic Typeform; several questions per page behaves like
a normal multi-section form. Both are just "how many widgets are on this
page" — nothing here special-cases either.

---

## No built-in Welcome/Ending screens

Add your own Welcome and Ending screens as real, content-only pages in the
document. They flatten into steps exactly like any other page.

---

## Navigation

Every step gets its own inline button right under the content:

\`\`\`vue
<FuFormRender :document="doc" @submit="handleSubmit">
  <template #branding>
    <div class="my-brand-pill">Powered by Acme</div>
  </template>
</FuFormRender>
\`\`\`

- On every step **except the last**: an **"OK"** button. Clicking it, or
  pressing plain **Enter**, advances. **Shift+Enter** is left alone, so it
  still makes a newline inside \`long_text\` questions.
- On the **last** step: the same button becomes **"Submit"**, with
  **Cmd/Ctrl+Enter** as its shortcut.
- All \`required\` questions on the current page must be answered before
  advancing — not just one.
- A stacked up/down chevron pair in the bottom-right corner is
  secondary/quick navigation. The down arrow disables on the last step and
  never submits.
- Next to the corner nav sits a \`#branding\` slot — empty by default.

---

## Conditional questions

A question with a \`conditions\` array is filtered out of its block's widget
list (not the whole page) when its condition isn't met:

\`\`\`json
{
  "conditions": [
    { "sourceWidgetId": "q-has-deadline", "operator": "equals", "value": "Yes" }
  ],
  "conditionLogic": "all"
}
\`\`\`

A page with 3 questions where the 2nd is conditional shows just the 1st and
3rd until the condition's answer makes the 2nd appear. Pages themselves are
never hidden — only individual conditional widgets within them.

The condition's \`value\` is written against the option's **text**
(\`"Yes"\`), while what's actually stored for a \`single_choice\` answer is the
option's **id** — FuFormRender resolves that automatically before comparing.

---

## Review step — optional \`#review\` slot

\`\`\`vue
<FuFormRender :document="doc" @submit="handleSubmit">
  <template #review="{ answers, submit }">
    <div class="my-review-screen">
      <h2>Double-check your answers</h2>
      <pre>{{ answers }}</pre>
      <button @click="submit">Submit</button>
    </div>
  </template>
</FuFormRender>
\`\`\`

- Inserted right after the last page that has any questions on it, before
  any trailing content-only pages (like an Ending screen).
- \`answers\` is the live \`{ [widgetId]: value }\` map collected so far.
- \`submit\` is the real internal submit function — call it from your own
  button whenever you want. FuFormRender's own inline OK/Submit row and the
  down-chevron both disable themselves automatically on this step.
- The up-chevron (Back) still works, so people can return to fix an answer.
- Fully opt-in — if you don't provide \`#review\`, nothing changes.

---

## Answers persist when navigating back

Going Back to a page you've already answered shows every question on it
exactly as you left it. Automatic and entirely internal.

---

## Usage

\`\`\`vue
<script setup>
import { ref, onMounted } from "vue"
import { useRoute } from "vue-router"
import FuFormRender from "@/components/editor/formRender/FuFormRender.vue"

const route = useRoute()
const formDocument = ref(null)

onMounted(async () => {
  const res = await fetch(\`/api/forms/\${route.params.formId}\`)
  formDocument.value = await res.json()
})

async function handleSubmit(answers) {
  await fetch(\`/api/forms/\${route.params.formId}/responses\`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ answers }),
  })
}
<\/script>

<template>
  <FuFormRender
    v-if="formDocument"
    :document="formDocument"
    @submit="handleSubmit"
  >
    <template #review="{ answers, submit }">
      <div class="review-screen">
        <h2>Review your answers</h2>
        <ul>
          <li v-for="(value, widgetId) in answers" :key="widgetId">
            {{ widgetId }}: {{ value }}
          </li>
        </ul>
        <button class="submit-btn" @click="submit">Submit</button>
      </div>
    </template>
  </FuFormRender>
  <div v-else class="loading-screen">Loading…</div>
</template>
\`\`\`
        `}}}},Z={id:"8a4f2c91-3e6d-4b8a-9c1f-7d2e5a8b3c4f",meta:{type:"formPage",name:"Client Intake Form",theme:{brandColor:"#6366f1",accentColor:"#e0e7ff",textColor:"#111827",questionFont:"inherit",questionFontSize:"26px"}},pages:[{id:"page-intro",name:"Welcome",blocks:[{id:"block-intro",backgroundColor:"#0a0a0a",backgroundOpacity:100,contentWidth:"sm",paddingTop:100,paddingBottom:80,columns:[{width:100,widgets:[{id:"w-intro-title",type:"text",props:{content:`<p style="text-align:center"><span style="color:#ffffff;font-size:40px;"><strong>Let's get to know you.</strong></span></p>`}},{id:"w-intro-sub",type:"text",props:{content:'<p style="text-align:center"><span style="color:#a1a1aa;font-size:15px;">A few quick questions — takes about 2 minutes.</span></p>'}}]}]}]},{id:"page-about",name:"About You",blocks:[{id:"block-about-header",backgroundColor:"#ffffff",contentWidth:"md",paddingTop:70,paddingBottom:20,columns:[{width:100,widgets:[{id:"w-about-title",type:"text",props:{content:'<p><span style="font-size:28px;"><strong>A little about you</strong></span></p>'}}]}]},{id:"block-about-questions",backgroundColor:"#ffffff",contentWidth:"md",paddingTop:20,paddingBottom:70,columns:[{width:100,widgets:[{id:"q-full-name",type:"question",props:{questionType:"short_text",label:"<p><strong>What's your full name?</strong></p>",placeholder:"Jane Smith",required:!0,options:[],value:null,conditions:[],conditionLogic:"all"}},{id:"q-has-deadline",type:"question",props:{questionType:"single_choice",label:"<p><strong>Do you have a fixed deadline?</strong></p>",placeholder:"",required:!0,options:[{id:"opt-1",text:"Yes",order:0},{id:"opt-2",text:"No",order:1}],value:null,conditions:[],conditionLogic:"all"}},{id:"q-deadline-date",type:"question",props:{questionType:"date",label:"<p><strong>What's the deadline?</strong></p>",placeholder:"",required:!1,options:[],value:null,conditions:[{id:"cond-1",sourceWidgetId:"q-has-deadline",operator:"equals",value:"Yes"}],conditionLogic:"all"}},{id:"q-notes",type:"question",props:{questionType:"long_text",label:"<p><strong>Anything else we should know?</strong></p>",placeholder:"Optional — goals, context, anything helpful...",required:!1,options:[],value:null,conditions:[],conditionLogic:"all"}}]}]}]},{id:"page-contact",name:"Contact",blocks:[{id:"block-contact",backgroundColor:"#0a0a0a",contentWidth:"md",paddingTop:80,paddingBottom:90,columns:[{width:100,widgets:[{id:"w-contact-title",type:"text",props:{content:'<p style="text-align:center"><span style="color:#ffffff;font-size:32px;"><strong>How can we reach you?</strong></span></p>'}},{id:"q-contact-details",type:"question",props:{questionType:"contact_details",label:"<p><strong>Your details</strong></p>",placeholder:"",required:!0,options:[],value:{firstName:"",lastName:"",email:"",phone:""},contactFields:{email:!0,phone:!0},conditions:[],conditionLogic:"all"}}]}]}]},{id:"page-ending",name:"Ending",blocks:[{id:"block-ending",backgroundColor:"#0a0a0a",contentWidth:"sm",paddingTop:120,paddingBottom:120,columns:[{width:100,widgets:[{id:"w-ending-title",type:"text",props:{content:`<p style="text-align:center"><span style="color:#ffffff;font-size:32px;"><strong>Thanks — we'll be in touch.</strong></span></p>`}}]}]}]}]},_={render:()=>({components:{FuFormRender:d},setup(){const s=k(null);function y(l){s.value=l,console.log("[FuFormRender] submitted:",l)}return{sampleDocument:Z,submitted:s,handleSubmit:y}},template:`
      <div style="height:100vh; position:relative;">
        <FuFormRender :document="sampleDocument" @submit="handleSubmit" />
        <pre
          v-if="submitted"
          style="position:fixed; top:16px; left:16px; z-index:20; max-width:360px; background:#111827; color:#93c5fd; padding:12px; border-radius:8px; font-size:12px;"
        >{{ JSON.stringify(submitted, null, 2) }}</pre>
      </div>
    `})},B={render:()=>({components:{FuFormRender:d},setup(){return{doc:{meta:{type:"formPage",theme:{brandColor:"#6366f1"}},pages:[{id:"page-1",blocks:[{id:"block-1",backgroundColor:"#ffffff",contentWidth:"md",paddingTop:60,paddingBottom:60,columns:[{width:100,widgets:[{id:"w-title",type:"text",props:{content:'<p><span style="font-size:28px;"><strong>Quick details</strong></span></p>'}},{id:"q-first-name",type:"question",props:{questionType:"short_text",label:"<p><strong>First name</strong></p>",placeholder:"Jane",required:!0,options:[],value:null,conditions:[],conditionLogic:"all"}},{id:"q-last-name",type:"question",props:{questionType:"short_text",label:"<p><strong>Last name</strong></p>",placeholder:"Smith",required:!0,options:[],value:null,conditions:[],conditionLogic:"all"}}]}]}]}]}}},template:`<FuFormRender :document="doc" @submit="(a) => console.log('submitted', a)" />`})},W={render:()=>({components:{FuFormRender:d},setup(){const s=k(!1);function y(l){s.value=!0,console.log("[FuFormRender] submitted from review step:",l)}return{sampleDocument:Z,submitted:s,handleSubmit:y}},template:`
      <div style="height:100vh; position:relative;">
        <FuFormRender :document="sampleDocument" @submit="handleSubmit">
          <template #review="{ answers, submit }">
            <div style="max-width:560px; margin:0 auto; padding:0 24px;">
              <p style="color:#6366f1; font-size:11px; letter-spacing:0.14em; font-weight:700; margin:0 0 8px;">
                ALMOST DONE
              </p>
              <h2 style="font-size:32px; font-weight:700; color:#111827; margin:0 0 24px;">
                Review your answers
              </h2>
              <div style="display:flex; flex-direction:column; gap:10px; margin-bottom:28px;">
                <div
                  v-for="(value, widgetId) in answers"
                  :key="widgetId"
                  style="display:flex; justify-content:space-between; gap:16px; padding:10px 14px; background:#f9fafb; border-radius:8px; font-size:13px;"
                >
                  <span style="color:#6b7280; font-family:monospace;">{{ widgetId }}</span>
                  <span style="color:#111827; font-weight:600; text-align:right;">{{ JSON.stringify(value) }}</span>
                </div>
              </div>
              <button
                type="button"
                style="height:48px; padding:0 28px; border:none; border-radius:10px; background:#6366f1; color:#fff; font-size:15px; font-weight:600; cursor:pointer;"
                @click="submit"
              >
                Confirm & Submit
              </button>
            </div>
          </template>
        </FuFormRender>
        <div
          v-if="submitted"
          style="position:fixed; top:16px; left:16px; z-index:20; background:#111827; color:#93c5fd; padding:10px 16px; border-radius:8px; font-size:13px;"
        >
          Submitted! Check the console for the full answers object.
        </div>
      </div>
    `})},z={render:()=>({components:{FuFormRender:d},setup(){return{doc:{meta:{type:"formPage",theme:{brandColor:"#4362FF"}},pages:[{id:"page-1",blocks:[{id:"block-1",backgroundColor:"#ffffff",contentWidth:"md",paddingTop:60,paddingBottom:60,columns:[{width:100,widgets:[{id:"q-has-deadline",type:"question",props:{questionType:"single_choice",label:"<p><strong>Do you have a fixed deadline?</strong></p>",required:!0,options:[{id:"opt-1",text:"Yes",order:0},{id:"opt-2",text:"No",order:1}],value:null,conditions:[],conditionLogic:"all"}},{id:"q-deadline-date",type:"question",props:{questionType:"date",label:"<p><strong>What's the deadline? (only shows if Yes)</strong></p>",required:!1,options:[],value:null,conditions:[{id:"cond-1",sourceWidgetId:"q-has-deadline",operator:"equals",value:"Yes"}],conditionLogic:"all"}},{id:"q-final",type:"question",props:{questionType:"short_text",label:"<p><strong>Your name</strong></p>",required:!0,options:[],value:null,conditions:[],conditionLogic:"all"}}]}]}]}]}}},template:`<FuFormRender :document="doc" @submit="(a) => console.log('submitted', a)" />`})},A={render:()=>({components:{FuFormRender:d},setup(){return{doc:{meta:{type:"formPage",theme:{brandColor:"#a6423a"}},pages:[{id:"page-1",blocks:[{id:"block-1",backgroundColor:"#ffffff",contentWidth:"md",paddingTop:60,paddingBottom:60,columns:[{width:100,widgets:[{id:"q-1",type:"question",props:{questionType:"short_text",label:"<p><strong>What should we call you?</strong></p>",required:!0,options:[],value:null,conditions:[],conditionLogic:"all"}}]}]}]}]}}},template:`
      <FuFormRender :document="doc" @submit="(a) => console.log('submitted', a)">
        <template #branding>
          <div style="display:flex; align-items:center; height:44px; padding:0 16px; border-radius:10px; background:#a6423a; color:#fff; font-size:13px; font-weight:600;">
            Powered by Acme
          </div>
        </template>
      </FuFormRender>
    `})},O={parameters:{docs:{description:{story:"Answer both questions on page 1, advance to page 2, then use the up-arrow (or Back) to return — both answers are still there, not reset."}}},render:()=>({components:{FuFormRender:d},setup(){return{doc:{meta:{type:"formPage",theme:{brandColor:"#059669"}},pages:[{id:"page-1",blocks:[{id:"block-1",backgroundColor:"#ffffff",contentWidth:"md",paddingTop:60,paddingBottom:60,columns:[{width:100,widgets:[{id:"q-1",type:"question",props:{questionType:"short_text",label:"<p><strong>Question 1 — type something</strong></p>",required:!1,options:[],value:null,conditions:[],conditionLogic:"all"}},{id:"q-2",type:"question",props:{questionType:"single_choice",label:"<p><strong>Question 2 — pick one</strong></p>",required:!1,options:[{id:"opt-1",text:"Option A",order:0},{id:"opt-2",text:"Option B",order:1}],value:null,conditions:[],conditionLogic:"all"}}]}]}]},{id:"page-2",blocks:[{id:"block-2",backgroundColor:"#ffffff",contentWidth:"md",paddingTop:60,paddingBottom:60,columns:[{width:100,widgets:[{id:"q-3",type:"question",props:{questionType:"short_text",label:"<p><strong>Question 3 — last one</strong></p>",required:!1,options:[],value:null,conditions:[],conditionLogic:"all"}}]}]}]}]}}},template:`<FuFormRender :document="doc" @submit="(a) => console.log('submitted', a)" />`})},L={render:()=>({components:{FuFormRender:d},setup(){return{doc:{meta:{type:"formPage",theme:{brandColor:"#6366f1"}},pages:[{id:"page-1",blocks:[{id:"block-split",backgroundColor:"#ffffff",contentWidth:"lg",paddingTop:60,paddingBottom:60,columns:[{width:50,widgets:[{id:"w-photo",type:"image",props:{src:"https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80",alt:"Team collaborating around a laptop",alignment:"stretch",opacity:100,borderRadius:16}}]},{width:50,widgets:[{id:"w-split-title",type:"text",props:{content:'<p><span style="font-size:24px;"><strong>A little about your team</strong></span></p>'}},{id:"q-team-size",type:"question",props:{questionType:"single_choice",label:"<p><strong>How big is your team?</strong></p>",required:!0,options:[{id:"opt-1",text:"Just me",order:0},{id:"opt-2",text:"2 – 10 people",order:1},{id:"opt-3",text:"11 – 50 people",order:2},{id:"opt-4",text:"50+ people",order:3}],value:null,conditions:[],conditionLogic:"all"}}]}]}]}]}}},template:`<FuFormRender :document="doc" @submit="(a) => console.log('submitted', a)" />`})},I={render:()=>({components:{FuFormRender:d},setup(){return{doc:{meta:{type:"formPage",theme:{brandColor:"#0a0a0a"}},pages:[{id:"page-1",blocks:[{id:"block-video-split",backgroundColor:"#0a0a0a",contentWidth:"lg",paddingTop:70,paddingBottom:70,columns:[{width:60,widgets:[{id:"w-video",type:"video",props:{src:"https://youtu.be/aqz-KE-bpKQ",aspectRatio:"16/9",contentWidth:"full",borderRadius:16}}]},{width:40,widgets:[{id:"w-video-eyebrow",type:"text",props:{content:'<p><span style="color:#a5b4fc;font-size:11px;letter-spacing:0.14em;"><strong>BEFORE WE CONTINUE</strong></span></p>'}},{id:"w-video-title",type:"text",props:{content:'<p><span style="color:#ffffff;font-size:26px;"><strong>A 60-second look at how we work</strong></span></p>'}},{id:"w-video-caption",type:"text",props:{content:'<p><span style="color:#71717a;font-size:13px;">No sound needed — captions included.</span></p>'}}]}]}]}]}}},template:`<FuFormRender :document="doc" @submit="(a) => console.log('submitted', a)" />`})};_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      FuFormRender
    },
    setup() {
      const submitted = ref<Record<string, any> | null>(null);
      function handleSubmit(answers: Record<string, any>) {
        submitted.value = answers;
        console.log("[FuFormRender] submitted:", answers);
      }
      return {
        sampleDocument,
        submitted,
        handleSubmit
      };
    },
    template: \`
      <div style="height:100vh; position:relative;">
        <FuFormRender :document="sampleDocument" @submit="handleSubmit" />
        <pre
          v-if="submitted"
          style="position:fixed; top:16px; left:16px; z-index:20; max-width:360px; background:#111827; color:#93c5fd; padding:12px; border-radius:8px; font-size:12px;"
        >{{ JSON.stringify(submitted, null, 2) }}</pre>
      </div>
    \`
  })
}`,..._.parameters?.docs?.source}}};B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      FuFormRender
    },
    setup() {
      const doc = {
        meta: {
          type: "formPage",
          theme: {
            brandColor: "#6366f1"
          }
        },
        pages: [{
          id: "page-1",
          blocks: [{
            id: "block-1",
            backgroundColor: "#ffffff",
            contentWidth: "md",
            paddingTop: 60,
            paddingBottom: 60,
            columns: [{
              width: 100,
              widgets: [{
                id: "w-title",
                type: "text",
                props: {
                  content: '<p><span style="font-size:28px;"><strong>Quick details</strong></span></p>'
                }
              }, {
                id: "q-first-name",
                type: "question",
                props: {
                  questionType: "short_text",
                  label: "<p><strong>First name</strong></p>",
                  placeholder: "Jane",
                  required: true,
                  options: [],
                  value: null,
                  conditions: [],
                  conditionLogic: "all"
                }
              }, {
                id: "q-last-name",
                type: "question",
                props: {
                  questionType: "short_text",
                  label: "<p><strong>Last name</strong></p>",
                  placeholder: "Smith",
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
    template: \`<FuFormRender :document="doc" @submit="(a) => console.log('submitted', a)" />\`
  })
}`,...B.parameters?.docs?.source}}};W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      FuFormRender
    },
    setup() {
      const submitted = ref(false);
      function handleSubmit(answers: Record<string, any>) {
        submitted.value = true;
        console.log("[FuFormRender] submitted from review step:", answers);
      }
      return {
        sampleDocument,
        submitted,
        handleSubmit
      };
    },
    template: \`
      <div style="height:100vh; position:relative;">
        <FuFormRender :document="sampleDocument" @submit="handleSubmit">
          <template #review="{ answers, submit }">
            <div style="max-width:560px; margin:0 auto; padding:0 24px;">
              <p style="color:#6366f1; font-size:11px; letter-spacing:0.14em; font-weight:700; margin:0 0 8px;">
                ALMOST DONE
              </p>
              <h2 style="font-size:32px; font-weight:700; color:#111827; margin:0 0 24px;">
                Review your answers
              </h2>
              <div style="display:flex; flex-direction:column; gap:10px; margin-bottom:28px;">
                <div
                  v-for="(value, widgetId) in answers"
                  :key="widgetId"
                  style="display:flex; justify-content:space-between; gap:16px; padding:10px 14px; background:#f9fafb; border-radius:8px; font-size:13px;"
                >
                  <span style="color:#6b7280; font-family:monospace;">{{ widgetId }}</span>
                  <span style="color:#111827; font-weight:600; text-align:right;">{{ JSON.stringify(value) }}</span>
                </div>
              </div>
              <button
                type="button"
                style="height:48px; padding:0 28px; border:none; border-radius:10px; background:#6366f1; color:#fff; font-size:15px; font-weight:600; cursor:pointer;"
                @click="submit"
              >
                Confirm & Submit
              </button>
            </div>
          </template>
        </FuFormRender>
        <div
          v-if="submitted"
          style="position:fixed; top:16px; left:16px; z-index:20; background:#111827; color:#93c5fd; padding:10px 16px; border-radius:8px; font-size:13px;"
        >
          Submitted! Check the console for the full answers object.
        </div>
      </div>
    \`
  })
}`,...W.parameters?.docs?.source}}};z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      FuFormRender
    },
    setup() {
      const doc = {
        meta: {
          type: "formPage",
          theme: {
            brandColor: "#4362FF"
          }
        },
        pages: [{
          id: "page-1",
          blocks: [{
            id: "block-1",
            backgroundColor: "#ffffff",
            contentWidth: "md",
            paddingTop: 60,
            paddingBottom: 60,
            columns: [{
              width: 100,
              widgets: [{
                id: "q-has-deadline",
                type: "question",
                props: {
                  questionType: "single_choice",
                  label: "<p><strong>Do you have a fixed deadline?</strong></p>",
                  required: true,
                  options: [{
                    id: "opt-1",
                    text: "Yes",
                    order: 0
                  }, {
                    id: "opt-2",
                    text: "No",
                    order: 1
                  }],
                  value: null,
                  conditions: [],
                  conditionLogic: "all"
                }
              }, {
                id: "q-deadline-date",
                type: "question",
                props: {
                  questionType: "date",
                  label: "<p><strong>What's the deadline? (only shows if Yes)</strong></p>",
                  required: false,
                  options: [],
                  value: null,
                  conditions: [{
                    id: "cond-1",
                    sourceWidgetId: "q-has-deadline",
                    operator: "equals",
                    value: "Yes"
                  }],
                  conditionLogic: "all"
                }
              }, {
                id: "q-final",
                type: "question",
                props: {
                  questionType: "short_text",
                  label: "<p><strong>Your name</strong></p>",
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
    template: \`<FuFormRender :document="doc" @submit="(a) => console.log('submitted', a)" />\`
  })
}`,...z.parameters?.docs?.source}}};A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      FuFormRender
    },
    setup() {
      const doc = {
        meta: {
          type: "formPage",
          theme: {
            brandColor: "#a6423a"
          }
        },
        pages: [{
          id: "page-1",
          blocks: [{
            id: "block-1",
            backgroundColor: "#ffffff",
            contentWidth: "md",
            paddingTop: 60,
            paddingBottom: 60,
            columns: [{
              width: 100,
              widgets: [{
                id: "q-1",
                type: "question",
                props: {
                  questionType: "short_text",
                  label: "<p><strong>What should we call you?</strong></p>",
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
    template: \`
      <FuFormRender :document="doc" @submit="(a) => console.log('submitted', a)">
        <template #branding>
          <div style="display:flex; align-items:center; height:44px; padding:0 16px; border-radius:10px; background:#a6423a; color:#fff; font-size:13px; font-weight:600;">
            Powered by Acme
          </div>
        </template>
      </FuFormRender>
    \`
  })
}`,...A.parameters?.docs?.source}}};O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "Answer both questions on page 1, advance to page 2, then use the up-arrow (or Back) to return — both answers are still there, not reset."
      }
    }
  },
  render: () => ({
    components: {
      FuFormRender
    },
    setup() {
      const doc = {
        meta: {
          type: "formPage",
          theme: {
            brandColor: "#059669"
          }
        },
        pages: [{
          id: "page-1",
          blocks: [{
            id: "block-1",
            backgroundColor: "#ffffff",
            contentWidth: "md",
            paddingTop: 60,
            paddingBottom: 60,
            columns: [{
              width: 100,
              widgets: [{
                id: "q-1",
                type: "question",
                props: {
                  questionType: "short_text",
                  label: "<p><strong>Question 1 — type something</strong></p>",
                  required: false,
                  options: [],
                  value: null,
                  conditions: [],
                  conditionLogic: "all"
                }
              }, {
                id: "q-2",
                type: "question",
                props: {
                  questionType: "single_choice",
                  label: "<p><strong>Question 2 — pick one</strong></p>",
                  required: false,
                  options: [{
                    id: "opt-1",
                    text: "Option A",
                    order: 0
                  }, {
                    id: "opt-2",
                    text: "Option B",
                    order: 1
                  }],
                  value: null,
                  conditions: [],
                  conditionLogic: "all"
                }
              }]
            }]
          }]
        }, {
          id: "page-2",
          blocks: [{
            id: "block-2",
            backgroundColor: "#ffffff",
            contentWidth: "md",
            paddingTop: 60,
            paddingBottom: 60,
            columns: [{
              width: 100,
              widgets: [{
                id: "q-3",
                type: "question",
                props: {
                  questionType: "short_text",
                  label: "<p><strong>Question 3 — last one</strong></p>",
                  required: false,
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
    template: \`<FuFormRender :document="doc" @submit="(a) => console.log('submitted', a)" />\`
  })
}`,...O.parameters?.docs?.source}}};L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      FuFormRender
    },
    setup() {
      const doc = {
        meta: {
          type: "formPage",
          theme: {
            brandColor: "#6366f1"
          }
        },
        pages: [{
          id: "page-1",
          blocks: [{
            id: "block-split",
            backgroundColor: "#ffffff",
            contentWidth: "lg",
            paddingTop: 60,
            paddingBottom: 60,
            columns: [{
              width: 50,
              widgets: [{
                id: "w-photo",
                type: "image",
                props: {
                  src: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80",
                  alt: "Team collaborating around a laptop",
                  alignment: "stretch",
                  opacity: 100,
                  borderRadius: 16
                }
              }]
            }, {
              width: 50,
              widgets: [{
                id: "w-split-title",
                type: "text",
                props: {
                  content: '<p><span style="font-size:24px;"><strong>A little about your team</strong></span></p>'
                }
              }, {
                id: "q-team-size",
                type: "question",
                props: {
                  questionType: "single_choice",
                  label: "<p><strong>How big is your team?</strong></p>",
                  required: true,
                  options: [{
                    id: "opt-1",
                    text: "Just me",
                    order: 0
                  }, {
                    id: "opt-2",
                    text: "2 – 10 people",
                    order: 1
                  }, {
                    id: "opt-3",
                    text: "11 – 50 people",
                    order: 2
                  }, {
                    id: "opt-4",
                    text: "50+ people",
                    order: 3
                  }],
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
    template: \`<FuFormRender :document="doc" @submit="(a) => console.log('submitted', a)" />\`
  })
}`,...L.parameters?.docs?.source}}};I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      FuFormRender
    },
    setup() {
      const doc = {
        meta: {
          type: "formPage",
          theme: {
            brandColor: "#0a0a0a"
          }
        },
        pages: [{
          id: "page-1",
          blocks: [{
            id: "block-video-split",
            backgroundColor: "#0a0a0a",
            contentWidth: "lg",
            paddingTop: 70,
            paddingBottom: 70,
            columns: [{
              width: 60,
              widgets: [{
                id: "w-video",
                type: "video",
                props: {
                  src: "https://youtu.be/aqz-KE-bpKQ",
                  aspectRatio: "16/9",
                  contentWidth: "full",
                  borderRadius: 16
                }
              }]
            }, {
              width: 40,
              widgets: [{
                id: "w-video-eyebrow",
                type: "text",
                props: {
                  content: '<p><span style="color:#a5b4fc;font-size:11px;letter-spacing:0.14em;"><strong>BEFORE WE CONTINUE</strong></span></p>'
                }
              }, {
                id: "w-video-title",
                type: "text",
                props: {
                  content: '<p><span style="color:#ffffff;font-size:26px;"><strong>A 60-second look at how we work</strong></span></p>'
                }
              }, {
                id: "w-video-caption",
                type: "text",
                props: {
                  content: '<p><span style="color:#71717a;font-size:13px;">No sound needed — captions included.</span></p>'
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
    template: \`<FuFormRender :document="doc" @submit="(a) => console.log('submitted', a)" />\`
  })
}`,...I.parameters?.docs?.source}}};const Me=["FullFlow","TwoQuestionsOnOnePage","WithReviewStep","ConditionalQuestionOnSamePage","WithBranding","AnswerPersistsOnBack","MultiColumnImageAndQuestion","MultiColumnVideoAndText"];export{O as AnswerPersistsOnBack,z as ConditionalQuestionOnSamePage,_ as FullFlow,L as MultiColumnImageAndQuestion,I as MultiColumnVideoAndText,B as TwoQuestionsOnOnePage,A as WithBranding,W as WithReviewStep,Me as __namedExportsOrder,De as default};
