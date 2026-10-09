import { inject as il, h as bt, defineComponent as le, ref as M, reactive as Qt, watch as he, onMounted as we, onBeforeUnmount as Ae, openBlock as l, createElementBlock as c, normalizeClass as X, toDisplayString as w, createCommentVNode as A, createElementVNode as f, createBlock as Z, resolveDynamicComponent as me, normalizeStyle as ie, createVNode as Q, unref as ee, Teleport as Ee, Transition as Ve, withCtx as ce, Fragment as L, renderList as oe, nextTick as ge, computed as O, withModifiers as ue, createTextVNode as de, renderSlot as se, withDirectives as Ue, mergeProps as Pt, vModelDynamic as Ro, vShow as $o, TransitionGroup as ol, createStaticVNode as An, withKeys as $e, vModelText as tt, KeepAlive as rl, watchEffect as Da, toRaw as sl, defineAsyncComponent as et, toHandlers as ll, useCssVars as ul, useSlots as cl, shallowRef as dl, resolveComponent as xo, createApp as fl } from "vue";
/**
 * @license @lucide/vue v1.54.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ht = {
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
 * @license @lucide/vue v1.54.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const fi = (...t) => t.filter((e, n, a) => !!e && e.trim() !== "" && a.indexOf(e) === n).join(" ").trim();
/**
 * @license @lucide/vue v1.54.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
function Jn(t) {
  return t != null;
}
function ml(t, e = {}) {
  const n = e.attributeNames ?? {}, a = (p) => n[p] ?? p, i = t.size ?? t.width ?? ht.width, o = t.size ?? t.height ?? ht.height, r = t.aliases?.filter((p) => typeof p == "string" && p.trim() !== "").map((p) => `lucide-${p}`) ?? [], s = [...t.name ? [`lucide-${t.name}`] : [], ...r], u = e.className?.split(" ").filter(Boolean) ?? [], d = e.includeDefaultClasses === !1 ? fi(...u) : fi("lucide", ...s, ...u), m = e.absoluteStrokeWidth ? Number(e.strokeWidth ?? ht["stroke-width"]) * Number(t.size ?? t.width ?? ht.width) / Number(e.size ?? e.width ?? ht.width) : e.strokeWidth ?? ht["stroke-width"];
  return [
    "svg",
    {
      ...Object.entries(ht).reduce((p, [h, y]) => (p[a(h)] = y, p), {}),
      ..."color" in e && e.color && {
        [a("stroke")]: e.color
      },
      ..."size" in e && Jn(e.size) && {
        [a("width")]: e.size,
        [a("height")]: e.size
      },
      ..."width" in e && Jn(e.width) && {
        [a("width")]: e.width
      },
      ..."height" in e && Jn(e.height) && {
        [a("height")]: e.height
      },
      [a("stroke-width")]: m,
      ...d && {
        [a("class")]: d
      },
      [a("viewBox")]: `0 0 ${i} ${o}`,
      ...e.hasA11yProp === !1 ? {
        [a("aria-hidden")]: "true"
      } : {},
      ..."attributes" in e && e.attributes
    },
    t.node.map((p) => {
      const [h, y, g] = p, b = e.nonScalingStroke ? { [a("vector-effect")]: "non-scaling-stroke", ...y } : y;
      return g ? [h, b, g] : [h, b];
    })
  ];
}
/**
 * @license @lucide/vue v1.54.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const hl = (t) => {
  for (const e in t)
    if (e.startsWith("aria-") || e === "role" || e === "title")
      return !0;
  return !1;
};
/**
 * @license @lucide/vue v1.54.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const rn = (t) => t === "";
/**
 * @license @lucide/vue v1.54.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const vl = (t) => t?.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
/**
 * @license @lucide/vue v1.54.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const pl = /* @__PURE__ */ Symbol("lucide-icons");
function gl() {
  return il(pl, {});
}
/**
 * @license @lucide/vue v1.54.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const yl = ({
  name: t,
  iconNode: e,
  "icon-node": n,
  icon: a = {
    name: t && vl(t),
    node: e ?? n ?? [],
    size: 24,
    aliases: []
  },
  absoluteStrokeWidth: i,
  "absolute-stroke-width": o,
  nonScalingStroke: r,
  "non-scaling-stroke": s,
  strokeWidth: u,
  "stroke-width": d,
  size: m,
  width: v = m,
  height: p = m,
  color: h,
  ...y
}, { slots: g }) => {
  const {
    size: b,
    color: _,
    strokeWidth: C = 2,
    absoluteStrokeWidth: k = !1,
    nonScalingStroke: E = !1,
    class: D = ""
  } = gl(), x = rn(i) || rn(o) || i === !0 || o === !0 || k === !0, I = rn(r) || rn(s) || r === !0 || s === !0 || E === !0;
  delete y.class;
  const V = g.default?.(), [, j, R = []] = ml(a, {
    color: h ?? _,
    width: v ?? m ?? b,
    height: p ?? m ?? b,
    strokeWidth: u ?? d ?? C,
    absoluteStrokeWidth: x,
    nonScalingStroke: I,
    className: D,
    hasA11yProp: V != null && V.length > 0 || hl(y),
    attributes: y
  });
  return bt("svg", j, [
    ...R.map(([H, U]) => bt(H, U)),
    ...V ?? []
  ]);
};
/**
 * @license @lucide/vue v1.54.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
function ve(t, e = []) {
  const n = typeof t == "string" ? {
    name: t,
    node: e
  } : t;
  return (a, { slots: i }) => bt(
    yl,
    {
      ...a,
      icon: n
    },
    i.default ? { default: i.default } : void 0
  );
}
/**
 * @license @lucide/vue v1.54.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const bl = {
  name: "arrow-right",
  size: 24,
  node: [
    ["path", { d: "M5 12h14", key: "1ays0h" }],
    ["path", { d: "m12 5 7 7-7 7", key: "xquz4c" }]
  ]
}, _l = ve(bl);
/**
 * @license @lucide/vue v1.54.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Cl = {
  name: "ban",
  size: 24,
  node: [
    ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
    ["path", { d: "M4.929 4.929 19.07 19.071", key: "196cmz" }]
  ]
}, wl = ve(Cl);
/**
 * @license @lucide/vue v1.54.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Al = {
  name: "bell",
  size: 24,
  node: [
    ["path", { d: "M10.268 21a2 2 0 0 0 3.464 0", key: "vwvbt9" }],
    [
      "path",
      {
        d: "M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326",
        key: "11g9vi"
      }
    ]
  ]
}, kl = ve(Al);
/**
 * @license @lucide/vue v1.54.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Sl = {
  name: "calendar-days",
  size: 24,
  node: [
    ["path", { d: "M8 2v3", key: "1ioesn" }],
    ["path", { d: "M16 2v3", key: "otl347" }],
    ["rect", { x: "3", y: "3", width: "18", height: "18", rx: "2", key: "h1oib" }],
    ["path", { d: "M3 9h18", key: "1pudct" }],
    ["path", { d: "M8 13h.01", key: "1sbv64" }],
    ["path", { d: "M12 13h.01", key: "y0uutt" }],
    ["path", { d: "M16 13h.01", key: "wip0gl" }],
    ["path", { d: "M8 17h.01", key: "p3bg7i" }],
    ["path", { d: "M12 17h.01", key: "p32p05" }],
    ["path", { d: "M16 17h.01", key: "ql8jdd" }]
  ]
}, Tl = ve(Sl);
/**
 * @license @lucide/vue v1.54.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const El = {
  name: "case-sensitive",
  size: 24,
  node: [
    ["path", { d: "m2 16 4.039-9.69a.5.5 0 0 1 .923 0L11 16", key: "d5nyq2" }],
    ["path", { d: "M22 9v7", key: "pvm9v3" }],
    ["path", { d: "M3.304 13h6.392", key: "1q3zxz" }],
    ["circle", { cx: "18.5", cy: "12.5", r: "3.5", key: "z97x68" }]
  ]
}, Ml = ve(El);
/**
 * @license @lucide/vue v1.54.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Nl = {
  name: "check",
  size: 24,
  node: [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]]
}, Bn = ve(Nl);
/**
 * @license @lucide/vue v1.54.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Dl = {
  name: "chevron-down",
  size: 24,
  node: [["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]]
}, xe = ve(Dl);
/**
 * @license @lucide/vue v1.54.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Il = {
  name: "chevron-left",
  size: 24,
  node: [["path", { d: "m15 18-6-6 6-6", key: "1wnfg3" }]]
}, Lt = ve(Il);
/**
 * @license @lucide/vue v1.54.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ol = {
  name: "chevron-right",
  size: 24,
  node: [["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }]]
}, Vt = ve(Ol);
/**
 * @license @lucide/vue v1.54.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Rl = {
  name: "chevron-up",
  size: 24,
  node: [["path", { d: "m18 15-6-6-6 6", key: "153udz" }]]
}, Ia = ve(Rl);
/**
 * @license @lucide/vue v1.54.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const $l = {
  name: "circle-alert",
  size: 24,
  node: [
    ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
    ["line", { x1: "12", x2: "12", y1: "8", y2: "12", key: "1pkeuh" }],
    ["line", { x1: "12", x2: "12.01", y1: "16", y2: "16", key: "4dfq90" }]
  ],
  aliases: ["alert-circle"]
}, xl = ve($l);
/**
 * @license @lucide/vue v1.54.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Pl = {
  name: "circle-check",
  size: 24,
  node: [
    ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
    ["path", { d: "m16 9-5.5 5.5L8 12", key: "xofnsj" }]
  ],
  aliases: ["check-circle-2"]
}, Fl = ve(Pl);
/**
 * @license @lucide/vue v1.54.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Bl = {
  name: "circle-check-big",
  size: 24,
  node: [
    ["path", { d: "M21.801 10A10 10 0 1 1 17 3.335", key: "yps3ct" }],
    ["path", { d: "m9 11 3 3L22 4", key: "1pflzl" }]
  ],
  aliases: ["check-circle"]
}, Po = ve(Bl);
/**
 * @license @lucide/vue v1.54.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const zl = {
  name: "circle-dot",
  size: 24,
  node: [
    ["circle", { cx: "12", cy: "12", r: "1", key: "41hilf" }],
    ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }]
  ]
}, Ll = ve(zl);
/**
 * @license @lucide/vue v1.54.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Vl = {
  name: "circle-x",
  size: 24,
  node: [
    ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
    ["path", { d: "m15 9-6 6", key: "1uzhvr" }],
    ["path", { d: "m9 9 6 6", key: "z0biqf" }]
  ],
  aliases: ["x-circle"]
}, Hl = ve(Vl);
/**
 * @license @lucide/vue v1.54.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const jl = {
  name: "cookie",
  size: 24,
  node: [
    ["path", { d: "M11 17h.01", key: "dukryu" }],
    [
      "path",
      {
        d: "M11.496 2c.324-.016.558.292.529.615a4 4 0 004.235 4.368.713.713 0 01.758.757 4 4 0 004.366 4.237c.323-.03.63.204.614.527a10 10 0 01-2.915 6.566A1 1 0 114.93 4.918 10 10 0 0111.496 2",
        key: "1x76et"
      }
    ],
    ["path", { d: "M12 12h.01", key: "1mp3jc" }],
    ["path", { d: "M16 16h.01", key: "1f9h7w" }],
    ["path", { d: "M16 3h.01", key: "ll0zb8" }],
    ["path", { d: "M21 4h.01", key: "uw58yv" }],
    ["path", { d: "M21 8h.01", key: "17axm7" }],
    ["path", { d: "M7 14h.01", key: "1qa3f1" }],
    ["path", { d: "M9 8h.01", key: "1jwowd" }]
  ]
}, Ul = ve(jl);
/**
 * @license @lucide/vue v1.54.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Wl = {
  name: "download",
  size: 24,
  node: [
    ["path", { d: "M12 15V3", key: "m9g1x1" }],
    ["path", { d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4", key: "ih7n3h" }],
    ["path", { d: "m7 10 5 5 5-5", key: "brsn70" }]
  ]
}, Yl = ve(Wl);
/**
 * @license @lucide/vue v1.54.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Gl = {
  name: "ellipsis-vertical",
  size: 24,
  node: [
    ["circle", { cx: "12", cy: "12", r: "1", key: "41hilf" }],
    ["circle", { cx: "12", cy: "5", r: "1", key: "gxeob9" }],
    ["circle", { cx: "12", cy: "19", r: "1", key: "lyex9k" }]
  ],
  aliases: ["more-vertical"]
}, Oa = ve(Gl);
/**
 * @license @lucide/vue v1.54.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ql = {
  name: "eye-off",
  size: 24,
  node: [
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
  ]
}, Kl = ve(ql);
/**
 * @license @lucide/vue v1.54.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ql = {
  name: "eye",
  size: 24,
  node: [
    [
      "path",
      {
        d: "M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",
        key: "1nclc0"
      }
    ],
    ["circle", { cx: "12", cy: "12", r: "3", key: "1v7zrd" }]
  ]
}, Zl = ve(Ql);
/**
 * @license @lucide/vue v1.54.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Jl = {
  name: "file-check",
  size: 24,
  node: [
    [
      "path",
      {
        d: "M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z",
        key: "1oefj6"
      }
    ],
    ["path", { d: "M14 2v5a1 1 0 0 0 1 1h5", key: "wfsgrz" }],
    ["path", { d: "m9 15 2 2 4-4", key: "1grp1n" }]
  ]
}, Xl = ve(Jl);
/**
 * @license @lucide/vue v1.54.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const eu = {
  name: "file-text",
  size: 24,
  node: [
    [
      "path",
      {
        d: "M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z",
        key: "1oefj6"
      }
    ],
    ["path", { d: "M14 2v5a1 1 0 0 0 1 1h5", key: "wfsgrz" }],
    ["path", { d: "M10 9H8", key: "b1mrlr" }],
    ["path", { d: "M16 13H8", key: "t4e002" }],
    ["path", { d: "M16 17H8", key: "z1uh3a" }]
  ]
}, Fo = ve(eu);
/**
 * @license @lucide/vue v1.54.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const tu = {
  name: "files",
  size: 24,
  node: [
    ["path", { d: "M15 2h-4a2 2 0 0 0-2 2v11a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V8", key: "14sh0y" }],
    [
      "path",
      {
        d: "M16.706 2.706A2.4 2.4 0 0 0 15 2v5a1 1 0 0 0 1 1h5a2.4 2.4 0 0 0-.706-1.706z",
        key: "1970lx"
      }
    ],
    ["path", { d: "M5 7a2 2 0 0 0-2 2v11a2 2 0 0 0 2 2h8a2 2 0 0 0 1.732-1", key: "l4dndm" }]
  ]
}, nu = ve(tu);
/**
 * @license @lucide/vue v1.54.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const au = {
  name: "image",
  size: 24,
  node: [
    ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", ry: "2", key: "1m3agn" }],
    ["circle", { cx: "9", cy: "9", r: "2", key: "af1f0g" }],
    ["path", { d: "m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21", key: "1xmnt7" }]
  ]
}, iu = ve(au);
/**
 * @license @lucide/vue v1.54.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ou = {
  name: "info",
  size: 24,
  node: [
    ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
    ["path", { d: "M12 16v-4", key: "1dtifu" }],
    ["path", { d: "M12 8h.01", key: "e9boi3" }]
  ]
}, ga = ve(ou);
/**
 * @license @lucide/vue v1.54.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ru = {
  name: "lightbulb",
  size: 24,
  node: [
    [
      "path",
      {
        d: "M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5",
        key: "1gvzjb"
      }
    ],
    ["path", { d: "M9 18h6", key: "x1upvd" }],
    ["path", { d: "M10 22h4", key: "ceow96" }]
  ]
}, su = ve(ru);
/**
 * @license @lucide/vue v1.54.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const lu = {
  name: "maximize-2",
  size: 24,
  node: [
    ["path", { d: "M15 3h6v6", key: "1q9fwt" }],
    ["path", { d: "m21 3-7 7", key: "1l2asr" }],
    ["path", { d: "m3 21 7-7", key: "tjx5ai" }],
    ["path", { d: "M9 21H3v-6", key: "wtvkvv" }]
  ]
}, uu = ve(lu);
/**
 * @license @lucide/vue v1.54.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const cu = {
  name: "menu",
  size: 24,
  node: [
    ["path", { d: "M4 5h16", key: "1tepv9" }],
    ["path", { d: "M4 12h16", key: "1lakjw" }],
    ["path", { d: "M4 19h16", key: "1djgab" }]
  ]
}, du = ve(cu);
/**
 * @license @lucide/vue v1.54.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const fu = {
  name: "minimize-2",
  size: 24,
  node: [
    ["path", { d: "m14 10 7-7", key: "oa77jy" }],
    ["path", { d: "M20 10h-6V4", key: "mjg0md" }],
    ["path", { d: "m3 21 7-7", key: "tjx5ai" }],
    ["path", { d: "M4 14h6v6", key: "rmj7iw" }]
  ]
}, mu = ve(fu);
/**
 * @license @lucide/vue v1.54.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const hu = {
  name: "monitor-smartphone",
  size: 24,
  node: [
    ["path", { d: "M18 8V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h8", key: "10dyio" }],
    ["path", { d: "M10 19v-3.96 3.15", key: "1irgej" }],
    ["path", { d: "M7 19h5", key: "qswx4l" }],
    ["rect", { width: "6", height: "10", x: "16", y: "12", rx: "2", key: "1egngj" }]
  ]
}, mi = ve(hu);
/**
 * @license @lucide/vue v1.54.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const vu = {
  name: "panel-left-close",
  size: 24,
  node: [
    ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }],
    ["path", { d: "M9 3v18", key: "fh3hqa" }],
    ["path", { d: "m16 15-3-3 3-3", key: "14y99z" }]
  ],
  aliases: ["sidebar-close"]
}, pu = ve(vu);
/**
 * @license @lucide/vue v1.54.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const gu = {
  name: "panel-left-open",
  size: 24,
  node: [
    ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }],
    ["path", { d: "M9 3v18", key: "fh3hqa" }],
    ["path", { d: "m14 9 3 3-3 3", key: "8010ee" }]
  ],
  aliases: ["sidebar-open"]
}, yu = ve(gu);
/**
 * @license @lucide/vue v1.54.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const bu = {
  name: "printer",
  size: 24,
  node: [
    [
      "path",
      {
        d: "M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2",
        key: "143wyd"
      }
    ],
    ["path", { d: "M6 9V3a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v6", key: "1itne7" }],
    ["rect", { x: "6", y: "14", width: "12", height: "8", rx: "1", key: "1ue0tg" }]
  ]
}, _u = ve(bu);
/**
 * @license @lucide/vue v1.54.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Cu = {
  name: "search",
  size: 24,
  node: [
    ["path", { d: "m21 21-4.34-4.34", key: "14j7rj" }],
    ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }]
  ]
}, wu = ve(Cu);
/**
 * @license @lucide/vue v1.54.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Au = {
  name: "signature",
  size: 24,
  node: [
    [
      "path",
      {
        d: "m21 17-2.156-1.868A.5.5 0 0 0 18 15.5v.5a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1c0-2.545-3.991-3.97-8.5-4a1 1 0 0 0 0 5c4.153 0 4.745-11.295 5.708-13.5a2.5 2.5 0 1 1 3.31 3.284",
        key: "y32ogt"
      }
    ],
    ["path", { d: "M3 21h18", key: "itz85i" }]
  ]
}, ku = ve(Au);
/**
 * @license @lucide/vue v1.54.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Su = {
  name: "square-check",
  size: 24,
  node: [
    ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }],
    ["path", { d: "m16 9-5.5 5.5L8 12", key: "xofnsj" }]
  ],
  aliases: ["check-square-2"]
}, Tu = ve(Su);
/**
 * @license @lucide/vue v1.54.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Eu = {
  name: "square-pen",
  size: 24,
  node: [
    ["path", { d: "M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7", key: "1m0v6g" }],
    [
      "path",
      {
        d: "M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z",
        key: "ohrbg2"
      }
    ]
  ],
  aliases: ["pen-box", "edit", "pen-square"]
}, Bo = ve(Eu);
/**
 * @license @lucide/vue v1.54.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Mu = {
  name: "text-cursor-input",
  size: 24,
  node: [
    ["path", { d: "M12 20h-1a2 2 0 0 1-2-2 2 2 0 0 1-2 2H6", key: "1528k5" }],
    ["path", { d: "M13 8h7a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-7", key: "13ksps" }],
    ["path", { d: "M5 16H4a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2h1", key: "1n9rhb" }],
    ["path", { d: "M6 4h1a2 2 0 0 1 2 2 2 2 0 0 1 2-2h1", key: "1mj8rg" }],
    ["path", { d: "M9 6v12", key: "velyjx" }]
  ]
}, Nu = ve(Mu);
/**
 * @license @lucide/vue v1.54.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Du = {
  name: "trash",
  size: 24,
  node: [
    ["path", { d: "M10 11v6", key: "nco0om" }],
    ["path", { d: "M14 11v6", key: "outv1u" }],
    ["path", { d: "M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6", key: "miytrc" }],
    ["path", { d: "M3 6h18", key: "d0wm0j" }],
    ["path", { d: "M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2", key: "e791ji" }]
  ],
  aliases: ["trash-2"]
}, Ra = ve(Du);
/**
 * @license @lucide/vue v1.54.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Iu = {
  name: "triangle-alert",
  size: 24,
  node: [
    [
      "path",
      {
        d: "m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",
        key: "wmoenq"
      }
    ],
    ["path", { d: "M12 9v4", key: "juzpu7" }],
    ["path", { d: "M12 17h.01", key: "p32p05" }]
  ],
  aliases: ["alert-triangle"]
}, Ou = ve(Iu);
/**
 * @license @lucide/vue v1.54.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ru = {
  name: "upload",
  size: 24,
  node: [
    ["path", { d: "M12 3v12", key: "1x0j5s" }],
    ["path", { d: "m17 8-5-5-5 5", key: "7q97r8" }],
    ["path", { d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4", key: "ih7n3h" }]
  ]
}, $u = ve(Ru);
/**
 * @license @lucide/vue v1.54.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const xu = {
  name: "video",
  size: 24,
  node: [
    [
      "path",
      {
        d: "m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5",
        key: "ftymec"
      }
    ],
    ["rect", { x: "2", y: "6", width: "14", height: "12", rx: "2", key: "158x01" }]
  ]
}, zo = ve(xu);
/**
 * @license @lucide/vue v1.54.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Pu = {
  name: "x",
  size: 24,
  node: [
    ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
    ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
  ]
}, Xe = ve(Pu), Fu = {
  key: 0,
  class: "fu-status-dropdown__label-text"
}, Bu = ["disabled"], zu = { key: 0 }, Lu = ["onClick"], Vu = { class: "fu-status-dropdown__item-label" }, Hu = /* @__PURE__ */ le({
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
    const n = t, a = e, i = M(!1), o = M(null), r = M(null), s = M(n.modelValue || null), u = Qt({
      position: "absolute",
      visibility: "hidden",
      opacity: "0",
      zIndex: "9999"
    });
    he(
      () => n.modelValue,
      (g) => s.value = g
    );
    function d() {
      if (!o.value || !r.value) return;
      const g = o.value.getBoundingClientRect(), b = r.value.getBoundingClientRect(), C = window.innerHeight - g.bottom, k = g.top, E = C < b.height && k > C;
      let D = g.left + window.scrollX, x = "none";
      n.align === "center" && (D += g.width / 2, x = "translateX(-50%)"), n.align === "right" && (D = g.right + window.scrollX, x = "translateX(-100%)"), u.left = `${D}px`, u.transform = x, u.minWidth = `${g.width}px`, E ? u.top = `${g.top + window.scrollY - b.height - 6}px` : u.top = `${g.bottom + window.scrollY + 6}px`, u.visibility = "visible", u.opacity = "1";
    }
    const m = async () => {
      n.disabled || n.readonly || (i.value = !i.value, i.value && (await ge(), d(), await ge(), d()));
    }, v = (g) => {
      s.value = g, a("update:modelValue", g), i.value = !1;
    }, p = (g) => {
      const b = g.target;
      i.value && o.value && r.value && !o.value.contains(b) && !r.value.contains(b) && (i.value = !1);
    }, h = () => {
      i.value && (i.value = !1);
    }, y = (g) => {
      g.key === "Escape" && (i.value = !1);
    };
    return we(() => {
      document.addEventListener("click", p), window.addEventListener("resize", h), window.addEventListener("scroll", h, !0), document.addEventListener("keydown", y);
    }), Ae(() => {
      document.removeEventListener("click", p), window.removeEventListener("resize", h), window.removeEventListener("scroll", h, !0), document.removeEventListener("keydown", y);
    }), (g, b) => (l(), c("div", {
      class: X(["fu-status-dropdown", {
        "fu-status-dropdown--disabled": t.disabled,
        "fu-status-dropdown--readonly": t.readonly
      }]),
      ref_key: "dropdown",
      ref: o
    }, [
      t.label ? (l(), c("div", Fu, w(t.label), 1)) : A("", !0),
      f("button", {
        class: "fu-status-dropdown__button",
        onClick: m,
        disabled: t.disabled
      }, [
        s.value ? (l(), c("span", zu, [
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
      ], 8, Bu),
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
                f("span", Vu, w(_.label), 1)
              ], 8, Lu))), 128))
            ], 4)) : A("", !0)
          ]),
          _: 1
        })
      ]))
    ], 2));
  }
}), te = (t, e) => {
  const n = t.__vccOpts || t;
  for (const [a, i] of e)
    n[a] = i;
  return n;
}, $a = /* @__PURE__ */ te(Hu, [["__scopeId", "data-v-77aa8dd2"]]), ju = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: $a
}, Symbol.toStringTag, { value: "Module" })), Uu = ["disabled"], Wu = {
  key: 0,
  class: "fu-spinner"
}, Yu = /* @__PURE__ */ le({
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
        t.loading ? (l(), c("span", Wu)) : t.icon ? (l(), Z(me(t.icon), {
          key: 1,
          class: "fu-action-btn__icon",
          size: 20
        })) : A("", !0)
      ], 10, Uu),
      (l(), Z(Ee, { to: "body" }, [
        t.tooltip && e.value ? (l(), c("span", {
          key: 0,
          class: "fu-tooltip",
          style: ie(n.value)
        }, w(t.tooltip), 5)) : A("", !0)
      ]))
    ], 32));
  }
}), Pe = /* @__PURE__ */ te(Yu, [["__scopeId", "data-v-b726044f"]]), Gu = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Pe
}, Symbol.toStringTag, { value: "Module" }));
var Dt = /* @__PURE__ */ ((t) => (t[t.Offline = 0] = "Offline", t[t.Active = 1] = "Active", t[t.Away = 2] = "Away", t[t.Busy = 3] = "Busy", t[t.DoNotDisturb = 4] = "DoNotDisturb", t[t.Invisible = 5] = "Invisible", t))(Dt || {});
const qu = ["src", "alt"], Ku = {
  key: 2,
  class: "fu-avatar__edit-overlay"
}, Qu = /* @__PURE__ */ le({
  __name: "FuAvatar",
  props: {
    src: {},
    alt: {},
    name: {},
    size: { default: "md" },
    status: {},
    showStatus: { type: Boolean, default: !0 },
    editable: { type: Boolean, default: !1 },
    allowRemove: { type: Boolean, default: !0 },
    bg: {},
    color: {}
  },
  emits: ["update:src", "remove"],
  setup(t, { emit: e }) {
    const n = t, a = e, i = M(null), o = O(
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
    }, d = O(() => {
      switch (n.status) {
        case Dt.Active:
        case 1:
          return "fu-status-dot--active";
        case Dt.Away:
        case 2:
          return "fu-status-dot--away";
        case Dt.Busy:
        case 3:
          return "fu-status-dot--busy";
        case Dt.DoNotDisturb:
        case 4:
          return "fu-status-dot--dnd";
        case Dt.Invisible:
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
        }, null, 8, qu)) : (l(), c("span", {
          key: 1,
          class: "fu-avatar__placeholder",
          style: ie({ background: t.bg, color: t.color })
        }, w(o.value), 5)),
        t.editable ? (l(), c("span", Ku, " Edit ")) : A("", !0),
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
}), Ge = /* @__PURE__ */ te(Qu, [["__scopeId", "data-v-2eaef878"]]), Zu = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Ge
}, Symbol.toStringTag, { value: "Module" })), Ju = { class: "edf-container" }, Xu = {
  key: 0,
  class: "edf-label"
}, ec = { class: "edf-text" }, tc = /* @__PURE__ */ le({
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
    return (o, r) => (l(), c("div", Ju, [
      t.label ? (l(), c("label", Xu, w(t.label), 1)) : A("", !0),
      f("div", {
        class: X(["edf-wrapper", [`edf--${t.variant}`]]),
        onMouseenter: r[0] || (r[0] = (s) => a.value = !0),
        onMouseleave: r[1] || (r[1] = (s) => a.value = !1),
        ref: "container"
      }, [
        t.avatarSrc || t.avatarName ? (l(), Z(Ge, {
          key: 0,
          src: t.avatarSrc,
          name: t.avatarName,
          size: "xs",
          "show-status": !1,
          class: "edf-avatar"
        }, null, 8, ["src", "name"])) : A("", !0),
        f("span", ec, w(t.text), 1),
        a.value ? (l(), Z(Pe, {
          key: 1,
          class: "edf-edit-btn",
          icon: ee(Bo),
          size: "sm",
          variant: "subtle",
          onClick: i
        }, null, 8, ["icon"])) : A("", !0)
      ], 34)
    ]));
  }
}), nc = /* @__PURE__ */ te(tc, [["__scopeId", "data-v-8ddd38c0"]]), ac = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: nc
}, Symbol.toStringTag, { value: "Module" })), ic = ["for"], oc = {
  key: 0,
  class: "fu-input-required"
}, rc = {
  key: 0,
  class: "fu-input-icon fu-input-icon--left"
}, sc = {
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
}, lc = ["id", "name", "type", "placeholder", "disabled", "readonly", "required", "aria-invalid", "aria-describedby", "inputmode", "min", "max", "step"], uc = {
  key: 2,
  class: "fu-input-icon fu-input-icon--right"
}, cc = ["id"], dc = /* @__PURE__ */ le({
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
    const n = t, a = e, i = O(() => n.type === "search");
    function o() {
      h.value = "", a("update:modelValue", "");
    }
    const r = `fu-input-${Math.random().toString(36).slice(2, 9)}`, s = O(() => n.id || r), u = O(() => n.name || s.value), d = O(() => {
      if (n.mask === "phone" || n.mask === "card") return "numeric";
      if (n.mask === "currency") return "decimal";
      if (n.type === "number") return "numeric";
    }), m = O(() => n.variant !== "typeform" ? {} : {
      ...n.font ? { "--fu-typeform-font": n.font } : {},
      ...n.color ? { "--fu-typeform-color": n.color } : {},
      ...n.fontSize ? { "--fu-typeform-font-size": n.fontSize } : {}
    });
    function v(y) {
      if (!n.mask) return y;
      switch (n.mask) {
        case "phone":
          return y.replace(/\D/g, "").slice(0, 11).replace(/^(\d{5})(\d{0,6})$/, (b, _, C) => C ? `${_} ${C}` : _);
        case "card":
          return y.replace(/\D/g, "").slice(0, 16).replace(/(\d{4})(?=\d)/g, "$1 ");
        case "currency": {
          const b = y.replace(/[^\d.]/g, "").split("."), _ = b[0] || "", C = b.length > 1 ? "." + b[1].slice(0, 2) : "";
          return (_ ? new Intl.NumberFormat("en-GB").format(Number(_)) : "") + C;
        }
        case "custom": {
          if (!n.maskPattern) return y;
          const g = y.replace(/\D/g, "");
          let b = 0;
          return n.maskPattern.replace(/#/g, () => g[b++] || "");
        }
        default:
          return y;
      }
    }
    function p(y) {
      return n.mask ? n.mask === "currency" ? y.replace(/[^\d.]/g, "") : y.replace(/\D/g, "") : y;
    }
    const h = M(v(String(n.modelValue ?? "")));
    return he(
      () => n.modelValue,
      (y) => {
        const g = v(String(y ?? ""));
        g !== h.value && (h.value = g);
      }
    ), he(h, (y) => {
      const g = v(String(y));
      if (g !== y) {
        h.value = g;
        return;
      }
      a("update:modelValue", p(g));
    }), (y, g) => (l(), c("div", {
      class: "fu-input-wrapper",
      style: ie({ width: t.formWrapperWidth })
    }, [
      t.label ? (l(), c("label", {
        key: 0,
        class: "fu-input-label",
        for: s.value
      }, [
        de(w(t.label) + " ", 1),
        t.required ? (l(), c("span", oc, "*")) : A("", !0)
      ], 8, ic)) : A("", !0),
      f("div", {
        class: X(["fu-input-container", [`fu-input--${t.size}`, `fu-input--${t.variant}`, { "fu-input--error": t.error }]]),
        style: ie(m.value)
      }, [
        y.$slots.left || i.value ? (l(), c("div", rc, [
          y.$slots.left ? se(y.$slots, "left", { key: 0 }, void 0, !0) : (l(), c("svg", sc, [...g[1] || (g[1] = [
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
        Ue(f("input", Pt(y.$attrs, {
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
          "onUpdate:modelValue": g[0] || (g[0] = (b) => h.value = b)
        }), null, 16, lc), [
          [Ro, h.value]
        ]),
        i.value && h.value ? (l(), c("div", {
          key: 1,
          class: "fu-input-icon fu-input-icon--right fu-input-clear",
          onClick: o
        }, [...g[2] || (g[2] = [
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
        ])])) : y.$slots.right ? (l(), c("div", uc, [
          se(y.$slots, "right", {}, void 0, !0)
        ])) : A("", !0)
      ], 6),
      t.error ? (l(), c("span", {
        key: 1,
        class: "fu-input-error",
        id: `${s.value}-error`
      }, w(t.error), 9, cc)) : A("", !0)
    ], 4));
  }
}), Oe = /* @__PURE__ */ te(dc, [["__scopeId", "data-v-de66768b"]]), fc = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Oe
}, Symbol.toStringTag, { value: "Module" })), mc = ["onClick", "disabled"], hc = { class: "fu-accordion__header-content" }, vc = { class: "fu-accordion__body" }, pc = /* @__PURE__ */ le({
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
          f("div", hc, [
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
        ], 10, mc),
        Ue(f("div", vc, [
          se(o.$slots, s.key, {}, void 0, !0)
        ], 512), [
          [$o, a(s.key)]
        ])
      ]))), 128))
    ], 2));
  }
}), gc = /* @__PURE__ */ te(pc, [["__scopeId", "data-v-fb7b6165"]]), yc = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: gc
}, Symbol.toStringTag, { value: "Module" })), bc = { class: "fu-timeline" }, _c = {
  key: 0,
  class: "fu-timeline__empty"
}, Cc = { class: "fu-evt__body" }, wc = { class: "fu-evt__line" }, Ac = { class: "fu-evt__desc" }, kc = {
  key: 0,
  class: "fu-evt__version"
}, Sc = { class: "fu-evt__date" }, Tc = {
  key: 0,
  class: "fu-evt__note"
}, Ec = /* @__PURE__ */ le({
  __name: "FuActivityTimeline",
  props: {
    events: {}
  },
  setup(t) {
    return (e, n) => (l(), c("ul", bc, [
      t.events.length ? A("", !0) : (l(), c("li", _c, [
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
        f("div", Cc, [
          f("div", wc, [
            f("span", Ac, w(a.description), 1),
            a.version != null ? (l(), c("span", kc, "v" + w(a.version), 1)) : A("", !0)
          ]),
          f("div", Sc, w(a.date), 1),
          a.note ? (l(), c("p", Tc, w(a.note), 1)) : A("", !0)
        ])
      ]))), 128))
    ]));
  }
}), Mc = /* @__PURE__ */ te(Ec, [["__scopeId", "data-v-14200bb4"]]), Nc = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Mc
}, Symbol.toStringTag, { value: "Module" })), Dc = {
  key: 0,
  class: "fu-alert-stack"
}, Ic = { class: "fu-alert-strip__body" }, Oc = { class: "fu-alert-strip__msg" }, Rc = {
  key: 0,
  class: "fu-alert-strip__sub"
}, $c = { class: "fu-alert-strip__actions" }, xc = ["href", "onClick"], Pc = ["onClick"], Fc = "fu-alert-dismissed-", Bc = /* @__PURE__ */ le({
  __name: "FusionAlertBanner",
  props: {
    alerts: {}
  },
  setup(t) {
    const e = t;
    function n(u) {
      return u.storageKey ?? `${Fc}${u.id}`;
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
    const o = O(() => {
      const u = /* @__PURE__ */ new Set();
      for (const d of e.alerts)
        i.value.has(d.id) || u.add(d.id);
      return u;
    }), r = O(
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
      o.value.size > 0 ? (l(), c("div", Dc, [
        Q(ol, {
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
              f("div", Ic, [
                f("span", Oc, w(m.message), 1),
                m.sub ? (l(), c("span", Rc, w(m.sub), 1)) : A("", !0)
              ]),
              f("div", $c, [
                m.cta ? (l(), c("a", {
                  key: 0,
                  href: m.cta.href ?? "#",
                  class: "fu-alert-strip__cta",
                  onClick: ue((v) => m.cta.action ? m.cta.action() : null, ["prevent"])
                }, w(m.cta.label), 9, xc)) : A("", !0),
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
                ], 8, Pc)) : A("", !0)
              ])
            ], 2))), 128))
          ]),
          _: 1
        })
      ])) : A("", !0)
    ]));
  }
}), zc = /* @__PURE__ */ te(Bc, [["__scopeId", "data-v-8242f9e7"]]), Lc = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: zc
}, Symbol.toStringTag, { value: "Module" })), Vc = {
  key: 0,
  class: "fu-status-dropdown__label-text"
}, Hc = { key: 1 }, jc = {
  key: 0,
  class: "flex"
}, Uc = ["onClick"], Wc = {
  key: 1,
  class: "fu-placeholder"
}, Yc = {
  key: 1,
  class: "flex flex--center flex--gap-md"
}, Gc = {
  key: 2,
  class: "fu-status-dropdown__input-trigger"
}, qc = {
  key: 0,
  class: "fu-search-wrapper"
}, Kc = {
  key: 1,
  class: "fu-options-scroll scrollbar__control customScrollBar"
}, Qc = { class: "fu-status-dropdown__group-label" }, Zc = ["onClick"], Jc = { class: "fu-item-content" }, Xc = { class: "fu-item-label" }, ed = {
  key: 0,
  class: "fu-item-meta"
}, td = ["onClick"], nd = { class: "fu-item-content" }, ad = { class: "fu-item-label" }, id = {
  key: 0,
  class: "fu-item-meta"
}, od = {
  key: 2,
  class: "fu-status-dropdown__empty"
}, rd = {
  key: 3,
  class: "fu-input-error"
}, sd = /* @__PURE__ */ le({
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
    const n = t, a = e, i = M(!1), o = M(""), r = M(null), s = M(null), u = M(null), d = M(null), m = M({}), v = M(null), p = M([]), h = O(() => n.async === !0);
    he(
      () => n.modelValue,
      (j) => {
        n.multiple && Array.isArray(j) ? p.value = j : v.value = j;
      },
      { immediate: !0 }
    ), he(o, (j) => {
      h.value && (j.length < n.minSearchLength || a("search", j));
    });
    const y = O(() => Array.isArray(n.groups) && n.groups.length > 0), g = O(() => {
      if (!y.value) return [];
      if (h.value) return n.groups;
      const j = o.value.toLowerCase().trim();
      return n.groups.map((R) => ({
        ...R,
        options: j ? R.options.filter((H) => H.label.toLowerCase().includes(j)) : R.options
      })).filter((R) => R.options.length > 0);
    }), b = O(() => h.value || !o.value ? n.options : n.options.filter(
      (j) => j.label.toLowerCase().includes(o.value.toLowerCase())
    )), _ = O(
      () => y.value ? g.value.some((j) => j.options.length > 0) : b.value.length > 0
    );
    function C() {
      const j = r.value?.querySelector("button, input");
      if (!j) return;
      const R = j.getBoundingClientRect();
      m.value = {
        position: "fixed",
        top: `${R.bottom + 4}px`,
        left: `${R.left}px`,
        width: `${R.width}px`,
        zIndex: "9999"
      };
    }
    function k() {
      i.value = !i.value, i.value && ge(() => {
        C(), n.searchable && ge(() => {
          const j = d.value?.$el?.querySelector("input") || s.value?.querySelector("input");
          j?.focus(), j?.select();
        });
      });
    }
    function E(j, R) {
      return j.value === R.value && j.groupKey === R.groupKey;
    }
    function D(j) {
      if (n.multiple) {
        const R = p.value.find((H) => E(H, j));
        p.value = R ? p.value.filter((H) => !E(H, j)) : [...p.value, j], a("update:modelValue", p.value);
      } else
        v.value = j, a("update:modelValue", j), i.value = !1;
    }
    function x(j) {
      p.value = p.value.filter((R) => !E(R, j)), a("update:modelValue", p.value);
    }
    function I(j) {
      r.value?.contains(j.target) || s.value?.contains(j.target) || (i.value = !1);
    }
    function V(j) {
      if (!i.value) return;
      const R = j.target;
      if (!(s.value?.contains(R) || s.value === R)) {
        if (r.value?.contains(R) || r.value === R) {
          C();
          return;
        }
        C();
      }
    }
    return we(() => {
      document.addEventListener("click", I), document.addEventListener("scroll", V, { passive: !0, capture: !0 });
    }), Ae(() => {
      document.removeEventListener("click", I), document.removeEventListener("scroll", V, { capture: !0 });
    }), (j, R) => (l(), c("div", {
      class: "fu-status-dropdown",
      ref_key: "dropdownRef",
      ref: r
    }, [
      t.label ? (l(), c("div", Vc, w(t.label), 1)) : A("", !0),
      t.variant === "button" ? (l(), c("div", Hc, [
        f("button", {
          class: X(["fu-status-dropdown__button", [`fu-input--${t.size}`, { "fu-input--error": t.error }]]),
          onClick: k
        }, [
          t.multiple ? (l(), c("div", jc, [
            p.value.length ? (l(!0), c(L, { key: 0 }, oe(p.value, (H) => (l(), c("span", {
              key: H.value,
              class: "fu-tag"
            }, [
              H.type === "icon" ? (l(), Z(me(H.icon), {
                key: 0,
                size: "14"
              })) : H.type === "image" ? (l(), Z(Ge, {
                key: 1,
                src: H.imageUrl,
                name: H.label,
                size: "xs"
              }, null, 8, ["src", "name"])) : A("", !0),
              de(" " + w(H.label) + " ", 1),
              f("span", {
                class: "fu-tag__remove",
                onClick: ue((U) => x(H), ["stop"])
              }, "×", 8, Uc)
            ]))), 128)) : (l(), c("span", Wc, w(t.placeholder), 1))
          ])) : (l(), c("div", Yc, [
            v.value?.type === "icon" ? (l(), Z(me(v.value.icon), {
              key: 0,
              size: "16"
            })) : v.value?.type === "image" ? (l(), Z(Ge, {
              key: 1,
              src: v.value.imageUrl,
              name: v.value.label,
              size: "xs"
            }, null, 8, ["src", "name"])) : A("", !0),
            f("span", null, w(v.value?.label || t.placeholder), 1)
          ])),
          R[2] || (R[2] = f("svg", {
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
      ])) : (l(), c("div", Gc, [
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
              t.searchable ? (l(), c("div", qc, [
                Q(Oe, {
                  ref_key: "searchInputRef",
                  ref: d,
                  modelValue: o.value,
                  "onUpdate:modelValue": R[1] || (R[1] = (H) => o.value = H),
                  type: "text",
                  placeholder: t.searchPlaceholder,
                  size: t.size,
                  formWrapperWidth: "100%"
                }, {
                  right: ce(() => [
                    f("button", {
                      class: "fu-search-clear",
                      onClick: R[0] || (R[0] = (H) => o.value ? o.value = "" : i.value = !1)
                    }, " × ")
                  ]),
                  _: 1
                }, 8, ["modelValue", "placeholder", "size"])
              ])) : A("", !0),
              _.value ? (l(), c("div", Kc, [
                y.value ? (l(!0), c(L, { key: 0 }, oe(g.value, (H) => (l(), c(L, {
                  key: H.key
                }, [
                  f("div", Qc, w(H.label), 1),
                  (l(!0), c(L, null, oe(H.options, (U) => (l(), c("div", {
                    key: `${H.key}-${U.value}`,
                    class: "fu-status-dropdown__item",
                    onClick: ($) => D({ ...U, groupKey: H.key })
                  }, [
                    U.type === "icon" ? (l(), Z(me(U.icon), {
                      key: 0,
                      size: "16"
                    })) : U.type === "image" ? (l(), Z(Ge, {
                      key: 1,
                      src: U.imageUrl,
                      name: U.label,
                      size: "xs"
                    }, null, 8, ["src", "name"])) : A("", !0),
                    f("div", Jc, [
                      f("span", Xc, w(U.label), 1),
                      t.meta && U[t.meta] ? (l(), c("span", ed, w(U[t.meta]), 1)) : A("", !0)
                    ])
                  ], 8, Zc))), 128))
                ], 64))), 128)) : (l(!0), c(L, { key: 1 }, oe(b.value, (H) => (l(), c("div", {
                  key: H.value,
                  class: "fu-status-dropdown__item",
                  onClick: (U) => D(H)
                }, [
                  H.type === "icon" ? (l(), Z(me(H.icon), {
                    key: 0,
                    size: "16"
                  })) : H.type === "image" ? (l(), Z(Ge, {
                    key: 1,
                    src: H.imageUrl,
                    name: H.label,
                    size: "xs"
                  }, null, 8, ["src", "name"])) : A("", !0),
                  f("div", nd, [
                    f("span", ad, w(H.label), 1),
                    t.meta && H[t.meta] ? (l(), c("span", id, w(H[t.meta]), 1)) : A("", !0)
                  ])
                ], 8, td))), 128)),
                f("div", {
                  class: "fu-status-dropdown__slot-actions",
                  ref_key: "actionsRef",
                  ref: u
                }, [
                  se(j.$slots, "actions")
                ], 512)
              ])) : (l(), c("div", od, w(t.noResultsText), 1))
            ], 4)) : A("", !0)
          ]),
          _: 3
        })
      ])),
      t.error ? (l(), c("span", rd, w(t.error), 1)) : A("", !0)
    ], 512));
  }
}), Lo = /* @__PURE__ */ te(sd, [["__scopeId", "data-v-fef052f3"]]), ld = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Lo
}, Symbol.toStringTag, { value: "Module" })), ud = /* @__PURE__ */ le({
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
      (l(!0), c(L, null, oe(ee(a), (s, u) => (l(), Z(Ge, {
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
}), cd = /* @__PURE__ */ te(ud, [["__scopeId", "data-v-9232114e"]]), dd = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: cd
}, Symbol.toStringTag, { value: "Module" })), fd = /* @__PURE__ */ le({
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
}), Ut = /* @__PURE__ */ te(fd, [["__scopeId", "data-v-b42fd659"]]), md = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Ut
}, Symbol.toStringTag, { value: "Module" })), hd = {
  key: 0,
  class: "fu-spinner"
}, vd = { key: 2 }, pd = { key: 3 }, gd = /* @__PURE__ */ le({
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
          t.loading ? (l(), c("span", hd)) : A("", !0),
          t.icon ? (l(), Z(me(t.icon), {
            key: 1,
            class: "fu-btn-icon",
            size: 16
          })) : A("", !0),
          t.loading ? (l(), c("span", vd, w(t.loadingText || "Loading..."), 1)) : (l(), c("span", pd, [
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
}), Se = /* @__PURE__ */ te(gd, [["__scopeId", "data-v-d6df7556"]]), yd = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Se
}, Symbol.toStringTag, { value: "Module" })), bd = ["name", "value", "disabled", "checked", "aria-readonly"], _d = {
  class: "fu-button-tab__control",
  "aria-hidden": "true"
}, Cd = {
  key: 0,
  class: "fu-button-tab__dot"
}, wd = { class: "fu-button-tab__content" }, Ad = {
  key: 0,
  class: "fu-button-tab__title"
}, kd = {
  key: 1,
  class: "fu-button-tab__description"
}, Sd = /* @__PURE__ */ le({
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
    const n = t, a = e, i = O(() => n.modelValue === n.value), o = O(
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
      }, null, 40, bd),
      f("span", _d, [
        i.value ? (l(), c("span", Cd)) : A("", !0)
      ]),
      f("span", wd, [
        t.title || u.$slots.title ? (l(), c("span", Ad, [
          se(u.$slots, "title", {}, () => [
            de(w(t.title), 1)
          ], !0)
        ])) : A("", !0),
        t.description || u.$slots.description ? (l(), c("span", kd, [
          se(u.$slots, "description", {}, () => [
            de(w(t.description), 1)
          ], !0)
        ])) : A("", !0),
        se(u.$slots, "default", {}, void 0, !0)
      ])
    ], 6));
  }
}), Td = /* @__PURE__ */ te(Sd, [["__scopeId", "data-v-fb9c6e53"]]), Ed = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Td
}, Symbol.toStringTag, { value: "Module" })), Md = { class: "fu-client-state-card__body" }, Nd = { class: "fu-client-state-card__header" }, Dd = { class: "fu-client-state-card__name" }, Id = {
  key: 0,
  class: "fu-client-state-card__signals"
}, Od = /* @__PURE__ */ le({
  __name: "FusionClientStateCard",
  props: {
    name: {},
    initial: {},
    avatarBg: { default: "#fee2e2" },
    avatarColor: { default: "#991b1b" },
    sources: { default: () => [] },
    signals: { default: () => [] },
    status: {},
    clickable: { type: Boolean, default: !0 }
  },
  emits: ["click"],
  setup(t, { emit: e }) {
    const n = t, a = e;
    function i() {
      n.clickable && a("click");
    }
    return (o, r) => (l(), Z(me(t.clickable ? "button" : "div"), {
      class: X(["fu-client-state-card", { "fu-client-state-card--clickable": t.clickable }]),
      type: t.clickable ? "button" : void 0,
      onClick: i
    }, {
      default: ce(() => [
        Q(Ge, {
          class: "fu-client-state-card__avatar",
          name: t.initial || t.name,
          bg: t.avatarBg,
          color: t.avatarColor,
          size: "lg"
        }, null, 8, ["name", "bg", "color"]),
        f("div", Md, [
          f("div", Nd, [
            f("span", Dd, w(t.name), 1),
            (l(!0), c(L, null, oe(t.sources, (s) => (l(), Z(Ut, {
              key: s,
              class: "fu-client-state-card__source",
              text: s,
              size: "sm",
              variant: "subtle"
            }, null, 8, ["text"]))), 128))
          ]),
          t.signals && t.signals.length ? (l(), c("div", Id, [
            (l(!0), c(L, null, oe(t.signals, (s, u) => (l(), Z(Ut, {
              key: u,
              text: s.text,
              size: "sm",
              themeClass: s.theme || "fu-badge--danger-subtle"
            }, null, 8, ["text", "themeClass"]))), 128))
          ])) : A("", !0)
        ]),
        t.status ? (l(), Z(Ut, {
          key: 0,
          class: "fu-client-state-card__status",
          text: t.status.text,
          size: "md",
          themeClass: t.status.theme || "fu-badge--danger-subtle"
        }, null, 8, ["text", "themeClass"])) : A("", !0)
      ]),
      _: 1
    }, 8, ["class", "type"]));
  }
}), Rd = /* @__PURE__ */ te(Od, [["__scopeId", "data-v-2ff9c35d"]]), $d = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Rd
}, Symbol.toStringTag, { value: "Module" })), xd = { class: "fu-info-card__visual" }, Pd = ["src", "alt"], Fd = { class: "fu-info-card__body" }, Bd = { class: "fu-info-card__title" }, zd = {
  key: 0,
  class: "fu-info-card__description"
}, Ld = /* @__PURE__ */ le({
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
    const n = t, a = e, i = O(() => n.initial ? n.initial.slice(0, 2).toUpperCase() : n.title?.trim().charAt(0).toUpperCase() || "?");
    function o() {
      n.clickable && a("click");
    }
    return (r, s) => (l(), Z(me(t.clickable ? "button" : "div"), {
      class: X(["fu-info-card", { "fu-info-card--clickable": t.clickable }]),
      type: t.clickable ? "button" : void 0,
      onClick: o
    }, {
      default: ce(() => [
        f("div", xd, [
          t.image ? (l(), c("img", {
            key: 0,
            src: t.image,
            alt: t.imageAlt || t.title,
            class: "fu-info-card__image"
          }, null, 8, Pd)) : (l(), c("div", {
            key: 1,
            class: "fu-info-card__initial",
            style: ie({ background: t.color })
          }, w(i.value), 5))
        ]),
        f("div", Fd, [
          f("span", Bd, w(t.title), 1),
          t.description ? (l(), c("span", zd, w(t.description), 1)) : A("", !0)
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
}), Vo = /* @__PURE__ */ te(Ld, [["__scopeId", "data-v-7280cf39"]]), Vd = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Vo
}, Symbol.toStringTag, { value: "Module" })), Hd = {
  key: 0,
  class: "icon-box"
}, jd = { class: "content" }, Ud = { class: "value" }, Wd = { class: "subtitle" }, Yd = {
  key: 0,
  class: "caption"
}, Gd = { class: "title" }, qd = { class: "value" }, Kd = {
  key: 0,
  class: "caption"
}, Qd = /* @__PURE__ */ le({
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
          n[0] || (n[0] = An('<div class="skeleton-icon" data-v-504f3ef8></div><div class="skeleton-content" data-v-504f3ef8><div class="skeleton-line skeleton-value" data-v-504f3ef8></div><div class="skeleton-line skeleton-subtitle" data-v-504f3ef8></div><div class="skeleton-line skeleton-caption" data-v-504f3ef8></div></div>', 2))
        ], 64)) : (l(), c(L, { key: 1 }, [
          n[1] || (n[1] = f("div", { class: "skeleton-line skeleton-title" }, null, -1)),
          n[2] || (n[2] = f("div", { class: "skeleton-line skeleton-value--lg" }, null, -1)),
          n[3] || (n[3] = f("div", { class: "skeleton-line skeleton-caption" }, null, -1))
        ], 64))
      ], 64)) : t.variant === "icon-left" ? (l(), c(L, { key: 1 }, [
        t.icon ? (l(), c("div", Hd, [
          (l(), Z(me(t.icon), { class: "fu-icon" }))
        ])) : A("", !0),
        f("div", jd, [
          f("div", Ud, w(t.value), 1),
          f("div", Wd, w(t.title), 1),
          t.subtitle ? (l(), c("div", Yd, w(t.subtitle), 1)) : A("", !0)
        ])
      ], 64)) : (l(), c(L, { key: 2 }, [
        f("div", Gd, w(t.title), 1),
        f("div", qd, w(t.value), 1),
        t.subtitle ? (l(), c("div", Kd, w(t.subtitle), 1)) : A("", !0)
      ], 64))
    ], 2));
  }
}), Zd = /* @__PURE__ */ te(Qd, [["__scopeId", "data-v-504f3ef8"]]), Jd = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Zd
}, Symbol.toStringTag, { value: "Module" })), Xd = ["for"], ef = ["id", "checked", "disabled"], tf = {
  key: 0,
  class: "fu-checkbox__label"
}, nf = /* @__PURE__ */ le({
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
      }, null, 40, ef),
      n[1] || (n[1] = f("span", { class: "fu-checkbox__box" }, null, -1)),
      t.label ? (l(), c("span", tf, w(t.label), 1)) : A("", !0)
    ], 10, Xd));
  }
}), ut = /* @__PURE__ */ te(nf, [["__scopeId", "data-v-42f5b26b"]]), af = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: ut
}, Symbol.toStringTag, { value: "Module" })), of = {
  key: 0,
  class: "fu-input-label"
}, rf = {
  key: 0,
  class: "fu-input-required"
}, sf = ["onUpdate:modelValue", "onInput", "onKeydown", "disabled"], lf = {
  key: 1,
  class: "fu-input-error"
}, uf = /* @__PURE__ */ le({
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
      t.label ? (l(), c("label", of, [
        de(w(t.label) + " ", 1),
        t.required ? (l(), c("span", rf, "*")) : A("", !0)
      ])) : A("", !0),
      f("div", {
        class: X(["fu-code-container", [`fu-input--${t.size}`, `fu-input--${t.variant}`, { "fu-input--error": t.error }]])
      }, [
        (l(!0), c(L, null, oe(i.value, (v, p) => Ue((l(), c("input", {
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
        }, null, 40, sf)), [
          [tt, i.value[p]]
        ])), 128))
      ], 2),
      t.error ? (l(), c("span", lf, w(t.error), 1)) : A("", !0)
    ], 4));
  }
}), cf = /* @__PURE__ */ te(uf, [["__scopeId", "data-v-b22747c4"]]), df = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: cf
}, Symbol.toStringTag, { value: "Module" })), ff = ["onKeydown"], mf = { class: "fu-controls" }, hf = { class: "fu-sliders" }, vf = ["value"], pf = /* @__PURE__ */ le({
  __name: "FuColorPopover",
  props: {
    modelValue: {},
    size: {}
  },
  emits: ["update:modelValue"],
  setup(t, { emit: e }) {
    const n = t, a = e, i = O(() => n.size ?? "md"), o = M(!1), r = M(null), s = M({ top: "0px", left: "0px" });
    function u() {
      o.value = !o.value, o.value && ge(d);
    }
    function d() {
      if (!r.value) return;
      const T = r.value.getBoundingClientRect(), N = 260, P = 320, B = 8;
      let K = T.bottom + 6, z = T.left, W = "top left";
      z + N > window.innerWidth - B && (z = T.right - N, W = "top right"), z = Math.max(B, z), K + P > window.innerHeight - B && (K = T.top - P - 6, W = W.includes("right") ? "bottom right" : "bottom left"), K = Math.max(B, K), s.value = {
        top: `${K + window.scrollY}px`,
        left: `${z + window.scrollX}px`,
        transformOrigin: W
      };
    }
    function m(T) {
      if (!o.value) return;
      const N = T.target;
      r.value?.contains(N) || N.closest(".fu-color-popover") || (o.value = !1);
    }
    we(() => {
      window.addEventListener("mousedown", m), window.addEventListener("resize", d), n.modelValue && (g.value = n.modelValue, j(n.modelValue));
    }), Ae(() => {
      window.removeEventListener("mousedown", m), window.removeEventListener("resize", d);
    });
    const v = M("hex"), p = M(0), h = M(100), y = M(100), g = M(""), b = M(!1);
    function _(T, N, P) {
      N /= 100, P /= 100;
      const B = P * N, K = B * (1 - Math.abs(T / 60 % 2 - 1)), z = P - B;
      let W = 0, S = 0, F = 0;
      return T < 60 ? [W, S, F] = [B, K, 0] : T < 120 ? [W, S, F] = [K, B, 0] : T < 180 ? [W, S, F] = [0, B, K] : T < 240 ? [W, S, F] = [0, K, B] : T < 300 ? [W, S, F] = [K, 0, B] : [W, S, F] = [B, 0, K], {
        r: Math.round((W + z) * 255),
        g: Math.round((S + z) * 255),
        b: Math.round((F + z) * 255)
      };
    }
    function C(T, N, P) {
      T /= 255, N /= 255, P /= 255;
      const B = Math.max(T, N, P), K = Math.min(T, N, P), z = B - K;
      let W = 0;
      return z && (B === T ? W = (N - P) / z % 6 : B === N ? W = (P - T) / z + 2 : W = (T - N) / z + 4, W *= 60, W < 0 && (W += 360)), {
        h: Math.round(W),
        s: Math.round((B === 0 ? 0 : z / B) * 100),
        v: Math.round(B * 100)
      };
    }
    function k(T, N, P) {
      return "#" + [T, N, P].map((B) => B.toString(16).padStart(2, "0")).join("").toUpperCase();
    }
    function E(T, N, P) {
      return `rgb(${T}, ${N}, ${P})`;
    }
    const D = O(() => _(p.value, h.value, y.value)), x = O(() => k(D.value.r, D.value.g, D.value.b)), I = O(() => ({
      background: `linear-gradient(to top, black, transparent), linear-gradient(to right, white, hsl(${p.value}, 100%, 50%))`
    }));
    function V() {
      const { r: T, g: N, b: P } = D.value;
      a(
        "update:modelValue",
        v.value === "rgb" ? E(T, N, P) : x.value
      );
    }
    function j(T) {
      const N = T.trim().replace(/;$/, "");
      let P = null;
      /^#([0-9a-f]{6})$/i.test(N) && (v.value = "hex", P = {
        r: parseInt(N.slice(1, 3), 16),
        g: parseInt(N.slice(3, 5), 16),
        b: parseInt(N.slice(5, 7), 16)
      });
      const B = N.match(/^rgba?\((\d{1,3}),\s*(\d{1,3}),\s*(\d{1,3})/);
      if (B && (v.value = "rgb", P = { r: +B[1], g: +B[2], b: +B[3] }), !P) return;
      const K = C(P.r, P.g, P.b);
      p.value = K.h, h.value = K.s, y.value = K.v, V();
    }
    function R(T) {
      b.value = !0, g.value = T.target.value;
    }
    function H() {
      b.value = !1, j(g.value);
    }
    function U(T) {
      T.key === "Enter" && H();
    }
    function $(T) {
      v.value = "hex";
      const P = T.currentTarget.getBoundingClientRect();
      h.value = Math.round(
        Math.min(Math.max(0, T.clientX - P.left), P.width) / P.width * 100
      ), y.value = Math.round(
        100 - Math.min(Math.max(0, T.clientY - P.top), P.height) / P.height * 100
      ), V();
    }
    return he(
      () => n.modelValue,
      (T) => {
        T && (g.value = T, j(T));
      }
    ), (T, N) => (l(), c(L, null, [
      f("div", {
        ref_key: "triggerRef",
        ref: r,
        class: X(["fu-color-trigger", `fu-color-trigger--${i.value}`]),
        style: ie({ backgroundColor: x.value }),
        role: "button",
        tabindex: "0",
        onClick: u,
        onKeydown: [
          $e(ue(u, ["prevent"]), ["enter"]),
          $e(ue(u, ["prevent"]), ["space"])
        ]
      }, [
        se(T.$slots, "trigger", {}, void 0, !0)
      ], 46, ff),
      (l(), Z(Ee, { to: "body" }, [
        o.value ? (l(), c("div", {
          key: 0,
          class: "fu-color-popover",
          style: ie(s.value)
        }, [
          f("div", {
            class: "fu-saturation",
            style: ie(I.value),
            onPointerdown: $,
            onPointermove: N[0] || (N[0] = (P) => P.buttons === 1 && $(P))
          }, [
            f("div", {
              class: "fu-cursor",
              style: ie({ left: h.value + "%", top: 100 - y.value + "%" })
            }, null, 4)
          ], 36),
          f("div", mf, [
            f("div", {
              class: "fu-preview",
              style: ie({ backgroundColor: x.value })
            }, null, 4),
            f("div", hf, [
              Ue(f("input", {
                type: "range",
                min: "0",
                max: "360",
                "onUpdate:modelValue": N[1] || (N[1] = (P) => p.value = P),
                class: "fu-hue"
              }, null, 512), [
                [tt, p.value]
              ])
            ])
          ]),
          f("input", {
            class: "fu-output",
            value: g.value,
            onInput: R,
            onBlur: H,
            onKeydown: U,
            placeholder: "#RRGGBB or rgb(...)"
          }, null, 40, vf)
        ], 4)) : A("", !0)
      ]))
    ], 64));
  }
}), gf = /* @__PURE__ */ te(pf, [["__scopeId", "data-v-4a443170"]]), yf = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: gf
}, Symbol.toStringTag, { value: "Module" })), bf = { class: "fu-combobox__control" }, _f = ["value", "placeholder", "disabled"], Cf = {
  key: 0,
  class: "fu-combobox__dropdown scrollbar__control customScrollBar"
}, wf = { class: "fu-combobox__group-title" }, Af = ["onClick"], kf = { class: "fu-combobox__option-left" }, Sf = { class: "fu-combobox__option-right" }, Tf = {
  key: 1,
  class: "fu-combobox__empty"
}, Ef = /* @__PURE__ */ le({
  __name: "FuCombobox",
  props: {
    options: {},
    modelValue: {},
    placeholder: {},
    disabled: { type: Boolean }
  },
  emits: ["update:modelValue"],
  setup(t, { emit: e }) {
    const n = t, a = e, i = M(!1), o = M(""), r = M(null), s = M(null), u = O(() => {
      if (!o.value || r.value && o.value.toLowerCase() === r.value.label.toLowerCase())
        return d(n.options);
      const y = n.options.filter(
        (g) => g.label.toLowerCase().includes(o.value.toLowerCase())
      );
      return d(y);
    });
    function d(y) {
      const g = {};
      return y.forEach((b) => {
        const _ = b.group || "Options";
        g[_] || (g[_] = []), g[_].push(b);
      }), Object.entries(g).map(([b, _]) => ({ title: b, items: _ }));
    }
    he(
      () => n.modelValue,
      (y) => {
        r.value = n.options.find((g) => g.value === y) || null, !i.value && r.value && (o.value = r.value.label);
      },
      { immediate: !0 }
    );
    function m(y) {
      o.value = y.target.value;
    }
    function v(y) {
      r.value = y, o.value = y.label, a("update:modelValue", y.value), i.value = !1;
    }
    function p() {
      i.value = !i.value;
    }
    function h(y) {
      s.value && !s.value.contains(y.target) && (i.value = !1, r.value && (o.value = r.value.label));
    }
    return we(() => {
      document.addEventListener("click", h);
    }), Ae(() => {
      document.removeEventListener("click", h);
    }), (y, g) => (l(), c("div", {
      class: X(["fu-combobox", { "fu-combobox--disabled": t.disabled }]),
      ref_key: "comboboxRef",
      ref: s
    }, [
      f("div", bf, [
        f("input", {
          type: "text",
          value: i.value ? o.value : r.value?.label || "",
          placeholder: t.placeholder,
          class: "fu-combobox__input",
          disabled: t.disabled,
          onInput: m,
          onFocus: g[0] || (g[0] = (b) => !t.disabled && (i.value = !0))
        }, null, 40, _f),
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
      i.value && !t.disabled ? (l(), c("div", Cf, [
        u.value.length > 0 ? (l(!0), c(L, { key: 0 }, oe(u.value, (b) => (l(), c("div", {
          key: b.title,
          class: "fu-combobox__group"
        }, [
          f("div", wf, w(b.title), 1),
          (l(!0), c(L, null, oe(b.items, (_) => (l(), c("div", {
            key: _.value,
            class: X(["fu-combobox__option", {
              "fu-combobox__option--selected": _.value === r.value?.value
            }]),
            onClick: (C) => v(_)
          }, [
            f("div", kf, [
              se(y.$slots, "option", { option: _ }, () => [
                _.icon ? (l(), Z(me(_.icon), {
                  key: 0,
                  class: "fu-combobox__option-icon"
                })) : A("", !0),
                f("span", null, w(_.label), 1)
              ], !0)
            ]),
            f("div", Sf, [
              _.value === r.value?.value ? (l(), Z(ee(Bn), {
                key: 0,
                class: "fu-combobox__check"
              })) : A("", !0)
            ])
          ], 10, Af))), 128))
        ]))), 128)) : (l(), c("div", Tf, "No results found"))
      ])) : A("", !0)
    ], 2));
  }
}), Mf = /* @__PURE__ */ te(Ef, [["__scopeId", "data-v-f511904e"]]), Nf = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Mf
}, Symbol.toStringTag, { value: "Module" }));
function Ho(t) {
  return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t;
}
var pn = { exports: {} }, Df = pn.exports, hi;
function If() {
  return hi || (hi = 1, (function(t, e) {
    (function(n, a) {
      t.exports = a();
    })(Df, (function() {
      var n = 1e3, a = 6e4, i = 36e5, o = "millisecond", r = "second", s = "minute", u = "hour", d = "day", m = "week", v = "month", p = "quarter", h = "year", y = "date", g = "Invalid Date", b = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/, _ = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g, C = { name: "en", weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"), ordinal: function(T) {
        var N = ["th", "st", "nd", "rd"], P = T % 100;
        return "[" + T + (N[(P - 20) % 10] || N[P] || N[0]) + "]";
      } }, k = function(T, N, P) {
        var B = String(T);
        return !B || B.length >= N ? T : "" + Array(N + 1 - B.length).join(P) + T;
      }, E = { s: k, z: function(T) {
        var N = -T.utcOffset(), P = Math.abs(N), B = Math.floor(P / 60), K = P % 60;
        return (N <= 0 ? "+" : "-") + k(B, 2, "0") + ":" + k(K, 2, "0");
      }, m: function T(N, P) {
        if (N.date() < P.date()) return -T(P, N);
        var B = 12 * (P.year() - N.year()) + (P.month() - N.month()), K = N.clone().add(B, v), z = P - K < 0, W = N.clone().add(B + (z ? -1 : 1), v);
        return +(-(B + (P - K) / (z ? K - W : W - K)) || 0);
      }, a: function(T) {
        return T < 0 ? Math.ceil(T) || 0 : Math.floor(T);
      }, p: function(T) {
        return { M: v, y: h, w: m, d, D: y, h: u, m: s, s: r, ms: o, Q: p }[T] || String(T || "").toLowerCase().replace(/s$/, "");
      }, u: function(T) {
        return T === void 0;
      } }, D = "en", x = {};
      x[D] = C;
      var I = "$isDayjsObject", V = function(T) {
        return T instanceof U || !(!T || !T[I]);
      }, j = function T(N, P, B) {
        var K;
        if (!N) return D;
        if (typeof N == "string") {
          var z = N.toLowerCase();
          x[z] && (K = z), P && (x[z] = P, K = z);
          var W = N.split("-");
          if (!K && W.length > 1) return T(W[0]);
        } else {
          var S = N.name;
          x[S] = N, K = S;
        }
        return !B && K && (D = K), K || !B && D;
      }, R = function(T, N) {
        if (V(T)) return T.clone();
        var P = typeof N == "object" ? N : {};
        return P.date = T, P.args = arguments, new U(P);
      }, H = E;
      H.l = j, H.i = V, H.w = function(T, N) {
        return R(T, { locale: N.$L, utc: N.$u, x: N.$x, $offset: N.$offset });
      };
      var U = (function() {
        function T(P) {
          this.$L = j(P.locale, null, !0), this.parse(P), this.$x = this.$x || P.x || {}, this[I] = !0;
        }
        var N = T.prototype;
        return N.parse = function(P) {
          this.$d = (function(B) {
            var K = B.date, z = B.utc;
            if (K === null) return /* @__PURE__ */ new Date(NaN);
            if (H.u(K)) return /* @__PURE__ */ new Date();
            if (K instanceof Date) return new Date(K);
            if (typeof K == "string" && !/Z$/i.test(K)) {
              var W = K.match(b);
              if (W) {
                var S = W[2] - 1 || 0, F = (W[7] || "0").substring(0, 3);
                return z ? new Date(Date.UTC(W[1], S, W[3] || 1, W[4] || 0, W[5] || 0, W[6] || 0, F)) : new Date(W[1], S, W[3] || 1, W[4] || 0, W[5] || 0, W[6] || 0, F);
              }
            }
            return new Date(K);
          })(P), this.init();
        }, N.init = function() {
          var P = this.$d;
          this.$y = P.getFullYear(), this.$M = P.getMonth(), this.$D = P.getDate(), this.$W = P.getDay(), this.$H = P.getHours(), this.$m = P.getMinutes(), this.$s = P.getSeconds(), this.$ms = P.getMilliseconds();
        }, N.$utils = function() {
          return H;
        }, N.isValid = function() {
          return this.$d.toString() !== g;
        }, N.isSame = function(P, B) {
          var K = R(P);
          return this.startOf(B) <= K && K <= this.endOf(B);
        }, N.isAfter = function(P, B) {
          return R(P) < this.startOf(B);
        }, N.isBefore = function(P, B) {
          return this.endOf(B) < R(P);
        }, N.$g = function(P, B, K) {
          return H.u(P) ? this[B] : this.set(K, P);
        }, N.unix = function() {
          return Math.floor(this.valueOf() / 1e3);
        }, N.valueOf = function() {
          return this.$d.getTime();
        }, N.startOf = function(P, B) {
          var K = this, z = !!H.u(B) || B, W = H.p(P), S = function(Me, Y) {
            var ae = H.w(K.$u ? Date.UTC(K.$y, Y, Me) : new Date(K.$y, Y, Me), K);
            return z ? ae : ae.endOf(d);
          }, F = function(Me, Y) {
            return H.w(K.toDate()[Me].apply(K.toDate("s"), (z ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(Y)), K);
          }, J = this.$W, ne = this.$M, be = this.$D, Te = "set" + (this.$u ? "UTC" : "");
          switch (W) {
            case h:
              return z ? S(1, 0) : S(31, 11);
            case v:
              return z ? S(1, ne) : S(0, ne + 1);
            case m:
              var _e = this.$locale().weekStart || 0, Fe = (J < _e ? J + 7 : J) - _e;
              return S(z ? be - Fe : be + (6 - Fe), ne);
            case d:
            case y:
              return F(Te + "Hours", 0);
            case u:
              return F(Te + "Minutes", 1);
            case s:
              return F(Te + "Seconds", 2);
            case r:
              return F(Te + "Milliseconds", 3);
            default:
              return this.clone();
          }
        }, N.endOf = function(P) {
          return this.startOf(P, !1);
        }, N.$set = function(P, B) {
          var K, z = H.p(P), W = "set" + (this.$u ? "UTC" : ""), S = (K = {}, K[d] = W + "Date", K[y] = W + "Date", K[v] = W + "Month", K[h] = W + "FullYear", K[u] = W + "Hours", K[s] = W + "Minutes", K[r] = W + "Seconds", K[o] = W + "Milliseconds", K)[z], F = z === d ? this.$D + (B - this.$W) : B;
          if (z === v || z === h) {
            var J = this.clone().set(y, 1);
            J.$d[S](F), J.init(), this.$d = J.set(y, Math.min(this.$D, J.daysInMonth())).$d;
          } else S && this.$d[S](F);
          return this.init(), this;
        }, N.set = function(P, B) {
          return this.clone().$set(P, B);
        }, N.get = function(P) {
          return this[H.p(P)]();
        }, N.add = function(P, B) {
          var K, z = this;
          P = Number(P);
          var W = H.p(B), S = function(ne) {
            var be = R(z);
            return H.w(be.date(be.date() + Math.round(ne * P)), z);
          };
          if (W === v) return this.set(v, this.$M + P);
          if (W === h) return this.set(h, this.$y + P);
          if (W === d) return S(1);
          if (W === m) return S(7);
          var F = (K = {}, K[s] = a, K[u] = i, K[r] = n, K)[W] || 1, J = this.$d.getTime() + P * F;
          return H.w(J, this);
        }, N.subtract = function(P, B) {
          return this.add(-1 * P, B);
        }, N.format = function(P) {
          var B = this, K = this.$locale();
          if (!this.isValid()) return K.invalidDate || g;
          var z = P || "YYYY-MM-DDTHH:mm:ssZ", W = H.z(this), S = this.$H, F = this.$m, J = this.$M, ne = K.weekdays, be = K.months, Te = K.meridiem, _e = function(Y, ae, re, pe) {
            return Y && (Y[ae] || Y(B, z)) || re[ae].slice(0, pe);
          }, Fe = function(Y) {
            return H.s(S % 12 || 12, Y, "0");
          }, Me = Te || function(Y, ae, re) {
            var pe = Y < 12 ? "AM" : "PM";
            return re ? pe.toLowerCase() : pe;
          };
          return z.replace(_, (function(Y, ae) {
            return ae || (function(re) {
              switch (re) {
                case "YY":
                  return String(B.$y).slice(-2);
                case "YYYY":
                  return H.s(B.$y, 4, "0");
                case "M":
                  return J + 1;
                case "MM":
                  return H.s(J + 1, 2, "0");
                case "MMM":
                  return _e(K.monthsShort, J, be, 3);
                case "MMMM":
                  return _e(be, J);
                case "D":
                  return B.$D;
                case "DD":
                  return H.s(B.$D, 2, "0");
                case "d":
                  return String(B.$W);
                case "dd":
                  return _e(K.weekdaysMin, B.$W, ne, 2);
                case "ddd":
                  return _e(K.weekdaysShort, B.$W, ne, 3);
                case "dddd":
                  return ne[B.$W];
                case "H":
                  return String(S);
                case "HH":
                  return H.s(S, 2, "0");
                case "h":
                  return Fe(1);
                case "hh":
                  return Fe(2);
                case "a":
                  return Me(S, F, !0);
                case "A":
                  return Me(S, F, !1);
                case "m":
                  return String(F);
                case "mm":
                  return H.s(F, 2, "0");
                case "s":
                  return String(B.$s);
                case "ss":
                  return H.s(B.$s, 2, "0");
                case "SSS":
                  return H.s(B.$ms, 3, "0");
                case "Z":
                  return W;
              }
              return null;
            })(Y) || W.replace(":", "");
          }));
        }, N.utcOffset = function() {
          return 15 * -Math.round(this.$d.getTimezoneOffset() / 15);
        }, N.diff = function(P, B, K) {
          var z, W = this, S = H.p(B), F = R(P), J = (F.utcOffset() - this.utcOffset()) * a, ne = this - F, be = function() {
            return H.m(W, F);
          };
          switch (S) {
            case h:
              z = be() / 12;
              break;
            case v:
              z = be();
              break;
            case p:
              z = be() / 3;
              break;
            case m:
              z = (ne - J) / 6048e5;
              break;
            case d:
              z = (ne - J) / 864e5;
              break;
            case u:
              z = ne / i;
              break;
            case s:
              z = ne / a;
              break;
            case r:
              z = ne / n;
              break;
            default:
              z = ne;
          }
          return K ? z : H.a(z);
        }, N.daysInMonth = function() {
          return this.endOf(v).$D;
        }, N.$locale = function() {
          return x[this.$L];
        }, N.locale = function(P, B) {
          if (!P) return this.$L;
          var K = this.clone(), z = j(P, B, !0);
          return z && (K.$L = z), K;
        }, N.clone = function() {
          return H.w(this.$d, this);
        }, N.toDate = function() {
          return new Date(this.valueOf());
        }, N.toJSON = function() {
          return this.isValid() ? this.toISOString() : null;
        }, N.toISOString = function() {
          return this.$d.toISOString();
        }, N.toString = function() {
          return this.$d.toUTCString();
        }, T;
      })(), $ = U.prototype;
      return R.prototype = $, [["$ms", o], ["$s", r], ["$m", s], ["$H", u], ["$W", d], ["$M", v], ["$y", h], ["$D", y]].forEach((function(T) {
        $[T[1]] = function(N) {
          return this.$g(N, T[0], T[1]);
        };
      })), R.extend = function(T, N) {
        return T.$i || (T(N, U, R), T.$i = !0), R;
      }, R.locale = j, R.isDayjs = V, R.unix = function(T) {
        return R(1e3 * T);
      }, R.en = x[D], R.Ls = x, R.p = {}, R;
    }));
  })(pn)), pn.exports;
}
var Of = If();
const ye = /* @__PURE__ */ Ho(Of);
var gn = { exports: {} }, Rf = gn.exports, vi;
function $f() {
  return vi || (vi = 1, (function(t, e) {
    (function(n, a) {
      t.exports = a();
    })(Rf, (function() {
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
      }, y = { A: [s, function(b) {
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
      function g(b) {
        var _, C;
        _ = b, C = u && u.formats;
        for (var k = (b = _.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g, (function(R, H, U) {
          var $ = U && U.toUpperCase();
          return H || C[U] || n[U] || C[$].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g, (function(T, N, P) {
            return N || P.slice(1);
          }));
        }))).match(a), E = k.length, D = 0; D < E; D += 1) {
          var x = k[D], I = y[x], V = I && I[0], j = I && I[1];
          k[D] = j ? { regex: V, parser: j } : x.replace(/^\[|\]$/g, "");
        }
        return function(R) {
          for (var H = {}, U = 0, $ = 0; U < E; U += 1) {
            var T = k[U];
            if (typeof T == "string") $ += T.length;
            else {
              var N = T.regex, P = T.parser, B = R.slice($), K = N.exec(B)[0];
              P.call(H, K), R = R.replace(K, "");
            }
          }
          return (function(z) {
            var W = z.afternoon;
            if (W !== void 0) {
              var S = z.hours;
              W ? S < 12 && (z.hours += 12) : S === 12 && (z.hours = 0), delete z.afternoon;
            }
          })(H), H;
        };
      }
      return function(b, _, C) {
        C.p.customParseFormat = !0, b && b.parseTwoDigitYear && (d = b.parseTwoDigitYear);
        var k = _.prototype, E = k.parse;
        k.parse = function(D) {
          var x = D.date, I = D.utc, V = D.args;
          this.$u = I;
          var j = V[1];
          if (typeof j == "string") {
            var R = V[2] === !0, H = V[3] === !0, U = R || H, $ = V[2];
            H && ($ = V[2]), u = this.$locale(), !R && $ && (u = C.Ls[$]), this.$d = (function(B, K, z, W) {
              try {
                if (["x", "X"].indexOf(K) > -1) return new Date((K === "X" ? 1e3 : 1) * B);
                var S = g(K)(B), F = S.year, J = S.month, ne = S.day, be = S.hours, Te = S.minutes, _e = S.seconds, Fe = S.milliseconds, Me = S.zone, Y = S.week, ae = /* @__PURE__ */ new Date(), re = ne || (F || J ? 1 : ae.getDate()), pe = F || ae.getFullYear(), Ye = 0;
                F && !J || (Ye = J > 0 ? J - 1 : ae.getMonth());
                var it, qe = be || 0, Kn = Te || 0, Qn = _e || 0, Zn = Fe || 0;
                return Me ? new Date(Date.UTC(pe, Ye, re, qe, Kn, Qn, Zn + 60 * Me.offset * 1e3)) : z ? new Date(Date.UTC(pe, Ye, re, qe, Kn, Qn, Zn)) : (it = new Date(pe, Ye, re, qe, Kn, Qn, Zn), Y && (it = W(it).week(Y).toDate()), it);
              } catch {
                return /* @__PURE__ */ new Date("");
              }
            })(x, j, I, C), this.init(), $ && $ !== !0 && (this.$L = this.locale($).$L), U && x != this.format(j) && (this.$d = /* @__PURE__ */ new Date("")), u = {};
          } else if (j instanceof Array) for (var T = j.length, N = 1; N <= T; N += 1) {
            V[1] = j[N - 1];
            var P = C.apply(this, V);
            if (P.isValid()) {
              this.$d = P.$d, this.$L = P.$L, this.init();
              break;
            }
            N === T && (this.$d = /* @__PURE__ */ new Date(""));
          }
          else E.call(this, D);
        };
      };
    }));
  })(gn)), gn.exports;
}
var xf = $f();
const jo = /* @__PURE__ */ Ho(xf), Pf = { class: "calendar-header" }, Ff = { class: "flex flex--gap-sm" }, Bf = { key: 0 }, zf = { class: "calendar-weekdays" }, Lf = { class: "calendar-days" }, Vf = ["onClick"], Hf = {
  key: 1,
  class: "calendar-months"
}, jf = ["onClick"], Uf = {
  key: 2,
  class: "calendar-years"
}, Wf = ["onClick"], Yf = { class: "flex flex--space flex--gap-md px-2 pb-2" }, Gf = {
  key: 0,
  class: "flex flex--gap-sm"
}, qf = { key: 1 }, Kf = {
  key: 3,
  class: "calendar-time"
}, Qf = { class: "fu-time-input-wrapper" }, Zf = {
  key: 0,
  class: "fu-time-dropdown customScrollBar"
}, Jf = ["onMousedown"], Mt = 12, Xf = {
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
    ye.extend(jo);
    const n = t, a = M(!1), i = e, o = M(!1), r = M(null), s = M(null), u = M(null), d = M(ye().startOf("month")), m = M(null), v = M({ start: null, end: null }), p = M("00:00"), h = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"], y = [
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
    ], g = M("days"), b = O(
      () => Math.floor(d.value.year() / Mt) * Mt
    ), _ = O(() => b.value + Mt - 1), C = O(
      () => Array.from({ length: Mt }, (Y, ae) => b.value + ae)
    ), k = O(() => {
      const Y = d.value.startOf("month").startOf("week"), ae = d.value.endOf("month").endOf("week"), re = [];
      let pe = Y.clone();
      for (; pe.isBefore(ae) || pe.isSame(ae, "day"); )
        re.push({
          date: pe.clone(),
          isCurrentMonth: pe.month() === d.value.month()
        }), pe = pe.add(1, "day");
      return re;
    });
    function E(Y) {
      return !!(n.min && Y.isBefore(ye(n.min), "day") || n.max && Y.isAfter(ye(n.max), "day"));
    }
    function D(Y) {
      return n.variant === "date-range" ? v.value.start && Y.isSame(v.value.start, "day") || v.value.end && Y.isSame(v.value.end, "day") : m.value && Y.isSame(m.value, "day");
    }
    function x(Y) {
      return n.variant === "date-range" && v.value.start && v.value.end && Y.isAfter(v.value.start, "day") && Y.isBefore(v.value.end, "day");
    }
    function I(Y) {
      if (!E(Y)) {
        if (n.variant === "date-range") {
          !v.value.start || r.value === "start" ? (v.value.start = Y.clone(), v.value.end = null, r.value = "end") : Y.isBefore(v.value.start, "day") ? (v.value.end = v.value.start.clone(), v.value.start = Y.clone()) : v.value.end = Y.clone();
          return;
        }
        m.value = Y.clone(), i(
          "update:modelValue",
          n.variant === "date-time" ? m.value.format("YYYY-MM-DDTHH:mm") : m.value.format("YYYY-MM-DD")
        ), R();
      }
    }
    function V() {
      v.value.start && v.value.end && (i("update:modelValue", {
        start: v.value.start.format("YYYY-MM-DD"),
        end: v.value.end.format("YYYY-MM-DD")
      }), R());
    }
    function j(Y = null) {
      r.value = Y, o.value = !0, n.variant === "date-range" ? v.value.start ? d.value = v.value.start.startOf("month") : d.value = ye().startOf("month") : m.value ? d.value = m.value.startOf("month") : d.value = ye().startOf("month"), ge(() => {
        $(), window.addEventListener("resize", $), window.addEventListener("click", H);
      });
    }
    function R() {
      o.value = !1, window.removeEventListener("resize", $), window.removeEventListener("click", H);
    }
    function H(Y) {
      !s.value?.contains(Y.target) && !u.value?.contains(Y.target) && R();
    }
    const U = M({
      position: "absolute",
      top: "0px",
      left: "0px",
      zIndex: 9999
    });
    function $() {
      if (!s.value || !u.value) return;
      const Y = s.value.getBoundingClientRect(), ae = u.value.getBoundingClientRect(), re = window.innerHeight - Y.bottom, pe = Y.top, Ye = window.scrollY || window.pageYOffset, it = window.scrollX || window.pageXOffset;
      let qe;
      re < ae.height && pe > ae.height ? qe = Y.top + Ye - ae.height - 6 : qe = Y.bottom + Ye + 6, U.value = {
        position: "absolute",
        top: `${qe}px`,
        left: `${Y.left + it}px`,
        zIndex: 9999
      };
    }
    const T = O(() => m.value ? n.variant === "date-time" ? m.value.format("YYYY-MM-DD HH:mm") : m.value.format("YYYY-MM-DD") : ""), N = O(() => n.variant !== "date-range" ? "" : v.value.start && v.value.end ? `${v.value.start.format(
      "YYYY-MM-DD"
    )} to ${v.value.end.format("YYYY-MM-DD")}` : v.value.start ? `${v.value.start.format("YYYY-MM-DD")} to ...` : ""), P = O(() => `fu-date-picker--${n.variant}`);
    he(
      () => n.modelValue,
      (Y) => {
        if (n.variant !== "date-range") {
          if (typeof Y == "string" && Y) {
            const ae = ye(Y);
            if (ae.isValid()) {
              m.value = ae, d.value = ae.startOf("month"), n.variant === "date-time" ? p.value = ae.format("h:mm A") : p.value = "00:00";
              return;
            }
          }
          (Y === null || Y === "") && (m.value = null, v.value = { start: null, end: null }, p.value = "00:00");
        }
      },
      { immediate: !0 }
    );
    function B() {
      g.value === "days" ? g.value = "months" : g.value === "months" ? g.value = "years" : g.value = "days";
    }
    function K() {
      g.value === "days" ? d.value = d.value.subtract(1, "month") : g.value === "months" ? d.value = d.value.subtract(1, "year") : d.value = d.value.subtract(Mt, "year");
    }
    function z() {
      g.value === "days" ? d.value = d.value.add(1, "month") : g.value === "months" ? d.value = d.value.add(1, "year") : d.value = d.value.add(Mt, "year");
    }
    function W(Y) {
      d.value = d.value.month(Y), g.value = "days";
    }
    function S(Y) {
      d.value = d.value.year(Y), g.value = "months";
    }
    function F() {
      const Y = ye();
      n.variant === "date-range" ? v.value = { start: Y.clone(), end: Y.clone() } : (m.value = Y.clone(), i(
        "update:modelValue",
        n.variant === "date-time" ? Y.format("YYYY-MM-DDTHH:mm") : Y.format("YYYY-MM-DD")
      ), R());
    }
    function J() {
      const Y = ye().add(1, "day");
      n.variant === "date-range" ? v.value = { start: Y.clone(), end: Y.clone() } : (m.value = Y.clone(), i(
        "update:modelValue",
        n.variant === "date-time" ? Y.format("YYYY-MM-DDTHH:mm") : Y.format("YYYY-MM-DD")
      ), R());
    }
    function ne() {
      m.value = null, v.value = { start: null, end: null }, i(
        "update:modelValue",
        n.variant === "date-range" ? { start: null, end: null } : null
      ), R();
    }
    const be = O(() => {
      const Y = [];
      for (let ae = 0; ae < 24; ae++)
        for (let re = 0; re < 60; re += 15)
          Y.push(ye().hour(ae).minute(re).format("h:mm A"));
      return Y;
    }), Te = O(() => {
      if (!p.value) return be.value;
      const Y = p.value.toLowerCase().replace(/\s+/g, "");
      return be.value.filter(
        (ae) => ae.toLowerCase().replace(/\s+/g, "").startsWith(Y)
      );
    });
    function _e() {
      if (!m.value || !p.value) return;
      const Y = String(p.value).trim().toLowerCase(), ae = ye(
        Y,
        ["h:mm a", "h:mma", "ha", "h a", "hh:mm a", "H:mm", "HH:mm", "H"],
        !0
      );
      if (!ae.isValid()) {
        a.value = !1;
        return;
      }
      m.value = m.value.hour(ae.hour()).minute(ae.minute()), p.value = m.value.format("h:mm A"), i("update:modelValue", m.value.format("YYYY-MM-DDTHH:mm")), a.value = !1;
    }
    function Fe(Y) {
      p.value = Y, _e();
    }
    function Me() {
      setTimeout(() => {
        _e(), a.value = !1;
      }, 120);
    }
    return Ae(() => {
      window.removeEventListener("resize", $), window.removeEventListener("click", H);
    }), (Y, ae) => (l(), c("div", {
      class: X(["fu-date-picker", P.value]),
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
        onClick: j,
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
        modelValue: N.value,
        placeholder: "Select date range",
        onClick: j,
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
          onClick: ue(R, ["self"])
        }, [
          f("div", {
            class: "fu-date-picker__calendar",
            style: ie(U.value),
            ref_key: "calendarRef",
            ref: u,
            onClick: ae[2] || (ae[2] = ue(() => {
            }, ["stop"]))
          }, [
            f("div", Pf, [
              Q(Se, {
                variant: "ghost",
                size: "sm",
                icon: ee(xe),
                onClick: B
              }, {
                default: ce(() => [
                  g.value === "days" ? (l(), c(L, { key: 0 }, [
                    de(w(d.value.format("MMMM YYYY")), 1)
                  ], 64)) : g.value === "months" ? (l(), c(L, { key: 1 }, [
                    de(w(d.value.year()), 1)
                  ], 64)) : (l(), c(L, { key: 2 }, [
                    de(w(b.value) + " - " + w(_.value), 1)
                  ], 64))
                ]),
                _: 1
              }, 8, ["icon"]),
              f("div", Ff, [
                Q(Pe, {
                  icon: ee(Lt),
                  size: "sm",
                  onClick: K
                }, null, 8, ["icon"]),
                Q(Pe, {
                  icon: ee(Vt),
                  size: "sm",
                  onClick: z
                }, null, 8, ["icon"])
              ])
            ]),
            g.value === "days" ? (l(), c("div", Bf, [
              f("div", zf, [
                (l(), c(L, null, oe(h, (re) => f("div", {
                  key: re,
                  class: "calendar-weekday"
                }, w(re), 1)), 64))
              ]),
              f("div", Lf, [
                (l(!0), c(L, null, oe(k.value, (re) => (l(), c("div", {
                  key: re.date.toString(),
                  class: X(["calendar-day", {
                    "calendar-day--other-month": !re.isCurrentMonth,
                    "calendar-day--selected": D(re.date),
                    "calendar-day--in-range": x(re.date),
                    "calendar-day--disabled": E(re.date)
                  }]),
                  onClick: (pe) => I(re.date)
                }, w(re.date.date()), 11, Vf))), 128))
              ])
            ])) : g.value === "months" ? (l(), c("div", Hf, [
              (l(), c(L, null, oe(y, (re, pe) => f("div", {
                key: re,
                class: X(["calendar-month", { "calendar-month--selected": pe === d.value.month() }]),
                onClick: (Ye) => W(pe)
              }, w(re), 11, jf)), 64))
            ])) : (l(), c("div", Uf, [
              (l(!0), c(L, null, oe(C.value, (re) => (l(), c("div", {
                key: re,
                class: X(["calendar-year", { "calendar-year--selected": re === d.value.year() }]),
                onClick: (pe) => S(re)
              }, w(re), 11, Wf))), 128))
            ])),
            ae[7] || (ae[7] = f("hr", null, null, -1)),
            f("div", Yf, [
              t.variant !== "date-range" ? (l(), c("div", Gf, [
                Q(Se, {
                  variant: "outline",
                  onClick: F
                }, {
                  default: ce(() => [...ae[3] || (ae[3] = [
                    de("Today", -1)
                  ])]),
                  _: 1
                }),
                Q(Se, {
                  variant: "outline",
                  onClick: J
                }, {
                  default: ce(() => [...ae[4] || (ae[4] = [
                    de("Tomorrow", -1)
                  ])]),
                  _: 1
                })
              ])) : A("", !0),
              t.variant === "date-range" ? (l(), c("div", qf, [
                Q(Se, {
                  variant: "outline",
                  onClick: V
                }, {
                  default: ce(() => [...ae[5] || (ae[5] = [
                    de("Apply", -1)
                  ])]),
                  _: 1
                })
              ])) : A("", !0),
              Q(Se, {
                variant: "outline",
                onClick: ne
              }, {
                default: ce(() => [...ae[6] || (ae[6] = [
                  de("Clear", -1)
                ])]),
                _: 1
              })
            ]),
            t.variant === "date-time" ? (l(), c("div", Kf, [
              f("div", Qf, [
                Q(Oe, {
                  type: "text",
                  modelValue: p.value,
                  "onUpdate:modelValue": ae[0] || (ae[0] = (re) => p.value = re),
                  placeholder: "HH:mm or 4:30pm",
                  onFocus: ae[1] || (ae[1] = (re) => a.value = !0),
                  onKeydown: $e(ue(_e, ["prevent"]), ["enter"]),
                  onBlur: Me,
                  formWrapperWidth: "100%"
                }, {
                  right: ce(() => [
                    Q(ee(xe))
                  ]),
                  _: 1
                }, 8, ["modelValue", "onKeydown"]),
                a.value ? (l(), c("div", Zf, [
                  (l(!0), c(L, null, oe(Te.value, (re) => (l(), c("div", {
                    key: re,
                    class: "fu-time-option",
                    onMousedown: ue((pe) => Fe(re), ["prevent"])
                  }, w(re), 41, Jf))), 128))
                ])) : A("", !0)
              ])
            ])) : A("", !0)
          ], 4)
        ])) : A("", !0)
      ]))
    ], 6));
  }
}, Uo = /* @__PURE__ */ te(Xf, [["__scopeId", "data-v-6f111693"]]), em = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Uo
}, Symbol.toStringTag, { value: "Module" })), tm = { class: "calendar-header" }, nm = { class: "flex flex--gap-sm" }, am = { key: 0 }, im = { class: "calendar-weekdays" }, om = { class: "calendar-days" }, rm = ["onClick"], sm = {
  key: 1,
  class: "calendar-months"
}, lm = ["onClick"], um = {
  key: 2,
  class: "calendar-years"
}, cm = ["onClick"], dm = { class: "flex flex--space flex--gap-md px-2 pb-2" }, fm = {
  key: 0,
  class: "flex flex--gap-sm"
}, mm = { key: 1 }, hm = {
  key: 3,
  class: "calendar-time"
}, vm = { class: "fu-time-input-wrapper" }, pm = {
  key: 0,
  class: "fu-time-dropdown customScrollBar"
}, gm = ["onMousedown"], Nt = 12, ym = {
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
    ye.extend(jo);
    const n = t, a = M(!1), i = e, o = M(!1), r = M(null), s = M(null), u = M(null), d = M(ye().startOf("month")), m = M(null), v = M({ start: null, end: null }), p = M("00:00"), h = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"], y = [
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
    ], g = M("days"), b = O(
      () => Math.floor(d.value.year() / Nt) * Nt
    ), _ = O(() => b.value + Nt - 1), C = O(
      () => Array.from({ length: Nt }, (Y, ae) => b.value + ae)
    ), k = O(() => {
      const Y = d.value.startOf("month").startOf("week"), ae = d.value.endOf("month").endOf("week"), re = [];
      let pe = Y.clone();
      for (; pe.isBefore(ae) || pe.isSame(ae, "day"); )
        re.push({
          date: pe.clone(),
          isCurrentMonth: pe.month() === d.value.month()
        }), pe = pe.add(1, "day");
      return re;
    });
    function E(Y) {
      return !!(n.min && Y.isBefore(ye(n.min), "day") || n.max && Y.isAfter(ye(n.max), "day"));
    }
    function D(Y) {
      return n.variant === "date-range" ? v.value.start && Y.isSame(v.value.start, "day") || v.value.end && Y.isSame(v.value.end, "day") : m.value && Y.isSame(m.value, "day");
    }
    function x(Y) {
      return n.variant === "date-range" && v.value.start && v.value.end && Y.isAfter(v.value.start, "day") && Y.isBefore(v.value.end, "day");
    }
    function I(Y) {
      if (!E(Y)) {
        if (n.variant === "date-range") {
          !v.value.start || r.value === "start" ? (v.value.start = Y.clone(), v.value.end = null, r.value = "end") : Y.isBefore(v.value.start, "day") ? (v.value.end = v.value.start.clone(), v.value.start = Y.clone()) : v.value.end = Y.clone();
          return;
        }
        m.value = Y.clone(), i(
          "update:modelValue",
          n.variant === "date-time" ? m.value.format("YYYY-MM-DDTHH:mm") : m.value.format("YYYY-MM-DD")
        ), R();
      }
    }
    function V() {
      v.value.start && v.value.end && (i("update:modelValue", {
        start: v.value.start.format("YYYY-MM-DD"),
        end: v.value.end.format("YYYY-MM-DD")
      }), R());
    }
    function j(Y = null) {
      r.value = Y, o.value = !0, n.variant === "date-range" ? v.value.start ? d.value = v.value.start.startOf("month") : d.value = ye().startOf("month") : m.value ? d.value = m.value.startOf("month") : d.value = ye().startOf("month"), ge(() => {
        $(), window.addEventListener("resize", $), window.addEventListener("click", H);
      });
    }
    function R() {
      o.value = !1, window.removeEventListener("resize", $), window.removeEventListener("click", H);
    }
    function H(Y) {
      !s.value?.contains(Y.target) && !u.value?.contains(Y.target) && R();
    }
    const U = M({
      position: "absolute",
      top: "0px",
      left: "0px",
      zIndex: 9999
    });
    function $() {
      if (!s.value || !u.value) return;
      const Y = s.value.getBoundingClientRect(), ae = u.value.getBoundingClientRect(), re = window.innerHeight - Y.bottom, pe = Y.top, Ye = window.scrollY || window.pageYOffset, it = window.scrollX || window.pageXOffset;
      let qe;
      re < ae.height && pe > ae.height ? qe = Y.top + Ye - ae.height - 6 : qe = Y.bottom + Ye + 6, U.value = {
        position: "absolute",
        top: `${qe}px`,
        left: `${Y.left + it}px`,
        zIndex: 9999
      };
    }
    const T = O(() => m.value ? n.variant === "date-time" ? m.value.format("YYYY-MM-DD HH:mm") : m.value.format("YYYY-MM-DD") : ""), N = O(() => n.variant !== "date-range" ? "" : v.value.start && v.value.end ? `${v.value.start.format(
      "YYYY-MM-DD"
    )} to ${v.value.end.format("YYYY-MM-DD")}` : v.value.start ? `${v.value.start.format("YYYY-MM-DD")} to ...` : ""), P = O(() => `fu-date-picker--${n.variant}`);
    he(
      () => n.modelValue,
      (Y) => {
        if (n.variant !== "date-range") {
          if (typeof Y == "string" && Y) {
            const ae = ye(Y);
            if (ae.isValid()) {
              m.value = ae, d.value = ae.startOf("month"), n.variant === "date-time" ? p.value = ae.format("h:mm A") : p.value = "00:00";
              return;
            }
          }
          (Y === null || Y === "") && (m.value = null, v.value = { start: null, end: null }, p.value = "00:00");
        }
      },
      { immediate: !0 }
    );
    function B() {
      g.value === "days" ? g.value = "months" : g.value === "months" ? g.value = "years" : g.value = "days";
    }
    function K() {
      g.value === "days" ? d.value = d.value.subtract(1, "month") : g.value === "months" ? d.value = d.value.subtract(1, "year") : d.value = d.value.subtract(Nt, "year");
    }
    function z() {
      g.value === "days" ? d.value = d.value.add(1, "month") : g.value === "months" ? d.value = d.value.add(1, "year") : d.value = d.value.add(Nt, "year");
    }
    function W(Y) {
      d.value = d.value.month(Y), g.value = "days";
    }
    function S(Y) {
      d.value = d.value.year(Y), g.value = "months";
    }
    function F() {
      const Y = ye();
      n.variant === "date-range" ? v.value = { start: Y.clone(), end: Y.clone() } : (m.value = Y.clone(), i(
        "update:modelValue",
        n.variant === "date-time" ? Y.format("YYYY-MM-DDTHH:mm") : Y.format("YYYY-MM-DD")
      ), R());
    }
    function J() {
      const Y = ye().add(1, "day");
      n.variant === "date-range" ? v.value = { start: Y.clone(), end: Y.clone() } : (m.value = Y.clone(), i(
        "update:modelValue",
        n.variant === "date-time" ? Y.format("YYYY-MM-DDTHH:mm") : Y.format("YYYY-MM-DD")
      ), R());
    }
    function ne() {
      m.value = null, v.value = { start: null, end: null }, i(
        "update:modelValue",
        n.variant === "date-range" ? { start: null, end: null } : null
      ), R();
    }
    const be = O(() => {
      const Y = [];
      for (let ae = 0; ae < 24; ae++)
        for (let re = 0; re < 60; re += 15)
          Y.push(ye().hour(ae).minute(re).format("h:mm A"));
      return Y;
    }), Te = O(() => {
      if (!p.value) return be.value;
      const Y = p.value.toLowerCase().replace(/\s+/g, "");
      return be.value.filter(
        (ae) => ae.toLowerCase().replace(/\s+/g, "").startsWith(Y)
      );
    });
    function _e() {
      if (!m.value || !p.value) return;
      const Y = String(p.value).trim().toLowerCase(), ae = ye(
        Y,
        ["h:mm a", "h:mma", "ha", "h a", "hh:mm a", "H:mm", "HH:mm", "H"],
        !0
      );
      if (!ae.isValid()) {
        a.value = !1;
        return;
      }
      m.value = m.value.hour(ae.hour()).minute(ae.minute()), p.value = m.value.format("h:mm A"), i("update:modelValue", m.value.format("YYYY-MM-DDTHH:mm")), a.value = !1;
    }
    function Fe(Y) {
      p.value = Y, _e();
    }
    function Me() {
      setTimeout(() => {
        _e(), a.value = !1;
      }, 120);
    }
    return Ae(() => {
      window.removeEventListener("resize", $), window.removeEventListener("click", H);
    }), (Y, ae) => (l(), c("div", {
      class: X(["fu-date-picker", P.value]),
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
        onClick: j,
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
        modelValue: N.value,
        placeholder: "Select date range",
        onClick: j,
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
          onClick: ue(R, ["self"])
        }, [
          f("div", {
            class: "fu-date-picker__calendar",
            style: ie(U.value),
            ref_key: "calendarRef",
            ref: u,
            onClick: ae[2] || (ae[2] = ue(() => {
            }, ["stop"]))
          }, [
            f("div", tm, [
              Q(Se, {
                variant: "ghost",
                size: "sm",
                onClick: B
              }, {
                default: ce(() => [
                  g.value === "days" ? (l(), c(L, { key: 0 }, [
                    de(w(d.value.format("MMMM YYYY")), 1)
                  ], 64)) : g.value === "months" ? (l(), c(L, { key: 1 }, [
                    de(w(d.value.year()), 1)
                  ], 64)) : (l(), c(L, { key: 2 }, [
                    de(w(b.value) + " - " + w(_.value), 1)
                  ], 64))
                ]),
                _: 1
              }),
              f("div", nm, [
                Q(Pe, {
                  icon: ee(Lt),
                  size: "sm",
                  onClick: K
                }, null, 8, ["icon"]),
                Q(Pe, {
                  icon: ee(Vt),
                  size: "sm",
                  onClick: z
                }, null, 8, ["icon"])
              ])
            ]),
            g.value === "days" ? (l(), c("div", am, [
              f("div", im, [
                (l(), c(L, null, oe(h, (re) => f("div", {
                  key: re,
                  class: "calendar-weekday"
                }, w(re), 1)), 64))
              ]),
              f("div", om, [
                (l(!0), c(L, null, oe(k.value, (re) => (l(), c("div", {
                  key: re.date.toString(),
                  class: X(["calendar-day", {
                    "calendar-day--other-month": !re.isCurrentMonth,
                    "calendar-day--selected": D(re.date),
                    "calendar-day--in-range": x(re.date),
                    "calendar-day--disabled": E(re.date)
                  }]),
                  onClick: (pe) => I(re.date)
                }, w(re.date.date()), 11, rm))), 128))
              ])
            ])) : g.value === "months" ? (l(), c("div", sm, [
              (l(), c(L, null, oe(y, (re, pe) => f("div", {
                key: re,
                class: X(["calendar-month", { "calendar-month--selected": pe === d.value.month() }]),
                onClick: (Ye) => W(pe)
              }, w(re), 11, lm)), 64))
            ])) : (l(), c("div", um, [
              (l(!0), c(L, null, oe(C.value, (re) => (l(), c("div", {
                key: re,
                class: X(["calendar-year", { "calendar-year--selected": re === d.value.year() }]),
                onClick: (pe) => S(re)
              }, w(re), 11, cm))), 128))
            ])),
            ae[7] || (ae[7] = f("hr", null, null, -1)),
            f("div", dm, [
              t.variant !== "date-range" ? (l(), c("div", fm, [
                Q(Se, {
                  variant: "outline",
                  onClick: F
                }, {
                  default: ce(() => [...ae[3] || (ae[3] = [
                    de("Today", -1)
                  ])]),
                  _: 1
                }),
                Q(Se, {
                  variant: "outline",
                  onClick: J
                }, {
                  default: ce(() => [...ae[4] || (ae[4] = [
                    de("Tomorrow", -1)
                  ])]),
                  _: 1
                })
              ])) : A("", !0),
              t.variant === "date-range" ? (l(), c("div", mm, [
                Q(Se, {
                  variant: "outline",
                  onClick: V
                }, {
                  default: ce(() => [...ae[5] || (ae[5] = [
                    de("Apply", -1)
                  ])]),
                  _: 1
                })
              ])) : A("", !0),
              Q(Se, {
                variant: "outline",
                onClick: ne
              }, {
                default: ce(() => [...ae[6] || (ae[6] = [
                  de("Clear", -1)
                ])]),
                _: 1
              })
            ]),
            t.variant === "date-time" ? (l(), c("div", hm, [
              f("div", vm, [
                Q(Oe, {
                  type: "text",
                  modelValue: p.value,
                  "onUpdate:modelValue": ae[0] || (ae[0] = (re) => p.value = re),
                  placeholder: "HH:mm or 4:30pm",
                  onFocus: ae[1] || (ae[1] = (re) => a.value = !0),
                  onKeydown: $e(ue(_e, ["prevent"]), ["enter"]),
                  onBlur: Me,
                  formWrapperWidth: "100%"
                }, {
                  right: ce(() => [
                    Q(ee(xe))
                  ]),
                  _: 1
                }, 8, ["modelValue", "onKeydown"]),
                a.value ? (l(), c("div", pm, [
                  (l(!0), c(L, null, oe(Te.value, (re) => (l(), c("div", {
                    key: re,
                    class: "fu-time-option",
                    onMousedown: ue((pe) => Fe(re), ["prevent"])
                  }, w(re), 41, gm))), 128))
                ])) : A("", !0)
              ])
            ])) : A("", !0)
          ], 4)
        ])) : A("", !0)
      ]))
    ], 6));
  }
}, bm = /* @__PURE__ */ te(ym, [["__scopeId", "data-v-0002a347"]]), _m = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: bm
}, Symbol.toStringTag, { value: "Module" })), Cm = { class: "calendar-header" }, wm = { class: "flex flex--gap-sm" }, Am = {
  key: 0,
  class: "calendar-months"
}, km = ["onClick"], Sm = {
  key: 1,
  class: "calendar-years"
}, Tm = ["onClick"], Em = { class: "flex flex--space flex--gap-md px-2 pb-2" }, sn = 12, Mm = {
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
    ], m = O(
      () => u.value - u.value % sn
    ), v = O(() => m.value + sn - 1), p = O(() => {
      const $ = m.value;
      return Array.from({ length: sn }, (T, N) => $ + N);
    }), h = O(() => {
      if (!n.modelValue) return null;
      const $ = ye(n.modelValue, "YYYY-MM", !0);
      return $.isValid() ? $ : null;
    });
    function y($) {
      return h.value ? h.value.month() === $ && h.value.year() === u.value : !1;
    }
    function g($) {
      const T = ye(
        `${u.value}-${($ + 1).toString().padStart(2, "0")}`,
        "YYYY-MM"
      );
      return !!(n.min && T.isBefore(ye(n.min, "YYYY-MM"), "month") || n.max && T.isAfter(ye(n.max, "YYYY-MM"), "month"));
    }
    function b($) {
      u.value = $, s.value = "months";
    }
    function _($) {
      if (g($)) return;
      const T = ye(
        `${u.value}-${($ + 1).toString().padStart(2, "0")}`,
        "YYYY-MM"
      );
      a("update:modelValue", T.format("MMM, YYYY")), i.value = !1;
    }
    function C() {
      const $ = ye();
      u.value = $.year(), a("update:modelValue", $.format("MMM, YYYY")), i.value = !1;
    }
    function k() {
      n.disabled || (i.value = !i.value, i.value ? (h.value && (u.value = h.value.year()), ge(() => {
        I(), window.addEventListener("resize", I), window.addEventListener("click", D);
      })) : (window.removeEventListener("resize", I), window.removeEventListener("click", D)));
    }
    function E() {
      i.value = !1, window.removeEventListener("resize", I), window.removeEventListener("click", D);
    }
    function D($) {
      !o.value?.contains($.target) && !r.value?.contains($.target) && E();
    }
    const x = M({
      position: "absolute",
      top: "0px",
      left: "0px",
      zIndex: 9999
    });
    function I() {
      if (!o.value || !r.value) return;
      const $ = o.value.getBoundingClientRect(), T = r.value.getBoundingClientRect(), N = window.innerHeight - $.bottom, P = $.top, B = window.scrollY || window.pageYOffset, K = window.scrollX || window.pageXOffset;
      let z;
      N < T.height && P > T.height ? z = $.top + B - T.height - 6 : z = $.bottom + B + 6, x.value = {
        position: "absolute",
        top: `${z}px`,
        left: `${$.left + K}px`,
        zIndex: 9999
      };
    }
    function V() {
      s.value = s.value === "months" ? "years" : "months";
    }
    function j() {
      s.value === "months" ? u.value-- : u.value = Math.max(m.value - sn, 0);
    }
    function R() {
      s.value === "months" ? u.value++ : u.value = v.value + 1;
    }
    function H() {
      a("update:modelValue", null), i.value = !1;
    }
    const U = O(() => n.modelValue || "");
    return Ae(() => {
      window.removeEventListener("resize", I), window.removeEventListener("click", D);
    }), ($, T) => (l(), c("div", {
      class: "fu-month-picker",
      ref_key: "pickerRef",
      ref: o,
      style: ie({ width: t.formWrapperWidth })
    }, [
      Q(Oe, {
        type: "text",
        modelValue: U.value,
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
            style: ie(x.value),
            ref_key: "calendarRef",
            ref: r,
            onClick: T[0] || (T[0] = ue(() => {
            }, ["stop"]))
          }, [
            f("div", Cm, [
              Q(Se, {
                variant: "ghost",
                size: "sm",
                onClick: V,
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
              f("div", wm, [
                Q(Pe, {
                  icon: ee(Lt),
                  size: "sm",
                  onClick: j
                }, null, 8, ["icon"]),
                Q(Pe, {
                  icon: ee(Vt),
                  size: "sm",
                  onClick: R
                }, null, 8, ["icon"])
              ])
            ]),
            s.value === "months" ? (l(), c("div", Am, [
              (l(), c(L, null, oe(d, (N, P) => f("div", {
                key: N,
                class: X(["calendar-month", {
                  "calendar-month--selected": y(P),
                  "calendar-month--disabled": g(P)
                }]),
                onClick: (B) => _(P)
              }, w(N), 11, km)), 64))
            ])) : (l(), c("div", Sm, [
              (l(!0), c(L, null, oe(p.value, (N) => (l(), c("div", {
                key: N,
                class: X(["calendar-year", { "calendar-year--selected": N === u.value }]),
                onClick: (P) => b(N)
              }, w(N), 11, Tm))), 128))
            ])),
            T[3] || (T[3] = f("hr", null, null, -1)),
            f("div", Em, [
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
                onClick: H
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
}, Nm = /* @__PURE__ */ te(Mm, [["__scopeId", "data-v-a9301efe"]]), Dm = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Nm
}, Symbol.toStringTag, { value: "Module" })), Im = { class: "calendar-header" }, Om = { class: "flex flex--gap-sm" }, Rm = { key: 0 }, $m = { class: "calendar-weekdays" }, xm = { class: "calendar-days" }, Pm = ["onClick"], Fm = {
  key: 1,
  class: "calendar-months"
}, Bm = ["onClick"], zm = {
  key: 2,
  class: "calendar-years"
}, Lm = ["onClick"], Vm = {
  key: 3,
  class: "calendar-multi-summary"
}, Hm = {
  key: 4,
  class: "calendar-time"
}, jm = {
  key: 0,
  class: "fu-time-dropdown customScrollBar"
}, Um = ["onMousedown"], ln = 12, Wm = {
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
    ], p = O(
      () => Math.floor(i.value.year() / ln) * ln
    ), h = O(() => p.value + ln - 1), y = O(
      () => Array.from({ length: ln }, ($, T) => p.value + T)
    ), g = O(() => {
      const $ = i.value.startOf("month").startOf("week"), T = i.value.endOf("month").endOf("week"), N = [];
      let P = $.clone();
      for (; P.isBefore(T) || P.isSame(T, "day"); )
        N.push({
          date: P.clone(),
          isCurrentMonth: P.month() === i.value.month()
        }), P = P.add(1, "day");
      return N;
    }), b = O(() => {
      const $ = [];
      for (let T = 0; T < 24; T++)
        for (let N = 0; N < 60; N += 15)
          $.push(ye().hour(T).minute(N).format("h:mm A"));
      return $;
    }), _ = O(() => b.value), C = ($) => n.disabledDates.includes($.format("YYYY-MM-DD"));
    function k($) {
      return n.mode === "multi" ? d.value.includes($.format("YYYY-MM-DD")) : u.value && $.isSame(u.value, "day");
    }
    function E($) {
      if (!C($))
        if (n.mode === "multi") {
          const T = $.format("YYYY-MM-DD");
          d.value.indexOf(T) === -1 ? d.value = [...d.value, T] : d.value = d.value.filter((P) => P !== T), d.value = [...d.value].sort(), a("update:modelValue", [...d.value]);
        } else if (u.value = $.clone(), n.variant === "date-time") {
          const T = ye(
            `${u.value.format("YYYY-MM-DD")} ${r.value}`,
            "YYYY-MM-DD HH:mm"
          );
          a("update:modelValue", T.format("YYYY-MM-DDTHH:mm"));
        } else
          a("update:modelValue", u.value.format("YYYY-MM-DD"));
    }
    function D() {
      d.value = [], a("update:modelValue", []);
    }
    const x = () => i.value = i.value.subtract(1, "month"), I = () => i.value = i.value.add(1, "month"), V = () => o.value = o.value === "days" ? "months" : o.value === "months" ? "years" : "days", j = ($) => {
      i.value = i.value.month($), o.value = "days";
    }, R = ($) => {
      i.value = i.value.year($), o.value = "months";
    };
    function H() {
      if (!u.value) return;
      const $ = ye(`${u.value.format("YYYY-MM-DD")} ${r.value}`, [
        "YYYY-MM-DD HH:mm",
        "YYYY-MM-DD h:mm A"
      ]);
      $.isValid() && (r.value = $.format("HH:mm"), a("update:modelValue", $.format("YYYY-MM-DDTHH:mm")), s.value = !1);
    }
    function U($) {
      if (!u.value) return;
      r.value = ye($, "h:mm A").format("HH:mm");
      const T = ye(
        `${u.value.format("YYYY-MM-DD")} ${r.value}`,
        "YYYY-MM-DD HH:mm"
      );
      a("update:modelValue", T.format("YYYY-MM-DDTHH:mm")), s.value = !1;
    }
    return he(
      () => n.modelValue,
      ($) => {
        if (n.mode === "multi")
          d.value = Array.isArray($) ? [...$] : [];
        else {
          if (!$) {
            u.value = null;
            return;
          }
          const T = ye($);
          T.isValid() && (u.value = T, i.value = T.startOf("month"), n.variant === "date-time" && (r.value = T.format("HH:mm")));
        }
      },
      { immediate: !0 }
    ), ($, T) => (l(), c("div", {
      class: "fu-date-picker fu-date-picker--plain",
      style: ie({ width: t.formWrapperWidth, fontSize: t.fontSize })
    }, [
      f("div", {
        class: "fu-date-picker",
        style: ie({ width: t.formWrapperWidth })
      }, [
        f("div", Im, [
          f("button", { onClick: V }, [
            o.value === "days" ? (l(), c(L, { key: 0 }, [
              de(w(i.value.format("MMMM YYYY")), 1)
            ], 64)) : o.value === "months" ? (l(), c(L, { key: 1 }, [
              de(w(i.value.year()), 1)
            ], 64)) : (l(), c(L, { key: 2 }, [
              de(w(p.value) + " - " + w(h.value), 1)
            ], 64))
          ]),
          f("div", Om, [
            f("button", { onClick: x }, [
              Q(ee(Lt), {
                size: 16,
                color: "var(--fu-color-text)"
              })
            ]),
            f("button", { onClick: I }, [
              Q(ee(Vt), { size: 16 })
            ])
          ])
        ]),
        o.value === "days" ? (l(), c("div", Rm, [
          f("div", $m, [
            (l(), c(L, null, oe(m, (N) => f("div", {
              key: N,
              class: "calendar-weekday"
            }, w(N), 1)), 64))
          ]),
          f("div", xm, [
            (l(!0), c(L, null, oe(g.value, (N) => (l(), c("div", {
              key: N.date.toString(),
              class: X(["calendar-day", {
                "calendar-day--other-month": !N.isCurrentMonth,
                "calendar-day--selected": k(N.date),
                "calendar-day--disabled": C(N.date)
              }]),
              onClick: (P) => E(N.date)
            }, w(N.date.date()), 11, Pm))), 128))
          ])
        ])) : o.value === "months" ? (l(), c("div", Fm, [
          (l(), c(L, null, oe(v, (N, P) => f("div", {
            key: N,
            class: X(["calendar-month", { "calendar-month--selected": P === i.value.month() }]),
            onClick: (B) => j(P)
          }, w(N), 11, Bm)), 64))
        ])) : (l(), c("div", zm, [
          (l(!0), c(L, null, oe(y.value, (N) => (l(), c("div", {
            key: N,
            class: X(["calendar-year", { "calendar-year--selected": N === i.value.year() }]),
            onClick: (P) => R(N)
          }, w(N), 11, Lm))), 128))
        ])),
        t.mode === "multi" && d.value.length ? (l(), c("div", Vm, [
          f("span", null, w(d.value.length) + " date" + w(d.value.length > 1 ? "s" : "") + " selected", 1),
          f("button", {
            class: "calendar-multi-clear",
            onClick: D
          }, "Clear all")
        ])) : A("", !0),
        t.variant === "date-time" ? (l(), c("div", Hm, [
          Q(Oe, {
            type: "text",
            modelValue: r.value,
            "onUpdate:modelValue": T[0] || (T[0] = (N) => r.value = N),
            placeholder: "HH:mm or 4:30pm",
            onFocus: T[1] || (T[1] = (N) => s.value = !0),
            onKeydown: $e(ue(H, ["prevent"]), ["enter"]),
            formWrapperWidth: "100%"
          }, {
            right: ce(() => [
              Q(ee(xe))
            ]),
            _: 1
          }, 8, ["modelValue", "onKeydown"]),
          s.value ? (l(), c("div", jm, [
            (l(!0), c(L, null, oe(_.value, (N) => (l(), c("div", {
              key: N,
              class: "fu-time-option",
              onMousedown: ue((P) => U(N), ["prevent"])
            }, w(N), 41, Um))), 128))
          ])) : A("", !0)
        ])) : A("", !0)
      ], 4)
    ], 4));
  }
}, Wo = /* @__PURE__ */ te(Wm, [["__scopeId", "data-v-32023e9d"]]), Ym = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Wo
}, Symbol.toStringTag, { value: "Module" })), Gm = ["onMousedown"], pi = 240, qm = {
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
    const n = t, a = e, i = M(""), o = M(n.modelValue || ""), r = M(""), s = M(!1), u = M(!1), d = M(null), m = M(null), v = M({ left: 0, top: 0, bottom: 0, width: 0 }), p = M(null), h = (U) => {
      if (!U || !/^\d{2}:\d{2}$/.test(U)) return U || "";
      const [$, T] = U.split(":").map(Number);
      if (n.displayFormat === "24")
        return `${String($).padStart(2, "0")}:${String(T).padStart(2, "0")}`;
      const N = $ < 12 ? "am" : "pm", P = $ % 12 || 12;
      return `${String(P).padStart(2, "0")}:${String(T).padStart(2, "0")} ${N}`;
    }, y = (U) => {
      if (!U) return null;
      const $ = U.trim().toLowerCase();
      if (n.displayFormat === "24") {
        const K = $.match(/^(\d{1,2}):(\d{2})$/);
        if (!K) return null;
        const z = parseInt(K[1], 10), W = parseInt(K[2], 10);
        return z > 23 || W > 59 ? null : `${String(z).padStart(2, "0")}:${String(W).padStart(2, "0")}`;
      }
      const T = $.match(/^(\d{1,2})(?::(\d{2}))?\s*(am|pm)$/);
      if (!T) return null;
      let N = parseInt(T[1], 10);
      const P = parseInt(T[2] || "00", 10), B = T[3];
      return N < 1 || N > 12 || P > 59 ? null : (B === "pm" && N !== 12 && (N += 12), B === "am" && N === 12 && (N = 0), `${String(N).padStart(2, "0")}:${String(P).padStart(2, "0")}`);
    };
    i.value = h(n.modelValue), he(
      () => n.modelValue,
      (U) => {
        o.value = U || "", document.activeElement !== d.value?.querySelector("input") && (i.value = h(U));
      }
    ), he(
      () => n.displayFormat,
      () => {
        i.value = h(o.value);
      }
    );
    const g = O(() => {
      n.displayFormat;
      const U = [];
      for (let $ = 0; $ < 24; $++)
        for (let T = 0; T < 60; T += n.interval) {
          const N = `${String($).padStart(2, "0")}:${String(T).padStart(2, "0")}`;
          U.push({ label: h(N), value: N });
        }
      return U;
    }), b = O(
      () => r.value ? g.value.filter(
        (U) => U.label.toLowerCase().includes(r.value.toLowerCase())
      ) : g.value
    ), _ = O(
      () => b.value.length ? b.value : g.value
    ), C = (U) => {
      const $ = U.target;
      let T = $.value;
      if (n.displayFormat === "24") {
        if (T = T.replace(/[^0-9:]/g, "").slice(0, 5), /^\d{2}$/.test(T)) {
          T += ":", i.value = T, r.value = T, ge(() => $.setSelectionRange(3, 3));
          return;
        }
        /^\d{2}:\d/.test(T) && parseInt(T.slice(0, 2), 10) > 23 && (T = "23:" + T.slice(3)), /^\d{2}:\d{2}$/.test(T) && parseInt(T.slice(3), 10) > 59 && (T = T.slice(0, 3) + "59");
      } else {
        if (T = T.replace(/[^0-9: apm]/g, ""), T = T.replace(/([ap])m*([ap])/g, "$1").replace(/(am|pm).+/, "$1").slice(0, 8), /^\d{2}$/.test(T)) {
          T += ":", i.value = T, r.value = T, ge(() => $.setSelectionRange(3, 3));
          return;
        }
        if (/^\d{2}/.test(T)) {
          const N = parseInt(T.slice(0, 2), 10);
          N > 12 && (T = "12" + T.slice(2)), N === 0 && (T = "01" + T.slice(2));
        }
        /^\d{2}:\d{2}/.test(T) && parseInt(T.slice(3, 5), 10) > 59 && (T = T.slice(0, 3) + "59" + T.slice(5));
      }
      i.value = T, r.value = T;
    }, k = () => {
      const U = y(i.value);
      if (!U) {
        i.value = h(o.value), r.value = "", s.value = !1;
        return;
      }
      o.value = U, i.value = h(U), r.value = "", a("update:modelValue", U), a("change", U), s.value = !1;
    }, E = () => {
      if (!d.value) return;
      const U = d.value.getBoundingClientRect();
      v.value = {
        left: U.left,
        top: U.top,
        bottom: U.bottom,
        width: U.width
      };
      const $ = window.innerHeight - U.bottom;
      u.value = $ < pi && U.top > $;
    }, D = (U, $) => {
      $ === 0 && U && (p.value = U);
    }, x = (U) => {
      o.value = U, i.value = h(U), r.value = "", a("update:modelValue", U), a("change", U), s.value = !1;
    }, I = () => {
      i.value = h(o.value), r.value = "", s.value = !0, E();
    }, V = () => setTimeout(() => {
      k(), s.value = !1;
    }, 120), j = (U) => {
      d.value && !d.value.contains(U.target) && m.value && !m.value.contains(U.target) && (s.value = !1);
    };
    he(r, async () => {
      await ge(), p.value && p.value.scrollIntoView({ behavior: "smooth", block: "nearest" });
    });
    const R = () => E();
    we(() => {
      window.addEventListener("resize", R), document.addEventListener("mousedown", j), ge(E);
    }), Ae(() => {
      window.removeEventListener("resize", R), document.removeEventListener("mousedown", j);
    });
    const H = () => {
      n.disabled || (s.value ? s.value = !1 : (i.value = h(o.value), r.value = "", s.value = !0, E()));
    };
    return (U, $) => (l(), c("div", {
      class: "fu-time-picker",
      ref_key: "inputRef",
      ref: d
    }, [
      Q(Oe, {
        type: "text",
        modelValue: i.value,
        "onUpdate:modelValue": $[0] || ($[0] = (T) => i.value = T),
        placeholder: t.displayFormat === "12" ? "hh:mm am/pm" : "HH:mm",
        onFocus: I,
        onInput: C,
        onKeydown: $e(ue(k, ["prevent"]), ["enter"]),
        onBlur: V,
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
            onMousedown: ue(H, ["prevent"])
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
            top: u.value ? v.value.top - pi + "px" : v.value.bottom + "px"
          })
        }, [
          (l(!0), c(L, null, oe(_.value, (T, N) => (l(), c("div", {
            key: T.value,
            class: "fu-time-option",
            ref_for: !0,
            ref: (P) => D(P, N),
            onMousedown: ue((P) => x(T.value), ["prevent"])
          }, w(T.label), 41, Gm))), 128))
        ], 6)) : A("", !0)
      ]))
    ], 512));
  }
}, Km = /* @__PURE__ */ te(qm, [["__scopeId", "data-v-211bbde7"]]), Qm = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Km
}, Symbol.toStringTag, { value: "Module" })), Zm = {};
function Jm(t, e) {
  return null;
}
const xa = /* @__PURE__ */ te(Zm, [["render", Jm]]), Xm = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: xa
}, Symbol.toStringTag, { value: "Module" })), gi = [
  { type: "signature", label: "Signature", icon: ku, width: 0.22, height: 0.05, keyPrefix: "Signature" },
  { type: "initials", label: "Initials", icon: Ml, width: 0.1, height: 0.05, keyPrefix: "Initials" },
  { type: "text", label: "Text Field", icon: Nu, width: 0.22, height: 0.04, keyPrefix: "TextField" },
  { type: "date", label: "Date", icon: Tl, width: 0.16, height: 0.04, keyPrefix: "Date" },
  { type: "file", label: "File Upload", icon: $u, width: 0.2, height: 0.05, keyPrefix: "CollectFile" },
  { type: "dropdown", label: "Dropdown", icon: xe, width: 0.2, height: 0.04, keyPrefix: "Dropdown" },
  { type: "radio", label: "Radio Buttons", icon: Ll, width: 0.18, height: 0.04, keyPrefix: "RadioGroup" },
  { type: "checkbox", label: "Checkbox", icon: Tu, width: 0.06, height: 0.04, keyPrefix: "Checkbox" }
];
function He(t) {
  return gi.find((e) => e.type === t) ?? gi[0];
}
const eh = 1123;
function th(t) {
  const e = String(t ?? "");
  let n = 0;
  for (let a = 0; a < e.length; a++)
    n = (n << 5) - n + e.charCodeAt(a), n |= 0;
  return Math.abs(n) % 360;
}
const nh = 220;
function yi(t) {
  return `hsl(${t ? th(t) : nh}, 70%, 42%)`;
}
function ah(t, e) {
  return e ? (t || []).find((a) => String(a.id) === String(e))?.color || yi(e) : yi(null);
}
function ih(t) {
  return `color-mix(in srgb, ${t} 18%, white)`;
}
function Yo(t) {
  return !t?.role || t.role === "signer";
}
const oh = { class: "fu-modal__header" }, rh = { class: "fu-modal__title" }, sh = { class: "fu-modal__body" }, lh = {
  key: 0,
  class: "fu-modal__footer"
}, uh = /* @__PURE__ */ le({
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
          f("div", oh, [
            f("h3", rh, w(t.title), 1),
            Q(Pe, {
              text: " ",
              icon: ee(Xe),
              class: "fu-modal__close",
              onClick: a,
              variant: "ghost",
              size: "sm"
            }, null, 8, ["icon"])
          ]),
          f("div", sh, [
            se(o.$slots, "default", {}, () => [
              r[0] || (r[0] = de(" Default modal content. ", -1))
            ], !0)
          ]),
          t.showFooter ? (l(), c("div", lh, [
            se(o.$slots, "footer", {}, void 0, !0)
          ])) : A("", !0)
        ], 2)
      ])) : A("", !0)
    ]));
  }
}), tn = /* @__PURE__ */ te(uh, [["__scopeId", "data-v-e557445e"]]), ch = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: tn
}, Symbol.toStringTag, { value: "Module" })), dh = { class: "fu-tabs" }, fh = { class: "fu-tabs__header-wrapper" }, mh = { class: "fu-tabs-buttons scrollbar__control customScrollBar" }, hh = ["onClick", "disabled"], vh = {
  key: 0,
  class: "fu-tab__avatar"
}, ph = ["src"], gh = {
  key: 1,
  class: "fu-tab__avatar-fallback"
}, yh = {
  key: 2,
  class: "fu-tab__title"
}, bh = {
  key: 3,
  class: "fu-tab__count"
}, _h = { class: "fu-tabs__content-wrapper" }, Ch = {
  key: 0,
  class: "fu-tabs__footer"
}, wh = {
  __name: "FusionTab",
  props: {
    tabs: Array,
    defaultActiveDesktop: String,
    defaultActiveMobile: String
  },
  emits: ["tab-change"],
  setup(t, { expose: e, emit: n }) {
    const a = t, i = n, o = M(window.innerWidth <= 768), r = M(""), s = M(null), u = O(
      () => a.tabs.filter((h) => !h.mobileOnly || o.value)
    );
    function d() {
      const h = s.value;
      h && (h.style.overflowY = "hidden", requestAnimationFrame(() => {
        h.style.overflowY = "auto";
      }));
    }
    function m(h) {
      const y = a.tabs.find((g) => g.key === h);
      !y || y.disabled || (r.value = h, i("tab-change", h), ge(() => {
        const g = s.value;
        g && (g.scrollTop = 0, d());
      }));
    }
    function v() {
      const h = a.tabs[0]?.key, y = o.value ? a.defaultActiveMobile || h : a.defaultActiveDesktop || h;
      r.value = y;
    }
    function p() {
      const h = o.value;
      o.value = window.innerWidth <= 768, h !== o.value && ge(v);
    }
    return we(() => {
      p(), v(), d(), window.addEventListener("resize", p);
    }), Ae(() => {
      window.removeEventListener("resize", p);
    }), e({ setActive: m }), (h, y) => (l(), c("div", dh, [
      f("div", fh, [
        f("div", mh, [
          (l(!0), c(L, null, oe(u.value, (g) => (l(), c("button", {
            key: g.key,
            onClick: (b) => m(g.key),
            class: X(["fu-tab", { "fu-tab--active": r.value === g.key }]),
            disabled: g.disabled
          }, [
            g.avatarSrc || g.avatarText ? (l(), c("div", vh, [
              g.avatarSrc ? (l(), c("img", {
                key: 0,
                src: g.avatarSrc,
                class: "fu-tab__avatar-img",
                alt: "avatar"
              }, null, 8, ph)) : (l(), c("div", gh, w(g.avatarText?.charAt(0)?.toUpperCase()), 1))
            ])) : g.icon ? (l(), Z(me(g.icon), {
              key: 1,
              size: 16,
              class: "fu-tab__icon"
            })) : A("", !0),
            !g.avatarSrc && !g.avatarText && g.title ? (l(), c("span", yh, w(g.title), 1)) : A("", !0),
            typeof g.count == "number" ? (l(), c("span", bh, w(g.count), 1)) : A("", !0)
          ], 10, hh))), 128))
        ])
      ]),
      f("div", _h, [
        f("div", {
          class: "fu-tabs__body scrollbar__control customScrollBar",
          ref_key: "tabBody",
          ref: s
        }, [
          (l(), Z(rl, null, [
            (l(!0), c(L, null, oe(u.value, (g) => Ue((l(), c("div", {
              key: g.key,
              class: "fu-tab-panel"
            }, [
              se(h.$slots, g.key, {}, void 0, !0)
            ])), [
              [$o, r.value === g.key]
            ])), 128))
          ], 1024))
        ], 512),
        h.$slots.footer ? (l(), c("div", Ch, [
          se(h.$slots, "footer", {}, void 0, !0)
        ])) : A("", !0)
      ])
    ]));
  }
}, Pa = /* @__PURE__ */ te(wh, [["__scopeId", "data-v-d90ec7a6"]]), Ah = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Pa
}, Symbol.toStringTag, { value: "Module" })), kh = { class: "sig-draw" }, Sh = { class: "sig-draw__toolbar" }, Th = { class: "sig-draw__colors" }, Eh = ["onClick"], Mh = { class: "sig-type" }, Nh = { class: "sig-type__preview" }, Dh = { class: "sig-saved" }, Ih = ["src"], Oh = {
  key: 1,
  class: "sig-saved__typed"
}, Rh = {
  key: 1,
  class: "sig-saved__empty"
}, $h = { class: "sig-footer" }, xh = {
  key: 0,
  class: "sig-hint"
}, Ph = { class: "sig-actions" }, bi = "skkido_saved_signature", Fh = {
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
      const R = s.value, H = u.value;
      if (!R || !H) return;
      const U = H.getBoundingClientRect(), $ = window.devicePixelRatio || 1;
      R.width = U.width * $, R.height = U.height * $, R.style.width = U.width + "px", R.style.height = U.height + "px", R.getContext("2d").scale($, $);
    }
    function h(R) {
      const H = s.value.getBoundingClientRect(), U = R.touches?.[0] ?? R;
      return { x: U.clientX - H.left, y: U.clientY - H.top };
    }
    function y(R) {
      d.value = !0;
      const H = s.value.getContext("2d"), { x: U, y: $ } = h(R);
      H.beginPath(), H.moveTo(U, $);
    }
    function g(R) {
      if (!d.value) return;
      const H = s.value.getContext("2d"), { x: U, y: $ } = h(R);
      H.strokeStyle = v.value, H.lineWidth = 2.5, H.lineCap = "round", H.lineTo(U, $), H.stroke(), m.value = !0;
    }
    function b() {
      d.value = !1;
    }
    function _() {
      const R = s.value;
      if (!R) return;
      const H = window.devicePixelRatio || 1;
      R.getContext("2d").clearRect(0, 0, R.width / H, R.height / H), m.value = !1;
    }
    const C = M(""), k = M(null);
    function E() {
      try {
        k.value = JSON.parse(localStorage.getItem(bi) || "null");
      } catch {
        k.value = null;
      }
    }
    function D(R) {
      try {
        localStorage.setItem(bi, JSON.stringify(R));
      } catch {
      }
      k.value = R;
    }
    const x = O(() => o.value === "draw" ? m.value : o.value === "type" ? C.value.trim().length >= 2 : o.value === "mySignature" ? !!k.value : !1), I = O(
      () => (o.value === "draw" || o.value === "type") && !x.value
    );
    function V() {
      if (!x.value) return;
      let R = null;
      o.value === "draw" ? R = { type: "drawn", dataUrl: s.value.toDataURL("image/png") } : o.value === "type" ? R = { type: "typed", text: C.value.trim() } : o.value === "mySignature" && (R = k.value), R && (o.value !== "mySignature" && D(R), a("signed", {
        ...R,
        signerName: n.signerName,
        signedOn: (/* @__PURE__ */ new Date()).toISOString()
      }), a("close"));
    }
    let j = null;
    return we(() => {
      E(), ge(p), j = new ResizeObserver(() => p()), u.value && j.observe(u.value);
    }), Ae(() => {
      j?.disconnect();
    }), he(
      () => n.isVisible,
      (R) => {
        R && (o.value = "draw", m.value = !1, C.value = "", E(), ge(() => {
          p(), _();
        }));
      }
    ), (R, H) => (l(), Z(tn, {
      isVisible: t.isVisible,
      title: "Signature",
      size: "md",
      onClose: H[3] || (H[3] = (U) => R.$emit("close"))
    }, {
      footer: ce(() => [
        f("div", $h, [
          H[5] || (H[5] = f("p", { class: "sig-consent" }, " By electronically signing this document, I agree that my signature and initials are the equivalent of my handwritten signature and are considered originals on all documents, including legally binding contracts. ", -1)),
          I.value ? (l(), c("div", xh, " To make your signature valid, please use at least two alphanumeric characters or continue signing. ")) : A("", !0),
          f("div", Ph, [
            Q(Se, {
              variant: "outline",
              text: "Cancel",
              onClick: H[2] || (H[2] = (U) => R.$emit("close"))
            }),
            Q(Se, {
              variant: "success",
              text: "Accept and sign",
              disabled: !x.value,
              onClick: V
            }, null, 8, ["disabled"])
          ])
        ])
      ]),
      default: ce(() => [
        Q(Pa, {
          defaultActiveDesktop: "draw",
          defaultActiveMobile: "draw",
          tabs: i,
          onTabChange: H[1] || (H[1] = (U) => o.value = U)
        }, {
          draw: ce(() => [
            f("div", kh, [
              f("div", Sh, [
                f("button", {
                  class: "sig-draw__clear",
                  onClick: _
                }, "Clear"),
                f("div", Th, [
                  (l(), c(L, null, oe(r, (U) => f("button", {
                    key: U,
                    class: X(["sig-draw__swatch", { active: v.value === U }]),
                    style: ie({ backgroundColor: U }),
                    onClick: ($) => v.value = U
                  }, null, 14, Eh)), 64))
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
                  onMousedown: y,
                  onMousemove: g,
                  onMouseup: b,
                  onMouseleave: b,
                  onTouchstart: ue(y, ["prevent"]),
                  onTouchmove: ue(g, ["prevent"]),
                  onTouchend: ue(b, ["prevent"])
                }, null, 544),
                H[4] || (H[4] = f("div", { class: "sig-draw__line" }, null, -1))
              ], 512)
            ])
          ]),
          type: ce(() => [
            f("div", Mh, [
              Q(Oe, {
                modelValue: C.value,
                "onUpdate:modelValue": H[0] || (H[0] = (U) => C.value = U),
                label: "Type your name",
                placeholder: "Your full name",
                size: "md",
                variant: "outline",
                formWrapperWidth: "100%"
              }, null, 8, ["modelValue"]),
              f("div", Nh, w(C.value || "Your signature"), 1)
            ])
          ]),
          mySignature: ce(() => [
            f("div", Dh, [
              k.value ? (l(), c(L, { key: 0 }, [
                k.value.dataUrl ? (l(), c("img", {
                  key: 0,
                  src: k.value.dataUrl,
                  alt: "Saved signature",
                  class: "sig-saved__preview"
                }, null, 8, Ih)) : (l(), c("div", Oh, w(k.value.text), 1))
              ], 64)) : (l(), c("p", Rh, " No saved signature yet — draw or type one first and it'll be remembered here next time. "))
            ])
          ]),
          _: 1
        })
      ]),
      _: 1
    }, 8, ["isVisible"]));
  }
}, Go = /* @__PURE__ */ te(Fh, [["__scopeId", "data-v-0b2e9cbe"]]), Bh = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Go
}, Symbol.toStringTag, { value: "Module" })), zh = { class: "init-draw" }, Lh = { class: "init-draw__toolbar" }, Vh = { class: "init-draw__colors" }, Hh = ["onClick"], jh = { class: "init-type" }, Uh = { class: "init-type__preview" }, Wh = { class: "init-footer" }, Yh = {
  key: 0,
  class: "init-hint"
}, Gh = { class: "init-actions" }, qh = {
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
      const I = s.value, V = u.value;
      if (!I || !V) return;
      const j = V.getBoundingClientRect(), R = window.devicePixelRatio || 1;
      I.width = j.width * R, I.height = j.height * R, I.style.width = j.width + "px", I.style.height = j.height + "px", I.getContext("2d").scale(R, R);
    }
    function h(I) {
      const V = s.value.getBoundingClientRect(), j = I.touches?.[0] ?? I;
      return { x: j.clientX - V.left, y: j.clientY - V.top };
    }
    function y(I) {
      d.value = !0;
      const V = s.value.getContext("2d"), { x: j, y: R } = h(I);
      V.beginPath(), V.moveTo(j, R);
    }
    function g(I) {
      if (!d.value) return;
      const V = s.value.getContext("2d"), { x: j, y: R } = h(I);
      V.strokeStyle = v.value, V.lineWidth = 2.5, V.lineCap = "round", V.lineTo(j, R), V.stroke(), m.value = !0;
    }
    function b() {
      d.value = !1;
    }
    function _() {
      const I = s.value;
      if (!I) return;
      const V = window.devicePixelRatio || 1;
      I.getContext("2d").clearRect(0, 0, I.width / V, I.height / V), m.value = !1;
    }
    const C = M(""), k = O(() => o.value === "draw" ? m.value : o.value === "type" ? C.value.trim().length >= 1 : !1), E = O(
      () => (o.value === "draw" || o.value === "type") && !k.value
    );
    function D() {
      if (!k.value) return;
      let I = null;
      o.value === "draw" ? I = { type: "drawn", dataUrl: s.value.toDataURL("image/png") } : o.value === "type" && (I = { type: "typed", text: C.value.trim() }), I && (a("initialed", {
        ...I,
        signerName: n.signerName,
        signedOn: (/* @__PURE__ */ new Date()).toISOString()
      }), a("close"));
    }
    let x = null;
    return we(() => {
      ge(p), x = new ResizeObserver(() => p()), u.value && x.observe(u.value);
    }), Ae(() => {
      x?.disconnect();
    }), he(
      () => n.isVisible,
      (I) => {
        I && (o.value = "draw", m.value = !1, C.value = "", ge(() => {
          p(), _();
        }));
      }
    ), (I, V) => (l(), Z(tn, {
      isVisible: t.isVisible,
      title: "Initials",
      size: "md",
      onClose: V[3] || (V[3] = (j) => I.$emit("close"))
    }, {
      footer: ce(() => [
        f("div", Wh, [
          V[5] || (V[5] = f("p", { class: "init-consent" }, " By continuing, I agree that these initials are the equivalent of my handwritten initials and are considered original on all documents, including legally binding contracts. ", -1)),
          E.value ? (l(), c("div", Yh, " To make your initials valid, please draw or type at least one character. ")) : A("", !0),
          f("div", Gh, [
            Q(Se, {
              variant: "outline",
              text: "Cancel",
              onClick: V[2] || (V[2] = (j) => I.$emit("close"))
            }),
            Q(Se, {
              variant: "success",
              text: "Accept and Sign",
              disabled: !k.value,
              onClick: D
            }, null, 8, ["disabled"])
          ])
        ])
      ]),
      default: ce(() => [
        Q(Pa, {
          defaultActiveDesktop: "draw",
          defaultActiveMobile: "draw",
          tabs: i,
          onTabChange: V[1] || (V[1] = (j) => o.value = j)
        }, {
          draw: ce(() => [
            f("div", zh, [
              f("div", Lh, [
                f("button", {
                  class: "init-draw__clear",
                  onClick: _
                }, "Clear"),
                f("div", Vh, [
                  (l(), c(L, null, oe(r, (j) => f("button", {
                    key: j,
                    class: X(["init-draw__swatch", { active: v.value === j }]),
                    style: ie({ backgroundColor: j }),
                    onClick: (R) => v.value = j
                  }, null, 14, Hh)), 64))
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
                  onMousedown: y,
                  onMousemove: g,
                  onMouseup: b,
                  onMouseleave: b,
                  onTouchstart: ue(y, ["prevent"]),
                  onTouchmove: ue(g, ["prevent"]),
                  onTouchend: ue(b, ["prevent"])
                }, null, 544),
                V[4] || (V[4] = f("div", { class: "init-draw__line" }, null, -1))
              ], 512)
            ])
          ]),
          type: ce(() => [
            f("div", jh, [
              Q(Oe, {
                modelValue: C.value,
                "onUpdate:modelValue": V[0] || (V[0] = (j) => C.value = j),
                label: "Type your initials",
                placeholder: "e.g. JD",
                size: "md",
                variant: "outline",
                formWrapperWidth: "100%"
              }, null, 8, ["modelValue"]),
              f("div", Uh, w(C.value || "Your initials"), 1)
            ])
          ]),
          _: 1
        })
      ]),
      _: 1
    }, 8, ["isVisible"]));
  }
}, qo = /* @__PURE__ */ te(qh, [["__scopeId", "data-v-e69c0bbc"]]), Kh = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: qo
}, Symbol.toStringTag, { value: "Module" })), Qh = { class: "fu-popover__body customScrollBar" }, Zh = /* @__PURE__ */ le({
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
            y(), ge(() => {
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
    function y() {
      if (!r.value || !s.value) return;
      const b = r.value.getBoundingClientRect(), _ = s.value.getBoundingClientRect(), C = 8, k = a.offset ?? 6, E = window.innerHeight - b.bottom - C, D = b.top - C;
      let x = a.side ?? "bottom";
      x === "bottom" && _.height > E && D > E ? x = "top" : x === "top" && _.height > D && E > D && (x = "bottom");
      let I = x === "top" ? b.top - _.height - k : b.bottom + k, V = a.align === "right" ? b.right - _.width : a.align === "center" ? b.left + b.width / 2 - _.width / 2 : b.left;
      V = Math.max(C, Math.min(V, window.innerWidth - _.width - C)), I = Math.max(C, Math.min(I, window.innerHeight - _.height - C)), u.value = {
        position: "fixed",
        top: `${I}px`,
        left: `${V}px`,
        width: a.width ?? "auto",
        maxHeight: a.maxHeight ?? "none",
        zIndex: 9999,
        visibility: "visible"
      };
    }
    function g(b) {
      if (!o.value) return;
      const _ = b.target;
      r.value?.contains(_) || s.value?.contains(_) || _ instanceof Element && _.closest(".fu-popover, .fu-popover-wrap") || h();
    }
    return we(() => {
      window.addEventListener("mousedown", g), window.addEventListener("resize", y), window.addEventListener("scroll", y, !0);
    }), Ae(() => {
      window.removeEventListener("mousedown", g), window.removeEventListener("resize", y), window.removeEventListener("scroll", y, !0);
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
              f("div", Qh, [
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
}), Ko = /* @__PURE__ */ te(Zh, [["__scopeId", "data-v-aba7d9dd"]]), Jh = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Ko
}, Symbol.toStringTag, { value: "Module" })), Xh = ["disabled"], ev = { key: 0 }, tv = {
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
    const r = O(() => n.value ? o(n.value) : "");
    function s(u) {
      a("update:value", u), i.value?.close();
    }
    return (u, d) => (l(), Z(Ko, {
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
          t.value ? (l(), c("span", ev, w(r.value), 1)) : (l(), c(L, { key: 1 }, [
            (l(), Z(me(ee(He)("date").icon), { size: 13 })),
            f("span", null, w(t.placeholder || "Select a date"), 1)
          ], 64))
        ], 8, Xh)
      ]),
      default: ce(() => [
        Q(Wo, {
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
}, Qo = /* @__PURE__ */ te(tv, [["__scopeId", "data-v-1066fe4d"]]), nv = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Qo
}, Symbol.toStringTag, { value: "Module" })), av = { class: "fu-upload__content" }, iv = {
  key: 0,
  class: "fu-upload__previews"
}, ov = ["onClick"], rv = ["src"], sv = {
  key: 1,
  class: "fu-upload__file-fallback"
}, lv = {
  key: 1,
  class: "fu-upload__prompt"
}, uv = ["multiple", "accept"], cv = /* @__PURE__ */ le({
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
    function m(y) {
      const g = y.target;
      g.files?.length && (p(g.files), g.value = "");
    }
    function v(y) {
      i.value = !1;
      const g = y.dataTransfer?.files;
      g?.length && p(g);
    }
    function p(y) {
      const g = Array.from(y);
      n.multiple || (r.value = [], s.value = []);
      for (const b of g) {
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
          E.onload = (D) => {
            s.value.push({
              id: C,
              src: D.target?.result,
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
    function h(y) {
      r.value.splice(y, 1), s.value.splice(y, 1), a("filesSelected", r.value);
    }
    return (y, g) => (l(), c("div", {
      class: X(["fu-upload", { dragging: i.value }]),
      onClick: d,
      onDragover: g[0] || (g[0] = ue((b) => i.value = !0, ["prevent"])),
      onDragleave: g[1] || (g[1] = ue((b) => i.value = !1, ["prevent"])),
      onDrop: ue(v, ["prevent"])
    }, [
      f("div", av, [
        s.value.length ? (l(), c("div", iv, [
          (l(!0), c(L, null, oe(s.value, (b, _) => (l(), c("div", {
            key: b.id,
            class: "fu-upload__preview-item"
          }, [
            f("button", {
              class: "fu-upload__remove",
              onClick: ue((C) => h(_), ["stop"])
            }, " ✕ ", 8, ov),
            b.isImage ? (l(), c("img", {
              key: 0,
              src: b.src,
              class: "fu-upload__preview-img",
              alt: "Preview"
            }, null, 8, rv)) : (l(), c("div", sv, [
              Q(ee(mi), { size: 20 }),
              f("span", null, w(b.file.name), 1)
            ]))
          ]))), 128))
        ])) : (l(), c("div", lv, [
          Q(ee(mi), {
            class: "fu-upload__icon",
            size: 22
          }),
          se(y.$slots, "description", {}, () => [
            g[2] || (g[2] = f("p", { class: "fu-upload__text" }, " Drag & drop files or click to browse ", -1))
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
        }, null, 40, uv)
      ])
    ], 34));
  }
}), Fa = /* @__PURE__ */ te(cv, [["__scopeId", "data-v-e43b8d62"]]), dv = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Fa
}, Symbol.toStringTag, { value: "Module" })), fv = {
  key: 0,
  class: "fucm-error"
}, mv = {
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
    return (r, s) => (l(), Z(tn, {
      isVisible: t.isVisible,
      title: "Upload file",
      size: "md",
      onClose: s[0] || (s[0] = (u) => r.$emit("close"))
    }, {
      default: ce(() => [
        Q(Fa, {
          multiple: "",
          accept: "image/*,application/pdf",
          maxFiles: 3,
          maxFileSizeMB: 10,
          onFilesSelected: i,
          onUploadError: o
        }),
        a.value ? (l(), c("p", fv, w(a.value), 1)) : A("", !0)
      ]),
      _: 1
    }, 8, ["isVisible"]));
  }
}, Zo = /* @__PURE__ */ te(mv, [["__scopeId", "data-v-a7a8e074"]]), hv = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Zo
}, Symbol.toStringTag, { value: "Module" })), vv = { class: "fc-root" }, pv = {
  key: 0,
  class: "fc-field__signed"
}, gv = ["src", "alt"], yv = {
  key: 1,
  class: "fc-field__sig-typed"
}, bv = { class: "fc-field__signed-name" }, _v = ["disabled", "onClick"], Cv = {
  key: 2,
  class: "fc-field__readonly"
}, wv = { class: "fc-field__label" }, Av = {
  key: 1,
  class: "fc-field__readonly"
}, kv = {
  key: 2,
  class: "fc-field__readonly"
}, Sv = { class: "fc-field__label" }, Tv = ["disabled", "required", "placeholder", "value", "onInput"], Ev = {
  key: 1,
  class: "fc-field__readonly"
}, Mv = {
  key: 2,
  class: "fc-field__readonly"
}, Nv = { class: "fc-field__label" }, Dv = ["disabled", "required", "value", "onChange"], Iv = {
  value: "",
  disabled: ""
}, Ov = ["value"], Rv = {
  key: 1,
  class: "fc-field__readonly"
}, $v = {
  key: 2,
  class: "fc-field__readonly"
}, xv = { class: "fc-field__label" }, Pv = {
  key: 0,
  class: "fc-field__radio-list"
}, Fv = ["name", "disabled", "checked", "onChange"], Bv = {
  key: 1,
  class: "fc-field__readonly"
}, zv = {
  key: 2,
  class: "fc-field__readonly"
}, Lv = { class: "fc-field__label" }, Vv = {
  key: 0,
  class: "fc-field__checkbox-row"
}, Hv = ["disabled", "checked", "onChange"], jv = { key: 0 }, Uv = {
  key: 1,
  class: "fc-field__readonly fc-field__checkbox-row"
}, Wv = { key: 1 }, Yv = ["disabled", "onClick"], Gv = {
  key: 1,
  class: "fc-field__readonly fc-field__file"
}, qv = {
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
    const a = t, i = n, o = Qt({}), r = Qt({}), s = M(null);
    function u(B) {
      const K = r[B];
      K && (K.scrollIntoView({ behavior: "smooth", block: "center" }), s.value = B, setTimeout(() => {
        s.value === B && (s.value = null);
      }, 1200));
    }
    e({ focusField: u }), he(
      () => a.recipient,
      (B) => {
        Object.keys(o).forEach((K) => delete o[K]), Object.assign(o, B?.field_values || {});
      },
      { immediate: !0 }
    ), he(
      o,
      () => {
        i(
          "update:capturedFields",
          Object.entries(o).map(([B, K]) => ({ fieldId: B, value: K }))
        );
      },
      { deep: !0 }
    );
    function d(B, K) {
      o[B] = K;
    }
    function m(B) {
      const K = _(B);
      return K != null && K !== "";
    }
    function v(B) {
      return !a.readOnly && p(B);
    }
    function p(B) {
      return B.recipientId === a.recipient?.id && Yo(a.recipient);
    }
    function h(B) {
      return ah(a.recipients, B);
    }
    function y(B) {
      return m(B) ? { border: "none", background: "transparent", color: "#111827" } : p(B) ? {
        borderColor: h(B.recipientId),
        backgroundColor: ih(h(B.recipientId)),
        color: h(B.recipientId)
      } : { borderColor: "#d1d5db", backgroundColor: "#f3f4f6", color: "#9ca3af" };
    }
    function g(B) {
      return p(B) ? a.recipient?.name || "" : b(B.recipientId)?.name || "";
    }
    function b(B) {
      return a.recipients.find((K) => String(K.id) === String(B));
    }
    function _(B) {
      return p(B) ? o[B.id] : b(B.recipientId)?.field_values?.[B.id];
    }
    function C(B) {
      if (!B) return "";
      const K = new Date(B);
      return Number.isNaN(K.getTime()) ? B : K.toLocaleDateString(void 0, { year: "numeric", month: "short", day: "numeric" });
    }
    const k = M([]);
    let E = null;
    function D() {
      const B = a.hostEl;
      if (!B) return;
      const K = B.querySelectorAll(".page-renderer");
      k.value = a.pages.map((z, W) => {
        const S = K[W];
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
      async (B) => {
        E?.disconnect(), E = null, B && (await ge(), D(), E = new ResizeObserver(() => D()), E.observe(B));
      },
      { immediate: !0 }
    ), he(
      () => a.pages,
      async () => {
        await ge(), D();
      }
    ), Ae(() => E?.disconnect());
    function x(B, K) {
      const z = k.value[K];
      return z ? {
        position: "absolute",
        left: z.left + B.x * z.width + "px",
        top: z.top + B.y * z.height + "px",
        width: B.width * z.width + "px",
        // Height is stored as a fraction of the editor's nominal page height
        // (PAGE_HEIGHT_PX), not a fraction of the actual rendered page height —
        // matching how FieldOverlay.vue renders it in the editor.
        height: B.height * eh + "px"
      } : { display: "none" };
    }
    const I = M(!1), V = M(!1), j = M(!1), R = M(null);
    function H(B) {
      a.readOnly || (R.value = B, I.value = !0);
    }
    function U(B) {
      a.readOnly || (R.value = B, V.value = !0);
    }
    function $(B) {
      a.readOnly || (R.value = B, j.value = !0);
    }
    function T(B) {
      R.value && d(R.value.id, B);
    }
    function N(B) {
      R.value && d(R.value.id, B);
    }
    function P(B) {
      R.value && d(R.value.id, B);
    }
    return (B, K) => (l(), c("div", vv, [
      (l(!0), c(L, null, oe(t.pages, (z, W) => (l(), c(L, {
        key: z.id
      }, [
        (l(!0), c(L, null, oe(z.fields || [], (S) => (l(), c("div", {
          key: S.id,
          ref_for: !0,
          ref: (F) => r[S.id] = F,
          class: X(["fc-field", {
            "fc-field--mine": v(S),
            "fc-field--filled": m(S),
            "fc-field--flash": s.value === S.id
          }]),
          style: ie({ ...x(S, W), ...y(S) })
        }, [
          S.type === "signature" || S.type === "initials" ? (l(), c(L, { key: 0 }, [
            _(S) ? (l(), c("div", pv, [
              _(S).dataUrl || _(S).url ? (l(), c("img", {
                key: 0,
                src: _(S).dataUrl || _(S).url,
                class: "fc-field__sig-img",
                alt: S.type
              }, null, 8, gv)) : (l(), c("span", yv, w(_(S).text), 1)),
              f("span", bv, w(g(S)), 1)
            ])) : v(S) ? (l(), c("button", {
              key: 1,
              type: "button",
              class: "fc-field__btn",
              disabled: t.readOnly,
              onClick: (F) => S.type === "signature" ? H(S) : U(S)
            }, [
              (l(), Z(me(ee(He)(S.type).icon), { size: 13 })),
              f("span", null, w(S.placeholder || (S.type === "signature" ? "Sign here" : "Initial")), 1)
            ], 8, _v)) : (l(), c("div", Cv, [
              (l(), Z(me(ee(He)(S.type).icon), { size: 13 })),
              f("span", wv, w(ee(He)(S.type).label), 1)
            ]))
          ], 64)) : S.type === "date" ? (l(), c(L, { key: 1 }, [
            v(S) ? (l(), Z(Qo, {
              key: 0,
              value: _(S) || null,
              placeholder: S.placeholder,
              "read-only": t.readOnly,
              "onUpdate:value": (F) => d(S.id, F)
            }, null, 8, ["value", "placeholder", "read-only", "onUpdate:value"])) : _(S) ? (l(), c("div", Av, w(C(_(S))), 1)) : (l(), c("div", kv, [
              (l(), Z(me(ee(He)("date").icon), { size: 13 })),
              f("span", Sv, w(ee(He)("date").label), 1)
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
              onInput: (F) => d(S.id, F.target.value)
            }, null, 40, Tv)) : _(S) ? (l(), c("div", Ev, w(_(S)), 1)) : (l(), c("div", Mv, [
              (l(), Z(me(ee(He)("text").icon), { size: 13 })),
              f("span", Nv, w(ee(He)("text").label), 1)
            ]))
          ], 64)) : S.type === "dropdown" ? (l(), c(L, { key: 3 }, [
            v(S) ? (l(), c("select", {
              key: 0,
              class: "fc-field__input",
              disabled: t.readOnly,
              required: S.required,
              value: _(S) || "",
              onChange: (F) => d(S.id, F.target.value)
            }, [
              f("option", Iv, w(S.placeholder || "Select an option"), 1),
              (l(!0), c(L, null, oe(S.options || [], (F) => (l(), c("option", {
                key: F,
                value: F
              }, w(F), 9, Ov))), 128))
            ], 40, Dv)) : _(S) ? (l(), c("div", Rv, w(_(S)), 1)) : (l(), c("div", $v, [
              (l(), Z(me(ee(He)("dropdown").icon), { size: 13 })),
              f("span", xv, w(ee(He)("dropdown").label), 1)
            ]))
          ], 64)) : S.type === "radio" ? (l(), c(L, { key: 4 }, [
            v(S) ? (l(), c("div", Pv, [
              (l(!0), c(L, null, oe(S.options || [], (F) => (l(), c("label", {
                key: F,
                class: "fc-field__radio-row"
              }, [
                f("input", {
                  type: "radio",
                  name: S.id,
                  disabled: t.readOnly,
                  checked: _(S) === F,
                  onChange: (J) => d(S.id, F)
                }, null, 40, Fv),
                f("span", null, w(F), 1)
              ]))), 128))
            ])) : _(S) ? (l(), c("div", Bv, w(_(S)), 1)) : (l(), c("div", zv, [
              (l(), Z(me(ee(He)("radio").icon), { size: 13 })),
              f("span", Lv, w(ee(He)("radio").label), 1)
            ]))
          ], 64)) : S.type === "checkbox" ? (l(), c(L, { key: 5 }, [
            v(S) ? (l(), c("label", Vv, [
              f("input", {
                type: "checkbox",
                disabled: t.readOnly,
                checked: !!_(S),
                onChange: (F) => d(S.id, F.target.checked)
              }, null, 40, Hv),
              S.placeholder ? (l(), c("span", jv, w(S.placeholder), 1)) : A("", !0)
            ])) : (l(), c("div", Uv, [
              _(S) ? (l(), Z(ee(Bn), {
                key: 0,
                size: 14
              })) : A("", !0),
              S.placeholder ? (l(), c("span", Wv, w(S.placeholder), 1)) : A("", !0)
            ]))
          ], 64)) : S.type === "file" ? (l(), c(L, { key: 6 }, [
            v(S) ? (l(), c("button", {
              key: 0,
              type: "button",
              class: "fc-field__file",
              disabled: t.readOnly,
              onClick: (F) => $(S)
            }, [
              (l(), Z(me(ee(He)("file").icon), { size: 13 })),
              f("span", null, w(_(S)?.name || S.placeholder || "Upload file"), 1)
            ], 8, Yv)) : (l(), c("div", Gv, [
              (l(), Z(me(ee(He)("file").icon), { size: 13 })),
              f("span", null, w(_(S)?.name || ee(He)("file").label), 1)
            ]))
          ], 64)) : A("", !0)
        ], 6))), 128))
      ], 64))), 128)),
      Q(Go, {
        isVisible: I.value,
        signerName: t.recipient?.name || "",
        onClose: K[0] || (K[0] = (z) => I.value = !1),
        onSigned: T
      }, null, 8, ["isVisible", "signerName"]),
      Q(qo, {
        isVisible: V.value,
        signerName: t.recipient?.name || "",
        onClose: K[1] || (K[1] = (z) => V.value = !1),
        onInitialed: N
      }, null, 8, ["isVisible", "signerName"]),
      Q(Zo, {
        isVisible: j.value,
        onClose: K[2] || (K[2] = (z) => j.value = !1),
        onUploaded: P
      }, null, 8, ["isVisible"])
    ]));
  }
}, Ba = /* @__PURE__ */ te(qv, [["__scopeId", "data-v-4a28a19a"]]), Kv = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Ba
}, Symbol.toStringTag, { value: "Module" })), _i = {
  full: { label: "Full Width", fluid: !0 },
  a4: { label: "A4", portrait: { w: 794, h: 1123 }, landscape: { w: 1123, h: 794 } },
  a3: { label: "A3", portrait: { w: 1123, h: 1587 }, landscape: { w: 1587, h: 1123 } },
  letter: { label: "Letter", portrait: { w: 816, h: 1056 }, landscape: { w: 1056, h: 816 } },
  legal: { label: "Legal", portrait: { w: 816, h: 1344 }, landscape: { w: 1344, h: 816 } }
};
function Jo(t = "a4", e = "portrait") {
  const n = _i[t] ?? _i.a4;
  return n[e] ?? n.portrait;
}
function Qv(t = "a4", e = "portrait") {
  if (t === "full") return { width: "100%", margin: "0" };
  const { w: n, h: a } = Jo(t, e);
  return { width: `${n}px`, minHeight: `${a}px`, margin: "0 auto" };
}
const Zv = /* @__PURE__ */ new Set([
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
]), Ci = /* @__PURE__ */ new Set();
function wi(t) {
  if (!t || Zv.has(t) || Ci.has(t)) return;
  Ci.add(t);
  const e = encodeURIComponent(t).replace(/%20/g, "+"), n = document.createElement("link");
  n.rel = "stylesheet", n.href = `https://fonts.googleapis.com/css2?family=${e}:wght@400;500;600;700&display=swap`, document.head.appendChild(n);
}
const Jv = /font-family:\s*([^;'"<,\n]+)/g;
function Xo(t) {
  if (!t) return;
  const e = t.meta?.theme?.questionFont;
  e && e !== "inherit" && wi(e.trim());
  for (const n of t.pages ?? [])
    for (const a of n.blocks ?? [])
      for (const i of a.columns ?? [])
        for (const o of i.widgets ?? []) {
          const r = o.props?.content;
          if (r)
            for (const [, s] of r.matchAll(Jv))
              wi(s.trim().replace(/['"]/g, ""));
        }
}
const Xv = {
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
    Da(() => Xo(a.document));
    const s = M(0);
    let u = null;
    we(() => {
      const p = o.value?.parentElement;
      p && (u = new ResizeObserver(([h]) => {
        s.value = h.contentRect.width;
      }), u.observe(p));
    }), Ae(() => u?.disconnect());
    const d = O(() => {
      const p = a.document?.meta?.pageLayout ?? {};
      if (p.pageSize === "full") return 1;
      const { w: h } = Jo(p.pageSize, p.orientation);
      return !s.value || !h ? 1 : Math.min(1, s.value / h);
    }), m = O(() => {
      const p = a.document?.meta?.pageLayout ?? {}, h = Qv(p.pageSize, p.orientation);
      if (p.pageSize === "full") return h;
      const y = h.minHeight ?? "1123px";
      return {
        ...h,
        minHeight: void 0,
        "--page-min-height": y,
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
      t.document ? (l(), Z(xa, {
        key: 0,
        document: t.document,
        onAction: h[0] || (h[0] = (y) => i("action", y))
      }, null, 8, ["document"])) : A("", !0),
      Q(Ba, {
        ref_key: "overlayRef",
        ref: r,
        pages: t.document?.pages || [],
        recipient: t.recipient,
        recipients: t.recipients,
        "read-only": t.readOnly,
        "host-el": o.value,
        "onUpdate:capturedFields": h[1] || (h[1] = (y) => i("update:capturedFields", y))
      }, null, 8, ["pages", "recipient", "recipients", "read-only", "host-el"])
    ], 4));
  }
}, er = /* @__PURE__ */ te(Xv, [["__scopeId", "data-v-c6e04fdd"]]), ep = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: er
}, Symbol.toStringTag, { value: "Module" })), tp = { class: "pts-root" }, np = { class: "pts-header" }, ap = { class: "pts-doc-header__text" }, ip = { class: "pts-doc-header__title" }, op = { class: "pts-doc-header__count" }, rp = {
  key: 0,
  class: "pts-list"
}, sp = ["onClick"], lp = { class: "pts-item__num" }, up = { class: "pts-item__thumb" }, cp = {
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
    const e = M(!0), n = Qt({});
    return (a, i) => (l(), c("aside", tp, [
      f("div", np, [
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
        f("span", ap, [
          f("span", ip, w(t.title), 1),
          f("span", op, w(t.pages.length) + " page" + w(t.pages.length === 1 ? "" : "s"), 1)
        ]),
        e.value ? (l(), Z(ee(Ia), {
          key: 0,
          size: 14
        })) : (l(), Z(ee(xe), {
          key: 1,
          size: 14
        }))
      ]),
      e.value ? (l(), c("div", rp, [
        (l(!0), c(L, null, oe(t.pages, (o, r) => (l(), c("button", {
          key: o.id,
          type: "button",
          class: X(["pts-item", { "pts-item--active": r === t.activePageIndex }]),
          onClick: (s) => a.$emit("select-page", r)
        }, [
          f("span", lp, w(r + 1), 1),
          f("span", up, [
            f("span", {
              class: "pts-item__thumb-scale",
              ref_for: !0,
              ref: (s) => n[o.id] = s
            }, [
              Q(xa, {
                document: { pages: [o] }
              }, null, 8, ["document"]),
              Q(Ba, {
                pages: [o],
                recipient: t.recipient,
                recipients: t.recipients,
                "read-only": !0,
                "host-el": n[o.id] || null
              }, null, 8, ["pages", "recipient", "recipients", "host-el"])
            ], 512)
          ])
        ], 10, sp))), 128))
      ])) : A("", !0)
    ]));
  }
}, tr = /* @__PURE__ */ te(cp, [["__scopeId", "data-v-853b5846"]]), dp = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: tr
}, Symbol.toStringTag, { value: "Module" })), fp = {
  class: "mad-panel",
  role: "dialog",
  "aria-modal": "true"
}, mp = { class: "mad-header" }, hp = { class: "mad-title" }, vp = {
  key: 0,
  class: "mad-author"
}, pp = { class: "mad-body" }, gp = { class: "mad-section" }, yp = { class: "mad-recipients" }, bp = ["title"], _p = { class: "mad-section" }, Cp = ["onClick"], wp = { class: "mad-section" }, Ap = { class: "mad-footer" }, kp = {
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
      { label: "Download", icon: Yl, action: () => n("download") },
      { label: "Print", icon: _u, action: () => window.print() },
      { label: "Cookie preferences", icon: Ul, action: () => {
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
            f("div", fp, [
              f("div", mp, [
                f("div", null, [
                  f("h3", hp, w(t.title), 1),
                  t.author ? (l(), c("p", vp, "by " + w(t.author), 1)) : A("", !0)
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
              f("div", pp, [
                f("section", gp, [
                  r[4] || (r[4] = f("h4", { class: "mad-section__label" }, "Recipients", -1)),
                  f("div", yp, [
                    (l(!0), c(L, null, oe(t.recipients, (s) => (l(), c("span", {
                      key: s.id,
                      class: "mad-avatar",
                      style: ie({ backgroundColor: s.color }),
                      title: s.name
                    }, w(a(s.name)), 13, bp))), 128))
                  ])
                ]),
                f("section", _p, [
                  r[5] || (r[5] = f("h4", { class: "mad-section__label" }, "Actions", -1)),
                  (l(), c(L, null, oe(i, (s) => f("button", {
                    key: s.label,
                    type: "button",
                    class: "mad-row",
                    onClick: s.action
                  }, [
                    (l(), Z(me(s.icon), { size: 18 })),
                    f("span", null, w(s.label), 1)
                  ], 8, Cp)), 64))
                ]),
                f("section", wp, [
                  r[7] || (r[7] = f("h4", { class: "mad-section__label" }, "Other", -1)),
                  f("button", {
                    type: "button",
                    class: "mad-row",
                    onClick: r[1] || (r[1] = (s) => o.$emit("toggle-documents"))
                  }, [
                    Q(ee(nu), { size: 18 }),
                    r[6] || (r[6] = f("span", null, "Documents", -1))
                  ])
                ])
              ]),
              f("div", Ap, [
                f("button", {
                  type: "button",
                  class: "mad-decline",
                  onClick: r[2] || (r[2] = (s) => o.$emit("decline"))
                }, [
                  Q(ee(wl), { size: 16 }),
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
}, nr = /* @__PURE__ */ te(kp, [["__scopeId", "data-v-fbabfdb0"]]), Sp = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: nr
}, Symbol.toStringTag, { value: "Module" })), Tp = { class: "fu-viewer" }, Ep = { class: "fu-viewer__header" }, Mp = { class: "fu-viewer__header-left" }, Np = { class: "fu-viewer__header-text" }, Dp = { class: "fu-viewer__header-title" }, Ip = {
  key: 0,
  class: "fu-viewer__header-author"
}, Op = { class: "fu-viewer__header-right" }, Rp = ["title"], $p = { class: "fu-viewer__more" }, xp = {
  key: 1,
  class: "fu-viewer__required-bar"
}, Pp = { class: "fu-viewer__required-bar-left" }, Fp = { class: "fu-viewer__body" }, Bp = { class: "fu-viewer__main" }, zp = { class: "fu-viewer__main-subheader" }, Lp = { class: "fu-viewer__main-title" }, Vp = { class: "fu-viewer__main-doc" }, Hp = {
  key: 2,
  class: "fu-viewer__finish-bar"
}, jp = ["disabled"], Up = {
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
      const y = (h || "").trim().split(/\s+/).filter(Boolean);
      return y.length ? (y[0][0] + (y[1]?.[0] || "")).toUpperCase() : "?";
    }
    const u = O(() => {
      if (!Yo(e.recipient)) return [];
      const h = [];
      for (const y of e.document?.pages || [])
        for (const g of y.fields || [])
          g.required && g.recipientId === e.recipient?.id && h.push(g);
      return h;
    }), d = O(
      () => new Set(
        a.value.filter((h) => h.value !== void 0 && h.value !== null && h.value !== "").map((h) => h.fieldId)
      )
    ), m = O(
      () => u.value.filter((h) => !d.value.has(h.id))
    );
    function v() {
      const h = m.value[0];
      h && n.value?.focusField(h.id);
    }
    he(m, (h, y) => {
      y && h.length > 0 && h.length < y.length && n.value?.focusField(h[0].id);
    });
    function p(h) {
      n.value?.scrollToPage(h);
    }
    return (h, y) => (l(), c("div", Tp, [
      f("div", Ep, [
        f("div", Mp, [
          Q(ee(Fo), {
            size: 18,
            class: "fu-viewer__header-icon"
          }),
          f("div", Np, [
            f("span", Dp, w(t.title), 1),
            t.author ? (l(), c("span", Ip, "by " + w(t.author), 1)) : A("", !0)
          ])
        ]),
        f("div", Op, [
          (l(!0), c(L, null, oe(t.recipients, (g) => (l(), c("span", {
            key: g.id,
            class: "fu-viewer__avatar",
            style: ie({ backgroundColor: g.color }),
            title: g.name
          }, w(s(g.name)), 13, Rp))), 128)),
          f("div", $p, [
            f("button", {
              type: "button",
              class: "fu-viewer__more-btn",
              onClick: y[0] || (y[0] = (g) => i.value = !0)
            }, [
              y[9] || (y[9] = f("span", { class: "fu-viewer__more-label" }, "More actions", -1)),
              Q(ee(xe), { size: 14 })
            ])
          ])
        ])
      ]),
      Q(nr, {
        open: i.value,
        title: t.title,
        author: t.author,
        recipients: t.recipients,
        onClose: y[1] || (y[1] = (g) => i.value = !1),
        onToggleDocuments: r,
        onDownload: y[2] || (y[2] = (g) => h.$emit("download")),
        onDecline: y[3] || (y[3] = (g) => h.$emit("decline"))
      }, null, 8, ["open", "title", "author", "recipients"]),
      t.notice ? (l(), c("div", {
        key: 0,
        class: X(["fu-viewer__notice", `fu-viewer__notice--${t.notice.variant}`])
      }, w(t.notice.text), 3)) : m.value.length ? (l(), c("div", xp, [
        f("div", Pp, [
          Q(ee(Xl), { size: 16 }),
          f("span", null, "Please fill in " + w(m.value.length) + " required field" + w(m.value.length === 1 ? "" : "s") + ".", 1)
        ]),
        f("button", {
          type: "button",
          class: "fu-viewer__start-btn",
          onClick: v
        }, "Start")
      ])) : A("", !0),
      f("div", Fp, [
        o.value ? (l(), c("div", {
          key: 0,
          class: "fu-viewer__sidebar-backdrop",
          onClick: y[4] || (y[4] = (g) => o.value = !1)
        })) : A("", !0),
        o.value ? (l(), Z(tr, {
          key: 1,
          pages: t.document?.pages || [],
          title: t.title,
          recipient: t.recipient,
          recipients: t.recipients,
          onSelectPage: p,
          onClose: y[5] || (y[5] = (g) => o.value = !1)
        }, null, 8, ["pages", "title", "recipient", "recipients"])) : A("", !0),
        f("div", Bp, [
          f("div", zp, [
            f("span", Lp, w(t.title), 1),
            y[10] || (y[10] = f("span", { class: "fu-viewer__main-count" }, "1 of 1 document", -1))
          ]),
          f("div", Vp, [
            Q(er, {
              ref_key: "rendererRef",
              ref: n,
              document: t.document,
              recipient: t.recipient,
              recipients: t.recipients,
              "read-only": t.readOnly,
              "onUpdate:capturedFields": y[6] || (y[6] = (g) => a.value = g),
              onAction: y[7] || (y[7] = (g) => h.$emit("action", g))
            }, null, 8, ["document", "recipient", "recipients", "read-only"])
          ])
        ])
      ]),
      t.readOnly ? A("", !0) : (l(), c("div", Hp, [
        y[11] || (y[11] = f("span", { class: "fu-viewer__finish-bar-text" }, [
          de(" When you are done reviewing the document, please click "),
          f("strong", null, "Finish"),
          de(" button. ")
        ], -1)),
        Q(ee(_l), {
          size: 16,
          class: "fu-viewer__finish-bar-arrow"
        }),
        f("button", {
          type: "button",
          class: "fu-viewer__finish-btn",
          disabled: m.value.length > 0,
          onClick: y[8] || (y[8] = (g) => h.$emit("finish", a.value))
        }, " Finish ", 8, jp)
      ]))
    ]));
  }
}, Wp = /* @__PURE__ */ te(Up, [["__scopeId", "data-v-02a51b65"]]), Yp = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Wp
}, Symbol.toStringTag, { value: "Module" })), Gp = {
  key: 0,
  class: "fu-drawer"
}, qp = { class: "fu-drawer__header-content" }, Kp = {
  key: 0,
  class: "fu-drawer__header-actions"
}, Qp = { class: "fu-drawer__body" }, Zp = { class: "fu-drawer__footer" }, Jp = /* @__PURE__ */ le({
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
        t.open ? (l(), c("div", Gp, [
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
              f("div", qp, [
                se(o.$slots, "header", {}, void 0, !0)
              ]),
              t.showControls ? (l(), c("div", Kp, [
                Q(Pe, {
                  size: "sm",
                  variant: "subtle",
                  icon: ee(Xe),
                  onClick: r[1] || (r[1] = (s) => o.$emit("close"))
                }, null, 8, ["icon"])
              ])) : A("", !0)
            ], 2)) : A("", !0),
            f("div", Qp, [
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
                icon: ee(Ia),
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
            f("div", Zp, [
              se(o.$slots, "footer", {}, void 0, !0)
            ])
          ], 2)
        ])) : A("", !0)
      ]),
      _: 3
    }));
  }
}), Xp = /* @__PURE__ */ te(Jp, [["__scopeId", "data-v-dabed762"]]), eg = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Xp
}, Symbol.toStringTag, { value: "Module" })), tg = ["onClick"], ng = /* @__PURE__ */ le({
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
      const h = p.getBoundingClientRect(), y = i.value.offsetWidth, g = {
        left: `${h.left}px`,
        top: `${h.bottom + 4}px`
      };
      e.align === "right" ? g.left = `${h.right - y}px` : e.align === "center" && (g.left = `${h.left + h.width / 2 - y / 2}px`), o.value = {
        position: "absolute",
        ...g,
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
          (l(!0), c(L, null, oe(t.actions, (y) => (l(), c("li", {
            key: y.label
          }, [
            f("a", {
              class: "fu-dropdown__item",
              onClick: (g) => d(y)
            }, [
              y.icon ? (l(), Z(me(y.icon), {
                key: 0,
                class: "fu-dropdown__icon"
              })) : A("", !0),
              de(" " + w(y.label), 1)
            ], 8, tg)
          ]))), 128))
        ], 6)) : A("", !0)
      ]))
    ], 512));
  }
}), ag = /* @__PURE__ */ te(ng, [["__scopeId", "data-v-478aec9e"]]), ig = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: ag
}, Symbol.toStringTag, { value: "Module" })), og = { class: "fu-dropdown-inline__wrapper" }, rg = ["value", "placeholder", "disabled"], sg = ["onMousedown"], lg = /* @__PURE__ */ le({
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
      const y = h.getBoundingClientRect();
      u.value = {
        position: "absolute",
        top: `${y.bottom + 4}px`,
        left: `${y.left}px`,
        width: `${y.width}px`,
        zIndex: "9999"
      };
    }
    return we(() => {
      window.addEventListener("click", v), window.addEventListener("resize", p);
    }), Ae(() => {
      window.removeEventListener("click", v), window.removeEventListener("resize", p);
    }), (h, y) => (l(), c("div", {
      class: X(["fu-dropdown-inline", {
        "fu-dropdown-inline--disabled": t.disabled,
        "fu-dropdown-inline--readonly": t.readonly
      }]),
      ref_key: "inlineRef",
      ref: i
    }, [
      f("div", og, [
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
        }, null, 40, rg)
      ]),
      (l(), Z(Ee, { to: "body" }, [
        s.value ? (l(), c("ul", {
          key: 0,
          class: "fu-dropdown-inline__menu",
          style: ie(u.value)
        }, [
          (l(!0), c(L, null, oe(t.options, (g) => (l(), c("li", {
            key: g.label,
            class: "fu-dropdown-inline__item",
            onMousedown: ue((b) => m(g), ["prevent"])
          }, [
            f("span", {
              class: "fu-dropdown-inline__dot",
              style: ie({ backgroundColor: g.color })
            }, null, 4),
            de(" " + w(g.label), 1)
          ], 40, sg))), 128))
        ], 4)) : A("", !0)
      ]))
    ], 2));
  }
}), ug = /* @__PURE__ */ te(lg, [["__scopeId", "data-v-3f2c5d4c"]]), cg = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: ug
}, Symbol.toStringTag, { value: "Module" })), dg = {
  key: 0,
  class: "content"
}, fg = {
  key: 0,
  class: "fu-dropdown__group-label"
}, mg = {
  key: 0,
  class: "fu-dropdown__divider"
}, hg = {
  key: 1,
  class: "flex w-100"
}, vg = ["onClick"], pg = {
  key: 1,
  class: "fu-dropdown__divider"
}, gg = {
  key: 0,
  class: "fu-dropdown__divider"
}, yg = {
  key: 1,
  class: "flex w-100"
}, bg = ["onClick"], _g = /* @__PURE__ */ le({
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
      (g) => {
        typeof g == "boolean" && (i.value = g);
      }
    );
    function u(g) {
      g?.stopPropagation();
      const b = !i.value;
      b && document.dispatchEvent(new CustomEvent("close-all-dropdowns")), i.value = b, n(b ? "open" : "close"), n("update:isOpen", b), b && ge(d);
    }
    function d() {
      if (!o.value || !r.value) return;
      const g = o.value.getBoundingClientRect(), b = g.bottom + window.scrollY + 6, _ = r.value.offsetWidth;
      let C = g.left + window.scrollX;
      a.align === "center" ? C += g.width / 2 - _ / 2 : a.align === "right" && (C = g.right - _ + window.scrollX), s.value = {
        position: "absolute",
        top: `${b}px`,
        left: `${C}px`,
        zIndex: "2000"
      };
    }
    function m(g, b) {
      g.onClick?.(), a.closeOnSelect && v();
    }
    function v() {
      i.value = !1, n("close"), n("update:isOpen", !1);
    }
    function p(g) {
      i.value && o.value && !o.value.contains(g.target) && r.value && !r.value.contains(g.target) && v();
    }
    function h() {
      i.value && v();
    }
    function y() {
      v();
    }
    return we(() => {
      document.addEventListener("click", p), window.addEventListener("resize", h), document.addEventListener("close-all-dropdowns", y);
    }), Ae(() => {
      document.removeEventListener("click", p), window.removeEventListener("resize", h), document.removeEventListener("close-all-dropdowns", y);
    }), (g, b) => (l(), c("div", {
      class: "fu-dropdown",
      ref_key: "dropdown",
      ref: o
    }, [
      f("div", {
        class: "fu-dropdown__trigger",
        onClick: u
      }, [
        se(g.$slots, "trigger", {}, void 0, !0)
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
              t.content ? (l(), c("div", dg, [
                se(g.$slots, "content", {}, void 0, !0)
              ])) : A("", !0),
              t.groups?.length ? (l(!0), c(L, { key: 1 }, oe(t.groups, (_, C) => (l(), c("div", { key: C }, [
                _.label ? (l(), c("div", fg, w(_.label), 1)) : A("", !0),
                (l(!0), c(L, null, oe(_.actions, (k, E) => (l(), c(L, {
                  key: k.type === "divider" ? `divider-${C}-${E}` : `action-${k.label}-${C}-${E}`
                }, [
                  k.type === "divider" ? (l(), c("div", mg)) : (l(), c("div", hg, [
                    f("a", {
                      class: X(["fu-dropdown__item", { "fu-dropdown__item--disabled": k.disabled }]),
                      onClick: (D) => !k.disabled && m(k)
                    }, [
                      k.icon ? (l(), Z(me(k.icon), {
                        key: 0,
                        class: "fu-dropdown__icon"
                      })) : A("", !0),
                      de(" " + w(k.label), 1)
                    ], 10, vg)
                  ]))
                ], 64))), 128)),
                C !== t.groups.length - 1 ? (l(), c("div", pg)) : A("", !0)
              ]))), 128)) : (l(!0), c(L, { key: 2 }, oe(t.actions, (_, C) => (l(), c(L, {
                key: _.type === "divider" ? `divider-${C}` : `action-${_.label}-${C}`
              }, [
                _.type === "divider" ? (l(), c("div", gg)) : (l(), c("div", yg, [
                  f("a", {
                    class: X(["fu-dropdown__item", { "fu-dropdown__item--disabled": _.disabled }]),
                    onClick: (k) => !_.disabled && m(_)
                  }, [
                    _.icon ? (l(), Z(me(_.icon), {
                      key: 0,
                      class: "fu-dropdown__icon"
                    })) : A("", !0),
                    de(" " + w(_.label), 1)
                  ], 10, bg)
                ]))
              ], 64))), 128))
            ], 6)) : A("", !0)
          ]),
          _: 3
        })
      ]))
    ], 512));
  }
}), zn = /* @__PURE__ */ te(_g, [["__scopeId", "data-v-d4621bb8"]]), Cg = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: zn
}, Symbol.toStringTag, { value: "Module" })), wg = {
  key: 0,
  class: "efw-read"
}, Ag = {
  key: 1,
  class: "efw-edit"
}, kg = { class: "efw-footer" }, Sg = { class: "efw-read" }, Tg = { class: "efw-footer" }, Eg = /* @__PURE__ */ le({
  __name: "EditableFieldWrapper",
  props: {
    modelValue: { default: () => ({}) },
    mode: { default: "inline" },
    teleportTo: { default: "body" },
    align: { default: "right" },
    disableOutsideClose: { type: Boolean, default: !1 }
  },
  setup(t, { expose: e }) {
    const n = t, a = M(!1), i = M(null), o = Qt({ top: 0, left: 0 }), r = M(null), s = M(null);
    function u(y) {
      if (y === null || typeof y != "object") return y;
      const g = sl(y);
      return Array.isArray(g) ? [...g] : g.constructor === Object ? { ...g } : g;
    }
    function d() {
      document.dispatchEvent(new CustomEvent("close-all-editors")), i.value = u(n.modelValue), a.value = !0;
    }
    function m(y) {
      if (a.value) {
        v();
        return;
      }
      document.dispatchEvent(new CustomEvent("close-all-editors")), i.value = u(n.modelValue), ge(() => {
        a.value = !0, ge(() => {
          const g = y?.currentTarget;
          if (!g || !s.value) return;
          const b = g.getBoundingClientRect(), _ = s.value.offsetWidth;
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
    function h(y) {
      if (!a.value || n.disableOutsideClose) return;
      const g = y.target;
      g.closest(
        ".fu-status-dropdown, .fu-status-dropdown__menu, .fu-autocomplete-dropdown, .fu-select-dropdown, .fu-datepicker-dropdown"
      ) || (n.mode === "inline" ? r.value && !r.value.contains(g) && v() : s.value && !s.value.contains(g) && v());
    }
    return we(() => {
      document.addEventListener("close-all-editors", p), document.addEventListener("ew-close", v), document.addEventListener("pointerdown", h), window.addEventListener("resize", v);
    }), Ae(() => {
      document.removeEventListener("close-all-editors", p), document.removeEventListener("ew-close", v), document.removeEventListener("pointerdown", h), window.removeEventListener("resize", v);
    }), e({
      startEditing: d,
      openTeleport: m,
      closeEditor: v
    }), (y, g) => t.mode === "inline" ? (l(), c("div", {
      key: 0,
      class: "efw-wrapper",
      ref_key: "inlineRef",
      ref: r
    }, [
      a.value ? (l(), c("div", Ag, [
        se(y.$slots, "edit", { model: i.value }, void 0, !0),
        f("div", kg, [
          se(y.$slots, "actions", {}, void 0, !0)
        ])
      ])) : (l(), c("div", wg, [
        se(y.$slots, "read", {}, void 0, !0)
      ]))
    ], 512)) : (l(), c(L, { key: 1 }, [
      f("div", Sg, [
        se(y.$slots, "read", {}, void 0, !0)
      ]),
      (l(), Z(Ee, { to: t.teleportTo }, [
        a.value ? (l(), c("div", {
          key: 0,
          class: "efw-teleport-card",
          ref_key: "teleportRef",
          ref: s,
          style: ie({ top: o.top + "px", left: o.left + "px" })
        }, [
          se(y.$slots, "edit", { model: i.value }, void 0, !0),
          f("div", Tg, [
            se(y.$slots, "actions", {}, void 0, !0)
          ])
        ], 4)) : A("", !0)
      ], 8, ["to"]))
    ], 64));
  }
}), Mg = /* @__PURE__ */ te(Eg, [["__scopeId", "data-v-ef54d87f"]]), Ng = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Mg
}, Symbol.toStringTag, { value: "Module" })), Dg = {
  components: {
    text: et(() => Promise.resolve().then(() => Zs)),
    image: et(() => Promise.resolve().then(() => sr)),
    video: et(() => Promise.resolve().then(() => Js)),
    divider: et(() => Promise.resolve().then(() => or)),
    service: et(() => Promise.resolve().then(() => Qs)),
    question: et(() => Promise.resolve().then(() => fr)),
    scheduler: et(() => Promise.resolve().then(() => qs)),
    invoice: et(() => Promise.resolve().then(() => lr)),
    contract: et(() => Promise.resolve().then(() => ir))
  },
  resolve(t) {
    const e = this.components[t];
    return e || (console.warn(`⚠️ Widget type "${t}" not registered.`), null);
  }
}, Ai = 24, Ig = /* @__PURE__ */ le({
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
      const m = Ai * (n.block.columns.length - 1) / n.block.columns.length;
      return {
        width: `calc(${d}% - ${m}px)`
      };
    }
    const r = O(() => ({
      maxWidth: {
        sm: "560px",
        md: "816px",
        lg: "1024px",
        full: "100%"
      }[n.block.contentWidth ?? "md"],
      margin: "0 auto",
      width: "100%"
    })), s = O(() => ({
      paddingTop: `${n.block.paddingTop ?? 0}px`,
      paddingBottom: `${n.block.paddingBottom ?? 0}px`,
      backgroundColor: n.block.backgroundColor || "transparent",
      opacity: n.block.backgroundOpacity !== void 0 ? n.block.backgroundOpacity / 100 : 1
    })), u = O(() => ({
      display: "flex",
      flexWrap: "wrap",
      gap: `${Ai}px`,
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
            (l(!0), c(L, null, oe(v.widgets, (h) => (l(), Z(me(ee(Dg).resolve(h.type)), Pt({
              key: h.id
            }, { ref_for: !0 }, h.props, {
              widget: h,
              widgetId: h.id,
              theme: t.theme
            }, ll(i(h.id))), null, 16, ["widget", "widgetId", "theme"]))), 128))
          ], 4))), 128))
        ], 4)
      ], 4)
    ], 4));
  }
}), za = /* @__PURE__ */ te(Ig, [["__scopeId", "data-v-3d348152"]]), Og = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: za
}, Symbol.toStringTag, { value: "Module" })), Rg = { class: "fu-signature-wrapper" }, $g = {
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
      const y = i.value;
      if (o.value = y.getContext("2d"), s(), window.addEventListener("resize", s), n.image) {
        const g = new Image();
        g.onload = () => o.value.drawImage(g, 0, 0), g.src = n.image;
      }
    }), Ae(() => {
      window.removeEventListener("resize", s);
    });
    const s = () => {
      const y = i.value, g = y.getBoundingClientRect(), b = window.devicePixelRatio || 1;
      y.width = g.width * b, y.height = g.height * b, o.value.setTransform(1, 0, 0, 1, 0, 0), o.value.scale(b, b), o.value.strokeStyle = n.color, o.value.lineWidth = n.lineWidth, o.value.lineCap = "round", o.value.lineJoin = "round";
    }, u = (y) => {
      const g = i.value.getBoundingClientRect(), b = y.clientX || y.touches && y.touches[0].clientX, _ = y.clientY || y.touches && y.touches[0].clientY;
      return {
        x: b - g.left,
        y: _ - g.top
      };
    }, d = (y) => {
      r.value = !0;
      const { x: g, y: b } = u(y);
      o.value.beginPath(), o.value.moveTo(g, b);
    }, m = (y) => {
      if (!r.value) return;
      const { x: g, y: b } = u(y);
      o.value.lineTo(g, b), o.value.stroke();
    }, v = () => {
      r.value && (r.value = !1, h());
    }, p = () => {
      const y = i.value;
      o.value.clearRect(0, 0, y.width, y.height), a("update:image", null);
    }, h = () => {
      const y = i.value.toDataURL("image/png");
      a("update:image", y);
    };
    return (y, g) => (l(), c("div", Rg, [
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
}, ar = /* @__PURE__ */ te($g, [["__scopeId", "data-v-7c7b6803"]]), xg = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: ar
}, Symbol.toStringTag, { value: "Module" })), Pg = { class: "fcv-wrap" }, Fg = { class: "fcv-a4" }, Bg = ["innerHTML"], zg = { class: "fcv-sigs" }, Lg = { class: "fcv-sigs__grid" }, Vg = ["src"], Hg = { class: "fcv-sig__footer" }, jg = { class: "fcv-sig__footer-left" }, Ug = { class: "fcv-sig__name" }, Wg = {
  key: 0,
  class: "fcv-sig__role"
}, Yg = {
  key: 1,
  class: "fcv-sig__company"
}, Gg = { class: "fcv-sig__footer-right" }, qg = { class: "fcv-sig__date" }, Kg = ["onClick"], Qg = {
  key: 1,
  class: "fcv-sigpad"
}, Zg = { class: "fcv-sigpad__tabs" }, Jg = {
  key: 0,
  class: "fcv-sigpad__type-panel"
}, Xg = { class: "fcv-sigpad__type-preview" }, ey = { class: "fcv-sigpad__cursive" }, ty = { class: "fcv-sigpad__font-row" }, ny = ["onClick"], ay = {
  key: 1,
  class: "fcv-sigpad__draw-panel"
}, iy = { class: "fcv-sigpad__details" }, oy = { class: "fcv-sigpad__actions" }, ry = ["disabled", "onClick"], sy = {
  __name: "FuContractRenderer",
  props: {
    widgetId: { type: [String, Number], default: null },
    content: { type: String, default: "" },
    signatures: { type: Array, default: () => [] }
  },
  emits: ["update"],
  setup(t, { emit: e }) {
    ul((k) => ({
      v47c3b8b6: d.value
    }));
    const n = O(() => {
      if (!a.content) return "";
      const E = new DOMParser().parseFromString(a.content, "text/html");
      return E.querySelectorAll("span[fieldtype='smart']").forEach((D) => {
        const x = D.getAttribute("content") || "";
        D.replaceWith(x);
      }), E.body.innerHTML;
    }), a = t, i = e, o = M(JSON.parse(JSON.stringify(a.signatures))), r = M(null), s = M("type"), u = M(""), d = M("'Caveat', cursive"), m = M(null), v = M({ signerName: "", signerRole: "", signerCompany: "" }), p = [
      { label: "Caveat", value: "'Caveat', cursive" },
      { label: "Dancing", value: "'Dancing Script', cursive" },
      { label: "Pacifico", value: "'Pacifico', cursive" },
      { label: "Satisfy", value: "'Satisfy', cursive" }
    ], h = O(() => v.value.signerName.trim() ? s.value === "type" ? !!u.value.trim() : !!m.value : !1);
    function y(k) {
      r.value = k, s.value = "type", m.value = null, u.value = "";
    }
    function g() {
      r.value = null;
    }
    function b(k) {
      return !!k.signedOn && !!k.signatureData;
    }
    function _(k, E) {
      let D = null, x = s.value;
      if (s.value === "type") {
        const V = `<svg xmlns="http://www.w3.org/2000/svg" width="320" height="80" viewBox="0 0 320 80">
      <text x="160" y="54" text-anchor="middle" font-family="${d.value}" font-size="38" fill="#111827">${u.value}</text>
    </svg>`;
        D = "data:image/svg+xml;base64," + btoa(unescape(encodeURIComponent(V)));
      } else
        D = m.value;
      const I = {
        ...k,
        ...v.value,
        signatureType: x,
        signatureData: D,
        signedOn: (/* @__PURE__ */ new Date()).toISOString()
      };
      o.value[E] = I, r.value = null, i("update", {
        widgetId: a.widgetId,
        signatures: JSON.parse(JSON.stringify(o.value)),
        updatedSig: I,
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
    return (k, E) => (l(), c("div", Pg, [
      f("div", Fg, [
        f("div", {
          class: "fcv-body",
          innerHTML: n.value
        }, null, 8, Bg),
        f("div", zg, [
          E[10] || (E[10] = f("div", { class: "fcv-sigs__label" }, "Signatures", -1)),
          E[11] || (E[11] = f("div", { class: "fcv-sigs__rule" }, null, -1)),
          f("div", Lg, [
            (l(!0), c(L, null, oe(o.value, (D, x) => (l(), c("div", {
              key: D.id,
              class: X(["fcv-sig", {
                "fcv-sig--signed": b(D),
                "fcv-sig--required": D.required && !b(D),
                "fcv-sig--active": r.value === D.id && !b(D),
                "fcv-sig--invalidated": !!D.invalidatedOn
              }])
            }, [
              b(D) ? (l(), c(L, { key: 0 }, [
                f("div", {
                  class: X(["fcv-sig__box fcv-sig__box--done", { "fcv-sig__box--void": D.invalidatedOn }])
                }, [
                  D.signatureData ? (l(), c("img", {
                    key: 0,
                    src: D.signatureData,
                    class: "fcv-sig__img",
                    alt: "Signature"
                  }, null, 8, Vg)) : A("", !0)
                ], 2),
                f("div", Hg, [
                  f("div", jg, [
                    f("span", Ug, w(D.signerName || "—"), 1),
                    D.signerRole ? (l(), c("span", Wg, w(D.signerRole), 1)) : A("", !0),
                    D.signerCompany ? (l(), c("span", Yg, w(D.signerCompany), 1)) : A("", !0)
                  ]),
                  f("div", Gg, [
                    E[8] || (E[8] = f("span", { class: "fcv-sig__badge fcv-sig__badge--signed" }, "✓ Signed", -1)),
                    f("span", qg, w(C(D.signedOn)), 1)
                  ])
                ])
              ], 64)) : (l(), c(L, { key: 1 }, [
                r.value !== D.id ? (l(), c("div", {
                  key: 0,
                  class: "fcv-sig__box fcv-sig__box--unsigned",
                  onClick: (I) => y(D.id)
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
                ])], 8, Kg)) : (l(), c("div", Qg, [
                  f("div", Zg, [
                    f("button", {
                      class: X(["fcv-sigpad__tab", { "fcv-sigpad__tab--active": s.value === "type" }]),
                      onClick: E[0] || (E[0] = (I) => s.value = "type")
                    }, " Type name ", 2),
                    f("button", {
                      class: X(["fcv-sigpad__tab", { "fcv-sigpad__tab--active": s.value === "draw" }]),
                      onClick: E[1] || (E[1] = (I) => s.value = "draw")
                    }, " Draw ", 2)
                  ]),
                  s.value === "type" ? (l(), c("div", Jg, [
                    Ue(f("input", {
                      "onUpdate:modelValue": E[2] || (E[2] = (I) => u.value = I),
                      class: "fcv-sigpad__name-input",
                      placeholder: "Your full name",
                      onInput: E[3] || (E[3] = (I) => v.value.signerName = u.value)
                    }, null, 544), [
                      [tt, u.value]
                    ]),
                    f("div", Xg, [
                      f("span", ey, w(u.value || "Your Signature"), 1)
                    ]),
                    f("div", ty, [
                      (l(), c(L, null, oe(p, (I) => f("button", {
                        key: I.value,
                        class: "fcv-sigpad__font-btn",
                        style: ie({ fontFamily: I.value }),
                        onClick: (V) => d.value = I.value
                      }, " Aa ", 12, ny)), 64))
                    ])
                  ])) : A("", !0),
                  s.value === "draw" ? (l(), c("div", ay, [
                    Q(ar, {
                      image: m.value,
                      "onUpdate:image": E[4] || (E[4] = (I) => m.value = I),
                      class: "fcv-sigpad__canvas-wrap"
                    }, null, 8, ["image"])
                  ])) : A("", !0),
                  f("div", iy, [
                    Ue(f("input", {
                      "onUpdate:modelValue": E[5] || (E[5] = (I) => v.value.signerName = I),
                      class: "fcv-sigpad__field",
                      placeholder: "Full name *"
                    }, null, 512), [
                      [tt, v.value.signerName]
                    ]),
                    Ue(f("input", {
                      "onUpdate:modelValue": E[6] || (E[6] = (I) => v.value.signerRole = I),
                      class: "fcv-sigpad__field",
                      placeholder: "Role / title"
                    }, null, 512), [
                      [tt, v.value.signerRole]
                    ]),
                    Ue(f("input", {
                      "onUpdate:modelValue": E[7] || (E[7] = (I) => v.value.signerCompany = I),
                      class: "fcv-sigpad__field",
                      placeholder: "Company"
                    }, null, 512), [
                      [tt, v.value.signerCompany]
                    ])
                  ]),
                  f("div", oy, [
                    f("button", {
                      class: "fcv-sigpad__cancel",
                      onClick: g
                    }, "Cancel"),
                    f("button", {
                      class: "fcv-sigpad__submit",
                      disabled: !h.value,
                      onClick: (I) => _(D, x)
                    }, " Sign document ", 8, ry)
                  ])
                ]))
              ], 64))
            ], 2))), 128))
          ])
        ])
      ])
    ]));
  }
}, ly = /* @__PURE__ */ te(sy, [["__scopeId", "data-v-425e48d7"]]), ir = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: ly
}, Symbol.toStringTag, { value: "Module" })), uy = {
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
    } = e.widget, d = O(() => {
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
}, cy = /* @__PURE__ */ te(uy, [["__scopeId", "data-v-51711f98"]]), or = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: cy
}, Symbol.toStringTag, { value: "Module" })), rr = /* @__PURE__ */ le({
  __name: "PageRenderer",
  props: {
    page: {},
    theme: {}
  },
  emits: ["action"],
  setup(t, { emit: e }) {
    const n = t, a = O(() => ({
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
      (l(!0), c(L, null, oe(t.page.blocks, (r) => (l(), Z(za, {
        key: r.id,
        block: r,
        theme: t.theme,
        onAction: o[0] || (o[0] = (s) => i.$emit("action", s))
      }, null, 8, ["block", "theme"]))), 128))
    ], 4));
  }
}), dy = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: rr
}, Symbol.toStringTag, { value: "Module" })), fy = { class: "document-root" }, my = /* @__PURE__ */ le({
  __name: "FuDocumentRenderer",
  props: {
    document: {}
  },
  emits: ["action"],
  setup(t) {
    const e = t;
    return Da(() => Xo(e.document)), (n, a) => (l(), c("div", fy, [
      (l(!0), c(L, null, oe(t.document.pages, (i) => (l(), Z(rr, {
        key: i.id,
        page: i,
        theme: t.document.meta?.theme,
        onAction: a[0] || (a[0] = (o) => n.$emit("action", o))
      }, null, 8, ["page", "theme"]))), 128))
    ]));
  }
}), hy = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: my
}, Symbol.toStringTag, { value: "Module" })), vy = {
  key: 0,
  class: "fu-empty-state"
}, py = ["src", "alt"], gy = /* @__PURE__ */ le({
  __name: "ImageRenderer",
  props: {
    widget: {}
  },
  setup(t) {
    const e = t, n = O(() => e.widget?.props ?? {}), a = O(() => n.value.src ?? ""), i = O(() => n.value.alt ?? "Image"), o = O(() => n.value.alignment ?? "center"), r = O(() => n.value.imageWidth), s = O(() => n.value.opacity ?? 100), u = O(() => n.value.borderRadius ?? 8), d = O(() => `is-${o.value}`), m = O(() => ({
      width: "100%",
      display: "flex",
      justifyContent: o.value === "left" ? "flex-start" : o.value === "right" ? "flex-end" : "center"
    })), v = O(() => ({
      width: o.value === "stretch" ? "100%" : r.value ? `${r.value}px` : "auto",
      maxWidth: "100%"
    })), p = O(() => ({
      width: "100%",
      height: "auto",
      display: "block",
      opacity: s.value / 100,
      borderRadius: `${u.value}px`
    }));
    return (h, y) => (l(), c("div", {
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
        }, null, 12, py)
      ], 4)) : (l(), c("div", vy, [
        Q(ee(iu), { size: 32 }),
        y[0] || (y[0] = f("span", null, "Image", -1))
      ]))
    ], 6));
  }
}), yy = /* @__PURE__ */ te(gy, [["__scopeId", "data-v-cb73a97c"]]), sr = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: yy
}, Symbol.toStringTag, { value: "Module" })), by = { class: "fip-wrap" }, _y = { class: "fip-header-inner" }, Cy = { class: "fip-header-left" }, wy = {
  key: 0,
  class: "fip-logo-wrap"
}, Ay = ["src"], ky = {
  key: 1,
  class: "fip-from"
}, Sy = { class: "fip-from-name" }, Ty = {
  key: 0,
  class: "fip-from-detail"
}, Ey = {
  key: 1,
  class: "fip-from-detail"
}, My = {
  key: 2,
  class: "fip-from-detail"
}, Ny = { class: "fip-header-right" }, Dy = {
  key: 0,
  class: "fip-title"
}, Iy = { class: "fip-meta-grid" }, Oy = { class: "fip-meta-val" }, Ry = { class: "fip-meta-val" }, $y = { class: "fip-meta-val" }, xy = { class: "fip-meta-val" }, Py = {
  key: 0,
  class: "fip-bill-to"
}, Fy = { class: "fip-billto-name" }, By = {
  key: 0,
  class: "fip-client-detail"
}, zy = {
  key: 1,
  class: "fip-client-detail"
}, Ly = {
  key: 2,
  class: "fip-client-detail"
}, Vy = { class: "fip-header fip-header--minimal" }, Hy = { class: "fip-header-inner fip-header-inner--minimal" }, jy = { class: "fip-header-left" }, Uy = {
  key: 0,
  class: "fip-from"
}, Wy = { class: "fip-from-name fip-from-name--minimal" }, Yy = {
  key: 0,
  class: "fip-from-detail"
}, Gy = {
  key: 1,
  class: "fip-from-detail"
}, qy = { class: "fip-header-right" }, Ky = {
  key: 0,
  class: "fip-title fip-title--minimal"
}, Qy = { class: "fip-meta-grid fip-meta-grid--minimal" }, Zy = { class: "fip-meta-val" }, Jy = { class: "fip-meta-val" }, Xy = { class: "fip-meta-val" }, eb = {
  key: 0,
  class: "fip-bill-to fip-bill-to--minimal"
}, tb = { class: "fip-billto-name" }, nb = {
  key: 0,
  class: "fip-client-detail"
}, ab = {
  key: 1,
  class: "fip-client-detail"
}, ib = {
  key: 2,
  class: "fip-client-detail"
}, ob = { class: "fip-modern-band-left" }, rb = ["src"], sb = {
  key: 1,
  class: "fip-from fip-from--modern"
}, lb = { class: "fip-from-name" }, ub = {
  key: 0,
  class: "fip-from-detail"
}, cb = {
  key: 1,
  class: "fip-from-detail"
}, db = { class: "fip-modern-band-right" }, fb = {
  key: 0,
  class: "fip-title fip-title--modern"
}, mb = { class: "fip-meta-grid" }, hb = { class: "fip-meta-val fip-meta-val--modern" }, vb = { class: "fip-meta-val fip-meta-val--modern" }, pb = { class: "fip-meta-val fip-meta-val--modern" }, gb = { class: "fip-meta-val fip-meta-val--modern" }, yb = {
  key: 0,
  class: "fip-bill-to fip-bill-to--modern"
}, bb = { class: "fip-billto-name" }, _b = {
  key: 0,
  class: "fip-client-detail"
}, Cb = {
  key: 1,
  class: "fip-client-detail"
}, wb = {
  key: 2,
  class: "fip-client-detail"
}, Ab = { class: "fip-header-inner fip-header-inner--detailed" }, kb = { class: "fip-header-left fip-header-left--detailed" }, Sb = ["src"], Tb = {
  key: 1,
  class: "fip-from fip-from--detailed"
}, Eb = { class: "fip-from-name fip-from-name--detailed" }, Mb = {
  key: 0,
  class: "fip-from-detail"
}, Nb = {
  key: 1,
  class: "fip-from-detail"
}, Db = {
  key: 2,
  class: "fip-from-detail"
}, Ib = { class: "fip-header-right fip-header-right--detailed" }, Ob = {
  key: 0,
  class: "fip-title fip-title--detailed"
}, Rb = { class: "fip-detail-table" }, $b = { key: 0 }, xb = { class: "fip-dt-val" }, Pb = { key: 1 }, Fb = { class: "fip-dt-val" }, Bb = { key: 2 }, zb = { class: "fip-dt-val" }, Lb = { key: 3 }, Vb = { class: "fip-dt-val" }, Hb = {
  key: 0,
  class: "fip-bill-to fip-bill-to--detailed"
}, jb = { class: "fip-billto-name" }, Ub = {
  key: 0,
  class: "fip-client-detail"
}, Wb = {
  key: 1,
  class: "fip-client-detail"
}, Yb = {
  key: 2,
  class: "fip-client-detail"
}, Gb = { class: "fip-col-headers" }, qb = {
  key: 0,
  class: "fip-col-qty"
}, Kb = {
  key: 1,
  class: "fip-col-unit"
}, Qb = {
  key: 2,
  class: "fip-col-price"
}, Zb = {
  key: 3,
  class: "fip-col-tax"
}, Jb = { class: "fip-row fip-row--main" }, Xb = { class: "fip-col-name fip-name-cell" }, e0 = ["src"], t0 = { class: "fip-name-text" }, n0 = { class: "fip-svc-name" }, a0 = {
  key: 0,
  class: "fip-svc-desc"
}, i0 = {
  key: 0,
  class: "fip-col-qty fip-num"
}, o0 = {
  key: 1,
  class: "fip-col-unit fip-unit"
}, r0 = {
  key: 2,
  class: "fip-col-price fip-num"
}, s0 = {
  key: 3,
  class: "fip-col-tax"
}, l0 = { class: "fip-col-total fip-row-total" }, u0 = {
  key: 0,
  class: "fip-tax-hint"
}, c0 = { class: "fip-col-name fip-name-cell fip-name-cell--sub" }, d0 = { class: "fip-svc-name fip-svc-name--sub" }, f0 = {
  key: 0,
  class: "fip-col-qty fip-num"
}, m0 = {
  key: 1,
  class: "fip-col-unit fip-unit"
}, h0 = {
  key: 2,
  class: "fip-col-price fip-num"
}, v0 = {
  key: 3,
  class: "fip-col-tax"
}, p0 = { class: "fip-col-total fip-row-total" }, g0 = {
  key: 0,
  class: "fip-tax-hint"
}, y0 = { class: "fip-summary" }, b0 = { class: "fip-sum-row" }, _0 = { class: "fip-sum-val" }, C0 = { class: "fip-sum-row" }, w0 = { class: "fip-sum-key" }, A0 = { class: "fip-sum-val fip-sum-val--discount" }, k0 = { class: "fip-sum-row" }, S0 = { class: "fip-sum-key" }, T0 = { class: "fip-sum-val" }, E0 = { class: "fip-sum-key" }, M0 = { class: "fip-sum-val" }, N0 = {
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
    }), a = O(() => {
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
    const r = O(
      () => (e.serviceBlocks || []).reduce((_, C) => (_ += o(C), (C.subItems || []).forEach((k) => _ += o(k)), _), 0)
    ), s = O(
      () => (e.serviceBlocks || []).reduce((_, C) => (C.taxable && (_ += o(C)), (C.subItems || []).forEach((k) => {
        k.taxable && (_ += o(k));
      }), _), 0)
    ), u = O(() => {
      const _ = e.footer?.taxes;
      return Array.isArray(_) && _.length ? _[0] : { label: "Tax", rate: 0 };
    }), d = O(
      () => (e.footer?.discounts || []).reduce(
        (_, C) => _ + r.value * (C.percent || 0) / 100,
        0
      )
    ), m = O(
      () => s.value * (u.value.rate || 0) / 100
    ), v = O(() => r.value - d.value + m.value), p = O(() => {
      const _ = {};
      return e.header?.bgColor && (_.backgroundColor = e.header.bgColor), e.header?.borderColor && (_.borderBottomColor = e.header.borderColor), _;
    }), h = O(
      () => e.header?.borderColor ? { background: e.header.borderColor } : {}
    ), y = O(
      () => e.header?.bgColor ? { background: e.header.bgColor } : { background: "#111827" }
    ), g = O(
      () => e.variant === "modern" && e.header?.bgColor ? { background: e.header.bgColor } : {}
    ), b = O(() => ({ "--fip-cols": [
      "1fr",
      e.showQty ? "60px" : null,
      e.showUnit ? "68px" : null,
      e.showPrice ? "80px" : null,
      e.showTax ? "32px" : null,
      "88px"
    ].filter(Boolean).join(" ") }));
    return (_, C) => (l(), c("div", by, [
      f("div", {
        class: X(["fip-a4", `fip-a4--${t.variant}`])
      }, [
        t.variant === "classic" ? (l(), c(L, { key: 0 }, [
          f("div", {
            class: "fip-header fip-header--classic",
            style: ie(p.value)
          }, [
            f("div", _y, [
              f("div", Cy, [
                t.header.showLogo && t.header.logoUrl ? (l(), c("div", wy, [
                  f("img", {
                    src: t.header.logoUrl,
                    class: "fip-logo",
                    alt: "Logo"
                  }, null, 8, Ay)
                ])) : A("", !0),
                t.header.showCompany ? (l(), c("div", ky, [
                  f("p", Sy, w(t.header.companyName || ""), 1),
                  t.header.companyEmail ? (l(), c("p", Ty, w(t.header.companyEmail), 1)) : A("", !0),
                  t.header.companyPhone ? (l(), c("p", Ey, w(t.header.companyPhone), 1)) : A("", !0),
                  t.header.companyAddress ? (l(), c("p", My, w(t.header.companyAddress), 1)) : A("", !0)
                ])) : A("", !0)
              ]),
              f("div", Ny, [
                t.header.showTitle ? (l(), c("h1", Dy, w(t.header.invoiceTitle || "INVOICE"), 1)) : A("", !0),
                f("div", Iy, [
                  t.header.showInvoiceNumber ? (l(), c(L, { key: 0 }, [
                    C[0] || (C[0] = f("span", { class: "fip-meta-key" }, "Invoice #", -1)),
                    f("span", Oy, w(t.header.invoiceNumber || "INV-001"), 1)
                  ], 64)) : A("", !0),
                  t.header.showDate ? (l(), c(L, { key: 1 }, [
                    C[1] || (C[1] = f("span", { class: "fip-meta-key" }, "Date", -1)),
                    f("span", Ry, w(t.header.invoiceDate || ee(n)), 1)
                  ], 64)) : A("", !0),
                  t.header.showDueDate ? (l(), c(L, { key: 2 }, [
                    C[2] || (C[2] = f("span", { class: "fip-meta-key" }, "Due", -1)),
                    f("span", $y, w(t.header.dueDate || "—"), 1)
                  ], 64)) : A("", !0),
                  t.header.showPO ? (l(), c(L, { key: 3 }, [
                    C[3] || (C[3] = f("span", { class: "fip-meta-key" }, "PO #", -1)),
                    f("span", xy, w(t.header.poNumber || "—"), 1)
                  ], 64)) : A("", !0)
                ])
              ])
            ]),
            t.header.showBillTo ? (l(), c("div", Py, [
              C[4] || (C[4] = f("p", { class: "fip-section-label" }, "Bill To", -1)),
              f("p", Fy, w(t.header.clientName || "—"), 1),
              t.header.clientEmail ? (l(), c("p", By, w(t.header.clientEmail), 1)) : A("", !0),
              t.header.clientPhone ? (l(), c("p", zy, w(t.header.clientPhone), 1)) : A("", !0),
              t.header.clientAddress ? (l(), c("p", Ly, w(t.header.clientAddress), 1)) : A("", !0)
            ])) : A("", !0)
          ], 4),
          f("div", {
            class: "fip-divider fip-divider--classic",
            style: ie(h.value)
          }, null, 4)
        ], 64)) : t.variant === "minimal" ? (l(), c(L, { key: 1 }, [
          f("div", Vy, [
            f("div", Hy, [
              f("div", jy, [
                t.header.showCompany ? (l(), c("div", Uy, [
                  f("p", Wy, w(t.header.companyName || ""), 1),
                  t.header.companyEmail ? (l(), c("p", Yy, w(t.header.companyEmail), 1)) : A("", !0),
                  t.header.companyPhone ? (l(), c("p", Gy, w(t.header.companyPhone), 1)) : A("", !0)
                ])) : A("", !0)
              ]),
              f("div", qy, [
                t.header.showTitle ? (l(), c("h1", Ky, w(t.header.invoiceTitle || "INVOICE"), 1)) : A("", !0),
                f("div", Qy, [
                  t.header.showInvoiceNumber ? (l(), c(L, { key: 0 }, [
                    C[5] || (C[5] = f("span", { class: "fip-meta-key" }, "#", -1)),
                    f("span", Zy, w(t.header.invoiceNumber || "INV-001"), 1)
                  ], 64)) : A("", !0),
                  t.header.showDate ? (l(), c(L, { key: 1 }, [
                    C[6] || (C[6] = f("span", { class: "fip-meta-key" }, "Date", -1)),
                    f("span", Jy, w(t.header.invoiceDate || ee(n)), 1)
                  ], 64)) : A("", !0),
                  t.header.showDueDate ? (l(), c(L, { key: 2 }, [
                    C[7] || (C[7] = f("span", { class: "fip-meta-key" }, "Due", -1)),
                    f("span", Xy, w(t.header.dueDate || "—"), 1)
                  ], 64)) : A("", !0)
                ])
              ])
            ]),
            t.header.showBillTo ? (l(), c("div", eb, [
              f("p", tb, w(t.header.clientName || "—"), 1),
              t.header.clientEmail ? (l(), c("p", nb, w(t.header.clientEmail), 1)) : A("", !0),
              t.header.clientPhone ? (l(), c("p", ab, w(t.header.clientPhone), 1)) : A("", !0),
              t.header.clientAddress ? (l(), c("p", ib, w(t.header.clientAddress), 1)) : A("", !0)
            ])) : A("", !0)
          ]),
          C[8] || (C[8] = f("div", { class: "fip-divider fip-divider--minimal" }, null, -1))
        ], 64)) : t.variant === "modern" ? (l(), c(L, { key: 2 }, [
          f("div", {
            class: "fip-modern-band",
            style: ie(y.value)
          }, [
            f("div", ob, [
              t.header.showLogo && t.header.logoUrl ? (l(), c("img", {
                key: 0,
                src: t.header.logoUrl,
                class: "fip-logo fip-logo--modern",
                alt: "Logo"
              }, null, 8, rb)) : A("", !0),
              t.header.showCompany ? (l(), c("div", sb, [
                f("p", lb, w(t.header.companyName || ""), 1),
                t.header.companyEmail ? (l(), c("p", ub, w(t.header.companyEmail), 1)) : A("", !0),
                t.header.companyPhone ? (l(), c("p", cb, w(t.header.companyPhone), 1)) : A("", !0)
              ])) : A("", !0)
            ]),
            f("div", db, [
              t.header.showTitle ? (l(), c("h1", fb, w(t.header.invoiceTitle || "INVOICE"), 1)) : A("", !0),
              f("div", mb, [
                t.header.showInvoiceNumber ? (l(), c(L, { key: 0 }, [
                  C[9] || (C[9] = f("span", { class: "fip-meta-key fip-meta-key--modern" }, "Invoice #", -1)),
                  f("span", hb, w(t.header.invoiceNumber || "INV-001"), 1)
                ], 64)) : A("", !0),
                t.header.showDate ? (l(), c(L, { key: 1 }, [
                  C[10] || (C[10] = f("span", { class: "fip-meta-key fip-meta-key--modern" }, "Date", -1)),
                  f("span", vb, w(t.header.invoiceDate || ee(n)), 1)
                ], 64)) : A("", !0),
                t.header.showDueDate ? (l(), c(L, { key: 2 }, [
                  C[11] || (C[11] = f("span", { class: "fip-meta-key fip-meta-key--modern" }, "Due", -1)),
                  f("span", pb, w(t.header.dueDate || "—"), 1)
                ], 64)) : A("", !0),
                t.header.showPO ? (l(), c(L, { key: 3 }, [
                  C[12] || (C[12] = f("span", { class: "fip-meta-key fip-meta-key--modern" }, "PO #", -1)),
                  f("span", gb, w(t.header.poNumber || "—"), 1)
                ], 64)) : A("", !0)
              ])
            ])
          ], 4),
          C[14] || (C[14] = f("div", { class: "fip-modern-strip" }, null, -1)),
          t.header.showBillTo ? (l(), c("div", yb, [
            C[13] || (C[13] = f("p", { class: "fip-section-label" }, "Bill To", -1)),
            f("p", bb, w(t.header.clientName || "—"), 1),
            t.header.clientEmail ? (l(), c("p", _b, w(t.header.clientEmail), 1)) : A("", !0),
            t.header.clientPhone ? (l(), c("p", Cb, w(t.header.clientPhone), 1)) : A("", !0),
            t.header.clientAddress ? (l(), c("p", wb, w(t.header.clientAddress), 1)) : A("", !0)
          ])) : A("", !0)
        ], 64)) : t.variant === "detailed" ? (l(), c(L, { key: 3 }, [
          f("div", {
            class: "fip-header fip-header--detailed",
            style: ie(p.value)
          }, [
            f("div", Ab, [
              f("div", kb, [
                t.header.showLogo && t.header.logoUrl ? (l(), c("img", {
                  key: 0,
                  src: t.header.logoUrl,
                  class: "fip-logo fip-logo--detailed",
                  alt: "Logo"
                }, null, 8, Sb)) : A("", !0),
                t.header.showCompany ? (l(), c("div", Tb, [
                  f("p", Eb, w(t.header.companyName || ""), 1),
                  t.header.companyEmail ? (l(), c("p", Mb, w(t.header.companyEmail), 1)) : A("", !0),
                  t.header.companyPhone ? (l(), c("p", Nb, w(t.header.companyPhone), 1)) : A("", !0),
                  t.header.companyAddress ? (l(), c("p", Db, w(t.header.companyAddress), 1)) : A("", !0)
                ])) : A("", !0)
              ]),
              f("div", Ib, [
                t.header.showTitle ? (l(), c("h1", Ob, w(t.header.invoiceTitle || "INVOICE"), 1)) : A("", !0),
                f("table", Rb, [
                  t.header.showInvoiceNumber ? (l(), c("tr", $b, [
                    C[15] || (C[15] = f("td", { class: "fip-dt-key" }, "Invoice No.", -1)),
                    f("td", xb, w(t.header.invoiceNumber || "INV-001"), 1)
                  ])) : A("", !0),
                  t.header.showDate ? (l(), c("tr", Pb, [
                    C[16] || (C[16] = f("td", { class: "fip-dt-key" }, "Date", -1)),
                    f("td", Fb, w(t.header.invoiceDate || ee(n)), 1)
                  ])) : A("", !0),
                  t.header.showDueDate ? (l(), c("tr", Bb, [
                    C[17] || (C[17] = f("td", { class: "fip-dt-key" }, "Payment Due", -1)),
                    f("td", zb, w(t.header.dueDate || "—"), 1)
                  ])) : A("", !0),
                  t.header.showPO ? (l(), c("tr", Lb, [
                    C[18] || (C[18] = f("td", { class: "fip-dt-key" }, "PO Number", -1)),
                    f("td", Vb, w(t.header.poNumber || "—"), 1)
                  ])) : A("", !0)
                ])
              ])
            ]),
            t.header.showBillTo ? (l(), c("div", Hb, [
              C[19] || (C[19] = f("p", { class: "fip-section-label" }, "Bill To", -1)),
              f("p", jb, w(t.header.clientName || "—"), 1),
              t.header.clientEmail ? (l(), c("p", Ub, w(t.header.clientEmail), 1)) : A("", !0),
              t.header.clientPhone ? (l(), c("p", Wb, w(t.header.clientPhone), 1)) : A("", !0),
              t.header.clientAddress ? (l(), c("p", Yb, w(t.header.clientAddress), 1)) : A("", !0)
            ])) : A("", !0)
          ], 4),
          C[20] || (C[20] = f("div", { class: "fip-divider fip-divider--detailed" }, null, -1))
        ], 64)) : A("", !0),
        f("div", {
          class: "fip-items",
          style: ie(b.value)
        }, [
          f("div", Gb, [
            C[21] || (C[21] = f("span", { class: "fip-col-name" }, "Service", -1)),
            t.showQty ? (l(), c("span", qb, "Qty")) : A("", !0),
            t.showUnit ? (l(), c("span", Kb, "Unit")) : A("", !0),
            t.showPrice ? (l(), c("span", Qb, "Price")) : A("", !0),
            t.showTax ? (l(), c("span", Zb, "Tax")) : A("", !0),
            C[22] || (C[22] = f("span", { class: "fip-col-total" }, "Total", -1))
          ]),
          (l(!0), c(L, null, oe(t.serviceBlocks, (k) => (l(), c(L, {
            key: k.id
          }, [
            f("div", Jb, [
              f("div", Xb, [
                t.showServiceImages && k.imageUrl ? (l(), c("img", {
                  key: 0,
                  src: k.imageUrl,
                  class: "fip-svc-img",
                  alt: ""
                }, null, 8, e0)) : A("", !0),
                f("div", t0, [
                  f("span", n0, w(k.name || "—"), 1),
                  k.description ? (l(), c("span", a0, w(k.description), 1)) : A("", !0)
                ])
              ]),
              t.showQty ? (l(), c("span", i0, w(k.qty ?? "—"), 1)) : A("", !0),
              t.showUnit ? (l(), c("span", o0, w(k.unit || "—"), 1)) : A("", !0),
              t.showPrice ? (l(), c("span", r0, w(k.price != null ? i(k.price) : "—"), 1)) : A("", !0),
              t.showTax ? (l(), c("div", s0, [
                f("span", {
                  class: X(["fip-tax-dot", { "fip-tax-dot--on": k.taxable }])
                }, null, 2)
              ])) : A("", !0),
              f("div", l0, [
                f("span", null, w(i(o(k))), 1),
                t.showTax && k.taxable && u.value.rate ? (l(), c("span", u0, " +" + w(i(o(k) * u.value.rate / 100)) + " tax ", 1)) : A("", !0)
              ])
            ]),
            (l(!0), c(L, null, oe(k.subItems || [], (E) => (l(), c("div", {
              key: E.id,
              class: "fip-row fip-row--sub"
            }, [
              f("div", c0, [
                f("span", d0, w(E.name || "—"), 1)
              ]),
              t.showQty ? (l(), c("span", f0, w(E.qty ?? "—"), 1)) : A("", !0),
              t.showUnit ? (l(), c("span", m0, w(E.unit || "—"), 1)) : A("", !0),
              t.showPrice ? (l(), c("span", h0, w(E.price != null ? i(E.price) : "—"), 1)) : A("", !0),
              t.showTax ? (l(), c("div", v0, [
                f("span", {
                  class: X(["fip-tax-dot", { "fip-tax-dot--on": E.taxable }])
                }, null, 2)
              ])) : A("", !0),
              f("div", p0, [
                f("span", null, w(i(o(E))), 1),
                t.showTax && E.taxable && u.value.rate ? (l(), c("span", g0, " +" + w(i(o(E) * u.value.rate / 100)) + " tax ", 1)) : A("", !0)
              ])
            ]))), 128)),
            C[23] || (C[23] = f("div", { class: "fip-block-rule" }, null, -1))
          ], 64))), 128))
        ], 4),
        f("div", {
          class: X(["fip-summary-zone", `fip-summary-zone--${t.variant}`])
        }, [
          f("div", y0, [
            f("div", b0, [
              C[24] || (C[24] = f("span", { class: "fip-sum-key" }, "Subtotal", -1)),
              f("span", _0, w(i(r.value)), 1)
            ]),
            (l(!0), c(L, null, oe(t.footer.discounts || [], (k, E) => (l(), c(L, {
              key: "d" + E
            }, [
              C[25] || (C[25] = f("div", { class: "fip-sum-rule--light" }, null, -1)),
              f("div", C0, [
                f("span", w0, w(k.label || "Discount") + " (" + w(k.percent || 0) + "%)", 1),
                f("span", A0, "− " + w(i(r.value * k.percent / 100)), 1)
              ])
            ], 64))), 128)),
            C[26] || (C[26] = f("div", { class: "fip-sum-rule--light" }, null, -1)),
            f("div", k0, [
              f("span", S0, w(u.value.label || "Tax") + " (" + w(u.value.rate || 0) + "%)", 1),
              f("span", T0, w(i(m.value)), 1)
            ]),
            C[27] || (C[27] = f("div", { class: "fip-sum-rule--heavy" }, null, -1)),
            f("div", {
              class: "fip-sum-row fip-sum-row--total",
              style: ie(g.value)
            }, [
              f("span", E0, "Total (" + w(t.footer.currency || "GBP") + ")", 1),
              f("span", M0, w(i(v.value)), 1)
            ], 4)
          ])
        ], 2)
      ], 2)
    ]));
  }
}, D0 = /* @__PURE__ */ te(N0, [["__scopeId", "data-v-44c9a96e"]]), lr = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: D0
}, Symbol.toStringTag, { value: "Module" })), I0 = { class: "fu-form-render__progress-track" }, O0 = { class: "fu-form-render__stage" }, R0 = {
  key: 0,
  class: "fu-form-render__ok-row"
}, $0 = { class: "fu-form-render__ok-hint" }, x0 = {
  key: 0,
  class: "fu-form-render__nav"
}, P0 = { class: "fu-form-render__nav-group" }, F0 = /* @__PURE__ */ le({
  __name: "FormRender",
  props: {
    document: {}
  },
  emits: ["submit"],
  setup(t, { emit: e }) {
    const n = t, a = e, i = cl(), o = O(() => n.document?.meta?.theme || {}), r = O(() => ({
      "--brand-color": o.value.brandColor || "#4362FF",
      "--accent-color": o.value.accentColor || "#E0E7FF"
    })), s = O(() => typeof navigator > "u" ? "Ctrl" : /Mac|iPhone|iPad|iPod/.test(navigator.userAgent) ? "Cmd ⌘" : "Ctrl");
    function u(z) {
      return {
        backgroundColor: z.backgroundColor,
        backgroundOpacity: z.backgroundOpacity,
        backgroundImage: z.backgroundImage,
        contentWidth: z.contentWidth,
        paddingTop: z.paddingTop,
        paddingBottom: z.paddingBottom
      };
    }
    function d(z, W, S) {
      return { ...u(z), id: W, columns: [{ width: 100, widgets: S }] };
    }
    const m = O(() => {
      const z = {};
      for (const W of n.document?.pages ?? [])
        for (const S of W.blocks ?? [])
          for (const F of S.columns ?? [])
            for (const J of F.widgets ?? [])
              J.type === "question" && (z[J.id] = J);
      return z;
    });
    function v(z) {
      const W = _.value[z], F = m.value[z]?.props?.options?.find((J) => J.id === W);
      return F ? F.text : W;
    }
    function p(z) {
      const W = v(z.sourceWidgetId);
      return z.operator === "equals" ? W === z.value : z.operator === "not_equals" ? W !== z.value : !0;
    }
    function h(z) {
      const W = z.props?.conditions || [];
      if (!W.length) return !0;
      const S = z.props?.conditionLogic || "all", F = W.map(p);
      return S === "any" ? F.some(Boolean) : F.every(Boolean);
    }
    function y(z) {
      return (z.columns ?? []).flatMap((W) => W.widgets ?? []).filter((W) => W.type === "question");
    }
    const g = O(() => {
      const z = n.document?.pages ?? [], W = [];
      for (const S of z)
        for (const F of S.blocks ?? []) {
          if ((F.columns ?? []).length > 1) {
            W.push({ kind: "block", id: F.id, block: F });
            continue;
          }
          const ne = F.columns?.[0]?.widgets ?? [], be = ne.filter((_e) => _e.type === "question"), Te = ne.filter((_e) => _e.type !== "question");
          if (be.length === 0) {
            Te.length && W.push({
              kind: "block",
              id: `${F.id}-content`,
              block: d(F, `${F.id}-content`, Te)
            });
            continue;
          }
          Te.length && W.push({
            kind: "block",
            id: `${F.id}-content`,
            block: d(F, `${F.id}-content`, Te)
          });
          for (const _e of be)
            W.push({
              kind: "block",
              id: _e.id,
              block: d(F, `${F.id}-${_e.id}`, [_e])
            });
        }
      return W;
    });
    function b(z) {
      return z.kind !== "block" ? [] : y(z.block).filter(h);
    }
    const _ = M({}), C = O(() => {
      const z = g.value.filter((ne) => ne.kind !== "block" || y(ne.block).length === 0 ? !0 : b(ne).length > 0);
      if (!i.review) return z;
      const W = (ne) => ne.kind === "block" && b(ne).length > 0, S = [...z].reverse().findIndex(W);
      if (S === -1) return z;
      const F = z.length - S, J = { kind: "review", id: "__fu-form-render-review__" };
      return [...z.slice(0, F), J, ...z.slice(F)];
    }), k = M(!1), E = M(0), D = O(
      () => Math.min(E.value, Math.max(C.value.length - 1, 0))
    ), x = O(() => C.value[D.value] ?? null), I = O(() => D.value === C.value.length - 1), V = O(() => x.value?.kind === "review");
    function j(z) {
      return {
        ...z,
        columns: (z.columns ?? []).map((W) => ({
          ...W,
          widgets: (W.widgets ?? []).filter(
            (S) => S.type !== "question" || h(S)
          )
        }))
      };
    }
    const R = O(() => {
      const z = x.value;
      if (!z || z.kind !== "block") return z;
      const W = j(z.block);
      return W.columns = W.columns.map((S) => ({
        ...S,
        widgets: S.widgets.map((F) => {
          if (F.type !== "question") return F;
          const J = _.value[F.id];
          return J === void 0 ? F : { ...F, props: { ...F.props, value: J } };
        })
      })), { ...z, block: W };
    }), H = O(() => C.value.length ? Math.min(100, (D.value + 1) / C.value.length * 100) : 0);
    function U(z, W) {
      return z === "multiple_choice" ? !Array.isArray(W) || W.length === 0 : z === "contact_details" ? !W || !W.firstName?.trim() || !W.lastName?.trim() : W == null || W === "";
    }
    const $ = O(() => {
      const z = x.value;
      return !z || z.kind !== "block" ? !0 : b(z).every((W) => W.props.required ? !U(W.props.questionType, _.value[W.id]) : !0);
    });
    function T() {
      !$.value || I.value || V.value || (E.value += 1);
    }
    function N() {
      E.value > 0 && (E.value -= 1);
    }
    function P() {
      $.value && (k.value = !0, a("submit", { ..._.value }), D.value < C.value.length - 1 && (E.value += 1));
    }
    function B(z) {
      if (k.value || !x.value) return;
      const W = z.metaKey || z.ctrlKey;
      if (I.value || V.value) {
        W && z.key === "Enter" && (z.preventDefault(), P());
        return;
      }
      z.key === "Enter" && !z.shiftKey && !W && (z.preventDefault(), T());
    }
    we(() => window.addEventListener("keydown", B)), Ae(() => window.removeEventListener("keydown", B));
    function K(z) {
      if (z?.type !== "update" || !z.widgetId) return;
      _.value = { ..._.value, [z.widgetId]: z.payload?.value };
      const W = x.value;
      if (!W || W.kind !== "block" || I.value) return;
      const S = b(W);
      if (S.length !== 1) return;
      const F = S[0];
      if (F.id !== z.widgetId || F.props.questionType !== "single_choice")
        return;
      const J = z.payload?.value;
      J != null && J !== "" && setTimeout(() => {
        x.value === W && T();
      }, 350);
    }
    return (z, W) => (l(), c("div", {
      class: "fu-form-render",
      style: ie(r.value)
    }, [
      f("div", I0, [
        f("div", {
          class: "fu-form-render__progress-fill",
          style: ie({ width: H.value + "%" })
        }, null, 4)
      ]),
      f("div", O0, [
        Q(Ve, {
          name: "fu-form-render-slide",
          mode: "out-in"
        }, {
          default: ce(() => [
            R.value ? (l(), c("div", {
              key: R.value.id,
              class: "fu-form-render__step"
            }, [
              R.value.kind === "review" ? se(z.$slots, "review", {
                key: 0,
                answers: _.value,
                submit: P
              }, void 0, !0) : (l(), c(L, { key: 1 }, [
                Q(za, {
                  block: R.value.block,
                  theme: o.value,
                  onAction: K
                }, null, 8, ["block", "theme"]),
                k.value ? A("", !0) : (l(), c("div", R0, [
                  Q(Se, {
                    text: I.value ? "Submit" : "OK",
                    variant: "solid",
                    size: "lg",
                    disabled: !$.value,
                    onClick: W[0] || (W[0] = (S) => I.value ? P() : T())
                  }, null, 8, ["text", "disabled"]),
                  f("span", $0, [
                    I.value ? (l(), c(L, { key: 0 }, [
                      W[1] || (W[1] = de(" press ", -1)),
                      f("strong", null, w(s.value), 1),
                      W[2] || (W[2] = de(" + ", -1)),
                      W[3] || (W[3] = f("strong", null, "Enter ↵", -1))
                    ], 64)) : (l(), c(L, { key: 1 }, [
                      W[4] || (W[4] = de(" press ", -1)),
                      W[5] || (W[5] = f("strong", null, "Enter ↵", -1))
                    ], 64))
                  ])
                ]))
              ], 64))
            ])) : A("", !0)
          ]),
          _: 3
        })
      ]),
      k.value ? A("", !0) : (l(), c("div", x0, [
        f("div", P0, [
          Q(Pe, {
            icon: ee(Ia),
            variant: "subtle",
            size: "md",
            tooltip: "Previous",
            disabled: D.value === 0,
            onClick: N
          }, null, 8, ["icon", "disabled"]),
          Q(Pe, {
            icon: ee(xe),
            variant: "solid",
            size: "md",
            tooltip: "Next",
            disabled: !$.value || I.value || V.value,
            onClick: T
          }, null, 8, ["icon", "disabled"])
        ]),
        se(z.$slots, "branding", {}, void 0, !0)
      ]))
    ], 4));
  }
}), B0 = /* @__PURE__ */ te(F0, [["__scopeId", "data-v-55c56a86"]]), z0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: B0
}, Symbol.toStringTag, { value: "Module" })), L0 = { class: "fu-textarea-wrapper" }, V0 = {
  key: 0,
  class: "fu-textarea-label"
}, H0 = {
  key: 0,
  class: "fu-textarea-required"
}, j0 = ["placeholder", "disabled", "readonly", "rows", "required"], U0 = {
  key: 1,
  class: "fu-textarea-error"
}, W0 = {
  key: 2,
  class: "fu-textarea-hint"
}, Y0 = /* @__PURE__ */ le({
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
    const n = t, a = e, i = M(n.modelValue), o = M(null), r = O(() => typeof navigator > "u" ? !1 : /Mac|iPhone|iPad|iPod/.test(navigator.userAgent));
    he(i, (d) => a("update:modelValue", d)), he(
      () => n.modelValue,
      (d) => {
        i.value = d, ge(u);
      }
    );
    const s = O(() => n.variant !== "typeform" ? {} : {
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
    }), (d, m) => (l(), c("div", L0, [
      t.label ? (l(), c("label", V0, [
        de(w(t.label) + " ", 1),
        t.required ? (l(), c("span", H0, "*")) : A("", !0)
      ])) : A("", !0),
      Ue(f("textarea", Pt(d.$attrs, {
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
      }), null, 16, j0), [
        [tt, i.value]
      ]),
      t.error ? (l(), c("span", U0, w(t.error), 1)) : t.variant === "typeform" ? (l(), c("span", W0, [
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
}), ur = /* @__PURE__ */ te(Y0, [["__scopeId", "data-v-869a3ce9"]]), G0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: ur
}, Symbol.toStringTag, { value: "Module" })), q0 = ["value", "disabled", "checked", "aria-readonly"], K0 = { class: "fu-radio__control" }, Q0 = {
  key: 0,
  class: "fu-radio__dot"
}, Z0 = {
  key: 0,
  class: "fu-radio__label"
}, J0 = /* @__PURE__ */ le({
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
    const n = t, a = e, i = O({
      get: () => n.modelValue,
      set: (d) => a("update:modelValue", d)
    }), o = O(() => i.value === n.value), r = O(() => n.variant !== "typeform" ? {} : {
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
      }, null, 40, q0),
      f("span", K0, [
        o.value ? (l(), c("span", Q0)) : A("", !0)
      ]),
      d.$slots.default ? (l(), c("span", Z0, [
        se(d.$slots, "default", {}, void 0, !0)
      ])) : A("", !0)
    ], 6));
  }
}), cr = /* @__PURE__ */ te(J0, [["__scopeId", "data-v-b7b94b46"]]), X0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: cr
}, Symbol.toStringTag, { value: "Module" })), e1 = ["data-widget-id"], t1 = { class: "qu-label-row" }, n1 = ["innerHTML"], a1 = {
  key: 0,
  class: "qu-required"
}, i1 = { class: "qu-input-area" }, o1 = {
  key: 6,
  class: "qu-choices"
}, r1 = {
  key: 7,
  class: "qu-choices"
}, s1 = {
  key: 9,
  class: "qu-contact"
}, l1 = { class: "qu-contact-grid" }, u1 = /* @__PURE__ */ le({
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
    const n = t, a = e, i = O(() => n.theme?.brandColor || "#111827"), o = O(() => n.theme?.questionFont || "inherit"), r = O(() => n.theme?.questionFontSize || "26px"), s = O(() => ({
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
    ), v = O(() => n.label ? n.label.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, "") : ""), p = O(
      () => n.options.map((E) => ({ label: E.text, _id: E.id }))
    ), h = O({
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
            const D = n.questionType === "multiple_choice" ? [] : null;
            u.value = D, a("update", { value: D });
          }
      }
    );
    function y() {
      a("update", { value: u.value });
    }
    function g() {
      a("update", { value: { ...m.value } });
    }
    function b(E) {
      u.value = E?._id ?? null, y();
    }
    function _(E) {
      u.value = E, y();
    }
    function C(E) {
      return Array.isArray(u.value) && u.value.includes(E);
    }
    function k(E) {
      const D = Array.isArray(u.value) ? [...u.value] : [], x = D.indexOf(E);
      x === -1 ? D.push(E) : D.splice(x, 1), u.value = D, y();
    }
    return (E, D) => t.isVisible ? (l(), c("div", {
      key: 0,
      class: "qu-widget",
      "data-widget-id": t.widgetId
    }, [
      f("div", t1, [
        f("div", {
          class: "qu-label-render",
          style: ie(s.value),
          innerHTML: v.value
        }, null, 12, n1),
        t.required ? (l(), c("span", a1, "*")) : A("", !0)
      ]),
      f("div", i1, [
        t.questionType === "short_text" ? (l(), Z(Oe, {
          key: 0,
          modelValue: u.value,
          "onUpdate:modelValue": [
            D[0] || (D[0] = (x) => u.value = x),
            y
          ],
          placeholder: t.placeholder,
          variant: "typeform",
          formWrapperWidth: "100%",
          size: "md",
          color: i.value,
          font: o.value,
          fontSize: r.value
        }, null, 8, ["modelValue", "placeholder", "color", "font", "fontSize"])) : t.questionType === "long_text" ? (l(), Z(ur, {
          key: 1,
          modelValue: u.value,
          "onUpdate:modelValue": [
            D[1] || (D[1] = (x) => u.value = x),
            y
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
            D[2] || (D[2] = (x) => u.value = x),
            y
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
            D[3] || (D[3] = (x) => u.value = x),
            y
          ],
          placeholder: t.placeholder,
          variant: "typeform",
          formWrapperWidth: "100%",
          size: "md",
          color: i.value,
          font: o.value,
          fontSize: r.value
        }, null, 8, ["modelValue", "placeholder", "color", "font", "fontSize"])) : t.questionType === "date" ? (l(), Z(Uo, {
          key: 4,
          modelValue: u.value,
          "onUpdate:modelValue": [
            D[4] || (D[4] = (x) => u.value = x),
            y
          ],
          variant: "date",
          placeholder: t.placeholder,
          size: "md",
          formWrapperWidth: "100%"
        }, null, 8, ["modelValue", "placeholder"])) : t.questionType === "dropdown" ? (l(), Z($a, {
          key: 5,
          modelValue: h.value,
          "onUpdate:modelValue": [
            D[5] || (D[5] = (x) => h.value = x),
            b
          ],
          options: p.value,
          placeholder: t.placeholder,
          align: "left",
          size: "md"
        }, null, 8, ["modelValue", "options", "placeholder"])) : t.questionType === "single_choice" ? (l(), c("div", o1, [
          (l(!0), c(L, null, oe(t.options, (x) => (l(), Z(cr, {
            key: x.id,
            modelValue: u.value,
            "onUpdate:modelValue": [
              D[6] || (D[6] = (I) => u.value = I),
              y
            ],
            value: x.id,
            name: `qu-${t.widgetId}`,
            variant: "typeform",
            color: i.value,
            font: o.value,
            fontSize: r.value
          }, {
            default: ce(() => [
              de(w(x.text), 1)
            ]),
            _: 2
          }, 1032, ["modelValue", "value", "name", "color", "font", "fontSize"]))), 128))
        ])) : t.questionType === "multiple_choice" ? (l(), c("div", r1, [
          (l(!0), c(L, null, oe(t.options, (x) => (l(), Z(ut, {
            key: x.id,
            modelValue: C(x.id),
            label: x.text,
            "onUpdate:modelValue": (I) => k(x.id)
          }, null, 8, ["modelValue", "label", "onUpdate:modelValue"]))), 128))
        ])) : t.questionType === "upload" ? (l(), Z(Fa, {
          key: 8,
          accept: ".jpg,.jpeg,.png,.gif,.pdf,.doc,.docx",
          maxFiles: 10,
          maxFileSizeMB: 15,
          multiple: "",
          onFilesSelected: _
        })) : t.questionType === "contact_details" ? (l(), c("div", s1, [
          f("div", l1, [
            Q(Oe, {
              modelValue: m.value.firstName,
              "onUpdate:modelValue": [
                D[7] || (D[7] = (x) => m.value.firstName = x),
                g
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
                D[8] || (D[8] = (x) => m.value.lastName = x),
                g
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
              D[9] || (D[9] = (x) => m.value.email = x),
              g
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
              D[10] || (D[10] = (x) => m.value.phone = x),
              g
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
    ], 8, e1)) : A("", !0);
  }
}), dr = /* @__PURE__ */ te(u1, [["__scopeId", "data-v-0074e5ed"]]), fr = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: dr
}, Symbol.toStringTag, { value: "Module" }));
var Ln, fe, mr, hr, Ft, gt, ki, vr, pr, kn = {}, gr = [], c1 = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function ot(t, e) {
  for (var n in e) t[n] = e[n];
  return t;
}
function yr(t) {
  var e = t.parentNode;
  e && e.removeChild(t);
}
function q(t, e, n) {
  var a, i, o, r = {};
  for (o in e) o == "key" ? a = e[o] : o == "ref" ? i = e[o] : r[o] = e[o];
  if (arguments.length > 2 && (r.children = arguments.length > 3 ? Ln.call(arguments, 2) : n), typeof t == "function" && t.defaultProps != null) for (o in t.defaultProps) r[o] === void 0 && (r[o] = t.defaultProps[o]);
  return yn(t, r, a, i, null);
}
function yn(t, e, n, a, i) {
  var o = { type: t, props: e, key: n, ref: a, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: i ?? ++mr };
  return i == null && fe.vnode != null && fe.vnode(o), o;
}
function nt() {
  return { current: null };
}
function Re(t) {
  return t.children;
}
function d1(t, e, n, a, i) {
  var o;
  for (o in n) o === "children" || o === "key" || o in e || Sn(t, o, null, n[o], a);
  for (o in e) i && typeof e[o] != "function" || o === "children" || o === "key" || o === "value" || o === "checked" || n[o] === e[o] || Sn(t, o, e[o], n[o], a);
}
function Si(t, e, n) {
  e[0] === "-" ? t.setProperty(e, n ?? "") : t[e] = n == null ? "" : typeof n != "number" || c1.test(e) ? n : n + "px";
}
function Sn(t, e, n, a, i) {
  var o;
  e: if (e === "style") if (typeof n == "string") t.style.cssText = n;
  else {
    if (typeof a == "string" && (t.style.cssText = a = ""), a) for (e in a) n && e in n || Si(t.style, e, "");
    if (n) for (e in n) a && n[e] === a[e] || Si(t.style, e, n[e]);
  }
  else if (e[0] === "o" && e[1] === "n") o = e !== (e = e.replace(/Capture$/, "")), e = e.toLowerCase() in t ? e.toLowerCase().slice(2) : e.slice(2), t.l || (t.l = {}), t.l[e + o] = n, n ? a || t.addEventListener(e, o ? Ei : Ti, o) : t.removeEventListener(e, o ? Ei : Ti, o);
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
function Ti(t) {
  Ft = !0;
  try {
    return this.l[t.type + !1](fe.event ? fe.event(t) : t);
  } finally {
    Ft = !1;
  }
}
function Ei(t) {
  Ft = !0;
  try {
    return this.l[t.type + !0](fe.event ? fe.event(t) : t);
  } finally {
    Ft = !1;
  }
}
function We(t, e) {
  this.props = t, this.context = e;
}
function Zt(t, e) {
  if (e == null) return t.__ ? Zt(t.__, t.__.__k.indexOf(t) + 1) : null;
  for (var n; e < t.__k.length; e++) if ((n = t.__k[e]) != null && n.__e != null) return n.__e;
  return typeof t.type == "function" ? Zt(t) : null;
}
function br(t) {
  var e, n;
  if ((t = t.__) != null && t.__c != null) {
    for (t.__e = t.__c.base = null, e = 0; e < t.__k.length; e++) if ((n = t.__k[e]) != null && n.__e != null) {
      t.__e = t.__c.base = n.__e;
      break;
    }
    return br(t);
  }
}
function f1(t) {
  Ft ? setTimeout(t) : vr(t);
}
function ya(t) {
  (!t.__d && (t.__d = !0) && gt.push(t) && !Tn.__r++ || ki !== fe.debounceRendering) && ((ki = fe.debounceRendering) || f1)(Tn);
}
function Tn() {
  var t, e, n, a, i, o, r, s;
  for (gt.sort(function(u, d) {
    return u.__v.__b - d.__v.__b;
  }); t = gt.shift(); ) t.__d && (e = gt.length, a = void 0, i = void 0, r = (o = (n = t).__v).__e, (s = n.__P) && (a = [], (i = ot({}, o)).__v = o.__v + 1, La(s, o, i, n.__n, s.ownerSVGElement !== void 0, o.__h != null ? [r] : null, a, r ?? Zt(o), o.__h), kr(a, o), o.__e != r && br(o)), gt.length > e && gt.sort(function(u, d) {
    return u.__v.__b - d.__v.__b;
  }));
  Tn.__r = 0;
}
function _r(t, e, n, a, i, o, r, s, u, d) {
  var m, v, p, h, y, g, b, _ = a && a.__k || gr, C = _.length;
  for (n.__k = [], m = 0; m < e.length; m++) if ((h = n.__k[m] = (h = e[m]) == null || typeof h == "boolean" ? null : typeof h == "string" || typeof h == "number" || typeof h == "bigint" ? yn(null, h, null, null, h) : Array.isArray(h) ? yn(Re, { children: h }, null, null, null) : h.__b > 0 ? yn(h.type, h.props, h.key, h.ref ? h.ref : null, h.__v) : h) != null) {
    if (h.__ = n, h.__b = n.__b + 1, (p = _[m]) === null || p && h.key == p.key && h.type === p.type) _[m] = void 0;
    else for (v = 0; v < C; v++) {
      if ((p = _[v]) && h.key == p.key && h.type === p.type) {
        _[v] = void 0;
        break;
      }
      p = null;
    }
    La(t, h, p = p || kn, i, o, r, s, u, d), y = h.__e, (v = h.ref) && p.ref != v && (b || (b = []), p.ref && b.push(p.ref, null, h), b.push(v, h.__c || y, h)), y != null ? (g == null && (g = y), typeof h.type == "function" && h.__k === p.__k ? h.__d = u = Cr(h, u, t) : u = wr(t, h, p, _, y, u), typeof n.type == "function" && (n.__d = u)) : u && p.__e == u && u.parentNode != t && (u = Zt(p));
  }
  for (n.__e = g, m = C; m--; ) _[m] != null && (typeof n.type == "function" && _[m].__e != null && _[m].__e == n.__d && (n.__d = Ar(a).nextSibling), Tr(_[m], _[m]));
  if (b) for (m = 0; m < b.length; m++) Sr(b[m], b[++m], b[++m]);
}
function Cr(t, e, n) {
  for (var a, i = t.__k, o = 0; i && o < i.length; o++) (a = i[o]) && (a.__ = t, e = typeof a.type == "function" ? Cr(a, e, n) : wr(n, a, a, i, a.__e, e));
  return e;
}
function En(t, e) {
  return e = e || [], t == null || typeof t == "boolean" || (Array.isArray(t) ? t.some(function(n) {
    En(n, e);
  }) : e.push(t)), e;
}
function wr(t, e, n, a, i, o) {
  var r, s, u;
  if (e.__d !== void 0) r = e.__d, e.__d = void 0;
  else if (n == null || i != o || i.parentNode == null) e: if (o == null || o.parentNode !== t) t.appendChild(i), r = null;
  else {
    for (s = o, u = 0; (s = s.nextSibling) && u < a.length; u += 1) if (s == i) break e;
    t.insertBefore(i, o), r = o;
  }
  return r !== void 0 ? r : i.nextSibling;
}
function Ar(t) {
  var e, n, a;
  if (t.type == null || typeof t.type == "string") return t.__e;
  if (t.__k) {
    for (e = t.__k.length - 1; e >= 0; e--) if ((n = t.__k[e]) && (a = Ar(n))) return a;
  }
  return null;
}
function La(t, e, n, a, i, o, r, s, u) {
  var d, m, v, p, h, y, g, b, _, C, k, E, D, x, I, V = e.type;
  if (e.constructor !== void 0) return null;
  n.__h != null && (u = n.__h, s = e.__e = n.__e, e.__h = null, o = [s]), (d = fe.__b) && d(e);
  try {
    e: if (typeof V == "function") {
      if (b = e.props, _ = (d = V.contextType) && a[d.__c], C = d ? _ ? _.props.value : d.__ : a, n.__c ? g = (m = e.__c = n.__c).__ = m.__E : ("prototype" in V && V.prototype.render ? e.__c = m = new V(b, C) : (e.__c = m = new We(b, C), m.constructor = V, m.render = h1), _ && _.sub(m), m.props = b, m.state || (m.state = {}), m.context = C, m.__n = a, v = m.__d = !0, m.__h = [], m._sb = []), m.__s == null && (m.__s = m.state), V.getDerivedStateFromProps != null && (m.__s == m.state && (m.__s = ot({}, m.__s)), ot(m.__s, V.getDerivedStateFromProps(b, m.__s))), p = m.props, h = m.state, m.__v = e, v) V.getDerivedStateFromProps == null && m.componentWillMount != null && m.componentWillMount(), m.componentDidMount != null && m.__h.push(m.componentDidMount);
      else {
        if (V.getDerivedStateFromProps == null && b !== p && m.componentWillReceiveProps != null && m.componentWillReceiveProps(b, C), !m.__e && m.shouldComponentUpdate != null && m.shouldComponentUpdate(b, m.__s, C) === !1 || e.__v === n.__v) {
          for (e.__v !== n.__v && (m.props = b, m.state = m.__s, m.__d = !1), e.__e = n.__e, e.__k = n.__k, e.__k.forEach(function(j) {
            j && (j.__ = e);
          }), k = 0; k < m._sb.length; k++) m.__h.push(m._sb[k]);
          m._sb = [], m.__h.length && r.push(m);
          break e;
        }
        m.componentWillUpdate != null && m.componentWillUpdate(b, m.__s, C), m.componentDidUpdate != null && m.__h.push(function() {
          m.componentDidUpdate(p, h, y);
        });
      }
      if (m.context = C, m.props = b, m.__P = t, E = fe.__r, D = 0, "prototype" in V && V.prototype.render) {
        for (m.state = m.__s, m.__d = !1, E && E(e), d = m.render(m.props, m.state, m.context), x = 0; x < m._sb.length; x++) m.__h.push(m._sb[x]);
        m._sb = [];
      } else do
        m.__d = !1, E && E(e), d = m.render(m.props, m.state, m.context), m.state = m.__s;
      while (m.__d && ++D < 25);
      m.state = m.__s, m.getChildContext != null && (a = ot(ot({}, a), m.getChildContext())), v || m.getSnapshotBeforeUpdate == null || (y = m.getSnapshotBeforeUpdate(p, h)), I = d != null && d.type === Re && d.key == null ? d.props.children : d, _r(t, Array.isArray(I) ? I : [I], e, n, a, i, o, r, s, u), m.base = e.__e, e.__h = null, m.__h.length && r.push(m), g && (m.__E = m.__ = null), m.__e = !1;
    } else o == null && e.__v === n.__v ? (e.__k = n.__k, e.__e = n.__e) : e.__e = m1(n.__e, e, n, a, i, o, r, u);
    (d = fe.diffed) && d(e);
  } catch (j) {
    e.__v = null, (u || o != null) && (e.__e = s, e.__h = !!u, o[o.indexOf(s)] = null), fe.__e(j, e, n);
  }
}
function kr(t, e) {
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
function m1(t, e, n, a, i, o, r, s) {
  var u, d, m, v = n.props, p = e.props, h = e.type, y = 0;
  if (h === "svg" && (i = !0), o != null) {
    for (; y < o.length; y++) if ((u = o[y]) && "setAttribute" in u == !!h && (h ? u.localName === h : u.nodeType === 3)) {
      t = u, o[y] = null;
      break;
    }
  }
  if (t == null) {
    if (h === null) return document.createTextNode(p);
    t = i ? document.createElementNS("http://www.w3.org/2000/svg", h) : document.createElement(h, p.is && p), o = null, s = !1;
  }
  if (h === null) v === p || s && t.data === p || (t.data = p);
  else {
    if (o = o && Ln.call(t.childNodes), d = (v = n.props || kn).dangerouslySetInnerHTML, m = p.dangerouslySetInnerHTML, !s) {
      if (o != null) for (v = {}, y = 0; y < t.attributes.length; y++) v[t.attributes[y].name] = t.attributes[y].value;
      (m || d) && (m && (d && m.__html == d.__html || m.__html === t.innerHTML) || (t.innerHTML = m && m.__html || ""));
    }
    if (d1(t, p, v, i, s), m) e.__k = [];
    else if (y = e.props.children, _r(t, Array.isArray(y) ? y : [y], e, n, a, i && h !== "foreignObject", o, r, o ? o[0] : n.__k && Zt(n, 0), s), o != null) for (y = o.length; y--; ) o[y] != null && yr(o[y]);
    s || ("value" in p && (y = p.value) !== void 0 && (y !== t.value || h === "progress" && !y || h === "option" && y !== v.value) && Sn(t, "value", y, v.value, !1), "checked" in p && (y = p.checked) !== void 0 && y !== t.checked && Sn(t, "checked", y, v.checked, !1));
  }
  return t;
}
function Sr(t, e, n) {
  try {
    typeof t == "function" ? t(e) : t.current = e;
  } catch (a) {
    fe.__e(a, n);
  }
}
function Tr(t, e, n) {
  var a, i;
  if (fe.unmount && fe.unmount(t), (a = t.ref) && (a.current && a.current !== t.__e || Sr(a, null, e)), (a = t.__c) != null) {
    if (a.componentWillUnmount) try {
      a.componentWillUnmount();
    } catch (o) {
      fe.__e(o, e);
    }
    a.base = a.__P = null, t.__c = void 0;
  }
  if (a = t.__k) for (i = 0; i < a.length; i++) a[i] && Tr(a[i], e, n || typeof t.type != "function");
  n || t.__e == null || yr(t.__e), t.__ = t.__e = t.__d = void 0;
}
function h1(t, e, n) {
  return this.constructor(t, n);
}
function Jt(t, e, n) {
  var a, i, o;
  fe.__ && fe.__(t, e), i = (a = !1) ? null : e.__k, o = [], La(e, t = e.__k = q(Re, null, [t]), i || kn, kn, e.ownerSVGElement !== void 0, i ? null : e.firstChild ? Ln.call(e.childNodes) : null, o, i ? i.__e : e.firstChild, a), kr(o, t);
}
function v1(t, e) {
  var n = { __c: e = "__cC" + pr++, __: t, Consumer: function(a, i) {
    return a.children(i);
  }, Provider: function(a) {
    var i, o;
    return this.getChildContext || (i = [], (o = {})[e] = this, this.getChildContext = function() {
      return o;
    }, this.shouldComponentUpdate = function(r) {
      this.props.value !== r.value && i.some(function(s) {
        s.__e = !0, ya(s);
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
Ln = gr.slice, fe = { __e: function(t, e, n, a) {
  for (var i, o, r; e = e.__; ) if ((i = e.__c) && !i.__) try {
    if ((o = i.constructor) && o.getDerivedStateFromError != null && (i.setState(o.getDerivedStateFromError(t)), r = i.__d), i.componentDidCatch != null && (i.componentDidCatch(t, a || {}), r = i.__d), r) return i.__E = i;
  } catch (s) {
    t = s;
  }
  throw t;
} }, mr = 0, hr = function(t) {
  return t != null && t.constructor === void 0;
}, Ft = !1, We.prototype.setState = function(t, e) {
  var n;
  n = this.__s != null && this.__s !== this.state ? this.__s : this.__s = ot({}, this.state), typeof t == "function" && (t = t(ot({}, n), this.props)), t && ot(n, t), t != null && this.__v && (e && this._sb.push(e), ya(this));
}, We.prototype.forceUpdate = function(t) {
  this.__v && (this.__e = !0, t && this.__h.push(t), ya(this));
}, We.prototype.render = Re, gt = [], vr = typeof Promise == "function" ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, Tn.__r = 0, pr = 0;
var Ze, Xn, Mi, Er = [], ea = [], Ni = fe.__b, Di = fe.__r, Ii = fe.diffed, Oi = fe.__c, Ri = fe.unmount;
function p1() {
  for (var t; t = Er.shift(); ) if (t.__P && t.__H) try {
    t.__H.__h.forEach(bn), t.__H.__h.forEach(ba), t.__H.__h = [];
  } catch (e) {
    t.__H.__h = [], fe.__e(e, t.__v);
  }
}
fe.__b = function(t) {
  Ze = null, Ni && Ni(t);
}, fe.__r = function(t) {
  Di && Di(t);
  var e = (Ze = t.__c).__H;
  e && (Xn === Ze ? (e.__h = [], Ze.__h = [], e.__.forEach(function(n) {
    n.__N && (n.__ = n.__N), n.__V = ea, n.__N = n.i = void 0;
  })) : (e.__h.forEach(bn), e.__h.forEach(ba), e.__h = [])), Xn = Ze;
}, fe.diffed = function(t) {
  Ii && Ii(t);
  var e = t.__c;
  e && e.__H && (e.__H.__h.length && (Er.push(e) !== 1 && Mi === fe.requestAnimationFrame || ((Mi = fe.requestAnimationFrame) || g1)(p1)), e.__H.__.forEach(function(n) {
    n.i && (n.__H = n.i), n.__V !== ea && (n.__ = n.__V), n.i = void 0, n.__V = ea;
  })), Xn = Ze = null;
}, fe.__c = function(t, e) {
  e.some(function(n) {
    try {
      n.__h.forEach(bn), n.__h = n.__h.filter(function(a) {
        return !a.__ || ba(a);
      });
    } catch (a) {
      e.some(function(i) {
        i.__h && (i.__h = []);
      }), e = [], fe.__e(a, n.__v);
    }
  }), Oi && Oi(t, e);
}, fe.unmount = function(t) {
  Ri && Ri(t);
  var e, n = t.__c;
  n && n.__H && (n.__H.__.forEach(function(a) {
    try {
      bn(a);
    } catch (i) {
      e = i;
    }
  }), n.__H = void 0, e && fe.__e(e, n.__v));
};
var $i = typeof requestAnimationFrame == "function";
function g1(t) {
  var e, n = function() {
    clearTimeout(a), $i && cancelAnimationFrame(e), setTimeout(t);
  }, a = setTimeout(n, 100);
  $i && (e = requestAnimationFrame(n));
}
function bn(t) {
  var e = Ze, n = t.__c;
  typeof n == "function" && (t.__c = void 0, n()), Ze = e;
}
function ba(t) {
  var e = Ze;
  t.__c = t.__(), Ze = e;
}
function y1(t, e) {
  for (var n in e) t[n] = e[n];
  return t;
}
function xi(t, e) {
  for (var n in t) if (n !== "__source" && !(n in e)) return !0;
  for (var a in e) if (a !== "__source" && t[a] !== e[a]) return !0;
  return !1;
}
function Pi(t) {
  this.props = t;
}
(Pi.prototype = new We()).isPureReactComponent = !0, Pi.prototype.shouldComponentUpdate = function(t, e) {
  return xi(this.props, t) || xi(this.state, e);
};
var Fi = fe.__b;
fe.__b = function(t) {
  t.type && t.type.__f && t.ref && (t.props.ref = t.ref, t.ref = null), Fi && Fi(t);
};
var b1 = fe.__e;
fe.__e = function(t, e, n, a) {
  if (t.then) {
    for (var i, o = e; o = o.__; ) if ((i = o.__c) && i.__c) return e.__e == null && (e.__e = n.__e, e.__k = n.__k), i.__c(t, e);
  }
  b1(t, e, n, a);
};
var Bi = fe.unmount;
function Mr(t, e, n) {
  return t && (t.__c && t.__c.__H && (t.__c.__H.__.forEach(function(a) {
    typeof a.__c == "function" && a.__c();
  }), t.__c.__H = null), (t = y1({}, t)).__c != null && (t.__c.__P === n && (t.__c.__P = e), t.__c = null), t.__k = t.__k && t.__k.map(function(a) {
    return Mr(a, e, n);
  })), t;
}
function Nr(t, e, n) {
  return t && (t.__v = null, t.__k = t.__k && t.__k.map(function(a) {
    return Nr(a, e, n);
  }), t.__c && t.__c.__P === e && (t.__e && n.insertBefore(t.__e, t.__d), t.__c.__e = !0, t.__c.__P = n)), t;
}
function ta() {
  this.__u = 0, this.t = null, this.__b = null;
}
function Dr(t) {
  var e = t.__.__c;
  return e && e.__a && e.__a(t);
}
function un() {
  this.u = null, this.o = null;
}
fe.unmount = function(t) {
  var e = t.__c;
  e && e.__R && e.__R(), e && t.__h === !0 && (t.type = null), Bi && Bi(t);
}, (ta.prototype = new We()).__c = function(t, e) {
  var n = e.__c, a = this;
  a.t == null && (a.t = []), a.t.push(n);
  var i = Dr(a.__v), o = !1, r = function() {
    o || (o = !0, n.__R = null, i ? i(s) : s());
  };
  n.__R = r;
  var s = function() {
    if (!--a.__u) {
      if (a.state.__a) {
        var d = a.state.__a;
        a.__v.__k[0] = Nr(d, d.__c.__P, d.__c.__O);
      }
      var m;
      for (a.setState({ __a: a.__b = null }); m = a.t.pop(); ) m.forceUpdate();
    }
  }, u = e.__h === !0;
  a.__u++ || u || a.setState({ __a: a.__b = a.__v.__k[0] }), t.then(r, r);
}, ta.prototype.componentWillUnmount = function() {
  this.t = [];
}, ta.prototype.render = function(t, e) {
  if (this.__b) {
    if (this.__v.__k) {
      var n = document.createElement("div"), a = this.__v.__k[0].__c;
      this.__v.__k[0] = Mr(this.__b, n, a.__O = a.__P);
    }
    this.__b = null;
  }
  var i = e.__a && q(Re, null, t.fallback);
  return i && (i.__h = null), [q(Re, null, e.__a ? null : t.children), i];
};
var zi = function(t, e, n) {
  if (++n[1] === n[0] && t.o.delete(e), t.props.revealOrder && (t.props.revealOrder[0] !== "t" || !t.o.size)) for (n = t.u; n; ) {
    for (; n.length > 3; ) n.pop()();
    if (n[1] < n[0]) break;
    t.u = n = n[2];
  }
};
function _1(t) {
  return this.getChildContext = function() {
    return t.context;
  }, t.children;
}
function C1(t) {
  var e = this, n = t.i;
  e.componentWillUnmount = function() {
    Jt(null, e.l), e.l = null, e.i = null;
  }, e.i && e.i !== n && e.componentWillUnmount(), t.__v ? (e.l || (e.i = n, e.l = { nodeType: 1, parentNode: n, childNodes: [], appendChild: function(a) {
    this.childNodes.push(a), e.i.appendChild(a);
  }, insertBefore: function(a, i) {
    this.childNodes.push(a), e.i.appendChild(a);
  }, removeChild: function(a) {
    this.childNodes.splice(this.childNodes.indexOf(a) >>> 1, 1), e.i.removeChild(a);
  } }), Jt(q(_1, { context: e.context }, t.__v), e.l)) : e.l && e.componentWillUnmount();
}
function w1(t, e) {
  var n = q(C1, { __v: t, i: e });
  return n.containerInfo = e, n;
}
(un.prototype = new We()).__a = function(t) {
  var e = this, n = Dr(e.__v), a = e.o.get(t);
  return a[0]++, function(i) {
    var o = function() {
      e.props.revealOrder ? (a.push(i), zi(e, t, a)) : i();
    };
    n ? n(o) : o();
  };
}, un.prototype.render = function(t) {
  this.u = null, this.o = /* @__PURE__ */ new Map();
  var e = En(t.children);
  t.revealOrder && t.revealOrder[0] === "b" && e.reverse();
  for (var n = e.length; n--; ) this.o.set(e[n], this.u = [1, 0, this.u]);
  return t.children;
}, un.prototype.componentDidUpdate = un.prototype.componentDidMount = function() {
  var t = this;
  this.o.forEach(function(e, n) {
    zi(t, n, e);
  });
};
var A1 = typeof Symbol < "u" && Symbol.for && Symbol.for("react.element") || 60103, k1 = /^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/, S1 = typeof document < "u", T1 = function(t) {
  return (typeof Symbol < "u" && typeof Symbol() == "symbol" ? /fil|che|rad/i : /fil|che|ra/i).test(t);
};
We.prototype.isReactComponent = {}, ["componentWillMount", "componentWillReceiveProps", "componentWillUpdate"].forEach(function(t) {
  Object.defineProperty(We.prototype, t, { configurable: !0, get: function() {
    return this["UNSAFE_" + t];
  }, set: function(e) {
    Object.defineProperty(this, t, { configurable: !0, writable: !0, value: e });
  } });
});
var Li = fe.event;
function E1() {
}
function M1() {
  return this.cancelBubble;
}
function N1() {
  return this.defaultPrevented;
}
fe.event = function(t) {
  return Li && (t = Li(t)), t.persist = E1, t.isPropagationStopped = M1, t.isDefaultPrevented = N1, t.nativeEvent = t;
};
var Vi = { configurable: !0, get: function() {
  return this.class;
} }, Hi = fe.vnode;
fe.vnode = function(t) {
  var e = t.type, n = t.props, a = n;
  if (typeof e == "string") {
    var i = e.indexOf("-") === -1;
    for (var o in a = {}, n) {
      var r = n[o];
      S1 && o === "children" && e === "noscript" || o === "value" && "defaultValue" in n && r == null || (o === "defaultValue" && "value" in n && n.value == null ? o = "value" : o === "download" && r === !0 ? r = "" : /ondoubleclick/i.test(o) ? o = "ondblclick" : /^onchange(textarea|input)/i.test(o + e) && !T1(n.type) ? o = "oninput" : /^onfocus$/i.test(o) ? o = "onfocusin" : /^onblur$/i.test(o) ? o = "onfocusout" : /^on(Ani|Tra|Tou|BeforeInp|Compo)/.test(o) ? o = o.toLowerCase() : i && k1.test(o) ? o = o.replace(/[A-Z0-9]/g, "-$&").toLowerCase() : r === null && (r = void 0), /^oninput$/i.test(o) && (o = o.toLowerCase(), a[o] && (o = "oninputCapture")), a[o] = r);
    }
    e == "select" && a.multiple && Array.isArray(a.value) && (a.value = En(n.children).forEach(function(s) {
      s.props.selected = a.value.indexOf(s.props.value) != -1;
    })), e == "select" && a.defaultValue != null && (a.value = En(n.children).forEach(function(s) {
      s.props.selected = a.multiple ? a.defaultValue.indexOf(s.props.value) != -1 : a.defaultValue == s.props.value;
    })), t.props = a, n.class != n.className && (Vi.enumerable = "className" in n, n.className != null && (a.class = n.className), Object.defineProperty(a, "className", Vi));
  }
  t.$$typeof = A1, Hi && Hi(t);
};
var ji = fe.__r;
fe.__r = function(t) {
  ji && ji(t), t.__c;
};
const Ir = [], _a = /* @__PURE__ */ new Map();
function Or(t) {
  Ir.push(t), _a.forEach((e) => {
    $r(e, t);
  });
}
function D1(t) {
  t.isConnected && // sometimes true if SSR system simulates DOM
  t.getRootNode && Rr(t.getRootNode());
}
function Rr(t) {
  let e = _a.get(t);
  if (!e || !e.isConnected) {
    if (e = t.querySelector("style[data-fullcalendar]"), !e) {
      e = document.createElement("style"), e.setAttribute("data-fullcalendar", "");
      const n = O1();
      n && (e.nonce = n);
      const a = t === document ? document.head : t, i = t === document ? a.querySelector("script,link[rel=stylesheet],link[as=style],style") : a.firstChild;
      a.insertBefore(e, i);
    }
    _a.set(t, e), I1(e);
  }
}
function I1(t) {
  for (const e of Ir)
    $r(t, e);
}
function $r(t, e) {
  const { sheet: n } = t, a = n.cssRules.length;
  e.split("}").forEach((i, o) => {
    i = i.trim(), i && n.insertRule(i + "}", a + o);
  });
}
let na;
function O1() {
  return na === void 0 && (na = R1()), na;
}
function R1() {
  const t = document.querySelector('meta[name="csp-nonce"]');
  if (t && t.hasAttribute("content"))
    return t.getAttribute("content");
  const e = document.querySelector("script[nonce]");
  return e && e.nonce || "";
}
typeof document < "u" && Rr(document);
var $1 = ':root{--fc-small-font-size:.85em;--fc-page-bg-color:#fff;--fc-neutral-bg-color:hsla(0,0%,82%,.3);--fc-neutral-text-color:grey;--fc-border-color:#ddd;--fc-button-text-color:#fff;--fc-button-bg-color:#2c3e50;--fc-button-border-color:#2c3e50;--fc-button-hover-bg-color:#1e2b37;--fc-button-hover-border-color:#1a252f;--fc-button-active-bg-color:#1a252f;--fc-button-active-border-color:#151e27;--fc-event-bg-color:#3788d8;--fc-event-border-color:#3788d8;--fc-event-text-color:#fff;--fc-event-selected-overlay-color:rgba(0,0,0,.25);--fc-more-link-bg-color:#d0d0d0;--fc-more-link-text-color:inherit;--fc-event-resizer-thickness:8px;--fc-event-resizer-dot-total-width:8px;--fc-event-resizer-dot-border-width:1px;--fc-non-business-color:hsla(0,0%,84%,.3);--fc-bg-event-color:#8fdf82;--fc-bg-event-opacity:0.3;--fc-highlight-color:rgba(188,232,241,.3);--fc-today-bg-color:rgba(255,220,40,.15);--fc-now-indicator-color:red}.fc-not-allowed,.fc-not-allowed .fc-event{cursor:not-allowed}.fc{display:flex;flex-direction:column;font-size:1em}.fc,.fc *,.fc :after,.fc :before{box-sizing:border-box}.fc table{border-collapse:collapse;border-spacing:0;font-size:1em}.fc th{text-align:center}.fc td,.fc th{padding:0;vertical-align:top}.fc a[data-navlink]{cursor:pointer}.fc a[data-navlink]:hover{text-decoration:underline}.fc-direction-ltr{direction:ltr;text-align:left}.fc-direction-rtl{direction:rtl;text-align:right}.fc-theme-standard td,.fc-theme-standard th{border:1px solid var(--fc-border-color)}.fc-liquid-hack td,.fc-liquid-hack th{position:relative}@font-face{font-family:fcicons;font-style:normal;font-weight:400;src:url("data:application/x-font-ttf;charset=utf-8;base64,AAEAAAALAIAAAwAwT1MvMg8SBfAAAAC8AAAAYGNtYXAXVtKNAAABHAAAAFRnYXNwAAAAEAAAAXAAAAAIZ2x5ZgYydxIAAAF4AAAFNGhlYWQUJ7cIAAAGrAAAADZoaGVhB20DzAAABuQAAAAkaG10eCIABhQAAAcIAAAALGxvY2ED4AU6AAAHNAAAABhtYXhwAA8AjAAAB0wAAAAgbmFtZXsr690AAAdsAAABhnBvc3QAAwAAAAAI9AAAACAAAwPAAZAABQAAApkCzAAAAI8CmQLMAAAB6wAzAQkAAAAAAAAAAAAAAAAAAAABEAAAAAAAAAAAAAAAAAAAAABAAADpBgPA/8AAQAPAAEAAAAABAAAAAAAAAAAAAAAgAAAAAAADAAAAAwAAABwAAQADAAAAHAADAAEAAAAcAAQAOAAAAAoACAACAAIAAQAg6Qb//f//AAAAAAAg6QD//f//AAH/4xcEAAMAAQAAAAAAAAAAAAAAAQAB//8ADwABAAAAAAAAAAAAAgAANzkBAAAAAAEAAAAAAAAAAAACAAA3OQEAAAAAAQAAAAAAAAAAAAIAADc5AQAAAAABAWIAjQKeAskAEwAAJSc3NjQnJiIHAQYUFwEWMjc2NCcCnuLiDQ0MJAz/AA0NAQAMJAwNDcni4gwjDQwM/wANIwz/AA0NDCMNAAAAAQFiAI0CngLJABMAACUBNjQnASYiBwYUHwEHBhQXFjI3AZ4BAA0N/wAMJAwNDeLiDQ0MJAyNAQAMIw0BAAwMDSMM4uINIwwNDQAAAAIA4gC3Ax4CngATACcAACUnNzY0JyYiDwEGFB8BFjI3NjQnISc3NjQnJiIPAQYUHwEWMjc2NCcB87e3DQ0MIw3VDQ3VDSMMDQ0BK7e3DQ0MJAzVDQ3VDCQMDQ3zuLcMJAwNDdUNIwzWDAwNIwy4twwkDA0N1Q0jDNYMDA0jDAAAAgDiALcDHgKeABMAJwAAJTc2NC8BJiIHBhQfAQcGFBcWMjchNzY0LwEmIgcGFB8BBwYUFxYyNwJJ1Q0N1Q0jDA0Nt7cNDQwjDf7V1Q0N1QwkDA0Nt7cNDQwkDLfWDCMN1Q0NDCQMt7gMIw0MDNYMIw3VDQ0MJAy3uAwjDQwMAAADAFUAAAOrA1UAMwBoAHcAABMiBgcOAQcOAQcOARURFBYXHgEXHgEXHgEzITI2Nz4BNz4BNz4BNRE0JicuAScuAScuASMFITIWFx4BFx4BFx4BFREUBgcOAQcOAQcOASMhIiYnLgEnLgEnLgE1ETQ2Nz4BNz4BNz4BMxMhMjY1NCYjISIGFRQWM9UNGAwLFQkJDgUFBQUFBQ4JCRULDBgNAlYNGAwLFQkJDgUFBQUFBQ4JCRULDBgN/aoCVgQIBAQHAwMFAQIBAQIBBQMDBwQECAT9qgQIBAQHAwMFAQIBAQIBBQMDBwQECASAAVYRGRkR/qoRGRkRA1UFBAUOCQkVDAsZDf2rDRkLDBUJCA4FBQUFBQUOCQgVDAsZDQJVDRkLDBUJCQ4FBAVVAgECBQMCBwQECAX9qwQJAwQHAwMFAQICAgIBBQMDBwQDCQQCVQUIBAQHAgMFAgEC/oAZEhEZGRESGQAAAAADAFUAAAOrA1UAMwBoAIkAABMiBgcOAQcOAQcOARURFBYXHgEXHgEXHgEzITI2Nz4BNz4BNz4BNRE0JicuAScuAScuASMFITIWFx4BFx4BFx4BFREUBgcOAQcOAQcOASMhIiYnLgEnLgEnLgE1ETQ2Nz4BNz4BNz4BMxMzFRQWMzI2PQEzMjY1NCYrATU0JiMiBh0BIyIGFRQWM9UNGAwLFQkJDgUFBQUFBQ4JCRULDBgNAlYNGAwLFQkJDgUFBQUFBQ4JCRULDBgN/aoCVgQIBAQHAwMFAQIBAQIBBQMDBwQECAT9qgQIBAQHAwMFAQIBAQIBBQMDBwQECASAgBkSEhmAERkZEYAZEhIZgBEZGREDVQUEBQ4JCRUMCxkN/asNGQsMFQkIDgUFBQUFBQ4JCBUMCxkNAlUNGQsMFQkJDgUEBVUCAQIFAwIHBAQIBf2rBAkDBAcDAwUBAgICAgEFAwMHBAMJBAJVBQgEBAcCAwUCAQL+gIASGRkSgBkSERmAEhkZEoAZERIZAAABAOIAjQMeAskAIAAAExcHBhQXFjI/ARcWMjc2NC8BNzY0JyYiDwEnJiIHBhQX4uLiDQ0MJAzi4gwkDA0N4uINDQwkDOLiDCQMDQ0CjeLiDSMMDQ3h4Q0NDCMN4uIMIw0MDOLiDAwNIwwAAAABAAAAAQAAa5n0y18PPPUACwQAAAAAANivOVsAAAAA2K85WwAAAAADqwNVAAAACAACAAAAAAAAAAEAAAPA/8AAAAQAAAAAAAOrAAEAAAAAAAAAAAAAAAAAAAALBAAAAAAAAAAAAAAAAgAAAAQAAWIEAAFiBAAA4gQAAOIEAABVBAAAVQQAAOIAAAAAAAoAFAAeAEQAagCqAOoBngJkApoAAQAAAAsAigADAAAAAAACAAAAAAAAAAAAAAAAAAAAAAAAAA4ArgABAAAAAAABAAcAAAABAAAAAAACAAcAYAABAAAAAAADAAcANgABAAAAAAAEAAcAdQABAAAAAAAFAAsAFQABAAAAAAAGAAcASwABAAAAAAAKABoAigADAAEECQABAA4ABwADAAEECQACAA4AZwADAAEECQADAA4APQADAAEECQAEAA4AfAADAAEECQAFABYAIAADAAEECQAGAA4AUgADAAEECQAKADQApGZjaWNvbnMAZgBjAGkAYwBvAG4Ac1ZlcnNpb24gMS4wAFYAZQByAHMAaQBvAG4AIAAxAC4AMGZjaWNvbnMAZgBjAGkAYwBvAG4Ac2ZjaWNvbnMAZgBjAGkAYwBvAG4Ac1JlZ3VsYXIAUgBlAGcAdQBsAGEAcmZjaWNvbnMAZgBjAGkAYwBvAG4Ac0ZvbnQgZ2VuZXJhdGVkIGJ5IEljb01vb24uAEYAbwBuAHQAIABnAGUAbgBlAHIAYQB0AGUAZAAgAGIAeQAgAEkAYwBvAE0AbwBvAG4ALgAAAAMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA=") format("truetype")}.fc-icon{speak:none;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;display:inline-block;font-family:fcicons!important;font-style:normal;font-variant:normal;font-weight:400;height:1em;line-height:1;text-align:center;text-transform:none;-webkit-user-select:none;-moz-user-select:none;user-select:none;width:1em}.fc-icon-chevron-left:before{content:"\\e900"}.fc-icon-chevron-right:before{content:"\\e901"}.fc-icon-chevrons-left:before{content:"\\e902"}.fc-icon-chevrons-right:before{content:"\\e903"}.fc-icon-minus-square:before{content:"\\e904"}.fc-icon-plus-square:before{content:"\\e905"}.fc-icon-x:before{content:"\\e906"}.fc .fc-button{border-radius:0;font-family:inherit;font-size:inherit;line-height:inherit;margin:0;overflow:visible;text-transform:none}.fc .fc-button:focus{outline:1px dotted;outline:5px auto -webkit-focus-ring-color}.fc .fc-button{-webkit-appearance:button}.fc .fc-button:not(:disabled){cursor:pointer}.fc .fc-button{background-color:transparent;border:1px solid transparent;border-radius:.25em;display:inline-block;font-size:1em;font-weight:400;line-height:1.5;padding:.4em .65em;text-align:center;-webkit-user-select:none;-moz-user-select:none;user-select:none;vertical-align:middle}.fc .fc-button:hover{text-decoration:none}.fc .fc-button:focus{box-shadow:0 0 0 .2rem rgba(44,62,80,.25);outline:0}.fc .fc-button:disabled{opacity:.65}.fc .fc-button-primary{background-color:var(--fc-button-bg-color);border-color:var(--fc-button-border-color);color:var(--fc-button-text-color)}.fc .fc-button-primary:hover{background-color:var(--fc-button-hover-bg-color);border-color:var(--fc-button-hover-border-color);color:var(--fc-button-text-color)}.fc .fc-button-primary:disabled{background-color:var(--fc-button-bg-color);border-color:var(--fc-button-border-color);color:var(--fc-button-text-color)}.fc .fc-button-primary:focus{box-shadow:0 0 0 .2rem rgba(76,91,106,.5)}.fc .fc-button-primary:not(:disabled).fc-button-active,.fc .fc-button-primary:not(:disabled):active{background-color:var(--fc-button-active-bg-color);border-color:var(--fc-button-active-border-color);color:var(--fc-button-text-color)}.fc .fc-button-primary:not(:disabled).fc-button-active:focus,.fc .fc-button-primary:not(:disabled):active:focus{box-shadow:0 0 0 .2rem rgba(76,91,106,.5)}.fc .fc-button .fc-icon{font-size:1.5em;vertical-align:middle}.fc .fc-button-group{display:inline-flex;position:relative;vertical-align:middle}.fc .fc-button-group>.fc-button{flex:1 1 auto;position:relative}.fc .fc-button-group>.fc-button.fc-button-active,.fc .fc-button-group>.fc-button:active,.fc .fc-button-group>.fc-button:focus,.fc .fc-button-group>.fc-button:hover{z-index:1}.fc-direction-ltr .fc-button-group>.fc-button:not(:first-child){border-bottom-left-radius:0;border-top-left-radius:0;margin-left:-1px}.fc-direction-ltr .fc-button-group>.fc-button:not(:last-child){border-bottom-right-radius:0;border-top-right-radius:0}.fc-direction-rtl .fc-button-group>.fc-button:not(:first-child){border-bottom-right-radius:0;border-top-right-radius:0;margin-right:-1px}.fc-direction-rtl .fc-button-group>.fc-button:not(:last-child){border-bottom-left-radius:0;border-top-left-radius:0}.fc .fc-toolbar{align-items:center;display:flex;justify-content:space-between}.fc .fc-toolbar.fc-header-toolbar{margin-bottom:1.5em}.fc .fc-toolbar.fc-footer-toolbar{margin-top:1.5em}.fc .fc-toolbar-title{font-size:1.75em;margin:0}.fc-direction-ltr .fc-toolbar>*>:not(:first-child){margin-left:.75em}.fc-direction-rtl .fc-toolbar>*>:not(:first-child){margin-right:.75em}.fc-direction-rtl .fc-toolbar-ltr{flex-direction:row-reverse}.fc .fc-scroller{-webkit-overflow-scrolling:touch;position:relative}.fc .fc-scroller-liquid{height:100%}.fc .fc-scroller-liquid-absolute{bottom:0;left:0;position:absolute;right:0;top:0}.fc .fc-scroller-harness{direction:ltr;overflow:hidden;position:relative}.fc .fc-scroller-harness-liquid{height:100%}.fc-direction-rtl .fc-scroller-harness>.fc-scroller{direction:rtl}.fc-theme-standard .fc-scrollgrid{border:1px solid var(--fc-border-color)}.fc .fc-scrollgrid,.fc .fc-scrollgrid table{table-layout:fixed;width:100%}.fc .fc-scrollgrid table{border-left-style:hidden;border-right-style:hidden;border-top-style:hidden}.fc .fc-scrollgrid{border-bottom-width:0;border-collapse:separate;border-right-width:0}.fc .fc-scrollgrid-liquid{height:100%}.fc .fc-scrollgrid-section,.fc .fc-scrollgrid-section table,.fc .fc-scrollgrid-section>td{height:1px}.fc .fc-scrollgrid-section-liquid>td{height:100%}.fc .fc-scrollgrid-section>*{border-left-width:0;border-top-width:0}.fc .fc-scrollgrid-section-footer>*,.fc .fc-scrollgrid-section-header>*{border-bottom-width:0}.fc .fc-scrollgrid-section-body table,.fc .fc-scrollgrid-section-footer table{border-bottom-style:hidden}.fc .fc-scrollgrid-section-sticky>*{background:var(--fc-page-bg-color);position:sticky;z-index:3}.fc .fc-scrollgrid-section-header.fc-scrollgrid-section-sticky>*{top:0}.fc .fc-scrollgrid-section-footer.fc-scrollgrid-section-sticky>*{bottom:0}.fc .fc-scrollgrid-sticky-shim{height:1px;margin-bottom:-1px}.fc-sticky{position:sticky}.fc .fc-view-harness{flex-grow:1;position:relative}.fc .fc-view-harness-active>.fc-view{bottom:0;left:0;position:absolute;right:0;top:0}.fc .fc-col-header-cell-cushion{display:inline-block;padding:2px 4px}.fc .fc-bg-event,.fc .fc-highlight,.fc .fc-non-business{bottom:0;left:0;position:absolute;right:0;top:0}.fc .fc-non-business{background:var(--fc-non-business-color)}.fc .fc-bg-event{background:var(--fc-bg-event-color);opacity:var(--fc-bg-event-opacity)}.fc .fc-bg-event .fc-event-title{font-size:var(--fc-small-font-size);font-style:italic;margin:.5em}.fc .fc-highlight{background:var(--fc-highlight-color)}.fc .fc-cell-shaded,.fc .fc-day-disabled{background:var(--fc-neutral-bg-color)}a.fc-event,a.fc-event:hover{text-decoration:none}.fc-event.fc-event-draggable,.fc-event[href]{cursor:pointer}.fc-event .fc-event-main{position:relative;z-index:2}.fc-event-dragging:not(.fc-event-selected){opacity:.75}.fc-event-dragging.fc-event-selected{box-shadow:0 2px 7px rgba(0,0,0,.3)}.fc-event .fc-event-resizer{display:none;position:absolute;z-index:4}.fc-event-selected .fc-event-resizer,.fc-event:hover .fc-event-resizer{display:block}.fc-event-selected .fc-event-resizer{background:var(--fc-page-bg-color);border-color:inherit;border-radius:calc(var(--fc-event-resizer-dot-total-width)/2);border-style:solid;border-width:var(--fc-event-resizer-dot-border-width);height:var(--fc-event-resizer-dot-total-width);width:var(--fc-event-resizer-dot-total-width)}.fc-event-selected .fc-event-resizer:before{bottom:-20px;content:"";left:-20px;position:absolute;right:-20px;top:-20px}.fc-event-selected,.fc-event:focus{box-shadow:0 2px 5px rgba(0,0,0,.2)}.fc-event-selected:before,.fc-event:focus:before{bottom:0;content:"";left:0;position:absolute;right:0;top:0;z-index:3}.fc-event-selected:after,.fc-event:focus:after{background:var(--fc-event-selected-overlay-color);bottom:-1px;content:"";left:-1px;position:absolute;right:-1px;top:-1px;z-index:1}.fc-h-event{background-color:var(--fc-event-bg-color);border:1px solid var(--fc-event-border-color);display:block}.fc-h-event .fc-event-main{color:var(--fc-event-text-color)}.fc-h-event .fc-event-main-frame{display:flex}.fc-h-event .fc-event-time{max-width:100%;overflow:hidden}.fc-h-event .fc-event-title-container{flex-grow:1;flex-shrink:1;min-width:0}.fc-h-event .fc-event-title{display:inline-block;left:0;max-width:100%;overflow:hidden;right:0;vertical-align:top}.fc-h-event.fc-event-selected:before{bottom:-10px;top:-10px}.fc-direction-ltr .fc-daygrid-block-event:not(.fc-event-start),.fc-direction-rtl .fc-daygrid-block-event:not(.fc-event-end){border-bottom-left-radius:0;border-left-width:0;border-top-left-radius:0}.fc-direction-ltr .fc-daygrid-block-event:not(.fc-event-end),.fc-direction-rtl .fc-daygrid-block-event:not(.fc-event-start){border-bottom-right-radius:0;border-right-width:0;border-top-right-radius:0}.fc-h-event:not(.fc-event-selected) .fc-event-resizer{bottom:0;top:0;width:var(--fc-event-resizer-thickness)}.fc-direction-ltr .fc-h-event:not(.fc-event-selected) .fc-event-resizer-start,.fc-direction-rtl .fc-h-event:not(.fc-event-selected) .fc-event-resizer-end{cursor:w-resize;left:calc(var(--fc-event-resizer-thickness)*-.5)}.fc-direction-ltr .fc-h-event:not(.fc-event-selected) .fc-event-resizer-end,.fc-direction-rtl .fc-h-event:not(.fc-event-selected) .fc-event-resizer-start{cursor:e-resize;right:calc(var(--fc-event-resizer-thickness)*-.5)}.fc-h-event.fc-event-selected .fc-event-resizer{margin-top:calc(var(--fc-event-resizer-dot-total-width)*-.5);top:50%}.fc-direction-ltr .fc-h-event.fc-event-selected .fc-event-resizer-start,.fc-direction-rtl .fc-h-event.fc-event-selected .fc-event-resizer-end{left:calc(var(--fc-event-resizer-dot-total-width)*-.5)}.fc-direction-ltr .fc-h-event.fc-event-selected .fc-event-resizer-end,.fc-direction-rtl .fc-h-event.fc-event-selected .fc-event-resizer-start{right:calc(var(--fc-event-resizer-dot-total-width)*-.5)}.fc .fc-popover{box-shadow:0 2px 6px rgba(0,0,0,.15);position:absolute;z-index:9999}.fc .fc-popover-header{align-items:center;display:flex;flex-direction:row;justify-content:space-between;padding:3px 4px}.fc .fc-popover-title{margin:0 2px}.fc .fc-popover-close{cursor:pointer;font-size:1.1em;opacity:.65}.fc-theme-standard .fc-popover{background:var(--fc-page-bg-color);border:1px solid var(--fc-border-color)}.fc-theme-standard .fc-popover-header{background:var(--fc-neutral-bg-color)}';
Or($1);
class Va {
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
function Ha(t) {
  t.parentNode && t.parentNode.removeChild(t);
}
function Le(t, e) {
  if (t.closest)
    return t.closest(e);
  if (!document.documentElement.contains(t))
    return null;
  do {
    if (x1(t, e))
      return t;
    t = t.parentElement || t.parentNode;
  } while (t !== null && t.nodeType === 1);
  return null;
}
function x1(t, e) {
  return (t.matches || t.matchesSelector || t.msMatchesSelector).call(t, e);
}
function P1(t, e) {
  let n = t instanceof HTMLElement ? [t] : t, a = [];
  for (let i = 0; i < n.length; i += 1) {
    let o = n[i].querySelectorAll(e);
    for (let r = 0; r < o.length; r += 1)
      a.push(o[r]);
  }
  return a;
}
const F1 = /(top|left|right|bottom|width|height)$/i;
function Wt(t, e) {
  for (let n in e)
    xr(t, n, e[n]);
}
function xr(t, e, n) {
  n == null ? t.style[e] = "" : typeof n == "number" && F1.test(e) ? t.style[e] = `${n}px` : t.style[e] = n;
}
function Pr(t) {
  var e, n;
  return (n = (e = t.composedPath) === null || e === void 0 ? void 0 : e.call(t)[0]) !== null && n !== void 0 ? n : t.target;
}
let Ui = 0;
function Vn() {
  return Ui += 1, "fc-dom-" + Ui;
}
function Hn(t) {
  t.preventDefault();
}
function B1(t, e) {
  return (n) => {
    let a = Le(n.target, t);
    a && e.call(a, n, a);
  };
}
function Fr(t, e, n, a) {
  let i = B1(n, a);
  return t.addEventListener(e, i), () => {
    t.removeEventListener(e, i);
  };
}
function z1(t, e, n, a) {
  let i;
  return Fr(t, "mouseover", e, (o, r) => {
    if (r !== i) {
      i = r, n(o, r);
      let s = (u) => {
        i = null, a(u, r), r.removeEventListener("mouseleave", s);
      };
      r.addEventListener("mouseleave", s);
    }
  });
}
const Wi = [
  "webkitTransitionEnd",
  "otransitionend",
  "oTransitionEnd",
  "msTransitionEnd",
  "transitionend"
];
function L1(t, e) {
  let n = (a) => {
    e(a), Wi.forEach((i) => {
      t.removeEventListener(i, n);
    });
  };
  Wi.forEach((a) => {
    t.addEventListener(a, n);
  });
}
function Br(t) {
  return Object.assign({ onClick: t }, zr(t));
}
function zr(t) {
  return {
    tabIndex: 0,
    onKeyDown(e) {
      (e.key === "Enter" || e.key === " ") && (t(e), e.preventDefault());
    }
  };
}
let Yi = 0;
function At() {
  return Yi += 1, String(Yi);
}
function ja() {
  document.body.classList.add("fc-not-allowed");
}
function Ua() {
  document.body.classList.remove("fc-not-allowed");
}
function V1(t) {
  t.style.userSelect = "none", t.style.webkitUserSelect = "none", t.addEventListener("selectstart", Hn);
}
function H1(t) {
  t.style.userSelect = "", t.style.webkitUserSelect = "", t.removeEventListener("selectstart", Hn);
}
function j1(t) {
  t.addEventListener("contextmenu", Hn);
}
function U1(t) {
  t.removeEventListener("contextmenu", Hn);
}
function W1(t) {
  let e = [], n = [], a, i;
  for (typeof t == "string" ? n = t.split(/\s*,\s*/) : typeof t == "function" ? n = [t] : Array.isArray(t) && (n = t), a = 0; a < n.length; a += 1)
    i = n[a], typeof i == "string" ? e.push(i.charAt(0) === "-" ? { field: i.substring(1), order: -1 } : { field: i, order: 1 }) : typeof i == "function" && e.push({ func: i });
  return e;
}
function Y1(t, e, n) {
  let a, i;
  for (a = 0; a < n.length; a += 1)
    if (i = G1(t, e, n[a]), i)
      return i;
  return 0;
}
function G1(t, e, n) {
  return n.func ? n.func(t, e) : q1(t[n.field], e[n.field]) * (n.order || 1);
}
function q1(t, e) {
  return !t && !e ? 0 : e == null ? -1 : t == null ? 1 : typeof t == "string" || typeof e == "string" ? String(t).localeCompare(String(e)) : t - e;
}
function aa(t, e) {
  let n = String(t);
  return "000".substr(0, e - n.length) + n;
}
function Yt(t, e, n) {
  return typeof t == "function" ? t(...e) : typeof t == "string" ? e.reduce((a, i, o) => a.replace("$" + o, i || ""), t) : n;
}
function K1(t, e) {
  return t - e;
}
function ia(t) {
  return t % 1 === 0;
}
function Q1(t) {
  let e = t.querySelector(".fc-scrollgrid-shrink-frame"), n = t.querySelector(".fc-scrollgrid-shrink-cushion");
  if (!e)
    throw new Error("needs fc-scrollgrid-shrink-frame className");
  if (!n)
    throw new Error("needs fc-scrollgrid-shrink-cushion className");
  return t.getBoundingClientRect().width - e.getBoundingClientRect().width + // the cell padding+border
  n.getBoundingClientRect().width;
}
const Z1 = /^(-?)(?:(\d+)\.)?(\d+):(\d\d)(?::(\d\d)(?:\.(\d\d\d))?)?/;
function ke(t, e) {
  return typeof t == "string" ? J1(t) : typeof t == "object" && t ? Gi(t) : typeof t == "number" ? Gi({ [e || "milliseconds"]: t }) : null;
}
function J1(t) {
  let e = Z1.exec(t);
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
function Gi(t) {
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
function X1(t, e) {
  return t.years === e.years && t.months === e.months && t.days === e.days && t.milliseconds === e.milliseconds;
}
function e_(t, e) {
  return {
    years: t.years - e.years,
    months: t.months - e.months,
    days: t.days - e.days,
    milliseconds: t.milliseconds - e.milliseconds
  };
}
function t_(t) {
  return $t(t) / 365;
}
function n_(t) {
  return $t(t) / 30;
}
function $t(t) {
  return Xt(t) / 864e5;
}
function Xt(t) {
  return t.years * (365 * 864e5) + t.months * (30 * 864e5) + t.days * 864e5 + t.milliseconds;
}
function Ca(t) {
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
const a_ = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"];
function qi(t, e) {
  let n = rt(t);
  return n[2] += e * 7, je(n);
}
function ze(t, e) {
  let n = rt(t);
  return n[2] += e, je(n);
}
function dt(t, e) {
  let n = rt(t);
  return n[6] += e, je(n);
}
function i_(t, e) {
  return Ht(t, e) / 7;
}
function Ht(t, e) {
  return (e.valueOf() - t.valueOf()) / (1e3 * 60 * 60 * 24);
}
function o_(t, e) {
  return (e.valueOf() - t.valueOf()) / (1e3 * 60 * 60);
}
function r_(t, e) {
  return (e.valueOf() - t.valueOf()) / (1e3 * 60);
}
function s_(t, e) {
  return (e.valueOf() - t.valueOf()) / 1e3;
}
function l_(t, e) {
  let n = Ne(t), a = Ne(e);
  return {
    years: 0,
    months: 0,
    days: Math.round(Ht(n, a)),
    milliseconds: e.valueOf() - a.valueOf() - (t.valueOf() - n.valueOf())
  };
}
function u_(t, e) {
  let n = Mn(t, e);
  return n !== null && n % 7 === 0 ? n / 7 : null;
}
function Mn(t, e) {
  return st(t) === st(e) ? Math.round(Ht(t, e)) : null;
}
function Ne(t) {
  return je([
    t.getUTCFullYear(),
    t.getUTCMonth(),
    t.getUTCDate()
  ]);
}
function c_(t) {
  return je([
    t.getUTCFullYear(),
    t.getUTCMonth(),
    t.getUTCDate(),
    t.getUTCHours()
  ]);
}
function d_(t) {
  return je([
    t.getUTCFullYear(),
    t.getUTCMonth(),
    t.getUTCDate(),
    t.getUTCHours(),
    t.getUTCMinutes()
  ]);
}
function f_(t) {
  return je([
    t.getUTCFullYear(),
    t.getUTCMonth(),
    t.getUTCDate(),
    t.getUTCHours(),
    t.getUTCMinutes(),
    t.getUTCSeconds()
  ]);
}
function m_(t, e, n) {
  let a = t.getUTCFullYear(), i = oa(t, a, e, n);
  if (i < 1)
    return oa(t, a - 1, e, n);
  let o = oa(t, a + 1, e, n);
  return o >= 1 ? Math.min(i, o) : i;
}
function oa(t, e, n, a) {
  let i = je([e, 0, 1 + h_(e, n, a)]), o = Ne(t), r = Math.round(Ht(i, o));
  return Math.floor(r / 7) + 1;
}
function h_(t, e, n) {
  let a = 7 + e - n;
  return -((7 + je([t, 0, a]).getUTCDay() - e) % 7) + a - 1;
}
function Ki(t) {
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
function Qi(t) {
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
function je(t) {
  return t.length === 1 && (t = t.concat([0])), new Date(Date.UTC(...t));
}
function Lr(t) {
  return !isNaN(t.valueOf());
}
function st(t) {
  return t.getUTCHours() * 1e3 * 60 * 60 + t.getUTCMinutes() * 1e3 * 60 + t.getUTCSeconds() * 1e3 + t.getUTCMilliseconds();
}
function v_(t, e, n = !1) {
  let a = t.toISOString();
  return a = a.replace(".000", ""), n && (a = a.replace("T00:00:00Z", "")), a.length > 10 && (e == null ? a = a.replace("Z", "") : e !== 0 && (a = a.replace("Z", Ya(e, !0)))), a;
}
function Wa(t) {
  return t.toISOString().replace(/T.*$/, "");
}
function p_(t) {
  return t.toISOString().match(/^\d{4}-\d{2}/)[0];
}
function Ya(t, e = !1) {
  let n = t < 0 ? "-" : "+", a = Math.abs(t), i = Math.floor(a / 60), o = Math.round(a % 60);
  return e ? `${n + aa(i, 2)}:${aa(o, 2)}` : `GMT${n}${i}${o ? `:${aa(o, 2)}` : ""}`;
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
function _n(t, e, n) {
  let a, i;
  return (o) => (a ? Qe(a, o) || (i = t.call(this, o)) : i = t.call(this, o), a = o, i);
}
const ra = {
  week: 3,
  separator: 9,
  omitZeroMinute: 9,
  meridiem: 9,
  omitCommas: 9
}, Nn = {
  timeZoneName: 7,
  era: 6,
  year: 5,
  month: 4,
  day: 2,
  weekday: 2,
  hour: 1,
  minute: 1,
  second: 1
}, cn = /\s*([ap])\.?m\.?/i, g_ = /,/g, y_ = /\s+/g, b_ = /\u200e/g, __ = /UTC|GMT/;
class C_ {
  constructor(e) {
    let n = {}, a = {}, i = 9;
    for (let o in e)
      o in ra ? (a[o] = e[o], ra[o] < 9 && (i = Math.min(ra[o], i))) : (n[o] = e[o], o in Nn && (i = Math.min(Nn[o], i)));
    this.standardDateProps = n, this.extendedSettings = a, this.smallestUnitNum = i, this.buildFormattingFunc = Ce(Zi);
  }
  format(e, n) {
    return this.buildFormattingFunc(this.standardDateProps, this.extendedSettings, n)(e);
  }
  formatRange(e, n, a, i) {
    let { standardDateProps: o, extendedSettings: r } = this, s = E_(e.marker, n.marker, a.calendarSystem);
    if (!s)
      return this.format(e, a);
    let u = s;
    u > 1 && // the two dates are different in a way that's larger scale than time
    (o.year === "numeric" || o.year === "2-digit") && (o.month === "numeric" || o.month === "2-digit") && (o.day === "numeric" || o.day === "2-digit") && (u = 1);
    let d = this.format(e, a), m = this.format(n, a);
    if (d === m)
      return d;
    let v = M_(o, u), p = Zi(v, r, a), h = p(e), y = p(n), g = N_(d, h, m, y), b = r.separator || i || a.defaultSeparator || "";
    return g ? g.before + h + b + y + g.after : d + b + m;
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
function Zi(t, e, n) {
  let a = Object.keys(t).length;
  return a === 1 && t.timeZoneName === "short" ? (i) => Ya(i.timeZoneOffset) : a === 0 && e.week ? (i) => T_(n.computeWeekNumber(i.marker), n.weekText, n.weekTextLong, n.locale, e.week) : w_(t, e, n);
}
function w_(t, e, n) {
  t = Object.assign({}, t), e = Object.assign({}, e), A_(t, e), t.timeZone = "UTC";
  let a = new Intl.DateTimeFormat(n.locale.codes, t), i;
  if (e.omitZeroMinute) {
    let o = Object.assign({}, t);
    delete o.minute, i = new Intl.DateTimeFormat(n.locale.codes, o);
  }
  return (o) => {
    let { marker: r } = o, s;
    i && !r.getUTCMinutes() ? s = i : s = a;
    let u = s.format(r);
    return k_(u, o, t, e, n);
  };
}
function A_(t, e) {
  t.timeZoneName && (t.hour || (t.hour = "2-digit"), t.minute || (t.minute = "2-digit")), t.timeZoneName === "long" && (t.timeZoneName = "short"), e.omitZeroMinute && (t.second || t.millisecond) && delete e.omitZeroMinute;
}
function k_(t, e, n, a, i) {
  return t = t.replace(b_, ""), n.timeZoneName === "short" && (t = S_(t, i.timeZone === "UTC" || e.timeZoneOffset == null ? "UTC" : (
    // important to normalize for IE, which does "GMT"
    Ya(e.timeZoneOffset)
  ))), a.omitCommas && (t = t.replace(g_, "").trim()), a.omitZeroMinute && (t = t.replace(":00", "")), a.meridiem === !1 ? t = t.replace(cn, "").trim() : a.meridiem === "narrow" ? t = t.replace(cn, (o, r) => r.toLocaleLowerCase()) : a.meridiem === "short" ? t = t.replace(cn, (o, r) => `${r.toLocaleLowerCase()}m`) : a.meridiem === "lowercase" && (t = t.replace(cn, (o) => o.toLocaleLowerCase())), t = t.replace(y_, " "), t = t.trim(), t;
}
function S_(t, e) {
  let n = !1;
  return t = t.replace(__, () => (n = !0, e)), n || (t += ` ${e}`), t;
}
function T_(t, e, n, a, i) {
  let o = [];
  return i === "long" ? o.push(n) : (i === "short" || i === "narrow") && o.push(e), (i === "long" || i === "short") && o.push(" "), o.push(a.simpleNumberFormat.format(t)), a.options.direction === "rtl" && o.reverse(), o.join("");
}
function E_(t, e, n) {
  return n.getMarkerYear(t) !== n.getMarkerYear(e) ? 5 : n.getMarkerMonth(t) !== n.getMarkerMonth(e) ? 4 : n.getMarkerDay(t) !== n.getMarkerDay(e) ? 2 : st(t) !== st(e) ? 1 : 0;
}
function M_(t, e) {
  let n = {};
  for (let a in t)
    (!(a in Nn) || // not a date part prop (like timeZone)
    Nn[a] <= e) && (n[a] = t[a]);
  return n;
}
function N_(t, e, n, a) {
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
function Ji(t, e) {
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
function Dn(t, e, n, a) {
  let i = Ji(t, n.calendarSystem), o = e ? Ji(e, n.calendarSystem) : null;
  return {
    date: i,
    start: i,
    end: o,
    timeZone: n.timeZone,
    localeCodes: n.locale.codes,
    defaultSeparator: a || n.defaultSeparator
  };
}
class D_ {
  constructor(e) {
    this.cmdStr = e;
  }
  format(e, n, a) {
    return n.cmdFormatter(this.cmdStr, Dn(e, null, n, a));
  }
  formatRange(e, n, a, i) {
    return a.cmdFormatter(this.cmdStr, Dn(e, n, a, i));
  }
}
class I_ {
  constructor(e) {
    this.func = e;
  }
  format(e, n, a) {
    return this.func(Dn(e, null, n, a));
  }
  formatRange(e, n, a, i) {
    return this.func(Dn(e, n, a, i));
  }
}
function Be(t) {
  return typeof t == "object" && t ? new C_(t) : typeof t == "string" ? new D_(t) : typeof t == "function" ? new I_(t) : null;
}
const Xi = {
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
  eventOrder: W1,
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
}, Gt = {
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
}, eo = {
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
}, to = {
  buttonText: G,
  buttonHints: G,
  views: G,
  plugins: G,
  initialEvents: G,
  events: G,
  eventSources: G
}, vt = {
  headerToolbar: pt,
  footerToolbar: pt,
  buttonText: pt,
  buttonHints: pt,
  buttonIcons: pt,
  dateIncrement: pt,
  plugins: dn,
  events: dn,
  eventSources: dn,
  resources: dn
};
function pt(t, e) {
  return typeof t == "object" && typeof e == "object" && t && e ? Qe(t, e) : t === e;
}
function dn(t, e) {
  return Array.isArray(t) && Array.isArray(e) ? ct(t, e) : t === e;
}
const O_ = {
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
function sa(t) {
  return qa(t, vt);
}
function Ga(t, e) {
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
const { hasOwnProperty: In } = Object.prototype;
function qa(t, e) {
  let n = {};
  if (e) {
    for (let a in e)
      if (e[a] === pt) {
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
        i.length && (n[a] = qa(i));
      }
  }
  for (let a = t.length - 1; a >= 0; a -= 1) {
    let i = t[a];
    for (let o in i)
      o in n || (n[o] = i[o]);
  }
  return n;
}
function Ct(t, e) {
  let n = {};
  for (let a in t)
    e(t[a], a) && (n[a] = t[a]);
  return n;
}
function kt(t, e) {
  let n = {};
  for (let a in t)
    n[a] = e(t[a], a);
  return n;
}
function Vr(t) {
  let e = {};
  for (let n of t)
    e[n] = !0;
  return e;
}
function Ka(t) {
  let e = [];
  for (let n in t)
    e.push(t[n]);
  return e;
}
function Qe(t, e) {
  if (t === e)
    return !0;
  for (let n in t)
    if (In.call(t, n) && !(n in e))
      return !1;
  for (let n in e)
    if (In.call(e, n) && t[n] !== e[n])
      return !1;
  return !0;
}
const R_ = /^on[A-Z]/;
function $_(t, e) {
  const n = x_(t, e);
  for (let a of n)
    if (!R_.test(a))
      return !1;
  return !0;
}
function x_(t, e) {
  let n = [];
  for (let a in t)
    In.call(t, a) && (a in e || n.push(a));
  for (let a in e)
    In.call(e, a) && t[a] !== e[a] && n.push(a);
  return n;
}
function la(t, e, n = {}) {
  if (t === e)
    return !0;
  for (let a in e)
    if (!(a in t && P_(t[a], e[a], n[a]))) return !1;
  for (let a in t)
    if (!(a in e))
      return !1;
  return !0;
}
function P_(t, e, n) {
  return t === e || n === !0 ? !0 : n ? n(t, e) : !1;
}
function F_(t, e = 0, n, a = 1) {
  let i = [];
  n == null && (n = Object.keys(t).length);
  for (let o = e; o < n; o += a) {
    let r = t[o];
    r !== void 0 && i.push(r);
  }
  return i;
}
let Hr = {};
function B_(t, e) {
  Hr[t] = e;
}
function z_(t) {
  return new Hr[t]();
}
class L_ {
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
    return je(e);
  }
  markerToArray(e) {
    return rt(e);
  }
}
B_("gregory", L_);
const V_ = /^\s*(\d{4})(-?(\d{2})(-?(\d{2})([T ](\d{2}):?(\d{2})(:?(\d{2})(\.(\d+))?)?(Z|(([-+])(\d{2})(:?(\d{2}))?))?)?)?)?$/;
function H_(t) {
  let e = V_.exec(t);
  if (e) {
    let n = new Date(Date.UTC(Number(e[1]), e[3] ? Number(e[3]) - 1 : 0, Number(e[5] || 1), Number(e[7] || 0), Number(e[8] || 0), Number(e[10] || 0), e[12] ? +`0.${e[12]}` * 1e3 : 0));
    if (Lr(n)) {
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
class j_ {
  constructor(e) {
    let n = this.timeZone = e.timeZone, a = n !== "local" && n !== "UTC";
    e.namedTimeZoneImpl && a && (this.namedTimeZoneImpl = new e.namedTimeZoneImpl(n)), this.canComputeOffset = !!(!a || this.namedTimeZoneImpl), this.calendarSystem = z_(e.calendarSystem), this.locale = e.locale, this.weekDow = e.locale.week.dow, this.weekDoy = e.locale.week.doy, e.weekNumberCalculation === "ISO" && (this.weekDow = 1, this.weekDoy = 4), typeof e.firstDay == "number" && (this.weekDow = e.firstDay), typeof e.weekNumberCalculation == "function" && (this.weekNumberFunc = e.weekNumberCalculation), this.weekText = e.weekText != null ? e.weekText : e.locale.options.weekText, this.weekTextLong = (e.weekTextLong != null ? e.weekTextLong : e.locale.options.weekTextLong) || this.weekText, this.cmdFormatter = e.cmdFormatter, this.defaultSeparator = e.defaultSeparator;
  }
  // Creating / Parsing
  createMarker(e) {
    let n = this.createMarkerMeta(e);
    return n === null ? null : n.marker;
  }
  createNowMarker() {
    return this.canComputeOffset ? this.timestampToMarker((/* @__PURE__ */ new Date()).valueOf()) : je(Ki(/* @__PURE__ */ new Date()));
  }
  createMarkerMeta(e) {
    if (typeof e == "string")
      return this.parse(e);
    let n = null;
    return typeof e == "number" ? n = this.timestampToMarker(e) : e instanceof Date ? (e = e.valueOf(), isNaN(e) || (n = this.timestampToMarker(e))) : Array.isArray(e) && (n = je(e)), n === null || !Lr(n) ? null : { marker: n, isTimeUnspecified: !1, forcedTzo: null };
  }
  parse(e) {
    let n = H_(e);
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
    return a !== null ? { unit: "year", value: a } : (a = this.diffWholeMonths(e, n), a !== null ? { unit: "month", value: a } : (a = u_(e, n), a !== null ? { unit: "week", value: a } : (a = Mn(e, n), a !== null ? { unit: "day", value: a } : (a = o_(e, n), ia(a) ? { unit: "hour", value: a } : (a = r_(e, n), ia(a) ? { unit: "minute", value: a } : (a = s_(e, n), ia(a) ? { unit: "second", value: a } : { unit: "millisecond", value: n.valueOf() - e.valueOf() }))))));
  }
  countDurationsBetween(e, n, a) {
    let i;
    return a.years && (i = this.diffWholeYears(e, n), i !== null) ? i / t_(a) : a.months && (i = this.diffWholeMonths(e, n), i !== null) ? i / n_(a) : a.days && (i = Mn(e, n), i !== null) ? i / $t(a) : (n.valueOf() - e.valueOf()) / Xt(a);
  }
  // Start-Of
  // these DON'T return zoned-dates. only UTC start-of dates
  startOf(e, n) {
    return n === "year" ? this.startOfYear(e) : n === "month" ? this.startOfMonth(e) : n === "week" ? this.startOfWeek(e) : n === "day" ? Ne(e) : n === "hour" ? c_(e) : n === "minute" ? d_(e) : n === "second" ? f_(e) : null;
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
    return this.weekNumberFunc ? this.weekNumberFunc(this.toDate(e)) : m_(e, this.weekDow, this.weekDoy);
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
    return n.omitTimeZoneOffset || (n.forcedTzo != null ? a = n.forcedTzo : a = this.offsetForMarker(e)), v_(e, a, n.omitTime);
  }
  // TimeZone
  timestampToMarker(e) {
    return this.timeZone === "local" ? je(Ki(new Date(e))) : this.timeZone === "UTC" || !this.namedTimeZoneImpl ? new Date(e) : je(this.namedTimeZoneImpl.timestampToArray(e));
  }
  offsetForMarker(e) {
    return this.timeZone === "local" ? -Qi(rt(e)).getTimezoneOffset() : this.timeZone === "UTC" ? 0 : this.namedTimeZoneImpl ? this.namedTimeZoneImpl.offsetForArray(rt(e)) : null;
  }
  // Conversion
  toDate(e, n) {
    return this.timeZone === "local" ? Qi(rt(e)) : this.timeZone === "UTC" ? new Date(e.valueOf()) : this.namedTimeZoneImpl ? new Date(e.valueOf() - this.namedTimeZoneImpl.offsetForArray(rt(e)) * 1e3 * 60) : new Date(e.valueOf() - (n || 0));
  }
}
class nn {
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
nn.prototype.classes = {};
nn.prototype.iconClasses = {};
nn.prototype.baseIconClass = "";
nn.prototype.iconOverridePrefix = "";
function On(t) {
  t();
  let e = fe.debounceRendering, n = [];
  function a(i) {
    n.push(i);
  }
  for (fe.debounceRendering = a, Jt(q(U_, {}), document.createElement("div")); n.length; )
    n.shift()();
  fe.debounceRendering = e;
}
class U_ extends We {
  render() {
    return q("div", {});
  }
  componentDidMount() {
    this.setState({});
  }
}
function jr(t) {
  let e = v1(t), n = e.Provider;
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
class W_ {
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
const St = jr({});
function Y_(t, e, n, a, i, o, r, s, u, d, m, v, p, h) {
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
    addResizeHandler(y) {
      m.on("_resize", y);
    },
    removeResizeHandler(y) {
      m.off("_resize", y);
    },
    createScrollResponder(y) {
      return new W_(y, m, ke(n.scrollTime), n.scrollTimeReset);
    },
    registerInteractiveComponent: p,
    unregisterInteractiveComponent: h
  };
}
class Tt extends We {
  // debug: boolean
  shouldComponentUpdate(e, n) {
    return !la(
      this.props,
      e,
      this.propEquality
      /*, this.debug */
    ) || !la(
      this.state,
      n,
      this.stateEquality
      /*, this.debug */
    );
  }
  // HACK for freakin' React StrictMode
  safeSetState(e) {
    la(this.state, Object.assign(Object.assign({}, this.state), e), this.stateEquality) || this.setState(e);
  }
}
Tt.addPropsEquality = G_;
Tt.addStateEquality = q_;
Tt.contextType = St;
Tt.prototype.propEquality = {};
Tt.prototype.stateEquality = {};
class Ie extends Tt {
}
Ie.contextType = St;
function G_(t) {
  let e = Object.create(this.prototype.propEquality);
  Object.assign(e, t), this.prototype.propEquality = e;
}
function q_(t) {
  let e = Object.create(this.prototype.stateEquality);
  Object.assign(e, t), this.prototype.stateEquality = e;
}
function Je(t, e) {
  typeof t == "function" ? t(e) : t && (t.current = e);
}
class Qa extends Ie {
  constructor() {
    super(...arguments), this.id = At(), this.queuedDomNodes = [], this.currentDomNodes = [], this.handleEl = (e) => {
      const { options: n } = this.context, { generatorName: a } = this.props;
      (!n.customRenderingReplaces || !wa(a, n)) && this.updateElRef(e);
    }, this.updateElRef = (e) => {
      this.props.elRef && Je(this.props.elRef, e);
    };
  }
  render() {
    const { props: e, context: n } = this, { options: a } = n, { customGenerator: i, defaultGenerator: o, renderProps: r } = e, s = Ur(e, [], this.handleEl);
    let u = !1, d, m = [], v;
    if (i != null) {
      const p = typeof i == "function" ? i(r, q) : i;
      if (p === !0)
        u = !0;
      else {
        const h = p && typeof p == "object";
        h && "html" in p ? s.dangerouslySetInnerHTML = { __html: p.html } : h && "domNodes" in p ? m = Array.prototype.slice.call(p.domNodes) : (h ? hr(p) : typeof p != "function") ? d = p : v = p;
      }
    } else
      u = !wa(e.generatorName, a);
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
      }, a), { elClasses: (a.elClasses || []).filter(K_) }));
    }
  }
  applyQueueudDomNodes() {
    const { queuedDomNodes: e, currentDomNodes: n } = this, a = this.base;
    if (!ct(e, n)) {
      n.forEach(Ha);
      for (let i of e)
        a.appendChild(i);
      this.currentDomNodes = e;
    }
  }
}
Qa.addPropsEquality({
  elClasses: ct,
  elStyle: Qe,
  elAttrs: $_,
  renderProps: Qe
});
function wa(t, e) {
  var n;
  return !!(e.handleCustomRendering && t && (!((n = e.customRenderingMetaMap) === null || n === void 0) && n[t]));
}
function Ur(t, e, n) {
  const a = Object.assign(Object.assign({}, t.elAttrs), { ref: n });
  return (t.elClasses || e) && (a.className = (t.elClasses || []).concat(e || []).concat(a.className || []).filter(Boolean).join(" ")), t.elStyle && (a.style = t.elStyle), a;
}
function K_(t) {
  return !!t;
}
const Wr = jr(0);
class at extends We {
  constructor() {
    super(...arguments), this.InnerContent = Q_.bind(void 0, this), this.handleEl = (e) => {
      this.el = e, this.props.elRef && (Je(this.props.elRef, e), e && this.didMountMisfire && this.componentDidMount());
    };
  }
  render() {
    const { props: e } = this, n = Z_(e.classNameGenerator, e.renderProps);
    if (e.children) {
      const a = Ur(e, n, this.handleEl), i = e.children(this.InnerContent, e.renderProps, a);
      return e.elTag ? q(e.elTag, a, i) : i;
    } else
      return q(Qa, Object.assign(Object.assign({}, e), { elRef: this.handleEl, elTag: e.elTag || "div", elClasses: (e.elClasses || []).concat(n), renderId: this.context }));
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
at.contextType = Wr;
function Q_(t, e) {
  const n = t.props;
  return q(Qa, Object.assign({ renderProps: n.renderProps, generatorName: n.generatorName, customGenerator: n.customGenerator, defaultGenerator: n.defaultGenerator, renderId: t.context }, e));
}
function Z_(t, e) {
  const n = typeof t == "function" ? t(e) : t || [];
  return typeof n == "string" ? [n] : n;
}
class no extends Ie {
  render() {
    let { props: e, context: n } = this, { options: a } = n, i = { view: n.viewApi };
    return q(at, { elRef: e.elRef, elTag: e.elTag || "div", elAttrs: e.elAttrs, elClasses: [
      ...Yr(e.viewSpec),
      ...e.elClasses || []
    ], elStyle: e.elStyle, renderProps: i, classNameGenerator: a.viewClassNames, generatorName: void 0, didMount: a.viewDidMount, willUnmount: a.viewWillUnmount }, () => e.children);
  }
}
function Yr(t) {
  return [
    `fc-${t.type}-view`,
    "fc-view"
  ];
}
function J_(t, e) {
  let n = null, a = null;
  return t.start && (n = e.createMarker(t.start)), t.end && (a = e.createMarker(t.end)), !n && !a || n && a && a < n ? null : { start: n, end: a };
}
function ao(t, e) {
  let n = [], { start: a } = e, i, o;
  for (t.sort(X_), i = 0; i < t.length; i += 1)
    o = t[i], o.start > a && n.push({ start: a, end: o.start }), o.end > a && (a = o.end);
  return a < e.end && n.push({ start: a, end: e.end }), n;
}
function X_(t, e) {
  return t.start.valueOf() - e.start.valueOf();
}
function Bt(t, e) {
  let { start: n, end: a } = t, i = null;
  return e.start !== null && (n === null ? n = e.start : n = new Date(Math.max(n.valueOf(), e.start.valueOf()))), e.end != null && (a === null ? a = e.end : a = new Date(Math.min(a.valueOf(), e.end.valueOf()))), (n === null || a === null || n < a) && (i = { start: n, end: a }), i;
}
function eC(t, e) {
  return (t.start === null ? null : t.start.valueOf()) === (e.start === null ? null : e.start.valueOf()) && (t.end === null ? null : t.end.valueOf()) === (e.end === null ? null : e.end.valueOf());
}
function Za(t, e) {
  return (t.end === null || e.start === null || t.end > e.start) && (t.start === null || e.end === null || t.start < e.end);
}
function jn(t, e) {
  return (t.start === null || e.start !== null && e.start >= t.start) && (t.end === null || e.end !== null && e.end <= t.end);
}
function lt(t, e) {
  return (t.start === null || e >= t.start) && (t.end === null || e < t.end);
}
function tC(t, e) {
  return e.start != null && t < e.start ? e.start : e.end != null && t >= e.end ? new Date(e.end.valueOf() - 1) : t;
}
function Gr(t) {
  let e = Math.floor(Ht(t.start, t.end)) || 1, n = Ne(t.start), a = ze(n, e);
  return { start: n, end: a };
}
function qr(t, e = ke(0)) {
  let n = null, a = null;
  if (t.end) {
    a = Ne(t.end);
    let i = t.end.valueOf() - a.valueOf();
    i && i >= Xt(e) && (a = ze(a, 1));
  }
  return t.start && (n = Ne(t.start), a && a <= n && (a = ze(n, 1))), { start: n, end: a };
}
function Ot(t, e, n, a) {
  return a === "year" ? ke(n.diffWholeYears(t, e), "year") : a === "month" ? ke(n.diffWholeMonths(t, e), "month") : l_(t, e);
}
class Kr {
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
    return o = this.buildValidRange(), o = this.trimHiddenDays(o), a && (e = tC(e, o)), r = this.buildCurrentRangeInfo(e, n), s = /^(year|month|week|day)$/.test(r.unit), u = this.buildRenderRange(this.trimHiddenDays(r.range), r.unit, s), u = this.trimHiddenDays(u), d = u, i.showNonCurrentDates || (d = Bt(d, r.range)), d = this.adjustActiveRange(d), d = Bt(d, o), m = Za(r.range, o), lt(u, e) || (e = u.start), {
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
    return a.duration ? (i = a.duration, o = a.durationUnit, r = this.buildRangeFromDuration(e, n, i, o)) : (s = this.props.dayCount) ? (o = "day", r = this.buildRangeFromDayCount(e, n, s)) : (r = this.buildCustomVisibleRange(e)) ? o = a.dateEnv.greatestWholeUnit(r.start, r.end).unit : (i = this.getFallbackDuration(), o = Ca(i).unit, r = this.buildRangeFromDuration(e, n, i, o)), { duration: i, unit: o, range: r };
  }
  getFallbackDuration() {
    return ke({ day: 1 });
  }
  // Returns a new activeRange to have time values (un-ambiguate)
  // slotMinTime or slotMaxTime causes the range to expand.
  adjustActiveRange(e) {
    let { dateEnv: n, usesMinMaxTime: a, slotMinTime: i, slotMaxTime: o } = this.props, { start: r, end: s } = e;
    return a && ($t(i) < 0 && (r = Ne(r), r = n.add(r, i)), $t(o) > 1 && (s = Ne(s), s = ze(s, -1), s = n.add(s, o))), { start: r, end: s };
  }
  // Builds the "current" range when it is specified as an explicit duration.
  // `unit` is the already-computed greatestDurationDenominator unit of duration.
  buildRangeFromDuration(e, n, a, i) {
    let { dateEnv: o, dateAlignment: r } = this.props, s, u, d;
    if (!r) {
      let { dateIncrement: v } = this.props;
      v && Xt(v) < Xt(a) ? r = Ca(v).unit : r = i;
    }
    $t(a) <= 1 && this.isHiddenDay(s) && (s = this.skipHiddenDays(s, n), s = Ne(s));
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
      let n = J_(e, this.props.dateEnv);
      return n && (n = qr(n)), n;
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
function Ja(t, e, n, a) {
  return {
    instanceId: At(),
    defId: t,
    range: e,
    forcedStartTzo: n ?? null,
    forcedEndTzo: a ?? null
  };
}
function nC(t, e, n, a) {
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
function wt(t, e, n) {
  let { dateEnv: a, pluginHooks: i, options: o } = n, { defs: r, instances: s } = t;
  s = Ct(s, (u) => !r[u.defId].recurringDef);
  for (let u in r) {
    let d = r[u];
    if (d.recurringDef) {
      let { duration: m } = d.recurringDef;
      m || (m = d.allDay ? o.defaultAllDayEventDuration : o.defaultTimedEventDuration);
      let v = aC(d, m, e, a, i.recurringTypes);
      for (let p of v) {
        let h = Ja(u, {
          start: p,
          end: a.add(p, m)
        });
        s[h.instanceId] = h;
      }
    }
  }
  return { defs: r, instances: s };
}
function aC(t, e, n, a, i) {
  let r = i[t.recurringDef.typeId].expand(t.recurringDef.typeData, {
    start: a.subtract(n.start, e),
    end: n.end
  }, a);
  return t.allDay && (r = r.map(Ne)), r;
}
const Cn = {
  id: String,
  groupId: String,
  title: String,
  url: String,
  interactive: Boolean
}, Qr = {
  start: G,
  end: G,
  date: G,
  allDay: Boolean
}, iC = Object.assign(Object.assign(Object.assign({}, Cn), Qr), { extendedProps: G });
function Zr(t, e, n, a, i = Xa(n), o, r) {
  let { refined: s, extra: u } = Jr(t, n, i), d = rC(e, n), m = nC(s, d, n.dateEnv, n.pluginHooks.recurringTypes);
  if (m) {
    let p = Aa(s, u, e ? e.sourceId : "", m.allDay, !!m.duration, n, o);
    return p.recurringDef = {
      typeId: m.typeId,
      typeData: m.typeData,
      duration: m.duration
    }, { def: p, instance: null };
  }
  let v = oC(s, d, n, a);
  if (v) {
    let p = Aa(s, u, e ? e.sourceId : "", v.allDay, v.hasEnd, n, o), h = Ja(p.defId, v.range, v.forcedStartTzo, v.forcedEndTzo);
    return r && p.publicId && r[p.publicId] && (h.instanceId = r[p.publicId]), { def: p, instance: h };
  }
  return null;
}
function Jr(t, e, n = Xa(e)) {
  return Ga(t, n);
}
function Xa(t) {
  return Object.assign(Object.assign(Object.assign({}, Rn), iC), t.pluginHooks.eventRefiners);
}
function Aa(t, e, n, a, i, o, r) {
  let s = {
    title: t.title || "",
    groupId: t.groupId || "",
    publicId: t.id || "",
    url: t.url || "",
    recurringDef: null,
    defId: (r && t.id ? r[t.id] : "") || At(),
    sourceId: n,
    allDay: a,
    hasEnd: i,
    interactive: t.interactive,
    ui: $n(t, o),
    extendedProps: Object.assign(Object.assign({}, t.extendedProps || {}), e)
  };
  for (let u of o.pluginHooks.eventDefMemberAdders)
    Object.assign(s, u(t));
  return Object.freeze(s.ui.classNames), Object.freeze(s.extendedProps), s;
}
function oC(t, e, n, a) {
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
function rC(t, e) {
  let n = null;
  return t && (n = t.defaultAllDay), n == null && (n = e.options.defaultAllDay), n;
}
function en(t, e, n, a, i, o) {
  let r = Ke(), s = Xa(n);
  for (let u of t) {
    let d = Zr(u, e, n, a, s, i, o);
    d && ka(d, r);
  }
  return r;
}
function ka(t, e = Ke()) {
  return e.defs[t.def.defId] = t.def, t.instance && (e.instances[t.instance.instanceId] = t.instance), e;
}
function ei(t, e) {
  let n = t.instances[e];
  if (n) {
    let a = t.defs[n.defId], i = Un(t, (o) => sC(a, o));
    return i.defs[a.defId] = a, i.instances[n.instanceId] = n, i;
  }
  return Ke();
}
function sC(t, e) {
  return !!(t.groupId && t.groupId === e.groupId);
}
function Ke() {
  return { defs: {}, instances: {} };
}
function ti(t, e) {
  return {
    defs: Object.assign(Object.assign({}, t.defs), e.defs),
    instances: Object.assign(Object.assign({}, t.instances), e.instances)
  };
}
function Un(t, e) {
  let n = Ct(t.defs, e), a = Ct(t.instances, (i) => n[i.defId]);
  return { defs: n, instances: a };
}
function lC(t, e) {
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
function uC(t, e) {
  return Array.isArray(t) ? en(t, null, e, !0) : typeof t == "object" && t ? en([t], null, e, !0) : t != null ? String(t) : null;
}
function io(t) {
  return Array.isArray(t) ? t : typeof t == "string" ? t.split(/\s+/) : [];
}
const Rn = {
  display: String,
  editable: Boolean,
  startEditable: Boolean,
  durationEditable: Boolean,
  constraint: G,
  overlap: G,
  allow: G,
  className: io,
  classNames: io,
  color: String,
  backgroundColor: String,
  borderColor: String,
  textColor: String
}, cC = {
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
function $n(t, e) {
  let n = uC(t.constraint, e);
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
function dC(t) {
  return t.reduce(fC, cC);
}
function fC(t, e) {
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
const mC = {
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
function Xr(t, e, n = es(e)) {
  let a;
  if (typeof t == "string" ? a = { url: t } : typeof t == "function" || Array.isArray(t) ? a = { events: t } : typeof t == "object" && t && (a = t), a) {
    let { refined: i, extra: o } = Ga(a, n), r = hC(i, e);
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
        sourceId: At(),
        sourceDefId: r.sourceDefId,
        meta: r.meta,
        ui: $n(i, e),
        extendedProps: o
      };
  }
  return null;
}
function es(t) {
  return Object.assign(Object.assign(Object.assign({}, Rn), mC), t.pluginHooks.eventSourceRefiners);
}
function hC(t, e) {
  let n = e.pluginHooks.eventSourceDefs;
  for (let a = n.length - 1; a >= 0; a -= 1) {
    let o = n[a].parseMeta(t);
    if (o)
      return { sourceDefId: a, meta: o };
  }
  return null;
}
function vC(t, e, n, a, i) {
  switch (e.type) {
    case "RECEIVE_EVENTS":
      return pC(t, n[e.sourceId], e.fetchId, e.fetchRange, e.rawEvents, i);
    case "RESET_RAW_EVENTS":
      return gC(t, n[e.sourceId], e.rawEvents, a.activeRange, i);
    case "ADD_EVENTS":
      return yC(
        t,
        e.eventStore,
        // new ones
        a ? a.activeRange : null,
        i
      );
    case "RESET_EVENTS":
      return e.eventStore;
    case "MERGE_EVENTS":
      return ti(t, e.eventStore);
    case "PREV":
    // TODO: how do we track all actions that affect dateProfile :(
    case "NEXT":
    case "CHANGE_DATE":
    case "CHANGE_VIEW_TYPE":
      return a ? wt(t, a.activeRange, i) : t;
    case "REMOVE_EVENTS":
      return lC(t, e.eventStore);
    case "REMOVE_EVENT_SOURCE":
      return ns(t, e.sourceId);
    case "REMOVE_ALL_EVENT_SOURCES":
      return Un(t, (o) => !o.sourceId);
    case "REMOVE_ALL_EVENTS":
      return Ke();
    default:
      return t;
  }
}
function pC(t, e, n, a, i, o) {
  if (e && // not already removed
  n === e.latestFetchId) {
    let r = en(ts(i, e, o), e, o);
    return a && (r = wt(r, a, o)), ti(ns(t, e.sourceId), r);
  }
  return t;
}
function gC(t, e, n, a, i) {
  const { defIdMap: o, instanceIdMap: r } = _C(t);
  let s = en(ts(n, e, i), e, i, !1, o, r);
  return wt(s, a, i);
}
function ts(t, e, n) {
  let a = n.options.eventDataTransform, i = e ? e.eventDataTransform : null;
  return i && (t = oo(t, i)), a && (t = oo(t, a)), t;
}
function oo(t, e) {
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
function yC(t, e, n, a) {
  return n && (e = wt(e, n, a)), ti(t, e);
}
function ro(t, e, n) {
  let { defs: a } = t, i = kt(t.instances, (o) => a[o.defId].allDay ? o : Object.assign(Object.assign({}, o), { range: {
    start: n.createMarker(e.toDate(o.range.start, o.forcedStartTzo)),
    end: n.createMarker(e.toDate(o.range.end, o.forcedEndTzo))
  }, forcedStartTzo: n.canComputeOffset ? null : o.forcedStartTzo, forcedEndTzo: n.canComputeOffset ? null : o.forcedEndTzo }));
  return { defs: a, instances: i };
}
function ns(t, e) {
  return Un(t, (n) => n.sourceId !== e);
}
function bC(t, e) {
  return {
    defs: t.defs,
    instances: Ct(t.instances, (n) => !e[n.instanceId])
  };
}
function _C(t) {
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
class Wn {
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
    CC(this.handlers, e, n);
  }
  off(e, n) {
    wC(this.handlers, e, n);
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
function CC(t, e, n) {
  (t[e] || (t[e] = [])).push(n);
}
function wC(t, e, n) {
  n ? t[e] && (t[e] = t[e].filter((a) => a !== n)) : delete t[e];
}
const AC = {
  startTime: "09:00",
  endTime: "17:00",
  daysOfWeek: [1, 2, 3, 4, 5],
  display: "inverse-background",
  classNames: "fc-non-business",
  groupId: "_businessHours"
  // so multiple defs get grouped
};
function kC(t, e) {
  return en(SC(t), null, e);
}
function SC(t) {
  let e;
  return t === !0 ? e = [{}] : Array.isArray(t) ? e = t.filter((n) => n.daysOfWeek) : typeof t == "object" && t ? e = [t] : e = [], e = e.map((n) => Object.assign(Object.assign({}, AC), n)), e;
}
function as(t, e, n) {
  n.emitter.trigger("select", Object.assign(Object.assign({}, ni(t, n)), { jsEvent: e ? e.origEvent : null, view: n.viewApi || n.calendarApi.view }));
}
function TC(t, e) {
  e.emitter.trigger("unselect", {
    jsEvent: t ? t.origEvent : null,
    view: e.viewApi || e.calendarApi.view
  });
}
function ni(t, e) {
  let n = {};
  for (let a of e.pluginHooks.dateSpanTransforms)
    Object.assign(n, a(t, e));
  return Object.assign(n, VC(t, e.dateEnv)), n;
}
function so(t, e, n) {
  let { dateEnv: a, options: i } = n, o = e;
  return t ? (o = Ne(o), o = a.add(o, i.defaultAllDayEventDuration)) : o = a.add(o, i.defaultTimedEventDuration), o;
}
function ai(t, e, n, a) {
  let i = xn(t.defs, e), o = Ke();
  for (let r in t.defs) {
    let s = t.defs[r];
    o.defs[r] = EC(s, i[r], n, a);
  }
  for (let r in t.instances) {
    let s = t.instances[r], u = o.defs[s.defId];
    o.instances[r] = MC(s, u, i[s.defId], n, a);
  }
  return o;
}
function EC(t, e, n, a) {
  let i = n.standardProps || {};
  i.hasEnd == null && e.durationEditable && (n.startDelta || n.endDelta) && (i.hasEnd = !0);
  let o = Object.assign(Object.assign(Object.assign({}, t), i), { ui: Object.assign(Object.assign({}, t.ui), i.ui) });
  n.extendedProps && (o.extendedProps = Object.assign(Object.assign({}, o.extendedProps), n.extendedProps));
  for (let r of a.pluginHooks.eventDefMutationAppliers)
    r(o, n, a);
  return !o.hasEnd && a.options.forceEventDuration && (o.hasEnd = !0), o;
}
function MC(t, e, n, a, i) {
  let { dateEnv: o } = i, r = a.standardProps && a.standardProps.allDay === !0, s = a.standardProps && a.standardProps.hasEnd === !1, u = Object.assign({}, t);
  return r && (u.range = Gr(u.range)), a.datesDelta && n.startEditable && (u.range = {
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
    end: so(e.allDay, u.range.start, i)
  }), e.allDay && (u.range = {
    start: Ne(u.range.start),
    end: Ne(u.range.end)
  }), u.range.end < u.range.start && (u.range.end = so(e.allDay, u.range.start, i)), u;
}
class It {
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
    if (e in Qr)
      console.warn("Could not set date-related prop 'name'. Use one of the date-related methods instead.");
    else if (e === "id")
      n = Cn[e](n), this.mutate({
        standardProps: { publicId: n }
        // hardcoded internal name
      });
    else if (e in Cn)
      n = Cn[e](n), this.mutate({
        standardProps: { [e]: n }
      });
    else if (e in Rn) {
      let a = Rn[e](n);
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
      let o = this._instance.range, r = Ot(o.start, i, a, n.granularity);
      n.maintainDuration ? this.mutate({ datesDelta: r }) : this.mutate({ startDelta: r });
    }
  }
  setEnd(e, n = {}) {
    let { dateEnv: a } = this._context, i;
    if (!(e != null && (i = a.createMarker(e), !i)) && this._instance)
      if (i) {
        let o = Ot(this._instance.range.end, i, a, n.granularity);
        this.mutate({ endDelta: o });
      } else
        this.mutate({ standardProps: { hasEnd: !1 } });
  }
  setDates(e, n, a = {}) {
    let { dateEnv: i } = this._context, o = { allDay: a.allDay }, r = i.createMarker(e), s;
    if (r && !(n != null && (s = i.createMarker(n), !s)) && this._instance) {
      let u = this._instance.range;
      a.allDay === !0 && (u = Gr(u));
      let d = Ot(u.start, r, i, a.granularity);
      if (s) {
        let m = Ot(u.end, s, i, a.granularity);
        X1(d, m) ? this.mutate({ datesDelta: d, standardProps: o }) : this.mutate({ startDelta: d, endDelta: m, standardProps: o });
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
      let a = this._def, i = this._context, { eventStore: o } = i.getCurrentData(), r = ei(o, n.instanceId);
      r = ai(r, {
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
        relatedEvents: _t(r, i, n),
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
    let e = this._context, n = is(this);
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
    return e ? new It(this._context, this._context.getCurrentData().eventSources[e]) : null;
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
function is(t) {
  let e = t._def, n = t._instance;
  return {
    defs: { [e.defId]: e },
    instances: n ? { [n.instanceId]: n } : {}
  };
}
function _t(t, e, n) {
  let { defs: a, instances: i } = t, o = [], r = n ? n.instanceId : "";
  for (let s in i) {
    let u = i[s], d = a[u.defId];
    u.instanceId !== r && o.push(new De(e, d, u));
  }
  return o;
}
function lo(t, e, n, a) {
  let i = {}, o = {}, r = {}, s = [], u = [], d = xn(t.defs, e);
  for (let m in t.defs) {
    let v = t.defs[m];
    d[v.defId].display === "inverse-background" && (v.groupId ? (i[v.groupId] = [], r[v.groupId] || (r[v.groupId] = v)) : o[m] = []);
  }
  for (let m in t.instances) {
    let v = t.instances[m], p = t.defs[v.defId], h = d[p.defId], y = v.range, g = !p.allDay && a ? qr(y, a) : y, b = Bt(g, n);
    b && (h.display === "inverse-background" ? p.groupId ? i[p.groupId].push(b) : o[v.defId].push(b) : h.display !== "none" && (h.display === "background" ? s : u).push({
      def: p,
      ui: h,
      instance: v,
      range: b,
      isStart: g.start && g.start.valueOf() === b.start.valueOf(),
      isEnd: g.end && g.end.valueOf() === b.end.valueOf()
    }));
  }
  for (let m in i) {
    let v = i[m], p = ao(v, n);
    for (let h of p) {
      let y = r[m], g = d[y.defId];
      s.push({
        def: y,
        ui: g,
        instance: null,
        range: h,
        isStart: !1,
        isEnd: !1
      });
    }
  }
  for (let m in o) {
    let v = o[m], p = ao(v, n);
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
function uo(t, e) {
  t.fcSeg = e;
}
function zt(t) {
  return t.fcSeg || t.parentNode.fcSeg || // for the harness
  null;
}
function xn(t, e) {
  return kt(t, (n) => os(n, e));
}
function os(t, e) {
  let n = [];
  return e[""] && n.push(e[""]), e[t.defId] && n.push(e[t.defId]), n.push(t.ui), dC(n);
}
function NC(t, e) {
  let n = t.map(DC);
  return n.sort((a, i) => Y1(a, i, e)), n.map((a) => a._seg);
}
function DC(t) {
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
function IC(t, e) {
  let { pluginHooks: n } = e, a = n.isDraggableTransformers, { def: i, ui: o } = t.eventRange, r = o.startEditable;
  for (let s of a)
    r = s(r, i, o, e);
  return r;
}
function OC(t, e) {
  return t.isStart && t.eventRange.ui.durationEditable && e.options.eventResizableFromStart;
}
function RC(t, e) {
  return t.isEnd && t.eventRange.ui.durationEditable;
}
function rs(t, e, n, a, i, o, r) {
  let { dateEnv: s, options: u } = n, { displayEventTime: d, displayEventEnd: m } = u, v = t.eventRange.def, p = t.eventRange.instance;
  d == null && (d = a !== !1), m == null && (m = i !== !1);
  let h = p.range.start, y = p.range.end, g = t.start || t.eventRange.range.start, b = t.end || t.eventRange.range.end, _ = Ne(h).valueOf() === Ne(g).valueOf(), C = Ne(dt(y, -1)).valueOf() === Ne(dt(b, -1)).valueOf();
  return d && !v.allDay && (_ || C) ? (g = _ ? h : g, b = C ? y : b, m && v.hasEnd ? s.formatRange(g, b, e, {
    forcedStartTzo: p.forcedStartTzo,
    forcedEndTzo: p.forcedEndTzo
  }) : s.format(g, e, {
    forcedTzo: p.forcedStartTzo
    // nooooo, same
  })) : "";
}
function qt(t, e, n) {
  let a = t.eventRange.range;
  return {
    isPast: a.end <= e.start,
    isFuture: a.start >= e.end,
    isToday: e && lt(e, a.start)
  };
}
function $C(t) {
  let e = ["fc-event"];
  return t.isMirror && e.push("fc-event-mirror"), t.isDraggable && e.push("fc-event-draggable"), (t.isStartResizable || t.isEndResizable) && e.push("fc-event-resizable"), t.isDragging && e.push("fc-event-dragging"), t.isResizing && e.push("fc-event-resizing"), t.isSelected && e.push("fc-event-selected"), t.isStart && e.push("fc-event-start"), t.isEnd && e.push("fc-event-end"), t.isPast && e.push("fc-event-past"), t.isToday && e.push("fc-event-today"), t.isFuture && e.push("fc-event-future"), e;
}
function xC(t) {
  return t.instance ? t.instance.instanceId : `${t.def.defId}:${t.range.start.toISOString()}`;
}
function ss(t, e) {
  let { def: n, instance: a } = t.eventRange, { url: i } = n;
  if (i)
    return { href: i };
  let { emitter: o, options: r } = e, { eventInteractive: s } = r;
  return s == null && (s = n.interactive, s == null && (s = !!o.hasHandlers("eventClick"))), s ? zr((u) => {
    o.trigger("eventClick", {
      el: u.target,
      event: new De(e, n, a),
      jsEvent: u,
      view: e.viewApi
    });
  }) : {};
}
const PC = {
  start: G,
  end: G,
  allDay: Boolean
};
function FC(t, e, n) {
  let a = BC(t, e), { range: i } = a;
  if (!i.start)
    return null;
  if (!i.end) {
    if (n == null)
      return null;
    i.end = e.add(i.start, n);
  }
  return a;
}
function BC(t, e) {
  let { refined: n, extra: a } = Ga(t, PC), i = n.start ? e.createMarkerMeta(n.start) : null, o = n.end ? e.createMarkerMeta(n.end) : null, { allDay: r } = n;
  return r == null && (r = i && i.isTimeUnspecified && (!o || o.isTimeUnspecified)), Object.assign({ range: {
    start: i ? i.marker : null,
    end: o ? o.marker : null
  }, allDay: r }, a);
}
function zC(t, e) {
  return eC(t.range, e.range) && t.allDay === e.allDay && LC(t, e);
}
function LC(t, e) {
  for (let n in e)
    if (n !== "range" && n !== "allDay" && t[n] !== e[n])
      return !1;
  for (let n in t)
    if (!(n in e))
      return !1;
  return !0;
}
function VC(t, e) {
  return Object.assign(Object.assign({}, us(t.range, e, t.allDay)), { allDay: t.allDay });
}
function ls(t, e, n) {
  return Object.assign(Object.assign({}, us(t, e, n)), { timeZone: e.timeZone });
}
function us(t, e, n) {
  return {
    start: e.toDate(t.start),
    end: e.toDate(t.end),
    startStr: e.formatIso(t.start, { omitTime: n }),
    endStr: e.formatIso(t.end, { omitTime: n })
  };
}
function HC(t, e, n) {
  let a = Jr({ editable: !1 }, n), i = Aa(
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
    ui: os(i, e),
    instance: Ja(i.defId, t.range),
    range: t.range,
    isStart: !0,
    isEnd: !0
  };
}
function jC(t, e, n) {
  let a = !1, i = function(s) {
    a || (a = !0, e(s));
  }, o = function(s) {
    a || (a = !0, n(s));
  }, r = t(i, o);
  r && typeof r.then == "function" && r.then(i, o);
}
class co extends Error {
  constructor(e, n) {
    super(e), this.response = n;
  }
}
function UC(t, e, n) {
  t = t.toUpperCase();
  const a = {
    method: t
  };
  return t === "GET" ? e += (e.indexOf("?") === -1 ? "?" : "&") + new URLSearchParams(n) : (a.body = new URLSearchParams(n), a.headers = {
    "Content-Type": "application/x-www-form-urlencoded"
  }), fetch(e, a).then((i) => {
    if (i.ok)
      return i.json().then((o) => [o, i], () => {
        throw new co("Failure parsing JSON", i);
      });
    throw new co("Request failed", i);
  });
}
let ua;
function cs() {
  return ua == null && (ua = WC()), ua;
}
function WC() {
  if (typeof document > "u")
    return !0;
  let t = document.createElement("div");
  t.style.position = "absolute", t.style.top = "0px", t.style.left = "0px", t.innerHTML = "<table><tr><td><div></div></td></tr></table>", t.querySelector("table").style.height = "100px", t.querySelector("div").style.height = "100%", document.body.appendChild(t);
  let n = t.querySelector("div").offsetHeight > 0;
  return document.body.removeChild(t), n;
}
class YC extends Ie {
  constructor() {
    super(...arguments), this.state = {
      forPrint: !1
    }, this.handleBeforePrint = () => {
      On(() => {
        this.setState({ forPrint: !0 });
      });
    }, this.handleAfterPrint = () => {
      On(() => {
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
    return cs() || r.push("fc-liquid-hack"), e.children(r, o, i, a);
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
class jt {
  constructor(e) {
    this.component = e.component, this.isHitComboAllowed = e.isHitComboAllowed || null;
  }
  destroy() {
  }
}
function GC(t, e) {
  return {
    component: t,
    el: e.el,
    useEventCenter: e.useEventCenter != null ? e.useEventCenter : !0,
    isHitComboAllowed: e.isHitComboAllowed || null
  };
}
function ii(t) {
  return {
    [t.component.uid]: t
  };
}
const Sa = {};
class Yn extends We {
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
      state: { nowDate: o, todayRange: qC(o) },
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
Yn.contextType = St;
function qC(t) {
  let e = Ne(t), n = ze(e, 1);
  return { start: e, end: n };
}
class KC {
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
    let i = this.getCurrentData(), o = FC(a, i.dateEnv, ke({ days: 1 }));
    o && (this.dispatch({ type: "SELECT_DATES", selection: o }), as(o, null, i));
  }
  unselect(e) {
    let n = this.getCurrentData();
    n.dateSelection && (this.dispatch({ type: "UNSELECT_DATES" }), TC(e, n));
  }
  // Public Events API
  // -----------------------------------------------------------------------------------------------------------------
  addEvent(e, n) {
    if (e instanceof De) {
      let r = e._def, s = e._instance;
      return this.getCurrentData().eventStore.defs[r.defId] || (this.dispatch({
        type: "ADD_EVENTS",
        eventStore: ka({ def: r, instance: s })
        // TODO: better util for two args?
      }), this.triggerEventAdd(e)), e;
    }
    let a = this.getCurrentData(), i;
    if (n instanceof It)
      i = n.internalEventSource;
    else if (typeof n == "boolean")
      n && ([i] = Ka(a.eventSources));
    else if (n != null) {
      let r = this.getEventSourceById(n);
      if (!r)
        return console.warn(`Could not find an event source with ID "${n}"`), null;
      i = r.internalEventSource;
    }
    let o = Zr(e, i, a, !1);
    if (o) {
      let r = new De(a, o.def, o.def.recurringDef ? null : o.instance);
      return this.dispatch({
        type: "ADD_EVENTS",
        eventStore: ka(o)
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
          eventStore: is(e)
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
    return _t(e.eventStore, e);
  }
  removeAllEvents() {
    this.dispatch({ type: "REMOVE_ALL_EVENTS" });
  }
  // Public Event Sources API
  // -----------------------------------------------------------------------------------------------------------------
  getEventSources() {
    let e = this.getCurrentData(), n = e.eventSources, a = [];
    for (let i in n)
      a.push(new It(e, n[i]));
    return a;
  }
  getEventSourceById(e) {
    let n = this.getCurrentData(), a = n.eventSources;
    e = String(e);
    for (let i in a)
      if (a[i].publicId === e)
        return new It(n, a[i]);
    return null;
  }
  addEventSource(e) {
    let n = this.getCurrentData();
    if (e instanceof It)
      return n.eventSources[e.internalEventSource.sourceId] || this.dispatch({
        type: "ADD_EVENT_SOURCES",
        sources: [e.internalEventSource]
      }), e;
    let a = Xr(e, n);
    return a ? (this.dispatch({ type: "ADD_EVENT_SOURCES", sources: [a] }), new It(n, a)) : null;
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
function QC(t, e) {
  return t.left >= e.left && t.left < e.right && t.top >= e.top && t.top < e.bottom;
}
function ds(t, e) {
  let n = {
    left: Math.max(t.left, e.left),
    right: Math.min(t.right, e.right),
    top: Math.max(t.top, e.top),
    bottom: Math.min(t.bottom, e.bottom)
  };
  return n.left < n.right && n.top < n.bottom ? n : !1;
}
function ZC(t, e) {
  return {
    left: Math.min(Math.max(t.left, e.left), e.right),
    top: Math.min(Math.max(t.top, e.top), e.bottom)
  };
}
function JC(t) {
  return {
    left: (t.left + t.right) / 2,
    top: (t.top + t.bottom) / 2
  };
}
function XC(t, e) {
  return {
    left: t.left - e.left,
    top: t.top - e.top
  };
}
function fs(t, e, n, a) {
  return {
    dow: t.getUTCDay(),
    isDisabled: !!(a && (!a.activeRange || !lt(a.activeRange, t))),
    isOther: !!(a && !lt(a.currentRange, t)),
    isToday: !!(e && lt(e, t)),
    isPast: !!(e && t < e.start),
    isFuture: !!(e && t >= e.end)
  };
}
function oi(t, e) {
  let n = [
    "fc-day",
    `fc-day-${a_[t.dow]}`
  ];
  return t.isDisabled ? n.push("fc-day-disabled") : (t.isToday && (n.push("fc-day-today"), n.push(e.getClass("today"))), t.isPast && n.push("fc-day-past"), t.isFuture && n.push("fc-day-future"), t.isOther && n.push("fc-day-other")), n;
}
const ew = Be({ year: "numeric", month: "long", day: "numeric" }), tw = Be({ week: "long" });
function Ta(t, e, n = "day", a = !0) {
  const { dateEnv: i, options: o, calendarApi: r } = t;
  let s = i.format(e, n === "week" ? tw : ew);
  if (o.navLinks) {
    let u = i.toDate(e);
    const d = (m) => {
      let v = n === "day" ? o.navLinkDayClick : n === "week" ? o.navLinkWeekClick : null;
      typeof v == "function" ? v.call(r, i.toDate(e), m) : (typeof v == "string" && (n = v), r.zoomTo(e, n));
    };
    return Object.assign({ title: Yt(o.navLinkHint, [s, u], s), "data-navlink": "" }, a ? Br(d) : { onClick: d });
  }
  return { "aria-label": s };
}
let ca = null;
function nw() {
  return ca === null && (ca = aw()), ca;
}
function aw() {
  let t = document.createElement("div");
  Wt(t, {
    position: "absolute",
    top: -1e3,
    left: 0,
    border: 0,
    padding: 0,
    overflow: "scroll",
    direction: "rtl"
  }), t.innerHTML = "<div></div>", document.body.appendChild(t);
  let n = t.firstChild.getBoundingClientRect().left > t.getBoundingClientRect().left;
  return Ha(t), n;
}
let da;
function iw() {
  return da || (da = ow()), da;
}
function ow() {
  let t = document.createElement("div");
  t.style.overflow = "scroll", t.style.position = "absolute", t.style.top = "-9999px", t.style.left = "-9999px", document.body.appendChild(t);
  let e = ms(t);
  return document.body.removeChild(t), e;
}
function ms(t) {
  return {
    x: t.offsetHeight - t.clientHeight,
    y: t.offsetWidth - t.clientWidth
  };
}
function rw(t, e = !1) {
  let n = window.getComputedStyle(t), a = parseInt(n.borderLeftWidth, 10) || 0, i = parseInt(n.borderRightWidth, 10) || 0, o = parseInt(n.borderTopWidth, 10) || 0, r = parseInt(n.borderBottomWidth, 10) || 0, s = ms(t), u = s.y - a - i, d = s.x - o - r, m = {
    borderLeft: a,
    borderRight: i,
    borderTop: o,
    borderBottom: r,
    scrollbarBottom: d,
    scrollbarLeft: 0,
    scrollbarRight: 0
  };
  return nw() && n.direction === "rtl" ? m.scrollbarLeft = u : m.scrollbarRight = u, e && (m.paddingLeft = parseInt(n.paddingLeft, 10) || 0, m.paddingRight = parseInt(n.paddingRight, 10) || 0, m.paddingTop = parseInt(n.paddingTop, 10) || 0, m.paddingBottom = parseInt(n.paddingBottom, 10) || 0), m;
}
function sw(t, e = !1, n) {
  let a = ri(t), i = rw(t, e), o = {
    left: a.left + i.borderLeft + i.scrollbarLeft,
    right: a.right - i.borderRight - i.scrollbarRight,
    top: a.top + i.borderTop,
    bottom: a.bottom - i.borderBottom - i.scrollbarBottom
  };
  return e && (o.left += i.paddingLeft, o.right -= i.paddingRight, o.top += i.paddingTop, o.bottom -= i.paddingBottom), o;
}
function ri(t) {
  let e = t.getBoundingClientRect();
  return {
    left: e.left + window.scrollX,
    top: e.top + window.scrollY,
    right: e.right + window.scrollX,
    bottom: e.bottom + window.scrollY
  };
}
function lw(t) {
  let e = hs(t), n = t.getBoundingClientRect();
  for (let a of e) {
    let i = ds(n, a.getBoundingClientRect());
    if (i)
      n = i;
    else
      return null;
  }
  return n;
}
function hs(t) {
  let e = [];
  for (; t instanceof HTMLElement; ) {
    let n = window.getComputedStyle(t);
    if (n.position === "fixed")
      break;
    /(auto|scroll)/.test(n.overflow + n.overflowY + n.overflowX) && e.push(t), t = t.parentNode;
  }
  return e;
}
class Pn {
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
    return fn(this.tops || [], e.tops || []) && fn(this.bottoms || [], e.bottoms || []) && fn(this.lefts || [], e.lefts || []) && fn(this.rights || [], e.rights || []);
  }
}
function fn(t, e) {
  const n = t.length;
  if (n !== e.length)
    return !1;
  for (let a = 0; a < n; a++)
    if (Math.round(t[a]) !== Math.round(e[a]))
      return !1;
  return !0;
}
class si {
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
class uw extends si {
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
class cw extends si {
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
class Et extends Ie {
  constructor() {
    super(...arguments), this.uid = At();
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
class dw {
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
      const i = Object.assign(Object.assign({}, n), { span: vs(n.span, e.touchingEntry.span) });
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
    n.lateral === -1 ? (fa(i, n.level, n.levelCoord), fa(a, n.level, [e])) : fa(a[n.level], n.lateral, e), this.stackCnts[Kt(e)] = n.stackCnt;
  }
  /*
  does not care about limits
  */
  findInsertion(e) {
    let { levelCoords: n, entriesByLevel: a, strictOrder: i, stackCnts: o } = this, r = n.length, s = 0, u = -1, d = -1, m = null, v = 0;
    for (let y = 0; y < r; y += 1) {
      const g = n[y];
      if (!i && g >= s + this.getEntryThickness(e))
        break;
      let b = a[y], _, C = mo(b, e.span.start, fo), k = C[0] + C[1];
      for (
        ;
        // loop through entries that horizontally intersect
        (_ = b[k]) && // but not past the whole entry list
        _.span.start < e.span.end;
      ) {
        let E = g + this.getEntryThickness(_);
        E > s && (s = E, m = _, u = y, d = k), E === s && (v = Math.max(v, o[Kt(_)] + 1)), k += 1;
      }
    }
    let p = 0;
    if (m)
      for (p = u + 1; p < r && n[p] < s; )
        p += 1;
    let h = -1;
    return p < r && n[p] === s && (h = mo(a[p], e.span.end, fo)[0]), {
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
function fo(t) {
  return t.span.end;
}
function Kt(t) {
  return t.index + ":" + t.span.start;
}
function vs(t, e) {
  let n = Math.max(t.start, e.start), a = Math.min(t.end, e.end);
  return n < a ? { start: n, end: a } : null;
}
function fa(t, e, n) {
  t.splice(e, 0, n);
}
function mo(t, e, n) {
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
class fw {
  constructor(e, n) {
    this.emitter = new Wn();
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
const li = {};
function mw(t, e) {
  return !t || e > 10 ? Be({ weekday: "short" }) : e > 1 ? Be({ weekday: "short", month: "numeric", day: "numeric", omitCommas: !0 }) : Be({ weekday: "long" });
}
const ps = "fc-col-header-cell";
function gs(t) {
  return t.text;
}
class hw extends Ie {
  render() {
    let { dateEnv: e, options: n, theme: a, viewApi: i } = this.context, { props: o } = this, { date: r, dateProfile: s } = o, u = fs(r, o.todayRange, null, s), d = [ps].concat(oi(u, a)), m = e.format(r, o.dayHeaderFormat), v = !u.isDisabled && o.colCnt > 1 ? Ta(this.context, r) : {}, p = e.toDate(r);
    e.namedTimeZoneImpl && (p = dt(p, 36e5));
    let h = Object.assign(Object.assign(Object.assign({ date: p, view: i }, o.extraRenderProps), { text: m }), u);
    return q(at, { elTag: "th", elClasses: d, elAttrs: Object.assign({ role: "columnheader", colSpan: o.colSpan, "data-date": u.isDisabled ? void 0 : Wa(r) }, o.extraDataAttrs), renderProps: h, generatorName: "dayHeaderContent", customGenerator: n.dayHeaderContent, defaultGenerator: gs, classNameGenerator: n.dayHeaderClassNames, didMount: n.dayHeaderDidMount, willUnmount: n.dayHeaderWillUnmount }, (y) => q("div", { className: "fc-scrollgrid-sync-inner" }, !u.isDisabled && q(y, { elTag: "a", elAttrs: v, elClasses: [
      "fc-col-header-cell-cushion",
      o.isSticky && "fc-sticky"
    ] })));
  }
}
const vw = Be({ weekday: "long" });
class pw extends Ie {
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
      ps,
      ...oi(s, a),
      ...e.extraClassNames || []
    ], elAttrs: Object.assign({ role: "columnheader", colSpan: e.colSpan }, e.extraDataAttrs), renderProps: d, generatorName: "dayHeaderContent", customGenerator: o.dayHeaderContent, defaultGenerator: gs, classNameGenerator: o.dayHeaderClassNames, didMount: o.dayHeaderDidMount, willUnmount: o.dayHeaderWillUnmount }, (m) => q(
      "div",
      { className: "fc-scrollgrid-sync-inner" },
      q(m, { elTag: "a", elClasses: [
        "fc-col-header-cell-cushion",
        e.isSticky && "fc-sticky"
      ], elAttrs: {
        "aria-label": n.format(r, vw)
      } })
    ));
  }
}
class gw extends Ie {
  constructor() {
    super(...arguments), this.createDayHeaderFormatter = Ce(yw);
  }
  render() {
    let { context: e } = this, { dates: n, dateProfile: a, datesRepDistinctDays: i, renderIntro: o } = this.props, r = this.createDayHeaderFormatter(e.options.dayHeaderFormat, i, n.length);
    return q(Yn, { unit: "day" }, (s, u) => q(
      "tr",
      { role: "row" },
      o && o("day"),
      n.map((d) => i ? q(hw, { key: d.toISOString(), date: d, dateProfile: a, todayRange: u, colCnt: n.length, dayHeaderFormat: r }) : q(pw, { key: d.getUTCDay(), dow: d.getUTCDay(), dayHeaderFormat: r }))
    ));
  }
}
function yw(t, e, n) {
  return t || mw(e, n);
}
class bw {
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
    let { indices: n } = this, a = Math.floor(Ht(this.dates[0], e));
    return a < 0 ? n[0] - 1 : a >= n.length ? n[n.length - 1] + 1 : n[a];
  }
}
class _w {
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
class Cw {
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
    return e ? this._sliceEventStore(wt(e, mn(n, !!a), i), {}, n, a, ...o).bg : [];
  }
  _sliceEventStore(e, n, a, i, ...o) {
    if (e) {
      let r = lo(e, n, mn(a, !!i), i);
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
    let r = lo(e.mutatedEvents, n, mn(a, !!i), i);
    return {
      segs: this.sliceEventRanges(r.fg, o),
      affectedInstances: e.affectedEvents.instances,
      isEvent: e.isEvent
    };
  }
  _sliceDateSpan(e, n, a, i, o, ...r) {
    if (!e)
      return [];
    let s = mn(n, !!a), u = Bt(e.range, s);
    if (u) {
      e = Object.assign(Object.assign({}, e), { range: u });
      let d = HC(e, i, o), m = this.sliceRange(e.range, ...r);
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
function mn(t, e) {
  let n = t.activeRange;
  return e ? n : {
    start: dt(n.start, t.slotMinTime.milliseconds),
    end: dt(n.end, t.slotMaxTime.milliseconds - 864e5)
    // 864e5 = ms in a day
  };
}
function ys(t, e, n) {
  let { instances: a } = t.mutatedEvents;
  for (let i in a)
    if (!jn(e.validRange, a[i].range))
      return !1;
  return bs({ eventDrag: t }, n);
}
function ww(t, e, n) {
  return jn(e.validRange, t.range) ? bs({ dateSelection: t }, n) : !1;
}
function bs(t, e) {
  let n = e.getCurrentData(), a = Object.assign({ businessHours: n.businessHours, dateSelection: "", eventStore: n.eventStore, eventUiBases: n.eventUiBases, eventSelection: "", eventDrag: null, eventResize: null }, t);
  return (e.pluginHooks.isPropsValid || Aw)(a, e);
}
function Aw(t, e, n = {}, a) {
  return !(t.eventDrag && !kw(t, e, n, a) || t.dateSelection && !Sw(t, e, n, a));
}
function kw(t, e, n, a) {
  let i = e.getCurrentData(), o = t.eventDrag, r = o.mutatedEvents, s = r.defs, u = r.instances, d = xn(s, o.isEvent ? t.eventUiBases : { "": i.selectionConfig });
  a && (d = kt(d, a));
  let m = bC(t.eventStore, o.affectedEvents.instances), v = m.defs, p = m.instances, h = xn(v, t.eventUiBases);
  for (let y in u) {
    let g = u[y], b = g.range, _ = d[g.defId], C = s[g.defId];
    if (!_s(_.constraints, b, m, t.businessHours, e))
      return !1;
    let { eventOverlap: k } = e.options, E = typeof k == "function" ? k : null;
    for (let x in p) {
      let I = p[x];
      if (Za(b, I.range) && (h[I.defId].overlap === !1 && o.isEvent || _.overlap === !1 || E && !E(
        new De(e, v[I.defId], I),
        // still event
        new De(e, C, g)
      )))
        return !1;
    }
    let D = i.eventStore;
    for (let x of _.allows) {
      let I = Object.assign(Object.assign({}, n), { range: g.range, allDay: C.allDay }), V = D.defs[C.defId], j = D.instances[y], R;
      if (V ? R = new De(e, V, j) : R = new De(e, C), !x(ni(I, e), R))
        return !1;
    }
  }
  return !0;
}
function Sw(t, e, n, a) {
  let i = t.eventStore, o = i.defs, r = i.instances, s = t.dateSelection, u = s.range, { selectionConfig: d } = e.getCurrentData();
  if (a && (d = a(d)), !_s(d.constraints, u, i, t.businessHours, e))
    return !1;
  let { selectOverlap: m } = e.options, v = typeof m == "function" ? m : null;
  for (let p in r) {
    let h = r[p];
    if (Za(u, h.range) && (d.overlap === !1 || v && !v(new De(e, o[h.defId], h), null)))
      return !1;
  }
  for (let p of d.allows) {
    let h = Object.assign(Object.assign({}, n), s);
    if (!p(ni(h, e), null))
      return !1;
  }
  return !0;
}
function _s(t, e, n, a, i) {
  for (let o of t)
    if (!Ew(Tw(o, e, n, a, i), e))
      return !1;
  return !0;
}
function Tw(t, e, n, a, i) {
  return t === "businessHours" ? ma(wt(a, e, i)) : typeof t == "string" ? ma(Un(n, (o) => o.groupId === t)) : typeof t == "object" && t ? ma(wt(t, e, i)) : [];
}
function ma(t) {
  let { instances: e } = t, n = [];
  for (let a in e)
    n.push(e[a].range);
  return n;
}
function Ew(t, e) {
  for (let n of t)
    if (jn(n, e))
      return !0;
  return !1;
}
const hn = /^(visible|hidden)$/;
class Mw extends Ie {
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
    if (hn.test(this.props.overflowX))
      return !1;
    let { el: e } = this, n = this.el.getBoundingClientRect().width - this.getYScrollbarWidth(), { children: a } = e;
    for (let i = 0; i < a.length; i += 1)
      if (a[i].getBoundingClientRect().width > n)
        return !0;
    return !1;
  }
  needsYScrolling() {
    if (hn.test(this.props.overflowY))
      return !1;
    let { el: e } = this, n = this.el.getBoundingClientRect().height - this.getXScrollbarWidth(), { children: a } = e;
    for (let i = 0; i < a.length; i += 1)
      if (a[i].getBoundingClientRect().height > n)
        return !0;
    return !1;
  }
  getXScrollbarWidth() {
    return hn.test(this.props.overflowX) ? 0 : this.el.offsetHeight - this.el.clientHeight;
  }
  getYScrollbarWidth() {
    return hn.test(this.props.overflowY) ? 0 : this.el.offsetWidth - this.el.clientWidth;
  }
}
class yt {
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
    return F_(this.currentMap, e, n, a);
  }
  getAll() {
    return Ka(this.currentMap);
  }
}
function Nw(t) {
  let e = P1(t, ".fc-scrollgrid-shrink"), n = 0;
  for (let a of e)
    n = Math.max(n, Q1(a));
  return Math.ceil(n);
}
function Cs(t, e) {
  return t.liquid && e.liquid;
}
function Dw(t, e) {
  return e.maxHeight != null || // if its possible for the height to max out, we might need scrollbars
  Cs(t, e);
}
function Iw(t, e, n, a) {
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
function Ow(t, e) {
  return ct(t, e, Qe);
}
function Rw(t, e) {
  let n = [];
  for (let a of t) {
    let i = a.span || 1;
    for (let o = 0; o < i; o += 1)
      n.push(q("col", { style: {
        width: a.width === "shrink" ? $w(e) : a.width || "",
        minWidth: a.minWidth || ""
      } }));
  }
  return q("colgroup", {}, ...n);
}
function $w(t) {
  return t ?? 4;
}
function xw(t) {
  for (let e of t)
    if (e.width === "shrink")
      return !0;
  return !1;
}
function Pw(t, e) {
  let n = [
    "fc-scrollgrid",
    e.theme.getClass("table")
  ];
  return t && n.push("fc-scrollgrid-liquid"), n;
}
function Fw(t, e) {
  let n = [
    "fc-scrollgrid-section",
    `fc-scrollgrid-section-${t.type}`,
    t.className
    // used?
  ];
  return e && t.liquid && t.maxHeight == null && n.push("fc-scrollgrid-section-liquid"), t.isSticky && n.push("fc-scrollgrid-section-sticky"), n;
}
function Bw(t) {
  return q("div", { className: "fc-scrollgrid-sticky-shim", style: {
    width: t.clientWidth,
    minWidth: t.tableMinWidth
  } });
}
function ho(t) {
  let { stickyHeaderDates: e } = t;
  return (e == null || e === "auto") && (e = t.height === "auto" || t.viewHeight === "auto"), e;
}
function zw(t) {
  let { stickyFooterScrollbar: e } = t;
  return (e == null || e === "auto") && (e = t.height === "auto" || t.viewHeight === "auto"), e;
}
class ws extends Ie {
  constructor() {
    super(...arguments), this.processCols = Ce((e) => e, Ow), this.renderMicroColGroup = Ce(Rw), this.scrollerRefs = new yt(), this.scrollerElRefs = new yt(this._handleScrollerEl.bind(this)), this.state = {
      shrinkWidth: null,
      forceYScrollbars: !1,
      scrollerClientWidths: {},
      scrollerClientHeights: {}
    }, this.handleSizing = () => {
      this.safeSetState(Object.assign({ shrinkWidth: this.computeShrinkWidth() }, this.computeScrollerDims()));
    };
  }
  render() {
    let { props: e, state: n, context: a } = this, i = e.sections || [], o = this.processCols(e.cols), r = this.renderMicroColGroup(o, n.shrinkWidth), s = Pw(e.liquid, a);
    e.collapsibleWidth && s.push("fc-scrollgrid-collapsible");
    let u = i.length, d = 0, m, v = [], p = [], h = [];
    for (; d < u && (m = i[d]).type === "header"; )
      v.push(this.renderSection(m, r, !0)), d += 1;
    for (; d < u && (m = i[d]).type === "body"; )
      p.push(this.renderSection(m, r, !1)), d += 1;
    for (; d < u && (m = i[d]).type === "footer"; )
      h.push(this.renderSection(m, r, !0)), d += 1;
    let y = !cs();
    const g = { role: "rowgroup" };
    return q("table", {
      role: "grid",
      className: s.join(" "),
      style: { height: e.height }
    }, !!(!y && v.length) && q("thead", g, ...v), !!(!y && p.length) && q("tbody", g, ...p), !!(!y && h.length) && q("tfoot", g, ...h), y && q("tbody", g, ...v, ...p, ...h));
  }
  renderSection(e, n, a) {
    return "outerContent" in e ? q(Re, { key: e.key }, e.outerContent) : q("tr", { key: e.key, role: "presentation", className: Fw(e, this.props.liquid).join(" ") }, this.renderChunkTd(e, n, e.chunk, a));
  }
  renderChunkTd(e, n, a, i) {
    if ("outerContent" in a)
      return a.outerContent;
    let { props: o } = this, { forceYScrollbars: r, scrollerClientWidths: s, scrollerClientHeights: u } = this.state, d = Dw(o, e), m = Cs(o, e), v = o.liquid ? r ? "scroll" : d ? "auto" : "hidden" : "visible", p = e.key, h = Iw(e, a, {
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
      q(Mw, { ref: this.scrollerRefs.createRef(p), elRef: this.scrollerElRefs.createRef(p), overflowY: v, overflowX: o.liquid ? "hidden" : "visible", maxHeight: e.maxHeight, liquid: m, liquidIsAbsolute: !0 }, h)
    ));
  }
  _handleScrollerEl(e, n) {
    let a = Lw(this.props.sections, n);
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
    return xw(this.props.cols) ? Nw(this.scrollerElRefs.getAll()) : 0;
  }
  computeScrollerDims() {
    let e = iw(), { scrollerRefs: n, scrollerElRefs: a } = this, i = !1, o = {}, r = {};
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
ws.addStateEquality({
  scrollerClientWidths: Qe,
  scrollerClientHeights: Qe
});
function Lw(t, e) {
  for (let n of t)
    if (n.key === e)
      return n;
  return null;
}
class ui extends Ie {
  constructor() {
    super(...arguments), this.buildPublicEvent = Ce((e, n, a) => new De(e, n, a)), this.handleEl = (e) => {
      this.el = e, Je(this.props.elRef, e), e && uo(e, this.props.seg);
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
      isDraggable: !e.disableDragging && IC(i, n),
      isStartResizable: !e.disableResizing && OC(i, n),
      isEndResizable: !e.disableResizing && RC(i),
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
      ...$C(s),
      ...i.eventRange.ui.classNames,
      ...e.elClasses || []
    ], elStyle: e.elStyle, renderProps: s, generatorName: "eventContent", customGenerator: a.eventContent, defaultGenerator: e.defaultGenerator, classNameGenerator: a.eventClassNames, didMount: a.eventDidMount, willUnmount: a.eventWillUnmount }, e.children);
  }
  componentDidUpdate(e) {
    this.el && this.props.seg !== e.seg && uo(this.el, this.props.seg);
  }
}
class As extends Ie {
  render() {
    let { props: e, context: n } = this, { options: a } = n, { seg: i } = e, { ui: o } = i.eventRange, r = a.eventTimeFormat || e.defaultTimeFormat, s = rs(i, r, n, e.defaultDisplayEventTime, e.defaultDisplayEventEnd);
    return q(ui, Object.assign({}, e, { elTag: "a", elStyle: {
      borderColor: o.borderColor,
      backgroundColor: o.backgroundColor
    }, elAttrs: ss(i, n), defaultGenerator: Vw, timeText: s }), (u, d) => q(
      Re,
      null,
      q(u, { elTag: "div", elClasses: ["fc-event-main"], elStyle: { color: d.textColor } }),
      !!d.isStartResizable && q("div", { className: "fc-event-resizer fc-event-resizer-start" }),
      !!d.isEndResizable && q("div", { className: "fc-event-resizer fc-event-resizer-end" })
    ));
  }
}
As.addPropsEquality({
  seg: Qe
});
function Vw(t) {
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
const Hw = Be({ day: "numeric" });
class ks extends Ie {
  constructor() {
    super(...arguments), this.refineRenderProps = _n(jw);
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
    return q(at, { elRef: e.elRef, elTag: e.elTag, elAttrs: Object.assign(Object.assign({}, e.elAttrs), i.isDisabled ? {} : { "data-date": Wa(e.date) }), elClasses: [
      ...oi(i, n.theme),
      ...e.elClasses || []
    ], elStyle: e.elStyle, renderProps: i, generatorName: "dayCellContent", customGenerator: a.dayCellContent, defaultGenerator: e.defaultGenerator, classNameGenerator: (
      // don't use custom classNames if disabled
      i.isDisabled ? void 0 : a.dayCellClassNames
    ), didMount: a.dayCellDidMount, willUnmount: a.dayCellWillUnmount }, e.children);
  }
}
function Ss(t) {
  return !!(t.dayCellContent || wa("dayCellContent", t));
}
function jw(t) {
  let { date: e, dateEnv: n, dateProfile: a, isMonthStart: i } = t, o = fs(e, t.todayRange, null, a), r = t.showDayNumber ? n.format(e, i ? t.monthStartFormat : Hw) : "";
  return Object.assign(Object.assign(Object.assign({ date: n.toDate(e), view: t.viewApi }, o), {
    isMonthStart: i,
    dayNumberText: r
  }), t.extraRenderProps);
}
class Uw extends Ie {
  render() {
    let { props: e } = this, { seg: n } = e;
    return q(ui, { elTag: "div", elClasses: ["fc-bg-event"], elStyle: { backgroundColor: n.eventRange.ui.backgroundColor }, defaultGenerator: Ww, seg: n, timeText: "", isDragging: !1, isResizing: !1, isDateSelecting: !1, isSelected: !1, isPast: e.isPast, isFuture: e.isFuture, isToday: e.isToday, disableDragging: !0, disableResizing: !0 });
  }
}
function Ww(t) {
  let { title: e } = t.event;
  return e && q("div", { className: "fc-event-title" }, t.event.title);
}
function Yw(t) {
  return q("div", { className: `fc-${t}` });
}
const Gw = (t) => q(St.Consumer, null, (e) => {
  let { dateEnv: n, options: a } = e, { date: i } = t, o = a.weekNumberFormat || t.defaultFormat, r = n.computeWeekNumber(i), s = n.format(i, o), u = { num: r, text: s, date: i };
  return q(
    at,
    { elRef: t.elRef, elTag: t.elTag, elAttrs: t.elAttrs, elClasses: t.elClasses, elStyle: t.elStyle, renderProps: u, generatorName: "weekNumberContent", customGenerator: a.weekNumberContent, defaultGenerator: qw, classNameGenerator: a.weekNumberClassNames, didMount: a.weekNumberDidMount, willUnmount: a.weekNumberWillUnmount },
    t.children
  );
});
function qw(t) {
  return t.text;
}
const ha = 10;
class Kw extends Ie {
  constructor() {
    super(...arguments), this.state = {
      titleId: Vn()
    }, this.handleRootEl = (e) => {
      this.rootEl = e, this.props.elRef && Je(this.props.elRef, e);
    }, this.handleDocumentMouseDown = (e) => {
      const n = Pr(e);
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
    return w1(q(
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
    let { isRtl: e } = this.context, { alignmentEl: n, alignGridTop: a } = this.props, { rootEl: i } = this, o = lw(n);
    if (o) {
      let r = i.getBoundingClientRect(), s = a ? Le(n, ".fc-scrollgrid").getBoundingClientRect().top : o.top, u = e ? o.right - r.width : o.left;
      s = Math.max(s, ha), u = Math.min(u, document.documentElement.clientWidth - ha - r.width), u = Math.max(u, ha);
      let d = i.offsetParent.getBoundingClientRect();
      Wt(i, {
        top: s - d.top,
        left: u - d.left
      });
    }
  }
}
class Qw extends Et {
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
    return q(ks, { elRef: this.handleRootEl, date: i, dateProfile: r, todayRange: o }, (u, d, m) => q(
      Kw,
      { elRef: m.ref, id: a.id, title: s, extraClassNames: ["fc-more-popover"].concat(m.className || []), extraAttrs: m, parentEl: a.parentEl, alignmentEl: a.alignmentEl, alignGridTop: a.alignGridTop, onClose: a.onClose },
      Ss(e) && q(u, { elTag: "div", elClasses: ["fc-more-popover-misc"] }),
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
class Zw extends Ie {
  constructor() {
    super(...arguments), this.state = {
      isPopoverOpen: !1,
      popoverId: Vn()
    }, this.handleLinkEl = (e) => {
      this.linkEl = e, this.props.elRef && Je(this.props.elRef, e);
    }, this.handleClick = (e) => {
      let { props: n, context: a } = this, { moreLinkClick: i } = a.options, o = vo(n).start;
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
    return q(St.Consumer, null, (a) => {
      let { viewApi: i, options: o, calendarApi: r } = a, { moreLinkText: s } = o, { moreCnt: u } = e, d = vo(e), m = typeof s == "function" ? s.call(r, u) : `+${u} ${s}`, v = Yt(o.moreLinkHint, [u], m), p = {
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
        ], elStyle: e.elStyle, elAttrs: Object.assign(Object.assign(Object.assign({}, e.elAttrs), Br(this.handleClick)), { title: v, "aria-expanded": n.isPopoverOpen, "aria-controls": n.isPopoverOpen ? n.popoverId : "" }), renderProps: p, generatorName: "moreLinkContent", customGenerator: o.moreLinkContent, defaultGenerator: e.defaultGenerator || Jw, classNameGenerator: o.moreLinkClassNames, didMount: o.moreLinkDidMount, willUnmount: o.moreLinkWillUnmount }, e.children),
        n.isPopoverOpen && q(Qw, { id: n.popoverId, startDate: d.start, endDate: d.end, dateProfile: e.dateProfile, todayRange: e.todayRange, extraDateSpan: e.extraDateSpan, parentEl: this.parentEl, alignmentEl: e.alignmentElRef ? e.alignmentElRef.current : this.linkEl, alignGridTop: e.alignGridTop, forceTimed: e.forceTimed, onClose: this.handlePopoverClose }, e.popoverContent())
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
function Jw(t) {
  return t.text;
}
function vo(t) {
  if (t.allDayDate)
    return {
      start: t.allDayDate,
      end: ze(t.allDayDate, 1)
    };
  let { hiddenSegs: e } = t;
  return {
    start: Xw(e),
    end: tA(e)
  };
}
function Xw(t) {
  return t.reduce(eA).eventRange.range.start;
}
function eA(t, e) {
  return t.eventRange.range.start < e.eventRange.range.start ? t : e;
}
function tA(t) {
  return t.reduce(nA).eventRange.range.end;
}
function nA(t, e) {
  return t.eventRange.range.end > e.eventRange.range.end ? t : e;
}
class aA {
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
class iA extends aA {
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
const oA = [], Ts = {
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
}, Es = Object.assign(Object.assign({}, Ts), {
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
function rA(t) {
  let e = t.length > 0 ? t[0].code : "en", n = oA.concat(t), a = {
    en: Es
  };
  for (let i of n)
    a[i.code] = i;
  return {
    map: a,
    defaultCode: e
  };
}
function Ms(t, e) {
  return typeof t == "object" && !Array.isArray(t) ? Ns(t.code, [t.code], t) : sA(t, e);
}
function sA(t, e) {
  let n = [].concat(t || []), a = lA(n, e) || Es;
  return Ns(t, n, a);
}
function lA(t, e) {
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
function Ns(t, e, n) {
  let a = qa([Ts, n], ["buttonText"]);
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
    id: At(),
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
function uA(t, e) {
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
      u === void 0 ? (n[s] = r.id, i(r.deps), a = dA(a, r)) : u !== r.id && console.warn(`Duplicate plugin '${s}'`);
    }
  }
  return t && i(t), i(e), a;
}
function cA() {
  let t = [], e = [], n;
  return (a, i) => ((!n || !ct(a, t) || !ct(i, e)) && (n = uA(a, i)), t = a, e = i, n);
}
function dA(t, e) {
  return {
    premiumReleaseDate: fA(t.premiumReleaseDate, e.premiumReleaseDate),
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
function fA(t, e) {
  return t === void 0 ? e : e === void 0 ? t : new Date(Math.max(t.valueOf(), e.valueOf()));
}
class mt extends nn {
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
function mA(t, e) {
  let n = {}, a;
  for (a in t)
    Ea(a, n, t, e);
  for (a in e)
    Ea(a, n, t, e);
  return n;
}
function Ea(t, e, n, a) {
  if (e[t])
    return e[t];
  let i = hA(t, e, n, a);
  return i && (e[t] = i), i;
}
function hA(t, e, n, a) {
  let i = n[t], o = a[t], r = (m) => i && i[m] !== null ? i[m] : o && o[m] !== null ? o[m] : null, s = r("component"), u = r("superType"), d = null;
  if (u) {
    if (u === t)
      throw new Error("Can't have a custom view type that references itself");
    d = Ea(u, e, n, a);
  }
  return !s && d && (s = d.component), s ? {
    type: t,
    component: s,
    defaults: Object.assign(Object.assign({}, d ? d.defaults : {}), i ? i.rawOptions : {}),
    overrides: Object.assign(Object.assign({}, d ? d.overrides : {}), o ? o.rawOptions : {})
  } : null;
}
function po(t) {
  return kt(t, vA);
}
function vA(t) {
  let e = typeof t == "function" ? { component: t } : t, { component: n } = e;
  return e.content ? n = go(e) : n && !(n.prototype instanceof Ie) && (n = go(Object.assign(Object.assign({}, e), { content: n }))), {
    superType: e.type,
    component: n,
    rawOptions: e
    // includes type and component too :(
  };
}
function go(t) {
  return (e) => q(St.Consumer, null, (n) => q(at, { elTag: "div", elClasses: Yr(n.viewSpec), renderProps: Object.assign(Object.assign({}, e), { nextDayThreshold: n.options.nextDayThreshold }), generatorName: void 0, customGenerator: t.content, classNameGenerator: t.classNames, didMount: t.didMount, willUnmount: t.willUnmount }));
}
function pA(t, e, n, a) {
  let i = po(t), o = po(e.views), r = mA(i, o);
  return kt(r, (s) => gA(s, o, e, n, a));
}
function gA(t, e, n, a, i) {
  let o = t.overrides.duration || t.defaults.duration || a.duration || n.duration, r = null, s = "", u = "", d = {};
  if (o && (r = yA(o), r)) {
    let p = Ca(r);
    s = p.unit, p.value === 1 && (u = s, d = e[s] ? e[s].rawOptions : {});
  }
  let m = (p) => {
    let h = p.buttonText || {}, y = t.defaults.buttonTextKey;
    return y != null && h[y] != null ? h[y] : h[t.type] != null ? h[t.type] : h[u] != null ? h[u] : null;
  }, v = (p) => {
    let h = p.buttonHints || {}, y = t.defaults.buttonTextKey;
    return y != null && h[y] != null ? h[y] : h[t.type] != null ? h[t.type] : h[u] != null ? h[u] : null;
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
    buttonTextDefault: m(i) || t.defaults.buttonText || m(Gt) || t.type,
    // not DRY
    buttonTitleOverride: v(a) || v(n) || t.overrides.buttonHint,
    buttonTitleDefault: v(i) || t.defaults.buttonHint || v(Gt)
    // will eventually fall back to buttonText
  };
}
let yo = {};
function yA(t) {
  let e = JSON.stringify(t), n = yo[e];
  return n === void 0 && (n = ke(t), yo[e] = n), n;
}
function bA(t, e) {
  switch (e.type) {
    case "CHANGE_VIEW_TYPE":
      t = e.viewType;
  }
  return t;
}
function _A(t, e) {
  switch (e.type) {
    case "CHANGE_DATE":
      return e.dateMarker;
    default:
      return t;
  }
}
function CA(t, e, n) {
  let a = t.initialDate;
  return a != null ? e.createMarker(a) : n.getDateMarker();
}
function wA(t, e) {
  switch (e.type) {
    case "SET_OPTION":
      return Object.assign(Object.assign({}, t), { [e.optionName]: e.rawOptionValue });
    default:
      return t;
  }
}
function AA(t, e, n, a) {
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
function kA(t, e, n) {
  let a = e ? e.activeRange : null;
  return Is({}, IA(t, n), a, n);
}
function SA(t, e, n, a) {
  let i = n ? n.activeRange : null;
  switch (e.type) {
    case "ADD_EVENT_SOURCES":
      return Is(t, e.sources, i, a);
    case "REMOVE_EVENT_SOURCE":
      return EA(t, e.sourceId);
    case "PREV":
    // TODO: how do we track all actions that affect dateProfile :(
    case "NEXT":
    case "CHANGE_DATE":
    case "CHANGE_VIEW_TYPE":
      return n ? Os(t, i, a) : t;
    case "FETCH_EVENT_SOURCES":
      return ci(t, e.sourceIds ? (
        // why no type?
        Vr(e.sourceIds)
      ) : Rs(t, a), i, e.isRefetch || !1, a);
    case "RECEIVE_EVENTS":
    case "RECEIVE_EVENT_ERROR":
      return DA(t, e.sourceId, e.fetchId, e.fetchRange);
    case "REMOVE_ALL_EVENT_SOURCES":
      return {};
    default:
      return t;
  }
}
function TA(t, e, n) {
  let a = e ? e.activeRange : null;
  return ci(t, Rs(t, n), a, !0, n);
}
function Ds(t) {
  for (let e in t)
    if (t[e].isFetching)
      return !0;
  return !1;
}
function Is(t, e, n, a) {
  let i = {};
  for (let o of e)
    i[o.sourceId] = o;
  return n && (i = Os(i, n, a)), Object.assign(Object.assign({}, t), i);
}
function EA(t, e) {
  return Ct(t, (n) => n.sourceId !== e);
}
function Os(t, e, n) {
  return ci(t, Ct(t, (a) => MA(a, e, n)), e, !1, n);
}
function MA(t, e, n) {
  return $s(t, n) ? !n.options.lazyFetching || !t.fetchRange || t.isFetching || // always cancel outdated in-progress fetches
  e.start < t.fetchRange.start || e.end > t.fetchRange.end : !t.latestFetchId;
}
function ci(t, e, n, a, i) {
  let o = {};
  for (let r in t) {
    let s = t[r];
    e[r] ? o[r] = NA(s, n, a, i) : o[r] = s;
  }
  return o;
}
function NA(t, e, n, a) {
  let { options: i, calendarApi: o } = a, r = a.pluginHooks.eventSourceDefs[t.sourceDefId], s = At();
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
function DA(t, e, n, a) {
  let i = t[e];
  return i && // not already removed
  n === i.latestFetchId ? Object.assign(Object.assign({}, t), { [e]: Object.assign(Object.assign({}, i), { isFetching: !1, fetchRange: a }) }) : t;
}
function Rs(t, e) {
  return Ct(t, (n) => $s(n, e));
}
function IA(t, e) {
  let n = es(e), a = [].concat(t.eventSources || []), i = [];
  t.initialEvents && a.unshift(t.initialEvents), t.events && a.unshift(t.events);
  for (let o of a) {
    let r = Xr(o, e, n);
    r && i.push(r);
  }
  return i;
}
function $s(t, e) {
  return !e.pluginHooks.eventSourceDefs[t.sourceDefId].ignoreRange;
}
function OA(t, e) {
  switch (e.type) {
    case "UNSELECT_DATES":
      return null;
    case "SELECT_DATES":
      return e.selection;
    default:
      return t;
  }
}
function RA(t, e) {
  switch (e.type) {
    case "UNSELECT_EVENT":
      return "";
    case "SELECT_EVENT":
      return e.eventInstanceId;
    default:
      return t;
  }
}
function $A(t, e) {
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
function xA(t, e) {
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
function PA(t, e, n, a, i) {
  let o = t.headerToolbar ? bo(t.headerToolbar, t, e, n, a, i) : null, r = t.footerToolbar ? bo(t.footerToolbar, t, e, n, a, i) : null;
  return { header: o, footer: r };
}
function bo(t, e, n, a, i, o) {
  let r = {}, s = [], u = !1;
  for (let d in t) {
    let m = t[d], v = FA(m, e, n, a, i, o);
    r[d] = v.widgets, s.push(...v.viewsWithButtons), u = u || v.hasTitle;
  }
  return { sectionWidgets: r, viewsWithButtons: s, hasTitle: u };
}
function FA(t, e, n, a, i, o) {
  let r = e.direction === "rtl", s = e.customButtons || {}, u = n.buttonText || {}, d = e.buttonText || {}, m = n.buttonHints || {}, v = e.buttonHints || {}, p = t ? t.split(" ") : [], h = [], y = !1;
  return { widgets: p.map((b) => b.split(",").map((_) => {
    if (_ === "title")
      return y = !0, { buttonName: _ };
    let C, k, E, D, x, I;
    if (C = s[_])
      E = (V) => {
        C.click && C.click.call(V.target, V, V.target);
      }, (D = a.getCustomButtonIconClass(C)) || (D = a.getIconClass(_, r)) || (x = C.text), I = C.hint || C.text;
    else if (k = i[_]) {
      h.push(_), E = () => {
        o.changeView(_);
      }, (x = k.buttonTextOverride) || (D = a.getIconClass(_, r)) || (x = k.buttonTextDefault);
      let V = k.buttonTextOverride || k.buttonTextDefault;
      I = Yt(
        k.buttonTitleOverride || k.buttonTitleDefault || e.viewHint,
        [V, _],
        // view-name = buttonName
        V
      );
    } else if (o[_])
      if (E = () => {
        o[_]();
      }, (x = u[_]) || (D = a.getIconClass(_, r)) || (x = d[_]), _ === "prevYear" || _ === "nextYear") {
        let V = _ === "prevYear" ? "prev" : "next";
        I = Yt(m[V] || v[V], [
          d.year || "year",
          "year"
        ], d[_]);
      } else
        I = (V) => Yt(m[_] || v[_], [
          d[V] || V,
          V
        ], d[_]);
    return { buttonName: _, buttonClick: E, buttonIcon: D, buttonText: x, buttonHint: I };
  })), viewsWithButtons: h, hasTitle: y };
}
class BA {
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
let zA = {
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
const LA = ft({
  name: "array-event-source",
  eventSourceDefs: [zA]
});
let VA = {
  parseMeta(t) {
    return typeof t.events == "function" ? t.events : null;
  },
  fetch(t, e, n) {
    const { dateEnv: a } = t.context, i = t.eventSource.meta;
    jC(i.bind(null, ls(t.range, a)), (o) => e({ rawEvents: o }), n);
  }
};
const HA = ft({
  name: "func-event-source",
  eventSourceDefs: [VA]
}), jA = {
  method: String,
  extraParams: G,
  startParam: String,
  endParam: String,
  timeZoneParam: String
};
let UA = {
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
    const { meta: a } = t.eventSource, i = YA(a, t.range, t.context);
    UC(a.method, a.url, i).then(([o, r]) => {
      e({ rawEvents: o, response: r });
    }, n);
  }
};
const WA = ft({
  name: "json-event-source",
  eventSourceRefiners: jA,
  eventSourceDefs: [UA]
});
function YA(t, e, n) {
  let { dateEnv: a, options: i } = n, o, r, s, u, d = {};
  return o = t.startParam, o == null && (o = i.startParam), r = t.endParam, r == null && (r = i.endParam), s = t.timeZoneParam, s == null && (s = i.timeZoneParam), typeof t.extraParams == "function" ? u = t.extraParams() : u = t.extraParams || {}, Object.assign(d, u), d[o] = a.formatIso(e.start), d[r] = a.formatIso(e.end), a.timeZone !== "local" && (d[s] = a.timeZone), d;
}
const GA = {
  daysOfWeek: G,
  startTime: ke,
  endTime: ke,
  duration: ke,
  startRecur: G,
  endRecur: G
};
let qA = {
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
      return t.duration && (a = t.duration), !a && t.startTime && t.endTime && (a = e_(t.endTime, t.startTime)), {
        allDayGuess: !t.startTime && !t.endTime,
        duration: a,
        typeData: n
        // doesn't need endTime anymore but oh well
      };
    }
    return null;
  },
  expand(t, e, n) {
    let a = Bt(e, { start: t.startRecur, end: t.endRecur });
    return a ? QA(t.daysOfWeek, t.startTime, t.dateEnv, n, a) : [];
  }
};
const KA = ft({
  name: "simple-recurring-event",
  recurringTypes: [qA],
  eventRefiners: GA
});
function QA(t, e, n, a, i) {
  let o = t ? Vr(t) : null, r = Ne(i.start), s = i.end, u = [];
  for (e && (e.milliseconds < 0 ? s = ze(s, 1) : e.milliseconds >= 1e3 * 60 * 60 * 24 && (r = ze(r, -1))); r < s; ) {
    let d;
    (!o || o[r.getUTCDay()]) && (e ? d = a.add(r, e) : d = r, u.push(a.createMarker(n.toDate(d)))), r = ze(r, 1);
  }
  return u;
}
const ZA = ft({
  name: "change-handler",
  optionChangeHandlers: {
    events(t, e) {
      _o([t], e);
    },
    eventSources: _o
  }
});
function _o(t, e) {
  let n = Ka(e.getCurrentData().eventSources);
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
function JA(t, e) {
  e.emitter.trigger("datesSet", Object.assign(Object.assign({}, ls(t.activeRange, e.dateEnv)), { view: e.viewApi }));
}
function XA(t, e) {
  let { emitter: n } = e;
  n.hasHandlers("eventsSet") && n.trigger("eventsSet", _t(t, e));
}
const ek = [
  LA,
  HA,
  WA,
  KA,
  ZA,
  ft({
    name: "misc",
    isLoadingFuncs: [
      (t) => Ds(t.eventSources)
    ],
    propSetHandlers: {
      dateProfile: JA,
      eventStore: XA
    }
  })
];
class tk {
  constructor(e, n) {
    this.runTaskOption = e, this.drainedOption = n, this.queue = [], this.delayedRunner = new Va(this.drain.bind(this));
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
function nk(t, e, n) {
  let a;
  return /^(year|month)$/.test(t.currentRangeUnit) ? a = t.currentRange : a = t.activeRange, n.formatRange(a.start, a.end, Be(e.titleFormat || ak(t)), {
    isEndExclusive: t.isRangeAllDay,
    defaultSeparator: e.titleRangeSeparator
  });
}
function ak(t) {
  let { currentRangeUnit: e } = t;
  if (e === "year")
    return { year: "numeric" };
  if (e === "month")
    return { year: "numeric", month: "long" };
  let n = Mn(t.currentRange.start, t.currentRange.end);
  return n !== null && n > 1 ? { year: "numeric", month: "short", day: "numeric" } : { year: "numeric", month: "long", day: "numeric" };
}
class Co {
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
class ik {
  constructor(e) {
    this.computeCurrentViewData = Ce(this._computeCurrentViewData), this.organizeRawLocales = Ce(rA), this.buildLocale = Ce(Ms), this.buildPluginHooks = cA(), this.buildDateEnv = Ce(ok), this.buildTheme = Ce(rk), this.parseToolbars = Ce(PA), this.buildViewSpecs = Ce(pA), this.buildDateProfileGenerator = _n(sk), this.buildViewApi = Ce(lk), this.buildViewUiProps = _n(dk), this.buildEventUiBySource = Ce(uk, Qe), this.buildEventUiBases = Ce(ck), this.parseContextBusinessHours = _n(fk), this.buildTitle = Ce(nk), this.nowManager = new Co(), this.emitter = new Wn(), this.actionRunner = new tk(this._handleAction.bind(this), this.updateData.bind(this)), this.currentCalendarOptionsInput = {}, this.currentCalendarOptionsRefined = {}, this.currentViewOptionsInput = {}, this.currentViewOptionsRefined = {}, this.currentCalendarOptionsRefiners = {}, this.optionsForRefining = [], this.optionsForHandling = [], this.getCurrentData = () => this.data, this.dispatch = (p) => {
      this.actionRunner.request(p);
    }, this.props = e, this.actionRunner.pause(), this.nowManager = new Co();
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
    }, s = CA(a.calendarOptions, a.dateEnv, this.nowManager), u = o.dateProfileGenerator.build(s);
    lt(u.activeRange, s) || (s = u.currentRange.start);
    for (let p of a.pluginHooks.contextInit)
      p(r);
    let d = kA(a.calendarOptions, u, r), m = {
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
    va(m, r) && this.emitter.trigger("loading", !0), this.state = m, this.updateData(), this.actionRunner.resume();
  }
  resetOptions(e, n) {
    let { props: a } = this;
    n === void 0 ? a.optionOverrides = e : (a.optionOverrides = Object.assign(Object.assign({}, a.optionOverrides || {}), e), this.optionsForRefining.push(...n)), (n === void 0 || n.length) && this.actionRunner.request({
      type: "NOTHING"
    });
  }
  _handleAction(e) {
    let { props: n, state: a, emitter: i } = this, o = wA(a.dynamicOptionOverrides, e), r = this.computeOptionsData(n.optionOverrides, o, n.calendarApi), s = bA(a.currentViewType, e), u = this.computeCurrentViewData(s, r, n.optionOverrides, o);
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
    this.data && this.data.dateProfileGenerator !== u.dateProfileGenerator && (v = u.dateProfileGenerator.build(m)), m = _A(m, e), v = AA(v, e, m, u.dateProfileGenerator), (e.type === "PREV" || // TODO: move this logic into DateProfileGenerator
    e.type === "NEXT" || // "
    !lt(v.currentRange, m)) && (m = v.currentRange.start);
    let p = SA(a.eventSources, e, v, d), h = vC(a.eventStore, e, p, v, d), g = Ds(p) && !u.options.progressiveEventRendering && a.renderableEventStore || h, { eventUiSingleBase: b, selectionConfig: _ } = this.buildViewUiProps(d), C = this.buildEventUiBySource(p), k = this.buildEventUiBases(g.defs, b, C), E = {
      dynamicOptionOverrides: o,
      currentViewType: s,
      currentDate: m,
      dateProfile: v,
      eventSources: p,
      eventStore: h,
      renderableEventStore: g,
      selectionConfig: _,
      eventUiBases: k,
      businessHours: this.parseContextBusinessHours(d),
      dateSelection: OA(a.dateSelection, e),
      eventSelection: RA(a.eventSelection, e),
      eventDrag: $A(a.eventDrag, e),
      eventResize: xA(a.eventResize, e)
    }, D = Object.assign(Object.assign({}, d), E);
    for (let V of r.pluginHooks.reducers)
      Object.assign(E, V(a, e, D));
    let x = va(a, d), I = va(E, d);
    !x && I ? i.trigger("loading", !0) : x && !I && i.trigger("loading", !1), this.state = E, n.onAction && n.onAction(e);
  }
  updateData() {
    let { props: e, state: n } = this, a = this.data, i = this.computeOptionsData(e.optionOverrides, n.dynamicOptionOverrides, e.calendarApi), o = this.computeCurrentViewData(n.currentViewType, i, e.optionOverrides, n.dynamicOptionOverrides), r = this.data = Object.assign(Object.assign(Object.assign({ nowManager: this.nowManager, viewTitle: this.buildTitle(n.dateProfile, o.options, i.dateEnv), calendarApi: e.calendarApi, dispatch: this.dispatch, emitter: this.emitter, getCurrentData: this.getCurrentData }, i), o), n), s = i.pluginHooks.optionChangeHandlers, u = a && a.calendarOptions, d = i.calendarOptions;
    if (u && u !== d) {
      u.timeZone !== d.timeZone && (n.eventSources = r.eventSources = TA(r.eventSources, n.dateProfile, r), n.eventStore = r.eventStore = ro(r.eventStore, a.dateEnv, r.dateEnv), n.renderableEventStore = r.renderableEventStore = ro(r.renderableEventStore, a.dateEnv, r.dateEnv));
      for (let m in s)
        (this.optionsForHandling.indexOf(m) !== -1 || u[m] !== d[m]) && s[m](d[m], r);
    }
    this.optionsForHandling = [], e.onData && e.onData(r);
  }
  computeOptionsData(e, n, a) {
    if (!this.optionsForRefining.length && e === this.stableOptionOverrides && n === this.stableDynamicOptionOverrides)
      return this.stableCalendarOptionsData;
    let { refinedOptions: i, pluginHooks: o, localeDefaults: r, availableLocaleData: s, extra: u } = this.processRawCalendarOptions(e, n);
    wo(u);
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
    let { locales: a, locale: i } = sa([
      Gt,
      e,
      n
    ]), o = this.organizeRawLocales(a), r = o.map, s = this.buildLocale(i || o.defaultCode, r).options, u = this.buildPluginHooks(e.plugins || [], ek), d = this.currentCalendarOptionsRefiners = Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, Xi), eo), to), u.listenerRefiners), u.optionRefiners), m = {}, v = sa([
      Gt,
      s,
      e,
      n
    ]), p = {}, h = this.currentCalendarOptionsInput, y = this.currentCalendarOptionsRefined, g = !1;
    for (let b in v)
      this.optionsForRefining.indexOf(b) === -1 && (v[b] === h[b] || vt[b] && b in h && vt[b](h[b], v[b])) ? p[b] = y[b] : d[b] ? (p[b] = d[b](v[b]), g = !0) : m[b] = h[b];
    return g && (this.currentCalendarOptionsInput = v, this.currentCalendarOptionsRefined = p, this.stableOptionOverrides = e, this.stableDynamicOptionOverrides = n), this.optionsForHandling.push(...this.optionsForRefining), this.optionsForRefining = [], {
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
    wo(s), this.nowManager.handleInput(n.dateEnv, r.now);
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
    let r = sa([
      Gt,
      e.optionDefaults,
      a,
      i,
      e.optionOverrides,
      o
    ]), s = Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, Xi), eo), to), O_), n.listenerRefiners), n.optionRefiners), u = {}, d = this.currentViewOptionsInput, m = this.currentViewOptionsRefined, v = !1, p = {};
    for (let h in r)
      r[h] === d[h] || vt[h] && vt[h](r[h], d[h]) ? u[h] = m[h] : (r[h] === this.currentCalendarOptionsInput[h] || vt[h] && vt[h](r[h], this.currentCalendarOptionsInput[h]) ? h in this.currentCalendarOptionsRefined && (u[h] = this.currentCalendarOptionsRefined[h]) : s[h] ? u[h] = s[h](r[h]) : p[h] = r[h], v = !0);
    return v && (this.currentViewOptionsInput = r, this.currentViewOptionsRefined = u), {
      rawOptions: this.currentViewOptionsInput,
      refinedOptions: this.currentViewOptionsRefined,
      extra: p
    };
  }
}
function ok(t, e, n, a, i, o, r, s) {
  let u = Ms(e || r.defaultCode, r.map);
  return new j_({
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
function rk(t, e) {
  let n = e.themeClasses[t.themeSystem] || mt;
  return new n(t);
}
function sk(t) {
  let e = t.dateProfileGeneratorClass || Kr;
  return new e(t);
}
function lk(t, e, n) {
  return new BA(t, e, n);
}
function uk(t) {
  return kt(t, (e) => e.ui);
}
function ck(t, e, n) {
  let a = { "": e };
  for (let i in t) {
    let o = t[i];
    o.sourceId && n[o.sourceId] && (a[i] = n[o.sourceId]);
  }
  return a;
}
function dk(t) {
  let { options: e } = t;
  return {
    eventUiSingleBase: $n({
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
    selectionConfig: $n({
      constraint: e.selectConstraint,
      overlap: typeof e.selectOverlap == "boolean" ? e.selectOverlap : void 0,
      allow: e.selectAllow
    }, t)
  };
}
function va(t, e) {
  for (let n of e.pluginHooks.isLoadingFuncs)
    if (n(t))
      return !0;
  return !1;
}
function fk(t) {
  return kC(t.options.businessHours, t);
}
function wo(t, e) {
  for (let n in t)
    console.warn(`Unknown option '${n}'`);
}
class mk extends Ie {
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
        let p = s === n.activeButton, h = !n.isTodayEnabled && s === "today" || !n.isPrevEnabled && s === "prev" || !n.isNextEnabled && s === "next", y = [`fc-${s}-button`, a.getClass("button")];
        p && y.push(a.getClass("buttonActive")), i.push(q("button", { type: "button", title: typeof v == "function" ? v(n.navUnit) : v, disabled: h, "aria-pressed": p, className: y.join(" "), onClick: u }, d || (m ? q("span", { className: m, role: "img" }) : "")));
      }
    }
    if (i.length > 1) {
      let r = o && a.getClass("buttonGroup") || "";
      return q("div", { className: r }, ...i);
    }
    return i[0];
  }
}
class Ao extends Ie {
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
    return q(mk, { key: e, widgetGroups: n, title: a.title, navUnit: a.navUnit, activeButton: a.activeButton, isTodayEnabled: a.isTodayEnabled, isPrevEnabled: a.isPrevEnabled, isNextEnabled: a.isNextEnabled, titleId: a.titleId });
  }
}
class hk extends Ie {
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
class vk extends jt {
  constructor(e) {
    super(e), this.handleSegClick = (n, a) => {
      let { component: i } = this, { context: o } = i, r = zt(a);
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
    }, this.destroy = Fr(
      e.el,
      "click",
      ".fc-event",
      // on both fg and bg events
      this.handleSegClick
    );
  }
}
class pk extends jt {
  constructor(e) {
    super(e), this.handleEventElRemove = (n) => {
      n === this.currentSegEl && this.handleSegLeave(null, this.currentSegEl);
    }, this.handleSegEnter = (n, a) => {
      zt(a) && (this.currentSegEl = a, this.triggerEvent("eventMouseEnter", n, a));
    }, this.handleSegLeave = (n, a) => {
      this.currentSegEl && (this.currentSegEl = null, this.triggerEvent("eventMouseLeave", n, a));
    }, this.removeHoverListeners = z1(
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
    let { component: i } = this, { context: o } = i, r = zt(a);
    (!n || i.isValidSegDownEl(n.target)) && o.emitter.trigger(e, {
      el: a,
      event: new De(o, r.eventRange.def, r.eventRange.instance),
      jsEvent: n,
      view: o.viewApi
    });
  }
}
class gk extends Tt {
  constructor() {
    super(...arguments), this.buildViewContext = Ce(Y_), this.buildViewPropTransformers = Ce(bk), this.buildToolbarProps = Ce(yk), this.headerRef = nt(), this.footerRef = nt(), this.interactionsStore = {}, this.state = {
      viewLabelId: Vn()
    }, this.registerInteractiveComponent = (e, n) => {
      let a = GC(e, n), r = [
        vk,
        pk
      ].concat(this.props.pluginHooks.componentInteractions).map((s) => new s(a));
      this.interactionsStore[e.uid] = r, Sa[e.uid] = a;
    }, this.unregisterInteractiveComponent = (e) => {
      let n = this.interactionsStore[e.uid];
      if (n) {
        for (let a of n)
          a.destroy();
        delete this.interactionsStore[e.uid];
      }
      delete Sa[e.uid];
    }, this.resizeRunner = new Va(() => {
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
      St.Provider,
      { value: s },
      q(Yn, { unit: "day" }, (d) => {
        let m = this.buildToolbarProps(e.viewSpec, e.dateProfile, e.dateProfileGenerator, e.currentDate, d, e.viewTitle);
        return q(
          Re,
          null,
          n.header && q(Ao, Object.assign({ ref: this.headerRef, extraClassName: "fc-header-toolbar", model: n.header, titleId: u }, m)),
          q(
            hk,
            { liquid: i, height: o, aspectRatio: r, labeledById: u },
            this.renderView(e),
            this.buildAppendContent()
          ),
          n.footer && q(Ao, Object.assign({ ref: this.footerRef, extraClassName: "fc-footer-toolbar", model: n.footer, titleId: "" }, m))
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
function yk(t, e, n, a, i, o) {
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
function bk(t) {
  return t.map((e) => new e());
}
class _k extends KC {
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
        On(() => {
          Jt(q(YC, { options: a.calendarOptions, theme: a.theme, emitter: a.emitter }, (i, o, r, s) => (this.setClassNames(i), this.setHeight(o), q(
            Wr.Provider,
            { value: this.customContentRenderId },
            q(gk, Object.assign({ isHeightAuto: r, forPrint: s }, a))
          ))), this.el);
        });
      } else this.isRendered && (this.isRendered = !1, Jt(null, this.el), this.setClassNames([]), this.setHeight(""));
    }, D1(e), this.el = e, this.renderRunner = new Va(this.handleRenderRequest), new ik({
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
    On(() => {
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
    xr(this.el, "height", e);
  }
}
const Ck = {
  headerToolbar: !0,
  footerToolbar: !0,
  events: !0,
  eventSources: !0,
  resources: !0
}, wk = le({
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
        customRenderingMetaMap: Sk(this.$slots),
        handleCustomRendering: this.handleCustomRendering
      };
    }
  },
  render() {
    const t = [];
    for (const e of this.customRenderingMap.values())
      t.push(bt(Ak, {
        key: e.id,
        customRendering: e
      }));
    return bt("div", {
      // when renderId is changed, Vue will trigger a real-DOM async rerender, calling beforeUpdate/updated
      attrs: { "data-fc-render-id": this.renderId }
    }, bt(L, t));
  },
  mounted() {
    const t = new iA();
    this.handleCustomRendering = t.handle.bind(t);
    const e = this.buildOptions(this.options), n = new _k(this.$el, e);
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
  watch: kk()
}), Ak = le({
  props: {
    customRendering: Object
  },
  render() {
    const t = this.customRendering, e = typeof t.generatorMeta == "function" ? t.generatorMeta(t.renderProps) : (
      // vue-normalized slot function
      t.generatorMeta
    );
    return bt(Ee, { to: t.containerEl }, e);
  }
});
function kk() {
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
  for (let e in Ck)
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
function Sk(t) {
  const e = {};
  for (const n in t)
    e[Tk(n)] = t[n];
  return e;
}
function Tk(t) {
  return t.split("-").map((e, n) => n ? Ek(e) : e).join("");
}
function Ek(t) {
  return t.charAt(0).toUpperCase() + t.slice(1);
}
class Mk extends Et {
  constructor() {
    super(...arguments), this.headerElRef = nt();
  }
  renderSimpleLayout(e, n) {
    let { props: a, context: i } = this, o = [], r = ho(i.options);
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
      no,
      { elClasses: ["fc-daygrid"], viewSpec: i.viewSpec },
      q(ws, { liquid: !a.isHeightAuto && !a.forPrint, collapsibleWidth: a.forPrint, cols: [], sections: o })
    );
  }
  renderHScrollLayout(e, n, a, i) {
    let o = this.context.pluginHooks.scrollGridImpl;
    if (!o)
      throw new Error("No ScrollGrid implementation");
    let { props: r, context: s } = this, u = !r.forPrint && ho(s.options), d = !r.forPrint && zw(s.options), m = [];
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
        content: Bw
      }]
    }), q(
      no,
      { elClasses: ["fc-daygrid"], viewSpec: s.viewSpec },
      q(o, { liquid: !r.isHeightAuto && !r.forPrint, forPrint: r.forPrint, collapsibleWidth: r.forPrint, colGroups: [{ cols: [{ span: a, minWidth: i }] }], sections: m })
    );
  }
}
function wn(t, e) {
  let n = [];
  for (let a = 0; a < e; a += 1)
    n[a] = [];
  for (let a of t)
    n[a.row].push(a);
  return n;
}
function vn(t, e) {
  let n = [];
  for (let a = 0; a < e; a += 1)
    n[a] = [];
  for (let a of t)
    n[a.firstCol].push(a);
  return n;
}
function ko(t, e) {
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
const xs = Be({
  hour: "numeric",
  minute: "2-digit",
  omitZeroMinute: !0,
  meridiem: "narrow"
});
function Ps(t) {
  let { display: e } = t.eventRange.ui;
  return e === "list-item" || e === "auto" && !t.eventRange.def.allDay && t.firstCol === t.lastCol && // can't be multi-day
  t.isStart && // "
  t.isEnd;
}
class Fs extends Ie {
  render() {
    let { props: e } = this;
    return q(As, Object.assign({}, e, { elClasses: ["fc-daygrid-event", "fc-daygrid-block-event", "fc-h-event"], defaultTimeFormat: xs, defaultDisplayEventEnd: e.defaultDisplayEventEnd, disableResizing: !e.seg.eventRange.def.allDay }));
  }
}
class Bs extends Ie {
  render() {
    let { props: e, context: n } = this, { options: a } = n, { seg: i } = e, o = a.eventTimeFormat || xs, r = rs(i, o, n, !0, e.defaultDisplayEventEnd);
    return q(ui, Object.assign({}, e, { elTag: "a", elClasses: ["fc-daygrid-event", "fc-daygrid-dot-event"], elAttrs: ss(e.seg, n), defaultGenerator: Nk, timeText: r, isResizing: !1, isDateSelecting: !1 }));
  }
}
function Nk(t) {
  return q(
    Re,
    null,
    q("div", { className: "fc-daygrid-event-dot", style: { borderColor: t.borderColor || t.backgroundColor } }),
    t.timeText && q("div", { className: "fc-event-time" }, t.timeText),
    q("div", { className: "fc-event-title" }, t.event.title || q(Re, null, " "))
  );
}
class Dk extends Ie {
  constructor() {
    super(...arguments), this.compileSegs = Ce(Ik);
  }
  render() {
    let { props: e } = this, { allSegs: n, invisibleSegs: a } = this.compileSegs(e.singlePlacements);
    return q(Zw, { elClasses: ["fc-daygrid-more-link"], dateProfile: e.dateProfile, todayRange: e.todayRange, allDayDate: e.allDayDate, moreCnt: e.moreCnt, allSegs: n, hiddenSegs: a, alignmentElRef: e.alignmentElRef, alignGridTop: e.alignGridTop, extraDateSpan: e.extraDateSpan, popoverContent: () => {
      let i = (e.eventDrag ? e.eventDrag.affectedInstances : null) || (e.eventResize ? e.eventResize.affectedInstances : null) || {};
      return q(Re, null, n.map((o) => {
        let r = o.eventRange.instance.instanceId;
        return q("div", { className: "fc-daygrid-event-harness", key: r, style: {
          visibility: i[r] ? "hidden" : ""
        } }, Ps(o) ? q(Bs, Object.assign({ seg: o, isDragging: !1, isSelected: r === e.eventSelection, defaultDisplayEventEnd: !1 }, qt(o, e.todayRange))) : q(Fs, Object.assign({ seg: o, isDragging: !1, isResizing: !1, isDateSelecting: !1, isSelected: r === e.eventSelection, defaultDisplayEventEnd: !1 }, qt(o, e.todayRange))));
      }));
    } });
  }
}
function Ik(t) {
  let e = [], n = [];
  for (let a of t)
    e.push(a.seg), a.isVisible || n.push(a.seg);
  return { allSegs: e, invisibleSegs: n };
}
const Ok = Be({ week: "narrow" });
class Rk extends Et {
  constructor() {
    super(...arguments), this.rootElRef = nt(), this.state = {
      dayNumberId: Vn()
    }, this.handleRootEl = (e) => {
      Je(this.rootElRef, e), Je(this.props.elRef, e);
    };
  }
  render() {
    let { context: e, props: n, state: a, rootElRef: i } = this, { options: o, dateEnv: r } = e, { date: s, dateProfile: u } = n;
    const d = n.showDayNumber && xk(s, u.currentRange, r);
    return q(ks, { elTag: "td", elRef: this.handleRootEl, elClasses: [
      "fc-daygrid-day",
      ...n.extraClassNames || []
    ], elAttrs: Object.assign(Object.assign(Object.assign({}, n.extraDataAttrs), n.showDayNumber ? { "aria-labelledby": a.dayNumberId } : {}), { role: "gridcell" }), defaultGenerator: $k, date: s, dateProfile: u, todayRange: n.todayRange, showDayNumber: n.showDayNumber, isMonthStart: d, extraRenderProps: n.extraRenderProps }, (m, v) => q(
      "div",
      { ref: n.innerElRef, className: "fc-daygrid-day-frame fc-scrollgrid-sync-inner", style: { minHeight: n.minHeight } },
      n.showWeekNumber && q(Gw, { elTag: "a", elClasses: ["fc-daygrid-week-number"], elAttrs: Ta(e, s, "week"), date: s, defaultFormat: Ok }),
      !v.isDisabled && (n.showDayNumber || Ss(o) || n.forceDayTop) ? q(
        "div",
        { className: "fc-daygrid-day-top" },
        q(m, { elTag: "a", elClasses: [
          "fc-daygrid-day-number",
          d && "fc-daygrid-month-start"
        ], elAttrs: Object.assign(Object.assign({}, Ta(e, s)), { id: a.dayNumberId }) })
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
          q(Dk, { allDayDate: s, singlePlacements: n.singlePlacements, moreCnt: n.moreCnt, alignmentElRef: i, alignGridTop: !n.showDayNumber, extraDateSpan: n.extraDateSpan, dateProfile: n.dateProfile, eventSelection: n.eventSelection, eventDrag: n.eventDrag, eventResize: n.eventResize, todayRange: n.todayRange })
        )
      ),
      q("div", { className: "fc-daygrid-day-bg" }, n.bgContent)
    ));
  }
}
function $k(t) {
  return t.dayNumberText || q(Re, null, " ");
}
function xk(t, e, n) {
  const { start: a, end: i } = e, o = dt(i, -1), r = n.getYear(a), s = n.getMonth(a), u = n.getYear(o), d = n.getMonth(o);
  return !(r === u && s === d) && // first date in current view?
  (t.valueOf() === a.valueOf() || // a month-start that's within the current range?
  n.getDay(t) === 1 && t.valueOf() < i.valueOf());
}
function zs(t) {
  return t.eventRange.instance.instanceId + ":" + t.firstCol;
}
function Ls(t) {
  return zs(t) + ":" + t.lastCol;
}
function Pk(t, e, n, a, i, o, r) {
  let s = new zk((_) => {
    let C = t[_.index].eventRange.instance.instanceId + ":" + _.span.start + ":" + (_.span.end - 1);
    return i[C] || 1;
  });
  s.allowReslicing = !0, s.strictOrder = a, e === !0 || n === !0 ? (s.maxCoord = o, s.hiddenConsumes = !0) : typeof e == "number" ? s.maxStackCnt = e : typeof n == "number" && (s.maxStackCnt = n, s.hiddenConsumes = !0);
  let u = [], d = [];
  for (let _ = 0; _ < t.length; _ += 1) {
    let C = t[_], k = Ls(C);
    i[k] != null ? u.push({
      index: _,
      span: {
        start: C.firstCol,
        end: C.lastCol + 1
      }
    }) : d.push(C);
  }
  let m = s.addSegs(u), v = s.toRects(), { singleColPlacements: p, multiColPlacements: h, leftoverMargins: y } = Fk(v, t, r), g = [], b = [];
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
        seg: xt(_, C, C + 1, r),
        isVisible: !1,
        isAbsolute: !1,
        absoluteTop: 0,
        marginTop: 0
      });
  }
  for (let _ = 0; _ < r.length; _ += 1)
    g.push(0);
  for (let _ of m) {
    let C = t[_.index], k = _.span;
    h[k.start].push({
      seg: xt(C, k.start, k.end, r),
      isVisible: !1,
      isAbsolute: !0,
      absoluteTop: 0,
      marginTop: 0
    });
    for (let E = k.start; E < k.end; E += 1)
      g[E] += 1, p[E].push({
        seg: xt(C, E, E + 1, r),
        isVisible: !1,
        isAbsolute: !1,
        absoluteTop: 0,
        marginTop: 0
      });
  }
  for (let _ = 0; _ < r.length; _ += 1)
    b.push(y[_]);
  return { singleColPlacements: p, multiColPlacements: h, moreCnts: g, moreMarginTops: b };
}
function Fk(t, e, n) {
  let a = Bk(t, n.length), i = [], o = [], r = [];
  for (let s = 0; s < n.length; s += 1) {
    let u = a[s], d = [], m = 0, v = 0;
    for (let h of u) {
      let y = e[h.index];
      d.push({
        seg: xt(y, s, s + 1, n),
        isVisible: !0,
        isAbsolute: !1,
        absoluteTop: h.levelCoord,
        marginTop: h.levelCoord - m
      }), m = h.levelCoord + h.thickness;
    }
    let p = [];
    m = 0, v = 0;
    for (let h of u) {
      let y = e[h.index], g = h.span.end - h.span.start > 1, b = h.span.start === s;
      v += h.levelCoord - m, m = h.levelCoord + h.thickness, g ? (v += h.thickness, b && p.push({
        seg: xt(y, h.span.start, h.span.end, n),
        isVisible: !0,
        isAbsolute: !0,
        absoluteTop: h.levelCoord,
        marginTop: 0
      })) : b && (p.push({
        seg: xt(y, h.span.start, h.span.end, n),
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
function Bk(t, e) {
  let n = [];
  for (let a = 0; a < e; a += 1)
    n.push([]);
  for (let a of t)
    for (let i = a.span.start; i < a.span.end; i += 1)
      n[i].push(a);
  return n;
}
function xt(t, e, n, a) {
  if (t.firstCol === e && t.lastCol === n - 1)
    return t;
  let i = t.eventRange, o = i.range, r = Bt(o, {
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
class zk extends dw {
  constructor() {
    super(...arguments), this.hiddenConsumes = !1, this.forceHidden = {};
  }
  addSegs(e) {
    const n = super.addSegs(e), { entriesByLevel: a } = this, i = (o) => !this.forceHidden[Kt(o)];
    for (let o = 0; o < a.length; o += 1)
      a[o] = a[o].filter(i);
    return n;
  }
  handleInvalidInsertion(e, n, a) {
    const { entriesByLevel: i, forceHidden: o } = this, { touchingEntry: r, touchingLevel: s, touchingLateral: u } = e;
    if (this.hiddenConsumes && r) {
      const d = Kt(r);
      if (!o[d])
        if (this.allowReslicing) {
          const m = Object.assign(Object.assign({}, r), { span: vs(r.span, n.span) }), v = Kt(m);
          o[v] = !0, i[s][u] = m, a.push(m), this.splitEntry(r, n, a);
        } else
          o[d] = !0, a.push(r);
    }
    super.handleInvalidInsertion(e, n, a);
  }
}
class Vs extends Et {
  constructor() {
    super(...arguments), this.cellElRefs = new yt(), this.frameElRefs = new yt(), this.fgElRefs = new yt(), this.segHarnessRefs = new yt(), this.rootElRef = nt(), this.state = {
      framePositions: null,
      maxContentHeight: null,
      segHeights: {}
    }, this.handleResize = (e) => {
      e && this.updateSizing(!0);
    };
  }
  render() {
    let { props: e, state: n, context: a } = this, { options: i } = a, o = e.cells.length, r = vn(e.businessHourSegs, o), s = vn(e.bgEventSegs, o), u = vn(this.getHighlightSegs(), o), d = vn(this.getMirrorSegs(), o), { singleColPlacements: m, multiColPlacements: v, moreCnts: p, moreMarginTops: h } = Pk(NC(e.fgEventSegs, i.eventOrder), e.dayMaxEvents, e.dayMaxEventRows, i.eventOrderStrict, n.segHeights, n.maxContentHeight, e.cells), y = (
      // TODO: messy way to compute this
      e.eventDrag && e.eventDrag.affectedInstances || e.eventResize && e.eventResize.affectedInstances || {}
    );
    return q(
      "tr",
      { ref: this.rootElRef, role: "row" },
      e.renderIntro && e.renderIntro(),
      e.cells.map((g, b) => {
        let _ = this.renderFgSegs(b, e.forPrint ? m[b] : v[b], e.todayRange, y), C = this.renderFgSegs(b, Lk(d[b], v), e.todayRange, {}, !!e.eventDrag, !!e.eventResize, !1);
        return q(Rk, { key: g.key, elRef: this.cellElRefs.createRef(g.key), innerElRef: this.frameElRefs.createRef(g.key), dateProfile: e.dateProfile, date: g.date, showDayNumber: e.showDayNumbers, showWeekNumber: e.showWeekNumbers && b === 0, forceDayTop: e.showWeekNumbers, todayRange: e.todayRange, eventSelection: e.eventSelection, eventDrag: e.eventDrag, eventResize: e.eventResize, extraRenderProps: g.extraRenderProps, extraDataAttrs: g.extraDataAttrs, extraClassNames: g.extraClassNames, extraDateSpan: g.extraDateSpan, moreCnt: p[b], moreMarginTop: h[b], singlePlacements: m[b], fgContentElRef: this.fgElRefs.createRef(g.key), fgContent: (
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
      for (let y of n) {
        let { seg: g } = y, { instanceId: b } = g.eventRange.instance, _ = y.isVisible && !i[b], C = y.isAbsolute, k = "", E = "";
        C && (u.isRtl ? (E = 0, k = m.lefts[g.lastCol] - m.lefts[g.firstCol]) : (k = 0, E = m.rights[g.firstCol] - m.rights[g.lastCol])), h.push(q("div", { className: "fc-daygrid-event-harness" + (C ? " fc-daygrid-event-harness-abs" : ""), key: zs(g), ref: p ? null : this.segHarnessRefs.createRef(Ls(g)), style: {
          visibility: _ ? "" : "hidden",
          marginTop: C ? "" : y.marginTop,
          top: C ? y.absoluteTop : "",
          left: k,
          right: E
        } }, Ps(g) ? q(Bs, Object.assign({ seg: g, isDragging: o, isSelected: b === d, defaultDisplayEventEnd: v }, qt(g, a))) : q(Fs, Object.assign({ seg: g, isDragging: o, isResizing: r, isDateSelecting: s, isSelected: b === d, defaultDisplayEventEnd: v }, qt(g, a)))));
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
        r.push(q("div", { key: xC(s.eventRange), className: "fc-daygrid-bg-harness", style: u }, n === "bg-event" ? q(Uw, Object.assign({ seg: s }, qt(s, i))) : Yw(n)));
      }
    return q(Re, {}, ...r);
  }
  updateSizing(e) {
    let { props: n, state: a, frameElRefs: i } = this;
    if (!n.forPrint && n.clientWidth !== null) {
      if (e) {
        let u = n.cells.map((d) => i.currentMap[d.key]);
        if (u.length) {
          let d = this.rootElRef.current, m = new Pn(
            d,
            u,
            !0,
            // isHorizontal
            !1
          );
          (!a.framePositions || !a.framePositions.similarTo(m)) && this.setState({
            framePositions: new Pn(
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
Vs.addStateEquality({
  segHeights: Qe
});
function Lk(t, e) {
  if (!t.length)
    return [];
  let n = Vk(e);
  return t.map((a) => ({
    seg: a,
    isVisible: !0,
    isAbsolute: !0,
    absoluteTop: n[a.eventRange.instance.instanceId],
    marginTop: 0
  }));
}
function Vk(t) {
  let e = {};
  for (let n of t)
    for (let a of n)
      e[a.seg.eventRange.instance.instanceId] = a.absoluteTop;
  return e;
}
class Hk extends Et {
  constructor() {
    super(...arguments), this.splitBusinessHourSegs = Ce(wn), this.splitBgEventSegs = Ce(jk), this.splitFgEventSegs = Ce(wn), this.splitDateSelectionSegs = Ce(wn), this.splitEventDrag = Ce(ko), this.splitEventResize = Ce(ko), this.rowRefs = new yt();
  }
  render() {
    let { props: e, context: n } = this, a = e.cells.length, i = this.splitBusinessHourSegs(e.businessHourSegs, a), o = this.splitBgEventSegs(e.bgEventSegs, a), r = this.splitFgEventSegs(e.fgEventSegs, a), s = this.splitDateSelectionSegs(e.dateSelectionSegs, a), u = this.splitEventDrag(e.eventDrag, a), d = this.splitEventResize(e.eventResize, a), m = a >= 7 && e.clientWidth ? e.clientWidth / n.options.aspectRatio / 6 : null;
    return q(Yn, { unit: "day" }, (v, p) => q(Re, null, e.cells.map((h, y) => q(Vs, {
      ref: this.rowRefs.createRef(y),
      key: h.length ? h[0].date.toISOString() : y,
      showDayNumbers: a > 1,
      showWeekNumbers: e.showWeekNumbers,
      todayRange: p,
      dateProfile: e.dateProfile,
      cells: h,
      renderIntro: e.renderRowIntro,
      businessHourSegs: i[y],
      eventSelection: e.eventSelection,
      bgEventSegs: o[y],
      fgEventSegs: r[y],
      dateSelectionSegs: s[y],
      eventDrag: u[y],
      eventResize: d[y],
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
    this.rowPositions = new Pn(
      this.rootEl,
      this.rowRefs.collect().map((e) => e.getCellEls()[0]),
      // first cell el in each row. TODO: not optimal
      !1,
      !0
    ), this.colPositions = new Pn(
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
function jk(t, e) {
  return wn(t.filter(Uk), e);
}
function Uk(t) {
  return t.eventRange.def.allDay;
}
class Wk extends Et {
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
          q(Hk, { dateProfile: e.dateProfile, cells: e.cells, renderRowIntro: e.renderRowIntro, showWeekNumbers: e.showWeekNumbers, clientWidth: e.clientWidth, clientHeight: e.clientHeight, businessHourSegs: e.businessHourSegs, bgEventSegs: e.bgEventSegs, fgEventSegs: e.fgEventSegs, dateSelectionSegs: e.dateSelectionSegs, eventSelection: e.eventSelection, eventDrag: e.eventDrag, eventResize: e.eventResize, dayMaxEvents: a, dayMaxEventRows: n, forPrint: e.forPrint, isHitComboAllowed: e.isHitComboAllowed })
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
      const e = Yk(this.elRef.current, this.props.dateProfile);
      if (e) {
        const n = e.closest(".fc-daygrid-body"), a = n.closest(".fc-scroller"), i = e.getBoundingClientRect().top - n.getBoundingClientRect().top;
        a.scrollTop = i ? i + 1 : 0;
      }
      this.needsScrollReset = !1;
    }
  }
}
function Yk(t, e) {
  let n;
  return e.currentRangeUnit.match(/year|month/) && (n = t.querySelector(`[data-date="${p_(e.currentDate)}-01"]`)), n || (n = t.querySelector(`[data-date="${Wa(e.currentDate)}"]`)), n;
}
class Gk extends Cw {
  constructor() {
    super(...arguments), this.forceDayIfListItem = !0;
  }
  sliceRange(e, n) {
    return n.sliceRange(e);
  }
}
class qk extends Et {
  constructor() {
    super(...arguments), this.slicer = new Gk(), this.tableRef = nt();
  }
  render() {
    let { props: e, context: n } = this;
    return q(Wk, Object.assign({ ref: this.tableRef }, this.slicer.sliceProps(e, e.dateProfile, e.nextDayThreshold, n, e.dayTableModel), { dateProfile: e.dateProfile, cells: e.dayTableModel.cells, colGroupNode: e.colGroupNode, tableMinWidth: e.tableMinWidth, renderRowIntro: e.renderRowIntro, dayMaxEvents: e.dayMaxEvents, dayMaxEventRows: e.dayMaxEventRows, showWeekNumbers: e.showWeekNumbers, expandRows: e.expandRows, headerAlignElRef: e.headerAlignElRef, clientWidth: e.clientWidth, clientHeight: e.clientHeight, forPrint: e.forPrint }));
  }
}
class Kk extends Mk {
  constructor() {
    super(...arguments), this.buildDayTableModel = Ce(Qk), this.headerRef = nt(), this.tableRef = nt();
  }
  render() {
    let { options: e, dateProfileGenerator: n } = this.context, { props: a } = this, i = this.buildDayTableModel(a.dateProfile, n), o = e.dayHeaders && q(gw, { ref: this.headerRef, dateProfile: a.dateProfile, dates: i.headerDates, datesRepDistinctDays: i.rowCnt === 1 }), r = (s) => q(qk, { ref: this.tableRef, dateProfile: a.dateProfile, dayTableModel: i, businessHours: a.businessHours, dateSelection: a.dateSelection, eventStore: a.eventStore, eventUiBases: a.eventUiBases, eventSelection: a.eventSelection, eventDrag: a.eventDrag, eventResize: a.eventResize, nextDayThreshold: e.nextDayThreshold, colGroupNode: s.tableColGroupNode, tableMinWidth: s.tableMinWidth, dayMaxEvents: e.dayMaxEvents, dayMaxEventRows: e.dayMaxEventRows, showWeekNumbers: e.weekNumbers, expandRows: !a.isHeightAuto, headerAlignElRef: this.headerElRef, clientWidth: s.clientWidth, clientHeight: s.clientHeight, forPrint: a.forPrint });
    return e.dayMinWidth ? this.renderHScrollLayout(o, r, i.colCnt, e.dayMinWidth) : this.renderSimpleLayout(o, r);
  }
}
function Qk(t, e) {
  let n = new bw(t.renderRange, e);
  return new _w(n, /year|month|week/.test(t.currentRangeUnit));
}
class Zk extends Kr {
  // Computes the date range that will be rendered
  buildRenderRange(e, n, a) {
    let i = super.buildRenderRange(e, n, a), { props: o } = this;
    return Jk({
      currentRange: i,
      snapToWeek: /^(year|month)$/.test(n),
      fixedWeekCount: o.fixedWeekCount,
      dateEnv: o.dateEnv
    });
  }
}
function Jk(t) {
  let { dateEnv: e, currentRange: n } = t, { start: a, end: i } = n, o;
  if (t.snapToWeek && (a = e.startOfWeek(a), o = e.startOfWeek(i), o.valueOf() !== i.valueOf() && (i = qi(o, 1))), t.fixedWeekCount) {
    let r = e.startOfWeek(e.startOfMonth(ze(n.end, -1))), s = Math.ceil(
      // could be partial weeks due to hiddenDays
      i_(r, i)
    );
    i = qi(i, 6 - s);
  }
  return { start: a, end: i };
}
var Xk = ':root{--fc-daygrid-event-dot-width:8px}.fc-daygrid-day-events:after,.fc-daygrid-day-events:before,.fc-daygrid-day-frame:after,.fc-daygrid-day-frame:before,.fc-daygrid-event-harness:after,.fc-daygrid-event-harness:before{clear:both;content:"";display:table}.fc .fc-daygrid-body{position:relative;z-index:1}.fc .fc-daygrid-day.fc-day-today{background-color:var(--fc-today-bg-color)}.fc .fc-daygrid-day-frame{min-height:100%;position:relative}.fc .fc-daygrid-day-top{display:flex;flex-direction:row-reverse}.fc .fc-day-other .fc-daygrid-day-top{opacity:.3}.fc .fc-daygrid-day-number{padding:4px;position:relative;z-index:4}.fc .fc-daygrid-month-start{font-size:1.1em;font-weight:700}.fc .fc-daygrid-day-events{margin-top:1px}.fc .fc-daygrid-body-balanced .fc-daygrid-day-events{left:0;position:absolute;right:0}.fc .fc-daygrid-body-unbalanced .fc-daygrid-day-events{min-height:2em;position:relative}.fc .fc-daygrid-body-natural .fc-daygrid-day-events{margin-bottom:1em}.fc .fc-daygrid-event-harness{position:relative}.fc .fc-daygrid-event-harness-abs{left:0;position:absolute;right:0;top:0}.fc .fc-daygrid-bg-harness{bottom:0;position:absolute;top:0}.fc .fc-daygrid-day-bg .fc-non-business{z-index:1}.fc .fc-daygrid-day-bg .fc-bg-event{z-index:2}.fc .fc-daygrid-day-bg .fc-highlight{z-index:3}.fc .fc-daygrid-event{margin-top:1px;z-index:6}.fc .fc-daygrid-event.fc-event-mirror{z-index:7}.fc .fc-daygrid-day-bottom{font-size:.85em;margin:0 2px}.fc .fc-daygrid-day-bottom:after,.fc .fc-daygrid-day-bottom:before{clear:both;content:"";display:table}.fc .fc-daygrid-more-link{border-radius:3px;cursor:pointer;line-height:1;margin-top:1px;max-width:100%;overflow:hidden;padding:2px;position:relative;white-space:nowrap;z-index:4}.fc .fc-daygrid-more-link:hover{background-color:rgba(0,0,0,.1)}.fc .fc-daygrid-week-number{background-color:var(--fc-neutral-bg-color);color:var(--fc-neutral-text-color);min-width:1.5em;padding:2px;position:absolute;text-align:center;top:0;z-index:5}.fc .fc-more-popover .fc-popover-body{min-width:220px;padding:10px}.fc-direction-ltr .fc-daygrid-event.fc-event-start,.fc-direction-rtl .fc-daygrid-event.fc-event-end{margin-left:2px}.fc-direction-ltr .fc-daygrid-event.fc-event-end,.fc-direction-rtl .fc-daygrid-event.fc-event-start{margin-right:2px}.fc-direction-ltr .fc-daygrid-more-link{float:left}.fc-direction-ltr .fc-daygrid-week-number{border-radius:0 0 3px 0;left:0}.fc-direction-rtl .fc-daygrid-more-link{float:right}.fc-direction-rtl .fc-daygrid-week-number{border-radius:0 0 0 3px;right:0}.fc-liquid-hack .fc-daygrid-day-frame{position:static}.fc-daygrid-event{border-radius:3px;font-size:var(--fc-small-font-size);position:relative;white-space:nowrap}.fc-daygrid-block-event .fc-event-time{font-weight:700}.fc-daygrid-block-event .fc-event-time,.fc-daygrid-block-event .fc-event-title{padding:1px}.fc-daygrid-dot-event{align-items:center;display:flex;padding:2px 0}.fc-daygrid-dot-event .fc-event-title{flex-grow:1;flex-shrink:1;font-weight:700;min-width:0;overflow:hidden}.fc-daygrid-dot-event.fc-event-mirror,.fc-daygrid-dot-event:hover{background:rgba(0,0,0,.1)}.fc-daygrid-dot-event.fc-event-selected:before{bottom:-10px;top:-10px}.fc-daygrid-event-dot{border:calc(var(--fc-daygrid-event-dot-width)/2) solid var(--fc-event-border-color);border-radius:calc(var(--fc-daygrid-event-dot-width)/2);box-sizing:content-box;height:0;margin:0 4px;width:0}.fc-direction-ltr .fc-daygrid-event .fc-event-time{margin-right:3px}.fc-direction-rtl .fc-daygrid-event .fc-event-time{margin-left:3px}';
Or(Xk);
var eS = ft({
  name: "@fullcalendar/daygrid",
  initialView: "dayGridMonth",
  views: {
    dayGrid: {
      component: Kk,
      dateProfileGeneratorClass: Zk
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
li.touchMouseIgnoreWait = 500;
let Ma = 0, Fn = 0, Na = !1;
class Hs {
  constructor(e) {
    this.subjectEl = null, this.selector = "", this.handleSelector = "", this.shouldIgnoreMove = !1, this.shouldWatchScroll = !0, this.isDragging = !1, this.isTouchDragging = !1, this.wasTouchScroll = !1, this.handleMouseDown = (n) => {
      if (!this.shouldIgnoreMouse() && tS(n) && this.tryStart(n)) {
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
        a.removeEventListener("touchmove", this.handleTouchMove), a.removeEventListener("touchend", this.handleTouchEnd), a.removeEventListener("touchcancel", this.handleTouchEnd), window.removeEventListener("scroll", this.handleTouchScroll, !0), this.emitter.trigger("pointerup", this.createEventFromTouch(n)), this.cleanup(), this.isTouchDragging = !1, nS();
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
    }, this.containerEl = e, this.emitter = new Wn(), e.addEventListener("mousedown", this.handleMouseDown), e.addEventListener("touchstart", this.handleTouchStart, { passive: !0 }), aS();
  }
  destroy() {
    this.containerEl.removeEventListener("mousedown", this.handleMouseDown), this.containerEl.removeEventListener("touchstart", this.handleTouchStart, { passive: !0 }), iS();
  }
  tryStart(e) {
    let n = this.querySubjectEl(e), a = e.target;
    return n && (!this.handleSelector || Le(a, this.handleSelector)) ? (this.subjectEl = n, this.isDragging = !0, this.wasTouchScroll = !1, !0) : !1;
  }
  cleanup() {
    Na = !1, this.isDragging = !1, this.subjectEl = null, this.destroyScrollWatch();
  }
  querySubjectEl(e) {
    return this.selector ? Le(e.target, this.selector) : this.containerEl;
  }
  shouldIgnoreMouse() {
    return Ma || this.isTouchDragging;
  }
  // can be called by user of this class, to cancel touch-based scrolling for the current drag
  cancelTouchScroll() {
    this.isDragging && (Na = !0);
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
function tS(t) {
  return t.button === 0 && !t.ctrlKey;
}
function nS() {
  Ma += 1, setTimeout(() => {
    Ma -= 1;
  }, li.touchMouseIgnoreWait);
}
function aS() {
  Fn += 1, Fn === 1 && window.addEventListener("touchmove", js, { passive: !1 });
}
function iS() {
  Fn -= 1, Fn || window.removeEventListener("touchmove", js, { passive: !1 });
}
function js(t) {
  Na && t.preventDefault();
}
class oS {
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
    a.style.transition = "top " + n + "ms,left " + n + "ms", Wt(a, {
      left: i.left,
      top: i.top
    }), L1(a, () => {
      a.style.transition = "", e();
    });
  }
  cleanup() {
    this.mirrorEl && (Ha(this.mirrorEl), this.mirrorEl = null), this.sourceEl = null;
  }
  updateElPosition() {
    this.sourceEl && this.isVisible && Wt(this.getMirrorEl(), {
      left: this.sourceElRect.left + this.deltaX,
      top: this.sourceElRect.top + this.deltaY
    });
  }
  getMirrorEl() {
    let e = this.sourceElRect, n = this.mirrorEl;
    return n || (n = this.mirrorEl = this.sourceEl.cloneNode(!0), n.style.userSelect = "none", n.style.webkitUserSelect = "none", n.style.pointerEvents = "none", n.classList.add("fc-event-dragging"), Wt(n, {
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
class Us extends si {
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
class Ws extends Us {
  constructor(e, n) {
    super(new uw(e), n);
  }
  getEventTarget() {
    return this.scrollController.el;
  }
  computeClientRect() {
    return sw(this.scrollController.el);
  }
}
class rS extends Us {
  constructor(e) {
    super(new cw(), e);
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
const So = typeof performance == "function" ? performance.now : Date.now;
class sS {
  constructor() {
    this.isEnabled = !0, this.scrollQuery = [window, ".fc-scroller"], this.edgeThreshold = 50, this.maxVelocity = 300, this.pointerScreenX = null, this.pointerScreenY = null, this.isAnimating = !1, this.scrollCaches = null, this.everMovedUp = !1, this.everMovedDown = !1, this.everMovedLeft = !1, this.everMovedRight = !1, this.animate = () => {
      if (this.isAnimating) {
        let e = this.computeBestEdge(this.pointerScreenX + window.scrollX, this.pointerScreenY + window.scrollY);
        if (e) {
          let n = So();
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
      o < 0 ? this.everMovedUp = !0 : o > 0 && (this.everMovedDown = !0), r < 0 ? this.everMovedLeft = !0 : r > 0 && (this.everMovedRight = !0), this.pointerScreenX = a, this.pointerScreenY = i, this.isAnimating || (this.isAnimating = !0, this.requestAnimation(So()));
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
    return this.queryScrollEls(e).map((n) => n === window ? new rS(!1) : new Ws(n, !1));
  }
  queryScrollEls(e) {
    let n = [];
    for (let a of this.scrollQuery)
      typeof a == "object" ? n.push(a) : n.push(...Array.prototype.slice.call(e.getRootNode().querySelectorAll(a)));
    return n;
  }
}
class an extends fw {
  constructor(e, n) {
    super(e), this.containerEl = e, this.delay = null, this.minDistance = 0, this.touchScrollAllowed = !0, this.mirrorNeedsRevert = !1, this.isInteracting = !1, this.isDragging = !1, this.isDelayEnded = !1, this.isDistanceSurpassed = !1, this.delayTimeoutId = null, this.onPointerDown = (i) => {
      this.isDragging || (this.isInteracting = !0, this.isDelayEnded = !1, this.isDistanceSurpassed = !1, V1(document.body), j1(document.body), i.isTouch || i.origEvent.preventDefault(), this.emitter.trigger("pointerdown", i), this.isInteracting && // not destroyed via pointerdown handler
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
      this.isInteracting && (this.isInteracting = !1, H1(document.body), U1(document.body), this.emitter.trigger("pointerup", i), this.isDragging && (this.autoScroller.stop(), this.tryStopDrag(i)), this.delayTimeoutId && (clearTimeout(this.delayTimeoutId), this.delayTimeoutId = null));
    };
    let a = this.pointer = new Hs(e);
    a.emitter.on("pointerdown", this.onPointerDown), a.emitter.on("pointermove", this.onPointerMove), a.emitter.on("pointerup", this.onPointerUp), n && (a.selector = n), this.mirror = new oS(), this.autoScroller = new sS();
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
class lS {
  constructor(e) {
    this.el = e, this.origRect = ri(e), this.scrollCaches = hs(e).map((n) => new Ws(n, !0));
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
      if (!uS(i.getEventTarget()) && !QC(a, i.clientRect))
        return !1;
    return !0;
  }
}
function uS(t) {
  let e = t.tagName;
  return e === "HTML" || e === "BODY";
}
class Gn {
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
    }, this.droppableStore = n, e.emitter.on("pointerdown", this.handlePointerDown), e.emitter.on("dragstart", this.handleDragStart), e.emitter.on("dragmove", this.handleDragMove), e.emitter.on("pointerup", this.handlePointerUp), e.emitter.on("dragend", this.handleDragEnd), this.dragging = e, this.emitter = new Wn();
  }
  // sets initialHit
  // sets coordAdjust
  processFirstCoord(e) {
    let n = { left: e.pageX, top: e.pageY }, a = n, i = e.subjectEl, o;
    i instanceof HTMLElement && (o = ri(i), a = ZC(a, o));
    let r = this.initialHit = this.queryHitForOffset(a.left, a.top);
    if (r) {
      if (this.useSubjectCenter && o) {
        let s = ds(o, r.rect);
        s && (a = JC(s));
      }
      this.coordAdjust = XC(a, n);
    } else
      this.coordAdjust = { left: 0, top: 0 };
  }
  handleMove(e, n) {
    let a = this.queryHitForOffset(e.pageX + this.coordAdjust.left, e.pageY + this.coordAdjust.top);
    (n || !qn(this.movingHit, a)) && (this.movingHit = a, this.emitter.trigger("hitupdate", a, !1, e));
  }
  prepareHits() {
    this.offsetTrackers = kt(this.droppableStore, (e) => (e.component.prepareHits(), new lS(e.el)));
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
        let d = u.computeLeft(), m = u.computeTop(), v = e - d, p = n - m, { origRect: h } = u, y = h.right - h.left, g = h.bottom - h.top;
        if (
          // must be within the element's bounds
          v >= 0 && v < y && p >= 0 && p < g
        ) {
          let b = s.queryHit(v, p, y, g);
          b && // make sure the hit is within activeRange, meaning it's not a dead cell
          jn(b.dateProfile.activeRange, b.dateSpan.range) && // Ensure the component we are querying for the hit is accessibly my the pointer
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
function qn(t, e) {
  return !t && !e ? !0 : !!t != !!e ? !1 : zC(t.dateSpan, e.dateSpan);
}
function Ys(t, e) {
  let n = {};
  for (let a of e.pluginHooks.datePointTransforms)
    Object.assign(n, a(t, e));
  return Object.assign(n, cS(t, e.dateEnv)), n;
}
function cS(t, e) {
  return {
    date: e.toDate(t.range.start),
    dateStr: e.formatIso(t.range.start, { omitTime: t.allDay }),
    allDay: t.allDay
  };
}
class dS extends jt {
  constructor(e) {
    super(e), this.handlePointerDown = (a) => {
      let { dragging: i } = this, o = a.origEvent.target;
      i.setIgnoreMove(!this.component.isValidDateDownEl(o));
    }, this.handleDragEnd = (a) => {
      let { component: i } = this, { pointer: o } = this.dragging;
      if (!o.wasTouchScroll) {
        let { initialHit: r, finalHit: s } = this.hitDragging;
        if (r && s && qn(r, s)) {
          let { context: u } = i, d = Object.assign(Object.assign({}, Ys(r.dateSpan, u)), { dayEl: r.dayEl, jsEvent: a.origEvent, view: u.viewApi || u.calendarApi.view });
          u.emitter.trigger("dateClick", d);
        }
      }
    }, this.dragging = new an(e.el), this.dragging.autoScroller.isEnabled = !1;
    let n = this.hitDragging = new Gn(this.dragging, ii(e));
    n.emitter.on("pointerdown", this.handlePointerDown), n.emitter.on("dragend", this.handleDragEnd);
  }
  destroy() {
    this.dragging.destroy();
  }
}
class fS extends jt {
  constructor(e) {
    super(e), this.dragSelection = null, this.handlePointerDown = (r) => {
      let { component: s, dragging: u } = this, { options: d } = s.context, m = d.selectable && s.isValidDateDownEl(r.origEvent.target);
      u.setIgnoreMove(!m), u.delay = r.isTouch ? mS(s) : null;
    }, this.handleDragStart = (r) => {
      this.component.context.calendarApi.unselect(r);
    }, this.handleHitUpdate = (r, s) => {
      let { context: u } = this.component, d = null, m = !1;
      if (r) {
        let v = this.hitDragging.initialHit;
        r.componentId === v.componentId && this.isHitComboAllowed && !this.isHitComboAllowed(v, r) || (d = hS(v, r, u.pluginHooks.dateSelectionTransformers)), (!d || !ww(d, r.dateProfile, u)) && (m = !0, d = null);
      }
      d ? u.dispatch({ type: "SELECT_DATES", selection: d }) : s || u.dispatch({ type: "UNSELECT_DATES" }), m ? ja() : Ua(), s || (this.dragSelection = d);
    }, this.handlePointerUp = (r) => {
      this.dragSelection && (as(this.dragSelection, r, this.component.context), this.dragSelection = null);
    };
    let { component: n } = e, { options: a } = n.context, i = this.dragging = new an(e.el);
    i.touchScrollAllowed = !1, i.minDistance = a.selectMinDistance || 0, i.autoScroller.isEnabled = a.dragScroll;
    let o = this.hitDragging = new Gn(this.dragging, ii(e));
    o.emitter.on("pointerdown", this.handlePointerDown), o.emitter.on("dragstart", this.handleDragStart), o.emitter.on("hitupdate", this.handleHitUpdate), o.emitter.on("pointerup", this.handlePointerUp);
  }
  destroy() {
    this.dragging.destroy();
  }
}
function mS(t) {
  let { options: e } = t.context, n = e.selectLongPressDelay;
  return n == null && (n = e.longPressDelay), n;
}
function hS(t, e, n) {
  let a = t.dateSpan, i = e.dateSpan, o = [
    a.range.start,
    a.range.end,
    i.range.start,
    i.range.end
  ];
  o.sort(K1);
  let r = {};
  for (let s of n) {
    let u = s(t, e);
    if (u === !1)
      return null;
    u && Object.assign(r, u);
  }
  return r.range = { start: o[0], end: o[3] }, r.allDay = a.allDay, r;
}
class on extends jt {
  constructor(e) {
    super(e), this.subjectEl = null, this.subjectSeg = null, this.isDragging = !1, this.eventRange = null, this.relevantEvents = null, this.receivingContext = null, this.validMutation = null, this.mutatedRelevantEvents = null, this.handlePointerDown = (r) => {
      let s = r.origEvent.target, { component: u, dragging: d } = this, { mirror: m } = d, { options: v } = u.context, p = u.context;
      this.subjectEl = r.subjectEl;
      let h = this.subjectSeg = zt(r.subjectEl), g = (this.eventRange = h.eventRange).instance.instanceId;
      this.relevantEvents = ei(p.getCurrentData().eventStore, g), d.minDistance = r.isTouch ? 0 : v.eventDragMinDistance, d.delay = // only do a touch delay if touch and this event hasn't been selected yet
      r.isTouch && g !== u.props.eventSelection ? pS(u) : null, v.fixedMirrorParent ? m.parentNode = v.fixedMirrorParent : m.parentNode = Le(s, ".fc"), m.revertDuration = v.dragRevertDuration;
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
      let u = this.relevantEvents, d = this.hitDragging.initialHit, m = this.component.context, v = null, p = null, h = null, y = !1, g = {
        affectedEvents: u,
        mutatedEvents: Ke(),
        isEvent: !0
      };
      if (r) {
        v = r.context;
        let b = v.options;
        m === v || b.editable && b.droppable ? (p = vS(d, r, this.eventRange.instance.range.start, v.getCurrentData().pluginHooks.eventDragMutationMassagers), p && (h = ai(u, v.getCurrentData().eventUiBases, p, v), g.mutatedEvents = h, ys(g, r.dateProfile, v) || (y = !0, p = null, h = null, g.mutatedEvents = Ke()))) : v = null;
      }
      this.displayDrag(v, g), y ? ja() : Ua(), s || (m === v && // TODO: write test for this
      qn(d, r) && (p = null), this.dragging.setMirrorNeedsRevert(!p), this.dragging.setMirrorIsVisible(!r || !this.subjectEl.getRootNode().querySelector(".fc-event-mirror")), this.receivingContext = v, this.validMutation = p, this.mutatedRelevantEvents = h);
    }, this.handlePointerUp = () => {
      this.isDragging || this.cleanup();
    }, this.handleDragEnd = (r) => {
      if (this.isDragging) {
        let s = this.component.context, u = s.viewApi, { receivingContext: d, validMutation: m } = this, v = this.eventRange.def, p = this.eventRange.instance, h = new De(s, v, p), y = this.relevantEvents, g = this.mutatedRelevantEvents, { finalHit: b } = this.hitDragging;
        if (this.clearDrag(), s.emitter.trigger("eventDragStop", {
          el: this.subjectEl,
          event: h,
          jsEvent: r.origEvent,
          view: u
        }), m) {
          if (d === s) {
            let _ = new De(s, g.defs[v.defId], p ? g.instances[p.instanceId] : null);
            s.dispatch({
              type: "MERGE_EVENTS",
              eventStore: g
            });
            let C = {
              oldEvent: h,
              event: _,
              relatedEvents: _t(g, s, p),
              revert() {
                s.dispatch({
                  type: "MERGE_EVENTS",
                  eventStore: y
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
              relatedEvents: _t(y, s, p),
              revert() {
                s.dispatch({
                  type: "MERGE_EVENTS",
                  eventStore: y
                });
              }
            };
            s.emitter.trigger("eventLeave", Object.assign(Object.assign({}, _), { draggedEl: r.subjectEl, view: u })), s.dispatch({
              type: "REMOVE_EVENTS",
              eventStore: y
            }), s.emitter.trigger("eventRemove", _);
            let C = g.defs[v.defId], k = g.instances[p.instanceId], E = new De(d, C, k);
            d.dispatch({
              type: "MERGE_EVENTS",
              eventStore: g
            });
            let D = {
              event: E,
              relatedEvents: _t(g, d, k),
              revert() {
                d.dispatch({
                  type: "REMOVE_EVENTS",
                  eventStore: g
                });
              }
            };
            d.emitter.trigger("eventAdd", D), r.isTouch && d.dispatch({
              type: "SELECT_EVENT",
              eventInstanceId: p.instanceId
            }), d.emitter.trigger("drop", Object.assign(Object.assign({}, Ys(b.dateSpan, d)), { draggedEl: r.subjectEl, jsEvent: r.origEvent, view: b.context.viewApi })), d.emitter.trigger("eventReceive", Object.assign(Object.assign({}, D), { draggedEl: r.subjectEl, view: b.context.viewApi }));
          }
        } else
          s.emitter.trigger("_noEventDrop");
      }
      this.cleanup();
    };
    let { component: n } = this, { options: a } = n.context, i = this.dragging = new an(e.el);
    i.pointer.selector = on.SELECTOR, i.touchScrollAllowed = !1, i.autoScroller.isEnabled = a.dragScroll;
    let o = this.hitDragging = new Gn(this.dragging, Sa);
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
on.SELECTOR = ".fc-event-draggable, .fc-event-resizable";
function vS(t, e, n, a) {
  let i = t.dateSpan, o = e.dateSpan, r = i.range.start, s = o.range.start, u = {};
  i.allDay !== o.allDay && (u.allDay = o.allDay, u.hasEnd = e.context.options.allDayMaintainDuration, o.allDay ? r = Ne(n) : r = n);
  let d = Ot(r, s, t.context.dateEnv, t.componentId === e.componentId ? t.largeUnit : null);
  d.milliseconds && (u.allDay = !1);
  let m = {
    datesDelta: d,
    standardProps: u
  };
  for (let v of a)
    v(m, t, e);
  return m;
}
function pS(t) {
  let { options: e } = t.context, n = e.eventLongPressDelay;
  return n == null && (n = e.longPressDelay), n;
}
class gS extends jt {
  constructor(e) {
    super(e), this.draggingSegEl = null, this.draggingSeg = null, this.eventRange = null, this.relevantEvents = null, this.validMutation = null, this.mutatedRelevantEvents = null, this.handlePointerDown = (o) => {
      let { component: r } = this, s = this.querySegEl(o), u = zt(s), d = this.eventRange = u.eventRange;
      this.dragging.minDistance = r.context.options.eventDragMinDistance, this.dragging.setIgnoreMove(!this.component.isValidSegDownEl(o.origEvent.target) || o.isTouch && this.component.props.eventSelection !== d.instance.instanceId);
    }, this.handleDragStart = (o) => {
      let { context: r } = this.component, s = this.eventRange;
      this.relevantEvents = ei(r.getCurrentData().eventStore, this.eventRange.instance.instanceId);
      let u = this.querySegEl(o);
      this.draggingSegEl = u, this.draggingSeg = zt(u), r.calendarApi.unselect(), r.emitter.trigger("eventResizeStart", {
        el: u,
        event: new De(r, s.def, s.instance),
        jsEvent: o.origEvent,
        view: r.viewApi
      });
    }, this.handleHitUpdate = (o, r, s) => {
      let { context: u } = this.component, d = this.relevantEvents, m = this.hitDragging.initialHit, v = this.eventRange.instance, p = null, h = null, y = !1, g = {
        affectedEvents: d,
        mutatedEvents: Ke(),
        isEvent: !0
      };
      o && (o.componentId === m.componentId && this.isHitComboAllowed && !this.isHitComboAllowed(m, o) || (p = yS(m, o, s.subjectEl.classList.contains("fc-event-resizer-start"), v.range))), p && (h = ai(d, u.getCurrentData().eventUiBases, p, u), g.mutatedEvents = h, ys(g, o.dateProfile, u) || (y = !0, p = null, h = null, g.mutatedEvents = null)), h ? u.dispatch({
        type: "SET_EVENT_RESIZE",
        state: g
      }) : u.dispatch({ type: "UNSET_EVENT_RESIZE" }), y ? ja() : Ua(), r || (p && qn(m, o) && (p = null), this.validMutation = p, this.mutatedRelevantEvents = h);
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
          relatedEvents: _t(v, r, u),
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
    let { component: n } = e, a = this.dragging = new an(e.el);
    a.pointer.selector = ".fc-event-resizer", a.touchScrollAllowed = !1, a.autoScroller.isEnabled = n.context.options.dragScroll;
    let i = this.hitDragging = new Gn(this.dragging, ii(e));
    i.emitter.on("pointerdown", this.handlePointerDown), i.emitter.on("dragstart", this.handleDragStart), i.emitter.on("hitupdate", this.handleHitUpdate), i.emitter.on("dragend", this.handleDragEnd);
  }
  destroy() {
    this.dragging.destroy();
  }
  querySegEl(e) {
    return Le(e.subjectEl, ".fc-event");
  }
}
function yS(t, e, n, a) {
  let i = t.context.dateEnv, o = t.dateSpan.range.start, r = e.dateSpan.range.start, s = Ot(o, r, i, t.largeUnit);
  if (n) {
    if (i.add(a.start, s) < a.end)
      return { startDelta: s };
  } else if (i.add(a.end, s) > a.start)
    return { endDelta: s };
  return null;
}
class bS {
  constructor(e) {
    this.context = e, this.isRecentPointerDateSelect = !1, this.matchesCancel = !1, this.matchesEvent = !1, this.onSelect = (a) => {
      a.jsEvent && (this.isRecentPointerDateSelect = !0);
    }, this.onDocumentPointerDown = (a) => {
      let i = this.context.options.unselectCancel, o = Pr(a.origEvent);
      this.matchesCancel = !!Le(o, i), this.matchesEvent = !!Le(o, on.SELECTOR);
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
    let n = this.documentPointer = new Hs(document);
    n.shouldIgnoreMove = !0, n.shouldWatchScroll = !1, n.emitter.on("pointerdown", this.onDocumentPointerDown), n.emitter.on("pointerup", this.onDocumentPointerUp), e.emitter.on("select", this.onSelect);
  }
  destroy() {
    this.context.emitter.off("select", this.onSelect), this.documentPointer.destroy();
  }
}
const _S = {
  fixedMirrorParent: G
}, CS = {
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
li.dataAttrPrefix = "";
var wS = ft({
  name: "@fullcalendar/interaction",
  componentInteractions: [dS, fS, on, gS],
  calendarInteractions: [bS],
  elementDraggingImpl: an,
  optionRefiners: _S,
  listenerRefiners: CS
});
const AS = /* @__PURE__ */ JSON.parse(`[{"name":"Pacific/Midway","alternativeName":"American Samoa Time","group":["Pacific/Midway"],"continentCode":"OC","continentName":"Oceania","countryName":"United States Minor Outlying Islands","countryCode":"UM","mainCities":["Midway"],"rawOffsetInMinutes":-660,"abbreviation":"GMT-11","rawFormat":"-11:00 American Samoa Time - Midway"},{"name":"Pacific/Pago_Pago","alternativeName":"American Samoa Time","group":["Pacific/Pago_Pago","US/Samoa","Pacific/Samoa","Pacific/Midway"],"continentCode":"OC","continentName":"Oceania","countryName":"American Samoa","countryCode":"AS","mainCities":["Pago Pago"],"rawOffsetInMinutes":-660,"abbreviation":"GMT-11","rawFormat":"-11:00 American Samoa Time - Pago Pago"},{"name":"Pacific/Niue","alternativeName":"Niue Time","group":["Pacific/Niue"],"continentCode":"OC","continentName":"Oceania","countryName":"Niue","countryCode":"NU","mainCities":["Alofi"],"rawOffsetInMinutes":-660,"abbreviation":"NUT","rawFormat":"-11:00 Niue Time - Alofi"},{"name":"Pacific/Rarotonga","alternativeName":"Cook Islands Time","group":["Pacific/Rarotonga"],"continentCode":"OC","continentName":"Oceania","countryName":"Cook Islands","countryCode":"CK","mainCities":["Avarua"],"rawOffsetInMinutes":-600,"abbreviation":"CKT","rawFormat":"-10:00 Cook Islands Time - Avarua"},{"name":"America/Adak","alternativeName":"Hawaii-Aleutian Time","group":["America/Adak","US/Aleutian","America/Atka"],"continentCode":"NA","continentName":"North America","countryName":"United States","countryCode":"US","mainCities":["Adak"],"rawOffsetInMinutes":-600,"abbreviation":"HAST","rawFormat":"-10:00 Hawaii-Aleutian Time - Adak"},{"name":"Pacific/Honolulu","alternativeName":"Hawaii-Aleutian Time","group":["Pacific/Honolulu","US/Hawaii","Pacific/Johnston","HST"],"continentCode":"NA","continentName":"North America","countryName":"United States","countryCode":"US","mainCities":["Honolulu","East Honolulu","Pearl City","Makakilo / Kapolei / Honokai Hale"],"rawOffsetInMinutes":-600,"abbreviation":"HAST","rawFormat":"-10:00 Hawaii-Aleutian Time - Honolulu, East Honolulu, Pearl City, Makakilo / Kapolei / Honokai Hale"},{"name":"Pacific/Tahiti","alternativeName":"Tahiti Time","group":["Pacific/Tahiti"],"continentCode":"OC","continentName":"Oceania","countryName":"French Polynesia","countryCode":"PF","mainCities":["Faaa","Papeete","Punaauia"],"rawOffsetInMinutes":-600,"abbreviation":"TAHT","rawFormat":"-10:00 Tahiti Time - Faaa, Papeete, Punaauia"},{"name":"Pacific/Marquesas","alternativeName":"Marquesas Time","group":["Pacific/Marquesas"],"continentCode":"OC","continentName":"Oceania","countryName":"French Polynesia","countryCode":"PF","mainCities":["Marquesas"],"rawOffsetInMinutes":-570,"abbreviation":"MART","rawFormat":"-09:30 Marquesas Time - Marquesas"},{"name":"America/Anchorage","alternativeName":"Alaska Time","group":["America/Anchorage","America/Juneau","America/Metlakatla","America/Nome","America/Sitka","America/Yakutat","US/Alaska"],"continentCode":"NA","continentName":"North America","countryName":"United States","countryCode":"US","mainCities":["Anchorage","Fairbanks","Juneau","Eagle River"],"rawOffsetInMinutes":-540,"abbreviation":"AKST","rawFormat":"-09:00 Alaska Time - Anchorage, Fairbanks, Juneau, Eagle River"},{"name":"Pacific/Gambier","alternativeName":"Gambier Time","group":["Pacific/Gambier"],"continentCode":"OC","continentName":"Oceania","countryName":"French Polynesia","countryCode":"PF","mainCities":["Gambier"],"rawOffsetInMinutes":-540,"abbreviation":"GAMT","rawFormat":"-09:00 Gambier Time - Gambier"},{"name":"America/Los_Angeles","alternativeName":"Pacific Time","group":["America/Los_Angeles","US/Pacific","PST8PDT"],"continentCode":"NA","continentName":"North America","countryName":"United States","countryCode":"US","mainCities":["Los Angeles","San Diego","San Jose","San Francisco"],"rawOffsetInMinutes":-480,"abbreviation":"PST","rawFormat":"-08:00 Pacific Time - Los Angeles, San Diego, San Jose, San Francisco"},{"name":"America/Tijuana","alternativeName":"Pacific Time","group":["America/Tijuana","Mexico/BajaNorte","America/Ensenada","America/Santa_Isabel"],"continentCode":"NA","continentName":"North America","countryName":"Mexico","countryCode":"MX","mainCities":["Tijuana","Mexicali","Ensenada","Rosarito"],"rawOffsetInMinutes":-480,"abbreviation":"PST","rawFormat":"-08:00 Pacific Time - Tijuana, Mexicali, Ensenada, Rosarito"},{"name":"America/Vancouver","alternativeName":"Pacific Time","group":["America/Vancouver","Canada/Pacific"],"continentCode":"NA","continentName":"North America","countryName":"Canada","countryCode":"CA","mainCities":["Vancouver","Surrey","Victoria","Burnaby"],"rawOffsetInMinutes":-480,"abbreviation":"PST","rawFormat":"-08:00 Pacific Time - Vancouver, Surrey, Victoria, Burnaby"},{"name":"Pacific/Pitcairn","alternativeName":"Pitcairn Time","group":["Pacific/Pitcairn"],"continentCode":"OC","continentName":"Oceania","countryName":"Pitcairn","countryCode":"PN","mainCities":["Adamstown"],"rawOffsetInMinutes":-480,"abbreviation":"PST","rawFormat":"-08:00 Pitcairn Time - Adamstown"},{"name":"America/Hermosillo","alternativeName":"Mexican Pacific Time","group":["America/Hermosillo","America/Mazatlan","Mexico/BajaSur"],"continentCode":"NA","continentName":"North America","countryName":"Mexico","countryCode":"MX","mainCities":["Hermosillo","Culiacán","Mazatlán","Tepic"],"rawOffsetInMinutes":-420,"abbreviation":"GMT-7","rawFormat":"-07:00 Mexican Pacific Time - Hermosillo, Culiacán, Mazatlán, Tepic"},{"name":"America/Edmonton","alternativeName":"Mountain Time","group":["America/Cambridge_Bay","America/Edmonton","America/Inuvik","Canada/Mountain","America/Yellowknife"],"continentCode":"NA","continentName":"North America","countryName":"Canada","countryCode":"CA","mainCities":["Calgary","Edmonton","Lethbridge","Red Deer"],"rawOffsetInMinutes":-420,"abbreviation":"MST","rawFormat":"-07:00 Mountain Time - Calgary, Edmonton, Lethbridge, Red Deer"},{"name":"America/Ciudad_Juarez","alternativeName":"Mountain Time","group":["America/Ciudad_Juarez"],"continentCode":"NA","continentName":"North America","countryName":"Mexico","countryCode":"MX","mainCities":["Ciudad Juárez"],"rawOffsetInMinutes":-420,"abbreviation":"MST","rawFormat":"-07:00 Mountain Time - Ciudad Juárez"},{"name":"America/Denver","alternativeName":"Mountain Time","group":["America/Boise","America/Denver","MST7MDT","Navajo","US/Mountain","America/Shiprock"],"continentCode":"NA","continentName":"North America","countryName":"United States","countryCode":"US","mainCities":["Denver","El Paso","Albuquerque","Colorado Springs"],"rawOffsetInMinutes":-420,"abbreviation":"MST","rawFormat":"-07:00 Mountain Time - Denver, El Paso, Albuquerque, Colorado Springs"},{"name":"America/Phoenix","alternativeName":"Mountain Time","group":["America/Phoenix","MST","US/Arizona","America/Creston"],"continentCode":"NA","continentName":"North America","countryName":"United States","countryCode":"US","mainCities":["Phoenix","Tucson","Mesa","Chandler"],"rawOffsetInMinutes":-420,"abbreviation":"MST","rawFormat":"-07:00 Mountain Time - Phoenix, Tucson, Mesa, Chandler"},{"name":"America/Whitehorse","alternativeName":"Yukon Time","group":["America/Creston","America/Dawson","America/Dawson_Creek","America/Fort_Nelson","America/Whitehorse","Canada/Yukon"],"continentCode":"NA","continentName":"North America","countryName":"Canada","countryCode":"CA","mainCities":["Whitehorse","Fort St. John","Creston","Dawson"],"rawOffsetInMinutes":-420,"abbreviation":"YT","rawFormat":"-07:00 Yukon Time - Whitehorse, Fort St. John, Creston, Dawson"},{"name":"America/Belize","alternativeName":"Central Time","group":["America/Belize"],"continentCode":"NA","continentName":"North America","countryName":"Belize","countryCode":"BZ","mainCities":["Belize City","San Pedro","Orange Walk","Belmopan"],"rawOffsetInMinutes":-360,"abbreviation":"CST","rawFormat":"-06:00 Central Time - Belize City, San Pedro, Orange Walk, Belmopan"},{"name":"America/Chicago","alternativeName":"Central Time","group":["America/Chicago","America/Indiana/Knox","America/Indiana/Tell_City","America/Menominee","America/North_Dakota/Beulah","America/North_Dakota/Center","America/North_Dakota/New_Salem","CST6CDT","US/Central","US/Indiana-Starke","America/Knox_IN"],"continentCode":"NA","continentName":"North America","countryName":"United States","countryCode":"US","mainCities":["Chicago","Houston","San Antonio","Dallas"],"rawOffsetInMinutes":-360,"abbreviation":"CST","rawFormat":"-06:00 Central Time - Chicago, Houston, San Antonio, Dallas"},{"name":"America/Guatemala","alternativeName":"Central Time","group":["America/Guatemala"],"continentCode":"NA","continentName":"North America","countryName":"Guatemala","countryCode":"GT","mainCities":["Guatemala City","Villa Nueva","Mixco","Cobán"],"rawOffsetInMinutes":-360,"abbreviation":"CST","rawFormat":"-06:00 Central Time - Guatemala City, Villa Nueva, Mixco, Cobán"},{"name":"America/Managua","alternativeName":"Central Time","group":["America/Managua"],"continentCode":"NA","continentName":"North America","countryName":"Nicaragua","countryCode":"NI","mainCities":["Managua","León","Masaya","Chinandega"],"rawOffsetInMinutes":-360,"abbreviation":"CST","rawFormat":"-06:00 Central Time - Managua, León, Masaya, Chinandega"},{"name":"America/Mexico_City","alternativeName":"Central Time","group":["America/Bahia_Banderas","America/Chihuahua","America/Merida","America/Mexico_City","America/Monterrey","Mexico/General"],"continentCode":"NA","continentName":"North America","countryName":"Mexico","countryCode":"MX","mainCities":["Mexico City","Iztapalapa","Puebla","Ecatepec de Morelos"],"rawOffsetInMinutes":-360,"abbreviation":"CST","rawFormat":"-06:00 Central Time - Mexico City, Iztapalapa, Puebla, Ecatepec de Morelos"},{"name":"America/Matamoros","alternativeName":"Central Time","group":["America/Matamoros","America/Ojinaga"],"continentCode":"NA","continentName":"North America","countryName":"Mexico","countryCode":"MX","mainCities":["Reynosa","Heroica Matamoros","Nuevo Laredo","Ciudad Acuña"],"rawOffsetInMinutes":-360,"abbreviation":"CST","rawFormat":"-06:00 Central Time - Reynosa, Heroica Matamoros, Nuevo Laredo, Ciudad Acuña"},{"name":"America/Costa_Rica","alternativeName":"Central Time","group":["America/Costa_Rica"],"continentCode":"NA","continentName":"North America","countryName":"Costa Rica","countryCode":"CR","mainCities":["San José","Limón","San Francisco","Alajuela"],"rawOffsetInMinutes":-360,"abbreviation":"CST","rawFormat":"-06:00 Central Time - San José, Limón, San Francisco, Alajuela"},{"name":"America/El_Salvador","alternativeName":"Central Time","group":["America/El_Salvador"],"continentCode":"NA","continentName":"North America","countryName":"El Salvador","countryCode":"SV","mainCities":["San Salvador","Soyapango","San Miguel","Santa Ana"],"rawOffsetInMinutes":-360,"abbreviation":"CST","rawFormat":"-06:00 Central Time - San Salvador, Soyapango, San Miguel, Santa Ana"},{"name":"America/Regina","alternativeName":"Central Time","group":["America/Regina","America/Swift_Current","Canada/Saskatchewan"],"continentCode":"NA","continentName":"North America","countryName":"Canada","countryCode":"CA","mainCities":["Saskatoon","Regina","Prince Albert","Moose Jaw"],"rawOffsetInMinutes":-360,"abbreviation":"CST","rawFormat":"-06:00 Central Time - Saskatoon, Regina, Prince Albert, Moose Jaw"},{"name":"America/Tegucigalpa","alternativeName":"Central Time","group":["America/Tegucigalpa"],"continentCode":"NA","continentName":"North America","countryName":"Honduras","countryCode":"HN","mainCities":["Tegucigalpa","San Pedro Sula","La Ceiba","Choloma"],"rawOffsetInMinutes":-360,"abbreviation":"CST","rawFormat":"-06:00 Central Time - Tegucigalpa, San Pedro Sula, La Ceiba, Choloma"},{"name":"America/Winnipeg","alternativeName":"Central Time","group":["America/Rankin_Inlet","America/Resolute","America/Winnipeg","Canada/Central","America/Rainy_River"],"continentCode":"NA","continentName":"North America","countryName":"Canada","countryCode":"CA","mainCities":["Winnipeg","Brandon","Steinbach","Kenora"],"rawOffsetInMinutes":-360,"abbreviation":"CST","rawFormat":"-06:00 Central Time - Winnipeg, Brandon, Steinbach, Kenora"},{"name":"Pacific/Easter","alternativeName":"Easter Island Time","group":["Pacific/Easter","Chile/EasterIsland"],"continentCode":"SA","continentName":"South America","countryName":"Chile","countryCode":"CL","mainCities":["Easter"],"rawOffsetInMinutes":-360,"abbreviation":"EAST","rawFormat":"-06:00 Easter Island Time - Easter"},{"name":"Pacific/Galapagos","alternativeName":"Galapagos Time","group":["Pacific/Galapagos"],"continentCode":"SA","continentName":"South America","countryName":"Ecuador","countryCode":"EC","mainCities":["Galapagos"],"rawOffsetInMinutes":-360,"abbreviation":"GALT","rawFormat":"-06:00 Galapagos Time - Galapagos"},{"name":"America/Rio_Branco","alternativeName":"Acre Time","group":["America/Eirunepe","America/Rio_Branco","Brazil/Acre","America/Porto_Acre"],"continentCode":"SA","continentName":"South America","countryName":"Brazil","countryCode":"BR","mainCities":["Rio Branco","Cruzeiro do Sul","Tarauacá","Sena Madureira"],"rawOffsetInMinutes":-300,"abbreviation":"ACT","rawFormat":"-05:00 Acre Time - Rio Branco, Cruzeiro do Sul, Tarauacá, Sena Madureira"},{"name":"America/Bogota","alternativeName":"Colombia Time","group":["America/Bogota"],"continentCode":"SA","continentName":"South America","countryName":"Colombia","countryCode":"CO","mainCities":["Bogotá","Cali","Medellín","Barranquilla"],"rawOffsetInMinutes":-300,"abbreviation":"COT","rawFormat":"-05:00 Colombia Time - Bogotá, Cali, Medellín, Barranquilla"},{"name":"America/Havana","alternativeName":"Cuba Time","group":["America/Havana","Cuba"],"continentCode":"NA","continentName":"North America","countryName":"Cuba","countryCode":"CU","mainCities":["Havana","Santiago de Cuba","Camagüey","Holguín"],"rawOffsetInMinutes":-300,"abbreviation":"CST","rawFormat":"-05:00 Cuba Time - Havana, Santiago de Cuba, Camagüey, Holguín"},{"name":"America/Atikokan","alternativeName":"Eastern Time","group":["America/Atikokan"],"continentCode":"NA","continentName":"North America","countryName":"Canada","countryCode":"CA","mainCities":["Atikokan"],"rawOffsetInMinutes":-300,"abbreviation":"EST","rawFormat":"-05:00 Eastern Time - Atikokan"},{"name":"America/Cancun","alternativeName":"Eastern Time","group":["America/Cancun"],"continentCode":"NA","continentName":"North America","countryName":"Mexico","countryCode":"MX","mainCities":["Cancún","Chetumal","Playa del Carmen","Cozumel"],"rawOffsetInMinutes":-300,"abbreviation":"EST","rawFormat":"-05:00 Eastern Time - Cancún, Chetumal, Playa del Carmen, Cozumel"},{"name":"America/Cayman","alternativeName":"Eastern Time","group":["America/Cayman"],"continentCode":"NA","continentName":"North America","countryName":"Cayman Islands","countryCode":"KY","mainCities":["George Town","West Bay"],"rawOffsetInMinutes":-300,"abbreviation":"EST","rawFormat":"-05:00 Eastern Time - George Town, West Bay"},{"name":"America/Jamaica","alternativeName":"Eastern Time","group":["America/Jamaica","Jamaica"],"continentCode":"NA","continentName":"North America","countryName":"Jamaica","countryCode":"JM","mainCities":["Kingston","New Kingston","Spanish Town","Portmore"],"rawOffsetInMinutes":-300,"abbreviation":"EST","rawFormat":"-05:00 Eastern Time - Kingston, New Kingston, Spanish Town, Portmore"},{"name":"America/Nassau","alternativeName":"Eastern Time","group":["America/Nassau"],"continentCode":"NA","continentName":"North America","countryName":"Bahamas","countryCode":"BS","mainCities":["Nassau","Lucaya","Freeport","Killarney"],"rawOffsetInMinutes":-300,"abbreviation":"EST","rawFormat":"-05:00 Eastern Time - Nassau, Lucaya, Freeport, Killarney"},{"name":"America/New_York","alternativeName":"Eastern Time","group":["America/Detroit","America/Indiana/Indianapolis","America/Indiana/Marengo","America/Indiana/Petersburg","America/Indiana/Vevay","America/Indiana/Vincennes","America/Indiana/Winamac","America/Kentucky/Louisville","America/Kentucky/Monticello","America/New_York","US/Michigan","US/East-Indiana","America/Indianapolis","America/Fort_Wayne","America/Louisville","EST5EDT","US/Eastern"],"continentCode":"NA","continentName":"North America","countryName":"United States","countryCode":"US","mainCities":["New York City","Brooklyn","Queens","Philadelphia"],"rawOffsetInMinutes":-300,"abbreviation":"EST","rawFormat":"-05:00 Eastern Time - New York City, Brooklyn, Queens, Philadelphia"},{"name":"America/Panama","alternativeName":"Eastern Time","group":["America/Panama","EST","America/Atikokan","America/Cayman","America/Coral_Harbour"],"continentCode":"NA","continentName":"North America","countryName":"Panama","countryCode":"PA","mainCities":["Panamá","San Miguelito","Juan Díaz","David"],"rawOffsetInMinutes":-300,"abbreviation":"EST","rawFormat":"-05:00 Eastern Time - Panamá, San Miguelito, Juan Díaz, David"},{"name":"America/Port-au-Prince","alternativeName":"Eastern Time","group":["America/Port-au-Prince"],"continentCode":"NA","continentName":"North America","countryName":"Haiti","countryCode":"HT","mainCities":["Port-au-Prince","Carrefour","Delmas","Port-de-Paix"],"rawOffsetInMinutes":-300,"abbreviation":"EST","rawFormat":"-05:00 Eastern Time - Port-au-Prince, Carrefour, Delmas, Port-de-Paix"},{"name":"America/Grand_Turk","alternativeName":"Eastern Time","group":["America/Grand_Turk"],"continentCode":"NA","continentName":"North America","countryName":"Turks and Caicos Islands","countryCode":"TC","mainCities":["Providenciales","Cockburn Town"],"rawOffsetInMinutes":-300,"abbreviation":"EST","rawFormat":"-05:00 Eastern Time - Providenciales, Cockburn Town"},{"name":"America/Toronto","alternativeName":"Eastern Time","group":["America/Iqaluit","America/Toronto","America/Pangnirtung","Canada/Eastern","America/Nassau","America/Montreal","America/Nipigon","America/Thunder_Bay"],"continentCode":"NA","continentName":"North America","countryName":"Canada","countryCode":"CA","mainCities":["Toronto","Montréal","Ottawa","Mississauga"],"rawOffsetInMinutes":-300,"abbreviation":"EST","rawFormat":"-05:00 Eastern Time - Toronto, Montréal, Ottawa, Mississauga"},{"name":"America/Guayaquil","alternativeName":"Ecuador Time","group":["America/Guayaquil"],"continentCode":"SA","continentName":"South America","countryName":"Ecuador","countryCode":"EC","mainCities":["Quito","Guayaquil","Cuenca","Santo Domingo de los Colorados"],"rawOffsetInMinutes":-300,"abbreviation":"ECT","rawFormat":"-05:00 Ecuador Time - Quito, Guayaquil, Cuenca, Santo Domingo de los Colorados"},{"name":"America/Lima","alternativeName":"Peru Time","group":["America/Lima"],"continentCode":"SA","continentName":"South America","countryName":"Peru","countryCode":"PE","mainCities":["Lima","Callao","Arequipa","Trujillo"],"rawOffsetInMinutes":-300,"abbreviation":"PET","rawFormat":"-05:00 Peru Time - Lima, Callao, Arequipa, Trujillo"},{"name":"America/Manaus","alternativeName":"Amazon Time","group":["America/Boa_Vista","America/Campo_Grande","America/Cuiaba","America/Manaus","America/Porto_Velho","Brazil/West"],"continentCode":"SA","continentName":"South America","countryName":"Brazil","countryCode":"BR","mainCities":["Manaus","Campo Grande","Cuiabá","Porto Velho"],"rawOffsetInMinutes":-240,"abbreviation":"AMT","rawFormat":"-04:00 Amazon Time - Manaus, Campo Grande, Cuiabá, Porto Velho"},{"name":"America/St_Kitts","alternativeName":"Atlantic Time","group":["America/St_Kitts"],"continentCode":"NA","continentName":"North America","countryName":"Saint Kitts and Nevis","countryCode":"KN","mainCities":["Basseterre"],"rawOffsetInMinutes":-240,"abbreviation":"AST","rawFormat":"-04:00 Atlantic Time - Basseterre"},{"name":"America/Blanc-Sablon","alternativeName":"Atlantic Time","group":["America/Blanc-Sablon"],"continentCode":"NA","continentName":"North America","countryName":"Canada","countryCode":"CA","mainCities":["Blanc-Sablon"],"rawOffsetInMinutes":-240,"abbreviation":"AST","rawFormat":"-04:00 Atlantic Time - Blanc-Sablon"},{"name":"America/Montserrat","alternativeName":"Atlantic Time","group":["America/Montserrat"],"continentCode":"NA","continentName":"North America","countryName":"Montserrat","countryCode":"MS","mainCities":["Brades","Plymouth"],"rawOffsetInMinutes":-240,"abbreviation":"AST","rawFormat":"-04:00 Atlantic Time - Brades, Plymouth"},{"name":"America/Barbados","alternativeName":"Atlantic Time","group":["America/Barbados"],"continentCode":"NA","continentName":"North America","countryName":"Barbados","countryCode":"BB","mainCities":["Bridgetown"],"rawOffsetInMinutes":-240,"abbreviation":"AST","rawFormat":"-04:00 Atlantic Time - Bridgetown"},{"name":"America/Port_of_Spain","alternativeName":"Atlantic Time","group":["America/Port_of_Spain"],"continentCode":"NA","continentName":"North America","countryName":"Trinidad and Tobago","countryCode":"TT","mainCities":["Chaguanas","Mon Repos","San Fernando","Port of Spain"],"rawOffsetInMinutes":-240,"abbreviation":"AST","rawFormat":"-04:00 Atlantic Time - Chaguanas, Mon Repos, San Fernando, Port of Spain"},{"name":"America/Martinique","alternativeName":"Atlantic Time","group":["America/Martinique"],"continentCode":"NA","continentName":"North America","countryName":"Martinique","countryCode":"MQ","mainCities":["Fort-de-France","Le Lamentin","Le Robert","Sainte-Marie"],"rawOffsetInMinutes":-240,"abbreviation":"AST","rawFormat":"-04:00 Atlantic Time - Fort-de-France, Le Lamentin, Le Robert, Sainte-Marie"},{"name":"America/St_Lucia","alternativeName":"Atlantic Time","group":["America/St_Lucia"],"continentCode":"NA","continentName":"North America","countryName":"Saint Lucia","countryCode":"LC","mainCities":["Gros Islet","Castries"],"rawOffsetInMinutes":-240,"abbreviation":"AST","rawFormat":"-04:00 Atlantic Time - Gros Islet, Castries"},{"name":"America/St_Barthelemy","alternativeName":"Atlantic Time","group":["America/St_Barthelemy"],"continentCode":"NA","continentName":"North America","countryName":"Saint Barthelemy","countryCode":"BL","mainCities":["Gustavia"],"rawOffsetInMinutes":-240,"abbreviation":"AST","rawFormat":"-04:00 Atlantic Time - Gustavia"},{"name":"America/Halifax","alternativeName":"Atlantic Time","group":["America/Glace_Bay","America/Goose_Bay","America/Halifax","America/Moncton","Canada/Atlantic"],"continentCode":"NA","continentName":"North America","countryName":"Canada","countryCode":"CA","mainCities":["Halifax","Sydney","Dartmouth","Moncton"],"rawOffsetInMinutes":-240,"abbreviation":"AST","rawFormat":"-04:00 Atlantic Time - Halifax, Sydney, Dartmouth, Moncton"},{"name":"Atlantic/Bermuda","alternativeName":"Atlantic Time","group":["Atlantic/Bermuda"],"continentCode":"NA","continentName":"North America","countryName":"Bermuda","countryCode":"BM","mainCities":["Hamilton"],"rawOffsetInMinutes":-240,"abbreviation":"AST","rawFormat":"-04:00 Atlantic Time - Hamilton"},{"name":"America/St_Vincent","alternativeName":"Atlantic Time","group":["America/St_Vincent"],"continentCode":"NA","continentName":"North America","countryName":"Saint Vincent and the Grenadines","countryCode":"VC","mainCities":["Kingstown","Calliaqua"],"rawOffsetInMinutes":-240,"abbreviation":"AST","rawFormat":"-04:00 Atlantic Time - Kingstown, Calliaqua"},{"name":"America/Kralendijk","alternativeName":"Atlantic Time","group":["America/Kralendijk"],"continentCode":"NA","continentName":"North America","countryName":"Bonaire, Saint Eustatius and Saba ","countryCode":"BQ","mainCities":["Kralendijk"],"rawOffsetInMinutes":-240,"abbreviation":"AST","rawFormat":"-04:00 Atlantic Time - Kralendijk"},{"name":"America/Guadeloupe","alternativeName":"Atlantic Time","group":["America/Guadeloupe"],"continentCode":"NA","continentName":"North America","countryName":"Guadeloupe","countryCode":"GP","mainCities":["Les Abymes","Baie-Mahault","Le Gosier","Petit-Bourg"],"rawOffsetInMinutes":-240,"abbreviation":"AST","rawFormat":"-04:00 Atlantic Time - Les Abymes, Baie-Mahault, Le Gosier, Petit-Bourg"},{"name":"America/Marigot","alternativeName":"Atlantic Time","group":["America/Marigot"],"continentCode":"NA","continentName":"North America","countryName":"Saint Martin","countryCode":"MF","mainCities":["Marigot"],"rawOffsetInMinutes":-240,"abbreviation":"AST","rawFormat":"-04:00 Atlantic Time - Marigot"},{"name":"America/Aruba","alternativeName":"Atlantic Time","group":["America/Aruba"],"continentCode":"NA","continentName":"North America","countryName":"Aruba","countryCode":"AW","mainCities":["Oranjestad","Noord","Tanki Leendert","San Nicolas"],"rawOffsetInMinutes":-240,"abbreviation":"AST","rawFormat":"-04:00 Atlantic Time - Oranjestad, Noord, Tanki Leendert, San Nicolas"},{"name":"America/Lower_Princes","alternativeName":"Atlantic Time","group":["America/Lower_Princes"],"continentCode":"NA","continentName":"North America","countryName":"Sint Maarten","countryCode":"SX","mainCities":["Philipsburg"],"rawOffsetInMinutes":-240,"abbreviation":"AST","rawFormat":"-04:00 Atlantic Time - Philipsburg"},{"name":"America/Tortola","alternativeName":"Atlantic Time","group":["America/Tortola"],"continentCode":"NA","continentName":"North America","countryName":"British Virgin Islands","countryCode":"VG","mainCities":["Road Town"],"rawOffsetInMinutes":-240,"abbreviation":"AST","rawFormat":"-04:00 Atlantic Time - Road Town"},{"name":"America/Dominica","alternativeName":"Atlantic Time","group":["America/Dominica"],"continentCode":"NA","continentName":"North America","countryName":"Dominica","countryCode":"DM","mainCities":["Roseau"],"rawOffsetInMinutes":-240,"abbreviation":"AST","rawFormat":"-04:00 Atlantic Time - Roseau"},{"name":"America/St_Thomas","alternativeName":"Atlantic Time","group":["America/St_Thomas"],"continentCode":"NA","continentName":"North America","countryName":"U.S. Virgin Islands","countryCode":"VI","mainCities":["Saint Croix","Charlotte Amalie"],"rawOffsetInMinutes":-240,"abbreviation":"AST","rawFormat":"-04:00 Atlantic Time - Saint Croix, Charlotte Amalie"},{"name":"America/Grenada","alternativeName":"Atlantic Time","group":["America/Grenada"],"continentCode":"NA","continentName":"North America","countryName":"Grenada","countryCode":"GD","mainCities":["Saint George's"],"rawOffsetInMinutes":-240,"abbreviation":"AST","rawFormat":"-04:00 Atlantic Time - Saint George's"},{"name":"America/Antigua","alternativeName":"Atlantic Time","group":["America/Antigua"],"continentCode":"NA","continentName":"North America","countryName":"Antigua and Barbuda","countryCode":"AG","mainCities":["Saint John’s"],"rawOffsetInMinutes":-240,"abbreviation":"AST","rawFormat":"-04:00 Atlantic Time - Saint John’s"},{"name":"America/Puerto_Rico","alternativeName":"Atlantic Time","group":["America/Puerto_Rico","America/Virgin","America/Anguilla","America/Antigua","America/Aruba","America/Blanc-Sablon","America/Curacao","America/Dominica","America/Grenada","America/Guadeloupe","America/Kralendijk","America/Lower_Princes","America/Marigot","America/Montserrat","America/Port_of_Spain","America/St_Barthelemy","America/St_Kitts","America/St_Lucia","America/St_Thomas","America/St_Vincent","America/Tortola"],"continentCode":"NA","continentName":"North America","countryName":"Puerto Rico","countryCode":"PR","mainCities":["San Juan","Bayamón","Carolina","Ponce"],"rawOffsetInMinutes":-240,"abbreviation":"AST","rawFormat":"-04:00 Atlantic Time - San Juan, Bayamón, Carolina, Ponce"},{"name":"America/Santo_Domingo","alternativeName":"Atlantic Time","group":["America/Santo_Domingo"],"continentCode":"NA","continentName":"North America","countryName":"Dominican Republic","countryCode":"DO","mainCities":["Santo Domingo","Santiago de los Caballeros","Santo Domingo Oeste","Santo Domingo Este"],"rawOffsetInMinutes":-240,"abbreviation":"AST","rawFormat":"-04:00 Atlantic Time - Santo Domingo, Santiago de los Caballeros, Santo Domingo Oeste, Santo Domingo Este"},{"name":"America/Anguilla","alternativeName":"Atlantic Time","group":["America/Anguilla"],"continentCode":"NA","continentName":"North America","countryName":"Anguilla","countryCode":"AI","mainCities":["The Valley"],"rawOffsetInMinutes":-240,"abbreviation":"AST","rawFormat":"-04:00 Atlantic Time - The Valley"},{"name":"America/Thule","alternativeName":"Atlantic Time","group":["America/Thule"],"continentCode":"NA","continentName":"North America","countryName":"Greenland","countryCode":"GL","mainCities":["Thule"],"rawOffsetInMinutes":-240,"abbreviation":"AST","rawFormat":"-04:00 Atlantic Time - Thule"},{"name":"America/Curacao","alternativeName":"Atlantic Time","group":["America/Curacao"],"continentCode":"NA","continentName":"North America","countryName":"Curacao","countryCode":"CW","mainCities":["Willemstad","Bandariba"],"rawOffsetInMinutes":-240,"abbreviation":"AST","rawFormat":"-04:00 Atlantic Time - Willemstad, Bandariba"},{"name":"America/La_Paz","alternativeName":"Bolivia Time","group":["America/La_Paz"],"continentCode":"SA","continentName":"South America","countryName":"Bolivia","countryCode":"BO","mainCities":["La Paz","Santa Cruz de la Sierra","Cochabamba","Sucre"],"rawOffsetInMinutes":-240,"abbreviation":"BOT","rawFormat":"-04:00 Bolivia Time - La Paz, Santa Cruz de la Sierra, Cochabamba, Sucre"},{"name":"America/Santiago","alternativeName":"Chile Time","group":["America/Santiago","Chile/Continental"],"continentCode":"SA","continentName":"South America","countryName":"Chile","countryCode":"CL","mainCities":["Santiago","Puente Alto","Maipú","Antofagasta"],"rawOffsetInMinutes":-240,"abbreviation":"CLT","rawFormat":"-04:00 Chile Time - Santiago, Puente Alto, Maipú, Antofagasta"},{"name":"America/Guyana","alternativeName":"Guyana Time","group":["America/Guyana"],"continentCode":"SA","continentName":"South America","countryName":"Guyana","countryCode":"GY","mainCities":["Georgetown","Linden","New Amsterdam"],"rawOffsetInMinutes":-240,"abbreviation":"GYT","rawFormat":"-04:00 Guyana Time - Georgetown, Linden, New Amsterdam"},{"name":"America/Caracas","alternativeName":"Venezuela Time","group":["America/Caracas"],"continentCode":"SA","continentName":"South America","countryName":"Venezuela","countryCode":"VE","mainCities":["Caracas","Maracaibo","Valencia","Barquisimeto"],"rawOffsetInMinutes":-240,"abbreviation":"VET","rawFormat":"-04:00 Venezuela Time - Caracas, Maracaibo, Valencia, Barquisimeto"},{"name":"America/St_Johns","alternativeName":"Newfoundland Time","group":["America/St_Johns","Canada/Newfoundland"],"continentCode":"NA","continentName":"North America","countryName":"Canada","countryCode":"CA","mainCities":["St. John's","Mount Pearl","Paradise","Corner Brook"],"rawOffsetInMinutes":-210,"abbreviation":"NST","rawFormat":"-03:30 Newfoundland Time - St. John's, Mount Pearl, Paradise, Corner Brook"},{"name":"America/Argentina/Buenos_Aires","alternativeName":"Argentina Time","group":["America/Argentina/Buenos_Aires","America/Argentina/Catamarca","America/Argentina/Cordoba","America/Argentina/Jujuy","America/Argentina/La_Rioja","America/Argentina/Mendoza","America/Argentina/Rio_Gallegos","America/Argentina/Salta","America/Argentina/San_Juan","America/Argentina/San_Luis","America/Argentina/Tucuman","America/Argentina/Ushuaia","America/Buenos_Aires","America/Catamarca","America/Argentina/ComodRivadavia","America/Cordoba","America/Rosario","America/Jujuy","America/Mendoza"],"continentCode":"SA","continentName":"South America","countryName":"Argentina","countryCode":"AR","mainCities":["Buenos Aires","Córdoba","Rosario","Mar del Plata"],"rawOffsetInMinutes":-180,"abbreviation":"ART","rawFormat":"-03:00 Argentina Time - Buenos Aires, Córdoba, Rosario, Mar del Plata"},{"name":"America/Sao_Paulo","alternativeName":"Brasilia Time","group":["America/Araguaina","America/Bahia","America/Belem","America/Fortaleza","America/Maceio","America/Recife","America/Santarem","America/Sao_Paulo","Brazil/East"],"continentCode":"SA","continentName":"South America","countryName":"Brazil","countryCode":"BR","mainCities":["São Paulo","Rio de Janeiro","Belo Horizonte","Salvador"],"rawOffsetInMinutes":-180,"abbreviation":"BRT","rawFormat":"-03:00 Brasilia Time - São Paulo, Rio de Janeiro, Belo Horizonte, Salvador"},{"name":"Antarctica/Palmer","alternativeName":"Chile Time","group":["Antarctica/Palmer","Antarctica/Rothera"],"continentCode":"AN","continentName":"Antarctica","countryName":"Antarctica","countryCode":"AQ","mainCities":["Palmer","Rothera"],"rawOffsetInMinutes":-180,"abbreviation":"CLT","rawFormat":"-03:00 Chile Time - Palmer, Rothera"},{"name":"America/Punta_Arenas","alternativeName":"Chile Time","group":["America/Coyhaique","America/Punta_Arenas"],"continentCode":"SA","continentName":"South America","countryName":"Chile","countryCode":"CL","mainCities":["Punta Arenas","Coyhaique","Puerto Natales","Puerto Aysén"],"rawOffsetInMinutes":-180,"abbreviation":"CLT","rawFormat":"-03:00 Chile Time - Punta Arenas, Coyhaique, Puerto Natales, Puerto Aysén"},{"name":"Atlantic/Stanley","alternativeName":"Falkland Islands Time","group":["Atlantic/Stanley"],"continentCode":"SA","continentName":"South America","countryName":"Falkland Islands","countryCode":"FK","mainCities":["Stanley"],"rawOffsetInMinutes":-180,"abbreviation":"FKST","rawFormat":"-03:00 Falkland Islands Time - Stanley"},{"name":"America/Cayenne","alternativeName":"French Guiana Time","group":["America/Cayenne"],"continentCode":"SA","continentName":"South America","countryName":"French Guiana","countryCode":"GF","mainCities":["Cayenne","Matoury","Saint-Laurent-du-Maroni","Kourou"],"rawOffsetInMinutes":-180,"abbreviation":"GFT","rawFormat":"-03:00 French Guiana Time - Cayenne, Matoury, Saint-Laurent-du-Maroni, Kourou"},{"name":"America/Asuncion","alternativeName":"Paraguay Time","group":["America/Asuncion"],"continentCode":"SA","continentName":"South America","countryName":"Paraguay","countryCode":"PY","mainCities":["Asunción","Ciudad del Este","San Lorenzo","Capiatá"],"rawOffsetInMinutes":-180,"abbreviation":"PYT","rawFormat":"-03:00 Paraguay Time - Asunción, Ciudad del Este, San Lorenzo, Capiatá"},{"name":"America/Miquelon","alternativeName":"St. Pierre & Miquelon Time","group":["America/Miquelon"],"continentCode":"NA","continentName":"North America","countryName":"Saint Pierre and Miquelon","countryCode":"PM","mainCities":["Saint-Pierre"],"rawOffsetInMinutes":-180,"abbreviation":"PM","rawFormat":"-03:00 St. Pierre & Miquelon Time - Saint-Pierre"},{"name":"America/Paramaribo","alternativeName":"Suriname Time","group":["America/Paramaribo"],"continentCode":"SA","continentName":"South America","countryName":"Suriname","countryCode":"SR","mainCities":["Paramaribo","Blauwgrond","Rainville","Flora"],"rawOffsetInMinutes":-180,"abbreviation":"SRT","rawFormat":"-03:00 Suriname Time - Paramaribo, Blauwgrond, Rainville, Flora"},{"name":"America/Montevideo","alternativeName":"Uruguay Time","group":["America/Montevideo"],"continentCode":"SA","continentName":"South America","countryName":"Uruguay","countryCode":"UY","mainCities":["Montevideo","Salto","Paysandú","Las Piedras"],"rawOffsetInMinutes":-180,"abbreviation":"UYT","rawFormat":"-03:00 Uruguay Time - Montevideo, Salto, Paysandú, Las Piedras"},{"name":"America/Noronha","alternativeName":"Fernando de Noronha Time","group":["America/Noronha","Brazil/DeNoronha"],"continentCode":"SA","continentName":"South America","countryName":"Brazil","countryCode":"BR","mainCities":["Noronha"],"rawOffsetInMinutes":-120,"abbreviation":"FNT","rawFormat":"-02:00 Fernando de Noronha Time - Noronha"},{"name":"America/Nuuk","alternativeName":"Greenland Time","group":["America/Nuuk","America/Scoresbysund","America/Godthab"],"continentCode":"NA","continentName":"North America","countryName":"Greenland","countryCode":"GL","mainCities":["Nuuk","Scoresbysund"],"rawOffsetInMinutes":-120,"abbreviation":"GMT-2","rawFormat":"-02:00 Greenland Time - Nuuk, Scoresbysund"},{"name":"Atlantic/South_Georgia","alternativeName":"South Georgia Time","group":["Atlantic/South_Georgia"],"continentCode":"AN","continentName":"Antarctica","countryName":"South Georgia and the South Sandwich Islands","countryCode":"GS","mainCities":["Grytviken"],"rawOffsetInMinutes":-120,"abbreviation":"GST","rawFormat":"-02:00 South Georgia Time - Grytviken"},{"name":"Atlantic/Azores","alternativeName":"Azores Time","group":["Atlantic/Azores"],"continentCode":"EU","continentName":"Europe","countryName":"Portugal","countryCode":"PT","mainCities":["Ponta Delgada"],"rawOffsetInMinutes":-60,"abbreviation":"AZOT","rawFormat":"-01:00 Azores Time - Ponta Delgada"},{"name":"Atlantic/Cape_Verde","alternativeName":"Cape Verde Time","group":["Atlantic/Cape_Verde"],"continentCode":"AF","continentName":"Africa","countryName":"Cabo Verde","countryCode":"CV","mainCities":["Praia","Mindelo","Espargos","Assomada"],"rawOffsetInMinutes":-60,"abbreviation":"CVT","rawFormat":"-01:00 Cape Verde Time - Praia, Mindelo, Espargos, Assomada"},{"name":"Africa/Abidjan","alternativeName":"Greenwich Mean Time","group":["Africa/Abidjan","Iceland","Africa/Accra","Africa/Bamako","Africa/Banjul","Africa/Conakry","Africa/Dakar","Africa/Freetown","Africa/Lome","Africa/Nouakchott","Africa/Ouagadougou","Atlantic/Reykjavik","Atlantic/St_Helena","Africa/Timbuktu"],"continentCode":"AF","continentName":"Africa","countryName":"Ivory Coast","countryCode":"CI","mainCities":["Abidjan","Abobo","Bouaké","Korhogo"],"rawOffsetInMinutes":0,"abbreviation":"GMT","rawFormat":"+00:00 Greenwich Mean Time - Abidjan, Abobo, Bouaké, Korhogo"},{"name":"Africa/Bamako","alternativeName":"Greenwich Mean Time","group":["Africa/Bamako"],"continentCode":"AF","continentName":"Africa","countryName":"Mali","countryCode":"ML","mainCities":["Bamako","Sikasso","Koutiala","Ségou"],"rawOffsetInMinutes":0,"abbreviation":"GMT","rawFormat":"+00:00 Greenwich Mean Time - Bamako, Sikasso, Koutiala, Ségou"},{"name":"Africa/Bissau","alternativeName":"Greenwich Mean Time","group":["Africa/Bissau"],"continentCode":"AF","continentName":"Africa","countryName":"Guinea-Bissau","countryCode":"GW","mainCities":["Bissau","Gabú","Bafatá","Xitole"],"rawOffsetInMinutes":0,"abbreviation":"GMT","rawFormat":"+00:00 Greenwich Mean Time - Bissau, Gabú, Bafatá, Xitole"},{"name":"Africa/Conakry","alternativeName":"Greenwich Mean Time","group":["Africa/Conakry"],"continentCode":"AF","continentName":"Africa","countryName":"Guinea","countryCode":"GN","mainCities":["Conakry","Camayenne","Nzérékoré","Kankan"],"rawOffsetInMinutes":0,"abbreviation":"GMT","rawFormat":"+00:00 Greenwich Mean Time - Conakry, Camayenne, Nzérékoré, Kankan"},{"name":"Africa/Dakar","alternativeName":"Greenwich Mean Time","group":["Africa/Dakar"],"continentCode":"AF","continentName":"Africa","countryName":"Senegal","countryCode":"SN","mainCities":["Dakar","Touba","Pikine","Guédiawaye"],"rawOffsetInMinutes":0,"abbreviation":"GMT","rawFormat":"+00:00 Greenwich Mean Time - Dakar, Touba, Pikine, Guédiawaye"},{"name":"America/Danmarkshavn","alternativeName":"Greenwich Mean Time","group":["America/Danmarkshavn"],"continentCode":"NA","continentName":"North America","countryName":"Greenland","countryCode":"GL","mainCities":["Danmarkshavn"],"rawOffsetInMinutes":0,"abbreviation":"GMT","rawFormat":"+00:00 Greenwich Mean Time - Danmarkshavn"},{"name":"Europe/Isle_of_Man","alternativeName":"Greenwich Mean Time","group":["Europe/Isle_of_Man"],"continentCode":"EU","continentName":"Europe","countryName":"Isle of Man","countryCode":"IM","mainCities":["Douglas"],"rawOffsetInMinutes":0,"abbreviation":"GMT","rawFormat":"+00:00 Greenwich Mean Time - Douglas"},{"name":"Europe/Dublin","alternativeName":"Greenwich Mean Time","group":["Europe/Dublin","Eire"],"continentCode":"EU","continentName":"Europe","countryName":"Ireland","countryCode":"IE","mainCities":["Dublin","South Dublin","Cork","Limerick"],"rawOffsetInMinutes":0,"abbreviation":"GMT","rawFormat":"+00:00 Greenwich Mean Time - Dublin, South Dublin, Cork, Limerick"},{"name":"Africa/Freetown","alternativeName":"Greenwich Mean Time","group":["Africa/Freetown"],"continentCode":"AF","continentName":"Africa","countryName":"Sierra Leone","countryCode":"SL","mainCities":["Freetown","Bo","Kenema","Koidu"],"rawOffsetInMinutes":0,"abbreviation":"GMT","rawFormat":"+00:00 Greenwich Mean Time - Freetown, Bo, Kenema, Koidu"},{"name":"Atlantic/St_Helena","alternativeName":"Greenwich Mean Time","group":["Atlantic/St_Helena"],"continentCode":"AF","continentName":"Africa","countryName":"Saint Helena","countryCode":"SH","mainCities":["Jamestown"],"rawOffsetInMinutes":0,"abbreviation":"GMT","rawFormat":"+00:00 Greenwich Mean Time - Jamestown"},{"name":"Africa/Accra","alternativeName":"Greenwich Mean Time","group":["Africa/Accra"],"continentCode":"AF","continentName":"Africa","countryName":"Ghana","countryCode":"GH","mainCities":["Kumasi","Accra","Tamale","Takoradi"],"rawOffsetInMinutes":0,"abbreviation":"GMT","rawFormat":"+00:00 Greenwich Mean Time - Kumasi, Accra, Tamale, Takoradi"},{"name":"Africa/Lome","alternativeName":"Greenwich Mean Time","group":["Africa/Lome"],"continentCode":"AF","continentName":"Africa","countryName":"Togo","countryCode":"TG","mainCities":["Lomé","Sokodé","Kara","Atakpamé"],"rawOffsetInMinutes":0,"abbreviation":"GMT","rawFormat":"+00:00 Greenwich Mean Time - Lomé, Sokodé, Kara, Atakpamé"},{"name":"Europe/London","alternativeName":"Greenwich Mean Time","group":["Europe/London","GB","GB-Eire","Europe/Guernsey","Europe/Isle_of_Man","Europe/Jersey","Europe/Belfast"],"continentCode":"EU","continentName":"Europe","countryName":"United Kingdom","countryCode":"GB","mainCities":["London","Birmingham","Glasgow","Manchester"],"rawOffsetInMinutes":0,"abbreviation":"GMT","rawFormat":"+00:00 Greenwich Mean Time - London, Birmingham, Glasgow, Manchester"},{"name":"Africa/Monrovia","alternativeName":"Greenwich Mean Time","group":["Africa/Monrovia"],"continentCode":"AF","continentName":"Africa","countryName":"Liberia","countryCode":"LR","mainCities":["Monrovia","Gbarnga","Buchanan","Ganta"],"rawOffsetInMinutes":0,"abbreviation":"GMT","rawFormat":"+00:00 Greenwich Mean Time - Monrovia, Gbarnga, Buchanan, Ganta"},{"name":"Africa/Nouakchott","alternativeName":"Greenwich Mean Time","group":["Africa/Nouakchott"],"continentCode":"AF","continentName":"Africa","countryName":"Mauritania","countryCode":"MR","mainCities":["Nouakchott","Nouadhibou","Kiffa","Dar Naim"],"rawOffsetInMinutes":0,"abbreviation":"GMT","rawFormat":"+00:00 Greenwich Mean Time - Nouakchott, Nouadhibou, Kiffa, Dar Naim"},{"name":"Africa/Ouagadougou","alternativeName":"Greenwich Mean Time","group":["Africa/Ouagadougou"],"continentCode":"AF","continentName":"Africa","countryName":"Burkina Faso","countryCode":"BF","mainCities":["Ouagadougou","Bobo-Dioulasso","Koudougou","Saaba"],"rawOffsetInMinutes":0,"abbreviation":"GMT","rawFormat":"+00:00 Greenwich Mean Time - Ouagadougou, Bobo-Dioulasso, Koudougou, Saaba"},{"name":"Atlantic/Reykjavik","alternativeName":"Greenwich Mean Time","group":["Atlantic/Reykjavik"],"continentCode":"EU","continentName":"Europe","countryName":"Iceland","countryCode":"IS","mainCities":["Reykjavík","Kópavogur","Hafnarfjörður","Reykjanesbær"],"rawOffsetInMinutes":0,"abbreviation":"GMT","rawFormat":"+00:00 Greenwich Mean Time - Reykjavík, Kópavogur, Hafnarfjörður, Reykjanesbær"},{"name":"Europe/Jersey","alternativeName":"Greenwich Mean Time","group":["Europe/Jersey"],"continentCode":"EU","continentName":"Europe","countryName":"Jersey","countryCode":"JE","mainCities":["Saint Helier"],"rawOffsetInMinutes":0,"abbreviation":"GMT","rawFormat":"+00:00 Greenwich Mean Time - Saint Helier"},{"name":"Europe/Guernsey","alternativeName":"Greenwich Mean Time","group":["Europe/Guernsey"],"continentCode":"EU","continentName":"Europe","countryName":"Guernsey","countryCode":"GG","mainCities":["Saint Peter Port"],"rawOffsetInMinutes":0,"abbreviation":"GMT","rawFormat":"+00:00 Greenwich Mean Time - Saint Peter Port"},{"name":"Africa/Banjul","alternativeName":"Greenwich Mean Time","group":["Africa/Banjul"],"continentCode":"AF","continentName":"Africa","countryName":"Gambia","countryCode":"GM","mainCities":["Serekunda","Brikama","Bununka Kunda","Sukuta"],"rawOffsetInMinutes":0,"abbreviation":"GMT","rawFormat":"+00:00 Greenwich Mean Time - Serekunda, Brikama, Bununka Kunda, Sukuta"},{"name":"Africa/Sao_Tome","alternativeName":"Greenwich Mean Time","group":["Africa/Sao_Tome"],"continentCode":"AF","continentName":"Africa","countryName":"Sao Tome and Principe","countryCode":"ST","mainCities":["São Tomé"],"rawOffsetInMinutes":0,"abbreviation":"GMT","rawFormat":"+00:00 Greenwich Mean Time - São Tomé"},{"name":"Antarctica/Troll","alternativeName":"Greenwich Mean Time","group":["Antarctica/Troll"],"continentCode":"AN","continentName":"Antarctica","countryName":"Antarctica","countryCode":"AQ","mainCities":["Troll"],"rawOffsetInMinutes":0,"abbreviation":"GMT","rawFormat":"+00:00 Greenwich Mean Time - Troll"},{"name":"Africa/Casablanca","alternativeName":"Western European Time","group":["Africa/Casablanca"],"continentCode":"AF","continentName":"Africa","countryName":"Morocco","countryCode":"MA","mainCities":["Casablanca","Rabat","Fes","Tangier"],"rawOffsetInMinutes":0,"abbreviation":"WET","rawFormat":"+00:00 Western European Time - Casablanca, Rabat, Fes, Tangier"},{"name":"Africa/El_Aaiun","alternativeName":"Western European Time","group":["Africa/El_Aaiun"],"continentCode":"AF","continentName":"Africa","countryName":"Western Sahara","countryCode":"EH","mainCities":["Laayoune","Dakhla","Boujdour"],"rawOffsetInMinutes":0,"abbreviation":"WET","rawFormat":"+00:00 Western European Time - Laayoune, Dakhla, Boujdour"},{"name":"Atlantic/Canary","alternativeName":"Western European Time","group":["Atlantic/Canary"],"continentCode":"EU","continentName":"Europe","countryName":"Spain","countryCode":"ES","mainCities":["Las Palmas de Gran Canaria","Santa Cruz de Tenerife","La Laguna","Telde"],"rawOffsetInMinutes":0,"abbreviation":"WET","rawFormat":"+00:00 Western European Time - Las Palmas de Gran Canaria, Santa Cruz de Tenerife, La Laguna, Telde"},{"name":"Europe/Lisbon","alternativeName":"Western European Time","group":["Atlantic/Madeira","Europe/Lisbon","Portugal","WET"],"continentCode":"EU","continentName":"Europe","countryName":"Portugal","countryCode":"PT","mainCities":["Lisbon","Porto","Amadora","Braga"],"rawOffsetInMinutes":0,"abbreviation":"WET","rawFormat":"+00:00 Western European Time - Lisbon, Porto, Amadora, Braga"},{"name":"Atlantic/Faroe","alternativeName":"Western European Time","group":["Atlantic/Faroe","Atlantic/Faeroe"],"continentCode":"EU","continentName":"Europe","countryName":"Faroe Islands","countryCode":"FO","mainCities":["Tórshavn"],"rawOffsetInMinutes":0,"abbreviation":"WET","rawFormat":"+00:00 Western European Time - Tórshavn"},{"name":"Africa/Windhoek","alternativeName":"Central Africa Time","group":["Africa/Windhoek"],"continentCode":"AF","continentName":"Africa","countryName":"Namibia","countryCode":"NA","mainCities":["Windhoek","Rundu","Walvis Bay","Swakopmund"],"rawOffsetInMinutes":60,"abbreviation":"CAT","rawFormat":"+01:00 Central Africa Time - Windhoek, Rundu, Walvis Bay, Swakopmund"},{"name":"Africa/Algiers","alternativeName":"Central European Time","group":["Africa/Algiers"],"continentCode":"AF","continentName":"Africa","countryName":"Algeria","countryCode":"DZ","mainCities":["Algiers","Oran","Constantine","Annaba"],"rawOffsetInMinutes":60,"abbreviation":"CET","rawFormat":"+01:00 Central European Time - Algiers, Oran, Constantine, Annaba"},{"name":"Europe/Andorra","alternativeName":"Central European Time","group":["Europe/Andorra"],"continentCode":"EU","continentName":"Europe","countryName":"Andorra","countryCode":"AD","mainCities":["Andorra la Vella","les Escaldes"],"rawOffsetInMinutes":60,"abbreviation":"CET","rawFormat":"+01:00 Central European Time - Andorra la Vella, les Escaldes"},{"name":"Europe/Belgrade","alternativeName":"Central European Time","group":["Europe/Belgrade","Europe/Ljubljana","Europe/Podgorica","Europe/Sarajevo","Europe/Skopje","Europe/Zagreb"],"continentCode":"EU","continentName":"Europe","countryName":"Serbia","countryCode":"RS","mainCities":["Belgrade","Niš","Novi Sad","Zemun"],"rawOffsetInMinutes":60,"abbreviation":"CET","rawFormat":"+01:00 Central European Time - Belgrade, Niš, Novi Sad, Zemun"},{"name":"Europe/Berlin","alternativeName":"Central European Time","group":["Europe/Berlin","Europe/Busingen","Arctic/Longyearbyen","Europe/Copenhagen","Europe/Oslo","Europe/Stockholm","Atlantic/Jan_Mayen"],"continentCode":"EU","continentName":"Europe","countryName":"Germany","countryCode":"DE","mainCities":["Berlin","Hamburg","Munich","Köln"],"rawOffsetInMinutes":60,"abbreviation":"CET","rawFormat":"+01:00 Central European Time - Berlin, Hamburg, Munich, Köln"},{"name":"Europe/Bratislava","alternativeName":"Central European Time","group":["Europe/Bratislava"],"continentCode":"EU","continentName":"Europe","countryName":"Slovakia","countryCode":"SK","mainCities":["Bratislava","Košice","Petržalka","Nitra"],"rawOffsetInMinutes":60,"abbreviation":"CET","rawFormat":"+01:00 Central European Time - Bratislava, Košice, Petržalka, Nitra"},{"name":"Europe/Brussels","alternativeName":"Central European Time","group":["Europe/Brussels","CET","MET","Europe/Amsterdam","Europe/Luxembourg"],"continentCode":"EU","continentName":"Europe","countryName":"Belgium","countryCode":"BE","mainCities":["Brussels","Antwerpen","Gent","Charleroi"],"rawOffsetInMinutes":60,"abbreviation":"CET","rawFormat":"+01:00 Central European Time - Brussels, Antwerpen, Gent, Charleroi"},{"name":"Europe/Budapest","alternativeName":"Central European Time","group":["Europe/Budapest"],"continentCode":"EU","continentName":"Europe","countryName":"Hungary","countryCode":"HU","mainCities":["Budapest","Debrecen","Szeged","Miskolc"],"rawOffsetInMinutes":60,"abbreviation":"CET","rawFormat":"+01:00 Central European Time - Budapest, Debrecen, Szeged, Miskolc"},{"name":"Europe/Copenhagen","alternativeName":"Central European Time","group":["Europe/Copenhagen"],"continentCode":"EU","continentName":"Europe","countryName":"Denmark","countryCode":"DK","mainCities":["Copenhagen","Århus","Odense","Aalborg"],"rawOffsetInMinutes":60,"abbreviation":"CET","rawFormat":"+01:00 Central European Time - Copenhagen, Århus, Odense, Aalborg"},{"name":"Europe/Gibraltar","alternativeName":"Central European Time","group":["Europe/Gibraltar"],"continentCode":"EU","continentName":"Europe","countryName":"Gibraltar","countryCode":"GI","mainCities":["Gibraltar"],"rawOffsetInMinutes":60,"abbreviation":"CET","rawFormat":"+01:00 Central European Time - Gibraltar"},{"name":"Europe/Ljubljana","alternativeName":"Central European Time","group":["Europe/Ljubljana"],"continentCode":"EU","continentName":"Europe","countryName":"Slovenia","countryCode":"SI","mainCities":["Ljubljana","Maribor","Celje","Kranj"],"rawOffsetInMinutes":60,"abbreviation":"CET","rawFormat":"+01:00 Central European Time - Ljubljana, Maribor, Celje, Kranj"},{"name":"Arctic/Longyearbyen","alternativeName":"Central European Time","group":["Arctic/Longyearbyen"],"continentCode":"EU","continentName":"Europe","countryName":"Svalbard and Jan Mayen","countryCode":"SJ","mainCities":["Longyearbyen"],"rawOffsetInMinutes":60,"abbreviation":"CET","rawFormat":"+01:00 Central European Time - Longyearbyen"},{"name":"Europe/Luxembourg","alternativeName":"Central European Time","group":["Europe/Luxembourg"],"continentCode":"EU","continentName":"Europe","countryName":"Luxembourg","countryCode":"LU","mainCities":["Luxembourg","Esch-sur-Alzette","Dudelange"],"rawOffsetInMinutes":60,"abbreviation":"CET","rawFormat":"+01:00 Central European Time - Luxembourg, Esch-sur-Alzette, Dudelange"},{"name":"Europe/Madrid","alternativeName":"Central European Time","group":["Africa/Ceuta","Europe/Madrid"],"continentCode":"EU","continentName":"Europe","countryName":"Spain","countryCode":"ES","mainCities":["Madrid","Barcelona","Valencia","Zaragoza"],"rawOffsetInMinutes":60,"abbreviation":"CET","rawFormat":"+01:00 Central European Time - Madrid, Barcelona, Valencia, Zaragoza"},{"name":"Europe/Monaco","alternativeName":"Central European Time","group":["Europe/Monaco"],"continentCode":"EU","continentName":"Europe","countryName":"Monaco","countryCode":"MC","mainCities":["Monaco","Monte-Carlo"],"rawOffsetInMinutes":60,"abbreviation":"CET","rawFormat":"+01:00 Central European Time - Monaco, Monte-Carlo"},{"name":"Europe/Oslo","alternativeName":"Central European Time","group":["Europe/Oslo"],"continentCode":"EU","continentName":"Europe","countryName":"Norway","countryCode":"NO","mainCities":["Oslo","Bergen","Trondheim","Stavanger"],"rawOffsetInMinutes":60,"abbreviation":"CET","rawFormat":"+01:00 Central European Time - Oslo, Bergen, Trondheim, Stavanger"},{"name":"Europe/Paris","alternativeName":"Central European Time","group":["Europe/Paris","Europe/Monaco"],"continentCode":"EU","continentName":"Europe","countryName":"France","countryCode":"FR","mainCities":["Paris","Marseille","Lyon","Toulouse"],"rawOffsetInMinutes":60,"abbreviation":"CET","rawFormat":"+01:00 Central European Time - Paris, Marseille, Lyon, Toulouse"},{"name":"Europe/Podgorica","alternativeName":"Central European Time","group":["Europe/Podgorica"],"continentCode":"EU","continentName":"Europe","countryName":"Montenegro","countryCode":"ME","mainCities":["Podgorica","Nikšić","Herceg Novi","Pljevlja"],"rawOffsetInMinutes":60,"abbreviation":"CET","rawFormat":"+01:00 Central European Time - Podgorica, Nikšić, Herceg Novi, Pljevlja"},{"name":"Europe/Prague","alternativeName":"Central European Time","group":["Europe/Prague","Europe/Bratislava"],"continentCode":"EU","continentName":"Europe","countryName":"Czechia","countryCode":"CZ","mainCities":["Prague","Brno","Ostrava","Pilsen"],"rawOffsetInMinutes":60,"abbreviation":"CET","rawFormat":"+01:00 Central European Time - Prague, Brno, Ostrava, Pilsen"},{"name":"Europe/Rome","alternativeName":"Central European Time","group":["Europe/Rome","Europe/San_Marino","Europe/Vatican"],"continentCode":"EU","continentName":"Europe","countryName":"Italy","countryCode":"IT","mainCities":["Rome","Milan","Naples","Turin"],"rawOffsetInMinutes":60,"abbreviation":"CET","rawFormat":"+01:00 Central European Time - Rome, Milan, Naples, Turin"},{"name":"Europe/Amsterdam","alternativeName":"Central European Time","group":["Europe/Amsterdam"],"continentCode":"EU","continentName":"Europe","countryName":"The Netherlands","countryCode":"NL","mainCities":["Rotterdam","Amsterdam","The Hague","Utrecht"],"rawOffsetInMinutes":60,"abbreviation":"CET","rawFormat":"+01:00 Central European Time - Rotterdam, Amsterdam, The Hague, Utrecht"},{"name":"Europe/San_Marino","alternativeName":"Central European Time","group":["Europe/San_Marino"],"continentCode":"EU","continentName":"Europe","countryName":"San Marino","countryCode":"SM","mainCities":["San Marino"],"rawOffsetInMinutes":60,"abbreviation":"CET","rawFormat":"+01:00 Central European Time - San Marino"},{"name":"Europe/Malta","alternativeName":"Central European Time","group":["Europe/Malta"],"continentCode":"EU","continentName":"Europe","countryName":"Malta","countryCode":"MT","mainCities":["San Pawl il-Baħar","Birkirkara","Mosta","Sliema"],"rawOffsetInMinutes":60,"abbreviation":"CET","rawFormat":"+01:00 Central European Time - San Pawl il-Baħar, Birkirkara, Mosta, Sliema"},{"name":"Europe/Sarajevo","alternativeName":"Central European Time","group":["Europe/Sarajevo"],"continentCode":"EU","continentName":"Europe","countryName":"Bosnia and Herzegovina","countryCode":"BA","mainCities":["Sarajevo","Banja Luka","Zenica","Tuzla"],"rawOffsetInMinutes":60,"abbreviation":"CET","rawFormat":"+01:00 Central European Time - Sarajevo, Banja Luka, Zenica, Tuzla"},{"name":"Europe/Skopje","alternativeName":"Central European Time","group":["Europe/Skopje"],"continentCode":"EU","continentName":"Europe","countryName":"North Macedonia","countryCode":"MK","mainCities":["Skopje","Kumanovo","Prilep","Bitola"],"rawOffsetInMinutes":60,"abbreviation":"CET","rawFormat":"+01:00 Central European Time - Skopje, Kumanovo, Prilep, Bitola"},{"name":"Europe/Stockholm","alternativeName":"Central European Time","group":["Europe/Stockholm"],"continentCode":"EU","continentName":"Europe","countryName":"Sweden","countryCode":"SE","mainCities":["Stockholm","Göteborg","Malmö","Uppsala"],"rawOffsetInMinutes":60,"abbreviation":"CET","rawFormat":"+01:00 Central European Time - Stockholm, Göteborg, Malmö, Uppsala"},{"name":"Europe/Tirane","alternativeName":"Central European Time","group":["Europe/Tirane"],"continentCode":"EU","continentName":"Europe","countryName":"Albania","countryCode":"AL","mainCities":["Tirana","Durrës","Vlorë","Elbasan"],"rawOffsetInMinutes":60,"abbreviation":"CET","rawFormat":"+01:00 Central European Time - Tirana, Durrës, Vlorë, Elbasan"},{"name":"Africa/Tunis","alternativeName":"Central European Time","group":["Africa/Tunis"],"continentCode":"AF","continentName":"Africa","countryName":"Tunisia","countryCode":"TN","mainCities":["Tunis","Sfax","Sousse","Kairouan"],"rawOffsetInMinutes":60,"abbreviation":"CET","rawFormat":"+01:00 Central European Time - Tunis, Sfax, Sousse, Kairouan"},{"name":"Europe/Vaduz","alternativeName":"Central European Time","group":["Europe/Vaduz"],"continentCode":"EU","continentName":"Europe","countryName":"Liechtenstein","countryCode":"LI","mainCities":["Vaduz"],"rawOffsetInMinutes":60,"abbreviation":"CET","rawFormat":"+01:00 Central European Time - Vaduz"},{"name":"Europe/Vatican","alternativeName":"Central European Time","group":["Europe/Vatican"],"continentCode":"EU","continentName":"Europe","countryName":"Vatican","countryCode":"VA","mainCities":["Vatican City"],"rawOffsetInMinutes":60,"abbreviation":"CET","rawFormat":"+01:00 Central European Time - Vatican City"},{"name":"Europe/Vienna","alternativeName":"Central European Time","group":["Europe/Vienna"],"continentCode":"EU","continentName":"Europe","countryName":"Austria","countryCode":"AT","mainCities":["Vienna","Graz","Linz","Favoriten"],"rawOffsetInMinutes":60,"abbreviation":"CET","rawFormat":"+01:00 Central European Time - Vienna, Graz, Linz, Favoriten"},{"name":"Europe/Warsaw","alternativeName":"Central European Time","group":["Europe/Warsaw","Poland"],"continentCode":"EU","continentName":"Europe","countryName":"Poland","countryCode":"PL","mainCities":["Warsaw","Łódź","Kraków","Wrocław"],"rawOffsetInMinutes":60,"abbreviation":"CET","rawFormat":"+01:00 Central European Time - Warsaw, Łódź, Kraków, Wrocław"},{"name":"Europe/Zagreb","alternativeName":"Central European Time","group":["Europe/Zagreb"],"continentCode":"EU","continentName":"Europe","countryName":"Croatia","countryCode":"HR","mainCities":["Zagreb","Split","Rijeka","Osijek"],"rawOffsetInMinutes":60,"abbreviation":"CET","rawFormat":"+01:00 Central European Time - Zagreb, Split, Rijeka, Osijek"},{"name":"Europe/Zurich","alternativeName":"Central European Time","group":["Europe/Zurich","Europe/Busingen","Europe/Vaduz"],"continentCode":"EU","continentName":"Europe","countryName":"Switzerland","countryCode":"CH","mainCities":["Zürich","Genève","Basel","Lausanne"],"rawOffsetInMinutes":60,"abbreviation":"CET","rawFormat":"+01:00 Central European Time - Zürich, Genève, Basel, Lausanne"},{"name":"Africa/Bangui","alternativeName":"West Africa Time","group":["Africa/Bangui"],"continentCode":"AF","continentName":"Africa","countryName":"Central African Republic","countryCode":"CF","mainCities":["Bangui","Bimbo","Bégoua","Carnot"],"rawOffsetInMinutes":60,"abbreviation":"WAT","rawFormat":"+01:00 West Africa Time - Bangui, Bimbo, Bégoua, Carnot"},{"name":"Africa/Malabo","alternativeName":"West Africa Time","group":["Africa/Malabo"],"continentCode":"AF","continentName":"Africa","countryName":"Equatorial Guinea","countryCode":"GQ","mainCities":["Bata","Malabo","Ebebiyin"],"rawOffsetInMinutes":60,"abbreviation":"WAT","rawFormat":"+01:00 West Africa Time - Bata, Malabo, Ebebiyin"},{"name":"Africa/Brazzaville","alternativeName":"West Africa Time","group":["Africa/Brazzaville"],"continentCode":"AF","continentName":"Africa","countryName":"Republic of the Congo","countryCode":"CG","mainCities":["Brazzaville","Pointe-Noire","Dolisie","Nkayi"],"rawOffsetInMinutes":60,"abbreviation":"WAT","rawFormat":"+01:00 West Africa Time - Brazzaville, Pointe-Noire, Dolisie, Nkayi"},{"name":"Africa/Porto-Novo","alternativeName":"West Africa Time","group":["Africa/Porto-Novo"],"continentCode":"AF","continentName":"Africa","countryName":"Benin","countryCode":"BJ","mainCities":["Cotonou","Abomey-Calavi","Porto-Novo","Parakou"],"rawOffsetInMinutes":60,"abbreviation":"WAT","rawFormat":"+01:00 West Africa Time - Cotonou, Abomey-Calavi, Porto-Novo, Parakou"},{"name":"Africa/Douala","alternativeName":"West Africa Time","group":["Africa/Douala"],"continentCode":"AF","continentName":"Africa","countryName":"Cameroon","countryCode":"CM","mainCities":["Douala","Yaoundé","Bamenda","Bafoussam"],"rawOffsetInMinutes":60,"abbreviation":"WAT","rawFormat":"+01:00 West Africa Time - Douala, Yaoundé, Bamenda, Bafoussam"},{"name":"Africa/Kinshasa","alternativeName":"West Africa Time","group":["Africa/Kinshasa"],"continentCode":"AF","continentName":"Africa","countryName":"Democratic Republic of the Congo","countryCode":"CD","mainCities":["Kinshasa","Kikwit","Masina","Mbandaka"],"rawOffsetInMinutes":60,"abbreviation":"WAT","rawFormat":"+01:00 West Africa Time - Kinshasa, Kikwit, Masina, Mbandaka"},{"name":"Africa/Lagos","alternativeName":"West Africa Time","group":["Africa/Lagos","Africa/Bangui","Africa/Brazzaville","Africa/Douala","Africa/Kinshasa","Africa/Libreville","Africa/Luanda","Africa/Malabo","Africa/Niamey","Africa/Porto-Novo"],"continentCode":"AF","continentName":"Africa","countryName":"Nigeria","countryCode":"NG","mainCities":["Lagos","Kano","Ibadan","Abuja"],"rawOffsetInMinutes":60,"abbreviation":"WAT","rawFormat":"+01:00 West Africa Time - Lagos, Kano, Ibadan, Abuja"},{"name":"Africa/Libreville","alternativeName":"West Africa Time","group":["Africa/Libreville"],"continentCode":"AF","continentName":"Africa","countryName":"Gabon","countryCode":"GA","mainCities":["Libreville","Port-Gentil","Franceville","Owendo"],"rawOffsetInMinutes":60,"abbreviation":"WAT","rawFormat":"+01:00 West Africa Time - Libreville, Port-Gentil, Franceville, Owendo"},{"name":"Africa/Luanda","alternativeName":"West Africa Time","group":["Africa/Luanda"],"continentCode":"AF","continentName":"Africa","countryName":"Angola","countryCode":"AO","mainCities":["Luanda","Lubango","Huambo","Benguela"],"rawOffsetInMinutes":60,"abbreviation":"WAT","rawFormat":"+01:00 West Africa Time - Luanda, Lubango, Huambo, Benguela"},{"name":"Africa/Ndjamena","alternativeName":"West Africa Time","group":["Africa/Ndjamena"],"continentCode":"AF","continentName":"Africa","countryName":"Chad","countryCode":"TD","mainCities":["N'Djamena","Moundou","Abéché","Sarh"],"rawOffsetInMinutes":60,"abbreviation":"WAT","rawFormat":"+01:00 West Africa Time - N'Djamena, Moundou, Abéché, Sarh"},{"name":"Africa/Niamey","alternativeName":"West Africa Time","group":["Africa/Niamey"],"continentCode":"AF","continentName":"Africa","countryName":"Niger","countryCode":"NE","mainCities":["Niamey","Maradi","Zinder","Tahoua"],"rawOffsetInMinutes":60,"abbreviation":"WAT","rawFormat":"+01:00 West Africa Time - Niamey, Maradi, Zinder, Tahoua"},{"name":"Africa/Bujumbura","alternativeName":"Central Africa Time","group":["Africa/Bujumbura"],"continentCode":"AF","continentName":"Africa","countryName":"Burundi","countryCode":"BI","mainCities":["Bujumbura","Gitega","Ngozi","Rumonge"],"rawOffsetInMinutes":120,"abbreviation":"CAT","rawFormat":"+02:00 Central Africa Time - Bujumbura, Gitega, Ngozi, Rumonge"},{"name":"Africa/Gaborone","alternativeName":"Central Africa Time","group":["Africa/Gaborone"],"continentCode":"AF","continentName":"Africa","countryName":"Botswana","countryCode":"BW","mainCities":["Gaborone","Francistown","Mogoditshane","Maun"],"rawOffsetInMinutes":120,"abbreviation":"CAT","rawFormat":"+02:00 Central Africa Time - Gaborone, Francistown, Mogoditshane, Maun"},{"name":"Africa/Harare","alternativeName":"Central Africa Time","group":["Africa/Harare"],"continentCode":"AF","continentName":"Africa","countryName":"Zimbabwe","countryCode":"ZW","mainCities":["Harare","Bulawayo","Chitungwiza","Mutare"],"rawOffsetInMinutes":120,"abbreviation":"CAT","rawFormat":"+02:00 Central Africa Time - Harare, Bulawayo, Chitungwiza, Mutare"},{"name":"Africa/Juba","alternativeName":"Central Africa Time","group":["Africa/Juba"],"continentCode":"AF","continentName":"Africa","countryName":"South Sudan","countryCode":"SS","mainCities":["Juba","Winejok","Yei","Malakal"],"rawOffsetInMinutes":120,"abbreviation":"CAT","rawFormat":"+02:00 Central Africa Time - Juba, Winejok, Yei, Malakal"},{"name":"Africa/Khartoum","alternativeName":"Central Africa Time","group":["Africa/Khartoum"],"continentCode":"AF","continentName":"Africa","countryName":"Sudan","countryCode":"SD","mainCities":["Khartoum","Omdurman","Khartoum North","Nyala"],"rawOffsetInMinutes":120,"abbreviation":"CAT","rawFormat":"+02:00 Central Africa Time - Khartoum, Omdurman, Khartoum North, Nyala"},{"name":"Africa/Kigali","alternativeName":"Central Africa Time","group":["Africa/Kigali"],"continentCode":"AF","continentName":"Africa","countryName":"Rwanda","countryCode":"RW","mainCities":["Kigali","Gisenyi","Musanze","Nyagatare"],"rawOffsetInMinutes":120,"abbreviation":"CAT","rawFormat":"+02:00 Central Africa Time - Kigali, Gisenyi, Musanze, Nyagatare"},{"name":"Africa/Blantyre","alternativeName":"Central Africa Time","group":["Africa/Blantyre"],"continentCode":"AF","continentName":"Africa","countryName":"Malawi","countryCode":"MW","mainCities":["Lilongwe","Blantyre","Mzuzu","Zomba"],"rawOffsetInMinutes":120,"abbreviation":"CAT","rawFormat":"+02:00 Central Africa Time - Lilongwe, Blantyre, Mzuzu, Zomba"},{"name":"Africa/Lubumbashi","alternativeName":"Central Africa Time","group":["Africa/Lubumbashi"],"continentCode":"AF","continentName":"Africa","countryName":"Democratic Republic of the Congo","countryCode":"CD","mainCities":["Lubumbashi","Mbuji-Mayi","Kananga","Kisangani"],"rawOffsetInMinutes":120,"abbreviation":"CAT","rawFormat":"+02:00 Central Africa Time - Lubumbashi, Mbuji-Mayi, Kananga, Kisangani"},{"name":"Africa/Lusaka","alternativeName":"Central Africa Time","group":["Africa/Lusaka"],"continentCode":"AF","continentName":"Africa","countryName":"Zambia","countryCode":"ZM","mainCities":["Lusaka","Kitwe","Ndola","Chipata"],"rawOffsetInMinutes":120,"abbreviation":"CAT","rawFormat":"+02:00 Central Africa Time - Lusaka, Kitwe, Ndola, Chipata"},{"name":"Africa/Maputo","alternativeName":"Central Africa Time","group":["Africa/Maputo","Africa/Blantyre","Africa/Bujumbura","Africa/Gaborone","Africa/Harare","Africa/Kigali","Africa/Lubumbashi","Africa/Lusaka"],"continentCode":"AF","continentName":"Africa","countryName":"Mozambique","countryCode":"MZ","mainCities":["Maputo","Matola","Nampula","Beira"],"rawOffsetInMinutes":120,"abbreviation":"CAT","rawFormat":"+02:00 Central Africa Time - Maputo, Matola, Nampula, Beira"},{"name":"Europe/Athens","alternativeName":"Eastern European Time","group":["Europe/Athens","EET"],"continentCode":"EU","continentName":"Europe","countryName":"Greece","countryCode":"GR","mainCities":["Athens","Thessaloníki","Pátra","Piraeus"],"rawOffsetInMinutes":120,"abbreviation":"EET","rawFormat":"+02:00 Eastern European Time - Athens, Thessaloníki, Pátra, Piraeus"},{"name":"Asia/Beirut","alternativeName":"Eastern European Time","group":["Asia/Beirut"],"continentCode":"AS","continentName":"Asia","countryName":"Lebanon","countryCode":"LB","mainCities":["Beirut","Ra’s Bayrūt","Tripoli","Sidon"],"rawOffsetInMinutes":120,"abbreviation":"EET","rawFormat":"+02:00 Eastern European Time - Beirut, Ra’s Bayrūt, Tripoli, Sidon"},{"name":"Europe/Bucharest","alternativeName":"Eastern European Time","group":["Europe/Bucharest"],"continentCode":"EU","continentName":"Europe","countryName":"Romania","countryCode":"RO","mainCities":["Bucharest","Sector 3","Iaşi","Sector 6"],"rawOffsetInMinutes":120,"abbreviation":"EET","rawFormat":"+02:00 Eastern European Time - Bucharest, Sector 3, Iaşi, Sector 6"},{"name":"Africa/Cairo","alternativeName":"Eastern European Time","group":["Africa/Cairo","Egypt"],"continentCode":"AF","continentName":"Africa","countryName":"Egypt","countryCode":"EG","mainCities":["Cairo","Alexandria","Giza","Shubrā al Khaymah"],"rawOffsetInMinutes":120,"abbreviation":"EET","rawFormat":"+02:00 Eastern European Time - Cairo, Alexandria, Giza, Shubrā al Khaymah"},{"name":"Europe/Chisinau","alternativeName":"Eastern European Time","group":["Europe/Chisinau","Europe/Tiraspol"],"continentCode":"EU","continentName":"Europe","countryName":"Moldova","countryCode":"MD","mainCities":["Chisinau","Tiraspol","Bălţi","Bender"],"rawOffsetInMinutes":120,"abbreviation":"EET","rawFormat":"+02:00 Eastern European Time - Chisinau, Tiraspol, Bălţi, Bender"},{"name":"Asia/Hebron","alternativeName":"Eastern European Time","group":["Asia/Gaza","Asia/Hebron"],"continentCode":"AS","continentName":"Asia","countryName":"Palestinian Territory","countryCode":"PS","mainCities":["East Jerusalem","Gaza","Khān Yūnis","Jabālyā"],"rawOffsetInMinutes":120,"abbreviation":"EET","rawFormat":"+02:00 Eastern European Time - East Jerusalem, Gaza, Khān Yūnis, Jabālyā"},{"name":"Europe/Helsinki","alternativeName":"Eastern European Time","group":["Europe/Helsinki","Europe/Mariehamn"],"continentCode":"EU","continentName":"Europe","countryName":"Finland","countryCode":"FI","mainCities":["Helsinki","Espoo","Tampere","Vantaa"],"rawOffsetInMinutes":120,"abbreviation":"EET","rawFormat":"+02:00 Eastern European Time - Helsinki, Espoo, Tampere, Vantaa"},{"name":"Europe/Kaliningrad","alternativeName":"Eastern European Time","group":["Europe/Kaliningrad"],"continentCode":"EU","continentName":"Europe","countryName":"Russia","countryCode":"RU","mainCities":["Kaliningrad","Chernyakhovsk","Sovetsk","Baltiysk"],"rawOffsetInMinutes":120,"abbreviation":"EET","rawFormat":"+02:00 Eastern European Time - Kaliningrad, Chernyakhovsk, Sovetsk, Baltiysk"},{"name":"Europe/Kyiv","alternativeName":"Eastern European Time","group":["Europe/Kyiv","Europe/Uzhgorod","Europe/Zaporozhye","Europe/Kiev"],"continentCode":"EU","continentName":"Europe","countryName":"Ukraine","countryCode":"UA","mainCities":["Kyiv","Kharkiv","Odesa","Dnipro"],"rawOffsetInMinutes":120,"abbreviation":"EET","rawFormat":"+02:00 Eastern European Time - Kyiv, Kharkiv, Odesa, Dnipro"},{"name":"Europe/Mariehamn","alternativeName":"Eastern European Time","group":["Europe/Mariehamn"],"continentCode":"EU","continentName":"Europe","countryName":"Aland Islands","countryCode":"AX","mainCities":["Mariehamn"],"rawOffsetInMinutes":120,"abbreviation":"EET","rawFormat":"+02:00 Eastern European Time - Mariehamn"},{"name":"Asia/Nicosia","alternativeName":"Eastern European Time","group":["Asia/Famagusta","Asia/Nicosia","Europe/Nicosia"],"continentCode":"EU","continentName":"Europe","countryName":"Cyprus","countryCode":"CY","mainCities":["Nicosia","Limassol","Larnaca","Stróvolos"],"rawOffsetInMinutes":120,"abbreviation":"EET","rawFormat":"+02:00 Eastern European Time - Nicosia, Limassol, Larnaca, Stróvolos"},{"name":"Europe/Riga","alternativeName":"Eastern European Time","group":["Europe/Riga"],"continentCode":"EU","continentName":"Europe","countryName":"Latvia","countryCode":"LV","mainCities":["Riga","Daugavpils","Liepāja","Jelgava"],"rawOffsetInMinutes":120,"abbreviation":"EET","rawFormat":"+02:00 Eastern European Time - Riga, Daugavpils, Liepāja, Jelgava"},{"name":"Europe/Sofia","alternativeName":"Eastern European Time","group":["Europe/Sofia"],"continentCode":"EU","continentName":"Europe","countryName":"Bulgaria","countryCode":"BG","mainCities":["Sofia","Plovdiv","Varna","Burgas"],"rawOffsetInMinutes":120,"abbreviation":"EET","rawFormat":"+02:00 Eastern European Time - Sofia, Plovdiv, Varna, Burgas"},{"name":"Europe/Tallinn","alternativeName":"Eastern European Time","group":["Europe/Tallinn"],"continentCode":"EU","continentName":"Europe","countryName":"Estonia","countryCode":"EE","mainCities":["Tallinn","Tartu","Narva","Pärnu"],"rawOffsetInMinutes":120,"abbreviation":"EET","rawFormat":"+02:00 Eastern European Time - Tallinn, Tartu, Narva, Pärnu"},{"name":"Africa/Tripoli","alternativeName":"Eastern European Time","group":["Africa/Tripoli","Libya"],"continentCode":"AF","continentName":"Africa","countryName":"Libya","countryCode":"LY","mainCities":["Tripoli","Benghazi","Misratah","Zliten"],"rawOffsetInMinutes":120,"abbreviation":"EET","rawFormat":"+02:00 Eastern European Time - Tripoli, Benghazi, Misratah, Zliten"},{"name":"Europe/Vilnius","alternativeName":"Eastern European Time","group":["Europe/Vilnius"],"continentCode":"EU","continentName":"Europe","countryName":"Lithuania","countryCode":"LT","mainCities":["Vilnius","Kaunas","Klaipėda","Šiauliai"],"rawOffsetInMinutes":120,"abbreviation":"EET","rawFormat":"+02:00 Eastern European Time - Vilnius, Kaunas, Klaipėda, Šiauliai"},{"name":"Asia/Jerusalem","alternativeName":"Israel Time","group":["Asia/Jerusalem","Israel","Asia/Tel_Aviv"],"continentCode":"AS","continentName":"Asia","countryName":"Israel","countryCode":"IL","mainCities":["Jerusalem","Tel Aviv","West Jerusalem","Haifa"],"rawOffsetInMinutes":120,"abbreviation":"IST","rawFormat":"+02:00 Israel Time - Jerusalem, Tel Aviv, West Jerusalem, Haifa"},{"name":"Africa/Johannesburg","alternativeName":"South Africa Time","group":["Africa/Johannesburg","Africa/Maseru","Africa/Mbabane"],"continentCode":"AF","continentName":"Africa","countryName":"South Africa","countryCode":"ZA","mainCities":["Johannesburg","Cape Town","Durban","Pretoria"],"rawOffsetInMinutes":120,"abbreviation":"SAST","rawFormat":"+02:00 South Africa Time - Johannesburg, Cape Town, Durban, Pretoria"},{"name":"Africa/Mbabane","alternativeName":"South Africa Time","group":["Africa/Mbabane"],"continentCode":"AF","continentName":"Africa","countryName":"Eswatini","countryCode":"SZ","mainCities":["Manzini","Mbabane","Lobamba"],"rawOffsetInMinutes":120,"abbreviation":"SAST","rawFormat":"+02:00 South Africa Time - Manzini, Mbabane, Lobamba"},{"name":"Africa/Maseru","alternativeName":"South Africa Time","group":["Africa/Maseru"],"continentCode":"AF","continentName":"Africa","countryName":"Lesotho","countryCode":"LS","mainCities":["Maseru","Maputsoe","Mohale's Hoek","Mafeteng"],"rawOffsetInMinutes":120,"abbreviation":"SAST","rawFormat":"+02:00 South Africa Time - Maseru, Maputsoe, Mohale's Hoek, Mafeteng"},{"name":"Asia/Kuwait","alternativeName":"Arabian Time","group":["Asia/Kuwait"],"continentCode":"AS","continentName":"Asia","countryName":"Kuwait","countryCode":"KW","mainCities":["Al Aḩmadī","Ḩawallī","As Sālimīyah","Şabāḩ as Sālim"],"rawOffsetInMinutes":180,"abbreviation":"AST","rawFormat":"+03:00 Arabian Time - Al Aḩmadī, Ḩawallī, As Sālimīyah, Şabāḩ as Sālim"},{"name":"Asia/Bahrain","alternativeName":"Arabian Time","group":["Asia/Bahrain"],"continentCode":"AS","continentName":"Asia","countryName":"Bahrain","countryCode":"BH","mainCities":["Al Muharraq","Manama","Madīnat Ḩamad","Ar Rifā‘"],"rawOffsetInMinutes":180,"abbreviation":"AST","rawFormat":"+03:00 Arabian Time - Al Muharraq, Manama, Madīnat Ḩamad, Ar Rifā‘"},{"name":"Asia/Baghdad","alternativeName":"Arabian Time","group":["Asia/Baghdad"],"continentCode":"AS","continentName":"Asia","countryName":"Iraq","countryCode":"IQ","mainCities":["Baghdad","Al Mawşil al Jadīdah","Al Başrah al Qadīmah","Mosul"],"rawOffsetInMinutes":180,"abbreviation":"AST","rawFormat":"+03:00 Arabian Time - Baghdad, Al Mawşil al Jadīdah, Al Başrah al Qadīmah, Mosul"},{"name":"Asia/Qatar","alternativeName":"Arabian Time","group":["Asia/Qatar","Asia/Bahrain"],"continentCode":"AS","continentName":"Asia","countryName":"Qatar","countryCode":"QA","mainCities":["Doha","Ar Rayyān","Al Maţār al ‘Atīq","Al Manşūrah"],"rawOffsetInMinutes":180,"abbreviation":"AST","rawFormat":"+03:00 Arabian Time - Doha, Ar Rayyān, Al Maţār al ‘Atīq, Al Manşūrah"},{"name":"Asia/Riyadh","alternativeName":"Arabian Time","group":["Asia/Riyadh","Antarctica/Syowa","Asia/Aden","Asia/Kuwait"],"continentCode":"AS","continentName":"Asia","countryName":"Saudi Arabia","countryCode":"SA","mainCities":["Jeddah","Riyadh","Makkah","Madinah"],"rawOffsetInMinutes":180,"abbreviation":"AST","rawFormat":"+03:00 Arabian Time - Jeddah, Riyadh, Makkah, Madinah"},{"name":"Asia/Aden","alternativeName":"Arabian Time","group":["Asia/Aden"],"continentCode":"AS","continentName":"Asia","countryName":"Yemen","countryCode":"YE","mainCities":["Sanaa","Aden","Taiz","Ibb"],"rawOffsetInMinutes":180,"abbreviation":"AST","rawFormat":"+03:00 Arabian Time - Sanaa, Aden, Taiz, Ibb"},{"name":"Asia/Amman","alternativeName":"Asia/Amman","group":["Asia/Amman"],"continentCode":"AS","continentName":"Asia","countryName":"Jordan","countryCode":"JO","mainCities":["Amman","Zarqa","Irbid","Russeifa"],"rawOffsetInMinutes":180,"abbreviation":"GMT+3","rawFormat":"+03:00 Asia/Amman - Amman, Zarqa, Irbid, Russeifa"},{"name":"Asia/Damascus","alternativeName":"Asia/Damascus","group":["Asia/Damascus"],"continentCode":"AS","continentName":"Asia","countryName":"Syria","countryCode":"SY","mainCities":["Aleppo","Damascus","Homs","Latakia"],"rawOffsetInMinutes":180,"abbreviation":"GMT+3","rawFormat":"+03:00 Asia/Damascus - Aleppo, Damascus, Homs, Latakia"},{"name":"Africa/Addis_Ababa","alternativeName":"East Africa Time","group":["Africa/Addis_Ababa"],"continentCode":"AF","continentName":"Africa","countryName":"Ethiopia","countryCode":"ET","mainCities":["Addis Ababa","Jijiga","Gonder","Mek'ele"],"rawOffsetInMinutes":180,"abbreviation":"EAT","rawFormat":"+03:00 East Africa Time - Addis Ababa, Jijiga, Gonder, Mek'ele"},{"name":"Indian/Antananarivo","alternativeName":"East Africa Time","group":["Indian/Antananarivo"],"continentCode":"AF","continentName":"Africa","countryName":"Madagascar","countryCode":"MG","mainCities":["Antananarivo","Toamasina","Antsirabe","Mahajanga"],"rawOffsetInMinutes":180,"abbreviation":"EAT","rawFormat":"+03:00 East Africa Time - Antananarivo, Toamasina, Antsirabe, Mahajanga"},{"name":"Africa/Asmara","alternativeName":"East Africa Time","group":["Africa/Asmara"],"continentCode":"AF","continentName":"Africa","countryName":"Eritrea","countryCode":"ER","mainCities":["Asmara","Keren","Himora","Massawa"],"rawOffsetInMinutes":180,"abbreviation":"EAT","rawFormat":"+03:00 East Africa Time - Asmara, Keren, Himora, Massawa"},{"name":"Africa/Dar_es_Salaam","alternativeName":"East Africa Time","group":["Africa/Dar_es_Salaam"],"continentCode":"AF","continentName":"Africa","countryName":"Tanzania","countryCode":"TZ","mainCities":["Dar es Salaam","Mwanza","Dodoma","Zanzibar"],"rawOffsetInMinutes":180,"abbreviation":"EAT","rawFormat":"+03:00 East Africa Time - Dar es Salaam, Mwanza, Dodoma, Zanzibar"},{"name":"Africa/Djibouti","alternativeName":"East Africa Time","group":["Africa/Djibouti"],"continentCode":"AF","continentName":"Africa","countryName":"Djibouti","countryCode":"DJ","mainCities":["Djibouti","Ali Sabih","Dikhil","Tadjoura"],"rawOffsetInMinutes":180,"abbreviation":"EAT","rawFormat":"+03:00 East Africa Time - Djibouti, Ali Sabih, Dikhil, Tadjoura"},{"name":"Africa/Kampala","alternativeName":"East Africa Time","group":["Africa/Kampala"],"continentCode":"AF","continentName":"Africa","countryName":"Uganda","countryCode":"UG","mainCities":["Kampala","Nansana","Kira","Bunamwaya"],"rawOffsetInMinutes":180,"abbreviation":"EAT","rawFormat":"+03:00 East Africa Time - Kampala, Nansana, Kira, Bunamwaya"},{"name":"Indian/Mayotte","alternativeName":"East Africa Time","group":["Indian/Mayotte"],"continentCode":"AF","continentName":"Africa","countryName":"Mayotte","countryCode":"YT","mainCities":["Mamoudzou","Koungou","Labattoir","Kaouéni"],"rawOffsetInMinutes":180,"abbreviation":"EAT","rawFormat":"+03:00 East Africa Time - Mamoudzou, Koungou, Labattoir, Kaouéni"},{"name":"Africa/Mogadishu","alternativeName":"East Africa Time","group":["Africa/Mogadishu"],"continentCode":"AF","continentName":"Africa","countryName":"Somalia","countryCode":"SO","mainCities":["Mogadishu","Borama","Hargeysa","Berbera"],"rawOffsetInMinutes":180,"abbreviation":"EAT","rawFormat":"+03:00 East Africa Time - Mogadishu, Borama, Hargeysa, Berbera"},{"name":"Indian/Comoro","alternativeName":"East Africa Time","group":["Indian/Comoro"],"continentCode":"AF","continentName":"Africa","countryName":"Comoros","countryCode":"KM","mainCities":["Moroni","Moutsamoudou","Fomboni"],"rawOffsetInMinutes":180,"abbreviation":"EAT","rawFormat":"+03:00 East Africa Time - Moroni, Moutsamoudou, Fomboni"},{"name":"Africa/Nairobi","alternativeName":"East Africa Time","group":["Africa/Nairobi","Africa/Addis_Ababa","Africa/Asmara","Africa/Dar_es_Salaam","Africa/Djibouti","Africa/Kampala","Africa/Mogadishu","Indian/Antananarivo","Indian/Comoro","Indian/Mayotte","Africa/Asmera"],"continentCode":"AF","continentName":"Africa","countryName":"Kenya","countryCode":"KE","mainCities":["Nairobi","Kakamega","Mombasa","Nakuru"],"rawOffsetInMinutes":180,"abbreviation":"EAT","rawFormat":"+03:00 East Africa Time - Nairobi, Kakamega, Mombasa, Nakuru"},{"name":"Europe/Minsk","alternativeName":"Moscow Time","group":["Europe/Minsk"],"continentCode":"EU","continentName":"Europe","countryName":"Belarus","countryCode":"BY","mainCities":["Minsk","Homyel'","Hrodna","Vitebsk"],"rawOffsetInMinutes":180,"abbreviation":"MSK","rawFormat":"+03:00 Moscow Time - Minsk, Homyel', Hrodna, Vitebsk"},{"name":"Europe/Moscow","alternativeName":"Moscow Time","group":["Europe/Kirov","Europe/Moscow","Europe/Volgograd","W-SU"],"continentCode":"EU","continentName":"Europe","countryName":"Russia","countryCode":"RU","mainCities":["Moscow","Saint Petersburg","Nizhniy Novgorod","Kazan"],"rawOffsetInMinutes":180,"abbreviation":"MSK","rawFormat":"+03:00 Moscow Time - Moscow, Saint Petersburg, Nizhniy Novgorod, Kazan"},{"name":"Europe/Simferopol","alternativeName":"Moscow Time","group":["Europe/Simferopol"],"continentCode":"EU","continentName":"Europe","countryName":"Ukraine","countryCode":"UA","mainCities":["Sevastopol","Simferopol","Kerch","Yevpatoriya"],"rawOffsetInMinutes":180,"abbreviation":"MSK","rawFormat":"+03:00 Moscow Time - Sevastopol, Simferopol, Kerch, Yevpatoriya"},{"name":"Antarctica/Syowa","alternativeName":"Syowa Time","group":["Antarctica/Syowa"],"continentCode":"AN","continentName":"Antarctica","countryName":"Antarctica","countryCode":"AQ","mainCities":["Syowa"],"rawOffsetInMinutes":180,"abbreviation":"SYOT","rawFormat":"+03:00 Syowa Time - Syowa"},{"name":"Europe/Istanbul","alternativeName":"Turkey Time","group":["Europe/Istanbul","Turkey","Asia/Istanbul"],"continentCode":"AS","continentName":"Asia","countryName":"Turkey","countryCode":"TR","mainCities":["Istanbul","Ankara","Bursa","İzmir"],"rawOffsetInMinutes":180,"abbreviation":"TRT","rawFormat":"+03:00 Turkey Time - Istanbul, Ankara, Bursa, İzmir"},{"name":"Asia/Tehran","alternativeName":"Iran Time","group":["Asia/Tehran","Iran"],"continentCode":"AS","continentName":"Asia","countryName":"Iran","countryCode":"IR","mainCities":["Tehran","Mashhad","Isfahan","Karaj"],"rawOffsetInMinutes":210,"abbreviation":"IRST","rawFormat":"+03:30 Iran Time - Tehran, Mashhad, Isfahan, Karaj"},{"name":"Asia/Yerevan","alternativeName":"Armenia Time","group":["Asia/Yerevan"],"continentCode":"AS","continentName":"Asia","countryName":"Armenia","countryCode":"AM","mainCities":["Yerevan","Malatia-Sebastia","Shengavit","Nor Nork"],"rawOffsetInMinutes":240,"abbreviation":"AMT","rawFormat":"+04:00 Armenia Time - Yerevan, Malatia-Sebastia, Shengavit, Nor Nork"},{"name":"Asia/Baku","alternativeName":"Azerbaijan Time","group":["Asia/Baku"],"continentCode":"AS","continentName":"Asia","countryName":"Azerbaijan","countryCode":"AZ","mainCities":["Baku","Sumqayıt","Ganja","Lankaran"],"rawOffsetInMinutes":240,"abbreviation":"AZT","rawFormat":"+04:00 Azerbaijan Time - Baku, Sumqayıt, Ganja, Lankaran"},{"name":"Asia/Tbilisi","alternativeName":"Georgia Time","group":["Asia/Tbilisi"],"continentCode":"AS","continentName":"Asia","countryName":"Georgia","countryCode":"GE","mainCities":["Tbilisi","Batumi","Kutaisi","Rustavi"],"rawOffsetInMinutes":240,"abbreviation":"GET","rawFormat":"+04:00 Georgia Time - Tbilisi, Batumi, Kutaisi, Rustavi"},{"name":"Asia/Dubai","alternativeName":"Gulf Time","group":["Asia/Dubai","Asia/Muscat","Indian/Mahe","Indian/Reunion"],"continentCode":"AS","continentName":"Asia","countryName":"United Arab Emirates","countryCode":"AE","mainCities":["Dubai","Abu Dhabi","Sharjah","Al Ain City"],"rawOffsetInMinutes":240,"abbreviation":"GST","rawFormat":"+04:00 Gulf Time - Dubai, Abu Dhabi, Sharjah, Al Ain City"},{"name":"Asia/Muscat","alternativeName":"Gulf Time","group":["Asia/Muscat"],"continentCode":"AS","continentName":"Asia","countryName":"Oman","countryCode":"OM","mainCities":["Muscat","Seeb","Bawshar","‘Ibrī"],"rawOffsetInMinutes":240,"abbreviation":"GST","rawFormat":"+04:00 Gulf Time - Muscat, Seeb, Bawshar, ‘Ibrī"},{"name":"Indian/Mauritius","alternativeName":"Mauritius Time","group":["Indian/Mauritius"],"continentCode":"AF","continentName":"Africa","countryName":"Mauritius","countryCode":"MU","mainCities":["Port Louis","Vacoas","Beau Bassin-Rose Hill","Curepipe"],"rawOffsetInMinutes":240,"abbreviation":"MUT","rawFormat":"+04:00 Mauritius Time - Port Louis, Vacoas, Beau Bassin-Rose Hill, Curepipe"},{"name":"Indian/Reunion","alternativeName":"Réunion Time","group":["Indian/Reunion"],"continentCode":"AF","continentName":"Africa","countryName":"Reunion","countryCode":"RE","mainCities":["Saint-Denis","Saint-Paul","Saint-Pierre","Le Tampon"],"rawOffsetInMinutes":240,"abbreviation":"RET","rawFormat":"+04:00 Réunion Time - Saint-Denis, Saint-Paul, Saint-Pierre, Le Tampon"},{"name":"Europe/Samara","alternativeName":"Samara Time","group":["Europe/Astrakhan","Europe/Samara","Europe/Saratov","Europe/Ulyanovsk"],"continentCode":"EU","continentName":"Europe","countryName":"Russia","countryCode":"RU","mainCities":["Samara","Saratov","Tolyatti","Izhevsk"],"rawOffsetInMinutes":240,"abbreviation":"SAMT","rawFormat":"+04:00 Samara Time - Samara, Saratov, Tolyatti, Izhevsk"},{"name":"Indian/Mahe","alternativeName":"Seychelles Time","group":["Indian/Mahe"],"continentCode":"AF","continentName":"Africa","countryName":"Seychelles","countryCode":"SC","mainCities":["Victoria"],"rawOffsetInMinutes":240,"abbreviation":"SCT","rawFormat":"+04:00 Seychelles Time - Victoria"},{"name":"Asia/Kabul","alternativeName":"Afghanistan Time","group":["Asia/Kabul"],"continentCode":"AS","continentName":"Asia","countryName":"Afghanistan","countryCode":"AF","mainCities":["Kabul","Herāt","Mazār-e Sharīf","Kandahār"],"rawOffsetInMinutes":270,"abbreviation":"AFT","rawFormat":"+04:30 Afghanistan Time - Kabul, Herāt, Mazār-e Sharīf, Kandahār"},{"name":"Indian/Kerguelen","alternativeName":"French Southern & Antarctic Time","group":["Indian/Kerguelen"],"continentCode":"AN","continentName":"Antarctica","countryName":"French Southern Territories","countryCode":"TF","mainCities":["Port-aux-Français"],"rawOffsetInMinutes":300,"abbreviation":"FSAT","rawFormat":"+05:00 French Southern & Antarctic Time - Port-aux-Français"},{"name":"Asia/Almaty","alternativeName":"Kazakhstan Time","group":["Asia/Almaty","Asia/Aqtau","Asia/Aqtobe","Asia/Atyrau","Asia/Oral","Asia/Qostanay","Asia/Qyzylorda"],"continentCode":"AS","continentName":"Asia","countryName":"Kazakhstan","countryCode":"KZ","mainCities":["Almaty","Shymkent","Aktobe","Karagandy"],"rawOffsetInMinutes":300,"abbreviation":"GMT+5","rawFormat":"+05:00 Kazakhstan Time - Almaty, Shymkent, Aktobe, Karagandy"},{"name":"Indian/Maldives","alternativeName":"Maldives Time","group":["Indian/Maldives","Indian/Kerguelen"],"continentCode":"AS","continentName":"Asia","countryName":"Maldives","countryCode":"MV","mainCities":["Male"],"rawOffsetInMinutes":300,"abbreviation":"MVT","rawFormat":"+05:00 Maldives Time - Male"},{"name":"Antarctica/Mawson","alternativeName":"Mawson Time","group":["Antarctica/Mawson","Antarctica/Vostok"],"continentCode":"AN","continentName":"Antarctica","countryName":"Antarctica","countryCode":"AQ","mainCities":["Mawson","Vostok"],"rawOffsetInMinutes":300,"abbreviation":"MAWT","rawFormat":"+05:00 Mawson Time - Mawson, Vostok"},{"name":"Asia/Karachi","alternativeName":"Pakistan Time","group":["Asia/Karachi"],"continentCode":"AS","continentName":"Asia","countryName":"Pakistan","countryCode":"PK","mainCities":["Lahore","Karachi","Peshawar","Faisalabad"],"rawOffsetInMinutes":300,"abbreviation":"PKT","rawFormat":"+05:00 Pakistan Time - Lahore, Karachi, Peshawar, Faisalabad"},{"name":"Asia/Dushanbe","alternativeName":"Tajikistan Time","group":["Asia/Dushanbe"],"continentCode":"AS","continentName":"Asia","countryName":"Tajikistan","countryCode":"TJ","mainCities":["Dushanbe","Isfara","Istaravshan","Kŭlob"],"rawOffsetInMinutes":300,"abbreviation":"TJT","rawFormat":"+05:00 Tajikistan Time - Dushanbe, Isfara, Istaravshan, Kŭlob"},{"name":"Asia/Ashgabat","alternativeName":"Turkmenistan Time","group":["Asia/Ashgabat","Asia/Ashkhabad"],"continentCode":"AS","continentName":"Asia","countryName":"Turkmenistan","countryCode":"TM","mainCities":["Ashgabat","Türkmenabat","Daşoguz","Mary"],"rawOffsetInMinutes":300,"abbreviation":"TMT","rawFormat":"+05:00 Turkmenistan Time - Ashgabat, Türkmenabat, Daşoguz, Mary"},{"name":"Asia/Tashkent","alternativeName":"Uzbekistan Time","group":["Asia/Samarkand","Asia/Tashkent"],"continentCode":"AS","continentName":"Asia","countryName":"Uzbekistan","countryCode":"UZ","mainCities":["Tashkent","Andijon","Namangan","Samarkand"],"rawOffsetInMinutes":300,"abbreviation":"UZT","rawFormat":"+05:00 Uzbekistan Time - Tashkent, Andijon, Namangan, Samarkand"},{"name":"Asia/Yekaterinburg","alternativeName":"Yekaterinburg Time","group":["Asia/Yekaterinburg"],"continentCode":"EU","continentName":"Europe","countryName":"Russia","countryCode":"RU","mainCities":["Yekaterinburg","Chelyabinsk","Ufa","Perm"],"rawOffsetInMinutes":300,"abbreviation":"YEKT","rawFormat":"+05:00 Yekaterinburg Time - Yekaterinburg, Chelyabinsk, Ufa, Perm"},{"name":"Asia/Colombo","alternativeName":"India Time","group":["Asia/Colombo"],"continentCode":"AS","continentName":"Asia","countryName":"Sri Lanka","countryCode":"LK","mainCities":["Colombo","Dehiwala-Mount Lavinia","Maharagama","Jaffna"],"rawOffsetInMinutes":330,"abbreviation":"IST","rawFormat":"+05:30 India Time - Colombo, Dehiwala-Mount Lavinia, Maharagama, Jaffna"},{"name":"Asia/Kolkata","alternativeName":"India Time","group":["Asia/Kolkata","Asia/Calcutta"],"continentCode":"AS","continentName":"Asia","countryName":"India","countryCode":"IN","mainCities":["Mumbai","Delhi","Bengaluru","Hyderabad"],"rawOffsetInMinutes":330,"abbreviation":"IST","rawFormat":"+05:30 India Time - Mumbai, Delhi, Bengaluru, Hyderabad"},{"name":"Asia/Kathmandu","alternativeName":"Nepal Time","group":["Asia/Kathmandu","Asia/Katmandu"],"continentCode":"AS","continentName":"Asia","countryName":"Nepal","countryCode":"NP","mainCities":["Kathmandu","Pokhara","Bharatpur","Pātan"],"rawOffsetInMinutes":345,"abbreviation":"NPT","rawFormat":"+05:45 Nepal Time - Kathmandu, Pokhara, Bharatpur, Pātan"},{"name":"Asia/Dhaka","alternativeName":"Bangladesh Time","group":["Asia/Dhaka","Asia/Dacca"],"continentCode":"AS","continentName":"Asia","countryName":"Bangladesh","countryCode":"BD","mainCities":["Dhaka","Chattogram","Gazipur","Khulna"],"rawOffsetInMinutes":360,"abbreviation":"BST","rawFormat":"+06:00 Bangladesh Time - Dhaka, Chattogram, Gazipur, Khulna"},{"name":"Asia/Thimphu","alternativeName":"Bhutan Time","group":["Asia/Thimphu","Asia/Thimbu"],"continentCode":"AS","continentName":"Asia","countryName":"Bhutan","countryCode":"BT","mainCities":["Thimphu","Phuntsholing","Tsirang","Punākha"],"rawOffsetInMinutes":360,"abbreviation":"BTT","rawFormat":"+06:00 Bhutan Time - Thimphu, Phuntsholing, Tsirang, Punākha"},{"name":"Asia/Urumqi","alternativeName":"China Time","group":["Asia/Urumqi","Asia/Kashgar"],"continentCode":"AS","continentName":"Asia","countryName":"China","countryCode":"CN","mainCities":["Ürümqi","Shihezi","Korla","Aqsu"],"rawOffsetInMinutes":360,"abbreviation":"CST","rawFormat":"+06:00 China Time - Ürümqi, Shihezi, Korla, Aqsu"},{"name":"Indian/Chagos","alternativeName":"Indian Ocean Time","group":["Indian/Chagos"],"continentCode":"AS","continentName":"Asia","countryName":"British Indian Ocean Territory","countryCode":"IO","mainCities":["Chagos"],"rawOffsetInMinutes":360,"abbreviation":"IOT","rawFormat":"+06:00 Indian Ocean Time - Chagos"},{"name":"Asia/Bishkek","alternativeName":"Kyrgyzstan Time","group":["Asia/Bishkek"],"continentCode":"AS","continentName":"Asia","countryName":"Kyrgyzstan","countryCode":"KG","mainCities":["Bishkek","Osh","Jalal-Abad","Karakol"],"rawOffsetInMinutes":360,"abbreviation":"KGT","rawFormat":"+06:00 Kyrgyzstan Time - Bishkek, Osh, Jalal-Abad, Karakol"},{"name":"Asia/Omsk","alternativeName":"Omsk Time","group":["Asia/Omsk"],"continentCode":"EU","continentName":"Europe","countryName":"Russia","countryCode":"RU","mainCities":["Omsk","Tara","Kalachinsk","Isil’kul’"],"rawOffsetInMinutes":360,"abbreviation":"OMST","rawFormat":"+06:00 Omsk Time - Omsk, Tara, Kalachinsk, Isil’kul’"},{"name":"Indian/Cocos","alternativeName":"Cocos Islands Time","group":["Indian/Cocos"],"continentCode":"AS","continentName":"Asia","countryName":"Cocos Islands","countryCode":"CC","mainCities":["West Island"],"rawOffsetInMinutes":390,"abbreviation":"CCT","rawFormat":"+06:30 Cocos Islands Time - West Island"},{"name":"Asia/Yangon","alternativeName":"Myanmar Time","group":["Asia/Yangon","Indian/Cocos","Asia/Rangoon"],"continentCode":"AS","continentName":"Asia","countryName":"Myanmar","countryCode":"MM","mainCities":["Yangon","Mandalay","Nay Pyi Taw","Hlaingthaya Township"],"rawOffsetInMinutes":390,"abbreviation":"MMT","rawFormat":"+06:30 Myanmar Time - Yangon, Mandalay, Nay Pyi Taw, Hlaingthaya Township"},{"name":"Indian/Christmas","alternativeName":"Christmas Island Time","group":["Indian/Christmas"],"continentCode":"OC","continentName":"Oceania","countryName":"Christmas Island","countryCode":"CX","mainCities":["Flying Fish Cove"],"rawOffsetInMinutes":420,"abbreviation":"CXT","rawFormat":"+07:00 Christmas Island Time - Flying Fish Cove"},{"name":"Antarctica/Davis","alternativeName":"Davis Time","group":["Antarctica/Davis"],"continentCode":"AN","continentName":"Antarctica","countryName":"Antarctica","countryCode":"AQ","mainCities":["Davis"],"rawOffsetInMinutes":420,"abbreviation":"DAVT","rawFormat":"+07:00 Davis Time - Davis"},{"name":"Asia/Hovd","alternativeName":"Hovd Time","group":["Asia/Hovd"],"continentCode":"AS","continentName":"Asia","countryName":"Mongolia","countryCode":"MN","mainCities":["Ulaangom","Khovd","Ölgii","Altai"],"rawOffsetInMinutes":420,"abbreviation":"HOVT","rawFormat":"+07:00 Hovd Time - Ulaangom, Khovd, Ölgii, Altai"},{"name":"Asia/Bangkok","alternativeName":"Indochina Time","group":["Asia/Bangkok","Asia/Phnom_Penh","Asia/Vientiane","Indian/Christmas"],"continentCode":"AS","continentName":"Asia","countryName":"Thailand","countryCode":"TH","mainCities":["Bangkok","Samut Prakan","Mueang Nonthaburi","Chon Buri"],"rawOffsetInMinutes":420,"abbreviation":"ICT","rawFormat":"+07:00 Indochina Time - Bangkok, Samut Prakan, Mueang Nonthaburi, Chon Buri"},{"name":"Asia/Ho_Chi_Minh","alternativeName":"Indochina Time","group":["Asia/Ho_Chi_Minh","Asia/Saigon"],"continentCode":"AS","continentName":"Asia","countryName":"Vietnam","countryCode":"VN","mainCities":["Ho Chi Minh City","Cần Thơ","Da Nang","Biên Hòa"],"rawOffsetInMinutes":420,"abbreviation":"ICT","rawFormat":"+07:00 Indochina Time - Ho Chi Minh City, Cần Thơ, Da Nang, Biên Hòa"},{"name":"Asia/Phnom_Penh","alternativeName":"Indochina Time","group":["Asia/Phnom_Penh"],"continentCode":"AS","continentName":"Asia","countryName":"Cambodia","countryCode":"KH","mainCities":["Phnom Penh","Takeo","Siem Reap","Battambang"],"rawOffsetInMinutes":420,"abbreviation":"ICT","rawFormat":"+07:00 Indochina Time - Phnom Penh, Takeo, Siem Reap, Battambang"},{"name":"Asia/Vientiane","alternativeName":"Indochina Time","group":["Asia/Vientiane"],"continentCode":"AS","continentName":"Asia","countryName":"Laos","countryCode":"LA","mainCities":["Vientiane","Savannakhet","Pakse","Thakhèk"],"rawOffsetInMinutes":420,"abbreviation":"ICT","rawFormat":"+07:00 Indochina Time - Vientiane, Savannakhet, Pakse, Thakhèk"},{"name":"Asia/Novosibirsk","alternativeName":"Novosibirsk Time","group":["Asia/Barnaul","Asia/Krasnoyarsk","Asia/Novokuznetsk","Asia/Novosibirsk","Asia/Tomsk"],"continentCode":"EU","continentName":"Europe","countryName":"Russia","countryCode":"RU","mainCities":["Novosibirsk","Krasnoyarsk","Barnaul","Tomsk"],"rawOffsetInMinutes":420,"abbreviation":"NOVT","rawFormat":"+07:00 Novosibirsk Time - Novosibirsk, Krasnoyarsk, Barnaul, Tomsk"},{"name":"Asia/Jakarta","alternativeName":"Western Indonesia Time","group":["Asia/Jakarta","Asia/Pontianak"],"continentCode":"AS","continentName":"Asia","countryName":"Indonesia","countryCode":"ID","mainCities":["Jakarta","Surabaya","Bekasi","Bandung"],"rawOffsetInMinutes":420,"abbreviation":"WIB","rawFormat":"+07:00 Western Indonesia Time - Jakarta, Surabaya, Bekasi, Bandung"},{"name":"Antarctica/Casey","alternativeName":"Australian Western Time","group":["Antarctica/Casey"],"continentCode":"AN","continentName":"Antarctica","countryName":"Antarctica","countryCode":"AQ","mainCities":["Casey"],"rawOffsetInMinutes":480,"abbreviation":"AWST","rawFormat":"+08:00 Australian Western Time - Casey"},{"name":"Australia/Perth","alternativeName":"Australian Western Time","group":["Australia/Perth","Australia/West"],"continentCode":"OC","continentName":"Oceania","countryName":"Australia","countryCode":"AU","mainCities":["Perth","Mandurah","Bunbury","Geraldton"],"rawOffsetInMinutes":480,"abbreviation":"AWST","rawFormat":"+08:00 Australian Western Time - Perth, Mandurah, Bunbury, Geraldton"},{"name":"Asia/Brunei","alternativeName":"Brunei Time","group":["Asia/Brunei"],"continentCode":"AS","continentName":"Asia","countryName":"Brunei","countryCode":"BN","mainCities":["Bandar Seri Begawan","Sengkurong","Mentiri","Kuala Belait"],"rawOffsetInMinutes":480,"abbreviation":"GMT+8","rawFormat":"+08:00 Brunei Time - Bandar Seri Begawan, Sengkurong, Mentiri, Kuala Belait"},{"name":"Asia/Makassar","alternativeName":"Central Indonesia Time","group":["Asia/Makassar","Asia/Ujung_Pandang"],"continentCode":"AS","continentName":"Asia","countryName":"Indonesia","countryCode":"ID","mainCities":["Makassar","Samarinda","Denpasar","Balikpapan"],"rawOffsetInMinutes":480,"abbreviation":"WITA","rawFormat":"+08:00 Central Indonesia Time - Makassar, Samarinda, Denpasar, Balikpapan"},{"name":"Asia/Macau","alternativeName":"China Time","group":["Asia/Macau","Asia/Macao"],"continentCode":"AS","continentName":"Asia","countryName":"Macao","countryCode":"MO","mainCities":["Macau","Taipa","Sé","Luhuan"],"rawOffsetInMinutes":480,"abbreviation":"CST","rawFormat":"+08:00 China Time - Macau, Taipa, Sé, Luhuan"},{"name":"Asia/Shanghai","alternativeName":"China Time","group":["Asia/Shanghai","PRC","Asia/Chongqing","Asia/Harbin","Asia/Chungking"],"continentCode":"AS","continentName":"Asia","countryName":"China","countryCode":"CN","mainCities":["Shanghai","Beijing","Shenzhen","Guangzhou"],"rawOffsetInMinutes":480,"abbreviation":"CST","rawFormat":"+08:00 China Time - Shanghai, Beijing, Shenzhen, Guangzhou"},{"name":"Asia/Hong_Kong","alternativeName":"Hong Kong Time","group":["Asia/Hong_Kong","Hongkong"],"continentCode":"AS","continentName":"Asia","countryName":"Hong Kong","countryCode":"HK","mainCities":["Hong Kong","New Territories","Kowloon","Hong Kong Island"],"rawOffsetInMinutes":480,"abbreviation":"HKT","rawFormat":"+08:00 Hong Kong Time - Hong Kong, New Territories, Kowloon, Hong Kong Island"},{"name":"Asia/Irkutsk","alternativeName":"Irkutsk Time","group":["Asia/Irkutsk"],"continentCode":"EU","continentName":"Europe","countryName":"Russia","countryCode":"RU","mainCities":["Irkutsk","Ulan-Ude","Bratsk","Angarsk"],"rawOffsetInMinutes":480,"abbreviation":"IRKT","rawFormat":"+08:00 Irkutsk Time - Irkutsk, Ulan-Ude, Bratsk, Angarsk"},{"name":"Asia/Kuala_Lumpur","alternativeName":"Malaysia Time","group":["Asia/Kuala_Lumpur","Asia/Kuching","Asia/Brunei"],"continentCode":"AS","continentName":"Asia","countryName":"Malaysia","countryCode":"MY","mainCities":["Kuala Lumpur","Johor Bahru","Kampung Baru Subang","Petaling Jaya"],"rawOffsetInMinutes":480,"abbreviation":"MYT","rawFormat":"+08:00 Malaysia Time - Kuala Lumpur, Johor Bahru, Kampung Baru Subang, Petaling Jaya"},{"name":"Asia/Manila","alternativeName":"Philippine Time","group":["Asia/Manila"],"continentCode":"AS","continentName":"Asia","countryName":"Philippines","countryCode":"PH","mainCities":["Quezon City","Davao","Caloocan City","Manila"],"rawOffsetInMinutes":480,"abbreviation":"PHT","rawFormat":"+08:00 Philippine Time - Quezon City, Davao, Caloocan City, Manila"},{"name":"Asia/Singapore","alternativeName":"Singapore Time","group":["Asia/Singapore","Singapore","Asia/Kuala_Lumpur"],"continentCode":"AS","continentName":"Asia","countryName":"Singapore","countryCode":"SG","mainCities":["Singapore","Ulu Bedok","Bedok New Town","Tampines Estate"],"rawOffsetInMinutes":480,"abbreviation":"SGT","rawFormat":"+08:00 Singapore Time - Singapore, Ulu Bedok, Bedok New Town, Tampines Estate"},{"name":"Asia/Taipei","alternativeName":"Taiwan Time","group":["Asia/Taipei","ROC"],"continentCode":"AS","continentName":"Asia","countryName":"Taiwan","countryCode":"TW","mainCities":["Taipei","New Taipei City","Taichung","Kaohsiung"],"rawOffsetInMinutes":480,"abbreviation":"GMT+8","rawFormat":"+08:00 Taiwan Time - Taipei, New Taipei City, Taichung, Kaohsiung"},{"name":"Asia/Ulaanbaatar","alternativeName":"Ulaanbaatar Time","group":["Asia/Ulaanbaatar","Asia/Choibalsan","Asia/Ulan_Bator"],"continentCode":"AS","continentName":"Asia","countryName":"Mongolia","countryCode":"MN","mainCities":["Ulan Bator","Erdenet","Darhan","Choibalsan"],"rawOffsetInMinutes":480,"abbreviation":"ULAT","rawFormat":"+08:00 Ulaanbaatar Time - Ulan Bator, Erdenet, Darhan, Choibalsan"},{"name":"Australia/Eucla","alternativeName":"Australian Central Western Time","group":["Australia/Eucla"],"continentCode":"OC","continentName":"Oceania","countryName":"Australia","countryCode":"AU","mainCities":["Eucla"],"rawOffsetInMinutes":525,"abbreviation":"ACWST","rawFormat":"+08:45 Australian Central Western Time - Eucla"},{"name":"Asia/Jayapura","alternativeName":"Eastern Indonesia Time","group":["Asia/Jayapura"],"continentCode":"AS","continentName":"Asia","countryName":"Indonesia","countryCode":"ID","mainCities":["Jayapura","Ambon","Sorong","Ternate"],"rawOffsetInMinutes":540,"abbreviation":"WIT","rawFormat":"+09:00 Eastern Indonesia Time - Jayapura, Ambon, Sorong, Ternate"},{"name":"Asia/Tokyo","alternativeName":"Japan Time","group":["Asia/Tokyo","Japan"],"continentCode":"AS","continentName":"Asia","countryName":"Japan","countryCode":"JP","mainCities":["Tokyo","Yokohama","Osaka","Nagoya"],"rawOffsetInMinutes":540,"abbreviation":"JST","rawFormat":"+09:00 Japan Time - Tokyo, Yokohama, Osaka, Nagoya"},{"name":"Asia/Pyongyang","alternativeName":"Korean Time","group":["Asia/Pyongyang"],"continentCode":"AS","continentName":"Asia","countryName":"North Korea","countryCode":"KP","mainCities":["Pyongyang","Hamhŭng","Namp’o","Sunch’ŏn"],"rawOffsetInMinutes":540,"abbreviation":"KST","rawFormat":"+09:00 Korean Time - Pyongyang, Hamhŭng, Namp’o, Sunch’ŏn"},{"name":"Asia/Seoul","alternativeName":"Korean Time","group":["Asia/Seoul","ROK"],"continentCode":"AS","continentName":"Asia","countryName":"South Korea","countryCode":"KR","mainCities":["Seoul","Busan","Incheon","Daegu"],"rawOffsetInMinutes":540,"abbreviation":"KST","rawFormat":"+09:00 Korean Time - Seoul, Busan, Incheon, Daegu"},{"name":"Pacific/Palau","alternativeName":"Palau Time","group":["Pacific/Palau"],"continentCode":"OC","continentName":"Oceania","countryName":"Palau","countryCode":"PW","mainCities":["Ngerulmud"],"rawOffsetInMinutes":540,"abbreviation":"PWT","rawFormat":"+09:00 Palau Time - Ngerulmud"},{"name":"Asia/Dili","alternativeName":"Timor-Leste Time","group":["Asia/Dili"],"continentCode":"OC","continentName":"Oceania","countryName":"Timor Leste","countryCode":"TL","mainCities":["Dili","Maliana","Suai","Likisá"],"rawOffsetInMinutes":540,"abbreviation":"GMT+9","rawFormat":"+09:00 Timor-Leste Time - Dili, Maliana, Suai, Likisá"},{"name":"Asia/Chita","alternativeName":"Yakutsk Time","group":["Asia/Chita","Asia/Khandyga","Asia/Yakutsk"],"continentCode":"EU","continentName":"Europe","countryName":"Russia","countryCode":"RU","mainCities":["Chita","Yakutsk","Blagoveshchensk","Belogorsk"],"rawOffsetInMinutes":540,"abbreviation":"YAKT","rawFormat":"+09:00 Yakutsk Time - Chita, Yakutsk, Blagoveshchensk, Belogorsk"},{"name":"Australia/Adelaide","alternativeName":"Australian Central Time","group":["Australia/Adelaide","Australia/Broken_Hill","Australia/South","Australia/Yancowinna"],"continentCode":"OC","continentName":"Oceania","countryName":"Australia","countryCode":"AU","mainCities":["Adelaide","Adelaide Hills","Mount Gambier","Morphett Vale"],"rawOffsetInMinutes":570,"abbreviation":"ACST","rawFormat":"+09:30 Australian Central Time - Adelaide, Adelaide Hills, Mount Gambier, Morphett Vale"},{"name":"Australia/Darwin","alternativeName":"Australian Central Time","group":["Australia/Darwin","Australia/North"],"continentCode":"OC","continentName":"Oceania","countryName":"Australia","countryCode":"AU","mainCities":["Darwin","Palmerston","Alice Springs"],"rawOffsetInMinutes":570,"abbreviation":"ACST","rawFormat":"+09:30 Australian Central Time - Darwin, Palmerston, Alice Springs"},{"name":"Australia/Brisbane","alternativeName":"Australian Eastern Time","group":["Australia/Brisbane","Australia/Lindeman","Australia/Queensland"],"continentCode":"OC","continentName":"Oceania","countryName":"Australia","countryCode":"AU","mainCities":["Brisbane","Gold Coast","Sunshine Coast","Logan City"],"rawOffsetInMinutes":600,"abbreviation":"AEST","rawFormat":"+10:00 Australian Eastern Time - Brisbane, Gold Coast, Sunshine Coast, Logan City"},{"name":"Australia/Sydney","alternativeName":"Australian Eastern Time","group":["Antarctica/Macquarie","Australia/Hobart","Australia/Melbourne","Australia/Sydney","Australia/Tasmania","Australia/Currie","Australia/Victoria","Australia/ACT","Australia/NSW","Australia/Canberra"],"continentCode":"OC","continentName":"Oceania","countryName":"Australia","countryCode":"AU","mainCities":["Sydney","Melbourne","Newcastle","Canberra"],"rawOffsetInMinutes":600,"abbreviation":"AEST","rawFormat":"+10:00 Australian Eastern Time - Sydney, Melbourne, Newcastle, Canberra"},{"name":"Pacific/Guam","alternativeName":"Chamorro Time","group":["Pacific/Guam","Pacific/Saipan"],"continentCode":"OC","continentName":"Oceania","countryName":"Guam","countryCode":"GU","mainCities":["Dededo Village","Yigo Village","Tamuning-Tumon-Harmon Village","Tamuning"],"rawOffsetInMinutes":600,"abbreviation":"ChST","rawFormat":"+10:00 Chamorro Time - Dededo Village, Yigo Village, Tamuning-Tumon-Harmon Village, Tamuning"},{"name":"Pacific/Saipan","alternativeName":"Chamorro Time","group":["Pacific/Saipan"],"continentCode":"OC","continentName":"Oceania","countryName":"Northern Mariana Islands","countryCode":"MP","mainCities":["Saipan"],"rawOffsetInMinutes":600,"abbreviation":"ChST","rawFormat":"+10:00 Chamorro Time - Saipan"},{"name":"Pacific/Chuuk","alternativeName":"Chuuk Time","group":["Pacific/Chuuk"],"continentCode":"OC","continentName":"Oceania","countryName":"Micronesia","countryCode":"FM","mainCities":["Chuuk"],"rawOffsetInMinutes":600,"abbreviation":"CHUT","rawFormat":"+10:00 Chuuk Time - Chuuk"},{"name":"Antarctica/DumontDUrville","alternativeName":"Dumont d’Urville Time","group":["Antarctica/DumontDUrville"],"continentCode":"AN","continentName":"Antarctica","countryName":"Antarctica","countryCode":"AQ","mainCities":["DumontDUrville"],"rawOffsetInMinutes":600,"abbreviation":"GMT+10","rawFormat":"+10:00 Dumont d’Urville Time - DumontDUrville"},{"name":"Pacific/Port_Moresby","alternativeName":"Papua New Guinea Time","group":["Pacific/Port_Moresby","Antarctica/DumontDUrville","Pacific/Chuuk","Pacific/Yap","Pacific/Truk"],"continentCode":"OC","continentName":"Oceania","countryName":"Papua New Guinea","countryCode":"PG","mainCities":["Port Moresby","Lae","Mount Hagen","Popondetta"],"rawOffsetInMinutes":600,"abbreviation":"PGT","rawFormat":"+10:00 Papua New Guinea Time - Port Moresby, Lae, Mount Hagen, Popondetta"},{"name":"Asia/Vladivostok","alternativeName":"Vladivostok Time","group":["Asia/Ust-Nera","Asia/Vladivostok"],"continentCode":"EU","continentName":"Europe","countryName":"Russia","countryCode":"RU","mainCities":["Khabarovsk","Vladivostok","Khabarovsk Vtoroy","Komsomolsk-on-Amur"],"rawOffsetInMinutes":600,"abbreviation":"VLAT","rawFormat":"+10:00 Vladivostok Time - Khabarovsk, Vladivostok, Khabarovsk Vtoroy, Komsomolsk-on-Amur"},{"name":"Australia/Lord_Howe","alternativeName":"Lord Howe Time","group":["Australia/Lord_Howe","Australia/LHI"],"continentCode":"OC","continentName":"Oceania","countryName":"Australia","countryCode":"AU","mainCities":["Lord Howe"],"rawOffsetInMinutes":630,"abbreviation":"LHST","rawFormat":"+10:30 Lord Howe Time - Lord Howe"},{"name":"Pacific/Bougainville","alternativeName":"Bougainville Time","group":["Pacific/Bougainville"],"continentCode":"OC","continentName":"Oceania","countryName":"Papua New Guinea","countryCode":"PG","mainCities":["Arawa"],"rawOffsetInMinutes":660,"abbreviation":"BST","rawFormat":"+11:00 Bougainville Time - Arawa"},{"name":"Pacific/Kosrae","alternativeName":"Kosrae Time","group":["Pacific/Kosrae","Pacific/Pohnpei"],"continentCode":"OC","continentName":"Oceania","countryName":"Micronesia","countryCode":"FM","mainCities":["Kosrae","Palikir"],"rawOffsetInMinutes":660,"abbreviation":"KOST","rawFormat":"+11:00 Kosrae Time - Kosrae, Palikir"},{"name":"Pacific/Noumea","alternativeName":"New Caledonia Time","group":["Pacific/Noumea"],"continentCode":"OC","continentName":"Oceania","countryName":"New Caledonia","countryCode":"NC","mainCities":["Nouméa","Mont-Dore","Dumbéa"],"rawOffsetInMinutes":660,"abbreviation":"NCT","rawFormat":"+11:00 New Caledonia Time - Nouméa, Mont-Dore, Dumbéa"},{"name":"Pacific/Norfolk","alternativeName":"Norfolk Island Time","group":["Pacific/Norfolk"],"continentCode":"OC","continentName":"Oceania","countryName":"Norfolk Island","countryCode":"NF","mainCities":["Kingston"],"rawOffsetInMinutes":660,"abbreviation":"NFT","rawFormat":"+11:00 Norfolk Island Time - Kingston"},{"name":"Asia/Sakhalin","alternativeName":"Sakhalin Time","group":["Asia/Magadan","Asia/Sakhalin","Asia/Srednekolymsk"],"continentCode":"EU","continentName":"Europe","countryName":"Russia","countryCode":"RU","mainCities":["Yuzhno-Sakhalinsk","Magadan","Korsakov","Kholmsk"],"rawOffsetInMinutes":660,"abbreviation":"SAKT","rawFormat":"+11:00 Sakhalin Time - Yuzhno-Sakhalinsk, Magadan, Korsakov, Kholmsk"},{"name":"Pacific/Guadalcanal","alternativeName":"Solomon Islands Time","group":["Pacific/Guadalcanal","Pacific/Pohnpei","Pacific/Ponape"],"continentCode":"OC","continentName":"Oceania","countryName":"Solomon Islands","countryCode":"SB","mainCities":["Honiara","Panatina","Nggosi","Tandai"],"rawOffsetInMinutes":660,"abbreviation":"SBT","rawFormat":"+11:00 Solomon Islands Time - Honiara, Panatina, Nggosi, Tandai"},{"name":"Pacific/Efate","alternativeName":"Vanuatu Time","group":["Pacific/Efate"],"continentCode":"OC","continentName":"Oceania","countryName":"Vanuatu","countryCode":"VU","mainCities":["Port-Vila"],"rawOffsetInMinutes":660,"abbreviation":"VUT","rawFormat":"+11:00 Vanuatu Time - Port-Vila"},{"name":"Pacific/Fiji","alternativeName":"Fiji Time","group":["Pacific/Fiji"],"continentCode":"OC","continentName":"Oceania","countryName":"Fiji","countryCode":"FJ","mainCities":["Nasinu","Suva","Lautoka","Nadi"],"rawOffsetInMinutes":720,"abbreviation":"FJT","rawFormat":"+12:00 Fiji Time - Nasinu, Suva, Lautoka, Nadi"},{"name":"Pacific/Tarawa","alternativeName":"Gilbert Islands Time","group":["Pacific/Tarawa","Pacific/Funafuti","Pacific/Majuro","Pacific/Wake","Pacific/Wallis"],"continentCode":"OC","continentName":"Oceania","countryName":"Kiribati","countryCode":"KI","mainCities":["Tarawa"],"rawOffsetInMinutes":720,"abbreviation":"GILT","rawFormat":"+12:00 Gilbert Islands Time - Tarawa"},{"name":"Asia/Kamchatka","alternativeName":"Kamchatka Time","group":["Asia/Anadyr","Asia/Kamchatka"],"continentCode":"EU","continentName":"Europe","countryName":"Russia","countryCode":"RU","mainCities":["Petropavlovsk-Kamchatsky","Yelizovo","Vilyuchinsk","Anadyr"],"rawOffsetInMinutes":720,"abbreviation":"PETT","rawFormat":"+12:00 Kamchatka Time - Petropavlovsk-Kamchatsky, Yelizovo, Vilyuchinsk, Anadyr"},{"name":"Pacific/Majuro","alternativeName":"Marshall Islands Time","group":["Pacific/Kwajalein","Pacific/Majuro","Kwajalein"],"continentCode":"OC","continentName":"Oceania","countryName":"Marshall Islands","countryCode":"MH","mainCities":["Majuro","Kwajalein"],"rawOffsetInMinutes":720,"abbreviation":"MHT","rawFormat":"+12:00 Marshall Islands Time - Majuro, Kwajalein"},{"name":"Pacific/Nauru","alternativeName":"Nauru Time","group":["Pacific/Nauru"],"continentCode":"OC","continentName":"Oceania","countryName":"Nauru","countryCode":"NR","mainCities":["Yaren"],"rawOffsetInMinutes":720,"abbreviation":"NRT","rawFormat":"+12:00 Nauru Time - Yaren"},{"name":"Pacific/Auckland","alternativeName":"New Zealand Time","group":["Pacific/Auckland","NZ","Antarctica/McMurdo","Antarctica/South_Pole"],"continentCode":"OC","continentName":"Oceania","countryName":"New Zealand","countryCode":"NZ","mainCities":["Auckland","Christchurch","Wellington","Manukau City"],"rawOffsetInMinutes":720,"abbreviation":"NZST","rawFormat":"+12:00 New Zealand Time - Auckland, Christchurch, Wellington, Manukau City"},{"name":"Antarctica/McMurdo","alternativeName":"New Zealand Time","group":["Antarctica/McMurdo"],"continentCode":"AN","continentName":"Antarctica","countryName":"Antarctica","countryCode":"AQ","mainCities":["McMurdo"],"rawOffsetInMinutes":720,"abbreviation":"NZST","rawFormat":"+12:00 New Zealand Time - McMurdo"},{"name":"Pacific/Funafuti","alternativeName":"Tuvalu Time","group":["Pacific/Funafuti"],"continentCode":"OC","continentName":"Oceania","countryName":"Tuvalu","countryCode":"TV","mainCities":["Funafuti"],"rawOffsetInMinutes":720,"abbreviation":"TVT","rawFormat":"+12:00 Tuvalu Time - Funafuti"},{"name":"Pacific/Wake","alternativeName":"Wake Island Time","group":["Pacific/Wake"],"continentCode":"OC","continentName":"Oceania","countryName":"United States Minor Outlying Islands","countryCode":"UM","mainCities":["Wake"],"rawOffsetInMinutes":720,"abbreviation":"WAKT","rawFormat":"+12:00 Wake Island Time - Wake"},{"name":"Pacific/Wallis","alternativeName":"Wallis & Futuna Time","group":["Pacific/Wallis"],"continentCode":"OC","continentName":"Oceania","countryName":"Wallis and Futuna","countryCode":"WF","mainCities":["Mata-Utu"],"rawOffsetInMinutes":720,"abbreviation":"WFT","rawFormat":"+12:00 Wallis & Futuna Time - Mata-Utu"},{"name":"Pacific/Chatham","alternativeName":"Chatham Time","group":["Pacific/Chatham","NZ-CHAT"],"continentCode":"OC","continentName":"Oceania","countryName":"New Zealand","countryCode":"NZ","mainCities":["Chatham"],"rawOffsetInMinutes":765,"abbreviation":"CHAST","rawFormat":"+12:45 Chatham Time - Chatham"},{"name":"Pacific/Kanton","alternativeName":"Phoenix Islands Time","group":["Pacific/Kanton","Pacific/Enderbury"],"continentCode":"OC","continentName":"Oceania","countryName":"Kiribati","countryCode":"KI","mainCities":["Kanton"],"rawOffsetInMinutes":780,"abbreviation":"PHOT","rawFormat":"+13:00 Phoenix Islands Time - Kanton"},{"name":"Pacific/Apia","alternativeName":"Samoa Time","group":["Pacific/Apia"],"continentCode":"OC","continentName":"Oceania","countryName":"Samoa","countryCode":"WS","mainCities":["Apia"],"rawOffsetInMinutes":780,"abbreviation":"SST","rawFormat":"+13:00 Samoa Time - Apia"},{"name":"Pacific/Fakaofo","alternativeName":"Tokelau Time","group":["Pacific/Fakaofo"],"continentCode":"OC","continentName":"Oceania","countryName":"Tokelau","countryCode":"TK","mainCities":["Fakaofo"],"rawOffsetInMinutes":780,"abbreviation":"TKT","rawFormat":"+13:00 Tokelau Time - Fakaofo"},{"name":"Pacific/Tongatapu","alternativeName":"Tonga Time","group":["Pacific/Tongatapu"],"continentCode":"OC","continentName":"Oceania","countryName":"Tonga","countryCode":"TO","mainCities":["Nuku‘alofa"],"rawOffsetInMinutes":780,"abbreviation":"TOT","rawFormat":"+13:00 Tonga Time - Nuku‘alofa"},{"name":"Pacific/Kiritimati","alternativeName":"Line Islands Time","group":["Pacific/Kiritimati"],"continentCode":"OC","continentName":"Oceania","countryName":"Kiribati","countryCode":"KI","mainCities":["Kiritimati"],"rawOffsetInMinutes":840,"abbreviation":"LINT","rawFormat":"+14:00 Line Islands Time - Kiritimati"}]`);
function kS({
  alternativeName: t,
  mainCities: e,
  rawOffsetInMinutes: n,
  currentTimeOffsetInMinutes: a
}, { useCurrentOffset: i = !1 } = {}) {
  return `${To(i ? a : n).padStart(
    6,
    "+"
  )} ${t} - ${e.join(", ")}`;
}
function To(t) {
  const e = Math.abs(t), [n, a] = [
    Math.floor(e / 60),
    e % 60
  ].map((o) => o.toString().padStart(2, "0")), i = `${n}:${a}`;
  return `${t >= 0 ? "+" : "-"}${i}`;
}
const SS = /^[A-Za-z_+-]{1,256}(:?\/[A-Za-z_+-]{1,256}(\/[A-Za-z_+-]{1,256})?)?$/, TS = {
  year: 0,
  month: 1,
  day: 2,
  hour: 3,
  minute: 4,
  second: 5
};
function ES(t) {
  return !!(t && t.match(SS));
}
function MS(t, e) {
  const n = t.format(e).replace(/\u200E/g, ""), a = /(\d+)\/(\d+)\/(\d+),? (\d+):(\d+):(\d+)/.exec(n), [, i, o, r, s, u, d] = a;
  return [r, i, o, s, u, d];
}
function NS(t, e) {
  const n = t.formatToParts(e), a = [];
  for (let i = 0; i < n.length; i++) {
    const { type: o, value: r } = n[i], s = TS[o];
    typeof s < "u" && (a[s] = parseInt(r, 10));
  }
  return a;
}
function DS(t) {
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
function IS(t) {
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
function OS(t) {
  if (!ES(t))
    return !1;
  const e = new Date(Date.now());
  let n;
  try {
    n = DS(t);
  } catch {
    return !1;
  }
  const [a, i, o, r, s, u] = n.formatToParts ? NS(n, e) : MS(n, e), d = IS({
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
function RS(t) {
  return AS.reduce(
    function(e, n) {
      const a = n.name, i = OS(a);
      if (i === !1)
        return e;
      const o = {
        ...n,
        currentTimeOffsetInMinutes: i
      };
      return e.push({
        ...o,
        currentTimeFormat: kS(o, {
          useCurrentOffset: !0
        })
      }), e;
    },
    []
  ).sort((e, n) => $S(e, n) || Eo(e.alternativeName, n.alternativeName) || Eo(e.mainCities[0], n.mainCities[0]));
}
function $S(t, e) {
  return t.currentTimeOffsetInMinutes - e.currentTimeOffsetInMinutes;
}
function Eo(t, e) {
  return typeof t == "string" && typeof e == "string" ? t.localeCompare(e) : 0;
}
const xS = ["data-widget-id"], PS = {
  key: 0,
  class: "fu-empty"
}, FS = {
  key: 1,
  class: "fu-layout"
}, BS = { class: "fu-info" }, zS = { class: "fu-info__name" }, LS = {
  key: 0,
  class: "fu-info__meta"
}, VS = {
  key: 1,
  class: "fu-info__desc"
}, HS = ["aria-expanded"], jS = { class: "fu-tz__label" }, US = {
  key: 0,
  class: "fu-tz__dropdown"
}, WS = { class: "fu-tz__search-wrap" }, YS = { class: "fu-tz__search-icon" }, GS = {
  key: 0,
  class: "fu-tz__no-results"
}, qS = ["onMouseenter", "onMousedown"], KS = { class: "fu-tz__opt-offset" }, QS = { class: "fu-tz__opt-name" }, ZS = { class: "fu-tz__opt-country" }, JS = {
  key: 0,
  class: "fu-selected"
}, XS = { class: "fu-selected__time" }, eT = { class: "fu-selected__time" }, tT = { class: "fu-right" }, nT = {
  key: 0,
  class: "fu-slots"
}, aT = { class: "fu-slots__header" }, iT = { class: "fu-slots__heading" }, oT = {
  key: 0,
  class: "fu-slots__loading"
}, rT = {
  key: 1,
  class: "fu-slots__list"
}, sT = ["onClick"], lT = {
  key: 2,
  class: "fu-slots__empty"
}, uT = /* @__PURE__ */ le({
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
    const n = t, a = e, i = O(
      () => RS().map((S) => {
        const F = S.mainCities?.[0] || S.name.split("/").pop()?.replace(/_/g, " ") || S.name, J = S.rawOffsetInMinutes ?? 0, ne = J >= 0 ? "+" : "-", be = Math.abs(J), Te = String(Math.floor(be / 60)).padStart(2, "0"), _e = String(be % 60).padStart(2, "0"), Fe = `UTC${ne}${Te}:${_e}`;
        return {
          value: S.name,
          offset: Fe,
          city: F,
          country: "",
          searchIndex: [S.name, S.abbreviation, F, S.group, Fe].join(" ").toLowerCase()
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
    const r = M(o()), s = M(!1), u = M(""), d = M(0), m = M(null), v = M(null), p = M(null), h = O(() => {
      const S = i.value.find((F) => F.value === r.value);
      return S ? `${S.offset} · ${S.city}` : r.value;
    }), y = O(() => {
      const S = u.value.trim().toLowerCase();
      return S ? i.value.filter((F) => F.searchIndex.includes(S)) : i.value;
    });
    async function g() {
      s.value = !s.value, s.value && (u.value = "", d.value = Math.max(
        0,
        y.value.findIndex((S) => S.value === r.value)
      ), await ge(), v.value?.focus(), C());
    }
    function b(S) {
      S && (r.value = S.value, s.value = !1, u.value = "");
    }
    function _(S) {
      const F = y.value.length;
      F && (d.value = (d.value + S + F) % F, C());
    }
    function C() {
      ge(() => {
        p.value?.children[d.value]?.scrollIntoView({ block: "nearest" });
      });
    }
    he(y, () => {
      d.value = 0;
    });
    function k(S) {
      m.value && !m.value.contains(S.target) && (s.value = !1);
    }
    we(() => document.addEventListener("mousedown", k)), Ae(() => document.removeEventListener("mousedown", k));
    const E = O(() => {
      const S = n.style || {}, F = S.bgColor || "#ffffff", J = (S.bgOpacity ?? 100) / 100, ne = (ae) => {
        const re = parseInt(ae, 16);
        return isNaN(re) ? 255 : re;
      }, be = ne(F.slice(1, 3)), Te = ne(F.slice(3, 5)), _e = ne(F.slice(5, 7)), Fe = [
        "none",
        "0 1px 4px rgba(0,0,0,0.07)",
        "0 2px 12px rgba(0,0,0,0.10)",
        "0 4px 20px rgba(0,0,0,0.13)",
        "0 8px 32px rgba(0,0,0,0.16)"
      ], Me = S.dayColor || "#4f46e5", Y = (S.dayShape || "circle") === "circle";
      return {
        backgroundColor: `rgba(${be},${Te},${_e},${J})`,
        "--widget-bg": `rgba(${be},${Te},${_e},${J})`,
        borderRadius: `${S.borderRadius ?? 12}px`,
        boxShadow: Fe[Math.min(S.shadow ?? 2, 4)],
        "--sch-day-color": Me,
        "--sch-day-color-light": Me + "22",
        "--sch-day-color-mid": Me + "44",
        "--sch-day-radius": Y ? "50%" : "10px",
        "--sch-day-size": Y ? "32px" : "40px"
      };
    }), D = O(
      () => new Set(n.availableDates ?? [])
    ), x = O(
      () => [...D.value].map((S) => ({
        id: `dot-${S}`,
        date: S,
        display: "background",
        classNames: ["sch-avail-bg"]
      }))
    );
    function I() {
      return (/* @__PURE__ */ new Date()).toLocaleDateString("en-CA");
    }
    const V = M(null), j = M(null), R = M(null), H = M(null), U = O(() => `cal-${n.eventTypeId}`);
    he(V, () => {
      j.value = null;
    }), he(
      () => n.slots,
      () => {
        j.value = null;
      }
    ), he(
      () => n.eventTypeId,
      () => {
        V.value = null, j.value = null, r.value = o();
      }
    );
    function $() {
      V.value = null, j.value = null, setTimeout(() => H.value?.getApi?.()?.updateSize(), 260);
    }
    const T = O(() => ({
      plugins: [eS, wS],
      initialView: "dayGridMonth",
      headerToolbar: { left: "prev", center: "title", right: "next" },
      height: "auto",
      fixedWeekCount: !1,
      showNonCurrentDates: !1,
      events: x.value,
      datesSet({ view: S }) {
        const F = S.currentStart;
        a("month-change", { year: F.getFullYear(), month: F.getMonth() + 1 });
      },
      dayCellClassNames({ date: S }) {
        const F = [
          S.getFullYear(),
          String(S.getMonth() + 1).padStart(2, "0"),
          String(S.getDate()).padStart(2, "0")
        ].join("-"), J = F < I(), ne = [];
        return D.value.has(F) ? ne.push(J ? "sch-day--past" : "sch-day--available") : ne.push("sch-day--past"), F === V.value && ne.push("sch-day--selected"), ne;
      },
      dateClick({ dateStr: S }) {
        S < I() || D.value.has(S) && (V.value = S, a("date-select", { date: S }), setTimeout(() => H.value?.getApi?.()?.updateSize(), 260));
      },
      selectable: !1,
      editable: !1
    }));
    function N() {
      j.value && (R.value = j.value, a("update", { bookedSlot: j.value }));
    }
    function P(S) {
      if (!S) return "";
      const [F, J, ne] = S.split("-").map(Number);
      return new Date(F, J - 1, ne).toLocaleDateString("en-GB", {
        weekday: "long",
        day: "numeric",
        month: "long"
      });
    }
    const B = O(() => j.value?.start ? new Date(j.value.start).toLocaleDateString("en-GB", {
      weekday: "long",
      day: "numeric",
      month: "long"
    }) : P(V.value || ""));
    function K(S, F) {
      if (!S) return "";
      try {
        return new Date(S).toLocaleTimeString("en-US", {
          timeZone: F || "UTC",
          hour: "numeric",
          minute: "2-digit",
          hour12: !0
        });
      } catch {
        return "";
      }
    }
    function z(S) {
      return S?.start ? K(S.start, r.value) : "";
    }
    function W(S) {
      return S?.end ? K(S.end, r.value) : "";
    }
    return (S, F) => (l(), c("div", {
      class: "fu-widget",
      "data-widget-id": t.widgetId,
      style: ie(E.value)
    }, [
      t.eventTypeId ? (l(), c("div", FS, [
        f("div", BS, [
          f("p", zS, w(t.eventTypeName || "Event"), 1),
          t.timezone ? (l(), c("div", LS, [
            F[6] || (F[6] = f("span", { class: "fu-info__icon" }, "🌐", -1)),
            f("span", null, w(t.timezone), 1)
          ])) : A("", !0),
          t.description ? (l(), c("p", VS, w(t.description), 1)) : A("", !0),
          f("div", {
            class: "fu-tz",
            ref_key: "tzRoot",
            ref: m
          }, [
            f("button", {
              class: "fu-tz__trigger",
              type: "button",
              onClick: g,
              "aria-expanded": s.value
            }, [
              F[7] || (F[7] = f("span", { class: "fu-tz__globe" }, "🌐", -1)),
              f("span", jS, w(h.value), 1),
              f("span", {
                class: X(["fu-tz__caret", { "fu-tz__caret--open": s.value }])
              }, "▾", 2)
            ], 8, HS),
            Q(Ve, { name: "fu-tz-pop" }, {
              default: ce(() => [
                s.value ? (l(), c("div", US, [
                  f("div", WS, [
                    f("span", YS, [
                      Q(ee(wu), { size: 14 })
                    ]),
                    Ue(f("input", {
                      ref_key: "tzInput",
                      ref: v,
                      "onUpdate:modelValue": F[0] || (F[0] = (J) => u.value = J),
                      class: "fu-tz__search",
                      placeholder: "Search city or country…",
                      autocomplete: "off",
                      spellcheck: "false",
                      onKeydown: [
                        F[1] || (F[1] = $e(ue((J) => _(1), ["prevent"]), ["down"])),
                        F[2] || (F[2] = $e(ue((J) => _(-1), ["prevent"]), ["up"])),
                        F[3] || (F[3] = $e(ue((J) => b(y.value[d.value]), ["prevent"]), ["enter"])),
                        F[4] || (F[4] = $e((J) => s.value = !1, ["esc"]))
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
                    y.value.length ? A("", !0) : (l(), c("li", GS, "No results")),
                    (l(!0), c(L, null, oe(y.value, (J, ne) => (l(), c("li", {
                      key: J.value,
                      class: X(["fu-tz__option", {
                        "fu-tz__option--active": J.value === r.value,
                        "fu-tz__option--hi": ne === d.value
                      }]),
                      onMouseenter: (be) => d.value = ne,
                      onMousedown: ue((be) => b(J), ["prevent"])
                    }, [
                      f("span", KS, w(J.offset), 1),
                      f("span", QS, w(J.city), 1),
                      f("span", ZS, w(J.country), 1)
                    ], 42, qS))), 128))
                  ], 512)
                ])) : A("", !0)
              ]),
              _: 1
            })
          ], 512),
          Q(Ve, { name: "fu-slide" }, {
            default: ce(() => [
              j.value ? (l(), c("div", JS, [
                F[10] || (F[10] = f("div", { class: "fu-selected__label" }, "Selected time", -1)),
                f("div", XS, [
                  F[8] || (F[8] = f("span", null, "📅", -1)),
                  f("span", null, w(B.value), 1)
                ]),
                f("div", eT, [
                  F[9] || (F[9] = f("span", null, "🕐", -1)),
                  f("span", null, w(z(j.value)) + " – " + w(W(j.value)), 1)
                ])
              ])) : A("", !0)
            ]),
            _: 1
          })
        ]),
        f("div", tT, [
          (l(), Z(ee(wk), {
            key: U.value,
            ref_key: "calRef",
            ref: H,
            options: T.value,
            class: "fu-fc"
          }, null, 8, ["options"])),
          Q(Ve, { name: "fu-slide-right" }, {
            default: ce(() => [
              V.value ? (l(), c("div", nT, [
                f("div", aT, [
                  f("p", iT, w(P(V.value)), 1),
                  f("button", {
                    class: "fu-slots__close",
                    onClick: ue($, ["stop"])
                  }, "✕")
                ]),
                t.slotsLoading ? (l(), c("div", oT, [...F[11] || (F[11] = [
                  f("span", { class: "fu-slots__spinner" }, null, -1)
                ])])) : t.slots && t.slots.length ? (l(), c("div", rT, [
                  (l(!0), c(L, null, oe(t.slots, (J) => (l(), c("div", {
                    key: J.id,
                    class: "fu-slot"
                  }, [
                    f("button", {
                      class: X(["fu-slot__time", { "fu-slot__time--chosen": j.value?.id === J.id }]),
                      onClick: ue((ne) => j.value = J, ["stop"])
                    }, w(z(J)), 11, sT),
                    Q(Ve, { name: "fu-confirm-pop" }, {
                      default: ce(() => [
                        j.value?.id === J.id ? (l(), c("button", {
                          key: 0,
                          class: X(["fu-slot__confirm", { "fu-slot__confirm--done": R.value?.id === J.id }]),
                          onClick: ue(N, ["stop"])
                        }, w(R.value?.id === J.id ? "✓ Selected" : "Confirm"), 3)) : A("", !0)
                      ]),
                      _: 2
                    }, 1024)
                  ]))), 128))
                ])) : (l(), c("p", lT, "No availability"))
              ])) : A("", !0)
            ]),
            _: 1
          })
        ])
      ])) : (l(), c("div", PS, [...F[5] || (F[5] = [
        f("span", { class: "fu-empty__icon" }, "📅", -1),
        f("p", { class: "fu-empty__title" }, "No event type selected", -1),
        f("p", { class: "fu-empty__sub" }, "Select an event type from the settings panel", -1)
      ])]))
    ], 12, xS));
  }
}), Gs = /* @__PURE__ */ te(uT, [["__scopeId", "data-v-9f9ef5b2"]]), qs = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Gs
}, Symbol.toStringTag, { value: "Module" })), cT = {
  key: 0,
  class: "fu-embed-error-state"
}, dT = {
  key: 0,
  class: "fu-embed-success"
}, fT = { class: "fu-embed-success__sub" }, mT = {
  key: 1,
  class: "fu-panel"
}, hT = {
  key: 2,
  class: "fu-panel"
}, vT = { class: "fu-form-slot-bar" }, pT = { class: "fu-form-slot-bar__date" }, gT = { class: "fu-embed-questions" }, yT = {
  key: 0,
  class: "fu-embed-error"
}, bT = ["disabled"], _T = { key: 0 }, CT = {
  key: 1,
  class: "fu-embed-submit__spinner"
}, wT = /* @__PURE__ */ le({
  __name: "FuEmbedRenderer",
  props: {
    document: {}
  },
  emits: ["submit"],
  setup(t, { emit: e }) {
    const n = t, a = e;
    function i(D) {
      const x = [];
      for (const I of D?.pages ?? [])
        for (const V of I?.blocks ?? [])
          for (const j of V?.columns ?? [])
            for (const R of j?.widgets ?? []) x.push(R);
      return x;
    }
    const o = O(() => i(n.document)), r = O(
      () => o.value.find((D) => D.type === "scheduler")
    ), s = O(
      () => o.value.filter((D) => D.type === "question")
    ), u = M("idle"), d = dl(null);
    function m(D) {
      d.value = D.bookedSlot, u.value = s.value.length ? "form" : "submitted";
    }
    function v() {
      u.value = "idle", p.value = {}, g.value = /* @__PURE__ */ new Set();
    }
    const p = M({});
    function h(D, x) {
      p.value = { ...p.value, [D]: x.value }, g.value.delete(D);
    }
    function y(D) {
      const x = D.props.conditions ?? [];
      if (!x.length) return !0;
      const I = D.props.conditionLogic ?? "all", V = x.map((j) => {
        const R = p.value[j.sourceWidgetId];
        switch (j.operator) {
          case "equals":
            return R === j.value;
          case "not_equals":
            return R !== j.value;
          case "contains":
            return Array.isArray(R) ? R.includes(j.value) : String(R ?? "").includes(j.value);
          default:
            return !0;
        }
      });
      return I === "all" ? V.every(Boolean) : V.some(Boolean);
    }
    const g = M(/* @__PURE__ */ new Set());
    function b() {
      const D = /* @__PURE__ */ new Set();
      for (const x of s.value) {
        if (!y(x) || !x.props.required) continue;
        const I = p.value[x.id];
        (I == null || I === "" || Array.isArray(I) && !I.length) && D.add(x.id);
      }
      return g.value = D, D.size === 0;
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
    const k = O(() => d.value?.date ? new Date(d.value.date).toLocaleString("en-GB", {
      weekday: "long",
      day: "numeric",
      month: "long",
      hour: "numeric",
      minute: "2-digit",
      hour12: !0
    }) : ""), E = O(() => {
      const D = n.document?.meta?.theme?.brandColor ?? "#4f46e5";
      return {
        "--embed-brand": D,
        "--embed-brand-light": D + "18",
        "--embed-brand-mid": D + "44"
      };
    });
    return (D, x) => (l(), c("div", {
      class: "fu-embed",
      style: ie(E.value)
    }, [
      r.value ? (l(), c(L, { key: 1 }, [
        u.value === "submitted" ? (l(), c("div", dT, [
          x[1] || (x[1] = f("div", { class: "fu-embed-success__icon" }, "✓", -1)),
          x[2] || (x[2] = f("p", { class: "fu-embed-success__title" }, "You're booked in", -1)),
          f("p", fT, w(k.value), 1)
        ])) : u.value === "idle" ? (l(), c("div", mT, [
          Q(Gs, Pt(r.value.props, {
            widgetId: r.value.id,
            onUpdate: m
          }), null, 16, ["widgetId"])
        ])) : u.value === "form" ? (l(), c("div", hT, [
          f("div", vT, [
            f("button", {
              class: "fu-form-slot-bar__back",
              onClick: v
            }, [...x[3] || (x[3] = [
              f("span", null, "←", -1),
              de(" Change time ", -1)
            ])]),
            f("span", pT, w(k.value), 1)
          ]),
          f("div", gT, [
            (l(!0), c(L, null, oe(s.value, (I) => (l(), c(L, {
              key: I.id
            }, [
              Q(dr, Pt({ ref_for: !0 }, I.props, {
                widgetId: I.id,
                isVisible: y(I),
                class: { "fu-embed-question--error": g.value.has(I.id) },
                onUpdate: (V) => h(I.id, V)
              }), null, 16, ["widgetId", "isVisible", "class", "onUpdate"]),
              g.value.has(I.id) ? (l(), c("p", yT, "This field is required")) : A("", !0)
            ], 64))), 128))
          ]),
          f("button", {
            class: "fu-embed-submit",
            disabled: _.value,
            onClick: C
          }, [
            _.value ? (l(), c("span", CT)) : (l(), c("span", _T, "Confirm booking"))
          ], 8, bT)
        ])) : A("", !0)
      ], 64)) : (l(), c("div", cT, [...x[0] || (x[0] = [
        f("div", { class: "fu-embed-error-state__icon" }, "📅", -1),
        f("p", { class: "fu-embed-error-state__title" }, "No scheduler found", -1),
        f("p", { class: "fu-embed-error-state__sub" }, " This document doesn't contain a booking widget. ", -1)
      ])]))
    ], 4));
  }
}), AT = /* @__PURE__ */ te(wT, [["__scopeId", "data-v-1324ce95"]]), kT = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: AT
}, Symbol.toStringTag, { value: "Module" })), ST = {
  key: 0,
  class: "service-card__image"
}, TT = ["src"], ET = { class: "service-card__content" }, MT = ["innerHTML"], NT = ["innerHTML"], DT = { key: 0 }, IT = { key: 1 }, OT = {
  key: 2,
  class: "service-card__footer"
}, RT = /* @__PURE__ */ le({
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
    const n = e, a = t, i = O(() => a.selectionMode !== "view"), o = O(() => i.value && a.widgetDisplay?.showServicePrice !== !1), r = O(() => {
      const m = String(a.service.unitPrice || "£").match(/[^0-9.,]/)?.[0] ?? "£", v = parseFloat(a.service.quantity) || 0, p = parseFloat(String(a.service.unitPrice || "").replace(/[^0-9.]/g, "")) || 0;
      return `${m}${(v * p).toLocaleString()}`;
    }), s = O(() => {
      const m = a.itemStyle ?? {};
      return {
        background: m.bgColor ?? "#fff",
        borderRadius: `${m.borderRadius ?? 12}px`,
        boxShadow: m.shadow ? `0 ${m.shadow / 2}px ${m.shadow}px rgba(0,0,0,0.12)` : void 0
      };
    }), u = O(() => ({
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
      t.widgetDisplay.showImage !== !1 ? (l(), c("div", ST, [
        t.service.image ? (l(), c("img", {
          key: 0,
          src: t.service.image
        }, null, 8, TT)) : A("", !0)
      ])) : A("", !0),
      f("div", ET, [
        f("div", {
          class: "service-card__title",
          innerHTML: t.service.name
        }, null, 8, MT),
        t.widgetDisplay.showDescription !== !1 ? (l(), c("div", {
          key: 0,
          class: "service-card__desc",
          innerHTML: t.service.description
        }, null, 8, NT)) : A("", !0),
        t.widgetDisplay.showQuantity !== !1 || t.widgetDisplay.showUnitPrice !== !1 ? (l(), c("div", {
          key: 1,
          class: "service-card__pricing",
          style: ie(u.value)
        }, [
          t.widgetDisplay.showQuantity !== !1 ? (l(), c("span", DT, w(t.service.quantity) + " " + w(t.service.unit), 1)) : A("", !0),
          t.widgetDisplay.showUnitPrice !== !1 ? (l(), c("span", IT, w(t.service.unitPrice), 1)) : A("", !0)
        ], 4)) : A("", !0),
        t.widgetDisplay.showServicePrice !== !1 ? (l(), c("div", OT, [
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
}), Ks = /* @__PURE__ */ te(RT, [["__scopeId", "data-v-3f867439"]]), $T = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Ks
}, Symbol.toStringTag, { value: "Module" })), xT = /* @__PURE__ */ le({
  __name: "ServiceRenderer",
  props: {
    widget: {}
  },
  emits: ["action"],
  setup(t, { emit: e }) {
    const n = e, a = t, i = O(() => a.widget.props.layout ?? "row"), o = O(() => a.widget.props.services ?? []), r = O(() => a.widget.props.widgetDisplay ?? {}), s = O(() => a.widget.props.pricingStyle ?? {}), u = O(() => a.widget.props.itemStyle ?? {}), d = O(() => a.widget.props.selectionMode ?? "view"), m = O(() => a.widget.props.selectionRequired ?? !1), v = O(() => a.widget.props.selectedServiceIds ?? []);
    function p(h) {
      if (console.log("[handleSelect] clicked service id:", h), console.log(" selectionMode:", d.value), console.log(" current selectedServiceIds:", v.value), d.value === "view") {
        console.log("⛔ view mode — selection blocked");
        return;
      }
      let y = [...v.value];
      d.value === "single" ? (console.log(" single-select mode"), y.includes(h) ? (console.log("🔁 already selected → clearing selection"), y = []) : (console.log("➕ selecting only this item"), y = [h])) : (console.log(" multiple-select mode"), y.includes(h) ? (console.log("➖ removing from selection"), y = y.filter((g) => g !== h)) : (console.log("➕ adding to selection"), y = [...y, h])), console.log("final selection:", y), a.widget.props.selectedServiceIds = y, n("action", {
        type: "service-select",
        selectedServiceIds: y
      });
    }
    return (h, y) => (l(), c("div", {
      class: X(["service-renderer", `service-renderer--${i.value}`])
    }, [
      (l(!0), c(L, null, oe(o.value, (g) => (l(), Z(Ks, {
        key: g._id,
        service: g,
        layout: i.value,
        widgetDisplay: r.value,
        pricingStyle: s.value,
        itemStyle: u.value,
        selected: v.value.includes(g._id),
        selectionMode: d.value,
        selectionRequired: m.value,
        onToggleSelect: p
      }, null, 8, ["service", "layout", "widgetDisplay", "pricingStyle", "itemStyle", "selected", "selectionMode", "selectionRequired"]))), 128))
    ], 2));
  }
}), PT = /* @__PURE__ */ te(xT, [["__scopeId", "data-v-c42366c2"]]), Qs = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: PT
}, Symbol.toStringTag, { value: "Module" })), FT = ["innerHTML"], BT = /* @__PURE__ */ le({
  __name: "TextRenderer",
  props: {
    content: {}
  },
  setup(t) {
    return (e, n) => (l(), c("div", {
      class: "fu-text-widget",
      innerHTML: t.content
    }, null, 8, FT));
  }
}), zT = /* @__PURE__ */ te(BT, [["__scopeId", "data-v-25719c05"]]), Zs = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: zT
}, Symbol.toStringTag, { value: "Module" })), LT = {
  key: 0,
  class: "fu-empty-state"
}, VT = ["src"], HT = /* @__PURE__ */ le({
  __name: "FuVideoRenderer",
  props: {
    src: {},
    aspectRatio: {},
    contentWidth: {},
    borderRadius: {},
    backgroundColor: {}
  },
  setup(t) {
    const e = t, n = O(() => {
      if (!e.src) return "";
      let o = e.src.trim();
      return /^https?:\/\//.test(o) || (o = "https://" + o), o.includes("youtu.be/") ? `https://www.youtube.com/embed/${o.split("youtu.be/")[1]?.split("?")[0]}` : o.includes("youtube.com/watch?v=") ? `https://www.youtube.com/embed/${new URL(o).searchParams.get("v")}` : o.includes("vimeo.com/") ? `https://player.vimeo.com/video/${o.split("vimeo.com/")[1]?.split("?")[0]}` : o.includes("loom.com/share/") ? `https://www.loom.com/embed/${o.split("loom.com/share/")[1]?.split("?")[0]}` : o;
    }), a = O(() => ({
      backgroundColor: n.value ? "transparent" : e.backgroundColor || "#f5f7ff",
      borderRadius: `${e.borderRadius ?? 8}px`,
      border: "1px solid #e5e7eb",
      width: e.contentWidth === "sm" ? "60%" : e.contentWidth === "md" ? "80%" : (e.contentWidth === "lg", "100%"),
      margin: "0 auto",
      overflow: "hidden"
    })), i = O(() => {
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
        }, null, 8, VT)
      ], 4)) : (l(), c("div", LT, [
        Q(ee(zo), { size: 28 }),
        r[0] || (r[0] = f("span", null, "No video available", -1))
      ]))
    ], 4));
  }
}), jT = /* @__PURE__ */ te(HT, [["__scopeId", "data-v-7d4d61cb"]]), Js = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: jT
}, Symbol.toStringTag, { value: "Module" })), UT = {
  key: 0,
  class: "fu-filter-dropdown__header"
}, WT = { class: "fu-filter-dropdown__title" }, YT = { class: "fu-filter-dropdown__body" }, GT = { class: "fu-filter-dropdown__footer" }, qT = /* @__PURE__ */ le({
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
    }), u = O(() => ({
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
    function y(b) {
      i.value && o.value && !o.value.contains(b.target) && r.value && !r.value.contains(b.target) && p();
    }
    function g() {
      p();
    }
    return we(() => {
    }), Ae(() => {
      document.removeEventListener("click", y), document.removeEventListener("close-all-dropdowns", g);
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
              t.title ? (l(), c("div", UT, [
                f("span", WT, w(t.title), 1),
                Q(Pe, {
                  size: "sm",
                  variant: "subtle",
                  icon: ee(Xe),
                  onClick: p
                }, null, 8, ["icon"])
              ])) : A("", !0),
              f("div", YT, [
                se(b.$slots, "content", {}, void 0, !0)
              ]),
              f("div", GT, [
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
}), KT = /* @__PURE__ */ te(qT, [["__scopeId", "data-v-7e631b59"]]), QT = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: KT
}, Symbol.toStringTag, { value: "Module" })), ZT = {}, JT = { class: "fu-smart-header" };
function XT(t, e) {
  return l(), c("header", JT, [
    se(t.$slots, "default", {}, void 0, !0)
  ]);
}
const eE = /* @__PURE__ */ te(ZT, [["render", XT], ["__scopeId", "data-v-d7719661"]]), tE = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: eE
}, Symbol.toStringTag, { value: "Module" })), nE = { class: "fu-trash-icon" }, aE = /* @__PURE__ */ le({
  __name: "FusionTrashIcon",
  setup(t) {
    return (e, n) => (l(), c("div", nE, [
      Q(ee(Ra), { size: 18 })
    ]));
  }
}), iE = /* @__PURE__ */ te(aE, [["__scopeId", "data-v-55ece37f"]]), oE = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: iE
}, Symbol.toStringTag, { value: "Module" })), rE = { class: "fu-activity-item" }, sE = { class: "fu-activity-icon" }, lE = { class: "fu-activity-content" }, uE = { class: "fu-activity-header" }, cE = { class: "fu-activity-title" }, dE = { class: "fu-activity-status" }, fE = { class: "fu-activity-text" }, mE = { class: "fu-activity-subtitle" }, hE = { class: "fu-activity-footer" }, vE = { class: "fu-activity-timestamp" }, pE = { class: "fu-activity-user" }, gE = /* @__PURE__ */ le({
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
    return (o, r) => (l(), c("div", rE, [
      f("div", sE, [
        (l(), Z(me(t.icon), {
          class: "fu-activity-icon__svg",
          size: 18
        }))
      ]),
      r[0] || (r[0] = f("div", { class: "fu-activity-line" }, null, -1)),
      f("div", lE, [
        f("div", {
          class: X(["fu-activity-card", { "is-clickable": t.clickable }]),
          onClick: i
        }, [
          f("div", uE, [
            f("div", cE, [
              f("span", dE, [
                Q(ee(Po), {
                  class: "fu-activity-status__icon",
                  size: 16
                })
              ]),
              f("p", fE, w(t.title), 1)
            ])
          ]),
          f("p", mE, w(t.fileName), 1),
          f("div", hE, [
            f("span", vE, w(t.timestamp), 1),
            f("div", pE, [
              Q(Ge, {
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
}), yE = /* @__PURE__ */ te(gE, [["__scopeId", "data-v-5eae58b1"]]), bE = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: yE
}, Symbol.toStringTag, { value: "Module" })), _E = { class: "fu-attachment-left flex flex--gap-md flex--align-center" }, CE = { class: "fu-attachment-preview" }, wE = ["src", "alt"], AE = { class: "fu-attachment-info flex flex--column" }, kE = { class: "fu-attachment-title" }, SE = { class: "fu-attachment-meta" }, TE = { class: "fu-attachment-right flex flex--align-center flex--gap-md" }, EE = { class: "flex flex--column flex--align-center" }, ME = { class: "fu-attachment-time" }, NE = /* @__PURE__ */ le({
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
    const o = O(() => /\.(png|jpe?g|gif|webp|svg)$/i.test(n.fileName)), r = O(() => /\.(mp4|mov|avi|webm)$/i.test(n.fileName));
    return (s, u) => (l(), c("div", {
      class: "fu-attachment-item",
      role: "button",
      tabindex: "0",
      onClick: i,
      onKeypress: $e(i, ["enter"])
    }, [
      f("div", _E, [
        f("div", CE, [
          o.value ? (l(), c("img", {
            key: 0,
            src: t.fileUrl,
            alt: t.fileName,
            class: "fu-attachment-thumbnail"
          }, null, 8, wE)) : r.value ? (l(), Z(ee(zo), {
            key: 1,
            class: "fu-attachment-icon",
            size: 20
          })) : (l(), Z(ee(Fo), {
            key: 2,
            class: "fu-attachment-icon",
            size: 20
          }))
        ]),
        f("div", AE, [
          f("span", kE, w(t.fileName), 1),
          f("span", SE, w(t.fileSize), 1)
        ])
      ]),
      f("div", TE, [
        f("div", EE, [
          Q(Ge, {
            src: t.userAvatar || void 0,
            name: t.userName,
            alt: t.userName,
            size: "xs",
            "show-status": !1
          }, null, 8, ["src", "name", "alt"]),
          f("span", ME, w(t.timestamp), 1)
        ]),
        t.actions?.length ? (l(), c("div", {
          key: 0,
          class: "fu-attachment-actions",
          onClick: u[0] || (u[0] = ue(() => {
          }, ["stop"]))
        }, [
          Q(zn, {
            actions: t.actions,
            align: "right"
          }, {
            trigger: ce(() => [
              Q(Pe, {
                icon: ee(Oa),
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
}), DE = /* @__PURE__ */ te(NE, [["__scopeId", "data-v-d0bbc025"]]), IE = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: DE
}, Symbol.toStringTag, { value: "Module" })), OE = { class: "fu-note-header" }, RE = { class: "fu-note-title" }, $E = ["innerHTML"], xE = { class: "fu-note-actions" }, PE = { class: "fu-note-footer" }, FE = { class: "fu-note-owner" }, BE = { class: "fu-note-date" }, zE = /* @__PURE__ */ le({
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
      f("div", OE, [
        f("div", RE, [
          f("h4", null, w(t.title), 1),
          t.content ? (l(), c("div", {
            key: 0,
            class: "fu-note-content",
            innerHTML: t.content
          }, null, 8, $E)) : A("", !0)
        ]),
        f("div", xE, [
          Q(zn, {
            actions: t.actions,
            align: "right"
          }, {
            trigger: ce(() => [
              Q(Pe, {
                icon: ee(Oa),
                variant: "ghost",
                size: "sm",
                class: "fu-action-trigger"
              }, null, 8, ["icon"])
            ]),
            _: 1
          }, 8, ["actions"])
        ])
      ]),
      f("div", PE, [
        f("div", FE, [
          Q(Ge, {
            src: t.ownerAvatar || void 0,
            name: t.ownerName,
            alt: t.ownerName,
            size: "xs",
            "show-status": !1
          }, null, 8, ["src", "name", "alt"])
        ]),
        f("span", BE, w(t.date), 1)
      ])
    ], 32));
  }
}), LE = /* @__PURE__ */ te(zE, [["__scopeId", "data-v-116d7ef0"]]), VE = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: LE
}, Symbol.toStringTag, { value: "Module" })), HE = { class: "fu-task-list" }, jE = { class: "fu-task-left flex flex--gap-xl flex--align-center" }, UE = { class: "flex flex--column flex--gap-lg w-100" }, WE = { class: "fu-task-title" }, YE = { class: "fu-task-meta" }, GE = { class: "fu-task-priority" }, qE = { class: "fu-priority-label" }, KE = { class: "fu-task-owner" }, QE = { class: "fu-task-actions" }, ZE = /* @__PURE__ */ le({
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
    const n = t, a = e, i = O(() => [
      {
        label: "Edit Task",
        icon: Bo,
        onClick: () => a("edit", n.id)
      },
      {
        label: "Delete Task",
        icon: Ra,
        onClick: () => a("delete", n.id)
      }
    ]);
    return (o, r) => (l(), c("div", HE, [
      f("div", jE, [
        f("div", UE, [
          f("div", WE, w(t.title), 1),
          f("div", YE, [
            f("div", GE, [
              f("span", {
                class: "fu-priority-dot",
                style: ie({ backgroundColor: t.priorityColor || "#999" })
              }, null, 4),
              f("span", qE, w(t.priorityLabel), 1)
            ]),
            r[0] || (r[0] = f("span", { class: "fu-dot" }, null, -1)),
            f("div", KE, [
              Q(Ge, {
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
      f("div", QE, [
        Q(zn, {
          actions: i.value,
          content: !1,
          align: "right"
        }, {
          trigger: ce(() => [
            Q(Pe, {
              icon: ee(Oa),
              variant: "subtle",
              size: "sm"
            }, null, 8, ["icon"])
          ]),
          _: 1
        }, 8, ["actions"])
      ])
    ]));
  }
}), JE = /* @__PURE__ */ te(ZE, [["__scopeId", "data-v-5d12057e"]]), XE = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: JE
}, Symbol.toStringTag, { value: "Module" })), eM = { class: "fu-kanban scrollbar__control customScrollBar" }, tM = ["draggable", "onDragstart", "onDrop"], nM = { class: "fu-kanban__column-header" }, aM = { class: "flex flex--center flex--space" }, iM = { class: "fu-kanban__column-title" }, oM = ["title"], rM = { class: "fu-kanban__header-right" }, sM = ["title", "onClick"], lM = { class: "flex flex--center flex--gap-sm" }, uM = { class: "fu-kanban__count" }, cM = {
  key: 0,
  class: "fu-kanban__edit-body"
}, dM = ["onDragover", "onDrop"], fM = ["onDragstart", "onDrop", "onClick"], mM = { class: "fu-kanban__card-header" }, hM = { class: "fu-kanban__card-body" }, vM = {
  key: 0,
  class: "fu-kanban__empty"
}, pM = ["onClick"], gM = /* @__PURE__ */ le({
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
      const D = s.value;
      if (!D) return;
      const x = r.value.find((V) => V.id === D.fromColumnId), I = r.value.find((V) => V.id === k);
      !x || !I || (x.items = x.items.filter((V) => V.id !== D.item.id), E === null ? I.items.push(D.item) : I.items.splice(E, 0, D.item), a("update:items", r.value), s.value = null, d.value = null);
    }
    function y(k) {
      n.editMode && (u.value = k);
    }
    function g(k) {
      if (!n.editMode) return;
      const E = u.value;
      if (E === null || E === k) return;
      const D = [...r.value], [x] = D.splice(E, 1);
      D.splice(k, 0, x), r.value = D.map((I, V) => ({ ...I, position: V + 1 })), a("update:columns", r.value), u.value = null;
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
    return (k, E) => (l(), c("div", eM, [
      f("div", {
        class: "fu-kanban__columns",
        onDragover: E[1] || (E[1] = ue(() => {
        }, ["prevent"]))
      }, [
        (l(!0), c(L, null, oe(r.value, (D, x) => (l(), c("div", {
          key: D.id,
          class: X(["fu-kanban__column", { "fu-kanban__column--drag": t.editMode }]),
          draggable: t.editMode,
          onDragstart: (I) => y(x),
          onDrop: (I) => g(x),
          onDragover: E[0] || (E[0] = ue(() => {
          }, ["prevent"]))
        }, [
          f("header", nM, [
            f("div", aM, [
              f("div", iM, [
                f("span", {
                  class: "fu-kanban__dot",
                  style: ie({ background: D.color || "#9ca3af" })
                }, null, 4),
                f("span", {
                  class: "fu-kanban__column-name",
                  title: D.title
                }, w(D.title), 9, oM)
              ]),
              f("div", rM, [
                f("button", {
                  class: "fu-kanban__add-item-btn",
                  title: ee(i),
                  onClick: ue((I) => _(D, x), ["stop"])
                }, " + ", 8, sM)
              ])
            ]),
            f("div", lM, [
              se(k.$slots, "column-header", {}, void 0, !0),
              f("span", uM, w(D.items.length), 1)
            ])
          ]),
          t.editMode ? (l(), c("div", cM, [
            se(k.$slots, "edit-column", {
              column: D,
              index: x
            }, void 0, !0)
          ])) : (l(), c(L, { key: 1 }, [
            f("div", {
              class: X(["fu-kanban__cards scrollbar__control customScrollBar", { "fu-kanban__cards--hover": d.value === D.id }]),
              onDragover: ue((I) => v(D.id), ["prevent"]),
              onDragleave: p,
              onDrop: (I) => h(D.id, null)
            }, [
              (l(!0), c(L, null, oe(D.items, (I, V) => (l(), c("div", {
                key: I.id,
                class: "fu-kanban__card",
                draggable: "true",
                onDragstart: (j) => m(D.id, I),
                onDrop: (j) => h(D.id, V),
                onClick: (j) => C(I, D)
              }, [
                f("header", mM, [
                  f("strong", null, w(I.title), 1)
                ]),
                f("div", hM, [
                  se(k.$slots, "card-body", {
                    item: I,
                    column: D
                  }, void 0, !0)
                ])
              ], 40, fM))), 128)),
              D.items.length ? A("", !0) : (l(), c("div", vM, w(t.noItemtext), 1))
            ], 42, dM),
            f("button", {
              class: "fu-kanban__add-card",
              onClick: (I) => _(D, x)
            }, w(ee(i)), 9, pM)
          ], 64))
        ], 42, tM))), 128)),
        t.editMode ? (l(), c("div", {
          key: 0,
          class: "fu-kanban__add-column",
          onClick: b
        }, w(ee(o)), 1)) : A("", !0)
      ], 32)
    ]));
  }
}), yM = /* @__PURE__ */ te(gM, [["__scopeId", "data-v-84721767"]]), bM = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: yM
}, Symbol.toStringTag, { value: "Module" })), _M = { class: "app-container" }, CM = { class: "app-shell" }, wM = { class: "fu-topbar" }, AM = { class: "fu-topbar-l" }, kM = { class: "fu-topbar-c" }, SM = { class: "fu-topbar-r" }, TM = { class: "fu-main-area" }, EM = { class: "fu-sidebar" }, MM = ["title"], NM = { class: "ai-panel-body" }, DM = { class: "ai-header-actions" }, IM = { class: "ai-content" }, pa = 991, Mo = "fu-app-ai-panel", No = "fu-sidebar-menu", Do = 340, OM = 500, RM = {
  __name: "AppShell",
  props: {
    listenToToggleEvent: { type: Boolean, default: !0 }
  },
  setup(t) {
    const e = M(!1), n = M(!0), a = M(!1), i = M(340), o = M(!1), r = M(typeof window < "u" ? window.innerWidth : 1200);
    let s = !1;
    const u = M(!1), d = t;
    function m() {
      r.value <= pa ? (e.value = !e.value, n.value = !0) : (n.value = !n.value, v());
    }
    function v() {
      try {
        localStorage.setItem(
          No,
          JSON.stringify({ open: n.value })
        );
      } catch {
      }
    }
    function p() {
      try {
        const x = localStorage.getItem(No);
        if (x) {
          const { open: I } = JSON.parse(x);
          n.value = I !== !1;
        }
      } catch {
      }
    }
    function h() {
      if (r.value <= pa) {
        u.value = !0, a.value = !1, E();
        return;
      }
      a.value = !a.value, E(), a.value && window.dispatchEvent(new Event("open-ai"));
    }
    function y() {
      i.value = o.value ? Do : OM, o.value = !o.value, E();
    }
    function g(x) {
      s = !0, document.body.style.cursor = "col-resize", window.addEventListener("mousemove", b), window.addEventListener("mouseup", _);
    }
    function b(x) {
      if (!s) return;
      const I = window.innerWidth - x.clientX;
      I > 280 && I < 600 && (i.value = I, E());
    }
    function _() {
      s = !1, document.body.style.cursor = "default", window.removeEventListener("mousemove", b), window.removeEventListener("mouseup", _);
    }
    function C() {
      r.value = window.innerWidth;
    }
    function k() {
      r.value <= pa && e.value && (e.value = !1);
    }
    function E() {
      const x = {
        open: a.value,
        width: i.value,
        maximized: o.value
      };
      localStorage.setItem(Mo, JSON.stringify(x));
    }
    function D() {
      const x = localStorage.getItem(Mo);
      if (x)
        try {
          const { open: I, width: V, maximized: j } = JSON.parse(x);
          a.value = !!I, i.value = V || Do, o.value = !!j;
        } catch (I) {
          console.warn("Failed to restore AI panel state:", I);
        }
    }
    return we(() => {
      if (D(), p(), window.addEventListener("resize", C), d.listenToToggleEvent && window.addEventListener("toggle-ai", h), a.value) {
        const x = () => {
          window.removeEventListener("tabs-ready", x), ge(() => {
            a.value = !0, window.dispatchEvent(new Event("open-ai"));
          });
        };
        window.addEventListener("tabs-ready", x);
      }
    }), (x, I) => {
      const V = xo("FusionActionButton");
      return l(), c("div", _M, [
        f("div", CM, [
          f("div", wM, [
            f("div", AM, [
              I[2] || (I[2] = f("svg", {
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
              ], -1)),
              f("button", {
                class: "fu-menu-toggle fu-mobile-only",
                onClick: m,
                title: "Toggle menu"
              }, [
                Q(ee(du), { size: 20 })
              ]),
              se(x.$slots, "brand-logo")
            ]),
            f("div", kM, [
              se(x.$slots, "header")
            ]),
            f("div", SM, [
              se(x.$slots, "header-right")
            ])
          ]),
          f("div", TM, [
            f("div", {
              class: X(["fu-nav-panel", { open: e.value }])
            }, [
              f("section", EM, [
                se(x.$slots, "modules-sidebar", {
                  isCollapsed: !n.value
                }),
                f("button", {
                  class: "fu-sidebar-collapse-btn",
                  onClick: m,
                  title: n.value ? "Collapse menu" : "Expand menu"
                }, [
                  (l(), Z(me(n.value ? ee(pu) : ee(yu)), { size: 16 }))
                ], 8, MM)
              ]),
              f("section", {
                class: X(["fu-menu", { "fu-menu--collapsed": !n.value }])
              }, [
                se(x.$slots, "module-menu")
              ], 2)
            ], 2),
            f("div", {
              class: X(["fu-body-area", { "ai-open": a.value }])
            }, [
              f("div", {
                onClick: k,
                class: "fu-body-slot"
              }, [
                se(x.$slots, "default")
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
                      onMousedown: g
                    }, null, 32),
                    f("div", NM, [
                      f("header", null, [
                        I[3] || (I[3] = f("h3", null, "Àdisa", -1)),
                        f("div", DM, [
                          Q(V, {
                            icon: o.value ? ee(mu) : ee(uu),
                            variant: "ghost",
                            size: "sm",
                            onClick: y
                          }, null, 8, ["icon"]),
                          Q(V, {
                            icon: ee(Xe),
                            variant: "ghost",
                            size: "sm",
                            onClick: h
                          }, null, 8, ["icon"])
                        ])
                      ]),
                      f("div", IM, [
                        se(x.$slots, "ai-content")
                      ])
                    ])
                  ], 4)) : A("", !0)
                ]),
                _: 3
              })
            ], 2)
          ])
        ]),
        u.value ? (l(), Z(tn, {
          key: 0,
          isVisible: u.value,
          title: "Adisa",
          size: "sm",
          onClose: I[0] || (I[0] = (j) => u.value = !1),
          onCancel: I[1] || (I[1] = (j) => u.value = !1)
        }, {
          default: ce(() => [...I[4] || (I[4] = [
            de(" Downlaod Skkido to use Adisa on Mobile ", -1)
          ])]),
          _: 1
        }, 8, ["isVisible"])) : A("", !0)
      ]);
    };
  }
}, $M = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: RM
}, Symbol.toStringTag, { value: "Module" })), xM = { key: 0 }, PM = {
  key: 0,
  class: "fu-listview__th fu-listview__th--checkbox"
}, FM = {
  key: 0,
  class: "fu-skeleton-cell fu-skeleton-cell--checkbox"
}, BM = ["draggable", "onDragstart", "onDragover", "onDragleave", "onDrop"], zM = {
  key: 0,
  class: "fu-listview__drag-handle",
  title: "Drag to reorder"
}, LM = {
  key: 1,
  class: "fu-skeleton-cell fu-skeleton-cell--header"
}, VM = ["role", "tabindex", "onClick", "onKeydown"], HM = { class: "fu-listview__th-label" }, jM = {
  key: 1,
  class: "fu-listview__sort-indicator"
}, UM = ["onMousedown"], WM = { key: 1 }, YM = {
  key: 0,
  class: "fu-listview__td fu-listview__td--checkbox"
}, GM = { key: 2 }, qM = ["onClick"], KM = { class: "fu-listview__cell" }, QM = /* @__PURE__ */ le({
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
    function o(S, F) {
      const J = u.value.findIndex((ne) => ne.key === F) % 5;
      return i[(S - 1) % i.length][J];
    }
    const r = O(() => n.skeletonRows ?? 8), s = M({}), u = O(() => n.columns.map((S, F) => ({
      ...S,
      width: s.value[S.key] || S.width || "150px",
      textAlign: S.textAlign || "justify",
      sortable: !!S.sortable,
      visible: S.visible !== !1,
      orderPosition: S.orderPosition ?? F
    })).filter((S) => S.visible).sort((S, F) => S.orderPosition - F.orderPosition)), d = M(!1), m = M(null), v = M(null), p = M(null), h = M("asc"), y = O(() => !!n.sort), g = O(
      () => y.value ? n.sort?.key ?? null : p.value
    ), b = O(
      () => y.value ? n.sort?.direction ?? "asc" : h.value
    ), _ = n.showHeader ?? !0, C = () => n.options?.sortable !== !1;
    function k(S) {
      return n.options?.selectable ? n.options?.isRowSelectable ? n.options.isRowSelectable(S) : !0 : !1;
    }
    function E() {
      const S = n.rows.filter((F) => F.__selected && k(F));
      a("row-selected", S);
    }
    he(d, (S) => {
      n.options?.selectable && (n.rows.forEach((F) => {
        k(F) && (F.__selected = S);
      }), E());
    });
    function D(S) {
      if (n.editMode || !C() || !S.sortable) return;
      const F = g.value, J = b.value;
      let ne = "asc";
      F === S.key && (ne = J === "asc" ? "desc" : "asc"), y.value || (p.value = S.key, h.value = ne), a("sort-change", { key: S.key, direction: ne });
    }
    function x(S) {
      a("row-clicked", S), n.options?.onRowClick?.(S);
    }
    let I = null, V = 0, j = 0;
    function R(S, F) {
      if (!n.options?.resizeColumn) return;
      I = F, V = S.clientX;
      const J = u.value.find((ne) => ne.key === F);
      j = parseInt(J?.width || "150", 10), document.addEventListener("mousemove", H), document.addEventListener("mouseup", U);
    }
    function H(S) {
      if (!I) return;
      const F = S.clientX - V;
      s.value[I] = `${Math.max(60, j + F)}px`;
    }
    function U() {
      I = null, document.removeEventListener("mousemove", H), document.removeEventListener("mouseup", U);
    }
    const $ = M(null), T = M(null);
    function N(S, F) {
      n.editMode && ($.value = F, S.dataTransfer?.setData("text/plain", F), S.dataTransfer && (S.dataTransfer.effectAllowed = "move"));
    }
    function P(S, F) {
      !n.editMode || !$.value || (S.preventDefault(), T.value = F);
    }
    function B(S) {
      T.value === S && (T.value = null);
    }
    function K(S, F) {
      if (!n.editMode || !$.value) return;
      S.preventDefault();
      const J = $.value;
      if ($.value = null, T.value = null, J === F) return;
      const ne = [...u.value], be = ne.findIndex((Me) => Me.key === J), Te = ne.findIndex((Me) => Me.key === F);
      if (be === -1 || Te === -1) return;
      const [_e] = ne.splice(be, 1);
      ne.splice(Te, 0, _e);
      const Fe = ne.map((Me, Y) => ({ key: Me.key, orderPosition: Y }));
      a("columns-reordered", Fe);
    }
    function z() {
      $.value = null, T.value = null;
    }
    function W() {
      const S = v.value;
      S && (S.style.overflowY = "hidden", requestAnimationFrame(() => {
        S.style.overflowY = "auto";
      }));
    }
    return we(() => {
      W(), window.addEventListener("resize", W);
    }), Ae(() => {
      window.removeEventListener("resize", W), document.removeEventListener("mousemove", H), document.removeEventListener("mouseup", U);
    }), (S, F) => (l(), c("div", {
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
          ee(_) ? (l(), c("thead", xM, [
            f("tr", null, [
              t.options?.selectable ? (l(), c("th", PM, [
                t.loading ? (l(), c("div", FM)) : (l(), Z(ut, {
                  key: 1,
                  modelValue: d.value,
                  "onUpdate:modelValue": F[0] || (F[0] = (J) => d.value = J),
                  size: "sm"
                }, null, 8, ["modelValue"]))
              ])) : A("", !0),
              (l(!0), c(L, null, oe(u.value, (J) => (l(), c("th", {
                key: J.key,
                style: ie({ width: J.width || "auto" }),
                class: X(["fu-listview__th", [
                  `align-${J.textAlign || "justify"}`,
                  {
                    "is-dragging": $.value === J.key,
                    "is-drag-over": T.value === J.key && $.value !== J.key
                  }
                ]]),
                draggable: t.editMode && !t.loading,
                onDragstart: (ne) => N(ne, J.key),
                onDragover: (ne) => P(ne, J.key),
                onDragleave: (ne) => B(J.key),
                onDrop: (ne) => K(ne, J.key),
                onDragend: z
              }, [
                f("div", {
                  class: X(["fu-listview__th-content", `align-${J.textAlign || "justify"}`])
                }, [
                  t.editMode && !t.loading ? (l(), c("span", zM, "⠿")) : A("", !0),
                  t.loading ? (l(), c("div", LM)) : (l(), c("div", {
                    key: 2,
                    class: X(["fu-listview__th-sortable", {
                      "is-sortable": !!J.sortable,
                      "is-active": g.value === J.key
                    }]),
                    role: J.sortable ? "button" : void 0,
                    tabindex: J.sortable ? 0 : -1,
                    onClick: (ne) => D(J),
                    onKeydown: [
                      $e(ue((ne) => D(J), ["prevent"]), ["enter"]),
                      $e(ue((ne) => D(J), ["prevent"]), ["space"])
                    ]
                  }, [
                    J.icon ? (l(), Z(me(J.icon), {
                      key: 0,
                      class: "fu-listview__th-icon"
                    })) : A("", !0),
                    f("span", HM, w(J.label), 1),
                    J.sortable ? (l(), c("span", jM, [
                      g.value === J.key ? (l(), c(L, { key: 0 }, [
                        de(w(b.value === "asc" ? "▲" : "▼"), 1)
                      ], 64)) : (l(), c(L, { key: 1 }, [
                        de("⇅")
                      ], 64))
                    ])) : A("", !0)
                  ], 42, VM)),
                  t.options?.resizeColumn && !t.loading ? (l(), c("span", {
                    key: 3,
                    class: "fu-listview__resize-handle",
                    onMousedown: ue((ne) => R(ne, J.key), ["stop"])
                  }, null, 40, UM)) : A("", !0)
                ], 2)
              ], 46, BM))), 128))
            ])
          ])) : A("", !0),
          t.loading ? (l(), c("tbody", WM, [
            (l(!0), c(L, null, oe(r.value, (J) => (l(), c("tr", {
              key: `skeleton-${J}`,
              class: "fu-listview__row fu-listview__row--skeleton"
            }, [
              t.options?.selectable ? (l(), c("td", YM, [...F[2] || (F[2] = [
                f("div", { class: "fu-skeleton-cell fu-skeleton-cell--checkbox" }, null, -1)
              ])])) : A("", !0),
              (l(!0), c(L, null, oe(u.value, (ne) => (l(), c("td", {
                key: `skeleton-${J}-${ne.key}`,
                class: X(["fu-listview__td", {
                  "is-dragging": $.value === ne.key,
                  "is-drag-over": T.value === ne.key && $.value !== ne.key
                }]),
                style: ie({ width: ne.width })
              }, [
                f("div", {
                  class: "fu-skeleton-cell",
                  style: ie({ width: o(J, ne.key) })
                }, null, 4)
              ], 6))), 128))
            ]))), 128))
          ])) : (l(), c("tbody", GM, [
            (l(!0), c(L, null, oe(t.rows, (J) => (l(), c("tr", {
              key: J[t.rowKey],
              class: "fu-listview__row",
              onClick: (ne) => x(J)
            }, [
              t.options?.selectable ? (l(), c("td", {
                key: 0,
                class: "fu-listview__td fu-listview__td--checkbox",
                onClick: F[1] || (F[1] = ue(() => {
                }, ["stop"]))
              }, [
                Q(ut, {
                  modelValue: J.__selected,
                  "onUpdate:modelValue": (ne) => J.__selected = ne,
                  onChange: E,
                  size: "sm",
                  disabled: !k(J)
                }, null, 8, ["modelValue", "onUpdate:modelValue", "disabled"])
              ])) : A("", !0),
              se(S.$slots, "tableRow", { row: J }, () => [
                (l(!0), c(L, null, oe(u.value, (ne) => (l(), c("td", {
                  key: ne.key,
                  class: X(["fu-listview__td", [
                    `align-${ne.textAlign || "justify"}`,
                    {
                      "is-dragging": $.value === ne.key,
                      "is-drag-over": T.value === ne.key && $.value !== ne.key
                    }
                  ]]),
                  style: ie({ width: ne.width })
                }, [
                  se(S.$slots, `cell-${ne.key}`, {
                    row: J,
                    col: ne
                  }, () => [
                    f("span", KM, w(J[ne.key]), 1)
                  ], !0)
                ], 6))), 128))
              ], !0)
            ], 8, qM))), 128))
          ]))
        ])
      ], 512)
    ], 512));
  }
}), ZM = /* @__PURE__ */ te(QM, [["__scopeId", "data-v-f5d93bfd"]]), JM = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: ZM
}, Symbol.toStringTag, { value: "Module" })), XM = { key: 0 }, e2 = {
  key: 0,
  class: "fu-listview__th fu-listview__th--checkbox"
}, t2 = {
  key: 0,
  class: "fu-skeleton-cell fu-skeleton-cell--checkbox"
}, n2 = {
  key: 0,
  class: "fu-skeleton-cell fu-skeleton-cell--header"
}, a2 = ["role", "tabindex", "onClick", "onKeydown"], i2 = { class: "fu-listview__th-label" }, o2 = {
  key: 1,
  class: "fu-listview__sort-indicator"
}, r2 = ["onMousedown"], s2 = { key: 1 }, l2 = {
  key: 0,
  class: "fu-listview__td fu-listview__td--checkbox"
}, u2 = { key: 2 }, c2 = ["onClick"], d2 = { class: "fu-listview__cell" }, f2 = /* @__PURE__ */ le({
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
    function o($, T) {
      const N = n.columns.findIndex((P) => P.key === T) % 5;
      return i[($ - 1) % i.length][N];
    }
    const r = O(() => n.skeletonRows ?? 8), s = M(
      n.columns.map(($) => ({
        ...$,
        width: $.width || "150px",
        textAlign: $.textAlign || "justify",
        sortable: !!$.sortable
      }))
    ), u = M(!1), d = M(null), m = M(null), v = M(null), p = M("asc"), h = O(() => !!n.sort), y = O(
      () => h.value ? n.sort?.key ?? null : v.value
    ), g = O(
      () => h.value ? n.sort?.direction ?? "asc" : p.value
    ), b = n.showHeader ?? !0, _ = () => n.options?.sortable !== !1;
    function C($) {
      return n.options?.selectable ? n.options?.isRowSelectable ? n.options.isRowSelectable($) : !0 : !1;
    }
    function k() {
      const $ = n.rows.filter((T) => T.__selected && C(T));
      a("row-selected", $);
    }
    he(u, ($) => {
      n.options?.selectable && (n.rows.forEach((T) => {
        C(T) && (T.__selected = $);
      }), k());
    });
    function E($) {
      if (!_() || !$.sortable) return;
      const T = y.value, N = g.value;
      let P = "asc";
      T === $.key && (P = N === "asc" ? "desc" : "asc"), h.value || (v.value = $.key, p.value = P), a("sort-change", { key: $.key, direction: P });
    }
    function D($) {
      a("row-clicked", $), n.options?.onRowClick?.($);
    }
    let x = null, I = 0, V = 0;
    function j($, T) {
      n.options?.resizeColumn && (x = T, I = $.clientX, V = parseInt(s.value[T].width, 10), document.addEventListener("mousemove", R), document.addEventListener("mouseup", H));
    }
    function R($) {
      if (x === null) return;
      const T = $.clientX - I;
      s.value[x].width = `${Math.max(60, V + T)}px`;
    }
    function H() {
      x = null, document.removeEventListener("mousemove", R), document.removeEventListener("mouseup", H);
    }
    function U() {
      const $ = m.value;
      $ && ($.style.overflowY = "hidden", requestAnimationFrame(() => {
        $.style.overflowY = "auto";
      }));
    }
    return we(() => {
      U(), window.addEventListener("resize", U);
    }), Ae(() => {
      window.removeEventListener("resize", U), document.removeEventListener("mousemove", R), document.removeEventListener("mouseup", H);
    }), ($, T) => (l(), c("div", {
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
          ee(b) ? (l(), c("thead", XM, [
            f("tr", null, [
              t.options?.selectable ? (l(), c("th", e2, [
                t.loading ? (l(), c("div", t2)) : (l(), Z(ut, {
                  key: 1,
                  modelValue: u.value,
                  "onUpdate:modelValue": T[0] || (T[0] = (N) => u.value = N),
                  size: "sm"
                }, null, 8, ["modelValue"]))
              ])) : A("", !0),
              (l(!0), c(L, null, oe(s.value, (N, P) => (l(), c("th", {
                key: N.key,
                style: ie({ width: N.width || "auto" }),
                class: X(["fu-listview__th", `align-${N.textAlign || "justify"}`])
              }, [
                f("div", {
                  class: X(["fu-listview__th-content", `align-${N.textAlign || "justify"}`])
                }, [
                  t.loading ? (l(), c("div", n2)) : (l(), c("div", {
                    key: 1,
                    class: X(["fu-listview__th-sortable", {
                      "is-sortable": !!N.sortable,
                      "is-active": y.value === N.key
                    }]),
                    role: N.sortable ? "button" : void 0,
                    tabindex: N.sortable ? 0 : -1,
                    onClick: (B) => E(N),
                    onKeydown: [
                      $e(ue((B) => E(N), ["prevent"]), ["enter"]),
                      $e(ue((B) => E(N), ["prevent"]), ["space"])
                    ]
                  }, [
                    N.icon ? (l(), Z(me(N.icon), {
                      key: 0,
                      class: "fu-listview__th-icon"
                    })) : A("", !0),
                    f("span", i2, w(N.label), 1),
                    N.sortable ? (l(), c("span", o2, [
                      y.value === N.key ? (l(), c(L, { key: 0 }, [
                        de(w(g.value === "asc" ? "▲" : "▼"), 1)
                      ], 64)) : (l(), c(L, { key: 1 }, [
                        de("⇅")
                      ], 64))
                    ])) : A("", !0)
                  ], 42, a2)),
                  t.options?.resizeColumn && !t.loading ? (l(), c("span", {
                    key: 2,
                    class: "fu-listview__resize-handle",
                    onMousedown: ue((B) => j(B, P), ["stop"])
                  }, null, 40, r2)) : A("", !0)
                ], 2)
              ], 6))), 128))
            ])
          ])) : A("", !0),
          t.loading ? (l(), c("tbody", s2, [
            (l(!0), c(L, null, oe(r.value, (N) => (l(), c("tr", {
              key: `skeleton-${N}`,
              class: "fu-listview__row fu-listview__row--skeleton"
            }, [
              t.options?.selectable ? (l(), c("td", l2, [...T[2] || (T[2] = [
                f("div", { class: "fu-skeleton-cell fu-skeleton-cell--checkbox" }, null, -1)
              ])])) : A("", !0),
              (l(!0), c(L, null, oe(s.value, (P) => (l(), c("td", {
                key: `skeleton-${N}-${P.key}`,
                class: "fu-listview__td",
                style: ie({ width: P.width })
              }, [
                f("div", {
                  class: "fu-skeleton-cell",
                  style: ie({ width: o(N, P.key) })
                }, null, 4)
              ], 4))), 128))
            ]))), 128))
          ])) : (l(), c("tbody", u2, [
            (l(!0), c(L, null, oe(t.rows, (N) => (l(), c("tr", {
              key: N[t.rowKey],
              class: "fu-listview__row",
              onClick: (P) => D(N)
            }, [
              t.options?.selectable ? (l(), c("td", {
                key: 0,
                class: "fu-listview__td fu-listview__td--checkbox",
                onClick: T[1] || (T[1] = ue(() => {
                }, ["stop"]))
              }, [
                Q(ut, {
                  modelValue: N.__selected,
                  "onUpdate:modelValue": (P) => N.__selected = P,
                  onChange: k,
                  size: "sm",
                  disabled: !C(N)
                }, null, 8, ["modelValue", "onUpdate:modelValue", "disabled"])
              ])) : A("", !0),
              se($.$slots, "tableRow", { row: N }, () => [
                (l(!0), c(L, null, oe(s.value, (P) => (l(), c("td", {
                  key: P.key,
                  class: X(["fu-listview__td", `align-${P.textAlign || "justify"}`]),
                  style: ie({ width: P.width })
                }, [
                  se($.$slots, `cell-${P.key}`, {
                    row: N,
                    col: P
                  }, () => [
                    f("span", d2, w(N[P.key]), 1)
                  ], !0)
                ], 6))), 128))
              ], !0)
            ], 8, c2))), 128))
          ]))
        ])
      ], 512)
    ], 512));
  }
}), m2 = /* @__PURE__ */ te(f2, [["__scopeId", "data-v-0fdbf461"]]), h2 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: m2
}, Symbol.toStringTag, { value: "Module" })), v2 = { key: 0 }, p2 = {
  key: 0,
  class: "fu-listview__th fu-listview__th--checkbox"
}, g2 = ["role", "tabindex", "onClick", "onKeydown"], y2 = { class: "fu-listview__th-label" }, b2 = {
  key: 1,
  class: "fu-listview__sort-indicator"
}, _2 = ["onMousedown"], C2 = ["onClick"], w2 = { class: "fu-listview__cell" }, A2 = /* @__PURE__ */ le({
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
      n.columns.map((R) => ({
        ...R,
        width: R.width || "150px",
        textAlign: R.textAlign || "justify",
        sortable: !!R.sortable
      }))
    ), o = M(!1), r = M(null), s = M(null), u = M(null), d = M("asc"), m = O(() => !!n.sort), v = O(
      () => m.value ? n.sort?.key ?? null : u.value
    ), p = O(
      () => m.value ? n.sort?.direction ?? "asc" : d.value
    ), h = n.showHeader ?? !0, y = () => n.options?.sortable !== !1;
    function g(R) {
      return n.options?.selectable ? n.options?.isRowSelectable ? n.options.isRowSelectable(R) : !0 : !1;
    }
    function b() {
      const R = n.rows.filter((H) => H.__selected && g(H));
      a("row-selected", R);
    }
    he(o, (R) => {
      n.options?.selectable && (n.rows.forEach((H) => {
        g(H) && (H.__selected = R);
      }), b());
    });
    function _(R) {
      if (!y() || !R.sortable) return;
      const H = v.value, U = p.value;
      let $ = "asc";
      H === R.key && ($ = U === "asc" ? "desc" : "asc"), m.value || (u.value = R.key, d.value = $), a("sort-change", {
        key: R.key,
        direction: $
      });
    }
    function C(R) {
      a("row-clicked", R), n.options?.onRowClick?.(R);
    }
    let k = null, E = 0, D = 0;
    function x(R, H) {
      n.options?.resizeColumn && (k = H, E = R.clientX, D = parseInt(i.value[H].width, 10), document.addEventListener("mousemove", I), document.addEventListener("mouseup", V));
    }
    function I(R) {
      if (k === null) return;
      const H = R.clientX - E;
      i.value[k].width = `${Math.max(60, D + H)}px`;
    }
    function V() {
      k = null, document.removeEventListener("mousemove", I), document.removeEventListener("mouseup", V);
    }
    function j() {
      const R = s.value;
      R && (R.style.overflowY = "hidden", requestAnimationFrame(() => {
        R.style.overflowY = "auto";
      }));
    }
    return we(() => {
      j(), window.addEventListener("resize", j);
    }), Ae(() => {
      window.removeEventListener("resize", j), document.removeEventListener("mousemove", I), document.removeEventListener("mouseup", V);
    }), (R, H) => (l(), c("div", {
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
          ee(h) ? (l(), c("thead", v2, [
            f("tr", null, [
              t.options?.selectable ? (l(), c("th", p2, [
                Q(ut, {
                  modelValue: o.value,
                  "onUpdate:modelValue": H[0] || (H[0] = (U) => o.value = U),
                  size: "sm"
                }, null, 8, ["modelValue"])
              ])) : A("", !0),
              (l(!0), c(L, null, oe(i.value, (U, $) => (l(), c("th", {
                key: U.key,
                style: ie({ width: U.width || "auto" }),
                class: X(["fu-listview__th", `align-${U.textAlign || "justify"}`])
              }, [
                f("div", {
                  class: X(["fu-listview__th-content", `align-${U.textAlign || "justify"}`])
                }, [
                  f("div", {
                    class: X(["fu-listview__th-sortable", {
                      "is-sortable": !!U.sortable,
                      "is-active": v.value === U.key
                    }]),
                    role: U.sortable ? "button" : void 0,
                    tabindex: U.sortable ? 0 : -1,
                    onClick: (T) => _(U),
                    onKeydown: [
                      $e(ue((T) => _(U), ["prevent"]), ["enter"]),
                      $e(ue((T) => _(U), ["prevent"]), ["space"])
                    ]
                  }, [
                    U.icon ? (l(), Z(me(U.icon), {
                      key: 0,
                      class: "fu-listview__th-icon"
                    })) : A("", !0),
                    f("span", y2, w(U.label), 1),
                    U.sortable && v.value === U.key ? (l(), c("span", b2, w(p.value === "asc" ? "▲" : "▼"), 1)) : A("", !0)
                  ], 42, g2),
                  t.options?.resizeColumn ? (l(), c("span", {
                    key: 0,
                    class: "fu-listview__resize-handle",
                    onMousedown: ue((T) => x(T, $), ["stop"])
                  }, null, 40, _2)) : A("", !0)
                ], 2)
              ], 6))), 128))
            ])
          ])) : A("", !0),
          f("tbody", null, [
            (l(!0), c(L, null, oe(t.rows, (U) => (l(), c("tr", {
              key: U[t.rowKey],
              class: "fu-listview__row",
              onClick: ($) => C(U)
            }, [
              t.options?.selectable ? (l(), c("td", {
                key: 0,
                class: "fu-listview__td fu-listview__td--checkbox",
                onClick: H[1] || (H[1] = ue(() => {
                }, ["stop"]))
              }, [
                Q(ut, {
                  modelValue: U.__selected,
                  "onUpdate:modelValue": ($) => U.__selected = $,
                  onChange: b,
                  size: "sm",
                  disabled: !g(U)
                }, null, 8, ["modelValue", "onUpdate:modelValue", "disabled"])
              ])) : A("", !0),
              se(R.$slots, "tableRow", { row: U }, () => [
                (l(!0), c(L, null, oe(i.value, ($) => (l(), c("td", {
                  key: $.key,
                  class: X(["fu-listview__td", `align-${$.textAlign || "justify"}`]),
                  style: ie({ width: $.width })
                }, [
                  se(R.$slots, `cell-${$.key}`, {
                    row: U,
                    col: $
                  }, () => [
                    f("span", w2, w(U[$.key]), 1)
                  ], !0)
                ], 6))), 128))
              ], !0)
            ], 8, C2))), 128))
          ])
        ])
      ], 512)
    ], 512));
  }
}), k2 = /* @__PURE__ */ te(A2, [["__scopeId", "data-v-1d38e1b8"]]), S2 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: k2
}, Symbol.toStringTag, { value: "Module" })), T2 = { class: "fu-confirm__body" }, E2 = { class: "fu-confirm__icon" }, M2 = { class: "fu-confirm__title" }, N2 = { class: "fu-confirm__message" }, D2 = { class: "fu-confirm__footer" }, I2 = /* @__PURE__ */ le({
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
    }, s = O(() => n.variant === "delete" ? Ra : n.variant === "warning" ? Ou : Po), u = O(() => n.variant === "delete" || n.variant === "warning" ? "danger" : "solid"), d = (m) => {
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
          f("div", T2, [
            f("div", E2, [
              (l(), Z(me(s.value)))
            ]),
            f("h3", M2, w(t.title), 1),
            f("p", N2, w(t.message), 1)
          ]),
          f("div", D2, [
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
}), O2 = /* @__PURE__ */ te(I2, [["__scopeId", "data-v-703fba8f"]]), R2 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: O2
}, Symbol.toStringTag, { value: "Module" })), $2 = {
  key: 0,
  class: "fu-preview-backdrop"
}, x2 = { class: "fu-preview-modal" }, P2 = { class: "fu-preview-header" }, F2 = { class: "fu-preview-header__left" }, B2 = { class: "fu-preview-header__right" }, z2 = { class: "fu-preview-body" }, L2 = /* @__PURE__ */ le({
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
      t.isVisible ? (l(), c("div", $2, [
        f("div", x2, [
          f("header", P2, [
            f("div", F2, [
              se(r.$slots, "header-left", {}, void 0, !0)
            ]),
            f("div", B2, [
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
          f("main", z2, [
            se(r.$slots, "default", {}, void 0, !0)
          ])
        ])
      ])) : A("", !0)
    ]));
  }
}), V2 = /* @__PURE__ */ te(L2, [["__scopeId", "data-v-671f7aaa"]]), H2 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: V2
}, Symbol.toStringTag, { value: "Module" })), j2 = { class: "fu-module-menu-wrapper scrollbar__control customScrollBar" }, U2 = { class: "fu-module-menu-wrapper__list" }, W2 = {
  key: 0,
  class: "fu-module-menu-divider",
  role: "separator"
}, Y2 = {
  key: 1,
  class: "fu-module-menu-group-title"
}, G2 = { class: "fu-module-menu-link__start" }, q2 = {
  key: 0,
  class: "fu-module-menu-empty"
}, K2 = /* @__PURE__ */ le({
  __name: "FusionModuleMenu",
  props: {
    items: {},
    groups: {},
    activePath: {}
  },
  setup(t) {
    const e = t, n = O(() => e.groups && e.groups.length ? e.groups : [{ items: e.items || [] }]), a = O(
      () => n.value.every((i) => !i.items || !i.items.length)
    );
    return (i, o) => {
      const r = xo("router-link");
      return l(), c("div", j2, [
        f("ul", U2, [
          (l(!0), c(L, null, oe(n.value, (s, u) => (l(), c(L, { key: u }, [
            u > 0 && (s.divider ?? !!s.title) ? (l(), c("li", W2)) : A("", !0),
            s.title ? (l(), c("li", Y2, w(s.title), 1)) : A("", !0),
            (l(!0), c(L, null, oe(s.items, (d) => (l(), c("li", {
              key: d.path,
              class: X({ active: t.activePath && t.activePath.startsWith(d.path) })
            }, [
              Q(r, {
                class: "fu-module-menu-link",
                to: d.path
              }, {
                default: ce(() => [
                  f("span", G2, [
                    d.icon ? (l(), Z(me(d.icon), {
                      key: 0,
                      size: 15,
                      class: "fu-module-menu-icon"
                    })) : A("", !0),
                    f("span", null, w(d.label), 1)
                  ]),
                  d.badge !== void 0 && d.badge !== null && d.badge !== "" ? (l(), Z(Ut, {
                    key: 0,
                    class: "fu-module-menu-badge",
                    text: String(d.badge),
                    size: "sm",
                    themeClass: d.badgeTheme || "fu-badge--danger-subtle"
                  }, null, 8, ["text", "themeClass"])) : A("", !0)
                ]),
                _: 2
              }, 1032, ["to"])
            ], 2))), 128))
          ], 64))), 128)),
          a.value ? (l(), c("li", q2, "No menu items")) : A("", !0)
        ]),
        se(i.$slots, "default", {}, void 0, !0)
      ]);
    };
  }
}), Q2 = /* @__PURE__ */ te(K2, [["__scopeId", "data-v-d0c0df3d"]]), Z2 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Q2
}, Symbol.toStringTag, { value: "Module" })), J2 = { class: "fu-bell-icon" }, X2 = {
  key: 2,
  class: "fu-badge"
}, eN = /* @__PURE__ */ le({
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
        f("div", J2, [
          t.bellIcon ? (l(), Z(me(t.bellIcon), {
            key: 0,
            "stroke-width": 1.5,
            class: "fu-bell-svg"
          })) : (l(), Z(ee(kl), {
            key: 1,
            class: X(["fu-bell-svg", [e.bellStyle, e.bellClass]])
          }, null, 8, ["class"])),
          t.unreadCount > 0 ? (l(), c("span", X2, w(t.unreadCount), 1)) : A("", !0)
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
}), tN = /* @__PURE__ */ te(eN, [["__scopeId", "data-v-62b8bc6e"]]), nN = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: tN
}, Symbol.toStringTag, { value: "Module" })), aN = {
  key: 0,
  class: "fu-alert__icon"
}, iN = { class: "fu-alert__content" }, oN = {
  key: 1,
  class: "fu-alert__actions"
}, rN = {
  key: 2,
  class: "fu-alert__close"
}, sN = /* @__PURE__ */ le({
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
      t.icon ? (l(), c("div", aN, [
        se(n.$slots, "icon", {}, () => [
          Q(ee(xl))
        ], !0)
      ])) : A("", !0),
      f("div", iN, [
        se(n.$slots, "default", {}, void 0, !0)
      ]),
      n.$slots.actions ? (l(), c("div", oN, [
        se(n.$slots, "actions", {}, void 0, !0)
      ])) : A("", !0),
      t.dismissible ? (l(), c("div", rN, [
        Q(Pe, {
          icon: ee(Xe),
          size: "sm",
          variant: "ghost",
          onClick: a[0] || (a[0] = (i) => e.value = !1)
        }, null, 8, ["icon"])
      ])) : A("", !0)
    ], 2)) : A("", !0);
  }
}), lN = /* @__PURE__ */ te(sN, [["__scopeId", "data-v-a9e66599"]]), uN = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: lN
}, Symbol.toStringTag, { value: "Module" })), cN = { class: "fu-toast__content" }, dN = { class: "fu-toast__message" }, fN = /* @__PURE__ */ le({
  __name: "FusionToast",
  props: {
    message: {},
    type: { default: "info" },
    duration: { default: 3500 }
  },
  setup(t) {
    const e = t, n = M(!1), a = {
      success: Fl,
      error: Hl,
      info: ga,
      dark: ga
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
            f("div", cN, [
              (l(), Z(me(a[t.type]), { class: "fu-toast__icon" })),
              f("span", dN, w(t.message), 1),
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
}), Xs = /* @__PURE__ */ te(fN, [["__scopeId", "data-v-0d4428b6"]]), mN = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Xs
}, Symbol.toStringTag, { value: "Module" })), hN = ["disabled", "aria-checked", "onClick"], vN = ["src"], pN = /* @__PURE__ */ le({
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
    const o = O(() => ({
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
        }, null, 8, vN)) : u.icon ? (l(), Z(me(u.icon), {
          key: 1,
          size: 16,
          class: "fu-pill__icon"
        })) : A("", !0),
        f("span", null, w(u.label), 1)
      ], 10, hN))), 128))
    ], 6));
  }
}), el = /* @__PURE__ */ te(pN, [["__scopeId", "data-v-4da4b906"]]), gN = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: el
}, Symbol.toStringTag, { value: "Module" })), yN = ["disabled", "aria-checked", "onClick"], bN = ["src"], _N = { class: "fu-pill__label" }, CN = { class: "fu-pill__badge" }, wN = /* @__PURE__ */ le({
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
    const r = O(() => ({
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
        }, null, 8, bN)) : d.icon ? (l(), Z(me(d.icon), {
          key: 1,
          size: 16,
          class: "fu-pill__icon"
        })) : A("", !0),
        f("span", _N, w(d.label), 1),
        f("span", CN, [
          i(d.value) ? (l(), Z(ee(Bn), {
            key: 0,
            size: 12
          })) : A("", !0)
        ])
      ], 10, yN))), 128))
    ], 6));
  }
}), tl = /* @__PURE__ */ te(wN, [["__scopeId", "data-v-5bcc1368"]]), AN = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: tl
}, Symbol.toStringTag, { value: "Module" })), kN = { class: "fu-tag-input-wrapper" }, SN = {
  key: 0,
  class: "fu-tag-input-label"
}, TN = ["disabled", "onClick"], EN = ["placeholder", "disabled", "readonly", "onKeydown"], MN = {
  key: 1,
  class: "fu-tag-input-hint"
}, NN = {
  key: 2,
  class: "fu-tag-input-error"
}, DN = {
  key: 3,
  class: "fu-tag-input-helper"
}, IN = /* @__PURE__ */ le({
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
    function u(g) {
      return n.validate ? n.validate === "email" ? s.test(g) : n.validate(g) : !0;
    }
    function d() {
      n.disabled || r.value?.focus();
    }
    function m() {
      const g = i.value.trim().replace(/,$/, "");
      if (g) {
        if (!u(g)) {
          a("invalid", g);
          return;
        }
        n.modelValue.includes(g) || a("update:modelValue", [...n.modelValue, g]), i.value = "";
      }
    }
    function v(g) {
      if (g.key === ",") {
        g.preventDefault(), m();
        return;
      }
      g.key === "Backspace" && p();
    }
    function p() {
      i.value === "" && n.modelValue.length && y(n.modelValue.length - 1);
    }
    function h() {
      o.value = !1, i.value.trim() && m();
    }
    function y(g) {
      if (n.readonly || n.disabled) return;
      const b = [...n.modelValue];
      b.splice(g, 1), a("update:modelValue", b);
    }
    return (g, b) => (l(), c("div", kN, [
      t.label ? (l(), c("label", SN, w(t.label), 1)) : A("", !0),
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
            onClick: ue((k) => y(C), ["stop"])
          }, [
            Q(ee(Xe), { size: 12 })
          ], 8, TN)
        ]))), 128)),
        Ue(f("input", {
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
        }, null, 40, EN), [
          [tt, i.value]
        ])
      ], 2),
      t.hint ? (l(), c("p", MN, [
        Q(ee(su), { size: 14 }),
        f("span", null, w(t.hint), 1)
      ])) : A("", !0),
      t.error ? (l(), c("span", NN, w(t.error), 1)) : t.helperText ? (l(), c("span", DN, w(t.helperText), 1)) : A("", !0)
    ]));
  }
}), nl = /* @__PURE__ */ te(IN, [["__scopeId", "data-v-b7fdfb89"]]), ON = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: nl
}, Symbol.toStringTag, { value: "Module" })), RN = {
  key: 0,
  class: "fu-onboarding-page__scrim"
}, $N = {
  key: 0,
  class: "fu-onboarding__transition"
}, xN = { class: "fu-onboarding__transition-text" }, PN = {
  key: 1,
  class: "fu-onboarding__body"
}, FN = { class: "fu-onboarding__question" }, BN = {
  key: 5,
  class: "fu-onboarding__helper"
}, zN = { class: "fu-onboarding__footer" }, LN = { class: "fu-onboarding__progress-track" }, VN = {
  key: 0,
  class: "fu-onboarding__footer-note"
}, HN = {
  key: 1,
  class: "fu-onboarding__nav"
}, jN = { key: 1 }, UN = { class: "fu-onboarding__next-label" }, WN = /* @__PURE__ */ le({
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
    const n = O(() => {
      const C = s.value;
      if (!C || C.type !== "select") return null;
      const k = r.value[C.id];
      return k == null ? null : (C.options ?? []).find((x) => String(x.value) === String(k)) ?? null;
    }), a = t, i = e, o = M(a.step), r = M({ ...a.answers });
    he(
      () => a.step,
      (C) => o.value = C
    );
    const s = O(() => a.steps[o.value]);
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
    const d = O(() => (o.value + 1) / a.steps.length * 100), m = O(() => {
      const C = s.value;
      if (!C) return !1;
      if (C.type === "transition" || C.required === !1) return !0;
      const k = r.value[C.id];
      return C.type === "pill-single" ? k != null : C.type === "pill-multi" || C.type === "tag-input" ? Array.isArray(k) && k.length > 0 : C.type === "text" ? typeof k == "string" && k.trim().length > 0 : C.type === "select" ? k != null : !0;
    }), v = O(() => {
      const C = s.value;
      return C?.nextLabel ? C.nextLabel : o.value === a.steps.length - 1 ? "Finish" : "Next";
    }), p = O(
      () => a.color ? { "--fu-typeform-color": a.color } : {}
    ), h = O(
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
    function y(C) {
      const k = s.value;
      if (!k) return;
      const E = k.type === "select" ? C?.value : C;
      r.value = {
        ...r.value,
        [k.id]: E
      }, i("update:answers", r.value), (k.autoAdvance ?? k.type === "pill-single") && _();
    }
    function g() {
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
      t.backdropImage ? (l(), c("div", RN)) : A("", !0),
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
        k[7] || (k[7] = An('<header class="fu-onboarding__header" data-v-ccd9279b><svg class="fu-onboarding__logo" width="91" height="23" viewBox="0 0 91 23" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-ccd9279b><path d="M22.9459 7.11506V18.8695C22.9459 21.0605 21.1697 22.8366 18.9789 22.8366H10.9739V22.7786C15.5829 22.2742 19.1832 18.3609 19.1832 13.6184C19.1832 10.7892 17.9136 8.16294 15.7048 6.40044L15.2119 6.01211L13.2524 8.47599L13.7393 8.86445C15.2003 10.0239 16.0351 11.7575 16.0351 13.6184C16.0351 16.6158 13.8438 19.1204 10.9739 19.6016C10.6435 19.6595 10.3071 19.6885 9.95931 19.6885H4.07049C1.87953 19.6885 0.103516 17.9124 0.103516 15.7215V3.96698C0.103516 1.77615 1.87953 7.36886e-06 4.07049 7.36886e-06H10.9739V0.249318C6.90408 1.20591 3.86616 4.86994 3.86616 9.22393C3.86616 12.0473 5.13581 14.6794 7.35037 16.436L7.83746 16.8303L9.79695 14.3664L9.30999 13.9721C7.85477 12.8125 7.01424 11.0849 7.01424 9.22393C7.01424 6.61499 8.66068 4.38875 10.9739 3.53065C11.6349 3.28134 12.3479 3.14809 13.0901 3.14809H18.9789C21.1697 3.14809 22.9459 4.9241 22.9459 7.11506Z" fill="#FFD37B" data-v-ccd9279b></path><path d="M35.9989 8.3817C35.8474 6.66025 34.7803 5.79965 32.7972 5.79965C31.916 5.79965 31.2276 5.98195 30.7315 6.3468C30.2358 6.71166 29.9877 7.21107 29.9877 7.84425C29.9877 8.43652 30.1704 8.84282 30.5353 9.06341C30.9002 9.2836 31.7093 9.55233 32.9625 9.86866C33.2928 9.96531 33.5476 10.034 33.7269 10.0753C35.3657 10.4883 36.481 10.8604 37.0733 11.1906C38.3815 11.8931 39.0356 12.9882 39.0356 14.4751C39.0356 15.1226 38.9256 15.7076 38.705 16.2312C38.4848 16.7542 38.1887 17.1917 37.817 17.5427C37.4449 17.894 37.0045 18.1869 36.495 18.4204C35.9854 18.6547 35.4551 18.8233 34.9042 18.9267C34.3534 19.03 33.7817 19.082 33.19 19.082C31.3444 19.082 29.8503 18.6412 28.707 17.7598C27.5644 16.8783 26.9927 15.5837 26.9927 13.876H29.5334C29.5334 14.9505 29.8849 15.7457 30.5872 16.262C31.2895 16.7783 32.2049 17.0368 33.3342 17.0368C34.326 17.0368 35.1004 16.8335 35.658 16.4274C36.2161 16.0211 36.495 15.453 36.495 14.7231C36.495 14.2549 36.347 13.8727 36.0508 13.5766C35.7547 13.2805 35.4344 13.0708 35.0903 12.9468C34.746 12.8228 34.1471 12.6507 33.2928 12.4305C33.1966 12.4026 33.1207 12.382 33.0659 12.3685C31.2343 11.9003 30.0292 11.5147 29.4508 11.2114C28.2527 10.5917 27.6124 9.63456 27.5297 8.34039V8.05094C27.5297 6.74287 28.0221 5.69972 29.0066 4.92135C29.9915 4.14351 31.3098 3.75466 32.9625 3.75466C34.5601 3.75466 35.8613 4.13302 36.8666 4.89066C37.8718 5.64818 38.4021 6.81159 38.4574 8.3817H35.9989Z" fill="currentColor" data-v-ccd9279b></path><path d="M46.3256 11.9964L50.7874 18.7512H47.9163L44.6729 13.6078L43.2686 14.9298V18.7512H40.9756V4.04354H43.2686V12.3271L47.5237 8.09235H50.4158L46.3256 11.9964Z" fill="currentColor" data-v-ccd9279b></path><path d="M57.4165 11.9964L61.8783 18.7512H59.0072L55.7637 13.6078L54.3594 14.9298V18.7512H52.0664V4.04354H54.3594V12.3271L58.6145 8.09235H61.5066L57.4165 11.9964Z" fill="currentColor" data-v-ccd9279b></path><path d="M65.5534 18.7511H63.1987V8.0922H65.5534V18.7511ZM65.5534 6.29534H63.1987V3.98162H65.5534V6.29534Z" fill="currentColor" data-v-ccd9279b></path><path d="M70.831 10.6849C70.3143 11.3387 70.056 12.2305 70.056 13.3598C70.056 14.5303 70.3215 15.4529 70.8512 16.1278C71.3814 16.8027 72.1078 17.1398 73.0309 17.1398C73.9534 17.1398 74.6731 16.8095 75.1893 16.1485C75.7056 15.4874 75.9639 14.5716 75.9639 13.4011C75.9639 12.2305 75.6989 11.3219 75.1687 10.6744C74.6385 10.0272 73.8981 9.70365 72.9481 9.70365C72.053 9.70365 71.3473 10.0306 70.831 10.6849ZM78.2155 18.7512H76.0052V17.2845C75.3307 18.455 74.1943 19.0406 72.5968 19.0406C71.0959 19.0406 69.9013 18.531 69.0129 17.5118C68.1249 16.4927 67.6807 15.1226 67.6807 13.4011C67.6807 11.6936 68.1178 10.3336 68.9921 9.32148C69.8666 8.30915 71.0407 7.80331 72.5141 7.80331C74.0154 7.80331 75.1446 8.36095 75.9018 9.47637V4.04355H78.2155V18.7512Z" fill="currentColor" data-v-ccd9279b></path><path d="M83.4188 10.6537C82.8817 11.3286 82.613 12.2512 82.613 13.4217C82.613 14.6198 82.8817 15.5563 83.4188 16.2312C83.9557 16.9057 84.6995 17.2431 85.6499 17.2431C86.5724 17.2431 87.2988 16.9023 87.829 16.2207C88.3593 15.539 88.6242 14.5992 88.6242 13.4011C88.6242 12.2305 88.3593 11.3113 87.829 10.6436C87.2988 9.9754 86.5657 9.64176 85.6292 9.64176C84.6928 9.64176 83.9557 9.9792 83.4188 10.6537ZM89.5539 9.311C90.5178 10.3302 91 11.7003 91 13.4217C91 15.1568 90.5213 16.5341 89.564 17.5531C88.6069 18.5723 87.3093 19.0819 85.6705 19.0819C84.0038 19.0819 82.6819 18.5723 81.7044 17.5531C80.7266 16.5341 80.2378 15.1568 80.2378 13.4217C80.2378 11.7003 80.73 10.3302 81.7145 9.311C82.6992 8.29224 84.0177 7.78273 85.6705 7.78273C87.2954 7.78273 88.5901 8.29224 89.5539 9.311Z" fill="currentColor" data-v-ccd9279b></path></svg></header>', 1)),
        s.value?.type === "transition" ? (l(), c("div", $N, [
          se(C.$slots, "transition", { step: s.value }, () => [
            k[6] || (k[6] = An('<svg class="fu-onboarding__logo fu-onboarding__logo--lg" width="91" height="23" viewBox="0 0 91 23" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-ccd9279b><path d="M22.9459 7.11506V18.8695C22.9459 21.0605 21.1697 22.8366 18.9789 22.8366H10.9739V22.7786C15.5829 22.2742 19.1832 18.3609 19.1832 13.6184C19.1832 10.7892 17.9136 8.16294 15.7048 6.40044L15.2119 6.01211L13.2524 8.47599L13.7393 8.86445C15.2003 10.0239 16.0351 11.7575 16.0351 13.6184C16.0351 16.6158 13.8438 19.1204 10.9739 19.6016C10.6435 19.6595 10.3071 19.6885 9.95931 19.6885H4.07049C1.87953 19.6885 0.103516 17.9124 0.103516 15.7215V3.96698C0.103516 1.77615 1.87953 7.36886e-06 4.07049 7.36886e-06H10.9739V0.249318C6.90408 1.20591 3.86616 4.86994 3.86616 9.22393C3.86616 12.0473 5.13581 14.6794 7.35037 16.436L7.83746 16.8303L9.79695 14.3664L9.30999 13.9721C7.85477 12.8125 7.01424 11.0849 7.01424 9.22393C7.01424 6.61499 8.66068 4.38875 10.9739 3.53065C11.6349 3.28134 12.3479 3.14809 13.0901 3.14809H18.9789C21.1697 3.14809 22.9459 4.9241 22.9459 7.11506Z" fill="#FFD37B" data-v-ccd9279b></path><path d="M35.9989 8.3817C35.8474 6.66025 34.7803 5.79965 32.7972 5.79965C31.916 5.79965 31.2276 5.98195 30.7315 6.3468C30.2358 6.71166 29.9877 7.21107 29.9877 7.84425C29.9877 8.43652 30.1704 8.84282 30.5353 9.06341C30.9002 9.2836 31.7093 9.55233 32.9625 9.86866C33.2928 9.96531 33.5476 10.034 33.7269 10.0753C35.3657 10.4883 36.481 10.8604 37.0733 11.1906C38.3815 11.8931 39.0356 12.9882 39.0356 14.4751C39.0356 15.1226 38.9256 15.7076 38.705 16.2312C38.4848 16.7542 38.1887 17.1917 37.817 17.5427C37.4449 17.894 37.0045 18.1869 36.495 18.4204C35.9854 18.6547 35.4551 18.8233 34.9042 18.9267C34.3534 19.03 33.7817 19.082 33.19 19.082C31.3444 19.082 29.8503 18.6412 28.707 17.7598C27.5644 16.8783 26.9927 15.5837 26.9927 13.876H29.5334C29.5334 14.9505 29.8849 15.7457 30.5872 16.262C31.2895 16.7783 32.2049 17.0368 33.3342 17.0368C34.326 17.0368 35.1004 16.8335 35.658 16.4274C36.2161 16.0211 36.495 15.453 36.495 14.7231C36.495 14.2549 36.347 13.8727 36.0508 13.5766C35.7547 13.2805 35.4344 13.0708 35.0903 12.9468C34.746 12.8228 34.1471 12.6507 33.2928 12.4305C33.1966 12.4026 33.1207 12.382 33.0659 12.3685C31.2343 11.9003 30.0292 11.5147 29.4508 11.2114C28.2527 10.5917 27.6124 9.63456 27.5297 8.34039V8.05094C27.5297 6.74287 28.0221 5.69972 29.0066 4.92135C29.9915 4.14351 31.3098 3.75466 32.9625 3.75466C34.5601 3.75466 35.8613 4.13302 36.8666 4.89066C37.8718 5.64818 38.4021 6.81159 38.4574 8.3817H35.9989Z" fill="currentColor" data-v-ccd9279b></path><path d="M46.3256 11.9964L50.7874 18.7512H47.9163L44.6729 13.6078L43.2686 14.9298V18.7512H40.9756V4.04354H43.2686V12.3271L47.5237 8.09235H50.4158L46.3256 11.9964Z" fill="currentColor" data-v-ccd9279b></path><path d="M57.4165 11.9964L61.8783 18.7512H59.0072L55.7637 13.6078L54.3594 14.9298V18.7512H52.0664V4.04354H54.3594V12.3271L58.6145 8.09235H61.5066L57.4165 11.9964Z" fill="currentColor" data-v-ccd9279b></path><path d="M65.5534 18.7511H63.1987V8.0922H65.5534V18.7511ZM65.5534 6.29534H63.1987V3.98162H65.5534V6.29534Z" fill="currentColor" data-v-ccd9279b></path><path d="M70.831 10.6849C70.3143 11.3387 70.056 12.2305 70.056 13.3598C70.056 14.5303 70.3215 15.4529 70.8512 16.1278C71.3814 16.8027 72.1078 17.1398 73.0309 17.1398C73.9534 17.1398 74.6731 16.8095 75.1893 16.1485C75.7056 15.4874 75.9639 14.5716 75.9639 13.4011C75.9639 12.2305 75.6989 11.3219 75.1687 10.6744C74.6385 10.0272 73.8981 9.70365 72.9481 9.70365C72.053 9.70365 71.3473 10.0306 70.831 10.6849ZM78.2155 18.7512H76.0052V17.2845C75.3307 18.455 74.1943 19.0406 72.5968 19.0406C71.0959 19.0406 69.9013 18.531 69.0129 17.5118C68.1249 16.4927 67.6807 15.1226 67.6807 13.4011C67.6807 11.6936 68.1178 10.3336 68.9921 9.32148C69.8666 8.30915 71.0407 7.80331 72.5141 7.80331C74.0154 7.80331 75.1446 8.36095 75.9018 9.47637V4.04355H78.2155V18.7512Z" fill="currentColor" data-v-ccd9279b></path><path d="M83.4188 10.6537C82.8817 11.3286 82.613 12.2512 82.613 13.4217C82.613 14.6198 82.8817 15.5563 83.4188 16.2312C83.9557 16.9057 84.6995 17.2431 85.6499 17.2431C86.5724 17.2431 87.2988 16.9023 87.829 16.2207C88.3593 15.539 88.6242 14.5992 88.6242 13.4011C88.6242 12.2305 88.3593 11.3113 87.829 10.6436C87.2988 9.9754 86.5657 9.64176 85.6292 9.64176C84.6928 9.64176 83.9557 9.9792 83.4188 10.6537ZM89.5539 9.311C90.5178 10.3302 91 11.7003 91 13.4217C91 15.1568 90.5213 16.5341 89.564 17.5531C88.6069 18.5723 87.3093 19.0819 85.6705 19.0819C84.0038 19.0819 82.6819 18.5723 81.7044 17.5531C80.7266 16.5341 80.2378 15.1568 80.2378 13.4217C80.2378 11.7003 80.73 10.3302 81.7145 9.311C82.6992 8.29224 84.0177 7.78273 85.6705 7.78273C87.2954 7.78273 88.5901 8.29224 89.5539 9.311Z" fill="currentColor" data-v-ccd9279b></path></svg>', 1)),
            f("p", xN, w(s.value.question), 1)
          ], !0)
        ])) : (l(), c("div", PN, [
          f("h2", FN, w(s.value?.question), 1),
          s.value?.type === "pill-single" ? (l(), Z(el, {
            key: 0,
            "model-value": r.value[s.value.id],
            options: s.value.options ?? [],
            size: "md",
            color: t.color,
            "onUpdate:modelValue": k[1] || (k[1] = (E) => y(E))
          }, null, 8, ["model-value", "options", "color"])) : s.value?.type === "pill-multi" ? (l(), Z(tl, {
            key: 1,
            "model-value": r.value[s.value.id] ?? [],
            options: s.value.options ?? [],
            size: "md",
            color: t.color,
            "onUpdate:modelValue": k[2] || (k[2] = (E) => y(E))
          }, null, 8, ["model-value", "options", "color"])) : s.value?.type === "tag-input" ? (l(), Z(nl, {
            key: 2,
            "model-value": r.value[s.value.id] ?? [],
            placeholder: s.value.placeholder,
            hint: s.value.hint,
            validate: s.value.validate,
            "onUpdate:modelValue": k[3] || (k[3] = (E) => y(E))
          }, null, 8, ["model-value", "placeholder", "hint", "validate"])) : s.value?.type === "text" ? (l(), Z(Oe, {
            key: 3,
            "model-value": r.value[s.value.id] ?? "",
            placeholder: s.value.placeholder,
            variant: "outline",
            size: "lg",
            formWrapperWidth: "100%",
            "onUpdate:modelValue": k[4] || (k[4] = (E) => y(E))
          }, null, 8, ["model-value", "placeholder"])) : s.value?.type === "select" ? (l(), Z(Lo, {
            key: 4,
            options: s.value.options ?? [],
            "model-value": n.value,
            placeholder: s.value.placeholder ?? "Select...",
            searchable: !0,
            variant: "button",
            size: "lg",
            "onUpdate:modelValue": k[5] || (k[5] = (E) => y(E))
          }, null, 8, ["options", "model-value", "placeholder"])) : A("", !0),
          s.value?.helperText ? (l(), c("p", BN, w(s.value.helperText), 1)) : A("", !0)
        ])),
        f("footer", zN, [
          f("div", LN, [
            f("div", {
              class: "fu-onboarding__progress-fill",
              style: ie({ width: d.value + "%" })
            }, null, 4)
          ]),
          t.footerNote ? (l(), c("p", VN, [
            Q(ee(ga), { size: 14 }),
            f("span", null, w(t.footerNote), 1)
          ])) : A("", !0),
          s.value?.type !== "transition" ? (l(), c("div", HN, [
            o.value > 0 ? (l(), Z(Se, {
              key: 0,
              variant: "outline",
              size: "md",
              text: "Back",
              icon: ee(Lt),
              onClick: g
            }, null, 8, ["icon"])) : (l(), c("div", jN)),
            Q(Se, {
              variant: "solid",
              size: "md",
              disabled: !m.value,
              onClick: _
            }, {
              default: ce(() => [
                f("span", UN, [
                  de(w(v.value) + " ", 1),
                  Q(ee(Vt), { size: 16 })
                ])
              ]),
              _: 1
            }, 8, ["disabled"])
          ])) : A("", !0)
        ])
      ], 4)
    ], 4));
  }
}), YN = /* @__PURE__ */ te(WN, [["__scopeId", "data-v-ccd9279b"]]), GN = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: YN
}, Symbol.toStringTag, { value: "Module" })), qN = { class: "fu-pagination" }, KN = { class: "fu-pagination__left" }, QN = {
  key: 0,
  class: "fu-pagination__info"
}, ZN = {
  key: 0,
  class: "fu-skeleton-cell fu-skeleton-cell--info"
}, JN = { class: "fu-pagination__controls" }, XN = ["disabled"], eD = ["disabled", "onClick"], tD = ["disabled"], nD = /* @__PURE__ */ le({
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
    const n = t, a = e, i = O(
      () => n.pageSizeOptions.map((p) => ({ label: String(p), value: p }))
    ), o = O({
      get() {
        return i.value.find((p) => p.value === n.pageSize) || i.value[0];
      },
      set(p) {
        a("update:pageSize", p.value), a("update:page", 1);
      }
    }), r = O(() => Math.max(1, Math.ceil(n.total / n.pageSize))), s = O(
      () => n.total === 0 ? 0 : (n.page - 1) * n.pageSize + 1
    ), u = O(() => Math.min(n.page * n.pageSize, n.total));
    function d(p) {
      p < 1 || p > r.value || a("update:page", p);
    }
    function m(p) {
      p && d(p);
    }
    const v = O(() => {
      const p = [], h = r.value, y = n.page, g = n.siblingCount, b = Math.max(2, y - g), _ = Math.min(h - 1, y + g);
      p.push({ key: "p-1", label: "1", page: 1 }), b > 2 && p.push({ key: "e-left", label: "…", ellipsis: !0 });
      for (let C = b; C <= _; C++)
        p.push({ key: `p-${C}`, label: String(C), page: C });
      return _ < h - 1 && p.push({ key: "e-right", label: "…", ellipsis: !0 }), h > 1 && p.push({ key: `p-${h}`, label: String(h), page: h }), p;
    });
    return (p, h) => (l(), c("div", qN, [
      f("div", KN, [
        t.showInfo ? (l(), c("div", QN, [
          t.loading ? (l(), c("div", ZN)) : (l(), c(L, { key: 1 }, [
            de(w(s.value) + "–" + w(u.value) + " of " + w(t.total), 1)
          ], 64))
        ])) : A("", !0),
        t.showPageSize ? (l(), Z($a, {
          key: 1,
          modelValue: o.value,
          "onUpdate:modelValue": h[0] || (h[0] = (y) => o.value = y),
          options: i.value,
          align: "left",
          size: "sm",
          disabled: t.loading
        }, null, 8, ["modelValue", "options", "disabled"])) : A("", !0)
      ]),
      f("div", JN, [
        f("button", {
          class: "fu-pagination__btn",
          disabled: t.page <= 1 || t.loading,
          onClick: h[1] || (h[1] = (y) => d(t.page - 1)),
          "aria-label": "Previous page"
        }, [
          Q(ee(Lt), { class: "fu-pagination__icon" })
        ], 8, XN),
        t.loading ? (l(), c(L, { key: 0 }, oe(5, (y) => f("div", {
          key: `skel-${y}`,
          class: "fu-skeleton-cell fu-skeleton-cell--page"
        })), 64)) : t.variant !== "simple" ? (l(!0), c(L, { key: 1 }, oe(v.value, (y) => (l(), c("button", {
          key: y.key,
          class: X(["fu-pagination__btn", { active: y.page === t.page, ellipsis: y.ellipsis }]),
          disabled: !!y.ellipsis,
          onClick: (g) => m(y.page)
        }, w(y.label), 11, eD))), 128)) : A("", !0),
        f("button", {
          class: "fu-pagination__btn",
          disabled: t.page >= r.value || t.loading,
          onClick: h[2] || (h[2] = (y) => d(t.page + 1)),
          "aria-label": "Next page"
        }, [
          Q(ee(Vt), { class: "fu-pagination__icon" })
        ], 8, tD)
      ])
    ]));
  }
}), aD = /* @__PURE__ */ te(nD, [["__scopeId", "data-v-dd31515f"]]), iD = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: aD
}, Symbol.toStringTag, { value: "Module" })), oD = {
  key: 0,
  class: "fu-panel__header px-2"
}, rD = {
  key: 0,
  class: "fu-panel__title-skeleton"
}, sD = {
  key: 1,
  class: "fu-panel__title"
}, lD = {
  key: 2,
  class: "fu-panel__actions"
}, uD = { class: "fu-panel__body-wrapper" }, cD = { class: "fu-panel__body scrollbar__control customScrollBar px-2" }, dD = {
  key: 0,
  class: "fu-panel__skeleton-body"
}, fD = /* @__PURE__ */ le({
  __name: "FuPanel",
  props: {
    title: {},
    basis: {},
    loading: { type: Boolean }
  },
  setup(t) {
    const e = t, n = O(() => e.basis ? typeof e.basis == "number" ? `${e.basis}px` : e.basis : "300px");
    return (a, i) => (l(), c("div", {
      class: "fu-panel",
      style: ie({ flexBasis: n.value })
    }, [
      t.title || a.$slots.actions ? (l(), c("div", oD, [
        t.loading ? (l(), c("div", rD)) : t.title ? (l(), c("h3", sD, w(t.title), 1)) : A("", !0),
        a.$slots.actions && !t.loading ? (l(), c("div", lD, [
          se(a.$slots, "actions")
        ])) : A("", !0)
      ])) : A("", !0),
      f("div", uD, [
        f("div", cD, [
          t.loading ? (l(), c("div", dD, [...i[0] || (i[0] = [
            An('<div class="skeleton-line" style="width:60%;height:14px;"></div><div class="skeleton-line" style="width:85%;height:14px;"></div><div class="skeleton-line" style="width:45%;height:14px;"></div><div class="skeleton-line" style="width:70%;height:14px;"></div><div class="skeleton-line" style="width:55%;height:14px;"></div>', 5)
          ])])) : se(a.$slots, "default", { key: 1 })
        ])
      ])
    ], 4));
  }
}), mD = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: fD
}, Symbol.toStringTag, { value: "Module" })), hD = {
  key: 0,
  class: "fu-input-label"
}, vD = {
  key: 0,
  class: "fu-input-required"
}, pD = ["type", "placeholder", "disabled", "required"], gD = {
  key: 1,
  class: "fu-input-error"
}, yD = /* @__PURE__ */ le({
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
      t.label ? (l(), c("label", hD, [
        de(w(t.label) + " ", 1),
        t.required ? (l(), c("span", vD, "*")) : A("", !0)
      ])) : A("", !0),
      f("div", {
        class: X(["fu-input-container", [`fu-input--${t.size}`, `fu-input--${t.variant}`, { "fu-input--error": t.error }]])
      }, [
        Ue(f("input", Pt(s.$attrs, {
          class: "fu-input",
          type: o.value ? "text" : "password",
          placeholder: t.placeholder,
          disabled: t.disabled,
          required: t.required,
          "onUpdate:modelValue": u[0] || (u[0] = (d) => i.value = d)
        }), null, 16, pD), [
          [Ro, i.value]
        ]),
        f("button", {
          type: "button",
          class: "fu-password-toggle",
          onClick: r
        }, [
          (l(), Z(me(o.value ? ee(Kl) : ee(Zl)), { class: "fu-password-icon" }))
        ])
      ], 2),
      t.error ? (l(), c("span", gD, w(t.error), 1)) : A("", !0)
    ], 4));
  }
}), bD = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: yD
}, Symbol.toStringTag, { value: "Module" })), _D = { class: "fu-progress-stepper" }, CD = { class: "fu-progress-bar" }, wD = {
  key: 0,
  class: "fu-step-labels"
}, AD = ["onClick"], kD = { class: "circle" }, SD = { class: "label" }, TD = /* @__PURE__ */ le({
  __name: "FusionProgressStepper",
  props: {
    currentStep: {},
    totalSteps: {},
    showLabels: { type: Boolean },
    steps: {}
  },
  emits: ["step-click"],
  setup(t, { emit: e }) {
    const n = t, a = e, i = O(
      () => `${(n.currentStep + 1) / n.totalSteps * 100}%`
    ), o = (r) => a("step-click", r);
    return (r, s) => (l(), c("div", _D, [
      f("div", CD, [
        f("div", {
          class: "fu-progress-fill",
          style: ie({ width: i.value })
        }, null, 4)
      ]),
      t.showLabels && t.steps ? (l(), c("div", wD, [
        (l(!0), c(L, null, oe(t.steps, (u, d) => (l(), c("div", {
          key: d,
          class: X(["fu-step-label", { active: t.currentStep === d }]),
          onClick: (m) => o(d)
        }, [
          f("div", kD, w(d + 1), 1),
          f("div", SD, w(u.title), 1)
        ], 10, AD))), 128))
      ])) : A("", !0)
    ]));
  }
}), ED = /* @__PURE__ */ te(TD, [["__scopeId", "data-v-c1884918"]]), MD = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: ED
}, Symbol.toStringTag, { value: "Module" })), ND = { class: "fu-range-control" }, DD = {
  key: 0,
  class: "fu-range-label"
}, ID = { class: "fu-range-track" }, OD = ["min", "max", "step", "value"], RD = { class: "fu-range-value" }, $D = /* @__PURE__ */ le({
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
    const o = O(
      () => n.unit ? `${n.modelValue}${n.unit}` : String(n.modelValue)
    );
    return (r, s) => (l(), c("div", ND, [
      t.label ? (l(), c("label", DD, w(t.label), 1)) : A("", !0),
      f("div", ID, [
        f("input", {
          type: "range",
          min: t.min,
          max: t.max,
          step: t.step,
          value: t.modelValue,
          onInput: i
        }, null, 40, OD),
        f("span", RD, w(o.value), 1)
      ])
    ]));
  }
}), xD = /* @__PURE__ */ te($D, [["__scopeId", "data-v-13c9a18d"]]), PD = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: xD
}, Symbol.toStringTag, { value: "Module" })), FD = {};
function BD(t, e) {
  return null;
}
const zD = /* @__PURE__ */ te(FD, [["render", BD]]), LD = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: zD
}, Symbol.toStringTag, { value: "Module" })), VD = {};
function HD(t, e) {
  return null;
}
const jD = /* @__PURE__ */ te(VD, [["render", HD]]), UD = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: jD
}, Symbol.toStringTag, { value: "Module" })), WD = {};
function YD(t, e) {
  return null;
}
const GD = /* @__PURE__ */ te(WD, [["render", YD]]), qD = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: GD
}, Symbol.toStringTag, { value: "Module" })), KD = {};
function QD(t, e) {
  return null;
}
const ZD = /* @__PURE__ */ te(KD, [["render", QD]]), JD = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: ZD
}, Symbol.toStringTag, { value: "Module" })), XD = {};
function eI(t, e) {
  return null;
}
const tI = /* @__PURE__ */ te(XD, [["render", eI]]), nI = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: tI
}, Symbol.toStringTag, { value: "Module" })), aI = {}, iI = { class: "fu-section-header" }, oI = { class: "fu-section-header__left" }, rI = { class: "fu-section-header__right" };
function sI(t, e) {
  return l(), c("div", iI, [
    f("div", oI, [
      se(t.$slots, "left", {}, void 0, !0)
    ]),
    f("div", rI, [
      se(t.$slots, "right", {}, void 0, !0)
    ])
  ]);
}
const lI = /* @__PURE__ */ te(aI, [["render", sI], ["__scopeId", "data-v-40cc5a80"]]), uI = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: lI
}, Symbol.toStringTag, { value: "Module" })), cI = { class: "fu-sidebar__list" }, dI = ["onMouseenter"], fI = ["onClick"], mI = { class: "fu-sidebar__icon-wrapper" }, hI = {
  key: 0,
  class: "fu-sidebar__badge"
}, vI = {
  key: 0,
  class: "fu-sidebar__label"
}, pI = { class: "fu-sidebar__flyout-inner" }, gI = { class: "fu-sidebar__flyout-header" }, yI = { class: "fu-sidebar__flyout-links" }, bI = ["onClick"], _I = /* @__PURE__ */ le({
  __name: "FusionSidebar",
  props: {
    modules: {},
    activeModule: {},
    backgroundColor: {},
    borderRadius: {},
    hideLabels: { type: Boolean },
    isCollapsed: { type: Boolean }
  },
  emits: ["select"],
  setup(t, { emit: e }) {
    const n = t, a = M(null), i = M({}), o = M({});
    let r = null;
    const s = O(
      () => n.modules.find((h) => h.name === a.value) ?? null
    ), u = O(() => ({
      "--fu-sidebar-bg": n.backgroundColor ?? "var(--fu-brand-background)",
      "--fu-sidebar-radius": n.borderRadius ?? "0px",
      width: n.hideLabels ? "54px" : "70px"
    }));
    function d(h, y) {
      if (!n.hideLabels) return;
      v(), a.value = y;
      const g = h.currentTarget.getBoundingClientRect(), b = g.top + g.height / 2;
      i.value = {
        position: "fixed",
        left: `${g.right + 7}px`,
        top: `${g.top}px`,
        zIndex: "99999",
        "--arrow-top": `${b - g.top}px`
      }, o.value = {
        position: "fixed",
        left: `${g.right + 8}px`,
        top: `${g.top + g.height / 2}px`,
        transform: "translateY(-50%)",
        zIndex: "99999"
      };
    }
    function m() {
      r = setTimeout(() => {
        a.value = null, r = null;
      }, 120);
    }
    function v() {
      r !== null && (clearTimeout(r), r = null);
    }
    function p(h) {
      a.value = null, h.onClick?.();
    }
    return (h, y) => (l(), c("nav", {
      class: "fu-sidebar",
      style: ie(u.value)
    }, [
      f("ul", cI, [
        (l(!0), c(L, null, oe(t.modules, (g) => (l(), c("li", {
          key: g.name,
          class: X({
            active: t.activeModule === g.name,
            "fu-sidebar__li--flyout-open": t.isCollapsed && a.value === g.name && g.links?.length
          }),
          onMouseenter: (b) => d(b, g.name),
          onMouseleave: m
        }, [
          f("div", {
            class: X(["fu-sidebar__item", { "fu-sidebar__item--collapsed": t.hideLabels }]),
            onClick: (b) => h.$emit("select", g)
          }, [
            f("div", mI, [
              (l(), Z(me(g.icon), {
                class: "fu-sidebar__icon",
                size: 20
              })),
              g.count ? (l(), c("span", hI, w(g.count > 99 ? "99+" : g.count), 1)) : A("", !0)
            ]),
            t.hideLabels ? A("", !0) : (l(), c("span", vI, w(g.label), 1))
          ], 10, fI)
        ], 42, dI))), 128))
      ]),
      (l(), Z(Ee, { to: "body" }, [
        t.hideLabels && t.isCollapsed && a.value && s.value?.links?.length ? (l(), c("div", {
          key: 0,
          class: "fu-sidebar__flyout",
          style: ie(i.value),
          onMouseenter: v,
          onMouseleave: m
        }, [
          f("div", pI, [
            f("div", gI, [
              (l(), Z(me(s.value.icon), { size: 15 })),
              f("span", null, w(s.value.label), 1)
            ]),
            f("ul", yI, [
              (l(!0), c(L, null, oe(s.value.links, (g) => (l(), c("li", {
                key: g.label,
                class: "fu-sidebar__flyout-link",
                onClick: (b) => p(g)
              }, [
                g.icon ? (l(), Z(me(g.icon), {
                  key: 0,
                  size: 14
                })) : A("", !0),
                f("span", null, w(g.label), 1)
              ], 8, bI))), 128))
            ])
          ])
        ], 36)) : t.hideLabels && !t.isCollapsed && a.value ? (l(), c("span", {
          key: 1,
          class: "fu-sidebar__tooltip",
          style: ie(o.value)
        }, w(s.value?.label), 5)) : A("", !0)
      ]))
    ], 4));
  }
}), CI = /* @__PURE__ */ te(_I, [["__scopeId", "data-v-a9891999"]]), wI = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: CI
}, Symbol.toStringTag, { value: "Module" })), AI = ["disabled", "aria-expanded"], kI = ["aria-expanded", "disabled"], SI = ["onClick"], TI = ["src"], EI = { class: "fu-split-button__option-label" }, MI = /* @__PURE__ */ le({
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
    const n = t, a = e, i = M(!1), o = M(null), r = M(null), s = O(() => n.align ?? "right"), u = M({}), d = O(() => `fu-split-button--${n.size ?? "sm"}`), m = O(() => `fu-split-button--${n.variant ?? "solid"}`), v = O(() => ({
      ...n.color ? { "--fu-split-bg": n.color } : {},
      ...n.buttonWidth ? { width: n.buttonWidth } : {}
    }));
    function p() {
      n.disabled || (i.value = !i.value, i.value && ge(() => {
        h(), window.addEventListener("click", y), window.addEventListener("resize", h);
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
    function y(_) {
      r.value?.contains(_.target) || o.value?.contains(_.target) || (i.value = !1, window.removeEventListener("click", y), window.removeEventListener("resize", h));
    }
    function g() {
      n.disabled || a("main-action");
    }
    function b(_) {
      _.onClick && _.onClick(), a("select", _), i.value = !1, window.removeEventListener("click", y), window.removeEventListener("resize", h);
    }
    return we(() => {
      Ae(() => {
        window.removeEventListener("click", y), window.removeEventListener("resize", h);
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
        onClick: g,
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
      ], 8, AI),
      f("button", {
        class: "fu-split-button__toggle",
        onClick: p,
        "aria-expanded": i.value,
        disabled: t.disabled,
        type: "button",
        "aria-label": "Toggle dropdown"
      }, [
        Q(ee(xe))
      ], 8, kI),
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
                }, null, 8, TI)) : A("", !0),
                f("span", EI, w(k.label), 1)
              ], 8, SI))), 128))
            ], 6)) : A("", !0)
          ]),
          _: 1
        })
      ]))
    ], 6));
  }
}), NI = /* @__PURE__ */ te(MI, [["__scopeId", "data-v-3901e2f9"]]), DI = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: NI
}, Symbol.toStringTag, { value: "Module" })), II = {
  key: 0,
  class: "fu-empty__visual"
}, OI = ["src", "alt"], RI = { class: "fu-empty__body" }, $I = { class: "fu-empty__title" }, xI = {
  key: 0,
  class: "fu-empty__description"
}, PI = {
  key: 1,
  class: "fu-empty__content"
}, FI = {
  key: 2,
  class: "fu-empty__actions"
}, BI = {
  key: 3,
  class: "fu-empty__cards"
}, zI = /* @__PURE__ */ le({
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
      t.visual && t.visual.type !== "none" ? (l(), c("div", II, [
        t.visual.type === "icon" ? (l(), Z(me(t.visual.value), {
          key: 0,
          class: "fu-empty__icon"
        })) : t.visual.type === "image" ? (l(), c("img", {
          key: 1,
          src: t.visual.src,
          alt: t.visual.alt,
          class: "fu-empty__image"
        }, null, 8, OI)) : A("", !0)
      ])) : A("", !0),
      f("div", RI, [
        f("p", $I, w(t.title), 1),
        t.description ? (l(), c("p", xI, w(t.description), 1)) : A("", !0)
      ]),
      e.$slots.default ? (l(), c("div", PI, [
        se(e.$slots, "default", {}, void 0, !0)
      ])) : A("", !0),
      t.primaryAction || t.secondaryActions?.length ? (l(), c("div", FI, [
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
      t.cards?.length ? (l(), c("div", BI, [
        (l(!0), c(L, null, oe(t.cards, (a, i) => (l(), Z(Vo, {
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
}), LI = /* @__PURE__ */ te(zI, [["__scopeId", "data-v-bb0ca385"]]), VI = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: LI
}, Symbol.toStringTag, { value: "Module" })), HI = ["aria-checked", "disabled"], jI = /* @__PURE__ */ le({
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
    const o = O(() => {
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
    ])], 10, HI));
  }
}), UI = /* @__PURE__ */ te(jI, [["__scopeId", "data-v-aa0801de"]]), WI = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: UI
}, Symbol.toStringTag, { value: "Module" })), YI = { class: "fu-theme-selector" }, GI = { class: "fu-theme-grid" }, qI = ["onClick"], KI = {
  key: 0,
  class: "fu-theme-check"
}, QI = { class: "fu-theme-label" }, ZI = /* @__PURE__ */ le({
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
    return (i, o) => (l(), c("div", YI, [
      f("div", GI, [
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
            t.modelValue === r.key ? (l(), c("div", KI, [
              Q(ee(Bn), { class: "fu-check-icon" })
            ])) : A("", !0)
          ], 2),
          f("span", QI, w(r.name), 1)
        ], 10, qI))), 128))
      ])
    ]));
  }
}), JI = /* @__PURE__ */ te(ZI, [["__scopeId", "data-v-ba4f6e91"]]), XI = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: JI
}, Symbol.toStringTag, { value: "Module" })), eO = { class: "fu-toolbar__left" }, tO = { class: "fu-toolbar__actions" }, nO = /* @__PURE__ */ le({
  __name: "FusionToolbar",
  props: {
    wrap: { type: Boolean, default: !0 },
    gap: { type: String, default: "md" },
    align: { type: String, default: "center" }
  },
  setup(t) {
    const e = t, n = O(() => ({
      "flex--wrap": e.wrap,
      [`flex--gap-${e.gap}`]: !!e.gap,
      [`align--${e.align}`]: !!e.align
    }));
    return (a, i) => (l(), c("div", {
      class: X(["fu-toolbar", n.value])
    }, [
      f("div", eO, [
        se(a.$slots, "left", {}, void 0, !0)
      ]),
      f("div", tO, [
        se(a.$slots, "right", {}, void 0, !0)
      ])
    ], 2));
  }
}), aO = /* @__PURE__ */ te(nO, [["__scopeId", "data-v-93de348d"]]), iO = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: aO
}, Symbol.toStringTag, { value: "Module" })), oO = {
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
}, rO = { class: "fu-under-construction" }, sO = { class: "fu-under-construction__inner" }, lO = ["src", "alt"], uO = { class: "fu-under-construction__content" }, cO = { class: "fu-under-construction__title" }, dO = { class: "fu-under-construction__subtitle" };
function fO(t, e, n, a, i, o) {
  return l(), c("div", rO, [
    f("div", sO, [
      f("img", {
        class: "fu-under-construction__image",
        src: n.imageSrc,
        alt: n.imageAlt
      }, null, 8, lO),
      f("div", uO, [
        f("h1", cO, w(n.title), 1),
        f("p", dO, w(n.subtitle), 1),
        se(t.$slots, "default")
      ])
    ])
  ]);
}
const mO = /* @__PURE__ */ te(oO, [["render", fO]]), hO = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: mO
}, Symbol.toStringTag, { value: "Module" }));
function Io() {
  return ({ message: t, type: e = "info", duration: n = 3500 }) => {
    const a = document.createElement("div");
    document.body.appendChild(a);
    const i = fl(Xs, { message: t, type: e, duration: n });
    i.mount(a), setTimeout(() => {
      i.unmount(), document.body.removeChild(a);
    }, n + 500);
  };
}
const al = localStorage.getItem("theme") || "auto", Rt = M(al);
function vO() {
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}
function di(t) {
  const e = t === "auto" ? vO() : t;
  document.documentElement.setAttribute("data-theme", e), localStorage.setItem("theme", t);
}
di(al);
window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", () => {
  Rt.value === "auto" && di("auto");
});
Da(() => di(Rt.value));
function yO() {
  return {
    theme: Rt,
    setTheme: (t) => {
      Rt.value = t;
    },
    toggleTheme: () => {
      Rt.value = Rt.value === "dark" ? "light" : "dark";
    }
  };
}
const Oo = /* @__PURE__ */ Object.assign({ "./components/StatusDropdown/FusionStatusDropdown.vue": ju, "./components/TextInput/EditableDisplayField.vue": ac, "./components/TextInput/FusionTextInput.vue": fc, "./components/accordion/FusionAccordion.vue": yc, "./components/actionButton/FusionActionButton.vue": Gu, "./components/activityTimeline/FuActivityTimeline.vue": Nc, "./components/alertBanner/FusionAlertBanner.vue": Lc, "./components/autocomplete/FusionAutocomplete.vue": ld, "./components/avatar/FuAvatar.vue": Zu, "./components/avatar/FuAvatarGroup.vue": dd, "./components/badge/FusionBadge.vue": md, "./components/button/FusionButton.vue": yd, "./components/buttonTab/FusionButtonTab.vue": Ed, "./components/cards/FusionClientStateCard.vue": $d, "./components/cards/FusionInfoCard.vue": Vd, "./components/cards/FusionStatCard.vue": Jd, "./components/checkbox/FusionCheckbox.vue": af, "./components/codeInput/FusionCodeInput.vue": df, "./components/colourPallet/FuColorPopover.vue": yf, "./components/combobox/FuCombobox.vue": Nf, "./components/datePicker/dateField/FusionDatePicker.vue": em, "./components/datePicker/datePickerBackup.vue": _m, "./components/datePicker/monthPicker/FusionMonthPicker.vue": Dm, "./components/datePicker/plainDate/FusionPlainDatePicker.vue": Ym, "./components/datePicker/time/FusionTimePicker.vue": Qm, "./components/documentViewer/Contract/ContractRenderer.vue": ep, "./components/documentViewer/Contract/DateCaptureField.vue": nv, "./components/documentViewer/Contract/FieldCaptureOverlay.vue": Kv, "./components/documentViewer/Contract/FileUploadCaptureModal.vue": hv, "./components/documentViewer/Contract/InitialsCaptureModal.vue": Kh, "./components/documentViewer/Contract/PageThumbnailStrip.vue": dp, "./components/documentViewer/Contract/SignatureCaptureModal.vue": Bh, "./components/documentViewer/DocumentViewerShell.vue": Yp, "./components/documentViewer/components/MoreActionsDrawer.vue": Sp, "./components/drawer/FusionDrawer.vue": eg, "./components/dropdown/FusionDropdownButton.vue": ig, "./components/dropdownInline/FusionDropdownInline.vue": cg, "./components/dropdownMenu/DropdownMenu.vue": Cg, "./components/editWrapper/EditableFieldWrapper.vue": Ng, "./components/editor/blockContent/BlockRenderer.vue": Og, "./components/editor/contract/FuContractRenderer.vue": ir, "./components/editor/contract/FuSignaturePad.vue": xg, "./components/editor/dividerRender/DividerRenderer.vue": or, "./components/editor/documentRender/FuDocumentRenderer.vue": hy, "./components/editor/imageRender/ImageRenderer.vue": sr, "./components/editor/invoiceRender/FuinvoicePreview.vue": lr, "./components/editor/pageRender/FormRender.vue": z0, "./components/editor/pageRender/PageRenderer.vue": dy, "./components/editor/questionRender/FuQuestionRenderer.vue": fr, "./components/editor/renders/FuEmbedRenderer.vue": kT, "./components/editor/scheduler/FuSchedulerWidget.vue": qs, "./components/editor/serviceRender/ServiceCard.vue": $T, "./components/editor/serviceRender/ServiceRenderer.vue": Qs, "./components/editor/textRender/TextRenderer.vue": Zs, "./components/editor/videoRender/FuVideoRenderer.vue": Js, "./components/fileUploader/FusionUpload.vue": dv, "./components/filterDropdown/FusionFilterDropdown.vue": QT, "./components/floatingHeader/FusionSmartHeader.vue": tE, "./components/icons/FusionTrashIcon.vue": oE, "./components/items/activity/FusionActivityItem.vue": bE, "./components/items/attachments/FusionAttachment.vue": IE, "./components/items/notes/FusionNoteCard.vue": VE, "./components/items/task/FusionTaskItem.vue": XE, "./components/kanban/Kanban.vue": bM, "./components/layout/AppShell.vue": $M, "./components/list/FusionListView.vue": JM, "./components/list/ListviewBackup.vue": h2, "./components/list/TableBackup.vue": S2, "./components/modal/FusionConfirmDialog.vue": R2, "./components/modal/FusionModal.vue": ch, "./components/modal/FusionPreviewModal.vue": H2, "./components/modulemenu/FusionModuleMenu.vue": Z2, "./components/notification/FuNotification.vue": nN, "./components/notifications/FuAlert.vue": uN, "./components/notifications/FusionToast.vue": mN, "./components/onboarding/FusionOnboarding.vue": GN, "./components/onboarding/FusionPillMultiSelect.vue": AN, "./components/onboarding/FusionPillSelect.vue": gN, "./components/onboarding/FusionTagInput.vue": ON, "./components/pagination/FusionPagination.vue": iD, "./components/panel/FuPanel.vue": mD, "./components/password/FusionPasswordInput.vue": bD, "./components/popover/FuPopover.vue": Jh, "./components/progress/FusionProgressStepper.vue": MD, "./components/radio/FusionRadio.vue": X0, "./components/rangeControl/FusionRangeControl.vue": PD, "./components/renderer/DocumentRenderer.vue": Xm, "./components/renderer/widgets/DividerWidget.vue": LD, "./components/renderer/widgets/ImageWidget.vue": UD, "./components/renderer/widgets/ServiceWidget.vue": qD, "./components/renderer/widgets/TextWidget.vue": JD, "./components/renderer/widgets/VideoWidget.vue": nI, "./components/section/FuSectionHeader.vue": uI, "./components/sidebarmenu/FusionSidebar.vue": wI, "./components/splitButton/FusionSplitButton.vue": DI, "./components/states/FusionEmpty.vue": VI, "./components/switch/FusionSwitch.vue": WI, "./components/tabs/FusionTab.vue": Ah, "./components/textArea/FusionTextArea.vue": G0, "./components/theme/FuThemeSelector.vue": XI, "./components/toolbar/FusionToolbar.vue": iO, "./components/utilities/Fuunderconstruction.vue": hO }), bO = {
  install(t) {
    for (const e in Oo) {
      const n = Oo[e].default, a = n.name || e.split("/").pop()?.replace(".vue", "");
      t.component(a, n);
    }
    t.config.globalProperties.FusionToast = (e) => {
      Io()(e);
    }, typeof window < "u" && (window.FusionToast = (e) => {
      Io()(e);
    });
  }
};
export {
  Ge as FuAvatar,
  zc as FusionAlertBanner,
  Rd as FusionClientStateCard,
  Vo as FusionInfoCard,
  Dt as UserStatus,
  bO as default,
  yO as useTheme,
  Io as useToast
};
//# sourceMappingURL=fusion-binary-ui.es.js.map
