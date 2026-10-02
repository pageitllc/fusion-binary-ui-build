import { h as yt, defineComponent as le, ref as M, reactive as Kt, watch as he, onMounted as we, onBeforeUnmount as Ae, openBlock as l, createElementBlock as c, normalizeClass as X, toDisplayString as w, createCommentVNode as A, createElementVNode as f, createBlock as Z, resolveDynamicComponent as me, normalizeStyle as ie, createVNode as Q, unref as ee, Teleport as Ee, Transition as Ve, withCtx as ce, Fragment as L, renderList as oe, nextTick as ge, computed as I, withModifiers as ue, createTextVNode as de, renderSlot as se, withDirectives as je, mergeProps as xt, vModelDynamic as Io, vShow as Ea, TransitionGroup as tl, createStaticVNode as Cn, withKeys as $e, vModelText as tt, KeepAlive as nl, watchEffect as Ma, toRaw as al, defineAsyncComponent as et, toHandlers as il, useCssVars as ol, useSlots as rl, shallowRef as sl, resolveComponent as Oo, createApp as ll } from "vue";
/**
 * @license lucide-vue-next v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ci = (t) => t.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), ul = (t) => t.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (e, n, a) => a ? a.toUpperCase() : n.toLowerCase()
), cl = (t) => {
  const e = ul(t);
  return e.charAt(0).toUpperCase() + e.slice(1);
}, dl = (...t) => t.filter((e, n, a) => !!e && e.trim() !== "" && a.indexOf(e) === n).join(" ").trim(), di = (t) => t === "";
/**
 * @license lucide-vue-next v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var jt = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": 2,
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
};
/**
 * @license lucide-vue-next v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const fl = ({
  name: t,
  iconNode: e,
  absoluteStrokeWidth: n,
  "absolute-stroke-width": a,
  strokeWidth: i,
  "stroke-width": o,
  size: r = jt.width,
  color: s = jt.stroke,
  ...u
}, { slots: d }) => yt(
  "svg",
  {
    ...jt,
    ...u,
    width: r,
    height: r,
    stroke: s,
    "stroke-width": di(n) || di(a) || n === !0 || a === !0 ? Number(i || o || jt["stroke-width"]) * 24 / Number(r) : i || o || jt["stroke-width"],
    class: dl(
      "lucide",
      u.class,
      ...t ? [`lucide-${ci(cl(t))}-icon`, `lucide-${ci(t)}`] : ["lucide-icon"]
    )
  },
  [...e.map((m) => yt(...m)), ...d.default ? [d.default()] : []]
);
/**
 * @license lucide-vue-next v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ve = (t, e) => (n, { slots: a, attrs: i }) => yt(
  fl,
  {
    ...i,
    ...n,
    iconNode: e,
    name: t
  },
  a
);
/**
 * @license lucide-vue-next v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ml = ve("arrow-right", [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "m12 5 7 7-7 7", key: "xquz4c" }]
]);
/**
 * @license lucide-vue-next v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const hl = ve("ban", [
  ["path", { d: "M4.929 4.929 19.07 19.071", key: "196cmz" }],
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }]
]);
/**
 * @license lucide-vue-next v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const vl = ve("bell", [
  ["path", { d: "M10.268 21a2 2 0 0 0 3.464 0", key: "vwvbt9" }],
  [
    "path",
    {
      d: "M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326",
      key: "11g9vi"
    }
  ]
]);
/**
 * @license lucide-vue-next v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const pl = ve("calendar-days", [
  ["path", { d: "M8 2v4", key: "1cmpym" }],
  ["path", { d: "M16 2v4", key: "4m81vk" }],
  ["rect", { width: "18", height: "18", x: "3", y: "4", rx: "2", key: "1hopcy" }],
  ["path", { d: "M3 10h18", key: "8toen8" }],
  ["path", { d: "M8 14h.01", key: "6423bh" }],
  ["path", { d: "M12 14h.01", key: "1etili" }],
  ["path", { d: "M16 14h.01", key: "1gbofw" }],
  ["path", { d: "M8 18h.01", key: "lrp35t" }],
  ["path", { d: "M12 18h.01", key: "mhygvu" }],
  ["path", { d: "M16 18h.01", key: "kzsmim" }]
]);
/**
 * @license lucide-vue-next v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const gl = ve("case-sensitive", [
  ["path", { d: "m2 16 4.039-9.69a.5.5 0 0 1 .923 0L11 16", key: "d5nyq2" }],
  ["path", { d: "M22 9v7", key: "pvm9v3" }],
  ["path", { d: "M3.304 13h6.392", key: "1q3zxz" }],
  ["circle", { cx: "18.5", cy: "12.5", r: "3.5", key: "z97x68" }]
]);
/**
 * @license lucide-vue-next v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Pn = ve("check", [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]]);
/**
 * @license lucide-vue-next v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const xe = ve("chevron-down", [
  ["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]
]);
/**
 * @license lucide-vue-next v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const zt = ve("chevron-left", [
  ["path", { d: "m15 18-6-6 6-6", key: "1wnfg3" }]
]);
/**
 * @license lucide-vue-next v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Lt = ve("chevron-right", [
  ["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }]
]);
/**
 * @license lucide-vue-next v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Na = ve("chevron-up", [
  ["path", { d: "m18 15-6-6-6 6", key: "153udz" }]
]);
/**
 * @license lucide-vue-next v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const yl = ve("circle-alert", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["line", { x1: "12", x2: "12", y1: "8", y2: "12", key: "1pkeuh" }],
  ["line", { x1: "12", x2: "12.01", y1: "16", y2: "16", key: "4dfq90" }]
]);
/**
 * @license lucide-vue-next v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ro = ve("circle-check-big", [
  ["path", { d: "M21.801 10A10 10 0 1 1 17 3.335", key: "yps3ct" }],
  ["path", { d: "m9 11 3 3L22 4", key: "1pflzl" }]
]);
/**
 * @license lucide-vue-next v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const bl = ve("circle-check", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "m9 12 2 2 4-4", key: "dzmm74" }]
]);
/**
 * @license lucide-vue-next v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const _l = ve("circle-dot", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["circle", { cx: "12", cy: "12", r: "1", key: "41hilf" }]
]);
/**
 * @license lucide-vue-next v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Cl = ve("circle-x", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "m15 9-6 6", key: "1uzhvr" }],
  ["path", { d: "m9 9 6 6", key: "z0biqf" }]
]);
/**
 * @license lucide-vue-next v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const wl = ve("cookie", [
  ["path", { d: "M12 2a10 10 0 1 0 10 10 4 4 0 0 1-5-5 4 4 0 0 1-5-5", key: "laymnq" }],
  ["path", { d: "M8.5 8.5v.01", key: "ue8clq" }],
  ["path", { d: "M16 15.5v.01", key: "14dtrp" }],
  ["path", { d: "M12 12v.01", key: "u5ubse" }],
  ["path", { d: "M11 17v.01", key: "1hyl5a" }],
  ["path", { d: "M7 14v.01", key: "uct60s" }]
]);
/**
 * @license lucide-vue-next v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Al = ve("download", [
  ["path", { d: "M12 15V3", key: "m9g1x1" }],
  ["path", { d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4", key: "ih7n3h" }],
  ["path", { d: "m7 10 5 5 5-5", key: "brsn70" }]
]);
/**
 * @license lucide-vue-next v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Da = ve("ellipsis-vertical", [
  ["circle", { cx: "12", cy: "12", r: "1", key: "41hilf" }],
  ["circle", { cx: "12", cy: "5", r: "1", key: "gxeob9" }],
  ["circle", { cx: "12", cy: "19", r: "1", key: "lyex9k" }]
]);
/**
 * @license lucide-vue-next v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const kl = ve("eye-off", [
  [
    "path",
    {
      d: "M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49",
      key: "ct8e1f"
    }
  ],
  ["path", { d: "M14.084 14.158a3 3 0 0 1-4.242-4.242", key: "151rxh" }],
  [
    "path",
    {
      d: "M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143",
      key: "13bj9a"
    }
  ],
  ["path", { d: "m2 2 20 20", key: "1ooewy" }]
]);
/**
 * @license lucide-vue-next v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Sl = ve("eye", [
  [
    "path",
    {
      d: "M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",
      key: "1nclc0"
    }
  ],
  ["circle", { cx: "12", cy: "12", r: "3", key: "1v7zrd" }]
]);
/**
 * @license lucide-vue-next v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Tl = ve("file-check", [
  ["path", { d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z", key: "1rqfz7" }],
  ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4", key: "tnqrlb" }],
  ["path", { d: "m9 15 2 2 4-4", key: "1grp1n" }]
]);
/**
 * @license lucide-vue-next v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const $o = ve("file-text", [
  ["path", { d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z", key: "1rqfz7" }],
  ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4", key: "tnqrlb" }],
  ["path", { d: "M10 9H8", key: "b1mrlr" }],
  ["path", { d: "M16 13H8", key: "t4e002" }],
  ["path", { d: "M16 17H8", key: "z1uh3a" }]
]);
/**
 * @license lucide-vue-next v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const El = ve("files", [
  [
    "path",
    {
      d: "M15 2a2 2 0 0 1 1.414.586l4 4A2 2 0 0 1 21 8v7a2 2 0 0 1-2 2h-8a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2z",
      key: "1vo8kb"
    }
  ],
  ["path", { d: "M15 2v4a2 2 0 0 0 2 2h4", key: "sud9ri" }],
  ["path", { d: "M5 7a2 2 0 0 0-2 2v11a2 2 0 0 0 2 2h8a2 2 0 0 0 1.732-1", key: "l4dndm" }]
]);
/**
 * @license lucide-vue-next v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ml = ve("image", [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", ry: "2", key: "1m3agn" }],
  ["circle", { cx: "9", cy: "9", r: "2", key: "af1f0g" }],
  ["path", { d: "m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21", key: "1xmnt7" }]
]);
/**
 * @license lucide-vue-next v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ha = ve("info", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M12 16v-4", key: "1dtifu" }],
  ["path", { d: "M12 8h.01", key: "e9boi3" }]
]);
/**
 * @license lucide-vue-next v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Nl = ve("lightbulb", [
  [
    "path",
    {
      d: "M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5",
      key: "1gvzjb"
    }
  ],
  ["path", { d: "M9 18h6", key: "x1upvd" }],
  ["path", { d: "M10 22h4", key: "ceow96" }]
]);
/**
 * @license lucide-vue-next v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Dl = ve("maximize-2", [
  ["path", { d: "M15 3h6v6", key: "1q9fwt" }],
  ["path", { d: "m21 3-7 7", key: "1l2asr" }],
  ["path", { d: "m3 21 7-7", key: "tjx5ai" }],
  ["path", { d: "M9 21H3v-6", key: "wtvkvv" }]
]);
/**
 * @license lucide-vue-next v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Il = ve("minimize-2", [
  ["path", { d: "m14 10 7-7", key: "oa77jy" }],
  ["path", { d: "M20 10h-6V4", key: "mjg0md" }],
  ["path", { d: "m3 21 7-7", key: "tjx5ai" }],
  ["path", { d: "M4 14h6v6", key: "rmj7iw" }]
]);
/**
 * @license lucide-vue-next v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const fi = ve("monitor-smartphone", [
  ["path", { d: "M18 8V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h8", key: "10dyio" }],
  ["path", { d: "M10 19v-3.96 3.15", key: "1irgej" }],
  ["path", { d: "M7 19h5", key: "qswx4l" }],
  ["rect", { width: "6", height: "10", x: "16", y: "12", rx: "2", key: "1egngj" }]
]);
/**
 * @license lucide-vue-next v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ol = ve("printer", [
  [
    "path",
    {
      d: "M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2",
      key: "143wyd"
    }
  ],
  ["path", { d: "M6 9V3a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v6", key: "1itne7" }],
  ["rect", { x: "6", y: "14", width: "12", height: "8", rx: "1", key: "1ue0tg" }]
]);
/**
 * @license lucide-vue-next v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Rl = ve("search", [
  ["path", { d: "m21 21-4.34-4.34", key: "14j7rj" }],
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }]
]);
/**
 * @license lucide-vue-next v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const $l = ve("signature", [
  [
    "path",
    {
      d: "m21 17-2.156-1.868A.5.5 0 0 0 18 15.5v.5a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1c0-2.545-3.991-3.97-8.5-4a1 1 0 0 0 0 5c4.153 0 4.745-11.295 5.708-13.5a2.5 2.5 0 1 1 3.31 3.284",
      key: "y32ogt"
    }
  ],
  ["path", { d: "M3 21h18", key: "itz85i" }]
]);
/**
 * @license lucide-vue-next v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const xl = ve("square-check", [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }],
  ["path", { d: "m9 12 2 2 4-4", key: "dzmm74" }]
]);
/**
 * @license lucide-vue-next v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const xo = ve("square-pen", [
  ["path", { d: "M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7", key: "1m0v6g" }],
  [
    "path",
    {
      d: "M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z",
      key: "ohrbg2"
    }
  ]
]);
/**
 * @license lucide-vue-next v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Pl = ve("text-cursor-input", [
  ["path", { d: "M12 20h-1a2 2 0 0 1-2-2 2 2 0 0 1-2 2H6", key: "1528k5" }],
  ["path", { d: "M13 8h7a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-7", key: "13ksps" }],
  ["path", { d: "M5 16H4a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2h1", key: "1n9rhb" }],
  ["path", { d: "M6 4h1a2 2 0 0 1 2 2 2 2 0 0 1 2-2h1", key: "1mj8rg" }],
  ["path", { d: "M9 6v12", key: "velyjx" }]
]);
/**
 * @license lucide-vue-next v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ia = ve("trash-2", [
  ["path", { d: "M10 11v6", key: "nco0om" }],
  ["path", { d: "M14 11v6", key: "outv1u" }],
  ["path", { d: "M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6", key: "miytrc" }],
  ["path", { d: "M3 6h18", key: "d0wm0j" }],
  ["path", { d: "M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2", key: "e791ji" }]
]);
/**
 * @license lucide-vue-next v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Fl = ve("triangle-alert", [
  [
    "path",
    {
      d: "m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",
      key: "wmoenq"
    }
  ],
  ["path", { d: "M12 9v4", key: "juzpu7" }],
  ["path", { d: "M12 17h.01", key: "p32p05" }]
]);
/**
 * @license lucide-vue-next v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Bl = ve("upload", [
  ["path", { d: "M12 3v12", key: "1x0j5s" }],
  ["path", { d: "m17 8-5-5-5 5", key: "7q97r8" }],
  ["path", { d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4", key: "ih7n3h" }]
]);
/**
 * @license lucide-vue-next v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Po = ve("video", [
  [
    "path",
    {
      d: "m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5",
      key: "ftymec"
    }
  ],
  ["rect", { x: "2", y: "6", width: "14", height: "12", rx: "2", key: "158x01" }]
]);
/**
 * @license lucide-vue-next v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Xe = ve("x", [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
]), zl = {
  key: 0,
  class: "fu-status-dropdown__label-text"
}, Ll = ["disabled"], Vl = { key: 0 }, Hl = ["onClick"], jl = { class: "fu-status-dropdown__item-label" }, Ul = /* @__PURE__ */ le({
  __name: "FusionStatusDropdown",
  props: {
    modelValue: {},
    options: {},
    align: { default: "left" },
    label: { default: "" },
    placeholder: { default: "Select Status" },
    disabled: { type: Boolean, default: !1 },
    readonly: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue"],
  setup(t, { emit: e }) {
    const n = t, a = e, i = M(!1), o = M(null), r = M(null), s = M(n.modelValue || null), u = Kt({
      position: "absolute",
      visibility: "hidden",
      opacity: "0",
      zIndex: "9999"
    });
    he(
      () => n.modelValue,
      (y) => s.value = y
    );
    function d() {
      if (!o.value || !r.value) return;
      const y = o.value.getBoundingClientRect(), b = r.value.getBoundingClientRect(), C = window.innerHeight - y.bottom, k = y.top, E = C < b.height && k > C;
      let N = y.left + window.scrollX, z = "none";
      n.align === "center" && (N += y.width / 2, z = "translateX(-50%)"), n.align === "right" && (N = y.right + window.scrollX, z = "translateX(-100%)"), u.left = `${N}px`, u.transform = z, u.minWidth = `${y.width}px`, E ? u.top = `${y.top + window.scrollY - b.height - 6}px` : u.top = `${y.bottom + window.scrollY + 6}px`, u.visibility = "visible", u.opacity = "1";
    }
    const m = async () => {
      n.disabled || n.readonly || (i.value = !i.value, i.value && (await ge(), d(), await ge(), d()));
    }, v = (y) => {
      s.value = y, a("update:modelValue", y), i.value = !1;
    }, p = (y) => {
      const b = y.target;
      i.value && o.value && r.value && !o.value.contains(b) && !r.value.contains(b) && (i.value = !1);
    }, h = () => {
      i.value && (i.value = !1);
    }, g = (y) => {
      y.key === "Escape" && (i.value = !1);
    };
    return we(() => {
      document.addEventListener("click", p), window.addEventListener("resize", h), window.addEventListener("scroll", h, !0), document.addEventListener("keydown", g);
    }), Ae(() => {
      document.removeEventListener("click", p), window.removeEventListener("resize", h), window.removeEventListener("scroll", h, !0), document.removeEventListener("keydown", g);
    }), (y, b) => (l(), c("div", {
      class: X(["fu-status-dropdown", {
        "fu-status-dropdown--disabled": t.disabled,
        "fu-status-dropdown--readonly": t.readonly
      }]),
      ref_key: "dropdown",
      ref: o
    }, [
      t.label ? (l(), c("div", zl, w(t.label), 1)) : A("", !0),
      f("button", {
        class: "fu-status-dropdown__button",
        onClick: m,
        disabled: t.disabled
      }, [
        s.value ? (l(), c("span", Vl, [
          s.value.icon ? (l(), Z(me(s.value.icon), {
            key: 0,
            class: "fu-status-dropdown__icon"
          })) : s.value.color ? (l(), c("span", {
            key: 1,
            class: "fu-status-dropdown__dot",
            style: ie({ backgroundColor: s.value.color })
          }, null, 4)) : A("", !0)
        ])) : A("", !0),
        f("span", {
          class: X(["fu-status-dropdown__label", { "fu-status-dropdown__placeholder": !s.value }])
        }, w(s.value?.label || t.placeholder), 3),
        Q(ee(xe), { class: "fu-status-dropdown__chevron" })
      ], 8, Ll),
      (l(), Z(Ee, { to: "body" }, [
        Q(Ve, { name: "fade" }, {
          default: ce(() => [
            i.value ? (l(), c("ul", {
              key: 0,
              ref_key: "menuRef",
              ref: r,
              class: "fu-status-dropdown__menu",
              style: ie(u)
            }, [
              (l(!0), c(L, null, oe(t.options, (_) => (l(), c("li", {
                key: _.label,
                class: "fu-status-dropdown__item",
                onClick: (C) => v(_)
              }, [
                _.icon ? (l(), Z(me(_.icon), {
                  key: 0,
                  class: "fu-status-dropdown__icon"
                })) : _.color ? (l(), c("span", {
                  key: 1,
                  class: "fu-status-dropdown__dot",
                  style: ie({ backgroundColor: _.color })
                }, null, 4)) : A("", !0),
                f("span", jl, w(_.label), 1)
              ], 8, Hl))), 128))
            ], 4)) : A("", !0)
          ]),
          _: 1
        })
      ]))
    ], 2));
  }
}), ae = (t, e) => {
  const n = t.__vccOpts || t;
  for (const [a, i] of e)
    n[a] = i;
  return n;
}, Oa = /* @__PURE__ */ ae(Ul, [["__scopeId", "data-v-8259c9bf"]]), Wl = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Oa
}, Symbol.toStringTag, { value: "Module" })), Yl = ["disabled"], Gl = {
  key: 0,
  class: "fu-spinner"
}, ql = /* @__PURE__ */ le({
  __name: "FusionActionButton",
  props: {
    disabled: { type: Boolean, default: !1 },
    size: { default: "md" },
    variant: { default: "subtle" },
    tooltip: { default: null },
    loading: { type: Boolean, default: !1 },
    icon: { default: null }
  },
  emits: ["click"],
  setup(t) {
    const e = M(!1), n = M({});
    function a(o) {
      const r = o.currentTarget.getBoundingClientRect();
      n.value = {
        position: "fixed",
        left: `${r.left + r.width / 2}px`,
        top: `${r.top - 8}px`,
        transform: "translateX(-50%) translateY(-100%)",
        zIndex: 99999
      }, e.value = !0;
    }
    function i() {
      e.value = !1;
    }
    return (o, r) => (l(), c("div", {
      class: "fu-action-btn-wrapper",
      onMouseenter: a,
      onMouseleave: i
    }, [
      f("button", {
        class: X(["fu-action-btn", [
          `fu-action-btn--${t.size}`,
          `fu-action-btn--${t.variant}`,
          { "is-loading": t.loading }
        ]]),
        disabled: t.disabled || t.loading,
        onClick: r[0] || (r[0] = (s) => t.loading ? null : o.$emit("click", s))
      }, [
        t.loading ? (l(), c("span", Gl)) : t.icon ? (l(), Z(me(t.icon), {
          key: 1,
          class: "fu-action-btn__icon",
          size: 20
        })) : A("", !0)
      ], 10, Yl),
      (l(), Z(Ee, { to: "body" }, [
        t.tooltip && e.value ? (l(), c("span", {
          key: 0,
          class: "fu-tooltip",
          style: ie(n.value)
        }, w(t.tooltip), 5)) : A("", !0)
      ]))
    ], 32));
  }
}), Pe = /* @__PURE__ */ ae(ql, [["__scopeId", "data-v-b726044f"]]), Kl = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Pe
}, Symbol.toStringTag, { value: "Module" }));
var Nt = /* @__PURE__ */ ((t) => (t[t.Offline = 0] = "Offline", t[t.Active = 1] = "Active", t[t.Away = 2] = "Away", t[t.Busy = 3] = "Busy", t[t.DoNotDisturb = 4] = "DoNotDisturb", t[t.Invisible = 5] = "Invisible", t))(Nt || {});
const Ql = ["src", "alt"], Zl = {
  key: 1,
  class: "fu-avatar__placeholder"
}, Jl = {
  key: 2,
  class: "fu-avatar__edit-overlay"
}, Xl = /* @__PURE__ */ le({
  __name: "FuAvatar",
  props: {
    src: {},
    alt: {},
    name: {},
    size: { default: "md" },
    status: {},
    showStatus: { type: Boolean, default: !0 },
    editable: { type: Boolean, default: !1 },
    allowRemove: { type: Boolean, default: !0 }
  },
  emits: ["update:src", "remove"],
  setup(t, { emit: e }) {
    const n = t, a = e, i = M(null), o = I(
      () => n.name ? n.name.split(" ").map((m) => m[0]).join("").slice(0, 2).toUpperCase() : ""
    ), r = () => {
      n.editable && i.value?.click();
    }, s = (m) => {
      const v = m.target?.files?.[0];
      if (!v) return;
      const p = new FileReader();
      p.onload = () => {
        a("update:src", p.result);
      }, p.readAsDataURL(v);
    }, u = () => {
      a("remove");
    }, d = I(() => {
      switch (n.status) {
        case Nt.Active:
        case 1:
          return "fu-status-dot--active";
        case Nt.Away:
        case 2:
          return "fu-status-dot--away";
        case Nt.Busy:
        case 3:
          return "fu-status-dot--busy";
        case Nt.DoNotDisturb:
        case 4:
          return "fu-status-dot--dnd";
        case Nt.Invisible:
        case 5:
          return "fu-status-dot--invisible";
        default:
          return "fu-status-dot--offline";
      }
    });
    return (m, v) => (l(), c("div", {
      class: X(["fu-avatar", [`fu-avatar--${t.size}`, { "fu-avatar--editable": t.editable }]])
    }, [
      f("div", {
        class: "fu-avatar__wrapper",
        onClick: r
      }, [
        t.src ? (l(), c("img", {
          key: 0,
          src: t.src,
          alt: t.alt,
          class: "fu-avatar__image"
        }, null, 8, Ql)) : (l(), c("span", Zl, w(o.value), 1)),
        t.editable ? (l(), c("span", Jl, " Edit ")) : A("", !0),
        t.editable && t.src && t.allowRemove ? (l(), c("button", {
          key: 3,
          class: "fu-avatar__remove",
          onClick: ue(u, ["stop"]),
          "aria-label": "Remove photo"
        }, " × ")) : A("", !0),
        t.showStatus && t.status !== void 0 ? (l(), c("span", {
          key: 4,
          class: X(["fu-status-dot", d.value])
        }, null, 2)) : A("", !0),
        f("input", {
          ref_key: "fileInput",
          ref: i,
          type: "file",
          accept: "image/*",
          class: "fu-avatar__file-input",
          onChange: s
        }, null, 544)
      ])
    ], 2));
  }
}), qe = /* @__PURE__ */ ae(Xl, [["__scopeId", "data-v-51778eaa"]]), eu = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: qe
}, Symbol.toStringTag, { value: "Module" })), tu = { class: "edf-container" }, nu = {
  key: 0,
  class: "edf-label"
}, au = { class: "edf-text" }, iu = /* @__PURE__ */ le({
  __name: "EditableDisplayField",
  props: {
    text: {},
    label: { default: "" },
    variant: { default: "solid" },
    avatarSrc: {},
    avatarName: {}
  },
  emits: ["edit"],
  setup(t, { emit: e }) {
    const n = e, a = M(!1);
    function i(o) {
      n("edit", o);
    }
    return (o, r) => (l(), c("div", tu, [
      t.label ? (l(), c("label", nu, w(t.label), 1)) : A("", !0),
      f("div", {
        class: X(["edf-wrapper", [`edf--${t.variant}`]]),
        onMouseenter: r[0] || (r[0] = (s) => a.value = !0),
        onMouseleave: r[1] || (r[1] = (s) => a.value = !1),
        ref: "container"
      }, [
        t.avatarSrc || t.avatarName ? (l(), Z(qe, {
          key: 0,
          src: t.avatarSrc,
          name: t.avatarName,
          size: "xs",
          "show-status": !1,
          class: "edf-avatar"
        }, null, 8, ["src", "name"])) : A("", !0),
        f("span", au, w(t.text), 1),
        a.value ? (l(), Z(Pe, {
          key: 1,
          class: "edf-edit-btn",
          icon: ee(xo),
          size: "sm",
          variant: "subtle",
          onClick: i
        }, null, 8, ["icon"])) : A("", !0)
      ], 34)
    ]));
  }
}), ou = /* @__PURE__ */ ae(iu, [["__scopeId", "data-v-f0200fd3"]]), ru = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: ou
}, Symbol.toStringTag, { value: "Module" })), su = ["for"], lu = {
  key: 0,
  class: "fu-input-required"
}, uu = {
  key: 0,
  class: "fu-input-icon fu-input-icon--left"
}, cu = {
  key: 1,
  xmlns: "http://www.w3.org/2000/svg",
  width: "14",
  height: "14",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
}, du = ["id", "name", "type", "placeholder", "disabled", "readonly", "required", "aria-invalid", "aria-describedby", "inputmode", "min", "max", "step"], fu = {
  key: 2,
  class: "fu-input-icon fu-input-icon--right"
}, mu = ["id"], hu = /* @__PURE__ */ le({
  __name: "FusionTextInput",
  props: {
    modelValue: { default: "" },
    label: { default: "" },
    placeholder: { default: "" },
    type: { default: "text" },
    size: { default: "sm" },
    variant: { default: "outline" },
    disabled: { type: Boolean, default: !1 },
    error: { default: null },
    min: { default: void 0 },
    max: { default: void 0 },
    step: { default: void 0 },
    required: { type: Boolean, default: !1 },
    formWrapperWidth: { default: "fit-content" },
    font: { default: void 0 },
    fontSize: { default: void 0 },
    color: { default: void 0 },
    id: { default: void 0 },
    name: { default: void 0 },
    readonly: { type: Boolean, default: !1 },
    mask: { default: null },
    maskPattern: { default: "" }
  },
  emits: ["update:modelValue"],
  setup(t, { emit: e }) {
    const n = t, a = e, i = I(() => n.type === "search");
    function o() {
      h.value = "", a("update:modelValue", "");
    }
    const r = `fu-input-${Math.random().toString(36).slice(2, 9)}`, s = I(() => n.id || r), u = I(() => n.name || s.value), d = I(() => {
      if (n.mask === "phone" || n.mask === "card") return "numeric";
      if (n.mask === "currency") return "decimal";
      if (n.type === "number") return "numeric";
    }), m = I(() => n.variant !== "typeform" ? {} : {
      ...n.font ? { "--fu-typeform-font": n.font } : {},
      ...n.color ? { "--fu-typeform-color": n.color } : {},
      ...n.fontSize ? { "--fu-typeform-font-size": n.fontSize } : {}
    });
    function v(g) {
      if (!n.mask) return g;
      switch (n.mask) {
        case "phone":
          return g.replace(/\D/g, "").slice(0, 11).replace(/^(\d{5})(\d{0,6})$/, (b, _, C) => C ? `${_} ${C}` : _);
        case "card":
          return g.replace(/\D/g, "").slice(0, 16).replace(/(\d{4})(?=\d)/g, "$1 ");
        case "currency": {
          const b = g.replace(/[^\d.]/g, "").split("."), _ = b[0] || "", C = b.length > 1 ? "." + b[1].slice(0, 2) : "";
          return (_ ? new Intl.NumberFormat("en-GB").format(Number(_)) : "") + C;
        }
        case "custom": {
          if (!n.maskPattern) return g;
          const y = g.replace(/\D/g, "");
          let b = 0;
          return n.maskPattern.replace(/#/g, () => y[b++] || "");
        }
        default:
          return g;
      }
    }
    function p(g) {
      return n.mask ? n.mask === "currency" ? g.replace(/[^\d.]/g, "") : g.replace(/\D/g, "") : g;
    }
    const h = M(v(String(n.modelValue ?? "")));
    return he(
      () => n.modelValue,
      (g) => {
        const y = v(String(g ?? ""));
        y !== h.value && (h.value = y);
      }
    ), he(h, (g) => {
      const y = v(String(g));
      if (y !== g) {
        h.value = y;
        return;
      }
      a("update:modelValue", p(y));
    }), (g, y) => (l(), c("div", {
      class: "fu-input-wrapper",
      style: ie({ width: t.formWrapperWidth })
    }, [
      t.label ? (l(), c("label", {
        key: 0,
        class: "fu-input-label",
        for: s.value
      }, [
        de(w(t.label) + " ", 1),
        t.required ? (l(), c("span", lu, "*")) : A("", !0)
      ], 8, su)) : A("", !0),
      f("div", {
        class: X(["fu-input-container", [`fu-input--${t.size}`, `fu-input--${t.variant}`, { "fu-input--error": t.error }]]),
        style: ie(m.value)
      }, [
        g.$slots.left || i.value ? (l(), c("div", uu, [
          g.$slots.left ? se(g.$slots, "left", { key: 0 }, void 0, !0) : (l(), c("svg", cu, [...y[1] || (y[1] = [
            f("circle", {
              cx: "11",
              cy: "11",
              r: "8"
            }, null, -1),
            f("line", {
              x1: "21",
              y1: "21",
              x2: "16.65",
              y2: "16.65"
            }, null, -1)
          ])]))
        ])) : A("", !0),
        je(f("input", xt(g.$attrs, {
          class: "fu-input",
          id: s.value,
          name: u.value,
          type: i.value ? "text" : t.type,
          placeholder: t.placeholder,
          disabled: t.disabled,
          readonly: t.readonly,
          required: t.required,
          "aria-invalid": !!t.error,
          "aria-describedby": t.error ? `${s.value}-error` : void 0,
          inputmode: d.value,
          min: t.type === "number" ? t.min : void 0,
          max: t.type === "number" ? t.max : void 0,
          step: t.type === "number" ? t.step : void 0,
          "onUpdate:modelValue": y[0] || (y[0] = (b) => h.value = b)
        }), null, 16, du), [
          [Io, h.value]
        ]),
        i.value && h.value ? (l(), c("div", {
          key: 1,
          class: "fu-input-icon fu-input-icon--right fu-input-clear",
          onClick: o
        }, [...y[2] || (y[2] = [
          f("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "14",
            height: "14",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            "stroke-width": "2.5",
            "stroke-linecap": "round",
            "stroke-linejoin": "round"
          }, [
            f("line", {
              x1: "18",
              y1: "6",
              x2: "6",
              y2: "18"
            }),
            f("line", {
              x1: "6",
              y1: "6",
              x2: "18",
              y2: "18"
            })
          ], -1)
        ])])) : g.$slots.right ? (l(), c("div", fu, [
          se(g.$slots, "right", {}, void 0, !0)
        ])) : A("", !0)
      ], 6),
      t.error ? (l(), c("span", {
        key: 1,
        class: "fu-input-error",
        id: `${s.value}-error`
      }, w(t.error), 9, mu)) : A("", !0)
    ], 4));
  }
}), Oe = /* @__PURE__ */ ae(hu, [["__scopeId", "data-v-de66768b"]]), vu = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Oe
}, Symbol.toStringTag, { value: "Module" })), pu = ["onClick", "disabled"], gu = { class: "fu-accordion__header-content" }, yu = { class: "fu-accordion__body" }, bu = /* @__PURE__ */ le({
  __name: "FusionAccordion",
  props: {
    items: {},
    defaultOpen: {},
    type: {},
    theme: {}
  },
  setup(t) {
    const e = t, n = M(e.defaultOpen || []);
    function a(o) {
      return n.value.includes(o);
    }
    function i(o) {
      const r = a(o);
      e.type === "single" ? n.value = r ? [] : [o] : r ? n.value = n.value.filter((s) => s !== o) : n.value.push(o);
    }
    return (o, r) => (l(), c("div", {
      class: X(["fu-accordion", [`fu-accordion--${t.theme}`]])
    }, [
      (l(!0), c(L, null, oe(t.items, (s) => (l(), c("div", {
        key: s.key,
        class: "fu-accordion__item"
      }, [
        f("button", {
          class: X(["fu-accordion__header", {
            "is-open": a(s.key),
            "is-disabled": s.disabled
          }]),
          onClick: (u) => i(s.key),
          disabled: s.disabled
        }, [
          f("div", gu, [
            s.icon ? (l(), Z(me(s.icon), {
              key: 0,
              size: 16,
              class: "fu-accordion__icon"
            })) : A("", !0),
            f("span", null, w(s.title), 1)
          ]),
          (l(), c("svg", {
            class: X(["fu-accordion__chevron", { "is-open": a(s.key) }]),
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            viewBox: "0 0 24 24",
            stroke: "currentColor"
          }, [...r[0] || (r[0] = [
            f("path", {
              "stroke-linecap": "round",
              "stroke-linejoin": "round",
              "stroke-width": "2",
              d: "M6 9l6 6 6-6"
            }, null, -1)
          ])], 2))
        ], 10, pu),
        je(f("div", yu, [
          se(o.$slots, s.key, {}, void 0, !0)
        ], 512), [
          [Ea, a(s.key)]
        ])
      ]))), 128))
    ], 2));
  }
}), _u = /* @__PURE__ */ ae(bu, [["__scopeId", "data-v-f069f986"]]), Cu = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _u
}, Symbol.toStringTag, { value: "Module" })), wu = { class: "fu-timeline" }, Au = {
  key: 0,
  class: "fu-timeline__empty"
}, ku = { class: "fu-evt__body" }, Su = { class: "fu-evt__line" }, Tu = { class: "fu-evt__desc" }, Eu = {
  key: 0,
  class: "fu-evt__version"
}, Mu = { class: "fu-evt__date" }, Nu = {
  key: 0,
  class: "fu-evt__note"
}, Du = /* @__PURE__ */ le({
  __name: "FuActivityTimeline",
  props: {
    events: {}
  },
  setup(t) {
    return (e, n) => (l(), c("ul", wu, [
      t.events.length ? A("", !0) : (l(), c("li", Au, [
        se(e.$slots, "empty", {}, () => [
          n[0] || (n[0] = de("No activity yet.", -1))
        ], !0)
      ])),
      (l(!0), c(L, null, oe(t.events, (a) => (l(), c("li", {
        key: a.id,
        class: "fu-evt"
      }, [
        f("span", {
          class: X(["fu-evt__icon", `fu-evt__icon--${a.type}`])
        }, [
          (l(), Z(me(a.icon), { size: 14 }))
        ], 2),
        f("div", ku, [
          f("div", Su, [
            f("span", Tu, w(a.description), 1),
            a.version != null ? (l(), c("span", Eu, "v" + w(a.version), 1)) : A("", !0)
          ]),
          f("div", Mu, w(a.date), 1),
          a.note ? (l(), c("p", Nu, w(a.note), 1)) : A("", !0)
        ])
      ]))), 128))
    ]));
  }
}), Iu = /* @__PURE__ */ ae(Du, [["__scopeId", "data-v-5508145c"]]), Ou = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Iu
}, Symbol.toStringTag, { value: "Module" })), Ru = {
  key: 0,
  class: "fu-alert-stack"
}, $u = { class: "fu-alert-strip__body" }, xu = { class: "fu-alert-strip__msg" }, Pu = {
  key: 0,
  class: "fu-alert-strip__sub"
}, Fu = { class: "fu-alert-strip__actions" }, Bu = ["href", "onClick"], zu = ["onClick"], Lu = "fu-alert-dismissed-", Vu = /* @__PURE__ */ le({
  __name: "FusionAlertBanner",
  props: {
    alerts: {}
  },
  setup(t) {
    const e = t;
    function n(u) {
      return u.storageKey ?? `${Lu}${u.id}`;
    }
    function a(u) {
      try {
        return u.persistent === !1 ? sessionStorage : localStorage;
      } catch {
        return null;
      }
    }
    const i = M(/* @__PURE__ */ new Set());
    we(() => {
      const u = /* @__PURE__ */ new Set();
      for (const d of e.alerts) {
        if (d.dismissible === !1) continue;
        a(d)?.getItem(n(d)) === "1" && u.add(d.id);
      }
      i.value = u;
    });
    const o = I(() => {
      const u = /* @__PURE__ */ new Set();
      for (const d of e.alerts)
        i.value.has(d.id) || u.add(d.id);
      return u;
    }), r = I(
      () => e.alerts.filter((u) => !i.value.has(u.id))
    );
    function s(u) {
      i.value = /* @__PURE__ */ new Set([...i.value, u.id]);
      try {
        a(u)?.setItem(n(u), "1");
      } catch {
      }
    }
    return (u, d) => (l(), Z(Ee, { to: "body" }, [
      o.value.size > 0 ? (l(), c("div", Ru, [
        Q(tl, {
          name: "fu-alert-strip",
          tag: "div",
          class: "fu-alert-stack__inner"
        }, {
          default: ce(() => [
            (l(!0), c(L, null, oe(r.value, (m) => (l(), c("div", {
              key: m.id,
              class: X(["fu-alert-strip", `fu-alert-strip--${m.type}`])
            }, [
              d[0] || (d[0] = f("span", { class: "fu-alert-strip__dot" }, null, -1)),
              f("div", $u, [
                f("span", xu, w(m.message), 1),
                m.sub ? (l(), c("span", Pu, w(m.sub), 1)) : A("", !0)
              ]),
              f("div", Fu, [
                m.cta ? (l(), c("a", {
                  key: 0,
                  href: m.cta.href ?? "#",
                  class: "fu-alert-strip__cta",
                  onClick: ue((v) => m.cta.action ? m.cta.action() : null, ["prevent"])
                }, w(m.cta.label), 9, Bu)) : A("", !0),
                m.dismissible !== !1 ? (l(), c("button", {
                  key: 1,
                  class: "fu-alert-strip__dismiss",
                  title: "Dismiss",
                  onClick: (v) => s(m)
                }, [
                  Q(ee(Xe), {
                    size: 13,
                    "stroke-width": 2.5
                  })
                ], 8, zu)) : A("", !0)
              ])
            ], 2))), 128))
          ]),
          _: 1
        })
      ])) : A("", !0)
    ]));
  }
}), Hu = /* @__PURE__ */ ae(Vu, [["__scopeId", "data-v-123778f1"]]), ju = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Hu
}, Symbol.toStringTag, { value: "Module" })), Uu = {
  key: 0,
  class: "fu-status-dropdown__label-text"
}, Wu = { key: 1 }, Yu = {
  key: 0,
  class: "flex"
}, Gu = ["onClick"], qu = {
  key: 1,
  class: "fu-placeholder"
}, Ku = {
  key: 1,
  class: "flex flex--center flex--gap-md"
}, Qu = {
  key: 2,
  class: "fu-status-dropdown__input-trigger"
}, Zu = {
  key: 0,
  class: "fu-search-wrapper"
}, Ju = {
  key: 1,
  class: "fu-options-scroll scrollbar__control customScrollBar"
}, Xu = { class: "fu-status-dropdown__group-label" }, ec = ["onClick"], tc = { class: "fu-item-content" }, nc = { class: "fu-item-label" }, ac = {
  key: 0,
  class: "fu-item-meta"
}, ic = ["onClick"], oc = { class: "fu-item-content" }, rc = { class: "fu-item-label" }, sc = {
  key: 0,
  class: "fu-item-meta"
}, lc = {
  key: 2,
  class: "fu-status-dropdown__empty"
}, uc = {
  key: 3,
  class: "fu-input-error"
}, cc = /* @__PURE__ */ le({
  __name: "FusionAutocomplete",
  props: {
    options: {},
    groups: { default: () => [] },
    modelValue: { default: null },
    multiple: { type: Boolean, default: !1 },
    placeholder: { default: "Select..." },
    searchable: { type: Boolean, default: !0 },
    noResultsText: { default: "No results found" },
    searchPlaceholder: { default: "Search..." },
    label: { default: "" },
    variant: { default: "button" },
    size: { default: "md" },
    formWrapperWidth: { default: "" },
    error: { default: null },
    async: { type: Boolean, default: !1 },
    minSearchLength: { default: 2 },
    loading: { type: Boolean, default: !1 },
    meta: { default: "" }
  },
  emits: ["update:modelValue", "search"],
  setup(t, { emit: e }) {
    const n = t, a = e, i = M(!1), o = M(""), r = M(null), s = M(null), u = M(null), d = M(null), m = M({}), v = M(null), p = M([]), h = I(() => n.async === !0);
    he(
      () => n.modelValue,
      (Y) => {
        n.multiple && Array.isArray(Y) ? p.value = Y : v.value = Y;
      },
      { immediate: !0 }
    ), he(o, (Y) => {
      h.value && (Y.length < n.minSearchLength || a("search", Y));
    });
    const g = I(() => Array.isArray(n.groups) && n.groups.length > 0), y = I(() => {
      if (!g.value) return [];
      if (h.value) return n.groups;
      const Y = o.value.toLowerCase().trim();
      return n.groups.map((O) => ({
        ...O,
        options: Y ? O.options.filter((V) => V.label.toLowerCase().includes(Y)) : O.options
      })).filter((O) => O.options.length > 0);
    }), b = I(() => h.value || !o.value ? n.options : n.options.filter(
      (Y) => Y.label.toLowerCase().includes(o.value.toLowerCase())
    )), _ = I(
      () => g.value ? y.value.some((Y) => Y.options.length > 0) : b.value.length > 0
    );
    function C() {
      const Y = r.value?.querySelector("button, input");
      if (!Y) return;
      const O = Y.getBoundingClientRect();
      m.value = {
        position: "fixed",
        top: `${O.bottom + 4}px`,
        left: `${O.left}px`,
        width: `${O.width}px`,
        zIndex: "9999"
      };
    }
    function k() {
      i.value = !i.value, i.value && ge(() => {
        C(), n.searchable && ge(() => {
          const Y = d.value?.$el?.querySelector("input") || s.value?.querySelector("input");
          Y?.focus(), Y?.select();
        });
      });
    }
    function E(Y, O) {
      return Y.value === O.value && Y.groupKey === O.groupKey;
    }
    function N(Y) {
      if (n.multiple) {
        const O = p.value.find((V) => E(V, Y));
        p.value = O ? p.value.filter((V) => !E(V, Y)) : [...p.value, Y], a("update:modelValue", p.value);
      } else
        v.value = Y, a("update:modelValue", Y), i.value = !1;
    }
    function z(Y) {
      p.value = p.value.filter((O) => !E(O, Y)), a("update:modelValue", p.value);
    }
    function x(Y) {
      r.value?.contains(Y.target) || s.value?.contains(Y.target) || (i.value = !1);
    }
    function W(Y) {
      if (!i.value) return;
      const O = Y.target;
      if (!(s.value?.contains(O) || s.value === O)) {
        if (r.value?.contains(O) || r.value === O) {
          C();
          return;
        }
        C();
      }
    }
    return we(() => {
      document.addEventListener("click", x), document.addEventListener("scroll", W, { passive: !0, capture: !0 });
    }), Ae(() => {
      document.removeEventListener("click", x), document.removeEventListener("scroll", W, { capture: !0 });
    }), (Y, O) => (l(), c("div", {
      class: "fu-status-dropdown",
      ref_key: "dropdownRef",
      ref: r
    }, [
      t.label ? (l(), c("div", Uu, w(t.label), 1)) : A("", !0),
      t.variant === "button" ? (l(), c("div", Wu, [
        f("button", {
          class: X(["fu-status-dropdown__button", [`fu-input--${t.size}`, { "fu-input--error": t.error }]]),
          onClick: k
        }, [
          t.multiple ? (l(), c("div", Yu, [
            p.value.length ? (l(!0), c(L, { key: 0 }, oe(p.value, (V) => (l(), c("span", {
              key: V.value,
              class: "fu-tag"
            }, [
              V.type === "icon" ? (l(), Z(me(V.icon), {
                key: 0,
                size: "14"
              })) : V.type === "image" ? (l(), Z(qe, {
                key: 1,
                src: V.imageUrl,
                name: V.label,
                size: "xs"
              }, null, 8, ["src", "name"])) : A("", !0),
              de(" " + w(V.label) + " ", 1),
              f("span", {
                class: "fu-tag__remove",
                onClick: ue((H) => z(V), ["stop"])
              }, "×", 8, Gu)
            ]))), 128)) : (l(), c("span", qu, w(t.placeholder), 1))
          ])) : (l(), c("div", Ku, [
            v.value?.type === "icon" ? (l(), Z(me(v.value.icon), {
              key: 0,
              size: "16"
            })) : v.value?.type === "image" ? (l(), Z(qe, {
              key: 1,
              src: v.value.imageUrl,
              name: v.value.label,
              size: "xs"
            }, null, 8, ["src", "name"])) : A("", !0),
            f("span", null, w(v.value?.label || t.placeholder), 1)
          ])),
          O[2] || (O[2] = f("svg", {
            class: "fu-status-dropdown__chevron",
            viewBox: "0 0 20 20"
          }, [
            f("path", {
              d: "M6 8l4 4 4-4",
              stroke: "currentColor",
              "stroke-width": "1.5"
            })
          ], -1))
        ], 2)
      ])) : (l(), c("div", Qu, [
        Q(Oe, {
          size: t.size,
          readonly: "",
          variant: "outline",
          formWrapperWidth: t.formWrapperWidth,
          placeholder: v.value?.label || t.placeholder,
          onFocus: k,
          onClick: k
        }, null, 8, ["size", "formWrapperWidth", "placeholder"])
      ])),
      (l(), Z(Ee, { to: "body" }, [
        Q(Ve, { name: "fade" }, {
          default: ce(() => [
            i.value ? (l(), c("div", {
              key: 0,
              class: "fu-status-dropdown__menu",
              style: ie(m.value),
              ref_key: "menuRef",
              ref: s
            }, [
              t.searchable ? (l(), c("div", Zu, [
                Q(Oe, {
                  ref_key: "searchInputRef",
                  ref: d,
                  modelValue: o.value,
                  "onUpdate:modelValue": O[1] || (O[1] = (V) => o.value = V),
                  type: "text",
                  placeholder: t.searchPlaceholder,
                  size: t.size,
                  formWrapperWidth: "100%"
                }, {
                  right: ce(() => [
                    f("button", {
                      class: "fu-search-clear",
                      onClick: O[0] || (O[0] = (V) => o.value ? o.value = "" : i.value = !1)
                    }, " × ")
                  ]),
                  _: 1
                }, 8, ["modelValue", "placeholder", "size"])
              ])) : A("", !0),
              _.value ? (l(), c("div", Ju, [
                g.value ? (l(!0), c(L, { key: 0 }, oe(y.value, (V) => (l(), c(L, {
                  key: V.key
                }, [
                  f("div", Xu, w(V.label), 1),
                  (l(!0), c(L, null, oe(V.options, (H) => (l(), c("div", {
                    key: `${V.key}-${H.value}`,
                    class: "fu-status-dropdown__item",
                    onClick: (R) => N({ ...H, groupKey: V.key })
                  }, [
                    H.type === "icon" ? (l(), Z(me(H.icon), {
                      key: 0,
                      size: "16"
                    })) : H.type === "image" ? (l(), Z(qe, {
                      key: 1,
                      src: H.imageUrl,
                      name: H.label,
                      size: "xs"
                    }, null, 8, ["src", "name"])) : A("", !0),
                    f("div", tc, [
                      f("span", nc, w(H.label), 1),
                      t.meta && H[t.meta] ? (l(), c("span", ac, w(H[t.meta]), 1)) : A("", !0)
                    ])
                  ], 8, ec))), 128))
                ], 64))), 128)) : (l(!0), c(L, { key: 1 }, oe(b.value, (V) => (l(), c("div", {
                  key: V.value,
                  class: "fu-status-dropdown__item",
                  onClick: (H) => N(V)
                }, [
                  V.type === "icon" ? (l(), Z(me(V.icon), {
                    key: 0,
                    size: "16"
                  })) : V.type === "image" ? (l(), Z(qe, {
                    key: 1,
                    src: V.imageUrl,
                    name: V.label,
                    size: "xs"
                  }, null, 8, ["src", "name"])) : A("", !0),
                  f("div", oc, [
                    f("span", rc, w(V.label), 1),
                    t.meta && V[t.meta] ? (l(), c("span", sc, w(V[t.meta]), 1)) : A("", !0)
                  ])
                ], 8, ic))), 128)),
                f("div", {
                  class: "fu-status-dropdown__slot-actions",
                  ref_key: "actionsRef",
                  ref: u
                }, [
                  se(Y.$slots, "actions")
                ], 512)
              ])) : (l(), c("div", lc, w(t.noResultsText), 1))
            ], 4)) : A("", !0)
          ]),
          _: 3
        })
      ])),
      t.error ? (l(), c("span", uc, w(t.error), 1)) : A("", !0)
    ], 512));
  }
}), Fo = /* @__PURE__ */ ae(cc, [["__scopeId", "data-v-a70c8495"]]), dc = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Fo
}, Symbol.toStringTag, { value: "Module" })), fc = /* @__PURE__ */ le({
  __name: "FuAvatarGroup",
  props: {
    users: {},
    max: {},
    size: {}
  },
  emits: ["click"],
  setup(t) {
    const e = t, n = e.max ?? 3, a = e.users.slice(0, n), i = e.users.length - n;
    return (o, r) => (l(), c("div", {
      class: "fu-avatar-group",
      onClick: r[0] || (r[0] = (s) => o.$emit("click"))
    }, [
      (l(!0), c(L, null, oe(ee(a), (s, u) => (l(), Z(qe, {
        key: s.id || u,
        src: s.src,
        name: s.name,
        alt: s.alt,
        size: t.size
      }, null, 8, ["src", "name", "alt", "size"]))), 128)),
      i > 0 ? (l(), c("div", {
        key: 0,
        class: X(["fu-avatar fu-avatar--more", `fu-avatar--${t.size}`])
      }, " +" + w(i), 2)) : A("", !0)
    ]));
  }
}), mc = /* @__PURE__ */ ae(fc, [["__scopeId", "data-v-d339fd2f"]]), hc = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: mc
}, Symbol.toStringTag, { value: "Module" })), vc = /* @__PURE__ */ le({
  __name: "FusionBadge",
  props: {
    text: { default: "Badge" },
    size: { default: "md" },
    variant: { default: "solid" },
    themeClass: { default: "" }
  },
  setup(t) {
    return (e, n) => (l(), c("span", {
      class: X(["fu-badge", [`fu-badge--${t.variant}`, `fu-badge--${t.size}`, t.themeClass]])
    }, [
      se(e.$slots, "default", {}, () => [
        de(w(t.text), 1)
      ], !0)
    ], 2));
  }
}), pc = /* @__PURE__ */ ae(vc, [["__scopeId", "data-v-b42fd659"]]), gc = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: pc
}, Symbol.toStringTag, { value: "Module" })), yc = {
  key: 0,
  class: "fu-spinner"
}, bc = { key: 2 }, _c = { key: 3 }, Cc = /* @__PURE__ */ le({
  __name: "FusionButton",
  props: {
    text: { default: "Click Me" },
    disabled: { type: Boolean, default: !1 },
    size: { default: "sm" },
    variant: { default: "solid" },
    tooltip: { default: null },
    loading: { type: Boolean, default: !1 },
    loadingText: { default: null },
    link: { default: null },
    icon: { default: null },
    target: { default: "_parent" },
    buttonWidth: { default: "" }
  },
  emits: ["click"],
  setup(t) {
    const e = M(!1), n = M({});
    function a(o) {
      const r = o.currentTarget.getBoundingClientRect();
      n.value = {
        position: "fixed",
        left: `${r.left + r.width / 2}px`,
        top: `${r.top - 8}px`,
        transform: "translateX(-50%) translateY(-100%)",
        zIndex: "99999"
      }, e.value = !0;
    }
    function i() {
      e.value = !1;
    }
    return (o, r) => (l(), c("div", {
      class: X(["fu-btn-wrapper", { "has-tooltip": t.tooltip }]),
      style: ie(t.buttonWidth ? { width: t.buttonWidth } : {}),
      onMouseenter: a,
      onMouseleave: i
    }, [
      (l(), Z(me(t.link ? "a" : "button"), {
        class: X(["fu-btn", [`fu-btn--${t.variant}`, `fu-btn--${t.size}`, { "is-loading": t.loading }]]),
        href: t.link || void 0,
        target: t.link ? t.target : void 0,
        rel: t.link && t.target === "_blank" ? "noopener noreferrer" : void 0,
        disabled: !t.link && (t.disabled || t.loading),
        onClick: r[0] || (r[0] = (s) => !t.link && !t.loading ? o.$emit("click", s) : null),
        style: ie(t.buttonWidth ? { width: t.buttonWidth } : {})
      }, {
        default: ce(() => [
          t.loading ? (l(), c("span", yc)) : A("", !0),
          t.icon ? (l(), Z(me(t.icon), {
            key: 1,
            class: "fu-btn-icon",
            size: 16
          })) : A("", !0),
          t.loading ? (l(), c("span", bc, w(t.loadingText || "Loading..."), 1)) : (l(), c("span", _c, [
            se(o.$slots, "default", {}, () => [
              de(w(t.text), 1)
            ], !0)
          ]))
        ]),
        _: 3
      }, 8, ["class", "href", "target", "rel", "disabled", "style"])),
      (l(), Z(Ee, { to: "body" }, [
        t.tooltip && e.value ? (l(), c("span", {
          key: 0,
          class: "fu-btn-tooltip",
          style: ie(n.value)
        }, w(t.tooltip), 5)) : A("", !0)
      ]))
    ], 38));
  }
}), Se = /* @__PURE__ */ ae(Cc, [["__scopeId", "data-v-d6df7556"]]), wc = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Se
}, Symbol.toStringTag, { value: "Module" })), Ac = ["name", "value", "disabled", "checked", "aria-readonly"], kc = {
  class: "fu-button-tab__control",
  "aria-hidden": "true"
}, Sc = {
  key: 0,
  class: "fu-button-tab__dot"
}, Tc = { class: "fu-button-tab__content" }, Ec = {
  key: 0,
  class: "fu-button-tab__title"
}, Mc = {
  key: 1,
  class: "fu-button-tab__description"
}, Nc = /* @__PURE__ */ le({
  __name: "FusionButtonTab",
  props: {
    modelValue: {},
    value: {},
    title: { default: void 0 },
    description: { default: void 0 },
    name: { default: void 0 },
    size: { default: "md" },
    disabled: { type: Boolean, default: !1 },
    readonly: { type: Boolean, default: !1 },
    color: { default: void 0 }
  },
  emits: ["update:modelValue"],
  setup(t, { emit: e }) {
    const n = t, a = e, i = I(() => n.modelValue === n.value), o = I(
      () => n.color ? { "--fu-button-tab-accent": n.color } : {}
    );
    function r(u) {
      n.readonly && u.preventDefault();
    }
    function s() {
      n.readonly || a("update:modelValue", n.value);
    }
    return (u, d) => (l(), c("label", {
      class: X(["fu-button-tab", [
        `fu-button-tab--${t.size}`,
        {
          "is-checked": i.value,
          "is-disabled": t.disabled,
          "is-readonly": t.readonly
        }
      ]]),
      style: ie(o.value)
    }, [
      f("input", {
        type: "radio",
        class: "fu-button-tab__input",
        name: t.name,
        value: t.value,
        disabled: t.disabled,
        checked: i.value,
        "aria-readonly": t.readonly,
        onClick: r,
        onChange: s
      }, null, 40, Ac),
      f("span", kc, [
        i.value ? (l(), c("span", Sc)) : A("", !0)
      ]),
      f("span", Tc, [
        t.title || u.$slots.title ? (l(), c("span", Ec, [
          se(u.$slots, "title", {}, () => [
            de(w(t.title), 1)
          ], !0)
        ])) : A("", !0),
        t.description || u.$slots.description ? (l(), c("span", Mc, [
          se(u.$slots, "description", {}, () => [
            de(w(t.description), 1)
          ], !0)
        ])) : A("", !0),
        se(u.$slots, "default", {}, void 0, !0)
      ])
    ], 6));
  }
}), Dc = /* @__PURE__ */ ae(Nc, [["__scopeId", "data-v-c6dff9b5"]]), Ic = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Dc
}, Symbol.toStringTag, { value: "Module" })), Oc = { class: "fu-info-card__visual" }, Rc = ["src", "alt"], $c = { class: "fu-info-card__body" }, xc = { class: "fu-info-card__title" }, Pc = {
  key: 0,
  class: "fu-info-card__description"
}, Fc = /* @__PURE__ */ le({
  __name: "FusionInfoCard",
  props: {
    title: {},
    description: {},
    image: {},
    imageAlt: {},
    initial: {},
    color: { default: "#2563eb" },
    clickable: { type: Boolean, default: !0 }
  },
  emits: ["click"],
  setup(t, { emit: e }) {
    const n = t, a = e, i = I(() => n.initial ? n.initial.slice(0, 2).toUpperCase() : n.title?.trim().charAt(0).toUpperCase() || "?");
    function o() {
      n.clickable && a("click");
    }
    return (r, s) => (l(), Z(me(t.clickable ? "button" : "div"), {
      class: X(["fu-info-card", { "fu-info-card--clickable": t.clickable }]),
      type: t.clickable ? "button" : void 0,
      onClick: o
    }, {
      default: ce(() => [
        f("div", Oc, [
          t.image ? (l(), c("img", {
            key: 0,
            src: t.image,
            alt: t.imageAlt || t.title,
            class: "fu-info-card__image"
          }, null, 8, Rc)) : (l(), c("div", {
            key: 1,
            class: "fu-info-card__initial",
            style: ie({ background: t.color })
          }, w(i.value), 5))
        ]),
        f("div", $c, [
          f("span", xc, w(t.title), 1),
          t.description ? (l(), c("span", Pc, w(t.description), 1)) : A("", !0)
        ]),
        r.$slots.actions ? (l(), c("div", {
          key: 0,
          class: "fu-info-card__actions",
          onClick: s[0] || (s[0] = ue(() => {
          }, ["stop"]))
        }, [
          se(r.$slots, "actions", {}, void 0, !0)
        ])) : A("", !0)
      ]),
      _: 3
    }, 8, ["class", "type"]));
  }
}), Bo = /* @__PURE__ */ ae(Fc, [["__scopeId", "data-v-eb7005af"]]), Bc = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Bo
}, Symbol.toStringTag, { value: "Module" })), zc = {
  key: 0,
  class: "icon-box"
}, Lc = { class: "content" }, Vc = { class: "value" }, Hc = { class: "subtitle" }, jc = {
  key: 0,
  class: "caption"
}, Uc = { class: "title" }, Wc = { class: "value" }, Yc = {
  key: 0,
  class: "caption"
}, Gc = /* @__PURE__ */ le({
  __name: "FusionStatCard",
  props: {
    variant: { default: "icon-left" },
    title: {},
    value: { default: "" },
    subtitle: { default: "" },
    icon: { type: [Function, Object, String, null], default: null },
    bordered: { type: Boolean, default: !0 },
    shadow: { type: Boolean, default: !1 },
    loading: { type: Boolean, default: !1 }
  },
  setup(t) {
    return (e, n) => (l(), c("div", {
      class: X(["fu-stat-card", [
        `variant-${t.variant}`,
        t.bordered ? "bordered" : "",
        t.shadow ? "shadow" : "",
        t.loading ? "is-loading" : ""
      ]])
    }, [
      t.loading ? (l(), c(L, { key: 0 }, [
        t.variant === "icon-left" ? (l(), c(L, { key: 0 }, [
          n[0] || (n[0] = Cn('<div class="skeleton-icon" data-v-5fd69633></div><div class="skeleton-content" data-v-5fd69633><div class="skeleton-line skeleton-value" data-v-5fd69633></div><div class="skeleton-line skeleton-subtitle" data-v-5fd69633></div><div class="skeleton-line skeleton-caption" data-v-5fd69633></div></div>', 2))
        ], 64)) : (l(), c(L, { key: 1 }, [
          n[1] || (n[1] = f("div", { class: "skeleton-line skeleton-title" }, null, -1)),
          n[2] || (n[2] = f("div", { class: "skeleton-line skeleton-value--lg" }, null, -1)),
          n[3] || (n[3] = f("div", { class: "skeleton-line skeleton-caption" }, null, -1))
        ], 64))
      ], 64)) : t.variant === "icon-left" ? (l(), c(L, { key: 1 }, [
        t.icon ? (l(), c("div", zc, [
          (l(), Z(me(t.icon), { class: "fu-icon" }))
        ])) : A("", !0),
        f("div", Lc, [
          f("div", Vc, w(t.value), 1),
          f("div", Hc, w(t.title), 1),
          t.subtitle ? (l(), c("div", jc, w(t.subtitle), 1)) : A("", !0)
        ])
      ], 64)) : (l(), c(L, { key: 2 }, [
        f("div", Uc, w(t.title), 1),
        f("div", Wc, w(t.value), 1),
        t.subtitle ? (l(), c("div", Yc, w(t.subtitle), 1)) : A("", !0)
      ], 64))
    ], 2));
  }
}), qc = /* @__PURE__ */ ae(Gc, [["__scopeId", "data-v-5fd69633"]]), Kc = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: qc
}, Symbol.toStringTag, { value: "Module" })), Qc = ["for"], Zc = ["id", "checked", "disabled"], Jc = {
  key: 0,
  class: "fu-checkbox__label"
}, Xc = /* @__PURE__ */ le({
  __name: "FusionCheckbox",
  props: {
    modelValue: { type: Boolean, default: !1 },
    label: {},
    id: {},
    size: { default: "md" },
    disabled: { type: Boolean }
  },
  emits: ["update:modelValue"],
  setup(t) {
    return (e, n) => (l(), c("label", {
      class: X(["fu-checkbox", [`fu-checkbox--${t.size}`, { "fu-checkbox--disabled": t.disabled }]]),
      for: t.id
    }, [
      f("input", {
        type: "checkbox",
        class: "fu-checkbox__input",
        id: t.id,
        checked: t.modelValue,
        disabled: t.disabled,
        onChange: n[0] || (n[0] = (a) => e.$emit("update:modelValue", a.target.checked))
      }, null, 40, Zc),
      n[1] || (n[1] = f("span", { class: "fu-checkbox__box" }, null, -1)),
      t.label ? (l(), c("span", Jc, w(t.label), 1)) : A("", !0)
    ], 10, Qc));
  }
}), ut = /* @__PURE__ */ ae(Xc, [["__scopeId", "data-v-42f5b26b"]]), ed = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: ut
}, Symbol.toStringTag, { value: "Module" })), td = {
  key: 0,
  class: "fu-input-label"
}, nd = {
  key: 0,
  class: "fu-input-required"
}, ad = ["onUpdate:modelValue", "onInput", "onKeydown", "disabled"], id = {
  key: 1,
  class: "fu-input-error"
}, od = /* @__PURE__ */ le({
  __name: "FusionCodeInput",
  props: {
    modelValue: { default: "" },
    label: { default: "" },
    length: { default: 6 },
    size: { default: "md" },
    variant: { default: "outline" },
    disabled: { type: Boolean, default: !1 },
    error: { default: null },
    required: { type: Boolean, default: !1 },
    formWrapperWidth: { default: "fit-content" }
  },
  emits: ["update:modelValue"],
  setup(t, { emit: e }) {
    const n = t, a = e, i = M(Array(n.length).fill("")), o = M([]);
    he(
      () => n.modelValue,
      (d) => {
        if (!d) {
          i.value = Array(n.length).fill("");
          return;
        }
        const m = d.split("").slice(0, n.length);
        for (; m.length < n.length; ) m.push("");
        i.value = m;
      },
      { immediate: !0 }
    ), he(
      i,
      () => {
        a("update:modelValue", i.value.join(""));
      },
      { deep: !0 }
    );
    function r(d, m) {
      const p = m.target.value.replace(/\D/g, "");
      i.value[d] = p, p && d < n.length - 1 && ge(() => o.value[d + 1]?.focus());
    }
    function s(d) {
      !i.value[d] && d > 0 && ge(() => o.value[d - 1]?.focus());
    }
    function u(d) {
      d.preventDefault();
      const v = (d.clipboardData?.getData("text") || "").replace(/\D/g, "").slice(0, n.length).split("");
      if (v.length !== 0) {
        v.forEach((p, h) => {
          i.value[h] = p;
        });
        for (let p = v.length; p < n.length; p++)
          i.value[p] = "";
        ge(() => {
          const p = Math.min(v.length - 1, n.length - 1);
          o.value[p]?.focus();
        });
      }
    }
    return (d, m) => (l(), c("div", {
      class: "fu-input-wrapper",
      style: ie({ width: t.formWrapperWidth })
    }, [
      t.label ? (l(), c("label", td, [
        de(w(t.label) + " ", 1),
        t.required ? (l(), c("span", nd, "*")) : A("", !0)
      ])) : A("", !0),
      f("div", {
        class: X(["fu-code-container", [`fu-input--${t.size}`, `fu-input--${t.variant}`, { "fu-input--error": t.error }]])
      }, [
        (l(!0), c(L, null, oe(i.value, (v, p) => je((l(), c("input", {
          key: p,
          ref_for: !0,
          ref: (h) => o.value[p] = h,
          type: "text",
          maxlength: "1",
          inputmode: "numeric",
          pattern: "[0-9]*",
          class: "fu-code-box fu-input-container",
          "onUpdate:modelValue": (h) => i.value[p] = h,
          onInput: (h) => r(p, h),
          onKeydown: $e((h) => s(p), ["backspace"]),
          onPaste: u,
          disabled: t.disabled
        }, null, 40, ad)), [
          [tt, i.value[p]]
        ])), 128))
      ], 2),
      t.error ? (l(), c("span", id, w(t.error), 1)) : A("", !0)
    ], 4));
  }
}), rd = /* @__PURE__ */ ae(od, [["__scopeId", "data-v-aa788ef2"]]), sd = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: rd
}, Symbol.toStringTag, { value: "Module" })), ld = ["onKeydown"], ud = { class: "fu-controls" }, cd = { class: "fu-sliders" }, dd = ["value"], fd = /* @__PURE__ */ le({
  __name: "FuColorPopover",
  props: {
    modelValue: {},
    size: {}
  },
  emits: ["update:modelValue"],
  setup(t, { emit: e }) {
    const n = t, a = e, i = I(() => n.size ?? "md"), o = M(!1), r = M(null), s = M({ top: "0px", left: "0px" });
    function u() {
      o.value = !o.value, o.value && ge(d);
    }
    function d() {
      if (!r.value) return;
      const T = r.value.getBoundingClientRect(), D = 260, $ = 320, F = 8;
      let K = T.bottom + 6, B = T.left, j = "top left";
      B + D > window.innerWidth - F && (B = T.right - D, j = "top right"), B = Math.max(F, B), K + $ > window.innerHeight - F && (K = T.top - $ - 6, j = j.includes("right") ? "bottom right" : "bottom left"), K = Math.max(F, K), s.value = {
        top: `${K + window.scrollY}px`,
        left: `${B + window.scrollX}px`,
        transformOrigin: j
      };
    }
    function m(T) {
      if (!o.value) return;
      const D = T.target;
      r.value?.contains(D) || D.closest(".fu-color-popover") || (o.value = !1);
    }
    we(() => {
      window.addEventListener("mousedown", m), window.addEventListener("resize", d), n.modelValue && (y.value = n.modelValue, Y(n.modelValue));
    }), Ae(() => {
      window.removeEventListener("mousedown", m), window.removeEventListener("resize", d);
    });
    const v = M("hex"), p = M(0), h = M(100), g = M(100), y = M(""), b = M(!1);
    function _(T, D, $) {
      D /= 100, $ /= 100;
      const F = $ * D, K = F * (1 - Math.abs(T / 60 % 2 - 1)), B = $ - F;
      let j = 0, S = 0, P = 0;
      return T < 60 ? [j, S, P] = [F, K, 0] : T < 120 ? [j, S, P] = [K, F, 0] : T < 180 ? [j, S, P] = [0, F, K] : T < 240 ? [j, S, P] = [0, K, F] : T < 300 ? [j, S, P] = [K, 0, F] : [j, S, P] = [F, 0, K], {
        r: Math.round((j + B) * 255),
        g: Math.round((S + B) * 255),
        b: Math.round((P + B) * 255)
      };
    }
    function C(T, D, $) {
      T /= 255, D /= 255, $ /= 255;
      const F = Math.max(T, D, $), K = Math.min(T, D, $), B = F - K;
      let j = 0;
      return B && (F === T ? j = (D - $) / B % 6 : F === D ? j = ($ - T) / B + 2 : j = (T - D) / B + 4, j *= 60, j < 0 && (j += 360)), {
        h: Math.round(j),
        s: Math.round((F === 0 ? 0 : B / F) * 100),
        v: Math.round(F * 100)
      };
    }
    function k(T, D, $) {
      return "#" + [T, D, $].map((F) => F.toString(16).padStart(2, "0")).join("").toUpperCase();
    }
    function E(T, D, $) {
      return `rgb(${T}, ${D}, ${$})`;
    }
    const N = I(() => _(p.value, h.value, g.value)), z = I(() => k(N.value.r, N.value.g, N.value.b)), x = I(() => ({
      background: `linear-gradient(to top, black, transparent), linear-gradient(to right, white, hsl(${p.value}, 100%, 50%))`
    }));
    function W() {
      const { r: T, g: D, b: $ } = N.value;
      a(
        "update:modelValue",
        v.value === "rgb" ? E(T, D, $) : z.value
      );
    }
    function Y(T) {
      const D = T.trim().replace(/;$/, "");
      let $ = null;
      /^#([0-9a-f]{6})$/i.test(D) && (v.value = "hex", $ = {
        r: parseInt(D.slice(1, 3), 16),
        g: parseInt(D.slice(3, 5), 16),
        b: parseInt(D.slice(5, 7), 16)
      });
      const F = D.match(/^rgba?\((\d{1,3}),\s*(\d{1,3}),\s*(\d{1,3})/);
      if (F && (v.value = "rgb", $ = { r: +F[1], g: +F[2], b: +F[3] }), !$) return;
      const K = C($.r, $.g, $.b);
      p.value = K.h, h.value = K.s, g.value = K.v, W();
    }
    function O(T) {
      b.value = !0, y.value = T.target.value;
    }
    function V() {
      b.value = !1, Y(y.value);
    }
    function H(T) {
      T.key === "Enter" && V();
    }
    function R(T) {
      v.value = "hex";
      const $ = T.currentTarget.getBoundingClientRect();
      h.value = Math.round(
        Math.min(Math.max(0, T.clientX - $.left), $.width) / $.width * 100
      ), g.value = Math.round(
        100 - Math.min(Math.max(0, T.clientY - $.top), $.height) / $.height * 100
      ), W();
    }
    return he(
      () => n.modelValue,
      (T) => {
        T && (y.value = T, Y(T));
      }
    ), (T, D) => (l(), c(L, null, [
      f("div", {
        ref_key: "triggerRef",
        ref: r,
        class: X(["fu-color-trigger", `fu-color-trigger--${i.value}`]),
        style: ie({ backgroundColor: z.value }),
        role: "button",
        tabindex: "0",
        onClick: u,
        onKeydown: [
          $e(ue(u, ["prevent"]), ["enter"]),
          $e(ue(u, ["prevent"]), ["space"])
        ]
      }, [
        se(T.$slots, "trigger", {}, void 0, !0)
      ], 46, ld),
      (l(), Z(Ee, { to: "body" }, [
        o.value ? (l(), c("div", {
          key: 0,
          class: "fu-color-popover",
          style: ie(s.value)
        }, [
          f("div", {
            class: "fu-saturation",
            style: ie(x.value),
            onPointerdown: R,
            onPointermove: D[0] || (D[0] = ($) => $.buttons === 1 && R($))
          }, [
            f("div", {
              class: "fu-cursor",
              style: ie({ left: h.value + "%", top: 100 - g.value + "%" })
            }, null, 4)
          ], 36),
          f("div", ud, [
            f("div", {
              class: "fu-preview",
              style: ie({ backgroundColor: z.value })
            }, null, 4),
            f("div", cd, [
              je(f("input", {
                type: "range",
                min: "0",
                max: "360",
                "onUpdate:modelValue": D[1] || (D[1] = ($) => p.value = $),
                class: "fu-hue"
              }, null, 512), [
                [tt, p.value]
              ])
            ])
          ]),
          f("input", {
            class: "fu-output",
            value: y.value,
            onInput: O,
            onBlur: V,
            onKeydown: H,
            placeholder: "#RRGGBB or rgb(...)"
          }, null, 40, dd)
        ], 4)) : A("", !0)
      ]))
    ], 64));
  }
}), md = /* @__PURE__ */ ae(fd, [["__scopeId", "data-v-40795315"]]), hd = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: md
}, Symbol.toStringTag, { value: "Module" })), vd = { class: "fu-combobox__control" }, pd = ["value", "placeholder", "disabled"], gd = {
  key: 0,
  class: "fu-combobox__dropdown scrollbar__control customScrollBar"
}, yd = { class: "fu-combobox__group-title" }, bd = ["onClick"], _d = { class: "fu-combobox__option-left" }, Cd = { class: "fu-combobox__option-right" }, wd = {
  key: 1,
  class: "fu-combobox__empty"
}, Ad = /* @__PURE__ */ le({
  __name: "FuCombobox",
  props: {
    options: {},
    modelValue: {},
    placeholder: {},
    disabled: { type: Boolean }
  },
  emits: ["update:modelValue"],
  setup(t, { emit: e }) {
    const n = t, a = e, i = M(!1), o = M(""), r = M(null), s = M(null), u = I(() => {
      if (!o.value || r.value && o.value.toLowerCase() === r.value.label.toLowerCase())
        return d(n.options);
      const g = n.options.filter(
        (y) => y.label.toLowerCase().includes(o.value.toLowerCase())
      );
      return d(g);
    });
    function d(g) {
      const y = {};
      return g.forEach((b) => {
        const _ = b.group || "Options";
        y[_] || (y[_] = []), y[_].push(b);
      }), Object.entries(y).map(([b, _]) => ({ title: b, items: _ }));
    }
    he(
      () => n.modelValue,
      (g) => {
        r.value = n.options.find((y) => y.value === g) || null, !i.value && r.value && (o.value = r.value.label);
      },
      { immediate: !0 }
    );
    function m(g) {
      o.value = g.target.value;
    }
    function v(g) {
      r.value = g, o.value = g.label, a("update:modelValue", g.value), i.value = !1;
    }
    function p() {
      i.value = !i.value;
    }
    function h(g) {
      s.value && !s.value.contains(g.target) && (i.value = !1, r.value && (o.value = r.value.label));
    }
    return we(() => {
      document.addEventListener("click", h);
    }), Ae(() => {
      document.removeEventListener("click", h);
    }), (g, y) => (l(), c("div", {
      class: X(["fu-combobox", { "fu-combobox--disabled": t.disabled }]),
      ref_key: "comboboxRef",
      ref: s
    }, [
      f("div", vd, [
        f("input", {
          type: "text",
          value: i.value ? o.value : r.value?.label || "",
          placeholder: t.placeholder,
          class: "fu-combobox__input",
          disabled: t.disabled,
          onInput: m,
          onFocus: y[0] || (y[0] = (b) => !t.disabled && (i.value = !0))
        }, null, 40, pd),
        f("span", {
          class: "fu-combobox__icon",
          onClick: ue(p, ["stop"])
        }, [
          Q(ee(xe), {
            size: 18,
            "stroke-width": 1
          })
        ])
      ]),
      i.value && !t.disabled ? (l(), c("div", gd, [
        u.value.length > 0 ? (l(!0), c(L, { key: 0 }, oe(u.value, (b) => (l(), c("div", {
          key: b.title,
          class: "fu-combobox__group"
        }, [
          f("div", yd, w(b.title), 1),
          (l(!0), c(L, null, oe(b.items, (_) => (l(), c("div", {
            key: _.value,
            class: X(["fu-combobox__option", {
              "fu-combobox__option--selected": _.value === r.value?.value
            }]),
            onClick: (C) => v(_)
          }, [
            f("div", _d, [
              se(g.$slots, "option", { option: _ }, () => [
                _.icon ? (l(), Z(me(_.icon), {
                  key: 0,
                  class: "fu-combobox__option-icon"
                })) : A("", !0),
                f("span", null, w(_.label), 1)
              ], !0)
            ]),
            f("div", Cd, [
              _.value === r.value?.value ? (l(), Z(ee(Pn), {
                key: 0,
                class: "fu-combobox__check"
              })) : A("", !0)
            ])
          ], 10, bd))), 128))
        ]))), 128)) : (l(), c("div", wd, "No results found"))
      ])) : A("", !0)
    ], 2));
  }
}), kd = /* @__PURE__ */ ae(Ad, [["__scopeId", "data-v-e8069cc4"]]), Sd = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: kd
}, Symbol.toStringTag, { value: "Module" }));
function zo(t) {
  return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t;
}
var hn = { exports: {} }, Td = hn.exports, mi;
function Ed() {
  return mi || (mi = 1, (function(t, e) {
    (function(n, a) {
      t.exports = a();
    })(Td, (function() {
      var n = 1e3, a = 6e4, i = 36e5, o = "millisecond", r = "second", s = "minute", u = "hour", d = "day", m = "week", v = "month", p = "quarter", h = "year", g = "date", y = "Invalid Date", b = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/, _ = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g, C = { name: "en", weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"), ordinal: function(T) {
        var D = ["th", "st", "nd", "rd"], $ = T % 100;
        return "[" + T + (D[($ - 20) % 10] || D[$] || D[0]) + "]";
      } }, k = function(T, D, $) {
        var F = String(T);
        return !F || F.length >= D ? T : "" + Array(D + 1 - F.length).join($) + T;
      }, E = { s: k, z: function(T) {
        var D = -T.utcOffset(), $ = Math.abs(D), F = Math.floor($ / 60), K = $ % 60;
        return (D <= 0 ? "+" : "-") + k(F, 2, "0") + ":" + k(K, 2, "0");
      }, m: function T(D, $) {
        if (D.date() < $.date()) return -T($, D);
        var F = 12 * ($.year() - D.year()) + ($.month() - D.month()), K = D.clone().add(F, v), B = $ - K < 0, j = D.clone().add(F + (B ? -1 : 1), v);
        return +(-(F + ($ - K) / (B ? K - j : j - K)) || 0);
      }, a: function(T) {
        return T < 0 ? Math.ceil(T) || 0 : Math.floor(T);
      }, p: function(T) {
        return { M: v, y: h, w: m, d, D: g, h: u, m: s, s: r, ms: o, Q: p }[T] || String(T || "").toLowerCase().replace(/s$/, "");
      }, u: function(T) {
        return T === void 0;
      } }, N = "en", z = {};
      z[N] = C;
      var x = "$isDayjsObject", W = function(T) {
        return T instanceof H || !(!T || !T[x]);
      }, Y = function T(D, $, F) {
        var K;
        if (!D) return N;
        if (typeof D == "string") {
          var B = D.toLowerCase();
          z[B] && (K = B), $ && (z[B] = $, K = B);
          var j = D.split("-");
          if (!K && j.length > 1) return T(j[0]);
        } else {
          var S = D.name;
          z[S] = D, K = S;
        }
        return !F && K && (N = K), K || !F && N;
      }, O = function(T, D) {
        if (W(T)) return T.clone();
        var $ = typeof D == "object" ? D : {};
        return $.date = T, $.args = arguments, new H($);
      }, V = E;
      V.l = Y, V.i = W, V.w = function(T, D) {
        return O(T, { locale: D.$L, utc: D.$u, x: D.$x, $offset: D.$offset });
      };
      var H = (function() {
        function T($) {
          this.$L = Y($.locale, null, !0), this.parse($), this.$x = this.$x || $.x || {}, this[x] = !0;
        }
        var D = T.prototype;
        return D.parse = function($) {
          this.$d = (function(F) {
            var K = F.date, B = F.utc;
            if (K === null) return /* @__PURE__ */ new Date(NaN);
            if (V.u(K)) return /* @__PURE__ */ new Date();
            if (K instanceof Date) return new Date(K);
            if (typeof K == "string" && !/Z$/i.test(K)) {
              var j = K.match(b);
              if (j) {
                var S = j[2] - 1 || 0, P = (j[7] || "0").substring(0, 3);
                return B ? new Date(Date.UTC(j[1], S, j[3] || 1, j[4] || 0, j[5] || 0, j[6] || 0, P)) : new Date(j[1], S, j[3] || 1, j[4] || 0, j[5] || 0, j[6] || 0, P);
              }
            }
            return new Date(K);
          })($), this.init();
        }, D.init = function() {
          var $ = this.$d;
          this.$y = $.getFullYear(), this.$M = $.getMonth(), this.$D = $.getDate(), this.$W = $.getDay(), this.$H = $.getHours(), this.$m = $.getMinutes(), this.$s = $.getSeconds(), this.$ms = $.getMilliseconds();
        }, D.$utils = function() {
          return V;
        }, D.isValid = function() {
          return this.$d.toString() !== y;
        }, D.isSame = function($, F) {
          var K = O($);
          return this.startOf(F) <= K && K <= this.endOf(F);
        }, D.isAfter = function($, F) {
          return O($) < this.startOf(F);
        }, D.isBefore = function($, F) {
          return this.endOf(F) < O($);
        }, D.$g = function($, F, K) {
          return V.u($) ? this[F] : this.set(K, $);
        }, D.unix = function() {
          return Math.floor(this.valueOf() / 1e3);
        }, D.valueOf = function() {
          return this.$d.getTime();
        }, D.startOf = function($, F) {
          var K = this, B = !!V.u(F) || F, j = V.p($), S = function(Me, U) {
            var ne = V.w(K.$u ? Date.UTC(K.$y, U, Me) : new Date(K.$y, U, Me), K);
            return B ? ne : ne.endOf(d);
          }, P = function(Me, U) {
            return V.w(K.toDate()[Me].apply(K.toDate("s"), (B ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(U)), K);
          }, J = this.$W, te = this.$M, be = this.$D, Te = "set" + (this.$u ? "UTC" : "");
          switch (j) {
            case h:
              return B ? S(1, 0) : S(31, 11);
            case v:
              return B ? S(1, te) : S(0, te + 1);
            case m:
              var _e = this.$locale().weekStart || 0, Fe = (J < _e ? J + 7 : J) - _e;
              return S(B ? be - Fe : be + (6 - Fe), te);
            case d:
            case g:
              return P(Te + "Hours", 0);
            case u:
              return P(Te + "Minutes", 1);
            case s:
              return P(Te + "Seconds", 2);
            case r:
              return P(Te + "Milliseconds", 3);
            default:
              return this.clone();
          }
        }, D.endOf = function($) {
          return this.startOf($, !1);
        }, D.$set = function($, F) {
          var K, B = V.p($), j = "set" + (this.$u ? "UTC" : ""), S = (K = {}, K[d] = j + "Date", K[g] = j + "Date", K[v] = j + "Month", K[h] = j + "FullYear", K[u] = j + "Hours", K[s] = j + "Minutes", K[r] = j + "Seconds", K[o] = j + "Milliseconds", K)[B], P = B === d ? this.$D + (F - this.$W) : F;
          if (B === v || B === h) {
            var J = this.clone().set(g, 1);
            J.$d[S](P), J.init(), this.$d = J.set(g, Math.min(this.$D, J.daysInMonth())).$d;
          } else S && this.$d[S](P);
          return this.init(), this;
        }, D.set = function($, F) {
          return this.clone().$set($, F);
        }, D.get = function($) {
          return this[V.p($)]();
        }, D.add = function($, F) {
          var K, B = this;
          $ = Number($);
          var j = V.p(F), S = function(te) {
            var be = O(B);
            return V.w(be.date(be.date() + Math.round(te * $)), B);
          };
          if (j === v) return this.set(v, this.$M + $);
          if (j === h) return this.set(h, this.$y + $);
          if (j === d) return S(1);
          if (j === m) return S(7);
          var P = (K = {}, K[s] = a, K[u] = i, K[r] = n, K)[j] || 1, J = this.$d.getTime() + $ * P;
          return V.w(J, this);
        }, D.subtract = function($, F) {
          return this.add(-1 * $, F);
        }, D.format = function($) {
          var F = this, K = this.$locale();
          if (!this.isValid()) return K.invalidDate || y;
          var B = $ || "YYYY-MM-DDTHH:mm:ssZ", j = V.z(this), S = this.$H, P = this.$m, J = this.$M, te = K.weekdays, be = K.months, Te = K.meridiem, _e = function(U, ne, re, pe) {
            return U && (U[ne] || U(F, B)) || re[ne].slice(0, pe);
          }, Fe = function(U) {
            return V.s(S % 12 || 12, U, "0");
          }, Me = Te || function(U, ne, re) {
            var pe = U < 12 ? "AM" : "PM";
            return re ? pe.toLowerCase() : pe;
          };
          return B.replace(_, (function(U, ne) {
            return ne || (function(re) {
              switch (re) {
                case "YY":
                  return String(F.$y).slice(-2);
                case "YYYY":
                  return V.s(F.$y, 4, "0");
                case "M":
                  return J + 1;
                case "MM":
                  return V.s(J + 1, 2, "0");
                case "MMM":
                  return _e(K.monthsShort, J, be, 3);
                case "MMMM":
                  return _e(be, J);
                case "D":
                  return F.$D;
                case "DD":
                  return V.s(F.$D, 2, "0");
                case "d":
                  return String(F.$W);
                case "dd":
                  return _e(K.weekdaysMin, F.$W, te, 2);
                case "ddd":
                  return _e(K.weekdaysShort, F.$W, te, 3);
                case "dddd":
                  return te[F.$W];
                case "H":
                  return String(S);
                case "HH":
                  return V.s(S, 2, "0");
                case "h":
                  return Fe(1);
                case "hh":
                  return Fe(2);
                case "a":
                  return Me(S, P, !0);
                case "A":
                  return Me(S, P, !1);
                case "m":
                  return String(P);
                case "mm":
                  return V.s(P, 2, "0");
                case "s":
                  return String(F.$s);
                case "ss":
                  return V.s(F.$s, 2, "0");
                case "SSS":
                  return V.s(F.$ms, 3, "0");
                case "Z":
                  return j;
              }
              return null;
            })(U) || j.replace(":", "");
          }));
        }, D.utcOffset = function() {
          return 15 * -Math.round(this.$d.getTimezoneOffset() / 15);
        }, D.diff = function($, F, K) {
          var B, j = this, S = V.p(F), P = O($), J = (P.utcOffset() - this.utcOffset()) * a, te = this - P, be = function() {
            return V.m(j, P);
          };
          switch (S) {
            case h:
              B = be() / 12;
              break;
            case v:
              B = be();
              break;
            case p:
              B = be() / 3;
              break;
            case m:
              B = (te - J) / 6048e5;
              break;
            case d:
              B = (te - J) / 864e5;
              break;
            case u:
              B = te / i;
              break;
            case s:
              B = te / a;
              break;
            case r:
              B = te / n;
              break;
            default:
              B = te;
          }
          return K ? B : V.a(B);
        }, D.daysInMonth = function() {
          return this.endOf(v).$D;
        }, D.$locale = function() {
          return z[this.$L];
        }, D.locale = function($, F) {
          if (!$) return this.$L;
          var K = this.clone(), B = Y($, F, !0);
          return B && (K.$L = B), K;
        }, D.clone = function() {
          return V.w(this.$d, this);
        }, D.toDate = function() {
          return new Date(this.valueOf());
        }, D.toJSON = function() {
          return this.isValid() ? this.toISOString() : null;
        }, D.toISOString = function() {
          return this.$d.toISOString();
        }, D.toString = function() {
          return this.$d.toUTCString();
        }, T;
      })(), R = H.prototype;
      return O.prototype = R, [["$ms", o], ["$s", r], ["$m", s], ["$H", u], ["$W", d], ["$M", v], ["$y", h], ["$D", g]].forEach((function(T) {
        R[T[1]] = function(D) {
          return this.$g(D, T[0], T[1]);
        };
      })), O.extend = function(T, D) {
        return T.$i || (T(D, H, O), T.$i = !0), O;
      }, O.locale = Y, O.isDayjs = W, O.unix = function(T) {
        return O(1e3 * T);
      }, O.en = z[N], O.Ls = z, O.p = {}, O;
    }));
  })(hn)), hn.exports;
}
var Md = Ed();
const ye = /* @__PURE__ */ zo(Md);
var vn = { exports: {} }, Nd = vn.exports, hi;
function Dd() {
  return hi || (hi = 1, (function(t, e) {
    (function(n, a) {
      t.exports = a();
    })(Nd, (function() {
      var n = { LTS: "h:mm:ss A", LT: "h:mm A", L: "MM/DD/YYYY", LL: "MMMM D, YYYY", LLL: "MMMM D, YYYY h:mm A", LLLL: "dddd, MMMM D, YYYY h:mm A" }, a = /(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|Q|YYYY|YY?|ww?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g, i = /\d/, o = /\d\d/, r = /\d\d?/, s = /\d*[^-_:/,()\s\d]+/, u = {}, d = function(b) {
        return (b = +b) + (b > 68 ? 1900 : 2e3);
      }, m = function(b) {
        return function(_) {
          this[b] = +_;
        };
      }, v = [/[+-]\d\d:?(\d\d)?|Z/, function(b) {
        (this.zone || (this.zone = {})).offset = (function(_) {
          if (!_ || _ === "Z") return 0;
          var C = _.match(/([+-]|\d\d)/g), k = 60 * C[1] + (+C[2] || 0);
          return k === 0 ? 0 : C[0] === "+" ? -k : k;
        })(b);
      }], p = function(b) {
        var _ = u[b];
        return _ && (_.indexOf ? _ : _.s.concat(_.f));
      }, h = function(b, _) {
        var C, k = u.meridiem;
        if (k) {
          for (var E = 1; E <= 24; E += 1) if (b.indexOf(k(E, 0, _)) > -1) {
            C = E > 12;
            break;
          }
        } else C = b === (_ ? "pm" : "PM");
        return C;
      }, g = { A: [s, function(b) {
        this.afternoon = h(b, !1);
      }], a: [s, function(b) {
        this.afternoon = h(b, !0);
      }], Q: [i, function(b) {
        this.month = 3 * (b - 1) + 1;
      }], S: [i, function(b) {
        this.milliseconds = 100 * +b;
      }], SS: [o, function(b) {
        this.milliseconds = 10 * +b;
      }], SSS: [/\d{3}/, function(b) {
        this.milliseconds = +b;
      }], s: [r, m("seconds")], ss: [r, m("seconds")], m: [r, m("minutes")], mm: [r, m("minutes")], H: [r, m("hours")], h: [r, m("hours")], HH: [r, m("hours")], hh: [r, m("hours")], D: [r, m("day")], DD: [o, m("day")], Do: [s, function(b) {
        var _ = u.ordinal, C = b.match(/\d+/);
        if (this.day = C[0], _) for (var k = 1; k <= 31; k += 1) _(k).replace(/\[|\]/g, "") === b && (this.day = k);
      }], w: [r, m("week")], ww: [o, m("week")], M: [r, m("month")], MM: [o, m("month")], MMM: [s, function(b) {
        var _ = p("months"), C = (p("monthsShort") || _.map((function(k) {
          return k.slice(0, 3);
        }))).indexOf(b) + 1;
        if (C < 1) throw new Error();
        this.month = C % 12 || C;
      }], MMMM: [s, function(b) {
        var _ = p("months").indexOf(b) + 1;
        if (_ < 1) throw new Error();
        this.month = _ % 12 || _;
      }], Y: [/[+-]?\d+/, m("year")], YY: [o, function(b) {
        this.year = d(b);
      }], YYYY: [/\d{4}/, m("year")], Z: v, ZZ: v };
      function y(b) {
        var _, C;
        _ = b, C = u && u.formats;
        for (var k = (b = _.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g, (function(O, V, H) {
          var R = H && H.toUpperCase();
          return V || C[H] || n[H] || C[R].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g, (function(T, D, $) {
            return D || $.slice(1);
          }));
        }))).match(a), E = k.length, N = 0; N < E; N += 1) {
          var z = k[N], x = g[z], W = x && x[0], Y = x && x[1];
          k[N] = Y ? { regex: W, parser: Y } : z.replace(/^\[|\]$/g, "");
        }
        return function(O) {
          for (var V = {}, H = 0, R = 0; H < E; H += 1) {
            var T = k[H];
            if (typeof T == "string") R += T.length;
            else {
              var D = T.regex, $ = T.parser, F = O.slice(R), K = D.exec(F)[0];
              $.call(V, K), O = O.replace(K, "");
            }
          }
          return (function(B) {
            var j = B.afternoon;
            if (j !== void 0) {
              var S = B.hours;
              j ? S < 12 && (B.hours += 12) : S === 12 && (B.hours = 0), delete B.afternoon;
            }
          })(V), V;
        };
      }
      return function(b, _, C) {
        C.p.customParseFormat = !0, b && b.parseTwoDigitYear && (d = b.parseTwoDigitYear);
        var k = _.prototype, E = k.parse;
        k.parse = function(N) {
          var z = N.date, x = N.utc, W = N.args;
          this.$u = x;
          var Y = W[1];
          if (typeof Y == "string") {
            var O = W[2] === !0, V = W[3] === !0, H = O || V, R = W[2];
            V && (R = W[2]), u = this.$locale(), !O && R && (u = C.Ls[R]), this.$d = (function(F, K, B, j) {
              try {
                if (["x", "X"].indexOf(K) > -1) return new Date((K === "X" ? 1e3 : 1) * F);
                var S = y(K)(F), P = S.year, J = S.month, te = S.day, be = S.hours, Te = S.minutes, _e = S.seconds, Fe = S.milliseconds, Me = S.zone, U = S.week, ne = /* @__PURE__ */ new Date(), re = te || (P || J ? 1 : ne.getDate()), pe = P || ne.getFullYear(), Ye = 0;
                P && !J || (Ye = J > 0 ? J - 1 : ne.getMonth());
                var it, Ge = be || 0, Gn = Te || 0, qn = _e || 0, Kn = Fe || 0;
                return Me ? new Date(Date.UTC(pe, Ye, re, Ge, Gn, qn, Kn + 60 * Me.offset * 1e3)) : B ? new Date(Date.UTC(pe, Ye, re, Ge, Gn, qn, Kn)) : (it = new Date(pe, Ye, re, Ge, Gn, qn, Kn), U && (it = j(it).week(U).toDate()), it);
              } catch {
                return /* @__PURE__ */ new Date("");
              }
            })(z, Y, x, C), this.init(), R && R !== !0 && (this.$L = this.locale(R).$L), H && z != this.format(Y) && (this.$d = /* @__PURE__ */ new Date("")), u = {};
          } else if (Y instanceof Array) for (var T = Y.length, D = 1; D <= T; D += 1) {
            W[1] = Y[D - 1];
            var $ = C.apply(this, W);
            if ($.isValid()) {
              this.$d = $.$d, this.$L = $.$L, this.init();
              break;
            }
            D === T && (this.$d = /* @__PURE__ */ new Date(""));
          }
          else E.call(this, N);
        };
      };
    }));
  })(vn)), vn.exports;
}
var Id = Dd();
const Lo = /* @__PURE__ */ zo(Id), Od = { class: "calendar-header" }, Rd = { class: "flex flex--gap-sm" }, $d = { key: 0 }, xd = { class: "calendar-weekdays" }, Pd = { class: "calendar-days" }, Fd = ["onClick"], Bd = {
  key: 1,
  class: "calendar-months"
}, zd = ["onClick"], Ld = {
  key: 2,
  class: "calendar-years"
}, Vd = ["onClick"], Hd = { class: "flex flex--space flex--gap-md px-2 pb-2" }, jd = {
  key: 0,
  class: "flex flex--gap-sm"
}, Ud = { key: 1 }, Wd = {
  key: 3,
  class: "calendar-time"
}, Yd = { class: "fu-time-input-wrapper" }, Gd = {
  key: 0,
  class: "fu-time-dropdown customScrollBar"
}, qd = ["onMousedown"], Et = 12, Kd = {
  __name: "FusionDatePicker",
  props: {
    modelValue: [String, Object],
    variant: {
      type: String,
      default: "date",
      validator: (t) => ["date", "date-time", "date-range"].includes(t)
    },
    min: String,
    max: String,
    // New props
    formWrapperWidth: String,
    size: {
      type: String,
      default: "md",
      validator: (t) => ["sm", "md", "lg"].includes(t)
    },
    error: {
      type: [String, null],
      default: null
    },
    label: {
      type: String,
      default: null
    },
    required: {
      type: Boolean,
      default: !1
    },
    disabled: {
      type: Boolean,
      default: !1
    }
  },
  emits: ["update:modelValue"],
  setup(t, { emit: e }) {
    ye.extend(Lo);
    const n = t, a = M(!1), i = e, o = M(!1), r = M(null), s = M(null), u = M(null), d = M(ye().startOf("month")), m = M(null), v = M({ start: null, end: null }), p = M("00:00"), h = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"], g = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec"
    ], y = M("days"), b = I(
      () => Math.floor(d.value.year() / Et) * Et
    ), _ = I(() => b.value + Et - 1), C = I(
      () => Array.from({ length: Et }, (U, ne) => b.value + ne)
    ), k = I(() => {
      const U = d.value.startOf("month").startOf("week"), ne = d.value.endOf("month").endOf("week"), re = [];
      let pe = U.clone();
      for (; pe.isBefore(ne) || pe.isSame(ne, "day"); )
        re.push({
          date: pe.clone(),
          isCurrentMonth: pe.month() === d.value.month()
        }), pe = pe.add(1, "day");
      return re;
    });
    function E(U) {
      return !!(n.min && U.isBefore(ye(n.min), "day") || n.max && U.isAfter(ye(n.max), "day"));
    }
    function N(U) {
      return n.variant === "date-range" ? v.value.start && U.isSame(v.value.start, "day") || v.value.end && U.isSame(v.value.end, "day") : m.value && U.isSame(m.value, "day");
    }
    function z(U) {
      return n.variant === "date-range" && v.value.start && v.value.end && U.isAfter(v.value.start, "day") && U.isBefore(v.value.end, "day");
    }
    function x(U) {
      if (!E(U)) {
        if (n.variant === "date-range") {
          !v.value.start || r.value === "start" ? (v.value.start = U.clone(), v.value.end = null, r.value = "end") : U.isBefore(v.value.start, "day") ? (v.value.end = v.value.start.clone(), v.value.start = U.clone()) : v.value.end = U.clone();
          return;
        }
        m.value = U.clone(), i(
          "update:modelValue",
          n.variant === "date-time" ? m.value.format("YYYY-MM-DDTHH:mm") : m.value.format("YYYY-MM-DD")
        ), O();
      }
    }
    function W() {
      v.value.start && v.value.end && (i("update:modelValue", {
        start: v.value.start.format("YYYY-MM-DD"),
        end: v.value.end.format("YYYY-MM-DD")
      }), O());
    }
    function Y(U = null) {
      r.value = U, o.value = !0, n.variant === "date-range" ? v.value.start ? d.value = v.value.start.startOf("month") : d.value = ye().startOf("month") : m.value ? d.value = m.value.startOf("month") : d.value = ye().startOf("month"), ge(() => {
        R(), window.addEventListener("resize", R), window.addEventListener("click", V);
      });
    }
    function O() {
      o.value = !1, window.removeEventListener("resize", R), window.removeEventListener("click", V);
    }
    function V(U) {
      !s.value?.contains(U.target) && !u.value?.contains(U.target) && O();
    }
    const H = M({
      position: "absolute",
      top: "0px",
      left: "0px",
      zIndex: 9999
    });
    function R() {
      if (!s.value || !u.value) return;
      const U = s.value.getBoundingClientRect(), ne = u.value.getBoundingClientRect(), re = window.innerHeight - U.bottom, pe = U.top, Ye = window.scrollY || window.pageYOffset, it = window.scrollX || window.pageXOffset;
      let Ge;
      re < ne.height && pe > ne.height ? Ge = U.top + Ye - ne.height - 6 : Ge = U.bottom + Ye + 6, H.value = {
        position: "absolute",
        top: `${Ge}px`,
        left: `${U.left + it}px`,
        zIndex: 9999
      };
    }
    const T = I(() => m.value ? n.variant === "date-time" ? m.value.format("YYYY-MM-DD HH:mm") : m.value.format("YYYY-MM-DD") : ""), D = I(() => n.variant !== "date-range" ? "" : v.value.start && v.value.end ? `${v.value.start.format(
      "YYYY-MM-DD"
    )} to ${v.value.end.format("YYYY-MM-DD")}` : v.value.start ? `${v.value.start.format("YYYY-MM-DD")} to ...` : ""), $ = I(() => `fu-date-picker--${n.variant}`);
    he(
      () => n.modelValue,
      (U) => {
        if (n.variant !== "date-range") {
          if (typeof U == "string" && U) {
            const ne = ye(U);
            if (ne.isValid()) {
              m.value = ne, d.value = ne.startOf("month"), n.variant === "date-time" ? p.value = ne.format("h:mm A") : p.value = "00:00";
              return;
            }
          }
          (U === null || U === "") && (m.value = null, v.value = { start: null, end: null }, p.value = "00:00");
        }
      },
      { immediate: !0 }
    );
    function F() {
      y.value === "days" ? y.value = "months" : y.value === "months" ? y.value = "years" : y.value = "days";
    }
    function K() {
      y.value === "days" ? d.value = d.value.subtract(1, "month") : y.value === "months" ? d.value = d.value.subtract(1, "year") : d.value = d.value.subtract(Et, "year");
    }
    function B() {
      y.value === "days" ? d.value = d.value.add(1, "month") : y.value === "months" ? d.value = d.value.add(1, "year") : d.value = d.value.add(Et, "year");
    }
    function j(U) {
      d.value = d.value.month(U), y.value = "days";
    }
    function S(U) {
      d.value = d.value.year(U), y.value = "months";
    }
    function P() {
      const U = ye();
      n.variant === "date-range" ? v.value = { start: U.clone(), end: U.clone() } : (m.value = U.clone(), i(
        "update:modelValue",
        n.variant === "date-time" ? U.format("YYYY-MM-DDTHH:mm") : U.format("YYYY-MM-DD")
      ), O());
    }
    function J() {
      const U = ye().add(1, "day");
      n.variant === "date-range" ? v.value = { start: U.clone(), end: U.clone() } : (m.value = U.clone(), i(
        "update:modelValue",
        n.variant === "date-time" ? U.format("YYYY-MM-DDTHH:mm") : U.format("YYYY-MM-DD")
      ), O());
    }
    function te() {
      m.value = null, v.value = { start: null, end: null }, i(
        "update:modelValue",
        n.variant === "date-range" ? { start: null, end: null } : null
      ), O();
    }
    const be = I(() => {
      const U = [];
      for (let ne = 0; ne < 24; ne++)
        for (let re = 0; re < 60; re += 15)
          U.push(ye().hour(ne).minute(re).format("h:mm A"));
      return U;
    }), Te = I(() => {
      if (!p.value) return be.value;
      const U = p.value.toLowerCase().replace(/\s+/g, "");
      return be.value.filter(
        (ne) => ne.toLowerCase().replace(/\s+/g, "").startsWith(U)
      );
    });
    function _e() {
      if (!m.value || !p.value) return;
      const U = String(p.value).trim().toLowerCase(), ne = ye(
        U,
        ["h:mm a", "h:mma", "ha", "h a", "hh:mm a", "H:mm", "HH:mm", "H"],
        !0
      );
      if (!ne.isValid()) {
        a.value = !1;
        return;
      }
      m.value = m.value.hour(ne.hour()).minute(ne.minute()), p.value = m.value.format("h:mm A"), i("update:modelValue", m.value.format("YYYY-MM-DDTHH:mm")), a.value = !1;
    }
    function Fe(U) {
      p.value = U, _e();
    }
    function Me() {
      setTimeout(() => {
        _e(), a.value = !1;
      }, 120);
    }
    return Ae(() => {
      window.removeEventListener("resize", R), window.removeEventListener("click", V);
    }), (U, ne) => (l(), c("div", {
      class: X(["fu-date-picker", $.value]),
      ref_key: "pickerRef",
      ref: s,
      style: ie({ width: t.formWrapperWidth })
    }, [
      t.variant !== "date-range" ? (l(), Z(Oe, {
        key: 0,
        type: "text",
        modelValue: T.value,
        placeholder: "Select date",
        readonly: "",
        onClick: Y,
        formWrapperWidth: t.formWrapperWidth,
        size: t.size,
        error: t.error,
        required: t.required,
        label: t.label,
        disabled: t.disabled
      }, {
        right: ce(() => [
          Q(ee(xe))
        ]),
        _: 1
      }, 8, ["modelValue", "formWrapperWidth", "size", "error", "required", "label", "disabled"])) : (l(), Z(Oe, {
        key: 1,
        type: "text",
        modelValue: D.value,
        placeholder: "Select date range",
        onClick: Y,
        readonly: "",
        formWrapperWidth: t.formWrapperWidth,
        size: t.size,
        error: t.error,
        required: t.required,
        disabled: t.disabled
      }, {
        right: ce(() => [
          Q(ee(xe))
        ]),
        _: 1
      }, 8, ["modelValue", "formWrapperWidth", "size", "error", "required", "disabled"])),
      (l(), Z(Ee, { to: "body" }, [
        o.value ? (l(), c("div", {
          key: 0,
          class: "fu-date-picker__calendar-overlay",
          onClick: ue(O, ["self"])
        }, [
          f("div", {
            class: "fu-date-picker__calendar",
            style: ie(H.value),
            ref_key: "calendarRef",
            ref: u,
            onClick: ne[2] || (ne[2] = ue(() => {
            }, ["stop"]))
          }, [
            f("div", Od, [
              Q(Se, {
                variant: "ghost",
                size: "sm",
                icon: ee(xe),
                onClick: F
              }, {
                default: ce(() => [
                  y.value === "days" ? (l(), c(L, { key: 0 }, [
                    de(w(d.value.format("MMMM YYYY")), 1)
                  ], 64)) : y.value === "months" ? (l(), c(L, { key: 1 }, [
                    de(w(d.value.year()), 1)
                  ], 64)) : (l(), c(L, { key: 2 }, [
                    de(w(b.value) + " - " + w(_.value), 1)
                  ], 64))
                ]),
                _: 1
              }, 8, ["icon"]),
              f("div", Rd, [
                Q(Pe, {
                  icon: ee(zt),
                  size: "sm",
                  onClick: K
                }, null, 8, ["icon"]),
                Q(Pe, {
                  icon: ee(Lt),
                  size: "sm",
                  onClick: B
                }, null, 8, ["icon"])
              ])
            ]),
            y.value === "days" ? (l(), c("div", $d, [
              f("div", xd, [
                (l(), c(L, null, oe(h, (re) => f("div", {
                  key: re,
                  class: "calendar-weekday"
                }, w(re), 1)), 64))
              ]),
              f("div", Pd, [
                (l(!0), c(L, null, oe(k.value, (re) => (l(), c("div", {
                  key: re.date.toString(),
                  class: X(["calendar-day", {
                    "calendar-day--other-month": !re.isCurrentMonth,
                    "calendar-day--selected": N(re.date),
                    "calendar-day--in-range": z(re.date),
                    "calendar-day--disabled": E(re.date)
                  }]),
                  onClick: (pe) => x(re.date)
                }, w(re.date.date()), 11, Fd))), 128))
              ])
            ])) : y.value === "months" ? (l(), c("div", Bd, [
              (l(), c(L, null, oe(g, (re, pe) => f("div", {
                key: re,
                class: X(["calendar-month", { "calendar-month--selected": pe === d.value.month() }]),
                onClick: (Ye) => j(pe)
              }, w(re), 11, zd)), 64))
            ])) : (l(), c("div", Ld, [
              (l(!0), c(L, null, oe(C.value, (re) => (l(), c("div", {
                key: re,
                class: X(["calendar-year", { "calendar-year--selected": re === d.value.year() }]),
                onClick: (pe) => S(re)
              }, w(re), 11, Vd))), 128))
            ])),
            ne[7] || (ne[7] = f("hr", null, null, -1)),
            f("div", Hd, [
              t.variant !== "date-range" ? (l(), c("div", jd, [
                Q(Se, {
                  variant: "outline",
                  onClick: P
                }, {
                  default: ce(() => [...ne[3] || (ne[3] = [
                    de("Today", -1)
                  ])]),
                  _: 1
                }),
                Q(Se, {
                  variant: "outline",
                  onClick: J
                }, {
                  default: ce(() => [...ne[4] || (ne[4] = [
                    de("Tomorrow", -1)
                  ])]),
                  _: 1
                })
              ])) : A("", !0),
              t.variant === "date-range" ? (l(), c("div", Ud, [
                Q(Se, {
                  variant: "outline",
                  onClick: W
                }, {
                  default: ce(() => [...ne[5] || (ne[5] = [
                    de("Apply", -1)
                  ])]),
                  _: 1
                })
              ])) : A("", !0),
              Q(Se, {
                variant: "outline",
                onClick: te
              }, {
                default: ce(() => [...ne[6] || (ne[6] = [
                  de("Clear", -1)
                ])]),
                _: 1
              })
            ]),
            t.variant === "date-time" ? (l(), c("div", Wd, [
              f("div", Yd, [
                Q(Oe, {
                  type: "text",
                  modelValue: p.value,
                  "onUpdate:modelValue": ne[0] || (ne[0] = (re) => p.value = re),
                  placeholder: "HH:mm or 4:30pm",
                  onFocus: ne[1] || (ne[1] = (re) => a.value = !0),
                  onKeydown: $e(ue(_e, ["prevent"]), ["enter"]),
                  onBlur: Me,
                  formWrapperWidth: "100%"
                }, {
                  right: ce(() => [
                    Q(ee(xe))
                  ]),
                  _: 1
                }, 8, ["modelValue", "onKeydown"]),
                a.value ? (l(), c("div", Gd, [
                  (l(!0), c(L, null, oe(Te.value, (re) => (l(), c("div", {
                    key: re,
                    class: "fu-time-option",
                    onMousedown: ue((pe) => Fe(re), ["prevent"])
                  }, w(re), 41, qd))), 128))
                ])) : A("", !0)
              ])
            ])) : A("", !0)
          ], 4)
        ])) : A("", !0)
      ]))
    ], 6));
  }
}, Vo = /* @__PURE__ */ ae(Kd, [["__scopeId", "data-v-41bea5ec"]]), Qd = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Vo
}, Symbol.toStringTag, { value: "Module" })), Zd = { class: "calendar-header" }, Jd = { class: "flex flex--gap-sm" }, Xd = { key: 0 }, ef = { class: "calendar-weekdays" }, tf = { class: "calendar-days" }, nf = ["onClick"], af = {
  key: 1,
  class: "calendar-months"
}, of = ["onClick"], rf = {
  key: 2,
  class: "calendar-years"
}, sf = ["onClick"], lf = { class: "flex flex--space flex--gap-md px-2 pb-2" }, uf = {
  key: 0,
  class: "flex flex--gap-sm"
}, cf = { key: 1 }, df = {
  key: 3,
  class: "calendar-time"
}, ff = { class: "fu-time-input-wrapper" }, mf = {
  key: 0,
  class: "fu-time-dropdown customScrollBar"
}, hf = ["onMousedown"], Mt = 12, vf = {
  __name: "datePickerBackup",
  props: {
    modelValue: [String, Object],
    variant: {
      type: String,
      default: "date",
      validator: (t) => ["date", "date-time", "date-range"].includes(t)
    },
    min: String,
    max: String,
    // New props
    formWrapperWidth: String,
    size: {
      type: String,
      default: "md",
      validator: (t) => ["sm", "md", "lg"].includes(t)
    },
    error: {
      type: [String, null],
      default: null
    },
    label: {
      type: String,
      default: null
    },
    required: {
      type: Boolean,
      default: !1
    },
    disabled: {
      type: Boolean,
      default: !1
    }
  },
  emits: ["update:modelValue"],
  setup(t, { emit: e }) {
    ye.extend(Lo);
    const n = t, a = M(!1), i = e, o = M(!1), r = M(null), s = M(null), u = M(null), d = M(ye().startOf("month")), m = M(null), v = M({ start: null, end: null }), p = M("00:00"), h = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"], g = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec"
    ], y = M("days"), b = I(
      () => Math.floor(d.value.year() / Mt) * Mt
    ), _ = I(() => b.value + Mt - 1), C = I(
      () => Array.from({ length: Mt }, (U, ne) => b.value + ne)
    ), k = I(() => {
      const U = d.value.startOf("month").startOf("week"), ne = d.value.endOf("month").endOf("week"), re = [];
      let pe = U.clone();
      for (; pe.isBefore(ne) || pe.isSame(ne, "day"); )
        re.push({
          date: pe.clone(),
          isCurrentMonth: pe.month() === d.value.month()
        }), pe = pe.add(1, "day");
      return re;
    });
    function E(U) {
      return !!(n.min && U.isBefore(ye(n.min), "day") || n.max && U.isAfter(ye(n.max), "day"));
    }
    function N(U) {
      return n.variant === "date-range" ? v.value.start && U.isSame(v.value.start, "day") || v.value.end && U.isSame(v.value.end, "day") : m.value && U.isSame(m.value, "day");
    }
    function z(U) {
      return n.variant === "date-range" && v.value.start && v.value.end && U.isAfter(v.value.start, "day") && U.isBefore(v.value.end, "day");
    }
    function x(U) {
      if (!E(U)) {
        if (n.variant === "date-range") {
          !v.value.start || r.value === "start" ? (v.value.start = U.clone(), v.value.end = null, r.value = "end") : U.isBefore(v.value.start, "day") ? (v.value.end = v.value.start.clone(), v.value.start = U.clone()) : v.value.end = U.clone();
          return;
        }
        m.value = U.clone(), i(
          "update:modelValue",
          n.variant === "date-time" ? m.value.format("YYYY-MM-DDTHH:mm") : m.value.format("YYYY-MM-DD")
        ), O();
      }
    }
    function W() {
      v.value.start && v.value.end && (i("update:modelValue", {
        start: v.value.start.format("YYYY-MM-DD"),
        end: v.value.end.format("YYYY-MM-DD")
      }), O());
    }
    function Y(U = null) {
      r.value = U, o.value = !0, n.variant === "date-range" ? v.value.start ? d.value = v.value.start.startOf("month") : d.value = ye().startOf("month") : m.value ? d.value = m.value.startOf("month") : d.value = ye().startOf("month"), ge(() => {
        R(), window.addEventListener("resize", R), window.addEventListener("click", V);
      });
    }
    function O() {
      o.value = !1, window.removeEventListener("resize", R), window.removeEventListener("click", V);
    }
    function V(U) {
      !s.value?.contains(U.target) && !u.value?.contains(U.target) && O();
    }
    const H = M({
      position: "absolute",
      top: "0px",
      left: "0px",
      zIndex: 9999
    });
    function R() {
      if (!s.value || !u.value) return;
      const U = s.value.getBoundingClientRect(), ne = u.value.getBoundingClientRect(), re = window.innerHeight - U.bottom, pe = U.top, Ye = window.scrollY || window.pageYOffset, it = window.scrollX || window.pageXOffset;
      let Ge;
      re < ne.height && pe > ne.height ? Ge = U.top + Ye - ne.height - 6 : Ge = U.bottom + Ye + 6, H.value = {
        position: "absolute",
        top: `${Ge}px`,
        left: `${U.left + it}px`,
        zIndex: 9999
      };
    }
    const T = I(() => m.value ? n.variant === "date-time" ? m.value.format("YYYY-MM-DD HH:mm") : m.value.format("YYYY-MM-DD") : ""), D = I(() => n.variant !== "date-range" ? "" : v.value.start && v.value.end ? `${v.value.start.format(
      "YYYY-MM-DD"
    )} to ${v.value.end.format("YYYY-MM-DD")}` : v.value.start ? `${v.value.start.format("YYYY-MM-DD")} to ...` : ""), $ = I(() => `fu-date-picker--${n.variant}`);
    he(
      () => n.modelValue,
      (U) => {
        if (n.variant !== "date-range") {
          if (typeof U == "string" && U) {
            const ne = ye(U);
            if (ne.isValid()) {
              m.value = ne, d.value = ne.startOf("month"), n.variant === "date-time" ? p.value = ne.format("h:mm A") : p.value = "00:00";
              return;
            }
          }
          (U === null || U === "") && (m.value = null, v.value = { start: null, end: null }, p.value = "00:00");
        }
      },
      { immediate: !0 }
    );
    function F() {
      y.value === "days" ? y.value = "months" : y.value === "months" ? y.value = "years" : y.value = "days";
    }
    function K() {
      y.value === "days" ? d.value = d.value.subtract(1, "month") : y.value === "months" ? d.value = d.value.subtract(1, "year") : d.value = d.value.subtract(Mt, "year");
    }
    function B() {
      y.value === "days" ? d.value = d.value.add(1, "month") : y.value === "months" ? d.value = d.value.add(1, "year") : d.value = d.value.add(Mt, "year");
    }
    function j(U) {
      d.value = d.value.month(U), y.value = "days";
    }
    function S(U) {
      d.value = d.value.year(U), y.value = "months";
    }
    function P() {
      const U = ye();
      n.variant === "date-range" ? v.value = { start: U.clone(), end: U.clone() } : (m.value = U.clone(), i(
        "update:modelValue",
        n.variant === "date-time" ? U.format("YYYY-MM-DDTHH:mm") : U.format("YYYY-MM-DD")
      ), O());
    }
    function J() {
      const U = ye().add(1, "day");
      n.variant === "date-range" ? v.value = { start: U.clone(), end: U.clone() } : (m.value = U.clone(), i(
        "update:modelValue",
        n.variant === "date-time" ? U.format("YYYY-MM-DDTHH:mm") : U.format("YYYY-MM-DD")
      ), O());
    }
    function te() {
      m.value = null, v.value = { start: null, end: null }, i(
        "update:modelValue",
        n.variant === "date-range" ? { start: null, end: null } : null
      ), O();
    }
    const be = I(() => {
      const U = [];
      for (let ne = 0; ne < 24; ne++)
        for (let re = 0; re < 60; re += 15)
          U.push(ye().hour(ne).minute(re).format("h:mm A"));
      return U;
    }), Te = I(() => {
      if (!p.value) return be.value;
      const U = p.value.toLowerCase().replace(/\s+/g, "");
      return be.value.filter(
        (ne) => ne.toLowerCase().replace(/\s+/g, "").startsWith(U)
      );
    });
    function _e() {
      if (!m.value || !p.value) return;
      const U = String(p.value).trim().toLowerCase(), ne = ye(
        U,
        ["h:mm a", "h:mma", "ha", "h a", "hh:mm a", "H:mm", "HH:mm", "H"],
        !0
      );
      if (!ne.isValid()) {
        a.value = !1;
        return;
      }
      m.value = m.value.hour(ne.hour()).minute(ne.minute()), p.value = m.value.format("h:mm A"), i("update:modelValue", m.value.format("YYYY-MM-DDTHH:mm")), a.value = !1;
    }
    function Fe(U) {
      p.value = U, _e();
    }
    function Me() {
      setTimeout(() => {
        _e(), a.value = !1;
      }, 120);
    }
    return Ae(() => {
      window.removeEventListener("resize", R), window.removeEventListener("click", V);
    }), (U, ne) => (l(), c("div", {
      class: X(["fu-date-picker", $.value]),
      ref_key: "pickerRef",
      ref: s,
      style: ie({ width: t.formWrapperWidth })
    }, [
      t.variant !== "date-range" ? (l(), Z(Oe, {
        key: 0,
        type: "text",
        modelValue: T.value,
        placeholder: "Select date",
        readonly: "",
        onClick: Y,
        formWrapperWidth: t.formWrapperWidth,
        size: t.size,
        error: t.error,
        required: t.required,
        label: t.label,
        disabled: t.disabled
      }, {
        right: ce(() => [
          Q(ee(xe))
        ]),
        _: 1
      }, 8, ["modelValue", "formWrapperWidth", "size", "error", "required", "label", "disabled"])) : (l(), Z(Oe, {
        key: 1,
        type: "text",
        modelValue: D.value,
        placeholder: "Select date range",
        onClick: Y,
        readonly: "",
        formWrapperWidth: t.formWrapperWidth,
        size: t.size,
        error: t.error,
        required: t.required,
        disabled: t.disabled
      }, {
        right: ce(() => [
          Q(ee(xe))
        ]),
        _: 1
      }, 8, ["modelValue", "formWrapperWidth", "size", "error", "required", "disabled"])),
      (l(), Z(Ee, { to: "body" }, [
        o.value ? (l(), c("div", {
          key: 0,
          class: "fu-date-picker__calendar-overlay",
          onClick: ue(O, ["self"])
        }, [
          f("div", {
            class: "fu-date-picker__calendar",
            style: ie(H.value),
            ref_key: "calendarRef",
            ref: u,
            onClick: ne[2] || (ne[2] = ue(() => {
            }, ["stop"]))
          }, [
            f("div", Zd, [
              Q(Se, {
                variant: "ghost",
                size: "sm",
                onClick: F
              }, {
                default: ce(() => [
                  y.value === "days" ? (l(), c(L, { key: 0 }, [
                    de(w(d.value.format("MMMM YYYY")), 1)
                  ], 64)) : y.value === "months" ? (l(), c(L, { key: 1 }, [
                    de(w(d.value.year()), 1)
                  ], 64)) : (l(), c(L, { key: 2 }, [
                    de(w(b.value) + " - " + w(_.value), 1)
                  ], 64))
                ]),
                _: 1
              }),
              f("div", Jd, [
                Q(Pe, {
                  icon: ee(zt),
                  size: "sm",
                  onClick: K
                }, null, 8, ["icon"]),
                Q(Pe, {
                  icon: ee(Lt),
                  size: "sm",
                  onClick: B
                }, null, 8, ["icon"])
              ])
            ]),
            y.value === "days" ? (l(), c("div", Xd, [
              f("div", ef, [
                (l(), c(L, null, oe(h, (re) => f("div", {
                  key: re,
                  class: "calendar-weekday"
                }, w(re), 1)), 64))
              ]),
              f("div", tf, [
                (l(!0), c(L, null, oe(k.value, (re) => (l(), c("div", {
                  key: re.date.toString(),
                  class: X(["calendar-day", {
                    "calendar-day--other-month": !re.isCurrentMonth,
                    "calendar-day--selected": N(re.date),
                    "calendar-day--in-range": z(re.date),
                    "calendar-day--disabled": E(re.date)
                  }]),
                  onClick: (pe) => x(re.date)
                }, w(re.date.date()), 11, nf))), 128))
              ])
            ])) : y.value === "months" ? (l(), c("div", af, [
              (l(), c(L, null, oe(g, (re, pe) => f("div", {
                key: re,
                class: X(["calendar-month", { "calendar-month--selected": pe === d.value.month() }]),
                onClick: (Ye) => j(pe)
              }, w(re), 11, of)), 64))
            ])) : (l(), c("div", rf, [
              (l(!0), c(L, null, oe(C.value, (re) => (l(), c("div", {
                key: re,
                class: X(["calendar-year", { "calendar-year--selected": re === d.value.year() }]),
                onClick: (pe) => S(re)
              }, w(re), 11, sf))), 128))
            ])),
            ne[7] || (ne[7] = f("hr", null, null, -1)),
            f("div", lf, [
              t.variant !== "date-range" ? (l(), c("div", uf, [
                Q(Se, {
                  variant: "outline",
                  onClick: P
                }, {
                  default: ce(() => [...ne[3] || (ne[3] = [
                    de("Today", -1)
                  ])]),
                  _: 1
                }),
                Q(Se, {
                  variant: "outline",
                  onClick: J
                }, {
                  default: ce(() => [...ne[4] || (ne[4] = [
                    de("Tomorrow", -1)
                  ])]),
                  _: 1
                })
              ])) : A("", !0),
              t.variant === "date-range" ? (l(), c("div", cf, [
                Q(Se, {
                  variant: "outline",
                  onClick: W
                }, {
                  default: ce(() => [...ne[5] || (ne[5] = [
                    de("Apply", -1)
                  ])]),
                  _: 1
                })
              ])) : A("", !0),
              Q(Se, {
                variant: "outline",
                onClick: te
              }, {
                default: ce(() => [...ne[6] || (ne[6] = [
                  de("Clear", -1)
                ])]),
                _: 1
              })
            ]),
            t.variant === "date-time" ? (l(), c("div", df, [
              f("div", ff, [
                Q(Oe, {
                  type: "text",
                  modelValue: p.value,
                  "onUpdate:modelValue": ne[0] || (ne[0] = (re) => p.value = re),
                  placeholder: "HH:mm or 4:30pm",
                  onFocus: ne[1] || (ne[1] = (re) => a.value = !0),
                  onKeydown: $e(ue(_e, ["prevent"]), ["enter"]),
                  onBlur: Me,
                  formWrapperWidth: "100%"
                }, {
                  right: ce(() => [
                    Q(ee(xe))
                  ]),
                  _: 1
                }, 8, ["modelValue", "onKeydown"]),
                a.value ? (l(), c("div", mf, [
                  (l(!0), c(L, null, oe(Te.value, (re) => (l(), c("div", {
                    key: re,
                    class: "fu-time-option",
                    onMousedown: ue((pe) => Fe(re), ["prevent"])
                  }, w(re), 41, hf))), 128))
                ])) : A("", !0)
              ])
            ])) : A("", !0)
          ], 4)
        ])) : A("", !0)
      ]))
    ], 6));
  }
}, pf = /* @__PURE__ */ ae(vf, [["__scopeId", "data-v-7bb6d1f9"]]), gf = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: pf
}, Symbol.toStringTag, { value: "Module" })), yf = { class: "calendar-header" }, bf = { class: "flex flex--gap-sm" }, _f = {
  key: 0,
  class: "calendar-months"
}, Cf = ["onClick"], wf = {
  key: 1,
  class: "calendar-years"
}, Af = ["onClick"], kf = { class: "flex flex--space flex--gap-md px-2 pb-2" }, on = 12, Sf = {
  __name: "FusionMonthPicker",
  props: {
    modelValue: String,
    // "YYYY-MM"
    min: String,
    // "YYYY-MM"
    max: String,
    // "YYYY-MM"
    formWrapperWidth: String,
    size: {
      type: String,
      default: "md",
      validator: (t) => ["sm", "md", "lg"].includes(t)
    },
    error: {
      type: [String, null],
      default: null
    },
    required: {
      type: Boolean,
      default: !1
    },
    disabled: {
      type: Boolean,
      default: !1
    },
    label: String
  },
  emits: ["update:modelValue"],
  setup(t, { emit: e }) {
    const n = t, a = e, i = M(!1), o = M(null), r = M(null), s = M("months"), u = M(ye().year()), d = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec"
    ], m = I(
      () => u.value - u.value % on
    ), v = I(() => m.value + on - 1), p = I(() => {
      const R = m.value;
      return Array.from({ length: on }, (T, D) => R + D);
    }), h = I(() => {
      if (!n.modelValue) return null;
      const R = ye(n.modelValue, "YYYY-MM", !0);
      return R.isValid() ? R : null;
    });
    function g(R) {
      return h.value ? h.value.month() === R && h.value.year() === u.value : !1;
    }
    function y(R) {
      const T = ye(
        `${u.value}-${(R + 1).toString().padStart(2, "0")}`,
        "YYYY-MM"
      );
      return !!(n.min && T.isBefore(ye(n.min, "YYYY-MM"), "month") || n.max && T.isAfter(ye(n.max, "YYYY-MM"), "month"));
    }
    function b(R) {
      u.value = R, s.value = "months";
    }
    function _(R) {
      if (y(R)) return;
      const T = ye(
        `${u.value}-${(R + 1).toString().padStart(2, "0")}`,
        "YYYY-MM"
      );
      a("update:modelValue", T.format("MMM, YYYY")), i.value = !1;
    }
    function C() {
      const R = ye();
      u.value = R.year(), a("update:modelValue", R.format("MMM, YYYY")), i.value = !1;
    }
    function k() {
      n.disabled || (i.value = !i.value, i.value ? (h.value && (u.value = h.value.year()), ge(() => {
        x(), window.addEventListener("resize", x), window.addEventListener("click", N);
      })) : (window.removeEventListener("resize", x), window.removeEventListener("click", N)));
    }
    function E() {
      i.value = !1, window.removeEventListener("resize", x), window.removeEventListener("click", N);
    }
    function N(R) {
      !o.value?.contains(R.target) && !r.value?.contains(R.target) && E();
    }
    const z = M({
      position: "absolute",
      top: "0px",
      left: "0px",
      zIndex: 9999
    });
    function x() {
      if (!o.value || !r.value) return;
      const R = o.value.getBoundingClientRect(), T = r.value.getBoundingClientRect(), D = window.innerHeight - R.bottom, $ = R.top, F = window.scrollY || window.pageYOffset, K = window.scrollX || window.pageXOffset;
      let B;
      D < T.height && $ > T.height ? B = R.top + F - T.height - 6 : B = R.bottom + F + 6, z.value = {
        position: "absolute",
        top: `${B}px`,
        left: `${R.left + K}px`,
        zIndex: 9999
      };
    }
    function W() {
      s.value = s.value === "months" ? "years" : "months";
    }
    function Y() {
      s.value === "months" ? u.value-- : u.value = Math.max(m.value - on, 0);
    }
    function O() {
      s.value === "months" ? u.value++ : u.value = v.value + 1;
    }
    function V() {
      a("update:modelValue", null), i.value = !1;
    }
    const H = I(() => n.modelValue || "");
    return Ae(() => {
      window.removeEventListener("resize", x), window.removeEventListener("click", N);
    }), (R, T) => (l(), c("div", {
      class: "fu-month-picker",
      ref_key: "pickerRef",
      ref: o,
      style: ie({ width: t.formWrapperWidth })
    }, [
      Q(Oe, {
        type: "text",
        modelValue: H.value,
        placeholder: "Select month",
        readonly: "",
        onClick: [
          k,
          ue(E, ["self"])
        ],
        formWrapperWidth: t.formWrapperWidth,
        size: t.size,
        error: t.error,
        required: t.required,
        label: t.label,
        disabled: t.disabled
      }, {
        right: ce(() => [
          Q(ee(xe))
        ]),
        _: 1
      }, 8, ["modelValue", "formWrapperWidth", "size", "error", "required", "label", "disabled"]),
      (l(), Z(Ee, { to: "body" }, [
        i.value ? (l(), c("div", {
          key: 0,
          class: "fu-month-picker__calendar-overlay",
          onClick: ue(E, ["self"])
        }, [
          f("div", {
            class: "fu-month-picker__calendar",
            style: ie(z.value),
            ref_key: "calendarRef",
            ref: r,
            onClick: T[0] || (T[0] = ue(() => {
            }, ["stop"]))
          }, [
            f("div", yf, [
              Q(Se, {
                variant: "ghost",
                size: "sm",
                onClick: W,
                icon: ee(xe)
              }, {
                default: ce(() => [
                  s.value === "months" ? (l(), c(L, { key: 0 }, [
                    de(w(u.value), 1)
                  ], 64)) : (l(), c(L, { key: 1 }, [
                    de(w(m.value) + " - " + w(v.value), 1)
                  ], 64))
                ]),
                _: 1
              }, 8, ["icon"]),
              f("div", bf, [
                Q(Pe, {
                  icon: ee(zt),
                  size: "sm",
                  onClick: Y
                }, null, 8, ["icon"]),
                Q(Pe, {
                  icon: ee(Lt),
                  size: "sm",
                  onClick: O
                }, null, 8, ["icon"])
              ])
            ]),
            s.value === "months" ? (l(), c("div", _f, [
              (l(), c(L, null, oe(d, (D, $) => f("div", {
                key: D,
                class: X(["calendar-month", {
                  "calendar-month--selected": g($),
                  "calendar-month--disabled": y($)
                }]),
                onClick: (F) => _($)
              }, w(D), 11, Cf)), 64))
            ])) : (l(), c("div", wf, [
              (l(!0), c(L, null, oe(p.value, (D) => (l(), c("div", {
                key: D,
                class: X(["calendar-year", { "calendar-year--selected": D === u.value }]),
                onClick: ($) => b(D)
              }, w(D), 11, Af))), 128))
            ])),
            T[3] || (T[3] = f("hr", null, null, -1)),
            f("div", kf, [
              Q(Se, {
                variant: "outline",
                onClick: C
              }, {
                default: ce(() => [...T[1] || (T[1] = [
                  de(" This Month ", -1)
                ])]),
                _: 1
              }),
              Q(Se, {
                variant: "outline",
                onClick: V
              }, {
                default: ce(() => [...T[2] || (T[2] = [
                  de(" Clear ", -1)
                ])]),
                _: 1
              })
            ])
          ], 4)
        ])) : A("", !0)
      ]))
    ], 4));
  }
}, Tf = /* @__PURE__ */ ae(Sf, [["__scopeId", "data-v-7377986b"]]), Ef = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Tf
}, Symbol.toStringTag, { value: "Module" })), Mf = { class: "calendar-header" }, Nf = { class: "flex flex--gap-sm" }, Df = { key: 0 }, If = { class: "calendar-weekdays" }, Of = { class: "calendar-days" }, Rf = ["onClick"], $f = {
  key: 1,
  class: "calendar-months"
}, xf = ["onClick"], Pf = {
  key: 2,
  class: "calendar-years"
}, Ff = ["onClick"], Bf = {
  key: 3,
  class: "calendar-multi-summary"
}, zf = {
  key: 4,
  class: "calendar-time"
}, Lf = {
  key: 0,
  class: "fu-time-dropdown customScrollBar"
}, Vf = ["onMousedown"], rn = 12, Hf = {
  __name: "FusionPlainDatePicker",
  props: {
    modelValue: [String, Array],
    mode: { type: String, default: "single" },
    variant: { type: String, default: "date" },
    formWrapperWidth: String,
    fontSize: { type: String, default: "0.625rem" },
    disabledDates: { type: Array, default: () => [] }
    // ← array of "YYYY-MM-DD"
  },
  emits: ["update:modelValue"],
  setup(t, { emit: e }) {
    const n = t, a = e, i = M(ye().startOf("month")), o = M("days"), r = M("00:00"), s = M(!1), u = M(null), d = M([]), m = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"], v = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec"
    ], p = I(
      () => Math.floor(i.value.year() / rn) * rn
    ), h = I(() => p.value + rn - 1), g = I(
      () => Array.from({ length: rn }, (R, T) => p.value + T)
    ), y = I(() => {
      const R = i.value.startOf("month").startOf("week"), T = i.value.endOf("month").endOf("week"), D = [];
      let $ = R.clone();
      for (; $.isBefore(T) || $.isSame(T, "day"); )
        D.push({
          date: $.clone(),
          isCurrentMonth: $.month() === i.value.month()
        }), $ = $.add(1, "day");
      return D;
    }), b = I(() => {
      const R = [];
      for (let T = 0; T < 24; T++)
        for (let D = 0; D < 60; D += 15)
          R.push(ye().hour(T).minute(D).format("h:mm A"));
      return R;
    }), _ = I(() => b.value), C = (R) => n.disabledDates.includes(R.format("YYYY-MM-DD"));
    function k(R) {
      return n.mode === "multi" ? d.value.includes(R.format("YYYY-MM-DD")) : u.value && R.isSame(u.value, "day");
    }
    function E(R) {
      if (!C(R))
        if (n.mode === "multi") {
          const T = R.format("YYYY-MM-DD");
          d.value.indexOf(T) === -1 ? d.value = [...d.value, T] : d.value = d.value.filter(($) => $ !== T), d.value = [...d.value].sort(), a("update:modelValue", [...d.value]);
        } else if (u.value = R.clone(), n.variant === "date-time") {
          const T = ye(
            `${u.value.format("YYYY-MM-DD")} ${r.value}`,
            "YYYY-MM-DD HH:mm"
          );
          a("update:modelValue", T.format("YYYY-MM-DDTHH:mm"));
        } else
          a("update:modelValue", u.value.format("YYYY-MM-DD"));
    }
    function N() {
      d.value = [], a("update:modelValue", []);
    }
    const z = () => i.value = i.value.subtract(1, "month"), x = () => i.value = i.value.add(1, "month"), W = () => o.value = o.value === "days" ? "months" : o.value === "months" ? "years" : "days", Y = (R) => {
      i.value = i.value.month(R), o.value = "days";
    }, O = (R) => {
      i.value = i.value.year(R), o.value = "months";
    };
    function V() {
      if (!u.value) return;
      const R = ye(`${u.value.format("YYYY-MM-DD")} ${r.value}`, [
        "YYYY-MM-DD HH:mm",
        "YYYY-MM-DD h:mm A"
      ]);
      R.isValid() && (r.value = R.format("HH:mm"), a("update:modelValue", R.format("YYYY-MM-DDTHH:mm")), s.value = !1);
    }
    function H(R) {
      if (!u.value) return;
      r.value = ye(R, "h:mm A").format("HH:mm");
      const T = ye(
        `${u.value.format("YYYY-MM-DD")} ${r.value}`,
        "YYYY-MM-DD HH:mm"
      );
      a("update:modelValue", T.format("YYYY-MM-DDTHH:mm")), s.value = !1;
    }
    return he(
      () => n.modelValue,
      (R) => {
        if (n.mode === "multi")
          d.value = Array.isArray(R) ? [...R] : [];
        else {
          if (!R) {
            u.value = null;
            return;
          }
          const T = ye(R);
          T.isValid() && (u.value = T, i.value = T.startOf("month"), n.variant === "date-time" && (r.value = T.format("HH:mm")));
        }
      },
      { immediate: !0 }
    ), (R, T) => (l(), c("div", {
      class: "fu-date-picker fu-date-picker--plain",
      style: ie({ width: t.formWrapperWidth, fontSize: t.fontSize })
    }, [
      f("div", {
        class: "fu-date-picker",
        style: ie({ width: t.formWrapperWidth })
      }, [
        f("div", Mf, [
          f("button", { onClick: W }, [
            o.value === "days" ? (l(), c(L, { key: 0 }, [
              de(w(i.value.format("MMMM YYYY")), 1)
            ], 64)) : o.value === "months" ? (l(), c(L, { key: 1 }, [
              de(w(i.value.year()), 1)
            ], 64)) : (l(), c(L, { key: 2 }, [
              de(w(p.value) + " - " + w(h.value), 1)
            ], 64))
          ]),
          f("div", Nf, [
            f("button", { onClick: z }, [
              Q(ee(zt), {
                size: 16,
                color: "var(--fu-color-text)"
              })
            ]),
            f("button", { onClick: x }, [
              Q(ee(Lt), { size: 16 })
            ])
          ])
        ]),
        o.value === "days" ? (l(), c("div", Df, [
          f("div", If, [
            (l(), c(L, null, oe(m, (D) => f("div", {
              key: D,
              class: "calendar-weekday"
            }, w(D), 1)), 64))
          ]),
          f("div", Of, [
            (l(!0), c(L, null, oe(y.value, (D) => (l(), c("div", {
              key: D.date.toString(),
              class: X(["calendar-day", {
                "calendar-day--other-month": !D.isCurrentMonth,
                "calendar-day--selected": k(D.date),
                "calendar-day--disabled": C(D.date)
              }]),
              onClick: ($) => E(D.date)
            }, w(D.date.date()), 11, Rf))), 128))
          ])
        ])) : o.value === "months" ? (l(), c("div", $f, [
          (l(), c(L, null, oe(v, (D, $) => f("div", {
            key: D,
            class: X(["calendar-month", { "calendar-month--selected": $ === i.value.month() }]),
            onClick: (F) => Y($)
          }, w(D), 11, xf)), 64))
        ])) : (l(), c("div", Pf, [
          (l(!0), c(L, null, oe(g.value, (D) => (l(), c("div", {
            key: D,
            class: X(["calendar-year", { "calendar-year--selected": D === i.value.year() }]),
            onClick: ($) => O(D)
          }, w(D), 11, Ff))), 128))
        ])),
        t.mode === "multi" && d.value.length ? (l(), c("div", Bf, [
          f("span", null, w(d.value.length) + " date" + w(d.value.length > 1 ? "s" : "") + " selected", 1),
          f("button", {
            class: "calendar-multi-clear",
            onClick: N
          }, "Clear all")
        ])) : A("", !0),
        t.variant === "date-time" ? (l(), c("div", zf, [
          Q(Oe, {
            type: "text",
            modelValue: r.value,
            "onUpdate:modelValue": T[0] || (T[0] = (D) => r.value = D),
            placeholder: "HH:mm or 4:30pm",
            onFocus: T[1] || (T[1] = (D) => s.value = !0),
            onKeydown: $e(ue(V, ["prevent"]), ["enter"]),
            formWrapperWidth: "100%"
          }, {
            right: ce(() => [
              Q(ee(xe))
            ]),
            _: 1
          }, 8, ["modelValue", "onKeydown"]),
          s.value ? (l(), c("div", Lf, [
            (l(!0), c(L, null, oe(_.value, (D) => (l(), c("div", {
              key: D,
              class: "fu-time-option",
              onMousedown: ue(($) => H(D), ["prevent"])
            }, w(D), 41, Vf))), 128))
          ])) : A("", !0)
        ])) : A("", !0)
      ], 4)
    ], 4));
  }
}, Ho = /* @__PURE__ */ ae(Hf, [["__scopeId", "data-v-edb78133"]]), jf = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Ho
}, Symbol.toStringTag, { value: "Module" })), Uf = ["onMousedown"], vi = 240, Wf = {
  __name: "FusionTimePicker",
  props: {
    modelValue: String,
    displayFormat: {
      type: String,
      default: "12",
      validator: (t) => ["12", "24"].includes(t)
    },
    interval: { type: Number, default: 30 },
    error: String,
    label: String,
    required: Boolean,
    disabled: Boolean,
    size: String,
    formWrapperWidth: String
  },
  emits: ["update:modelValue", "change"],
  setup(t, { emit: e }) {
    const n = t, a = e, i = M(""), o = M(n.modelValue || ""), r = M(""), s = M(!1), u = M(!1), d = M(null), m = M(null), v = M({ left: 0, top: 0, bottom: 0, width: 0 }), p = M(null), h = (H) => {
      if (!H || !/^\d{2}:\d{2}$/.test(H)) return H || "";
      const [R, T] = H.split(":").map(Number);
      if (n.displayFormat === "24")
        return `${String(R).padStart(2, "0")}:${String(T).padStart(2, "0")}`;
      const D = R < 12 ? "am" : "pm", $ = R % 12 || 12;
      return `${String($).padStart(2, "0")}:${String(T).padStart(2, "0")} ${D}`;
    }, g = (H) => {
      if (!H) return null;
      const R = H.trim().toLowerCase();
      if (n.displayFormat === "24") {
        const K = R.match(/^(\d{1,2}):(\d{2})$/);
        if (!K) return null;
        const B = parseInt(K[1], 10), j = parseInt(K[2], 10);
        return B > 23 || j > 59 ? null : `${String(B).padStart(2, "0")}:${String(j).padStart(2, "0")}`;
      }
      const T = R.match(/^(\d{1,2})(?::(\d{2}))?\s*(am|pm)$/);
      if (!T) return null;
      let D = parseInt(T[1], 10);
      const $ = parseInt(T[2] || "00", 10), F = T[3];
      return D < 1 || D > 12 || $ > 59 ? null : (F === "pm" && D !== 12 && (D += 12), F === "am" && D === 12 && (D = 0), `${String(D).padStart(2, "0")}:${String($).padStart(2, "0")}`);
    };
    i.value = h(n.modelValue), he(
      () => n.modelValue,
      (H) => {
        o.value = H || "", document.activeElement !== d.value?.querySelector("input") && (i.value = h(H));
      }
    ), he(
      () => n.displayFormat,
      () => {
        i.value = h(o.value);
      }
    );
    const y = I(() => {
      n.displayFormat;
      const H = [];
      for (let R = 0; R < 24; R++)
        for (let T = 0; T < 60; T += n.interval) {
          const D = `${String(R).padStart(2, "0")}:${String(T).padStart(2, "0")}`;
          H.push({ label: h(D), value: D });
        }
      return H;
    }), b = I(
      () => r.value ? y.value.filter(
        (H) => H.label.toLowerCase().includes(r.value.toLowerCase())
      ) : y.value
    ), _ = I(
      () => b.value.length ? b.value : y.value
    ), C = (H) => {
      const R = H.target;
      let T = R.value;
      if (n.displayFormat === "24") {
        if (T = T.replace(/[^0-9:]/g, "").slice(0, 5), /^\d{2}$/.test(T)) {
          T += ":", i.value = T, r.value = T, ge(() => R.setSelectionRange(3, 3));
          return;
        }
        /^\d{2}:\d/.test(T) && parseInt(T.slice(0, 2), 10) > 23 && (T = "23:" + T.slice(3)), /^\d{2}:\d{2}$/.test(T) && parseInt(T.slice(3), 10) > 59 && (T = T.slice(0, 3) + "59");
      } else {
        if (T = T.replace(/[^0-9: apm]/g, ""), T = T.replace(/([ap])m*([ap])/g, "$1").replace(/(am|pm).+/, "$1").slice(0, 8), /^\d{2}$/.test(T)) {
          T += ":", i.value = T, r.value = T, ge(() => R.setSelectionRange(3, 3));
          return;
        }
        if (/^\d{2}/.test(T)) {
          const D = parseInt(T.slice(0, 2), 10);
          D > 12 && (T = "12" + T.slice(2)), D === 0 && (T = "01" + T.slice(2));
        }
        /^\d{2}:\d{2}/.test(T) && parseInt(T.slice(3, 5), 10) > 59 && (T = T.slice(0, 3) + "59" + T.slice(5));
      }
      i.value = T, r.value = T;
    }, k = () => {
      const H = g(i.value);
      if (!H) {
        i.value = h(o.value), r.value = "", s.value = !1;
        return;
      }
      o.value = H, i.value = h(H), r.value = "", a("update:modelValue", H), a("change", H), s.value = !1;
    }, E = () => {
      if (!d.value) return;
      const H = d.value.getBoundingClientRect();
      v.value = {
        left: H.left,
        top: H.top,
        bottom: H.bottom,
        width: H.width
      };
      const R = window.innerHeight - H.bottom;
      u.value = R < vi && H.top > R;
    }, N = (H, R) => {
      R === 0 && H && (p.value = H);
    }, z = (H) => {
      o.value = H, i.value = h(H), r.value = "", a("update:modelValue", H), a("change", H), s.value = !1;
    }, x = () => {
      i.value = h(o.value), r.value = "", s.value = !0, E();
    }, W = () => setTimeout(() => {
      k(), s.value = !1;
    }, 120), Y = (H) => {
      d.value && !d.value.contains(H.target) && m.value && !m.value.contains(H.target) && (s.value = !1);
    };
    he(r, async () => {
      await ge(), p.value && p.value.scrollIntoView({ behavior: "smooth", block: "nearest" });
    });
    const O = () => E();
    we(() => {
      window.addEventListener("resize", O), document.addEventListener("mousedown", Y), ge(E);
    }), Ae(() => {
      window.removeEventListener("resize", O), document.removeEventListener("mousedown", Y);
    });
    const V = () => {
      n.disabled || (s.value ? s.value = !1 : (i.value = h(o.value), r.value = "", s.value = !0, E()));
    };
    return (H, R) => (l(), c("div", {
      class: "fu-time-picker",
      ref_key: "inputRef",
      ref: d
    }, [
      Q(Oe, {
        type: "text",
        modelValue: i.value,
        "onUpdate:modelValue": R[0] || (R[0] = (T) => i.value = T),
        placeholder: t.displayFormat === "12" ? "hh:mm am/pm" : "HH:mm",
        onFocus: x,
        onInput: C,
        onKeydown: $e(ue(k, ["prevent"]), ["enter"]),
        onBlur: W,
        label: t.label,
        error: t.error,
        required: t.required,
        disabled: t.disabled,
        size: t.size,
        formWrapperWidth: t.formWrapperWidth
      }, {
        right: ce(() => [
          Q(ee(xe), {
            style: { cursor: "pointer" },
            onMousedown: ue(V, ["prevent"])
          })
        ]),
        _: 1
      }, 8, ["modelValue", "placeholder", "onKeydown", "label", "error", "required", "disabled", "size", "formWrapperWidth"]),
      (l(), Z(Ee, { to: "body" }, [
        s.value ? (l(), c("div", {
          key: 0,
          ref_key: "dropdownRef",
          ref: m,
          class: X(["fu-time-dropdown customScrollBar", { "open-up": u.value }]),
          style: ie({
            left: v.value.left + "px",
            width: v.value.width + "px",
            top: u.value ? v.value.top - vi + "px" : v.value.bottom + "px"
          })
        }, [
          (l(!0), c(L, null, oe(_.value, (T, D) => (l(), c("div", {
            key: T.value,
            class: "fu-time-option",
            ref_for: !0,
            ref: ($) => N($, D),
            onMousedown: ue(($) => z(T.value), ["prevent"])
          }, w(T.label), 41, Uf))), 128))
        ], 6)) : A("", !0)
      ]))
    ], 512));
  }
}, Yf = /* @__PURE__ */ ae(Wf, [["__scopeId", "data-v-72c32689"]]), Gf = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Yf
}, Symbol.toStringTag, { value: "Module" })), qf = {};
function Kf(t, e) {
  return null;
}
const Ra = /* @__PURE__ */ ae(qf, [["render", Kf]]), Qf = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Ra
}, Symbol.toStringTag, { value: "Module" })), pi = [
  { type: "signature", label: "Signature", icon: $l, width: 0.22, height: 0.05, keyPrefix: "Signature" },
  { type: "initials", label: "Initials", icon: gl, width: 0.1, height: 0.05, keyPrefix: "Initials" },
  { type: "text", label: "Text Field", icon: Pl, width: 0.22, height: 0.04, keyPrefix: "TextField" },
  { type: "date", label: "Date", icon: pl, width: 0.16, height: 0.04, keyPrefix: "Date" },
  { type: "file", label: "File Upload", icon: Bl, width: 0.2, height: 0.05, keyPrefix: "CollectFile" },
  { type: "dropdown", label: "Dropdown", icon: xe, width: 0.2, height: 0.04, keyPrefix: "Dropdown" },
  { type: "radio", label: "Radio Buttons", icon: _l, width: 0.18, height: 0.04, keyPrefix: "RadioGroup" },
  { type: "checkbox", label: "Checkbox", icon: xl, width: 0.06, height: 0.04, keyPrefix: "Checkbox" }
];
function He(t) {
  return pi.find((e) => e.type === t) ?? pi[0];
}
const Zf = 1123;
function Jf(t) {
  const e = String(t ?? "");
  let n = 0;
  for (let a = 0; a < e.length; a++)
    n = (n << 5) - n + e.charCodeAt(a), n |= 0;
  return Math.abs(n) % 360;
}
const Xf = 220;
function gi(t) {
  return `hsl(${t ? Jf(t) : Xf}, 70%, 42%)`;
}
function em(t, e) {
  return e ? (t || []).find((a) => String(a.id) === String(e))?.color || gi(e) : gi(null);
}
function tm(t) {
  return `color-mix(in srgb, ${t} 18%, white)`;
}
function jo(t) {
  return !t?.role || t.role === "signer";
}
const nm = { class: "fu-modal__header" }, am = { class: "fu-modal__title" }, im = { class: "fu-modal__body" }, om = {
  key: 0,
  class: "fu-modal__footer"
}, rm = /* @__PURE__ */ le({
  __name: "FusionModal",
  props: {
    isVisible: { type: Boolean },
    title: {},
    size: { default: "md" },
    showFooter: { type: Boolean, default: !0 },
    fixedHeight: { type: Boolean }
  },
  emits: ["close", "cancel", "confirm"],
  setup(t, { emit: e }) {
    const n = e, a = () => n("close");
    function i(o) {
      (o.key === "Escape" || o.key === "Esc") && a();
    }
    return we(() => {
      window.addEventListener("keydown", i);
    }), Ae(() => {
      window.removeEventListener("keydown", i);
    }), (o, r) => (l(), Z(Ee, { to: "body" }, [
      t.isVisible ? (l(), c("div", {
        key: 0,
        class: "fu-modal__backdrop",
        onClick: ue(a, ["self"])
      }, [
        f("div", {
          class: X(["fu-modal", [`fu-modal--${t.size}`, { "fu-modal--fixed-height": t.fixedHeight }]])
        }, [
          f("div", nm, [
            f("h3", am, w(t.title), 1),
            Q(Pe, {
              text: " ",
              icon: ee(Xe),
              class: "fu-modal__close",
              onClick: a,
              variant: "ghost",
              size: "sm"
            }, null, 8, ["icon"])
          ]),
          f("div", im, [
            se(o.$slots, "default", {}, () => [
              r[0] || (r[0] = de(" Default modal content. ", -1))
            ], !0)
          ]),
          t.showFooter ? (l(), c("div", om, [
            se(o.$slots, "footer", {}, void 0, !0)
          ])) : A("", !0)
        ], 2)
      ])) : A("", !0)
    ]));
  }
}), en = /* @__PURE__ */ ae(rm, [["__scopeId", "data-v-9804bf15"]]), sm = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: en
}, Symbol.toStringTag, { value: "Module" })), lm = { class: "fu-tabs" }, um = { class: "fu-tabs__header-wrapper" }, cm = { class: "fu-tabs-buttons scrollbar__control customScrollBar" }, dm = ["onClick", "disabled"], fm = {
  key: 0,
  class: "fu-tab__avatar"
}, mm = ["src"], hm = {
  key: 1,
  class: "fu-tab__avatar-fallback"
}, vm = {
  key: 2,
  class: "fu-tab__title"
}, pm = {
  key: 3,
  class: "fu-tab__count"
}, gm = { class: "fu-tabs__content-wrapper" }, ym = {
  key: 0,
  class: "fu-tabs__footer"
}, bm = {
  __name: "FusionTab",
  props: {
    tabs: Array,
    defaultActiveDesktop: String,
    defaultActiveMobile: String
  },
  emits: ["tab-change"],
  setup(t, { expose: e, emit: n }) {
    const a = t, i = n, o = M(window.innerWidth <= 768), r = M(""), s = M(null), u = I(
      () => a.tabs.filter((h) => !h.mobileOnly || o.value)
    );
    function d() {
      const h = s.value;
      h && (h.style.overflowY = "hidden", requestAnimationFrame(() => {
        h.style.overflowY = "auto";
      }));
    }
    function m(h) {
      const g = a.tabs.find((y) => y.key === h);
      !g || g.disabled || (r.value = h, i("tab-change", h), ge(() => {
        const y = s.value;
        y && (y.scrollTop = 0, d());
      }));
    }
    function v() {
      const h = a.tabs[0]?.key, g = o.value ? a.defaultActiveMobile || h : a.defaultActiveDesktop || h;
      r.value = g;
    }
    function p() {
      const h = o.value;
      o.value = window.innerWidth <= 768, h !== o.value && ge(v);
    }
    return we(() => {
      p(), v(), d(), window.addEventListener("resize", p);
    }), Ae(() => {
      window.removeEventListener("resize", p);
    }), e({ setActive: m }), (h, g) => (l(), c("div", lm, [
      f("div", um, [
        f("div", cm, [
          (l(!0), c(L, null, oe(u.value, (y) => (l(), c("button", {
            key: y.key,
            onClick: (b) => m(y.key),
            class: X(["fu-tab", { "fu-tab--active": r.value === y.key }]),
            disabled: y.disabled
          }, [
            y.avatarSrc || y.avatarText ? (l(), c("div", fm, [
              y.avatarSrc ? (l(), c("img", {
                key: 0,
                src: y.avatarSrc,
                class: "fu-tab__avatar-img",
                alt: "avatar"
              }, null, 8, mm)) : (l(), c("div", hm, w(y.avatarText?.charAt(0)?.toUpperCase()), 1))
            ])) : y.icon ? (l(), Z(me(y.icon), {
              key: 1,
              size: 16,
              class: "fu-tab__icon"
            })) : A("", !0),
            !y.avatarSrc && !y.avatarText && y.title ? (l(), c("span", vm, w(y.title), 1)) : A("", !0),
            typeof y.count == "number" ? (l(), c("span", pm, w(y.count), 1)) : A("", !0)
          ], 10, dm))), 128))
        ])
      ]),
      f("div", gm, [
        f("div", {
          class: "fu-tabs__body scrollbar__control customScrollBar",
          ref_key: "tabBody",
          ref: s
        }, [
          (l(), Z(nl, null, [
            (l(!0), c(L, null, oe(u.value, (y) => je((l(), c("div", {
              key: y.key,
              class: "fu-tab-panel"
            }, [
              se(h.$slots, y.key, {}, void 0, !0)
            ])), [
              [Ea, r.value === y.key]
            ])), 128))
          ], 1024))
        ], 512),
        h.$slots.footer ? (l(), c("div", ym, [
          se(h.$slots, "footer", {}, void 0, !0)
        ])) : A("", !0)
      ])
    ]));
  }
}, $a = /* @__PURE__ */ ae(bm, [["__scopeId", "data-v-6151e991"]]), _m = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: $a
}, Symbol.toStringTag, { value: "Module" })), Cm = { class: "sig-draw" }, wm = { class: "sig-draw__toolbar" }, Am = { class: "sig-draw__colors" }, km = ["onClick"], Sm = { class: "sig-type" }, Tm = { class: "sig-type__preview" }, Em = { class: "sig-saved" }, Mm = ["src"], Nm = {
  key: 1,
  class: "sig-saved__typed"
}, Dm = {
  key: 1,
  class: "sig-saved__empty"
}, Im = { class: "sig-footer" }, Om = {
  key: 0,
  class: "sig-hint"
}, Rm = { class: "sig-actions" }, yi = "skkido_saved_signature", $m = {
  __name: "SignatureCaptureModal",
  props: {
    isVisible: { type: Boolean, default: !1 },
    // Who this signature is being captured for — the recipient the field is
    // assigned to, resolved by the caller (FieldOverlay.vue / PreviewRender.vue
    // both already have store.contractRecipients to look this up from). Binds
    // the signer's identity onto the signed payload, same as PandaDoc/DocuSign
    // stamping "Signed by <name>" rather than just storing an anonymous doodle.
    signerName: { type: String, default: "" }
  },
  emits: ["close", "signed"],
  setup(t, { emit: e }) {
    const n = t, a = e, i = [
      { key: "draw", title: "Draw" },
      { key: "type", title: "Type" },
      { key: "mySignature", title: "My Signature" }
    ], o = M("draw"), r = ["#111827", "#2563eb", "#dc2626"], s = M(null), u = M(null), d = M(!1), m = M(!1), v = M(r[0]);
    function p() {
      const O = s.value, V = u.value;
      if (!O || !V) return;
      const H = V.getBoundingClientRect(), R = window.devicePixelRatio || 1;
      O.width = H.width * R, O.height = H.height * R, O.style.width = H.width + "px", O.style.height = H.height + "px", O.getContext("2d").scale(R, R);
    }
    function h(O) {
      const V = s.value.getBoundingClientRect(), H = O.touches?.[0] ?? O;
      return { x: H.clientX - V.left, y: H.clientY - V.top };
    }
    function g(O) {
      d.value = !0;
      const V = s.value.getContext("2d"), { x: H, y: R } = h(O);
      V.beginPath(), V.moveTo(H, R);
    }
    function y(O) {
      if (!d.value) return;
      const V = s.value.getContext("2d"), { x: H, y: R } = h(O);
      V.strokeStyle = v.value, V.lineWidth = 2.5, V.lineCap = "round", V.lineTo(H, R), V.stroke(), m.value = !0;
    }
    function b() {
      d.value = !1;
    }
    function _() {
      const O = s.value;
      if (!O) return;
      const V = window.devicePixelRatio || 1;
      O.getContext("2d").clearRect(0, 0, O.width / V, O.height / V), m.value = !1;
    }
    const C = M(""), k = M(null);
    function E() {
      try {
        k.value = JSON.parse(localStorage.getItem(yi) || "null");
      } catch {
        k.value = null;
      }
    }
    function N(O) {
      try {
        localStorage.setItem(yi, JSON.stringify(O));
      } catch {
      }
      k.value = O;
    }
    const z = I(() => o.value === "draw" ? m.value : o.value === "type" ? C.value.trim().length >= 2 : o.value === "mySignature" ? !!k.value : !1), x = I(
      () => (o.value === "draw" || o.value === "type") && !z.value
    );
    function W() {
      if (!z.value) return;
      let O = null;
      o.value === "draw" ? O = { type: "drawn", dataUrl: s.value.toDataURL("image/png") } : o.value === "type" ? O = { type: "typed", text: C.value.trim() } : o.value === "mySignature" && (O = k.value), O && (o.value !== "mySignature" && N(O), a("signed", {
        ...O,
        signerName: n.signerName,
        signedOn: (/* @__PURE__ */ new Date()).toISOString()
      }), a("close"));
    }
    let Y = null;
    return we(() => {
      E(), ge(p), Y = new ResizeObserver(() => p()), u.value && Y.observe(u.value);
    }), Ae(() => {
      Y?.disconnect();
    }), he(
      () => n.isVisible,
      (O) => {
        O && (o.value = "draw", m.value = !1, C.value = "", E(), ge(() => {
          p(), _();
        }));
      }
    ), (O, V) => (l(), Z(en, {
      isVisible: t.isVisible,
      title: "Signature",
      size: "md",
      onClose: V[3] || (V[3] = (H) => O.$emit("close"))
    }, {
      footer: ce(() => [
        f("div", Im, [
          V[5] || (V[5] = f("p", { class: "sig-consent" }, " By electronically signing this document, I agree that my signature and initials are the equivalent of my handwritten signature and are considered originals on all documents, including legally binding contracts. ", -1)),
          x.value ? (l(), c("div", Om, " To make your signature valid, please use at least two alphanumeric characters or continue signing. ")) : A("", !0),
          f("div", Rm, [
            Q(Se, {
              variant: "outline",
              text: "Cancel",
              onClick: V[2] || (V[2] = (H) => O.$emit("close"))
            }),
            Q(Se, {
              variant: "success",
              text: "Accept and sign",
              disabled: !z.value,
              onClick: W
            }, null, 8, ["disabled"])
          ])
        ])
      ]),
      default: ce(() => [
        Q($a, {
          defaultActiveDesktop: "draw",
          defaultActiveMobile: "draw",
          tabs: i,
          onTabChange: V[1] || (V[1] = (H) => o.value = H)
        }, {
          draw: ce(() => [
            f("div", Cm, [
              f("div", wm, [
                f("button", {
                  class: "sig-draw__clear",
                  onClick: _
                }, "Clear"),
                f("div", Am, [
                  (l(), c(L, null, oe(r, (H) => f("button", {
                    key: H,
                    class: X(["sig-draw__swatch", { active: v.value === H }]),
                    style: ie({ backgroundColor: H }),
                    onClick: (R) => v.value = H
                  }, null, 14, km)), 64))
                ])
              ]),
              f("div", {
                ref_key: "canvasWrapRef",
                ref: u,
                class: "sig-draw__pad"
              }, [
                f("canvas", {
                  ref_key: "canvasRef",
                  ref: s,
                  onMousedown: g,
                  onMousemove: y,
                  onMouseup: b,
                  onMouseleave: b,
                  onTouchstart: ue(g, ["prevent"]),
                  onTouchmove: ue(y, ["prevent"]),
                  onTouchend: ue(b, ["prevent"])
                }, null, 544),
                V[4] || (V[4] = f("div", { class: "sig-draw__line" }, null, -1))
              ], 512)
            ])
          ]),
          type: ce(() => [
            f("div", Sm, [
              Q(Oe, {
                modelValue: C.value,
                "onUpdate:modelValue": V[0] || (V[0] = (H) => C.value = H),
                label: "Type your name",
                placeholder: "Your full name",
                size: "md",
                variant: "outline",
                formWrapperWidth: "100%"
              }, null, 8, ["modelValue"]),
              f("div", Tm, w(C.value || "Your signature"), 1)
            ])
          ]),
          mySignature: ce(() => [
            f("div", Em, [
              k.value ? (l(), c(L, { key: 0 }, [
                k.value.dataUrl ? (l(), c("img", {
                  key: 0,
                  src: k.value.dataUrl,
                  alt: "Saved signature",
                  class: "sig-saved__preview"
                }, null, 8, Mm)) : (l(), c("div", Nm, w(k.value.text), 1))
              ], 64)) : (l(), c("p", Dm, " No saved signature yet — draw or type one first and it'll be remembered here next time. "))
            ])
          ]),
          _: 1
        })
      ]),
      _: 1
    }, 8, ["isVisible"]));
  }
}, Uo = /* @__PURE__ */ ae($m, [["__scopeId", "data-v-8f51d5c8"]]), xm = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Uo
}, Symbol.toStringTag, { value: "Module" })), Pm = { class: "init-draw" }, Fm = { class: "init-draw__toolbar" }, Bm = { class: "init-draw__colors" }, zm = ["onClick"], Lm = { class: "init-type" }, Vm = { class: "init-type__preview" }, Hm = { class: "init-footer" }, jm = {
  key: 0,
  class: "init-hint"
}, Um = { class: "init-actions" }, Wm = {
  __name: "InitialsCaptureModal",
  props: {
    isVisible: { type: Boolean, default: !1 },
    // Same reasoning as SignatureCaptureModal's signerName — who these
    // initials are being captured for, resolved by the caller.
    signerName: { type: String, default: "" }
  },
  emits: ["close", "initialed"],
  setup(t, { emit: e }) {
    const n = t, a = e, i = [
      { key: "draw", title: "Draw" },
      { key: "type", title: "Type" }
    ], o = M("draw"), r = ["#111827", "#2563eb", "#dc2626"], s = M(null), u = M(null), d = M(!1), m = M(!1), v = M(r[0]);
    function p() {
      const x = s.value, W = u.value;
      if (!x || !W) return;
      const Y = W.getBoundingClientRect(), O = window.devicePixelRatio || 1;
      x.width = Y.width * O, x.height = Y.height * O, x.style.width = Y.width + "px", x.style.height = Y.height + "px", x.getContext("2d").scale(O, O);
    }
    function h(x) {
      const W = s.value.getBoundingClientRect(), Y = x.touches?.[0] ?? x;
      return { x: Y.clientX - W.left, y: Y.clientY - W.top };
    }
    function g(x) {
      d.value = !0;
      const W = s.value.getContext("2d"), { x: Y, y: O } = h(x);
      W.beginPath(), W.moveTo(Y, O);
    }
    function y(x) {
      if (!d.value) return;
      const W = s.value.getContext("2d"), { x: Y, y: O } = h(x);
      W.strokeStyle = v.value, W.lineWidth = 2.5, W.lineCap = "round", W.lineTo(Y, O), W.stroke(), m.value = !0;
    }
    function b() {
      d.value = !1;
    }
    function _() {
      const x = s.value;
      if (!x) return;
      const W = window.devicePixelRatio || 1;
      x.getContext("2d").clearRect(0, 0, x.width / W, x.height / W), m.value = !1;
    }
    const C = M(""), k = I(() => o.value === "draw" ? m.value : o.value === "type" ? C.value.trim().length >= 1 : !1), E = I(
      () => (o.value === "draw" || o.value === "type") && !k.value
    );
    function N() {
      if (!k.value) return;
      let x = null;
      o.value === "draw" ? x = { type: "drawn", dataUrl: s.value.toDataURL("image/png") } : o.value === "type" && (x = { type: "typed", text: C.value.trim() }), x && (a("initialed", {
        ...x,
        signerName: n.signerName,
        signedOn: (/* @__PURE__ */ new Date()).toISOString()
      }), a("close"));
    }
    let z = null;
    return we(() => {
      ge(p), z = new ResizeObserver(() => p()), u.value && z.observe(u.value);
    }), Ae(() => {
      z?.disconnect();
    }), he(
      () => n.isVisible,
      (x) => {
        x && (o.value = "draw", m.value = !1, C.value = "", ge(() => {
          p(), _();
        }));
      }
    ), (x, W) => (l(), Z(en, {
      isVisible: t.isVisible,
      title: "Initials",
      size: "md",
      onClose: W[3] || (W[3] = (Y) => x.$emit("close"))
    }, {
      footer: ce(() => [
        f("div", Hm, [
          W[5] || (W[5] = f("p", { class: "init-consent" }, " By continuing, I agree that these initials are the equivalent of my handwritten initials and are considered original on all documents, including legally binding contracts. ", -1)),
          E.value ? (l(), c("div", jm, " To make your initials valid, please draw or type at least one character. ")) : A("", !0),
          f("div", Um, [
            Q(Se, {
              variant: "outline",
              text: "Cancel",
              onClick: W[2] || (W[2] = (Y) => x.$emit("close"))
            }),
            Q(Se, {
              variant: "success",
              text: "Accept and Sign",
              disabled: !k.value,
              onClick: N
            }, null, 8, ["disabled"])
          ])
        ])
      ]),
      default: ce(() => [
        Q($a, {
          defaultActiveDesktop: "draw",
          defaultActiveMobile: "draw",
          tabs: i,
          onTabChange: W[1] || (W[1] = (Y) => o.value = Y)
        }, {
          draw: ce(() => [
            f("div", Pm, [
              f("div", Fm, [
                f("button", {
                  class: "init-draw__clear",
                  onClick: _
                }, "Clear"),
                f("div", Bm, [
                  (l(), c(L, null, oe(r, (Y) => f("button", {
                    key: Y,
                    class: X(["init-draw__swatch", { active: v.value === Y }]),
                    style: ie({ backgroundColor: Y }),
                    onClick: (O) => v.value = Y
                  }, null, 14, zm)), 64))
                ])
              ]),
              f("div", {
                ref_key: "canvasWrapRef",
                ref: u,
                class: "init-draw__pad"
              }, [
                f("canvas", {
                  ref_key: "canvasRef",
                  ref: s,
                  onMousedown: g,
                  onMousemove: y,
                  onMouseup: b,
                  onMouseleave: b,
                  onTouchstart: ue(g, ["prevent"]),
                  onTouchmove: ue(y, ["prevent"]),
                  onTouchend: ue(b, ["prevent"])
                }, null, 544),
                W[4] || (W[4] = f("div", { class: "init-draw__line" }, null, -1))
              ], 512)
            ])
          ]),
          type: ce(() => [
            f("div", Lm, [
              Q(Oe, {
                modelValue: C.value,
                "onUpdate:modelValue": W[0] || (W[0] = (Y) => C.value = Y),
                label: "Type your initials",
                placeholder: "e.g. JD",
                size: "md",
                variant: "outline",
                formWrapperWidth: "100%"
              }, null, 8, ["modelValue"]),
              f("div", Vm, w(C.value || "Your initials"), 1)
            ])
          ]),
          _: 1
        })
      ]),
      _: 1
    }, 8, ["isVisible"]));
  }
}, Wo = /* @__PURE__ */ ae(Wm, [["__scopeId", "data-v-a9508b77"]]), Ym = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Wo
}, Symbol.toStringTag, { value: "Module" })), Gm = { class: "fu-popover__body customScrollBar" }, qm = /* @__PURE__ */ le({
  __name: "FuPopover",
  props: {
    align: {},
    side: {},
    offset: {},
    width: {},
    maxHeight: {},
    stickyHeader: { type: Boolean },
    stickyFooter: { type: Boolean }
  },
  emits: ["open", "close"],
  setup(t, { expose: e, emit: n }) {
    const a = t, i = n, o = M(!1), r = M(null), s = M(null), u = M({
      position: "fixed",
      visibility: "hidden",
      top: "-9999px",
      left: "-9999px",
      zIndex: 9999
    }), d = a.stickyHeader ?? !1, m = a.stickyFooter ?? !1;
    function v() {
      o.value ? h() : p();
    }
    function p() {
      u.value = {
        position: "fixed",
        visibility: "hidden",
        top: "-9999px",
        left: "-9999px",
        width: a.width ?? "auto",
        zIndex: 9999,
        maxHeight: a.maxHeight ?? "none"
      }, o.value = !0, i("open"), ge(
        () => requestAnimationFrame(
          () => requestAnimationFrame(() => {
            g(), ge(() => {
              const b = s.value?.querySelector("input, textarea");
              b && b.focus();
            });
          })
        )
      );
    }
    function h() {
      o.value = !1, i("close");
    }
    function g() {
      if (!r.value || !s.value) return;
      const b = r.value.getBoundingClientRect(), _ = s.value.getBoundingClientRect(), C = 8, k = a.offset ?? 6, E = window.innerHeight - b.bottom - C, N = b.top - C;
      let z = a.side ?? "bottom";
      z === "bottom" && _.height > E && N > E ? z = "top" : z === "top" && _.height > N && E > N && (z = "bottom");
      let x = z === "top" ? b.top - _.height - k : b.bottom + k, W = a.align === "right" ? b.right - _.width : a.align === "center" ? b.left + b.width / 2 - _.width / 2 : b.left;
      W = Math.max(C, Math.min(W, window.innerWidth - _.width - C)), x = Math.max(C, Math.min(x, window.innerHeight - _.height - C)), u.value = {
        position: "fixed",
        top: `${x}px`,
        left: `${W}px`,
        width: a.width ?? "auto",
        maxHeight: a.maxHeight ?? "none",
        zIndex: 9999,
        visibility: "visible"
      };
    }
    function y(b) {
      if (!o.value) return;
      const _ = b.target;
      r.value?.contains(_) || s.value?.contains(_) || _ instanceof Element && _.closest(".fu-popover, .fu-popover-wrap") || h();
    }
    return we(() => {
      window.addEventListener("mousedown", y), window.addEventListener("resize", g), window.addEventListener("scroll", g, !0);
    }), Ae(() => {
      window.removeEventListener("mousedown", y), window.removeEventListener("resize", g), window.removeEventListener("scroll", g, !0);
    }), e({ open: p, close: h }), (b, _) => (l(), c(L, null, [
      f("div", {
        ref_key: "triggerRef",
        ref: r,
        class: "fu-popover-wrap",
        onClick: v
      }, [
        se(b.$slots, "trigger", {}, void 0, !0)
      ], 512),
      (l(), Z(Ee, { to: "body" }, [
        Q(Ve, { name: "fu-popover" }, {
          default: ce(() => [
            o.value ? (l(), c("div", {
              key: 0,
              ref_key: "popoverRef",
              ref: s,
              class: "fu-popover",
              style: ie(u.value),
              tabindex: "-1",
              onClick: _[0] || (_[0] = ue(() => {
              }, ["stop"]))
            }, [
              b.$slots.header ? (l(), c("div", {
                key: 0,
                class: X(["fu-popover__header", { "is-sticky": ee(d) }])
              }, [
                se(b.$slots, "header", {}, void 0, !0)
              ], 2)) : A("", !0),
              f("div", Gm, [
                se(b.$slots, "default", {}, void 0, !0)
              ]),
              b.$slots.footer ? (l(), c("div", {
                key: 1,
                class: X(["fu-popover__footer", { "is-sticky": ee(m) }])
              }, [
                se(b.$slots, "footer", {}, void 0, !0)
              ], 2)) : A("", !0)
            ], 4)) : A("", !0)
          ]),
          _: 3
        })
      ]))
    ], 64));
  }
}), Yo = /* @__PURE__ */ ae(qm, [["__scopeId", "data-v-ff9bba0a"]]), Km = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Yo
}, Symbol.toStringTag, { value: "Module" })), Qm = ["disabled"], Zm = { key: 0 }, Jm = {
  __name: "DateCaptureField",
  props: {
    value: { type: String, default: null },
    placeholder: { type: String, default: "" },
    readOnly: { type: Boolean, default: !1 }
  },
  emits: ["update:value"],
  setup(t, { emit: e }) {
    const n = t, a = e, i = M(null);
    function o(u) {
      const d = new Date(u);
      return Number.isNaN(d.getTime()) ? u : d.toLocaleDateString(void 0, { year: "numeric", month: "short", day: "numeric" });
    }
    const r = I(() => n.value ? o(n.value) : "");
    function s(u) {
      a("update:value", u), i.value?.close();
    }
    return (u, d) => (l(), Z(Yo, {
      ref_key: "popoverRef",
      ref: i,
      align: "left",
      side: "bottom",
      width: "240px"
    }, {
      trigger: ce(() => [
        f("button", {
          type: "button",
          class: "dcf-trigger",
          disabled: t.readOnly
        }, [
          t.value ? (l(), c("span", Zm, w(r.value), 1)) : (l(), c(L, { key: 1 }, [
            (l(), Z(me(ee(He)("date").icon), { size: 13 })),
            f("span", null, w(t.placeholder || "Select a date"), 1)
          ], 64))
        ], 8, Qm)
      ]),
      default: ce(() => [
        Q(Ho, {
          modelValue: t.value || null,
          mode: "single",
          variant: "date",
          formWrapperWidth: "240px",
          "onUpdate:modelValue": s
        }, null, 8, ["modelValue"])
      ]),
      _: 1
    }, 512));
  }
}, Go = /* @__PURE__ */ ae(Jm, [["__scopeId", "data-v-b74c3f6a"]]), Xm = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Go
}, Symbol.toStringTag, { value: "Module" })), eh = { class: "fu-upload__content" }, th = {
  key: 0,
  class: "fu-upload__previews"
}, nh = ["onClick"], ah = ["src"], ih = {
  key: 1,
  class: "fu-upload__file-fallback"
}, oh = {
  key: 1,
  class: "fu-upload__prompt"
}, rh = ["multiple", "accept"], sh = /* @__PURE__ */ le({
  __name: "FusionUpload",
  props: {
    multiple: { type: Boolean, default: !1 },
    accept: { type: String, default: "*" },
    maxFiles: { type: Number, default: 1 / 0 },
    maxFileSizeMB: { type: Number, default: 1 / 0 }
  },
  emits: ["filesSelected", "uploadError"],
  setup(t, { emit: e }) {
    const n = t, a = e, i = M(!1), o = M(null), r = M([]), s = M([]);
    function u() {
      return typeof crypto < "u" && crypto.randomUUID ? crypto.randomUUID() : `file_${Date.now()}_${Math.random().toString(36).slice(2, 9)}`;
    }
    function d() {
      o.value?.click();
    }
    function m(g) {
      const y = g.target;
      y.files?.length && (p(y.files), y.value = "");
    }
    function v(g) {
      i.value = !1;
      const y = g.dataTransfer?.files;
      y?.length && p(y);
    }
    function p(g) {
      const y = Array.from(g);
      n.multiple || (r.value = [], s.value = []);
      for (const b of y) {
        const _ = n.maxFileSizeMB * 1024 * 1024;
        if (b.size > _) {
          const E = `File "${b.name}" exceeds max size of ${n.maxFileSizeMB} MB.`;
          a("uploadError", E);
          continue;
        }
        if (r.value.length >= n.maxFiles) {
          const E = `Maximum of ${n.maxFiles} files allowed.`;
          a("uploadError", E);
          break;
        }
        r.value.push(b);
        const C = u();
        if (b.type.startsWith("image/")) {
          const E = new FileReader();
          E.onload = (N) => {
            s.value.push({
              id: C,
              src: N.target?.result,
              file: b,
              isImage: !0
            });
          }, E.readAsDataURL(b);
        } else
          s.value.push({
            id: C,
            src: "",
            file: b,
            isImage: !1
          });
      }
      a("filesSelected", r.value);
    }
    function h(g) {
      r.value.splice(g, 1), s.value.splice(g, 1), a("filesSelected", r.value);
    }
    return (g, y) => (l(), c("div", {
      class: X(["fu-upload", { dragging: i.value }]),
      onClick: d,
      onDragover: y[0] || (y[0] = ue((b) => i.value = !0, ["prevent"])),
      onDragleave: y[1] || (y[1] = ue((b) => i.value = !1, ["prevent"])),
      onDrop: ue(v, ["prevent"])
    }, [
      f("div", eh, [
        s.value.length ? (l(), c("div", th, [
          (l(!0), c(L, null, oe(s.value, (b, _) => (l(), c("div", {
            key: b.id,
            class: "fu-upload__preview-item"
          }, [
            f("button", {
              class: "fu-upload__remove",
              onClick: ue((C) => h(_), ["stop"])
            }, " ✕ ", 8, nh),
            b.isImage ? (l(), c("img", {
              key: 0,
              src: b.src,
              class: "fu-upload__preview-img",
              alt: "Preview"
            }, null, 8, ah)) : (l(), c("div", ih, [
              Q(ee(fi), { size: 20 }),
              f("span", null, w(b.file.name), 1)
            ]))
          ]))), 128))
        ])) : (l(), c("div", oh, [
          Q(ee(fi), {
            class: "fu-upload__icon",
            size: 22
          }),
          se(g.$slots, "description", {}, () => [
            y[2] || (y[2] = f("p", { class: "fu-upload__text" }, " Drag & drop files or click to browse ", -1))
          ], !0)
        ])),
        f("input", {
          ref_key: "fileInput",
          ref: o,
          type: "file",
          class: "fu-upload__input",
          multiple: t.multiple,
          accept: t.accept,
          onChange: m
        }, null, 40, rh)
      ])
    ], 34));
  }
}), xa = /* @__PURE__ */ ae(sh, [["__scopeId", "data-v-1b1249ff"]]), lh = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: xa
}, Symbol.toStringTag, { value: "Module" })), uh = {
  key: 0,
  class: "fucm-error"
}, ch = {
  __name: "FileUploadCaptureModal",
  props: {
    isVisible: { type: Boolean, default: !1 }
  },
  emits: ["close", "uploaded"],
  setup(t, { emit: e }) {
    const n = e, a = M("");
    function i(r) {
      a.value = "";
      const s = r?.[0];
      if (!s) return;
      const u = new FileReader();
      u.onload = () => {
        n("uploaded", {
          name: s.name,
          size: s.size,
          type: s.type,
          dataUrl: u.result
        }), n("close");
      }, u.readAsDataURL(s);
    }
    function o(r) {
      a.value = r;
    }
    return (r, s) => (l(), Z(en, {
      isVisible: t.isVisible,
      title: "Upload file",
      size: "md",
      onClose: s[0] || (s[0] = (u) => r.$emit("close"))
    }, {
      default: ce(() => [
        Q(xa, {
          multiple: "",
          accept: "image/*,application/pdf",
          maxFiles: 3,
          maxFileSizeMB: 10,
          onFilesSelected: i,
          onUploadError: o
        }),
        a.value ? (l(), c("p", uh, w(a.value), 1)) : A("", !0)
      ]),
      _: 1
    }, 8, ["isVisible"]));
  }
}, qo = /* @__PURE__ */ ae(ch, [["__scopeId", "data-v-2d08ba85"]]), dh = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: qo
}, Symbol.toStringTag, { value: "Module" })), fh = { class: "fc-root" }, mh = {
  key: 0,
  class: "fc-field__signed"
}, hh = ["src", "alt"], vh = {
  key: 1,
  class: "fc-field__sig-typed"
}, ph = { class: "fc-field__signed-name" }, gh = ["disabled", "onClick"], yh = {
  key: 2,
  class: "fc-field__readonly"
}, bh = { class: "fc-field__label" }, _h = {
  key: 1,
  class: "fc-field__readonly"
}, Ch = {
  key: 2,
  class: "fc-field__readonly"
}, wh = { class: "fc-field__label" }, Ah = ["disabled", "required", "placeholder", "value", "onInput"], kh = {
  key: 1,
  class: "fc-field__readonly"
}, Sh = {
  key: 2,
  class: "fc-field__readonly"
}, Th = { class: "fc-field__label" }, Eh = ["disabled", "required", "value", "onChange"], Mh = {
  value: "",
  disabled: ""
}, Nh = ["value"], Dh = {
  key: 1,
  class: "fc-field__readonly"
}, Ih = {
  key: 2,
  class: "fc-field__readonly"
}, Oh = { class: "fc-field__label" }, Rh = {
  key: 0,
  class: "fc-field__radio-list"
}, $h = ["name", "disabled", "checked", "onChange"], xh = {
  key: 1,
  class: "fc-field__readonly"
}, Ph = {
  key: 2,
  class: "fc-field__readonly"
}, Fh = { class: "fc-field__label" }, Bh = {
  key: 0,
  class: "fc-field__checkbox-row"
}, zh = ["disabled", "checked", "onChange"], Lh = { key: 0 }, Vh = {
  key: 1,
  class: "fc-field__readonly fc-field__checkbox-row"
}, Hh = { key: 1 }, jh = ["disabled", "onClick"], Uh = {
  key: 1,
  class: "fc-field__readonly fc-field__file"
}, Wh = {
  __name: "FieldCaptureOverlay",
  props: {
    pages: { type: Array, default: () => [] },
    recipient: { type: Object, default: null },
    recipients: { type: Array, default: () => [] },
    readOnly: { type: Boolean, default: !1 },
    hostEl: { type: Object, default: null }
  },
  emits: ["update:capturedFields"],
  setup(t, { expose: e, emit: n }) {
    const a = t, i = n, o = Kt({}), r = Kt({}), s = M(null);
    function u(F) {
      const K = r[F];
      K && (K.scrollIntoView({ behavior: "smooth", block: "center" }), s.value = F, setTimeout(() => {
        s.value === F && (s.value = null);
      }, 1200));
    }
    e({ focusField: u }), he(
      () => a.recipient,
      (F) => {
        Object.keys(o).forEach((K) => delete o[K]), Object.assign(o, F?.field_values || {});
      },
      { immediate: !0 }
    ), he(
      o,
      () => {
        i(
          "update:capturedFields",
          Object.entries(o).map(([F, K]) => ({ fieldId: F, value: K }))
        );
      },
      { deep: !0 }
    );
    function d(F, K) {
      o[F] = K;
    }
    function m(F) {
      const K = _(F);
      return K != null && K !== "";
    }
    function v(F) {
      return !a.readOnly && p(F);
    }
    function p(F) {
      return F.recipientId === a.recipient?.id && jo(a.recipient);
    }
    function h(F) {
      return em(a.recipients, F);
    }
    function g(F) {
      return m(F) ? { border: "none", background: "transparent", color: "#111827" } : p(F) ? {
        borderColor: h(F.recipientId),
        backgroundColor: tm(h(F.recipientId)),
        color: h(F.recipientId)
      } : { borderColor: "#d1d5db", backgroundColor: "#f3f4f6", color: "#9ca3af" };
    }
    function y(F) {
      return p(F) ? a.recipient?.name || "" : b(F.recipientId)?.name || "";
    }
    function b(F) {
      return a.recipients.find((K) => String(K.id) === String(F));
    }
    function _(F) {
      return p(F) ? o[F.id] : b(F.recipientId)?.field_values?.[F.id];
    }
    function C(F) {
      if (!F) return "";
      const K = new Date(F);
      return Number.isNaN(K.getTime()) ? F : K.toLocaleDateString(void 0, { year: "numeric", month: "short", day: "numeric" });
    }
    const k = M([]);
    let E = null;
    function N() {
      const F = a.hostEl;
      if (!F) return;
      const K = F.querySelectorAll(".page-renderer");
      k.value = a.pages.map((B, j) => {
        const S = K[j];
        return S ? {
          top: S.offsetTop,
          left: S.offsetLeft,
          width: S.offsetWidth,
          height: S.offsetHeight
        } : null;
      });
    }
    he(
      () => a.hostEl,
      async (F) => {
        E?.disconnect(), E = null, F && (await ge(), N(), E = new ResizeObserver(() => N()), E.observe(F));
      },
      { immediate: !0 }
    ), he(
      () => a.pages,
      async () => {
        await ge(), N();
      }
    ), Ae(() => E?.disconnect());
    function z(F, K) {
      const B = k.value[K];
      return B ? {
        position: "absolute",
        left: B.left + F.x * B.width + "px",
        top: B.top + F.y * B.height + "px",
        width: F.width * B.width + "px",
        // Height is stored as a fraction of the editor's nominal page height
        // (PAGE_HEIGHT_PX), not a fraction of the actual rendered page height —
        // matching how FieldOverlay.vue renders it in the editor.
        height: F.height * Zf + "px"
      } : { display: "none" };
    }
    const x = M(!1), W = M(!1), Y = M(!1), O = M(null);
    function V(F) {
      a.readOnly || (O.value = F, x.value = !0);
    }
    function H(F) {
      a.readOnly || (O.value = F, W.value = !0);
    }
    function R(F) {
      a.readOnly || (O.value = F, Y.value = !0);
    }
    function T(F) {
      O.value && d(O.value.id, F);
    }
    function D(F) {
      O.value && d(O.value.id, F);
    }
    function $(F) {
      O.value && d(O.value.id, F);
    }
    return (F, K) => (l(), c("div", fh, [
      (l(!0), c(L, null, oe(t.pages, (B, j) => (l(), c(L, {
        key: B.id
      }, [
        (l(!0), c(L, null, oe(B.fields || [], (S) => (l(), c("div", {
          key: S.id,
          ref_for: !0,
          ref: (P) => r[S.id] = P,
          class: X(["fc-field", {
            "fc-field--mine": v(S),
            "fc-field--filled": m(S),
            "fc-field--flash": s.value === S.id
          }]),
          style: ie({ ...z(S, j), ...g(S) })
        }, [
          S.type === "signature" || S.type === "initials" ? (l(), c(L, { key: 0 }, [
            _(S) ? (l(), c("div", mh, [
              _(S).dataUrl || _(S).url ? (l(), c("img", {
                key: 0,
                src: _(S).dataUrl || _(S).url,
                class: "fc-field__sig-img",
                alt: S.type
              }, null, 8, hh)) : (l(), c("span", vh, w(_(S).text), 1)),
              f("span", ph, w(y(S)), 1)
            ])) : v(S) ? (l(), c("button", {
              key: 1,
              type: "button",
              class: "fc-field__btn",
              disabled: t.readOnly,
              onClick: (P) => S.type === "signature" ? V(S) : H(S)
            }, [
              (l(), Z(me(ee(He)(S.type).icon), { size: 13 })),
              f("span", null, w(S.placeholder || (S.type === "signature" ? "Sign here" : "Initial")), 1)
            ], 8, gh)) : (l(), c("div", yh, [
              (l(), Z(me(ee(He)(S.type).icon), { size: 13 })),
              f("span", bh, w(ee(He)(S.type).label), 1)
            ]))
          ], 64)) : S.type === "date" ? (l(), c(L, { key: 1 }, [
            v(S) ? (l(), Z(Go, {
              key: 0,
              value: _(S) || null,
              placeholder: S.placeholder,
              "read-only": t.readOnly,
              "onUpdate:value": (P) => d(S.id, P)
            }, null, 8, ["value", "placeholder", "read-only", "onUpdate:value"])) : _(S) ? (l(), c("div", _h, w(C(_(S))), 1)) : (l(), c("div", Ch, [
              (l(), Z(me(ee(He)("date").icon), { size: 13 })),
              f("span", wh, w(ee(He)("date").label), 1)
            ]))
          ], 64)) : S.type === "text" ? (l(), c(L, { key: 2 }, [
            v(S) ? (l(), c("input", {
              key: 0,
              type: "text",
              class: "fc-field__input",
              disabled: t.readOnly,
              required: S.required,
              placeholder: S.placeholder || "Enter value...",
              value: _(S) || "",
              onInput: (P) => d(S.id, P.target.value)
            }, null, 40, Ah)) : _(S) ? (l(), c("div", kh, w(_(S)), 1)) : (l(), c("div", Sh, [
              (l(), Z(me(ee(He)("text").icon), { size: 13 })),
              f("span", Th, w(ee(He)("text").label), 1)
            ]))
          ], 64)) : S.type === "dropdown" ? (l(), c(L, { key: 3 }, [
            v(S) ? (l(), c("select", {
              key: 0,
              class: "fc-field__input",
              disabled: t.readOnly,
              required: S.required,
              value: _(S) || "",
              onChange: (P) => d(S.id, P.target.value)
            }, [
              f("option", Mh, w(S.placeholder || "Select an option"), 1),
              (l(!0), c(L, null, oe(S.options || [], (P) => (l(), c("option", {
                key: P,
                value: P
              }, w(P), 9, Nh))), 128))
            ], 40, Eh)) : _(S) ? (l(), c("div", Dh, w(_(S)), 1)) : (l(), c("div", Ih, [
              (l(), Z(me(ee(He)("dropdown").icon), { size: 13 })),
              f("span", Oh, w(ee(He)("dropdown").label), 1)
            ]))
          ], 64)) : S.type === "radio" ? (l(), c(L, { key: 4 }, [
            v(S) ? (l(), c("div", Rh, [
              (l(!0), c(L, null, oe(S.options || [], (P) => (l(), c("label", {
                key: P,
                class: "fc-field__radio-row"
              }, [
                f("input", {
                  type: "radio",
                  name: S.id,
                  disabled: t.readOnly,
                  checked: _(S) === P,
                  onChange: (J) => d(S.id, P)
                }, null, 40, $h),
                f("span", null, w(P), 1)
              ]))), 128))
            ])) : _(S) ? (l(), c("div", xh, w(_(S)), 1)) : (l(), c("div", Ph, [
              (l(), Z(me(ee(He)("radio").icon), { size: 13 })),
              f("span", Fh, w(ee(He)("radio").label), 1)
            ]))
          ], 64)) : S.type === "checkbox" ? (l(), c(L, { key: 5 }, [
            v(S) ? (l(), c("label", Bh, [
              f("input", {
                type: "checkbox",
                disabled: t.readOnly,
                checked: !!_(S),
                onChange: (P) => d(S.id, P.target.checked)
              }, null, 40, zh),
              S.placeholder ? (l(), c("span", Lh, w(S.placeholder), 1)) : A("", !0)
            ])) : (l(), c("div", Vh, [
              _(S) ? (l(), Z(ee(Pn), {
                key: 0,
                size: 14
              })) : A("", !0),
              S.placeholder ? (l(), c("span", Hh, w(S.placeholder), 1)) : A("", !0)
            ]))
          ], 64)) : S.type === "file" ? (l(), c(L, { key: 6 }, [
            v(S) ? (l(), c("button", {
              key: 0,
              type: "button",
              class: "fc-field__file",
              disabled: t.readOnly,
              onClick: (P) => R(S)
            }, [
              (l(), Z(me(ee(He)("file").icon), { size: 13 })),
              f("span", null, w(_(S)?.name || S.placeholder || "Upload file"), 1)
            ], 8, jh)) : (l(), c("div", Uh, [
              (l(), Z(me(ee(He)("file").icon), { size: 13 })),
              f("span", null, w(_(S)?.name || ee(He)("file").label), 1)
            ]))
          ], 64)) : A("", !0)
        ], 6))), 128))
      ], 64))), 128)),
      Q(Uo, {
        isVisible: x.value,
        signerName: t.recipient?.name || "",
        onClose: K[0] || (K[0] = (B) => x.value = !1),
        onSigned: T
      }, null, 8, ["isVisible", "signerName"]),
      Q(Wo, {
        isVisible: W.value,
        signerName: t.recipient?.name || "",
        onClose: K[1] || (K[1] = (B) => W.value = !1),
        onInitialed: D
      }, null, 8, ["isVisible", "signerName"]),
      Q(qo, {
        isVisible: Y.value,
        onClose: K[2] || (K[2] = (B) => Y.value = !1),
        onUploaded: $
      }, null, 8, ["isVisible"])
    ]));
  }
}, Pa = /* @__PURE__ */ ae(Wh, [["__scopeId", "data-v-27af5fed"]]), Yh = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Pa
}, Symbol.toStringTag, { value: "Module" })), bi = {
  full: { label: "Full Width", fluid: !0 },
  a4: { label: "A4", portrait: { w: 794, h: 1123 }, landscape: { w: 1123, h: 794 } },
  a3: { label: "A3", portrait: { w: 1123, h: 1587 }, landscape: { w: 1587, h: 1123 } },
  letter: { label: "Letter", portrait: { w: 816, h: 1056 }, landscape: { w: 1056, h: 816 } },
  legal: { label: "Legal", portrait: { w: 816, h: 1344 }, landscape: { w: 1344, h: 816 } }
};
function Ko(t = "a4", e = "portrait") {
  const n = bi[t] ?? bi.a4;
  return n[e] ?? n.portrait;
}
function Gh(t = "a4", e = "portrait") {
  if (t === "full") return { width: "100%", margin: "0" };
  const { w: n, h: a } = Ko(t, e);
  return { width: `${n}px`, minHeight: `${a}px`, margin: "0 auto" };
}
const qh = /* @__PURE__ */ new Set([
  "Arial",
  "Georgia",
  "Times New Roman",
  "Courier New",
  "Verdana",
  "Tahoma",
  "Trebuchet MS",
  "Helvetica",
  "Impact",
  "Comic Sans MS"
]), _i = /* @__PURE__ */ new Set();
function Ci(t) {
  if (!t || qh.has(t) || _i.has(t)) return;
  _i.add(t);
  const e = encodeURIComponent(t).replace(/%20/g, "+"), n = document.createElement("link");
  n.rel = "stylesheet", n.href = `https://fonts.googleapis.com/css2?family=${e}:wght@400;500;600;700&display=swap`, document.head.appendChild(n);
}
const Kh = /font-family:\s*([^;'"<,\n]+)/g;
function Qo(t) {
  if (!t) return;
  const e = t.meta?.theme?.questionFont;
  e && e !== "inherit" && Ci(e.trim());
  for (const n of t.pages ?? [])
    for (const a of n.blocks ?? [])
      for (const i of a.columns ?? [])
        for (const o of i.widgets ?? []) {
          const r = o.props?.content;
          if (r)
            for (const [, s] of r.matchAll(Kh))
              Ci(s.trim().replace(/['"]/g, ""));
        }
}
const Qh = {
  __name: "ContractRenderer",
  props: {
    document: { type: Object, default: null },
    recipient: { type: Object, default: null },
    recipients: { type: Array, default: () => [] },
    readOnly: { type: Boolean, default: !1 }
  },
  emits: ["update:capturedFields", "action"],
  setup(t, { expose: e, emit: n }) {
    const a = t, i = n, o = M(null), r = M(null);
    Ma(() => Qo(a.document));
    const s = M(0);
    let u = null;
    we(() => {
      const p = o.value?.parentElement;
      p && (u = new ResizeObserver(([h]) => {
        s.value = h.contentRect.width;
      }), u.observe(p));
    }), Ae(() => u?.disconnect());
    const d = I(() => {
      const p = a.document?.meta?.pageLayout ?? {};
      if (p.pageSize === "full") return 1;
      const { w: h } = Ko(p.pageSize, p.orientation);
      return !s.value || !h ? 1 : Math.min(1, s.value / h);
    }), m = I(() => {
      const p = a.document?.meta?.pageLayout ?? {}, h = Gh(p.pageSize, p.orientation);
      if (p.pageSize === "full") return h;
      const g = h.minHeight ?? "1123px";
      return {
        ...h,
        minHeight: void 0,
        "--page-min-height": g,
        ...d.value < 1 ? { zoom: d.value } : {}
      };
    });
    function v(p) {
      o.value?.querySelectorAll(".page-renderer")?.[p]?.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    return e({
      focusField: (p) => r.value?.focusField(p),
      scrollToPage: v
    }), (p, h) => (l(), c("div", {
      ref_key: "hostEl",
      ref: o,
      class: "contract-renderer",
      style: ie(m.value)
    }, [
      t.document ? (l(), Z(Ra, {
        key: 0,
        document: t.document,
        onAction: h[0] || (h[0] = (g) => i("action", g))
      }, null, 8, ["document"])) : A("", !0),
      Q(Pa, {
        ref_key: "overlayRef",
        ref: r,
        pages: t.document?.pages || [],
        recipient: t.recipient,
        recipients: t.recipients,
        "read-only": t.readOnly,
        "host-el": o.value,
        "onUpdate:capturedFields": h[1] || (h[1] = (g) => i("update:capturedFields", g))
      }, null, 8, ["pages", "recipient", "recipients", "read-only", "host-el"])
    ], 4));
  }
}, Zo = /* @__PURE__ */ ae(Qh, [["__scopeId", "data-v-e094eb08"]]), Zh = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Zo
}, Symbol.toStringTag, { value: "Module" })), Jh = { class: "pts-root" }, Xh = { class: "pts-header" }, ev = { class: "pts-doc-header__text" }, tv = { class: "pts-doc-header__title" }, nv = { class: "pts-doc-header__count" }, av = {
  key: 0,
  class: "pts-list"
}, iv = ["onClick"], ov = { class: "pts-item__num" }, rv = { class: "pts-item__thumb" }, sv = {
  __name: "PageThumbnailStrip",
  props: {
    pages: { type: Array, default: () => [] },
    title: { type: String, default: "" },
    activePageIndex: { type: Number, default: -1 },
    recipient: { type: Object, default: null },
    recipients: { type: Array, default: () => [] }
  },
  emits: ["select-page", "close"],
  setup(t) {
    const e = M(!0), n = Kt({});
    return (a, i) => (l(), c("aside", Jh, [
      f("div", Xh, [
        i[2] || (i[2] = f("span", { class: "pts-header__label" }, "DOCUMENTS: 1", -1)),
        f("button", {
          type: "button",
          class: "pts-header__icon",
          onClick: i[0] || (i[0] = (o) => a.$emit("close"))
        }, [
          Q(ee(Xe), { size: 16 })
        ])
      ]),
      f("button", {
        type: "button",
        class: "pts-doc-header",
        onClick: i[1] || (i[1] = (o) => e.value = !e.value)
      }, [
        f("span", ev, [
          f("span", tv, w(t.title), 1),
          f("span", nv, w(t.pages.length) + " page" + w(t.pages.length === 1 ? "" : "s"), 1)
        ]),
        e.value ? (l(), Z(ee(Na), {
          key: 0,
          size: 14
        })) : (l(), Z(ee(xe), {
          key: 1,
          size: 14
        }))
      ]),
      e.value ? (l(), c("div", av, [
        (l(!0), c(L, null, oe(t.pages, (o, r) => (l(), c("button", {
          key: o.id,
          type: "button",
          class: X(["pts-item", { "pts-item--active": r === t.activePageIndex }]),
          onClick: (s) => a.$emit("select-page", r)
        }, [
          f("span", ov, w(r + 1), 1),
          f("span", rv, [
            f("span", {
              class: "pts-item__thumb-scale",
              ref_for: !0,
              ref: (s) => n[o.id] = s
            }, [
              Q(Ra, {
                document: { pages: [o] }
              }, null, 8, ["document"]),
              Q(Pa, {
                pages: [o],
                recipient: t.recipient,
                recipients: t.recipients,
                "read-only": !0,
                "host-el": n[o.id] || null
              }, null, 8, ["pages", "recipient", "recipients", "host-el"])
            ], 512)
          ])
        ], 10, iv))), 128))
      ])) : A("", !0)
    ]));
  }
}, Jo = /* @__PURE__ */ ae(sv, [["__scopeId", "data-v-a3b8c208"]]), lv = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Jo
}, Symbol.toStringTag, { value: "Module" })), uv = {
  class: "mad-panel",
  role: "dialog",
  "aria-modal": "true"
}, cv = { class: "mad-header" }, dv = { class: "mad-title" }, fv = {
  key: 0,
  class: "mad-author"
}, mv = { class: "mad-body" }, hv = { class: "mad-section" }, vv = { class: "mad-recipients" }, pv = ["title"], gv = { class: "mad-section" }, yv = ["onClick"], bv = { class: "mad-section" }, _v = { class: "mad-footer" }, Cv = {
  __name: "MoreActionsDrawer",
  props: {
    open: { type: Boolean, default: !1 },
    title: { type: String, default: "" },
    author: { type: String, default: "" },
    recipients: { type: Array, default: () => [] }
  },
  emits: ["close", "toggle-documents", "decline", "download"],
  setup(t, { emit: e }) {
    const n = e;
    function a(o) {
      const r = (o || "").trim().split(/\s+/).filter(Boolean);
      return r.length ? (r[0][0] + (r[1]?.[0] || "")).toUpperCase() : "?";
    }
    const i = [
      { label: "Download", icon: Al, action: () => n("download") },
      { label: "Print", icon: Ol, action: () => window.print() },
      { label: "Cookie preferences", icon: wl, action: () => {
      } }
    ];
    return (o, r) => (l(), Z(Ee, { to: "body" }, [
      Q(Ve, { name: "mad" }, {
        default: ce(() => [
          t.open ? (l(), c("div", {
            key: 0,
            class: "mad-overlay",
            onClick: r[3] || (r[3] = ue((s) => o.$emit("close"), ["self"]))
          }, [
            f("div", uv, [
              f("div", cv, [
                f("div", null, [
                  f("h3", dv, w(t.title), 1),
                  t.author ? (l(), c("p", fv, "by " + w(t.author), 1)) : A("", !0)
                ]),
                f("button", {
                  type: "button",
                  class: "mad-close",
                  onClick: r[0] || (r[0] = (s) => o.$emit("close")),
                  "aria-label": "Close"
                }, [
                  Q(ee(Xe), { size: 18 })
                ])
              ]),
              f("div", mv, [
                f("section", hv, [
                  r[4] || (r[4] = f("h4", { class: "mad-section__label" }, "Recipients", -1)),
                  f("div", vv, [
                    (l(!0), c(L, null, oe(t.recipients, (s) => (l(), c("span", {
                      key: s.id,
                      class: "mad-avatar",
                      style: ie({ backgroundColor: s.color }),
                      title: s.name
                    }, w(a(s.name)), 13, pv))), 128))
                  ])
                ]),
                f("section", gv, [
                  r[5] || (r[5] = f("h4", { class: "mad-section__label" }, "Actions", -1)),
                  (l(), c(L, null, oe(i, (s) => f("button", {
                    key: s.label,
                    type: "button",
                    class: "mad-row",
                    onClick: s.action
                  }, [
                    (l(), Z(me(s.icon), { size: 18 })),
                    f("span", null, w(s.label), 1)
                  ], 8, yv)), 64))
                ]),
                f("section", bv, [
                  r[7] || (r[7] = f("h4", { class: "mad-section__label" }, "Other", -1)),
                  f("button", {
                    type: "button",
                    class: "mad-row",
                    onClick: r[1] || (r[1] = (s) => o.$emit("toggle-documents"))
                  }, [
                    Q(ee(El), { size: 18 }),
                    r[6] || (r[6] = f("span", null, "Documents", -1))
                  ])
                ])
              ]),
              f("div", _v, [
                f("button", {
                  type: "button",
                  class: "mad-decline",
                  onClick: r[2] || (r[2] = (s) => o.$emit("decline"))
                }, [
                  Q(ee(hl), { size: 16 }),
                  r[8] || (r[8] = de(" Decline ", -1))
                ])
              ])
            ])
          ])) : A("", !0)
        ]),
        _: 1
      })
    ]));
  }
}, Xo = /* @__PURE__ */ ae(Cv, [["__scopeId", "data-v-3ac83cce"]]), wv = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Xo
}, Symbol.toStringTag, { value: "Module" })), Av = { class: "fu-viewer" }, kv = { class: "fu-viewer__header" }, Sv = { class: "fu-viewer__header-left" }, Tv = { class: "fu-viewer__header-text" }, Ev = { class: "fu-viewer__header-title" }, Mv = {
  key: 0,
  class: "fu-viewer__header-author"
}, Nv = { class: "fu-viewer__header-right" }, Dv = ["title"], Iv = { class: "fu-viewer__more" }, Ov = {
  key: 1,
  class: "fu-viewer__required-bar"
}, Rv = { class: "fu-viewer__required-bar-left" }, $v = { class: "fu-viewer__body" }, xv = { class: "fu-viewer__main" }, Pv = { class: "fu-viewer__main-subheader" }, Fv = { class: "fu-viewer__main-title" }, Bv = { class: "fu-viewer__main-doc" }, zv = {
  key: 2,
  class: "fu-viewer__finish-bar"
}, Lv = ["disabled"], Vv = {
  __name: "DocumentViewerShell",
  props: {
    document: { type: Object, default: null },
    recipient: { type: Object, default: null },
    recipients: { type: Array, default: () => [] },
    title: { type: String, default: "" },
    author: { type: String, default: "" },
    readOnly: { type: Boolean, default: !1 },
    notice: { type: Object, default: null }
    // { variant: 'info'|'success'|'error', text }
  },
  emits: ["action", "finish", "decline", "download"],
  setup(t) {
    const e = t, n = M(null), a = M([]), i = M(!1), o = M(!0);
    we(() => {
      window.innerWidth < 768 && (o.value = !1);
    });
    function r() {
      o.value = !o.value, i.value = !1;
    }
    function s(h) {
      const g = (h || "").trim().split(/\s+/).filter(Boolean);
      return g.length ? (g[0][0] + (g[1]?.[0] || "")).toUpperCase() : "?";
    }
    const u = I(() => {
      if (!jo(e.recipient)) return [];
      const h = [];
      for (const g of e.document?.pages || [])
        for (const y of g.fields || [])
          y.required && y.recipientId === e.recipient?.id && h.push(y);
      return h;
    }), d = I(
      () => new Set(
        a.value.filter((h) => h.value !== void 0 && h.value !== null && h.value !== "").map((h) => h.fieldId)
      )
    ), m = I(
      () => u.value.filter((h) => !d.value.has(h.id))
    );
    function v() {
      const h = m.value[0];
      h && n.value?.focusField(h.id);
    }
    he(m, (h, g) => {
      g && h.length > 0 && h.length < g.length && n.value?.focusField(h[0].id);
    });
    function p(h) {
      n.value?.scrollToPage(h);
    }
    return (h, g) => (l(), c("div", Av, [
      f("div", kv, [
        f("div", Sv, [
          Q(ee($o), {
            size: 18,
            class: "fu-viewer__header-icon"
          }),
          f("div", Tv, [
            f("span", Ev, w(t.title), 1),
            t.author ? (l(), c("span", Mv, "by " + w(t.author), 1)) : A("", !0)
          ])
        ]),
        f("div", Nv, [
          (l(!0), c(L, null, oe(t.recipients, (y) => (l(), c("span", {
            key: y.id,
            class: "fu-viewer__avatar",
            style: ie({ backgroundColor: y.color }),
            title: y.name
          }, w(s(y.name)), 13, Dv))), 128)),
          f("div", Iv, [
            f("button", {
              type: "button",
              class: "fu-viewer__more-btn",
              onClick: g[0] || (g[0] = (y) => i.value = !0)
            }, [
              g[9] || (g[9] = f("span", { class: "fu-viewer__more-label" }, "More actions", -1)),
              Q(ee(xe), { size: 14 })
            ])
          ])
        ])
      ]),
      Q(Xo, {
        open: i.value,
        title: t.title,
        author: t.author,
        recipients: t.recipients,
        onClose: g[1] || (g[1] = (y) => i.value = !1),
        onToggleDocuments: r,
        onDownload: g[2] || (g[2] = (y) => h.$emit("download")),
        onDecline: g[3] || (g[3] = (y) => h.$emit("decline"))
      }, null, 8, ["open", "title", "author", "recipients"]),
      t.notice ? (l(), c("div", {
        key: 0,
        class: X(["fu-viewer__notice", `fu-viewer__notice--${t.notice.variant}`])
      }, w(t.notice.text), 3)) : m.value.length ? (l(), c("div", Ov, [
        f("div", Rv, [
          Q(ee(Tl), { size: 16 }),
          f("span", null, "Please fill in " + w(m.value.length) + " required field" + w(m.value.length === 1 ? "" : "s") + ".", 1)
        ]),
        f("button", {
          type: "button",
          class: "fu-viewer__start-btn",
          onClick: v
        }, "Start")
      ])) : A("", !0),
      f("div", $v, [
        o.value ? (l(), c("div", {
          key: 0,
          class: "fu-viewer__sidebar-backdrop",
          onClick: g[4] || (g[4] = (y) => o.value = !1)
        })) : A("", !0),
        o.value ? (l(), Z(Jo, {
          key: 1,
          pages: t.document?.pages || [],
          title: t.title,
          recipient: t.recipient,
          recipients: t.recipients,
          onSelectPage: p,
          onClose: g[5] || (g[5] = (y) => o.value = !1)
        }, null, 8, ["pages", "title", "recipient", "recipients"])) : A("", !0),
        f("div", xv, [
          f("div", Pv, [
            f("span", Fv, w(t.title), 1),
            g[10] || (g[10] = f("span", { class: "fu-viewer__main-count" }, "1 of 1 document", -1))
          ]),
          f("div", Bv, [
            Q(Zo, {
              ref_key: "rendererRef",
              ref: n,
              document: t.document,
              recipient: t.recipient,
              recipients: t.recipients,
              "read-only": t.readOnly,
              "onUpdate:capturedFields": g[6] || (g[6] = (y) => a.value = y),
              onAction: g[7] || (g[7] = (y) => h.$emit("action", y))
            }, null, 8, ["document", "recipient", "recipients", "read-only"])
          ])
        ])
      ]),
      t.readOnly ? A("", !0) : (l(), c("div", zv, [
        g[11] || (g[11] = f("span", { class: "fu-viewer__finish-bar-text" }, [
          de(" When you are done reviewing the document, please click "),
          f("strong", null, "Finish"),
          de(" button. ")
        ], -1)),
        Q(ee(ml), {
          size: 16,
          class: "fu-viewer__finish-bar-arrow"
        }),
        f("button", {
          type: "button",
          class: "fu-viewer__finish-btn",
          disabled: m.value.length > 0,
          onClick: g[8] || (g[8] = (y) => h.$emit("finish", a.value))
        }, " Finish ", 8, Lv)
      ]))
    ]));
  }
}, Hv = /* @__PURE__ */ ae(Vv, [["__scopeId", "data-v-660fcc44"]]), jv = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Hv
}, Symbol.toStringTag, { value: "Module" })), Uv = {
  key: 0,
  class: "fu-drawer"
}, Wv = { class: "fu-drawer__header-content" }, Yv = {
  key: 0,
  class: "fu-drawer__header-actions"
}, Gv = { class: "fu-drawer__body" }, qv = { class: "fu-drawer__footer" }, Kv = /* @__PURE__ */ le({
  __name: "FusionDrawer",
  props: {
    open: { type: Boolean },
    title: {},
    position: { default: "right" },
    size: { default: "half" },
    showControls: { type: Boolean, default: !0 },
    hideHeaderBorder: { type: Boolean, default: !1 },
    canNext: { type: Boolean },
    canPrev: { type: Boolean }
  },
  emits: ["close", "next", "prev"],
  setup(t, { emit: e }) {
    const n = t, a = e;
    function i(o) {
      o.key === "Escape" && n.open && a("close");
    }
    return we(() => window.addEventListener("keydown", i)), Ae(() => window.removeEventListener("keydown", i)), (o, r) => (l(), Z(Ve, { name: "drawer-fade" }, {
      default: ce(() => [
        t.open ? (l(), c("div", Uv, [
          f("div", {
            class: "fu-drawer__backdrop",
            onClick: r[0] || (r[0] = (s) => o.$emit("close"))
          }),
          f("div", {
            class: X(["fu-drawer__panel", [
              `fu-drawer__panel--${t.position}`,
              `fu-drawer__panel--${t.size}`,
              { "fu-drawer__panel--with-controls": t.showControls }
            ]])
          }, [
            o.$slots.header || t.showControls ? (l(), c("div", {
              key: 0,
              class: X(["fu-drawer__header", { "border-bottom-0": t.hideHeaderBorder }])
            }, [
              f("div", Wv, [
                se(o.$slots, "header", {}, void 0, !0)
              ]),
              t.showControls ? (l(), c("div", Yv, [
                Q(Pe, {
                  size: "sm",
                  variant: "subtle",
                  icon: ee(Xe),
                  onClick: r[1] || (r[1] = (s) => o.$emit("close"))
                }, null, 8, ["icon"])
              ])) : A("", !0)
            ], 2)) : A("", !0),
            f("div", Gv, [
              se(o.$slots, "default", { class: "slot-body" }, void 0, !0)
            ]),
            f("div", {
              class: X(["fu-drawer__nav", [
                t.position === "right" ? "fu-drawer__nav--left" : "",
                t.position === "left" ? "fu-drawer__nav--right" : "",
                t.position === "bottom" ? "fu-drawer__nav--center" : ""
              ]])
            }, [
              t.canPrev ? (l(), Z(Pe, {
                key: 0,
                size: "sm",
                variant: "subtle",
                icon: ee(Na),
                onClick: r[2] || (r[2] = (s) => o.$emit("prev"))
              }, null, 8, ["icon"])) : A("", !0),
              t.canNext ? (l(), Z(Pe, {
                key: 1,
                size: "sm",
                variant: "subtle",
                icon: ee(xe),
                onClick: r[3] || (r[3] = (s) => o.$emit("next"))
              }, null, 8, ["icon"])) : A("", !0)
            ], 2),
            f("div", qv, [
              se(o.$slots, "footer", {}, void 0, !0)
            ])
          ], 2)
        ])) : A("", !0)
      ]),
      _: 3
    }));
  }
}), Qv = /* @__PURE__ */ ae(Kv, [["__scopeId", "data-v-37927fd4"]]), Zv = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Qv
}, Symbol.toStringTag, { value: "Module" })), Jv = ["onClick"], Xv = /* @__PURE__ */ le({
  __name: "FusionDropdownButton",
  props: {
    buttonText: {},
    buttonIcon: {},
    actions: {},
    align: { default: "right" }
  },
  setup(t) {
    const e = t, n = M(!1), a = M(null), i = M(null), o = M({});
    let r = null;
    function s() {
      if (n.value = !n.value, n.value) {
        if (r && r !== a.value) {
          const p = new CustomEvent("close-other-dropdowns");
          document.dispatchEvent(p);
        }
        r = a.value, ge(u);
      }
    }
    function u() {
      const p = a.value?.querySelector("button");
      if (!p || !i.value) return;
      const h = p.getBoundingClientRect(), g = i.value.offsetWidth, y = {
        left: `${h.left}px`,
        top: `${h.bottom + 4}px`
      };
      e.align === "right" ? y.left = `${h.right - g}px` : e.align === "center" && (y.left = `${h.left + h.width / 2 - g / 2}px`), o.value = {
        position: "absolute",
        ...y,
        zIndex: "1000"
      };
    }
    function d(p) {
      p.onClick?.(), n.value = !1;
    }
    function m(p) {
      a.value && !a.value.contains(p.target) && i.value && !i.value.contains(p.target) && (n.value = !1);
    }
    function v() {
      n.value = !1;
    }
    return we(() => {
      document.addEventListener("click", m), document.addEventListener("close-other-dropdowns", v);
    }), Ae(() => {
      document.removeEventListener("click", m), document.removeEventListener("close-other-dropdowns", v);
    }), (p, h) => (l(), c("div", {
      class: "fu-dropdown",
      ref_key: "dropdown",
      ref: a
    }, [
      f("button", {
        class: "fu-dropdown__button",
        onClick: s
      }, [
        de(w(t.buttonText) + " ", 1),
        t.buttonIcon ? (l(), Z(me(t.buttonIcon), {
          key: 0,
          class: "fu-dropdown__icon"
        })) : A("", !0)
      ]),
      (l(), Z(Ee, { to: "body" }, [
        n.value ? (l(), c("ul", {
          key: 0,
          class: X(["fu-dropdown__menu", [`fu-dropdown__menu--${t.align}`, { show: n.value }]]),
          style: ie(o.value),
          ref_key: "menuRef",
          ref: i
        }, [
          (l(!0), c(L, null, oe(t.actions, (g) => (l(), c("li", {
            key: g.label
          }, [
            f("a", {
              class: "fu-dropdown__item",
              onClick: (y) => d(g)
            }, [
              g.icon ? (l(), Z(me(g.icon), {
                key: 0,
                class: "fu-dropdown__icon"
              })) : A("", !0),
              de(" " + w(g.label), 1)
            ], 8, Jv)
          ]))), 128))
        ], 6)) : A("", !0)
      ]))
    ], 512));
  }
}), ep = /* @__PURE__ */ ae(Xv, [["__scopeId", "data-v-478aec9e"]]), tp = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: ep
}, Symbol.toStringTag, { value: "Module" })), np = { class: "fu-dropdown-inline__wrapper" }, ap = ["value", "placeholder", "disabled"], ip = ["onMousedown"], op = /* @__PURE__ */ le({
  __name: "FusionDropdownInline",
  props: {
    modelValue: {},
    options: {},
    placeholder: {},
    isOpen: { type: Boolean },
    disabled: { type: Boolean },
    readonly: { type: Boolean }
  },
  emits: ["update:modelValue", "open", "close"],
  setup(t, { emit: e }) {
    const n = t, a = e, i = M(null), o = M(null), r = M(n.modelValue || null), s = M(!1), u = M({});
    he(
      () => n.modelValue,
      (h) => r.value = h
    ), he(
      () => n.isOpen,
      (h) => {
        n.disabled || n.readonly || (s.value = !!h, h && p());
      }
    );
    function d() {
      n.disabled || n.readonly || (s.value || a("open"), s.value = !0, p());
    }
    function m(h) {
      r.value = h, a("update:modelValue", h), a("close"), s.value = !1, o.value?.blur();
    }
    function v(h) {
      i.value && !i.value.contains(h.target) && (s.value && a("close"), s.value = !1);
    }
    function p() {
      const h = i.value;
      if (!h) return;
      const g = h.getBoundingClientRect();
      u.value = {
        position: "absolute",
        top: `${g.bottom + 4}px`,
        left: `${g.left}px`,
        width: `${g.width}px`,
        zIndex: "9999"
      };
    }
    return we(() => {
      window.addEventListener("click", v), window.addEventListener("resize", p);
    }), Ae(() => {
      window.removeEventListener("click", v), window.removeEventListener("resize", p);
    }), (h, g) => (l(), c("div", {
      class: X(["fu-dropdown-inline", {
        "fu-dropdown-inline--disabled": t.disabled,
        "fu-dropdown-inline--readonly": t.readonly
      }]),
      ref_key: "inlineRef",
      ref: i
    }, [
      f("div", np, [
        r.value ? (l(), c("span", {
          key: 0,
          class: "fu-dropdown-inline__dot",
          style: ie({ backgroundColor: r.value.color })
        }, null, 4)) : A("", !0),
        f("input", {
          ref_key: "inputRef",
          ref: o,
          type: "text",
          class: "fu-dropdown-inline__input",
          value: r.value?.label || "",
          placeholder: t.placeholder,
          readonly: "",
          disabled: t.disabled,
          onFocus: d
        }, null, 40, ap)
      ]),
      (l(), Z(Ee, { to: "body" }, [
        s.value ? (l(), c("ul", {
          key: 0,
          class: "fu-dropdown-inline__menu",
          style: ie(u.value)
        }, [
          (l(!0), c(L, null, oe(t.options, (y) => (l(), c("li", {
            key: y.label,
            class: "fu-dropdown-inline__item",
            onMousedown: ue((b) => m(y), ["prevent"])
          }, [
            f("span", {
              class: "fu-dropdown-inline__dot",
              style: ie({ backgroundColor: y.color })
            }, null, 4),
            de(" " + w(y.label), 1)
          ], 40, ip))), 128))
        ], 4)) : A("", !0)
      ]))
    ], 2));
  }
}), rp = /* @__PURE__ */ ae(op, [["__scopeId", "data-v-cf4bb282"]]), sp = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: rp
}, Symbol.toStringTag, { value: "Module" })), lp = {
  key: 0,
  class: "content"
}, up = {
  key: 0,
  class: "fu-dropdown__group-label"
}, cp = {
  key: 0,
  class: "fu-dropdown__divider"
}, dp = {
  key: 1,
  class: "flex w-100"
}, fp = ["onClick"], mp = {
  key: 1,
  class: "fu-dropdown__divider"
}, hp = {
  key: 0,
  class: "fu-dropdown__divider"
}, vp = {
  key: 1,
  class: "flex w-100"
}, pp = ["onClick"], gp = /* @__PURE__ */ le({
  __name: "DropdownMenu",
  props: {
    groups: {},
    actions: {},
    align: { default: "right" },
    content: { type: Boolean, default: !1 },
    isOpen: { type: Boolean, default: void 0 },
    closeOnSelect: { type: Boolean, default: !0 }
  },
  emits: ["open", "close", "update:isOpen"],
  setup(t, { emit: e }) {
    const n = e, a = t, i = M(!1), o = M(null), r = M(null), s = M({
      top: "0px",
      left: "0px"
    });
    he(
      () => a.isOpen,
      (y) => {
        typeof y == "boolean" && (i.value = y);
      }
    );
    function u(y) {
      y?.stopPropagation();
      const b = !i.value;
      b && document.dispatchEvent(new CustomEvent("close-all-dropdowns")), i.value = b, n(b ? "open" : "close"), n("update:isOpen", b), b && ge(d);
    }
    function d() {
      if (!o.value || !r.value) return;
      const y = o.value.getBoundingClientRect(), b = y.bottom + window.scrollY + 6, _ = r.value.offsetWidth;
      let C = y.left + window.scrollX;
      a.align === "center" ? C += y.width / 2 - _ / 2 : a.align === "right" && (C = y.right - _ + window.scrollX), s.value = {
        position: "absolute",
        top: `${b}px`,
        left: `${C}px`,
        zIndex: "2000"
      };
    }
    function m(y, b) {
      y.onClick?.(), a.closeOnSelect && v();
    }
    function v() {
      i.value = !1, n("close"), n("update:isOpen", !1);
    }
    function p(y) {
      i.value && o.value && !o.value.contains(y.target) && r.value && !r.value.contains(y.target) && v();
    }
    function h() {
      i.value && v();
    }
    function g() {
      v();
    }
    return we(() => {
      document.addEventListener("click", p), window.addEventListener("resize", h), document.addEventListener("close-all-dropdowns", g);
    }), Ae(() => {
      document.removeEventListener("click", p), window.removeEventListener("resize", h), document.removeEventListener("close-all-dropdowns", g);
    }), (y, b) => (l(), c("div", {
      class: "fu-dropdown",
      ref_key: "dropdown",
      ref: o
    }, [
      f("div", {
        class: "fu-dropdown__trigger",
        onClick: u
      }, [
        se(y.$slots, "trigger", {}, void 0, !0)
      ]),
      (l(), Z(Ee, { to: "body" }, [
        Q(Ve, { name: "fade" }, {
          default: ce(() => [
            i.value ? (l(), c("div", {
              key: 0,
              class: X(["fu-dropdown__menu", [`fu-dropdown__menu--${t.align}`]]),
              style: ie(s.value),
              ref_key: "menuRef",
              ref: r
            }, [
              t.content ? (l(), c("div", lp, [
                se(y.$slots, "content", {}, void 0, !0)
              ])) : A("", !0),
              t.groups?.length ? (l(!0), c(L, { key: 1 }, oe(t.groups, (_, C) => (l(), c("div", { key: C }, [
                _.label ? (l(), c("div", up, w(_.label), 1)) : A("", !0),
                (l(!0), c(L, null, oe(_.actions, (k, E) => (l(), c(L, {
                  key: k.type === "divider" ? `divider-${C}-${E}` : `action-${k.label}-${C}-${E}`
                }, [
                  k.type === "divider" ? (l(), c("div", cp)) : (l(), c("div", dp, [
                    f("a", {
                      class: X(["fu-dropdown__item", { "fu-dropdown__item--disabled": k.disabled }]),
                      onClick: (N) => !k.disabled && m(k)
                    }, [
                      k.icon ? (l(), Z(me(k.icon), {
                        key: 0,
                        class: "fu-dropdown__icon"
                      })) : A("", !0),
                      de(" " + w(k.label), 1)
                    ], 10, fp)
                  ]))
                ], 64))), 128)),
                C !== t.groups.length - 1 ? (l(), c("div", mp)) : A("", !0)
              ]))), 128)) : (l(!0), c(L, { key: 2 }, oe(t.actions, (_, C) => (l(), c(L, {
                key: _.type === "divider" ? `divider-${C}` : `action-${_.label}-${C}`
              }, [
                _.type === "divider" ? (l(), c("div", hp)) : (l(), c("div", vp, [
                  f("a", {
                    class: X(["fu-dropdown__item", { "fu-dropdown__item--disabled": _.disabled }]),
                    onClick: (k) => !_.disabled && m(_)
                  }, [
                    _.icon ? (l(), Z(me(_.icon), {
                      key: 0,
                      class: "fu-dropdown__icon"
                    })) : A("", !0),
                    de(" " + w(_.label), 1)
                  ], 10, pp)
                ]))
              ], 64))), 128))
            ], 6)) : A("", !0)
          ]),
          _: 3
        })
      ]))
    ], 512));
  }
}), Fn = /* @__PURE__ */ ae(gp, [["__scopeId", "data-v-2b0079db"]]), yp = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Fn
}, Symbol.toStringTag, { value: "Module" })), bp = {
  key: 0,
  class: "efw-read"
}, _p = {
  key: 1,
  class: "efw-edit"
}, Cp = { class: "efw-footer" }, wp = { class: "efw-read" }, Ap = { class: "efw-footer" }, kp = /* @__PURE__ */ le({
  __name: "EditableFieldWrapper",
  props: {
    modelValue: { default: () => ({}) },
    mode: { default: "inline" },
    teleportTo: { default: "body" },
    align: { default: "right" },
    disableOutsideClose: { type: Boolean, default: !1 }
  },
  setup(t, { expose: e }) {
    const n = t, a = M(!1), i = M(null), o = Kt({ top: 0, left: 0 }), r = M(null), s = M(null);
    function u(g) {
      if (g === null || typeof g != "object") return g;
      const y = al(g);
      return Array.isArray(y) ? [...y] : y.constructor === Object ? { ...y } : y;
    }
    function d() {
      document.dispatchEvent(new CustomEvent("close-all-editors")), i.value = u(n.modelValue), a.value = !0;
    }
    function m(g) {
      if (a.value) {
        v();
        return;
      }
      document.dispatchEvent(new CustomEvent("close-all-editors")), i.value = u(n.modelValue), ge(() => {
        a.value = !0, ge(() => {
          const y = g?.currentTarget;
          if (!y || !s.value) return;
          const b = y.getBoundingClientRect(), _ = s.value.offsetWidth;
          o.top = b.bottom + 6 + window.scrollY, n.align === "left" ? o.left = b.left + window.scrollX : n.align === "center" ? o.left = b.left + b.width / 2 - _ / 2 + window.scrollX : o.left = b.right - _ + window.scrollX;
        });
      });
    }
    function v() {
      a.value = !1;
    }
    function p() {
      a.value && v();
    }
    function h(g) {
      if (!a.value || n.disableOutsideClose) return;
      const y = g.target;
      y.closest(
        ".fu-status-dropdown, .fu-status-dropdown__menu, .fu-autocomplete-dropdown, .fu-select-dropdown, .fu-datepicker-dropdown"
      ) || (n.mode === "inline" ? r.value && !r.value.contains(y) && v() : s.value && !s.value.contains(y) && v());
    }
    return we(() => {
      document.addEventListener("close-all-editors", p), document.addEventListener("ew-close", v), document.addEventListener("pointerdown", h), window.addEventListener("resize", v);
    }), Ae(() => {
      document.removeEventListener("close-all-editors", p), document.removeEventListener("ew-close", v), document.removeEventListener("pointerdown", h), window.removeEventListener("resize", v);
    }), e({
      startEditing: d,
      openTeleport: m,
      closeEditor: v
    }), (g, y) => t.mode === "inline" ? (l(), c("div", {
      key: 0,
      class: "efw-wrapper",
      ref_key: "inlineRef",
      ref: r
    }, [
      a.value ? (l(), c("div", _p, [
        se(g.$slots, "edit", { model: i.value }, void 0, !0),
        f("div", Cp, [
          se(g.$slots, "actions", {}, void 0, !0)
        ])
      ])) : (l(), c("div", bp, [
        se(g.$slots, "read", {}, void 0, !0)
      ]))
    ], 512)) : (l(), c(L, { key: 1 }, [
      f("div", wp, [
        se(g.$slots, "read", {}, void 0, !0)
      ]),
      (l(), Z(Ee, { to: t.teleportTo }, [
        a.value ? (l(), c("div", {
          key: 0,
          class: "efw-teleport-card",
          ref_key: "teleportRef",
          ref: s,
          style: ie({ top: o.top + "px", left: o.left + "px" })
        }, [
          se(g.$slots, "edit", { model: i.value }, void 0, !0),
          f("div", Ap, [
            se(g.$slots, "actions", {}, void 0, !0)
          ])
        ], 4)) : A("", !0)
      ], 8, ["to"]))
    ], 64));
  }
}), Sp = /* @__PURE__ */ ae(kp, [["__scopeId", "data-v-90094e16"]]), Tp = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Sp
}, Symbol.toStringTag, { value: "Module" })), Ep = {
  components: {
    text: et(() => Promise.resolve().then(() => qs)),
    image: et(() => Promise.resolve().then(() => ir)),
    video: et(() => Promise.resolve().then(() => Ks)),
    divider: et(() => Promise.resolve().then(() => nr)),
    service: et(() => Promise.resolve().then(() => Gs)),
    question: et(() => Promise.resolve().then(() => ur)),
    scheduler: et(() => Promise.resolve().then(() => Ws)),
    invoice: et(() => Promise.resolve().then(() => or)),
    contract: et(() => Promise.resolve().then(() => tr))
  },
  resolve(t) {
    const e = this.components[t];
    return e || (console.warn(`⚠️ Widget type "${t}" not registered.`), null);
  }
}, wi = 24, Mp = /* @__PURE__ */ le({
  __name: "BlockRenderer",
  props: {
    block: {},
    theme: {}
  },
  emits: ["action"],
  setup(t, { emit: e }) {
    const n = t, a = e;
    function i(d) {
      return {
        action: (m) => a("action", m),
        update: (m) => a("action", { widgetId: d, type: "update", payload: m }),
        "date-select": (m) => a("action", { widgetId: d, type: "date-select", payload: m }),
        "month-change": (m) => a("action", { widgetId: d, type: "month-change", payload: m })
      };
    }
    function o(d) {
      if (d >= 100) return { width: "100%" };
      const m = wi * (n.block.columns.length - 1) / n.block.columns.length;
      return {
        width: `calc(${d}% - ${m}px)`
      };
    }
    const r = I(() => ({
      maxWidth: {
        sm: "560px",
        md: "816px",
        lg: "1024px",
        full: "100%"
      }[n.block.contentWidth ?? "md"],
      margin: "0 auto",
      width: "100%"
    })), s = I(() => ({
      paddingTop: `${n.block.paddingTop ?? 0}px`,
      paddingBottom: `${n.block.paddingBottom ?? 0}px`,
      backgroundColor: n.block.backgroundColor || "transparent",
      opacity: n.block.backgroundOpacity !== void 0 ? n.block.backgroundOpacity / 100 : 1
    })), u = I(() => ({
      display: "flex",
      flexWrap: "wrap",
      gap: `${wi}px`,
      width: "100%",
      alignItems: "stretch"
    }));
    return (d, m) => (l(), c("div", {
      class: "block-content",
      style: ie(s.value)
    }, [
      f("div", {
        class: "inner",
        style: ie(r.value)
      }, [
        f("div", {
          class: "columns",
          style: ie(u.value)
        }, [
          (l(!0), c(L, null, oe(t.block.columns, (v, p) => (l(), c("div", {
            key: p,
            class: "column",
            style: ie(o(v.width))
          }, [
            (l(!0), c(L, null, oe(v.widgets, (h) => (l(), Z(me(ee(Ep).resolve(h.type)), xt({
              key: h.id
            }, { ref_for: !0 }, h.props, {
              widget: h,
              widgetId: h.id,
              theme: t.theme
            }, il(i(h.id))), null, 16, ["widget", "widgetId", "theme"]))), 128))
          ], 4))), 128))
        ], 4)
      ], 4)
    ], 4));
  }
}), Fa = /* @__PURE__ */ ae(Mp, [["__scopeId", "data-v-8673cdc6"]]), Np = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Fa
}, Symbol.toStringTag, { value: "Module" })), Dp = { class: "fu-signature-wrapper" }, Ip = {
  __name: "FuSignaturePad",
  props: {
    image: { type: String, default: null },
    // v-model:image
    color: { type: String, default: "#111827" },
    lineWidth: { type: Number, default: 2.5 }
  },
  emits: ["update:image"],
  setup(t, { emit: e }) {
    const n = t, a = e, i = M(null), o = M(null), r = M(!1);
    we(() => {
      const g = i.value;
      if (o.value = g.getContext("2d"), s(), window.addEventListener("resize", s), n.image) {
        const y = new Image();
        y.onload = () => o.value.drawImage(y, 0, 0), y.src = n.image;
      }
    }), Ae(() => {
      window.removeEventListener("resize", s);
    });
    const s = () => {
      const g = i.value, y = g.getBoundingClientRect(), b = window.devicePixelRatio || 1;
      g.width = y.width * b, g.height = y.height * b, o.value.setTransform(1, 0, 0, 1, 0, 0), o.value.scale(b, b), o.value.strokeStyle = n.color, o.value.lineWidth = n.lineWidth, o.value.lineCap = "round", o.value.lineJoin = "round";
    }, u = (g) => {
      const y = i.value.getBoundingClientRect(), b = g.clientX || g.touches && g.touches[0].clientX, _ = g.clientY || g.touches && g.touches[0].clientY;
      return {
        x: b - y.left,
        y: _ - y.top
      };
    }, d = (g) => {
      r.value = !0;
      const { x: y, y: b } = u(g);
      o.value.beginPath(), o.value.moveTo(y, b);
    }, m = (g) => {
      if (!r.value) return;
      const { x: y, y: b } = u(g);
      o.value.lineTo(y, b), o.value.stroke();
    }, v = () => {
      r.value && (r.value = !1, h());
    }, p = () => {
      const g = i.value;
      o.value.clearRect(0, 0, g.width, g.height), a("update:image", null);
    }, h = () => {
      const g = i.value.toDataURL("image/png");
      a("update:image", g);
    };
    return (g, y) => (l(), c("div", Dp, [
      f("canvas", {
        ref_key: "canvas",
        ref: i,
        onMousedown: d,
        onMousemove: m,
        onMouseup: v,
        onTouchstart: ue(d, ["prevent"]),
        onTouchmove: ue(m, ["prevent"]),
        onTouchend: ue(v, ["prevent"])
      }, null, 544),
      f("div", { class: "fu-signature-controls" }, [
        f("button", {
          type: "button",
          onClick: p,
          class: "fu-clear-btn"
        }, "Clear Canvas")
      ])
    ]));
  }
}, er = /* @__PURE__ */ ae(Ip, [["__scopeId", "data-v-9055b31b"]]), Op = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: er
}, Symbol.toStringTag, { value: "Module" })), Rp = { class: "fcv-wrap" }, $p = { class: "fcv-a4" }, xp = ["innerHTML"], Pp = { class: "fcv-sigs" }, Fp = { class: "fcv-sigs__grid" }, Bp = ["src"], zp = { class: "fcv-sig__footer" }, Lp = { class: "fcv-sig__footer-left" }, Vp = { class: "fcv-sig__name" }, Hp = {
  key: 0,
  class: "fcv-sig__role"
}, jp = {
  key: 1,
  class: "fcv-sig__company"
}, Up = { class: "fcv-sig__footer-right" }, Wp = { class: "fcv-sig__date" }, Yp = ["onClick"], Gp = {
  key: 1,
  class: "fcv-sigpad"
}, qp = { class: "fcv-sigpad__tabs" }, Kp = {
  key: 0,
  class: "fcv-sigpad__type-panel"
}, Qp = { class: "fcv-sigpad__type-preview" }, Zp = { class: "fcv-sigpad__cursive" }, Jp = { class: "fcv-sigpad__font-row" }, Xp = ["onClick"], eg = {
  key: 1,
  class: "fcv-sigpad__draw-panel"
}, tg = { class: "fcv-sigpad__details" }, ng = { class: "fcv-sigpad__actions" }, ag = ["disabled", "onClick"], ig = {
  __name: "FuContractRenderer",
  props: {
    widgetId: { type: [String, Number], default: null },
    content: { type: String, default: "" },
    signatures: { type: Array, default: () => [] }
  },
  emits: ["update"],
  setup(t, { emit: e }) {
    ol((k) => ({
      v80ff0bba: d.value
    }));
    const n = I(() => {
      if (!a.content) return "";
      const E = new DOMParser().parseFromString(a.content, "text/html");
      return E.querySelectorAll("span[fieldtype='smart']").forEach((N) => {
        const z = N.getAttribute("content") || "";
        N.replaceWith(z);
      }), E.body.innerHTML;
    }), a = t, i = e, o = M(JSON.parse(JSON.stringify(a.signatures))), r = M(null), s = M("type"), u = M(""), d = M("'Caveat', cursive"), m = M(null), v = M({ signerName: "", signerRole: "", signerCompany: "" }), p = [
      { label: "Caveat", value: "'Caveat', cursive" },
      { label: "Dancing", value: "'Dancing Script', cursive" },
      { label: "Pacifico", value: "'Pacifico', cursive" },
      { label: "Satisfy", value: "'Satisfy', cursive" }
    ], h = I(() => v.value.signerName.trim() ? s.value === "type" ? !!u.value.trim() : !!m.value : !1);
    function g(k) {
      r.value = k, s.value = "type", m.value = null, u.value = "";
    }
    function y() {
      r.value = null;
    }
    function b(k) {
      return !!k.signedOn && !!k.signatureData;
    }
    function _(k, E) {
      let N = null, z = s.value;
      if (s.value === "type") {
        const W = `<svg xmlns="http://www.w3.org/2000/svg" width="320" height="80" viewBox="0 0 320 80">
      <text x="160" y="54" text-anchor="middle" font-family="${d.value}" font-size="38" fill="#111827">${u.value}</text>
    </svg>`;
        N = "data:image/svg+xml;base64," + btoa(unescape(encodeURIComponent(W)));
      } else
        N = m.value;
      const x = {
        ...k,
        ...v.value,
        signatureType: z,
        signatureData: N,
        signedOn: (/* @__PURE__ */ new Date()).toISOString()
      };
      o.value[E] = x, r.value = null, i("update", {
        widgetId: a.widgetId,
        signatures: JSON.parse(JSON.stringify(o.value)),
        updatedSig: x,
        sigIndex: E
      });
    }
    function C(k) {
      return k ? new Date(k).toLocaleString("en-GB", {
        day: "numeric",
        month: "short",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        hour12: !1
      }) : "";
    }
    return (k, E) => (l(), c("div", Rp, [
      f("div", $p, [
        f("div", {
          class: "fcv-body",
          innerHTML: n.value
        }, null, 8, xp),
        f("div", Pp, [
          E[10] || (E[10] = f("div", { class: "fcv-sigs__label" }, "Signatures", -1)),
          E[11] || (E[11] = f("div", { class: "fcv-sigs__rule" }, null, -1)),
          f("div", Fp, [
            (l(!0), c(L, null, oe(o.value, (N, z) => (l(), c("div", {
              key: N.id,
              class: X(["fcv-sig", {
                "fcv-sig--signed": b(N),
                "fcv-sig--required": N.required && !b(N),
                "fcv-sig--active": r.value === N.id && !b(N),
                "fcv-sig--invalidated": !!N.invalidatedOn
              }])
            }, [
              b(N) ? (l(), c(L, { key: 0 }, [
                f("div", {
                  class: X(["fcv-sig__box fcv-sig__box--done", { "fcv-sig__box--void": N.invalidatedOn }])
                }, [
                  N.signatureData ? (l(), c("img", {
                    key: 0,
                    src: N.signatureData,
                    class: "fcv-sig__img",
                    alt: "Signature"
                  }, null, 8, Bp)) : A("", !0)
                ], 2),
                f("div", zp, [
                  f("div", Lp, [
                    f("span", Vp, w(N.signerName || "—"), 1),
                    N.signerRole ? (l(), c("span", Hp, w(N.signerRole), 1)) : A("", !0),
                    N.signerCompany ? (l(), c("span", jp, w(N.signerCompany), 1)) : A("", !0)
                  ]),
                  f("div", Up, [
                    E[8] || (E[8] = f("span", { class: "fcv-sig__badge fcv-sig__badge--signed" }, "✓ Signed", -1)),
                    f("span", Wp, w(C(N.signedOn)), 1)
                  ])
                ])
              ], 64)) : (l(), c(L, { key: 1 }, [
                r.value !== N.id ? (l(), c("div", {
                  key: 0,
                  class: "fcv-sig__box fcv-sig__box--unsigned",
                  onClick: (x) => g(N.id)
                }, [...E[9] || (E[9] = [
                  f("svg", {
                    class: "fcv-sig__pen",
                    width: "20",
                    height: "20",
                    viewBox: "0 0 24 24",
                    fill: "none",
                    stroke: "currentColor",
                    "stroke-width": "1.5"
                  }, [
                    f("path", { d: "M12 20h9" }),
                    f("path", { d: "M16.5 3.5a2.121 2.121 0 013 3L7 19l-4 1 1-4L16.5 3.5z" })
                  ], -1),
                  f("span", { class: "fcv-sig__prompt" }, "Click to sign", -1)
                ])], 8, Yp)) : (l(), c("div", Gp, [
                  f("div", qp, [
                    f("button", {
                      class: X(["fcv-sigpad__tab", { "fcv-sigpad__tab--active": s.value === "type" }]),
                      onClick: E[0] || (E[0] = (x) => s.value = "type")
                    }, " Type name ", 2),
                    f("button", {
                      class: X(["fcv-sigpad__tab", { "fcv-sigpad__tab--active": s.value === "draw" }]),
                      onClick: E[1] || (E[1] = (x) => s.value = "draw")
                    }, " Draw ", 2)
                  ]),
                  s.value === "type" ? (l(), c("div", Kp, [
                    je(f("input", {
                      "onUpdate:modelValue": E[2] || (E[2] = (x) => u.value = x),
                      class: "fcv-sigpad__name-input",
                      placeholder: "Your full name",
                      onInput: E[3] || (E[3] = (x) => v.value.signerName = u.value)
                    }, null, 544), [
                      [tt, u.value]
                    ]),
                    f("div", Qp, [
                      f("span", Zp, w(u.value || "Your Signature"), 1)
                    ]),
                    f("div", Jp, [
                      (l(), c(L, null, oe(p, (x) => f("button", {
                        key: x.value,
                        class: "fcv-sigpad__font-btn",
                        style: ie({ fontFamily: x.value }),
                        onClick: (W) => d.value = x.value
                      }, " Aa ", 12, Xp)), 64))
                    ])
                  ])) : A("", !0),
                  s.value === "draw" ? (l(), c("div", eg, [
                    Q(er, {
                      image: m.value,
                      "onUpdate:image": E[4] || (E[4] = (x) => m.value = x),
                      class: "fcv-sigpad__canvas-wrap"
                    }, null, 8, ["image"])
                  ])) : A("", !0),
                  f("div", tg, [
                    je(f("input", {
                      "onUpdate:modelValue": E[5] || (E[5] = (x) => v.value.signerName = x),
                      class: "fcv-sigpad__field",
                      placeholder: "Full name *"
                    }, null, 512), [
                      [tt, v.value.signerName]
                    ]),
                    je(f("input", {
                      "onUpdate:modelValue": E[6] || (E[6] = (x) => v.value.signerRole = x),
                      class: "fcv-sigpad__field",
                      placeholder: "Role / title"
                    }, null, 512), [
                      [tt, v.value.signerRole]
                    ]),
                    je(f("input", {
                      "onUpdate:modelValue": E[7] || (E[7] = (x) => v.value.signerCompany = x),
                      class: "fcv-sigpad__field",
                      placeholder: "Company"
                    }, null, 512), [
                      [tt, v.value.signerCompany]
                    ])
                  ]),
                  f("div", ng, [
                    f("button", {
                      class: "fcv-sigpad__cancel",
                      onClick: y
                    }, "Cancel"),
                    f("button", {
                      class: "fcv-sigpad__submit",
                      disabled: !h.value,
                      onClick: (x) => _(N, z)
                    }, " Sign document ", 8, ag)
                  ])
                ]))
              ], 64))
            ], 2))), 128))
          ])
        ])
      ])
    ]));
  }
}, og = /* @__PURE__ */ ae(ig, [["__scopeId", "data-v-dcf50def"]]), tr = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: og
}, Symbol.toStringTag, { value: "Module" })), rg = {
  __name: "DividerRenderer",
  props: {
    widget: {
      type: Object,
      required: !0
    }
  },
  setup(t) {
    const e = t, {
      color: n,
      thickness: a,
      width: i,
      styleType: o,
      alignment: r,
      marginTop: s,
      marginBottom: u
    } = e.widget, d = I(() => {
      let m = "center";
      return r === "left" ? m = "flex-start" : r === "right" && (m = "flex-end"), {
        display: "flex",
        justifyContent: m,
        width: "100%",
        marginTop: s + "px",
        marginBottom: u + "px",
        "--divider-color": n || "#CBD5E1",
        "--divider-thickness": a + "px" || "1px",
        "--divider-style": o || "solid"
      };
    });
    return (m, v) => (l(), c("div", {
      class: "divider-widget",
      style: ie(d.value)
    }, null, 4));
  }
}, sg = /* @__PURE__ */ ae(rg, [["__scopeId", "data-v-51711f98"]]), nr = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: sg
}, Symbol.toStringTag, { value: "Module" })), ar = /* @__PURE__ */ le({
  __name: "PageRenderer",
  props: {
    page: {},
    theme: {}
  },
  emits: ["action"],
  setup(t, { emit: e }) {
    const n = t, a = I(() => ({
      backgroundColor: n.page.styles?.backgroundColor || "transparent",
      backgroundImage: n.page.styles?.backgroundImage ? `url(${n.page.styles.backgroundImage})` : "none",
      backgroundSize: "cover",
      minHeight: "100vh",
      width: "100%"
    }));
    return (i, o) => (l(), c("section", {
      class: "page-renderer",
      style: ie(a.value)
    }, [
      (l(!0), c(L, null, oe(t.page.blocks, (r) => (l(), Z(Fa, {
        key: r.id,
        block: r,
        theme: t.theme,
        onAction: o[0] || (o[0] = (s) => i.$emit("action", s))
      }, null, 8, ["block", "theme"]))), 128))
    ], 4));
  }
}), lg = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: ar
}, Symbol.toStringTag, { value: "Module" })), ug = { class: "document-root" }, cg = /* @__PURE__ */ le({
  __name: "FuDocumentRenderer",
  props: {
    document: {}
  },
  emits: ["action"],
  setup(t) {
    const e = t;
    return Ma(() => Qo(e.document)), (n, a) => (l(), c("div", ug, [
      (l(!0), c(L, null, oe(t.document.pages, (i) => (l(), Z(ar, {
        key: i.id,
        page: i,
        theme: t.document.meta?.theme,
        onAction: a[0] || (a[0] = (o) => n.$emit("action", o))
      }, null, 8, ["page", "theme"]))), 128))
    ]));
  }
}), dg = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: cg
}, Symbol.toStringTag, { value: "Module" })), fg = {
  key: 0,
  class: "fu-empty-state"
}, mg = ["src", "alt"], hg = /* @__PURE__ */ le({
  __name: "ImageRenderer",
  props: {
    widget: {}
  },
  setup(t) {
    const e = t, n = I(() => e.widget?.props ?? {}), a = I(() => n.value.src ?? ""), i = I(() => n.value.alt ?? "Image"), o = I(() => n.value.alignment ?? "center"), r = I(() => n.value.imageWidth), s = I(() => n.value.opacity ?? 100), u = I(() => n.value.borderRadius ?? 8), d = I(() => `is-${o.value}`), m = I(() => ({
      width: "100%",
      display: "flex",
      justifyContent: o.value === "left" ? "flex-start" : o.value === "right" ? "flex-end" : "center"
    })), v = I(() => ({
      width: o.value === "stretch" ? "100%" : r.value ? `${r.value}px` : "auto",
      maxWidth: "100%"
    })), p = I(() => ({
      width: "100%",
      height: "auto",
      display: "block",
      opacity: s.value / 100,
      borderRadius: `${u.value}px`
    }));
    return (h, g) => (l(), c("div", {
      class: X(["fu-image-widget", d.value]),
      style: ie(m.value)
    }, [
      a.value ? (l(), c("div", {
        key: 1,
        class: "fu-image-container",
        style: ie(v.value)
      }, [
        f("img", {
          src: a.value,
          alt: i.value,
          class: "fu-image",
          style: ie(p.value),
          draggable: "false"
        }, null, 12, mg)
      ], 4)) : (l(), c("div", fg, [
        Q(ee(Ml), { size: 32 }),
        g[0] || (g[0] = f("span", null, "Image", -1))
      ]))
    ], 6));
  }
}), vg = /* @__PURE__ */ ae(hg, [["__scopeId", "data-v-fae8ea9f"]]), ir = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: vg
}, Symbol.toStringTag, { value: "Module" })), pg = { class: "fip-wrap" }, gg = { class: "fip-header-inner" }, yg = { class: "fip-header-left" }, bg = {
  key: 0,
  class: "fip-logo-wrap"
}, _g = ["src"], Cg = {
  key: 1,
  class: "fip-from"
}, wg = { class: "fip-from-name" }, Ag = {
  key: 0,
  class: "fip-from-detail"
}, kg = {
  key: 1,
  class: "fip-from-detail"
}, Sg = {
  key: 2,
  class: "fip-from-detail"
}, Tg = { class: "fip-header-right" }, Eg = {
  key: 0,
  class: "fip-title"
}, Mg = { class: "fip-meta-grid" }, Ng = { class: "fip-meta-val" }, Dg = { class: "fip-meta-val" }, Ig = { class: "fip-meta-val" }, Og = { class: "fip-meta-val" }, Rg = {
  key: 0,
  class: "fip-bill-to"
}, $g = { class: "fip-billto-name" }, xg = {
  key: 0,
  class: "fip-client-detail"
}, Pg = {
  key: 1,
  class: "fip-client-detail"
}, Fg = {
  key: 2,
  class: "fip-client-detail"
}, Bg = { class: "fip-header fip-header--minimal" }, zg = { class: "fip-header-inner fip-header-inner--minimal" }, Lg = { class: "fip-header-left" }, Vg = {
  key: 0,
  class: "fip-from"
}, Hg = { class: "fip-from-name fip-from-name--minimal" }, jg = {
  key: 0,
  class: "fip-from-detail"
}, Ug = {
  key: 1,
  class: "fip-from-detail"
}, Wg = { class: "fip-header-right" }, Yg = {
  key: 0,
  class: "fip-title fip-title--minimal"
}, Gg = { class: "fip-meta-grid fip-meta-grid--minimal" }, qg = { class: "fip-meta-val" }, Kg = { class: "fip-meta-val" }, Qg = { class: "fip-meta-val" }, Zg = {
  key: 0,
  class: "fip-bill-to fip-bill-to--minimal"
}, Jg = { class: "fip-billto-name" }, Xg = {
  key: 0,
  class: "fip-client-detail"
}, ey = {
  key: 1,
  class: "fip-client-detail"
}, ty = {
  key: 2,
  class: "fip-client-detail"
}, ny = { class: "fip-modern-band-left" }, ay = ["src"], iy = {
  key: 1,
  class: "fip-from fip-from--modern"
}, oy = { class: "fip-from-name" }, ry = {
  key: 0,
  class: "fip-from-detail"
}, sy = {
  key: 1,
  class: "fip-from-detail"
}, ly = { class: "fip-modern-band-right" }, uy = {
  key: 0,
  class: "fip-title fip-title--modern"
}, cy = { class: "fip-meta-grid" }, dy = { class: "fip-meta-val fip-meta-val--modern" }, fy = { class: "fip-meta-val fip-meta-val--modern" }, my = { class: "fip-meta-val fip-meta-val--modern" }, hy = { class: "fip-meta-val fip-meta-val--modern" }, vy = {
  key: 0,
  class: "fip-bill-to fip-bill-to--modern"
}, py = { class: "fip-billto-name" }, gy = {
  key: 0,
  class: "fip-client-detail"
}, yy = {
  key: 1,
  class: "fip-client-detail"
}, by = {
  key: 2,
  class: "fip-client-detail"
}, _y = { class: "fip-header-inner fip-header-inner--detailed" }, Cy = { class: "fip-header-left fip-header-left--detailed" }, wy = ["src"], Ay = {
  key: 1,
  class: "fip-from fip-from--detailed"
}, ky = { class: "fip-from-name fip-from-name--detailed" }, Sy = {
  key: 0,
  class: "fip-from-detail"
}, Ty = {
  key: 1,
  class: "fip-from-detail"
}, Ey = {
  key: 2,
  class: "fip-from-detail"
}, My = { class: "fip-header-right fip-header-right--detailed" }, Ny = {
  key: 0,
  class: "fip-title fip-title--detailed"
}, Dy = { class: "fip-detail-table" }, Iy = { key: 0 }, Oy = { class: "fip-dt-val" }, Ry = { key: 1 }, $y = { class: "fip-dt-val" }, xy = { key: 2 }, Py = { class: "fip-dt-val" }, Fy = { key: 3 }, By = { class: "fip-dt-val" }, zy = {
  key: 0,
  class: "fip-bill-to fip-bill-to--detailed"
}, Ly = { class: "fip-billto-name" }, Vy = {
  key: 0,
  class: "fip-client-detail"
}, Hy = {
  key: 1,
  class: "fip-client-detail"
}, jy = {
  key: 2,
  class: "fip-client-detail"
}, Uy = { class: "fip-col-headers" }, Wy = {
  key: 0,
  class: "fip-col-qty"
}, Yy = {
  key: 1,
  class: "fip-col-unit"
}, Gy = {
  key: 2,
  class: "fip-col-price"
}, qy = {
  key: 3,
  class: "fip-col-tax"
}, Ky = { class: "fip-row fip-row--main" }, Qy = { class: "fip-col-name fip-name-cell" }, Zy = ["src"], Jy = { class: "fip-name-text" }, Xy = { class: "fip-svc-name" }, eb = {
  key: 0,
  class: "fip-svc-desc"
}, tb = {
  key: 0,
  class: "fip-col-qty fip-num"
}, nb = {
  key: 1,
  class: "fip-col-unit fip-unit"
}, ab = {
  key: 2,
  class: "fip-col-price fip-num"
}, ib = {
  key: 3,
  class: "fip-col-tax"
}, ob = { class: "fip-col-total fip-row-total" }, rb = {
  key: 0,
  class: "fip-tax-hint"
}, sb = { class: "fip-col-name fip-name-cell fip-name-cell--sub" }, lb = { class: "fip-svc-name fip-svc-name--sub" }, ub = {
  key: 0,
  class: "fip-col-qty fip-num"
}, cb = {
  key: 1,
  class: "fip-col-unit fip-unit"
}, db = {
  key: 2,
  class: "fip-col-price fip-num"
}, fb = {
  key: 3,
  class: "fip-col-tax"
}, mb = { class: "fip-col-total fip-row-total" }, hb = {
  key: 0,
  class: "fip-tax-hint"
}, vb = { class: "fip-summary" }, pb = { class: "fip-sum-row" }, gb = { class: "fip-sum-val" }, yb = { class: "fip-sum-row" }, bb = { class: "fip-sum-key" }, _b = { class: "fip-sum-val fip-sum-val--discount" }, Cb = { class: "fip-sum-row" }, wb = { class: "fip-sum-key" }, Ab = { class: "fip-sum-val" }, kb = { class: "fip-sum-key" }, Sb = { class: "fip-sum-val" }, Tb = {
  __name: "FuinvoicePreview",
  props: {
    variant: { type: String, default: "classic" },
    showServiceImages: { type: Boolean, default: !0 },
    showQty: { type: Boolean, default: !0 },
    showUnit: { type: Boolean, default: !0 },
    showPrice: { type: Boolean, default: !0 },
    showTax: { type: Boolean, default: !0 },
    header: {
      type: Object,
      default: () => ({
        showLogo: !0,
        logoUrl: "",
        showCompany: !0,
        companyName: "",
        companyEmail: "",
        companyPhone: "",
        companyAddress: "",
        showTitle: !0,
        invoiceTitle: "INVOICE",
        showInvoiceNumber: !0,
        invoiceNumber: "INV-001",
        showDate: !0,
        invoiceDate: "",
        showDueDate: !0,
        dueDate: "",
        showPO: !1,
        poNumber: "",
        showBillTo: !0,
        clientName: "",
        clientEmail: "",
        clientPhone: "",
        clientAddress: "",
        bgColor: "",
        borderColor: ""
      })
    },
    serviceBlocks: { type: Array, default: () => [] },
    footer: {
      type: Object,
      default: () => ({ currency: "GBP", discounts: [], taxes: [] })
    }
  },
  setup(t) {
    const e = t, n = (/* @__PURE__ */ new Date()).toLocaleDateString("en-GB", {
      day: "numeric",
      month: "short",
      year: "numeric"
    }), a = I(() => {
      const _ = e.footer?.currency || "GBP";
      return _ === "USD" ? "$" : _ === "EUR" ? "€" : "£";
    });
    function i(_) {
      return `${a.value}${(_ || 0).toLocaleString("en-GB", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
      })}`;
    }
    function o(_) {
      return (_.qty || 0) * (_.price || 0);
    }
    const r = I(
      () => (e.serviceBlocks || []).reduce((_, C) => (_ += o(C), (C.subItems || []).forEach((k) => _ += o(k)), _), 0)
    ), s = I(
      () => (e.serviceBlocks || []).reduce((_, C) => (C.taxable && (_ += o(C)), (C.subItems || []).forEach((k) => {
        k.taxable && (_ += o(k));
      }), _), 0)
    ), u = I(() => {
      const _ = e.footer?.taxes;
      return Array.isArray(_) && _.length ? _[0] : { label: "Tax", rate: 0 };
    }), d = I(
      () => (e.footer?.discounts || []).reduce(
        (_, C) => _ + r.value * (C.percent || 0) / 100,
        0
      )
    ), m = I(
      () => s.value * (u.value.rate || 0) / 100
    ), v = I(() => r.value - d.value + m.value), p = I(() => {
      const _ = {};
      return e.header?.bgColor && (_.backgroundColor = e.header.bgColor), e.header?.borderColor && (_.borderBottomColor = e.header.borderColor), _;
    }), h = I(
      () => e.header?.borderColor ? { background: e.header.borderColor } : {}
    ), g = I(
      () => e.header?.bgColor ? { background: e.header.bgColor } : { background: "#111827" }
    ), y = I(
      () => e.variant === "modern" && e.header?.bgColor ? { background: e.header.bgColor } : {}
    ), b = I(() => ({ "--fip-cols": [
      "1fr",
      e.showQty ? "60px" : null,
      e.showUnit ? "68px" : null,
      e.showPrice ? "80px" : null,
      e.showTax ? "32px" : null,
      "88px"
    ].filter(Boolean).join(" ") }));
    return (_, C) => (l(), c("div", pg, [
      f("div", {
        class: X(["fip-a4", `fip-a4--${t.variant}`])
      }, [
        t.variant === "classic" ? (l(), c(L, { key: 0 }, [
          f("div", {
            class: "fip-header fip-header--classic",
            style: ie(p.value)
          }, [
            f("div", gg, [
              f("div", yg, [
                t.header.showLogo && t.header.logoUrl ? (l(), c("div", bg, [
                  f("img", {
                    src: t.header.logoUrl,
                    class: "fip-logo",
                    alt: "Logo"
                  }, null, 8, _g)
                ])) : A("", !0),
                t.header.showCompany ? (l(), c("div", Cg, [
                  f("p", wg, w(t.header.companyName || ""), 1),
                  t.header.companyEmail ? (l(), c("p", Ag, w(t.header.companyEmail), 1)) : A("", !0),
                  t.header.companyPhone ? (l(), c("p", kg, w(t.header.companyPhone), 1)) : A("", !0),
                  t.header.companyAddress ? (l(), c("p", Sg, w(t.header.companyAddress), 1)) : A("", !0)
                ])) : A("", !0)
              ]),
              f("div", Tg, [
                t.header.showTitle ? (l(), c("h1", Eg, w(t.header.invoiceTitle || "INVOICE"), 1)) : A("", !0),
                f("div", Mg, [
                  t.header.showInvoiceNumber ? (l(), c(L, { key: 0 }, [
                    C[0] || (C[0] = f("span", { class: "fip-meta-key" }, "Invoice #", -1)),
                    f("span", Ng, w(t.header.invoiceNumber || "INV-001"), 1)
                  ], 64)) : A("", !0),
                  t.header.showDate ? (l(), c(L, { key: 1 }, [
                    C[1] || (C[1] = f("span", { class: "fip-meta-key" }, "Date", -1)),
                    f("span", Dg, w(t.header.invoiceDate || ee(n)), 1)
                  ], 64)) : A("", !0),
                  t.header.showDueDate ? (l(), c(L, { key: 2 }, [
                    C[2] || (C[2] = f("span", { class: "fip-meta-key" }, "Due", -1)),
                    f("span", Ig, w(t.header.dueDate || "—"), 1)
                  ], 64)) : A("", !0),
                  t.header.showPO ? (l(), c(L, { key: 3 }, [
                    C[3] || (C[3] = f("span", { class: "fip-meta-key" }, "PO #", -1)),
                    f("span", Og, w(t.header.poNumber || "—"), 1)
                  ], 64)) : A("", !0)
                ])
              ])
            ]),
            t.header.showBillTo ? (l(), c("div", Rg, [
              C[4] || (C[4] = f("p", { class: "fip-section-label" }, "Bill To", -1)),
              f("p", $g, w(t.header.clientName || "—"), 1),
              t.header.clientEmail ? (l(), c("p", xg, w(t.header.clientEmail), 1)) : A("", !0),
              t.header.clientPhone ? (l(), c("p", Pg, w(t.header.clientPhone), 1)) : A("", !0),
              t.header.clientAddress ? (l(), c("p", Fg, w(t.header.clientAddress), 1)) : A("", !0)
            ])) : A("", !0)
          ], 4),
          f("div", {
            class: "fip-divider fip-divider--classic",
            style: ie(h.value)
          }, null, 4)
        ], 64)) : t.variant === "minimal" ? (l(), c(L, { key: 1 }, [
          f("div", Bg, [
            f("div", zg, [
              f("div", Lg, [
                t.header.showCompany ? (l(), c("div", Vg, [
                  f("p", Hg, w(t.header.companyName || ""), 1),
                  t.header.companyEmail ? (l(), c("p", jg, w(t.header.companyEmail), 1)) : A("", !0),
                  t.header.companyPhone ? (l(), c("p", Ug, w(t.header.companyPhone), 1)) : A("", !0)
                ])) : A("", !0)
              ]),
              f("div", Wg, [
                t.header.showTitle ? (l(), c("h1", Yg, w(t.header.invoiceTitle || "INVOICE"), 1)) : A("", !0),
                f("div", Gg, [
                  t.header.showInvoiceNumber ? (l(), c(L, { key: 0 }, [
                    C[5] || (C[5] = f("span", { class: "fip-meta-key" }, "#", -1)),
                    f("span", qg, w(t.header.invoiceNumber || "INV-001"), 1)
                  ], 64)) : A("", !0),
                  t.header.showDate ? (l(), c(L, { key: 1 }, [
                    C[6] || (C[6] = f("span", { class: "fip-meta-key" }, "Date", -1)),
                    f("span", Kg, w(t.header.invoiceDate || ee(n)), 1)
                  ], 64)) : A("", !0),
                  t.header.showDueDate ? (l(), c(L, { key: 2 }, [
                    C[7] || (C[7] = f("span", { class: "fip-meta-key" }, "Due", -1)),
                    f("span", Qg, w(t.header.dueDate || "—"), 1)
                  ], 64)) : A("", !0)
                ])
              ])
            ]),
            t.header.showBillTo ? (l(), c("div", Zg, [
              f("p", Jg, w(t.header.clientName || "—"), 1),
              t.header.clientEmail ? (l(), c("p", Xg, w(t.header.clientEmail), 1)) : A("", !0),
              t.header.clientPhone ? (l(), c("p", ey, w(t.header.clientPhone), 1)) : A("", !0),
              t.header.clientAddress ? (l(), c("p", ty, w(t.header.clientAddress), 1)) : A("", !0)
            ])) : A("", !0)
          ]),
          C[8] || (C[8] = f("div", { class: "fip-divider fip-divider--minimal" }, null, -1))
        ], 64)) : t.variant === "modern" ? (l(), c(L, { key: 2 }, [
          f("div", {
            class: "fip-modern-band",
            style: ie(g.value)
          }, [
            f("div", ny, [
              t.header.showLogo && t.header.logoUrl ? (l(), c("img", {
                key: 0,
                src: t.header.logoUrl,
                class: "fip-logo fip-logo--modern",
                alt: "Logo"
              }, null, 8, ay)) : A("", !0),
              t.header.showCompany ? (l(), c("div", iy, [
                f("p", oy, w(t.header.companyName || ""), 1),
                t.header.companyEmail ? (l(), c("p", ry, w(t.header.companyEmail), 1)) : A("", !0),
                t.header.companyPhone ? (l(), c("p", sy, w(t.header.companyPhone), 1)) : A("", !0)
              ])) : A("", !0)
            ]),
            f("div", ly, [
              t.header.showTitle ? (l(), c("h1", uy, w(t.header.invoiceTitle || "INVOICE"), 1)) : A("", !0),
              f("div", cy, [
                t.header.showInvoiceNumber ? (l(), c(L, { key: 0 }, [
                  C[9] || (C[9] = f("span", { class: "fip-meta-key fip-meta-key--modern" }, "Invoice #", -1)),
                  f("span", dy, w(t.header.invoiceNumber || "INV-001"), 1)
                ], 64)) : A("", !0),
                t.header.showDate ? (l(), c(L, { key: 1 }, [
                  C[10] || (C[10] = f("span", { class: "fip-meta-key fip-meta-key--modern" }, "Date", -1)),
                  f("span", fy, w(t.header.invoiceDate || ee(n)), 1)
                ], 64)) : A("", !0),
                t.header.showDueDate ? (l(), c(L, { key: 2 }, [
                  C[11] || (C[11] = f("span", { class: "fip-meta-key fip-meta-key--modern" }, "Due", -1)),
                  f("span", my, w(t.header.dueDate || "—"), 1)
                ], 64)) : A("", !0),
                t.header.showPO ? (l(), c(L, { key: 3 }, [
                  C[12] || (C[12] = f("span", { class: "fip-meta-key fip-meta-key--modern" }, "PO #", -1)),
                  f("span", hy, w(t.header.poNumber || "—"), 1)
                ], 64)) : A("", !0)
              ])
            ])
          ], 4),
          C[14] || (C[14] = f("div", { class: "fip-modern-strip" }, null, -1)),
          t.header.showBillTo ? (l(), c("div", vy, [
            C[13] || (C[13] = f("p", { class: "fip-section-label" }, "Bill To", -1)),
            f("p", py, w(t.header.clientName || "—"), 1),
            t.header.clientEmail ? (l(), c("p", gy, w(t.header.clientEmail), 1)) : A("", !0),
            t.header.clientPhone ? (l(), c("p", yy, w(t.header.clientPhone), 1)) : A("", !0),
            t.header.clientAddress ? (l(), c("p", by, w(t.header.clientAddress), 1)) : A("", !0)
          ])) : A("", !0)
        ], 64)) : t.variant === "detailed" ? (l(), c(L, { key: 3 }, [
          f("div", {
            class: "fip-header fip-header--detailed",
            style: ie(p.value)
          }, [
            f("div", _y, [
              f("div", Cy, [
                t.header.showLogo && t.header.logoUrl ? (l(), c("img", {
                  key: 0,
                  src: t.header.logoUrl,
                  class: "fip-logo fip-logo--detailed",
                  alt: "Logo"
                }, null, 8, wy)) : A("", !0),
                t.header.showCompany ? (l(), c("div", Ay, [
                  f("p", ky, w(t.header.companyName || ""), 1),
                  t.header.companyEmail ? (l(), c("p", Sy, w(t.header.companyEmail), 1)) : A("", !0),
                  t.header.companyPhone ? (l(), c("p", Ty, w(t.header.companyPhone), 1)) : A("", !0),
                  t.header.companyAddress ? (l(), c("p", Ey, w(t.header.companyAddress), 1)) : A("", !0)
                ])) : A("", !0)
              ]),
              f("div", My, [
                t.header.showTitle ? (l(), c("h1", Ny, w(t.header.invoiceTitle || "INVOICE"), 1)) : A("", !0),
                f("table", Dy, [
                  t.header.showInvoiceNumber ? (l(), c("tr", Iy, [
                    C[15] || (C[15] = f("td", { class: "fip-dt-key" }, "Invoice No.", -1)),
                    f("td", Oy, w(t.header.invoiceNumber || "INV-001"), 1)
                  ])) : A("", !0),
                  t.header.showDate ? (l(), c("tr", Ry, [
                    C[16] || (C[16] = f("td", { class: "fip-dt-key" }, "Date", -1)),
                    f("td", $y, w(t.header.invoiceDate || ee(n)), 1)
                  ])) : A("", !0),
                  t.header.showDueDate ? (l(), c("tr", xy, [
                    C[17] || (C[17] = f("td", { class: "fip-dt-key" }, "Payment Due", -1)),
                    f("td", Py, w(t.header.dueDate || "—"), 1)
                  ])) : A("", !0),
                  t.header.showPO ? (l(), c("tr", Fy, [
                    C[18] || (C[18] = f("td", { class: "fip-dt-key" }, "PO Number", -1)),
                    f("td", By, w(t.header.poNumber || "—"), 1)
                  ])) : A("", !0)
                ])
              ])
            ]),
            t.header.showBillTo ? (l(), c("div", zy, [
              C[19] || (C[19] = f("p", { class: "fip-section-label" }, "Bill To", -1)),
              f("p", Ly, w(t.header.clientName || "—"), 1),
              t.header.clientEmail ? (l(), c("p", Vy, w(t.header.clientEmail), 1)) : A("", !0),
              t.header.clientPhone ? (l(), c("p", Hy, w(t.header.clientPhone), 1)) : A("", !0),
              t.header.clientAddress ? (l(), c("p", jy, w(t.header.clientAddress), 1)) : A("", !0)
            ])) : A("", !0)
          ], 4),
          C[20] || (C[20] = f("div", { class: "fip-divider fip-divider--detailed" }, null, -1))
        ], 64)) : A("", !0),
        f("div", {
          class: "fip-items",
          style: ie(b.value)
        }, [
          f("div", Uy, [
            C[21] || (C[21] = f("span", { class: "fip-col-name" }, "Service", -1)),
            t.showQty ? (l(), c("span", Wy, "Qty")) : A("", !0),
            t.showUnit ? (l(), c("span", Yy, "Unit")) : A("", !0),
            t.showPrice ? (l(), c("span", Gy, "Price")) : A("", !0),
            t.showTax ? (l(), c("span", qy, "Tax")) : A("", !0),
            C[22] || (C[22] = f("span", { class: "fip-col-total" }, "Total", -1))
          ]),
          (l(!0), c(L, null, oe(t.serviceBlocks, (k) => (l(), c(L, {
            key: k.id
          }, [
            f("div", Ky, [
              f("div", Qy, [
                t.showServiceImages && k.imageUrl ? (l(), c("img", {
                  key: 0,
                  src: k.imageUrl,
                  class: "fip-svc-img",
                  alt: ""
                }, null, 8, Zy)) : A("", !0),
                f("div", Jy, [
                  f("span", Xy, w(k.name || "—"), 1),
                  k.description ? (l(), c("span", eb, w(k.description), 1)) : A("", !0)
                ])
              ]),
              t.showQty ? (l(), c("span", tb, w(k.qty ?? "—"), 1)) : A("", !0),
              t.showUnit ? (l(), c("span", nb, w(k.unit || "—"), 1)) : A("", !0),
              t.showPrice ? (l(), c("span", ab, w(k.price != null ? i(k.price) : "—"), 1)) : A("", !0),
              t.showTax ? (l(), c("div", ib, [
                f("span", {
                  class: X(["fip-tax-dot", { "fip-tax-dot--on": k.taxable }])
                }, null, 2)
              ])) : A("", !0),
              f("div", ob, [
                f("span", null, w(i(o(k))), 1),
                t.showTax && k.taxable && u.value.rate ? (l(), c("span", rb, " +" + w(i(o(k) * u.value.rate / 100)) + " tax ", 1)) : A("", !0)
              ])
            ]),
            (l(!0), c(L, null, oe(k.subItems || [], (E) => (l(), c("div", {
              key: E.id,
              class: "fip-row fip-row--sub"
            }, [
              f("div", sb, [
                f("span", lb, w(E.name || "—"), 1)
              ]),
              t.showQty ? (l(), c("span", ub, w(E.qty ?? "—"), 1)) : A("", !0),
              t.showUnit ? (l(), c("span", cb, w(E.unit || "—"), 1)) : A("", !0),
              t.showPrice ? (l(), c("span", db, w(E.price != null ? i(E.price) : "—"), 1)) : A("", !0),
              t.showTax ? (l(), c("div", fb, [
                f("span", {
                  class: X(["fip-tax-dot", { "fip-tax-dot--on": E.taxable }])
                }, null, 2)
              ])) : A("", !0),
              f("div", mb, [
                f("span", null, w(i(o(E))), 1),
                t.showTax && E.taxable && u.value.rate ? (l(), c("span", hb, " +" + w(i(o(E) * u.value.rate / 100)) + " tax ", 1)) : A("", !0)
              ])
            ]))), 128)),
            C[23] || (C[23] = f("div", { class: "fip-block-rule" }, null, -1))
          ], 64))), 128))
        ], 4),
        f("div", {
          class: X(["fip-summary-zone", `fip-summary-zone--${t.variant}`])
        }, [
          f("div", vb, [
            f("div", pb, [
              C[24] || (C[24] = f("span", { class: "fip-sum-key" }, "Subtotal", -1)),
              f("span", gb, w(i(r.value)), 1)
            ]),
            (l(!0), c(L, null, oe(t.footer.discounts || [], (k, E) => (l(), c(L, {
              key: "d" + E
            }, [
              C[25] || (C[25] = f("div", { class: "fip-sum-rule--light" }, null, -1)),
              f("div", yb, [
                f("span", bb, w(k.label || "Discount") + " (" + w(k.percent || 0) + "%)", 1),
                f("span", _b, "− " + w(i(r.value * k.percent / 100)), 1)
              ])
            ], 64))), 128)),
            C[26] || (C[26] = f("div", { class: "fip-sum-rule--light" }, null, -1)),
            f("div", Cb, [
              f("span", wb, w(u.value.label || "Tax") + " (" + w(u.value.rate || 0) + "%)", 1),
              f("span", Ab, w(i(m.value)), 1)
            ]),
            C[27] || (C[27] = f("div", { class: "fip-sum-rule--heavy" }, null, -1)),
            f("div", {
              class: "fip-sum-row fip-sum-row--total",
              style: ie(y.value)
            }, [
              f("span", kb, "Total (" + w(t.footer.currency || "GBP") + ")", 1),
              f("span", Sb, w(i(v.value)), 1)
            ], 4)
          ])
        ], 2)
      ], 2)
    ]));
  }
}, Eb = /* @__PURE__ */ ae(Tb, [["__scopeId", "data-v-47ff44b0"]]), or = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Eb
}, Symbol.toStringTag, { value: "Module" })), Mb = { class: "fu-form-render__progress-track" }, Nb = { class: "fu-form-render__stage" }, Db = {
  key: 0,
  class: "fu-form-render__ok-row"
}, Ib = { class: "fu-form-render__ok-hint" }, Ob = {
  key: 0,
  class: "fu-form-render__nav"
}, Rb = { class: "fu-form-render__nav-group" }, $b = /* @__PURE__ */ le({
  __name: "FormRender",
  props: {
    document: {}
  },
  emits: ["submit"],
  setup(t, { emit: e }) {
    const n = t, a = e, i = rl(), o = I(() => n.document?.meta?.theme || {}), r = I(() => ({
      "--brand-color": o.value.brandColor || "#4362FF",
      "--accent-color": o.value.accentColor || "#E0E7FF"
    })), s = I(() => typeof navigator > "u" ? "Ctrl" : /Mac|iPhone|iPad|iPod/.test(navigator.userAgent) ? "Cmd ⌘" : "Ctrl");
    function u(B) {
      return {
        backgroundColor: B.backgroundColor,
        backgroundOpacity: B.backgroundOpacity,
        backgroundImage: B.backgroundImage,
        contentWidth: B.contentWidth,
        paddingTop: B.paddingTop,
        paddingBottom: B.paddingBottom
      };
    }
    function d(B, j, S) {
      return { ...u(B), id: j, columns: [{ width: 100, widgets: S }] };
    }
    const m = I(() => {
      const B = {};
      for (const j of n.document?.pages ?? [])
        for (const S of j.blocks ?? [])
          for (const P of S.columns ?? [])
            for (const J of P.widgets ?? [])
              J.type === "question" && (B[J.id] = J);
      return B;
    });
    function v(B) {
      const j = _.value[B], P = m.value[B]?.props?.options?.find((J) => J.id === j);
      return P ? P.text : j;
    }
    function p(B) {
      const j = v(B.sourceWidgetId);
      return B.operator === "equals" ? j === B.value : B.operator === "not_equals" ? j !== B.value : !0;
    }
    function h(B) {
      const j = B.props?.conditions || [];
      if (!j.length) return !0;
      const S = B.props?.conditionLogic || "all", P = j.map(p);
      return S === "any" ? P.some(Boolean) : P.every(Boolean);
    }
    function g(B) {
      return (B.columns ?? []).flatMap((j) => j.widgets ?? []).filter((j) => j.type === "question");
    }
    const y = I(() => {
      const B = n.document?.pages ?? [], j = [];
      for (const S of B)
        for (const P of S.blocks ?? []) {
          if ((P.columns ?? []).length > 1) {
            j.push({ kind: "block", id: P.id, block: P });
            continue;
          }
          const te = P.columns?.[0]?.widgets ?? [], be = te.filter((_e) => _e.type === "question"), Te = te.filter((_e) => _e.type !== "question");
          if (be.length === 0) {
            Te.length && j.push({
              kind: "block",
              id: `${P.id}-content`,
              block: d(P, `${P.id}-content`, Te)
            });
            continue;
          }
          Te.length && j.push({
            kind: "block",
            id: `${P.id}-content`,
            block: d(P, `${P.id}-content`, Te)
          });
          for (const _e of be)
            j.push({
              kind: "block",
              id: _e.id,
              block: d(P, `${P.id}-${_e.id}`, [_e])
            });
        }
      return j;
    });
    function b(B) {
      return B.kind !== "block" ? [] : g(B.block).filter(h);
    }
    const _ = M({}), C = I(() => {
      const B = y.value.filter((te) => te.kind !== "block" || g(te.block).length === 0 ? !0 : b(te).length > 0);
      if (!i.review) return B;
      const j = (te) => te.kind === "block" && b(te).length > 0, S = [...B].reverse().findIndex(j);
      if (S === -1) return B;
      const P = B.length - S, J = { kind: "review", id: "__fu-form-render-review__" };
      return [...B.slice(0, P), J, ...B.slice(P)];
    }), k = M(!1), E = M(0), N = I(
      () => Math.min(E.value, Math.max(C.value.length - 1, 0))
    ), z = I(() => C.value[N.value] ?? null), x = I(() => N.value === C.value.length - 1), W = I(() => z.value?.kind === "review");
    function Y(B) {
      return {
        ...B,
        columns: (B.columns ?? []).map((j) => ({
          ...j,
          widgets: (j.widgets ?? []).filter(
            (S) => S.type !== "question" || h(S)
          )
        }))
      };
    }
    const O = I(() => {
      const B = z.value;
      if (!B || B.kind !== "block") return B;
      const j = Y(B.block);
      return j.columns = j.columns.map((S) => ({
        ...S,
        widgets: S.widgets.map((P) => {
          if (P.type !== "question") return P;
          const J = _.value[P.id];
          return J === void 0 ? P : { ...P, props: { ...P.props, value: J } };
        })
      })), { ...B, block: j };
    }), V = I(() => C.value.length ? Math.min(100, (N.value + 1) / C.value.length * 100) : 0);
    function H(B, j) {
      return B === "multiple_choice" ? !Array.isArray(j) || j.length === 0 : B === "contact_details" ? !j || !j.firstName?.trim() || !j.lastName?.trim() : j == null || j === "";
    }
    const R = I(() => {
      const B = z.value;
      return !B || B.kind !== "block" ? !0 : b(B).every((j) => j.props.required ? !H(j.props.questionType, _.value[j.id]) : !0);
    });
    function T() {
      !R.value || x.value || W.value || (E.value += 1);
    }
    function D() {
      E.value > 0 && (E.value -= 1);
    }
    function $() {
      R.value && (k.value = !0, a("submit", { ..._.value }), N.value < C.value.length - 1 && (E.value += 1));
    }
    function F(B) {
      if (k.value || !z.value) return;
      const j = B.metaKey || B.ctrlKey;
      if (x.value || W.value) {
        j && B.key === "Enter" && (B.preventDefault(), $());
        return;
      }
      B.key === "Enter" && !B.shiftKey && !j && (B.preventDefault(), T());
    }
    we(() => window.addEventListener("keydown", F)), Ae(() => window.removeEventListener("keydown", F));
    function K(B) {
      if (B?.type !== "update" || !B.widgetId) return;
      _.value = { ..._.value, [B.widgetId]: B.payload?.value };
      const j = z.value;
      if (!j || j.kind !== "block" || x.value) return;
      const S = b(j);
      if (S.length !== 1) return;
      const P = S[0];
      if (P.id !== B.widgetId || P.props.questionType !== "single_choice")
        return;
      const J = B.payload?.value;
      J != null && J !== "" && setTimeout(() => {
        z.value === j && T();
      }, 350);
    }
    return (B, j) => (l(), c("div", {
      class: "fu-form-render",
      style: ie(r.value)
    }, [
      f("div", Mb, [
        f("div", {
          class: "fu-form-render__progress-fill",
          style: ie({ width: V.value + "%" })
        }, null, 4)
      ]),
      f("div", Nb, [
        Q(Ve, {
          name: "fu-form-render-slide",
          mode: "out-in"
        }, {
          default: ce(() => [
            O.value ? (l(), c("div", {
              key: O.value.id,
              class: "fu-form-render__step"
            }, [
              O.value.kind === "review" ? se(B.$slots, "review", {
                key: 0,
                answers: _.value,
                submit: $
              }, void 0, !0) : (l(), c(L, { key: 1 }, [
                Q(Fa, {
                  block: O.value.block,
                  theme: o.value,
                  onAction: K
                }, null, 8, ["block", "theme"]),
                k.value ? A("", !0) : (l(), c("div", Db, [
                  Q(Se, {
                    text: x.value ? "Submit" : "OK",
                    variant: "solid",
                    size: "lg",
                    disabled: !R.value,
                    onClick: j[0] || (j[0] = (S) => x.value ? $() : T())
                  }, null, 8, ["text", "disabled"]),
                  f("span", Ib, [
                    x.value ? (l(), c(L, { key: 0 }, [
                      j[1] || (j[1] = de(" press ", -1)),
                      f("strong", null, w(s.value), 1),
                      j[2] || (j[2] = de(" + ", -1)),
                      j[3] || (j[3] = f("strong", null, "Enter ↵", -1))
                    ], 64)) : (l(), c(L, { key: 1 }, [
                      j[4] || (j[4] = de(" press ", -1)),
                      j[5] || (j[5] = f("strong", null, "Enter ↵", -1))
                    ], 64))
                  ])
                ]))
              ], 64))
            ])) : A("", !0)
          ]),
          _: 3
        })
      ]),
      k.value ? A("", !0) : (l(), c("div", Ob, [
        f("div", Rb, [
          Q(Pe, {
            icon: ee(Na),
            variant: "subtle",
            size: "md",
            tooltip: "Previous",
            disabled: N.value === 0,
            onClick: D
          }, null, 8, ["icon", "disabled"]),
          Q(Pe, {
            icon: ee(xe),
            variant: "solid",
            size: "md",
            tooltip: "Next",
            disabled: !R.value || x.value || W.value,
            onClick: T
          }, null, 8, ["icon", "disabled"])
        ]),
        se(B.$slots, "branding", {}, void 0, !0)
      ]))
    ], 4));
  }
}), xb = /* @__PURE__ */ ae($b, [["__scopeId", "data-v-7c5a12e5"]]), Pb = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: xb
}, Symbol.toStringTag, { value: "Module" })), Fb = { class: "fu-textarea-wrapper" }, Bb = {
  key: 0,
  class: "fu-textarea-label"
}, zb = {
  key: 0,
  class: "fu-textarea-required"
}, Lb = ["placeholder", "disabled", "readonly", "rows", "required"], Vb = {
  key: 1,
  class: "fu-textarea-error"
}, Hb = {
  key: 2,
  class: "fu-textarea-hint"
}, jb = /* @__PURE__ */ le({
  __name: "FusionTextArea",
  props: {
    modelValue: { default: "" },
    label: { default: "" },
    variant: { default: "subtle" },
    placeholder: { default: "" },
    size: { default: "sm" },
    disabled: { type: Boolean, default: !1 },
    readonly: { type: Boolean, default: !1 },
    error: { default: null },
    rows: { default: 1 },
    required: { type: Boolean, default: !1 },
    font: { default: void 0 },
    color: { default: void 0 },
    fontSize: { default: void 0 }
  },
  emits: ["update:modelValue"],
  setup(t, { emit: e }) {
    const n = t, a = e, i = M(n.modelValue), o = M(null), r = I(() => typeof navigator > "u" ? !1 : /Mac|iPhone|iPad|iPod/.test(navigator.userAgent));
    he(i, (d) => a("update:modelValue", d)), he(
      () => n.modelValue,
      (d) => {
        i.value = d, ge(u);
      }
    );
    const s = I(() => n.variant !== "typeform" ? {} : {
      ...n.font ? { "--fu-typeform-font": n.font } : {},
      ...n.color ? { "--fu-typeform-color": n.color } : {},
      ...n.fontSize ? { "--fu-typeform-font-size": n.fontSize } : {}
    });
    function u() {
      if (n.variant !== "typeform" || !o.value) return;
      const d = o.value;
      d.style.height = "auto", d.style.height = `${Math.max(d.scrollHeight, 60)}px`;
    }
    return we(() => {
      ge(u);
    }), (d, m) => (l(), c("div", Fb, [
      t.label ? (l(), c("label", Bb, [
        de(w(t.label) + " ", 1),
        t.required ? (l(), c("span", zb, "*")) : A("", !0)
      ])) : A("", !0),
      je(f("textarea", xt(d.$attrs, {
        ref_key: "textareaRef",
        ref: o,
        class: ["fu-textarea fu-form-control", [
          `fu-textarea--${t.size}`,
          { "fu-textarea--error": t.error },
          t.variant ? `fu-textarea--${t.variant}` : null
        ]],
        style: s.value,
        placeholder: t.placeholder,
        disabled: t.disabled,
        readonly: t.readonly,
        rows: t.rows,
        required: t.required,
        "onUpdate:modelValue": m[0] || (m[0] = (v) => i.value = v),
        onInput: u
      }), null, 16, Lb), [
        [tt, i.value]
      ]),
      t.error ? (l(), c("span", Vb, w(t.error), 1)) : t.variant === "typeform" ? (l(), c("span", Hb, [
        r.value ? (l(), c(L, { key: 0 }, [
          m[1] || (m[1] = f("strong", null, "Shift ⇧", -1)),
          m[2] || (m[2] = de(" + ", -1)),
          m[3] || (m[3] = f("strong", null, "Return ↵", -1)),
          m[4] || (m[4] = de(" to make a line break ", -1))
        ], 64)) : (l(), c(L, { key: 1 }, [
          m[5] || (m[5] = f("strong", null, "Shift", -1)),
          m[6] || (m[6] = de(" + ", -1)),
          m[7] || (m[7] = f("strong", null, "Enter", -1)),
          m[8] || (m[8] = de(" to make a line break ", -1))
        ], 64))
      ])) : A("", !0)
    ]));
  }
}), rr = /* @__PURE__ */ ae(jb, [["__scopeId", "data-v-869a3ce9"]]), Ub = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: rr
}, Symbol.toStringTag, { value: "Module" })), Wb = ["value", "disabled", "checked", "aria-readonly"], Yb = { class: "fu-radio__control" }, Gb = {
  key: 0,
  class: "fu-radio__dot"
}, qb = {
  key: 0,
  class: "fu-radio__label"
}, Kb = /* @__PURE__ */ le({
  __name: "FusionRadio",
  props: {
    modelValue: {},
    value: {},
    size: { default: "md" },
    variant: { default: "default" },
    disabled: { type: Boolean, default: !1 },
    readonly: { type: Boolean, default: !1 },
    font: { default: void 0 },
    fontSize: { default: void 0 },
    color: { default: void 0 }
  },
  emits: ["update:modelValue"],
  setup(t, { emit: e }) {
    const n = t, a = e, i = I({
      get: () => n.modelValue,
      set: (d) => a("update:modelValue", d)
    }), o = I(() => i.value === n.value), r = I(() => n.variant !== "typeform" ? {} : {
      ...n.font ? { "--fu-typeform-font": n.font } : {},
      ...n.fontSize ? { "--fu-typeform-font-size": n.fontSize } : {},
      ...n.color ? { "--fu-typeform-color": n.color } : {}
    });
    function s(d) {
      n.readonly && d.preventDefault();
    }
    function u() {
      n.readonly || a("update:modelValue", n.value);
    }
    return (d, m) => (l(), c("label", {
      class: X(["fu-radio", [
        `fu-radio--${t.size}`,
        t.variant ? `fu-radio--${t.variant}` : null,
        {
          "is-checked": o.value,
          "is-disabled": t.disabled,
          "is-readonly": t.readonly
        }
      ]]),
      style: ie(r.value)
    }, [
      f("input", {
        type: "radio",
        class: "fu-radio__input",
        value: t.value,
        disabled: t.disabled,
        checked: o.value,
        "aria-readonly": t.readonly,
        onClick: s,
        onChange: u
      }, null, 40, Wb),
      f("span", Yb, [
        o.value ? (l(), c("span", Gb)) : A("", !0)
      ]),
      d.$slots.default ? (l(), c("span", qb, [
        se(d.$slots, "default", {}, void 0, !0)
      ])) : A("", !0)
    ], 6));
  }
}), sr = /* @__PURE__ */ ae(Kb, [["__scopeId", "data-v-e411c0f3"]]), Qb = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: sr
}, Symbol.toStringTag, { value: "Module" })), Zb = ["data-widget-id"], Jb = { class: "qu-label-row" }, Xb = ["innerHTML"], e0 = {
  key: 0,
  class: "qu-required"
}, t0 = { class: "qu-input-area" }, n0 = {
  key: 6,
  class: "qu-choices"
}, a0 = {
  key: 7,
  class: "qu-choices"
}, i0 = {
  key: 9,
  class: "qu-contact"
}, o0 = { class: "qu-contact-grid" }, r0 = /* @__PURE__ */ le({
  __name: "FuQuestionRenderer",
  props: {
    widgetId: {},
    questionType: { default: "short_text" },
    label: { default: "" },
    placeholder: { default: "" },
    required: { type: Boolean, default: !1 },
    options: { default: () => [] },
    value: { default: null },
    isVisible: { type: Boolean, default: !0 },
    contactFields: { default: () => ({ email: !0, phone: !0 }) },
    theme: { default: () => ({}) }
  },
  emits: ["update"],
  setup(t, { emit: e }) {
    const n = t, a = e, i = I(() => n.theme?.brandColor || "#111827"), o = I(() => n.theme?.questionFont || "inherit"), r = I(() => n.theme?.questionFontSize || "26px"), s = I(() => ({
      color: i.value,
      fontFamily: o.value,
      fontSize: r.value
    })), u = M(
      n.questionType === "multiple_choice" ? Array.isArray(n.value) ? [...n.value] : [] : n.questionType === "contact_details" ? null : n.value ?? ""
    ), d = () => ({
      firstName: "",
      lastName: "",
      email: "",
      phone: ""
    }), m = M(
      n.value && typeof n.value == "object" ? { ...d(), ...n.value } : d()
    ), v = I(() => n.label ? n.label.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, "") : ""), p = I(
      () => n.options.map((E) => ({ label: E.text, _id: E.id }))
    ), h = I({
      get() {
        return p.value.find((E) => E._id === u.value) || null;
      },
      set(E) {
        u.value = E?._id ?? null;
      }
    });
    he(
      () => n.value,
      (E) => {
        n.questionType === "contact_details" ? m.value = E && typeof E == "object" ? { ...d(), ...E } : d() : u.value = n.questionType === "multiple_choice" ? Array.isArray(E) ? [...E] : [] : E ?? "";
      }
    ), he(
      () => n.isVisible,
      (E) => {
        if (!E)
          if (n.questionType === "contact_details")
            m.value = d(), a("update", { value: d() });
          else {
            const N = n.questionType === "multiple_choice" ? [] : null;
            u.value = N, a("update", { value: N });
          }
      }
    );
    function g() {
      a("update", { value: u.value });
    }
    function y() {
      a("update", { value: { ...m.value } });
    }
    function b(E) {
      u.value = E?._id ?? null, g();
    }
    function _(E) {
      u.value = E, g();
    }
    function C(E) {
      return Array.isArray(u.value) && u.value.includes(E);
    }
    function k(E) {
      const N = Array.isArray(u.value) ? [...u.value] : [], z = N.indexOf(E);
      z === -1 ? N.push(E) : N.splice(z, 1), u.value = N, g();
    }
    return (E, N) => t.isVisible ? (l(), c("div", {
      key: 0,
      class: "qu-widget",
      "data-widget-id": t.widgetId
    }, [
      f("div", Jb, [
        f("div", {
          class: "qu-label-render",
          style: ie(s.value),
          innerHTML: v.value
        }, null, 12, Xb),
        t.required ? (l(), c("span", e0, "*")) : A("", !0)
      ]),
      f("div", t0, [
        t.questionType === "short_text" ? (l(), Z(Oe, {
          key: 0,
          modelValue: u.value,
          "onUpdate:modelValue": [
            N[0] || (N[0] = (z) => u.value = z),
            g
          ],
          placeholder: t.placeholder,
          variant: "typeform",
          formWrapperWidth: "100%",
          size: "md",
          color: i.value,
          font: o.value,
          fontSize: r.value
        }, null, 8, ["modelValue", "placeholder", "color", "font", "fontSize"])) : t.questionType === "long_text" ? (l(), Z(rr, {
          key: 1,
          modelValue: u.value,
          "onUpdate:modelValue": [
            N[1] || (N[1] = (z) => u.value = z),
            g
          ],
          placeholder: t.placeholder,
          variant: "typeform",
          formWrapperWidth: "100%",
          color: i.value,
          font: o.value,
          fontSize: r.value
        }, null, 8, ["modelValue", "placeholder", "color", "font", "fontSize"])) : t.questionType === "number" ? (l(), Z(Oe, {
          key: 2,
          type: "number",
          modelValue: u.value,
          "onUpdate:modelValue": [
            N[2] || (N[2] = (z) => u.value = z),
            g
          ],
          placeholder: t.placeholder,
          variant: "typeform",
          formWrapperWidth: "100%",
          size: "md",
          color: i.value,
          font: o.value,
          fontSize: r.value
        }, null, 8, ["modelValue", "placeholder", "color", "font", "fontSize"])) : t.questionType === "link" ? (l(), Z(Oe, {
          key: 3,
          type: "url",
          modelValue: u.value,
          "onUpdate:modelValue": [
            N[3] || (N[3] = (z) => u.value = z),
            g
          ],
          placeholder: t.placeholder,
          variant: "typeform",
          formWrapperWidth: "100%",
          size: "md",
          color: i.value,
          font: o.value,
          fontSize: r.value
        }, null, 8, ["modelValue", "placeholder", "color", "font", "fontSize"])) : t.questionType === "date" ? (l(), Z(Vo, {
          key: 4,
          modelValue: u.value,
          "onUpdate:modelValue": [
            N[4] || (N[4] = (z) => u.value = z),
            g
          ],
          variant: "date",
          placeholder: t.placeholder,
          size: "md",
          formWrapperWidth: "100%"
        }, null, 8, ["modelValue", "placeholder"])) : t.questionType === "dropdown" ? (l(), Z(Oa, {
          key: 5,
          modelValue: h.value,
          "onUpdate:modelValue": [
            N[5] || (N[5] = (z) => h.value = z),
            b
          ],
          options: p.value,
          placeholder: t.placeholder,
          align: "left",
          size: "md"
        }, null, 8, ["modelValue", "options", "placeholder"])) : t.questionType === "single_choice" ? (l(), c("div", n0, [
          (l(!0), c(L, null, oe(t.options, (z) => (l(), Z(sr, {
            key: z.id,
            modelValue: u.value,
            "onUpdate:modelValue": [
              N[6] || (N[6] = (x) => u.value = x),
              g
            ],
            value: z.id,
            name: `qu-${t.widgetId}`,
            variant: "typeform",
            color: i.value,
            font: o.value,
            fontSize: r.value
          }, {
            default: ce(() => [
              de(w(z.text), 1)
            ]),
            _: 2
          }, 1032, ["modelValue", "value", "name", "color", "font", "fontSize"]))), 128))
        ])) : t.questionType === "multiple_choice" ? (l(), c("div", a0, [
          (l(!0), c(L, null, oe(t.options, (z) => (l(), Z(ut, {
            key: z.id,
            modelValue: C(z.id),
            label: z.text,
            "onUpdate:modelValue": (x) => k(z.id)
          }, null, 8, ["modelValue", "label", "onUpdate:modelValue"]))), 128))
        ])) : t.questionType === "upload" ? (l(), Z(xa, {
          key: 8,
          accept: ".jpg,.jpeg,.png,.gif,.pdf,.doc,.docx",
          maxFiles: 10,
          maxFileSizeMB: 15,
          multiple: "",
          onFilesSelected: _
        })) : t.questionType === "contact_details" ? (l(), c("div", i0, [
          f("div", o0, [
            Q(Oe, {
              modelValue: m.value.firstName,
              "onUpdate:modelValue": [
                N[7] || (N[7] = (z) => m.value.firstName = z),
                y
              ],
              placeholder: "First name",
              variant: "typeform",
              formWrapperWidth: "100%",
              size: "md",
              color: i.value,
              font: o.value,
              fontSize: r.value
            }, null, 8, ["modelValue", "color", "font", "fontSize"]),
            Q(Oe, {
              modelValue: m.value.lastName,
              "onUpdate:modelValue": [
                N[8] || (N[8] = (z) => m.value.lastName = z),
                y
              ],
              placeholder: "Last name",
              variant: "typeform",
              formWrapperWidth: "100%",
              size: "md",
              color: i.value,
              font: o.value,
              fontSize: r.value
            }, null, 8, ["modelValue", "color", "font", "fontSize"])
          ]),
          t.contactFields?.email !== !1 ? (l(), Z(Oe, {
            key: 0,
            modelValue: m.value.email,
            "onUpdate:modelValue": [
              N[9] || (N[9] = (z) => m.value.email = z),
              y
            ],
            type: "email",
            placeholder: "Email address",
            variant: "typeform",
            formWrapperWidth: "100%",
            size: "md",
            color: i.value,
            font: o.value,
            fontSize: r.value
          }, null, 8, ["modelValue", "color", "font", "fontSize"])) : A("", !0),
          t.contactFields?.phone !== !1 ? (l(), Z(Oe, {
            key: 1,
            modelValue: m.value.phone,
            "onUpdate:modelValue": [
              N[10] || (N[10] = (z) => m.value.phone = z),
              y
            ],
            type: "tel",
            placeholder: "Phone number",
            variant: "typeform",
            formWrapperWidth: "100%",
            size: "md",
            color: i.value,
            font: o.value,
            fontSize: r.value
          }, null, 8, ["modelValue", "color", "font", "fontSize"])) : A("", !0)
        ])) : A("", !0)
      ])
    ], 8, Zb)) : A("", !0);
  }
}), lr = /* @__PURE__ */ ae(r0, [["__scopeId", "data-v-42a68d88"]]), ur = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: lr
}, Symbol.toStringTag, { value: "Module" }));
var Bn, fe, cr, dr, Pt, pt, Ai, fr, mr, wn = {}, hr = [], s0 = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function ot(t, e) {
  for (var n in e) t[n] = e[n];
  return t;
}
function vr(t) {
  var e = t.parentNode;
  e && e.removeChild(t);
}
function q(t, e, n) {
  var a, i, o, r = {};
  for (o in e) o == "key" ? a = e[o] : o == "ref" ? i = e[o] : r[o] = e[o];
  if (arguments.length > 2 && (r.children = arguments.length > 3 ? Bn.call(arguments, 2) : n), typeof t == "function" && t.defaultProps != null) for (o in t.defaultProps) r[o] === void 0 && (r[o] = t.defaultProps[o]);
  return pn(t, r, a, i, null);
}
function pn(t, e, n, a, i) {
  var o = { type: t, props: e, key: n, ref: a, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: i ?? ++cr };
  return i == null && fe.vnode != null && fe.vnode(o), o;
}
function nt() {
  return { current: null };
}
function Re(t) {
  return t.children;
}
function l0(t, e, n, a, i) {
  var o;
  for (o in n) o === "children" || o === "key" || o in e || An(t, o, null, n[o], a);
  for (o in e) i && typeof e[o] != "function" || o === "children" || o === "key" || o === "value" || o === "checked" || n[o] === e[o] || An(t, o, e[o], n[o], a);
}
function ki(t, e, n) {
  e[0] === "-" ? t.setProperty(e, n ?? "") : t[e] = n == null ? "" : typeof n != "number" || s0.test(e) ? n : n + "px";
}
function An(t, e, n, a, i) {
  var o;
  e: if (e === "style") if (typeof n == "string") t.style.cssText = n;
  else {
    if (typeof a == "string" && (t.style.cssText = a = ""), a) for (e in a) n && e in n || ki(t.style, e, "");
    if (n) for (e in n) a && n[e] === a[e] || ki(t.style, e, n[e]);
  }
  else if (e[0] === "o" && e[1] === "n") o = e !== (e = e.replace(/Capture$/, "")), e = e.toLowerCase() in t ? e.toLowerCase().slice(2) : e.slice(2), t.l || (t.l = {}), t.l[e + o] = n, n ? a || t.addEventListener(e, o ? Ti : Si, o) : t.removeEventListener(e, o ? Ti : Si, o);
  else if (e !== "dangerouslySetInnerHTML") {
    if (i) e = e.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
    else if (e !== "width" && e !== "height" && e !== "href" && e !== "list" && e !== "form" && e !== "tabIndex" && e !== "download" && e in t) try {
      t[e] = n ?? "";
      break e;
    } catch {
    }
    typeof n == "function" || (n == null || n === !1 && e.indexOf("-") == -1 ? t.removeAttribute(e) : t.setAttribute(e, n));
  }
}
function Si(t) {
  Pt = !0;
  try {
    return this.l[t.type + !1](fe.event ? fe.event(t) : t);
  } finally {
    Pt = !1;
  }
}
function Ti(t) {
  Pt = !0;
  try {
    return this.l[t.type + !0](fe.event ? fe.event(t) : t);
  } finally {
    Pt = !1;
  }
}
function We(t, e) {
  this.props = t, this.context = e;
}
function Qt(t, e) {
  if (e == null) return t.__ ? Qt(t.__, t.__.__k.indexOf(t) + 1) : null;
  for (var n; e < t.__k.length; e++) if ((n = t.__k[e]) != null && n.__e != null) return n.__e;
  return typeof t.type == "function" ? Qt(t) : null;
}
function pr(t) {
  var e, n;
  if ((t = t.__) != null && t.__c != null) {
    for (t.__e = t.__c.base = null, e = 0; e < t.__k.length; e++) if ((n = t.__k[e]) != null && n.__e != null) {
      t.__e = t.__c.base = n.__e;
      break;
    }
    return pr(t);
  }
}
function u0(t) {
  Pt ? setTimeout(t) : fr(t);
}
function va(t) {
  (!t.__d && (t.__d = !0) && pt.push(t) && !kn.__r++ || Ai !== fe.debounceRendering) && ((Ai = fe.debounceRendering) || u0)(kn);
}
function kn() {
  var t, e, n, a, i, o, r, s;
  for (pt.sort(function(u, d) {
    return u.__v.__b - d.__v.__b;
  }); t = pt.shift(); ) t.__d && (e = pt.length, a = void 0, i = void 0, r = (o = (n = t).__v).__e, (s = n.__P) && (a = [], (i = ot({}, o)).__v = o.__v + 1, Ba(s, o, i, n.__n, s.ownerSVGElement !== void 0, o.__h != null ? [r] : null, a, r ?? Qt(o), o.__h), Cr(a, o), o.__e != r && pr(o)), pt.length > e && pt.sort(function(u, d) {
    return u.__v.__b - d.__v.__b;
  }));
  kn.__r = 0;
}
function gr(t, e, n, a, i, o, r, s, u, d) {
  var m, v, p, h, g, y, b, _ = a && a.__k || hr, C = _.length;
  for (n.__k = [], m = 0; m < e.length; m++) if ((h = n.__k[m] = (h = e[m]) == null || typeof h == "boolean" ? null : typeof h == "string" || typeof h == "number" || typeof h == "bigint" ? pn(null, h, null, null, h) : Array.isArray(h) ? pn(Re, { children: h }, null, null, null) : h.__b > 0 ? pn(h.type, h.props, h.key, h.ref ? h.ref : null, h.__v) : h) != null) {
    if (h.__ = n, h.__b = n.__b + 1, (p = _[m]) === null || p && h.key == p.key && h.type === p.type) _[m] = void 0;
    else for (v = 0; v < C; v++) {
      if ((p = _[v]) && h.key == p.key && h.type === p.type) {
        _[v] = void 0;
        break;
      }
      p = null;
    }
    Ba(t, h, p = p || wn, i, o, r, s, u, d), g = h.__e, (v = h.ref) && p.ref != v && (b || (b = []), p.ref && b.push(p.ref, null, h), b.push(v, h.__c || g, h)), g != null ? (y == null && (y = g), typeof h.type == "function" && h.__k === p.__k ? h.__d = u = yr(h, u, t) : u = br(t, h, p, _, g, u), typeof n.type == "function" && (n.__d = u)) : u && p.__e == u && u.parentNode != t && (u = Qt(p));
  }
  for (n.__e = y, m = C; m--; ) _[m] != null && (typeof n.type == "function" && _[m].__e != null && _[m].__e == n.__d && (n.__d = _r(a).nextSibling), Ar(_[m], _[m]));
  if (b) for (m = 0; m < b.length; m++) wr(b[m], b[++m], b[++m]);
}
function yr(t, e, n) {
  for (var a, i = t.__k, o = 0; i && o < i.length; o++) (a = i[o]) && (a.__ = t, e = typeof a.type == "function" ? yr(a, e, n) : br(n, a, a, i, a.__e, e));
  return e;
}
function Sn(t, e) {
  return e = e || [], t == null || typeof t == "boolean" || (Array.isArray(t) ? t.some(function(n) {
    Sn(n, e);
  }) : e.push(t)), e;
}
function br(t, e, n, a, i, o) {
  var r, s, u;
  if (e.__d !== void 0) r = e.__d, e.__d = void 0;
  else if (n == null || i != o || i.parentNode == null) e: if (o == null || o.parentNode !== t) t.appendChild(i), r = null;
  else {
    for (s = o, u = 0; (s = s.nextSibling) && u < a.length; u += 1) if (s == i) break e;
    t.insertBefore(i, o), r = o;
  }
  return r !== void 0 ? r : i.nextSibling;
}
function _r(t) {
  var e, n, a;
  if (t.type == null || typeof t.type == "string") return t.__e;
  if (t.__k) {
    for (e = t.__k.length - 1; e >= 0; e--) if ((n = t.__k[e]) && (a = _r(n))) return a;
  }
  return null;
}
function Ba(t, e, n, a, i, o, r, s, u) {
  var d, m, v, p, h, g, y, b, _, C, k, E, N, z, x, W = e.type;
  if (e.constructor !== void 0) return null;
  n.__h != null && (u = n.__h, s = e.__e = n.__e, e.__h = null, o = [s]), (d = fe.__b) && d(e);
  try {
    e: if (typeof W == "function") {
      if (b = e.props, _ = (d = W.contextType) && a[d.__c], C = d ? _ ? _.props.value : d.__ : a, n.__c ? y = (m = e.__c = n.__c).__ = m.__E : ("prototype" in W && W.prototype.render ? e.__c = m = new W(b, C) : (e.__c = m = new We(b, C), m.constructor = W, m.render = d0), _ && _.sub(m), m.props = b, m.state || (m.state = {}), m.context = C, m.__n = a, v = m.__d = !0, m.__h = [], m._sb = []), m.__s == null && (m.__s = m.state), W.getDerivedStateFromProps != null && (m.__s == m.state && (m.__s = ot({}, m.__s)), ot(m.__s, W.getDerivedStateFromProps(b, m.__s))), p = m.props, h = m.state, m.__v = e, v) W.getDerivedStateFromProps == null && m.componentWillMount != null && m.componentWillMount(), m.componentDidMount != null && m.__h.push(m.componentDidMount);
      else {
        if (W.getDerivedStateFromProps == null && b !== p && m.componentWillReceiveProps != null && m.componentWillReceiveProps(b, C), !m.__e && m.shouldComponentUpdate != null && m.shouldComponentUpdate(b, m.__s, C) === !1 || e.__v === n.__v) {
          for (e.__v !== n.__v && (m.props = b, m.state = m.__s, m.__d = !1), e.__e = n.__e, e.__k = n.__k, e.__k.forEach(function(Y) {
            Y && (Y.__ = e);
          }), k = 0; k < m._sb.length; k++) m.__h.push(m._sb[k]);
          m._sb = [], m.__h.length && r.push(m);
          break e;
        }
        m.componentWillUpdate != null && m.componentWillUpdate(b, m.__s, C), m.componentDidUpdate != null && m.__h.push(function() {
          m.componentDidUpdate(p, h, g);
        });
      }
      if (m.context = C, m.props = b, m.__P = t, E = fe.__r, N = 0, "prototype" in W && W.prototype.render) {
        for (m.state = m.__s, m.__d = !1, E && E(e), d = m.render(m.props, m.state, m.context), z = 0; z < m._sb.length; z++) m.__h.push(m._sb[z]);
        m._sb = [];
      } else do
        m.__d = !1, E && E(e), d = m.render(m.props, m.state, m.context), m.state = m.__s;
      while (m.__d && ++N < 25);
      m.state = m.__s, m.getChildContext != null && (a = ot(ot({}, a), m.getChildContext())), v || m.getSnapshotBeforeUpdate == null || (g = m.getSnapshotBeforeUpdate(p, h)), x = d != null && d.type === Re && d.key == null ? d.props.children : d, gr(t, Array.isArray(x) ? x : [x], e, n, a, i, o, r, s, u), m.base = e.__e, e.__h = null, m.__h.length && r.push(m), y && (m.__E = m.__ = null), m.__e = !1;
    } else o == null && e.__v === n.__v ? (e.__k = n.__k, e.__e = n.__e) : e.__e = c0(n.__e, e, n, a, i, o, r, u);
    (d = fe.diffed) && d(e);
  } catch (Y) {
    e.__v = null, (u || o != null) && (e.__e = s, e.__h = !!u, o[o.indexOf(s)] = null), fe.__e(Y, e, n);
  }
}
function Cr(t, e) {
  fe.__c && fe.__c(e, t), t.some(function(n) {
    try {
      t = n.__h, n.__h = [], t.some(function(a) {
        a.call(n);
      });
    } catch (a) {
      fe.__e(a, n.__v);
    }
  });
}
function c0(t, e, n, a, i, o, r, s) {
  var u, d, m, v = n.props, p = e.props, h = e.type, g = 0;
  if (h === "svg" && (i = !0), o != null) {
    for (; g < o.length; g++) if ((u = o[g]) && "setAttribute" in u == !!h && (h ? u.localName === h : u.nodeType === 3)) {
      t = u, o[g] = null;
      break;
    }
  }
  if (t == null) {
    if (h === null) return document.createTextNode(p);
    t = i ? document.createElementNS("http://www.w3.org/2000/svg", h) : document.createElement(h, p.is && p), o = null, s = !1;
  }
  if (h === null) v === p || s && t.data === p || (t.data = p);
  else {
    if (o = o && Bn.call(t.childNodes), d = (v = n.props || wn).dangerouslySetInnerHTML, m = p.dangerouslySetInnerHTML, !s) {
      if (o != null) for (v = {}, g = 0; g < t.attributes.length; g++) v[t.attributes[g].name] = t.attributes[g].value;
      (m || d) && (m && (d && m.__html == d.__html || m.__html === t.innerHTML) || (t.innerHTML = m && m.__html || ""));
    }
    if (l0(t, p, v, i, s), m) e.__k = [];
    else if (g = e.props.children, gr(t, Array.isArray(g) ? g : [g], e, n, a, i && h !== "foreignObject", o, r, o ? o[0] : n.__k && Qt(n, 0), s), o != null) for (g = o.length; g--; ) o[g] != null && vr(o[g]);
    s || ("value" in p && (g = p.value) !== void 0 && (g !== t.value || h === "progress" && !g || h === "option" && g !== v.value) && An(t, "value", g, v.value, !1), "checked" in p && (g = p.checked) !== void 0 && g !== t.checked && An(t, "checked", g, v.checked, !1));
  }
  return t;
}
function wr(t, e, n) {
  try {
    typeof t == "function" ? t(e) : t.current = e;
  } catch (a) {
    fe.__e(a, n);
  }
}
function Ar(t, e, n) {
  var a, i;
  if (fe.unmount && fe.unmount(t), (a = t.ref) && (a.current && a.current !== t.__e || wr(a, null, e)), (a = t.__c) != null) {
    if (a.componentWillUnmount) try {
      a.componentWillUnmount();
    } catch (o) {
      fe.__e(o, e);
    }
    a.base = a.__P = null, t.__c = void 0;
  }
  if (a = t.__k) for (i = 0; i < a.length; i++) a[i] && Ar(a[i], e, n || typeof t.type != "function");
  n || t.__e == null || vr(t.__e), t.__ = t.__e = t.__d = void 0;
}
function d0(t, e, n) {
  return this.constructor(t, n);
}
function Zt(t, e, n) {
  var a, i, o;
  fe.__ && fe.__(t, e), i = (a = !1) ? null : e.__k, o = [], Ba(e, t = e.__k = q(Re, null, [t]), i || wn, wn, e.ownerSVGElement !== void 0, i ? null : e.firstChild ? Bn.call(e.childNodes) : null, o, i ? i.__e : e.firstChild, a), Cr(o, t);
}
function f0(t, e) {
  var n = { __c: e = "__cC" + mr++, __: t, Consumer: function(a, i) {
    return a.children(i);
  }, Provider: function(a) {
    var i, o;
    return this.getChildContext || (i = [], (o = {})[e] = this, this.getChildContext = function() {
      return o;
    }, this.shouldComponentUpdate = function(r) {
      this.props.value !== r.value && i.some(function(s) {
        s.__e = !0, va(s);
      });
    }, this.sub = function(r) {
      i.push(r);
      var s = r.componentWillUnmount;
      r.componentWillUnmount = function() {
        i.splice(i.indexOf(r), 1), s && s.call(r);
      };
    }), a.children;
  } };
  return n.Provider.__ = n.Consumer.contextType = n;
}
Bn = hr.slice, fe = { __e: function(t, e, n, a) {
  for (var i, o, r; e = e.__; ) if ((i = e.__c) && !i.__) try {
    if ((o = i.constructor) && o.getDerivedStateFromError != null && (i.setState(o.getDerivedStateFromError(t)), r = i.__d), i.componentDidCatch != null && (i.componentDidCatch(t, a || {}), r = i.__d), r) return i.__E = i;
  } catch (s) {
    t = s;
  }
  throw t;
} }, cr = 0, dr = function(t) {
  return t != null && t.constructor === void 0;
}, Pt = !1, We.prototype.setState = function(t, e) {
  var n;
  n = this.__s != null && this.__s !== this.state ? this.__s : this.__s = ot({}, this.state), typeof t == "function" && (t = t(ot({}, n), this.props)), t && ot(n, t), t != null && this.__v && (e && this._sb.push(e), va(this));
}, We.prototype.forceUpdate = function(t) {
  this.__v && (this.__e = !0, t && this.__h.push(t), va(this));
}, We.prototype.render = Re, pt = [], fr = typeof Promise == "function" ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, kn.__r = 0, mr = 0;
var Ze, Qn, Ei, kr = [], Zn = [], Mi = fe.__b, Ni = fe.__r, Di = fe.diffed, Ii = fe.__c, Oi = fe.unmount;
function m0() {
  for (var t; t = kr.shift(); ) if (t.__P && t.__H) try {
    t.__H.__h.forEach(gn), t.__H.__h.forEach(pa), t.__H.__h = [];
  } catch (e) {
    t.__H.__h = [], fe.__e(e, t.__v);
  }
}
fe.__b = function(t) {
  Ze = null, Mi && Mi(t);
}, fe.__r = function(t) {
  Ni && Ni(t);
  var e = (Ze = t.__c).__H;
  e && (Qn === Ze ? (e.__h = [], Ze.__h = [], e.__.forEach(function(n) {
    n.__N && (n.__ = n.__N), n.__V = Zn, n.__N = n.i = void 0;
  })) : (e.__h.forEach(gn), e.__h.forEach(pa), e.__h = [])), Qn = Ze;
}, fe.diffed = function(t) {
  Di && Di(t);
  var e = t.__c;
  e && e.__H && (e.__H.__h.length && (kr.push(e) !== 1 && Ei === fe.requestAnimationFrame || ((Ei = fe.requestAnimationFrame) || h0)(m0)), e.__H.__.forEach(function(n) {
    n.i && (n.__H = n.i), n.__V !== Zn && (n.__ = n.__V), n.i = void 0, n.__V = Zn;
  })), Qn = Ze = null;
}, fe.__c = function(t, e) {
  e.some(function(n) {
    try {
      n.__h.forEach(gn), n.__h = n.__h.filter(function(a) {
        return !a.__ || pa(a);
      });
    } catch (a) {
      e.some(function(i) {
        i.__h && (i.__h = []);
      }), e = [], fe.__e(a, n.__v);
    }
  }), Ii && Ii(t, e);
}, fe.unmount = function(t) {
  Oi && Oi(t);
  var e, n = t.__c;
  n && n.__H && (n.__H.__.forEach(function(a) {
    try {
      gn(a);
    } catch (i) {
      e = i;
    }
  }), n.__H = void 0, e && fe.__e(e, n.__v));
};
var Ri = typeof requestAnimationFrame == "function";
function h0(t) {
  var e, n = function() {
    clearTimeout(a), Ri && cancelAnimationFrame(e), setTimeout(t);
  }, a = setTimeout(n, 100);
  Ri && (e = requestAnimationFrame(n));
}
function gn(t) {
  var e = Ze, n = t.__c;
  typeof n == "function" && (t.__c = void 0, n()), Ze = e;
}
function pa(t) {
  var e = Ze;
  t.__c = t.__(), Ze = e;
}
function v0(t, e) {
  for (var n in e) t[n] = e[n];
  return t;
}
function $i(t, e) {
  for (var n in t) if (n !== "__source" && !(n in e)) return !0;
  for (var a in e) if (a !== "__source" && t[a] !== e[a]) return !0;
  return !1;
}
function xi(t) {
  this.props = t;
}
(xi.prototype = new We()).isPureReactComponent = !0, xi.prototype.shouldComponentUpdate = function(t, e) {
  return $i(this.props, t) || $i(this.state, e);
};
var Pi = fe.__b;
fe.__b = function(t) {
  t.type && t.type.__f && t.ref && (t.props.ref = t.ref, t.ref = null), Pi && Pi(t);
};
var p0 = fe.__e;
fe.__e = function(t, e, n, a) {
  if (t.then) {
    for (var i, o = e; o = o.__; ) if ((i = o.__c) && i.__c) return e.__e == null && (e.__e = n.__e, e.__k = n.__k), i.__c(t, e);
  }
  p0(t, e, n, a);
};
var Fi = fe.unmount;
function Sr(t, e, n) {
  return t && (t.__c && t.__c.__H && (t.__c.__H.__.forEach(function(a) {
    typeof a.__c == "function" && a.__c();
  }), t.__c.__H = null), (t = v0({}, t)).__c != null && (t.__c.__P === n && (t.__c.__P = e), t.__c = null), t.__k = t.__k && t.__k.map(function(a) {
    return Sr(a, e, n);
  })), t;
}
function Tr(t, e, n) {
  return t && (t.__v = null, t.__k = t.__k && t.__k.map(function(a) {
    return Tr(a, e, n);
  }), t.__c && t.__c.__P === e && (t.__e && n.insertBefore(t.__e, t.__d), t.__c.__e = !0, t.__c.__P = n)), t;
}
function Jn() {
  this.__u = 0, this.t = null, this.__b = null;
}
function Er(t) {
  var e = t.__.__c;
  return e && e.__a && e.__a(t);
}
function sn() {
  this.u = null, this.o = null;
}
fe.unmount = function(t) {
  var e = t.__c;
  e && e.__R && e.__R(), e && t.__h === !0 && (t.type = null), Fi && Fi(t);
}, (Jn.prototype = new We()).__c = function(t, e) {
  var n = e.__c, a = this;
  a.t == null && (a.t = []), a.t.push(n);
  var i = Er(a.__v), o = !1, r = function() {
    o || (o = !0, n.__R = null, i ? i(s) : s());
  };
  n.__R = r;
  var s = function() {
    if (!--a.__u) {
      if (a.state.__a) {
        var d = a.state.__a;
        a.__v.__k[0] = Tr(d, d.__c.__P, d.__c.__O);
      }
      var m;
      for (a.setState({ __a: a.__b = null }); m = a.t.pop(); ) m.forceUpdate();
    }
  }, u = e.__h === !0;
  a.__u++ || u || a.setState({ __a: a.__b = a.__v.__k[0] }), t.then(r, r);
}, Jn.prototype.componentWillUnmount = function() {
  this.t = [];
}, Jn.prototype.render = function(t, e) {
  if (this.__b) {
    if (this.__v.__k) {
      var n = document.createElement("div"), a = this.__v.__k[0].__c;
      this.__v.__k[0] = Sr(this.__b, n, a.__O = a.__P);
    }
    this.__b = null;
  }
  var i = e.__a && q(Re, null, t.fallback);
  return i && (i.__h = null), [q(Re, null, e.__a ? null : t.children), i];
};
var Bi = function(t, e, n) {
  if (++n[1] === n[0] && t.o.delete(e), t.props.revealOrder && (t.props.revealOrder[0] !== "t" || !t.o.size)) for (n = t.u; n; ) {
    for (; n.length > 3; ) n.pop()();
    if (n[1] < n[0]) break;
    t.u = n = n[2];
  }
};
function g0(t) {
  return this.getChildContext = function() {
    return t.context;
  }, t.children;
}
function y0(t) {
  var e = this, n = t.i;
  e.componentWillUnmount = function() {
    Zt(null, e.l), e.l = null, e.i = null;
  }, e.i && e.i !== n && e.componentWillUnmount(), t.__v ? (e.l || (e.i = n, e.l = { nodeType: 1, parentNode: n, childNodes: [], appendChild: function(a) {
    this.childNodes.push(a), e.i.appendChild(a);
  }, insertBefore: function(a, i) {
    this.childNodes.push(a), e.i.appendChild(a);
  }, removeChild: function(a) {
    this.childNodes.splice(this.childNodes.indexOf(a) >>> 1, 1), e.i.removeChild(a);
  } }), Zt(q(g0, { context: e.context }, t.__v), e.l)) : e.l && e.componentWillUnmount();
}
function b0(t, e) {
  var n = q(y0, { __v: t, i: e });
  return n.containerInfo = e, n;
}
(sn.prototype = new We()).__a = function(t) {
  var e = this, n = Er(e.__v), a = e.o.get(t);
  return a[0]++, function(i) {
    var o = function() {
      e.props.revealOrder ? (a.push(i), Bi(e, t, a)) : i();
    };
    n ? n(o) : o();
  };
}, sn.prototype.render = function(t) {
  this.u = null, this.o = /* @__PURE__ */ new Map();
  var e = Sn(t.children);
  t.revealOrder && t.revealOrder[0] === "b" && e.reverse();
  for (var n = e.length; n--; ) this.o.set(e[n], this.u = [1, 0, this.u]);
  return t.children;
}, sn.prototype.componentDidUpdate = sn.prototype.componentDidMount = function() {
  var t = this;
  this.o.forEach(function(e, n) {
    Bi(t, n, e);
  });
};
var _0 = typeof Symbol < "u" && Symbol.for && Symbol.for("react.element") || 60103, C0 = /^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/, w0 = typeof document < "u", A0 = function(t) {
  return (typeof Symbol < "u" && typeof Symbol() == "symbol" ? /fil|che|rad/i : /fil|che|ra/i).test(t);
};
We.prototype.isReactComponent = {}, ["componentWillMount", "componentWillReceiveProps", "componentWillUpdate"].forEach(function(t) {
  Object.defineProperty(We.prototype, t, { configurable: !0, get: function() {
    return this["UNSAFE_" + t];
  }, set: function(e) {
    Object.defineProperty(this, t, { configurable: !0, writable: !0, value: e });
  } });
});
var zi = fe.event;
function k0() {
}
function S0() {
  return this.cancelBubble;
}
function T0() {
  return this.defaultPrevented;
}
fe.event = function(t) {
  return zi && (t = zi(t)), t.persist = k0, t.isPropagationStopped = S0, t.isDefaultPrevented = T0, t.nativeEvent = t;
};
var Li = { configurable: !0, get: function() {
  return this.class;
} }, Vi = fe.vnode;
fe.vnode = function(t) {
  var e = t.type, n = t.props, a = n;
  if (typeof e == "string") {
    var i = e.indexOf("-") === -1;
    for (var o in a = {}, n) {
      var r = n[o];
      w0 && o === "children" && e === "noscript" || o === "value" && "defaultValue" in n && r == null || (o === "defaultValue" && "value" in n && n.value == null ? o = "value" : o === "download" && r === !0 ? r = "" : /ondoubleclick/i.test(o) ? o = "ondblclick" : /^onchange(textarea|input)/i.test(o + e) && !A0(n.type) ? o = "oninput" : /^onfocus$/i.test(o) ? o = "onfocusin" : /^onblur$/i.test(o) ? o = "onfocusout" : /^on(Ani|Tra|Tou|BeforeInp|Compo)/.test(o) ? o = o.toLowerCase() : i && C0.test(o) ? o = o.replace(/[A-Z0-9]/g, "-$&").toLowerCase() : r === null && (r = void 0), /^oninput$/i.test(o) && (o = o.toLowerCase(), a[o] && (o = "oninputCapture")), a[o] = r);
    }
    e == "select" && a.multiple && Array.isArray(a.value) && (a.value = Sn(n.children).forEach(function(s) {
      s.props.selected = a.value.indexOf(s.props.value) != -1;
    })), e == "select" && a.defaultValue != null && (a.value = Sn(n.children).forEach(function(s) {
      s.props.selected = a.multiple ? a.defaultValue.indexOf(s.props.value) != -1 : a.defaultValue == s.props.value;
    })), t.props = a, n.class != n.className && (Li.enumerable = "className" in n, n.className != null && (a.class = n.className), Object.defineProperty(a, "className", Li));
  }
  t.$$typeof = _0, Vi && Vi(t);
};
var Hi = fe.__r;
fe.__r = function(t) {
  Hi && Hi(t), t.__c;
};
const Mr = [], ga = /* @__PURE__ */ new Map();
function Nr(t) {
  Mr.push(t), ga.forEach((e) => {
    Ir(e, t);
  });
}
function E0(t) {
  t.isConnected && // sometimes true if SSR system simulates DOM
  t.getRootNode && Dr(t.getRootNode());
}
function Dr(t) {
  let e = ga.get(t);
  if (!e || !e.isConnected) {
    if (e = t.querySelector("style[data-fullcalendar]"), !e) {
      e = document.createElement("style"), e.setAttribute("data-fullcalendar", "");
      const n = N0();
      n && (e.nonce = n);
      const a = t === document ? document.head : t, i = t === document ? a.querySelector("script,link[rel=stylesheet],link[as=style],style") : a.firstChild;
      a.insertBefore(e, i);
    }
    ga.set(t, e), M0(e);
  }
}
function M0(t) {
  for (const e of Mr)
    Ir(t, e);
}
function Ir(t, e) {
  const { sheet: n } = t, a = n.cssRules.length;
  e.split("}").forEach((i, o) => {
    i = i.trim(), i && n.insertRule(i + "}", a + o);
  });
}
let Xn;
function N0() {
  return Xn === void 0 && (Xn = D0()), Xn;
}
function D0() {
  const t = document.querySelector('meta[name="csp-nonce"]');
  if (t && t.hasAttribute("content"))
    return t.getAttribute("content");
  const e = document.querySelector("script[nonce]");
  return e && e.nonce || "";
}
typeof document < "u" && Dr(document);
var I0 = ':root{--fc-small-font-size:.85em;--fc-page-bg-color:#fff;--fc-neutral-bg-color:hsla(0,0%,82%,.3);--fc-neutral-text-color:grey;--fc-border-color:#ddd;--fc-button-text-color:#fff;--fc-button-bg-color:#2c3e50;--fc-button-border-color:#2c3e50;--fc-button-hover-bg-color:#1e2b37;--fc-button-hover-border-color:#1a252f;--fc-button-active-bg-color:#1a252f;--fc-button-active-border-color:#151e27;--fc-event-bg-color:#3788d8;--fc-event-border-color:#3788d8;--fc-event-text-color:#fff;--fc-event-selected-overlay-color:rgba(0,0,0,.25);--fc-more-link-bg-color:#d0d0d0;--fc-more-link-text-color:inherit;--fc-event-resizer-thickness:8px;--fc-event-resizer-dot-total-width:8px;--fc-event-resizer-dot-border-width:1px;--fc-non-business-color:hsla(0,0%,84%,.3);--fc-bg-event-color:#8fdf82;--fc-bg-event-opacity:0.3;--fc-highlight-color:rgba(188,232,241,.3);--fc-today-bg-color:rgba(255,220,40,.15);--fc-now-indicator-color:red}.fc-not-allowed,.fc-not-allowed .fc-event{cursor:not-allowed}.fc{display:flex;flex-direction:column;font-size:1em}.fc,.fc *,.fc :after,.fc :before{box-sizing:border-box}.fc table{border-collapse:collapse;border-spacing:0;font-size:1em}.fc th{text-align:center}.fc td,.fc th{padding:0;vertical-align:top}.fc a[data-navlink]{cursor:pointer}.fc a[data-navlink]:hover{text-decoration:underline}.fc-direction-ltr{direction:ltr;text-align:left}.fc-direction-rtl{direction:rtl;text-align:right}.fc-theme-standard td,.fc-theme-standard th{border:1px solid var(--fc-border-color)}.fc-liquid-hack td,.fc-liquid-hack th{position:relative}@font-face{font-family:fcicons;font-style:normal;font-weight:400;src:url("data:application/x-font-ttf;charset=utf-8;base64,AAEAAAALAIAAAwAwT1MvMg8SBfAAAAC8AAAAYGNtYXAXVtKNAAABHAAAAFRnYXNwAAAAEAAAAXAAAAAIZ2x5ZgYydxIAAAF4AAAFNGhlYWQUJ7cIAAAGrAAAADZoaGVhB20DzAAABuQAAAAkaG10eCIABhQAAAcIAAAALGxvY2ED4AU6AAAHNAAAABhtYXhwAA8AjAAAB0wAAAAgbmFtZXsr690AAAdsAAABhnBvc3QAAwAAAAAI9AAAACAAAwPAAZAABQAAApkCzAAAAI8CmQLMAAAB6wAzAQkAAAAAAAAAAAAAAAAAAAABEAAAAAAAAAAAAAAAAAAAAABAAADpBgPA/8AAQAPAAEAAAAABAAAAAAAAAAAAAAAgAAAAAAADAAAAAwAAABwAAQADAAAAHAADAAEAAAAcAAQAOAAAAAoACAACAAIAAQAg6Qb//f//AAAAAAAg6QD//f//AAH/4xcEAAMAAQAAAAAAAAAAAAAAAQAB//8ADwABAAAAAAAAAAAAAgAANzkBAAAAAAEAAAAAAAAAAAACAAA3OQEAAAAAAQAAAAAAAAAAAAIAADc5AQAAAAABAWIAjQKeAskAEwAAJSc3NjQnJiIHAQYUFwEWMjc2NCcCnuLiDQ0MJAz/AA0NAQAMJAwNDcni4gwjDQwM/wANIwz/AA0NDCMNAAAAAQFiAI0CngLJABMAACUBNjQnASYiBwYUHwEHBhQXFjI3AZ4BAA0N/wAMJAwNDeLiDQ0MJAyNAQAMIw0BAAwMDSMM4uINIwwNDQAAAAIA4gC3Ax4CngATACcAACUnNzY0JyYiDwEGFB8BFjI3NjQnISc3NjQnJiIPAQYUHwEWMjc2NCcB87e3DQ0MIw3VDQ3VDSMMDQ0BK7e3DQ0MJAzVDQ3VDCQMDQ3zuLcMJAwNDdUNIwzWDAwNIwy4twwkDA0N1Q0jDNYMDA0jDAAAAgDiALcDHgKeABMAJwAAJTc2NC8BJiIHBhQfAQcGFBcWMjchNzY0LwEmIgcGFB8BBwYUFxYyNwJJ1Q0N1Q0jDA0Nt7cNDQwjDf7V1Q0N1QwkDA0Nt7cNDQwkDLfWDCMN1Q0NDCQMt7gMIw0MDNYMIw3VDQ0MJAy3uAwjDQwMAAADAFUAAAOrA1UAMwBoAHcAABMiBgcOAQcOAQcOARURFBYXHgEXHgEXHgEzITI2Nz4BNz4BNz4BNRE0JicuAScuAScuASMFITIWFx4BFx4BFx4BFREUBgcOAQcOAQcOASMhIiYnLgEnLgEnLgE1ETQ2Nz4BNz4BNz4BMxMhMjY1NCYjISIGFRQWM9UNGAwLFQkJDgUFBQUFBQ4JCRULDBgNAlYNGAwLFQkJDgUFBQUFBQ4JCRULDBgN/aoCVgQIBAQHAwMFAQIBAQIBBQMDBwQECAT9qgQIBAQHAwMFAQIBAQIBBQMDBwQECASAAVYRGRkR/qoRGRkRA1UFBAUOCQkVDAsZDf2rDRkLDBUJCA4FBQUFBQUOCQgVDAsZDQJVDRkLDBUJCQ4FBAVVAgECBQMCBwQECAX9qwQJAwQHAwMFAQICAgIBBQMDBwQDCQQCVQUIBAQHAgMFAgEC/oAZEhEZGRESGQAAAAADAFUAAAOrA1UAMwBoAIkAABMiBgcOAQcOAQcOARURFBYXHgEXHgEXHgEzITI2Nz4BNz4BNz4BNRE0JicuAScuAScuASMFITIWFx4BFx4BFx4BFREUBgcOAQcOAQcOASMhIiYnLgEnLgEnLgE1ETQ2Nz4BNz4BNz4BMxMzFRQWMzI2PQEzMjY1NCYrATU0JiMiBh0BIyIGFRQWM9UNGAwLFQkJDgUFBQUFBQ4JCRULDBgNAlYNGAwLFQkJDgUFBQUFBQ4JCRULDBgN/aoCVgQIBAQHAwMFAQIBAQIBBQMDBwQECAT9qgQIBAQHAwMFAQIBAQIBBQMDBwQECASAgBkSEhmAERkZEYAZEhIZgBEZGREDVQUEBQ4JCRUMCxkN/asNGQsMFQkIDgUFBQUFBQ4JCBUMCxkNAlUNGQsMFQkJDgUEBVUCAQIFAwIHBAQIBf2rBAkDBAcDAwUBAgICAgEFAwMHBAMJBAJVBQgEBAcCAwUCAQL+gIASGRkSgBkSERmAEhkZEoAZERIZAAABAOIAjQMeAskAIAAAExcHBhQXFjI/ARcWMjc2NC8BNzY0JyYiDwEnJiIHBhQX4uLiDQ0MJAzi4gwkDA0N4uINDQwkDOLiDCQMDQ0CjeLiDSMMDQ3h4Q0NDCMN4uIMIw0MDOLiDAwNIwwAAAABAAAAAQAAa5n0y18PPPUACwQAAAAAANivOVsAAAAA2K85WwAAAAADqwNVAAAACAACAAAAAAAAAAEAAAPA/8AAAAQAAAAAAAOrAAEAAAAAAAAAAAAAAAAAAAALBAAAAAAAAAAAAAAAAgAAAAQAAWIEAAFiBAAA4gQAAOIEAABVBAAAVQQAAOIAAAAAAAoAFAAeAEQAagCqAOoBngJkApoAAQAAAAsAigADAAAAAAACAAAAAAAAAAAAAAAAAAAAAAAAAA4ArgABAAAAAAABAAcAAAABAAAAAAACAAcAYAABAAAAAAADAAcANgABAAAAAAAEAAcAdQABAAAAAAAFAAsAFQABAAAAAAAGAAcASwABAAAAAAAKABoAigADAAEECQABAA4ABwADAAEECQACAA4AZwADAAEECQADAA4APQADAAEECQAEAA4AfAADAAEECQAFABYAIAADAAEECQAGAA4AUgADAAEECQAKADQApGZjaWNvbnMAZgBjAGkAYwBvAG4Ac1ZlcnNpb24gMS4wAFYAZQByAHMAaQBvAG4AIAAxAC4AMGZjaWNvbnMAZgBjAGkAYwBvAG4Ac2ZjaWNvbnMAZgBjAGkAYwBvAG4Ac1JlZ3VsYXIAUgBlAGcAdQBsAGEAcmZjaWNvbnMAZgBjAGkAYwBvAG4Ac0ZvbnQgZ2VuZXJhdGVkIGJ5IEljb01vb24uAEYAbwBuAHQAIABnAGUAbgBlAHIAYQB0AGUAZAAgAGIAeQAgAEkAYwBvAE0AbwBvAG4ALgAAAAMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA=") format("truetype")}.fc-icon{speak:none;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;display:inline-block;font-family:fcicons!important;font-style:normal;font-variant:normal;font-weight:400;height:1em;line-height:1;text-align:center;text-transform:none;-webkit-user-select:none;-moz-user-select:none;user-select:none;width:1em}.fc-icon-chevron-left:before{content:"\\e900"}.fc-icon-chevron-right:before{content:"\\e901"}.fc-icon-chevrons-left:before{content:"\\e902"}.fc-icon-chevrons-right:before{content:"\\e903"}.fc-icon-minus-square:before{content:"\\e904"}.fc-icon-plus-square:before{content:"\\e905"}.fc-icon-x:before{content:"\\e906"}.fc .fc-button{border-radius:0;font-family:inherit;font-size:inherit;line-height:inherit;margin:0;overflow:visible;text-transform:none}.fc .fc-button:focus{outline:1px dotted;outline:5px auto -webkit-focus-ring-color}.fc .fc-button{-webkit-appearance:button}.fc .fc-button:not(:disabled){cursor:pointer}.fc .fc-button{background-color:transparent;border:1px solid transparent;border-radius:.25em;display:inline-block;font-size:1em;font-weight:400;line-height:1.5;padding:.4em .65em;text-align:center;-webkit-user-select:none;-moz-user-select:none;user-select:none;vertical-align:middle}.fc .fc-button:hover{text-decoration:none}.fc .fc-button:focus{box-shadow:0 0 0 .2rem rgba(44,62,80,.25);outline:0}.fc .fc-button:disabled{opacity:.65}.fc .fc-button-primary{background-color:var(--fc-button-bg-color);border-color:var(--fc-button-border-color);color:var(--fc-button-text-color)}.fc .fc-button-primary:hover{background-color:var(--fc-button-hover-bg-color);border-color:var(--fc-button-hover-border-color);color:var(--fc-button-text-color)}.fc .fc-button-primary:disabled{background-color:var(--fc-button-bg-color);border-color:var(--fc-button-border-color);color:var(--fc-button-text-color)}.fc .fc-button-primary:focus{box-shadow:0 0 0 .2rem rgba(76,91,106,.5)}.fc .fc-button-primary:not(:disabled).fc-button-active,.fc .fc-button-primary:not(:disabled):active{background-color:var(--fc-button-active-bg-color);border-color:var(--fc-button-active-border-color);color:var(--fc-button-text-color)}.fc .fc-button-primary:not(:disabled).fc-button-active:focus,.fc .fc-button-primary:not(:disabled):active:focus{box-shadow:0 0 0 .2rem rgba(76,91,106,.5)}.fc .fc-button .fc-icon{font-size:1.5em;vertical-align:middle}.fc .fc-button-group{display:inline-flex;position:relative;vertical-align:middle}.fc .fc-button-group>.fc-button{flex:1 1 auto;position:relative}.fc .fc-button-group>.fc-button.fc-button-active,.fc .fc-button-group>.fc-button:active,.fc .fc-button-group>.fc-button:focus,.fc .fc-button-group>.fc-button:hover{z-index:1}.fc-direction-ltr .fc-button-group>.fc-button:not(:first-child){border-bottom-left-radius:0;border-top-left-radius:0;margin-left:-1px}.fc-direction-ltr .fc-button-group>.fc-button:not(:last-child){border-bottom-right-radius:0;border-top-right-radius:0}.fc-direction-rtl .fc-button-group>.fc-button:not(:first-child){border-bottom-right-radius:0;border-top-right-radius:0;margin-right:-1px}.fc-direction-rtl .fc-button-group>.fc-button:not(:last-child){border-bottom-left-radius:0;border-top-left-radius:0}.fc .fc-toolbar{align-items:center;display:flex;justify-content:space-between}.fc .fc-toolbar.fc-header-toolbar{margin-bottom:1.5em}.fc .fc-toolbar.fc-footer-toolbar{margin-top:1.5em}.fc .fc-toolbar-title{font-size:1.75em;margin:0}.fc-direction-ltr .fc-toolbar>*>:not(:first-child){margin-left:.75em}.fc-direction-rtl .fc-toolbar>*>:not(:first-child){margin-right:.75em}.fc-direction-rtl .fc-toolbar-ltr{flex-direction:row-reverse}.fc .fc-scroller{-webkit-overflow-scrolling:touch;position:relative}.fc .fc-scroller-liquid{height:100%}.fc .fc-scroller-liquid-absolute{bottom:0;left:0;position:absolute;right:0;top:0}.fc .fc-scroller-harness{direction:ltr;overflow:hidden;position:relative}.fc .fc-scroller-harness-liquid{height:100%}.fc-direction-rtl .fc-scroller-harness>.fc-scroller{direction:rtl}.fc-theme-standard .fc-scrollgrid{border:1px solid var(--fc-border-color)}.fc .fc-scrollgrid,.fc .fc-scrollgrid table{table-layout:fixed;width:100%}.fc .fc-scrollgrid table{border-left-style:hidden;border-right-style:hidden;border-top-style:hidden}.fc .fc-scrollgrid{border-bottom-width:0;border-collapse:separate;border-right-width:0}.fc .fc-scrollgrid-liquid{height:100%}.fc .fc-scrollgrid-section,.fc .fc-scrollgrid-section table,.fc .fc-scrollgrid-section>td{height:1px}.fc .fc-scrollgrid-section-liquid>td{height:100%}.fc .fc-scrollgrid-section>*{border-left-width:0;border-top-width:0}.fc .fc-scrollgrid-section-footer>*,.fc .fc-scrollgrid-section-header>*{border-bottom-width:0}.fc .fc-scrollgrid-section-body table,.fc .fc-scrollgrid-section-footer table{border-bottom-style:hidden}.fc .fc-scrollgrid-section-sticky>*{background:var(--fc-page-bg-color);position:sticky;z-index:3}.fc .fc-scrollgrid-section-header.fc-scrollgrid-section-sticky>*{top:0}.fc .fc-scrollgrid-section-footer.fc-scrollgrid-section-sticky>*{bottom:0}.fc .fc-scrollgrid-sticky-shim{height:1px;margin-bottom:-1px}.fc-sticky{position:sticky}.fc .fc-view-harness{flex-grow:1;position:relative}.fc .fc-view-harness-active>.fc-view{bottom:0;left:0;position:absolute;right:0;top:0}.fc .fc-col-header-cell-cushion{display:inline-block;padding:2px 4px}.fc .fc-bg-event,.fc .fc-highlight,.fc .fc-non-business{bottom:0;left:0;position:absolute;right:0;top:0}.fc .fc-non-business{background:var(--fc-non-business-color)}.fc .fc-bg-event{background:var(--fc-bg-event-color);opacity:var(--fc-bg-event-opacity)}.fc .fc-bg-event .fc-event-title{font-size:var(--fc-small-font-size);font-style:italic;margin:.5em}.fc .fc-highlight{background:var(--fc-highlight-color)}.fc .fc-cell-shaded,.fc .fc-day-disabled{background:var(--fc-neutral-bg-color)}a.fc-event,a.fc-event:hover{text-decoration:none}.fc-event.fc-event-draggable,.fc-event[href]{cursor:pointer}.fc-event .fc-event-main{position:relative;z-index:2}.fc-event-dragging:not(.fc-event-selected){opacity:.75}.fc-event-dragging.fc-event-selected{box-shadow:0 2px 7px rgba(0,0,0,.3)}.fc-event .fc-event-resizer{display:none;position:absolute;z-index:4}.fc-event-selected .fc-event-resizer,.fc-event:hover .fc-event-resizer{display:block}.fc-event-selected .fc-event-resizer{background:var(--fc-page-bg-color);border-color:inherit;border-radius:calc(var(--fc-event-resizer-dot-total-width)/2);border-style:solid;border-width:var(--fc-event-resizer-dot-border-width);height:var(--fc-event-resizer-dot-total-width);width:var(--fc-event-resizer-dot-total-width)}.fc-event-selected .fc-event-resizer:before{bottom:-20px;content:"";left:-20px;position:absolute;right:-20px;top:-20px}.fc-event-selected,.fc-event:focus{box-shadow:0 2px 5px rgba(0,0,0,.2)}.fc-event-selected:before,.fc-event:focus:before{bottom:0;content:"";left:0;position:absolute;right:0;top:0;z-index:3}.fc-event-selected:after,.fc-event:focus:after{background:var(--fc-event-selected-overlay-color);bottom:-1px;content:"";left:-1px;position:absolute;right:-1px;top:-1px;z-index:1}.fc-h-event{background-color:var(--fc-event-bg-color);border:1px solid var(--fc-event-border-color);display:block}.fc-h-event .fc-event-main{color:var(--fc-event-text-color)}.fc-h-event .fc-event-main-frame{display:flex}.fc-h-event .fc-event-time{max-width:100%;overflow:hidden}.fc-h-event .fc-event-title-container{flex-grow:1;flex-shrink:1;min-width:0}.fc-h-event .fc-event-title{display:inline-block;left:0;max-width:100%;overflow:hidden;right:0;vertical-align:top}.fc-h-event.fc-event-selected:before{bottom:-10px;top:-10px}.fc-direction-ltr .fc-daygrid-block-event:not(.fc-event-start),.fc-direction-rtl .fc-daygrid-block-event:not(.fc-event-end){border-bottom-left-radius:0;border-left-width:0;border-top-left-radius:0}.fc-direction-ltr .fc-daygrid-block-event:not(.fc-event-end),.fc-direction-rtl .fc-daygrid-block-event:not(.fc-event-start){border-bottom-right-radius:0;border-right-width:0;border-top-right-radius:0}.fc-h-event:not(.fc-event-selected) .fc-event-resizer{bottom:0;top:0;width:var(--fc-event-resizer-thickness)}.fc-direction-ltr .fc-h-event:not(.fc-event-selected) .fc-event-resizer-start,.fc-direction-rtl .fc-h-event:not(.fc-event-selected) .fc-event-resizer-end{cursor:w-resize;left:calc(var(--fc-event-resizer-thickness)*-.5)}.fc-direction-ltr .fc-h-event:not(.fc-event-selected) .fc-event-resizer-end,.fc-direction-rtl .fc-h-event:not(.fc-event-selected) .fc-event-resizer-start{cursor:e-resize;right:calc(var(--fc-event-resizer-thickness)*-.5)}.fc-h-event.fc-event-selected .fc-event-resizer{margin-top:calc(var(--fc-event-resizer-dot-total-width)*-.5);top:50%}.fc-direction-ltr .fc-h-event.fc-event-selected .fc-event-resizer-start,.fc-direction-rtl .fc-h-event.fc-event-selected .fc-event-resizer-end{left:calc(var(--fc-event-resizer-dot-total-width)*-.5)}.fc-direction-ltr .fc-h-event.fc-event-selected .fc-event-resizer-end,.fc-direction-rtl .fc-h-event.fc-event-selected .fc-event-resizer-start{right:calc(var(--fc-event-resizer-dot-total-width)*-.5)}.fc .fc-popover{box-shadow:0 2px 6px rgba(0,0,0,.15);position:absolute;z-index:9999}.fc .fc-popover-header{align-items:center;display:flex;flex-direction:row;justify-content:space-between;padding:3px 4px}.fc .fc-popover-title{margin:0 2px}.fc .fc-popover-close{cursor:pointer;font-size:1.1em;opacity:.65}.fc-theme-standard .fc-popover{background:var(--fc-page-bg-color);border:1px solid var(--fc-border-color)}.fc-theme-standard .fc-popover-header{background:var(--fc-neutral-bg-color)}';
Nr(I0);
class za {
  constructor(e) {
    this.drainedOption = e, this.isRunning = !1, this.isDirty = !1, this.pauseDepths = {}, this.timeoutId = 0;
  }
  request(e) {
    this.isDirty = !0, this.isPaused() || (this.clearTimeout(), e == null ? this.tryDrain() : this.timeoutId = setTimeout(
      // NOT OPTIMAL! TODO: look at debounce
      this.tryDrain.bind(this),
      e
    ));
  }
  pause(e = "") {
    let { pauseDepths: n } = this;
    n[e] = (n[e] || 0) + 1, this.clearTimeout();
  }
  resume(e = "", n) {
    let { pauseDepths: a } = this;
    e in a && (n ? delete a[e] : (a[e] -= 1, a[e] <= 0 && delete a[e]), this.tryDrain());
  }
  isPaused() {
    return Object.keys(this.pauseDepths).length;
  }
  tryDrain() {
    if (!this.isRunning && !this.isPaused()) {
      for (this.isRunning = !0; this.isDirty; )
        this.isDirty = !1, this.drained();
      this.isRunning = !1;
    }
  }
  clear() {
    this.clearTimeout(), this.isDirty = !1, this.pauseDepths = {};
  }
  clearTimeout() {
    this.timeoutId && (clearTimeout(this.timeoutId), this.timeoutId = 0);
  }
  drained() {
    this.drainedOption && this.drainedOption();
  }
}
function La(t) {
  t.parentNode && t.parentNode.removeChild(t);
}
function Le(t, e) {
  if (t.closest)
    return t.closest(e);
  if (!document.documentElement.contains(t))
    return null;
  do {
    if (O0(t, e))
      return t;
    t = t.parentElement || t.parentNode;
  } while (t !== null && t.nodeType === 1);
  return null;
}
function O0(t, e) {
  return (t.matches || t.matchesSelector || t.msMatchesSelector).call(t, e);
}
function R0(t, e) {
  let n = t instanceof HTMLElement ? [t] : t, a = [];
  for (let i = 0; i < n.length; i += 1) {
    let o = n[i].querySelectorAll(e);
    for (let r = 0; r < o.length; r += 1)
      a.push(o[r]);
  }
  return a;
}
const $0 = /(top|left|right|bottom|width|height)$/i;
function Ut(t, e) {
  for (let n in e)
    Or(t, n, e[n]);
}
function Or(t, e, n) {
  n == null ? t.style[e] = "" : typeof n == "number" && $0.test(e) ? t.style[e] = `${n}px` : t.style[e] = n;
}
function Rr(t) {
  var e, n;
  return (n = (e = t.composedPath) === null || e === void 0 ? void 0 : e.call(t)[0]) !== null && n !== void 0 ? n : t.target;
}
let ji = 0;
function zn() {
  return ji += 1, "fc-dom-" + ji;
}
function Ln(t) {
  t.preventDefault();
}
function x0(t, e) {
  return (n) => {
    let a = Le(n.target, t);
    a && e.call(a, n, a);
  };
}
function $r(t, e, n, a) {
  let i = x0(n, a);
  return t.addEventListener(e, i), () => {
    t.removeEventListener(e, i);
  };
}
function P0(t, e, n, a) {
  let i;
  return $r(t, "mouseover", e, (o, r) => {
    if (r !== i) {
      i = r, n(o, r);
      let s = (u) => {
        i = null, a(u, r), r.removeEventListener("mouseleave", s);
      };
      r.addEventListener("mouseleave", s);
    }
  });
}
const Ui = [
  "webkitTransitionEnd",
  "otransitionend",
  "oTransitionEnd",
  "msTransitionEnd",
  "transitionend"
];
function F0(t, e) {
  let n = (a) => {
    e(a), Ui.forEach((i) => {
      t.removeEventListener(i, n);
    });
  };
  Ui.forEach((a) => {
    t.addEventListener(a, n);
  });
}
function xr(t) {
  return Object.assign({ onClick: t }, Pr(t));
}
function Pr(t) {
  return {
    tabIndex: 0,
    onKeyDown(e) {
      (e.key === "Enter" || e.key === " ") && (t(e), e.preventDefault());
    }
  };
}
let Wi = 0;
function wt() {
  return Wi += 1, String(Wi);
}
function Va() {
  document.body.classList.add("fc-not-allowed");
}
function Ha() {
  document.body.classList.remove("fc-not-allowed");
}
function B0(t) {
  t.style.userSelect = "none", t.style.webkitUserSelect = "none", t.addEventListener("selectstart", Ln);
}
function z0(t) {
  t.style.userSelect = "", t.style.webkitUserSelect = "", t.removeEventListener("selectstart", Ln);
}
function L0(t) {
  t.addEventListener("contextmenu", Ln);
}
function V0(t) {
  t.removeEventListener("contextmenu", Ln);
}
function H0(t) {
  let e = [], n = [], a, i;
  for (typeof t == "string" ? n = t.split(/\s*,\s*/) : typeof t == "function" ? n = [t] : Array.isArray(t) && (n = t), a = 0; a < n.length; a += 1)
    i = n[a], typeof i == "string" ? e.push(i.charAt(0) === "-" ? { field: i.substring(1), order: -1 } : { field: i, order: 1 }) : typeof i == "function" && e.push({ func: i });
  return e;
}
function j0(t, e, n) {
  let a, i;
  for (a = 0; a < n.length; a += 1)
    if (i = U0(t, e, n[a]), i)
      return i;
  return 0;
}
function U0(t, e, n) {
  return n.func ? n.func(t, e) : W0(t[n.field], e[n.field]) * (n.order || 1);
}
function W0(t, e) {
  return !t && !e ? 0 : e == null ? -1 : t == null ? 1 : typeof t == "string" || typeof e == "string" ? String(t).localeCompare(String(e)) : t - e;
}
function ea(t, e) {
  let n = String(t);
  return "000".substr(0, e - n.length) + n;
}
function Wt(t, e, n) {
  return typeof t == "function" ? t(...e) : typeof t == "string" ? e.reduce((a, i, o) => a.replace("$" + o, i || ""), t) : n;
}
function Y0(t, e) {
  return t - e;
}
function ta(t) {
  return t % 1 === 0;
}
function G0(t) {
  let e = t.querySelector(".fc-scrollgrid-shrink-frame"), n = t.querySelector(".fc-scrollgrid-shrink-cushion");
  if (!e)
    throw new Error("needs fc-scrollgrid-shrink-frame className");
  if (!n)
    throw new Error("needs fc-scrollgrid-shrink-cushion className");
  return t.getBoundingClientRect().width - e.getBoundingClientRect().width + // the cell padding+border
  n.getBoundingClientRect().width;
}
const q0 = /^(-?)(?:(\d+)\.)?(\d+):(\d\d)(?::(\d\d)(?:\.(\d\d\d))?)?/;
function ke(t, e) {
  return typeof t == "string" ? K0(t) : typeof t == "object" && t ? Yi(t) : typeof t == "number" ? Yi({ [e || "milliseconds"]: t }) : null;
}
function K0(t) {
  let e = q0.exec(t);
  if (e) {
    let n = e[1] ? -1 : 1;
    return {
      years: 0,
      months: 0,
      days: n * (e[2] ? parseInt(e[2], 10) : 0),
      milliseconds: n * ((e[3] ? parseInt(e[3], 10) : 0) * 60 * 60 * 1e3 + // hours
      (e[4] ? parseInt(e[4], 10) : 0) * 60 * 1e3 + // minutes
      (e[5] ? parseInt(e[5], 10) : 0) * 1e3 + // seconds
      (e[6] ? parseInt(e[6], 10) : 0))
    };
  }
  return null;
}
function Yi(t) {
  let e = {
    years: t.years || t.year || 0,
    months: t.months || t.month || 0,
    days: t.days || t.day || 0,
    milliseconds: (t.hours || t.hour || 0) * 60 * 60 * 1e3 + // hours
    (t.minutes || t.minute || 0) * 60 * 1e3 + // minutes
    (t.seconds || t.second || 0) * 1e3 + // seconds
    (t.milliseconds || t.millisecond || t.ms || 0)
    // ms
  }, n = t.weeks || t.week;
  return n && (e.days += n * 7, e.specifiedWeeks = !0), e;
}
function Q0(t, e) {
  return t.years === e.years && t.months === e.months && t.days === e.days && t.milliseconds === e.milliseconds;
}
function Z0(t, e) {
  return {
    years: t.years - e.years,
    months: t.months - e.months,
    days: t.days - e.days,
    milliseconds: t.milliseconds - e.milliseconds
  };
}
function J0(t) {
  return Rt(t) / 365;
}
function X0(t) {
  return Rt(t) / 30;
}
function Rt(t) {
  return Jt(t) / 864e5;
}
function Jt(t) {
  return t.years * (365 * 864e5) + t.months * (30 * 864e5) + t.days * 864e5 + t.milliseconds;
}
function ya(t) {
  let e = t.milliseconds;
  if (e) {
    if (e % 1e3 !== 0)
      return { unit: "millisecond", value: e };
    if (e % (1e3 * 60) !== 0)
      return { unit: "second", value: e / 1e3 };
    if (e % (1e3 * 60 * 60) !== 0)
      return { unit: "minute", value: e / (1e3 * 60) };
    if (e)
      return { unit: "hour", value: e / (1e3 * 60 * 60) };
  }
  return t.days ? t.specifiedWeeks && t.days % 7 === 0 ? { unit: "week", value: t.days / 7 } : { unit: "day", value: t.days } : t.months ? { unit: "month", value: t.months } : t.years ? { unit: "year", value: t.years } : { unit: "millisecond", value: 0 };
}
function ct(t, e, n) {
  if (t === e)
    return !0;
  let a = t.length, i;
  if (a !== e.length)
    return !1;
  for (i = 0; i < a; i += 1)
    if (!(n ? n(t[i], e[i]) : t[i] === e[i]))
      return !1;
  return !0;
}
const e1 = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"];
function Gi(t, e) {
  let n = rt(t);
  return n[2] += e * 7, Ue(n);
}
function ze(t, e) {
  let n = rt(t);
  return n[2] += e, Ue(n);
}
function dt(t, e) {
  let n = rt(t);
  return n[6] += e, Ue(n);
}
function t1(t, e) {
  return Vt(t, e) / 7;
}
function Vt(t, e) {
  return (e.valueOf() - t.valueOf()) / (1e3 * 60 * 60 * 24);
}
function n1(t, e) {
  return (e.valueOf() - t.valueOf()) / (1e3 * 60 * 60);
}
function a1(t, e) {
  return (e.valueOf() - t.valueOf()) / (1e3 * 60);
}
function i1(t, e) {
  return (e.valueOf() - t.valueOf()) / 1e3;
}
function o1(t, e) {
  let n = Ne(t), a = Ne(e);
  return {
    years: 0,
    months: 0,
    days: Math.round(Vt(n, a)),
    milliseconds: e.valueOf() - a.valueOf() - (t.valueOf() - n.valueOf())
  };
}
function r1(t, e) {
  let n = Tn(t, e);
  return n !== null && n % 7 === 0 ? n / 7 : null;
}
function Tn(t, e) {
  return st(t) === st(e) ? Math.round(Vt(t, e)) : null;
}
function Ne(t) {
  return Ue([
    t.getUTCFullYear(),
    t.getUTCMonth(),
    t.getUTCDate()
  ]);
}
function s1(t) {
  return Ue([
    t.getUTCFullYear(),
    t.getUTCMonth(),
    t.getUTCDate(),
    t.getUTCHours()
  ]);
}
function l1(t) {
  return Ue([
    t.getUTCFullYear(),
    t.getUTCMonth(),
    t.getUTCDate(),
    t.getUTCHours(),
    t.getUTCMinutes()
  ]);
}
function u1(t) {
  return Ue([
    t.getUTCFullYear(),
    t.getUTCMonth(),
    t.getUTCDate(),
    t.getUTCHours(),
    t.getUTCMinutes(),
    t.getUTCSeconds()
  ]);
}
function c1(t, e, n) {
  let a = t.getUTCFullYear(), i = na(t, a, e, n);
  if (i < 1)
    return na(t, a - 1, e, n);
  let o = na(t, a + 1, e, n);
  return o >= 1 ? Math.min(i, o) : i;
}
function na(t, e, n, a) {
  let i = Ue([e, 0, 1 + d1(e, n, a)]), o = Ne(t), r = Math.round(Vt(i, o));
  return Math.floor(r / 7) + 1;
}
function d1(t, e, n) {
  let a = 7 + e - n;
  return -((7 + Ue([t, 0, a]).getUTCDay() - e) % 7) + a - 1;
}
function qi(t) {
  return [
    t.getFullYear(),
    t.getMonth(),
    t.getDate(),
    t.getHours(),
    t.getMinutes(),
    t.getSeconds(),
    t.getMilliseconds()
  ];
}
function Ki(t) {
  return new Date(
    t[0],
    t[1] || 0,
    t[2] == null ? 1 : t[2],
    // day of month
    t[3] || 0,
    t[4] || 0,
    t[5] || 0
  );
}
function rt(t) {
  return [
    t.getUTCFullYear(),
    t.getUTCMonth(),
    t.getUTCDate(),
    t.getUTCHours(),
    t.getUTCMinutes(),
    t.getUTCSeconds(),
    t.getUTCMilliseconds()
  ];
}
function Ue(t) {
  return t.length === 1 && (t = t.concat([0])), new Date(Date.UTC(...t));
}
function Fr(t) {
  return !isNaN(t.valueOf());
}
function st(t) {
  return t.getUTCHours() * 1e3 * 60 * 60 + t.getUTCMinutes() * 1e3 * 60 + t.getUTCSeconds() * 1e3 + t.getUTCMilliseconds();
}
function f1(t, e, n = !1) {
  let a = t.toISOString();
  return a = a.replace(".000", ""), n && (a = a.replace("T00:00:00Z", "")), a.length > 10 && (e == null ? a = a.replace("Z", "") : e !== 0 && (a = a.replace("Z", Ua(e, !0)))), a;
}
function ja(t) {
  return t.toISOString().replace(/T.*$/, "");
}
function m1(t) {
  return t.toISOString().match(/^\d{4}-\d{2}/)[0];
}
function Ua(t, e = !1) {
  let n = t < 0 ? "-" : "+", a = Math.abs(t), i = Math.floor(a / 60), o = Math.round(a % 60);
  return e ? `${n + ea(i, 2)}:${ea(o, 2)}` : `GMT${n}${i}${o ? `:${ea(o, 2)}` : ""}`;
}
function Ce(t, e, n) {
  let a, i;
  return function(...o) {
    if (!a)
      i = t.apply(this, o);
    else if (!ct(a, o)) {
      let r = t.apply(this, o);
      (!e || !e(r, i)) && (i = r);
    }
    return a = o, i;
  };
}
function yn(t, e, n) {
  let a, i;
  return (o) => (a ? Qe(a, o) || (i = t.call(this, o)) : i = t.call(this, o), a = o, i);
}
const aa = {
  week: 3,
  separator: 9,
  omitZeroMinute: 9,
  meridiem: 9,
  omitCommas: 9
}, En = {
  timeZoneName: 7,
  era: 6,
  year: 5,
  month: 4,
  day: 2,
  weekday: 2,
  hour: 1,
  minute: 1,
  second: 1
}, ln = /\s*([ap])\.?m\.?/i, h1 = /,/g, v1 = /\s+/g, p1 = /\u200e/g, g1 = /UTC|GMT/;
class y1 {
  constructor(e) {
    let n = {}, a = {}, i = 9;
    for (let o in e)
      o in aa ? (a[o] = e[o], aa[o] < 9 && (i = Math.min(aa[o], i))) : (n[o] = e[o], o in En && (i = Math.min(En[o], i)));
    this.standardDateProps = n, this.extendedSettings = a, this.smallestUnitNum = i, this.buildFormattingFunc = Ce(Qi);
  }
  format(e, n) {
    return this.buildFormattingFunc(this.standardDateProps, this.extendedSettings, n)(e);
  }
  formatRange(e, n, a, i) {
    let { standardDateProps: o, extendedSettings: r } = this, s = k1(e.marker, n.marker, a.calendarSystem);
    if (!s)
      return this.format(e, a);
    let u = s;
    u > 1 && // the two dates are different in a way that's larger scale than time
    (o.year === "numeric" || o.year === "2-digit") && (o.month === "numeric" || o.month === "2-digit") && (o.day === "numeric" || o.day === "2-digit") && (u = 1);
    let d = this.format(e, a), m = this.format(n, a);
    if (d === m)
      return d;
    let v = S1(o, u), p = Qi(v, r, a), h = p(e), g = p(n), y = T1(d, h, m, g), b = r.separator || i || a.defaultSeparator || "";
    return y ? y.before + h + b + g + y.after : d + b + m;
  }
  getSmallestUnit() {
    switch (this.smallestUnitNum) {
      case 7:
      case 6:
      case 5:
        return "year";
      case 4:
        return "month";
      case 3:
        return "week";
      case 2:
        return "day";
      default:
        return "time";
    }
  }
}
function Qi(t, e, n) {
  let a = Object.keys(t).length;
  return a === 1 && t.timeZoneName === "short" ? (i) => Ua(i.timeZoneOffset) : a === 0 && e.week ? (i) => A1(n.computeWeekNumber(i.marker), n.weekText, n.weekTextLong, n.locale, e.week) : b1(t, e, n);
}
function b1(t, e, n) {
  t = Object.assign({}, t), e = Object.assign({}, e), _1(t, e), t.timeZone = "UTC";
  let a = new Intl.DateTimeFormat(n.locale.codes, t), i;
  if (e.omitZeroMinute) {
    let o = Object.assign({}, t);
    delete o.minute, i = new Intl.DateTimeFormat(n.locale.codes, o);
  }
  return (o) => {
    let { marker: r } = o, s;
    i && !r.getUTCMinutes() ? s = i : s = a;
    let u = s.format(r);
    return C1(u, o, t, e, n);
  };
}
function _1(t, e) {
  t.timeZoneName && (t.hour || (t.hour = "2-digit"), t.minute || (t.minute = "2-digit")), t.timeZoneName === "long" && (t.timeZoneName = "short"), e.omitZeroMinute && (t.second || t.millisecond) && delete e.omitZeroMinute;
}
function C1(t, e, n, a, i) {
  return t = t.replace(p1, ""), n.timeZoneName === "short" && (t = w1(t, i.timeZone === "UTC" || e.timeZoneOffset == null ? "UTC" : (
    // important to normalize for IE, which does "GMT"
    Ua(e.timeZoneOffset)
  ))), a.omitCommas && (t = t.replace(h1, "").trim()), a.omitZeroMinute && (t = t.replace(":00", "")), a.meridiem === !1 ? t = t.replace(ln, "").trim() : a.meridiem === "narrow" ? t = t.replace(ln, (o, r) => r.toLocaleLowerCase()) : a.meridiem === "short" ? t = t.replace(ln, (o, r) => `${r.toLocaleLowerCase()}m`) : a.meridiem === "lowercase" && (t = t.replace(ln, (o) => o.toLocaleLowerCase())), t = t.replace(v1, " "), t = t.trim(), t;
}
function w1(t, e) {
  let n = !1;
  return t = t.replace(g1, () => (n = !0, e)), n || (t += ` ${e}`), t;
}
function A1(t, e, n, a, i) {
  let o = [];
  return i === "long" ? o.push(n) : (i === "short" || i === "narrow") && o.push(e), (i === "long" || i === "short") && o.push(" "), o.push(a.simpleNumberFormat.format(t)), a.options.direction === "rtl" && o.reverse(), o.join("");
}
function k1(t, e, n) {
  return n.getMarkerYear(t) !== n.getMarkerYear(e) ? 5 : n.getMarkerMonth(t) !== n.getMarkerMonth(e) ? 4 : n.getMarkerDay(t) !== n.getMarkerDay(e) ? 2 : st(t) !== st(e) ? 1 : 0;
}
function S1(t, e) {
  let n = {};
  for (let a in t)
    (!(a in En) || // not a date part prop (like timeZone)
    En[a] <= e) && (n[a] = t[a]);
  return n;
}
function T1(t, e, n, a) {
  let i = 0;
  for (; i < t.length; ) {
    let o = t.indexOf(e, i);
    if (o === -1)
      break;
    let r = t.substr(0, o);
    i = o + e.length;
    let s = t.substr(i), u = 0;
    for (; u < n.length; ) {
      let d = n.indexOf(a, u);
      if (d === -1)
        break;
      let m = n.substr(0, d);
      u = d + a.length;
      let v = n.substr(u);
      if (r === m && s === v)
        return {
          before: r,
          after: s
        };
    }
  }
  return null;
}
function Zi(t, e) {
  let n = e.markerToArray(t.marker);
  return {
    marker: t.marker,
    timeZoneOffset: t.timeZoneOffset,
    array: n,
    year: n[0],
    month: n[1],
    day: n[2],
    hour: n[3],
    minute: n[4],
    second: n[5],
    millisecond: n[6]
  };
}
function Mn(t, e, n, a) {
  let i = Zi(t, n.calendarSystem), o = e ? Zi(e, n.calendarSystem) : null;
  return {
    date: i,
    start: i,
    end: o,
    timeZone: n.timeZone,
    localeCodes: n.locale.codes,
    defaultSeparator: a || n.defaultSeparator
  };
}
class E1 {
  constructor(e) {
    this.cmdStr = e;
  }
  format(e, n, a) {
    return n.cmdFormatter(this.cmdStr, Mn(e, null, n, a));
  }
  formatRange(e, n, a, i) {
    return a.cmdFormatter(this.cmdStr, Mn(e, n, a, i));
  }
}
class M1 {
  constructor(e) {
    this.func = e;
  }
  format(e, n, a) {
    return this.func(Mn(e, null, n, a));
  }
  formatRange(e, n, a, i) {
    return this.func(Mn(e, n, a, i));
  }
}
function Be(t) {
  return typeof t == "object" && t ? new y1(t) : typeof t == "string" ? new E1(t) : typeof t == "function" ? new M1(t) : null;
}
const Ji = {
  navLinkDayClick: G,
  navLinkWeekClick: G,
  duration: ke,
  bootstrapFontAwesome: G,
  buttonIcons: G,
  customButtons: G,
  defaultAllDayEventDuration: ke,
  defaultTimedEventDuration: ke,
  nextDayThreshold: ke,
  scrollTime: ke,
  scrollTimeReset: Boolean,
  slotMinTime: ke,
  slotMaxTime: ke,
  dayPopoverFormat: Be,
  slotDuration: ke,
  snapDuration: ke,
  headerToolbar: G,
  footerToolbar: G,
  defaultRangeSeparator: String,
  titleRangeSeparator: String,
  forceEventDuration: Boolean,
  dayHeaders: Boolean,
  dayHeaderFormat: Be,
  dayHeaderClassNames: G,
  dayHeaderContent: G,
  dayHeaderDidMount: G,
  dayHeaderWillUnmount: G,
  dayCellClassNames: G,
  dayCellContent: G,
  dayCellDidMount: G,
  dayCellWillUnmount: G,
  initialView: String,
  aspectRatio: Number,
  weekends: Boolean,
  weekNumberCalculation: G,
  weekNumbers: Boolean,
  weekNumberClassNames: G,
  weekNumberContent: G,
  weekNumberDidMount: G,
  weekNumberWillUnmount: G,
  editable: Boolean,
  viewClassNames: G,
  viewDidMount: G,
  viewWillUnmount: G,
  nowIndicator: Boolean,
  nowIndicatorSnap: G,
  nowIndicatorClassNames: G,
  nowIndicatorContent: G,
  nowIndicatorDidMount: G,
  nowIndicatorWillUnmount: G,
  showNonCurrentDates: Boolean,
  lazyFetching: Boolean,
  startParam: String,
  endParam: String,
  timeZoneParam: String,
  timeZone: String,
  locales: G,
  locale: G,
  themeSystem: String,
  dragRevertDuration: Number,
  dragScroll: Boolean,
  allDayMaintainDuration: Boolean,
  unselectAuto: Boolean,
  dropAccept: G,
  eventOrder: H0,
  eventOrderStrict: Boolean,
  handleWindowResize: Boolean,
  windowResizeDelay: Number,
  longPressDelay: Number,
  eventDragMinDistance: Number,
  expandRows: Boolean,
  height: G,
  contentHeight: G,
  direction: String,
  weekNumberFormat: Be,
  eventResizableFromStart: Boolean,
  displayEventTime: Boolean,
  displayEventEnd: Boolean,
  weekText: String,
  weekTextLong: String,
  progressiveEventRendering: Boolean,
  businessHours: G,
  initialDate: G,
  now: G,
  eventDataTransform: G,
  stickyHeaderDates: G,
  stickyFooterScrollbar: G,
  viewHeight: G,
  defaultAllDay: Boolean,
  eventSourceFailure: G,
  eventSourceSuccess: G,
  eventDisplay: String,
  eventStartEditable: Boolean,
  eventDurationEditable: Boolean,
  eventOverlap: G,
  eventConstraint: G,
  eventAllow: G,
  eventBackgroundColor: String,
  eventBorderColor: String,
  eventTextColor: String,
  eventColor: String,
  eventClassNames: G,
  eventContent: G,
  eventDidMount: G,
  eventWillUnmount: G,
  selectConstraint: G,
  selectOverlap: G,
  selectAllow: G,
  droppable: Boolean,
  unselectCancel: String,
  slotLabelFormat: G,
  slotLaneClassNames: G,
  slotLaneContent: G,
  slotLaneDidMount: G,
  slotLaneWillUnmount: G,
  slotLabelClassNames: G,
  slotLabelContent: G,
  slotLabelDidMount: G,
  slotLabelWillUnmount: G,
  dayMaxEvents: G,
  dayMaxEventRows: G,
  dayMinWidth: Number,
  slotLabelInterval: ke,
  allDayText: String,
  allDayClassNames: G,
  allDayContent: G,
  allDayDidMount: G,
  allDayWillUnmount: G,
  slotMinWidth: Number,
  navLinks: Boolean,
  eventTimeFormat: Be,
  rerenderDelay: Number,
  moreLinkText: G,
  moreLinkHint: G,
  selectMinDistance: Number,
  selectable: Boolean,
  selectLongPressDelay: Number,
  eventLongPressDelay: Number,
  selectMirror: Boolean,
  eventMaxStack: Number,
  eventMinHeight: Number,
  eventMinWidth: Number,
  eventShortHeight: Number,
  slotEventOverlap: Boolean,
  plugins: G,
  firstDay: Number,
  dayCount: Number,
  dateAlignment: String,
  dateIncrement: ke,
  hiddenDays: G,
  fixedWeekCount: Boolean,
  validRange: G,
  visibleRange: G,
  titleFormat: G,
  eventInteractive: Boolean,
  // only used by list-view, but languages define the value, so we need it in base options
  noEventsText: String,
  viewHint: G,
  navLinkHint: G,
  closeHint: String,
  timeHint: String,
  eventHint: String,
  moreLinkClick: G,
  moreLinkClassNames: G,
  moreLinkContent: G,
  moreLinkDidMount: G,
  moreLinkWillUnmount: G,
  monthStartFormat: Be,
  // for connectors
  // (can't be part of plugin system b/c must be provided at runtime)
  handleCustomRendering: G,
  customRenderingMetaMap: G,
  customRenderingReplaces: Boolean
}, Yt = {
  eventDisplay: "auto",
  defaultRangeSeparator: " - ",
  titleRangeSeparator: " – ",
  defaultTimedEventDuration: "01:00:00",
  defaultAllDayEventDuration: { day: 1 },
  forceEventDuration: !1,
  nextDayThreshold: "00:00:00",
  dayHeaders: !0,
  initialView: "",
  aspectRatio: 1.35,
  headerToolbar: {
    start: "title",
    center: "",
    end: "today prev,next"
  },
  weekends: !0,
  weekNumbers: !1,
  weekNumberCalculation: "local",
  editable: !1,
  nowIndicator: !1,
  scrollTime: "06:00:00",
  scrollTimeReset: !0,
  slotMinTime: "00:00:00",
  slotMaxTime: "24:00:00",
  showNonCurrentDates: !0,
  lazyFetching: !0,
  startParam: "start",
  endParam: "end",
  timeZoneParam: "timeZone",
  timeZone: "local",
  locales: [],
  locale: "",
  themeSystem: "standard",
  dragRevertDuration: 500,
  dragScroll: !0,
  allDayMaintainDuration: !1,
  unselectAuto: !0,
  dropAccept: "*",
  eventOrder: "start,-duration,allDay,title",
  dayPopoverFormat: { month: "long", day: "numeric", year: "numeric" },
  handleWindowResize: !0,
  windowResizeDelay: 100,
  longPressDelay: 1e3,
  eventDragMinDistance: 5,
  expandRows: !1,
  navLinks: !1,
  selectable: !1,
  eventMinHeight: 15,
  eventMinWidth: 30,
  eventShortHeight: 30,
  monthStartFormat: { month: "long", day: "numeric" },
  nowIndicatorSnap: "auto"
}, Xi = {
  datesSet: G,
  eventsSet: G,
  eventAdd: G,
  eventChange: G,
  eventRemove: G,
  windowResize: G,
  eventClick: G,
  eventMouseEnter: G,
  eventMouseLeave: G,
  select: G,
  unselect: G,
  loading: G,
  // internal
  _unmount: G,
  _beforeprint: G,
  _afterprint: G,
  _noEventDrop: G,
  _noEventResize: G,
  _resize: G,
  _scrollRequest: G
}, eo = {
  buttonText: G,
  buttonHints: G,
  views: G,
  plugins: G,
  initialEvents: G,
  events: G,
  eventSources: G
}, ht = {
  headerToolbar: vt,
  footerToolbar: vt,
  buttonText: vt,
  buttonHints: vt,
  buttonIcons: vt,
  dateIncrement: vt,
  plugins: un,
  events: un,
  eventSources: un,
  resources: un
};
function vt(t, e) {
  return typeof t == "object" && typeof e == "object" && t && e ? Qe(t, e) : t === e;
}
function un(t, e) {
  return Array.isArray(t) && Array.isArray(e) ? ct(t, e) : t === e;
}
const N1 = {
  type: String,
  component: G,
  buttonText: String,
  buttonTextKey: String,
  dateProfileGeneratorClass: G,
  usesMinMaxTime: Boolean,
  classNames: G,
  content: G,
  didMount: G,
  willUnmount: G
};
function ia(t) {
  return Ya(t, ht);
}
function Wa(t, e) {
  let n = {}, a = {};
  for (let i in e)
    i in t && (n[i] = e[i](t[i]));
  for (let i in t)
    i in e || (a[i] = t[i]);
  return { refined: n, extra: a };
}
function G(t) {
  return t;
}
const { hasOwnProperty: Nn } = Object.prototype;
function Ya(t, e) {
  let n = {};
  if (e) {
    for (let a in e)
      if (e[a] === vt) {
        let i = [];
        for (let o = t.length - 1; o >= 0; o -= 1) {
          let r = t[o][a];
          if (typeof r == "object" && r)
            i.unshift(r);
          else if (r !== void 0) {
            n[a] = r;
            break;
          }
        }
        i.length && (n[a] = Ya(i));
      }
  }
  for (let a = t.length - 1; a >= 0; a -= 1) {
    let i = t[a];
    for (let o in i)
      o in n || (n[o] = i[o]);
  }
  return n;
}
function _t(t, e) {
  let n = {};
  for (let a in t)
    e(t[a], a) && (n[a] = t[a]);
  return n;
}
function At(t, e) {
  let n = {};
  for (let a in t)
    n[a] = e(t[a], a);
  return n;
}
function Br(t) {
  let e = {};
  for (let n of t)
    e[n] = !0;
  return e;
}
function Ga(t) {
  let e = [];
  for (let n in t)
    e.push(t[n]);
  return e;
}
function Qe(t, e) {
  if (t === e)
    return !0;
  for (let n in t)
    if (Nn.call(t, n) && !(n in e))
      return !1;
  for (let n in e)
    if (Nn.call(e, n) && t[n] !== e[n])
      return !1;
  return !0;
}
const D1 = /^on[A-Z]/;
function I1(t, e) {
  const n = O1(t, e);
  for (let a of n)
    if (!D1.test(a))
      return !1;
  return !0;
}
function O1(t, e) {
  let n = [];
  for (let a in t)
    Nn.call(t, a) && (a in e || n.push(a));
  for (let a in e)
    Nn.call(e, a) && t[a] !== e[a] && n.push(a);
  return n;
}
function oa(t, e, n = {}) {
  if (t === e)
    return !0;
  for (let a in e)
    if (!(a in t && R1(t[a], e[a], n[a]))) return !1;
  for (let a in t)
    if (!(a in e))
      return !1;
  return !0;
}
function R1(t, e, n) {
  return t === e || n === !0 ? !0 : n ? n(t, e) : !1;
}
function $1(t, e = 0, n, a = 1) {
  let i = [];
  n == null && (n = Object.keys(t).length);
  for (let o = e; o < n; o += a) {
    let r = t[o];
    r !== void 0 && i.push(r);
  }
  return i;
}
let zr = {};
function x1(t, e) {
  zr[t] = e;
}
function P1(t) {
  return new zr[t]();
}
class F1 {
  getMarkerYear(e) {
    return e.getUTCFullYear();
  }
  getMarkerMonth(e) {
    return e.getUTCMonth();
  }
  getMarkerDay(e) {
    return e.getUTCDate();
  }
  arrayToMarker(e) {
    return Ue(e);
  }
  markerToArray(e) {
    return rt(e);
  }
}
x1("gregory", F1);
const B1 = /^\s*(\d{4})(-?(\d{2})(-?(\d{2})([T ](\d{2}):?(\d{2})(:?(\d{2})(\.(\d+))?)?(Z|(([-+])(\d{2})(:?(\d{2}))?))?)?)?)?$/;
function z1(t) {
  let e = B1.exec(t);
  if (e) {
    let n = new Date(Date.UTC(Number(e[1]), e[3] ? Number(e[3]) - 1 : 0, Number(e[5] || 1), Number(e[7] || 0), Number(e[8] || 0), Number(e[10] || 0), e[12] ? +`0.${e[12]}` * 1e3 : 0));
    if (Fr(n)) {
      let a = null;
      return e[13] && (a = (e[15] === "-" ? -1 : 1) * (Number(e[16] || 0) * 60 + Number(e[18] || 0))), {
        marker: n,
        isTimeUnspecified: !e[6],
        timeZoneOffset: a
      };
    }
  }
  return null;
}
class L1 {
  constructor(e) {
    let n = this.timeZone = e.timeZone, a = n !== "local" && n !== "UTC";
    e.namedTimeZoneImpl && a && (this.namedTimeZoneImpl = new e.namedTimeZoneImpl(n)), this.canComputeOffset = !!(!a || this.namedTimeZoneImpl), this.calendarSystem = P1(e.calendarSystem), this.locale = e.locale, this.weekDow = e.locale.week.dow, this.weekDoy = e.locale.week.doy, e.weekNumberCalculation === "ISO" && (this.weekDow = 1, this.weekDoy = 4), typeof e.firstDay == "number" && (this.weekDow = e.firstDay), typeof e.weekNumberCalculation == "function" && (this.weekNumberFunc = e.weekNumberCalculation), this.weekText = e.weekText != null ? e.weekText : e.locale.options.weekText, this.weekTextLong = (e.weekTextLong != null ? e.weekTextLong : e.locale.options.weekTextLong) || this.weekText, this.cmdFormatter = e.cmdFormatter, this.defaultSeparator = e.defaultSeparator;
  }
  // Creating / Parsing
  createMarker(e) {
    let n = this.createMarkerMeta(e);
    return n === null ? null : n.marker;
  }
  createNowMarker() {
    return this.canComputeOffset ? this.timestampToMarker((/* @__PURE__ */ new Date()).valueOf()) : Ue(qi(/* @__PURE__ */ new Date()));
  }
  createMarkerMeta(e) {
    if (typeof e == "string")
      return this.parse(e);
    let n = null;
    return typeof e == "number" ? n = this.timestampToMarker(e) : e instanceof Date ? (e = e.valueOf(), isNaN(e) || (n = this.timestampToMarker(e))) : Array.isArray(e) && (n = Ue(e)), n === null || !Fr(n) ? null : { marker: n, isTimeUnspecified: !1, forcedTzo: null };
  }
  parse(e) {
    let n = z1(e);
    if (n === null)
      return null;
    let { marker: a } = n, i = null;
    return n.timeZoneOffset !== null && (this.canComputeOffset ? a = this.timestampToMarker(a.valueOf() - n.timeZoneOffset * 60 * 1e3) : i = n.timeZoneOffset), { marker: a, isTimeUnspecified: n.isTimeUnspecified, forcedTzo: i };
  }
  // Accessors
  getYear(e) {
    return this.calendarSystem.getMarkerYear(e);
  }
  getMonth(e) {
    return this.calendarSystem.getMarkerMonth(e);
  }
  getDay(e) {
    return this.calendarSystem.getMarkerDay(e);
  }
  // Adding / Subtracting
  add(e, n) {
    let a = this.calendarSystem.markerToArray(e);
    return a[0] += n.years, a[1] += n.months, a[2] += n.days, a[6] += n.milliseconds, this.calendarSystem.arrayToMarker(a);
  }
  subtract(e, n) {
    let a = this.calendarSystem.markerToArray(e);
    return a[0] -= n.years, a[1] -= n.months, a[2] -= n.days, a[6] -= n.milliseconds, this.calendarSystem.arrayToMarker(a);
  }
  addYears(e, n) {
    let a = this.calendarSystem.markerToArray(e);
    return a[0] += n, this.calendarSystem.arrayToMarker(a);
  }
  addMonths(e, n) {
    let a = this.calendarSystem.markerToArray(e);
    return a[1] += n, this.calendarSystem.arrayToMarker(a);
  }
  // Diffing Whole Units
  diffWholeYears(e, n) {
    let { calendarSystem: a } = this;
    return st(e) === st(n) && a.getMarkerDay(e) === a.getMarkerDay(n) && a.getMarkerMonth(e) === a.getMarkerMonth(n) ? a.getMarkerYear(n) - a.getMarkerYear(e) : null;
  }
  diffWholeMonths(e, n) {
    let { calendarSystem: a } = this;
    return st(e) === st(n) && a.getMarkerDay(e) === a.getMarkerDay(n) ? a.getMarkerMonth(n) - a.getMarkerMonth(e) + (a.getMarkerYear(n) - a.getMarkerYear(e)) * 12 : null;
  }
  // Range / Duration
  greatestWholeUnit(e, n) {
    let a = this.diffWholeYears(e, n);
    return a !== null ? { unit: "year", value: a } : (a = this.diffWholeMonths(e, n), a !== null ? { unit: "month", value: a } : (a = r1(e, n), a !== null ? { unit: "week", value: a } : (a = Tn(e, n), a !== null ? { unit: "day", value: a } : (a = n1(e, n), ta(a) ? { unit: "hour", value: a } : (a = a1(e, n), ta(a) ? { unit: "minute", value: a } : (a = i1(e, n), ta(a) ? { unit: "second", value: a } : { unit: "millisecond", value: n.valueOf() - e.valueOf() }))))));
  }
  countDurationsBetween(e, n, a) {
    let i;
    return a.years && (i = this.diffWholeYears(e, n), i !== null) ? i / J0(a) : a.months && (i = this.diffWholeMonths(e, n), i !== null) ? i / X0(a) : a.days && (i = Tn(e, n), i !== null) ? i / Rt(a) : (n.valueOf() - e.valueOf()) / Jt(a);
  }
  // Start-Of
  // these DON'T return zoned-dates. only UTC start-of dates
  startOf(e, n) {
    return n === "year" ? this.startOfYear(e) : n === "month" ? this.startOfMonth(e) : n === "week" ? this.startOfWeek(e) : n === "day" ? Ne(e) : n === "hour" ? s1(e) : n === "minute" ? l1(e) : n === "second" ? u1(e) : null;
  }
  startOfYear(e) {
    return this.calendarSystem.arrayToMarker([
      this.calendarSystem.getMarkerYear(e)
    ]);
  }
  startOfMonth(e) {
    return this.calendarSystem.arrayToMarker([
      this.calendarSystem.getMarkerYear(e),
      this.calendarSystem.getMarkerMonth(e)
    ]);
  }
  startOfWeek(e) {
    return this.calendarSystem.arrayToMarker([
      this.calendarSystem.getMarkerYear(e),
      this.calendarSystem.getMarkerMonth(e),
      e.getUTCDate() - (e.getUTCDay() - this.weekDow + 7) % 7
    ]);
  }
  // Week Number
  computeWeekNumber(e) {
    return this.weekNumberFunc ? this.weekNumberFunc(this.toDate(e)) : c1(e, this.weekDow, this.weekDoy);
  }
  // TODO: choke on timeZoneName: long
  format(e, n, a = {}) {
    return n.format({
      marker: e,
      timeZoneOffset: a.forcedTzo != null ? a.forcedTzo : this.offsetForMarker(e)
    }, this);
  }
  formatRange(e, n, a, i = {}) {
    return i.isEndExclusive && (n = dt(n, -1)), a.formatRange({
      marker: e,
      timeZoneOffset: i.forcedStartTzo != null ? i.forcedStartTzo : this.offsetForMarker(e)
    }, {
      marker: n,
      timeZoneOffset: i.forcedEndTzo != null ? i.forcedEndTzo : this.offsetForMarker(n)
    }, this, i.defaultSeparator);
  }
  /*
  DUMB: the omitTime arg is dumb. if we omit the time, we want to omit the timezone offset. and if we do that,
  might as well use buildIsoString or some other util directly
  */
  formatIso(e, n = {}) {
    let a = null;
    return n.omitTimeZoneOffset || (n.forcedTzo != null ? a = n.forcedTzo : a = this.offsetForMarker(e)), f1(e, a, n.omitTime);
  }
  // TimeZone
  timestampToMarker(e) {
    return this.timeZone === "local" ? Ue(qi(new Date(e))) : this.timeZone === "UTC" || !this.namedTimeZoneImpl ? new Date(e) : Ue(this.namedTimeZoneImpl.timestampToArray(e));
  }
  offsetForMarker(e) {
    return this.timeZone === "local" ? -Ki(rt(e)).getTimezoneOffset() : this.timeZone === "UTC" ? 0 : this.namedTimeZoneImpl ? this.namedTimeZoneImpl.offsetForArray(rt(e)) : null;
  }
  // Conversion
  toDate(e, n) {
    return this.timeZone === "local" ? Ki(rt(e)) : this.timeZone === "UTC" ? new Date(e.valueOf()) : this.namedTimeZoneImpl ? new Date(e.valueOf() - this.namedTimeZoneImpl.offsetForArray(rt(e)) * 1e3 * 60) : new Date(e.valueOf() - (n || 0));
  }
}
class tn {
  constructor(e) {
    this.iconOverrideOption && this.setIconOverride(e[this.iconOverrideOption]);
  }
  setIconOverride(e) {
    let n, a;
    if (typeof e == "object" && e) {
      n = Object.assign({}, this.iconClasses);
      for (a in e)
        n[a] = this.applyIconOverridePrefix(e[a]);
      this.iconClasses = n;
    } else e === !1 && (this.iconClasses = {});
  }
  applyIconOverridePrefix(e) {
    let n = this.iconOverridePrefix;
    return n && e.indexOf(n) !== 0 && (e = n + e), e;
  }
  getClass(e) {
    return this.classes[e] || "";
  }
  getIconClass(e, n) {
    let a;
    return n && this.rtlIconClasses ? a = this.rtlIconClasses[e] || this.iconClasses[e] : a = this.iconClasses[e], a ? `${this.baseIconClass} ${a}` : "";
  }
  getCustomButtonIconClass(e) {
    let n;
    return this.iconOverrideCustomButtonOption && (n = e[this.iconOverrideCustomButtonOption], n) ? `${this.baseIconClass} ${this.applyIconOverridePrefix(n)}` : "";
  }
}
tn.prototype.classes = {};
tn.prototype.iconClasses = {};
tn.prototype.baseIconClass = "";
tn.prototype.iconOverridePrefix = "";
function Dn(t) {
  t();
  let e = fe.debounceRendering, n = [];
  function a(i) {
    n.push(i);
  }
  for (fe.debounceRendering = a, Zt(q(V1, {}), document.createElement("div")); n.length; )
    n.shift()();
  fe.debounceRendering = e;
}
class V1 extends We {
  render() {
    return q("div", {});
  }
  componentDidMount() {
    this.setState({});
  }
}
function Lr(t) {
  let e = f0(t), n = e.Provider;
  return e.Provider = function() {
    let a = !this.getChildContext, i = n.apply(this, arguments);
    if (a) {
      let o = [];
      this.shouldComponentUpdate = (r) => {
        this.props.value !== r.value && o.forEach((s) => {
          s.context = r.value, s.forceUpdate();
        });
      }, this.sub = (r) => {
        o.push(r);
        let s = r.componentWillUnmount;
        r.componentWillUnmount = () => {
          o.splice(o.indexOf(r), 1), s && s.call(r);
        };
      };
    }
    return i;
  }, e;
}
class H1 {
  constructor(e, n, a, i) {
    this.execFunc = e, this.emitter = n, this.scrollTime = a, this.scrollTimeReset = i, this.handleScrollRequest = (o) => {
      this.queuedRequest = Object.assign({}, this.queuedRequest || {}, o), this.drain();
    }, n.on("_scrollRequest", this.handleScrollRequest), this.fireInitialScroll();
  }
  detach() {
    this.emitter.off("_scrollRequest", this.handleScrollRequest);
  }
  update(e) {
    e && this.scrollTimeReset ? this.fireInitialScroll() : this.drain();
  }
  fireInitialScroll() {
    this.handleScrollRequest({
      time: this.scrollTime
    });
  }
  drain() {
    this.queuedRequest && this.execFunc(this.queuedRequest) && (this.queuedRequest = null);
  }
}
const kt = Lr({});
function j1(t, e, n, a, i, o, r, s, u, d, m, v, p, h) {
  return {
    dateEnv: i,
    nowManager: o,
    options: n,
    pluginHooks: s,
    emitter: m,
    dispatch: u,
    getCurrentData: d,
    calendarApi: v,
    viewSpec: t,
    viewApi: e,
    dateProfileGenerator: a,
    theme: r,
    isRtl: n.direction === "rtl",
    addResizeHandler(g) {
      m.on("_resize", g);
    },
    removeResizeHandler(g) {
      m.off("_resize", g);
    },
    createScrollResponder(g) {
      return new H1(g, m, ke(n.scrollTime), n.scrollTimeReset);
    },
    registerInteractiveComponent: p,
    unregisterInteractiveComponent: h
  };
}
class St extends We {
  // debug: boolean
  shouldComponentUpdate(e, n) {
    return !oa(
      this.props,
      e,
      this.propEquality
      /*, this.debug */
    ) || !oa(
      this.state,
      n,
      this.stateEquality
      /*, this.debug */
    );
  }
  // HACK for freakin' React StrictMode
  safeSetState(e) {
    oa(this.state, Object.assign(Object.assign({}, this.state), e), this.stateEquality) || this.setState(e);
  }
}
St.addPropsEquality = U1;
St.addStateEquality = W1;
St.contextType = kt;
St.prototype.propEquality = {};
St.prototype.stateEquality = {};
class Ie extends St {
}
Ie.contextType = kt;
function U1(t) {
  let e = Object.create(this.prototype.propEquality);
  Object.assign(e, t), this.prototype.propEquality = e;
}
function W1(t) {
  let e = Object.create(this.prototype.stateEquality);
  Object.assign(e, t), this.prototype.stateEquality = e;
}
function Je(t, e) {
  typeof t == "function" ? t(e) : t && (t.current = e);
}
class qa extends Ie {
  constructor() {
    super(...arguments), this.id = wt(), this.queuedDomNodes = [], this.currentDomNodes = [], this.handleEl = (e) => {
      const { options: n } = this.context, { generatorName: a } = this.props;
      (!n.customRenderingReplaces || !ba(a, n)) && this.updateElRef(e);
    }, this.updateElRef = (e) => {
      this.props.elRef && Je(this.props.elRef, e);
    };
  }
  render() {
    const { props: e, context: n } = this, { options: a } = n, { customGenerator: i, defaultGenerator: o, renderProps: r } = e, s = Vr(e, [], this.handleEl);
    let u = !1, d, m = [], v;
    if (i != null) {
      const p = typeof i == "function" ? i(r, q) : i;
      if (p === !0)
        u = !0;
      else {
        const h = p && typeof p == "object";
        h && "html" in p ? s.dangerouslySetInnerHTML = { __html: p.html } : h && "domNodes" in p ? m = Array.prototype.slice.call(p.domNodes) : (h ? dr(p) : typeof p != "function") ? d = p : v = p;
      }
    } else
      u = !ba(e.generatorName, a);
    return u && o && (d = o(r)), this.queuedDomNodes = m, this.currentGeneratorMeta = v, q(e.elTag, s, d);
  }
  componentDidMount() {
    this.applyQueueudDomNodes(), this.triggerCustomRendering(!0);
  }
  componentDidUpdate() {
    this.applyQueueudDomNodes(), this.triggerCustomRendering(!0);
  }
  componentWillUnmount() {
    this.triggerCustomRendering(!1);
  }
  triggerCustomRendering(e) {
    var n;
    const { props: a, context: i } = this, { handleCustomRendering: o, customRenderingMetaMap: r } = i.options;
    if (o) {
      const s = (n = this.currentGeneratorMeta) !== null && n !== void 0 ? n : r?.[a.generatorName];
      s && o(Object.assign(Object.assign({
        id: this.id,
        isActive: e,
        containerEl: this.base,
        reportNewContainerEl: this.updateElRef,
        // front-end framework tells us about new container els
        generatorMeta: s
      }, a), { elClasses: (a.elClasses || []).filter(Y1) }));
    }
  }
  applyQueueudDomNodes() {
    const { queuedDomNodes: e, currentDomNodes: n } = this, a = this.base;
    if (!ct(e, n)) {
      n.forEach(La);
      for (let i of e)
        a.appendChild(i);
      this.currentDomNodes = e;
    }
  }
}
qa.addPropsEquality({
  elClasses: ct,
  elStyle: Qe,
  elAttrs: I1,
  renderProps: Qe
});
function ba(t, e) {
  var n;
  return !!(e.handleCustomRendering && t && (!((n = e.customRenderingMetaMap) === null || n === void 0) && n[t]));
}
function Vr(t, e, n) {
  const a = Object.assign(Object.assign({}, t.elAttrs), { ref: n });
  return (t.elClasses || e) && (a.className = (t.elClasses || []).concat(e || []).concat(a.className || []).filter(Boolean).join(" ")), t.elStyle && (a.style = t.elStyle), a;
}
function Y1(t) {
  return !!t;
}
const Hr = Lr(0);
class at extends We {
  constructor() {
    super(...arguments), this.InnerContent = G1.bind(void 0, this), this.handleEl = (e) => {
      this.el = e, this.props.elRef && (Je(this.props.elRef, e), e && this.didMountMisfire && this.componentDidMount());
    };
  }
  render() {
    const { props: e } = this, n = q1(e.classNameGenerator, e.renderProps);
    if (e.children) {
      const a = Vr(e, n, this.handleEl), i = e.children(this.InnerContent, e.renderProps, a);
      return e.elTag ? q(e.elTag, a, i) : i;
    } else
      return q(qa, Object.assign(Object.assign({}, e), { elRef: this.handleEl, elTag: e.elTag || "div", elClasses: (e.elClasses || []).concat(n), renderId: this.context }));
  }
  componentDidMount() {
    var e, n;
    this.el ? (n = (e = this.props).didMount) === null || n === void 0 || n.call(e, Object.assign(Object.assign({}, this.props.renderProps), { el: this.el })) : this.didMountMisfire = !0;
  }
  componentWillUnmount() {
    var e, n;
    (n = (e = this.props).willUnmount) === null || n === void 0 || n.call(e, Object.assign(Object.assign({}, this.props.renderProps), { el: this.el }));
  }
}
at.contextType = Hr;
function G1(t, e) {
  const n = t.props;
  return q(qa, Object.assign({ renderProps: n.renderProps, generatorName: n.generatorName, customGenerator: n.customGenerator, defaultGenerator: n.defaultGenerator, renderId: t.context }, e));
}
function q1(t, e) {
  const n = typeof t == "function" ? t(e) : t || [];
  return typeof n == "string" ? [n] : n;
}
class to extends Ie {
  render() {
    let { props: e, context: n } = this, { options: a } = n, i = { view: n.viewApi };
    return q(at, { elRef: e.elRef, elTag: e.elTag || "div", elAttrs: e.elAttrs, elClasses: [
      ...jr(e.viewSpec),
      ...e.elClasses || []
    ], elStyle: e.elStyle, renderProps: i, classNameGenerator: a.viewClassNames, generatorName: void 0, didMount: a.viewDidMount, willUnmount: a.viewWillUnmount }, () => e.children);
  }
}
function jr(t) {
  return [
    `fc-${t.type}-view`,
    "fc-view"
  ];
}
function K1(t, e) {
  let n = null, a = null;
  return t.start && (n = e.createMarker(t.start)), t.end && (a = e.createMarker(t.end)), !n && !a || n && a && a < n ? null : { start: n, end: a };
}
function no(t, e) {
  let n = [], { start: a } = e, i, o;
  for (t.sort(Q1), i = 0; i < t.length; i += 1)
    o = t[i], o.start > a && n.push({ start: a, end: o.start }), o.end > a && (a = o.end);
  return a < e.end && n.push({ start: a, end: e.end }), n;
}
function Q1(t, e) {
  return t.start.valueOf() - e.start.valueOf();
}
function Ft(t, e) {
  let { start: n, end: a } = t, i = null;
  return e.start !== null && (n === null ? n = e.start : n = new Date(Math.max(n.valueOf(), e.start.valueOf()))), e.end != null && (a === null ? a = e.end : a = new Date(Math.min(a.valueOf(), e.end.valueOf()))), (n === null || a === null || n < a) && (i = { start: n, end: a }), i;
}
function Z1(t, e) {
  return (t.start === null ? null : t.start.valueOf()) === (e.start === null ? null : e.start.valueOf()) && (t.end === null ? null : t.end.valueOf()) === (e.end === null ? null : e.end.valueOf());
}
function Ka(t, e) {
  return (t.end === null || e.start === null || t.end > e.start) && (t.start === null || e.end === null || t.start < e.end);
}
function Vn(t, e) {
  return (t.start === null || e.start !== null && e.start >= t.start) && (t.end === null || e.end !== null && e.end <= t.end);
}
function lt(t, e) {
  return (t.start === null || e >= t.start) && (t.end === null || e < t.end);
}
function J1(t, e) {
  return e.start != null && t < e.start ? e.start : e.end != null && t >= e.end ? new Date(e.end.valueOf() - 1) : t;
}
function Ur(t) {
  let e = Math.floor(Vt(t.start, t.end)) || 1, n = Ne(t.start), a = ze(n, e);
  return { start: n, end: a };
}
function Wr(t, e = ke(0)) {
  let n = null, a = null;
  if (t.end) {
    a = Ne(t.end);
    let i = t.end.valueOf() - a.valueOf();
    i && i >= Jt(e) && (a = ze(a, 1));
  }
  return t.start && (n = Ne(t.start), a && a <= n && (a = ze(n, 1))), { start: n, end: a };
}
function It(t, e, n, a) {
  return a === "year" ? ke(n.diffWholeYears(t, e), "year") : a === "month" ? ke(n.diffWholeMonths(t, e), "month") : o1(t, e);
}
class Yr {
  constructor(e) {
    this.props = e, this.initHiddenDays();
  }
  /* Date Range Computation
  ------------------------------------------------------------------------------------------------------------------*/
  // Builds a structure with info about what the dates/ranges will be for the "prev" view.
  buildPrev(e, n, a) {
    let { dateEnv: i } = this.props, o = i.subtract(
      i.startOf(n, e.currentRangeUnit),
      // important for start-of-month
      e.dateIncrement
    );
    return this.build(o, -1, a);
  }
  // Builds a structure with info about what the dates/ranges will be for the "next" view.
  buildNext(e, n, a) {
    let { dateEnv: i } = this.props, o = i.add(
      i.startOf(n, e.currentRangeUnit),
      // important for start-of-month
      e.dateIncrement
    );
    return this.build(o, 1, a);
  }
  // Builds a structure holding dates/ranges for rendering around the given date.
  // Optional direction param indicates whether the date is being incremented/decremented
  // from its previous value. decremented = -1, incremented = 1 (default).
  build(e, n, a = !0) {
    let { props: i } = this, o, r, s, u, d, m;
    return o = this.buildValidRange(), o = this.trimHiddenDays(o), a && (e = J1(e, o)), r = this.buildCurrentRangeInfo(e, n), s = /^(year|month|week|day)$/.test(r.unit), u = this.buildRenderRange(this.trimHiddenDays(r.range), r.unit, s), u = this.trimHiddenDays(u), d = u, i.showNonCurrentDates || (d = Ft(d, r.range)), d = this.adjustActiveRange(d), d = Ft(d, o), m = Ka(r.range, o), lt(u, e) || (e = u.start), {
      currentDate: e,
      // constraint for where prev/next operations can go and where events can be dragged/resized to.
      // an object with optional start and end properties.
      validRange: o,
      // range the view is formally responsible for.
      // for example, a month view might have 1st-31st, excluding padded dates
      currentRange: r.range,
      // name of largest unit being displayed, like "month" or "week"
      currentRangeUnit: r.unit,
      isRangeAllDay: s,
      // dates that display events and accept drag-n-drop
      // will be `null` if no dates accept events
      activeRange: d,
      // date range with a rendered skeleton
      // includes not-active days that need some sort of DOM
      renderRange: u,
      // Duration object that denotes the first visible time of any given day
      slotMinTime: i.slotMinTime,
      // Duration object that denotes the exclusive visible end time of any given day
      slotMaxTime: i.slotMaxTime,
      isValid: m,
      // how far the current date will move for a prev/next operation
      dateIncrement: this.buildDateIncrement(r.duration)
      // pass a fallback (might be null) ^
    };
  }
  // Builds an object with optional start/end properties.
  // Indicates the minimum/maximum dates to display.
  // not responsible for trimming hidden days.
  buildValidRange() {
    let e = this.props.validRangeInput, n = typeof e == "function" ? e.call(this.props.calendarApi, this.props.dateEnv.toDate(this.props.nowManager.getDateMarker())) : e;
    return this.refineRange(n) || { start: null, end: null };
  }
  // Builds a structure with info about the "current" range, the range that is
  // highlighted as being the current month for example.
  // See build() for a description of `direction`.
  // Guaranteed to have `range` and `unit` properties. `duration` is optional.
  buildCurrentRangeInfo(e, n) {
    let { props: a } = this, i = null, o = null, r = null, s;
    return a.duration ? (i = a.duration, o = a.durationUnit, r = this.buildRangeFromDuration(e, n, i, o)) : (s = this.props.dayCount) ? (o = "day", r = this.buildRangeFromDayCount(e, n, s)) : (r = this.buildCustomVisibleRange(e)) ? o = a.dateEnv.greatestWholeUnit(r.start, r.end).unit : (i = this.getFallbackDuration(), o = ya(i).unit, r = this.buildRangeFromDuration(e, n, i, o)), { duration: i, unit: o, range: r };
  }
  getFallbackDuration() {
    return ke({ day: 1 });
  }
  // Returns a new activeRange to have time values (un-ambiguate)
  // slotMinTime or slotMaxTime causes the range to expand.
  adjustActiveRange(e) {
    let { dateEnv: n, usesMinMaxTime: a, slotMinTime: i, slotMaxTime: o } = this.props, { start: r, end: s } = e;
    return a && (Rt(i) < 0 && (r = Ne(r), r = n.add(r, i)), Rt(o) > 1 && (s = Ne(s), s = ze(s, -1), s = n.add(s, o))), { start: r, end: s };
  }
  // Builds the "current" range when it is specified as an explicit duration.
  // `unit` is the already-computed greatestDurationDenominator unit of duration.
  buildRangeFromDuration(e, n, a, i) {
    let { dateEnv: o, dateAlignment: r } = this.props, s, u, d;
    if (!r) {
      let { dateIncrement: v } = this.props;
      v && Jt(v) < Jt(a) ? r = ya(v).unit : r = i;
    }
    Rt(a) <= 1 && this.isHiddenDay(s) && (s = this.skipHiddenDays(s, n), s = Ne(s));
    function m() {
      s = o.startOf(e, r), u = o.add(s, a), d = { start: s, end: u };
    }
    return m(), this.trimHiddenDays(d) || (e = this.skipHiddenDays(e, n), m()), d;
  }
  // Builds the "current" range when a dayCount is specified.
  buildRangeFromDayCount(e, n, a) {
    let { dateEnv: i, dateAlignment: o } = this.props, r = 0, s = e, u;
    o && (s = i.startOf(s, o)), s = Ne(s), s = this.skipHiddenDays(s, n), u = s;
    do
      u = ze(u, 1), this.isHiddenDay(u) || (r += 1);
    while (r < a);
    return { start: s, end: u };
  }
  // Builds a normalized range object for the "visible" range,
  // which is a way to define the currentRange and activeRange at the same time.
  buildCustomVisibleRange(e) {
    let { props: n } = this, a = n.visibleRangeInput, i = typeof a == "function" ? a.call(n.calendarApi, n.dateEnv.toDate(e)) : a, o = this.refineRange(i);
    return o && (o.start == null || o.end == null) ? null : o;
  }
  // Computes the range that will represent the element/cells for *rendering*,
  // but which may have voided days/times.
  // not responsible for trimming hidden days.
  buildRenderRange(e, n, a) {
    return e;
  }
  // Compute the duration value that should be added/substracted to the current date
  // when a prev/next operation happens.
  buildDateIncrement(e) {
    let { dateIncrement: n } = this.props, a;
    return n || ((a = this.props.dateAlignment) ? ke(1, a) : e || ke({ days: 1 }));
  }
  refineRange(e) {
    if (e) {
      let n = K1(e, this.props.dateEnv);
      return n && (n = Wr(n)), n;
    }
    return null;
  }
  /* Hidden Days
  ------------------------------------------------------------------------------------------------------------------*/
  // Initializes internal variables related to calculating hidden days-of-week
  initHiddenDays() {
    let e = this.props.hiddenDays || [], n = [], a = 0, i;
    for (this.props.weekends === !1 && e.push(0, 6), i = 0; i < 7; i += 1)
      (n[i] = e.indexOf(i) !== -1) || (a += 1);
    if (!a)
      throw new Error("invalid hiddenDays");
    this.isHiddenDayHash = n;
  }
  // Remove days from the beginning and end of the range that are computed as hidden.
  // If the whole range is trimmed off, returns null
  trimHiddenDays(e) {
    let { start: n, end: a } = e;
    return n && (n = this.skipHiddenDays(n)), a && (a = this.skipHiddenDays(a, -1, !0)), n == null || a == null || n < a ? { start: n, end: a } : null;
  }
  // Is the current day hidden?
  // `day` is a day-of-week index (0-6), or a Date (used for UTC)
  isHiddenDay(e) {
    return e instanceof Date && (e = e.getUTCDay()), this.isHiddenDayHash[e];
  }
  // Incrementing the current day until it is no longer a hidden day, returning a copy.
  // DOES NOT CONSIDER validRange!
  // If the initial value of `date` is not a hidden day, don't do anything.
  // Pass `isExclusive` as `true` if you are dealing with an end date.
  // `inc` defaults to `1` (increment one day forward each time)
  skipHiddenDays(e, n = 1, a = !1) {
    for (; this.isHiddenDayHash[(e.getUTCDay() + (a ? n : 0) + 7) % 7]; )
      e = ze(e, n);
    return e;
  }
}
function Qa(t, e, n, a) {
  return {
    instanceId: wt(),
    defId: t,
    range: e,
    forcedStartTzo: n ?? null,
    forcedEndTzo: a ?? null
  };
}
function X1(t, e, n, a) {
  for (let i = 0; i < a.length; i += 1) {
    let o = a[i].parse(t, n);
    if (o) {
      let { allDay: r } = t;
      return r == null && (r = e, r == null && (r = o.allDayGuess, r == null && (r = !1))), {
        allDay: r,
        duration: o.duration,
        typeData: o.typeData,
        typeId: i
      };
    }
  }
  return null;
}
function Ct(t, e, n) {
  let { dateEnv: a, pluginHooks: i, options: o } = n, { defs: r, instances: s } = t;
  s = _t(s, (u) => !r[u.defId].recurringDef);
  for (let u in r) {
    let d = r[u];
    if (d.recurringDef) {
      let { duration: m } = d.recurringDef;
      m || (m = d.allDay ? o.defaultAllDayEventDuration : o.defaultTimedEventDuration);
      let v = e_(d, m, e, a, i.recurringTypes);
      for (let p of v) {
        let h = Qa(u, {
          start: p,
          end: a.add(p, m)
        });
        s[h.instanceId] = h;
      }
    }
  }
  return { defs: r, instances: s };
}
function e_(t, e, n, a, i) {
  let r = i[t.recurringDef.typeId].expand(t.recurringDef.typeData, {
    start: a.subtract(n.start, e),
    end: n.end
  }, a);
  return t.allDay && (r = r.map(Ne)), r;
}
const bn = {
  id: String,
  groupId: String,
  title: String,
  url: String,
  interactive: Boolean
}, Gr = {
  start: G,
  end: G,
  date: G,
  allDay: Boolean
}, t_ = Object.assign(Object.assign(Object.assign({}, bn), Gr), { extendedProps: G });
function qr(t, e, n, a, i = Za(n), o, r) {
  let { refined: s, extra: u } = Kr(t, n, i), d = a_(e, n), m = X1(s, d, n.dateEnv, n.pluginHooks.recurringTypes);
  if (m) {
    let p = _a(s, u, e ? e.sourceId : "", m.allDay, !!m.duration, n, o);
    return p.recurringDef = {
      typeId: m.typeId,
      typeData: m.typeData,
      duration: m.duration
    }, { def: p, instance: null };
  }
  let v = n_(s, d, n, a);
  if (v) {
    let p = _a(s, u, e ? e.sourceId : "", v.allDay, v.hasEnd, n, o), h = Qa(p.defId, v.range, v.forcedStartTzo, v.forcedEndTzo);
    return r && p.publicId && r[p.publicId] && (h.instanceId = r[p.publicId]), { def: p, instance: h };
  }
  return null;
}
function Kr(t, e, n = Za(e)) {
  return Wa(t, n);
}
function Za(t) {
  return Object.assign(Object.assign(Object.assign({}, In), t_), t.pluginHooks.eventRefiners);
}
function _a(t, e, n, a, i, o, r) {
  let s = {
    title: t.title || "",
    groupId: t.groupId || "",
    publicId: t.id || "",
    url: t.url || "",
    recurringDef: null,
    defId: (r && t.id ? r[t.id] : "") || wt(),
    sourceId: n,
    allDay: a,
    hasEnd: i,
    interactive: t.interactive,
    ui: On(t, o),
    extendedProps: Object.assign(Object.assign({}, t.extendedProps || {}), e)
  };
  for (let u of o.pluginHooks.eventDefMemberAdders)
    Object.assign(s, u(t));
  return Object.freeze(s.ui.classNames), Object.freeze(s.extendedProps), s;
}
function n_(t, e, n, a) {
  let { allDay: i } = t, o, r = null, s = !1, u, d = null, m = t.start != null ? t.start : t.date;
  if (o = n.dateEnv.createMarkerMeta(m), o)
    r = o.marker;
  else if (!a)
    return null;
  return t.end != null && (u = n.dateEnv.createMarkerMeta(t.end)), i == null && (e != null ? i = e : i = (!o || o.isTimeUnspecified) && (!u || u.isTimeUnspecified)), i && r && (r = Ne(r)), u && (d = u.marker, i && (d = Ne(d)), r && d <= r && (d = null)), d ? s = !0 : a || (s = n.options.forceEventDuration || !1, d = n.dateEnv.add(r, i ? n.options.defaultAllDayEventDuration : n.options.defaultTimedEventDuration)), {
    allDay: i,
    hasEnd: s,
    range: { start: r, end: d },
    forcedStartTzo: o ? o.forcedTzo : null,
    forcedEndTzo: u ? u.forcedTzo : null
  };
}
function a_(t, e) {
  let n = null;
  return t && (n = t.defaultAllDay), n == null && (n = e.options.defaultAllDay), n;
}
function Xt(t, e, n, a, i, o) {
  let r = Ke(), s = Za(n);
  for (let u of t) {
    let d = qr(u, e, n, a, s, i, o);
    d && Ca(d, r);
  }
  return r;
}
function Ca(t, e = Ke()) {
  return e.defs[t.def.defId] = t.def, t.instance && (e.instances[t.instance.instanceId] = t.instance), e;
}
function Ja(t, e) {
  let n = t.instances[e];
  if (n) {
    let a = t.defs[n.defId], i = Hn(t, (o) => i_(a, o));
    return i.defs[a.defId] = a, i.instances[n.instanceId] = n, i;
  }
  return Ke();
}
function i_(t, e) {
  return !!(t.groupId && t.groupId === e.groupId);
}
function Ke() {
  return { defs: {}, instances: {} };
}
function Xa(t, e) {
  return {
    defs: Object.assign(Object.assign({}, t.defs), e.defs),
    instances: Object.assign(Object.assign({}, t.instances), e.instances)
  };
}
function Hn(t, e) {
  let n = _t(t.defs, e), a = _t(t.instances, (i) => n[i.defId]);
  return { defs: n, instances: a };
}
function o_(t, e) {
  let { defs: n, instances: a } = t, i = {}, o = {};
  for (let r in n)
    e.defs[r] || (i[r] = n[r]);
  for (let r in a)
    !e.instances[r] && // not explicitly excluded
    i[a[r].defId] && (o[r] = a[r]);
  return {
    defs: i,
    instances: o
  };
}
function r_(t, e) {
  return Array.isArray(t) ? Xt(t, null, e, !0) : typeof t == "object" && t ? Xt([t], null, e, !0) : t != null ? String(t) : null;
}
function ao(t) {
  return Array.isArray(t) ? t : typeof t == "string" ? t.split(/\s+/) : [];
}
const In = {
  display: String,
  editable: Boolean,
  startEditable: Boolean,
  durationEditable: Boolean,
  constraint: G,
  overlap: G,
  allow: G,
  className: ao,
  classNames: ao,
  color: String,
  backgroundColor: String,
  borderColor: String,
  textColor: String
}, s_ = {
  display: null,
  startEditable: null,
  durationEditable: null,
  constraints: [],
  overlap: null,
  allows: [],
  backgroundColor: "",
  borderColor: "",
  textColor: "",
  classNames: []
};
function On(t, e) {
  let n = r_(t.constraint, e);
  return {
    display: t.display || null,
    startEditable: t.startEditable != null ? t.startEditable : t.editable,
    durationEditable: t.durationEditable != null ? t.durationEditable : t.editable,
    constraints: n != null ? [n] : [],
    overlap: t.overlap != null ? t.overlap : null,
    allows: t.allow != null ? [t.allow] : [],
    backgroundColor: t.backgroundColor || t.color || "",
    borderColor: t.borderColor || t.color || "",
    textColor: t.textColor || "",
    classNames: (t.className || []).concat(t.classNames || [])
    // join singular and plural
  };
}
function l_(t) {
  return t.reduce(u_, s_);
}
function u_(t, e) {
  return {
    display: e.display != null ? e.display : t.display,
    startEditable: e.startEditable != null ? e.startEditable : t.startEditable,
    durationEditable: e.durationEditable != null ? e.durationEditable : t.durationEditable,
    constraints: t.constraints.concat(e.constraints),
    overlap: typeof e.overlap == "boolean" ? e.overlap : t.overlap,
    allows: t.allows.concat(e.allows),
    backgroundColor: e.backgroundColor || t.backgroundColor,
    borderColor: e.borderColor || t.borderColor,
    textColor: e.textColor || t.textColor,
    classNames: t.classNames.concat(e.classNames)
  };
}
const c_ = {
  id: String,
  defaultAllDay: Boolean,
  url: String,
  format: String,
  events: G,
  eventDataTransform: G,
  // for any network-related sources
  success: G,
  failure: G
};
function Qr(t, e, n = Zr(e)) {
  let a;
  if (typeof t == "string" ? a = { url: t } : typeof t == "function" || Array.isArray(t) ? a = { events: t } : typeof t == "object" && t && (a = t), a) {
    let { refined: i, extra: o } = Wa(a, n), r = d_(i, e);
    if (r)
      return {
        _raw: t,
        isFetching: !1,
        latestFetchId: "",
        fetchRange: null,
        defaultAllDay: i.defaultAllDay,
        eventDataTransform: i.eventDataTransform,
        success: i.success,
        failure: i.failure,
        publicId: i.id || "",
        sourceId: wt(),
        sourceDefId: r.sourceDefId,
        meta: r.meta,
        ui: On(i, e),
        extendedProps: o
      };
  }
  return null;
}
function Zr(t) {
  return Object.assign(Object.assign(Object.assign({}, In), c_), t.pluginHooks.eventSourceRefiners);
}
function d_(t, e) {
  let n = e.pluginHooks.eventSourceDefs;
  for (let a = n.length - 1; a >= 0; a -= 1) {
    let o = n[a].parseMeta(t);
    if (o)
      return { sourceDefId: a, meta: o };
  }
  return null;
}
function f_(t, e, n, a, i) {
  switch (e.type) {
    case "RECEIVE_EVENTS":
      return m_(t, n[e.sourceId], e.fetchId, e.fetchRange, e.rawEvents, i);
    case "RESET_RAW_EVENTS":
      return h_(t, n[e.sourceId], e.rawEvents, a.activeRange, i);
    case "ADD_EVENTS":
      return v_(
        t,
        e.eventStore,
        // new ones
        a ? a.activeRange : null,
        i
      );
    case "RESET_EVENTS":
      return e.eventStore;
    case "MERGE_EVENTS":
      return Xa(t, e.eventStore);
    case "PREV":
    // TODO: how do we track all actions that affect dateProfile :(
    case "NEXT":
    case "CHANGE_DATE":
    case "CHANGE_VIEW_TYPE":
      return a ? Ct(t, a.activeRange, i) : t;
    case "REMOVE_EVENTS":
      return o_(t, e.eventStore);
    case "REMOVE_EVENT_SOURCE":
      return Xr(t, e.sourceId);
    case "REMOVE_ALL_EVENT_SOURCES":
      return Hn(t, (o) => !o.sourceId);
    case "REMOVE_ALL_EVENTS":
      return Ke();
    default:
      return t;
  }
}
function m_(t, e, n, a, i, o) {
  if (e && // not already removed
  n === e.latestFetchId) {
    let r = Xt(Jr(i, e, o), e, o);
    return a && (r = Ct(r, a, o)), Xa(Xr(t, e.sourceId), r);
  }
  return t;
}
function h_(t, e, n, a, i) {
  const { defIdMap: o, instanceIdMap: r } = g_(t);
  let s = Xt(Jr(n, e, i), e, i, !1, o, r);
  return Ct(s, a, i);
}
function Jr(t, e, n) {
  let a = n.options.eventDataTransform, i = e ? e.eventDataTransform : null;
  return i && (t = io(t, i)), a && (t = io(t, a)), t;
}
function io(t, e) {
  let n;
  if (!e)
    n = t;
  else {
    n = [];
    for (let a of t) {
      let i = e(a);
      i ? n.push(i) : i == null && n.push(a);
    }
  }
  return n;
}
function v_(t, e, n, a) {
  return n && (e = Ct(e, n, a)), Xa(t, e);
}
function oo(t, e, n) {
  let { defs: a } = t, i = At(t.instances, (o) => a[o.defId].allDay ? o : Object.assign(Object.assign({}, o), { range: {
    start: n.createMarker(e.toDate(o.range.start, o.forcedStartTzo)),
    end: n.createMarker(e.toDate(o.range.end, o.forcedEndTzo))
  }, forcedStartTzo: n.canComputeOffset ? null : o.forcedStartTzo, forcedEndTzo: n.canComputeOffset ? null : o.forcedEndTzo }));
  return { defs: a, instances: i };
}
function Xr(t, e) {
  return Hn(t, (n) => n.sourceId !== e);
}
function p_(t, e) {
  return {
    defs: t.defs,
    instances: _t(t.instances, (n) => !e[n.instanceId])
  };
}
function g_(t) {
  const { defs: e, instances: n } = t, a = {}, i = {};
  for (let o in e) {
    const r = e[o], { publicId: s } = r;
    s && (a[s] = o);
  }
  for (let o in n) {
    const r = n[o], s = e[r.defId], { publicId: u } = s;
    u && (i[u] = o);
  }
  return { defIdMap: a, instanceIdMap: i };
}
class jn {
  constructor() {
    this.handlers = {}, this.thisContext = null;
  }
  setThisContext(e) {
    this.thisContext = e;
  }
  setOptions(e) {
    this.options = e;
  }
  on(e, n) {
    y_(this.handlers, e, n);
  }
  off(e, n) {
    b_(this.handlers, e, n);
  }
  trigger(e, ...n) {
    let a = this.handlers[e] || [], i = this.options && this.options[e], o = [].concat(i || [], a);
    for (let r of o)
      r.apply(this.thisContext, n);
  }
  hasHandlers(e) {
    return !!(this.handlers[e] && this.handlers[e].length || this.options && this.options[e]);
  }
}
function y_(t, e, n) {
  (t[e] || (t[e] = [])).push(n);
}
function b_(t, e, n) {
  n ? t[e] && (t[e] = t[e].filter((a) => a !== n)) : delete t[e];
}
const __ = {
  startTime: "09:00",
  endTime: "17:00",
  daysOfWeek: [1, 2, 3, 4, 5],
  display: "inverse-background",
  classNames: "fc-non-business",
  groupId: "_businessHours"
  // so multiple defs get grouped
};
function C_(t, e) {
  return Xt(w_(t), null, e);
}
function w_(t) {
  let e;
  return t === !0 ? e = [{}] : Array.isArray(t) ? e = t.filter((n) => n.daysOfWeek) : typeof t == "object" && t ? e = [t] : e = [], e = e.map((n) => Object.assign(Object.assign({}, __), n)), e;
}
function es(t, e, n) {
  n.emitter.trigger("select", Object.assign(Object.assign({}, ei(t, n)), { jsEvent: e ? e.origEvent : null, view: n.viewApi || n.calendarApi.view }));
}
function A_(t, e) {
  e.emitter.trigger("unselect", {
    jsEvent: t ? t.origEvent : null,
    view: e.viewApi || e.calendarApi.view
  });
}
function ei(t, e) {
  let n = {};
  for (let a of e.pluginHooks.dateSpanTransforms)
    Object.assign(n, a(t, e));
  return Object.assign(n, B_(t, e.dateEnv)), n;
}
function ro(t, e, n) {
  let { dateEnv: a, options: i } = n, o = e;
  return t ? (o = Ne(o), o = a.add(o, i.defaultAllDayEventDuration)) : o = a.add(o, i.defaultTimedEventDuration), o;
}
function ti(t, e, n, a) {
  let i = Rn(t.defs, e), o = Ke();
  for (let r in t.defs) {
    let s = t.defs[r];
    o.defs[r] = k_(s, i[r], n, a);
  }
  for (let r in t.instances) {
    let s = t.instances[r], u = o.defs[s.defId];
    o.instances[r] = S_(s, u, i[s.defId], n, a);
  }
  return o;
}
function k_(t, e, n, a) {
  let i = n.standardProps || {};
  i.hasEnd == null && e.durationEditable && (n.startDelta || n.endDelta) && (i.hasEnd = !0);
  let o = Object.assign(Object.assign(Object.assign({}, t), i), { ui: Object.assign(Object.assign({}, t.ui), i.ui) });
  n.extendedProps && (o.extendedProps = Object.assign(Object.assign({}, o.extendedProps), n.extendedProps));
  for (let r of a.pluginHooks.eventDefMutationAppliers)
    r(o, n, a);
  return !o.hasEnd && a.options.forceEventDuration && (o.hasEnd = !0), o;
}
function S_(t, e, n, a, i) {
  let { dateEnv: o } = i, r = a.standardProps && a.standardProps.allDay === !0, s = a.standardProps && a.standardProps.hasEnd === !1, u = Object.assign({}, t);
  return r && (u.range = Ur(u.range)), a.datesDelta && n.startEditable && (u.range = {
    start: o.add(u.range.start, a.datesDelta),
    end: o.add(u.range.end, a.datesDelta)
  }), a.startDelta && n.durationEditable && (u.range = {
    start: o.add(u.range.start, a.startDelta),
    end: u.range.end
  }), a.endDelta && n.durationEditable && (u.range = {
    start: u.range.start,
    end: o.add(u.range.end, a.endDelta)
  }), s && (u.range = {
    start: u.range.start,
    end: ro(e.allDay, u.range.start, i)
  }), e.allDay && (u.range = {
    start: Ne(u.range.start),
    end: Ne(u.range.end)
  }), u.range.end < u.range.start && (u.range.end = ro(e.allDay, u.range.start, i)), u;
}
class Dt {
  constructor(e, n) {
    this.context = e, this.internalEventSource = n;
  }
  remove() {
    this.context.dispatch({
      type: "REMOVE_EVENT_SOURCE",
      sourceId: this.internalEventSource.sourceId
    });
  }
  refetch() {
    this.context.dispatch({
      type: "FETCH_EVENT_SOURCES",
      sourceIds: [this.internalEventSource.sourceId],
      isRefetch: !0
    });
  }
  get id() {
    return this.internalEventSource.publicId;
  }
  get url() {
    return this.internalEventSource.meta.url;
  }
  get format() {
    return this.internalEventSource.meta.format;
  }
}
class De {
  // instance will be null if expressing a recurring event that has no current instances,
  // OR if trying to validate an incoming external event that has no dates assigned
  constructor(e, n, a) {
    this._context = e, this._def = n, this._instance = a || null;
  }
  /*
  TODO: make event struct more responsible for this
  */
  setProp(e, n) {
    if (e in Gr)
      console.warn("Could not set date-related prop 'name'. Use one of the date-related methods instead.");
    else if (e === "id")
      n = bn[e](n), this.mutate({
        standardProps: { publicId: n }
        // hardcoded internal name
      });
    else if (e in bn)
      n = bn[e](n), this.mutate({
        standardProps: { [e]: n }
      });
    else if (e in In) {
      let a = In[e](n);
      e === "color" ? a = { backgroundColor: n, borderColor: n } : e === "editable" ? a = { startEditable: n, durationEditable: n } : a = { [e]: n }, this.mutate({
        standardProps: { ui: a }
      });
    } else
      console.warn(`Could not set prop '${e}'. Use setExtendedProp instead.`);
  }
  setExtendedProp(e, n) {
    this.mutate({
      extendedProps: { [e]: n }
    });
  }
  setStart(e, n = {}) {
    let { dateEnv: a } = this._context, i = a.createMarker(e);
    if (i && this._instance) {
      let o = this._instance.range, r = It(o.start, i, a, n.granularity);
      n.maintainDuration ? this.mutate({ datesDelta: r }) : this.mutate({ startDelta: r });
    }
  }
  setEnd(e, n = {}) {
    let { dateEnv: a } = this._context, i;
    if (!(e != null && (i = a.createMarker(e), !i)) && this._instance)
      if (i) {
        let o = It(this._instance.range.end, i, a, n.granularity);
        this.mutate({ endDelta: o });
      } else
        this.mutate({ standardProps: { hasEnd: !1 } });
  }
  setDates(e, n, a = {}) {
    let { dateEnv: i } = this._context, o = { allDay: a.allDay }, r = i.createMarker(e), s;
    if (r && !(n != null && (s = i.createMarker(n), !s)) && this._instance) {
      let u = this._instance.range;
      a.allDay === !0 && (u = Ur(u));
      let d = It(u.start, r, i, a.granularity);
      if (s) {
        let m = It(u.end, s, i, a.granularity);
        Q0(d, m) ? this.mutate({ datesDelta: d, standardProps: o }) : this.mutate({ startDelta: d, endDelta: m, standardProps: o });
      } else
        o.hasEnd = !1, this.mutate({ datesDelta: d, standardProps: o });
    }
  }
  moveStart(e) {
    let n = ke(e);
    n && this.mutate({ startDelta: n });
  }
  moveEnd(e) {
    let n = ke(e);
    n && this.mutate({ endDelta: n });
  }
  moveDates(e) {
    let n = ke(e);
    n && this.mutate({ datesDelta: n });
  }
  setAllDay(e, n = {}) {
    let a = { allDay: e }, { maintainDuration: i } = n;
    i == null && (i = this._context.options.allDayMaintainDuration), this._def.allDay !== e && (a.hasEnd = i), this.mutate({ standardProps: a });
  }
  formatRange(e) {
    let { dateEnv: n } = this._context, a = this._instance, i = Be(e);
    return this._def.hasEnd ? n.formatRange(a.range.start, a.range.end, i, {
      forcedStartTzo: a.forcedStartTzo,
      forcedEndTzo: a.forcedEndTzo
    }) : n.format(a.range.start, i, {
      forcedTzo: a.forcedStartTzo
    });
  }
  mutate(e) {
    let n = this._instance;
    if (n) {
      let a = this._def, i = this._context, { eventStore: o } = i.getCurrentData(), r = Ja(o, n.instanceId);
      r = ti(r, {
        "": {
          display: "",
          startEditable: !0,
          durationEditable: !0,
          constraints: [],
          overlap: null,
          allows: [],
          backgroundColor: "",
          borderColor: "",
          textColor: "",
          classNames: []
        }
      }, e, i);
      let u = new De(i, a, n);
      this._def = r.defs[a.defId], this._instance = r.instances[n.instanceId], i.dispatch({
        type: "MERGE_EVENTS",
        eventStore: r
      }), i.emitter.trigger("eventChange", {
        oldEvent: u,
        event: this,
        relatedEvents: bt(r, i, n),
        revert() {
          i.dispatch({
            type: "RESET_EVENTS",
            eventStore: o
            // the ORIGINAL store
          });
        }
      });
    }
  }
  remove() {
    let e = this._context, n = ts(this);
    e.dispatch({
      type: "REMOVE_EVENTS",
      eventStore: n
    }), e.emitter.trigger("eventRemove", {
      event: this,
      relatedEvents: [],
      revert() {
        e.dispatch({
          type: "MERGE_EVENTS",
          eventStore: n
        });
      }
    });
  }
  get source() {
    let { sourceId: e } = this._def;
    return e ? new Dt(this._context, this._context.getCurrentData().eventSources[e]) : null;
  }
  get start() {
    return this._instance ? this._context.dateEnv.toDate(this._instance.range.start) : null;
  }
  get end() {
    return this._instance && this._def.hasEnd ? this._context.dateEnv.toDate(this._instance.range.end) : null;
  }
  get startStr() {
    let e = this._instance;
    return e ? this._context.dateEnv.formatIso(e.range.start, {
      omitTime: this._def.allDay,
      forcedTzo: e.forcedStartTzo
    }) : "";
  }
  get endStr() {
    let e = this._instance;
    return e && this._def.hasEnd ? this._context.dateEnv.formatIso(e.range.end, {
      omitTime: this._def.allDay,
      forcedTzo: e.forcedEndTzo
    }) : "";
  }
  // computable props that all access the def
  // TODO: find a TypeScript-compatible way to do this at scale
  get id() {
    return this._def.publicId;
  }
  get groupId() {
    return this._def.groupId;
  }
  get allDay() {
    return this._def.allDay;
  }
  get title() {
    return this._def.title;
  }
  get url() {
    return this._def.url;
  }
  get display() {
    return this._def.ui.display || "auto";
  }
  // bad. just normalize the type earlier
  get startEditable() {
    return this._def.ui.startEditable;
  }
  get durationEditable() {
    return this._def.ui.durationEditable;
  }
  get constraint() {
    return this._def.ui.constraints[0] || null;
  }
  get overlap() {
    return this._def.ui.overlap;
  }
  get allow() {
    return this._def.ui.allows[0] || null;
  }
  get backgroundColor() {
    return this._def.ui.backgroundColor;
  }
  get borderColor() {
    return this._def.ui.borderColor;
  }
  get textColor() {
    return this._def.ui.textColor;
  }
  // NOTE: user can't modify these because Object.freeze was called in event-def parsing
  get classNames() {
    return this._def.ui.classNames;
  }
  get extendedProps() {
    return this._def.extendedProps;
  }
  toPlainObject(e = {}) {
    let n = this._def, { ui: a } = n, { startStr: i, endStr: o } = this, r = {
      allDay: n.allDay
    };
    return n.title && (r.title = n.title), i && (r.start = i), o && (r.end = o), n.publicId && (r.id = n.publicId), n.groupId && (r.groupId = n.groupId), n.url && (r.url = n.url), a.display && a.display !== "auto" && (r.display = a.display), e.collapseColor && a.backgroundColor && a.backgroundColor === a.borderColor ? r.color = a.backgroundColor : (a.backgroundColor && (r.backgroundColor = a.backgroundColor), a.borderColor && (r.borderColor = a.borderColor)), a.textColor && (r.textColor = a.textColor), a.classNames.length && (r.classNames = a.classNames), Object.keys(n.extendedProps).length && (e.collapseExtendedProps ? Object.assign(r, n.extendedProps) : r.extendedProps = n.extendedProps), r;
  }
  toJSON() {
    return this.toPlainObject();
  }
}
function ts(t) {
  let e = t._def, n = t._instance;
  return {
    defs: { [e.defId]: e },
    instances: n ? { [n.instanceId]: n } : {}
  };
}
function bt(t, e, n) {
  let { defs: a, instances: i } = t, o = [], r = n ? n.instanceId : "";
  for (let s in i) {
    let u = i[s], d = a[u.defId];
    u.instanceId !== r && o.push(new De(e, d, u));
  }
  return o;
}
function so(t, e, n, a) {
  let i = {}, o = {}, r = {}, s = [], u = [], d = Rn(t.defs, e);
  for (let m in t.defs) {
    let v = t.defs[m];
    d[v.defId].display === "inverse-background" && (v.groupId ? (i[v.groupId] = [], r[v.groupId] || (r[v.groupId] = v)) : o[m] = []);
  }
  for (let m in t.instances) {
    let v = t.instances[m], p = t.defs[v.defId], h = d[p.defId], g = v.range, y = !p.allDay && a ? Wr(g, a) : g, b = Ft(y, n);
    b && (h.display === "inverse-background" ? p.groupId ? i[p.groupId].push(b) : o[v.defId].push(b) : h.display !== "none" && (h.display === "background" ? s : u).push({
      def: p,
      ui: h,
      instance: v,
      range: b,
      isStart: y.start && y.start.valueOf() === b.start.valueOf(),
      isEnd: y.end && y.end.valueOf() === b.end.valueOf()
    }));
  }
  for (let m in i) {
    let v = i[m], p = no(v, n);
    for (let h of p) {
      let g = r[m], y = d[g.defId];
      s.push({
        def: g,
        ui: y,
        instance: null,
        range: h,
        isStart: !1,
        isEnd: !1
      });
    }
  }
  for (let m in o) {
    let v = o[m], p = no(v, n);
    for (let h of p)
      s.push({
        def: t.defs[m],
        ui: d[m],
        instance: null,
        range: h,
        isStart: !1,
        isEnd: !1
      });
  }
  return { bg: s, fg: u };
}
function lo(t, e) {
  t.fcSeg = e;
}
function Bt(t) {
  return t.fcSeg || t.parentNode.fcSeg || // for the harness
  null;
}
function Rn(t, e) {
  return At(t, (n) => ns(n, e));
}
function ns(t, e) {
  let n = [];
  return e[""] && n.push(e[""]), e[t.defId] && n.push(e[t.defId]), n.push(t.ui), l_(n);
}
function T_(t, e) {
  let n = t.map(E_);
  return n.sort((a, i) => j0(a, i, e)), n.map((a) => a._seg);
}
function E_(t) {
  let { eventRange: e } = t, n = e.def, a = e.instance ? e.instance.range : e.range, i = a.start ? a.start.valueOf() : 0, o = a.end ? a.end.valueOf() : 0;
  return Object.assign(Object.assign(Object.assign({}, n.extendedProps), n), {
    id: n.publicId,
    start: i,
    end: o,
    duration: o - i,
    allDay: Number(n.allDay),
    _seg: t
  });
}
function M_(t, e) {
  let { pluginHooks: n } = e, a = n.isDraggableTransformers, { def: i, ui: o } = t.eventRange, r = o.startEditable;
  for (let s of a)
    r = s(r, i, o, e);
  return r;
}
function N_(t, e) {
  return t.isStart && t.eventRange.ui.durationEditable && e.options.eventResizableFromStart;
}
function D_(t, e) {
  return t.isEnd && t.eventRange.ui.durationEditable;
}
function as(t, e, n, a, i, o, r) {
  let { dateEnv: s, options: u } = n, { displayEventTime: d, displayEventEnd: m } = u, v = t.eventRange.def, p = t.eventRange.instance;
  d == null && (d = a !== !1), m == null && (m = i !== !1);
  let h = p.range.start, g = p.range.end, y = t.start || t.eventRange.range.start, b = t.end || t.eventRange.range.end, _ = Ne(h).valueOf() === Ne(y).valueOf(), C = Ne(dt(g, -1)).valueOf() === Ne(dt(b, -1)).valueOf();
  return d && !v.allDay && (_ || C) ? (y = _ ? h : y, b = C ? g : b, m && v.hasEnd ? s.formatRange(y, b, e, {
    forcedStartTzo: p.forcedStartTzo,
    forcedEndTzo: p.forcedEndTzo
  }) : s.format(y, e, {
    forcedTzo: p.forcedStartTzo
    // nooooo, same
  })) : "";
}
function Gt(t, e, n) {
  let a = t.eventRange.range;
  return {
    isPast: a.end <= e.start,
    isFuture: a.start >= e.end,
    isToday: e && lt(e, a.start)
  };
}
function I_(t) {
  let e = ["fc-event"];
  return t.isMirror && e.push("fc-event-mirror"), t.isDraggable && e.push("fc-event-draggable"), (t.isStartResizable || t.isEndResizable) && e.push("fc-event-resizable"), t.isDragging && e.push("fc-event-dragging"), t.isResizing && e.push("fc-event-resizing"), t.isSelected && e.push("fc-event-selected"), t.isStart && e.push("fc-event-start"), t.isEnd && e.push("fc-event-end"), t.isPast && e.push("fc-event-past"), t.isToday && e.push("fc-event-today"), t.isFuture && e.push("fc-event-future"), e;
}
function O_(t) {
  return t.instance ? t.instance.instanceId : `${t.def.defId}:${t.range.start.toISOString()}`;
}
function is(t, e) {
  let { def: n, instance: a } = t.eventRange, { url: i } = n;
  if (i)
    return { href: i };
  let { emitter: o, options: r } = e, { eventInteractive: s } = r;
  return s == null && (s = n.interactive, s == null && (s = !!o.hasHandlers("eventClick"))), s ? Pr((u) => {
    o.trigger("eventClick", {
      el: u.target,
      event: new De(e, n, a),
      jsEvent: u,
      view: e.viewApi
    });
  }) : {};
}
const R_ = {
  start: G,
  end: G,
  allDay: Boolean
};
function $_(t, e, n) {
  let a = x_(t, e), { range: i } = a;
  if (!i.start)
    return null;
  if (!i.end) {
    if (n == null)
      return null;
    i.end = e.add(i.start, n);
  }
  return a;
}
function x_(t, e) {
  let { refined: n, extra: a } = Wa(t, R_), i = n.start ? e.createMarkerMeta(n.start) : null, o = n.end ? e.createMarkerMeta(n.end) : null, { allDay: r } = n;
  return r == null && (r = i && i.isTimeUnspecified && (!o || o.isTimeUnspecified)), Object.assign({ range: {
    start: i ? i.marker : null,
    end: o ? o.marker : null
  }, allDay: r }, a);
}
function P_(t, e) {
  return Z1(t.range, e.range) && t.allDay === e.allDay && F_(t, e);
}
function F_(t, e) {
  for (let n in e)
    if (n !== "range" && n !== "allDay" && t[n] !== e[n])
      return !1;
  for (let n in t)
    if (!(n in e))
      return !1;
  return !0;
}
function B_(t, e) {
  return Object.assign(Object.assign({}, rs(t.range, e, t.allDay)), { allDay: t.allDay });
}
function os(t, e, n) {
  return Object.assign(Object.assign({}, rs(t, e, n)), { timeZone: e.timeZone });
}
function rs(t, e, n) {
  return {
    start: e.toDate(t.start),
    end: e.toDate(t.end),
    startStr: e.formatIso(t.start, { omitTime: n }),
    endStr: e.formatIso(t.end, { omitTime: n })
  };
}
function z_(t, e, n) {
  let a = Kr({ editable: !1 }, n), i = _a(
    a.refined,
    a.extra,
    "",
    // sourceId
    t.allDay,
    !0,
    // hasEnd
    n
  );
  return {
    def: i,
    ui: ns(i, e),
    instance: Qa(i.defId, t.range),
    range: t.range,
    isStart: !0,
    isEnd: !0
  };
}
function L_(t, e, n) {
  let a = !1, i = function(s) {
    a || (a = !0, e(s));
  }, o = function(s) {
    a || (a = !0, n(s));
  }, r = t(i, o);
  r && typeof r.then == "function" && r.then(i, o);
}
class uo extends Error {
  constructor(e, n) {
    super(e), this.response = n;
  }
}
function V_(t, e, n) {
  t = t.toUpperCase();
  const a = {
    method: t
  };
  return t === "GET" ? e += (e.indexOf("?") === -1 ? "?" : "&") + new URLSearchParams(n) : (a.body = new URLSearchParams(n), a.headers = {
    "Content-Type": "application/x-www-form-urlencoded"
  }), fetch(e, a).then((i) => {
    if (i.ok)
      return i.json().then((o) => [o, i], () => {
        throw new uo("Failure parsing JSON", i);
      });
    throw new uo("Request failed", i);
  });
}
let ra;
function ss() {
  return ra == null && (ra = H_()), ra;
}
function H_() {
  if (typeof document > "u")
    return !0;
  let t = document.createElement("div");
  t.style.position = "absolute", t.style.top = "0px", t.style.left = "0px", t.innerHTML = "<table><tr><td><div></div></td></tr></table>", t.querySelector("table").style.height = "100px", t.querySelector("div").style.height = "100%", document.body.appendChild(t);
  let n = t.querySelector("div").offsetHeight > 0;
  return document.body.removeChild(t), n;
}
class j_ extends Ie {
  constructor() {
    super(...arguments), this.state = {
      forPrint: !1
    }, this.handleBeforePrint = () => {
      Dn(() => {
        this.setState({ forPrint: !0 });
      });
    }, this.handleAfterPrint = () => {
      Dn(() => {
        this.setState({ forPrint: !1 });
      });
    };
  }
  render() {
    let { props: e } = this, { options: n } = e, { forPrint: a } = this.state, i = a || n.height === "auto" || n.contentHeight === "auto", o = !i && n.height != null ? n.height : "", r = [
      "fc",
      a ? "fc-media-print" : "fc-media-screen",
      `fc-direction-${n.direction}`,
      e.theme.getClass("root")
    ];
    return ss() || r.push("fc-liquid-hack"), e.children(r, o, i, a);
  }
  componentDidMount() {
    let { emitter: e } = this.props;
    e.on("_beforeprint", this.handleBeforePrint), e.on("_afterprint", this.handleAfterPrint);
  }
  componentWillUnmount() {
    let { emitter: e } = this.props;
    e.off("_beforeprint", this.handleBeforePrint), e.off("_afterprint", this.handleAfterPrint);
  }
}
class Ht {
  constructor(e) {
    this.component = e.component, this.isHitComboAllowed = e.isHitComboAllowed || null;
  }
  destroy() {
  }
}
function U_(t, e) {
  return {
    component: t,
    el: e.el,
    useEventCenter: e.useEventCenter != null ? e.useEventCenter : !0,
    isHitComboAllowed: e.isHitComboAllowed || null
  };
}
function ni(t) {
  return {
    [t.component.uid]: t
  };
}
const wa = {};
class Un extends We {
  constructor(e, n) {
    super(e, n), this.handleRefresh = () => {
      let a = this.computeTiming();
      a.state.nowDate.valueOf() !== this.state.nowDate.valueOf() && this.setState(a.state), this.clearTimeout(), this.setTimeout(a.waitMs);
    }, this.handleVisibilityChange = () => {
      document.hidden || this.handleRefresh();
    }, this.state = this.computeTiming().state;
  }
  render() {
    let { props: e, state: n } = this;
    return e.children(n.nowDate, n.todayRange);
  }
  componentDidMount() {
    this.setTimeout(), this.context.nowManager.addResetListener(this.handleRefresh), document.addEventListener("visibilitychange", this.handleVisibilityChange);
  }
  componentDidUpdate(e) {
    e.unit !== this.props.unit && (this.clearTimeout(), this.setTimeout());
  }
  componentWillUnmount() {
    this.clearTimeout(), this.context.nowManager.removeResetListener(this.handleRefresh), document.removeEventListener("visibilitychange", this.handleVisibilityChange);
  }
  computeTiming() {
    let { props: e, context: n } = this, a = n.nowManager.getDateMarker(), { nowIndicatorSnap: i } = n.options;
    i === "auto" && (i = // large unit?
    /year|month|week|day/.test(e.unit) || // if slotDuration 30 mins for example, would NOT appear to snap (legacy behavior)
    (e.unitValue || 1) === 1);
    let o, r;
    return i ? (o = n.dateEnv.startOf(a, e.unit), r = n.dateEnv.add(o, ke(1, e.unit)).valueOf() - a.valueOf()) : (o = a, r = 1e3 * 60), r = Math.min(1e3 * 60 * 60 * 24, r), {
      state: { nowDate: o, todayRange: W_(o) },
      waitMs: r
    };
  }
  setTimeout(e = this.computeTiming().waitMs) {
    this.timeoutId = setTimeout(() => {
      const n = this.computeTiming();
      this.setState(n.state, () => {
        this.setTimeout(n.waitMs);
      });
    }, e);
  }
  clearTimeout() {
    this.timeoutId && clearTimeout(this.timeoutId);
  }
}
Un.contextType = kt;
function W_(t) {
  let e = Ne(t), n = ze(e, 1);
  return { start: e, end: n };
}
class Y_ {
  getCurrentData() {
    return this.currentDataManager.getCurrentData();
  }
  dispatch(e) {
    this.currentDataManager.dispatch(e);
  }
  get view() {
    return this.getCurrentData().viewApi;
  }
  batchRendering(e) {
    e();
  }
  updateSize() {
    this.trigger("_resize", !0);
  }
  // Options
  // -----------------------------------------------------------------------------------------------------------------
  setOption(e, n) {
    this.dispatch({
      type: "SET_OPTION",
      optionName: e,
      rawOptionValue: n
    });
  }
  getOption(e) {
    return this.currentDataManager.currentCalendarOptionsInput[e];
  }
  getAvailableLocaleCodes() {
    return Object.keys(this.getCurrentData().availableRawLocales);
  }
  // Trigger
  // -----------------------------------------------------------------------------------------------------------------
  on(e, n) {
    let { currentDataManager: a } = this;
    a.currentCalendarOptionsRefiners[e] ? a.emitter.on(e, n) : console.warn(`Unknown listener name '${e}'`);
  }
  off(e, n) {
    this.currentDataManager.emitter.off(e, n);
  }
  // not meant for public use
  trigger(e, ...n) {
    this.currentDataManager.emitter.trigger(e, ...n);
  }
  // View
  // -----------------------------------------------------------------------------------------------------------------
  changeView(e, n) {
    this.batchRendering(() => {
      if (this.unselect(), n)
        if (n.start && n.end)
          this.dispatch({
            type: "CHANGE_VIEW_TYPE",
            viewType: e
          }), this.dispatch({
            type: "SET_OPTION",
            optionName: "visibleRange",
            rawOptionValue: n
          });
        else {
          let { dateEnv: a } = this.getCurrentData();
          this.dispatch({
            type: "CHANGE_VIEW_TYPE",
            viewType: e,
            dateMarker: a.createMarker(n)
          });
        }
      else
        this.dispatch({
          type: "CHANGE_VIEW_TYPE",
          viewType: e
        });
    });
  }
  // Forces navigation to a view for the given date.
  // `viewType` can be a specific view name or a generic one like "week" or "day".
  // needs to change
  zoomTo(e, n) {
    let a = this.getCurrentData(), i;
    n = n || "day", i = a.viewSpecs[n] || this.getUnitViewSpec(n), this.unselect(), i ? this.dispatch({
      type: "CHANGE_VIEW_TYPE",
      viewType: i.type,
      dateMarker: e
    }) : this.dispatch({
      type: "CHANGE_DATE",
      dateMarker: e
    });
  }
  // Given a duration singular unit, like "week" or "day", finds a matching view spec.
  // Preference is given to views that have corresponding buttons.
  getUnitViewSpec(e) {
    let { viewSpecs: n, toolbarConfig: a } = this.getCurrentData(), i = [].concat(a.header ? a.header.viewsWithButtons : [], a.footer ? a.footer.viewsWithButtons : []), o, r;
    for (let s in n)
      i.push(s);
    for (o = 0; o < i.length; o += 1)
      if (r = n[i[o]], r && r.singleUnit === e)
        return r;
    return null;
  }
  // Current Date
  // -----------------------------------------------------------------------------------------------------------------
  prev() {
    this.unselect(), this.dispatch({ type: "PREV" });
  }
  next() {
    this.unselect(), this.dispatch({ type: "NEXT" });
  }
  prevYear() {
    let e = this.getCurrentData();
    this.unselect(), this.dispatch({
      type: "CHANGE_DATE",
      dateMarker: e.dateEnv.addYears(e.currentDate, -1)
    });
  }
  nextYear() {
    let e = this.getCurrentData();
    this.unselect(), this.dispatch({
      type: "CHANGE_DATE",
      dateMarker: e.dateEnv.addYears(e.currentDate, 1)
    });
  }
  today() {
    let e = this.getCurrentData();
    this.unselect(), this.dispatch({
      type: "CHANGE_DATE",
      dateMarker: e.nowManager.getDateMarker()
    });
  }
  gotoDate(e) {
    let n = this.getCurrentData();
    this.unselect(), this.dispatch({
      type: "CHANGE_DATE",
      dateMarker: n.dateEnv.createMarker(e)
    });
  }
  incrementDate(e) {
    let n = this.getCurrentData(), a = ke(e);
    a && (this.unselect(), this.dispatch({
      type: "CHANGE_DATE",
      dateMarker: n.dateEnv.add(n.currentDate, a)
    }));
  }
  getDate() {
    let e = this.getCurrentData();
    return e.dateEnv.toDate(e.currentDate);
  }
  // Date Formatting Utils
  // -----------------------------------------------------------------------------------------------------------------
  formatDate(e, n) {
    let { dateEnv: a } = this.getCurrentData();
    return a.format(a.createMarker(e), Be(n));
  }
  // `settings` is for formatter AND isEndExclusive
  formatRange(e, n, a) {
    let { dateEnv: i } = this.getCurrentData();
    return i.formatRange(i.createMarker(e), i.createMarker(n), Be(a), a);
  }
  formatIso(e, n) {
    let { dateEnv: a } = this.getCurrentData();
    return a.formatIso(a.createMarker(e), { omitTime: n });
  }
  // Date Selection / Event Selection / DayClick
  // -----------------------------------------------------------------------------------------------------------------
  select(e, n) {
    let a;
    n == null ? e.start != null ? a = e : a = {
      start: e,
      end: null
    } : a = {
      start: e,
      end: n
    };
    let i = this.getCurrentData(), o = $_(a, i.dateEnv, ke({ days: 1 }));
    o && (this.dispatch({ type: "SELECT_DATES", selection: o }), es(o, null, i));
  }
  unselect(e) {
    let n = this.getCurrentData();
    n.dateSelection && (this.dispatch({ type: "UNSELECT_DATES" }), A_(e, n));
  }
  // Public Events API
  // -----------------------------------------------------------------------------------------------------------------
  addEvent(e, n) {
    if (e instanceof De) {
      let r = e._def, s = e._instance;
      return this.getCurrentData().eventStore.defs[r.defId] || (this.dispatch({
        type: "ADD_EVENTS",
        eventStore: Ca({ def: r, instance: s })
        // TODO: better util for two args?
      }), this.triggerEventAdd(e)), e;
    }
    let a = this.getCurrentData(), i;
    if (n instanceof Dt)
      i = n.internalEventSource;
    else if (typeof n == "boolean")
      n && ([i] = Ga(a.eventSources));
    else if (n != null) {
      let r = this.getEventSourceById(n);
      if (!r)
        return console.warn(`Could not find an event source with ID "${n}"`), null;
      i = r.internalEventSource;
    }
    let o = qr(e, i, a, !1);
    if (o) {
      let r = new De(a, o.def, o.def.recurringDef ? null : o.instance);
      return this.dispatch({
        type: "ADD_EVENTS",
        eventStore: Ca(o)
      }), this.triggerEventAdd(r), r;
    }
    return null;
  }
  triggerEventAdd(e) {
    let { emitter: n } = this.getCurrentData();
    n.trigger("eventAdd", {
      event: e,
      relatedEvents: [],
      revert: () => {
        this.dispatch({
          type: "REMOVE_EVENTS",
          eventStore: ts(e)
        });
      }
    });
  }
  // TODO: optimize
  getEventById(e) {
    let n = this.getCurrentData(), { defs: a, instances: i } = n.eventStore;
    e = String(e);
    for (let o in a) {
      let r = a[o];
      if (r.publicId === e) {
        if (r.recurringDef)
          return new De(n, r, null);
        for (let s in i) {
          let u = i[s];
          if (u.defId === r.defId)
            return new De(n, r, u);
        }
      }
    }
    return null;
  }
  getEvents() {
    let e = this.getCurrentData();
    return bt(e.eventStore, e);
  }
  removeAllEvents() {
    this.dispatch({ type: "REMOVE_ALL_EVENTS" });
  }
  // Public Event Sources API
  // -----------------------------------------------------------------------------------------------------------------
  getEventSources() {
    let e = this.getCurrentData(), n = e.eventSources, a = [];
    for (let i in n)
      a.push(new Dt(e, n[i]));
    return a;
  }
  getEventSourceById(e) {
    let n = this.getCurrentData(), a = n.eventSources;
    e = String(e);
    for (let i in a)
      if (a[i].publicId === e)
        return new Dt(n, a[i]);
    return null;
  }
  addEventSource(e) {
    let n = this.getCurrentData();
    if (e instanceof Dt)
      return n.eventSources[e.internalEventSource.sourceId] || this.dispatch({
        type: "ADD_EVENT_SOURCES",
        sources: [e.internalEventSource]
      }), e;
    let a = Qr(e, n);
    return a ? (this.dispatch({ type: "ADD_EVENT_SOURCES", sources: [a] }), new Dt(n, a)) : null;
  }
  removeAllEventSources() {
    this.dispatch({ type: "REMOVE_ALL_EVENT_SOURCES" });
  }
  refetchEvents() {
    this.dispatch({ type: "FETCH_EVENT_SOURCES", isRefetch: !0 });
  }
  // Scroll
  // -----------------------------------------------------------------------------------------------------------------
  scrollToTime(e) {
    let n = ke(e);
    n && this.trigger("_scrollRequest", { time: n });
  }
}
function G_(t, e) {
  return t.left >= e.left && t.left < e.right && t.top >= e.top && t.top < e.bottom;
}
function ls(t, e) {
  let n = {
    left: Math.max(t.left, e.left),
    right: Math.min(t.right, e.right),
    top: Math.max(t.top, e.top),
    bottom: Math.min(t.bottom, e.bottom)
  };
  return n.left < n.right && n.top < n.bottom ? n : !1;
}
function q_(t, e) {
  return {
    left: Math.min(Math.max(t.left, e.left), e.right),
    top: Math.min(Math.max(t.top, e.top), e.bottom)
  };
}
function K_(t) {
  return {
    left: (t.left + t.right) / 2,
    top: (t.top + t.bottom) / 2
  };
}
function Q_(t, e) {
  return {
    left: t.left - e.left,
    top: t.top - e.top
  };
}
function us(t, e, n, a) {
  return {
    dow: t.getUTCDay(),
    isDisabled: !!(a && (!a.activeRange || !lt(a.activeRange, t))),
    isOther: !!(a && !lt(a.currentRange, t)),
    isToday: !!(e && lt(e, t)),
    isPast: !!(e && t < e.start),
    isFuture: !!(e && t >= e.end)
  };
}
function ai(t, e) {
  let n = [
    "fc-day",
    `fc-day-${e1[t.dow]}`
  ];
  return t.isDisabled ? n.push("fc-day-disabled") : (t.isToday && (n.push("fc-day-today"), n.push(e.getClass("today"))), t.isPast && n.push("fc-day-past"), t.isFuture && n.push("fc-day-future"), t.isOther && n.push("fc-day-other")), n;
}
const Z_ = Be({ year: "numeric", month: "long", day: "numeric" }), J_ = Be({ week: "long" });
function Aa(t, e, n = "day", a = !0) {
  const { dateEnv: i, options: o, calendarApi: r } = t;
  let s = i.format(e, n === "week" ? J_ : Z_);
  if (o.navLinks) {
    let u = i.toDate(e);
    const d = (m) => {
      let v = n === "day" ? o.navLinkDayClick : n === "week" ? o.navLinkWeekClick : null;
      typeof v == "function" ? v.call(r, i.toDate(e), m) : (typeof v == "string" && (n = v), r.zoomTo(e, n));
    };
    return Object.assign({ title: Wt(o.navLinkHint, [s, u], s), "data-navlink": "" }, a ? xr(d) : { onClick: d });
  }
  return { "aria-label": s };
}
let sa = null;
function X_() {
  return sa === null && (sa = eC()), sa;
}
function eC() {
  let t = document.createElement("div");
  Ut(t, {
    position: "absolute",
    top: -1e3,
    left: 0,
    border: 0,
    padding: 0,
    overflow: "scroll",
    direction: "rtl"
  }), t.innerHTML = "<div></div>", document.body.appendChild(t);
  let n = t.firstChild.getBoundingClientRect().left > t.getBoundingClientRect().left;
  return La(t), n;
}
let la;
function tC() {
  return la || (la = nC()), la;
}
function nC() {
  let t = document.createElement("div");
  t.style.overflow = "scroll", t.style.position = "absolute", t.style.top = "-9999px", t.style.left = "-9999px", document.body.appendChild(t);
  let e = cs(t);
  return document.body.removeChild(t), e;
}
function cs(t) {
  return {
    x: t.offsetHeight - t.clientHeight,
    y: t.offsetWidth - t.clientWidth
  };
}
function aC(t, e = !1) {
  let n = window.getComputedStyle(t), a = parseInt(n.borderLeftWidth, 10) || 0, i = parseInt(n.borderRightWidth, 10) || 0, o = parseInt(n.borderTopWidth, 10) || 0, r = parseInt(n.borderBottomWidth, 10) || 0, s = cs(t), u = s.y - a - i, d = s.x - o - r, m = {
    borderLeft: a,
    borderRight: i,
    borderTop: o,
    borderBottom: r,
    scrollbarBottom: d,
    scrollbarLeft: 0,
    scrollbarRight: 0
  };
  return X_() && n.direction === "rtl" ? m.scrollbarLeft = u : m.scrollbarRight = u, e && (m.paddingLeft = parseInt(n.paddingLeft, 10) || 0, m.paddingRight = parseInt(n.paddingRight, 10) || 0, m.paddingTop = parseInt(n.paddingTop, 10) || 0, m.paddingBottom = parseInt(n.paddingBottom, 10) || 0), m;
}
function iC(t, e = !1, n) {
  let a = ii(t), i = aC(t, e), o = {
    left: a.left + i.borderLeft + i.scrollbarLeft,
    right: a.right - i.borderRight - i.scrollbarRight,
    top: a.top + i.borderTop,
    bottom: a.bottom - i.borderBottom - i.scrollbarBottom
  };
  return e && (o.left += i.paddingLeft, o.right -= i.paddingRight, o.top += i.paddingTop, o.bottom -= i.paddingBottom), o;
}
function ii(t) {
  let e = t.getBoundingClientRect();
  return {
    left: e.left + window.scrollX,
    top: e.top + window.scrollY,
    right: e.right + window.scrollX,
    bottom: e.bottom + window.scrollY
  };
}
function oC(t) {
  let e = ds(t), n = t.getBoundingClientRect();
  for (let a of e) {
    let i = ls(n, a.getBoundingClientRect());
    if (i)
      n = i;
    else
      return null;
  }
  return n;
}
function ds(t) {
  let e = [];
  for (; t instanceof HTMLElement; ) {
    let n = window.getComputedStyle(t);
    if (n.position === "fixed")
      break;
    /(auto|scroll)/.test(n.overflow + n.overflowY + n.overflowX) && e.push(t), t = t.parentNode;
  }
  return e;
}
class $n {
  constructor(e, n, a, i) {
    this.els = n;
    let o = this.originClientRect = e.getBoundingClientRect();
    a && this.buildElHorizontals(o.left), i && this.buildElVerticals(o.top);
  }
  // Populates the left/right internal coordinate arrays
  buildElHorizontals(e) {
    let n = [], a = [];
    for (let i of this.els) {
      let o = i.getBoundingClientRect();
      n.push(o.left - e), a.push(o.right - e);
    }
    this.lefts = n, this.rights = a;
  }
  // Populates the top/bottom internal coordinate arrays
  buildElVerticals(e) {
    let n = [], a = [];
    for (let i of this.els) {
      let o = i.getBoundingClientRect();
      n.push(o.top - e), a.push(o.bottom - e);
    }
    this.tops = n, this.bottoms = a;
  }
  // Given a left offset (from document left), returns the index of the el that it horizontally intersects.
  // If no intersection is made, returns undefined.
  leftToIndex(e) {
    let { lefts: n, rights: a } = this, i = n.length, o;
    for (o = 0; o < i; o += 1)
      if (e >= n[o] && e < a[o])
        return o;
  }
  // Given a top offset (from document top), returns the index of the el that it vertically intersects.
  // If no intersection is made, returns undefined.
  topToIndex(e) {
    let { tops: n, bottoms: a } = this, i = n.length, o;
    for (o = 0; o < i; o += 1)
      if (e >= n[o] && e < a[o])
        return o;
  }
  // Gets the width of the element at the given index
  getWidth(e) {
    return this.rights[e] - this.lefts[e];
  }
  // Gets the height of the element at the given index
  getHeight(e) {
    return this.bottoms[e] - this.tops[e];
  }
  similarTo(e) {
    return cn(this.tops || [], e.tops || []) && cn(this.bottoms || [], e.bottoms || []) && cn(this.lefts || [], e.lefts || []) && cn(this.rights || [], e.rights || []);
  }
}
function cn(t, e) {
  const n = t.length;
  if (n !== e.length)
    return !1;
  for (let a = 0; a < n; a++)
    if (Math.round(t[a]) !== Math.round(e[a]))
      return !1;
  return !0;
}
class oi {
  getMaxScrollTop() {
    return this.getScrollHeight() - this.getClientHeight();
  }
  getMaxScrollLeft() {
    return this.getScrollWidth() - this.getClientWidth();
  }
  canScrollVertically() {
    return this.getMaxScrollTop() > 0;
  }
  canScrollHorizontally() {
    return this.getMaxScrollLeft() > 0;
  }
  canScrollUp() {
    return this.getScrollTop() > 0;
  }
  canScrollDown() {
    return this.getScrollTop() < this.getMaxScrollTop();
  }
  canScrollLeft() {
    return this.getScrollLeft() > 0;
  }
  canScrollRight() {
    return this.getScrollLeft() < this.getMaxScrollLeft();
  }
}
class rC extends oi {
  constructor(e) {
    super(), this.el = e;
  }
  getScrollTop() {
    return this.el.scrollTop;
  }
  getScrollLeft() {
    return this.el.scrollLeft;
  }
  setScrollTop(e) {
    this.el.scrollTop = e;
  }
  setScrollLeft(e) {
    this.el.scrollLeft = e;
  }
  getScrollWidth() {
    return this.el.scrollWidth;
  }
  getScrollHeight() {
    return this.el.scrollHeight;
  }
  getClientHeight() {
    return this.el.clientHeight;
  }
  getClientWidth() {
    return this.el.clientWidth;
  }
}
class sC extends oi {
  getScrollTop() {
    return window.scrollY;
  }
  getScrollLeft() {
    return window.scrollX;
  }
  setScrollTop(e) {
    window.scroll(window.scrollX, e);
  }
  setScrollLeft(e) {
    window.scroll(e, window.scrollY);
  }
  getScrollWidth() {
    return document.documentElement.scrollWidth;
  }
  getScrollHeight() {
    return document.documentElement.scrollHeight;
  }
  getClientHeight() {
    return document.documentElement.clientHeight;
  }
  getClientWidth() {
    return document.documentElement.clientWidth;
  }
}
class Tt extends Ie {
  constructor() {
    super(...arguments), this.uid = wt();
  }
  // Hit System
  // -----------------------------------------------------------------------------------------------------------------
  prepareHits() {
  }
  queryHit(e, n, a, i) {
    return null;
  }
  // Pointer Interaction Utils
  // -----------------------------------------------------------------------------------------------------------------
  isValidSegDownEl(e) {
    return !this.props.eventDrag && // HACK
    !this.props.eventResize && // HACK
    !Le(e, ".fc-event-mirror");
  }
  isValidDateDownEl(e) {
    return !Le(e, ".fc-event:not(.fc-bg-event)") && !Le(e, ".fc-more-link") && // a "more.." link
    !Le(e, "a[data-navlink]") && // a clickable nav link
    !Le(e, ".fc-popover");
  }
}
class lC {
  constructor(e = (n) => n.thickness || 1) {
    this.getEntryThickness = e, this.strictOrder = !1, this.allowReslicing = !1, this.maxCoord = -1, this.maxStackCnt = -1, this.levelCoords = [], this.entriesByLevel = [], this.stackCnts = {};
  }
  addSegs(e) {
    let n = [];
    for (let a of e)
      this.insertEntry(a, n);
    return n;
  }
  insertEntry(e, n) {
    let a = this.findInsertion(e);
    this.isInsertionValid(a, e) ? this.insertEntryAt(e, a) : this.handleInvalidInsertion(a, e, n);
  }
  isInsertionValid(e, n) {
    return (this.maxCoord === -1 || e.levelCoord + this.getEntryThickness(n) <= this.maxCoord) && (this.maxStackCnt === -1 || e.stackCnt < this.maxStackCnt);
  }
  handleInvalidInsertion(e, n, a) {
    if (this.allowReslicing && e.touchingEntry) {
      const i = Object.assign(Object.assign({}, n), { span: fs(n.span, e.touchingEntry.span) });
      a.push(i), this.splitEntry(n, e.touchingEntry, a);
    } else
      a.push(n);
  }
  /*
  Does NOT add what hit the `barrier` into hiddenEntries. Should already be done.
  */
  splitEntry(e, n, a) {
    let i = e.span, o = n.span;
    i.start < o.start && this.insertEntry({
      index: e.index,
      thickness: e.thickness,
      span: { start: i.start, end: o.start }
    }, a), i.end > o.end && this.insertEntry({
      index: e.index,
      thickness: e.thickness,
      span: { start: o.end, end: i.end }
    }, a);
  }
  insertEntryAt(e, n) {
    let { entriesByLevel: a, levelCoords: i } = this;
    n.lateral === -1 ? (ua(i, n.level, n.levelCoord), ua(a, n.level, [e])) : ua(a[n.level], n.lateral, e), this.stackCnts[qt(e)] = n.stackCnt;
  }
  /*
  does not care about limits
  */
  findInsertion(e) {
    let { levelCoords: n, entriesByLevel: a, strictOrder: i, stackCnts: o } = this, r = n.length, s = 0, u = -1, d = -1, m = null, v = 0;
    for (let g = 0; g < r; g += 1) {
      const y = n[g];
      if (!i && y >= s + this.getEntryThickness(e))
        break;
      let b = a[g], _, C = fo(b, e.span.start, co), k = C[0] + C[1];
      for (
        ;
        // loop through entries that horizontally intersect
        (_ = b[k]) && // but not past the whole entry list
        _.span.start < e.span.end;
      ) {
        let E = y + this.getEntryThickness(_);
        E > s && (s = E, m = _, u = g, d = k), E === s && (v = Math.max(v, o[qt(_)] + 1)), k += 1;
      }
    }
    let p = 0;
    if (m)
      for (p = u + 1; p < r && n[p] < s; )
        p += 1;
    let h = -1;
    return p < r && n[p] === s && (h = fo(a[p], e.span.end, co)[0]), {
      touchingLevel: u,
      touchingLateral: d,
      touchingEntry: m,
      stackCnt: v,
      levelCoord: s,
      level: p,
      lateral: h
    };
  }
  // sorted by levelCoord (lowest to highest)
  toRects() {
    let { entriesByLevel: e, levelCoords: n } = this, a = e.length, i = [];
    for (let o = 0; o < a; o += 1) {
      let r = e[o], s = n[o];
      for (let u of r)
        i.push(Object.assign(Object.assign({}, u), { thickness: this.getEntryThickness(u), levelCoord: s }));
    }
    return i;
  }
}
function co(t) {
  return t.span.end;
}
function qt(t) {
  return t.index + ":" + t.span.start;
}
function fs(t, e) {
  let n = Math.max(t.start, e.start), a = Math.min(t.end, e.end);
  return n < a ? { start: n, end: a } : null;
}
function ua(t, e, n) {
  t.splice(e, 0, n);
}
function fo(t, e, n) {
  let a = 0, i = t.length;
  if (!i || e < n(t[a]))
    return [0, 0];
  if (e > n(t[i - 1]))
    return [i, 0];
  for (; a < i; ) {
    let o = Math.floor(a + (i - a) / 2), r = n(t[o]);
    if (e < r)
      i = o;
    else if (e > r)
      a = o + 1;
    else
      return [o, 1];
  }
  return [a, 0];
}
class uC {
  constructor(e, n) {
    this.emitter = new jn();
  }
  destroy() {
  }
  setMirrorIsVisible(e) {
  }
  setMirrorNeedsRevert(e) {
  }
  setAutoScrollEnabled(e) {
  }
}
const ri = {};
function cC(t, e) {
  return !t || e > 10 ? Be({ weekday: "short" }) : e > 1 ? Be({ weekday: "short", month: "numeric", day: "numeric", omitCommas: !0 }) : Be({ weekday: "long" });
}
const ms = "fc-col-header-cell";
function hs(t) {
  return t.text;
}
class dC extends Ie {
  render() {
    let { dateEnv: e, options: n, theme: a, viewApi: i } = this.context, { props: o } = this, { date: r, dateProfile: s } = o, u = us(r, o.todayRange, null, s), d = [ms].concat(ai(u, a)), m = e.format(r, o.dayHeaderFormat), v = !u.isDisabled && o.colCnt > 1 ? Aa(this.context, r) : {}, p = e.toDate(r);
    e.namedTimeZoneImpl && (p = dt(p, 36e5));
    let h = Object.assign(Object.assign(Object.assign({ date: p, view: i }, o.extraRenderProps), { text: m }), u);
    return q(at, { elTag: "th", elClasses: d, elAttrs: Object.assign({ role: "columnheader", colSpan: o.colSpan, "data-date": u.isDisabled ? void 0 : ja(r) }, o.extraDataAttrs), renderProps: h, generatorName: "dayHeaderContent", customGenerator: n.dayHeaderContent, defaultGenerator: hs, classNameGenerator: n.dayHeaderClassNames, didMount: n.dayHeaderDidMount, willUnmount: n.dayHeaderWillUnmount }, (g) => q("div", { className: "fc-scrollgrid-sync-inner" }, !u.isDisabled && q(g, { elTag: "a", elAttrs: v, elClasses: [
      "fc-col-header-cell-cushion",
      o.isSticky && "fc-sticky"
    ] })));
  }
}
const fC = Be({ weekday: "long" });
class mC extends Ie {
  render() {
    let { props: e } = this, { dateEnv: n, theme: a, viewApi: i, options: o } = this.context, r = ze(/* @__PURE__ */ new Date(2592e5), e.dow), s = {
      dow: e.dow,
      isDisabled: !1,
      isFuture: !1,
      isPast: !1,
      isToday: !1,
      isOther: !1
    }, u = n.format(r, e.dayHeaderFormat), d = Object.assign(Object.assign(Object.assign(Object.assign({
      // TODO: make this public?
      date: r
    }, s), { view: i }), e.extraRenderProps), { text: u });
    return q(at, { elTag: "th", elClasses: [
      ms,
      ...ai(s, a),
      ...e.extraClassNames || []
    ], elAttrs: Object.assign({ role: "columnheader", colSpan: e.colSpan }, e.extraDataAttrs), renderProps: d, generatorName: "dayHeaderContent", customGenerator: o.dayHeaderContent, defaultGenerator: hs, classNameGenerator: o.dayHeaderClassNames, didMount: o.dayHeaderDidMount, willUnmount: o.dayHeaderWillUnmount }, (m) => q(
      "div",
      { className: "fc-scrollgrid-sync-inner" },
      q(m, { elTag: "a", elClasses: [
        "fc-col-header-cell-cushion",
        e.isSticky && "fc-sticky"
      ], elAttrs: {
        "aria-label": n.format(r, fC)
      } })
    ));
  }
}
class hC extends Ie {
  constructor() {
    super(...arguments), this.createDayHeaderFormatter = Ce(vC);
  }
  render() {
    let { context: e } = this, { dates: n, dateProfile: a, datesRepDistinctDays: i, renderIntro: o } = this.props, r = this.createDayHeaderFormatter(e.options.dayHeaderFormat, i, n.length);
    return q(Un, { unit: "day" }, (s, u) => q(
      "tr",
      { role: "row" },
      o && o("day"),
      n.map((d) => i ? q(dC, { key: d.toISOString(), date: d, dateProfile: a, todayRange: u, colCnt: n.length, dayHeaderFormat: r }) : q(mC, { key: d.getUTCDay(), dow: d.getUTCDay(), dayHeaderFormat: r }))
    ));
  }
}
function vC(t, e, n) {
  return t || cC(e, n);
}
class pC {
  constructor(e, n) {
    let a = e.start, { end: i } = e, o = [], r = [], s = -1;
    for (; a < i; )
      n.isHiddenDay(a) ? o.push(s + 0.5) : (s += 1, o.push(s), r.push(a)), a = ze(a, 1);
    this.dates = r, this.indices = o, this.cnt = r.length;
  }
  sliceRange(e) {
    let n = this.getDateDayIndex(e.start), a = this.getDateDayIndex(ze(e.end, -1)), i = Math.max(0, n), o = Math.min(this.cnt - 1, a);
    return i = Math.ceil(i), o = Math.floor(o), i <= o ? {
      firstIndex: i,
      lastIndex: o,
      isStart: n === i,
      isEnd: a === o
    } : null;
  }
  // Given a date, returns its chronolocial cell-index from the first cell of the grid.
  // If the date lies between cells (because of hiddenDays), returns a floating-point value between offsets.
  // If before the first offset, returns a negative number.
  // If after the last offset, returns an offset past the last cell offset.
  // Only works for *start* dates of cells. Will not work for exclusive end dates for cells.
  getDateDayIndex(e) {
    let { indices: n } = this, a = Math.floor(Vt(this.dates[0], e));
    return a < 0 ? n[0] - 1 : a >= n.length ? n[n.length - 1] + 1 : n[a];
  }
}
class gC {
  constructor(e, n) {
    let { dates: a } = e, i, o, r;
    if (n) {
      for (o = a[0].getUTCDay(), i = 1; i < a.length && a[i].getUTCDay() !== o; i += 1)
        ;
      r = Math.ceil(a.length / i);
    } else
      r = 1, i = a.length;
    this.rowCnt = r, this.colCnt = i, this.daySeries = e, this.cells = this.buildCells(), this.headerDates = this.buildHeaderDates();
  }
  buildCells() {
    let e = [];
    for (let n = 0; n < this.rowCnt; n += 1) {
      let a = [];
      for (let i = 0; i < this.colCnt; i += 1)
        a.push(this.buildCell(n, i));
      e.push(a);
    }
    return e;
  }
  buildCell(e, n) {
    let a = this.daySeries.dates[e * this.colCnt + n];
    return {
      key: a.toISOString(),
      date: a
    };
  }
  buildHeaderDates() {
    let e = [];
    for (let n = 0; n < this.colCnt; n += 1)
      e.push(this.cells[0][n].date);
    return e;
  }
  sliceRange(e) {
    let { colCnt: n } = this, a = this.daySeries.sliceRange(e), i = [];
    if (a) {
      let { firstIndex: o, lastIndex: r } = a, s = o;
      for (; s <= r; ) {
        let u = Math.floor(s / n), d = Math.min((u + 1) * n, r + 1);
        i.push({
          row: u,
          firstCol: s % n,
          lastCol: (d - 1) % n,
          isStart: a.isStart && s === o,
          isEnd: a.isEnd && d - 1 === r
        }), s = d;
      }
    }
    return i;
  }
}
class yC {
  constructor() {
    this.sliceBusinessHours = Ce(this._sliceBusinessHours), this.sliceDateSelection = Ce(this._sliceDateSpan), this.sliceEventStore = Ce(this._sliceEventStore), this.sliceEventDrag = Ce(this._sliceInteraction), this.sliceEventResize = Ce(this._sliceInteraction), this.forceDayIfListItem = !1;
  }
  sliceProps(e, n, a, i, ...o) {
    let { eventUiBases: r } = e, s = this.sliceEventStore(e.eventStore, r, n, a, ...o);
    return {
      dateSelectionSegs: this.sliceDateSelection(e.dateSelection, n, a, r, i, ...o),
      businessHourSegs: this.sliceBusinessHours(e.businessHours, n, a, i, ...o),
      fgEventSegs: s.fg,
      bgEventSegs: s.bg,
      eventDrag: this.sliceEventDrag(e.eventDrag, r, n, a, ...o),
      eventResize: this.sliceEventResize(e.eventResize, r, n, a, ...o),
      eventSelection: e.eventSelection
    };
  }
  sliceNowDate(e, n, a, i, ...o) {
    return this._sliceDateSpan(
      { range: { start: e, end: dt(e, 1) }, allDay: !1 },
      // add 1 ms, protect against null range
      n,
      a,
      {},
      i,
      ...o
    );
  }
  _sliceBusinessHours(e, n, a, i, ...o) {
    return e ? this._sliceEventStore(Ct(e, dn(n, !!a), i), {}, n, a, ...o).bg : [];
  }
  _sliceEventStore(e, n, a, i, ...o) {
    if (e) {
      let r = so(e, n, dn(a, !!i), i);
      return {
        bg: this.sliceEventRanges(r.bg, o),
        fg: this.sliceEventRanges(r.fg, o)
      };
    }
    return { bg: [], fg: [] };
  }
  _sliceInteraction(e, n, a, i, ...o) {
    if (!e)
      return null;
    let r = so(e.mutatedEvents, n, dn(a, !!i), i);
    return {
      segs: this.sliceEventRanges(r.fg, o),
      affectedInstances: e.affectedEvents.instances,
      isEvent: e.isEvent
    };
  }
  _sliceDateSpan(e, n, a, i, o, ...r) {
    if (!e)
      return [];
    let s = dn(n, !!a), u = Ft(e.range, s);
    if (u) {
      e = Object.assign(Object.assign({}, e), { range: u });
      let d = z_(e, i, o), m = this.sliceRange(e.range, ...r);
      for (let v of m)
        v.eventRange = d;
      return m;
    }
    return [];
  }
  /*
  "complete" seg means it has component and eventRange
  */
  sliceEventRanges(e, n) {
    let a = [];
    for (let i of e)
      a.push(...this.sliceEventRange(i, n));
    return a;
  }
  /*
  "complete" seg means it has component and eventRange
  */
  sliceEventRange(e, n) {
    let a = e.range;
    this.forceDayIfListItem && e.ui.display === "list-item" && (a = {
      start: a.start,
      end: ze(a.start, 1)
    });
    let i = this.sliceRange(a, ...n);
    for (let o of i)
      o.eventRange = e, o.isStart = e.isStart && o.isStart, o.isEnd = e.isEnd && o.isEnd;
    return i;
  }
}
function dn(t, e) {
  let n = t.activeRange;
  return e ? n : {
    start: dt(n.start, t.slotMinTime.milliseconds),
    end: dt(n.end, t.slotMaxTime.milliseconds - 864e5)
    // 864e5 = ms in a day
  };
}
function vs(t, e, n) {
  let { instances: a } = t.mutatedEvents;
  for (let i in a)
    if (!Vn(e.validRange, a[i].range))
      return !1;
  return ps({ eventDrag: t }, n);
}
function bC(t, e, n) {
  return Vn(e.validRange, t.range) ? ps({ dateSelection: t }, n) : !1;
}
function ps(t, e) {
  let n = e.getCurrentData(), a = Object.assign({ businessHours: n.businessHours, dateSelection: "", eventStore: n.eventStore, eventUiBases: n.eventUiBases, eventSelection: "", eventDrag: null, eventResize: null }, t);
  return (e.pluginHooks.isPropsValid || _C)(a, e);
}
function _C(t, e, n = {}, a) {
  return !(t.eventDrag && !CC(t, e, n, a) || t.dateSelection && !wC(t, e, n, a));
}
function CC(t, e, n, a) {
  let i = e.getCurrentData(), o = t.eventDrag, r = o.mutatedEvents, s = r.defs, u = r.instances, d = Rn(s, o.isEvent ? t.eventUiBases : { "": i.selectionConfig });
  a && (d = At(d, a));
  let m = p_(t.eventStore, o.affectedEvents.instances), v = m.defs, p = m.instances, h = Rn(v, t.eventUiBases);
  for (let g in u) {
    let y = u[g], b = y.range, _ = d[y.defId], C = s[y.defId];
    if (!gs(_.constraints, b, m, t.businessHours, e))
      return !1;
    let { eventOverlap: k } = e.options, E = typeof k == "function" ? k : null;
    for (let z in p) {
      let x = p[z];
      if (Ka(b, x.range) && (h[x.defId].overlap === !1 && o.isEvent || _.overlap === !1 || E && !E(
        new De(e, v[x.defId], x),
        // still event
        new De(e, C, y)
      )))
        return !1;
    }
    let N = i.eventStore;
    for (let z of _.allows) {
      let x = Object.assign(Object.assign({}, n), { range: y.range, allDay: C.allDay }), W = N.defs[C.defId], Y = N.instances[g], O;
      if (W ? O = new De(e, W, Y) : O = new De(e, C), !z(ei(x, e), O))
        return !1;
    }
  }
  return !0;
}
function wC(t, e, n, a) {
  let i = t.eventStore, o = i.defs, r = i.instances, s = t.dateSelection, u = s.range, { selectionConfig: d } = e.getCurrentData();
  if (a && (d = a(d)), !gs(d.constraints, u, i, t.businessHours, e))
    return !1;
  let { selectOverlap: m } = e.options, v = typeof m == "function" ? m : null;
  for (let p in r) {
    let h = r[p];
    if (Ka(u, h.range) && (d.overlap === !1 || v && !v(new De(e, o[h.defId], h), null)))
      return !1;
  }
  for (let p of d.allows) {
    let h = Object.assign(Object.assign({}, n), s);
    if (!p(ei(h, e), null))
      return !1;
  }
  return !0;
}
function gs(t, e, n, a, i) {
  for (let o of t)
    if (!kC(AC(o, e, n, a, i), e))
      return !1;
  return !0;
}
function AC(t, e, n, a, i) {
  return t === "businessHours" ? ca(Ct(a, e, i)) : typeof t == "string" ? ca(Hn(n, (o) => o.groupId === t)) : typeof t == "object" && t ? ca(Ct(t, e, i)) : [];
}
function ca(t) {
  let { instances: e } = t, n = [];
  for (let a in e)
    n.push(e[a].range);
  return n;
}
function kC(t, e) {
  for (let n of t)
    if (Vn(n, e))
      return !0;
  return !1;
}
const fn = /^(visible|hidden)$/;
class SC extends Ie {
  constructor() {
    super(...arguments), this.handleEl = (e) => {
      this.el = e, Je(this.props.elRef, e);
    };
  }
  render() {
    let { props: e } = this, { liquid: n, liquidIsAbsolute: a } = e, i = n && a, o = ["fc-scroller"];
    return n && (a ? o.push("fc-scroller-liquid-absolute") : o.push("fc-scroller-liquid")), q("div", { ref: this.handleEl, className: o.join(" "), style: {
      overflowX: e.overflowX,
      overflowY: e.overflowY,
      left: i && -(e.overcomeLeft || 0) || "",
      right: i && -(e.overcomeRight || 0) || "",
      bottom: i && -(e.overcomeBottom || 0) || "",
      marginLeft: !i && -(e.overcomeLeft || 0) || "",
      marginRight: !i && -(e.overcomeRight || 0) || "",
      marginBottom: !i && -(e.overcomeBottom || 0) || "",
      maxHeight: e.maxHeight || ""
    } }, e.children);
  }
  needsXScrolling() {
    if (fn.test(this.props.overflowX))
      return !1;
    let { el: e } = this, n = this.el.getBoundingClientRect().width - this.getYScrollbarWidth(), { children: a } = e;
    for (let i = 0; i < a.length; i += 1)
      if (a[i].getBoundingClientRect().width > n)
        return !0;
    return !1;
  }
  needsYScrolling() {
    if (fn.test(this.props.overflowY))
      return !1;
    let { el: e } = this, n = this.el.getBoundingClientRect().height - this.getXScrollbarWidth(), { children: a } = e;
    for (let i = 0; i < a.length; i += 1)
      if (a[i].getBoundingClientRect().height > n)
        return !0;
    return !1;
  }
  getXScrollbarWidth() {
    return fn.test(this.props.overflowX) ? 0 : this.el.offsetHeight - this.el.clientHeight;
  }
  getYScrollbarWidth() {
    return fn.test(this.props.overflowY) ? 0 : this.el.offsetWidth - this.el.clientWidth;
  }
}
class gt {
  constructor(e) {
    this.masterCallback = e, this.currentMap = {}, this.depths = {}, this.callbackMap = {}, this.handleValue = (n, a) => {
      let { depths: i, currentMap: o } = this, r = !1, s = !1;
      n !== null ? (r = a in o, o[a] = n, i[a] = (i[a] || 0) + 1, s = !0) : (i[a] -= 1, i[a] || (delete o[a], delete this.callbackMap[a], r = !0)), this.masterCallback && (r && this.masterCallback(null, String(a)), s && this.masterCallback(n, String(a)));
    };
  }
  createRef(e) {
    let n = this.callbackMap[e];
    return n || (n = this.callbackMap[e] = (a) => {
      this.handleValue(a, String(e));
    }), n;
  }
  // TODO: check callers that don't care about order. should use getAll instead
  // NOTE: this method has become less valuable now that we are encouraged to map order by some other index
  // TODO: provide ONE array-export function, buildArray, which fails on non-numeric indexes. caller can manipulate and "collect"
  collect(e, n, a) {
    return $1(this.currentMap, e, n, a);
  }
  getAll() {
    return Ga(this.currentMap);
  }
}
function TC(t) {
  let e = R0(t, ".fc-scrollgrid-shrink"), n = 0;
  for (let a of e)
    n = Math.max(n, G0(a));
  return Math.ceil(n);
}
function ys(t, e) {
  return t.liquid && e.liquid;
}
function EC(t, e) {
  return e.maxHeight != null || // if its possible for the height to max out, we might need scrollbars
  ys(t, e);
}
function MC(t, e, n, a) {
  let { expandRows: i } = n;
  return typeof e.content == "function" ? e.content(n) : q("table", {
    role: "presentation",
    className: [
      e.tableClassName,
      t.syncRowHeights ? "fc-scrollgrid-sync-table" : ""
    ].join(" "),
    style: {
      minWidth: n.tableMinWidth,
      width: n.clientWidth,
      height: i ? n.clientHeight : ""
      // css `height` on a <table> serves as a min-height
    }
  }, n.tableColGroupNode, q(a ? "thead" : "tbody", {
    role: "presentation"
  }, typeof e.rowContent == "function" ? e.rowContent(n) : e.rowContent));
}
function NC(t, e) {
  return ct(t, e, Qe);
}
function DC(t, e) {
  let n = [];
  for (let a of t) {
    let i = a.span || 1;
    for (let o = 0; o < i; o += 1)
      n.push(q("col", { style: {
        width: a.width === "shrink" ? IC(e) : a.width || "",
        minWidth: a.minWidth || ""
      } }));
  }
  return q("colgroup", {}, ...n);
}
function IC(t) {
  return t ?? 4;
}
function OC(t) {
  for (let e of t)
    if (e.width === "shrink")
      return !0;
  return !1;
}
function RC(t, e) {
  let n = [
    "fc-scrollgrid",
    e.theme.getClass("table")
  ];
  return t && n.push("fc-scrollgrid-liquid"), n;
}
function $C(t, e) {
  let n = [
    "fc-scrollgrid-section",
    `fc-scrollgrid-section-${t.type}`,
    t.className
    // used?
  ];
  return e && t.liquid && t.maxHeight == null && n.push("fc-scrollgrid-section-liquid"), t.isSticky && n.push("fc-scrollgrid-section-sticky"), n;
}
function xC(t) {
  return q("div", { className: "fc-scrollgrid-sticky-shim", style: {
    width: t.clientWidth,
    minWidth: t.tableMinWidth
  } });
}
function mo(t) {
  let { stickyHeaderDates: e } = t;
  return (e == null || e === "auto") && (e = t.height === "auto" || t.viewHeight === "auto"), e;
}
function PC(t) {
  let { stickyFooterScrollbar: e } = t;
  return (e == null || e === "auto") && (e = t.height === "auto" || t.viewHeight === "auto"), e;
}
class bs extends Ie {
  constructor() {
    super(...arguments), this.processCols = Ce((e) => e, NC), this.renderMicroColGroup = Ce(DC), this.scrollerRefs = new gt(), this.scrollerElRefs = new gt(this._handleScrollerEl.bind(this)), this.state = {
      shrinkWidth: null,
      forceYScrollbars: !1,
      scrollerClientWidths: {},
      scrollerClientHeights: {}
    }, this.handleSizing = () => {
      this.safeSetState(Object.assign({ shrinkWidth: this.computeShrinkWidth() }, this.computeScrollerDims()));
    };
  }
  render() {
    let { props: e, state: n, context: a } = this, i = e.sections || [], o = this.processCols(e.cols), r = this.renderMicroColGroup(o, n.shrinkWidth), s = RC(e.liquid, a);
    e.collapsibleWidth && s.push("fc-scrollgrid-collapsible");
    let u = i.length, d = 0, m, v = [], p = [], h = [];
    for (; d < u && (m = i[d]).type === "header"; )
      v.push(this.renderSection(m, r, !0)), d += 1;
    for (; d < u && (m = i[d]).type === "body"; )
      p.push(this.renderSection(m, r, !1)), d += 1;
    for (; d < u && (m = i[d]).type === "footer"; )
      h.push(this.renderSection(m, r, !0)), d += 1;
    let g = !ss();
    const y = { role: "rowgroup" };
    return q("table", {
      role: "grid",
      className: s.join(" "),
      style: { height: e.height }
    }, !!(!g && v.length) && q("thead", y, ...v), !!(!g && p.length) && q("tbody", y, ...p), !!(!g && h.length) && q("tfoot", y, ...h), g && q("tbody", y, ...v, ...p, ...h));
  }
  renderSection(e, n, a) {
    return "outerContent" in e ? q(Re, { key: e.key }, e.outerContent) : q("tr", { key: e.key, role: "presentation", className: $C(e, this.props.liquid).join(" ") }, this.renderChunkTd(e, n, e.chunk, a));
  }
  renderChunkTd(e, n, a, i) {
    if ("outerContent" in a)
      return a.outerContent;
    let { props: o } = this, { forceYScrollbars: r, scrollerClientWidths: s, scrollerClientHeights: u } = this.state, d = EC(o, e), m = ys(o, e), v = o.liquid ? r ? "scroll" : d ? "auto" : "hidden" : "visible", p = e.key, h = MC(e, a, {
      tableColGroupNode: n,
      tableMinWidth: "",
      clientWidth: !o.collapsibleWidth && s[p] !== void 0 ? s[p] : null,
      clientHeight: u[p] !== void 0 ? u[p] : null,
      expandRows: e.expandRows,
      syncRowHeights: !1,
      rowSyncHeights: [],
      reportRowHeightChange: () => {
      }
    }, i);
    return q(i ? "th" : "td", {
      ref: a.elRef,
      role: "presentation"
    }, q(
      "div",
      { className: `fc-scroller-harness${m ? " fc-scroller-harness-liquid" : ""}` },
      q(SC, { ref: this.scrollerRefs.createRef(p), elRef: this.scrollerElRefs.createRef(p), overflowY: v, overflowX: o.liquid ? "hidden" : "visible", maxHeight: e.maxHeight, liquid: m, liquidIsAbsolute: !0 }, h)
    ));
  }
  _handleScrollerEl(e, n) {
    let a = FC(this.props.sections, n);
    a && Je(a.chunk.scrollerElRef, e);
  }
  componentDidMount() {
    this.handleSizing(), this.context.addResizeHandler(this.handleSizing);
  }
  componentDidUpdate() {
    this.handleSizing();
  }
  componentWillUnmount() {
    this.context.removeResizeHandler(this.handleSizing);
  }
  computeShrinkWidth() {
    return OC(this.props.cols) ? TC(this.scrollerElRefs.getAll()) : 0;
  }
  computeScrollerDims() {
    let e = tC(), { scrollerRefs: n, scrollerElRefs: a } = this, i = !1, o = {}, r = {};
    for (let s in n.currentMap) {
      let u = n.currentMap[s];
      if (u && u.needsYScrolling()) {
        i = !0;
        break;
      }
    }
    for (let s of this.props.sections) {
      let u = s.key, d = a.currentMap[u];
      if (d) {
        let m = d.parentNode;
        o[u] = Math.floor(m.getBoundingClientRect().width - (i ? e.y : 0)), r[u] = Math.floor(m.getBoundingClientRect().height);
      }
    }
    return { forceYScrollbars: i, scrollerClientWidths: o, scrollerClientHeights: r };
  }
}
bs.addStateEquality({
  scrollerClientWidths: Qe,
  scrollerClientHeights: Qe
});
function FC(t, e) {
  for (let n of t)
    if (n.key === e)
      return n;
  return null;
}
class si extends Ie {
  constructor() {
    super(...arguments), this.buildPublicEvent = Ce((e, n, a) => new De(e, n, a)), this.handleEl = (e) => {
      this.el = e, Je(this.props.elRef, e), e && lo(e, this.props.seg);
    };
  }
  render() {
    const { props: e, context: n } = this, { options: a } = n, { seg: i } = e, { eventRange: o } = i, { ui: r } = o, s = {
      event: this.buildPublicEvent(n, o.def, o.instance),
      view: n.viewApi,
      timeText: e.timeText,
      textColor: r.textColor,
      backgroundColor: r.backgroundColor,
      borderColor: r.borderColor,
      isDraggable: !e.disableDragging && M_(i, n),
      isStartResizable: !e.disableResizing && N_(i, n),
      isEndResizable: !e.disableResizing && D_(i),
      isMirror: !!(e.isDragging || e.isResizing || e.isDateSelecting),
      isStart: !!i.isStart,
      isEnd: !!i.isEnd,
      isPast: !!e.isPast,
      isFuture: !!e.isFuture,
      isToday: !!e.isToday,
      isSelected: !!e.isSelected,
      isDragging: !!e.isDragging,
      isResizing: !!e.isResizing
    };
    return q(at, { elRef: this.handleEl, elTag: e.elTag, elAttrs: e.elAttrs, elClasses: [
      ...I_(s),
      ...i.eventRange.ui.classNames,
      ...e.elClasses || []
    ], elStyle: e.elStyle, renderProps: s, generatorName: "eventContent", customGenerator: a.eventContent, defaultGenerator: e.defaultGenerator, classNameGenerator: a.eventClassNames, didMount: a.eventDidMount, willUnmount: a.eventWillUnmount }, e.children);
  }
  componentDidUpdate(e) {
    this.el && this.props.seg !== e.seg && lo(this.el, this.props.seg);
  }
}
class _s extends Ie {
  render() {
    let { props: e, context: n } = this, { options: a } = n, { seg: i } = e, { ui: o } = i.eventRange, r = a.eventTimeFormat || e.defaultTimeFormat, s = as(i, r, n, e.defaultDisplayEventTime, e.defaultDisplayEventEnd);
    return q(si, Object.assign({}, e, { elTag: "a", elStyle: {
      borderColor: o.borderColor,
      backgroundColor: o.backgroundColor
    }, elAttrs: is(i, n), defaultGenerator: BC, timeText: s }), (u, d) => q(
      Re,
      null,
      q(u, { elTag: "div", elClasses: ["fc-event-main"], elStyle: { color: d.textColor } }),
      !!d.isStartResizable && q("div", { className: "fc-event-resizer fc-event-resizer-start" }),
      !!d.isEndResizable && q("div", { className: "fc-event-resizer fc-event-resizer-end" })
    ));
  }
}
_s.addPropsEquality({
  seg: Qe
});
function BC(t) {
  return q(
    "div",
    { className: "fc-event-main-frame" },
    t.timeText && q("div", { className: "fc-event-time" }, t.timeText),
    q(
      "div",
      { className: "fc-event-title-container" },
      q("div", { className: "fc-event-title fc-sticky" }, t.event.title || q(Re, null, " "))
    )
  );
}
const zC = Be({ day: "numeric" });
class Cs extends Ie {
  constructor() {
    super(...arguments), this.refineRenderProps = yn(LC);
  }
  render() {
    let { props: e, context: n } = this, { options: a } = n, i = this.refineRenderProps({
      date: e.date,
      dateProfile: e.dateProfile,
      todayRange: e.todayRange,
      isMonthStart: e.isMonthStart || !1,
      showDayNumber: e.showDayNumber,
      extraRenderProps: e.extraRenderProps,
      viewApi: n.viewApi,
      dateEnv: n.dateEnv,
      monthStartFormat: a.monthStartFormat
    });
    return q(at, { elRef: e.elRef, elTag: e.elTag, elAttrs: Object.assign(Object.assign({}, e.elAttrs), i.isDisabled ? {} : { "data-date": ja(e.date) }), elClasses: [
      ...ai(i, n.theme),
      ...e.elClasses || []
    ], elStyle: e.elStyle, renderProps: i, generatorName: "dayCellContent", customGenerator: a.dayCellContent, defaultGenerator: e.defaultGenerator, classNameGenerator: (
      // don't use custom classNames if disabled
      i.isDisabled ? void 0 : a.dayCellClassNames
    ), didMount: a.dayCellDidMount, willUnmount: a.dayCellWillUnmount }, e.children);
  }
}
function ws(t) {
  return !!(t.dayCellContent || ba("dayCellContent", t));
}
function LC(t) {
  let { date: e, dateEnv: n, dateProfile: a, isMonthStart: i } = t, o = us(e, t.todayRange, null, a), r = t.showDayNumber ? n.format(e, i ? t.monthStartFormat : zC) : "";
  return Object.assign(Object.assign(Object.assign({ date: n.toDate(e), view: t.viewApi }, o), {
    isMonthStart: i,
    dayNumberText: r
  }), t.extraRenderProps);
}
class VC extends Ie {
  render() {
    let { props: e } = this, { seg: n } = e;
    return q(si, { elTag: "div", elClasses: ["fc-bg-event"], elStyle: { backgroundColor: n.eventRange.ui.backgroundColor }, defaultGenerator: HC, seg: n, timeText: "", isDragging: !1, isResizing: !1, isDateSelecting: !1, isSelected: !1, isPast: e.isPast, isFuture: e.isFuture, isToday: e.isToday, disableDragging: !0, disableResizing: !0 });
  }
}
function HC(t) {
  let { title: e } = t.event;
  return e && q("div", { className: "fc-event-title" }, t.event.title);
}
function jC(t) {
  return q("div", { className: `fc-${t}` });
}
const UC = (t) => q(kt.Consumer, null, (e) => {
  let { dateEnv: n, options: a } = e, { date: i } = t, o = a.weekNumberFormat || t.defaultFormat, r = n.computeWeekNumber(i), s = n.format(i, o), u = { num: r, text: s, date: i };
  return q(
    at,
    { elRef: t.elRef, elTag: t.elTag, elAttrs: t.elAttrs, elClasses: t.elClasses, elStyle: t.elStyle, renderProps: u, generatorName: "weekNumberContent", customGenerator: a.weekNumberContent, defaultGenerator: WC, classNameGenerator: a.weekNumberClassNames, didMount: a.weekNumberDidMount, willUnmount: a.weekNumberWillUnmount },
    t.children
  );
});
function WC(t) {
  return t.text;
}
const da = 10;
class YC extends Ie {
  constructor() {
    super(...arguments), this.state = {
      titleId: zn()
    }, this.handleRootEl = (e) => {
      this.rootEl = e, this.props.elRef && Je(this.props.elRef, e);
    }, this.handleDocumentMouseDown = (e) => {
      const n = Rr(e);
      this.rootEl.contains(n) || this.handleCloseClick();
    }, this.handleDocumentKeyDown = (e) => {
      e.key === "Escape" && this.handleCloseClick();
    }, this.handleCloseClick = () => {
      let { onClose: e } = this.props;
      e && e();
    };
  }
  render() {
    let { theme: e, options: n } = this.context, { props: a, state: i } = this, o = [
      "fc-popover",
      e.getClass("popover")
    ].concat(a.extraClassNames || []);
    return b0(q(
      "div",
      Object.assign({}, a.extraAttrs, { id: a.id, className: o.join(" "), "aria-labelledby": i.titleId, ref: this.handleRootEl }),
      q(
        "div",
        { className: "fc-popover-header " + e.getClass("popoverHeader") },
        q("span", { className: "fc-popover-title", id: i.titleId }, a.title),
        q("span", { className: "fc-popover-close " + e.getIconClass("close"), title: n.closeHint, onClick: this.handleCloseClick })
      ),
      q("div", { className: "fc-popover-body " + e.getClass("popoverContent") }, a.children)
    ), a.parentEl);
  }
  componentDidMount() {
    document.addEventListener("mousedown", this.handleDocumentMouseDown), document.addEventListener("keydown", this.handleDocumentKeyDown), this.updateSize();
  }
  componentWillUnmount() {
    document.removeEventListener("mousedown", this.handleDocumentMouseDown), document.removeEventListener("keydown", this.handleDocumentKeyDown);
  }
  updateSize() {
    let { isRtl: e } = this.context, { alignmentEl: n, alignGridTop: a } = this.props, { rootEl: i } = this, o = oC(n);
    if (o) {
      let r = i.getBoundingClientRect(), s = a ? Le(n, ".fc-scrollgrid").getBoundingClientRect().top : o.top, u = e ? o.right - r.width : o.left;
      s = Math.max(s, da), u = Math.min(u, document.documentElement.clientWidth - da - r.width), u = Math.max(u, da);
      let d = i.offsetParent.getBoundingClientRect();
      Ut(i, {
        top: s - d.top,
        left: u - d.left
      });
    }
  }
}
class GC extends Tt {
  constructor() {
    super(...arguments), this.handleRootEl = (e) => {
      this.rootEl = e, e ? this.context.registerInteractiveComponent(this, {
        el: e,
        useEventCenter: !1
      }) : this.context.unregisterInteractiveComponent(this);
    };
  }
  render() {
    let { options: e, dateEnv: n } = this.context, { props: a } = this, { startDate: i, todayRange: o, dateProfile: r } = a, s = n.format(i, e.dayPopoverFormat);
    return q(Cs, { elRef: this.handleRootEl, date: i, dateProfile: r, todayRange: o }, (u, d, m) => q(
      YC,
      { elRef: m.ref, id: a.id, title: s, extraClassNames: ["fc-more-popover"].concat(m.className || []), extraAttrs: m, parentEl: a.parentEl, alignmentEl: a.alignmentEl, alignGridTop: a.alignGridTop, onClose: a.onClose },
      ws(e) && q(u, { elTag: "div", elClasses: ["fc-more-popover-misc"] }),
      a.children
    ));
  }
  queryHit(e, n, a, i) {
    let { rootEl: o, props: r } = this;
    return e >= 0 && e < a && n >= 0 && n < i ? {
      dateProfile: r.dateProfile,
      dateSpan: Object.assign({ allDay: !r.forceTimed, range: {
        start: r.startDate,
        end: r.endDate
      } }, r.extraDateSpan),
      dayEl: o,
      rect: {
        left: 0,
        top: 0,
        right: a,
        bottom: i
      },
      layer: 1
      // important when comparing with hits from other components
    } : null;
  }
}
class qC extends Ie {
  constructor() {
    super(...arguments), this.state = {
      isPopoverOpen: !1,
      popoverId: zn()
    }, this.handleLinkEl = (e) => {
      this.linkEl = e, this.props.elRef && Je(this.props.elRef, e);
    }, this.handleClick = (e) => {
      let { props: n, context: a } = this, { moreLinkClick: i } = a.options, o = ho(n).start;
      function r(s) {
        let { def: u, instance: d, range: m } = s.eventRange;
        return {
          event: new De(a, u, d),
          start: a.dateEnv.toDate(m.start),
          end: a.dateEnv.toDate(m.end),
          isStart: s.isStart,
          isEnd: s.isEnd
        };
      }
      typeof i == "function" && (i = i({
        date: o,
        allDay: !!n.allDayDate,
        allSegs: n.allSegs.map(r),
        hiddenSegs: n.hiddenSegs.map(r),
        jsEvent: e,
        view: a.viewApi
      })), !i || i === "popover" ? this.setState({ isPopoverOpen: !0 }) : typeof i == "string" && a.calendarApi.zoomTo(o, i);
    }, this.handlePopoverClose = () => {
      this.setState({ isPopoverOpen: !1 });
    };
  }
  render() {
    let { props: e, state: n } = this;
    return q(kt.Consumer, null, (a) => {
      let { viewApi: i, options: o, calendarApi: r } = a, { moreLinkText: s } = o, { moreCnt: u } = e, d = ho(e), m = typeof s == "function" ? s.call(r, u) : `+${u} ${s}`, v = Wt(o.moreLinkHint, [u], m), p = {
        num: u,
        shortText: `+${u}`,
        text: m,
        view: i
      };
      return q(
        Re,
        null,
        !!e.moreCnt && q(at, { elTag: e.elTag || "a", elRef: this.handleLinkEl, elClasses: [
          ...e.elClasses || [],
          "fc-more-link"
        ], elStyle: e.elStyle, elAttrs: Object.assign(Object.assign(Object.assign({}, e.elAttrs), xr(this.handleClick)), { title: v, "aria-expanded": n.isPopoverOpen, "aria-controls": n.isPopoverOpen ? n.popoverId : "" }), renderProps: p, generatorName: "moreLinkContent", customGenerator: o.moreLinkContent, defaultGenerator: e.defaultGenerator || KC, classNameGenerator: o.moreLinkClassNames, didMount: o.moreLinkDidMount, willUnmount: o.moreLinkWillUnmount }, e.children),
        n.isPopoverOpen && q(GC, { id: n.popoverId, startDate: d.start, endDate: d.end, dateProfile: e.dateProfile, todayRange: e.todayRange, extraDateSpan: e.extraDateSpan, parentEl: this.parentEl, alignmentEl: e.alignmentElRef ? e.alignmentElRef.current : this.linkEl, alignGridTop: e.alignGridTop, forceTimed: e.forceTimed, onClose: this.handlePopoverClose }, e.popoverContent())
      );
    });
  }
  componentDidMount() {
    this.updateParentEl();
  }
  componentDidUpdate() {
    this.updateParentEl();
  }
  updateParentEl() {
    this.linkEl && (this.parentEl = Le(this.linkEl, ".fc-view-harness"));
  }
}
function KC(t) {
  return t.text;
}
function ho(t) {
  if (t.allDayDate)
    return {
      start: t.allDayDate,
      end: ze(t.allDayDate, 1)
    };
  let { hiddenSegs: e } = t;
  return {
    start: QC(e),
    end: JC(e)
  };
}
function QC(t) {
  return t.reduce(ZC).eventRange.range.start;
}
function ZC(t, e) {
  return t.eventRange.range.start < e.eventRange.range.start ? t : e;
}
function JC(t) {
  return t.reduce(XC).eventRange.range.end;
}
function XC(t, e) {
  return t.eventRange.range.end > e.eventRange.range.end ? t : e;
}
class ew {
  constructor() {
    this.handlers = [];
  }
  set(e) {
    this.currentValue = e;
    for (let n of this.handlers)
      n(e);
  }
  subscribe(e) {
    this.handlers.push(e), this.currentValue !== void 0 && e(this.currentValue);
  }
}
class tw extends ew {
  constructor() {
    super(...arguments), this.map = /* @__PURE__ */ new Map();
  }
  // for consistent order
  handle(e) {
    const { map: n } = this;
    let a = !1;
    e.isActive ? (n.set(e.id, e), a = !0) : n.has(e.id) && (n.delete(e.id), a = !0), a && this.set(n);
  }
}
const nw = [], As = {
  code: "en",
  week: {
    dow: 0,
    doy: 4
    // 4 days need to be within the year to be considered the first week
  },
  direction: "ltr",
  buttonText: {
    prev: "prev",
    next: "next",
    prevYear: "prev year",
    nextYear: "next year",
    year: "year",
    today: "today",
    month: "month",
    week: "week",
    day: "day",
    list: "list"
  },
  weekText: "W",
  weekTextLong: "Week",
  closeHint: "Close",
  timeHint: "Time",
  eventHint: "Event",
  allDayText: "all-day",
  moreLinkText: "more",
  noEventsText: "No events to display"
}, ks = Object.assign(Object.assign({}, As), {
  // Includes things we don't want other locales to inherit,
  // things that derive from other translatable strings.
  buttonHints: {
    prev: "Previous $0",
    next: "Next $0",
    today(t, e) {
      return e === "day" ? "Today" : `This ${t}`;
    }
  },
  viewHint: "$0 view",
  navLinkHint: "Go to $0",
  moreLinkHint(t) {
    return `Show ${t} more event${t === 1 ? "" : "s"}`;
  }
});
function aw(t) {
  let e = t.length > 0 ? t[0].code : "en", n = nw.concat(t), a = {
    en: ks
  };
  for (let i of n)
    a[i.code] = i;
  return {
    map: a,
    defaultCode: e
  };
}
function Ss(t, e) {
  return typeof t == "object" && !Array.isArray(t) ? Ts(t.code, [t.code], t) : iw(t, e);
}
function iw(t, e) {
  let n = [].concat(t || []), a = ow(n, e) || ks;
  return Ts(t, n, a);
}
function ow(t, e) {
  for (let n = 0; n < t.length; n += 1) {
    let a = t[n].toLocaleLowerCase().split("-");
    for (let i = a.length; i > 0; i -= 1) {
      let o = a.slice(0, i).join("-");
      if (e[o])
        return e[o];
    }
  }
  return null;
}
function Ts(t, e, n) {
  let a = Ya([As, n], ["buttonText"]);
  delete a.code;
  let { week: i } = a;
  return delete a.week, {
    codeArg: t,
    codes: e,
    week: i,
    simpleNumberFormat: new Intl.NumberFormat(t),
    options: a
  };
}
function ft(t) {
  return {
    id: wt(),
    name: t.name,
    premiumReleaseDate: t.premiumReleaseDate ? new Date(t.premiumReleaseDate) : void 0,
    deps: t.deps || [],
    reducers: t.reducers || [],
    isLoadingFuncs: t.isLoadingFuncs || [],
    contextInit: [].concat(t.contextInit || []),
    eventRefiners: t.eventRefiners || {},
    eventDefMemberAdders: t.eventDefMemberAdders || [],
    eventSourceRefiners: t.eventSourceRefiners || {},
    isDraggableTransformers: t.isDraggableTransformers || [],
    eventDragMutationMassagers: t.eventDragMutationMassagers || [],
    eventDefMutationAppliers: t.eventDefMutationAppliers || [],
    dateSelectionTransformers: t.dateSelectionTransformers || [],
    datePointTransforms: t.datePointTransforms || [],
    dateSpanTransforms: t.dateSpanTransforms || [],
    views: t.views || {},
    viewPropsTransformers: t.viewPropsTransformers || [],
    isPropsValid: t.isPropsValid || null,
    externalDefTransforms: t.externalDefTransforms || [],
    viewContainerAppends: t.viewContainerAppends || [],
    eventDropTransformers: t.eventDropTransformers || [],
    componentInteractions: t.componentInteractions || [],
    calendarInteractions: t.calendarInteractions || [],
    themeClasses: t.themeClasses || {},
    eventSourceDefs: t.eventSourceDefs || [],
    cmdFormatter: t.cmdFormatter,
    recurringTypes: t.recurringTypes || [],
    namedTimeZonedImpl: t.namedTimeZonedImpl,
    initialView: t.initialView || "",
    elementDraggingImpl: t.elementDraggingImpl,
    optionChangeHandlers: t.optionChangeHandlers || {},
    scrollGridImpl: t.scrollGridImpl || null,
    listenerRefiners: t.listenerRefiners || {},
    optionRefiners: t.optionRefiners || {},
    propSetHandlers: t.propSetHandlers || {}
  };
}
function rw(t, e) {
  let n = {}, a = {
    premiumReleaseDate: void 0,
    reducers: [],
    isLoadingFuncs: [],
    contextInit: [],
    eventRefiners: {},
    eventDefMemberAdders: [],
    eventSourceRefiners: {},
    isDraggableTransformers: [],
    eventDragMutationMassagers: [],
    eventDefMutationAppliers: [],
    dateSelectionTransformers: [],
    datePointTransforms: [],
    dateSpanTransforms: [],
    views: {},
    viewPropsTransformers: [],
    isPropsValid: null,
    externalDefTransforms: [],
    viewContainerAppends: [],
    eventDropTransformers: [],
    componentInteractions: [],
    calendarInteractions: [],
    themeClasses: {},
    eventSourceDefs: [],
    cmdFormatter: null,
    recurringTypes: [],
    namedTimeZonedImpl: null,
    initialView: "",
    elementDraggingImpl: null,
    optionChangeHandlers: {},
    scrollGridImpl: null,
    listenerRefiners: {},
    optionRefiners: {},
    propSetHandlers: {}
  };
  function i(o) {
    for (let r of o) {
      const s = r.name, u = n[s];
      u === void 0 ? (n[s] = r.id, i(r.deps), a = lw(a, r)) : u !== r.id && console.warn(`Duplicate plugin '${s}'`);
    }
  }
  return t && i(t), i(e), a;
}
function sw() {
  let t = [], e = [], n;
  return (a, i) => ((!n || !ct(a, t) || !ct(i, e)) && (n = rw(a, i)), t = a, e = i, n);
}
function lw(t, e) {
  return {
    premiumReleaseDate: uw(t.premiumReleaseDate, e.premiumReleaseDate),
    reducers: t.reducers.concat(e.reducers),
    isLoadingFuncs: t.isLoadingFuncs.concat(e.isLoadingFuncs),
    contextInit: t.contextInit.concat(e.contextInit),
    eventRefiners: Object.assign(Object.assign({}, t.eventRefiners), e.eventRefiners),
    eventDefMemberAdders: t.eventDefMemberAdders.concat(e.eventDefMemberAdders),
    eventSourceRefiners: Object.assign(Object.assign({}, t.eventSourceRefiners), e.eventSourceRefiners),
    isDraggableTransformers: t.isDraggableTransformers.concat(e.isDraggableTransformers),
    eventDragMutationMassagers: t.eventDragMutationMassagers.concat(e.eventDragMutationMassagers),
    eventDefMutationAppliers: t.eventDefMutationAppliers.concat(e.eventDefMutationAppliers),
    dateSelectionTransformers: t.dateSelectionTransformers.concat(e.dateSelectionTransformers),
    datePointTransforms: t.datePointTransforms.concat(e.datePointTransforms),
    dateSpanTransforms: t.dateSpanTransforms.concat(e.dateSpanTransforms),
    views: Object.assign(Object.assign({}, t.views), e.views),
    viewPropsTransformers: t.viewPropsTransformers.concat(e.viewPropsTransformers),
    isPropsValid: e.isPropsValid || t.isPropsValid,
    externalDefTransforms: t.externalDefTransforms.concat(e.externalDefTransforms),
    viewContainerAppends: t.viewContainerAppends.concat(e.viewContainerAppends),
    eventDropTransformers: t.eventDropTransformers.concat(e.eventDropTransformers),
    calendarInteractions: t.calendarInteractions.concat(e.calendarInteractions),
    componentInteractions: t.componentInteractions.concat(e.componentInteractions),
    themeClasses: Object.assign(Object.assign({}, t.themeClasses), e.themeClasses),
    eventSourceDefs: t.eventSourceDefs.concat(e.eventSourceDefs),
    cmdFormatter: e.cmdFormatter || t.cmdFormatter,
    recurringTypes: t.recurringTypes.concat(e.recurringTypes),
    namedTimeZonedImpl: e.namedTimeZonedImpl || t.namedTimeZonedImpl,
    initialView: t.initialView || e.initialView,
    elementDraggingImpl: t.elementDraggingImpl || e.elementDraggingImpl,
    optionChangeHandlers: Object.assign(Object.assign({}, t.optionChangeHandlers), e.optionChangeHandlers),
    scrollGridImpl: e.scrollGridImpl || t.scrollGridImpl,
    listenerRefiners: Object.assign(Object.assign({}, t.listenerRefiners), e.listenerRefiners),
    optionRefiners: Object.assign(Object.assign({}, t.optionRefiners), e.optionRefiners),
    propSetHandlers: Object.assign(Object.assign({}, t.propSetHandlers), e.propSetHandlers)
  };
}
function uw(t, e) {
  return t === void 0 ? e : e === void 0 ? t : new Date(Math.max(t.valueOf(), e.valueOf()));
}
class mt extends tn {
}
mt.prototype.classes = {
  root: "fc-theme-standard",
  tableCellShaded: "fc-cell-shaded",
  buttonGroup: "fc-button-group",
  button: "fc-button fc-button-primary",
  buttonActive: "fc-button-active"
};
mt.prototype.baseIconClass = "fc-icon";
mt.prototype.iconClasses = {
  close: "fc-icon-x",
  prev: "fc-icon-chevron-left",
  next: "fc-icon-chevron-right",
  prevYear: "fc-icon-chevrons-left",
  nextYear: "fc-icon-chevrons-right"
};
mt.prototype.rtlIconClasses = {
  prev: "fc-icon-chevron-right",
  next: "fc-icon-chevron-left",
  prevYear: "fc-icon-chevrons-right",
  nextYear: "fc-icon-chevrons-left"
};
mt.prototype.iconOverrideOption = "buttonIcons";
mt.prototype.iconOverrideCustomButtonOption = "icon";
mt.prototype.iconOverridePrefix = "fc-icon-";
function cw(t, e) {
  let n = {}, a;
  for (a in t)
    ka(a, n, t, e);
  for (a in e)
    ka(a, n, t, e);
  return n;
}
function ka(t, e, n, a) {
  if (e[t])
    return e[t];
  let i = dw(t, e, n, a);
  return i && (e[t] = i), i;
}
function dw(t, e, n, a) {
  let i = n[t], o = a[t], r = (m) => i && i[m] !== null ? i[m] : o && o[m] !== null ? o[m] : null, s = r("component"), u = r("superType"), d = null;
  if (u) {
    if (u === t)
      throw new Error("Can't have a custom view type that references itself");
    d = ka(u, e, n, a);
  }
  return !s && d && (s = d.component), s ? {
    type: t,
    component: s,
    defaults: Object.assign(Object.assign({}, d ? d.defaults : {}), i ? i.rawOptions : {}),
    overrides: Object.assign(Object.assign({}, d ? d.overrides : {}), o ? o.rawOptions : {})
  } : null;
}
function vo(t) {
  return At(t, fw);
}
function fw(t) {
  let e = typeof t == "function" ? { component: t } : t, { component: n } = e;
  return e.content ? n = po(e) : n && !(n.prototype instanceof Ie) && (n = po(Object.assign(Object.assign({}, e), { content: n }))), {
    superType: e.type,
    component: n,
    rawOptions: e
    // includes type and component too :(
  };
}
function po(t) {
  return (e) => q(kt.Consumer, null, (n) => q(at, { elTag: "div", elClasses: jr(n.viewSpec), renderProps: Object.assign(Object.assign({}, e), { nextDayThreshold: n.options.nextDayThreshold }), generatorName: void 0, customGenerator: t.content, classNameGenerator: t.classNames, didMount: t.didMount, willUnmount: t.willUnmount }));
}
function mw(t, e, n, a) {
  let i = vo(t), o = vo(e.views), r = cw(i, o);
  return At(r, (s) => hw(s, o, e, n, a));
}
function hw(t, e, n, a, i) {
  let o = t.overrides.duration || t.defaults.duration || a.duration || n.duration, r = null, s = "", u = "", d = {};
  if (o && (r = vw(o), r)) {
    let p = ya(r);
    s = p.unit, p.value === 1 && (u = s, d = e[s] ? e[s].rawOptions : {});
  }
  let m = (p) => {
    let h = p.buttonText || {}, g = t.defaults.buttonTextKey;
    return g != null && h[g] != null ? h[g] : h[t.type] != null ? h[t.type] : h[u] != null ? h[u] : null;
  }, v = (p) => {
    let h = p.buttonHints || {}, g = t.defaults.buttonTextKey;
    return g != null && h[g] != null ? h[g] : h[t.type] != null ? h[t.type] : h[u] != null ? h[u] : null;
  };
  return {
    type: t.type,
    component: t.component,
    duration: r,
    durationUnit: s,
    singleUnit: u,
    optionDefaults: t.defaults,
    optionOverrides: Object.assign(Object.assign({}, d), t.overrides),
    buttonTextOverride: m(a) || m(n) || // constructor-specified buttonText lookup hash takes precedence
    t.overrides.buttonText,
    buttonTextDefault: m(i) || t.defaults.buttonText || m(Yt) || t.type,
    // not DRY
    buttonTitleOverride: v(a) || v(n) || t.overrides.buttonHint,
    buttonTitleDefault: v(i) || t.defaults.buttonHint || v(Yt)
    // will eventually fall back to buttonText
  };
}
let go = {};
function vw(t) {
  let e = JSON.stringify(t), n = go[e];
  return n === void 0 && (n = ke(t), go[e] = n), n;
}
function pw(t, e) {
  switch (e.type) {
    case "CHANGE_VIEW_TYPE":
      t = e.viewType;
  }
  return t;
}
function gw(t, e) {
  switch (e.type) {
    case "CHANGE_DATE":
      return e.dateMarker;
    default:
      return t;
  }
}
function yw(t, e, n) {
  let a = t.initialDate;
  return a != null ? e.createMarker(a) : n.getDateMarker();
}
function bw(t, e) {
  switch (e.type) {
    case "SET_OPTION":
      return Object.assign(Object.assign({}, t), { [e.optionName]: e.rawOptionValue });
    default:
      return t;
  }
}
function _w(t, e, n, a) {
  let i;
  switch (e.type) {
    case "CHANGE_VIEW_TYPE":
      return a.build(e.dateMarker || n);
    case "CHANGE_DATE":
      return a.build(e.dateMarker);
    case "PREV":
      if (i = a.buildPrev(t, n), i.isValid)
        return i;
      break;
    case "NEXT":
      if (i = a.buildNext(t, n), i.isValid)
        return i;
      break;
  }
  return t;
}
function Cw(t, e, n) {
  let a = e ? e.activeRange : null;
  return Ms({}, Mw(t, n), a, n);
}
function ww(t, e, n, a) {
  let i = n ? n.activeRange : null;
  switch (e.type) {
    case "ADD_EVENT_SOURCES":
      return Ms(t, e.sources, i, a);
    case "REMOVE_EVENT_SOURCE":
      return kw(t, e.sourceId);
    case "PREV":
    // TODO: how do we track all actions that affect dateProfile :(
    case "NEXT":
    case "CHANGE_DATE":
    case "CHANGE_VIEW_TYPE":
      return n ? Ns(t, i, a) : t;
    case "FETCH_EVENT_SOURCES":
      return li(t, e.sourceIds ? (
        // why no type?
        Br(e.sourceIds)
      ) : Ds(t, a), i, e.isRefetch || !1, a);
    case "RECEIVE_EVENTS":
    case "RECEIVE_EVENT_ERROR":
      return Ew(t, e.sourceId, e.fetchId, e.fetchRange);
    case "REMOVE_ALL_EVENT_SOURCES":
      return {};
    default:
      return t;
  }
}
function Aw(t, e, n) {
  let a = e ? e.activeRange : null;
  return li(t, Ds(t, n), a, !0, n);
}
function Es(t) {
  for (let e in t)
    if (t[e].isFetching)
      return !0;
  return !1;
}
function Ms(t, e, n, a) {
  let i = {};
  for (let o of e)
    i[o.sourceId] = o;
  return n && (i = Ns(i, n, a)), Object.assign(Object.assign({}, t), i);
}
function kw(t, e) {
  return _t(t, (n) => n.sourceId !== e);
}
function Ns(t, e, n) {
  return li(t, _t(t, (a) => Sw(a, e, n)), e, !1, n);
}
function Sw(t, e, n) {
  return Is(t, n) ? !n.options.lazyFetching || !t.fetchRange || t.isFetching || // always cancel outdated in-progress fetches
  e.start < t.fetchRange.start || e.end > t.fetchRange.end : !t.latestFetchId;
}
function li(t, e, n, a, i) {
  let o = {};
  for (let r in t) {
    let s = t[r];
    e[r] ? o[r] = Tw(s, n, a, i) : o[r] = s;
  }
  return o;
}
function Tw(t, e, n, a) {
  let { options: i, calendarApi: o } = a, r = a.pluginHooks.eventSourceDefs[t.sourceDefId], s = wt();
  return r.fetch({
    eventSource: t,
    range: e,
    isRefetch: n,
    context: a
  }, (u) => {
    let { rawEvents: d } = u;
    i.eventSourceSuccess && (d = i.eventSourceSuccess.call(o, d, u.response) || d), t.success && (d = t.success.call(o, d, u.response) || d), a.dispatch({
      type: "RECEIVE_EVENTS",
      sourceId: t.sourceId,
      fetchId: s,
      fetchRange: e,
      rawEvents: d
    });
  }, (u) => {
    let d = !1;
    i.eventSourceFailure && (i.eventSourceFailure.call(o, u), d = !0), t.failure && (t.failure(u), d = !0), d || console.warn(u.message, u), a.dispatch({
      type: "RECEIVE_EVENT_ERROR",
      sourceId: t.sourceId,
      fetchId: s,
      fetchRange: e,
      error: u
    });
  }), Object.assign(Object.assign({}, t), { isFetching: !0, latestFetchId: s });
}
function Ew(t, e, n, a) {
  let i = t[e];
  return i && // not already removed
  n === i.latestFetchId ? Object.assign(Object.assign({}, t), { [e]: Object.assign(Object.assign({}, i), { isFetching: !1, fetchRange: a }) }) : t;
}
function Ds(t, e) {
  return _t(t, (n) => Is(n, e));
}
function Mw(t, e) {
  let n = Zr(e), a = [].concat(t.eventSources || []), i = [];
  t.initialEvents && a.unshift(t.initialEvents), t.events && a.unshift(t.events);
  for (let o of a) {
    let r = Qr(o, e, n);
    r && i.push(r);
  }
  return i;
}
function Is(t, e) {
  return !e.pluginHooks.eventSourceDefs[t.sourceDefId].ignoreRange;
}
function Nw(t, e) {
  switch (e.type) {
    case "UNSELECT_DATES":
      return null;
    case "SELECT_DATES":
      return e.selection;
    default:
      return t;
  }
}
function Dw(t, e) {
  switch (e.type) {
    case "UNSELECT_EVENT":
      return "";
    case "SELECT_EVENT":
      return e.eventInstanceId;
    default:
      return t;
  }
}
function Iw(t, e) {
  let n;
  switch (e.type) {
    case "UNSET_EVENT_DRAG":
      return null;
    case "SET_EVENT_DRAG":
      return n = e.state, {
        affectedEvents: n.affectedEvents,
        mutatedEvents: n.mutatedEvents,
        isEvent: n.isEvent
      };
    default:
      return t;
  }
}
function Ow(t, e) {
  let n;
  switch (e.type) {
    case "UNSET_EVENT_RESIZE":
      return null;
    case "SET_EVENT_RESIZE":
      return n = e.state, {
        affectedEvents: n.affectedEvents,
        mutatedEvents: n.mutatedEvents,
        isEvent: n.isEvent
      };
    default:
      return t;
  }
}
function Rw(t, e, n, a, i) {
  let o = t.headerToolbar ? yo(t.headerToolbar, t, e, n, a, i) : null, r = t.footerToolbar ? yo(t.footerToolbar, t, e, n, a, i) : null;
  return { header: o, footer: r };
}
function yo(t, e, n, a, i, o) {
  let r = {}, s = [], u = !1;
  for (let d in t) {
    let m = t[d], v = $w(m, e, n, a, i, o);
    r[d] = v.widgets, s.push(...v.viewsWithButtons), u = u || v.hasTitle;
  }
  return { sectionWidgets: r, viewsWithButtons: s, hasTitle: u };
}
function $w(t, e, n, a, i, o) {
  let r = e.direction === "rtl", s = e.customButtons || {}, u = n.buttonText || {}, d = e.buttonText || {}, m = n.buttonHints || {}, v = e.buttonHints || {}, p = t ? t.split(" ") : [], h = [], g = !1;
  return { widgets: p.map((b) => b.split(",").map((_) => {
    if (_ === "title")
      return g = !0, { buttonName: _ };
    let C, k, E, N, z, x;
    if (C = s[_])
      E = (W) => {
        C.click && C.click.call(W.target, W, W.target);
      }, (N = a.getCustomButtonIconClass(C)) || (N = a.getIconClass(_, r)) || (z = C.text), x = C.hint || C.text;
    else if (k = i[_]) {
      h.push(_), E = () => {
        o.changeView(_);
      }, (z = k.buttonTextOverride) || (N = a.getIconClass(_, r)) || (z = k.buttonTextDefault);
      let W = k.buttonTextOverride || k.buttonTextDefault;
      x = Wt(
        k.buttonTitleOverride || k.buttonTitleDefault || e.viewHint,
        [W, _],
        // view-name = buttonName
        W
      );
    } else if (o[_])
      if (E = () => {
        o[_]();
      }, (z = u[_]) || (N = a.getIconClass(_, r)) || (z = d[_]), _ === "prevYear" || _ === "nextYear") {
        let W = _ === "prevYear" ? "prev" : "next";
        x = Wt(m[W] || v[W], [
          d.year || "year",
          "year"
        ], d[_]);
      } else
        x = (W) => Wt(m[_] || v[_], [
          d[W] || W,
          W
        ], d[_]);
    return { buttonName: _, buttonClick: E, buttonIcon: N, buttonText: z, buttonHint: x };
  })), viewsWithButtons: h, hasTitle: g };
}
class xw {
  constructor(e, n, a) {
    this.type = e, this.getCurrentData = n, this.dateEnv = a;
  }
  get calendar() {
    return this.getCurrentData().calendarApi;
  }
  get title() {
    return this.getCurrentData().viewTitle;
  }
  get activeStart() {
    return this.dateEnv.toDate(this.getCurrentData().dateProfile.activeRange.start);
  }
  get activeEnd() {
    return this.dateEnv.toDate(this.getCurrentData().dateProfile.activeRange.end);
  }
  get currentStart() {
    return this.dateEnv.toDate(this.getCurrentData().dateProfile.currentRange.start);
  }
  get currentEnd() {
    return this.dateEnv.toDate(this.getCurrentData().dateProfile.currentRange.end);
  }
  getOption(e) {
    return this.getCurrentData().options[e];
  }
}
let Pw = {
  ignoreRange: !0,
  parseMeta(t) {
    return Array.isArray(t.events) ? t.events : null;
  },
  fetch(t, e) {
    e({
      rawEvents: t.eventSource.meta
    });
  }
};
const Fw = ft({
  name: "array-event-source",
  eventSourceDefs: [Pw]
});
let Bw = {
  parseMeta(t) {
    return typeof t.events == "function" ? t.events : null;
  },
  fetch(t, e, n) {
    const { dateEnv: a } = t.context, i = t.eventSource.meta;
    L_(i.bind(null, os(t.range, a)), (o) => e({ rawEvents: o }), n);
  }
};
const zw = ft({
  name: "func-event-source",
  eventSourceDefs: [Bw]
}), Lw = {
  method: String,
  extraParams: G,
  startParam: String,
  endParam: String,
  timeZoneParam: String
};
let Vw = {
  parseMeta(t) {
    return t.url && (t.format === "json" || !t.format) ? {
      url: t.url,
      format: "json",
      method: (t.method || "GET").toUpperCase(),
      extraParams: t.extraParams,
      startParam: t.startParam,
      endParam: t.endParam,
      timeZoneParam: t.timeZoneParam
    } : null;
  },
  fetch(t, e, n) {
    const { meta: a } = t.eventSource, i = jw(a, t.range, t.context);
    V_(a.method, a.url, i).then(([o, r]) => {
      e({ rawEvents: o, response: r });
    }, n);
  }
};
const Hw = ft({
  name: "json-event-source",
  eventSourceRefiners: Lw,
  eventSourceDefs: [Vw]
});
function jw(t, e, n) {
  let { dateEnv: a, options: i } = n, o, r, s, u, d = {};
  return o = t.startParam, o == null && (o = i.startParam), r = t.endParam, r == null && (r = i.endParam), s = t.timeZoneParam, s == null && (s = i.timeZoneParam), typeof t.extraParams == "function" ? u = t.extraParams() : u = t.extraParams || {}, Object.assign(d, u), d[o] = a.formatIso(e.start), d[r] = a.formatIso(e.end), a.timeZone !== "local" && (d[s] = a.timeZone), d;
}
const Uw = {
  daysOfWeek: G,
  startTime: ke,
  endTime: ke,
  duration: ke,
  startRecur: G,
  endRecur: G
};
let Ww = {
  parse(t, e) {
    if (t.daysOfWeek || t.startTime || t.endTime || t.startRecur || t.endRecur) {
      let n = {
        daysOfWeek: t.daysOfWeek || null,
        startTime: t.startTime || null,
        endTime: t.endTime || null,
        startRecur: t.startRecur ? e.createMarker(t.startRecur) : null,
        endRecur: t.endRecur ? e.createMarker(t.endRecur) : null,
        dateEnv: e
      }, a;
      return t.duration && (a = t.duration), !a && t.startTime && t.endTime && (a = Z0(t.endTime, t.startTime)), {
        allDayGuess: !t.startTime && !t.endTime,
        duration: a,
        typeData: n
        // doesn't need endTime anymore but oh well
      };
    }
    return null;
  },
  expand(t, e, n) {
    let a = Ft(e, { start: t.startRecur, end: t.endRecur });
    return a ? Gw(t.daysOfWeek, t.startTime, t.dateEnv, n, a) : [];
  }
};
const Yw = ft({
  name: "simple-recurring-event",
  recurringTypes: [Ww],
  eventRefiners: Uw
});
function Gw(t, e, n, a, i) {
  let o = t ? Br(t) : null, r = Ne(i.start), s = i.end, u = [];
  for (e && (e.milliseconds < 0 ? s = ze(s, 1) : e.milliseconds >= 1e3 * 60 * 60 * 24 && (r = ze(r, -1))); r < s; ) {
    let d;
    (!o || o[r.getUTCDay()]) && (e ? d = a.add(r, e) : d = r, u.push(a.createMarker(n.toDate(d)))), r = ze(r, 1);
  }
  return u;
}
const qw = ft({
  name: "change-handler",
  optionChangeHandlers: {
    events(t, e) {
      bo([t], e);
    },
    eventSources: bo
  }
});
function bo(t, e) {
  let n = Ga(e.getCurrentData().eventSources);
  if (n.length === 1 && t.length === 1 && Array.isArray(n[0]._raw) && Array.isArray(t[0])) {
    e.dispatch({
      type: "RESET_RAW_EVENTS",
      sourceId: n[0].sourceId,
      rawEvents: t[0]
    });
    return;
  }
  let a = [];
  for (let i of t) {
    let o = !1;
    for (let r = 0; r < n.length; r += 1)
      if (n[r]._raw === i) {
        n.splice(r, 1), o = !0;
        break;
      }
    o || a.push(i);
  }
  for (let i of n)
    e.dispatch({
      type: "REMOVE_EVENT_SOURCE",
      sourceId: i.sourceId
    });
  for (let i of a)
    e.calendarApi.addEventSource(i);
}
function Kw(t, e) {
  e.emitter.trigger("datesSet", Object.assign(Object.assign({}, os(t.activeRange, e.dateEnv)), { view: e.viewApi }));
}
function Qw(t, e) {
  let { emitter: n } = e;
  n.hasHandlers("eventsSet") && n.trigger("eventsSet", bt(t, e));
}
const Zw = [
  Fw,
  zw,
  Hw,
  Yw,
  qw,
  ft({
    name: "misc",
    isLoadingFuncs: [
      (t) => Es(t.eventSources)
    ],
    propSetHandlers: {
      dateProfile: Kw,
      eventStore: Qw
    }
  })
];
class Jw {
  constructor(e, n) {
    this.runTaskOption = e, this.drainedOption = n, this.queue = [], this.delayedRunner = new za(this.drain.bind(this));
  }
  request(e, n) {
    this.queue.push(e), this.delayedRunner.request(n);
  }
  pause(e) {
    this.delayedRunner.pause(e);
  }
  resume(e, n) {
    this.delayedRunner.resume(e, n);
  }
  drain() {
    let { queue: e } = this;
    for (; e.length; ) {
      let n = [], a;
      for (; a = e.shift(); )
        this.runTask(a), n.push(a);
      this.drained(n);
    }
  }
  runTask(e) {
    this.runTaskOption && this.runTaskOption(e);
  }
  drained(e) {
    this.drainedOption && this.drainedOption(e);
  }
}
function Xw(t, e, n) {
  let a;
  return /^(year|month)$/.test(t.currentRangeUnit) ? a = t.currentRange : a = t.activeRange, n.formatRange(a.start, a.end, Be(e.titleFormat || eA(t)), {
    isEndExclusive: t.isRangeAllDay,
    defaultSeparator: e.titleRangeSeparator
  });
}
function eA(t) {
  let { currentRangeUnit: e } = t;
  if (e === "year")
    return { year: "numeric" };
  if (e === "month")
    return { year: "numeric", month: "long" };
  let n = Tn(t.currentRange.start, t.currentRange.end);
  return n !== null && n > 1 ? { year: "numeric", month: "short", day: "numeric" } : { year: "numeric", month: "long", day: "numeric" };
}
class _o {
  constructor() {
    this.resetListeners = /* @__PURE__ */ new Set();
  }
  handleInput(e, n) {
    const a = this.dateEnv;
    if (e !== a && (typeof n == "function" ? this.nowFn = n : a || (this.nowAnchorDate = e.toDate(n ? e.createMarker(n) : e.createNowMarker()), this.nowAnchorQueried = Date.now()), this.dateEnv = e, a))
      for (const i of this.resetListeners.values())
        i();
  }
  getDateMarker() {
    return this.nowAnchorDate ? this.dateEnv.timestampToMarker(this.nowAnchorDate.valueOf() + (Date.now() - this.nowAnchorQueried)) : this.dateEnv.createMarker(this.nowFn());
  }
  addResetListener(e) {
    this.resetListeners.add(e);
  }
  removeResetListener(e) {
    this.resetListeners.delete(e);
  }
}
class tA {
  constructor(e) {
    this.computeCurrentViewData = Ce(this._computeCurrentViewData), this.organizeRawLocales = Ce(aw), this.buildLocale = Ce(Ss), this.buildPluginHooks = sw(), this.buildDateEnv = Ce(nA), this.buildTheme = Ce(aA), this.parseToolbars = Ce(Rw), this.buildViewSpecs = Ce(mw), this.buildDateProfileGenerator = yn(iA), this.buildViewApi = Ce(oA), this.buildViewUiProps = yn(lA), this.buildEventUiBySource = Ce(rA, Qe), this.buildEventUiBases = Ce(sA), this.parseContextBusinessHours = yn(uA), this.buildTitle = Ce(Xw), this.nowManager = new _o(), this.emitter = new jn(), this.actionRunner = new Jw(this._handleAction.bind(this), this.updateData.bind(this)), this.currentCalendarOptionsInput = {}, this.currentCalendarOptionsRefined = {}, this.currentViewOptionsInput = {}, this.currentViewOptionsRefined = {}, this.currentCalendarOptionsRefiners = {}, this.optionsForRefining = [], this.optionsForHandling = [], this.getCurrentData = () => this.data, this.dispatch = (p) => {
      this.actionRunner.request(p);
    }, this.props = e, this.actionRunner.pause(), this.nowManager = new _o();
    let n = {}, a = this.computeOptionsData(e.optionOverrides, n, e.calendarApi), i = a.calendarOptions.initialView || a.pluginHooks.initialView, o = this.computeCurrentViewData(i, a, e.optionOverrides, n);
    e.calendarApi.currentDataManager = this, this.emitter.setThisContext(e.calendarApi), this.emitter.setOptions(o.options);
    let r = {
      nowManager: this.nowManager,
      dateEnv: a.dateEnv,
      options: a.calendarOptions,
      pluginHooks: a.pluginHooks,
      calendarApi: e.calendarApi,
      dispatch: this.dispatch,
      emitter: this.emitter,
      getCurrentData: this.getCurrentData
    }, s = yw(a.calendarOptions, a.dateEnv, this.nowManager), u = o.dateProfileGenerator.build(s);
    lt(u.activeRange, s) || (s = u.currentRange.start);
    for (let p of a.pluginHooks.contextInit)
      p(r);
    let d = Cw(a.calendarOptions, u, r), m = {
      dynamicOptionOverrides: n,
      currentViewType: i,
      currentDate: s,
      dateProfile: u,
      businessHours: this.parseContextBusinessHours(r),
      eventSources: d,
      eventUiBases: {},
      eventStore: Ke(),
      renderableEventStore: Ke(),
      dateSelection: null,
      eventSelection: "",
      eventDrag: null,
      eventResize: null,
      selectionConfig: this.buildViewUiProps(r).selectionConfig
    }, v = Object.assign(Object.assign({}, r), m);
    for (let p of a.pluginHooks.reducers)
      Object.assign(m, p(null, null, v));
    fa(m, r) && this.emitter.trigger("loading", !0), this.state = m, this.updateData(), this.actionRunner.resume();
  }
  resetOptions(e, n) {
    let { props: a } = this;
    n === void 0 ? a.optionOverrides = e : (a.optionOverrides = Object.assign(Object.assign({}, a.optionOverrides || {}), e), this.optionsForRefining.push(...n)), (n === void 0 || n.length) && this.actionRunner.request({
      type: "NOTHING"
    });
  }
  _handleAction(e) {
    let { props: n, state: a, emitter: i } = this, o = bw(a.dynamicOptionOverrides, e), r = this.computeOptionsData(n.optionOverrides, o, n.calendarApi), s = pw(a.currentViewType, e), u = this.computeCurrentViewData(s, r, n.optionOverrides, o);
    n.calendarApi.currentDataManager = this, i.setThisContext(n.calendarApi), i.setOptions(u.options);
    let d = {
      nowManager: this.nowManager,
      dateEnv: r.dateEnv,
      options: r.calendarOptions,
      pluginHooks: r.pluginHooks,
      calendarApi: n.calendarApi,
      dispatch: this.dispatch,
      emitter: i,
      getCurrentData: this.getCurrentData
    }, { currentDate: m, dateProfile: v } = a;
    this.data && this.data.dateProfileGenerator !== u.dateProfileGenerator && (v = u.dateProfileGenerator.build(m)), m = gw(m, e), v = _w(v, e, m, u.dateProfileGenerator), (e.type === "PREV" || // TODO: move this logic into DateProfileGenerator
    e.type === "NEXT" || // "
    !lt(v.currentRange, m)) && (m = v.currentRange.start);
    let p = ww(a.eventSources, e, v, d), h = f_(a.eventStore, e, p, v, d), y = Es(p) && !u.options.progressiveEventRendering && a.renderableEventStore || h, { eventUiSingleBase: b, selectionConfig: _ } = this.buildViewUiProps(d), C = this.buildEventUiBySource(p), k = this.buildEventUiBases(y.defs, b, C), E = {
      dynamicOptionOverrides: o,
      currentViewType: s,
      currentDate: m,
      dateProfile: v,
      eventSources: p,
      eventStore: h,
      renderableEventStore: y,
      selectionConfig: _,
      eventUiBases: k,
      businessHours: this.parseContextBusinessHours(d),
      dateSelection: Nw(a.dateSelection, e),
      eventSelection: Dw(a.eventSelection, e),
      eventDrag: Iw(a.eventDrag, e),
      eventResize: Ow(a.eventResize, e)
    }, N = Object.assign(Object.assign({}, d), E);
    for (let W of r.pluginHooks.reducers)
      Object.assign(E, W(a, e, N));
    let z = fa(a, d), x = fa(E, d);
    !z && x ? i.trigger("loading", !0) : z && !x && i.trigger("loading", !1), this.state = E, n.onAction && n.onAction(e);
  }
  updateData() {
    let { props: e, state: n } = this, a = this.data, i = this.computeOptionsData(e.optionOverrides, n.dynamicOptionOverrides, e.calendarApi), o = this.computeCurrentViewData(n.currentViewType, i, e.optionOverrides, n.dynamicOptionOverrides), r = this.data = Object.assign(Object.assign(Object.assign({ nowManager: this.nowManager, viewTitle: this.buildTitle(n.dateProfile, o.options, i.dateEnv), calendarApi: e.calendarApi, dispatch: this.dispatch, emitter: this.emitter, getCurrentData: this.getCurrentData }, i), o), n), s = i.pluginHooks.optionChangeHandlers, u = a && a.calendarOptions, d = i.calendarOptions;
    if (u && u !== d) {
      u.timeZone !== d.timeZone && (n.eventSources = r.eventSources = Aw(r.eventSources, n.dateProfile, r), n.eventStore = r.eventStore = oo(r.eventStore, a.dateEnv, r.dateEnv), n.renderableEventStore = r.renderableEventStore = oo(r.renderableEventStore, a.dateEnv, r.dateEnv));
      for (let m in s)
        (this.optionsForHandling.indexOf(m) !== -1 || u[m] !== d[m]) && s[m](d[m], r);
    }
    this.optionsForHandling = [], e.onData && e.onData(r);
  }
  computeOptionsData(e, n, a) {
    if (!this.optionsForRefining.length && e === this.stableOptionOverrides && n === this.stableDynamicOptionOverrides)
      return this.stableCalendarOptionsData;
    let { refinedOptions: i, pluginHooks: o, localeDefaults: r, availableLocaleData: s, extra: u } = this.processRawCalendarOptions(e, n);
    Co(u);
    let d = this.buildDateEnv(i.timeZone, i.locale, i.weekNumberCalculation, i.firstDay, i.weekText, o, s, i.defaultRangeSeparator), m = this.buildViewSpecs(o.views, this.stableOptionOverrides, this.stableDynamicOptionOverrides, r), v = this.buildTheme(i, o), p = this.parseToolbars(i, this.stableOptionOverrides, v, m, a);
    return this.stableCalendarOptionsData = {
      calendarOptions: i,
      pluginHooks: o,
      dateEnv: d,
      viewSpecs: m,
      theme: v,
      toolbarConfig: p,
      localeDefaults: r,
      availableRawLocales: s.map
    };
  }
  // always called from behind a memoizer
  processRawCalendarOptions(e, n) {
    let { locales: a, locale: i } = ia([
      Yt,
      e,
      n
    ]), o = this.organizeRawLocales(a), r = o.map, s = this.buildLocale(i || o.defaultCode, r).options, u = this.buildPluginHooks(e.plugins || [], Zw), d = this.currentCalendarOptionsRefiners = Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, Ji), Xi), eo), u.listenerRefiners), u.optionRefiners), m = {}, v = ia([
      Yt,
      s,
      e,
      n
    ]), p = {}, h = this.currentCalendarOptionsInput, g = this.currentCalendarOptionsRefined, y = !1;
    for (let b in v)
      this.optionsForRefining.indexOf(b) === -1 && (v[b] === h[b] || ht[b] && b in h && ht[b](h[b], v[b])) ? p[b] = g[b] : d[b] ? (p[b] = d[b](v[b]), y = !0) : m[b] = h[b];
    return y && (this.currentCalendarOptionsInput = v, this.currentCalendarOptionsRefined = p, this.stableOptionOverrides = e, this.stableDynamicOptionOverrides = n), this.optionsForHandling.push(...this.optionsForRefining), this.optionsForRefining = [], {
      rawOptions: this.currentCalendarOptionsInput,
      refinedOptions: this.currentCalendarOptionsRefined,
      pluginHooks: u,
      availableLocaleData: o,
      localeDefaults: s,
      extra: m
    };
  }
  _computeCurrentViewData(e, n, a, i) {
    let o = n.viewSpecs[e];
    if (!o)
      throw new Error(`viewType "${e}" is not available. Please make sure you've loaded all neccessary plugins`);
    let { refinedOptions: r, extra: s } = this.processRawViewOptions(o, n.pluginHooks, n.localeDefaults, a, i);
    Co(s), this.nowManager.handleInput(n.dateEnv, r.now);
    let u = this.buildDateProfileGenerator({
      dateProfileGeneratorClass: o.optionDefaults.dateProfileGeneratorClass,
      nowManager: this.nowManager,
      duration: o.duration,
      durationUnit: o.durationUnit,
      usesMinMaxTime: o.optionDefaults.usesMinMaxTime,
      dateEnv: n.dateEnv,
      calendarApi: this.props.calendarApi,
      slotMinTime: r.slotMinTime,
      slotMaxTime: r.slotMaxTime,
      showNonCurrentDates: r.showNonCurrentDates,
      dayCount: r.dayCount,
      dateAlignment: r.dateAlignment,
      dateIncrement: r.dateIncrement,
      hiddenDays: r.hiddenDays,
      weekends: r.weekends,
      validRangeInput: r.validRange,
      visibleRangeInput: r.visibleRange,
      fixedWeekCount: r.fixedWeekCount
    }), d = this.buildViewApi(e, this.getCurrentData, n.dateEnv);
    return { viewSpec: o, options: r, dateProfileGenerator: u, viewApi: d };
  }
  processRawViewOptions(e, n, a, i, o) {
    let r = ia([
      Yt,
      e.optionDefaults,
      a,
      i,
      e.optionOverrides,
      o
    ]), s = Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, Ji), Xi), eo), N1), n.listenerRefiners), n.optionRefiners), u = {}, d = this.currentViewOptionsInput, m = this.currentViewOptionsRefined, v = !1, p = {};
    for (let h in r)
      r[h] === d[h] || ht[h] && ht[h](r[h], d[h]) ? u[h] = m[h] : (r[h] === this.currentCalendarOptionsInput[h] || ht[h] && ht[h](r[h], this.currentCalendarOptionsInput[h]) ? h in this.currentCalendarOptionsRefined && (u[h] = this.currentCalendarOptionsRefined[h]) : s[h] ? u[h] = s[h](r[h]) : p[h] = r[h], v = !0);
    return v && (this.currentViewOptionsInput = r, this.currentViewOptionsRefined = u), {
      rawOptions: this.currentViewOptionsInput,
      refinedOptions: this.currentViewOptionsRefined,
      extra: p
    };
  }
}
function nA(t, e, n, a, i, o, r, s) {
  let u = Ss(e || r.defaultCode, r.map);
  return new L1({
    calendarSystem: "gregory",
    timeZone: t,
    namedTimeZoneImpl: o.namedTimeZonedImpl,
    locale: u,
    weekNumberCalculation: n,
    firstDay: a,
    weekText: i,
    cmdFormatter: o.cmdFormatter,
    defaultSeparator: s
  });
}
function aA(t, e) {
  let n = e.themeClasses[t.themeSystem] || mt;
  return new n(t);
}
function iA(t) {
  let e = t.dateProfileGeneratorClass || Yr;
  return new e(t);
}
function oA(t, e, n) {
  return new xw(t, e, n);
}
function rA(t) {
  return At(t, (e) => e.ui);
}
function sA(t, e, n) {
  let a = { "": e };
  for (let i in t) {
    let o = t[i];
    o.sourceId && n[o.sourceId] && (a[i] = n[o.sourceId]);
  }
  return a;
}
function lA(t) {
  let { options: e } = t;
  return {
    eventUiSingleBase: On({
      display: e.eventDisplay,
      editable: e.editable,
      startEditable: e.eventStartEditable,
      durationEditable: e.eventDurationEditable,
      constraint: e.eventConstraint,
      overlap: typeof e.eventOverlap == "boolean" ? e.eventOverlap : void 0,
      allow: e.eventAllow,
      backgroundColor: e.eventBackgroundColor,
      borderColor: e.eventBorderColor,
      textColor: e.eventTextColor,
      color: e.eventColor
      // classNames: options.eventClassNames // render hook will handle this
    }, t),
    selectionConfig: On({
      constraint: e.selectConstraint,
      overlap: typeof e.selectOverlap == "boolean" ? e.selectOverlap : void 0,
      allow: e.selectAllow
    }, t)
  };
}
function fa(t, e) {
  for (let n of e.pluginHooks.isLoadingFuncs)
    if (n(t))
      return !0;
  return !1;
}
function uA(t) {
  return C_(t.options.businessHours, t);
}
function Co(t, e) {
  for (let n in t)
    console.warn(`Unknown option '${n}'`);
}
class cA extends Ie {
  render() {
    let e = this.props.widgetGroups.map((n) => this.renderWidgetGroup(n));
    return q("div", { className: "fc-toolbar-chunk" }, ...e);
  }
  renderWidgetGroup(e) {
    let { props: n } = this, { theme: a } = this.context, i = [], o = !0;
    for (let r of e) {
      let { buttonName: s, buttonClick: u, buttonText: d, buttonIcon: m, buttonHint: v } = r;
      if (s === "title")
        o = !1, i.push(q("h2", { className: "fc-toolbar-title", id: n.titleId }, n.title));
      else {
        let p = s === n.activeButton, h = !n.isTodayEnabled && s === "today" || !n.isPrevEnabled && s === "prev" || !n.isNextEnabled && s === "next", g = [`fc-${s}-button`, a.getClass("button")];
        p && g.push(a.getClass("buttonActive")), i.push(q("button", { type: "button", title: typeof v == "function" ? v(n.navUnit) : v, disabled: h, "aria-pressed": p, className: g.join(" "), onClick: u }, d || (m ? q("span", { className: m, role: "img" }) : "")));
      }
    }
    if (i.length > 1) {
      let r = o && a.getClass("buttonGroup") || "";
      return q("div", { className: r }, ...i);
    }
    return i[0];
  }
}
class wo extends Ie {
  render() {
    let { model: e, extraClassName: n } = this.props, a = !1, i, o, r = e.sectionWidgets, s = r.center;
    return r.left ? (a = !0, i = r.left) : i = r.start, r.right ? (a = !0, o = r.right) : o = r.end, q(
      "div",
      { className: [
        n || "",
        "fc-toolbar",
        a ? "fc-toolbar-ltr" : ""
      ].join(" ") },
      this.renderSection("start", i || []),
      this.renderSection("center", s || []),
      this.renderSection("end", o || [])
    );
  }
  renderSection(e, n) {
    let { props: a } = this;
    return q(cA, { key: e, widgetGroups: n, title: a.title, navUnit: a.navUnit, activeButton: a.activeButton, isTodayEnabled: a.isTodayEnabled, isPrevEnabled: a.isPrevEnabled, isNextEnabled: a.isNextEnabled, titleId: a.titleId });
  }
}
class dA extends Ie {
  constructor() {
    super(...arguments), this.state = {
      availableWidth: null
    }, this.handleEl = (e) => {
      this.el = e, Je(this.props.elRef, e), this.updateAvailableWidth();
    }, this.handleResize = () => {
      this.updateAvailableWidth();
    };
  }
  render() {
    let { props: e, state: n } = this, { aspectRatio: a } = e, i = [
      "fc-view-harness",
      a || e.liquid || e.height ? "fc-view-harness-active" : "fc-view-harness-passive"
      // let the view do the height
    ], o = "", r = "";
    return a ? n.availableWidth !== null ? o = n.availableWidth / a : r = `${1 / a * 100}%` : o = e.height || "", q("div", { "aria-labelledby": e.labeledById, ref: this.handleEl, className: i.join(" "), style: { height: o, paddingBottom: r } }, e.children);
  }
  componentDidMount() {
    this.context.addResizeHandler(this.handleResize);
  }
  componentWillUnmount() {
    this.context.removeResizeHandler(this.handleResize);
  }
  updateAvailableWidth() {
    this.el && // needed. but why?
    this.props.aspectRatio && this.setState({ availableWidth: this.el.offsetWidth });
  }
}
class fA extends Ht {
  constructor(e) {
    super(e), this.handleSegClick = (n, a) => {
      let { component: i } = this, { context: o } = i, r = Bt(a);
      if (r && // might be the <div> surrounding the more link
      i.isValidSegDownEl(n.target)) {
        let s = Le(n.target, ".fc-event-forced-url"), u = s ? s.querySelector("a[href]").href : "";
        o.emitter.trigger("eventClick", {
          el: a,
          event: new De(i.context, r.eventRange.def, r.eventRange.instance),
          jsEvent: n,
          view: o.viewApi
        }), u && !n.defaultPrevented && (window.location.href = u);
      }
    }, this.destroy = $r(
      e.el,
      "click",
      ".fc-event",
      // on both fg and bg events
      this.handleSegClick
    );
  }
}
class mA extends Ht {
  constructor(e) {
    super(e), this.handleEventElRemove = (n) => {
      n === this.currentSegEl && this.handleSegLeave(null, this.currentSegEl);
    }, this.handleSegEnter = (n, a) => {
      Bt(a) && (this.currentSegEl = a, this.triggerEvent("eventMouseEnter", n, a));
    }, this.handleSegLeave = (n, a) => {
      this.currentSegEl && (this.currentSegEl = null, this.triggerEvent("eventMouseLeave", n, a));
    }, this.removeHoverListeners = P0(
      e.el,
      ".fc-event",
      // on both fg and bg events
      this.handleSegEnter,
      this.handleSegLeave
    );
  }
  destroy() {
    this.removeHoverListeners();
  }
  triggerEvent(e, n, a) {
    let { component: i } = this, { context: o } = i, r = Bt(a);
    (!n || i.isValidSegDownEl(n.target)) && o.emitter.trigger(e, {
      el: a,
      event: new De(o, r.eventRange.def, r.eventRange.instance),
      jsEvent: n,
      view: o.viewApi
    });
  }
}
class hA extends St {
  constructor() {
    super(...arguments), this.buildViewContext = Ce(j1), this.buildViewPropTransformers = Ce(pA), this.buildToolbarProps = Ce(vA), this.headerRef = nt(), this.footerRef = nt(), this.interactionsStore = {}, this.state = {
      viewLabelId: zn()
    }, this.registerInteractiveComponent = (e, n) => {
      let a = U_(e, n), r = [
        fA,
        mA
      ].concat(this.props.pluginHooks.componentInteractions).map((s) => new s(a));
      this.interactionsStore[e.uid] = r, wa[e.uid] = a;
    }, this.unregisterInteractiveComponent = (e) => {
      let n = this.interactionsStore[e.uid];
      if (n) {
        for (let a of n)
          a.destroy();
        delete this.interactionsStore[e.uid];
      }
      delete wa[e.uid];
    }, this.resizeRunner = new za(() => {
      this.props.emitter.trigger("_resize", !0), this.props.emitter.trigger("windowResize", { view: this.props.viewApi });
    }), this.handleWindowResize = (e) => {
      let { options: n } = this.props;
      n.handleWindowResize && e.target === window && this.resizeRunner.request(n.windowResizeDelay);
    };
  }
  /*
  renders INSIDE of an outer div
  */
  render() {
    let { props: e } = this, { toolbarConfig: n, options: a } = e, i = !1, o = "", r;
    e.isHeightAuto || e.forPrint ? o = "" : a.height != null ? i = !0 : a.contentHeight != null ? o = a.contentHeight : r = Math.max(a.aspectRatio, 0.5);
    let s = this.buildViewContext(e.viewSpec, e.viewApi, e.options, e.dateProfileGenerator, e.dateEnv, e.nowManager, e.theme, e.pluginHooks, e.dispatch, e.getCurrentData, e.emitter, e.calendarApi, this.registerInteractiveComponent, this.unregisterInteractiveComponent), u = n.header && n.header.hasTitle ? this.state.viewLabelId : void 0;
    return q(
      kt.Provider,
      { value: s },
      q(Un, { unit: "day" }, (d) => {
        let m = this.buildToolbarProps(e.viewSpec, e.dateProfile, e.dateProfileGenerator, e.currentDate, d, e.viewTitle);
        return q(
          Re,
          null,
          n.header && q(wo, Object.assign({ ref: this.headerRef, extraClassName: "fc-header-toolbar", model: n.header, titleId: u }, m)),
          q(
            dA,
            { liquid: i, height: o, aspectRatio: r, labeledById: u },
            this.renderView(e),
            this.buildAppendContent()
          ),
          n.footer && q(wo, Object.assign({ ref: this.footerRef, extraClassName: "fc-footer-toolbar", model: n.footer, titleId: "" }, m))
        );
      })
    );
  }
  componentDidMount() {
    let { props: e } = this;
    this.calendarInteractions = e.pluginHooks.calendarInteractions.map((a) => new a(e)), window.addEventListener("resize", this.handleWindowResize);
    let { propSetHandlers: n } = e.pluginHooks;
    for (let a in n)
      n[a](e[a], e);
  }
  componentDidUpdate(e) {
    let { props: n } = this, { propSetHandlers: a } = n.pluginHooks;
    for (let i in a)
      n[i] !== e[i] && a[i](n[i], n);
  }
  componentWillUnmount() {
    window.removeEventListener("resize", this.handleWindowResize), this.resizeRunner.clear();
    for (let e of this.calendarInteractions)
      e.destroy();
    this.props.emitter.trigger("_unmount");
  }
  buildAppendContent() {
    let { props: e } = this, n = e.pluginHooks.viewContainerAppends.map((a) => a(e));
    return q(Re, {}, ...n);
  }
  renderView(e) {
    let { pluginHooks: n } = e, { viewSpec: a } = e, i = {
      dateProfile: e.dateProfile,
      businessHours: e.businessHours,
      eventStore: e.renderableEventStore,
      eventUiBases: e.eventUiBases,
      dateSelection: e.dateSelection,
      eventSelection: e.eventSelection,
      eventDrag: e.eventDrag,
      eventResize: e.eventResize,
      isHeightAuto: e.isHeightAuto,
      forPrint: e.forPrint
    }, o = this.buildViewPropTransformers(n.viewPropsTransformers);
    for (let s of o)
      Object.assign(i, s.transform(i, e));
    let r = a.component;
    return q(r, Object.assign({}, i));
  }
}
function vA(t, e, n, a, i, o) {
  let r = n.build(i, void 0, !1), s = n.buildPrev(e, a, !1), u = n.buildNext(e, a, !1);
  return {
    title: o,
    activeButton: t.type,
    navUnit: t.singleUnit,
    isTodayEnabled: r.isValid && !lt(e.currentRange, i),
    isPrevEnabled: s.isValid,
    isNextEnabled: u.isValid
  };
}
function pA(t) {
  return t.map((e) => new e());
}
class gA extends Y_ {
  constructor(e, n = {}) {
    super(), this.isRendering = !1, this.isRendered = !1, this.currentClassNames = [], this.customContentRenderId = 0, this.handleAction = (a) => {
      switch (a.type) {
        case "SET_EVENT_DRAG":
        case "SET_EVENT_RESIZE":
          this.renderRunner.tryDrain();
      }
    }, this.handleData = (a) => {
      this.currentData = a, this.renderRunner.request(a.calendarOptions.rerenderDelay);
    }, this.handleRenderRequest = () => {
      if (this.isRendering) {
        this.isRendered = !0;
        let { currentData: a } = this;
        Dn(() => {
          Zt(q(j_, { options: a.calendarOptions, theme: a.theme, emitter: a.emitter }, (i, o, r, s) => (this.setClassNames(i), this.setHeight(o), q(
            Hr.Provider,
            { value: this.customContentRenderId },
            q(hA, Object.assign({ isHeightAuto: r, forPrint: s }, a))
          ))), this.el);
        });
      } else this.isRendered && (this.isRendered = !1, Zt(null, this.el), this.setClassNames([]), this.setHeight(""));
    }, E0(e), this.el = e, this.renderRunner = new za(this.handleRenderRequest), new tA({
      optionOverrides: n,
      calendarApi: this,
      onAction: this.handleAction,
      onData: this.handleData
    });
  }
  render() {
    let e = this.isRendering;
    e ? this.customContentRenderId += 1 : this.isRendering = !0, this.renderRunner.request(), e && this.updateSize();
  }
  destroy() {
    this.isRendering && (this.isRendering = !1, this.renderRunner.request());
  }
  updateSize() {
    Dn(() => {
      super.updateSize();
    });
  }
  batchRendering(e) {
    this.renderRunner.pause("batchRendering"), e(), this.renderRunner.resume("batchRendering");
  }
  pauseRendering() {
    this.renderRunner.pause("pauseRendering");
  }
  resumeRendering() {
    this.renderRunner.resume("pauseRendering", !0);
  }
  resetOptions(e, n) {
    this.currentDataManager.resetOptions(e, n);
  }
  setClassNames(e) {
    if (!ct(e, this.currentClassNames)) {
      let { classList: n } = this.el;
      for (let a of this.currentClassNames)
        n.remove(a);
      for (let a of e)
        n.add(a);
      this.currentClassNames = e;
    }
  }
  setHeight(e) {
    Or(this.el, "height", e);
  }
}
const yA = {
  headerToolbar: !0,
  footerToolbar: !0,
  events: !0,
  eventSources: !0,
  resources: !0
}, bA = le({
  props: {
    options: Object
  },
  data() {
    return {
      renderId: 0,
      customRenderingMap: /* @__PURE__ */ new Map()
    };
  },
  methods: {
    getApi() {
      return this.calendar;
    },
    buildOptions(t) {
      return {
        ...t,
        customRenderingMetaMap: wA(this.$slots),
        handleCustomRendering: this.handleCustomRendering
      };
    }
  },
  render() {
    const t = [];
    for (const e of this.customRenderingMap.values())
      t.push(yt(_A, {
        key: e.id,
        customRendering: e
      }));
    return yt("div", {
      // when renderId is changed, Vue will trigger a real-DOM async rerender, calling beforeUpdate/updated
      attrs: { "data-fc-render-id": this.renderId }
    }, yt(L, t));
  },
  mounted() {
    const t = new tw();
    this.handleCustomRendering = t.handle.bind(t);
    const e = this.buildOptions(this.options), n = new gA(this.$el, e);
    this.calendar = n, n.render(), t.subscribe((a) => {
      this.customRenderingMap = a, this.renderId++, this.needCustomRenderingResize = !0;
    });
  },
  beforeUpdate() {
    this.getApi().resumeRendering();
  },
  updated() {
    this.needCustomRenderingResize && (this.needCustomRenderingResize = !1, this.getApi().updateSize());
  },
  beforeUnmount() {
    this.getApi().destroy();
  },
  watch: CA()
}), _A = le({
  props: {
    customRendering: Object
  },
  render() {
    const t = this.customRendering, e = typeof t.generatorMeta == "function" ? t.generatorMeta(t.renderProps) : (
      // vue-normalized slot function
      t.generatorMeta
    );
    return yt(Ee, { to: t.containerEl }, e);
  }
});
function CA() {
  let t = {
    // watches changes of ALL options and their nested objects,
    // but this is only a means to be notified of top-level non-complex options changes.
    options: {
      deep: !0,
      handler(e) {
        let n = this.getApi();
        n.pauseRendering();
        let a = this.buildOptions(e);
        n.resetOptions(a), this.renderId++;
      }
    }
  };
  for (let e in yA)
    t[`options.${e}`] = {
      deep: !0,
      handler(n) {
        if (n !== void 0) {
          let a = this.getApi();
          a.pauseRendering(), a.resetOptions({
            [e]: n
          }, [e]), this.renderId++;
        }
      }
    };
  return t;
}
function wA(t) {
  const e = {};
  for (const n in t)
    e[AA(n)] = t[n];
  return e;
}
function AA(t) {
  return t.split("-").map((e, n) => n ? kA(e) : e).join("");
}
function kA(t) {
  return t.charAt(0).toUpperCase() + t.slice(1);
}
class SA extends Tt {
  constructor() {
    super(...arguments), this.headerElRef = nt();
  }
  renderSimpleLayout(e, n) {
    let { props: a, context: i } = this, o = [], r = mo(i.options);
    return e && o.push({
      type: "header",
      key: "header",
      isSticky: r,
      chunk: {
        elRef: this.headerElRef,
        tableClassName: "fc-col-header",
        rowContent: e
      }
    }), o.push({
      type: "body",
      key: "body",
      liquid: !0,
      chunk: { content: n }
    }), q(
      to,
      { elClasses: ["fc-daygrid"], viewSpec: i.viewSpec },
      q(bs, { liquid: !a.isHeightAuto && !a.forPrint, collapsibleWidth: a.forPrint, cols: [], sections: o })
    );
  }
  renderHScrollLayout(e, n, a, i) {
    let o = this.context.pluginHooks.scrollGridImpl;
    if (!o)
      throw new Error("No ScrollGrid implementation");
    let { props: r, context: s } = this, u = !r.forPrint && mo(s.options), d = !r.forPrint && PC(s.options), m = [];
    return e && m.push({
      type: "header",
      key: "header",
      isSticky: u,
      chunks: [{
        key: "main",
        elRef: this.headerElRef,
        tableClassName: "fc-col-header",
        rowContent: e
      }]
    }), m.push({
      type: "body",
      key: "body",
      liquid: !0,
      chunks: [{
        key: "main",
        content: n
      }]
    }), d && m.push({
      type: "footer",
      key: "footer",
      isSticky: !0,
      chunks: [{
        key: "main",
        content: xC
      }]
    }), q(
      to,
      { elClasses: ["fc-daygrid"], viewSpec: s.viewSpec },
      q(o, { liquid: !r.isHeightAuto && !r.forPrint, forPrint: r.forPrint, collapsibleWidth: r.forPrint, colGroups: [{ cols: [{ span: a, minWidth: i }] }], sections: m })
    );
  }
}
function _n(t, e) {
  let n = [];
  for (let a = 0; a < e; a += 1)
    n[a] = [];
  for (let a of t)
    n[a.row].push(a);
  return n;
}
function mn(t, e) {
  let n = [];
  for (let a = 0; a < e; a += 1)
    n[a] = [];
  for (let a of t)
    n[a.firstCol].push(a);
  return n;
}
function Ao(t, e) {
  let n = [];
  if (t) {
    for (let a = 0; a < e; a += 1)
      n[a] = {
        affectedInstances: t.affectedInstances,
        isEvent: t.isEvent,
        segs: []
      };
    for (let a of t.segs)
      n[a.row].segs.push(a);
  } else
    for (let a = 0; a < e; a += 1)
      n[a] = null;
  return n;
}
const Os = Be({
  hour: "numeric",
  minute: "2-digit",
  omitZeroMinute: !0,
  meridiem: "narrow"
});
function Rs(t) {
  let { display: e } = t.eventRange.ui;
  return e === "list-item" || e === "auto" && !t.eventRange.def.allDay && t.firstCol === t.lastCol && // can't be multi-day
  t.isStart && // "
  t.isEnd;
}
class $s extends Ie {
  render() {
    let { props: e } = this;
    return q(_s, Object.assign({}, e, { elClasses: ["fc-daygrid-event", "fc-daygrid-block-event", "fc-h-event"], defaultTimeFormat: Os, defaultDisplayEventEnd: e.defaultDisplayEventEnd, disableResizing: !e.seg.eventRange.def.allDay }));
  }
}
class xs extends Ie {
  render() {
    let { props: e, context: n } = this, { options: a } = n, { seg: i } = e, o = a.eventTimeFormat || Os, r = as(i, o, n, !0, e.defaultDisplayEventEnd);
    return q(si, Object.assign({}, e, { elTag: "a", elClasses: ["fc-daygrid-event", "fc-daygrid-dot-event"], elAttrs: is(e.seg, n), defaultGenerator: TA, timeText: r, isResizing: !1, isDateSelecting: !1 }));
  }
}
function TA(t) {
  return q(
    Re,
    null,
    q("div", { className: "fc-daygrid-event-dot", style: { borderColor: t.borderColor || t.backgroundColor } }),
    t.timeText && q("div", { className: "fc-event-time" }, t.timeText),
    q("div", { className: "fc-event-title" }, t.event.title || q(Re, null, " "))
  );
}
class EA extends Ie {
  constructor() {
    super(...arguments), this.compileSegs = Ce(MA);
  }
  render() {
    let { props: e } = this, { allSegs: n, invisibleSegs: a } = this.compileSegs(e.singlePlacements);
    return q(qC, { elClasses: ["fc-daygrid-more-link"], dateProfile: e.dateProfile, todayRange: e.todayRange, allDayDate: e.allDayDate, moreCnt: e.moreCnt, allSegs: n, hiddenSegs: a, alignmentElRef: e.alignmentElRef, alignGridTop: e.alignGridTop, extraDateSpan: e.extraDateSpan, popoverContent: () => {
      let i = (e.eventDrag ? e.eventDrag.affectedInstances : null) || (e.eventResize ? e.eventResize.affectedInstances : null) || {};
      return q(Re, null, n.map((o) => {
        let r = o.eventRange.instance.instanceId;
        return q("div", { className: "fc-daygrid-event-harness", key: r, style: {
          visibility: i[r] ? "hidden" : ""
        } }, Rs(o) ? q(xs, Object.assign({ seg: o, isDragging: !1, isSelected: r === e.eventSelection, defaultDisplayEventEnd: !1 }, Gt(o, e.todayRange))) : q($s, Object.assign({ seg: o, isDragging: !1, isResizing: !1, isDateSelecting: !1, isSelected: r === e.eventSelection, defaultDisplayEventEnd: !1 }, Gt(o, e.todayRange))));
      }));
    } });
  }
}
function MA(t) {
  let e = [], n = [];
  for (let a of t)
    e.push(a.seg), a.isVisible || n.push(a.seg);
  return { allSegs: e, invisibleSegs: n };
}
const NA = Be({ week: "narrow" });
class DA extends Tt {
  constructor() {
    super(...arguments), this.rootElRef = nt(), this.state = {
      dayNumberId: zn()
    }, this.handleRootEl = (e) => {
      Je(this.rootElRef, e), Je(this.props.elRef, e);
    };
  }
  render() {
    let { context: e, props: n, state: a, rootElRef: i } = this, { options: o, dateEnv: r } = e, { date: s, dateProfile: u } = n;
    const d = n.showDayNumber && OA(s, u.currentRange, r);
    return q(Cs, { elTag: "td", elRef: this.handleRootEl, elClasses: [
      "fc-daygrid-day",
      ...n.extraClassNames || []
    ], elAttrs: Object.assign(Object.assign(Object.assign({}, n.extraDataAttrs), n.showDayNumber ? { "aria-labelledby": a.dayNumberId } : {}), { role: "gridcell" }), defaultGenerator: IA, date: s, dateProfile: u, todayRange: n.todayRange, showDayNumber: n.showDayNumber, isMonthStart: d, extraRenderProps: n.extraRenderProps }, (m, v) => q(
      "div",
      { ref: n.innerElRef, className: "fc-daygrid-day-frame fc-scrollgrid-sync-inner", style: { minHeight: n.minHeight } },
      n.showWeekNumber && q(UC, { elTag: "a", elClasses: ["fc-daygrid-week-number"], elAttrs: Aa(e, s, "week"), date: s, defaultFormat: NA }),
      !v.isDisabled && (n.showDayNumber || ws(o) || n.forceDayTop) ? q(
        "div",
        { className: "fc-daygrid-day-top" },
        q(m, { elTag: "a", elClasses: [
          "fc-daygrid-day-number",
          d && "fc-daygrid-month-start"
        ], elAttrs: Object.assign(Object.assign({}, Aa(e, s)), { id: a.dayNumberId }) })
      ) : n.showDayNumber ? (
        // for creating correct amount of space (see issue #7162)
        q(
          "div",
          { className: "fc-daygrid-day-top", style: { visibility: "hidden" } },
          q("a", { className: "fc-daygrid-day-number" }, " ")
        )
      ) : void 0,
      q(
        "div",
        { className: "fc-daygrid-day-events", ref: n.fgContentElRef },
        n.fgContent,
        q(
          "div",
          { className: "fc-daygrid-day-bottom", style: { marginTop: n.moreMarginTop } },
          q(EA, { allDayDate: s, singlePlacements: n.singlePlacements, moreCnt: n.moreCnt, alignmentElRef: i, alignGridTop: !n.showDayNumber, extraDateSpan: n.extraDateSpan, dateProfile: n.dateProfile, eventSelection: n.eventSelection, eventDrag: n.eventDrag, eventResize: n.eventResize, todayRange: n.todayRange })
        )
      ),
      q("div", { className: "fc-daygrid-day-bg" }, n.bgContent)
    ));
  }
}
function IA(t) {
  return t.dayNumberText || q(Re, null, " ");
}
function OA(t, e, n) {
  const { start: a, end: i } = e, o = dt(i, -1), r = n.getYear(a), s = n.getMonth(a), u = n.getYear(o), d = n.getMonth(o);
  return !(r === u && s === d) && // first date in current view?
  (t.valueOf() === a.valueOf() || // a month-start that's within the current range?
  n.getDay(t) === 1 && t.valueOf() < i.valueOf());
}
function Ps(t) {
  return t.eventRange.instance.instanceId + ":" + t.firstCol;
}
function Fs(t) {
  return Ps(t) + ":" + t.lastCol;
}
function RA(t, e, n, a, i, o, r) {
  let s = new PA((_) => {
    let C = t[_.index].eventRange.instance.instanceId + ":" + _.span.start + ":" + (_.span.end - 1);
    return i[C] || 1;
  });
  s.allowReslicing = !0, s.strictOrder = a, e === !0 || n === !0 ? (s.maxCoord = o, s.hiddenConsumes = !0) : typeof e == "number" ? s.maxStackCnt = e : typeof n == "number" && (s.maxStackCnt = n, s.hiddenConsumes = !0);
  let u = [], d = [];
  for (let _ = 0; _ < t.length; _ += 1) {
    let C = t[_], k = Fs(C);
    i[k] != null ? u.push({
      index: _,
      span: {
        start: C.firstCol,
        end: C.lastCol + 1
      }
    }) : d.push(C);
  }
  let m = s.addSegs(u), v = s.toRects(), { singleColPlacements: p, multiColPlacements: h, leftoverMargins: g } = $A(v, t, r), y = [], b = [];
  for (let _ of d) {
    h[_.firstCol].push({
      seg: _,
      isVisible: !1,
      isAbsolute: !0,
      absoluteTop: 0,
      marginTop: 0
    });
    for (let C = _.firstCol; C <= _.lastCol; C += 1)
      p[C].push({
        seg: $t(_, C, C + 1, r),
        isVisible: !1,
        isAbsolute: !1,
        absoluteTop: 0,
        marginTop: 0
      });
  }
  for (let _ = 0; _ < r.length; _ += 1)
    y.push(0);
  for (let _ of m) {
    let C = t[_.index], k = _.span;
    h[k.start].push({
      seg: $t(C, k.start, k.end, r),
      isVisible: !1,
      isAbsolute: !0,
      absoluteTop: 0,
      marginTop: 0
    });
    for (let E = k.start; E < k.end; E += 1)
      y[E] += 1, p[E].push({
        seg: $t(C, E, E + 1, r),
        isVisible: !1,
        isAbsolute: !1,
        absoluteTop: 0,
        marginTop: 0
      });
  }
  for (let _ = 0; _ < r.length; _ += 1)
    b.push(g[_]);
  return { singleColPlacements: p, multiColPlacements: h, moreCnts: y, moreMarginTops: b };
}
function $A(t, e, n) {
  let a = xA(t, n.length), i = [], o = [], r = [];
  for (let s = 0; s < n.length; s += 1) {
    let u = a[s], d = [], m = 0, v = 0;
    for (let h of u) {
      let g = e[h.index];
      d.push({
        seg: $t(g, s, s + 1, n),
        isVisible: !0,
        isAbsolute: !1,
        absoluteTop: h.levelCoord,
        marginTop: h.levelCoord - m
      }), m = h.levelCoord + h.thickness;
    }
    let p = [];
    m = 0, v = 0;
    for (let h of u) {
      let g = e[h.index], y = h.span.end - h.span.start > 1, b = h.span.start === s;
      v += h.levelCoord - m, m = h.levelCoord + h.thickness, y ? (v += h.thickness, b && p.push({
        seg: $t(g, h.span.start, h.span.end, n),
        isVisible: !0,
        isAbsolute: !0,
        absoluteTop: h.levelCoord,
        marginTop: 0
      })) : b && (p.push({
        seg: $t(g, h.span.start, h.span.end, n),
        isVisible: !0,
        isAbsolute: !1,
        absoluteTop: h.levelCoord,
        marginTop: v
        // claim the margin
      }), v = 0);
    }
    i.push(d), o.push(p), r.push(v);
  }
  return { singleColPlacements: i, multiColPlacements: o, leftoverMargins: r };
}
function xA(t, e) {
  let n = [];
  for (let a = 0; a < e; a += 1)
    n.push([]);
  for (let a of t)
    for (let i = a.span.start; i < a.span.end; i += 1)
      n[i].push(a);
  return n;
}
function $t(t, e, n, a) {
  if (t.firstCol === e && t.lastCol === n - 1)
    return t;
  let i = t.eventRange, o = i.range, r = Ft(o, {
    start: a[e].date,
    end: ze(a[n - 1].date, 1)
  });
  return Object.assign(Object.assign({}, t), { firstCol: e, lastCol: n - 1, eventRange: {
    def: i.def,
    ui: Object.assign(Object.assign({}, i.ui), { durationEditable: !1 }),
    instance: i.instance,
    range: r
  }, isStart: t.isStart && r.start.valueOf() === o.start.valueOf(), isEnd: t.isEnd && r.end.valueOf() === o.end.valueOf() });
}
class PA extends lC {
  constructor() {
    super(...arguments), this.hiddenConsumes = !1, this.forceHidden = {};
  }
  addSegs(e) {
    const n = super.addSegs(e), { entriesByLevel: a } = this, i = (o) => !this.forceHidden[qt(o)];
    for (let o = 0; o < a.length; o += 1)
      a[o] = a[o].filter(i);
    return n;
  }
  handleInvalidInsertion(e, n, a) {
    const { entriesByLevel: i, forceHidden: o } = this, { touchingEntry: r, touchingLevel: s, touchingLateral: u } = e;
    if (this.hiddenConsumes && r) {
      const d = qt(r);
      if (!o[d])
        if (this.allowReslicing) {
          const m = Object.assign(Object.assign({}, r), { span: fs(r.span, n.span) }), v = qt(m);
          o[v] = !0, i[s][u] = m, a.push(m), this.splitEntry(r, n, a);
        } else
          o[d] = !0, a.push(r);
    }
    super.handleInvalidInsertion(e, n, a);
  }
}
class Bs extends Tt {
  constructor() {
    super(...arguments), this.cellElRefs = new gt(), this.frameElRefs = new gt(), this.fgElRefs = new gt(), this.segHarnessRefs = new gt(), this.rootElRef = nt(), this.state = {
      framePositions: null,
      maxContentHeight: null,
      segHeights: {}
    }, this.handleResize = (e) => {
      e && this.updateSizing(!0);
    };
  }
  render() {
    let { props: e, state: n, context: a } = this, { options: i } = a, o = e.cells.length, r = mn(e.businessHourSegs, o), s = mn(e.bgEventSegs, o), u = mn(this.getHighlightSegs(), o), d = mn(this.getMirrorSegs(), o), { singleColPlacements: m, multiColPlacements: v, moreCnts: p, moreMarginTops: h } = RA(T_(e.fgEventSegs, i.eventOrder), e.dayMaxEvents, e.dayMaxEventRows, i.eventOrderStrict, n.segHeights, n.maxContentHeight, e.cells), g = (
      // TODO: messy way to compute this
      e.eventDrag && e.eventDrag.affectedInstances || e.eventResize && e.eventResize.affectedInstances || {}
    );
    return q(
      "tr",
      { ref: this.rootElRef, role: "row" },
      e.renderIntro && e.renderIntro(),
      e.cells.map((y, b) => {
        let _ = this.renderFgSegs(b, e.forPrint ? m[b] : v[b], e.todayRange, g), C = this.renderFgSegs(b, FA(d[b], v), e.todayRange, {}, !!e.eventDrag, !!e.eventResize, !1);
        return q(DA, { key: y.key, elRef: this.cellElRefs.createRef(y.key), innerElRef: this.frameElRefs.createRef(y.key), dateProfile: e.dateProfile, date: y.date, showDayNumber: e.showDayNumbers, showWeekNumber: e.showWeekNumbers && b === 0, forceDayTop: e.showWeekNumbers, todayRange: e.todayRange, eventSelection: e.eventSelection, eventDrag: e.eventDrag, eventResize: e.eventResize, extraRenderProps: y.extraRenderProps, extraDataAttrs: y.extraDataAttrs, extraClassNames: y.extraClassNames, extraDateSpan: y.extraDateSpan, moreCnt: p[b], moreMarginTop: h[b], singlePlacements: m[b], fgContentElRef: this.fgElRefs.createRef(y.key), fgContent: (
          // Fragment scopes the keys
          q(
            Re,
            null,
            q(Re, null, _),
            q(Re, null, C)
          )
        ), bgContent: (
          // Fragment scopes the keys
          q(
            Re,
            null,
            this.renderFillSegs(u[b], "highlight"),
            this.renderFillSegs(r[b], "non-business"),
            this.renderFillSegs(s[b], "bg-event")
          )
        ), minHeight: e.cellMinHeight });
      })
    );
  }
  componentDidMount() {
    this.updateSizing(!0), this.context.addResizeHandler(this.handleResize);
  }
  componentDidUpdate(e, n) {
    let a = this.props;
    this.updateSizing(!Qe(e, a));
  }
  componentWillUnmount() {
    this.context.removeResizeHandler(this.handleResize);
  }
  getHighlightSegs() {
    let { props: e } = this;
    return e.eventDrag && e.eventDrag.segs.length ? e.eventDrag.segs : e.eventResize && e.eventResize.segs.length ? e.eventResize.segs : e.dateSelectionSegs;
  }
  getMirrorSegs() {
    let { props: e } = this;
    return e.eventResize && e.eventResize.segs.length ? e.eventResize.segs : [];
  }
  renderFgSegs(e, n, a, i, o, r, s) {
    let { context: u } = this, { eventSelection: d } = this.props, { framePositions: m } = this.state, v = this.props.cells.length === 1, p = o || r || s, h = [];
    if (m)
      for (let g of n) {
        let { seg: y } = g, { instanceId: b } = y.eventRange.instance, _ = g.isVisible && !i[b], C = g.isAbsolute, k = "", E = "";
        C && (u.isRtl ? (E = 0, k = m.lefts[y.lastCol] - m.lefts[y.firstCol]) : (k = 0, E = m.rights[y.firstCol] - m.rights[y.lastCol])), h.push(q("div", { className: "fc-daygrid-event-harness" + (C ? " fc-daygrid-event-harness-abs" : ""), key: Ps(y), ref: p ? null : this.segHarnessRefs.createRef(Fs(y)), style: {
          visibility: _ ? "" : "hidden",
          marginTop: C ? "" : g.marginTop,
          top: C ? g.absoluteTop : "",
          left: k,
          right: E
        } }, Rs(y) ? q(xs, Object.assign({ seg: y, isDragging: o, isSelected: b === d, defaultDisplayEventEnd: v }, Gt(y, a))) : q($s, Object.assign({ seg: y, isDragging: o, isResizing: r, isDateSelecting: s, isSelected: b === d, defaultDisplayEventEnd: v }, Gt(y, a)))));
      }
    return h;
  }
  renderFillSegs(e, n) {
    let { isRtl: a } = this.context, { todayRange: i } = this.props, { framePositions: o } = this.state, r = [];
    if (o)
      for (let s of e) {
        let u = a ? {
          right: 0,
          left: o.lefts[s.lastCol] - o.lefts[s.firstCol]
        } : {
          left: 0,
          right: o.rights[s.firstCol] - o.rights[s.lastCol]
        };
        r.push(q("div", { key: O_(s.eventRange), className: "fc-daygrid-bg-harness", style: u }, n === "bg-event" ? q(VC, Object.assign({ seg: s }, Gt(s, i))) : jC(n)));
      }
    return q(Re, {}, ...r);
  }
  updateSizing(e) {
    let { props: n, state: a, frameElRefs: i } = this;
    if (!n.forPrint && n.clientWidth !== null) {
      if (e) {
        let u = n.cells.map((d) => i.currentMap[d.key]);
        if (u.length) {
          let d = this.rootElRef.current, m = new $n(
            d,
            u,
            !0,
            // isHorizontal
            !1
          );
          (!a.framePositions || !a.framePositions.similarTo(m)) && this.setState({
            framePositions: new $n(
              d,
              u,
              !0,
              // isHorizontal
              !1
            )
          });
        }
      }
      const o = this.state.segHeights, r = this.querySegHeights(), s = n.dayMaxEvents === !0 || n.dayMaxEventRows === !0;
      this.safeSetState({
        // HACK to prevent oscillations of events being shown/hidden from max-event-rows
        // Essentially, once you compute an element's height, never null-out.
        // TODO: always display all events, as visibility:hidden?
        segHeights: Object.assign(Object.assign({}, o), r),
        maxContentHeight: s ? this.computeMaxContentHeight() : null
      });
    }
  }
  querySegHeights() {
    let e = this.segHarnessRefs.currentMap, n = {};
    for (let a in e) {
      let i = Math.round(e[a].getBoundingClientRect().height);
      n[a] = Math.max(n[a] || 0, i);
    }
    return n;
  }
  computeMaxContentHeight() {
    let e = this.props.cells[0].key, n = this.cellElRefs.currentMap[e], a = this.fgElRefs.currentMap[e];
    return n.getBoundingClientRect().bottom - a.getBoundingClientRect().top;
  }
  getCellEls() {
    let e = this.cellElRefs.currentMap;
    return this.props.cells.map((n) => e[n.key]);
  }
}
Bs.addStateEquality({
  segHeights: Qe
});
function FA(t, e) {
  if (!t.length)
    return [];
  let n = BA(e);
  return t.map((a) => ({
    seg: a,
    isVisible: !0,
    isAbsolute: !0,
    absoluteTop: n[a.eventRange.instance.instanceId],
    marginTop: 0
  }));
}
function BA(t) {
  let e = {};
  for (let n of t)
    for (let a of n)
      e[a.seg.eventRange.instance.instanceId] = a.absoluteTop;
  return e;
}
class zA extends Tt {
  constructor() {
    super(...arguments), this.splitBusinessHourSegs = Ce(_n), this.splitBgEventSegs = Ce(LA), this.splitFgEventSegs = Ce(_n), this.splitDateSelectionSegs = Ce(_n), this.splitEventDrag = Ce(Ao), this.splitEventResize = Ce(Ao), this.rowRefs = new gt();
  }
  render() {
    let { props: e, context: n } = this, a = e.cells.length, i = this.splitBusinessHourSegs(e.businessHourSegs, a), o = this.splitBgEventSegs(e.bgEventSegs, a), r = this.splitFgEventSegs(e.fgEventSegs, a), s = this.splitDateSelectionSegs(e.dateSelectionSegs, a), u = this.splitEventDrag(e.eventDrag, a), d = this.splitEventResize(e.eventResize, a), m = a >= 7 && e.clientWidth ? e.clientWidth / n.options.aspectRatio / 6 : null;
    return q(Un, { unit: "day" }, (v, p) => q(Re, null, e.cells.map((h, g) => q(Bs, {
      ref: this.rowRefs.createRef(g),
      key: h.length ? h[0].date.toISOString() : g,
      showDayNumbers: a > 1,
      showWeekNumbers: e.showWeekNumbers,
      todayRange: p,
      dateProfile: e.dateProfile,
      cells: h,
      renderIntro: e.renderRowIntro,
      businessHourSegs: i[g],
      eventSelection: e.eventSelection,
      bgEventSegs: o[g],
      fgEventSegs: r[g],
      dateSelectionSegs: s[g],
      eventDrag: u[g],
      eventResize: d[g],
      dayMaxEvents: e.dayMaxEvents,
      dayMaxEventRows: e.dayMaxEventRows,
      clientWidth: e.clientWidth,
      clientHeight: e.clientHeight,
      cellMinHeight: m,
      forPrint: e.forPrint
    }))));
  }
  componentDidMount() {
    this.registerInteractiveComponent();
  }
  componentDidUpdate() {
    this.registerInteractiveComponent();
  }
  registerInteractiveComponent() {
    if (!this.rootEl) {
      const e = this.rowRefs.currentMap[0].getCellEls()[0], n = e ? e.closest(".fc-daygrid-body") : null;
      n && (this.rootEl = n, this.context.registerInteractiveComponent(this, {
        el: n,
        isHitComboAllowed: this.props.isHitComboAllowed
      }));
    }
  }
  componentWillUnmount() {
    this.rootEl && (this.context.unregisterInteractiveComponent(this), this.rootEl = null);
  }
  // Hit System
  // ----------------------------------------------------------------------------------------------------
  prepareHits() {
    this.rowPositions = new $n(
      this.rootEl,
      this.rowRefs.collect().map((e) => e.getCellEls()[0]),
      // first cell el in each row. TODO: not optimal
      !1,
      !0
    ), this.colPositions = new $n(
      this.rootEl,
      this.rowRefs.currentMap[0].getCellEls(),
      // cell els in first row
      !0,
      // horizontal
      !1
    );
  }
  queryHit(e, n) {
    let { colPositions: a, rowPositions: i } = this, o = a.leftToIndex(e), r = i.topToIndex(n);
    if (r != null && o != null) {
      let s = this.props.cells[r][o];
      return {
        dateProfile: this.props.dateProfile,
        dateSpan: Object.assign({ range: this.getCellRange(r, o), allDay: !0 }, s.extraDateSpan),
        dayEl: this.getCellEl(r, o),
        rect: {
          left: a.lefts[o],
          right: a.rights[o],
          top: i.tops[r],
          bottom: i.bottoms[r]
        },
        layer: 0
      };
    }
    return null;
  }
  getCellEl(e, n) {
    return this.rowRefs.currentMap[e].getCellEls()[n];
  }
  getCellRange(e, n) {
    let a = this.props.cells[e][n].date, i = ze(a, 1);
    return { start: a, end: i };
  }
}
function LA(t, e) {
  return _n(t.filter(VA), e);
}
function VA(t) {
  return t.eventRange.def.allDay;
}
class HA extends Tt {
  constructor() {
    super(...arguments), this.elRef = nt(), this.needsScrollReset = !1;
  }
  render() {
    let { props: e } = this, { dayMaxEventRows: n, dayMaxEvents: a, expandRows: i } = e, o = a === !0 || n === !0;
    o && !i && (o = !1, n = null, a = null);
    let r = [
      "fc-daygrid-body",
      o ? "fc-daygrid-body-balanced" : "fc-daygrid-body-unbalanced",
      i ? "" : "fc-daygrid-body-natural"
      // will height of one row depend on the others?
    ];
    return q(
      "div",
      { ref: this.elRef, className: r.join(" "), style: {
        // these props are important to give this wrapper correct dimensions for interactions
        // TODO: if we set it here, can we avoid giving to inner tables?
        width: e.clientWidth,
        minWidth: e.tableMinWidth
      } },
      q(
        "table",
        { role: "presentation", className: "fc-scrollgrid-sync-table", style: {
          width: e.clientWidth,
          minWidth: e.tableMinWidth,
          height: i ? e.clientHeight : ""
        } },
        e.colGroupNode,
        q(
          "tbody",
          { role: "presentation" },
          q(zA, { dateProfile: e.dateProfile, cells: e.cells, renderRowIntro: e.renderRowIntro, showWeekNumbers: e.showWeekNumbers, clientWidth: e.clientWidth, clientHeight: e.clientHeight, businessHourSegs: e.businessHourSegs, bgEventSegs: e.bgEventSegs, fgEventSegs: e.fgEventSegs, dateSelectionSegs: e.dateSelectionSegs, eventSelection: e.eventSelection, eventDrag: e.eventDrag, eventResize: e.eventResize, dayMaxEvents: a, dayMaxEventRows: n, forPrint: e.forPrint, isHitComboAllowed: e.isHitComboAllowed })
        )
      )
    );
  }
  componentDidMount() {
    this.requestScrollReset();
  }
  componentDidUpdate(e) {
    e.dateProfile !== this.props.dateProfile ? this.requestScrollReset() : this.flushScrollReset();
  }
  requestScrollReset() {
    this.needsScrollReset = !0, this.flushScrollReset();
  }
  flushScrollReset() {
    if (this.needsScrollReset && this.props.clientWidth) {
      const e = jA(this.elRef.current, this.props.dateProfile);
      if (e) {
        const n = e.closest(".fc-daygrid-body"), a = n.closest(".fc-scroller"), i = e.getBoundingClientRect().top - n.getBoundingClientRect().top;
        a.scrollTop = i ? i + 1 : 0;
      }
      this.needsScrollReset = !1;
    }
  }
}
function jA(t, e) {
  let n;
  return e.currentRangeUnit.match(/year|month/) && (n = t.querySelector(`[data-date="${m1(e.currentDate)}-01"]`)), n || (n = t.querySelector(`[data-date="${ja(e.currentDate)}"]`)), n;
}
class UA extends yC {
  constructor() {
    super(...arguments), this.forceDayIfListItem = !0;
  }
  sliceRange(e, n) {
    return n.sliceRange(e);
  }
}
class WA extends Tt {
  constructor() {
    super(...arguments), this.slicer = new UA(), this.tableRef = nt();
  }
  render() {
    let { props: e, context: n } = this;
    return q(HA, Object.assign({ ref: this.tableRef }, this.slicer.sliceProps(e, e.dateProfile, e.nextDayThreshold, n, e.dayTableModel), { dateProfile: e.dateProfile, cells: e.dayTableModel.cells, colGroupNode: e.colGroupNode, tableMinWidth: e.tableMinWidth, renderRowIntro: e.renderRowIntro, dayMaxEvents: e.dayMaxEvents, dayMaxEventRows: e.dayMaxEventRows, showWeekNumbers: e.showWeekNumbers, expandRows: e.expandRows, headerAlignElRef: e.headerAlignElRef, clientWidth: e.clientWidth, clientHeight: e.clientHeight, forPrint: e.forPrint }));
  }
}
class YA extends SA {
  constructor() {
    super(...arguments), this.buildDayTableModel = Ce(GA), this.headerRef = nt(), this.tableRef = nt();
  }
  render() {
    let { options: e, dateProfileGenerator: n } = this.context, { props: a } = this, i = this.buildDayTableModel(a.dateProfile, n), o = e.dayHeaders && q(hC, { ref: this.headerRef, dateProfile: a.dateProfile, dates: i.headerDates, datesRepDistinctDays: i.rowCnt === 1 }), r = (s) => q(WA, { ref: this.tableRef, dateProfile: a.dateProfile, dayTableModel: i, businessHours: a.businessHours, dateSelection: a.dateSelection, eventStore: a.eventStore, eventUiBases: a.eventUiBases, eventSelection: a.eventSelection, eventDrag: a.eventDrag, eventResize: a.eventResize, nextDayThreshold: e.nextDayThreshold, colGroupNode: s.tableColGroupNode, tableMinWidth: s.tableMinWidth, dayMaxEvents: e.dayMaxEvents, dayMaxEventRows: e.dayMaxEventRows, showWeekNumbers: e.weekNumbers, expandRows: !a.isHeightAuto, headerAlignElRef: this.headerElRef, clientWidth: s.clientWidth, clientHeight: s.clientHeight, forPrint: a.forPrint });
    return e.dayMinWidth ? this.renderHScrollLayout(o, r, i.colCnt, e.dayMinWidth) : this.renderSimpleLayout(o, r);
  }
}
function GA(t, e) {
  let n = new pC(t.renderRange, e);
  return new gC(n, /year|month|week/.test(t.currentRangeUnit));
}
class qA extends Yr {
  // Computes the date range that will be rendered
  buildRenderRange(e, n, a) {
    let i = super.buildRenderRange(e, n, a), { props: o } = this;
    return KA({
      currentRange: i,
      snapToWeek: /^(year|month)$/.test(n),
      fixedWeekCount: o.fixedWeekCount,
      dateEnv: o.dateEnv
    });
  }
}
function KA(t) {
  let { dateEnv: e, currentRange: n } = t, { start: a, end: i } = n, o;
  if (t.snapToWeek && (a = e.startOfWeek(a), o = e.startOfWeek(i), o.valueOf() !== i.valueOf() && (i = Gi(o, 1))), t.fixedWeekCount) {
    let r = e.startOfWeek(e.startOfMonth(ze(n.end, -1))), s = Math.ceil(
      // could be partial weeks due to hiddenDays
      t1(r, i)
    );
    i = Gi(i, 6 - s);
  }
  return { start: a, end: i };
}
var QA = ':root{--fc-daygrid-event-dot-width:8px}.fc-daygrid-day-events:after,.fc-daygrid-day-events:before,.fc-daygrid-day-frame:after,.fc-daygrid-day-frame:before,.fc-daygrid-event-harness:after,.fc-daygrid-event-harness:before{clear:both;content:"";display:table}.fc .fc-daygrid-body{position:relative;z-index:1}.fc .fc-daygrid-day.fc-day-today{background-color:var(--fc-today-bg-color)}.fc .fc-daygrid-day-frame{min-height:100%;position:relative}.fc .fc-daygrid-day-top{display:flex;flex-direction:row-reverse}.fc .fc-day-other .fc-daygrid-day-top{opacity:.3}.fc .fc-daygrid-day-number{padding:4px;position:relative;z-index:4}.fc .fc-daygrid-month-start{font-size:1.1em;font-weight:700}.fc .fc-daygrid-day-events{margin-top:1px}.fc .fc-daygrid-body-balanced .fc-daygrid-day-events{left:0;position:absolute;right:0}.fc .fc-daygrid-body-unbalanced .fc-daygrid-day-events{min-height:2em;position:relative}.fc .fc-daygrid-body-natural .fc-daygrid-day-events{margin-bottom:1em}.fc .fc-daygrid-event-harness{position:relative}.fc .fc-daygrid-event-harness-abs{left:0;position:absolute;right:0;top:0}.fc .fc-daygrid-bg-harness{bottom:0;position:absolute;top:0}.fc .fc-daygrid-day-bg .fc-non-business{z-index:1}.fc .fc-daygrid-day-bg .fc-bg-event{z-index:2}.fc .fc-daygrid-day-bg .fc-highlight{z-index:3}.fc .fc-daygrid-event{margin-top:1px;z-index:6}.fc .fc-daygrid-event.fc-event-mirror{z-index:7}.fc .fc-daygrid-day-bottom{font-size:.85em;margin:0 2px}.fc .fc-daygrid-day-bottom:after,.fc .fc-daygrid-day-bottom:before{clear:both;content:"";display:table}.fc .fc-daygrid-more-link{border-radius:3px;cursor:pointer;line-height:1;margin-top:1px;max-width:100%;overflow:hidden;padding:2px;position:relative;white-space:nowrap;z-index:4}.fc .fc-daygrid-more-link:hover{background-color:rgba(0,0,0,.1)}.fc .fc-daygrid-week-number{background-color:var(--fc-neutral-bg-color);color:var(--fc-neutral-text-color);min-width:1.5em;padding:2px;position:absolute;text-align:center;top:0;z-index:5}.fc .fc-more-popover .fc-popover-body{min-width:220px;padding:10px}.fc-direction-ltr .fc-daygrid-event.fc-event-start,.fc-direction-rtl .fc-daygrid-event.fc-event-end{margin-left:2px}.fc-direction-ltr .fc-daygrid-event.fc-event-end,.fc-direction-rtl .fc-daygrid-event.fc-event-start{margin-right:2px}.fc-direction-ltr .fc-daygrid-more-link{float:left}.fc-direction-ltr .fc-daygrid-week-number{border-radius:0 0 3px 0;left:0}.fc-direction-rtl .fc-daygrid-more-link{float:right}.fc-direction-rtl .fc-daygrid-week-number{border-radius:0 0 0 3px;right:0}.fc-liquid-hack .fc-daygrid-day-frame{position:static}.fc-daygrid-event{border-radius:3px;font-size:var(--fc-small-font-size);position:relative;white-space:nowrap}.fc-daygrid-block-event .fc-event-time{font-weight:700}.fc-daygrid-block-event .fc-event-time,.fc-daygrid-block-event .fc-event-title{padding:1px}.fc-daygrid-dot-event{align-items:center;display:flex;padding:2px 0}.fc-daygrid-dot-event .fc-event-title{flex-grow:1;flex-shrink:1;font-weight:700;min-width:0;overflow:hidden}.fc-daygrid-dot-event.fc-event-mirror,.fc-daygrid-dot-event:hover{background:rgba(0,0,0,.1)}.fc-daygrid-dot-event.fc-event-selected:before{bottom:-10px;top:-10px}.fc-daygrid-event-dot{border:calc(var(--fc-daygrid-event-dot-width)/2) solid var(--fc-event-border-color);border-radius:calc(var(--fc-daygrid-event-dot-width)/2);box-sizing:content-box;height:0;margin:0 4px;width:0}.fc-direction-ltr .fc-daygrid-event .fc-event-time{margin-right:3px}.fc-direction-rtl .fc-daygrid-event .fc-event-time{margin-left:3px}';
Nr(QA);
var ZA = ft({
  name: "@fullcalendar/daygrid",
  initialView: "dayGridMonth",
  views: {
    dayGrid: {
      component: YA,
      dateProfileGeneratorClass: qA
    },
    dayGridDay: {
      type: "dayGrid",
      duration: { days: 1 }
    },
    dayGridWeek: {
      type: "dayGrid",
      duration: { weeks: 1 }
    },
    dayGridMonth: {
      type: "dayGrid",
      duration: { months: 1 },
      fixedWeekCount: !0
    },
    dayGridYear: {
      type: "dayGrid",
      duration: { years: 1 }
    }
  }
});
ri.touchMouseIgnoreWait = 500;
let Sa = 0, xn = 0, Ta = !1;
class zs {
  constructor(e) {
    this.subjectEl = null, this.selector = "", this.handleSelector = "", this.shouldIgnoreMove = !1, this.shouldWatchScroll = !0, this.isDragging = !1, this.isTouchDragging = !1, this.wasTouchScroll = !1, this.handleMouseDown = (n) => {
      if (!this.shouldIgnoreMouse() && JA(n) && this.tryStart(n)) {
        let a = this.createEventFromMouse(n, !0);
        this.emitter.trigger("pointerdown", a), this.initScrollWatch(a), this.shouldIgnoreMove || document.addEventListener("mousemove", this.handleMouseMove), document.addEventListener("mouseup", this.handleMouseUp);
      }
    }, this.handleMouseMove = (n) => {
      let a = this.createEventFromMouse(n);
      this.recordCoords(a), this.emitter.trigger("pointermove", a);
    }, this.handleMouseUp = (n) => {
      document.removeEventListener("mousemove", this.handleMouseMove), document.removeEventListener("mouseup", this.handleMouseUp), this.emitter.trigger("pointerup", this.createEventFromMouse(n)), this.cleanup();
    }, this.handleTouchStart = (n) => {
      if (this.tryStart(n)) {
        this.isTouchDragging = !0;
        let a = this.createEventFromTouch(n, !0);
        this.emitter.trigger("pointerdown", a), this.initScrollWatch(a);
        let i = n.target;
        this.shouldIgnoreMove || i.addEventListener("touchmove", this.handleTouchMove), i.addEventListener("touchend", this.handleTouchEnd), i.addEventListener("touchcancel", this.handleTouchEnd), window.addEventListener("scroll", this.handleTouchScroll, !0);
      }
    }, this.handleTouchMove = (n) => {
      let a = this.createEventFromTouch(n);
      this.recordCoords(a), this.emitter.trigger("pointermove", a);
    }, this.handleTouchEnd = (n) => {
      if (this.isDragging) {
        let a = n.target;
        a.removeEventListener("touchmove", this.handleTouchMove), a.removeEventListener("touchend", this.handleTouchEnd), a.removeEventListener("touchcancel", this.handleTouchEnd), window.removeEventListener("scroll", this.handleTouchScroll, !0), this.emitter.trigger("pointerup", this.createEventFromTouch(n)), this.cleanup(), this.isTouchDragging = !1, XA();
      }
    }, this.handleTouchScroll = () => {
      this.wasTouchScroll = !0;
    }, this.handleScroll = (n) => {
      if (!this.shouldIgnoreMove) {
        let a = window.scrollX - this.prevScrollX + this.prevPageX, i = window.scrollY - this.prevScrollY + this.prevPageY;
        this.emitter.trigger("pointermove", {
          origEvent: n,
          isTouch: this.isTouchDragging,
          subjectEl: this.subjectEl,
          pageX: a,
          pageY: i,
          deltaX: a - this.origPageX,
          deltaY: i - this.origPageY
        });
      }
    }, this.containerEl = e, this.emitter = new jn(), e.addEventListener("mousedown", this.handleMouseDown), e.addEventListener("touchstart", this.handleTouchStart, { passive: !0 }), ek();
  }
  destroy() {
    this.containerEl.removeEventListener("mousedown", this.handleMouseDown), this.containerEl.removeEventListener("touchstart", this.handleTouchStart, { passive: !0 }), tk();
  }
  tryStart(e) {
    let n = this.querySubjectEl(e), a = e.target;
    return n && (!this.handleSelector || Le(a, this.handleSelector)) ? (this.subjectEl = n, this.isDragging = !0, this.wasTouchScroll = !1, !0) : !1;
  }
  cleanup() {
    Ta = !1, this.isDragging = !1, this.subjectEl = null, this.destroyScrollWatch();
  }
  querySubjectEl(e) {
    return this.selector ? Le(e.target, this.selector) : this.containerEl;
  }
  shouldIgnoreMouse() {
    return Sa || this.isTouchDragging;
  }
  // can be called by user of this class, to cancel touch-based scrolling for the current drag
  cancelTouchScroll() {
    this.isDragging && (Ta = !0);
  }
  // Scrolling that simulates pointermoves
  // ----------------------------------------------------------------------------------------------------
  initScrollWatch(e) {
    this.shouldWatchScroll && (this.recordCoords(e), window.addEventListener("scroll", this.handleScroll, !0));
  }
  recordCoords(e) {
    this.shouldWatchScroll && (this.prevPageX = e.pageX, this.prevPageY = e.pageY, this.prevScrollX = window.scrollX, this.prevScrollY = window.scrollY);
  }
  destroyScrollWatch() {
    this.shouldWatchScroll && window.removeEventListener("scroll", this.handleScroll, !0);
  }
  // Event Normalization
  // ----------------------------------------------------------------------------------------------------
  createEventFromMouse(e, n) {
    let a = 0, i = 0;
    return n ? (this.origPageX = e.pageX, this.origPageY = e.pageY) : (a = e.pageX - this.origPageX, i = e.pageY - this.origPageY), {
      origEvent: e,
      isTouch: !1,
      subjectEl: this.subjectEl,
      pageX: e.pageX,
      pageY: e.pageY,
      deltaX: a,
      deltaY: i
    };
  }
  createEventFromTouch(e, n) {
    let a = e.touches, i, o, r = 0, s = 0;
    return a && a.length ? (i = a[0].pageX, o = a[0].pageY) : (i = e.pageX, o = e.pageY), n ? (this.origPageX = i, this.origPageY = o) : (r = i - this.origPageX, s = o - this.origPageY), {
      origEvent: e,
      isTouch: !0,
      subjectEl: this.subjectEl,
      pageX: i,
      pageY: o,
      deltaX: r,
      deltaY: s
    };
  }
}
function JA(t) {
  return t.button === 0 && !t.ctrlKey;
}
function XA() {
  Sa += 1, setTimeout(() => {
    Sa -= 1;
  }, ri.touchMouseIgnoreWait);
}
function ek() {
  xn += 1, xn === 1 && window.addEventListener("touchmove", Ls, { passive: !1 });
}
function tk() {
  xn -= 1, xn || window.removeEventListener("touchmove", Ls, { passive: !1 });
}
function Ls(t) {
  Ta && t.preventDefault();
}
class nk {
  constructor() {
    this.isVisible = !1, this.sourceEl = null, this.mirrorEl = null, this.sourceElRect = null, this.parentNode = document.body, this.zIndex = 9999, this.revertDuration = 0;
  }
  start(e, n, a) {
    this.sourceEl = e, this.sourceElRect = this.sourceEl.getBoundingClientRect(), this.origScreenX = n - window.scrollX, this.origScreenY = a - window.scrollY, this.deltaX = 0, this.deltaY = 0, this.updateElPosition();
  }
  handleMove(e, n) {
    this.deltaX = e - window.scrollX - this.origScreenX, this.deltaY = n - window.scrollY - this.origScreenY, this.updateElPosition();
  }
  // can be called before start
  setIsVisible(e) {
    e ? this.isVisible || (this.mirrorEl && (this.mirrorEl.style.display = ""), this.isVisible = e, this.updateElPosition()) : this.isVisible && (this.mirrorEl && (this.mirrorEl.style.display = "none"), this.isVisible = e);
  }
  // always async
  stop(e, n) {
    let a = () => {
      this.cleanup(), n();
    };
    e && this.mirrorEl && this.isVisible && this.revertDuration && // if 0, transition won't work
    (this.deltaX || this.deltaY) ? this.doRevertAnimation(a, this.revertDuration) : setTimeout(a, 0);
  }
  doRevertAnimation(e, n) {
    let a = this.mirrorEl, i = this.sourceEl.getBoundingClientRect();
    a.style.transition = "top " + n + "ms,left " + n + "ms", Ut(a, {
      left: i.left,
      top: i.top
    }), F0(a, () => {
      a.style.transition = "", e();
    });
  }
  cleanup() {
    this.mirrorEl && (La(this.mirrorEl), this.mirrorEl = null), this.sourceEl = null;
  }
  updateElPosition() {
    this.sourceEl && this.isVisible && Ut(this.getMirrorEl(), {
      left: this.sourceElRect.left + this.deltaX,
      top: this.sourceElRect.top + this.deltaY
    });
  }
  getMirrorEl() {
    let e = this.sourceElRect, n = this.mirrorEl;
    return n || (n = this.mirrorEl = this.sourceEl.cloneNode(!0), n.style.userSelect = "none", n.style.webkitUserSelect = "none", n.style.pointerEvents = "none", n.classList.add("fc-event-dragging"), Ut(n, {
      position: "fixed",
      zIndex: this.zIndex,
      visibility: "",
      boxSizing: "border-box",
      width: e.right - e.left,
      height: e.bottom - e.top,
      right: "auto",
      bottom: "auto",
      margin: 0
    }), this.parentNode.appendChild(n)), n;
  }
}
class Vs extends oi {
  constructor(e, n) {
    super(), this.handleScroll = () => {
      this.scrollTop = this.scrollController.getScrollTop(), this.scrollLeft = this.scrollController.getScrollLeft(), this.handleScrollChange();
    }, this.scrollController = e, this.doesListening = n, this.scrollTop = this.origScrollTop = e.getScrollTop(), this.scrollLeft = this.origScrollLeft = e.getScrollLeft(), this.scrollWidth = e.getScrollWidth(), this.scrollHeight = e.getScrollHeight(), this.clientWidth = e.getClientWidth(), this.clientHeight = e.getClientHeight(), this.clientRect = this.computeClientRect(), this.doesListening && this.getEventTarget().addEventListener("scroll", this.handleScroll);
  }
  destroy() {
    this.doesListening && this.getEventTarget().removeEventListener("scroll", this.handleScroll);
  }
  getScrollTop() {
    return this.scrollTop;
  }
  getScrollLeft() {
    return this.scrollLeft;
  }
  setScrollTop(e) {
    this.scrollController.setScrollTop(e), this.doesListening || (this.scrollTop = Math.max(Math.min(e, this.getMaxScrollTop()), 0), this.handleScrollChange());
  }
  setScrollLeft(e) {
    this.scrollController.setScrollLeft(e), this.doesListening || (this.scrollLeft = Math.max(Math.min(e, this.getMaxScrollLeft()), 0), this.handleScrollChange());
  }
  getClientWidth() {
    return this.clientWidth;
  }
  getClientHeight() {
    return this.clientHeight;
  }
  getScrollWidth() {
    return this.scrollWidth;
  }
  getScrollHeight() {
    return this.scrollHeight;
  }
  handleScrollChange() {
  }
}
class Hs extends Vs {
  constructor(e, n) {
    super(new rC(e), n);
  }
  getEventTarget() {
    return this.scrollController.el;
  }
  computeClientRect() {
    return iC(this.scrollController.el);
  }
}
class ak extends Vs {
  constructor(e) {
    super(new sC(), e);
  }
  getEventTarget() {
    return window;
  }
  computeClientRect() {
    return {
      left: this.scrollLeft,
      right: this.scrollLeft + this.clientWidth,
      top: this.scrollTop,
      bottom: this.scrollTop + this.clientHeight
    };
  }
  // the window is the only scroll object that changes it's rectangle relative
  // to the document's topleft as it scrolls
  handleScrollChange() {
    this.clientRect = this.computeClientRect();
  }
}
const ko = typeof performance == "function" ? performance.now : Date.now;
class ik {
  constructor() {
    this.isEnabled = !0, this.scrollQuery = [window, ".fc-scroller"], this.edgeThreshold = 50, this.maxVelocity = 300, this.pointerScreenX = null, this.pointerScreenY = null, this.isAnimating = !1, this.scrollCaches = null, this.everMovedUp = !1, this.everMovedDown = !1, this.everMovedLeft = !1, this.everMovedRight = !1, this.animate = () => {
      if (this.isAnimating) {
        let e = this.computeBestEdge(this.pointerScreenX + window.scrollX, this.pointerScreenY + window.scrollY);
        if (e) {
          let n = ko();
          this.handleSide(e, (n - this.msSinceRequest) / 1e3), this.requestAnimation(n);
        } else
          this.isAnimating = !1;
      }
    };
  }
  start(e, n, a) {
    this.isEnabled && (this.scrollCaches = this.buildCaches(a), this.pointerScreenX = null, this.pointerScreenY = null, this.everMovedUp = !1, this.everMovedDown = !1, this.everMovedLeft = !1, this.everMovedRight = !1, this.handleMove(e, n));
  }
  handleMove(e, n) {
    if (this.isEnabled) {
      let a = e - window.scrollX, i = n - window.scrollY, o = this.pointerScreenY === null ? 0 : i - this.pointerScreenY, r = this.pointerScreenX === null ? 0 : a - this.pointerScreenX;
      o < 0 ? this.everMovedUp = !0 : o > 0 && (this.everMovedDown = !0), r < 0 ? this.everMovedLeft = !0 : r > 0 && (this.everMovedRight = !0), this.pointerScreenX = a, this.pointerScreenY = i, this.isAnimating || (this.isAnimating = !0, this.requestAnimation(ko()));
    }
  }
  stop() {
    if (this.isEnabled) {
      this.isAnimating = !1;
      for (let e of this.scrollCaches)
        e.destroy();
      this.scrollCaches = null;
    }
  }
  requestAnimation(e) {
    this.msSinceRequest = e, requestAnimationFrame(this.animate);
  }
  handleSide(e, n) {
    let { scrollCache: a } = e, { edgeThreshold: i } = this, o = i - e.distance, r = (
      // the closer to the edge, the faster we scroll
      o * o / (i * i) * // quadratic
      this.maxVelocity * n
    ), s = 1;
    switch (e.name) {
      case "left":
        s = -1;
      // falls through
      case "right":
        a.setScrollLeft(a.getScrollLeft() + r * s);
        break;
      case "top":
        s = -1;
      // falls through
      case "bottom":
        a.setScrollTop(a.getScrollTop() + r * s);
        break;
    }
  }
  // left/top are relative to document topleft
  computeBestEdge(e, n) {
    let { edgeThreshold: a } = this, i = null, o = this.scrollCaches || [];
    for (let r of o) {
      let s = r.clientRect, u = e - s.left, d = s.right - e, m = n - s.top, v = s.bottom - n;
      u >= 0 && d >= 0 && m >= 0 && v >= 0 && (m <= a && this.everMovedUp && r.canScrollUp() && (!i || i.distance > m) && (i = { scrollCache: r, name: "top", distance: m }), v <= a && this.everMovedDown && r.canScrollDown() && (!i || i.distance > v) && (i = { scrollCache: r, name: "bottom", distance: v }), u <= a && this.everMovedLeft && r.canScrollLeft() && (!i || i.distance > u) && (i = { scrollCache: r, name: "left", distance: u }), d <= a && this.everMovedRight && r.canScrollRight() && (!i || i.distance > d) && (i = { scrollCache: r, name: "right", distance: d }));
    }
    return i;
  }
  buildCaches(e) {
    return this.queryScrollEls(e).map((n) => n === window ? new ak(!1) : new Hs(n, !1));
  }
  queryScrollEls(e) {
    let n = [];
    for (let a of this.scrollQuery)
      typeof a == "object" ? n.push(a) : n.push(...Array.prototype.slice.call(e.getRootNode().querySelectorAll(a)));
    return n;
  }
}
class nn extends uC {
  constructor(e, n) {
    super(e), this.containerEl = e, this.delay = null, this.minDistance = 0, this.touchScrollAllowed = !0, this.mirrorNeedsRevert = !1, this.isInteracting = !1, this.isDragging = !1, this.isDelayEnded = !1, this.isDistanceSurpassed = !1, this.delayTimeoutId = null, this.onPointerDown = (i) => {
      this.isDragging || (this.isInteracting = !0, this.isDelayEnded = !1, this.isDistanceSurpassed = !1, B0(document.body), L0(document.body), i.isTouch || i.origEvent.preventDefault(), this.emitter.trigger("pointerdown", i), this.isInteracting && // not destroyed via pointerdown handler
      !this.pointer.shouldIgnoreMove && (this.mirror.setIsVisible(!1), this.mirror.start(i.subjectEl, i.pageX, i.pageY), this.startDelay(i), this.minDistance || this.handleDistanceSurpassed(i)));
    }, this.onPointerMove = (i) => {
      if (this.isInteracting) {
        if (this.emitter.trigger("pointermove", i), !this.isDistanceSurpassed) {
          let o = this.minDistance, r, { deltaX: s, deltaY: u } = i;
          r = s * s + u * u, r >= o * o && this.handleDistanceSurpassed(i);
        }
        this.isDragging && (i.origEvent.type !== "scroll" && (this.mirror.handleMove(i.pageX, i.pageY), this.autoScroller.handleMove(i.pageX, i.pageY)), this.emitter.trigger("dragmove", i));
      }
    }, this.onPointerUp = (i) => {
      this.isInteracting && (this.isInteracting = !1, z0(document.body), V0(document.body), this.emitter.trigger("pointerup", i), this.isDragging && (this.autoScroller.stop(), this.tryStopDrag(i)), this.delayTimeoutId && (clearTimeout(this.delayTimeoutId), this.delayTimeoutId = null));
    };
    let a = this.pointer = new zs(e);
    a.emitter.on("pointerdown", this.onPointerDown), a.emitter.on("pointermove", this.onPointerMove), a.emitter.on("pointerup", this.onPointerUp), n && (a.selector = n), this.mirror = new nk(), this.autoScroller = new ik();
  }
  destroy() {
    this.pointer.destroy(), this.onPointerUp({});
  }
  startDelay(e) {
    typeof this.delay == "number" ? this.delayTimeoutId = setTimeout(() => {
      this.delayTimeoutId = null, this.handleDelayEnd(e);
    }, this.delay) : this.handleDelayEnd(e);
  }
  handleDelayEnd(e) {
    this.isDelayEnded = !0, this.tryStartDrag(e);
  }
  handleDistanceSurpassed(e) {
    this.isDistanceSurpassed = !0, this.tryStartDrag(e);
  }
  tryStartDrag(e) {
    this.isDelayEnded && this.isDistanceSurpassed && (!this.pointer.wasTouchScroll || this.touchScrollAllowed) && (this.isDragging = !0, this.mirrorNeedsRevert = !1, this.autoScroller.start(e.pageX, e.pageY, this.containerEl), this.emitter.trigger("dragstart", e), this.touchScrollAllowed === !1 && this.pointer.cancelTouchScroll());
  }
  tryStopDrag(e) {
    this.mirror.stop(this.mirrorNeedsRevert, this.stopDrag.bind(this, e));
  }
  stopDrag(e) {
    this.isDragging = !1, this.emitter.trigger("dragend", e);
  }
  // fill in the implementations...
  setIgnoreMove(e) {
    this.pointer.shouldIgnoreMove = e;
  }
  setMirrorIsVisible(e) {
    this.mirror.setIsVisible(e);
  }
  setMirrorNeedsRevert(e) {
    this.mirrorNeedsRevert = e;
  }
  setAutoScrollEnabled(e) {
    this.autoScroller.isEnabled = e;
  }
}
class ok {
  constructor(e) {
    this.el = e, this.origRect = ii(e), this.scrollCaches = ds(e).map((n) => new Hs(n, !0));
  }
  destroy() {
    for (let e of this.scrollCaches)
      e.destroy();
  }
  computeLeft() {
    let e = this.origRect.left;
    for (let n of this.scrollCaches)
      e += n.origScrollLeft - n.getScrollLeft();
    return e;
  }
  computeTop() {
    let e = this.origRect.top;
    for (let n of this.scrollCaches)
      e += n.origScrollTop - n.getScrollTop();
    return e;
  }
  isWithinClipping(e, n) {
    let a = { left: e, top: n };
    for (let i of this.scrollCaches)
      if (!rk(i.getEventTarget()) && !G_(a, i.clientRect))
        return !1;
    return !0;
  }
}
function rk(t) {
  let e = t.tagName;
  return e === "HTML" || e === "BODY";
}
class Wn {
  constructor(e, n) {
    this.useSubjectCenter = !1, this.requireInitial = !0, this.disablePointCheck = !1, this.initialHit = null, this.movingHit = null, this.finalHit = null, this.handlePointerDown = (a) => {
      let { dragging: i } = this;
      this.initialHit = null, this.movingHit = null, this.finalHit = null, this.prepareHits(), this.processFirstCoord(a), this.initialHit || !this.requireInitial ? (i.setIgnoreMove(!1), this.emitter.trigger("pointerdown", a)) : i.setIgnoreMove(!0);
    }, this.handleDragStart = (a) => {
      this.emitter.trigger("dragstart", a), this.handleMove(a, !0);
    }, this.handleDragMove = (a) => {
      this.emitter.trigger("dragmove", a), this.handleMove(a);
    }, this.handlePointerUp = (a) => {
      this.releaseHits(), this.emitter.trigger("pointerup", a);
    }, this.handleDragEnd = (a) => {
      this.movingHit && this.emitter.trigger("hitupdate", null, !0, a), this.finalHit = this.movingHit, this.movingHit = null, this.emitter.trigger("dragend", a);
    }, this.droppableStore = n, e.emitter.on("pointerdown", this.handlePointerDown), e.emitter.on("dragstart", this.handleDragStart), e.emitter.on("dragmove", this.handleDragMove), e.emitter.on("pointerup", this.handlePointerUp), e.emitter.on("dragend", this.handleDragEnd), this.dragging = e, this.emitter = new jn();
  }
  // sets initialHit
  // sets coordAdjust
  processFirstCoord(e) {
    let n = { left: e.pageX, top: e.pageY }, a = n, i = e.subjectEl, o;
    i instanceof HTMLElement && (o = ii(i), a = q_(a, o));
    let r = this.initialHit = this.queryHitForOffset(a.left, a.top);
    if (r) {
      if (this.useSubjectCenter && o) {
        let s = ls(o, r.rect);
        s && (a = K_(s));
      }
      this.coordAdjust = Q_(a, n);
    } else
      this.coordAdjust = { left: 0, top: 0 };
  }
  handleMove(e, n) {
    let a = this.queryHitForOffset(e.pageX + this.coordAdjust.left, e.pageY + this.coordAdjust.top);
    (n || !Yn(this.movingHit, a)) && (this.movingHit = a, this.emitter.trigger("hitupdate", a, !1, e));
  }
  prepareHits() {
    this.offsetTrackers = At(this.droppableStore, (e) => (e.component.prepareHits(), new ok(e.el)));
  }
  releaseHits() {
    let { offsetTrackers: e } = this;
    for (let n in e)
      e[n].destroy();
    this.offsetTrackers = {};
  }
  queryHitForOffset(e, n) {
    let { droppableStore: a, offsetTrackers: i } = this, o = null;
    for (let r in a) {
      let s = a[r].component, u = i[r];
      if (u && // wasn't destroyed mid-drag
      u.isWithinClipping(e, n)) {
        let d = u.computeLeft(), m = u.computeTop(), v = e - d, p = n - m, { origRect: h } = u, g = h.right - h.left, y = h.bottom - h.top;
        if (
          // must be within the element's bounds
          v >= 0 && v < g && p >= 0 && p < y
        ) {
          let b = s.queryHit(v, p, g, y);
          b && // make sure the hit is within activeRange, meaning it's not a dead cell
          Vn(b.dateProfile.activeRange, b.dateSpan.range) && // Ensure the component we are querying for the hit is accessibly my the pointer
          // Prevents obscured calendars (ex: under a modal dialog) from accepting hit
          // https://github.com/fullcalendar/fullcalendar/issues/5026
          (this.disablePointCheck || u.el.contains(u.el.getRootNode().elementFromPoint(
            // add-back origins to get coordinate relative to top-left of window viewport
            v + d - window.scrollX,
            p + m - window.scrollY
          ))) && (!o || b.layer > o.layer) && (b.componentId = r, b.context = s.context, b.rect.left += d, b.rect.right += d, b.rect.top += m, b.rect.bottom += m, o = b);
        }
      }
    }
    return o;
  }
}
function Yn(t, e) {
  return !t && !e ? !0 : !!t != !!e ? !1 : P_(t.dateSpan, e.dateSpan);
}
function js(t, e) {
  let n = {};
  for (let a of e.pluginHooks.datePointTransforms)
    Object.assign(n, a(t, e));
  return Object.assign(n, sk(t, e.dateEnv)), n;
}
function sk(t, e) {
  return {
    date: e.toDate(t.range.start),
    dateStr: e.formatIso(t.range.start, { omitTime: t.allDay }),
    allDay: t.allDay
  };
}
class lk extends Ht {
  constructor(e) {
    super(e), this.handlePointerDown = (a) => {
      let { dragging: i } = this, o = a.origEvent.target;
      i.setIgnoreMove(!this.component.isValidDateDownEl(o));
    }, this.handleDragEnd = (a) => {
      let { component: i } = this, { pointer: o } = this.dragging;
      if (!o.wasTouchScroll) {
        let { initialHit: r, finalHit: s } = this.hitDragging;
        if (r && s && Yn(r, s)) {
          let { context: u } = i, d = Object.assign(Object.assign({}, js(r.dateSpan, u)), { dayEl: r.dayEl, jsEvent: a.origEvent, view: u.viewApi || u.calendarApi.view });
          u.emitter.trigger("dateClick", d);
        }
      }
    }, this.dragging = new nn(e.el), this.dragging.autoScroller.isEnabled = !1;
    let n = this.hitDragging = new Wn(this.dragging, ni(e));
    n.emitter.on("pointerdown", this.handlePointerDown), n.emitter.on("dragend", this.handleDragEnd);
  }
  destroy() {
    this.dragging.destroy();
  }
}
class uk extends Ht {
  constructor(e) {
    super(e), this.dragSelection = null, this.handlePointerDown = (r) => {
      let { component: s, dragging: u } = this, { options: d } = s.context, m = d.selectable && s.isValidDateDownEl(r.origEvent.target);
      u.setIgnoreMove(!m), u.delay = r.isTouch ? ck(s) : null;
    }, this.handleDragStart = (r) => {
      this.component.context.calendarApi.unselect(r);
    }, this.handleHitUpdate = (r, s) => {
      let { context: u } = this.component, d = null, m = !1;
      if (r) {
        let v = this.hitDragging.initialHit;
        r.componentId === v.componentId && this.isHitComboAllowed && !this.isHitComboAllowed(v, r) || (d = dk(v, r, u.pluginHooks.dateSelectionTransformers)), (!d || !bC(d, r.dateProfile, u)) && (m = !0, d = null);
      }
      d ? u.dispatch({ type: "SELECT_DATES", selection: d }) : s || u.dispatch({ type: "UNSELECT_DATES" }), m ? Va() : Ha(), s || (this.dragSelection = d);
    }, this.handlePointerUp = (r) => {
      this.dragSelection && (es(this.dragSelection, r, this.component.context), this.dragSelection = null);
    };
    let { component: n } = e, { options: a } = n.context, i = this.dragging = new nn(e.el);
    i.touchScrollAllowed = !1, i.minDistance = a.selectMinDistance || 0, i.autoScroller.isEnabled = a.dragScroll;
    let o = this.hitDragging = new Wn(this.dragging, ni(e));
    o.emitter.on("pointerdown", this.handlePointerDown), o.emitter.on("dragstart", this.handleDragStart), o.emitter.on("hitupdate", this.handleHitUpdate), o.emitter.on("pointerup", this.handlePointerUp);
  }
  destroy() {
    this.dragging.destroy();
  }
}
function ck(t) {
  let { options: e } = t.context, n = e.selectLongPressDelay;
  return n == null && (n = e.longPressDelay), n;
}
function dk(t, e, n) {
  let a = t.dateSpan, i = e.dateSpan, o = [
    a.range.start,
    a.range.end,
    i.range.start,
    i.range.end
  ];
  o.sort(Y0);
  let r = {};
  for (let s of n) {
    let u = s(t, e);
    if (u === !1)
      return null;
    u && Object.assign(r, u);
  }
  return r.range = { start: o[0], end: o[3] }, r.allDay = a.allDay, r;
}
class an extends Ht {
  constructor(e) {
    super(e), this.subjectEl = null, this.subjectSeg = null, this.isDragging = !1, this.eventRange = null, this.relevantEvents = null, this.receivingContext = null, this.validMutation = null, this.mutatedRelevantEvents = null, this.handlePointerDown = (r) => {
      let s = r.origEvent.target, { component: u, dragging: d } = this, { mirror: m } = d, { options: v } = u.context, p = u.context;
      this.subjectEl = r.subjectEl;
      let h = this.subjectSeg = Bt(r.subjectEl), y = (this.eventRange = h.eventRange).instance.instanceId;
      this.relevantEvents = Ja(p.getCurrentData().eventStore, y), d.minDistance = r.isTouch ? 0 : v.eventDragMinDistance, d.delay = // only do a touch delay if touch and this event hasn't been selected yet
      r.isTouch && y !== u.props.eventSelection ? mk(u) : null, v.fixedMirrorParent ? m.parentNode = v.fixedMirrorParent : m.parentNode = Le(s, ".fc"), m.revertDuration = v.dragRevertDuration;
      let b = u.isValidSegDownEl(s) && !Le(s, ".fc-event-resizer");
      d.setIgnoreMove(!b), this.isDragging = b && r.subjectEl.classList.contains("fc-event-draggable");
    }, this.handleDragStart = (r) => {
      let s = this.component.context, u = this.eventRange, d = u.instance.instanceId;
      r.isTouch ? d !== this.component.props.eventSelection && s.dispatch({ type: "SELECT_EVENT", eventInstanceId: d }) : s.dispatch({ type: "UNSELECT_EVENT" }), this.isDragging && (s.calendarApi.unselect(r), s.emitter.trigger("eventDragStart", {
        el: this.subjectEl,
        event: new De(s, u.def, u.instance),
        jsEvent: r.origEvent,
        view: s.viewApi
      }));
    }, this.handleHitUpdate = (r, s) => {
      if (!this.isDragging)
        return;
      let u = this.relevantEvents, d = this.hitDragging.initialHit, m = this.component.context, v = null, p = null, h = null, g = !1, y = {
        affectedEvents: u,
        mutatedEvents: Ke(),
        isEvent: !0
      };
      if (r) {
        v = r.context;
        let b = v.options;
        m === v || b.editable && b.droppable ? (p = fk(d, r, this.eventRange.instance.range.start, v.getCurrentData().pluginHooks.eventDragMutationMassagers), p && (h = ti(u, v.getCurrentData().eventUiBases, p, v), y.mutatedEvents = h, vs(y, r.dateProfile, v) || (g = !0, p = null, h = null, y.mutatedEvents = Ke()))) : v = null;
      }
      this.displayDrag(v, y), g ? Va() : Ha(), s || (m === v && // TODO: write test for this
      Yn(d, r) && (p = null), this.dragging.setMirrorNeedsRevert(!p), this.dragging.setMirrorIsVisible(!r || !this.subjectEl.getRootNode().querySelector(".fc-event-mirror")), this.receivingContext = v, this.validMutation = p, this.mutatedRelevantEvents = h);
    }, this.handlePointerUp = () => {
      this.isDragging || this.cleanup();
    }, this.handleDragEnd = (r) => {
      if (this.isDragging) {
        let s = this.component.context, u = s.viewApi, { receivingContext: d, validMutation: m } = this, v = this.eventRange.def, p = this.eventRange.instance, h = new De(s, v, p), g = this.relevantEvents, y = this.mutatedRelevantEvents, { finalHit: b } = this.hitDragging;
        if (this.clearDrag(), s.emitter.trigger("eventDragStop", {
          el: this.subjectEl,
          event: h,
          jsEvent: r.origEvent,
          view: u
        }), m) {
          if (d === s) {
            let _ = new De(s, y.defs[v.defId], p ? y.instances[p.instanceId] : null);
            s.dispatch({
              type: "MERGE_EVENTS",
              eventStore: y
            });
            let C = {
              oldEvent: h,
              event: _,
              relatedEvents: bt(y, s, p),
              revert() {
                s.dispatch({
                  type: "MERGE_EVENTS",
                  eventStore: g
                  // the pre-change data
                });
              }
            }, k = {};
            for (let E of s.getCurrentData().pluginHooks.eventDropTransformers)
              Object.assign(k, E(m, s));
            s.emitter.trigger("eventDrop", Object.assign(Object.assign(Object.assign({}, C), k), { el: r.subjectEl, delta: m.datesDelta, jsEvent: r.origEvent, view: u })), s.emitter.trigger("eventChange", C);
          } else if (d) {
            let _ = {
              event: h,
              relatedEvents: bt(g, s, p),
              revert() {
                s.dispatch({
                  type: "MERGE_EVENTS",
                  eventStore: g
                });
              }
            };
            s.emitter.trigger("eventLeave", Object.assign(Object.assign({}, _), { draggedEl: r.subjectEl, view: u })), s.dispatch({
              type: "REMOVE_EVENTS",
              eventStore: g
            }), s.emitter.trigger("eventRemove", _);
            let C = y.defs[v.defId], k = y.instances[p.instanceId], E = new De(d, C, k);
            d.dispatch({
              type: "MERGE_EVENTS",
              eventStore: y
            });
            let N = {
              event: E,
              relatedEvents: bt(y, d, k),
              revert() {
                d.dispatch({
                  type: "REMOVE_EVENTS",
                  eventStore: y
                });
              }
            };
            d.emitter.trigger("eventAdd", N), r.isTouch && d.dispatch({
              type: "SELECT_EVENT",
              eventInstanceId: p.instanceId
            }), d.emitter.trigger("drop", Object.assign(Object.assign({}, js(b.dateSpan, d)), { draggedEl: r.subjectEl, jsEvent: r.origEvent, view: b.context.viewApi })), d.emitter.trigger("eventReceive", Object.assign(Object.assign({}, N), { draggedEl: r.subjectEl, view: b.context.viewApi }));
          }
        } else
          s.emitter.trigger("_noEventDrop");
      }
      this.cleanup();
    };
    let { component: n } = this, { options: a } = n.context, i = this.dragging = new nn(e.el);
    i.pointer.selector = an.SELECTOR, i.touchScrollAllowed = !1, i.autoScroller.isEnabled = a.dragScroll;
    let o = this.hitDragging = new Wn(this.dragging, wa);
    o.useSubjectCenter = e.useEventCenter, o.emitter.on("pointerdown", this.handlePointerDown), o.emitter.on("dragstart", this.handleDragStart), o.emitter.on("hitupdate", this.handleHitUpdate), o.emitter.on("pointerup", this.handlePointerUp), o.emitter.on("dragend", this.handleDragEnd);
  }
  destroy() {
    this.dragging.destroy();
  }
  // render a drag state on the next receivingCalendar
  displayDrag(e, n) {
    let a = this.component.context, i = this.receivingContext;
    i && i !== e && (i === a ? i.dispatch({
      type: "SET_EVENT_DRAG",
      state: {
        affectedEvents: n.affectedEvents,
        mutatedEvents: Ke(),
        isEvent: !0
      }
    }) : i.dispatch({ type: "UNSET_EVENT_DRAG" })), e && e.dispatch({ type: "SET_EVENT_DRAG", state: n });
  }
  clearDrag() {
    let e = this.component.context, { receivingContext: n } = this;
    n && n.dispatch({ type: "UNSET_EVENT_DRAG" }), e !== n && e.dispatch({ type: "UNSET_EVENT_DRAG" });
  }
  cleanup() {
    this.subjectSeg = null, this.isDragging = !1, this.eventRange = null, this.relevantEvents = null, this.receivingContext = null, this.validMutation = null, this.mutatedRelevantEvents = null;
  }
}
an.SELECTOR = ".fc-event-draggable, .fc-event-resizable";
function fk(t, e, n, a) {
  let i = t.dateSpan, o = e.dateSpan, r = i.range.start, s = o.range.start, u = {};
  i.allDay !== o.allDay && (u.allDay = o.allDay, u.hasEnd = e.context.options.allDayMaintainDuration, o.allDay ? r = Ne(n) : r = n);
  let d = It(r, s, t.context.dateEnv, t.componentId === e.componentId ? t.largeUnit : null);
  d.milliseconds && (u.allDay = !1);
  let m = {
    datesDelta: d,
    standardProps: u
  };
  for (let v of a)
    v(m, t, e);
  return m;
}
function mk(t) {
  let { options: e } = t.context, n = e.eventLongPressDelay;
  return n == null && (n = e.longPressDelay), n;
}
class hk extends Ht {
  constructor(e) {
    super(e), this.draggingSegEl = null, this.draggingSeg = null, this.eventRange = null, this.relevantEvents = null, this.validMutation = null, this.mutatedRelevantEvents = null, this.handlePointerDown = (o) => {
      let { component: r } = this, s = this.querySegEl(o), u = Bt(s), d = this.eventRange = u.eventRange;
      this.dragging.minDistance = r.context.options.eventDragMinDistance, this.dragging.setIgnoreMove(!this.component.isValidSegDownEl(o.origEvent.target) || o.isTouch && this.component.props.eventSelection !== d.instance.instanceId);
    }, this.handleDragStart = (o) => {
      let { context: r } = this.component, s = this.eventRange;
      this.relevantEvents = Ja(r.getCurrentData().eventStore, this.eventRange.instance.instanceId);
      let u = this.querySegEl(o);
      this.draggingSegEl = u, this.draggingSeg = Bt(u), r.calendarApi.unselect(), r.emitter.trigger("eventResizeStart", {
        el: u,
        event: new De(r, s.def, s.instance),
        jsEvent: o.origEvent,
        view: r.viewApi
      });
    }, this.handleHitUpdate = (o, r, s) => {
      let { context: u } = this.component, d = this.relevantEvents, m = this.hitDragging.initialHit, v = this.eventRange.instance, p = null, h = null, g = !1, y = {
        affectedEvents: d,
        mutatedEvents: Ke(),
        isEvent: !0
      };
      o && (o.componentId === m.componentId && this.isHitComboAllowed && !this.isHitComboAllowed(m, o) || (p = vk(m, o, s.subjectEl.classList.contains("fc-event-resizer-start"), v.range))), p && (h = ti(d, u.getCurrentData().eventUiBases, p, u), y.mutatedEvents = h, vs(y, o.dateProfile, u) || (g = !0, p = null, h = null, y.mutatedEvents = null)), h ? u.dispatch({
        type: "SET_EVENT_RESIZE",
        state: y
      }) : u.dispatch({ type: "UNSET_EVENT_RESIZE" }), g ? Va() : Ha(), r || (p && Yn(m, o) && (p = null), this.validMutation = p, this.mutatedRelevantEvents = h);
    }, this.handleDragEnd = (o) => {
      let { context: r } = this.component, s = this.eventRange.def, u = this.eventRange.instance, d = new De(r, s, u), m = this.relevantEvents, v = this.mutatedRelevantEvents;
      if (r.emitter.trigger("eventResizeStop", {
        el: this.draggingSegEl,
        event: d,
        jsEvent: o.origEvent,
        view: r.viewApi
      }), this.validMutation) {
        let p = new De(r, v.defs[s.defId], u ? v.instances[u.instanceId] : null);
        r.dispatch({
          type: "MERGE_EVENTS",
          eventStore: v
        });
        let h = {
          oldEvent: d,
          event: p,
          relatedEvents: bt(v, r, u),
          revert() {
            r.dispatch({
              type: "MERGE_EVENTS",
              eventStore: m
              // the pre-change events
            });
          }
        };
        r.emitter.trigger("eventResize", Object.assign(Object.assign({}, h), { el: this.draggingSegEl, startDelta: this.validMutation.startDelta || ke(0), endDelta: this.validMutation.endDelta || ke(0), jsEvent: o.origEvent, view: r.viewApi })), r.emitter.trigger("eventChange", h);
      } else
        r.emitter.trigger("_noEventResize");
      this.draggingSeg = null, this.relevantEvents = null, this.validMutation = null;
    };
    let { component: n } = e, a = this.dragging = new nn(e.el);
    a.pointer.selector = ".fc-event-resizer", a.touchScrollAllowed = !1, a.autoScroller.isEnabled = n.context.options.dragScroll;
    let i = this.hitDragging = new Wn(this.dragging, ni(e));
    i.emitter.on("pointerdown", this.handlePointerDown), i.emitter.on("dragstart", this.handleDragStart), i.emitter.on("hitupdate", this.handleHitUpdate), i.emitter.on("dragend", this.handleDragEnd);
  }
  destroy() {
    this.dragging.destroy();
  }
  querySegEl(e) {
    return Le(e.subjectEl, ".fc-event");
  }
}
function vk(t, e, n, a) {
  let i = t.context.dateEnv, o = t.dateSpan.range.start, r = e.dateSpan.range.start, s = It(o, r, i, t.largeUnit);
  if (n) {
    if (i.add(a.start, s) < a.end)
      return { startDelta: s };
  } else if (i.add(a.end, s) > a.start)
    return { endDelta: s };
  return null;
}
class pk {
  constructor(e) {
    this.context = e, this.isRecentPointerDateSelect = !1, this.matchesCancel = !1, this.matchesEvent = !1, this.onSelect = (a) => {
      a.jsEvent && (this.isRecentPointerDateSelect = !0);
    }, this.onDocumentPointerDown = (a) => {
      let i = this.context.options.unselectCancel, o = Rr(a.origEvent);
      this.matchesCancel = !!Le(o, i), this.matchesEvent = !!Le(o, an.SELECTOR);
    }, this.onDocumentPointerUp = (a) => {
      let { context: i } = this, { documentPointer: o } = this, r = i.getCurrentData();
      if (!o.wasTouchScroll) {
        if (r.dateSelection && // an existing date selection?
        !this.isRecentPointerDateSelect) {
          let s = i.options.unselectAuto;
          s && (!s || !this.matchesCancel) && i.calendarApi.unselect(a);
        }
        r.eventSelection && // an existing event selected?
        !this.matchesEvent && i.dispatch({ type: "UNSELECT_EVENT" });
      }
      this.isRecentPointerDateSelect = !1;
    };
    let n = this.documentPointer = new zs(document);
    n.shouldIgnoreMove = !0, n.shouldWatchScroll = !1, n.emitter.on("pointerdown", this.onDocumentPointerDown), n.emitter.on("pointerup", this.onDocumentPointerUp), e.emitter.on("select", this.onSelect);
  }
  destroy() {
    this.context.emitter.off("select", this.onSelect), this.documentPointer.destroy();
  }
}
const gk = {
  fixedMirrorParent: G
}, yk = {
  dateClick: G,
  eventDragStart: G,
  eventDragStop: G,
  eventDrop: G,
  eventResizeStart: G,
  eventResizeStop: G,
  eventResize: G,
  drop: G,
  eventReceive: G,
  eventLeave: G
};
ri.dataAttrPrefix = "";
var bk = ft({
  name: "@fullcalendar/interaction",
  componentInteractions: [lk, uk, an, hk],
  calendarInteractions: [pk],
  elementDraggingImpl: nn,
  optionRefiners: gk,
  listenerRefiners: yk
});
const _k = /* @__PURE__ */ JSON.parse(`[{"name":"Pacific/Midway","alternativeName":"American Samoa Time","group":["Pacific/Midway"],"continentCode":"OC","continentName":"Oceania","countryName":"United States Minor Outlying Islands","countryCode":"UM","mainCities":["Midway"],"rawOffsetInMinutes":-660,"abbreviation":"GMT-11","rawFormat":"-11:00 American Samoa Time - Midway"},{"name":"Pacific/Pago_Pago","alternativeName":"American Samoa Time","group":["Pacific/Pago_Pago","US/Samoa","Pacific/Samoa","Pacific/Midway"],"continentCode":"OC","continentName":"Oceania","countryName":"American Samoa","countryCode":"AS","mainCities":["Pago Pago"],"rawOffsetInMinutes":-660,"abbreviation":"GMT-11","rawFormat":"-11:00 American Samoa Time - Pago Pago"},{"name":"Pacific/Niue","alternativeName":"Niue Time","group":["Pacific/Niue"],"continentCode":"OC","continentName":"Oceania","countryName":"Niue","countryCode":"NU","mainCities":["Alofi"],"rawOffsetInMinutes":-660,"abbreviation":"NUT","rawFormat":"-11:00 Niue Time - Alofi"},{"name":"Pacific/Rarotonga","alternativeName":"Cook Islands Time","group":["Pacific/Rarotonga"],"continentCode":"OC","continentName":"Oceania","countryName":"Cook Islands","countryCode":"CK","mainCities":["Avarua"],"rawOffsetInMinutes":-600,"abbreviation":"CKT","rawFormat":"-10:00 Cook Islands Time - Avarua"},{"name":"America/Adak","alternativeName":"Hawaii-Aleutian Time","group":["America/Adak","US/Aleutian","America/Atka"],"continentCode":"NA","continentName":"North America","countryName":"United States","countryCode":"US","mainCities":["Adak"],"rawOffsetInMinutes":-600,"abbreviation":"HAST","rawFormat":"-10:00 Hawaii-Aleutian Time - Adak"},{"name":"Pacific/Honolulu","alternativeName":"Hawaii-Aleutian Time","group":["Pacific/Honolulu","US/Hawaii","Pacific/Johnston","HST"],"continentCode":"NA","continentName":"North America","countryName":"United States","countryCode":"US","mainCities":["Honolulu","East Honolulu","Pearl City","Makakilo / Kapolei / Honokai Hale"],"rawOffsetInMinutes":-600,"abbreviation":"HAST","rawFormat":"-10:00 Hawaii-Aleutian Time - Honolulu, East Honolulu, Pearl City, Makakilo / Kapolei / Honokai Hale"},{"name":"Pacific/Tahiti","alternativeName":"Tahiti Time","group":["Pacific/Tahiti"],"continentCode":"OC","continentName":"Oceania","countryName":"French Polynesia","countryCode":"PF","mainCities":["Faaa","Papeete","Punaauia"],"rawOffsetInMinutes":-600,"abbreviation":"TAHT","rawFormat":"-10:00 Tahiti Time - Faaa, Papeete, Punaauia"},{"name":"Pacific/Marquesas","alternativeName":"Marquesas Time","group":["Pacific/Marquesas"],"continentCode":"OC","continentName":"Oceania","countryName":"French Polynesia","countryCode":"PF","mainCities":["Marquesas"],"rawOffsetInMinutes":-570,"abbreviation":"MART","rawFormat":"-09:30 Marquesas Time - Marquesas"},{"name":"America/Anchorage","alternativeName":"Alaska Time","group":["America/Anchorage","America/Juneau","America/Metlakatla","America/Nome","America/Sitka","America/Yakutat","US/Alaska"],"continentCode":"NA","continentName":"North America","countryName":"United States","countryCode":"US","mainCities":["Anchorage","Fairbanks","Juneau","Eagle River"],"rawOffsetInMinutes":-540,"abbreviation":"AKST","rawFormat":"-09:00 Alaska Time - Anchorage, Fairbanks, Juneau, Eagle River"},{"name":"Pacific/Gambier","alternativeName":"Gambier Time","group":["Pacific/Gambier"],"continentCode":"OC","continentName":"Oceania","countryName":"French Polynesia","countryCode":"PF","mainCities":["Gambier"],"rawOffsetInMinutes":-540,"abbreviation":"GAMT","rawFormat":"-09:00 Gambier Time - Gambier"},{"name":"America/Los_Angeles","alternativeName":"Pacific Time","group":["America/Los_Angeles","US/Pacific","PST8PDT"],"continentCode":"NA","continentName":"North America","countryName":"United States","countryCode":"US","mainCities":["Los Angeles","San Diego","San Jose","San Francisco"],"rawOffsetInMinutes":-480,"abbreviation":"PST","rawFormat":"-08:00 Pacific Time - Los Angeles, San Diego, San Jose, San Francisco"},{"name":"America/Tijuana","alternativeName":"Pacific Time","group":["America/Tijuana","Mexico/BajaNorte","America/Ensenada","America/Santa_Isabel"],"continentCode":"NA","continentName":"North America","countryName":"Mexico","countryCode":"MX","mainCities":["Tijuana","Mexicali","Ensenada","Rosarito"],"rawOffsetInMinutes":-480,"abbreviation":"PST","rawFormat":"-08:00 Pacific Time - Tijuana, Mexicali, Ensenada, Rosarito"},{"name":"America/Vancouver","alternativeName":"Pacific Time","group":["America/Vancouver","Canada/Pacific"],"continentCode":"NA","continentName":"North America","countryName":"Canada","countryCode":"CA","mainCities":["Vancouver","Surrey","Victoria","Burnaby"],"rawOffsetInMinutes":-480,"abbreviation":"PST","rawFormat":"-08:00 Pacific Time - Vancouver, Surrey, Victoria, Burnaby"},{"name":"Pacific/Pitcairn","alternativeName":"Pitcairn Time","group":["Pacific/Pitcairn"],"continentCode":"OC","continentName":"Oceania","countryName":"Pitcairn","countryCode":"PN","mainCities":["Adamstown"],"rawOffsetInMinutes":-480,"abbreviation":"PST","rawFormat":"-08:00 Pitcairn Time - Adamstown"},{"name":"America/Hermosillo","alternativeName":"Mexican Pacific Time","group":["America/Hermosillo","America/Mazatlan","Mexico/BajaSur"],"continentCode":"NA","continentName":"North America","countryName":"Mexico","countryCode":"MX","mainCities":["Hermosillo","Culiacán","Mazatlán","Tepic"],"rawOffsetInMinutes":-420,"abbreviation":"GMT-7","rawFormat":"-07:00 Mexican Pacific Time - Hermosillo, Culiacán, Mazatlán, Tepic"},{"name":"America/Edmonton","alternativeName":"Mountain Time","group":["America/Cambridge_Bay","America/Edmonton","America/Inuvik","Canada/Mountain","America/Yellowknife"],"continentCode":"NA","continentName":"North America","countryName":"Canada","countryCode":"CA","mainCities":["Calgary","Edmonton","Lethbridge","Red Deer"],"rawOffsetInMinutes":-420,"abbreviation":"MST","rawFormat":"-07:00 Mountain Time - Calgary, Edmonton, Lethbridge, Red Deer"},{"name":"America/Ciudad_Juarez","alternativeName":"Mountain Time","group":["America/Ciudad_Juarez"],"continentCode":"NA","continentName":"North America","countryName":"Mexico","countryCode":"MX","mainCities":["Ciudad Juárez"],"rawOffsetInMinutes":-420,"abbreviation":"MST","rawFormat":"-07:00 Mountain Time - Ciudad Juárez"},{"name":"America/Denver","alternativeName":"Mountain Time","group":["America/Boise","America/Denver","MST7MDT","Navajo","US/Mountain","America/Shiprock"],"continentCode":"NA","continentName":"North America","countryName":"United States","countryCode":"US","mainCities":["Denver","El Paso","Albuquerque","Colorado Springs"],"rawOffsetInMinutes":-420,"abbreviation":"MST","rawFormat":"-07:00 Mountain Time - Denver, El Paso, Albuquerque, Colorado Springs"},{"name":"America/Phoenix","alternativeName":"Mountain Time","group":["America/Phoenix","MST","US/Arizona","America/Creston"],"continentCode":"NA","continentName":"North America","countryName":"United States","countryCode":"US","mainCities":["Phoenix","Tucson","Mesa","Chandler"],"rawOffsetInMinutes":-420,"abbreviation":"MST","rawFormat":"-07:00 Mountain Time - Phoenix, Tucson, Mesa, Chandler"},{"name":"America/Whitehorse","alternativeName":"Yukon Time","group":["America/Creston","America/Dawson","America/Dawson_Creek","America/Fort_Nelson","America/Whitehorse","Canada/Yukon"],"continentCode":"NA","continentName":"North America","countryName":"Canada","countryCode":"CA","mainCities":["Whitehorse","Fort St. John","Creston","Dawson"],"rawOffsetInMinutes":-420,"abbreviation":"YT","rawFormat":"-07:00 Yukon Time - Whitehorse, Fort St. John, Creston, Dawson"},{"name":"America/Belize","alternativeName":"Central Time","group":["America/Belize"],"continentCode":"NA","continentName":"North America","countryName":"Belize","countryCode":"BZ","mainCities":["Belize City","San Pedro","Orange Walk","Belmopan"],"rawOffsetInMinutes":-360,"abbreviation":"CST","rawFormat":"-06:00 Central Time - Belize City, San Pedro, Orange Walk, Belmopan"},{"name":"America/Chicago","alternativeName":"Central Time","group":["America/Chicago","America/Indiana/Knox","America/Indiana/Tell_City","America/Menominee","America/North_Dakota/Beulah","America/North_Dakota/Center","America/North_Dakota/New_Salem","CST6CDT","US/Central","US/Indiana-Starke","America/Knox_IN"],"continentCode":"NA","continentName":"North America","countryName":"United States","countryCode":"US","mainCities":["Chicago","Houston","San Antonio","Dallas"],"rawOffsetInMinutes":-360,"abbreviation":"CST","rawFormat":"-06:00 Central Time - Chicago, Houston, San Antonio, Dallas"},{"name":"America/Guatemala","alternativeName":"Central Time","group":["America/Guatemala"],"continentCode":"NA","continentName":"North America","countryName":"Guatemala","countryCode":"GT","mainCities":["Guatemala City","Villa Nueva","Mixco","Cobán"],"rawOffsetInMinutes":-360,"abbreviation":"CST","rawFormat":"-06:00 Central Time - Guatemala City, Villa Nueva, Mixco, Cobán"},{"name":"America/Managua","alternativeName":"Central Time","group":["America/Managua"],"continentCode":"NA","continentName":"North America","countryName":"Nicaragua","countryCode":"NI","mainCities":["Managua","León","Masaya","Chinandega"],"rawOffsetInMinutes":-360,"abbreviation":"CST","rawFormat":"-06:00 Central Time - Managua, León, Masaya, Chinandega"},{"name":"America/Mexico_City","alternativeName":"Central Time","group":["America/Bahia_Banderas","America/Chihuahua","America/Merida","America/Mexico_City","America/Monterrey","Mexico/General"],"continentCode":"NA","continentName":"North America","countryName":"Mexico","countryCode":"MX","mainCities":["Mexico City","Iztapalapa","Puebla","Ecatepec de Morelos"],"rawOffsetInMinutes":-360,"abbreviation":"CST","rawFormat":"-06:00 Central Time - Mexico City, Iztapalapa, Puebla, Ecatepec de Morelos"},{"name":"America/Matamoros","alternativeName":"Central Time","group":["America/Matamoros","America/Ojinaga"],"continentCode":"NA","continentName":"North America","countryName":"Mexico","countryCode":"MX","mainCities":["Reynosa","Heroica Matamoros","Nuevo Laredo","Ciudad Acuña"],"rawOffsetInMinutes":-360,"abbreviation":"CST","rawFormat":"-06:00 Central Time - Reynosa, Heroica Matamoros, Nuevo Laredo, Ciudad Acuña"},{"name":"America/Costa_Rica","alternativeName":"Central Time","group":["America/Costa_Rica"],"continentCode":"NA","continentName":"North America","countryName":"Costa Rica","countryCode":"CR","mainCities":["San José","Limón","San Francisco","Alajuela"],"rawOffsetInMinutes":-360,"abbreviation":"CST","rawFormat":"-06:00 Central Time - San José, Limón, San Francisco, Alajuela"},{"name":"America/El_Salvador","alternativeName":"Central Time","group":["America/El_Salvador"],"continentCode":"NA","continentName":"North America","countryName":"El Salvador","countryCode":"SV","mainCities":["San Salvador","Soyapango","San Miguel","Santa Ana"],"rawOffsetInMinutes":-360,"abbreviation":"CST","rawFormat":"-06:00 Central Time - San Salvador, Soyapango, San Miguel, Santa Ana"},{"name":"America/Regina","alternativeName":"Central Time","group":["America/Regina","America/Swift_Current","Canada/Saskatchewan"],"continentCode":"NA","continentName":"North America","countryName":"Canada","countryCode":"CA","mainCities":["Saskatoon","Regina","Prince Albert","Moose Jaw"],"rawOffsetInMinutes":-360,"abbreviation":"CST","rawFormat":"-06:00 Central Time - Saskatoon, Regina, Prince Albert, Moose Jaw"},{"name":"America/Tegucigalpa","alternativeName":"Central Time","group":["America/Tegucigalpa"],"continentCode":"NA","continentName":"North America","countryName":"Honduras","countryCode":"HN","mainCities":["Tegucigalpa","San Pedro Sula","La Ceiba","Choloma"],"rawOffsetInMinutes":-360,"abbreviation":"CST","rawFormat":"-06:00 Central Time - Tegucigalpa, San Pedro Sula, La Ceiba, Choloma"},{"name":"America/Winnipeg","alternativeName":"Central Time","group":["America/Rankin_Inlet","America/Resolute","America/Winnipeg","Canada/Central","America/Rainy_River"],"continentCode":"NA","continentName":"North America","countryName":"Canada","countryCode":"CA","mainCities":["Winnipeg","Brandon","Steinbach","Kenora"],"rawOffsetInMinutes":-360,"abbreviation":"CST","rawFormat":"-06:00 Central Time - Winnipeg, Brandon, Steinbach, Kenora"},{"name":"Pacific/Easter","alternativeName":"Easter Island Time","group":["Pacific/Easter","Chile/EasterIsland"],"continentCode":"SA","continentName":"South America","countryName":"Chile","countryCode":"CL","mainCities":["Easter"],"rawOffsetInMinutes":-360,"abbreviation":"EAST","rawFormat":"-06:00 Easter Island Time - Easter"},{"name":"Pacific/Galapagos","alternativeName":"Galapagos Time","group":["Pacific/Galapagos"],"continentCode":"SA","continentName":"South America","countryName":"Ecuador","countryCode":"EC","mainCities":["Galapagos"],"rawOffsetInMinutes":-360,"abbreviation":"GALT","rawFormat":"-06:00 Galapagos Time - Galapagos"},{"name":"America/Rio_Branco","alternativeName":"Acre Time","group":["America/Eirunepe","America/Rio_Branco","Brazil/Acre","America/Porto_Acre"],"continentCode":"SA","continentName":"South America","countryName":"Brazil","countryCode":"BR","mainCities":["Rio Branco","Cruzeiro do Sul","Tarauacá","Sena Madureira"],"rawOffsetInMinutes":-300,"abbreviation":"ACT","rawFormat":"-05:00 Acre Time - Rio Branco, Cruzeiro do Sul, Tarauacá, Sena Madureira"},{"name":"America/Bogota","alternativeName":"Colombia Time","group":["America/Bogota"],"continentCode":"SA","continentName":"South America","countryName":"Colombia","countryCode":"CO","mainCities":["Bogotá","Cali","Medellín","Barranquilla"],"rawOffsetInMinutes":-300,"abbreviation":"COT","rawFormat":"-05:00 Colombia Time - Bogotá, Cali, Medellín, Barranquilla"},{"name":"America/Havana","alternativeName":"Cuba Time","group":["America/Havana","Cuba"],"continentCode":"NA","continentName":"North America","countryName":"Cuba","countryCode":"CU","mainCities":["Havana","Santiago de Cuba","Camagüey","Holguín"],"rawOffsetInMinutes":-300,"abbreviation":"CST","rawFormat":"-05:00 Cuba Time - Havana, Santiago de Cuba, Camagüey, Holguín"},{"name":"America/Atikokan","alternativeName":"Eastern Time","group":["America/Atikokan"],"continentCode":"NA","continentName":"North America","countryName":"Canada","countryCode":"CA","mainCities":["Atikokan"],"rawOffsetInMinutes":-300,"abbreviation":"EST","rawFormat":"-05:00 Eastern Time - Atikokan"},{"name":"America/Cancun","alternativeName":"Eastern Time","group":["America/Cancun"],"continentCode":"NA","continentName":"North America","countryName":"Mexico","countryCode":"MX","mainCities":["Cancún","Chetumal","Playa del Carmen","Cozumel"],"rawOffsetInMinutes":-300,"abbreviation":"EST","rawFormat":"-05:00 Eastern Time - Cancún, Chetumal, Playa del Carmen, Cozumel"},{"name":"America/Cayman","alternativeName":"Eastern Time","group":["America/Cayman"],"continentCode":"NA","continentName":"North America","countryName":"Cayman Islands","countryCode":"KY","mainCities":["George Town","West Bay"],"rawOffsetInMinutes":-300,"abbreviation":"EST","rawFormat":"-05:00 Eastern Time - George Town, West Bay"},{"name":"America/Jamaica","alternativeName":"Eastern Time","group":["America/Jamaica","Jamaica"],"continentCode":"NA","continentName":"North America","countryName":"Jamaica","countryCode":"JM","mainCities":["Kingston","New Kingston","Spanish Town","Portmore"],"rawOffsetInMinutes":-300,"abbreviation":"EST","rawFormat":"-05:00 Eastern Time - Kingston, New Kingston, Spanish Town, Portmore"},{"name":"America/Nassau","alternativeName":"Eastern Time","group":["America/Nassau"],"continentCode":"NA","continentName":"North America","countryName":"Bahamas","countryCode":"BS","mainCities":["Nassau","Lucaya","Freeport","Killarney"],"rawOffsetInMinutes":-300,"abbreviation":"EST","rawFormat":"-05:00 Eastern Time - Nassau, Lucaya, Freeport, Killarney"},{"name":"America/New_York","alternativeName":"Eastern Time","group":["America/Detroit","America/Indiana/Indianapolis","America/Indiana/Marengo","America/Indiana/Petersburg","America/Indiana/Vevay","America/Indiana/Vincennes","America/Indiana/Winamac","America/Kentucky/Louisville","America/Kentucky/Monticello","America/New_York","US/Michigan","US/East-Indiana","America/Indianapolis","America/Fort_Wayne","America/Louisville","EST5EDT","US/Eastern"],"continentCode":"NA","continentName":"North America","countryName":"United States","countryCode":"US","mainCities":["New York City","Brooklyn","Queens","Philadelphia"],"rawOffsetInMinutes":-300,"abbreviation":"EST","rawFormat":"-05:00 Eastern Time - New York City, Brooklyn, Queens, Philadelphia"},{"name":"America/Panama","alternativeName":"Eastern Time","group":["America/Panama","EST","America/Atikokan","America/Cayman","America/Coral_Harbour"],"continentCode":"NA","continentName":"North America","countryName":"Panama","countryCode":"PA","mainCities":["Panamá","San Miguelito","Juan Díaz","David"],"rawOffsetInMinutes":-300,"abbreviation":"EST","rawFormat":"-05:00 Eastern Time - Panamá, San Miguelito, Juan Díaz, David"},{"name":"America/Port-au-Prince","alternativeName":"Eastern Time","group":["America/Port-au-Prince"],"continentCode":"NA","continentName":"North America","countryName":"Haiti","countryCode":"HT","mainCities":["Port-au-Prince","Carrefour","Delmas","Port-de-Paix"],"rawOffsetInMinutes":-300,"abbreviation":"EST","rawFormat":"-05:00 Eastern Time - Port-au-Prince, Carrefour, Delmas, Port-de-Paix"},{"name":"America/Grand_Turk","alternativeName":"Eastern Time","group":["America/Grand_Turk"],"continentCode":"NA","continentName":"North America","countryName":"Turks and Caicos Islands","countryCode":"TC","mainCities":["Providenciales","Cockburn Town"],"rawOffsetInMinutes":-300,"abbreviation":"EST","rawFormat":"-05:00 Eastern Time - Providenciales, Cockburn Town"},{"name":"America/Toronto","alternativeName":"Eastern Time","group":["America/Iqaluit","America/Toronto","America/Pangnirtung","Canada/Eastern","America/Nassau","America/Montreal","America/Nipigon","America/Thunder_Bay"],"continentCode":"NA","continentName":"North America","countryName":"Canada","countryCode":"CA","mainCities":["Toronto","Montréal","Ottawa","Mississauga"],"rawOffsetInMinutes":-300,"abbreviation":"EST","rawFormat":"-05:00 Eastern Time - Toronto, Montréal, Ottawa, Mississauga"},{"name":"America/Guayaquil","alternativeName":"Ecuador Time","group":["America/Guayaquil"],"continentCode":"SA","continentName":"South America","countryName":"Ecuador","countryCode":"EC","mainCities":["Quito","Guayaquil","Cuenca","Santo Domingo de los Colorados"],"rawOffsetInMinutes":-300,"abbreviation":"ECT","rawFormat":"-05:00 Ecuador Time - Quito, Guayaquil, Cuenca, Santo Domingo de los Colorados"},{"name":"America/Lima","alternativeName":"Peru Time","group":["America/Lima"],"continentCode":"SA","continentName":"South America","countryName":"Peru","countryCode":"PE","mainCities":["Lima","Callao","Arequipa","Trujillo"],"rawOffsetInMinutes":-300,"abbreviation":"PET","rawFormat":"-05:00 Peru Time - Lima, Callao, Arequipa, Trujillo"},{"name":"America/Manaus","alternativeName":"Amazon Time","group":["America/Boa_Vista","America/Campo_Grande","America/Cuiaba","America/Manaus","America/Porto_Velho","Brazil/West"],"continentCode":"SA","continentName":"South America","countryName":"Brazil","countryCode":"BR","mainCities":["Manaus","Campo Grande","Cuiabá","Porto Velho"],"rawOffsetInMinutes":-240,"abbreviation":"AMT","rawFormat":"-04:00 Amazon Time - Manaus, Campo Grande, Cuiabá, Porto Velho"},{"name":"America/St_Kitts","alternativeName":"Atlantic Time","group":["America/St_Kitts"],"continentCode":"NA","continentName":"North America","countryName":"Saint Kitts and Nevis","countryCode":"KN","mainCities":["Basseterre"],"rawOffsetInMinutes":-240,"abbreviation":"AST","rawFormat":"-04:00 Atlantic Time - Basseterre"},{"name":"America/Blanc-Sablon","alternativeName":"Atlantic Time","group":["America/Blanc-Sablon"],"continentCode":"NA","continentName":"North America","countryName":"Canada","countryCode":"CA","mainCities":["Blanc-Sablon"],"rawOffsetInMinutes":-240,"abbreviation":"AST","rawFormat":"-04:00 Atlantic Time - Blanc-Sablon"},{"name":"America/Montserrat","alternativeName":"Atlantic Time","group":["America/Montserrat"],"continentCode":"NA","continentName":"North America","countryName":"Montserrat","countryCode":"MS","mainCities":["Brades","Plymouth"],"rawOffsetInMinutes":-240,"abbreviation":"AST","rawFormat":"-04:00 Atlantic Time - Brades, Plymouth"},{"name":"America/Barbados","alternativeName":"Atlantic Time","group":["America/Barbados"],"continentCode":"NA","continentName":"North America","countryName":"Barbados","countryCode":"BB","mainCities":["Bridgetown"],"rawOffsetInMinutes":-240,"abbreviation":"AST","rawFormat":"-04:00 Atlantic Time - Bridgetown"},{"name":"America/Port_of_Spain","alternativeName":"Atlantic Time","group":["America/Port_of_Spain"],"continentCode":"NA","continentName":"North America","countryName":"Trinidad and Tobago","countryCode":"TT","mainCities":["Chaguanas","Mon Repos","San Fernando","Port of Spain"],"rawOffsetInMinutes":-240,"abbreviation":"AST","rawFormat":"-04:00 Atlantic Time - Chaguanas, Mon Repos, San Fernando, Port of Spain"},{"name":"America/Martinique","alternativeName":"Atlantic Time","group":["America/Martinique"],"continentCode":"NA","continentName":"North America","countryName":"Martinique","countryCode":"MQ","mainCities":["Fort-de-France","Le Lamentin","Le Robert","Sainte-Marie"],"rawOffsetInMinutes":-240,"abbreviation":"AST","rawFormat":"-04:00 Atlantic Time - Fort-de-France, Le Lamentin, Le Robert, Sainte-Marie"},{"name":"America/St_Lucia","alternativeName":"Atlantic Time","group":["America/St_Lucia"],"continentCode":"NA","continentName":"North America","countryName":"Saint Lucia","countryCode":"LC","mainCities":["Gros Islet","Castries"],"rawOffsetInMinutes":-240,"abbreviation":"AST","rawFormat":"-04:00 Atlantic Time - Gros Islet, Castries"},{"name":"America/St_Barthelemy","alternativeName":"Atlantic Time","group":["America/St_Barthelemy"],"continentCode":"NA","continentName":"North America","countryName":"Saint Barthelemy","countryCode":"BL","mainCities":["Gustavia"],"rawOffsetInMinutes":-240,"abbreviation":"AST","rawFormat":"-04:00 Atlantic Time - Gustavia"},{"name":"America/Halifax","alternativeName":"Atlantic Time","group":["America/Glace_Bay","America/Goose_Bay","America/Halifax","America/Moncton","Canada/Atlantic"],"continentCode":"NA","continentName":"North America","countryName":"Canada","countryCode":"CA","mainCities":["Halifax","Sydney","Dartmouth","Moncton"],"rawOffsetInMinutes":-240,"abbreviation":"AST","rawFormat":"-04:00 Atlantic Time - Halifax, Sydney, Dartmouth, Moncton"},{"name":"Atlantic/Bermuda","alternativeName":"Atlantic Time","group":["Atlantic/Bermuda"],"continentCode":"NA","continentName":"North America","countryName":"Bermuda","countryCode":"BM","mainCities":["Hamilton"],"rawOffsetInMinutes":-240,"abbreviation":"AST","rawFormat":"-04:00 Atlantic Time - Hamilton"},{"name":"America/St_Vincent","alternativeName":"Atlantic Time","group":["America/St_Vincent"],"continentCode":"NA","continentName":"North America","countryName":"Saint Vincent and the Grenadines","countryCode":"VC","mainCities":["Kingstown","Calliaqua"],"rawOffsetInMinutes":-240,"abbreviation":"AST","rawFormat":"-04:00 Atlantic Time - Kingstown, Calliaqua"},{"name":"America/Kralendijk","alternativeName":"Atlantic Time","group":["America/Kralendijk"],"continentCode":"NA","continentName":"North America","countryName":"Bonaire, Saint Eustatius and Saba ","countryCode":"BQ","mainCities":["Kralendijk"],"rawOffsetInMinutes":-240,"abbreviation":"AST","rawFormat":"-04:00 Atlantic Time - Kralendijk"},{"name":"America/Guadeloupe","alternativeName":"Atlantic Time","group":["America/Guadeloupe"],"continentCode":"NA","continentName":"North America","countryName":"Guadeloupe","countryCode":"GP","mainCities":["Les Abymes","Baie-Mahault","Le Gosier","Petit-Bourg"],"rawOffsetInMinutes":-240,"abbreviation":"AST","rawFormat":"-04:00 Atlantic Time - Les Abymes, Baie-Mahault, Le Gosier, Petit-Bourg"},{"name":"America/Marigot","alternativeName":"Atlantic Time","group":["America/Marigot"],"continentCode":"NA","continentName":"North America","countryName":"Saint Martin","countryCode":"MF","mainCities":["Marigot"],"rawOffsetInMinutes":-240,"abbreviation":"AST","rawFormat":"-04:00 Atlantic Time - Marigot"},{"name":"America/Aruba","alternativeName":"Atlantic Time","group":["America/Aruba"],"continentCode":"NA","continentName":"North America","countryName":"Aruba","countryCode":"AW","mainCities":["Oranjestad","Noord","Tanki Leendert","San Nicolas"],"rawOffsetInMinutes":-240,"abbreviation":"AST","rawFormat":"-04:00 Atlantic Time - Oranjestad, Noord, Tanki Leendert, San Nicolas"},{"name":"America/Lower_Princes","alternativeName":"Atlantic Time","group":["America/Lower_Princes"],"continentCode":"NA","continentName":"North America","countryName":"Sint Maarten","countryCode":"SX","mainCities":["Philipsburg"],"rawOffsetInMinutes":-240,"abbreviation":"AST","rawFormat":"-04:00 Atlantic Time - Philipsburg"},{"name":"America/Tortola","alternativeName":"Atlantic Time","group":["America/Tortola"],"continentCode":"NA","continentName":"North America","countryName":"British Virgin Islands","countryCode":"VG","mainCities":["Road Town"],"rawOffsetInMinutes":-240,"abbreviation":"AST","rawFormat":"-04:00 Atlantic Time - Road Town"},{"name":"America/Dominica","alternativeName":"Atlantic Time","group":["America/Dominica"],"continentCode":"NA","continentName":"North America","countryName":"Dominica","countryCode":"DM","mainCities":["Roseau"],"rawOffsetInMinutes":-240,"abbreviation":"AST","rawFormat":"-04:00 Atlantic Time - Roseau"},{"name":"America/St_Thomas","alternativeName":"Atlantic Time","group":["America/St_Thomas"],"continentCode":"NA","continentName":"North America","countryName":"U.S. Virgin Islands","countryCode":"VI","mainCities":["Saint Croix","Charlotte Amalie"],"rawOffsetInMinutes":-240,"abbreviation":"AST","rawFormat":"-04:00 Atlantic Time - Saint Croix, Charlotte Amalie"},{"name":"America/Grenada","alternativeName":"Atlantic Time","group":["America/Grenada"],"continentCode":"NA","continentName":"North America","countryName":"Grenada","countryCode":"GD","mainCities":["Saint George's"],"rawOffsetInMinutes":-240,"abbreviation":"AST","rawFormat":"-04:00 Atlantic Time - Saint George's"},{"name":"America/Antigua","alternativeName":"Atlantic Time","group":["America/Antigua"],"continentCode":"NA","continentName":"North America","countryName":"Antigua and Barbuda","countryCode":"AG","mainCities":["Saint John’s"],"rawOffsetInMinutes":-240,"abbreviation":"AST","rawFormat":"-04:00 Atlantic Time - Saint John’s"},{"name":"America/Puerto_Rico","alternativeName":"Atlantic Time","group":["America/Puerto_Rico","America/Virgin","America/Anguilla","America/Antigua","America/Aruba","America/Blanc-Sablon","America/Curacao","America/Dominica","America/Grenada","America/Guadeloupe","America/Kralendijk","America/Lower_Princes","America/Marigot","America/Montserrat","America/Port_of_Spain","America/St_Barthelemy","America/St_Kitts","America/St_Lucia","America/St_Thomas","America/St_Vincent","America/Tortola"],"continentCode":"NA","continentName":"North America","countryName":"Puerto Rico","countryCode":"PR","mainCities":["San Juan","Bayamón","Carolina","Ponce"],"rawOffsetInMinutes":-240,"abbreviation":"AST","rawFormat":"-04:00 Atlantic Time - San Juan, Bayamón, Carolina, Ponce"},{"name":"America/Santo_Domingo","alternativeName":"Atlantic Time","group":["America/Santo_Domingo"],"continentCode":"NA","continentName":"North America","countryName":"Dominican Republic","countryCode":"DO","mainCities":["Santo Domingo","Santiago de los Caballeros","Santo Domingo Oeste","Santo Domingo Este"],"rawOffsetInMinutes":-240,"abbreviation":"AST","rawFormat":"-04:00 Atlantic Time - Santo Domingo, Santiago de los Caballeros, Santo Domingo Oeste, Santo Domingo Este"},{"name":"America/Anguilla","alternativeName":"Atlantic Time","group":["America/Anguilla"],"continentCode":"NA","continentName":"North America","countryName":"Anguilla","countryCode":"AI","mainCities":["The Valley"],"rawOffsetInMinutes":-240,"abbreviation":"AST","rawFormat":"-04:00 Atlantic Time - The Valley"},{"name":"America/Thule","alternativeName":"Atlantic Time","group":["America/Thule"],"continentCode":"NA","continentName":"North America","countryName":"Greenland","countryCode":"GL","mainCities":["Thule"],"rawOffsetInMinutes":-240,"abbreviation":"AST","rawFormat":"-04:00 Atlantic Time - Thule"},{"name":"America/Curacao","alternativeName":"Atlantic Time","group":["America/Curacao"],"continentCode":"NA","continentName":"North America","countryName":"Curacao","countryCode":"CW","mainCities":["Willemstad","Bandariba"],"rawOffsetInMinutes":-240,"abbreviation":"AST","rawFormat":"-04:00 Atlantic Time - Willemstad, Bandariba"},{"name":"America/La_Paz","alternativeName":"Bolivia Time","group":["America/La_Paz"],"continentCode":"SA","continentName":"South America","countryName":"Bolivia","countryCode":"BO","mainCities":["La Paz","Santa Cruz de la Sierra","Cochabamba","Sucre"],"rawOffsetInMinutes":-240,"abbreviation":"BOT","rawFormat":"-04:00 Bolivia Time - La Paz, Santa Cruz de la Sierra, Cochabamba, Sucre"},{"name":"America/Santiago","alternativeName":"Chile Time","group":["America/Santiago","Chile/Continental"],"continentCode":"SA","continentName":"South America","countryName":"Chile","countryCode":"CL","mainCities":["Santiago","Puente Alto","Maipú","Antofagasta"],"rawOffsetInMinutes":-240,"abbreviation":"CLT","rawFormat":"-04:00 Chile Time - Santiago, Puente Alto, Maipú, Antofagasta"},{"name":"America/Guyana","alternativeName":"Guyana Time","group":["America/Guyana"],"continentCode":"SA","continentName":"South America","countryName":"Guyana","countryCode":"GY","mainCities":["Georgetown","Linden","New Amsterdam"],"rawOffsetInMinutes":-240,"abbreviation":"GYT","rawFormat":"-04:00 Guyana Time - Georgetown, Linden, New Amsterdam"},{"name":"America/Caracas","alternativeName":"Venezuela Time","group":["America/Caracas"],"continentCode":"SA","continentName":"South America","countryName":"Venezuela","countryCode":"VE","mainCities":["Caracas","Maracaibo","Valencia","Barquisimeto"],"rawOffsetInMinutes":-240,"abbreviation":"VET","rawFormat":"-04:00 Venezuela Time - Caracas, Maracaibo, Valencia, Barquisimeto"},{"name":"America/St_Johns","alternativeName":"Newfoundland Time","group":["America/St_Johns","Canada/Newfoundland"],"continentCode":"NA","continentName":"North America","countryName":"Canada","countryCode":"CA","mainCities":["St. John's","Mount Pearl","Paradise","Corner Brook"],"rawOffsetInMinutes":-210,"abbreviation":"NST","rawFormat":"-03:30 Newfoundland Time - St. John's, Mount Pearl, Paradise, Corner Brook"},{"name":"America/Argentina/Buenos_Aires","alternativeName":"Argentina Time","group":["America/Argentina/Buenos_Aires","America/Argentina/Catamarca","America/Argentina/Cordoba","America/Argentina/Jujuy","America/Argentina/La_Rioja","America/Argentina/Mendoza","America/Argentina/Rio_Gallegos","America/Argentina/Salta","America/Argentina/San_Juan","America/Argentina/San_Luis","America/Argentina/Tucuman","America/Argentina/Ushuaia","America/Buenos_Aires","America/Catamarca","America/Argentina/ComodRivadavia","America/Cordoba","America/Rosario","America/Jujuy","America/Mendoza"],"continentCode":"SA","continentName":"South America","countryName":"Argentina","countryCode":"AR","mainCities":["Buenos Aires","Córdoba","Rosario","Mar del Plata"],"rawOffsetInMinutes":-180,"abbreviation":"ART","rawFormat":"-03:00 Argentina Time - Buenos Aires, Córdoba, Rosario, Mar del Plata"},{"name":"America/Sao_Paulo","alternativeName":"Brasilia Time","group":["America/Araguaina","America/Bahia","America/Belem","America/Fortaleza","America/Maceio","America/Recife","America/Santarem","America/Sao_Paulo","Brazil/East"],"continentCode":"SA","continentName":"South America","countryName":"Brazil","countryCode":"BR","mainCities":["São Paulo","Rio de Janeiro","Belo Horizonte","Salvador"],"rawOffsetInMinutes":-180,"abbreviation":"BRT","rawFormat":"-03:00 Brasilia Time - São Paulo, Rio de Janeiro, Belo Horizonte, Salvador"},{"name":"Antarctica/Palmer","alternativeName":"Chile Time","group":["Antarctica/Palmer","Antarctica/Rothera"],"continentCode":"AN","continentName":"Antarctica","countryName":"Antarctica","countryCode":"AQ","mainCities":["Palmer","Rothera"],"rawOffsetInMinutes":-180,"abbreviation":"CLT","rawFormat":"-03:00 Chile Time - Palmer, Rothera"},{"name":"America/Punta_Arenas","alternativeName":"Chile Time","group":["America/Coyhaique","America/Punta_Arenas"],"continentCode":"SA","continentName":"South America","countryName":"Chile","countryCode":"CL","mainCities":["Punta Arenas","Coyhaique","Puerto Natales","Puerto Aysén"],"rawOffsetInMinutes":-180,"abbreviation":"CLT","rawFormat":"-03:00 Chile Time - Punta Arenas, Coyhaique, Puerto Natales, Puerto Aysén"},{"name":"Atlantic/Stanley","alternativeName":"Falkland Islands Time","group":["Atlantic/Stanley"],"continentCode":"SA","continentName":"South America","countryName":"Falkland Islands","countryCode":"FK","mainCities":["Stanley"],"rawOffsetInMinutes":-180,"abbreviation":"FKST","rawFormat":"-03:00 Falkland Islands Time - Stanley"},{"name":"America/Cayenne","alternativeName":"French Guiana Time","group":["America/Cayenne"],"continentCode":"SA","continentName":"South America","countryName":"French Guiana","countryCode":"GF","mainCities":["Cayenne","Matoury","Saint-Laurent-du-Maroni","Kourou"],"rawOffsetInMinutes":-180,"abbreviation":"GFT","rawFormat":"-03:00 French Guiana Time - Cayenne, Matoury, Saint-Laurent-du-Maroni, Kourou"},{"name":"America/Asuncion","alternativeName":"Paraguay Time","group":["America/Asuncion"],"continentCode":"SA","continentName":"South America","countryName":"Paraguay","countryCode":"PY","mainCities":["Asunción","Ciudad del Este","San Lorenzo","Capiatá"],"rawOffsetInMinutes":-180,"abbreviation":"PYT","rawFormat":"-03:00 Paraguay Time - Asunción, Ciudad del Este, San Lorenzo, Capiatá"},{"name":"America/Miquelon","alternativeName":"St. Pierre & Miquelon Time","group":["America/Miquelon"],"continentCode":"NA","continentName":"North America","countryName":"Saint Pierre and Miquelon","countryCode":"PM","mainCities":["Saint-Pierre"],"rawOffsetInMinutes":-180,"abbreviation":"PM","rawFormat":"-03:00 St. Pierre & Miquelon Time - Saint-Pierre"},{"name":"America/Paramaribo","alternativeName":"Suriname Time","group":["America/Paramaribo"],"continentCode":"SA","continentName":"South America","countryName":"Suriname","countryCode":"SR","mainCities":["Paramaribo","Blauwgrond","Rainville","Flora"],"rawOffsetInMinutes":-180,"abbreviation":"SRT","rawFormat":"-03:00 Suriname Time - Paramaribo, Blauwgrond, Rainville, Flora"},{"name":"America/Montevideo","alternativeName":"Uruguay Time","group":["America/Montevideo"],"continentCode":"SA","continentName":"South America","countryName":"Uruguay","countryCode":"UY","mainCities":["Montevideo","Salto","Paysandú","Las Piedras"],"rawOffsetInMinutes":-180,"abbreviation":"UYT","rawFormat":"-03:00 Uruguay Time - Montevideo, Salto, Paysandú, Las Piedras"},{"name":"America/Noronha","alternativeName":"Fernando de Noronha Time","group":["America/Noronha","Brazil/DeNoronha"],"continentCode":"SA","continentName":"South America","countryName":"Brazil","countryCode":"BR","mainCities":["Noronha"],"rawOffsetInMinutes":-120,"abbreviation":"FNT","rawFormat":"-02:00 Fernando de Noronha Time - Noronha"},{"name":"America/Nuuk","alternativeName":"Greenland Time","group":["America/Nuuk","America/Scoresbysund","America/Godthab"],"continentCode":"NA","continentName":"North America","countryName":"Greenland","countryCode":"GL","mainCities":["Nuuk","Scoresbysund"],"rawOffsetInMinutes":-120,"abbreviation":"GMT-2","rawFormat":"-02:00 Greenland Time - Nuuk, Scoresbysund"},{"name":"Atlantic/South_Georgia","alternativeName":"South Georgia Time","group":["Atlantic/South_Georgia"],"continentCode":"AN","continentName":"Antarctica","countryName":"South Georgia and the South Sandwich Islands","countryCode":"GS","mainCities":["Grytviken"],"rawOffsetInMinutes":-120,"abbreviation":"GST","rawFormat":"-02:00 South Georgia Time - Grytviken"},{"name":"Atlantic/Azores","alternativeName":"Azores Time","group":["Atlantic/Azores"],"continentCode":"EU","continentName":"Europe","countryName":"Portugal","countryCode":"PT","mainCities":["Ponta Delgada"],"rawOffsetInMinutes":-60,"abbreviation":"AZOT","rawFormat":"-01:00 Azores Time - Ponta Delgada"},{"name":"Atlantic/Cape_Verde","alternativeName":"Cape Verde Time","group":["Atlantic/Cape_Verde"],"continentCode":"AF","continentName":"Africa","countryName":"Cabo Verde","countryCode":"CV","mainCities":["Praia","Mindelo","Espargos","Assomada"],"rawOffsetInMinutes":-60,"abbreviation":"CVT","rawFormat":"-01:00 Cape Verde Time - Praia, Mindelo, Espargos, Assomada"},{"name":"Africa/Abidjan","alternativeName":"Greenwich Mean Time","group":["Africa/Abidjan","Iceland","Africa/Accra","Africa/Bamako","Africa/Banjul","Africa/Conakry","Africa/Dakar","Africa/Freetown","Africa/Lome","Africa/Nouakchott","Africa/Ouagadougou","Atlantic/Reykjavik","Atlantic/St_Helena","Africa/Timbuktu"],"continentCode":"AF","continentName":"Africa","countryName":"Ivory Coast","countryCode":"CI","mainCities":["Abidjan","Abobo","Bouaké","Korhogo"],"rawOffsetInMinutes":0,"abbreviation":"GMT","rawFormat":"+00:00 Greenwich Mean Time - Abidjan, Abobo, Bouaké, Korhogo"},{"name":"Africa/Bamako","alternativeName":"Greenwich Mean Time","group":["Africa/Bamako"],"continentCode":"AF","continentName":"Africa","countryName":"Mali","countryCode":"ML","mainCities":["Bamako","Sikasso","Koutiala","Ségou"],"rawOffsetInMinutes":0,"abbreviation":"GMT","rawFormat":"+00:00 Greenwich Mean Time - Bamako, Sikasso, Koutiala, Ségou"},{"name":"Africa/Bissau","alternativeName":"Greenwich Mean Time","group":["Africa/Bissau"],"continentCode":"AF","continentName":"Africa","countryName":"Guinea-Bissau","countryCode":"GW","mainCities":["Bissau","Gabú","Bafatá","Xitole"],"rawOffsetInMinutes":0,"abbreviation":"GMT","rawFormat":"+00:00 Greenwich Mean Time - Bissau, Gabú, Bafatá, Xitole"},{"name":"Africa/Conakry","alternativeName":"Greenwich Mean Time","group":["Africa/Conakry"],"continentCode":"AF","continentName":"Africa","countryName":"Guinea","countryCode":"GN","mainCities":["Conakry","Camayenne","Nzérékoré","Kankan"],"rawOffsetInMinutes":0,"abbreviation":"GMT","rawFormat":"+00:00 Greenwich Mean Time - Conakry, Camayenne, Nzérékoré, Kankan"},{"name":"Africa/Dakar","alternativeName":"Greenwich Mean Time","group":["Africa/Dakar"],"continentCode":"AF","continentName":"Africa","countryName":"Senegal","countryCode":"SN","mainCities":["Dakar","Touba","Pikine","Guédiawaye"],"rawOffsetInMinutes":0,"abbreviation":"GMT","rawFormat":"+00:00 Greenwich Mean Time - Dakar, Touba, Pikine, Guédiawaye"},{"name":"America/Danmarkshavn","alternativeName":"Greenwich Mean Time","group":["America/Danmarkshavn"],"continentCode":"NA","continentName":"North America","countryName":"Greenland","countryCode":"GL","mainCities":["Danmarkshavn"],"rawOffsetInMinutes":0,"abbreviation":"GMT","rawFormat":"+00:00 Greenwich Mean Time - Danmarkshavn"},{"name":"Europe/Isle_of_Man","alternativeName":"Greenwich Mean Time","group":["Europe/Isle_of_Man"],"continentCode":"EU","continentName":"Europe","countryName":"Isle of Man","countryCode":"IM","mainCities":["Douglas"],"rawOffsetInMinutes":0,"abbreviation":"GMT","rawFormat":"+00:00 Greenwich Mean Time - Douglas"},{"name":"Europe/Dublin","alternativeName":"Greenwich Mean Time","group":["Europe/Dublin","Eire"],"continentCode":"EU","continentName":"Europe","countryName":"Ireland","countryCode":"IE","mainCities":["Dublin","South Dublin","Cork","Limerick"],"rawOffsetInMinutes":0,"abbreviation":"GMT","rawFormat":"+00:00 Greenwich Mean Time - Dublin, South Dublin, Cork, Limerick"},{"name":"Africa/Freetown","alternativeName":"Greenwich Mean Time","group":["Africa/Freetown"],"continentCode":"AF","continentName":"Africa","countryName":"Sierra Leone","countryCode":"SL","mainCities":["Freetown","Bo","Kenema","Koidu"],"rawOffsetInMinutes":0,"abbreviation":"GMT","rawFormat":"+00:00 Greenwich Mean Time - Freetown, Bo, Kenema, Koidu"},{"name":"Atlantic/St_Helena","alternativeName":"Greenwich Mean Time","group":["Atlantic/St_Helena"],"continentCode":"AF","continentName":"Africa","countryName":"Saint Helena","countryCode":"SH","mainCities":["Jamestown"],"rawOffsetInMinutes":0,"abbreviation":"GMT","rawFormat":"+00:00 Greenwich Mean Time - Jamestown"},{"name":"Africa/Accra","alternativeName":"Greenwich Mean Time","group":["Africa/Accra"],"continentCode":"AF","continentName":"Africa","countryName":"Ghana","countryCode":"GH","mainCities":["Kumasi","Accra","Tamale","Takoradi"],"rawOffsetInMinutes":0,"abbreviation":"GMT","rawFormat":"+00:00 Greenwich Mean Time - Kumasi, Accra, Tamale, Takoradi"},{"name":"Africa/Lome","alternativeName":"Greenwich Mean Time","group":["Africa/Lome"],"continentCode":"AF","continentName":"Africa","countryName":"Togo","countryCode":"TG","mainCities":["Lomé","Sokodé","Kara","Atakpamé"],"rawOffsetInMinutes":0,"abbreviation":"GMT","rawFormat":"+00:00 Greenwich Mean Time - Lomé, Sokodé, Kara, Atakpamé"},{"name":"Europe/London","alternativeName":"Greenwich Mean Time","group":["Europe/London","GB","GB-Eire","Europe/Guernsey","Europe/Isle_of_Man","Europe/Jersey","Europe/Belfast"],"continentCode":"EU","continentName":"Europe","countryName":"United Kingdom","countryCode":"GB","mainCities":["London","Birmingham","Glasgow","Manchester"],"rawOffsetInMinutes":0,"abbreviation":"GMT","rawFormat":"+00:00 Greenwich Mean Time - London, Birmingham, Glasgow, Manchester"},{"name":"Africa/Monrovia","alternativeName":"Greenwich Mean Time","group":["Africa/Monrovia"],"continentCode":"AF","continentName":"Africa","countryName":"Liberia","countryCode":"LR","mainCities":["Monrovia","Gbarnga","Buchanan","Ganta"],"rawOffsetInMinutes":0,"abbreviation":"GMT","rawFormat":"+00:00 Greenwich Mean Time - Monrovia, Gbarnga, Buchanan, Ganta"},{"name":"Africa/Nouakchott","alternativeName":"Greenwich Mean Time","group":["Africa/Nouakchott"],"continentCode":"AF","continentName":"Africa","countryName":"Mauritania","countryCode":"MR","mainCities":["Nouakchott","Nouadhibou","Kiffa","Dar Naim"],"rawOffsetInMinutes":0,"abbreviation":"GMT","rawFormat":"+00:00 Greenwich Mean Time - Nouakchott, Nouadhibou, Kiffa, Dar Naim"},{"name":"Africa/Ouagadougou","alternativeName":"Greenwich Mean Time","group":["Africa/Ouagadougou"],"continentCode":"AF","continentName":"Africa","countryName":"Burkina Faso","countryCode":"BF","mainCities":["Ouagadougou","Bobo-Dioulasso","Koudougou","Saaba"],"rawOffsetInMinutes":0,"abbreviation":"GMT","rawFormat":"+00:00 Greenwich Mean Time - Ouagadougou, Bobo-Dioulasso, Koudougou, Saaba"},{"name":"Atlantic/Reykjavik","alternativeName":"Greenwich Mean Time","group":["Atlantic/Reykjavik"],"continentCode":"EU","continentName":"Europe","countryName":"Iceland","countryCode":"IS","mainCities":["Reykjavík","Kópavogur","Hafnarfjörður","Reykjanesbær"],"rawOffsetInMinutes":0,"abbreviation":"GMT","rawFormat":"+00:00 Greenwich Mean Time - Reykjavík, Kópavogur, Hafnarfjörður, Reykjanesbær"},{"name":"Europe/Jersey","alternativeName":"Greenwich Mean Time","group":["Europe/Jersey"],"continentCode":"EU","continentName":"Europe","countryName":"Jersey","countryCode":"JE","mainCities":["Saint Helier"],"rawOffsetInMinutes":0,"abbreviation":"GMT","rawFormat":"+00:00 Greenwich Mean Time - Saint Helier"},{"name":"Europe/Guernsey","alternativeName":"Greenwich Mean Time","group":["Europe/Guernsey"],"continentCode":"EU","continentName":"Europe","countryName":"Guernsey","countryCode":"GG","mainCities":["Saint Peter Port"],"rawOffsetInMinutes":0,"abbreviation":"GMT","rawFormat":"+00:00 Greenwich Mean Time - Saint Peter Port"},{"name":"Africa/Banjul","alternativeName":"Greenwich Mean Time","group":["Africa/Banjul"],"continentCode":"AF","continentName":"Africa","countryName":"Gambia","countryCode":"GM","mainCities":["Serekunda","Brikama","Bununka Kunda","Sukuta"],"rawOffsetInMinutes":0,"abbreviation":"GMT","rawFormat":"+00:00 Greenwich Mean Time - Serekunda, Brikama, Bununka Kunda, Sukuta"},{"name":"Africa/Sao_Tome","alternativeName":"Greenwich Mean Time","group":["Africa/Sao_Tome"],"continentCode":"AF","continentName":"Africa","countryName":"Sao Tome and Principe","countryCode":"ST","mainCities":["São Tomé"],"rawOffsetInMinutes":0,"abbreviation":"GMT","rawFormat":"+00:00 Greenwich Mean Time - São Tomé"},{"name":"Antarctica/Troll","alternativeName":"Greenwich Mean Time","group":["Antarctica/Troll"],"continentCode":"AN","continentName":"Antarctica","countryName":"Antarctica","countryCode":"AQ","mainCities":["Troll"],"rawOffsetInMinutes":0,"abbreviation":"GMT","rawFormat":"+00:00 Greenwich Mean Time - Troll"},{"name":"Africa/Casablanca","alternativeName":"Western European Time","group":["Africa/Casablanca"],"continentCode":"AF","continentName":"Africa","countryName":"Morocco","countryCode":"MA","mainCities":["Casablanca","Rabat","Fes","Tangier"],"rawOffsetInMinutes":0,"abbreviation":"WET","rawFormat":"+00:00 Western European Time - Casablanca, Rabat, Fes, Tangier"},{"name":"Africa/El_Aaiun","alternativeName":"Western European Time","group":["Africa/El_Aaiun"],"continentCode":"AF","continentName":"Africa","countryName":"Western Sahara","countryCode":"EH","mainCities":["Laayoune","Dakhla","Boujdour"],"rawOffsetInMinutes":0,"abbreviation":"WET","rawFormat":"+00:00 Western European Time - Laayoune, Dakhla, Boujdour"},{"name":"Atlantic/Canary","alternativeName":"Western European Time","group":["Atlantic/Canary"],"continentCode":"EU","continentName":"Europe","countryName":"Spain","countryCode":"ES","mainCities":["Las Palmas de Gran Canaria","Santa Cruz de Tenerife","La Laguna","Telde"],"rawOffsetInMinutes":0,"abbreviation":"WET","rawFormat":"+00:00 Western European Time - Las Palmas de Gran Canaria, Santa Cruz de Tenerife, La Laguna, Telde"},{"name":"Europe/Lisbon","alternativeName":"Western European Time","group":["Atlantic/Madeira","Europe/Lisbon","Portugal","WET"],"continentCode":"EU","continentName":"Europe","countryName":"Portugal","countryCode":"PT","mainCities":["Lisbon","Porto","Amadora","Braga"],"rawOffsetInMinutes":0,"abbreviation":"WET","rawFormat":"+00:00 Western European Time - Lisbon, Porto, Amadora, Braga"},{"name":"Atlantic/Faroe","alternativeName":"Western European Time","group":["Atlantic/Faroe","Atlantic/Faeroe"],"continentCode":"EU","continentName":"Europe","countryName":"Faroe Islands","countryCode":"FO","mainCities":["Tórshavn"],"rawOffsetInMinutes":0,"abbreviation":"WET","rawFormat":"+00:00 Western European Time - Tórshavn"},{"name":"Africa/Windhoek","alternativeName":"Central Africa Time","group":["Africa/Windhoek"],"continentCode":"AF","continentName":"Africa","countryName":"Namibia","countryCode":"NA","mainCities":["Windhoek","Rundu","Walvis Bay","Swakopmund"],"rawOffsetInMinutes":60,"abbreviation":"CAT","rawFormat":"+01:00 Central Africa Time - Windhoek, Rundu, Walvis Bay, Swakopmund"},{"name":"Africa/Algiers","alternativeName":"Central European Time","group":["Africa/Algiers"],"continentCode":"AF","continentName":"Africa","countryName":"Algeria","countryCode":"DZ","mainCities":["Algiers","Oran","Constantine","Annaba"],"rawOffsetInMinutes":60,"abbreviation":"CET","rawFormat":"+01:00 Central European Time - Algiers, Oran, Constantine, Annaba"},{"name":"Europe/Andorra","alternativeName":"Central European Time","group":["Europe/Andorra"],"continentCode":"EU","continentName":"Europe","countryName":"Andorra","countryCode":"AD","mainCities":["Andorra la Vella","les Escaldes"],"rawOffsetInMinutes":60,"abbreviation":"CET","rawFormat":"+01:00 Central European Time - Andorra la Vella, les Escaldes"},{"name":"Europe/Belgrade","alternativeName":"Central European Time","group":["Europe/Belgrade","Europe/Ljubljana","Europe/Podgorica","Europe/Sarajevo","Europe/Skopje","Europe/Zagreb"],"continentCode":"EU","continentName":"Europe","countryName":"Serbia","countryCode":"RS","mainCities":["Belgrade","Niš","Novi Sad","Zemun"],"rawOffsetInMinutes":60,"abbreviation":"CET","rawFormat":"+01:00 Central European Time - Belgrade, Niš, Novi Sad, Zemun"},{"name":"Europe/Berlin","alternativeName":"Central European Time","group":["Europe/Berlin","Europe/Busingen","Arctic/Longyearbyen","Europe/Copenhagen","Europe/Oslo","Europe/Stockholm","Atlantic/Jan_Mayen"],"continentCode":"EU","continentName":"Europe","countryName":"Germany","countryCode":"DE","mainCities":["Berlin","Hamburg","Munich","Köln"],"rawOffsetInMinutes":60,"abbreviation":"CET","rawFormat":"+01:00 Central European Time - Berlin, Hamburg, Munich, Köln"},{"name":"Europe/Bratislava","alternativeName":"Central European Time","group":["Europe/Bratislava"],"continentCode":"EU","continentName":"Europe","countryName":"Slovakia","countryCode":"SK","mainCities":["Bratislava","Košice","Petržalka","Nitra"],"rawOffsetInMinutes":60,"abbreviation":"CET","rawFormat":"+01:00 Central European Time - Bratislava, Košice, Petržalka, Nitra"},{"name":"Europe/Brussels","alternativeName":"Central European Time","group":["Europe/Brussels","CET","MET","Europe/Amsterdam","Europe/Luxembourg"],"continentCode":"EU","continentName":"Europe","countryName":"Belgium","countryCode":"BE","mainCities":["Brussels","Antwerpen","Gent","Charleroi"],"rawOffsetInMinutes":60,"abbreviation":"CET","rawFormat":"+01:00 Central European Time - Brussels, Antwerpen, Gent, Charleroi"},{"name":"Europe/Budapest","alternativeName":"Central European Time","group":["Europe/Budapest"],"continentCode":"EU","continentName":"Europe","countryName":"Hungary","countryCode":"HU","mainCities":["Budapest","Debrecen","Szeged","Miskolc"],"rawOffsetInMinutes":60,"abbreviation":"CET","rawFormat":"+01:00 Central European Time - Budapest, Debrecen, Szeged, Miskolc"},{"name":"Europe/Copenhagen","alternativeName":"Central European Time","group":["Europe/Copenhagen"],"continentCode":"EU","continentName":"Europe","countryName":"Denmark","countryCode":"DK","mainCities":["Copenhagen","Århus","Odense","Aalborg"],"rawOffsetInMinutes":60,"abbreviation":"CET","rawFormat":"+01:00 Central European Time - Copenhagen, Århus, Odense, Aalborg"},{"name":"Europe/Gibraltar","alternativeName":"Central European Time","group":["Europe/Gibraltar"],"continentCode":"EU","continentName":"Europe","countryName":"Gibraltar","countryCode":"GI","mainCities":["Gibraltar"],"rawOffsetInMinutes":60,"abbreviation":"CET","rawFormat":"+01:00 Central European Time - Gibraltar"},{"name":"Europe/Ljubljana","alternativeName":"Central European Time","group":["Europe/Ljubljana"],"continentCode":"EU","continentName":"Europe","countryName":"Slovenia","countryCode":"SI","mainCities":["Ljubljana","Maribor","Celje","Kranj"],"rawOffsetInMinutes":60,"abbreviation":"CET","rawFormat":"+01:00 Central European Time - Ljubljana, Maribor, Celje, Kranj"},{"name":"Arctic/Longyearbyen","alternativeName":"Central European Time","group":["Arctic/Longyearbyen"],"continentCode":"EU","continentName":"Europe","countryName":"Svalbard and Jan Mayen","countryCode":"SJ","mainCities":["Longyearbyen"],"rawOffsetInMinutes":60,"abbreviation":"CET","rawFormat":"+01:00 Central European Time - Longyearbyen"},{"name":"Europe/Luxembourg","alternativeName":"Central European Time","group":["Europe/Luxembourg"],"continentCode":"EU","continentName":"Europe","countryName":"Luxembourg","countryCode":"LU","mainCities":["Luxembourg","Esch-sur-Alzette","Dudelange"],"rawOffsetInMinutes":60,"abbreviation":"CET","rawFormat":"+01:00 Central European Time - Luxembourg, Esch-sur-Alzette, Dudelange"},{"name":"Europe/Madrid","alternativeName":"Central European Time","group":["Africa/Ceuta","Europe/Madrid"],"continentCode":"EU","continentName":"Europe","countryName":"Spain","countryCode":"ES","mainCities":["Madrid","Barcelona","Valencia","Zaragoza"],"rawOffsetInMinutes":60,"abbreviation":"CET","rawFormat":"+01:00 Central European Time - Madrid, Barcelona, Valencia, Zaragoza"},{"name":"Europe/Monaco","alternativeName":"Central European Time","group":["Europe/Monaco"],"continentCode":"EU","continentName":"Europe","countryName":"Monaco","countryCode":"MC","mainCities":["Monaco","Monte-Carlo"],"rawOffsetInMinutes":60,"abbreviation":"CET","rawFormat":"+01:00 Central European Time - Monaco, Monte-Carlo"},{"name":"Europe/Oslo","alternativeName":"Central European Time","group":["Europe/Oslo"],"continentCode":"EU","continentName":"Europe","countryName":"Norway","countryCode":"NO","mainCities":["Oslo","Bergen","Trondheim","Stavanger"],"rawOffsetInMinutes":60,"abbreviation":"CET","rawFormat":"+01:00 Central European Time - Oslo, Bergen, Trondheim, Stavanger"},{"name":"Europe/Paris","alternativeName":"Central European Time","group":["Europe/Paris","Europe/Monaco"],"continentCode":"EU","continentName":"Europe","countryName":"France","countryCode":"FR","mainCities":["Paris","Marseille","Lyon","Toulouse"],"rawOffsetInMinutes":60,"abbreviation":"CET","rawFormat":"+01:00 Central European Time - Paris, Marseille, Lyon, Toulouse"},{"name":"Europe/Podgorica","alternativeName":"Central European Time","group":["Europe/Podgorica"],"continentCode":"EU","continentName":"Europe","countryName":"Montenegro","countryCode":"ME","mainCities":["Podgorica","Nikšić","Herceg Novi","Pljevlja"],"rawOffsetInMinutes":60,"abbreviation":"CET","rawFormat":"+01:00 Central European Time - Podgorica, Nikšić, Herceg Novi, Pljevlja"},{"name":"Europe/Prague","alternativeName":"Central European Time","group":["Europe/Prague","Europe/Bratislava"],"continentCode":"EU","continentName":"Europe","countryName":"Czechia","countryCode":"CZ","mainCities":["Prague","Brno","Ostrava","Pilsen"],"rawOffsetInMinutes":60,"abbreviation":"CET","rawFormat":"+01:00 Central European Time - Prague, Brno, Ostrava, Pilsen"},{"name":"Europe/Rome","alternativeName":"Central European Time","group":["Europe/Rome","Europe/San_Marino","Europe/Vatican"],"continentCode":"EU","continentName":"Europe","countryName":"Italy","countryCode":"IT","mainCities":["Rome","Milan","Naples","Turin"],"rawOffsetInMinutes":60,"abbreviation":"CET","rawFormat":"+01:00 Central European Time - Rome, Milan, Naples, Turin"},{"name":"Europe/Amsterdam","alternativeName":"Central European Time","group":["Europe/Amsterdam"],"continentCode":"EU","continentName":"Europe","countryName":"The Netherlands","countryCode":"NL","mainCities":["Rotterdam","Amsterdam","The Hague","Utrecht"],"rawOffsetInMinutes":60,"abbreviation":"CET","rawFormat":"+01:00 Central European Time - Rotterdam, Amsterdam, The Hague, Utrecht"},{"name":"Europe/San_Marino","alternativeName":"Central European Time","group":["Europe/San_Marino"],"continentCode":"EU","continentName":"Europe","countryName":"San Marino","countryCode":"SM","mainCities":["San Marino"],"rawOffsetInMinutes":60,"abbreviation":"CET","rawFormat":"+01:00 Central European Time - San Marino"},{"name":"Europe/Malta","alternativeName":"Central European Time","group":["Europe/Malta"],"continentCode":"EU","continentName":"Europe","countryName":"Malta","countryCode":"MT","mainCities":["San Pawl il-Baħar","Birkirkara","Mosta","Sliema"],"rawOffsetInMinutes":60,"abbreviation":"CET","rawFormat":"+01:00 Central European Time - San Pawl il-Baħar, Birkirkara, Mosta, Sliema"},{"name":"Europe/Sarajevo","alternativeName":"Central European Time","group":["Europe/Sarajevo"],"continentCode":"EU","continentName":"Europe","countryName":"Bosnia and Herzegovina","countryCode":"BA","mainCities":["Sarajevo","Banja Luka","Zenica","Tuzla"],"rawOffsetInMinutes":60,"abbreviation":"CET","rawFormat":"+01:00 Central European Time - Sarajevo, Banja Luka, Zenica, Tuzla"},{"name":"Europe/Skopje","alternativeName":"Central European Time","group":["Europe/Skopje"],"continentCode":"EU","continentName":"Europe","countryName":"North Macedonia","countryCode":"MK","mainCities":["Skopje","Kumanovo","Prilep","Bitola"],"rawOffsetInMinutes":60,"abbreviation":"CET","rawFormat":"+01:00 Central European Time - Skopje, Kumanovo, Prilep, Bitola"},{"name":"Europe/Stockholm","alternativeName":"Central European Time","group":["Europe/Stockholm"],"continentCode":"EU","continentName":"Europe","countryName":"Sweden","countryCode":"SE","mainCities":["Stockholm","Göteborg","Malmö","Uppsala"],"rawOffsetInMinutes":60,"abbreviation":"CET","rawFormat":"+01:00 Central European Time - Stockholm, Göteborg, Malmö, Uppsala"},{"name":"Europe/Tirane","alternativeName":"Central European Time","group":["Europe/Tirane"],"continentCode":"EU","continentName":"Europe","countryName":"Albania","countryCode":"AL","mainCities":["Tirana","Durrës","Vlorë","Elbasan"],"rawOffsetInMinutes":60,"abbreviation":"CET","rawFormat":"+01:00 Central European Time - Tirana, Durrës, Vlorë, Elbasan"},{"name":"Africa/Tunis","alternativeName":"Central European Time","group":["Africa/Tunis"],"continentCode":"AF","continentName":"Africa","countryName":"Tunisia","countryCode":"TN","mainCities":["Tunis","Sfax","Sousse","Kairouan"],"rawOffsetInMinutes":60,"abbreviation":"CET","rawFormat":"+01:00 Central European Time - Tunis, Sfax, Sousse, Kairouan"},{"name":"Europe/Vaduz","alternativeName":"Central European Time","group":["Europe/Vaduz"],"continentCode":"EU","continentName":"Europe","countryName":"Liechtenstein","countryCode":"LI","mainCities":["Vaduz"],"rawOffsetInMinutes":60,"abbreviation":"CET","rawFormat":"+01:00 Central European Time - Vaduz"},{"name":"Europe/Vatican","alternativeName":"Central European Time","group":["Europe/Vatican"],"continentCode":"EU","continentName":"Europe","countryName":"Vatican","countryCode":"VA","mainCities":["Vatican City"],"rawOffsetInMinutes":60,"abbreviation":"CET","rawFormat":"+01:00 Central European Time - Vatican City"},{"name":"Europe/Vienna","alternativeName":"Central European Time","group":["Europe/Vienna"],"continentCode":"EU","continentName":"Europe","countryName":"Austria","countryCode":"AT","mainCities":["Vienna","Graz","Linz","Favoriten"],"rawOffsetInMinutes":60,"abbreviation":"CET","rawFormat":"+01:00 Central European Time - Vienna, Graz, Linz, Favoriten"},{"name":"Europe/Warsaw","alternativeName":"Central European Time","group":["Europe/Warsaw","Poland"],"continentCode":"EU","continentName":"Europe","countryName":"Poland","countryCode":"PL","mainCities":["Warsaw","Łódź","Kraków","Wrocław"],"rawOffsetInMinutes":60,"abbreviation":"CET","rawFormat":"+01:00 Central European Time - Warsaw, Łódź, Kraków, Wrocław"},{"name":"Europe/Zagreb","alternativeName":"Central European Time","group":["Europe/Zagreb"],"continentCode":"EU","continentName":"Europe","countryName":"Croatia","countryCode":"HR","mainCities":["Zagreb","Split","Rijeka","Osijek"],"rawOffsetInMinutes":60,"abbreviation":"CET","rawFormat":"+01:00 Central European Time - Zagreb, Split, Rijeka, Osijek"},{"name":"Europe/Zurich","alternativeName":"Central European Time","group":["Europe/Zurich","Europe/Busingen","Europe/Vaduz"],"continentCode":"EU","continentName":"Europe","countryName":"Switzerland","countryCode":"CH","mainCities":["Zürich","Genève","Basel","Lausanne"],"rawOffsetInMinutes":60,"abbreviation":"CET","rawFormat":"+01:00 Central European Time - Zürich, Genève, Basel, Lausanne"},{"name":"Africa/Bangui","alternativeName":"West Africa Time","group":["Africa/Bangui"],"continentCode":"AF","continentName":"Africa","countryName":"Central African Republic","countryCode":"CF","mainCities":["Bangui","Bimbo","Bégoua","Carnot"],"rawOffsetInMinutes":60,"abbreviation":"WAT","rawFormat":"+01:00 West Africa Time - Bangui, Bimbo, Bégoua, Carnot"},{"name":"Africa/Malabo","alternativeName":"West Africa Time","group":["Africa/Malabo"],"continentCode":"AF","continentName":"Africa","countryName":"Equatorial Guinea","countryCode":"GQ","mainCities":["Bata","Malabo","Ebebiyin"],"rawOffsetInMinutes":60,"abbreviation":"WAT","rawFormat":"+01:00 West Africa Time - Bata, Malabo, Ebebiyin"},{"name":"Africa/Brazzaville","alternativeName":"West Africa Time","group":["Africa/Brazzaville"],"continentCode":"AF","continentName":"Africa","countryName":"Republic of the Congo","countryCode":"CG","mainCities":["Brazzaville","Pointe-Noire","Dolisie","Nkayi"],"rawOffsetInMinutes":60,"abbreviation":"WAT","rawFormat":"+01:00 West Africa Time - Brazzaville, Pointe-Noire, Dolisie, Nkayi"},{"name":"Africa/Porto-Novo","alternativeName":"West Africa Time","group":["Africa/Porto-Novo"],"continentCode":"AF","continentName":"Africa","countryName":"Benin","countryCode":"BJ","mainCities":["Cotonou","Abomey-Calavi","Porto-Novo","Parakou"],"rawOffsetInMinutes":60,"abbreviation":"WAT","rawFormat":"+01:00 West Africa Time - Cotonou, Abomey-Calavi, Porto-Novo, Parakou"},{"name":"Africa/Douala","alternativeName":"West Africa Time","group":["Africa/Douala"],"continentCode":"AF","continentName":"Africa","countryName":"Cameroon","countryCode":"CM","mainCities":["Douala","Yaoundé","Bamenda","Bafoussam"],"rawOffsetInMinutes":60,"abbreviation":"WAT","rawFormat":"+01:00 West Africa Time - Douala, Yaoundé, Bamenda, Bafoussam"},{"name":"Africa/Kinshasa","alternativeName":"West Africa Time","group":["Africa/Kinshasa"],"continentCode":"AF","continentName":"Africa","countryName":"Democratic Republic of the Congo","countryCode":"CD","mainCities":["Kinshasa","Kikwit","Masina","Mbandaka"],"rawOffsetInMinutes":60,"abbreviation":"WAT","rawFormat":"+01:00 West Africa Time - Kinshasa, Kikwit, Masina, Mbandaka"},{"name":"Africa/Lagos","alternativeName":"West Africa Time","group":["Africa/Lagos","Africa/Bangui","Africa/Brazzaville","Africa/Douala","Africa/Kinshasa","Africa/Libreville","Africa/Luanda","Africa/Malabo","Africa/Niamey","Africa/Porto-Novo"],"continentCode":"AF","continentName":"Africa","countryName":"Nigeria","countryCode":"NG","mainCities":["Lagos","Kano","Ibadan","Abuja"],"rawOffsetInMinutes":60,"abbreviation":"WAT","rawFormat":"+01:00 West Africa Time - Lagos, Kano, Ibadan, Abuja"},{"name":"Africa/Libreville","alternativeName":"West Africa Time","group":["Africa/Libreville"],"continentCode":"AF","continentName":"Africa","countryName":"Gabon","countryCode":"GA","mainCities":["Libreville","Port-Gentil","Franceville","Owendo"],"rawOffsetInMinutes":60,"abbreviation":"WAT","rawFormat":"+01:00 West Africa Time - Libreville, Port-Gentil, Franceville, Owendo"},{"name":"Africa/Luanda","alternativeName":"West Africa Time","group":["Africa/Luanda"],"continentCode":"AF","continentName":"Africa","countryName":"Angola","countryCode":"AO","mainCities":["Luanda","Lubango","Huambo","Benguela"],"rawOffsetInMinutes":60,"abbreviation":"WAT","rawFormat":"+01:00 West Africa Time - Luanda, Lubango, Huambo, Benguela"},{"name":"Africa/Ndjamena","alternativeName":"West Africa Time","group":["Africa/Ndjamena"],"continentCode":"AF","continentName":"Africa","countryName":"Chad","countryCode":"TD","mainCities":["N'Djamena","Moundou","Abéché","Sarh"],"rawOffsetInMinutes":60,"abbreviation":"WAT","rawFormat":"+01:00 West Africa Time - N'Djamena, Moundou, Abéché, Sarh"},{"name":"Africa/Niamey","alternativeName":"West Africa Time","group":["Africa/Niamey"],"continentCode":"AF","continentName":"Africa","countryName":"Niger","countryCode":"NE","mainCities":["Niamey","Maradi","Zinder","Tahoua"],"rawOffsetInMinutes":60,"abbreviation":"WAT","rawFormat":"+01:00 West Africa Time - Niamey, Maradi, Zinder, Tahoua"},{"name":"Africa/Bujumbura","alternativeName":"Central Africa Time","group":["Africa/Bujumbura"],"continentCode":"AF","continentName":"Africa","countryName":"Burundi","countryCode":"BI","mainCities":["Bujumbura","Gitega","Ngozi","Rumonge"],"rawOffsetInMinutes":120,"abbreviation":"CAT","rawFormat":"+02:00 Central Africa Time - Bujumbura, Gitega, Ngozi, Rumonge"},{"name":"Africa/Gaborone","alternativeName":"Central Africa Time","group":["Africa/Gaborone"],"continentCode":"AF","continentName":"Africa","countryName":"Botswana","countryCode":"BW","mainCities":["Gaborone","Francistown","Mogoditshane","Maun"],"rawOffsetInMinutes":120,"abbreviation":"CAT","rawFormat":"+02:00 Central Africa Time - Gaborone, Francistown, Mogoditshane, Maun"},{"name":"Africa/Harare","alternativeName":"Central Africa Time","group":["Africa/Harare"],"continentCode":"AF","continentName":"Africa","countryName":"Zimbabwe","countryCode":"ZW","mainCities":["Harare","Bulawayo","Chitungwiza","Mutare"],"rawOffsetInMinutes":120,"abbreviation":"CAT","rawFormat":"+02:00 Central Africa Time - Harare, Bulawayo, Chitungwiza, Mutare"},{"name":"Africa/Juba","alternativeName":"Central Africa Time","group":["Africa/Juba"],"continentCode":"AF","continentName":"Africa","countryName":"South Sudan","countryCode":"SS","mainCities":["Juba","Winejok","Yei","Malakal"],"rawOffsetInMinutes":120,"abbreviation":"CAT","rawFormat":"+02:00 Central Africa Time - Juba, Winejok, Yei, Malakal"},{"name":"Africa/Khartoum","alternativeName":"Central Africa Time","group":["Africa/Khartoum"],"continentCode":"AF","continentName":"Africa","countryName":"Sudan","countryCode":"SD","mainCities":["Khartoum","Omdurman","Khartoum North","Nyala"],"rawOffsetInMinutes":120,"abbreviation":"CAT","rawFormat":"+02:00 Central Africa Time - Khartoum, Omdurman, Khartoum North, Nyala"},{"name":"Africa/Kigali","alternativeName":"Central Africa Time","group":["Africa/Kigali"],"continentCode":"AF","continentName":"Africa","countryName":"Rwanda","countryCode":"RW","mainCities":["Kigali","Gisenyi","Musanze","Nyagatare"],"rawOffsetInMinutes":120,"abbreviation":"CAT","rawFormat":"+02:00 Central Africa Time - Kigali, Gisenyi, Musanze, Nyagatare"},{"name":"Africa/Blantyre","alternativeName":"Central Africa Time","group":["Africa/Blantyre"],"continentCode":"AF","continentName":"Africa","countryName":"Malawi","countryCode":"MW","mainCities":["Lilongwe","Blantyre","Mzuzu","Zomba"],"rawOffsetInMinutes":120,"abbreviation":"CAT","rawFormat":"+02:00 Central Africa Time - Lilongwe, Blantyre, Mzuzu, Zomba"},{"name":"Africa/Lubumbashi","alternativeName":"Central Africa Time","group":["Africa/Lubumbashi"],"continentCode":"AF","continentName":"Africa","countryName":"Democratic Republic of the Congo","countryCode":"CD","mainCities":["Lubumbashi","Mbuji-Mayi","Kananga","Kisangani"],"rawOffsetInMinutes":120,"abbreviation":"CAT","rawFormat":"+02:00 Central Africa Time - Lubumbashi, Mbuji-Mayi, Kananga, Kisangani"},{"name":"Africa/Lusaka","alternativeName":"Central Africa Time","group":["Africa/Lusaka"],"continentCode":"AF","continentName":"Africa","countryName":"Zambia","countryCode":"ZM","mainCities":["Lusaka","Kitwe","Ndola","Chipata"],"rawOffsetInMinutes":120,"abbreviation":"CAT","rawFormat":"+02:00 Central Africa Time - Lusaka, Kitwe, Ndola, Chipata"},{"name":"Africa/Maputo","alternativeName":"Central Africa Time","group":["Africa/Maputo","Africa/Blantyre","Africa/Bujumbura","Africa/Gaborone","Africa/Harare","Africa/Kigali","Africa/Lubumbashi","Africa/Lusaka"],"continentCode":"AF","continentName":"Africa","countryName":"Mozambique","countryCode":"MZ","mainCities":["Maputo","Matola","Nampula","Beira"],"rawOffsetInMinutes":120,"abbreviation":"CAT","rawFormat":"+02:00 Central Africa Time - Maputo, Matola, Nampula, Beira"},{"name":"Europe/Athens","alternativeName":"Eastern European Time","group":["Europe/Athens","EET"],"continentCode":"EU","continentName":"Europe","countryName":"Greece","countryCode":"GR","mainCities":["Athens","Thessaloníki","Pátra","Piraeus"],"rawOffsetInMinutes":120,"abbreviation":"EET","rawFormat":"+02:00 Eastern European Time - Athens, Thessaloníki, Pátra, Piraeus"},{"name":"Asia/Beirut","alternativeName":"Eastern European Time","group":["Asia/Beirut"],"continentCode":"AS","continentName":"Asia","countryName":"Lebanon","countryCode":"LB","mainCities":["Beirut","Ra’s Bayrūt","Tripoli","Sidon"],"rawOffsetInMinutes":120,"abbreviation":"EET","rawFormat":"+02:00 Eastern European Time - Beirut, Ra’s Bayrūt, Tripoli, Sidon"},{"name":"Europe/Bucharest","alternativeName":"Eastern European Time","group":["Europe/Bucharest"],"continentCode":"EU","continentName":"Europe","countryName":"Romania","countryCode":"RO","mainCities":["Bucharest","Sector 3","Iaşi","Sector 6"],"rawOffsetInMinutes":120,"abbreviation":"EET","rawFormat":"+02:00 Eastern European Time - Bucharest, Sector 3, Iaşi, Sector 6"},{"name":"Africa/Cairo","alternativeName":"Eastern European Time","group":["Africa/Cairo","Egypt"],"continentCode":"AF","continentName":"Africa","countryName":"Egypt","countryCode":"EG","mainCities":["Cairo","Alexandria","Giza","Shubrā al Khaymah"],"rawOffsetInMinutes":120,"abbreviation":"EET","rawFormat":"+02:00 Eastern European Time - Cairo, Alexandria, Giza, Shubrā al Khaymah"},{"name":"Europe/Chisinau","alternativeName":"Eastern European Time","group":["Europe/Chisinau","Europe/Tiraspol"],"continentCode":"EU","continentName":"Europe","countryName":"Moldova","countryCode":"MD","mainCities":["Chisinau","Tiraspol","Bălţi","Bender"],"rawOffsetInMinutes":120,"abbreviation":"EET","rawFormat":"+02:00 Eastern European Time - Chisinau, Tiraspol, Bălţi, Bender"},{"name":"Asia/Hebron","alternativeName":"Eastern European Time","group":["Asia/Gaza","Asia/Hebron"],"continentCode":"AS","continentName":"Asia","countryName":"Palestinian Territory","countryCode":"PS","mainCities":["East Jerusalem","Gaza","Khān Yūnis","Jabālyā"],"rawOffsetInMinutes":120,"abbreviation":"EET","rawFormat":"+02:00 Eastern European Time - East Jerusalem, Gaza, Khān Yūnis, Jabālyā"},{"name":"Europe/Helsinki","alternativeName":"Eastern European Time","group":["Europe/Helsinki","Europe/Mariehamn"],"continentCode":"EU","continentName":"Europe","countryName":"Finland","countryCode":"FI","mainCities":["Helsinki","Espoo","Tampere","Vantaa"],"rawOffsetInMinutes":120,"abbreviation":"EET","rawFormat":"+02:00 Eastern European Time - Helsinki, Espoo, Tampere, Vantaa"},{"name":"Europe/Kaliningrad","alternativeName":"Eastern European Time","group":["Europe/Kaliningrad"],"continentCode":"EU","continentName":"Europe","countryName":"Russia","countryCode":"RU","mainCities":["Kaliningrad","Chernyakhovsk","Sovetsk","Baltiysk"],"rawOffsetInMinutes":120,"abbreviation":"EET","rawFormat":"+02:00 Eastern European Time - Kaliningrad, Chernyakhovsk, Sovetsk, Baltiysk"},{"name":"Europe/Kyiv","alternativeName":"Eastern European Time","group":["Europe/Kyiv","Europe/Uzhgorod","Europe/Zaporozhye","Europe/Kiev"],"continentCode":"EU","continentName":"Europe","countryName":"Ukraine","countryCode":"UA","mainCities":["Kyiv","Kharkiv","Odesa","Dnipro"],"rawOffsetInMinutes":120,"abbreviation":"EET","rawFormat":"+02:00 Eastern European Time - Kyiv, Kharkiv, Odesa, Dnipro"},{"name":"Europe/Mariehamn","alternativeName":"Eastern European Time","group":["Europe/Mariehamn"],"continentCode":"EU","continentName":"Europe","countryName":"Aland Islands","countryCode":"AX","mainCities":["Mariehamn"],"rawOffsetInMinutes":120,"abbreviation":"EET","rawFormat":"+02:00 Eastern European Time - Mariehamn"},{"name":"Asia/Nicosia","alternativeName":"Eastern European Time","group":["Asia/Famagusta","Asia/Nicosia","Europe/Nicosia"],"continentCode":"EU","continentName":"Europe","countryName":"Cyprus","countryCode":"CY","mainCities":["Nicosia","Limassol","Larnaca","Stróvolos"],"rawOffsetInMinutes":120,"abbreviation":"EET","rawFormat":"+02:00 Eastern European Time - Nicosia, Limassol, Larnaca, Stróvolos"},{"name":"Europe/Riga","alternativeName":"Eastern European Time","group":["Europe/Riga"],"continentCode":"EU","continentName":"Europe","countryName":"Latvia","countryCode":"LV","mainCities":["Riga","Daugavpils","Liepāja","Jelgava"],"rawOffsetInMinutes":120,"abbreviation":"EET","rawFormat":"+02:00 Eastern European Time - Riga, Daugavpils, Liepāja, Jelgava"},{"name":"Europe/Sofia","alternativeName":"Eastern European Time","group":["Europe/Sofia"],"continentCode":"EU","continentName":"Europe","countryName":"Bulgaria","countryCode":"BG","mainCities":["Sofia","Plovdiv","Varna","Burgas"],"rawOffsetInMinutes":120,"abbreviation":"EET","rawFormat":"+02:00 Eastern European Time - Sofia, Plovdiv, Varna, Burgas"},{"name":"Europe/Tallinn","alternativeName":"Eastern European Time","group":["Europe/Tallinn"],"continentCode":"EU","continentName":"Europe","countryName":"Estonia","countryCode":"EE","mainCities":["Tallinn","Tartu","Narva","Pärnu"],"rawOffsetInMinutes":120,"abbreviation":"EET","rawFormat":"+02:00 Eastern European Time - Tallinn, Tartu, Narva, Pärnu"},{"name":"Africa/Tripoli","alternativeName":"Eastern European Time","group":["Africa/Tripoli","Libya"],"continentCode":"AF","continentName":"Africa","countryName":"Libya","countryCode":"LY","mainCities":["Tripoli","Benghazi","Misratah","Zliten"],"rawOffsetInMinutes":120,"abbreviation":"EET","rawFormat":"+02:00 Eastern European Time - Tripoli, Benghazi, Misratah, Zliten"},{"name":"Europe/Vilnius","alternativeName":"Eastern European Time","group":["Europe/Vilnius"],"continentCode":"EU","continentName":"Europe","countryName":"Lithuania","countryCode":"LT","mainCities":["Vilnius","Kaunas","Klaipėda","Šiauliai"],"rawOffsetInMinutes":120,"abbreviation":"EET","rawFormat":"+02:00 Eastern European Time - Vilnius, Kaunas, Klaipėda, Šiauliai"},{"name":"Asia/Jerusalem","alternativeName":"Israel Time","group":["Asia/Jerusalem","Israel","Asia/Tel_Aviv"],"continentCode":"AS","continentName":"Asia","countryName":"Israel","countryCode":"IL","mainCities":["Jerusalem","Tel Aviv","West Jerusalem","Haifa"],"rawOffsetInMinutes":120,"abbreviation":"IST","rawFormat":"+02:00 Israel Time - Jerusalem, Tel Aviv, West Jerusalem, Haifa"},{"name":"Africa/Johannesburg","alternativeName":"South Africa Time","group":["Africa/Johannesburg","Africa/Maseru","Africa/Mbabane"],"continentCode":"AF","continentName":"Africa","countryName":"South Africa","countryCode":"ZA","mainCities":["Johannesburg","Cape Town","Durban","Pretoria"],"rawOffsetInMinutes":120,"abbreviation":"SAST","rawFormat":"+02:00 South Africa Time - Johannesburg, Cape Town, Durban, Pretoria"},{"name":"Africa/Mbabane","alternativeName":"South Africa Time","group":["Africa/Mbabane"],"continentCode":"AF","continentName":"Africa","countryName":"Eswatini","countryCode":"SZ","mainCities":["Manzini","Mbabane","Lobamba"],"rawOffsetInMinutes":120,"abbreviation":"SAST","rawFormat":"+02:00 South Africa Time - Manzini, Mbabane, Lobamba"},{"name":"Africa/Maseru","alternativeName":"South Africa Time","group":["Africa/Maseru"],"continentCode":"AF","continentName":"Africa","countryName":"Lesotho","countryCode":"LS","mainCities":["Maseru","Maputsoe","Mohale's Hoek","Mafeteng"],"rawOffsetInMinutes":120,"abbreviation":"SAST","rawFormat":"+02:00 South Africa Time - Maseru, Maputsoe, Mohale's Hoek, Mafeteng"},{"name":"Asia/Kuwait","alternativeName":"Arabian Time","group":["Asia/Kuwait"],"continentCode":"AS","continentName":"Asia","countryName":"Kuwait","countryCode":"KW","mainCities":["Al Aḩmadī","Ḩawallī","As Sālimīyah","Şabāḩ as Sālim"],"rawOffsetInMinutes":180,"abbreviation":"AST","rawFormat":"+03:00 Arabian Time - Al Aḩmadī, Ḩawallī, As Sālimīyah, Şabāḩ as Sālim"},{"name":"Asia/Bahrain","alternativeName":"Arabian Time","group":["Asia/Bahrain"],"continentCode":"AS","continentName":"Asia","countryName":"Bahrain","countryCode":"BH","mainCities":["Al Muharraq","Manama","Madīnat Ḩamad","Ar Rifā‘"],"rawOffsetInMinutes":180,"abbreviation":"AST","rawFormat":"+03:00 Arabian Time - Al Muharraq, Manama, Madīnat Ḩamad, Ar Rifā‘"},{"name":"Asia/Baghdad","alternativeName":"Arabian Time","group":["Asia/Baghdad"],"continentCode":"AS","continentName":"Asia","countryName":"Iraq","countryCode":"IQ","mainCities":["Baghdad","Al Mawşil al Jadīdah","Al Başrah al Qadīmah","Mosul"],"rawOffsetInMinutes":180,"abbreviation":"AST","rawFormat":"+03:00 Arabian Time - Baghdad, Al Mawşil al Jadīdah, Al Başrah al Qadīmah, Mosul"},{"name":"Asia/Qatar","alternativeName":"Arabian Time","group":["Asia/Qatar","Asia/Bahrain"],"continentCode":"AS","continentName":"Asia","countryName":"Qatar","countryCode":"QA","mainCities":["Doha","Ar Rayyān","Al Maţār al ‘Atīq","Al Manşūrah"],"rawOffsetInMinutes":180,"abbreviation":"AST","rawFormat":"+03:00 Arabian Time - Doha, Ar Rayyān, Al Maţār al ‘Atīq, Al Manşūrah"},{"name":"Asia/Riyadh","alternativeName":"Arabian Time","group":["Asia/Riyadh","Antarctica/Syowa","Asia/Aden","Asia/Kuwait"],"continentCode":"AS","continentName":"Asia","countryName":"Saudi Arabia","countryCode":"SA","mainCities":["Jeddah","Riyadh","Makkah","Madinah"],"rawOffsetInMinutes":180,"abbreviation":"AST","rawFormat":"+03:00 Arabian Time - Jeddah, Riyadh, Makkah, Madinah"},{"name":"Asia/Aden","alternativeName":"Arabian Time","group":["Asia/Aden"],"continentCode":"AS","continentName":"Asia","countryName":"Yemen","countryCode":"YE","mainCities":["Sanaa","Aden","Taiz","Ibb"],"rawOffsetInMinutes":180,"abbreviation":"AST","rawFormat":"+03:00 Arabian Time - Sanaa, Aden, Taiz, Ibb"},{"name":"Asia/Amman","alternativeName":"Asia/Amman","group":["Asia/Amman"],"continentCode":"AS","continentName":"Asia","countryName":"Jordan","countryCode":"JO","mainCities":["Amman","Zarqa","Irbid","Russeifa"],"rawOffsetInMinutes":180,"abbreviation":"GMT+3","rawFormat":"+03:00 Asia/Amman - Amman, Zarqa, Irbid, Russeifa"},{"name":"Asia/Damascus","alternativeName":"Asia/Damascus","group":["Asia/Damascus"],"continentCode":"AS","continentName":"Asia","countryName":"Syria","countryCode":"SY","mainCities":["Aleppo","Damascus","Homs","Latakia"],"rawOffsetInMinutes":180,"abbreviation":"GMT+3","rawFormat":"+03:00 Asia/Damascus - Aleppo, Damascus, Homs, Latakia"},{"name":"Africa/Addis_Ababa","alternativeName":"East Africa Time","group":["Africa/Addis_Ababa"],"continentCode":"AF","continentName":"Africa","countryName":"Ethiopia","countryCode":"ET","mainCities":["Addis Ababa","Jijiga","Gonder","Mek'ele"],"rawOffsetInMinutes":180,"abbreviation":"EAT","rawFormat":"+03:00 East Africa Time - Addis Ababa, Jijiga, Gonder, Mek'ele"},{"name":"Indian/Antananarivo","alternativeName":"East Africa Time","group":["Indian/Antananarivo"],"continentCode":"AF","continentName":"Africa","countryName":"Madagascar","countryCode":"MG","mainCities":["Antananarivo","Toamasina","Antsirabe","Mahajanga"],"rawOffsetInMinutes":180,"abbreviation":"EAT","rawFormat":"+03:00 East Africa Time - Antananarivo, Toamasina, Antsirabe, Mahajanga"},{"name":"Africa/Asmara","alternativeName":"East Africa Time","group":["Africa/Asmara"],"continentCode":"AF","continentName":"Africa","countryName":"Eritrea","countryCode":"ER","mainCities":["Asmara","Keren","Himora","Massawa"],"rawOffsetInMinutes":180,"abbreviation":"EAT","rawFormat":"+03:00 East Africa Time - Asmara, Keren, Himora, Massawa"},{"name":"Africa/Dar_es_Salaam","alternativeName":"East Africa Time","group":["Africa/Dar_es_Salaam"],"continentCode":"AF","continentName":"Africa","countryName":"Tanzania","countryCode":"TZ","mainCities":["Dar es Salaam","Mwanza","Dodoma","Zanzibar"],"rawOffsetInMinutes":180,"abbreviation":"EAT","rawFormat":"+03:00 East Africa Time - Dar es Salaam, Mwanza, Dodoma, Zanzibar"},{"name":"Africa/Djibouti","alternativeName":"East Africa Time","group":["Africa/Djibouti"],"continentCode":"AF","continentName":"Africa","countryName":"Djibouti","countryCode":"DJ","mainCities":["Djibouti","Ali Sabih","Dikhil","Tadjoura"],"rawOffsetInMinutes":180,"abbreviation":"EAT","rawFormat":"+03:00 East Africa Time - Djibouti, Ali Sabih, Dikhil, Tadjoura"},{"name":"Africa/Kampala","alternativeName":"East Africa Time","group":["Africa/Kampala"],"continentCode":"AF","continentName":"Africa","countryName":"Uganda","countryCode":"UG","mainCities":["Kampala","Nansana","Kira","Bunamwaya"],"rawOffsetInMinutes":180,"abbreviation":"EAT","rawFormat":"+03:00 East Africa Time - Kampala, Nansana, Kira, Bunamwaya"},{"name":"Indian/Mayotte","alternativeName":"East Africa Time","group":["Indian/Mayotte"],"continentCode":"AF","continentName":"Africa","countryName":"Mayotte","countryCode":"YT","mainCities":["Mamoudzou","Koungou","Labattoir","Kaouéni"],"rawOffsetInMinutes":180,"abbreviation":"EAT","rawFormat":"+03:00 East Africa Time - Mamoudzou, Koungou, Labattoir, Kaouéni"},{"name":"Africa/Mogadishu","alternativeName":"East Africa Time","group":["Africa/Mogadishu"],"continentCode":"AF","continentName":"Africa","countryName":"Somalia","countryCode":"SO","mainCities":["Mogadishu","Borama","Hargeysa","Berbera"],"rawOffsetInMinutes":180,"abbreviation":"EAT","rawFormat":"+03:00 East Africa Time - Mogadishu, Borama, Hargeysa, Berbera"},{"name":"Indian/Comoro","alternativeName":"East Africa Time","group":["Indian/Comoro"],"continentCode":"AF","continentName":"Africa","countryName":"Comoros","countryCode":"KM","mainCities":["Moroni","Moutsamoudou","Fomboni"],"rawOffsetInMinutes":180,"abbreviation":"EAT","rawFormat":"+03:00 East Africa Time - Moroni, Moutsamoudou, Fomboni"},{"name":"Africa/Nairobi","alternativeName":"East Africa Time","group":["Africa/Nairobi","Africa/Addis_Ababa","Africa/Asmara","Africa/Dar_es_Salaam","Africa/Djibouti","Africa/Kampala","Africa/Mogadishu","Indian/Antananarivo","Indian/Comoro","Indian/Mayotte","Africa/Asmera"],"continentCode":"AF","continentName":"Africa","countryName":"Kenya","countryCode":"KE","mainCities":["Nairobi","Kakamega","Mombasa","Nakuru"],"rawOffsetInMinutes":180,"abbreviation":"EAT","rawFormat":"+03:00 East Africa Time - Nairobi, Kakamega, Mombasa, Nakuru"},{"name":"Europe/Minsk","alternativeName":"Moscow Time","group":["Europe/Minsk"],"continentCode":"EU","continentName":"Europe","countryName":"Belarus","countryCode":"BY","mainCities":["Minsk","Homyel'","Hrodna","Vitebsk"],"rawOffsetInMinutes":180,"abbreviation":"MSK","rawFormat":"+03:00 Moscow Time - Minsk, Homyel', Hrodna, Vitebsk"},{"name":"Europe/Moscow","alternativeName":"Moscow Time","group":["Europe/Kirov","Europe/Moscow","Europe/Volgograd","W-SU"],"continentCode":"EU","continentName":"Europe","countryName":"Russia","countryCode":"RU","mainCities":["Moscow","Saint Petersburg","Nizhniy Novgorod","Kazan"],"rawOffsetInMinutes":180,"abbreviation":"MSK","rawFormat":"+03:00 Moscow Time - Moscow, Saint Petersburg, Nizhniy Novgorod, Kazan"},{"name":"Europe/Simferopol","alternativeName":"Moscow Time","group":["Europe/Simferopol"],"continentCode":"EU","continentName":"Europe","countryName":"Ukraine","countryCode":"UA","mainCities":["Sevastopol","Simferopol","Kerch","Yevpatoriya"],"rawOffsetInMinutes":180,"abbreviation":"MSK","rawFormat":"+03:00 Moscow Time - Sevastopol, Simferopol, Kerch, Yevpatoriya"},{"name":"Antarctica/Syowa","alternativeName":"Syowa Time","group":["Antarctica/Syowa"],"continentCode":"AN","continentName":"Antarctica","countryName":"Antarctica","countryCode":"AQ","mainCities":["Syowa"],"rawOffsetInMinutes":180,"abbreviation":"SYOT","rawFormat":"+03:00 Syowa Time - Syowa"},{"name":"Europe/Istanbul","alternativeName":"Turkey Time","group":["Europe/Istanbul","Turkey","Asia/Istanbul"],"continentCode":"AS","continentName":"Asia","countryName":"Turkey","countryCode":"TR","mainCities":["Istanbul","Ankara","Bursa","İzmir"],"rawOffsetInMinutes":180,"abbreviation":"TRT","rawFormat":"+03:00 Turkey Time - Istanbul, Ankara, Bursa, İzmir"},{"name":"Asia/Tehran","alternativeName":"Iran Time","group":["Asia/Tehran","Iran"],"continentCode":"AS","continentName":"Asia","countryName":"Iran","countryCode":"IR","mainCities":["Tehran","Mashhad","Isfahan","Karaj"],"rawOffsetInMinutes":210,"abbreviation":"IRST","rawFormat":"+03:30 Iran Time - Tehran, Mashhad, Isfahan, Karaj"},{"name":"Asia/Yerevan","alternativeName":"Armenia Time","group":["Asia/Yerevan"],"continentCode":"AS","continentName":"Asia","countryName":"Armenia","countryCode":"AM","mainCities":["Yerevan","Malatia-Sebastia","Shengavit","Nor Nork"],"rawOffsetInMinutes":240,"abbreviation":"AMT","rawFormat":"+04:00 Armenia Time - Yerevan, Malatia-Sebastia, Shengavit, Nor Nork"},{"name":"Asia/Baku","alternativeName":"Azerbaijan Time","group":["Asia/Baku"],"continentCode":"AS","continentName":"Asia","countryName":"Azerbaijan","countryCode":"AZ","mainCities":["Baku","Sumqayıt","Ganja","Lankaran"],"rawOffsetInMinutes":240,"abbreviation":"AZT","rawFormat":"+04:00 Azerbaijan Time - Baku, Sumqayıt, Ganja, Lankaran"},{"name":"Asia/Tbilisi","alternativeName":"Georgia Time","group":["Asia/Tbilisi"],"continentCode":"AS","continentName":"Asia","countryName":"Georgia","countryCode":"GE","mainCities":["Tbilisi","Batumi","Kutaisi","Rustavi"],"rawOffsetInMinutes":240,"abbreviation":"GET","rawFormat":"+04:00 Georgia Time - Tbilisi, Batumi, Kutaisi, Rustavi"},{"name":"Asia/Dubai","alternativeName":"Gulf Time","group":["Asia/Dubai","Asia/Muscat","Indian/Mahe","Indian/Reunion"],"continentCode":"AS","continentName":"Asia","countryName":"United Arab Emirates","countryCode":"AE","mainCities":["Dubai","Abu Dhabi","Sharjah","Al Ain City"],"rawOffsetInMinutes":240,"abbreviation":"GST","rawFormat":"+04:00 Gulf Time - Dubai, Abu Dhabi, Sharjah, Al Ain City"},{"name":"Asia/Muscat","alternativeName":"Gulf Time","group":["Asia/Muscat"],"continentCode":"AS","continentName":"Asia","countryName":"Oman","countryCode":"OM","mainCities":["Muscat","Seeb","Bawshar","‘Ibrī"],"rawOffsetInMinutes":240,"abbreviation":"GST","rawFormat":"+04:00 Gulf Time - Muscat, Seeb, Bawshar, ‘Ibrī"},{"name":"Indian/Mauritius","alternativeName":"Mauritius Time","group":["Indian/Mauritius"],"continentCode":"AF","continentName":"Africa","countryName":"Mauritius","countryCode":"MU","mainCities":["Port Louis","Vacoas","Beau Bassin-Rose Hill","Curepipe"],"rawOffsetInMinutes":240,"abbreviation":"MUT","rawFormat":"+04:00 Mauritius Time - Port Louis, Vacoas, Beau Bassin-Rose Hill, Curepipe"},{"name":"Indian/Reunion","alternativeName":"Réunion Time","group":["Indian/Reunion"],"continentCode":"AF","continentName":"Africa","countryName":"Reunion","countryCode":"RE","mainCities":["Saint-Denis","Saint-Paul","Saint-Pierre","Le Tampon"],"rawOffsetInMinutes":240,"abbreviation":"RET","rawFormat":"+04:00 Réunion Time - Saint-Denis, Saint-Paul, Saint-Pierre, Le Tampon"},{"name":"Europe/Samara","alternativeName":"Samara Time","group":["Europe/Astrakhan","Europe/Samara","Europe/Saratov","Europe/Ulyanovsk"],"continentCode":"EU","continentName":"Europe","countryName":"Russia","countryCode":"RU","mainCities":["Samara","Saratov","Tolyatti","Izhevsk"],"rawOffsetInMinutes":240,"abbreviation":"SAMT","rawFormat":"+04:00 Samara Time - Samara, Saratov, Tolyatti, Izhevsk"},{"name":"Indian/Mahe","alternativeName":"Seychelles Time","group":["Indian/Mahe"],"continentCode":"AF","continentName":"Africa","countryName":"Seychelles","countryCode":"SC","mainCities":["Victoria"],"rawOffsetInMinutes":240,"abbreviation":"SCT","rawFormat":"+04:00 Seychelles Time - Victoria"},{"name":"Asia/Kabul","alternativeName":"Afghanistan Time","group":["Asia/Kabul"],"continentCode":"AS","continentName":"Asia","countryName":"Afghanistan","countryCode":"AF","mainCities":["Kabul","Herāt","Mazār-e Sharīf","Kandahār"],"rawOffsetInMinutes":270,"abbreviation":"AFT","rawFormat":"+04:30 Afghanistan Time - Kabul, Herāt, Mazār-e Sharīf, Kandahār"},{"name":"Indian/Kerguelen","alternativeName":"French Southern & Antarctic Time","group":["Indian/Kerguelen"],"continentCode":"AN","continentName":"Antarctica","countryName":"French Southern Territories","countryCode":"TF","mainCities":["Port-aux-Français"],"rawOffsetInMinutes":300,"abbreviation":"FSAT","rawFormat":"+05:00 French Southern & Antarctic Time - Port-aux-Français"},{"name":"Asia/Almaty","alternativeName":"Kazakhstan Time","group":["Asia/Almaty","Asia/Aqtau","Asia/Aqtobe","Asia/Atyrau","Asia/Oral","Asia/Qostanay","Asia/Qyzylorda"],"continentCode":"AS","continentName":"Asia","countryName":"Kazakhstan","countryCode":"KZ","mainCities":["Almaty","Shymkent","Aktobe","Karagandy"],"rawOffsetInMinutes":300,"abbreviation":"GMT+5","rawFormat":"+05:00 Kazakhstan Time - Almaty, Shymkent, Aktobe, Karagandy"},{"name":"Indian/Maldives","alternativeName":"Maldives Time","group":["Indian/Maldives","Indian/Kerguelen"],"continentCode":"AS","continentName":"Asia","countryName":"Maldives","countryCode":"MV","mainCities":["Male"],"rawOffsetInMinutes":300,"abbreviation":"MVT","rawFormat":"+05:00 Maldives Time - Male"},{"name":"Antarctica/Mawson","alternativeName":"Mawson Time","group":["Antarctica/Mawson","Antarctica/Vostok"],"continentCode":"AN","continentName":"Antarctica","countryName":"Antarctica","countryCode":"AQ","mainCities":["Mawson","Vostok"],"rawOffsetInMinutes":300,"abbreviation":"MAWT","rawFormat":"+05:00 Mawson Time - Mawson, Vostok"},{"name":"Asia/Karachi","alternativeName":"Pakistan Time","group":["Asia/Karachi"],"continentCode":"AS","continentName":"Asia","countryName":"Pakistan","countryCode":"PK","mainCities":["Lahore","Karachi","Peshawar","Faisalabad"],"rawOffsetInMinutes":300,"abbreviation":"PKT","rawFormat":"+05:00 Pakistan Time - Lahore, Karachi, Peshawar, Faisalabad"},{"name":"Asia/Dushanbe","alternativeName":"Tajikistan Time","group":["Asia/Dushanbe"],"continentCode":"AS","continentName":"Asia","countryName":"Tajikistan","countryCode":"TJ","mainCities":["Dushanbe","Isfara","Istaravshan","Kŭlob"],"rawOffsetInMinutes":300,"abbreviation":"TJT","rawFormat":"+05:00 Tajikistan Time - Dushanbe, Isfara, Istaravshan, Kŭlob"},{"name":"Asia/Ashgabat","alternativeName":"Turkmenistan Time","group":["Asia/Ashgabat","Asia/Ashkhabad"],"continentCode":"AS","continentName":"Asia","countryName":"Turkmenistan","countryCode":"TM","mainCities":["Ashgabat","Türkmenabat","Daşoguz","Mary"],"rawOffsetInMinutes":300,"abbreviation":"TMT","rawFormat":"+05:00 Turkmenistan Time - Ashgabat, Türkmenabat, Daşoguz, Mary"},{"name":"Asia/Tashkent","alternativeName":"Uzbekistan Time","group":["Asia/Samarkand","Asia/Tashkent"],"continentCode":"AS","continentName":"Asia","countryName":"Uzbekistan","countryCode":"UZ","mainCities":["Tashkent","Andijon","Namangan","Samarkand"],"rawOffsetInMinutes":300,"abbreviation":"UZT","rawFormat":"+05:00 Uzbekistan Time - Tashkent, Andijon, Namangan, Samarkand"},{"name":"Asia/Yekaterinburg","alternativeName":"Yekaterinburg Time","group":["Asia/Yekaterinburg"],"continentCode":"EU","continentName":"Europe","countryName":"Russia","countryCode":"RU","mainCities":["Yekaterinburg","Chelyabinsk","Ufa","Perm"],"rawOffsetInMinutes":300,"abbreviation":"YEKT","rawFormat":"+05:00 Yekaterinburg Time - Yekaterinburg, Chelyabinsk, Ufa, Perm"},{"name":"Asia/Colombo","alternativeName":"India Time","group":["Asia/Colombo"],"continentCode":"AS","continentName":"Asia","countryName":"Sri Lanka","countryCode":"LK","mainCities":["Colombo","Dehiwala-Mount Lavinia","Maharagama","Jaffna"],"rawOffsetInMinutes":330,"abbreviation":"IST","rawFormat":"+05:30 India Time - Colombo, Dehiwala-Mount Lavinia, Maharagama, Jaffna"},{"name":"Asia/Kolkata","alternativeName":"India Time","group":["Asia/Kolkata","Asia/Calcutta"],"continentCode":"AS","continentName":"Asia","countryName":"India","countryCode":"IN","mainCities":["Mumbai","Delhi","Bengaluru","Hyderabad"],"rawOffsetInMinutes":330,"abbreviation":"IST","rawFormat":"+05:30 India Time - Mumbai, Delhi, Bengaluru, Hyderabad"},{"name":"Asia/Kathmandu","alternativeName":"Nepal Time","group":["Asia/Kathmandu","Asia/Katmandu"],"continentCode":"AS","continentName":"Asia","countryName":"Nepal","countryCode":"NP","mainCities":["Kathmandu","Pokhara","Bharatpur","Pātan"],"rawOffsetInMinutes":345,"abbreviation":"NPT","rawFormat":"+05:45 Nepal Time - Kathmandu, Pokhara, Bharatpur, Pātan"},{"name":"Asia/Dhaka","alternativeName":"Bangladesh Time","group":["Asia/Dhaka","Asia/Dacca"],"continentCode":"AS","continentName":"Asia","countryName":"Bangladesh","countryCode":"BD","mainCities":["Dhaka","Chattogram","Gazipur","Khulna"],"rawOffsetInMinutes":360,"abbreviation":"BST","rawFormat":"+06:00 Bangladesh Time - Dhaka, Chattogram, Gazipur, Khulna"},{"name":"Asia/Thimphu","alternativeName":"Bhutan Time","group":["Asia/Thimphu","Asia/Thimbu"],"continentCode":"AS","continentName":"Asia","countryName":"Bhutan","countryCode":"BT","mainCities":["Thimphu","Phuntsholing","Tsirang","Punākha"],"rawOffsetInMinutes":360,"abbreviation":"BTT","rawFormat":"+06:00 Bhutan Time - Thimphu, Phuntsholing, Tsirang, Punākha"},{"name":"Asia/Urumqi","alternativeName":"China Time","group":["Asia/Urumqi","Asia/Kashgar"],"continentCode":"AS","continentName":"Asia","countryName":"China","countryCode":"CN","mainCities":["Ürümqi","Shihezi","Korla","Aqsu"],"rawOffsetInMinutes":360,"abbreviation":"CST","rawFormat":"+06:00 China Time - Ürümqi, Shihezi, Korla, Aqsu"},{"name":"Indian/Chagos","alternativeName":"Indian Ocean Time","group":["Indian/Chagos"],"continentCode":"AS","continentName":"Asia","countryName":"British Indian Ocean Territory","countryCode":"IO","mainCities":["Chagos"],"rawOffsetInMinutes":360,"abbreviation":"IOT","rawFormat":"+06:00 Indian Ocean Time - Chagos"},{"name":"Asia/Bishkek","alternativeName":"Kyrgyzstan Time","group":["Asia/Bishkek"],"continentCode":"AS","continentName":"Asia","countryName":"Kyrgyzstan","countryCode":"KG","mainCities":["Bishkek","Osh","Jalal-Abad","Karakol"],"rawOffsetInMinutes":360,"abbreviation":"KGT","rawFormat":"+06:00 Kyrgyzstan Time - Bishkek, Osh, Jalal-Abad, Karakol"},{"name":"Asia/Omsk","alternativeName":"Omsk Time","group":["Asia/Omsk"],"continentCode":"EU","continentName":"Europe","countryName":"Russia","countryCode":"RU","mainCities":["Omsk","Tara","Kalachinsk","Isil’kul’"],"rawOffsetInMinutes":360,"abbreviation":"OMST","rawFormat":"+06:00 Omsk Time - Omsk, Tara, Kalachinsk, Isil’kul’"},{"name":"Indian/Cocos","alternativeName":"Cocos Islands Time","group":["Indian/Cocos"],"continentCode":"AS","continentName":"Asia","countryName":"Cocos Islands","countryCode":"CC","mainCities":["West Island"],"rawOffsetInMinutes":390,"abbreviation":"CCT","rawFormat":"+06:30 Cocos Islands Time - West Island"},{"name":"Asia/Yangon","alternativeName":"Myanmar Time","group":["Asia/Yangon","Indian/Cocos","Asia/Rangoon"],"continentCode":"AS","continentName":"Asia","countryName":"Myanmar","countryCode":"MM","mainCities":["Yangon","Mandalay","Nay Pyi Taw","Hlaingthaya Township"],"rawOffsetInMinutes":390,"abbreviation":"MMT","rawFormat":"+06:30 Myanmar Time - Yangon, Mandalay, Nay Pyi Taw, Hlaingthaya Township"},{"name":"Indian/Christmas","alternativeName":"Christmas Island Time","group":["Indian/Christmas"],"continentCode":"OC","continentName":"Oceania","countryName":"Christmas Island","countryCode":"CX","mainCities":["Flying Fish Cove"],"rawOffsetInMinutes":420,"abbreviation":"CXT","rawFormat":"+07:00 Christmas Island Time - Flying Fish Cove"},{"name":"Antarctica/Davis","alternativeName":"Davis Time","group":["Antarctica/Davis"],"continentCode":"AN","continentName":"Antarctica","countryName":"Antarctica","countryCode":"AQ","mainCities":["Davis"],"rawOffsetInMinutes":420,"abbreviation":"DAVT","rawFormat":"+07:00 Davis Time - Davis"},{"name":"Asia/Hovd","alternativeName":"Hovd Time","group":["Asia/Hovd"],"continentCode":"AS","continentName":"Asia","countryName":"Mongolia","countryCode":"MN","mainCities":["Ulaangom","Khovd","Ölgii","Altai"],"rawOffsetInMinutes":420,"abbreviation":"HOVT","rawFormat":"+07:00 Hovd Time - Ulaangom, Khovd, Ölgii, Altai"},{"name":"Asia/Bangkok","alternativeName":"Indochina Time","group":["Asia/Bangkok","Asia/Phnom_Penh","Asia/Vientiane","Indian/Christmas"],"continentCode":"AS","continentName":"Asia","countryName":"Thailand","countryCode":"TH","mainCities":["Bangkok","Samut Prakan","Mueang Nonthaburi","Chon Buri"],"rawOffsetInMinutes":420,"abbreviation":"ICT","rawFormat":"+07:00 Indochina Time - Bangkok, Samut Prakan, Mueang Nonthaburi, Chon Buri"},{"name":"Asia/Ho_Chi_Minh","alternativeName":"Indochina Time","group":["Asia/Ho_Chi_Minh","Asia/Saigon"],"continentCode":"AS","continentName":"Asia","countryName":"Vietnam","countryCode":"VN","mainCities":["Ho Chi Minh City","Cần Thơ","Da Nang","Biên Hòa"],"rawOffsetInMinutes":420,"abbreviation":"ICT","rawFormat":"+07:00 Indochina Time - Ho Chi Minh City, Cần Thơ, Da Nang, Biên Hòa"},{"name":"Asia/Phnom_Penh","alternativeName":"Indochina Time","group":["Asia/Phnom_Penh"],"continentCode":"AS","continentName":"Asia","countryName":"Cambodia","countryCode":"KH","mainCities":["Phnom Penh","Takeo","Siem Reap","Battambang"],"rawOffsetInMinutes":420,"abbreviation":"ICT","rawFormat":"+07:00 Indochina Time - Phnom Penh, Takeo, Siem Reap, Battambang"},{"name":"Asia/Vientiane","alternativeName":"Indochina Time","group":["Asia/Vientiane"],"continentCode":"AS","continentName":"Asia","countryName":"Laos","countryCode":"LA","mainCities":["Vientiane","Savannakhet","Pakse","Thakhèk"],"rawOffsetInMinutes":420,"abbreviation":"ICT","rawFormat":"+07:00 Indochina Time - Vientiane, Savannakhet, Pakse, Thakhèk"},{"name":"Asia/Novosibirsk","alternativeName":"Novosibirsk Time","group":["Asia/Barnaul","Asia/Krasnoyarsk","Asia/Novokuznetsk","Asia/Novosibirsk","Asia/Tomsk"],"continentCode":"EU","continentName":"Europe","countryName":"Russia","countryCode":"RU","mainCities":["Novosibirsk","Krasnoyarsk","Barnaul","Tomsk"],"rawOffsetInMinutes":420,"abbreviation":"NOVT","rawFormat":"+07:00 Novosibirsk Time - Novosibirsk, Krasnoyarsk, Barnaul, Tomsk"},{"name":"Asia/Jakarta","alternativeName":"Western Indonesia Time","group":["Asia/Jakarta","Asia/Pontianak"],"continentCode":"AS","continentName":"Asia","countryName":"Indonesia","countryCode":"ID","mainCities":["Jakarta","Surabaya","Bekasi","Bandung"],"rawOffsetInMinutes":420,"abbreviation":"WIB","rawFormat":"+07:00 Western Indonesia Time - Jakarta, Surabaya, Bekasi, Bandung"},{"name":"Antarctica/Casey","alternativeName":"Australian Western Time","group":["Antarctica/Casey"],"continentCode":"AN","continentName":"Antarctica","countryName":"Antarctica","countryCode":"AQ","mainCities":["Casey"],"rawOffsetInMinutes":480,"abbreviation":"AWST","rawFormat":"+08:00 Australian Western Time - Casey"},{"name":"Australia/Perth","alternativeName":"Australian Western Time","group":["Australia/Perth","Australia/West"],"continentCode":"OC","continentName":"Oceania","countryName":"Australia","countryCode":"AU","mainCities":["Perth","Mandurah","Bunbury","Geraldton"],"rawOffsetInMinutes":480,"abbreviation":"AWST","rawFormat":"+08:00 Australian Western Time - Perth, Mandurah, Bunbury, Geraldton"},{"name":"Asia/Brunei","alternativeName":"Brunei Time","group":["Asia/Brunei"],"continentCode":"AS","continentName":"Asia","countryName":"Brunei","countryCode":"BN","mainCities":["Bandar Seri Begawan","Sengkurong","Mentiri","Kuala Belait"],"rawOffsetInMinutes":480,"abbreviation":"GMT+8","rawFormat":"+08:00 Brunei Time - Bandar Seri Begawan, Sengkurong, Mentiri, Kuala Belait"},{"name":"Asia/Makassar","alternativeName":"Central Indonesia Time","group":["Asia/Makassar","Asia/Ujung_Pandang"],"continentCode":"AS","continentName":"Asia","countryName":"Indonesia","countryCode":"ID","mainCities":["Makassar","Samarinda","Denpasar","Balikpapan"],"rawOffsetInMinutes":480,"abbreviation":"WITA","rawFormat":"+08:00 Central Indonesia Time - Makassar, Samarinda, Denpasar, Balikpapan"},{"name":"Asia/Macau","alternativeName":"China Time","group":["Asia/Macau","Asia/Macao"],"continentCode":"AS","continentName":"Asia","countryName":"Macao","countryCode":"MO","mainCities":["Macau","Taipa","Sé","Luhuan"],"rawOffsetInMinutes":480,"abbreviation":"CST","rawFormat":"+08:00 China Time - Macau, Taipa, Sé, Luhuan"},{"name":"Asia/Shanghai","alternativeName":"China Time","group":["Asia/Shanghai","PRC","Asia/Chongqing","Asia/Harbin","Asia/Chungking"],"continentCode":"AS","continentName":"Asia","countryName":"China","countryCode":"CN","mainCities":["Shanghai","Beijing","Shenzhen","Guangzhou"],"rawOffsetInMinutes":480,"abbreviation":"CST","rawFormat":"+08:00 China Time - Shanghai, Beijing, Shenzhen, Guangzhou"},{"name":"Asia/Hong_Kong","alternativeName":"Hong Kong Time","group":["Asia/Hong_Kong","Hongkong"],"continentCode":"AS","continentName":"Asia","countryName":"Hong Kong","countryCode":"HK","mainCities":["Hong Kong","New Territories","Kowloon","Hong Kong Island"],"rawOffsetInMinutes":480,"abbreviation":"HKT","rawFormat":"+08:00 Hong Kong Time - Hong Kong, New Territories, Kowloon, Hong Kong Island"},{"name":"Asia/Irkutsk","alternativeName":"Irkutsk Time","group":["Asia/Irkutsk"],"continentCode":"EU","continentName":"Europe","countryName":"Russia","countryCode":"RU","mainCities":["Irkutsk","Ulan-Ude","Bratsk","Angarsk"],"rawOffsetInMinutes":480,"abbreviation":"IRKT","rawFormat":"+08:00 Irkutsk Time - Irkutsk, Ulan-Ude, Bratsk, Angarsk"},{"name":"Asia/Kuala_Lumpur","alternativeName":"Malaysia Time","group":["Asia/Kuala_Lumpur","Asia/Kuching","Asia/Brunei"],"continentCode":"AS","continentName":"Asia","countryName":"Malaysia","countryCode":"MY","mainCities":["Kuala Lumpur","Johor Bahru","Kampung Baru Subang","Petaling Jaya"],"rawOffsetInMinutes":480,"abbreviation":"MYT","rawFormat":"+08:00 Malaysia Time - Kuala Lumpur, Johor Bahru, Kampung Baru Subang, Petaling Jaya"},{"name":"Asia/Manila","alternativeName":"Philippine Time","group":["Asia/Manila"],"continentCode":"AS","continentName":"Asia","countryName":"Philippines","countryCode":"PH","mainCities":["Quezon City","Davao","Caloocan City","Manila"],"rawOffsetInMinutes":480,"abbreviation":"PHT","rawFormat":"+08:00 Philippine Time - Quezon City, Davao, Caloocan City, Manila"},{"name":"Asia/Singapore","alternativeName":"Singapore Time","group":["Asia/Singapore","Singapore","Asia/Kuala_Lumpur"],"continentCode":"AS","continentName":"Asia","countryName":"Singapore","countryCode":"SG","mainCities":["Singapore","Ulu Bedok","Bedok New Town","Tampines Estate"],"rawOffsetInMinutes":480,"abbreviation":"SGT","rawFormat":"+08:00 Singapore Time - Singapore, Ulu Bedok, Bedok New Town, Tampines Estate"},{"name":"Asia/Taipei","alternativeName":"Taiwan Time","group":["Asia/Taipei","ROC"],"continentCode":"AS","continentName":"Asia","countryName":"Taiwan","countryCode":"TW","mainCities":["Taipei","New Taipei City","Taichung","Kaohsiung"],"rawOffsetInMinutes":480,"abbreviation":"GMT+8","rawFormat":"+08:00 Taiwan Time - Taipei, New Taipei City, Taichung, Kaohsiung"},{"name":"Asia/Ulaanbaatar","alternativeName":"Ulaanbaatar Time","group":["Asia/Ulaanbaatar","Asia/Choibalsan","Asia/Ulan_Bator"],"continentCode":"AS","continentName":"Asia","countryName":"Mongolia","countryCode":"MN","mainCities":["Ulan Bator","Erdenet","Darhan","Choibalsan"],"rawOffsetInMinutes":480,"abbreviation":"ULAT","rawFormat":"+08:00 Ulaanbaatar Time - Ulan Bator, Erdenet, Darhan, Choibalsan"},{"name":"Australia/Eucla","alternativeName":"Australian Central Western Time","group":["Australia/Eucla"],"continentCode":"OC","continentName":"Oceania","countryName":"Australia","countryCode":"AU","mainCities":["Eucla"],"rawOffsetInMinutes":525,"abbreviation":"ACWST","rawFormat":"+08:45 Australian Central Western Time - Eucla"},{"name":"Asia/Jayapura","alternativeName":"Eastern Indonesia Time","group":["Asia/Jayapura"],"continentCode":"AS","continentName":"Asia","countryName":"Indonesia","countryCode":"ID","mainCities":["Jayapura","Ambon","Sorong","Ternate"],"rawOffsetInMinutes":540,"abbreviation":"WIT","rawFormat":"+09:00 Eastern Indonesia Time - Jayapura, Ambon, Sorong, Ternate"},{"name":"Asia/Tokyo","alternativeName":"Japan Time","group":["Asia/Tokyo","Japan"],"continentCode":"AS","continentName":"Asia","countryName":"Japan","countryCode":"JP","mainCities":["Tokyo","Yokohama","Osaka","Nagoya"],"rawOffsetInMinutes":540,"abbreviation":"JST","rawFormat":"+09:00 Japan Time - Tokyo, Yokohama, Osaka, Nagoya"},{"name":"Asia/Pyongyang","alternativeName":"Korean Time","group":["Asia/Pyongyang"],"continentCode":"AS","continentName":"Asia","countryName":"North Korea","countryCode":"KP","mainCities":["Pyongyang","Hamhŭng","Namp’o","Sunch’ŏn"],"rawOffsetInMinutes":540,"abbreviation":"KST","rawFormat":"+09:00 Korean Time - Pyongyang, Hamhŭng, Namp’o, Sunch’ŏn"},{"name":"Asia/Seoul","alternativeName":"Korean Time","group":["Asia/Seoul","ROK"],"continentCode":"AS","continentName":"Asia","countryName":"South Korea","countryCode":"KR","mainCities":["Seoul","Busan","Incheon","Daegu"],"rawOffsetInMinutes":540,"abbreviation":"KST","rawFormat":"+09:00 Korean Time - Seoul, Busan, Incheon, Daegu"},{"name":"Pacific/Palau","alternativeName":"Palau Time","group":["Pacific/Palau"],"continentCode":"OC","continentName":"Oceania","countryName":"Palau","countryCode":"PW","mainCities":["Ngerulmud"],"rawOffsetInMinutes":540,"abbreviation":"PWT","rawFormat":"+09:00 Palau Time - Ngerulmud"},{"name":"Asia/Dili","alternativeName":"Timor-Leste Time","group":["Asia/Dili"],"continentCode":"OC","continentName":"Oceania","countryName":"Timor Leste","countryCode":"TL","mainCities":["Dili","Maliana","Suai","Likisá"],"rawOffsetInMinutes":540,"abbreviation":"GMT+9","rawFormat":"+09:00 Timor-Leste Time - Dili, Maliana, Suai, Likisá"},{"name":"Asia/Chita","alternativeName":"Yakutsk Time","group":["Asia/Chita","Asia/Khandyga","Asia/Yakutsk"],"continentCode":"EU","continentName":"Europe","countryName":"Russia","countryCode":"RU","mainCities":["Chita","Yakutsk","Blagoveshchensk","Belogorsk"],"rawOffsetInMinutes":540,"abbreviation":"YAKT","rawFormat":"+09:00 Yakutsk Time - Chita, Yakutsk, Blagoveshchensk, Belogorsk"},{"name":"Australia/Adelaide","alternativeName":"Australian Central Time","group":["Australia/Adelaide","Australia/Broken_Hill","Australia/South","Australia/Yancowinna"],"continentCode":"OC","continentName":"Oceania","countryName":"Australia","countryCode":"AU","mainCities":["Adelaide","Adelaide Hills","Mount Gambier","Morphett Vale"],"rawOffsetInMinutes":570,"abbreviation":"ACST","rawFormat":"+09:30 Australian Central Time - Adelaide, Adelaide Hills, Mount Gambier, Morphett Vale"},{"name":"Australia/Darwin","alternativeName":"Australian Central Time","group":["Australia/Darwin","Australia/North"],"continentCode":"OC","continentName":"Oceania","countryName":"Australia","countryCode":"AU","mainCities":["Darwin","Palmerston","Alice Springs"],"rawOffsetInMinutes":570,"abbreviation":"ACST","rawFormat":"+09:30 Australian Central Time - Darwin, Palmerston, Alice Springs"},{"name":"Australia/Brisbane","alternativeName":"Australian Eastern Time","group":["Australia/Brisbane","Australia/Lindeman","Australia/Queensland"],"continentCode":"OC","continentName":"Oceania","countryName":"Australia","countryCode":"AU","mainCities":["Brisbane","Gold Coast","Sunshine Coast","Logan City"],"rawOffsetInMinutes":600,"abbreviation":"AEST","rawFormat":"+10:00 Australian Eastern Time - Brisbane, Gold Coast, Sunshine Coast, Logan City"},{"name":"Australia/Sydney","alternativeName":"Australian Eastern Time","group":["Antarctica/Macquarie","Australia/Hobart","Australia/Melbourne","Australia/Sydney","Australia/Tasmania","Australia/Currie","Australia/Victoria","Australia/ACT","Australia/NSW","Australia/Canberra"],"continentCode":"OC","continentName":"Oceania","countryName":"Australia","countryCode":"AU","mainCities":["Sydney","Melbourne","Newcastle","Canberra"],"rawOffsetInMinutes":600,"abbreviation":"AEST","rawFormat":"+10:00 Australian Eastern Time - Sydney, Melbourne, Newcastle, Canberra"},{"name":"Pacific/Guam","alternativeName":"Chamorro Time","group":["Pacific/Guam","Pacific/Saipan"],"continentCode":"OC","continentName":"Oceania","countryName":"Guam","countryCode":"GU","mainCities":["Dededo Village","Yigo Village","Tamuning-Tumon-Harmon Village","Tamuning"],"rawOffsetInMinutes":600,"abbreviation":"ChST","rawFormat":"+10:00 Chamorro Time - Dededo Village, Yigo Village, Tamuning-Tumon-Harmon Village, Tamuning"},{"name":"Pacific/Saipan","alternativeName":"Chamorro Time","group":["Pacific/Saipan"],"continentCode":"OC","continentName":"Oceania","countryName":"Northern Mariana Islands","countryCode":"MP","mainCities":["Saipan"],"rawOffsetInMinutes":600,"abbreviation":"ChST","rawFormat":"+10:00 Chamorro Time - Saipan"},{"name":"Pacific/Chuuk","alternativeName":"Chuuk Time","group":["Pacific/Chuuk"],"continentCode":"OC","continentName":"Oceania","countryName":"Micronesia","countryCode":"FM","mainCities":["Chuuk"],"rawOffsetInMinutes":600,"abbreviation":"CHUT","rawFormat":"+10:00 Chuuk Time - Chuuk"},{"name":"Antarctica/DumontDUrville","alternativeName":"Dumont d’Urville Time","group":["Antarctica/DumontDUrville"],"continentCode":"AN","continentName":"Antarctica","countryName":"Antarctica","countryCode":"AQ","mainCities":["DumontDUrville"],"rawOffsetInMinutes":600,"abbreviation":"GMT+10","rawFormat":"+10:00 Dumont d’Urville Time - DumontDUrville"},{"name":"Pacific/Port_Moresby","alternativeName":"Papua New Guinea Time","group":["Pacific/Port_Moresby","Antarctica/DumontDUrville","Pacific/Chuuk","Pacific/Yap","Pacific/Truk"],"continentCode":"OC","continentName":"Oceania","countryName":"Papua New Guinea","countryCode":"PG","mainCities":["Port Moresby","Lae","Mount Hagen","Popondetta"],"rawOffsetInMinutes":600,"abbreviation":"PGT","rawFormat":"+10:00 Papua New Guinea Time - Port Moresby, Lae, Mount Hagen, Popondetta"},{"name":"Asia/Vladivostok","alternativeName":"Vladivostok Time","group":["Asia/Ust-Nera","Asia/Vladivostok"],"continentCode":"EU","continentName":"Europe","countryName":"Russia","countryCode":"RU","mainCities":["Khabarovsk","Vladivostok","Khabarovsk Vtoroy","Komsomolsk-on-Amur"],"rawOffsetInMinutes":600,"abbreviation":"VLAT","rawFormat":"+10:00 Vladivostok Time - Khabarovsk, Vladivostok, Khabarovsk Vtoroy, Komsomolsk-on-Amur"},{"name":"Australia/Lord_Howe","alternativeName":"Lord Howe Time","group":["Australia/Lord_Howe","Australia/LHI"],"continentCode":"OC","continentName":"Oceania","countryName":"Australia","countryCode":"AU","mainCities":["Lord Howe"],"rawOffsetInMinutes":630,"abbreviation":"LHST","rawFormat":"+10:30 Lord Howe Time - Lord Howe"},{"name":"Pacific/Bougainville","alternativeName":"Bougainville Time","group":["Pacific/Bougainville"],"continentCode":"OC","continentName":"Oceania","countryName":"Papua New Guinea","countryCode":"PG","mainCities":["Arawa"],"rawOffsetInMinutes":660,"abbreviation":"BST","rawFormat":"+11:00 Bougainville Time - Arawa"},{"name":"Pacific/Kosrae","alternativeName":"Kosrae Time","group":["Pacific/Kosrae","Pacific/Pohnpei"],"continentCode":"OC","continentName":"Oceania","countryName":"Micronesia","countryCode":"FM","mainCities":["Kosrae","Palikir"],"rawOffsetInMinutes":660,"abbreviation":"KOST","rawFormat":"+11:00 Kosrae Time - Kosrae, Palikir"},{"name":"Pacific/Noumea","alternativeName":"New Caledonia Time","group":["Pacific/Noumea"],"continentCode":"OC","continentName":"Oceania","countryName":"New Caledonia","countryCode":"NC","mainCities":["Nouméa","Mont-Dore","Dumbéa"],"rawOffsetInMinutes":660,"abbreviation":"NCT","rawFormat":"+11:00 New Caledonia Time - Nouméa, Mont-Dore, Dumbéa"},{"name":"Pacific/Norfolk","alternativeName":"Norfolk Island Time","group":["Pacific/Norfolk"],"continentCode":"OC","continentName":"Oceania","countryName":"Norfolk Island","countryCode":"NF","mainCities":["Kingston"],"rawOffsetInMinutes":660,"abbreviation":"NFT","rawFormat":"+11:00 Norfolk Island Time - Kingston"},{"name":"Asia/Sakhalin","alternativeName":"Sakhalin Time","group":["Asia/Magadan","Asia/Sakhalin","Asia/Srednekolymsk"],"continentCode":"EU","continentName":"Europe","countryName":"Russia","countryCode":"RU","mainCities":["Yuzhno-Sakhalinsk","Magadan","Korsakov","Kholmsk"],"rawOffsetInMinutes":660,"abbreviation":"SAKT","rawFormat":"+11:00 Sakhalin Time - Yuzhno-Sakhalinsk, Magadan, Korsakov, Kholmsk"},{"name":"Pacific/Guadalcanal","alternativeName":"Solomon Islands Time","group":["Pacific/Guadalcanal","Pacific/Pohnpei","Pacific/Ponape"],"continentCode":"OC","continentName":"Oceania","countryName":"Solomon Islands","countryCode":"SB","mainCities":["Honiara","Panatina","Nggosi","Tandai"],"rawOffsetInMinutes":660,"abbreviation":"SBT","rawFormat":"+11:00 Solomon Islands Time - Honiara, Panatina, Nggosi, Tandai"},{"name":"Pacific/Efate","alternativeName":"Vanuatu Time","group":["Pacific/Efate"],"continentCode":"OC","continentName":"Oceania","countryName":"Vanuatu","countryCode":"VU","mainCities":["Port-Vila"],"rawOffsetInMinutes":660,"abbreviation":"VUT","rawFormat":"+11:00 Vanuatu Time - Port-Vila"},{"name":"Pacific/Fiji","alternativeName":"Fiji Time","group":["Pacific/Fiji"],"continentCode":"OC","continentName":"Oceania","countryName":"Fiji","countryCode":"FJ","mainCities":["Nasinu","Suva","Lautoka","Nadi"],"rawOffsetInMinutes":720,"abbreviation":"FJT","rawFormat":"+12:00 Fiji Time - Nasinu, Suva, Lautoka, Nadi"},{"name":"Pacific/Tarawa","alternativeName":"Gilbert Islands Time","group":["Pacific/Tarawa","Pacific/Funafuti","Pacific/Majuro","Pacific/Wake","Pacific/Wallis"],"continentCode":"OC","continentName":"Oceania","countryName":"Kiribati","countryCode":"KI","mainCities":["Tarawa"],"rawOffsetInMinutes":720,"abbreviation":"GILT","rawFormat":"+12:00 Gilbert Islands Time - Tarawa"},{"name":"Asia/Kamchatka","alternativeName":"Kamchatka Time","group":["Asia/Anadyr","Asia/Kamchatka"],"continentCode":"EU","continentName":"Europe","countryName":"Russia","countryCode":"RU","mainCities":["Petropavlovsk-Kamchatsky","Yelizovo","Vilyuchinsk","Anadyr"],"rawOffsetInMinutes":720,"abbreviation":"PETT","rawFormat":"+12:00 Kamchatka Time - Petropavlovsk-Kamchatsky, Yelizovo, Vilyuchinsk, Anadyr"},{"name":"Pacific/Majuro","alternativeName":"Marshall Islands Time","group":["Pacific/Kwajalein","Pacific/Majuro","Kwajalein"],"continentCode":"OC","continentName":"Oceania","countryName":"Marshall Islands","countryCode":"MH","mainCities":["Majuro","Kwajalein"],"rawOffsetInMinutes":720,"abbreviation":"MHT","rawFormat":"+12:00 Marshall Islands Time - Majuro, Kwajalein"},{"name":"Pacific/Nauru","alternativeName":"Nauru Time","group":["Pacific/Nauru"],"continentCode":"OC","continentName":"Oceania","countryName":"Nauru","countryCode":"NR","mainCities":["Yaren"],"rawOffsetInMinutes":720,"abbreviation":"NRT","rawFormat":"+12:00 Nauru Time - Yaren"},{"name":"Pacific/Auckland","alternativeName":"New Zealand Time","group":["Pacific/Auckland","NZ","Antarctica/McMurdo","Antarctica/South_Pole"],"continentCode":"OC","continentName":"Oceania","countryName":"New Zealand","countryCode":"NZ","mainCities":["Auckland","Christchurch","Wellington","Manukau City"],"rawOffsetInMinutes":720,"abbreviation":"NZST","rawFormat":"+12:00 New Zealand Time - Auckland, Christchurch, Wellington, Manukau City"},{"name":"Antarctica/McMurdo","alternativeName":"New Zealand Time","group":["Antarctica/McMurdo"],"continentCode":"AN","continentName":"Antarctica","countryName":"Antarctica","countryCode":"AQ","mainCities":["McMurdo"],"rawOffsetInMinutes":720,"abbreviation":"NZST","rawFormat":"+12:00 New Zealand Time - McMurdo"},{"name":"Pacific/Funafuti","alternativeName":"Tuvalu Time","group":["Pacific/Funafuti"],"continentCode":"OC","continentName":"Oceania","countryName":"Tuvalu","countryCode":"TV","mainCities":["Funafuti"],"rawOffsetInMinutes":720,"abbreviation":"TVT","rawFormat":"+12:00 Tuvalu Time - Funafuti"},{"name":"Pacific/Wake","alternativeName":"Wake Island Time","group":["Pacific/Wake"],"continentCode":"OC","continentName":"Oceania","countryName":"United States Minor Outlying Islands","countryCode":"UM","mainCities":["Wake"],"rawOffsetInMinutes":720,"abbreviation":"WAKT","rawFormat":"+12:00 Wake Island Time - Wake"},{"name":"Pacific/Wallis","alternativeName":"Wallis & Futuna Time","group":["Pacific/Wallis"],"continentCode":"OC","continentName":"Oceania","countryName":"Wallis and Futuna","countryCode":"WF","mainCities":["Mata-Utu"],"rawOffsetInMinutes":720,"abbreviation":"WFT","rawFormat":"+12:00 Wallis & Futuna Time - Mata-Utu"},{"name":"Pacific/Chatham","alternativeName":"Chatham Time","group":["Pacific/Chatham","NZ-CHAT"],"continentCode":"OC","continentName":"Oceania","countryName":"New Zealand","countryCode":"NZ","mainCities":["Chatham"],"rawOffsetInMinutes":765,"abbreviation":"CHAST","rawFormat":"+12:45 Chatham Time - Chatham"},{"name":"Pacific/Kanton","alternativeName":"Phoenix Islands Time","group":["Pacific/Kanton","Pacific/Enderbury"],"continentCode":"OC","continentName":"Oceania","countryName":"Kiribati","countryCode":"KI","mainCities":["Kanton"],"rawOffsetInMinutes":780,"abbreviation":"PHOT","rawFormat":"+13:00 Phoenix Islands Time - Kanton"},{"name":"Pacific/Apia","alternativeName":"Samoa Time","group":["Pacific/Apia"],"continentCode":"OC","continentName":"Oceania","countryName":"Samoa","countryCode":"WS","mainCities":["Apia"],"rawOffsetInMinutes":780,"abbreviation":"SST","rawFormat":"+13:00 Samoa Time - Apia"},{"name":"Pacific/Fakaofo","alternativeName":"Tokelau Time","group":["Pacific/Fakaofo"],"continentCode":"OC","continentName":"Oceania","countryName":"Tokelau","countryCode":"TK","mainCities":["Fakaofo"],"rawOffsetInMinutes":780,"abbreviation":"TKT","rawFormat":"+13:00 Tokelau Time - Fakaofo"},{"name":"Pacific/Tongatapu","alternativeName":"Tonga Time","group":["Pacific/Tongatapu"],"continentCode":"OC","continentName":"Oceania","countryName":"Tonga","countryCode":"TO","mainCities":["Nuku‘alofa"],"rawOffsetInMinutes":780,"abbreviation":"TOT","rawFormat":"+13:00 Tonga Time - Nuku‘alofa"},{"name":"Pacific/Kiritimati","alternativeName":"Line Islands Time","group":["Pacific/Kiritimati"],"continentCode":"OC","continentName":"Oceania","countryName":"Kiribati","countryCode":"KI","mainCities":["Kiritimati"],"rawOffsetInMinutes":840,"abbreviation":"LINT","rawFormat":"+14:00 Line Islands Time - Kiritimati"}]`);
function Ck({
  alternativeName: t,
  mainCities: e,
  rawOffsetInMinutes: n,
  currentTimeOffsetInMinutes: a
}, { useCurrentOffset: i = !1 } = {}) {
  return `${So(i ? a : n).padStart(
    6,
    "+"
  )} ${t} - ${e.join(", ")}`;
}
function So(t) {
  const e = Math.abs(t), [n, a] = [
    Math.floor(e / 60),
    e % 60
  ].map((o) => o.toString().padStart(2, "0")), i = `${n}:${a}`;
  return `${t >= 0 ? "+" : "-"}${i}`;
}
const wk = /^[A-Za-z_+-]{1,256}(:?\/[A-Za-z_+-]{1,256}(\/[A-Za-z_+-]{1,256})?)?$/, Ak = {
  year: 0,
  month: 1,
  day: 2,
  hour: 3,
  minute: 4,
  second: 5
};
function kk(t) {
  return !!(t && t.match(wk));
}
function Sk(t, e) {
  const n = t.format(e).replace(/\u200E/g, ""), a = /(\d+)\/(\d+)\/(\d+),? (\d+):(\d+):(\d+)/.exec(n), [, i, o, r, s, u, d] = a;
  return [r, i, o, s, u, d];
}
function Tk(t, e) {
  const n = t.formatToParts(e), a = [];
  for (let i = 0; i < n.length; i++) {
    const { type: o, value: r } = n[i], s = Ak[o];
    typeof s < "u" && (a[s] = parseInt(r, 10));
  }
  return a;
}
function Ek(t) {
  return new Intl.DateTimeFormat("en-US", {
    hourCycle: "h23",
    timeZone: t,
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit"
  });
}
function Mk(t) {
  let e = Date.UTC(
    t.year,
    t.month - 1,
    t.day,
    t.hour,
    t.minute,
    t.second,
    t.millisecond
  );
  return t.year < 100 && t.year >= 0 && (e = new Date(e), e.setUTCFullYear(e.getUTCFullYear() - 1900)), +e;
}
function Nk(t) {
  if (!kk(t))
    return !1;
  const e = new Date(Date.now());
  let n;
  try {
    n = Ek(t);
  } catch {
    return !1;
  }
  const [a, i, o, r, s, u] = n.formatToParts ? Tk(n, e) : Sk(n, e), d = Mk({
    year: a,
    month: i,
    day: o,
    hour: r,
    minute: s,
    second: u,
    millisecond: 0
  });
  let m = +e;
  const v = m % 1e3;
  return m -= v >= 0 ? v : 1e3 + v, (d - m) / (60 * 1e3);
}
function Dk(t) {
  return _k.reduce(
    function(e, n) {
      const a = n.name, i = Nk(a);
      if (i === !1)
        return e;
      const o = {
        ...n,
        currentTimeOffsetInMinutes: i
      };
      return e.push({
        ...o,
        currentTimeFormat: Ck(o, {
          useCurrentOffset: !0
        })
      }), e;
    },
    []
  ).sort((e, n) => Ik(e, n) || To(e.alternativeName, n.alternativeName) || To(e.mainCities[0], n.mainCities[0]));
}
function Ik(t, e) {
  return t.currentTimeOffsetInMinutes - e.currentTimeOffsetInMinutes;
}
function To(t, e) {
  return typeof t == "string" && typeof e == "string" ? t.localeCompare(e) : 0;
}
const Ok = ["data-widget-id"], Rk = {
  key: 0,
  class: "fu-empty"
}, $k = {
  key: 1,
  class: "fu-layout"
}, xk = { class: "fu-info" }, Pk = { class: "fu-info__name" }, Fk = {
  key: 0,
  class: "fu-info__meta"
}, Bk = {
  key: 1,
  class: "fu-info__desc"
}, zk = ["aria-expanded"], Lk = { class: "fu-tz__label" }, Vk = {
  key: 0,
  class: "fu-tz__dropdown"
}, Hk = { class: "fu-tz__search-wrap" }, jk = { class: "fu-tz__search-icon" }, Uk = {
  key: 0,
  class: "fu-tz__no-results"
}, Wk = ["onMouseenter", "onMousedown"], Yk = { class: "fu-tz__opt-offset" }, Gk = { class: "fu-tz__opt-name" }, qk = { class: "fu-tz__opt-country" }, Kk = {
  key: 0,
  class: "fu-selected"
}, Qk = { class: "fu-selected__time" }, Zk = { class: "fu-selected__time" }, Jk = { class: "fu-right" }, Xk = {
  key: 0,
  class: "fu-slots"
}, eS = { class: "fu-slots__header" }, tS = { class: "fu-slots__heading" }, nS = {
  key: 0,
  class: "fu-slots__loading"
}, aS = {
  key: 1,
  class: "fu-slots__list"
}, iS = ["onClick"], oS = {
  key: 2,
  class: "fu-slots__empty"
}, rS = /* @__PURE__ */ le({
  __name: "FuSchedulerWidget",
  props: {
    widgetId: {},
    eventTypeId: {},
    eventTypeName: {},
    description: {},
    timezone: {},
    style: {},
    availableDates: {},
    slots: {},
    slotsLoading: { type: Boolean }
  },
  emits: ["update", "date-select", "month-change"],
  setup(t, { emit: e }) {
    const n = t, a = e, i = I(
      () => Dk().map((S) => {
        const P = S.mainCities?.[0] || S.name.split("/").pop()?.replace(/_/g, " ") || S.name, J = S.rawOffsetInMinutes ?? 0, te = J >= 0 ? "+" : "-", be = Math.abs(J), Te = String(Math.floor(be / 60)).padStart(2, "0"), _e = String(be % 60).padStart(2, "0"), Fe = `UTC${te}${Te}:${_e}`;
        return {
          value: S.name,
          offset: Fe,
          city: P,
          country: "",
          searchIndex: [S.name, S.abbreviation, P, S.group, Fe].join(" ").toLowerCase()
        };
      })
    );
    function o() {
      try {
        return Intl.DateTimeFormat().resolvedOptions().timeZone || "UTC";
      } catch {
        return "UTC";
      }
    }
    const r = M(o()), s = M(!1), u = M(""), d = M(0), m = M(null), v = M(null), p = M(null), h = I(() => {
      const S = i.value.find((P) => P.value === r.value);
      return S ? `${S.offset} · ${S.city}` : r.value;
    }), g = I(() => {
      const S = u.value.trim().toLowerCase();
      return S ? i.value.filter((P) => P.searchIndex.includes(S)) : i.value;
    });
    async function y() {
      s.value = !s.value, s.value && (u.value = "", d.value = Math.max(
        0,
        g.value.findIndex((S) => S.value === r.value)
      ), await ge(), v.value?.focus(), C());
    }
    function b(S) {
      S && (r.value = S.value, s.value = !1, u.value = "");
    }
    function _(S) {
      const P = g.value.length;
      P && (d.value = (d.value + S + P) % P, C());
    }
    function C() {
      ge(() => {
        p.value?.children[d.value]?.scrollIntoView({ block: "nearest" });
      });
    }
    he(g, () => {
      d.value = 0;
    });
    function k(S) {
      m.value && !m.value.contains(S.target) && (s.value = !1);
    }
    we(() => document.addEventListener("mousedown", k)), Ae(() => document.removeEventListener("mousedown", k));
    const E = I(() => {
      const S = n.style || {}, P = S.bgColor || "#ffffff", J = (S.bgOpacity ?? 100) / 100, te = (ne) => {
        const re = parseInt(ne, 16);
        return isNaN(re) ? 255 : re;
      }, be = te(P.slice(1, 3)), Te = te(P.slice(3, 5)), _e = te(P.slice(5, 7)), Fe = [
        "none",
        "0 1px 4px rgba(0,0,0,0.07)",
        "0 2px 12px rgba(0,0,0,0.10)",
        "0 4px 20px rgba(0,0,0,0.13)",
        "0 8px 32px rgba(0,0,0,0.16)"
      ], Me = S.dayColor || "#4f46e5", U = (S.dayShape || "circle") === "circle";
      return {
        backgroundColor: `rgba(${be},${Te},${_e},${J})`,
        "--widget-bg": `rgba(${be},${Te},${_e},${J})`,
        borderRadius: `${S.borderRadius ?? 12}px`,
        boxShadow: Fe[Math.min(S.shadow ?? 2, 4)],
        "--sch-day-color": Me,
        "--sch-day-color-light": Me + "22",
        "--sch-day-color-mid": Me + "44",
        "--sch-day-radius": U ? "50%" : "10px",
        "--sch-day-size": U ? "32px" : "40px"
      };
    }), N = I(
      () => new Set(n.availableDates ?? [])
    ), z = I(
      () => [...N.value].map((S) => ({
        id: `dot-${S}`,
        date: S,
        display: "background",
        classNames: ["sch-avail-bg"]
      }))
    );
    function x() {
      return (/* @__PURE__ */ new Date()).toLocaleDateString("en-CA");
    }
    const W = M(null), Y = M(null), O = M(null), V = M(null), H = I(() => `cal-${n.eventTypeId}`);
    he(W, () => {
      Y.value = null;
    }), he(
      () => n.slots,
      () => {
        Y.value = null;
      }
    ), he(
      () => n.eventTypeId,
      () => {
        W.value = null, Y.value = null, r.value = o();
      }
    );
    function R() {
      W.value = null, Y.value = null, setTimeout(() => V.value?.getApi?.()?.updateSize(), 260);
    }
    const T = I(() => ({
      plugins: [ZA, bk],
      initialView: "dayGridMonth",
      headerToolbar: { left: "prev", center: "title", right: "next" },
      height: "auto",
      fixedWeekCount: !1,
      showNonCurrentDates: !1,
      events: z.value,
      datesSet({ view: S }) {
        const P = S.currentStart;
        a("month-change", { year: P.getFullYear(), month: P.getMonth() + 1 });
      },
      dayCellClassNames({ date: S }) {
        const P = [
          S.getFullYear(),
          String(S.getMonth() + 1).padStart(2, "0"),
          String(S.getDate()).padStart(2, "0")
        ].join("-"), J = P < x(), te = [];
        return N.value.has(P) ? te.push(J ? "sch-day--past" : "sch-day--available") : te.push("sch-day--past"), P === W.value && te.push("sch-day--selected"), te;
      },
      dateClick({ dateStr: S }) {
        S < x() || N.value.has(S) && (W.value = S, a("date-select", { date: S }), setTimeout(() => V.value?.getApi?.()?.updateSize(), 260));
      },
      selectable: !1,
      editable: !1
    }));
    function D() {
      Y.value && (O.value = Y.value, a("update", { bookedSlot: Y.value }));
    }
    function $(S) {
      if (!S) return "";
      const [P, J, te] = S.split("-").map(Number);
      return new Date(P, J - 1, te).toLocaleDateString("en-GB", {
        weekday: "long",
        day: "numeric",
        month: "long"
      });
    }
    const F = I(() => Y.value?.start ? new Date(Y.value.start).toLocaleDateString("en-GB", {
      weekday: "long",
      day: "numeric",
      month: "long"
    }) : $(W.value || ""));
    function K(S, P) {
      if (!S) return "";
      try {
        return new Date(S).toLocaleTimeString("en-US", {
          timeZone: P || "UTC",
          hour: "numeric",
          minute: "2-digit",
          hour12: !0
        });
      } catch {
        return "";
      }
    }
    function B(S) {
      return S?.start ? K(S.start, r.value) : "";
    }
    function j(S) {
      return S?.end ? K(S.end, r.value) : "";
    }
    return (S, P) => (l(), c("div", {
      class: "fu-widget",
      "data-widget-id": t.widgetId,
      style: ie(E.value)
    }, [
      t.eventTypeId ? (l(), c("div", $k, [
        f("div", xk, [
          f("p", Pk, w(t.eventTypeName || "Event"), 1),
          t.timezone ? (l(), c("div", Fk, [
            P[6] || (P[6] = f("span", { class: "fu-info__icon" }, "🌐", -1)),
            f("span", null, w(t.timezone), 1)
          ])) : A("", !0),
          t.description ? (l(), c("p", Bk, w(t.description), 1)) : A("", !0),
          f("div", {
            class: "fu-tz",
            ref_key: "tzRoot",
            ref: m
          }, [
            f("button", {
              class: "fu-tz__trigger",
              type: "button",
              onClick: y,
              "aria-expanded": s.value
            }, [
              P[7] || (P[7] = f("span", { class: "fu-tz__globe" }, "🌐", -1)),
              f("span", Lk, w(h.value), 1),
              f("span", {
                class: X(["fu-tz__caret", { "fu-tz__caret--open": s.value }])
              }, "▾", 2)
            ], 8, zk),
            Q(Ve, { name: "fu-tz-pop" }, {
              default: ce(() => [
                s.value ? (l(), c("div", Vk, [
                  f("div", Hk, [
                    f("span", jk, [
                      Q(ee(Rl), { size: 14 })
                    ]),
                    je(f("input", {
                      ref_key: "tzInput",
                      ref: v,
                      "onUpdate:modelValue": P[0] || (P[0] = (J) => u.value = J),
                      class: "fu-tz__search",
                      placeholder: "Search city or country…",
                      autocomplete: "off",
                      spellcheck: "false",
                      onKeydown: [
                        P[1] || (P[1] = $e(ue((J) => _(1), ["prevent"]), ["down"])),
                        P[2] || (P[2] = $e(ue((J) => _(-1), ["prevent"]), ["up"])),
                        P[3] || (P[3] = $e(ue((J) => b(g.value[d.value]), ["prevent"]), ["enter"])),
                        P[4] || (P[4] = $e((J) => s.value = !1, ["esc"]))
                      ]
                    }, null, 544), [
                      [tt, u.value]
                    ])
                  ]),
                  f("ul", {
                    class: "fu-tz__list",
                    ref_key: "tzList",
                    ref: p
                  }, [
                    g.value.length ? A("", !0) : (l(), c("li", Uk, "No results")),
                    (l(!0), c(L, null, oe(g.value, (J, te) => (l(), c("li", {
                      key: J.value,
                      class: X(["fu-tz__option", {
                        "fu-tz__option--active": J.value === r.value,
                        "fu-tz__option--hi": te === d.value
                      }]),
                      onMouseenter: (be) => d.value = te,
                      onMousedown: ue((be) => b(J), ["prevent"])
                    }, [
                      f("span", Yk, w(J.offset), 1),
                      f("span", Gk, w(J.city), 1),
                      f("span", qk, w(J.country), 1)
                    ], 42, Wk))), 128))
                  ], 512)
                ])) : A("", !0)
              ]),
              _: 1
            })
          ], 512),
          Q(Ve, { name: "fu-slide" }, {
            default: ce(() => [
              Y.value ? (l(), c("div", Kk, [
                P[10] || (P[10] = f("div", { class: "fu-selected__label" }, "Selected time", -1)),
                f("div", Qk, [
                  P[8] || (P[8] = f("span", null, "📅", -1)),
                  f("span", null, w(F.value), 1)
                ]),
                f("div", Zk, [
                  P[9] || (P[9] = f("span", null, "🕐", -1)),
                  f("span", null, w(B(Y.value)) + " – " + w(j(Y.value)), 1)
                ])
              ])) : A("", !0)
            ]),
            _: 1
          })
        ]),
        f("div", Jk, [
          (l(), Z(ee(bA), {
            key: H.value,
            ref_key: "calRef",
            ref: V,
            options: T.value,
            class: "fu-fc"
          }, null, 8, ["options"])),
          Q(Ve, { name: "fu-slide-right" }, {
            default: ce(() => [
              W.value ? (l(), c("div", Xk, [
                f("div", eS, [
                  f("p", tS, w($(W.value)), 1),
                  f("button", {
                    class: "fu-slots__close",
                    onClick: ue(R, ["stop"])
                  }, "✕")
                ]),
                t.slotsLoading ? (l(), c("div", nS, [...P[11] || (P[11] = [
                  f("span", { class: "fu-slots__spinner" }, null, -1)
                ])])) : t.slots && t.slots.length ? (l(), c("div", aS, [
                  (l(!0), c(L, null, oe(t.slots, (J) => (l(), c("div", {
                    key: J.id,
                    class: "fu-slot"
                  }, [
                    f("button", {
                      class: X(["fu-slot__time", { "fu-slot__time--chosen": Y.value?.id === J.id }]),
                      onClick: ue((te) => Y.value = J, ["stop"])
                    }, w(B(J)), 11, iS),
                    Q(Ve, { name: "fu-confirm-pop" }, {
                      default: ce(() => [
                        Y.value?.id === J.id ? (l(), c("button", {
                          key: 0,
                          class: X(["fu-slot__confirm", { "fu-slot__confirm--done": O.value?.id === J.id }]),
                          onClick: ue(D, ["stop"])
                        }, w(O.value?.id === J.id ? "✓ Selected" : "Confirm"), 3)) : A("", !0)
                      ]),
                      _: 2
                    }, 1024)
                  ]))), 128))
                ])) : (l(), c("p", oS, "No availability"))
              ])) : A("", !0)
            ]),
            _: 1
          })
        ])
      ])) : (l(), c("div", Rk, [...P[5] || (P[5] = [
        f("span", { class: "fu-empty__icon" }, "📅", -1),
        f("p", { class: "fu-empty__title" }, "No event type selected", -1),
        f("p", { class: "fu-empty__sub" }, "Select an event type from the settings panel", -1)
      ])]))
    ], 12, Ok));
  }
}), Us = /* @__PURE__ */ ae(rS, [["__scopeId", "data-v-54e3bb3e"]]), Ws = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Us
}, Symbol.toStringTag, { value: "Module" })), sS = {
  key: 0,
  class: "fu-embed-error-state"
}, lS = {
  key: 0,
  class: "fu-embed-success"
}, uS = { class: "fu-embed-success__sub" }, cS = {
  key: 1,
  class: "fu-panel"
}, dS = {
  key: 2,
  class: "fu-panel"
}, fS = { class: "fu-form-slot-bar" }, mS = { class: "fu-form-slot-bar__date" }, hS = { class: "fu-embed-questions" }, vS = {
  key: 0,
  class: "fu-embed-error"
}, pS = ["disabled"], gS = { key: 0 }, yS = {
  key: 1,
  class: "fu-embed-submit__spinner"
}, bS = /* @__PURE__ */ le({
  __name: "FuEmbedRenderer",
  props: {
    document: {}
  },
  emits: ["submit"],
  setup(t, { emit: e }) {
    const n = t, a = e;
    function i(N) {
      const z = [];
      for (const x of N?.pages ?? [])
        for (const W of x?.blocks ?? [])
          for (const Y of W?.columns ?? [])
            for (const O of Y?.widgets ?? []) z.push(O);
      return z;
    }
    const o = I(() => i(n.document)), r = I(
      () => o.value.find((N) => N.type === "scheduler")
    ), s = I(
      () => o.value.filter((N) => N.type === "question")
    ), u = M("idle"), d = sl(null);
    function m(N) {
      d.value = N.bookedSlot, u.value = s.value.length ? "form" : "submitted";
    }
    function v() {
      u.value = "idle", p.value = {}, y.value = /* @__PURE__ */ new Set();
    }
    const p = M({});
    function h(N, z) {
      p.value = { ...p.value, [N]: z.value }, y.value.delete(N);
    }
    function g(N) {
      const z = N.props.conditions ?? [];
      if (!z.length) return !0;
      const x = N.props.conditionLogic ?? "all", W = z.map((Y) => {
        const O = p.value[Y.sourceWidgetId];
        switch (Y.operator) {
          case "equals":
            return O === Y.value;
          case "not_equals":
            return O !== Y.value;
          case "contains":
            return Array.isArray(O) ? O.includes(Y.value) : String(O ?? "").includes(Y.value);
          default:
            return !0;
        }
      });
      return x === "all" ? W.every(Boolean) : W.some(Boolean);
    }
    const y = M(/* @__PURE__ */ new Set());
    function b() {
      const N = /* @__PURE__ */ new Set();
      for (const z of s.value) {
        if (!g(z) || !z.props.required) continue;
        const x = p.value[z.id];
        (x == null || x === "" || Array.isArray(x) && !x.length) && N.add(z.id);
      }
      return y.value = N, N.size === 0;
    }
    const _ = M(!1);
    async function C() {
      if (!(!d.value || !b())) {
        _.value = !0;
        try {
          a("submit", { slot: d.value, answers: p.value }), u.value = "submitted";
        } finally {
          _.value = !1;
        }
      }
    }
    const k = I(() => d.value?.date ? new Date(d.value.date).toLocaleString("en-GB", {
      weekday: "long",
      day: "numeric",
      month: "long",
      hour: "numeric",
      minute: "2-digit",
      hour12: !0
    }) : ""), E = I(() => {
      const N = n.document?.meta?.theme?.brandColor ?? "#4f46e5";
      return {
        "--embed-brand": N,
        "--embed-brand-light": N + "18",
        "--embed-brand-mid": N + "44"
      };
    });
    return (N, z) => (l(), c("div", {
      class: "fu-embed",
      style: ie(E.value)
    }, [
      r.value ? (l(), c(L, { key: 1 }, [
        u.value === "submitted" ? (l(), c("div", lS, [
          z[1] || (z[1] = f("div", { class: "fu-embed-success__icon" }, "✓", -1)),
          z[2] || (z[2] = f("p", { class: "fu-embed-success__title" }, "You're booked in", -1)),
          f("p", uS, w(k.value), 1)
        ])) : u.value === "idle" ? (l(), c("div", cS, [
          Q(Us, xt(r.value.props, {
            widgetId: r.value.id,
            onUpdate: m
          }), null, 16, ["widgetId"])
        ])) : u.value === "form" ? (l(), c("div", dS, [
          f("div", fS, [
            f("button", {
              class: "fu-form-slot-bar__back",
              onClick: v
            }, [...z[3] || (z[3] = [
              f("span", null, "←", -1),
              de(" Change time ", -1)
            ])]),
            f("span", mS, w(k.value), 1)
          ]),
          f("div", hS, [
            (l(!0), c(L, null, oe(s.value, (x) => (l(), c(L, {
              key: x.id
            }, [
              Q(lr, xt({ ref_for: !0 }, x.props, {
                widgetId: x.id,
                isVisible: g(x),
                class: { "fu-embed-question--error": y.value.has(x.id) },
                onUpdate: (W) => h(x.id, W)
              }), null, 16, ["widgetId", "isVisible", "class", "onUpdate"]),
              y.value.has(x.id) ? (l(), c("p", vS, "This field is required")) : A("", !0)
            ], 64))), 128))
          ]),
          f("button", {
            class: "fu-embed-submit",
            disabled: _.value,
            onClick: C
          }, [
            _.value ? (l(), c("span", yS)) : (l(), c("span", gS, "Confirm booking"))
          ], 8, pS)
        ])) : A("", !0)
      ], 64)) : (l(), c("div", sS, [...z[0] || (z[0] = [
        f("div", { class: "fu-embed-error-state__icon" }, "📅", -1),
        f("p", { class: "fu-embed-error-state__title" }, "No scheduler found", -1),
        f("p", { class: "fu-embed-error-state__sub" }, " This document doesn't contain a booking widget. ", -1)
      ])]))
    ], 4));
  }
}), _S = /* @__PURE__ */ ae(bS, [["__scopeId", "data-v-50151cce"]]), CS = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _S
}, Symbol.toStringTag, { value: "Module" })), wS = {
  key: 0,
  class: "service-card__image"
}, AS = ["src"], kS = { class: "service-card__content" }, SS = ["innerHTML"], TS = ["innerHTML"], ES = { key: 0 }, MS = { key: 1 }, NS = {
  key: 2,
  class: "service-card__footer"
}, DS = /* @__PURE__ */ le({
  __name: "ServiceCard",
  props: {
    service: {},
    layout: {},
    widgetDisplay: {},
    pricingStyle: {},
    itemStyle: {},
    selected: { type: Boolean },
    selectionMode: {},
    selectionRequired: { type: Boolean }
  },
  emits: ["toggle-select"],
  setup(t, { emit: e }) {
    const n = e, a = t, i = I(() => a.selectionMode !== "view"), o = I(() => i.value && a.widgetDisplay?.showServicePrice !== !1), r = I(() => {
      const m = String(a.service.unitPrice || "£").match(/[^0-9.,]/)?.[0] ?? "£", v = parseFloat(a.service.quantity) || 0, p = parseFloat(String(a.service.unitPrice || "").replace(/[^0-9.]/g, "")) || 0;
      return `${m}${(v * p).toLocaleString()}`;
    }), s = I(() => {
      const m = a.itemStyle ?? {};
      return {
        background: m.bgColor ?? "#fff",
        borderRadius: `${m.borderRadius ?? 12}px`,
        boxShadow: m.shadow ? `0 ${m.shadow / 2}px ${m.shadow}px rgba(0,0,0,0.12)` : void 0
      };
    }), u = I(() => ({
      fontFamily: a.pricingStyle?.fontFamily,
      fontSize: a.pricingStyle?.fontSize ? `${a.pricingStyle.fontSize}px` : void 0,
      color: a.pricingStyle?.color,
      fontWeight: a.pricingStyle?.bold ? "700" : void 0
    }));
    function d() {
      i.value && n("toggle-select", a.service._id);
    }
    return (m, v) => (l(), c("div", {
      class: X(["service-card", `service-card--${t.layout}`]),
      style: ie(s.value)
    }, [
      t.widgetDisplay.showImage !== !1 ? (l(), c("div", wS, [
        t.service.image ? (l(), c("img", {
          key: 0,
          src: t.service.image
        }, null, 8, AS)) : A("", !0)
      ])) : A("", !0),
      f("div", kS, [
        f("div", {
          class: "service-card__title",
          innerHTML: t.service.name
        }, null, 8, SS),
        t.widgetDisplay.showDescription !== !1 ? (l(), c("div", {
          key: 0,
          class: "service-card__desc",
          innerHTML: t.service.description
        }, null, 8, TS)) : A("", !0),
        t.widgetDisplay.showQuantity !== !1 || t.widgetDisplay.showUnitPrice !== !1 ? (l(), c("div", {
          key: 1,
          class: "service-card__pricing",
          style: ie(u.value)
        }, [
          t.widgetDisplay.showQuantity !== !1 ? (l(), c("span", ES, w(t.service.quantity) + " " + w(t.service.unit), 1)) : A("", !0),
          t.widgetDisplay.showUnitPrice !== !1 ? (l(), c("span", MS, w(t.service.unitPrice), 1)) : A("", !0)
        ], 4)) : A("", !0),
        t.widgetDisplay.showServicePrice !== !1 ? (l(), c("div", NS, [
          f("div", {
            class: "service-card__total",
            style: ie(u.value)
          }, w(r.value), 5),
          o.value ? (l(), c("button", {
            key: 0,
            class: X(["service-card__button", { "service-card__button--selected": t.selected }]),
            onClick: d
          }, w(t.selected ? t.service.selectedButtonText || "Selected" : t.service.buttonText || "Select"), 3)) : A("", !0)
        ])) : A("", !0)
      ])
    ], 6));
  }
}), Ys = /* @__PURE__ */ ae(DS, [["__scopeId", "data-v-636b3791"]]), IS = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Ys
}, Symbol.toStringTag, { value: "Module" })), OS = /* @__PURE__ */ le({
  __name: "ServiceRenderer",
  props: {
    widget: {}
  },
  emits: ["action"],
  setup(t, { emit: e }) {
    const n = e, a = t, i = I(() => a.widget.props.layout ?? "row"), o = I(() => a.widget.props.services ?? []), r = I(() => a.widget.props.widgetDisplay ?? {}), s = I(() => a.widget.props.pricingStyle ?? {}), u = I(() => a.widget.props.itemStyle ?? {}), d = I(() => a.widget.props.selectionMode ?? "view"), m = I(() => a.widget.props.selectionRequired ?? !1), v = I(() => a.widget.props.selectedServiceIds ?? []);
    function p(h) {
      if (console.log("[handleSelect] clicked service id:", h), console.log(" selectionMode:", d.value), console.log(" current selectedServiceIds:", v.value), d.value === "view") {
        console.log("⛔ view mode — selection blocked");
        return;
      }
      let g = [...v.value];
      d.value === "single" ? (console.log(" single-select mode"), g.includes(h) ? (console.log("🔁 already selected → clearing selection"), g = []) : (console.log("➕ selecting only this item"), g = [h])) : (console.log(" multiple-select mode"), g.includes(h) ? (console.log("➖ removing from selection"), g = g.filter((y) => y !== h)) : (console.log("➕ adding to selection"), g = [...g, h])), console.log("final selection:", g), a.widget.props.selectedServiceIds = g, n("action", {
        type: "service-select",
        selectedServiceIds: g
      });
    }
    return (h, g) => (l(), c("div", {
      class: X(["service-renderer", `service-renderer--${i.value}`])
    }, [
      (l(!0), c(L, null, oe(o.value, (y) => (l(), Z(Ys, {
        key: y._id,
        service: y,
        layout: i.value,
        widgetDisplay: r.value,
        pricingStyle: s.value,
        itemStyle: u.value,
        selected: v.value.includes(y._id),
        selectionMode: d.value,
        selectionRequired: m.value,
        onToggleSelect: p
      }, null, 8, ["service", "layout", "widgetDisplay", "pricingStyle", "itemStyle", "selected", "selectionMode", "selectionRequired"]))), 128))
    ], 2));
  }
}), RS = /* @__PURE__ */ ae(OS, [["__scopeId", "data-v-d67ca331"]]), Gs = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: RS
}, Symbol.toStringTag, { value: "Module" })), $S = ["innerHTML"], xS = /* @__PURE__ */ le({
  __name: "TextRenderer",
  props: {
    content: {}
  },
  setup(t) {
    return (e, n) => (l(), c("div", {
      class: "fu-text-widget",
      innerHTML: t.content
    }, null, 8, $S));
  }
}), PS = /* @__PURE__ */ ae(xS, [["__scopeId", "data-v-25719c05"]]), qs = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: PS
}, Symbol.toStringTag, { value: "Module" })), FS = {
  key: 0,
  class: "fu-empty-state"
}, BS = ["src"], zS = /* @__PURE__ */ le({
  __name: "FuVideoRenderer",
  props: {
    src: {},
    aspectRatio: {},
    contentWidth: {},
    borderRadius: {},
    backgroundColor: {}
  },
  setup(t) {
    const e = t, n = I(() => {
      if (!e.src) return "";
      let o = e.src.trim();
      return /^https?:\/\//.test(o) || (o = "https://" + o), o.includes("youtu.be/") ? `https://www.youtube.com/embed/${o.split("youtu.be/")[1]?.split("?")[0]}` : o.includes("youtube.com/watch?v=") ? `https://www.youtube.com/embed/${new URL(o).searchParams.get("v")}` : o.includes("vimeo.com/") ? `https://player.vimeo.com/video/${o.split("vimeo.com/")[1]?.split("?")[0]}` : o.includes("loom.com/share/") ? `https://www.loom.com/embed/${o.split("loom.com/share/")[1]?.split("?")[0]}` : o;
    }), a = I(() => ({
      backgroundColor: n.value ? "transparent" : e.backgroundColor || "#f5f7ff",
      borderRadius: `${e.borderRadius ?? 8}px`,
      border: "1px solid #e5e7eb",
      width: e.contentWidth === "sm" ? "60%" : e.contentWidth === "md" ? "80%" : (e.contentWidth === "lg", "100%"),
      margin: "0 auto",
      overflow: "hidden"
    })), i = I(() => {
      const o = e.aspectRatio || "16:9", [r, s] = o.split(":").map(Number);
      return {
        position: "relative",
        width: "100%",
        paddingTop: `${r && s ? s / r * 100 : 56.25}%`
      };
    });
    return (o, r) => (l(), c("div", {
      class: "fu-video-widget",
      style: ie(a.value)
    }, [
      n.value ? (l(), c("div", {
        key: 1,
        class: "fu-video-frame",
        style: ie(i.value)
      }, [
        f("iframe", {
          src: n.value,
          frameborder: "0",
          allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen",
          allowfullscreen: ""
        }, null, 8, BS)
      ], 4)) : (l(), c("div", FS, [
        Q(ee(Po), { size: 28 }),
        r[0] || (r[0] = f("span", null, "No video available", -1))
      ]))
    ], 4));
  }
}), LS = /* @__PURE__ */ ae(zS, [["__scopeId", "data-v-f6e4e3fe"]]), Ks = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: LS
}, Symbol.toStringTag, { value: "Module" })), VS = {
  key: 0,
  class: "fu-filter-dropdown__header"
}, HS = { class: "fu-filter-dropdown__title" }, jS = { class: "fu-filter-dropdown__body" }, US = { class: "fu-filter-dropdown__footer" }, WS = /* @__PURE__ */ le({
  __name: "FusionFilterDropdown",
  props: {
    align: { default: "left" },
    isOpen: { type: Boolean, default: void 0 },
    payload: {},
    title: { default: "" },
    width: { default: 280 },
    maxWidth: { default: 360 }
  },
  emits: ["apply", "cancel", "open", "close", "update:isOpen"],
  setup(t, { emit: e }) {
    const n = t, a = e, i = M(!1), o = M(null), r = M(null), s = M({
      top: "0px",
      left: "0px"
    }), u = I(() => ({
      width: typeof n.width == "number" ? `${n.width}px` : n.width,
      maxWidth: typeof n.maxWidth == "number" ? `${n.maxWidth}px` : n.maxWidth
    }));
    he(
      () => n.isOpen,
      (b) => {
        typeof b == "boolean" && (i.value = b, b ? (a("open"), ge(h)) : a("close"));
      }
    );
    function d(b) {
      b?.stopPropagation();
      const _ = !i.value;
      _ && document.dispatchEvent(new CustomEvent("close-all-dropdowns")), i.value = _, a("update:isOpen", _), _ ? (a("open"), ge(h)) : a("close");
    }
    function m() {
      a("apply", n.payload), p();
    }
    function v() {
      a("cancel"), p();
    }
    function p() {
      i.value && (i.value = !1, a("update:isOpen", !1), a("close"));
    }
    function h() {
      if (!o.value || !r.value) return;
      const b = o.value.getBoundingClientRect(), _ = b.bottom + window.scrollY + 8;
      let C = b.left + window.scrollX;
      n.align === "center" && (C += b.width / 2 - r.value.offsetWidth / 2), n.align === "right" && (C = b.right - r.value.offsetWidth + window.scrollX), s.value = {
        position: "absolute",
        top: `${_}px`,
        left: `${C}px`,
        zIndex: 2e3
      };
    }
    function g(b) {
      i.value && o.value && !o.value.contains(b.target) && r.value && !r.value.contains(b.target) && p();
    }
    function y() {
      p();
    }
    return we(() => {
    }), Ae(() => {
      document.removeEventListener("click", g), document.removeEventListener("close-all-dropdowns", y);
    }), (b, _) => (l(), c("div", {
      class: "fu-filter-dropdown",
      ref_key: "dropdown",
      ref: o
    }, [
      f("div", {
        class: "fu-filter-dropdown__trigger",
        onClick: d
      }, [
        se(b.$slots, "trigger", {}, void 0, !0)
      ]),
      (l(), Z(Ee, { to: "body" }, [
        Q(Ve, { name: "fade" }, {
          default: ce(() => [
            i.value ? (l(), c("div", {
              key: 0,
              ref_key: "menuRef",
              ref: r,
              class: X(["fu-filter-dropdown__menu", [`fu-filter-dropdown__menu--${t.align}`]]),
              style: ie([s.value, u.value])
            }, [
              t.title ? (l(), c("div", VS, [
                f("span", HS, w(t.title), 1),
                Q(Pe, {
                  size: "sm",
                  variant: "subtle",
                  icon: ee(Xe),
                  onClick: p
                }, null, 8, ["icon"])
              ])) : A("", !0),
              f("div", jS, [
                se(b.$slots, "content", {}, void 0, !0)
              ]),
              f("div", US, [
                se(b.$slots, "footer", {}, () => [
                  Q(Se, {
                    variant: "subtle",
                    size: "sm",
                    text: "Cancel",
                    onClick: v
                  }),
                  Q(Se, {
                    variant: "solid",
                    size: "sm",
                    text: "Apply",
                    onClick: m
                  })
                ], !0)
              ])
            ], 6)) : A("", !0)
          ]),
          _: 3
        })
      ]))
    ], 512));
  }
}), YS = /* @__PURE__ */ ae(WS, [["__scopeId", "data-v-6439f409"]]), GS = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: YS
}, Symbol.toStringTag, { value: "Module" })), qS = {}, KS = { class: "fu-smart-header" };
function QS(t, e) {
  return l(), c("header", KS, [
    se(t.$slots, "default", {}, void 0, !0)
  ]);
}
const ZS = /* @__PURE__ */ ae(qS, [["render", QS], ["__scopeId", "data-v-317a0cd5"]]), JS = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: ZS
}, Symbol.toStringTag, { value: "Module" })), XS = { class: "fu-trash-icon" }, eT = /* @__PURE__ */ le({
  __name: "FusionTrashIcon",
  setup(t) {
    return (e, n) => (l(), c("div", XS, [
      Q(ee(Ia), { size: 18 })
    ]));
  }
}), tT = /* @__PURE__ */ ae(eT, [["__scopeId", "data-v-7cafc569"]]), nT = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: tT
}, Symbol.toStringTag, { value: "Module" })), aT = { class: "fu-activity-item" }, iT = { class: "fu-activity-icon" }, oT = { class: "fu-activity-content" }, rT = { class: "fu-activity-header" }, sT = { class: "fu-activity-title" }, lT = { class: "fu-activity-status" }, uT = { class: "fu-activity-text" }, cT = { class: "fu-activity-subtitle" }, dT = { class: "fu-activity-footer" }, fT = { class: "fu-activity-timestamp" }, mT = { class: "fu-activity-user" }, hT = /* @__PURE__ */ le({
  __name: "FusionActivityItem",
  props: {
    icon: {},
    title: {},
    fileName: {},
    timestamp: {},
    userName: {},
    userAvatar: { default: null },
    clickable: { type: Boolean, default: !0 }
  },
  emits: ["click"],
  setup(t, { emit: e }) {
    const n = t, a = e;
    function i() {
      n.clickable && a("click");
    }
    return (o, r) => (l(), c("div", aT, [
      f("div", iT, [
        (l(), Z(me(t.icon), {
          class: "fu-activity-icon__svg",
          size: 18
        }))
      ]),
      r[0] || (r[0] = f("div", { class: "fu-activity-line" }, null, -1)),
      f("div", oT, [
        f("div", {
          class: X(["fu-activity-card", { "is-clickable": t.clickable }]),
          onClick: i
        }, [
          f("div", rT, [
            f("div", sT, [
              f("span", lT, [
                Q(ee(Ro), {
                  class: "fu-activity-status__icon",
                  size: 16
                })
              ]),
              f("p", uT, w(t.title), 1)
            ])
          ]),
          f("p", cT, w(t.fileName), 1),
          f("div", dT, [
            f("span", fT, w(t.timestamp), 1),
            f("div", mT, [
              Q(qe, {
                src: t.userAvatar || void 0,
                name: t.userName,
                alt: t.userName,
                size: "xs",
                "show-status": !1
              }, null, 8, ["src", "name", "alt"])
            ])
          ])
        ], 2)
      ])
    ]));
  }
}), vT = /* @__PURE__ */ ae(hT, [["__scopeId", "data-v-3de71024"]]), pT = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: vT
}, Symbol.toStringTag, { value: "Module" })), gT = { class: "fu-attachment-left flex flex--gap-md flex--align-center" }, yT = { class: "fu-attachment-preview" }, bT = ["src", "alt"], _T = { class: "fu-attachment-info flex flex--column" }, CT = { class: "fu-attachment-title" }, wT = { class: "fu-attachment-meta" }, AT = { class: "fu-attachment-right flex flex--align-center flex--gap-md" }, kT = { class: "flex flex--column flex--align-center" }, ST = { class: "fu-attachment-time" }, TT = /* @__PURE__ */ le({
  __name: "FusionAttachment",
  props: {
    id: {},
    fileName: {},
    fileUrl: {},
    fileSize: { default: "" },
    timestamp: {},
    userName: {},
    userAvatar: { default: null },
    actions: { default: () => [] }
  },
  emits: ["click"],
  setup(t, { emit: e }) {
    const n = t, a = e;
    function i() {
      a("click", n.id);
    }
    const o = I(() => /\.(png|jpe?g|gif|webp|svg)$/i.test(n.fileName)), r = I(() => /\.(mp4|mov|avi|webm)$/i.test(n.fileName));
    return (s, u) => (l(), c("div", {
      class: "fu-attachment-item",
      role: "button",
      tabindex: "0",
      onClick: i,
      onKeypress: $e(i, ["enter"])
    }, [
      f("div", gT, [
        f("div", yT, [
          o.value ? (l(), c("img", {
            key: 0,
            src: t.fileUrl,
            alt: t.fileName,
            class: "fu-attachment-thumbnail"
          }, null, 8, bT)) : r.value ? (l(), Z(ee(Po), {
            key: 1,
            class: "fu-attachment-icon",
            size: 20
          })) : (l(), Z(ee($o), {
            key: 2,
            class: "fu-attachment-icon",
            size: 20
          }))
        ]),
        f("div", _T, [
          f("span", CT, w(t.fileName), 1),
          f("span", wT, w(t.fileSize), 1)
        ])
      ]),
      f("div", AT, [
        f("div", kT, [
          Q(qe, {
            src: t.userAvatar || void 0,
            name: t.userName,
            alt: t.userName,
            size: "xs",
            "show-status": !1
          }, null, 8, ["src", "name", "alt"]),
          f("span", ST, w(t.timestamp), 1)
        ]),
        t.actions?.length ? (l(), c("div", {
          key: 0,
          class: "fu-attachment-actions",
          onClick: u[0] || (u[0] = ue(() => {
          }, ["stop"]))
        }, [
          Q(Fn, {
            actions: t.actions,
            align: "right"
          }, {
            trigger: ce(() => [
              Q(Pe, {
                icon: ee(Da),
                variant: "ghost",
                size: "sm"
              }, null, 8, ["icon"])
            ]),
            _: 1
          }, 8, ["actions"])
        ])) : A("", !0)
      ])
    ], 32));
  }
}), ET = /* @__PURE__ */ ae(TT, [["__scopeId", "data-v-c5d821de"]]), MT = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: ET
}, Symbol.toStringTag, { value: "Module" })), NT = { class: "fu-note-header" }, DT = { class: "fu-note-title" }, IT = ["innerHTML"], OT = { class: "fu-note-actions" }, RT = { class: "fu-note-footer" }, $T = { class: "fu-note-owner" }, xT = { class: "fu-note-date" }, PT = /* @__PURE__ */ le({
  __name: "FusionNoteCard",
  props: {
    id: {},
    title: {},
    content: { default: "" },
    ownerName: {},
    ownerAvatar: { default: null },
    date: {},
    actions: { default: () => [] }
  },
  emits: ["open"],
  setup(t) {
    const e = M(!1);
    return (n, a) => (l(), c("div", {
      class: "fu-note-card",
      onMouseenter: a[0] || (a[0] = (i) => e.value = !0),
      onMouseleave: a[1] || (a[1] = (i) => e.value = !1),
      onClick: a[2] || (a[2] = (i) => n.$emit("open", t.id))
    }, [
      f("div", NT, [
        f("div", DT, [
          f("h4", null, w(t.title), 1),
          t.content ? (l(), c("div", {
            key: 0,
            class: "fu-note-content",
            innerHTML: t.content
          }, null, 8, IT)) : A("", !0)
        ]),
        f("div", OT, [
          Q(Fn, {
            actions: t.actions,
            align: "right"
          }, {
            trigger: ce(() => [
              Q(Pe, {
                icon: ee(Da),
                variant: "ghost",
                size: "sm",
                class: "fu-action-trigger"
              }, null, 8, ["icon"])
            ]),
            _: 1
          }, 8, ["actions"])
        ])
      ]),
      f("div", RT, [
        f("div", $T, [
          Q(qe, {
            src: t.ownerAvatar || void 0,
            name: t.ownerName,
            alt: t.ownerName,
            size: "xs",
            "show-status": !1
          }, null, 8, ["src", "name", "alt"])
        ]),
        f("span", xT, w(t.date), 1)
      ])
    ], 32));
  }
}), FT = /* @__PURE__ */ ae(PT, [["__scopeId", "data-v-5f4f6caa"]]), BT = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: FT
}, Symbol.toStringTag, { value: "Module" })), zT = { class: "fu-task-list" }, LT = { class: "fu-task-left flex flex--gap-xl flex--align-center" }, VT = { class: "flex flex--column flex--gap-lg w-100" }, HT = { class: "fu-task-title" }, jT = { class: "fu-task-meta" }, UT = { class: "fu-task-priority" }, WT = { class: "fu-priority-label" }, YT = { class: "fu-task-owner" }, GT = { class: "fu-task-actions" }, qT = /* @__PURE__ */ le({
  __name: "FusionTaskItem",
  props: {
    id: {},
    title: {},
    ownerName: {},
    ownerAvatar: { default: null },
    priorityLabel: {},
    priorityColor: { default: "#ccc" }
  },
  emits: ["edit", "delete"],
  setup(t, { emit: e }) {
    const n = t, a = e, i = I(() => [
      {
        label: "Edit Task",
        icon: xo,
        onClick: () => a("edit", n.id)
      },
      {
        label: "Delete Task",
        icon: Ia,
        onClick: () => a("delete", n.id)
      }
    ]);
    return (o, r) => (l(), c("div", zT, [
      f("div", LT, [
        f("div", VT, [
          f("div", HT, w(t.title), 1),
          f("div", jT, [
            f("div", UT, [
              f("span", {
                class: "fu-priority-dot",
                style: ie({ backgroundColor: t.priorityColor || "#999" })
              }, null, 4),
              f("span", WT, w(t.priorityLabel), 1)
            ]),
            r[0] || (r[0] = f("span", { class: "fu-dot" }, null, -1)),
            f("div", YT, [
              Q(qe, {
                src: t.ownerAvatar || void 0,
                name: t.ownerName,
                alt: t.ownerName,
                size: "xs",
                "show-status": !1
              }, null, 8, ["src", "name", "alt"])
            ])
          ])
        ])
      ]),
      f("div", GT, [
        Q(Fn, {
          actions: i.value,
          content: !1,
          align: "right"
        }, {
          trigger: ce(() => [
            Q(Pe, {
              icon: ee(Da),
              variant: "subtle",
              size: "sm"
            }, null, 8, ["icon"])
          ]),
          _: 1
        }, 8, ["actions"])
      ])
    ]));
  }
}), KT = /* @__PURE__ */ ae(qT, [["__scopeId", "data-v-36cc95a2"]]), QT = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: KT
}, Symbol.toStringTag, { value: "Module" })), ZT = { class: "fu-kanban scrollbar__control customScrollBar" }, JT = ["draggable", "onDragstart", "onDrop"], XT = { class: "fu-kanban__column-header" }, eE = { class: "flex flex--center flex--space" }, tE = { class: "fu-kanban__column-title" }, nE = ["title"], aE = { class: "fu-kanban__header-right" }, iE = ["title", "onClick"], oE = { class: "flex flex--center flex--gap-sm" }, rE = { class: "fu-kanban__count" }, sE = {
  key: 0,
  class: "fu-kanban__edit-body"
}, lE = ["onDragover", "onDrop"], uE = ["onDragstart", "onDrop", "onClick"], cE = { class: "fu-kanban__card-header" }, dE = { class: "fu-kanban__card-body" }, fE = {
  key: 0,
  class: "fu-kanban__empty"
}, mE = ["onClick"], hE = /* @__PURE__ */ le({
  __name: "Kanban",
  props: {
    columns: {},
    editMode: { type: Boolean },
    addItemButtonText: {},
    addColumnButtonText: {},
    noItemtext: {}
  },
  emits: ["update:columns", "update:items", "card-click", "add-item"],
  setup(t, { emit: e }) {
    const n = t, a = e, i = n.addItemButtonText || "+ Add Item", o = n.addColumnButtonText || "+ Add Stage", r = M(JSON.parse(JSON.stringify(n.columns || []))), s = M(null), u = M(null), d = M(null);
    he(
      () => n.columns,
      (k) => {
        r.value = JSON.parse(JSON.stringify(k));
      },
      { deep: !0 }
    );
    function m(k, E) {
      s.value = { fromColumnId: k, item: E };
    }
    function v(k) {
      d.value = k;
    }
    function p() {
      d.value = null;
    }
    function h(k, E) {
      const N = s.value;
      if (!N) return;
      const z = r.value.find((W) => W.id === N.fromColumnId), x = r.value.find((W) => W.id === k);
      !z || !x || (z.items = z.items.filter((W) => W.id !== N.item.id), E === null ? x.items.push(N.item) : x.items.splice(E, 0, N.item), a("update:items", r.value), s.value = null, d.value = null);
    }
    function g(k) {
      n.editMode && (u.value = k);
    }
    function y(k) {
      if (!n.editMode) return;
      const E = u.value;
      if (E === null || E === k) return;
      const N = [...r.value], [z] = N.splice(E, 1);
      N.splice(k, 0, z), r.value = N.map((x, W) => ({ ...x, position: W + 1 })), a("update:columns", r.value), u.value = null;
    }
    function b() {
      const k = {
        id: `col-${r.value.length + 1}`,
        title: `Stage ${r.value.length + 1}`,
        color: "#8B5CF6",
        position: r.value.length + 1,
        items: []
      };
      r.value.push(k), a("update:columns", r.value);
    }
    function _(k, E) {
      a("add-item", { column: k, index: E });
    }
    function C(k, E) {
      a("card-click", { id: k.id, item: k, column: E });
    }
    return (k, E) => (l(), c("div", ZT, [
      f("div", {
        class: "fu-kanban__columns",
        onDragover: E[1] || (E[1] = ue(() => {
        }, ["prevent"]))
      }, [
        (l(!0), c(L, null, oe(r.value, (N, z) => (l(), c("div", {
          key: N.id,
          class: X(["fu-kanban__column", { "fu-kanban__column--drag": t.editMode }]),
          draggable: t.editMode,
          onDragstart: (x) => g(z),
          onDrop: (x) => y(z),
          onDragover: E[0] || (E[0] = ue(() => {
          }, ["prevent"]))
        }, [
          f("header", XT, [
            f("div", eE, [
              f("div", tE, [
                f("span", {
                  class: "fu-kanban__dot",
                  style: ie({ background: N.color || "#9ca3af" })
                }, null, 4),
                f("span", {
                  class: "fu-kanban__column-name",
                  title: N.title
                }, w(N.title), 9, nE)
              ]),
              f("div", aE, [
                f("button", {
                  class: "fu-kanban__add-item-btn",
                  title: ee(i),
                  onClick: ue((x) => _(N, z), ["stop"])
                }, " + ", 8, iE)
              ])
            ]),
            f("div", oE, [
              se(k.$slots, "column-header", {}, void 0, !0),
              f("span", rE, w(N.items.length), 1)
            ])
          ]),
          t.editMode ? (l(), c("div", sE, [
            se(k.$slots, "edit-column", {
              column: N,
              index: z
            }, void 0, !0)
          ])) : (l(), c(L, { key: 1 }, [
            f("div", {
              class: X(["fu-kanban__cards scrollbar__control customScrollBar", { "fu-kanban__cards--hover": d.value === N.id }]),
              onDragover: ue((x) => v(N.id), ["prevent"]),
              onDragleave: p,
              onDrop: (x) => h(N.id, null)
            }, [
              (l(!0), c(L, null, oe(N.items, (x, W) => (l(), c("div", {
                key: x.id,
                class: "fu-kanban__card",
                draggable: "true",
                onDragstart: (Y) => m(N.id, x),
                onDrop: (Y) => h(N.id, W),
                onClick: (Y) => C(x, N)
              }, [
                f("header", cE, [
                  f("strong", null, w(x.title), 1)
                ]),
                f("div", dE, [
                  se(k.$slots, "card-body", {
                    item: x,
                    column: N
                  }, void 0, !0)
                ])
              ], 40, uE))), 128)),
              N.items.length ? A("", !0) : (l(), c("div", fE, w(t.noItemtext), 1))
            ], 42, lE),
            f("button", {
              class: "fu-kanban__add-card",
              onClick: (x) => _(N, z)
            }, w(ee(i)), 9, mE)
          ], 64))
        ], 42, JT))), 128)),
        t.editMode ? (l(), c("div", {
          key: 0,
          class: "fu-kanban__add-column",
          onClick: b
        }, w(ee(o)), 1)) : A("", !0)
      ], 32)
    ]));
  }
}), vE = /* @__PURE__ */ ae(hE, [["__scopeId", "data-v-11abb07b"]]), pE = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: vE
}, Symbol.toStringTag, { value: "Module" })), gE = { class: "app-container" }, yE = { class: "app-shell" }, bE = { class: "fu-topbar" }, _E = { class: "fu-topbar-l" }, CE = { class: "fu-topbar-c" }, wE = { class: "fu-topbar-r" }, AE = { class: "fu-main-area" }, kE = { class: "fu-sidebar" }, SE = { class: "fu-menu" }, TE = { class: "ai-panel-body" }, EE = { class: "ai-header-actions" }, ME = { class: "ai-content" }, ma = 991, Eo = "fu-app-ai-panel", Mo = 340, NE = 500, DE = {
  __name: "AppShell",
  props: {
    listenToToggleEvent: { type: Boolean, default: !0 }
  },
  setup(t) {
    const e = M(!1), n = M(!0), a = M(!1), i = M(340), o = M(!1), r = M(typeof window < "u" ? window.innerWidth : 1200);
    let s = !1;
    const u = M(!1), d = t;
    function m() {
      r.value <= ma ? (e.value = !e.value, n.value = !0) : n.value = !n.value;
    }
    function v() {
      if (r.value <= ma) {
        u.value = !0, a.value = !1, C();
        return;
      }
      a.value = !a.value, C(), a.value && window.dispatchEvent(new Event("open-ai"));
    }
    function p() {
      i.value = o.value ? Mo : NE, o.value = !o.value, C();
    }
    function h(E) {
      s = !0, document.body.style.cursor = "col-resize", window.addEventListener("mousemove", g), window.addEventListener("mouseup", y);
    }
    function g(E) {
      if (!s) return;
      const N = window.innerWidth - E.clientX;
      N > 280 && N < 600 && (i.value = N, C());
    }
    function y() {
      s = !1, document.body.style.cursor = "default", window.removeEventListener("mousemove", g), window.removeEventListener("mouseup", y);
    }
    function b() {
      r.value = window.innerWidth;
    }
    function _() {
      r.value <= ma && e.value && (e.value = !1);
    }
    function C() {
      const E = {
        open: a.value,
        width: i.value,
        maximized: o.value
      };
      localStorage.setItem(Eo, JSON.stringify(E));
    }
    function k() {
      const E = localStorage.getItem(Eo);
      if (E)
        try {
          const { open: N, width: z, maximized: x } = JSON.parse(E);
          a.value = !!N, i.value = z || Mo, o.value = !!x;
        } catch (N) {
          console.warn("Failed to restore AI panel state:", N);
        }
    }
    return we(() => {
      if (k(), window.addEventListener("resize", b), d.listenToToggleEvent && window.addEventListener("toggle-ai", v), a.value) {
        const E = () => {
          window.removeEventListener("tabs-ready", E), ge(() => {
            a.value = !0, window.dispatchEvent(new Event("open-ai"));
          });
        };
        window.addEventListener("tabs-ready", E);
      }
    }), (E, N) => {
      const z = Oo("FusionActionButton");
      return l(), c("div", gE, [
        f("div", yE, [
          f("div", bE, [
            f("div", _E, [
              f("button", {
                class: "fu-menu-toggle",
                onClick: m
              }, [...N[2] || (N[2] = [
                f("svg", {
                  width: "24",
                  height: "24",
                  viewBox: "0 0 24 24",
                  fill: "none",
                  xmlns: "http://www.w3.org/2000/svg"
                }, [
                  f("path", {
                    d: "M21 3.30758C22.6569 3.30758 24 4.65072 24 6.30758V20.9939C24 22.6507 22.6569 23.9939 21 23.9939H11.4534C11.4356 23.9939 11.4213 23.9795 11.4213 23.9618C11.4213 23.9454 11.4337 23.9317 11.45 23.9298C16.2789 23.3868 20.0467 19.2815 20.0467 14.3086C20.0467 11.336 18.7127 8.57663 16.3919 6.72481C16.1055 6.49913 15.6906 6.54739 15.4636 6.83277L14.2226 8.39329C13.9975 8.67631 14.0441 9.08814 14.3268 9.31371C15.8619 10.532 16.739 12.3533 16.739 14.3086C16.739 17.4578 14.4366 20.0893 11.4213 20.5949C11.0742 20.6559 10.7208 20.6863 10.3554 20.6863H3C1.34315 20.6863 0 19.3431 0 17.6863V3C0 1.34315 1.34315 3.14256e-06 3 3.14256e-06H11.2752C11.3559 3.14256e-06 11.4213 0.0654245 11.4213 0.146126C11.4213 0.213947 11.3744 0.272792 11.3085 0.289108C7.08918 1.33486 3.95326 5.15701 3.95326 9.69139C3.95326 12.6578 5.28734 15.4234 7.61423 17.2691C7.89608 17.4972 8.30985 17.4518 8.53555 17.168L9.77497 15.6096C10.0018 15.3243 9.95638 14.9095 9.67311 14.6802C8.14413 13.4619 7.26097 11.6467 7.26097 9.69139C7.26097 6.95026 8.99086 4.6111 11.4213 3.70954C12.1157 3.44765 12.8649 3.30758 13.6446 3.30758H21Z",
                    fill: "#FFD37B"
                  })
                ], -1)
              ])]),
              se(E.$slots, "brand-logo")
            ]),
            f("div", CE, [
              se(E.$slots, "header")
            ]),
            f("div", wE, [
              se(E.$slots, "header-right")
            ])
          ]),
          f("div", AE, [
            f("div", {
              class: X(["fu-nav-panel", { open: e.value }])
            }, [
              f("section", kE, [
                se(E.$slots, "modules-sidebar")
              ]),
              je(f("section", SE, [
                se(E.$slots, "module-menu")
              ], 512), [
                [Ea, n.value]
              ])
            ], 2),
            f("div", {
              class: X(["fu-body-area", { "ai-open": a.value }])
            }, [
              f("div", {
                onClick: _,
                class: "fu-body-slot"
              }, [
                se(E.$slots, "default")
              ]),
              Q(Ve, { name: "slide-left" }, {
                default: ce(() => [
                  a.value ? (l(), c("div", {
                    key: 0,
                    class: "ai-panel",
                    style: ie({ width: i.value + "px" })
                  }, [
                    f("div", {
                      class: "ai-resize-handle",
                      onMousedown: h
                    }, null, 32),
                    f("div", TE, [
                      f("header", null, [
                        N[3] || (N[3] = f("h3", null, "Àdisa", -1)),
                        f("div", EE, [
                          Q(z, {
                            icon: o.value ? ee(Il) : ee(Dl),
                            variant: "ghost",
                            size: "sm",
                            onClick: p
                          }, null, 8, ["icon"]),
                          Q(z, {
                            icon: ee(Xe),
                            variant: "ghost",
                            size: "sm",
                            onClick: v
                          }, null, 8, ["icon"])
                        ])
                      ]),
                      f("div", ME, [
                        se(E.$slots, "ai-content")
                      ])
                    ])
                  ], 4)) : A("", !0)
                ]),
                _: 3
              })
            ], 2)
          ])
        ]),
        u.value ? (l(), Z(en, {
          key: 0,
          isVisible: u.value,
          title: "Adisa",
          size: "sm",
          onClose: N[0] || (N[0] = (x) => u.value = !1),
          onCancel: N[1] || (N[1] = (x) => u.value = !1)
        }, {
          default: ce(() => [...N[4] || (N[4] = [
            de(" Downlaod Skkido to use Adisa on Mobile ", -1)
          ])]),
          _: 1
        }, 8, ["isVisible"])) : A("", !0)
      ]);
    };
  }
}, IE = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: DE
}, Symbol.toStringTag, { value: "Module" })), OE = { key: 0 }, RE = {
  key: 0,
  class: "fu-listview__th fu-listview__th--checkbox"
}, $E = {
  key: 0,
  class: "fu-skeleton-cell fu-skeleton-cell--checkbox"
}, xE = ["draggable", "onDragstart", "onDragover", "onDragleave", "onDrop"], PE = {
  key: 0,
  class: "fu-listview__drag-handle",
  title: "Drag to reorder"
}, FE = {
  key: 1,
  class: "fu-skeleton-cell fu-skeleton-cell--header"
}, BE = ["role", "tabindex", "onClick", "onKeydown"], zE = { class: "fu-listview__th-label" }, LE = {
  key: 1,
  class: "fu-listview__sort-indicator"
}, VE = ["onMousedown"], HE = { key: 1 }, jE = {
  key: 0,
  class: "fu-listview__td fu-listview__td--checkbox"
}, UE = { key: 2 }, WE = ["onClick"], YE = { class: "fu-listview__cell" }, GE = /* @__PURE__ */ le({
  __name: "FusionListView",
  props: {
    columns: {},
    rows: {},
    rowKey: {},
    showHeader: { type: Boolean },
    loading: { type: Boolean },
    skeletonRows: {},
    editMode: { type: Boolean },
    sort: {},
    options: {}
  },
  emits: ["row-selected", "row-clicked", "sort-change", "columns-reordered"],
  setup(t, { emit: e }) {
    const n = t, a = e, i = [
      ["55%", "70%", "40%", "65%", "50%"],
      ["75%", "45%", "80%", "55%", "60%"],
      ["60%", "80%", "50%", "70%", "45%"],
      ["45%", "65%", "75%", "40%", "70%"],
      ["70%", "50%", "60%", "80%", "55%"]
    ];
    function o(S, P) {
      const J = u.value.findIndex((te) => te.key === P) % 5;
      return i[(S - 1) % i.length][J];
    }
    const r = I(() => n.skeletonRows ?? 8), s = M({}), u = I(() => n.columns.map((S, P) => ({
      ...S,
      width: s.value[S.key] || S.width || "150px",
      textAlign: S.textAlign || "justify",
      sortable: !!S.sortable,
      visible: S.visible !== !1,
      orderPosition: S.orderPosition ?? P
    })).filter((S) => S.visible).sort((S, P) => S.orderPosition - P.orderPosition)), d = M(!1), m = M(null), v = M(null), p = M(null), h = M("asc"), g = I(() => !!n.sort), y = I(
      () => g.value ? n.sort?.key ?? null : p.value
    ), b = I(
      () => g.value ? n.sort?.direction ?? "asc" : h.value
    ), _ = n.showHeader ?? !0, C = () => n.options?.sortable !== !1;
    function k(S) {
      return n.options?.selectable ? n.options?.isRowSelectable ? n.options.isRowSelectable(S) : !0 : !1;
    }
    function E() {
      const S = n.rows.filter((P) => P.__selected && k(P));
      a("row-selected", S);
    }
    he(d, (S) => {
      n.options?.selectable && (n.rows.forEach((P) => {
        k(P) && (P.__selected = S);
      }), E());
    });
    function N(S) {
      if (n.editMode || !C() || !S.sortable) return;
      const P = y.value, J = b.value;
      let te = "asc";
      P === S.key && (te = J === "asc" ? "desc" : "asc"), g.value || (p.value = S.key, h.value = te), a("sort-change", { key: S.key, direction: te });
    }
    function z(S) {
      a("row-clicked", S), n.options?.onRowClick?.(S);
    }
    let x = null, W = 0, Y = 0;
    function O(S, P) {
      if (!n.options?.resizeColumn) return;
      x = P, W = S.clientX;
      const J = u.value.find((te) => te.key === P);
      Y = parseInt(J?.width || "150", 10), document.addEventListener("mousemove", V), document.addEventListener("mouseup", H);
    }
    function V(S) {
      if (!x) return;
      const P = S.clientX - W;
      s.value[x] = `${Math.max(60, Y + P)}px`;
    }
    function H() {
      x = null, document.removeEventListener("mousemove", V), document.removeEventListener("mouseup", H);
    }
    const R = M(null), T = M(null);
    function D(S, P) {
      n.editMode && (R.value = P, S.dataTransfer?.setData("text/plain", P), S.dataTransfer && (S.dataTransfer.effectAllowed = "move"));
    }
    function $(S, P) {
      !n.editMode || !R.value || (S.preventDefault(), T.value = P);
    }
    function F(S) {
      T.value === S && (T.value = null);
    }
    function K(S, P) {
      if (!n.editMode || !R.value) return;
      S.preventDefault();
      const J = R.value;
      if (R.value = null, T.value = null, J === P) return;
      const te = [...u.value], be = te.findIndex((Me) => Me.key === J), Te = te.findIndex((Me) => Me.key === P);
      if (be === -1 || Te === -1) return;
      const [_e] = te.splice(be, 1);
      te.splice(Te, 0, _e);
      const Fe = te.map((Me, U) => ({ key: Me.key, orderPosition: U }));
      a("columns-reordered", Fe);
    }
    function B() {
      R.value = null, T.value = null;
    }
    function j() {
      const S = v.value;
      S && (S.style.overflowY = "hidden", requestAnimationFrame(() => {
        S.style.overflowY = "auto";
      }));
    }
    return we(() => {
      j(), window.addEventListener("resize", j);
    }), Ae(() => {
      window.removeEventListener("resize", j), document.removeEventListener("mousemove", V), document.removeEventListener("mouseup", H);
    }), (S, P) => (l(), c("div", {
      class: "fu-listview",
      ref_key: "listviewRef",
      ref: m
    }, [
      f("div", {
        class: "fu-listview__table-wrapper customScrollBar",
        ref_key: "tableWrapper",
        ref: v
      }, [
        f("table", null, [
          ee(_) ? (l(), c("thead", OE, [
            f("tr", null, [
              t.options?.selectable ? (l(), c("th", RE, [
                t.loading ? (l(), c("div", $E)) : (l(), Z(ut, {
                  key: 1,
                  modelValue: d.value,
                  "onUpdate:modelValue": P[0] || (P[0] = (J) => d.value = J),
                  size: "sm"
                }, null, 8, ["modelValue"]))
              ])) : A("", !0),
              (l(!0), c(L, null, oe(u.value, (J) => (l(), c("th", {
                key: J.key,
                style: ie({ width: J.width || "auto" }),
                class: X(["fu-listview__th", [
                  `align-${J.textAlign || "justify"}`,
                  {
                    "is-dragging": R.value === J.key,
                    "is-drag-over": T.value === J.key && R.value !== J.key
                  }
                ]]),
                draggable: t.editMode && !t.loading,
                onDragstart: (te) => D(te, J.key),
                onDragover: (te) => $(te, J.key),
                onDragleave: (te) => F(J.key),
                onDrop: (te) => K(te, J.key),
                onDragend: B
              }, [
                f("div", {
                  class: X(["fu-listview__th-content", `align-${J.textAlign || "justify"}`])
                }, [
                  t.editMode && !t.loading ? (l(), c("span", PE, "⠿")) : A("", !0),
                  t.loading ? (l(), c("div", FE)) : (l(), c("div", {
                    key: 2,
                    class: X(["fu-listview__th-sortable", {
                      "is-sortable": !!J.sortable,
                      "is-active": y.value === J.key
                    }]),
                    role: J.sortable ? "button" : void 0,
                    tabindex: J.sortable ? 0 : -1,
                    onClick: (te) => N(J),
                    onKeydown: [
                      $e(ue((te) => N(J), ["prevent"]), ["enter"]),
                      $e(ue((te) => N(J), ["prevent"]), ["space"])
                    ]
                  }, [
                    J.icon ? (l(), Z(me(J.icon), {
                      key: 0,
                      class: "fu-listview__th-icon"
                    })) : A("", !0),
                    f("span", zE, w(J.label), 1),
                    J.sortable ? (l(), c("span", LE, [
                      y.value === J.key ? (l(), c(L, { key: 0 }, [
                        de(w(b.value === "asc" ? "▲" : "▼"), 1)
                      ], 64)) : (l(), c(L, { key: 1 }, [
                        de("⇅")
                      ], 64))
                    ])) : A("", !0)
                  ], 42, BE)),
                  t.options?.resizeColumn && !t.loading ? (l(), c("span", {
                    key: 3,
                    class: "fu-listview__resize-handle",
                    onMousedown: ue((te) => O(te, J.key), ["stop"])
                  }, null, 40, VE)) : A("", !0)
                ], 2)
              ], 46, xE))), 128))
            ])
          ])) : A("", !0),
          t.loading ? (l(), c("tbody", HE, [
            (l(!0), c(L, null, oe(r.value, (J) => (l(), c("tr", {
              key: `skeleton-${J}`,
              class: "fu-listview__row fu-listview__row--skeleton"
            }, [
              t.options?.selectable ? (l(), c("td", jE, [...P[2] || (P[2] = [
                f("div", { class: "fu-skeleton-cell fu-skeleton-cell--checkbox" }, null, -1)
              ])])) : A("", !0),
              (l(!0), c(L, null, oe(u.value, (te) => (l(), c("td", {
                key: `skeleton-${J}-${te.key}`,
                class: X(["fu-listview__td", {
                  "is-dragging": R.value === te.key,
                  "is-drag-over": T.value === te.key && R.value !== te.key
                }]),
                style: ie({ width: te.width })
              }, [
                f("div", {
                  class: "fu-skeleton-cell",
                  style: ie({ width: o(J, te.key) })
                }, null, 4)
              ], 6))), 128))
            ]))), 128))
          ])) : (l(), c("tbody", UE, [
            (l(!0), c(L, null, oe(t.rows, (J) => (l(), c("tr", {
              key: J[t.rowKey],
              class: "fu-listview__row",
              onClick: (te) => z(J)
            }, [
              t.options?.selectable ? (l(), c("td", {
                key: 0,
                class: "fu-listview__td fu-listview__td--checkbox",
                onClick: P[1] || (P[1] = ue(() => {
                }, ["stop"]))
              }, [
                Q(ut, {
                  modelValue: J.__selected,
                  "onUpdate:modelValue": (te) => J.__selected = te,
                  onChange: E,
                  size: "sm",
                  disabled: !k(J)
                }, null, 8, ["modelValue", "onUpdate:modelValue", "disabled"])
              ])) : A("", !0),
              se(S.$slots, "tableRow", { row: J }, () => [
                (l(!0), c(L, null, oe(u.value, (te) => (l(), c("td", {
                  key: te.key,
                  class: X(["fu-listview__td", [
                    `align-${te.textAlign || "justify"}`,
                    {
                      "is-dragging": R.value === te.key,
                      "is-drag-over": T.value === te.key && R.value !== te.key
                    }
                  ]]),
                  style: ie({ width: te.width })
                }, [
                  se(S.$slots, `cell-${te.key}`, {
                    row: J,
                    col: te
                  }, () => [
                    f("span", YE, w(J[te.key]), 1)
                  ], !0)
                ], 6))), 128))
              ], !0)
            ], 8, WE))), 128))
          ]))
        ])
      ], 512)
    ], 512));
  }
}), qE = /* @__PURE__ */ ae(GE, [["__scopeId", "data-v-324a0739"]]), KE = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: qE
}, Symbol.toStringTag, { value: "Module" })), QE = { key: 0 }, ZE = {
  key: 0,
  class: "fu-listview__th fu-listview__th--checkbox"
}, JE = {
  key: 0,
  class: "fu-skeleton-cell fu-skeleton-cell--checkbox"
}, XE = {
  key: 0,
  class: "fu-skeleton-cell fu-skeleton-cell--header"
}, eM = ["role", "tabindex", "onClick", "onKeydown"], tM = { class: "fu-listview__th-label" }, nM = {
  key: 1,
  class: "fu-listview__sort-indicator"
}, aM = ["onMousedown"], iM = { key: 1 }, oM = {
  key: 0,
  class: "fu-listview__td fu-listview__td--checkbox"
}, rM = { key: 2 }, sM = ["onClick"], lM = { class: "fu-listview__cell" }, uM = /* @__PURE__ */ le({
  __name: "ListviewBackup",
  props: {
    columns: {},
    rows: {},
    rowKey: {},
    showHeader: { type: Boolean },
    loading: { type: Boolean },
    skeletonRows: {},
    sort: {},
    options: {}
  },
  emits: ["row-selected", "row-clicked", "sort-change"],
  setup(t, { emit: e }) {
    const n = t, a = e, i = [
      ["55%", "70%", "40%", "65%", "50%"],
      ["75%", "45%", "80%", "55%", "60%"],
      ["60%", "80%", "50%", "70%", "45%"],
      ["45%", "65%", "75%", "40%", "70%"],
      ["70%", "50%", "60%", "80%", "55%"]
    ];
    function o(R, T) {
      const D = n.columns.findIndex(($) => $.key === T) % 5;
      return i[(R - 1) % i.length][D];
    }
    const r = I(() => n.skeletonRows ?? 8), s = M(
      n.columns.map((R) => ({
        ...R,
        width: R.width || "150px",
        textAlign: R.textAlign || "justify",
        sortable: !!R.sortable
      }))
    ), u = M(!1), d = M(null), m = M(null), v = M(null), p = M("asc"), h = I(() => !!n.sort), g = I(
      () => h.value ? n.sort?.key ?? null : v.value
    ), y = I(
      () => h.value ? n.sort?.direction ?? "asc" : p.value
    ), b = n.showHeader ?? !0, _ = () => n.options?.sortable !== !1;
    function C(R) {
      return n.options?.selectable ? n.options?.isRowSelectable ? n.options.isRowSelectable(R) : !0 : !1;
    }
    function k() {
      const R = n.rows.filter((T) => T.__selected && C(T));
      a("row-selected", R);
    }
    he(u, (R) => {
      n.options?.selectable && (n.rows.forEach((T) => {
        C(T) && (T.__selected = R);
      }), k());
    });
    function E(R) {
      if (!_() || !R.sortable) return;
      const T = g.value, D = y.value;
      let $ = "asc";
      T === R.key && ($ = D === "asc" ? "desc" : "asc"), h.value || (v.value = R.key, p.value = $), a("sort-change", { key: R.key, direction: $ });
    }
    function N(R) {
      a("row-clicked", R), n.options?.onRowClick?.(R);
    }
    let z = null, x = 0, W = 0;
    function Y(R, T) {
      n.options?.resizeColumn && (z = T, x = R.clientX, W = parseInt(s.value[T].width, 10), document.addEventListener("mousemove", O), document.addEventListener("mouseup", V));
    }
    function O(R) {
      if (z === null) return;
      const T = R.clientX - x;
      s.value[z].width = `${Math.max(60, W + T)}px`;
    }
    function V() {
      z = null, document.removeEventListener("mousemove", O), document.removeEventListener("mouseup", V);
    }
    function H() {
      const R = m.value;
      R && (R.style.overflowY = "hidden", requestAnimationFrame(() => {
        R.style.overflowY = "auto";
      }));
    }
    return we(() => {
      H(), window.addEventListener("resize", H);
    }), Ae(() => {
      window.removeEventListener("resize", H), document.removeEventListener("mousemove", O), document.removeEventListener("mouseup", V);
    }), (R, T) => (l(), c("div", {
      class: "fu-listview",
      ref_key: "listviewRef",
      ref: d
    }, [
      f("div", {
        class: "fu-listview__table-wrapper customScrollBar",
        ref_key: "tableWrapper",
        ref: m
      }, [
        f("table", null, [
          ee(b) ? (l(), c("thead", QE, [
            f("tr", null, [
              t.options?.selectable ? (l(), c("th", ZE, [
                t.loading ? (l(), c("div", JE)) : (l(), Z(ut, {
                  key: 1,
                  modelValue: u.value,
                  "onUpdate:modelValue": T[0] || (T[0] = (D) => u.value = D),
                  size: "sm"
                }, null, 8, ["modelValue"]))
              ])) : A("", !0),
              (l(!0), c(L, null, oe(s.value, (D, $) => (l(), c("th", {
                key: D.key,
                style: ie({ width: D.width || "auto" }),
                class: X(["fu-listview__th", `align-${D.textAlign || "justify"}`])
              }, [
                f("div", {
                  class: X(["fu-listview__th-content", `align-${D.textAlign || "justify"}`])
                }, [
                  t.loading ? (l(), c("div", XE)) : (l(), c("div", {
                    key: 1,
                    class: X(["fu-listview__th-sortable", {
                      "is-sortable": !!D.sortable,
                      "is-active": g.value === D.key
                    }]),
                    role: D.sortable ? "button" : void 0,
                    tabindex: D.sortable ? 0 : -1,
                    onClick: (F) => E(D),
                    onKeydown: [
                      $e(ue((F) => E(D), ["prevent"]), ["enter"]),
                      $e(ue((F) => E(D), ["prevent"]), ["space"])
                    ]
                  }, [
                    D.icon ? (l(), Z(me(D.icon), {
                      key: 0,
                      class: "fu-listview__th-icon"
                    })) : A("", !0),
                    f("span", tM, w(D.label), 1),
                    D.sortable ? (l(), c("span", nM, [
                      g.value === D.key ? (l(), c(L, { key: 0 }, [
                        de(w(y.value === "asc" ? "▲" : "▼"), 1)
                      ], 64)) : (l(), c(L, { key: 1 }, [
                        de("⇅")
                      ], 64))
                    ])) : A("", !0)
                  ], 42, eM)),
                  t.options?.resizeColumn && !t.loading ? (l(), c("span", {
                    key: 2,
                    class: "fu-listview__resize-handle",
                    onMousedown: ue((F) => Y(F, $), ["stop"])
                  }, null, 40, aM)) : A("", !0)
                ], 2)
              ], 6))), 128))
            ])
          ])) : A("", !0),
          t.loading ? (l(), c("tbody", iM, [
            (l(!0), c(L, null, oe(r.value, (D) => (l(), c("tr", {
              key: `skeleton-${D}`,
              class: "fu-listview__row fu-listview__row--skeleton"
            }, [
              t.options?.selectable ? (l(), c("td", oM, [...T[2] || (T[2] = [
                f("div", { class: "fu-skeleton-cell fu-skeleton-cell--checkbox" }, null, -1)
              ])])) : A("", !0),
              (l(!0), c(L, null, oe(s.value, ($) => (l(), c("td", {
                key: `skeleton-${D}-${$.key}`,
                class: "fu-listview__td",
                style: ie({ width: $.width })
              }, [
                f("div", {
                  class: "fu-skeleton-cell",
                  style: ie({ width: o(D, $.key) })
                }, null, 4)
              ], 4))), 128))
            ]))), 128))
          ])) : (l(), c("tbody", rM, [
            (l(!0), c(L, null, oe(t.rows, (D) => (l(), c("tr", {
              key: D[t.rowKey],
              class: "fu-listview__row",
              onClick: ($) => N(D)
            }, [
              t.options?.selectable ? (l(), c("td", {
                key: 0,
                class: "fu-listview__td fu-listview__td--checkbox",
                onClick: T[1] || (T[1] = ue(() => {
                }, ["stop"]))
              }, [
                Q(ut, {
                  modelValue: D.__selected,
                  "onUpdate:modelValue": ($) => D.__selected = $,
                  onChange: k,
                  size: "sm",
                  disabled: !C(D)
                }, null, 8, ["modelValue", "onUpdate:modelValue", "disabled"])
              ])) : A("", !0),
              se(R.$slots, "tableRow", { row: D }, () => [
                (l(!0), c(L, null, oe(s.value, ($) => (l(), c("td", {
                  key: $.key,
                  class: X(["fu-listview__td", `align-${$.textAlign || "justify"}`]),
                  style: ie({ width: $.width })
                }, [
                  se(R.$slots, `cell-${$.key}`, {
                    row: D,
                    col: $
                  }, () => [
                    f("span", lM, w(D[$.key]), 1)
                  ], !0)
                ], 6))), 128))
              ], !0)
            ], 8, sM))), 128))
          ]))
        ])
      ], 512)
    ], 512));
  }
}), cM = /* @__PURE__ */ ae(uM, [["__scopeId", "data-v-cda3cdd9"]]), dM = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: cM
}, Symbol.toStringTag, { value: "Module" })), fM = { key: 0 }, mM = {
  key: 0,
  class: "fu-listview__th fu-listview__th--checkbox"
}, hM = ["role", "tabindex", "onClick", "onKeydown"], vM = { class: "fu-listview__th-label" }, pM = {
  key: 1,
  class: "fu-listview__sort-indicator"
}, gM = ["onMousedown"], yM = ["onClick"], bM = { class: "fu-listview__cell" }, _M = /* @__PURE__ */ le({
  __name: "TableBackup",
  props: {
    columns: {},
    rows: {},
    rowKey: {},
    showHeader: { type: Boolean },
    sort: {},
    options: {}
  },
  emits: ["row-selected", "row-clicked", "sort-change"],
  setup(t, { emit: e }) {
    const n = t, a = e, i = M(
      n.columns.map((O) => ({
        ...O,
        width: O.width || "150px",
        textAlign: O.textAlign || "justify",
        sortable: !!O.sortable
      }))
    ), o = M(!1), r = M(null), s = M(null), u = M(null), d = M("asc"), m = I(() => !!n.sort), v = I(
      () => m.value ? n.sort?.key ?? null : u.value
    ), p = I(
      () => m.value ? n.sort?.direction ?? "asc" : d.value
    ), h = n.showHeader ?? !0, g = () => n.options?.sortable !== !1;
    function y(O) {
      return n.options?.selectable ? n.options?.isRowSelectable ? n.options.isRowSelectable(O) : !0 : !1;
    }
    function b() {
      const O = n.rows.filter((V) => V.__selected && y(V));
      a("row-selected", O);
    }
    he(o, (O) => {
      n.options?.selectable && (n.rows.forEach((V) => {
        y(V) && (V.__selected = O);
      }), b());
    });
    function _(O) {
      if (!g() || !O.sortable) return;
      const V = v.value, H = p.value;
      let R = "asc";
      V === O.key && (R = H === "asc" ? "desc" : "asc"), m.value || (u.value = O.key, d.value = R), a("sort-change", {
        key: O.key,
        direction: R
      });
    }
    function C(O) {
      a("row-clicked", O), n.options?.onRowClick?.(O);
    }
    let k = null, E = 0, N = 0;
    function z(O, V) {
      n.options?.resizeColumn && (k = V, E = O.clientX, N = parseInt(i.value[V].width, 10), document.addEventListener("mousemove", x), document.addEventListener("mouseup", W));
    }
    function x(O) {
      if (k === null) return;
      const V = O.clientX - E;
      i.value[k].width = `${Math.max(60, N + V)}px`;
    }
    function W() {
      k = null, document.removeEventListener("mousemove", x), document.removeEventListener("mouseup", W);
    }
    function Y() {
      const O = s.value;
      O && (O.style.overflowY = "hidden", requestAnimationFrame(() => {
        O.style.overflowY = "auto";
      }));
    }
    return we(() => {
      Y(), window.addEventListener("resize", Y);
    }), Ae(() => {
      window.removeEventListener("resize", Y), document.removeEventListener("mousemove", x), document.removeEventListener("mouseup", W);
    }), (O, V) => (l(), c("div", {
      class: "fu-listview",
      ref_key: "listviewRef",
      ref: r
    }, [
      f("div", {
        class: "fu-listview__table-wrapper customScrollBar",
        ref_key: "tableWrapper",
        ref: s
      }, [
        f("table", null, [
          ee(h) ? (l(), c("thead", fM, [
            f("tr", null, [
              t.options?.selectable ? (l(), c("th", mM, [
                Q(ut, {
                  modelValue: o.value,
                  "onUpdate:modelValue": V[0] || (V[0] = (H) => o.value = H),
                  size: "sm"
                }, null, 8, ["modelValue"])
              ])) : A("", !0),
              (l(!0), c(L, null, oe(i.value, (H, R) => (l(), c("th", {
                key: H.key,
                style: ie({ width: H.width || "auto" }),
                class: X(["fu-listview__th", `align-${H.textAlign || "justify"}`])
              }, [
                f("div", {
                  class: X(["fu-listview__th-content", `align-${H.textAlign || "justify"}`])
                }, [
                  f("div", {
                    class: X(["fu-listview__th-sortable", {
                      "is-sortable": !!H.sortable,
                      "is-active": v.value === H.key
                    }]),
                    role: H.sortable ? "button" : void 0,
                    tabindex: H.sortable ? 0 : -1,
                    onClick: (T) => _(H),
                    onKeydown: [
                      $e(ue((T) => _(H), ["prevent"]), ["enter"]),
                      $e(ue((T) => _(H), ["prevent"]), ["space"])
                    ]
                  }, [
                    H.icon ? (l(), Z(me(H.icon), {
                      key: 0,
                      class: "fu-listview__th-icon"
                    })) : A("", !0),
                    f("span", vM, w(H.label), 1),
                    H.sortable && v.value === H.key ? (l(), c("span", pM, w(p.value === "asc" ? "▲" : "▼"), 1)) : A("", !0)
                  ], 42, hM),
                  t.options?.resizeColumn ? (l(), c("span", {
                    key: 0,
                    class: "fu-listview__resize-handle",
                    onMousedown: ue((T) => z(T, R), ["stop"])
                  }, null, 40, gM)) : A("", !0)
                ], 2)
              ], 6))), 128))
            ])
          ])) : A("", !0),
          f("tbody", null, [
            (l(!0), c(L, null, oe(t.rows, (H) => (l(), c("tr", {
              key: H[t.rowKey],
              class: "fu-listview__row",
              onClick: (R) => C(H)
            }, [
              t.options?.selectable ? (l(), c("td", {
                key: 0,
                class: "fu-listview__td fu-listview__td--checkbox",
                onClick: V[1] || (V[1] = ue(() => {
                }, ["stop"]))
              }, [
                Q(ut, {
                  modelValue: H.__selected,
                  "onUpdate:modelValue": (R) => H.__selected = R,
                  onChange: b,
                  size: "sm",
                  disabled: !y(H)
                }, null, 8, ["modelValue", "onUpdate:modelValue", "disabled"])
              ])) : A("", !0),
              se(O.$slots, "tableRow", { row: H }, () => [
                (l(!0), c(L, null, oe(i.value, (R) => (l(), c("td", {
                  key: R.key,
                  class: X(["fu-listview__td", `align-${R.textAlign || "justify"}`]),
                  style: ie({ width: R.width })
                }, [
                  se(O.$slots, `cell-${R.key}`, {
                    row: H,
                    col: R
                  }, () => [
                    f("span", bM, w(H[R.key]), 1)
                  ], !0)
                ], 6))), 128))
              ], !0)
            ], 8, yM))), 128))
          ])
        ])
      ], 512)
    ], 512));
  }
}), CM = /* @__PURE__ */ ae(_M, [["__scopeId", "data-v-17f611f9"]]), wM = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: CM
}, Symbol.toStringTag, { value: "Module" })), AM = { class: "fu-confirm__body" }, kM = { class: "fu-confirm__icon" }, SM = { class: "fu-confirm__title" }, TM = { class: "fu-confirm__message" }, EM = { class: "fu-confirm__footer" }, MM = /* @__PURE__ */ le({
  __name: "FusionConfirmDialog",
  props: {
    isVisible: { type: Boolean },
    title: {},
    message: {},
    variant: { default: "confirm" },
    confirmText: { default: "Confirm" },
    cancelText: { default: "Cancel" },
    loading: { type: Boolean, default: !1 }
  },
  emits: ["cancel", "confirm"],
  setup(t, { emit: e }) {
    const n = t, a = e, i = () => {
      n.loading || a("cancel");
    }, o = () => {
      n.loading || a("confirm");
    }, r = () => {
      n.loading || a("cancel");
    }, s = I(() => n.variant === "delete" ? Ia : n.variant === "warning" ? Fl : Ro), u = I(() => n.variant === "delete" || n.variant === "warning" ? "danger" : "solid"), d = (m) => {
      n.isVisible && (n.loading || (m.key === "Enter" && (m.preventDefault(), o()), m.key === "Escape" && i()));
    };
    return we(() => {
      window.addEventListener("keydown", d);
    }), Ae(() => {
      window.removeEventListener("keydown", d);
    }), (m, v) => (l(), Z(Ee, { to: "body" }, [
      t.isVisible ? (l(), c("div", {
        key: 0,
        class: "fu-modal__backdrop",
        onClick: ue(r, ["self"])
      }, [
        f("div", {
          class: X(["fu-confirm", `fu-confirm--${t.variant}`])
        }, [
          f("div", AM, [
            f("div", kM, [
              (l(), Z(me(s.value)))
            ]),
            f("h3", SM, w(t.title), 1),
            f("p", TM, w(t.message), 1)
          ]),
          f("div", EM, [
            Q(Se, {
              variant: "outline",
              buttonWidth: "100%",
              disabled: t.loading,
              onClick: i
            }, {
              default: ce(() => [
                de(w(t.cancelText), 1)
              ]),
              _: 1
            }, 8, ["disabled"]),
            Q(Se, {
              variant: u.value,
              buttonWidth: "100%",
              loading: t.loading,
              disabled: t.loading,
              onClick: o
            }, {
              default: ce(() => [
                de(w(t.confirmText), 1)
              ]),
              _: 1
            }, 8, ["variant", "loading", "disabled"])
          ])
        ], 2)
      ])) : A("", !0)
    ]));
  }
}), NM = /* @__PURE__ */ ae(MM, [["__scopeId", "data-v-094e1d3b"]]), DM = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: NM
}, Symbol.toStringTag, { value: "Module" })), IM = {
  key: 0,
  class: "fu-preview-backdrop"
}, OM = { class: "fu-preview-modal" }, RM = { class: "fu-preview-header" }, $M = { class: "fu-preview-header__left" }, xM = { class: "fu-preview-header__right" }, PM = { class: "fu-preview-body" }, FM = /* @__PURE__ */ le({
  __name: "FusionPreviewModal",
  props: {
    isVisible: { type: Boolean }
  },
  emits: ["close"],
  setup(t, { emit: e }) {
    const n = t, a = e, i = () => a("close");
    he(
      () => n.isVisible,
      (r) => {
        document.body.style.overflow = r ? "hidden" : "";
      },
      { immediate: !0 }
    );
    function o(r) {
      r.key === "Escape" && i();
    }
    return we(() => {
      window.addEventListener("keydown", o);
    }), Ae(() => {
      window.removeEventListener("keydown", o), document.body.style.overflow = "";
    }), (r, s) => (l(), Z(Ee, { to: "body" }, [
      t.isVisible ? (l(), c("div", IM, [
        f("div", OM, [
          f("header", RM, [
            f("div", $M, [
              se(r.$slots, "header-left", {}, void 0, !0)
            ]),
            f("div", xM, [
              se(r.$slots, "header-right", {}, () => [
                Q(Se, {
                  variant: "subtle",
                  size: "sm",
                  text: "Close preview",
                  onClick: i
                })
              ], !0)
            ])
          ]),
          se(r.$slots, "subheader", {}, () => [
            s[0] || (s[0] = f("header", { class: "fu-preview-subheader" }, null, -1))
          ], !0),
          f("main", PM, [
            se(r.$slots, "default", {}, void 0, !0)
          ])
        ])
      ])) : A("", !0)
    ]));
  }
}), BM = /* @__PURE__ */ ae(FM, [["__scopeId", "data-v-76cff339"]]), zM = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: BM
}, Symbol.toStringTag, { value: "Module" })), LM = { class: "fu-module-menu-wrapper scrollbar__control customScrollBar" }, VM = { class: "fu-module-menu-wrapper__list" }, HM = {
  key: 0,
  class: "fu-module-menu-empty"
}, jM = /* @__PURE__ */ le({
  __name: "FusionModuleMenu",
  props: {
    items: {},
    activePath: {}
  },
  setup(t) {
    return (e, n) => {
      const a = Oo("router-link");
      return l(), c("div", LM, [
        f("ul", VM, [
          (l(!0), c(L, null, oe(t.items, (i) => (l(), c("li", {
            key: i.path,
            class: X({ active: t.activePath && t.activePath.startsWith(i.path) })
          }, [
            Q(a, {
              class: "fu-module-menu-link",
              to: i.path
            }, {
              default: ce(() => [
                i.icon ? (l(), Z(me(i.icon), {
                  key: 0,
                  size: 15,
                  class: "fu-module-menu-icon"
                })) : A("", !0),
                f("span", null, w(i.label), 1)
              ]),
              _: 2
            }, 1032, ["to"])
          ], 2))), 128)),
          !t.items || !t.items.length ? (l(), c("li", HM, "No menu items")) : A("", !0)
        ]),
        se(e.$slots, "default", {}, void 0, !0)
      ]);
    };
  }
}), UM = /* @__PURE__ */ ae(jM, [["__scopeId", "data-v-7ff3c35c"]]), WM = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: UM
}, Symbol.toStringTag, { value: "Module" })), YM = { class: "fu-bell-icon" }, GM = {
  key: 2,
  class: "fu-badge"
}, qM = /* @__PURE__ */ le({
  __name: "FuNotification",
  props: {
    unreadCount: { default: 0 },
    bellIcon: { default: void 0 },
    align: { default: "right" },
    bellClass: { default: "" },
    bellStyle: { default: "light" }
  },
  setup(t) {
    const e = t, n = M(!1), a = M(null), i = M(null), o = M({}), r = () => {
      if (n.value = !n.value, n.value && a.value) {
        const u = a.value.getBoundingClientRect();
        let d = u.left + window.scrollX;
        e.align === "right" ? d = u.right + window.scrollX - 300 : e.align === "center" && (d = u.left + window.scrollX - 160 + u.width / 2), o.value = {
          top: `${u.bottom + window.scrollY + 8}px`,
          left: `${Math.max(d, 8)}px`,
          position: "absolute",
          zIndex: "2000"
        };
      }
    }, s = (u) => {
      const d = u.target;
      n.value && a.value && !a.value.contains(d) && (!i.value || !i.value.contains(d)) && (n.value = !1);
    };
    return we(() => document.addEventListener("click", s)), Ae(() => document.removeEventListener("click", s)), (u, d) => (l(), c("div", {
      class: "fu-notification-dropdown",
      ref_key: "dropdown",
      ref: a
    }, [
      f("div", {
        class: "fu-notification__trigger",
        onClick: r
      }, [
        f("div", YM, [
          t.bellIcon ? (l(), Z(me(t.bellIcon), {
            key: 0,
            "stroke-width": 1.5,
            class: "fu-bell-svg"
          })) : (l(), Z(ee(vl), {
            key: 1,
            class: X(["fu-bell-svg", [e.bellStyle, e.bellClass]])
          }, null, 8, ["class"])),
          t.unreadCount > 0 ? (l(), c("span", GM, w(t.unreadCount), 1)) : A("", !0)
        ])
      ]),
      (l(), Z(Ee, { to: "body" }, [
        Q(Ve, { name: "fade" }, {
          default: ce(() => [
            n.value ? (l(), c("div", {
              key: 0,
              ref_key: "panelEl",
              ref: i,
              class: "fu-notification__panel",
              style: ie(o.value)
            }, [
              se(u.$slots, "default", {}, () => [
                d[0] || (d[0] = f("div", { class: "fu-empty" }, [
                  f("h4", null, "No Content"),
                  f("p", null, "Use the default slot to pass custom dropdown body.")
                ], -1))
              ], !0)
            ], 4)) : A("", !0)
          ]),
          _: 3
        })
      ]))
    ], 512));
  }
}), KM = /* @__PURE__ */ ae(qM, [["__scopeId", "data-v-b710a214"]]), QM = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: KM
}, Symbol.toStringTag, { value: "Module" })), ZM = {
  key: 0,
  class: "fu-alert__icon"
}, JM = { class: "fu-alert__content" }, XM = {
  key: 1,
  class: "fu-alert__actions"
}, eN = {
  key: 2,
  class: "fu-alert__close"
}, tN = /* @__PURE__ */ le({
  __name: "FuAlert",
  props: {
    variant: {},
    icon: { type: Boolean },
    border: { type: Boolean },
    dismissible: { type: Boolean }
  },
  setup(t) {
    const e = M(!0);
    return (n, a) => e.value ? (l(), c("div", {
      key: 0,
      class: X(["fu-alert", `fu-alert--${t.variant}`, { "fu-alert--bordered": t.border }])
    }, [
      t.icon ? (l(), c("div", ZM, [
        se(n.$slots, "icon", {}, () => [
          Q(ee(yl))
        ], !0)
      ])) : A("", !0),
      f("div", JM, [
        se(n.$slots, "default", {}, void 0, !0)
      ]),
      n.$slots.actions ? (l(), c("div", XM, [
        se(n.$slots, "actions", {}, void 0, !0)
      ])) : A("", !0),
      t.dismissible ? (l(), c("div", eN, [
        Q(Pe, {
          icon: ee(Xe),
          size: "sm",
          variant: "ghost",
          onClick: a[0] || (a[0] = (i) => e.value = !1)
        }, null, 8, ["icon"])
      ])) : A("", !0)
    ], 2)) : A("", !0);
  }
}), nN = /* @__PURE__ */ ae(tN, [["__scopeId", "data-v-7cd3e248"]]), aN = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: nN
}, Symbol.toStringTag, { value: "Module" })), iN = { class: "fu-toast__content" }, oN = { class: "fu-toast__message" }, rN = /* @__PURE__ */ le({
  __name: "FusionToast",
  props: {
    message: {},
    type: { default: "info" },
    duration: { default: 3500 }
  },
  setup(t) {
    const e = t, n = M(!1), a = {
      success: bl,
      error: Cl,
      info: ha,
      dark: ha
    };
    we(() => {
      n.value = !0, setTimeout(() => n.value = !1, e.duration);
    });
    function i() {
      n.value = !1;
    }
    return (o, r) => (l(), Z(Ee, { to: "body" }, [
      Q(Ve, { name: "fu-toast-fade" }, {
        default: ce(() => [
          n.value ? (l(), c("div", {
            key: 0,
            class: X(["fu-toast", [`fu-toast--${t.type}`]]),
            role: "alert"
          }, [
            f("div", iN, [
              (l(), Z(me(a[t.type]), { class: "fu-toast__icon" })),
              f("span", oN, w(t.message), 1),
              f("button", {
                class: "fu-toast__close",
                onClick: i
              }, "×")
            ])
          ], 2)) : A("", !0)
        ]),
        _: 1
      })
    ]));
  }
}), Qs = /* @__PURE__ */ ae(rN, [["__scopeId", "data-v-9f423b9f"]]), sN = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Qs
}, Symbol.toStringTag, { value: "Module" })), lN = ["disabled", "aria-checked", "onClick"], uN = ["src"], cN = /* @__PURE__ */ le({
  __name: "FusionPillSelect",
  props: {
    modelValue: { default: null },
    options: {},
    size: { default: "md" },
    disabled: { type: Boolean, default: !1 },
    readonly: { type: Boolean, default: !1 },
    font: { default: void 0 },
    fontSize: { default: void 0 },
    color: { default: void 0 }
  },
  emits: ["update:modelValue"],
  setup(t, { emit: e }) {
    const n = t, a = e;
    function i(r) {
      n.disabled || n.readonly || a("update:modelValue", r);
    }
    const o = I(() => ({
      ...n.font ? { "--fu-typeform-font": n.font } : {},
      ...n.fontSize ? { "--fu-typeform-font-size": n.fontSize } : {},
      ...n.color ? { "--fu-typeform-color": n.color } : {}
    }));
    return (r, s) => (l(), c("div", {
      class: X(["fu-pill-select", [`fu-pill-select--${t.size}`]]),
      role: "radiogroup",
      style: ie(o.value)
    }, [
      (l(!0), c(L, null, oe(t.options, (u) => (l(), c("button", {
        key: u.value,
        type: "button",
        class: X(["fu-pill", {
          "is-selected": t.modelValue === u.value,
          "is-readonly": t.readonly
        }]),
        disabled: t.disabled,
        role: "radio",
        "aria-checked": t.modelValue === u.value,
        onClick: (d) => i(u.value)
      }, [
        typeof u.icon == "string" ? (l(), c("img", {
          key: 0,
          src: u.icon,
          class: "fu-pill__icon-img",
          alt: ""
        }, null, 8, uN)) : u.icon ? (l(), Z(me(u.icon), {
          key: 1,
          size: 16,
          class: "fu-pill__icon"
        })) : A("", !0),
        f("span", null, w(u.label), 1)
      ], 10, lN))), 128))
    ], 6));
  }
}), Zs = /* @__PURE__ */ ae(cN, [["__scopeId", "data-v-097b5880"]]), dN = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Zs
}, Symbol.toStringTag, { value: "Module" })), fN = ["disabled", "aria-checked", "onClick"], mN = ["src"], hN = { class: "fu-pill__label" }, vN = { class: "fu-pill__badge" }, pN = /* @__PURE__ */ le({
  __name: "FusionPillMultiSelect",
  props: {
    modelValue: { default: () => [] },
    options: {},
    size: { default: "md" },
    disabled: { type: Boolean, default: !1 },
    readonly: { type: Boolean, default: !1 },
    font: { default: void 0 },
    fontSize: { default: void 0 },
    color: { default: void 0 }
  },
  emits: ["update:modelValue"],
  setup(t, { emit: e }) {
    const n = t, a = e;
    function i(s) {
      return n.modelValue.includes(s);
    }
    function o(s) {
      if (n.disabled || n.readonly) return;
      const u = i(s) ? n.modelValue.filter((d) => d !== s) : [...n.modelValue, s];
      a("update:modelValue", u);
    }
    const r = I(() => ({
      ...n.font ? { "--fu-typeform-font": n.font } : {},
      ...n.fontSize ? { "--fu-typeform-font-size": n.fontSize } : {},
      ...n.color ? { "--fu-typeform-color": n.color } : {}
    }));
    return (s, u) => (l(), c("div", {
      class: X(["fu-pill-multi-select", [`fu-pill-multi-select--${t.size}`]]),
      role: "group",
      style: ie(r.value)
    }, [
      (l(!0), c(L, null, oe(t.options, (d) => (l(), c("button", {
        key: d.value,
        type: "button",
        class: X(["fu-pill fu-pill--multi", {
          "is-selected": i(d.value),
          "is-readonly": t.readonly
        }]),
        disabled: t.disabled,
        role: "checkbox",
        "aria-checked": i(d.value),
        onClick: (m) => o(d.value)
      }, [
        typeof d.icon == "string" ? (l(), c("img", {
          key: 0,
          src: d.icon,
          class: "fu-pill__icon-img",
          alt: ""
        }, null, 8, mN)) : d.icon ? (l(), Z(me(d.icon), {
          key: 1,
          size: 16,
          class: "fu-pill__icon"
        })) : A("", !0),
        f("span", hN, w(d.label), 1),
        f("span", vN, [
          i(d.value) ? (l(), Z(ee(Pn), {
            key: 0,
            size: 12
          })) : A("", !0)
        ])
      ], 10, fN))), 128))
    ], 6));
  }
}), Js = /* @__PURE__ */ ae(pN, [["__scopeId", "data-v-9a9b94bb"]]), gN = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Js
}, Symbol.toStringTag, { value: "Module" })), yN = { class: "fu-tag-input-wrapper" }, bN = {
  key: 0,
  class: "fu-tag-input-label"
}, _N = ["disabled", "onClick"], CN = ["placeholder", "disabled", "readonly", "onKeydown"], wN = {
  key: 1,
  class: "fu-tag-input-hint"
}, AN = {
  key: 2,
  class: "fu-tag-input-error"
}, kN = {
  key: 3,
  class: "fu-tag-input-helper"
}, SN = /* @__PURE__ */ le({
  __name: "FusionTagInput",
  props: {
    modelValue: { default: () => [] },
    label: { default: "" },
    placeholder: { default: "Press ENTER to add" },
    hint: { default: "" },
    helperText: { default: "" },
    disabled: { type: Boolean, default: !1 },
    readonly: { type: Boolean, default: !1 },
    validate: { type: [String, Function], default: void 0 },
    error: { default: null }
  },
  emits: ["update:modelValue", "invalid"],
  setup(t, { emit: e }) {
    const n = t, a = e, i = M(""), o = M(!1), r = M(null), s = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    function u(y) {
      return n.validate ? n.validate === "email" ? s.test(y) : n.validate(y) : !0;
    }
    function d() {
      n.disabled || r.value?.focus();
    }
    function m() {
      const y = i.value.trim().replace(/,$/, "");
      if (y) {
        if (!u(y)) {
          a("invalid", y);
          return;
        }
        n.modelValue.includes(y) || a("update:modelValue", [...n.modelValue, y]), i.value = "";
      }
    }
    function v(y) {
      if (y.key === ",") {
        y.preventDefault(), m();
        return;
      }
      y.key === "Backspace" && p();
    }
    function p() {
      i.value === "" && n.modelValue.length && g(n.modelValue.length - 1);
    }
    function h() {
      o.value = !1, i.value.trim() && m();
    }
    function g(y) {
      if (n.readonly || n.disabled) return;
      const b = [...n.modelValue];
      b.splice(y, 1), a("update:modelValue", b);
    }
    return (y, b) => (l(), c("div", yN, [
      t.label ? (l(), c("label", bN, w(t.label), 1)) : A("", !0),
      f("div", {
        class: X(["fu-tag-input", { "is-focused": o.value, "fu-tag-input--error": !!t.error }]),
        onClick: d
      }, [
        (l(!0), c(L, null, oe(t.modelValue, (_, C) => (l(), c("span", {
          key: _,
          class: "fu-tag-chip"
        }, [
          de(w(_) + " ", 1),
          f("button", {
            type: "button",
            class: "fu-tag-chip__remove",
            disabled: t.readonly || t.disabled,
            onClick: ue((k) => g(C), ["stop"])
          }, [
            Q(ee(Xe), { size: 12 })
          ], 8, _N)
        ]))), 128)),
        je(f("input", {
          ref_key: "inputRef",
          ref: r,
          "onUpdate:modelValue": b[0] || (b[0] = (_) => i.value = _),
          class: "fu-tag-input__field",
          placeholder: t.modelValue.length ? "" : t.placeholder,
          disabled: t.disabled,
          readonly: t.readonly,
          onKeydown: [
            $e(ue(m, ["prevent"]), ["enter"]),
            v
          ],
          onFocus: b[1] || (b[1] = (_) => o.value = !0),
          onBlur: h
        }, null, 40, CN), [
          [tt, i.value]
        ])
      ], 2),
      t.hint ? (l(), c("p", wN, [
        Q(ee(Nl), { size: 14 }),
        f("span", null, w(t.hint), 1)
      ])) : A("", !0),
      t.error ? (l(), c("span", AN, w(t.error), 1)) : t.helperText ? (l(), c("span", kN, w(t.helperText), 1)) : A("", !0)
    ]));
  }
}), Xs = /* @__PURE__ */ ae(SN, [["__scopeId", "data-v-d984f49c"]]), TN = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Xs
}, Symbol.toStringTag, { value: "Module" })), EN = {
  key: 0,
  class: "fu-onboarding-page__scrim"
}, MN = {
  key: 0,
  class: "fu-onboarding__transition"
}, NN = { class: "fu-onboarding__transition-text" }, DN = {
  key: 1,
  class: "fu-onboarding__body"
}, IN = { class: "fu-onboarding__question" }, ON = {
  key: 5,
  class: "fu-onboarding__helper"
}, RN = { class: "fu-onboarding__footer" }, $N = { class: "fu-onboarding__progress-track" }, xN = {
  key: 0,
  class: "fu-onboarding__footer-note"
}, PN = {
  key: 1,
  class: "fu-onboarding__nav"
}, FN = { key: 1 }, BN = { class: "fu-onboarding__next-label" }, zN = /* @__PURE__ */ le({
  __name: "FusionOnboarding",
  props: {
    steps: {},
    step: { default: 0 },
    answers: { default: () => ({}) },
    footerNote: { default: "" },
    color: { default: void 0 },
    backdropImage: { default: "" }
  },
  emits: ["update:step", "update:answers", "complete", "close", "skip"],
  setup(t, { emit: e }) {
    const n = I(() => {
      const C = s.value;
      if (!C || C.type !== "select") return null;
      const k = r.value[C.id];
      return k == null ? null : (C.options ?? []).find((z) => String(z.value) === String(k)) ?? null;
    }), a = t, i = e, o = M(a.step), r = M({ ...a.answers });
    he(
      () => a.step,
      (C) => o.value = C
    );
    const s = I(() => a.steps[o.value]);
    let u = null;
    he(
      s,
      (C) => {
        u && (clearTimeout(u), u = null), C?.type === "transition" && (u = setTimeout(() => _(), C.duration ?? 1500));
      },
      { immediate: !0 }
    ), Ae(() => {
      u && clearTimeout(u);
    });
    const d = I(() => (o.value + 1) / a.steps.length * 100), m = I(() => {
      const C = s.value;
      if (!C) return !1;
      if (C.type === "transition" || C.required === !1) return !0;
      const k = r.value[C.id];
      return C.type === "pill-single" ? k != null : C.type === "pill-multi" || C.type === "tag-input" ? Array.isArray(k) && k.length > 0 : C.type === "text" ? typeof k == "string" && k.trim().length > 0 : C.type === "select" ? k != null : !0;
    }), v = I(() => {
      const C = s.value;
      return C?.nextLabel ? C.nextLabel : o.value === a.steps.length - 1 ? "Finish" : "Next";
    }), p = I(
      () => a.color ? { "--fu-typeform-color": a.color } : {}
    ), h = I(
      () => a.backdropImage ? {
        backgroundImage: `url(${a.backdropImage})`,
        backgroundPosition: "left top",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat"
        // Dropped `backgroundAttachment: "fixed"` — it silently breaks (image
        // can vanish entirely) if ANY ancestor has transform/filter/perspective/
        // will-change set, which route-transition wrappers almost always do.
        // Not worth chasing for a one-off onboarding background.
      } : {}
    );
    function g(C) {
      const k = s.value;
      if (!k) return;
      const E = k.type === "select" ? C?.value : C;
      r.value = {
        ...r.value,
        [k.id]: E
      }, i("update:answers", r.value), (k.autoAdvance ?? k.type === "pill-single") && _();
    }
    function y() {
      o.value !== 0 && (o.value -= 1, i("update:step", o.value));
    }
    function b(C, k) {
      return C.type === "pill-single" ? k == null : C.type === "pill-multi" || C.type === "tag-input" ? !Array.isArray(k) || k.length === 0 : C.type === "text" ? !k || !String(k).trim() : C.type === "select" ? !k : !1;
    }
    function _() {
      const C = s.value;
      if (C && C.required === !1 && b(C, r.value[C.id]) && i("skip", { id: C.id, type: C.type }), o.value === a.steps.length - 1) {
        i("complete", r.value);
        return;
      }
      o.value += 1, i("update:step", o.value);
    }
    return (C, k) => (l(), c("div", {
      class: "fu-onboarding-page",
      style: ie(h.value)
    }, [
      t.backdropImage ? (l(), c("div", EN)) : A("", !0),
      f("div", {
        class: "fu-onboarding",
        style: ie(p.value)
      }, [
        f("button", {
          class: "fu-onboarding__close",
          type: "button",
          onClick: k[0] || (k[0] = (E) => i("close"))
        }, [
          Q(ee(Xe), { size: 16 })
        ]),
        k[7] || (k[7] = Cn('<header class="fu-onboarding__header" data-v-38315573><svg class="fu-onboarding__logo" width="91" height="23" viewBox="0 0 91 23" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-38315573><path d="M22.9459 7.11506V18.8695C22.9459 21.0605 21.1697 22.8366 18.9789 22.8366H10.9739V22.7786C15.5829 22.2742 19.1832 18.3609 19.1832 13.6184C19.1832 10.7892 17.9136 8.16294 15.7048 6.40044L15.2119 6.01211L13.2524 8.47599L13.7393 8.86445C15.2003 10.0239 16.0351 11.7575 16.0351 13.6184C16.0351 16.6158 13.8438 19.1204 10.9739 19.6016C10.6435 19.6595 10.3071 19.6885 9.95931 19.6885H4.07049C1.87953 19.6885 0.103516 17.9124 0.103516 15.7215V3.96698C0.103516 1.77615 1.87953 7.36886e-06 4.07049 7.36886e-06H10.9739V0.249318C6.90408 1.20591 3.86616 4.86994 3.86616 9.22393C3.86616 12.0473 5.13581 14.6794 7.35037 16.436L7.83746 16.8303L9.79695 14.3664L9.30999 13.9721C7.85477 12.8125 7.01424 11.0849 7.01424 9.22393C7.01424 6.61499 8.66068 4.38875 10.9739 3.53065C11.6349 3.28134 12.3479 3.14809 13.0901 3.14809H18.9789C21.1697 3.14809 22.9459 4.9241 22.9459 7.11506Z" fill="#FFD37B" data-v-38315573></path><path d="M35.9989 8.3817C35.8474 6.66025 34.7803 5.79965 32.7972 5.79965C31.916 5.79965 31.2276 5.98195 30.7315 6.3468C30.2358 6.71166 29.9877 7.21107 29.9877 7.84425C29.9877 8.43652 30.1704 8.84282 30.5353 9.06341C30.9002 9.2836 31.7093 9.55233 32.9625 9.86866C33.2928 9.96531 33.5476 10.034 33.7269 10.0753C35.3657 10.4883 36.481 10.8604 37.0733 11.1906C38.3815 11.8931 39.0356 12.9882 39.0356 14.4751C39.0356 15.1226 38.9256 15.7076 38.705 16.2312C38.4848 16.7542 38.1887 17.1917 37.817 17.5427C37.4449 17.894 37.0045 18.1869 36.495 18.4204C35.9854 18.6547 35.4551 18.8233 34.9042 18.9267C34.3534 19.03 33.7817 19.082 33.19 19.082C31.3444 19.082 29.8503 18.6412 28.707 17.7598C27.5644 16.8783 26.9927 15.5837 26.9927 13.876H29.5334C29.5334 14.9505 29.8849 15.7457 30.5872 16.262C31.2895 16.7783 32.2049 17.0368 33.3342 17.0368C34.326 17.0368 35.1004 16.8335 35.658 16.4274C36.2161 16.0211 36.495 15.453 36.495 14.7231C36.495 14.2549 36.347 13.8727 36.0508 13.5766C35.7547 13.2805 35.4344 13.0708 35.0903 12.9468C34.746 12.8228 34.1471 12.6507 33.2928 12.4305C33.1966 12.4026 33.1207 12.382 33.0659 12.3685C31.2343 11.9003 30.0292 11.5147 29.4508 11.2114C28.2527 10.5917 27.6124 9.63456 27.5297 8.34039V8.05094C27.5297 6.74287 28.0221 5.69972 29.0066 4.92135C29.9915 4.14351 31.3098 3.75466 32.9625 3.75466C34.5601 3.75466 35.8613 4.13302 36.8666 4.89066C37.8718 5.64818 38.4021 6.81159 38.4574 8.3817H35.9989Z" fill="currentColor" data-v-38315573></path><path d="M46.3256 11.9964L50.7874 18.7512H47.9163L44.6729 13.6078L43.2686 14.9298V18.7512H40.9756V4.04354H43.2686V12.3271L47.5237 8.09235H50.4158L46.3256 11.9964Z" fill="currentColor" data-v-38315573></path><path d="M57.4165 11.9964L61.8783 18.7512H59.0072L55.7637 13.6078L54.3594 14.9298V18.7512H52.0664V4.04354H54.3594V12.3271L58.6145 8.09235H61.5066L57.4165 11.9964Z" fill="currentColor" data-v-38315573></path><path d="M65.5534 18.7511H63.1987V8.0922H65.5534V18.7511ZM65.5534 6.29534H63.1987V3.98162H65.5534V6.29534Z" fill="currentColor" data-v-38315573></path><path d="M70.831 10.6849C70.3143 11.3387 70.056 12.2305 70.056 13.3598C70.056 14.5303 70.3215 15.4529 70.8512 16.1278C71.3814 16.8027 72.1078 17.1398 73.0309 17.1398C73.9534 17.1398 74.6731 16.8095 75.1893 16.1485C75.7056 15.4874 75.9639 14.5716 75.9639 13.4011C75.9639 12.2305 75.6989 11.3219 75.1687 10.6744C74.6385 10.0272 73.8981 9.70365 72.9481 9.70365C72.053 9.70365 71.3473 10.0306 70.831 10.6849ZM78.2155 18.7512H76.0052V17.2845C75.3307 18.455 74.1943 19.0406 72.5968 19.0406C71.0959 19.0406 69.9013 18.531 69.0129 17.5118C68.1249 16.4927 67.6807 15.1226 67.6807 13.4011C67.6807 11.6936 68.1178 10.3336 68.9921 9.32148C69.8666 8.30915 71.0407 7.80331 72.5141 7.80331C74.0154 7.80331 75.1446 8.36095 75.9018 9.47637V4.04355H78.2155V18.7512Z" fill="currentColor" data-v-38315573></path><path d="M83.4188 10.6537C82.8817 11.3286 82.613 12.2512 82.613 13.4217C82.613 14.6198 82.8817 15.5563 83.4188 16.2312C83.9557 16.9057 84.6995 17.2431 85.6499 17.2431C86.5724 17.2431 87.2988 16.9023 87.829 16.2207C88.3593 15.539 88.6242 14.5992 88.6242 13.4011C88.6242 12.2305 88.3593 11.3113 87.829 10.6436C87.2988 9.9754 86.5657 9.64176 85.6292 9.64176C84.6928 9.64176 83.9557 9.9792 83.4188 10.6537ZM89.5539 9.311C90.5178 10.3302 91 11.7003 91 13.4217C91 15.1568 90.5213 16.5341 89.564 17.5531C88.6069 18.5723 87.3093 19.0819 85.6705 19.0819C84.0038 19.0819 82.6819 18.5723 81.7044 17.5531C80.7266 16.5341 80.2378 15.1568 80.2378 13.4217C80.2378 11.7003 80.73 10.3302 81.7145 9.311C82.6992 8.29224 84.0177 7.78273 85.6705 7.78273C87.2954 7.78273 88.5901 8.29224 89.5539 9.311Z" fill="currentColor" data-v-38315573></path></svg></header>', 1)),
        s.value?.type === "transition" ? (l(), c("div", MN, [
          se(C.$slots, "transition", { step: s.value }, () => [
            k[6] || (k[6] = Cn('<svg class="fu-onboarding__logo fu-onboarding__logo--lg" width="91" height="23" viewBox="0 0 91 23" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-38315573><path d="M22.9459 7.11506V18.8695C22.9459 21.0605 21.1697 22.8366 18.9789 22.8366H10.9739V22.7786C15.5829 22.2742 19.1832 18.3609 19.1832 13.6184C19.1832 10.7892 17.9136 8.16294 15.7048 6.40044L15.2119 6.01211L13.2524 8.47599L13.7393 8.86445C15.2003 10.0239 16.0351 11.7575 16.0351 13.6184C16.0351 16.6158 13.8438 19.1204 10.9739 19.6016C10.6435 19.6595 10.3071 19.6885 9.95931 19.6885H4.07049C1.87953 19.6885 0.103516 17.9124 0.103516 15.7215V3.96698C0.103516 1.77615 1.87953 7.36886e-06 4.07049 7.36886e-06H10.9739V0.249318C6.90408 1.20591 3.86616 4.86994 3.86616 9.22393C3.86616 12.0473 5.13581 14.6794 7.35037 16.436L7.83746 16.8303L9.79695 14.3664L9.30999 13.9721C7.85477 12.8125 7.01424 11.0849 7.01424 9.22393C7.01424 6.61499 8.66068 4.38875 10.9739 3.53065C11.6349 3.28134 12.3479 3.14809 13.0901 3.14809H18.9789C21.1697 3.14809 22.9459 4.9241 22.9459 7.11506Z" fill="#FFD37B" data-v-38315573></path><path d="M35.9989 8.3817C35.8474 6.66025 34.7803 5.79965 32.7972 5.79965C31.916 5.79965 31.2276 5.98195 30.7315 6.3468C30.2358 6.71166 29.9877 7.21107 29.9877 7.84425C29.9877 8.43652 30.1704 8.84282 30.5353 9.06341C30.9002 9.2836 31.7093 9.55233 32.9625 9.86866C33.2928 9.96531 33.5476 10.034 33.7269 10.0753C35.3657 10.4883 36.481 10.8604 37.0733 11.1906C38.3815 11.8931 39.0356 12.9882 39.0356 14.4751C39.0356 15.1226 38.9256 15.7076 38.705 16.2312C38.4848 16.7542 38.1887 17.1917 37.817 17.5427C37.4449 17.894 37.0045 18.1869 36.495 18.4204C35.9854 18.6547 35.4551 18.8233 34.9042 18.9267C34.3534 19.03 33.7817 19.082 33.19 19.082C31.3444 19.082 29.8503 18.6412 28.707 17.7598C27.5644 16.8783 26.9927 15.5837 26.9927 13.876H29.5334C29.5334 14.9505 29.8849 15.7457 30.5872 16.262C31.2895 16.7783 32.2049 17.0368 33.3342 17.0368C34.326 17.0368 35.1004 16.8335 35.658 16.4274C36.2161 16.0211 36.495 15.453 36.495 14.7231C36.495 14.2549 36.347 13.8727 36.0508 13.5766C35.7547 13.2805 35.4344 13.0708 35.0903 12.9468C34.746 12.8228 34.1471 12.6507 33.2928 12.4305C33.1966 12.4026 33.1207 12.382 33.0659 12.3685C31.2343 11.9003 30.0292 11.5147 29.4508 11.2114C28.2527 10.5917 27.6124 9.63456 27.5297 8.34039V8.05094C27.5297 6.74287 28.0221 5.69972 29.0066 4.92135C29.9915 4.14351 31.3098 3.75466 32.9625 3.75466C34.5601 3.75466 35.8613 4.13302 36.8666 4.89066C37.8718 5.64818 38.4021 6.81159 38.4574 8.3817H35.9989Z" fill="currentColor" data-v-38315573></path><path d="M46.3256 11.9964L50.7874 18.7512H47.9163L44.6729 13.6078L43.2686 14.9298V18.7512H40.9756V4.04354H43.2686V12.3271L47.5237 8.09235H50.4158L46.3256 11.9964Z" fill="currentColor" data-v-38315573></path><path d="M57.4165 11.9964L61.8783 18.7512H59.0072L55.7637 13.6078L54.3594 14.9298V18.7512H52.0664V4.04354H54.3594V12.3271L58.6145 8.09235H61.5066L57.4165 11.9964Z" fill="currentColor" data-v-38315573></path><path d="M65.5534 18.7511H63.1987V8.0922H65.5534V18.7511ZM65.5534 6.29534H63.1987V3.98162H65.5534V6.29534Z" fill="currentColor" data-v-38315573></path><path d="M70.831 10.6849C70.3143 11.3387 70.056 12.2305 70.056 13.3598C70.056 14.5303 70.3215 15.4529 70.8512 16.1278C71.3814 16.8027 72.1078 17.1398 73.0309 17.1398C73.9534 17.1398 74.6731 16.8095 75.1893 16.1485C75.7056 15.4874 75.9639 14.5716 75.9639 13.4011C75.9639 12.2305 75.6989 11.3219 75.1687 10.6744C74.6385 10.0272 73.8981 9.70365 72.9481 9.70365C72.053 9.70365 71.3473 10.0306 70.831 10.6849ZM78.2155 18.7512H76.0052V17.2845C75.3307 18.455 74.1943 19.0406 72.5968 19.0406C71.0959 19.0406 69.9013 18.531 69.0129 17.5118C68.1249 16.4927 67.6807 15.1226 67.6807 13.4011C67.6807 11.6936 68.1178 10.3336 68.9921 9.32148C69.8666 8.30915 71.0407 7.80331 72.5141 7.80331C74.0154 7.80331 75.1446 8.36095 75.9018 9.47637V4.04355H78.2155V18.7512Z" fill="currentColor" data-v-38315573></path><path d="M83.4188 10.6537C82.8817 11.3286 82.613 12.2512 82.613 13.4217C82.613 14.6198 82.8817 15.5563 83.4188 16.2312C83.9557 16.9057 84.6995 17.2431 85.6499 17.2431C86.5724 17.2431 87.2988 16.9023 87.829 16.2207C88.3593 15.539 88.6242 14.5992 88.6242 13.4011C88.6242 12.2305 88.3593 11.3113 87.829 10.6436C87.2988 9.9754 86.5657 9.64176 85.6292 9.64176C84.6928 9.64176 83.9557 9.9792 83.4188 10.6537ZM89.5539 9.311C90.5178 10.3302 91 11.7003 91 13.4217C91 15.1568 90.5213 16.5341 89.564 17.5531C88.6069 18.5723 87.3093 19.0819 85.6705 19.0819C84.0038 19.0819 82.6819 18.5723 81.7044 17.5531C80.7266 16.5341 80.2378 15.1568 80.2378 13.4217C80.2378 11.7003 80.73 10.3302 81.7145 9.311C82.6992 8.29224 84.0177 7.78273 85.6705 7.78273C87.2954 7.78273 88.5901 8.29224 89.5539 9.311Z" fill="currentColor" data-v-38315573></path></svg>', 1)),
            f("p", NN, w(s.value.question), 1)
          ], !0)
        ])) : (l(), c("div", DN, [
          f("h2", IN, w(s.value?.question), 1),
          s.value?.type === "pill-single" ? (l(), Z(Zs, {
            key: 0,
            "model-value": r.value[s.value.id],
            options: s.value.options ?? [],
            size: "md",
            color: t.color,
            "onUpdate:modelValue": k[1] || (k[1] = (E) => g(E))
          }, null, 8, ["model-value", "options", "color"])) : s.value?.type === "pill-multi" ? (l(), Z(Js, {
            key: 1,
            "model-value": r.value[s.value.id] ?? [],
            options: s.value.options ?? [],
            size: "md",
            color: t.color,
            "onUpdate:modelValue": k[2] || (k[2] = (E) => g(E))
          }, null, 8, ["model-value", "options", "color"])) : s.value?.type === "tag-input" ? (l(), Z(Xs, {
            key: 2,
            "model-value": r.value[s.value.id] ?? [],
            placeholder: s.value.placeholder,
            hint: s.value.hint,
            validate: s.value.validate,
            "onUpdate:modelValue": k[3] || (k[3] = (E) => g(E))
          }, null, 8, ["model-value", "placeholder", "hint", "validate"])) : s.value?.type === "text" ? (l(), Z(Oe, {
            key: 3,
            "model-value": r.value[s.value.id] ?? "",
            placeholder: s.value.placeholder,
            variant: "outline",
            size: "lg",
            formWrapperWidth: "100%",
            "onUpdate:modelValue": k[4] || (k[4] = (E) => g(E))
          }, null, 8, ["model-value", "placeholder"])) : s.value?.type === "select" ? (l(), Z(Fo, {
            key: 4,
            options: s.value.options ?? [],
            "model-value": n.value,
            placeholder: s.value.placeholder ?? "Select...",
            searchable: !0,
            variant: "button",
            size: "lg",
            "onUpdate:modelValue": k[5] || (k[5] = (E) => g(E))
          }, null, 8, ["options", "model-value", "placeholder"])) : A("", !0),
          s.value?.helperText ? (l(), c("p", ON, w(s.value.helperText), 1)) : A("", !0)
        ])),
        f("footer", RN, [
          f("div", $N, [
            f("div", {
              class: "fu-onboarding__progress-fill",
              style: ie({ width: d.value + "%" })
            }, null, 4)
          ]),
          t.footerNote ? (l(), c("p", xN, [
            Q(ee(ha), { size: 14 }),
            f("span", null, w(t.footerNote), 1)
          ])) : A("", !0),
          s.value?.type !== "transition" ? (l(), c("div", PN, [
            o.value > 0 ? (l(), Z(Se, {
              key: 0,
              variant: "outline",
              size: "md",
              text: "Back",
              icon: ee(zt),
              onClick: y
            }, null, 8, ["icon"])) : (l(), c("div", FN)),
            Q(Se, {
              variant: "solid",
              size: "md",
              disabled: !m.value,
              onClick: _
            }, {
              default: ce(() => [
                f("span", BN, [
                  de(w(v.value) + " ", 1),
                  Q(ee(Lt), { size: 16 })
                ])
              ]),
              _: 1
            }, 8, ["disabled"])
          ])) : A("", !0)
        ])
      ], 4)
    ], 4));
  }
}), LN = /* @__PURE__ */ ae(zN, [["__scopeId", "data-v-38315573"]]), VN = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: LN
}, Symbol.toStringTag, { value: "Module" })), HN = { class: "fu-pagination" }, jN = { class: "fu-pagination__left" }, UN = {
  key: 0,
  class: "fu-pagination__info"
}, WN = {
  key: 0,
  class: "fu-skeleton-cell fu-skeleton-cell--info"
}, YN = { class: "fu-pagination__controls" }, GN = ["disabled"], qN = ["disabled", "onClick"], KN = ["disabled"], QN = /* @__PURE__ */ le({
  __name: "FusionPagination",
  props: {
    page: {},
    pageSize: {},
    total: {},
    variant: { default: "default" },
    showInfo: { type: Boolean, default: !0 },
    siblingCount: { default: 1 },
    showPageSize: { type: Boolean, default: !0 },
    pageSizeOptions: { default: () => [10, 25, 50, 100] },
    loading: { type: Boolean, default: !1 }
  },
  emits: ["update:page", "update:pageSize"],
  setup(t, { emit: e }) {
    const n = t, a = e, i = I(
      () => n.pageSizeOptions.map((p) => ({ label: String(p), value: p }))
    ), o = I({
      get() {
        return i.value.find((p) => p.value === n.pageSize) || i.value[0];
      },
      set(p) {
        a("update:pageSize", p.value), a("update:page", 1);
      }
    }), r = I(() => Math.max(1, Math.ceil(n.total / n.pageSize))), s = I(
      () => n.total === 0 ? 0 : (n.page - 1) * n.pageSize + 1
    ), u = I(() => Math.min(n.page * n.pageSize, n.total));
    function d(p) {
      p < 1 || p > r.value || a("update:page", p);
    }
    function m(p) {
      p && d(p);
    }
    const v = I(() => {
      const p = [], h = r.value, g = n.page, y = n.siblingCount, b = Math.max(2, g - y), _ = Math.min(h - 1, g + y);
      p.push({ key: "p-1", label: "1", page: 1 }), b > 2 && p.push({ key: "e-left", label: "…", ellipsis: !0 });
      for (let C = b; C <= _; C++)
        p.push({ key: `p-${C}`, label: String(C), page: C });
      return _ < h - 1 && p.push({ key: "e-right", label: "…", ellipsis: !0 }), h > 1 && p.push({ key: `p-${h}`, label: String(h), page: h }), p;
    });
    return (p, h) => (l(), c("div", HN, [
      f("div", jN, [
        t.showInfo ? (l(), c("div", UN, [
          t.loading ? (l(), c("div", WN)) : (l(), c(L, { key: 1 }, [
            de(w(s.value) + "–" + w(u.value) + " of " + w(t.total), 1)
          ], 64))
        ])) : A("", !0),
        t.showPageSize ? (l(), Z(Oa, {
          key: 1,
          modelValue: o.value,
          "onUpdate:modelValue": h[0] || (h[0] = (g) => o.value = g),
          options: i.value,
          align: "left",
          size: "sm",
          disabled: t.loading
        }, null, 8, ["modelValue", "options", "disabled"])) : A("", !0)
      ]),
      f("div", YN, [
        f("button", {
          class: "fu-pagination__btn",
          disabled: t.page <= 1 || t.loading,
          onClick: h[1] || (h[1] = (g) => d(t.page - 1)),
          "aria-label": "Previous page"
        }, [
          Q(ee(zt), { class: "fu-pagination__icon" })
        ], 8, GN),
        t.loading ? (l(), c(L, { key: 0 }, oe(5, (g) => f("div", {
          key: `skel-${g}`,
          class: "fu-skeleton-cell fu-skeleton-cell--page"
        })), 64)) : t.variant !== "simple" ? (l(!0), c(L, { key: 1 }, oe(v.value, (g) => (l(), c("button", {
          key: g.key,
          class: X(["fu-pagination__btn", { active: g.page === t.page, ellipsis: g.ellipsis }]),
          disabled: !!g.ellipsis,
          onClick: (y) => m(g.page)
        }, w(g.label), 11, qN))), 128)) : A("", !0),
        f("button", {
          class: "fu-pagination__btn",
          disabled: t.page >= r.value || t.loading,
          onClick: h[2] || (h[2] = (g) => d(t.page + 1)),
          "aria-label": "Next page"
        }, [
          Q(ee(Lt), { class: "fu-pagination__icon" })
        ], 8, KN)
      ])
    ]));
  }
}), ZN = /* @__PURE__ */ ae(QN, [["__scopeId", "data-v-ef948ad4"]]), JN = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: ZN
}, Symbol.toStringTag, { value: "Module" })), XN = {
  key: 0,
  class: "fu-panel__header px-2"
}, e2 = {
  key: 0,
  class: "fu-panel__title-skeleton"
}, t2 = {
  key: 1,
  class: "fu-panel__title"
}, n2 = {
  key: 2,
  class: "fu-panel__actions"
}, a2 = { class: "fu-panel__body-wrapper" }, i2 = { class: "fu-panel__body scrollbar__control customScrollBar px-2" }, o2 = {
  key: 0,
  class: "fu-panel__skeleton-body"
}, r2 = /* @__PURE__ */ le({
  __name: "FuPanel",
  props: {
    title: {},
    basis: {},
    loading: { type: Boolean }
  },
  setup(t) {
    const e = t, n = I(() => e.basis ? typeof e.basis == "number" ? `${e.basis}px` : e.basis : "300px");
    return (a, i) => (l(), c("div", {
      class: "fu-panel",
      style: ie({ flexBasis: n.value })
    }, [
      t.title || a.$slots.actions ? (l(), c("div", XN, [
        t.loading ? (l(), c("div", e2)) : t.title ? (l(), c("h3", t2, w(t.title), 1)) : A("", !0),
        a.$slots.actions && !t.loading ? (l(), c("div", n2, [
          se(a.$slots, "actions")
        ])) : A("", !0)
      ])) : A("", !0),
      f("div", a2, [
        f("div", i2, [
          t.loading ? (l(), c("div", o2, [...i[0] || (i[0] = [
            Cn('<div class="skeleton-line" style="width:60%;height:14px;"></div><div class="skeleton-line" style="width:85%;height:14px;"></div><div class="skeleton-line" style="width:45%;height:14px;"></div><div class="skeleton-line" style="width:70%;height:14px;"></div><div class="skeleton-line" style="width:55%;height:14px;"></div>', 5)
          ])])) : se(a.$slots, "default", { key: 1 })
        ])
      ])
    ], 4));
  }
}), s2 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: r2
}, Symbol.toStringTag, { value: "Module" })), l2 = {
  key: 0,
  class: "fu-input-label"
}, u2 = {
  key: 0,
  class: "fu-input-required"
}, c2 = ["type", "placeholder", "disabled", "required"], d2 = {
  key: 1,
  class: "fu-input-error"
}, f2 = /* @__PURE__ */ le({
  __name: "FusionPasswordInput",
  props: {
    modelValue: { default: "" },
    label: { default: "" },
    placeholder: { default: "Enter password" },
    size: { default: "sm" },
    variant: { default: "outline" },
    disabled: { type: Boolean, default: !1 },
    error: { default: null },
    required: { type: Boolean, default: !1 },
    formWrapperWidth: { default: "fit-content" }
  },
  emits: ["update:modelValue"],
  setup(t, { emit: e }) {
    const n = t, a = e, i = M(n.modelValue), o = M(!1), r = () => {
      o.value = !o.value;
    };
    return he(i, (s) => a("update:modelValue", s)), he(
      () => n.modelValue,
      (s) => i.value = s
    ), (s, u) => (l(), c("div", {
      class: "fu-input-wrapper",
      style: ie({ width: t.formWrapperWidth })
    }, [
      t.label ? (l(), c("label", l2, [
        de(w(t.label) + " ", 1),
        t.required ? (l(), c("span", u2, "*")) : A("", !0)
      ])) : A("", !0),
      f("div", {
        class: X(["fu-input-container", [`fu-input--${t.size}`, `fu-input--${t.variant}`, { "fu-input--error": t.error }]])
      }, [
        je(f("input", xt(s.$attrs, {
          class: "fu-input",
          type: o.value ? "text" : "password",
          placeholder: t.placeholder,
          disabled: t.disabled,
          required: t.required,
          "onUpdate:modelValue": u[0] || (u[0] = (d) => i.value = d)
        }), null, 16, c2), [
          [Io, i.value]
        ]),
        f("button", {
          type: "button",
          class: "fu-password-toggle",
          onClick: r
        }, [
          (l(), Z(me(o.value ? ee(kl) : ee(Sl)), { class: "fu-password-icon" }))
        ])
      ], 2),
      t.error ? (l(), c("span", d2, w(t.error), 1)) : A("", !0)
    ], 4));
  }
}), m2 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: f2
}, Symbol.toStringTag, { value: "Module" })), h2 = { class: "fu-progress-stepper" }, v2 = { class: "fu-progress-bar" }, p2 = {
  key: 0,
  class: "fu-step-labels"
}, g2 = ["onClick"], y2 = { class: "circle" }, b2 = { class: "label" }, _2 = /* @__PURE__ */ le({
  __name: "FusionProgressStepper",
  props: {
    currentStep: {},
    totalSteps: {},
    showLabels: { type: Boolean },
    steps: {}
  },
  emits: ["step-click"],
  setup(t, { emit: e }) {
    const n = t, a = e, i = I(
      () => `${(n.currentStep + 1) / n.totalSteps * 100}%`
    ), o = (r) => a("step-click", r);
    return (r, s) => (l(), c("div", h2, [
      f("div", v2, [
        f("div", {
          class: "fu-progress-fill",
          style: ie({ width: i.value })
        }, null, 4)
      ]),
      t.showLabels && t.steps ? (l(), c("div", p2, [
        (l(!0), c(L, null, oe(t.steps, (u, d) => (l(), c("div", {
          key: d,
          class: X(["fu-step-label", { active: t.currentStep === d }]),
          onClick: (m) => o(d)
        }, [
          f("div", y2, w(d + 1), 1),
          f("div", b2, w(u.title), 1)
        ], 10, g2))), 128))
      ])) : A("", !0)
    ]));
  }
}), C2 = /* @__PURE__ */ ae(_2, [["__scopeId", "data-v-6ac0e869"]]), w2 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: C2
}, Symbol.toStringTag, { value: "Module" })), A2 = { class: "fu-range-control" }, k2 = {
  key: 0,
  class: "fu-range-label"
}, S2 = { class: "fu-range-track" }, T2 = ["min", "max", "step", "value"], E2 = { class: "fu-range-value" }, M2 = /* @__PURE__ */ le({
  __name: "FusionRangeControl",
  props: {
    modelValue: { default: 0 },
    min: { default: 0 },
    max: { default: 100 },
    step: { default: 1 },
    label: { default: "" },
    unit: { default: "" }
  },
  emits: ["update:modelValue", "change"],
  setup(t, { emit: e }) {
    const n = t, a = e;
    function i(r) {
      const s = r.target, u = Number(s.value);
      a("update:modelValue", u), a("change", u);
    }
    const o = I(
      () => n.unit ? `${n.modelValue}${n.unit}` : String(n.modelValue)
    );
    return (r, s) => (l(), c("div", A2, [
      t.label ? (l(), c("label", k2, w(t.label), 1)) : A("", !0),
      f("div", S2, [
        f("input", {
          type: "range",
          min: t.min,
          max: t.max,
          step: t.step,
          value: t.modelValue,
          onInput: i
        }, null, 40, T2),
        f("span", E2, w(o.value), 1)
      ])
    ]));
  }
}), N2 = /* @__PURE__ */ ae(M2, [["__scopeId", "data-v-9c1e4c91"]]), D2 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: N2
}, Symbol.toStringTag, { value: "Module" })), I2 = {};
function O2(t, e) {
  return null;
}
const R2 = /* @__PURE__ */ ae(I2, [["render", O2]]), $2 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: R2
}, Symbol.toStringTag, { value: "Module" })), x2 = {};
function P2(t, e) {
  return null;
}
const F2 = /* @__PURE__ */ ae(x2, [["render", P2]]), B2 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: F2
}, Symbol.toStringTag, { value: "Module" })), z2 = {};
function L2(t, e) {
  return null;
}
const V2 = /* @__PURE__ */ ae(z2, [["render", L2]]), H2 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: V2
}, Symbol.toStringTag, { value: "Module" })), j2 = {};
function U2(t, e) {
  return null;
}
const W2 = /* @__PURE__ */ ae(j2, [["render", U2]]), Y2 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: W2
}, Symbol.toStringTag, { value: "Module" })), G2 = {};
function q2(t, e) {
  return null;
}
const K2 = /* @__PURE__ */ ae(G2, [["render", q2]]), Q2 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: K2
}, Symbol.toStringTag, { value: "Module" })), Z2 = {}, J2 = { class: "fu-section-header" }, X2 = { class: "fu-section-header__left" }, eD = { class: "fu-section-header__right" };
function tD(t, e) {
  return l(), c("div", J2, [
    f("div", X2, [
      se(t.$slots, "left", {}, void 0, !0)
    ]),
    f("div", eD, [
      se(t.$slots, "right", {}, void 0, !0)
    ])
  ]);
}
const nD = /* @__PURE__ */ ae(Z2, [["render", tD], ["__scopeId", "data-v-b7f6e763"]]), aD = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: nD
}, Symbol.toStringTag, { value: "Module" })), iD = { class: "fu-sidebar__list" }, oD = ["onClick", "onMouseenter"], rD = { class: "fu-sidebar__icon-wrapper" }, sD = {
  key: 0,
  class: "fu-sidebar__badge"
}, lD = {
  key: 0,
  class: "fu-sidebar__label"
}, uD = /* @__PURE__ */ le({
  __name: "FusionSidebar",
  props: {
    modules: {},
    activeModule: {},
    backgroundColor: {},
    borderRadius: {},
    hideLabels: { type: Boolean }
  },
  emits: ["select"],
  setup(t) {
    const e = t;
    M(null);
    const n = M(null), a = M({}), i = I(() => ({
      "--fu-sidebar-bg": e.backgroundColor ?? "var(--fu-brand-background)",
      "--fu-sidebar-radius": e.borderRadius ?? "0px",
      width: e.hideLabels ? "54px" : "70px"
    }));
    function o(s, u) {
      if (!e.hideLabels) return;
      const d = e.modules.find((v) => v.name === u);
      n.value = d?.label ?? u;
      const m = s.currentTarget.getBoundingClientRect();
      a.value = {
        position: "fixed",
        left: `${m.right + 8}px`,
        top: `${m.top + m.height / 2}px`,
        transform: "translateY(-50%)",
        zIndex: "99999"
      };
    }
    function r() {
      n.value = null;
    }
    return (s, u) => (l(), c("nav", {
      class: "fu-sidebar",
      style: ie(i.value)
    }, [
      f("ul", iD, [
        (l(!0), c(L, null, oe(t.modules, (d) => (l(), c("li", {
          key: d.name,
          class: X({ active: t.activeModule === d.name })
        }, [
          f("div", {
            class: X(["fu-sidebar__item", { "fu-sidebar__item--collapsed": t.hideLabels }]),
            onClick: (m) => s.$emit("select", d),
            onMouseenter: (m) => o(m, d.name),
            onMouseleave: r
          }, [
            f("div", rD, [
              (l(), Z(me(d.icon), {
                class: "fu-sidebar__icon",
                size: 20
              })),
              d.count ? (l(), c("span", sD, w(d.count > 99 ? "99+" : d.count), 1)) : A("", !0)
            ]),
            t.hideLabels ? A("", !0) : (l(), c("span", lD, w(d.label), 1))
          ], 42, oD)
        ], 2))), 128))
      ]),
      (l(), Z(Ee, { to: "body" }, [
        t.hideLabels && n.value ? (l(), c("span", {
          key: 0,
          class: "fu-sidebar__tooltip",
          style: ie(a.value)
        }, w(n.value), 5)) : A("", !0)
      ]))
    ], 4));
  }
}), cD = /* @__PURE__ */ ae(uD, [["__scopeId", "data-v-3af597f2"]]), dD = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: cD
}, Symbol.toStringTag, { value: "Module" })), fD = ["disabled", "aria-expanded"], mD = ["aria-expanded", "disabled"], hD = ["onClick"], vD = ["src"], pD = { class: "fu-split-button__option-label" }, gD = /* @__PURE__ */ le({
  __name: "FusionSplitButton",
  props: {
    options: {},
    disabled: { type: Boolean },
    size: {},
    variant: {},
    color: {},
    icon: {},
    align: {},
    buttonWidth: {}
  },
  emits: ["main-action", "select"],
  setup(t, { emit: e }) {
    const n = t, a = e, i = M(!1), o = M(null), r = M(null), s = I(() => n.align ?? "right"), u = M({}), d = I(() => `fu-split-button--${n.size ?? "sm"}`), m = I(() => `fu-split-button--${n.variant ?? "solid"}`), v = I(() => ({
      ...n.color ? { "--fu-split-bg": n.color } : {},
      ...n.buttonWidth ? { width: n.buttonWidth } : {}
    }));
    function p() {
      n.disabled || (i.value = !i.value, i.value && ge(() => {
        h(), window.addEventListener("click", g), window.addEventListener("resize", h);
      }));
    }
    function h() {
      if (!r.value || !o.value) return;
      const _ = r.value.getBoundingClientRect(), C = o.value.offsetWidth, k = {
        top: `${_.bottom + window.scrollY + 4}px`,
        left: `${_.left + window.scrollX}px`
      };
      s.value === "right" ? k.left = `${_.right - C + window.scrollX}px` : s.value === "center" && (k.left = `${_.left + _.width / 2 - C / 2 + window.scrollX}px`), u.value = {
        position: "absolute",
        ...k,
        zIndex: "1000"
      };
    }
    function g(_) {
      r.value?.contains(_.target) || o.value?.contains(_.target) || (i.value = !1, window.removeEventListener("click", g), window.removeEventListener("resize", h));
    }
    function y() {
      n.disabled || a("main-action");
    }
    function b(_) {
      _.onClick && _.onClick(), a("select", _), i.value = !1, window.removeEventListener("click", g), window.removeEventListener("resize", h);
    }
    return we(() => {
      Ae(() => {
        window.removeEventListener("click", g), window.removeEventListener("resize", h);
      });
    }), (_, C) => (l(), c("div", {
      class: X(["fu-split-button", [d.value, m.value]]),
      style: ie(v.value),
      ref_key: "splitButtonRef",
      ref: r
    }, [
      f("button", {
        class: "fu-split-button__main",
        disabled: t.disabled,
        onClick: y,
        type: "button",
        "aria-haspopup": "true",
        "aria-expanded": i.value
      }, [
        t.icon ? (l(), Z(me(t.icon), {
          key: 0,
          class: "fu-split-button__icon"
        })) : A("", !0),
        f("span", null, [
          se(_.$slots, "default", {}, void 0, !0)
        ])
      ], 8, fD),
      f("button", {
        class: "fu-split-button__toggle",
        onClick: p,
        "aria-expanded": i.value,
        disabled: t.disabled,
        type: "button",
        "aria-label": "Toggle dropdown"
      }, [
        Q(ee(xe))
      ], 8, mD),
      (l(), Z(Ee, { to: "body" }, [
        Q(Ve, { name: "fade" }, {
          default: ce(() => [
            i.value ? (l(), c("div", {
              key: 0,
              class: X(["fu-split-button__dropdown", [`fu-split-button__dropdown--${s.value}`]]),
              ref_key: "dropdownRef",
              ref: o,
              style: ie(u.value)
            }, [
              (l(!0), c(L, null, oe(t.options, (k) => (l(), c("div", {
                key: k.value,
                class: "fu-split-button__option",
                onClick: (E) => b(k)
              }, [
                k.type === "icon" ? (l(), Z(me(k.icon), {
                  key: 0,
                  class: "fu-split-button__option-icon"
                })) : k.type === "image" ? (l(), c("img", {
                  key: 1,
                  src: k.imageUrl,
                  class: "fu-split-button__option-image",
                  alt: ""
                }, null, 8, vD)) : A("", !0),
                f("span", pD, w(k.label), 1)
              ], 8, hD))), 128))
            ], 6)) : A("", !0)
          ]),
          _: 1
        })
      ]))
    ], 6));
  }
}), yD = /* @__PURE__ */ ae(gD, [["__scopeId", "data-v-569e263d"]]), bD = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: yD
}, Symbol.toStringTag, { value: "Module" })), _D = {
  key: 0,
  class: "fu-empty__visual"
}, CD = ["src", "alt"], wD = { class: "fu-empty__body" }, AD = { class: "fu-empty__title" }, kD = {
  key: 0,
  class: "fu-empty__description"
}, SD = {
  key: 1,
  class: "fu-empty__content"
}, TD = {
  key: 2,
  class: "fu-empty__actions"
}, ED = {
  key: 3,
  class: "fu-empty__cards"
}, MD = /* @__PURE__ */ le({
  __name: "FusionEmpty",
  props: {
    title: {},
    description: {},
    visual: {},
    primaryAction: {},
    secondaryActions: {},
    cards: {},
    size: { default: "md" },
    variant: { default: "default" }
  },
  setup(t) {
    return (e, n) => (l(), c("div", {
      class: X(["fu-empty", [`fu-empty--${t.size}`, `fu-empty--${t.variant}`]])
    }, [
      t.visual && t.visual.type !== "none" ? (l(), c("div", _D, [
        t.visual.type === "icon" ? (l(), Z(me(t.visual.value), {
          key: 0,
          class: "fu-empty__icon"
        })) : t.visual.type === "image" ? (l(), c("img", {
          key: 1,
          src: t.visual.src,
          alt: t.visual.alt,
          class: "fu-empty__image"
        }, null, 8, CD)) : A("", !0)
      ])) : A("", !0),
      f("div", wD, [
        f("p", AD, w(t.title), 1),
        t.description ? (l(), c("p", kD, w(t.description), 1)) : A("", !0)
      ]),
      e.$slots.default ? (l(), c("div", SD, [
        se(e.$slots, "default", {}, void 0, !0)
      ])) : A("", !0),
      t.primaryAction || t.secondaryActions?.length ? (l(), c("div", TD, [
        t.primaryAction ? (l(), Z(Se, {
          key: 0,
          text: t.primaryAction.label,
          buttonWidth: "fit-content",
          onClick: n[0] || (n[0] = (a) => t.primaryAction.onClick?.())
        }, null, 8, ["text"])) : A("", !0),
        (l(!0), c(L, null, oe(t.secondaryActions, (a) => (l(), Z(Se, {
          key: a.label,
          text: a.label,
          buttonWidth: "fit-content",
          variant: "subtle",
          onClick: (i) => a.onClick?.()
        }, null, 8, ["text", "onClick"]))), 128))
      ])) : A("", !0),
      t.cards?.length ? (l(), c("div", ED, [
        (l(!0), c(L, null, oe(t.cards, (a, i) => (l(), Z(Bo, {
          key: a.title + i,
          title: a.title,
          description: a.description,
          image: a.image,
          initial: a.initial,
          color: a.color,
          onClick: (o) => a.onClick?.()
        }, null, 8, ["title", "description", "image", "initial", "color", "onClick"]))), 128))
      ])) : A("", !0)
    ], 2));
  }
}), ND = /* @__PURE__ */ ae(MD, [["__scopeId", "data-v-6b182dfb"]]), DD = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: ND
}, Symbol.toStringTag, { value: "Module" })), ID = ["aria-checked", "disabled"], OD = /* @__PURE__ */ le({
  __name: "FusionSwitch",
  props: {
    modelValue: { type: Boolean },
    disabled: { type: Boolean },
    size: {}
  },
  emits: ["update:modelValue"],
  setup(t, { emit: e }) {
    const n = t, a = e;
    function i() {
      n.disabled || a("update:modelValue", !n.modelValue);
    }
    const o = I(() => {
      switch (n.size) {
        case "sm":
          return "fu-switch--sm";
        case "lg":
          return "fu-switch--lg";
        default:
          return "fu-switch--md";
      }
    });
    return (r, s) => (l(), c("button", {
      type: "button",
      class: X(["fu-switch", [{ "fu-switch--checked": t.modelValue, disabled: t.disabled }, o.value]]),
      role: "switch",
      "aria-checked": t.modelValue,
      disabled: t.disabled,
      onClick: i
    }, [...s[0] || (s[0] = [
      f("span", { class: "fu-switch__thumb" }, null, -1)
    ])], 10, ID));
  }
}), RD = /* @__PURE__ */ ae(OD, [["__scopeId", "data-v-c8285d1a"]]), $D = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: RD
}, Symbol.toStringTag, { value: "Module" })), xD = { class: "fu-theme-selector" }, PD = { class: "fu-theme-grid" }, FD = ["onClick"], BD = {
  key: 0,
  class: "fu-theme-check"
}, zD = { class: "fu-theme-label" }, LD = /* @__PURE__ */ le({
  __name: "FuThemeSelector",
  props: {
    modelValue: { default: "auto" },
    themes: { default: () => [
      { key: "light", name: "Day Light" },
      { key: "dark", name: "Timeless Night" },
      { key: "auto", name: "Automatic" }
    ] }
  },
  emits: ["update:modelValue"],
  setup(t, { emit: e }) {
    const n = e;
    function a(i) {
      n("update:modelValue", i);
    }
    return (i, o) => (l(), c("div", xD, [
      f("div", PD, [
        (l(!0), c(L, null, oe(t.themes, (r) => (l(), c("div", {
          key: r.key,
          class: X(["fu-theme-card", { "is-active": t.modelValue === r.key }]),
          onClick: (s) => a(r.key),
          tabindex: "0",
          role: "button"
        }, [
          f("div", {
            class: X(["fu-theme-preview", `fu-theme-preview--${r.key}`])
          }, [
            o[0] || (o[0] = f("div", { class: "fu-theme-header" }, null, -1)),
            o[1] || (o[1] = f("div", { class: "fu-theme-body" }, null, -1)),
            o[2] || (o[2] = f("div", { class: "fu-theme-footer" }, null, -1)),
            t.modelValue === r.key ? (l(), c("div", BD, [
              Q(ee(Pn), { class: "fu-check-icon" })
            ])) : A("", !0)
          ], 2),
          f("span", zD, w(r.name), 1)
        ], 10, FD))), 128))
      ])
    ]));
  }
}), VD = /* @__PURE__ */ ae(LD, [["__scopeId", "data-v-405e1dba"]]), HD = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: VD
}, Symbol.toStringTag, { value: "Module" })), jD = { class: "fu-toolbar__left" }, UD = { class: "fu-toolbar__actions" }, WD = /* @__PURE__ */ le({
  __name: "FusionToolbar",
  props: {
    wrap: { type: Boolean, default: !0 },
    gap: { type: String, default: "md" },
    align: { type: String, default: "center" }
  },
  setup(t) {
    const e = t, n = I(() => ({
      "flex--wrap": e.wrap,
      [`flex--gap-${e.gap}`]: !!e.gap,
      [`align--${e.align}`]: !!e.align
    }));
    return (a, i) => (l(), c("div", {
      class: X(["fu-toolbar", n.value])
    }, [
      f("div", jD, [
        se(a.$slots, "left", {}, void 0, !0)
      ]),
      f("div", UD, [
        se(a.$slots, "right", {}, void 0, !0)
      ])
    ], 2));
  }
}), YD = /* @__PURE__ */ ae(WD, [["__scopeId", "data-v-aa44a495"]]), GD = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: YD
}, Symbol.toStringTag, { value: "Module" })), qD = {
  name: "FuUnderConstruction",
  props: {
    imageSrc: {
      type: String,
      default: "/images/development-code.svg"
      // replace with your image path
    },
    imageAlt: {
      type: String,
      default: "Page under construction illustration"
    },
    title: {
      type: String,
      default: "Page Under Construction"
    },
    subtitle: {
      type: String,
      default: "We're working hard to get this ready. Check back soon!"
    }
  }
}, KD = { class: "fu-under-construction" }, QD = { class: "fu-under-construction__inner" }, ZD = ["src", "alt"], JD = { class: "fu-under-construction__content" }, XD = { class: "fu-under-construction__title" }, eI = { class: "fu-under-construction__subtitle" };
function tI(t, e, n, a, i, o) {
  return l(), c("div", KD, [
    f("div", QD, [
      f("img", {
        class: "fu-under-construction__image",
        src: n.imageSrc,
        alt: n.imageAlt
      }, null, 8, ZD),
      f("div", JD, [
        f("h1", XD, w(n.title), 1),
        f("p", eI, w(n.subtitle), 1),
        se(t.$slots, "default")
      ])
    ])
  ]);
}
const nI = /* @__PURE__ */ ae(qD, [["render", tI]]), aI = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: nI
}, Symbol.toStringTag, { value: "Module" }));
function No() {
  return ({ message: t, type: e = "info", duration: n = 3500 }) => {
    const a = document.createElement("div");
    document.body.appendChild(a);
    const i = ll(Qs, { message: t, type: e, duration: n });
    i.mount(a), setTimeout(() => {
      i.unmount(), document.body.removeChild(a);
    }, n + 500);
  };
}
const el = localStorage.getItem("theme") || "auto", Ot = M(el);
function iI() {
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}
function ui(t) {
  const e = t === "auto" ? iI() : t;
  document.documentElement.setAttribute("data-theme", e), localStorage.setItem("theme", t);
}
ui(el);
window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", () => {
  Ot.value === "auto" && ui("auto");
});
Ma(() => ui(Ot.value));
function sI() {
  return {
    theme: Ot,
    setTheme: (t) => {
      Ot.value = t;
    },
    toggleTheme: () => {
      Ot.value = Ot.value === "dark" ? "light" : "dark";
    }
  };
}
const Do = /* @__PURE__ */ Object.assign({ "./components/StatusDropdown/FusionStatusDropdown.vue": Wl, "./components/TextInput/EditableDisplayField.vue": ru, "./components/TextInput/FusionTextInput.vue": vu, "./components/accordion/FusionAccordion.vue": Cu, "./components/actionButton/FusionActionButton.vue": Kl, "./components/activityTimeline/FuActivityTimeline.vue": Ou, "./components/alertBanner/FusionAlertBanner.vue": ju, "./components/autocomplete/FusionAutocomplete.vue": dc, "./components/avatar/FuAvatar.vue": eu, "./components/avatar/FuAvatarGroup.vue": hc, "./components/badge/FusionBadge.vue": gc, "./components/button/FusionButton.vue": wc, "./components/buttonTab/FusionButtonTab.vue": Ic, "./components/cards/FusionInfoCard.vue": Bc, "./components/cards/FusionStatCard.vue": Kc, "./components/checkbox/FusionCheckbox.vue": ed, "./components/codeInput/FusionCodeInput.vue": sd, "./components/colourPallet/FuColorPopover.vue": hd, "./components/combobox/FuCombobox.vue": Sd, "./components/datePicker/dateField/FusionDatePicker.vue": Qd, "./components/datePicker/datePickerBackup.vue": gf, "./components/datePicker/monthPicker/FusionMonthPicker.vue": Ef, "./components/datePicker/plainDate/FusionPlainDatePicker.vue": jf, "./components/datePicker/time/FusionTimePicker.vue": Gf, "./components/documentViewer/Contract/ContractRenderer.vue": Zh, "./components/documentViewer/Contract/DateCaptureField.vue": Xm, "./components/documentViewer/Contract/FieldCaptureOverlay.vue": Yh, "./components/documentViewer/Contract/FileUploadCaptureModal.vue": dh, "./components/documentViewer/Contract/InitialsCaptureModal.vue": Ym, "./components/documentViewer/Contract/PageThumbnailStrip.vue": lv, "./components/documentViewer/Contract/SignatureCaptureModal.vue": xm, "./components/documentViewer/DocumentViewerShell.vue": jv, "./components/documentViewer/components/MoreActionsDrawer.vue": wv, "./components/drawer/FusionDrawer.vue": Zv, "./components/dropdown/FusionDropdownButton.vue": tp, "./components/dropdownInline/FusionDropdownInline.vue": sp, "./components/dropdownMenu/DropdownMenu.vue": yp, "./components/editWrapper/EditableFieldWrapper.vue": Tp, "./components/editor/blockContent/BlockRenderer.vue": Np, "./components/editor/contract/FuContractRenderer.vue": tr, "./components/editor/contract/FuSignaturePad.vue": Op, "./components/editor/dividerRender/DividerRenderer.vue": nr, "./components/editor/documentRender/FuDocumentRenderer.vue": dg, "./components/editor/imageRender/ImageRenderer.vue": ir, "./components/editor/invoiceRender/FuinvoicePreview.vue": or, "./components/editor/pageRender/FormRender.vue": Pb, "./components/editor/pageRender/PageRenderer.vue": lg, "./components/editor/questionRender/FuQuestionRenderer.vue": ur, "./components/editor/renders/FuEmbedRenderer.vue": CS, "./components/editor/scheduler/FuSchedulerWidget.vue": Ws, "./components/editor/serviceRender/ServiceCard.vue": IS, "./components/editor/serviceRender/ServiceRenderer.vue": Gs, "./components/editor/textRender/TextRenderer.vue": qs, "./components/editor/videoRender/FuVideoRenderer.vue": Ks, "./components/fileUploader/FusionUpload.vue": lh, "./components/filterDropdown/FusionFilterDropdown.vue": GS, "./components/floatingHeader/FusionSmartHeader.vue": JS, "./components/icons/FusionTrashIcon.vue": nT, "./components/items/activity/FusionActivityItem.vue": pT, "./components/items/attachments/FusionAttachment.vue": MT, "./components/items/notes/FusionNoteCard.vue": BT, "./components/items/task/FusionTaskItem.vue": QT, "./components/kanban/Kanban.vue": pE, "./components/layout/AppShell.vue": IE, "./components/list/FusionListView.vue": KE, "./components/list/ListviewBackup.vue": dM, "./components/list/TableBackup.vue": wM, "./components/modal/FusionConfirmDialog.vue": DM, "./components/modal/FusionModal.vue": sm, "./components/modal/FusionPreviewModal.vue": zM, "./components/modulemenu/FusionModuleMenu.vue": WM, "./components/notification/FuNotification.vue": QM, "./components/notifications/FuAlert.vue": aN, "./components/notifications/FusionToast.vue": sN, "./components/onboarding/FusionOnboarding.vue": VN, "./components/onboarding/FusionPillMultiSelect.vue": gN, "./components/onboarding/FusionPillSelect.vue": dN, "./components/onboarding/FusionTagInput.vue": TN, "./components/pagination/FusionPagination.vue": JN, "./components/panel/FuPanel.vue": s2, "./components/password/FusionPasswordInput.vue": m2, "./components/popover/FuPopover.vue": Km, "./components/progress/FusionProgressStepper.vue": w2, "./components/radio/FusionRadio.vue": Qb, "./components/rangeControl/FusionRangeControl.vue": D2, "./components/renderer/DocumentRenderer.vue": Qf, "./components/renderer/widgets/DividerWidget.vue": $2, "./components/renderer/widgets/ImageWidget.vue": B2, "./components/renderer/widgets/ServiceWidget.vue": H2, "./components/renderer/widgets/TextWidget.vue": Y2, "./components/renderer/widgets/VideoWidget.vue": Q2, "./components/section/FuSectionHeader.vue": aD, "./components/sidebarmenu/FusionSidebar.vue": dD, "./components/splitButton/FusionSplitButton.vue": bD, "./components/states/FusionEmpty.vue": DD, "./components/switch/FusionSwitch.vue": $D, "./components/tabs/FusionTab.vue": _m, "./components/textArea/FusionTextArea.vue": Ub, "./components/theme/FuThemeSelector.vue": HD, "./components/toolbar/FusionToolbar.vue": GD, "./components/utilities/Fuunderconstruction.vue": aI }), lI = {
  install(t) {
    for (const e in Do) {
      const n = Do[e].default, a = n.name || e.split("/").pop()?.replace(".vue", "");
      t.component(a, n);
    }
    t.config.globalProperties.FusionToast = (e) => {
      No()(e);
    }, typeof window < "u" && (window.FusionToast = (e) => {
      No()(e);
    });
  }
};
export {
  qe as FuAvatar,
  Hu as FusionAlertBanner,
  Bo as FusionInfoCard,
  Nt as UserStatus,
  lI as default,
  sI as useTheme,
  No as useToast
};
//# sourceMappingURL=fusion-binary-ui.es.js.map
