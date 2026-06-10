import{r as S}from"./iframe-D3vfv6YP.js";import w from"./FuinvoicePreview-ow_9zW7n.js";import"./preload-helper-Ct5FWWRu.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const T={title:"Renderer/FuInvoicePreview",component:w,tags:["autodocs"],parameters:{layout:"fullscreen",backgrounds:{default:"paper",values:[{name:"paper",value:"#f4f4f0"},{name:"white",value:"#ffffff"},{name:"dark",value:"#1a1a1a"}]},docs:{description:{component:`
A **read-only invoice renderer** that accepts the exact same prop shape as the Invoice editor widget and renders it cleanly — no store, no editor, no mutations.

---

# 1. Architecture Context

This component is the pure display layer of the invoice system:

- **Rendering**: Takes a stored invoice payload and renders it as a document
- **Variant support**: Renders all four layout variants from a single component
- **Zero side effects**: No \`contenteditable\`, no store calls, no event emissions beyond display

---

# 2. Variants

| Variant | Description |
|---------|-------------|
| \`classic\` | Logo + company left, invoice meta right, Bill To below |
| \`minimal\` | Typographic, company name as display headline, stripped meta |
| \`modern\` | Dark header band, indigo accent strip, inverted total row |
| \`detailed\` | Large logo, tabular meta grid, heavy ruled sections |

---

# 3. Tax Column

In the editor the tax column renders a checkbox. In the preview it renders a **coloured dot**:

- 🟣 Indigo dot — item is taxable, included in tax calculation
- ⚪ Grey dot — item is not taxable

---

# 4. Responsive Behaviour

Below **680px** (via container query):
- Qty, Unit, and Tax columns are hidden
- Header stacks vertically
- Modern band collapses to single column
- Summary takes full width

---

# 5. Example Usage

\`\`\`vue
<script setup>
import FuInvoicePreview from '@/components/FuInvoicePreview.vue';

const invoice = {
  variant: 'classic',
  header: { companyName: 'Fusion Agency', clientName: 'Flux Creative', ... },
  serviceBlocks: [{ name: 'Brand Identity', qty: 1, price: 3500, taxable: true, ... }],
  footer: { currency: 'GBP', discounts: [], taxes: [{ label: 'VAT', rate: 20 }] },
};
<\/script>

<template>
  <FuInvoicePreview v-bind="invoice" />
</template>
\`\`\`
        `.trim()}}}},h={showLogo:!0,logoUrl:"https://www.skkido.com/_nuxt/skkido-brand-image.ByK50r_h.svg",showCompany:!0,companyName:"Fusion Agency Ltd",companyEmail:"hello@fusionagency.co.uk",companyPhone:"+44 191 000 0000",companyAddress:"42 Studio Lane, Newcastle, NE1 4BT",showTitle:!0,invoiceTitle:"INVOICE",showInvoiceNumber:!0,invoiceNumber:"INV-0042",showDate:!0,invoiceDate:"1 May 2025",showDueDate:!0,dueDate:"15 May 2025",showPO:!1,poNumber:"",showBillTo:!0,clientName:"Flux Creative Agency",clientEmail:"accounts@fluxcreative.io",clientPhone:"+44 20 7946 0000",clientAddress:"10 Design Quarter, London, EC1A 1BB",bgColor:"",borderColor:""},b=[{id:"svc-1",name:"Brand Identity Refresh",description:"Full visual identity overhaul including logo, colour palette & guidelines",qty:1,unit:"project",price:3500,taxable:!0,imageUrl:"",subItems:[{id:"sub-1a",name:"Logo design",qty:1,unit:"item",price:1200,taxable:!0},{id:"sub-1b",name:"Brand guidelines",qty:1,unit:"item",price:900,taxable:!0},{id:"sub-1c",name:"Colour & type spec",qty:1,unit:"item",price:1400,taxable:!1}]},{id:"svc-2",name:"Digital Asset Pack",description:"Social media templates, email headers & presentation deck in Figma",qty:1,unit:"project",price:1800,taxable:!0,imageUrl:"",subItems:[]},{id:"svc-3",name:"Revision Rounds",description:"Additional rounds beyond the three included in scope",qty:2,unit:"round",price:350,taxable:!1,imageUrl:"",subItems:[]}],y={currency:"GBP",discounts:[{label:"Early payment",percent:5}],taxes:[{label:"VAT",rate:20}]},e={args:{variant:"classic",showServiceImages:!0,showQty:!0,showUnit:!0,showPrice:!0,showTax:!0,header:h,serviceBlocks:b,footer:y}},r={args:{...e.args,variant:"minimal"}},a={args:{...e.args,variant:"modern"}},s={args:{...e.args,variant:"detailed"}},o={args:{...e.args,header:{...h,bgColor:"#006FEE ",borderColor:"#6366f1"}}},t={args:{...e.args,variant:"modern",header:{...h,bgColor:"#0d503c"}}},n={args:{...e.args,showQty:!1,showUnit:!1,showPrice:!1,showTax:!1,serviceBlocks:b.map(f=>({...f,subItems:[]}))}},i={args:{...e.args,showServiceImages:!1}},c={args:{...e.args,footer:{currency:"GBP",discounts:[],taxes:[]}}},d={args:{...e.args,footer:{currency:"GBP",discounts:[{label:"Early payment",percent:5},{label:"Referral credit",percent:2}],taxes:[{label:"VAT",rate:20}]}}},l={args:{...e.args,footer:{...y,currency:"USD"}}},p={args:{...e.args,footer:{...y,currency:"EUR"}}},u={args:{...e.args,header:{...h,showLogo:!1,showCompany:!1,showDueDate:!1,showBillTo:!1,showPO:!1}}},m={args:{...e.args,serviceBlocks:[{id:"svc-only",name:"Consulting",description:"Product strategy & roadmap review",qty:4,unit:"hrs",price:150,taxable:!0,imageUrl:"",subItems:[]}],footer:{currency:"GBP",discounts:[],taxes:[{label:"VAT",rate:20}]}}},g={args:{...e.args,serviceBlocks:[],footer:{currency:"GBP",discounts:[],taxes:[]}}},v={render:f=>({components:{FuInvoicePreview:w},setup(){const x=["classic","minimal","modern","detailed"],C=S("classic");return{args:f,variants:x,active:C}},template:`
      <div>
        <div style="background: #111827; padding: 10px 16px; display: flex; gap: 8px; align-items: center;">
          <span style="color: #6b7280; font-size: 11px; font-weight: 600; letter-spacing: 0.08em; text-transform: uppercase; margin-right: 4px;">Variant</span>
          <button
            v-for="v in variants"
            :key="v"
            @click="active = v"
            :style="{
              background: active === v ? '#6366f1' : '#1f2937',
              color: active === v ? '#fff' : '#9ca3af',
              border: 'none',
              padding: '5px 12px',
              borderRadius: '5px',
              cursor: 'pointer',
              fontSize: '12px',
              fontWeight: '600',
              textTransform: 'capitalize',
            }"
          >{{ v }}</button>
        </div>
        <FuInvoicePreview v-bind="args" :variant="active" />
      </div>
    `}),args:{showServiceImages:!0,showQty:!0,showUnit:!0,showPrice:!0,showTax:!0,header:h,serviceBlocks:b,footer:y}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "classic",
    showServiceImages: true,
    showQty: true,
    showUnit: true,
    showPrice: true,
    showTax: true,
    header: HEADER,
    serviceBlocks: SERVICE_BLOCKS,
    footer: FOOTER
  }
}`,...e.parameters?.docs?.source},description:{story:"Classic layout — the default. Logo and company details on the left, invoice meta on the right.",...e.parameters?.docs?.description}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    ...Classic.args,
    variant: "minimal"
  }
}`,...r.parameters?.docs?.source},description:{story:"Minimal layout — typographic treatment, company name as the visual headline.",...r.parameters?.docs?.description}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    ...Classic.args,
    variant: "modern"
  }
}`,...a.parameters?.docs?.source},description:{story:"Modern layout — dark header band with an indigo accent strip and inverted total row.",...a.parameters?.docs?.description}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    ...Classic.args,
    variant: "detailed"
  }
}`,...s.parameters?.docs?.source},description:{story:"Detailed layout — large logo, tabular meta grid, double ruled section dividers.",...s.parameters?.docs?.description}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    ...Classic.args,
    header: {
      ...HEADER,
      bgColor: "#006FEE ",
      borderColor: "#6366f1"
    }
  }
}`,...o.parameters?.docs?.source},description:{story:"Classic with a custom brand colour on the header background and divider.",...o.parameters?.docs?.description}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    ...Classic.args,
    variant: "modern",
    header: {
      ...HEADER,
      bgColor: "#0d503c"
    }
  }
}`,...t.parameters?.docs?.source},description:{story:"Modern with a deep teal brand colour overriding the default dark band.",...t.parameters?.docs?.description}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    ...Classic.args,
    showQty: false,
    showUnit: false,
    showPrice: false,
    showTax: false,
    serviceBlocks: SERVICE_BLOCKS.map(b => ({
      ...b,
      subItems: []
    }))
  }
}`,...n.parameters?.docs?.source},description:{story:"All optional columns hidden — name and total only. Useful for simple deliverable invoices.",...n.parameters?.docs?.description}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    ...Classic.args,
    showServiceImages: false
  }
}`,...i.parameters?.docs?.source},description:{story:"Service image thumbnails hidden — cleaner for service-only invoices.",...i.parameters?.docs?.description}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    ...Classic.args,
    footer: {
      currency: "GBP",
      discounts: [],
      taxes: []
    }
  }
}`,...c.parameters?.docs?.source},description:{story:"No discounts, no tax — flat subtotal equals the total.",...c.parameters?.docs?.description}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    ...Classic.args,
    footer: {
      currency: "GBP",
      discounts: [{
        label: "Early payment",
        percent: 5
      }, {
        label: "Referral credit",
        percent: 2
      }],
      taxes: [{
        label: "VAT",
        rate: 20
      }]
    }
  }
}`,...d.parameters?.docs?.source},description:{story:"Multiple stacked discounts.",...d.parameters?.docs?.description}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    ...Classic.args,
    footer: {
      ...FOOTER,
      currency: "USD"
    }
  }
}`,...l.parameters?.docs?.source},description:{story:"USD currency.",...l.parameters?.docs?.description}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    ...Classic.args,
    footer: {
      ...FOOTER,
      currency: "EUR"
    }
  }
}`,...p.parameters?.docs?.source},description:{story:"EUR currency.",...p.parameters?.docs?.description}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    ...Classic.args,
    header: {
      ...HEADER,
      showLogo: false,
      showCompany: false,
      showDueDate: false,
      showBillTo: false,
      showPO: false
    }
  }
}`,...u.parameters?.docs?.source},description:{story:"Most header fields toggled off — confirms the layout holds without them.",...u.parameters?.docs?.description}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    ...Classic.args,
    serviceBlocks: [{
      id: "svc-only",
      name: "Consulting",
      description: "Product strategy & roadmap review",
      qty: 4,
      unit: "hrs",
      price: 150,
      taxable: true,
      imageUrl: "",
      subItems: []
    }],
    footer: {
      currency: "GBP",
      discounts: [],
      taxes: [{
        label: "VAT",
        rate: 20
      }]
    }
  }
}`,...m.parameters?.docs?.source},description:{story:"Single line item, no sub items, no discount.",...m.parameters?.docs?.description}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    ...Classic.args,
    serviceBlocks: [],
    footer: {
      currency: "GBP",
      discounts: [],
      taxes: []
    }
  }
}`,...g.parameters?.docs?.source},description:{story:"No service blocks at all — confirms the summary renders £0.00 gracefully.",...g.parameters?.docs?.description}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: args => ({
    components: {
      FuInvoicePreview
    },
    setup() {
      const variants = ["classic", "minimal", "modern", "detailed"] as const;
      const active = ref<string>("classic");
      return {
        args,
        variants,
        active
      };
    },
    template: \`
      <div>
        <div style="background: #111827; padding: 10px 16px; display: flex; gap: 8px; align-items: center;">
          <span style="color: #6b7280; font-size: 11px; font-weight: 600; letter-spacing: 0.08em; text-transform: uppercase; margin-right: 4px;">Variant</span>
          <button
            v-for="v in variants"
            :key="v"
            @click="active = v"
            :style="{
              background: active === v ? '#6366f1' : '#1f2937',
              color: active === v ? '#fff' : '#9ca3af',
              border: 'none',
              padding: '5px 12px',
              borderRadius: '5px',
              cursor: 'pointer',
              fontSize: '12px',
              fontWeight: '600',
              textTransform: 'capitalize',
            }"
          >{{ v }}</button>
        </div>
        <FuInvoicePreview v-bind="args" :variant="active" />
      </div>
    \`
  }),
  args: {
    showServiceImages: true,
    showQty: true,
    showUnit: true,
    showPrice: true,
    showTax: true,
    header: HEADER,
    serviceBlocks: SERVICE_BLOCKS,
    footer: FOOTER
  }
}`,...v.parameters?.docs?.source},description:{story:`Live variant switcher — click between all four layouts with the same data.
Useful for quickly comparing how a real invoice payload looks across variants.`,...v.parameters?.docs?.description}}};const P=["Classic","Minimal","Modern","Detailed","ClassicBranded","ModernBranded","SimpleColumns","NoImages","NoDiscountNoTax","MultipleDiscounts","USD","EUR","SparseHeader","SingleLineItem","Empty","VariantSwitcher"];export{e as Classic,o as ClassicBranded,s as Detailed,p as EUR,g as Empty,r as Minimal,a as Modern,t as ModernBranded,d as MultipleDiscounts,c as NoDiscountNoTax,i as NoImages,n as SimpleColumns,m as SingleLineItem,u as SparseHeader,l as USD,v as VariantSwitcher,P as __namedExportsOrder,T as default};
