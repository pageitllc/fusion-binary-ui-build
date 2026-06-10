import{d as v,b as u,F as k,e as I,o as c,f as S,r as y}from"./iframe-D3vfv6YP.js";import{_ as T}from"./PageRenderer-DHbFgDKQ.js";import"./preload-helper-Ct5FWWRu.js";import"./BlockRenderer-DQwyHh_D.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const z={class:"document-root"},g=v({__name:"FuDocumentRenderer",props:{document:{}},emits:["action"],setup(s){return(i,o)=>(c(),u("div",z,[(c(!0),u(k,null,I(s.document.pages,a=>(c(),S(T,{key:a.id,page:a,onAction:o[0]||(o[0]=e=>i.$emit("action",e))},null,8,["page"]))),128))]))}});g.__docgenInfo={exportName:"default",displayName:"FuDocumentRenderer",description:"",tags:{},props:[{name:"document",required:!0,type:{name:"any"}}],events:[{name:"action"}],sourceFiles:["/Users/xavier/Documents/Websites/Skkido/Fusion-binary-ui/src/components/editor/documentRender/FuDocumentRenderer.vue"]};const C={title:"Renderer/DocumentRenderer",component:g,tags:["autodocs"],parameters:{layout:"fullscreen",docs:{description:{component:`
The **Master Orchestration Engine**. This component recursively transforms a nested JSON tree into a
multi-page document and acts as the final destination for all widget events in the system.

---

# 1. Architecture Context

\`\`\`
DocumentRenderer          ← you are here
  └── PageRenderer        ← per page in document.pages[]
        └── BlockRenderer ← per block in page.blocks[]
              └── <component :is="registry[widget.type]" />
                    └── FuSchedulerWidget / ServiceWidget / TextWidget / …
\`\`\`

- **DocumentRenderer** owns the document data and the \`@action\` handler.
- **PageRenderer** and **BlockRenderer** are pure relays — they never inspect or transform events.
- **BlockRenderer** is the only layer that normalises events. It converts every widget-specific emit
  (\`date-select\`, \`month-change\`, \`update\`, \`action\`) into the single unified shape below before
  passing it upward.

---

# 2. The Unified Action Shape

Every event that reaches \`DocumentRenderer @action\` looks like this:

\`\`\`ts
{
  widgetId: string   // the widget's id from the document JSON
  type:     string   // what happened — see table below
  payload:  any      // event-specific data
}
\`\`\`

### All event types

| type | Widget | Trigger | payload shape |
|---|---|---|---|
| \`date-select\` | scheduler | User clicks an available date | \`{ date: "2026-06-15" }\` |
| \`month-change\` | scheduler | User navigates prev / next month | \`{ year: 2026, month: 7 }\` |
| \`update\` | scheduler | User confirms a time slot | \`{ bookedSlot: { id, start, end } }\` |
| \`action\` | service / other | Any other widget interaction | widget-specific |

---

# 3. How to Handle Events

Your application receives all events through a single \`@action\` handler on \`DocumentRenderer\`.
Use the \`type\` field to route to the right logic:

\`\`\`ts
function handleAction({ widgetId, type, payload }) {
  switch (type) {

    case 'month-change':
      // User navigated the calendar — fetch available dates for the new month
      // then push them back into the widget props so the calendar updates
      fetchAvailability(payload.year, payload.month).then(dates => {
        updateWidgetProp(widgetId, 'availableDates', dates)
      })
      break

    case 'date-select':
      // User clicked a date — show the loading spinner then inject real slots
      updateWidgetProp(widgetId, 'slotsLoading', true)
      updateWidgetProp(widgetId, 'slots', [])
      fetchSlots(payload.date).then(slots => {
        updateWidgetProp(widgetId, 'slots', slots)
        updateWidgetProp(widgetId, 'slotsLoading', false)
      })
      break

    case 'update':
      // User confirmed a slot — payload.bookedSlot has the full slot object
      createBooking(payload.bookedSlot).then(() => {
        router.push('/booking-confirmed')
      })
      break

  }
}
\`\`\`

### Updating widget props back into the document

The scheduler is a **controlled** widget — it has no internal availability or slot state.
Your handler is responsible for pushing data back in via the document tree:

\`\`\`ts
// Helper: find a widget anywhere in the document and update a prop
function updateWidgetProp(widgetId: string, key: string, value: any) {
  for (const page of document.value.pages) {
    for (const block of page.blocks) {
      for (const col of block.columns) {
        const widget = col.widgets.find(w => w.id === widgetId)
        if (widget) {
          widget.props[key] = value
          return
        }
      }
    }
  }
}
\`\`\`

Because \`document\` is a Vue \`ref\`, mutating \`widget.props\` is reactive —
the scheduler will re-render with the new slots or available dates automatically.

---

# 4. Scheduler Data Formats

### availableDates
Plain ISO date strings. The backend returns only dates that actually have slots.
Dates not in this array show a grey unclickable circle.

\`\`\`ts
availableDates: string[]

// Example
["2026-06-10", "2026-06-12", "2026-06-15", "2026-06-17"]
\`\`\`

### slots
Each slot needs an \`id\`, \`start\`, and \`end\` in ISO 8601 UTC.
The widget converts these to the viewer's local timezone automatically.

\`\`\`ts
interface FuSlot {
  id:    string
  start: string  // ISO 8601 UTC
  end:   string  // ISO 8601 UTC
}

// Example
[
  { id: "slot_001", start: "2026-06-15T09:00:00.000Z", end: "2026-06-15T09:30:00.000Z" },
  { id: "slot_002", start: "2026-06-15T10:00:00.000Z", end: "2026-06-15T10:30:00.000Z" },
]
\`\`\`

---

# 5. Full Backend Flow

\`\`\`
Document mounts
  → scheduler renders with initial availableDates for current month

User navigates to next month
  → @action fires: { widgetId, type: "month-change", payload: { year: 2026, month: 8 } }
    → GET /availability?year=2026&month=8
      → response: ["2026-08-04", "2026-08-05", …]
        → updateWidgetProp(widgetId, "availableDates", response)
          → calendar re-renders with new circles

User clicks an available date
  → @action fires: { widgetId, type: "date-select", payload: { date: "2026-08-04" } }
    → updateWidgetProp(widgetId, "slotsLoading", true)
    → GET /slots?date=2026-08-04
      → response: [{ id, start, end }, …]
        → updateWidgetProp(widgetId, "slots", response)
        → updateWidgetProp(widgetId, "slotsLoading", false)
          → time slot panel slides in

User selects a slot and clicks Confirm
  → @action fires: { widgetId, type: "update", payload: { bookedSlot: { id, start, end } } }
    → POST /bookings { slotId: payload.bookedSlot.id }
      → redirect to confirmation page
\`\`\`

---

# 6. Complete Usage Example

\`\`\`vue
<script setup lang="ts">
import { ref } from 'vue'
import DocumentRenderer from '@/components/renderer/FuDocumentRenderer.vue'

const document = ref(myDocumentPayload)

function updateWidgetProp(widgetId: string, key: string, value: any) {
  for (const page of document.value.pages) {
    for (const block of page.blocks) {
      for (const col of block.columns) {
        const widget = col.widgets.find(w => w.id === widgetId)
        if (widget) { widget.props[key] = value; return }
      }
    }
  }
}

async function handleAction({ widgetId, type, payload }: any) {
  if (type === 'month-change') {
    const dates = await fetchAvailability(payload.year, payload.month)
    updateWidgetProp(widgetId, 'availableDates', dates)
  }

  if (type === 'date-select') {
    updateWidgetProp(widgetId, 'slotsLoading', true)
    updateWidgetProp(widgetId, 'slots', [])
    const slots = await fetchSlots(payload.date)
    updateWidgetProp(widgetId, 'slots', slots)
    updateWidgetProp(widgetId, 'slotsLoading', false)
  }

  if (type === 'update') {
    await createBooking(payload.bookedSlot)
    router.push('/confirmed')
  }
}
<\/script>

<template>
  <DocumentRenderer :document="document" @action="handleAction" />
</template>
\`\`\`
        `.trim()}}}};function m(s,i){if(s&&i)return[2,3,5,8,9,10,12,15,16,17,19,22,23,24].map(e=>`${s}-${String(i).padStart(2,"0")}-${String(e).padStart(2,"0")}`);const o=[],a=new Date;a.setHours(0,0,0,0);for(let e=3;e>=1;e--){const n=new Date(a);n.setDate(n.getDate()-e),o.push(n.toLocaleDateString("en-CA"))}for(let e=1;e<=10;e++){const n=new Date(a);n.setDate(n.getDate()+e*2),o.push(n.toLocaleDateString("en-CA"))}return o}const h={id:"3d15dfae-c2bc-4569-8c62-8376780e9b4f",pages:[{id:"page-cover",name:"Cover",styles:{backgroundColor:"#1a3d2b",backgroundImage:"",backgroundOpacity:1},blocks:[{id:"block-cover-top",columns:[{width:100,widgets:[{id:"widget-cover-tag",type:"text",props:{content:'<p><span style="background-color: rgb(255, 220, 50); color: rgb(20, 50, 30); font-family: Inter, sans-serif; font-size: 12px; font-weight: 700; letter-spacing: 0.12em; padding: 4px 10px; border-radius: 4px;">MOBILE APP PROPOSAL</span></p>'}},{id:"widget-cover-h1",type:"text",props:{content:`<p><span style="color: rgb(255, 255, 255); font-family: Georgia, serif; font-size: 64px; line-height: 1.1;">"We'll build the app</span></p><p><span style="color: rgb(255, 220, 50); font-family: Georgia, serif; font-size: 64px; font-style: italic;">your users can't</span></p><p><span style="color: rgb(255, 255, 255); font-family: Georgia, serif; font-size: 64px;">put down."</span></p>`}},{id:"widget-cover-attr",type:"text",props:{content:'<p><span style="color: rgb(180, 210, 180); font-family: Inter, sans-serif; font-size: 14px;"><strong>Fusion Studio</strong> · Prepared for Client 66 · Nov 2025</span></p>'}}]}],backgroundColor:"#1a3d2b",backgroundOpacity:100,backgroundImage:"",contentWidth:"md",paddingTop:100,paddingBottom:60},{id:"block-cover-image",columns:[{width:100,widgets:[{id:"widget-cover-img",type:"image",props:{src:"https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&q=80&w=1200",imageWidth:900}}]}],backgroundColor:"#14301f",backgroundOpacity:100,backgroundImage:"",contentWidth:"lg",paddingTop:0,paddingBottom:0},{id:"block-cover-stats",columns:[{width:33.33,widgets:[{id:"widget-s1",type:"text",props:{content:'<p style="text-align:center"><span style="color: rgb(255,220,50); font-family: Georgia, serif; font-size: 48px; font-style:italic;"><strong>50+</strong></span></p><p style="text-align:center"><span style="color: rgb(200,230,200); font-family: Inter, sans-serif; font-size: 13px;">Apps shipped</span></p>'}}]},{width:33.33,widgets:[{id:"widget-s2",type:"text",props:{content:'<p style="text-align:center"><span style="color: rgb(255,220,50); font-family: Georgia, serif; font-size: 48px; font-style:italic;"><strong>4.8★</strong></span></p><p style="text-align:center"><span style="color: rgb(200,230,200); font-family: Inter, sans-serif; font-size: 13px;">Avg App Store rating</span></p>'}}]},{width:33.33,widgets:[{id:"widget-s3",type:"text",props:{content:'<p style="text-align:center"><span style="color: rgb(255,220,50); font-family: Georgia, serif; font-size: 48px; font-style:italic;"><strong>12wk</strong></span></p><p style="text-align:center"><span style="color: rgb(200,230,200); font-family: Inter, sans-serif; font-size: 13px;">MVP to App Store</span></p>'}}]}],backgroundColor:"#0f2218",backgroundOpacity:100,backgroundImage:"",contentWidth:"lg",paddingTop:48,paddingBottom:48}]},{id:"page-about",name:"About",styles:{backgroundColor:"#fffdf0",backgroundImage:"",backgroundOpacity:1},blocks:[{id:"block-quote",columns:[{width:100,widgets:[{id:"widget-big-quote",type:"text",props:{content:`<p style="text-align:center"><span style="color: rgb(20,50,30); font-family: Georgia, serif; font-size: 42px; font-style: italic; line-height: 1.3;">"We don't just write code — we craft experiences that keep users coming back."</span></p><p style="text-align:center"><span style="color: rgb(80,100,80); font-family: Inter, sans-serif; font-size: 14px;"><strong>Fusion Studio Team</strong></span></p>`}}]}],backgroundColor:"#ffdc32",backgroundOpacity:100,backgroundImage:"",contentWidth:"md",paddingTop:80,paddingBottom:80},{id:"block-about-cols",columns:[{width:50,widgets:[{id:"widget-about-img",type:"image",props:{src:"https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&q=80&w=800",imageWidth:600}}]},{width:50,widgets:[{id:"widget-about-label",type:"text",props:{content:'<p><span style="background-color: rgb(255,220,50); color: rgb(20,50,30); font-family: Inter, sans-serif; font-size: 11px; font-weight: 700; letter-spacing: 0.1em; padding: 3px 8px;">WHO WE ARE</span></p>'}},{id:"widget-about-title",type:"text",props:{content:'<p><span style="color: rgb(20,50,30); font-family: Georgia, serif; font-size: 38px;">A studio obsessed with mobile.</span></p>'}},{id:"widget-about-body",type:"text",props:{content:`<p><span style="color: rgb(60,80,60); font-family: Inter, sans-serif; font-size: 15px;">Fusion Studio is a mobile-first development team. Since 2019 we've shipped React Native, Swift, and Kotlin apps for fintech, health, e-commerce, and SaaS clients worldwide.</span></p><p>&nbsp;</p><p><span style="color: rgb(60,80,60); font-family: Inter, sans-serif; font-size: 15px;">Small squad. Big output. You'll always speak to the engineer building your product — not a project manager reading from a ticket.</span></p>`}}]}],backgroundColor:"#fffdf0",backgroundOpacity:100,backgroundImage:"",contentWidth:"lg",paddingTop:80,paddingBottom:80},{id:"block-principles",columns:[{width:33.33,widgets:[{id:"widget-p1",type:"text",props:{content:'<p><span style="color: rgb(20,50,30); font-family: Georgia, serif; font-size: 32px; font-style:italic;">Speed</span></p><p><span style="color: rgb(60,80,60); font-family: Inter, sans-serif; font-size: 14px;">First wireframes in 7 days. First build in your hands within 3 weeks of kickoff.</span></p>'}}]},{width:33.33,widgets:[{id:"widget-p2",type:"text",props:{content:'<p><span style="color: rgb(20,50,30); font-family: Georgia, serif; font-size: 32px; font-style:italic;">Ownership</span></p><p><span style="color: rgb(60,80,60); font-family: Inter, sans-serif; font-size: 14px;">All source code, assets, and accounts belong to you. Always. No lock-in, ever.</span></p>'}}]},{width:33.33,widgets:[{id:"widget-p3",type:"text",props:{content:`<p><span style="color: rgb(20,50,30); font-family: Georgia, serif; font-size: 32px; font-style:italic;">Quality</span></p><p><span style="color: rgb(60,80,60); font-family: Inter, sans-serif; font-size: 14px;">Every release is tested on real devices. We don't ship until it's ready. No exceptions.</span></p>`}}]}],backgroundColor:"#1a3d2b",backgroundOpacity:100,backgroundImage:"",contentWidth:"lg",paddingTop:60,paddingBottom:60}]},{id:"page-services",name:"Services",styles:{backgroundColor:"#fffdf0",backgroundImage:"",backgroundOpacity:1},blocks:[{id:"block-svc-header",columns:[{width:100,widgets:[{id:"widget-svc-tag",type:"text",props:{content:`<p><span style="background-color: rgb(255,220,50); color: rgb(20,50,30); font-family: Inter, sans-serif; font-size: 11px; font-weight: 700; letter-spacing: 0.1em; padding: 3px 8px;">WHAT'S INCLUDED</span></p>`}},{id:"widget-svc-title",type:"text",props:{content:'<p><span style="color: rgb(20,50,30); font-family: Georgia, serif; font-size: 48px;">Your core build.</span></p>'}},{id:"widget-svc-sub",type:"text",props:{content:'<p><span style="color: rgb(80,100,80); font-family: Inter, sans-serif; font-size: 16px;">Everything below is standard in your proposal. No surprises, no hidden costs.</span></p>'}},{id:"widget-svc-div",type:"divider",props:{}}]}],backgroundColor:"#fffdf0",backgroundOpacity:100,backgroundImage:"",contentWidth:"lg",paddingTop:80,paddingBottom:20},{id:"block-core-svcs",columns:[{width:100,widgets:[{id:"widget-core-service",type:"service",props:{layout:"row",selectionMode:"view",selectionRequired:!1,widgetDisplay:{showImage:!0,showDescription:!0,showQuantity:!1,showUnitPrice:!1,showServicePrice:!1},itemStyle:{bgColor:"#ffffff",borderRadius:4,bgOpacity:100,shadow:4},pricingStyle:{color:"#1a3d2b",fontSize:20,fontFamily:"Georgia"},selectedServiceIds:[],services:[{_id:"svc-c1",name:'<p><span style="font-size: 21px; font-family: Georgia, serif; color: rgb(20,50,30);">UX/UI Design & Prototyping</span></p>',description:'<p><span style="color: rgb(75,85,99); font-size: 15px;">Wireframes to high-fidelity Figma prototypes. User flow mapping, component library, and full design system handoff before a line of code is written.</span></p>',unitPrice:"£3,200",quantity:1,unit:"project",image:"https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&q=80&w=600",buttonText:"Select",selectedButtonText:"Selected"},{_id:"svc-c2",name:'<p><span style="font-size: 21px; font-family: Georgia, serif; color: rgb(20,50,30);">React Native App Development</span></p>',description:'<p><span style="color: rgb(75,85,99); font-size: 15px;">Full cross-platform iOS & Android build. Auth, push notifications, offline support, deep linking, and App Store / Play Store submission. All source code is yours.</span></p>',unitPrice:"£12,000",quantity:1,unit:"project",image:"https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&q=80&w=600",buttonText:"Select",selectedButtonText:"Selected"},{_id:"svc-c3",name:'<p><span style="font-size: 21px; font-family: Georgia, serif; color: rgb(20,50,30);">Backend API & Database</span></p>',description:'<p><span style="color: rgb(75,85,99); font-size: 15px;">Node.js REST API with PostgreSQL or Firebase. User management, RBAC, file storage, webhooks, and a fully documented Postman collection. AWS hosted.</span></p>',unitPrice:"£6,500",quantity:1,unit:"project",image:"https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&q=80&w=600",buttonText:"Select",selectedButtonText:"Selected"}]}}]}],backgroundColor:"#fffdf0",backgroundOpacity:100,backgroundImage:"",contentWidth:"lg",paddingTop:20,paddingBottom:40},{id:"block-addons-header",columns:[{width:100,widgets:[{id:"widget-addon-tag",type:"text",props:{content:'<p><span style="background-color: rgb(255,220,50); color: rgb(20,50,30); font-family: Inter, sans-serif; font-size: 11px; font-weight: 700; letter-spacing: 0.1em; padding: 3px 8px;">OPTIONAL ADD-ONS</span></p>'}},{id:"widget-addon-title",type:"text",props:{content:'<p><span style="color: rgb(20,50,30); font-family: Georgia, serif; font-size: 40px;">Supercharge your app.</span></p>'}},{id:"widget-addon-sub",type:"text",props:{content:'<p><span style="color: rgb(80,100,80); font-family: Inter, sans-serif; font-size: 15px;">Select any additional modules. These can be built into the initial sprint or added later.</span></p>'}},{id:"widget-addon-div",type:"divider",props:{}}]}],backgroundColor:"#1a3d2b",backgroundOpacity:100,backgroundImage:"",contentWidth:"lg",paddingTop:60,paddingBottom:20},{id:"block-addon-svcs",columns:[{width:100,widgets:[{id:"widget-addon-service",type:"service",props:{layout:"2col",selectionMode:"multiple",selectionRequired:!1,widgetDisplay:{showImage:!0,showDescription:!0,showQuantity:!0,showUnitPrice:!0,showServicePrice:!0},itemStyle:{bgColor:"#0f2218",borderRadius:4,bgOpacity:100,shadow:0},pricingStyle:{color:"#ffdc32",fontSize:22,fontFamily:"Georgia"},selectedServiceIds:["svc-a2"],services:[{_id:"svc-a1",name:'<p><span style="font-size: 18px; font-family: Georgia, serif; color: rgb(255,255,255);">In-App Payments</span></p>',description:'<p><span style="color: rgb(180,210,180); font-size: 14px;">Stripe for one-time & subscriptions. Apple Pay, Google Pay, receipt emails, and failed payment handling included.</span></p>',unitPrice:"£2,400",quantity:1,unit:"project",image:"https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&q=80&w=600",buttonText:"Add module",selectedButtonText:"✓ Added"},{_id:"svc-a2",name:'<p><span style="font-size: 18px; font-family: Georgia, serif; color: rgb(255,255,255);">Real-Time Chat & Notifications</span></p>',description:'<p><span style="color: rgb(180,210,180); font-size: 14px;">In-app messaging via Socket.io or Stream. Push notifications via FCM. Read receipts, typing indicators, and notification preferences.</span></p>',unitPrice:"£2,800",quantity:1,unit:"project",image:"https://images.unsplash.com/photo-1611746872915-64382b5c76da?auto=format&q=80&w=600",buttonText:"Add module",selectedButtonText:"✓ Added"},{_id:"svc-a3",name:'<p><span style="font-size: 18px; font-family: Georgia, serif; color: rgb(255,255,255);">Analytics & Crash Reporting</span></p>',description:'<p><span style="color: rgb(180,210,180); font-size: 14px;">Mixpanel or Amplitude setup. Sentry crash reporting with Slack alerts. Custom retention and funnel dashboards.</span></p>',unitPrice:"£1,200",quantity:1,unit:"project",image:"https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&q=80&w=600",buttonText:"Add module",selectedButtonText:"✓ Added"},{_id:"svc-a4",name:'<p><span style="font-size: 18px; font-family: Georgia, serif; color: rgb(255,255,255);">Admin Dashboard</span></p>',description:'<p><span style="color: rgb(180,210,180); font-size: 14px;">React web admin panel. Manage users, view analytics, configure app settings, and handle support — all in one place.</span></p>',unitPrice:"£3,600",quantity:1,unit:"project",image:"https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&q=80&w=600",buttonText:"Add module",selectedButtonText:"✓ Added"},{_id:"svc-a5",name:'<p><span style="font-size: 18px; font-family: Georgia, serif; color: rgb(255,255,255);">Ongoing Maintenance</span></p>',description:'<p><span style="color: rgb(180,210,180); font-size: 14px;">Monthly retainer covering OS updates, dependency patches, bug fixes, and up to 8 hours of feature dev/mo. Priority Slack support.</span></p>',unitPrice:"£850",quantity:1,unit:"mo",image:"https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&q=80&w=600",buttonText:"Add module",selectedButtonText:"✓ Added"},{_id:"svc-a6",name:'<p><span style="font-size: 18px; font-family: Georgia, serif; color: rgb(255,255,255);">App Store Optimisation</span></p>',description:'<p><span style="color: rgb(180,210,180); font-size: 14px;">Keyword research, optimised listing copy, screenshot design, and preview video for App Store & Play Store. A/B testing via Google Experiments.</span></p>',unitPrice:"£1,100",quantity:1,unit:"project",image:"https://images.unsplash.com/photo-1607252650355-f7fd0460ccdb?auto=format&q=80&w=600",buttonText:"Add module",selectedButtonText:"✓ Added"}]}}]}],backgroundColor:"#1a3d2b",backgroundOpacity:100,backgroundImage:"",contentWidth:"lg",paddingTop:20,paddingBottom:80}]},{id:"page-process",name:"Process",styles:{backgroundColor:"#ffdc32",backgroundImage:"",backgroundOpacity:1},blocks:[{id:"block-process-title",columns:[{width:100,widgets:[{id:"widget-proc-tag",type:"text",props:{content:'<p><span style="background-color: rgb(20,50,30); color: rgb(255,220,50); font-family: Inter, sans-serif; font-size: 11px; font-weight: 700; letter-spacing: 0.1em; padding: 3px 8px;">HOW WE BUILD</span></p>'}},{id:"widget-proc-title",type:"text",props:{content:'<p><span style="color: rgb(20,50,30); font-family: Georgia, serif; font-size: 52px;">From idea to App Store in 12 weeks.</span></p>'}}]}],backgroundColor:"#ffdc32",backgroundOpacity:100,backgroundImage:"",contentWidth:"lg",paddingTop:80,paddingBottom:40},{id:"block-process-steps",columns:[{width:25,widgets:[{id:"widget-ps1",type:"text",props:{content:'<p><span style="color: rgb(20,50,30); font-family: Georgia, serif; font-size: 52px; font-style:italic;">01</span></p><p><span style="color: rgb(20,50,30); font-family: Inter, sans-serif; font-size: 16px;"><strong>Discovery</strong></span></p><p><span style="color: rgb(60,90,60); font-family: Inter, sans-serif; font-size: 14px;">Weeks 1–2. Requirements, user stories, tech stack, kickoff.</span></p>'}}]},{width:25,widgets:[{id:"widget-ps2",type:"text",props:{content:'<p><span style="color: rgb(20,50,30); font-family: Georgia, serif; font-size: 52px; font-style:italic;">02</span></p><p><span style="color: rgb(20,50,30); font-family: Inter, sans-serif; font-size: 16px;"><strong>Design</strong></span></p><p><span style="color: rgb(60,90,60); font-family: Inter, sans-serif; font-size: 14px;">Weeks 3–5. Wireframes, UI, component library, prototype sign-off.</span></p>'}}]},{width:25,widgets:[{id:"widget-ps3",type:"text",props:{content:'<p><span style="color: rgb(20,50,30); font-family: Georgia, serif; font-size: 52px; font-style:italic;">03</span></p><p><span style="color: rgb(20,50,30); font-family: Inter, sans-serif; font-size: 16px;"><strong>Build & QA</strong></span></p><p><span style="color: rgb(60,90,60); font-family: Inter, sans-serif; font-size: 14px;">Weeks 6–11. 2-week sprints. Demos every Friday. QA on real devices.</span></p>'}}]},{width:25,widgets:[{id:"widget-ps4",type:"text",props:{content:'<p><span style="color: rgb(20,50,30); font-family: Georgia, serif; font-size: 52px; font-style:italic;">04</span></p><p><span style="color: rgb(20,50,30); font-family: Inter, sans-serif; font-size: 16px;"><strong>Launch</strong></span></p><p><span style="color: rgb(60,90,60); font-family: Inter, sans-serif; font-size: 14px;">Week 12. Store submission, go-live support, 30-day monitoring.</span></p>'}}]}],backgroundColor:"#ffdc32",backgroundOpacity:100,backgroundImage:"",contentWidth:"lg",paddingTop:0,paddingBottom:80}]},{id:"page-next-steps",name:"Next Steps",styles:{backgroundColor:"#fffdf0",backgroundImage:"",backgroundOpacity:1},blocks:[{id:"block-cta-banner",columns:[{width:100,widgets:[{id:"widget-cta-title",type:"text",props:{content:'<p style="text-align:center"><span style="color: rgb(255,255,255); font-family: Georgia, serif; font-size: 52px; font-style:italic;">Ready to build?</span></p>'}},{id:"widget-cta-sub",type:"text",props:{content:'<p style="text-align:center"><span style="color: rgb(180,210,180); font-family: Inter, sans-serif; font-size: 16px;">Book a discovery call. Choose a time below.</span></p>'}}]}],backgroundColor:"#1a3d2b",backgroundOpacity:100,backgroundImage:"",contentWidth:"md",paddingTop:80,paddingBottom:80},{id:"block-scheduler",columns:[{width:100,widgets:[{id:"widget-scheduler",type:"scheduler",props:{eventTypeId:"evt_discovery_001",eventTypeName:"Discovery Call",timezone:"Europe/London",availableDates:m(),slots:null,slotsLoading:!1,style:{bgColor:"#ffffff",borderRadius:16,dayColor:"#1a3d2b"}}}]}],backgroundColor:"#fffdf0",backgroundOpacity:100,backgroundImage:"",contentWidth:"lg",paddingTop:60,paddingBottom:80},{id:"block-steps",columns:[{width:50,widgets:[{id:"widget-next-steps",type:"text",props:{content:`<p><span style="color: rgb(255,220,50); font-family: Georgia, serif; font-size: 20px; font-style:italic;"><strong>01 — Select your modules</strong></span></p><p><span style="color: rgb(60,80,60); font-family: Inter, sans-serif; font-size: 14px;">Choose any add-ons from the previous page you'd like in the first build.</span></p><p>&nbsp;</p><p><span style="color: rgb(255,220,50); font-family: Georgia, serif; font-size: 20px; font-style:italic;"><strong>02 — Sign the contract</strong></span></p><p><span style="color: rgb(60,80,60); font-family: Inter, sans-serif; font-size: 14px;">DocuSign sent within 24 hours. 50% deposit to begin, 50% on delivery.</span></p><p>&nbsp;</p><p><span style="color: rgb(255,220,50); font-family: Georgia, serif; font-size: 20px; font-style:italic;"><strong>03 — Discovery call</strong></span></p><p><span style="color: rgb(60,80,60); font-family: Inter, sans-serif; font-size: 14px;">60-minute kickoff to align on requirements, access, and sprint planning.</span></p><p>&nbsp;</p><p><span style="color: rgb(255,220,50); font-family: Georgia, serif; font-size: 20px; font-style:italic;"><strong>04 — We start building</strong></span></p><p><span style="color: rgb(60,80,60); font-family: Inter, sans-serif; font-size: 14px;">First wireframes in 7 days. Weekly Loom updates throughout the build.</span></p>`}}]},{width:50,widgets:[{id:"widget-contact-box",type:"text",props:{content:'<p><span style="color: rgb(20,50,30); font-family: Georgia, serif; font-size: 26px;">Any questions?</span></p><p>&nbsp;</p><p><span style="color: rgb(60,80,60); font-family: Inter, sans-serif; font-size: 15px;">We respond within 2 hours during business hours.</span></p><p>&nbsp;</p><p><span style="color: rgb(20,50,30); font-family: Inter, sans-serif; font-size: 15px;"><strong>dev@fusionstudio.co.uk</strong></span></p><p><span style="color: rgb(20,50,30); font-family: Inter, sans-serif; font-size: 15px;"><strong>+44 191 000 0001</strong></span></p>'}},{id:"widget-next-img",type:"image",props:{src:"https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&q=80&w=600",imageWidth:500}}]}],backgroundColor:"#fffdf0",backgroundOpacity:100,backgroundImage:"",contentWidth:"lg",paddingTop:80,paddingBottom:80},{id:"block-footer",columns:[{width:100,widgets:[{id:"widget-footer",type:"text",props:{content:'<p style="text-align:center"><span style="color: rgb(180,210,180); font-family: Inter, sans-serif; font-size: 13px;">© 2025 Fusion Studio · Confidential · Prepared for Client 66</span></p>'}}]}],backgroundColor:"#0f2218",backgroundOpacity:100,backgroundImage:"",contentWidth:"lg",paddingTop:32,paddingBottom:32}]}]},r={name:"Default (full document)",args:{document:h}},d={name:"Empty (no pages)",args:{document:{id:"empty-1",pages:[]}}},p={name:"Live (scheduler + full @action relay)",parameters:{docs:{description:{story:`
### What this story demonstrates

This is a complete end-to-end simulation of how \`DocumentRenderer @action\` works in production.

The **document** is a reactive \`ref\`. When the scheduler emits an event, the handler
finds the widget by \`widgetId\`, mutates its \`props\` directly, and Vue's reactivity
propagates the update back into the scheduler automatically — no component coupling needed.

---

### Event relay path

\`\`\`
FuSchedulerWidget
  emits: date-select | month-change | update
    ↓
BlockRenderer.widgetListeners()
  normalises to: { widgetId, type, payload }
  emits: @action
    ↓
PageRenderer
  forwards: @action="$emit('action', $event)"
    ↓
DocumentRenderer
  forwards: @action="$emit('action', $event)"
    ↓
YOUR handleAction({ widgetId, type, payload })
\`\`\`

---

### The three scheduler events

**month-change** — fired when the user hits prev/next on the calendar header.

\`\`\`ts
// Payload
{ year: 2026, month: 8 }

// Handler
if (type === 'month-change') {
  const dates = await GET(\`/availability?year=\${payload.year}&month=\${payload.month}\`)
  updateWidgetProp(widgetId, 'availableDates', dates)
}
\`\`\`

**date-select** — fired when the user clicks an available (circled) date.

\`\`\`ts
// Payload
{ date: "2026-08-04" }

// Handler
if (type === 'date-select') {
  updateWidgetProp(widgetId, 'slotsLoading', true)
  updateWidgetProp(widgetId, 'slots', [])
  const slots = await GET(\`/slots?date=\${payload.date}\`)
  updateWidgetProp(widgetId, 'slots', slots)
  updateWidgetProp(widgetId, 'slotsLoading', false)
}
\`\`\`

**update** — fired when the user selects a slot and clicks Confirm.

\`\`\`ts
// Payload
{ bookedSlot: { id: "slot_001", start: "2026-08-04T09:00:00.000Z", end: "2026-08-04T09:30:00.000Z" } }

// Handler
if (type === 'update') {
  await POST('/bookings', { slotId: payload.bookedSlot.id })
  router.push('/booking-confirmed')
}
\`\`\`

---

### updateWidgetProp helper

This is the utility that lets your handler push data back into the document tree reactively.
Because \`document\` is a Vue \`ref\`, any mutation to \`widget.props\` triggers a re-render.

\`\`\`ts
function updateWidgetProp(widgetId: string, key: string, value: any) {
  for (const page of document.value.pages) {
    for (const block of page.blocks) {
      for (const col of block.columns) {
        const widget = col.widgets.find(w => w.id === widgetId)
        if (widget) {
          widget.props[key] = value
          return
        }
      }
    }
  }
}
\`\`\`

---

**Try it:** Scroll to the **Next Steps** page, navigate months, click a date, pick a slot, confirm.
Watch the event log panel update in real time.
        `}}},render:()=>({components:{DocumentRenderer:g},setup(){const s=y([]),i=y(JSON.parse(JSON.stringify(h)));function o(e,n,t){for(const l of i.value.pages)for(const b of l.blocks)for(const w of b.columns){const f=w.widgets.find(x=>x.id===e);if(f){f.props[n]=t;return}}}function a({widgetId:e,type:n,payload:t}){if(s.value.unshift({widgetId:e,type:n,payload:t,time:new Date().toLocaleTimeString("en-GB")}),n==="month-change"){const l=m(t.year,t.month);o(e,"availableDates",l)}n==="date-select"&&(o(e,"slots",null),o(e,"slotsLoading",!0),setTimeout(()=>{o(e,"slots",[{id:`${t.date}-s1`,start:`${t.date}T09:00:00.000Z`,end:`${t.date}T09:30:00.000Z`},{id:`${t.date}-s2`,start:`${t.date}T10:00:00.000Z`,end:`${t.date}T10:30:00.000Z`},{id:`${t.date}-s3`,start:`${t.date}T11:30:00.000Z`,end:`${t.date}T12:00:00.000Z`},{id:`${t.date}-s4`,start:`${t.date}T14:00:00.000Z`,end:`${t.date}T14:30:00.000Z`},{id:`${t.date}-s5`,start:`${t.date}T15:00:00.000Z`,end:`${t.date}T15:30:00.000Z`}]),o(e,"slotsLoading",!1)},800))}return{document:i,eventLog:s,handleAction:a}},template:`
      <div style="display: flex; min-height: 100vh;">

        <!-- Full document on the left -->
        <div style="flex: 1; min-width: 0; overflow-y: auto;">
          <DocumentRenderer :document="document" @action="handleAction" />
        </div>

        <!-- Sticky event log panel -->
        <div style="
          flex: 0 0 340px;
          position: sticky;
          top: 0;
          height: 100vh;
          overflow-y: auto;
          padding: 20px 16px 40px;
          background: #0a0f1a;
          border-left: 1px solid #1e293b;
          font-family: monospace;
          font-size: 12px;
          box-sizing: border-box;
        ">

          <p style="margin: 0 0 4px; font-weight: 700; font-family: system-ui; font-size: 14px; color: #f1f5f9;">
            @action event log
          </p>
          <p style="margin: 0 0 16px; font-size: 11px; color: #475569; line-height: 1.6;">
            All events arrive as<br/>
            <code style="color:#7dd3fc">{ widgetId, type, payload }</code>
          </p>

          <!-- Legend -->
          <div style="display: flex; gap: 10px; flex-wrap: wrap; margin-bottom: 16px;">
            <span style="font-size: 10px; color: #c084fc; font-family: system-ui;">● month-change</span>
            <span style="font-size: 10px; color: #60a5fa; font-family: system-ui;">● date-select</span>
            <span style="font-size: 10px; color: #4ade80; font-family: system-ui;">● update</span>
          </div>

          <div v-if="!eventLog.length" style="
            padding: 20px 16px;
            background: #1e293b;
            border-radius: 8px;
            color: #475569;
            font-size: 12px;
            line-height: 1.6;
            font-family: system-ui;
          ">
            Scroll to <strong style="color:#94a3b8">Next Steps</strong> and interact
            with the calendar to see events appear here.
          </div>

          <div
            v-for="(entry, i) in eventLog"
            :key="i"
            style="margin-bottom: 10px; padding: 10px 12px; background: #1e293b; border: 0.5px solid #334155; border-radius: 8px;"
          >
            <!-- Header row -->
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 6px;">
              <span :style="{
                fontWeight: 700,
                fontSize: '12px',
                color: entry.type === 'update' ? '#4ade80' : entry.type === 'date-select' ? '#60a5fa' : '#c084fc',
              }">{{ entry.type }}</span>
              <span style="color: #475569; font-size: 10px;">{{ entry.time }}</span>
            </div>

            <!-- Widget ID -->
            <div style="
              font-size: 10px;
              color: #475569;
              margin-bottom: 8px;
              padding-bottom: 8px;
              border-bottom: 1px solid #334155;
              font-family: system-ui;
            ">
              widgetId: <span style="color: #94a3b8;">{{ entry.widgetId }}</span>
            </div>

            <!-- Payload -->
            <pre style="margin: 0; white-space: pre-wrap; color: #94a3b8; font-size: 11px; line-height: 1.6;">{{ JSON.stringify(entry.payload, null, 2) }}</pre>
          </div>

        </div>
      </div>
    `})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  name: "Default (full document)",
  args: {
    document: MOCK_DOCUMENT
  }
}`,...r.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  name: "Empty (no pages)",
  args: {
    document: {
      id: "empty-1",
      pages: []
    }
  }
}`,...d.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  name: "Live (scheduler + full @action relay)",
  parameters: {
    docs: {
      description: {
        story: \`
### What this story demonstrates

This is a complete end-to-end simulation of how \\\`DocumentRenderer @action\\\` works in production.

The **document** is a reactive \\\`ref\\\`. When the scheduler emits an event, the handler
finds the widget by \\\`widgetId\\\`, mutates its \\\`props\\\` directly, and Vue's reactivity
propagates the update back into the scheduler automatically — no component coupling needed.

---

### Event relay path

\\\`\\\`\\\`
FuSchedulerWidget
  emits: date-select | month-change | update
    ↓
BlockRenderer.widgetListeners()
  normalises to: { widgetId, type, payload }
  emits: @action
    ↓
PageRenderer
  forwards: @action="$emit('action', $event)"
    ↓
DocumentRenderer
  forwards: @action="$emit('action', $event)"
    ↓
YOUR handleAction({ widgetId, type, payload })
\\\`\\\`\\\`

---

### The three scheduler events

**month-change** — fired when the user hits prev/next on the calendar header.

\\\`\\\`\\\`ts
// Payload
{ year: 2026, month: 8 }

// Handler
if (type === 'month-change') {
  const dates = await GET(\\\`/availability?year=\\\${payload.year}&month=\\\${payload.month}\\\`)
  updateWidgetProp(widgetId, 'availableDates', dates)
}
\\\`\\\`\\\`

**date-select** — fired when the user clicks an available (circled) date.

\\\`\\\`\\\`ts
// Payload
{ date: "2026-08-04" }

// Handler
if (type === 'date-select') {
  updateWidgetProp(widgetId, 'slotsLoading', true)
  updateWidgetProp(widgetId, 'slots', [])
  const slots = await GET(\\\`/slots?date=\\\${payload.date}\\\`)
  updateWidgetProp(widgetId, 'slots', slots)
  updateWidgetProp(widgetId, 'slotsLoading', false)
}
\\\`\\\`\\\`

**update** — fired when the user selects a slot and clicks Confirm.

\\\`\\\`\\\`ts
// Payload
{ bookedSlot: { id: "slot_001", start: "2026-08-04T09:00:00.000Z", end: "2026-08-04T09:30:00.000Z" } }

// Handler
if (type === 'update') {
  await POST('/bookings', { slotId: payload.bookedSlot.id })
  router.push('/booking-confirmed')
}
\\\`\\\`\\\`

---

### updateWidgetProp helper

This is the utility that lets your handler push data back into the document tree reactively.
Because \\\`document\\\` is a Vue \\\`ref\\\`, any mutation to \\\`widget.props\\\` triggers a re-render.

\\\`\\\`\\\`ts
function updateWidgetProp(widgetId: string, key: string, value: any) {
  for (const page of document.value.pages) {
    for (const block of page.blocks) {
      for (const col of block.columns) {
        const widget = col.widgets.find(w => w.id === widgetId)
        if (widget) {
          widget.props[key] = value
          return
        }
      }
    }
  }
}
\\\`\\\`\\\`

---

**Try it:** Scroll to the **Next Steps** page, navigate months, click a date, pick a slot, confirm.
Watch the event log panel update in real time.
        \`
      }
    }
  },
  render: () => ({
    components: {
      DocumentRenderer
    },
    setup() {
      const eventLog = ref<{
        widgetId: string;
        type: string;
        payload: any;
        time: string;
      }[]>([]);
      const document = ref(JSON.parse(JSON.stringify(MOCK_DOCUMENT)));

      // ── Core helper: find any widget in the document tree and update a prop ──
      function updateWidgetProp(widgetId: string, key: string, value: any) {
        for (const page of document.value.pages) {
          for (const block of page.blocks) {
            for (const col of block.columns) {
              const widget = col.widgets.find((w: any) => w.id === widgetId);
              if (widget) {
                widget.props[key] = value;
                return;
              }
            }
          }
        }
      }

      // ── Main @action handler — this is what your app-level code looks like ──
      function handleAction({
        widgetId,
        type,
        payload
      }: any) {
        // 1. Log every event for the panel
        eventLog.value.unshift({
          widgetId,
          type,
          payload,
          time: new Date().toLocaleTimeString("en-GB")
        });

        // 2. Route by type
        if (type === "month-change") {
          // Simulates: GET /availability?year=X&month=Y
          const dates = getAvailableSample(payload.year, payload.month);
          updateWidgetProp(widgetId, "availableDates", dates);
        }
        if (type === "date-select") {
          // Set null + loading synchronously in the same tick
          // null = no panel, [] = panel open but empty ("No availability")
          updateWidgetProp(widgetId, "slots", null);
          updateWidgetProp(widgetId, "slotsLoading", true);
          setTimeout(() => {
            updateWidgetProp(widgetId, "slots", [{
              id: \`\${payload.date}-s1\`,
              start: \`\${payload.date}T09:00:00.000Z\`,
              end: \`\${payload.date}T09:30:00.000Z\`
            }, {
              id: \`\${payload.date}-s2\`,
              start: \`\${payload.date}T10:00:00.000Z\`,
              end: \`\${payload.date}T10:30:00.000Z\`
            }, {
              id: \`\${payload.date}-s3\`,
              start: \`\${payload.date}T11:30:00.000Z\`,
              end: \`\${payload.date}T12:00:00.000Z\`
            }, {
              id: \`\${payload.date}-s4\`,
              start: \`\${payload.date}T14:00:00.000Z\`,
              end: \`\${payload.date}T14:30:00.000Z\`
            }, {
              id: \`\${payload.date}-s5\`,
              start: \`\${payload.date}T15:00:00.000Z\`,
              end: \`\${payload.date}T15:30:00.000Z\`
            }]);
            updateWidgetProp(widgetId, "slotsLoading", false);
          }, 800);
        }

        // update = slot confirmed. In production: POST /bookings then redirect.
        // Nothing to push back to the widget here — the widget handles its own
        // confirmed state visually. Your app would navigate away.
      }
      return {
        document,
        eventLog,
        handleAction
      };
    },
    template: \`
      <div style="display: flex; min-height: 100vh;">

        <!-- Full document on the left -->
        <div style="flex: 1; min-width: 0; overflow-y: auto;">
          <DocumentRenderer :document="document" @action="handleAction" />
        </div>

        <!-- Sticky event log panel -->
        <div style="
          flex: 0 0 340px;
          position: sticky;
          top: 0;
          height: 100vh;
          overflow-y: auto;
          padding: 20px 16px 40px;
          background: #0a0f1a;
          border-left: 1px solid #1e293b;
          font-family: monospace;
          font-size: 12px;
          box-sizing: border-box;
        ">

          <p style="margin: 0 0 4px; font-weight: 700; font-family: system-ui; font-size: 14px; color: #f1f5f9;">
            @action event log
          </p>
          <p style="margin: 0 0 16px; font-size: 11px; color: #475569; line-height: 1.6;">
            All events arrive as<br/>
            <code style="color:#7dd3fc">{ widgetId, type, payload }</code>
          </p>

          <!-- Legend -->
          <div style="display: flex; gap: 10px; flex-wrap: wrap; margin-bottom: 16px;">
            <span style="font-size: 10px; color: #c084fc; font-family: system-ui;">● month-change</span>
            <span style="font-size: 10px; color: #60a5fa; font-family: system-ui;">● date-select</span>
            <span style="font-size: 10px; color: #4ade80; font-family: system-ui;">● update</span>
          </div>

          <div v-if="!eventLog.length" style="
            padding: 20px 16px;
            background: #1e293b;
            border-radius: 8px;
            color: #475569;
            font-size: 12px;
            line-height: 1.6;
            font-family: system-ui;
          ">
            Scroll to <strong style="color:#94a3b8">Next Steps</strong> and interact
            with the calendar to see events appear here.
          </div>

          <div
            v-for="(entry, i) in eventLog"
            :key="i"
            style="margin-bottom: 10px; padding: 10px 12px; background: #1e293b; border: 0.5px solid #334155; border-radius: 8px;"
          >
            <!-- Header row -->
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 6px;">
              <span :style="{
                fontWeight: 700,
                fontSize: '12px',
                color: entry.type === 'update' ? '#4ade80' : entry.type === 'date-select' ? '#60a5fa' : '#c084fc',
              }">{{ entry.type }}</span>
              <span style="color: #475569; font-size: 10px;">{{ entry.time }}</span>
            </div>

            <!-- Widget ID -->
            <div style="
              font-size: 10px;
              color: #475569;
              margin-bottom: 8px;
              padding-bottom: 8px;
              border-bottom: 1px solid #334155;
              font-family: system-ui;
            ">
              widgetId: <span style="color: #94a3b8;">{{ entry.widgetId }}</span>
            </div>

            <!-- Payload -->
            <pre style="margin: 0; white-space: pre-wrap; color: #94a3b8; font-size: 11px; line-height: 1.6;">{{ JSON.stringify(entry.payload, null, 2) }}</pre>
          </div>

        </div>
      </div>
    \`
  })
}`,...p.parameters?.docs?.source}}};const R=["Default","Empty","LiveWithEventLog"];export{r as Default,d as Empty,p as LiveWithEventLog,R as __namedExportsOrder,C as default};
