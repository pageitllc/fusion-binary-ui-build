import{q as E,c as P,r as v,b as o,F as _,g as L,A as J,i as f,m as U,o as r,d as l,p as N,f as D,u as $,t as b,e as z,s as j,S as K,j as H,l as B,B as Y,G as Z}from"./iframe-Bit2fKoK.js";import{D as Q}from"./DropdownMenu-6zTm6FVK.js";import{C as X}from"./check-DzxBtvcd.js";import{S as ee}from"./search-DoDZfJli.js";import{C as ae}from"./chevron-down-BVqdWp0k.js";import{_ as te}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./preload-helper-Ct5FWWRu.js";import"./createLucideIcon-xyDXa4T9.js";const ne=["disabled","aria-pressed","aria-label","onClick","onDblclick"],se={class:"fu-framegrid__thumb"},re=["src","alt"],ie={key:1,class:"fu-framegrid__placeholder","aria-hidden":"true"},oe={key:0,class:"fu-framegrid__check","aria-hidden":"true"},de={class:"fu-framegrid__meta"},le={class:"fu-framegrid__name"},ce={key:0,class:"fu-framegrid__kind"},me=["tabindex","aria-label"],ue={key:0,class:"fu-framegrid__badge-list",role:"tooltip"},he=["placeholder","aria-label"],pe={key:0,class:"fu-framegrid__search-empty"},ge={class:"fu-framegrid__attach",role:"button",tabindex:"0"},fe={key:0,class:"fu-framegrid__empty"},W=E({__name:"FusionFrameGrid",props:{items:{},selectedIds:{default:()=>[]},attachTargets:{default:()=>[]},attachedTo:{default:()=>({})},columns:{default:4},selectable:{type:Boolean,default:!0},loading:{type:Boolean,default:!1},attachLabel:{default:"Attach to"},attachSearch:{type:[Boolean,String],default:"auto"},attachSearchPlaceholder:{default:"Search tasks"},emptyText:{default:"No frames yet. Pull a file to see them here."}},emits:["update:selectedIds","attach","open"],setup(a,{emit:s}){const n=a,m=s,i=P(()=>new Set(n.selectedIds));function h(d){if(d.disabled||!n.selectable)return;const t=new Set(n.selectedIds);t.has(d.id)?t.delete(d.id):t.add(d.id),m("update:selectedIds",[...t])}const u=v(""),p=P(()=>n.attachSearch==="auto"?n.attachTargets.length>5:n.attachSearch),V=P(()=>{const d=u.value.trim().toLowerCase();if(!d)return n.attachTargets;const t=new Set;return n.attachTargets.forEach((e,c)=>{if(!e.label.toLowerCase().includes(d))return;t.add(c);let C=e.level??0;for(let I=c-1;I>=0&&C>0;I--){const q=n.attachTargets[I].level??0;q<C&&(t.add(I),C=q)}}),n.attachTargets.filter((e,c)=>t.has(c))});function R(d){const t=n.attachedTo[d.id]??[];return V.value.map(e=>({label:`${"   ".repeat(e.level??0)}${e.level?"└ ":""}${e.label}`,icon:e.icon,selected:t.includes(e.id),onClick:()=>m("attach",{itemId:d.id,targetId:e.id,attached:!t.includes(e.id)})}))}return(d,t)=>(r(),o("div",{class:"fu-framegrid",style:U({"--fu-fg-cols":a.columns})},[a.loading?(r(!0),o(_,{key:0},L(a.columns*2,e=>(r(),o("div",{key:e,class:"fu-framegrid__card is-skeleton"},[...t[4]||(t[4]=[l("div",{class:"fu-framegrid__thumb"},null,-1),l("div",{class:"fu-framegrid__line"},null,-1),l("div",{class:"fu-framegrid__line fu-framegrid__line--short"},null,-1)])]))),128)):(r(),o(_,{key:1},[(r(!0),o(_,null,L(a.items,e=>(r(),o("div",{key:e.id,class:N(["fu-framegrid__card",{"is-selected":i.value.has(e.id),"is-disabled":e.disabled}])},[l("button",{type:"button",class:"fu-framegrid__pick",disabled:e.disabled||!a.selectable,"aria-pressed":i.value.has(e.id),"aria-label":`${i.value.has(e.id)?"Untick":"Tick"} ${e.name}`,onClick:c=>h(e),onDblclick:c=>m("open",e)},[l("span",se,[J(d.$slots,"thumb",{item:e},()=>[e.thumbnail?(r(),o("img",{key:0,src:e.thumbnail,alt:e.name,loading:"lazy"},null,8,re)):(r(),o("span",ie,[...t[5]||(t[5]=[l("span",{class:"fu-framegrid__ph-bar"},null,-1),l("span",{class:"fu-framegrid__ph-line"},null,-1),l("span",{class:"fu-framegrid__ph-block"},null,-1)])]))],!0),a.selectable?(r(),o("span",oe,[D($(X),{size:14,"stroke-width":3})])):f("",!0)]),l("span",de,[l("b",le,b(e.name),1),e.kind?(r(),o("span",ce,b(e.kind),1)):f("",!0)])],40,ne),e.badge?(r(),o("span",{key:0,class:N(["fu-framegrid__badge",[`is-${e.badgeTone||"success"}`,{"has-list":e.badgeList?.length}]]),tabindex:e.badgeList?.length?0:void 0,"aria-label":e.badgeList?.length?`${e.badge}: ${e.badgeList.join(", ")}`:void 0},[z(b(e.badge)+" ",1),e.badgeList?.length?(r(),o("span",ue,[(r(!0),o(_,null,L(e.badgeList,c=>(r(),o("span",{key:c},b(c),1))),128))])):f("",!0)],10,me)):f("",!0),a.attachTargets.length&&!e.disabled?(r(),j(Q,{key:1,class:"fu-framegrid__menu",align:"left",actions:R(e),content:p.value,closeOnSelect:!p.value,onOpen:t[3]||(t[3]=c=>u.value="")},K({trigger:H(()=>[l("span",ge,[z(b(a.attachLabel)+" ",1),D($(ae),{size:14})])]),_:2},[p.value?{name:"content",fn:H(()=>[l("label",{class:"fu-framegrid__search",onClick:t[2]||(t[2]=B(()=>{},["stop"]))},[D($(ee),{size:14,"aria-hidden":"true"}),Y(l("input",{"onUpdate:modelValue":t[0]||(t[0]=c=>u.value=c),type:"search",placeholder:a.attachSearchPlaceholder,"aria-label":a.attachSearchPlaceholder,onKeydown:t[1]||(t[1]=B(()=>{},["stop"]))},null,40,he),[[Z,u.value]])]),V.value.length?f("",!0):(r(),o("p",pe,"Nothing matches"))]),key:"0"}:void 0]),1032,["actions","content","closeOnSelect"])):f("",!0)],2))),128)),a.items.length?f("",!0):(r(),o("p",fe,[J(d.$slots,"empty",{},()=>[z(b(a.emptyText),1)],!0)]))],64))],4))}}),k=te(W,[["__scopeId","data-v-b4e3110e"]]);W.__docgenInfo={exportName:"default",displayName:"FusionFrameGrid",description:"",tags:{},props:[{name:"items",required:!0,type:{name:"Array",elements:[{name:"FrameItem"}]}},{name:"selectedIds",description:"Ticked ids (v-model:selectedIds).",required:!1,type:{name:"Array",elements:[{name:"TSParenthesizedType"}]},defaultValue:{func:!1,value:"() => []"}},{name:"attachTargets",description:'Where a frame can be attached. Shows the "Attach to" menu on each card.',required:!1,type:{name:"Array",elements:[{name:"FrameAttachTarget"}]},defaultValue:{func:!1,value:"() => []"}},{name:"attachedTo",description:"Which targets each frame is already attached to, by frame id. Ticks them in the menu.",required:!1,type:{name:"Record",elements:[{name:"union",elements:[{name:"string"},{name:"number"}]},{name:"Array",elements:[{name:"TSParenthesizedType"}]}]},defaultValue:{func:!1,value:"() => ({})"}},{name:"columns",required:!1,type:{name:"number"},defaultValue:{func:!1,value:"4"}},{name:"selectable",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"true"}},{name:"loading",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"attachLabel",required:!1,type:{name:"string"},defaultValue:{func:!1,value:'"Attach to"'}},{name:"attachSearch",description:'Show a search box in the "Attach to" menu. "auto" turns it on when there are more than 5 targets.',required:!1,type:{name:"union",elements:[{name:"boolean"},{name:'"auto"'}]},defaultValue:{func:!1,value:'"auto"'}},{name:"attachSearchPlaceholder",required:!1,type:{name:"string"},defaultValue:{func:!1,value:'"Search tasks"'}},{name:"emptyText",required:!1,type:{name:"string"},defaultValue:{func:!1,value:'"No frames yet. Pull a file to see them here."'}}],events:[{name:"update:selectedIds",type:{names:["Array"],elements:[{name:"TSParenthesizedType"}]}},{name:"attach",type:{names:["{ itemId: string | number; targetId: string | number; attached: boolean }"]},description:"A frame was attached to a target, or taken off it again."},{name:"open",type:{names:["FrameItem"]}}],slots:[{name:"thumb",scoped:!0,bindings:[{name:"item",title:"binding"}]},{name:"empty"}],sourceFiles:["/Users/xavier/Documents/Websites/Skkido/Fusion-binary-ui/src/components/frameGrid/FusionFrameGrid.vue"]};const we={title:"Fusion/Data Display/FusionFrameGrid",component:k,tags:["autodocs"],parameters:{layout:"padded",docs:{description:{component:'\nA grid of pulled frames, photos or files. You tick the ones you want, and attach any of them to a task from the **Attach to** menu on its card. Nothing is tied to a task by name: attaching is always a choice.\n\n- `items`: each has `id`, `name`, optional `kind` (Desktop, Mobile), `thumbnail` URL, `badge` text and `disabled`.\n- `v-model:selectedIds`: the ticked ones.\n- `attachTargets`: where a frame can go (a task and its subtasks, with `level` for the indent). Shows the **Attach to** menu on each card.\n- `attachSearch`: a search box in that menu. `"auto"` (the default) shows it when there are more than 5 targets.\n- `attachedTo`: which targets each frame is already on. Ticks them in the menu.\n- Emits `attach` with `{ itemId, targetId, attached }`. The page updates its own data.\n- Without a `thumbnail` a plain wireframe is drawn. Use the `thumb` slot for anything else.\n- Double-click a card to emit `open`.\n\n```vue\n<FusionFrameGrid\n  :items="frames"\n  v-model:selectedIds="ticked"\n  :attachTargets="[{ id: \'t1\', label: \'This task\' }, { id: \'t2\', label: \'Hero section\', level: 1 }]"\n  :attachedTo="{ f1: [\'t1\'] }"\n  @attach="({ itemId, targetId, attached }) => save(itemId, targetId, attached)"\n/>\n```\n'}}},argTypes:{columns:{control:{type:"number",min:1,max:6}},selectable:{control:"boolean"},loading:{control:"boolean"}}},y=[{id:"d1",name:"Landing page",kind:"Desktop"},{id:"d2",name:"Landing page",kind:"Mobile"},{id:"d3",name:"Header and navigation",kind:"Desktop"},{id:"d4",name:"Hero section",kind:"Desktop"},{id:"d5",name:"Hero section",kind:"Mobile"},{id:"d6",name:"Sign-up form",kind:"Desktop"},{id:"d7",name:"Footer",kind:"Desktop"},{id:"d8",name:"Icons and colours",kind:"Components",disabled:!0,badge:"Components only, nothing to send",badgeTone:"muted"}],O=[{id:"main",label:"This task: Create wireframes for new landing page"},{id:"header",label:"Header and navigation",level:1},{id:"hero",label:"Hero section",level:1},{id:"hero-copy",label:"Headline and copy",level:2},{id:"signup",label:"Sign-up form",level:1}];function g(a,s){const n=`<svg xmlns='http://www.w3.org/2000/svg' width='320' height='200'><defs><linearGradient id='g' x1='0' y1='0' x2='1' y2='1'><stop offset='0' stop-color='hsl(${a},55%,62%)'/><stop offset='1' stop-color='hsl(${a+40},60%,38%)'/></linearGradient></defs><rect width='320' height='200' fill='url(#g)'/><circle cx='240' cy='60' r='26' fill='rgba(255,255,255,.55)'/><path d='M0 200 L90 110 L150 160 L210 100 L320 200Z' fill='rgba(0,0,0,.22)'/><text x='14' y='188' font-family='sans-serif' font-size='14' fill='white'>${s}</text></svg>`;return`data:image/svg+xml;utf8,${encodeURIComponent(n)}`}const G={args:{items:y},render:a=>({components:{FusionFrameGrid:k},setup(){const s=v(["d1","d2"]);return{args:a,selected:s}},template:'<div><p style="margin:0 0 12px;font-size:14px">{{ selected.length }} ticked</p><FusionFrameGrid v-bind="args" v-model:selectedIds="selected" /></div>'})},T={name:"Attach a frame to a task or a subtask",render:()=>({components:{FusionFrameGrid:k},setup(){const a=v([]),s=v({d1:["main"],d2:["main"],d3:["header"]}),n=P(()=>y.map(i=>{const h=s.value[i.id]??[],u=O.filter(p=>h.includes(p.id)).map(p=>p.id==="main"?"This task":p.label);return u.length?{...i,badge:`On: ${u.join(", ")}`,badgeTone:"success"}:i}));function m(i){const h=s.value[i.itemId]??[];s.value={...s.value,[i.itemId]:i.attached?[...h,i.targetId]:h.filter(u=>u!==i.targetId)}}return{items:n,selected:a,attached:s,targets:O,onAttach:m}},template:`
<div>
  <p style="margin:0 0 12px;font-size:14px">Open <b>Attach to</b> on any card. Subtasks are indented. A tick means it is already attached there.</p>
  <FusionFrameGrid :items="items" v-model:selectedIds="selected" :attachTargets="targets" :attachedTo="attached" @attach="onAttach" />
</div>`})},w={name:"Attach menu with search (many tasks)",render:()=>({components:{FusionFrameGrid:k},setup(){const a=[{id:"a",label:"Sitemap and page list"},{id:"a1",label:"Home page outline",level:1},{id:"a2",label:"Footer links",level:1},{id:"b",label:"Create wireframes for new landing page"},{id:"b1",label:"Header and navigation",level:1},{id:"b2",label:"Hero section",level:1},{id:"b3",label:"Sign-up form",level:1},{id:"c",label:"Cashier screen"},{id:"c1",label:"Basket",level:1},{id:"c2",label:"Payment screen",level:1}],s=v({});function n(m){const i=s.value[m.itemId]??[];s.value={...s.value,[m.itemId]:m.attached?[...i,m.targetId]:i.filter(h=>h!==m.targetId)}}return{items:y,many:a,attached:s,onAttach:n}},template:`
<div>
  <p style="margin:0 0 12px;font-size:14px">With more than 5 places to attach to, the menu gets a search box. A matching subtask keeps its task above it. Set <code>attachSearch</code> to <code>true</code> or <code>false</code> to force it.</p>
  <FusionFrameGrid :items="items" :attachTargets="many" :attachedTo="attached" @attach="onAttach" />
</div>`})},F={name:"Photos with real thumbnails",args:{columns:4},render:a=>({components:{FusionFrameGrid:k},setup(){const s=[{id:1,name:"IMG_0412",kind:"JPG",thumbnail:g(200,"IMG_0412")},{id:2,name:"IMG_0413",kind:"JPG",thumbnail:g(20,"IMG_0413")},{id:3,name:"IMG_0415",kind:"JPG",thumbnail:g(140,"IMG_0415")},{id:4,name:"IMG_0421",kind:"JPG",thumbnail:g(300,"IMG_0421")},{id:5,name:"IMG_0430",kind:"JPG",thumbnail:g(60,"IMG_0430")},{id:6,name:"IMG_0433",kind:"JPG",thumbnail:g(260,"IMG_0433")},{id:7,name:"IMG_0440",kind:"RAW",thumbnail:g(100,"IMG_0440"),disabled:!0,badge:"RAW can't be shown",badgeTone:"warning"},{id:8,name:"IMG_0442",kind:"JPG",thumbnail:g(340,"IMG_0442")}],n=v([1,3,4]);return{args:a,items:s,selected:n}},template:'<div><p style="margin:0 0 12px;font-size:14px">Ask the client to choose from {{ selected.length }} photos</p><FusionFrameGrid v-bind="args" :items="items" v-model:selectedIds="selected" /></div>'})},S={name:"Browse only, no ticking",args:{items:y,selectable:!1,columns:4}},x={args:{items:[],loading:!0}},A={args:{items:[],emptyText:"No frames yet. Paste a Figma link and press Pull frames."}},M={name:"Two columns (a narrow panel)",args:{items:y.slice(0,4),columns:2},render:a=>({components:{FusionFrameGrid:k},setup:()=>({args:a}),template:'<div style="max-width:380px"><FusionFrameGrid v-bind="args" /></div>'})};G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
  args: {
    items: frames
  },
  render: args => ({
    components: {
      FusionFrameGrid
    },
    setup() {
      const selected = ref<(string | number)[]>(["d1", "d2"]);
      return {
        args,
        selected
      };
    },
    template: \`<div><p style="margin:0 0 12px;font-size:14px">{{ selected.length }} ticked</p><FusionFrameGrid v-bind="args" v-model:selectedIds="selected" /></div>\`
  })
}`,...G.parameters?.docs?.source}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  name: "Attach a frame to a task or a subtask",
  render: () => ({
    components: {
      FusionFrameGrid
    },
    setup() {
      const selected = ref<(string | number)[]>([]);
      const attached = ref<Record<string, string[]>>({
        d1: ["main"],
        d2: ["main"],
        d3: ["header"]
      });
      const items = computed<FrameItem[]>(() => frames.map(f => {
        const on = attached.value[f.id as string] ?? [];
        const names = targets.filter(t => on.includes(t.id as string)).map(t => t.id === "main" ? "This task" : t.label);
        return names.length ? {
          ...f,
          badge: \`On: \${names.join(", ")}\`,
          badgeTone: "success" as const
        } : f;
      }));
      function onAttach(p: {
        itemId: string | number;
        targetId: string | number;
        attached: boolean;
      }) {
        const cur = attached.value[p.itemId as string] ?? [];
        attached.value = {
          ...attached.value,
          [p.itemId as string]: p.attached ? [...cur, p.targetId as string] : cur.filter(t => t !== p.targetId)
        };
      }
      return {
        items,
        selected,
        attached,
        targets,
        onAttach
      };
    },
    template: \`
<div>
  <p style="margin:0 0 12px;font-size:14px">Open <b>Attach to</b> on any card. Subtasks are indented. A tick means it is already attached there.</p>
  <FusionFrameGrid :items="items" v-model:selectedIds="selected" :attachTargets="targets" :attachedTo="attached" @attach="onAttach" />
</div>\`
  })
}`,...T.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  name: "Attach menu with search (many tasks)",
  render: () => ({
    components: {
      FusionFrameGrid
    },
    setup() {
      const many = [{
        id: "a",
        label: "Sitemap and page list"
      }, {
        id: "a1",
        label: "Home page outline",
        level: 1
      }, {
        id: "a2",
        label: "Footer links",
        level: 1
      }, {
        id: "b",
        label: "Create wireframes for new landing page"
      }, {
        id: "b1",
        label: "Header and navigation",
        level: 1
      }, {
        id: "b2",
        label: "Hero section",
        level: 1
      }, {
        id: "b3",
        label: "Sign-up form",
        level: 1
      }, {
        id: "c",
        label: "Cashier screen"
      }, {
        id: "c1",
        label: "Basket",
        level: 1
      }, {
        id: "c2",
        label: "Payment screen",
        level: 1
      }];
      const attached = ref<Record<string, string[]>>({});
      function onAttach(p: {
        itemId: string | number;
        targetId: string | number;
        attached: boolean;
      }) {
        const cur = attached.value[p.itemId as string] ?? [];
        attached.value = {
          ...attached.value,
          [p.itemId as string]: p.attached ? [...cur, p.targetId as string] : cur.filter(t => t !== p.targetId)
        };
      }
      return {
        items: frames,
        many,
        attached,
        onAttach
      };
    },
    template: \`
<div>
  <p style="margin:0 0 12px;font-size:14px">With more than 5 places to attach to, the menu gets a search box. A matching subtask keeps its task above it. Set <code>attachSearch</code> to <code>true</code> or <code>false</code> to force it.</p>
  <FusionFrameGrid :items="items" :attachTargets="many" :attachedTo="attached" @attach="onAttach" />
</div>\`
  })
}`,...w.parameters?.docs?.source}}};F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  name: "Photos with real thumbnails",
  args: {
    columns: 4
  },
  render: args => ({
    components: {
      FusionFrameGrid
    },
    setup() {
      const items: FrameItem[] = [{
        id: 1,
        name: "IMG_0412",
        kind: "JPG",
        thumbnail: photo(200, "IMG_0412")
      }, {
        id: 2,
        name: "IMG_0413",
        kind: "JPG",
        thumbnail: photo(20, "IMG_0413")
      }, {
        id: 3,
        name: "IMG_0415",
        kind: "JPG",
        thumbnail: photo(140, "IMG_0415")
      }, {
        id: 4,
        name: "IMG_0421",
        kind: "JPG",
        thumbnail: photo(300, "IMG_0421")
      }, {
        id: 5,
        name: "IMG_0430",
        kind: "JPG",
        thumbnail: photo(60, "IMG_0430")
      }, {
        id: 6,
        name: "IMG_0433",
        kind: "JPG",
        thumbnail: photo(260, "IMG_0433")
      }, {
        id: 7,
        name: "IMG_0440",
        kind: "RAW",
        thumbnail: photo(100, "IMG_0440"),
        disabled: true,
        badge: "RAW can't be shown",
        badgeTone: "warning"
      }, {
        id: 8,
        name: "IMG_0442",
        kind: "JPG",
        thumbnail: photo(340, "IMG_0442")
      }];
      const selected = ref<(string | number)[]>([1, 3, 4]);
      return {
        args,
        items,
        selected
      };
    },
    template: \`<div><p style="margin:0 0 12px;font-size:14px">Ask the client to choose from {{ selected.length }} photos</p><FusionFrameGrid v-bind="args" :items="items" v-model:selectedIds="selected" /></div>\`
  })
}`,...F.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  name: "Browse only, no ticking",
  args: {
    items: frames,
    selectable: false,
    columns: 4
  }
}`,...S.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    items: [],
    loading: true
  }
}`,...x.parameters?.docs?.source}}};A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  args: {
    items: [],
    emptyText: "No frames yet. Paste a Figma link and press Pull frames."
  }
}`,...A.parameters?.docs?.source}}};M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  name: "Two columns (a narrow panel)",
  args: {
    items: frames.slice(0, 4),
    columns: 2
  },
  render: args => ({
    components: {
      FusionFrameGrid
    },
    setup: () => ({
      args
    }),
    template: \`<div style="max-width:380px"><FusionFrameGrid v-bind="args" /></div>\`
  })
}`,...M.parameters?.docs?.source}}};const Fe=["Default","AttachToATaskOrSubtask","SearchableAttachMenu","Photos","NotSelectable","Loading","Empty","TwoColumns"];export{T as AttachToATaskOrSubtask,G as Default,A as Empty,x as Loading,S as NotSelectable,F as Photos,w as SearchableAttachMenu,M as TwoColumns,Fe as __namedExportsOrder,we as default};
