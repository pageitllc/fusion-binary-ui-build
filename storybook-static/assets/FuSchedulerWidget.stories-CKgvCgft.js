import{r as d}from"./iframe-D3vfv6YP.js";import g from"./FuSchedulerWidget-Gq2turAy.js";import"./preload-helper-Ct5FWWRu.js";import"./search-DQJWv-MJ.js";import"./createLucideIcon-DKFlsGA7.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const C={title:"Renderer/FuSchedulerWidget",component:g,tags:["autodocs"],parameters:{layout:"padded",docs:{description:{component:`
A **scheduler widget** designed to run inside the Block → Column → Widget system.

---

# 1. Architecture Context

Like all renderer widgets, this does NOT exist standalone. It lives inside:

\`\`\`
Block
  └── Column
        └── Widgets[]
              └── FuSchedulerWidget
\`\`\`

---

# 2. Props

| Prop | Type | Description |
|---|---|---|
| \`availableDates\` | \`string[]\` | ISO date strings that show an active circle — clickable |
| \`slots\` | \`FuSlot[]\` | Time slots for the selected date — injected by parent after \`date-select\` fires |
| \`slotsLoading\` | \`boolean\` | Shows a spinner in the slot panel while the parent fetches slots |

---

# 3. Data Formats

### Available dates
Plain ISO date string array — just the date, no time.
The backend only returns dates that actually have slots. Dates not in this array show no circle.
\`\`\`ts
availableDates: string[]

// Example
[
  "2026-06-02",
  "2026-06-03",
  "2026-06-05",
  "2026-06-09",
  "2026-06-10",
]
\`\`\`

### Slots
Each slot must have an \`id\`, a \`start\` and an \`end\` in ISO 8601 UTC.
Start and end are both required — the widget displays them in the viewer's chosen timezone.
No duration calculation happens client-side.
\`\`\`ts
interface FuSlot {
  id: string
  start: string  // ISO 8601 UTC
  end: string    // ISO 8601 UTC
}

// Example
[
  { id: "slot_001", start: "2026-06-10T09:00:00.000Z", end: "2026-06-10T09:30:00.000Z" },
  { id: "slot_002", start: "2026-06-10T10:00:00.000Z", end: "2026-06-10T10:30:00.000Z" },
  { id: "slot_003", start: "2026-06-10T11:30:00.000Z", end: "2026-06-10T12:00:00.000Z" },
]
\`\`\`

---

# 4. Events

| Event | Trigger | Payload |
|---|---|---|
| \`update\` | Visitor confirms a slot | \`{ bookedSlot: FuSlot }\` |
| \`date-select\` | Visitor clicks an available date | \`{ date: string }\` |
| \`month-change\` | Visitor navigates prev/next month | \`{ year: number, month: number }\` |

---

# 5. Event Payloads

### @month-change
\`\`\`ts
{
  year: 2026,
  month: 6       // 1-indexed
}
\`\`\`

### @date-select
\`\`\`ts
{
  date: "2026-06-10"   // ISO date string
}
\`\`\`

### @update
\`\`\`ts
{
  bookedSlot: {
    id: "slot_001",
    start: "2026-06-10T09:00:00.000Z",
    end:   "2026-06-10T09:30:00.000Z"
  }
}
\`\`\`

---

# 6. Backend Response Samples

### GET /availability?year=2026&month=6
Returns only dates that have real availability.
Fully booked or non-working days are simply not included.
\`\`\`ts
availableDates: [
  "2026-06-02",
  "2026-06-03",
  "2026-06-05",
  "2026-06-09",
  "2026-06-10",
  "2026-06-12",
]
\`\`\`

### GET /slots?date=2026-06-10
\`\`\`ts
[
  { id: "slot_001", start: "2026-06-10T09:00:00.000Z", end: "2026-06-10T09:30:00.000Z" },
  { id: "slot_002", start: "2026-06-10T10:00:00.000Z", end: "2026-06-10T10:30:00.000Z" },
  { id: "slot_003", start: "2026-06-10T11:30:00.000Z", end: "2026-06-10T12:00:00.000Z" },
  { id: "slot_004", start: "2026-06-10T14:00:00.000Z", end: "2026-06-10T14:30:00.000Z" },
]
\`\`\`

---

# 7. Calendar Day Visual States

| State | Visual | Meaning |
|---|---|---|
| **No circle** | Plain number, no border | Not in schedule — host doesn't work this day |
| **Grey circle** | Faded circle, not clickable | Was available but is in the past |
| **Active circle** | Bordered circle in theme colour | Available — click to load time slots |
| **Filled circle** | Solid filled circle | Currently selected date |

> Past dates that were available show a grey circle so the visitor understands
> "this day normally has slots — they're just in the past."
> Dates with no circle at all are simply not in the host's working schedule.

---

# 8. Backend Flow

\`\`\`
Month renders
  → @month-change fires with { year, month }
    → parent calls GET /availability?year=2026&month=6
      → backend returns available dates only
        → parent passes :available-dates

Visitor clicks an available date
  → @date-select fires with { date: "2026-06-10" }
    → parent sets :slots-loading="true"
    → parent calls GET /slots?date=2026-06-10
      → backend returns [{ id, start, end }, ...]
        → parent injects :slots, sets :slots-loading="false"

Visitor confirms a slot
  → @update fires with { bookedSlot: { id, start, end } }
    → parent proceeds to booking form
\`\`\`
        `}}}},i=new Date().toISOString().split("T")[0];function v(){const o=[],a=new Date;a.setHours(0,0,0,0);for(let t=3;t>=1;t--){const n=new Date(a);n.setDate(n.getDate()-t),o.push(n.toLocaleDateString("en-CA"))}for(let t=1;t<=10;t++){const n=new Date(a);n.setDate(n.getDate()+t*2),o.push(n.toLocaleDateString("en-CA"))}return o}const S=[{id:"s1",start:`${i}T09:00:00.000Z`,end:`${i}T09:30:00.000Z`},{id:"s2",start:`${i}T10:00:00.000Z`,end:`${i}T10:30:00.000Z`},{id:"s3",start:`${i}T11:30:00.000Z`,end:`${i}T12:00:00.000Z`},{id:"s4",start:`${i}T14:00:00.000Z`,end:`${i}T14:30:00.000Z`}],r={render:()=>({components:{FuSchedulerWidget:g},setup(){return{block:d({id:"b1",columns:[{width:100,widgets:[{id:"hero_text",type:"heroText",props:{title:"Book a Strategy Call",subtitle:"Choose a time that works for you"}},{id:"scheduler_1",type:"scheduler",props:{eventTypeId:"evt_123",eventTypeName:"Strategy Call",timezone:"Europe/London",availableDates:v(),slots:S,slotsLoading:!1,style:{bgColor:"#ffffff",borderRadius:16,dayColor:"#2563eb"}}}]}]}),onUpdate:s=>console.log("@update →",s),onDateSelect:s=>console.log("@date-select →",s),onMonthChange:s=>console.log("@month-change →",s)}},template:`
      <div>
        <div v-for="col in block.columns" :key="col.width">
          <div v-for="widget in col.widgets" :key="widget.id" style="margin-bottom: 24px;">
            <div v-if="widget.type === 'heroText'" style="padding: 20px 0;">
              <h2 style="margin:0">{{ widget.props.title }}</h2>
              <p style="margin:6px 0; color:#666;">{{ widget.props.subtitle }}</p>
            </div>
            <FuSchedulerWidget
              v-else-if="widget.type === 'scheduler'"
              v-bind="widget.props"
              @update="onUpdate"
              @date-select="onDateSelect"
              @month-change="onMonthChange"
            />
          </div>
        </div>
      </div>
    `})},c={name:"Empty state (no event type)",args:{eventTypeId:void 0}},p={name:"Slots loading (spinner)",parameters:{docs:{description:{story:'\nSimulates the state where a date has been clicked and the parent is fetching slots from the backend.\nThe slot panel slides open and shows a spinner. Set `:slots-loading="false"` and inject `:slots`\nto show the real slots once the fetch completes.\n        '}}},render:()=>({components:{FuSchedulerWidget:g},setup(){const o=d(!1),a=d([]),t=d(v());function n(l){a.value=[],o.value=!0,setTimeout(()=>{a.value=[{id:"s1",start:`${l.date}T09:00:00.000Z`,end:`${l.date}T09:30:00.000Z`},{id:"s2",start:`${l.date}T10:00:00.000Z`,end:`${l.date}T10:30:00.000Z`},{id:"s3",start:`${l.date}T11:30:00.000Z`,end:`${l.date}T12:00:00.000Z`}],o.value=!1},1500)}function s(l){const m=l.year,u=String(l.month).padStart(2,"0");t.value=[2,3,5,8,9,10,12,15,16,17,19,22,23].map(e=>`${m}-${u}-${String(e).padStart(2,"0")}`)}return{slots:a,slotsLoading:o,availableDates:t,onDateSelect:n,onMonthChange:s}},template:`
      <FuSchedulerWidget
        event-type-id="evt_loading"
        event-type-name="Discovery Call"
        :available-dates="availableDates"
        :slots="slots"
        :slots-loading="slotsLoading"
        :style="{ bgColor: '#ffffff', borderRadius: 16, dayColor: '#2563eb' }"
        @date-select="onDateSelect"
        @month-change="onMonthChange"
      />
    `})},h={name:"Live backend simulation (event log)",parameters:{docs:{description:{story:`
Full end-to-end simulation of the backend availability flow.

**How to use:**
1. Navigate months with prev/next → \`@month-change\` fires, available dates update
2. Click an **active circle** date → \`@date-select\` fires, slots are injected after a simulated delay
3. Select a slot and confirm → \`@update\` fires with the booked slot payload

**Note:** Past dates in the current month automatically show a grey circle — handled by the widget itself, no backend input needed.

**Event log** on the right shows every event in real time.
        `}}},render:()=>({components:{FuSchedulerWidget:g},setup(){const o=d([]),a=d([]),t=d(!1),n=d(v());function s(e,y){o.value.unshift({event:e,payload:y,time:new Date().toLocaleTimeString("en-GB")})}function l(e){s("month-change",e);const y=e.year,f=String(e.month).padStart(2,"0");n.value=[2,3,5,8,9,10,12,15,16,17,19,22,23,24].map(b=>`${y}-${f}-${String(b).padStart(2,"0")}`)}function m(e){s("date-select",e),a.value=[],t.value=!0,setTimeout(()=>{a.value=[{id:"sim-1",start:`${e.date}T09:00:00.000Z`,end:`${e.date}T09:30:00.000Z`},{id:"sim-2",start:`${e.date}T10:00:00.000Z`,end:`${e.date}T10:30:00.000Z`},{id:"sim-3",start:`${e.date}T11:30:00.000Z`,end:`${e.date}T12:00:00.000Z`},{id:"sim-4",start:`${e.date}T14:00:00.000Z`,end:`${e.date}T14:30:00.000Z`}],t.value=!1},800)}function u(e){s("update",e)}return{eventLog:o,slots:a,slotsLoading:t,availableDates:n,onMonthChange:l,onDateSelect:m,onUpdate:u}},template:`
      <div style="display: flex; gap: 24px; align-items: flex-start;">
        <div style="flex: 1; min-width: 0;">
          <FuSchedulerWidget
            event-type-id="evt_sim_001"
            event-type-name="Live Simulation"
            :available-dates="availableDates"
            :slots="slots"
            :slots-loading="slotsLoading"
            :style="{ bgColor: '#ffffff', borderRadius: 16, dayColor: '#7c3aed' }"
            @month-change="onMonthChange"
            @date-select="onDateSelect"
            @update="onUpdate"
          />
        </div>
        <div style="flex: 0 0 280px; font-family: monospace; font-size: 12px;">
          <p style="margin: 0 0 10px; font-weight: 600; font-family: system-ui;">Event log</p>
          <div v-if="!eventLog.length" style="color: #94a3b8; font-size: 12px;">
            Interact with the calendar to see events…
          </div>
          <div
            v-for="(entry, i) in eventLog"
            :key="i"
            style="margin-bottom: 10px; padding: 8px 10px; background: #f8fafc; border: 0.5px solid #e2e8f0; border-radius: 8px;"
          >
            <div style="display: flex; justify-content: space-between; margin-bottom: 4px;">
              <span style="color: #7c3aed; font-weight: 700;">@{{ entry.event }}</span>
              <span style="color: #94a3b8;">{{ entry.time }}</span>
            </div>
            <pre style="margin: 0; white-space: pre-wrap; color: #334155;">{{ JSON.stringify(entry.payload, null, 2) }}</pre>
          </div>
        </div>
      </div>
    `})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      FuSchedulerWidget
    },
    setup() {
      const block = ref({
        id: "b1",
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
              timezone: "Europe/London",
              availableDates: getAvailableSample(),
              slots: sampleSlots,
              slotsLoading: false,
              style: {
                bgColor: "#ffffff",
                borderRadius: 16,
                dayColor: "#2563eb"
              }
            }
          }]
        }]
      });
      const onUpdate = (e: any) => console.log("@update →", e);
      const onDateSelect = (e: any) => console.log("@date-select →", e);
      const onMonthChange = (e: any) => console.log("@month-change →", e);
      return {
        block,
        onUpdate,
        onDateSelect,
        onMonthChange
      };
    },
    template: \`
      <div>
        <div v-for="col in block.columns" :key="col.width">
          <div v-for="widget in col.widgets" :key="widget.id" style="margin-bottom: 24px;">
            <div v-if="widget.type === 'heroText'" style="padding: 20px 0;">
              <h2 style="margin:0">{{ widget.props.title }}</h2>
              <p style="margin:6px 0; color:#666;">{{ widget.props.subtitle }}</p>
            </div>
            <FuSchedulerWidget
              v-else-if="widget.type === 'scheduler'"
              v-bind="widget.props"
              @update="onUpdate"
              @date-select="onDateSelect"
              @month-change="onMonthChange"
            />
          </div>
        </div>
      </div>
    \`
  })
}`,...r.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  name: "Empty state (no event type)",
  args: {
    eventTypeId: undefined
  }
}`,...c.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  name: "Slots loading (spinner)",
  parameters: {
    docs: {
      description: {
        story: \`
Simulates the state where a date has been clicked and the parent is fetching slots from the backend.
The slot panel slides open and shows a spinner. Set \\\`:slots-loading="false"\\\` and inject \\\`:slots\\\`
to show the real slots once the fetch completes.
        \`
      }
    }
  },
  render: () => ({
    components: {
      FuSchedulerWidget
    },
    setup() {
      const slotsLoading = ref(false);
      const slots = ref<any[]>([]);
      const availableDates = ref(getAvailableSample());
      function onDateSelect(payload: {
        date: string;
      }) {
        slots.value = [];
        slotsLoading.value = true;
        setTimeout(() => {
          slots.value = [{
            id: "s1",
            start: \`\${payload.date}T09:00:00.000Z\`,
            end: \`\${payload.date}T09:30:00.000Z\`
          }, {
            id: "s2",
            start: \`\${payload.date}T10:00:00.000Z\`,
            end: \`\${payload.date}T10:30:00.000Z\`
          }, {
            id: "s3",
            start: \`\${payload.date}T11:30:00.000Z\`,
            end: \`\${payload.date}T12:00:00.000Z\`
          }];
          slotsLoading.value = false;
        }, 1500);
      }
      function onMonthChange(payload: {
        year: number;
        month: number;
      }) {
        const yyyy = payload.year;
        const mm = String(payload.month).padStart(2, "0");
        availableDates.value = [2, 3, 5, 8, 9, 10, 12, 15, 16, 17, 19, 22, 23].map(d => \`\${yyyy}-\${mm}-\${String(d).padStart(2, "0")}\`);
      }
      return {
        slots,
        slotsLoading,
        availableDates,
        onDateSelect,
        onMonthChange
      };
    },
    template: \`
      <FuSchedulerWidget
        event-type-id="evt_loading"
        event-type-name="Discovery Call"
        :available-dates="availableDates"
        :slots="slots"
        :slots-loading="slotsLoading"
        :style="{ bgColor: '#ffffff', borderRadius: 16, dayColor: '#2563eb' }"
        @date-select="onDateSelect"
        @month-change="onMonthChange"
      />
    \`
  })
}`,...p.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  name: "Live backend simulation (event log)",
  parameters: {
    docs: {
      description: {
        story: \`
Full end-to-end simulation of the backend availability flow.

**How to use:**
1. Navigate months with prev/next → \\\`@month-change\\\` fires, available dates update
2. Click an **active circle** date → \\\`@date-select\\\` fires, slots are injected after a simulated delay
3. Select a slot and confirm → \\\`@update\\\` fires with the booked slot payload

**Note:** Past dates in the current month automatically show a grey circle — handled by the widget itself, no backend input needed.

**Event log** on the right shows every event in real time.
        \`
      }
    }
  },
  render: () => ({
    components: {
      FuSchedulerWidget
    },
    setup() {
      const eventLog = ref<{
        event: string;
        payload: any;
        time: string;
      }[]>([]);
      const slots = ref<any[]>([]);
      const slotsLoading = ref(false);
      const availableDates = ref(getAvailableSample());
      function log(event: string, payload: any) {
        eventLog.value.unshift({
          event,
          payload,
          time: new Date().toLocaleTimeString("en-GB")
        });
      }
      function onMonthChange(payload: {
        year: number;
        month: number;
      }) {
        log("month-change", payload);
        const yyyy = payload.year;
        const mm = String(payload.month).padStart(2, "0");
        availableDates.value = [2, 3, 5, 8, 9, 10, 12, 15, 16, 17, 19, 22, 23, 24].map(d => \`\${yyyy}-\${mm}-\${String(d).padStart(2, "0")}\`);
      }
      function onDateSelect(payload: {
        date: string;
      }) {
        log("date-select", payload);
        slots.value = [];
        slotsLoading.value = true;
        setTimeout(() => {
          slots.value = [{
            id: "sim-1",
            start: \`\${payload.date}T09:00:00.000Z\`,
            end: \`\${payload.date}T09:30:00.000Z\`
          }, {
            id: "sim-2",
            start: \`\${payload.date}T10:00:00.000Z\`,
            end: \`\${payload.date}T10:30:00.000Z\`
          }, {
            id: "sim-3",
            start: \`\${payload.date}T11:30:00.000Z\`,
            end: \`\${payload.date}T12:00:00.000Z\`
          }, {
            id: "sim-4",
            start: \`\${payload.date}T14:00:00.000Z\`,
            end: \`\${payload.date}T14:30:00.000Z\`
          }];
          slotsLoading.value = false;
        }, 800);
      }
      function onUpdate(payload: any) {
        log("update", payload);
      }
      return {
        eventLog,
        slots,
        slotsLoading,
        availableDates,
        onMonthChange,
        onDateSelect,
        onUpdate
      };
    },
    template: \`
      <div style="display: flex; gap: 24px; align-items: flex-start;">
        <div style="flex: 1; min-width: 0;">
          <FuSchedulerWidget
            event-type-id="evt_sim_001"
            event-type-name="Live Simulation"
            :available-dates="availableDates"
            :slots="slots"
            :slots-loading="slotsLoading"
            :style="{ bgColor: '#ffffff', borderRadius: 16, dayColor: '#7c3aed' }"
            @month-change="onMonthChange"
            @date-select="onDateSelect"
            @update="onUpdate"
          />
        </div>
        <div style="flex: 0 0 280px; font-family: monospace; font-size: 12px;">
          <p style="margin: 0 0 10px; font-weight: 600; font-family: system-ui;">Event log</p>
          <div v-if="!eventLog.length" style="color: #94a3b8; font-size: 12px;">
            Interact with the calendar to see events…
          </div>
          <div
            v-for="(entry, i) in eventLog"
            :key="i"
            style="margin-bottom: 10px; padding: 8px 10px; background: #f8fafc; border: 0.5px solid #e2e8f0; border-radius: 8px;"
          >
            <div style="display: flex; justify-content: space-between; margin-bottom: 4px;">
              <span style="color: #7c3aed; font-weight: 700;">@{{ entry.event }}</span>
              <span style="color: #94a3b8;">{{ entry.time }}</span>
            </div>
            <pre style="margin: 0; white-space: pre-wrap; color: #334155;">{{ JSON.stringify(entry.payload, null, 2) }}</pre>
          </div>
        </div>
      </div>
    \`
  })
}`,...h.parameters?.docs?.source}}};const $=["BlockIntegratedScheduler","EmptyState","SlotsLoading","LiveBackendSimulation"];export{r as BlockIntegratedScheduler,c as EmptyState,h as LiveBackendSimulation,p as SlotsLoading,$ as __namedExportsOrder,C as default};
