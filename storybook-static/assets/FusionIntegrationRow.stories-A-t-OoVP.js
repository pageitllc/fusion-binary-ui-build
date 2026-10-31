import{r as c}from"./iframe-BJCCdSEh.js";import{F as s}from"./FusionIntegrationRow-FeceCnG9.js";import{F as d}from"./file-text-EiT8E8mh.js";import{U as m}from"./user-CHgZ-qf7.js";import{M as u}from"./mail-BZZs6n4q.js";import"./preload-helper-Ct5FWWRu.js";import"./FusionButton-C-jVNrMQ.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./createLucideIcon-B6nnLSzH.js";import"./check-BPvHJlOS.js";const r=(n,a)=>"data:image/svg+xml;utf8,"+encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40"><rect width="40" height="40" rx="9" fill="${n}"/><text x="20" y="27" font-family="Arial" font-size="20" font-weight="700" text-anchor="middle" fill="#fff">${a}</text></svg>`),y={title:"Fusion/Data Display/FusionIntegrationRow",component:s,tags:["autodocs"],parameters:{layout:"padded",docs:{description:{component:'\n### **FusionIntegrationRow**\n\nOne row in a "connect your tools" list: a logo tile, a name, a short description, and on the right the state of that connection.\n\n| `status` | What it shows |\n|---|---|\n| `available` | An outline **Connect** button. It emits `connect`. |\n| `connected` | A green tile and a green **Connected** flag with a tick. |\n| `coming-soon` | The row greyed out, with a **Coming soon** tag. |\n\nThe tile shows your `image` (a logo), or a Lucide `icon`, or a plug icon if you give neither.\n\n---\n\n#### How to use it\n\nPut the rows in an element with `role="list"`. The last row loses its bottom line by itself.\n\n```vue\n<div role="list">\n  <FusionIntegrationRow\n    name="Gmail"\n    description="Email and replies"\n    image="/logos/gmail.svg"\n    status="connected"\n  />\n  <FusionIntegrationRow\n    name="Outlook"\n    description="Email and replies"\n    image="/logos/outlook.svg"\n    status="available"\n    :loading="connecting === \'outlook\'"\n    @connect="connect(\'outlook\')"\n  />\n  <FusionIntegrationRow name="Pipedrive" description="CRM deals" status="coming-soon" />\n</div>\n```\n\n#### Props\n\n| Prop | Type | Default | What it does |\n|---|---|---|---|\n| `name` | `string` | required | The tool\'s name. |\n| `description` | `string` | empty | Grey line under the name. |\n| `image` | `string` | empty | Logo for the tile. |\n| `icon` | Lucide component | none | Icon for the tile when there is no image. |\n| `status` | `"available" \\| "connected" \\| "coming-soon"` | `"available"` | See the table above. |\n| `connectLabel`, `connectedLabel`, `comingSoonLabel` | `string` | "Connect", "Connected", "Coming soon" | Change the wording. |\n| `loading`, `disabled` | `boolean` | `false` | State of the Connect button. |\n\n**Event:** `connect`.\n**Slot:** `#action` replaces the right-hand side, for example to add a Disconnect button on a connected row.\n'}}},argTypes:{status:{control:"inline-radio",options:["available","connected","coming-soon"]}}},o={render:()=>({components:{FusionIntegrationRow:s},setup(){const n=c(!1),a=c("available");function l(){n.value=!0,setTimeout(()=>{n.value=!1,a.value="connected"},1200)}return{connecting:n,outlook:a,connect:l,logos:{gmail:r("#D8473C","G"),outlook:r("#2B6CB0","O")}}},template:`
      <div role="list" style="max-width: 560px">
        <FusionIntegrationRow name="Gmail" description="Email and replies" :image="logos.gmail" status="connected" />
        <FusionIntegrationRow
          name="Outlook"
          description="Email and replies"
          :image="logos.outlook"
          :status="outlook"
          :loading="connecting"
          @connect="connect"
        />
        <FusionIntegrationRow name="Pipedrive" description="CRM deals" status="coming-soon" />
        <FusionIntegrationRow name="HubSpot" description="CRM contacts" status="coming-soon" />
        <FusionIntegrationRow name="PandaDoc" description="Documents" status="coming-soon" />
      </div>`})},e={render:()=>({components:{FusionIntegrationRow:s},setup:()=>({Mail:u,User:m,FileText:d}),template:`
      <div role="list" style="max-width: 560px">
        <FusionIntegrationRow name="Email" description="Email and replies" :icon="Mail" status="connected" />
        <FusionIntegrationRow name="Contacts" description="Clients and deals" :icon="User" />
        <FusionIntegrationRow name="Documents" description="Sent, opened and signed" :icon="FileText" status="coming-soon" />
      </div>`})},t={render:()=>({components:{FusionIntegrationRow:s},setup:()=>({logo:r("#D8473C","G")}),template:`
      <div role="list" style="max-width: 560px">
        <FusionIntegrationRow name="Gmail" description="Email and replies" :image="logo" status="connected">
          <template #action>
            <button type="button" style="border: 0; background: none; text-decoration: underline; cursor: pointer; font: inherit">Disconnect</button>
          </template>
        </FusionIntegrationRow>
      </div>`})},i={args:{name:"Gmail",description:"Email and replies",status:"available",loading:!1}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      FusionIntegrationRow
    },
    setup() {
      const connecting = ref(false);
      const outlook = ref<"available" | "connected">("available");
      function connect() {
        connecting.value = true;
        setTimeout(() => {
          connecting.value = false;
          outlook.value = "connected";
        }, 1200);
      }
      return {
        connecting,
        outlook,
        connect,
        logos: {
          gmail: logo("#D8473C", "G"),
          outlook: logo("#2B6CB0", "O")
        }
      };
    },
    template: \`
      <div role="list" style="max-width: 560px">
        <FusionIntegrationRow name="Gmail" description="Email and replies" :image="logos.gmail" status="connected" />
        <FusionIntegrationRow
          name="Outlook"
          description="Email and replies"
          :image="logos.outlook"
          :status="outlook"
          :loading="connecting"
          @connect="connect"
        />
        <FusionIntegrationRow name="Pipedrive" description="CRM deals" status="coming-soon" />
        <FusionIntegrationRow name="HubSpot" description="CRM contacts" status="coming-soon" />
        <FusionIntegrationRow name="PandaDoc" description="Documents" status="coming-soon" />
      </div>\`
  })
}`,...o.parameters?.docs?.source},description:{story:"The three states in a list, as in the design.",...o.parameters?.docs?.description}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      FusionIntegrationRow
    },
    setup: () => ({
      Mail,
      User,
      FileText
    }),
    template: \`
      <div role="list" style="max-width: 560px">
        <FusionIntegrationRow name="Email" description="Email and replies" :icon="Mail" status="connected" />
        <FusionIntegrationRow name="Contacts" description="Clients and deals" :icon="User" />
        <FusionIntegrationRow name="Documents" description="Sent, opened and signed" :icon="FileText" status="coming-soon" />
      </div>\`
  })
}`,...e.parameters?.docs?.source},description:{story:"With a Lucide icon instead of a logo.",...e.parameters?.docs?.description}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      FusionIntegrationRow
    },
    setup: () => ({
      logo: logo("#D8473C", "G")
    }),
    template: \`
      <div role="list" style="max-width: 560px">
        <FusionIntegrationRow name="Gmail" description="Email and replies" :image="logo" status="connected">
          <template #action>
            <button type="button" style="border: 0; background: none; text-decoration: underline; cursor: pointer; font: inherit">Disconnect</button>
          </template>
        </FusionIntegrationRow>
      </div>\`
  })
}`,...t.parameters?.docs?.source},description:{story:"A connected row with its own Disconnect button.",...t.parameters?.docs?.description}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    name: "Gmail",
    description: "Email and replies",
    status: "available",
    loading: false
  }
}`,...i.parameters?.docs?.source},description:{story:"Play with the props.",...i.parameters?.docs?.description}}};const x=["List","WithIcons","CustomAction","Playground"];export{t as CustomAction,o as List,i as Playground,e as WithIcons,x as __namedExportsOrder,y as default};
