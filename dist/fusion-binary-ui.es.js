import { h as Ge, defineComponent as te, ref as g, reactive as ht, watch as fe, onMounted as he, onBeforeUnmount as _e, createElementBlock as o, openBlock as t, createCommentVNode as O, createElementVNode as a, createBlock as U, toDisplayString as S, createVNode as W, resolveDynamicComponent as ce, normalizeStyle as oe, normalizeClass as R, unref as Z, Teleport as ge, Transition as Ye, withCtx as ae, Fragment as N, renderList as ne, nextTick as ve, createTextVNode as ie, withDirectives as Te, renderSlot as K, mergeProps as et, vModelDynamic as _t, vShow as tt, computed as H, withModifiers as ue, withKeys as De, vModelText as nt, resolveComponent as yt, KeepAlive as Ot, createApp as Dt, watchEffect as Yt } from "vue";
/**
 * @license lucide-vue-next v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const lt = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), Vt = (e) => e.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (f, n, s) => s ? s.toUpperCase() : n.toLowerCase()
), Tt = (e) => {
  const f = Vt(e);
  return f.charAt(0).toUpperCase() + f.slice(1);
}, Ft = (...e) => e.filter((f, n, s) => !!f && f.trim() !== "" && s.indexOf(f) === n).join(" ").trim(), st = (e) => e === "";
/**
 * @license lucide-vue-next v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var Ae = {
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
const Bt = ({
  name: e,
  iconNode: f,
  absoluteStrokeWidth: n,
  "absolute-stroke-width": s,
  strokeWidth: l,
  "stroke-width": u,
  size: i = Ae.width,
  color: d = Ae.stroke,
  ..._
}, { slots: c }) => Ge(
  "svg",
  {
    ...Ae,
    ..._,
    width: i,
    height: i,
    stroke: d,
    "stroke-width": st(n) || st(s) || n === !0 || s === !0 ? Number(l || u || Ae["stroke-width"]) * 24 / Number(i) : l || u || Ae["stroke-width"],
    class: Ft(
      "lucide",
      _.class,
      ...e ? [`lucide-${lt(Tt(e))}-icon`, `lucide-${lt(e)}`] : ["lucide-icon"]
    )
  },
  [...f.map((y) => Ge(...y)), ...c.default ? [c.default()] : []]
);
/**
 * @license lucide-vue-next v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const me = (e, f) => (n, { slots: s, attrs: l }) => Ge(
  Bt,
  {
    ...l,
    ...n,
    iconNode: f,
    name: e
  },
  s
);
/**
 * @license lucide-vue-next v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const It = me("bell", [
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
const gt = me("check", [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]]);
/**
 * @license lucide-vue-next v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ke = me("chevron-down", [
  ["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]
]);
/**
 * @license lucide-vue-next v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Pe = me("chevron-left", [
  ["path", { d: "m15 18-6-6 6-6", key: "1wnfg3" }]
]);
/**
 * @license lucide-vue-next v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const We = me("chevron-right", [
  ["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }]
]);
/**
 * @license lucide-vue-next v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Et = me("chevron-up", [
  ["path", { d: "m18 15-6-6-6 6", key: "153udz" }]
]);
/**
 * @license lucide-vue-next v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Lt = me("circle-alert", [
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
const bt = me("circle-check-big", [
  ["path", { d: "M21.801 10A10 10 0 1 1 17 3.335", key: "yps3ct" }],
  ["path", { d: "m9 11 3 3L22 4", key: "1pflzl" }]
]);
/**
 * @license lucide-vue-next v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const At = me("circle-check", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "m9 12 2 2 4-4", key: "dzmm74" }]
]);
/**
 * @license lucide-vue-next v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const jt = me("circle-x", [
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
const wt = me("ellipsis-vertical", [
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
const Pt = me("eye-off", [
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
const Wt = me("eye", [
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
const Rt = me("file-text", [
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
const it = me("info", [
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
const Ht = me("maximize-2", [
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
const qt = me("minimize-2", [
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
const ut = me("monitor-smartphone", [
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
const kt = me("square-pen", [
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
const ot = me("trash-2", [
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
const Nt = me("triangle-alert", [
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
const Ut = me("video", [
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
const Ue = me("x", [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
]), Xt = {
  key: 0,
  class: "fu-status-dropdown__label-text"
}, Kt = { key: 0 }, Jt = ["onClick"], Zt = { class: "fu-status-dropdown__item-label" }, Gt = /* @__PURE__ */ te({
  __name: "FusionStatusDropdown",
  props: {
    modelValue: {},
    options: {},
    align: { default: "left" },
    label: { default: "" },
    placeholder: { default: "Select Status" }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: f }) {
    const n = e, s = f, l = g(!1), u = g(null), i = g(null), d = g(n.modelValue || null), _ = ht({
      position: "absolute",
      visibility: "hidden",
      opacity: "0",
      zIndex: "9999"
    });
    fe(
      () => n.modelValue,
      (r) => d.value = r
    );
    function c() {
      if (!u.value || !i.value) return;
      const r = u.value.getBoundingClientRect(), h = i.value.getBoundingClientRect(), j = window.innerHeight - r.bottom, D = r.top, V = j < h.height && D > j;
      let x = r.left + window.scrollX, Y = "none";
      n.align === "center" && (x += r.width / 2, Y = "translateX(-50%)"), n.align === "right" && (x = r.right + window.scrollX, Y = "translateX(-100%)"), _.left = `${x}px`, _.transform = Y, _.minWidth = `${r.width}px`, V ? _.top = `${r.top + window.scrollY - h.height - 6}px` : _.top = `${r.bottom + window.scrollY + 6}px`, _.visibility = "visible", _.opacity = "1";
    }
    const y = async () => {
      l.value = !l.value, l.value && (await ve(), c(), await ve(), c());
    }, v = (r) => {
      d.value = r, s("update:modelValue", r), l.value = !1;
    }, m = (r) => {
      const h = r.target;
      l.value && u.value && i.value && !u.value.contains(h) && !i.value.contains(h) && (l.value = !1);
    }, b = () => {
      l.value && (l.value = !1);
    }, C = (r) => {
      r.key === "Escape" && (l.value = !1);
    };
    return he(() => {
      document.addEventListener("click", m), window.addEventListener("resize", b), window.addEventListener("scroll", b, !0), document.addEventListener("keydown", C);
    }), _e(() => {
      document.removeEventListener("click", m), window.removeEventListener("resize", b), window.removeEventListener("scroll", b, !0), document.removeEventListener("keydown", C);
    }), (r, h) => (t(), o("div", {
      class: "fu-status-dropdown",
      ref_key: "dropdown",
      ref: u
    }, [
      e.label ? (t(), o("div", Xt, S(e.label), 1)) : O("", !0),
      a("button", {
        class: "fu-status-dropdown__button",
        onClick: y
      }, [
        d.value ? (t(), o("span", Kt, [
          d.value.icon ? (t(), U(ce(d.value.icon), {
            key: 0,
            class: "fu-status-dropdown__icon"
          })) : d.value.color ? (t(), o("span", {
            key: 1,
            class: "fu-status-dropdown__dot",
            style: oe({ backgroundColor: d.value.color })
          }, null, 4)) : O("", !0)
        ])) : O("", !0),
        a("span", {
          class: R(["fu-status-dropdown__label", { "fu-status-dropdown__placeholder": !d.value }])
        }, S(d.value?.label || e.placeholder), 3),
        W(Z(ke), { class: "fu-status-dropdown__chevron" })
      ]),
      (t(), U(ge, { to: "body" }, [
        W(Ye, { name: "fade" }, {
          default: ae(() => [
            l.value ? (t(), o("ul", {
              key: 0,
              ref_key: "menuRef",
              ref: i,
              class: "fu-status-dropdown__menu",
              style: oe(_)
            }, [
              (t(!0), o(N, null, ne(e.options, (z) => (t(), o("li", {
                key: z.label,
                class: "fu-status-dropdown__item",
                onClick: (j) => v(z)
              }, [
                z.icon ? (t(), U(ce(z.icon), {
                  key: 0,
                  class: "fu-status-dropdown__icon"
                })) : z.color ? (t(), o("span", {
                  key: 1,
                  class: "fu-status-dropdown__dot",
                  style: oe({ backgroundColor: z.color })
                }, null, 4)) : O("", !0),
                a("span", Zt, S(z.label), 1)
              ], 8, Jt))), 128))
            ], 4)) : O("", !0)
          ]),
          _: 1
        })
      ]))
    ], 512));
  }
}), J = (e, f) => {
  const n = e.__vccOpts || e;
  for (const [s, l] of f)
    n[s] = l;
  return n;
}, $t = /* @__PURE__ */ J(Gt, [["__scopeId", "data-v-7725b140"]]), Qt = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: $t
}, Symbol.toStringTag, { value: "Module" })), en = ["disabled"], tn = {
  key: 0,
  class: "fu-spinner"
}, nn = {
  key: 0,
  class: "fu-tooltip"
}, on = /* @__PURE__ */ te({
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
  setup(e) {
    return (f, n) => (t(), o("div", {
      class: R(["fu-action-btn-wrapper", { "has-tooltip": e.tooltip }])
    }, [
      a("button", {
        class: R(["fu-action-btn", [`fu-action-btn--${e.size}`, `fu-action-btn--${e.variant}`, { "is-loading": e.loading }]]),
        disabled: e.disabled || e.loading,
        onClick: n[0] || (n[0] = (s) => e.loading ? null : f.$emit("click", s))
      }, [
        e.loading ? (t(), o("span", tn)) : e.icon ? (t(), U(ce(e.icon), {
          key: 1,
          class: "fu-action-btn__icon",
          size: 20
        })) : O("", !0)
      ], 10, en),
      e.tooltip ? (t(), o("span", nn, S(e.tooltip), 1)) : O("", !0)
    ], 2));
  }
}), $e = /* @__PURE__ */ J(on, [["__scopeId", "data-v-ca61cb3a"]]), an = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: $e
}, Symbol.toStringTag, { value: "Module" })), ln = { class: "edf-container" }, sn = {
  key: 0,
  class: "edf-label"
}, un = { class: "edf-text" }, rn = /* @__PURE__ */ te({
  __name: "EditableDisplayField",
  props: {
    text: {},
    label: { default: "" },
    variant: { default: "solid" }
  },
  emits: ["edit"],
  setup(e, { emit: f }) {
    const n = f, s = g(!1);
    function l(u) {
      n("edit", u);
    }
    return (u, i) => (t(), o("div", ln, [
      e.label ? (t(), o("label", sn, S(e.label), 1)) : O("", !0),
      a("div", {
        class: R(["edf-wrapper", [`edf--${e.variant}`]]),
        onMouseenter: i[0] || (i[0] = (d) => s.value = !0),
        onMouseleave: i[1] || (i[1] = (d) => s.value = !1),
        ref: "container"
      }, [
        a("span", un, S(e.text), 1),
        s.value ? (t(), U($e, {
          key: 0,
          class: "edf-edit-btn",
          icon: Z(kt),
          size: "sm",
          variant: "subtle",
          onClick: l
        }, null, 8, ["icon"])) : O("", !0)
      ], 34)
    ]));
  }
}), dn = /* @__PURE__ */ J(rn, [["__scopeId", "data-v-1e56c520"]]), cn = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: dn
}, Symbol.toStringTag, { value: "Module" })), fn = {
  key: 0,
  class: "fu-input-label"
}, vn = {
  key: 0,
  class: "fu-input-required"
}, mn = {
  key: 0,
  class: "fu-input-icon fu-input-icon--left"
}, pn = ["type", "placeholder", "disabled", "required", "inputmode", "pattern", "min", "max", "step"], hn = {
  key: 1,
  class: "fu-input-icon fu-input-icon--right"
}, _n = {
  key: 1,
  class: "fu-input-error"
}, yn = /* @__PURE__ */ te({
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
    formWrapperWidth: { default: "fit-content" }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: f }) {
    const n = e, s = f, l = g(n.modelValue);
    return fe(l, (u) => s("update:modelValue", u)), fe(
      () => n.modelValue,
      (u) => l.value = u
    ), (u, i) => (t(), o("div", {
      class: "fu-input-wrapper",
      style: oe({ width: e.formWrapperWidth })
    }, [
      e.label ? (t(), o("label", fn, [
        ie(S(e.label) + " ", 1),
        e.required ? (t(), o("span", vn, "*")) : O("", !0)
      ])) : O("", !0),
      a("div", {
        class: R(["fu-input-container", [`fu-input--${e.size}`, `fu-input--${e.variant}`, { "fu-input--error": e.error }]])
      }, [
        u.$slots.left ? (t(), o("div", mn, [
          K(u.$slots, "left", {}, void 0, !0)
        ])) : O("", !0),
        Te(a("input", et(u.$attrs, {
          class: "fu-input",
          type: e.type,
          placeholder: e.placeholder,
          disabled: e.disabled,
          required: e.required,
          inputmode: e.type === "number" ? "numeric" : void 0,
          pattern: e.type === "number" ? "[0-9]*" : void 0,
          min: e.type === "number" ? e.min : void 0,
          max: e.type === "number" ? e.max : void 0,
          step: e.type === "number" ? e.step : void 0,
          "onUpdate:modelValue": i[0] || (i[0] = (d) => l.value = d)
        }), null, 16, pn), [
          [_t, l.value]
        ]),
        u.$slots.right ? (t(), o("div", hn, [
          K(u.$slots, "right", {}, void 0, !0)
        ])) : O("", !0)
      ], 2),
      e.error ? (t(), o("span", _n, S(e.error), 1)) : O("", !0)
    ], 4));
  }
}), xe = /* @__PURE__ */ J(yn, [["__scopeId", "data-v-7f197b54"]]), gn = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: xe
}, Symbol.toStringTag, { value: "Module" })), bn = ["onClick", "disabled"], wn = { class: "fu-accordion__header-content" }, kn = { class: "fu-accordion__body" }, $n = /* @__PURE__ */ te({
  __name: "FusionAccordion",
  props: {
    items: {},
    defaultOpen: {},
    type: {},
    theme: {}
  },
  setup(e) {
    const f = e, n = g(f.defaultOpen || []);
    function s(u) {
      return n.value.includes(u);
    }
    function l(u) {
      const i = s(u);
      f.type === "single" ? n.value = i ? [] : [u] : i ? n.value = n.value.filter((d) => d !== u) : n.value.push(u);
    }
    return (u, i) => (t(), o("div", {
      class: R(["fu-accordion", [`fu-accordion--${e.theme}`]])
    }, [
      (t(!0), o(N, null, ne(e.items, (d) => (t(), o("div", {
        key: d.key,
        class: "fu-accordion__item"
      }, [
        a("button", {
          class: R(["fu-accordion__header", {
            "is-open": s(d.key),
            "is-disabled": d.disabled
          }]),
          onClick: (_) => l(d.key),
          disabled: d.disabled
        }, [
          a("div", wn, [
            d.icon ? (t(), U(ce(d.icon), {
              key: 0,
              size: 16,
              class: "fu-accordion__icon"
            })) : O("", !0),
            a("span", null, S(d.title), 1)
          ]),
          (t(), o("svg", {
            class: R(["fu-accordion__chevron", { "is-open": s(d.key) }]),
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            viewBox: "0 0 24 24",
            stroke: "currentColor"
          }, [...i[0] || (i[0] = [
            a("path", {
              "stroke-linecap": "round",
              "stroke-linejoin": "round",
              "stroke-width": "2",
              d: "M6 9l6 6 6-6"
            }, null, -1)
          ])], 2))
        ], 10, bn),
        Te(a("div", kn, [
          K(u.$slots, d.key, {}, void 0, !0)
        ], 512), [
          [tt, s(d.key)]
        ])
      ]))), 128))
    ], 2));
  }
}), Mn = /* @__PURE__ */ J($n, [["__scopeId", "data-v-7a4ed33d"]]), Cn = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Mn
}, Symbol.toStringTag, { value: "Module" })), Sn = {
  key: 0,
  class: "fu-status-dropdown__label-text"
}, xn = { key: 1 }, zn = { key: 0 }, On = ["src"], Dn = ["onClick"], Yn = {
  key: 1,
  class: "fu-placeholder"
}, Vn = {
  key: 1,
  class: "flex flex--center flex--gap-md"
}, Tn = ["src"], Fn = {
  key: 2,
  class: "fu-status-dropdown__input-trigger"
}, Bn = {
  key: 0,
  class: "fu-search-wrapper"
}, In = {
  key: 1,
  class: "fu-options-scroll scrollbar__control customScrollBar"
}, En = ["onClick"], Ln = ["src"], An = {
  key: 2,
  class: "fu-status-dropdown__empty"
}, jn = {
  key: 3,
  class: "fu-input-error"
}, Pn = /* @__PURE__ */ te({
  __name: "FusionAutocomplete",
  props: {
    options: {},
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
    loading: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue", "search"],
  setup(e, { emit: f }) {
    const n = e, s = f, l = g(!1), u = g(""), i = g(null), d = g(null), _ = g(null), c = g(null), y = g({}), v = g(null), m = g([]), b = H(() => n.async === !0);
    fe(
      () => n.modelValue,
      (D) => {
        n.multiple && Array.isArray(D) ? m.value = D : v.value = D;
      },
      { immediate: !0 }
    ), fe(u, (D) => {
      b.value && (D.length < n.minSearchLength || s("search", D));
    });
    const C = H(() => b.value || !u.value ? n.options : n.options.filter(
      (D) => D.label.toLowerCase().includes(u.value.toLowerCase())
    ));
    function r() {
      l.value = !l.value, l.value && ve(() => {
        const D = i.value?.querySelector("button, input");
        if (!D || !d.value) return;
        const V = D.getBoundingClientRect();
        y.value = {
          position: "absolute",
          top: `${V.bottom + window.scrollY}px`,
          left: `${V.left + window.scrollX}px`,
          width: `${V.width}px`,
          zIndex: "9999"
        }, n.searchable && ve(() => {
          const x = c.value?.$el?.querySelector("input") || d.value?.querySelector("input");
          x?.focus(), x?.select();
        });
      });
    }
    function h(D) {
      if (n.multiple) {
        const V = m.value.find((x) => x.value === D.value);
        m.value = V ? m.value.filter((x) => x.value !== D.value) : [...m.value, D], s("update:modelValue", m.value);
      } else
        v.value = D, s("update:modelValue", D), l.value = !1;
    }
    function z(D) {
      m.value = m.value.filter((V) => V.value !== D.value), s("update:modelValue", m.value);
    }
    function j(D) {
      i.value?.contains(D.target) || d.value?.contains(D.target) || (l.value = !1);
    }
    return he(() => document.addEventListener("click", j)), _e(() => document.removeEventListener("click", j)), (D, V) => (t(), o("div", {
      class: "fu-status-dropdown",
      ref_key: "dropdownRef",
      ref: i
    }, [
      e.label ? (t(), o("div", Sn, S(e.label), 1)) : O("", !0),
      e.variant === "button" ? (t(), o("div", xn, [
        a("button", {
          class: R(["fu-status-dropdown__button", [`fu-input--${e.size}`, { "fu-input--error": e.error }]]),
          onClick: r
        }, [
          e.multiple ? (t(), o("div", zn, [
            m.value.length ? (t(!0), o(N, { key: 0 }, ne(m.value, (x) => (t(), o("span", {
              key: x.value,
              class: "fu-tag"
            }, [
              x.type === "icon" ? (t(), U(ce(x.icon), {
                key: 0,
                size: "14"
              })) : x.type === "image" ? (t(), o("img", {
                key: 1,
                src: x.imageUrl,
                class: "fu-option-image",
                alt: "User Image"
              }, null, 8, On)) : O("", !0),
              ie(" " + S(x.label) + " ", 1),
              a("span", {
                class: "fu-tag__remove",
                onClick: ue((Y) => z(x), ["stop"])
              }, "×", 8, Dn)
            ]))), 128)) : (t(), o("span", Yn, S(e.placeholder), 1))
          ])) : (t(), o("div", Vn, [
            v.value?.type === "icon" ? (t(), U(ce(v.value.icon), {
              key: 0,
              size: "16"
            })) : v.value?.type === "image" ? (t(), o("img", {
              key: 1,
              src: v.value.imageUrl,
              class: "fu-option-image",
              alt: "User Image"
            }, null, 8, Tn)) : O("", !0),
            a("span", null, S(v.value?.label || e.placeholder), 1)
          ])),
          V[2] || (V[2] = a("svg", {
            class: "fu-status-dropdown__chevron",
            viewBox: "0 0 20 20"
          }, [
            a("path", {
              d: "M6 8l4 4 4-4",
              stroke: "currentColor",
              "stroke-width": "1.5"
            })
          ], -1))
        ], 2)
      ])) : (t(), o("div", Fn, [
        W(xe, {
          size: e.size,
          readonly: "",
          variant: "outline",
          formWrapperWidth: e.formWrapperWidth,
          placeholder: v.value?.label || e.placeholder,
          onFocus: r,
          onClick: r
        }, null, 8, ["size", "formWrapperWidth", "placeholder"])
      ])),
      (t(), U(ge, { to: "body" }, [
        W(Ye, { name: "fade" }, {
          default: ae(() => [
            l.value ? (t(), o("div", {
              key: 0,
              class: "fu-status-dropdown__menu",
              style: oe(y.value),
              ref_key: "menuRef",
              ref: d
            }, [
              e.searchable ? (t(), o("div", Bn, [
                W(xe, {
                  ref_key: "searchInputRef",
                  ref: c,
                  modelValue: u.value,
                  "onUpdate:modelValue": V[1] || (V[1] = (x) => u.value = x),
                  type: "text",
                  placeholder: e.searchPlaceholder,
                  size: e.size,
                  formWrapperWidth: "100%"
                }, {
                  right: ae(() => [
                    a("button", {
                      class: "fu-search-clear",
                      onClick: V[0] || (V[0] = (x) => u.value = "")
                    }, "×")
                  ]),
                  _: 1
                }, 8, ["modelValue", "placeholder", "size"])
              ])) : O("", !0),
              C.value.length ? (t(), o("div", In, [
                (t(!0), o(N, null, ne(C.value, (x) => (t(), o("div", {
                  key: x.value,
                  class: "fu-status-dropdown__item",
                  onClick: (Y) => h(x)
                }, [
                  x.type === "icon" ? (t(), U(ce(x.icon), {
                    key: 0,
                    size: "16"
                  })) : x.type === "image" ? (t(), o("img", {
                    key: 1,
                    src: x.imageUrl,
                    class: "fu-option-image"
                  }, null, 8, Ln)) : O("", !0),
                  a("span", null, S(x.label), 1)
                ], 8, En))), 128)),
                a("div", {
                  class: "fu-status-dropdown__slot-actions",
                  ref_key: "actionsRef",
                  ref: _
                }, [
                  K(D.$slots, "actions")
                ], 512)
              ])) : (t(), o("div", An, S(e.noResultsText), 1))
            ], 4)) : O("", !0)
          ]),
          _: 3
        })
      ])),
      e.error ? (t(), o("span", jn, S(e.error), 1)) : O("", !0)
    ], 512));
  }
}), Wn = /* @__PURE__ */ J(Pn, [["__scopeId", "data-v-5655257c"]]), Rn = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Wn
}, Symbol.toStringTag, { value: "Module" }));
var Ee = /* @__PURE__ */ ((e) => (e[e.Offline = 0] = "Offline", e[e.Active = 1] = "Active", e[e.Away = 2] = "Away", e[e.Busy = 3] = "Busy", e[e.DoNotDisturb = 4] = "DoNotDisturb", e[e.Invisible = 5] = "Invisible", e))(Ee || {});
const Hn = ["src", "alt"], qn = {
  key: 1,
  class: "fu-avatar__placeholder"
}, Nn = {
  key: 2,
  class: "fu-avatar__edit-overlay"
}, Un = /* @__PURE__ */ te({
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
  setup(e, { emit: f }) {
    const n = e, s = f, l = g(null), u = H(
      () => n.name ? n.name.split(" ").map((y) => y[0]).join("").slice(0, 2).toUpperCase() : ""
    ), i = () => {
      n.editable && l.value?.click();
    }, d = (y) => {
      const v = y.target?.files?.[0];
      if (!v) return;
      const m = new FileReader();
      m.onload = () => {
        s("update:src", m.result);
      }, m.readAsDataURL(v);
    }, _ = () => {
      s("remove");
    }, c = H(() => {
      switch (n.status) {
        case Ee.Active:
        case 1:
          return "fu-status-dot--active";
        case Ee.Away:
        case 2:
          return "fu-status-dot--away";
        case Ee.Busy:
        case 3:
          return "fu-status-dot--busy";
        case Ee.DoNotDisturb:
        case 4:
          return "fu-status-dot--dnd";
        case Ee.Invisible:
        case 5:
          return "fu-status-dot--invisible";
        default:
          return "fu-status-dot--offline";
      }
    });
    return (y, v) => (t(), o("div", {
      class: R(["fu-avatar", [`fu-avatar--${e.size}`, { "fu-avatar--editable": e.editable }]])
    }, [
      a("div", {
        class: "fu-avatar__wrapper",
        onClick: i
      }, [
        e.src ? (t(), o("img", {
          key: 0,
          src: e.src,
          alt: e.alt,
          class: "fu-avatar__image"
        }, null, 8, Hn)) : (t(), o("span", qn, S(u.value), 1)),
        e.editable ? (t(), o("span", Nn, " Edit ")) : O("", !0),
        e.editable && e.src && e.allowRemove ? (t(), o("button", {
          key: 3,
          class: "fu-avatar__remove",
          onClick: ue(_, ["stop"]),
          "aria-label": "Remove photo"
        }, " × ")) : O("", !0),
        e.showStatus && e.status !== void 0 ? (t(), o("span", {
          key: 4,
          class: R(["fu-status-dot", c.value])
        }, null, 2)) : O("", !0),
        a("input", {
          ref_key: "fileInput",
          ref: l,
          type: "file",
          accept: "image/*",
          class: "fu-avatar__file-input",
          onChange: d
        }, null, 544)
      ])
    ], 2));
  }
}), Le = /* @__PURE__ */ J(Un, [["__scopeId", "data-v-51778eaa"]]), Xn = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Le
}, Symbol.toStringTag, { value: "Module" })), Kn = /* @__PURE__ */ te({
  __name: "FuAvatarGroup",
  props: {
    users: {},
    max: {},
    size: {}
  },
  emits: ["click"],
  setup(e) {
    const f = e, n = f.max ?? 3, s = f.users.slice(0, n), l = f.users.length - n;
    return (u, i) => (t(), o("div", {
      class: "fu-avatar-group",
      onClick: i[0] || (i[0] = (d) => u.$emit("click"))
    }, [
      (t(!0), o(N, null, ne(Z(s), (d, _) => (t(), U(Le, {
        key: d.id || _,
        src: d.src,
        name: d.name,
        alt: d.alt,
        size: e.size
      }, null, 8, ["src", "name", "alt", "size"]))), 128)),
      l > 0 ? (t(), o("div", {
        key: 0,
        class: R(["fu-avatar fu-avatar--more", `fu-avatar--${e.size}`])
      }, " +" + S(l), 2)) : O("", !0)
    ]));
  }
}), Jn = /* @__PURE__ */ J(Kn, [["__scopeId", "data-v-d339fd2f"]]), Zn = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Jn
}, Symbol.toStringTag, { value: "Module" })), Gn = /* @__PURE__ */ te({
  __name: "FusionBadge",
  props: {
    text: { default: "Badge" },
    size: { default: "md" },
    variant: { default: "solid" },
    themeClass: { default: "" }
  },
  setup(e) {
    return (f, n) => (t(), o("span", {
      class: R(["fu-badge", [
        `fu-badge--${e.variant}`,
        `fu-badge--${e.size}`,
        e.themeClass
      ]])
    }, [
      K(f.$slots, "default", {}, () => [
        ie(S(e.text), 1)
      ], !0)
    ], 2));
  }
}), Qn = /* @__PURE__ */ J(Gn, [["__scopeId", "data-v-3281b175"]]), eo = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Qn
}, Symbol.toStringTag, { value: "Module" })), to = {
  key: 0,
  class: "fu-spinner"
}, no = { key: 2 }, oo = { key: 3 }, ao = {
  key: 0,
  class: "fu-tooltip"
}, lo = /* @__PURE__ */ te({
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
  setup(e) {
    return (f, n) => (t(), o("div", {
      class: R(["fu-btn-wrapper", { "has-tooltip": e.tooltip }]),
      style: oe(e.buttonWidth ? { width: e.buttonWidth } : {})
    }, [
      (t(), U(ce(e.link ? "a" : "button"), {
        class: R(["fu-btn", [
          `fu-btn--${e.variant}`,
          `fu-btn--${e.size}`,
          { "is-loading": e.loading }
        ]]),
        href: e.link || void 0,
        target: e.link ? e.target : void 0,
        rel: e.link && e.target === "_blank" ? "noopener noreferrer" : void 0,
        disabled: !e.link && (e.disabled || e.loading),
        onClick: n[0] || (n[0] = (s) => !e.link && !e.loading ? f.$emit("click", s) : null),
        style: oe(e.buttonWidth ? { width: e.buttonWidth } : {})
      }, {
        default: ae(() => [
          e.loading ? (t(), o("span", to)) : O("", !0),
          e.icon ? (t(), U(ce(e.icon), {
            key: 1,
            class: "fu-btn-icon",
            size: 16
          })) : O("", !0),
          e.loading ? (t(), o("span", no, S(e.loadingText || "Loading..."), 1)) : (t(), o("span", oo, [
            K(f.$slots, "default", {}, () => [
              ie(S(e.text), 1)
            ], !0)
          ]))
        ]),
        _: 3
      }, 8, ["class", "href", "target", "rel", "disabled", "style"])),
      e.tooltip ? (t(), o("span", ao, S(e.tooltip), 1)) : O("", !0)
    ], 6));
  }
}), we = /* @__PURE__ */ J(lo, [["__scopeId", "data-v-cf97bf26"]]), so = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: we
}, Symbol.toStringTag, { value: "Module" })), io = {
  key: 0,
  class: "icon-box"
}, uo = { class: "content" }, ro = { class: "value" }, co = { class: "subtitle" }, fo = {
  key: 0,
  class: "caption"
}, vo = { class: "title" }, mo = { class: "value" }, po = {
  key: 0,
  class: "caption"
}, ho = /* @__PURE__ */ te({
  __name: "FusionStatCard",
  props: {
    variant: { default: "icon-left" },
    title: {},
    value: { default: "" },
    subtitle: { default: "" },
    icon: { type: [Function, Object, String, null], default: null },
    bordered: { type: Boolean, default: !0 },
    shadow: { type: Boolean, default: !1 }
  },
  setup(e) {
    return (f, n) => (t(), o("div", {
      class: R(["fu-stat-card", [`variant-${e.variant}`, e.bordered ? "bordered" : "", e.shadow ? "shadow" : ""]])
    }, [
      e.variant === "icon-left" ? (t(), o(N, { key: 0 }, [
        e.icon ? (t(), o("div", io, [
          (t(), U(ce(e.icon), { class: "fu-icon" }))
        ])) : O("", !0),
        a("div", uo, [
          a("div", ro, S(e.value), 1),
          a("div", co, S(e.title), 1),
          e.subtitle ? (t(), o("div", fo, S(e.subtitle), 1)) : O("", !0)
        ])
      ], 64)) : (t(), o(N, { key: 1 }, [
        a("div", vo, S(e.title), 1),
        a("div", mo, S(e.value), 1),
        e.subtitle ? (t(), o("div", po, S(e.subtitle), 1)) : O("", !0)
      ], 64))
    ], 2));
  }
}), _o = /* @__PURE__ */ J(ho, [["__scopeId", "data-v-805e7e96"]]), yo = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _o
}, Symbol.toStringTag, { value: "Module" })), go = ["for"], bo = ["id", "checked", "disabled"], wo = {
  key: 0,
  class: "fu-checkbox__label"
}, ko = /* @__PURE__ */ te({
  __name: "FusionCheckbox",
  props: {
    modelValue: { type: Boolean, default: !1 },
    label: {},
    id: {},
    size: { default: "md" },
    disabled: { type: Boolean }
  },
  emits: ["update:modelValue"],
  setup(e) {
    return (f, n) => (t(), o("label", {
      class: R(["fu-checkbox", [`fu-checkbox--${e.size}`, { "fu-checkbox--disabled": e.disabled }]]),
      for: e.id
    }, [
      a("input", {
        type: "checkbox",
        class: "fu-checkbox__input",
        id: e.id,
        checked: e.modelValue,
        disabled: e.disabled,
        onChange: n[0] || (n[0] = (s) => f.$emit("update:modelValue", s.target.checked))
      }, null, 40, bo),
      n[1] || (n[1] = a("span", { class: "fu-checkbox__box" }, null, -1)),
      e.label ? (t(), o("span", wo, S(e.label), 1)) : O("", !0)
    ], 10, go));
  }
}), Qe = /* @__PURE__ */ J(ko, [["__scopeId", "data-v-3ee76c20"]]), $o = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Qe
}, Symbol.toStringTag, { value: "Module" })), Mo = {
  key: 0,
  class: "fu-input-label"
}, Co = {
  key: 0,
  class: "fu-input-required"
}, So = ["onUpdate:modelValue", "onInput", "onKeydown", "disabled"], xo = {
  key: 1,
  class: "fu-input-error"
}, zo = /* @__PURE__ */ te({
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
  setup(e, { emit: f }) {
    const n = e, s = f, l = g(Array(n.length).fill("")), u = g([]);
    fe(
      () => n.modelValue,
      (c) => {
        if (!c) {
          l.value = Array(n.length).fill("");
          return;
        }
        const y = c.split("").slice(0, n.length);
        for (; y.length < n.length; ) y.push("");
        l.value = y;
      },
      { immediate: !0 }
    ), fe(
      l,
      () => {
        s("update:modelValue", l.value.join(""));
      },
      { deep: !0 }
    );
    function i(c, y) {
      const m = y.target.value.replace(/\D/g, "");
      l.value[c] = m, m && c < n.length - 1 && ve(() => u.value[c + 1]?.focus());
    }
    function d(c) {
      !l.value[c] && c > 0 && ve(() => u.value[c - 1]?.focus());
    }
    function _(c) {
      c.preventDefault();
      const v = (c.clipboardData?.getData("text") || "").replace(/\D/g, "").slice(0, n.length).split("");
      if (v.length !== 0) {
        v.forEach((m, b) => {
          l.value[b] = m;
        });
        for (let m = v.length; m < n.length; m++)
          l.value[m] = "";
        ve(() => {
          const m = Math.min(v.length - 1, n.length - 1);
          u.value[m]?.focus();
        });
      }
    }
    return (c, y) => (t(), o("div", {
      class: "fu-input-wrapper",
      style: oe({ width: e.formWrapperWidth })
    }, [
      e.label ? (t(), o("label", Mo, [
        ie(S(e.label) + " ", 1),
        e.required ? (t(), o("span", Co, "*")) : O("", !0)
      ])) : O("", !0),
      a("div", {
        class: R(["fu-code-container", [
          `fu-input--${e.size}`,
          `fu-input--${e.variant}`,
          { "fu-input--error": e.error }
        ]])
      }, [
        (t(!0), o(N, null, ne(l.value, (v, m) => Te((t(), o("input", {
          key: m,
          ref_for: !0,
          ref: (b) => u.value[m] = b,
          type: "text",
          maxlength: "1",
          inputmode: "numeric",
          pattern: "[0-9]*",
          class: "fu-code-box fu-input-container",
          "onUpdate:modelValue": (b) => l.value[m] = b,
          onInput: (b) => i(m, b),
          onKeydown: De((b) => d(m), ["backspace"]),
          onPaste: _,
          disabled: e.disabled
        }, null, 40, So)), [
          [nt, l.value[m]]
        ])), 128))
      ], 2),
      e.error ? (t(), o("span", xo, S(e.error), 1)) : O("", !0)
    ], 4));
  }
}), Oo = /* @__PURE__ */ J(zo, [["__scopeId", "data-v-8582d137"]]), Do = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Oo
}, Symbol.toStringTag, { value: "Module" })), Yo = ["onKeydown"], Vo = { class: "fu-controls" }, To = { class: "fu-sliders" }, Fo = ["value"], Bo = /* @__PURE__ */ te({
  __name: "FuColorPopover",
  props: {
    modelValue: {}
  },
  emits: ["update:modelValue"],
  setup(e, { emit: f }) {
    const n = e, s = f, l = g("hex"), u = g(!1), i = g(null), d = g({
      top: "0px",
      left: "0px"
    });
    function _() {
      u.value = !u.value, u.value && ve(c);
    }
    function c() {
      if (!i.value) return;
      const k = i.value.getBoundingClientRect(), $ = 260, w = 320, M = 8;
      let I = k.bottom + 6, T = k.left, A = "top left";
      T + $ > window.innerWidth - M && (T = k.right - $, A = "top right"), T = Math.max(M, T), I + w > window.innerHeight - M && (I = k.top - w - 6, A = A.includes("right") ? "bottom right" : "bottom left"), I = Math.max(M, I), d.value = {
        top: `${I + window.scrollY}px`,
        left: `${T + window.scrollX}px`,
        transformOrigin: A
      };
    }
    function y(k) {
      if (!u.value) return;
      const $ = k.target;
      i.value?.contains($) || $.closest(".fu-color-popover") || (u.value = !1);
    }
    he(() => {
      window.addEventListener("mousedown", y), window.addEventListener("resize", c);
    }), _e(() => {
      window.removeEventListener("mousedown", y), window.removeEventListener("resize", c);
    });
    const v = g(0), m = g(100), b = g(100), C = g(""), r = g(!1);
    function h(k, $, w) {
      $ /= 100, w /= 100;
      const M = w * $, I = M * (1 - Math.abs(k / 60 % 2 - 1)), T = w - M;
      let A = 0, X = 0, Q = 0;
      return k < 60 ? [A, X, Q] = [M, I, 0] : k < 120 ? [A, X, Q] = [I, M, 0] : k < 180 ? [A, X, Q] = [0, M, I] : k < 240 ? [A, X, Q] = [0, I, M] : k < 300 ? [A, X, Q] = [I, 0, M] : [A, X, Q] = [M, 0, I], {
        r: Math.round((A + T) * 255),
        g: Math.round((X + T) * 255),
        b: Math.round((Q + T) * 255)
      };
    }
    function z(k, $, w) {
      k /= 255, $ /= 255, w /= 255;
      const M = Math.max(k, $, w), I = Math.min(k, $, w), T = M - I;
      let A = 0;
      return T && (M === k ? A = ($ - w) / T % 6 : M === $ ? A = (w - k) / T + 2 : A = (k - $) / T + 4, A *= 60, A < 0 && (A += 360)), {
        h: Math.round(A),
        s: Math.round((M === 0 ? 0 : T / M) * 100),
        v: Math.round(M * 100)
      };
    }
    function j(k, $, w) {
      return "#" + [k, $, w].map((M) => M.toString(16).padStart(2, "0")).join("").toUpperCase();
    }
    function D(k, $, w) {
      return `rgb(${k}, ${$}, ${w})`;
    }
    const V = H(() => h(v.value, m.value, b.value)), x = H(
      () => j(V.value.r, V.value.g, V.value.b)
    ), Y = H(() => ({
      background: `
    linear-gradient(to top, black, transparent),
    linear-gradient(to right, white, hsl(${v.value}, 100%, 50%))
  `
    }));
    function B() {
      const { r: k, g: $, b: w } = V.value;
      s(
        "update:modelValue",
        l.value === "rgb" ? D(k, $, w) : x.value
      );
    }
    function E(k) {
      const $ = k.trim().replace(/;$/, "");
      let w = null;
      /^#([0-9a-f]{6})$/i.test($) && (l.value = "hex", w = {
        r: parseInt($.slice(1, 3), 16),
        g: parseInt($.slice(3, 5), 16),
        b: parseInt($.slice(5, 7), 16)
      });
      const M = $.match(
        /^rgba?\((\d{1,3}),\s*(\d{1,3}),\s*(\d{1,3})/
      );
      if (M && (l.value = "rgb", w = {
        r: +M[1],
        g: +M[2],
        b: +M[3]
      }), !w) return;
      const I = z(w.r, w.g, w.b);
      v.value = I.h, m.value = I.s, b.value = I.v, B();
    }
    function ee(k) {
      r.value = !0, C.value = k.target.value;
    }
    function q() {
      r.value = !1, E(C.value);
    }
    function P(k) {
      k.key === "Enter" && q();
    }
    function G(k) {
      l.value = "hex";
      const w = k.currentTarget.getBoundingClientRect(), M = Math.min(Math.max(0, k.clientX - w.left), w.width), I = Math.min(Math.max(0, k.clientY - w.top), w.height);
      m.value = Math.round(M / w.width * 100), b.value = Math.round(100 - I / w.height * 100), B();
    }
    return he(() => {
      n.modelValue && (C.value = n.modelValue, E(n.modelValue));
    }), fe(() => n.modelValue, (k) => {
      k && (C.value = k, E(k));
    }), (k, $) => (t(), o(N, null, [
      a("div", {
        ref_key: "triggerRef",
        ref: i,
        class: "fu-color-trigger",
        style: oe({ backgroundColor: x.value }),
        role: "button",
        tabindex: "0",
        onClick: _,
        onKeydown: [
          De(ue(_, ["prevent"]), ["enter"]),
          De(ue(_, ["prevent"]), ["space"])
        ]
      }, null, 44, Yo),
      (t(), U(ge, { to: "body" }, [
        u.value ? (t(), o("div", {
          key: 0,
          class: "fu-color-popover",
          style: oe(d.value)
        }, [
          a("div", {
            class: "fu-saturation",
            style: oe(Y.value),
            onPointerdown: G,
            onPointermove: $[0] || ($[0] = (w) => w.buttons === 1 && G(w))
          }, [
            a("div", {
              class: "fu-cursor",
              style: oe({ left: m.value + "%", top: 100 - b.value + "%" })
            }, null, 4)
          ], 36),
          a("div", Vo, [
            a("div", {
              class: "fu-preview",
              style: oe({ backgroundColor: x.value })
            }, null, 4),
            a("div", To, [
              Te(a("input", {
                type: "range",
                min: "0",
                max: "360",
                "onUpdate:modelValue": $[1] || ($[1] = (w) => v.value = w),
                class: "fu-hue"
              }, null, 512), [
                [nt, v.value]
              ])
            ])
          ]),
          a("input", {
            class: "fu-output",
            value: C.value,
            onInput: ee,
            onBlur: q,
            onKeydown: P,
            placeholder: "#RRGGBB or rgb(...)"
          }, null, 40, Fo)
        ], 4)) : O("", !0)
      ]))
    ], 64));
  }
}), Io = /* @__PURE__ */ J(Bo, [["__scopeId", "data-v-568b3b3c"]]), Eo = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Io
}, Symbol.toStringTag, { value: "Module" })), Lo = { class: "fu-combobox__control" }, Ao = ["value", "placeholder", "disabled"], jo = {
  key: 0,
  class: "fu-combobox__dropdown scrollbar__control customScrollBar"
}, Po = { class: "fu-combobox__group-title" }, Wo = ["onClick"], Ro = { class: "fu-combobox__option-left" }, Ho = { class: "fu-combobox__option-right" }, qo = {
  key: 1,
  class: "fu-combobox__empty"
}, No = /* @__PURE__ */ te({
  __name: "FuCombobox",
  props: {
    options: {},
    modelValue: {},
    placeholder: {},
    disabled: { type: Boolean }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: f }) {
    const n = e, s = f, l = g(!1), u = g(""), i = g(null), d = g(null), _ = H(() => {
      if (!u.value || i.value && u.value.toLowerCase() === i.value.label.toLowerCase())
        return c(n.options);
      const C = n.options.filter(
        (r) => r.label.toLowerCase().includes(u.value.toLowerCase())
      );
      return c(C);
    });
    function c(C) {
      const r = {};
      return C.forEach((h) => {
        const z = h.group || "Options";
        r[z] || (r[z] = []), r[z].push(h);
      }), Object.entries(r).map(([h, z]) => ({ title: h, items: z }));
    }
    fe(
      () => n.modelValue,
      (C) => {
        i.value = n.options.find((r) => r.value === C) || null, !l.value && i.value && (u.value = i.value.label);
      },
      { immediate: !0 }
    );
    function y(C) {
      u.value = C.target.value;
    }
    function v(C) {
      i.value = C, u.value = C.label, s("update:modelValue", C.value), l.value = !1;
    }
    function m() {
      l.value = !l.value;
    }
    function b(C) {
      d.value && !d.value.contains(C.target) && (l.value = !1, i.value && (u.value = i.value.label));
    }
    return he(() => {
      document.addEventListener("click", b);
    }), _e(() => {
      document.removeEventListener("click", b);
    }), (C, r) => (t(), o("div", {
      class: R(["fu-combobox", { "fu-combobox--disabled": e.disabled }]),
      ref_key: "comboboxRef",
      ref: d
    }, [
      a("div", Lo, [
        a("input", {
          type: "text",
          value: l.value ? u.value : i.value?.label || "",
          placeholder: e.placeholder,
          class: "fu-combobox__input",
          disabled: e.disabled,
          onInput: y,
          onFocus: r[0] || (r[0] = (h) => !e.disabled && (l.value = !0))
        }, null, 40, Ao),
        a("span", {
          class: "fu-combobox__icon",
          onClick: ue(m, ["stop"])
        }, [
          W(Z(ke), {
            size: 18,
            "stroke-width": 1
          })
        ])
      ]),
      l.value && !e.disabled ? (t(), o("div", jo, [
        _.value.length > 0 ? (t(!0), o(N, { key: 0 }, ne(_.value, (h) => (t(), o("div", {
          key: h.title,
          class: "fu-combobox__group"
        }, [
          a("div", Po, S(h.title), 1),
          (t(!0), o(N, null, ne(h.items, (z) => (t(), o("div", {
            key: z.value,
            class: R(["fu-combobox__option", {
              "fu-combobox__option--selected": z.value === i.value?.value
            }]),
            onClick: (j) => v(z)
          }, [
            a("div", Ro, [
              K(C.$slots, "option", { option: z }, () => [
                z.icon ? (t(), U(ce(z.icon), {
                  key: 0,
                  class: "fu-combobox__option-icon"
                })) : O("", !0),
                a("span", null, S(z.label), 1)
              ], !0)
            ]),
            a("div", Ho, [
              z.value === i.value?.value ? (t(), U(Z(gt), {
                key: 0,
                class: "fu-combobox__check"
              })) : O("", !0)
            ])
          ], 10, Wo))), 128))
        ]))), 128)) : (t(), o("div", qo, "No results found"))
      ])) : O("", !0)
    ], 2));
  }
}), Uo = /* @__PURE__ */ J(No, [["__scopeId", "data-v-8ca05e69"]]), Xo = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Uo
}, Symbol.toStringTag, { value: "Module" }));
function Mt(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var qe = { exports: {} }, Ko = qe.exports, rt;
function Jo() {
  return rt || (rt = 1, (function(e, f) {
    (function(n, s) {
      e.exports = s();
    })(Ko, (function() {
      var n = 1e3, s = 6e4, l = 36e5, u = "millisecond", i = "second", d = "minute", _ = "hour", c = "day", y = "week", v = "month", m = "quarter", b = "year", C = "date", r = "Invalid Date", h = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/, z = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g, j = { name: "en", weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"), ordinal: function($) {
        var w = ["th", "st", "nd", "rd"], M = $ % 100;
        return "[" + $ + (w[(M - 20) % 10] || w[M] || w[0]) + "]";
      } }, D = function($, w, M) {
        var I = String($);
        return !I || I.length >= w ? $ : "" + Array(w + 1 - I.length).join(M) + $;
      }, V = { s: D, z: function($) {
        var w = -$.utcOffset(), M = Math.abs(w), I = Math.floor(M / 60), T = M % 60;
        return (w <= 0 ? "+" : "-") + D(I, 2, "0") + ":" + D(T, 2, "0");
      }, m: function $(w, M) {
        if (w.date() < M.date()) return -$(M, w);
        var I = 12 * (M.year() - w.year()) + (M.month() - w.month()), T = w.clone().add(I, v), A = M - T < 0, X = w.clone().add(I + (A ? -1 : 1), v);
        return +(-(I + (M - T) / (A ? T - X : X - T)) || 0);
      }, a: function($) {
        return $ < 0 ? Math.ceil($) || 0 : Math.floor($);
      }, p: function($) {
        return { M: v, y: b, w: y, d: c, D: C, h: _, m: d, s: i, ms: u, Q: m }[$] || String($ || "").toLowerCase().replace(/s$/, "");
      }, u: function($) {
        return $ === void 0;
      } }, x = "en", Y = {};
      Y[x] = j;
      var B = "$isDayjsObject", E = function($) {
        return $ instanceof G || !(!$ || !$[B]);
      }, ee = function $(w, M, I) {
        var T;
        if (!w) return x;
        if (typeof w == "string") {
          var A = w.toLowerCase();
          Y[A] && (T = A), M && (Y[A] = M, T = A);
          var X = w.split("-");
          if (!T && X.length > 1) return $(X[0]);
        } else {
          var Q = w.name;
          Y[Q] = w, T = Q;
        }
        return !I && T && (x = T), T || !I && x;
      }, q = function($, w) {
        if (E($)) return $.clone();
        var M = typeof w == "object" ? w : {};
        return M.date = $, M.args = arguments, new G(M);
      }, P = V;
      P.l = ee, P.i = E, P.w = function($, w) {
        return q($, { locale: w.$L, utc: w.$u, x: w.$x, $offset: w.$offset });
      };
      var G = (function() {
        function $(M) {
          this.$L = ee(M.locale, null, !0), this.parse(M), this.$x = this.$x || M.x || {}, this[B] = !0;
        }
        var w = $.prototype;
        return w.parse = function(M) {
          this.$d = (function(I) {
            var T = I.date, A = I.utc;
            if (T === null) return /* @__PURE__ */ new Date(NaN);
            if (P.u(T)) return /* @__PURE__ */ new Date();
            if (T instanceof Date) return new Date(T);
            if (typeof T == "string" && !/Z$/i.test(T)) {
              var X = T.match(h);
              if (X) {
                var Q = X[2] - 1 || 0, re = (X[7] || "0").substring(0, 3);
                return A ? new Date(Date.UTC(X[1], Q, X[3] || 1, X[4] || 0, X[5] || 0, X[6] || 0, re)) : new Date(X[1], Q, X[3] || 1, X[4] || 0, X[5] || 0, X[6] || 0, re);
              }
            }
            return new Date(T);
          })(M), this.init();
        }, w.init = function() {
          var M = this.$d;
          this.$y = M.getFullYear(), this.$M = M.getMonth(), this.$D = M.getDate(), this.$W = M.getDay(), this.$H = M.getHours(), this.$m = M.getMinutes(), this.$s = M.getSeconds(), this.$ms = M.getMilliseconds();
        }, w.$utils = function() {
          return P;
        }, w.isValid = function() {
          return this.$d.toString() !== r;
        }, w.isSame = function(M, I) {
          var T = q(M);
          return this.startOf(I) <= T && T <= this.endOf(I);
        }, w.isAfter = function(M, I) {
          return q(M) < this.startOf(I);
        }, w.isBefore = function(M, I) {
          return this.endOf(I) < q(M);
        }, w.$g = function(M, I, T) {
          return P.u(M) ? this[I] : this.set(T, M);
        }, w.unix = function() {
          return Math.floor(this.valueOf() / 1e3);
        }, w.valueOf = function() {
          return this.$d.getTime();
        }, w.startOf = function(M, I) {
          var T = this, A = !!P.u(I) || I, X = P.p(M), Q = function(Me, p) {
            var F = P.w(T.$u ? Date.UTC(T.$y, p, Me) : new Date(T.$y, p, Me), T);
            return A ? F : F.endOf(c);
          }, re = function(Me, p) {
            return P.w(T.toDate()[Me].apply(T.toDate("s"), (A ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(p)), T);
          }, de = this.$W, pe = this.$M, ye = this.$D, Ce = "set" + (this.$u ? "UTC" : "");
          switch (X) {
            case b:
              return A ? Q(1, 0) : Q(31, 11);
            case v:
              return A ? Q(1, pe) : Q(0, pe + 1);
            case y:
              var be = this.$locale().weekStart || 0, ze = (de < be ? de + 7 : de) - be;
              return Q(A ? ye - ze : ye + (6 - ze), pe);
            case c:
            case C:
              return re(Ce + "Hours", 0);
            case _:
              return re(Ce + "Minutes", 1);
            case d:
              return re(Ce + "Seconds", 2);
            case i:
              return re(Ce + "Milliseconds", 3);
            default:
              return this.clone();
          }
        }, w.endOf = function(M) {
          return this.startOf(M, !1);
        }, w.$set = function(M, I) {
          var T, A = P.p(M), X = "set" + (this.$u ? "UTC" : ""), Q = (T = {}, T[c] = X + "Date", T[C] = X + "Date", T[v] = X + "Month", T[b] = X + "FullYear", T[_] = X + "Hours", T[d] = X + "Minutes", T[i] = X + "Seconds", T[u] = X + "Milliseconds", T)[A], re = A === c ? this.$D + (I - this.$W) : I;
          if (A === v || A === b) {
            var de = this.clone().set(C, 1);
            de.$d[Q](re), de.init(), this.$d = de.set(C, Math.min(this.$D, de.daysInMonth())).$d;
          } else Q && this.$d[Q](re);
          return this.init(), this;
        }, w.set = function(M, I) {
          return this.clone().$set(M, I);
        }, w.get = function(M) {
          return this[P.p(M)]();
        }, w.add = function(M, I) {
          var T, A = this;
          M = Number(M);
          var X = P.p(I), Q = function(pe) {
            var ye = q(A);
            return P.w(ye.date(ye.date() + Math.round(pe * M)), A);
          };
          if (X === v) return this.set(v, this.$M + M);
          if (X === b) return this.set(b, this.$y + M);
          if (X === c) return Q(1);
          if (X === y) return Q(7);
          var re = (T = {}, T[d] = s, T[_] = l, T[i] = n, T)[X] || 1, de = this.$d.getTime() + M * re;
          return P.w(de, this);
        }, w.subtract = function(M, I) {
          return this.add(-1 * M, I);
        }, w.format = function(M) {
          var I = this, T = this.$locale();
          if (!this.isValid()) return T.invalidDate || r;
          var A = M || "YYYY-MM-DDTHH:mm:ssZ", X = P.z(this), Q = this.$H, re = this.$m, de = this.$M, pe = T.weekdays, ye = T.months, Ce = T.meridiem, be = function(p, F, L, le) {
            return p && (p[F] || p(I, A)) || L[F].slice(0, le);
          }, ze = function(p) {
            return P.s(Q % 12 || 12, p, "0");
          }, Me = Ce || function(p, F, L) {
            var le = p < 12 ? "AM" : "PM";
            return L ? le.toLowerCase() : le;
          };
          return A.replace(z, (function(p, F) {
            return F || (function(L) {
              switch (L) {
                case "YY":
                  return String(I.$y).slice(-2);
                case "YYYY":
                  return P.s(I.$y, 4, "0");
                case "M":
                  return de + 1;
                case "MM":
                  return P.s(de + 1, 2, "0");
                case "MMM":
                  return be(T.monthsShort, de, ye, 3);
                case "MMMM":
                  return be(ye, de);
                case "D":
                  return I.$D;
                case "DD":
                  return P.s(I.$D, 2, "0");
                case "d":
                  return String(I.$W);
                case "dd":
                  return be(T.weekdaysMin, I.$W, pe, 2);
                case "ddd":
                  return be(T.weekdaysShort, I.$W, pe, 3);
                case "dddd":
                  return pe[I.$W];
                case "H":
                  return String(Q);
                case "HH":
                  return P.s(Q, 2, "0");
                case "h":
                  return ze(1);
                case "hh":
                  return ze(2);
                case "a":
                  return Me(Q, re, !0);
                case "A":
                  return Me(Q, re, !1);
                case "m":
                  return String(re);
                case "mm":
                  return P.s(re, 2, "0");
                case "s":
                  return String(I.$s);
                case "ss":
                  return P.s(I.$s, 2, "0");
                case "SSS":
                  return P.s(I.$ms, 3, "0");
                case "Z":
                  return X;
              }
              return null;
            })(p) || X.replace(":", "");
          }));
        }, w.utcOffset = function() {
          return 15 * -Math.round(this.$d.getTimezoneOffset() / 15);
        }, w.diff = function(M, I, T) {
          var A, X = this, Q = P.p(I), re = q(M), de = (re.utcOffset() - this.utcOffset()) * s, pe = this - re, ye = function() {
            return P.m(X, re);
          };
          switch (Q) {
            case b:
              A = ye() / 12;
              break;
            case v:
              A = ye();
              break;
            case m:
              A = ye() / 3;
              break;
            case y:
              A = (pe - de) / 6048e5;
              break;
            case c:
              A = (pe - de) / 864e5;
              break;
            case _:
              A = pe / l;
              break;
            case d:
              A = pe / s;
              break;
            case i:
              A = pe / n;
              break;
            default:
              A = pe;
          }
          return T ? A : P.a(A);
        }, w.daysInMonth = function() {
          return this.endOf(v).$D;
        }, w.$locale = function() {
          return Y[this.$L];
        }, w.locale = function(M, I) {
          if (!M) return this.$L;
          var T = this.clone(), A = ee(M, I, !0);
          return A && (T.$L = A), T;
        }, w.clone = function() {
          return P.w(this.$d, this);
        }, w.toDate = function() {
          return new Date(this.valueOf());
        }, w.toJSON = function() {
          return this.isValid() ? this.toISOString() : null;
        }, w.toISOString = function() {
          return this.$d.toISOString();
        }, w.toString = function() {
          return this.$d.toUTCString();
        }, $;
      })(), k = G.prototype;
      return q.prototype = k, [["$ms", u], ["$s", i], ["$m", d], ["$H", _], ["$W", c], ["$M", v], ["$y", b], ["$D", C]].forEach((function($) {
        k[$[1]] = function(w) {
          return this.$g(w, $[0], $[1]);
        };
      })), q.extend = function($, w) {
        return $.$i || ($(w, G, q), $.$i = !0), q;
      }, q.locale = ee, q.isDayjs = E, q.unix = function($) {
        return q(1e3 * $);
      }, q.en = Y[x], q.Ls = Y, q.p = {}, q;
    }));
  })(qe)), qe.exports;
}
var Zo = Jo();
const se = /* @__PURE__ */ Mt(Zo);
var Ne = { exports: {} }, Go = Ne.exports, dt;
function Qo() {
  return dt || (dt = 1, (function(e, f) {
    (function(n, s) {
      e.exports = s();
    })(Go, (function() {
      var n = { LTS: "h:mm:ss A", LT: "h:mm A", L: "MM/DD/YYYY", LL: "MMMM D, YYYY", LLL: "MMMM D, YYYY h:mm A", LLLL: "dddd, MMMM D, YYYY h:mm A" }, s = /(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|Q|YYYY|YY?|ww?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g, l = /\d/, u = /\d\d/, i = /\d\d?/, d = /\d*[^-_:/,()\s\d]+/, _ = {}, c = function(h) {
        return (h = +h) + (h > 68 ? 1900 : 2e3);
      }, y = function(h) {
        return function(z) {
          this[h] = +z;
        };
      }, v = [/[+-]\d\d:?(\d\d)?|Z/, function(h) {
        (this.zone || (this.zone = {})).offset = (function(z) {
          if (!z || z === "Z") return 0;
          var j = z.match(/([+-]|\d\d)/g), D = 60 * j[1] + (+j[2] || 0);
          return D === 0 ? 0 : j[0] === "+" ? -D : D;
        })(h);
      }], m = function(h) {
        var z = _[h];
        return z && (z.indexOf ? z : z.s.concat(z.f));
      }, b = function(h, z) {
        var j, D = _.meridiem;
        if (D) {
          for (var V = 1; V <= 24; V += 1) if (h.indexOf(D(V, 0, z)) > -1) {
            j = V > 12;
            break;
          }
        } else j = h === (z ? "pm" : "PM");
        return j;
      }, C = { A: [d, function(h) {
        this.afternoon = b(h, !1);
      }], a: [d, function(h) {
        this.afternoon = b(h, !0);
      }], Q: [l, function(h) {
        this.month = 3 * (h - 1) + 1;
      }], S: [l, function(h) {
        this.milliseconds = 100 * +h;
      }], SS: [u, function(h) {
        this.milliseconds = 10 * +h;
      }], SSS: [/\d{3}/, function(h) {
        this.milliseconds = +h;
      }], s: [i, y("seconds")], ss: [i, y("seconds")], m: [i, y("minutes")], mm: [i, y("minutes")], H: [i, y("hours")], h: [i, y("hours")], HH: [i, y("hours")], hh: [i, y("hours")], D: [i, y("day")], DD: [u, y("day")], Do: [d, function(h) {
        var z = _.ordinal, j = h.match(/\d+/);
        if (this.day = j[0], z) for (var D = 1; D <= 31; D += 1) z(D).replace(/\[|\]/g, "") === h && (this.day = D);
      }], w: [i, y("week")], ww: [u, y("week")], M: [i, y("month")], MM: [u, y("month")], MMM: [d, function(h) {
        var z = m("months"), j = (m("monthsShort") || z.map((function(D) {
          return D.slice(0, 3);
        }))).indexOf(h) + 1;
        if (j < 1) throw new Error();
        this.month = j % 12 || j;
      }], MMMM: [d, function(h) {
        var z = m("months").indexOf(h) + 1;
        if (z < 1) throw new Error();
        this.month = z % 12 || z;
      }], Y: [/[+-]?\d+/, y("year")], YY: [u, function(h) {
        this.year = c(h);
      }], YYYY: [/\d{4}/, y("year")], Z: v, ZZ: v };
      function r(h) {
        var z, j;
        z = h, j = _ && _.formats;
        for (var D = (h = z.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g, (function(q, P, G) {
          var k = G && G.toUpperCase();
          return P || j[G] || n[G] || j[k].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g, (function($, w, M) {
            return w || M.slice(1);
          }));
        }))).match(s), V = D.length, x = 0; x < V; x += 1) {
          var Y = D[x], B = C[Y], E = B && B[0], ee = B && B[1];
          D[x] = ee ? { regex: E, parser: ee } : Y.replace(/^\[|\]$/g, "");
        }
        return function(q) {
          for (var P = {}, G = 0, k = 0; G < V; G += 1) {
            var $ = D[G];
            if (typeof $ == "string") k += $.length;
            else {
              var w = $.regex, M = $.parser, I = q.slice(k), T = w.exec(I)[0];
              M.call(P, T), q = q.replace(T, "");
            }
          }
          return (function(A) {
            var X = A.afternoon;
            if (X !== void 0) {
              var Q = A.hours;
              X ? Q < 12 && (A.hours += 12) : Q === 12 && (A.hours = 0), delete A.afternoon;
            }
          })(P), P;
        };
      }
      return function(h, z, j) {
        j.p.customParseFormat = !0, h && h.parseTwoDigitYear && (c = h.parseTwoDigitYear);
        var D = z.prototype, V = D.parse;
        D.parse = function(x) {
          var Y = x.date, B = x.utc, E = x.args;
          this.$u = B;
          var ee = E[1];
          if (typeof ee == "string") {
            var q = E[2] === !0, P = E[3] === !0, G = q || P, k = E[2];
            P && (k = E[2]), _ = this.$locale(), !q && k && (_ = j.Ls[k]), this.$d = (function(I, T, A, X) {
              try {
                if (["x", "X"].indexOf(T) > -1) return new Date((T === "X" ? 1e3 : 1) * I);
                var Q = r(T)(I), re = Q.year, de = Q.month, pe = Q.day, ye = Q.hours, Ce = Q.minutes, be = Q.seconds, ze = Q.milliseconds, Me = Q.zone, p = Q.week, F = /* @__PURE__ */ new Date(), L = pe || (re || de ? 1 : F.getDate()), le = re || F.getFullYear(), Se = 0;
                re && !de || (Se = de > 0 ? de - 1 : F.getMonth());
                var Ve, Oe = ye || 0, Xe = Ce || 0, Ke = be || 0, Je = ze || 0;
                return Me ? new Date(Date.UTC(le, Se, L, Oe, Xe, Ke, Je + 60 * Me.offset * 1e3)) : A ? new Date(Date.UTC(le, Se, L, Oe, Xe, Ke, Je)) : (Ve = new Date(le, Se, L, Oe, Xe, Ke, Je), p && (Ve = X(Ve).week(p).toDate()), Ve);
              } catch {
                return /* @__PURE__ */ new Date("");
              }
            })(Y, ee, B, j), this.init(), k && k !== !0 && (this.$L = this.locale(k).$L), G && Y != this.format(ee) && (this.$d = /* @__PURE__ */ new Date("")), _ = {};
          } else if (ee instanceof Array) for (var $ = ee.length, w = 1; w <= $; w += 1) {
            E[1] = ee[w - 1];
            var M = j.apply(this, E);
            if (M.isValid()) {
              this.$d = M.$d, this.$L = M.$L, this.init();
              break;
            }
            w === $ && (this.$d = /* @__PURE__ */ new Date(""));
          }
          else V.call(this, x);
        };
      };
    }));
  })(Ne)), Ne.exports;
}
var ea = Qo();
const Ct = /* @__PURE__ */ Mt(ea), ta = { class: "calendar-header" }, na = { class: "flex flex--gap-sm" }, oa = { key: 0 }, aa = { class: "calendar-weekdays" }, la = { class: "calendar-days" }, sa = ["onClick"], ia = {
  key: 1,
  class: "calendar-months"
}, ua = ["onClick"], ra = {
  key: 2,
  class: "calendar-years"
}, da = ["onClick"], ca = { class: "flex flex--space flex--gap-md px-2 pb-2" }, fa = {
  key: 0,
  class: "flex flex--gap-sm"
}, va = { key: 1 }, ma = {
  key: 3,
  class: "calendar-time"
}, pa = { class: "fu-time-input-wrapper" }, ha = {
  key: 0,
  class: "fu-time-dropdown customScrollBar"
}, _a = ["onMousedown"], Be = 12, ya = {
  __name: "FusionDatePicker",
  props: {
    modelValue: [String, Object],
    variant: {
      type: String,
      default: "date",
      validator: (e) => ["date", "date-time", "date-range"].includes(e)
    },
    min: String,
    max: String,
    // New props
    formWrapperWidth: String,
    size: {
      type: String,
      default: "md",
      validator: (e) => ["sm", "md", "lg"].includes(e)
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
  setup(e, { emit: f }) {
    se.extend(Ct);
    const n = e, s = g(!1), l = f, u = g(!1), i = g(null), d = g(null), _ = g(null), c = g(se().startOf("month")), y = g(null), v = g({ start: null, end: null }), m = g("00:00"), b = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"], C = [
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
    ], r = g("days"), h = H(
      () => Math.floor(c.value.year() / Be) * Be
    ), z = H(() => h.value + Be - 1), j = H(
      () => Array.from({ length: Be }, (p, F) => h.value + F)
    ), D = H(() => {
      const p = c.value.startOf("month").startOf("week"), F = c.value.endOf("month").endOf("week"), L = [];
      let le = p.clone();
      for (; le.isBefore(F) || le.isSame(F, "day"); )
        L.push({
          date: le.clone(),
          isCurrentMonth: le.month() === c.value.month()
        }), le = le.add(1, "day");
      return L;
    });
    function V(p) {
      return !!(n.min && p.isBefore(se(n.min), "day") || n.max && p.isAfter(se(n.max), "day"));
    }
    function x(p) {
      return n.variant === "date-range" ? v.value.start && p.isSame(v.value.start, "day") || v.value.end && p.isSame(v.value.end, "day") : y.value && p.isSame(y.value, "day");
    }
    function Y(p) {
      return n.variant === "date-range" && v.value.start && v.value.end && p.isAfter(v.value.start, "day") && p.isBefore(v.value.end, "day");
    }
    function B(p) {
      if (!V(p)) {
        if (n.variant === "date-range") {
          !v.value.start || i.value === "start" ? (v.value.start = p.clone(), v.value.end = null, i.value = "end") : p.isBefore(v.value.start, "day") ? (v.value.end = v.value.start.clone(), v.value.start = p.clone()) : v.value.end = p.clone();
          return;
        }
        y.value = p.clone(), l(
          "update:modelValue",
          n.variant === "date-time" ? y.value.format("YYYY-MM-DDTHH:mm") : y.value.format("YYYY-MM-DD")
        ), q();
      }
    }
    function E() {
      v.value.start && v.value.end && (l("update:modelValue", {
        start: v.value.start.format("YYYY-MM-DD"),
        end: v.value.end.format("YYYY-MM-DD")
      }), q());
    }
    function ee(p = null) {
      i.value = p, u.value = !0, n.variant === "date-range" ? v.value.start ? c.value = v.value.start.startOf("month") : c.value = se().startOf("month") : y.value ? c.value = y.value.startOf("month") : c.value = se().startOf("month"), ve(() => {
        k(), window.addEventListener("resize", k), window.addEventListener("click", P);
      });
    }
    function q() {
      u.value = !1, window.removeEventListener("resize", k), window.removeEventListener("click", P);
    }
    function P(p) {
      !d.value?.contains(p.target) && !_.value?.contains(p.target) && q();
    }
    const G = g({
      position: "absolute",
      top: "0px",
      left: "0px",
      zIndex: 9999
    });
    function k() {
      if (!d.value || !_.value) return;
      const p = d.value.getBoundingClientRect(), F = _.value.getBoundingClientRect(), L = window.innerHeight - p.bottom, le = p.top, Se = window.scrollY || window.pageYOffset, Ve = window.scrollX || window.pageXOffset;
      let Oe;
      L < F.height && le > F.height ? Oe = p.top + Se - F.height - 6 : Oe = p.bottom + Se + 6, G.value = {
        position: "absolute",
        top: `${Oe}px`,
        left: `${p.left + Ve}px`,
        zIndex: 9999
      };
    }
    const $ = H(() => y.value ? n.variant === "date-time" ? y.value.format("YYYY-MM-DD HH:mm") : y.value.format("YYYY-MM-DD") : ""), w = H(() => n.variant !== "date-range" ? "" : v.value.start && v.value.end ? `${v.value.start.format(
      "YYYY-MM-DD"
    )} to ${v.value.end.format("YYYY-MM-DD")}` : v.value.start ? `${v.value.start.format("YYYY-MM-DD")} to ...` : ""), M = H(() => `fu-date-picker--${n.variant}`);
    fe(
      () => n.modelValue,
      (p) => {
        if (n.variant !== "date-range") {
          if (typeof p == "string" && p) {
            const F = se(p);
            if (F.isValid()) {
              y.value = F, c.value = F.startOf("month"), n.variant === "date-time" ? m.value = F.format("h:mm A") : m.value = "00:00";
              return;
            }
          }
          (p === null || p === "") && (y.value = null, v.value = { start: null, end: null }, m.value = "00:00");
        }
      },
      { immediate: !0 }
    );
    function I() {
      r.value === "days" ? r.value = "months" : r.value === "months" ? r.value = "years" : r.value = "days";
    }
    function T() {
      r.value === "days" ? c.value = c.value.subtract(1, "month") : r.value === "months" ? c.value = c.value.subtract(1, "year") : c.value = c.value.subtract(Be, "year");
    }
    function A() {
      r.value === "days" ? c.value = c.value.add(1, "month") : r.value === "months" ? c.value = c.value.add(1, "year") : c.value = c.value.add(Be, "year");
    }
    function X(p) {
      c.value = c.value.month(p), r.value = "days";
    }
    function Q(p) {
      c.value = c.value.year(p), r.value = "months";
    }
    function re() {
      const p = se();
      n.variant === "date-range" ? v.value = { start: p.clone(), end: p.clone() } : (y.value = p.clone(), l(
        "update:modelValue",
        n.variant === "date-time" ? p.format("YYYY-MM-DDTHH:mm") : p.format("YYYY-MM-DD")
      ), q());
    }
    function de() {
      const p = se().add(1, "day");
      n.variant === "date-range" ? v.value = { start: p.clone(), end: p.clone() } : (y.value = p.clone(), l(
        "update:modelValue",
        n.variant === "date-time" ? p.format("YYYY-MM-DDTHH:mm") : p.format("YYYY-MM-DD")
      ), q());
    }
    function pe() {
      y.value = null, v.value = { start: null, end: null }, l(
        "update:modelValue",
        n.variant === "date-range" ? { start: null, end: null } : null
      ), q();
    }
    const ye = H(() => {
      const p = [];
      for (let F = 0; F < 24; F++)
        for (let L = 0; L < 60; L += 15)
          p.push(se().hour(F).minute(L).format("h:mm A"));
      return p;
    }), Ce = H(() => {
      if (!m.value) return ye.value;
      const p = m.value.toLowerCase().replace(/\s+/g, "");
      return ye.value.filter(
        (F) => F.toLowerCase().replace(/\s+/g, "").startsWith(p)
      );
    });
    function be() {
      if (!y.value || !m.value) return;
      const p = String(m.value).trim().toLowerCase(), F = se(
        p,
        ["h:mm a", "h:mma", "ha", "h a", "hh:mm a", "H:mm", "HH:mm", "H"],
        !0
      );
      if (!F.isValid()) {
        s.value = !1;
        return;
      }
      y.value = y.value.hour(F.hour()).minute(F.minute()), m.value = y.value.format("h:mm A"), l("update:modelValue", y.value.format("YYYY-MM-DDTHH:mm")), s.value = !1;
    }
    function ze(p) {
      m.value = p, be();
    }
    function Me() {
      setTimeout(() => {
        be(), s.value = !1;
      }, 120);
    }
    return _e(() => {
      window.removeEventListener("resize", k), window.removeEventListener("click", P);
    }), (p, F) => (t(), o("div", {
      class: R(["fu-date-picker", M.value]),
      ref_key: "pickerRef",
      ref: d,
      style: oe({ width: e.formWrapperWidth })
    }, [
      e.variant !== "date-range" ? (t(), U(xe, {
        key: 0,
        type: "text",
        modelValue: $.value,
        placeholder: "Select date",
        readonly: "",
        onClick: ee,
        formWrapperWidth: e.formWrapperWidth,
        size: e.size,
        error: e.error,
        required: e.required,
        label: e.label,
        disabled: e.disabled
      }, {
        right: ae(() => [
          W(Z(ke))
        ]),
        _: 1
      }, 8, ["modelValue", "formWrapperWidth", "size", "error", "required", "label", "disabled"])) : (t(), U(xe, {
        key: 1,
        type: "text",
        modelValue: w.value,
        placeholder: "Select date range",
        onClick: ee,
        readonly: "",
        formWrapperWidth: e.formWrapperWidth,
        size: e.size,
        error: e.error,
        required: e.required,
        disabled: e.disabled
      }, {
        right: ae(() => [
          W(Z(ke))
        ]),
        _: 1
      }, 8, ["modelValue", "formWrapperWidth", "size", "error", "required", "disabled"])),
      (t(), U(ge, { to: "body" }, [
        u.value ? (t(), o("div", {
          key: 0,
          class: "fu-date-picker__calendar-overlay",
          onClick: ue(q, ["self"])
        }, [
          a("div", {
            class: "fu-date-picker__calendar",
            style: oe(G.value),
            ref_key: "calendarRef",
            ref: _,
            onClick: F[2] || (F[2] = ue(() => {
            }, ["stop"]))
          }, [
            a("div", ta, [
              W(we, {
                variant: "ghost",
                size: "sm",
                icon: Z(ke),
                onClick: I
              }, {
                default: ae(() => [
                  r.value === "days" ? (t(), o(N, { key: 0 }, [
                    ie(S(c.value.format("MMMM YYYY")), 1)
                  ], 64)) : r.value === "months" ? (t(), o(N, { key: 1 }, [
                    ie(S(c.value.year()), 1)
                  ], 64)) : (t(), o(N, { key: 2 }, [
                    ie(S(h.value) + " - " + S(z.value), 1)
                  ], 64))
                ]),
                _: 1
              }, 8, ["icon"]),
              a("div", na, [
                W($e, {
                  icon: Z(Pe),
                  size: "sm",
                  onClick: T
                }, null, 8, ["icon"]),
                W($e, {
                  icon: Z(We),
                  size: "sm",
                  onClick: A
                }, null, 8, ["icon"])
              ])
            ]),
            r.value === "days" ? (t(), o("div", oa, [
              a("div", aa, [
                (t(), o(N, null, ne(b, (L) => a("div", {
                  key: L,
                  class: "calendar-weekday"
                }, S(L), 1)), 64))
              ]),
              a("div", la, [
                (t(!0), o(N, null, ne(D.value, (L) => (t(), o("div", {
                  key: L.date.toString(),
                  class: R(["calendar-day", {
                    "calendar-day--other-month": !L.isCurrentMonth,
                    "calendar-day--selected": x(L.date),
                    "calendar-day--in-range": Y(L.date),
                    "calendar-day--disabled": V(L.date)
                  }]),
                  onClick: (le) => B(L.date)
                }, S(L.date.date()), 11, sa))), 128))
              ])
            ])) : r.value === "months" ? (t(), o("div", ia, [
              (t(), o(N, null, ne(C, (L, le) => a("div", {
                key: L,
                class: R(["calendar-month", { "calendar-month--selected": le === c.value.month() }]),
                onClick: (Se) => X(le)
              }, S(L), 11, ua)), 64))
            ])) : (t(), o("div", ra, [
              (t(!0), o(N, null, ne(j.value, (L) => (t(), o("div", {
                key: L,
                class: R(["calendar-year", { "calendar-year--selected": L === c.value.year() }]),
                onClick: (le) => Q(L)
              }, S(L), 11, da))), 128))
            ])),
            F[7] || (F[7] = a("hr", null, null, -1)),
            a("div", ca, [
              e.variant !== "date-range" ? (t(), o("div", fa, [
                W(we, {
                  variant: "outline",
                  onClick: re
                }, {
                  default: ae(() => [...F[3] || (F[3] = [
                    ie("Today", -1)
                  ])]),
                  _: 1
                }),
                W(we, {
                  variant: "outline",
                  onClick: de
                }, {
                  default: ae(() => [...F[4] || (F[4] = [
                    ie("Tomorrow", -1)
                  ])]),
                  _: 1
                })
              ])) : O("", !0),
              e.variant === "date-range" ? (t(), o("div", va, [
                W(we, {
                  variant: "outline",
                  onClick: E
                }, {
                  default: ae(() => [...F[5] || (F[5] = [
                    ie("Apply", -1)
                  ])]),
                  _: 1
                })
              ])) : O("", !0),
              W(we, {
                variant: "outline",
                onClick: pe
              }, {
                default: ae(() => [...F[6] || (F[6] = [
                  ie("Clear", -1)
                ])]),
                _: 1
              })
            ]),
            e.variant === "date-time" ? (t(), o("div", ma, [
              a("div", pa, [
                W(xe, {
                  type: "text",
                  modelValue: m.value,
                  "onUpdate:modelValue": F[0] || (F[0] = (L) => m.value = L),
                  placeholder: "HH:mm or 4:30pm",
                  onFocus: F[1] || (F[1] = (L) => s.value = !0),
                  onKeydown: De(ue(be, ["prevent"]), ["enter"]),
                  onBlur: Me,
                  formWrapperWidth: "100%"
                }, {
                  right: ae(() => [
                    W(Z(ke))
                  ]),
                  _: 1
                }, 8, ["modelValue", "onKeydown"]),
                s.value ? (t(), o("div", ha, [
                  (t(!0), o(N, null, ne(Ce.value, (L) => (t(), o("div", {
                    key: L,
                    class: "fu-time-option",
                    onMousedown: ue((le) => ze(L), ["prevent"])
                  }, S(L), 41, _a))), 128))
                ])) : O("", !0)
              ])
            ])) : O("", !0)
          ], 4)
        ])) : O("", !0)
      ]))
    ], 6));
  }
}, ga = /* @__PURE__ */ J(ya, [["__scopeId", "data-v-41bea5ec"]]), ba = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: ga
}, Symbol.toStringTag, { value: "Module" })), wa = { class: "calendar-header" }, ka = { class: "flex flex--gap-sm" }, $a = { key: 0 }, Ma = { class: "calendar-weekdays" }, Ca = { class: "calendar-days" }, Sa = ["onClick"], xa = {
  key: 1,
  class: "calendar-months"
}, za = ["onClick"], Oa = {
  key: 2,
  class: "calendar-years"
}, Da = ["onClick"], Ya = { class: "flex flex--space flex--gap-md px-2 pb-2" }, Va = {
  key: 0,
  class: "flex flex--gap-sm"
}, Ta = { key: 1 }, Fa = {
  key: 3,
  class: "calendar-time"
}, Ba = { class: "fu-time-input-wrapper" }, Ia = {
  key: 0,
  class: "fu-time-dropdown customScrollBar"
}, Ea = ["onMousedown"], Ie = 12, La = {
  __name: "datePickerBackup",
  props: {
    modelValue: [String, Object],
    variant: {
      type: String,
      default: "date",
      validator: (e) => ["date", "date-time", "date-range"].includes(e)
    },
    min: String,
    max: String,
    // New props
    formWrapperWidth: String,
    size: {
      type: String,
      default: "md",
      validator: (e) => ["sm", "md", "lg"].includes(e)
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
  setup(e, { emit: f }) {
    se.extend(Ct);
    const n = e, s = g(!1), l = f, u = g(!1), i = g(null), d = g(null), _ = g(null), c = g(se().startOf("month")), y = g(null), v = g({ start: null, end: null }), m = g("00:00"), b = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"], C = [
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
    ], r = g("days"), h = H(
      () => Math.floor(c.value.year() / Ie) * Ie
    ), z = H(() => h.value + Ie - 1), j = H(
      () => Array.from({ length: Ie }, (p, F) => h.value + F)
    ), D = H(() => {
      const p = c.value.startOf("month").startOf("week"), F = c.value.endOf("month").endOf("week"), L = [];
      let le = p.clone();
      for (; le.isBefore(F) || le.isSame(F, "day"); )
        L.push({
          date: le.clone(),
          isCurrentMonth: le.month() === c.value.month()
        }), le = le.add(1, "day");
      return L;
    });
    function V(p) {
      return !!(n.min && p.isBefore(se(n.min), "day") || n.max && p.isAfter(se(n.max), "day"));
    }
    function x(p) {
      return n.variant === "date-range" ? v.value.start && p.isSame(v.value.start, "day") || v.value.end && p.isSame(v.value.end, "day") : y.value && p.isSame(y.value, "day");
    }
    function Y(p) {
      return n.variant === "date-range" && v.value.start && v.value.end && p.isAfter(v.value.start, "day") && p.isBefore(v.value.end, "day");
    }
    function B(p) {
      if (!V(p)) {
        if (n.variant === "date-range") {
          !v.value.start || i.value === "start" ? (v.value.start = p.clone(), v.value.end = null, i.value = "end") : p.isBefore(v.value.start, "day") ? (v.value.end = v.value.start.clone(), v.value.start = p.clone()) : v.value.end = p.clone();
          return;
        }
        y.value = p.clone(), l(
          "update:modelValue",
          n.variant === "date-time" ? y.value.format("YYYY-MM-DDTHH:mm") : y.value.format("YYYY-MM-DD")
        ), q();
      }
    }
    function E() {
      v.value.start && v.value.end && (l("update:modelValue", {
        start: v.value.start.format("YYYY-MM-DD"),
        end: v.value.end.format("YYYY-MM-DD")
      }), q());
    }
    function ee(p = null) {
      i.value = p, u.value = !0, n.variant === "date-range" ? v.value.start ? c.value = v.value.start.startOf("month") : c.value = se().startOf("month") : y.value ? c.value = y.value.startOf("month") : c.value = se().startOf("month"), ve(() => {
        k(), window.addEventListener("resize", k), window.addEventListener("click", P);
      });
    }
    function q() {
      u.value = !1, window.removeEventListener("resize", k), window.removeEventListener("click", P);
    }
    function P(p) {
      !d.value?.contains(p.target) && !_.value?.contains(p.target) && q();
    }
    const G = g({
      position: "absolute",
      top: "0px",
      left: "0px",
      zIndex: 9999
    });
    function k() {
      if (!d.value || !_.value) return;
      const p = d.value.getBoundingClientRect(), F = _.value.getBoundingClientRect(), L = window.innerHeight - p.bottom, le = p.top, Se = window.scrollY || window.pageYOffset, Ve = window.scrollX || window.pageXOffset;
      let Oe;
      L < F.height && le > F.height ? Oe = p.top + Se - F.height - 6 : Oe = p.bottom + Se + 6, G.value = {
        position: "absolute",
        top: `${Oe}px`,
        left: `${p.left + Ve}px`,
        zIndex: 9999
      };
    }
    const $ = H(() => y.value ? n.variant === "date-time" ? y.value.format("YYYY-MM-DD HH:mm") : y.value.format("YYYY-MM-DD") : ""), w = H(() => n.variant !== "date-range" ? "" : v.value.start && v.value.end ? `${v.value.start.format(
      "YYYY-MM-DD"
    )} to ${v.value.end.format("YYYY-MM-DD")}` : v.value.start ? `${v.value.start.format("YYYY-MM-DD")} to ...` : ""), M = H(() => `fu-date-picker--${n.variant}`);
    fe(
      () => n.modelValue,
      (p) => {
        if (n.variant !== "date-range") {
          if (typeof p == "string" && p) {
            const F = se(p);
            if (F.isValid()) {
              y.value = F, c.value = F.startOf("month"), n.variant === "date-time" ? m.value = F.format("h:mm A") : m.value = "00:00";
              return;
            }
          }
          (p === null || p === "") && (y.value = null, v.value = { start: null, end: null }, m.value = "00:00");
        }
      },
      { immediate: !0 }
    );
    function I() {
      r.value === "days" ? r.value = "months" : r.value === "months" ? r.value = "years" : r.value = "days";
    }
    function T() {
      r.value === "days" ? c.value = c.value.subtract(1, "month") : r.value === "months" ? c.value = c.value.subtract(1, "year") : c.value = c.value.subtract(Ie, "year");
    }
    function A() {
      r.value === "days" ? c.value = c.value.add(1, "month") : r.value === "months" ? c.value = c.value.add(1, "year") : c.value = c.value.add(Ie, "year");
    }
    function X(p) {
      c.value = c.value.month(p), r.value = "days";
    }
    function Q(p) {
      c.value = c.value.year(p), r.value = "months";
    }
    function re() {
      const p = se();
      n.variant === "date-range" ? v.value = { start: p.clone(), end: p.clone() } : (y.value = p.clone(), l(
        "update:modelValue",
        n.variant === "date-time" ? p.format("YYYY-MM-DDTHH:mm") : p.format("YYYY-MM-DD")
      ), q());
    }
    function de() {
      const p = se().add(1, "day");
      n.variant === "date-range" ? v.value = { start: p.clone(), end: p.clone() } : (y.value = p.clone(), l(
        "update:modelValue",
        n.variant === "date-time" ? p.format("YYYY-MM-DDTHH:mm") : p.format("YYYY-MM-DD")
      ), q());
    }
    function pe() {
      y.value = null, v.value = { start: null, end: null }, l(
        "update:modelValue",
        n.variant === "date-range" ? { start: null, end: null } : null
      ), q();
    }
    const ye = H(() => {
      const p = [];
      for (let F = 0; F < 24; F++)
        for (let L = 0; L < 60; L += 15)
          p.push(se().hour(F).minute(L).format("h:mm A"));
      return p;
    }), Ce = H(() => {
      if (!m.value) return ye.value;
      const p = m.value.toLowerCase().replace(/\s+/g, "");
      return ye.value.filter(
        (F) => F.toLowerCase().replace(/\s+/g, "").startsWith(p)
      );
    });
    function be() {
      if (!y.value || !m.value) return;
      const p = String(m.value).trim().toLowerCase(), F = se(
        p,
        ["h:mm a", "h:mma", "ha", "h a", "hh:mm a", "H:mm", "HH:mm", "H"],
        !0
      );
      if (!F.isValid()) {
        s.value = !1;
        return;
      }
      y.value = y.value.hour(F.hour()).minute(F.minute()), m.value = y.value.format("h:mm A"), l("update:modelValue", y.value.format("YYYY-MM-DDTHH:mm")), s.value = !1;
    }
    function ze(p) {
      m.value = p, be();
    }
    function Me() {
      setTimeout(() => {
        be(), s.value = !1;
      }, 120);
    }
    return _e(() => {
      window.removeEventListener("resize", k), window.removeEventListener("click", P);
    }), (p, F) => (t(), o("div", {
      class: R(["fu-date-picker", M.value]),
      ref_key: "pickerRef",
      ref: d,
      style: oe({ width: e.formWrapperWidth })
    }, [
      e.variant !== "date-range" ? (t(), U(xe, {
        key: 0,
        type: "text",
        modelValue: $.value,
        placeholder: "Select date",
        readonly: "",
        onClick: ee,
        formWrapperWidth: e.formWrapperWidth,
        size: e.size,
        error: e.error,
        required: e.required,
        label: e.label,
        disabled: e.disabled
      }, {
        right: ae(() => [
          W(Z(ke))
        ]),
        _: 1
      }, 8, ["modelValue", "formWrapperWidth", "size", "error", "required", "label", "disabled"])) : (t(), U(xe, {
        key: 1,
        type: "text",
        modelValue: w.value,
        placeholder: "Select date range",
        onClick: ee,
        readonly: "",
        formWrapperWidth: e.formWrapperWidth,
        size: e.size,
        error: e.error,
        required: e.required,
        disabled: e.disabled
      }, {
        right: ae(() => [
          W(Z(ke))
        ]),
        _: 1
      }, 8, ["modelValue", "formWrapperWidth", "size", "error", "required", "disabled"])),
      (t(), U(ge, { to: "body" }, [
        u.value ? (t(), o("div", {
          key: 0,
          class: "fu-date-picker__calendar-overlay",
          onClick: ue(q, ["self"])
        }, [
          a("div", {
            class: "fu-date-picker__calendar",
            style: oe(G.value),
            ref_key: "calendarRef",
            ref: _,
            onClick: F[2] || (F[2] = ue(() => {
            }, ["stop"]))
          }, [
            a("div", wa, [
              W(we, {
                variant: "ghost",
                size: "sm",
                onClick: I
              }, {
                default: ae(() => [
                  r.value === "days" ? (t(), o(N, { key: 0 }, [
                    ie(S(c.value.format("MMMM YYYY")), 1)
                  ], 64)) : r.value === "months" ? (t(), o(N, { key: 1 }, [
                    ie(S(c.value.year()), 1)
                  ], 64)) : (t(), o(N, { key: 2 }, [
                    ie(S(h.value) + " - " + S(z.value), 1)
                  ], 64))
                ]),
                _: 1
              }),
              a("div", ka, [
                W($e, {
                  icon: Z(Pe),
                  size: "sm",
                  onClick: T
                }, null, 8, ["icon"]),
                W($e, {
                  icon: Z(We),
                  size: "sm",
                  onClick: A
                }, null, 8, ["icon"])
              ])
            ]),
            r.value === "days" ? (t(), o("div", $a, [
              a("div", Ma, [
                (t(), o(N, null, ne(b, (L) => a("div", {
                  key: L,
                  class: "calendar-weekday"
                }, S(L), 1)), 64))
              ]),
              a("div", Ca, [
                (t(!0), o(N, null, ne(D.value, (L) => (t(), o("div", {
                  key: L.date.toString(),
                  class: R(["calendar-day", {
                    "calendar-day--other-month": !L.isCurrentMonth,
                    "calendar-day--selected": x(L.date),
                    "calendar-day--in-range": Y(L.date),
                    "calendar-day--disabled": V(L.date)
                  }]),
                  onClick: (le) => B(L.date)
                }, S(L.date.date()), 11, Sa))), 128))
              ])
            ])) : r.value === "months" ? (t(), o("div", xa, [
              (t(), o(N, null, ne(C, (L, le) => a("div", {
                key: L,
                class: R(["calendar-month", { "calendar-month--selected": le === c.value.month() }]),
                onClick: (Se) => X(le)
              }, S(L), 11, za)), 64))
            ])) : (t(), o("div", Oa, [
              (t(!0), o(N, null, ne(j.value, (L) => (t(), o("div", {
                key: L,
                class: R(["calendar-year", { "calendar-year--selected": L === c.value.year() }]),
                onClick: (le) => Q(L)
              }, S(L), 11, Da))), 128))
            ])),
            F[7] || (F[7] = a("hr", null, null, -1)),
            a("div", Ya, [
              e.variant !== "date-range" ? (t(), o("div", Va, [
                W(we, {
                  variant: "outline",
                  onClick: re
                }, {
                  default: ae(() => [...F[3] || (F[3] = [
                    ie("Today", -1)
                  ])]),
                  _: 1
                }),
                W(we, {
                  variant: "outline",
                  onClick: de
                }, {
                  default: ae(() => [...F[4] || (F[4] = [
                    ie("Tomorrow", -1)
                  ])]),
                  _: 1
                })
              ])) : O("", !0),
              e.variant === "date-range" ? (t(), o("div", Ta, [
                W(we, {
                  variant: "outline",
                  onClick: E
                }, {
                  default: ae(() => [...F[5] || (F[5] = [
                    ie("Apply", -1)
                  ])]),
                  _: 1
                })
              ])) : O("", !0),
              W(we, {
                variant: "outline",
                onClick: pe
              }, {
                default: ae(() => [...F[6] || (F[6] = [
                  ie("Clear", -1)
                ])]),
                _: 1
              })
            ]),
            e.variant === "date-time" ? (t(), o("div", Fa, [
              a("div", Ba, [
                W(xe, {
                  type: "text",
                  modelValue: m.value,
                  "onUpdate:modelValue": F[0] || (F[0] = (L) => m.value = L),
                  placeholder: "HH:mm or 4:30pm",
                  onFocus: F[1] || (F[1] = (L) => s.value = !0),
                  onKeydown: De(ue(be, ["prevent"]), ["enter"]),
                  onBlur: Me,
                  formWrapperWidth: "100%"
                }, {
                  right: ae(() => [
                    W(Z(ke))
                  ]),
                  _: 1
                }, 8, ["modelValue", "onKeydown"]),
                s.value ? (t(), o("div", Ia, [
                  (t(!0), o(N, null, ne(Ce.value, (L) => (t(), o("div", {
                    key: L,
                    class: "fu-time-option",
                    onMousedown: ue((le) => ze(L), ["prevent"])
                  }, S(L), 41, Ea))), 128))
                ])) : O("", !0)
              ])
            ])) : O("", !0)
          ], 4)
        ])) : O("", !0)
      ]))
    ], 6));
  }
}, Aa = /* @__PURE__ */ J(La, [["__scopeId", "data-v-7bb6d1f9"]]), ja = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Aa
}, Symbol.toStringTag, { value: "Module" })), Pa = { class: "calendar-header" }, Wa = { class: "flex flex--gap-sm" }, Ra = {
  key: 0,
  class: "calendar-months"
}, Ha = ["onClick"], qa = {
  key: 1,
  class: "calendar-years"
}, Na = ["onClick"], Ua = { class: "flex flex--space flex--gap-md px-2 pb-2" }, Re = 12, Xa = {
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
      validator: (e) => ["sm", "md", "lg"].includes(e)
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
  setup(e, { emit: f }) {
    const n = e, s = f, l = g(!1), u = g(null), i = g(null), d = g("months"), _ = g(se().year()), c = [
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
    ], y = H(
      () => _.value - _.value % Re
    ), v = H(() => y.value + Re - 1), m = H(() => {
      const k = y.value;
      return Array.from({ length: Re }, ($, w) => k + w);
    }), b = H(() => {
      if (!n.modelValue) return null;
      const k = se(n.modelValue, "YYYY-MM", !0);
      return k.isValid() ? k : null;
    });
    function C(k) {
      return b.value ? b.value.month() === k && b.value.year() === _.value : !1;
    }
    function r(k) {
      const $ = se(
        `${_.value}-${(k + 1).toString().padStart(2, "0")}`,
        "YYYY-MM"
      );
      return !!(n.min && $.isBefore(se(n.min, "YYYY-MM"), "month") || n.max && $.isAfter(se(n.max, "YYYY-MM"), "month"));
    }
    function h(k) {
      _.value = k, d.value = "months";
    }
    function z(k) {
      if (r(k)) return;
      const $ = se(
        `${_.value}-${(k + 1).toString().padStart(2, "0")}`,
        "YYYY-MM"
      );
      s("update:modelValue", $.format("MMM, YYYY")), l.value = !1;
    }
    function j() {
      const k = se();
      _.value = k.year(), s("update:modelValue", k.format("MMM, YYYY")), l.value = !1;
    }
    function D() {
      n.disabled || (l.value = !l.value, l.value ? (b.value && (_.value = b.value.year()), ve(() => {
        B(), window.addEventListener("resize", B), window.addEventListener("click", x);
      })) : (window.removeEventListener("resize", B), window.removeEventListener("click", x)));
    }
    function V() {
      l.value = !1, window.removeEventListener("resize", B), window.removeEventListener("click", x);
    }
    function x(k) {
      !u.value?.contains(k.target) && !i.value?.contains(k.target) && V();
    }
    const Y = g({
      position: "absolute",
      top: "0px",
      left: "0px",
      zIndex: 9999
    });
    function B() {
      if (!u.value || !i.value) return;
      const k = u.value.getBoundingClientRect(), $ = i.value.getBoundingClientRect(), w = window.innerHeight - k.bottom, M = k.top, I = window.scrollY || window.pageYOffset, T = window.scrollX || window.pageXOffset;
      let A;
      w < $.height && M > $.height ? A = k.top + I - $.height - 6 : A = k.bottom + I + 6, Y.value = {
        position: "absolute",
        top: `${A}px`,
        left: `${k.left + T}px`,
        zIndex: 9999
      };
    }
    function E() {
      d.value = d.value === "months" ? "years" : "months";
    }
    function ee() {
      d.value === "months" ? _.value-- : _.value = Math.max(y.value - Re, 0);
    }
    function q() {
      d.value === "months" ? _.value++ : _.value = v.value + 1;
    }
    function P() {
      s("update:modelValue", null), l.value = !1;
    }
    const G = H(() => n.modelValue || "");
    return _e(() => {
      window.removeEventListener("resize", B), window.removeEventListener("click", x);
    }), (k, $) => (t(), o("div", {
      class: "fu-month-picker",
      ref_key: "pickerRef",
      ref: u,
      style: oe({ width: e.formWrapperWidth })
    }, [
      W(xe, {
        type: "text",
        modelValue: G.value,
        placeholder: "Select month",
        readonly: "",
        onClick: [
          D,
          ue(V, ["self"])
        ],
        formWrapperWidth: e.formWrapperWidth,
        size: e.size,
        error: e.error,
        required: e.required,
        label: e.label,
        disabled: e.disabled
      }, {
        right: ae(() => [
          W(Z(ke))
        ]),
        _: 1
      }, 8, ["modelValue", "formWrapperWidth", "size", "error", "required", "label", "disabled"]),
      (t(), U(ge, { to: "body" }, [
        l.value ? (t(), o("div", {
          key: 0,
          class: "fu-month-picker__calendar-overlay",
          onClick: ue(V, ["self"])
        }, [
          a("div", {
            class: "fu-month-picker__calendar",
            style: oe(Y.value),
            ref_key: "calendarRef",
            ref: i,
            onClick: $[0] || ($[0] = ue(() => {
            }, ["stop"]))
          }, [
            a("div", Pa, [
              W(we, {
                variant: "ghost",
                size: "sm",
                onClick: E,
                icon: Z(ke)
              }, {
                default: ae(() => [
                  d.value === "months" ? (t(), o(N, { key: 0 }, [
                    ie(S(_.value), 1)
                  ], 64)) : (t(), o(N, { key: 1 }, [
                    ie(S(y.value) + " - " + S(v.value), 1)
                  ], 64))
                ]),
                _: 1
              }, 8, ["icon"]),
              a("div", Wa, [
                W($e, {
                  icon: Z(Pe),
                  size: "sm",
                  onClick: ee
                }, null, 8, ["icon"]),
                W($e, {
                  icon: Z(We),
                  size: "sm",
                  onClick: q
                }, null, 8, ["icon"])
              ])
            ]),
            d.value === "months" ? (t(), o("div", Ra, [
              (t(), o(N, null, ne(c, (w, M) => a("div", {
                key: w,
                class: R(["calendar-month", {
                  "calendar-month--selected": C(M),
                  "calendar-month--disabled": r(M)
                }]),
                onClick: (I) => z(M)
              }, S(w), 11, Ha)), 64))
            ])) : (t(), o("div", qa, [
              (t(!0), o(N, null, ne(m.value, (w) => (t(), o("div", {
                key: w,
                class: R(["calendar-year", { "calendar-year--selected": w === _.value }]),
                onClick: (M) => h(w)
              }, S(w), 11, Na))), 128))
            ])),
            $[3] || ($[3] = a("hr", null, null, -1)),
            a("div", Ua, [
              W(we, {
                variant: "outline",
                onClick: j
              }, {
                default: ae(() => [...$[1] || ($[1] = [
                  ie(" This Month ", -1)
                ])]),
                _: 1
              }),
              W(we, {
                variant: "outline",
                onClick: P
              }, {
                default: ae(() => [...$[2] || ($[2] = [
                  ie(" Clear ", -1)
                ])]),
                _: 1
              })
            ])
          ], 4)
        ])) : O("", !0)
      ]))
    ], 4));
  }
}, Ka = /* @__PURE__ */ J(Xa, [["__scopeId", "data-v-7377986b"]]), Ja = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Ka
}, Symbol.toStringTag, { value: "Module" })), Za = { class: "calendar-header" }, Ga = { class: "flex flex--gap-sm" }, Qa = { key: 0 }, el = { class: "calendar-weekdays" }, tl = { class: "calendar-days" }, nl = ["onClick"], ol = {
  key: 1,
  class: "calendar-months"
}, al = ["onClick"], ll = {
  key: 2,
  class: "calendar-years"
}, sl = ["onClick"], il = {
  key: 3,
  class: "calendar-time"
}, ul = {
  key: 0,
  class: "fu-time-dropdown customScrollBar"
}, rl = ["onMousedown"], He = 12, dl = {
  __name: "FusionPlainDatePicker",
  props: {
    modelValue: String,
    variant: { type: String, default: "date" },
    // "date" or "date-time"
    formWrapperWidth: String
  },
  emits: ["update:modelValue"],
  setup(e, { emit: f }) {
    const n = e, s = f, l = g(se().startOf("month")), u = g(null), i = g("00:00"), d = g("days"), _ = g(!1), c = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"], y = [
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
    ], v = H(
      () => Math.floor(l.value.year() / He) * He
    ), m = H(() => v.value + He - 1), b = H(
      () => Array.from({ length: He }, (P, G) => v.value + G)
    ), C = H(() => {
      const P = l.value.startOf("month").startOf("week"), G = l.value.endOf("month").endOf("week"), k = [];
      let $ = P.clone();
      for (; $.isBefore(G) || $.isSame(G, "day"); )
        k.push({
          date: $.clone(),
          isCurrentMonth: $.month() === l.value.month()
        }), $ = $.add(1, "day");
      return k;
    }), r = H(() => {
      const P = [];
      for (let G = 0; G < 24; G++)
        for (let k = 0; k < 60; k += 15)
          P.push(se().hour(G).minute(k).format("h:mm A"));
      return P;
    }), h = H(() => r.value), z = () => !1, j = (P) => u.value && P.isSame(u.value, "day");
    function D(P) {
      if (u.value = P.clone(), n.variant === "date-time") {
        const G = se(
          `${u.value.format("YYYY-MM-DD")} ${i.value}`,
          "YYYY-MM-DD HH:mm"
        );
        s("update:modelValue", G.format("YYYY-MM-DDTHH:mm"));
      } else
        s("update:modelValue", u.value.format("YYYY-MM-DD"));
    }
    const V = () => l.value = l.value.subtract(1, "month"), x = () => l.value = l.value.add(1, "month"), Y = () => d.value = d.value === "days" ? "months" : d.value === "months" ? "years" : "days", B = (P) => {
      l.value = l.value.month(P), d.value = "days";
    }, E = (P) => {
      l.value = l.value.year(P), d.value = "months";
    };
    function ee() {
      if (!u.value) return;
      const P = se(`${u.value.format("YYYY-MM-DD")} ${i.value}`, [
        "YYYY-MM-DD HH:mm",
        "YYYY-MM-DD h:mm A"
      ]);
      P.isValid() && (i.value = P.format("HH:mm"), s("update:modelValue", P.format("YYYY-MM-DDTHH:mm")), _.value = !1);
    }
    function q(P) {
      if (!u.value) return;
      i.value = se(P, "h:mm A").format("HH:mm");
      const G = se(
        `${u.value.format("YYYY-MM-DD")} ${i.value}`,
        "YYYY-MM-DD HH:mm"
      );
      s("update:modelValue", G.format("YYYY-MM-DDTHH:mm")), _.value = !1;
    }
    return fe(
      () => n.modelValue,
      (P) => {
        if (!P) {
          u.value = null;
          return;
        }
        const G = se(P);
        G.isValid() && (u.value = G, l.value = G.startOf("month"), n.variant === "date-time" && (i.value = G.format("HH:mm")));
      },
      { immediate: !0 }
    ), (P, G) => (t(), o("div", {
      class: "fu-date-picker fu-date-picker--plain",
      style: oe({ width: e.formWrapperWidth })
    }, [
      a("div", {
        class: "fu-date-picker",
        style: oe({ width: e.formWrapperWidth })
      }, [
        a("div", Za, [
          a("button", { onClick: Y }, [
            d.value === "days" ? (t(), o(N, { key: 0 }, [
              ie(S(l.value.format("MMMM YYYY")), 1)
            ], 64)) : d.value === "months" ? (t(), o(N, { key: 1 }, [
              ie(S(l.value.year()), 1)
            ], 64)) : (t(), o(N, { key: 2 }, [
              ie(S(v.value) + " - " + S(m.value), 1)
            ], 64))
          ]),
          a("div", Ga, [
            a("button", { onClick: V }, [
              W(Z(Pe), {
                size: 16,
                color: "var(--fu-color-text)"
              })
            ]),
            a("button", { onClick: x }, [
              W(Z(We), { size: 16 })
            ])
          ])
        ]),
        d.value === "days" ? (t(), o("div", Qa, [
          a("div", el, [
            (t(), o(N, null, ne(c, (k) => a("div", {
              key: k,
              class: "calendar-weekday"
            }, S(k), 1)), 64))
          ]),
          a("div", tl, [
            (t(!0), o(N, null, ne(C.value, (k) => (t(), o("div", {
              key: k.date.toString(),
              class: R(["calendar-day", {
                "calendar-day--other-month": !k.isCurrentMonth,
                "calendar-day--selected": j(k.date),
                "calendar-day--disabled": z(k.date)
              }]),
              onClick: ($) => D(k.date)
            }, S(k.date.date()), 11, nl))), 128))
          ])
        ])) : d.value === "months" ? (t(), o("div", ol, [
          (t(), o(N, null, ne(y, (k, $) => a("div", {
            key: k,
            class: R(["calendar-month", { "calendar-month--selected": $ === l.value.month() }]),
            onClick: (w) => B($)
          }, S(k), 11, al)), 64))
        ])) : (t(), o("div", ll, [
          (t(!0), o(N, null, ne(b.value, (k) => (t(), o("div", {
            key: k,
            class: R(["calendar-year", { "calendar-year--selected": k === l.value.year() }]),
            onClick: ($) => E(k)
          }, S(k), 11, sl))), 128))
        ])),
        e.variant === "date-time" ? (t(), o("div", il, [
          W(xe, {
            type: "text",
            modelValue: i.value,
            "onUpdate:modelValue": G[0] || (G[0] = (k) => i.value = k),
            placeholder: "HH:mm or 4:30pm",
            onFocus: G[1] || (G[1] = (k) => _.value = !0),
            onKeydown: De(ue(ee, ["prevent"]), ["enter"]),
            formWrapperWidth: "100%"
          }, {
            right: ae(() => [
              W(Z(ke))
            ]),
            _: 1
          }, 8, ["modelValue", "onKeydown"]),
          _.value ? (t(), o("div", ul, [
            (t(!0), o(N, null, ne(h.value, (k) => (t(), o("div", {
              key: k,
              class: "fu-time-option",
              onMousedown: ue(($) => q(k), ["prevent"])
            }, S(k), 41, rl))), 128))
          ])) : O("", !0)
        ])) : O("", !0)
      ], 4)
    ], 4));
  }
}, cl = /* @__PURE__ */ J(dl, [["__scopeId", "data-v-4161642e"]]), fl = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: cl
}, Symbol.toStringTag, { value: "Module" })), vl = ["onMousedown"], ct = 240, ml = {
  __name: "FusionTimePicker",
  props: {
    modelValue: String,
    interval: { type: Number, default: 30 },
    error: String,
    label: String,
    required: Boolean,
    disabled: Boolean,
    size: String,
    formWrapperWidth: String
  },
  emits: ["update:modelValue", "change"],
  setup(e, { emit: f }) {
    const n = e, s = f, l = g(n.modelValue || ""), u = g(!1), i = g(!1), d = g(null), _ = g(null), c = g({ left: 0, top: 0, bottom: 0, width: 0 }), y = g(null), v = H(() => {
      const Y = [];
      for (let B = 0; B < 24; B++)
        for (let E = 0; E < 60; E += n.interval) {
          const ee = /* @__PURE__ */ new Date();
          ee.setHours(B, E, 0), Y.push({
            label: ee.toLocaleTimeString([], {
              hour: "numeric",
              minute: "2-digit",
              hour12: !0
            }),
            value: `${String(B).padStart(2, "0")}:${String(E).padStart(2, "0")}`
          });
        }
      return Y;
    }), m = H(
      () => l.value ? v.value.filter(
        (Y) => Y.label.toLowerCase().includes(l.value.toLowerCase())
      ) : v.value
    ), b = H(
      () => m.value.length ? m.value : v.value
    ), C = (Y) => {
      let B = Y.target.value.toLowerCase();
      B = B.replace(/[^0-9:apm]/g, "");
      const E = Y.target;
      if (/^\d{2}$/.test(B)) {
        B += ":", l.value = B, ve(() => E.setSelectionRange(3, 3));
        return;
      }
      l.value = B;
    }, r = (Y) => {
      if (!Y) return null;
      const B = Y.trim().toLowerCase().match(/^(\d{1,2})(?::(\d{2}))?\s?(am|pm)?$/);
      if (!B) return null;
      let E = parseInt(B[1], 10);
      const ee = parseInt(B[2] || "00", 10), q = B[3];
      if (q === "pm" && E < 12 && (E += 12), q === "am" && E === 12 && (E = 0), E > 23 || ee > 59) return null;
      const P = E % 12 || 12, G = E < 12 ? "am" : "pm";
      return `${String(P).padStart(2, "0")}:${String(ee).padStart(
        2,
        "0"
      )}${G}`;
    }, h = () => {
      if (!d.value) return;
      const Y = d.value.getBoundingClientRect();
      c.value = {
        left: Y.left,
        top: Y.top,
        bottom: Y.bottom,
        width: Y.width
      };
      const B = window.innerHeight - Y.bottom, E = Y.top;
      i.value = B < ct && E > B;
    }, z = (Y, B) => {
      B === 0 && Y && (y.value = Y);
    }, j = (Y) => {
      l.value = Y, s("update:modelValue", Y), s("change", Y), u.value = !1;
    }, D = () => {
      const Y = r(l.value);
      Y && (l.value = Y, s("update:modelValue", Y), s("change", Y), u.value = !1);
    }, V = () => setTimeout(() => {
      D(), u.value = !1;
    }, 120);
    fe(
      () => n.modelValue,
      (Y) => l.value = Y || ""
    ), fe(l, async () => {
      await ve(), y.value && y.value.scrollIntoView({ behavior: "smooth", block: "nearest" });
    });
    const x = () => h();
    return he(() => {
      window.addEventListener("resize", x), ve(h);
    }), _e(() => window.removeEventListener("resize", x)), (Y, B) => (t(), o("div", {
      class: "fu-time-picker",
      ref_key: "inputRef",
      ref: d
    }, [
      W(xe, {
        type: "text",
        modelValue: l.value,
        "onUpdate:modelValue": B[0] || (B[0] = (E) => l.value = E),
        placeholder: "HH:mm or 4:30pm",
        onFocus: B[1] || (B[1] = (E) => {
          u.value = !0, h();
        }),
        onInput: C,
        onKeydown: De(ue(D, ["prevent"]), ["enter"]),
        onBlur: V,
        label: e.label,
        error: e.error,
        required: e.required,
        disabled: e.disabled,
        size: e.size,
        formWrapperWidth: e.formWrapperWidth
      }, {
        right: ae(() => [
          W(Z(ke))
        ]),
        _: 1
      }, 8, ["modelValue", "onKeydown", "label", "error", "required", "disabled", "size", "formWrapperWidth"]),
      (t(), U(ge, { to: "body" }, [
        u.value ? (t(), o("div", {
          key: 0,
          ref_key: "dropdownRef",
          ref: _,
          class: R(["fu-time-dropdown customScrollBar", { "open-up": i.value }]),
          style: oe({
            left: c.value.left + "px",
            width: c.value.width + "px",
            top: i.value ? c.value.top - ct + "px" : c.value.bottom + "px"
          })
        }, [
          (t(!0), o(N, null, ne(b.value, (E, ee) => (t(), o("div", {
            key: E.value,
            class: "fu-time-option",
            ref_for: !0,
            ref: (q) => z(q, ee),
            onMousedown: ue((q) => j(E.value), ["prevent"])
          }, S(E.label), 41, vl))), 128))
        ], 6)) : O("", !0)
      ]))
    ], 512));
  }
}, pl = /* @__PURE__ */ J(ml, [["__scopeId", "data-v-de0d9c0d"]]), hl = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: pl
}, Symbol.toStringTag, { value: "Module" })), _l = {
  key: 0,
  class: "fu-drawer"
}, yl = { class: "fu-drawer__header-content" }, gl = {
  key: 0,
  class: "fu-drawer__header-actions"
}, bl = { class: "fu-drawer__body" }, wl = { class: "fu-drawer__footer" }, kl = /* @__PURE__ */ te({
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
  setup(e, { emit: f }) {
    const n = e, s = f;
    function l(u) {
      u.key === "Escape" && n.open && s("close");
    }
    return he(() => window.addEventListener("keydown", l)), _e(() => window.removeEventListener("keydown", l)), (u, i) => (t(), U(Ye, { name: "drawer-fade" }, {
      default: ae(() => [
        e.open ? (t(), o("div", _l, [
          a("div", {
            class: "fu-drawer__backdrop",
            onClick: i[0] || (i[0] = (d) => u.$emit("close"))
          }),
          a("div", {
            class: R(["fu-drawer__panel", [
              `fu-drawer__panel--${e.position}`,
              `fu-drawer__panel--${e.size}`,
              { "fu-drawer__panel--with-controls": e.showControls }
            ]])
          }, [
            u.$slots.header || e.showControls ? (t(), o("div", {
              key: 0,
              class: R(["fu-drawer__header", { "border-bottom-0": e.hideHeaderBorder }])
            }, [
              a("div", yl, [
                K(u.$slots, "header", {}, void 0, !0)
              ]),
              e.showControls ? (t(), o("div", gl, [
                W($e, {
                  size: "sm",
                  variant: "subtle",
                  icon: Z(Ue),
                  onClick: i[1] || (i[1] = (d) => u.$emit("close"))
                }, null, 8, ["icon"])
              ])) : O("", !0)
            ], 2)) : O("", !0),
            a("div", bl, [
              K(u.$slots, "default", { class: "slot-body" }, void 0, !0)
            ]),
            a("div", {
              class: R(["fu-drawer__nav", [
                e.position === "right" ? "fu-drawer__nav--left" : "",
                e.position === "left" ? "fu-drawer__nav--right" : "",
                e.position === "bottom" ? "fu-drawer__nav--center" : ""
              ]])
            }, [
              e.canPrev ? (t(), U($e, {
                key: 0,
                size: "sm",
                variant: "subtle",
                icon: Z(Et),
                onClick: i[2] || (i[2] = (d) => u.$emit("prev"))
              }, null, 8, ["icon"])) : O("", !0),
              e.canNext ? (t(), U($e, {
                key: 1,
                size: "sm",
                variant: "subtle",
                icon: Z(ke),
                onClick: i[3] || (i[3] = (d) => u.$emit("next"))
              }, null, 8, ["icon"])) : O("", !0)
            ], 2),
            a("div", wl, [
              K(u.$slots, "footer", {}, void 0, !0)
            ])
          ], 2)
        ])) : O("", !0)
      ]),
      _: 3
    }));
  }
}), $l = /* @__PURE__ */ J(kl, [["__scopeId", "data-v-37927fd4"]]), Ml = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: $l
}, Symbol.toStringTag, { value: "Module" })), Cl = ["onClick"], Sl = /* @__PURE__ */ te({
  __name: "FusionDropdownButton",
  props: {
    buttonText: {},
    buttonIcon: {},
    actions: {},
    align: { default: "right" }
  },
  setup(e) {
    const f = e, n = g(!1), s = g(null), l = g(null), u = g({});
    let i = null;
    function d() {
      if (n.value = !n.value, n.value) {
        if (i && i !== s.value) {
          const m = new CustomEvent("close-other-dropdowns");
          document.dispatchEvent(m);
        }
        i = s.value, ve(_);
      }
    }
    function _() {
      const m = s.value?.querySelector("button");
      if (!m || !l.value) return;
      const b = m.getBoundingClientRect(), C = l.value.offsetWidth, r = {
        left: `${b.left}px`,
        top: `${b.bottom + 4}px`
      };
      f.align === "right" ? r.left = `${b.right - C}px` : f.align === "center" && (r.left = `${b.left + b.width / 2 - C / 2}px`), u.value = {
        position: "absolute",
        ...r,
        zIndex: "1000"
      };
    }
    function c(m) {
      m.onClick?.(), n.value = !1;
    }
    function y(m) {
      s.value && !s.value.contains(m.target) && l.value && !l.value.contains(m.target) && (n.value = !1);
    }
    function v() {
      n.value = !1;
    }
    return he(() => {
      document.addEventListener("click", y), document.addEventListener("close-other-dropdowns", v);
    }), _e(() => {
      document.removeEventListener("click", y), document.removeEventListener("close-other-dropdowns", v);
    }), (m, b) => (t(), o("div", {
      class: "fu-dropdown",
      ref_key: "dropdown",
      ref: s
    }, [
      a("button", {
        class: "fu-dropdown__button",
        onClick: d
      }, [
        ie(S(e.buttonText) + " ", 1),
        e.buttonIcon ? (t(), U(ce(e.buttonIcon), {
          key: 0,
          class: "fu-dropdown__icon"
        })) : O("", !0)
      ]),
      (t(), U(ge, { to: "body" }, [
        n.value ? (t(), o("ul", {
          key: 0,
          class: R(["fu-dropdown__menu", [`fu-dropdown__menu--${e.align}`, { show: n.value }]]),
          style: oe(u.value),
          ref_key: "menuRef",
          ref: l
        }, [
          (t(!0), o(N, null, ne(e.actions, (C) => (t(), o("li", {
            key: C.label
          }, [
            a("a", {
              class: "fu-dropdown__item",
              onClick: (r) => c(C)
            }, [
              C.icon ? (t(), U(ce(C.icon), {
                key: 0,
                class: "fu-dropdown__icon"
              })) : O("", !0),
              ie(" " + S(C.label), 1)
            ], 8, Cl)
          ]))), 128))
        ], 6)) : O("", !0)
      ]))
    ], 512));
  }
}), xl = /* @__PURE__ */ J(Sl, [["__scopeId", "data-v-478aec9e"]]), zl = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: xl
}, Symbol.toStringTag, { value: "Module" })), Ol = { class: "fu-dropdown-inline__wrapper" }, Dl = ["value", "placeholder"], Yl = ["onMousedown"], Vl = /* @__PURE__ */ te({
  __name: "FusionDropdownInline",
  props: {
    modelValue: {},
    options: {},
    placeholder: {},
    isOpen: { type: Boolean }
  },
  emits: ["update:modelValue", "open", "close"],
  setup(e, { emit: f }) {
    const n = e, s = f, l = g(null), u = g(null), i = g(n.modelValue || null), d = g(!1), _ = g({});
    fe(
      () => n.modelValue,
      (b) => i.value = b
    ), fe(
      () => n.isOpen,
      (b) => {
        d.value = !!b, b && m();
      }
    );
    function c() {
      d.value || s("open"), d.value = !0, m();
    }
    function y(b) {
      i.value = b, s("update:modelValue", b), s("close"), d.value = !1, u.value?.blur();
    }
    function v(b) {
      l.value && !l.value.contains(b.target) && (d.value && s("close"), d.value = !1);
    }
    function m() {
      const b = l.value;
      if (!b) return;
      const C = b.getBoundingClientRect();
      _.value = {
        position: "absolute",
        top: `${C.bottom + 4}px`,
        left: `${C.left}px`,
        width: `${C.width}px`,
        zIndex: "9999"
      };
    }
    return he(() => {
      window.addEventListener("click", v), window.addEventListener("resize", m);
    }), _e(() => {
      window.removeEventListener("click", v), window.removeEventListener("resize", m);
    }), (b, C) => (t(), o("div", {
      class: "fu-dropdown-inline",
      ref_key: "inlineRef",
      ref: l
    }, [
      a("div", Ol, [
        i.value ? (t(), o("span", {
          key: 0,
          class: "fu-dropdown-inline__dot",
          style: oe({ backgroundColor: i.value.color })
        }, null, 4)) : O("", !0),
        a("input", {
          ref_key: "inputRef",
          ref: u,
          type: "text",
          class: "fu-dropdown-inline__input",
          value: i.value?.label || "",
          placeholder: e.placeholder,
          readonly: "",
          onFocus: c
        }, null, 40, Dl)
      ]),
      (t(), U(ge, { to: "body" }, [
        d.value ? (t(), o("ul", {
          key: 0,
          class: "fu-dropdown-inline__menu",
          style: oe(_.value)
        }, [
          (t(!0), o(N, null, ne(e.options, (r) => (t(), o("li", {
            key: r.label,
            class: "fu-dropdown-inline__item",
            onMousedown: ue((h) => y(r), ["prevent"])
          }, [
            a("span", {
              class: "fu-dropdown-inline__dot",
              style: oe({ backgroundColor: r.color })
            }, null, 4),
            ie(" " + S(r.label), 1)
          ], 40, Yl))), 128))
        ], 4)) : O("", !0)
      ]))
    ], 512));
  }
}), Tl = /* @__PURE__ */ J(Vl, [["__scopeId", "data-v-2181a04e"]]), Fl = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Tl
}, Symbol.toStringTag, { value: "Module" })), Bl = {
  key: 0,
  class: "content"
}, Il = ["onClick"], El = /* @__PURE__ */ te({
  __name: "DropdownMenu",
  props: {
    actions: {},
    align: { default: "right" },
    content: { type: Boolean, default: !1 },
    isOpen: { type: Boolean, default: void 0 },
    closeOnSelect: { type: Boolean, default: !1 }
  },
  emits: ["open", "close", "update:isOpen"],
  setup(e, { emit: f }) {
    const n = f, s = e, l = g(!1), u = g(null), i = g(null), d = g({
      top: "0px",
      left: "0px"
    });
    fe(
      () => s.isOpen,
      (r) => {
        typeof r == "boolean" && (l.value = r);
      }
    );
    function _(r) {
      r?.stopPropagation();
      const h = !l.value;
      h && document.dispatchEvent(new CustomEvent("close-all-dropdowns")), l.value = h, n(h ? "open" : "close"), n("update:isOpen", h), h && ve(c);
    }
    function c() {
      if (!u.value || !i.value) return;
      const r = u.value.getBoundingClientRect(), h = r.bottom + window.scrollY + 6, z = i.value.offsetWidth;
      let j = r.left + window.scrollX;
      s.align === "center" ? j += r.width / 2 - z / 2 : s.align === "right" && (j = r.right - z + window.scrollX), d.value = {
        position: "absolute",
        top: `${h}px`,
        left: `${j}px`,
        zIndex: "2000"
      };
    }
    function y(r, h) {
      r.onClick?.(), b();
    }
    function v(r) {
      l.value && u.value && !u.value.contains(r.target) && i.value && !i.value.contains(r.target) && b();
    }
    function m() {
      l.value && b();
    }
    function b() {
      l.value = !1, n("close"), n("update:isOpen", !1);
    }
    function C() {
      b();
    }
    return he(() => {
      document.addEventListener("click", v), window.addEventListener("resize", m), document.addEventListener("close-all-dropdowns", C);
    }), _e(() => {
      document.removeEventListener("click", v), window.removeEventListener("resize", m), document.removeEventListener("close-all-dropdowns", C);
    }), (r, h) => (t(), o("div", {
      class: "fu-dropdown",
      ref_key: "dropdown",
      ref: u
    }, [
      a("div", {
        class: "fu-dropdown__trigger",
        onClick: _
      }, [
        K(r.$slots, "trigger", {}, void 0, !0)
      ]),
      (t(), U(ge, { to: "body" }, [
        W(Ye, { name: "fade" }, {
          default: ae(() => [
            l.value ? (t(), o("div", {
              key: 0,
              class: R(["fu-dropdown__menu", [`fu-dropdown__menu--${e.align}`]]),
              style: oe(d.value),
              ref_key: "menuRef",
              ref: i
            }, [
              e.content ? (t(), o("div", Bl, [
                K(r.$slots, "content", {}, void 0, !0)
              ])) : O("", !0),
              (t(!0), o(N, null, ne(e.actions, (z) => (t(), o("div", {
                class: "flex w-100",
                key: z.label
              }, [
                a("a", {
                  class: "fu-dropdown__item",
                  onClick: (j) => y(z)
                }, [
                  z.icon ? (t(), U(ce(z.icon), {
                    key: 0,
                    class: "fu-dropdown__icon"
                  })) : O("", !0),
                  ie(" " + S(z.label), 1)
                ], 8, Il)
              ]))), 128))
            ], 6)) : O("", !0)
          ]),
          _: 3
        })
      ]))
    ], 512));
  }
}), at = /* @__PURE__ */ J(El, [["__scopeId", "data-v-d9e510d8"]]), Ll = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: at
}, Symbol.toStringTag, { value: "Module" })), Al = {
  key: 0,
  class: "efw-read"
}, jl = {
  key: 1,
  class: "efw-edit"
}, Pl = { class: "efw-footer" }, Wl = { class: "efw-read" }, Rl = { class: "efw-footer" }, Hl = /* @__PURE__ */ te({
  __name: "EditableFieldWrapper",
  props: {
    modelValue: { default: () => ({}) },
    mode: { default: "inline" },
    teleportTo: { default: "body" },
    align: { default: "right" }
  },
  setup(e, { expose: f }) {
    const n = e, s = g(!1), l = g({}), u = ht({ top: 0, left: 0 }), i = g(null), d = g(null);
    function _() {
      document.dispatchEvent(new CustomEvent("close-all-editors")), l.value = structuredClone(n.modelValue), s.value = !0;
    }
    function c(C) {
      if (s.value) {
        s.value = !1;
        return;
      }
      document.dispatchEvent(new CustomEvent("close-all-editors")), l.value = structuredClone(n.modelValue), ve(() => {
        s.value = !0, ve(() => {
          const r = C?.currentTarget;
          if (!r || !d.value) return;
          const h = r.getBoundingClientRect(), z = d.value.offsetWidth;
          u.top = h.bottom + 6 + window.scrollY, n.align === "left" ? u.left = h.left + window.scrollX : n.align === "center" ? u.left = h.left + h.width / 2 - z / 2 + window.scrollX : u.left = h.right - z + window.scrollX;
        });
      });
    }
    function y() {
      s.value = !1;
    }
    function v() {
      s.value && y();
    }
    function m(C) {
      if (!s.value) return;
      const r = C.target;
      n.mode === "inline" && i.value && !i.value.contains(r) && y(), n.mode === "teleport" && d.value && !d.value.contains(r) && y();
    }
    function b() {
      y();
    }
    return he(() => {
      document.addEventListener("close-all-editors", v), document.addEventListener("ew-close", y), document.addEventListener("click", m, !0), window.addEventListener("resize", b);
    }), _e(() => {
      document.removeEventListener("close-all-editors", v), document.removeEventListener("ew-close", y), document.removeEventListener("click", m, !0), window.removeEventListener("resize", b);
    }), f({ startEditing: _, openTeleport: c, closeEditor: y }), (C, r) => e.mode === "inline" ? (t(), o("div", {
      key: 0,
      class: "efw-wrapper",
      ref_key: "inlineRef",
      ref: i
    }, [
      s.value ? (t(), o("div", jl, [
        K(C.$slots, "edit", { model: l.value }, void 0, !0),
        a("div", Pl, [
          K(C.$slots, "actions", {}, void 0, !0)
        ])
      ])) : (t(), o("div", Al, [
        K(C.$slots, "read", {}, void 0, !0)
      ]))
    ], 512)) : (t(), o(N, { key: 1 }, [
      a("div", Wl, [
        K(C.$slots, "read", {}, void 0, !0)
      ]),
      (t(), U(ge, { to: e.teleportTo }, [
        s.value ? (t(), o("div", {
          key: 0,
          class: "efw-teleport-card",
          ref_key: "teleportRef",
          ref: d,
          style: oe({ top: u.top + "px", left: u.left + "px" })
        }, [
          K(C.$slots, "edit", { model: l.value }, void 0, !0),
          a("div", Rl, [
            K(C.$slots, "actions", {}, void 0, !0)
          ])
        ], 4)) : O("", !0)
      ], 8, ["to"]))
    ], 64));
  }
}), ql = /* @__PURE__ */ J(Hl, [["__scopeId", "data-v-2b8a910d"]]), Nl = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: ql
}, Symbol.toStringTag, { value: "Module" })), Ul = { class: "fu-upload__content" }, Xl = {
  key: 0,
  class: "fu-upload__previews"
}, Kl = ["onClick"], Jl = ["src"], Zl = {
  key: 1,
  class: "fu-upload__file-fallback"
}, Gl = {
  key: 1,
  class: "fu-upload__prompt"
}, Ql = ["multiple", "accept"], es = /* @__PURE__ */ te({
  __name: "FusionUpload",
  props: {
    multiple: { type: Boolean, default: !1 },
    accept: { type: String, default: "*" },
    maxFiles: { type: Number, default: 1 / 0 },
    maxFileSizeMB: { type: Number, default: 1 / 0 }
  },
  emits: ["filesSelected", "uploadError"],
  setup(e, { emit: f }) {
    const n = e, s = f, l = g(!1), u = g(null), i = g([]), d = g([]);
    function _() {
      return typeof crypto < "u" && crypto.randomUUID ? crypto.randomUUID() : `file_${Date.now()}_${Math.random().toString(36).slice(2, 9)}`;
    }
    function c() {
      u.value?.click();
    }
    function y(C) {
      const r = C.target;
      r.files?.length && (m(r.files), r.value = "");
    }
    function v(C) {
      l.value = !1;
      const r = C.dataTransfer?.files;
      r?.length && m(r);
    }
    function m(C) {
      const r = Array.from(C);
      n.multiple || (i.value = [], d.value = []);
      for (const h of r) {
        const z = n.maxFileSizeMB * 1024 * 1024;
        if (h.size > z) {
          const V = `File "${h.name}" exceeds max size of ${n.maxFileSizeMB} MB.`;
          s("uploadError", V);
          continue;
        }
        if (i.value.length >= n.maxFiles) {
          const V = `Maximum of ${n.maxFiles} files allowed.`;
          s("uploadError", V);
          break;
        }
        i.value.push(h);
        const j = _();
        if (h.type.startsWith("image/")) {
          const V = new FileReader();
          V.onload = (x) => {
            d.value.push({
              id: j,
              src: x.target?.result,
              file: h,
              isImage: !0
            });
          }, V.readAsDataURL(h);
        } else
          d.value.push({
            id: j,
            src: "",
            file: h,
            isImage: !1
          });
      }
      s("filesSelected", i.value);
    }
    function b(C) {
      i.value.splice(C, 1), d.value.splice(C, 1), s("filesSelected", i.value);
    }
    return (C, r) => (t(), o("div", {
      class: R(["fu-upload", { dragging: l.value }]),
      onClick: c,
      onDragover: r[0] || (r[0] = ue((h) => l.value = !0, ["prevent"])),
      onDragleave: r[1] || (r[1] = ue((h) => l.value = !1, ["prevent"])),
      onDrop: ue(v, ["prevent"])
    }, [
      a("div", Ul, [
        d.value.length ? (t(), o("div", Xl, [
          (t(!0), o(N, null, ne(d.value, (h, z) => (t(), o("div", {
            key: h.id,
            class: "fu-upload__preview-item"
          }, [
            a("button", {
              class: "fu-upload__remove",
              onClick: ue((j) => b(z), ["stop"])
            }, " ✕ ", 8, Kl),
            h.isImage ? (t(), o("img", {
              key: 0,
              src: h.src,
              class: "fu-upload__preview-img",
              alt: "Preview"
            }, null, 8, Jl)) : (t(), o("div", Zl, [
              W(Z(ut), { size: 20 }),
              a("span", null, S(h.file.name), 1)
            ]))
          ]))), 128))
        ])) : (t(), o("div", Gl, [
          W(Z(ut), {
            class: "fu-upload__icon",
            size: 22
          }),
          K(C.$slots, "description", {}, () => [
            r[2] || (r[2] = a("p", { class: "fu-upload__text" }, " Drag & drop files or click to browse ", -1))
          ], !0)
        ])),
        a("input", {
          ref_key: "fileInput",
          ref: u,
          type: "file",
          class: "fu-upload__input",
          multiple: e.multiple,
          accept: e.accept,
          onChange: y
        }, null, 40, Ql)
      ])
    ], 34));
  }
}), ts = /* @__PURE__ */ J(es, [["__scopeId", "data-v-1b1249ff"]]), ns = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: ts
}, Symbol.toStringTag, { value: "Module" })), os = {
  key: 0,
  class: "fu-filter-dropdown__header"
}, as = { class: "fu-filter-dropdown__title" }, ls = { class: "fu-filter-dropdown__body" }, ss = { class: "fu-filter-dropdown__footer" }, is = /* @__PURE__ */ te({
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
  setup(e, { emit: f }) {
    const n = e, s = f, l = g(!1), u = g(null), i = g(null), d = g({
      top: "0px",
      left: "0px"
    }), _ = H(() => ({
      width: typeof n.width == "number" ? `${n.width}px` : n.width,
      maxWidth: typeof n.maxWidth == "number" ? `${n.maxWidth}px` : n.maxWidth
    }));
    fe(
      () => n.isOpen,
      (h) => {
        typeof h == "boolean" && (l.value = h, h ? (s("open"), ve(b)) : s("close"));
      }
    );
    function c(h) {
      h?.stopPropagation();
      const z = !l.value;
      z && document.dispatchEvent(new CustomEvent("close-all-dropdowns")), l.value = z, s("update:isOpen", z), z ? (s("open"), ve(b)) : s("close");
    }
    function y() {
      s("apply", n.payload), m();
    }
    function v() {
      s("cancel"), m();
    }
    function m() {
      l.value && (l.value = !1, s("update:isOpen", !1), s("close"));
    }
    function b() {
      if (!u.value || !i.value) return;
      const h = u.value.getBoundingClientRect(), z = h.bottom + window.scrollY + 8;
      let j = h.left + window.scrollX;
      n.align === "center" && (j += h.width / 2 - i.value.offsetWidth / 2), n.align === "right" && (j = h.right - i.value.offsetWidth + window.scrollX), d.value = {
        position: "absolute",
        top: `${z}px`,
        left: `${j}px`,
        zIndex: 2e3
      };
    }
    function C(h) {
      l.value && u.value && !u.value.contains(h.target) && i.value && !i.value.contains(h.target) && m();
    }
    function r() {
      m();
    }
    return he(() => {
      document.addEventListener("click", C), document.addEventListener("close-all-dropdowns", r);
    }), _e(() => {
      document.removeEventListener("click", C), document.removeEventListener("close-all-dropdowns", r);
    }), (h, z) => (t(), o("div", {
      class: "fu-filter-dropdown",
      ref_key: "dropdown",
      ref: u
    }, [
      a("div", {
        class: "fu-filter-dropdown__trigger",
        onClick: c
      }, [
        K(h.$slots, "trigger", {}, void 0, !0)
      ]),
      (t(), U(ge, { to: "body" }, [
        W(Ye, { name: "fade" }, {
          default: ae(() => [
            l.value ? (t(), o("div", {
              key: 0,
              ref_key: "menuRef",
              ref: i,
              class: R(["fu-filter-dropdown__menu", [`fu-filter-dropdown__menu--${e.align}`]]),
              style: oe([d.value, _.value])
            }, [
              e.title ? (t(), o("div", os, [
                a("span", as, S(e.title), 1),
                a("button", {
                  type: "button",
                  class: "fu-filter-dropdown__close",
                  onClick: m,
                  "aria-label": "Close"
                }, " × ")
              ])) : O("", !0),
              a("div", ls, [
                K(h.$slots, "content", {}, void 0, !0)
              ]),
              a("div", ss, [
                K(h.$slots, "footer", {}, () => [
                  a("button", {
                    type: "button",
                    class: "fu-btn fu-btn--outline",
                    onClick: v
                  }, " Cancel "),
                  a("button", {
                    type: "button",
                    class: "fu-btn fu-btn--primary",
                    onClick: y
                  }, " Apply ")
                ], !0)
              ])
            ], 6)) : O("", !0)
          ]),
          _: 3
        })
      ]))
    ], 512));
  }
}), us = /* @__PURE__ */ J(is, [["__scopeId", "data-v-338720a3"]]), rs = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: us
}, Symbol.toStringTag, { value: "Module" })), ds = {}, cs = { class: "fu-smart-header" };
function fs(e, f) {
  return t(), o("header", cs, [
    K(e.$slots, "default", {}, void 0, !0)
  ]);
}
const vs = /* @__PURE__ */ J(ds, [["render", fs], ["__scopeId", "data-v-317a0cd5"]]), ms = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: vs
}, Symbol.toStringTag, { value: "Module" })), ps = { class: "fu-trash-icon" }, hs = /* @__PURE__ */ te({
  __name: "FusionTrashIcon",
  setup(e) {
    return (f, n) => (t(), o("div", ps, [
      W(Z(ot), { size: 18 })
    ]));
  }
}), _s = /* @__PURE__ */ J(hs, [["__scopeId", "data-v-7cafc569"]]), ys = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _s
}, Symbol.toStringTag, { value: "Module" })), gs = { class: "fu-activity-item" }, bs = { class: "fu-activity-icon" }, ws = { class: "fu-activity-content" }, ks = { class: "fu-activity-card" }, $s = { class: "fu-activity-header" }, Ms = { class: "fu-activity-title" }, Cs = { class: "fu-activity-status" }, Ss = { class: "fu-activity-text" }, xs = { class: "fu-activity-subtitle" }, zs = { class: "fu-activity-footer" }, Os = { class: "fu-activity-timestamp" }, Ds = { class: "fu-activity-user" }, Ys = /* @__PURE__ */ te({
  __name: "FusionActivityItem",
  props: {
    icon: {},
    title: {},
    fileName: {},
    timestamp: {},
    userName: {},
    userAvatar: { default: null }
  },
  setup(e) {
    return (f, n) => (t(), o("div", gs, [
      a("div", bs, [
        (t(), U(ce(e.icon), {
          class: "fu-activity-icon__svg",
          size: 18
        }))
      ]),
      n[0] || (n[0] = a("div", { class: "fu-activity-line" }, null, -1)),
      a("div", ws, [
        a("div", ks, [
          a("div", $s, [
            a("div", Ms, [
              a("span", Cs, [
                W(Z(bt), {
                  class: "fu-activity-status__icon",
                  size: 16
                })
              ]),
              a("p", Ss, S(e.title), 1)
            ])
          ]),
          a("p", xs, S(e.fileName), 1),
          a("div", zs, [
            a("span", Os, S(e.timestamp), 1),
            a("div", Ds, [
              W(Le, {
                src: e.userAvatar || void 0,
                name: e.userName,
                alt: e.userName,
                size: "xs",
                "show-status": !1
              }, null, 8, ["src", "name", "alt"])
            ])
          ])
        ])
      ])
    ]));
  }
}), Vs = /* @__PURE__ */ J(Ys, [["__scopeId", "data-v-757a1820"]]), Ts = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Vs
}, Symbol.toStringTag, { value: "Module" })), Fs = { class: "fu-attachment-left flex flex--gap-md flex--align-center" }, Bs = { class: "fu-attachment-preview" }, Is = ["src", "alt"], Es = { class: "fu-attachment-info flex flex--column" }, Ls = { class: "fu-attachment-title" }, As = { class: "fu-attachment-meta" }, js = { class: "fu-attachment-right flex flex--column flex--align-center flex--gap-md" }, Ps = { class: "fu-attachment-time" }, Ws = /* @__PURE__ */ te({
  __name: "FusionAttachment",
  props: {
    id: {},
    fileName: {},
    fileUrl: {},
    fileSize: { default: "" },
    timestamp: {},
    userName: {},
    userAvatar: { default: null }
  },
  emits: ["click"],
  setup(e, { emit: f }) {
    const n = e, s = f;
    function l() {
      s("click", n.id);
    }
    const u = H(() => /\.(png|jpe?g|gif|webp|svg)$/i.test(n.fileName)), i = H(() => /\.(mp4|mov|avi|webm)$/i.test(n.fileName));
    return (d, _) => (t(), o("div", {
      class: "fu-attachment-item",
      role: "button",
      tabindex: "0",
      onClick: l,
      onKeypress: De(l, ["enter"])
    }, [
      a("div", Fs, [
        a("div", Bs, [
          u.value ? (t(), o("img", {
            key: 0,
            src: e.fileUrl,
            alt: e.fileName,
            class: "fu-attachment-thumbnail"
          }, null, 8, Is)) : i.value ? (t(), U(Z(Ut), {
            key: 1,
            class: "fu-attachment-icon",
            size: 20
          })) : (t(), U(Z(Rt), {
            key: 2,
            class: "fu-attachment-icon",
            size: 20
          }))
        ]),
        a("div", Es, [
          a("span", Ls, S(e.fileName), 1),
          a("span", As, S(e.fileSize), 1)
        ])
      ]),
      a("div", js, [
        W(Le, {
          src: e.userAvatar || void 0,
          name: e.userName,
          alt: e.userName,
          size: "xs",
          "show-status": !1
        }, null, 8, ["src", "name", "alt"]),
        a("span", Ps, S(e.timestamp), 1)
      ])
    ], 32));
  }
}), Rs = /* @__PURE__ */ J(Ws, [["__scopeId", "data-v-3301bbcd"]]), Hs = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Rs
}, Symbol.toStringTag, { value: "Module" })), qs = { class: "fu-note-header" }, Ns = { class: "fu-note-title" }, Us = ["innerHTML"], Xs = { class: "fu-note-actions" }, Ks = { class: "fu-note-footer" }, Js = { class: "fu-note-owner" }, Zs = { class: "fu-note-date" }, Gs = /* @__PURE__ */ te({
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
  setup(e) {
    const f = g(!1);
    return (n, s) => (t(), o("div", {
      class: "fu-note-card",
      onMouseenter: s[0] || (s[0] = (l) => f.value = !0),
      onMouseleave: s[1] || (s[1] = (l) => f.value = !1),
      onClick: s[2] || (s[2] = (l) => n.$emit("open", e.id))
    }, [
      a("div", qs, [
        a("div", Ns, [
          a("h4", null, S(e.title), 1),
          e.content ? (t(), o("div", {
            key: 0,
            class: "fu-note-content",
            innerHTML: e.content
          }, null, 8, Us)) : O("", !0)
        ]),
        a("div", Xs, [
          W(at, {
            actions: e.actions,
            align: "right"
          }, {
            trigger: ae(() => [
              W($e, {
                icon: Z(wt),
                variant: "ghost",
                size: "sm",
                class: "fu-action-trigger"
              }, null, 8, ["icon"])
            ]),
            _: 1
          }, 8, ["actions"])
        ])
      ]),
      a("div", Ks, [
        a("div", Js, [
          W(Le, {
            src: e.ownerAvatar || void 0,
            name: e.ownerName,
            alt: e.ownerName,
            size: "xs",
            "show-status": !1
          }, null, 8, ["src", "name", "alt"])
        ]),
        a("span", Zs, S(e.date), 1)
      ])
    ], 32));
  }
}), Qs = /* @__PURE__ */ J(Gs, [["__scopeId", "data-v-eb334bae"]]), ei = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Qs
}, Symbol.toStringTag, { value: "Module" })), ti = { class: "fu-task-list" }, ni = { class: "fu-task-left flex flex--gap-xl flex--align-center" }, oi = { class: "flex flex--column flex--gap-lg w-100" }, ai = { class: "fu-task-title" }, li = { class: "fu-task-meta" }, si = { class: "fu-task-priority" }, ii = { class: "fu-priority-label" }, ui = { class: "fu-task-owner" }, ri = { class: "fu-task-actions" }, di = /* @__PURE__ */ te({
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
  setup(e, { emit: f }) {
    const n = e, s = f, l = H(() => [
      {
        label: "Edit Task",
        icon: kt,
        onClick: () => s("edit", n.id)
      },
      {
        label: "Delete Task",
        icon: ot,
        onClick: () => s("delete", n.id)
      }
    ]);
    return (u, i) => (t(), o("div", ti, [
      a("div", ni, [
        a("div", oi, [
          a("div", ai, S(e.title), 1),
          a("div", li, [
            a("div", si, [
              a("span", {
                class: "fu-priority-dot",
                style: oe({ backgroundColor: e.priorityColor || "#999" })
              }, null, 4),
              a("span", ii, S(e.priorityLabel), 1)
            ]),
            i[0] || (i[0] = a("span", { class: "fu-dot" }, null, -1)),
            a("div", ui, [
              W(Le, {
                src: e.ownerAvatar || void 0,
                name: e.ownerName,
                alt: e.ownerName,
                size: "xs",
                "show-status": !1
              }, null, 8, ["src", "name", "alt"])
            ])
          ])
        ])
      ]),
      a("div", ri, [
        W(at, {
          actions: l.value,
          content: !1,
          align: "right"
        }, {
          trigger: ae(() => [
            W($e, {
              icon: Z(wt),
              variant: "subtle",
              size: "sm"
            }, null, 8, ["icon"])
          ]),
          _: 1
        }, 8, ["actions"])
      ])
    ]));
  }
}), ci = /* @__PURE__ */ J(di, [["__scopeId", "data-v-36cc95a2"]]), fi = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: ci
}, Symbol.toStringTag, { value: "Module" })), vi = { class: "fu-kanban scrollbar__control customScrollBar" }, mi = ["draggable", "onDragstart", "onDrop"], pi = { class: "fu-kanban__column-header" }, hi = { class: "flex flex--center flex--space" }, _i = { class: "fu-kanban__column-title" }, yi = ["title"], gi = { class: "fu-kanban__header-right" }, bi = ["title", "onClick"], wi = { class: "flex flex--center flex--gap-sm" }, ki = { class: "fu-kanban__count" }, $i = {
  key: 0,
  class: "fu-kanban__edit-body"
}, Mi = ["onDragover", "onDrop"], Ci = ["onDragstart", "onDrop", "onClick"], Si = { class: "fu-kanban__card-header" }, xi = { class: "fu-kanban__card-body" }, zi = {
  key: 0,
  class: "fu-kanban__empty"
}, Oi = ["onClick"], Di = /* @__PURE__ */ te({
  __name: "Kanban",
  props: {
    columns: {},
    editMode: { type: Boolean },
    addItemButtonText: {},
    addColumnButtonText: {},
    noItemtext: {}
  },
  emits: ["update:columns", "update:items", "card-click", "add-item"],
  setup(e, { emit: f }) {
    const n = e, s = f, l = n.addItemButtonText || "+ Add Item", u = n.addColumnButtonText || "+ Add Stage", i = g(JSON.parse(JSON.stringify(n.columns || []))), d = g(null), _ = g(null), c = g(null);
    fe(
      () => n.columns,
      (D) => {
        i.value = JSON.parse(JSON.stringify(D));
      },
      { deep: !0 }
    );
    function y(D, V) {
      d.value = { fromColumnId: D, item: V };
    }
    function v(D) {
      c.value = D;
    }
    function m() {
      c.value = null;
    }
    function b(D, V) {
      const x = d.value;
      if (!x) return;
      const Y = i.value.find((E) => E.id === x.fromColumnId), B = i.value.find((E) => E.id === D);
      !Y || !B || (Y.items = Y.items.filter((E) => E.id !== x.item.id), V === null ? B.items.push(x.item) : B.items.splice(V, 0, x.item), s("update:items", i.value), d.value = null, c.value = null);
    }
    function C(D) {
      n.editMode && (_.value = D);
    }
    function r(D) {
      if (!n.editMode) return;
      const V = _.value;
      if (V === null || V === D) return;
      const x = [...i.value], [Y] = x.splice(V, 1);
      x.splice(D, 0, Y), i.value = x.map((B, E) => ({ ...B, position: E + 1 })), s("update:columns", i.value), _.value = null;
    }
    function h() {
      const D = {
        id: `col-${i.value.length + 1}`,
        title: `Stage ${i.value.length + 1}`,
        color: "#8B5CF6",
        position: i.value.length + 1,
        items: []
      };
      i.value.push(D), s("update:columns", i.value);
    }
    function z(D, V) {
      s("add-item", { column: D, index: V });
    }
    function j(D, V) {
      s("card-click", { id: D.id, item: D, column: V });
    }
    return (D, V) => (t(), o("div", vi, [
      a("div", {
        class: "fu-kanban__columns",
        onDragover: V[1] || (V[1] = ue(() => {
        }, ["prevent"]))
      }, [
        (t(!0), o(N, null, ne(i.value, (x, Y) => (t(), o("div", {
          key: x.id,
          class: R(["fu-kanban__column", { "fu-kanban__column--drag": e.editMode }]),
          draggable: e.editMode,
          onDragstart: (B) => C(Y),
          onDrop: (B) => r(Y),
          onDragover: V[0] || (V[0] = ue(() => {
          }, ["prevent"]))
        }, [
          a("header", pi, [
            a("div", hi, [
              a("div", _i, [
                a("span", {
                  class: "fu-kanban__dot",
                  style: oe({ background: x.color || "#9ca3af" })
                }, null, 4),
                a("span", {
                  class: "fu-kanban__column-name",
                  title: x.title
                }, S(x.title), 9, yi)
              ]),
              a("div", gi, [
                a("button", {
                  class: "fu-kanban__add-item-btn",
                  title: Z(l),
                  onClick: ue((B) => z(x, Y), ["stop"])
                }, " + ", 8, bi)
              ])
            ]),
            a("div", wi, [
              K(D.$slots, "column-header", {}, void 0, !0),
              a("span", ki, S(x.items.length), 1)
            ])
          ]),
          e.editMode ? (t(), o("div", $i, [
            K(D.$slots, "edit-column", {
              column: x,
              index: Y
            }, void 0, !0)
          ])) : (t(), o(N, { key: 1 }, [
            a("div", {
              class: R(["fu-kanban__cards scrollbar__control customScrollBar", { "fu-kanban__cards--hover": c.value === x.id }]),
              onDragover: ue((B) => v(x.id), ["prevent"]),
              onDragleave: m,
              onDrop: (B) => b(x.id, null)
            }, [
              (t(!0), o(N, null, ne(x.items, (B, E) => (t(), o("div", {
                key: B.id,
                class: "fu-kanban__card",
                draggable: "true",
                onDragstart: (ee) => y(x.id, B),
                onDrop: (ee) => b(x.id, E),
                onClick: (ee) => j(B, x)
              }, [
                a("header", Si, [
                  a("strong", null, S(B.title), 1)
                ]),
                a("div", xi, [
                  K(D.$slots, "card-body", {
                    item: B,
                    column: x
                  }, void 0, !0)
                ])
              ], 40, Ci))), 128)),
              x.items.length ? O("", !0) : (t(), o("div", zi, S(e.noItemtext), 1))
            ], 42, Mi),
            a("button", {
              class: "fu-kanban__add-card",
              onClick: (B) => z(x, Y)
            }, S(Z(l)), 9, Oi)
          ], 64))
        ], 42, mi))), 128)),
        e.editMode ? (t(), o("div", {
          key: 0,
          class: "fu-kanban__add-column",
          onClick: h
        }, S(Z(u)), 1)) : O("", !0)
      ], 32)
    ]));
  }
}), Yi = /* @__PURE__ */ J(Di, [["__scopeId", "data-v-11abb07b"]]), Vi = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Yi
}, Symbol.toStringTag, { value: "Module" })), Ti = { class: "fu-modal__header" }, Fi = { class: "fu-modal__title" }, Bi = { class: "fu-modal__body" }, Ii = {
  key: 0,
  class: "fu-modal__footer"
}, Ei = /* @__PURE__ */ te({
  __name: "FusionModal",
  props: {
    isVisible: { type: Boolean },
    title: {},
    size: { default: "md" },
    showFooter: { type: Boolean, default: !0 }
  },
  emits: ["close", "cancel", "confirm"],
  setup(e, { emit: f }) {
    const n = f, s = () => n("close");
    function l(u) {
      (u.key === "Escape" || u.key === "Esc") && s();
    }
    return he(() => {
      window.addEventListener("keydown", l);
    }), _e(() => {
      window.removeEventListener("keydown", l);
    }), (u, i) => (t(), U(ge, { to: "body" }, [
      e.isVisible ? (t(), o("div", {
        key: 0,
        class: "fu-modal__backdrop",
        onClick: ue(s, ["self"])
      }, [
        a("div", {
          class: R(["fu-modal", `fu-modal--${e.size}`])
        }, [
          a("div", Ti, [
            a("h3", Fi, S(e.title), 1),
            W($e, {
              text: " ",
              icon: Z(Ue),
              class: "fu-modal__close",
              onClick: s,
              variant: "ghost",
              size: "sm"
            }, null, 8, ["icon"])
          ]),
          a("div", Bi, [
            K(u.$slots, "default", {}, () => [
              i[0] || (i[0] = ie(" Default modal content. ", -1))
            ], !0)
          ]),
          e.showFooter ? (t(), o("div", Ii, [
            K(u.$slots, "footer", {}, void 0, !0)
          ])) : O("", !0)
        ], 2)
      ])) : O("", !0)
    ]));
  }
}), St = /* @__PURE__ */ J(Ei, [["__scopeId", "data-v-4d75747a"]]), Li = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: St
}, Symbol.toStringTag, { value: "Module" })), Ai = { class: "app-container" }, ji = { class: "app-shell" }, Pi = { class: "fu-topbar" }, Wi = { class: "fu-topbar-l" }, Ri = { class: "fu-topbar-c" }, Hi = { class: "fu-topbar-r" }, qi = { class: "fu-main-area" }, Ni = { class: "fu-sidebar" }, Ui = { class: "fu-menu" }, Xi = { class: "ai-panel-body" }, Ki = { class: "ai-header-actions" }, Ji = { class: "ai-content" }, Ze = 991, ft = "fu-app-ai-panel", vt = 340, Zi = 500, Gi = {
  __name: "AppShell",
  props: {
    listenToToggleEvent: { type: Boolean, default: !0 }
  },
  setup(e) {
    const f = g(!1), n = g(!0), s = g(!1), l = g(340), u = g(!1), i = g(typeof window < "u" ? window.innerWidth : 1200);
    let d = !1;
    const _ = g(!1), c = e;
    function y() {
      i.value <= Ze ? (f.value = !f.value, n.value = !0) : n.value = !n.value;
    }
    function v() {
      if (i.value <= Ze) {
        _.value = !0, s.value = !1, j();
        return;
      }
      s.value = !s.value, j(), s.value && window.dispatchEvent(new Event("open-ai"));
    }
    function m() {
      l.value = u.value ? vt : Zi, u.value = !u.value, j();
    }
    function b(V) {
      d = !0, document.body.style.cursor = "col-resize", window.addEventListener("mousemove", C), window.addEventListener("mouseup", r);
    }
    function C(V) {
      if (!d) return;
      const x = window.innerWidth - V.clientX;
      x > 280 && x < 600 && (l.value = x, j());
    }
    function r() {
      d = !1, document.body.style.cursor = "default", window.removeEventListener("mousemove", C), window.removeEventListener("mouseup", r);
    }
    function h() {
      i.value = window.innerWidth;
    }
    function z() {
      i.value <= Ze && f.value && (f.value = !1);
    }
    function j() {
      const V = {
        open: s.value,
        width: l.value,
        maximized: u.value
      };
      localStorage.setItem(ft, JSON.stringify(V));
    }
    function D() {
      const V = localStorage.getItem(ft);
      if (V)
        try {
          const { open: x, width: Y, maximized: B } = JSON.parse(V);
          s.value = !!x, l.value = Y || vt, u.value = !!B;
        } catch (x) {
          console.warn("Failed to restore AI panel state:", x);
        }
    }
    return he(() => {
      if (D(), window.addEventListener("resize", h), c.listenToToggleEvent && window.addEventListener("toggle-ai", v), s.value) {
        const V = () => {
          window.removeEventListener("tabs-ready", V), ve(() => {
            s.value = !0, window.dispatchEvent(new Event("open-ai"));
          });
        };
        window.addEventListener("tabs-ready", V);
      }
    }), (V, x) => {
      const Y = yt("FusionActionButton");
      return t(), o("div", Ai, [
        a("div", ji, [
          a("div", Pi, [
            a("div", Wi, [
              a("button", {
                class: "fu-menu-toggle",
                onClick: y
              }, [...x[2] || (x[2] = [
                a("svg", {
                  class: "fu-icon fu-icon--grid",
                  width: "16",
                  height: "17",
                  viewBox: "0 0 16 17",
                  fill: "none",
                  xmlns: "http://www.w3.org/2000/svg"
                }, [
                  a("path", {
                    d: "M1 13H3C3.27614 13 3.5 13.2238 3.5 13.5V15.5C3.5 15.7762 3.27614 16 3 16H1C0.723856 16 0.5 15.7762 0.5 15.5V13.5C0.5 13.2238 0.723856 13 1 13ZM7 13H9C9.27616 13 9.5 13.2238 9.5 13.5V15.5C9.5 15.7762 9.27616 16 9 16H7C6.72384 16 6.5 15.7762 6.5 15.5V13.5C6.5 13.2238 6.72384 13 7 13ZM13 13H15C15.2762 13 15.5 13.2238 15.5 13.5V15.5C15.5 15.7762 15.2762 16 15 16H13C12.7238 16 12.5 15.7762 12.5 15.5V13.5C12.5 13.2238 12.7238 13 13 13ZM1 7H3C3.27614 7 3.5 7.22385 3.5 7.5V9.5C3.5 9.77615 3.27614 10 3 10H1C0.723856 10 0.5 9.77615 0.5 9.5V7.5C0.5 7.22385 0.723856 7 1 7ZM7 7H9C9.27616 7 9.5 7.22384 9.5 7.5V9.5C9.5 9.77616 9.27616 10 9 10H7C6.72384 10 6.5 9.77616 6.5 9.5V7.5C6.5 7.22384 6.72384 7 7 7ZM13 7H15C15.2762 7 15.5 7.22384 15.5 7.5V9.5C15.5 9.77616 15.2762 10 15 10H13C12.7238 10 12.5 9.77616 12.5 9.5V7.5C12.5 7.22384 12.7238 7 13 7ZM1 1H3C3.27614 1 3.5 1.22386 3.5 1.5V3.5C3.5 3.77614 3.27614 4 3 4H1C0.723862 4 0.5 3.77614 0.5 3.5V1.5C0.5 1.22386 0.723862 1 1 1ZM7 1H9C9.27615 1 9.5 1.22386 9.5 1.5V3.5C9.5 3.77614 9.27615 4 9 4H7C6.72385 4 6.5 3.77614 6.5 3.5V1.5C6.5 1.22386 6.72385 1 7 1ZM13 1H15C15.2762 1 15.5 1.22386 15.5 1.5V3.5C15.5 3.77614 15.2762 4 15 4H13C12.7238 4 12.5 3.77614 12.5 3.5V1.5C12.5 1.22386 12.7238 1 13 1Z",
                    stroke: "currentColor"
                  })
                ], -1)
              ])]),
              K(V.$slots, "brand-logo", {}, () => [
                x[3] || (x[3] = a("img", {
                  src: "https://storage.googleapis.com/skkido/logo-assets/skkido-logo-white.svg",
                  class: "fu-brand-logo",
                  alt: "Logo"
                }, null, -1))
              ])
            ]),
            a("div", Ri, [
              K(V.$slots, "header")
            ]),
            a("div", Hi, [
              K(V.$slots, "header-right")
            ])
          ]),
          a("div", qi, [
            a("div", {
              class: R(["fu-nav-panel", { open: f.value }])
            }, [
              a("section", Ni, [
                K(V.$slots, "modules-sidebar")
              ]),
              Te(a("section", Ui, [
                K(V.$slots, "module-menu")
              ], 512), [
                [tt, n.value]
              ])
            ], 2),
            a("div", {
              class: R(["fu-body-area", { "ai-open": s.value }])
            }, [
              a("div", {
                onClick: z,
                class: "fu-body-slot"
              }, [
                K(V.$slots, "default")
              ]),
              W(Ye, { name: "slide-left" }, {
                default: ae(() => [
                  s.value ? (t(), o("div", {
                    key: 0,
                    class: "ai-panel",
                    style: oe({ width: l.value + "px" })
                  }, [
                    a("div", {
                      class: "ai-resize-handle",
                      onMousedown: b
                    }, null, 32),
                    a("div", Xi, [
                      a("header", null, [
                        x[4] || (x[4] = a("h3", null, "Àdisa", -1)),
                        a("div", Ki, [
                          W(Y, {
                            icon: u.value ? Z(qt) : Z(Ht),
                            variant: "ghost",
                            size: "sm",
                            onClick: m
                          }, null, 8, ["icon"]),
                          W(Y, {
                            icon: Z(Ue),
                            variant: "ghost",
                            size: "sm",
                            onClick: v
                          }, null, 8, ["icon"])
                        ])
                      ]),
                      a("div", Ji, [
                        K(V.$slots, "ai-content")
                      ])
                    ])
                  ], 4)) : O("", !0)
                ]),
                _: 3
              })
            ], 2)
          ])
        ]),
        _.value ? (t(), U(St, {
          key: 0,
          isVisible: _.value,
          title: "Adisa",
          size: "sm",
          onClose: x[0] || (x[0] = (B) => _.value = !1),
          onCancel: x[1] || (x[1] = (B) => _.value = !1)
        }, {
          default: ae(() => [...x[5] || (x[5] = [
            ie(" Downlaod Skkido to use Adisa on Mobile ", -1)
          ])]),
          _: 1
        }, 8, ["isVisible"])) : O("", !0)
      ]);
    };
  }
}, Qi = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Gi
}, Symbol.toStringTag, { value: "Module" })), eu = { key: 0 }, tu = {
  key: 0,
  class: "fu-listview__th fu-listview__th--checkbox"
}, nu = ["role", "tabindex", "onClick", "onKeydown"], ou = { class: "fu-listview__th-label" }, au = {
  key: 1,
  class: "fu-listview__sort-indicator"
}, lu = ["onMousedown"], su = ["onClick"], iu = { class: "fu-listview__cell" }, uu = /* @__PURE__ */ te({
  __name: "FusionListView",
  props: {
    columns: {},
    rows: {},
    rowKey: {},
    showHeader: { type: Boolean },
    options: {}
  },
  emits: ["row-selected", "row-clicked", "sort-change"],
  setup(e, { emit: f }) {
    const n = e, s = f, l = g(
      n.columns.map((Y) => ({
        ...Y,
        width: Y.width || "150px",
        textAlign: Y.textAlign || "justify",
        sortable: !!Y.sortable
      }))
    ), u = g(!1), i = g(null), d = g(null), _ = g(null), c = g("asc"), y = n.showHeader ?? !0, v = () => n.options?.sortable !== !1;
    function m(Y) {
      v() && Y.sortable && (_.value !== Y.key ? (_.value = Y.key, c.value = "asc") : c.value = c.value === "asc" ? "desc" : "asc", s("sort-change", {
        key: _.value,
        direction: c.value
      }));
    }
    function b() {
      const Y = n.rows.filter((B) => B.__selected);
      s("row-selected", Y);
    }
    fe(u, (Y) => {
      n.options?.selectable && (n.rows.forEach((B) => B.__selected = Y), b());
    });
    function C(Y) {
      s("row-clicked", Y), n.options?.onRowClick?.(Y);
    }
    let r = null, h = 0, z = 0;
    function j(Y, B) {
      n.options?.resizeColumn && (r = B, h = Y.clientX, z = parseInt(l.value[B].width, 10), document.addEventListener("mousemove", D), document.addEventListener("mouseup", V));
    }
    function D(Y) {
      if (r === null) return;
      const B = Y.clientX - h;
      l.value[r].width = `${Math.max(60, z + B)}px`;
    }
    function V() {
      r = null, document.removeEventListener("mousemove", D), document.removeEventListener("mouseup", V);
    }
    function x() {
      const Y = d.value;
      Y && (Y.style.overflowY = "hidden", requestAnimationFrame(() => {
        Y.style.overflowY = "auto";
      }));
    }
    return he(() => {
      x(), window.addEventListener("resize", x);
    }), _e(() => {
      window.removeEventListener("resize", x), document.removeEventListener("mousemove", D), document.removeEventListener("mouseup", V);
    }), (Y, B) => (t(), o("div", {
      class: "fu-listview",
      ref_key: "listviewRef",
      ref: i
    }, [
      a("div", {
        class: "fu-listview__table-wrapper customScrollBar",
        ref_key: "tableWrapper",
        ref: d
      }, [
        a("table", null, [
          Z(y) ? (t(), o("thead", eu, [
            a("tr", null, [
              e.options?.selectable ? (t(), o("th", tu, [
                W(Qe, {
                  modelValue: u.value,
                  "onUpdate:modelValue": B[0] || (B[0] = (E) => u.value = E),
                  size: "sm"
                }, null, 8, ["modelValue"])
              ])) : O("", !0),
              (t(!0), o(N, null, ne(l.value, (E, ee) => (t(), o("th", {
                key: E.key,
                style: oe({ width: E.width || "auto" }),
                class: R(["fu-listview__th", `align-${E.textAlign || "justify"}`])
              }, [
                a("div", {
                  class: R(["fu-listview__th-content", `align-${E.textAlign || "justify"}`])
                }, [
                  a("div", {
                    class: R(["fu-listview__th-sortable", {
                      "is-sortable": !!E.sortable,
                      "is-active": _.value === E.key
                    }]),
                    role: E.sortable ? "button" : void 0,
                    tabindex: E.sortable ? 0 : -1,
                    onClick: (q) => m(E),
                    onKeydown: [
                      De(ue((q) => m(E), ["prevent"]), ["enter"]),
                      De(ue((q) => m(E), ["prevent"]), ["space"])
                    ]
                  }, [
                    E.icon ? (t(), U(ce(E.icon), {
                      key: 0,
                      class: "fu-listview__th-icon"
                    })) : O("", !0),
                    a("span", ou, S(E.label), 1),
                    E.sortable && _.value === E.key ? (t(), o("span", au, S(c.value === "asc" ? "▲" : "▼"), 1)) : O("", !0)
                  ], 42, nu),
                  e.options?.resizeColumn ? (t(), o("span", {
                    key: 0,
                    class: "fu-listview__resize-handle",
                    onMousedown: ue((q) => j(q, ee), ["stop"])
                  }, null, 40, lu)) : O("", !0)
                ], 2)
              ], 6))), 128))
            ])
          ])) : O("", !0),
          a("tbody", null, [
            (t(!0), o(N, null, ne(e.rows, (E) => (t(), o("tr", {
              key: E[e.rowKey],
              class: "fu-listview__row",
              onClick: (ee) => C(E)
            }, [
              e.options?.selectable ? (t(), o("td", {
                key: 0,
                class: "fu-listview__td fu-listview__td--checkbox",
                onClick: B[1] || (B[1] = ue(() => {
                }, ["stop"]))
              }, [
                W(Qe, {
                  modelValue: E.__selected,
                  "onUpdate:modelValue": (ee) => E.__selected = ee,
                  onChange: b,
                  size: "sm"
                }, null, 8, ["modelValue", "onUpdate:modelValue"])
              ])) : O("", !0),
              K(Y.$slots, "tableRow", { row: E }, () => [
                (t(!0), o(N, null, ne(l.value, (ee) => (t(), o("td", {
                  key: ee.key,
                  class: R(["fu-listview__td", `align-${ee.textAlign || "justify"}`]),
                  style: oe({ width: ee.width })
                }, [
                  K(Y.$slots, `cell-${ee.key}`, {
                    row: E,
                    col: ee
                  }, () => [
                    a("span", iu, S(E[ee.key]), 1)
                  ], !0)
                ], 6))), 128))
              ], !0)
            ], 8, su))), 128))
          ])
        ])
      ], 512)
    ], 512));
  }
}), ru = /* @__PURE__ */ J(uu, [["__scopeId", "data-v-f4cfb0d4"]]), du = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: ru
}, Symbol.toStringTag, { value: "Module" })), cu = { class: "fu-confirm__body" }, fu = { class: "fu-confirm__icon" }, vu = { class: "fu-confirm__title" }, mu = { class: "fu-confirm__message" }, pu = { class: "fu-confirm__footer" }, hu = /* @__PURE__ */ te({
  __name: "FusionConfirmDialog",
  props: {
    isVisible: { type: Boolean },
    title: {},
    message: {},
    variant: { default: "confirm" },
    confirmText: { default: "Confirm" },
    cancelText: { default: "Cancel" }
  },
  emits: ["cancel", "confirm"],
  setup(e, { emit: f }) {
    const n = e, s = f, l = () => s("cancel"), u = () => s("confirm"), i = H(() => n.variant === "delete" ? ot : n.variant === "warning" ? Nt : bt), d = H(() => n.variant === "delete" || n.variant === "warning" ? "danger" : "solid"), _ = (c) => {
      n.isVisible && (c.key === "Enter" && (c.preventDefault(), u()), c.key === "Escape" && l());
    };
    return he(() => {
      window.addEventListener("keydown", _);
    }), _e(() => {
      window.removeEventListener("keydown", _);
    }), (c, y) => (t(), U(ge, { to: "body" }, [
      e.isVisible ? (t(), o("div", {
        key: 0,
        class: "fu-modal__backdrop",
        onClick: ue(l, ["self"])
      }, [
        a("div", {
          class: R(["fu-confirm", `fu-confirm--${e.variant}`])
        }, [
          a("div", cu, [
            a("div", fu, [
              (t(), U(ce(i.value)))
            ]),
            a("h3", vu, S(e.title), 1),
            a("p", mu, S(e.message), 1)
          ]),
          a("div", pu, [
            W(we, {
              variant: "outline",
              buttonWidth: "100%",
              onClick: l
            }, {
              default: ae(() => [
                ie(S(e.cancelText), 1)
              ]),
              _: 1
            }),
            W(we, {
              variant: d.value,
              buttonWidth: "100%",
              onClick: u
            }, {
              default: ae(() => [
                ie(S(e.confirmText), 1)
              ]),
              _: 1
            }, 8, ["variant"])
          ])
        ], 2)
      ])) : O("", !0)
    ]));
  }
}), _u = /* @__PURE__ */ J(hu, [["__scopeId", "data-v-14d142b4"]]), yu = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _u
}, Symbol.toStringTag, { value: "Module" })), gu = {
  key: 0,
  class: "fu-preview-backdrop"
}, bu = { class: "fu-preview-modal" }, wu = { class: "fu-preview-header" }, ku = { class: "fu-preview-header__left" }, $u = { class: "fu-preview-header__right" }, Mu = { class: "fu-preview-subheader" }, Cu = { class: "fu-preview-body" }, Su = /* @__PURE__ */ te({
  __name: "FusionPreviewModal",
  props: {
    isVisible: { type: Boolean }
  },
  emits: ["close"],
  setup(e, { emit: f }) {
    const n = e, s = f, l = () => s("close");
    fe(
      () => n.isVisible,
      (i) => {
        document.body.style.overflow = i ? "hidden" : "";
      },
      { immediate: !0 }
    );
    function u(i) {
      i.key === "Escape" && l();
    }
    return he(() => {
      window.addEventListener("keydown", u);
    }), _e(() => {
      window.removeEventListener("keydown", u), document.body.style.overflow = "";
    }), (i, d) => (t(), U(ge, { to: "body" }, [
      e.isVisible ? (t(), o("div", gu, [
        a("div", bu, [
          a("header", wu, [
            a("div", ku, [
              K(i.$slots, "header-left", {}, void 0, !0)
            ]),
            a("div", $u, [
              K(i.$slots, "header-right", {}, () => [
                W(we, {
                  variant: "subtle",
                  size: "sm",
                  text: "Close preview",
                  onClick: l
                })
              ], !0)
            ])
          ]),
          a("header", Mu, [
            K(i.$slots, "subheader", {}, void 0, !0)
          ]),
          a("main", Cu, [
            K(i.$slots, "default", {}, void 0, !0)
          ])
        ])
      ])) : O("", !0)
    ]));
  }
}), xu = /* @__PURE__ */ J(Su, [["__scopeId", "data-v-fa20d496"]]), zu = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: xu
}, Symbol.toStringTag, { value: "Module" })), Ou = { class: "fu-module-menu-wrapper scrollbar__control customScrollBar" }, Du = { class: "fu-module-menu-wrapper__list" }, Yu = {
  key: 0,
  class: "fu-module-menu-empty"
}, Vu = /* @__PURE__ */ te({
  __name: "FusionModuleMenu",
  props: {
    items: {},
    activePath: {}
  },
  setup(e) {
    return (f, n) => {
      const s = yt("router-link");
      return t(), o("div", Ou, [
        a("ul", Du, [
          (t(!0), o(N, null, ne(e.items, (l) => (t(), o("li", {
            key: l.path,
            class: R({ active: e.activePath && e.activePath.startsWith(l.path) })
          }, [
            W(s, {
              class: "fu-module-menu-link",
              to: l.path
            }, {
              default: ae(() => [
                l.icon ? (t(), U(ce(l.icon), {
                  key: 0,
                  size: 15,
                  class: "fu-module-menu-icon"
                })) : O("", !0),
                a("span", null, S(l.label), 1)
              ]),
              _: 2
            }, 1032, ["to"])
          ], 2))), 128)),
          !e.items || !e.items.length ? (t(), o("li", Yu, " No menu items ")) : O("", !0)
        ])
      ]);
    };
  }
}), Tu = /* @__PURE__ */ J(Vu, [["__scopeId", "data-v-7631f4b6"]]), Fu = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Tu
}, Symbol.toStringTag, { value: "Module" })), Bu = { class: "fu-bell-icon" }, Iu = {
  key: 2,
  class: "fu-badge"
}, Eu = /* @__PURE__ */ te({
  __name: "FuNotification",
  props: {
    unreadCount: { default: 0 },
    bellIcon: { default: void 0 },
    align: { default: "right" },
    bellClass: { default: "" },
    bellStyle: { default: "light" }
  },
  setup(e) {
    const f = e, n = g(!1), s = g(null), l = g(null), u = g({}), i = () => {
      if (n.value = !n.value, n.value && s.value) {
        const _ = s.value.getBoundingClientRect();
        let c = _.left + window.scrollX;
        f.align === "right" ? c = _.right + window.scrollX - 300 : f.align === "center" && (c = _.left + window.scrollX - 160 + _.width / 2), u.value = {
          top: `${_.bottom + window.scrollY + 8}px`,
          left: `${Math.max(c, 8)}px`,
          position: "absolute",
          zIndex: "2000"
        };
      }
    }, d = (_) => {
      const c = _.target;
      n.value && s.value && !s.value.contains(c) && (!l.value || !l.value.contains(c)) && (n.value = !1);
    };
    return he(() => document.addEventListener("click", d)), _e(() => document.removeEventListener("click", d)), (_, c) => (t(), o("div", {
      class: "fu-notification-dropdown",
      ref_key: "dropdown",
      ref: s
    }, [
      a("div", {
        class: "fu-notification__trigger",
        onClick: i
      }, [
        a("div", Bu, [
          e.bellIcon ? (t(), U(ce(e.bellIcon), {
            key: 0,
            "stroke-width": 1.5,
            class: "fu-bell-svg"
          })) : (t(), U(Z(It), {
            key: 1,
            class: R(["fu-bell-svg", [f.bellStyle, f.bellClass]])
          }, null, 8, ["class"])),
          e.unreadCount > 0 ? (t(), o("span", Iu, S(e.unreadCount), 1)) : O("", !0)
        ])
      ]),
      (t(), U(ge, { to: "body" }, [
        W(Ye, { name: "fade" }, {
          default: ae(() => [
            n.value ? (t(), o("div", {
              key: 0,
              ref_key: "panelEl",
              ref: l,
              class: "fu-notification__panel",
              style: oe(u.value)
            }, [
              K(_.$slots, "default", {}, () => [
                c[0] || (c[0] = a("div", { class: "fu-empty" }, [
                  a("h4", null, "No Content"),
                  a("p", null, "Use the default slot to pass custom dropdown body.")
                ], -1))
              ], !0)
            ], 4)) : O("", !0)
          ]),
          _: 3
        })
      ]))
    ], 512));
  }
}), Lu = /* @__PURE__ */ J(Eu, [["__scopeId", "data-v-b710a214"]]), Au = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Lu
}, Symbol.toStringTag, { value: "Module" })), ju = {
  key: 0,
  class: "fu-alert__icon"
}, Pu = { class: "fu-alert__content" }, Wu = {
  key: 1,
  class: "fu-alert__close"
}, Ru = /* @__PURE__ */ te({
  __name: "FuAlert",
  props: {
    variant: {},
    icon: { type: Boolean },
    border: { type: Boolean },
    dismissible: { type: Boolean }
  },
  setup(e) {
    const f = g(!0);
    return (n, s) => f.value ? (t(), o("div", {
      key: 0,
      class: R([
        "fu-alert",
        `fu-alert--${e.variant}`,
        { "fu-alert--bordered": e.border }
      ])
    }, [
      e.icon ? (t(), o("div", ju, [
        K(n.$slots, "icon", {}, () => [
          W(Z(Lt))
        ], !0)
      ])) : O("", !0),
      a("div", Pu, [
        K(n.$slots, "default", {}, void 0, !0)
      ]),
      e.dismissible ? (t(), o("div", Wu, [
        W($e, {
          icon: Z(Ue),
          size: "sm",
          variant: "ghost",
          onClick: s[0] || (s[0] = (l) => f.value = !1)
        }, null, 8, ["icon"])
      ])) : O("", !0)
    ], 2)) : O("", !0);
  }
}), Hu = /* @__PURE__ */ J(Ru, [["__scopeId", "data-v-d43b4e98"]]), qu = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Hu
}, Symbol.toStringTag, { value: "Module" })), Nu = { class: "fu-toast__content" }, Uu = { class: "fu-toast__message" }, Xu = /* @__PURE__ */ te({
  __name: "FusionToast",
  props: {
    message: {},
    type: { default: "info" },
    duration: { default: 3500 }
  },
  setup(e) {
    const f = e, n = g(!1), s = {
      success: At,
      error: jt,
      info: it,
      dark: it
    };
    he(() => {
      n.value = !0, setTimeout(() => n.value = !1, f.duration);
    });
    function l() {
      n.value = !1;
    }
    return (u, i) => (t(), U(ge, { to: "body" }, [
      W(Ye, { name: "fu-toast-fade" }, {
        default: ae(() => [
          n.value ? (t(), o("div", {
            key: 0,
            class: R(["fu-toast", [`fu-toast--${e.type}`]]),
            role: "alert"
          }, [
            a("div", Nu, [
              (t(), U(ce(s[e.type]), { class: "fu-toast__icon" })),
              a("span", Uu, S(e.message), 1),
              a("button", {
                class: "fu-toast__close",
                onClick: l
              }, "×")
            ])
          ], 2)) : O("", !0)
        ]),
        _: 1
      })
    ]));
  }
}), xt = /* @__PURE__ */ J(Xu, [["__scopeId", "data-v-9f423b9f"]]), Ku = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: xt
}, Symbol.toStringTag, { value: "Module" })), Ju = { class: "fu-pagination" }, Zu = { class: "fu-pagination__left" }, Gu = {
  key: 0,
  class: "fu-pagination__info"
}, Qu = { class: "fu-pagination__controls" }, er = ["disabled"], tr = ["disabled", "onClick"], nr = ["disabled"], or = /* @__PURE__ */ te({
  __name: "FusionPagination",
  props: {
    page: {},
    pageSize: {},
    total: {},
    variant: { default: "default" },
    showInfo: { type: Boolean, default: !0 },
    siblingCount: { default: 1 },
    showPageSize: { type: Boolean, default: !0 },
    pageSizeOptions: { default: () => [10, 25, 50, 100] }
  },
  emits: ["update:page", "update:pageSize"],
  setup(e, { emit: f }) {
    const n = e, s = f, l = H(
      () => n.pageSizeOptions.map((m) => ({
        label: String(m),
        value: m
      }))
    ), u = H({
      get() {
        return l.value.find((m) => m.value === n.pageSize) || l.value[0];
      },
      set(m) {
        s("update:pageSize", m.value), s("update:page", 1);
      }
    }), i = H(() => Math.max(1, Math.ceil(n.total / n.pageSize))), d = H(
      () => n.total === 0 ? 0 : (n.page - 1) * n.pageSize + 1
    ), _ = H(() => Math.min(n.page * n.pageSize, n.total));
    function c(m) {
      m < 1 || m > i.value || s("update:page", m);
    }
    function y(m) {
      m && c(m);
    }
    const v = H(() => {
      const m = [], b = i.value, C = n.page, r = n.siblingCount, h = Math.max(2, C - r), z = Math.min(b - 1, C + r);
      m.push({ key: "p-1", label: "1", page: 1 }), h > 2 && m.push({ key: "e-left", label: "…", ellipsis: !0 });
      for (let j = h; j <= z; j++)
        m.push({ key: `p-${j}`, label: String(j), page: j });
      return z < b - 1 && m.push({ key: "e-right", label: "…", ellipsis: !0 }), b > 1 && m.push({ key: `p-${b}`, label: String(b), page: b }), m;
    });
    return (m, b) => (t(), o("div", Ju, [
      a("div", Zu, [
        e.showInfo ? (t(), o("div", Gu, S(d.value) + "–" + S(_.value) + " of " + S(e.total), 1)) : O("", !0),
        e.showPageSize ? (t(), U($t, {
          key: 1,
          modelValue: u.value,
          "onUpdate:modelValue": b[0] || (b[0] = (C) => u.value = C),
          options: l.value,
          align: "left",
          size: "sm"
        }, null, 8, ["modelValue", "options"])) : O("", !0)
      ]),
      a("div", Qu, [
        a("button", {
          class: "fu-pagination__btn",
          disabled: e.page <= 1,
          onClick: b[1] || (b[1] = (C) => c(e.page - 1)),
          "aria-label": "Previous page"
        }, [
          W(Z(Pe), { class: "fu-pagination__icon" })
        ], 8, er),
        e.variant !== "simple" ? (t(!0), o(N, { key: 0 }, ne(v.value, (C) => (t(), o("button", {
          key: C.key,
          class: R(["fu-pagination__btn", { active: C.page === e.page, ellipsis: C.ellipsis }]),
          disabled: !!C.ellipsis,
          onClick: (r) => y(C.page)
        }, S(C.label), 11, tr))), 128)) : O("", !0),
        a("button", {
          class: "fu-pagination__btn",
          disabled: e.page >= i.value,
          onClick: b[2] || (b[2] = (C) => c(e.page + 1)),
          "aria-label": "Next page"
        }, [
          W(Z(We), { class: "fu-pagination__icon" })
        ], 8, nr)
      ])
    ]));
  }
}), ar = /* @__PURE__ */ J(or, [["__scopeId", "data-v-209f4783"]]), lr = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: ar
}, Symbol.toStringTag, { value: "Module" })), sr = {
  key: 0,
  class: "fu-panel__header px-2"
}, ir = {
  key: 0,
  class: "fu-panel__title"
}, ur = {
  key: 1,
  class: "fu-panel__actions"
}, rr = { class: "fu-panel__body-wrapper" }, dr = { class: "fu-panel__body scrollbar__control customScrollBar px-2" }, cr = /* @__PURE__ */ te({
  __name: "FuPanel",
  props: {
    title: {},
    basis: {}
  },
  setup(e) {
    const f = e, n = H(() => f.basis ? typeof f.basis == "number" ? `${f.basis}px` : f.basis : "300px");
    return (s, l) => (t(), o("div", {
      class: "fu-panel",
      style: oe({ flexBasis: n.value })
    }, [
      e.title || s.$slots.actions ? (t(), o("div", sr, [
        e.title ? (t(), o("h3", ir, S(e.title), 1)) : O("", !0),
        s.$slots.actions ? (t(), o("div", ur, [
          K(s.$slots, "actions")
        ])) : O("", !0)
      ])) : O("", !0),
      a("div", rr, [
        a("div", dr, [
          K(s.$slots, "default")
        ])
      ])
    ], 4));
  }
}), fr = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: cr
}, Symbol.toStringTag, { value: "Module" })), vr = {
  key: 0,
  class: "fu-input-label"
}, mr = {
  key: 0,
  class: "fu-input-required"
}, pr = ["type", "placeholder", "disabled", "required"], hr = {
  key: 1,
  class: "fu-input-error"
}, _r = /* @__PURE__ */ te({
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
  setup(e, { emit: f }) {
    const n = e, s = f, l = g(n.modelValue), u = g(!1), i = () => {
      u.value = !u.value;
    };
    return fe(l, (d) => s("update:modelValue", d)), fe(() => n.modelValue, (d) => l.value = d), (d, _) => (t(), o("div", {
      class: "fu-input-wrapper",
      style: oe({ width: e.formWrapperWidth })
    }, [
      e.label ? (t(), o("label", vr, [
        ie(S(e.label) + " ", 1),
        e.required ? (t(), o("span", mr, "*")) : O("", !0)
      ])) : O("", !0),
      a("div", {
        class: R(["fu-input-container", [
          `fu-input--${e.size}`,
          `fu-input--${e.variant}`,
          { "fu-input--error": e.error }
        ]])
      }, [
        Te(a("input", et(d.$attrs, {
          class: "fu-input",
          type: u.value ? "text" : "password",
          placeholder: e.placeholder,
          disabled: e.disabled,
          required: e.required,
          "onUpdate:modelValue": _[0] || (_[0] = (c) => l.value = c)
        }), null, 16, pr), [
          [_t, l.value]
        ]),
        a("button", {
          type: "button",
          class: "fu-password-toggle",
          onClick: i
        }, [
          (t(), U(ce(u.value ? Z(Pt) : Z(Wt)), { class: "fu-password-icon" }))
        ])
      ], 2),
      e.error ? (t(), o("span", hr, S(e.error), 1)) : O("", !0)
    ], 4));
  }
}), yr = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _r
}, Symbol.toStringTag, { value: "Module" })), gr = { class: "fu-progress-stepper" }, br = { class: "fu-progress-bar" }, wr = {
  key: 0,
  class: "fu-step-labels"
}, kr = ["onClick"], $r = { class: "circle" }, Mr = { class: "label" }, Cr = /* @__PURE__ */ te({
  __name: "FusionProgressStepper",
  props: {
    currentStep: {},
    totalSteps: {},
    showLabels: { type: Boolean },
    steps: {}
  },
  emits: ["step-click"],
  setup(e, { emit: f }) {
    const n = e, s = f, l = H(
      () => `${(n.currentStep + 1) / n.totalSteps * 100}%`
    ), u = (i) => s("step-click", i);
    return (i, d) => (t(), o("div", gr, [
      a("div", br, [
        a("div", {
          class: "fu-progress-fill",
          style: oe({ width: l.value })
        }, null, 4)
      ]),
      e.showLabels && e.steps ? (t(), o("div", wr, [
        (t(!0), o(N, null, ne(e.steps, (_, c) => (t(), o("div", {
          key: c,
          class: R(["fu-step-label", { active: e.currentStep === c }]),
          onClick: (y) => u(c)
        }, [
          a("div", $r, S(c + 1), 1),
          a("div", Mr, S(_.title), 1)
        ], 10, kr))), 128))
      ])) : O("", !0)
    ]));
  }
}), Sr = /* @__PURE__ */ J(Cr, [["__scopeId", "data-v-6ac0e869"]]), xr = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Sr
}, Symbol.toStringTag, { value: "Module" })), zr = { class: "fu-range-control" }, Or = {
  key: 0,
  class: "fu-range-label"
}, Dr = { class: "fu-range-track" }, Yr = ["min", "max", "step", "value"], Vr = { class: "fu-range-value" }, Tr = /* @__PURE__ */ te({
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
  setup(e, { emit: f }) {
    const n = e, s = f;
    function l(i) {
      const d = i.target, _ = Number(d.value);
      s("update:modelValue", _), s("change", _);
    }
    const u = H(
      () => n.unit ? `${n.modelValue}${n.unit}` : String(n.modelValue)
    );
    return (i, d) => (t(), o("div", zr, [
      e.label ? (t(), o("label", Or, S(e.label), 1)) : O("", !0),
      a("div", Dr, [
        a("input", {
          type: "range",
          min: e.min,
          max: e.max,
          step: e.step,
          value: e.modelValue,
          onInput: l
        }, null, 40, Yr),
        a("span", Vr, S(u.value), 1)
      ])
    ]));
  }
}), Fr = /* @__PURE__ */ J(Tr, [["__scopeId", "data-v-9c1e4c91"]]), Br = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Fr
}, Symbol.toStringTag, { value: "Module" })), Ir = {}, Er = { class: "fu-section-header" }, Lr = { class: "fu-section-header__left" }, Ar = { class: "fu-section-header__right" };
function jr(e, f) {
  return t(), o("div", Er, [
    a("div", Lr, [
      K(e.$slots, "left", {}, void 0, !0)
    ]),
    a("div", Ar, [
      K(e.$slots, "right", {}, void 0, !0)
    ])
  ]);
}
const Pr = /* @__PURE__ */ J(Ir, [["render", jr], ["__scopeId", "data-v-b7f6e763"]]), Wr = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Pr
}, Symbol.toStringTag, { value: "Module" })), Rr = { class: "fu-sidebar" }, Hr = { class: "fu-sidebar__list" }, qr = ["onClick"], Nr = { class: "fu-sidebar__icon-wrapper" }, Ur = {
  key: 0,
  class: "fu-sidebar__badge"
}, Xr = { class: "fu-sidebar__label" }, Kr = /* @__PURE__ */ te({
  __name: "FusionSidebar",
  props: {
    modules: {},
    activeModule: {}
  },
  emits: ["select"],
  setup(e) {
    return (f, n) => (t(), o("nav", Rr, [
      a("ul", Hr, [
        (t(!0), o(N, null, ne(e.modules, (s) => (t(), o("li", {
          key: s.name,
          class: R({ active: e.activeModule === s.name })
        }, [
          a("div", {
            class: "fu-sidebar__item",
            onClick: (l) => f.$emit("select", s)
          }, [
            a("div", Nr, [
              (t(), U(ce(s.icon), {
                class: "fu-sidebar__icon",
                size: 20
              })),
              s.count ? (t(), o("span", Ur, S(s.count > 99 ? "99+" : s.count), 1)) : O("", !0)
            ]),
            a("span", Xr, S(s.label), 1)
          ], 8, qr)
        ], 2))), 128))
      ])
    ]));
  }
}), Jr = /* @__PURE__ */ J(Kr, [["__scopeId", "data-v-eba81ecd"]]), Zr = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Jr
}, Symbol.toStringTag, { value: "Module" })), Gr = ["disabled", "aria-expanded"], Qr = ["aria-expanded", "disabled"], ed = ["onClick"], td = ["src"], nd = { class: "fu-split-button__option-label" }, od = /* @__PURE__ */ te({
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
  setup(e, { emit: f }) {
    const n = e, s = f, l = g(!1), u = g(null), i = g(null), d = H(() => n.align ?? "right"), _ = g({}), c = H(() => `fu-split-button--${n.size ?? "sm"}`), y = H(() => `fu-split-button--${n.variant ?? "solid"}`), v = H(() => ({
      ...n.color ? { "--fu-split-bg": n.color } : {},
      ...n.buttonWidth ? { width: n.buttonWidth } : {}
    }));
    function m() {
      n.disabled || (l.value = !l.value, l.value && ve(() => {
        b(), window.addEventListener("click", C), window.addEventListener("resize", b);
      }));
    }
    function b() {
      if (!i.value || !u.value) return;
      const z = i.value.getBoundingClientRect(), j = u.value.offsetWidth, D = {
        top: `${z.bottom + window.scrollY + 4}px`,
        left: `${z.left + window.scrollX}px`
      };
      d.value === "right" ? D.left = `${z.right - j + window.scrollX}px` : d.value === "center" && (D.left = `${z.left + z.width / 2 - j / 2 + window.scrollX}px`), _.value = {
        position: "absolute",
        ...D,
        zIndex: "1000"
      };
    }
    function C(z) {
      i.value?.contains(z.target) || u.value?.contains(z.target) || (l.value = !1, window.removeEventListener("click", C), window.removeEventListener("resize", b));
    }
    function r() {
      n.disabled || s("main-action");
    }
    function h(z) {
      s("select", z), l.value = !1;
    }
    return he(() => {
      _e(() => {
        window.removeEventListener("click", C), window.removeEventListener("resize", b);
      });
    }), (z, j) => (t(), o("div", {
      class: R(["fu-split-button", [c.value, y.value]]),
      style: oe(v.value),
      ref_key: "splitButtonRef",
      ref: i
    }, [
      a("button", {
        class: "fu-split-button__main",
        disabled: e.disabled,
        onClick: r,
        type: "button",
        "aria-haspopup": "true",
        "aria-expanded": l.value
      }, [
        e.icon ? (t(), U(ce(e.icon), {
          key: 0,
          class: "fu-split-button__icon"
        })) : O("", !0),
        a("span", null, [
          K(z.$slots, "default", {}, void 0, !0)
        ])
      ], 8, Gr),
      a("button", {
        class: "fu-split-button__toggle",
        onClick: m,
        "aria-expanded": l.value,
        disabled: e.disabled,
        type: "button",
        "aria-label": "Toggle dropdown"
      }, [
        W(Z(ke))
      ], 8, Qr),
      (t(), U(ge, { to: "body" }, [
        W(Ye, { name: "fade" }, {
          default: ae(() => [
            l.value ? (t(), o("div", {
              key: 0,
              class: R(["fu-split-button__dropdown", [`fu-split-button__dropdown--${d.value}`]]),
              ref_key: "dropdownRef",
              ref: u,
              style: oe(_.value)
            }, [
              (t(!0), o(N, null, ne(e.options, (D) => (t(), o("div", {
                key: D.value,
                class: "fu-split-button__option",
                onClick: (V) => h(D)
              }, [
                D.type === "icon" ? (t(), U(ce(D.icon), {
                  key: 0,
                  class: "fu-split-button__option-icon"
                })) : D.type === "image" ? (t(), o("img", {
                  key: 1,
                  src: D.imageUrl,
                  class: "fu-split-button__option-image",
                  alt: ""
                }, null, 8, td)) : O("", !0),
                a("span", nd, S(D.label), 1)
              ], 8, ed))), 128))
            ], 6)) : O("", !0)
          ]),
          _: 1
        })
      ]))
    ], 6));
  }
}), ad = /* @__PURE__ */ J(od, [["__scopeId", "data-v-c4af5250"]]), ld = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: ad
}, Symbol.toStringTag, { value: "Module" })), sd = ["aria-checked", "disabled"], id = /* @__PURE__ */ te({
  __name: "FusionSwitch",
  props: {
    modelValue: { type: Boolean },
    disabled: { type: Boolean },
    size: {}
  },
  emits: ["update:modelValue"],
  setup(e, { emit: f }) {
    const n = e, s = f;
    function l() {
      n.disabled || s("update:modelValue", !n.modelValue);
    }
    const u = H(() => {
      switch (n.size) {
        case "sm":
          return "fu-switch--sm";
        case "lg":
          return "fu-switch--lg";
        default:
          return "fu-switch--md";
      }
    });
    return (i, d) => (t(), o("button", {
      type: "button",
      class: R(["fu-switch", [{ "fu-switch--checked": e.modelValue, disabled: e.disabled }, u.value]]),
      role: "switch",
      "aria-checked": e.modelValue,
      disabled: e.disabled,
      onClick: l
    }, [...d[0] || (d[0] = [
      a("span", { class: "fu-switch__thumb" }, null, -1)
    ])], 10, sd));
  }
}), ud = /* @__PURE__ */ J(id, [["__scopeId", "data-v-c8285d1a"]]), rd = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: ud
}, Symbol.toStringTag, { value: "Module" })), dd = { class: "fu-tabs" }, cd = { class: "fu-tabs__header-wrapper" }, fd = { class: "fu-tabs-buttons scrollbar__control customScrollBar" }, vd = ["onClick", "disabled"], md = {
  key: 0,
  class: "fu-tab__avatar"
}, pd = ["src"], hd = {
  key: 1,
  class: "fu-tab__avatar-fallback"
}, _d = {
  key: 2,
  class: "fu-tab__title"
}, yd = {
  key: 3,
  class: "fu-tab__count"
}, gd = { class: "fu-tabs__content-wrapper" }, bd = {
  key: 0,
  class: "fu-tabs__footer"
}, wd = {
  __name: "FusionTab",
  props: {
    tabs: Array,
    defaultActiveDesktop: String,
    defaultActiveMobile: String
  },
  emits: ["tab-change"],
  setup(e, { expose: f, emit: n }) {
    const s = e, l = n, u = g(window.innerWidth <= 768), i = g(""), d = g(null), _ = H(
      () => s.tabs.filter((b) => !b.mobileOnly || u.value)
    );
    function c() {
      const b = d.value;
      b && (b.style.overflowY = "hidden", requestAnimationFrame(() => {
        b.style.overflowY = "auto";
      }));
    }
    function y(b) {
      const C = s.tabs.find((r) => r.key === b);
      !C || C.disabled || (i.value = b, l("tab-change", b), ve(() => {
        const r = d.value;
        r && (r.scrollTop = 0, c());
      }));
    }
    function v() {
      const b = s.tabs[0]?.key, C = u.value ? s.defaultActiveMobile || b : s.defaultActiveDesktop || b;
      i.value = C;
    }
    function m() {
      const b = u.value;
      u.value = window.innerWidth <= 768, b !== u.value && ve(v);
    }
    return he(() => {
      m(), v(), c(), window.addEventListener("resize", m);
    }), _e(() => {
      window.removeEventListener("resize", m);
    }), f({ setActive: y }), (b, C) => (t(), o("div", dd, [
      a("div", cd, [
        a("div", fd, [
          (t(!0), o(N, null, ne(_.value, (r) => (t(), o("button", {
            key: r.key,
            onClick: (h) => y(r.key),
            class: R(["fu-tab", { "fu-tab--active": i.value === r.key }]),
            disabled: r.disabled
          }, [
            r.avatarSrc || r.avatarText ? (t(), o("div", md, [
              r.avatarSrc ? (t(), o("img", {
                key: 0,
                src: r.avatarSrc,
                class: "fu-tab__avatar-img",
                alt: "avatar"
              }, null, 8, pd)) : (t(), o("div", hd, S(r.avatarText?.charAt(0)?.toUpperCase()), 1))
            ])) : r.icon ? (t(), U(ce(r.icon), {
              key: 1,
              size: 16,
              class: "fu-tab__icon"
            })) : O("", !0),
            !r.avatarSrc && !r.avatarText && r.title ? (t(), o("span", _d, S(r.title), 1)) : O("", !0),
            typeof r.count == "number" ? (t(), o("span", yd, S(r.count), 1)) : O("", !0)
          ], 10, vd))), 128))
        ])
      ]),
      a("div", gd, [
        a("div", {
          class: "fu-tabs__body scrollbar__control customScrollBar",
          ref_key: "tabBody",
          ref: d
        }, [
          (t(), U(Ot, null, [
            (t(!0), o(N, null, ne(_.value, (r) => Te((t(), o("div", {
              key: r.key,
              class: "fu-tab-panel"
            }, [
              K(b.$slots, r.key, {}, void 0, !0)
            ])), [
              [tt, i.value === r.key]
            ])), 128))
          ], 1024))
        ], 512),
        b.$slots.footer ? (t(), o("div", bd, [
          K(b.$slots, "footer", {}, void 0, !0)
        ])) : O("", !0)
      ])
    ]));
  }
}, kd = /* @__PURE__ */ J(wd, [["__scopeId", "data-v-b6516c96"]]), $d = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: kd
}, Symbol.toStringTag, { value: "Module" })), Md = { class: "fu-textarea-wrapper" }, Cd = {
  key: 0,
  class: "fu-textarea-label"
}, Sd = {
  key: 0,
  class: "fu-textarea-required"
}, xd = ["placeholder", "disabled", "rows", "required"], zd = {
  key: 1,
  class: "fu-textarea-error"
}, Od = /* @__PURE__ */ te({
  __name: "FusionTextArea",
  props: {
    modelValue: { default: "" },
    label: { default: "" },
    variant: { default: "subtle" },
    placeholder: { default: "" },
    size: { default: "sm" },
    disabled: { type: Boolean, default: !1 },
    error: { default: null },
    rows: { default: 3 },
    required: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: f }) {
    const n = e, s = f, l = g(n.modelValue);
    return fe(l, (u) => s("update:modelValue", u)), fe(
      () => n.modelValue,
      (u) => l.value = u
    ), (u, i) => (t(), o("div", Md, [
      e.label ? (t(), o("label", Cd, [
        ie(S(e.label) + " ", 1),
        e.required ? (t(), o("span", Sd, "*")) : O("", !0)
      ])) : O("", !0),
      Te(a("textarea", et(u.$attrs, {
        class: ["fu-textarea fu-form-control", [
          `fu-textarea--${e.size}`,
          { "fu-textarea--error": e.error },
          e.variant ? `fu-textarea--${e.variant}` : null
        ]],
        placeholder: e.placeholder,
        disabled: e.disabled,
        rows: e.rows,
        required: e.required,
        "onUpdate:modelValue": i[0] || (i[0] = (d) => l.value = d)
      }), null, 16, xd), [
        [nt, l.value]
      ]),
      e.error ? (t(), o("span", zd, S(e.error), 1)) : O("", !0)
    ]));
  }
}), Dd = /* @__PURE__ */ J(Od, [["__scopeId", "data-v-3beafd95"]]), Yd = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Dd
}, Symbol.toStringTag, { value: "Module" })), Vd = { class: "fu-theme-selector" }, Td = { class: "fu-theme-grid" }, Fd = ["onClick"], Bd = {
  key: 0,
  class: "fu-theme-check"
}, Id = { class: "fu-theme-label" }, Ed = /* @__PURE__ */ te({
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
  setup(e, { emit: f }) {
    const n = f;
    function s(l) {
      n("update:modelValue", l);
    }
    return (l, u) => (t(), o("div", Vd, [
      a("div", Td, [
        (t(!0), o(N, null, ne(e.themes, (i) => (t(), o("div", {
          key: i.key,
          class: R(["fu-theme-card", { "is-active": e.modelValue === i.key }]),
          onClick: (d) => s(i.key),
          tabindex: "0",
          role: "button"
        }, [
          a("div", {
            class: R(["fu-theme-preview", `fu-theme-preview--${i.key}`])
          }, [
            u[0] || (u[0] = a("div", { class: "fu-theme-header" }, null, -1)),
            u[1] || (u[1] = a("div", { class: "fu-theme-body" }, null, -1)),
            u[2] || (u[2] = a("div", { class: "fu-theme-footer" }, null, -1)),
            e.modelValue === i.key ? (t(), o("div", Bd, [
              W(Z(gt), { class: "fu-check-icon" })
            ])) : O("", !0)
          ], 2),
          a("span", Id, S(i.name), 1)
        ], 10, Fd))), 128))
      ])
    ]));
  }
}), Ld = /* @__PURE__ */ J(Ed, [["__scopeId", "data-v-43c6ff7c"]]), Ad = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Ld
}, Symbol.toStringTag, { value: "Module" })), jd = { class: "fu-toolbar__left" }, Pd = { class: "fu-toolbar__actions" }, Wd = /* @__PURE__ */ te({
  __name: "FusionToolbar",
  props: {
    wrap: { type: Boolean, default: !0 },
    gap: { type: String, default: "md" },
    align: { type: String, default: "center" }
  },
  setup(e) {
    const f = e, n = H(() => ({
      "flex--wrap": f.wrap,
      [`flex--gap-${f.gap}`]: !!f.gap,
      [`align--${f.align}`]: !!f.align
    }));
    return (s, l) => (t(), o("div", {
      class: R(["fu-toolbar", n.value])
    }, [
      a("div", jd, [
        K(s.$slots, "left", {}, void 0, !0)
      ]),
      a("div", Pd, [
        K(s.$slots, "right", {}, void 0, !0)
      ])
    ], 2));
  }
}), Rd = /* @__PURE__ */ J(Wd, [["__scopeId", "data-v-aa44a495"]]), Hd = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Rd
}, Symbol.toStringTag, { value: "Module" }));
function mt() {
  return ({ message: e, type: f = "info", duration: n = 3500 }) => {
    const s = document.createElement("div");
    document.body.appendChild(s);
    const l = Dt(xt, { message: e, type: f, duration: n });
    l.mount(s), setTimeout(() => {
      l.unmount(), document.body.removeChild(s);
    }, n + 500);
  };
}
const zt = localStorage.getItem("theme") || "auto", Fe = g(zt);
function qd() {
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}
function je(e, f = !1) {
  const n = e === "auto" ? qd() : e;
  if (f) {
    document.documentElement.setAttribute("data-theme", n);
    return;
  }
  document.documentElement.setAttribute("data-theme", n), localStorage.setItem("theme", e);
}
je(zt, !0);
const Nd = window.matchMedia("(prefers-color-scheme: dark)");
Nd.addEventListener("change", () => {
  Fe.value === "auto" && je("auto");
});
Yt(() => {
  je(Fe.value);
});
function Kd() {
  return {
    theme: Fe,
    setTheme: (e) => {
      Fe.value = e, je(e);
    },
    toggleTheme: () => {
      Fe.value = Fe.value === "dark" ? "light" : "dark", je(Fe.value);
    }
  };
}
const pt = /* @__PURE__ */ Object.assign({ "./components/StatusDropdown/FusionStatusDropdown.vue": Qt, "./components/TextInput/EditableDisplayField.vue": cn, "./components/TextInput/FusionTextInput.vue": gn, "./components/accordion/FusionAccordion.vue": Cn, "./components/actionButton/FusionActionButton.vue": an, "./components/autocomplete/FusionAutocomplete.vue": Rn, "./components/avatar/FuAvatar.vue": Xn, "./components/avatar/FuAvatarGroup.vue": Zn, "./components/badge/FusionBadge.vue": eo, "./components/button/FusionButton.vue": so, "./components/cards/FusionStatCard.vue": yo, "./components/checkbox/FusionCheckbox.vue": $o, "./components/codeInput/FusionCodeInput.vue": Do, "./components/colourPallet/FuColorPopover.vue": Eo, "./components/combobox/FuCombobox.vue": Xo, "./components/datePicker/dateField/FusionDatePicker.vue": ba, "./components/datePicker/datePickerBackup.vue": ja, "./components/datePicker/monthPicker/FusionMonthPicker.vue": Ja, "./components/datePicker/plainDate/FusionPlainDatePicker.vue": fl, "./components/datePicker/time/FusionTimePicker.vue": hl, "./components/drawer/FusionDrawer.vue": Ml, "./components/dropdown/FusionDropdownButton.vue": zl, "./components/dropdownInline/FusionDropdownInline.vue": Fl, "./components/dropdownMenu/DropdownMenu.vue": Ll, "./components/editWrapper/EditableFieldWrapper.vue": Nl, "./components/fileUploader/FusionUpload.vue": ns, "./components/filterDropdown/FusionFilterDropdown.vue": rs, "./components/floatingHeader/FusionSmartHeader.vue": ms, "./components/icons/FusionTrashIcon.vue": ys, "./components/items/activity/FusionActivityItem.vue": Ts, "./components/items/attachments/FusionAttachment.vue": Hs, "./components/items/notes/FusionNoteCard.vue": ei, "./components/items/task/FusionTaskItem.vue": fi, "./components/kanban/Kanban.vue": Vi, "./components/layout/AppShell.vue": Qi, "./components/list/FusionListView.vue": du, "./components/modal/FusionConfirmDialog.vue": yu, "./components/modal/FusionModal.vue": Li, "./components/modal/FusionPreviewModal.vue": zu, "./components/modulemenu/FusionModuleMenu.vue": Fu, "./components/notification/FuNotification.vue": Au, "./components/notifications/FuAlert.vue": qu, "./components/notifications/FusionToast.vue": Ku, "./components/pagination/FusionPagination.vue": lr, "./components/panel/FuPanel.vue": fr, "./components/password/FusionPasswordInput.vue": yr, "./components/progress/FusionProgressStepper.vue": xr, "./components/rangeControl/FusionRangeControl.vue": Br, "./components/section/FuSectionHeader.vue": Wr, "./components/sidebarmenu/FusionSidebar.vue": Zr, "./components/splitButton/FusionSplitButton.vue": ld, "./components/switch/FusionSwitch.vue": rd, "./components/tabs/FusionTab.vue": $d, "./components/textArea/FusionTextArea.vue": Yd, "./components/theme/FuThemeSelector.vue": Ad, "./components/toolbar/FusionToolbar.vue": Hd }), Jd = {
  install(e) {
    for (const f in pt) {
      const n = pt[f].default, s = n.name || f.split("/").pop()?.replace(".vue", "");
      e.component(s, n);
    }
    e.config.globalProperties.FusionToast = (f) => {
      mt()(f);
    }, typeof window < "u" && (window.FusionToast = (f) => {
      mt()(f);
    });
  }
};
export {
  Le as FuAvatar,
  Ee as UserStatus,
  Jd as default,
  Kd as useTheme,
  mt as useToast
};
//# sourceMappingURL=fusion-binary-ui.es.js.map
