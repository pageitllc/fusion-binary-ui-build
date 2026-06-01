import t from"./TextRenderer-CqsEajVX.js";import"./iframe-BWX2pLPr.js";import"./preload-helper-Ct5FWWRu.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const m={title:"Renderer/TextRenderer",component:t,parameters:{layout:"padded"}},o=`
<p style="text-align:center"><span style="color:#ffffff;font-family:Arial,sans-serif;font-size:68px;line-height:1.05;"><strong>CLIENT</strong></span></p><p style="text-align:center"><span style="color:#ffffff;font-family:Oswald,sans-serif;font-size:68px;line-height:1.05;"><strong>ONBOARDING</strong></span></p><p style="text-align:center"><span style="font-family:Oswald,sans-serif;font-size:68px;line-height:1.05;"><strong><mark data-color="#16a34a" style="background-color:#16a34a;color:#ffffff;padding:2px 12px;">CALL</mark></strong></span></p>

`,p=`
<p style="color:#52525b;font-family:Arial,sans-serif;font-size:16px;line-height:1.7;">
  This is a focused onboarding session where we align goals, confirm access,
  and introduce your delivery team. Everything is structured to get you live fast.
</p>
`,i=`
<h2 style="font-size:28px;color:#111827;font-family:Arial;">
  What to expect
</h2>

<p style="color:#6b7280;font-size:15px;line-height:1.6;">
  We’ll walk through your setup step-by-step.
</p>

<p style="text-align:center">
  <span style="color:#16a34a;font-weight:600;">
    45 min · Zoom · Free
  </span>
</p>
`,e={name:"Hero (Large TipTap Output)",args:{content:o}},r={name:"Paragraph Block",args:{content:p}},n={name:"Mixed Typography",args:{content:i}},a={render:s=>({components:{TextRenderer:t},setup(){return{args:s}},template:`
      <div style="background:#0a0a0a;padding:60px;border-radius:12px;">
        <TextRenderer v-bind="args" />
      </div>
    `}),args:{content:o}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  name: "Hero (Large TipTap Output)",
  args: {
    content: heroHtml
  }
}`,...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  name: "Paragraph Block",
  args: {
    content: paragraphHtml
  }
}`,...r.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  name: "Mixed Typography",
  args: {
    content: mixedHtml
  }
}`,...n.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: args => ({
    components: {
      TextRenderer
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <div style="background:#0a0a0a;padding:60px;border-radius:12px;">
        <TextRenderer v-bind="args" />
      </div>
    \`
  }),
  args: {
    content: heroHtml
  }
}`,...a.parameters?.docs?.source}}};const f=["HeroText","Paragraph","MixedContent","OnDarkBackground"];export{e as HeroText,n as MixedContent,a as OnDarkBackground,r as Paragraph,f as __namedExportsOrder,m as default};
