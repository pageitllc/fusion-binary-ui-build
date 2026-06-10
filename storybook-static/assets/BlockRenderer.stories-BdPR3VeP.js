import{h as n}from"./iframe-D3vfv6YP.js";import{B as c}from"./BlockRenderer-DQwyHh_D.js";import l from"./TextRenderer-SiDZrjtU.js";import m from"./ImageRenderer-rPT2mCmF.js";import p from"./DividerRenderer-_s0GKIlN.js";import g from"./ServiceRenderer-DBULnbFX.js";import"./preload-helper-Ct5FWWRu.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./createLucideIcon-DKFlsGA7.js";const t={text:{render:({widget:e})=>n(l,{content:e.props.content})},image:{render:({widget:e})=>n(m,{widget:e})},divider:{render:({widget:e})=>n(p,{widget:e})},service:{render:({widget:e})=>n(g,{widget:e})}},S={title:"Renderer/BlockRenderer",component:c,parameters:{layout:"fullscreen",docs:{description:{component:`
# BlockRenderer System

This is the **core layout engine** of the entire platform.

It renders a page using a **3-layer architecture**:

---

## 1. Block Layer (Layout Engine)

Controls:
- page width (sm / md / lg / full)
- padding
- background
- column structure

It does NOT control content logic.

---

## 2. Column Layer (Grid System)

Each block contains columns:

\`\`\`
block
 └── columns[]
      └── widgets[]
\`\`\`

Each column controls:
- width percentage
- widget stacking order

---

## 3. Widget Layer (Runtime Components)

Widgets are resolved dynamically via registry:

- text → TextRenderer
- image → ImageRenderer
- divider → DividerRenderer
- service → ServiceRenderer

This allows:
- CMS-style composition
- dynamic UI rendering
- plugin-based architecture

---

## Mental Model

> BlockRenderer is not a component system  
> It is a **runtime page execution engine**

---

## Event Flow

Widgets can emit actions upward:

\`\`\`ts
widget → column → block → app state
\`\`\`

Example:
- service selection
- button clicks
- form updates
        `}}}},a={id:"t1",type:"text",props:{content:`
      <h1 style="text-align:center;font-size:54px;color:#111">
        Build Better Blocks
      </h1>
      <p style="text-align:center;color:#666">
        Layout system powered by Block → Column → Widget architecture
      </p>
    `}},s={id:"img1",type:"image",props:{src:"https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=1400",alt:"Hero",imageWidth:600,alignment:"center",borderRadius:16}},d={id:"divider-1",type:"divider",props:{color:"#22c55e",thickness:2,width:"100%",marginTop:20,marginBottom:20}},o={name:"1 Column (Hero + Service)",args:{block:{id:"b1",contentWidth:"md",backgroundColor:"#ffffff",paddingTop:90,paddingBottom:90,columns:[{width:100,widgets:[a,s,d,{id:"service-widget",type:"service",props:{layout:"2col",selectionMode:"single",selectedServiceIds:["svc-addon-002"],widgetDisplay:{showImage:!0,showDescription:!0,showQuantity:!0,showUnitPrice:!0,showServicePrice:!0},pricingStyle:{color:"#4362FF",fontSize:18,fontFamily:"Inter"},itemStyle:{bgColor:"#ffffff",borderRadius:16,shadow:6},services:[{_id:"svc-addon-001",name:"Social Media Management",unitPrice:"£950",quantity:3,image:"https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=600"},{_id:"svc-addon-002",name:"Website Redesign",unitPrice:"£4,800",quantity:1,image:"https://images.unsplash.com/photo-1547658719-da2b51169166?w=600"}]}}]}]}}},r={name:"2 Columns Layout",args:{block:{id:"b2",contentWidth:"lg",backgroundColor:"#f9fafb",paddingTop:70,paddingBottom:70,columns:[{width:50,widgets:[{id:"text-left",type:"text",props:{content:`
                  <h2 style="font-size:34px;">Composable System</h2>
                  <p style="color:#555">
                    Each column can stack multiple widgets in order.
                  </p>
                `}},d]},{width:50,widgets:[s,{id:"text-right",type:"text",props:{content:`
                  <h3 style="text-align:center;">Flexible Layouts</h3>
                  <p style="text-align:center;color:#666">
                    Build pages without hardcoding UI structure.
                  </p>
                `}}]}]}}},i={name:"Full Width Section",args:{block:{id:"b3",contentWidth:"full",backgroundColor:"#0f172a",paddingTop:100,paddingBottom:100,columns:[{width:100,widgets:[a,s,d]}]}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  text: {
    render: ({
      widget
    }: any) => h(TextRenderer, {
      content: widget.props.content
    })
  },
  image: {
    render: ({
      widget
    }: any) => h(ImageRenderer, {
      widget
    })
  },
  divider: {
    render: ({
      widget
    }: any) => h(DividerRenderer, {
      widget
    })
  },
  service: {
    render: ({
      widget
    }: any) => h(ServiceRenderer, {
      widget
    })
  }
}`,...t.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "1 Column (Hero + Service)",
  args: {
    block: {
      id: "b1",
      contentWidth: "md",
      backgroundColor: "#ffffff",
      paddingTop: 90,
      paddingBottom: 90,
      columns: [{
        width: 100,
        widgets: [heroText, heroImage, heroDivider, {
          id: "service-widget",
          type: "service",
          props: {
            layout: "2col",
            selectionMode: "single",
            selectedServiceIds: ["svc-addon-002"],
            widgetDisplay: {
              showImage: true,
              showDescription: true,
              showQuantity: true,
              showUnitPrice: true,
              showServicePrice: true
            },
            pricingStyle: {
              color: "#4362FF",
              fontSize: 18,
              fontFamily: "Inter"
            },
            itemStyle: {
              bgColor: "#ffffff",
              borderRadius: 16,
              shadow: 6
            },
            services: [{
              _id: "svc-addon-001",
              name: "Social Media Management",
              unitPrice: "£950",
              quantity: 3,
              image: "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=600"
            }, {
              _id: "svc-addon-002",
              name: "Website Redesign",
              unitPrice: "£4,800",
              quantity: 1,
              image: "https://images.unsplash.com/photo-1547658719-da2b51169166?w=600"
            }]
          }
        }]
      }]
    }
  }
}`,...o.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  name: "2 Columns Layout",
  args: {
    block: {
      id: "b2",
      contentWidth: "lg",
      backgroundColor: "#f9fafb",
      paddingTop: 70,
      paddingBottom: 70,
      columns: [{
        width: 50,
        widgets: [{
          id: "text-left",
          type: "text",
          props: {
            content: \`
                  <h2 style="font-size:34px;">Composable System</h2>
                  <p style="color:#555">
                    Each column can stack multiple widgets in order.
                  </p>
                \`
          }
        }, heroDivider]
      }, {
        width: 50,
        widgets: [heroImage, {
          id: "text-right",
          type: "text",
          props: {
            content: \`
                  <h3 style="text-align:center;">Flexible Layouts</h3>
                  <p style="text-align:center;color:#666">
                    Build pages without hardcoding UI structure.
                  </p>
                \`
          }
        }]
      }]
    }
  }
}`,...r.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  name: "Full Width Section",
  args: {
    block: {
      id: "b3",
      contentWidth: "full",
      backgroundColor: "#0f172a",
      paddingTop: 100,
      paddingBottom: 100,
      columns: [{
        width: 100,
        widgets: [heroText, heroImage, heroDivider]
      }]
    }
  }
}`,...i.parameters?.docs?.source}}};const R=["widgetRegistry","OneColumn","TwoColumns","FullWidth"];export{i as FullWidth,o as OneColumn,r as TwoColumns,R as __namedExportsOrder,S as default,t as widgetRegistry};
