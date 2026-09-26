import { h as pt, defineComponent as le, ref as N, reactive as vr, watch as ve, onMounted as _e, onBeforeUnmount as Ae, openBlock as l, createElementBlock as f, normalizeClass as Z, toDisplayString as _, createCommentVNode as A, createElementVNode as m, createBlock as X, resolveDynamicComponent as ge, normalizeStyle as ne, createVNode as J, unref as oe, Teleport as De, Transition as He, withCtx as fe, Fragment as j, renderList as re, nextTick as we, computed as O, withModifiers as ue, createTextVNode as ce, renderSlot as se, withDirectives as Ve, mergeProps as xt, vModelDynamic as pr, vShow as _a, createStaticVNode as yn, withKeys as xe, vModelText as Xe, toRaw as Is, defineAsyncComponent as Je, toHandlers as Os, useCssVars as Rs, useSlots as xs, shallowRef as $s, resolveComponent as gr, KeepAlive as Ps, createApp as Fs, watchEffect as Bs } from "vue";
/**
 * @license lucide-vue-next v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ti = (t) => t.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), zs = (t) => t.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (e, n, a) => a ? a.toUpperCase() : n.toLowerCase()
), Ls = (t) => {
  const e = zs(t);
  return e.charAt(0).toUpperCase() + e.slice(1);
}, Hs = (...t) => t.filter((e, n, a) => !!e && e.trim() !== "" && a.indexOf(e) === n).join(" ").trim(), ni = (t) => t === "";
/**
 * @license lucide-vue-next v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var Vt = {
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
const Vs = ({
  name: t,
  iconNode: e,
  absoluteStrokeWidth: n,
  "absolute-stroke-width": a,
  strokeWidth: i,
  "stroke-width": r,
  size: o = Vt.width,
  color: s = Vt.stroke,
  ...u
}, { slots: c }) => pt(
  "svg",
  {
    ...Vt,
    ...u,
    width: o,
    height: o,
    stroke: s,
    "stroke-width": ni(n) || ni(a) || n === !0 || a === !0 ? Number(i || r || Vt["stroke-width"]) * 24 / Number(o) : i || r || Vt["stroke-width"],
    class: Hs(
      "lucide",
      u.class,
      ...t ? [`lucide-${ti(Ls(t))}-icon`, `lucide-${ti(t)}`] : ["lucide-icon"]
    )
  },
  [...e.map((d) => pt(...d)), ...c.default ? [c.default()] : []]
);
/**
 * @license lucide-vue-next v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ke = (t, e) => (n, { slots: a, attrs: i }) => pt(
  Vs,
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
const js = ke("bell", [
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
const ka = ke("check", [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]]);
/**
 * @license lucide-vue-next v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Le = ke("chevron-down", [
  ["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]
]);
/**
 * @license lucide-vue-next v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Bt = ke("chevron-left", [
  ["path", { d: "m15 18-6-6 6-6", key: "1wnfg3" }]
]);
/**
 * @license lucide-vue-next v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const zt = ke("chevron-right", [
  ["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }]
]);
/**
 * @license lucide-vue-next v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const yr = ke("chevron-up", [
  ["path", { d: "m18 15-6-6-6 6", key: "153udz" }]
]);
/**
 * @license lucide-vue-next v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Us = ke("circle-alert", [
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
const br = ke("circle-check-big", [
  ["path", { d: "M21.801 10A10 10 0 1 1 17 3.335", key: "yps3ct" }],
  ["path", { d: "m9 11 3 3L22 4", key: "1pflzl" }]
]);
/**
 * @license lucide-vue-next v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ws = ke("circle-check", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "m9 12 2 2 4-4", key: "dzmm74" }]
]);
/**
 * @license lucide-vue-next v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ys = ke("circle-x", [
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
const Sa = ke("ellipsis-vertical", [
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
const Gs = ke("eye-off", [
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
const Ks = ke("eye", [
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
const qs = ke("file-text", [
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
const Qs = ke("image", [
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
const ca = ke("info", [
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
const Zs = ke("lightbulb", [
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
const Js = ke("maximize-2", [
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
const Xs = ke("minimize-2", [
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
const ai = ke("monitor-smartphone", [
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
const el = ke("search", [
  ["path", { d: "m21 21-4.34-4.34", key: "14j7rj" }],
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }]
]);
/**
 * @license lucide-vue-next v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Cr = ke("square-pen", [
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
const Ta = ke("trash-2", [
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
const tl = ke("triangle-alert", [
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
const wr = ke("video", [
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
const Ct = ke("x", [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
]), nl = {
  key: 0,
  class: "fu-status-dropdown__label-text"
}, al = ["disabled"], il = { key: 0 }, rl = ["onClick"], ol = { class: "fu-status-dropdown__item-label" }, sl = /* @__PURE__ */ le({
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
    const n = t, a = e, i = N(!1), r = N(null), o = N(null), s = N(n.modelValue || null), u = vr({
      position: "absolute",
      visibility: "hidden",
      opacity: "0",
      zIndex: "9999"
    });
    ve(
      () => n.modelValue,
      (g) => s.value = g
    );
    function c() {
      if (!r.value || !o.value) return;
      const g = r.value.getBoundingClientRect(), b = o.value.getBoundingClientRect(), w = window.innerHeight - g.bottom, k = g.top, T = w < b.height && k > w;
      let M = g.left + window.scrollX, x = "none";
      n.align === "center" && (M += g.width / 2, x = "translateX(-50%)"), n.align === "right" && (M = g.right + window.scrollX, x = "translateX(-100%)"), u.left = `${M}px`, u.transform = x, u.minWidth = `${g.width}px`, T ? u.top = `${g.top + window.scrollY - b.height - 6}px` : u.top = `${g.bottom + window.scrollY + 6}px`, u.visibility = "visible", u.opacity = "1";
    }
    const d = async () => {
      n.disabled || n.readonly || (i.value = !i.value, i.value && (await we(), c(), await we(), c()));
    }, h = (g) => {
      s.value = g, a("update:modelValue", g), i.value = !1;
    }, p = (g) => {
      const b = g.target;
      i.value && r.value && o.value && !r.value.contains(b) && !o.value.contains(b) && (i.value = !1);
    }, v = () => {
      i.value && (i.value = !1);
    }, y = (g) => {
      g.key === "Escape" && (i.value = !1);
    };
    return _e(() => {
      document.addEventListener("click", p), window.addEventListener("resize", v), window.addEventListener("scroll", v, !0), document.addEventListener("keydown", y);
    }), Ae(() => {
      document.removeEventListener("click", p), window.removeEventListener("resize", v), window.removeEventListener("scroll", v, !0), document.removeEventListener("keydown", y);
    }), (g, b) => (l(), f("div", {
      class: Z(["fu-status-dropdown", {
        "fu-status-dropdown--disabled": t.disabled,
        "fu-status-dropdown--readonly": t.readonly
      }]),
      ref_key: "dropdown",
      ref: r
    }, [
      t.label ? (l(), f("div", nl, _(t.label), 1)) : A("", !0),
      m("button", {
        class: "fu-status-dropdown__button",
        onClick: d,
        disabled: t.disabled
      }, [
        s.value ? (l(), f("span", il, [
          s.value.icon ? (l(), X(ge(s.value.icon), {
            key: 0,
            class: "fu-status-dropdown__icon"
          })) : s.value.color ? (l(), f("span", {
            key: 1,
            class: "fu-status-dropdown__dot",
            style: ne({ backgroundColor: s.value.color })
          }, null, 4)) : A("", !0)
        ])) : A("", !0),
        m("span", {
          class: Z(["fu-status-dropdown__label", { "fu-status-dropdown__placeholder": !s.value }])
        }, _(s.value?.label || t.placeholder), 3),
        J(oe(Le), { class: "fu-status-dropdown__chevron" })
      ], 8, al),
      (l(), X(De, { to: "body" }, [
        J(He, { name: "fade" }, {
          default: fe(() => [
            i.value ? (l(), f("ul", {
              key: 0,
              ref_key: "menuRef",
              ref: o,
              class: "fu-status-dropdown__menu",
              style: ne(u)
            }, [
              (l(!0), f(j, null, re(t.options, (C) => (l(), f("li", {
                key: C.label,
                class: "fu-status-dropdown__item",
                onClick: (w) => h(C)
              }, [
                C.icon ? (l(), X(ge(C.icon), {
                  key: 0,
                  class: "fu-status-dropdown__icon"
                })) : C.color ? (l(), f("span", {
                  key: 1,
                  class: "fu-status-dropdown__dot",
                  style: ne({ backgroundColor: C.color })
                }, null, 4)) : A("", !0),
                m("span", ol, _(C.label), 1)
              ], 8, rl))), 128))
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
}, Ea = /* @__PURE__ */ ae(sl, [["__scopeId", "data-v-8259c9bf"]]), ll = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Ea
}, Symbol.toStringTag, { value: "Module" })), ul = ["disabled"], cl = {
  key: 0,
  class: "fu-spinner"
}, dl = /* @__PURE__ */ le({
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
    const e = N(!1), n = N({});
    function a(r) {
      const o = r.currentTarget.getBoundingClientRect();
      n.value = {
        position: "fixed",
        left: `${o.left + o.width / 2}px`,
        top: `${o.top - 8}px`,
        transform: "translateX(-50%) translateY(-100%)",
        zIndex: 99999
      }, e.value = !0;
    }
    function i() {
      e.value = !1;
    }
    return (r, o) => (l(), f("div", {
      class: "fu-action-btn-wrapper",
      onMouseenter: a,
      onMouseleave: i
    }, [
      m("button", {
        class: Z(["fu-action-btn", [
          `fu-action-btn--${t.size}`,
          `fu-action-btn--${t.variant}`,
          { "is-loading": t.loading }
        ]]),
        disabled: t.disabled || t.loading,
        onClick: o[0] || (o[0] = (s) => t.loading ? null : r.$emit("click", s))
      }, [
        t.loading ? (l(), f("span", cl)) : t.icon ? (l(), X(ge(t.icon), {
          key: 1,
          class: "fu-action-btn__icon",
          size: 20
        })) : A("", !0)
      ], 10, ul),
      (l(), X(De, { to: "body" }, [
        t.tooltip && e.value ? (l(), f("span", {
          key: 0,
          class: "fu-tooltip",
          style: ne(n.value)
        }, _(t.tooltip), 5)) : A("", !0)
      ]))
    ], 32));
  }
}), $e = /* @__PURE__ */ ae(dl, [["__scopeId", "data-v-b726044f"]]), fl = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: $e
}, Symbol.toStringTag, { value: "Module" }));
var Mt = /* @__PURE__ */ ((t) => (t[t.Offline = 0] = "Offline", t[t.Active = 1] = "Active", t[t.Away = 2] = "Away", t[t.Busy = 3] = "Busy", t[t.DoNotDisturb = 4] = "DoNotDisturb", t[t.Invisible = 5] = "Invisible", t))(Mt || {});
const ml = ["src", "alt"], hl = {
  key: 1,
  class: "fu-avatar__placeholder"
}, vl = {
  key: 2,
  class: "fu-avatar__edit-overlay"
}, pl = /* @__PURE__ */ le({
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
    const n = t, a = e, i = N(null), r = O(
      () => n.name ? n.name.split(" ").map((d) => d[0]).join("").slice(0, 2).toUpperCase() : ""
    ), o = () => {
      n.editable && i.value?.click();
    }, s = (d) => {
      const h = d.target?.files?.[0];
      if (!h) return;
      const p = new FileReader();
      p.onload = () => {
        a("update:src", p.result);
      }, p.readAsDataURL(h);
    }, u = () => {
      a("remove");
    }, c = O(() => {
      switch (n.status) {
        case Mt.Active:
        case 1:
          return "fu-status-dot--active";
        case Mt.Away:
        case 2:
          return "fu-status-dot--away";
        case Mt.Busy:
        case 3:
          return "fu-status-dot--busy";
        case Mt.DoNotDisturb:
        case 4:
          return "fu-status-dot--dnd";
        case Mt.Invisible:
        case 5:
          return "fu-status-dot--invisible";
        default:
          return "fu-status-dot--offline";
      }
    });
    return (d, h) => (l(), f("div", {
      class: Z(["fu-avatar", [`fu-avatar--${t.size}`, { "fu-avatar--editable": t.editable }]])
    }, [
      m("div", {
        class: "fu-avatar__wrapper",
        onClick: o
      }, [
        t.src ? (l(), f("img", {
          key: 0,
          src: t.src,
          alt: t.alt,
          class: "fu-avatar__image"
        }, null, 8, ml)) : (l(), f("span", hl, _(r.value), 1)),
        t.editable ? (l(), f("span", vl, " Edit ")) : A("", !0),
        t.editable && t.src && t.allowRemove ? (l(), f("button", {
          key: 3,
          class: "fu-avatar__remove",
          onClick: ue(u, ["stop"]),
          "aria-label": "Remove photo"
        }, " × ")) : A("", !0),
        t.showStatus && t.status !== void 0 ? (l(), f("span", {
          key: 4,
          class: Z(["fu-status-dot", c.value])
        }, null, 2)) : A("", !0),
        m("input", {
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
}), Ge = /* @__PURE__ */ ae(pl, [["__scopeId", "data-v-51778eaa"]]), gl = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Ge
}, Symbol.toStringTag, { value: "Module" })), yl = { class: "edf-container" }, bl = {
  key: 0,
  class: "edf-label"
}, Cl = { class: "edf-text" }, wl = /* @__PURE__ */ le({
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
    const n = e, a = N(!1);
    function i(r) {
      n("edit", r);
    }
    return (r, o) => (l(), f("div", yl, [
      t.label ? (l(), f("label", bl, _(t.label), 1)) : A("", !0),
      m("div", {
        class: Z(["edf-wrapper", [`edf--${t.variant}`]]),
        onMouseenter: o[0] || (o[0] = (s) => a.value = !0),
        onMouseleave: o[1] || (o[1] = (s) => a.value = !1),
        ref: "container"
      }, [
        t.avatarSrc || t.avatarName ? (l(), X(Ge, {
          key: 0,
          src: t.avatarSrc,
          name: t.avatarName,
          size: "xs",
          "show-status": !1,
          class: "edf-avatar"
        }, null, 8, ["src", "name"])) : A("", !0),
        m("span", Cl, _(t.text), 1),
        a.value ? (l(), X($e, {
          key: 1,
          class: "edf-edit-btn",
          icon: oe(Cr),
          size: "sm",
          variant: "subtle",
          onClick: i
        }, null, 8, ["icon"])) : A("", !0)
      ], 34)
    ]));
  }
}), Al = /* @__PURE__ */ ae(wl, [["__scopeId", "data-v-f0200fd3"]]), _l = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Al
}, Symbol.toStringTag, { value: "Module" })), kl = ["for"], Sl = {
  key: 0,
  class: "fu-input-required"
}, Tl = {
  key: 0,
  class: "fu-input-icon fu-input-icon--left"
}, El = {
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
}, Ml = ["id", "name", "type", "placeholder", "disabled", "readonly", "required", "aria-invalid", "aria-describedby", "inputmode", "min", "max", "step"], Nl = {
  key: 2,
  class: "fu-input-icon fu-input-icon--right"
}, Dl = ["id"], Il = /* @__PURE__ */ le({
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
    function r() {
      v.value = "", a("update:modelValue", "");
    }
    const o = `fu-input-${Math.random().toString(36).slice(2, 9)}`, s = O(() => n.id || o), u = O(() => n.name || s.value), c = O(() => {
      if (n.mask === "phone" || n.mask === "card") return "numeric";
      if (n.mask === "currency") return "decimal";
      if (n.type === "number") return "numeric";
    }), d = O(() => n.variant !== "typeform" ? {} : {
      ...n.font ? { "--fu-typeform-font": n.font } : {},
      ...n.color ? { "--fu-typeform-color": n.color } : {},
      ...n.fontSize ? { "--fu-typeform-font-size": n.fontSize } : {}
    });
    function h(y) {
      if (!n.mask) return y;
      switch (n.mask) {
        case "phone":
          return y.replace(/\D/g, "").slice(0, 11).replace(/^(\d{5})(\d{0,6})$/, (b, C, w) => w ? `${C} ${w}` : C);
        case "card":
          return y.replace(/\D/g, "").slice(0, 16).replace(/(\d{4})(?=\d)/g, "$1 ");
        case "currency": {
          const b = y.replace(/[^\d.]/g, "").split("."), C = b[0] || "", w = b.length > 1 ? "." + b[1].slice(0, 2) : "";
          return (C ? new Intl.NumberFormat("en-GB").format(Number(C)) : "") + w;
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
    const v = N(h(String(n.modelValue ?? "")));
    return ve(
      () => n.modelValue,
      (y) => {
        const g = h(String(y ?? ""));
        g !== v.value && (v.value = g);
      }
    ), ve(v, (y) => {
      const g = h(String(y));
      if (g !== y) {
        v.value = g;
        return;
      }
      a("update:modelValue", p(g));
    }), (y, g) => (l(), f("div", {
      class: "fu-input-wrapper",
      style: ne({ width: t.formWrapperWidth })
    }, [
      t.label ? (l(), f("label", {
        key: 0,
        class: "fu-input-label",
        for: s.value
      }, [
        ce(_(t.label) + " ", 1),
        t.required ? (l(), f("span", Sl, "*")) : A("", !0)
      ], 8, kl)) : A("", !0),
      m("div", {
        class: Z(["fu-input-container", [`fu-input--${t.size}`, `fu-input--${t.variant}`, { "fu-input--error": t.error }]]),
        style: ne(d.value)
      }, [
        y.$slots.left || i.value ? (l(), f("div", Tl, [
          y.$slots.left ? se(y.$slots, "left", { key: 0 }, void 0, !0) : (l(), f("svg", El, [...g[1] || (g[1] = [
            m("circle", {
              cx: "11",
              cy: "11",
              r: "8"
            }, null, -1),
            m("line", {
              x1: "21",
              y1: "21",
              x2: "16.65",
              y2: "16.65"
            }, null, -1)
          ])]))
        ])) : A("", !0),
        Ve(m("input", xt(y.$attrs, {
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
          inputmode: c.value,
          min: t.type === "number" ? t.min : void 0,
          max: t.type === "number" ? t.max : void 0,
          step: t.type === "number" ? t.step : void 0,
          "onUpdate:modelValue": g[0] || (g[0] = (b) => v.value = b)
        }), null, 16, Ml), [
          [pr, v.value]
        ]),
        i.value && v.value ? (l(), f("div", {
          key: 1,
          class: "fu-input-icon fu-input-icon--right fu-input-clear",
          onClick: r
        }, [...g[2] || (g[2] = [
          m("svg", {
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
            m("line", {
              x1: "18",
              y1: "6",
              x2: "6",
              y2: "18"
            }),
            m("line", {
              x1: "6",
              y1: "6",
              x2: "18",
              y2: "18"
            })
          ], -1)
        ])])) : y.$slots.right ? (l(), f("div", Nl, [
          se(y.$slots, "right", {}, void 0, !0)
        ])) : A("", !0)
      ], 6),
      t.error ? (l(), f("span", {
        key: 1,
        class: "fu-input-error",
        id: `${s.value}-error`
      }, _(t.error), 9, Dl)) : A("", !0)
    ], 4));
  }
}), Re = /* @__PURE__ */ ae(Il, [["__scopeId", "data-v-de66768b"]]), Ol = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Re
}, Symbol.toStringTag, { value: "Module" })), Rl = ["onClick", "disabled"], xl = { class: "fu-accordion__header-content" }, $l = { class: "fu-accordion__body" }, Pl = /* @__PURE__ */ le({
  __name: "FusionAccordion",
  props: {
    items: {},
    defaultOpen: {},
    type: {},
    theme: {}
  },
  setup(t) {
    const e = t, n = N(e.defaultOpen || []);
    function a(r) {
      return n.value.includes(r);
    }
    function i(r) {
      const o = a(r);
      e.type === "single" ? n.value = o ? [] : [r] : o ? n.value = n.value.filter((s) => s !== r) : n.value.push(r);
    }
    return (r, o) => (l(), f("div", {
      class: Z(["fu-accordion", [`fu-accordion--${t.theme}`]])
    }, [
      (l(!0), f(j, null, re(t.items, (s) => (l(), f("div", {
        key: s.key,
        class: "fu-accordion__item"
      }, [
        m("button", {
          class: Z(["fu-accordion__header", {
            "is-open": a(s.key),
            "is-disabled": s.disabled
          }]),
          onClick: (u) => i(s.key),
          disabled: s.disabled
        }, [
          m("div", xl, [
            s.icon ? (l(), X(ge(s.icon), {
              key: 0,
              size: 16,
              class: "fu-accordion__icon"
            })) : A("", !0),
            m("span", null, _(s.title), 1)
          ]),
          (l(), f("svg", {
            class: Z(["fu-accordion__chevron", { "is-open": a(s.key) }]),
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            viewBox: "0 0 24 24",
            stroke: "currentColor"
          }, [...o[0] || (o[0] = [
            m("path", {
              "stroke-linecap": "round",
              "stroke-linejoin": "round",
              "stroke-width": "2",
              d: "M6 9l6 6 6-6"
            }, null, -1)
          ])], 2))
        ], 10, Rl),
        Ve(m("div", $l, [
          se(r.$slots, s.key, {}, void 0, !0)
        ], 512), [
          [_a, a(s.key)]
        ])
      ]))), 128))
    ], 2));
  }
}), Fl = /* @__PURE__ */ ae(Pl, [["__scopeId", "data-v-f069f986"]]), Bl = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Fl
}, Symbol.toStringTag, { value: "Module" })), zl = {
  key: 0,
  class: "fu-status-dropdown__label-text"
}, Ll = { key: 1 }, Hl = {
  key: 0,
  class: "flex"
}, Vl = ["onClick"], jl = {
  key: 1,
  class: "fu-placeholder"
}, Ul = {
  key: 1,
  class: "flex flex--center flex--gap-md"
}, Wl = {
  key: 2,
  class: "fu-status-dropdown__input-trigger"
}, Yl = {
  key: 0,
  class: "fu-search-wrapper"
}, Gl = {
  key: 1,
  class: "fu-options-scroll scrollbar__control customScrollBar"
}, Kl = { class: "fu-status-dropdown__group-label" }, ql = ["onClick"], Ql = { class: "fu-item-content" }, Zl = { class: "fu-item-label" }, Jl = {
  key: 0,
  class: "fu-item-meta"
}, Xl = ["onClick"], eu = { class: "fu-item-content" }, tu = { class: "fu-item-label" }, nu = {
  key: 0,
  class: "fu-item-meta"
}, au = {
  key: 2,
  class: "fu-status-dropdown__empty"
}, iu = {
  key: 3,
  class: "fu-input-error"
}, ru = /* @__PURE__ */ le({
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
    const n = t, a = e, i = N(!1), r = N(""), o = N(null), s = N(null), u = N(null), c = N(null), d = N({}), h = N(null), p = N([]), v = O(() => n.async === !0);
    ve(
      () => n.modelValue,
      (G) => {
        n.multiple && Array.isArray(G) ? p.value = G : h.value = G;
      },
      { immediate: !0 }
    ), ve(r, (G) => {
      v.value && (G.length < n.minSearchLength || a("search", G));
    });
    const y = O(() => Array.isArray(n.groups) && n.groups.length > 0), g = O(() => {
      if (!y.value) return [];
      if (v.value) return n.groups;
      const G = r.value.toLowerCase().trim();
      return n.groups.map((V) => ({
        ...V,
        options: G ? V.options.filter((Y) => Y.label.toLowerCase().includes(G)) : V.options
      })).filter((V) => V.options.length > 0);
    }), b = O(() => v.value || !r.value ? n.options : n.options.filter(
      (G) => G.label.toLowerCase().includes(r.value.toLowerCase())
    )), C = O(
      () => y.value ? g.value.some((G) => G.options.length > 0) : b.value.length > 0
    );
    function w() {
      const G = o.value?.querySelector("button, input");
      if (!G) return;
      const V = G.getBoundingClientRect();
      d.value = {
        position: "fixed",
        top: `${V.bottom + 4}px`,
        left: `${V.left}px`,
        width: `${V.width}px`,
        zIndex: "9999"
      };
    }
    function k() {
      i.value = !i.value, i.value && we(() => {
        w(), n.searchable && we(() => {
          const G = c.value?.$el?.querySelector("input") || s.value?.querySelector("input");
          G?.focus(), G?.select();
        });
      });
    }
    function T(G, V) {
      return G.value === V.value && G.groupKey === V.groupKey;
    }
    function M(G) {
      if (n.multiple) {
        const V = p.value.find((Y) => T(Y, G));
        p.value = V ? p.value.filter((Y) => !T(Y, G)) : [...p.value, G], a("update:modelValue", p.value);
      } else
        h.value = G, a("update:modelValue", G), i.value = !1;
    }
    function x(G) {
      p.value = p.value.filter((V) => !T(V, G)), a("update:modelValue", p.value);
    }
    function L(G) {
      o.value?.contains(G.target) || s.value?.contains(G.target) || (i.value = !1);
    }
    function K(G) {
      if (!i.value) return;
      const V = G.target;
      s.value?.contains(V) || s.value === V || (i.value = !1);
    }
    return _e(() => {
      document.addEventListener("click", L), window.addEventListener("scroll", K, { passive: !0 });
    }), Ae(() => {
      document.removeEventListener("click", L), window.removeEventListener("scroll", K);
    }), (G, V) => (l(), f("div", {
      class: "fu-status-dropdown",
      ref_key: "dropdownRef",
      ref: o
    }, [
      t.label ? (l(), f("div", zl, _(t.label), 1)) : A("", !0),
      t.variant === "button" ? (l(), f("div", Ll, [
        m("button", {
          class: Z(["fu-status-dropdown__button", [`fu-input--${t.size}`, { "fu-input--error": t.error }]]),
          onClick: k
        }, [
          t.multiple ? (l(), f("div", Hl, [
            p.value.length ? (l(!0), f(j, { key: 0 }, re(p.value, (Y) => (l(), f("span", {
              key: Y.value,
              class: "fu-tag"
            }, [
              Y.type === "icon" ? (l(), X(ge(Y.icon), {
                key: 0,
                size: "14"
              })) : Y.type === "image" ? (l(), X(Ge, {
                key: 1,
                src: Y.imageUrl,
                name: Y.label,
                size: "xs"
              }, null, 8, ["src", "name"])) : A("", !0),
              ce(" " + _(Y.label) + " ", 1),
              m("span", {
                class: "fu-tag__remove",
                onClick: ue((U) => x(Y), ["stop"])
              }, "×", 8, Vl)
            ]))), 128)) : (l(), f("span", jl, _(t.placeholder), 1))
          ])) : (l(), f("div", Ul, [
            h.value?.type === "icon" ? (l(), X(ge(h.value.icon), {
              key: 0,
              size: "16"
            })) : h.value?.type === "image" ? (l(), X(Ge, {
              key: 1,
              src: h.value.imageUrl,
              name: h.value.label,
              size: "xs"
            }, null, 8, ["src", "name"])) : A("", !0),
            m("span", null, _(h.value?.label || t.placeholder), 1)
          ])),
          V[2] || (V[2] = m("svg", {
            class: "fu-status-dropdown__chevron",
            viewBox: "0 0 20 20"
          }, [
            m("path", {
              d: "M6 8l4 4 4-4",
              stroke: "currentColor",
              "stroke-width": "1.5"
            })
          ], -1))
        ], 2)
      ])) : (l(), f("div", Wl, [
        J(Re, {
          size: t.size,
          readonly: "",
          variant: "outline",
          formWrapperWidth: t.formWrapperWidth,
          placeholder: h.value?.label || t.placeholder,
          onFocus: k,
          onClick: k
        }, null, 8, ["size", "formWrapperWidth", "placeholder"])
      ])),
      (l(), X(De, { to: "body" }, [
        J(He, { name: "fade" }, {
          default: fe(() => [
            i.value ? (l(), f("div", {
              key: 0,
              class: "fu-status-dropdown__menu",
              style: ne(d.value),
              ref_key: "menuRef",
              ref: s
            }, [
              t.searchable ? (l(), f("div", Yl, [
                J(Re, {
                  ref_key: "searchInputRef",
                  ref: c,
                  modelValue: r.value,
                  "onUpdate:modelValue": V[1] || (V[1] = (Y) => r.value = Y),
                  type: "text",
                  placeholder: t.searchPlaceholder,
                  size: t.size,
                  formWrapperWidth: "100%"
                }, {
                  right: fe(() => [
                    m("button", {
                      class: "fu-search-clear",
                      onClick: V[0] || (V[0] = (Y) => r.value ? r.value = "" : i.value = !1)
                    }, " × ")
                  ]),
                  _: 1
                }, 8, ["modelValue", "placeholder", "size"])
              ])) : A("", !0),
              C.value ? (l(), f("div", Gl, [
                y.value ? (l(!0), f(j, { key: 0 }, re(g.value, (Y) => (l(), f(j, {
                  key: Y.key
                }, [
                  m("div", Kl, _(Y.label), 1),
                  (l(!0), f(j, null, re(Y.options, (U) => (l(), f("div", {
                    key: `${Y.key}-${U.value}`,
                    class: "fu-status-dropdown__item",
                    onClick: (R) => M({ ...U, groupKey: Y.key })
                  }, [
                    U.type === "icon" ? (l(), X(ge(U.icon), {
                      key: 0,
                      size: "16"
                    })) : U.type === "image" ? (l(), X(Ge, {
                      key: 1,
                      src: U.imageUrl,
                      name: U.label,
                      size: "xs"
                    }, null, 8, ["src", "name"])) : A("", !0),
                    m("div", Ql, [
                      m("span", Zl, _(U.label), 1),
                      t.meta && U[t.meta] ? (l(), f("span", Jl, _(U[t.meta]), 1)) : A("", !0)
                    ])
                  ], 8, ql))), 128))
                ], 64))), 128)) : (l(!0), f(j, { key: 1 }, re(b.value, (Y) => (l(), f("div", {
                  key: Y.value,
                  class: "fu-status-dropdown__item",
                  onClick: (U) => M(Y)
                }, [
                  Y.type === "icon" ? (l(), X(ge(Y.icon), {
                    key: 0,
                    size: "16"
                  })) : Y.type === "image" ? (l(), X(Ge, {
                    key: 1,
                    src: Y.imageUrl,
                    name: Y.label,
                    size: "xs"
                  }, null, 8, ["src", "name"])) : A("", !0),
                  m("div", eu, [
                    m("span", tu, _(Y.label), 1),
                    t.meta && Y[t.meta] ? (l(), f("span", nu, _(Y[t.meta]), 1)) : A("", !0)
                  ])
                ], 8, Xl))), 128)),
                m("div", {
                  class: "fu-status-dropdown__slot-actions",
                  ref_key: "actionsRef",
                  ref: u
                }, [
                  se(G.$slots, "actions")
                ], 512)
              ])) : (l(), f("div", au, _(t.noResultsText), 1))
            ], 4)) : A("", !0)
          ]),
          _: 3
        })
      ])),
      t.error ? (l(), f("span", iu, _(t.error), 1)) : A("", !0)
    ], 512));
  }
}), Ar = /* @__PURE__ */ ae(ru, [["__scopeId", "data-v-9d3e12af"]]), ou = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Ar
}, Symbol.toStringTag, { value: "Module" })), su = /* @__PURE__ */ le({
  __name: "FuAvatarGroup",
  props: {
    users: {},
    max: {},
    size: {}
  },
  emits: ["click"],
  setup(t) {
    const e = t, n = e.max ?? 3, a = e.users.slice(0, n), i = e.users.length - n;
    return (r, o) => (l(), f("div", {
      class: "fu-avatar-group",
      onClick: o[0] || (o[0] = (s) => r.$emit("click"))
    }, [
      (l(!0), f(j, null, re(oe(a), (s, u) => (l(), X(Ge, {
        key: s.id || u,
        src: s.src,
        name: s.name,
        alt: s.alt,
        size: t.size
      }, null, 8, ["src", "name", "alt", "size"]))), 128)),
      i > 0 ? (l(), f("div", {
        key: 0,
        class: Z(["fu-avatar fu-avatar--more", `fu-avatar--${t.size}`])
      }, " +" + _(i), 2)) : A("", !0)
    ]));
  }
}), lu = /* @__PURE__ */ ae(su, [["__scopeId", "data-v-d339fd2f"]]), uu = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: lu
}, Symbol.toStringTag, { value: "Module" })), cu = /* @__PURE__ */ le({
  __name: "FusionBadge",
  props: {
    text: { default: "Badge" },
    size: { default: "md" },
    variant: { default: "solid" },
    themeClass: { default: "" }
  },
  setup(t) {
    return (e, n) => (l(), f("span", {
      class: Z(["fu-badge", [`fu-badge--${t.variant}`, `fu-badge--${t.size}`, t.themeClass]])
    }, [
      se(e.$slots, "default", {}, () => [
        ce(_(t.text), 1)
      ], !0)
    ], 2));
  }
}), du = /* @__PURE__ */ ae(cu, [["__scopeId", "data-v-b42fd659"]]), fu = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: du
}, Symbol.toStringTag, { value: "Module" })), mu = {
  key: 0,
  class: "fu-spinner"
}, hu = { key: 2 }, vu = { key: 3 }, pu = /* @__PURE__ */ le({
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
    const e = N(!1), n = N({});
    function a(r) {
      const o = r.currentTarget.getBoundingClientRect();
      n.value = {
        position: "fixed",
        left: `${o.left + o.width / 2}px`,
        top: `${o.top - 8}px`,
        transform: "translateX(-50%) translateY(-100%)",
        zIndex: "99999"
      }, e.value = !0;
    }
    function i() {
      e.value = !1;
    }
    return (r, o) => (l(), f("div", {
      class: Z(["fu-btn-wrapper", { "has-tooltip": t.tooltip }]),
      style: ne(t.buttonWidth ? { width: t.buttonWidth } : {}),
      onMouseenter: a,
      onMouseleave: i
    }, [
      (l(), X(ge(t.link ? "a" : "button"), {
        class: Z(["fu-btn", [`fu-btn--${t.variant}`, `fu-btn--${t.size}`, { "is-loading": t.loading }]]),
        href: t.link || void 0,
        target: t.link ? t.target : void 0,
        rel: t.link && t.target === "_blank" ? "noopener noreferrer" : void 0,
        disabled: !t.link && (t.disabled || t.loading),
        onClick: o[0] || (o[0] = (s) => !t.link && !t.loading ? r.$emit("click", s) : null),
        style: ne(t.buttonWidth ? { width: t.buttonWidth } : {})
      }, {
        default: fe(() => [
          t.loading ? (l(), f("span", mu)) : A("", !0),
          t.icon ? (l(), X(ge(t.icon), {
            key: 1,
            class: "fu-btn-icon",
            size: 16
          })) : A("", !0),
          t.loading ? (l(), f("span", hu, _(t.loadingText || "Loading..."), 1)) : (l(), f("span", vu, [
            se(r.$slots, "default", {}, () => [
              ce(_(t.text), 1)
            ], !0)
          ]))
        ]),
        _: 3
      }, 8, ["class", "href", "target", "rel", "disabled", "style"])),
      (l(), X(De, { to: "body" }, [
        t.tooltip && e.value ? (l(), f("span", {
          key: 0,
          class: "fu-btn-tooltip",
          style: ne(n.value)
        }, _(t.tooltip), 5)) : A("", !0)
      ]))
    ], 38));
  }
}), Ee = /* @__PURE__ */ ae(pu, [["__scopeId", "data-v-d6df7556"]]), gu = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Ee
}, Symbol.toStringTag, { value: "Module" })), yu = ["name", "value", "disabled", "checked", "aria-readonly"], bu = {
  class: "fu-button-tab__control",
  "aria-hidden": "true"
}, Cu = {
  key: 0,
  class: "fu-button-tab__dot"
}, wu = { class: "fu-button-tab__content" }, Au = {
  key: 0,
  class: "fu-button-tab__title"
}, _u = {
  key: 1,
  class: "fu-button-tab__description"
}, ku = /* @__PURE__ */ le({
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
    const n = t, a = e, i = O(() => n.modelValue === n.value), r = O(
      () => n.color ? { "--fu-button-tab-accent": n.color } : {}
    );
    function o(u) {
      n.readonly && u.preventDefault();
    }
    function s() {
      n.readonly || a("update:modelValue", n.value);
    }
    return (u, c) => (l(), f("label", {
      class: Z(["fu-button-tab", [
        `fu-button-tab--${t.size}`,
        {
          "is-checked": i.value,
          "is-disabled": t.disabled,
          "is-readonly": t.readonly
        }
      ]]),
      style: ne(r.value)
    }, [
      m("input", {
        type: "radio",
        class: "fu-button-tab__input",
        name: t.name,
        value: t.value,
        disabled: t.disabled,
        checked: i.value,
        "aria-readonly": t.readonly,
        onClick: o,
        onChange: s
      }, null, 40, yu),
      m("span", bu, [
        i.value ? (l(), f("span", Cu)) : A("", !0)
      ]),
      m("span", wu, [
        t.title || u.$slots.title ? (l(), f("span", Au, [
          se(u.$slots, "title", {}, () => [
            ce(_(t.title), 1)
          ], !0)
        ])) : A("", !0),
        t.description || u.$slots.description ? (l(), f("span", _u, [
          se(u.$slots, "description", {}, () => [
            ce(_(t.description), 1)
          ], !0)
        ])) : A("", !0),
        se(u.$slots, "default", {}, void 0, !0)
      ])
    ], 6));
  }
}), Su = /* @__PURE__ */ ae(ku, [["__scopeId", "data-v-c6dff9b5"]]), Tu = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Su
}, Symbol.toStringTag, { value: "Module" })), Eu = { class: "fu-info-card__visual" }, Mu = ["src", "alt"], Nu = { class: "fu-info-card__body" }, Du = { class: "fu-info-card__title" }, Iu = {
  key: 0,
  class: "fu-info-card__description"
}, Ou = /* @__PURE__ */ le({
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
    function r() {
      n.clickable && a("click");
    }
    return (o, s) => (l(), X(ge(t.clickable ? "button" : "div"), {
      class: Z(["fu-info-card", { "fu-info-card--clickable": t.clickable }]),
      type: t.clickable ? "button" : void 0,
      onClick: r
    }, {
      default: fe(() => [
        m("div", Eu, [
          t.image ? (l(), f("img", {
            key: 0,
            src: t.image,
            alt: t.imageAlt || t.title,
            class: "fu-info-card__image"
          }, null, 8, Mu)) : (l(), f("div", {
            key: 1,
            class: "fu-info-card__initial",
            style: ne({ background: t.color })
          }, _(i.value), 5))
        ]),
        m("div", Nu, [
          m("span", Du, _(t.title), 1),
          t.description ? (l(), f("span", Iu, _(t.description), 1)) : A("", !0)
        ]),
        o.$slots.actions ? (l(), f("div", {
          key: 0,
          class: "fu-info-card__actions",
          onClick: s[0] || (s[0] = ue(() => {
          }, ["stop"]))
        }, [
          se(o.$slots, "actions", {}, void 0, !0)
        ])) : A("", !0)
      ]),
      _: 3
    }, 8, ["class", "type"]));
  }
}), _r = /* @__PURE__ */ ae(Ou, [["__scopeId", "data-v-eb7005af"]]), Ru = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _r
}, Symbol.toStringTag, { value: "Module" })), xu = {
  key: 0,
  class: "icon-box"
}, $u = { class: "content" }, Pu = { class: "value" }, Fu = { class: "subtitle" }, Bu = {
  key: 0,
  class: "caption"
}, zu = { class: "title" }, Lu = { class: "value" }, Hu = {
  key: 0,
  class: "caption"
}, Vu = /* @__PURE__ */ le({
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
    return (e, n) => (l(), f("div", {
      class: Z(["fu-stat-card", [
        `variant-${t.variant}`,
        t.bordered ? "bordered" : "",
        t.shadow ? "shadow" : "",
        t.loading ? "is-loading" : ""
      ]])
    }, [
      t.loading ? (l(), f(j, { key: 0 }, [
        t.variant === "icon-left" ? (l(), f(j, { key: 0 }, [
          n[0] || (n[0] = yn('<div class="skeleton-icon" data-v-5fd69633></div><div class="skeleton-content" data-v-5fd69633><div class="skeleton-line skeleton-value" data-v-5fd69633></div><div class="skeleton-line skeleton-subtitle" data-v-5fd69633></div><div class="skeleton-line skeleton-caption" data-v-5fd69633></div></div>', 2))
        ], 64)) : (l(), f(j, { key: 1 }, [
          n[1] || (n[1] = m("div", { class: "skeleton-line skeleton-title" }, null, -1)),
          n[2] || (n[2] = m("div", { class: "skeleton-line skeleton-value--lg" }, null, -1)),
          n[3] || (n[3] = m("div", { class: "skeleton-line skeleton-caption" }, null, -1))
        ], 64))
      ], 64)) : t.variant === "icon-left" ? (l(), f(j, { key: 1 }, [
        t.icon ? (l(), f("div", xu, [
          (l(), X(ge(t.icon), { class: "fu-icon" }))
        ])) : A("", !0),
        m("div", $u, [
          m("div", Pu, _(t.value), 1),
          m("div", Fu, _(t.title), 1),
          t.subtitle ? (l(), f("div", Bu, _(t.subtitle), 1)) : A("", !0)
        ])
      ], 64)) : (l(), f(j, { key: 2 }, [
        m("div", zu, _(t.title), 1),
        m("div", Lu, _(t.value), 1),
        t.subtitle ? (l(), f("div", Hu, _(t.subtitle), 1)) : A("", !0)
      ], 64))
    ], 2));
  }
}), ju = /* @__PURE__ */ ae(Vu, [["__scopeId", "data-v-5fd69633"]]), Uu = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: ju
}, Symbol.toStringTag, { value: "Module" })), Wu = ["for"], Yu = ["id", "checked", "disabled"], Gu = {
  key: 0,
  class: "fu-checkbox__label"
}, Ku = /* @__PURE__ */ le({
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
    return (e, n) => (l(), f("label", {
      class: Z(["fu-checkbox", [`fu-checkbox--${t.size}`, { "fu-checkbox--disabled": t.disabled }]]),
      for: t.id
    }, [
      m("input", {
        type: "checkbox",
        class: "fu-checkbox__input",
        id: t.id,
        checked: t.modelValue,
        disabled: t.disabled,
        onChange: n[0] || (n[0] = (a) => e.$emit("update:modelValue", a.target.checked))
      }, null, 40, Yu),
      n[1] || (n[1] = m("span", { class: "fu-checkbox__box" }, null, -1)),
      t.label ? (l(), f("span", Gu, _(t.label), 1)) : A("", !0)
    ], 10, Wu));
  }
}), st = /* @__PURE__ */ ae(Ku, [["__scopeId", "data-v-42f5b26b"]]), qu = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: st
}, Symbol.toStringTag, { value: "Module" })), Qu = {
  key: 0,
  class: "fu-input-label"
}, Zu = {
  key: 0,
  class: "fu-input-required"
}, Ju = ["onUpdate:modelValue", "onInput", "onKeydown", "disabled"], Xu = {
  key: 1,
  class: "fu-input-error"
}, ec = /* @__PURE__ */ le({
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
    const n = t, a = e, i = N(Array(n.length).fill("")), r = N([]);
    ve(
      () => n.modelValue,
      (c) => {
        if (!c) {
          i.value = Array(n.length).fill("");
          return;
        }
        const d = c.split("").slice(0, n.length);
        for (; d.length < n.length; ) d.push("");
        i.value = d;
      },
      { immediate: !0 }
    ), ve(
      i,
      () => {
        a("update:modelValue", i.value.join(""));
      },
      { deep: !0 }
    );
    function o(c, d) {
      const p = d.target.value.replace(/\D/g, "");
      i.value[c] = p, p && c < n.length - 1 && we(() => r.value[c + 1]?.focus());
    }
    function s(c) {
      !i.value[c] && c > 0 && we(() => r.value[c - 1]?.focus());
    }
    function u(c) {
      c.preventDefault();
      const h = (c.clipboardData?.getData("text") || "").replace(/\D/g, "").slice(0, n.length).split("");
      if (h.length !== 0) {
        h.forEach((p, v) => {
          i.value[v] = p;
        });
        for (let p = h.length; p < n.length; p++)
          i.value[p] = "";
        we(() => {
          const p = Math.min(h.length - 1, n.length - 1);
          r.value[p]?.focus();
        });
      }
    }
    return (c, d) => (l(), f("div", {
      class: "fu-input-wrapper",
      style: ne({ width: t.formWrapperWidth })
    }, [
      t.label ? (l(), f("label", Qu, [
        ce(_(t.label) + " ", 1),
        t.required ? (l(), f("span", Zu, "*")) : A("", !0)
      ])) : A("", !0),
      m("div", {
        class: Z(["fu-code-container", [`fu-input--${t.size}`, `fu-input--${t.variant}`, { "fu-input--error": t.error }]])
      }, [
        (l(!0), f(j, null, re(i.value, (h, p) => Ve((l(), f("input", {
          key: p,
          ref_for: !0,
          ref: (v) => r.value[p] = v,
          type: "text",
          maxlength: "1",
          inputmode: "numeric",
          pattern: "[0-9]*",
          class: "fu-code-box fu-input-container",
          "onUpdate:modelValue": (v) => i.value[p] = v,
          onInput: (v) => o(p, v),
          onKeydown: xe((v) => s(p), ["backspace"]),
          onPaste: u,
          disabled: t.disabled
        }, null, 40, Ju)), [
          [Xe, i.value[p]]
        ])), 128))
      ], 2),
      t.error ? (l(), f("span", Xu, _(t.error), 1)) : A("", !0)
    ], 4));
  }
}), tc = /* @__PURE__ */ ae(ec, [["__scopeId", "data-v-aa788ef2"]]), nc = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: tc
}, Symbol.toStringTag, { value: "Module" })), ac = ["onKeydown"], ic = { class: "fu-controls" }, rc = { class: "fu-sliders" }, oc = ["value"], sc = /* @__PURE__ */ le({
  __name: "FuColorPopover",
  props: {
    modelValue: {},
    size: {}
  },
  emits: ["update:modelValue"],
  setup(t, { emit: e }) {
    const n = t, a = e, i = O(() => n.size ?? "md"), r = N(!1), o = N(null), s = N({ top: "0px", left: "0px" });
    function u() {
      r.value = !r.value, r.value && we(c);
    }
    function c() {
      if (!o.value) return;
      const S = o.value.getBoundingClientRect(), E = 260, D = 320, q = 8;
      let Q = S.bottom + 6, P = S.left, B = "top left";
      P + E > window.innerWidth - q && (P = S.right - E, B = "top right"), P = Math.max(q, P), Q + D > window.innerHeight - q && (Q = S.top - D - 6, B = B.includes("right") ? "bottom right" : "bottom left"), Q = Math.max(q, Q), s.value = {
        top: `${Q + window.scrollY}px`,
        left: `${P + window.scrollX}px`,
        transformOrigin: B
      };
    }
    function d(S) {
      if (!r.value) return;
      const E = S.target;
      o.value?.contains(E) || E.closest(".fu-color-popover") || (r.value = !1);
    }
    _e(() => {
      window.addEventListener("mousedown", d), window.addEventListener("resize", c), n.modelValue && (g.value = n.modelValue, G(n.modelValue));
    }), Ae(() => {
      window.removeEventListener("mousedown", d), window.removeEventListener("resize", c);
    });
    const h = N("hex"), p = N(0), v = N(100), y = N(100), g = N(""), b = N(!1);
    function C(S, E, D) {
      E /= 100, D /= 100;
      const q = D * E, Q = q * (1 - Math.abs(S / 60 % 2 - 1)), P = D - q;
      let B = 0, I = 0, $ = 0;
      return S < 60 ? [B, I, $] = [q, Q, 0] : S < 120 ? [B, I, $] = [Q, q, 0] : S < 180 ? [B, I, $] = [0, q, Q] : S < 240 ? [B, I, $] = [0, Q, q] : S < 300 ? [B, I, $] = [Q, 0, q] : [B, I, $] = [q, 0, Q], {
        r: Math.round((B + P) * 255),
        g: Math.round((I + P) * 255),
        b: Math.round(($ + P) * 255)
      };
    }
    function w(S, E, D) {
      S /= 255, E /= 255, D /= 255;
      const q = Math.max(S, E, D), Q = Math.min(S, E, D), P = q - Q;
      let B = 0;
      return P && (q === S ? B = (E - D) / P % 6 : q === E ? B = (D - S) / P + 2 : B = (S - E) / P + 4, B *= 60, B < 0 && (B += 360)), {
        h: Math.round(B),
        s: Math.round((q === 0 ? 0 : P / q) * 100),
        v: Math.round(q * 100)
      };
    }
    function k(S, E, D) {
      return "#" + [S, E, D].map((q) => q.toString(16).padStart(2, "0")).join("").toUpperCase();
    }
    function T(S, E, D) {
      return `rgb(${S}, ${E}, ${D})`;
    }
    const M = O(() => C(p.value, v.value, y.value)), x = O(() => k(M.value.r, M.value.g, M.value.b)), L = O(() => ({
      background: `linear-gradient(to top, black, transparent), linear-gradient(to right, white, hsl(${p.value}, 100%, 50%))`
    }));
    function K() {
      const { r: S, g: E, b: D } = M.value;
      a(
        "update:modelValue",
        h.value === "rgb" ? T(S, E, D) : x.value
      );
    }
    function G(S) {
      const E = S.trim().replace(/;$/, "");
      let D = null;
      /^#([0-9a-f]{6})$/i.test(E) && (h.value = "hex", D = {
        r: parseInt(E.slice(1, 3), 16),
        g: parseInt(E.slice(3, 5), 16),
        b: parseInt(E.slice(5, 7), 16)
      });
      const q = E.match(/^rgba?\((\d{1,3}),\s*(\d{1,3}),\s*(\d{1,3})/);
      if (q && (h.value = "rgb", D = { r: +q[1], g: +q[2], b: +q[3] }), !D) return;
      const Q = w(D.r, D.g, D.b);
      p.value = Q.h, v.value = Q.s, y.value = Q.v, K();
    }
    function V(S) {
      b.value = !0, g.value = S.target.value;
    }
    function Y() {
      b.value = !1, G(g.value);
    }
    function U(S) {
      S.key === "Enter" && Y();
    }
    function R(S) {
      h.value = "hex";
      const D = S.currentTarget.getBoundingClientRect();
      v.value = Math.round(
        Math.min(Math.max(0, S.clientX - D.left), D.width) / D.width * 100
      ), y.value = Math.round(
        100 - Math.min(Math.max(0, S.clientY - D.top), D.height) / D.height * 100
      ), K();
    }
    return ve(
      () => n.modelValue,
      (S) => {
        S && (g.value = S, G(S));
      }
    ), (S, E) => (l(), f(j, null, [
      m("div", {
        ref_key: "triggerRef",
        ref: o,
        class: Z(["fu-color-trigger", `fu-color-trigger--${i.value}`]),
        style: ne({ backgroundColor: x.value }),
        role: "button",
        tabindex: "0",
        onClick: u,
        onKeydown: [
          xe(ue(u, ["prevent"]), ["enter"]),
          xe(ue(u, ["prevent"]), ["space"])
        ]
      }, [
        se(S.$slots, "trigger", {}, void 0, !0)
      ], 46, ac),
      (l(), X(De, { to: "body" }, [
        r.value ? (l(), f("div", {
          key: 0,
          class: "fu-color-popover",
          style: ne(s.value)
        }, [
          m("div", {
            class: "fu-saturation",
            style: ne(L.value),
            onPointerdown: R,
            onPointermove: E[0] || (E[0] = (D) => D.buttons === 1 && R(D))
          }, [
            m("div", {
              class: "fu-cursor",
              style: ne({ left: v.value + "%", top: 100 - y.value + "%" })
            }, null, 4)
          ], 36),
          m("div", ic, [
            m("div", {
              class: "fu-preview",
              style: ne({ backgroundColor: x.value })
            }, null, 4),
            m("div", rc, [
              Ve(m("input", {
                type: "range",
                min: "0",
                max: "360",
                "onUpdate:modelValue": E[1] || (E[1] = (D) => p.value = D),
                class: "fu-hue"
              }, null, 512), [
                [Xe, p.value]
              ])
            ])
          ]),
          m("input", {
            class: "fu-output",
            value: g.value,
            onInput: V,
            onBlur: Y,
            onKeydown: U,
            placeholder: "#RRGGBB or rgb(...)"
          }, null, 40, oc)
        ], 4)) : A("", !0)
      ]))
    ], 64));
  }
}), lc = /* @__PURE__ */ ae(sc, [["__scopeId", "data-v-40795315"]]), uc = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: lc
}, Symbol.toStringTag, { value: "Module" })), cc = { class: "fu-combobox__control" }, dc = ["value", "placeholder", "disabled"], fc = {
  key: 0,
  class: "fu-combobox__dropdown scrollbar__control customScrollBar"
}, mc = { class: "fu-combobox__group-title" }, hc = ["onClick"], vc = { class: "fu-combobox__option-left" }, pc = { class: "fu-combobox__option-right" }, gc = {
  key: 1,
  class: "fu-combobox__empty"
}, yc = /* @__PURE__ */ le({
  __name: "FuCombobox",
  props: {
    options: {},
    modelValue: {},
    placeholder: {},
    disabled: { type: Boolean }
  },
  emits: ["update:modelValue"],
  setup(t, { emit: e }) {
    const n = t, a = e, i = N(!1), r = N(""), o = N(null), s = N(null), u = O(() => {
      if (!r.value || o.value && r.value.toLowerCase() === o.value.label.toLowerCase())
        return c(n.options);
      const y = n.options.filter(
        (g) => g.label.toLowerCase().includes(r.value.toLowerCase())
      );
      return c(y);
    });
    function c(y) {
      const g = {};
      return y.forEach((b) => {
        const C = b.group || "Options";
        g[C] || (g[C] = []), g[C].push(b);
      }), Object.entries(g).map(([b, C]) => ({ title: b, items: C }));
    }
    ve(
      () => n.modelValue,
      (y) => {
        o.value = n.options.find((g) => g.value === y) || null, !i.value && o.value && (r.value = o.value.label);
      },
      { immediate: !0 }
    );
    function d(y) {
      r.value = y.target.value;
    }
    function h(y) {
      o.value = y, r.value = y.label, a("update:modelValue", y.value), i.value = !1;
    }
    function p() {
      i.value = !i.value;
    }
    function v(y) {
      s.value && !s.value.contains(y.target) && (i.value = !1, o.value && (r.value = o.value.label));
    }
    return _e(() => {
      document.addEventListener("click", v);
    }), Ae(() => {
      document.removeEventListener("click", v);
    }), (y, g) => (l(), f("div", {
      class: Z(["fu-combobox", { "fu-combobox--disabled": t.disabled }]),
      ref_key: "comboboxRef",
      ref: s
    }, [
      m("div", cc, [
        m("input", {
          type: "text",
          value: i.value ? r.value : o.value?.label || "",
          placeholder: t.placeholder,
          class: "fu-combobox__input",
          disabled: t.disabled,
          onInput: d,
          onFocus: g[0] || (g[0] = (b) => !t.disabled && (i.value = !0))
        }, null, 40, dc),
        m("span", {
          class: "fu-combobox__icon",
          onClick: ue(p, ["stop"])
        }, [
          J(oe(Le), {
            size: 18,
            "stroke-width": 1
          })
        ])
      ]),
      i.value && !t.disabled ? (l(), f("div", fc, [
        u.value.length > 0 ? (l(!0), f(j, { key: 0 }, re(u.value, (b) => (l(), f("div", {
          key: b.title,
          class: "fu-combobox__group"
        }, [
          m("div", mc, _(b.title), 1),
          (l(!0), f(j, null, re(b.items, (C) => (l(), f("div", {
            key: C.value,
            class: Z(["fu-combobox__option", {
              "fu-combobox__option--selected": C.value === o.value?.value
            }]),
            onClick: (w) => h(C)
          }, [
            m("div", vc, [
              se(y.$slots, "option", { option: C }, () => [
                C.icon ? (l(), X(ge(C.icon), {
                  key: 0,
                  class: "fu-combobox__option-icon"
                })) : A("", !0),
                m("span", null, _(C.label), 1)
              ], !0)
            ]),
            m("div", pc, [
              C.value === o.value?.value ? (l(), X(oe(ka), {
                key: 0,
                class: "fu-combobox__check"
              })) : A("", !0)
            ])
          ], 10, hc))), 128))
        ]))), 128)) : (l(), f("div", gc, "No results found"))
      ])) : A("", !0)
    ], 2));
  }
}), bc = /* @__PURE__ */ ae(yc, [["__scopeId", "data-v-e8069cc4"]]), Cc = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: bc
}, Symbol.toStringTag, { value: "Module" }));
function kr(t) {
  return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t;
}
var dn = { exports: {} }, wc = dn.exports, ii;
function Ac() {
  return ii || (ii = 1, (function(t, e) {
    (function(n, a) {
      t.exports = a();
    })(wc, (function() {
      var n = 1e3, a = 6e4, i = 36e5, r = "millisecond", o = "second", s = "minute", u = "hour", c = "day", d = "week", h = "month", p = "quarter", v = "year", y = "date", g = "Invalid Date", b = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/, C = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g, w = { name: "en", weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"), ordinal: function(S) {
        var E = ["th", "st", "nd", "rd"], D = S % 100;
        return "[" + S + (E[(D - 20) % 10] || E[D] || E[0]) + "]";
      } }, k = function(S, E, D) {
        var q = String(S);
        return !q || q.length >= E ? S : "" + Array(E + 1 - q.length).join(D) + S;
      }, T = { s: k, z: function(S) {
        var E = -S.utcOffset(), D = Math.abs(E), q = Math.floor(D / 60), Q = D % 60;
        return (E <= 0 ? "+" : "-") + k(q, 2, "0") + ":" + k(Q, 2, "0");
      }, m: function S(E, D) {
        if (E.date() < D.date()) return -S(D, E);
        var q = 12 * (D.year() - E.year()) + (D.month() - E.month()), Q = E.clone().add(q, h), P = D - Q < 0, B = E.clone().add(q + (P ? -1 : 1), h);
        return +(-(q + (D - Q) / (P ? Q - B : B - Q)) || 0);
      }, a: function(S) {
        return S < 0 ? Math.ceil(S) || 0 : Math.floor(S);
      }, p: function(S) {
        return { M: h, y: v, w: d, d: c, D: y, h: u, m: s, s: o, ms: r, Q: p }[S] || String(S || "").toLowerCase().replace(/s$/, "");
      }, u: function(S) {
        return S === void 0;
      } }, M = "en", x = {};
      x[M] = w;
      var L = "$isDayjsObject", K = function(S) {
        return S instanceof U || !(!S || !S[L]);
      }, G = function S(E, D, q) {
        var Q;
        if (!E) return M;
        if (typeof E == "string") {
          var P = E.toLowerCase();
          x[P] && (Q = P), D && (x[P] = D, Q = P);
          var B = E.split("-");
          if (!Q && B.length > 1) return S(B[0]);
        } else {
          var I = E.name;
          x[I] = E, Q = I;
        }
        return !q && Q && (M = Q), Q || !q && M;
      }, V = function(S, E) {
        if (K(S)) return S.clone();
        var D = typeof E == "object" ? E : {};
        return D.date = S, D.args = arguments, new U(D);
      }, Y = T;
      Y.l = G, Y.i = K, Y.w = function(S, E) {
        return V(S, { locale: E.$L, utc: E.$u, x: E.$x, $offset: E.$offset });
      };
      var U = (function() {
        function S(D) {
          this.$L = G(D.locale, null, !0), this.parse(D), this.$x = this.$x || D.x || {}, this[L] = !0;
        }
        var E = S.prototype;
        return E.parse = function(D) {
          this.$d = (function(q) {
            var Q = q.date, P = q.utc;
            if (Q === null) return /* @__PURE__ */ new Date(NaN);
            if (Y.u(Q)) return /* @__PURE__ */ new Date();
            if (Q instanceof Date) return new Date(Q);
            if (typeof Q == "string" && !/Z$/i.test(Q)) {
              var B = Q.match(b);
              if (B) {
                var I = B[2] - 1 || 0, $ = (B[7] || "0").substring(0, 3);
                return P ? new Date(Date.UTC(B[1], I, B[3] || 1, B[4] || 0, B[5] || 0, B[6] || 0, $)) : new Date(B[1], I, B[3] || 1, B[4] || 0, B[5] || 0, B[6] || 0, $);
              }
            }
            return new Date(Q);
          })(D), this.init();
        }, E.init = function() {
          var D = this.$d;
          this.$y = D.getFullYear(), this.$M = D.getMonth(), this.$D = D.getDate(), this.$W = D.getDay(), this.$H = D.getHours(), this.$m = D.getMinutes(), this.$s = D.getSeconds(), this.$ms = D.getMilliseconds();
        }, E.$utils = function() {
          return Y;
        }, E.isValid = function() {
          return this.$d.toString() !== g;
        }, E.isSame = function(D, q) {
          var Q = V(D);
          return this.startOf(q) <= Q && Q <= this.endOf(q);
        }, E.isAfter = function(D, q) {
          return V(D) < this.startOf(q);
        }, E.isBefore = function(D, q) {
          return this.endOf(q) < V(D);
        }, E.$g = function(D, q, Q) {
          return Y.u(D) ? this[q] : this.set(Q, D);
        }, E.unix = function() {
          return Math.floor(this.valueOf() / 1e3);
        }, E.valueOf = function() {
          return this.$d.getTime();
        }, E.startOf = function(D, q) {
          var Q = this, P = !!Y.u(q) || q, B = Y.p(D), I = function(Te, F) {
            var te = Y.w(Q.$u ? Date.UTC(Q.$y, F, Te) : new Date(Q.$y, F, Te), Q);
            return P ? te : te.endOf(c);
          }, $ = function(Te, F) {
            return Y.w(Q.toDate()[Te].apply(Q.toDate("s"), (P ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(F)), Q);
          }, W = this.$W, ee = this.$M, pe = this.$D, Se = "set" + (this.$u ? "UTC" : "");
          switch (B) {
            case v:
              return P ? I(1, 0) : I(31, 11);
            case h:
              return P ? I(1, ee) : I(0, ee + 1);
            case d:
              var ye = this.$locale().weekStart || 0, Pe = (W < ye ? W + 7 : W) - ye;
              return I(P ? pe - Pe : pe + (6 - Pe), ee);
            case c:
            case y:
              return $(Se + "Hours", 0);
            case u:
              return $(Se + "Minutes", 1);
            case s:
              return $(Se + "Seconds", 2);
            case o:
              return $(Se + "Milliseconds", 3);
            default:
              return this.clone();
          }
        }, E.endOf = function(D) {
          return this.startOf(D, !1);
        }, E.$set = function(D, q) {
          var Q, P = Y.p(D), B = "set" + (this.$u ? "UTC" : ""), I = (Q = {}, Q[c] = B + "Date", Q[y] = B + "Date", Q[h] = B + "Month", Q[v] = B + "FullYear", Q[u] = B + "Hours", Q[s] = B + "Minutes", Q[o] = B + "Seconds", Q[r] = B + "Milliseconds", Q)[P], $ = P === c ? this.$D + (q - this.$W) : q;
          if (P === h || P === v) {
            var W = this.clone().set(y, 1);
            W.$d[I]($), W.init(), this.$d = W.set(y, Math.min(this.$D, W.daysInMonth())).$d;
          } else I && this.$d[I]($);
          return this.init(), this;
        }, E.set = function(D, q) {
          return this.clone().$set(D, q);
        }, E.get = function(D) {
          return this[Y.p(D)]();
        }, E.add = function(D, q) {
          var Q, P = this;
          D = Number(D);
          var B = Y.p(q), I = function(ee) {
            var pe = V(P);
            return Y.w(pe.date(pe.date() + Math.round(ee * D)), P);
          };
          if (B === h) return this.set(h, this.$M + D);
          if (B === v) return this.set(v, this.$y + D);
          if (B === c) return I(1);
          if (B === d) return I(7);
          var $ = (Q = {}, Q[s] = a, Q[u] = i, Q[o] = n, Q)[B] || 1, W = this.$d.getTime() + D * $;
          return Y.w(W, this);
        }, E.subtract = function(D, q) {
          return this.add(-1 * D, q);
        }, E.format = function(D) {
          var q = this, Q = this.$locale();
          if (!this.isValid()) return Q.invalidDate || g;
          var P = D || "YYYY-MM-DDTHH:mm:ssZ", B = Y.z(this), I = this.$H, $ = this.$m, W = this.$M, ee = Q.weekdays, pe = Q.months, Se = Q.meridiem, ye = function(F, te, ie, me) {
            return F && (F[te] || F(q, P)) || ie[te].slice(0, me);
          }, Pe = function(F) {
            return Y.s(I % 12 || 12, F, "0");
          }, Te = Se || function(F, te, ie) {
            var me = F < 12 ? "AM" : "PM";
            return ie ? me.toLowerCase() : me;
          };
          return P.replace(C, (function(F, te) {
            return te || (function(ie) {
              switch (ie) {
                case "YY":
                  return String(q.$y).slice(-2);
                case "YYYY":
                  return Y.s(q.$y, 4, "0");
                case "M":
                  return W + 1;
                case "MM":
                  return Y.s(W + 1, 2, "0");
                case "MMM":
                  return ye(Q.monthsShort, W, pe, 3);
                case "MMMM":
                  return ye(pe, W);
                case "D":
                  return q.$D;
                case "DD":
                  return Y.s(q.$D, 2, "0");
                case "d":
                  return String(q.$W);
                case "dd":
                  return ye(Q.weekdaysMin, q.$W, ee, 2);
                case "ddd":
                  return ye(Q.weekdaysShort, q.$W, ee, 3);
                case "dddd":
                  return ee[q.$W];
                case "H":
                  return String(I);
                case "HH":
                  return Y.s(I, 2, "0");
                case "h":
                  return Pe(1);
                case "hh":
                  return Pe(2);
                case "a":
                  return Te(I, $, !0);
                case "A":
                  return Te(I, $, !1);
                case "m":
                  return String($);
                case "mm":
                  return Y.s($, 2, "0");
                case "s":
                  return String(q.$s);
                case "ss":
                  return Y.s(q.$s, 2, "0");
                case "SSS":
                  return Y.s(q.$ms, 3, "0");
                case "Z":
                  return B;
              }
              return null;
            })(F) || B.replace(":", "");
          }));
        }, E.utcOffset = function() {
          return 15 * -Math.round(this.$d.getTimezoneOffset() / 15);
        }, E.diff = function(D, q, Q) {
          var P, B = this, I = Y.p(q), $ = V(D), W = ($.utcOffset() - this.utcOffset()) * a, ee = this - $, pe = function() {
            return Y.m(B, $);
          };
          switch (I) {
            case v:
              P = pe() / 12;
              break;
            case h:
              P = pe();
              break;
            case p:
              P = pe() / 3;
              break;
            case d:
              P = (ee - W) / 6048e5;
              break;
            case c:
              P = (ee - W) / 864e5;
              break;
            case u:
              P = ee / i;
              break;
            case s:
              P = ee / a;
              break;
            case o:
              P = ee / n;
              break;
            default:
              P = ee;
          }
          return Q ? P : Y.a(P);
        }, E.daysInMonth = function() {
          return this.endOf(h).$D;
        }, E.$locale = function() {
          return x[this.$L];
        }, E.locale = function(D, q) {
          if (!D) return this.$L;
          var Q = this.clone(), P = G(D, q, !0);
          return P && (Q.$L = P), Q;
        }, E.clone = function() {
          return Y.w(this.$d, this);
        }, E.toDate = function() {
          return new Date(this.valueOf());
        }, E.toJSON = function() {
          return this.isValid() ? this.toISOString() : null;
        }, E.toISOString = function() {
          return this.$d.toISOString();
        }, E.toString = function() {
          return this.$d.toUTCString();
        }, S;
      })(), R = U.prototype;
      return V.prototype = R, [["$ms", r], ["$s", o], ["$m", s], ["$H", u], ["$W", c], ["$M", h], ["$y", v], ["$D", y]].forEach((function(S) {
        R[S[1]] = function(E) {
          return this.$g(E, S[0], S[1]);
        };
      })), V.extend = function(S, E) {
        return S.$i || (S(E, U, V), S.$i = !0), V;
      }, V.locale = G, V.isDayjs = K, V.unix = function(S) {
        return V(1e3 * S);
      }, V.en = x[M], V.Ls = x, V.p = {}, V;
    }));
  })(dn)), dn.exports;
}
var _c = Ac();
const he = /* @__PURE__ */ kr(_c);
var fn = { exports: {} }, kc = fn.exports, ri;
function Sc() {
  return ri || (ri = 1, (function(t, e) {
    (function(n, a) {
      t.exports = a();
    })(kc, (function() {
      var n = { LTS: "h:mm:ss A", LT: "h:mm A", L: "MM/DD/YYYY", LL: "MMMM D, YYYY", LLL: "MMMM D, YYYY h:mm A", LLLL: "dddd, MMMM D, YYYY h:mm A" }, a = /(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|Q|YYYY|YY?|ww?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g, i = /\d/, r = /\d\d/, o = /\d\d?/, s = /\d*[^-_:/,()\s\d]+/, u = {}, c = function(b) {
        return (b = +b) + (b > 68 ? 1900 : 2e3);
      }, d = function(b) {
        return function(C) {
          this[b] = +C;
        };
      }, h = [/[+-]\d\d:?(\d\d)?|Z/, function(b) {
        (this.zone || (this.zone = {})).offset = (function(C) {
          if (!C || C === "Z") return 0;
          var w = C.match(/([+-]|\d\d)/g), k = 60 * w[1] + (+w[2] || 0);
          return k === 0 ? 0 : w[0] === "+" ? -k : k;
        })(b);
      }], p = function(b) {
        var C = u[b];
        return C && (C.indexOf ? C : C.s.concat(C.f));
      }, v = function(b, C) {
        var w, k = u.meridiem;
        if (k) {
          for (var T = 1; T <= 24; T += 1) if (b.indexOf(k(T, 0, C)) > -1) {
            w = T > 12;
            break;
          }
        } else w = b === (C ? "pm" : "PM");
        return w;
      }, y = { A: [s, function(b) {
        this.afternoon = v(b, !1);
      }], a: [s, function(b) {
        this.afternoon = v(b, !0);
      }], Q: [i, function(b) {
        this.month = 3 * (b - 1) + 1;
      }], S: [i, function(b) {
        this.milliseconds = 100 * +b;
      }], SS: [r, function(b) {
        this.milliseconds = 10 * +b;
      }], SSS: [/\d{3}/, function(b) {
        this.milliseconds = +b;
      }], s: [o, d("seconds")], ss: [o, d("seconds")], m: [o, d("minutes")], mm: [o, d("minutes")], H: [o, d("hours")], h: [o, d("hours")], HH: [o, d("hours")], hh: [o, d("hours")], D: [o, d("day")], DD: [r, d("day")], Do: [s, function(b) {
        var C = u.ordinal, w = b.match(/\d+/);
        if (this.day = w[0], C) for (var k = 1; k <= 31; k += 1) C(k).replace(/\[|\]/g, "") === b && (this.day = k);
      }], w: [o, d("week")], ww: [r, d("week")], M: [o, d("month")], MM: [r, d("month")], MMM: [s, function(b) {
        var C = p("months"), w = (p("monthsShort") || C.map((function(k) {
          return k.slice(0, 3);
        }))).indexOf(b) + 1;
        if (w < 1) throw new Error();
        this.month = w % 12 || w;
      }], MMMM: [s, function(b) {
        var C = p("months").indexOf(b) + 1;
        if (C < 1) throw new Error();
        this.month = C % 12 || C;
      }], Y: [/[+-]?\d+/, d("year")], YY: [r, function(b) {
        this.year = c(b);
      }], YYYY: [/\d{4}/, d("year")], Z: h, ZZ: h };
      function g(b) {
        var C, w;
        C = b, w = u && u.formats;
        for (var k = (b = C.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g, (function(V, Y, U) {
          var R = U && U.toUpperCase();
          return Y || w[U] || n[U] || w[R].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g, (function(S, E, D) {
            return E || D.slice(1);
          }));
        }))).match(a), T = k.length, M = 0; M < T; M += 1) {
          var x = k[M], L = y[x], K = L && L[0], G = L && L[1];
          k[M] = G ? { regex: K, parser: G } : x.replace(/^\[|\]$/g, "");
        }
        return function(V) {
          for (var Y = {}, U = 0, R = 0; U < T; U += 1) {
            var S = k[U];
            if (typeof S == "string") R += S.length;
            else {
              var E = S.regex, D = S.parser, q = V.slice(R), Q = E.exec(q)[0];
              D.call(Y, Q), V = V.replace(Q, "");
            }
          }
          return (function(P) {
            var B = P.afternoon;
            if (B !== void 0) {
              var I = P.hours;
              B ? I < 12 && (P.hours += 12) : I === 12 && (P.hours = 0), delete P.afternoon;
            }
          })(Y), Y;
        };
      }
      return function(b, C, w) {
        w.p.customParseFormat = !0, b && b.parseTwoDigitYear && (c = b.parseTwoDigitYear);
        var k = C.prototype, T = k.parse;
        k.parse = function(M) {
          var x = M.date, L = M.utc, K = M.args;
          this.$u = L;
          var G = K[1];
          if (typeof G == "string") {
            var V = K[2] === !0, Y = K[3] === !0, U = V || Y, R = K[2];
            Y && (R = K[2]), u = this.$locale(), !V && R && (u = w.Ls[R]), this.$d = (function(q, Q, P, B) {
              try {
                if (["x", "X"].indexOf(Q) > -1) return new Date((Q === "X" ? 1e3 : 1) * q);
                var I = g(Q)(q), $ = I.year, W = I.month, ee = I.day, pe = I.hours, Se = I.minutes, ye = I.seconds, Pe = I.milliseconds, Te = I.zone, F = I.week, te = /* @__PURE__ */ new Date(), ie = ee || ($ || W ? 1 : te.getDate()), me = $ || te.getFullYear(), We = 0;
                $ && !W || (We = W > 0 ? W - 1 : te.getMonth());
                var nt, Ye = pe || 0, jn = Se || 0, Un = ye || 0, Wn = Pe || 0;
                return Te ? new Date(Date.UTC(me, We, ie, Ye, jn, Un, Wn + 60 * Te.offset * 1e3)) : P ? new Date(Date.UTC(me, We, ie, Ye, jn, Un, Wn)) : (nt = new Date(me, We, ie, Ye, jn, Un, Wn), F && (nt = B(nt).week(F).toDate()), nt);
              } catch {
                return /* @__PURE__ */ new Date("");
              }
            })(x, G, L, w), this.init(), R && R !== !0 && (this.$L = this.locale(R).$L), U && x != this.format(G) && (this.$d = /* @__PURE__ */ new Date("")), u = {};
          } else if (G instanceof Array) for (var S = G.length, E = 1; E <= S; E += 1) {
            K[1] = G[E - 1];
            var D = w.apply(this, K);
            if (D.isValid()) {
              this.$d = D.$d, this.$L = D.$L, this.init();
              break;
            }
            E === S && (this.$d = /* @__PURE__ */ new Date(""));
          }
          else T.call(this, M);
        };
      };
    }));
  })(fn)), fn.exports;
}
var Tc = Sc();
const Sr = /* @__PURE__ */ kr(Tc), Ec = { class: "calendar-header" }, Mc = { class: "flex flex--gap-sm" }, Nc = { key: 0 }, Dc = { class: "calendar-weekdays" }, Ic = { class: "calendar-days" }, Oc = ["onClick"], Rc = {
  key: 1,
  class: "calendar-months"
}, xc = ["onClick"], $c = {
  key: 2,
  class: "calendar-years"
}, Pc = ["onClick"], Fc = { class: "flex flex--space flex--gap-md px-2 pb-2" }, Bc = {
  key: 0,
  class: "flex flex--gap-sm"
}, zc = { key: 1 }, Lc = {
  key: 3,
  class: "calendar-time"
}, Hc = { class: "fu-time-input-wrapper" }, Vc = {
  key: 0,
  class: "fu-time-dropdown customScrollBar"
}, jc = ["onMousedown"], Tt = 12, Uc = {
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
    he.extend(Sr);
    const n = t, a = N(!1), i = e, r = N(!1), o = N(null), s = N(null), u = N(null), c = N(he().startOf("month")), d = N(null), h = N({ start: null, end: null }), p = N("00:00"), v = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"], y = [
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
    ], g = N("days"), b = O(
      () => Math.floor(c.value.year() / Tt) * Tt
    ), C = O(() => b.value + Tt - 1), w = O(
      () => Array.from({ length: Tt }, (F, te) => b.value + te)
    ), k = O(() => {
      const F = c.value.startOf("month").startOf("week"), te = c.value.endOf("month").endOf("week"), ie = [];
      let me = F.clone();
      for (; me.isBefore(te) || me.isSame(te, "day"); )
        ie.push({
          date: me.clone(),
          isCurrentMonth: me.month() === c.value.month()
        }), me = me.add(1, "day");
      return ie;
    });
    function T(F) {
      return !!(n.min && F.isBefore(he(n.min), "day") || n.max && F.isAfter(he(n.max), "day"));
    }
    function M(F) {
      return n.variant === "date-range" ? h.value.start && F.isSame(h.value.start, "day") || h.value.end && F.isSame(h.value.end, "day") : d.value && F.isSame(d.value, "day");
    }
    function x(F) {
      return n.variant === "date-range" && h.value.start && h.value.end && F.isAfter(h.value.start, "day") && F.isBefore(h.value.end, "day");
    }
    function L(F) {
      if (!T(F)) {
        if (n.variant === "date-range") {
          !h.value.start || o.value === "start" ? (h.value.start = F.clone(), h.value.end = null, o.value = "end") : F.isBefore(h.value.start, "day") ? (h.value.end = h.value.start.clone(), h.value.start = F.clone()) : h.value.end = F.clone();
          return;
        }
        d.value = F.clone(), i(
          "update:modelValue",
          n.variant === "date-time" ? d.value.format("YYYY-MM-DDTHH:mm") : d.value.format("YYYY-MM-DD")
        ), V();
      }
    }
    function K() {
      h.value.start && h.value.end && (i("update:modelValue", {
        start: h.value.start.format("YYYY-MM-DD"),
        end: h.value.end.format("YYYY-MM-DD")
      }), V());
    }
    function G(F = null) {
      o.value = F, r.value = !0, n.variant === "date-range" ? h.value.start ? c.value = h.value.start.startOf("month") : c.value = he().startOf("month") : d.value ? c.value = d.value.startOf("month") : c.value = he().startOf("month"), we(() => {
        R(), window.addEventListener("resize", R), window.addEventListener("click", Y);
      });
    }
    function V() {
      r.value = !1, window.removeEventListener("resize", R), window.removeEventListener("click", Y);
    }
    function Y(F) {
      !s.value?.contains(F.target) && !u.value?.contains(F.target) && V();
    }
    const U = N({
      position: "absolute",
      top: "0px",
      left: "0px",
      zIndex: 9999
    });
    function R() {
      if (!s.value || !u.value) return;
      const F = s.value.getBoundingClientRect(), te = u.value.getBoundingClientRect(), ie = window.innerHeight - F.bottom, me = F.top, We = window.scrollY || window.pageYOffset, nt = window.scrollX || window.pageXOffset;
      let Ye;
      ie < te.height && me > te.height ? Ye = F.top + We - te.height - 6 : Ye = F.bottom + We + 6, U.value = {
        position: "absolute",
        top: `${Ye}px`,
        left: `${F.left + nt}px`,
        zIndex: 9999
      };
    }
    const S = O(() => d.value ? n.variant === "date-time" ? d.value.format("YYYY-MM-DD HH:mm") : d.value.format("YYYY-MM-DD") : ""), E = O(() => n.variant !== "date-range" ? "" : h.value.start && h.value.end ? `${h.value.start.format(
      "YYYY-MM-DD"
    )} to ${h.value.end.format("YYYY-MM-DD")}` : h.value.start ? `${h.value.start.format("YYYY-MM-DD")} to ...` : ""), D = O(() => `fu-date-picker--${n.variant}`);
    ve(
      () => n.modelValue,
      (F) => {
        if (n.variant !== "date-range") {
          if (typeof F == "string" && F) {
            const te = he(F);
            if (te.isValid()) {
              d.value = te, c.value = te.startOf("month"), n.variant === "date-time" ? p.value = te.format("h:mm A") : p.value = "00:00";
              return;
            }
          }
          (F === null || F === "") && (d.value = null, h.value = { start: null, end: null }, p.value = "00:00");
        }
      },
      { immediate: !0 }
    );
    function q() {
      g.value === "days" ? g.value = "months" : g.value === "months" ? g.value = "years" : g.value = "days";
    }
    function Q() {
      g.value === "days" ? c.value = c.value.subtract(1, "month") : g.value === "months" ? c.value = c.value.subtract(1, "year") : c.value = c.value.subtract(Tt, "year");
    }
    function P() {
      g.value === "days" ? c.value = c.value.add(1, "month") : g.value === "months" ? c.value = c.value.add(1, "year") : c.value = c.value.add(Tt, "year");
    }
    function B(F) {
      c.value = c.value.month(F), g.value = "days";
    }
    function I(F) {
      c.value = c.value.year(F), g.value = "months";
    }
    function $() {
      const F = he();
      n.variant === "date-range" ? h.value = { start: F.clone(), end: F.clone() } : (d.value = F.clone(), i(
        "update:modelValue",
        n.variant === "date-time" ? F.format("YYYY-MM-DDTHH:mm") : F.format("YYYY-MM-DD")
      ), V());
    }
    function W() {
      const F = he().add(1, "day");
      n.variant === "date-range" ? h.value = { start: F.clone(), end: F.clone() } : (d.value = F.clone(), i(
        "update:modelValue",
        n.variant === "date-time" ? F.format("YYYY-MM-DDTHH:mm") : F.format("YYYY-MM-DD")
      ), V());
    }
    function ee() {
      d.value = null, h.value = { start: null, end: null }, i(
        "update:modelValue",
        n.variant === "date-range" ? { start: null, end: null } : null
      ), V();
    }
    const pe = O(() => {
      const F = [];
      for (let te = 0; te < 24; te++)
        for (let ie = 0; ie < 60; ie += 15)
          F.push(he().hour(te).minute(ie).format("h:mm A"));
      return F;
    }), Se = O(() => {
      if (!p.value) return pe.value;
      const F = p.value.toLowerCase().replace(/\s+/g, "");
      return pe.value.filter(
        (te) => te.toLowerCase().replace(/\s+/g, "").startsWith(F)
      );
    });
    function ye() {
      if (!d.value || !p.value) return;
      const F = String(p.value).trim().toLowerCase(), te = he(
        F,
        ["h:mm a", "h:mma", "ha", "h a", "hh:mm a", "H:mm", "HH:mm", "H"],
        !0
      );
      if (!te.isValid()) {
        a.value = !1;
        return;
      }
      d.value = d.value.hour(te.hour()).minute(te.minute()), p.value = d.value.format("h:mm A"), i("update:modelValue", d.value.format("YYYY-MM-DDTHH:mm")), a.value = !1;
    }
    function Pe(F) {
      p.value = F, ye();
    }
    function Te() {
      setTimeout(() => {
        ye(), a.value = !1;
      }, 120);
    }
    return Ae(() => {
      window.removeEventListener("resize", R), window.removeEventListener("click", Y);
    }), (F, te) => (l(), f("div", {
      class: Z(["fu-date-picker", D.value]),
      ref_key: "pickerRef",
      ref: s,
      style: ne({ width: t.formWrapperWidth })
    }, [
      t.variant !== "date-range" ? (l(), X(Re, {
        key: 0,
        type: "text",
        modelValue: S.value,
        placeholder: "Select date",
        readonly: "",
        onClick: G,
        formWrapperWidth: t.formWrapperWidth,
        size: t.size,
        error: t.error,
        required: t.required,
        label: t.label,
        disabled: t.disabled
      }, {
        right: fe(() => [
          J(oe(Le))
        ]),
        _: 1
      }, 8, ["modelValue", "formWrapperWidth", "size", "error", "required", "label", "disabled"])) : (l(), X(Re, {
        key: 1,
        type: "text",
        modelValue: E.value,
        placeholder: "Select date range",
        onClick: G,
        readonly: "",
        formWrapperWidth: t.formWrapperWidth,
        size: t.size,
        error: t.error,
        required: t.required,
        disabled: t.disabled
      }, {
        right: fe(() => [
          J(oe(Le))
        ]),
        _: 1
      }, 8, ["modelValue", "formWrapperWidth", "size", "error", "required", "disabled"])),
      (l(), X(De, { to: "body" }, [
        r.value ? (l(), f("div", {
          key: 0,
          class: "fu-date-picker__calendar-overlay",
          onClick: ue(V, ["self"])
        }, [
          m("div", {
            class: "fu-date-picker__calendar",
            style: ne(U.value),
            ref_key: "calendarRef",
            ref: u,
            onClick: te[2] || (te[2] = ue(() => {
            }, ["stop"]))
          }, [
            m("div", Ec, [
              J(Ee, {
                variant: "ghost",
                size: "sm",
                icon: oe(Le),
                onClick: q
              }, {
                default: fe(() => [
                  g.value === "days" ? (l(), f(j, { key: 0 }, [
                    ce(_(c.value.format("MMMM YYYY")), 1)
                  ], 64)) : g.value === "months" ? (l(), f(j, { key: 1 }, [
                    ce(_(c.value.year()), 1)
                  ], 64)) : (l(), f(j, { key: 2 }, [
                    ce(_(b.value) + " - " + _(C.value), 1)
                  ], 64))
                ]),
                _: 1
              }, 8, ["icon"]),
              m("div", Mc, [
                J($e, {
                  icon: oe(Bt),
                  size: "sm",
                  onClick: Q
                }, null, 8, ["icon"]),
                J($e, {
                  icon: oe(zt),
                  size: "sm",
                  onClick: P
                }, null, 8, ["icon"])
              ])
            ]),
            g.value === "days" ? (l(), f("div", Nc, [
              m("div", Dc, [
                (l(), f(j, null, re(v, (ie) => m("div", {
                  key: ie,
                  class: "calendar-weekday"
                }, _(ie), 1)), 64))
              ]),
              m("div", Ic, [
                (l(!0), f(j, null, re(k.value, (ie) => (l(), f("div", {
                  key: ie.date.toString(),
                  class: Z(["calendar-day", {
                    "calendar-day--other-month": !ie.isCurrentMonth,
                    "calendar-day--selected": M(ie.date),
                    "calendar-day--in-range": x(ie.date),
                    "calendar-day--disabled": T(ie.date)
                  }]),
                  onClick: (me) => L(ie.date)
                }, _(ie.date.date()), 11, Oc))), 128))
              ])
            ])) : g.value === "months" ? (l(), f("div", Rc, [
              (l(), f(j, null, re(y, (ie, me) => m("div", {
                key: ie,
                class: Z(["calendar-month", { "calendar-month--selected": me === c.value.month() }]),
                onClick: (We) => B(me)
              }, _(ie), 11, xc)), 64))
            ])) : (l(), f("div", $c, [
              (l(!0), f(j, null, re(w.value, (ie) => (l(), f("div", {
                key: ie,
                class: Z(["calendar-year", { "calendar-year--selected": ie === c.value.year() }]),
                onClick: (me) => I(ie)
              }, _(ie), 11, Pc))), 128))
            ])),
            te[7] || (te[7] = m("hr", null, null, -1)),
            m("div", Fc, [
              t.variant !== "date-range" ? (l(), f("div", Bc, [
                J(Ee, {
                  variant: "outline",
                  onClick: $
                }, {
                  default: fe(() => [...te[3] || (te[3] = [
                    ce("Today", -1)
                  ])]),
                  _: 1
                }),
                J(Ee, {
                  variant: "outline",
                  onClick: W
                }, {
                  default: fe(() => [...te[4] || (te[4] = [
                    ce("Tomorrow", -1)
                  ])]),
                  _: 1
                })
              ])) : A("", !0),
              t.variant === "date-range" ? (l(), f("div", zc, [
                J(Ee, {
                  variant: "outline",
                  onClick: K
                }, {
                  default: fe(() => [...te[5] || (te[5] = [
                    ce("Apply", -1)
                  ])]),
                  _: 1
                })
              ])) : A("", !0),
              J(Ee, {
                variant: "outline",
                onClick: ee
              }, {
                default: fe(() => [...te[6] || (te[6] = [
                  ce("Clear", -1)
                ])]),
                _: 1
              })
            ]),
            t.variant === "date-time" ? (l(), f("div", Lc, [
              m("div", Hc, [
                J(Re, {
                  type: "text",
                  modelValue: p.value,
                  "onUpdate:modelValue": te[0] || (te[0] = (ie) => p.value = ie),
                  placeholder: "HH:mm or 4:30pm",
                  onFocus: te[1] || (te[1] = (ie) => a.value = !0),
                  onKeydown: xe(ue(ye, ["prevent"]), ["enter"]),
                  onBlur: Te,
                  formWrapperWidth: "100%"
                }, {
                  right: fe(() => [
                    J(oe(Le))
                  ]),
                  _: 1
                }, 8, ["modelValue", "onKeydown"]),
                a.value ? (l(), f("div", Vc, [
                  (l(!0), f(j, null, re(Se.value, (ie) => (l(), f("div", {
                    key: ie,
                    class: "fu-time-option",
                    onMousedown: ue((me) => Pe(ie), ["prevent"])
                  }, _(ie), 41, jc))), 128))
                ])) : A("", !0)
              ])
            ])) : A("", !0)
          ], 4)
        ])) : A("", !0)
      ]))
    ], 6));
  }
}, Tr = /* @__PURE__ */ ae(Uc, [["__scopeId", "data-v-41bea5ec"]]), Wc = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Tr
}, Symbol.toStringTag, { value: "Module" })), Yc = { class: "calendar-header" }, Gc = { class: "flex flex--gap-sm" }, Kc = { key: 0 }, qc = { class: "calendar-weekdays" }, Qc = { class: "calendar-days" }, Zc = ["onClick"], Jc = {
  key: 1,
  class: "calendar-months"
}, Xc = ["onClick"], ed = {
  key: 2,
  class: "calendar-years"
}, td = ["onClick"], nd = { class: "flex flex--space flex--gap-md px-2 pb-2" }, ad = {
  key: 0,
  class: "flex flex--gap-sm"
}, id = { key: 1 }, rd = {
  key: 3,
  class: "calendar-time"
}, od = { class: "fu-time-input-wrapper" }, sd = {
  key: 0,
  class: "fu-time-dropdown customScrollBar"
}, ld = ["onMousedown"], Et = 12, ud = {
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
    he.extend(Sr);
    const n = t, a = N(!1), i = e, r = N(!1), o = N(null), s = N(null), u = N(null), c = N(he().startOf("month")), d = N(null), h = N({ start: null, end: null }), p = N("00:00"), v = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"], y = [
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
    ], g = N("days"), b = O(
      () => Math.floor(c.value.year() / Et) * Et
    ), C = O(() => b.value + Et - 1), w = O(
      () => Array.from({ length: Et }, (F, te) => b.value + te)
    ), k = O(() => {
      const F = c.value.startOf("month").startOf("week"), te = c.value.endOf("month").endOf("week"), ie = [];
      let me = F.clone();
      for (; me.isBefore(te) || me.isSame(te, "day"); )
        ie.push({
          date: me.clone(),
          isCurrentMonth: me.month() === c.value.month()
        }), me = me.add(1, "day");
      return ie;
    });
    function T(F) {
      return !!(n.min && F.isBefore(he(n.min), "day") || n.max && F.isAfter(he(n.max), "day"));
    }
    function M(F) {
      return n.variant === "date-range" ? h.value.start && F.isSame(h.value.start, "day") || h.value.end && F.isSame(h.value.end, "day") : d.value && F.isSame(d.value, "day");
    }
    function x(F) {
      return n.variant === "date-range" && h.value.start && h.value.end && F.isAfter(h.value.start, "day") && F.isBefore(h.value.end, "day");
    }
    function L(F) {
      if (!T(F)) {
        if (n.variant === "date-range") {
          !h.value.start || o.value === "start" ? (h.value.start = F.clone(), h.value.end = null, o.value = "end") : F.isBefore(h.value.start, "day") ? (h.value.end = h.value.start.clone(), h.value.start = F.clone()) : h.value.end = F.clone();
          return;
        }
        d.value = F.clone(), i(
          "update:modelValue",
          n.variant === "date-time" ? d.value.format("YYYY-MM-DDTHH:mm") : d.value.format("YYYY-MM-DD")
        ), V();
      }
    }
    function K() {
      h.value.start && h.value.end && (i("update:modelValue", {
        start: h.value.start.format("YYYY-MM-DD"),
        end: h.value.end.format("YYYY-MM-DD")
      }), V());
    }
    function G(F = null) {
      o.value = F, r.value = !0, n.variant === "date-range" ? h.value.start ? c.value = h.value.start.startOf("month") : c.value = he().startOf("month") : d.value ? c.value = d.value.startOf("month") : c.value = he().startOf("month"), we(() => {
        R(), window.addEventListener("resize", R), window.addEventListener("click", Y);
      });
    }
    function V() {
      r.value = !1, window.removeEventListener("resize", R), window.removeEventListener("click", Y);
    }
    function Y(F) {
      !s.value?.contains(F.target) && !u.value?.contains(F.target) && V();
    }
    const U = N({
      position: "absolute",
      top: "0px",
      left: "0px",
      zIndex: 9999
    });
    function R() {
      if (!s.value || !u.value) return;
      const F = s.value.getBoundingClientRect(), te = u.value.getBoundingClientRect(), ie = window.innerHeight - F.bottom, me = F.top, We = window.scrollY || window.pageYOffset, nt = window.scrollX || window.pageXOffset;
      let Ye;
      ie < te.height && me > te.height ? Ye = F.top + We - te.height - 6 : Ye = F.bottom + We + 6, U.value = {
        position: "absolute",
        top: `${Ye}px`,
        left: `${F.left + nt}px`,
        zIndex: 9999
      };
    }
    const S = O(() => d.value ? n.variant === "date-time" ? d.value.format("YYYY-MM-DD HH:mm") : d.value.format("YYYY-MM-DD") : ""), E = O(() => n.variant !== "date-range" ? "" : h.value.start && h.value.end ? `${h.value.start.format(
      "YYYY-MM-DD"
    )} to ${h.value.end.format("YYYY-MM-DD")}` : h.value.start ? `${h.value.start.format("YYYY-MM-DD")} to ...` : ""), D = O(() => `fu-date-picker--${n.variant}`);
    ve(
      () => n.modelValue,
      (F) => {
        if (n.variant !== "date-range") {
          if (typeof F == "string" && F) {
            const te = he(F);
            if (te.isValid()) {
              d.value = te, c.value = te.startOf("month"), n.variant === "date-time" ? p.value = te.format("h:mm A") : p.value = "00:00";
              return;
            }
          }
          (F === null || F === "") && (d.value = null, h.value = { start: null, end: null }, p.value = "00:00");
        }
      },
      { immediate: !0 }
    );
    function q() {
      g.value === "days" ? g.value = "months" : g.value === "months" ? g.value = "years" : g.value = "days";
    }
    function Q() {
      g.value === "days" ? c.value = c.value.subtract(1, "month") : g.value === "months" ? c.value = c.value.subtract(1, "year") : c.value = c.value.subtract(Et, "year");
    }
    function P() {
      g.value === "days" ? c.value = c.value.add(1, "month") : g.value === "months" ? c.value = c.value.add(1, "year") : c.value = c.value.add(Et, "year");
    }
    function B(F) {
      c.value = c.value.month(F), g.value = "days";
    }
    function I(F) {
      c.value = c.value.year(F), g.value = "months";
    }
    function $() {
      const F = he();
      n.variant === "date-range" ? h.value = { start: F.clone(), end: F.clone() } : (d.value = F.clone(), i(
        "update:modelValue",
        n.variant === "date-time" ? F.format("YYYY-MM-DDTHH:mm") : F.format("YYYY-MM-DD")
      ), V());
    }
    function W() {
      const F = he().add(1, "day");
      n.variant === "date-range" ? h.value = { start: F.clone(), end: F.clone() } : (d.value = F.clone(), i(
        "update:modelValue",
        n.variant === "date-time" ? F.format("YYYY-MM-DDTHH:mm") : F.format("YYYY-MM-DD")
      ), V());
    }
    function ee() {
      d.value = null, h.value = { start: null, end: null }, i(
        "update:modelValue",
        n.variant === "date-range" ? { start: null, end: null } : null
      ), V();
    }
    const pe = O(() => {
      const F = [];
      for (let te = 0; te < 24; te++)
        for (let ie = 0; ie < 60; ie += 15)
          F.push(he().hour(te).minute(ie).format("h:mm A"));
      return F;
    }), Se = O(() => {
      if (!p.value) return pe.value;
      const F = p.value.toLowerCase().replace(/\s+/g, "");
      return pe.value.filter(
        (te) => te.toLowerCase().replace(/\s+/g, "").startsWith(F)
      );
    });
    function ye() {
      if (!d.value || !p.value) return;
      const F = String(p.value).trim().toLowerCase(), te = he(
        F,
        ["h:mm a", "h:mma", "ha", "h a", "hh:mm a", "H:mm", "HH:mm", "H"],
        !0
      );
      if (!te.isValid()) {
        a.value = !1;
        return;
      }
      d.value = d.value.hour(te.hour()).minute(te.minute()), p.value = d.value.format("h:mm A"), i("update:modelValue", d.value.format("YYYY-MM-DDTHH:mm")), a.value = !1;
    }
    function Pe(F) {
      p.value = F, ye();
    }
    function Te() {
      setTimeout(() => {
        ye(), a.value = !1;
      }, 120);
    }
    return Ae(() => {
      window.removeEventListener("resize", R), window.removeEventListener("click", Y);
    }), (F, te) => (l(), f("div", {
      class: Z(["fu-date-picker", D.value]),
      ref_key: "pickerRef",
      ref: s,
      style: ne({ width: t.formWrapperWidth })
    }, [
      t.variant !== "date-range" ? (l(), X(Re, {
        key: 0,
        type: "text",
        modelValue: S.value,
        placeholder: "Select date",
        readonly: "",
        onClick: G,
        formWrapperWidth: t.formWrapperWidth,
        size: t.size,
        error: t.error,
        required: t.required,
        label: t.label,
        disabled: t.disabled
      }, {
        right: fe(() => [
          J(oe(Le))
        ]),
        _: 1
      }, 8, ["modelValue", "formWrapperWidth", "size", "error", "required", "label", "disabled"])) : (l(), X(Re, {
        key: 1,
        type: "text",
        modelValue: E.value,
        placeholder: "Select date range",
        onClick: G,
        readonly: "",
        formWrapperWidth: t.formWrapperWidth,
        size: t.size,
        error: t.error,
        required: t.required,
        disabled: t.disabled
      }, {
        right: fe(() => [
          J(oe(Le))
        ]),
        _: 1
      }, 8, ["modelValue", "formWrapperWidth", "size", "error", "required", "disabled"])),
      (l(), X(De, { to: "body" }, [
        r.value ? (l(), f("div", {
          key: 0,
          class: "fu-date-picker__calendar-overlay",
          onClick: ue(V, ["self"])
        }, [
          m("div", {
            class: "fu-date-picker__calendar",
            style: ne(U.value),
            ref_key: "calendarRef",
            ref: u,
            onClick: te[2] || (te[2] = ue(() => {
            }, ["stop"]))
          }, [
            m("div", Yc, [
              J(Ee, {
                variant: "ghost",
                size: "sm",
                onClick: q
              }, {
                default: fe(() => [
                  g.value === "days" ? (l(), f(j, { key: 0 }, [
                    ce(_(c.value.format("MMMM YYYY")), 1)
                  ], 64)) : g.value === "months" ? (l(), f(j, { key: 1 }, [
                    ce(_(c.value.year()), 1)
                  ], 64)) : (l(), f(j, { key: 2 }, [
                    ce(_(b.value) + " - " + _(C.value), 1)
                  ], 64))
                ]),
                _: 1
              }),
              m("div", Gc, [
                J($e, {
                  icon: oe(Bt),
                  size: "sm",
                  onClick: Q
                }, null, 8, ["icon"]),
                J($e, {
                  icon: oe(zt),
                  size: "sm",
                  onClick: P
                }, null, 8, ["icon"])
              ])
            ]),
            g.value === "days" ? (l(), f("div", Kc, [
              m("div", qc, [
                (l(), f(j, null, re(v, (ie) => m("div", {
                  key: ie,
                  class: "calendar-weekday"
                }, _(ie), 1)), 64))
              ]),
              m("div", Qc, [
                (l(!0), f(j, null, re(k.value, (ie) => (l(), f("div", {
                  key: ie.date.toString(),
                  class: Z(["calendar-day", {
                    "calendar-day--other-month": !ie.isCurrentMonth,
                    "calendar-day--selected": M(ie.date),
                    "calendar-day--in-range": x(ie.date),
                    "calendar-day--disabled": T(ie.date)
                  }]),
                  onClick: (me) => L(ie.date)
                }, _(ie.date.date()), 11, Zc))), 128))
              ])
            ])) : g.value === "months" ? (l(), f("div", Jc, [
              (l(), f(j, null, re(y, (ie, me) => m("div", {
                key: ie,
                class: Z(["calendar-month", { "calendar-month--selected": me === c.value.month() }]),
                onClick: (We) => B(me)
              }, _(ie), 11, Xc)), 64))
            ])) : (l(), f("div", ed, [
              (l(!0), f(j, null, re(w.value, (ie) => (l(), f("div", {
                key: ie,
                class: Z(["calendar-year", { "calendar-year--selected": ie === c.value.year() }]),
                onClick: (me) => I(ie)
              }, _(ie), 11, td))), 128))
            ])),
            te[7] || (te[7] = m("hr", null, null, -1)),
            m("div", nd, [
              t.variant !== "date-range" ? (l(), f("div", ad, [
                J(Ee, {
                  variant: "outline",
                  onClick: $
                }, {
                  default: fe(() => [...te[3] || (te[3] = [
                    ce("Today", -1)
                  ])]),
                  _: 1
                }),
                J(Ee, {
                  variant: "outline",
                  onClick: W
                }, {
                  default: fe(() => [...te[4] || (te[4] = [
                    ce("Tomorrow", -1)
                  ])]),
                  _: 1
                })
              ])) : A("", !0),
              t.variant === "date-range" ? (l(), f("div", id, [
                J(Ee, {
                  variant: "outline",
                  onClick: K
                }, {
                  default: fe(() => [...te[5] || (te[5] = [
                    ce("Apply", -1)
                  ])]),
                  _: 1
                })
              ])) : A("", !0),
              J(Ee, {
                variant: "outline",
                onClick: ee
              }, {
                default: fe(() => [...te[6] || (te[6] = [
                  ce("Clear", -1)
                ])]),
                _: 1
              })
            ]),
            t.variant === "date-time" ? (l(), f("div", rd, [
              m("div", od, [
                J(Re, {
                  type: "text",
                  modelValue: p.value,
                  "onUpdate:modelValue": te[0] || (te[0] = (ie) => p.value = ie),
                  placeholder: "HH:mm or 4:30pm",
                  onFocus: te[1] || (te[1] = (ie) => a.value = !0),
                  onKeydown: xe(ue(ye, ["prevent"]), ["enter"]),
                  onBlur: Te,
                  formWrapperWidth: "100%"
                }, {
                  right: fe(() => [
                    J(oe(Le))
                  ]),
                  _: 1
                }, 8, ["modelValue", "onKeydown"]),
                a.value ? (l(), f("div", sd, [
                  (l(!0), f(j, null, re(Se.value, (ie) => (l(), f("div", {
                    key: ie,
                    class: "fu-time-option",
                    onMousedown: ue((me) => Pe(ie), ["prevent"])
                  }, _(ie), 41, ld))), 128))
                ])) : A("", !0)
              ])
            ])) : A("", !0)
          ], 4)
        ])) : A("", !0)
      ]))
    ], 6));
  }
}, cd = /* @__PURE__ */ ae(ud, [["__scopeId", "data-v-7bb6d1f9"]]), dd = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: cd
}, Symbol.toStringTag, { value: "Module" })), fd = { class: "calendar-header" }, md = { class: "flex flex--gap-sm" }, hd = {
  key: 0,
  class: "calendar-months"
}, vd = ["onClick"], pd = {
  key: 1,
  class: "calendar-years"
}, gd = ["onClick"], yd = { class: "flex flex--space flex--gap-md px-2 pb-2" }, tn = 12, bd = {
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
    const n = t, a = e, i = N(!1), r = N(null), o = N(null), s = N("months"), u = N(he().year()), c = [
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
    ], d = O(
      () => u.value - u.value % tn
    ), h = O(() => d.value + tn - 1), p = O(() => {
      const R = d.value;
      return Array.from({ length: tn }, (S, E) => R + E);
    }), v = O(() => {
      if (!n.modelValue) return null;
      const R = he(n.modelValue, "YYYY-MM", !0);
      return R.isValid() ? R : null;
    });
    function y(R) {
      return v.value ? v.value.month() === R && v.value.year() === u.value : !1;
    }
    function g(R) {
      const S = he(
        `${u.value}-${(R + 1).toString().padStart(2, "0")}`,
        "YYYY-MM"
      );
      return !!(n.min && S.isBefore(he(n.min, "YYYY-MM"), "month") || n.max && S.isAfter(he(n.max, "YYYY-MM"), "month"));
    }
    function b(R) {
      u.value = R, s.value = "months";
    }
    function C(R) {
      if (g(R)) return;
      const S = he(
        `${u.value}-${(R + 1).toString().padStart(2, "0")}`,
        "YYYY-MM"
      );
      a("update:modelValue", S.format("MMM, YYYY")), i.value = !1;
    }
    function w() {
      const R = he();
      u.value = R.year(), a("update:modelValue", R.format("MMM, YYYY")), i.value = !1;
    }
    function k() {
      n.disabled || (i.value = !i.value, i.value ? (v.value && (u.value = v.value.year()), we(() => {
        L(), window.addEventListener("resize", L), window.addEventListener("click", M);
      })) : (window.removeEventListener("resize", L), window.removeEventListener("click", M)));
    }
    function T() {
      i.value = !1, window.removeEventListener("resize", L), window.removeEventListener("click", M);
    }
    function M(R) {
      !r.value?.contains(R.target) && !o.value?.contains(R.target) && T();
    }
    const x = N({
      position: "absolute",
      top: "0px",
      left: "0px",
      zIndex: 9999
    });
    function L() {
      if (!r.value || !o.value) return;
      const R = r.value.getBoundingClientRect(), S = o.value.getBoundingClientRect(), E = window.innerHeight - R.bottom, D = R.top, q = window.scrollY || window.pageYOffset, Q = window.scrollX || window.pageXOffset;
      let P;
      E < S.height && D > S.height ? P = R.top + q - S.height - 6 : P = R.bottom + q + 6, x.value = {
        position: "absolute",
        top: `${P}px`,
        left: `${R.left + Q}px`,
        zIndex: 9999
      };
    }
    function K() {
      s.value = s.value === "months" ? "years" : "months";
    }
    function G() {
      s.value === "months" ? u.value-- : u.value = Math.max(d.value - tn, 0);
    }
    function V() {
      s.value === "months" ? u.value++ : u.value = h.value + 1;
    }
    function Y() {
      a("update:modelValue", null), i.value = !1;
    }
    const U = O(() => n.modelValue || "");
    return Ae(() => {
      window.removeEventListener("resize", L), window.removeEventListener("click", M);
    }), (R, S) => (l(), f("div", {
      class: "fu-month-picker",
      ref_key: "pickerRef",
      ref: r,
      style: ne({ width: t.formWrapperWidth })
    }, [
      J(Re, {
        type: "text",
        modelValue: U.value,
        placeholder: "Select month",
        readonly: "",
        onClick: [
          k,
          ue(T, ["self"])
        ],
        formWrapperWidth: t.formWrapperWidth,
        size: t.size,
        error: t.error,
        required: t.required,
        label: t.label,
        disabled: t.disabled
      }, {
        right: fe(() => [
          J(oe(Le))
        ]),
        _: 1
      }, 8, ["modelValue", "formWrapperWidth", "size", "error", "required", "label", "disabled"]),
      (l(), X(De, { to: "body" }, [
        i.value ? (l(), f("div", {
          key: 0,
          class: "fu-month-picker__calendar-overlay",
          onClick: ue(T, ["self"])
        }, [
          m("div", {
            class: "fu-month-picker__calendar",
            style: ne(x.value),
            ref_key: "calendarRef",
            ref: o,
            onClick: S[0] || (S[0] = ue(() => {
            }, ["stop"]))
          }, [
            m("div", fd, [
              J(Ee, {
                variant: "ghost",
                size: "sm",
                onClick: K,
                icon: oe(Le)
              }, {
                default: fe(() => [
                  s.value === "months" ? (l(), f(j, { key: 0 }, [
                    ce(_(u.value), 1)
                  ], 64)) : (l(), f(j, { key: 1 }, [
                    ce(_(d.value) + " - " + _(h.value), 1)
                  ], 64))
                ]),
                _: 1
              }, 8, ["icon"]),
              m("div", md, [
                J($e, {
                  icon: oe(Bt),
                  size: "sm",
                  onClick: G
                }, null, 8, ["icon"]),
                J($e, {
                  icon: oe(zt),
                  size: "sm",
                  onClick: V
                }, null, 8, ["icon"])
              ])
            ]),
            s.value === "months" ? (l(), f("div", hd, [
              (l(), f(j, null, re(c, (E, D) => m("div", {
                key: E,
                class: Z(["calendar-month", {
                  "calendar-month--selected": y(D),
                  "calendar-month--disabled": g(D)
                }]),
                onClick: (q) => C(D)
              }, _(E), 11, vd)), 64))
            ])) : (l(), f("div", pd, [
              (l(!0), f(j, null, re(p.value, (E) => (l(), f("div", {
                key: E,
                class: Z(["calendar-year", { "calendar-year--selected": E === u.value }]),
                onClick: (D) => b(E)
              }, _(E), 11, gd))), 128))
            ])),
            S[3] || (S[3] = m("hr", null, null, -1)),
            m("div", yd, [
              J(Ee, {
                variant: "outline",
                onClick: w
              }, {
                default: fe(() => [...S[1] || (S[1] = [
                  ce(" This Month ", -1)
                ])]),
                _: 1
              }),
              J(Ee, {
                variant: "outline",
                onClick: Y
              }, {
                default: fe(() => [...S[2] || (S[2] = [
                  ce(" Clear ", -1)
                ])]),
                _: 1
              })
            ])
          ], 4)
        ])) : A("", !0)
      ]))
    ], 4));
  }
}, Cd = /* @__PURE__ */ ae(bd, [["__scopeId", "data-v-7377986b"]]), wd = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Cd
}, Symbol.toStringTag, { value: "Module" })), Ad = { class: "calendar-header" }, _d = { class: "flex flex--gap-sm" }, kd = { key: 0 }, Sd = { class: "calendar-weekdays" }, Td = { class: "calendar-days" }, Ed = ["onClick"], Md = {
  key: 1,
  class: "calendar-months"
}, Nd = ["onClick"], Dd = {
  key: 2,
  class: "calendar-years"
}, Id = ["onClick"], Od = {
  key: 3,
  class: "calendar-multi-summary"
}, Rd = {
  key: 4,
  class: "calendar-time"
}, xd = {
  key: 0,
  class: "fu-time-dropdown customScrollBar"
}, $d = ["onMousedown"], nn = 12, Pd = {
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
    const n = t, a = e, i = N(he().startOf("month")), r = N("days"), o = N("00:00"), s = N(!1), u = N(null), c = N([]), d = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"], h = [
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
      () => Math.floor(i.value.year() / nn) * nn
    ), v = O(() => p.value + nn - 1), y = O(
      () => Array.from({ length: nn }, (R, S) => p.value + S)
    ), g = O(() => {
      const R = i.value.startOf("month").startOf("week"), S = i.value.endOf("month").endOf("week"), E = [];
      let D = R.clone();
      for (; D.isBefore(S) || D.isSame(S, "day"); )
        E.push({
          date: D.clone(),
          isCurrentMonth: D.month() === i.value.month()
        }), D = D.add(1, "day");
      return E;
    }), b = O(() => {
      const R = [];
      for (let S = 0; S < 24; S++)
        for (let E = 0; E < 60; E += 15)
          R.push(he().hour(S).minute(E).format("h:mm A"));
      return R;
    }), C = O(() => b.value), w = (R) => n.disabledDates.includes(R.format("YYYY-MM-DD"));
    function k(R) {
      return n.mode === "multi" ? c.value.includes(R.format("YYYY-MM-DD")) : u.value && R.isSame(u.value, "day");
    }
    function T(R) {
      if (!w(R))
        if (n.mode === "multi") {
          const S = R.format("YYYY-MM-DD");
          c.value.indexOf(S) === -1 ? c.value = [...c.value, S] : c.value = c.value.filter((D) => D !== S), c.value = [...c.value].sort(), a("update:modelValue", [...c.value]);
        } else if (u.value = R.clone(), n.variant === "date-time") {
          const S = he(
            `${u.value.format("YYYY-MM-DD")} ${o.value}`,
            "YYYY-MM-DD HH:mm"
          );
          a("update:modelValue", S.format("YYYY-MM-DDTHH:mm"));
        } else
          a("update:modelValue", u.value.format("YYYY-MM-DD"));
    }
    function M() {
      c.value = [], a("update:modelValue", []);
    }
    const x = () => i.value = i.value.subtract(1, "month"), L = () => i.value = i.value.add(1, "month"), K = () => r.value = r.value === "days" ? "months" : r.value === "months" ? "years" : "days", G = (R) => {
      i.value = i.value.month(R), r.value = "days";
    }, V = (R) => {
      i.value = i.value.year(R), r.value = "months";
    };
    function Y() {
      if (!u.value) return;
      const R = he(`${u.value.format("YYYY-MM-DD")} ${o.value}`, [
        "YYYY-MM-DD HH:mm",
        "YYYY-MM-DD h:mm A"
      ]);
      R.isValid() && (o.value = R.format("HH:mm"), a("update:modelValue", R.format("YYYY-MM-DDTHH:mm")), s.value = !1);
    }
    function U(R) {
      if (!u.value) return;
      o.value = he(R, "h:mm A").format("HH:mm");
      const S = he(
        `${u.value.format("YYYY-MM-DD")} ${o.value}`,
        "YYYY-MM-DD HH:mm"
      );
      a("update:modelValue", S.format("YYYY-MM-DDTHH:mm")), s.value = !1;
    }
    return ve(
      () => n.modelValue,
      (R) => {
        if (n.mode === "multi")
          c.value = Array.isArray(R) ? [...R] : [];
        else {
          if (!R) {
            u.value = null;
            return;
          }
          const S = he(R);
          S.isValid() && (u.value = S, i.value = S.startOf("month"), n.variant === "date-time" && (o.value = S.format("HH:mm")));
        }
      },
      { immediate: !0 }
    ), (R, S) => (l(), f("div", {
      class: "fu-date-picker fu-date-picker--plain",
      style: ne({ width: t.formWrapperWidth, fontSize: t.fontSize })
    }, [
      m("div", {
        class: "fu-date-picker",
        style: ne({ width: t.formWrapperWidth })
      }, [
        m("div", Ad, [
          m("button", { onClick: K }, [
            r.value === "days" ? (l(), f(j, { key: 0 }, [
              ce(_(i.value.format("MMMM YYYY")), 1)
            ], 64)) : r.value === "months" ? (l(), f(j, { key: 1 }, [
              ce(_(i.value.year()), 1)
            ], 64)) : (l(), f(j, { key: 2 }, [
              ce(_(p.value) + " - " + _(v.value), 1)
            ], 64))
          ]),
          m("div", _d, [
            m("button", { onClick: x }, [
              J(oe(Bt), {
                size: 16,
                color: "var(--fu-color-text)"
              })
            ]),
            m("button", { onClick: L }, [
              J(oe(zt), { size: 16 })
            ])
          ])
        ]),
        r.value === "days" ? (l(), f("div", kd, [
          m("div", Sd, [
            (l(), f(j, null, re(d, (E) => m("div", {
              key: E,
              class: "calendar-weekday"
            }, _(E), 1)), 64))
          ]),
          m("div", Td, [
            (l(!0), f(j, null, re(g.value, (E) => (l(), f("div", {
              key: E.date.toString(),
              class: Z(["calendar-day", {
                "calendar-day--other-month": !E.isCurrentMonth,
                "calendar-day--selected": k(E.date),
                "calendar-day--disabled": w(E.date)
              }]),
              onClick: (D) => T(E.date)
            }, _(E.date.date()), 11, Ed))), 128))
          ])
        ])) : r.value === "months" ? (l(), f("div", Md, [
          (l(), f(j, null, re(h, (E, D) => m("div", {
            key: E,
            class: Z(["calendar-month", { "calendar-month--selected": D === i.value.month() }]),
            onClick: (q) => G(D)
          }, _(E), 11, Nd)), 64))
        ])) : (l(), f("div", Dd, [
          (l(!0), f(j, null, re(y.value, (E) => (l(), f("div", {
            key: E,
            class: Z(["calendar-year", { "calendar-year--selected": E === i.value.year() }]),
            onClick: (D) => V(E)
          }, _(E), 11, Id))), 128))
        ])),
        t.mode === "multi" && c.value.length ? (l(), f("div", Od, [
          m("span", null, _(c.value.length) + " date" + _(c.value.length > 1 ? "s" : "") + " selected", 1),
          m("button", {
            class: "calendar-multi-clear",
            onClick: M
          }, "Clear all")
        ])) : A("", !0),
        t.variant === "date-time" ? (l(), f("div", Rd, [
          J(Re, {
            type: "text",
            modelValue: o.value,
            "onUpdate:modelValue": S[0] || (S[0] = (E) => o.value = E),
            placeholder: "HH:mm or 4:30pm",
            onFocus: S[1] || (S[1] = (E) => s.value = !0),
            onKeydown: xe(ue(Y, ["prevent"]), ["enter"]),
            formWrapperWidth: "100%"
          }, {
            right: fe(() => [
              J(oe(Le))
            ]),
            _: 1
          }, 8, ["modelValue", "onKeydown"]),
          s.value ? (l(), f("div", xd, [
            (l(!0), f(j, null, re(C.value, (E) => (l(), f("div", {
              key: E,
              class: "fu-time-option",
              onMousedown: ue((D) => U(E), ["prevent"])
            }, _(E), 41, $d))), 128))
          ])) : A("", !0)
        ])) : A("", !0)
      ], 4)
    ], 4));
  }
}, Fd = /* @__PURE__ */ ae(Pd, [["__scopeId", "data-v-edb78133"]]), Bd = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Fd
}, Symbol.toStringTag, { value: "Module" })), zd = ["onMousedown"], oi = 240, Ld = {
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
    const n = t, a = e, i = N(""), r = N(n.modelValue || ""), o = N(""), s = N(!1), u = N(!1), c = N(null), d = N(null), h = N({ left: 0, top: 0, bottom: 0, width: 0 }), p = N(null), v = (U) => {
      if (!U || !/^\d{2}:\d{2}$/.test(U)) return U || "";
      const [R, S] = U.split(":").map(Number);
      if (n.displayFormat === "24")
        return `${String(R).padStart(2, "0")}:${String(S).padStart(2, "0")}`;
      const E = R < 12 ? "am" : "pm", D = R % 12 || 12;
      return `${String(D).padStart(2, "0")}:${String(S).padStart(2, "0")} ${E}`;
    }, y = (U) => {
      if (!U) return null;
      const R = U.trim().toLowerCase();
      if (n.displayFormat === "24") {
        const Q = R.match(/^(\d{1,2}):(\d{2})$/);
        if (!Q) return null;
        const P = parseInt(Q[1], 10), B = parseInt(Q[2], 10);
        return P > 23 || B > 59 ? null : `${String(P).padStart(2, "0")}:${String(B).padStart(2, "0")}`;
      }
      const S = R.match(/^(\d{1,2})(?::(\d{2}))?\s*(am|pm)$/);
      if (!S) return null;
      let E = parseInt(S[1], 10);
      const D = parseInt(S[2] || "00", 10), q = S[3];
      return E < 1 || E > 12 || D > 59 ? null : (q === "pm" && E !== 12 && (E += 12), q === "am" && E === 12 && (E = 0), `${String(E).padStart(2, "0")}:${String(D).padStart(2, "0")}`);
    };
    i.value = v(n.modelValue), ve(
      () => n.modelValue,
      (U) => {
        r.value = U || "", document.activeElement !== c.value?.querySelector("input") && (i.value = v(U));
      }
    ), ve(
      () => n.displayFormat,
      () => {
        i.value = v(r.value);
      }
    );
    const g = O(() => {
      n.displayFormat;
      const U = [];
      for (let R = 0; R < 24; R++)
        for (let S = 0; S < 60; S += n.interval) {
          const E = `${String(R).padStart(2, "0")}:${String(S).padStart(2, "0")}`;
          U.push({ label: v(E), value: E });
        }
      return U;
    }), b = O(
      () => o.value ? g.value.filter(
        (U) => U.label.toLowerCase().includes(o.value.toLowerCase())
      ) : g.value
    ), C = O(
      () => b.value.length ? b.value : g.value
    ), w = (U) => {
      const R = U.target;
      let S = R.value;
      if (n.displayFormat === "24") {
        if (S = S.replace(/[^0-9:]/g, "").slice(0, 5), /^\d{2}$/.test(S)) {
          S += ":", i.value = S, o.value = S, we(() => R.setSelectionRange(3, 3));
          return;
        }
        /^\d{2}:\d/.test(S) && parseInt(S.slice(0, 2), 10) > 23 && (S = "23:" + S.slice(3)), /^\d{2}:\d{2}$/.test(S) && parseInt(S.slice(3), 10) > 59 && (S = S.slice(0, 3) + "59");
      } else {
        if (S = S.replace(/[^0-9: apm]/g, ""), S = S.replace(/([ap])m*([ap])/g, "$1").replace(/(am|pm).+/, "$1").slice(0, 8), /^\d{2}$/.test(S)) {
          S += ":", i.value = S, o.value = S, we(() => R.setSelectionRange(3, 3));
          return;
        }
        if (/^\d{2}/.test(S)) {
          const E = parseInt(S.slice(0, 2), 10);
          E > 12 && (S = "12" + S.slice(2)), E === 0 && (S = "01" + S.slice(2));
        }
        /^\d{2}:\d{2}/.test(S) && parseInt(S.slice(3, 5), 10) > 59 && (S = S.slice(0, 3) + "59" + S.slice(5));
      }
      i.value = S, o.value = S;
    }, k = () => {
      const U = y(i.value);
      if (!U) {
        i.value = v(r.value), o.value = "", s.value = !1;
        return;
      }
      r.value = U, i.value = v(U), o.value = "", a("update:modelValue", U), a("change", U), s.value = !1;
    }, T = () => {
      if (!c.value) return;
      const U = c.value.getBoundingClientRect();
      h.value = {
        left: U.left,
        top: U.top,
        bottom: U.bottom,
        width: U.width
      };
      const R = window.innerHeight - U.bottom;
      u.value = R < oi && U.top > R;
    }, M = (U, R) => {
      R === 0 && U && (p.value = U);
    }, x = (U) => {
      r.value = U, i.value = v(U), o.value = "", a("update:modelValue", U), a("change", U), s.value = !1;
    }, L = () => {
      i.value = v(r.value), o.value = "", s.value = !0, T();
    }, K = () => setTimeout(() => {
      k(), s.value = !1;
    }, 120), G = (U) => {
      c.value && !c.value.contains(U.target) && d.value && !d.value.contains(U.target) && (s.value = !1);
    };
    ve(o, async () => {
      await we(), p.value && p.value.scrollIntoView({ behavior: "smooth", block: "nearest" });
    });
    const V = () => T();
    _e(() => {
      window.addEventListener("resize", V), document.addEventListener("mousedown", G), we(T);
    }), Ae(() => {
      window.removeEventListener("resize", V), document.removeEventListener("mousedown", G);
    });
    const Y = () => {
      n.disabled || (s.value ? s.value = !1 : (i.value = v(r.value), o.value = "", s.value = !0, T()));
    };
    return (U, R) => (l(), f("div", {
      class: "fu-time-picker",
      ref_key: "inputRef",
      ref: c
    }, [
      J(Re, {
        type: "text",
        modelValue: i.value,
        "onUpdate:modelValue": R[0] || (R[0] = (S) => i.value = S),
        placeholder: t.displayFormat === "12" ? "hh:mm am/pm" : "HH:mm",
        onFocus: L,
        onInput: w,
        onKeydown: xe(ue(k, ["prevent"]), ["enter"]),
        onBlur: K,
        label: t.label,
        error: t.error,
        required: t.required,
        disabled: t.disabled,
        size: t.size,
        formWrapperWidth: t.formWrapperWidth
      }, {
        right: fe(() => [
          J(oe(Le), {
            style: { cursor: "pointer" },
            onMousedown: ue(Y, ["prevent"])
          })
        ]),
        _: 1
      }, 8, ["modelValue", "placeholder", "onKeydown", "label", "error", "required", "disabled", "size", "formWrapperWidth"]),
      (l(), X(De, { to: "body" }, [
        s.value ? (l(), f("div", {
          key: 0,
          ref_key: "dropdownRef",
          ref: d,
          class: Z(["fu-time-dropdown customScrollBar", { "open-up": u.value }]),
          style: ne({
            left: h.value.left + "px",
            width: h.value.width + "px",
            top: u.value ? h.value.top - oi + "px" : h.value.bottom + "px"
          })
        }, [
          (l(!0), f(j, null, re(C.value, (S, E) => (l(), f("div", {
            key: S.value,
            class: "fu-time-option",
            ref_for: !0,
            ref: (D) => M(D, E),
            onMousedown: ue((D) => x(S.value), ["prevent"])
          }, _(S.label), 41, zd))), 128))
        ], 6)) : A("", !0)
      ]))
    ], 512));
  }
}, Hd = /* @__PURE__ */ ae(Ld, [["__scopeId", "data-v-72c32689"]]), Vd = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Hd
}, Symbol.toStringTag, { value: "Module" })), jd = {
  key: 0,
  class: "fu-drawer"
}, Ud = { class: "fu-drawer__header-content" }, Wd = {
  key: 0,
  class: "fu-drawer__header-actions"
}, Yd = { class: "fu-drawer__body" }, Gd = { class: "fu-drawer__footer" }, Kd = /* @__PURE__ */ le({
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
    function i(r) {
      r.key === "Escape" && n.open && a("close");
    }
    return _e(() => window.addEventListener("keydown", i)), Ae(() => window.removeEventListener("keydown", i)), (r, o) => (l(), X(He, { name: "drawer-fade" }, {
      default: fe(() => [
        t.open ? (l(), f("div", jd, [
          m("div", {
            class: "fu-drawer__backdrop",
            onClick: o[0] || (o[0] = (s) => r.$emit("close"))
          }),
          m("div", {
            class: Z(["fu-drawer__panel", [
              `fu-drawer__panel--${t.position}`,
              `fu-drawer__panel--${t.size}`,
              { "fu-drawer__panel--with-controls": t.showControls }
            ]])
          }, [
            r.$slots.header || t.showControls ? (l(), f("div", {
              key: 0,
              class: Z(["fu-drawer__header", { "border-bottom-0": t.hideHeaderBorder }])
            }, [
              m("div", Ud, [
                se(r.$slots, "header", {}, void 0, !0)
              ]),
              t.showControls ? (l(), f("div", Wd, [
                J($e, {
                  size: "sm",
                  variant: "subtle",
                  icon: oe(Ct),
                  onClick: o[1] || (o[1] = (s) => r.$emit("close"))
                }, null, 8, ["icon"])
              ])) : A("", !0)
            ], 2)) : A("", !0),
            m("div", Yd, [
              se(r.$slots, "default", { class: "slot-body" }, void 0, !0)
            ]),
            m("div", {
              class: Z(["fu-drawer__nav", [
                t.position === "right" ? "fu-drawer__nav--left" : "",
                t.position === "left" ? "fu-drawer__nav--right" : "",
                t.position === "bottom" ? "fu-drawer__nav--center" : ""
              ]])
            }, [
              t.canPrev ? (l(), X($e, {
                key: 0,
                size: "sm",
                variant: "subtle",
                icon: oe(yr),
                onClick: o[2] || (o[2] = (s) => r.$emit("prev"))
              }, null, 8, ["icon"])) : A("", !0),
              t.canNext ? (l(), X($e, {
                key: 1,
                size: "sm",
                variant: "subtle",
                icon: oe(Le),
                onClick: o[3] || (o[3] = (s) => r.$emit("next"))
              }, null, 8, ["icon"])) : A("", !0)
            ], 2),
            m("div", Gd, [
              se(r.$slots, "footer", {}, void 0, !0)
            ])
          ], 2)
        ])) : A("", !0)
      ]),
      _: 3
    }));
  }
}), qd = /* @__PURE__ */ ae(Kd, [["__scopeId", "data-v-37927fd4"]]), Qd = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: qd
}, Symbol.toStringTag, { value: "Module" })), Zd = ["onClick"], Jd = /* @__PURE__ */ le({
  __name: "FusionDropdownButton",
  props: {
    buttonText: {},
    buttonIcon: {},
    actions: {},
    align: { default: "right" }
  },
  setup(t) {
    const e = t, n = N(!1), a = N(null), i = N(null), r = N({});
    let o = null;
    function s() {
      if (n.value = !n.value, n.value) {
        if (o && o !== a.value) {
          const p = new CustomEvent("close-other-dropdowns");
          document.dispatchEvent(p);
        }
        o = a.value, we(u);
      }
    }
    function u() {
      const p = a.value?.querySelector("button");
      if (!p || !i.value) return;
      const v = p.getBoundingClientRect(), y = i.value.offsetWidth, g = {
        left: `${v.left}px`,
        top: `${v.bottom + 4}px`
      };
      e.align === "right" ? g.left = `${v.right - y}px` : e.align === "center" && (g.left = `${v.left + v.width / 2 - y / 2}px`), r.value = {
        position: "absolute",
        ...g,
        zIndex: "1000"
      };
    }
    function c(p) {
      p.onClick?.(), n.value = !1;
    }
    function d(p) {
      a.value && !a.value.contains(p.target) && i.value && !i.value.contains(p.target) && (n.value = !1);
    }
    function h() {
      n.value = !1;
    }
    return _e(() => {
      document.addEventListener("click", d), document.addEventListener("close-other-dropdowns", h);
    }), Ae(() => {
      document.removeEventListener("click", d), document.removeEventListener("close-other-dropdowns", h);
    }), (p, v) => (l(), f("div", {
      class: "fu-dropdown",
      ref_key: "dropdown",
      ref: a
    }, [
      m("button", {
        class: "fu-dropdown__button",
        onClick: s
      }, [
        ce(_(t.buttonText) + " ", 1),
        t.buttonIcon ? (l(), X(ge(t.buttonIcon), {
          key: 0,
          class: "fu-dropdown__icon"
        })) : A("", !0)
      ]),
      (l(), X(De, { to: "body" }, [
        n.value ? (l(), f("ul", {
          key: 0,
          class: Z(["fu-dropdown__menu", [`fu-dropdown__menu--${t.align}`, { show: n.value }]]),
          style: ne(r.value),
          ref_key: "menuRef",
          ref: i
        }, [
          (l(!0), f(j, null, re(t.actions, (y) => (l(), f("li", {
            key: y.label
          }, [
            m("a", {
              class: "fu-dropdown__item",
              onClick: (g) => c(y)
            }, [
              y.icon ? (l(), X(ge(y.icon), {
                key: 0,
                class: "fu-dropdown__icon"
              })) : A("", !0),
              ce(" " + _(y.label), 1)
            ], 8, Zd)
          ]))), 128))
        ], 6)) : A("", !0)
      ]))
    ], 512));
  }
}), Xd = /* @__PURE__ */ ae(Jd, [["__scopeId", "data-v-478aec9e"]]), ef = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Xd
}, Symbol.toStringTag, { value: "Module" })), tf = { class: "fu-dropdown-inline__wrapper" }, nf = ["value", "placeholder", "disabled"], af = ["onMousedown"], rf = /* @__PURE__ */ le({
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
    const n = t, a = e, i = N(null), r = N(null), o = N(n.modelValue || null), s = N(!1), u = N({});
    ve(
      () => n.modelValue,
      (v) => o.value = v
    ), ve(
      () => n.isOpen,
      (v) => {
        n.disabled || n.readonly || (s.value = !!v, v && p());
      }
    );
    function c() {
      n.disabled || n.readonly || (s.value || a("open"), s.value = !0, p());
    }
    function d(v) {
      o.value = v, a("update:modelValue", v), a("close"), s.value = !1, r.value?.blur();
    }
    function h(v) {
      i.value && !i.value.contains(v.target) && (s.value && a("close"), s.value = !1);
    }
    function p() {
      const v = i.value;
      if (!v) return;
      const y = v.getBoundingClientRect();
      u.value = {
        position: "absolute",
        top: `${y.bottom + 4}px`,
        left: `${y.left}px`,
        width: `${y.width}px`,
        zIndex: "9999"
      };
    }
    return _e(() => {
      window.addEventListener("click", h), window.addEventListener("resize", p);
    }), Ae(() => {
      window.removeEventListener("click", h), window.removeEventListener("resize", p);
    }), (v, y) => (l(), f("div", {
      class: Z(["fu-dropdown-inline", {
        "fu-dropdown-inline--disabled": t.disabled,
        "fu-dropdown-inline--readonly": t.readonly
      }]),
      ref_key: "inlineRef",
      ref: i
    }, [
      m("div", tf, [
        o.value ? (l(), f("span", {
          key: 0,
          class: "fu-dropdown-inline__dot",
          style: ne({ backgroundColor: o.value.color })
        }, null, 4)) : A("", !0),
        m("input", {
          ref_key: "inputRef",
          ref: r,
          type: "text",
          class: "fu-dropdown-inline__input",
          value: o.value?.label || "",
          placeholder: t.placeholder,
          readonly: "",
          disabled: t.disabled,
          onFocus: c
        }, null, 40, nf)
      ]),
      (l(), X(De, { to: "body" }, [
        s.value ? (l(), f("ul", {
          key: 0,
          class: "fu-dropdown-inline__menu",
          style: ne(u.value)
        }, [
          (l(!0), f(j, null, re(t.options, (g) => (l(), f("li", {
            key: g.label,
            class: "fu-dropdown-inline__item",
            onMousedown: ue((b) => d(g), ["prevent"])
          }, [
            m("span", {
              class: "fu-dropdown-inline__dot",
              style: ne({ backgroundColor: g.color })
            }, null, 4),
            ce(" " + _(g.label), 1)
          ], 40, af))), 128))
        ], 4)) : A("", !0)
      ]))
    ], 2));
  }
}), of = /* @__PURE__ */ ae(rf, [["__scopeId", "data-v-cf4bb282"]]), sf = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: of
}, Symbol.toStringTag, { value: "Module" })), lf = {
  key: 0,
  class: "content"
}, uf = {
  key: 0,
  class: "fu-dropdown__group-label"
}, cf = {
  key: 0,
  class: "fu-dropdown__divider"
}, df = {
  key: 1,
  class: "flex w-100"
}, ff = ["onClick"], mf = {
  key: 1,
  class: "fu-dropdown__divider"
}, hf = {
  key: 0,
  class: "fu-dropdown__divider"
}, vf = {
  key: 1,
  class: "flex w-100"
}, pf = ["onClick"], gf = /* @__PURE__ */ le({
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
    const n = e, a = t, i = N(!1), r = N(null), o = N(null), s = N({
      top: "0px",
      left: "0px"
    });
    ve(
      () => a.isOpen,
      (g) => {
        typeof g == "boolean" && (i.value = g);
      }
    );
    function u(g) {
      g?.stopPropagation();
      const b = !i.value;
      b && document.dispatchEvent(new CustomEvent("close-all-dropdowns")), i.value = b, n(b ? "open" : "close"), n("update:isOpen", b), b && we(c);
    }
    function c() {
      if (!r.value || !o.value) return;
      const g = r.value.getBoundingClientRect(), b = g.bottom + window.scrollY + 6, C = o.value.offsetWidth;
      let w = g.left + window.scrollX;
      a.align === "center" ? w += g.width / 2 - C / 2 : a.align === "right" && (w = g.right - C + window.scrollX), s.value = {
        position: "absolute",
        top: `${b}px`,
        left: `${w}px`,
        zIndex: "2000"
      };
    }
    function d(g, b) {
      g.onClick?.(), a.closeOnSelect && h();
    }
    function h() {
      i.value = !1, n("close"), n("update:isOpen", !1);
    }
    function p(g) {
      i.value && r.value && !r.value.contains(g.target) && o.value && !o.value.contains(g.target) && h();
    }
    function v() {
      i.value && h();
    }
    function y() {
      h();
    }
    return _e(() => {
      document.addEventListener("click", p), window.addEventListener("resize", v), document.addEventListener("close-all-dropdowns", y);
    }), Ae(() => {
      document.removeEventListener("click", p), window.removeEventListener("resize", v), document.removeEventListener("close-all-dropdowns", y);
    }), (g, b) => (l(), f("div", {
      class: "fu-dropdown",
      ref_key: "dropdown",
      ref: r
    }, [
      m("div", {
        class: "fu-dropdown__trigger",
        onClick: u
      }, [
        se(g.$slots, "trigger", {}, void 0, !0)
      ]),
      (l(), X(De, { to: "body" }, [
        J(He, { name: "fade" }, {
          default: fe(() => [
            i.value ? (l(), f("div", {
              key: 0,
              class: Z(["fu-dropdown__menu", [`fu-dropdown__menu--${t.align}`]]),
              style: ne(s.value),
              ref_key: "menuRef",
              ref: o
            }, [
              t.content ? (l(), f("div", lf, [
                se(g.$slots, "content", {}, void 0, !0)
              ])) : A("", !0),
              t.groups?.length ? (l(!0), f(j, { key: 1 }, re(t.groups, (C, w) => (l(), f("div", { key: w }, [
                C.label ? (l(), f("div", uf, _(C.label), 1)) : A("", !0),
                (l(!0), f(j, null, re(C.actions, (k, T) => (l(), f(j, {
                  key: k.type === "divider" ? `divider-${w}-${T}` : `action-${k.label}-${w}-${T}`
                }, [
                  k.type === "divider" ? (l(), f("div", cf)) : (l(), f("div", df, [
                    m("a", {
                      class: Z(["fu-dropdown__item", { "fu-dropdown__item--disabled": k.disabled }]),
                      onClick: (M) => !k.disabled && d(k)
                    }, [
                      k.icon ? (l(), X(ge(k.icon), {
                        key: 0,
                        class: "fu-dropdown__icon"
                      })) : A("", !0),
                      ce(" " + _(k.label), 1)
                    ], 10, ff)
                  ]))
                ], 64))), 128)),
                w !== t.groups.length - 1 ? (l(), f("div", mf)) : A("", !0)
              ]))), 128)) : (l(!0), f(j, { key: 2 }, re(t.actions, (C, w) => (l(), f(j, {
                key: C.type === "divider" ? `divider-${w}` : `action-${C.label}-${w}`
              }, [
                C.type === "divider" ? (l(), f("div", hf)) : (l(), f("div", vf, [
                  m("a", {
                    class: Z(["fu-dropdown__item", { "fu-dropdown__item--disabled": C.disabled }]),
                    onClick: (k) => !C.disabled && d(C)
                  }, [
                    C.icon ? (l(), X(ge(C.icon), {
                      key: 0,
                      class: "fu-dropdown__icon"
                    })) : A("", !0),
                    ce(" " + _(C.label), 1)
                  ], 10, pf)
                ]))
              ], 64))), 128))
            ], 6)) : A("", !0)
          ]),
          _: 3
        })
      ]))
    ], 512));
  }
}), Rn = /* @__PURE__ */ ae(gf, [["__scopeId", "data-v-2b0079db"]]), yf = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Rn
}, Symbol.toStringTag, { value: "Module" })), bf = {
  key: 0,
  class: "efw-read"
}, Cf = {
  key: 1,
  class: "efw-edit"
}, wf = { class: "efw-footer" }, Af = { class: "efw-read" }, _f = { class: "efw-footer" }, kf = /* @__PURE__ */ le({
  __name: "EditableFieldWrapper",
  props: {
    modelValue: { default: () => ({}) },
    mode: { default: "inline" },
    teleportTo: { default: "body" },
    align: { default: "right" },
    disableOutsideClose: { type: Boolean, default: !1 }
  },
  setup(t, { expose: e }) {
    const n = t, a = N(!1), i = N(null), r = vr({ top: 0, left: 0 }), o = N(null), s = N(null);
    function u(y) {
      if (y === null || typeof y != "object") return y;
      const g = Is(y);
      return Array.isArray(g) ? [...g] : g.constructor === Object ? { ...g } : g;
    }
    function c() {
      document.dispatchEvent(new CustomEvent("close-all-editors")), i.value = u(n.modelValue), a.value = !0;
    }
    function d(y) {
      if (a.value) {
        h();
        return;
      }
      document.dispatchEvent(new CustomEvent("close-all-editors")), i.value = u(n.modelValue), we(() => {
        a.value = !0, we(() => {
          const g = y?.currentTarget;
          if (!g || !s.value) return;
          const b = g.getBoundingClientRect(), C = s.value.offsetWidth;
          r.top = b.bottom + 6 + window.scrollY, n.align === "left" ? r.left = b.left + window.scrollX : n.align === "center" ? r.left = b.left + b.width / 2 - C / 2 + window.scrollX : r.left = b.right - C + window.scrollX;
        });
      });
    }
    function h() {
      a.value = !1;
    }
    function p() {
      a.value && h();
    }
    function v(y) {
      if (!a.value || n.disableOutsideClose) return;
      const g = y.target;
      g.closest(
        ".fu-status-dropdown, .fu-status-dropdown__menu, .fu-autocomplete-dropdown, .fu-select-dropdown, .fu-datepicker-dropdown"
      ) || (n.mode === "inline" ? o.value && !o.value.contains(g) && h() : s.value && !s.value.contains(g) && h());
    }
    return _e(() => {
      document.addEventListener("close-all-editors", p), document.addEventListener("ew-close", h), document.addEventListener("pointerdown", v), window.addEventListener("resize", h);
    }), Ae(() => {
      document.removeEventListener("close-all-editors", p), document.removeEventListener("ew-close", h), document.removeEventListener("pointerdown", v), window.removeEventListener("resize", h);
    }), e({
      startEditing: c,
      openTeleport: d,
      closeEditor: h
    }), (y, g) => t.mode === "inline" ? (l(), f("div", {
      key: 0,
      class: "efw-wrapper",
      ref_key: "inlineRef",
      ref: o
    }, [
      a.value ? (l(), f("div", Cf, [
        se(y.$slots, "edit", { model: i.value }, void 0, !0),
        m("div", wf, [
          se(y.$slots, "actions", {}, void 0, !0)
        ])
      ])) : (l(), f("div", bf, [
        se(y.$slots, "read", {}, void 0, !0)
      ]))
    ], 512)) : (l(), f(j, { key: 1 }, [
      m("div", Af, [
        se(y.$slots, "read", {}, void 0, !0)
      ]),
      (l(), X(De, { to: t.teleportTo }, [
        a.value ? (l(), f("div", {
          key: 0,
          class: "efw-teleport-card",
          ref_key: "teleportRef",
          ref: s,
          style: ne({ top: r.top + "px", left: r.left + "px" })
        }, [
          se(y.$slots, "edit", { model: i.value }, void 0, !0),
          m("div", _f, [
            se(y.$slots, "actions", {}, void 0, !0)
          ])
        ], 4)) : A("", !0)
      ], 8, ["to"]))
    ], 64));
  }
}), Sf = /* @__PURE__ */ ae(kf, [["__scopeId", "data-v-90094e16"]]), Tf = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Sf
}, Symbol.toStringTag, { value: "Module" })), Ef = {
  components: {
    text: Je(() => Promise.resolve().then(() => _s)),
    image: Je(() => Promise.resolve().then(() => Ir)),
    video: Je(() => Promise.resolve().then(() => ks)),
    divider: Je(() => Promise.resolve().then(() => Nr)),
    service: Je(() => Promise.resolve().then(() => As)),
    question: Je(() => Promise.resolve().then(() => Fr)),
    scheduler: Je(() => Promise.resolve().then(() => Cs)),
    invoice: Je(() => Promise.resolve().then(() => Or)),
    contract: Je(() => Promise.resolve().then(() => Mr))
  },
  resolve(t) {
    const e = this.components[t];
    return e || (console.warn(`⚠️ Widget type "${t}" not registered.`), null);
  }
}, si = 24, Mf = /* @__PURE__ */ le({
  __name: "BlockRenderer",
  props: {
    block: {},
    theme: {}
  },
  emits: ["action"],
  setup(t, { emit: e }) {
    const n = t, a = e;
    function i(c) {
      return {
        action: (d) => a("action", d),
        update: (d) => a("action", { widgetId: c, type: "update", payload: d }),
        "date-select": (d) => a("action", { widgetId: c, type: "date-select", payload: d }),
        "month-change": (d) => a("action", { widgetId: c, type: "month-change", payload: d })
      };
    }
    function r(c) {
      if (c >= 100) return { width: "100%" };
      const d = si * (n.block.columns.length - 1) / n.block.columns.length;
      return {
        width: `calc(${c}% - ${d}px)`
      };
    }
    const o = O(() => ({
      maxWidth: {
        sm: "560px",
        md: "816px",
        lg: "1024px",
        full: "100%"
      }[n.block.contentWidth ?? "md"],
      margin: "0 auto",
      width: "100%"
    })), s = O(() => ({
      paddingTop: `${n.block.paddingTop ?? 60}px`,
      paddingBottom: `${n.block.paddingBottom ?? 60}px`,
      backgroundColor: n.block.backgroundColor || "transparent",
      opacity: n.block.backgroundOpacity !== void 0 ? n.block.backgroundOpacity / 100 : 1
    })), u = O(() => ({
      display: "flex",
      flexWrap: "wrap",
      gap: `${si}px`,
      width: "100%",
      alignItems: "stretch"
    }));
    return (c, d) => (l(), f("div", {
      class: "block-content",
      style: ne(s.value)
    }, [
      m("div", {
        class: "inner",
        style: ne(o.value)
      }, [
        m("div", {
          class: "columns",
          style: ne(u.value)
        }, [
          (l(!0), f(j, null, re(t.block.columns, (h, p) => (l(), f("div", {
            key: p,
            class: "column",
            style: ne(r(h.width))
          }, [
            (l(!0), f(j, null, re(h.widgets, (v) => (l(), X(ge(oe(Ef).resolve(v.type)), xt({
              key: v.id
            }, { ref_for: !0 }, v.props, {
              widget: v,
              widgetId: v.id,
              theme: t.theme
            }, Os(i(v.id))), null, 16, ["widget", "widgetId", "theme"]))), 128))
          ], 4))), 128))
        ], 4)
      ], 4)
    ], 4));
  }
}), Ma = /* @__PURE__ */ ae(Mf, [["__scopeId", "data-v-4b86c425"]]), Nf = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Ma
}, Symbol.toStringTag, { value: "Module" })), Df = { class: "fu-signature-wrapper" }, If = {
  __name: "FuSignaturePad",
  props: {
    image: { type: String, default: null },
    // v-model:image
    color: { type: String, default: "#111827" },
    lineWidth: { type: Number, default: 2.5 }
  },
  emits: ["update:image"],
  setup(t, { emit: e }) {
    const n = t, a = e, i = N(null), r = N(null), o = N(!1);
    _e(() => {
      const y = i.value;
      if (r.value = y.getContext("2d"), s(), window.addEventListener("resize", s), n.image) {
        const g = new Image();
        g.onload = () => r.value.drawImage(g, 0, 0), g.src = n.image;
      }
    }), Ae(() => {
      window.removeEventListener("resize", s);
    });
    const s = () => {
      const y = i.value, g = y.getBoundingClientRect(), b = window.devicePixelRatio || 1;
      y.width = g.width * b, y.height = g.height * b, r.value.setTransform(1, 0, 0, 1, 0, 0), r.value.scale(b, b), r.value.strokeStyle = n.color, r.value.lineWidth = n.lineWidth, r.value.lineCap = "round", r.value.lineJoin = "round";
    }, u = (y) => {
      const g = i.value.getBoundingClientRect(), b = y.clientX || y.touches && y.touches[0].clientX, C = y.clientY || y.touches && y.touches[0].clientY;
      return {
        x: b - g.left,
        y: C - g.top
      };
    }, c = (y) => {
      o.value = !0;
      const { x: g, y: b } = u(y);
      r.value.beginPath(), r.value.moveTo(g, b);
    }, d = (y) => {
      if (!o.value) return;
      const { x: g, y: b } = u(y);
      r.value.lineTo(g, b), r.value.stroke();
    }, h = () => {
      o.value && (o.value = !1, v());
    }, p = () => {
      const y = i.value;
      r.value.clearRect(0, 0, y.width, y.height), a("update:image", null);
    }, v = () => {
      const y = i.value.toDataURL("image/png");
      a("update:image", y);
    };
    return (y, g) => (l(), f("div", Df, [
      m("canvas", {
        ref_key: "canvas",
        ref: i,
        onMousedown: c,
        onMousemove: d,
        onMouseup: h,
        onTouchstart: ue(c, ["prevent"]),
        onTouchmove: ue(d, ["prevent"]),
        onTouchend: ue(h, ["prevent"])
      }, null, 544),
      m("div", { class: "fu-signature-controls" }, [
        m("button", {
          type: "button",
          onClick: p,
          class: "fu-clear-btn"
        }, "Clear Canvas")
      ])
    ]));
  }
}, Er = /* @__PURE__ */ ae(If, [["__scopeId", "data-v-9055b31b"]]), Of = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Er
}, Symbol.toStringTag, { value: "Module" })), Rf = { class: "fcv-wrap" }, xf = { class: "fcv-a4" }, $f = ["innerHTML"], Pf = { class: "fcv-sigs" }, Ff = { class: "fcv-sigs__grid" }, Bf = ["src"], zf = { class: "fcv-sig__footer" }, Lf = { class: "fcv-sig__footer-left" }, Hf = { class: "fcv-sig__name" }, Vf = {
  key: 0,
  class: "fcv-sig__role"
}, jf = {
  key: 1,
  class: "fcv-sig__company"
}, Uf = { class: "fcv-sig__footer-right" }, Wf = { class: "fcv-sig__date" }, Yf = ["onClick"], Gf = {
  key: 1,
  class: "fcv-sigpad"
}, Kf = { class: "fcv-sigpad__tabs" }, qf = {
  key: 0,
  class: "fcv-sigpad__type-panel"
}, Qf = { class: "fcv-sigpad__type-preview" }, Zf = { class: "fcv-sigpad__cursive" }, Jf = { class: "fcv-sigpad__font-row" }, Xf = ["onClick"], em = {
  key: 1,
  class: "fcv-sigpad__draw-panel"
}, tm = { class: "fcv-sigpad__details" }, nm = { class: "fcv-sigpad__actions" }, am = ["disabled", "onClick"], im = {
  __name: "FuContractRenderer",
  props: {
    widgetId: { type: [String, Number], default: null },
    content: { type: String, default: "" },
    signatures: { type: Array, default: () => [] }
  },
  emits: ["update"],
  setup(t, { emit: e }) {
    Rs((k) => ({
      v80ff0bba: c.value
    }));
    const n = O(() => {
      if (!a.content) return "";
      const T = new DOMParser().parseFromString(a.content, "text/html");
      return T.querySelectorAll("span[fieldtype='smart']").forEach((M) => {
        const x = M.getAttribute("content") || "";
        M.replaceWith(x);
      }), T.body.innerHTML;
    }), a = t, i = e, r = N(JSON.parse(JSON.stringify(a.signatures))), o = N(null), s = N("type"), u = N(""), c = N("'Caveat', cursive"), d = N(null), h = N({ signerName: "", signerRole: "", signerCompany: "" }), p = [
      { label: "Caveat", value: "'Caveat', cursive" },
      { label: "Dancing", value: "'Dancing Script', cursive" },
      { label: "Pacifico", value: "'Pacifico', cursive" },
      { label: "Satisfy", value: "'Satisfy', cursive" }
    ], v = O(() => h.value.signerName.trim() ? s.value === "type" ? !!u.value.trim() : !!d.value : !1);
    function y(k) {
      o.value = k, s.value = "type", d.value = null, u.value = "";
    }
    function g() {
      o.value = null;
    }
    function b(k) {
      return !!k.signedOn && !!k.signatureData;
    }
    function C(k, T) {
      let M = null, x = s.value;
      if (s.value === "type") {
        const K = `<svg xmlns="http://www.w3.org/2000/svg" width="320" height="80" viewBox="0 0 320 80">
      <text x="160" y="54" text-anchor="middle" font-family="${c.value}" font-size="38" fill="#111827">${u.value}</text>
    </svg>`;
        M = "data:image/svg+xml;base64," + btoa(unescape(encodeURIComponent(K)));
      } else
        M = d.value;
      const L = {
        ...k,
        ...h.value,
        signatureType: x,
        signatureData: M,
        signedOn: (/* @__PURE__ */ new Date()).toISOString()
      };
      r.value[T] = L, o.value = null, i("update", {
        widgetId: a.widgetId,
        signatures: JSON.parse(JSON.stringify(r.value)),
        updatedSig: L,
        sigIndex: T
      });
    }
    function w(k) {
      return k ? new Date(k).toLocaleString("en-GB", {
        day: "numeric",
        month: "short",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        hour12: !1
      }) : "";
    }
    return (k, T) => (l(), f("div", Rf, [
      m("div", xf, [
        m("div", {
          class: "fcv-body",
          innerHTML: n.value
        }, null, 8, $f),
        m("div", Pf, [
          T[10] || (T[10] = m("div", { class: "fcv-sigs__label" }, "Signatures", -1)),
          T[11] || (T[11] = m("div", { class: "fcv-sigs__rule" }, null, -1)),
          m("div", Ff, [
            (l(!0), f(j, null, re(r.value, (M, x) => (l(), f("div", {
              key: M.id,
              class: Z(["fcv-sig", {
                "fcv-sig--signed": b(M),
                "fcv-sig--required": M.required && !b(M),
                "fcv-sig--active": o.value === M.id && !b(M),
                "fcv-sig--invalidated": !!M.invalidatedOn
              }])
            }, [
              b(M) ? (l(), f(j, { key: 0 }, [
                m("div", {
                  class: Z(["fcv-sig__box fcv-sig__box--done", { "fcv-sig__box--void": M.invalidatedOn }])
                }, [
                  M.signatureData ? (l(), f("img", {
                    key: 0,
                    src: M.signatureData,
                    class: "fcv-sig__img",
                    alt: "Signature"
                  }, null, 8, Bf)) : A("", !0)
                ], 2),
                m("div", zf, [
                  m("div", Lf, [
                    m("span", Hf, _(M.signerName || "—"), 1),
                    M.signerRole ? (l(), f("span", Vf, _(M.signerRole), 1)) : A("", !0),
                    M.signerCompany ? (l(), f("span", jf, _(M.signerCompany), 1)) : A("", !0)
                  ]),
                  m("div", Uf, [
                    T[8] || (T[8] = m("span", { class: "fcv-sig__badge fcv-sig__badge--signed" }, "✓ Signed", -1)),
                    m("span", Wf, _(w(M.signedOn)), 1)
                  ])
                ])
              ], 64)) : (l(), f(j, { key: 1 }, [
                o.value !== M.id ? (l(), f("div", {
                  key: 0,
                  class: "fcv-sig__box fcv-sig__box--unsigned",
                  onClick: (L) => y(M.id)
                }, [...T[9] || (T[9] = [
                  m("svg", {
                    class: "fcv-sig__pen",
                    width: "20",
                    height: "20",
                    viewBox: "0 0 24 24",
                    fill: "none",
                    stroke: "currentColor",
                    "stroke-width": "1.5"
                  }, [
                    m("path", { d: "M12 20h9" }),
                    m("path", { d: "M16.5 3.5a2.121 2.121 0 013 3L7 19l-4 1 1-4L16.5 3.5z" })
                  ], -1),
                  m("span", { class: "fcv-sig__prompt" }, "Click to sign", -1)
                ])], 8, Yf)) : (l(), f("div", Gf, [
                  m("div", Kf, [
                    m("button", {
                      class: Z(["fcv-sigpad__tab", { "fcv-sigpad__tab--active": s.value === "type" }]),
                      onClick: T[0] || (T[0] = (L) => s.value = "type")
                    }, " Type name ", 2),
                    m("button", {
                      class: Z(["fcv-sigpad__tab", { "fcv-sigpad__tab--active": s.value === "draw" }]),
                      onClick: T[1] || (T[1] = (L) => s.value = "draw")
                    }, " Draw ", 2)
                  ]),
                  s.value === "type" ? (l(), f("div", qf, [
                    Ve(m("input", {
                      "onUpdate:modelValue": T[2] || (T[2] = (L) => u.value = L),
                      class: "fcv-sigpad__name-input",
                      placeholder: "Your full name",
                      onInput: T[3] || (T[3] = (L) => h.value.signerName = u.value)
                    }, null, 544), [
                      [Xe, u.value]
                    ]),
                    m("div", Qf, [
                      m("span", Zf, _(u.value || "Your Signature"), 1)
                    ]),
                    m("div", Jf, [
                      (l(), f(j, null, re(p, (L) => m("button", {
                        key: L.value,
                        class: "fcv-sigpad__font-btn",
                        style: ne({ fontFamily: L.value }),
                        onClick: (K) => c.value = L.value
                      }, " Aa ", 12, Xf)), 64))
                    ])
                  ])) : A("", !0),
                  s.value === "draw" ? (l(), f("div", em, [
                    J(Er, {
                      image: d.value,
                      "onUpdate:image": T[4] || (T[4] = (L) => d.value = L),
                      class: "fcv-sigpad__canvas-wrap"
                    }, null, 8, ["image"])
                  ])) : A("", !0),
                  m("div", tm, [
                    Ve(m("input", {
                      "onUpdate:modelValue": T[5] || (T[5] = (L) => h.value.signerName = L),
                      class: "fcv-sigpad__field",
                      placeholder: "Full name *"
                    }, null, 512), [
                      [Xe, h.value.signerName]
                    ]),
                    Ve(m("input", {
                      "onUpdate:modelValue": T[6] || (T[6] = (L) => h.value.signerRole = L),
                      class: "fcv-sigpad__field",
                      placeholder: "Role / title"
                    }, null, 512), [
                      [Xe, h.value.signerRole]
                    ]),
                    Ve(m("input", {
                      "onUpdate:modelValue": T[7] || (T[7] = (L) => h.value.signerCompany = L),
                      class: "fcv-sigpad__field",
                      placeholder: "Company"
                    }, null, 512), [
                      [Xe, h.value.signerCompany]
                    ])
                  ]),
                  m("div", nm, [
                    m("button", {
                      class: "fcv-sigpad__cancel",
                      onClick: g
                    }, "Cancel"),
                    m("button", {
                      class: "fcv-sigpad__submit",
                      disabled: !v.value,
                      onClick: (L) => C(M, x)
                    }, " Sign document ", 8, am)
                  ])
                ]))
              ], 64))
            ], 2))), 128))
          ])
        ])
      ])
    ]));
  }
}, rm = /* @__PURE__ */ ae(im, [["__scopeId", "data-v-dcf50def"]]), Mr = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: rm
}, Symbol.toStringTag, { value: "Module" })), om = {
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
      styleType: r,
      alignment: o,
      marginTop: s,
      marginBottom: u
    } = e.widget, c = O(() => {
      let d = "center";
      return o === "left" ? d = "flex-start" : o === "right" && (d = "flex-end"), {
        display: "flex",
        justifyContent: d,
        width: "100%",
        marginTop: s + "px",
        marginBottom: u + "px",
        "--divider-color": n || "#CBD5E1",
        "--divider-thickness": a + "px" || "1px",
        "--divider-style": r || "solid"
      };
    });
    return (d, h) => (l(), f("div", {
      class: "divider-widget",
      style: ne(c.value)
    }, null, 4));
  }
}, sm = /* @__PURE__ */ ae(om, [["__scopeId", "data-v-51711f98"]]), Nr = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: sm
}, Symbol.toStringTag, { value: "Module" })), Dr = /* @__PURE__ */ le({
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
    return (i, r) => (l(), f("section", {
      class: "page-renderer",
      style: ne(a.value)
    }, [
      (l(!0), f(j, null, re(t.page.blocks, (o) => (l(), X(Ma, {
        key: o.id,
        block: o,
        theme: t.theme,
        onAction: r[0] || (r[0] = (s) => i.$emit("action", s))
      }, null, 8, ["block", "theme"]))), 128))
    ], 4));
  }
}), lm = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Dr
}, Symbol.toStringTag, { value: "Module" })), um = { class: "document-root" }, cm = /* @__PURE__ */ le({
  __name: "FuDocumentRenderer",
  props: {
    document: {}
  },
  emits: ["action"],
  setup(t) {
    return (e, n) => (l(), f("div", um, [
      (l(!0), f(j, null, re(t.document.pages, (a) => (l(), X(Dr, {
        key: a.id,
        page: a,
        theme: t.document.meta?.theme,
        onAction: n[0] || (n[0] = (i) => e.$emit("action", i))
      }, null, 8, ["page", "theme"]))), 128))
    ]));
  }
}), dm = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: cm
}, Symbol.toStringTag, { value: "Module" })), fm = {
  key: 0,
  class: "fu-empty-state"
}, mm = ["src", "alt"], hm = /* @__PURE__ */ le({
  __name: "ImageRenderer",
  props: {
    widget: {}
  },
  setup(t) {
    const e = t, n = O(() => e.widget?.props ?? {}), a = O(() => n.value.src ?? ""), i = O(() => n.value.alt ?? "Image"), r = O(() => n.value.alignment ?? "center"), o = O(() => n.value.imageWidth), s = O(() => n.value.opacity ?? 100), u = O(() => n.value.borderRadius ?? 8), c = O(() => `is-${r.value}`), d = O(() => ({
      width: "100%",
      display: "flex",
      justifyContent: r.value === "left" ? "flex-start" : r.value === "right" ? "flex-end" : "center"
    })), h = O(() => ({
      width: r.value === "stretch" ? "100%" : o.value ? `${o.value}px` : "auto",
      maxWidth: "100%"
    })), p = O(() => ({
      width: "100%",
      height: "auto",
      display: "block",
      opacity: s.value / 100,
      borderRadius: `${u.value}px`
    }));
    return (v, y) => (l(), f("div", {
      class: Z(["fu-image-widget", c.value]),
      style: ne(d.value)
    }, [
      a.value ? (l(), f("div", {
        key: 1,
        class: "fu-image-container",
        style: ne(h.value)
      }, [
        m("img", {
          src: a.value,
          alt: i.value,
          class: "fu-image",
          style: ne(p.value),
          draggable: "false"
        }, null, 12, mm)
      ], 4)) : (l(), f("div", fm, [
        J(oe(Qs), { size: 32 }),
        y[0] || (y[0] = m("span", null, "Image", -1))
      ]))
    ], 6));
  }
}), vm = /* @__PURE__ */ ae(hm, [["__scopeId", "data-v-fae8ea9f"]]), Ir = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: vm
}, Symbol.toStringTag, { value: "Module" })), pm = { class: "fip-wrap" }, gm = { class: "fip-header-inner" }, ym = { class: "fip-header-left" }, bm = {
  key: 0,
  class: "fip-logo-wrap"
}, Cm = ["src"], wm = {
  key: 1,
  class: "fip-from"
}, Am = { class: "fip-from-name" }, _m = {
  key: 0,
  class: "fip-from-detail"
}, km = {
  key: 1,
  class: "fip-from-detail"
}, Sm = {
  key: 2,
  class: "fip-from-detail"
}, Tm = { class: "fip-header-right" }, Em = {
  key: 0,
  class: "fip-title"
}, Mm = { class: "fip-meta-grid" }, Nm = { class: "fip-meta-val" }, Dm = { class: "fip-meta-val" }, Im = { class: "fip-meta-val" }, Om = { class: "fip-meta-val" }, Rm = {
  key: 0,
  class: "fip-bill-to"
}, xm = { class: "fip-billto-name" }, $m = {
  key: 0,
  class: "fip-client-detail"
}, Pm = {
  key: 1,
  class: "fip-client-detail"
}, Fm = {
  key: 2,
  class: "fip-client-detail"
}, Bm = { class: "fip-header fip-header--minimal" }, zm = { class: "fip-header-inner fip-header-inner--minimal" }, Lm = { class: "fip-header-left" }, Hm = {
  key: 0,
  class: "fip-from"
}, Vm = { class: "fip-from-name fip-from-name--minimal" }, jm = {
  key: 0,
  class: "fip-from-detail"
}, Um = {
  key: 1,
  class: "fip-from-detail"
}, Wm = { class: "fip-header-right" }, Ym = {
  key: 0,
  class: "fip-title fip-title--minimal"
}, Gm = { class: "fip-meta-grid fip-meta-grid--minimal" }, Km = { class: "fip-meta-val" }, qm = { class: "fip-meta-val" }, Qm = { class: "fip-meta-val" }, Zm = {
  key: 0,
  class: "fip-bill-to fip-bill-to--minimal"
}, Jm = { class: "fip-billto-name" }, Xm = {
  key: 0,
  class: "fip-client-detail"
}, eh = {
  key: 1,
  class: "fip-client-detail"
}, th = {
  key: 2,
  class: "fip-client-detail"
}, nh = { class: "fip-modern-band-left" }, ah = ["src"], ih = {
  key: 1,
  class: "fip-from fip-from--modern"
}, rh = { class: "fip-from-name" }, oh = {
  key: 0,
  class: "fip-from-detail"
}, sh = {
  key: 1,
  class: "fip-from-detail"
}, lh = { class: "fip-modern-band-right" }, uh = {
  key: 0,
  class: "fip-title fip-title--modern"
}, ch = { class: "fip-meta-grid" }, dh = { class: "fip-meta-val fip-meta-val--modern" }, fh = { class: "fip-meta-val fip-meta-val--modern" }, mh = { class: "fip-meta-val fip-meta-val--modern" }, hh = { class: "fip-meta-val fip-meta-val--modern" }, vh = {
  key: 0,
  class: "fip-bill-to fip-bill-to--modern"
}, ph = { class: "fip-billto-name" }, gh = {
  key: 0,
  class: "fip-client-detail"
}, yh = {
  key: 1,
  class: "fip-client-detail"
}, bh = {
  key: 2,
  class: "fip-client-detail"
}, Ch = { class: "fip-header-inner fip-header-inner--detailed" }, wh = { class: "fip-header-left fip-header-left--detailed" }, Ah = ["src"], _h = {
  key: 1,
  class: "fip-from fip-from--detailed"
}, kh = { class: "fip-from-name fip-from-name--detailed" }, Sh = {
  key: 0,
  class: "fip-from-detail"
}, Th = {
  key: 1,
  class: "fip-from-detail"
}, Eh = {
  key: 2,
  class: "fip-from-detail"
}, Mh = { class: "fip-header-right fip-header-right--detailed" }, Nh = {
  key: 0,
  class: "fip-title fip-title--detailed"
}, Dh = { class: "fip-detail-table" }, Ih = { key: 0 }, Oh = { class: "fip-dt-val" }, Rh = { key: 1 }, xh = { class: "fip-dt-val" }, $h = { key: 2 }, Ph = { class: "fip-dt-val" }, Fh = { key: 3 }, Bh = { class: "fip-dt-val" }, zh = {
  key: 0,
  class: "fip-bill-to fip-bill-to--detailed"
}, Lh = { class: "fip-billto-name" }, Hh = {
  key: 0,
  class: "fip-client-detail"
}, Vh = {
  key: 1,
  class: "fip-client-detail"
}, jh = {
  key: 2,
  class: "fip-client-detail"
}, Uh = { class: "fip-col-headers" }, Wh = {
  key: 0,
  class: "fip-col-qty"
}, Yh = {
  key: 1,
  class: "fip-col-unit"
}, Gh = {
  key: 2,
  class: "fip-col-price"
}, Kh = {
  key: 3,
  class: "fip-col-tax"
}, qh = { class: "fip-row fip-row--main" }, Qh = { class: "fip-col-name fip-name-cell" }, Zh = ["src"], Jh = { class: "fip-name-text" }, Xh = { class: "fip-svc-name" }, ev = {
  key: 0,
  class: "fip-svc-desc"
}, tv = {
  key: 0,
  class: "fip-col-qty fip-num"
}, nv = {
  key: 1,
  class: "fip-col-unit fip-unit"
}, av = {
  key: 2,
  class: "fip-col-price fip-num"
}, iv = {
  key: 3,
  class: "fip-col-tax"
}, rv = { class: "fip-col-total fip-row-total" }, ov = {
  key: 0,
  class: "fip-tax-hint"
}, sv = { class: "fip-col-name fip-name-cell fip-name-cell--sub" }, lv = { class: "fip-svc-name fip-svc-name--sub" }, uv = {
  key: 0,
  class: "fip-col-qty fip-num"
}, cv = {
  key: 1,
  class: "fip-col-unit fip-unit"
}, dv = {
  key: 2,
  class: "fip-col-price fip-num"
}, fv = {
  key: 3,
  class: "fip-col-tax"
}, mv = { class: "fip-col-total fip-row-total" }, hv = {
  key: 0,
  class: "fip-tax-hint"
}, vv = { class: "fip-summary" }, pv = { class: "fip-sum-row" }, gv = { class: "fip-sum-val" }, yv = { class: "fip-sum-row" }, bv = { class: "fip-sum-key" }, Cv = { class: "fip-sum-val fip-sum-val--discount" }, wv = { class: "fip-sum-row" }, Av = { class: "fip-sum-key" }, _v = { class: "fip-sum-val" }, kv = { class: "fip-sum-key" }, Sv = { class: "fip-sum-val" }, Tv = {
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
      const C = e.footer?.currency || "GBP";
      return C === "USD" ? "$" : C === "EUR" ? "€" : "£";
    });
    function i(C) {
      return `${a.value}${(C || 0).toLocaleString("en-GB", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
      })}`;
    }
    function r(C) {
      return (C.qty || 0) * (C.price || 0);
    }
    const o = O(
      () => (e.serviceBlocks || []).reduce((C, w) => (C += r(w), (w.subItems || []).forEach((k) => C += r(k)), C), 0)
    ), s = O(
      () => (e.serviceBlocks || []).reduce((C, w) => (w.taxable && (C += r(w)), (w.subItems || []).forEach((k) => {
        k.taxable && (C += r(k));
      }), C), 0)
    ), u = O(() => {
      const C = e.footer?.taxes;
      return Array.isArray(C) && C.length ? C[0] : { label: "Tax", rate: 0 };
    }), c = O(
      () => (e.footer?.discounts || []).reduce(
        (C, w) => C + o.value * (w.percent || 0) / 100,
        0
      )
    ), d = O(
      () => s.value * (u.value.rate || 0) / 100
    ), h = O(() => o.value - c.value + d.value), p = O(() => {
      const C = {};
      return e.header?.bgColor && (C.backgroundColor = e.header.bgColor), e.header?.borderColor && (C.borderBottomColor = e.header.borderColor), C;
    }), v = O(
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
    return (C, w) => (l(), f("div", pm, [
      m("div", {
        class: Z(["fip-a4", `fip-a4--${t.variant}`])
      }, [
        t.variant === "classic" ? (l(), f(j, { key: 0 }, [
          m("div", {
            class: "fip-header fip-header--classic",
            style: ne(p.value)
          }, [
            m("div", gm, [
              m("div", ym, [
                t.header.showLogo && t.header.logoUrl ? (l(), f("div", bm, [
                  m("img", {
                    src: t.header.logoUrl,
                    class: "fip-logo",
                    alt: "Logo"
                  }, null, 8, Cm)
                ])) : A("", !0),
                t.header.showCompany ? (l(), f("div", wm, [
                  m("p", Am, _(t.header.companyName || ""), 1),
                  t.header.companyEmail ? (l(), f("p", _m, _(t.header.companyEmail), 1)) : A("", !0),
                  t.header.companyPhone ? (l(), f("p", km, _(t.header.companyPhone), 1)) : A("", !0),
                  t.header.companyAddress ? (l(), f("p", Sm, _(t.header.companyAddress), 1)) : A("", !0)
                ])) : A("", !0)
              ]),
              m("div", Tm, [
                t.header.showTitle ? (l(), f("h1", Em, _(t.header.invoiceTitle || "INVOICE"), 1)) : A("", !0),
                m("div", Mm, [
                  t.header.showInvoiceNumber ? (l(), f(j, { key: 0 }, [
                    w[0] || (w[0] = m("span", { class: "fip-meta-key" }, "Invoice #", -1)),
                    m("span", Nm, _(t.header.invoiceNumber || "INV-001"), 1)
                  ], 64)) : A("", !0),
                  t.header.showDate ? (l(), f(j, { key: 1 }, [
                    w[1] || (w[1] = m("span", { class: "fip-meta-key" }, "Date", -1)),
                    m("span", Dm, _(t.header.invoiceDate || oe(n)), 1)
                  ], 64)) : A("", !0),
                  t.header.showDueDate ? (l(), f(j, { key: 2 }, [
                    w[2] || (w[2] = m("span", { class: "fip-meta-key" }, "Due", -1)),
                    m("span", Im, _(t.header.dueDate || "—"), 1)
                  ], 64)) : A("", !0),
                  t.header.showPO ? (l(), f(j, { key: 3 }, [
                    w[3] || (w[3] = m("span", { class: "fip-meta-key" }, "PO #", -1)),
                    m("span", Om, _(t.header.poNumber || "—"), 1)
                  ], 64)) : A("", !0)
                ])
              ])
            ]),
            t.header.showBillTo ? (l(), f("div", Rm, [
              w[4] || (w[4] = m("p", { class: "fip-section-label" }, "Bill To", -1)),
              m("p", xm, _(t.header.clientName || "—"), 1),
              t.header.clientEmail ? (l(), f("p", $m, _(t.header.clientEmail), 1)) : A("", !0),
              t.header.clientPhone ? (l(), f("p", Pm, _(t.header.clientPhone), 1)) : A("", !0),
              t.header.clientAddress ? (l(), f("p", Fm, _(t.header.clientAddress), 1)) : A("", !0)
            ])) : A("", !0)
          ], 4),
          m("div", {
            class: "fip-divider fip-divider--classic",
            style: ne(v.value)
          }, null, 4)
        ], 64)) : t.variant === "minimal" ? (l(), f(j, { key: 1 }, [
          m("div", Bm, [
            m("div", zm, [
              m("div", Lm, [
                t.header.showCompany ? (l(), f("div", Hm, [
                  m("p", Vm, _(t.header.companyName || ""), 1),
                  t.header.companyEmail ? (l(), f("p", jm, _(t.header.companyEmail), 1)) : A("", !0),
                  t.header.companyPhone ? (l(), f("p", Um, _(t.header.companyPhone), 1)) : A("", !0)
                ])) : A("", !0)
              ]),
              m("div", Wm, [
                t.header.showTitle ? (l(), f("h1", Ym, _(t.header.invoiceTitle || "INVOICE"), 1)) : A("", !0),
                m("div", Gm, [
                  t.header.showInvoiceNumber ? (l(), f(j, { key: 0 }, [
                    w[5] || (w[5] = m("span", { class: "fip-meta-key" }, "#", -1)),
                    m("span", Km, _(t.header.invoiceNumber || "INV-001"), 1)
                  ], 64)) : A("", !0),
                  t.header.showDate ? (l(), f(j, { key: 1 }, [
                    w[6] || (w[6] = m("span", { class: "fip-meta-key" }, "Date", -1)),
                    m("span", qm, _(t.header.invoiceDate || oe(n)), 1)
                  ], 64)) : A("", !0),
                  t.header.showDueDate ? (l(), f(j, { key: 2 }, [
                    w[7] || (w[7] = m("span", { class: "fip-meta-key" }, "Due", -1)),
                    m("span", Qm, _(t.header.dueDate || "—"), 1)
                  ], 64)) : A("", !0)
                ])
              ])
            ]),
            t.header.showBillTo ? (l(), f("div", Zm, [
              m("p", Jm, _(t.header.clientName || "—"), 1),
              t.header.clientEmail ? (l(), f("p", Xm, _(t.header.clientEmail), 1)) : A("", !0),
              t.header.clientPhone ? (l(), f("p", eh, _(t.header.clientPhone), 1)) : A("", !0),
              t.header.clientAddress ? (l(), f("p", th, _(t.header.clientAddress), 1)) : A("", !0)
            ])) : A("", !0)
          ]),
          w[8] || (w[8] = m("div", { class: "fip-divider fip-divider--minimal" }, null, -1))
        ], 64)) : t.variant === "modern" ? (l(), f(j, { key: 2 }, [
          m("div", {
            class: "fip-modern-band",
            style: ne(y.value)
          }, [
            m("div", nh, [
              t.header.showLogo && t.header.logoUrl ? (l(), f("img", {
                key: 0,
                src: t.header.logoUrl,
                class: "fip-logo fip-logo--modern",
                alt: "Logo"
              }, null, 8, ah)) : A("", !0),
              t.header.showCompany ? (l(), f("div", ih, [
                m("p", rh, _(t.header.companyName || ""), 1),
                t.header.companyEmail ? (l(), f("p", oh, _(t.header.companyEmail), 1)) : A("", !0),
                t.header.companyPhone ? (l(), f("p", sh, _(t.header.companyPhone), 1)) : A("", !0)
              ])) : A("", !0)
            ]),
            m("div", lh, [
              t.header.showTitle ? (l(), f("h1", uh, _(t.header.invoiceTitle || "INVOICE"), 1)) : A("", !0),
              m("div", ch, [
                t.header.showInvoiceNumber ? (l(), f(j, { key: 0 }, [
                  w[9] || (w[9] = m("span", { class: "fip-meta-key fip-meta-key--modern" }, "Invoice #", -1)),
                  m("span", dh, _(t.header.invoiceNumber || "INV-001"), 1)
                ], 64)) : A("", !0),
                t.header.showDate ? (l(), f(j, { key: 1 }, [
                  w[10] || (w[10] = m("span", { class: "fip-meta-key fip-meta-key--modern" }, "Date", -1)),
                  m("span", fh, _(t.header.invoiceDate || oe(n)), 1)
                ], 64)) : A("", !0),
                t.header.showDueDate ? (l(), f(j, { key: 2 }, [
                  w[11] || (w[11] = m("span", { class: "fip-meta-key fip-meta-key--modern" }, "Due", -1)),
                  m("span", mh, _(t.header.dueDate || "—"), 1)
                ], 64)) : A("", !0),
                t.header.showPO ? (l(), f(j, { key: 3 }, [
                  w[12] || (w[12] = m("span", { class: "fip-meta-key fip-meta-key--modern" }, "PO #", -1)),
                  m("span", hh, _(t.header.poNumber || "—"), 1)
                ], 64)) : A("", !0)
              ])
            ])
          ], 4),
          w[14] || (w[14] = m("div", { class: "fip-modern-strip" }, null, -1)),
          t.header.showBillTo ? (l(), f("div", vh, [
            w[13] || (w[13] = m("p", { class: "fip-section-label" }, "Bill To", -1)),
            m("p", ph, _(t.header.clientName || "—"), 1),
            t.header.clientEmail ? (l(), f("p", gh, _(t.header.clientEmail), 1)) : A("", !0),
            t.header.clientPhone ? (l(), f("p", yh, _(t.header.clientPhone), 1)) : A("", !0),
            t.header.clientAddress ? (l(), f("p", bh, _(t.header.clientAddress), 1)) : A("", !0)
          ])) : A("", !0)
        ], 64)) : t.variant === "detailed" ? (l(), f(j, { key: 3 }, [
          m("div", {
            class: "fip-header fip-header--detailed",
            style: ne(p.value)
          }, [
            m("div", Ch, [
              m("div", wh, [
                t.header.showLogo && t.header.logoUrl ? (l(), f("img", {
                  key: 0,
                  src: t.header.logoUrl,
                  class: "fip-logo fip-logo--detailed",
                  alt: "Logo"
                }, null, 8, Ah)) : A("", !0),
                t.header.showCompany ? (l(), f("div", _h, [
                  m("p", kh, _(t.header.companyName || ""), 1),
                  t.header.companyEmail ? (l(), f("p", Sh, _(t.header.companyEmail), 1)) : A("", !0),
                  t.header.companyPhone ? (l(), f("p", Th, _(t.header.companyPhone), 1)) : A("", !0),
                  t.header.companyAddress ? (l(), f("p", Eh, _(t.header.companyAddress), 1)) : A("", !0)
                ])) : A("", !0)
              ]),
              m("div", Mh, [
                t.header.showTitle ? (l(), f("h1", Nh, _(t.header.invoiceTitle || "INVOICE"), 1)) : A("", !0),
                m("table", Dh, [
                  t.header.showInvoiceNumber ? (l(), f("tr", Ih, [
                    w[15] || (w[15] = m("td", { class: "fip-dt-key" }, "Invoice No.", -1)),
                    m("td", Oh, _(t.header.invoiceNumber || "INV-001"), 1)
                  ])) : A("", !0),
                  t.header.showDate ? (l(), f("tr", Rh, [
                    w[16] || (w[16] = m("td", { class: "fip-dt-key" }, "Date", -1)),
                    m("td", xh, _(t.header.invoiceDate || oe(n)), 1)
                  ])) : A("", !0),
                  t.header.showDueDate ? (l(), f("tr", $h, [
                    w[17] || (w[17] = m("td", { class: "fip-dt-key" }, "Payment Due", -1)),
                    m("td", Ph, _(t.header.dueDate || "—"), 1)
                  ])) : A("", !0),
                  t.header.showPO ? (l(), f("tr", Fh, [
                    w[18] || (w[18] = m("td", { class: "fip-dt-key" }, "PO Number", -1)),
                    m("td", Bh, _(t.header.poNumber || "—"), 1)
                  ])) : A("", !0)
                ])
              ])
            ]),
            t.header.showBillTo ? (l(), f("div", zh, [
              w[19] || (w[19] = m("p", { class: "fip-section-label" }, "Bill To", -1)),
              m("p", Lh, _(t.header.clientName || "—"), 1),
              t.header.clientEmail ? (l(), f("p", Hh, _(t.header.clientEmail), 1)) : A("", !0),
              t.header.clientPhone ? (l(), f("p", Vh, _(t.header.clientPhone), 1)) : A("", !0),
              t.header.clientAddress ? (l(), f("p", jh, _(t.header.clientAddress), 1)) : A("", !0)
            ])) : A("", !0)
          ], 4),
          w[20] || (w[20] = m("div", { class: "fip-divider fip-divider--detailed" }, null, -1))
        ], 64)) : A("", !0),
        m("div", {
          class: "fip-items",
          style: ne(b.value)
        }, [
          m("div", Uh, [
            w[21] || (w[21] = m("span", { class: "fip-col-name" }, "Service", -1)),
            t.showQty ? (l(), f("span", Wh, "Qty")) : A("", !0),
            t.showUnit ? (l(), f("span", Yh, "Unit")) : A("", !0),
            t.showPrice ? (l(), f("span", Gh, "Price")) : A("", !0),
            t.showTax ? (l(), f("span", Kh, "Tax")) : A("", !0),
            w[22] || (w[22] = m("span", { class: "fip-col-total" }, "Total", -1))
          ]),
          (l(!0), f(j, null, re(t.serviceBlocks, (k) => (l(), f(j, {
            key: k.id
          }, [
            m("div", qh, [
              m("div", Qh, [
                t.showServiceImages && k.imageUrl ? (l(), f("img", {
                  key: 0,
                  src: k.imageUrl,
                  class: "fip-svc-img",
                  alt: ""
                }, null, 8, Zh)) : A("", !0),
                m("div", Jh, [
                  m("span", Xh, _(k.name || "—"), 1),
                  k.description ? (l(), f("span", ev, _(k.description), 1)) : A("", !0)
                ])
              ]),
              t.showQty ? (l(), f("span", tv, _(k.qty ?? "—"), 1)) : A("", !0),
              t.showUnit ? (l(), f("span", nv, _(k.unit || "—"), 1)) : A("", !0),
              t.showPrice ? (l(), f("span", av, _(k.price != null ? i(k.price) : "—"), 1)) : A("", !0),
              t.showTax ? (l(), f("div", iv, [
                m("span", {
                  class: Z(["fip-tax-dot", { "fip-tax-dot--on": k.taxable }])
                }, null, 2)
              ])) : A("", !0),
              m("div", rv, [
                m("span", null, _(i(r(k))), 1),
                t.showTax && k.taxable && u.value.rate ? (l(), f("span", ov, " +" + _(i(r(k) * u.value.rate / 100)) + " tax ", 1)) : A("", !0)
              ])
            ]),
            (l(!0), f(j, null, re(k.subItems || [], (T) => (l(), f("div", {
              key: T.id,
              class: "fip-row fip-row--sub"
            }, [
              m("div", sv, [
                m("span", lv, _(T.name || "—"), 1)
              ]),
              t.showQty ? (l(), f("span", uv, _(T.qty ?? "—"), 1)) : A("", !0),
              t.showUnit ? (l(), f("span", cv, _(T.unit || "—"), 1)) : A("", !0),
              t.showPrice ? (l(), f("span", dv, _(T.price != null ? i(T.price) : "—"), 1)) : A("", !0),
              t.showTax ? (l(), f("div", fv, [
                m("span", {
                  class: Z(["fip-tax-dot", { "fip-tax-dot--on": T.taxable }])
                }, null, 2)
              ])) : A("", !0),
              m("div", mv, [
                m("span", null, _(i(r(T))), 1),
                t.showTax && T.taxable && u.value.rate ? (l(), f("span", hv, " +" + _(i(r(T) * u.value.rate / 100)) + " tax ", 1)) : A("", !0)
              ])
            ]))), 128)),
            w[23] || (w[23] = m("div", { class: "fip-block-rule" }, null, -1))
          ], 64))), 128))
        ], 4),
        m("div", {
          class: Z(["fip-summary-zone", `fip-summary-zone--${t.variant}`])
        }, [
          m("div", vv, [
            m("div", pv, [
              w[24] || (w[24] = m("span", { class: "fip-sum-key" }, "Subtotal", -1)),
              m("span", gv, _(i(o.value)), 1)
            ]),
            (l(!0), f(j, null, re(t.footer.discounts || [], (k, T) => (l(), f(j, {
              key: "d" + T
            }, [
              w[25] || (w[25] = m("div", { class: "fip-sum-rule--light" }, null, -1)),
              m("div", yv, [
                m("span", bv, _(k.label || "Discount") + " (" + _(k.percent || 0) + "%)", 1),
                m("span", Cv, "− " + _(i(o.value * k.percent / 100)), 1)
              ])
            ], 64))), 128)),
            w[26] || (w[26] = m("div", { class: "fip-sum-rule--light" }, null, -1)),
            m("div", wv, [
              m("span", Av, _(u.value.label || "Tax") + " (" + _(u.value.rate || 0) + "%)", 1),
              m("span", _v, _(i(d.value)), 1)
            ]),
            w[27] || (w[27] = m("div", { class: "fip-sum-rule--heavy" }, null, -1)),
            m("div", {
              class: "fip-sum-row fip-sum-row--total",
              style: ne(g.value)
            }, [
              m("span", kv, "Total (" + _(t.footer.currency || "GBP") + ")", 1),
              m("span", Sv, _(i(h.value)), 1)
            ], 4)
          ])
        ], 2)
      ], 2)
    ]));
  }
}, Ev = /* @__PURE__ */ ae(Tv, [["__scopeId", "data-v-47ff44b0"]]), Or = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Ev
}, Symbol.toStringTag, { value: "Module" })), Mv = { class: "fu-form-render__progress-track" }, Nv = { class: "fu-form-render__stage" }, Dv = {
  key: 0,
  class: "fu-form-render__ok-row"
}, Iv = { class: "fu-form-render__ok-hint" }, Ov = {
  key: 0,
  class: "fu-form-render__nav"
}, Rv = { class: "fu-form-render__nav-group" }, xv = /* @__PURE__ */ le({
  __name: "FormRender",
  props: {
    document: {}
  },
  emits: ["submit"],
  setup(t, { emit: e }) {
    const n = t, a = e, i = xs(), r = O(() => n.document?.meta?.theme || {}), o = O(() => ({
      "--brand-color": r.value.brandColor || "#4362FF",
      "--accent-color": r.value.accentColor || "#E0E7FF"
    })), s = O(() => typeof navigator > "u" ? "Ctrl" : /Mac|iPhone|iPad|iPod/.test(navigator.userAgent) ? "Cmd ⌘" : "Ctrl");
    function u(P) {
      return {
        backgroundColor: P.backgroundColor,
        backgroundOpacity: P.backgroundOpacity,
        backgroundImage: P.backgroundImage,
        contentWidth: P.contentWidth,
        paddingTop: P.paddingTop,
        paddingBottom: P.paddingBottom
      };
    }
    function c(P, B, I) {
      return { ...u(P), id: B, columns: [{ width: 100, widgets: I }] };
    }
    const d = O(() => {
      const P = {};
      for (const B of n.document?.pages ?? [])
        for (const I of B.blocks ?? [])
          for (const $ of I.columns ?? [])
            for (const W of $.widgets ?? [])
              W.type === "question" && (P[W.id] = W);
      return P;
    });
    function h(P) {
      const B = C.value[P], $ = d.value[P]?.props?.options?.find((W) => W.id === B);
      return $ ? $.text : B;
    }
    function p(P) {
      const B = h(P.sourceWidgetId);
      return P.operator === "equals" ? B === P.value : P.operator === "not_equals" ? B !== P.value : !0;
    }
    function v(P) {
      const B = P.props?.conditions || [];
      if (!B.length) return !0;
      const I = P.props?.conditionLogic || "all", $ = B.map(p);
      return I === "any" ? $.some(Boolean) : $.every(Boolean);
    }
    function y(P) {
      return (P.columns ?? []).flatMap((B) => B.widgets ?? []).filter((B) => B.type === "question");
    }
    const g = O(() => {
      const P = n.document?.pages ?? [], B = [];
      for (const I of P)
        for (const $ of I.blocks ?? []) {
          if (($.columns ?? []).length > 1) {
            B.push({ kind: "block", id: $.id, block: $ });
            continue;
          }
          const ee = $.columns?.[0]?.widgets ?? [], pe = ee.filter((ye) => ye.type === "question"), Se = ee.filter((ye) => ye.type !== "question");
          if (pe.length === 0) {
            Se.length && B.push({
              kind: "block",
              id: `${$.id}-content`,
              block: c($, `${$.id}-content`, Se)
            });
            continue;
          }
          Se.length && B.push({
            kind: "block",
            id: `${$.id}-content`,
            block: c($, `${$.id}-content`, Se)
          });
          for (const ye of pe)
            B.push({
              kind: "block",
              id: ye.id,
              block: c($, `${$.id}-${ye.id}`, [ye])
            });
        }
      return B;
    });
    function b(P) {
      return P.kind !== "block" ? [] : y(P.block).filter(v);
    }
    const C = N({}), w = O(() => {
      const P = g.value.filter((ee) => ee.kind !== "block" || y(ee.block).length === 0 ? !0 : b(ee).length > 0);
      if (!i.review) return P;
      const B = (ee) => ee.kind === "block" && b(ee).length > 0, I = [...P].reverse().findIndex(B);
      if (I === -1) return P;
      const $ = P.length - I, W = { kind: "review", id: "__fu-form-render-review__" };
      return [...P.slice(0, $), W, ...P.slice($)];
    }), k = N(!1), T = N(0), M = O(
      () => Math.min(T.value, Math.max(w.value.length - 1, 0))
    ), x = O(() => w.value[M.value] ?? null), L = O(() => M.value === w.value.length - 1), K = O(() => x.value?.kind === "review");
    function G(P) {
      return {
        ...P,
        columns: (P.columns ?? []).map((B) => ({
          ...B,
          widgets: (B.widgets ?? []).filter(
            (I) => I.type !== "question" || v(I)
          )
        }))
      };
    }
    const V = O(() => {
      const P = x.value;
      if (!P || P.kind !== "block") return P;
      const B = G(P.block);
      return B.columns = B.columns.map((I) => ({
        ...I,
        widgets: I.widgets.map(($) => {
          if ($.type !== "question") return $;
          const W = C.value[$.id];
          return W === void 0 ? $ : { ...$, props: { ...$.props, value: W } };
        })
      })), { ...P, block: B };
    }), Y = O(() => w.value.length ? Math.min(100, (M.value + 1) / w.value.length * 100) : 0);
    function U(P, B) {
      return P === "multiple_choice" ? !Array.isArray(B) || B.length === 0 : P === "contact_details" ? !B || !B.firstName?.trim() || !B.lastName?.trim() : B == null || B === "";
    }
    const R = O(() => {
      const P = x.value;
      return !P || P.kind !== "block" ? !0 : b(P).every((B) => B.props.required ? !U(B.props.questionType, C.value[B.id]) : !0);
    });
    function S() {
      !R.value || L.value || K.value || (T.value += 1);
    }
    function E() {
      T.value > 0 && (T.value -= 1);
    }
    function D() {
      R.value && (k.value = !0, a("submit", { ...C.value }), M.value < w.value.length - 1 && (T.value += 1));
    }
    function q(P) {
      if (k.value || !x.value) return;
      const B = P.metaKey || P.ctrlKey;
      if (L.value || K.value) {
        B && P.key === "Enter" && (P.preventDefault(), D());
        return;
      }
      P.key === "Enter" && !P.shiftKey && !B && (P.preventDefault(), S());
    }
    _e(() => window.addEventListener("keydown", q)), Ae(() => window.removeEventListener("keydown", q));
    function Q(P) {
      if (P?.type !== "update" || !P.widgetId) return;
      C.value = { ...C.value, [P.widgetId]: P.payload?.value };
      const B = x.value;
      if (!B || B.kind !== "block" || L.value) return;
      const I = b(B);
      if (I.length !== 1) return;
      const $ = I[0];
      if ($.id !== P.widgetId || $.props.questionType !== "single_choice")
        return;
      const W = P.payload?.value;
      W != null && W !== "" && setTimeout(() => {
        x.value === B && S();
      }, 350);
    }
    return (P, B) => (l(), f("div", {
      class: "fu-form-render",
      style: ne(o.value)
    }, [
      m("div", Mv, [
        m("div", {
          class: "fu-form-render__progress-fill",
          style: ne({ width: Y.value + "%" })
        }, null, 4)
      ]),
      m("div", Nv, [
        J(He, {
          name: "fu-form-render-slide",
          mode: "out-in"
        }, {
          default: fe(() => [
            V.value ? (l(), f("div", {
              key: V.value.id,
              class: "fu-form-render__step"
            }, [
              V.value.kind === "review" ? se(P.$slots, "review", {
                key: 0,
                answers: C.value,
                submit: D
              }, void 0, !0) : (l(), f(j, { key: 1 }, [
                J(Ma, {
                  block: V.value.block,
                  theme: r.value,
                  onAction: Q
                }, null, 8, ["block", "theme"]),
                k.value ? A("", !0) : (l(), f("div", Dv, [
                  J(Ee, {
                    text: L.value ? "Submit" : "OK",
                    variant: "solid",
                    size: "lg",
                    disabled: !R.value,
                    onClick: B[0] || (B[0] = (I) => L.value ? D() : S())
                  }, null, 8, ["text", "disabled"]),
                  m("span", Iv, [
                    L.value ? (l(), f(j, { key: 0 }, [
                      B[1] || (B[1] = ce(" press ", -1)),
                      m("strong", null, _(s.value), 1),
                      B[2] || (B[2] = ce(" + ", -1)),
                      B[3] || (B[3] = m("strong", null, "Enter ↵", -1))
                    ], 64)) : (l(), f(j, { key: 1 }, [
                      B[4] || (B[4] = ce(" press ", -1)),
                      B[5] || (B[5] = m("strong", null, "Enter ↵", -1))
                    ], 64))
                  ])
                ]))
              ], 64))
            ])) : A("", !0)
          ]),
          _: 3
        })
      ]),
      k.value ? A("", !0) : (l(), f("div", Ov, [
        m("div", Rv, [
          J($e, {
            icon: oe(yr),
            variant: "subtle",
            size: "md",
            tooltip: "Previous",
            disabled: M.value === 0,
            onClick: E
          }, null, 8, ["icon", "disabled"]),
          J($e, {
            icon: oe(Le),
            variant: "solid",
            size: "md",
            tooltip: "Next",
            disabled: !R.value || L.value || K.value,
            onClick: S
          }, null, 8, ["icon", "disabled"])
        ]),
        se(P.$slots, "branding", {}, void 0, !0)
      ]))
    ], 4));
  }
}), $v = /* @__PURE__ */ ae(xv, [["__scopeId", "data-v-7c5a12e5"]]), Pv = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: $v
}, Symbol.toStringTag, { value: "Module" })), Fv = { class: "fu-textarea-wrapper" }, Bv = {
  key: 0,
  class: "fu-textarea-label"
}, zv = {
  key: 0,
  class: "fu-textarea-required"
}, Lv = ["placeholder", "disabled", "readonly", "rows", "required"], Hv = {
  key: 1,
  class: "fu-textarea-error"
}, Vv = {
  key: 2,
  class: "fu-textarea-hint"
}, jv = /* @__PURE__ */ le({
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
    const n = t, a = e, i = N(n.modelValue), r = N(null), o = O(() => typeof navigator > "u" ? !1 : /Mac|iPhone|iPad|iPod/.test(navigator.userAgent));
    ve(i, (c) => a("update:modelValue", c)), ve(
      () => n.modelValue,
      (c) => {
        i.value = c, we(u);
      }
    );
    const s = O(() => n.variant !== "typeform" ? {} : {
      ...n.font ? { "--fu-typeform-font": n.font } : {},
      ...n.color ? { "--fu-typeform-color": n.color } : {},
      ...n.fontSize ? { "--fu-typeform-font-size": n.fontSize } : {}
    });
    function u() {
      if (n.variant !== "typeform" || !r.value) return;
      const c = r.value;
      c.style.height = "auto", c.style.height = `${Math.max(c.scrollHeight, 60)}px`;
    }
    return _e(() => {
      we(u);
    }), (c, d) => (l(), f("div", Fv, [
      t.label ? (l(), f("label", Bv, [
        ce(_(t.label) + " ", 1),
        t.required ? (l(), f("span", zv, "*")) : A("", !0)
      ])) : A("", !0),
      Ve(m("textarea", xt(c.$attrs, {
        ref_key: "textareaRef",
        ref: r,
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
        "onUpdate:modelValue": d[0] || (d[0] = (h) => i.value = h),
        onInput: u
      }), null, 16, Lv), [
        [Xe, i.value]
      ]),
      t.error ? (l(), f("span", Hv, _(t.error), 1)) : t.variant === "typeform" ? (l(), f("span", Vv, [
        o.value ? (l(), f(j, { key: 0 }, [
          d[1] || (d[1] = m("strong", null, "Shift ⇧", -1)),
          d[2] || (d[2] = ce(" + ", -1)),
          d[3] || (d[3] = m("strong", null, "Return ↵", -1)),
          d[4] || (d[4] = ce(" to make a line break ", -1))
        ], 64)) : (l(), f(j, { key: 1 }, [
          d[5] || (d[5] = m("strong", null, "Shift", -1)),
          d[6] || (d[6] = ce(" + ", -1)),
          d[7] || (d[7] = m("strong", null, "Enter", -1)),
          d[8] || (d[8] = ce(" to make a line break ", -1))
        ], 64))
      ])) : A("", !0)
    ]));
  }
}), Rr = /* @__PURE__ */ ae(jv, [["__scopeId", "data-v-869a3ce9"]]), Uv = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Rr
}, Symbol.toStringTag, { value: "Module" })), Wv = ["value", "disabled", "checked", "aria-readonly"], Yv = { class: "fu-radio__control" }, Gv = {
  key: 0,
  class: "fu-radio__dot"
}, Kv = {
  key: 0,
  class: "fu-radio__label"
}, qv = /* @__PURE__ */ le({
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
      set: (c) => a("update:modelValue", c)
    }), r = O(() => i.value === n.value), o = O(() => n.variant !== "typeform" ? {} : {
      ...n.font ? { "--fu-typeform-font": n.font } : {},
      ...n.fontSize ? { "--fu-typeform-font-size": n.fontSize } : {},
      ...n.color ? { "--fu-typeform-color": n.color } : {}
    });
    function s(c) {
      n.readonly && c.preventDefault();
    }
    function u() {
      n.readonly || a("update:modelValue", n.value);
    }
    return (c, d) => (l(), f("label", {
      class: Z(["fu-radio", [
        `fu-radio--${t.size}`,
        t.variant ? `fu-radio--${t.variant}` : null,
        {
          "is-checked": r.value,
          "is-disabled": t.disabled,
          "is-readonly": t.readonly
        }
      ]]),
      style: ne(o.value)
    }, [
      m("input", {
        type: "radio",
        class: "fu-radio__input",
        value: t.value,
        disabled: t.disabled,
        checked: r.value,
        "aria-readonly": t.readonly,
        onClick: s,
        onChange: u
      }, null, 40, Wv),
      m("span", Yv, [
        r.value ? (l(), f("span", Gv)) : A("", !0)
      ]),
      c.$slots.default ? (l(), f("span", Kv, [
        se(c.$slots, "default", {}, void 0, !0)
      ])) : A("", !0)
    ], 6));
  }
}), xr = /* @__PURE__ */ ae(qv, [["__scopeId", "data-v-e411c0f3"]]), Qv = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: xr
}, Symbol.toStringTag, { value: "Module" })), Zv = { class: "fu-upload__content" }, Jv = {
  key: 0,
  class: "fu-upload__previews"
}, Xv = ["onClick"], ep = ["src"], tp = {
  key: 1,
  class: "fu-upload__file-fallback"
}, np = {
  key: 1,
  class: "fu-upload__prompt"
}, ap = ["multiple", "accept"], ip = /* @__PURE__ */ le({
  __name: "FusionUpload",
  props: {
    multiple: { type: Boolean, default: !1 },
    accept: { type: String, default: "*" },
    maxFiles: { type: Number, default: 1 / 0 },
    maxFileSizeMB: { type: Number, default: 1 / 0 }
  },
  emits: ["filesSelected", "uploadError"],
  setup(t, { emit: e }) {
    const n = t, a = e, i = N(!1), r = N(null), o = N([]), s = N([]);
    function u() {
      return typeof crypto < "u" && crypto.randomUUID ? crypto.randomUUID() : `file_${Date.now()}_${Math.random().toString(36).slice(2, 9)}`;
    }
    function c() {
      r.value?.click();
    }
    function d(y) {
      const g = y.target;
      g.files?.length && (p(g.files), g.value = "");
    }
    function h(y) {
      i.value = !1;
      const g = y.dataTransfer?.files;
      g?.length && p(g);
    }
    function p(y) {
      const g = Array.from(y);
      n.multiple || (o.value = [], s.value = []);
      for (const b of g) {
        const C = n.maxFileSizeMB * 1024 * 1024;
        if (b.size > C) {
          const T = `File "${b.name}" exceeds max size of ${n.maxFileSizeMB} MB.`;
          a("uploadError", T);
          continue;
        }
        if (o.value.length >= n.maxFiles) {
          const T = `Maximum of ${n.maxFiles} files allowed.`;
          a("uploadError", T);
          break;
        }
        o.value.push(b);
        const w = u();
        if (b.type.startsWith("image/")) {
          const T = new FileReader();
          T.onload = (M) => {
            s.value.push({
              id: w,
              src: M.target?.result,
              file: b,
              isImage: !0
            });
          }, T.readAsDataURL(b);
        } else
          s.value.push({
            id: w,
            src: "",
            file: b,
            isImage: !1
          });
      }
      a("filesSelected", o.value);
    }
    function v(y) {
      o.value.splice(y, 1), s.value.splice(y, 1), a("filesSelected", o.value);
    }
    return (y, g) => (l(), f("div", {
      class: Z(["fu-upload", { dragging: i.value }]),
      onClick: c,
      onDragover: g[0] || (g[0] = ue((b) => i.value = !0, ["prevent"])),
      onDragleave: g[1] || (g[1] = ue((b) => i.value = !1, ["prevent"])),
      onDrop: ue(h, ["prevent"])
    }, [
      m("div", Zv, [
        s.value.length ? (l(), f("div", Jv, [
          (l(!0), f(j, null, re(s.value, (b, C) => (l(), f("div", {
            key: b.id,
            class: "fu-upload__preview-item"
          }, [
            m("button", {
              class: "fu-upload__remove",
              onClick: ue((w) => v(C), ["stop"])
            }, " ✕ ", 8, Xv),
            b.isImage ? (l(), f("img", {
              key: 0,
              src: b.src,
              class: "fu-upload__preview-img",
              alt: "Preview"
            }, null, 8, ep)) : (l(), f("div", tp, [
              J(oe(ai), { size: 20 }),
              m("span", null, _(b.file.name), 1)
            ]))
          ]))), 128))
        ])) : (l(), f("div", np, [
          J(oe(ai), {
            class: "fu-upload__icon",
            size: 22
          }),
          se(y.$slots, "description", {}, () => [
            g[2] || (g[2] = m("p", { class: "fu-upload__text" }, " Drag & drop files or click to browse ", -1))
          ], !0)
        ])),
        m("input", {
          ref_key: "fileInput",
          ref: r,
          type: "file",
          class: "fu-upload__input",
          multiple: t.multiple,
          accept: t.accept,
          onChange: d
        }, null, 40, ap)
      ])
    ], 34));
  }
}), $r = /* @__PURE__ */ ae(ip, [["__scopeId", "data-v-1b1249ff"]]), rp = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: $r
}, Symbol.toStringTag, { value: "Module" })), op = ["data-widget-id"], sp = { class: "qu-label-row" }, lp = ["innerHTML"], up = {
  key: 0,
  class: "qu-required"
}, cp = { class: "qu-input-area" }, dp = {
  key: 6,
  class: "qu-choices"
}, fp = {
  key: 7,
  class: "qu-choices"
}, mp = {
  key: 9,
  class: "qu-contact"
}, hp = { class: "qu-contact-grid" }, vp = /* @__PURE__ */ le({
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
    const n = t, a = e, i = O(() => n.theme?.brandColor || "#111827"), r = O(() => n.theme?.questionFont || "inherit"), o = O(() => n.theme?.questionFontSize || "26px"), s = O(() => ({
      color: i.value,
      fontFamily: r.value,
      fontSize: o.value
    })), u = N(
      n.questionType === "multiple_choice" ? Array.isArray(n.value) ? [...n.value] : [] : n.questionType === "contact_details" ? null : n.value ?? ""
    ), c = () => ({
      firstName: "",
      lastName: "",
      email: "",
      phone: ""
    }), d = N(
      n.value && typeof n.value == "object" ? { ...c(), ...n.value } : c()
    ), h = O(() => n.label ? n.label.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, "") : ""), p = O(
      () => n.options.map((T) => ({ label: T.text, _id: T.id }))
    ), v = O({
      get() {
        return p.value.find((T) => T._id === u.value) || null;
      },
      set(T) {
        u.value = T?._id ?? null;
      }
    });
    ve(
      () => n.value,
      (T) => {
        n.questionType === "contact_details" ? d.value = T && typeof T == "object" ? { ...c(), ...T } : c() : u.value = n.questionType === "multiple_choice" ? Array.isArray(T) ? [...T] : [] : T ?? "";
      }
    ), ve(
      () => n.isVisible,
      (T) => {
        if (!T)
          if (n.questionType === "contact_details")
            d.value = c(), a("update", { value: c() });
          else {
            const M = n.questionType === "multiple_choice" ? [] : null;
            u.value = M, a("update", { value: M });
          }
      }
    );
    function y() {
      a("update", { value: u.value });
    }
    function g() {
      a("update", { value: { ...d.value } });
    }
    function b(T) {
      u.value = T?._id ?? null, y();
    }
    function C(T) {
      u.value = T, y();
    }
    function w(T) {
      return Array.isArray(u.value) && u.value.includes(T);
    }
    function k(T) {
      const M = Array.isArray(u.value) ? [...u.value] : [], x = M.indexOf(T);
      x === -1 ? M.push(T) : M.splice(x, 1), u.value = M, y();
    }
    return (T, M) => t.isVisible ? (l(), f("div", {
      key: 0,
      class: "qu-widget",
      "data-widget-id": t.widgetId
    }, [
      m("div", sp, [
        m("div", {
          class: "qu-label-render",
          style: ne(s.value),
          innerHTML: h.value
        }, null, 12, lp),
        t.required ? (l(), f("span", up, "*")) : A("", !0)
      ]),
      m("div", cp, [
        t.questionType === "short_text" ? (l(), X(Re, {
          key: 0,
          modelValue: u.value,
          "onUpdate:modelValue": [
            M[0] || (M[0] = (x) => u.value = x),
            y
          ],
          placeholder: t.placeholder,
          variant: "typeform",
          formWrapperWidth: "100%",
          size: "md",
          color: i.value,
          font: r.value,
          fontSize: o.value
        }, null, 8, ["modelValue", "placeholder", "color", "font", "fontSize"])) : t.questionType === "long_text" ? (l(), X(Rr, {
          key: 1,
          modelValue: u.value,
          "onUpdate:modelValue": [
            M[1] || (M[1] = (x) => u.value = x),
            y
          ],
          placeholder: t.placeholder,
          variant: "typeform",
          formWrapperWidth: "100%",
          color: i.value,
          font: r.value,
          fontSize: o.value
        }, null, 8, ["modelValue", "placeholder", "color", "font", "fontSize"])) : t.questionType === "number" ? (l(), X(Re, {
          key: 2,
          type: "number",
          modelValue: u.value,
          "onUpdate:modelValue": [
            M[2] || (M[2] = (x) => u.value = x),
            y
          ],
          placeholder: t.placeholder,
          variant: "typeform",
          formWrapperWidth: "100%",
          size: "md",
          color: i.value,
          font: r.value,
          fontSize: o.value
        }, null, 8, ["modelValue", "placeholder", "color", "font", "fontSize"])) : t.questionType === "link" ? (l(), X(Re, {
          key: 3,
          type: "url",
          modelValue: u.value,
          "onUpdate:modelValue": [
            M[3] || (M[3] = (x) => u.value = x),
            y
          ],
          placeholder: t.placeholder,
          variant: "typeform",
          formWrapperWidth: "100%",
          size: "md",
          color: i.value,
          font: r.value,
          fontSize: o.value
        }, null, 8, ["modelValue", "placeholder", "color", "font", "fontSize"])) : t.questionType === "date" ? (l(), X(Tr, {
          key: 4,
          modelValue: u.value,
          "onUpdate:modelValue": [
            M[4] || (M[4] = (x) => u.value = x),
            y
          ],
          variant: "date",
          placeholder: t.placeholder,
          size: "md",
          formWrapperWidth: "100%"
        }, null, 8, ["modelValue", "placeholder"])) : t.questionType === "dropdown" ? (l(), X(Ea, {
          key: 5,
          modelValue: v.value,
          "onUpdate:modelValue": [
            M[5] || (M[5] = (x) => v.value = x),
            b
          ],
          options: p.value,
          placeholder: t.placeholder,
          align: "left",
          size: "md"
        }, null, 8, ["modelValue", "options", "placeholder"])) : t.questionType === "single_choice" ? (l(), f("div", dp, [
          (l(!0), f(j, null, re(t.options, (x) => (l(), X(xr, {
            key: x.id,
            modelValue: u.value,
            "onUpdate:modelValue": [
              M[6] || (M[6] = (L) => u.value = L),
              y
            ],
            value: x.id,
            name: `qu-${t.widgetId}`,
            variant: "typeform",
            color: i.value,
            font: r.value,
            fontSize: o.value
          }, {
            default: fe(() => [
              ce(_(x.text), 1)
            ]),
            _: 2
          }, 1032, ["modelValue", "value", "name", "color", "font", "fontSize"]))), 128))
        ])) : t.questionType === "multiple_choice" ? (l(), f("div", fp, [
          (l(!0), f(j, null, re(t.options, (x) => (l(), X(st, {
            key: x.id,
            modelValue: w(x.id),
            label: x.text,
            "onUpdate:modelValue": (L) => k(x.id)
          }, null, 8, ["modelValue", "label", "onUpdate:modelValue"]))), 128))
        ])) : t.questionType === "upload" ? (l(), X($r, {
          key: 8,
          accept: ".jpg,.jpeg,.png,.gif,.pdf,.doc,.docx",
          maxFiles: 10,
          maxFileSizeMB: 15,
          multiple: "",
          onFilesSelected: C
        })) : t.questionType === "contact_details" ? (l(), f("div", mp, [
          m("div", hp, [
            J(Re, {
              modelValue: d.value.firstName,
              "onUpdate:modelValue": [
                M[7] || (M[7] = (x) => d.value.firstName = x),
                g
              ],
              placeholder: "First name",
              variant: "typeform",
              formWrapperWidth: "100%",
              size: "md",
              color: i.value,
              font: r.value,
              fontSize: o.value
            }, null, 8, ["modelValue", "color", "font", "fontSize"]),
            J(Re, {
              modelValue: d.value.lastName,
              "onUpdate:modelValue": [
                M[8] || (M[8] = (x) => d.value.lastName = x),
                g
              ],
              placeholder: "Last name",
              variant: "typeform",
              formWrapperWidth: "100%",
              size: "md",
              color: i.value,
              font: r.value,
              fontSize: o.value
            }, null, 8, ["modelValue", "color", "font", "fontSize"])
          ]),
          t.contactFields?.email !== !1 ? (l(), X(Re, {
            key: 0,
            modelValue: d.value.email,
            "onUpdate:modelValue": [
              M[9] || (M[9] = (x) => d.value.email = x),
              g
            ],
            type: "email",
            placeholder: "Email address",
            variant: "typeform",
            formWrapperWidth: "100%",
            size: "md",
            color: i.value,
            font: r.value,
            fontSize: o.value
          }, null, 8, ["modelValue", "color", "font", "fontSize"])) : A("", !0),
          t.contactFields?.phone !== !1 ? (l(), X(Re, {
            key: 1,
            modelValue: d.value.phone,
            "onUpdate:modelValue": [
              M[10] || (M[10] = (x) => d.value.phone = x),
              g
            ],
            type: "tel",
            placeholder: "Phone number",
            variant: "typeform",
            formWrapperWidth: "100%",
            size: "md",
            color: i.value,
            font: r.value,
            fontSize: o.value
          }, null, 8, ["modelValue", "color", "font", "fontSize"])) : A("", !0)
        ])) : A("", !0)
      ])
    ], 8, op)) : A("", !0);
  }
}), Pr = /* @__PURE__ */ ae(vp, [["__scopeId", "data-v-42a68d88"]]), Fr = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Pr
}, Symbol.toStringTag, { value: "Module" }));
var xn, de, Br, zr, $t, ht, li, Lr, Hr, bn = {}, Vr = [], pp = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function at(t, e) {
  for (var n in e) t[n] = e[n];
  return t;
}
function jr(t) {
  var e = t.parentNode;
  e && e.removeChild(t);
}
function H(t, e, n) {
  var a, i, r, o = {};
  for (r in e) r == "key" ? a = e[r] : r == "ref" ? i = e[r] : o[r] = e[r];
  if (arguments.length > 2 && (o.children = arguments.length > 3 ? xn.call(arguments, 2) : n), typeof t == "function" && t.defaultProps != null) for (r in t.defaultProps) o[r] === void 0 && (o[r] = t.defaultProps[r]);
  return mn(t, o, a, i, null);
}
function mn(t, e, n, a, i) {
  var r = { type: t, props: e, key: n, ref: a, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: i ?? ++Br };
  return i == null && de.vnode != null && de.vnode(r), r;
}
function et() {
  return { current: null };
}
function Oe(t) {
  return t.children;
}
function gp(t, e, n, a, i) {
  var r;
  for (r in n) r === "children" || r === "key" || r in e || Cn(t, r, null, n[r], a);
  for (r in e) i && typeof e[r] != "function" || r === "children" || r === "key" || r === "value" || r === "checked" || n[r] === e[r] || Cn(t, r, e[r], n[r], a);
}
function ui(t, e, n) {
  e[0] === "-" ? t.setProperty(e, n ?? "") : t[e] = n == null ? "" : typeof n != "number" || pp.test(e) ? n : n + "px";
}
function Cn(t, e, n, a, i) {
  var r;
  e: if (e === "style") if (typeof n == "string") t.style.cssText = n;
  else {
    if (typeof a == "string" && (t.style.cssText = a = ""), a) for (e in a) n && e in n || ui(t.style, e, "");
    if (n) for (e in n) a && n[e] === a[e] || ui(t.style, e, n[e]);
  }
  else if (e[0] === "o" && e[1] === "n") r = e !== (e = e.replace(/Capture$/, "")), e = e.toLowerCase() in t ? e.toLowerCase().slice(2) : e.slice(2), t.l || (t.l = {}), t.l[e + r] = n, n ? a || t.addEventListener(e, r ? di : ci, r) : t.removeEventListener(e, r ? di : ci, r);
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
function ci(t) {
  $t = !0;
  try {
    return this.l[t.type + !1](de.event ? de.event(t) : t);
  } finally {
    $t = !1;
  }
}
function di(t) {
  $t = !0;
  try {
    return this.l[t.type + !0](de.event ? de.event(t) : t);
  } finally {
    $t = !1;
  }
}
function Ue(t, e) {
  this.props = t, this.context = e;
}
function Kt(t, e) {
  if (e == null) return t.__ ? Kt(t.__, t.__.__k.indexOf(t) + 1) : null;
  for (var n; e < t.__k.length; e++) if ((n = t.__k[e]) != null && n.__e != null) return n.__e;
  return typeof t.type == "function" ? Kt(t) : null;
}
function Ur(t) {
  var e, n;
  if ((t = t.__) != null && t.__c != null) {
    for (t.__e = t.__c.base = null, e = 0; e < t.__k.length; e++) if ((n = t.__k[e]) != null && n.__e != null) {
      t.__e = t.__c.base = n.__e;
      break;
    }
    return Ur(t);
  }
}
function yp(t) {
  $t ? setTimeout(t) : Lr(t);
}
function da(t) {
  (!t.__d && (t.__d = !0) && ht.push(t) && !wn.__r++ || li !== de.debounceRendering) && ((li = de.debounceRendering) || yp)(wn);
}
function wn() {
  var t, e, n, a, i, r, o, s;
  for (ht.sort(function(u, c) {
    return u.__v.__b - c.__v.__b;
  }); t = ht.shift(); ) t.__d && (e = ht.length, a = void 0, i = void 0, o = (r = (n = t).__v).__e, (s = n.__P) && (a = [], (i = at({}, r)).__v = r.__v + 1, Na(s, r, i, n.__n, s.ownerSVGElement !== void 0, r.__h != null ? [o] : null, a, o ?? Kt(r), r.__h), qr(a, r), r.__e != o && Ur(r)), ht.length > e && ht.sort(function(u, c) {
    return u.__v.__b - c.__v.__b;
  }));
  wn.__r = 0;
}
function Wr(t, e, n, a, i, r, o, s, u, c) {
  var d, h, p, v, y, g, b, C = a && a.__k || Vr, w = C.length;
  for (n.__k = [], d = 0; d < e.length; d++) if ((v = n.__k[d] = (v = e[d]) == null || typeof v == "boolean" ? null : typeof v == "string" || typeof v == "number" || typeof v == "bigint" ? mn(null, v, null, null, v) : Array.isArray(v) ? mn(Oe, { children: v }, null, null, null) : v.__b > 0 ? mn(v.type, v.props, v.key, v.ref ? v.ref : null, v.__v) : v) != null) {
    if (v.__ = n, v.__b = n.__b + 1, (p = C[d]) === null || p && v.key == p.key && v.type === p.type) C[d] = void 0;
    else for (h = 0; h < w; h++) {
      if ((p = C[h]) && v.key == p.key && v.type === p.type) {
        C[h] = void 0;
        break;
      }
      p = null;
    }
    Na(t, v, p = p || bn, i, r, o, s, u, c), y = v.__e, (h = v.ref) && p.ref != h && (b || (b = []), p.ref && b.push(p.ref, null, v), b.push(h, v.__c || y, v)), y != null ? (g == null && (g = y), typeof v.type == "function" && v.__k === p.__k ? v.__d = u = Yr(v, u, t) : u = Gr(t, v, p, C, y, u), typeof n.type == "function" && (n.__d = u)) : u && p.__e == u && u.parentNode != t && (u = Kt(p));
  }
  for (n.__e = g, d = w; d--; ) C[d] != null && (typeof n.type == "function" && C[d].__e != null && C[d].__e == n.__d && (n.__d = Kr(a).nextSibling), Zr(C[d], C[d]));
  if (b) for (d = 0; d < b.length; d++) Qr(b[d], b[++d], b[++d]);
}
function Yr(t, e, n) {
  for (var a, i = t.__k, r = 0; i && r < i.length; r++) (a = i[r]) && (a.__ = t, e = typeof a.type == "function" ? Yr(a, e, n) : Gr(n, a, a, i, a.__e, e));
  return e;
}
function An(t, e) {
  return e = e || [], t == null || typeof t == "boolean" || (Array.isArray(t) ? t.some(function(n) {
    An(n, e);
  }) : e.push(t)), e;
}
function Gr(t, e, n, a, i, r) {
  var o, s, u;
  if (e.__d !== void 0) o = e.__d, e.__d = void 0;
  else if (n == null || i != r || i.parentNode == null) e: if (r == null || r.parentNode !== t) t.appendChild(i), o = null;
  else {
    for (s = r, u = 0; (s = s.nextSibling) && u < a.length; u += 1) if (s == i) break e;
    t.insertBefore(i, r), o = r;
  }
  return o !== void 0 ? o : i.nextSibling;
}
function Kr(t) {
  var e, n, a;
  if (t.type == null || typeof t.type == "string") return t.__e;
  if (t.__k) {
    for (e = t.__k.length - 1; e >= 0; e--) if ((n = t.__k[e]) && (a = Kr(n))) return a;
  }
  return null;
}
function Na(t, e, n, a, i, r, o, s, u) {
  var c, d, h, p, v, y, g, b, C, w, k, T, M, x, L, K = e.type;
  if (e.constructor !== void 0) return null;
  n.__h != null && (u = n.__h, s = e.__e = n.__e, e.__h = null, r = [s]), (c = de.__b) && c(e);
  try {
    e: if (typeof K == "function") {
      if (b = e.props, C = (c = K.contextType) && a[c.__c], w = c ? C ? C.props.value : c.__ : a, n.__c ? g = (d = e.__c = n.__c).__ = d.__E : ("prototype" in K && K.prototype.render ? e.__c = d = new K(b, w) : (e.__c = d = new Ue(b, w), d.constructor = K, d.render = Cp), C && C.sub(d), d.props = b, d.state || (d.state = {}), d.context = w, d.__n = a, h = d.__d = !0, d.__h = [], d._sb = []), d.__s == null && (d.__s = d.state), K.getDerivedStateFromProps != null && (d.__s == d.state && (d.__s = at({}, d.__s)), at(d.__s, K.getDerivedStateFromProps(b, d.__s))), p = d.props, v = d.state, d.__v = e, h) K.getDerivedStateFromProps == null && d.componentWillMount != null && d.componentWillMount(), d.componentDidMount != null && d.__h.push(d.componentDidMount);
      else {
        if (K.getDerivedStateFromProps == null && b !== p && d.componentWillReceiveProps != null && d.componentWillReceiveProps(b, w), !d.__e && d.shouldComponentUpdate != null && d.shouldComponentUpdate(b, d.__s, w) === !1 || e.__v === n.__v) {
          for (e.__v !== n.__v && (d.props = b, d.state = d.__s, d.__d = !1), e.__e = n.__e, e.__k = n.__k, e.__k.forEach(function(G) {
            G && (G.__ = e);
          }), k = 0; k < d._sb.length; k++) d.__h.push(d._sb[k]);
          d._sb = [], d.__h.length && o.push(d);
          break e;
        }
        d.componentWillUpdate != null && d.componentWillUpdate(b, d.__s, w), d.componentDidUpdate != null && d.__h.push(function() {
          d.componentDidUpdate(p, v, y);
        });
      }
      if (d.context = w, d.props = b, d.__P = t, T = de.__r, M = 0, "prototype" in K && K.prototype.render) {
        for (d.state = d.__s, d.__d = !1, T && T(e), c = d.render(d.props, d.state, d.context), x = 0; x < d._sb.length; x++) d.__h.push(d._sb[x]);
        d._sb = [];
      } else do
        d.__d = !1, T && T(e), c = d.render(d.props, d.state, d.context), d.state = d.__s;
      while (d.__d && ++M < 25);
      d.state = d.__s, d.getChildContext != null && (a = at(at({}, a), d.getChildContext())), h || d.getSnapshotBeforeUpdate == null || (y = d.getSnapshotBeforeUpdate(p, v)), L = c != null && c.type === Oe && c.key == null ? c.props.children : c, Wr(t, Array.isArray(L) ? L : [L], e, n, a, i, r, o, s, u), d.base = e.__e, e.__h = null, d.__h.length && o.push(d), g && (d.__E = d.__ = null), d.__e = !1;
    } else r == null && e.__v === n.__v ? (e.__k = n.__k, e.__e = n.__e) : e.__e = bp(n.__e, e, n, a, i, r, o, u);
    (c = de.diffed) && c(e);
  } catch (G) {
    e.__v = null, (u || r != null) && (e.__e = s, e.__h = !!u, r[r.indexOf(s)] = null), de.__e(G, e, n);
  }
}
function qr(t, e) {
  de.__c && de.__c(e, t), t.some(function(n) {
    try {
      t = n.__h, n.__h = [], t.some(function(a) {
        a.call(n);
      });
    } catch (a) {
      de.__e(a, n.__v);
    }
  });
}
function bp(t, e, n, a, i, r, o, s) {
  var u, c, d, h = n.props, p = e.props, v = e.type, y = 0;
  if (v === "svg" && (i = !0), r != null) {
    for (; y < r.length; y++) if ((u = r[y]) && "setAttribute" in u == !!v && (v ? u.localName === v : u.nodeType === 3)) {
      t = u, r[y] = null;
      break;
    }
  }
  if (t == null) {
    if (v === null) return document.createTextNode(p);
    t = i ? document.createElementNS("http://www.w3.org/2000/svg", v) : document.createElement(v, p.is && p), r = null, s = !1;
  }
  if (v === null) h === p || s && t.data === p || (t.data = p);
  else {
    if (r = r && xn.call(t.childNodes), c = (h = n.props || bn).dangerouslySetInnerHTML, d = p.dangerouslySetInnerHTML, !s) {
      if (r != null) for (h = {}, y = 0; y < t.attributes.length; y++) h[t.attributes[y].name] = t.attributes[y].value;
      (d || c) && (d && (c && d.__html == c.__html || d.__html === t.innerHTML) || (t.innerHTML = d && d.__html || ""));
    }
    if (gp(t, p, h, i, s), d) e.__k = [];
    else if (y = e.props.children, Wr(t, Array.isArray(y) ? y : [y], e, n, a, i && v !== "foreignObject", r, o, r ? r[0] : n.__k && Kt(n, 0), s), r != null) for (y = r.length; y--; ) r[y] != null && jr(r[y]);
    s || ("value" in p && (y = p.value) !== void 0 && (y !== t.value || v === "progress" && !y || v === "option" && y !== h.value) && Cn(t, "value", y, h.value, !1), "checked" in p && (y = p.checked) !== void 0 && y !== t.checked && Cn(t, "checked", y, h.checked, !1));
  }
  return t;
}
function Qr(t, e, n) {
  try {
    typeof t == "function" ? t(e) : t.current = e;
  } catch (a) {
    de.__e(a, n);
  }
}
function Zr(t, e, n) {
  var a, i;
  if (de.unmount && de.unmount(t), (a = t.ref) && (a.current && a.current !== t.__e || Qr(a, null, e)), (a = t.__c) != null) {
    if (a.componentWillUnmount) try {
      a.componentWillUnmount();
    } catch (r) {
      de.__e(r, e);
    }
    a.base = a.__P = null, t.__c = void 0;
  }
  if (a = t.__k) for (i = 0; i < a.length; i++) a[i] && Zr(a[i], e, n || typeof t.type != "function");
  n || t.__e == null || jr(t.__e), t.__ = t.__e = t.__d = void 0;
}
function Cp(t, e, n) {
  return this.constructor(t, n);
}
function qt(t, e, n) {
  var a, i, r;
  de.__ && de.__(t, e), i = (a = !1) ? null : e.__k, r = [], Na(e, t = e.__k = H(Oe, null, [t]), i || bn, bn, e.ownerSVGElement !== void 0, i ? null : e.firstChild ? xn.call(e.childNodes) : null, r, i ? i.__e : e.firstChild, a), qr(r, t);
}
function wp(t, e) {
  var n = { __c: e = "__cC" + Hr++, __: t, Consumer: function(a, i) {
    return a.children(i);
  }, Provider: function(a) {
    var i, r;
    return this.getChildContext || (i = [], (r = {})[e] = this, this.getChildContext = function() {
      return r;
    }, this.shouldComponentUpdate = function(o) {
      this.props.value !== o.value && i.some(function(s) {
        s.__e = !0, da(s);
      });
    }, this.sub = function(o) {
      i.push(o);
      var s = o.componentWillUnmount;
      o.componentWillUnmount = function() {
        i.splice(i.indexOf(o), 1), s && s.call(o);
      };
    }), a.children;
  } };
  return n.Provider.__ = n.Consumer.contextType = n;
}
xn = Vr.slice, de = { __e: function(t, e, n, a) {
  for (var i, r, o; e = e.__; ) if ((i = e.__c) && !i.__) try {
    if ((r = i.constructor) && r.getDerivedStateFromError != null && (i.setState(r.getDerivedStateFromError(t)), o = i.__d), i.componentDidCatch != null && (i.componentDidCatch(t, a || {}), o = i.__d), o) return i.__E = i;
  } catch (s) {
    t = s;
  }
  throw t;
} }, Br = 0, zr = function(t) {
  return t != null && t.constructor === void 0;
}, $t = !1, Ue.prototype.setState = function(t, e) {
  var n;
  n = this.__s != null && this.__s !== this.state ? this.__s : this.__s = at({}, this.state), typeof t == "function" && (t = t(at({}, n), this.props)), t && at(n, t), t != null && this.__v && (e && this._sb.push(e), da(this));
}, Ue.prototype.forceUpdate = function(t) {
  this.__v && (this.__e = !0, t && this.__h.push(t), da(this));
}, Ue.prototype.render = Oe, ht = [], Lr = typeof Promise == "function" ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, wn.__r = 0, Hr = 0;
var Qe, Yn, fi, Jr = [], Gn = [], mi = de.__b, hi = de.__r, vi = de.diffed, pi = de.__c, gi = de.unmount;
function Ap() {
  for (var t; t = Jr.shift(); ) if (t.__P && t.__H) try {
    t.__H.__h.forEach(hn), t.__H.__h.forEach(fa), t.__H.__h = [];
  } catch (e) {
    t.__H.__h = [], de.__e(e, t.__v);
  }
}
de.__b = function(t) {
  Qe = null, mi && mi(t);
}, de.__r = function(t) {
  hi && hi(t);
  var e = (Qe = t.__c).__H;
  e && (Yn === Qe ? (e.__h = [], Qe.__h = [], e.__.forEach(function(n) {
    n.__N && (n.__ = n.__N), n.__V = Gn, n.__N = n.i = void 0;
  })) : (e.__h.forEach(hn), e.__h.forEach(fa), e.__h = [])), Yn = Qe;
}, de.diffed = function(t) {
  vi && vi(t);
  var e = t.__c;
  e && e.__H && (e.__H.__h.length && (Jr.push(e) !== 1 && fi === de.requestAnimationFrame || ((fi = de.requestAnimationFrame) || _p)(Ap)), e.__H.__.forEach(function(n) {
    n.i && (n.__H = n.i), n.__V !== Gn && (n.__ = n.__V), n.i = void 0, n.__V = Gn;
  })), Yn = Qe = null;
}, de.__c = function(t, e) {
  e.some(function(n) {
    try {
      n.__h.forEach(hn), n.__h = n.__h.filter(function(a) {
        return !a.__ || fa(a);
      });
    } catch (a) {
      e.some(function(i) {
        i.__h && (i.__h = []);
      }), e = [], de.__e(a, n.__v);
    }
  }), pi && pi(t, e);
}, de.unmount = function(t) {
  gi && gi(t);
  var e, n = t.__c;
  n && n.__H && (n.__H.__.forEach(function(a) {
    try {
      hn(a);
    } catch (i) {
      e = i;
    }
  }), n.__H = void 0, e && de.__e(e, n.__v));
};
var yi = typeof requestAnimationFrame == "function";
function _p(t) {
  var e, n = function() {
    clearTimeout(a), yi && cancelAnimationFrame(e), setTimeout(t);
  }, a = setTimeout(n, 100);
  yi && (e = requestAnimationFrame(n));
}
function hn(t) {
  var e = Qe, n = t.__c;
  typeof n == "function" && (t.__c = void 0, n()), Qe = e;
}
function fa(t) {
  var e = Qe;
  t.__c = t.__(), Qe = e;
}
function kp(t, e) {
  for (var n in e) t[n] = e[n];
  return t;
}
function bi(t, e) {
  for (var n in t) if (n !== "__source" && !(n in e)) return !0;
  for (var a in e) if (a !== "__source" && t[a] !== e[a]) return !0;
  return !1;
}
function Ci(t) {
  this.props = t;
}
(Ci.prototype = new Ue()).isPureReactComponent = !0, Ci.prototype.shouldComponentUpdate = function(t, e) {
  return bi(this.props, t) || bi(this.state, e);
};
var wi = de.__b;
de.__b = function(t) {
  t.type && t.type.__f && t.ref && (t.props.ref = t.ref, t.ref = null), wi && wi(t);
};
var Sp = de.__e;
de.__e = function(t, e, n, a) {
  if (t.then) {
    for (var i, r = e; r = r.__; ) if ((i = r.__c) && i.__c) return e.__e == null && (e.__e = n.__e, e.__k = n.__k), i.__c(t, e);
  }
  Sp(t, e, n, a);
};
var Ai = de.unmount;
function Xr(t, e, n) {
  return t && (t.__c && t.__c.__H && (t.__c.__H.__.forEach(function(a) {
    typeof a.__c == "function" && a.__c();
  }), t.__c.__H = null), (t = kp({}, t)).__c != null && (t.__c.__P === n && (t.__c.__P = e), t.__c = null), t.__k = t.__k && t.__k.map(function(a) {
    return Xr(a, e, n);
  })), t;
}
function eo(t, e, n) {
  return t && (t.__v = null, t.__k = t.__k && t.__k.map(function(a) {
    return eo(a, e, n);
  }), t.__c && t.__c.__P === e && (t.__e && n.insertBefore(t.__e, t.__d), t.__c.__e = !0, t.__c.__P = n)), t;
}
function Kn() {
  this.__u = 0, this.t = null, this.__b = null;
}
function to(t) {
  var e = t.__.__c;
  return e && e.__a && e.__a(t);
}
function an() {
  this.u = null, this.o = null;
}
de.unmount = function(t) {
  var e = t.__c;
  e && e.__R && e.__R(), e && t.__h === !0 && (t.type = null), Ai && Ai(t);
}, (Kn.prototype = new Ue()).__c = function(t, e) {
  var n = e.__c, a = this;
  a.t == null && (a.t = []), a.t.push(n);
  var i = to(a.__v), r = !1, o = function() {
    r || (r = !0, n.__R = null, i ? i(s) : s());
  };
  n.__R = o;
  var s = function() {
    if (!--a.__u) {
      if (a.state.__a) {
        var c = a.state.__a;
        a.__v.__k[0] = eo(c, c.__c.__P, c.__c.__O);
      }
      var d;
      for (a.setState({ __a: a.__b = null }); d = a.t.pop(); ) d.forceUpdate();
    }
  }, u = e.__h === !0;
  a.__u++ || u || a.setState({ __a: a.__b = a.__v.__k[0] }), t.then(o, o);
}, Kn.prototype.componentWillUnmount = function() {
  this.t = [];
}, Kn.prototype.render = function(t, e) {
  if (this.__b) {
    if (this.__v.__k) {
      var n = document.createElement("div"), a = this.__v.__k[0].__c;
      this.__v.__k[0] = Xr(this.__b, n, a.__O = a.__P);
    }
    this.__b = null;
  }
  var i = e.__a && H(Oe, null, t.fallback);
  return i && (i.__h = null), [H(Oe, null, e.__a ? null : t.children), i];
};
var _i = function(t, e, n) {
  if (++n[1] === n[0] && t.o.delete(e), t.props.revealOrder && (t.props.revealOrder[0] !== "t" || !t.o.size)) for (n = t.u; n; ) {
    for (; n.length > 3; ) n.pop()();
    if (n[1] < n[0]) break;
    t.u = n = n[2];
  }
};
function Tp(t) {
  return this.getChildContext = function() {
    return t.context;
  }, t.children;
}
function Ep(t) {
  var e = this, n = t.i;
  e.componentWillUnmount = function() {
    qt(null, e.l), e.l = null, e.i = null;
  }, e.i && e.i !== n && e.componentWillUnmount(), t.__v ? (e.l || (e.i = n, e.l = { nodeType: 1, parentNode: n, childNodes: [], appendChild: function(a) {
    this.childNodes.push(a), e.i.appendChild(a);
  }, insertBefore: function(a, i) {
    this.childNodes.push(a), e.i.appendChild(a);
  }, removeChild: function(a) {
    this.childNodes.splice(this.childNodes.indexOf(a) >>> 1, 1), e.i.removeChild(a);
  } }), qt(H(Tp, { context: e.context }, t.__v), e.l)) : e.l && e.componentWillUnmount();
}
function Mp(t, e) {
  var n = H(Ep, { __v: t, i: e });
  return n.containerInfo = e, n;
}
(an.prototype = new Ue()).__a = function(t) {
  var e = this, n = to(e.__v), a = e.o.get(t);
  return a[0]++, function(i) {
    var r = function() {
      e.props.revealOrder ? (a.push(i), _i(e, t, a)) : i();
    };
    n ? n(r) : r();
  };
}, an.prototype.render = function(t) {
  this.u = null, this.o = /* @__PURE__ */ new Map();
  var e = An(t.children);
  t.revealOrder && t.revealOrder[0] === "b" && e.reverse();
  for (var n = e.length; n--; ) this.o.set(e[n], this.u = [1, 0, this.u]);
  return t.children;
}, an.prototype.componentDidUpdate = an.prototype.componentDidMount = function() {
  var t = this;
  this.o.forEach(function(e, n) {
    _i(t, n, e);
  });
};
var Np = typeof Symbol < "u" && Symbol.for && Symbol.for("react.element") || 60103, Dp = /^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/, Ip = typeof document < "u", Op = function(t) {
  return (typeof Symbol < "u" && typeof Symbol() == "symbol" ? /fil|che|rad/i : /fil|che|ra/i).test(t);
};
Ue.prototype.isReactComponent = {}, ["componentWillMount", "componentWillReceiveProps", "componentWillUpdate"].forEach(function(t) {
  Object.defineProperty(Ue.prototype, t, { configurable: !0, get: function() {
    return this["UNSAFE_" + t];
  }, set: function(e) {
    Object.defineProperty(this, t, { configurable: !0, writable: !0, value: e });
  } });
});
var ki = de.event;
function Rp() {
}
function xp() {
  return this.cancelBubble;
}
function $p() {
  return this.defaultPrevented;
}
de.event = function(t) {
  return ki && (t = ki(t)), t.persist = Rp, t.isPropagationStopped = xp, t.isDefaultPrevented = $p, t.nativeEvent = t;
};
var Si = { configurable: !0, get: function() {
  return this.class;
} }, Ti = de.vnode;
de.vnode = function(t) {
  var e = t.type, n = t.props, a = n;
  if (typeof e == "string") {
    var i = e.indexOf("-") === -1;
    for (var r in a = {}, n) {
      var o = n[r];
      Ip && r === "children" && e === "noscript" || r === "value" && "defaultValue" in n && o == null || (r === "defaultValue" && "value" in n && n.value == null ? r = "value" : r === "download" && o === !0 ? o = "" : /ondoubleclick/i.test(r) ? r = "ondblclick" : /^onchange(textarea|input)/i.test(r + e) && !Op(n.type) ? r = "oninput" : /^onfocus$/i.test(r) ? r = "onfocusin" : /^onblur$/i.test(r) ? r = "onfocusout" : /^on(Ani|Tra|Tou|BeforeInp|Compo)/.test(r) ? r = r.toLowerCase() : i && Dp.test(r) ? r = r.replace(/[A-Z0-9]/g, "-$&").toLowerCase() : o === null && (o = void 0), /^oninput$/i.test(r) && (r = r.toLowerCase(), a[r] && (r = "oninputCapture")), a[r] = o);
    }
    e == "select" && a.multiple && Array.isArray(a.value) && (a.value = An(n.children).forEach(function(s) {
      s.props.selected = a.value.indexOf(s.props.value) != -1;
    })), e == "select" && a.defaultValue != null && (a.value = An(n.children).forEach(function(s) {
      s.props.selected = a.multiple ? a.defaultValue.indexOf(s.props.value) != -1 : a.defaultValue == s.props.value;
    })), t.props = a, n.class != n.className && (Si.enumerable = "className" in n, n.className != null && (a.class = n.className), Object.defineProperty(a, "className", Si));
  }
  t.$$typeof = Np, Ti && Ti(t);
};
var Ei = de.__r;
de.__r = function(t) {
  Ei && Ei(t), t.__c;
};
const no = [], ma = /* @__PURE__ */ new Map();
function ao(t) {
  no.push(t), ma.forEach((e) => {
    ro(e, t);
  });
}
function Pp(t) {
  t.isConnected && // sometimes true if SSR system simulates DOM
  t.getRootNode && io(t.getRootNode());
}
function io(t) {
  let e = ma.get(t);
  if (!e || !e.isConnected) {
    if (e = t.querySelector("style[data-fullcalendar]"), !e) {
      e = document.createElement("style"), e.setAttribute("data-fullcalendar", "");
      const n = Bp();
      n && (e.nonce = n);
      const a = t === document ? document.head : t, i = t === document ? a.querySelector("script,link[rel=stylesheet],link[as=style],style") : a.firstChild;
      a.insertBefore(e, i);
    }
    ma.set(t, e), Fp(e);
  }
}
function Fp(t) {
  for (const e of no)
    ro(t, e);
}
function ro(t, e) {
  const { sheet: n } = t, a = n.cssRules.length;
  e.split("}").forEach((i, r) => {
    i = i.trim(), i && n.insertRule(i + "}", a + r);
  });
}
let qn;
function Bp() {
  return qn === void 0 && (qn = zp()), qn;
}
function zp() {
  const t = document.querySelector('meta[name="csp-nonce"]');
  if (t && t.hasAttribute("content"))
    return t.getAttribute("content");
  const e = document.querySelector("script[nonce]");
  return e && e.nonce || "";
}
typeof document < "u" && io(document);
var Lp = ':root{--fc-small-font-size:.85em;--fc-page-bg-color:#fff;--fc-neutral-bg-color:hsla(0,0%,82%,.3);--fc-neutral-text-color:grey;--fc-border-color:#ddd;--fc-button-text-color:#fff;--fc-button-bg-color:#2c3e50;--fc-button-border-color:#2c3e50;--fc-button-hover-bg-color:#1e2b37;--fc-button-hover-border-color:#1a252f;--fc-button-active-bg-color:#1a252f;--fc-button-active-border-color:#151e27;--fc-event-bg-color:#3788d8;--fc-event-border-color:#3788d8;--fc-event-text-color:#fff;--fc-event-selected-overlay-color:rgba(0,0,0,.25);--fc-more-link-bg-color:#d0d0d0;--fc-more-link-text-color:inherit;--fc-event-resizer-thickness:8px;--fc-event-resizer-dot-total-width:8px;--fc-event-resizer-dot-border-width:1px;--fc-non-business-color:hsla(0,0%,84%,.3);--fc-bg-event-color:#8fdf82;--fc-bg-event-opacity:0.3;--fc-highlight-color:rgba(188,232,241,.3);--fc-today-bg-color:rgba(255,220,40,.15);--fc-now-indicator-color:red}.fc-not-allowed,.fc-not-allowed .fc-event{cursor:not-allowed}.fc{display:flex;flex-direction:column;font-size:1em}.fc,.fc *,.fc :after,.fc :before{box-sizing:border-box}.fc table{border-collapse:collapse;border-spacing:0;font-size:1em}.fc th{text-align:center}.fc td,.fc th{padding:0;vertical-align:top}.fc a[data-navlink]{cursor:pointer}.fc a[data-navlink]:hover{text-decoration:underline}.fc-direction-ltr{direction:ltr;text-align:left}.fc-direction-rtl{direction:rtl;text-align:right}.fc-theme-standard td,.fc-theme-standard th{border:1px solid var(--fc-border-color)}.fc-liquid-hack td,.fc-liquid-hack th{position:relative}@font-face{font-family:fcicons;font-style:normal;font-weight:400;src:url("data:application/x-font-ttf;charset=utf-8;base64,AAEAAAALAIAAAwAwT1MvMg8SBfAAAAC8AAAAYGNtYXAXVtKNAAABHAAAAFRnYXNwAAAAEAAAAXAAAAAIZ2x5ZgYydxIAAAF4AAAFNGhlYWQUJ7cIAAAGrAAAADZoaGVhB20DzAAABuQAAAAkaG10eCIABhQAAAcIAAAALGxvY2ED4AU6AAAHNAAAABhtYXhwAA8AjAAAB0wAAAAgbmFtZXsr690AAAdsAAABhnBvc3QAAwAAAAAI9AAAACAAAwPAAZAABQAAApkCzAAAAI8CmQLMAAAB6wAzAQkAAAAAAAAAAAAAAAAAAAABEAAAAAAAAAAAAAAAAAAAAABAAADpBgPA/8AAQAPAAEAAAAABAAAAAAAAAAAAAAAgAAAAAAADAAAAAwAAABwAAQADAAAAHAADAAEAAAAcAAQAOAAAAAoACAACAAIAAQAg6Qb//f//AAAAAAAg6QD//f//AAH/4xcEAAMAAQAAAAAAAAAAAAAAAQAB//8ADwABAAAAAAAAAAAAAgAANzkBAAAAAAEAAAAAAAAAAAACAAA3OQEAAAAAAQAAAAAAAAAAAAIAADc5AQAAAAABAWIAjQKeAskAEwAAJSc3NjQnJiIHAQYUFwEWMjc2NCcCnuLiDQ0MJAz/AA0NAQAMJAwNDcni4gwjDQwM/wANIwz/AA0NDCMNAAAAAQFiAI0CngLJABMAACUBNjQnASYiBwYUHwEHBhQXFjI3AZ4BAA0N/wAMJAwNDeLiDQ0MJAyNAQAMIw0BAAwMDSMM4uINIwwNDQAAAAIA4gC3Ax4CngATACcAACUnNzY0JyYiDwEGFB8BFjI3NjQnISc3NjQnJiIPAQYUHwEWMjc2NCcB87e3DQ0MIw3VDQ3VDSMMDQ0BK7e3DQ0MJAzVDQ3VDCQMDQ3zuLcMJAwNDdUNIwzWDAwNIwy4twwkDA0N1Q0jDNYMDA0jDAAAAgDiALcDHgKeABMAJwAAJTc2NC8BJiIHBhQfAQcGFBcWMjchNzY0LwEmIgcGFB8BBwYUFxYyNwJJ1Q0N1Q0jDA0Nt7cNDQwjDf7V1Q0N1QwkDA0Nt7cNDQwkDLfWDCMN1Q0NDCQMt7gMIw0MDNYMIw3VDQ0MJAy3uAwjDQwMAAADAFUAAAOrA1UAMwBoAHcAABMiBgcOAQcOAQcOARURFBYXHgEXHgEXHgEzITI2Nz4BNz4BNz4BNRE0JicuAScuAScuASMFITIWFx4BFx4BFx4BFREUBgcOAQcOAQcOASMhIiYnLgEnLgEnLgE1ETQ2Nz4BNz4BNz4BMxMhMjY1NCYjISIGFRQWM9UNGAwLFQkJDgUFBQUFBQ4JCRULDBgNAlYNGAwLFQkJDgUFBQUFBQ4JCRULDBgN/aoCVgQIBAQHAwMFAQIBAQIBBQMDBwQECAT9qgQIBAQHAwMFAQIBAQIBBQMDBwQECASAAVYRGRkR/qoRGRkRA1UFBAUOCQkVDAsZDf2rDRkLDBUJCA4FBQUFBQUOCQgVDAsZDQJVDRkLDBUJCQ4FBAVVAgECBQMCBwQECAX9qwQJAwQHAwMFAQICAgIBBQMDBwQDCQQCVQUIBAQHAgMFAgEC/oAZEhEZGRESGQAAAAADAFUAAAOrA1UAMwBoAIkAABMiBgcOAQcOAQcOARURFBYXHgEXHgEXHgEzITI2Nz4BNz4BNz4BNRE0JicuAScuAScuASMFITIWFx4BFx4BFx4BFREUBgcOAQcOAQcOASMhIiYnLgEnLgEnLgE1ETQ2Nz4BNz4BNz4BMxMzFRQWMzI2PQEzMjY1NCYrATU0JiMiBh0BIyIGFRQWM9UNGAwLFQkJDgUFBQUFBQ4JCRULDBgNAlYNGAwLFQkJDgUFBQUFBQ4JCRULDBgN/aoCVgQIBAQHAwMFAQIBAQIBBQMDBwQECAT9qgQIBAQHAwMFAQIBAQIBBQMDBwQECASAgBkSEhmAERkZEYAZEhIZgBEZGREDVQUEBQ4JCRUMCxkN/asNGQsMFQkIDgUFBQUFBQ4JCBUMCxkNAlUNGQsMFQkJDgUEBVUCAQIFAwIHBAQIBf2rBAkDBAcDAwUBAgICAgEFAwMHBAMJBAJVBQgEBAcCAwUCAQL+gIASGRkSgBkSERmAEhkZEoAZERIZAAABAOIAjQMeAskAIAAAExcHBhQXFjI/ARcWMjc2NC8BNzY0JyYiDwEnJiIHBhQX4uLiDQ0MJAzi4gwkDA0N4uINDQwkDOLiDCQMDQ0CjeLiDSMMDQ3h4Q0NDCMN4uIMIw0MDOLiDAwNIwwAAAABAAAAAQAAa5n0y18PPPUACwQAAAAAANivOVsAAAAA2K85WwAAAAADqwNVAAAACAACAAAAAAAAAAEAAAPA/8AAAAQAAAAAAAOrAAEAAAAAAAAAAAAAAAAAAAALBAAAAAAAAAAAAAAAAgAAAAQAAWIEAAFiBAAA4gQAAOIEAABVBAAAVQQAAOIAAAAAAAoAFAAeAEQAagCqAOoBngJkApoAAQAAAAsAigADAAAAAAACAAAAAAAAAAAAAAAAAAAAAAAAAA4ArgABAAAAAAABAAcAAAABAAAAAAACAAcAYAABAAAAAAADAAcANgABAAAAAAAEAAcAdQABAAAAAAAFAAsAFQABAAAAAAAGAAcASwABAAAAAAAKABoAigADAAEECQABAA4ABwADAAEECQACAA4AZwADAAEECQADAA4APQADAAEECQAEAA4AfAADAAEECQAFABYAIAADAAEECQAGAA4AUgADAAEECQAKADQApGZjaWNvbnMAZgBjAGkAYwBvAG4Ac1ZlcnNpb24gMS4wAFYAZQByAHMAaQBvAG4AIAAxAC4AMGZjaWNvbnMAZgBjAGkAYwBvAG4Ac2ZjaWNvbnMAZgBjAGkAYwBvAG4Ac1JlZ3VsYXIAUgBlAGcAdQBsAGEAcmZjaWNvbnMAZgBjAGkAYwBvAG4Ac0ZvbnQgZ2VuZXJhdGVkIGJ5IEljb01vb24uAEYAbwBuAHQAIABnAGUAbgBlAHIAYQB0AGUAZAAgAGIAeQAgAEkAYwBvAE0AbwBvAG4ALgAAAAMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA=") format("truetype")}.fc-icon{speak:none;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;display:inline-block;font-family:fcicons!important;font-style:normal;font-variant:normal;font-weight:400;height:1em;line-height:1;text-align:center;text-transform:none;-webkit-user-select:none;-moz-user-select:none;user-select:none;width:1em}.fc-icon-chevron-left:before{content:"\\e900"}.fc-icon-chevron-right:before{content:"\\e901"}.fc-icon-chevrons-left:before{content:"\\e902"}.fc-icon-chevrons-right:before{content:"\\e903"}.fc-icon-minus-square:before{content:"\\e904"}.fc-icon-plus-square:before{content:"\\e905"}.fc-icon-x:before{content:"\\e906"}.fc .fc-button{border-radius:0;font-family:inherit;font-size:inherit;line-height:inherit;margin:0;overflow:visible;text-transform:none}.fc .fc-button:focus{outline:1px dotted;outline:5px auto -webkit-focus-ring-color}.fc .fc-button{-webkit-appearance:button}.fc .fc-button:not(:disabled){cursor:pointer}.fc .fc-button{background-color:transparent;border:1px solid transparent;border-radius:.25em;display:inline-block;font-size:1em;font-weight:400;line-height:1.5;padding:.4em .65em;text-align:center;-webkit-user-select:none;-moz-user-select:none;user-select:none;vertical-align:middle}.fc .fc-button:hover{text-decoration:none}.fc .fc-button:focus{box-shadow:0 0 0 .2rem rgba(44,62,80,.25);outline:0}.fc .fc-button:disabled{opacity:.65}.fc .fc-button-primary{background-color:var(--fc-button-bg-color);border-color:var(--fc-button-border-color);color:var(--fc-button-text-color)}.fc .fc-button-primary:hover{background-color:var(--fc-button-hover-bg-color);border-color:var(--fc-button-hover-border-color);color:var(--fc-button-text-color)}.fc .fc-button-primary:disabled{background-color:var(--fc-button-bg-color);border-color:var(--fc-button-border-color);color:var(--fc-button-text-color)}.fc .fc-button-primary:focus{box-shadow:0 0 0 .2rem rgba(76,91,106,.5)}.fc .fc-button-primary:not(:disabled).fc-button-active,.fc .fc-button-primary:not(:disabled):active{background-color:var(--fc-button-active-bg-color);border-color:var(--fc-button-active-border-color);color:var(--fc-button-text-color)}.fc .fc-button-primary:not(:disabled).fc-button-active:focus,.fc .fc-button-primary:not(:disabled):active:focus{box-shadow:0 0 0 .2rem rgba(76,91,106,.5)}.fc .fc-button .fc-icon{font-size:1.5em;vertical-align:middle}.fc .fc-button-group{display:inline-flex;position:relative;vertical-align:middle}.fc .fc-button-group>.fc-button{flex:1 1 auto;position:relative}.fc .fc-button-group>.fc-button.fc-button-active,.fc .fc-button-group>.fc-button:active,.fc .fc-button-group>.fc-button:focus,.fc .fc-button-group>.fc-button:hover{z-index:1}.fc-direction-ltr .fc-button-group>.fc-button:not(:first-child){border-bottom-left-radius:0;border-top-left-radius:0;margin-left:-1px}.fc-direction-ltr .fc-button-group>.fc-button:not(:last-child){border-bottom-right-radius:0;border-top-right-radius:0}.fc-direction-rtl .fc-button-group>.fc-button:not(:first-child){border-bottom-right-radius:0;border-top-right-radius:0;margin-right:-1px}.fc-direction-rtl .fc-button-group>.fc-button:not(:last-child){border-bottom-left-radius:0;border-top-left-radius:0}.fc .fc-toolbar{align-items:center;display:flex;justify-content:space-between}.fc .fc-toolbar.fc-header-toolbar{margin-bottom:1.5em}.fc .fc-toolbar.fc-footer-toolbar{margin-top:1.5em}.fc .fc-toolbar-title{font-size:1.75em;margin:0}.fc-direction-ltr .fc-toolbar>*>:not(:first-child){margin-left:.75em}.fc-direction-rtl .fc-toolbar>*>:not(:first-child){margin-right:.75em}.fc-direction-rtl .fc-toolbar-ltr{flex-direction:row-reverse}.fc .fc-scroller{-webkit-overflow-scrolling:touch;position:relative}.fc .fc-scroller-liquid{height:100%}.fc .fc-scroller-liquid-absolute{bottom:0;left:0;position:absolute;right:0;top:0}.fc .fc-scroller-harness{direction:ltr;overflow:hidden;position:relative}.fc .fc-scroller-harness-liquid{height:100%}.fc-direction-rtl .fc-scroller-harness>.fc-scroller{direction:rtl}.fc-theme-standard .fc-scrollgrid{border:1px solid var(--fc-border-color)}.fc .fc-scrollgrid,.fc .fc-scrollgrid table{table-layout:fixed;width:100%}.fc .fc-scrollgrid table{border-left-style:hidden;border-right-style:hidden;border-top-style:hidden}.fc .fc-scrollgrid{border-bottom-width:0;border-collapse:separate;border-right-width:0}.fc .fc-scrollgrid-liquid{height:100%}.fc .fc-scrollgrid-section,.fc .fc-scrollgrid-section table,.fc .fc-scrollgrid-section>td{height:1px}.fc .fc-scrollgrid-section-liquid>td{height:100%}.fc .fc-scrollgrid-section>*{border-left-width:0;border-top-width:0}.fc .fc-scrollgrid-section-footer>*,.fc .fc-scrollgrid-section-header>*{border-bottom-width:0}.fc .fc-scrollgrid-section-body table,.fc .fc-scrollgrid-section-footer table{border-bottom-style:hidden}.fc .fc-scrollgrid-section-sticky>*{background:var(--fc-page-bg-color);position:sticky;z-index:3}.fc .fc-scrollgrid-section-header.fc-scrollgrid-section-sticky>*{top:0}.fc .fc-scrollgrid-section-footer.fc-scrollgrid-section-sticky>*{bottom:0}.fc .fc-scrollgrid-sticky-shim{height:1px;margin-bottom:-1px}.fc-sticky{position:sticky}.fc .fc-view-harness{flex-grow:1;position:relative}.fc .fc-view-harness-active>.fc-view{bottom:0;left:0;position:absolute;right:0;top:0}.fc .fc-col-header-cell-cushion{display:inline-block;padding:2px 4px}.fc .fc-bg-event,.fc .fc-highlight,.fc .fc-non-business{bottom:0;left:0;position:absolute;right:0;top:0}.fc .fc-non-business{background:var(--fc-non-business-color)}.fc .fc-bg-event{background:var(--fc-bg-event-color);opacity:var(--fc-bg-event-opacity)}.fc .fc-bg-event .fc-event-title{font-size:var(--fc-small-font-size);font-style:italic;margin:.5em}.fc .fc-highlight{background:var(--fc-highlight-color)}.fc .fc-cell-shaded,.fc .fc-day-disabled{background:var(--fc-neutral-bg-color)}a.fc-event,a.fc-event:hover{text-decoration:none}.fc-event.fc-event-draggable,.fc-event[href]{cursor:pointer}.fc-event .fc-event-main{position:relative;z-index:2}.fc-event-dragging:not(.fc-event-selected){opacity:.75}.fc-event-dragging.fc-event-selected{box-shadow:0 2px 7px rgba(0,0,0,.3)}.fc-event .fc-event-resizer{display:none;position:absolute;z-index:4}.fc-event-selected .fc-event-resizer,.fc-event:hover .fc-event-resizer{display:block}.fc-event-selected .fc-event-resizer{background:var(--fc-page-bg-color);border-color:inherit;border-radius:calc(var(--fc-event-resizer-dot-total-width)/2);border-style:solid;border-width:var(--fc-event-resizer-dot-border-width);height:var(--fc-event-resizer-dot-total-width);width:var(--fc-event-resizer-dot-total-width)}.fc-event-selected .fc-event-resizer:before{bottom:-20px;content:"";left:-20px;position:absolute;right:-20px;top:-20px}.fc-event-selected,.fc-event:focus{box-shadow:0 2px 5px rgba(0,0,0,.2)}.fc-event-selected:before,.fc-event:focus:before{bottom:0;content:"";left:0;position:absolute;right:0;top:0;z-index:3}.fc-event-selected:after,.fc-event:focus:after{background:var(--fc-event-selected-overlay-color);bottom:-1px;content:"";left:-1px;position:absolute;right:-1px;top:-1px;z-index:1}.fc-h-event{background-color:var(--fc-event-bg-color);border:1px solid var(--fc-event-border-color);display:block}.fc-h-event .fc-event-main{color:var(--fc-event-text-color)}.fc-h-event .fc-event-main-frame{display:flex}.fc-h-event .fc-event-time{max-width:100%;overflow:hidden}.fc-h-event .fc-event-title-container{flex-grow:1;flex-shrink:1;min-width:0}.fc-h-event .fc-event-title{display:inline-block;left:0;max-width:100%;overflow:hidden;right:0;vertical-align:top}.fc-h-event.fc-event-selected:before{bottom:-10px;top:-10px}.fc-direction-ltr .fc-daygrid-block-event:not(.fc-event-start),.fc-direction-rtl .fc-daygrid-block-event:not(.fc-event-end){border-bottom-left-radius:0;border-left-width:0;border-top-left-radius:0}.fc-direction-ltr .fc-daygrid-block-event:not(.fc-event-end),.fc-direction-rtl .fc-daygrid-block-event:not(.fc-event-start){border-bottom-right-radius:0;border-right-width:0;border-top-right-radius:0}.fc-h-event:not(.fc-event-selected) .fc-event-resizer{bottom:0;top:0;width:var(--fc-event-resizer-thickness)}.fc-direction-ltr .fc-h-event:not(.fc-event-selected) .fc-event-resizer-start,.fc-direction-rtl .fc-h-event:not(.fc-event-selected) .fc-event-resizer-end{cursor:w-resize;left:calc(var(--fc-event-resizer-thickness)*-.5)}.fc-direction-ltr .fc-h-event:not(.fc-event-selected) .fc-event-resizer-end,.fc-direction-rtl .fc-h-event:not(.fc-event-selected) .fc-event-resizer-start{cursor:e-resize;right:calc(var(--fc-event-resizer-thickness)*-.5)}.fc-h-event.fc-event-selected .fc-event-resizer{margin-top:calc(var(--fc-event-resizer-dot-total-width)*-.5);top:50%}.fc-direction-ltr .fc-h-event.fc-event-selected .fc-event-resizer-start,.fc-direction-rtl .fc-h-event.fc-event-selected .fc-event-resizer-end{left:calc(var(--fc-event-resizer-dot-total-width)*-.5)}.fc-direction-ltr .fc-h-event.fc-event-selected .fc-event-resizer-end,.fc-direction-rtl .fc-h-event.fc-event-selected .fc-event-resizer-start{right:calc(var(--fc-event-resizer-dot-total-width)*-.5)}.fc .fc-popover{box-shadow:0 2px 6px rgba(0,0,0,.15);position:absolute;z-index:9999}.fc .fc-popover-header{align-items:center;display:flex;flex-direction:row;justify-content:space-between;padding:3px 4px}.fc .fc-popover-title{margin:0 2px}.fc .fc-popover-close{cursor:pointer;font-size:1.1em;opacity:.65}.fc-theme-standard .fc-popover{background:var(--fc-page-bg-color);border:1px solid var(--fc-border-color)}.fc-theme-standard .fc-popover-header{background:var(--fc-neutral-bg-color)}';
ao(Lp);
class Da {
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
function Ia(t) {
  t.parentNode && t.parentNode.removeChild(t);
}
function ze(t, e) {
  if (t.closest)
    return t.closest(e);
  if (!document.documentElement.contains(t))
    return null;
  do {
    if (Hp(t, e))
      return t;
    t = t.parentElement || t.parentNode;
  } while (t !== null && t.nodeType === 1);
  return null;
}
function Hp(t, e) {
  return (t.matches || t.matchesSelector || t.msMatchesSelector).call(t, e);
}
function Vp(t, e) {
  let n = t instanceof HTMLElement ? [t] : t, a = [];
  for (let i = 0; i < n.length; i += 1) {
    let r = n[i].querySelectorAll(e);
    for (let o = 0; o < r.length; o += 1)
      a.push(r[o]);
  }
  return a;
}
const jp = /(top|left|right|bottom|width|height)$/i;
function jt(t, e) {
  for (let n in e)
    oo(t, n, e[n]);
}
function oo(t, e, n) {
  n == null ? t.style[e] = "" : typeof n == "number" && jp.test(e) ? t.style[e] = `${n}px` : t.style[e] = n;
}
function so(t) {
  var e, n;
  return (n = (e = t.composedPath) === null || e === void 0 ? void 0 : e.call(t)[0]) !== null && n !== void 0 ? n : t.target;
}
let Mi = 0;
function $n() {
  return Mi += 1, "fc-dom-" + Mi;
}
function Pn(t) {
  t.preventDefault();
}
function Up(t, e) {
  return (n) => {
    let a = ze(n.target, t);
    a && e.call(a, n, a);
  };
}
function lo(t, e, n, a) {
  let i = Up(n, a);
  return t.addEventListener(e, i), () => {
    t.removeEventListener(e, i);
  };
}
function Wp(t, e, n, a) {
  let i;
  return lo(t, "mouseover", e, (r, o) => {
    if (o !== i) {
      i = o, n(r, o);
      let s = (u) => {
        i = null, a(u, o), o.removeEventListener("mouseleave", s);
      };
      o.addEventListener("mouseleave", s);
    }
  });
}
const Ni = [
  "webkitTransitionEnd",
  "otransitionend",
  "oTransitionEnd",
  "msTransitionEnd",
  "transitionend"
];
function Yp(t, e) {
  let n = (a) => {
    e(a), Ni.forEach((i) => {
      t.removeEventListener(i, n);
    });
  };
  Ni.forEach((a) => {
    t.addEventListener(a, n);
  });
}
function uo(t) {
  return Object.assign({ onClick: t }, co(t));
}
function co(t) {
  return {
    tabIndex: 0,
    onKeyDown(e) {
      (e.key === "Enter" || e.key === " ") && (t(e), e.preventDefault());
    }
  };
}
let Di = 0;
function wt() {
  return Di += 1, String(Di);
}
function Oa() {
  document.body.classList.add("fc-not-allowed");
}
function Ra() {
  document.body.classList.remove("fc-not-allowed");
}
function Gp(t) {
  t.style.userSelect = "none", t.style.webkitUserSelect = "none", t.addEventListener("selectstart", Pn);
}
function Kp(t) {
  t.style.userSelect = "", t.style.webkitUserSelect = "", t.removeEventListener("selectstart", Pn);
}
function qp(t) {
  t.addEventListener("contextmenu", Pn);
}
function Qp(t) {
  t.removeEventListener("contextmenu", Pn);
}
function Zp(t) {
  let e = [], n = [], a, i;
  for (typeof t == "string" ? n = t.split(/\s*,\s*/) : typeof t == "function" ? n = [t] : Array.isArray(t) && (n = t), a = 0; a < n.length; a += 1)
    i = n[a], typeof i == "string" ? e.push(i.charAt(0) === "-" ? { field: i.substring(1), order: -1 } : { field: i, order: 1 }) : typeof i == "function" && e.push({ func: i });
  return e;
}
function Jp(t, e, n) {
  let a, i;
  for (a = 0; a < n.length; a += 1)
    if (i = Xp(t, e, n[a]), i)
      return i;
  return 0;
}
function Xp(t, e, n) {
  return n.func ? n.func(t, e) : eg(t[n.field], e[n.field]) * (n.order || 1);
}
function eg(t, e) {
  return !t && !e ? 0 : e == null ? -1 : t == null ? 1 : typeof t == "string" || typeof e == "string" ? String(t).localeCompare(String(e)) : t - e;
}
function Qn(t, e) {
  let n = String(t);
  return "000".substr(0, e - n.length) + n;
}
function Ut(t, e, n) {
  return typeof t == "function" ? t(...e) : typeof t == "string" ? e.reduce((a, i, r) => a.replace("$" + r, i || ""), t) : n;
}
function tg(t, e) {
  return t - e;
}
function Zn(t) {
  return t % 1 === 0;
}
function ng(t) {
  let e = t.querySelector(".fc-scrollgrid-shrink-frame"), n = t.querySelector(".fc-scrollgrid-shrink-cushion");
  if (!e)
    throw new Error("needs fc-scrollgrid-shrink-frame className");
  if (!n)
    throw new Error("needs fc-scrollgrid-shrink-cushion className");
  return t.getBoundingClientRect().width - e.getBoundingClientRect().width + // the cell padding+border
  n.getBoundingClientRect().width;
}
const ag = /^(-?)(?:(\d+)\.)?(\d+):(\d\d)(?::(\d\d)(?:\.(\d\d\d))?)?/;
function Ce(t, e) {
  return typeof t == "string" ? ig(t) : typeof t == "object" && t ? Ii(t) : typeof t == "number" ? Ii({ [e || "milliseconds"]: t }) : null;
}
function ig(t) {
  let e = ag.exec(t);
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
function Ii(t) {
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
function rg(t, e) {
  return t.years === e.years && t.months === e.months && t.days === e.days && t.milliseconds === e.milliseconds;
}
function og(t, e) {
  return {
    years: t.years - e.years,
    months: t.months - e.months,
    days: t.days - e.days,
    milliseconds: t.milliseconds - e.milliseconds
  };
}
function sg(t) {
  return Ot(t) / 365;
}
function lg(t) {
  return Ot(t) / 30;
}
function Ot(t) {
  return Qt(t) / 864e5;
}
function Qt(t) {
  return t.years * (365 * 864e5) + t.months * (30 * 864e5) + t.days * 864e5 + t.milliseconds;
}
function ha(t) {
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
function lt(t, e, n) {
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
const ug = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"];
function Oi(t, e) {
  let n = it(t);
  return n[2] += e * 7, je(n);
}
function Be(t, e) {
  let n = it(t);
  return n[2] += e, je(n);
}
function ut(t, e) {
  let n = it(t);
  return n[6] += e, je(n);
}
function cg(t, e) {
  return Lt(t, e) / 7;
}
function Lt(t, e) {
  return (e.valueOf() - t.valueOf()) / (1e3 * 60 * 60 * 24);
}
function dg(t, e) {
  return (e.valueOf() - t.valueOf()) / (1e3 * 60 * 60);
}
function fg(t, e) {
  return (e.valueOf() - t.valueOf()) / (1e3 * 60);
}
function mg(t, e) {
  return (e.valueOf() - t.valueOf()) / 1e3;
}
function hg(t, e) {
  let n = Me(t), a = Me(e);
  return {
    years: 0,
    months: 0,
    days: Math.round(Lt(n, a)),
    milliseconds: e.valueOf() - a.valueOf() - (t.valueOf() - n.valueOf())
  };
}
function vg(t, e) {
  let n = _n(t, e);
  return n !== null && n % 7 === 0 ? n / 7 : null;
}
function _n(t, e) {
  return rt(t) === rt(e) ? Math.round(Lt(t, e)) : null;
}
function Me(t) {
  return je([
    t.getUTCFullYear(),
    t.getUTCMonth(),
    t.getUTCDate()
  ]);
}
function pg(t) {
  return je([
    t.getUTCFullYear(),
    t.getUTCMonth(),
    t.getUTCDate(),
    t.getUTCHours()
  ]);
}
function gg(t) {
  return je([
    t.getUTCFullYear(),
    t.getUTCMonth(),
    t.getUTCDate(),
    t.getUTCHours(),
    t.getUTCMinutes()
  ]);
}
function yg(t) {
  return je([
    t.getUTCFullYear(),
    t.getUTCMonth(),
    t.getUTCDate(),
    t.getUTCHours(),
    t.getUTCMinutes(),
    t.getUTCSeconds()
  ]);
}
function bg(t, e, n) {
  let a = t.getUTCFullYear(), i = Jn(t, a, e, n);
  if (i < 1)
    return Jn(t, a - 1, e, n);
  let r = Jn(t, a + 1, e, n);
  return r >= 1 ? Math.min(i, r) : i;
}
function Jn(t, e, n, a) {
  let i = je([e, 0, 1 + Cg(e, n, a)]), r = Me(t), o = Math.round(Lt(i, r));
  return Math.floor(o / 7) + 1;
}
function Cg(t, e, n) {
  let a = 7 + e - n;
  return -((7 + je([t, 0, a]).getUTCDay() - e) % 7) + a - 1;
}
function Ri(t) {
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
function xi(t) {
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
function it(t) {
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
function fo(t) {
  return !isNaN(t.valueOf());
}
function rt(t) {
  return t.getUTCHours() * 1e3 * 60 * 60 + t.getUTCMinutes() * 1e3 * 60 + t.getUTCSeconds() * 1e3 + t.getUTCMilliseconds();
}
function wg(t, e, n = !1) {
  let a = t.toISOString();
  return a = a.replace(".000", ""), n && (a = a.replace("T00:00:00Z", "")), a.length > 10 && (e == null ? a = a.replace("Z", "") : e !== 0 && (a = a.replace("Z", $a(e, !0)))), a;
}
function xa(t) {
  return t.toISOString().replace(/T.*$/, "");
}
function Ag(t) {
  return t.toISOString().match(/^\d{4}-\d{2}/)[0];
}
function $a(t, e = !1) {
  let n = t < 0 ? "-" : "+", a = Math.abs(t), i = Math.floor(a / 60), r = Math.round(a % 60);
  return e ? `${n + Qn(i, 2)}:${Qn(r, 2)}` : `GMT${n}${i}${r ? `:${Qn(r, 2)}` : ""}`;
}
function be(t, e, n) {
  let a, i;
  return function(...r) {
    if (!a)
      i = t.apply(this, r);
    else if (!lt(a, r)) {
      let o = t.apply(this, r);
      (!e || !e(o, i)) && (i = o);
    }
    return a = r, i;
  };
}
function vn(t, e, n) {
  let a, i;
  return (r) => (a ? qe(a, r) || (i = t.call(this, r)) : i = t.call(this, r), a = r, i);
}
const Xn = {
  week: 3,
  separator: 9,
  omitZeroMinute: 9,
  meridiem: 9,
  omitCommas: 9
}, kn = {
  timeZoneName: 7,
  era: 6,
  year: 5,
  month: 4,
  day: 2,
  weekday: 2,
  hour: 1,
  minute: 1,
  second: 1
}, rn = /\s*([ap])\.?m\.?/i, _g = /,/g, kg = /\s+/g, Sg = /\u200e/g, Tg = /UTC|GMT/;
class Eg {
  constructor(e) {
    let n = {}, a = {}, i = 9;
    for (let r in e)
      r in Xn ? (a[r] = e[r], Xn[r] < 9 && (i = Math.min(Xn[r], i))) : (n[r] = e[r], r in kn && (i = Math.min(kn[r], i)));
    this.standardDateProps = n, this.extendedSettings = a, this.smallestUnitNum = i, this.buildFormattingFunc = be($i);
  }
  format(e, n) {
    return this.buildFormattingFunc(this.standardDateProps, this.extendedSettings, n)(e);
  }
  formatRange(e, n, a, i) {
    let { standardDateProps: r, extendedSettings: o } = this, s = Rg(e.marker, n.marker, a.calendarSystem);
    if (!s)
      return this.format(e, a);
    let u = s;
    u > 1 && // the two dates are different in a way that's larger scale than time
    (r.year === "numeric" || r.year === "2-digit") && (r.month === "numeric" || r.month === "2-digit") && (r.day === "numeric" || r.day === "2-digit") && (u = 1);
    let c = this.format(e, a), d = this.format(n, a);
    if (c === d)
      return c;
    let h = xg(r, u), p = $i(h, o, a), v = p(e), y = p(n), g = $g(c, v, d, y), b = o.separator || i || a.defaultSeparator || "";
    return g ? g.before + v + b + y + g.after : c + b + d;
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
function $i(t, e, n) {
  let a = Object.keys(t).length;
  return a === 1 && t.timeZoneName === "short" ? (i) => $a(i.timeZoneOffset) : a === 0 && e.week ? (i) => Og(n.computeWeekNumber(i.marker), n.weekText, n.weekTextLong, n.locale, e.week) : Mg(t, e, n);
}
function Mg(t, e, n) {
  t = Object.assign({}, t), e = Object.assign({}, e), Ng(t, e), t.timeZone = "UTC";
  let a = new Intl.DateTimeFormat(n.locale.codes, t), i;
  if (e.omitZeroMinute) {
    let r = Object.assign({}, t);
    delete r.minute, i = new Intl.DateTimeFormat(n.locale.codes, r);
  }
  return (r) => {
    let { marker: o } = r, s;
    i && !o.getUTCMinutes() ? s = i : s = a;
    let u = s.format(o);
    return Dg(u, r, t, e, n);
  };
}
function Ng(t, e) {
  t.timeZoneName && (t.hour || (t.hour = "2-digit"), t.minute || (t.minute = "2-digit")), t.timeZoneName === "long" && (t.timeZoneName = "short"), e.omitZeroMinute && (t.second || t.millisecond) && delete e.omitZeroMinute;
}
function Dg(t, e, n, a, i) {
  return t = t.replace(Sg, ""), n.timeZoneName === "short" && (t = Ig(t, i.timeZone === "UTC" || e.timeZoneOffset == null ? "UTC" : (
    // important to normalize for IE, which does "GMT"
    $a(e.timeZoneOffset)
  ))), a.omitCommas && (t = t.replace(_g, "").trim()), a.omitZeroMinute && (t = t.replace(":00", "")), a.meridiem === !1 ? t = t.replace(rn, "").trim() : a.meridiem === "narrow" ? t = t.replace(rn, (r, o) => o.toLocaleLowerCase()) : a.meridiem === "short" ? t = t.replace(rn, (r, o) => `${o.toLocaleLowerCase()}m`) : a.meridiem === "lowercase" && (t = t.replace(rn, (r) => r.toLocaleLowerCase())), t = t.replace(kg, " "), t = t.trim(), t;
}
function Ig(t, e) {
  let n = !1;
  return t = t.replace(Tg, () => (n = !0, e)), n || (t += ` ${e}`), t;
}
function Og(t, e, n, a, i) {
  let r = [];
  return i === "long" ? r.push(n) : (i === "short" || i === "narrow") && r.push(e), (i === "long" || i === "short") && r.push(" "), r.push(a.simpleNumberFormat.format(t)), a.options.direction === "rtl" && r.reverse(), r.join("");
}
function Rg(t, e, n) {
  return n.getMarkerYear(t) !== n.getMarkerYear(e) ? 5 : n.getMarkerMonth(t) !== n.getMarkerMonth(e) ? 4 : n.getMarkerDay(t) !== n.getMarkerDay(e) ? 2 : rt(t) !== rt(e) ? 1 : 0;
}
function xg(t, e) {
  let n = {};
  for (let a in t)
    (!(a in kn) || // not a date part prop (like timeZone)
    kn[a] <= e) && (n[a] = t[a]);
  return n;
}
function $g(t, e, n, a) {
  let i = 0;
  for (; i < t.length; ) {
    let r = t.indexOf(e, i);
    if (r === -1)
      break;
    let o = t.substr(0, r);
    i = r + e.length;
    let s = t.substr(i), u = 0;
    for (; u < n.length; ) {
      let c = n.indexOf(a, u);
      if (c === -1)
        break;
      let d = n.substr(0, c);
      u = c + a.length;
      let h = n.substr(u);
      if (o === d && s === h)
        return {
          before: o,
          after: s
        };
    }
  }
  return null;
}
function Pi(t, e) {
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
function Sn(t, e, n, a) {
  let i = Pi(t, n.calendarSystem), r = e ? Pi(e, n.calendarSystem) : null;
  return {
    date: i,
    start: i,
    end: r,
    timeZone: n.timeZone,
    localeCodes: n.locale.codes,
    defaultSeparator: a || n.defaultSeparator
  };
}
class Pg {
  constructor(e) {
    this.cmdStr = e;
  }
  format(e, n, a) {
    return n.cmdFormatter(this.cmdStr, Sn(e, null, n, a));
  }
  formatRange(e, n, a, i) {
    return a.cmdFormatter(this.cmdStr, Sn(e, n, a, i));
  }
}
class Fg {
  constructor(e) {
    this.func = e;
  }
  format(e, n, a) {
    return this.func(Sn(e, null, n, a));
  }
  formatRange(e, n, a, i) {
    return this.func(Sn(e, n, a, i));
  }
}
function Fe(t) {
  return typeof t == "object" && t ? new Eg(t) : typeof t == "string" ? new Pg(t) : typeof t == "function" ? new Fg(t) : null;
}
const Fi = {
  navLinkDayClick: z,
  navLinkWeekClick: z,
  duration: Ce,
  bootstrapFontAwesome: z,
  buttonIcons: z,
  customButtons: z,
  defaultAllDayEventDuration: Ce,
  defaultTimedEventDuration: Ce,
  nextDayThreshold: Ce,
  scrollTime: Ce,
  scrollTimeReset: Boolean,
  slotMinTime: Ce,
  slotMaxTime: Ce,
  dayPopoverFormat: Fe,
  slotDuration: Ce,
  snapDuration: Ce,
  headerToolbar: z,
  footerToolbar: z,
  defaultRangeSeparator: String,
  titleRangeSeparator: String,
  forceEventDuration: Boolean,
  dayHeaders: Boolean,
  dayHeaderFormat: Fe,
  dayHeaderClassNames: z,
  dayHeaderContent: z,
  dayHeaderDidMount: z,
  dayHeaderWillUnmount: z,
  dayCellClassNames: z,
  dayCellContent: z,
  dayCellDidMount: z,
  dayCellWillUnmount: z,
  initialView: String,
  aspectRatio: Number,
  weekends: Boolean,
  weekNumberCalculation: z,
  weekNumbers: Boolean,
  weekNumberClassNames: z,
  weekNumberContent: z,
  weekNumberDidMount: z,
  weekNumberWillUnmount: z,
  editable: Boolean,
  viewClassNames: z,
  viewDidMount: z,
  viewWillUnmount: z,
  nowIndicator: Boolean,
  nowIndicatorSnap: z,
  nowIndicatorClassNames: z,
  nowIndicatorContent: z,
  nowIndicatorDidMount: z,
  nowIndicatorWillUnmount: z,
  showNonCurrentDates: Boolean,
  lazyFetching: Boolean,
  startParam: String,
  endParam: String,
  timeZoneParam: String,
  timeZone: String,
  locales: z,
  locale: z,
  themeSystem: String,
  dragRevertDuration: Number,
  dragScroll: Boolean,
  allDayMaintainDuration: Boolean,
  unselectAuto: Boolean,
  dropAccept: z,
  eventOrder: Zp,
  eventOrderStrict: Boolean,
  handleWindowResize: Boolean,
  windowResizeDelay: Number,
  longPressDelay: Number,
  eventDragMinDistance: Number,
  expandRows: Boolean,
  height: z,
  contentHeight: z,
  direction: String,
  weekNumberFormat: Fe,
  eventResizableFromStart: Boolean,
  displayEventTime: Boolean,
  displayEventEnd: Boolean,
  weekText: String,
  weekTextLong: String,
  progressiveEventRendering: Boolean,
  businessHours: z,
  initialDate: z,
  now: z,
  eventDataTransform: z,
  stickyHeaderDates: z,
  stickyFooterScrollbar: z,
  viewHeight: z,
  defaultAllDay: Boolean,
  eventSourceFailure: z,
  eventSourceSuccess: z,
  eventDisplay: String,
  eventStartEditable: Boolean,
  eventDurationEditable: Boolean,
  eventOverlap: z,
  eventConstraint: z,
  eventAllow: z,
  eventBackgroundColor: String,
  eventBorderColor: String,
  eventTextColor: String,
  eventColor: String,
  eventClassNames: z,
  eventContent: z,
  eventDidMount: z,
  eventWillUnmount: z,
  selectConstraint: z,
  selectOverlap: z,
  selectAllow: z,
  droppable: Boolean,
  unselectCancel: String,
  slotLabelFormat: z,
  slotLaneClassNames: z,
  slotLaneContent: z,
  slotLaneDidMount: z,
  slotLaneWillUnmount: z,
  slotLabelClassNames: z,
  slotLabelContent: z,
  slotLabelDidMount: z,
  slotLabelWillUnmount: z,
  dayMaxEvents: z,
  dayMaxEventRows: z,
  dayMinWidth: Number,
  slotLabelInterval: Ce,
  allDayText: String,
  allDayClassNames: z,
  allDayContent: z,
  allDayDidMount: z,
  allDayWillUnmount: z,
  slotMinWidth: Number,
  navLinks: Boolean,
  eventTimeFormat: Fe,
  rerenderDelay: Number,
  moreLinkText: z,
  moreLinkHint: z,
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
  plugins: z,
  firstDay: Number,
  dayCount: Number,
  dateAlignment: String,
  dateIncrement: Ce,
  hiddenDays: z,
  fixedWeekCount: Boolean,
  validRange: z,
  visibleRange: z,
  titleFormat: z,
  eventInteractive: Boolean,
  // only used by list-view, but languages define the value, so we need it in base options
  noEventsText: String,
  viewHint: z,
  navLinkHint: z,
  closeHint: String,
  timeHint: String,
  eventHint: String,
  moreLinkClick: z,
  moreLinkClassNames: z,
  moreLinkContent: z,
  moreLinkDidMount: z,
  moreLinkWillUnmount: z,
  monthStartFormat: Fe,
  // for connectors
  // (can't be part of plugin system b/c must be provided at runtime)
  handleCustomRendering: z,
  customRenderingMetaMap: z,
  customRenderingReplaces: Boolean
}, Wt = {
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
}, Bi = {
  datesSet: z,
  eventsSet: z,
  eventAdd: z,
  eventChange: z,
  eventRemove: z,
  windowResize: z,
  eventClick: z,
  eventMouseEnter: z,
  eventMouseLeave: z,
  select: z,
  unselect: z,
  loading: z,
  // internal
  _unmount: z,
  _beforeprint: z,
  _afterprint: z,
  _noEventDrop: z,
  _noEventResize: z,
  _resize: z,
  _scrollRequest: z
}, zi = {
  buttonText: z,
  buttonHints: z,
  views: z,
  plugins: z,
  initialEvents: z,
  events: z,
  eventSources: z
}, ft = {
  headerToolbar: mt,
  footerToolbar: mt,
  buttonText: mt,
  buttonHints: mt,
  buttonIcons: mt,
  dateIncrement: mt,
  plugins: on,
  events: on,
  eventSources: on,
  resources: on
};
function mt(t, e) {
  return typeof t == "object" && typeof e == "object" && t && e ? qe(t, e) : t === e;
}
function on(t, e) {
  return Array.isArray(t) && Array.isArray(e) ? lt(t, e) : t === e;
}
const Bg = {
  type: String,
  component: z,
  buttonText: String,
  buttonTextKey: String,
  dateProfileGeneratorClass: z,
  usesMinMaxTime: Boolean,
  classNames: z,
  content: z,
  didMount: z,
  willUnmount: z
};
function ea(t) {
  return Fa(t, ft);
}
function Pa(t, e) {
  let n = {}, a = {};
  for (let i in e)
    i in t && (n[i] = e[i](t[i]));
  for (let i in t)
    i in e || (a[i] = t[i]);
  return { refined: n, extra: a };
}
function z(t) {
  return t;
}
const { hasOwnProperty: Tn } = Object.prototype;
function Fa(t, e) {
  let n = {};
  if (e) {
    for (let a in e)
      if (e[a] === mt) {
        let i = [];
        for (let r = t.length - 1; r >= 0; r -= 1) {
          let o = t[r][a];
          if (typeof o == "object" && o)
            i.unshift(o);
          else if (o !== void 0) {
            n[a] = o;
            break;
          }
        }
        i.length && (n[a] = Fa(i));
      }
  }
  for (let a = t.length - 1; a >= 0; a -= 1) {
    let i = t[a];
    for (let r in i)
      r in n || (n[r] = i[r]);
  }
  return n;
}
function yt(t, e) {
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
function mo(t) {
  let e = {};
  for (let n of t)
    e[n] = !0;
  return e;
}
function Ba(t) {
  let e = [];
  for (let n in t)
    e.push(t[n]);
  return e;
}
function qe(t, e) {
  if (t === e)
    return !0;
  for (let n in t)
    if (Tn.call(t, n) && !(n in e))
      return !1;
  for (let n in e)
    if (Tn.call(e, n) && t[n] !== e[n])
      return !1;
  return !0;
}
const zg = /^on[A-Z]/;
function Lg(t, e) {
  const n = Hg(t, e);
  for (let a of n)
    if (!zg.test(a))
      return !1;
  return !0;
}
function Hg(t, e) {
  let n = [];
  for (let a in t)
    Tn.call(t, a) && (a in e || n.push(a));
  for (let a in e)
    Tn.call(e, a) && t[a] !== e[a] && n.push(a);
  return n;
}
function ta(t, e, n = {}) {
  if (t === e)
    return !0;
  for (let a in e)
    if (!(a in t && Vg(t[a], e[a], n[a]))) return !1;
  for (let a in t)
    if (!(a in e))
      return !1;
  return !0;
}
function Vg(t, e, n) {
  return t === e || n === !0 ? !0 : n ? n(t, e) : !1;
}
function jg(t, e = 0, n, a = 1) {
  let i = [];
  n == null && (n = Object.keys(t).length);
  for (let r = e; r < n; r += a) {
    let o = t[r];
    o !== void 0 && i.push(o);
  }
  return i;
}
let ho = {};
function Ug(t, e) {
  ho[t] = e;
}
function Wg(t) {
  return new ho[t]();
}
class Yg {
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
    return it(e);
  }
}
Ug("gregory", Yg);
const Gg = /^\s*(\d{4})(-?(\d{2})(-?(\d{2})([T ](\d{2}):?(\d{2})(:?(\d{2})(\.(\d+))?)?(Z|(([-+])(\d{2})(:?(\d{2}))?))?)?)?)?$/;
function Kg(t) {
  let e = Gg.exec(t);
  if (e) {
    let n = new Date(Date.UTC(Number(e[1]), e[3] ? Number(e[3]) - 1 : 0, Number(e[5] || 1), Number(e[7] || 0), Number(e[8] || 0), Number(e[10] || 0), e[12] ? +`0.${e[12]}` * 1e3 : 0));
    if (fo(n)) {
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
class qg {
  constructor(e) {
    let n = this.timeZone = e.timeZone, a = n !== "local" && n !== "UTC";
    e.namedTimeZoneImpl && a && (this.namedTimeZoneImpl = new e.namedTimeZoneImpl(n)), this.canComputeOffset = !!(!a || this.namedTimeZoneImpl), this.calendarSystem = Wg(e.calendarSystem), this.locale = e.locale, this.weekDow = e.locale.week.dow, this.weekDoy = e.locale.week.doy, e.weekNumberCalculation === "ISO" && (this.weekDow = 1, this.weekDoy = 4), typeof e.firstDay == "number" && (this.weekDow = e.firstDay), typeof e.weekNumberCalculation == "function" && (this.weekNumberFunc = e.weekNumberCalculation), this.weekText = e.weekText != null ? e.weekText : e.locale.options.weekText, this.weekTextLong = (e.weekTextLong != null ? e.weekTextLong : e.locale.options.weekTextLong) || this.weekText, this.cmdFormatter = e.cmdFormatter, this.defaultSeparator = e.defaultSeparator;
  }
  // Creating / Parsing
  createMarker(e) {
    let n = this.createMarkerMeta(e);
    return n === null ? null : n.marker;
  }
  createNowMarker() {
    return this.canComputeOffset ? this.timestampToMarker((/* @__PURE__ */ new Date()).valueOf()) : je(Ri(/* @__PURE__ */ new Date()));
  }
  createMarkerMeta(e) {
    if (typeof e == "string")
      return this.parse(e);
    let n = null;
    return typeof e == "number" ? n = this.timestampToMarker(e) : e instanceof Date ? (e = e.valueOf(), isNaN(e) || (n = this.timestampToMarker(e))) : Array.isArray(e) && (n = je(e)), n === null || !fo(n) ? null : { marker: n, isTimeUnspecified: !1, forcedTzo: null };
  }
  parse(e) {
    let n = Kg(e);
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
    return rt(e) === rt(n) && a.getMarkerDay(e) === a.getMarkerDay(n) && a.getMarkerMonth(e) === a.getMarkerMonth(n) ? a.getMarkerYear(n) - a.getMarkerYear(e) : null;
  }
  diffWholeMonths(e, n) {
    let { calendarSystem: a } = this;
    return rt(e) === rt(n) && a.getMarkerDay(e) === a.getMarkerDay(n) ? a.getMarkerMonth(n) - a.getMarkerMonth(e) + (a.getMarkerYear(n) - a.getMarkerYear(e)) * 12 : null;
  }
  // Range / Duration
  greatestWholeUnit(e, n) {
    let a = this.diffWholeYears(e, n);
    return a !== null ? { unit: "year", value: a } : (a = this.diffWholeMonths(e, n), a !== null ? { unit: "month", value: a } : (a = vg(e, n), a !== null ? { unit: "week", value: a } : (a = _n(e, n), a !== null ? { unit: "day", value: a } : (a = dg(e, n), Zn(a) ? { unit: "hour", value: a } : (a = fg(e, n), Zn(a) ? { unit: "minute", value: a } : (a = mg(e, n), Zn(a) ? { unit: "second", value: a } : { unit: "millisecond", value: n.valueOf() - e.valueOf() }))))));
  }
  countDurationsBetween(e, n, a) {
    let i;
    return a.years && (i = this.diffWholeYears(e, n), i !== null) ? i / sg(a) : a.months && (i = this.diffWholeMonths(e, n), i !== null) ? i / lg(a) : a.days && (i = _n(e, n), i !== null) ? i / Ot(a) : (n.valueOf() - e.valueOf()) / Qt(a);
  }
  // Start-Of
  // these DON'T return zoned-dates. only UTC start-of dates
  startOf(e, n) {
    return n === "year" ? this.startOfYear(e) : n === "month" ? this.startOfMonth(e) : n === "week" ? this.startOfWeek(e) : n === "day" ? Me(e) : n === "hour" ? pg(e) : n === "minute" ? gg(e) : n === "second" ? yg(e) : null;
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
    return this.weekNumberFunc ? this.weekNumberFunc(this.toDate(e)) : bg(e, this.weekDow, this.weekDoy);
  }
  // TODO: choke on timeZoneName: long
  format(e, n, a = {}) {
    return n.format({
      marker: e,
      timeZoneOffset: a.forcedTzo != null ? a.forcedTzo : this.offsetForMarker(e)
    }, this);
  }
  formatRange(e, n, a, i = {}) {
    return i.isEndExclusive && (n = ut(n, -1)), a.formatRange({
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
    return n.omitTimeZoneOffset || (n.forcedTzo != null ? a = n.forcedTzo : a = this.offsetForMarker(e)), wg(e, a, n.omitTime);
  }
  // TimeZone
  timestampToMarker(e) {
    return this.timeZone === "local" ? je(Ri(new Date(e))) : this.timeZone === "UTC" || !this.namedTimeZoneImpl ? new Date(e) : je(this.namedTimeZoneImpl.timestampToArray(e));
  }
  offsetForMarker(e) {
    return this.timeZone === "local" ? -xi(it(e)).getTimezoneOffset() : this.timeZone === "UTC" ? 0 : this.namedTimeZoneImpl ? this.namedTimeZoneImpl.offsetForArray(it(e)) : null;
  }
  // Conversion
  toDate(e, n) {
    return this.timeZone === "local" ? xi(it(e)) : this.timeZone === "UTC" ? new Date(e.valueOf()) : this.namedTimeZoneImpl ? new Date(e.valueOf() - this.namedTimeZoneImpl.offsetForArray(it(e)) * 1e3 * 60) : new Date(e.valueOf() - (n || 0));
  }
}
class Jt {
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
Jt.prototype.classes = {};
Jt.prototype.iconClasses = {};
Jt.prototype.baseIconClass = "";
Jt.prototype.iconOverridePrefix = "";
function En(t) {
  t();
  let e = de.debounceRendering, n = [];
  function a(i) {
    n.push(i);
  }
  for (de.debounceRendering = a, qt(H(Qg, {}), document.createElement("div")); n.length; )
    n.shift()();
  de.debounceRendering = e;
}
class Qg extends Ue {
  render() {
    return H("div", {});
  }
  componentDidMount() {
    this.setState({});
  }
}
function vo(t) {
  let e = wp(t), n = e.Provider;
  return e.Provider = function() {
    let a = !this.getChildContext, i = n.apply(this, arguments);
    if (a) {
      let r = [];
      this.shouldComponentUpdate = (o) => {
        this.props.value !== o.value && r.forEach((s) => {
          s.context = o.value, s.forceUpdate();
        });
      }, this.sub = (o) => {
        r.push(o);
        let s = o.componentWillUnmount;
        o.componentWillUnmount = () => {
          r.splice(r.indexOf(o), 1), s && s.call(o);
        };
      };
    }
    return i;
  }, e;
}
class Zg {
  constructor(e, n, a, i) {
    this.execFunc = e, this.emitter = n, this.scrollTime = a, this.scrollTimeReset = i, this.handleScrollRequest = (r) => {
      this.queuedRequest = Object.assign({}, this.queuedRequest || {}, r), this.drain();
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
const _t = vo({});
function Jg(t, e, n, a, i, r, o, s, u, c, d, h, p, v) {
  return {
    dateEnv: i,
    nowManager: r,
    options: n,
    pluginHooks: s,
    emitter: d,
    dispatch: u,
    getCurrentData: c,
    calendarApi: h,
    viewSpec: t,
    viewApi: e,
    dateProfileGenerator: a,
    theme: o,
    isRtl: n.direction === "rtl",
    addResizeHandler(y) {
      d.on("_resize", y);
    },
    removeResizeHandler(y) {
      d.off("_resize", y);
    },
    createScrollResponder(y) {
      return new Zg(y, d, Ce(n.scrollTime), n.scrollTimeReset);
    },
    registerInteractiveComponent: p,
    unregisterInteractiveComponent: v
  };
}
class kt extends Ue {
  // debug: boolean
  shouldComponentUpdate(e, n) {
    return !ta(
      this.props,
      e,
      this.propEquality
      /*, this.debug */
    ) || !ta(
      this.state,
      n,
      this.stateEquality
      /*, this.debug */
    );
  }
  // HACK for freakin' React StrictMode
  safeSetState(e) {
    ta(this.state, Object.assign(Object.assign({}, this.state), e), this.stateEquality) || this.setState(e);
  }
}
kt.addPropsEquality = Xg;
kt.addStateEquality = ey;
kt.contextType = _t;
kt.prototype.propEquality = {};
kt.prototype.stateEquality = {};
class Ie extends kt {
}
Ie.contextType = _t;
function Xg(t) {
  let e = Object.create(this.prototype.propEquality);
  Object.assign(e, t), this.prototype.propEquality = e;
}
function ey(t) {
  let e = Object.create(this.prototype.stateEquality);
  Object.assign(e, t), this.prototype.stateEquality = e;
}
function Ze(t, e) {
  typeof t == "function" ? t(e) : t && (t.current = e);
}
class za extends Ie {
  constructor() {
    super(...arguments), this.id = wt(), this.queuedDomNodes = [], this.currentDomNodes = [], this.handleEl = (e) => {
      const { options: n } = this.context, { generatorName: a } = this.props;
      (!n.customRenderingReplaces || !va(a, n)) && this.updateElRef(e);
    }, this.updateElRef = (e) => {
      this.props.elRef && Ze(this.props.elRef, e);
    };
  }
  render() {
    const { props: e, context: n } = this, { options: a } = n, { customGenerator: i, defaultGenerator: r, renderProps: o } = e, s = po(e, [], this.handleEl);
    let u = !1, c, d = [], h;
    if (i != null) {
      const p = typeof i == "function" ? i(o, H) : i;
      if (p === !0)
        u = !0;
      else {
        const v = p && typeof p == "object";
        v && "html" in p ? s.dangerouslySetInnerHTML = { __html: p.html } : v && "domNodes" in p ? d = Array.prototype.slice.call(p.domNodes) : (v ? zr(p) : typeof p != "function") ? c = p : h = p;
      }
    } else
      u = !va(e.generatorName, a);
    return u && r && (c = r(o)), this.queuedDomNodes = d, this.currentGeneratorMeta = h, H(e.elTag, s, c);
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
    const { props: a, context: i } = this, { handleCustomRendering: r, customRenderingMetaMap: o } = i.options;
    if (r) {
      const s = (n = this.currentGeneratorMeta) !== null && n !== void 0 ? n : o?.[a.generatorName];
      s && r(Object.assign(Object.assign({
        id: this.id,
        isActive: e,
        containerEl: this.base,
        reportNewContainerEl: this.updateElRef,
        // front-end framework tells us about new container els
        generatorMeta: s
      }, a), { elClasses: (a.elClasses || []).filter(ty) }));
    }
  }
  applyQueueudDomNodes() {
    const { queuedDomNodes: e, currentDomNodes: n } = this, a = this.base;
    if (!lt(e, n)) {
      n.forEach(Ia);
      for (let i of e)
        a.appendChild(i);
      this.currentDomNodes = e;
    }
  }
}
za.addPropsEquality({
  elClasses: lt,
  elStyle: qe,
  elAttrs: Lg,
  renderProps: qe
});
function va(t, e) {
  var n;
  return !!(e.handleCustomRendering && t && (!((n = e.customRenderingMetaMap) === null || n === void 0) && n[t]));
}
function po(t, e, n) {
  const a = Object.assign(Object.assign({}, t.elAttrs), { ref: n });
  return (t.elClasses || e) && (a.className = (t.elClasses || []).concat(e || []).concat(a.className || []).filter(Boolean).join(" ")), t.elStyle && (a.style = t.elStyle), a;
}
function ty(t) {
  return !!t;
}
const go = vo(0);
class tt extends Ue {
  constructor() {
    super(...arguments), this.InnerContent = ny.bind(void 0, this), this.handleEl = (e) => {
      this.el = e, this.props.elRef && (Ze(this.props.elRef, e), e && this.didMountMisfire && this.componentDidMount());
    };
  }
  render() {
    const { props: e } = this, n = ay(e.classNameGenerator, e.renderProps);
    if (e.children) {
      const a = po(e, n, this.handleEl), i = e.children(this.InnerContent, e.renderProps, a);
      return e.elTag ? H(e.elTag, a, i) : i;
    } else
      return H(za, Object.assign(Object.assign({}, e), { elRef: this.handleEl, elTag: e.elTag || "div", elClasses: (e.elClasses || []).concat(n), renderId: this.context }));
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
tt.contextType = go;
function ny(t, e) {
  const n = t.props;
  return H(za, Object.assign({ renderProps: n.renderProps, generatorName: n.generatorName, customGenerator: n.customGenerator, defaultGenerator: n.defaultGenerator, renderId: t.context }, e));
}
function ay(t, e) {
  const n = typeof t == "function" ? t(e) : t || [];
  return typeof n == "string" ? [n] : n;
}
class Li extends Ie {
  render() {
    let { props: e, context: n } = this, { options: a } = n, i = { view: n.viewApi };
    return H(tt, { elRef: e.elRef, elTag: e.elTag || "div", elAttrs: e.elAttrs, elClasses: [
      ...yo(e.viewSpec),
      ...e.elClasses || []
    ], elStyle: e.elStyle, renderProps: i, classNameGenerator: a.viewClassNames, generatorName: void 0, didMount: a.viewDidMount, willUnmount: a.viewWillUnmount }, () => e.children);
  }
}
function yo(t) {
  return [
    `fc-${t.type}-view`,
    "fc-view"
  ];
}
function iy(t, e) {
  let n = null, a = null;
  return t.start && (n = e.createMarker(t.start)), t.end && (a = e.createMarker(t.end)), !n && !a || n && a && a < n ? null : { start: n, end: a };
}
function Hi(t, e) {
  let n = [], { start: a } = e, i, r;
  for (t.sort(ry), i = 0; i < t.length; i += 1)
    r = t[i], r.start > a && n.push({ start: a, end: r.start }), r.end > a && (a = r.end);
  return a < e.end && n.push({ start: a, end: e.end }), n;
}
function ry(t, e) {
  return t.start.valueOf() - e.start.valueOf();
}
function Pt(t, e) {
  let { start: n, end: a } = t, i = null;
  return e.start !== null && (n === null ? n = e.start : n = new Date(Math.max(n.valueOf(), e.start.valueOf()))), e.end != null && (a === null ? a = e.end : a = new Date(Math.min(a.valueOf(), e.end.valueOf()))), (n === null || a === null || n < a) && (i = { start: n, end: a }), i;
}
function oy(t, e) {
  return (t.start === null ? null : t.start.valueOf()) === (e.start === null ? null : e.start.valueOf()) && (t.end === null ? null : t.end.valueOf()) === (e.end === null ? null : e.end.valueOf());
}
function La(t, e) {
  return (t.end === null || e.start === null || t.end > e.start) && (t.start === null || e.end === null || t.start < e.end);
}
function Fn(t, e) {
  return (t.start === null || e.start !== null && e.start >= t.start) && (t.end === null || e.end !== null && e.end <= t.end);
}
function ot(t, e) {
  return (t.start === null || e >= t.start) && (t.end === null || e < t.end);
}
function sy(t, e) {
  return e.start != null && t < e.start ? e.start : e.end != null && t >= e.end ? new Date(e.end.valueOf() - 1) : t;
}
function bo(t) {
  let e = Math.floor(Lt(t.start, t.end)) || 1, n = Me(t.start), a = Be(n, e);
  return { start: n, end: a };
}
function Co(t, e = Ce(0)) {
  let n = null, a = null;
  if (t.end) {
    a = Me(t.end);
    let i = t.end.valueOf() - a.valueOf();
    i && i >= Qt(e) && (a = Be(a, 1));
  }
  return t.start && (n = Me(t.start), a && a <= n && (a = Be(n, 1))), { start: n, end: a };
}
function Dt(t, e, n, a) {
  return a === "year" ? Ce(n.diffWholeYears(t, e), "year") : a === "month" ? Ce(n.diffWholeMonths(t, e), "month") : hg(t, e);
}
class wo {
  constructor(e) {
    this.props = e, this.initHiddenDays();
  }
  /* Date Range Computation
  ------------------------------------------------------------------------------------------------------------------*/
  // Builds a structure with info about what the dates/ranges will be for the "prev" view.
  buildPrev(e, n, a) {
    let { dateEnv: i } = this.props, r = i.subtract(
      i.startOf(n, e.currentRangeUnit),
      // important for start-of-month
      e.dateIncrement
    );
    return this.build(r, -1, a);
  }
  // Builds a structure with info about what the dates/ranges will be for the "next" view.
  buildNext(e, n, a) {
    let { dateEnv: i } = this.props, r = i.add(
      i.startOf(n, e.currentRangeUnit),
      // important for start-of-month
      e.dateIncrement
    );
    return this.build(r, 1, a);
  }
  // Builds a structure holding dates/ranges for rendering around the given date.
  // Optional direction param indicates whether the date is being incremented/decremented
  // from its previous value. decremented = -1, incremented = 1 (default).
  build(e, n, a = !0) {
    let { props: i } = this, r, o, s, u, c, d;
    return r = this.buildValidRange(), r = this.trimHiddenDays(r), a && (e = sy(e, r)), o = this.buildCurrentRangeInfo(e, n), s = /^(year|month|week|day)$/.test(o.unit), u = this.buildRenderRange(this.trimHiddenDays(o.range), o.unit, s), u = this.trimHiddenDays(u), c = u, i.showNonCurrentDates || (c = Pt(c, o.range)), c = this.adjustActiveRange(c), c = Pt(c, r), d = La(o.range, r), ot(u, e) || (e = u.start), {
      currentDate: e,
      // constraint for where prev/next operations can go and where events can be dragged/resized to.
      // an object with optional start and end properties.
      validRange: r,
      // range the view is formally responsible for.
      // for example, a month view might have 1st-31st, excluding padded dates
      currentRange: o.range,
      // name of largest unit being displayed, like "month" or "week"
      currentRangeUnit: o.unit,
      isRangeAllDay: s,
      // dates that display events and accept drag-n-drop
      // will be `null` if no dates accept events
      activeRange: c,
      // date range with a rendered skeleton
      // includes not-active days that need some sort of DOM
      renderRange: u,
      // Duration object that denotes the first visible time of any given day
      slotMinTime: i.slotMinTime,
      // Duration object that denotes the exclusive visible end time of any given day
      slotMaxTime: i.slotMaxTime,
      isValid: d,
      // how far the current date will move for a prev/next operation
      dateIncrement: this.buildDateIncrement(o.duration)
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
    let { props: a } = this, i = null, r = null, o = null, s;
    return a.duration ? (i = a.duration, r = a.durationUnit, o = this.buildRangeFromDuration(e, n, i, r)) : (s = this.props.dayCount) ? (r = "day", o = this.buildRangeFromDayCount(e, n, s)) : (o = this.buildCustomVisibleRange(e)) ? r = a.dateEnv.greatestWholeUnit(o.start, o.end).unit : (i = this.getFallbackDuration(), r = ha(i).unit, o = this.buildRangeFromDuration(e, n, i, r)), { duration: i, unit: r, range: o };
  }
  getFallbackDuration() {
    return Ce({ day: 1 });
  }
  // Returns a new activeRange to have time values (un-ambiguate)
  // slotMinTime or slotMaxTime causes the range to expand.
  adjustActiveRange(e) {
    let { dateEnv: n, usesMinMaxTime: a, slotMinTime: i, slotMaxTime: r } = this.props, { start: o, end: s } = e;
    return a && (Ot(i) < 0 && (o = Me(o), o = n.add(o, i)), Ot(r) > 1 && (s = Me(s), s = Be(s, -1), s = n.add(s, r))), { start: o, end: s };
  }
  // Builds the "current" range when it is specified as an explicit duration.
  // `unit` is the already-computed greatestDurationDenominator unit of duration.
  buildRangeFromDuration(e, n, a, i) {
    let { dateEnv: r, dateAlignment: o } = this.props, s, u, c;
    if (!o) {
      let { dateIncrement: h } = this.props;
      h && Qt(h) < Qt(a) ? o = ha(h).unit : o = i;
    }
    Ot(a) <= 1 && this.isHiddenDay(s) && (s = this.skipHiddenDays(s, n), s = Me(s));
    function d() {
      s = r.startOf(e, o), u = r.add(s, a), c = { start: s, end: u };
    }
    return d(), this.trimHiddenDays(c) || (e = this.skipHiddenDays(e, n), d()), c;
  }
  // Builds the "current" range when a dayCount is specified.
  buildRangeFromDayCount(e, n, a) {
    let { dateEnv: i, dateAlignment: r } = this.props, o = 0, s = e, u;
    r && (s = i.startOf(s, r)), s = Me(s), s = this.skipHiddenDays(s, n), u = s;
    do
      u = Be(u, 1), this.isHiddenDay(u) || (o += 1);
    while (o < a);
    return { start: s, end: u };
  }
  // Builds a normalized range object for the "visible" range,
  // which is a way to define the currentRange and activeRange at the same time.
  buildCustomVisibleRange(e) {
    let { props: n } = this, a = n.visibleRangeInput, i = typeof a == "function" ? a.call(n.calendarApi, n.dateEnv.toDate(e)) : a, r = this.refineRange(i);
    return r && (r.start == null || r.end == null) ? null : r;
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
    return n || ((a = this.props.dateAlignment) ? Ce(1, a) : e || Ce({ days: 1 }));
  }
  refineRange(e) {
    if (e) {
      let n = iy(e, this.props.dateEnv);
      return n && (n = Co(n)), n;
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
      e = Be(e, n);
    return e;
  }
}
function Ha(t, e, n, a) {
  return {
    instanceId: wt(),
    defId: t,
    range: e,
    forcedStartTzo: n ?? null,
    forcedEndTzo: a ?? null
  };
}
function ly(t, e, n, a) {
  for (let i = 0; i < a.length; i += 1) {
    let r = a[i].parse(t, n);
    if (r) {
      let { allDay: o } = t;
      return o == null && (o = e, o == null && (o = r.allDayGuess, o == null && (o = !1))), {
        allDay: o,
        duration: r.duration,
        typeData: r.typeData,
        typeId: i
      };
    }
  }
  return null;
}
function bt(t, e, n) {
  let { dateEnv: a, pluginHooks: i, options: r } = n, { defs: o, instances: s } = t;
  s = yt(s, (u) => !o[u.defId].recurringDef);
  for (let u in o) {
    let c = o[u];
    if (c.recurringDef) {
      let { duration: d } = c.recurringDef;
      d || (d = c.allDay ? r.defaultAllDayEventDuration : r.defaultTimedEventDuration);
      let h = uy(c, d, e, a, i.recurringTypes);
      for (let p of h) {
        let v = Ha(u, {
          start: p,
          end: a.add(p, d)
        });
        s[v.instanceId] = v;
      }
    }
  }
  return { defs: o, instances: s };
}
function uy(t, e, n, a, i) {
  let o = i[t.recurringDef.typeId].expand(t.recurringDef.typeData, {
    start: a.subtract(n.start, e),
    end: n.end
  }, a);
  return t.allDay && (o = o.map(Me)), o;
}
const pn = {
  id: String,
  groupId: String,
  title: String,
  url: String,
  interactive: Boolean
}, Ao = {
  start: z,
  end: z,
  date: z,
  allDay: Boolean
}, cy = Object.assign(Object.assign(Object.assign({}, pn), Ao), { extendedProps: z });
function _o(t, e, n, a, i = Va(n), r, o) {
  let { refined: s, extra: u } = ko(t, n, i), c = fy(e, n), d = ly(s, c, n.dateEnv, n.pluginHooks.recurringTypes);
  if (d) {
    let p = pa(s, u, e ? e.sourceId : "", d.allDay, !!d.duration, n, r);
    return p.recurringDef = {
      typeId: d.typeId,
      typeData: d.typeData,
      duration: d.duration
    }, { def: p, instance: null };
  }
  let h = dy(s, c, n, a);
  if (h) {
    let p = pa(s, u, e ? e.sourceId : "", h.allDay, h.hasEnd, n, r), v = Ha(p.defId, h.range, h.forcedStartTzo, h.forcedEndTzo);
    return o && p.publicId && o[p.publicId] && (v.instanceId = o[p.publicId]), { def: p, instance: v };
  }
  return null;
}
function ko(t, e, n = Va(e)) {
  return Pa(t, n);
}
function Va(t) {
  return Object.assign(Object.assign(Object.assign({}, Mn), cy), t.pluginHooks.eventRefiners);
}
function pa(t, e, n, a, i, r, o) {
  let s = {
    title: t.title || "",
    groupId: t.groupId || "",
    publicId: t.id || "",
    url: t.url || "",
    recurringDef: null,
    defId: (o && t.id ? o[t.id] : "") || wt(),
    sourceId: n,
    allDay: a,
    hasEnd: i,
    interactive: t.interactive,
    ui: Nn(t, r),
    extendedProps: Object.assign(Object.assign({}, t.extendedProps || {}), e)
  };
  for (let u of r.pluginHooks.eventDefMemberAdders)
    Object.assign(s, u(t));
  return Object.freeze(s.ui.classNames), Object.freeze(s.extendedProps), s;
}
function dy(t, e, n, a) {
  let { allDay: i } = t, r, o = null, s = !1, u, c = null, d = t.start != null ? t.start : t.date;
  if (r = n.dateEnv.createMarkerMeta(d), r)
    o = r.marker;
  else if (!a)
    return null;
  return t.end != null && (u = n.dateEnv.createMarkerMeta(t.end)), i == null && (e != null ? i = e : i = (!r || r.isTimeUnspecified) && (!u || u.isTimeUnspecified)), i && o && (o = Me(o)), u && (c = u.marker, i && (c = Me(c)), o && c <= o && (c = null)), c ? s = !0 : a || (s = n.options.forceEventDuration || !1, c = n.dateEnv.add(o, i ? n.options.defaultAllDayEventDuration : n.options.defaultTimedEventDuration)), {
    allDay: i,
    hasEnd: s,
    range: { start: o, end: c },
    forcedStartTzo: r ? r.forcedTzo : null,
    forcedEndTzo: u ? u.forcedTzo : null
  };
}
function fy(t, e) {
  let n = null;
  return t && (n = t.defaultAllDay), n == null && (n = e.options.defaultAllDay), n;
}
function Zt(t, e, n, a, i, r) {
  let o = Ke(), s = Va(n);
  for (let u of t) {
    let c = _o(u, e, n, a, s, i, r);
    c && ga(c, o);
  }
  return o;
}
function ga(t, e = Ke()) {
  return e.defs[t.def.defId] = t.def, t.instance && (e.instances[t.instance.instanceId] = t.instance), e;
}
function ja(t, e) {
  let n = t.instances[e];
  if (n) {
    let a = t.defs[n.defId], i = Bn(t, (r) => my(a, r));
    return i.defs[a.defId] = a, i.instances[n.instanceId] = n, i;
  }
  return Ke();
}
function my(t, e) {
  return !!(t.groupId && t.groupId === e.groupId);
}
function Ke() {
  return { defs: {}, instances: {} };
}
function Ua(t, e) {
  return {
    defs: Object.assign(Object.assign({}, t.defs), e.defs),
    instances: Object.assign(Object.assign({}, t.instances), e.instances)
  };
}
function Bn(t, e) {
  let n = yt(t.defs, e), a = yt(t.instances, (i) => n[i.defId]);
  return { defs: n, instances: a };
}
function hy(t, e) {
  let { defs: n, instances: a } = t, i = {}, r = {};
  for (let o in n)
    e.defs[o] || (i[o] = n[o]);
  for (let o in a)
    !e.instances[o] && // not explicitly excluded
    i[a[o].defId] && (r[o] = a[o]);
  return {
    defs: i,
    instances: r
  };
}
function vy(t, e) {
  return Array.isArray(t) ? Zt(t, null, e, !0) : typeof t == "object" && t ? Zt([t], null, e, !0) : t != null ? String(t) : null;
}
function Vi(t) {
  return Array.isArray(t) ? t : typeof t == "string" ? t.split(/\s+/) : [];
}
const Mn = {
  display: String,
  editable: Boolean,
  startEditable: Boolean,
  durationEditable: Boolean,
  constraint: z,
  overlap: z,
  allow: z,
  className: Vi,
  classNames: Vi,
  color: String,
  backgroundColor: String,
  borderColor: String,
  textColor: String
}, py = {
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
function Nn(t, e) {
  let n = vy(t.constraint, e);
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
function gy(t) {
  return t.reduce(yy, py);
}
function yy(t, e) {
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
const by = {
  id: String,
  defaultAllDay: Boolean,
  url: String,
  format: String,
  events: z,
  eventDataTransform: z,
  // for any network-related sources
  success: z,
  failure: z
};
function So(t, e, n = To(e)) {
  let a;
  if (typeof t == "string" ? a = { url: t } : typeof t == "function" || Array.isArray(t) ? a = { events: t } : typeof t == "object" && t && (a = t), a) {
    let { refined: i, extra: r } = Pa(a, n), o = Cy(i, e);
    if (o)
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
        sourceDefId: o.sourceDefId,
        meta: o.meta,
        ui: Nn(i, e),
        extendedProps: r
      };
  }
  return null;
}
function To(t) {
  return Object.assign(Object.assign(Object.assign({}, Mn), by), t.pluginHooks.eventSourceRefiners);
}
function Cy(t, e) {
  let n = e.pluginHooks.eventSourceDefs;
  for (let a = n.length - 1; a >= 0; a -= 1) {
    let r = n[a].parseMeta(t);
    if (r)
      return { sourceDefId: a, meta: r };
  }
  return null;
}
function wy(t, e, n, a, i) {
  switch (e.type) {
    case "RECEIVE_EVENTS":
      return Ay(t, n[e.sourceId], e.fetchId, e.fetchRange, e.rawEvents, i);
    case "RESET_RAW_EVENTS":
      return _y(t, n[e.sourceId], e.rawEvents, a.activeRange, i);
    case "ADD_EVENTS":
      return ky(
        t,
        e.eventStore,
        // new ones
        a ? a.activeRange : null,
        i
      );
    case "RESET_EVENTS":
      return e.eventStore;
    case "MERGE_EVENTS":
      return Ua(t, e.eventStore);
    case "PREV":
    // TODO: how do we track all actions that affect dateProfile :(
    case "NEXT":
    case "CHANGE_DATE":
    case "CHANGE_VIEW_TYPE":
      return a ? bt(t, a.activeRange, i) : t;
    case "REMOVE_EVENTS":
      return hy(t, e.eventStore);
    case "REMOVE_EVENT_SOURCE":
      return Mo(t, e.sourceId);
    case "REMOVE_ALL_EVENT_SOURCES":
      return Bn(t, (r) => !r.sourceId);
    case "REMOVE_ALL_EVENTS":
      return Ke();
    default:
      return t;
  }
}
function Ay(t, e, n, a, i, r) {
  if (e && // not already removed
  n === e.latestFetchId) {
    let o = Zt(Eo(i, e, r), e, r);
    return a && (o = bt(o, a, r)), Ua(Mo(t, e.sourceId), o);
  }
  return t;
}
function _y(t, e, n, a, i) {
  const { defIdMap: r, instanceIdMap: o } = Ty(t);
  let s = Zt(Eo(n, e, i), e, i, !1, r, o);
  return bt(s, a, i);
}
function Eo(t, e, n) {
  let a = n.options.eventDataTransform, i = e ? e.eventDataTransform : null;
  return i && (t = ji(t, i)), a && (t = ji(t, a)), t;
}
function ji(t, e) {
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
function ky(t, e, n, a) {
  return n && (e = bt(e, n, a)), Ua(t, e);
}
function Ui(t, e, n) {
  let { defs: a } = t, i = At(t.instances, (r) => a[r.defId].allDay ? r : Object.assign(Object.assign({}, r), { range: {
    start: n.createMarker(e.toDate(r.range.start, r.forcedStartTzo)),
    end: n.createMarker(e.toDate(r.range.end, r.forcedEndTzo))
  }, forcedStartTzo: n.canComputeOffset ? null : r.forcedStartTzo, forcedEndTzo: n.canComputeOffset ? null : r.forcedEndTzo }));
  return { defs: a, instances: i };
}
function Mo(t, e) {
  return Bn(t, (n) => n.sourceId !== e);
}
function Sy(t, e) {
  return {
    defs: t.defs,
    instances: yt(t.instances, (n) => !e[n.instanceId])
  };
}
function Ty(t) {
  const { defs: e, instances: n } = t, a = {}, i = {};
  for (let r in e) {
    const o = e[r], { publicId: s } = o;
    s && (a[s] = r);
  }
  for (let r in n) {
    const o = n[r], s = e[o.defId], { publicId: u } = s;
    u && (i[u] = r);
  }
  return { defIdMap: a, instanceIdMap: i };
}
class zn {
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
    Ey(this.handlers, e, n);
  }
  off(e, n) {
    My(this.handlers, e, n);
  }
  trigger(e, ...n) {
    let a = this.handlers[e] || [], i = this.options && this.options[e], r = [].concat(i || [], a);
    for (let o of r)
      o.apply(this.thisContext, n);
  }
  hasHandlers(e) {
    return !!(this.handlers[e] && this.handlers[e].length || this.options && this.options[e]);
  }
}
function Ey(t, e, n) {
  (t[e] || (t[e] = [])).push(n);
}
function My(t, e, n) {
  n ? t[e] && (t[e] = t[e].filter((a) => a !== n)) : delete t[e];
}
const Ny = {
  startTime: "09:00",
  endTime: "17:00",
  daysOfWeek: [1, 2, 3, 4, 5],
  display: "inverse-background",
  classNames: "fc-non-business",
  groupId: "_businessHours"
  // so multiple defs get grouped
};
function Dy(t, e) {
  return Zt(Iy(t), null, e);
}
function Iy(t) {
  let e;
  return t === !0 ? e = [{}] : Array.isArray(t) ? e = t.filter((n) => n.daysOfWeek) : typeof t == "object" && t ? e = [t] : e = [], e = e.map((n) => Object.assign(Object.assign({}, Ny), n)), e;
}
function No(t, e, n) {
  n.emitter.trigger("select", Object.assign(Object.assign({}, Wa(t, n)), { jsEvent: e ? e.origEvent : null, view: n.viewApi || n.calendarApi.view }));
}
function Oy(t, e) {
  e.emitter.trigger("unselect", {
    jsEvent: t ? t.origEvent : null,
    view: e.viewApi || e.calendarApi.view
  });
}
function Wa(t, e) {
  let n = {};
  for (let a of e.pluginHooks.dateSpanTransforms)
    Object.assign(n, a(t, e));
  return Object.assign(n, Gy(t, e.dateEnv)), n;
}
function Wi(t, e, n) {
  let { dateEnv: a, options: i } = n, r = e;
  return t ? (r = Me(r), r = a.add(r, i.defaultAllDayEventDuration)) : r = a.add(r, i.defaultTimedEventDuration), r;
}
function Ya(t, e, n, a) {
  let i = Dn(t.defs, e), r = Ke();
  for (let o in t.defs) {
    let s = t.defs[o];
    r.defs[o] = Ry(s, i[o], n, a);
  }
  for (let o in t.instances) {
    let s = t.instances[o], u = r.defs[s.defId];
    r.instances[o] = xy(s, u, i[s.defId], n, a);
  }
  return r;
}
function Ry(t, e, n, a) {
  let i = n.standardProps || {};
  i.hasEnd == null && e.durationEditable && (n.startDelta || n.endDelta) && (i.hasEnd = !0);
  let r = Object.assign(Object.assign(Object.assign({}, t), i), { ui: Object.assign(Object.assign({}, t.ui), i.ui) });
  n.extendedProps && (r.extendedProps = Object.assign(Object.assign({}, r.extendedProps), n.extendedProps));
  for (let o of a.pluginHooks.eventDefMutationAppliers)
    o(r, n, a);
  return !r.hasEnd && a.options.forceEventDuration && (r.hasEnd = !0), r;
}
function xy(t, e, n, a, i) {
  let { dateEnv: r } = i, o = a.standardProps && a.standardProps.allDay === !0, s = a.standardProps && a.standardProps.hasEnd === !1, u = Object.assign({}, t);
  return o && (u.range = bo(u.range)), a.datesDelta && n.startEditable && (u.range = {
    start: r.add(u.range.start, a.datesDelta),
    end: r.add(u.range.end, a.datesDelta)
  }), a.startDelta && n.durationEditable && (u.range = {
    start: r.add(u.range.start, a.startDelta),
    end: u.range.end
  }), a.endDelta && n.durationEditable && (u.range = {
    start: u.range.start,
    end: r.add(u.range.end, a.endDelta)
  }), s && (u.range = {
    start: u.range.start,
    end: Wi(e.allDay, u.range.start, i)
  }), e.allDay && (u.range = {
    start: Me(u.range.start),
    end: Me(u.range.end)
  }), u.range.end < u.range.start && (u.range.end = Wi(e.allDay, u.range.start, i)), u;
}
class Nt {
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
class Ne {
  // instance will be null if expressing a recurring event that has no current instances,
  // OR if trying to validate an incoming external event that has no dates assigned
  constructor(e, n, a) {
    this._context = e, this._def = n, this._instance = a || null;
  }
  /*
  TODO: make event struct more responsible for this
  */
  setProp(e, n) {
    if (e in Ao)
      console.warn("Could not set date-related prop 'name'. Use one of the date-related methods instead.");
    else if (e === "id")
      n = pn[e](n), this.mutate({
        standardProps: { publicId: n }
        // hardcoded internal name
      });
    else if (e in pn)
      n = pn[e](n), this.mutate({
        standardProps: { [e]: n }
      });
    else if (e in Mn) {
      let a = Mn[e](n);
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
      let r = this._instance.range, o = Dt(r.start, i, a, n.granularity);
      n.maintainDuration ? this.mutate({ datesDelta: o }) : this.mutate({ startDelta: o });
    }
  }
  setEnd(e, n = {}) {
    let { dateEnv: a } = this._context, i;
    if (!(e != null && (i = a.createMarker(e), !i)) && this._instance)
      if (i) {
        let r = Dt(this._instance.range.end, i, a, n.granularity);
        this.mutate({ endDelta: r });
      } else
        this.mutate({ standardProps: { hasEnd: !1 } });
  }
  setDates(e, n, a = {}) {
    let { dateEnv: i } = this._context, r = { allDay: a.allDay }, o = i.createMarker(e), s;
    if (o && !(n != null && (s = i.createMarker(n), !s)) && this._instance) {
      let u = this._instance.range;
      a.allDay === !0 && (u = bo(u));
      let c = Dt(u.start, o, i, a.granularity);
      if (s) {
        let d = Dt(u.end, s, i, a.granularity);
        rg(c, d) ? this.mutate({ datesDelta: c, standardProps: r }) : this.mutate({ startDelta: c, endDelta: d, standardProps: r });
      } else
        r.hasEnd = !1, this.mutate({ datesDelta: c, standardProps: r });
    }
  }
  moveStart(e) {
    let n = Ce(e);
    n && this.mutate({ startDelta: n });
  }
  moveEnd(e) {
    let n = Ce(e);
    n && this.mutate({ endDelta: n });
  }
  moveDates(e) {
    let n = Ce(e);
    n && this.mutate({ datesDelta: n });
  }
  setAllDay(e, n = {}) {
    let a = { allDay: e }, { maintainDuration: i } = n;
    i == null && (i = this._context.options.allDayMaintainDuration), this._def.allDay !== e && (a.hasEnd = i), this.mutate({ standardProps: a });
  }
  formatRange(e) {
    let { dateEnv: n } = this._context, a = this._instance, i = Fe(e);
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
      let a = this._def, i = this._context, { eventStore: r } = i.getCurrentData(), o = ja(r, n.instanceId);
      o = Ya(o, {
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
      let u = new Ne(i, a, n);
      this._def = o.defs[a.defId], this._instance = o.instances[n.instanceId], i.dispatch({
        type: "MERGE_EVENTS",
        eventStore: o
      }), i.emitter.trigger("eventChange", {
        oldEvent: u,
        event: this,
        relatedEvents: gt(o, i, n),
        revert() {
          i.dispatch({
            type: "RESET_EVENTS",
            eventStore: r
            // the ORIGINAL store
          });
        }
      });
    }
  }
  remove() {
    let e = this._context, n = Do(this);
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
    return e ? new Nt(this._context, this._context.getCurrentData().eventSources[e]) : null;
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
    let n = this._def, { ui: a } = n, { startStr: i, endStr: r } = this, o = {
      allDay: n.allDay
    };
    return n.title && (o.title = n.title), i && (o.start = i), r && (o.end = r), n.publicId && (o.id = n.publicId), n.groupId && (o.groupId = n.groupId), n.url && (o.url = n.url), a.display && a.display !== "auto" && (o.display = a.display), e.collapseColor && a.backgroundColor && a.backgroundColor === a.borderColor ? o.color = a.backgroundColor : (a.backgroundColor && (o.backgroundColor = a.backgroundColor), a.borderColor && (o.borderColor = a.borderColor)), a.textColor && (o.textColor = a.textColor), a.classNames.length && (o.classNames = a.classNames), Object.keys(n.extendedProps).length && (e.collapseExtendedProps ? Object.assign(o, n.extendedProps) : o.extendedProps = n.extendedProps), o;
  }
  toJSON() {
    return this.toPlainObject();
  }
}
function Do(t) {
  let e = t._def, n = t._instance;
  return {
    defs: { [e.defId]: e },
    instances: n ? { [n.instanceId]: n } : {}
  };
}
function gt(t, e, n) {
  let { defs: a, instances: i } = t, r = [], o = n ? n.instanceId : "";
  for (let s in i) {
    let u = i[s], c = a[u.defId];
    u.instanceId !== o && r.push(new Ne(e, c, u));
  }
  return r;
}
function Yi(t, e, n, a) {
  let i = {}, r = {}, o = {}, s = [], u = [], c = Dn(t.defs, e);
  for (let d in t.defs) {
    let h = t.defs[d];
    c[h.defId].display === "inverse-background" && (h.groupId ? (i[h.groupId] = [], o[h.groupId] || (o[h.groupId] = h)) : r[d] = []);
  }
  for (let d in t.instances) {
    let h = t.instances[d], p = t.defs[h.defId], v = c[p.defId], y = h.range, g = !p.allDay && a ? Co(y, a) : y, b = Pt(g, n);
    b && (v.display === "inverse-background" ? p.groupId ? i[p.groupId].push(b) : r[h.defId].push(b) : v.display !== "none" && (v.display === "background" ? s : u).push({
      def: p,
      ui: v,
      instance: h,
      range: b,
      isStart: g.start && g.start.valueOf() === b.start.valueOf(),
      isEnd: g.end && g.end.valueOf() === b.end.valueOf()
    }));
  }
  for (let d in i) {
    let h = i[d], p = Hi(h, n);
    for (let v of p) {
      let y = o[d], g = c[y.defId];
      s.push({
        def: y,
        ui: g,
        instance: null,
        range: v,
        isStart: !1,
        isEnd: !1
      });
    }
  }
  for (let d in r) {
    let h = r[d], p = Hi(h, n);
    for (let v of p)
      s.push({
        def: t.defs[d],
        ui: c[d],
        instance: null,
        range: v,
        isStart: !1,
        isEnd: !1
      });
  }
  return { bg: s, fg: u };
}
function Gi(t, e) {
  t.fcSeg = e;
}
function Ft(t) {
  return t.fcSeg || t.parentNode.fcSeg || // for the harness
  null;
}
function Dn(t, e) {
  return At(t, (n) => Io(n, e));
}
function Io(t, e) {
  let n = [];
  return e[""] && n.push(e[""]), e[t.defId] && n.push(e[t.defId]), n.push(t.ui), gy(n);
}
function $y(t, e) {
  let n = t.map(Py);
  return n.sort((a, i) => Jp(a, i, e)), n.map((a) => a._seg);
}
function Py(t) {
  let { eventRange: e } = t, n = e.def, a = e.instance ? e.instance.range : e.range, i = a.start ? a.start.valueOf() : 0, r = a.end ? a.end.valueOf() : 0;
  return Object.assign(Object.assign(Object.assign({}, n.extendedProps), n), {
    id: n.publicId,
    start: i,
    end: r,
    duration: r - i,
    allDay: Number(n.allDay),
    _seg: t
  });
}
function Fy(t, e) {
  let { pluginHooks: n } = e, a = n.isDraggableTransformers, { def: i, ui: r } = t.eventRange, o = r.startEditable;
  for (let s of a)
    o = s(o, i, r, e);
  return o;
}
function By(t, e) {
  return t.isStart && t.eventRange.ui.durationEditable && e.options.eventResizableFromStart;
}
function zy(t, e) {
  return t.isEnd && t.eventRange.ui.durationEditable;
}
function Oo(t, e, n, a, i, r, o) {
  let { dateEnv: s, options: u } = n, { displayEventTime: c, displayEventEnd: d } = u, h = t.eventRange.def, p = t.eventRange.instance;
  c == null && (c = a !== !1), d == null && (d = i !== !1);
  let v = p.range.start, y = p.range.end, g = t.start || t.eventRange.range.start, b = t.end || t.eventRange.range.end, C = Me(v).valueOf() === Me(g).valueOf(), w = Me(ut(y, -1)).valueOf() === Me(ut(b, -1)).valueOf();
  return c && !h.allDay && (C || w) ? (g = C ? v : g, b = w ? y : b, d && h.hasEnd ? s.formatRange(g, b, e, {
    forcedStartTzo: p.forcedStartTzo,
    forcedEndTzo: p.forcedEndTzo
  }) : s.format(g, e, {
    forcedTzo: p.forcedStartTzo
    // nooooo, same
  })) : "";
}
function Yt(t, e, n) {
  let a = t.eventRange.range;
  return {
    isPast: a.end <= e.start,
    isFuture: a.start >= e.end,
    isToday: e && ot(e, a.start)
  };
}
function Ly(t) {
  let e = ["fc-event"];
  return t.isMirror && e.push("fc-event-mirror"), t.isDraggable && e.push("fc-event-draggable"), (t.isStartResizable || t.isEndResizable) && e.push("fc-event-resizable"), t.isDragging && e.push("fc-event-dragging"), t.isResizing && e.push("fc-event-resizing"), t.isSelected && e.push("fc-event-selected"), t.isStart && e.push("fc-event-start"), t.isEnd && e.push("fc-event-end"), t.isPast && e.push("fc-event-past"), t.isToday && e.push("fc-event-today"), t.isFuture && e.push("fc-event-future"), e;
}
function Hy(t) {
  return t.instance ? t.instance.instanceId : `${t.def.defId}:${t.range.start.toISOString()}`;
}
function Ro(t, e) {
  let { def: n, instance: a } = t.eventRange, { url: i } = n;
  if (i)
    return { href: i };
  let { emitter: r, options: o } = e, { eventInteractive: s } = o;
  return s == null && (s = n.interactive, s == null && (s = !!r.hasHandlers("eventClick"))), s ? co((u) => {
    r.trigger("eventClick", {
      el: u.target,
      event: new Ne(e, n, a),
      jsEvent: u,
      view: e.viewApi
    });
  }) : {};
}
const Vy = {
  start: z,
  end: z,
  allDay: Boolean
};
function jy(t, e, n) {
  let a = Uy(t, e), { range: i } = a;
  if (!i.start)
    return null;
  if (!i.end) {
    if (n == null)
      return null;
    i.end = e.add(i.start, n);
  }
  return a;
}
function Uy(t, e) {
  let { refined: n, extra: a } = Pa(t, Vy), i = n.start ? e.createMarkerMeta(n.start) : null, r = n.end ? e.createMarkerMeta(n.end) : null, { allDay: o } = n;
  return o == null && (o = i && i.isTimeUnspecified && (!r || r.isTimeUnspecified)), Object.assign({ range: {
    start: i ? i.marker : null,
    end: r ? r.marker : null
  }, allDay: o }, a);
}
function Wy(t, e) {
  return oy(t.range, e.range) && t.allDay === e.allDay && Yy(t, e);
}
function Yy(t, e) {
  for (let n in e)
    if (n !== "range" && n !== "allDay" && t[n] !== e[n])
      return !1;
  for (let n in t)
    if (!(n in e))
      return !1;
  return !0;
}
function Gy(t, e) {
  return Object.assign(Object.assign({}, $o(t.range, e, t.allDay)), { allDay: t.allDay });
}
function xo(t, e, n) {
  return Object.assign(Object.assign({}, $o(t, e, n)), { timeZone: e.timeZone });
}
function $o(t, e, n) {
  return {
    start: e.toDate(t.start),
    end: e.toDate(t.end),
    startStr: e.formatIso(t.start, { omitTime: n }),
    endStr: e.formatIso(t.end, { omitTime: n })
  };
}
function Ky(t, e, n) {
  let a = ko({ editable: !1 }, n), i = pa(
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
    ui: Io(i, e),
    instance: Ha(i.defId, t.range),
    range: t.range,
    isStart: !0,
    isEnd: !0
  };
}
function qy(t, e, n) {
  let a = !1, i = function(s) {
    a || (a = !0, e(s));
  }, r = function(s) {
    a || (a = !0, n(s));
  }, o = t(i, r);
  o && typeof o.then == "function" && o.then(i, r);
}
class Ki extends Error {
  constructor(e, n) {
    super(e), this.response = n;
  }
}
function Qy(t, e, n) {
  t = t.toUpperCase();
  const a = {
    method: t
  };
  return t === "GET" ? e += (e.indexOf("?") === -1 ? "?" : "&") + new URLSearchParams(n) : (a.body = new URLSearchParams(n), a.headers = {
    "Content-Type": "application/x-www-form-urlencoded"
  }), fetch(e, a).then((i) => {
    if (i.ok)
      return i.json().then((r) => [r, i], () => {
        throw new Ki("Failure parsing JSON", i);
      });
    throw new Ki("Request failed", i);
  });
}
let na;
function Po() {
  return na == null && (na = Zy()), na;
}
function Zy() {
  if (typeof document > "u")
    return !0;
  let t = document.createElement("div");
  t.style.position = "absolute", t.style.top = "0px", t.style.left = "0px", t.innerHTML = "<table><tr><td><div></div></td></tr></table>", t.querySelector("table").style.height = "100px", t.querySelector("div").style.height = "100%", document.body.appendChild(t);
  let n = t.querySelector("div").offsetHeight > 0;
  return document.body.removeChild(t), n;
}
class Jy extends Ie {
  constructor() {
    super(...arguments), this.state = {
      forPrint: !1
    }, this.handleBeforePrint = () => {
      En(() => {
        this.setState({ forPrint: !0 });
      });
    }, this.handleAfterPrint = () => {
      En(() => {
        this.setState({ forPrint: !1 });
      });
    };
  }
  render() {
    let { props: e } = this, { options: n } = e, { forPrint: a } = this.state, i = a || n.height === "auto" || n.contentHeight === "auto", r = !i && n.height != null ? n.height : "", o = [
      "fc",
      a ? "fc-media-print" : "fc-media-screen",
      `fc-direction-${n.direction}`,
      e.theme.getClass("root")
    ];
    return Po() || o.push("fc-liquid-hack"), e.children(o, r, i, a);
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
function Xy(t, e) {
  return {
    component: t,
    el: e.el,
    useEventCenter: e.useEventCenter != null ? e.useEventCenter : !0,
    isHitComboAllowed: e.isHitComboAllowed || null
  };
}
function Ga(t) {
  return {
    [t.component.uid]: t
  };
}
const ya = {};
class Ln extends Ue {
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
    let r, o;
    return i ? (r = n.dateEnv.startOf(a, e.unit), o = n.dateEnv.add(r, Ce(1, e.unit)).valueOf() - a.valueOf()) : (r = a, o = 1e3 * 60), o = Math.min(1e3 * 60 * 60 * 24, o), {
      state: { nowDate: r, todayRange: eb(r) },
      waitMs: o
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
Ln.contextType = _t;
function eb(t) {
  let e = Me(t), n = Be(e, 1);
  return { start: e, end: n };
}
class tb {
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
    let { viewSpecs: n, toolbarConfig: a } = this.getCurrentData(), i = [].concat(a.header ? a.header.viewsWithButtons : [], a.footer ? a.footer.viewsWithButtons : []), r, o;
    for (let s in n)
      i.push(s);
    for (r = 0; r < i.length; r += 1)
      if (o = n[i[r]], o && o.singleUnit === e)
        return o;
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
    let n = this.getCurrentData(), a = Ce(e);
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
    return a.format(a.createMarker(e), Fe(n));
  }
  // `settings` is for formatter AND isEndExclusive
  formatRange(e, n, a) {
    let { dateEnv: i } = this.getCurrentData();
    return i.formatRange(i.createMarker(e), i.createMarker(n), Fe(a), a);
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
    let i = this.getCurrentData(), r = jy(a, i.dateEnv, Ce({ days: 1 }));
    r && (this.dispatch({ type: "SELECT_DATES", selection: r }), No(r, null, i));
  }
  unselect(e) {
    let n = this.getCurrentData();
    n.dateSelection && (this.dispatch({ type: "UNSELECT_DATES" }), Oy(e, n));
  }
  // Public Events API
  // -----------------------------------------------------------------------------------------------------------------
  addEvent(e, n) {
    if (e instanceof Ne) {
      let o = e._def, s = e._instance;
      return this.getCurrentData().eventStore.defs[o.defId] || (this.dispatch({
        type: "ADD_EVENTS",
        eventStore: ga({ def: o, instance: s })
        // TODO: better util for two args?
      }), this.triggerEventAdd(e)), e;
    }
    let a = this.getCurrentData(), i;
    if (n instanceof Nt)
      i = n.internalEventSource;
    else if (typeof n == "boolean")
      n && ([i] = Ba(a.eventSources));
    else if (n != null) {
      let o = this.getEventSourceById(n);
      if (!o)
        return console.warn(`Could not find an event source with ID "${n}"`), null;
      i = o.internalEventSource;
    }
    let r = _o(e, i, a, !1);
    if (r) {
      let o = new Ne(a, r.def, r.def.recurringDef ? null : r.instance);
      return this.dispatch({
        type: "ADD_EVENTS",
        eventStore: ga(r)
      }), this.triggerEventAdd(o), o;
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
          eventStore: Do(e)
        });
      }
    });
  }
  // TODO: optimize
  getEventById(e) {
    let n = this.getCurrentData(), { defs: a, instances: i } = n.eventStore;
    e = String(e);
    for (let r in a) {
      let o = a[r];
      if (o.publicId === e) {
        if (o.recurringDef)
          return new Ne(n, o, null);
        for (let s in i) {
          let u = i[s];
          if (u.defId === o.defId)
            return new Ne(n, o, u);
        }
      }
    }
    return null;
  }
  getEvents() {
    let e = this.getCurrentData();
    return gt(e.eventStore, e);
  }
  removeAllEvents() {
    this.dispatch({ type: "REMOVE_ALL_EVENTS" });
  }
  // Public Event Sources API
  // -----------------------------------------------------------------------------------------------------------------
  getEventSources() {
    let e = this.getCurrentData(), n = e.eventSources, a = [];
    for (let i in n)
      a.push(new Nt(e, n[i]));
    return a;
  }
  getEventSourceById(e) {
    let n = this.getCurrentData(), a = n.eventSources;
    e = String(e);
    for (let i in a)
      if (a[i].publicId === e)
        return new Nt(n, a[i]);
    return null;
  }
  addEventSource(e) {
    let n = this.getCurrentData();
    if (e instanceof Nt)
      return n.eventSources[e.internalEventSource.sourceId] || this.dispatch({
        type: "ADD_EVENT_SOURCES",
        sources: [e.internalEventSource]
      }), e;
    let a = So(e, n);
    return a ? (this.dispatch({ type: "ADD_EVENT_SOURCES", sources: [a] }), new Nt(n, a)) : null;
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
    let n = Ce(e);
    n && this.trigger("_scrollRequest", { time: n });
  }
}
function nb(t, e) {
  return t.left >= e.left && t.left < e.right && t.top >= e.top && t.top < e.bottom;
}
function Fo(t, e) {
  let n = {
    left: Math.max(t.left, e.left),
    right: Math.min(t.right, e.right),
    top: Math.max(t.top, e.top),
    bottom: Math.min(t.bottom, e.bottom)
  };
  return n.left < n.right && n.top < n.bottom ? n : !1;
}
function ab(t, e) {
  return {
    left: Math.min(Math.max(t.left, e.left), e.right),
    top: Math.min(Math.max(t.top, e.top), e.bottom)
  };
}
function ib(t) {
  return {
    left: (t.left + t.right) / 2,
    top: (t.top + t.bottom) / 2
  };
}
function rb(t, e) {
  return {
    left: t.left - e.left,
    top: t.top - e.top
  };
}
function Bo(t, e, n, a) {
  return {
    dow: t.getUTCDay(),
    isDisabled: !!(a && (!a.activeRange || !ot(a.activeRange, t))),
    isOther: !!(a && !ot(a.currentRange, t)),
    isToday: !!(e && ot(e, t)),
    isPast: !!(e && t < e.start),
    isFuture: !!(e && t >= e.end)
  };
}
function Ka(t, e) {
  let n = [
    "fc-day",
    `fc-day-${ug[t.dow]}`
  ];
  return t.isDisabled ? n.push("fc-day-disabled") : (t.isToday && (n.push("fc-day-today"), n.push(e.getClass("today"))), t.isPast && n.push("fc-day-past"), t.isFuture && n.push("fc-day-future"), t.isOther && n.push("fc-day-other")), n;
}
const ob = Fe({ year: "numeric", month: "long", day: "numeric" }), sb = Fe({ week: "long" });
function ba(t, e, n = "day", a = !0) {
  const { dateEnv: i, options: r, calendarApi: o } = t;
  let s = i.format(e, n === "week" ? sb : ob);
  if (r.navLinks) {
    let u = i.toDate(e);
    const c = (d) => {
      let h = n === "day" ? r.navLinkDayClick : n === "week" ? r.navLinkWeekClick : null;
      typeof h == "function" ? h.call(o, i.toDate(e), d) : (typeof h == "string" && (n = h), o.zoomTo(e, n));
    };
    return Object.assign({ title: Ut(r.navLinkHint, [s, u], s), "data-navlink": "" }, a ? uo(c) : { onClick: c });
  }
  return { "aria-label": s };
}
let aa = null;
function lb() {
  return aa === null && (aa = ub()), aa;
}
function ub() {
  let t = document.createElement("div");
  jt(t, {
    position: "absolute",
    top: -1e3,
    left: 0,
    border: 0,
    padding: 0,
    overflow: "scroll",
    direction: "rtl"
  }), t.innerHTML = "<div></div>", document.body.appendChild(t);
  let n = t.firstChild.getBoundingClientRect().left > t.getBoundingClientRect().left;
  return Ia(t), n;
}
let ia;
function cb() {
  return ia || (ia = db()), ia;
}
function db() {
  let t = document.createElement("div");
  t.style.overflow = "scroll", t.style.position = "absolute", t.style.top = "-9999px", t.style.left = "-9999px", document.body.appendChild(t);
  let e = zo(t);
  return document.body.removeChild(t), e;
}
function zo(t) {
  return {
    x: t.offsetHeight - t.clientHeight,
    y: t.offsetWidth - t.clientWidth
  };
}
function fb(t, e = !1) {
  let n = window.getComputedStyle(t), a = parseInt(n.borderLeftWidth, 10) || 0, i = parseInt(n.borderRightWidth, 10) || 0, r = parseInt(n.borderTopWidth, 10) || 0, o = parseInt(n.borderBottomWidth, 10) || 0, s = zo(t), u = s.y - a - i, c = s.x - r - o, d = {
    borderLeft: a,
    borderRight: i,
    borderTop: r,
    borderBottom: o,
    scrollbarBottom: c,
    scrollbarLeft: 0,
    scrollbarRight: 0
  };
  return lb() && n.direction === "rtl" ? d.scrollbarLeft = u : d.scrollbarRight = u, e && (d.paddingLeft = parseInt(n.paddingLeft, 10) || 0, d.paddingRight = parseInt(n.paddingRight, 10) || 0, d.paddingTop = parseInt(n.paddingTop, 10) || 0, d.paddingBottom = parseInt(n.paddingBottom, 10) || 0), d;
}
function mb(t, e = !1, n) {
  let a = qa(t), i = fb(t, e), r = {
    left: a.left + i.borderLeft + i.scrollbarLeft,
    right: a.right - i.borderRight - i.scrollbarRight,
    top: a.top + i.borderTop,
    bottom: a.bottom - i.borderBottom - i.scrollbarBottom
  };
  return e && (r.left += i.paddingLeft, r.right -= i.paddingRight, r.top += i.paddingTop, r.bottom -= i.paddingBottom), r;
}
function qa(t) {
  let e = t.getBoundingClientRect();
  return {
    left: e.left + window.scrollX,
    top: e.top + window.scrollY,
    right: e.right + window.scrollX,
    bottom: e.bottom + window.scrollY
  };
}
function hb(t) {
  let e = Lo(t), n = t.getBoundingClientRect();
  for (let a of e) {
    let i = Fo(n, a.getBoundingClientRect());
    if (i)
      n = i;
    else
      return null;
  }
  return n;
}
function Lo(t) {
  let e = [];
  for (; t instanceof HTMLElement; ) {
    let n = window.getComputedStyle(t);
    if (n.position === "fixed")
      break;
    /(auto|scroll)/.test(n.overflow + n.overflowY + n.overflowX) && e.push(t), t = t.parentNode;
  }
  return e;
}
class In {
  constructor(e, n, a, i) {
    this.els = n;
    let r = this.originClientRect = e.getBoundingClientRect();
    a && this.buildElHorizontals(r.left), i && this.buildElVerticals(r.top);
  }
  // Populates the left/right internal coordinate arrays
  buildElHorizontals(e) {
    let n = [], a = [];
    for (let i of this.els) {
      let r = i.getBoundingClientRect();
      n.push(r.left - e), a.push(r.right - e);
    }
    this.lefts = n, this.rights = a;
  }
  // Populates the top/bottom internal coordinate arrays
  buildElVerticals(e) {
    let n = [], a = [];
    for (let i of this.els) {
      let r = i.getBoundingClientRect();
      n.push(r.top - e), a.push(r.bottom - e);
    }
    this.tops = n, this.bottoms = a;
  }
  // Given a left offset (from document left), returns the index of the el that it horizontally intersects.
  // If no intersection is made, returns undefined.
  leftToIndex(e) {
    let { lefts: n, rights: a } = this, i = n.length, r;
    for (r = 0; r < i; r += 1)
      if (e >= n[r] && e < a[r])
        return r;
  }
  // Given a top offset (from document top), returns the index of the el that it vertically intersects.
  // If no intersection is made, returns undefined.
  topToIndex(e) {
    let { tops: n, bottoms: a } = this, i = n.length, r;
    for (r = 0; r < i; r += 1)
      if (e >= n[r] && e < a[r])
        return r;
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
    return sn(this.tops || [], e.tops || []) && sn(this.bottoms || [], e.bottoms || []) && sn(this.lefts || [], e.lefts || []) && sn(this.rights || [], e.rights || []);
  }
}
function sn(t, e) {
  const n = t.length;
  if (n !== e.length)
    return !1;
  for (let a = 0; a < n; a++)
    if (Math.round(t[a]) !== Math.round(e[a]))
      return !1;
  return !0;
}
class Qa {
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
class vb extends Qa {
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
class pb extends Qa {
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
class St extends Ie {
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
    !ze(e, ".fc-event-mirror");
  }
  isValidDateDownEl(e) {
    return !ze(e, ".fc-event:not(.fc-bg-event)") && !ze(e, ".fc-more-link") && // a "more.." link
    !ze(e, "a[data-navlink]") && // a clickable nav link
    !ze(e, ".fc-popover");
  }
}
class gb {
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
      const i = Object.assign(Object.assign({}, n), { span: Ho(n.span, e.touchingEntry.span) });
      a.push(i), this.splitEntry(n, e.touchingEntry, a);
    } else
      a.push(n);
  }
  /*
  Does NOT add what hit the `barrier` into hiddenEntries. Should already be done.
  */
  splitEntry(e, n, a) {
    let i = e.span, r = n.span;
    i.start < r.start && this.insertEntry({
      index: e.index,
      thickness: e.thickness,
      span: { start: i.start, end: r.start }
    }, a), i.end > r.end && this.insertEntry({
      index: e.index,
      thickness: e.thickness,
      span: { start: r.end, end: i.end }
    }, a);
  }
  insertEntryAt(e, n) {
    let { entriesByLevel: a, levelCoords: i } = this;
    n.lateral === -1 ? (ra(i, n.level, n.levelCoord), ra(a, n.level, [e])) : ra(a[n.level], n.lateral, e), this.stackCnts[Gt(e)] = n.stackCnt;
  }
  /*
  does not care about limits
  */
  findInsertion(e) {
    let { levelCoords: n, entriesByLevel: a, strictOrder: i, stackCnts: r } = this, o = n.length, s = 0, u = -1, c = -1, d = null, h = 0;
    for (let y = 0; y < o; y += 1) {
      const g = n[y];
      if (!i && g >= s + this.getEntryThickness(e))
        break;
      let b = a[y], C, w = Qi(b, e.span.start, qi), k = w[0] + w[1];
      for (
        ;
        // loop through entries that horizontally intersect
        (C = b[k]) && // but not past the whole entry list
        C.span.start < e.span.end;
      ) {
        let T = g + this.getEntryThickness(C);
        T > s && (s = T, d = C, u = y, c = k), T === s && (h = Math.max(h, r[Gt(C)] + 1)), k += 1;
      }
    }
    let p = 0;
    if (d)
      for (p = u + 1; p < o && n[p] < s; )
        p += 1;
    let v = -1;
    return p < o && n[p] === s && (v = Qi(a[p], e.span.end, qi)[0]), {
      touchingLevel: u,
      touchingLateral: c,
      touchingEntry: d,
      stackCnt: h,
      levelCoord: s,
      level: p,
      lateral: v
    };
  }
  // sorted by levelCoord (lowest to highest)
  toRects() {
    let { entriesByLevel: e, levelCoords: n } = this, a = e.length, i = [];
    for (let r = 0; r < a; r += 1) {
      let o = e[r], s = n[r];
      for (let u of o)
        i.push(Object.assign(Object.assign({}, u), { thickness: this.getEntryThickness(u), levelCoord: s }));
    }
    return i;
  }
}
function qi(t) {
  return t.span.end;
}
function Gt(t) {
  return t.index + ":" + t.span.start;
}
function Ho(t, e) {
  let n = Math.max(t.start, e.start), a = Math.min(t.end, e.end);
  return n < a ? { start: n, end: a } : null;
}
function ra(t, e, n) {
  t.splice(e, 0, n);
}
function Qi(t, e, n) {
  let a = 0, i = t.length;
  if (!i || e < n(t[a]))
    return [0, 0];
  if (e > n(t[i - 1]))
    return [i, 0];
  for (; a < i; ) {
    let r = Math.floor(a + (i - a) / 2), o = n(t[r]);
    if (e < o)
      i = r;
    else if (e > o)
      a = r + 1;
    else
      return [r, 1];
  }
  return [a, 0];
}
class yb {
  constructor(e, n) {
    this.emitter = new zn();
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
const Za = {};
function bb(t, e) {
  return !t || e > 10 ? Fe({ weekday: "short" }) : e > 1 ? Fe({ weekday: "short", month: "numeric", day: "numeric", omitCommas: !0 }) : Fe({ weekday: "long" });
}
const Vo = "fc-col-header-cell";
function jo(t) {
  return t.text;
}
class Cb extends Ie {
  render() {
    let { dateEnv: e, options: n, theme: a, viewApi: i } = this.context, { props: r } = this, { date: o, dateProfile: s } = r, u = Bo(o, r.todayRange, null, s), c = [Vo].concat(Ka(u, a)), d = e.format(o, r.dayHeaderFormat), h = !u.isDisabled && r.colCnt > 1 ? ba(this.context, o) : {}, p = e.toDate(o);
    e.namedTimeZoneImpl && (p = ut(p, 36e5));
    let v = Object.assign(Object.assign(Object.assign({ date: p, view: i }, r.extraRenderProps), { text: d }), u);
    return H(tt, { elTag: "th", elClasses: c, elAttrs: Object.assign({ role: "columnheader", colSpan: r.colSpan, "data-date": u.isDisabled ? void 0 : xa(o) }, r.extraDataAttrs), renderProps: v, generatorName: "dayHeaderContent", customGenerator: n.dayHeaderContent, defaultGenerator: jo, classNameGenerator: n.dayHeaderClassNames, didMount: n.dayHeaderDidMount, willUnmount: n.dayHeaderWillUnmount }, (y) => H("div", { className: "fc-scrollgrid-sync-inner" }, !u.isDisabled && H(y, { elTag: "a", elAttrs: h, elClasses: [
      "fc-col-header-cell-cushion",
      r.isSticky && "fc-sticky"
    ] })));
  }
}
const wb = Fe({ weekday: "long" });
class Ab extends Ie {
  render() {
    let { props: e } = this, { dateEnv: n, theme: a, viewApi: i, options: r } = this.context, o = Be(/* @__PURE__ */ new Date(2592e5), e.dow), s = {
      dow: e.dow,
      isDisabled: !1,
      isFuture: !1,
      isPast: !1,
      isToday: !1,
      isOther: !1
    }, u = n.format(o, e.dayHeaderFormat), c = Object.assign(Object.assign(Object.assign(Object.assign({
      // TODO: make this public?
      date: o
    }, s), { view: i }), e.extraRenderProps), { text: u });
    return H(tt, { elTag: "th", elClasses: [
      Vo,
      ...Ka(s, a),
      ...e.extraClassNames || []
    ], elAttrs: Object.assign({ role: "columnheader", colSpan: e.colSpan }, e.extraDataAttrs), renderProps: c, generatorName: "dayHeaderContent", customGenerator: r.dayHeaderContent, defaultGenerator: jo, classNameGenerator: r.dayHeaderClassNames, didMount: r.dayHeaderDidMount, willUnmount: r.dayHeaderWillUnmount }, (d) => H(
      "div",
      { className: "fc-scrollgrid-sync-inner" },
      H(d, { elTag: "a", elClasses: [
        "fc-col-header-cell-cushion",
        e.isSticky && "fc-sticky"
      ], elAttrs: {
        "aria-label": n.format(o, wb)
      } })
    ));
  }
}
class _b extends Ie {
  constructor() {
    super(...arguments), this.createDayHeaderFormatter = be(kb);
  }
  render() {
    let { context: e } = this, { dates: n, dateProfile: a, datesRepDistinctDays: i, renderIntro: r } = this.props, o = this.createDayHeaderFormatter(e.options.dayHeaderFormat, i, n.length);
    return H(Ln, { unit: "day" }, (s, u) => H(
      "tr",
      { role: "row" },
      r && r("day"),
      n.map((c) => i ? H(Cb, { key: c.toISOString(), date: c, dateProfile: a, todayRange: u, colCnt: n.length, dayHeaderFormat: o }) : H(Ab, { key: c.getUTCDay(), dow: c.getUTCDay(), dayHeaderFormat: o }))
    ));
  }
}
function kb(t, e, n) {
  return t || bb(e, n);
}
class Sb {
  constructor(e, n) {
    let a = e.start, { end: i } = e, r = [], o = [], s = -1;
    for (; a < i; )
      n.isHiddenDay(a) ? r.push(s + 0.5) : (s += 1, r.push(s), o.push(a)), a = Be(a, 1);
    this.dates = o, this.indices = r, this.cnt = o.length;
  }
  sliceRange(e) {
    let n = this.getDateDayIndex(e.start), a = this.getDateDayIndex(Be(e.end, -1)), i = Math.max(0, n), r = Math.min(this.cnt - 1, a);
    return i = Math.ceil(i), r = Math.floor(r), i <= r ? {
      firstIndex: i,
      lastIndex: r,
      isStart: n === i,
      isEnd: a === r
    } : null;
  }
  // Given a date, returns its chronolocial cell-index from the first cell of the grid.
  // If the date lies between cells (because of hiddenDays), returns a floating-point value between offsets.
  // If before the first offset, returns a negative number.
  // If after the last offset, returns an offset past the last cell offset.
  // Only works for *start* dates of cells. Will not work for exclusive end dates for cells.
  getDateDayIndex(e) {
    let { indices: n } = this, a = Math.floor(Lt(this.dates[0], e));
    return a < 0 ? n[0] - 1 : a >= n.length ? n[n.length - 1] + 1 : n[a];
  }
}
class Tb {
  constructor(e, n) {
    let { dates: a } = e, i, r, o;
    if (n) {
      for (r = a[0].getUTCDay(), i = 1; i < a.length && a[i].getUTCDay() !== r; i += 1)
        ;
      o = Math.ceil(a.length / i);
    } else
      o = 1, i = a.length;
    this.rowCnt = o, this.colCnt = i, this.daySeries = e, this.cells = this.buildCells(), this.headerDates = this.buildHeaderDates();
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
      let { firstIndex: r, lastIndex: o } = a, s = r;
      for (; s <= o; ) {
        let u = Math.floor(s / n), c = Math.min((u + 1) * n, o + 1);
        i.push({
          row: u,
          firstCol: s % n,
          lastCol: (c - 1) % n,
          isStart: a.isStart && s === r,
          isEnd: a.isEnd && c - 1 === o
        }), s = c;
      }
    }
    return i;
  }
}
class Eb {
  constructor() {
    this.sliceBusinessHours = be(this._sliceBusinessHours), this.sliceDateSelection = be(this._sliceDateSpan), this.sliceEventStore = be(this._sliceEventStore), this.sliceEventDrag = be(this._sliceInteraction), this.sliceEventResize = be(this._sliceInteraction), this.forceDayIfListItem = !1;
  }
  sliceProps(e, n, a, i, ...r) {
    let { eventUiBases: o } = e, s = this.sliceEventStore(e.eventStore, o, n, a, ...r);
    return {
      dateSelectionSegs: this.sliceDateSelection(e.dateSelection, n, a, o, i, ...r),
      businessHourSegs: this.sliceBusinessHours(e.businessHours, n, a, i, ...r),
      fgEventSegs: s.fg,
      bgEventSegs: s.bg,
      eventDrag: this.sliceEventDrag(e.eventDrag, o, n, a, ...r),
      eventResize: this.sliceEventResize(e.eventResize, o, n, a, ...r),
      eventSelection: e.eventSelection
    };
  }
  sliceNowDate(e, n, a, i, ...r) {
    return this._sliceDateSpan(
      { range: { start: e, end: ut(e, 1) }, allDay: !1 },
      // add 1 ms, protect against null range
      n,
      a,
      {},
      i,
      ...r
    );
  }
  _sliceBusinessHours(e, n, a, i, ...r) {
    return e ? this._sliceEventStore(bt(e, ln(n, !!a), i), {}, n, a, ...r).bg : [];
  }
  _sliceEventStore(e, n, a, i, ...r) {
    if (e) {
      let o = Yi(e, n, ln(a, !!i), i);
      return {
        bg: this.sliceEventRanges(o.bg, r),
        fg: this.sliceEventRanges(o.fg, r)
      };
    }
    return { bg: [], fg: [] };
  }
  _sliceInteraction(e, n, a, i, ...r) {
    if (!e)
      return null;
    let o = Yi(e.mutatedEvents, n, ln(a, !!i), i);
    return {
      segs: this.sliceEventRanges(o.fg, r),
      affectedInstances: e.affectedEvents.instances,
      isEvent: e.isEvent
    };
  }
  _sliceDateSpan(e, n, a, i, r, ...o) {
    if (!e)
      return [];
    let s = ln(n, !!a), u = Pt(e.range, s);
    if (u) {
      e = Object.assign(Object.assign({}, e), { range: u });
      let c = Ky(e, i, r), d = this.sliceRange(e.range, ...o);
      for (let h of d)
        h.eventRange = c;
      return d;
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
      end: Be(a.start, 1)
    });
    let i = this.sliceRange(a, ...n);
    for (let r of i)
      r.eventRange = e, r.isStart = e.isStart && r.isStart, r.isEnd = e.isEnd && r.isEnd;
    return i;
  }
}
function ln(t, e) {
  let n = t.activeRange;
  return e ? n : {
    start: ut(n.start, t.slotMinTime.milliseconds),
    end: ut(n.end, t.slotMaxTime.milliseconds - 864e5)
    // 864e5 = ms in a day
  };
}
function Uo(t, e, n) {
  let { instances: a } = t.mutatedEvents;
  for (let i in a)
    if (!Fn(e.validRange, a[i].range))
      return !1;
  return Wo({ eventDrag: t }, n);
}
function Mb(t, e, n) {
  return Fn(e.validRange, t.range) ? Wo({ dateSelection: t }, n) : !1;
}
function Wo(t, e) {
  let n = e.getCurrentData(), a = Object.assign({ businessHours: n.businessHours, dateSelection: "", eventStore: n.eventStore, eventUiBases: n.eventUiBases, eventSelection: "", eventDrag: null, eventResize: null }, t);
  return (e.pluginHooks.isPropsValid || Nb)(a, e);
}
function Nb(t, e, n = {}, a) {
  return !(t.eventDrag && !Db(t, e, n, a) || t.dateSelection && !Ib(t, e, n, a));
}
function Db(t, e, n, a) {
  let i = e.getCurrentData(), r = t.eventDrag, o = r.mutatedEvents, s = o.defs, u = o.instances, c = Dn(s, r.isEvent ? t.eventUiBases : { "": i.selectionConfig });
  a && (c = At(c, a));
  let d = Sy(t.eventStore, r.affectedEvents.instances), h = d.defs, p = d.instances, v = Dn(h, t.eventUiBases);
  for (let y in u) {
    let g = u[y], b = g.range, C = c[g.defId], w = s[g.defId];
    if (!Yo(C.constraints, b, d, t.businessHours, e))
      return !1;
    let { eventOverlap: k } = e.options, T = typeof k == "function" ? k : null;
    for (let x in p) {
      let L = p[x];
      if (La(b, L.range) && (v[L.defId].overlap === !1 && r.isEvent || C.overlap === !1 || T && !T(
        new Ne(e, h[L.defId], L),
        // still event
        new Ne(e, w, g)
      )))
        return !1;
    }
    let M = i.eventStore;
    for (let x of C.allows) {
      let L = Object.assign(Object.assign({}, n), { range: g.range, allDay: w.allDay }), K = M.defs[w.defId], G = M.instances[y], V;
      if (K ? V = new Ne(e, K, G) : V = new Ne(e, w), !x(Wa(L, e), V))
        return !1;
    }
  }
  return !0;
}
function Ib(t, e, n, a) {
  let i = t.eventStore, r = i.defs, o = i.instances, s = t.dateSelection, u = s.range, { selectionConfig: c } = e.getCurrentData();
  if (a && (c = a(c)), !Yo(c.constraints, u, i, t.businessHours, e))
    return !1;
  let { selectOverlap: d } = e.options, h = typeof d == "function" ? d : null;
  for (let p in o) {
    let v = o[p];
    if (La(u, v.range) && (c.overlap === !1 || h && !h(new Ne(e, r[v.defId], v), null)))
      return !1;
  }
  for (let p of c.allows) {
    let v = Object.assign(Object.assign({}, n), s);
    if (!p(Wa(v, e), null))
      return !1;
  }
  return !0;
}
function Yo(t, e, n, a, i) {
  for (let r of t)
    if (!Rb(Ob(r, e, n, a, i), e))
      return !1;
  return !0;
}
function Ob(t, e, n, a, i) {
  return t === "businessHours" ? oa(bt(a, e, i)) : typeof t == "string" ? oa(Bn(n, (r) => r.groupId === t)) : typeof t == "object" && t ? oa(bt(t, e, i)) : [];
}
function oa(t) {
  let { instances: e } = t, n = [];
  for (let a in e)
    n.push(e[a].range);
  return n;
}
function Rb(t, e) {
  for (let n of t)
    if (Fn(n, e))
      return !0;
  return !1;
}
const un = /^(visible|hidden)$/;
class xb extends Ie {
  constructor() {
    super(...arguments), this.handleEl = (e) => {
      this.el = e, Ze(this.props.elRef, e);
    };
  }
  render() {
    let { props: e } = this, { liquid: n, liquidIsAbsolute: a } = e, i = n && a, r = ["fc-scroller"];
    return n && (a ? r.push("fc-scroller-liquid-absolute") : r.push("fc-scroller-liquid")), H("div", { ref: this.handleEl, className: r.join(" "), style: {
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
    if (un.test(this.props.overflowX))
      return !1;
    let { el: e } = this, n = this.el.getBoundingClientRect().width - this.getYScrollbarWidth(), { children: a } = e;
    for (let i = 0; i < a.length; i += 1)
      if (a[i].getBoundingClientRect().width > n)
        return !0;
    return !1;
  }
  needsYScrolling() {
    if (un.test(this.props.overflowY))
      return !1;
    let { el: e } = this, n = this.el.getBoundingClientRect().height - this.getXScrollbarWidth(), { children: a } = e;
    for (let i = 0; i < a.length; i += 1)
      if (a[i].getBoundingClientRect().height > n)
        return !0;
    return !1;
  }
  getXScrollbarWidth() {
    return un.test(this.props.overflowX) ? 0 : this.el.offsetHeight - this.el.clientHeight;
  }
  getYScrollbarWidth() {
    return un.test(this.props.overflowY) ? 0 : this.el.offsetWidth - this.el.clientWidth;
  }
}
class vt {
  constructor(e) {
    this.masterCallback = e, this.currentMap = {}, this.depths = {}, this.callbackMap = {}, this.handleValue = (n, a) => {
      let { depths: i, currentMap: r } = this, o = !1, s = !1;
      n !== null ? (o = a in r, r[a] = n, i[a] = (i[a] || 0) + 1, s = !0) : (i[a] -= 1, i[a] || (delete r[a], delete this.callbackMap[a], o = !0)), this.masterCallback && (o && this.masterCallback(null, String(a)), s && this.masterCallback(n, String(a)));
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
    return jg(this.currentMap, e, n, a);
  }
  getAll() {
    return Ba(this.currentMap);
  }
}
function $b(t) {
  let e = Vp(t, ".fc-scrollgrid-shrink"), n = 0;
  for (let a of e)
    n = Math.max(n, ng(a));
  return Math.ceil(n);
}
function Go(t, e) {
  return t.liquid && e.liquid;
}
function Pb(t, e) {
  return e.maxHeight != null || // if its possible for the height to max out, we might need scrollbars
  Go(t, e);
}
function Fb(t, e, n, a) {
  let { expandRows: i } = n;
  return typeof e.content == "function" ? e.content(n) : H("table", {
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
  }, n.tableColGroupNode, H(a ? "thead" : "tbody", {
    role: "presentation"
  }, typeof e.rowContent == "function" ? e.rowContent(n) : e.rowContent));
}
function Bb(t, e) {
  return lt(t, e, qe);
}
function zb(t, e) {
  let n = [];
  for (let a of t) {
    let i = a.span || 1;
    for (let r = 0; r < i; r += 1)
      n.push(H("col", { style: {
        width: a.width === "shrink" ? Lb(e) : a.width || "",
        minWidth: a.minWidth || ""
      } }));
  }
  return H("colgroup", {}, ...n);
}
function Lb(t) {
  return t ?? 4;
}
function Hb(t) {
  for (let e of t)
    if (e.width === "shrink")
      return !0;
  return !1;
}
function Vb(t, e) {
  let n = [
    "fc-scrollgrid",
    e.theme.getClass("table")
  ];
  return t && n.push("fc-scrollgrid-liquid"), n;
}
function jb(t, e) {
  let n = [
    "fc-scrollgrid-section",
    `fc-scrollgrid-section-${t.type}`,
    t.className
    // used?
  ];
  return e && t.liquid && t.maxHeight == null && n.push("fc-scrollgrid-section-liquid"), t.isSticky && n.push("fc-scrollgrid-section-sticky"), n;
}
function Ub(t) {
  return H("div", { className: "fc-scrollgrid-sticky-shim", style: {
    width: t.clientWidth,
    minWidth: t.tableMinWidth
  } });
}
function Zi(t) {
  let { stickyHeaderDates: e } = t;
  return (e == null || e === "auto") && (e = t.height === "auto" || t.viewHeight === "auto"), e;
}
function Wb(t) {
  let { stickyFooterScrollbar: e } = t;
  return (e == null || e === "auto") && (e = t.height === "auto" || t.viewHeight === "auto"), e;
}
class Ko extends Ie {
  constructor() {
    super(...arguments), this.processCols = be((e) => e, Bb), this.renderMicroColGroup = be(zb), this.scrollerRefs = new vt(), this.scrollerElRefs = new vt(this._handleScrollerEl.bind(this)), this.state = {
      shrinkWidth: null,
      forceYScrollbars: !1,
      scrollerClientWidths: {},
      scrollerClientHeights: {}
    }, this.handleSizing = () => {
      this.safeSetState(Object.assign({ shrinkWidth: this.computeShrinkWidth() }, this.computeScrollerDims()));
    };
  }
  render() {
    let { props: e, state: n, context: a } = this, i = e.sections || [], r = this.processCols(e.cols), o = this.renderMicroColGroup(r, n.shrinkWidth), s = Vb(e.liquid, a);
    e.collapsibleWidth && s.push("fc-scrollgrid-collapsible");
    let u = i.length, c = 0, d, h = [], p = [], v = [];
    for (; c < u && (d = i[c]).type === "header"; )
      h.push(this.renderSection(d, o, !0)), c += 1;
    for (; c < u && (d = i[c]).type === "body"; )
      p.push(this.renderSection(d, o, !1)), c += 1;
    for (; c < u && (d = i[c]).type === "footer"; )
      v.push(this.renderSection(d, o, !0)), c += 1;
    let y = !Po();
    const g = { role: "rowgroup" };
    return H("table", {
      role: "grid",
      className: s.join(" "),
      style: { height: e.height }
    }, !!(!y && h.length) && H("thead", g, ...h), !!(!y && p.length) && H("tbody", g, ...p), !!(!y && v.length) && H("tfoot", g, ...v), y && H("tbody", g, ...h, ...p, ...v));
  }
  renderSection(e, n, a) {
    return "outerContent" in e ? H(Oe, { key: e.key }, e.outerContent) : H("tr", { key: e.key, role: "presentation", className: jb(e, this.props.liquid).join(" ") }, this.renderChunkTd(e, n, e.chunk, a));
  }
  renderChunkTd(e, n, a, i) {
    if ("outerContent" in a)
      return a.outerContent;
    let { props: r } = this, { forceYScrollbars: o, scrollerClientWidths: s, scrollerClientHeights: u } = this.state, c = Pb(r, e), d = Go(r, e), h = r.liquid ? o ? "scroll" : c ? "auto" : "hidden" : "visible", p = e.key, v = Fb(e, a, {
      tableColGroupNode: n,
      tableMinWidth: "",
      clientWidth: !r.collapsibleWidth && s[p] !== void 0 ? s[p] : null,
      clientHeight: u[p] !== void 0 ? u[p] : null,
      expandRows: e.expandRows,
      syncRowHeights: !1,
      rowSyncHeights: [],
      reportRowHeightChange: () => {
      }
    }, i);
    return H(i ? "th" : "td", {
      ref: a.elRef,
      role: "presentation"
    }, H(
      "div",
      { className: `fc-scroller-harness${d ? " fc-scroller-harness-liquid" : ""}` },
      H(xb, { ref: this.scrollerRefs.createRef(p), elRef: this.scrollerElRefs.createRef(p), overflowY: h, overflowX: r.liquid ? "hidden" : "visible", maxHeight: e.maxHeight, liquid: d, liquidIsAbsolute: !0 }, v)
    ));
  }
  _handleScrollerEl(e, n) {
    let a = Yb(this.props.sections, n);
    a && Ze(a.chunk.scrollerElRef, e);
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
    return Hb(this.props.cols) ? $b(this.scrollerElRefs.getAll()) : 0;
  }
  computeScrollerDims() {
    let e = cb(), { scrollerRefs: n, scrollerElRefs: a } = this, i = !1, r = {}, o = {};
    for (let s in n.currentMap) {
      let u = n.currentMap[s];
      if (u && u.needsYScrolling()) {
        i = !0;
        break;
      }
    }
    for (let s of this.props.sections) {
      let u = s.key, c = a.currentMap[u];
      if (c) {
        let d = c.parentNode;
        r[u] = Math.floor(d.getBoundingClientRect().width - (i ? e.y : 0)), o[u] = Math.floor(d.getBoundingClientRect().height);
      }
    }
    return { forceYScrollbars: i, scrollerClientWidths: r, scrollerClientHeights: o };
  }
}
Ko.addStateEquality({
  scrollerClientWidths: qe,
  scrollerClientHeights: qe
});
function Yb(t, e) {
  for (let n of t)
    if (n.key === e)
      return n;
  return null;
}
class Ja extends Ie {
  constructor() {
    super(...arguments), this.buildPublicEvent = be((e, n, a) => new Ne(e, n, a)), this.handleEl = (e) => {
      this.el = e, Ze(this.props.elRef, e), e && Gi(e, this.props.seg);
    };
  }
  render() {
    const { props: e, context: n } = this, { options: a } = n, { seg: i } = e, { eventRange: r } = i, { ui: o } = r, s = {
      event: this.buildPublicEvent(n, r.def, r.instance),
      view: n.viewApi,
      timeText: e.timeText,
      textColor: o.textColor,
      backgroundColor: o.backgroundColor,
      borderColor: o.borderColor,
      isDraggable: !e.disableDragging && Fy(i, n),
      isStartResizable: !e.disableResizing && By(i, n),
      isEndResizable: !e.disableResizing && zy(i),
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
    return H(tt, { elRef: this.handleEl, elTag: e.elTag, elAttrs: e.elAttrs, elClasses: [
      ...Ly(s),
      ...i.eventRange.ui.classNames,
      ...e.elClasses || []
    ], elStyle: e.elStyle, renderProps: s, generatorName: "eventContent", customGenerator: a.eventContent, defaultGenerator: e.defaultGenerator, classNameGenerator: a.eventClassNames, didMount: a.eventDidMount, willUnmount: a.eventWillUnmount }, e.children);
  }
  componentDidUpdate(e) {
    this.el && this.props.seg !== e.seg && Gi(this.el, this.props.seg);
  }
}
class qo extends Ie {
  render() {
    let { props: e, context: n } = this, { options: a } = n, { seg: i } = e, { ui: r } = i.eventRange, o = a.eventTimeFormat || e.defaultTimeFormat, s = Oo(i, o, n, e.defaultDisplayEventTime, e.defaultDisplayEventEnd);
    return H(Ja, Object.assign({}, e, { elTag: "a", elStyle: {
      borderColor: r.borderColor,
      backgroundColor: r.backgroundColor
    }, elAttrs: Ro(i, n), defaultGenerator: Gb, timeText: s }), (u, c) => H(
      Oe,
      null,
      H(u, { elTag: "div", elClasses: ["fc-event-main"], elStyle: { color: c.textColor } }),
      !!c.isStartResizable && H("div", { className: "fc-event-resizer fc-event-resizer-start" }),
      !!c.isEndResizable && H("div", { className: "fc-event-resizer fc-event-resizer-end" })
    ));
  }
}
qo.addPropsEquality({
  seg: qe
});
function Gb(t) {
  return H(
    "div",
    { className: "fc-event-main-frame" },
    t.timeText && H("div", { className: "fc-event-time" }, t.timeText),
    H(
      "div",
      { className: "fc-event-title-container" },
      H("div", { className: "fc-event-title fc-sticky" }, t.event.title || H(Oe, null, " "))
    )
  );
}
const Kb = Fe({ day: "numeric" });
class Qo extends Ie {
  constructor() {
    super(...arguments), this.refineRenderProps = vn(qb);
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
    return H(tt, { elRef: e.elRef, elTag: e.elTag, elAttrs: Object.assign(Object.assign({}, e.elAttrs), i.isDisabled ? {} : { "data-date": xa(e.date) }), elClasses: [
      ...Ka(i, n.theme),
      ...e.elClasses || []
    ], elStyle: e.elStyle, renderProps: i, generatorName: "dayCellContent", customGenerator: a.dayCellContent, defaultGenerator: e.defaultGenerator, classNameGenerator: (
      // don't use custom classNames if disabled
      i.isDisabled ? void 0 : a.dayCellClassNames
    ), didMount: a.dayCellDidMount, willUnmount: a.dayCellWillUnmount }, e.children);
  }
}
function Zo(t) {
  return !!(t.dayCellContent || va("dayCellContent", t));
}
function qb(t) {
  let { date: e, dateEnv: n, dateProfile: a, isMonthStart: i } = t, r = Bo(e, t.todayRange, null, a), o = t.showDayNumber ? n.format(e, i ? t.monthStartFormat : Kb) : "";
  return Object.assign(Object.assign(Object.assign({ date: n.toDate(e), view: t.viewApi }, r), {
    isMonthStart: i,
    dayNumberText: o
  }), t.extraRenderProps);
}
class Qb extends Ie {
  render() {
    let { props: e } = this, { seg: n } = e;
    return H(Ja, { elTag: "div", elClasses: ["fc-bg-event"], elStyle: { backgroundColor: n.eventRange.ui.backgroundColor }, defaultGenerator: Zb, seg: n, timeText: "", isDragging: !1, isResizing: !1, isDateSelecting: !1, isSelected: !1, isPast: e.isPast, isFuture: e.isFuture, isToday: e.isToday, disableDragging: !0, disableResizing: !0 });
  }
}
function Zb(t) {
  let { title: e } = t.event;
  return e && H("div", { className: "fc-event-title" }, t.event.title);
}
function Jb(t) {
  return H("div", { className: `fc-${t}` });
}
const Xb = (t) => H(_t.Consumer, null, (e) => {
  let { dateEnv: n, options: a } = e, { date: i } = t, r = a.weekNumberFormat || t.defaultFormat, o = n.computeWeekNumber(i), s = n.format(i, r), u = { num: o, text: s, date: i };
  return H(
    tt,
    { elRef: t.elRef, elTag: t.elTag, elAttrs: t.elAttrs, elClasses: t.elClasses, elStyle: t.elStyle, renderProps: u, generatorName: "weekNumberContent", customGenerator: a.weekNumberContent, defaultGenerator: e0, classNameGenerator: a.weekNumberClassNames, didMount: a.weekNumberDidMount, willUnmount: a.weekNumberWillUnmount },
    t.children
  );
});
function e0(t) {
  return t.text;
}
const sa = 10;
class t0 extends Ie {
  constructor() {
    super(...arguments), this.state = {
      titleId: $n()
    }, this.handleRootEl = (e) => {
      this.rootEl = e, this.props.elRef && Ze(this.props.elRef, e);
    }, this.handleDocumentMouseDown = (e) => {
      const n = so(e);
      this.rootEl.contains(n) || this.handleCloseClick();
    }, this.handleDocumentKeyDown = (e) => {
      e.key === "Escape" && this.handleCloseClick();
    }, this.handleCloseClick = () => {
      let { onClose: e } = this.props;
      e && e();
    };
  }
  render() {
    let { theme: e, options: n } = this.context, { props: a, state: i } = this, r = [
      "fc-popover",
      e.getClass("popover")
    ].concat(a.extraClassNames || []);
    return Mp(H(
      "div",
      Object.assign({}, a.extraAttrs, { id: a.id, className: r.join(" "), "aria-labelledby": i.titleId, ref: this.handleRootEl }),
      H(
        "div",
        { className: "fc-popover-header " + e.getClass("popoverHeader") },
        H("span", { className: "fc-popover-title", id: i.titleId }, a.title),
        H("span", { className: "fc-popover-close " + e.getIconClass("close"), title: n.closeHint, onClick: this.handleCloseClick })
      ),
      H("div", { className: "fc-popover-body " + e.getClass("popoverContent") }, a.children)
    ), a.parentEl);
  }
  componentDidMount() {
    document.addEventListener("mousedown", this.handleDocumentMouseDown), document.addEventListener("keydown", this.handleDocumentKeyDown), this.updateSize();
  }
  componentWillUnmount() {
    document.removeEventListener("mousedown", this.handleDocumentMouseDown), document.removeEventListener("keydown", this.handleDocumentKeyDown);
  }
  updateSize() {
    let { isRtl: e } = this.context, { alignmentEl: n, alignGridTop: a } = this.props, { rootEl: i } = this, r = hb(n);
    if (r) {
      let o = i.getBoundingClientRect(), s = a ? ze(n, ".fc-scrollgrid").getBoundingClientRect().top : r.top, u = e ? r.right - o.width : r.left;
      s = Math.max(s, sa), u = Math.min(u, document.documentElement.clientWidth - sa - o.width), u = Math.max(u, sa);
      let c = i.offsetParent.getBoundingClientRect();
      jt(i, {
        top: s - c.top,
        left: u - c.left
      });
    }
  }
}
class n0 extends St {
  constructor() {
    super(...arguments), this.handleRootEl = (e) => {
      this.rootEl = e, e ? this.context.registerInteractiveComponent(this, {
        el: e,
        useEventCenter: !1
      }) : this.context.unregisterInteractiveComponent(this);
    };
  }
  render() {
    let { options: e, dateEnv: n } = this.context, { props: a } = this, { startDate: i, todayRange: r, dateProfile: o } = a, s = n.format(i, e.dayPopoverFormat);
    return H(Qo, { elRef: this.handleRootEl, date: i, dateProfile: o, todayRange: r }, (u, c, d) => H(
      t0,
      { elRef: d.ref, id: a.id, title: s, extraClassNames: ["fc-more-popover"].concat(d.className || []), extraAttrs: d, parentEl: a.parentEl, alignmentEl: a.alignmentEl, alignGridTop: a.alignGridTop, onClose: a.onClose },
      Zo(e) && H(u, { elTag: "div", elClasses: ["fc-more-popover-misc"] }),
      a.children
    ));
  }
  queryHit(e, n, a, i) {
    let { rootEl: r, props: o } = this;
    return e >= 0 && e < a && n >= 0 && n < i ? {
      dateProfile: o.dateProfile,
      dateSpan: Object.assign({ allDay: !o.forceTimed, range: {
        start: o.startDate,
        end: o.endDate
      } }, o.extraDateSpan),
      dayEl: r,
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
class a0 extends Ie {
  constructor() {
    super(...arguments), this.state = {
      isPopoverOpen: !1,
      popoverId: $n()
    }, this.handleLinkEl = (e) => {
      this.linkEl = e, this.props.elRef && Ze(this.props.elRef, e);
    }, this.handleClick = (e) => {
      let { props: n, context: a } = this, { moreLinkClick: i } = a.options, r = Ji(n).start;
      function o(s) {
        let { def: u, instance: c, range: d } = s.eventRange;
        return {
          event: new Ne(a, u, c),
          start: a.dateEnv.toDate(d.start),
          end: a.dateEnv.toDate(d.end),
          isStart: s.isStart,
          isEnd: s.isEnd
        };
      }
      typeof i == "function" && (i = i({
        date: r,
        allDay: !!n.allDayDate,
        allSegs: n.allSegs.map(o),
        hiddenSegs: n.hiddenSegs.map(o),
        jsEvent: e,
        view: a.viewApi
      })), !i || i === "popover" ? this.setState({ isPopoverOpen: !0 }) : typeof i == "string" && a.calendarApi.zoomTo(r, i);
    }, this.handlePopoverClose = () => {
      this.setState({ isPopoverOpen: !1 });
    };
  }
  render() {
    let { props: e, state: n } = this;
    return H(_t.Consumer, null, (a) => {
      let { viewApi: i, options: r, calendarApi: o } = a, { moreLinkText: s } = r, { moreCnt: u } = e, c = Ji(e), d = typeof s == "function" ? s.call(o, u) : `+${u} ${s}`, h = Ut(r.moreLinkHint, [u], d), p = {
        num: u,
        shortText: `+${u}`,
        text: d,
        view: i
      };
      return H(
        Oe,
        null,
        !!e.moreCnt && H(tt, { elTag: e.elTag || "a", elRef: this.handleLinkEl, elClasses: [
          ...e.elClasses || [],
          "fc-more-link"
        ], elStyle: e.elStyle, elAttrs: Object.assign(Object.assign(Object.assign({}, e.elAttrs), uo(this.handleClick)), { title: h, "aria-expanded": n.isPopoverOpen, "aria-controls": n.isPopoverOpen ? n.popoverId : "" }), renderProps: p, generatorName: "moreLinkContent", customGenerator: r.moreLinkContent, defaultGenerator: e.defaultGenerator || i0, classNameGenerator: r.moreLinkClassNames, didMount: r.moreLinkDidMount, willUnmount: r.moreLinkWillUnmount }, e.children),
        n.isPopoverOpen && H(n0, { id: n.popoverId, startDate: c.start, endDate: c.end, dateProfile: e.dateProfile, todayRange: e.todayRange, extraDateSpan: e.extraDateSpan, parentEl: this.parentEl, alignmentEl: e.alignmentElRef ? e.alignmentElRef.current : this.linkEl, alignGridTop: e.alignGridTop, forceTimed: e.forceTimed, onClose: this.handlePopoverClose }, e.popoverContent())
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
    this.linkEl && (this.parentEl = ze(this.linkEl, ".fc-view-harness"));
  }
}
function i0(t) {
  return t.text;
}
function Ji(t) {
  if (t.allDayDate)
    return {
      start: t.allDayDate,
      end: Be(t.allDayDate, 1)
    };
  let { hiddenSegs: e } = t;
  return {
    start: r0(e),
    end: s0(e)
  };
}
function r0(t) {
  return t.reduce(o0).eventRange.range.start;
}
function o0(t, e) {
  return t.eventRange.range.start < e.eventRange.range.start ? t : e;
}
function s0(t) {
  return t.reduce(l0).eventRange.range.end;
}
function l0(t, e) {
  return t.eventRange.range.end > e.eventRange.range.end ? t : e;
}
class u0 {
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
class c0 extends u0 {
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
const d0 = [], Jo = {
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
}, Xo = Object.assign(Object.assign({}, Jo), {
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
function f0(t) {
  let e = t.length > 0 ? t[0].code : "en", n = d0.concat(t), a = {
    en: Xo
  };
  for (let i of n)
    a[i.code] = i;
  return {
    map: a,
    defaultCode: e
  };
}
function es(t, e) {
  return typeof t == "object" && !Array.isArray(t) ? ts(t.code, [t.code], t) : m0(t, e);
}
function m0(t, e) {
  let n = [].concat(t || []), a = h0(n, e) || Xo;
  return ts(t, n, a);
}
function h0(t, e) {
  for (let n = 0; n < t.length; n += 1) {
    let a = t[n].toLocaleLowerCase().split("-");
    for (let i = a.length; i > 0; i -= 1) {
      let r = a.slice(0, i).join("-");
      if (e[r])
        return e[r];
    }
  }
  return null;
}
function ts(t, e, n) {
  let a = Fa([Jo, n], ["buttonText"]);
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
function ct(t) {
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
function v0(t, e) {
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
  function i(r) {
    for (let o of r) {
      const s = o.name, u = n[s];
      u === void 0 ? (n[s] = o.id, i(o.deps), a = g0(a, o)) : u !== o.id && console.warn(`Duplicate plugin '${s}'`);
    }
  }
  return t && i(t), i(e), a;
}
function p0() {
  let t = [], e = [], n;
  return (a, i) => ((!n || !lt(a, t) || !lt(i, e)) && (n = v0(a, i)), t = a, e = i, n);
}
function g0(t, e) {
  return {
    premiumReleaseDate: y0(t.premiumReleaseDate, e.premiumReleaseDate),
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
function y0(t, e) {
  return t === void 0 ? e : e === void 0 ? t : new Date(Math.max(t.valueOf(), e.valueOf()));
}
class dt extends Jt {
}
dt.prototype.classes = {
  root: "fc-theme-standard",
  tableCellShaded: "fc-cell-shaded",
  buttonGroup: "fc-button-group",
  button: "fc-button fc-button-primary",
  buttonActive: "fc-button-active"
};
dt.prototype.baseIconClass = "fc-icon";
dt.prototype.iconClasses = {
  close: "fc-icon-x",
  prev: "fc-icon-chevron-left",
  next: "fc-icon-chevron-right",
  prevYear: "fc-icon-chevrons-left",
  nextYear: "fc-icon-chevrons-right"
};
dt.prototype.rtlIconClasses = {
  prev: "fc-icon-chevron-right",
  next: "fc-icon-chevron-left",
  prevYear: "fc-icon-chevrons-right",
  nextYear: "fc-icon-chevrons-left"
};
dt.prototype.iconOverrideOption = "buttonIcons";
dt.prototype.iconOverrideCustomButtonOption = "icon";
dt.prototype.iconOverridePrefix = "fc-icon-";
function b0(t, e) {
  let n = {}, a;
  for (a in t)
    Ca(a, n, t, e);
  for (a in e)
    Ca(a, n, t, e);
  return n;
}
function Ca(t, e, n, a) {
  if (e[t])
    return e[t];
  let i = C0(t, e, n, a);
  return i && (e[t] = i), i;
}
function C0(t, e, n, a) {
  let i = n[t], r = a[t], o = (d) => i && i[d] !== null ? i[d] : r && r[d] !== null ? r[d] : null, s = o("component"), u = o("superType"), c = null;
  if (u) {
    if (u === t)
      throw new Error("Can't have a custom view type that references itself");
    c = Ca(u, e, n, a);
  }
  return !s && c && (s = c.component), s ? {
    type: t,
    component: s,
    defaults: Object.assign(Object.assign({}, c ? c.defaults : {}), i ? i.rawOptions : {}),
    overrides: Object.assign(Object.assign({}, c ? c.overrides : {}), r ? r.rawOptions : {})
  } : null;
}
function Xi(t) {
  return At(t, w0);
}
function w0(t) {
  let e = typeof t == "function" ? { component: t } : t, { component: n } = e;
  return e.content ? n = er(e) : n && !(n.prototype instanceof Ie) && (n = er(Object.assign(Object.assign({}, e), { content: n }))), {
    superType: e.type,
    component: n,
    rawOptions: e
    // includes type and component too :(
  };
}
function er(t) {
  return (e) => H(_t.Consumer, null, (n) => H(tt, { elTag: "div", elClasses: yo(n.viewSpec), renderProps: Object.assign(Object.assign({}, e), { nextDayThreshold: n.options.nextDayThreshold }), generatorName: void 0, customGenerator: t.content, classNameGenerator: t.classNames, didMount: t.didMount, willUnmount: t.willUnmount }));
}
function A0(t, e, n, a) {
  let i = Xi(t), r = Xi(e.views), o = b0(i, r);
  return At(o, (s) => _0(s, r, e, n, a));
}
function _0(t, e, n, a, i) {
  let r = t.overrides.duration || t.defaults.duration || a.duration || n.duration, o = null, s = "", u = "", c = {};
  if (r && (o = k0(r), o)) {
    let p = ha(o);
    s = p.unit, p.value === 1 && (u = s, c = e[s] ? e[s].rawOptions : {});
  }
  let d = (p) => {
    let v = p.buttonText || {}, y = t.defaults.buttonTextKey;
    return y != null && v[y] != null ? v[y] : v[t.type] != null ? v[t.type] : v[u] != null ? v[u] : null;
  }, h = (p) => {
    let v = p.buttonHints || {}, y = t.defaults.buttonTextKey;
    return y != null && v[y] != null ? v[y] : v[t.type] != null ? v[t.type] : v[u] != null ? v[u] : null;
  };
  return {
    type: t.type,
    component: t.component,
    duration: o,
    durationUnit: s,
    singleUnit: u,
    optionDefaults: t.defaults,
    optionOverrides: Object.assign(Object.assign({}, c), t.overrides),
    buttonTextOverride: d(a) || d(n) || // constructor-specified buttonText lookup hash takes precedence
    t.overrides.buttonText,
    buttonTextDefault: d(i) || t.defaults.buttonText || d(Wt) || t.type,
    // not DRY
    buttonTitleOverride: h(a) || h(n) || t.overrides.buttonHint,
    buttonTitleDefault: h(i) || t.defaults.buttonHint || h(Wt)
    // will eventually fall back to buttonText
  };
}
let tr = {};
function k0(t) {
  let e = JSON.stringify(t), n = tr[e];
  return n === void 0 && (n = Ce(t), tr[e] = n), n;
}
function S0(t, e) {
  switch (e.type) {
    case "CHANGE_VIEW_TYPE":
      t = e.viewType;
  }
  return t;
}
function T0(t, e) {
  switch (e.type) {
    case "CHANGE_DATE":
      return e.dateMarker;
    default:
      return t;
  }
}
function E0(t, e, n) {
  let a = t.initialDate;
  return a != null ? e.createMarker(a) : n.getDateMarker();
}
function M0(t, e) {
  switch (e.type) {
    case "SET_OPTION":
      return Object.assign(Object.assign({}, t), { [e.optionName]: e.rawOptionValue });
    default:
      return t;
  }
}
function N0(t, e, n, a) {
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
function D0(t, e, n) {
  let a = e ? e.activeRange : null;
  return as({}, F0(t, n), a, n);
}
function I0(t, e, n, a) {
  let i = n ? n.activeRange : null;
  switch (e.type) {
    case "ADD_EVENT_SOURCES":
      return as(t, e.sources, i, a);
    case "REMOVE_EVENT_SOURCE":
      return R0(t, e.sourceId);
    case "PREV":
    // TODO: how do we track all actions that affect dateProfile :(
    case "NEXT":
    case "CHANGE_DATE":
    case "CHANGE_VIEW_TYPE":
      return n ? is(t, i, a) : t;
    case "FETCH_EVENT_SOURCES":
      return Xa(t, e.sourceIds ? (
        // why no type?
        mo(e.sourceIds)
      ) : rs(t, a), i, e.isRefetch || !1, a);
    case "RECEIVE_EVENTS":
    case "RECEIVE_EVENT_ERROR":
      return P0(t, e.sourceId, e.fetchId, e.fetchRange);
    case "REMOVE_ALL_EVENT_SOURCES":
      return {};
    default:
      return t;
  }
}
function O0(t, e, n) {
  let a = e ? e.activeRange : null;
  return Xa(t, rs(t, n), a, !0, n);
}
function ns(t) {
  for (let e in t)
    if (t[e].isFetching)
      return !0;
  return !1;
}
function as(t, e, n, a) {
  let i = {};
  for (let r of e)
    i[r.sourceId] = r;
  return n && (i = is(i, n, a)), Object.assign(Object.assign({}, t), i);
}
function R0(t, e) {
  return yt(t, (n) => n.sourceId !== e);
}
function is(t, e, n) {
  return Xa(t, yt(t, (a) => x0(a, e, n)), e, !1, n);
}
function x0(t, e, n) {
  return os(t, n) ? !n.options.lazyFetching || !t.fetchRange || t.isFetching || // always cancel outdated in-progress fetches
  e.start < t.fetchRange.start || e.end > t.fetchRange.end : !t.latestFetchId;
}
function Xa(t, e, n, a, i) {
  let r = {};
  for (let o in t) {
    let s = t[o];
    e[o] ? r[o] = $0(s, n, a, i) : r[o] = s;
  }
  return r;
}
function $0(t, e, n, a) {
  let { options: i, calendarApi: r } = a, o = a.pluginHooks.eventSourceDefs[t.sourceDefId], s = wt();
  return o.fetch({
    eventSource: t,
    range: e,
    isRefetch: n,
    context: a
  }, (u) => {
    let { rawEvents: c } = u;
    i.eventSourceSuccess && (c = i.eventSourceSuccess.call(r, c, u.response) || c), t.success && (c = t.success.call(r, c, u.response) || c), a.dispatch({
      type: "RECEIVE_EVENTS",
      sourceId: t.sourceId,
      fetchId: s,
      fetchRange: e,
      rawEvents: c
    });
  }, (u) => {
    let c = !1;
    i.eventSourceFailure && (i.eventSourceFailure.call(r, u), c = !0), t.failure && (t.failure(u), c = !0), c || console.warn(u.message, u), a.dispatch({
      type: "RECEIVE_EVENT_ERROR",
      sourceId: t.sourceId,
      fetchId: s,
      fetchRange: e,
      error: u
    });
  }), Object.assign(Object.assign({}, t), { isFetching: !0, latestFetchId: s });
}
function P0(t, e, n, a) {
  let i = t[e];
  return i && // not already removed
  n === i.latestFetchId ? Object.assign(Object.assign({}, t), { [e]: Object.assign(Object.assign({}, i), { isFetching: !1, fetchRange: a }) }) : t;
}
function rs(t, e) {
  return yt(t, (n) => os(n, e));
}
function F0(t, e) {
  let n = To(e), a = [].concat(t.eventSources || []), i = [];
  t.initialEvents && a.unshift(t.initialEvents), t.events && a.unshift(t.events);
  for (let r of a) {
    let o = So(r, e, n);
    o && i.push(o);
  }
  return i;
}
function os(t, e) {
  return !e.pluginHooks.eventSourceDefs[t.sourceDefId].ignoreRange;
}
function B0(t, e) {
  switch (e.type) {
    case "UNSELECT_DATES":
      return null;
    case "SELECT_DATES":
      return e.selection;
    default:
      return t;
  }
}
function z0(t, e) {
  switch (e.type) {
    case "UNSELECT_EVENT":
      return "";
    case "SELECT_EVENT":
      return e.eventInstanceId;
    default:
      return t;
  }
}
function L0(t, e) {
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
function H0(t, e) {
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
function V0(t, e, n, a, i) {
  let r = t.headerToolbar ? nr(t.headerToolbar, t, e, n, a, i) : null, o = t.footerToolbar ? nr(t.footerToolbar, t, e, n, a, i) : null;
  return { header: r, footer: o };
}
function nr(t, e, n, a, i, r) {
  let o = {}, s = [], u = !1;
  for (let c in t) {
    let d = t[c], h = j0(d, e, n, a, i, r);
    o[c] = h.widgets, s.push(...h.viewsWithButtons), u = u || h.hasTitle;
  }
  return { sectionWidgets: o, viewsWithButtons: s, hasTitle: u };
}
function j0(t, e, n, a, i, r) {
  let o = e.direction === "rtl", s = e.customButtons || {}, u = n.buttonText || {}, c = e.buttonText || {}, d = n.buttonHints || {}, h = e.buttonHints || {}, p = t ? t.split(" ") : [], v = [], y = !1;
  return { widgets: p.map((b) => b.split(",").map((C) => {
    if (C === "title")
      return y = !0, { buttonName: C };
    let w, k, T, M, x, L;
    if (w = s[C])
      T = (K) => {
        w.click && w.click.call(K.target, K, K.target);
      }, (M = a.getCustomButtonIconClass(w)) || (M = a.getIconClass(C, o)) || (x = w.text), L = w.hint || w.text;
    else if (k = i[C]) {
      v.push(C), T = () => {
        r.changeView(C);
      }, (x = k.buttonTextOverride) || (M = a.getIconClass(C, o)) || (x = k.buttonTextDefault);
      let K = k.buttonTextOverride || k.buttonTextDefault;
      L = Ut(
        k.buttonTitleOverride || k.buttonTitleDefault || e.viewHint,
        [K, C],
        // view-name = buttonName
        K
      );
    } else if (r[C])
      if (T = () => {
        r[C]();
      }, (x = u[C]) || (M = a.getIconClass(C, o)) || (x = c[C]), C === "prevYear" || C === "nextYear") {
        let K = C === "prevYear" ? "prev" : "next";
        L = Ut(d[K] || h[K], [
          c.year || "year",
          "year"
        ], c[C]);
      } else
        L = (K) => Ut(d[C] || h[C], [
          c[K] || K,
          K
        ], c[C]);
    return { buttonName: C, buttonClick: T, buttonIcon: M, buttonText: x, buttonHint: L };
  })), viewsWithButtons: v, hasTitle: y };
}
class U0 {
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
let W0 = {
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
const Y0 = ct({
  name: "array-event-source",
  eventSourceDefs: [W0]
});
let G0 = {
  parseMeta(t) {
    return typeof t.events == "function" ? t.events : null;
  },
  fetch(t, e, n) {
    const { dateEnv: a } = t.context, i = t.eventSource.meta;
    qy(i.bind(null, xo(t.range, a)), (r) => e({ rawEvents: r }), n);
  }
};
const K0 = ct({
  name: "func-event-source",
  eventSourceDefs: [G0]
}), q0 = {
  method: String,
  extraParams: z,
  startParam: String,
  endParam: String,
  timeZoneParam: String
};
let Q0 = {
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
    const { meta: a } = t.eventSource, i = J0(a, t.range, t.context);
    Qy(a.method, a.url, i).then(([r, o]) => {
      e({ rawEvents: r, response: o });
    }, n);
  }
};
const Z0 = ct({
  name: "json-event-source",
  eventSourceRefiners: q0,
  eventSourceDefs: [Q0]
});
function J0(t, e, n) {
  let { dateEnv: a, options: i } = n, r, o, s, u, c = {};
  return r = t.startParam, r == null && (r = i.startParam), o = t.endParam, o == null && (o = i.endParam), s = t.timeZoneParam, s == null && (s = i.timeZoneParam), typeof t.extraParams == "function" ? u = t.extraParams() : u = t.extraParams || {}, Object.assign(c, u), c[r] = a.formatIso(e.start), c[o] = a.formatIso(e.end), a.timeZone !== "local" && (c[s] = a.timeZone), c;
}
const X0 = {
  daysOfWeek: z,
  startTime: Ce,
  endTime: Ce,
  duration: Ce,
  startRecur: z,
  endRecur: z
};
let eC = {
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
      return t.duration && (a = t.duration), !a && t.startTime && t.endTime && (a = og(t.endTime, t.startTime)), {
        allDayGuess: !t.startTime && !t.endTime,
        duration: a,
        typeData: n
        // doesn't need endTime anymore but oh well
      };
    }
    return null;
  },
  expand(t, e, n) {
    let a = Pt(e, { start: t.startRecur, end: t.endRecur });
    return a ? nC(t.daysOfWeek, t.startTime, t.dateEnv, n, a) : [];
  }
};
const tC = ct({
  name: "simple-recurring-event",
  recurringTypes: [eC],
  eventRefiners: X0
});
function nC(t, e, n, a, i) {
  let r = t ? mo(t) : null, o = Me(i.start), s = i.end, u = [];
  for (e && (e.milliseconds < 0 ? s = Be(s, 1) : e.milliseconds >= 1e3 * 60 * 60 * 24 && (o = Be(o, -1))); o < s; ) {
    let c;
    (!r || r[o.getUTCDay()]) && (e ? c = a.add(o, e) : c = o, u.push(a.createMarker(n.toDate(c)))), o = Be(o, 1);
  }
  return u;
}
const aC = ct({
  name: "change-handler",
  optionChangeHandlers: {
    events(t, e) {
      ar([t], e);
    },
    eventSources: ar
  }
});
function ar(t, e) {
  let n = Ba(e.getCurrentData().eventSources);
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
    let r = !1;
    for (let o = 0; o < n.length; o += 1)
      if (n[o]._raw === i) {
        n.splice(o, 1), r = !0;
        break;
      }
    r || a.push(i);
  }
  for (let i of n)
    e.dispatch({
      type: "REMOVE_EVENT_SOURCE",
      sourceId: i.sourceId
    });
  for (let i of a)
    e.calendarApi.addEventSource(i);
}
function iC(t, e) {
  e.emitter.trigger("datesSet", Object.assign(Object.assign({}, xo(t.activeRange, e.dateEnv)), { view: e.viewApi }));
}
function rC(t, e) {
  let { emitter: n } = e;
  n.hasHandlers("eventsSet") && n.trigger("eventsSet", gt(t, e));
}
const oC = [
  Y0,
  K0,
  Z0,
  tC,
  aC,
  ct({
    name: "misc",
    isLoadingFuncs: [
      (t) => ns(t.eventSources)
    ],
    propSetHandlers: {
      dateProfile: iC,
      eventStore: rC
    }
  })
];
class sC {
  constructor(e, n) {
    this.runTaskOption = e, this.drainedOption = n, this.queue = [], this.delayedRunner = new Da(this.drain.bind(this));
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
function lC(t, e, n) {
  let a;
  return /^(year|month)$/.test(t.currentRangeUnit) ? a = t.currentRange : a = t.activeRange, n.formatRange(a.start, a.end, Fe(e.titleFormat || uC(t)), {
    isEndExclusive: t.isRangeAllDay,
    defaultSeparator: e.titleRangeSeparator
  });
}
function uC(t) {
  let { currentRangeUnit: e } = t;
  if (e === "year")
    return { year: "numeric" };
  if (e === "month")
    return { year: "numeric", month: "long" };
  let n = _n(t.currentRange.start, t.currentRange.end);
  return n !== null && n > 1 ? { year: "numeric", month: "short", day: "numeric" } : { year: "numeric", month: "long", day: "numeric" };
}
class ir {
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
class cC {
  constructor(e) {
    this.computeCurrentViewData = be(this._computeCurrentViewData), this.organizeRawLocales = be(f0), this.buildLocale = be(es), this.buildPluginHooks = p0(), this.buildDateEnv = be(dC), this.buildTheme = be(fC), this.parseToolbars = be(V0), this.buildViewSpecs = be(A0), this.buildDateProfileGenerator = vn(mC), this.buildViewApi = be(hC), this.buildViewUiProps = vn(gC), this.buildEventUiBySource = be(vC, qe), this.buildEventUiBases = be(pC), this.parseContextBusinessHours = vn(yC), this.buildTitle = be(lC), this.nowManager = new ir(), this.emitter = new zn(), this.actionRunner = new sC(this._handleAction.bind(this), this.updateData.bind(this)), this.currentCalendarOptionsInput = {}, this.currentCalendarOptionsRefined = {}, this.currentViewOptionsInput = {}, this.currentViewOptionsRefined = {}, this.currentCalendarOptionsRefiners = {}, this.optionsForRefining = [], this.optionsForHandling = [], this.getCurrentData = () => this.data, this.dispatch = (p) => {
      this.actionRunner.request(p);
    }, this.props = e, this.actionRunner.pause(), this.nowManager = new ir();
    let n = {}, a = this.computeOptionsData(e.optionOverrides, n, e.calendarApi), i = a.calendarOptions.initialView || a.pluginHooks.initialView, r = this.computeCurrentViewData(i, a, e.optionOverrides, n);
    e.calendarApi.currentDataManager = this, this.emitter.setThisContext(e.calendarApi), this.emitter.setOptions(r.options);
    let o = {
      nowManager: this.nowManager,
      dateEnv: a.dateEnv,
      options: a.calendarOptions,
      pluginHooks: a.pluginHooks,
      calendarApi: e.calendarApi,
      dispatch: this.dispatch,
      emitter: this.emitter,
      getCurrentData: this.getCurrentData
    }, s = E0(a.calendarOptions, a.dateEnv, this.nowManager), u = r.dateProfileGenerator.build(s);
    ot(u.activeRange, s) || (s = u.currentRange.start);
    for (let p of a.pluginHooks.contextInit)
      p(o);
    let c = D0(a.calendarOptions, u, o), d = {
      dynamicOptionOverrides: n,
      currentViewType: i,
      currentDate: s,
      dateProfile: u,
      businessHours: this.parseContextBusinessHours(o),
      eventSources: c,
      eventUiBases: {},
      eventStore: Ke(),
      renderableEventStore: Ke(),
      dateSelection: null,
      eventSelection: "",
      eventDrag: null,
      eventResize: null,
      selectionConfig: this.buildViewUiProps(o).selectionConfig
    }, h = Object.assign(Object.assign({}, o), d);
    for (let p of a.pluginHooks.reducers)
      Object.assign(d, p(null, null, h));
    la(d, o) && this.emitter.trigger("loading", !0), this.state = d, this.updateData(), this.actionRunner.resume();
  }
  resetOptions(e, n) {
    let { props: a } = this;
    n === void 0 ? a.optionOverrides = e : (a.optionOverrides = Object.assign(Object.assign({}, a.optionOverrides || {}), e), this.optionsForRefining.push(...n)), (n === void 0 || n.length) && this.actionRunner.request({
      type: "NOTHING"
    });
  }
  _handleAction(e) {
    let { props: n, state: a, emitter: i } = this, r = M0(a.dynamicOptionOverrides, e), o = this.computeOptionsData(n.optionOverrides, r, n.calendarApi), s = S0(a.currentViewType, e), u = this.computeCurrentViewData(s, o, n.optionOverrides, r);
    n.calendarApi.currentDataManager = this, i.setThisContext(n.calendarApi), i.setOptions(u.options);
    let c = {
      nowManager: this.nowManager,
      dateEnv: o.dateEnv,
      options: o.calendarOptions,
      pluginHooks: o.pluginHooks,
      calendarApi: n.calendarApi,
      dispatch: this.dispatch,
      emitter: i,
      getCurrentData: this.getCurrentData
    }, { currentDate: d, dateProfile: h } = a;
    this.data && this.data.dateProfileGenerator !== u.dateProfileGenerator && (h = u.dateProfileGenerator.build(d)), d = T0(d, e), h = N0(h, e, d, u.dateProfileGenerator), (e.type === "PREV" || // TODO: move this logic into DateProfileGenerator
    e.type === "NEXT" || // "
    !ot(h.currentRange, d)) && (d = h.currentRange.start);
    let p = I0(a.eventSources, e, h, c), v = wy(a.eventStore, e, p, h, c), g = ns(p) && !u.options.progressiveEventRendering && a.renderableEventStore || v, { eventUiSingleBase: b, selectionConfig: C } = this.buildViewUiProps(c), w = this.buildEventUiBySource(p), k = this.buildEventUiBases(g.defs, b, w), T = {
      dynamicOptionOverrides: r,
      currentViewType: s,
      currentDate: d,
      dateProfile: h,
      eventSources: p,
      eventStore: v,
      renderableEventStore: g,
      selectionConfig: C,
      eventUiBases: k,
      businessHours: this.parseContextBusinessHours(c),
      dateSelection: B0(a.dateSelection, e),
      eventSelection: z0(a.eventSelection, e),
      eventDrag: L0(a.eventDrag, e),
      eventResize: H0(a.eventResize, e)
    }, M = Object.assign(Object.assign({}, c), T);
    for (let K of o.pluginHooks.reducers)
      Object.assign(T, K(a, e, M));
    let x = la(a, c), L = la(T, c);
    !x && L ? i.trigger("loading", !0) : x && !L && i.trigger("loading", !1), this.state = T, n.onAction && n.onAction(e);
  }
  updateData() {
    let { props: e, state: n } = this, a = this.data, i = this.computeOptionsData(e.optionOverrides, n.dynamicOptionOverrides, e.calendarApi), r = this.computeCurrentViewData(n.currentViewType, i, e.optionOverrides, n.dynamicOptionOverrides), o = this.data = Object.assign(Object.assign(Object.assign({ nowManager: this.nowManager, viewTitle: this.buildTitle(n.dateProfile, r.options, i.dateEnv), calendarApi: e.calendarApi, dispatch: this.dispatch, emitter: this.emitter, getCurrentData: this.getCurrentData }, i), r), n), s = i.pluginHooks.optionChangeHandlers, u = a && a.calendarOptions, c = i.calendarOptions;
    if (u && u !== c) {
      u.timeZone !== c.timeZone && (n.eventSources = o.eventSources = O0(o.eventSources, n.dateProfile, o), n.eventStore = o.eventStore = Ui(o.eventStore, a.dateEnv, o.dateEnv), n.renderableEventStore = o.renderableEventStore = Ui(o.renderableEventStore, a.dateEnv, o.dateEnv));
      for (let d in s)
        (this.optionsForHandling.indexOf(d) !== -1 || u[d] !== c[d]) && s[d](c[d], o);
    }
    this.optionsForHandling = [], e.onData && e.onData(o);
  }
  computeOptionsData(e, n, a) {
    if (!this.optionsForRefining.length && e === this.stableOptionOverrides && n === this.stableDynamicOptionOverrides)
      return this.stableCalendarOptionsData;
    let { refinedOptions: i, pluginHooks: r, localeDefaults: o, availableLocaleData: s, extra: u } = this.processRawCalendarOptions(e, n);
    rr(u);
    let c = this.buildDateEnv(i.timeZone, i.locale, i.weekNumberCalculation, i.firstDay, i.weekText, r, s, i.defaultRangeSeparator), d = this.buildViewSpecs(r.views, this.stableOptionOverrides, this.stableDynamicOptionOverrides, o), h = this.buildTheme(i, r), p = this.parseToolbars(i, this.stableOptionOverrides, h, d, a);
    return this.stableCalendarOptionsData = {
      calendarOptions: i,
      pluginHooks: r,
      dateEnv: c,
      viewSpecs: d,
      theme: h,
      toolbarConfig: p,
      localeDefaults: o,
      availableRawLocales: s.map
    };
  }
  // always called from behind a memoizer
  processRawCalendarOptions(e, n) {
    let { locales: a, locale: i } = ea([
      Wt,
      e,
      n
    ]), r = this.organizeRawLocales(a), o = r.map, s = this.buildLocale(i || r.defaultCode, o).options, u = this.buildPluginHooks(e.plugins || [], oC), c = this.currentCalendarOptionsRefiners = Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, Fi), Bi), zi), u.listenerRefiners), u.optionRefiners), d = {}, h = ea([
      Wt,
      s,
      e,
      n
    ]), p = {}, v = this.currentCalendarOptionsInput, y = this.currentCalendarOptionsRefined, g = !1;
    for (let b in h)
      this.optionsForRefining.indexOf(b) === -1 && (h[b] === v[b] || ft[b] && b in v && ft[b](v[b], h[b])) ? p[b] = y[b] : c[b] ? (p[b] = c[b](h[b]), g = !0) : d[b] = v[b];
    return g && (this.currentCalendarOptionsInput = h, this.currentCalendarOptionsRefined = p, this.stableOptionOverrides = e, this.stableDynamicOptionOverrides = n), this.optionsForHandling.push(...this.optionsForRefining), this.optionsForRefining = [], {
      rawOptions: this.currentCalendarOptionsInput,
      refinedOptions: this.currentCalendarOptionsRefined,
      pluginHooks: u,
      availableLocaleData: r,
      localeDefaults: s,
      extra: d
    };
  }
  _computeCurrentViewData(e, n, a, i) {
    let r = n.viewSpecs[e];
    if (!r)
      throw new Error(`viewType "${e}" is not available. Please make sure you've loaded all neccessary plugins`);
    let { refinedOptions: o, extra: s } = this.processRawViewOptions(r, n.pluginHooks, n.localeDefaults, a, i);
    rr(s), this.nowManager.handleInput(n.dateEnv, o.now);
    let u = this.buildDateProfileGenerator({
      dateProfileGeneratorClass: r.optionDefaults.dateProfileGeneratorClass,
      nowManager: this.nowManager,
      duration: r.duration,
      durationUnit: r.durationUnit,
      usesMinMaxTime: r.optionDefaults.usesMinMaxTime,
      dateEnv: n.dateEnv,
      calendarApi: this.props.calendarApi,
      slotMinTime: o.slotMinTime,
      slotMaxTime: o.slotMaxTime,
      showNonCurrentDates: o.showNonCurrentDates,
      dayCount: o.dayCount,
      dateAlignment: o.dateAlignment,
      dateIncrement: o.dateIncrement,
      hiddenDays: o.hiddenDays,
      weekends: o.weekends,
      validRangeInput: o.validRange,
      visibleRangeInput: o.visibleRange,
      fixedWeekCount: o.fixedWeekCount
    }), c = this.buildViewApi(e, this.getCurrentData, n.dateEnv);
    return { viewSpec: r, options: o, dateProfileGenerator: u, viewApi: c };
  }
  processRawViewOptions(e, n, a, i, r) {
    let o = ea([
      Wt,
      e.optionDefaults,
      a,
      i,
      e.optionOverrides,
      r
    ]), s = Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, Fi), Bi), zi), Bg), n.listenerRefiners), n.optionRefiners), u = {}, c = this.currentViewOptionsInput, d = this.currentViewOptionsRefined, h = !1, p = {};
    for (let v in o)
      o[v] === c[v] || ft[v] && ft[v](o[v], c[v]) ? u[v] = d[v] : (o[v] === this.currentCalendarOptionsInput[v] || ft[v] && ft[v](o[v], this.currentCalendarOptionsInput[v]) ? v in this.currentCalendarOptionsRefined && (u[v] = this.currentCalendarOptionsRefined[v]) : s[v] ? u[v] = s[v](o[v]) : p[v] = o[v], h = !0);
    return h && (this.currentViewOptionsInput = o, this.currentViewOptionsRefined = u), {
      rawOptions: this.currentViewOptionsInput,
      refinedOptions: this.currentViewOptionsRefined,
      extra: p
    };
  }
}
function dC(t, e, n, a, i, r, o, s) {
  let u = es(e || o.defaultCode, o.map);
  return new qg({
    calendarSystem: "gregory",
    timeZone: t,
    namedTimeZoneImpl: r.namedTimeZonedImpl,
    locale: u,
    weekNumberCalculation: n,
    firstDay: a,
    weekText: i,
    cmdFormatter: r.cmdFormatter,
    defaultSeparator: s
  });
}
function fC(t, e) {
  let n = e.themeClasses[t.themeSystem] || dt;
  return new n(t);
}
function mC(t) {
  let e = t.dateProfileGeneratorClass || wo;
  return new e(t);
}
function hC(t, e, n) {
  return new U0(t, e, n);
}
function vC(t) {
  return At(t, (e) => e.ui);
}
function pC(t, e, n) {
  let a = { "": e };
  for (let i in t) {
    let r = t[i];
    r.sourceId && n[r.sourceId] && (a[i] = n[r.sourceId]);
  }
  return a;
}
function gC(t) {
  let { options: e } = t;
  return {
    eventUiSingleBase: Nn({
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
    selectionConfig: Nn({
      constraint: e.selectConstraint,
      overlap: typeof e.selectOverlap == "boolean" ? e.selectOverlap : void 0,
      allow: e.selectAllow
    }, t)
  };
}
function la(t, e) {
  for (let n of e.pluginHooks.isLoadingFuncs)
    if (n(t))
      return !0;
  return !1;
}
function yC(t) {
  return Dy(t.options.businessHours, t);
}
function rr(t, e) {
  for (let n in t)
    console.warn(`Unknown option '${n}'`);
}
class bC extends Ie {
  render() {
    let e = this.props.widgetGroups.map((n) => this.renderWidgetGroup(n));
    return H("div", { className: "fc-toolbar-chunk" }, ...e);
  }
  renderWidgetGroup(e) {
    let { props: n } = this, { theme: a } = this.context, i = [], r = !0;
    for (let o of e) {
      let { buttonName: s, buttonClick: u, buttonText: c, buttonIcon: d, buttonHint: h } = o;
      if (s === "title")
        r = !1, i.push(H("h2", { className: "fc-toolbar-title", id: n.titleId }, n.title));
      else {
        let p = s === n.activeButton, v = !n.isTodayEnabled && s === "today" || !n.isPrevEnabled && s === "prev" || !n.isNextEnabled && s === "next", y = [`fc-${s}-button`, a.getClass("button")];
        p && y.push(a.getClass("buttonActive")), i.push(H("button", { type: "button", title: typeof h == "function" ? h(n.navUnit) : h, disabled: v, "aria-pressed": p, className: y.join(" "), onClick: u }, c || (d ? H("span", { className: d, role: "img" }) : "")));
      }
    }
    if (i.length > 1) {
      let o = r && a.getClass("buttonGroup") || "";
      return H("div", { className: o }, ...i);
    }
    return i[0];
  }
}
class or extends Ie {
  render() {
    let { model: e, extraClassName: n } = this.props, a = !1, i, r, o = e.sectionWidgets, s = o.center;
    return o.left ? (a = !0, i = o.left) : i = o.start, o.right ? (a = !0, r = o.right) : r = o.end, H(
      "div",
      { className: [
        n || "",
        "fc-toolbar",
        a ? "fc-toolbar-ltr" : ""
      ].join(" ") },
      this.renderSection("start", i || []),
      this.renderSection("center", s || []),
      this.renderSection("end", r || [])
    );
  }
  renderSection(e, n) {
    let { props: a } = this;
    return H(bC, { key: e, widgetGroups: n, title: a.title, navUnit: a.navUnit, activeButton: a.activeButton, isTodayEnabled: a.isTodayEnabled, isPrevEnabled: a.isPrevEnabled, isNextEnabled: a.isNextEnabled, titleId: a.titleId });
  }
}
class CC extends Ie {
  constructor() {
    super(...arguments), this.state = {
      availableWidth: null
    }, this.handleEl = (e) => {
      this.el = e, Ze(this.props.elRef, e), this.updateAvailableWidth();
    }, this.handleResize = () => {
      this.updateAvailableWidth();
    };
  }
  render() {
    let { props: e, state: n } = this, { aspectRatio: a } = e, i = [
      "fc-view-harness",
      a || e.liquid || e.height ? "fc-view-harness-active" : "fc-view-harness-passive"
      // let the view do the height
    ], r = "", o = "";
    return a ? n.availableWidth !== null ? r = n.availableWidth / a : o = `${1 / a * 100}%` : r = e.height || "", H("div", { "aria-labelledby": e.labeledById, ref: this.handleEl, className: i.join(" "), style: { height: r, paddingBottom: o } }, e.children);
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
class wC extends Ht {
  constructor(e) {
    super(e), this.handleSegClick = (n, a) => {
      let { component: i } = this, { context: r } = i, o = Ft(a);
      if (o && // might be the <div> surrounding the more link
      i.isValidSegDownEl(n.target)) {
        let s = ze(n.target, ".fc-event-forced-url"), u = s ? s.querySelector("a[href]").href : "";
        r.emitter.trigger("eventClick", {
          el: a,
          event: new Ne(i.context, o.eventRange.def, o.eventRange.instance),
          jsEvent: n,
          view: r.viewApi
        }), u && !n.defaultPrevented && (window.location.href = u);
      }
    }, this.destroy = lo(
      e.el,
      "click",
      ".fc-event",
      // on both fg and bg events
      this.handleSegClick
    );
  }
}
class AC extends Ht {
  constructor(e) {
    super(e), this.handleEventElRemove = (n) => {
      n === this.currentSegEl && this.handleSegLeave(null, this.currentSegEl);
    }, this.handleSegEnter = (n, a) => {
      Ft(a) && (this.currentSegEl = a, this.triggerEvent("eventMouseEnter", n, a));
    }, this.handleSegLeave = (n, a) => {
      this.currentSegEl && (this.currentSegEl = null, this.triggerEvent("eventMouseLeave", n, a));
    }, this.removeHoverListeners = Wp(
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
    let { component: i } = this, { context: r } = i, o = Ft(a);
    (!n || i.isValidSegDownEl(n.target)) && r.emitter.trigger(e, {
      el: a,
      event: new Ne(r, o.eventRange.def, o.eventRange.instance),
      jsEvent: n,
      view: r.viewApi
    });
  }
}
class _C extends kt {
  constructor() {
    super(...arguments), this.buildViewContext = be(Jg), this.buildViewPropTransformers = be(SC), this.buildToolbarProps = be(kC), this.headerRef = et(), this.footerRef = et(), this.interactionsStore = {}, this.state = {
      viewLabelId: $n()
    }, this.registerInteractiveComponent = (e, n) => {
      let a = Xy(e, n), o = [
        wC,
        AC
      ].concat(this.props.pluginHooks.componentInteractions).map((s) => new s(a));
      this.interactionsStore[e.uid] = o, ya[e.uid] = a;
    }, this.unregisterInteractiveComponent = (e) => {
      let n = this.interactionsStore[e.uid];
      if (n) {
        for (let a of n)
          a.destroy();
        delete this.interactionsStore[e.uid];
      }
      delete ya[e.uid];
    }, this.resizeRunner = new Da(() => {
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
    let { props: e } = this, { toolbarConfig: n, options: a } = e, i = !1, r = "", o;
    e.isHeightAuto || e.forPrint ? r = "" : a.height != null ? i = !0 : a.contentHeight != null ? r = a.contentHeight : o = Math.max(a.aspectRatio, 0.5);
    let s = this.buildViewContext(e.viewSpec, e.viewApi, e.options, e.dateProfileGenerator, e.dateEnv, e.nowManager, e.theme, e.pluginHooks, e.dispatch, e.getCurrentData, e.emitter, e.calendarApi, this.registerInteractiveComponent, this.unregisterInteractiveComponent), u = n.header && n.header.hasTitle ? this.state.viewLabelId : void 0;
    return H(
      _t.Provider,
      { value: s },
      H(Ln, { unit: "day" }, (c) => {
        let d = this.buildToolbarProps(e.viewSpec, e.dateProfile, e.dateProfileGenerator, e.currentDate, c, e.viewTitle);
        return H(
          Oe,
          null,
          n.header && H(or, Object.assign({ ref: this.headerRef, extraClassName: "fc-header-toolbar", model: n.header, titleId: u }, d)),
          H(
            CC,
            { liquid: i, height: r, aspectRatio: o, labeledById: u },
            this.renderView(e),
            this.buildAppendContent()
          ),
          n.footer && H(or, Object.assign({ ref: this.footerRef, extraClassName: "fc-footer-toolbar", model: n.footer, titleId: "" }, d))
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
    return H(Oe, {}, ...n);
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
    }, r = this.buildViewPropTransformers(n.viewPropsTransformers);
    for (let s of r)
      Object.assign(i, s.transform(i, e));
    let o = a.component;
    return H(o, Object.assign({}, i));
  }
}
function kC(t, e, n, a, i, r) {
  let o = n.build(i, void 0, !1), s = n.buildPrev(e, a, !1), u = n.buildNext(e, a, !1);
  return {
    title: r,
    activeButton: t.type,
    navUnit: t.singleUnit,
    isTodayEnabled: o.isValid && !ot(e.currentRange, i),
    isPrevEnabled: s.isValid,
    isNextEnabled: u.isValid
  };
}
function SC(t) {
  return t.map((e) => new e());
}
class TC extends tb {
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
        En(() => {
          qt(H(Jy, { options: a.calendarOptions, theme: a.theme, emitter: a.emitter }, (i, r, o, s) => (this.setClassNames(i), this.setHeight(r), H(
            go.Provider,
            { value: this.customContentRenderId },
            H(_C, Object.assign({ isHeightAuto: o, forPrint: s }, a))
          ))), this.el);
        });
      } else this.isRendered && (this.isRendered = !1, qt(null, this.el), this.setClassNames([]), this.setHeight(""));
    }, Pp(e), this.el = e, this.renderRunner = new Da(this.handleRenderRequest), new cC({
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
    En(() => {
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
    if (!lt(e, this.currentClassNames)) {
      let { classList: n } = this.el;
      for (let a of this.currentClassNames)
        n.remove(a);
      for (let a of e)
        n.add(a);
      this.currentClassNames = e;
    }
  }
  setHeight(e) {
    oo(this.el, "height", e);
  }
}
const EC = {
  headerToolbar: !0,
  footerToolbar: !0,
  events: !0,
  eventSources: !0,
  resources: !0
}, MC = le({
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
        customRenderingMetaMap: IC(this.$slots),
        handleCustomRendering: this.handleCustomRendering
      };
    }
  },
  render() {
    const t = [];
    for (const e of this.customRenderingMap.values())
      t.push(pt(NC, {
        key: e.id,
        customRendering: e
      }));
    return pt("div", {
      // when renderId is changed, Vue will trigger a real-DOM async rerender, calling beforeUpdate/updated
      attrs: { "data-fc-render-id": this.renderId }
    }, pt(j, t));
  },
  mounted() {
    const t = new c0();
    this.handleCustomRendering = t.handle.bind(t);
    const e = this.buildOptions(this.options), n = new TC(this.$el, e);
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
  watch: DC()
}), NC = le({
  props: {
    customRendering: Object
  },
  render() {
    const t = this.customRendering, e = typeof t.generatorMeta == "function" ? t.generatorMeta(t.renderProps) : (
      // vue-normalized slot function
      t.generatorMeta
    );
    return pt(De, { to: t.containerEl }, e);
  }
});
function DC() {
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
  for (let e in EC)
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
function IC(t) {
  const e = {};
  for (const n in t)
    e[OC(n)] = t[n];
  return e;
}
function OC(t) {
  return t.split("-").map((e, n) => n ? RC(e) : e).join("");
}
function RC(t) {
  return t.charAt(0).toUpperCase() + t.slice(1);
}
class xC extends St {
  constructor() {
    super(...arguments), this.headerElRef = et();
  }
  renderSimpleLayout(e, n) {
    let { props: a, context: i } = this, r = [], o = Zi(i.options);
    return e && r.push({
      type: "header",
      key: "header",
      isSticky: o,
      chunk: {
        elRef: this.headerElRef,
        tableClassName: "fc-col-header",
        rowContent: e
      }
    }), r.push({
      type: "body",
      key: "body",
      liquid: !0,
      chunk: { content: n }
    }), H(
      Li,
      { elClasses: ["fc-daygrid"], viewSpec: i.viewSpec },
      H(Ko, { liquid: !a.isHeightAuto && !a.forPrint, collapsibleWidth: a.forPrint, cols: [], sections: r })
    );
  }
  renderHScrollLayout(e, n, a, i) {
    let r = this.context.pluginHooks.scrollGridImpl;
    if (!r)
      throw new Error("No ScrollGrid implementation");
    let { props: o, context: s } = this, u = !o.forPrint && Zi(s.options), c = !o.forPrint && Wb(s.options), d = [];
    return e && d.push({
      type: "header",
      key: "header",
      isSticky: u,
      chunks: [{
        key: "main",
        elRef: this.headerElRef,
        tableClassName: "fc-col-header",
        rowContent: e
      }]
    }), d.push({
      type: "body",
      key: "body",
      liquid: !0,
      chunks: [{
        key: "main",
        content: n
      }]
    }), c && d.push({
      type: "footer",
      key: "footer",
      isSticky: !0,
      chunks: [{
        key: "main",
        content: Ub
      }]
    }), H(
      Li,
      { elClasses: ["fc-daygrid"], viewSpec: s.viewSpec },
      H(r, { liquid: !o.isHeightAuto && !o.forPrint, forPrint: o.forPrint, collapsibleWidth: o.forPrint, colGroups: [{ cols: [{ span: a, minWidth: i }] }], sections: d })
    );
  }
}
function gn(t, e) {
  let n = [];
  for (let a = 0; a < e; a += 1)
    n[a] = [];
  for (let a of t)
    n[a.row].push(a);
  return n;
}
function cn(t, e) {
  let n = [];
  for (let a = 0; a < e; a += 1)
    n[a] = [];
  for (let a of t)
    n[a.firstCol].push(a);
  return n;
}
function sr(t, e) {
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
const ss = Fe({
  hour: "numeric",
  minute: "2-digit",
  omitZeroMinute: !0,
  meridiem: "narrow"
});
function ls(t) {
  let { display: e } = t.eventRange.ui;
  return e === "list-item" || e === "auto" && !t.eventRange.def.allDay && t.firstCol === t.lastCol && // can't be multi-day
  t.isStart && // "
  t.isEnd;
}
class us extends Ie {
  render() {
    let { props: e } = this;
    return H(qo, Object.assign({}, e, { elClasses: ["fc-daygrid-event", "fc-daygrid-block-event", "fc-h-event"], defaultTimeFormat: ss, defaultDisplayEventEnd: e.defaultDisplayEventEnd, disableResizing: !e.seg.eventRange.def.allDay }));
  }
}
class cs extends Ie {
  render() {
    let { props: e, context: n } = this, { options: a } = n, { seg: i } = e, r = a.eventTimeFormat || ss, o = Oo(i, r, n, !0, e.defaultDisplayEventEnd);
    return H(Ja, Object.assign({}, e, { elTag: "a", elClasses: ["fc-daygrid-event", "fc-daygrid-dot-event"], elAttrs: Ro(e.seg, n), defaultGenerator: $C, timeText: o, isResizing: !1, isDateSelecting: !1 }));
  }
}
function $C(t) {
  return H(
    Oe,
    null,
    H("div", { className: "fc-daygrid-event-dot", style: { borderColor: t.borderColor || t.backgroundColor } }),
    t.timeText && H("div", { className: "fc-event-time" }, t.timeText),
    H("div", { className: "fc-event-title" }, t.event.title || H(Oe, null, " "))
  );
}
class PC extends Ie {
  constructor() {
    super(...arguments), this.compileSegs = be(FC);
  }
  render() {
    let { props: e } = this, { allSegs: n, invisibleSegs: a } = this.compileSegs(e.singlePlacements);
    return H(a0, { elClasses: ["fc-daygrid-more-link"], dateProfile: e.dateProfile, todayRange: e.todayRange, allDayDate: e.allDayDate, moreCnt: e.moreCnt, allSegs: n, hiddenSegs: a, alignmentElRef: e.alignmentElRef, alignGridTop: e.alignGridTop, extraDateSpan: e.extraDateSpan, popoverContent: () => {
      let i = (e.eventDrag ? e.eventDrag.affectedInstances : null) || (e.eventResize ? e.eventResize.affectedInstances : null) || {};
      return H(Oe, null, n.map((r) => {
        let o = r.eventRange.instance.instanceId;
        return H("div", { className: "fc-daygrid-event-harness", key: o, style: {
          visibility: i[o] ? "hidden" : ""
        } }, ls(r) ? H(cs, Object.assign({ seg: r, isDragging: !1, isSelected: o === e.eventSelection, defaultDisplayEventEnd: !1 }, Yt(r, e.todayRange))) : H(us, Object.assign({ seg: r, isDragging: !1, isResizing: !1, isDateSelecting: !1, isSelected: o === e.eventSelection, defaultDisplayEventEnd: !1 }, Yt(r, e.todayRange))));
      }));
    } });
  }
}
function FC(t) {
  let e = [], n = [];
  for (let a of t)
    e.push(a.seg), a.isVisible || n.push(a.seg);
  return { allSegs: e, invisibleSegs: n };
}
const BC = Fe({ week: "narrow" });
class zC extends St {
  constructor() {
    super(...arguments), this.rootElRef = et(), this.state = {
      dayNumberId: $n()
    }, this.handleRootEl = (e) => {
      Ze(this.rootElRef, e), Ze(this.props.elRef, e);
    };
  }
  render() {
    let { context: e, props: n, state: a, rootElRef: i } = this, { options: r, dateEnv: o } = e, { date: s, dateProfile: u } = n;
    const c = n.showDayNumber && HC(s, u.currentRange, o);
    return H(Qo, { elTag: "td", elRef: this.handleRootEl, elClasses: [
      "fc-daygrid-day",
      ...n.extraClassNames || []
    ], elAttrs: Object.assign(Object.assign(Object.assign({}, n.extraDataAttrs), n.showDayNumber ? { "aria-labelledby": a.dayNumberId } : {}), { role: "gridcell" }), defaultGenerator: LC, date: s, dateProfile: u, todayRange: n.todayRange, showDayNumber: n.showDayNumber, isMonthStart: c, extraRenderProps: n.extraRenderProps }, (d, h) => H(
      "div",
      { ref: n.innerElRef, className: "fc-daygrid-day-frame fc-scrollgrid-sync-inner", style: { minHeight: n.minHeight } },
      n.showWeekNumber && H(Xb, { elTag: "a", elClasses: ["fc-daygrid-week-number"], elAttrs: ba(e, s, "week"), date: s, defaultFormat: BC }),
      !h.isDisabled && (n.showDayNumber || Zo(r) || n.forceDayTop) ? H(
        "div",
        { className: "fc-daygrid-day-top" },
        H(d, { elTag: "a", elClasses: [
          "fc-daygrid-day-number",
          c && "fc-daygrid-month-start"
        ], elAttrs: Object.assign(Object.assign({}, ba(e, s)), { id: a.dayNumberId }) })
      ) : n.showDayNumber ? (
        // for creating correct amount of space (see issue #7162)
        H(
          "div",
          { className: "fc-daygrid-day-top", style: { visibility: "hidden" } },
          H("a", { className: "fc-daygrid-day-number" }, " ")
        )
      ) : void 0,
      H(
        "div",
        { className: "fc-daygrid-day-events", ref: n.fgContentElRef },
        n.fgContent,
        H(
          "div",
          { className: "fc-daygrid-day-bottom", style: { marginTop: n.moreMarginTop } },
          H(PC, { allDayDate: s, singlePlacements: n.singlePlacements, moreCnt: n.moreCnt, alignmentElRef: i, alignGridTop: !n.showDayNumber, extraDateSpan: n.extraDateSpan, dateProfile: n.dateProfile, eventSelection: n.eventSelection, eventDrag: n.eventDrag, eventResize: n.eventResize, todayRange: n.todayRange })
        )
      ),
      H("div", { className: "fc-daygrid-day-bg" }, n.bgContent)
    ));
  }
}
function LC(t) {
  return t.dayNumberText || H(Oe, null, " ");
}
function HC(t, e, n) {
  const { start: a, end: i } = e, r = ut(i, -1), o = n.getYear(a), s = n.getMonth(a), u = n.getYear(r), c = n.getMonth(r);
  return !(o === u && s === c) && // first date in current view?
  (t.valueOf() === a.valueOf() || // a month-start that's within the current range?
  n.getDay(t) === 1 && t.valueOf() < i.valueOf());
}
function ds(t) {
  return t.eventRange.instance.instanceId + ":" + t.firstCol;
}
function fs(t) {
  return ds(t) + ":" + t.lastCol;
}
function VC(t, e, n, a, i, r, o) {
  let s = new WC((C) => {
    let w = t[C.index].eventRange.instance.instanceId + ":" + C.span.start + ":" + (C.span.end - 1);
    return i[w] || 1;
  });
  s.allowReslicing = !0, s.strictOrder = a, e === !0 || n === !0 ? (s.maxCoord = r, s.hiddenConsumes = !0) : typeof e == "number" ? s.maxStackCnt = e : typeof n == "number" && (s.maxStackCnt = n, s.hiddenConsumes = !0);
  let u = [], c = [];
  for (let C = 0; C < t.length; C += 1) {
    let w = t[C], k = fs(w);
    i[k] != null ? u.push({
      index: C,
      span: {
        start: w.firstCol,
        end: w.lastCol + 1
      }
    }) : c.push(w);
  }
  let d = s.addSegs(u), h = s.toRects(), { singleColPlacements: p, multiColPlacements: v, leftoverMargins: y } = jC(h, t, o), g = [], b = [];
  for (let C of c) {
    v[C.firstCol].push({
      seg: C,
      isVisible: !1,
      isAbsolute: !0,
      absoluteTop: 0,
      marginTop: 0
    });
    for (let w = C.firstCol; w <= C.lastCol; w += 1)
      p[w].push({
        seg: Rt(C, w, w + 1, o),
        isVisible: !1,
        isAbsolute: !1,
        absoluteTop: 0,
        marginTop: 0
      });
  }
  for (let C = 0; C < o.length; C += 1)
    g.push(0);
  for (let C of d) {
    let w = t[C.index], k = C.span;
    v[k.start].push({
      seg: Rt(w, k.start, k.end, o),
      isVisible: !1,
      isAbsolute: !0,
      absoluteTop: 0,
      marginTop: 0
    });
    for (let T = k.start; T < k.end; T += 1)
      g[T] += 1, p[T].push({
        seg: Rt(w, T, T + 1, o),
        isVisible: !1,
        isAbsolute: !1,
        absoluteTop: 0,
        marginTop: 0
      });
  }
  for (let C = 0; C < o.length; C += 1)
    b.push(y[C]);
  return { singleColPlacements: p, multiColPlacements: v, moreCnts: g, moreMarginTops: b };
}
function jC(t, e, n) {
  let a = UC(t, n.length), i = [], r = [], o = [];
  for (let s = 0; s < n.length; s += 1) {
    let u = a[s], c = [], d = 0, h = 0;
    for (let v of u) {
      let y = e[v.index];
      c.push({
        seg: Rt(y, s, s + 1, n),
        isVisible: !0,
        isAbsolute: !1,
        absoluteTop: v.levelCoord,
        marginTop: v.levelCoord - d
      }), d = v.levelCoord + v.thickness;
    }
    let p = [];
    d = 0, h = 0;
    for (let v of u) {
      let y = e[v.index], g = v.span.end - v.span.start > 1, b = v.span.start === s;
      h += v.levelCoord - d, d = v.levelCoord + v.thickness, g ? (h += v.thickness, b && p.push({
        seg: Rt(y, v.span.start, v.span.end, n),
        isVisible: !0,
        isAbsolute: !0,
        absoluteTop: v.levelCoord,
        marginTop: 0
      })) : b && (p.push({
        seg: Rt(y, v.span.start, v.span.end, n),
        isVisible: !0,
        isAbsolute: !1,
        absoluteTop: v.levelCoord,
        marginTop: h
        // claim the margin
      }), h = 0);
    }
    i.push(c), r.push(p), o.push(h);
  }
  return { singleColPlacements: i, multiColPlacements: r, leftoverMargins: o };
}
function UC(t, e) {
  let n = [];
  for (let a = 0; a < e; a += 1)
    n.push([]);
  for (let a of t)
    for (let i = a.span.start; i < a.span.end; i += 1)
      n[i].push(a);
  return n;
}
function Rt(t, e, n, a) {
  if (t.firstCol === e && t.lastCol === n - 1)
    return t;
  let i = t.eventRange, r = i.range, o = Pt(r, {
    start: a[e].date,
    end: Be(a[n - 1].date, 1)
  });
  return Object.assign(Object.assign({}, t), { firstCol: e, lastCol: n - 1, eventRange: {
    def: i.def,
    ui: Object.assign(Object.assign({}, i.ui), { durationEditable: !1 }),
    instance: i.instance,
    range: o
  }, isStart: t.isStart && o.start.valueOf() === r.start.valueOf(), isEnd: t.isEnd && o.end.valueOf() === r.end.valueOf() });
}
class WC extends gb {
  constructor() {
    super(...arguments), this.hiddenConsumes = !1, this.forceHidden = {};
  }
  addSegs(e) {
    const n = super.addSegs(e), { entriesByLevel: a } = this, i = (r) => !this.forceHidden[Gt(r)];
    for (let r = 0; r < a.length; r += 1)
      a[r] = a[r].filter(i);
    return n;
  }
  handleInvalidInsertion(e, n, a) {
    const { entriesByLevel: i, forceHidden: r } = this, { touchingEntry: o, touchingLevel: s, touchingLateral: u } = e;
    if (this.hiddenConsumes && o) {
      const c = Gt(o);
      if (!r[c])
        if (this.allowReslicing) {
          const d = Object.assign(Object.assign({}, o), { span: Ho(o.span, n.span) }), h = Gt(d);
          r[h] = !0, i[s][u] = d, a.push(d), this.splitEntry(o, n, a);
        } else
          r[c] = !0, a.push(o);
    }
    super.handleInvalidInsertion(e, n, a);
  }
}
class ms extends St {
  constructor() {
    super(...arguments), this.cellElRefs = new vt(), this.frameElRefs = new vt(), this.fgElRefs = new vt(), this.segHarnessRefs = new vt(), this.rootElRef = et(), this.state = {
      framePositions: null,
      maxContentHeight: null,
      segHeights: {}
    }, this.handleResize = (e) => {
      e && this.updateSizing(!0);
    };
  }
  render() {
    let { props: e, state: n, context: a } = this, { options: i } = a, r = e.cells.length, o = cn(e.businessHourSegs, r), s = cn(e.bgEventSegs, r), u = cn(this.getHighlightSegs(), r), c = cn(this.getMirrorSegs(), r), { singleColPlacements: d, multiColPlacements: h, moreCnts: p, moreMarginTops: v } = VC($y(e.fgEventSegs, i.eventOrder), e.dayMaxEvents, e.dayMaxEventRows, i.eventOrderStrict, n.segHeights, n.maxContentHeight, e.cells), y = (
      // TODO: messy way to compute this
      e.eventDrag && e.eventDrag.affectedInstances || e.eventResize && e.eventResize.affectedInstances || {}
    );
    return H(
      "tr",
      { ref: this.rootElRef, role: "row" },
      e.renderIntro && e.renderIntro(),
      e.cells.map((g, b) => {
        let C = this.renderFgSegs(b, e.forPrint ? d[b] : h[b], e.todayRange, y), w = this.renderFgSegs(b, YC(c[b], h), e.todayRange, {}, !!e.eventDrag, !!e.eventResize, !1);
        return H(zC, { key: g.key, elRef: this.cellElRefs.createRef(g.key), innerElRef: this.frameElRefs.createRef(g.key), dateProfile: e.dateProfile, date: g.date, showDayNumber: e.showDayNumbers, showWeekNumber: e.showWeekNumbers && b === 0, forceDayTop: e.showWeekNumbers, todayRange: e.todayRange, eventSelection: e.eventSelection, eventDrag: e.eventDrag, eventResize: e.eventResize, extraRenderProps: g.extraRenderProps, extraDataAttrs: g.extraDataAttrs, extraClassNames: g.extraClassNames, extraDateSpan: g.extraDateSpan, moreCnt: p[b], moreMarginTop: v[b], singlePlacements: d[b], fgContentElRef: this.fgElRefs.createRef(g.key), fgContent: (
          // Fragment scopes the keys
          H(
            Oe,
            null,
            H(Oe, null, C),
            H(Oe, null, w)
          )
        ), bgContent: (
          // Fragment scopes the keys
          H(
            Oe,
            null,
            this.renderFillSegs(u[b], "highlight"),
            this.renderFillSegs(o[b], "non-business"),
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
    this.updateSizing(!qe(e, a));
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
  renderFgSegs(e, n, a, i, r, o, s) {
    let { context: u } = this, { eventSelection: c } = this.props, { framePositions: d } = this.state, h = this.props.cells.length === 1, p = r || o || s, v = [];
    if (d)
      for (let y of n) {
        let { seg: g } = y, { instanceId: b } = g.eventRange.instance, C = y.isVisible && !i[b], w = y.isAbsolute, k = "", T = "";
        w && (u.isRtl ? (T = 0, k = d.lefts[g.lastCol] - d.lefts[g.firstCol]) : (k = 0, T = d.rights[g.firstCol] - d.rights[g.lastCol])), v.push(H("div", { className: "fc-daygrid-event-harness" + (w ? " fc-daygrid-event-harness-abs" : ""), key: ds(g), ref: p ? null : this.segHarnessRefs.createRef(fs(g)), style: {
          visibility: C ? "" : "hidden",
          marginTop: w ? "" : y.marginTop,
          top: w ? y.absoluteTop : "",
          left: k,
          right: T
        } }, ls(g) ? H(cs, Object.assign({ seg: g, isDragging: r, isSelected: b === c, defaultDisplayEventEnd: h }, Yt(g, a))) : H(us, Object.assign({ seg: g, isDragging: r, isResizing: o, isDateSelecting: s, isSelected: b === c, defaultDisplayEventEnd: h }, Yt(g, a)))));
      }
    return v;
  }
  renderFillSegs(e, n) {
    let { isRtl: a } = this.context, { todayRange: i } = this.props, { framePositions: r } = this.state, o = [];
    if (r)
      for (let s of e) {
        let u = a ? {
          right: 0,
          left: r.lefts[s.lastCol] - r.lefts[s.firstCol]
        } : {
          left: 0,
          right: r.rights[s.firstCol] - r.rights[s.lastCol]
        };
        o.push(H("div", { key: Hy(s.eventRange), className: "fc-daygrid-bg-harness", style: u }, n === "bg-event" ? H(Qb, Object.assign({ seg: s }, Yt(s, i))) : Jb(n)));
      }
    return H(Oe, {}, ...o);
  }
  updateSizing(e) {
    let { props: n, state: a, frameElRefs: i } = this;
    if (!n.forPrint && n.clientWidth !== null) {
      if (e) {
        let u = n.cells.map((c) => i.currentMap[c.key]);
        if (u.length) {
          let c = this.rootElRef.current, d = new In(
            c,
            u,
            !0,
            // isHorizontal
            !1
          );
          (!a.framePositions || !a.framePositions.similarTo(d)) && this.setState({
            framePositions: new In(
              c,
              u,
              !0,
              // isHorizontal
              !1
            )
          });
        }
      }
      const r = this.state.segHeights, o = this.querySegHeights(), s = n.dayMaxEvents === !0 || n.dayMaxEventRows === !0;
      this.safeSetState({
        // HACK to prevent oscillations of events being shown/hidden from max-event-rows
        // Essentially, once you compute an element's height, never null-out.
        // TODO: always display all events, as visibility:hidden?
        segHeights: Object.assign(Object.assign({}, r), o),
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
ms.addStateEquality({
  segHeights: qe
});
function YC(t, e) {
  if (!t.length)
    return [];
  let n = GC(e);
  return t.map((a) => ({
    seg: a,
    isVisible: !0,
    isAbsolute: !0,
    absoluteTop: n[a.eventRange.instance.instanceId],
    marginTop: 0
  }));
}
function GC(t) {
  let e = {};
  for (let n of t)
    for (let a of n)
      e[a.seg.eventRange.instance.instanceId] = a.absoluteTop;
  return e;
}
class KC extends St {
  constructor() {
    super(...arguments), this.splitBusinessHourSegs = be(gn), this.splitBgEventSegs = be(qC), this.splitFgEventSegs = be(gn), this.splitDateSelectionSegs = be(gn), this.splitEventDrag = be(sr), this.splitEventResize = be(sr), this.rowRefs = new vt();
  }
  render() {
    let { props: e, context: n } = this, a = e.cells.length, i = this.splitBusinessHourSegs(e.businessHourSegs, a), r = this.splitBgEventSegs(e.bgEventSegs, a), o = this.splitFgEventSegs(e.fgEventSegs, a), s = this.splitDateSelectionSegs(e.dateSelectionSegs, a), u = this.splitEventDrag(e.eventDrag, a), c = this.splitEventResize(e.eventResize, a), d = a >= 7 && e.clientWidth ? e.clientWidth / n.options.aspectRatio / 6 : null;
    return H(Ln, { unit: "day" }, (h, p) => H(Oe, null, e.cells.map((v, y) => H(ms, {
      ref: this.rowRefs.createRef(y),
      key: v.length ? v[0].date.toISOString() : y,
      showDayNumbers: a > 1,
      showWeekNumbers: e.showWeekNumbers,
      todayRange: p,
      dateProfile: e.dateProfile,
      cells: v,
      renderIntro: e.renderRowIntro,
      businessHourSegs: i[y],
      eventSelection: e.eventSelection,
      bgEventSegs: r[y],
      fgEventSegs: o[y],
      dateSelectionSegs: s[y],
      eventDrag: u[y],
      eventResize: c[y],
      dayMaxEvents: e.dayMaxEvents,
      dayMaxEventRows: e.dayMaxEventRows,
      clientWidth: e.clientWidth,
      clientHeight: e.clientHeight,
      cellMinHeight: d,
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
    this.rowPositions = new In(
      this.rootEl,
      this.rowRefs.collect().map((e) => e.getCellEls()[0]),
      // first cell el in each row. TODO: not optimal
      !1,
      !0
    ), this.colPositions = new In(
      this.rootEl,
      this.rowRefs.currentMap[0].getCellEls(),
      // cell els in first row
      !0,
      // horizontal
      !1
    );
  }
  queryHit(e, n) {
    let { colPositions: a, rowPositions: i } = this, r = a.leftToIndex(e), o = i.topToIndex(n);
    if (o != null && r != null) {
      let s = this.props.cells[o][r];
      return {
        dateProfile: this.props.dateProfile,
        dateSpan: Object.assign({ range: this.getCellRange(o, r), allDay: !0 }, s.extraDateSpan),
        dayEl: this.getCellEl(o, r),
        rect: {
          left: a.lefts[r],
          right: a.rights[r],
          top: i.tops[o],
          bottom: i.bottoms[o]
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
    let a = this.props.cells[e][n].date, i = Be(a, 1);
    return { start: a, end: i };
  }
}
function qC(t, e) {
  return gn(t.filter(QC), e);
}
function QC(t) {
  return t.eventRange.def.allDay;
}
class ZC extends St {
  constructor() {
    super(...arguments), this.elRef = et(), this.needsScrollReset = !1;
  }
  render() {
    let { props: e } = this, { dayMaxEventRows: n, dayMaxEvents: a, expandRows: i } = e, r = a === !0 || n === !0;
    r && !i && (r = !1, n = null, a = null);
    let o = [
      "fc-daygrid-body",
      r ? "fc-daygrid-body-balanced" : "fc-daygrid-body-unbalanced",
      i ? "" : "fc-daygrid-body-natural"
      // will height of one row depend on the others?
    ];
    return H(
      "div",
      { ref: this.elRef, className: o.join(" "), style: {
        // these props are important to give this wrapper correct dimensions for interactions
        // TODO: if we set it here, can we avoid giving to inner tables?
        width: e.clientWidth,
        minWidth: e.tableMinWidth
      } },
      H(
        "table",
        { role: "presentation", className: "fc-scrollgrid-sync-table", style: {
          width: e.clientWidth,
          minWidth: e.tableMinWidth,
          height: i ? e.clientHeight : ""
        } },
        e.colGroupNode,
        H(
          "tbody",
          { role: "presentation" },
          H(KC, { dateProfile: e.dateProfile, cells: e.cells, renderRowIntro: e.renderRowIntro, showWeekNumbers: e.showWeekNumbers, clientWidth: e.clientWidth, clientHeight: e.clientHeight, businessHourSegs: e.businessHourSegs, bgEventSegs: e.bgEventSegs, fgEventSegs: e.fgEventSegs, dateSelectionSegs: e.dateSelectionSegs, eventSelection: e.eventSelection, eventDrag: e.eventDrag, eventResize: e.eventResize, dayMaxEvents: a, dayMaxEventRows: n, forPrint: e.forPrint, isHitComboAllowed: e.isHitComboAllowed })
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
      const e = JC(this.elRef.current, this.props.dateProfile);
      if (e) {
        const n = e.closest(".fc-daygrid-body"), a = n.closest(".fc-scroller"), i = e.getBoundingClientRect().top - n.getBoundingClientRect().top;
        a.scrollTop = i ? i + 1 : 0;
      }
      this.needsScrollReset = !1;
    }
  }
}
function JC(t, e) {
  let n;
  return e.currentRangeUnit.match(/year|month/) && (n = t.querySelector(`[data-date="${Ag(e.currentDate)}-01"]`)), n || (n = t.querySelector(`[data-date="${xa(e.currentDate)}"]`)), n;
}
class XC extends Eb {
  constructor() {
    super(...arguments), this.forceDayIfListItem = !0;
  }
  sliceRange(e, n) {
    return n.sliceRange(e);
  }
}
class ew extends St {
  constructor() {
    super(...arguments), this.slicer = new XC(), this.tableRef = et();
  }
  render() {
    let { props: e, context: n } = this;
    return H(ZC, Object.assign({ ref: this.tableRef }, this.slicer.sliceProps(e, e.dateProfile, e.nextDayThreshold, n, e.dayTableModel), { dateProfile: e.dateProfile, cells: e.dayTableModel.cells, colGroupNode: e.colGroupNode, tableMinWidth: e.tableMinWidth, renderRowIntro: e.renderRowIntro, dayMaxEvents: e.dayMaxEvents, dayMaxEventRows: e.dayMaxEventRows, showWeekNumbers: e.showWeekNumbers, expandRows: e.expandRows, headerAlignElRef: e.headerAlignElRef, clientWidth: e.clientWidth, clientHeight: e.clientHeight, forPrint: e.forPrint }));
  }
}
class tw extends xC {
  constructor() {
    super(...arguments), this.buildDayTableModel = be(nw), this.headerRef = et(), this.tableRef = et();
  }
  render() {
    let { options: e, dateProfileGenerator: n } = this.context, { props: a } = this, i = this.buildDayTableModel(a.dateProfile, n), r = e.dayHeaders && H(_b, { ref: this.headerRef, dateProfile: a.dateProfile, dates: i.headerDates, datesRepDistinctDays: i.rowCnt === 1 }), o = (s) => H(ew, { ref: this.tableRef, dateProfile: a.dateProfile, dayTableModel: i, businessHours: a.businessHours, dateSelection: a.dateSelection, eventStore: a.eventStore, eventUiBases: a.eventUiBases, eventSelection: a.eventSelection, eventDrag: a.eventDrag, eventResize: a.eventResize, nextDayThreshold: e.nextDayThreshold, colGroupNode: s.tableColGroupNode, tableMinWidth: s.tableMinWidth, dayMaxEvents: e.dayMaxEvents, dayMaxEventRows: e.dayMaxEventRows, showWeekNumbers: e.weekNumbers, expandRows: !a.isHeightAuto, headerAlignElRef: this.headerElRef, clientWidth: s.clientWidth, clientHeight: s.clientHeight, forPrint: a.forPrint });
    return e.dayMinWidth ? this.renderHScrollLayout(r, o, i.colCnt, e.dayMinWidth) : this.renderSimpleLayout(r, o);
  }
}
function nw(t, e) {
  let n = new Sb(t.renderRange, e);
  return new Tb(n, /year|month|week/.test(t.currentRangeUnit));
}
class aw extends wo {
  // Computes the date range that will be rendered
  buildRenderRange(e, n, a) {
    let i = super.buildRenderRange(e, n, a), { props: r } = this;
    return iw({
      currentRange: i,
      snapToWeek: /^(year|month)$/.test(n),
      fixedWeekCount: r.fixedWeekCount,
      dateEnv: r.dateEnv
    });
  }
}
function iw(t) {
  let { dateEnv: e, currentRange: n } = t, { start: a, end: i } = n, r;
  if (t.snapToWeek && (a = e.startOfWeek(a), r = e.startOfWeek(i), r.valueOf() !== i.valueOf() && (i = Oi(r, 1))), t.fixedWeekCount) {
    let o = e.startOfWeek(e.startOfMonth(Be(n.end, -1))), s = Math.ceil(
      // could be partial weeks due to hiddenDays
      cg(o, i)
    );
    i = Oi(i, 6 - s);
  }
  return { start: a, end: i };
}
var rw = ':root{--fc-daygrid-event-dot-width:8px}.fc-daygrid-day-events:after,.fc-daygrid-day-events:before,.fc-daygrid-day-frame:after,.fc-daygrid-day-frame:before,.fc-daygrid-event-harness:after,.fc-daygrid-event-harness:before{clear:both;content:"";display:table}.fc .fc-daygrid-body{position:relative;z-index:1}.fc .fc-daygrid-day.fc-day-today{background-color:var(--fc-today-bg-color)}.fc .fc-daygrid-day-frame{min-height:100%;position:relative}.fc .fc-daygrid-day-top{display:flex;flex-direction:row-reverse}.fc .fc-day-other .fc-daygrid-day-top{opacity:.3}.fc .fc-daygrid-day-number{padding:4px;position:relative;z-index:4}.fc .fc-daygrid-month-start{font-size:1.1em;font-weight:700}.fc .fc-daygrid-day-events{margin-top:1px}.fc .fc-daygrid-body-balanced .fc-daygrid-day-events{left:0;position:absolute;right:0}.fc .fc-daygrid-body-unbalanced .fc-daygrid-day-events{min-height:2em;position:relative}.fc .fc-daygrid-body-natural .fc-daygrid-day-events{margin-bottom:1em}.fc .fc-daygrid-event-harness{position:relative}.fc .fc-daygrid-event-harness-abs{left:0;position:absolute;right:0;top:0}.fc .fc-daygrid-bg-harness{bottom:0;position:absolute;top:0}.fc .fc-daygrid-day-bg .fc-non-business{z-index:1}.fc .fc-daygrid-day-bg .fc-bg-event{z-index:2}.fc .fc-daygrid-day-bg .fc-highlight{z-index:3}.fc .fc-daygrid-event{margin-top:1px;z-index:6}.fc .fc-daygrid-event.fc-event-mirror{z-index:7}.fc .fc-daygrid-day-bottom{font-size:.85em;margin:0 2px}.fc .fc-daygrid-day-bottom:after,.fc .fc-daygrid-day-bottom:before{clear:both;content:"";display:table}.fc .fc-daygrid-more-link{border-radius:3px;cursor:pointer;line-height:1;margin-top:1px;max-width:100%;overflow:hidden;padding:2px;position:relative;white-space:nowrap;z-index:4}.fc .fc-daygrid-more-link:hover{background-color:rgba(0,0,0,.1)}.fc .fc-daygrid-week-number{background-color:var(--fc-neutral-bg-color);color:var(--fc-neutral-text-color);min-width:1.5em;padding:2px;position:absolute;text-align:center;top:0;z-index:5}.fc .fc-more-popover .fc-popover-body{min-width:220px;padding:10px}.fc-direction-ltr .fc-daygrid-event.fc-event-start,.fc-direction-rtl .fc-daygrid-event.fc-event-end{margin-left:2px}.fc-direction-ltr .fc-daygrid-event.fc-event-end,.fc-direction-rtl .fc-daygrid-event.fc-event-start{margin-right:2px}.fc-direction-ltr .fc-daygrid-more-link{float:left}.fc-direction-ltr .fc-daygrid-week-number{border-radius:0 0 3px 0;left:0}.fc-direction-rtl .fc-daygrid-more-link{float:right}.fc-direction-rtl .fc-daygrid-week-number{border-radius:0 0 0 3px;right:0}.fc-liquid-hack .fc-daygrid-day-frame{position:static}.fc-daygrid-event{border-radius:3px;font-size:var(--fc-small-font-size);position:relative;white-space:nowrap}.fc-daygrid-block-event .fc-event-time{font-weight:700}.fc-daygrid-block-event .fc-event-time,.fc-daygrid-block-event .fc-event-title{padding:1px}.fc-daygrid-dot-event{align-items:center;display:flex;padding:2px 0}.fc-daygrid-dot-event .fc-event-title{flex-grow:1;flex-shrink:1;font-weight:700;min-width:0;overflow:hidden}.fc-daygrid-dot-event.fc-event-mirror,.fc-daygrid-dot-event:hover{background:rgba(0,0,0,.1)}.fc-daygrid-dot-event.fc-event-selected:before{bottom:-10px;top:-10px}.fc-daygrid-event-dot{border:calc(var(--fc-daygrid-event-dot-width)/2) solid var(--fc-event-border-color);border-radius:calc(var(--fc-daygrid-event-dot-width)/2);box-sizing:content-box;height:0;margin:0 4px;width:0}.fc-direction-ltr .fc-daygrid-event .fc-event-time{margin-right:3px}.fc-direction-rtl .fc-daygrid-event .fc-event-time{margin-left:3px}';
ao(rw);
var ow = ct({
  name: "@fullcalendar/daygrid",
  initialView: "dayGridMonth",
  views: {
    dayGrid: {
      component: tw,
      dateProfileGeneratorClass: aw
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
Za.touchMouseIgnoreWait = 500;
let wa = 0, On = 0, Aa = !1;
class hs {
  constructor(e) {
    this.subjectEl = null, this.selector = "", this.handleSelector = "", this.shouldIgnoreMove = !1, this.shouldWatchScroll = !0, this.isDragging = !1, this.isTouchDragging = !1, this.wasTouchScroll = !1, this.handleMouseDown = (n) => {
      if (!this.shouldIgnoreMouse() && sw(n) && this.tryStart(n)) {
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
        a.removeEventListener("touchmove", this.handleTouchMove), a.removeEventListener("touchend", this.handleTouchEnd), a.removeEventListener("touchcancel", this.handleTouchEnd), window.removeEventListener("scroll", this.handleTouchScroll, !0), this.emitter.trigger("pointerup", this.createEventFromTouch(n)), this.cleanup(), this.isTouchDragging = !1, lw();
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
    }, this.containerEl = e, this.emitter = new zn(), e.addEventListener("mousedown", this.handleMouseDown), e.addEventListener("touchstart", this.handleTouchStart, { passive: !0 }), uw();
  }
  destroy() {
    this.containerEl.removeEventListener("mousedown", this.handleMouseDown), this.containerEl.removeEventListener("touchstart", this.handleTouchStart, { passive: !0 }), cw();
  }
  tryStart(e) {
    let n = this.querySubjectEl(e), a = e.target;
    return n && (!this.handleSelector || ze(a, this.handleSelector)) ? (this.subjectEl = n, this.isDragging = !0, this.wasTouchScroll = !1, !0) : !1;
  }
  cleanup() {
    Aa = !1, this.isDragging = !1, this.subjectEl = null, this.destroyScrollWatch();
  }
  querySubjectEl(e) {
    return this.selector ? ze(e.target, this.selector) : this.containerEl;
  }
  shouldIgnoreMouse() {
    return wa || this.isTouchDragging;
  }
  // can be called by user of this class, to cancel touch-based scrolling for the current drag
  cancelTouchScroll() {
    this.isDragging && (Aa = !0);
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
    let a = e.touches, i, r, o = 0, s = 0;
    return a && a.length ? (i = a[0].pageX, r = a[0].pageY) : (i = e.pageX, r = e.pageY), n ? (this.origPageX = i, this.origPageY = r) : (o = i - this.origPageX, s = r - this.origPageY), {
      origEvent: e,
      isTouch: !0,
      subjectEl: this.subjectEl,
      pageX: i,
      pageY: r,
      deltaX: o,
      deltaY: s
    };
  }
}
function sw(t) {
  return t.button === 0 && !t.ctrlKey;
}
function lw() {
  wa += 1, setTimeout(() => {
    wa -= 1;
  }, Za.touchMouseIgnoreWait);
}
function uw() {
  On += 1, On === 1 && window.addEventListener("touchmove", vs, { passive: !1 });
}
function cw() {
  On -= 1, On || window.removeEventListener("touchmove", vs, { passive: !1 });
}
function vs(t) {
  Aa && t.preventDefault();
}
class dw {
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
    a.style.transition = "top " + n + "ms,left " + n + "ms", jt(a, {
      left: i.left,
      top: i.top
    }), Yp(a, () => {
      a.style.transition = "", e();
    });
  }
  cleanup() {
    this.mirrorEl && (Ia(this.mirrorEl), this.mirrorEl = null), this.sourceEl = null;
  }
  updateElPosition() {
    this.sourceEl && this.isVisible && jt(this.getMirrorEl(), {
      left: this.sourceElRect.left + this.deltaX,
      top: this.sourceElRect.top + this.deltaY
    });
  }
  getMirrorEl() {
    let e = this.sourceElRect, n = this.mirrorEl;
    return n || (n = this.mirrorEl = this.sourceEl.cloneNode(!0), n.style.userSelect = "none", n.style.webkitUserSelect = "none", n.style.pointerEvents = "none", n.classList.add("fc-event-dragging"), jt(n, {
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
class ps extends Qa {
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
class gs extends ps {
  constructor(e, n) {
    super(new vb(e), n);
  }
  getEventTarget() {
    return this.scrollController.el;
  }
  computeClientRect() {
    return mb(this.scrollController.el);
  }
}
class fw extends ps {
  constructor(e) {
    super(new pb(), e);
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
const lr = typeof performance == "function" ? performance.now : Date.now;
class mw {
  constructor() {
    this.isEnabled = !0, this.scrollQuery = [window, ".fc-scroller"], this.edgeThreshold = 50, this.maxVelocity = 300, this.pointerScreenX = null, this.pointerScreenY = null, this.isAnimating = !1, this.scrollCaches = null, this.everMovedUp = !1, this.everMovedDown = !1, this.everMovedLeft = !1, this.everMovedRight = !1, this.animate = () => {
      if (this.isAnimating) {
        let e = this.computeBestEdge(this.pointerScreenX + window.scrollX, this.pointerScreenY + window.scrollY);
        if (e) {
          let n = lr();
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
      let a = e - window.scrollX, i = n - window.scrollY, r = this.pointerScreenY === null ? 0 : i - this.pointerScreenY, o = this.pointerScreenX === null ? 0 : a - this.pointerScreenX;
      r < 0 ? this.everMovedUp = !0 : r > 0 && (this.everMovedDown = !0), o < 0 ? this.everMovedLeft = !0 : o > 0 && (this.everMovedRight = !0), this.pointerScreenX = a, this.pointerScreenY = i, this.isAnimating || (this.isAnimating = !0, this.requestAnimation(lr()));
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
    let { scrollCache: a } = e, { edgeThreshold: i } = this, r = i - e.distance, o = (
      // the closer to the edge, the faster we scroll
      r * r / (i * i) * // quadratic
      this.maxVelocity * n
    ), s = 1;
    switch (e.name) {
      case "left":
        s = -1;
      // falls through
      case "right":
        a.setScrollLeft(a.getScrollLeft() + o * s);
        break;
      case "top":
        s = -1;
      // falls through
      case "bottom":
        a.setScrollTop(a.getScrollTop() + o * s);
        break;
    }
  }
  // left/top are relative to document topleft
  computeBestEdge(e, n) {
    let { edgeThreshold: a } = this, i = null, r = this.scrollCaches || [];
    for (let o of r) {
      let s = o.clientRect, u = e - s.left, c = s.right - e, d = n - s.top, h = s.bottom - n;
      u >= 0 && c >= 0 && d >= 0 && h >= 0 && (d <= a && this.everMovedUp && o.canScrollUp() && (!i || i.distance > d) && (i = { scrollCache: o, name: "top", distance: d }), h <= a && this.everMovedDown && o.canScrollDown() && (!i || i.distance > h) && (i = { scrollCache: o, name: "bottom", distance: h }), u <= a && this.everMovedLeft && o.canScrollLeft() && (!i || i.distance > u) && (i = { scrollCache: o, name: "left", distance: u }), c <= a && this.everMovedRight && o.canScrollRight() && (!i || i.distance > c) && (i = { scrollCache: o, name: "right", distance: c }));
    }
    return i;
  }
  buildCaches(e) {
    return this.queryScrollEls(e).map((n) => n === window ? new fw(!1) : new gs(n, !1));
  }
  queryScrollEls(e) {
    let n = [];
    for (let a of this.scrollQuery)
      typeof a == "object" ? n.push(a) : n.push(...Array.prototype.slice.call(e.getRootNode().querySelectorAll(a)));
    return n;
  }
}
class Xt extends yb {
  constructor(e, n) {
    super(e), this.containerEl = e, this.delay = null, this.minDistance = 0, this.touchScrollAllowed = !0, this.mirrorNeedsRevert = !1, this.isInteracting = !1, this.isDragging = !1, this.isDelayEnded = !1, this.isDistanceSurpassed = !1, this.delayTimeoutId = null, this.onPointerDown = (i) => {
      this.isDragging || (this.isInteracting = !0, this.isDelayEnded = !1, this.isDistanceSurpassed = !1, Gp(document.body), qp(document.body), i.isTouch || i.origEvent.preventDefault(), this.emitter.trigger("pointerdown", i), this.isInteracting && // not destroyed via pointerdown handler
      !this.pointer.shouldIgnoreMove && (this.mirror.setIsVisible(!1), this.mirror.start(i.subjectEl, i.pageX, i.pageY), this.startDelay(i), this.minDistance || this.handleDistanceSurpassed(i)));
    }, this.onPointerMove = (i) => {
      if (this.isInteracting) {
        if (this.emitter.trigger("pointermove", i), !this.isDistanceSurpassed) {
          let r = this.minDistance, o, { deltaX: s, deltaY: u } = i;
          o = s * s + u * u, o >= r * r && this.handleDistanceSurpassed(i);
        }
        this.isDragging && (i.origEvent.type !== "scroll" && (this.mirror.handleMove(i.pageX, i.pageY), this.autoScroller.handleMove(i.pageX, i.pageY)), this.emitter.trigger("dragmove", i));
      }
    }, this.onPointerUp = (i) => {
      this.isInteracting && (this.isInteracting = !1, Kp(document.body), Qp(document.body), this.emitter.trigger("pointerup", i), this.isDragging && (this.autoScroller.stop(), this.tryStopDrag(i)), this.delayTimeoutId && (clearTimeout(this.delayTimeoutId), this.delayTimeoutId = null));
    };
    let a = this.pointer = new hs(e);
    a.emitter.on("pointerdown", this.onPointerDown), a.emitter.on("pointermove", this.onPointerMove), a.emitter.on("pointerup", this.onPointerUp), n && (a.selector = n), this.mirror = new dw(), this.autoScroller = new mw();
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
class hw {
  constructor(e) {
    this.el = e, this.origRect = qa(e), this.scrollCaches = Lo(e).map((n) => new gs(n, !0));
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
      if (!vw(i.getEventTarget()) && !nb(a, i.clientRect))
        return !1;
    return !0;
  }
}
function vw(t) {
  let e = t.tagName;
  return e === "HTML" || e === "BODY";
}
class Hn {
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
    }, this.droppableStore = n, e.emitter.on("pointerdown", this.handlePointerDown), e.emitter.on("dragstart", this.handleDragStart), e.emitter.on("dragmove", this.handleDragMove), e.emitter.on("pointerup", this.handlePointerUp), e.emitter.on("dragend", this.handleDragEnd), this.dragging = e, this.emitter = new zn();
  }
  // sets initialHit
  // sets coordAdjust
  processFirstCoord(e) {
    let n = { left: e.pageX, top: e.pageY }, a = n, i = e.subjectEl, r;
    i instanceof HTMLElement && (r = qa(i), a = ab(a, r));
    let o = this.initialHit = this.queryHitForOffset(a.left, a.top);
    if (o) {
      if (this.useSubjectCenter && r) {
        let s = Fo(r, o.rect);
        s && (a = ib(s));
      }
      this.coordAdjust = rb(a, n);
    } else
      this.coordAdjust = { left: 0, top: 0 };
  }
  handleMove(e, n) {
    let a = this.queryHitForOffset(e.pageX + this.coordAdjust.left, e.pageY + this.coordAdjust.top);
    (n || !Vn(this.movingHit, a)) && (this.movingHit = a, this.emitter.trigger("hitupdate", a, !1, e));
  }
  prepareHits() {
    this.offsetTrackers = At(this.droppableStore, (e) => (e.component.prepareHits(), new hw(e.el)));
  }
  releaseHits() {
    let { offsetTrackers: e } = this;
    for (let n in e)
      e[n].destroy();
    this.offsetTrackers = {};
  }
  queryHitForOffset(e, n) {
    let { droppableStore: a, offsetTrackers: i } = this, r = null;
    for (let o in a) {
      let s = a[o].component, u = i[o];
      if (u && // wasn't destroyed mid-drag
      u.isWithinClipping(e, n)) {
        let c = u.computeLeft(), d = u.computeTop(), h = e - c, p = n - d, { origRect: v } = u, y = v.right - v.left, g = v.bottom - v.top;
        if (
          // must be within the element's bounds
          h >= 0 && h < y && p >= 0 && p < g
        ) {
          let b = s.queryHit(h, p, y, g);
          b && // make sure the hit is within activeRange, meaning it's not a dead cell
          Fn(b.dateProfile.activeRange, b.dateSpan.range) && // Ensure the component we are querying for the hit is accessibly my the pointer
          // Prevents obscured calendars (ex: under a modal dialog) from accepting hit
          // https://github.com/fullcalendar/fullcalendar/issues/5026
          (this.disablePointCheck || u.el.contains(u.el.getRootNode().elementFromPoint(
            // add-back origins to get coordinate relative to top-left of window viewport
            h + c - window.scrollX,
            p + d - window.scrollY
          ))) && (!r || b.layer > r.layer) && (b.componentId = o, b.context = s.context, b.rect.left += c, b.rect.right += c, b.rect.top += d, b.rect.bottom += d, r = b);
        }
      }
    }
    return r;
  }
}
function Vn(t, e) {
  return !t && !e ? !0 : !!t != !!e ? !1 : Wy(t.dateSpan, e.dateSpan);
}
function ys(t, e) {
  let n = {};
  for (let a of e.pluginHooks.datePointTransforms)
    Object.assign(n, a(t, e));
  return Object.assign(n, pw(t, e.dateEnv)), n;
}
function pw(t, e) {
  return {
    date: e.toDate(t.range.start),
    dateStr: e.formatIso(t.range.start, { omitTime: t.allDay }),
    allDay: t.allDay
  };
}
class gw extends Ht {
  constructor(e) {
    super(e), this.handlePointerDown = (a) => {
      let { dragging: i } = this, r = a.origEvent.target;
      i.setIgnoreMove(!this.component.isValidDateDownEl(r));
    }, this.handleDragEnd = (a) => {
      let { component: i } = this, { pointer: r } = this.dragging;
      if (!r.wasTouchScroll) {
        let { initialHit: o, finalHit: s } = this.hitDragging;
        if (o && s && Vn(o, s)) {
          let { context: u } = i, c = Object.assign(Object.assign({}, ys(o.dateSpan, u)), { dayEl: o.dayEl, jsEvent: a.origEvent, view: u.viewApi || u.calendarApi.view });
          u.emitter.trigger("dateClick", c);
        }
      }
    }, this.dragging = new Xt(e.el), this.dragging.autoScroller.isEnabled = !1;
    let n = this.hitDragging = new Hn(this.dragging, Ga(e));
    n.emitter.on("pointerdown", this.handlePointerDown), n.emitter.on("dragend", this.handleDragEnd);
  }
  destroy() {
    this.dragging.destroy();
  }
}
class yw extends Ht {
  constructor(e) {
    super(e), this.dragSelection = null, this.handlePointerDown = (o) => {
      let { component: s, dragging: u } = this, { options: c } = s.context, d = c.selectable && s.isValidDateDownEl(o.origEvent.target);
      u.setIgnoreMove(!d), u.delay = o.isTouch ? bw(s) : null;
    }, this.handleDragStart = (o) => {
      this.component.context.calendarApi.unselect(o);
    }, this.handleHitUpdate = (o, s) => {
      let { context: u } = this.component, c = null, d = !1;
      if (o) {
        let h = this.hitDragging.initialHit;
        o.componentId === h.componentId && this.isHitComboAllowed && !this.isHitComboAllowed(h, o) || (c = Cw(h, o, u.pluginHooks.dateSelectionTransformers)), (!c || !Mb(c, o.dateProfile, u)) && (d = !0, c = null);
      }
      c ? u.dispatch({ type: "SELECT_DATES", selection: c }) : s || u.dispatch({ type: "UNSELECT_DATES" }), d ? Oa() : Ra(), s || (this.dragSelection = c);
    }, this.handlePointerUp = (o) => {
      this.dragSelection && (No(this.dragSelection, o, this.component.context), this.dragSelection = null);
    };
    let { component: n } = e, { options: a } = n.context, i = this.dragging = new Xt(e.el);
    i.touchScrollAllowed = !1, i.minDistance = a.selectMinDistance || 0, i.autoScroller.isEnabled = a.dragScroll;
    let r = this.hitDragging = new Hn(this.dragging, Ga(e));
    r.emitter.on("pointerdown", this.handlePointerDown), r.emitter.on("dragstart", this.handleDragStart), r.emitter.on("hitupdate", this.handleHitUpdate), r.emitter.on("pointerup", this.handlePointerUp);
  }
  destroy() {
    this.dragging.destroy();
  }
}
function bw(t) {
  let { options: e } = t.context, n = e.selectLongPressDelay;
  return n == null && (n = e.longPressDelay), n;
}
function Cw(t, e, n) {
  let a = t.dateSpan, i = e.dateSpan, r = [
    a.range.start,
    a.range.end,
    i.range.start,
    i.range.end
  ];
  r.sort(tg);
  let o = {};
  for (let s of n) {
    let u = s(t, e);
    if (u === !1)
      return null;
    u && Object.assign(o, u);
  }
  return o.range = { start: r[0], end: r[3] }, o.allDay = a.allDay, o;
}
class en extends Ht {
  constructor(e) {
    super(e), this.subjectEl = null, this.subjectSeg = null, this.isDragging = !1, this.eventRange = null, this.relevantEvents = null, this.receivingContext = null, this.validMutation = null, this.mutatedRelevantEvents = null, this.handlePointerDown = (o) => {
      let s = o.origEvent.target, { component: u, dragging: c } = this, { mirror: d } = c, { options: h } = u.context, p = u.context;
      this.subjectEl = o.subjectEl;
      let v = this.subjectSeg = Ft(o.subjectEl), g = (this.eventRange = v.eventRange).instance.instanceId;
      this.relevantEvents = ja(p.getCurrentData().eventStore, g), c.minDistance = o.isTouch ? 0 : h.eventDragMinDistance, c.delay = // only do a touch delay if touch and this event hasn't been selected yet
      o.isTouch && g !== u.props.eventSelection ? Aw(u) : null, h.fixedMirrorParent ? d.parentNode = h.fixedMirrorParent : d.parentNode = ze(s, ".fc"), d.revertDuration = h.dragRevertDuration;
      let b = u.isValidSegDownEl(s) && !ze(s, ".fc-event-resizer");
      c.setIgnoreMove(!b), this.isDragging = b && o.subjectEl.classList.contains("fc-event-draggable");
    }, this.handleDragStart = (o) => {
      let s = this.component.context, u = this.eventRange, c = u.instance.instanceId;
      o.isTouch ? c !== this.component.props.eventSelection && s.dispatch({ type: "SELECT_EVENT", eventInstanceId: c }) : s.dispatch({ type: "UNSELECT_EVENT" }), this.isDragging && (s.calendarApi.unselect(o), s.emitter.trigger("eventDragStart", {
        el: this.subjectEl,
        event: new Ne(s, u.def, u.instance),
        jsEvent: o.origEvent,
        view: s.viewApi
      }));
    }, this.handleHitUpdate = (o, s) => {
      if (!this.isDragging)
        return;
      let u = this.relevantEvents, c = this.hitDragging.initialHit, d = this.component.context, h = null, p = null, v = null, y = !1, g = {
        affectedEvents: u,
        mutatedEvents: Ke(),
        isEvent: !0
      };
      if (o) {
        h = o.context;
        let b = h.options;
        d === h || b.editable && b.droppable ? (p = ww(c, o, this.eventRange.instance.range.start, h.getCurrentData().pluginHooks.eventDragMutationMassagers), p && (v = Ya(u, h.getCurrentData().eventUiBases, p, h), g.mutatedEvents = v, Uo(g, o.dateProfile, h) || (y = !0, p = null, v = null, g.mutatedEvents = Ke()))) : h = null;
      }
      this.displayDrag(h, g), y ? Oa() : Ra(), s || (d === h && // TODO: write test for this
      Vn(c, o) && (p = null), this.dragging.setMirrorNeedsRevert(!p), this.dragging.setMirrorIsVisible(!o || !this.subjectEl.getRootNode().querySelector(".fc-event-mirror")), this.receivingContext = h, this.validMutation = p, this.mutatedRelevantEvents = v);
    }, this.handlePointerUp = () => {
      this.isDragging || this.cleanup();
    }, this.handleDragEnd = (o) => {
      if (this.isDragging) {
        let s = this.component.context, u = s.viewApi, { receivingContext: c, validMutation: d } = this, h = this.eventRange.def, p = this.eventRange.instance, v = new Ne(s, h, p), y = this.relevantEvents, g = this.mutatedRelevantEvents, { finalHit: b } = this.hitDragging;
        if (this.clearDrag(), s.emitter.trigger("eventDragStop", {
          el: this.subjectEl,
          event: v,
          jsEvent: o.origEvent,
          view: u
        }), d) {
          if (c === s) {
            let C = new Ne(s, g.defs[h.defId], p ? g.instances[p.instanceId] : null);
            s.dispatch({
              type: "MERGE_EVENTS",
              eventStore: g
            });
            let w = {
              oldEvent: v,
              event: C,
              relatedEvents: gt(g, s, p),
              revert() {
                s.dispatch({
                  type: "MERGE_EVENTS",
                  eventStore: y
                  // the pre-change data
                });
              }
            }, k = {};
            for (let T of s.getCurrentData().pluginHooks.eventDropTransformers)
              Object.assign(k, T(d, s));
            s.emitter.trigger("eventDrop", Object.assign(Object.assign(Object.assign({}, w), k), { el: o.subjectEl, delta: d.datesDelta, jsEvent: o.origEvent, view: u })), s.emitter.trigger("eventChange", w);
          } else if (c) {
            let C = {
              event: v,
              relatedEvents: gt(y, s, p),
              revert() {
                s.dispatch({
                  type: "MERGE_EVENTS",
                  eventStore: y
                });
              }
            };
            s.emitter.trigger("eventLeave", Object.assign(Object.assign({}, C), { draggedEl: o.subjectEl, view: u })), s.dispatch({
              type: "REMOVE_EVENTS",
              eventStore: y
            }), s.emitter.trigger("eventRemove", C);
            let w = g.defs[h.defId], k = g.instances[p.instanceId], T = new Ne(c, w, k);
            c.dispatch({
              type: "MERGE_EVENTS",
              eventStore: g
            });
            let M = {
              event: T,
              relatedEvents: gt(g, c, k),
              revert() {
                c.dispatch({
                  type: "REMOVE_EVENTS",
                  eventStore: g
                });
              }
            };
            c.emitter.trigger("eventAdd", M), o.isTouch && c.dispatch({
              type: "SELECT_EVENT",
              eventInstanceId: p.instanceId
            }), c.emitter.trigger("drop", Object.assign(Object.assign({}, ys(b.dateSpan, c)), { draggedEl: o.subjectEl, jsEvent: o.origEvent, view: b.context.viewApi })), c.emitter.trigger("eventReceive", Object.assign(Object.assign({}, M), { draggedEl: o.subjectEl, view: b.context.viewApi }));
          }
        } else
          s.emitter.trigger("_noEventDrop");
      }
      this.cleanup();
    };
    let { component: n } = this, { options: a } = n.context, i = this.dragging = new Xt(e.el);
    i.pointer.selector = en.SELECTOR, i.touchScrollAllowed = !1, i.autoScroller.isEnabled = a.dragScroll;
    let r = this.hitDragging = new Hn(this.dragging, ya);
    r.useSubjectCenter = e.useEventCenter, r.emitter.on("pointerdown", this.handlePointerDown), r.emitter.on("dragstart", this.handleDragStart), r.emitter.on("hitupdate", this.handleHitUpdate), r.emitter.on("pointerup", this.handlePointerUp), r.emitter.on("dragend", this.handleDragEnd);
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
en.SELECTOR = ".fc-event-draggable, .fc-event-resizable";
function ww(t, e, n, a) {
  let i = t.dateSpan, r = e.dateSpan, o = i.range.start, s = r.range.start, u = {};
  i.allDay !== r.allDay && (u.allDay = r.allDay, u.hasEnd = e.context.options.allDayMaintainDuration, r.allDay ? o = Me(n) : o = n);
  let c = Dt(o, s, t.context.dateEnv, t.componentId === e.componentId ? t.largeUnit : null);
  c.milliseconds && (u.allDay = !1);
  let d = {
    datesDelta: c,
    standardProps: u
  };
  for (let h of a)
    h(d, t, e);
  return d;
}
function Aw(t) {
  let { options: e } = t.context, n = e.eventLongPressDelay;
  return n == null && (n = e.longPressDelay), n;
}
class _w extends Ht {
  constructor(e) {
    super(e), this.draggingSegEl = null, this.draggingSeg = null, this.eventRange = null, this.relevantEvents = null, this.validMutation = null, this.mutatedRelevantEvents = null, this.handlePointerDown = (r) => {
      let { component: o } = this, s = this.querySegEl(r), u = Ft(s), c = this.eventRange = u.eventRange;
      this.dragging.minDistance = o.context.options.eventDragMinDistance, this.dragging.setIgnoreMove(!this.component.isValidSegDownEl(r.origEvent.target) || r.isTouch && this.component.props.eventSelection !== c.instance.instanceId);
    }, this.handleDragStart = (r) => {
      let { context: o } = this.component, s = this.eventRange;
      this.relevantEvents = ja(o.getCurrentData().eventStore, this.eventRange.instance.instanceId);
      let u = this.querySegEl(r);
      this.draggingSegEl = u, this.draggingSeg = Ft(u), o.calendarApi.unselect(), o.emitter.trigger("eventResizeStart", {
        el: u,
        event: new Ne(o, s.def, s.instance),
        jsEvent: r.origEvent,
        view: o.viewApi
      });
    }, this.handleHitUpdate = (r, o, s) => {
      let { context: u } = this.component, c = this.relevantEvents, d = this.hitDragging.initialHit, h = this.eventRange.instance, p = null, v = null, y = !1, g = {
        affectedEvents: c,
        mutatedEvents: Ke(),
        isEvent: !0
      };
      r && (r.componentId === d.componentId && this.isHitComboAllowed && !this.isHitComboAllowed(d, r) || (p = kw(d, r, s.subjectEl.classList.contains("fc-event-resizer-start"), h.range))), p && (v = Ya(c, u.getCurrentData().eventUiBases, p, u), g.mutatedEvents = v, Uo(g, r.dateProfile, u) || (y = !0, p = null, v = null, g.mutatedEvents = null)), v ? u.dispatch({
        type: "SET_EVENT_RESIZE",
        state: g
      }) : u.dispatch({ type: "UNSET_EVENT_RESIZE" }), y ? Oa() : Ra(), o || (p && Vn(d, r) && (p = null), this.validMutation = p, this.mutatedRelevantEvents = v);
    }, this.handleDragEnd = (r) => {
      let { context: o } = this.component, s = this.eventRange.def, u = this.eventRange.instance, c = new Ne(o, s, u), d = this.relevantEvents, h = this.mutatedRelevantEvents;
      if (o.emitter.trigger("eventResizeStop", {
        el: this.draggingSegEl,
        event: c,
        jsEvent: r.origEvent,
        view: o.viewApi
      }), this.validMutation) {
        let p = new Ne(o, h.defs[s.defId], u ? h.instances[u.instanceId] : null);
        o.dispatch({
          type: "MERGE_EVENTS",
          eventStore: h
        });
        let v = {
          oldEvent: c,
          event: p,
          relatedEvents: gt(h, o, u),
          revert() {
            o.dispatch({
              type: "MERGE_EVENTS",
              eventStore: d
              // the pre-change events
            });
          }
        };
        o.emitter.trigger("eventResize", Object.assign(Object.assign({}, v), { el: this.draggingSegEl, startDelta: this.validMutation.startDelta || Ce(0), endDelta: this.validMutation.endDelta || Ce(0), jsEvent: r.origEvent, view: o.viewApi })), o.emitter.trigger("eventChange", v);
      } else
        o.emitter.trigger("_noEventResize");
      this.draggingSeg = null, this.relevantEvents = null, this.validMutation = null;
    };
    let { component: n } = e, a = this.dragging = new Xt(e.el);
    a.pointer.selector = ".fc-event-resizer", a.touchScrollAllowed = !1, a.autoScroller.isEnabled = n.context.options.dragScroll;
    let i = this.hitDragging = new Hn(this.dragging, Ga(e));
    i.emitter.on("pointerdown", this.handlePointerDown), i.emitter.on("dragstart", this.handleDragStart), i.emitter.on("hitupdate", this.handleHitUpdate), i.emitter.on("dragend", this.handleDragEnd);
  }
  destroy() {
    this.dragging.destroy();
  }
  querySegEl(e) {
    return ze(e.subjectEl, ".fc-event");
  }
}
function kw(t, e, n, a) {
  let i = t.context.dateEnv, r = t.dateSpan.range.start, o = e.dateSpan.range.start, s = Dt(r, o, i, t.largeUnit);
  if (n) {
    if (i.add(a.start, s) < a.end)
      return { startDelta: s };
  } else if (i.add(a.end, s) > a.start)
    return { endDelta: s };
  return null;
}
class Sw {
  constructor(e) {
    this.context = e, this.isRecentPointerDateSelect = !1, this.matchesCancel = !1, this.matchesEvent = !1, this.onSelect = (a) => {
      a.jsEvent && (this.isRecentPointerDateSelect = !0);
    }, this.onDocumentPointerDown = (a) => {
      let i = this.context.options.unselectCancel, r = so(a.origEvent);
      this.matchesCancel = !!ze(r, i), this.matchesEvent = !!ze(r, en.SELECTOR);
    }, this.onDocumentPointerUp = (a) => {
      let { context: i } = this, { documentPointer: r } = this, o = i.getCurrentData();
      if (!r.wasTouchScroll) {
        if (o.dateSelection && // an existing date selection?
        !this.isRecentPointerDateSelect) {
          let s = i.options.unselectAuto;
          s && (!s || !this.matchesCancel) && i.calendarApi.unselect(a);
        }
        o.eventSelection && // an existing event selected?
        !this.matchesEvent && i.dispatch({ type: "UNSELECT_EVENT" });
      }
      this.isRecentPointerDateSelect = !1;
    };
    let n = this.documentPointer = new hs(document);
    n.shouldIgnoreMove = !0, n.shouldWatchScroll = !1, n.emitter.on("pointerdown", this.onDocumentPointerDown), n.emitter.on("pointerup", this.onDocumentPointerUp), e.emitter.on("select", this.onSelect);
  }
  destroy() {
    this.context.emitter.off("select", this.onSelect), this.documentPointer.destroy();
  }
}
const Tw = {
  fixedMirrorParent: z
}, Ew = {
  dateClick: z,
  eventDragStart: z,
  eventDragStop: z,
  eventDrop: z,
  eventResizeStart: z,
  eventResizeStop: z,
  eventResize: z,
  drop: z,
  eventReceive: z,
  eventLeave: z
};
Za.dataAttrPrefix = "";
var Mw = ct({
  name: "@fullcalendar/interaction",
  componentInteractions: [gw, yw, en, _w],
  calendarInteractions: [Sw],
  elementDraggingImpl: Xt,
  optionRefiners: Tw,
  listenerRefiners: Ew
});
const Nw = /* @__PURE__ */ JSON.parse(`[{"name":"Pacific/Midway","alternativeName":"American Samoa Time","group":["Pacific/Midway"],"continentCode":"OC","continentName":"Oceania","countryName":"United States Minor Outlying Islands","countryCode":"UM","mainCities":["Midway"],"rawOffsetInMinutes":-660,"abbreviation":"GMT-11","rawFormat":"-11:00 American Samoa Time - Midway"},{"name":"Pacific/Pago_Pago","alternativeName":"American Samoa Time","group":["Pacific/Pago_Pago","US/Samoa","Pacific/Samoa","Pacific/Midway"],"continentCode":"OC","continentName":"Oceania","countryName":"American Samoa","countryCode":"AS","mainCities":["Pago Pago"],"rawOffsetInMinutes":-660,"abbreviation":"GMT-11","rawFormat":"-11:00 American Samoa Time - Pago Pago"},{"name":"Pacific/Niue","alternativeName":"Niue Time","group":["Pacific/Niue"],"continentCode":"OC","continentName":"Oceania","countryName":"Niue","countryCode":"NU","mainCities":["Alofi"],"rawOffsetInMinutes":-660,"abbreviation":"NUT","rawFormat":"-11:00 Niue Time - Alofi"},{"name":"Pacific/Rarotonga","alternativeName":"Cook Islands Time","group":["Pacific/Rarotonga"],"continentCode":"OC","continentName":"Oceania","countryName":"Cook Islands","countryCode":"CK","mainCities":["Avarua"],"rawOffsetInMinutes":-600,"abbreviation":"CKT","rawFormat":"-10:00 Cook Islands Time - Avarua"},{"name":"America/Adak","alternativeName":"Hawaii-Aleutian Time","group":["America/Adak","US/Aleutian","America/Atka"],"continentCode":"NA","continentName":"North America","countryName":"United States","countryCode":"US","mainCities":["Adak"],"rawOffsetInMinutes":-600,"abbreviation":"HAST","rawFormat":"-10:00 Hawaii-Aleutian Time - Adak"},{"name":"Pacific/Honolulu","alternativeName":"Hawaii-Aleutian Time","group":["Pacific/Honolulu","US/Hawaii","Pacific/Johnston","HST"],"continentCode":"NA","continentName":"North America","countryName":"United States","countryCode":"US","mainCities":["Honolulu","East Honolulu","Pearl City","Makakilo / Kapolei / Honokai Hale"],"rawOffsetInMinutes":-600,"abbreviation":"HAST","rawFormat":"-10:00 Hawaii-Aleutian Time - Honolulu, East Honolulu, Pearl City, Makakilo / Kapolei / Honokai Hale"},{"name":"Pacific/Tahiti","alternativeName":"Tahiti Time","group":["Pacific/Tahiti"],"continentCode":"OC","continentName":"Oceania","countryName":"French Polynesia","countryCode":"PF","mainCities":["Faaa","Papeete","Punaauia"],"rawOffsetInMinutes":-600,"abbreviation":"TAHT","rawFormat":"-10:00 Tahiti Time - Faaa, Papeete, Punaauia"},{"name":"Pacific/Marquesas","alternativeName":"Marquesas Time","group":["Pacific/Marquesas"],"continentCode":"OC","continentName":"Oceania","countryName":"French Polynesia","countryCode":"PF","mainCities":["Marquesas"],"rawOffsetInMinutes":-570,"abbreviation":"MART","rawFormat":"-09:30 Marquesas Time - Marquesas"},{"name":"America/Anchorage","alternativeName":"Alaska Time","group":["America/Anchorage","America/Juneau","America/Metlakatla","America/Nome","America/Sitka","America/Yakutat","US/Alaska"],"continentCode":"NA","continentName":"North America","countryName":"United States","countryCode":"US","mainCities":["Anchorage","Fairbanks","Juneau","Eagle River"],"rawOffsetInMinutes":-540,"abbreviation":"AKST","rawFormat":"-09:00 Alaska Time - Anchorage, Fairbanks, Juneau, Eagle River"},{"name":"Pacific/Gambier","alternativeName":"Gambier Time","group":["Pacific/Gambier"],"continentCode":"OC","continentName":"Oceania","countryName":"French Polynesia","countryCode":"PF","mainCities":["Gambier"],"rawOffsetInMinutes":-540,"abbreviation":"GAMT","rawFormat":"-09:00 Gambier Time - Gambier"},{"name":"America/Los_Angeles","alternativeName":"Pacific Time","group":["America/Los_Angeles","US/Pacific","PST8PDT"],"continentCode":"NA","continentName":"North America","countryName":"United States","countryCode":"US","mainCities":["Los Angeles","San Diego","San Jose","San Francisco"],"rawOffsetInMinutes":-480,"abbreviation":"PST","rawFormat":"-08:00 Pacific Time - Los Angeles, San Diego, San Jose, San Francisco"},{"name":"America/Tijuana","alternativeName":"Pacific Time","group":["America/Tijuana","Mexico/BajaNorte","America/Ensenada","America/Santa_Isabel"],"continentCode":"NA","continentName":"North America","countryName":"Mexico","countryCode":"MX","mainCities":["Tijuana","Mexicali","Ensenada","Rosarito"],"rawOffsetInMinutes":-480,"abbreviation":"PST","rawFormat":"-08:00 Pacific Time - Tijuana, Mexicali, Ensenada, Rosarito"},{"name":"America/Vancouver","alternativeName":"Pacific Time","group":["America/Vancouver","Canada/Pacific"],"continentCode":"NA","continentName":"North America","countryName":"Canada","countryCode":"CA","mainCities":["Vancouver","Surrey","Victoria","Burnaby"],"rawOffsetInMinutes":-480,"abbreviation":"PST","rawFormat":"-08:00 Pacific Time - Vancouver, Surrey, Victoria, Burnaby"},{"name":"Pacific/Pitcairn","alternativeName":"Pitcairn Time","group":["Pacific/Pitcairn"],"continentCode":"OC","continentName":"Oceania","countryName":"Pitcairn","countryCode":"PN","mainCities":["Adamstown"],"rawOffsetInMinutes":-480,"abbreviation":"PST","rawFormat":"-08:00 Pitcairn Time - Adamstown"},{"name":"America/Hermosillo","alternativeName":"Mexican Pacific Time","group":["America/Hermosillo","America/Mazatlan","Mexico/BajaSur"],"continentCode":"NA","continentName":"North America","countryName":"Mexico","countryCode":"MX","mainCities":["Hermosillo","Culiacán","Mazatlán","Tepic"],"rawOffsetInMinutes":-420,"abbreviation":"GMT-7","rawFormat":"-07:00 Mexican Pacific Time - Hermosillo, Culiacán, Mazatlán, Tepic"},{"name":"America/Edmonton","alternativeName":"Mountain Time","group":["America/Cambridge_Bay","America/Edmonton","America/Inuvik","Canada/Mountain","America/Yellowknife"],"continentCode":"NA","continentName":"North America","countryName":"Canada","countryCode":"CA","mainCities":["Calgary","Edmonton","Lethbridge","Red Deer"],"rawOffsetInMinutes":-420,"abbreviation":"MST","rawFormat":"-07:00 Mountain Time - Calgary, Edmonton, Lethbridge, Red Deer"},{"name":"America/Ciudad_Juarez","alternativeName":"Mountain Time","group":["America/Ciudad_Juarez"],"continentCode":"NA","continentName":"North America","countryName":"Mexico","countryCode":"MX","mainCities":["Ciudad Juárez"],"rawOffsetInMinutes":-420,"abbreviation":"MST","rawFormat":"-07:00 Mountain Time - Ciudad Juárez"},{"name":"America/Denver","alternativeName":"Mountain Time","group":["America/Boise","America/Denver","MST7MDT","Navajo","US/Mountain","America/Shiprock"],"continentCode":"NA","continentName":"North America","countryName":"United States","countryCode":"US","mainCities":["Denver","El Paso","Albuquerque","Colorado Springs"],"rawOffsetInMinutes":-420,"abbreviation":"MST","rawFormat":"-07:00 Mountain Time - Denver, El Paso, Albuquerque, Colorado Springs"},{"name":"America/Phoenix","alternativeName":"Mountain Time","group":["America/Phoenix","MST","US/Arizona","America/Creston"],"continentCode":"NA","continentName":"North America","countryName":"United States","countryCode":"US","mainCities":["Phoenix","Tucson","Mesa","Chandler"],"rawOffsetInMinutes":-420,"abbreviation":"MST","rawFormat":"-07:00 Mountain Time - Phoenix, Tucson, Mesa, Chandler"},{"name":"America/Whitehorse","alternativeName":"Yukon Time","group":["America/Creston","America/Dawson","America/Dawson_Creek","America/Fort_Nelson","America/Whitehorse","Canada/Yukon"],"continentCode":"NA","continentName":"North America","countryName":"Canada","countryCode":"CA","mainCities":["Whitehorse","Fort St. John","Creston","Dawson"],"rawOffsetInMinutes":-420,"abbreviation":"YT","rawFormat":"-07:00 Yukon Time - Whitehorse, Fort St. John, Creston, Dawson"},{"name":"America/Belize","alternativeName":"Central Time","group":["America/Belize"],"continentCode":"NA","continentName":"North America","countryName":"Belize","countryCode":"BZ","mainCities":["Belize City","San Pedro","Orange Walk","Belmopan"],"rawOffsetInMinutes":-360,"abbreviation":"CST","rawFormat":"-06:00 Central Time - Belize City, San Pedro, Orange Walk, Belmopan"},{"name":"America/Chicago","alternativeName":"Central Time","group":["America/Chicago","America/Indiana/Knox","America/Indiana/Tell_City","America/Menominee","America/North_Dakota/Beulah","America/North_Dakota/Center","America/North_Dakota/New_Salem","CST6CDT","US/Central","US/Indiana-Starke","America/Knox_IN"],"continentCode":"NA","continentName":"North America","countryName":"United States","countryCode":"US","mainCities":["Chicago","Houston","San Antonio","Dallas"],"rawOffsetInMinutes":-360,"abbreviation":"CST","rawFormat":"-06:00 Central Time - Chicago, Houston, San Antonio, Dallas"},{"name":"America/Guatemala","alternativeName":"Central Time","group":["America/Guatemala"],"continentCode":"NA","continentName":"North America","countryName":"Guatemala","countryCode":"GT","mainCities":["Guatemala City","Villa Nueva","Mixco","Cobán"],"rawOffsetInMinutes":-360,"abbreviation":"CST","rawFormat":"-06:00 Central Time - Guatemala City, Villa Nueva, Mixco, Cobán"},{"name":"America/Managua","alternativeName":"Central Time","group":["America/Managua"],"continentCode":"NA","continentName":"North America","countryName":"Nicaragua","countryCode":"NI","mainCities":["Managua","León","Masaya","Chinandega"],"rawOffsetInMinutes":-360,"abbreviation":"CST","rawFormat":"-06:00 Central Time - Managua, León, Masaya, Chinandega"},{"name":"America/Mexico_City","alternativeName":"Central Time","group":["America/Bahia_Banderas","America/Chihuahua","America/Merida","America/Mexico_City","America/Monterrey","Mexico/General"],"continentCode":"NA","continentName":"North America","countryName":"Mexico","countryCode":"MX","mainCities":["Mexico City","Iztapalapa","Puebla","Ecatepec de Morelos"],"rawOffsetInMinutes":-360,"abbreviation":"CST","rawFormat":"-06:00 Central Time - Mexico City, Iztapalapa, Puebla, Ecatepec de Morelos"},{"name":"America/Matamoros","alternativeName":"Central Time","group":["America/Matamoros","America/Ojinaga"],"continentCode":"NA","continentName":"North America","countryName":"Mexico","countryCode":"MX","mainCities":["Reynosa","Heroica Matamoros","Nuevo Laredo","Ciudad Acuña"],"rawOffsetInMinutes":-360,"abbreviation":"CST","rawFormat":"-06:00 Central Time - Reynosa, Heroica Matamoros, Nuevo Laredo, Ciudad Acuña"},{"name":"America/Costa_Rica","alternativeName":"Central Time","group":["America/Costa_Rica"],"continentCode":"NA","continentName":"North America","countryName":"Costa Rica","countryCode":"CR","mainCities":["San José","Limón","San Francisco","Alajuela"],"rawOffsetInMinutes":-360,"abbreviation":"CST","rawFormat":"-06:00 Central Time - San José, Limón, San Francisco, Alajuela"},{"name":"America/El_Salvador","alternativeName":"Central Time","group":["America/El_Salvador"],"continentCode":"NA","continentName":"North America","countryName":"El Salvador","countryCode":"SV","mainCities":["San Salvador","Soyapango","San Miguel","Santa Ana"],"rawOffsetInMinutes":-360,"abbreviation":"CST","rawFormat":"-06:00 Central Time - San Salvador, Soyapango, San Miguel, Santa Ana"},{"name":"America/Regina","alternativeName":"Central Time","group":["America/Regina","America/Swift_Current","Canada/Saskatchewan"],"continentCode":"NA","continentName":"North America","countryName":"Canada","countryCode":"CA","mainCities":["Saskatoon","Regina","Prince Albert","Moose Jaw"],"rawOffsetInMinutes":-360,"abbreviation":"CST","rawFormat":"-06:00 Central Time - Saskatoon, Regina, Prince Albert, Moose Jaw"},{"name":"America/Tegucigalpa","alternativeName":"Central Time","group":["America/Tegucigalpa"],"continentCode":"NA","continentName":"North America","countryName":"Honduras","countryCode":"HN","mainCities":["Tegucigalpa","San Pedro Sula","La Ceiba","Choloma"],"rawOffsetInMinutes":-360,"abbreviation":"CST","rawFormat":"-06:00 Central Time - Tegucigalpa, San Pedro Sula, La Ceiba, Choloma"},{"name":"America/Winnipeg","alternativeName":"Central Time","group":["America/Rankin_Inlet","America/Resolute","America/Winnipeg","Canada/Central","America/Rainy_River"],"continentCode":"NA","continentName":"North America","countryName":"Canada","countryCode":"CA","mainCities":["Winnipeg","Brandon","Steinbach","Kenora"],"rawOffsetInMinutes":-360,"abbreviation":"CST","rawFormat":"-06:00 Central Time - Winnipeg, Brandon, Steinbach, Kenora"},{"name":"Pacific/Easter","alternativeName":"Easter Island Time","group":["Pacific/Easter","Chile/EasterIsland"],"continentCode":"SA","continentName":"South America","countryName":"Chile","countryCode":"CL","mainCities":["Easter"],"rawOffsetInMinutes":-360,"abbreviation":"EAST","rawFormat":"-06:00 Easter Island Time - Easter"},{"name":"Pacific/Galapagos","alternativeName":"Galapagos Time","group":["Pacific/Galapagos"],"continentCode":"SA","continentName":"South America","countryName":"Ecuador","countryCode":"EC","mainCities":["Galapagos"],"rawOffsetInMinutes":-360,"abbreviation":"GALT","rawFormat":"-06:00 Galapagos Time - Galapagos"},{"name":"America/Rio_Branco","alternativeName":"Acre Time","group":["America/Eirunepe","America/Rio_Branco","Brazil/Acre","America/Porto_Acre"],"continentCode":"SA","continentName":"South America","countryName":"Brazil","countryCode":"BR","mainCities":["Rio Branco","Cruzeiro do Sul","Tarauacá","Sena Madureira"],"rawOffsetInMinutes":-300,"abbreviation":"ACT","rawFormat":"-05:00 Acre Time - Rio Branco, Cruzeiro do Sul, Tarauacá, Sena Madureira"},{"name":"America/Bogota","alternativeName":"Colombia Time","group":["America/Bogota"],"continentCode":"SA","continentName":"South America","countryName":"Colombia","countryCode":"CO","mainCities":["Bogotá","Cali","Medellín","Barranquilla"],"rawOffsetInMinutes":-300,"abbreviation":"COT","rawFormat":"-05:00 Colombia Time - Bogotá, Cali, Medellín, Barranquilla"},{"name":"America/Havana","alternativeName":"Cuba Time","group":["America/Havana","Cuba"],"continentCode":"NA","continentName":"North America","countryName":"Cuba","countryCode":"CU","mainCities":["Havana","Santiago de Cuba","Camagüey","Holguín"],"rawOffsetInMinutes":-300,"abbreviation":"CST","rawFormat":"-05:00 Cuba Time - Havana, Santiago de Cuba, Camagüey, Holguín"},{"name":"America/Atikokan","alternativeName":"Eastern Time","group":["America/Atikokan"],"continentCode":"NA","continentName":"North America","countryName":"Canada","countryCode":"CA","mainCities":["Atikokan"],"rawOffsetInMinutes":-300,"abbreviation":"EST","rawFormat":"-05:00 Eastern Time - Atikokan"},{"name":"America/Cancun","alternativeName":"Eastern Time","group":["America/Cancun"],"continentCode":"NA","continentName":"North America","countryName":"Mexico","countryCode":"MX","mainCities":["Cancún","Chetumal","Playa del Carmen","Cozumel"],"rawOffsetInMinutes":-300,"abbreviation":"EST","rawFormat":"-05:00 Eastern Time - Cancún, Chetumal, Playa del Carmen, Cozumel"},{"name":"America/Cayman","alternativeName":"Eastern Time","group":["America/Cayman"],"continentCode":"NA","continentName":"North America","countryName":"Cayman Islands","countryCode":"KY","mainCities":["George Town","West Bay"],"rawOffsetInMinutes":-300,"abbreviation":"EST","rawFormat":"-05:00 Eastern Time - George Town, West Bay"},{"name":"America/Jamaica","alternativeName":"Eastern Time","group":["America/Jamaica","Jamaica"],"continentCode":"NA","continentName":"North America","countryName":"Jamaica","countryCode":"JM","mainCities":["Kingston","New Kingston","Spanish Town","Portmore"],"rawOffsetInMinutes":-300,"abbreviation":"EST","rawFormat":"-05:00 Eastern Time - Kingston, New Kingston, Spanish Town, Portmore"},{"name":"America/Nassau","alternativeName":"Eastern Time","group":["America/Nassau"],"continentCode":"NA","continentName":"North America","countryName":"Bahamas","countryCode":"BS","mainCities":["Nassau","Lucaya","Freeport","Killarney"],"rawOffsetInMinutes":-300,"abbreviation":"EST","rawFormat":"-05:00 Eastern Time - Nassau, Lucaya, Freeport, Killarney"},{"name":"America/New_York","alternativeName":"Eastern Time","group":["America/Detroit","America/Indiana/Indianapolis","America/Indiana/Marengo","America/Indiana/Petersburg","America/Indiana/Vevay","America/Indiana/Vincennes","America/Indiana/Winamac","America/Kentucky/Louisville","America/Kentucky/Monticello","America/New_York","US/Michigan","US/East-Indiana","America/Indianapolis","America/Fort_Wayne","America/Louisville","EST5EDT","US/Eastern"],"continentCode":"NA","continentName":"North America","countryName":"United States","countryCode":"US","mainCities":["New York City","Brooklyn","Queens","Philadelphia"],"rawOffsetInMinutes":-300,"abbreviation":"EST","rawFormat":"-05:00 Eastern Time - New York City, Brooklyn, Queens, Philadelphia"},{"name":"America/Panama","alternativeName":"Eastern Time","group":["America/Panama","EST","America/Atikokan","America/Cayman","America/Coral_Harbour"],"continentCode":"NA","continentName":"North America","countryName":"Panama","countryCode":"PA","mainCities":["Panamá","San Miguelito","Juan Díaz","David"],"rawOffsetInMinutes":-300,"abbreviation":"EST","rawFormat":"-05:00 Eastern Time - Panamá, San Miguelito, Juan Díaz, David"},{"name":"America/Port-au-Prince","alternativeName":"Eastern Time","group":["America/Port-au-Prince"],"continentCode":"NA","continentName":"North America","countryName":"Haiti","countryCode":"HT","mainCities":["Port-au-Prince","Carrefour","Delmas","Port-de-Paix"],"rawOffsetInMinutes":-300,"abbreviation":"EST","rawFormat":"-05:00 Eastern Time - Port-au-Prince, Carrefour, Delmas, Port-de-Paix"},{"name":"America/Grand_Turk","alternativeName":"Eastern Time","group":["America/Grand_Turk"],"continentCode":"NA","continentName":"North America","countryName":"Turks and Caicos Islands","countryCode":"TC","mainCities":["Providenciales","Cockburn Town"],"rawOffsetInMinutes":-300,"abbreviation":"EST","rawFormat":"-05:00 Eastern Time - Providenciales, Cockburn Town"},{"name":"America/Toronto","alternativeName":"Eastern Time","group":["America/Iqaluit","America/Toronto","America/Pangnirtung","Canada/Eastern","America/Nassau","America/Montreal","America/Nipigon","America/Thunder_Bay"],"continentCode":"NA","continentName":"North America","countryName":"Canada","countryCode":"CA","mainCities":["Toronto","Montréal","Ottawa","Mississauga"],"rawOffsetInMinutes":-300,"abbreviation":"EST","rawFormat":"-05:00 Eastern Time - Toronto, Montréal, Ottawa, Mississauga"},{"name":"America/Guayaquil","alternativeName":"Ecuador Time","group":["America/Guayaquil"],"continentCode":"SA","continentName":"South America","countryName":"Ecuador","countryCode":"EC","mainCities":["Quito","Guayaquil","Cuenca","Santo Domingo de los Colorados"],"rawOffsetInMinutes":-300,"abbreviation":"ECT","rawFormat":"-05:00 Ecuador Time - Quito, Guayaquil, Cuenca, Santo Domingo de los Colorados"},{"name":"America/Lima","alternativeName":"Peru Time","group":["America/Lima"],"continentCode":"SA","continentName":"South America","countryName":"Peru","countryCode":"PE","mainCities":["Lima","Callao","Arequipa","Trujillo"],"rawOffsetInMinutes":-300,"abbreviation":"PET","rawFormat":"-05:00 Peru Time - Lima, Callao, Arequipa, Trujillo"},{"name":"America/Manaus","alternativeName":"Amazon Time","group":["America/Boa_Vista","America/Campo_Grande","America/Cuiaba","America/Manaus","America/Porto_Velho","Brazil/West"],"continentCode":"SA","continentName":"South America","countryName":"Brazil","countryCode":"BR","mainCities":["Manaus","Campo Grande","Cuiabá","Porto Velho"],"rawOffsetInMinutes":-240,"abbreviation":"AMT","rawFormat":"-04:00 Amazon Time - Manaus, Campo Grande, Cuiabá, Porto Velho"},{"name":"America/St_Kitts","alternativeName":"Atlantic Time","group":["America/St_Kitts"],"continentCode":"NA","continentName":"North America","countryName":"Saint Kitts and Nevis","countryCode":"KN","mainCities":["Basseterre"],"rawOffsetInMinutes":-240,"abbreviation":"AST","rawFormat":"-04:00 Atlantic Time - Basseterre"},{"name":"America/Blanc-Sablon","alternativeName":"Atlantic Time","group":["America/Blanc-Sablon"],"continentCode":"NA","continentName":"North America","countryName":"Canada","countryCode":"CA","mainCities":["Blanc-Sablon"],"rawOffsetInMinutes":-240,"abbreviation":"AST","rawFormat":"-04:00 Atlantic Time - Blanc-Sablon"},{"name":"America/Montserrat","alternativeName":"Atlantic Time","group":["America/Montserrat"],"continentCode":"NA","continentName":"North America","countryName":"Montserrat","countryCode":"MS","mainCities":["Brades","Plymouth"],"rawOffsetInMinutes":-240,"abbreviation":"AST","rawFormat":"-04:00 Atlantic Time - Brades, Plymouth"},{"name":"America/Barbados","alternativeName":"Atlantic Time","group":["America/Barbados"],"continentCode":"NA","continentName":"North America","countryName":"Barbados","countryCode":"BB","mainCities":["Bridgetown"],"rawOffsetInMinutes":-240,"abbreviation":"AST","rawFormat":"-04:00 Atlantic Time - Bridgetown"},{"name":"America/Port_of_Spain","alternativeName":"Atlantic Time","group":["America/Port_of_Spain"],"continentCode":"NA","continentName":"North America","countryName":"Trinidad and Tobago","countryCode":"TT","mainCities":["Chaguanas","Mon Repos","San Fernando","Port of Spain"],"rawOffsetInMinutes":-240,"abbreviation":"AST","rawFormat":"-04:00 Atlantic Time - Chaguanas, Mon Repos, San Fernando, Port of Spain"},{"name":"America/Martinique","alternativeName":"Atlantic Time","group":["America/Martinique"],"continentCode":"NA","continentName":"North America","countryName":"Martinique","countryCode":"MQ","mainCities":["Fort-de-France","Le Lamentin","Le Robert","Sainte-Marie"],"rawOffsetInMinutes":-240,"abbreviation":"AST","rawFormat":"-04:00 Atlantic Time - Fort-de-France, Le Lamentin, Le Robert, Sainte-Marie"},{"name":"America/St_Lucia","alternativeName":"Atlantic Time","group":["America/St_Lucia"],"continentCode":"NA","continentName":"North America","countryName":"Saint Lucia","countryCode":"LC","mainCities":["Gros Islet","Castries"],"rawOffsetInMinutes":-240,"abbreviation":"AST","rawFormat":"-04:00 Atlantic Time - Gros Islet, Castries"},{"name":"America/St_Barthelemy","alternativeName":"Atlantic Time","group":["America/St_Barthelemy"],"continentCode":"NA","continentName":"North America","countryName":"Saint Barthelemy","countryCode":"BL","mainCities":["Gustavia"],"rawOffsetInMinutes":-240,"abbreviation":"AST","rawFormat":"-04:00 Atlantic Time - Gustavia"},{"name":"America/Halifax","alternativeName":"Atlantic Time","group":["America/Glace_Bay","America/Goose_Bay","America/Halifax","America/Moncton","Canada/Atlantic"],"continentCode":"NA","continentName":"North America","countryName":"Canada","countryCode":"CA","mainCities":["Halifax","Sydney","Dartmouth","Moncton"],"rawOffsetInMinutes":-240,"abbreviation":"AST","rawFormat":"-04:00 Atlantic Time - Halifax, Sydney, Dartmouth, Moncton"},{"name":"Atlantic/Bermuda","alternativeName":"Atlantic Time","group":["Atlantic/Bermuda"],"continentCode":"NA","continentName":"North America","countryName":"Bermuda","countryCode":"BM","mainCities":["Hamilton"],"rawOffsetInMinutes":-240,"abbreviation":"AST","rawFormat":"-04:00 Atlantic Time - Hamilton"},{"name":"America/St_Vincent","alternativeName":"Atlantic Time","group":["America/St_Vincent"],"continentCode":"NA","continentName":"North America","countryName":"Saint Vincent and the Grenadines","countryCode":"VC","mainCities":["Kingstown","Calliaqua"],"rawOffsetInMinutes":-240,"abbreviation":"AST","rawFormat":"-04:00 Atlantic Time - Kingstown, Calliaqua"},{"name":"America/Kralendijk","alternativeName":"Atlantic Time","group":["America/Kralendijk"],"continentCode":"NA","continentName":"North America","countryName":"Bonaire, Saint Eustatius and Saba ","countryCode":"BQ","mainCities":["Kralendijk"],"rawOffsetInMinutes":-240,"abbreviation":"AST","rawFormat":"-04:00 Atlantic Time - Kralendijk"},{"name":"America/Guadeloupe","alternativeName":"Atlantic Time","group":["America/Guadeloupe"],"continentCode":"NA","continentName":"North America","countryName":"Guadeloupe","countryCode":"GP","mainCities":["Les Abymes","Baie-Mahault","Le Gosier","Petit-Bourg"],"rawOffsetInMinutes":-240,"abbreviation":"AST","rawFormat":"-04:00 Atlantic Time - Les Abymes, Baie-Mahault, Le Gosier, Petit-Bourg"},{"name":"America/Marigot","alternativeName":"Atlantic Time","group":["America/Marigot"],"continentCode":"NA","continentName":"North America","countryName":"Saint Martin","countryCode":"MF","mainCities":["Marigot"],"rawOffsetInMinutes":-240,"abbreviation":"AST","rawFormat":"-04:00 Atlantic Time - Marigot"},{"name":"America/Aruba","alternativeName":"Atlantic Time","group":["America/Aruba"],"continentCode":"NA","continentName":"North America","countryName":"Aruba","countryCode":"AW","mainCities":["Oranjestad","Noord","Tanki Leendert","San Nicolas"],"rawOffsetInMinutes":-240,"abbreviation":"AST","rawFormat":"-04:00 Atlantic Time - Oranjestad, Noord, Tanki Leendert, San Nicolas"},{"name":"America/Lower_Princes","alternativeName":"Atlantic Time","group":["America/Lower_Princes"],"continentCode":"NA","continentName":"North America","countryName":"Sint Maarten","countryCode":"SX","mainCities":["Philipsburg"],"rawOffsetInMinutes":-240,"abbreviation":"AST","rawFormat":"-04:00 Atlantic Time - Philipsburg"},{"name":"America/Tortola","alternativeName":"Atlantic Time","group":["America/Tortola"],"continentCode":"NA","continentName":"North America","countryName":"British Virgin Islands","countryCode":"VG","mainCities":["Road Town"],"rawOffsetInMinutes":-240,"abbreviation":"AST","rawFormat":"-04:00 Atlantic Time - Road Town"},{"name":"America/Dominica","alternativeName":"Atlantic Time","group":["America/Dominica"],"continentCode":"NA","continentName":"North America","countryName":"Dominica","countryCode":"DM","mainCities":["Roseau"],"rawOffsetInMinutes":-240,"abbreviation":"AST","rawFormat":"-04:00 Atlantic Time - Roseau"},{"name":"America/St_Thomas","alternativeName":"Atlantic Time","group":["America/St_Thomas"],"continentCode":"NA","continentName":"North America","countryName":"U.S. Virgin Islands","countryCode":"VI","mainCities":["Saint Croix","Charlotte Amalie"],"rawOffsetInMinutes":-240,"abbreviation":"AST","rawFormat":"-04:00 Atlantic Time - Saint Croix, Charlotte Amalie"},{"name":"America/Grenada","alternativeName":"Atlantic Time","group":["America/Grenada"],"continentCode":"NA","continentName":"North America","countryName":"Grenada","countryCode":"GD","mainCities":["Saint George's"],"rawOffsetInMinutes":-240,"abbreviation":"AST","rawFormat":"-04:00 Atlantic Time - Saint George's"},{"name":"America/Antigua","alternativeName":"Atlantic Time","group":["America/Antigua"],"continentCode":"NA","continentName":"North America","countryName":"Antigua and Barbuda","countryCode":"AG","mainCities":["Saint John’s"],"rawOffsetInMinutes":-240,"abbreviation":"AST","rawFormat":"-04:00 Atlantic Time - Saint John’s"},{"name":"America/Puerto_Rico","alternativeName":"Atlantic Time","group":["America/Puerto_Rico","America/Virgin","America/Anguilla","America/Antigua","America/Aruba","America/Blanc-Sablon","America/Curacao","America/Dominica","America/Grenada","America/Guadeloupe","America/Kralendijk","America/Lower_Princes","America/Marigot","America/Montserrat","America/Port_of_Spain","America/St_Barthelemy","America/St_Kitts","America/St_Lucia","America/St_Thomas","America/St_Vincent","America/Tortola"],"continentCode":"NA","continentName":"North America","countryName":"Puerto Rico","countryCode":"PR","mainCities":["San Juan","Bayamón","Carolina","Ponce"],"rawOffsetInMinutes":-240,"abbreviation":"AST","rawFormat":"-04:00 Atlantic Time - San Juan, Bayamón, Carolina, Ponce"},{"name":"America/Santo_Domingo","alternativeName":"Atlantic Time","group":["America/Santo_Domingo"],"continentCode":"NA","continentName":"North America","countryName":"Dominican Republic","countryCode":"DO","mainCities":["Santo Domingo","Santiago de los Caballeros","Santo Domingo Oeste","Santo Domingo Este"],"rawOffsetInMinutes":-240,"abbreviation":"AST","rawFormat":"-04:00 Atlantic Time - Santo Domingo, Santiago de los Caballeros, Santo Domingo Oeste, Santo Domingo Este"},{"name":"America/Anguilla","alternativeName":"Atlantic Time","group":["America/Anguilla"],"continentCode":"NA","continentName":"North America","countryName":"Anguilla","countryCode":"AI","mainCities":["The Valley"],"rawOffsetInMinutes":-240,"abbreviation":"AST","rawFormat":"-04:00 Atlantic Time - The Valley"},{"name":"America/Thule","alternativeName":"Atlantic Time","group":["America/Thule"],"continentCode":"NA","continentName":"North America","countryName":"Greenland","countryCode":"GL","mainCities":["Thule"],"rawOffsetInMinutes":-240,"abbreviation":"AST","rawFormat":"-04:00 Atlantic Time - Thule"},{"name":"America/Curacao","alternativeName":"Atlantic Time","group":["America/Curacao"],"continentCode":"NA","continentName":"North America","countryName":"Curacao","countryCode":"CW","mainCities":["Willemstad","Bandariba"],"rawOffsetInMinutes":-240,"abbreviation":"AST","rawFormat":"-04:00 Atlantic Time - Willemstad, Bandariba"},{"name":"America/La_Paz","alternativeName":"Bolivia Time","group":["America/La_Paz"],"continentCode":"SA","continentName":"South America","countryName":"Bolivia","countryCode":"BO","mainCities":["La Paz","Santa Cruz de la Sierra","Cochabamba","Sucre"],"rawOffsetInMinutes":-240,"abbreviation":"BOT","rawFormat":"-04:00 Bolivia Time - La Paz, Santa Cruz de la Sierra, Cochabamba, Sucre"},{"name":"America/Santiago","alternativeName":"Chile Time","group":["America/Santiago","Chile/Continental"],"continentCode":"SA","continentName":"South America","countryName":"Chile","countryCode":"CL","mainCities":["Santiago","Puente Alto","Maipú","Antofagasta"],"rawOffsetInMinutes":-240,"abbreviation":"CLT","rawFormat":"-04:00 Chile Time - Santiago, Puente Alto, Maipú, Antofagasta"},{"name":"America/Guyana","alternativeName":"Guyana Time","group":["America/Guyana"],"continentCode":"SA","continentName":"South America","countryName":"Guyana","countryCode":"GY","mainCities":["Georgetown","Linden","New Amsterdam"],"rawOffsetInMinutes":-240,"abbreviation":"GYT","rawFormat":"-04:00 Guyana Time - Georgetown, Linden, New Amsterdam"},{"name":"America/Caracas","alternativeName":"Venezuela Time","group":["America/Caracas"],"continentCode":"SA","continentName":"South America","countryName":"Venezuela","countryCode":"VE","mainCities":["Caracas","Maracaibo","Valencia","Barquisimeto"],"rawOffsetInMinutes":-240,"abbreviation":"VET","rawFormat":"-04:00 Venezuela Time - Caracas, Maracaibo, Valencia, Barquisimeto"},{"name":"America/St_Johns","alternativeName":"Newfoundland Time","group":["America/St_Johns","Canada/Newfoundland"],"continentCode":"NA","continentName":"North America","countryName":"Canada","countryCode":"CA","mainCities":["St. John's","Mount Pearl","Paradise","Corner Brook"],"rawOffsetInMinutes":-210,"abbreviation":"NST","rawFormat":"-03:30 Newfoundland Time - St. John's, Mount Pearl, Paradise, Corner Brook"},{"name":"America/Argentina/Buenos_Aires","alternativeName":"Argentina Time","group":["America/Argentina/Buenos_Aires","America/Argentina/Catamarca","America/Argentina/Cordoba","America/Argentina/Jujuy","America/Argentina/La_Rioja","America/Argentina/Mendoza","America/Argentina/Rio_Gallegos","America/Argentina/Salta","America/Argentina/San_Juan","America/Argentina/San_Luis","America/Argentina/Tucuman","America/Argentina/Ushuaia","America/Buenos_Aires","America/Catamarca","America/Argentina/ComodRivadavia","America/Cordoba","America/Rosario","America/Jujuy","America/Mendoza"],"continentCode":"SA","continentName":"South America","countryName":"Argentina","countryCode":"AR","mainCities":["Buenos Aires","Córdoba","Rosario","Mar del Plata"],"rawOffsetInMinutes":-180,"abbreviation":"ART","rawFormat":"-03:00 Argentina Time - Buenos Aires, Córdoba, Rosario, Mar del Plata"},{"name":"America/Sao_Paulo","alternativeName":"Brasilia Time","group":["America/Araguaina","America/Bahia","America/Belem","America/Fortaleza","America/Maceio","America/Recife","America/Santarem","America/Sao_Paulo","Brazil/East"],"continentCode":"SA","continentName":"South America","countryName":"Brazil","countryCode":"BR","mainCities":["São Paulo","Rio de Janeiro","Belo Horizonte","Salvador"],"rawOffsetInMinutes":-180,"abbreviation":"BRT","rawFormat":"-03:00 Brasilia Time - São Paulo, Rio de Janeiro, Belo Horizonte, Salvador"},{"name":"Antarctica/Palmer","alternativeName":"Chile Time","group":["Antarctica/Palmer","Antarctica/Rothera"],"continentCode":"AN","continentName":"Antarctica","countryName":"Antarctica","countryCode":"AQ","mainCities":["Palmer","Rothera"],"rawOffsetInMinutes":-180,"abbreviation":"CLT","rawFormat":"-03:00 Chile Time - Palmer, Rothera"},{"name":"America/Punta_Arenas","alternativeName":"Chile Time","group":["America/Coyhaique","America/Punta_Arenas"],"continentCode":"SA","continentName":"South America","countryName":"Chile","countryCode":"CL","mainCities":["Punta Arenas","Coyhaique","Puerto Natales","Puerto Aysén"],"rawOffsetInMinutes":-180,"abbreviation":"CLT","rawFormat":"-03:00 Chile Time - Punta Arenas, Coyhaique, Puerto Natales, Puerto Aysén"},{"name":"Atlantic/Stanley","alternativeName":"Falkland Islands Time","group":["Atlantic/Stanley"],"continentCode":"SA","continentName":"South America","countryName":"Falkland Islands","countryCode":"FK","mainCities":["Stanley"],"rawOffsetInMinutes":-180,"abbreviation":"FKST","rawFormat":"-03:00 Falkland Islands Time - Stanley"},{"name":"America/Cayenne","alternativeName":"French Guiana Time","group":["America/Cayenne"],"continentCode":"SA","continentName":"South America","countryName":"French Guiana","countryCode":"GF","mainCities":["Cayenne","Matoury","Saint-Laurent-du-Maroni","Kourou"],"rawOffsetInMinutes":-180,"abbreviation":"GFT","rawFormat":"-03:00 French Guiana Time - Cayenne, Matoury, Saint-Laurent-du-Maroni, Kourou"},{"name":"America/Asuncion","alternativeName":"Paraguay Time","group":["America/Asuncion"],"continentCode":"SA","continentName":"South America","countryName":"Paraguay","countryCode":"PY","mainCities":["Asunción","Ciudad del Este","San Lorenzo","Capiatá"],"rawOffsetInMinutes":-180,"abbreviation":"PYT","rawFormat":"-03:00 Paraguay Time - Asunción, Ciudad del Este, San Lorenzo, Capiatá"},{"name":"America/Miquelon","alternativeName":"St. Pierre & Miquelon Time","group":["America/Miquelon"],"continentCode":"NA","continentName":"North America","countryName":"Saint Pierre and Miquelon","countryCode":"PM","mainCities":["Saint-Pierre"],"rawOffsetInMinutes":-180,"abbreviation":"PM","rawFormat":"-03:00 St. Pierre & Miquelon Time - Saint-Pierre"},{"name":"America/Paramaribo","alternativeName":"Suriname Time","group":["America/Paramaribo"],"continentCode":"SA","continentName":"South America","countryName":"Suriname","countryCode":"SR","mainCities":["Paramaribo","Blauwgrond","Rainville","Flora"],"rawOffsetInMinutes":-180,"abbreviation":"SRT","rawFormat":"-03:00 Suriname Time - Paramaribo, Blauwgrond, Rainville, Flora"},{"name":"America/Montevideo","alternativeName":"Uruguay Time","group":["America/Montevideo"],"continentCode":"SA","continentName":"South America","countryName":"Uruguay","countryCode":"UY","mainCities":["Montevideo","Salto","Paysandú","Las Piedras"],"rawOffsetInMinutes":-180,"abbreviation":"UYT","rawFormat":"-03:00 Uruguay Time - Montevideo, Salto, Paysandú, Las Piedras"},{"name":"America/Noronha","alternativeName":"Fernando de Noronha Time","group":["America/Noronha","Brazil/DeNoronha"],"continentCode":"SA","continentName":"South America","countryName":"Brazil","countryCode":"BR","mainCities":["Noronha"],"rawOffsetInMinutes":-120,"abbreviation":"FNT","rawFormat":"-02:00 Fernando de Noronha Time - Noronha"},{"name":"America/Nuuk","alternativeName":"Greenland Time","group":["America/Nuuk","America/Scoresbysund","America/Godthab"],"continentCode":"NA","continentName":"North America","countryName":"Greenland","countryCode":"GL","mainCities":["Nuuk","Scoresbysund"],"rawOffsetInMinutes":-120,"abbreviation":"GMT-2","rawFormat":"-02:00 Greenland Time - Nuuk, Scoresbysund"},{"name":"Atlantic/South_Georgia","alternativeName":"South Georgia Time","group":["Atlantic/South_Georgia"],"continentCode":"AN","continentName":"Antarctica","countryName":"South Georgia and the South Sandwich Islands","countryCode":"GS","mainCities":["Grytviken"],"rawOffsetInMinutes":-120,"abbreviation":"GST","rawFormat":"-02:00 South Georgia Time - Grytviken"},{"name":"Atlantic/Azores","alternativeName":"Azores Time","group":["Atlantic/Azores"],"continentCode":"EU","continentName":"Europe","countryName":"Portugal","countryCode":"PT","mainCities":["Ponta Delgada"],"rawOffsetInMinutes":-60,"abbreviation":"AZOT","rawFormat":"-01:00 Azores Time - Ponta Delgada"},{"name":"Atlantic/Cape_Verde","alternativeName":"Cape Verde Time","group":["Atlantic/Cape_Verde"],"continentCode":"AF","continentName":"Africa","countryName":"Cabo Verde","countryCode":"CV","mainCities":["Praia","Mindelo","Espargos","Assomada"],"rawOffsetInMinutes":-60,"abbreviation":"CVT","rawFormat":"-01:00 Cape Verde Time - Praia, Mindelo, Espargos, Assomada"},{"name":"Africa/Abidjan","alternativeName":"Greenwich Mean Time","group":["Africa/Abidjan","Iceland","Africa/Accra","Africa/Bamako","Africa/Banjul","Africa/Conakry","Africa/Dakar","Africa/Freetown","Africa/Lome","Africa/Nouakchott","Africa/Ouagadougou","Atlantic/Reykjavik","Atlantic/St_Helena","Africa/Timbuktu"],"continentCode":"AF","continentName":"Africa","countryName":"Ivory Coast","countryCode":"CI","mainCities":["Abidjan","Abobo","Bouaké","Korhogo"],"rawOffsetInMinutes":0,"abbreviation":"GMT","rawFormat":"+00:00 Greenwich Mean Time - Abidjan, Abobo, Bouaké, Korhogo"},{"name":"Africa/Bamako","alternativeName":"Greenwich Mean Time","group":["Africa/Bamako"],"continentCode":"AF","continentName":"Africa","countryName":"Mali","countryCode":"ML","mainCities":["Bamako","Sikasso","Koutiala","Ségou"],"rawOffsetInMinutes":0,"abbreviation":"GMT","rawFormat":"+00:00 Greenwich Mean Time - Bamako, Sikasso, Koutiala, Ségou"},{"name":"Africa/Bissau","alternativeName":"Greenwich Mean Time","group":["Africa/Bissau"],"continentCode":"AF","continentName":"Africa","countryName":"Guinea-Bissau","countryCode":"GW","mainCities":["Bissau","Gabú","Bafatá","Xitole"],"rawOffsetInMinutes":0,"abbreviation":"GMT","rawFormat":"+00:00 Greenwich Mean Time - Bissau, Gabú, Bafatá, Xitole"},{"name":"Africa/Conakry","alternativeName":"Greenwich Mean Time","group":["Africa/Conakry"],"continentCode":"AF","continentName":"Africa","countryName":"Guinea","countryCode":"GN","mainCities":["Conakry","Camayenne","Nzérékoré","Kankan"],"rawOffsetInMinutes":0,"abbreviation":"GMT","rawFormat":"+00:00 Greenwich Mean Time - Conakry, Camayenne, Nzérékoré, Kankan"},{"name":"Africa/Dakar","alternativeName":"Greenwich Mean Time","group":["Africa/Dakar"],"continentCode":"AF","continentName":"Africa","countryName":"Senegal","countryCode":"SN","mainCities":["Dakar","Touba","Pikine","Guédiawaye"],"rawOffsetInMinutes":0,"abbreviation":"GMT","rawFormat":"+00:00 Greenwich Mean Time - Dakar, Touba, Pikine, Guédiawaye"},{"name":"America/Danmarkshavn","alternativeName":"Greenwich Mean Time","group":["America/Danmarkshavn"],"continentCode":"NA","continentName":"North America","countryName":"Greenland","countryCode":"GL","mainCities":["Danmarkshavn"],"rawOffsetInMinutes":0,"abbreviation":"GMT","rawFormat":"+00:00 Greenwich Mean Time - Danmarkshavn"},{"name":"Europe/Isle_of_Man","alternativeName":"Greenwich Mean Time","group":["Europe/Isle_of_Man"],"continentCode":"EU","continentName":"Europe","countryName":"Isle of Man","countryCode":"IM","mainCities":["Douglas"],"rawOffsetInMinutes":0,"abbreviation":"GMT","rawFormat":"+00:00 Greenwich Mean Time - Douglas"},{"name":"Europe/Dublin","alternativeName":"Greenwich Mean Time","group":["Europe/Dublin","Eire"],"continentCode":"EU","continentName":"Europe","countryName":"Ireland","countryCode":"IE","mainCities":["Dublin","South Dublin","Cork","Limerick"],"rawOffsetInMinutes":0,"abbreviation":"GMT","rawFormat":"+00:00 Greenwich Mean Time - Dublin, South Dublin, Cork, Limerick"},{"name":"Africa/Freetown","alternativeName":"Greenwich Mean Time","group":["Africa/Freetown"],"continentCode":"AF","continentName":"Africa","countryName":"Sierra Leone","countryCode":"SL","mainCities":["Freetown","Bo","Kenema","Koidu"],"rawOffsetInMinutes":0,"abbreviation":"GMT","rawFormat":"+00:00 Greenwich Mean Time - Freetown, Bo, Kenema, Koidu"},{"name":"Atlantic/St_Helena","alternativeName":"Greenwich Mean Time","group":["Atlantic/St_Helena"],"continentCode":"AF","continentName":"Africa","countryName":"Saint Helena","countryCode":"SH","mainCities":["Jamestown"],"rawOffsetInMinutes":0,"abbreviation":"GMT","rawFormat":"+00:00 Greenwich Mean Time - Jamestown"},{"name":"Africa/Accra","alternativeName":"Greenwich Mean Time","group":["Africa/Accra"],"continentCode":"AF","continentName":"Africa","countryName":"Ghana","countryCode":"GH","mainCities":["Kumasi","Accra","Tamale","Takoradi"],"rawOffsetInMinutes":0,"abbreviation":"GMT","rawFormat":"+00:00 Greenwich Mean Time - Kumasi, Accra, Tamale, Takoradi"},{"name":"Africa/Lome","alternativeName":"Greenwich Mean Time","group":["Africa/Lome"],"continentCode":"AF","continentName":"Africa","countryName":"Togo","countryCode":"TG","mainCities":["Lomé","Sokodé","Kara","Atakpamé"],"rawOffsetInMinutes":0,"abbreviation":"GMT","rawFormat":"+00:00 Greenwich Mean Time - Lomé, Sokodé, Kara, Atakpamé"},{"name":"Europe/London","alternativeName":"Greenwich Mean Time","group":["Europe/London","GB","GB-Eire","Europe/Guernsey","Europe/Isle_of_Man","Europe/Jersey","Europe/Belfast"],"continentCode":"EU","continentName":"Europe","countryName":"United Kingdom","countryCode":"GB","mainCities":["London","Birmingham","Glasgow","Manchester"],"rawOffsetInMinutes":0,"abbreviation":"GMT","rawFormat":"+00:00 Greenwich Mean Time - London, Birmingham, Glasgow, Manchester"},{"name":"Africa/Monrovia","alternativeName":"Greenwich Mean Time","group":["Africa/Monrovia"],"continentCode":"AF","continentName":"Africa","countryName":"Liberia","countryCode":"LR","mainCities":["Monrovia","Gbarnga","Buchanan","Ganta"],"rawOffsetInMinutes":0,"abbreviation":"GMT","rawFormat":"+00:00 Greenwich Mean Time - Monrovia, Gbarnga, Buchanan, Ganta"},{"name":"Africa/Nouakchott","alternativeName":"Greenwich Mean Time","group":["Africa/Nouakchott"],"continentCode":"AF","continentName":"Africa","countryName":"Mauritania","countryCode":"MR","mainCities":["Nouakchott","Nouadhibou","Kiffa","Dar Naim"],"rawOffsetInMinutes":0,"abbreviation":"GMT","rawFormat":"+00:00 Greenwich Mean Time - Nouakchott, Nouadhibou, Kiffa, Dar Naim"},{"name":"Africa/Ouagadougou","alternativeName":"Greenwich Mean Time","group":["Africa/Ouagadougou"],"continentCode":"AF","continentName":"Africa","countryName":"Burkina Faso","countryCode":"BF","mainCities":["Ouagadougou","Bobo-Dioulasso","Koudougou","Saaba"],"rawOffsetInMinutes":0,"abbreviation":"GMT","rawFormat":"+00:00 Greenwich Mean Time - Ouagadougou, Bobo-Dioulasso, Koudougou, Saaba"},{"name":"Atlantic/Reykjavik","alternativeName":"Greenwich Mean Time","group":["Atlantic/Reykjavik"],"continentCode":"EU","continentName":"Europe","countryName":"Iceland","countryCode":"IS","mainCities":["Reykjavík","Kópavogur","Hafnarfjörður","Reykjanesbær"],"rawOffsetInMinutes":0,"abbreviation":"GMT","rawFormat":"+00:00 Greenwich Mean Time - Reykjavík, Kópavogur, Hafnarfjörður, Reykjanesbær"},{"name":"Europe/Jersey","alternativeName":"Greenwich Mean Time","group":["Europe/Jersey"],"continentCode":"EU","continentName":"Europe","countryName":"Jersey","countryCode":"JE","mainCities":["Saint Helier"],"rawOffsetInMinutes":0,"abbreviation":"GMT","rawFormat":"+00:00 Greenwich Mean Time - Saint Helier"},{"name":"Europe/Guernsey","alternativeName":"Greenwich Mean Time","group":["Europe/Guernsey"],"continentCode":"EU","continentName":"Europe","countryName":"Guernsey","countryCode":"GG","mainCities":["Saint Peter Port"],"rawOffsetInMinutes":0,"abbreviation":"GMT","rawFormat":"+00:00 Greenwich Mean Time - Saint Peter Port"},{"name":"Africa/Banjul","alternativeName":"Greenwich Mean Time","group":["Africa/Banjul"],"continentCode":"AF","continentName":"Africa","countryName":"Gambia","countryCode":"GM","mainCities":["Serekunda","Brikama","Bununka Kunda","Sukuta"],"rawOffsetInMinutes":0,"abbreviation":"GMT","rawFormat":"+00:00 Greenwich Mean Time - Serekunda, Brikama, Bununka Kunda, Sukuta"},{"name":"Africa/Sao_Tome","alternativeName":"Greenwich Mean Time","group":["Africa/Sao_Tome"],"continentCode":"AF","continentName":"Africa","countryName":"Sao Tome and Principe","countryCode":"ST","mainCities":["São Tomé"],"rawOffsetInMinutes":0,"abbreviation":"GMT","rawFormat":"+00:00 Greenwich Mean Time - São Tomé"},{"name":"Antarctica/Troll","alternativeName":"Greenwich Mean Time","group":["Antarctica/Troll"],"continentCode":"AN","continentName":"Antarctica","countryName":"Antarctica","countryCode":"AQ","mainCities":["Troll"],"rawOffsetInMinutes":0,"abbreviation":"GMT","rawFormat":"+00:00 Greenwich Mean Time - Troll"},{"name":"Africa/Casablanca","alternativeName":"Western European Time","group":["Africa/Casablanca"],"continentCode":"AF","continentName":"Africa","countryName":"Morocco","countryCode":"MA","mainCities":["Casablanca","Rabat","Fes","Tangier"],"rawOffsetInMinutes":0,"abbreviation":"WET","rawFormat":"+00:00 Western European Time - Casablanca, Rabat, Fes, Tangier"},{"name":"Africa/El_Aaiun","alternativeName":"Western European Time","group":["Africa/El_Aaiun"],"continentCode":"AF","continentName":"Africa","countryName":"Western Sahara","countryCode":"EH","mainCities":["Laayoune","Dakhla","Boujdour"],"rawOffsetInMinutes":0,"abbreviation":"WET","rawFormat":"+00:00 Western European Time - Laayoune, Dakhla, Boujdour"},{"name":"Atlantic/Canary","alternativeName":"Western European Time","group":["Atlantic/Canary"],"continentCode":"EU","continentName":"Europe","countryName":"Spain","countryCode":"ES","mainCities":["Las Palmas de Gran Canaria","Santa Cruz de Tenerife","La Laguna","Telde"],"rawOffsetInMinutes":0,"abbreviation":"WET","rawFormat":"+00:00 Western European Time - Las Palmas de Gran Canaria, Santa Cruz de Tenerife, La Laguna, Telde"},{"name":"Europe/Lisbon","alternativeName":"Western European Time","group":["Atlantic/Madeira","Europe/Lisbon","Portugal","WET"],"continentCode":"EU","continentName":"Europe","countryName":"Portugal","countryCode":"PT","mainCities":["Lisbon","Porto","Amadora","Braga"],"rawOffsetInMinutes":0,"abbreviation":"WET","rawFormat":"+00:00 Western European Time - Lisbon, Porto, Amadora, Braga"},{"name":"Atlantic/Faroe","alternativeName":"Western European Time","group":["Atlantic/Faroe","Atlantic/Faeroe"],"continentCode":"EU","continentName":"Europe","countryName":"Faroe Islands","countryCode":"FO","mainCities":["Tórshavn"],"rawOffsetInMinutes":0,"abbreviation":"WET","rawFormat":"+00:00 Western European Time - Tórshavn"},{"name":"Africa/Windhoek","alternativeName":"Central Africa Time","group":["Africa/Windhoek"],"continentCode":"AF","continentName":"Africa","countryName":"Namibia","countryCode":"NA","mainCities":["Windhoek","Rundu","Walvis Bay","Swakopmund"],"rawOffsetInMinutes":60,"abbreviation":"CAT","rawFormat":"+01:00 Central Africa Time - Windhoek, Rundu, Walvis Bay, Swakopmund"},{"name":"Africa/Algiers","alternativeName":"Central European Time","group":["Africa/Algiers"],"continentCode":"AF","continentName":"Africa","countryName":"Algeria","countryCode":"DZ","mainCities":["Algiers","Oran","Constantine","Annaba"],"rawOffsetInMinutes":60,"abbreviation":"CET","rawFormat":"+01:00 Central European Time - Algiers, Oran, Constantine, Annaba"},{"name":"Europe/Andorra","alternativeName":"Central European Time","group":["Europe/Andorra"],"continentCode":"EU","continentName":"Europe","countryName":"Andorra","countryCode":"AD","mainCities":["Andorra la Vella","les Escaldes"],"rawOffsetInMinutes":60,"abbreviation":"CET","rawFormat":"+01:00 Central European Time - Andorra la Vella, les Escaldes"},{"name":"Europe/Belgrade","alternativeName":"Central European Time","group":["Europe/Belgrade","Europe/Ljubljana","Europe/Podgorica","Europe/Sarajevo","Europe/Skopje","Europe/Zagreb"],"continentCode":"EU","continentName":"Europe","countryName":"Serbia","countryCode":"RS","mainCities":["Belgrade","Niš","Novi Sad","Zemun"],"rawOffsetInMinutes":60,"abbreviation":"CET","rawFormat":"+01:00 Central European Time - Belgrade, Niš, Novi Sad, Zemun"},{"name":"Europe/Berlin","alternativeName":"Central European Time","group":["Europe/Berlin","Europe/Busingen","Arctic/Longyearbyen","Europe/Copenhagen","Europe/Oslo","Europe/Stockholm","Atlantic/Jan_Mayen"],"continentCode":"EU","continentName":"Europe","countryName":"Germany","countryCode":"DE","mainCities":["Berlin","Hamburg","Munich","Köln"],"rawOffsetInMinutes":60,"abbreviation":"CET","rawFormat":"+01:00 Central European Time - Berlin, Hamburg, Munich, Köln"},{"name":"Europe/Bratislava","alternativeName":"Central European Time","group":["Europe/Bratislava"],"continentCode":"EU","continentName":"Europe","countryName":"Slovakia","countryCode":"SK","mainCities":["Bratislava","Košice","Petržalka","Nitra"],"rawOffsetInMinutes":60,"abbreviation":"CET","rawFormat":"+01:00 Central European Time - Bratislava, Košice, Petržalka, Nitra"},{"name":"Europe/Brussels","alternativeName":"Central European Time","group":["Europe/Brussels","CET","MET","Europe/Amsterdam","Europe/Luxembourg"],"continentCode":"EU","continentName":"Europe","countryName":"Belgium","countryCode":"BE","mainCities":["Brussels","Antwerpen","Gent","Charleroi"],"rawOffsetInMinutes":60,"abbreviation":"CET","rawFormat":"+01:00 Central European Time - Brussels, Antwerpen, Gent, Charleroi"},{"name":"Europe/Budapest","alternativeName":"Central European Time","group":["Europe/Budapest"],"continentCode":"EU","continentName":"Europe","countryName":"Hungary","countryCode":"HU","mainCities":["Budapest","Debrecen","Szeged","Miskolc"],"rawOffsetInMinutes":60,"abbreviation":"CET","rawFormat":"+01:00 Central European Time - Budapest, Debrecen, Szeged, Miskolc"},{"name":"Europe/Copenhagen","alternativeName":"Central European Time","group":["Europe/Copenhagen"],"continentCode":"EU","continentName":"Europe","countryName":"Denmark","countryCode":"DK","mainCities":["Copenhagen","Århus","Odense","Aalborg"],"rawOffsetInMinutes":60,"abbreviation":"CET","rawFormat":"+01:00 Central European Time - Copenhagen, Århus, Odense, Aalborg"},{"name":"Europe/Gibraltar","alternativeName":"Central European Time","group":["Europe/Gibraltar"],"continentCode":"EU","continentName":"Europe","countryName":"Gibraltar","countryCode":"GI","mainCities":["Gibraltar"],"rawOffsetInMinutes":60,"abbreviation":"CET","rawFormat":"+01:00 Central European Time - Gibraltar"},{"name":"Europe/Ljubljana","alternativeName":"Central European Time","group":["Europe/Ljubljana"],"continentCode":"EU","continentName":"Europe","countryName":"Slovenia","countryCode":"SI","mainCities":["Ljubljana","Maribor","Celje","Kranj"],"rawOffsetInMinutes":60,"abbreviation":"CET","rawFormat":"+01:00 Central European Time - Ljubljana, Maribor, Celje, Kranj"},{"name":"Arctic/Longyearbyen","alternativeName":"Central European Time","group":["Arctic/Longyearbyen"],"continentCode":"EU","continentName":"Europe","countryName":"Svalbard and Jan Mayen","countryCode":"SJ","mainCities":["Longyearbyen"],"rawOffsetInMinutes":60,"abbreviation":"CET","rawFormat":"+01:00 Central European Time - Longyearbyen"},{"name":"Europe/Luxembourg","alternativeName":"Central European Time","group":["Europe/Luxembourg"],"continentCode":"EU","continentName":"Europe","countryName":"Luxembourg","countryCode":"LU","mainCities":["Luxembourg","Esch-sur-Alzette","Dudelange"],"rawOffsetInMinutes":60,"abbreviation":"CET","rawFormat":"+01:00 Central European Time - Luxembourg, Esch-sur-Alzette, Dudelange"},{"name":"Europe/Madrid","alternativeName":"Central European Time","group":["Africa/Ceuta","Europe/Madrid"],"continentCode":"EU","continentName":"Europe","countryName":"Spain","countryCode":"ES","mainCities":["Madrid","Barcelona","Valencia","Zaragoza"],"rawOffsetInMinutes":60,"abbreviation":"CET","rawFormat":"+01:00 Central European Time - Madrid, Barcelona, Valencia, Zaragoza"},{"name":"Europe/Monaco","alternativeName":"Central European Time","group":["Europe/Monaco"],"continentCode":"EU","continentName":"Europe","countryName":"Monaco","countryCode":"MC","mainCities":["Monaco","Monte-Carlo"],"rawOffsetInMinutes":60,"abbreviation":"CET","rawFormat":"+01:00 Central European Time - Monaco, Monte-Carlo"},{"name":"Europe/Oslo","alternativeName":"Central European Time","group":["Europe/Oslo"],"continentCode":"EU","continentName":"Europe","countryName":"Norway","countryCode":"NO","mainCities":["Oslo","Bergen","Trondheim","Stavanger"],"rawOffsetInMinutes":60,"abbreviation":"CET","rawFormat":"+01:00 Central European Time - Oslo, Bergen, Trondheim, Stavanger"},{"name":"Europe/Paris","alternativeName":"Central European Time","group":["Europe/Paris","Europe/Monaco"],"continentCode":"EU","continentName":"Europe","countryName":"France","countryCode":"FR","mainCities":["Paris","Marseille","Lyon","Toulouse"],"rawOffsetInMinutes":60,"abbreviation":"CET","rawFormat":"+01:00 Central European Time - Paris, Marseille, Lyon, Toulouse"},{"name":"Europe/Podgorica","alternativeName":"Central European Time","group":["Europe/Podgorica"],"continentCode":"EU","continentName":"Europe","countryName":"Montenegro","countryCode":"ME","mainCities":["Podgorica","Nikšić","Herceg Novi","Pljevlja"],"rawOffsetInMinutes":60,"abbreviation":"CET","rawFormat":"+01:00 Central European Time - Podgorica, Nikšić, Herceg Novi, Pljevlja"},{"name":"Europe/Prague","alternativeName":"Central European Time","group":["Europe/Prague","Europe/Bratislava"],"continentCode":"EU","continentName":"Europe","countryName":"Czechia","countryCode":"CZ","mainCities":["Prague","Brno","Ostrava","Pilsen"],"rawOffsetInMinutes":60,"abbreviation":"CET","rawFormat":"+01:00 Central European Time - Prague, Brno, Ostrava, Pilsen"},{"name":"Europe/Rome","alternativeName":"Central European Time","group":["Europe/Rome","Europe/San_Marino","Europe/Vatican"],"continentCode":"EU","continentName":"Europe","countryName":"Italy","countryCode":"IT","mainCities":["Rome","Milan","Naples","Turin"],"rawOffsetInMinutes":60,"abbreviation":"CET","rawFormat":"+01:00 Central European Time - Rome, Milan, Naples, Turin"},{"name":"Europe/Amsterdam","alternativeName":"Central European Time","group":["Europe/Amsterdam"],"continentCode":"EU","continentName":"Europe","countryName":"The Netherlands","countryCode":"NL","mainCities":["Rotterdam","Amsterdam","The Hague","Utrecht"],"rawOffsetInMinutes":60,"abbreviation":"CET","rawFormat":"+01:00 Central European Time - Rotterdam, Amsterdam, The Hague, Utrecht"},{"name":"Europe/San_Marino","alternativeName":"Central European Time","group":["Europe/San_Marino"],"continentCode":"EU","continentName":"Europe","countryName":"San Marino","countryCode":"SM","mainCities":["San Marino"],"rawOffsetInMinutes":60,"abbreviation":"CET","rawFormat":"+01:00 Central European Time - San Marino"},{"name":"Europe/Malta","alternativeName":"Central European Time","group":["Europe/Malta"],"continentCode":"EU","continentName":"Europe","countryName":"Malta","countryCode":"MT","mainCities":["San Pawl il-Baħar","Birkirkara","Mosta","Sliema"],"rawOffsetInMinutes":60,"abbreviation":"CET","rawFormat":"+01:00 Central European Time - San Pawl il-Baħar, Birkirkara, Mosta, Sliema"},{"name":"Europe/Sarajevo","alternativeName":"Central European Time","group":["Europe/Sarajevo"],"continentCode":"EU","continentName":"Europe","countryName":"Bosnia and Herzegovina","countryCode":"BA","mainCities":["Sarajevo","Banja Luka","Zenica","Tuzla"],"rawOffsetInMinutes":60,"abbreviation":"CET","rawFormat":"+01:00 Central European Time - Sarajevo, Banja Luka, Zenica, Tuzla"},{"name":"Europe/Skopje","alternativeName":"Central European Time","group":["Europe/Skopje"],"continentCode":"EU","continentName":"Europe","countryName":"North Macedonia","countryCode":"MK","mainCities":["Skopje","Kumanovo","Prilep","Bitola"],"rawOffsetInMinutes":60,"abbreviation":"CET","rawFormat":"+01:00 Central European Time - Skopje, Kumanovo, Prilep, Bitola"},{"name":"Europe/Stockholm","alternativeName":"Central European Time","group":["Europe/Stockholm"],"continentCode":"EU","continentName":"Europe","countryName":"Sweden","countryCode":"SE","mainCities":["Stockholm","Göteborg","Malmö","Uppsala"],"rawOffsetInMinutes":60,"abbreviation":"CET","rawFormat":"+01:00 Central European Time - Stockholm, Göteborg, Malmö, Uppsala"},{"name":"Europe/Tirane","alternativeName":"Central European Time","group":["Europe/Tirane"],"continentCode":"EU","continentName":"Europe","countryName":"Albania","countryCode":"AL","mainCities":["Tirana","Durrës","Vlorë","Elbasan"],"rawOffsetInMinutes":60,"abbreviation":"CET","rawFormat":"+01:00 Central European Time - Tirana, Durrës, Vlorë, Elbasan"},{"name":"Africa/Tunis","alternativeName":"Central European Time","group":["Africa/Tunis"],"continentCode":"AF","continentName":"Africa","countryName":"Tunisia","countryCode":"TN","mainCities":["Tunis","Sfax","Sousse","Kairouan"],"rawOffsetInMinutes":60,"abbreviation":"CET","rawFormat":"+01:00 Central European Time - Tunis, Sfax, Sousse, Kairouan"},{"name":"Europe/Vaduz","alternativeName":"Central European Time","group":["Europe/Vaduz"],"continentCode":"EU","continentName":"Europe","countryName":"Liechtenstein","countryCode":"LI","mainCities":["Vaduz"],"rawOffsetInMinutes":60,"abbreviation":"CET","rawFormat":"+01:00 Central European Time - Vaduz"},{"name":"Europe/Vatican","alternativeName":"Central European Time","group":["Europe/Vatican"],"continentCode":"EU","continentName":"Europe","countryName":"Vatican","countryCode":"VA","mainCities":["Vatican City"],"rawOffsetInMinutes":60,"abbreviation":"CET","rawFormat":"+01:00 Central European Time - Vatican City"},{"name":"Europe/Vienna","alternativeName":"Central European Time","group":["Europe/Vienna"],"continentCode":"EU","continentName":"Europe","countryName":"Austria","countryCode":"AT","mainCities":["Vienna","Graz","Linz","Favoriten"],"rawOffsetInMinutes":60,"abbreviation":"CET","rawFormat":"+01:00 Central European Time - Vienna, Graz, Linz, Favoriten"},{"name":"Europe/Warsaw","alternativeName":"Central European Time","group":["Europe/Warsaw","Poland"],"continentCode":"EU","continentName":"Europe","countryName":"Poland","countryCode":"PL","mainCities":["Warsaw","Łódź","Kraków","Wrocław"],"rawOffsetInMinutes":60,"abbreviation":"CET","rawFormat":"+01:00 Central European Time - Warsaw, Łódź, Kraków, Wrocław"},{"name":"Europe/Zagreb","alternativeName":"Central European Time","group":["Europe/Zagreb"],"continentCode":"EU","continentName":"Europe","countryName":"Croatia","countryCode":"HR","mainCities":["Zagreb","Split","Rijeka","Osijek"],"rawOffsetInMinutes":60,"abbreviation":"CET","rawFormat":"+01:00 Central European Time - Zagreb, Split, Rijeka, Osijek"},{"name":"Europe/Zurich","alternativeName":"Central European Time","group":["Europe/Zurich","Europe/Busingen","Europe/Vaduz"],"continentCode":"EU","continentName":"Europe","countryName":"Switzerland","countryCode":"CH","mainCities":["Zürich","Genève","Basel","Lausanne"],"rawOffsetInMinutes":60,"abbreviation":"CET","rawFormat":"+01:00 Central European Time - Zürich, Genève, Basel, Lausanne"},{"name":"Africa/Bangui","alternativeName":"West Africa Time","group":["Africa/Bangui"],"continentCode":"AF","continentName":"Africa","countryName":"Central African Republic","countryCode":"CF","mainCities":["Bangui","Bimbo","Bégoua","Carnot"],"rawOffsetInMinutes":60,"abbreviation":"WAT","rawFormat":"+01:00 West Africa Time - Bangui, Bimbo, Bégoua, Carnot"},{"name":"Africa/Malabo","alternativeName":"West Africa Time","group":["Africa/Malabo"],"continentCode":"AF","continentName":"Africa","countryName":"Equatorial Guinea","countryCode":"GQ","mainCities":["Bata","Malabo","Ebebiyin"],"rawOffsetInMinutes":60,"abbreviation":"WAT","rawFormat":"+01:00 West Africa Time - Bata, Malabo, Ebebiyin"},{"name":"Africa/Brazzaville","alternativeName":"West Africa Time","group":["Africa/Brazzaville"],"continentCode":"AF","continentName":"Africa","countryName":"Republic of the Congo","countryCode":"CG","mainCities":["Brazzaville","Pointe-Noire","Dolisie","Nkayi"],"rawOffsetInMinutes":60,"abbreviation":"WAT","rawFormat":"+01:00 West Africa Time - Brazzaville, Pointe-Noire, Dolisie, Nkayi"},{"name":"Africa/Porto-Novo","alternativeName":"West Africa Time","group":["Africa/Porto-Novo"],"continentCode":"AF","continentName":"Africa","countryName":"Benin","countryCode":"BJ","mainCities":["Cotonou","Abomey-Calavi","Porto-Novo","Parakou"],"rawOffsetInMinutes":60,"abbreviation":"WAT","rawFormat":"+01:00 West Africa Time - Cotonou, Abomey-Calavi, Porto-Novo, Parakou"},{"name":"Africa/Douala","alternativeName":"West Africa Time","group":["Africa/Douala"],"continentCode":"AF","continentName":"Africa","countryName":"Cameroon","countryCode":"CM","mainCities":["Douala","Yaoundé","Bamenda","Bafoussam"],"rawOffsetInMinutes":60,"abbreviation":"WAT","rawFormat":"+01:00 West Africa Time - Douala, Yaoundé, Bamenda, Bafoussam"},{"name":"Africa/Kinshasa","alternativeName":"West Africa Time","group":["Africa/Kinshasa"],"continentCode":"AF","continentName":"Africa","countryName":"Democratic Republic of the Congo","countryCode":"CD","mainCities":["Kinshasa","Kikwit","Masina","Mbandaka"],"rawOffsetInMinutes":60,"abbreviation":"WAT","rawFormat":"+01:00 West Africa Time - Kinshasa, Kikwit, Masina, Mbandaka"},{"name":"Africa/Lagos","alternativeName":"West Africa Time","group":["Africa/Lagos","Africa/Bangui","Africa/Brazzaville","Africa/Douala","Africa/Kinshasa","Africa/Libreville","Africa/Luanda","Africa/Malabo","Africa/Niamey","Africa/Porto-Novo"],"continentCode":"AF","continentName":"Africa","countryName":"Nigeria","countryCode":"NG","mainCities":["Lagos","Kano","Ibadan","Abuja"],"rawOffsetInMinutes":60,"abbreviation":"WAT","rawFormat":"+01:00 West Africa Time - Lagos, Kano, Ibadan, Abuja"},{"name":"Africa/Libreville","alternativeName":"West Africa Time","group":["Africa/Libreville"],"continentCode":"AF","continentName":"Africa","countryName":"Gabon","countryCode":"GA","mainCities":["Libreville","Port-Gentil","Franceville","Owendo"],"rawOffsetInMinutes":60,"abbreviation":"WAT","rawFormat":"+01:00 West Africa Time - Libreville, Port-Gentil, Franceville, Owendo"},{"name":"Africa/Luanda","alternativeName":"West Africa Time","group":["Africa/Luanda"],"continentCode":"AF","continentName":"Africa","countryName":"Angola","countryCode":"AO","mainCities":["Luanda","Lubango","Huambo","Benguela"],"rawOffsetInMinutes":60,"abbreviation":"WAT","rawFormat":"+01:00 West Africa Time - Luanda, Lubango, Huambo, Benguela"},{"name":"Africa/Ndjamena","alternativeName":"West Africa Time","group":["Africa/Ndjamena"],"continentCode":"AF","continentName":"Africa","countryName":"Chad","countryCode":"TD","mainCities":["N'Djamena","Moundou","Abéché","Sarh"],"rawOffsetInMinutes":60,"abbreviation":"WAT","rawFormat":"+01:00 West Africa Time - N'Djamena, Moundou, Abéché, Sarh"},{"name":"Africa/Niamey","alternativeName":"West Africa Time","group":["Africa/Niamey"],"continentCode":"AF","continentName":"Africa","countryName":"Niger","countryCode":"NE","mainCities":["Niamey","Maradi","Zinder","Tahoua"],"rawOffsetInMinutes":60,"abbreviation":"WAT","rawFormat":"+01:00 West Africa Time - Niamey, Maradi, Zinder, Tahoua"},{"name":"Africa/Bujumbura","alternativeName":"Central Africa Time","group":["Africa/Bujumbura"],"continentCode":"AF","continentName":"Africa","countryName":"Burundi","countryCode":"BI","mainCities":["Bujumbura","Gitega","Ngozi","Rumonge"],"rawOffsetInMinutes":120,"abbreviation":"CAT","rawFormat":"+02:00 Central Africa Time - Bujumbura, Gitega, Ngozi, Rumonge"},{"name":"Africa/Gaborone","alternativeName":"Central Africa Time","group":["Africa/Gaborone"],"continentCode":"AF","continentName":"Africa","countryName":"Botswana","countryCode":"BW","mainCities":["Gaborone","Francistown","Mogoditshane","Maun"],"rawOffsetInMinutes":120,"abbreviation":"CAT","rawFormat":"+02:00 Central Africa Time - Gaborone, Francistown, Mogoditshane, Maun"},{"name":"Africa/Harare","alternativeName":"Central Africa Time","group":["Africa/Harare"],"continentCode":"AF","continentName":"Africa","countryName":"Zimbabwe","countryCode":"ZW","mainCities":["Harare","Bulawayo","Chitungwiza","Mutare"],"rawOffsetInMinutes":120,"abbreviation":"CAT","rawFormat":"+02:00 Central Africa Time - Harare, Bulawayo, Chitungwiza, Mutare"},{"name":"Africa/Juba","alternativeName":"Central Africa Time","group":["Africa/Juba"],"continentCode":"AF","continentName":"Africa","countryName":"South Sudan","countryCode":"SS","mainCities":["Juba","Winejok","Yei","Malakal"],"rawOffsetInMinutes":120,"abbreviation":"CAT","rawFormat":"+02:00 Central Africa Time - Juba, Winejok, Yei, Malakal"},{"name":"Africa/Khartoum","alternativeName":"Central Africa Time","group":["Africa/Khartoum"],"continentCode":"AF","continentName":"Africa","countryName":"Sudan","countryCode":"SD","mainCities":["Khartoum","Omdurman","Khartoum North","Nyala"],"rawOffsetInMinutes":120,"abbreviation":"CAT","rawFormat":"+02:00 Central Africa Time - Khartoum, Omdurman, Khartoum North, Nyala"},{"name":"Africa/Kigali","alternativeName":"Central Africa Time","group":["Africa/Kigali"],"continentCode":"AF","continentName":"Africa","countryName":"Rwanda","countryCode":"RW","mainCities":["Kigali","Gisenyi","Musanze","Nyagatare"],"rawOffsetInMinutes":120,"abbreviation":"CAT","rawFormat":"+02:00 Central Africa Time - Kigali, Gisenyi, Musanze, Nyagatare"},{"name":"Africa/Blantyre","alternativeName":"Central Africa Time","group":["Africa/Blantyre"],"continentCode":"AF","continentName":"Africa","countryName":"Malawi","countryCode":"MW","mainCities":["Lilongwe","Blantyre","Mzuzu","Zomba"],"rawOffsetInMinutes":120,"abbreviation":"CAT","rawFormat":"+02:00 Central Africa Time - Lilongwe, Blantyre, Mzuzu, Zomba"},{"name":"Africa/Lubumbashi","alternativeName":"Central Africa Time","group":["Africa/Lubumbashi"],"continentCode":"AF","continentName":"Africa","countryName":"Democratic Republic of the Congo","countryCode":"CD","mainCities":["Lubumbashi","Mbuji-Mayi","Kananga","Kisangani"],"rawOffsetInMinutes":120,"abbreviation":"CAT","rawFormat":"+02:00 Central Africa Time - Lubumbashi, Mbuji-Mayi, Kananga, Kisangani"},{"name":"Africa/Lusaka","alternativeName":"Central Africa Time","group":["Africa/Lusaka"],"continentCode":"AF","continentName":"Africa","countryName":"Zambia","countryCode":"ZM","mainCities":["Lusaka","Kitwe","Ndola","Chipata"],"rawOffsetInMinutes":120,"abbreviation":"CAT","rawFormat":"+02:00 Central Africa Time - Lusaka, Kitwe, Ndola, Chipata"},{"name":"Africa/Maputo","alternativeName":"Central Africa Time","group":["Africa/Maputo","Africa/Blantyre","Africa/Bujumbura","Africa/Gaborone","Africa/Harare","Africa/Kigali","Africa/Lubumbashi","Africa/Lusaka"],"continentCode":"AF","continentName":"Africa","countryName":"Mozambique","countryCode":"MZ","mainCities":["Maputo","Matola","Nampula","Beira"],"rawOffsetInMinutes":120,"abbreviation":"CAT","rawFormat":"+02:00 Central Africa Time - Maputo, Matola, Nampula, Beira"},{"name":"Europe/Athens","alternativeName":"Eastern European Time","group":["Europe/Athens","EET"],"continentCode":"EU","continentName":"Europe","countryName":"Greece","countryCode":"GR","mainCities":["Athens","Thessaloníki","Pátra","Piraeus"],"rawOffsetInMinutes":120,"abbreviation":"EET","rawFormat":"+02:00 Eastern European Time - Athens, Thessaloníki, Pátra, Piraeus"},{"name":"Asia/Beirut","alternativeName":"Eastern European Time","group":["Asia/Beirut"],"continentCode":"AS","continentName":"Asia","countryName":"Lebanon","countryCode":"LB","mainCities":["Beirut","Ra’s Bayrūt","Tripoli","Sidon"],"rawOffsetInMinutes":120,"abbreviation":"EET","rawFormat":"+02:00 Eastern European Time - Beirut, Ra’s Bayrūt, Tripoli, Sidon"},{"name":"Europe/Bucharest","alternativeName":"Eastern European Time","group":["Europe/Bucharest"],"continentCode":"EU","continentName":"Europe","countryName":"Romania","countryCode":"RO","mainCities":["Bucharest","Sector 3","Iaşi","Sector 6"],"rawOffsetInMinutes":120,"abbreviation":"EET","rawFormat":"+02:00 Eastern European Time - Bucharest, Sector 3, Iaşi, Sector 6"},{"name":"Africa/Cairo","alternativeName":"Eastern European Time","group":["Africa/Cairo","Egypt"],"continentCode":"AF","continentName":"Africa","countryName":"Egypt","countryCode":"EG","mainCities":["Cairo","Alexandria","Giza","Shubrā al Khaymah"],"rawOffsetInMinutes":120,"abbreviation":"EET","rawFormat":"+02:00 Eastern European Time - Cairo, Alexandria, Giza, Shubrā al Khaymah"},{"name":"Europe/Chisinau","alternativeName":"Eastern European Time","group":["Europe/Chisinau","Europe/Tiraspol"],"continentCode":"EU","continentName":"Europe","countryName":"Moldova","countryCode":"MD","mainCities":["Chisinau","Tiraspol","Bălţi","Bender"],"rawOffsetInMinutes":120,"abbreviation":"EET","rawFormat":"+02:00 Eastern European Time - Chisinau, Tiraspol, Bălţi, Bender"},{"name":"Asia/Hebron","alternativeName":"Eastern European Time","group":["Asia/Gaza","Asia/Hebron"],"continentCode":"AS","continentName":"Asia","countryName":"Palestinian Territory","countryCode":"PS","mainCities":["East Jerusalem","Gaza","Khān Yūnis","Jabālyā"],"rawOffsetInMinutes":120,"abbreviation":"EET","rawFormat":"+02:00 Eastern European Time - East Jerusalem, Gaza, Khān Yūnis, Jabālyā"},{"name":"Europe/Helsinki","alternativeName":"Eastern European Time","group":["Europe/Helsinki","Europe/Mariehamn"],"continentCode":"EU","continentName":"Europe","countryName":"Finland","countryCode":"FI","mainCities":["Helsinki","Espoo","Tampere","Vantaa"],"rawOffsetInMinutes":120,"abbreviation":"EET","rawFormat":"+02:00 Eastern European Time - Helsinki, Espoo, Tampere, Vantaa"},{"name":"Europe/Kaliningrad","alternativeName":"Eastern European Time","group":["Europe/Kaliningrad"],"continentCode":"EU","continentName":"Europe","countryName":"Russia","countryCode":"RU","mainCities":["Kaliningrad","Chernyakhovsk","Sovetsk","Baltiysk"],"rawOffsetInMinutes":120,"abbreviation":"EET","rawFormat":"+02:00 Eastern European Time - Kaliningrad, Chernyakhovsk, Sovetsk, Baltiysk"},{"name":"Europe/Kyiv","alternativeName":"Eastern European Time","group":["Europe/Kyiv","Europe/Uzhgorod","Europe/Zaporozhye","Europe/Kiev"],"continentCode":"EU","continentName":"Europe","countryName":"Ukraine","countryCode":"UA","mainCities":["Kyiv","Kharkiv","Odesa","Dnipro"],"rawOffsetInMinutes":120,"abbreviation":"EET","rawFormat":"+02:00 Eastern European Time - Kyiv, Kharkiv, Odesa, Dnipro"},{"name":"Europe/Mariehamn","alternativeName":"Eastern European Time","group":["Europe/Mariehamn"],"continentCode":"EU","continentName":"Europe","countryName":"Aland Islands","countryCode":"AX","mainCities":["Mariehamn"],"rawOffsetInMinutes":120,"abbreviation":"EET","rawFormat":"+02:00 Eastern European Time - Mariehamn"},{"name":"Asia/Nicosia","alternativeName":"Eastern European Time","group":["Asia/Famagusta","Asia/Nicosia","Europe/Nicosia"],"continentCode":"EU","continentName":"Europe","countryName":"Cyprus","countryCode":"CY","mainCities":["Nicosia","Limassol","Larnaca","Stróvolos"],"rawOffsetInMinutes":120,"abbreviation":"EET","rawFormat":"+02:00 Eastern European Time - Nicosia, Limassol, Larnaca, Stróvolos"},{"name":"Europe/Riga","alternativeName":"Eastern European Time","group":["Europe/Riga"],"continentCode":"EU","continentName":"Europe","countryName":"Latvia","countryCode":"LV","mainCities":["Riga","Daugavpils","Liepāja","Jelgava"],"rawOffsetInMinutes":120,"abbreviation":"EET","rawFormat":"+02:00 Eastern European Time - Riga, Daugavpils, Liepāja, Jelgava"},{"name":"Europe/Sofia","alternativeName":"Eastern European Time","group":["Europe/Sofia"],"continentCode":"EU","continentName":"Europe","countryName":"Bulgaria","countryCode":"BG","mainCities":["Sofia","Plovdiv","Varna","Burgas"],"rawOffsetInMinutes":120,"abbreviation":"EET","rawFormat":"+02:00 Eastern European Time - Sofia, Plovdiv, Varna, Burgas"},{"name":"Europe/Tallinn","alternativeName":"Eastern European Time","group":["Europe/Tallinn"],"continentCode":"EU","continentName":"Europe","countryName":"Estonia","countryCode":"EE","mainCities":["Tallinn","Tartu","Narva","Pärnu"],"rawOffsetInMinutes":120,"abbreviation":"EET","rawFormat":"+02:00 Eastern European Time - Tallinn, Tartu, Narva, Pärnu"},{"name":"Africa/Tripoli","alternativeName":"Eastern European Time","group":["Africa/Tripoli","Libya"],"continentCode":"AF","continentName":"Africa","countryName":"Libya","countryCode":"LY","mainCities":["Tripoli","Benghazi","Misratah","Zliten"],"rawOffsetInMinutes":120,"abbreviation":"EET","rawFormat":"+02:00 Eastern European Time - Tripoli, Benghazi, Misratah, Zliten"},{"name":"Europe/Vilnius","alternativeName":"Eastern European Time","group":["Europe/Vilnius"],"continentCode":"EU","continentName":"Europe","countryName":"Lithuania","countryCode":"LT","mainCities":["Vilnius","Kaunas","Klaipėda","Šiauliai"],"rawOffsetInMinutes":120,"abbreviation":"EET","rawFormat":"+02:00 Eastern European Time - Vilnius, Kaunas, Klaipėda, Šiauliai"},{"name":"Asia/Jerusalem","alternativeName":"Israel Time","group":["Asia/Jerusalem","Israel","Asia/Tel_Aviv"],"continentCode":"AS","continentName":"Asia","countryName":"Israel","countryCode":"IL","mainCities":["Jerusalem","Tel Aviv","West Jerusalem","Haifa"],"rawOffsetInMinutes":120,"abbreviation":"IST","rawFormat":"+02:00 Israel Time - Jerusalem, Tel Aviv, West Jerusalem, Haifa"},{"name":"Africa/Johannesburg","alternativeName":"South Africa Time","group":["Africa/Johannesburg","Africa/Maseru","Africa/Mbabane"],"continentCode":"AF","continentName":"Africa","countryName":"South Africa","countryCode":"ZA","mainCities":["Johannesburg","Cape Town","Durban","Pretoria"],"rawOffsetInMinutes":120,"abbreviation":"SAST","rawFormat":"+02:00 South Africa Time - Johannesburg, Cape Town, Durban, Pretoria"},{"name":"Africa/Mbabane","alternativeName":"South Africa Time","group":["Africa/Mbabane"],"continentCode":"AF","continentName":"Africa","countryName":"Eswatini","countryCode":"SZ","mainCities":["Manzini","Mbabane","Lobamba"],"rawOffsetInMinutes":120,"abbreviation":"SAST","rawFormat":"+02:00 South Africa Time - Manzini, Mbabane, Lobamba"},{"name":"Africa/Maseru","alternativeName":"South Africa Time","group":["Africa/Maseru"],"continentCode":"AF","continentName":"Africa","countryName":"Lesotho","countryCode":"LS","mainCities":["Maseru","Maputsoe","Mohale's Hoek","Mafeteng"],"rawOffsetInMinutes":120,"abbreviation":"SAST","rawFormat":"+02:00 South Africa Time - Maseru, Maputsoe, Mohale's Hoek, Mafeteng"},{"name":"Asia/Kuwait","alternativeName":"Arabian Time","group":["Asia/Kuwait"],"continentCode":"AS","continentName":"Asia","countryName":"Kuwait","countryCode":"KW","mainCities":["Al Aḩmadī","Ḩawallī","As Sālimīyah","Şabāḩ as Sālim"],"rawOffsetInMinutes":180,"abbreviation":"AST","rawFormat":"+03:00 Arabian Time - Al Aḩmadī, Ḩawallī, As Sālimīyah, Şabāḩ as Sālim"},{"name":"Asia/Bahrain","alternativeName":"Arabian Time","group":["Asia/Bahrain"],"continentCode":"AS","continentName":"Asia","countryName":"Bahrain","countryCode":"BH","mainCities":["Al Muharraq","Manama","Madīnat Ḩamad","Ar Rifā‘"],"rawOffsetInMinutes":180,"abbreviation":"AST","rawFormat":"+03:00 Arabian Time - Al Muharraq, Manama, Madīnat Ḩamad, Ar Rifā‘"},{"name":"Asia/Baghdad","alternativeName":"Arabian Time","group":["Asia/Baghdad"],"continentCode":"AS","continentName":"Asia","countryName":"Iraq","countryCode":"IQ","mainCities":["Baghdad","Al Mawşil al Jadīdah","Al Başrah al Qadīmah","Mosul"],"rawOffsetInMinutes":180,"abbreviation":"AST","rawFormat":"+03:00 Arabian Time - Baghdad, Al Mawşil al Jadīdah, Al Başrah al Qadīmah, Mosul"},{"name":"Asia/Qatar","alternativeName":"Arabian Time","group":["Asia/Qatar","Asia/Bahrain"],"continentCode":"AS","continentName":"Asia","countryName":"Qatar","countryCode":"QA","mainCities":["Doha","Ar Rayyān","Al Maţār al ‘Atīq","Al Manşūrah"],"rawOffsetInMinutes":180,"abbreviation":"AST","rawFormat":"+03:00 Arabian Time - Doha, Ar Rayyān, Al Maţār al ‘Atīq, Al Manşūrah"},{"name":"Asia/Riyadh","alternativeName":"Arabian Time","group":["Asia/Riyadh","Antarctica/Syowa","Asia/Aden","Asia/Kuwait"],"continentCode":"AS","continentName":"Asia","countryName":"Saudi Arabia","countryCode":"SA","mainCities":["Jeddah","Riyadh","Makkah","Madinah"],"rawOffsetInMinutes":180,"abbreviation":"AST","rawFormat":"+03:00 Arabian Time - Jeddah, Riyadh, Makkah, Madinah"},{"name":"Asia/Aden","alternativeName":"Arabian Time","group":["Asia/Aden"],"continentCode":"AS","continentName":"Asia","countryName":"Yemen","countryCode":"YE","mainCities":["Sanaa","Aden","Taiz","Ibb"],"rawOffsetInMinutes":180,"abbreviation":"AST","rawFormat":"+03:00 Arabian Time - Sanaa, Aden, Taiz, Ibb"},{"name":"Asia/Amman","alternativeName":"Asia/Amman","group":["Asia/Amman"],"continentCode":"AS","continentName":"Asia","countryName":"Jordan","countryCode":"JO","mainCities":["Amman","Zarqa","Irbid","Russeifa"],"rawOffsetInMinutes":180,"abbreviation":"GMT+3","rawFormat":"+03:00 Asia/Amman - Amman, Zarqa, Irbid, Russeifa"},{"name":"Asia/Damascus","alternativeName":"Asia/Damascus","group":["Asia/Damascus"],"continentCode":"AS","continentName":"Asia","countryName":"Syria","countryCode":"SY","mainCities":["Aleppo","Damascus","Homs","Latakia"],"rawOffsetInMinutes":180,"abbreviation":"GMT+3","rawFormat":"+03:00 Asia/Damascus - Aleppo, Damascus, Homs, Latakia"},{"name":"Africa/Addis_Ababa","alternativeName":"East Africa Time","group":["Africa/Addis_Ababa"],"continentCode":"AF","continentName":"Africa","countryName":"Ethiopia","countryCode":"ET","mainCities":["Addis Ababa","Jijiga","Gonder","Mek'ele"],"rawOffsetInMinutes":180,"abbreviation":"EAT","rawFormat":"+03:00 East Africa Time - Addis Ababa, Jijiga, Gonder, Mek'ele"},{"name":"Indian/Antananarivo","alternativeName":"East Africa Time","group":["Indian/Antananarivo"],"continentCode":"AF","continentName":"Africa","countryName":"Madagascar","countryCode":"MG","mainCities":["Antananarivo","Toamasina","Antsirabe","Mahajanga"],"rawOffsetInMinutes":180,"abbreviation":"EAT","rawFormat":"+03:00 East Africa Time - Antananarivo, Toamasina, Antsirabe, Mahajanga"},{"name":"Africa/Asmara","alternativeName":"East Africa Time","group":["Africa/Asmara"],"continentCode":"AF","continentName":"Africa","countryName":"Eritrea","countryCode":"ER","mainCities":["Asmara","Keren","Himora","Massawa"],"rawOffsetInMinutes":180,"abbreviation":"EAT","rawFormat":"+03:00 East Africa Time - Asmara, Keren, Himora, Massawa"},{"name":"Africa/Dar_es_Salaam","alternativeName":"East Africa Time","group":["Africa/Dar_es_Salaam"],"continentCode":"AF","continentName":"Africa","countryName":"Tanzania","countryCode":"TZ","mainCities":["Dar es Salaam","Mwanza","Dodoma","Zanzibar"],"rawOffsetInMinutes":180,"abbreviation":"EAT","rawFormat":"+03:00 East Africa Time - Dar es Salaam, Mwanza, Dodoma, Zanzibar"},{"name":"Africa/Djibouti","alternativeName":"East Africa Time","group":["Africa/Djibouti"],"continentCode":"AF","continentName":"Africa","countryName":"Djibouti","countryCode":"DJ","mainCities":["Djibouti","Ali Sabih","Dikhil","Tadjoura"],"rawOffsetInMinutes":180,"abbreviation":"EAT","rawFormat":"+03:00 East Africa Time - Djibouti, Ali Sabih, Dikhil, Tadjoura"},{"name":"Africa/Kampala","alternativeName":"East Africa Time","group":["Africa/Kampala"],"continentCode":"AF","continentName":"Africa","countryName":"Uganda","countryCode":"UG","mainCities":["Kampala","Nansana","Kira","Bunamwaya"],"rawOffsetInMinutes":180,"abbreviation":"EAT","rawFormat":"+03:00 East Africa Time - Kampala, Nansana, Kira, Bunamwaya"},{"name":"Indian/Mayotte","alternativeName":"East Africa Time","group":["Indian/Mayotte"],"continentCode":"AF","continentName":"Africa","countryName":"Mayotte","countryCode":"YT","mainCities":["Mamoudzou","Koungou","Labattoir","Kaouéni"],"rawOffsetInMinutes":180,"abbreviation":"EAT","rawFormat":"+03:00 East Africa Time - Mamoudzou, Koungou, Labattoir, Kaouéni"},{"name":"Africa/Mogadishu","alternativeName":"East Africa Time","group":["Africa/Mogadishu"],"continentCode":"AF","continentName":"Africa","countryName":"Somalia","countryCode":"SO","mainCities":["Mogadishu","Borama","Hargeysa","Berbera"],"rawOffsetInMinutes":180,"abbreviation":"EAT","rawFormat":"+03:00 East Africa Time - Mogadishu, Borama, Hargeysa, Berbera"},{"name":"Indian/Comoro","alternativeName":"East Africa Time","group":["Indian/Comoro"],"continentCode":"AF","continentName":"Africa","countryName":"Comoros","countryCode":"KM","mainCities":["Moroni","Moutsamoudou","Fomboni"],"rawOffsetInMinutes":180,"abbreviation":"EAT","rawFormat":"+03:00 East Africa Time - Moroni, Moutsamoudou, Fomboni"},{"name":"Africa/Nairobi","alternativeName":"East Africa Time","group":["Africa/Nairobi","Africa/Addis_Ababa","Africa/Asmara","Africa/Dar_es_Salaam","Africa/Djibouti","Africa/Kampala","Africa/Mogadishu","Indian/Antananarivo","Indian/Comoro","Indian/Mayotte","Africa/Asmera"],"continentCode":"AF","continentName":"Africa","countryName":"Kenya","countryCode":"KE","mainCities":["Nairobi","Kakamega","Mombasa","Nakuru"],"rawOffsetInMinutes":180,"abbreviation":"EAT","rawFormat":"+03:00 East Africa Time - Nairobi, Kakamega, Mombasa, Nakuru"},{"name":"Europe/Minsk","alternativeName":"Moscow Time","group":["Europe/Minsk"],"continentCode":"EU","continentName":"Europe","countryName":"Belarus","countryCode":"BY","mainCities":["Minsk","Homyel'","Hrodna","Vitebsk"],"rawOffsetInMinutes":180,"abbreviation":"MSK","rawFormat":"+03:00 Moscow Time - Minsk, Homyel', Hrodna, Vitebsk"},{"name":"Europe/Moscow","alternativeName":"Moscow Time","group":["Europe/Kirov","Europe/Moscow","Europe/Volgograd","W-SU"],"continentCode":"EU","continentName":"Europe","countryName":"Russia","countryCode":"RU","mainCities":["Moscow","Saint Petersburg","Nizhniy Novgorod","Kazan"],"rawOffsetInMinutes":180,"abbreviation":"MSK","rawFormat":"+03:00 Moscow Time - Moscow, Saint Petersburg, Nizhniy Novgorod, Kazan"},{"name":"Europe/Simferopol","alternativeName":"Moscow Time","group":["Europe/Simferopol"],"continentCode":"EU","continentName":"Europe","countryName":"Ukraine","countryCode":"UA","mainCities":["Sevastopol","Simferopol","Kerch","Yevpatoriya"],"rawOffsetInMinutes":180,"abbreviation":"MSK","rawFormat":"+03:00 Moscow Time - Sevastopol, Simferopol, Kerch, Yevpatoriya"},{"name":"Antarctica/Syowa","alternativeName":"Syowa Time","group":["Antarctica/Syowa"],"continentCode":"AN","continentName":"Antarctica","countryName":"Antarctica","countryCode":"AQ","mainCities":["Syowa"],"rawOffsetInMinutes":180,"abbreviation":"SYOT","rawFormat":"+03:00 Syowa Time - Syowa"},{"name":"Europe/Istanbul","alternativeName":"Turkey Time","group":["Europe/Istanbul","Turkey","Asia/Istanbul"],"continentCode":"AS","continentName":"Asia","countryName":"Turkey","countryCode":"TR","mainCities":["Istanbul","Ankara","Bursa","İzmir"],"rawOffsetInMinutes":180,"abbreviation":"TRT","rawFormat":"+03:00 Turkey Time - Istanbul, Ankara, Bursa, İzmir"},{"name":"Asia/Tehran","alternativeName":"Iran Time","group":["Asia/Tehran","Iran"],"continentCode":"AS","continentName":"Asia","countryName":"Iran","countryCode":"IR","mainCities":["Tehran","Mashhad","Isfahan","Karaj"],"rawOffsetInMinutes":210,"abbreviation":"IRST","rawFormat":"+03:30 Iran Time - Tehran, Mashhad, Isfahan, Karaj"},{"name":"Asia/Yerevan","alternativeName":"Armenia Time","group":["Asia/Yerevan"],"continentCode":"AS","continentName":"Asia","countryName":"Armenia","countryCode":"AM","mainCities":["Yerevan","Malatia-Sebastia","Shengavit","Nor Nork"],"rawOffsetInMinutes":240,"abbreviation":"AMT","rawFormat":"+04:00 Armenia Time - Yerevan, Malatia-Sebastia, Shengavit, Nor Nork"},{"name":"Asia/Baku","alternativeName":"Azerbaijan Time","group":["Asia/Baku"],"continentCode":"AS","continentName":"Asia","countryName":"Azerbaijan","countryCode":"AZ","mainCities":["Baku","Sumqayıt","Ganja","Lankaran"],"rawOffsetInMinutes":240,"abbreviation":"AZT","rawFormat":"+04:00 Azerbaijan Time - Baku, Sumqayıt, Ganja, Lankaran"},{"name":"Asia/Tbilisi","alternativeName":"Georgia Time","group":["Asia/Tbilisi"],"continentCode":"AS","continentName":"Asia","countryName":"Georgia","countryCode":"GE","mainCities":["Tbilisi","Batumi","Kutaisi","Rustavi"],"rawOffsetInMinutes":240,"abbreviation":"GET","rawFormat":"+04:00 Georgia Time - Tbilisi, Batumi, Kutaisi, Rustavi"},{"name":"Asia/Dubai","alternativeName":"Gulf Time","group":["Asia/Dubai","Asia/Muscat","Indian/Mahe","Indian/Reunion"],"continentCode":"AS","continentName":"Asia","countryName":"United Arab Emirates","countryCode":"AE","mainCities":["Dubai","Abu Dhabi","Sharjah","Al Ain City"],"rawOffsetInMinutes":240,"abbreviation":"GST","rawFormat":"+04:00 Gulf Time - Dubai, Abu Dhabi, Sharjah, Al Ain City"},{"name":"Asia/Muscat","alternativeName":"Gulf Time","group":["Asia/Muscat"],"continentCode":"AS","continentName":"Asia","countryName":"Oman","countryCode":"OM","mainCities":["Muscat","Seeb","Bawshar","‘Ibrī"],"rawOffsetInMinutes":240,"abbreviation":"GST","rawFormat":"+04:00 Gulf Time - Muscat, Seeb, Bawshar, ‘Ibrī"},{"name":"Indian/Mauritius","alternativeName":"Mauritius Time","group":["Indian/Mauritius"],"continentCode":"AF","continentName":"Africa","countryName":"Mauritius","countryCode":"MU","mainCities":["Port Louis","Vacoas","Beau Bassin-Rose Hill","Curepipe"],"rawOffsetInMinutes":240,"abbreviation":"MUT","rawFormat":"+04:00 Mauritius Time - Port Louis, Vacoas, Beau Bassin-Rose Hill, Curepipe"},{"name":"Indian/Reunion","alternativeName":"Réunion Time","group":["Indian/Reunion"],"continentCode":"AF","continentName":"Africa","countryName":"Reunion","countryCode":"RE","mainCities":["Saint-Denis","Saint-Paul","Saint-Pierre","Le Tampon"],"rawOffsetInMinutes":240,"abbreviation":"RET","rawFormat":"+04:00 Réunion Time - Saint-Denis, Saint-Paul, Saint-Pierre, Le Tampon"},{"name":"Europe/Samara","alternativeName":"Samara Time","group":["Europe/Astrakhan","Europe/Samara","Europe/Saratov","Europe/Ulyanovsk"],"continentCode":"EU","continentName":"Europe","countryName":"Russia","countryCode":"RU","mainCities":["Samara","Saratov","Tolyatti","Izhevsk"],"rawOffsetInMinutes":240,"abbreviation":"SAMT","rawFormat":"+04:00 Samara Time - Samara, Saratov, Tolyatti, Izhevsk"},{"name":"Indian/Mahe","alternativeName":"Seychelles Time","group":["Indian/Mahe"],"continentCode":"AF","continentName":"Africa","countryName":"Seychelles","countryCode":"SC","mainCities":["Victoria"],"rawOffsetInMinutes":240,"abbreviation":"SCT","rawFormat":"+04:00 Seychelles Time - Victoria"},{"name":"Asia/Kabul","alternativeName":"Afghanistan Time","group":["Asia/Kabul"],"continentCode":"AS","continentName":"Asia","countryName":"Afghanistan","countryCode":"AF","mainCities":["Kabul","Herāt","Mazār-e Sharīf","Kandahār"],"rawOffsetInMinutes":270,"abbreviation":"AFT","rawFormat":"+04:30 Afghanistan Time - Kabul, Herāt, Mazār-e Sharīf, Kandahār"},{"name":"Indian/Kerguelen","alternativeName":"French Southern & Antarctic Time","group":["Indian/Kerguelen"],"continentCode":"AN","continentName":"Antarctica","countryName":"French Southern Territories","countryCode":"TF","mainCities":["Port-aux-Français"],"rawOffsetInMinutes":300,"abbreviation":"FSAT","rawFormat":"+05:00 French Southern & Antarctic Time - Port-aux-Français"},{"name":"Asia/Almaty","alternativeName":"Kazakhstan Time","group":["Asia/Almaty","Asia/Aqtau","Asia/Aqtobe","Asia/Atyrau","Asia/Oral","Asia/Qostanay","Asia/Qyzylorda"],"continentCode":"AS","continentName":"Asia","countryName":"Kazakhstan","countryCode":"KZ","mainCities":["Almaty","Shymkent","Aktobe","Karagandy"],"rawOffsetInMinutes":300,"abbreviation":"GMT+5","rawFormat":"+05:00 Kazakhstan Time - Almaty, Shymkent, Aktobe, Karagandy"},{"name":"Indian/Maldives","alternativeName":"Maldives Time","group":["Indian/Maldives","Indian/Kerguelen"],"continentCode":"AS","continentName":"Asia","countryName":"Maldives","countryCode":"MV","mainCities":["Male"],"rawOffsetInMinutes":300,"abbreviation":"MVT","rawFormat":"+05:00 Maldives Time - Male"},{"name":"Antarctica/Mawson","alternativeName":"Mawson Time","group":["Antarctica/Mawson","Antarctica/Vostok"],"continentCode":"AN","continentName":"Antarctica","countryName":"Antarctica","countryCode":"AQ","mainCities":["Mawson","Vostok"],"rawOffsetInMinutes":300,"abbreviation":"MAWT","rawFormat":"+05:00 Mawson Time - Mawson, Vostok"},{"name":"Asia/Karachi","alternativeName":"Pakistan Time","group":["Asia/Karachi"],"continentCode":"AS","continentName":"Asia","countryName":"Pakistan","countryCode":"PK","mainCities":["Lahore","Karachi","Peshawar","Faisalabad"],"rawOffsetInMinutes":300,"abbreviation":"PKT","rawFormat":"+05:00 Pakistan Time - Lahore, Karachi, Peshawar, Faisalabad"},{"name":"Asia/Dushanbe","alternativeName":"Tajikistan Time","group":["Asia/Dushanbe"],"continentCode":"AS","continentName":"Asia","countryName":"Tajikistan","countryCode":"TJ","mainCities":["Dushanbe","Isfara","Istaravshan","Kŭlob"],"rawOffsetInMinutes":300,"abbreviation":"TJT","rawFormat":"+05:00 Tajikistan Time - Dushanbe, Isfara, Istaravshan, Kŭlob"},{"name":"Asia/Ashgabat","alternativeName":"Turkmenistan Time","group":["Asia/Ashgabat","Asia/Ashkhabad"],"continentCode":"AS","continentName":"Asia","countryName":"Turkmenistan","countryCode":"TM","mainCities":["Ashgabat","Türkmenabat","Daşoguz","Mary"],"rawOffsetInMinutes":300,"abbreviation":"TMT","rawFormat":"+05:00 Turkmenistan Time - Ashgabat, Türkmenabat, Daşoguz, Mary"},{"name":"Asia/Tashkent","alternativeName":"Uzbekistan Time","group":["Asia/Samarkand","Asia/Tashkent"],"continentCode":"AS","continentName":"Asia","countryName":"Uzbekistan","countryCode":"UZ","mainCities":["Tashkent","Andijon","Namangan","Samarkand"],"rawOffsetInMinutes":300,"abbreviation":"UZT","rawFormat":"+05:00 Uzbekistan Time - Tashkent, Andijon, Namangan, Samarkand"},{"name":"Asia/Yekaterinburg","alternativeName":"Yekaterinburg Time","group":["Asia/Yekaterinburg"],"continentCode":"EU","continentName":"Europe","countryName":"Russia","countryCode":"RU","mainCities":["Yekaterinburg","Chelyabinsk","Ufa","Perm"],"rawOffsetInMinutes":300,"abbreviation":"YEKT","rawFormat":"+05:00 Yekaterinburg Time - Yekaterinburg, Chelyabinsk, Ufa, Perm"},{"name":"Asia/Colombo","alternativeName":"India Time","group":["Asia/Colombo"],"continentCode":"AS","continentName":"Asia","countryName":"Sri Lanka","countryCode":"LK","mainCities":["Colombo","Dehiwala-Mount Lavinia","Maharagama","Jaffna"],"rawOffsetInMinutes":330,"abbreviation":"IST","rawFormat":"+05:30 India Time - Colombo, Dehiwala-Mount Lavinia, Maharagama, Jaffna"},{"name":"Asia/Kolkata","alternativeName":"India Time","group":["Asia/Kolkata","Asia/Calcutta"],"continentCode":"AS","continentName":"Asia","countryName":"India","countryCode":"IN","mainCities":["Mumbai","Delhi","Bengaluru","Hyderabad"],"rawOffsetInMinutes":330,"abbreviation":"IST","rawFormat":"+05:30 India Time - Mumbai, Delhi, Bengaluru, Hyderabad"},{"name":"Asia/Kathmandu","alternativeName":"Nepal Time","group":["Asia/Kathmandu","Asia/Katmandu"],"continentCode":"AS","continentName":"Asia","countryName":"Nepal","countryCode":"NP","mainCities":["Kathmandu","Pokhara","Bharatpur","Pātan"],"rawOffsetInMinutes":345,"abbreviation":"NPT","rawFormat":"+05:45 Nepal Time - Kathmandu, Pokhara, Bharatpur, Pātan"},{"name":"Asia/Dhaka","alternativeName":"Bangladesh Time","group":["Asia/Dhaka","Asia/Dacca"],"continentCode":"AS","continentName":"Asia","countryName":"Bangladesh","countryCode":"BD","mainCities":["Dhaka","Chattogram","Gazipur","Khulna"],"rawOffsetInMinutes":360,"abbreviation":"BST","rawFormat":"+06:00 Bangladesh Time - Dhaka, Chattogram, Gazipur, Khulna"},{"name":"Asia/Thimphu","alternativeName":"Bhutan Time","group":["Asia/Thimphu","Asia/Thimbu"],"continentCode":"AS","continentName":"Asia","countryName":"Bhutan","countryCode":"BT","mainCities":["Thimphu","Phuntsholing","Tsirang","Punākha"],"rawOffsetInMinutes":360,"abbreviation":"BTT","rawFormat":"+06:00 Bhutan Time - Thimphu, Phuntsholing, Tsirang, Punākha"},{"name":"Asia/Urumqi","alternativeName":"China Time","group":["Asia/Urumqi","Asia/Kashgar"],"continentCode":"AS","continentName":"Asia","countryName":"China","countryCode":"CN","mainCities":["Ürümqi","Shihezi","Korla","Aqsu"],"rawOffsetInMinutes":360,"abbreviation":"CST","rawFormat":"+06:00 China Time - Ürümqi, Shihezi, Korla, Aqsu"},{"name":"Indian/Chagos","alternativeName":"Indian Ocean Time","group":["Indian/Chagos"],"continentCode":"AS","continentName":"Asia","countryName":"British Indian Ocean Territory","countryCode":"IO","mainCities":["Chagos"],"rawOffsetInMinutes":360,"abbreviation":"IOT","rawFormat":"+06:00 Indian Ocean Time - Chagos"},{"name":"Asia/Bishkek","alternativeName":"Kyrgyzstan Time","group":["Asia/Bishkek"],"continentCode":"AS","continentName":"Asia","countryName":"Kyrgyzstan","countryCode":"KG","mainCities":["Bishkek","Osh","Jalal-Abad","Karakol"],"rawOffsetInMinutes":360,"abbreviation":"KGT","rawFormat":"+06:00 Kyrgyzstan Time - Bishkek, Osh, Jalal-Abad, Karakol"},{"name":"Asia/Omsk","alternativeName":"Omsk Time","group":["Asia/Omsk"],"continentCode":"EU","continentName":"Europe","countryName":"Russia","countryCode":"RU","mainCities":["Omsk","Tara","Kalachinsk","Isil’kul’"],"rawOffsetInMinutes":360,"abbreviation":"OMST","rawFormat":"+06:00 Omsk Time - Omsk, Tara, Kalachinsk, Isil’kul’"},{"name":"Indian/Cocos","alternativeName":"Cocos Islands Time","group":["Indian/Cocos"],"continentCode":"AS","continentName":"Asia","countryName":"Cocos Islands","countryCode":"CC","mainCities":["West Island"],"rawOffsetInMinutes":390,"abbreviation":"CCT","rawFormat":"+06:30 Cocos Islands Time - West Island"},{"name":"Asia/Yangon","alternativeName":"Myanmar Time","group":["Asia/Yangon","Indian/Cocos","Asia/Rangoon"],"continentCode":"AS","continentName":"Asia","countryName":"Myanmar","countryCode":"MM","mainCities":["Yangon","Mandalay","Nay Pyi Taw","Hlaingthaya Township"],"rawOffsetInMinutes":390,"abbreviation":"MMT","rawFormat":"+06:30 Myanmar Time - Yangon, Mandalay, Nay Pyi Taw, Hlaingthaya Township"},{"name":"Indian/Christmas","alternativeName":"Christmas Island Time","group":["Indian/Christmas"],"continentCode":"OC","continentName":"Oceania","countryName":"Christmas Island","countryCode":"CX","mainCities":["Flying Fish Cove"],"rawOffsetInMinutes":420,"abbreviation":"CXT","rawFormat":"+07:00 Christmas Island Time - Flying Fish Cove"},{"name":"Antarctica/Davis","alternativeName":"Davis Time","group":["Antarctica/Davis"],"continentCode":"AN","continentName":"Antarctica","countryName":"Antarctica","countryCode":"AQ","mainCities":["Davis"],"rawOffsetInMinutes":420,"abbreviation":"DAVT","rawFormat":"+07:00 Davis Time - Davis"},{"name":"Asia/Hovd","alternativeName":"Hovd Time","group":["Asia/Hovd"],"continentCode":"AS","continentName":"Asia","countryName":"Mongolia","countryCode":"MN","mainCities":["Ulaangom","Khovd","Ölgii","Altai"],"rawOffsetInMinutes":420,"abbreviation":"HOVT","rawFormat":"+07:00 Hovd Time - Ulaangom, Khovd, Ölgii, Altai"},{"name":"Asia/Bangkok","alternativeName":"Indochina Time","group":["Asia/Bangkok","Asia/Phnom_Penh","Asia/Vientiane","Indian/Christmas"],"continentCode":"AS","continentName":"Asia","countryName":"Thailand","countryCode":"TH","mainCities":["Bangkok","Samut Prakan","Mueang Nonthaburi","Chon Buri"],"rawOffsetInMinutes":420,"abbreviation":"ICT","rawFormat":"+07:00 Indochina Time - Bangkok, Samut Prakan, Mueang Nonthaburi, Chon Buri"},{"name":"Asia/Ho_Chi_Minh","alternativeName":"Indochina Time","group":["Asia/Ho_Chi_Minh","Asia/Saigon"],"continentCode":"AS","continentName":"Asia","countryName":"Vietnam","countryCode":"VN","mainCities":["Ho Chi Minh City","Cần Thơ","Da Nang","Biên Hòa"],"rawOffsetInMinutes":420,"abbreviation":"ICT","rawFormat":"+07:00 Indochina Time - Ho Chi Minh City, Cần Thơ, Da Nang, Biên Hòa"},{"name":"Asia/Phnom_Penh","alternativeName":"Indochina Time","group":["Asia/Phnom_Penh"],"continentCode":"AS","continentName":"Asia","countryName":"Cambodia","countryCode":"KH","mainCities":["Phnom Penh","Takeo","Siem Reap","Battambang"],"rawOffsetInMinutes":420,"abbreviation":"ICT","rawFormat":"+07:00 Indochina Time - Phnom Penh, Takeo, Siem Reap, Battambang"},{"name":"Asia/Vientiane","alternativeName":"Indochina Time","group":["Asia/Vientiane"],"continentCode":"AS","continentName":"Asia","countryName":"Laos","countryCode":"LA","mainCities":["Vientiane","Savannakhet","Pakse","Thakhèk"],"rawOffsetInMinutes":420,"abbreviation":"ICT","rawFormat":"+07:00 Indochina Time - Vientiane, Savannakhet, Pakse, Thakhèk"},{"name":"Asia/Novosibirsk","alternativeName":"Novosibirsk Time","group":["Asia/Barnaul","Asia/Krasnoyarsk","Asia/Novokuznetsk","Asia/Novosibirsk","Asia/Tomsk"],"continentCode":"EU","continentName":"Europe","countryName":"Russia","countryCode":"RU","mainCities":["Novosibirsk","Krasnoyarsk","Barnaul","Tomsk"],"rawOffsetInMinutes":420,"abbreviation":"NOVT","rawFormat":"+07:00 Novosibirsk Time - Novosibirsk, Krasnoyarsk, Barnaul, Tomsk"},{"name":"Asia/Jakarta","alternativeName":"Western Indonesia Time","group":["Asia/Jakarta","Asia/Pontianak"],"continentCode":"AS","continentName":"Asia","countryName":"Indonesia","countryCode":"ID","mainCities":["Jakarta","Surabaya","Bekasi","Bandung"],"rawOffsetInMinutes":420,"abbreviation":"WIB","rawFormat":"+07:00 Western Indonesia Time - Jakarta, Surabaya, Bekasi, Bandung"},{"name":"Antarctica/Casey","alternativeName":"Australian Western Time","group":["Antarctica/Casey"],"continentCode":"AN","continentName":"Antarctica","countryName":"Antarctica","countryCode":"AQ","mainCities":["Casey"],"rawOffsetInMinutes":480,"abbreviation":"AWST","rawFormat":"+08:00 Australian Western Time - Casey"},{"name":"Australia/Perth","alternativeName":"Australian Western Time","group":["Australia/Perth","Australia/West"],"continentCode":"OC","continentName":"Oceania","countryName":"Australia","countryCode":"AU","mainCities":["Perth","Mandurah","Bunbury","Geraldton"],"rawOffsetInMinutes":480,"abbreviation":"AWST","rawFormat":"+08:00 Australian Western Time - Perth, Mandurah, Bunbury, Geraldton"},{"name":"Asia/Brunei","alternativeName":"Brunei Time","group":["Asia/Brunei"],"continentCode":"AS","continentName":"Asia","countryName":"Brunei","countryCode":"BN","mainCities":["Bandar Seri Begawan","Sengkurong","Mentiri","Kuala Belait"],"rawOffsetInMinutes":480,"abbreviation":"GMT+8","rawFormat":"+08:00 Brunei Time - Bandar Seri Begawan, Sengkurong, Mentiri, Kuala Belait"},{"name":"Asia/Makassar","alternativeName":"Central Indonesia Time","group":["Asia/Makassar","Asia/Ujung_Pandang"],"continentCode":"AS","continentName":"Asia","countryName":"Indonesia","countryCode":"ID","mainCities":["Makassar","Samarinda","Denpasar","Balikpapan"],"rawOffsetInMinutes":480,"abbreviation":"WITA","rawFormat":"+08:00 Central Indonesia Time - Makassar, Samarinda, Denpasar, Balikpapan"},{"name":"Asia/Macau","alternativeName":"China Time","group":["Asia/Macau","Asia/Macao"],"continentCode":"AS","continentName":"Asia","countryName":"Macao","countryCode":"MO","mainCities":["Macau","Taipa","Sé","Luhuan"],"rawOffsetInMinutes":480,"abbreviation":"CST","rawFormat":"+08:00 China Time - Macau, Taipa, Sé, Luhuan"},{"name":"Asia/Shanghai","alternativeName":"China Time","group":["Asia/Shanghai","PRC","Asia/Chongqing","Asia/Harbin","Asia/Chungking"],"continentCode":"AS","continentName":"Asia","countryName":"China","countryCode":"CN","mainCities":["Shanghai","Beijing","Shenzhen","Guangzhou"],"rawOffsetInMinutes":480,"abbreviation":"CST","rawFormat":"+08:00 China Time - Shanghai, Beijing, Shenzhen, Guangzhou"},{"name":"Asia/Hong_Kong","alternativeName":"Hong Kong Time","group":["Asia/Hong_Kong","Hongkong"],"continentCode":"AS","continentName":"Asia","countryName":"Hong Kong","countryCode":"HK","mainCities":["Hong Kong","New Territories","Kowloon","Hong Kong Island"],"rawOffsetInMinutes":480,"abbreviation":"HKT","rawFormat":"+08:00 Hong Kong Time - Hong Kong, New Territories, Kowloon, Hong Kong Island"},{"name":"Asia/Irkutsk","alternativeName":"Irkutsk Time","group":["Asia/Irkutsk"],"continentCode":"EU","continentName":"Europe","countryName":"Russia","countryCode":"RU","mainCities":["Irkutsk","Ulan-Ude","Bratsk","Angarsk"],"rawOffsetInMinutes":480,"abbreviation":"IRKT","rawFormat":"+08:00 Irkutsk Time - Irkutsk, Ulan-Ude, Bratsk, Angarsk"},{"name":"Asia/Kuala_Lumpur","alternativeName":"Malaysia Time","group":["Asia/Kuala_Lumpur","Asia/Kuching","Asia/Brunei"],"continentCode":"AS","continentName":"Asia","countryName":"Malaysia","countryCode":"MY","mainCities":["Kuala Lumpur","Johor Bahru","Kampung Baru Subang","Petaling Jaya"],"rawOffsetInMinutes":480,"abbreviation":"MYT","rawFormat":"+08:00 Malaysia Time - Kuala Lumpur, Johor Bahru, Kampung Baru Subang, Petaling Jaya"},{"name":"Asia/Manila","alternativeName":"Philippine Time","group":["Asia/Manila"],"continentCode":"AS","continentName":"Asia","countryName":"Philippines","countryCode":"PH","mainCities":["Quezon City","Davao","Caloocan City","Manila"],"rawOffsetInMinutes":480,"abbreviation":"PHT","rawFormat":"+08:00 Philippine Time - Quezon City, Davao, Caloocan City, Manila"},{"name":"Asia/Singapore","alternativeName":"Singapore Time","group":["Asia/Singapore","Singapore","Asia/Kuala_Lumpur"],"continentCode":"AS","continentName":"Asia","countryName":"Singapore","countryCode":"SG","mainCities":["Singapore","Ulu Bedok","Bedok New Town","Tampines Estate"],"rawOffsetInMinutes":480,"abbreviation":"SGT","rawFormat":"+08:00 Singapore Time - Singapore, Ulu Bedok, Bedok New Town, Tampines Estate"},{"name":"Asia/Taipei","alternativeName":"Taiwan Time","group":["Asia/Taipei","ROC"],"continentCode":"AS","continentName":"Asia","countryName":"Taiwan","countryCode":"TW","mainCities":["Taipei","New Taipei City","Taichung","Kaohsiung"],"rawOffsetInMinutes":480,"abbreviation":"GMT+8","rawFormat":"+08:00 Taiwan Time - Taipei, New Taipei City, Taichung, Kaohsiung"},{"name":"Asia/Ulaanbaatar","alternativeName":"Ulaanbaatar Time","group":["Asia/Ulaanbaatar","Asia/Choibalsan","Asia/Ulan_Bator"],"continentCode":"AS","continentName":"Asia","countryName":"Mongolia","countryCode":"MN","mainCities":["Ulan Bator","Erdenet","Darhan","Choibalsan"],"rawOffsetInMinutes":480,"abbreviation":"ULAT","rawFormat":"+08:00 Ulaanbaatar Time - Ulan Bator, Erdenet, Darhan, Choibalsan"},{"name":"Australia/Eucla","alternativeName":"Australian Central Western Time","group":["Australia/Eucla"],"continentCode":"OC","continentName":"Oceania","countryName":"Australia","countryCode":"AU","mainCities":["Eucla"],"rawOffsetInMinutes":525,"abbreviation":"ACWST","rawFormat":"+08:45 Australian Central Western Time - Eucla"},{"name":"Asia/Jayapura","alternativeName":"Eastern Indonesia Time","group":["Asia/Jayapura"],"continentCode":"AS","continentName":"Asia","countryName":"Indonesia","countryCode":"ID","mainCities":["Jayapura","Ambon","Sorong","Ternate"],"rawOffsetInMinutes":540,"abbreviation":"WIT","rawFormat":"+09:00 Eastern Indonesia Time - Jayapura, Ambon, Sorong, Ternate"},{"name":"Asia/Tokyo","alternativeName":"Japan Time","group":["Asia/Tokyo","Japan"],"continentCode":"AS","continentName":"Asia","countryName":"Japan","countryCode":"JP","mainCities":["Tokyo","Yokohama","Osaka","Nagoya"],"rawOffsetInMinutes":540,"abbreviation":"JST","rawFormat":"+09:00 Japan Time - Tokyo, Yokohama, Osaka, Nagoya"},{"name":"Asia/Pyongyang","alternativeName":"Korean Time","group":["Asia/Pyongyang"],"continentCode":"AS","continentName":"Asia","countryName":"North Korea","countryCode":"KP","mainCities":["Pyongyang","Hamhŭng","Namp’o","Sunch’ŏn"],"rawOffsetInMinutes":540,"abbreviation":"KST","rawFormat":"+09:00 Korean Time - Pyongyang, Hamhŭng, Namp’o, Sunch’ŏn"},{"name":"Asia/Seoul","alternativeName":"Korean Time","group":["Asia/Seoul","ROK"],"continentCode":"AS","continentName":"Asia","countryName":"South Korea","countryCode":"KR","mainCities":["Seoul","Busan","Incheon","Daegu"],"rawOffsetInMinutes":540,"abbreviation":"KST","rawFormat":"+09:00 Korean Time - Seoul, Busan, Incheon, Daegu"},{"name":"Pacific/Palau","alternativeName":"Palau Time","group":["Pacific/Palau"],"continentCode":"OC","continentName":"Oceania","countryName":"Palau","countryCode":"PW","mainCities":["Ngerulmud"],"rawOffsetInMinutes":540,"abbreviation":"PWT","rawFormat":"+09:00 Palau Time - Ngerulmud"},{"name":"Asia/Dili","alternativeName":"Timor-Leste Time","group":["Asia/Dili"],"continentCode":"OC","continentName":"Oceania","countryName":"Timor Leste","countryCode":"TL","mainCities":["Dili","Maliana","Suai","Likisá"],"rawOffsetInMinutes":540,"abbreviation":"GMT+9","rawFormat":"+09:00 Timor-Leste Time - Dili, Maliana, Suai, Likisá"},{"name":"Asia/Chita","alternativeName":"Yakutsk Time","group":["Asia/Chita","Asia/Khandyga","Asia/Yakutsk"],"continentCode":"EU","continentName":"Europe","countryName":"Russia","countryCode":"RU","mainCities":["Chita","Yakutsk","Blagoveshchensk","Belogorsk"],"rawOffsetInMinutes":540,"abbreviation":"YAKT","rawFormat":"+09:00 Yakutsk Time - Chita, Yakutsk, Blagoveshchensk, Belogorsk"},{"name":"Australia/Adelaide","alternativeName":"Australian Central Time","group":["Australia/Adelaide","Australia/Broken_Hill","Australia/South","Australia/Yancowinna"],"continentCode":"OC","continentName":"Oceania","countryName":"Australia","countryCode":"AU","mainCities":["Adelaide","Adelaide Hills","Mount Gambier","Morphett Vale"],"rawOffsetInMinutes":570,"abbreviation":"ACST","rawFormat":"+09:30 Australian Central Time - Adelaide, Adelaide Hills, Mount Gambier, Morphett Vale"},{"name":"Australia/Darwin","alternativeName":"Australian Central Time","group":["Australia/Darwin","Australia/North"],"continentCode":"OC","continentName":"Oceania","countryName":"Australia","countryCode":"AU","mainCities":["Darwin","Palmerston","Alice Springs"],"rawOffsetInMinutes":570,"abbreviation":"ACST","rawFormat":"+09:30 Australian Central Time - Darwin, Palmerston, Alice Springs"},{"name":"Australia/Brisbane","alternativeName":"Australian Eastern Time","group":["Australia/Brisbane","Australia/Lindeman","Australia/Queensland"],"continentCode":"OC","continentName":"Oceania","countryName":"Australia","countryCode":"AU","mainCities":["Brisbane","Gold Coast","Sunshine Coast","Logan City"],"rawOffsetInMinutes":600,"abbreviation":"AEST","rawFormat":"+10:00 Australian Eastern Time - Brisbane, Gold Coast, Sunshine Coast, Logan City"},{"name":"Australia/Sydney","alternativeName":"Australian Eastern Time","group":["Antarctica/Macquarie","Australia/Hobart","Australia/Melbourne","Australia/Sydney","Australia/Tasmania","Australia/Currie","Australia/Victoria","Australia/ACT","Australia/NSW","Australia/Canberra"],"continentCode":"OC","continentName":"Oceania","countryName":"Australia","countryCode":"AU","mainCities":["Sydney","Melbourne","Newcastle","Canberra"],"rawOffsetInMinutes":600,"abbreviation":"AEST","rawFormat":"+10:00 Australian Eastern Time - Sydney, Melbourne, Newcastle, Canberra"},{"name":"Pacific/Guam","alternativeName":"Chamorro Time","group":["Pacific/Guam","Pacific/Saipan"],"continentCode":"OC","continentName":"Oceania","countryName":"Guam","countryCode":"GU","mainCities":["Dededo Village","Yigo Village","Tamuning-Tumon-Harmon Village","Tamuning"],"rawOffsetInMinutes":600,"abbreviation":"ChST","rawFormat":"+10:00 Chamorro Time - Dededo Village, Yigo Village, Tamuning-Tumon-Harmon Village, Tamuning"},{"name":"Pacific/Saipan","alternativeName":"Chamorro Time","group":["Pacific/Saipan"],"continentCode":"OC","continentName":"Oceania","countryName":"Northern Mariana Islands","countryCode":"MP","mainCities":["Saipan"],"rawOffsetInMinutes":600,"abbreviation":"ChST","rawFormat":"+10:00 Chamorro Time - Saipan"},{"name":"Pacific/Chuuk","alternativeName":"Chuuk Time","group":["Pacific/Chuuk"],"continentCode":"OC","continentName":"Oceania","countryName":"Micronesia","countryCode":"FM","mainCities":["Chuuk"],"rawOffsetInMinutes":600,"abbreviation":"CHUT","rawFormat":"+10:00 Chuuk Time - Chuuk"},{"name":"Antarctica/DumontDUrville","alternativeName":"Dumont d’Urville Time","group":["Antarctica/DumontDUrville"],"continentCode":"AN","continentName":"Antarctica","countryName":"Antarctica","countryCode":"AQ","mainCities":["DumontDUrville"],"rawOffsetInMinutes":600,"abbreviation":"GMT+10","rawFormat":"+10:00 Dumont d’Urville Time - DumontDUrville"},{"name":"Pacific/Port_Moresby","alternativeName":"Papua New Guinea Time","group":["Pacific/Port_Moresby","Antarctica/DumontDUrville","Pacific/Chuuk","Pacific/Yap","Pacific/Truk"],"continentCode":"OC","continentName":"Oceania","countryName":"Papua New Guinea","countryCode":"PG","mainCities":["Port Moresby","Lae","Mount Hagen","Popondetta"],"rawOffsetInMinutes":600,"abbreviation":"PGT","rawFormat":"+10:00 Papua New Guinea Time - Port Moresby, Lae, Mount Hagen, Popondetta"},{"name":"Asia/Vladivostok","alternativeName":"Vladivostok Time","group":["Asia/Ust-Nera","Asia/Vladivostok"],"continentCode":"EU","continentName":"Europe","countryName":"Russia","countryCode":"RU","mainCities":["Khabarovsk","Vladivostok","Khabarovsk Vtoroy","Komsomolsk-on-Amur"],"rawOffsetInMinutes":600,"abbreviation":"VLAT","rawFormat":"+10:00 Vladivostok Time - Khabarovsk, Vladivostok, Khabarovsk Vtoroy, Komsomolsk-on-Amur"},{"name":"Australia/Lord_Howe","alternativeName":"Lord Howe Time","group":["Australia/Lord_Howe","Australia/LHI"],"continentCode":"OC","continentName":"Oceania","countryName":"Australia","countryCode":"AU","mainCities":["Lord Howe"],"rawOffsetInMinutes":630,"abbreviation":"LHST","rawFormat":"+10:30 Lord Howe Time - Lord Howe"},{"name":"Pacific/Bougainville","alternativeName":"Bougainville Time","group":["Pacific/Bougainville"],"continentCode":"OC","continentName":"Oceania","countryName":"Papua New Guinea","countryCode":"PG","mainCities":["Arawa"],"rawOffsetInMinutes":660,"abbreviation":"BST","rawFormat":"+11:00 Bougainville Time - Arawa"},{"name":"Pacific/Kosrae","alternativeName":"Kosrae Time","group":["Pacific/Kosrae","Pacific/Pohnpei"],"continentCode":"OC","continentName":"Oceania","countryName":"Micronesia","countryCode":"FM","mainCities":["Kosrae","Palikir"],"rawOffsetInMinutes":660,"abbreviation":"KOST","rawFormat":"+11:00 Kosrae Time - Kosrae, Palikir"},{"name":"Pacific/Noumea","alternativeName":"New Caledonia Time","group":["Pacific/Noumea"],"continentCode":"OC","continentName":"Oceania","countryName":"New Caledonia","countryCode":"NC","mainCities":["Nouméa","Mont-Dore","Dumbéa"],"rawOffsetInMinutes":660,"abbreviation":"NCT","rawFormat":"+11:00 New Caledonia Time - Nouméa, Mont-Dore, Dumbéa"},{"name":"Pacific/Norfolk","alternativeName":"Norfolk Island Time","group":["Pacific/Norfolk"],"continentCode":"OC","continentName":"Oceania","countryName":"Norfolk Island","countryCode":"NF","mainCities":["Kingston"],"rawOffsetInMinutes":660,"abbreviation":"NFT","rawFormat":"+11:00 Norfolk Island Time - Kingston"},{"name":"Asia/Sakhalin","alternativeName":"Sakhalin Time","group":["Asia/Magadan","Asia/Sakhalin","Asia/Srednekolymsk"],"continentCode":"EU","continentName":"Europe","countryName":"Russia","countryCode":"RU","mainCities":["Yuzhno-Sakhalinsk","Magadan","Korsakov","Kholmsk"],"rawOffsetInMinutes":660,"abbreviation":"SAKT","rawFormat":"+11:00 Sakhalin Time - Yuzhno-Sakhalinsk, Magadan, Korsakov, Kholmsk"},{"name":"Pacific/Guadalcanal","alternativeName":"Solomon Islands Time","group":["Pacific/Guadalcanal","Pacific/Pohnpei","Pacific/Ponape"],"continentCode":"OC","continentName":"Oceania","countryName":"Solomon Islands","countryCode":"SB","mainCities":["Honiara","Panatina","Nggosi","Tandai"],"rawOffsetInMinutes":660,"abbreviation":"SBT","rawFormat":"+11:00 Solomon Islands Time - Honiara, Panatina, Nggosi, Tandai"},{"name":"Pacific/Efate","alternativeName":"Vanuatu Time","group":["Pacific/Efate"],"continentCode":"OC","continentName":"Oceania","countryName":"Vanuatu","countryCode":"VU","mainCities":["Port-Vila"],"rawOffsetInMinutes":660,"abbreviation":"VUT","rawFormat":"+11:00 Vanuatu Time - Port-Vila"},{"name":"Pacific/Fiji","alternativeName":"Fiji Time","group":["Pacific/Fiji"],"continentCode":"OC","continentName":"Oceania","countryName":"Fiji","countryCode":"FJ","mainCities":["Nasinu","Suva","Lautoka","Nadi"],"rawOffsetInMinutes":720,"abbreviation":"FJT","rawFormat":"+12:00 Fiji Time - Nasinu, Suva, Lautoka, Nadi"},{"name":"Pacific/Tarawa","alternativeName":"Gilbert Islands Time","group":["Pacific/Tarawa","Pacific/Funafuti","Pacific/Majuro","Pacific/Wake","Pacific/Wallis"],"continentCode":"OC","continentName":"Oceania","countryName":"Kiribati","countryCode":"KI","mainCities":["Tarawa"],"rawOffsetInMinutes":720,"abbreviation":"GILT","rawFormat":"+12:00 Gilbert Islands Time - Tarawa"},{"name":"Asia/Kamchatka","alternativeName":"Kamchatka Time","group":["Asia/Anadyr","Asia/Kamchatka"],"continentCode":"EU","continentName":"Europe","countryName":"Russia","countryCode":"RU","mainCities":["Petropavlovsk-Kamchatsky","Yelizovo","Vilyuchinsk","Anadyr"],"rawOffsetInMinutes":720,"abbreviation":"PETT","rawFormat":"+12:00 Kamchatka Time - Petropavlovsk-Kamchatsky, Yelizovo, Vilyuchinsk, Anadyr"},{"name":"Pacific/Majuro","alternativeName":"Marshall Islands Time","group":["Pacific/Kwajalein","Pacific/Majuro","Kwajalein"],"continentCode":"OC","continentName":"Oceania","countryName":"Marshall Islands","countryCode":"MH","mainCities":["Majuro","Kwajalein"],"rawOffsetInMinutes":720,"abbreviation":"MHT","rawFormat":"+12:00 Marshall Islands Time - Majuro, Kwajalein"},{"name":"Pacific/Nauru","alternativeName":"Nauru Time","group":["Pacific/Nauru"],"continentCode":"OC","continentName":"Oceania","countryName":"Nauru","countryCode":"NR","mainCities":["Yaren"],"rawOffsetInMinutes":720,"abbreviation":"NRT","rawFormat":"+12:00 Nauru Time - Yaren"},{"name":"Pacific/Auckland","alternativeName":"New Zealand Time","group":["Pacific/Auckland","NZ","Antarctica/McMurdo","Antarctica/South_Pole"],"continentCode":"OC","continentName":"Oceania","countryName":"New Zealand","countryCode":"NZ","mainCities":["Auckland","Christchurch","Wellington","Manukau City"],"rawOffsetInMinutes":720,"abbreviation":"NZST","rawFormat":"+12:00 New Zealand Time - Auckland, Christchurch, Wellington, Manukau City"},{"name":"Antarctica/McMurdo","alternativeName":"New Zealand Time","group":["Antarctica/McMurdo"],"continentCode":"AN","continentName":"Antarctica","countryName":"Antarctica","countryCode":"AQ","mainCities":["McMurdo"],"rawOffsetInMinutes":720,"abbreviation":"NZST","rawFormat":"+12:00 New Zealand Time - McMurdo"},{"name":"Pacific/Funafuti","alternativeName":"Tuvalu Time","group":["Pacific/Funafuti"],"continentCode":"OC","continentName":"Oceania","countryName":"Tuvalu","countryCode":"TV","mainCities":["Funafuti"],"rawOffsetInMinutes":720,"abbreviation":"TVT","rawFormat":"+12:00 Tuvalu Time - Funafuti"},{"name":"Pacific/Wake","alternativeName":"Wake Island Time","group":["Pacific/Wake"],"continentCode":"OC","continentName":"Oceania","countryName":"United States Minor Outlying Islands","countryCode":"UM","mainCities":["Wake"],"rawOffsetInMinutes":720,"abbreviation":"WAKT","rawFormat":"+12:00 Wake Island Time - Wake"},{"name":"Pacific/Wallis","alternativeName":"Wallis & Futuna Time","group":["Pacific/Wallis"],"continentCode":"OC","continentName":"Oceania","countryName":"Wallis and Futuna","countryCode":"WF","mainCities":["Mata-Utu"],"rawOffsetInMinutes":720,"abbreviation":"WFT","rawFormat":"+12:00 Wallis & Futuna Time - Mata-Utu"},{"name":"Pacific/Chatham","alternativeName":"Chatham Time","group":["Pacific/Chatham","NZ-CHAT"],"continentCode":"OC","continentName":"Oceania","countryName":"New Zealand","countryCode":"NZ","mainCities":["Chatham"],"rawOffsetInMinutes":765,"abbreviation":"CHAST","rawFormat":"+12:45 Chatham Time - Chatham"},{"name":"Pacific/Kanton","alternativeName":"Phoenix Islands Time","group":["Pacific/Kanton","Pacific/Enderbury"],"continentCode":"OC","continentName":"Oceania","countryName":"Kiribati","countryCode":"KI","mainCities":["Kanton"],"rawOffsetInMinutes":780,"abbreviation":"PHOT","rawFormat":"+13:00 Phoenix Islands Time - Kanton"},{"name":"Pacific/Apia","alternativeName":"Samoa Time","group":["Pacific/Apia"],"continentCode":"OC","continentName":"Oceania","countryName":"Samoa","countryCode":"WS","mainCities":["Apia"],"rawOffsetInMinutes":780,"abbreviation":"SST","rawFormat":"+13:00 Samoa Time - Apia"},{"name":"Pacific/Fakaofo","alternativeName":"Tokelau Time","group":["Pacific/Fakaofo"],"continentCode":"OC","continentName":"Oceania","countryName":"Tokelau","countryCode":"TK","mainCities":["Fakaofo"],"rawOffsetInMinutes":780,"abbreviation":"TKT","rawFormat":"+13:00 Tokelau Time - Fakaofo"},{"name":"Pacific/Tongatapu","alternativeName":"Tonga Time","group":["Pacific/Tongatapu"],"continentCode":"OC","continentName":"Oceania","countryName":"Tonga","countryCode":"TO","mainCities":["Nuku‘alofa"],"rawOffsetInMinutes":780,"abbreviation":"TOT","rawFormat":"+13:00 Tonga Time - Nuku‘alofa"},{"name":"Pacific/Kiritimati","alternativeName":"Line Islands Time","group":["Pacific/Kiritimati"],"continentCode":"OC","continentName":"Oceania","countryName":"Kiribati","countryCode":"KI","mainCities":["Kiritimati"],"rawOffsetInMinutes":840,"abbreviation":"LINT","rawFormat":"+14:00 Line Islands Time - Kiritimati"}]`);
function Dw({
  alternativeName: t,
  mainCities: e,
  rawOffsetInMinutes: n,
  currentTimeOffsetInMinutes: a
}, { useCurrentOffset: i = !1 } = {}) {
  return `${ur(i ? a : n).padStart(
    6,
    "+"
  )} ${t} - ${e.join(", ")}`;
}
function ur(t) {
  const e = Math.abs(t), [n, a] = [
    Math.floor(e / 60),
    e % 60
  ].map((r) => r.toString().padStart(2, "0")), i = `${n}:${a}`;
  return `${t >= 0 ? "+" : "-"}${i}`;
}
const Iw = /^[A-Za-z_+-]{1,256}(:?\/[A-Za-z_+-]{1,256}(\/[A-Za-z_+-]{1,256})?)?$/, Ow = {
  year: 0,
  month: 1,
  day: 2,
  hour: 3,
  minute: 4,
  second: 5
};
function Rw(t) {
  return !!(t && t.match(Iw));
}
function xw(t, e) {
  const n = t.format(e).replace(/\u200E/g, ""), a = /(\d+)\/(\d+)\/(\d+),? (\d+):(\d+):(\d+)/.exec(n), [, i, r, o, s, u, c] = a;
  return [o, i, r, s, u, c];
}
function $w(t, e) {
  const n = t.formatToParts(e), a = [];
  for (let i = 0; i < n.length; i++) {
    const { type: r, value: o } = n[i], s = Ow[r];
    typeof s < "u" && (a[s] = parseInt(o, 10));
  }
  return a;
}
function Pw(t) {
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
function Fw(t) {
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
function Bw(t) {
  if (!Rw(t))
    return !1;
  const e = new Date(Date.now());
  let n;
  try {
    n = Pw(t);
  } catch {
    return !1;
  }
  const [a, i, r, o, s, u] = n.formatToParts ? $w(n, e) : xw(n, e), c = Fw({
    year: a,
    month: i,
    day: r,
    hour: o,
    minute: s,
    second: u,
    millisecond: 0
  });
  let d = +e;
  const h = d % 1e3;
  return d -= h >= 0 ? h : 1e3 + h, (c - d) / (60 * 1e3);
}
function zw(t) {
  return Nw.reduce(
    function(e, n) {
      const a = n.name, i = Bw(a);
      if (i === !1)
        return e;
      const r = {
        ...n,
        currentTimeOffsetInMinutes: i
      };
      return e.push({
        ...r,
        currentTimeFormat: Dw(r, {
          useCurrentOffset: !0
        })
      }), e;
    },
    []
  ).sort((e, n) => Lw(e, n) || cr(e.alternativeName, n.alternativeName) || cr(e.mainCities[0], n.mainCities[0]));
}
function Lw(t, e) {
  return t.currentTimeOffsetInMinutes - e.currentTimeOffsetInMinutes;
}
function cr(t, e) {
  return typeof t == "string" && typeof e == "string" ? t.localeCompare(e) : 0;
}
const Hw = ["data-widget-id"], Vw = {
  key: 0,
  class: "fu-empty"
}, jw = {
  key: 1,
  class: "fu-layout"
}, Uw = { class: "fu-info" }, Ww = { class: "fu-info__name" }, Yw = {
  key: 0,
  class: "fu-info__meta"
}, Gw = {
  key: 1,
  class: "fu-info__desc"
}, Kw = ["aria-expanded"], qw = { class: "fu-tz__label" }, Qw = {
  key: 0,
  class: "fu-tz__dropdown"
}, Zw = { class: "fu-tz__search-wrap" }, Jw = { class: "fu-tz__search-icon" }, Xw = {
  key: 0,
  class: "fu-tz__no-results"
}, e1 = ["onMouseenter", "onMousedown"], t1 = { class: "fu-tz__opt-offset" }, n1 = { class: "fu-tz__opt-name" }, a1 = { class: "fu-tz__opt-country" }, i1 = {
  key: 0,
  class: "fu-selected"
}, r1 = { class: "fu-selected__time" }, o1 = { class: "fu-selected__time" }, s1 = { class: "fu-right" }, l1 = {
  key: 0,
  class: "fu-slots"
}, u1 = { class: "fu-slots__header" }, c1 = { class: "fu-slots__heading" }, d1 = {
  key: 0,
  class: "fu-slots__loading"
}, f1 = {
  key: 1,
  class: "fu-slots__list"
}, m1 = ["onClick"], h1 = {
  key: 2,
  class: "fu-slots__empty"
}, v1 = /* @__PURE__ */ le({
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
      () => zw().map((I) => {
        const $ = I.mainCities?.[0] || I.name.split("/").pop()?.replace(/_/g, " ") || I.name, W = I.rawOffsetInMinutes ?? 0, ee = W >= 0 ? "+" : "-", pe = Math.abs(W), Se = String(Math.floor(pe / 60)).padStart(2, "0"), ye = String(pe % 60).padStart(2, "0"), Pe = `UTC${ee}${Se}:${ye}`;
        return {
          value: I.name,
          offset: Pe,
          city: $,
          country: "",
          searchIndex: [I.name, I.abbreviation, $, I.group, Pe].join(" ").toLowerCase()
        };
      })
    );
    function r() {
      try {
        return Intl.DateTimeFormat().resolvedOptions().timeZone || "UTC";
      } catch {
        return "UTC";
      }
    }
    const o = N(r()), s = N(!1), u = N(""), c = N(0), d = N(null), h = N(null), p = N(null), v = O(() => {
      const I = i.value.find(($) => $.value === o.value);
      return I ? `${I.offset} · ${I.city}` : o.value;
    }), y = O(() => {
      const I = u.value.trim().toLowerCase();
      return I ? i.value.filter(($) => $.searchIndex.includes(I)) : i.value;
    });
    async function g() {
      s.value = !s.value, s.value && (u.value = "", c.value = Math.max(
        0,
        y.value.findIndex((I) => I.value === o.value)
      ), await we(), h.value?.focus(), w());
    }
    function b(I) {
      I && (o.value = I.value, s.value = !1, u.value = "");
    }
    function C(I) {
      const $ = y.value.length;
      $ && (c.value = (c.value + I + $) % $, w());
    }
    function w() {
      we(() => {
        p.value?.children[c.value]?.scrollIntoView({ block: "nearest" });
      });
    }
    ve(y, () => {
      c.value = 0;
    });
    function k(I) {
      d.value && !d.value.contains(I.target) && (s.value = !1);
    }
    _e(() => document.addEventListener("mousedown", k)), Ae(() => document.removeEventListener("mousedown", k));
    const T = O(() => {
      const I = n.style || {}, $ = I.bgColor || "#ffffff", W = (I.bgOpacity ?? 100) / 100, ee = (te) => {
        const ie = parseInt(te, 16);
        return isNaN(ie) ? 255 : ie;
      }, pe = ee($.slice(1, 3)), Se = ee($.slice(3, 5)), ye = ee($.slice(5, 7)), Pe = [
        "none",
        "0 1px 4px rgba(0,0,0,0.07)",
        "0 2px 12px rgba(0,0,0,0.10)",
        "0 4px 20px rgba(0,0,0,0.13)",
        "0 8px 32px rgba(0,0,0,0.16)"
      ], Te = I.dayColor || "#4f46e5", F = (I.dayShape || "circle") === "circle";
      return {
        backgroundColor: `rgba(${pe},${Se},${ye},${W})`,
        "--widget-bg": `rgba(${pe},${Se},${ye},${W})`,
        borderRadius: `${I.borderRadius ?? 12}px`,
        boxShadow: Pe[Math.min(I.shadow ?? 2, 4)],
        "--sch-day-color": Te,
        "--sch-day-color-light": Te + "22",
        "--sch-day-color-mid": Te + "44",
        "--sch-day-radius": F ? "50%" : "10px",
        "--sch-day-size": F ? "32px" : "40px"
      };
    }), M = O(
      () => new Set(n.availableDates ?? [])
    ), x = O(
      () => [...M.value].map((I) => ({
        id: `dot-${I}`,
        date: I,
        display: "background",
        classNames: ["sch-avail-bg"]
      }))
    );
    function L() {
      return (/* @__PURE__ */ new Date()).toLocaleDateString("en-CA");
    }
    const K = N(null), G = N(null), V = N(null), Y = N(null), U = O(() => `cal-${n.eventTypeId}`);
    ve(K, () => {
      G.value = null;
    }), ve(
      () => n.slots,
      () => {
        G.value = null;
      }
    ), ve(
      () => n.eventTypeId,
      () => {
        K.value = null, G.value = null, o.value = r();
      }
    );
    function R() {
      K.value = null, G.value = null, setTimeout(() => Y.value?.getApi?.()?.updateSize(), 260);
    }
    const S = O(() => ({
      plugins: [ow, Mw],
      initialView: "dayGridMonth",
      headerToolbar: { left: "prev", center: "title", right: "next" },
      height: "auto",
      fixedWeekCount: !1,
      showNonCurrentDates: !1,
      events: x.value,
      datesSet({ view: I }) {
        const $ = I.currentStart;
        a("month-change", { year: $.getFullYear(), month: $.getMonth() + 1 });
      },
      dayCellClassNames({ date: I }) {
        const $ = [
          I.getFullYear(),
          String(I.getMonth() + 1).padStart(2, "0"),
          String(I.getDate()).padStart(2, "0")
        ].join("-"), W = $ < L(), ee = [];
        return M.value.has($) ? ee.push(W ? "sch-day--past" : "sch-day--available") : ee.push("sch-day--past"), $ === K.value && ee.push("sch-day--selected"), ee;
      },
      dateClick({ dateStr: I }) {
        I < L() || M.value.has(I) && (K.value = I, a("date-select", { date: I }), setTimeout(() => Y.value?.getApi?.()?.updateSize(), 260));
      },
      selectable: !1,
      editable: !1
    }));
    function E() {
      G.value && (V.value = G.value, a("update", { bookedSlot: G.value }));
    }
    function D(I) {
      if (!I) return "";
      const [$, W, ee] = I.split("-").map(Number);
      return new Date($, W - 1, ee).toLocaleDateString("en-GB", {
        weekday: "long",
        day: "numeric",
        month: "long"
      });
    }
    const q = O(() => G.value?.start ? new Date(G.value.start).toLocaleDateString("en-GB", {
      weekday: "long",
      day: "numeric",
      month: "long"
    }) : D(K.value || ""));
    function Q(I, $) {
      if (!I) return "";
      try {
        return new Date(I).toLocaleTimeString("en-US", {
          timeZone: $ || "UTC",
          hour: "numeric",
          minute: "2-digit",
          hour12: !0
        });
      } catch {
        return "";
      }
    }
    function P(I) {
      return I?.start ? Q(I.start, o.value) : "";
    }
    function B(I) {
      return I?.end ? Q(I.end, o.value) : "";
    }
    return (I, $) => (l(), f("div", {
      class: "fu-widget",
      "data-widget-id": t.widgetId,
      style: ne(T.value)
    }, [
      t.eventTypeId ? (l(), f("div", jw, [
        m("div", Uw, [
          m("p", Ww, _(t.eventTypeName || "Event"), 1),
          t.timezone ? (l(), f("div", Yw, [
            $[6] || ($[6] = m("span", { class: "fu-info__icon" }, "🌐", -1)),
            m("span", null, _(t.timezone), 1)
          ])) : A("", !0),
          t.description ? (l(), f("p", Gw, _(t.description), 1)) : A("", !0),
          m("div", {
            class: "fu-tz",
            ref_key: "tzRoot",
            ref: d
          }, [
            m("button", {
              class: "fu-tz__trigger",
              type: "button",
              onClick: g,
              "aria-expanded": s.value
            }, [
              $[7] || ($[7] = m("span", { class: "fu-tz__globe" }, "🌐", -1)),
              m("span", qw, _(v.value), 1),
              m("span", {
                class: Z(["fu-tz__caret", { "fu-tz__caret--open": s.value }])
              }, "▾", 2)
            ], 8, Kw),
            J(He, { name: "fu-tz-pop" }, {
              default: fe(() => [
                s.value ? (l(), f("div", Qw, [
                  m("div", Zw, [
                    m("span", Jw, [
                      J(oe(el), { size: 14 })
                    ]),
                    Ve(m("input", {
                      ref_key: "tzInput",
                      ref: h,
                      "onUpdate:modelValue": $[0] || ($[0] = (W) => u.value = W),
                      class: "fu-tz__search",
                      placeholder: "Search city or country…",
                      autocomplete: "off",
                      spellcheck: "false",
                      onKeydown: [
                        $[1] || ($[1] = xe(ue((W) => C(1), ["prevent"]), ["down"])),
                        $[2] || ($[2] = xe(ue((W) => C(-1), ["prevent"]), ["up"])),
                        $[3] || ($[3] = xe(ue((W) => b(y.value[c.value]), ["prevent"]), ["enter"])),
                        $[4] || ($[4] = xe((W) => s.value = !1, ["esc"]))
                      ]
                    }, null, 544), [
                      [Xe, u.value]
                    ])
                  ]),
                  m("ul", {
                    class: "fu-tz__list",
                    ref_key: "tzList",
                    ref: p
                  }, [
                    y.value.length ? A("", !0) : (l(), f("li", Xw, "No results")),
                    (l(!0), f(j, null, re(y.value, (W, ee) => (l(), f("li", {
                      key: W.value,
                      class: Z(["fu-tz__option", {
                        "fu-tz__option--active": W.value === o.value,
                        "fu-tz__option--hi": ee === c.value
                      }]),
                      onMouseenter: (pe) => c.value = ee,
                      onMousedown: ue((pe) => b(W), ["prevent"])
                    }, [
                      m("span", t1, _(W.offset), 1),
                      m("span", n1, _(W.city), 1),
                      m("span", a1, _(W.country), 1)
                    ], 42, e1))), 128))
                  ], 512)
                ])) : A("", !0)
              ]),
              _: 1
            })
          ], 512),
          J(He, { name: "fu-slide" }, {
            default: fe(() => [
              G.value ? (l(), f("div", i1, [
                $[10] || ($[10] = m("div", { class: "fu-selected__label" }, "Selected time", -1)),
                m("div", r1, [
                  $[8] || ($[8] = m("span", null, "📅", -1)),
                  m("span", null, _(q.value), 1)
                ]),
                m("div", o1, [
                  $[9] || ($[9] = m("span", null, "🕐", -1)),
                  m("span", null, _(P(G.value)) + " – " + _(B(G.value)), 1)
                ])
              ])) : A("", !0)
            ]),
            _: 1
          })
        ]),
        m("div", s1, [
          (l(), X(oe(MC), {
            key: U.value,
            ref_key: "calRef",
            ref: Y,
            options: S.value,
            class: "fu-fc"
          }, null, 8, ["options"])),
          J(He, { name: "fu-slide-right" }, {
            default: fe(() => [
              K.value ? (l(), f("div", l1, [
                m("div", u1, [
                  m("p", c1, _(D(K.value)), 1),
                  m("button", {
                    class: "fu-slots__close",
                    onClick: ue(R, ["stop"])
                  }, "✕")
                ]),
                t.slotsLoading ? (l(), f("div", d1, [...$[11] || ($[11] = [
                  m("span", { class: "fu-slots__spinner" }, null, -1)
                ])])) : t.slots && t.slots.length ? (l(), f("div", f1, [
                  (l(!0), f(j, null, re(t.slots, (W) => (l(), f("div", {
                    key: W.id,
                    class: "fu-slot"
                  }, [
                    m("button", {
                      class: Z(["fu-slot__time", { "fu-slot__time--chosen": G.value?.id === W.id }]),
                      onClick: ue((ee) => G.value = W, ["stop"])
                    }, _(P(W)), 11, m1),
                    J(He, { name: "fu-confirm-pop" }, {
                      default: fe(() => [
                        G.value?.id === W.id ? (l(), f("button", {
                          key: 0,
                          class: Z(["fu-slot__confirm", { "fu-slot__confirm--done": V.value?.id === W.id }]),
                          onClick: ue(E, ["stop"])
                        }, _(V.value?.id === W.id ? "✓ Selected" : "Confirm"), 3)) : A("", !0)
                      ]),
                      _: 2
                    }, 1024)
                  ]))), 128))
                ])) : (l(), f("p", h1, "No availability"))
              ])) : A("", !0)
            ]),
            _: 1
          })
        ])
      ])) : (l(), f("div", Vw, [...$[5] || ($[5] = [
        m("span", { class: "fu-empty__icon" }, "📅", -1),
        m("p", { class: "fu-empty__title" }, "No event type selected", -1),
        m("p", { class: "fu-empty__sub" }, "Select an event type from the settings panel", -1)
      ])]))
    ], 12, Hw));
  }
}), bs = /* @__PURE__ */ ae(v1, [["__scopeId", "data-v-54e3bb3e"]]), Cs = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: bs
}, Symbol.toStringTag, { value: "Module" })), p1 = {
  key: 0,
  class: "fu-embed-error-state"
}, g1 = {
  key: 0,
  class: "fu-embed-success"
}, y1 = { class: "fu-embed-success__sub" }, b1 = {
  key: 1,
  class: "fu-panel"
}, C1 = {
  key: 2,
  class: "fu-panel"
}, w1 = { class: "fu-form-slot-bar" }, A1 = { class: "fu-form-slot-bar__date" }, _1 = { class: "fu-embed-questions" }, k1 = {
  key: 0,
  class: "fu-embed-error"
}, S1 = ["disabled"], T1 = { key: 0 }, E1 = {
  key: 1,
  class: "fu-embed-submit__spinner"
}, M1 = /* @__PURE__ */ le({
  __name: "FuEmbedRenderer",
  props: {
    document: {}
  },
  emits: ["submit"],
  setup(t, { emit: e }) {
    const n = t, a = e;
    function i(M) {
      const x = [];
      for (const L of M?.pages ?? [])
        for (const K of L?.blocks ?? [])
          for (const G of K?.columns ?? [])
            for (const V of G?.widgets ?? []) x.push(V);
      return x;
    }
    const r = O(() => i(n.document)), o = O(
      () => r.value.find((M) => M.type === "scheduler")
    ), s = O(
      () => r.value.filter((M) => M.type === "question")
    ), u = N("idle"), c = $s(null);
    function d(M) {
      c.value = M.bookedSlot, u.value = s.value.length ? "form" : "submitted";
    }
    function h() {
      u.value = "idle", p.value = {}, g.value = /* @__PURE__ */ new Set();
    }
    const p = N({});
    function v(M, x) {
      p.value = { ...p.value, [M]: x.value }, g.value.delete(M);
    }
    function y(M) {
      const x = M.props.conditions ?? [];
      if (!x.length) return !0;
      const L = M.props.conditionLogic ?? "all", K = x.map((G) => {
        const V = p.value[G.sourceWidgetId];
        switch (G.operator) {
          case "equals":
            return V === G.value;
          case "not_equals":
            return V !== G.value;
          case "contains":
            return Array.isArray(V) ? V.includes(G.value) : String(V ?? "").includes(G.value);
          default:
            return !0;
        }
      });
      return L === "all" ? K.every(Boolean) : K.some(Boolean);
    }
    const g = N(/* @__PURE__ */ new Set());
    function b() {
      const M = /* @__PURE__ */ new Set();
      for (const x of s.value) {
        if (!y(x) || !x.props.required) continue;
        const L = p.value[x.id];
        (L == null || L === "" || Array.isArray(L) && !L.length) && M.add(x.id);
      }
      return g.value = M, M.size === 0;
    }
    const C = N(!1);
    async function w() {
      if (!(!c.value || !b())) {
        C.value = !0;
        try {
          a("submit", { slot: c.value, answers: p.value }), u.value = "submitted";
        } finally {
          C.value = !1;
        }
      }
    }
    const k = O(() => c.value?.date ? new Date(c.value.date).toLocaleString("en-GB", {
      weekday: "long",
      day: "numeric",
      month: "long",
      hour: "numeric",
      minute: "2-digit",
      hour12: !0
    }) : ""), T = O(() => {
      const M = n.document?.meta?.theme?.brandColor ?? "#4f46e5";
      return {
        "--embed-brand": M,
        "--embed-brand-light": M + "18",
        "--embed-brand-mid": M + "44"
      };
    });
    return (M, x) => (l(), f("div", {
      class: "fu-embed",
      style: ne(T.value)
    }, [
      o.value ? (l(), f(j, { key: 1 }, [
        u.value === "submitted" ? (l(), f("div", g1, [
          x[1] || (x[1] = m("div", { class: "fu-embed-success__icon" }, "✓", -1)),
          x[2] || (x[2] = m("p", { class: "fu-embed-success__title" }, "You're booked in", -1)),
          m("p", y1, _(k.value), 1)
        ])) : u.value === "idle" ? (l(), f("div", b1, [
          J(bs, xt(o.value.props, {
            widgetId: o.value.id,
            onUpdate: d
          }), null, 16, ["widgetId"])
        ])) : u.value === "form" ? (l(), f("div", C1, [
          m("div", w1, [
            m("button", {
              class: "fu-form-slot-bar__back",
              onClick: h
            }, [...x[3] || (x[3] = [
              m("span", null, "←", -1),
              ce(" Change time ", -1)
            ])]),
            m("span", A1, _(k.value), 1)
          ]),
          m("div", _1, [
            (l(!0), f(j, null, re(s.value, (L) => (l(), f(j, {
              key: L.id
            }, [
              J(Pr, xt({ ref_for: !0 }, L.props, {
                widgetId: L.id,
                isVisible: y(L),
                class: { "fu-embed-question--error": g.value.has(L.id) },
                onUpdate: (K) => v(L.id, K)
              }), null, 16, ["widgetId", "isVisible", "class", "onUpdate"]),
              g.value.has(L.id) ? (l(), f("p", k1, "This field is required")) : A("", !0)
            ], 64))), 128))
          ]),
          m("button", {
            class: "fu-embed-submit",
            disabled: C.value,
            onClick: w
          }, [
            C.value ? (l(), f("span", E1)) : (l(), f("span", T1, "Confirm booking"))
          ], 8, S1)
        ])) : A("", !0)
      ], 64)) : (l(), f("div", p1, [...x[0] || (x[0] = [
        m("div", { class: "fu-embed-error-state__icon" }, "📅", -1),
        m("p", { class: "fu-embed-error-state__title" }, "No scheduler found", -1),
        m("p", { class: "fu-embed-error-state__sub" }, " This document doesn't contain a booking widget. ", -1)
      ])]))
    ], 4));
  }
}), N1 = /* @__PURE__ */ ae(M1, [["__scopeId", "data-v-50151cce"]]), D1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: N1
}, Symbol.toStringTag, { value: "Module" })), I1 = {
  key: 0,
  class: "service-card__image"
}, O1 = ["src"], R1 = { class: "service-card__content" }, x1 = ["innerHTML"], $1 = ["innerHTML"], P1 = { key: 0 }, F1 = { key: 1 }, B1 = {
  key: 2,
  class: "service-card__footer"
}, z1 = /* @__PURE__ */ le({
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
    const n = e, a = t, i = O(() => a.selectionMode !== "view"), r = O(() => i.value && a.widgetDisplay?.showServicePrice !== !1), o = O(() => {
      const d = String(a.service.unitPrice || "£").match(/[^0-9.,]/)?.[0] ?? "£", h = parseFloat(a.service.quantity) || 0, p = parseFloat(String(a.service.unitPrice || "").replace(/[^0-9.]/g, "")) || 0;
      return `${d}${(h * p).toLocaleString()}`;
    }), s = O(() => {
      const d = a.itemStyle ?? {};
      return {
        background: d.bgColor ?? "#fff",
        borderRadius: `${d.borderRadius ?? 12}px`,
        boxShadow: d.shadow ? `0 ${d.shadow / 2}px ${d.shadow}px rgba(0,0,0,0.12)` : void 0
      };
    }), u = O(() => ({
      fontFamily: a.pricingStyle?.fontFamily,
      fontSize: a.pricingStyle?.fontSize ? `${a.pricingStyle.fontSize}px` : void 0,
      color: a.pricingStyle?.color,
      fontWeight: a.pricingStyle?.bold ? "700" : void 0
    }));
    function c() {
      i.value && n("toggle-select", a.service._id);
    }
    return (d, h) => (l(), f("div", {
      class: Z(["service-card", `service-card--${t.layout}`]),
      style: ne(s.value)
    }, [
      t.widgetDisplay.showImage !== !1 ? (l(), f("div", I1, [
        t.service.image ? (l(), f("img", {
          key: 0,
          src: t.service.image
        }, null, 8, O1)) : A("", !0)
      ])) : A("", !0),
      m("div", R1, [
        m("div", {
          class: "service-card__title",
          innerHTML: t.service.name
        }, null, 8, x1),
        t.widgetDisplay.showDescription !== !1 ? (l(), f("div", {
          key: 0,
          class: "service-card__desc",
          innerHTML: t.service.description
        }, null, 8, $1)) : A("", !0),
        t.widgetDisplay.showQuantity !== !1 || t.widgetDisplay.showUnitPrice !== !1 ? (l(), f("div", {
          key: 1,
          class: "service-card__pricing",
          style: ne(u.value)
        }, [
          t.widgetDisplay.showQuantity !== !1 ? (l(), f("span", P1, _(t.service.quantity) + " " + _(t.service.unit), 1)) : A("", !0),
          t.widgetDisplay.showUnitPrice !== !1 ? (l(), f("span", F1, _(t.service.unitPrice), 1)) : A("", !0)
        ], 4)) : A("", !0),
        t.widgetDisplay.showServicePrice !== !1 ? (l(), f("div", B1, [
          m("div", {
            class: "service-card__total",
            style: ne(u.value)
          }, _(o.value), 5),
          r.value ? (l(), f("button", {
            key: 0,
            class: Z(["service-card__button", { "service-card__button--selected": t.selected }]),
            onClick: c
          }, _(t.selected ? t.service.selectedButtonText || "Selected" : t.service.buttonText || "Select"), 3)) : A("", !0)
        ])) : A("", !0)
      ])
    ], 6));
  }
}), ws = /* @__PURE__ */ ae(z1, [["__scopeId", "data-v-636b3791"]]), L1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: ws
}, Symbol.toStringTag, { value: "Module" })), H1 = /* @__PURE__ */ le({
  __name: "ServiceRenderer",
  props: {
    widget: {}
  },
  emits: ["action"],
  setup(t, { emit: e }) {
    const n = e, a = t, i = O(() => a.widget.props.layout ?? "row"), r = O(() => a.widget.props.services ?? []), o = O(() => a.widget.props.widgetDisplay ?? {}), s = O(() => a.widget.props.pricingStyle ?? {}), u = O(() => a.widget.props.itemStyle ?? {}), c = O(() => a.widget.props.selectionMode ?? "view"), d = O(() => a.widget.props.selectionRequired ?? !1), h = O(() => a.widget.props.selectedServiceIds ?? []);
    function p(v) {
      if (console.log("[handleSelect] clicked service id:", v), console.log(" selectionMode:", c.value), console.log(" current selectedServiceIds:", h.value), c.value === "view") {
        console.log("⛔ view mode — selection blocked");
        return;
      }
      let y = [...h.value];
      c.value === "single" ? (console.log(" single-select mode"), y.includes(v) ? (console.log("🔁 already selected → clearing selection"), y = []) : (console.log("➕ selecting only this item"), y = [v])) : (console.log(" multiple-select mode"), y.includes(v) ? (console.log("➖ removing from selection"), y = y.filter((g) => g !== v)) : (console.log("➕ adding to selection"), y = [...y, v])), console.log("final selection:", y), a.widget.props.selectedServiceIds = y, n("action", {
        type: "service-select",
        selectedServiceIds: y
      });
    }
    return (v, y) => (l(), f("div", {
      class: Z(["service-renderer", `service-renderer--${i.value}`])
    }, [
      (l(!0), f(j, null, re(r.value, (g) => (l(), X(ws, {
        key: g._id,
        service: g,
        layout: i.value,
        widgetDisplay: o.value,
        pricingStyle: s.value,
        itemStyle: u.value,
        selected: h.value.includes(g._id),
        selectionMode: c.value,
        selectionRequired: d.value,
        onToggleSelect: p
      }, null, 8, ["service", "layout", "widgetDisplay", "pricingStyle", "itemStyle", "selected", "selectionMode", "selectionRequired"]))), 128))
    ], 2));
  }
}), V1 = /* @__PURE__ */ ae(H1, [["__scopeId", "data-v-d67ca331"]]), As = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: V1
}, Symbol.toStringTag, { value: "Module" })), j1 = ["innerHTML"], U1 = /* @__PURE__ */ le({
  __name: "TextRenderer",
  props: {
    content: {}
  },
  setup(t) {
    return (e, n) => (l(), f("div", {
      class: "fu-text-widget",
      innerHTML: t.content
    }, null, 8, j1));
  }
}), W1 = /* @__PURE__ */ ae(U1, [["__scopeId", "data-v-25719c05"]]), _s = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: W1
}, Symbol.toStringTag, { value: "Module" })), Y1 = {
  key: 0,
  class: "fu-empty-state"
}, G1 = ["src"], K1 = /* @__PURE__ */ le({
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
      let r = e.src.trim();
      return /^https?:\/\//.test(r) || (r = "https://" + r), r.includes("youtu.be/") ? `https://www.youtube.com/embed/${r.split("youtu.be/")[1]?.split("?")[0]}` : r.includes("youtube.com/watch?v=") ? `https://www.youtube.com/embed/${new URL(r).searchParams.get("v")}` : r.includes("vimeo.com/") ? `https://player.vimeo.com/video/${r.split("vimeo.com/")[1]?.split("?")[0]}` : r.includes("loom.com/share/") ? `https://www.loom.com/embed/${r.split("loom.com/share/")[1]?.split("?")[0]}` : r;
    }), a = O(() => ({
      backgroundColor: n.value ? "transparent" : e.backgroundColor || "#f5f7ff",
      borderRadius: `${e.borderRadius ?? 8}px`,
      border: "1px solid #e5e7eb",
      width: e.contentWidth === "sm" ? "60%" : e.contentWidth === "md" ? "80%" : (e.contentWidth === "lg", "100%"),
      margin: "0 auto",
      overflow: "hidden"
    })), i = O(() => {
      const r = e.aspectRatio || "16:9", [o, s] = r.split(":").map(Number);
      return {
        position: "relative",
        width: "100%",
        paddingTop: `${o && s ? s / o * 100 : 56.25}%`
      };
    });
    return (r, o) => (l(), f("div", {
      class: "fu-video-widget",
      style: ne(a.value)
    }, [
      n.value ? (l(), f("div", {
        key: 1,
        class: "fu-video-frame",
        style: ne(i.value)
      }, [
        m("iframe", {
          src: n.value,
          frameborder: "0",
          allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen",
          allowfullscreen: ""
        }, null, 8, G1)
      ], 4)) : (l(), f("div", Y1, [
        J(oe(wr), { size: 28 }),
        o[0] || (o[0] = m("span", null, "No video available", -1))
      ]))
    ], 4));
  }
}), q1 = /* @__PURE__ */ ae(K1, [["__scopeId", "data-v-f6e4e3fe"]]), ks = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: q1
}, Symbol.toStringTag, { value: "Module" })), Q1 = {
  key: 0,
  class: "fu-filter-dropdown__header"
}, Z1 = { class: "fu-filter-dropdown__title" }, J1 = { class: "fu-filter-dropdown__body" }, X1 = { class: "fu-filter-dropdown__footer" }, eA = /* @__PURE__ */ le({
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
    const n = t, a = e, i = N(!1), r = N(null), o = N(null), s = N({
      top: "0px",
      left: "0px"
    }), u = O(() => ({
      width: typeof n.width == "number" ? `${n.width}px` : n.width,
      maxWidth: typeof n.maxWidth == "number" ? `${n.maxWidth}px` : n.maxWidth
    }));
    ve(
      () => n.isOpen,
      (b) => {
        typeof b == "boolean" && (i.value = b, b ? (a("open"), we(v)) : a("close"));
      }
    );
    function c(b) {
      b?.stopPropagation();
      const C = !i.value;
      C && document.dispatchEvent(new CustomEvent("close-all-dropdowns")), i.value = C, a("update:isOpen", C), C ? (a("open"), we(v)) : a("close");
    }
    function d() {
      a("apply", n.payload), p();
    }
    function h() {
      a("cancel"), p();
    }
    function p() {
      i.value && (i.value = !1, a("update:isOpen", !1), a("close"));
    }
    function v() {
      if (!r.value || !o.value) return;
      const b = r.value.getBoundingClientRect(), C = b.bottom + window.scrollY + 8;
      let w = b.left + window.scrollX;
      n.align === "center" && (w += b.width / 2 - o.value.offsetWidth / 2), n.align === "right" && (w = b.right - o.value.offsetWidth + window.scrollX), s.value = {
        position: "absolute",
        top: `${C}px`,
        left: `${w}px`,
        zIndex: 2e3
      };
    }
    function y(b) {
      i.value && r.value && !r.value.contains(b.target) && o.value && !o.value.contains(b.target) && p();
    }
    function g() {
      p();
    }
    return _e(() => {
    }), Ae(() => {
      document.removeEventListener("click", y), document.removeEventListener("close-all-dropdowns", g);
    }), (b, C) => (l(), f("div", {
      class: "fu-filter-dropdown",
      ref_key: "dropdown",
      ref: r
    }, [
      m("div", {
        class: "fu-filter-dropdown__trigger",
        onClick: c
      }, [
        se(b.$slots, "trigger", {}, void 0, !0)
      ]),
      (l(), X(De, { to: "body" }, [
        J(He, { name: "fade" }, {
          default: fe(() => [
            i.value ? (l(), f("div", {
              key: 0,
              ref_key: "menuRef",
              ref: o,
              class: Z(["fu-filter-dropdown__menu", [`fu-filter-dropdown__menu--${t.align}`]]),
              style: ne([s.value, u.value])
            }, [
              t.title ? (l(), f("div", Q1, [
                m("span", Z1, _(t.title), 1),
                J($e, {
                  size: "sm",
                  variant: "subtle",
                  icon: oe(Ct),
                  onClick: p
                }, null, 8, ["icon"])
              ])) : A("", !0),
              m("div", J1, [
                se(b.$slots, "content", {}, void 0, !0)
              ]),
              m("div", X1, [
                se(b.$slots, "footer", {}, () => [
                  J(Ee, {
                    variant: "subtle",
                    size: "sm",
                    text: "Cancel",
                    onClick: h
                  }),
                  J(Ee, {
                    variant: "solid",
                    size: "sm",
                    text: "Apply",
                    onClick: d
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
}), tA = /* @__PURE__ */ ae(eA, [["__scopeId", "data-v-6439f409"]]), nA = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: tA
}, Symbol.toStringTag, { value: "Module" })), aA = {}, iA = { class: "fu-smart-header" };
function rA(t, e) {
  return l(), f("header", iA, [
    se(t.$slots, "default", {}, void 0, !0)
  ]);
}
const oA = /* @__PURE__ */ ae(aA, [["render", rA], ["__scopeId", "data-v-317a0cd5"]]), sA = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: oA
}, Symbol.toStringTag, { value: "Module" })), lA = { class: "fu-trash-icon" }, uA = /* @__PURE__ */ le({
  __name: "FusionTrashIcon",
  setup(t) {
    return (e, n) => (l(), f("div", lA, [
      J(oe(Ta), { size: 18 })
    ]));
  }
}), cA = /* @__PURE__ */ ae(uA, [["__scopeId", "data-v-7cafc569"]]), dA = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: cA
}, Symbol.toStringTag, { value: "Module" })), fA = { class: "fu-activity-item" }, mA = { class: "fu-activity-icon" }, hA = { class: "fu-activity-content" }, vA = { class: "fu-activity-header" }, pA = { class: "fu-activity-title" }, gA = { class: "fu-activity-status" }, yA = { class: "fu-activity-text" }, bA = { class: "fu-activity-subtitle" }, CA = { class: "fu-activity-footer" }, wA = { class: "fu-activity-timestamp" }, AA = { class: "fu-activity-user" }, _A = /* @__PURE__ */ le({
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
    return (r, o) => (l(), f("div", fA, [
      m("div", mA, [
        (l(), X(ge(t.icon), {
          class: "fu-activity-icon__svg",
          size: 18
        }))
      ]),
      o[0] || (o[0] = m("div", { class: "fu-activity-line" }, null, -1)),
      m("div", hA, [
        m("div", {
          class: Z(["fu-activity-card", { "is-clickable": t.clickable }]),
          onClick: i
        }, [
          m("div", vA, [
            m("div", pA, [
              m("span", gA, [
                J(oe(br), {
                  class: "fu-activity-status__icon",
                  size: 16
                })
              ]),
              m("p", yA, _(t.title), 1)
            ])
          ]),
          m("p", bA, _(t.fileName), 1),
          m("div", CA, [
            m("span", wA, _(t.timestamp), 1),
            m("div", AA, [
              J(Ge, {
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
}), kA = /* @__PURE__ */ ae(_A, [["__scopeId", "data-v-3de71024"]]), SA = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: kA
}, Symbol.toStringTag, { value: "Module" })), TA = { class: "fu-attachment-left flex flex--gap-md flex--align-center" }, EA = { class: "fu-attachment-preview" }, MA = ["src", "alt"], NA = { class: "fu-attachment-info flex flex--column" }, DA = { class: "fu-attachment-title" }, IA = { class: "fu-attachment-meta" }, OA = { class: "fu-attachment-right flex flex--align-center flex--gap-md" }, RA = { class: "flex flex--column flex--align-center" }, xA = { class: "fu-attachment-time" }, $A = /* @__PURE__ */ le({
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
    const r = O(() => /\.(png|jpe?g|gif|webp|svg)$/i.test(n.fileName)), o = O(() => /\.(mp4|mov|avi|webm)$/i.test(n.fileName));
    return (s, u) => (l(), f("div", {
      class: "fu-attachment-item",
      role: "button",
      tabindex: "0",
      onClick: i,
      onKeypress: xe(i, ["enter"])
    }, [
      m("div", TA, [
        m("div", EA, [
          r.value ? (l(), f("img", {
            key: 0,
            src: t.fileUrl,
            alt: t.fileName,
            class: "fu-attachment-thumbnail"
          }, null, 8, MA)) : o.value ? (l(), X(oe(wr), {
            key: 1,
            class: "fu-attachment-icon",
            size: 20
          })) : (l(), X(oe(qs), {
            key: 2,
            class: "fu-attachment-icon",
            size: 20
          }))
        ]),
        m("div", NA, [
          m("span", DA, _(t.fileName), 1),
          m("span", IA, _(t.fileSize), 1)
        ])
      ]),
      m("div", OA, [
        m("div", RA, [
          J(Ge, {
            src: t.userAvatar || void 0,
            name: t.userName,
            alt: t.userName,
            size: "xs",
            "show-status": !1
          }, null, 8, ["src", "name", "alt"]),
          m("span", xA, _(t.timestamp), 1)
        ]),
        t.actions?.length ? (l(), f("div", {
          key: 0,
          class: "fu-attachment-actions",
          onClick: u[0] || (u[0] = ue(() => {
          }, ["stop"]))
        }, [
          J(Rn, {
            actions: t.actions,
            align: "right"
          }, {
            trigger: fe(() => [
              J($e, {
                icon: oe(Sa),
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
}), PA = /* @__PURE__ */ ae($A, [["__scopeId", "data-v-c5d821de"]]), FA = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: PA
}, Symbol.toStringTag, { value: "Module" })), BA = { class: "fu-note-header" }, zA = { class: "fu-note-title" }, LA = ["innerHTML"], HA = { class: "fu-note-actions" }, VA = { class: "fu-note-footer" }, jA = { class: "fu-note-owner" }, UA = { class: "fu-note-date" }, WA = /* @__PURE__ */ le({
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
    const e = N(!1);
    return (n, a) => (l(), f("div", {
      class: "fu-note-card",
      onMouseenter: a[0] || (a[0] = (i) => e.value = !0),
      onMouseleave: a[1] || (a[1] = (i) => e.value = !1),
      onClick: a[2] || (a[2] = (i) => n.$emit("open", t.id))
    }, [
      m("div", BA, [
        m("div", zA, [
          m("h4", null, _(t.title), 1),
          t.content ? (l(), f("div", {
            key: 0,
            class: "fu-note-content",
            innerHTML: t.content
          }, null, 8, LA)) : A("", !0)
        ]),
        m("div", HA, [
          J(Rn, {
            actions: t.actions,
            align: "right"
          }, {
            trigger: fe(() => [
              J($e, {
                icon: oe(Sa),
                variant: "ghost",
                size: "sm",
                class: "fu-action-trigger"
              }, null, 8, ["icon"])
            ]),
            _: 1
          }, 8, ["actions"])
        ])
      ]),
      m("div", VA, [
        m("div", jA, [
          J(Ge, {
            src: t.ownerAvatar || void 0,
            name: t.ownerName,
            alt: t.ownerName,
            size: "xs",
            "show-status": !1
          }, null, 8, ["src", "name", "alt"])
        ]),
        m("span", UA, _(t.date), 1)
      ])
    ], 32));
  }
}), YA = /* @__PURE__ */ ae(WA, [["__scopeId", "data-v-5f4f6caa"]]), GA = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: YA
}, Symbol.toStringTag, { value: "Module" })), KA = { class: "fu-task-list" }, qA = { class: "fu-task-left flex flex--gap-xl flex--align-center" }, QA = { class: "flex flex--column flex--gap-lg w-100" }, ZA = { class: "fu-task-title" }, JA = { class: "fu-task-meta" }, XA = { class: "fu-task-priority" }, e_ = { class: "fu-priority-label" }, t_ = { class: "fu-task-owner" }, n_ = { class: "fu-task-actions" }, a_ = /* @__PURE__ */ le({
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
        icon: Cr,
        onClick: () => a("edit", n.id)
      },
      {
        label: "Delete Task",
        icon: Ta,
        onClick: () => a("delete", n.id)
      }
    ]);
    return (r, o) => (l(), f("div", KA, [
      m("div", qA, [
        m("div", QA, [
          m("div", ZA, _(t.title), 1),
          m("div", JA, [
            m("div", XA, [
              m("span", {
                class: "fu-priority-dot",
                style: ne({ backgroundColor: t.priorityColor || "#999" })
              }, null, 4),
              m("span", e_, _(t.priorityLabel), 1)
            ]),
            o[0] || (o[0] = m("span", { class: "fu-dot" }, null, -1)),
            m("div", t_, [
              J(Ge, {
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
      m("div", n_, [
        J(Rn, {
          actions: i.value,
          content: !1,
          align: "right"
        }, {
          trigger: fe(() => [
            J($e, {
              icon: oe(Sa),
              variant: "subtle",
              size: "sm"
            }, null, 8, ["icon"])
          ]),
          _: 1
        }, 8, ["actions"])
      ])
    ]));
  }
}), i_ = /* @__PURE__ */ ae(a_, [["__scopeId", "data-v-36cc95a2"]]), r_ = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: i_
}, Symbol.toStringTag, { value: "Module" })), o_ = { class: "fu-kanban scrollbar__control customScrollBar" }, s_ = ["draggable", "onDragstart", "onDrop"], l_ = { class: "fu-kanban__column-header" }, u_ = { class: "flex flex--center flex--space" }, c_ = { class: "fu-kanban__column-title" }, d_ = ["title"], f_ = { class: "fu-kanban__header-right" }, m_ = ["title", "onClick"], h_ = { class: "flex flex--center flex--gap-sm" }, v_ = { class: "fu-kanban__count" }, p_ = {
  key: 0,
  class: "fu-kanban__edit-body"
}, g_ = ["onDragover", "onDrop"], y_ = ["onDragstart", "onDrop", "onClick"], b_ = { class: "fu-kanban__card-header" }, C_ = { class: "fu-kanban__card-body" }, w_ = {
  key: 0,
  class: "fu-kanban__empty"
}, A_ = ["onClick"], __ = /* @__PURE__ */ le({
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
    const n = t, a = e, i = n.addItemButtonText || "+ Add Item", r = n.addColumnButtonText || "+ Add Stage", o = N(JSON.parse(JSON.stringify(n.columns || []))), s = N(null), u = N(null), c = N(null);
    ve(
      () => n.columns,
      (k) => {
        o.value = JSON.parse(JSON.stringify(k));
      },
      { deep: !0 }
    );
    function d(k, T) {
      s.value = { fromColumnId: k, item: T };
    }
    function h(k) {
      c.value = k;
    }
    function p() {
      c.value = null;
    }
    function v(k, T) {
      const M = s.value;
      if (!M) return;
      const x = o.value.find((K) => K.id === M.fromColumnId), L = o.value.find((K) => K.id === k);
      !x || !L || (x.items = x.items.filter((K) => K.id !== M.item.id), T === null ? L.items.push(M.item) : L.items.splice(T, 0, M.item), a("update:items", o.value), s.value = null, c.value = null);
    }
    function y(k) {
      n.editMode && (u.value = k);
    }
    function g(k) {
      if (!n.editMode) return;
      const T = u.value;
      if (T === null || T === k) return;
      const M = [...o.value], [x] = M.splice(T, 1);
      M.splice(k, 0, x), o.value = M.map((L, K) => ({ ...L, position: K + 1 })), a("update:columns", o.value), u.value = null;
    }
    function b() {
      const k = {
        id: `col-${o.value.length + 1}`,
        title: `Stage ${o.value.length + 1}`,
        color: "#8B5CF6",
        position: o.value.length + 1,
        items: []
      };
      o.value.push(k), a("update:columns", o.value);
    }
    function C(k, T) {
      a("add-item", { column: k, index: T });
    }
    function w(k, T) {
      a("card-click", { id: k.id, item: k, column: T });
    }
    return (k, T) => (l(), f("div", o_, [
      m("div", {
        class: "fu-kanban__columns",
        onDragover: T[1] || (T[1] = ue(() => {
        }, ["prevent"]))
      }, [
        (l(!0), f(j, null, re(o.value, (M, x) => (l(), f("div", {
          key: M.id,
          class: Z(["fu-kanban__column", { "fu-kanban__column--drag": t.editMode }]),
          draggable: t.editMode,
          onDragstart: (L) => y(x),
          onDrop: (L) => g(x),
          onDragover: T[0] || (T[0] = ue(() => {
          }, ["prevent"]))
        }, [
          m("header", l_, [
            m("div", u_, [
              m("div", c_, [
                m("span", {
                  class: "fu-kanban__dot",
                  style: ne({ background: M.color || "#9ca3af" })
                }, null, 4),
                m("span", {
                  class: "fu-kanban__column-name",
                  title: M.title
                }, _(M.title), 9, d_)
              ]),
              m("div", f_, [
                m("button", {
                  class: "fu-kanban__add-item-btn",
                  title: oe(i),
                  onClick: ue((L) => C(M, x), ["stop"])
                }, " + ", 8, m_)
              ])
            ]),
            m("div", h_, [
              se(k.$slots, "column-header", {}, void 0, !0),
              m("span", v_, _(M.items.length), 1)
            ])
          ]),
          t.editMode ? (l(), f("div", p_, [
            se(k.$slots, "edit-column", {
              column: M,
              index: x
            }, void 0, !0)
          ])) : (l(), f(j, { key: 1 }, [
            m("div", {
              class: Z(["fu-kanban__cards scrollbar__control customScrollBar", { "fu-kanban__cards--hover": c.value === M.id }]),
              onDragover: ue((L) => h(M.id), ["prevent"]),
              onDragleave: p,
              onDrop: (L) => v(M.id, null)
            }, [
              (l(!0), f(j, null, re(M.items, (L, K) => (l(), f("div", {
                key: L.id,
                class: "fu-kanban__card",
                draggable: "true",
                onDragstart: (G) => d(M.id, L),
                onDrop: (G) => v(M.id, K),
                onClick: (G) => w(L, M)
              }, [
                m("header", b_, [
                  m("strong", null, _(L.title), 1)
                ]),
                m("div", C_, [
                  se(k.$slots, "card-body", {
                    item: L,
                    column: M
                  }, void 0, !0)
                ])
              ], 40, y_))), 128)),
              M.items.length ? A("", !0) : (l(), f("div", w_, _(t.noItemtext), 1))
            ], 42, g_),
            m("button", {
              class: "fu-kanban__add-card",
              onClick: (L) => C(M, x)
            }, _(oe(i)), 9, A_)
          ], 64))
        ], 42, s_))), 128)),
        t.editMode ? (l(), f("div", {
          key: 0,
          class: "fu-kanban__add-column",
          onClick: b
        }, _(oe(r)), 1)) : A("", !0)
      ], 32)
    ]));
  }
}), k_ = /* @__PURE__ */ ae(__, [["__scopeId", "data-v-11abb07b"]]), S_ = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: k_
}, Symbol.toStringTag, { value: "Module" })), T_ = { class: "fu-modal__header" }, E_ = { class: "fu-modal__title" }, M_ = { class: "fu-modal__body" }, N_ = {
  key: 0,
  class: "fu-modal__footer"
}, D_ = /* @__PURE__ */ le({
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
    function i(r) {
      (r.key === "Escape" || r.key === "Esc") && a();
    }
    return _e(() => {
      window.addEventListener("keydown", i);
    }), Ae(() => {
      window.removeEventListener("keydown", i);
    }), (r, o) => (l(), X(De, { to: "body" }, [
      t.isVisible ? (l(), f("div", {
        key: 0,
        class: "fu-modal__backdrop",
        onClick: ue(a, ["self"])
      }, [
        m("div", {
          class: Z(["fu-modal", [`fu-modal--${t.size}`, { "fu-modal--fixed-height": t.fixedHeight }]])
        }, [
          m("div", T_, [
            m("h3", E_, _(t.title), 1),
            J($e, {
              text: " ",
              icon: oe(Ct),
              class: "fu-modal__close",
              onClick: a,
              variant: "ghost",
              size: "sm"
            }, null, 8, ["icon"])
          ]),
          m("div", M_, [
            se(r.$slots, "default", {}, () => [
              o[0] || (o[0] = ce(" Default modal content. ", -1))
            ], !0)
          ]),
          t.showFooter ? (l(), f("div", N_, [
            se(r.$slots, "footer", {}, void 0, !0)
          ])) : A("", !0)
        ], 2)
      ])) : A("", !0)
    ]));
  }
}), Ss = /* @__PURE__ */ ae(D_, [["__scopeId", "data-v-9804bf15"]]), I_ = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Ss
}, Symbol.toStringTag, { value: "Module" })), O_ = { class: "app-container" }, R_ = { class: "app-shell" }, x_ = { class: "fu-topbar" }, $_ = { class: "fu-topbar-l" }, P_ = { class: "fu-topbar-c" }, F_ = { class: "fu-topbar-r" }, B_ = { class: "fu-main-area" }, z_ = { class: "fu-sidebar" }, L_ = { class: "fu-menu" }, H_ = { class: "ai-panel-body" }, V_ = { class: "ai-header-actions" }, j_ = { class: "ai-content" }, ua = 991, dr = "fu-app-ai-panel", fr = 340, U_ = 500, W_ = {
  __name: "AppShell",
  props: {
    listenToToggleEvent: { type: Boolean, default: !0 }
  },
  setup(t) {
    const e = N(!1), n = N(!0), a = N(!1), i = N(340), r = N(!1), o = N(typeof window < "u" ? window.innerWidth : 1200);
    let s = !1;
    const u = N(!1), c = t;
    function d() {
      o.value <= ua ? (e.value = !e.value, n.value = !0) : n.value = !n.value;
    }
    function h() {
      if (o.value <= ua) {
        u.value = !0, a.value = !1, w();
        return;
      }
      a.value = !a.value, w(), a.value && window.dispatchEvent(new Event("open-ai"));
    }
    function p() {
      i.value = r.value ? fr : U_, r.value = !r.value, w();
    }
    function v(T) {
      s = !0, document.body.style.cursor = "col-resize", window.addEventListener("mousemove", y), window.addEventListener("mouseup", g);
    }
    function y(T) {
      if (!s) return;
      const M = window.innerWidth - T.clientX;
      M > 280 && M < 600 && (i.value = M, w());
    }
    function g() {
      s = !1, document.body.style.cursor = "default", window.removeEventListener("mousemove", y), window.removeEventListener("mouseup", g);
    }
    function b() {
      o.value = window.innerWidth;
    }
    function C() {
      o.value <= ua && e.value && (e.value = !1);
    }
    function w() {
      const T = {
        open: a.value,
        width: i.value,
        maximized: r.value
      };
      localStorage.setItem(dr, JSON.stringify(T));
    }
    function k() {
      const T = localStorage.getItem(dr);
      if (T)
        try {
          const { open: M, width: x, maximized: L } = JSON.parse(T);
          a.value = !!M, i.value = x || fr, r.value = !!L;
        } catch (M) {
          console.warn("Failed to restore AI panel state:", M);
        }
    }
    return _e(() => {
      if (k(), window.addEventListener("resize", b), c.listenToToggleEvent && window.addEventListener("toggle-ai", h), a.value) {
        const T = () => {
          window.removeEventListener("tabs-ready", T), we(() => {
            a.value = !0, window.dispatchEvent(new Event("open-ai"));
          });
        };
        window.addEventListener("tabs-ready", T);
      }
    }), (T, M) => {
      const x = gr("FusionActionButton");
      return l(), f("div", O_, [
        m("div", R_, [
          m("div", x_, [
            m("div", $_, [
              m("button", {
                class: "fu-menu-toggle",
                onClick: d
              }, [...M[2] || (M[2] = [
                m("svg", {
                  width: "24",
                  height: "24",
                  viewBox: "0 0 24 24",
                  fill: "none",
                  xmlns: "http://www.w3.org/2000/svg"
                }, [
                  m("path", {
                    d: "M21 3.30758C22.6569 3.30758 24 4.65072 24 6.30758V20.9939C24 22.6507 22.6569 23.9939 21 23.9939H11.4534C11.4356 23.9939 11.4213 23.9795 11.4213 23.9618C11.4213 23.9454 11.4337 23.9317 11.45 23.9298C16.2789 23.3868 20.0467 19.2815 20.0467 14.3086C20.0467 11.336 18.7127 8.57663 16.3919 6.72481C16.1055 6.49913 15.6906 6.54739 15.4636 6.83277L14.2226 8.39329C13.9975 8.67631 14.0441 9.08814 14.3268 9.31371C15.8619 10.532 16.739 12.3533 16.739 14.3086C16.739 17.4578 14.4366 20.0893 11.4213 20.5949C11.0742 20.6559 10.7208 20.6863 10.3554 20.6863H3C1.34315 20.6863 0 19.3431 0 17.6863V3C0 1.34315 1.34315 3.14256e-06 3 3.14256e-06H11.2752C11.3559 3.14256e-06 11.4213 0.0654245 11.4213 0.146126C11.4213 0.213947 11.3744 0.272792 11.3085 0.289108C7.08918 1.33486 3.95326 5.15701 3.95326 9.69139C3.95326 12.6578 5.28734 15.4234 7.61423 17.2691C7.89608 17.4972 8.30985 17.4518 8.53555 17.168L9.77497 15.6096C10.0018 15.3243 9.95638 14.9095 9.67311 14.6802C8.14413 13.4619 7.26097 11.6467 7.26097 9.69139C7.26097 6.95026 8.99086 4.6111 11.4213 3.70954C12.1157 3.44765 12.8649 3.30758 13.6446 3.30758H21Z",
                    fill: "#FFD37B"
                  })
                ], -1)
              ])]),
              se(T.$slots, "brand-logo")
            ]),
            m("div", P_, [
              se(T.$slots, "header")
            ]),
            m("div", F_, [
              se(T.$slots, "header-right")
            ])
          ]),
          m("div", B_, [
            m("div", {
              class: Z(["fu-nav-panel", { open: e.value }])
            }, [
              m("section", z_, [
                se(T.$slots, "modules-sidebar")
              ]),
              Ve(m("section", L_, [
                se(T.$slots, "module-menu")
              ], 512), [
                [_a, n.value]
              ])
            ], 2),
            m("div", {
              class: Z(["fu-body-area", { "ai-open": a.value }])
            }, [
              m("div", {
                onClick: C,
                class: "fu-body-slot"
              }, [
                se(T.$slots, "default")
              ]),
              J(He, { name: "slide-left" }, {
                default: fe(() => [
                  a.value ? (l(), f("div", {
                    key: 0,
                    class: "ai-panel",
                    style: ne({ width: i.value + "px" })
                  }, [
                    m("div", {
                      class: "ai-resize-handle",
                      onMousedown: v
                    }, null, 32),
                    m("div", H_, [
                      m("header", null, [
                        M[3] || (M[3] = m("h3", null, "Àdisa", -1)),
                        m("div", V_, [
                          J(x, {
                            icon: r.value ? oe(Xs) : oe(Js),
                            variant: "ghost",
                            size: "sm",
                            onClick: p
                          }, null, 8, ["icon"]),
                          J(x, {
                            icon: oe(Ct),
                            variant: "ghost",
                            size: "sm",
                            onClick: h
                          }, null, 8, ["icon"])
                        ])
                      ]),
                      m("div", j_, [
                        se(T.$slots, "ai-content")
                      ])
                    ])
                  ], 4)) : A("", !0)
                ]),
                _: 3
              })
            ], 2)
          ])
        ]),
        u.value ? (l(), X(Ss, {
          key: 0,
          isVisible: u.value,
          title: "Adisa",
          size: "sm",
          onClose: M[0] || (M[0] = (L) => u.value = !1),
          onCancel: M[1] || (M[1] = (L) => u.value = !1)
        }, {
          default: fe(() => [...M[4] || (M[4] = [
            ce(" Downlaod Skkido to use Adisa on Mobile ", -1)
          ])]),
          _: 1
        }, 8, ["isVisible"])) : A("", !0)
      ]);
    };
  }
}, Y_ = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: W_
}, Symbol.toStringTag, { value: "Module" })), G_ = { key: 0 }, K_ = {
  key: 0,
  class: "fu-listview__th fu-listview__th--checkbox"
}, q_ = {
  key: 0,
  class: "fu-skeleton-cell fu-skeleton-cell--checkbox"
}, Q_ = ["draggable", "onDragstart", "onDragover", "onDragleave", "onDrop"], Z_ = {
  key: 0,
  class: "fu-listview__drag-handle",
  title: "Drag to reorder"
}, J_ = {
  key: 1,
  class: "fu-skeleton-cell fu-skeleton-cell--header"
}, X_ = ["role", "tabindex", "onClick", "onKeydown"], ek = { class: "fu-listview__th-label" }, tk = {
  key: 1,
  class: "fu-listview__sort-indicator"
}, nk = ["onMousedown"], ak = { key: 1 }, ik = {
  key: 0,
  class: "fu-listview__td fu-listview__td--checkbox"
}, rk = { key: 2 }, ok = ["onClick"], sk = { class: "fu-listview__cell" }, lk = /* @__PURE__ */ le({
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
    function r(I, $) {
      const W = u.value.findIndex((ee) => ee.key === $) % 5;
      return i[(I - 1) % i.length][W];
    }
    const o = O(() => n.skeletonRows ?? 8), s = N({}), u = O(() => n.columns.map((I, $) => ({
      ...I,
      width: s.value[I.key] || I.width || "150px",
      textAlign: I.textAlign || "justify",
      sortable: !!I.sortable,
      visible: I.visible !== !1,
      orderPosition: I.orderPosition ?? $
    })).filter((I) => I.visible).sort((I, $) => I.orderPosition - $.orderPosition)), c = N(!1), d = N(null), h = N(null), p = N(null), v = N("asc"), y = O(() => !!n.sort), g = O(
      () => y.value ? n.sort?.key ?? null : p.value
    ), b = O(
      () => y.value ? n.sort?.direction ?? "asc" : v.value
    ), C = n.showHeader ?? !0, w = () => n.options?.sortable !== !1;
    function k(I) {
      return n.options?.selectable ? n.options?.isRowSelectable ? n.options.isRowSelectable(I) : !0 : !1;
    }
    function T() {
      const I = n.rows.filter(($) => $.__selected && k($));
      a("row-selected", I);
    }
    ve(c, (I) => {
      n.options?.selectable && (n.rows.forEach(($) => {
        k($) && ($.__selected = I);
      }), T());
    });
    function M(I) {
      if (n.editMode || !w() || !I.sortable) return;
      const $ = g.value, W = b.value;
      let ee = "asc";
      $ === I.key && (ee = W === "asc" ? "desc" : "asc"), y.value || (p.value = I.key, v.value = ee), a("sort-change", { key: I.key, direction: ee });
    }
    function x(I) {
      a("row-clicked", I), n.options?.onRowClick?.(I);
    }
    let L = null, K = 0, G = 0;
    function V(I, $) {
      if (!n.options?.resizeColumn) return;
      L = $, K = I.clientX;
      const W = u.value.find((ee) => ee.key === $);
      G = parseInt(W?.width || "150", 10), document.addEventListener("mousemove", Y), document.addEventListener("mouseup", U);
    }
    function Y(I) {
      if (!L) return;
      const $ = I.clientX - K;
      s.value[L] = `${Math.max(60, G + $)}px`;
    }
    function U() {
      L = null, document.removeEventListener("mousemove", Y), document.removeEventListener("mouseup", U);
    }
    const R = N(null), S = N(null);
    function E(I, $) {
      n.editMode && (R.value = $, I.dataTransfer?.setData("text/plain", $), I.dataTransfer && (I.dataTransfer.effectAllowed = "move"));
    }
    function D(I, $) {
      !n.editMode || !R.value || (I.preventDefault(), S.value = $);
    }
    function q(I) {
      S.value === I && (S.value = null);
    }
    function Q(I, $) {
      if (!n.editMode || !R.value) return;
      I.preventDefault();
      const W = R.value;
      if (R.value = null, S.value = null, W === $) return;
      const ee = [...u.value], pe = ee.findIndex((Te) => Te.key === W), Se = ee.findIndex((Te) => Te.key === $);
      if (pe === -1 || Se === -1) return;
      const [ye] = ee.splice(pe, 1);
      ee.splice(Se, 0, ye);
      const Pe = ee.map((Te, F) => ({ key: Te.key, orderPosition: F }));
      a("columns-reordered", Pe);
    }
    function P() {
      R.value = null, S.value = null;
    }
    function B() {
      const I = h.value;
      I && (I.style.overflowY = "hidden", requestAnimationFrame(() => {
        I.style.overflowY = "auto";
      }));
    }
    return _e(() => {
      B(), window.addEventListener("resize", B);
    }), Ae(() => {
      window.removeEventListener("resize", B), document.removeEventListener("mousemove", Y), document.removeEventListener("mouseup", U);
    }), (I, $) => (l(), f("div", {
      class: "fu-listview",
      ref_key: "listviewRef",
      ref: d
    }, [
      m("div", {
        class: "fu-listview__table-wrapper customScrollBar",
        ref_key: "tableWrapper",
        ref: h
      }, [
        m("table", null, [
          oe(C) ? (l(), f("thead", G_, [
            m("tr", null, [
              t.options?.selectable ? (l(), f("th", K_, [
                t.loading ? (l(), f("div", q_)) : (l(), X(st, {
                  key: 1,
                  modelValue: c.value,
                  "onUpdate:modelValue": $[0] || ($[0] = (W) => c.value = W),
                  size: "sm"
                }, null, 8, ["modelValue"]))
              ])) : A("", !0),
              (l(!0), f(j, null, re(u.value, (W) => (l(), f("th", {
                key: W.key,
                style: ne({ width: W.width || "auto" }),
                class: Z(["fu-listview__th", [
                  `align-${W.textAlign || "justify"}`,
                  {
                    "is-dragging": R.value === W.key,
                    "is-drag-over": S.value === W.key && R.value !== W.key
                  }
                ]]),
                draggable: t.editMode && !t.loading,
                onDragstart: (ee) => E(ee, W.key),
                onDragover: (ee) => D(ee, W.key),
                onDragleave: (ee) => q(W.key),
                onDrop: (ee) => Q(ee, W.key),
                onDragend: P
              }, [
                m("div", {
                  class: Z(["fu-listview__th-content", `align-${W.textAlign || "justify"}`])
                }, [
                  t.editMode && !t.loading ? (l(), f("span", Z_, "⠿")) : A("", !0),
                  t.loading ? (l(), f("div", J_)) : (l(), f("div", {
                    key: 2,
                    class: Z(["fu-listview__th-sortable", {
                      "is-sortable": !!W.sortable,
                      "is-active": g.value === W.key
                    }]),
                    role: W.sortable ? "button" : void 0,
                    tabindex: W.sortable ? 0 : -1,
                    onClick: (ee) => M(W),
                    onKeydown: [
                      xe(ue((ee) => M(W), ["prevent"]), ["enter"]),
                      xe(ue((ee) => M(W), ["prevent"]), ["space"])
                    ]
                  }, [
                    W.icon ? (l(), X(ge(W.icon), {
                      key: 0,
                      class: "fu-listview__th-icon"
                    })) : A("", !0),
                    m("span", ek, _(W.label), 1),
                    W.sortable ? (l(), f("span", tk, [
                      g.value === W.key ? (l(), f(j, { key: 0 }, [
                        ce(_(b.value === "asc" ? "▲" : "▼"), 1)
                      ], 64)) : (l(), f(j, { key: 1 }, [
                        ce("⇅")
                      ], 64))
                    ])) : A("", !0)
                  ], 42, X_)),
                  t.options?.resizeColumn && !t.loading ? (l(), f("span", {
                    key: 3,
                    class: "fu-listview__resize-handle",
                    onMousedown: ue((ee) => V(ee, W.key), ["stop"])
                  }, null, 40, nk)) : A("", !0)
                ], 2)
              ], 46, Q_))), 128))
            ])
          ])) : A("", !0),
          t.loading ? (l(), f("tbody", ak, [
            (l(!0), f(j, null, re(o.value, (W) => (l(), f("tr", {
              key: `skeleton-${W}`,
              class: "fu-listview__row fu-listview__row--skeleton"
            }, [
              t.options?.selectable ? (l(), f("td", ik, [...$[2] || ($[2] = [
                m("div", { class: "fu-skeleton-cell fu-skeleton-cell--checkbox" }, null, -1)
              ])])) : A("", !0),
              (l(!0), f(j, null, re(u.value, (ee) => (l(), f("td", {
                key: `skeleton-${W}-${ee.key}`,
                class: Z(["fu-listview__td", {
                  "is-dragging": R.value === ee.key,
                  "is-drag-over": S.value === ee.key && R.value !== ee.key
                }]),
                style: ne({ width: ee.width })
              }, [
                m("div", {
                  class: "fu-skeleton-cell",
                  style: ne({ width: r(W, ee.key) })
                }, null, 4)
              ], 6))), 128))
            ]))), 128))
          ])) : (l(), f("tbody", rk, [
            (l(!0), f(j, null, re(t.rows, (W) => (l(), f("tr", {
              key: W[t.rowKey],
              class: "fu-listview__row",
              onClick: (ee) => x(W)
            }, [
              t.options?.selectable ? (l(), f("td", {
                key: 0,
                class: "fu-listview__td fu-listview__td--checkbox",
                onClick: $[1] || ($[1] = ue(() => {
                }, ["stop"]))
              }, [
                J(st, {
                  modelValue: W.__selected,
                  "onUpdate:modelValue": (ee) => W.__selected = ee,
                  onChange: T,
                  size: "sm",
                  disabled: !k(W)
                }, null, 8, ["modelValue", "onUpdate:modelValue", "disabled"])
              ])) : A("", !0),
              se(I.$slots, "tableRow", { row: W }, () => [
                (l(!0), f(j, null, re(u.value, (ee) => (l(), f("td", {
                  key: ee.key,
                  class: Z(["fu-listview__td", [
                    `align-${ee.textAlign || "justify"}`,
                    {
                      "is-dragging": R.value === ee.key,
                      "is-drag-over": S.value === ee.key && R.value !== ee.key
                    }
                  ]]),
                  style: ne({ width: ee.width })
                }, [
                  se(I.$slots, `cell-${ee.key}`, {
                    row: W,
                    col: ee
                  }, () => [
                    m("span", sk, _(W[ee.key]), 1)
                  ], !0)
                ], 6))), 128))
              ], !0)
            ], 8, ok))), 128))
          ]))
        ])
      ], 512)
    ], 512));
  }
}), uk = /* @__PURE__ */ ae(lk, [["__scopeId", "data-v-324a0739"]]), ck = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: uk
}, Symbol.toStringTag, { value: "Module" })), dk = { key: 0 }, fk = {
  key: 0,
  class: "fu-listview__th fu-listview__th--checkbox"
}, mk = {
  key: 0,
  class: "fu-skeleton-cell fu-skeleton-cell--checkbox"
}, hk = {
  key: 0,
  class: "fu-skeleton-cell fu-skeleton-cell--header"
}, vk = ["role", "tabindex", "onClick", "onKeydown"], pk = { class: "fu-listview__th-label" }, gk = {
  key: 1,
  class: "fu-listview__sort-indicator"
}, yk = ["onMousedown"], bk = { key: 1 }, Ck = {
  key: 0,
  class: "fu-listview__td fu-listview__td--checkbox"
}, wk = { key: 2 }, Ak = ["onClick"], _k = { class: "fu-listview__cell" }, kk = /* @__PURE__ */ le({
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
    function r(R, S) {
      const E = n.columns.findIndex((D) => D.key === S) % 5;
      return i[(R - 1) % i.length][E];
    }
    const o = O(() => n.skeletonRows ?? 8), s = N(
      n.columns.map((R) => ({
        ...R,
        width: R.width || "150px",
        textAlign: R.textAlign || "justify",
        sortable: !!R.sortable
      }))
    ), u = N(!1), c = N(null), d = N(null), h = N(null), p = N("asc"), v = O(() => !!n.sort), y = O(
      () => v.value ? n.sort?.key ?? null : h.value
    ), g = O(
      () => v.value ? n.sort?.direction ?? "asc" : p.value
    ), b = n.showHeader ?? !0, C = () => n.options?.sortable !== !1;
    function w(R) {
      return n.options?.selectable ? n.options?.isRowSelectable ? n.options.isRowSelectable(R) : !0 : !1;
    }
    function k() {
      const R = n.rows.filter((S) => S.__selected && w(S));
      a("row-selected", R);
    }
    ve(u, (R) => {
      n.options?.selectable && (n.rows.forEach((S) => {
        w(S) && (S.__selected = R);
      }), k());
    });
    function T(R) {
      if (!C() || !R.sortable) return;
      const S = y.value, E = g.value;
      let D = "asc";
      S === R.key && (D = E === "asc" ? "desc" : "asc"), v.value || (h.value = R.key, p.value = D), a("sort-change", { key: R.key, direction: D });
    }
    function M(R) {
      a("row-clicked", R), n.options?.onRowClick?.(R);
    }
    let x = null, L = 0, K = 0;
    function G(R, S) {
      n.options?.resizeColumn && (x = S, L = R.clientX, K = parseInt(s.value[S].width, 10), document.addEventListener("mousemove", V), document.addEventListener("mouseup", Y));
    }
    function V(R) {
      if (x === null) return;
      const S = R.clientX - L;
      s.value[x].width = `${Math.max(60, K + S)}px`;
    }
    function Y() {
      x = null, document.removeEventListener("mousemove", V), document.removeEventListener("mouseup", Y);
    }
    function U() {
      const R = d.value;
      R && (R.style.overflowY = "hidden", requestAnimationFrame(() => {
        R.style.overflowY = "auto";
      }));
    }
    return _e(() => {
      U(), window.addEventListener("resize", U);
    }), Ae(() => {
      window.removeEventListener("resize", U), document.removeEventListener("mousemove", V), document.removeEventListener("mouseup", Y);
    }), (R, S) => (l(), f("div", {
      class: "fu-listview",
      ref_key: "listviewRef",
      ref: c
    }, [
      m("div", {
        class: "fu-listview__table-wrapper customScrollBar",
        ref_key: "tableWrapper",
        ref: d
      }, [
        m("table", null, [
          oe(b) ? (l(), f("thead", dk, [
            m("tr", null, [
              t.options?.selectable ? (l(), f("th", fk, [
                t.loading ? (l(), f("div", mk)) : (l(), X(st, {
                  key: 1,
                  modelValue: u.value,
                  "onUpdate:modelValue": S[0] || (S[0] = (E) => u.value = E),
                  size: "sm"
                }, null, 8, ["modelValue"]))
              ])) : A("", !0),
              (l(!0), f(j, null, re(s.value, (E, D) => (l(), f("th", {
                key: E.key,
                style: ne({ width: E.width || "auto" }),
                class: Z(["fu-listview__th", `align-${E.textAlign || "justify"}`])
              }, [
                m("div", {
                  class: Z(["fu-listview__th-content", `align-${E.textAlign || "justify"}`])
                }, [
                  t.loading ? (l(), f("div", hk)) : (l(), f("div", {
                    key: 1,
                    class: Z(["fu-listview__th-sortable", {
                      "is-sortable": !!E.sortable,
                      "is-active": y.value === E.key
                    }]),
                    role: E.sortable ? "button" : void 0,
                    tabindex: E.sortable ? 0 : -1,
                    onClick: (q) => T(E),
                    onKeydown: [
                      xe(ue((q) => T(E), ["prevent"]), ["enter"]),
                      xe(ue((q) => T(E), ["prevent"]), ["space"])
                    ]
                  }, [
                    E.icon ? (l(), X(ge(E.icon), {
                      key: 0,
                      class: "fu-listview__th-icon"
                    })) : A("", !0),
                    m("span", pk, _(E.label), 1),
                    E.sortable ? (l(), f("span", gk, [
                      y.value === E.key ? (l(), f(j, { key: 0 }, [
                        ce(_(g.value === "asc" ? "▲" : "▼"), 1)
                      ], 64)) : (l(), f(j, { key: 1 }, [
                        ce("⇅")
                      ], 64))
                    ])) : A("", !0)
                  ], 42, vk)),
                  t.options?.resizeColumn && !t.loading ? (l(), f("span", {
                    key: 2,
                    class: "fu-listview__resize-handle",
                    onMousedown: ue((q) => G(q, D), ["stop"])
                  }, null, 40, yk)) : A("", !0)
                ], 2)
              ], 6))), 128))
            ])
          ])) : A("", !0),
          t.loading ? (l(), f("tbody", bk, [
            (l(!0), f(j, null, re(o.value, (E) => (l(), f("tr", {
              key: `skeleton-${E}`,
              class: "fu-listview__row fu-listview__row--skeleton"
            }, [
              t.options?.selectable ? (l(), f("td", Ck, [...S[2] || (S[2] = [
                m("div", { class: "fu-skeleton-cell fu-skeleton-cell--checkbox" }, null, -1)
              ])])) : A("", !0),
              (l(!0), f(j, null, re(s.value, (D) => (l(), f("td", {
                key: `skeleton-${E}-${D.key}`,
                class: "fu-listview__td",
                style: ne({ width: D.width })
              }, [
                m("div", {
                  class: "fu-skeleton-cell",
                  style: ne({ width: r(E, D.key) })
                }, null, 4)
              ], 4))), 128))
            ]))), 128))
          ])) : (l(), f("tbody", wk, [
            (l(!0), f(j, null, re(t.rows, (E) => (l(), f("tr", {
              key: E[t.rowKey],
              class: "fu-listview__row",
              onClick: (D) => M(E)
            }, [
              t.options?.selectable ? (l(), f("td", {
                key: 0,
                class: "fu-listview__td fu-listview__td--checkbox",
                onClick: S[1] || (S[1] = ue(() => {
                }, ["stop"]))
              }, [
                J(st, {
                  modelValue: E.__selected,
                  "onUpdate:modelValue": (D) => E.__selected = D,
                  onChange: k,
                  size: "sm",
                  disabled: !w(E)
                }, null, 8, ["modelValue", "onUpdate:modelValue", "disabled"])
              ])) : A("", !0),
              se(R.$slots, "tableRow", { row: E }, () => [
                (l(!0), f(j, null, re(s.value, (D) => (l(), f("td", {
                  key: D.key,
                  class: Z(["fu-listview__td", `align-${D.textAlign || "justify"}`]),
                  style: ne({ width: D.width })
                }, [
                  se(R.$slots, `cell-${D.key}`, {
                    row: E,
                    col: D
                  }, () => [
                    m("span", _k, _(E[D.key]), 1)
                  ], !0)
                ], 6))), 128))
              ], !0)
            ], 8, Ak))), 128))
          ]))
        ])
      ], 512)
    ], 512));
  }
}), Sk = /* @__PURE__ */ ae(kk, [["__scopeId", "data-v-cda3cdd9"]]), Tk = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Sk
}, Symbol.toStringTag, { value: "Module" })), Ek = { key: 0 }, Mk = {
  key: 0,
  class: "fu-listview__th fu-listview__th--checkbox"
}, Nk = ["role", "tabindex", "onClick", "onKeydown"], Dk = { class: "fu-listview__th-label" }, Ik = {
  key: 1,
  class: "fu-listview__sort-indicator"
}, Ok = ["onMousedown"], Rk = ["onClick"], xk = { class: "fu-listview__cell" }, $k = /* @__PURE__ */ le({
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
    const n = t, a = e, i = N(
      n.columns.map((V) => ({
        ...V,
        width: V.width || "150px",
        textAlign: V.textAlign || "justify",
        sortable: !!V.sortable
      }))
    ), r = N(!1), o = N(null), s = N(null), u = N(null), c = N("asc"), d = O(() => !!n.sort), h = O(
      () => d.value ? n.sort?.key ?? null : u.value
    ), p = O(
      () => d.value ? n.sort?.direction ?? "asc" : c.value
    ), v = n.showHeader ?? !0, y = () => n.options?.sortable !== !1;
    function g(V) {
      return n.options?.selectable ? n.options?.isRowSelectable ? n.options.isRowSelectable(V) : !0 : !1;
    }
    function b() {
      const V = n.rows.filter((Y) => Y.__selected && g(Y));
      a("row-selected", V);
    }
    ve(r, (V) => {
      n.options?.selectable && (n.rows.forEach((Y) => {
        g(Y) && (Y.__selected = V);
      }), b());
    });
    function C(V) {
      if (!y() || !V.sortable) return;
      const Y = h.value, U = p.value;
      let R = "asc";
      Y === V.key && (R = U === "asc" ? "desc" : "asc"), d.value || (u.value = V.key, c.value = R), a("sort-change", {
        key: V.key,
        direction: R
      });
    }
    function w(V) {
      a("row-clicked", V), n.options?.onRowClick?.(V);
    }
    let k = null, T = 0, M = 0;
    function x(V, Y) {
      n.options?.resizeColumn && (k = Y, T = V.clientX, M = parseInt(i.value[Y].width, 10), document.addEventListener("mousemove", L), document.addEventListener("mouseup", K));
    }
    function L(V) {
      if (k === null) return;
      const Y = V.clientX - T;
      i.value[k].width = `${Math.max(60, M + Y)}px`;
    }
    function K() {
      k = null, document.removeEventListener("mousemove", L), document.removeEventListener("mouseup", K);
    }
    function G() {
      const V = s.value;
      V && (V.style.overflowY = "hidden", requestAnimationFrame(() => {
        V.style.overflowY = "auto";
      }));
    }
    return _e(() => {
      G(), window.addEventListener("resize", G);
    }), Ae(() => {
      window.removeEventListener("resize", G), document.removeEventListener("mousemove", L), document.removeEventListener("mouseup", K);
    }), (V, Y) => (l(), f("div", {
      class: "fu-listview",
      ref_key: "listviewRef",
      ref: o
    }, [
      m("div", {
        class: "fu-listview__table-wrapper customScrollBar",
        ref_key: "tableWrapper",
        ref: s
      }, [
        m("table", null, [
          oe(v) ? (l(), f("thead", Ek, [
            m("tr", null, [
              t.options?.selectable ? (l(), f("th", Mk, [
                J(st, {
                  modelValue: r.value,
                  "onUpdate:modelValue": Y[0] || (Y[0] = (U) => r.value = U),
                  size: "sm"
                }, null, 8, ["modelValue"])
              ])) : A("", !0),
              (l(!0), f(j, null, re(i.value, (U, R) => (l(), f("th", {
                key: U.key,
                style: ne({ width: U.width || "auto" }),
                class: Z(["fu-listview__th", `align-${U.textAlign || "justify"}`])
              }, [
                m("div", {
                  class: Z(["fu-listview__th-content", `align-${U.textAlign || "justify"}`])
                }, [
                  m("div", {
                    class: Z(["fu-listview__th-sortable", {
                      "is-sortable": !!U.sortable,
                      "is-active": h.value === U.key
                    }]),
                    role: U.sortable ? "button" : void 0,
                    tabindex: U.sortable ? 0 : -1,
                    onClick: (S) => C(U),
                    onKeydown: [
                      xe(ue((S) => C(U), ["prevent"]), ["enter"]),
                      xe(ue((S) => C(U), ["prevent"]), ["space"])
                    ]
                  }, [
                    U.icon ? (l(), X(ge(U.icon), {
                      key: 0,
                      class: "fu-listview__th-icon"
                    })) : A("", !0),
                    m("span", Dk, _(U.label), 1),
                    U.sortable && h.value === U.key ? (l(), f("span", Ik, _(p.value === "asc" ? "▲" : "▼"), 1)) : A("", !0)
                  ], 42, Nk),
                  t.options?.resizeColumn ? (l(), f("span", {
                    key: 0,
                    class: "fu-listview__resize-handle",
                    onMousedown: ue((S) => x(S, R), ["stop"])
                  }, null, 40, Ok)) : A("", !0)
                ], 2)
              ], 6))), 128))
            ])
          ])) : A("", !0),
          m("tbody", null, [
            (l(!0), f(j, null, re(t.rows, (U) => (l(), f("tr", {
              key: U[t.rowKey],
              class: "fu-listview__row",
              onClick: (R) => w(U)
            }, [
              t.options?.selectable ? (l(), f("td", {
                key: 0,
                class: "fu-listview__td fu-listview__td--checkbox",
                onClick: Y[1] || (Y[1] = ue(() => {
                }, ["stop"]))
              }, [
                J(st, {
                  modelValue: U.__selected,
                  "onUpdate:modelValue": (R) => U.__selected = R,
                  onChange: b,
                  size: "sm",
                  disabled: !g(U)
                }, null, 8, ["modelValue", "onUpdate:modelValue", "disabled"])
              ])) : A("", !0),
              se(V.$slots, "tableRow", { row: U }, () => [
                (l(!0), f(j, null, re(i.value, (R) => (l(), f("td", {
                  key: R.key,
                  class: Z(["fu-listview__td", `align-${R.textAlign || "justify"}`]),
                  style: ne({ width: R.width })
                }, [
                  se(V.$slots, `cell-${R.key}`, {
                    row: U,
                    col: R
                  }, () => [
                    m("span", xk, _(U[R.key]), 1)
                  ], !0)
                ], 6))), 128))
              ], !0)
            ], 8, Rk))), 128))
          ])
        ])
      ], 512)
    ], 512));
  }
}), Pk = /* @__PURE__ */ ae($k, [["__scopeId", "data-v-17f611f9"]]), Fk = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Pk
}, Symbol.toStringTag, { value: "Module" })), Bk = { class: "fu-confirm__body" }, zk = { class: "fu-confirm__icon" }, Lk = { class: "fu-confirm__title" }, Hk = { class: "fu-confirm__message" }, Vk = { class: "fu-confirm__footer" }, jk = /* @__PURE__ */ le({
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
    }, r = () => {
      n.loading || a("confirm");
    }, o = () => {
      n.loading || a("cancel");
    }, s = O(() => n.variant === "delete" ? Ta : n.variant === "warning" ? tl : br), u = O(() => n.variant === "delete" || n.variant === "warning" ? "danger" : "solid"), c = (d) => {
      n.isVisible && (n.loading || (d.key === "Enter" && (d.preventDefault(), r()), d.key === "Escape" && i()));
    };
    return _e(() => {
      window.addEventListener("keydown", c);
    }), Ae(() => {
      window.removeEventListener("keydown", c);
    }), (d, h) => (l(), X(De, { to: "body" }, [
      t.isVisible ? (l(), f("div", {
        key: 0,
        class: "fu-modal__backdrop",
        onClick: ue(o, ["self"])
      }, [
        m("div", {
          class: Z(["fu-confirm", `fu-confirm--${t.variant}`])
        }, [
          m("div", Bk, [
            m("div", zk, [
              (l(), X(ge(s.value)))
            ]),
            m("h3", Lk, _(t.title), 1),
            m("p", Hk, _(t.message), 1)
          ]),
          m("div", Vk, [
            J(Ee, {
              variant: "outline",
              buttonWidth: "100%",
              disabled: t.loading,
              onClick: i
            }, {
              default: fe(() => [
                ce(_(t.cancelText), 1)
              ]),
              _: 1
            }, 8, ["disabled"]),
            J(Ee, {
              variant: u.value,
              buttonWidth: "100%",
              loading: t.loading,
              disabled: t.loading,
              onClick: r
            }, {
              default: fe(() => [
                ce(_(t.confirmText), 1)
              ]),
              _: 1
            }, 8, ["variant", "loading", "disabled"])
          ])
        ], 2)
      ])) : A("", !0)
    ]));
  }
}), Uk = /* @__PURE__ */ ae(jk, [["__scopeId", "data-v-094e1d3b"]]), Wk = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Uk
}, Symbol.toStringTag, { value: "Module" })), Yk = {
  key: 0,
  class: "fu-preview-backdrop"
}, Gk = { class: "fu-preview-modal" }, Kk = { class: "fu-preview-header" }, qk = { class: "fu-preview-header__left" }, Qk = { class: "fu-preview-header__right" }, Zk = { class: "fu-preview-body" }, Jk = /* @__PURE__ */ le({
  __name: "FusionPreviewModal",
  props: {
    isVisible: { type: Boolean }
  },
  emits: ["close"],
  setup(t, { emit: e }) {
    const n = t, a = e, i = () => a("close");
    ve(
      () => n.isVisible,
      (o) => {
        document.body.style.overflow = o ? "hidden" : "";
      },
      { immediate: !0 }
    );
    function r(o) {
      o.key === "Escape" && i();
    }
    return _e(() => {
      window.addEventListener("keydown", r);
    }), Ae(() => {
      window.removeEventListener("keydown", r), document.body.style.overflow = "";
    }), (o, s) => (l(), X(De, { to: "body" }, [
      t.isVisible ? (l(), f("div", Yk, [
        m("div", Gk, [
          m("header", Kk, [
            m("div", qk, [
              se(o.$slots, "header-left", {}, void 0, !0)
            ]),
            m("div", Qk, [
              se(o.$slots, "header-right", {}, () => [
                J(Ee, {
                  variant: "subtle",
                  size: "sm",
                  text: "Close preview",
                  onClick: i
                })
              ], !0)
            ])
          ]),
          se(o.$slots, "subheader", {}, () => [
            s[0] || (s[0] = m("header", { class: "fu-preview-subheader" }, null, -1))
          ], !0),
          m("main", Zk, [
            se(o.$slots, "default", {}, void 0, !0)
          ])
        ])
      ])) : A("", !0)
    ]));
  }
}), Xk = /* @__PURE__ */ ae(Jk, [["__scopeId", "data-v-d53784c5"]]), eS = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Xk
}, Symbol.toStringTag, { value: "Module" })), tS = { class: "fu-module-menu-wrapper scrollbar__control customScrollBar" }, nS = { class: "fu-module-menu-wrapper__list" }, aS = {
  key: 0,
  class: "fu-module-menu-empty"
}, iS = /* @__PURE__ */ le({
  __name: "FusionModuleMenu",
  props: {
    items: {},
    activePath: {}
  },
  setup(t) {
    return (e, n) => {
      const a = gr("router-link");
      return l(), f("div", tS, [
        m("ul", nS, [
          (l(!0), f(j, null, re(t.items, (i) => (l(), f("li", {
            key: i.path,
            class: Z({ active: t.activePath && t.activePath.startsWith(i.path) })
          }, [
            J(a, {
              class: "fu-module-menu-link",
              to: i.path
            }, {
              default: fe(() => [
                i.icon ? (l(), X(ge(i.icon), {
                  key: 0,
                  size: 15,
                  class: "fu-module-menu-icon"
                })) : A("", !0),
                m("span", null, _(i.label), 1)
              ]),
              _: 2
            }, 1032, ["to"])
          ], 2))), 128)),
          !t.items || !t.items.length ? (l(), f("li", aS, "No menu items")) : A("", !0)
        ]),
        se(e.$slots, "default", {}, void 0, !0)
      ]);
    };
  }
}), rS = /* @__PURE__ */ ae(iS, [["__scopeId", "data-v-7ff3c35c"]]), oS = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: rS
}, Symbol.toStringTag, { value: "Module" })), sS = { class: "fu-bell-icon" }, lS = {
  key: 2,
  class: "fu-badge"
}, uS = /* @__PURE__ */ le({
  __name: "FuNotification",
  props: {
    unreadCount: { default: 0 },
    bellIcon: { default: void 0 },
    align: { default: "right" },
    bellClass: { default: "" },
    bellStyle: { default: "light" }
  },
  setup(t) {
    const e = t, n = N(!1), a = N(null), i = N(null), r = N({}), o = () => {
      if (n.value = !n.value, n.value && a.value) {
        const u = a.value.getBoundingClientRect();
        let c = u.left + window.scrollX;
        e.align === "right" ? c = u.right + window.scrollX - 300 : e.align === "center" && (c = u.left + window.scrollX - 160 + u.width / 2), r.value = {
          top: `${u.bottom + window.scrollY + 8}px`,
          left: `${Math.max(c, 8)}px`,
          position: "absolute",
          zIndex: "2000"
        };
      }
    }, s = (u) => {
      const c = u.target;
      n.value && a.value && !a.value.contains(c) && (!i.value || !i.value.contains(c)) && (n.value = !1);
    };
    return _e(() => document.addEventListener("click", s)), Ae(() => document.removeEventListener("click", s)), (u, c) => (l(), f("div", {
      class: "fu-notification-dropdown",
      ref_key: "dropdown",
      ref: a
    }, [
      m("div", {
        class: "fu-notification__trigger",
        onClick: o
      }, [
        m("div", sS, [
          t.bellIcon ? (l(), X(ge(t.bellIcon), {
            key: 0,
            "stroke-width": 1.5,
            class: "fu-bell-svg"
          })) : (l(), X(oe(js), {
            key: 1,
            class: Z(["fu-bell-svg", [e.bellStyle, e.bellClass]])
          }, null, 8, ["class"])),
          t.unreadCount > 0 ? (l(), f("span", lS, _(t.unreadCount), 1)) : A("", !0)
        ])
      ]),
      (l(), X(De, { to: "body" }, [
        J(He, { name: "fade" }, {
          default: fe(() => [
            n.value ? (l(), f("div", {
              key: 0,
              ref_key: "panelEl",
              ref: i,
              class: "fu-notification__panel",
              style: ne(r.value)
            }, [
              se(u.$slots, "default", {}, () => [
                c[0] || (c[0] = m("div", { class: "fu-empty" }, [
                  m("h4", null, "No Content"),
                  m("p", null, "Use the default slot to pass custom dropdown body.")
                ], -1))
              ], !0)
            ], 4)) : A("", !0)
          ]),
          _: 3
        })
      ]))
    ], 512));
  }
}), cS = /* @__PURE__ */ ae(uS, [["__scopeId", "data-v-b710a214"]]), dS = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: cS
}, Symbol.toStringTag, { value: "Module" })), fS = {
  key: 0,
  class: "fu-alert__icon"
}, mS = { class: "fu-alert__content" }, hS = {
  key: 1,
  class: "fu-alert__actions"
}, vS = {
  key: 2,
  class: "fu-alert__close"
}, pS = /* @__PURE__ */ le({
  __name: "FuAlert",
  props: {
    variant: {},
    icon: { type: Boolean },
    border: { type: Boolean },
    dismissible: { type: Boolean }
  },
  setup(t) {
    const e = N(!0);
    return (n, a) => e.value ? (l(), f("div", {
      key: 0,
      class: Z(["fu-alert", `fu-alert--${t.variant}`, { "fu-alert--bordered": t.border }])
    }, [
      t.icon ? (l(), f("div", fS, [
        se(n.$slots, "icon", {}, () => [
          J(oe(Us))
        ], !0)
      ])) : A("", !0),
      m("div", mS, [
        se(n.$slots, "default", {}, void 0, !0)
      ]),
      n.$slots.actions ? (l(), f("div", hS, [
        se(n.$slots, "actions", {}, void 0, !0)
      ])) : A("", !0),
      t.dismissible ? (l(), f("div", vS, [
        J($e, {
          icon: oe(Ct),
          size: "sm",
          variant: "ghost",
          onClick: a[0] || (a[0] = (i) => e.value = !1)
        }, null, 8, ["icon"])
      ])) : A("", !0)
    ], 2)) : A("", !0);
  }
}), gS = /* @__PURE__ */ ae(pS, [["__scopeId", "data-v-7cd3e248"]]), yS = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: gS
}, Symbol.toStringTag, { value: "Module" })), bS = { class: "fu-toast__content" }, CS = { class: "fu-toast__message" }, wS = /* @__PURE__ */ le({
  __name: "FusionToast",
  props: {
    message: {},
    type: { default: "info" },
    duration: { default: 3500 }
  },
  setup(t) {
    const e = t, n = N(!1), a = {
      success: Ws,
      error: Ys,
      info: ca,
      dark: ca
    };
    _e(() => {
      n.value = !0, setTimeout(() => n.value = !1, e.duration);
    });
    function i() {
      n.value = !1;
    }
    return (r, o) => (l(), X(De, { to: "body" }, [
      J(He, { name: "fu-toast-fade" }, {
        default: fe(() => [
          n.value ? (l(), f("div", {
            key: 0,
            class: Z(["fu-toast", [`fu-toast--${t.type}`]]),
            role: "alert"
          }, [
            m("div", bS, [
              (l(), X(ge(a[t.type]), { class: "fu-toast__icon" })),
              m("span", CS, _(t.message), 1),
              m("button", {
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
}), Ts = /* @__PURE__ */ ae(wS, [["__scopeId", "data-v-9f423b9f"]]), AS = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Ts
}, Symbol.toStringTag, { value: "Module" })), _S = ["disabled", "aria-checked", "onClick"], kS = ["src"], SS = /* @__PURE__ */ le({
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
    function i(o) {
      n.disabled || n.readonly || a("update:modelValue", o);
    }
    const r = O(() => ({
      ...n.font ? { "--fu-typeform-font": n.font } : {},
      ...n.fontSize ? { "--fu-typeform-font-size": n.fontSize } : {},
      ...n.color ? { "--fu-typeform-color": n.color } : {}
    }));
    return (o, s) => (l(), f("div", {
      class: Z(["fu-pill-select", [`fu-pill-select--${t.size}`]]),
      role: "radiogroup",
      style: ne(r.value)
    }, [
      (l(!0), f(j, null, re(t.options, (u) => (l(), f("button", {
        key: u.value,
        type: "button",
        class: Z(["fu-pill", {
          "is-selected": t.modelValue === u.value,
          "is-readonly": t.readonly
        }]),
        disabled: t.disabled,
        role: "radio",
        "aria-checked": t.modelValue === u.value,
        onClick: (c) => i(u.value)
      }, [
        typeof u.icon == "string" ? (l(), f("img", {
          key: 0,
          src: u.icon,
          class: "fu-pill__icon-img",
          alt: ""
        }, null, 8, kS)) : u.icon ? (l(), X(ge(u.icon), {
          key: 1,
          size: 16,
          class: "fu-pill__icon"
        })) : A("", !0),
        m("span", null, _(u.label), 1)
      ], 10, _S))), 128))
    ], 6));
  }
}), Es = /* @__PURE__ */ ae(SS, [["__scopeId", "data-v-097b5880"]]), TS = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Es
}, Symbol.toStringTag, { value: "Module" })), ES = ["disabled", "aria-checked", "onClick"], MS = ["src"], NS = { class: "fu-pill__label" }, DS = { class: "fu-pill__badge" }, IS = /* @__PURE__ */ le({
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
    function r(s) {
      if (n.disabled || n.readonly) return;
      const u = i(s) ? n.modelValue.filter((c) => c !== s) : [...n.modelValue, s];
      a("update:modelValue", u);
    }
    const o = O(() => ({
      ...n.font ? { "--fu-typeform-font": n.font } : {},
      ...n.fontSize ? { "--fu-typeform-font-size": n.fontSize } : {},
      ...n.color ? { "--fu-typeform-color": n.color } : {}
    }));
    return (s, u) => (l(), f("div", {
      class: Z(["fu-pill-multi-select", [`fu-pill-multi-select--${t.size}`]]),
      role: "group",
      style: ne(o.value)
    }, [
      (l(!0), f(j, null, re(t.options, (c) => (l(), f("button", {
        key: c.value,
        type: "button",
        class: Z(["fu-pill fu-pill--multi", {
          "is-selected": i(c.value),
          "is-readonly": t.readonly
        }]),
        disabled: t.disabled,
        role: "checkbox",
        "aria-checked": i(c.value),
        onClick: (d) => r(c.value)
      }, [
        typeof c.icon == "string" ? (l(), f("img", {
          key: 0,
          src: c.icon,
          class: "fu-pill__icon-img",
          alt: ""
        }, null, 8, MS)) : c.icon ? (l(), X(ge(c.icon), {
          key: 1,
          size: 16,
          class: "fu-pill__icon"
        })) : A("", !0),
        m("span", NS, _(c.label), 1),
        m("span", DS, [
          i(c.value) ? (l(), X(oe(ka), {
            key: 0,
            size: 12
          })) : A("", !0)
        ])
      ], 10, ES))), 128))
    ], 6));
  }
}), Ms = /* @__PURE__ */ ae(IS, [["__scopeId", "data-v-9a9b94bb"]]), OS = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Ms
}, Symbol.toStringTag, { value: "Module" })), RS = { class: "fu-tag-input-wrapper" }, xS = {
  key: 0,
  class: "fu-tag-input-label"
}, $S = ["disabled", "onClick"], PS = ["placeholder", "disabled", "readonly", "onKeydown"], FS = {
  key: 1,
  class: "fu-tag-input-hint"
}, BS = {
  key: 2,
  class: "fu-tag-input-error"
}, zS = {
  key: 3,
  class: "fu-tag-input-helper"
}, LS = /* @__PURE__ */ le({
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
    const n = t, a = e, i = N(""), r = N(!1), o = N(null), s = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    function u(g) {
      return n.validate ? n.validate === "email" ? s.test(g) : n.validate(g) : !0;
    }
    function c() {
      n.disabled || o.value?.focus();
    }
    function d() {
      const g = i.value.trim().replace(/,$/, "");
      if (g) {
        if (!u(g)) {
          a("invalid", g);
          return;
        }
        n.modelValue.includes(g) || a("update:modelValue", [...n.modelValue, g]), i.value = "";
      }
    }
    function h(g) {
      if (g.key === ",") {
        g.preventDefault(), d();
        return;
      }
      g.key === "Backspace" && p();
    }
    function p() {
      i.value === "" && n.modelValue.length && y(n.modelValue.length - 1);
    }
    function v() {
      r.value = !1, i.value.trim() && d();
    }
    function y(g) {
      if (n.readonly || n.disabled) return;
      const b = [...n.modelValue];
      b.splice(g, 1), a("update:modelValue", b);
    }
    return (g, b) => (l(), f("div", RS, [
      t.label ? (l(), f("label", xS, _(t.label), 1)) : A("", !0),
      m("div", {
        class: Z(["fu-tag-input", { "is-focused": r.value, "fu-tag-input--error": !!t.error }]),
        onClick: c
      }, [
        (l(!0), f(j, null, re(t.modelValue, (C, w) => (l(), f("span", {
          key: C,
          class: "fu-tag-chip"
        }, [
          ce(_(C) + " ", 1),
          m("button", {
            type: "button",
            class: "fu-tag-chip__remove",
            disabled: t.readonly || t.disabled,
            onClick: ue((k) => y(w), ["stop"])
          }, [
            J(oe(Ct), { size: 12 })
          ], 8, $S)
        ]))), 128)),
        Ve(m("input", {
          ref_key: "inputRef",
          ref: o,
          "onUpdate:modelValue": b[0] || (b[0] = (C) => i.value = C),
          class: "fu-tag-input__field",
          placeholder: t.modelValue.length ? "" : t.placeholder,
          disabled: t.disabled,
          readonly: t.readonly,
          onKeydown: [
            xe(ue(d, ["prevent"]), ["enter"]),
            h
          ],
          onFocus: b[1] || (b[1] = (C) => r.value = !0),
          onBlur: v
        }, null, 40, PS), [
          [Xe, i.value]
        ])
      ], 2),
      t.hint ? (l(), f("p", FS, [
        J(oe(Zs), { size: 14 }),
        m("span", null, _(t.hint), 1)
      ])) : A("", !0),
      t.error ? (l(), f("span", BS, _(t.error), 1)) : t.helperText ? (l(), f("span", zS, _(t.helperText), 1)) : A("", !0)
    ]));
  }
}), Ns = /* @__PURE__ */ ae(LS, [["__scopeId", "data-v-d984f49c"]]), HS = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Ns
}, Symbol.toStringTag, { value: "Module" })), VS = {
  key: 0,
  class: "fu-onboarding-page__scrim"
}, jS = {
  key: 0,
  class: "fu-onboarding__transition"
}, US = { class: "fu-onboarding__transition-text" }, WS = {
  key: 1,
  class: "fu-onboarding__body"
}, YS = { class: "fu-onboarding__question" }, GS = {
  key: 5,
  class: "fu-onboarding__helper"
}, KS = { class: "fu-onboarding__footer" }, qS = { class: "fu-onboarding__progress-track" }, QS = {
  key: 0,
  class: "fu-onboarding__footer-note"
}, ZS = {
  key: 1,
  class: "fu-onboarding__nav"
}, JS = { key: 1 }, XS = { class: "fu-onboarding__next-label" }, eT = /* @__PURE__ */ le({
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
      const w = s.value;
      if (!w || w.type !== "select") return null;
      const k = o.value[w.id];
      return k == null ? null : (w.options ?? []).find((x) => String(x.value) === String(k)) ?? null;
    }), a = t, i = e, r = N(a.step), o = N({ ...a.answers });
    ve(
      () => a.step,
      (w) => r.value = w
    );
    const s = O(() => a.steps[r.value]);
    let u = null;
    ve(
      s,
      (w) => {
        u && (clearTimeout(u), u = null), w?.type === "transition" && (u = setTimeout(() => C(), w.duration ?? 1500));
      },
      { immediate: !0 }
    ), Ae(() => {
      u && clearTimeout(u);
    });
    const c = O(() => (r.value + 1) / a.steps.length * 100), d = O(() => {
      const w = s.value;
      if (!w) return !1;
      if (w.type === "transition" || w.required === !1) return !0;
      const k = o.value[w.id];
      return w.type === "pill-single" ? k != null : w.type === "pill-multi" || w.type === "tag-input" ? Array.isArray(k) && k.length > 0 : w.type === "text" ? typeof k == "string" && k.trim().length > 0 : w.type === "select" ? k != null : !0;
    }), h = O(() => {
      const w = s.value;
      return w?.nextLabel ? w.nextLabel : r.value === a.steps.length - 1 ? "Finish" : "Next";
    }), p = O(
      () => a.color ? { "--fu-typeform-color": a.color } : {}
    ), v = O(
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
    function y(w) {
      const k = s.value;
      if (!k) return;
      const T = k.type === "select" ? w?.value : w;
      o.value = {
        ...o.value,
        [k.id]: T
      }, i("update:answers", o.value), (k.autoAdvance ?? k.type === "pill-single") && C();
    }
    function g() {
      r.value !== 0 && (r.value -= 1, i("update:step", r.value));
    }
    function b(w, k) {
      return w.type === "pill-single" ? k == null : w.type === "pill-multi" || w.type === "tag-input" ? !Array.isArray(k) || k.length === 0 : w.type === "text" ? !k || !String(k).trim() : w.type === "select" ? !k : !1;
    }
    function C() {
      const w = s.value;
      if (w && w.required === !1 && b(w, o.value[w.id]) && i("skip", { id: w.id, type: w.type }), r.value === a.steps.length - 1) {
        i("complete", o.value);
        return;
      }
      r.value += 1, i("update:step", r.value);
    }
    return (w, k) => (l(), f("div", {
      class: "fu-onboarding-page",
      style: ne(v.value)
    }, [
      t.backdropImage ? (l(), f("div", VS)) : A("", !0),
      m("div", {
        class: "fu-onboarding",
        style: ne(p.value)
      }, [
        m("button", {
          class: "fu-onboarding__close",
          type: "button",
          onClick: k[0] || (k[0] = (T) => i("close"))
        }, [
          J(oe(Ct), { size: 16 })
        ]),
        k[7] || (k[7] = yn('<header class="fu-onboarding__header" data-v-38315573><svg class="fu-onboarding__logo" width="91" height="23" viewBox="0 0 91 23" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-38315573><path d="M22.9459 7.11506V18.8695C22.9459 21.0605 21.1697 22.8366 18.9789 22.8366H10.9739V22.7786C15.5829 22.2742 19.1832 18.3609 19.1832 13.6184C19.1832 10.7892 17.9136 8.16294 15.7048 6.40044L15.2119 6.01211L13.2524 8.47599L13.7393 8.86445C15.2003 10.0239 16.0351 11.7575 16.0351 13.6184C16.0351 16.6158 13.8438 19.1204 10.9739 19.6016C10.6435 19.6595 10.3071 19.6885 9.95931 19.6885H4.07049C1.87953 19.6885 0.103516 17.9124 0.103516 15.7215V3.96698C0.103516 1.77615 1.87953 7.36886e-06 4.07049 7.36886e-06H10.9739V0.249318C6.90408 1.20591 3.86616 4.86994 3.86616 9.22393C3.86616 12.0473 5.13581 14.6794 7.35037 16.436L7.83746 16.8303L9.79695 14.3664L9.30999 13.9721C7.85477 12.8125 7.01424 11.0849 7.01424 9.22393C7.01424 6.61499 8.66068 4.38875 10.9739 3.53065C11.6349 3.28134 12.3479 3.14809 13.0901 3.14809H18.9789C21.1697 3.14809 22.9459 4.9241 22.9459 7.11506Z" fill="#FFD37B" data-v-38315573></path><path d="M35.9989 8.3817C35.8474 6.66025 34.7803 5.79965 32.7972 5.79965C31.916 5.79965 31.2276 5.98195 30.7315 6.3468C30.2358 6.71166 29.9877 7.21107 29.9877 7.84425C29.9877 8.43652 30.1704 8.84282 30.5353 9.06341C30.9002 9.2836 31.7093 9.55233 32.9625 9.86866C33.2928 9.96531 33.5476 10.034 33.7269 10.0753C35.3657 10.4883 36.481 10.8604 37.0733 11.1906C38.3815 11.8931 39.0356 12.9882 39.0356 14.4751C39.0356 15.1226 38.9256 15.7076 38.705 16.2312C38.4848 16.7542 38.1887 17.1917 37.817 17.5427C37.4449 17.894 37.0045 18.1869 36.495 18.4204C35.9854 18.6547 35.4551 18.8233 34.9042 18.9267C34.3534 19.03 33.7817 19.082 33.19 19.082C31.3444 19.082 29.8503 18.6412 28.707 17.7598C27.5644 16.8783 26.9927 15.5837 26.9927 13.876H29.5334C29.5334 14.9505 29.8849 15.7457 30.5872 16.262C31.2895 16.7783 32.2049 17.0368 33.3342 17.0368C34.326 17.0368 35.1004 16.8335 35.658 16.4274C36.2161 16.0211 36.495 15.453 36.495 14.7231C36.495 14.2549 36.347 13.8727 36.0508 13.5766C35.7547 13.2805 35.4344 13.0708 35.0903 12.9468C34.746 12.8228 34.1471 12.6507 33.2928 12.4305C33.1966 12.4026 33.1207 12.382 33.0659 12.3685C31.2343 11.9003 30.0292 11.5147 29.4508 11.2114C28.2527 10.5917 27.6124 9.63456 27.5297 8.34039V8.05094C27.5297 6.74287 28.0221 5.69972 29.0066 4.92135C29.9915 4.14351 31.3098 3.75466 32.9625 3.75466C34.5601 3.75466 35.8613 4.13302 36.8666 4.89066C37.8718 5.64818 38.4021 6.81159 38.4574 8.3817H35.9989Z" fill="currentColor" data-v-38315573></path><path d="M46.3256 11.9964L50.7874 18.7512H47.9163L44.6729 13.6078L43.2686 14.9298V18.7512H40.9756V4.04354H43.2686V12.3271L47.5237 8.09235H50.4158L46.3256 11.9964Z" fill="currentColor" data-v-38315573></path><path d="M57.4165 11.9964L61.8783 18.7512H59.0072L55.7637 13.6078L54.3594 14.9298V18.7512H52.0664V4.04354H54.3594V12.3271L58.6145 8.09235H61.5066L57.4165 11.9964Z" fill="currentColor" data-v-38315573></path><path d="M65.5534 18.7511H63.1987V8.0922H65.5534V18.7511ZM65.5534 6.29534H63.1987V3.98162H65.5534V6.29534Z" fill="currentColor" data-v-38315573></path><path d="M70.831 10.6849C70.3143 11.3387 70.056 12.2305 70.056 13.3598C70.056 14.5303 70.3215 15.4529 70.8512 16.1278C71.3814 16.8027 72.1078 17.1398 73.0309 17.1398C73.9534 17.1398 74.6731 16.8095 75.1893 16.1485C75.7056 15.4874 75.9639 14.5716 75.9639 13.4011C75.9639 12.2305 75.6989 11.3219 75.1687 10.6744C74.6385 10.0272 73.8981 9.70365 72.9481 9.70365C72.053 9.70365 71.3473 10.0306 70.831 10.6849ZM78.2155 18.7512H76.0052V17.2845C75.3307 18.455 74.1943 19.0406 72.5968 19.0406C71.0959 19.0406 69.9013 18.531 69.0129 17.5118C68.1249 16.4927 67.6807 15.1226 67.6807 13.4011C67.6807 11.6936 68.1178 10.3336 68.9921 9.32148C69.8666 8.30915 71.0407 7.80331 72.5141 7.80331C74.0154 7.80331 75.1446 8.36095 75.9018 9.47637V4.04355H78.2155V18.7512Z" fill="currentColor" data-v-38315573></path><path d="M83.4188 10.6537C82.8817 11.3286 82.613 12.2512 82.613 13.4217C82.613 14.6198 82.8817 15.5563 83.4188 16.2312C83.9557 16.9057 84.6995 17.2431 85.6499 17.2431C86.5724 17.2431 87.2988 16.9023 87.829 16.2207C88.3593 15.539 88.6242 14.5992 88.6242 13.4011C88.6242 12.2305 88.3593 11.3113 87.829 10.6436C87.2988 9.9754 86.5657 9.64176 85.6292 9.64176C84.6928 9.64176 83.9557 9.9792 83.4188 10.6537ZM89.5539 9.311C90.5178 10.3302 91 11.7003 91 13.4217C91 15.1568 90.5213 16.5341 89.564 17.5531C88.6069 18.5723 87.3093 19.0819 85.6705 19.0819C84.0038 19.0819 82.6819 18.5723 81.7044 17.5531C80.7266 16.5341 80.2378 15.1568 80.2378 13.4217C80.2378 11.7003 80.73 10.3302 81.7145 9.311C82.6992 8.29224 84.0177 7.78273 85.6705 7.78273C87.2954 7.78273 88.5901 8.29224 89.5539 9.311Z" fill="currentColor" data-v-38315573></path></svg></header>', 1)),
        s.value?.type === "transition" ? (l(), f("div", jS, [
          se(w.$slots, "transition", { step: s.value }, () => [
            k[6] || (k[6] = yn('<svg class="fu-onboarding__logo fu-onboarding__logo--lg" width="91" height="23" viewBox="0 0 91 23" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-38315573><path d="M22.9459 7.11506V18.8695C22.9459 21.0605 21.1697 22.8366 18.9789 22.8366H10.9739V22.7786C15.5829 22.2742 19.1832 18.3609 19.1832 13.6184C19.1832 10.7892 17.9136 8.16294 15.7048 6.40044L15.2119 6.01211L13.2524 8.47599L13.7393 8.86445C15.2003 10.0239 16.0351 11.7575 16.0351 13.6184C16.0351 16.6158 13.8438 19.1204 10.9739 19.6016C10.6435 19.6595 10.3071 19.6885 9.95931 19.6885H4.07049C1.87953 19.6885 0.103516 17.9124 0.103516 15.7215V3.96698C0.103516 1.77615 1.87953 7.36886e-06 4.07049 7.36886e-06H10.9739V0.249318C6.90408 1.20591 3.86616 4.86994 3.86616 9.22393C3.86616 12.0473 5.13581 14.6794 7.35037 16.436L7.83746 16.8303L9.79695 14.3664L9.30999 13.9721C7.85477 12.8125 7.01424 11.0849 7.01424 9.22393C7.01424 6.61499 8.66068 4.38875 10.9739 3.53065C11.6349 3.28134 12.3479 3.14809 13.0901 3.14809H18.9789C21.1697 3.14809 22.9459 4.9241 22.9459 7.11506Z" fill="#FFD37B" data-v-38315573></path><path d="M35.9989 8.3817C35.8474 6.66025 34.7803 5.79965 32.7972 5.79965C31.916 5.79965 31.2276 5.98195 30.7315 6.3468C30.2358 6.71166 29.9877 7.21107 29.9877 7.84425C29.9877 8.43652 30.1704 8.84282 30.5353 9.06341C30.9002 9.2836 31.7093 9.55233 32.9625 9.86866C33.2928 9.96531 33.5476 10.034 33.7269 10.0753C35.3657 10.4883 36.481 10.8604 37.0733 11.1906C38.3815 11.8931 39.0356 12.9882 39.0356 14.4751C39.0356 15.1226 38.9256 15.7076 38.705 16.2312C38.4848 16.7542 38.1887 17.1917 37.817 17.5427C37.4449 17.894 37.0045 18.1869 36.495 18.4204C35.9854 18.6547 35.4551 18.8233 34.9042 18.9267C34.3534 19.03 33.7817 19.082 33.19 19.082C31.3444 19.082 29.8503 18.6412 28.707 17.7598C27.5644 16.8783 26.9927 15.5837 26.9927 13.876H29.5334C29.5334 14.9505 29.8849 15.7457 30.5872 16.262C31.2895 16.7783 32.2049 17.0368 33.3342 17.0368C34.326 17.0368 35.1004 16.8335 35.658 16.4274C36.2161 16.0211 36.495 15.453 36.495 14.7231C36.495 14.2549 36.347 13.8727 36.0508 13.5766C35.7547 13.2805 35.4344 13.0708 35.0903 12.9468C34.746 12.8228 34.1471 12.6507 33.2928 12.4305C33.1966 12.4026 33.1207 12.382 33.0659 12.3685C31.2343 11.9003 30.0292 11.5147 29.4508 11.2114C28.2527 10.5917 27.6124 9.63456 27.5297 8.34039V8.05094C27.5297 6.74287 28.0221 5.69972 29.0066 4.92135C29.9915 4.14351 31.3098 3.75466 32.9625 3.75466C34.5601 3.75466 35.8613 4.13302 36.8666 4.89066C37.8718 5.64818 38.4021 6.81159 38.4574 8.3817H35.9989Z" fill="currentColor" data-v-38315573></path><path d="M46.3256 11.9964L50.7874 18.7512H47.9163L44.6729 13.6078L43.2686 14.9298V18.7512H40.9756V4.04354H43.2686V12.3271L47.5237 8.09235H50.4158L46.3256 11.9964Z" fill="currentColor" data-v-38315573></path><path d="M57.4165 11.9964L61.8783 18.7512H59.0072L55.7637 13.6078L54.3594 14.9298V18.7512H52.0664V4.04354H54.3594V12.3271L58.6145 8.09235H61.5066L57.4165 11.9964Z" fill="currentColor" data-v-38315573></path><path d="M65.5534 18.7511H63.1987V8.0922H65.5534V18.7511ZM65.5534 6.29534H63.1987V3.98162H65.5534V6.29534Z" fill="currentColor" data-v-38315573></path><path d="M70.831 10.6849C70.3143 11.3387 70.056 12.2305 70.056 13.3598C70.056 14.5303 70.3215 15.4529 70.8512 16.1278C71.3814 16.8027 72.1078 17.1398 73.0309 17.1398C73.9534 17.1398 74.6731 16.8095 75.1893 16.1485C75.7056 15.4874 75.9639 14.5716 75.9639 13.4011C75.9639 12.2305 75.6989 11.3219 75.1687 10.6744C74.6385 10.0272 73.8981 9.70365 72.9481 9.70365C72.053 9.70365 71.3473 10.0306 70.831 10.6849ZM78.2155 18.7512H76.0052V17.2845C75.3307 18.455 74.1943 19.0406 72.5968 19.0406C71.0959 19.0406 69.9013 18.531 69.0129 17.5118C68.1249 16.4927 67.6807 15.1226 67.6807 13.4011C67.6807 11.6936 68.1178 10.3336 68.9921 9.32148C69.8666 8.30915 71.0407 7.80331 72.5141 7.80331C74.0154 7.80331 75.1446 8.36095 75.9018 9.47637V4.04355H78.2155V18.7512Z" fill="currentColor" data-v-38315573></path><path d="M83.4188 10.6537C82.8817 11.3286 82.613 12.2512 82.613 13.4217C82.613 14.6198 82.8817 15.5563 83.4188 16.2312C83.9557 16.9057 84.6995 17.2431 85.6499 17.2431C86.5724 17.2431 87.2988 16.9023 87.829 16.2207C88.3593 15.539 88.6242 14.5992 88.6242 13.4011C88.6242 12.2305 88.3593 11.3113 87.829 10.6436C87.2988 9.9754 86.5657 9.64176 85.6292 9.64176C84.6928 9.64176 83.9557 9.9792 83.4188 10.6537ZM89.5539 9.311C90.5178 10.3302 91 11.7003 91 13.4217C91 15.1568 90.5213 16.5341 89.564 17.5531C88.6069 18.5723 87.3093 19.0819 85.6705 19.0819C84.0038 19.0819 82.6819 18.5723 81.7044 17.5531C80.7266 16.5341 80.2378 15.1568 80.2378 13.4217C80.2378 11.7003 80.73 10.3302 81.7145 9.311C82.6992 8.29224 84.0177 7.78273 85.6705 7.78273C87.2954 7.78273 88.5901 8.29224 89.5539 9.311Z" fill="currentColor" data-v-38315573></path></svg>', 1)),
            m("p", US, _(s.value.question), 1)
          ], !0)
        ])) : (l(), f("div", WS, [
          m("h2", YS, _(s.value?.question), 1),
          s.value?.type === "pill-single" ? (l(), X(Es, {
            key: 0,
            "model-value": o.value[s.value.id],
            options: s.value.options ?? [],
            size: "md",
            color: t.color,
            "onUpdate:modelValue": k[1] || (k[1] = (T) => y(T))
          }, null, 8, ["model-value", "options", "color"])) : s.value?.type === "pill-multi" ? (l(), X(Ms, {
            key: 1,
            "model-value": o.value[s.value.id] ?? [],
            options: s.value.options ?? [],
            size: "md",
            color: t.color,
            "onUpdate:modelValue": k[2] || (k[2] = (T) => y(T))
          }, null, 8, ["model-value", "options", "color"])) : s.value?.type === "tag-input" ? (l(), X(Ns, {
            key: 2,
            "model-value": o.value[s.value.id] ?? [],
            placeholder: s.value.placeholder,
            hint: s.value.hint,
            validate: s.value.validate,
            "onUpdate:modelValue": k[3] || (k[3] = (T) => y(T))
          }, null, 8, ["model-value", "placeholder", "hint", "validate"])) : s.value?.type === "text" ? (l(), X(Re, {
            key: 3,
            "model-value": o.value[s.value.id] ?? "",
            placeholder: s.value.placeholder,
            variant: "outline",
            size: "lg",
            formWrapperWidth: "100%",
            "onUpdate:modelValue": k[4] || (k[4] = (T) => y(T))
          }, null, 8, ["model-value", "placeholder"])) : s.value?.type === "select" ? (l(), X(Ar, {
            key: 4,
            options: s.value.options ?? [],
            "model-value": n.value,
            placeholder: s.value.placeholder ?? "Select...",
            searchable: !0,
            variant: "button",
            size: "lg",
            "onUpdate:modelValue": k[5] || (k[5] = (T) => y(T))
          }, null, 8, ["options", "model-value", "placeholder"])) : A("", !0),
          s.value?.helperText ? (l(), f("p", GS, _(s.value.helperText), 1)) : A("", !0)
        ])),
        m("footer", KS, [
          m("div", qS, [
            m("div", {
              class: "fu-onboarding__progress-fill",
              style: ne({ width: c.value + "%" })
            }, null, 4)
          ]),
          t.footerNote ? (l(), f("p", QS, [
            J(oe(ca), { size: 14 }),
            m("span", null, _(t.footerNote), 1)
          ])) : A("", !0),
          s.value?.type !== "transition" ? (l(), f("div", ZS, [
            r.value > 0 ? (l(), X(Ee, {
              key: 0,
              variant: "outline",
              size: "md",
              text: "Back",
              icon: oe(Bt),
              onClick: g
            }, null, 8, ["icon"])) : (l(), f("div", JS)),
            J(Ee, {
              variant: "solid",
              size: "md",
              disabled: !d.value,
              onClick: C
            }, {
              default: fe(() => [
                m("span", XS, [
                  ce(_(h.value) + " ", 1),
                  J(oe(zt), { size: 16 })
                ])
              ]),
              _: 1
            }, 8, ["disabled"])
          ])) : A("", !0)
        ])
      ], 4)
    ], 4));
  }
}), tT = /* @__PURE__ */ ae(eT, [["__scopeId", "data-v-38315573"]]), nT = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: tT
}, Symbol.toStringTag, { value: "Module" })), aT = { class: "fu-pagination" }, iT = { class: "fu-pagination__left" }, rT = {
  key: 0,
  class: "fu-pagination__info"
}, oT = {
  key: 0,
  class: "fu-skeleton-cell fu-skeleton-cell--info"
}, sT = { class: "fu-pagination__controls" }, lT = ["disabled"], uT = ["disabled", "onClick"], cT = ["disabled"], dT = /* @__PURE__ */ le({
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
    ), r = O({
      get() {
        return i.value.find((p) => p.value === n.pageSize) || i.value[0];
      },
      set(p) {
        a("update:pageSize", p.value), a("update:page", 1);
      }
    }), o = O(() => Math.max(1, Math.ceil(n.total / n.pageSize))), s = O(
      () => n.total === 0 ? 0 : (n.page - 1) * n.pageSize + 1
    ), u = O(() => Math.min(n.page * n.pageSize, n.total));
    function c(p) {
      p < 1 || p > o.value || a("update:page", p);
    }
    function d(p) {
      p && c(p);
    }
    const h = O(() => {
      const p = [], v = o.value, y = n.page, g = n.siblingCount, b = Math.max(2, y - g), C = Math.min(v - 1, y + g);
      p.push({ key: "p-1", label: "1", page: 1 }), b > 2 && p.push({ key: "e-left", label: "…", ellipsis: !0 });
      for (let w = b; w <= C; w++)
        p.push({ key: `p-${w}`, label: String(w), page: w });
      return C < v - 1 && p.push({ key: "e-right", label: "…", ellipsis: !0 }), v > 1 && p.push({ key: `p-${v}`, label: String(v), page: v }), p;
    });
    return (p, v) => (l(), f("div", aT, [
      m("div", iT, [
        t.showInfo ? (l(), f("div", rT, [
          t.loading ? (l(), f("div", oT)) : (l(), f(j, { key: 1 }, [
            ce(_(s.value) + "–" + _(u.value) + " of " + _(t.total), 1)
          ], 64))
        ])) : A("", !0),
        t.showPageSize ? (l(), X(Ea, {
          key: 1,
          modelValue: r.value,
          "onUpdate:modelValue": v[0] || (v[0] = (y) => r.value = y),
          options: i.value,
          align: "left",
          size: "sm",
          disabled: t.loading
        }, null, 8, ["modelValue", "options", "disabled"])) : A("", !0)
      ]),
      m("div", sT, [
        m("button", {
          class: "fu-pagination__btn",
          disabled: t.page <= 1 || t.loading,
          onClick: v[1] || (v[1] = (y) => c(t.page - 1)),
          "aria-label": "Previous page"
        }, [
          J(oe(Bt), { class: "fu-pagination__icon" })
        ], 8, lT),
        t.loading ? (l(), f(j, { key: 0 }, re(5, (y) => m("div", {
          key: `skel-${y}`,
          class: "fu-skeleton-cell fu-skeleton-cell--page"
        })), 64)) : t.variant !== "simple" ? (l(!0), f(j, { key: 1 }, re(h.value, (y) => (l(), f("button", {
          key: y.key,
          class: Z(["fu-pagination__btn", { active: y.page === t.page, ellipsis: y.ellipsis }]),
          disabled: !!y.ellipsis,
          onClick: (g) => d(y.page)
        }, _(y.label), 11, uT))), 128)) : A("", !0),
        m("button", {
          class: "fu-pagination__btn",
          disabled: t.page >= o.value || t.loading,
          onClick: v[2] || (v[2] = (y) => c(t.page + 1)),
          "aria-label": "Next page"
        }, [
          J(oe(zt), { class: "fu-pagination__icon" })
        ], 8, cT)
      ])
    ]));
  }
}), fT = /* @__PURE__ */ ae(dT, [["__scopeId", "data-v-ef948ad4"]]), mT = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: fT
}, Symbol.toStringTag, { value: "Module" })), hT = {
  key: 0,
  class: "fu-panel__header px-2"
}, vT = {
  key: 0,
  class: "fu-panel__title-skeleton"
}, pT = {
  key: 1,
  class: "fu-panel__title"
}, gT = {
  key: 2,
  class: "fu-panel__actions"
}, yT = { class: "fu-panel__body-wrapper" }, bT = { class: "fu-panel__body scrollbar__control customScrollBar px-2" }, CT = {
  key: 0,
  class: "fu-panel__skeleton-body"
}, wT = /* @__PURE__ */ le({
  __name: "FuPanel",
  props: {
    title: {},
    basis: {},
    loading: { type: Boolean }
  },
  setup(t) {
    const e = t, n = O(() => e.basis ? typeof e.basis == "number" ? `${e.basis}px` : e.basis : "300px");
    return (a, i) => (l(), f("div", {
      class: "fu-panel",
      style: ne({ flexBasis: n.value })
    }, [
      t.title || a.$slots.actions ? (l(), f("div", hT, [
        t.loading ? (l(), f("div", vT)) : t.title ? (l(), f("h3", pT, _(t.title), 1)) : A("", !0),
        a.$slots.actions && !t.loading ? (l(), f("div", gT, [
          se(a.$slots, "actions")
        ])) : A("", !0)
      ])) : A("", !0),
      m("div", yT, [
        m("div", bT, [
          t.loading ? (l(), f("div", CT, [...i[0] || (i[0] = [
            yn('<div class="skeleton-line" style="width:60%;height:14px;"></div><div class="skeleton-line" style="width:85%;height:14px;"></div><div class="skeleton-line" style="width:45%;height:14px;"></div><div class="skeleton-line" style="width:70%;height:14px;"></div><div class="skeleton-line" style="width:55%;height:14px;"></div>', 5)
          ])])) : se(a.$slots, "default", { key: 1 })
        ])
      ])
    ], 4));
  }
}), AT = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: wT
}, Symbol.toStringTag, { value: "Module" })), _T = {
  key: 0,
  class: "fu-input-label"
}, kT = {
  key: 0,
  class: "fu-input-required"
}, ST = ["type", "placeholder", "disabled", "required"], TT = {
  key: 1,
  class: "fu-input-error"
}, ET = /* @__PURE__ */ le({
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
    const n = t, a = e, i = N(n.modelValue), r = N(!1), o = () => {
      r.value = !r.value;
    };
    return ve(i, (s) => a("update:modelValue", s)), ve(
      () => n.modelValue,
      (s) => i.value = s
    ), (s, u) => (l(), f("div", {
      class: "fu-input-wrapper",
      style: ne({ width: t.formWrapperWidth })
    }, [
      t.label ? (l(), f("label", _T, [
        ce(_(t.label) + " ", 1),
        t.required ? (l(), f("span", kT, "*")) : A("", !0)
      ])) : A("", !0),
      m("div", {
        class: Z(["fu-input-container", [`fu-input--${t.size}`, `fu-input--${t.variant}`, { "fu-input--error": t.error }]])
      }, [
        Ve(m("input", xt(s.$attrs, {
          class: "fu-input",
          type: r.value ? "text" : "password",
          placeholder: t.placeholder,
          disabled: t.disabled,
          required: t.required,
          "onUpdate:modelValue": u[0] || (u[0] = (c) => i.value = c)
        }), null, 16, ST), [
          [pr, i.value]
        ]),
        m("button", {
          type: "button",
          class: "fu-password-toggle",
          onClick: o
        }, [
          (l(), X(ge(r.value ? oe(Gs) : oe(Ks)), { class: "fu-password-icon" }))
        ])
      ], 2),
      t.error ? (l(), f("span", TT, _(t.error), 1)) : A("", !0)
    ], 4));
  }
}), MT = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: ET
}, Symbol.toStringTag, { value: "Module" })), NT = { class: "fu-popover__body customScrollBar" }, DT = /* @__PURE__ */ le({
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
    const a = t, i = n, r = N(!1), o = N(null), s = N(null), u = N({
      position: "fixed",
      visibility: "hidden",
      top: "-9999px",
      left: "-9999px",
      zIndex: 9999
    }), c = a.stickyHeader ?? !1, d = a.stickyFooter ?? !1;
    function h() {
      r.value ? v() : p();
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
      }, r.value = !0, i("open"), we(
        () => requestAnimationFrame(
          () => requestAnimationFrame(() => {
            y(), we(() => {
              const b = s.value?.querySelector("input, textarea");
              b && b.focus();
            });
          })
        )
      );
    }
    function v() {
      r.value = !1, i("close");
    }
    function y() {
      if (!o.value || !s.value) return;
      const b = o.value.getBoundingClientRect(), C = s.value.getBoundingClientRect(), w = 8, k = a.offset ?? 6, T = window.innerHeight - b.bottom - w, M = b.top - w;
      let x = a.side ?? "bottom";
      x === "bottom" && C.height > T && M > T ? x = "top" : x === "top" && C.height > M && T > M && (x = "bottom");
      let L = x === "top" ? b.top - C.height - k : b.bottom + k, K = a.align === "right" ? b.right - C.width : a.align === "center" ? b.left + b.width / 2 - C.width / 2 : b.left;
      K = Math.max(w, Math.min(K, window.innerWidth - C.width - w)), L = Math.max(w, Math.min(L, window.innerHeight - C.height - w)), u.value = {
        position: "fixed",
        top: `${L}px`,
        left: `${K}px`,
        width: a.width ?? "auto",
        maxHeight: a.maxHeight ?? "none",
        zIndex: 9999,
        visibility: "visible"
      };
    }
    function g(b) {
      if (!r.value) return;
      const C = b.target;
      o.value?.contains(C) || s.value?.contains(C) || C instanceof Element && C.closest(".fu-popover, .fu-popover-wrap") || v();
    }
    return _e(() => {
      window.addEventListener("mousedown", g), window.addEventListener("resize", y), window.addEventListener("scroll", y, !0);
    }), Ae(() => {
      window.removeEventListener("mousedown", g), window.removeEventListener("resize", y), window.removeEventListener("scroll", y, !0);
    }), e({ open: p, close: v }), (b, C) => (l(), f(j, null, [
      m("div", {
        ref_key: "triggerRef",
        ref: o,
        class: "fu-popover-wrap",
        onClick: h
      }, [
        se(b.$slots, "trigger", {}, void 0, !0)
      ], 512),
      (l(), X(De, { to: "body" }, [
        J(He, { name: "fu-popover" }, {
          default: fe(() => [
            r.value ? (l(), f("div", {
              key: 0,
              ref_key: "popoverRef",
              ref: s,
              class: "fu-popover",
              style: ne(u.value),
              tabindex: "-1",
              onClick: C[0] || (C[0] = ue(() => {
              }, ["stop"]))
            }, [
              b.$slots.header ? (l(), f("div", {
                key: 0,
                class: Z(["fu-popover__header", { "is-sticky": oe(c) }])
              }, [
                se(b.$slots, "header", {}, void 0, !0)
              ], 2)) : A("", !0),
              m("div", NT, [
                se(b.$slots, "default", {}, void 0, !0)
              ]),
              b.$slots.footer ? (l(), f("div", {
                key: 1,
                class: Z(["fu-popover__footer", { "is-sticky": oe(d) }])
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
}), IT = /* @__PURE__ */ ae(DT, [["__scopeId", "data-v-ff9bba0a"]]), OT = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: IT
}, Symbol.toStringTag, { value: "Module" })), RT = { class: "fu-progress-stepper" }, xT = { class: "fu-progress-bar" }, $T = {
  key: 0,
  class: "fu-step-labels"
}, PT = ["onClick"], FT = { class: "circle" }, BT = { class: "label" }, zT = /* @__PURE__ */ le({
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
    ), r = (o) => a("step-click", o);
    return (o, s) => (l(), f("div", RT, [
      m("div", xT, [
        m("div", {
          class: "fu-progress-fill",
          style: ne({ width: i.value })
        }, null, 4)
      ]),
      t.showLabels && t.steps ? (l(), f("div", $T, [
        (l(!0), f(j, null, re(t.steps, (u, c) => (l(), f("div", {
          key: c,
          class: Z(["fu-step-label", { active: t.currentStep === c }]),
          onClick: (d) => r(c)
        }, [
          m("div", FT, _(c + 1), 1),
          m("div", BT, _(u.title), 1)
        ], 10, PT))), 128))
      ])) : A("", !0)
    ]));
  }
}), LT = /* @__PURE__ */ ae(zT, [["__scopeId", "data-v-6ac0e869"]]), HT = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: LT
}, Symbol.toStringTag, { value: "Module" })), VT = { class: "fu-range-control" }, jT = {
  key: 0,
  class: "fu-range-label"
}, UT = { class: "fu-range-track" }, WT = ["min", "max", "step", "value"], YT = { class: "fu-range-value" }, GT = /* @__PURE__ */ le({
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
    function i(o) {
      const s = o.target, u = Number(s.value);
      a("update:modelValue", u), a("change", u);
    }
    const r = O(
      () => n.unit ? `${n.modelValue}${n.unit}` : String(n.modelValue)
    );
    return (o, s) => (l(), f("div", VT, [
      t.label ? (l(), f("label", jT, _(t.label), 1)) : A("", !0),
      m("div", UT, [
        m("input", {
          type: "range",
          min: t.min,
          max: t.max,
          step: t.step,
          value: t.modelValue,
          onInput: i
        }, null, 40, WT),
        m("span", YT, _(r.value), 1)
      ])
    ]));
  }
}), KT = /* @__PURE__ */ ae(GT, [["__scopeId", "data-v-9c1e4c91"]]), qT = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: KT
}, Symbol.toStringTag, { value: "Module" })), QT = {};
function ZT(t, e) {
  return null;
}
const JT = /* @__PURE__ */ ae(QT, [["render", ZT]]), XT = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: JT
}, Symbol.toStringTag, { value: "Module" })), eE = {};
function tE(t, e) {
  return null;
}
const nE = /* @__PURE__ */ ae(eE, [["render", tE]]), aE = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: nE
}, Symbol.toStringTag, { value: "Module" })), iE = {};
function rE(t, e) {
  return null;
}
const oE = /* @__PURE__ */ ae(iE, [["render", rE]]), sE = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: oE
}, Symbol.toStringTag, { value: "Module" })), lE = {};
function uE(t, e) {
  return null;
}
const cE = /* @__PURE__ */ ae(lE, [["render", uE]]), dE = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: cE
}, Symbol.toStringTag, { value: "Module" })), fE = {};
function mE(t, e) {
  return null;
}
const hE = /* @__PURE__ */ ae(fE, [["render", mE]]), vE = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: hE
}, Symbol.toStringTag, { value: "Module" })), pE = {};
function gE(t, e) {
  return null;
}
const yE = /* @__PURE__ */ ae(pE, [["render", gE]]), bE = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: yE
}, Symbol.toStringTag, { value: "Module" })), CE = {}, wE = { class: "fu-section-header" }, AE = { class: "fu-section-header__left" }, _E = { class: "fu-section-header__right" };
function kE(t, e) {
  return l(), f("div", wE, [
    m("div", AE, [
      se(t.$slots, "left", {}, void 0, !0)
    ]),
    m("div", _E, [
      se(t.$slots, "right", {}, void 0, !0)
    ])
  ]);
}
const SE = /* @__PURE__ */ ae(CE, [["render", kE], ["__scopeId", "data-v-b7f6e763"]]), TE = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: SE
}, Symbol.toStringTag, { value: "Module" })), EE = { class: "fu-sidebar__list" }, ME = ["onClick", "onMouseenter"], NE = { class: "fu-sidebar__icon-wrapper" }, DE = {
  key: 0,
  class: "fu-sidebar__badge"
}, IE = {
  key: 0,
  class: "fu-sidebar__label"
}, OE = /* @__PURE__ */ le({
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
    N(null);
    const n = N(null), a = N({}), i = O(() => ({
      "--fu-sidebar-bg": e.backgroundColor ?? "var(--fu-brand-background)",
      "--fu-sidebar-radius": e.borderRadius ?? "0px",
      width: e.hideLabels ? "54px" : "70px"
    }));
    function r(s, u) {
      if (!e.hideLabels) return;
      const c = e.modules.find((h) => h.name === u);
      n.value = c?.label ?? u;
      const d = s.currentTarget.getBoundingClientRect();
      a.value = {
        position: "fixed",
        left: `${d.right + 8}px`,
        top: `${d.top + d.height / 2}px`,
        transform: "translateY(-50%)",
        zIndex: "99999"
      };
    }
    function o() {
      n.value = null;
    }
    return (s, u) => (l(), f("nav", {
      class: "fu-sidebar",
      style: ne(i.value)
    }, [
      m("ul", EE, [
        (l(!0), f(j, null, re(t.modules, (c) => (l(), f("li", {
          key: c.name,
          class: Z({ active: t.activeModule === c.name })
        }, [
          m("div", {
            class: Z(["fu-sidebar__item", { "fu-sidebar__item--collapsed": t.hideLabels }]),
            onClick: (d) => s.$emit("select", c),
            onMouseenter: (d) => r(d, c.name),
            onMouseleave: o
          }, [
            m("div", NE, [
              (l(), X(ge(c.icon), {
                class: "fu-sidebar__icon",
                size: 20
              })),
              c.count ? (l(), f("span", DE, _(c.count > 99 ? "99+" : c.count), 1)) : A("", !0)
            ]),
            t.hideLabels ? A("", !0) : (l(), f("span", IE, _(c.label), 1))
          ], 42, ME)
        ], 2))), 128))
      ]),
      (l(), X(De, { to: "body" }, [
        t.hideLabels && n.value ? (l(), f("span", {
          key: 0,
          class: "fu-sidebar__tooltip",
          style: ne(a.value)
        }, _(n.value), 5)) : A("", !0)
      ]))
    ], 4));
  }
}), RE = /* @__PURE__ */ ae(OE, [["__scopeId", "data-v-3af597f2"]]), xE = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: RE
}, Symbol.toStringTag, { value: "Module" })), $E = ["disabled", "aria-expanded"], PE = ["aria-expanded", "disabled"], FE = ["onClick"], BE = ["src"], zE = { class: "fu-split-button__option-label" }, LE = /* @__PURE__ */ le({
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
    const n = t, a = e, i = N(!1), r = N(null), o = N(null), s = O(() => n.align ?? "right"), u = N({}), c = O(() => `fu-split-button--${n.size ?? "sm"}`), d = O(() => `fu-split-button--${n.variant ?? "solid"}`), h = O(() => ({
      ...n.color ? { "--fu-split-bg": n.color } : {},
      ...n.buttonWidth ? { width: n.buttonWidth } : {}
    }));
    function p() {
      n.disabled || (i.value = !i.value, i.value && we(() => {
        v(), window.addEventListener("click", y), window.addEventListener("resize", v);
      }));
    }
    function v() {
      if (!o.value || !r.value) return;
      const C = o.value.getBoundingClientRect(), w = r.value.offsetWidth, k = {
        top: `${C.bottom + window.scrollY + 4}px`,
        left: `${C.left + window.scrollX}px`
      };
      s.value === "right" ? k.left = `${C.right - w + window.scrollX}px` : s.value === "center" && (k.left = `${C.left + C.width / 2 - w / 2 + window.scrollX}px`), u.value = {
        position: "absolute",
        ...k,
        zIndex: "1000"
      };
    }
    function y(C) {
      o.value?.contains(C.target) || r.value?.contains(C.target) || (i.value = !1, window.removeEventListener("click", y), window.removeEventListener("resize", v));
    }
    function g() {
      n.disabled || a("main-action");
    }
    function b(C) {
      C.onClick && C.onClick(), a("select", C), i.value = !1, window.removeEventListener("click", y), window.removeEventListener("resize", v);
    }
    return _e(() => {
      Ae(() => {
        window.removeEventListener("click", y), window.removeEventListener("resize", v);
      });
    }), (C, w) => (l(), f("div", {
      class: Z(["fu-split-button", [c.value, d.value]]),
      style: ne(h.value),
      ref_key: "splitButtonRef",
      ref: o
    }, [
      m("button", {
        class: "fu-split-button__main",
        disabled: t.disabled,
        onClick: g,
        type: "button",
        "aria-haspopup": "true",
        "aria-expanded": i.value
      }, [
        t.icon ? (l(), X(ge(t.icon), {
          key: 0,
          class: "fu-split-button__icon"
        })) : A("", !0),
        m("span", null, [
          se(C.$slots, "default", {}, void 0, !0)
        ])
      ], 8, $E),
      m("button", {
        class: "fu-split-button__toggle",
        onClick: p,
        "aria-expanded": i.value,
        disabled: t.disabled,
        type: "button",
        "aria-label": "Toggle dropdown"
      }, [
        J(oe(Le))
      ], 8, PE),
      (l(), X(De, { to: "body" }, [
        J(He, { name: "fade" }, {
          default: fe(() => [
            i.value ? (l(), f("div", {
              key: 0,
              class: Z(["fu-split-button__dropdown", [`fu-split-button__dropdown--${s.value}`]]),
              ref_key: "dropdownRef",
              ref: r,
              style: ne(u.value)
            }, [
              (l(!0), f(j, null, re(t.options, (k) => (l(), f("div", {
                key: k.value,
                class: "fu-split-button__option",
                onClick: (T) => b(k)
              }, [
                k.type === "icon" ? (l(), X(ge(k.icon), {
                  key: 0,
                  class: "fu-split-button__option-icon"
                })) : k.type === "image" ? (l(), f("img", {
                  key: 1,
                  src: k.imageUrl,
                  class: "fu-split-button__option-image",
                  alt: ""
                }, null, 8, BE)) : A("", !0),
                m("span", zE, _(k.label), 1)
              ], 8, FE))), 128))
            ], 6)) : A("", !0)
          ]),
          _: 1
        })
      ]))
    ], 6));
  }
}), HE = /* @__PURE__ */ ae(LE, [["__scopeId", "data-v-569e263d"]]), VE = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: HE
}, Symbol.toStringTag, { value: "Module" })), jE = {
  key: 0,
  class: "fu-empty__visual"
}, UE = ["src", "alt"], WE = { class: "fu-empty__body" }, YE = { class: "fu-empty__title" }, GE = {
  key: 0,
  class: "fu-empty__description"
}, KE = {
  key: 1,
  class: "fu-empty__content"
}, qE = {
  key: 2,
  class: "fu-empty__actions"
}, QE = {
  key: 3,
  class: "fu-empty__cards"
}, ZE = /* @__PURE__ */ le({
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
    return (e, n) => (l(), f("div", {
      class: Z(["fu-empty", [`fu-empty--${t.size}`, `fu-empty--${t.variant}`]])
    }, [
      t.visual && t.visual.type !== "none" ? (l(), f("div", jE, [
        t.visual.type === "icon" ? (l(), X(ge(t.visual.value), {
          key: 0,
          class: "fu-empty__icon"
        })) : t.visual.type === "image" ? (l(), f("img", {
          key: 1,
          src: t.visual.src,
          alt: t.visual.alt,
          class: "fu-empty__image"
        }, null, 8, UE)) : A("", !0)
      ])) : A("", !0),
      m("div", WE, [
        m("p", YE, _(t.title), 1),
        t.description ? (l(), f("p", GE, _(t.description), 1)) : A("", !0)
      ]),
      e.$slots.default ? (l(), f("div", KE, [
        se(e.$slots, "default", {}, void 0, !0)
      ])) : A("", !0),
      t.primaryAction || t.secondaryActions?.length ? (l(), f("div", qE, [
        t.primaryAction ? (l(), X(Ee, {
          key: 0,
          text: t.primaryAction.label,
          buttonWidth: "fit-content",
          onClick: n[0] || (n[0] = (a) => t.primaryAction.onClick?.())
        }, null, 8, ["text"])) : A("", !0),
        (l(!0), f(j, null, re(t.secondaryActions, (a) => (l(), X(Ee, {
          key: a.label,
          text: a.label,
          buttonWidth: "fit-content",
          variant: "subtle",
          onClick: (i) => a.onClick?.()
        }, null, 8, ["text", "onClick"]))), 128))
      ])) : A("", !0),
      t.cards?.length ? (l(), f("div", QE, [
        (l(!0), f(j, null, re(t.cards, (a, i) => (l(), X(_r, {
          key: a.title + i,
          title: a.title,
          description: a.description,
          image: a.image,
          initial: a.initial,
          color: a.color,
          onClick: (r) => a.onClick?.()
        }, null, 8, ["title", "description", "image", "initial", "color", "onClick"]))), 128))
      ])) : A("", !0)
    ], 2));
  }
}), JE = /* @__PURE__ */ ae(ZE, [["__scopeId", "data-v-6b182dfb"]]), XE = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: JE
}, Symbol.toStringTag, { value: "Module" })), eM = ["aria-checked", "disabled"], tM = /* @__PURE__ */ le({
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
    const r = O(() => {
      switch (n.size) {
        case "sm":
          return "fu-switch--sm";
        case "lg":
          return "fu-switch--lg";
        default:
          return "fu-switch--md";
      }
    });
    return (o, s) => (l(), f("button", {
      type: "button",
      class: Z(["fu-switch", [{ "fu-switch--checked": t.modelValue, disabled: t.disabled }, r.value]]),
      role: "switch",
      "aria-checked": t.modelValue,
      disabled: t.disabled,
      onClick: i
    }, [...s[0] || (s[0] = [
      m("span", { class: "fu-switch__thumb" }, null, -1)
    ])], 10, eM));
  }
}), nM = /* @__PURE__ */ ae(tM, [["__scopeId", "data-v-c8285d1a"]]), aM = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: nM
}, Symbol.toStringTag, { value: "Module" })), iM = { class: "fu-tabs" }, rM = { class: "fu-tabs__header-wrapper" }, oM = { class: "fu-tabs-buttons scrollbar__control customScrollBar" }, sM = ["onClick", "disabled"], lM = {
  key: 0,
  class: "fu-tab__avatar"
}, uM = ["src"], cM = {
  key: 1,
  class: "fu-tab__avatar-fallback"
}, dM = {
  key: 2,
  class: "fu-tab__title"
}, fM = {
  key: 3,
  class: "fu-tab__count"
}, mM = { class: "fu-tabs__content-wrapper" }, hM = {
  key: 0,
  class: "fu-tabs__footer"
}, vM = {
  __name: "FusionTab",
  props: {
    tabs: Array,
    defaultActiveDesktop: String,
    defaultActiveMobile: String
  },
  emits: ["tab-change"],
  setup(t, { expose: e, emit: n }) {
    const a = t, i = n, r = N(window.innerWidth <= 768), o = N(""), s = N(null), u = O(
      () => a.tabs.filter((v) => !v.mobileOnly || r.value)
    );
    function c() {
      const v = s.value;
      v && (v.style.overflowY = "hidden", requestAnimationFrame(() => {
        v.style.overflowY = "auto";
      }));
    }
    function d(v) {
      const y = a.tabs.find((g) => g.key === v);
      !y || y.disabled || (o.value = v, i("tab-change", v), we(() => {
        const g = s.value;
        g && (g.scrollTop = 0, c());
      }));
    }
    function h() {
      const v = a.tabs[0]?.key, y = r.value ? a.defaultActiveMobile || v : a.defaultActiveDesktop || v;
      o.value = y;
    }
    function p() {
      const v = r.value;
      r.value = window.innerWidth <= 768, v !== r.value && we(h);
    }
    return _e(() => {
      p(), h(), c(), window.addEventListener("resize", p);
    }), Ae(() => {
      window.removeEventListener("resize", p);
    }), e({ setActive: d }), (v, y) => (l(), f("div", iM, [
      m("div", rM, [
        m("div", oM, [
          (l(!0), f(j, null, re(u.value, (g) => (l(), f("button", {
            key: g.key,
            onClick: (b) => d(g.key),
            class: Z(["fu-tab", { "fu-tab--active": o.value === g.key }]),
            disabled: g.disabled
          }, [
            g.avatarSrc || g.avatarText ? (l(), f("div", lM, [
              g.avatarSrc ? (l(), f("img", {
                key: 0,
                src: g.avatarSrc,
                class: "fu-tab__avatar-img",
                alt: "avatar"
              }, null, 8, uM)) : (l(), f("div", cM, _(g.avatarText?.charAt(0)?.toUpperCase()), 1))
            ])) : g.icon ? (l(), X(ge(g.icon), {
              key: 1,
              size: 16,
              class: "fu-tab__icon"
            })) : A("", !0),
            !g.avatarSrc && !g.avatarText && g.title ? (l(), f("span", dM, _(g.title), 1)) : A("", !0),
            typeof g.count == "number" ? (l(), f("span", fM, _(g.count), 1)) : A("", !0)
          ], 10, sM))), 128))
        ])
      ]),
      m("div", mM, [
        m("div", {
          class: "fu-tabs__body scrollbar__control customScrollBar",
          ref_key: "tabBody",
          ref: s
        }, [
          (l(), X(Ps, null, [
            (l(!0), f(j, null, re(u.value, (g) => Ve((l(), f("div", {
              key: g.key,
              class: "fu-tab-panel"
            }, [
              se(v.$slots, g.key, {}, void 0, !0)
            ])), [
              [_a, o.value === g.key]
            ])), 128))
          ], 1024))
        ], 512),
        v.$slots.footer ? (l(), f("div", hM, [
          se(v.$slots, "footer", {}, void 0, !0)
        ])) : A("", !0)
      ])
    ]));
  }
}, pM = /* @__PURE__ */ ae(vM, [["__scopeId", "data-v-6151e991"]]), gM = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: pM
}, Symbol.toStringTag, { value: "Module" })), yM = { class: "fu-theme-selector" }, bM = { class: "fu-theme-grid" }, CM = ["onClick"], wM = {
  key: 0,
  class: "fu-theme-check"
}, AM = { class: "fu-theme-label" }, _M = /* @__PURE__ */ le({
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
    return (i, r) => (l(), f("div", yM, [
      m("div", bM, [
        (l(!0), f(j, null, re(t.themes, (o) => (l(), f("div", {
          key: o.key,
          class: Z(["fu-theme-card", { "is-active": t.modelValue === o.key }]),
          onClick: (s) => a(o.key),
          tabindex: "0",
          role: "button"
        }, [
          m("div", {
            class: Z(["fu-theme-preview", `fu-theme-preview--${o.key}`])
          }, [
            r[0] || (r[0] = m("div", { class: "fu-theme-header" }, null, -1)),
            r[1] || (r[1] = m("div", { class: "fu-theme-body" }, null, -1)),
            r[2] || (r[2] = m("div", { class: "fu-theme-footer" }, null, -1)),
            t.modelValue === o.key ? (l(), f("div", wM, [
              J(oe(ka), { class: "fu-check-icon" })
            ])) : A("", !0)
          ], 2),
          m("span", AM, _(o.name), 1)
        ], 10, CM))), 128))
      ])
    ]));
  }
}), kM = /* @__PURE__ */ ae(_M, [["__scopeId", "data-v-405e1dba"]]), SM = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: kM
}, Symbol.toStringTag, { value: "Module" })), TM = { class: "fu-toolbar__left" }, EM = { class: "fu-toolbar__actions" }, MM = /* @__PURE__ */ le({
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
    return (a, i) => (l(), f("div", {
      class: Z(["fu-toolbar", n.value])
    }, [
      m("div", TM, [
        se(a.$slots, "left", {}, void 0, !0)
      ]),
      m("div", EM, [
        se(a.$slots, "right", {}, void 0, !0)
      ])
    ], 2));
  }
}), NM = /* @__PURE__ */ ae(MM, [["__scopeId", "data-v-aa44a495"]]), DM = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: NM
}, Symbol.toStringTag, { value: "Module" })), IM = {
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
}, OM = { class: "fu-under-construction" }, RM = { class: "fu-under-construction__inner" }, xM = ["src", "alt"], $M = { class: "fu-under-construction__content" }, PM = { class: "fu-under-construction__title" }, FM = { class: "fu-under-construction__subtitle" };
function BM(t, e, n, a, i, r) {
  return l(), f("div", OM, [
    m("div", RM, [
      m("img", {
        class: "fu-under-construction__image",
        src: n.imageSrc,
        alt: n.imageAlt
      }, null, 8, xM),
      m("div", $M, [
        m("h1", PM, _(n.title), 1),
        m("p", FM, _(n.subtitle), 1),
        se(t.$slots, "default")
      ])
    ])
  ]);
}
const zM = /* @__PURE__ */ ae(IM, [["render", BM]]), LM = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: zM
}, Symbol.toStringTag, { value: "Module" }));
function mr() {
  return ({ message: t, type: e = "info", duration: n = 3500 }) => {
    const a = document.createElement("div");
    document.body.appendChild(a);
    const i = Fs(Ts, { message: t, type: e, duration: n });
    i.mount(a), setTimeout(() => {
      i.unmount(), document.body.removeChild(a);
    }, n + 500);
  };
}
const Ds = localStorage.getItem("theme") || "auto", It = N(Ds);
function HM() {
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}
function ei(t) {
  const e = t === "auto" ? HM() : t;
  document.documentElement.setAttribute("data-theme", e), localStorage.setItem("theme", t);
}
ei(Ds);
window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", () => {
  It.value === "auto" && ei("auto");
});
Bs(() => ei(It.value));
function UM() {
  return {
    theme: It,
    setTheme: (t) => {
      It.value = t;
    },
    toggleTheme: () => {
      It.value = It.value === "dark" ? "light" : "dark";
    }
  };
}
const hr = /* @__PURE__ */ Object.assign({ "./components/StatusDropdown/FusionStatusDropdown.vue": ll, "./components/TextInput/EditableDisplayField.vue": _l, "./components/TextInput/FusionTextInput.vue": Ol, "./components/accordion/FusionAccordion.vue": Bl, "./components/actionButton/FusionActionButton.vue": fl, "./components/autocomplete/FusionAutocomplete.vue": ou, "./components/avatar/FuAvatar.vue": gl, "./components/avatar/FuAvatarGroup.vue": uu, "./components/badge/FusionBadge.vue": fu, "./components/button/FusionButton.vue": gu, "./components/buttonTab/FusionButtonTab.vue": Tu, "./components/cards/FusionInfoCard.vue": Ru, "./components/cards/FusionStatCard.vue": Uu, "./components/checkbox/FusionCheckbox.vue": qu, "./components/codeInput/FusionCodeInput.vue": nc, "./components/colourPallet/FuColorPopover.vue": uc, "./components/combobox/FuCombobox.vue": Cc, "./components/datePicker/dateField/FusionDatePicker.vue": Wc, "./components/datePicker/datePickerBackup.vue": dd, "./components/datePicker/monthPicker/FusionMonthPicker.vue": wd, "./components/datePicker/plainDate/FusionPlainDatePicker.vue": Bd, "./components/datePicker/time/FusionTimePicker.vue": Vd, "./components/drawer/FusionDrawer.vue": Qd, "./components/dropdown/FusionDropdownButton.vue": ef, "./components/dropdownInline/FusionDropdownInline.vue": sf, "./components/dropdownMenu/DropdownMenu.vue": yf, "./components/editWrapper/EditableFieldWrapper.vue": Tf, "./components/editor/blockContent/BlockRenderer.vue": Nf, "./components/editor/contract/FuContractRenderer.vue": Mr, "./components/editor/contract/FuSignaturePad.vue": Of, "./components/editor/dividerRender/DividerRenderer.vue": Nr, "./components/editor/documentRender/FuDocumentRenderer.vue": dm, "./components/editor/imageRender/ImageRenderer.vue": Ir, "./components/editor/invoiceRender/FuinvoicePreview.vue": Or, "./components/editor/pageRender/FormRender.vue": Pv, "./components/editor/pageRender/PageRenderer.vue": lm, "./components/editor/questionRender/FuQuestionRenderer.vue": Fr, "./components/editor/renders/FuEmbedRenderer.vue": D1, "./components/editor/scheduler/FuSchedulerWidget.vue": Cs, "./components/editor/serviceRender/ServiceCard.vue": L1, "./components/editor/serviceRender/ServiceRenderer.vue": As, "./components/editor/textRender/TextRenderer.vue": _s, "./components/editor/videoRender/FuVideoRenderer.vue": ks, "./components/fileUploader/FusionUpload.vue": rp, "./components/filterDropdown/FusionFilterDropdown.vue": nA, "./components/floatingHeader/FusionSmartHeader.vue": sA, "./components/icons/FusionTrashIcon.vue": dA, "./components/items/activity/FusionActivityItem.vue": SA, "./components/items/attachments/FusionAttachment.vue": FA, "./components/items/notes/FusionNoteCard.vue": GA, "./components/items/task/FusionTaskItem.vue": r_, "./components/kanban/Kanban.vue": S_, "./components/layout/AppShell.vue": Y_, "./components/list/FusionListView.vue": ck, "./components/list/ListviewBackup.vue": Tk, "./components/list/TableBackup.vue": Fk, "./components/modal/FusionConfirmDialog.vue": Wk, "./components/modal/FusionModal.vue": I_, "./components/modal/FusionPreviewModal.vue": eS, "./components/modulemenu/FusionModuleMenu.vue": oS, "./components/notification/FuNotification.vue": dS, "./components/notifications/FuAlert.vue": yS, "./components/notifications/FusionToast.vue": AS, "./components/onboarding/FusionOnboarding.vue": nT, "./components/onboarding/FusionPillMultiSelect.vue": OS, "./components/onboarding/FusionPillSelect.vue": TS, "./components/onboarding/FusionTagInput.vue": HS, "./components/pagination/FusionPagination.vue": mT, "./components/panel/FuPanel.vue": AT, "./components/password/FusionPasswordInput.vue": MT, "./components/popover/FuPopover.vue": OT, "./components/progress/FusionProgressStepper.vue": HT, "./components/radio/FusionRadio.vue": Qv, "./components/rangeControl/FusionRangeControl.vue": qT, "./components/renderer/DocumentRenderer.vue": XT, "./components/renderer/widgets/DividerWidget.vue": aE, "./components/renderer/widgets/ImageWidget.vue": sE, "./components/renderer/widgets/ServiceWidget.vue": dE, "./components/renderer/widgets/TextWidget.vue": vE, "./components/renderer/widgets/VideoWidget.vue": bE, "./components/section/FuSectionHeader.vue": TE, "./components/sidebarmenu/FusionSidebar.vue": xE, "./components/splitButton/FusionSplitButton.vue": VE, "./components/states/FusionEmpty.vue": XE, "./components/switch/FusionSwitch.vue": aM, "./components/tabs/FusionTab.vue": gM, "./components/textArea/FusionTextArea.vue": Uv, "./components/theme/FuThemeSelector.vue": SM, "./components/toolbar/FusionToolbar.vue": DM, "./components/utilities/Fuunderconstruction.vue": LM }), WM = {
  install(t) {
    for (const e in hr) {
      const n = hr[e].default, a = n.name || e.split("/").pop()?.replace(".vue", "");
      t.component(a, n);
    }
    t.config.globalProperties.FusionToast = (e) => {
      mr()(e);
    }, typeof window < "u" && (window.FusionToast = (e) => {
      mr()(e);
    });
  }
};
export {
  Ge as FuAvatar,
  _r as FusionInfoCard,
  Mt as UserStatus,
  WM as default,
  UM as useTheme,
  mr as useToast
};
//# sourceMappingURL=fusion-binary-ui.es.js.map
