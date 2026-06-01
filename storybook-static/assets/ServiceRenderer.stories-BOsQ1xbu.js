import{r as a}from"./iframe-BWX2pLPr.js";import c from"./ServiceRenderer-DbsNkw3q.js";import"./preload-helper-Ct5FWWRu.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const g={title:"Renderer/ServiceRenderer",component:c,tags:["autodocs"],parameters:{layout:"padded",docs:{description:{component:`
A **service selection widget** designed to run inside the Block → Column → Widget system.

---

# 1. Architecture Context

This widget always lives inside:

\`\`\`
Block
  └── Column
        └── Widgets[]
              └── ServiceRenderer
\`\`\`

It is not standalone UI. It is a **layout-embedded engine**.

---

# 2. Selection Model

State is fully driven by:

\`\`\`ts
selectedServiceIds: string[]
\`\`\`

All updates flow upward via:
- toggle-select
- action emit
- block persistence layer

---

# 3. Layout Modes

### 2 Column
- Balanced comparison layout
- Best for pricing comparison

### Row Layout
- Horizontal service cards
- Best for scanning / long lists

---

# 4. Mental Model

> A pricing engine embedded inside a layout system
        `}}}},n=[{_id:"svc_1",name:"SEO Audit",description:"Full website SEO analysis",unitPrice:"£120",quantity:1,unit:"service",image:"https://picsum.photos/300/200?1"},{_id:"svc_2",name:"Landing Page Design",description:"High-converting landing page",unitPrice:"£300",quantity:1,unit:"page",image:"https://picsum.photos/300/200?2"},{_id:"svc_3",name:"Performance Ads Setup",description:"Meta + Google ads configuration",unitPrice:"£200",quantity:1,unit:"setup",image:"https://picsum.photos/300/200?3"}],e={args:{widget:{props:{layout:"3col",selectionMode:"view",services:n,selectedServiceIds:[],widgetDisplay:{showImage:!0,showDescription:!0,showQuantity:!0,showUnitPrice:!0,showServicePrice:!0}}}}},t={args:{widget:{props:{layout:"2col",selectionMode:"single",services:n,selectedServiceIds:["svc_2"],widgetDisplay:{showImage:!0,showDescription:!0,showQuantity:!0,showUnitPrice:!0,showServicePrice:!0}}}}},s={args:{widget:{props:{layout:"row",selectionMode:"multiple",services:n,selectedServiceIds:["svc_1"],widgetDisplay:{showImage:!0,showDescription:!0,showQuantity:!0,showUnitPrice:!0,showServicePrice:!0}}}}},i={render:()=>({components:{ServiceRenderer:c},setup(){const r=a({props:{layout:"2col",selectionMode:"multiple",services:n,selectedServiceIds:["svc_1"],widgetDisplay:{showImage:!0,showDescription:!0,showQuantity:!0,showUnitPrice:!0,showServicePrice:!0}}});return{widget:r,onAction:o=>{console.log("SERVICE SELECT EVENT:",o),r.value.props.selectedServiceIds=[...o.selectedServiceIds]}}},template:`
      <ServiceRenderer :widget="widget" @action="onAction" />
    `})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    widget: {
      props: {
        layout: "3col",
        selectionMode: "view",
        services: demoServices,
        selectedServiceIds: [],
        widgetDisplay: {
          showImage: true,
          showDescription: true,
          showQuantity: true,
          showUnitPrice: true,
          showServicePrice: true
        }
      }
    }
  }
}`,...e.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    widget: {
      props: {
        layout: "2col",
        selectionMode: "single",
        services: demoServices,
        selectedServiceIds: ["svc_2"],
        widgetDisplay: {
          showImage: true,
          showDescription: true,
          showQuantity: true,
          showUnitPrice: true,
          showServicePrice: true
        }
      }
    }
  }
}`,...t.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    widget: {
      props: {
        layout: "row",
        selectionMode: "multiple",
        services: demoServices,
        selectedServiceIds: ["svc_1"],
        widgetDisplay: {
          showImage: true,
          showDescription: true,
          showQuantity: true,
          showUnitPrice: true,
          showServicePrice: true
        }
      }
    }
  }
}`,...s.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      ServiceRenderer
    },
    setup() {
      const widget = ref({
        props: {
          layout: "2col",
          selectionMode: "multiple",
          services: demoServices,
          selectedServiceIds: ["svc_1"],
          widgetDisplay: {
            showImage: true,
            showDescription: true,
            showQuantity: true,
            showUnitPrice: true,
            showServicePrice: true
          }
        }
      });
      const onAction = (e: any) => {
        console.log("SERVICE SELECT EVENT:", e);
        widget.value.props.selectedServiceIds = [...e.selectedServiceIds];
      };
      return {
        widget,
        onAction
      };
    },
    template: \`
      <ServiceRenderer :widget="widget" @action="onAction" />
    \`
  })
}`,...i.parameters?.docs?.source}}};const m=["ViewOnly","SingleSelect","RowLayout","MultiSelectLive"];export{i as MultiSelectLive,s as RowLayout,t as SingleSelect,e as ViewOnly,m as __namedExportsOrder,g as default};
