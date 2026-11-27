import{r as n}from"./iframe-DLJy-DHW.js";import{F as i}from"./FusionPickerPopover-DtGvTBws.js";import{F as a}from"./FusionButton-CSaeGhtG.js";import{A as r}from"./archive-B-OnDCl_.js";import{c as s}from"./createLucideIcon-CURt8gZv.js";import{C as d}from"./calendar-days-4ccAMA9d.js";import{T as l}from"./target-D9R5dV8n.js";import{L as c}from"./list-checks-CN3bWWAo.js";import{P as p}from"./paperclip-D_82-YPg.js";import"./preload-helper-Ct5FWWRu.js";import"./FuPopover-CNNK0jy6.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";/**
 * @license @lucide/vue v1.54.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const m={name:"layers",size:24,node:[["path",{d:"M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z",key:"zw3jo"}],["path",{d:"M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12",key:"1wduqc"}],["path",{d:"M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17",key:"kqbvx6"}]],aliases:["layers-3"]},h=s(m),T={title:"Fusion/Overlays/FusionPickerPopover",component:i,tags:["autodocs"],parameters:{docs:{description:{component:'\nA wide popover with a **list on the left** and a **preview on the right**. Pointing at an item shows what it is\n(a picture, a title and a short description), and the button under it acts on that item.\n\n- Put any trigger in the `trigger` slot (an icon button, a text button).\n- `items`: `{ key, label, icon?, title?, description?, image?, disabled? }`. Without an `image`, the icon is shown large on a soft panel.\n- Listen to `action` for the button, and `select` when another item is picked. Up and down move through the list.\n- `height` fixes the popover\'s height (default 21rem), so it does not change size as you move down the list. The list and preview scroll inside it.\n- `actionLabel` names the button (for example "Add to navigation"). `closeOnAction` closes the popover after it.\n- The `preview` slot replaces the picture, and receives `{ item }`.\n- Used by **FusionTab** for the + that adds tabs.\n'}}}},u=[{key:"archived",label:"Archived work items",icon:r,description:"View all the work items archived in your space here."},{key:"backlog",label:"Backlog",icon:h,description:"Plan and rank work that is not scheduled yet."},{key:"calendar",label:"Calendar",icon:d,description:"See work items on a calendar by their due date."},{key:"goals",label:"Goals",icon:l,description:"Track what the team is aiming for."},{key:"list",label:"List",icon:c,description:"Every work item in one list, with filters."},{key:"files",label:"Attachments",icon:p,description:"Every file attached to a work item."}],e={name:"Add to navigation",render:()=>({components:{FusionPickerPopover:i,FusionButton:a},setup(){const t=n([]);return{added:t,left:()=>u.filter(o=>!t.value.includes(String(o.key)))}},template:`
<div style="padding:24px;min-height:420px">
  <p style="margin:0 0 12px;font-size:14px">Added: {{ added.join(", ") || "nothing yet" }}</p>
  <FusionPickerPopover :items="left()" heading="Views" actionLabel="Add to navigation" @action="(i) => added.push(String(i.key))">
    <template #trigger><FusionButton text="Add a view" variant="outline" size="sm" /></template>
  </FusionPickerPopover>
</div>`})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  name: "Add to navigation",
  render: () => ({
    components: {
      FusionPickerPopover,
      FusionButton
    },
    setup() {
      const added = ref<string[]>([]);
      const left = () => items.filter(i => !added.value.includes(String(i.key)));
      return {
        added,
        left
      };
    },
    template: \`
<div style="padding:24px;min-height:420px">
  <p style="margin:0 0 12px;font-size:14px">Added: {{ added.join(", ") || "nothing yet" }}</p>
  <FusionPickerPopover :items="left()" heading="Views" actionLabel="Add to navigation" @action="(i) => added.push(String(i.key))">
    <template #trigger><FusionButton text="Add a view" variant="outline" size="sm" /></template>
  </FusionPickerPopover>
</div>\`
  })
}`,...e.parameters?.docs?.source}}};const S=["AddToNavigation"];export{e as AddToNavigation,S as __namedExportsOrder,T as default};
