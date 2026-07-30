import{r as c}from"./iframe-D33anl-W.js";import{F as i}from"./FusionTextArea-DZ-pp9nU.js";import"./preload-helper-Ct5FWWRu.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const b={title:"Components/TextArea",component:i,tags:["autodocs"],argTypes:{size:{control:"select",options:["sm","md","lg"]},label:{control:"text"},placeholder:{control:"text"},error:{control:"text"},rows:{control:"number"},required:{control:"boolean"},readonly:{control:"boolean"},variant:{control:"select",options:["subtle","outline","plain","typeform"]}}},e={args:{label:"Message",placeholder:"Type your message...",variant:"outline"}},r={args:{label:"Message",placeholder:"Type your message...",variant:"subtle"}},n={args:{label:"Message",placeholder:"Type your message...",variant:"plain"}},a={args:{label:"Comment",placeholder:"Enter comment",error:"Required field"}},o={args:{label:"Feedback",size:"lg",rows:5}},s={args:{label:"Description",placeholder:"Enter description",variant:"subtle",required:!0}},t={render:()=>({components:{FusionTextArea:i},setup(){return{answer:c("")}},template:`
      <FusionTextArea
        v-model="answer"
        placeholder="Type your answer here..."
        variant="typeform"
        label="Styled and passed in from the editor"
        font="'Poppins', sans-serif"
        color="#183028"
      />
      <p class="mt-2">Value: {{ answer }}</p>
    `})},l={render:()=>({components:{FusionTextArea:i},setup(){const m=c(""),u=c("");return{a:m,b:u}},template:`
      <div style="display: flex; flex-direction: column; gap: 24px; max-width: 400px;">
        <FusionTextArea
          v-model="a"
          placeholder="Default typeform..."
          variant="typeform"
          size="lg"
        />
        <FusionTextArea
          v-model="b"
          placeholder="Custom font + color + font size 20px..."
          variant="typeform"
          size="lg"
          fontSize="20px"
          font="'Georgia', serif"
          color="#a6423a"
        />
      </div>
    `})},p={render:()=>({components:{FusionTextArea:i},setup(){return{value:c("You can see this but not edit it")}},template:`
      <FusionTextArea
        v-model="typeform"
        label="Read Only Field"
        variant="outline"
        readonly
      />
      <p class="mt-2">Value: {{ value }}</p>
    `})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Message",
    placeholder: "Type your message...",
    variant: "outline"
  }
}`,...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Message",
    placeholder: "Type your message...",
    variant: "subtle"
  }
}`,...r.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Message",
    placeholder: "Type your message...",
    variant: "plain"
  }
}`,...n.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Comment",
    placeholder: "Enter comment",
    error: "Required field"
  }
}`,...a.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Feedback",
    size: "lg",
    rows: 5
  }
}`,...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Description",
    placeholder: "Enter description",
    variant: "subtle",
    required: true
  }
}`,...s.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      FusionTextArea
    },
    setup() {
      const answer = ref("");
      return {
        answer
      };
    },
    template: \`
      <FusionTextArea
        v-model="answer"
        placeholder="Type your answer here..."
        variant="typeform"
        label="Styled and passed in from the editor"
        font="'Poppins', sans-serif"
        color="#183028"
      />
      <p class="mt-2">Value: {{ answer }}</p>
    \`
  })
}`,...t.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      FusionTextArea
    },
    setup() {
      const a = ref("");
      const b = ref("");
      return {
        a,
        b
      };
    },
    template: \`
      <div style="display: flex; flex-direction: column; gap: 24px; max-width: 400px;">
        <FusionTextArea
          v-model="a"
          placeholder="Default typeform..."
          variant="typeform"
          size="lg"
        />
        <FusionTextArea
          v-model="b"
          placeholder="Custom font + color + font size 20px..."
          variant="typeform"
          size="lg"
          fontSize="20px"
          font="'Georgia', serif"
          color="#a6423a"
        />
      </div>
    \`
  })
}`,...l.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      FusionTextArea
    },
    setup() {
      const value = ref("You can see this but not edit it");
      return {
        value
      };
    },
    template: \`
      <FusionTextArea
        v-model="typeform"
        label="Read Only Field"
        variant="outline"
        readonly
      />
      <p class="mt-2">Value: {{ value }}</p>
    \`
  })
}`,...p.parameters?.docs?.source}}};const v=["Outline","Subtle","PlainVariant","WithError","Large","Required","TypeformVariant","TypeformCustomStyle","ReadOnly"];export{o as Large,e as Outline,n as PlainVariant,p as ReadOnly,s as Required,r as Subtle,l as TypeformCustomStyle,t as TypeformVariant,a as WithError,v as __namedExportsOrder,b as default};
