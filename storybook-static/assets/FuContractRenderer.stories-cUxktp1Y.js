import{r as c}from"./iframe-D3vfv6YP.js";import o from"./FuContractRenderer-D5PKuANd.js";import"./preload-helper-Ct5FWWRu.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const h={title:"Renderer/FuContractRenderer",component:o,tags:["autodocs"],parameters:{layout:"fullscreen",docs:{description:{component:`
A **client-facing contract viewer** with built-in electronic signature capabilities.

---

# 1. Architecture Context
This component is the final "execution" layer of the contract system. It is responsible for:

- **Rendering**: Converts rich contract HTML into a clean, display-ready document
- **Smart Field Resolution**: Transforms backend "smart fields" into plain values
- **Signing**: Provides inline Type / Draw signature capture
- **Validation**: Handles required signatures + visual state changes

---

# 2. Smart Field System (IMPORTANT)

Some contract payloads include **smart fields**, which look like:

\`\`\`html
<span 
  fieldtype="smart" 
  content="1 March 2026" 
  fieldid="field-date-001"
></span>
\`\`\`

### How they are handled:
- All \`span[fieldtype="smart"]\` nodes are **stripped from the DOM**
- Only the value inside the \`content\` attribute is rendered
- The final output becomes:

\`\`\`html
1 March 2026
\`\`\`

### Why this exists:
Smart fields allow the backend to:
- inject dynamic values (dates, names, totals)
- keep documents editable before rendering
- maintain structured contract metadata without exposing it to users

---

# 3. Key Features

- **Smart Field Resolution Engine**
  - Automatically replaces all smart spans with their raw content value
  - Prevents metadata leakage into UI

- **Canvas-based Drawing**
  - Captures handwritten signatures as PNG Data URLs

- **SVG-based Typing**
  - Generates crisp vector signatures using selected cursive fonts

- **Signature State Tracking**
  - Signed / Unsigned / Invalidated states supported

---

# 4. Example Usage

\`\`\`vue
<script setup>
import { ref } from 'vue';
import FuContractViewer from '@/components/FuContractViewer.vue';

const contractContent = "<h1>My Contract</h1>...";

const signatureSlots = ref([
  { id: 'user-1', label: 'Client Signature', required: true, signedOn: null }
]);

const handleSignature = (payload) => {
  console.log("Updated Signatures Array:", payload.signatures);
  console.log("Newly Signed Object:", payload.updatedSig);

  /* Payload shape:
    {
      signerName: "John Doe",
      signerRole: "Director",
      signerCompany: "Acme Ltd",
      signatureType: "typed" | "drawn",
      signatureData: "data:image/png;base64,...",
      signedOn: "2026-04-22T..."
    }
  */

  // Sync local state or persist to API
  signatureSlots.value = payload.signatures;
};
<\/script>

<template>
  <FuContractViewer 
    :content="contractContent"
    :signatures="signatureSlots"
    @update="handleSignature"
  />
</template>
\`\`\`
  `}}}},r=`
  <h1>Independent Contractor Agreement</h1>
  <p>This agreement is made between <strong>Fusion Agency</strong> and the <strong>Contractor</strong> named below.</p>
  
  <h2>1. SERVICES</h2>
  <p>The Contractor agrees to provide professional consulting services as described in the Statement of Work. These services include, but are not limited to, software architecture and technical documentation.</p>
  
  <h2>2. PAYMENT</h2>
  <p>Compensation shall be paid at a rate of <span class="fcv-smart-field">£500.00 per day</span>, payable within 14 days of invoice receipt.</p>
  
  <h2>3. TERMINATION</h2>
  <p>Either party may terminate this agreement with 30 days written notice.</p>
`,e={args:{widgetId:"widget-001",content:r,signatures:[{id:"sig-1",label:"The Contractor",required:!0,signerName:"",signedOn:null},{id:"sig-2",label:"Witness (Optional)",required:!1,signerName:"",signedOn:null}]}},n={args:{widgetId:"widget-002",content:r,signatures:[{id:"sig-1",label:"The Contractor",signerName:"Gbaaloo Buan",signerRole:"Creative Director",signerCompany:"Flux Creative Ltd",signedOn:"2024-03-15T10:30:00Z",signatureType:"typed",signatureData:"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMjAiIGhlaWdodD0iODAiIHZpZXdCb3g9IjAgMCAzMjAgODAiPjxkZWZzPjxzdHlsZT5AaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1DYXZlYXQnKTs8L3N0eWxlPjwvZGVmcz48dGV4dCB4PSIxNjAiIHk9IjU0IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LWZhbWlseT0iJ0NhdmVhdCcsIGN1cnNpdmUiIGZvbnQtc2l6ZT0iMzgiIGZpbGw9IiMxMTE4MjciPkdiYWFsb28gQnVhbjwvdGV4dD48L3N2Zz4="},{id:"sig-2",label:"Fusion Agency Representative",signerName:"B. Tumbee",signerRole:"Operations Lead",signedOn:"2024-03-15T14:45:00Z",signatureType:"drawn",signatureData:"https://upload.wikimedia.org/wikipedia/commons/f/f8/Signature_of_John_Hancock.png"}]}},t={args:{widgetId:"widget-003",content:`
      <h1>REVISED AGREEMENT</h1>
      <p style="color: #b91c1c; font-weight: bold;">[Note: Section 2.1 was updated after this signature was collected]</p>
      ${r}
    `,signatures:[{id:"sig-1",label:"Contractor",signerName:"Wade Warren",signedOn:"2024-02-01T09:00:00Z",signatureType:"typed",signatureData:"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMjAiIGhlaWdodD0iODAiIHZpZXdCb3g9IjAgMCAzMjAgODAiPjxkZWZzPjxzdHlsZT5AaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1DYXZlYXQnKTs8L3N0eWxlPjwvZGVmcz48dGV4dCB4PSIxNjAiIHk9IjU0IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LWZhbWlseT0iJ0NhdmVhdCcsIGN1cnNpdmUiIGZvbnQtc2l6ZT0iMzgiIGZpbGw9IiMxMTE4MjciPldhZGUgV2FycmVuPC90ZXh0Pjwvc3ZnPg==",invalidatedOn:"2024-02-05T12:00:00Z"}]}},a={render:d=>({components:{FuContractViewer:o},setup(){const i=c([{id:"sig-live",label:"Your Signature",required:!0,signerName:"",signedOn:null}]);return{args:d,signatures:i,onUpdate:s=>{console.log("CONTRACT UPDATE EMITTED:",s),i.value=s.signatures},reset:()=>{i.value[0]={id:"sig-live",label:"Your Signature",required:!0,signerName:"",signedOn:null,signatureData:null,signatureType:null}}}},template:`
      <div>
        <div style="background: #111827; padding: 12px; display: flex; justify-content: flex-end;">
          <button @click="reset" style="background: #374151; color: white; border: none; padding: 6px 12px; border-radius: 4px; cursor: pointer; font-size: 12px;">Reset Demo</button>
        </div>
        <FuContractViewer 
          v-bind="args" 
          :signatures="signatures" 
          @update="onUpdate" 
        />
      </div>
    `}),args:{widgetId:"live-demo",content:`
      <h1>Interactive Demo</h1>
      <p>Try clicking the signature slot below to open the <strong>Signature Pad</strong>. You can type your name or draw a signature using your mouse/touchscreen.</p>
    `}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    widgetId: "widget-001",
    content: demoContent,
    signatures: [{
      id: "sig-1",
      label: "The Contractor",
      required: true,
      signerName: "",
      signedOn: null
    }, {
      id: "sig-2",
      label: "Witness (Optional)",
      required: false,
      signerName: "",
      signedOn: null
    }] as Signature[]
  }
}`,...e.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    widgetId: "widget-002",
    content: demoContent,
    signatures: [{
      id: "sig-1",
      label: "The Contractor",
      signerName: "Gbaaloo Buan",
      signerRole: "Creative Director",
      signerCompany: "Flux Creative Ltd",
      signedOn: "2024-03-15T10:30:00Z",
      signatureType: "typed",
      signatureData: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMjAiIGhlaWdodD0iODAiIHZpZXdCb3g9IjAgMCAzMjAgODAiPjxkZWZzPjxzdHlsZT5AaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1DYXZlYXQnKTs8L3N0eWxlPjwvZGVmcz48dGV4dCB4PSIxNjAiIHk9IjU0IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LWZhbWlseT0iJ0NhdmVhdCcsIGN1cnNpdmUiIGZvbnQtc2l6ZT0iMzgiIGZpbGw9IiMxMTE4MjciPkdiYWFsb28gQnVhbjwvdGV4dD48L3N2Zz4="
    }, {
      id: "sig-2",
      label: "Fusion Agency Representative",
      signerName: "B. Tumbee",
      signerRole: "Operations Lead",
      signedOn: "2024-03-15T14:45:00Z",
      signatureType: "drawn",
      signatureData: "https://upload.wikimedia.org/wikipedia/commons/f/f8/Signature_of_John_Hancock.png"
    }] as Signature[]
  }
}`,...n.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    widgetId: "widget-003",
    content: \`
      <h1>REVISED AGREEMENT</h1>
      <p style="color: #b91c1c; font-weight: bold;">[Note: Section 2.1 was updated after this signature was collected]</p>
      \${demoContent}
    \`,
    signatures: [{
      id: "sig-1",
      label: "Contractor",
      signerName: "Wade Warren",
      signedOn: "2024-02-01T09:00:00Z",
      signatureType: "typed",
      signatureData: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMjAiIGhlaWdodD0iODAiIHZpZXdCb3g9IjAgMCAzMjAgODAiPjxkZWZzPjxzdHlsZT5AaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1DYXZlYXQnKTs8L3N0eWxlPjwvZGVmcz48dGV4dCB4PSIxNjAiIHk9IjU0IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LWZhbWlseT0iJ0NhdmVhdCcsIGN1cnNpdmUiIGZvbnQtc2l6ZT0iMzgiIGZpbGw9IiMxMTE4MjciPldhZGUgV2FycmVuPC90ZXh0Pjwvc3ZnPg==",
      invalidatedOn: "2024-02-05T12:00:00Z"
    }] as Signature[]
  }
}`,...t.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: args => ({
    components: {
      FuContractViewer
    },
    setup() {
      const signatures = ref<Signature[]>([{
        id: "sig-live",
        label: "Your Signature",
        required: true,
        signerName: "",
        signedOn: null
      }]);
      const onUpdate = (event: any) => {
        console.log("CONTRACT UPDATE EMITTED:", event);
        signatures.value = event.signatures;
      };
      const reset = () => {
        signatures.value[0] = {
          id: "sig-live",
          label: "Your Signature",
          required: true,
          signerName: "",
          signedOn: null,
          signatureData: null,
          signatureType: null
        };
      };
      return {
        args,
        signatures,
        onUpdate,
        reset
      };
    },
    template: \`
      <div>
        <div style="background: #111827; padding: 12px; display: flex; justify-content: flex-end;">
          <button @click="reset" style="background: #374151; color: white; border: none; padding: 6px 12px; border-radius: 4px; cursor: pointer; font-size: 12px;">Reset Demo</button>
        </div>
        <FuContractViewer 
          v-bind="args" 
          :signatures="signatures" 
          @update="onUpdate" 
        />
      </div>
    \`
  }),
  args: {
    widgetId: "live-demo",
    content: \`
      <h1>Interactive Demo</h1>
      <p>Try clicking the signature slot below to open the <strong>Signature Pad</strong>. You can type your name or draw a signature using your mouse/touchscreen.</p>
    \`
  }
}`,...a.parameters?.docs?.source}}};const y=["UnsignedDraft","FullyExecuted","InvalidatedByEdit","InteractiveSigning"];export{n as FullyExecuted,a as InteractiveSigning,t as InvalidatedByEdit,e as UnsignedDraft,y as __namedExportsOrder,h as default};
