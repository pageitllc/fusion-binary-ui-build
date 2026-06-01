import{r as n}from"./iframe-BWX2pLPr.js";import a from"./FuSchedulerWidget-CpQd7mO-.js";import"./preload-helper-Ct5FWWRu.js";import"./search-DALccjr0.js";import"./createLucideIcon-BuC7IBSO.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const v={title:"Renderer/FuSchedulerWidget",component:a,tags:["autodocs"],parameters:{layout:"padded",docs:{description:{component:`
A **scheduler widget** designed to run inside the Block → Column → Widget system.

---

# 1. Architecture Context

Like all renderer widgets, this does NOT exist standalone.

It lives inside:

\`\`\`
Block
  └── Column
        └── Widgets[]
              └── FuSchedulerWidget
\`\`\`

Each instance is:
- position-aware (inside column layout)
- state-driven (slots + availability)
- backend sync capable

---

# 2. Scheduling Model

The widget supports two execution modes:

### Backend Mode
If \`slots[]\` exists:
- Uses backend-defined availability
- No generation logic runs

### Rule Mode
If \`slots[]\` is empty:
- Generates slots from \`availability\`
- Splits by \`duration\`

---

# 3. State Ownership

\`\`\`ts
selectedSlotId: string | null
\`\`\`

Selection is emitted upward via:

- update event
- block system persistence
- optional API sync

---

# 4. Mental Model

> “A calendar engine embedded inside a layout block system”
        `}}}},i=[{day:1,start:"9:00 AM",end:"12:30 PM"},{day:1,start:"2:00 PM",end:"5:00 PM"},{day:2,start:"9:00 AM",end:"5:00 PM"}],d=new Date().toISOString().split("T")[0],s=new Date(Date.now()+864e5).toISOString().split("T")[0],l=[{id:"b1",date:`${d}T09:00:00.000Z`},{id:"b2",date:`${d}T10:30:00.000Z`},{id:"b3",date:`${s}T14:00:00.000Z`}],e={render:()=>({components:{FuSchedulerWidget:a},setup(){return{block:n({id:"b1",contentWidth:"md",backgroundColor:"#ffffff",paddingTop:80,paddingBottom:80,columns:[{width:100,widgets:[{id:"hero_text",type:"heroText",props:{title:"Book a Strategy Call",subtitle:"Choose a time that works for you"}},{id:"scheduler_1",type:"scheduler",props:{eventTypeId:"evt_123",eventTypeName:"Strategy Call",duration:30,availability:i,slots:[],timezone:"Europe/London",style:{bgColor:"#ffffff",borderRadius:16,dayColor:"#2563eb"}}}]}]}),onUpdate:r=>{console.log("SCHEDULER EVENT:",r)}}},template:`
      <div>
        <div v-for="col in block.columns" :key="col.width">
          
          <div
            v-for="widget in col.widgets"
            :key="widget.id"
            style="margin-bottom: 24px;"
          >

            <!-- HERO -->
            <div v-if="widget.type === 'heroText'" style="padding: 20px 0;">
              <h2 style="margin:0">{{ widget.props.title }}</h2>
              <p style="margin:6px 0; color:#666;">
                {{ widget.props.subtitle }}
              </p>
            </div>

            <!-- SCHEDULER -->
            <FuSchedulerWidget
              v-else-if="widget.type === 'scheduler'"
              v-bind="widget.props"
              @update="onUpdate"
            />

          </div>
        </div>
      </div>
    `})},t={args:{eventTypeId:"evt_direct_001",eventTypeName:"Fixed Meeting",duration:30,slots:l,availability:i,style:{bgColor:"#ffffff",borderRadius:12,dayColor:"#4f46e5"}}},o={args:{eventTypeId:"evt_rule_001",eventTypeName:"Consultation",duration:45,slots:[],availability:i,style:{bgColor:"#ffffff",borderRadius:16,dayColor:"#16a34a"}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      FuSchedulerWidget
    },
    setup() {
      const block = ref({
        id: "b1",
        contentWidth: "md",
        backgroundColor: "#ffffff",
        paddingTop: 80,
        paddingBottom: 80,
        columns: [{
          width: 100,
          widgets: [{
            id: "hero_text",
            type: "heroText",
            props: {
              title: "Book a Strategy Call",
              subtitle: "Choose a time that works for you"
            }
          }, {
            id: "scheduler_1",
            type: "scheduler",
            props: {
              eventTypeId: "evt_123",
              eventTypeName: "Strategy Call",
              duration: 30,
              availability: onboardingAvailability,
              slots: [],
              timezone: "Europe/London",
              style: {
                bgColor: "#ffffff",
                borderRadius: 16,
                dayColor: "#2563eb"
              }
            }
          }]
        }]
      });
      const onUpdate = (e: any) => {
        console.log("SCHEDULER EVENT:", e);
      };
      return {
        block,
        onUpdate
      };
    },
    template: \`
      <div>
        <div v-for="col in block.columns" :key="col.width">
          
          <div
            v-for="widget in col.widgets"
            :key="widget.id"
            style="margin-bottom: 24px;"
          >

            <!-- HERO -->
            <div v-if="widget.type === 'heroText'" style="padding: 20px 0;">
              <h2 style="margin:0">{{ widget.props.title }}</h2>
              <p style="margin:6px 0; color:#666;">
                {{ widget.props.subtitle }}
              </p>
            </div>

            <!-- SCHEDULER -->
            <FuSchedulerWidget
              v-else-if="widget.type === 'scheduler'"
              v-bind="widget.props"
              @update="onUpdate"
            />

          </div>
        </div>
      </div>
    \`
  })
}`,...e.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    eventTypeId: "evt_direct_001",
    eventTypeName: "Fixed Meeting",
    duration: 30,
    slots: backendSlots,
    availability: onboardingAvailability,
    style: {
      bgColor: "#ffffff",
      borderRadius: 12,
      dayColor: "#4f46e5"
    }
  }
}`,...t.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    eventTypeId: "evt_rule_001",
    eventTypeName: "Consultation",
    duration: 45,
    slots: [],
    availability: onboardingAvailability,
    style: {
      bgColor: "#ffffff",
      borderRadius: 16,
      dayColor: "#16a34a"
    }
  }
}`,...o.parameters?.docs?.source}}};const h=["BlockIntegratedScheduler","BackendControlled","RuleBasedGeneration"];export{t as BackendControlled,e as BlockIntegratedScheduler,o as RuleBasedGeneration,h as __namedExportsOrder,v as default};
