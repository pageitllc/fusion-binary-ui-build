import{r as o,c as b,n as j}from"./iframe-D7VSQkaL.js";import{F as s}from"./FuPopover-D9QLX9kq.js";import{F as l}from"./FusionButton-uKQ8jdTT.js";import{F as B}from"./FusionTextInput-Bnx3673t.js";import"./preload-helper-Ct5FWWRu.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const _={title:"Fusion/Overlays/FuPopover",component:s,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:"\n**FuPopover** is a generic, unstyled popover wrapper from the Fusion Binary design system.\n\nIt handles positioning, flipping, outside-click closing, and scroll containment. You control the content entirely.\n\n---\n\n### How it works\n\n- `#trigger` → clickable element that opens/closes the popover\n- `#header` → optional — sticky or scrollable depending on `stickyHeader`\n- **default slot** → the scrollable body, always scrolls when `maxHeight` is set\n- `#footer` → optional — sticky or scrollable depending on `stickyFooter`\n- Teleported to `<body>` — never clipped by ancestors\n- Auto-flips vertically if there is not enough room\n\n---\n\n### Sticky behavior\n\n| Prop | Value | Behavior |\n|------|-------|----------|\n| `stickyHeader` | `true` | Header pins to top while body scrolls |\n| `stickyHeader` | `false` | Header scrolls away with content |\n| `stickyFooter` | `true` | Footer pins to bottom while body scrolls |\n| `stickyFooter` | `false` | Footer scrolls away with content |\n\n---\n\n### Props\n\n| Prop | Type | Default | Description |\n|------|------|---------|-------------|\n| `align` | `'left' \\| 'right' \\| 'center'` | `'left'` | Horizontal alignment |\n| `side` | `'bottom' \\| 'top'` | `'bottom'` | Opening side — auto-flips |\n| `offset` | `number` | `6` | Gap between trigger and popover |\n| `width` | `string` | `'auto'` | CSS width |\n| `maxHeight` | `string` | `'none'` | Caps the body scroll area |\n| `stickyHeader` | `boolean` | `false` | Pin header to top |\n| `stickyFooter` | `boolean` | `false` | Pin footer to bottom |\n\n### Slots\n\n| Slot | Description |\n|------|-------------|\n| `#trigger` | Opens/closes the popover |\n| `#header` | Optional top area |\n| `default` | Scrollable body |\n| `#footer` | Optional bottom area |\n\n### Emits\n\n| Event | When |\n|-------|------|\n| `open` | Popover opens |\n| `close` | Popover closes |\n\n### Exposed\n\n| Method | Description |\n|--------|-------------|\n| `open()` | Open programmatically |\n| `close()` | Close programmatically |\n\n---\n\n### ⚠️ Key rule\n\n> **The popover owns the scroll. Never put `overflow` or `max-height` on your content.**\n> Set `maxHeight` on `<FuPopover>` and let `.fu-popover__body` handle it.\n\n---\n        "}}},argTypes:{align:{control:"select",options:["left","right","center"]},side:{control:"select",options:["bottom","top"]},offset:{control:"number"},width:{control:"text"},maxHeight:{control:"text"},stickyHeader:{control:"boolean"},stickyFooter:{control:"boolean"}}},d={render:e=>({components:{FuPopover:s,FuButton:l},setup(){return{args:e}},template:`
      <FuPopover v-bind="args">
        <template #trigger>
          <FuButton>Open</FuButton>
        </template>
        <div style="padding:16px;font-size:13px;">
          Simple popover — no header, no footer, body grows to fit content.
        </div>
      </FuPopover>
    `}),args:{width:"220px"},parameters:{docs:{description:{story:"Minimal usage — trigger + body only. No `maxHeight` so body expands to fit."}}}},c={render:e=>({components:{FuPopover:s,FuButton:l},setup(){const r=Array.from({length:30},(n,i)=>`Item ${i+1}`);return{args:e,items:r}},template:`
      <FuPopover v-bind="args">
        <template #trigger>
          <FuButton>30 items</FuButton>
        </template>
        <div
          v-for="item in items"
          :key="item"
          style="padding:8px 14px;font-size:13px;border-bottom:0.5px solid var(--fu-border,#eee);cursor:pointer;transition:background 0.1s;"
          onmouseover="this.style.background='var(--fu-hover-bg,#f5f5f5)'"
          onmouseout="this.style.background=''"
        >{{ item }}</div>
      </FuPopover>
    `}),args:{width:"240px",maxHeight:"240px"},parameters:{docs:{description:{story:"Set `maxHeight` on `<FuPopover>` — the body scrolls automatically. No `overflow` or `max-height` on the content itself."}}}},u={render:()=>({components:{FuPopover:s,FuButton:l},setup(){const e=o("all"),r=Array.from({length:25},(i,p)=>({id:p+1,label:`Item ${p+1}`,type:p%2===0?"even":"odd"})),n=b(()=>e.value==="all"?r:r.filter(i=>i.type===e.value));return{filter:e,filtered:n}},template:`
      <FuPopover width="260px" maxHeight="260px" :stickyHeader="true" :stickyFooter="true">
        <template #trigger>
          <FuButton>Sticky on</FuButton>
        </template>

        <template #header>
          <div style="padding:8px;display:flex;gap:4px;">
            <button
              v-for="f in ['all','even','odd']" :key="f"
              @click="filter = f"
              :style="{
                padding:'4px 12px', borderRadius:'6px', cursor:'pointer', fontSize:'12px', fontWeight:'500',
                border:'0.5px solid var(--fu-border,#e5e7eb)', transition:'all 0.15s',
                background: filter === f ? 'var(--fu-primary,#4f8ef7)' : 'transparent',
                color: filter === f ? '#fff' : 'inherit',
              }"
            >{{ f }}</button>
          </div>
        </template>

        <div
          v-for="item in filtered" :key="item.id"
          style="padding:9px 14px;font-size:13px;border-bottom:0.5px solid var(--fu-border,#eee);cursor:pointer;transition:background 0.1s;"
          onmouseover="this.style.background='var(--fu-hover-bg,#f5f5f5)'"
          onmouseout="this.style.background=''"
        >{{ item.label }}</div>

        <template #footer>
          <div style="padding:7px 14px;font-size:12px;color:var(--fu-label-text,#888);display:flex;justify-content:space-between;">
            <span>{{ filtered.length }} items</span>
            <span>footer is pinned ↑</span>
          </div>
        </template>
      </FuPopover>
    `}),parameters:{docs:{description:{story:"`stickyHeader` and `stickyFooter` both `true` — filter tabs stay at the top, count stays at the bottom, only the list scrolls between them."}}}},m={render:()=>({components:{FuPopover:s,FuButton:l},setup(){return{items:Array.from({length:25},(r,n)=>`Item ${n+1}`)}},template:`
      <FuPopover width="260px" maxHeight="220px" :stickyHeader="false" :stickyFooter="false">
        <template #trigger>
          <FuButton>Sticky off</FuButton>
        </template>

        <template #header>
          <div style="padding:10px 14px;font-weight:600;font-size:13px;border-bottom:0.5px solid var(--fu-border,#eee);">
            Scrolls away ↓
          </div>
        </template>

        <div
          v-for="item in items" :key="item"
          style="padding:9px 14px;font-size:13px;border-bottom:0.5px solid var(--fu-border,#eee);"
        >{{ item }}</div>

        <template #footer>
          <div style="padding:10px 14px;font-size:12px;color:var(--fu-label-text,#888);border-top:0.5px solid var(--fu-border,#eee);">
            Scrolls away ↑
          </div>
        </template>
      </FuPopover>
    `}),parameters:{docs:{description:{story:"`stickyHeader` and `stickyFooter` both `false` — header and footer scroll away with the content. Everything moves together as one block."}}}},h=[{id:"frequent",label:"Frequently Used",icon:"🕐",emojis:["👍","😀","😘","😍","😆","🤣","😅","😂","😱","❤️","🔥","✅","🎉","👀","🚀","💡"]},{id:"people",label:"Smiles & People",icon:"😀",emojis:["😃","😄","😁","😆","😅","🤣","😂","🙂","🙃","😉","😊","😇","🥰","😍","🤩","😘","😗","😚","😙","🥲","😋","😛","😜","🤪","😝","🤑","🤗","🤭","🤫","🤔","🤐","🤨","😐","😑","😶","😏","😒","🙄","😬","🤥","😌","😔","😪","🤤","😴","😷","🤒","🤕","🤢"]},{id:"nature",label:"Animals & Nature",icon:"🐶",emojis:["🐶","🐱","🐭","🐹","🐰","🦊","🐻","🐼","🐨","🐯","🦁","🐮","🐷","🐸","🐵","🙈","🙉","🙊","🐔","🐧","🐦","🐤","🦆","🦅","🦉","🦋","🐌","🐛","🦗","🐜","🌸","🌿","🌱","🌲","🌴","🌵","🌾","🍄"]},{id:"foods",label:"Food & Drink",icon:"🍎",emojis:["🍎","🍊","🍋","🍇","🍓","🫐","🍒","🍑","🥭","🍍","🥥","🥝","🍅","🍆","🥑","🌽","🍕","🍔","🌮","🍜","🍣","🍦","🍰","🎂","🍩","🍪","☕","🧃","🍺","🥂","🧁","🍫","🍿","🥐","🥨","🥞","🧇","🥓","🌭","🥪"]},{id:"activity",label:"Activity",icon:"⚽",emojis:["⚽","🏀","🏈","⚾","🎾","🏐","🏉","🎱","🏓","🏸","🥊","🥋","🎽","🛹","🛷","⛸","🏹","🎣","🤿","🏄","🚵","🧗","🤸","🏋️","🤼","🤺","🏇","🎯","🎮","🎲","🎸","🎹","🎻","🎺","🥁","🎤"]},{id:"places",label:"Travel & Places",icon:"✈️",emojis:["🚗","🚕","🚙","🚌","🏎","🚓","🚑","✈️","🚀","🛸","⛵","🚢","🏠","🏢","🏰","🗼","🗽","⛪","🌋","🏝","🏔","🌅","🌄","🌠","🎆","🎇","🌈","⛅","🌩","❄️"]},{id:"objects",label:"Objects",icon:"💡",emojis:["⌚","📱","💻","⌨️","🖥","💾","📷","📹","🎥","📞","📺","📻","🔋","💡","🔦","🕯","🔑","🔒","🔨","⚒","🛠","⚙️","🔧","🔩","🧲","💊","🩺","🔬","🔭","📚"]},{id:"symbols",label:"Symbols",icon:"❤️",emojis:["❤️","🧡","💛","💚","💙","💜","🖤","🤍","🤎","💔","❣️","💕","💞","💓","💗","💖","💘","💝","✅","❌","⭕","🔴","🟡","🟢","🔵","🟣","⚫","⚪","🏁","🚩"]},{id:"flags",label:"Flags",icon:"🏁",emojis:["🏁","🚩","🎌","🏴","🏳️","🏳️‍🌈","🇺🇳","🇦🇺","🇬🇧","🇺🇸","🇨🇦","🇫🇷","🇩🇪","🇯🇵","🇨🇳","🇮🇳","🇧🇷","🇿🇦","🇳🇬","🇰🇷","🇲🇽","🇮🇹","🇪🇸","🇷🇺","🇸🇦","🇦🇪","🇬🇭","🇳🇴"]}],H=["#FFCA28","#FDDBB4","#EAC087","#D4915C","#A96335","#5D3A1A"],P=["Default","Light","Medium-Light","Medium","Medium-Dark","Dark"],f={render:()=>({components:{FuPopover:s,FuButton:l,FusionTextInput:B},setup(){const e=o(""),r=o(""),n=o(""),i=o("frequent"),p=o(0),g=o({}),y=o(null),x=o(null),k=b(()=>{if(!n.value)return[];const t=n.value.toLowerCase();return h.flatMap(a=>[...a.emojis]).filter(a=>a.includes(t)).slice(0,54)});function F(){j(()=>{y.value=document.querySelector(".fu-popover__body");const t=x.value?.$el?.querySelector("input");t&&(t.focus(),t.select())})}function w(t){i.value=t;const a=g.value[t];a&&y.value&&(y.value.scrollTop=a.offsetTop-4)}function S(t){e.value=t,r.value=""}return{selected:e,hovered:r,search:n,activeCat:i,skinToneIdx:p,catRefs:g,searchInputRef:x,searchResults:k,skinColors:H,skinLabels:P,cats:h,onOpen:F,scrollTo:w,pick:S}},template:`
      <div style="display:flex;flex-direction:column;align-items:center;gap:16px;">

        <FuPopover
          width="350px"
          maxHeight="260px"
          :stickyHeader="true"
          :stickyFooter="true"
          align="left"
          @open="onOpen"
        >
          <template #trigger>
            <FuButton>{{ selected || '😊  Pick emoji' }}</FuButton>
          </template>

          <template #header>
            <div style="padding:8px 8px 0;">
              <FusionTextInput
                ref="searchInputRef"
                v-model="search"
                placeholder="Search..."
                size="sm"
                formWrapperWidth="100%"
              />
            </div>
            <div style="display:flex;align-items:center;gap:1px;padding:4px 8px 5px;overflow-x:auto;scrollbar-width:none;">
              <button
                v-for="cat in cats" :key="cat.id"
                @click="scrollTo(cat.id)"
                :title="cat.label"
                :style="{
                  display:'flex', alignItems:'center', justifyContent:'center',
                  width:'30px', height:'30px', border:'none', borderRadius:'6px',
                  background: activeCat === cat.id ? 'var(--fu-hover-bg,#f3f4f6)' : 'transparent',
                  fontSize:'18px', cursor:'pointer',
                  opacity: activeCat === cat.id ? '1' : '0.45',
                  flexShrink:'0', transition:'opacity 0.1s, background 0.1s',
                }"
              >{{ cat.icon }}</button>
            </div>
          </template>

          <div style="padding:8px;">
            <template v-if="search">
              <div style="font-size:11px;font-weight:600;color:#999;text-transform:uppercase;letter-spacing:.05em;padding:4px 2px 6px;">Results</div>
              <div v-if="searchResults.length" style="display:grid;grid-template-columns:repeat(9,1fr);gap:1px;">
                <button
                  v-for="emoji in searchResults" :key="emoji"
                  @click="pick(emoji)" @mouseenter="hovered = emoji" @mouseleave="hovered = ''"
                  style="display:flex;align-items:center;justify-content:center;width:34px;height:34px;font-size:22px;border:none;background:transparent;border-radius:6px;cursor:pointer;"
                  onmouseover="this.style.background='var(--fu-hover-bg,#f3f4f6)'"
                  onmouseout="this.style.background='transparent'"
                >{{ emoji }}</button>
              </div>
              <div v-else style="padding:20px 0;text-align:center;font-size:13px;color:#999;">No emoji found</div>
            </template>

            <template v-else>
              <template v-for="cat in cats" :key="cat.id">
                <div
                  :ref="el => { if (el) catRefs[cat.id] = el }"
                  style="font-size:11px;font-weight:600;color:#999;text-transform:uppercase;letter-spacing:.05em;padding:6px 2px 4px;"
                >{{ cat.label }}</div>
                <div style="display:grid;grid-template-columns:repeat(9,1fr);gap:1px;margin-bottom:6px;">
                  <button
                    v-for="emoji in cat.emojis" :key="emoji"
                    @click="pick(emoji)" @mouseenter="hovered = emoji" @mouseleave="hovered = ''"
                    style="display:flex;align-items:center;justify-content:center;width:34px;height:34px;font-size:22px;border:none;background:transparent;border-radius:6px;cursor:pointer;"
                    onmouseover="this.style.background='var(--fu-hover-bg,#f3f4f6)'"
                    onmouseout="this.style.background='transparent'"
                  >{{ emoji }}</button>
                </div>
              </template>
            </template>
          </div>

          <template #footer>
            <div style="display:flex;align-items:center;gap:10px;padding:6px 10px;">
              <div style="display:flex;align-items:center;gap:4px;flex-shrink:0;">
                <button
                  v-for="(color, i) in skinColors" :key="i"
                  :title="skinLabels[i]"
                  @click="skinToneIdx = i"
                  :style="{
                    width: skinToneIdx === i ? '20px' : '15px',
                    height: skinToneIdx === i ? '20px' : '15px',
                    borderRadius:'50%', background: color, cursor:'pointer', flexShrink:'0',
                    border: skinToneIdx === i ? '2px solid var(--fu-primary,#4f8ef7)' : '1.5px solid rgba(0,0,0,0.12)',
                    transition:'all 0.15s',
                  }"
                />
              </div>
              <div style="flex:1;display:flex;align-items:center;gap:6px;min-width:0;overflow:hidden;">
                <span v-if="hovered || selected" style="font-size:22px;line-height:1;flex-shrink:0;">{{ hovered || selected }}</span>
                <span style="font-size:12px;color:#999;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;">
                  {{ hovered ? ':emoji:' : selected ? ':selected:' : 'Hover to preview' }}
                </span>
              </div>
            </div>
          </template>

        </FuPopover>

        <p v-if="selected" style="font-size:36px;margin:0;">{{ selected }}</p>
      </div>
    `}),parameters:{docs:{description:{story:"\nFull Slack-style emoji picker using `stickyHeader` and `stickyFooter`:\n\n- **`#header`** with `stickyHeader=true` — search input + category tabs always visible at top\n- **body** — emoji grid scrolls, `maxHeight` set on the popover, no overflow on content\n- **`#footer`** with `stickyFooter=true` — skin tones + hover preview always visible at bottom\n\nScroll through emoji categories to see header and footer stay pinned.\n        "}}}},v={render:()=>({components:{FuPopover:s,FuButton:l},setup(){return{popover:o(null)}},template:`
      <div style="display:flex;gap:8px;align-items:center;">
        <FuPopover ref="popover" width="200px">
          <template #trigger>
            <FuButton>Trigger</FuButton>
          </template>
          <div style="padding:16px;font-size:13px;">Controlled externally via ref.</div>
        </FuPopover>
        <FuButton @click="popover?.open()">Open</FuButton>
        <FuButton @click="popover?.close()">Close</FuButton>
      </div>
    `}),parameters:{docs:{description:{story:"Use a template ref to call `open()` and `close()` programmatically from a parent."}}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: args => ({
    components: {
      FuPopover,
      FuButton
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <FuPopover v-bind="args">
        <template #trigger>
          <FuButton>Open</FuButton>
        </template>
        <div style="padding:16px;font-size:13px;">
          Simple popover — no header, no footer, body grows to fit content.
        </div>
      </FuPopover>
    \`
  }),
  args: {
    width: "220px"
  },
  parameters: {
    docs: {
      description: {
        story: "Minimal usage — trigger + body only. No \`maxHeight\` so body expands to fit."
      }
    }
  }
}`,...d.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: args => ({
    components: {
      FuPopover,
      FuButton
    },
    setup() {
      const items = Array.from({
        length: 30
      }, (_, i) => \`Item \${i + 1}\`);
      return {
        args,
        items
      };
    },
    template: \`
      <FuPopover v-bind="args">
        <template #trigger>
          <FuButton>30 items</FuButton>
        </template>
        <div
          v-for="item in items"
          :key="item"
          style="padding:8px 14px;font-size:13px;border-bottom:0.5px solid var(--fu-border,#eee);cursor:pointer;transition:background 0.1s;"
          onmouseover="this.style.background='var(--fu-hover-bg,#f5f5f5)'"
          onmouseout="this.style.background=''"
        >{{ item }}</div>
      </FuPopover>
    \`
  }),
  args: {
    width: "240px",
    maxHeight: "240px"
  },
  parameters: {
    docs: {
      description: {
        story: "Set \`maxHeight\` on \`<FuPopover>\` — the body scrolls automatically. No \`overflow\` or \`max-height\` on the content itself."
      }
    }
  }
}`,...c.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      FuPopover,
      FuButton
    },
    setup() {
      const filter = ref("all");
      const items = Array.from({
        length: 25
      }, (_, i) => ({
        id: i + 1,
        label: \`Item \${i + 1}\`,
        type: i % 2 === 0 ? "even" : "odd"
      }));
      const filtered = computed(() => filter.value === "all" ? items : items.filter(it => it.type === filter.value));
      return {
        filter,
        filtered
      };
    },
    template: \`
      <FuPopover width="260px" maxHeight="260px" :stickyHeader="true" :stickyFooter="true">
        <template #trigger>
          <FuButton>Sticky on</FuButton>
        </template>

        <template #header>
          <div style="padding:8px;display:flex;gap:4px;">
            <button
              v-for="f in ['all','even','odd']" :key="f"
              @click="filter = f"
              :style="{
                padding:'4px 12px', borderRadius:'6px', cursor:'pointer', fontSize:'12px', fontWeight:'500',
                border:'0.5px solid var(--fu-border,#e5e7eb)', transition:'all 0.15s',
                background: filter === f ? 'var(--fu-primary,#4f8ef7)' : 'transparent',
                color: filter === f ? '#fff' : 'inherit',
              }"
            >{{ f }}</button>
          </div>
        </template>

        <div
          v-for="item in filtered" :key="item.id"
          style="padding:9px 14px;font-size:13px;border-bottom:0.5px solid var(--fu-border,#eee);cursor:pointer;transition:background 0.1s;"
          onmouseover="this.style.background='var(--fu-hover-bg,#f5f5f5)'"
          onmouseout="this.style.background=''"
        >{{ item.label }}</div>

        <template #footer>
          <div style="padding:7px 14px;font-size:12px;color:var(--fu-label-text,#888);display:flex;justify-content:space-between;">
            <span>{{ filtered.length }} items</span>
            <span>footer is pinned ↑</span>
          </div>
        </template>
      </FuPopover>
    \`
  }),
  parameters: {
    docs: {
      description: {
        story: "\`stickyHeader\` and \`stickyFooter\` both \`true\` — filter tabs stay at the top, count stays at the bottom, only the list scrolls between them."
      }
    }
  }
}`,...u.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      FuPopover,
      FuButton
    },
    setup() {
      const items = Array.from({
        length: 25
      }, (_, i) => \`Item \${i + 1}\`);
      return {
        items
      };
    },
    template: \`
      <FuPopover width="260px" maxHeight="220px" :stickyHeader="false" :stickyFooter="false">
        <template #trigger>
          <FuButton>Sticky off</FuButton>
        </template>

        <template #header>
          <div style="padding:10px 14px;font-weight:600;font-size:13px;border-bottom:0.5px solid var(--fu-border,#eee);">
            Scrolls away ↓
          </div>
        </template>

        <div
          v-for="item in items" :key="item"
          style="padding:9px 14px;font-size:13px;border-bottom:0.5px solid var(--fu-border,#eee);"
        >{{ item }}</div>

        <template #footer>
          <div style="padding:10px 14px;font-size:12px;color:var(--fu-label-text,#888);border-top:0.5px solid var(--fu-border,#eee);">
            Scrolls away ↑
          </div>
        </template>
      </FuPopover>
    \`
  }),
  parameters: {
    docs: {
      description: {
        story: "\`stickyHeader\` and \`stickyFooter\` both \`false\` — header and footer scroll away with the content. Everything moves together as one block."
      }
    }
  }
}`,...m.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: () => ({
    //Add FusionTextInput to components list
    components: {
      FuPopover,
      FuButton,
      FusionTextInput
    },
    setup() {
      const selected = ref("");
      const hovered = ref("");
      const search = ref("");
      const activeCat = ref("frequent");
      const skinToneIdx = ref(0);

      //FIX 1: properly type refs
      const catRefs = ref<Record<string, HTMLElement | null>>({});
      const bodyRef = ref<HTMLElement | null>(null);

      //Create a ref for the FusionTextInput
      const searchInputRef = ref<any>(null);
      const searchResults = computed(() => {
        if (!search.value) return [];
        const q = search.value.toLowerCase();
        return EMOJI_CATS.flatMap(c => [...c.emojis]).filter(e => e.includes(q)).slice(0, 54);
      });
      function onOpen() {
        nextTick(() => {
          bodyRef.value = document.querySelector(".fu-popover__body") as HTMLElement | null;

          //Focus and select the text input automatically
          const el = searchInputRef.value?.$el?.querySelector("input");
          if (el) {
            el.focus();
            el.select();
          }
        });
      }
      function scrollTo(id: string) {
        activeCat.value = id;
        const el = catRefs.value[id];

        //FIX 2: null-safe + typed HTMLElement
        if (el && bodyRef.value) {
          bodyRef.value.scrollTop = el.offsetTop - 4;
        }
      }
      function pick(emoji: string) {
        selected.value = emoji;
        hovered.value = "";
      }
      return {
        selected,
        hovered,
        search,
        activeCat,
        skinToneIdx,
        catRefs,
        searchInputRef,
        // Expose the ref to the template
        searchResults,
        skinColors: SKIN_COLORS,
        skinLabels: SKIN_LABELS,
        cats: EMOJI_CATS,
        onOpen,
        scrollTo,
        pick
      };
    },
    template: \`
      <div style="display:flex;flex-direction:column;align-items:center;gap:16px;">

        <FuPopover
          width="350px"
          maxHeight="260px"
          :stickyHeader="true"
          :stickyFooter="true"
          align="left"
          @open="onOpen"
        >
          <template #trigger>
            <FuButton>{{ selected || '😊  Pick emoji' }}</FuButton>
          </template>

          <template #header>
            <div style="padding:8px 8px 0;">
              <FusionTextInput
                ref="searchInputRef"
                v-model="search"
                placeholder="Search..."
                size="sm"
                formWrapperWidth="100%"
              />
            </div>
            <div style="display:flex;align-items:center;gap:1px;padding:4px 8px 5px;overflow-x:auto;scrollbar-width:none;">
              <button
                v-for="cat in cats" :key="cat.id"
                @click="scrollTo(cat.id)"
                :title="cat.label"
                :style="{
                  display:'flex', alignItems:'center', justifyContent:'center',
                  width:'30px', height:'30px', border:'none', borderRadius:'6px',
                  background: activeCat === cat.id ? 'var(--fu-hover-bg,#f3f4f6)' : 'transparent',
                  fontSize:'18px', cursor:'pointer',
                  opacity: activeCat === cat.id ? '1' : '0.45',
                  flexShrink:'0', transition:'opacity 0.1s, background 0.1s',
                }"
              >{{ cat.icon }}</button>
            </div>
          </template>

          <div style="padding:8px;">
            <template v-if="search">
              <div style="font-size:11px;font-weight:600;color:#999;text-transform:uppercase;letter-spacing:.05em;padding:4px 2px 6px;">Results</div>
              <div v-if="searchResults.length" style="display:grid;grid-template-columns:repeat(9,1fr);gap:1px;">
                <button
                  v-for="emoji in searchResults" :key="emoji"
                  @click="pick(emoji)" @mouseenter="hovered = emoji" @mouseleave="hovered = ''"
                  style="display:flex;align-items:center;justify-content:center;width:34px;height:34px;font-size:22px;border:none;background:transparent;border-radius:6px;cursor:pointer;"
                  onmouseover="this.style.background='var(--fu-hover-bg,#f3f4f6)'"
                  onmouseout="this.style.background='transparent'"
                >{{ emoji }}</button>
              </div>
              <div v-else style="padding:20px 0;text-align:center;font-size:13px;color:#999;">No emoji found</div>
            </template>

            <template v-else>
              <template v-for="cat in cats" :key="cat.id">
                <div
                  :ref="el => { if (el) catRefs[cat.id] = el }"
                  style="font-size:11px;font-weight:600;color:#999;text-transform:uppercase;letter-spacing:.05em;padding:6px 2px 4px;"
                >{{ cat.label }}</div>
                <div style="display:grid;grid-template-columns:repeat(9,1fr);gap:1px;margin-bottom:6px;">
                  <button
                    v-for="emoji in cat.emojis" :key="emoji"
                    @click="pick(emoji)" @mouseenter="hovered = emoji" @mouseleave="hovered = ''"
                    style="display:flex;align-items:center;justify-content:center;width:34px;height:34px;font-size:22px;border:none;background:transparent;border-radius:6px;cursor:pointer;"
                    onmouseover="this.style.background='var(--fu-hover-bg,#f3f4f6)'"
                    onmouseout="this.style.background='transparent'"
                  >{{ emoji }}</button>
                </div>
              </template>
            </template>
          </div>

          <template #footer>
            <div style="display:flex;align-items:center;gap:10px;padding:6px 10px;">
              <div style="display:flex;align-items:center;gap:4px;flex-shrink:0;">
                <button
                  v-for="(color, i) in skinColors" :key="i"
                  :title="skinLabels[i]"
                  @click="skinToneIdx = i"
                  :style="{
                    width: skinToneIdx === i ? '20px' : '15px',
                    height: skinToneIdx === i ? '20px' : '15px',
                    borderRadius:'50%', background: color, cursor:'pointer', flexShrink:'0',
                    border: skinToneIdx === i ? '2px solid var(--fu-primary,#4f8ef7)' : '1.5px solid rgba(0,0,0,0.12)',
                    transition:'all 0.15s',
                  }"
                />
              </div>
              <div style="flex:1;display:flex;align-items:center;gap:6px;min-width:0;overflow:hidden;">
                <span v-if="hovered || selected" style="font-size:22px;line-height:1;flex-shrink:0;">{{ hovered || selected }}</span>
                <span style="font-size:12px;color:#999;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;">
                  {{ hovered ? ':emoji:' : selected ? ':selected:' : 'Hover to preview' }}
                </span>
              </div>
            </div>
          </template>

        </FuPopover>

        <p v-if="selected" style="font-size:36px;margin:0;">{{ selected }}</p>
      </div>
    \`
  }),
  parameters: {
    docs: {
      description: {
        story: \`
Full Slack-style emoji picker using \\\`stickyHeader\\\` and \\\`stickyFooter\\\`:

- **\\\`#header\\\`** with \\\`stickyHeader=true\\\` — search input + category tabs always visible at top
- **body** — emoji grid scrolls, \\\`maxHeight\\\` set on the popover, no overflow on content
- **\\\`#footer\\\`** with \\\`stickyFooter=true\\\` — skin tones + hover preview always visible at bottom

Scroll through emoji categories to see header and footer stay pinned.
        \`
      }
    }
  }
}`,...f.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      FuPopover,
      FuButton
    },
    setup() {
      const popover = ref(null);
      return {
        popover
      };
    },
    template: \`
      <div style="display:flex;gap:8px;align-items:center;">
        <FuPopover ref="popover" width="200px">
          <template #trigger>
            <FuButton>Trigger</FuButton>
          </template>
          <div style="padding:16px;font-size:13px;">Controlled externally via ref.</div>
        </FuPopover>
        <FuButton @click="popover?.open()">Open</FuButton>
        <FuButton @click="popover?.close()">Close</FuButton>
      </div>
    \`
  }),
  parameters: {
    docs: {
      description: {
        story: "Use a template ref to call \`open()\` and \`close()\` programmatically from a parent."
      }
    }
  }
}`,...v.parameters?.docs?.source}}};const A=["Default","BodyScrolls","StickyHeaderFooter","NonStickyHeaderFooter","EmojiPicker","ProgrammaticControl"];export{c as BodyScrolls,d as Default,f as EmojiPicker,m as NonStickyHeaderFooter,v as ProgrammaticControl,u as StickyHeaderFooter,A as __namedExportsOrder,_ as default};
