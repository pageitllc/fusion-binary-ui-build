import{r}from"./iframe-DLJy-DHW.js";import{F as o}from"./FuColorPopover-mwIrK7E5.js";import"./preload-helper-Ct5FWWRu.js";import"./createLucideIcon-CURt8gZv.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const v={title:"Fusion/Forms/Selection/FuColorPopover",component:o,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:`
The **FuColorPopover** component provides a compact, popover-based color picker with full \`v-model\` support.

It renders a **circle swatch trigger** that opens a floating color palette, allowing users to select or manually enter colors using **HEX** or **RGB** formats.

The popover is **teleported to \`body\`**, positioned relative to the trigger, and automatically closes on outside click.

---

### Features
- **Custom** tab: colour field, hue slider, new-versus-current preview, HEX / RGB input and a screen eyedropper (Chrome, Edge)
- **Swatches** tab: a palette, neutrals and the colours you picked recently
- Optional **contrast check** against a background colour (WCAG AA / AAA)
- Optional **"In this document"** swatches for colours already used on the page
- Follows light and dark mode (Fusion theme tokens) and works with the keyboard (arrow keys, Esc)
- Circle swatch trigger with **toggle open / close**
- Popover teleported to \`body\` (no overflow or z-index issues)
- Full **\`v-model\`** two-way binding
- Supports **HEX** and **RGB** input
- Click-outside to close
- Hue + saturation/value picker
- Accepts external color updates
- **Three sizes:** \`xs\`, \`sm\`, \`md\` (default)

---

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| \`modelValue\` | \`string\` | — | Selected color (HEX or RGB) |
| \`size\` | \`'xs' \\| 'sm' \\| 'md'\` | \`'md'\` | Size of the trigger swatch |
| \`swatches\` | \`string[]\` | — | Colours already used in the document, shown as "In this document" |
| \`contrastWith\` | \`string\` | — | A background colour: shows the contrast ratio of the chosen colour against it |
| \`eyedropper\` | \`boolean\` | \`true\` | Show the screen eyedropper where the browser supports it |
| \`bare\` | \`boolean\` | \`false\` | No circle: the \`trigger\` slot is the whole button, so a host (a toolbar) draws its own |
| \`keepFocus\` | \`boolean\` | \`false\` | The page keeps its focus and text selection while the picker is used (colouring selected text) |

---

### Example Usage

\`\`\`vue
<script setup>
import { ref } from 'vue'
import FuColorPopover from '@/components/FuColorPopover.vue'

const color = ref('#69CC8A')
<\/script>

<template>
  <FuColorPopover v-model="color" />
  <FuColorPopover v-model="color" size="sm" />
  <FuColorPopover v-model="color" size="xs" />
</template>
\`\`\`
        `}}},argTypes:{modelValue:{control:"text",description:"Selected color (HEX or RGB)",table:{category:"v-model"}},size:{control:"select",options:["xs","sm","md"],description:"Size of the trigger swatch",table:{category:"Props",defaultValue:{summary:"md"}}}}},t={render:e=>({components:{FuColorPopover:o},setup(){return{color:r(e.modelValue)}},template:`
      <div style="padding: 2rem; min-width: 320px;">
        <FuColorPopover v-model="color" />
        <div style="margin-top: 12px; font-size: 13px;">
          <strong>v-model value:</strong> {{ color }}
        </div>
      </div>
    `}),args:{modelValue:"#69CC8A"},parameters:{docs:{description:{story:"Default usage with the medium swatch (30px)."}}}},s={render:e=>({components:{FuColorPopover:o},setup(){return{color:r(e.modelValue)}},template:`
      <div style="padding: 2rem; min-width: 320px;">
        <FuColorPopover
          v-model="color"
          :swatches="['#1A3D2B', '#F3F1E8', '#33453B', '#D63A21', '#FFFFFF']"
          contrastWith="#1A3D2B"
        />
        <div style="margin-top: 12px; font-size: 13px;">
          <strong>v-model value:</strong> {{ color }}
        </div>
      </div>
    `}),args:{modelValue:"#F3F1E8"},parameters:{docs:{description:{story:"Pass `swatches` to list the colours the document already uses, and `contrastWith` to show the WCAG contrast ratio against a background."}}}},n={render:e=>({components:{FuColorPopover:o},setup(){return{color:r(e.modelValue)}},template:`
      <div style="padding: 2rem; min-width: 320px;">
        <FuColorPopover v-model="color" size="sm" />
        <div style="margin-top: 12px; font-size: 13px;">
          <strong>v-model value:</strong> {{ color }}
        </div>
      </div>
    `}),args:{modelValue:"#3B82F6"},parameters:{docs:{description:{story:"Small swatch (22px) — suits compact toolbars."}}}},l={render:e=>({components:{FuColorPopover:o},setup(){return{color:r(e.modelValue)}},template:`
      <div style="padding: 2rem; min-width: 320px;">
        <FuColorPopover v-model="color" size="xs" />
        <div style="margin-top: 12px; font-size: 13px;">
          <strong>v-model value:</strong> {{ color }}
        </div>
      </div>
    `}),args:{modelValue:"#EF4444"},parameters:{docs:{description:{story:"Extra small swatch (16px) — for tight inline use like the message composer toolbar."}}}},a={render:()=>({components:{FuColorPopover:o},setup(){return{color:r("#8B5CF6")}},template:`
      <div style="padding: 2rem; display: flex; align-items: center; gap: 16px;">
        <div style="display: flex; flex-direction: column; align-items: center; gap: 6px; font-size: 12px; color: #888;">
          <FuColorPopover v-model="color" size="xs" />
          <span>xs</span>
        </div>
        <div style="display: flex; flex-direction: column; align-items: center; gap: 6px; font-size: 12px; color: #888;">
          <FuColorPopover v-model="color" size="sm" />
          <span>sm</span>
        </div>
        <div style="display: flex; flex-direction: column; align-items: center; gap: 6px; font-size: 12px; color: #888;">
          <FuColorPopover v-model="color" />
          <span>md (default)</span>
        </div>
        <div style="margin-left: 16px; font-size: 13px;">
          <strong>Shared v-model:</strong> {{ color }}
        </div>
      </div>
    `}),parameters:{docs:{description:{story:"All three sizes side by side sharing the same v-model."}}}},i={render:()=>({components:{FuColorPopover:o},setup(){return{color:r("#F59E0B")}},template:`
      <div style="padding: 2rem; min-width: 320px;">
        <FuColorPopover v-model="color">
          <template #trigger>
            <div style="display:flex;flex-direction:column;align-items:center;gap:2px;cursor:pointer;">
              <span style="font-size:13px;font-weight:700;line-height:1;">A</span>
              <div :style="{ width: '14px', height: '2px', borderRadius: '2px', background: color }" />
            </div>
          </template>
        </FuColorPopover>
        <div style="margin-top: 12px; font-size: 13px;">
          <strong>v-model value:</strong> {{ color }}
        </div>
      </div>
    `}),parameters:{docs:{description:{story:"Using the #trigger slot to render a custom trigger — e.g. the text colour button in the composer toolbar."}}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => ({
    components: {
      FuColorPopover
    },
    setup() {
      const color = ref(args.modelValue);
      return {
        color
      };
    },
    template: \`
      <div style="padding: 2rem; min-width: 320px;">
        <FuColorPopover v-model="color" />
        <div style="margin-top: 12px; font-size: 13px;">
          <strong>v-model value:</strong> {{ color }}
        </div>
      </div>
    \`
  }),
  args: {
    modelValue: "#69CC8A"
  },
  parameters: {
    docs: {
      description: {
        story: "Default usage with the medium swatch (30px)."
      }
    }
  }
}`,...t.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: args => ({
    components: {
      FuColorPopover
    },
    setup() {
      const color = ref(args.modelValue);
      return {
        color
      };
    },
    template: \`
      <div style="padding: 2rem; min-width: 320px;">
        <FuColorPopover
          v-model="color"
          :swatches="['#1A3D2B', '#F3F1E8', '#33453B', '#D63A21', '#FFFFFF']"
          contrastWith="#1A3D2B"
        />
        <div style="margin-top: 12px; font-size: 13px;">
          <strong>v-model value:</strong> {{ color }}
        </div>
      </div>
    \`
  }),
  args: {
    modelValue: "#F3F1E8"
  },
  parameters: {
    docs: {
      description: {
        story: "Pass \`swatches\` to list the colours the document already uses, and \`contrastWith\` to show the WCAG contrast ratio against a background."
      }
    }
  }
}`,...s.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: args => ({
    components: {
      FuColorPopover
    },
    setup() {
      const color = ref(args.modelValue);
      return {
        color
      };
    },
    template: \`
      <div style="padding: 2rem; min-width: 320px;">
        <FuColorPopover v-model="color" size="sm" />
        <div style="margin-top: 12px; font-size: 13px;">
          <strong>v-model value:</strong> {{ color }}
        </div>
      </div>
    \`
  }),
  args: {
    modelValue: "#3B82F6"
  },
  parameters: {
    docs: {
      description: {
        story: "Small swatch (22px) — suits compact toolbars."
      }
    }
  }
}`,...n.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: args => ({
    components: {
      FuColorPopover
    },
    setup() {
      const color = ref(args.modelValue);
      return {
        color
      };
    },
    template: \`
      <div style="padding: 2rem; min-width: 320px;">
        <FuColorPopover v-model="color" size="xs" />
        <div style="margin-top: 12px; font-size: 13px;">
          <strong>v-model value:</strong> {{ color }}
        </div>
      </div>
    \`
  }),
  args: {
    modelValue: "#EF4444"
  },
  parameters: {
    docs: {
      description: {
        story: "Extra small swatch (16px) — for tight inline use like the message composer toolbar."
      }
    }
  }
}`,...l.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      FuColorPopover
    },
    setup() {
      const color = ref("#8B5CF6");
      return {
        color
      };
    },
    template: \`
      <div style="padding: 2rem; display: flex; align-items: center; gap: 16px;">
        <div style="display: flex; flex-direction: column; align-items: center; gap: 6px; font-size: 12px; color: #888;">
          <FuColorPopover v-model="color" size="xs" />
          <span>xs</span>
        </div>
        <div style="display: flex; flex-direction: column; align-items: center; gap: 6px; font-size: 12px; color: #888;">
          <FuColorPopover v-model="color" size="sm" />
          <span>sm</span>
        </div>
        <div style="display: flex; flex-direction: column; align-items: center; gap: 6px; font-size: 12px; color: #888;">
          <FuColorPopover v-model="color" />
          <span>md (default)</span>
        </div>
        <div style="margin-left: 16px; font-size: 13px;">
          <strong>Shared v-model:</strong> {{ color }}
        </div>
      </div>
    \`
  }),
  parameters: {
    docs: {
      description: {
        story: "All three sizes side by side sharing the same v-model."
      }
    }
  }
}`,...a.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      FuColorPopover
    },
    setup() {
      const color = ref("#F59E0B");
      return {
        color
      };
    },
    template: \`
      <div style="padding: 2rem; min-width: 320px;">
        <FuColorPopover v-model="color">
          <template #trigger>
            <div style="display:flex;flex-direction:column;align-items:center;gap:2px;cursor:pointer;">
              <span style="font-size:13px;font-weight:700;line-height:1;">A</span>
              <div :style="{ width: '14px', height: '2px', borderRadius: '2px', background: color }" />
            </div>
          </template>
        </FuColorPopover>
        <div style="margin-top: 12px; font-size: 13px;">
          <strong>v-model value:</strong> {{ color }}
        </div>
      </div>
    \`
  }),
  parameters: {
    docs: {
      description: {
        story: "Using the #trigger slot to render a custom trigger — e.g. the text colour button in the composer toolbar."
      }
    }
  }
}`,...i.parameters?.docs?.source}}};const h=["Default","WithDocumentColours","Small","XSmall","AllSizes","CustomTrigger"];export{a as AllSizes,i as CustomTrigger,t as Default,n as Small,s as WithDocumentColours,l as XSmall,h as __namedExportsOrder,v as default};
