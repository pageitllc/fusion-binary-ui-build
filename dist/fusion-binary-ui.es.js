import { h as Qe, defineComponent as ee, ref as g, reactive as _t, watch as fe, onMounted as he, onBeforeUnmount as _e, createElementBlock as o, openBlock as t, createCommentVNode as S, createElementVNode as a, createBlock as K, toDisplayString as x, createVNode as A, resolveDynamicComponent as ce, normalizeStyle as oe, normalizeClass as q, unref as Z, Teleport as be, Transition as Ye, withCtx as ae, Fragment as U, renderList as te, nextTick as ve, createTextVNode as ie, withDirectives as Te, renderSlot as J, mergeProps as tt, vModelDynamic as yt, vShow as nt, computed as H, withModifiers as ue, withKeys as De, vModelText as ot, toRaw as Ot, resolveComponent as gt, KeepAlive as Dt, createApp as Yt, watchEffect as Vt } from "vue";
/**
 * @license lucide-vue-next v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const st = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), Tt = (e) => e.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (v, n, s) => s ? s.toUpperCase() : n.toLowerCase()
), Ft = (e) => {
  const v = Tt(e);
  return v.charAt(0).toUpperCase() + v.slice(1);
}, Bt = (...e) => e.filter((v, n, s) => !!v && v.trim() !== "" && s.indexOf(v) === n).join(" ").trim(), it = (e) => e === "";
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
const It = ({
  name: e,
  iconNode: v,
  absoluteStrokeWidth: n,
  "absolute-stroke-width": s,
  strokeWidth: l,
  "stroke-width": i,
  size: u = Ae.width,
  color: d = Ae.stroke,
  ...y
}, { slots: c }) => Qe(
  "svg",
  {
    ...Ae,
    ...y,
    width: u,
    height: u,
    stroke: d,
    "stroke-width": it(n) || it(s) || n === !0 || s === !0 ? Number(l || i || Ae["stroke-width"]) * 24 / Number(u) : l || i || Ae["stroke-width"],
    class: Bt(
      "lucide",
      y.class,
      ...e ? [`lucide-${st(Ft(e))}-icon`, `lucide-${st(e)}`] : ["lucide-icon"]
    )
  },
  [...v.map((b) => Qe(...b)), ...c.default ? [c.default()] : []]
);
/**
 * @license lucide-vue-next v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const me = (e, v) => (n, { slots: s, attrs: l }) => Qe(
  It,
  {
    ...l,
    ...n,
    iconNode: v,
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
const Et = me("bell", [
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
const bt = me("check", [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]]);
/**
 * @license lucide-vue-next v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const $e = me("chevron-down", [
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
const Re = me("chevron-right", [
  ["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }]
]);
/**
 * @license lucide-vue-next v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Lt = me("chevron-up", [
  ["path", { d: "m18 15-6-6-6 6", key: "153udz" }]
]);
/**
 * @license lucide-vue-next v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const At = me("circle-alert", [
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
const wt = me("circle-check-big", [
  ["path", { d: "M21.801 10A10 10 0 1 1 17 3.335", key: "yps3ct" }],
  ["path", { d: "m9 11 3 3L22 4", key: "1pflzl" }]
]);
/**
 * @license lucide-vue-next v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const jt = me("circle-check", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "m9 12 2 2 4-4", key: "dzmm74" }]
]);
/**
 * @license lucide-vue-next v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Pt = me("circle-x", [
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
const at = me("ellipsis-vertical", [
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
const Rt = me("eye-off", [
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
const Ht = me("file-text", [
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
const ut = me("info", [
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
const qt = me("maximize-2", [
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
const Nt = me("minimize-2", [
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
const rt = me("monitor-smartphone", [
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
const lt = me("trash-2", [
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
const Ut = me("triangle-alert", [
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
const Kt = me("video", [
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
const We = me("x", [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
]), Xt = {
  key: 0,
  class: "fu-status-dropdown__label-text"
}, Jt = { key: 0 }, Zt = ["onClick"], Gt = { class: "fu-status-dropdown__item-label" }, Qt = /* @__PURE__ */ ee({
  __name: "FusionStatusDropdown",
  props: {
    modelValue: {},
    options: {},
    align: { default: "left" },
    label: { default: "" },
    placeholder: { default: "Select Status" }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: v }) {
    const n = e, s = v, l = g(!1), i = g(null), u = g(null), d = g(n.modelValue || null), y = _t({
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
      if (!i.value || !u.value) return;
      const r = i.value.getBoundingClientRect(), h = u.value.getBoundingClientRect(), W = window.innerHeight - r.bottom, D = r.top, Y = W < h.height && D > W;
      let O = r.left + window.scrollX, E = "none";
      n.align === "center" && (O += r.width / 2, E = "translateX(-50%)"), n.align === "right" && (O = r.right + window.scrollX, E = "translateX(-100%)"), y.left = `${O}px`, y.transform = E, y.minWidth = `${r.width}px`, Y ? y.top = `${r.top + window.scrollY - h.height - 6}px` : y.top = `${r.bottom + window.scrollY + 6}px`, y.visibility = "visible", y.opacity = "1";
    }
    const b = async () => {
      l.value = !l.value, l.value && (await ve(), c(), await ve(), c());
    }, f = (r) => {
      d.value = r, s("update:modelValue", r), l.value = !1;
    }, m = (r) => {
      const h = r.target;
      l.value && i.value && u.value && !i.value.contains(h) && !u.value.contains(h) && (l.value = !1);
    }, w = () => {
      l.value && (l.value = !1);
    }, M = (r) => {
      r.key === "Escape" && (l.value = !1);
    };
    return he(() => {
      document.addEventListener("click", m), window.addEventListener("resize", w), window.addEventListener("scroll", w, !0), document.addEventListener("keydown", M);
    }), _e(() => {
      document.removeEventListener("click", m), window.removeEventListener("resize", w), window.removeEventListener("scroll", w, !0), document.removeEventListener("keydown", M);
    }), (r, h) => (t(), o("div", {
      class: "fu-status-dropdown",
      ref_key: "dropdown",
      ref: i
    }, [
      e.label ? (t(), o("div", Xt, x(e.label), 1)) : S("", !0),
      a("button", {
        class: "fu-status-dropdown__button",
        onClick: b
      }, [
        d.value ? (t(), o("span", Jt, [
          d.value.icon ? (t(), K(ce(d.value.icon), {
            key: 0,
            class: "fu-status-dropdown__icon"
          })) : d.value.color ? (t(), o("span", {
            key: 1,
            class: "fu-status-dropdown__dot",
            style: oe({ backgroundColor: d.value.color })
          }, null, 4)) : S("", !0)
        ])) : S("", !0),
        a("span", {
          class: q(["fu-status-dropdown__label", { "fu-status-dropdown__placeholder": !d.value }])
        }, x(d.value?.label || e.placeholder), 3),
        A(Z($e), { class: "fu-status-dropdown__chevron" })
      ]),
      (t(), K(be, { to: "body" }, [
        A(Ye, { name: "fade" }, {
          default: ae(() => [
            l.value ? (t(), o("ul", {
              key: 0,
              ref_key: "menuRef",
              ref: u,
              class: "fu-status-dropdown__menu",
              style: oe(y)
            }, [
              (t(!0), o(U, null, te(e.options, (z) => (t(), o("li", {
                key: z.label,
                class: "fu-status-dropdown__item",
                onClick: (W) => f(z)
              }, [
                z.icon ? (t(), K(ce(z.icon), {
                  key: 0,
                  class: "fu-status-dropdown__icon"
                })) : z.color ? (t(), o("span", {
                  key: 1,
                  class: "fu-status-dropdown__dot",
                  style: oe({ backgroundColor: z.color })
                }, null, 4)) : S("", !0),
                a("span", Gt, x(z.label), 1)
              ], 8, Zt))), 128))
            ], 4)) : S("", !0)
          ]),
          _: 1
        })
      ]))
    ], 512));
  }
}), G = (e, v) => {
  const n = e.__vccOpts || e;
  for (const [s, l] of v)
    n[s] = l;
  return n;
}, $t = /* @__PURE__ */ G(Qt, [["__scopeId", "data-v-7725b140"]]), en = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: $t
}, Symbol.toStringTag, { value: "Module" })), tn = ["disabled"], nn = {
  key: 0,
  class: "fu-spinner"
}, on = {
  key: 0,
  class: "fu-tooltip"
}, an = /* @__PURE__ */ ee({
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
    return (v, n) => (t(), o("div", {
      class: q(["fu-action-btn-wrapper", { "has-tooltip": e.tooltip }])
    }, [
      a("button", {
        class: q(["fu-action-btn", [`fu-action-btn--${e.size}`, `fu-action-btn--${e.variant}`, { "is-loading": e.loading }]]),
        disabled: e.disabled || e.loading,
        onClick: n[0] || (n[0] = (s) => e.loading ? null : v.$emit("click", s))
      }, [
        e.loading ? (t(), o("span", nn)) : e.icon ? (t(), K(ce(e.icon), {
          key: 1,
          class: "fu-action-btn__icon",
          size: 20
        })) : S("", !0)
      ], 10, tn),
      e.tooltip ? (t(), o("span", on, x(e.tooltip), 1)) : S("", !0)
    ], 2));
  }
}), ke = /* @__PURE__ */ G(an, [["__scopeId", "data-v-ca61cb3a"]]), ln = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: ke
}, Symbol.toStringTag, { value: "Module" })), sn = { class: "edf-container" }, un = {
  key: 0,
  class: "edf-label"
}, rn = { class: "edf-text" }, dn = /* @__PURE__ */ ee({
  __name: "EditableDisplayField",
  props: {
    text: {},
    label: { default: "" },
    variant: { default: "solid" }
  },
  emits: ["edit"],
  setup(e, { emit: v }) {
    const n = v, s = g(!1);
    function l(i) {
      n("edit", i);
    }
    return (i, u) => (t(), o("div", sn, [
      e.label ? (t(), o("label", un, x(e.label), 1)) : S("", !0),
      a("div", {
        class: q(["edf-wrapper", [`edf--${e.variant}`]]),
        onMouseenter: u[0] || (u[0] = (d) => s.value = !0),
        onMouseleave: u[1] || (u[1] = (d) => s.value = !1),
        ref: "container"
      }, [
        a("span", rn, x(e.text), 1),
        s.value ? (t(), K(ke, {
          key: 0,
          class: "edf-edit-btn",
          icon: Z(kt),
          size: "sm",
          variant: "subtle",
          onClick: l
        }, null, 8, ["icon"])) : S("", !0)
      ], 34)
    ]));
  }
}), cn = /* @__PURE__ */ G(dn, [["__scopeId", "data-v-1e56c520"]]), fn = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: cn
}, Symbol.toStringTag, { value: "Module" })), vn = {
  key: 0,
  class: "fu-input-label"
}, mn = {
  key: 0,
  class: "fu-input-required"
}, pn = {
  key: 0,
  class: "fu-input-icon fu-input-icon--left"
}, hn = ["type", "placeholder", "disabled", "required", "inputmode", "pattern", "min", "max", "step"], _n = {
  key: 1,
  class: "fu-input-icon fu-input-icon--right"
}, yn = {
  key: 1,
  class: "fu-input-error"
}, gn = /* @__PURE__ */ ee({
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
  setup(e, { emit: v }) {
    const n = e, s = v, l = g(n.modelValue);
    return fe(l, (i) => s("update:modelValue", i)), fe(
      () => n.modelValue,
      (i) => l.value = i
    ), (i, u) => (t(), o("div", {
      class: "fu-input-wrapper",
      style: oe({ width: e.formWrapperWidth })
    }, [
      e.label ? (t(), o("label", vn, [
        ie(x(e.label) + " ", 1),
        e.required ? (t(), o("span", mn, "*")) : S("", !0)
      ])) : S("", !0),
      a("div", {
        class: q(["fu-input-container", [`fu-input--${e.size}`, `fu-input--${e.variant}`, { "fu-input--error": e.error }]])
      }, [
        i.$slots.left ? (t(), o("div", pn, [
          J(i.$slots, "left", {}, void 0, !0)
        ])) : S("", !0),
        Te(a("input", tt(i.$attrs, {
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
          "onUpdate:modelValue": u[0] || (u[0] = (d) => l.value = d)
        }), null, 16, hn), [
          [yt, l.value]
        ]),
        i.$slots.right ? (t(), o("div", _n, [
          J(i.$slots, "right", {}, void 0, !0)
        ])) : S("", !0)
      ], 2),
      e.error ? (t(), o("span", yn, x(e.error), 1)) : S("", !0)
    ], 4));
  }
}), xe = /* @__PURE__ */ G(gn, [["__scopeId", "data-v-7f197b54"]]), bn = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: xe
}, Symbol.toStringTag, { value: "Module" })), wn = ["onClick", "disabled"], kn = { class: "fu-accordion__header-content" }, $n = { class: "fu-accordion__body" }, Mn = /* @__PURE__ */ ee({
  __name: "FusionAccordion",
  props: {
    items: {},
    defaultOpen: {},
    type: {},
    theme: {}
  },
  setup(e) {
    const v = e, n = g(v.defaultOpen || []);
    function s(i) {
      return n.value.includes(i);
    }
    function l(i) {
      const u = s(i);
      v.type === "single" ? n.value = u ? [] : [i] : u ? n.value = n.value.filter((d) => d !== i) : n.value.push(i);
    }
    return (i, u) => (t(), o("div", {
      class: q(["fu-accordion", [`fu-accordion--${e.theme}`]])
    }, [
      (t(!0), o(U, null, te(e.items, (d) => (t(), o("div", {
        key: d.key,
        class: "fu-accordion__item"
      }, [
        a("button", {
          class: q(["fu-accordion__header", {
            "is-open": s(d.key),
            "is-disabled": d.disabled
          }]),
          onClick: (y) => l(d.key),
          disabled: d.disabled
        }, [
          a("div", kn, [
            d.icon ? (t(), K(ce(d.icon), {
              key: 0,
              size: 16,
              class: "fu-accordion__icon"
            })) : S("", !0),
            a("span", null, x(d.title), 1)
          ]),
          (t(), o("svg", {
            class: q(["fu-accordion__chevron", { "is-open": s(d.key) }]),
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            viewBox: "0 0 24 24",
            stroke: "currentColor"
          }, [...u[0] || (u[0] = [
            a("path", {
              "stroke-linecap": "round",
              "stroke-linejoin": "round",
              "stroke-width": "2",
              d: "M6 9l6 6 6-6"
            }, null, -1)
          ])], 2))
        ], 10, wn),
        Te(a("div", $n, [
          J(i.$slots, d.key, {}, void 0, !0)
        ], 512), [
          [nt, s(d.key)]
        ])
      ]))), 128))
    ], 2));
  }
}), Cn = /* @__PURE__ */ G(Mn, [["__scopeId", "data-v-f069f986"]]), Sn = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Cn
}, Symbol.toStringTag, { value: "Module" })), xn = {
  key: 0,
  class: "fu-status-dropdown__label-text"
}, zn = { key: 1 }, On = { key: 0 }, Dn = ["src"], Yn = ["onClick"], Vn = {
  key: 1,
  class: "fu-placeholder"
}, Tn = {
  key: 1,
  class: "flex flex--center flex--gap-md"
}, Fn = ["src"], Bn = {
  key: 2,
  class: "fu-status-dropdown__input-trigger"
}, In = {
  key: 0,
  class: "fu-search-wrapper"
}, En = {
  key: 1,
  class: "fu-options-scroll scrollbar__control customScrollBar"
}, Ln = ["onClick"], An = ["src"], jn = {
  key: 2,
  class: "fu-status-dropdown__empty"
}, Pn = {
  key: 3,
  class: "fu-input-error"
}, Rn = /* @__PURE__ */ ee({
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
  setup(e, { emit: v }) {
    const n = e, s = v, l = g(!1), i = g(""), u = g(null), d = g(null), y = g(null), c = g(null), b = g({}), f = g(null), m = g([]), w = H(() => n.async === !0);
    fe(
      () => n.modelValue,
      (D) => {
        n.multiple && Array.isArray(D) ? m.value = D : f.value = D;
      },
      { immediate: !0 }
    ), fe(i, (D) => {
      w.value && (D.length < n.minSearchLength || s("search", D));
    });
    const M = H(() => w.value || !i.value ? n.options : n.options.filter(
      (D) => D.label.toLowerCase().includes(i.value.toLowerCase())
    ));
    function r() {
      l.value = !l.value, l.value && ve(() => {
        const D = u.value?.querySelector("button, input");
        if (!D || !d.value) return;
        const Y = D.getBoundingClientRect();
        b.value = {
          position: "absolute",
          top: `${Y.bottom + window.scrollY}px`,
          left: `${Y.left + window.scrollX}px`,
          width: `${Y.width}px`,
          zIndex: "9999"
        }, n.searchable && ve(() => {
          const O = c.value?.$el?.querySelector("input") || d.value?.querySelector("input");
          O?.focus(), O?.select();
        });
      });
    }
    function h(D) {
      if (n.multiple) {
        const Y = m.value.find((O) => O.value === D.value);
        m.value = Y ? m.value.filter((O) => O.value !== D.value) : [...m.value, D], s("update:modelValue", m.value);
      } else
        f.value = D, s("update:modelValue", D), l.value = !1;
    }
    function z(D) {
      m.value = m.value.filter((Y) => Y.value !== D.value), s("update:modelValue", m.value);
    }
    function W(D) {
      u.value?.contains(D.target) || d.value?.contains(D.target) || (l.value = !1);
    }
    return he(() => document.addEventListener("click", W)), _e(() => document.removeEventListener("click", W)), (D, Y) => (t(), o("div", {
      class: "fu-status-dropdown",
      ref_key: "dropdownRef",
      ref: u
    }, [
      e.label ? (t(), o("div", xn, x(e.label), 1)) : S("", !0),
      e.variant === "button" ? (t(), o("div", zn, [
        a("button", {
          class: q(["fu-status-dropdown__button", [`fu-input--${e.size}`, { "fu-input--error": e.error }]]),
          onClick: r
        }, [
          e.multiple ? (t(), o("div", On, [
            m.value.length ? (t(!0), o(U, { key: 0 }, te(m.value, (O) => (t(), o("span", {
              key: O.value,
              class: "fu-tag"
            }, [
              O.type === "icon" ? (t(), K(ce(O.icon), {
                key: 0,
                size: "14"
              })) : O.type === "image" ? (t(), o("img", {
                key: 1,
                src: O.imageUrl,
                class: "fu-option-image",
                alt: "User Image"
              }, null, 8, Dn)) : S("", !0),
              ie(" " + x(O.label) + " ", 1),
              a("span", {
                class: "fu-tag__remove",
                onClick: ue((E) => z(O), ["stop"])
              }, "×", 8, Yn)
            ]))), 128)) : (t(), o("span", Vn, x(e.placeholder), 1))
          ])) : (t(), o("div", Tn, [
            f.value?.type === "icon" ? (t(), K(ce(f.value.icon), {
              key: 0,
              size: "16"
            })) : f.value?.type === "image" ? (t(), o("img", {
              key: 1,
              src: f.value.imageUrl,
              class: "fu-option-image",
              alt: "User Image"
            }, null, 8, Fn)) : S("", !0),
            a("span", null, x(f.value?.label || e.placeholder), 1)
          ])),
          Y[2] || (Y[2] = a("svg", {
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
      ])) : (t(), o("div", Bn, [
        A(xe, {
          size: e.size,
          readonly: "",
          variant: "outline",
          formWrapperWidth: e.formWrapperWidth,
          placeholder: f.value?.label || e.placeholder,
          onFocus: r,
          onClick: r
        }, null, 8, ["size", "formWrapperWidth", "placeholder"])
      ])),
      (t(), K(be, { to: "body" }, [
        A(Ye, { name: "fade" }, {
          default: ae(() => [
            l.value ? (t(), o("div", {
              key: 0,
              class: "fu-status-dropdown__menu",
              style: oe(b.value),
              ref_key: "menuRef",
              ref: d
            }, [
              e.searchable ? (t(), o("div", In, [
                A(xe, {
                  ref_key: "searchInputRef",
                  ref: c,
                  modelValue: i.value,
                  "onUpdate:modelValue": Y[1] || (Y[1] = (O) => i.value = O),
                  type: "text",
                  placeholder: e.searchPlaceholder,
                  size: e.size,
                  formWrapperWidth: "100%"
                }, {
                  right: ae(() => [
                    a("button", {
                      class: "fu-search-clear",
                      onClick: Y[0] || (Y[0] = (O) => i.value = "")
                    }, "×")
                  ]),
                  _: 1
                }, 8, ["modelValue", "placeholder", "size"])
              ])) : S("", !0),
              M.value.length ? (t(), o("div", En, [
                (t(!0), o(U, null, te(M.value, (O) => (t(), o("div", {
                  key: O.value,
                  class: "fu-status-dropdown__item",
                  onClick: (E) => h(O)
                }, [
                  O.type === "icon" ? (t(), K(ce(O.icon), {
                    key: 0,
                    size: "16"
                  })) : O.type === "image" ? (t(), o("img", {
                    key: 1,
                    src: O.imageUrl,
                    class: "fu-option-image"
                  }, null, 8, An)) : S("", !0),
                  a("span", null, x(O.label), 1)
                ], 8, Ln))), 128)),
                a("div", {
                  class: "fu-status-dropdown__slot-actions",
                  ref_key: "actionsRef",
                  ref: y
                }, [
                  J(D.$slots, "actions")
                ], 512)
              ])) : (t(), o("div", jn, x(e.noResultsText), 1))
            ], 4)) : S("", !0)
          ]),
          _: 3
        })
      ])),
      e.error ? (t(), o("span", Pn, x(e.error), 1)) : S("", !0)
    ], 512));
  }
}), Wn = /* @__PURE__ */ G(Rn, [["__scopeId", "data-v-5655257c"]]), Hn = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Wn
}, Symbol.toStringTag, { value: "Module" }));
var Ee = /* @__PURE__ */ ((e) => (e[e.Offline = 0] = "Offline", e[e.Active = 1] = "Active", e[e.Away = 2] = "Away", e[e.Busy = 3] = "Busy", e[e.DoNotDisturb = 4] = "DoNotDisturb", e[e.Invisible = 5] = "Invisible", e))(Ee || {});
const qn = ["src", "alt"], Nn = {
  key: 1,
  class: "fu-avatar__placeholder"
}, Un = {
  key: 2,
  class: "fu-avatar__edit-overlay"
}, Kn = /* @__PURE__ */ ee({
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
  setup(e, { emit: v }) {
    const n = e, s = v, l = g(null), i = H(
      () => n.name ? n.name.split(" ").map((b) => b[0]).join("").slice(0, 2).toUpperCase() : ""
    ), u = () => {
      n.editable && l.value?.click();
    }, d = (b) => {
      const f = b.target?.files?.[0];
      if (!f) return;
      const m = new FileReader();
      m.onload = () => {
        s("update:src", m.result);
      }, m.readAsDataURL(f);
    }, y = () => {
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
    return (b, f) => (t(), o("div", {
      class: q(["fu-avatar", [`fu-avatar--${e.size}`, { "fu-avatar--editable": e.editable }]])
    }, [
      a("div", {
        class: "fu-avatar__wrapper",
        onClick: u
      }, [
        e.src ? (t(), o("img", {
          key: 0,
          src: e.src,
          alt: e.alt,
          class: "fu-avatar__image"
        }, null, 8, qn)) : (t(), o("span", Nn, x(i.value), 1)),
        e.editable ? (t(), o("span", Un, " Edit ")) : S("", !0),
        e.editable && e.src && e.allowRemove ? (t(), o("button", {
          key: 3,
          class: "fu-avatar__remove",
          onClick: ue(y, ["stop"]),
          "aria-label": "Remove photo"
        }, " × ")) : S("", !0),
        e.showStatus && e.status !== void 0 ? (t(), o("span", {
          key: 4,
          class: q(["fu-status-dot", c.value])
        }, null, 2)) : S("", !0),
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
}), Le = /* @__PURE__ */ G(Kn, [["__scopeId", "data-v-51778eaa"]]), Xn = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Le
}, Symbol.toStringTag, { value: "Module" })), Jn = /* @__PURE__ */ ee({
  __name: "FuAvatarGroup",
  props: {
    users: {},
    max: {},
    size: {}
  },
  emits: ["click"],
  setup(e) {
    const v = e, n = v.max ?? 3, s = v.users.slice(0, n), l = v.users.length - n;
    return (i, u) => (t(), o("div", {
      class: "fu-avatar-group",
      onClick: u[0] || (u[0] = (d) => i.$emit("click"))
    }, [
      (t(!0), o(U, null, te(Z(s), (d, y) => (t(), K(Le, {
        key: d.id || y,
        src: d.src,
        name: d.name,
        alt: d.alt,
        size: e.size
      }, null, 8, ["src", "name", "alt", "size"]))), 128)),
      l > 0 ? (t(), o("div", {
        key: 0,
        class: q(["fu-avatar fu-avatar--more", `fu-avatar--${e.size}`])
      }, " +" + x(l), 2)) : S("", !0)
    ]));
  }
}), Zn = /* @__PURE__ */ G(Jn, [["__scopeId", "data-v-d339fd2f"]]), Gn = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Zn
}, Symbol.toStringTag, { value: "Module" })), Qn = /* @__PURE__ */ ee({
  __name: "FusionBadge",
  props: {
    text: { default: "Badge" },
    size: { default: "md" },
    variant: { default: "solid" },
    themeClass: { default: "" }
  },
  setup(e) {
    return (v, n) => (t(), o("span", {
      class: q(["fu-badge", [
        `fu-badge--${e.variant}`,
        `fu-badge--${e.size}`,
        e.themeClass
      ]])
    }, [
      J(v.$slots, "default", {}, () => [
        ie(x(e.text), 1)
      ], !0)
    ], 2));
  }
}), eo = /* @__PURE__ */ G(Qn, [["__scopeId", "data-v-3281b175"]]), to = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: eo
}, Symbol.toStringTag, { value: "Module" })), no = {
  key: 0,
  class: "fu-spinner"
}, oo = { key: 2 }, ao = { key: 3 }, lo = {
  key: 0,
  class: "fu-tooltip"
}, so = /* @__PURE__ */ ee({
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
    return (v, n) => (t(), o("div", {
      class: q(["fu-btn-wrapper", { "has-tooltip": e.tooltip }]),
      style: oe(e.buttonWidth ? { width: e.buttonWidth } : {})
    }, [
      (t(), K(ce(e.link ? "a" : "button"), {
        class: q(["fu-btn", [
          `fu-btn--${e.variant}`,
          `fu-btn--${e.size}`,
          { "is-loading": e.loading }
        ]]),
        href: e.link || void 0,
        target: e.link ? e.target : void 0,
        rel: e.link && e.target === "_blank" ? "noopener noreferrer" : void 0,
        disabled: !e.link && (e.disabled || e.loading),
        onClick: n[0] || (n[0] = (s) => !e.link && !e.loading ? v.$emit("click", s) : null),
        style: oe(e.buttonWidth ? { width: e.buttonWidth } : {})
      }, {
        default: ae(() => [
          e.loading ? (t(), o("span", no)) : S("", !0),
          e.icon ? (t(), K(ce(e.icon), {
            key: 1,
            class: "fu-btn-icon",
            size: 16
          })) : S("", !0),
          e.loading ? (t(), o("span", oo, x(e.loadingText || "Loading..."), 1)) : (t(), o("span", ao, [
            J(v.$slots, "default", {}, () => [
              ie(x(e.text), 1)
            ], !0)
          ]))
        ]),
        _: 3
      }, 8, ["class", "href", "target", "rel", "disabled", "style"])),
      e.tooltip ? (t(), o("span", lo, x(e.tooltip), 1)) : S("", !0)
    ], 6));
  }
}), ge = /* @__PURE__ */ G(so, [["__scopeId", "data-v-cf97bf26"]]), io = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: ge
}, Symbol.toStringTag, { value: "Module" })), uo = {
  key: 0,
  class: "icon-box"
}, ro = { class: "content" }, co = { class: "value" }, fo = { class: "subtitle" }, vo = {
  key: 0,
  class: "caption"
}, mo = { class: "title" }, po = { class: "value" }, ho = {
  key: 0,
  class: "caption"
}, _o = /* @__PURE__ */ ee({
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
    return (v, n) => (t(), o("div", {
      class: q(["fu-stat-card", [`variant-${e.variant}`, e.bordered ? "bordered" : "", e.shadow ? "shadow" : ""]])
    }, [
      e.variant === "icon-left" ? (t(), o(U, { key: 0 }, [
        e.icon ? (t(), o("div", uo, [
          (t(), K(ce(e.icon), { class: "fu-icon" }))
        ])) : S("", !0),
        a("div", ro, [
          a("div", co, x(e.value), 1),
          a("div", fo, x(e.title), 1),
          e.subtitle ? (t(), o("div", vo, x(e.subtitle), 1)) : S("", !0)
        ])
      ], 64)) : (t(), o(U, { key: 1 }, [
        a("div", mo, x(e.title), 1),
        a("div", po, x(e.value), 1),
        e.subtitle ? (t(), o("div", ho, x(e.subtitle), 1)) : S("", !0)
      ], 64))
    ], 2));
  }
}), yo = /* @__PURE__ */ G(_o, [["__scopeId", "data-v-805e7e96"]]), go = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: yo
}, Symbol.toStringTag, { value: "Module" })), bo = ["for"], wo = ["id", "checked", "disabled"], ko = {
  key: 0,
  class: "fu-checkbox__label"
}, $o = /* @__PURE__ */ ee({
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
    return (v, n) => (t(), o("label", {
      class: q(["fu-checkbox", [`fu-checkbox--${e.size}`, { "fu-checkbox--disabled": e.disabled }]]),
      for: e.id
    }, [
      a("input", {
        type: "checkbox",
        class: "fu-checkbox__input",
        id: e.id,
        checked: e.modelValue,
        disabled: e.disabled,
        onChange: n[0] || (n[0] = (s) => v.$emit("update:modelValue", s.target.checked))
      }, null, 40, wo),
      n[1] || (n[1] = a("span", { class: "fu-checkbox__box" }, null, -1)),
      e.label ? (t(), o("span", ko, x(e.label), 1)) : S("", !0)
    ], 10, bo));
  }
}), et = /* @__PURE__ */ G($o, [["__scopeId", "data-v-3ee76c20"]]), Mo = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: et
}, Symbol.toStringTag, { value: "Module" })), Co = {
  key: 0,
  class: "fu-input-label"
}, So = {
  key: 0,
  class: "fu-input-required"
}, xo = ["onUpdate:modelValue", "onInput", "onKeydown", "disabled"], zo = {
  key: 1,
  class: "fu-input-error"
}, Oo = /* @__PURE__ */ ee({
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
  setup(e, { emit: v }) {
    const n = e, s = v, l = g(Array(n.length).fill("")), i = g([]);
    fe(
      () => n.modelValue,
      (c) => {
        if (!c) {
          l.value = Array(n.length).fill("");
          return;
        }
        const b = c.split("").slice(0, n.length);
        for (; b.length < n.length; ) b.push("");
        l.value = b;
      },
      { immediate: !0 }
    ), fe(
      l,
      () => {
        s("update:modelValue", l.value.join(""));
      },
      { deep: !0 }
    );
    function u(c, b) {
      const m = b.target.value.replace(/\D/g, "");
      l.value[c] = m, m && c < n.length - 1 && ve(() => i.value[c + 1]?.focus());
    }
    function d(c) {
      !l.value[c] && c > 0 && ve(() => i.value[c - 1]?.focus());
    }
    function y(c) {
      c.preventDefault();
      const f = (c.clipboardData?.getData("text") || "").replace(/\D/g, "").slice(0, n.length).split("");
      if (f.length !== 0) {
        f.forEach((m, w) => {
          l.value[w] = m;
        });
        for (let m = f.length; m < n.length; m++)
          l.value[m] = "";
        ve(() => {
          const m = Math.min(f.length - 1, n.length - 1);
          i.value[m]?.focus();
        });
      }
    }
    return (c, b) => (t(), o("div", {
      class: "fu-input-wrapper",
      style: oe({ width: e.formWrapperWidth })
    }, [
      e.label ? (t(), o("label", Co, [
        ie(x(e.label) + " ", 1),
        e.required ? (t(), o("span", So, "*")) : S("", !0)
      ])) : S("", !0),
      a("div", {
        class: q(["fu-code-container", [
          `fu-input--${e.size}`,
          `fu-input--${e.variant}`,
          { "fu-input--error": e.error }
        ]])
      }, [
        (t(!0), o(U, null, te(l.value, (f, m) => Te((t(), o("input", {
          key: m,
          ref_for: !0,
          ref: (w) => i.value[m] = w,
          type: "text",
          maxlength: "1",
          inputmode: "numeric",
          pattern: "[0-9]*",
          class: "fu-code-box fu-input-container",
          "onUpdate:modelValue": (w) => l.value[m] = w,
          onInput: (w) => u(m, w),
          onKeydown: De((w) => d(m), ["backspace"]),
          onPaste: y,
          disabled: e.disabled
        }, null, 40, xo)), [
          [ot, l.value[m]]
        ])), 128))
      ], 2),
      e.error ? (t(), o("span", zo, x(e.error), 1)) : S("", !0)
    ], 4));
  }
}), Do = /* @__PURE__ */ G(Oo, [["__scopeId", "data-v-8582d137"]]), Yo = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Do
}, Symbol.toStringTag, { value: "Module" })), Vo = ["onKeydown"], To = { class: "fu-controls" }, Fo = { class: "fu-sliders" }, Bo = ["value"], Io = /* @__PURE__ */ ee({
  __name: "FuColorPopover",
  props: {
    modelValue: {}
  },
  emits: ["update:modelValue"],
  setup(e, { emit: v }) {
    const n = e, s = v, l = g("hex"), i = g(!1), u = g(null), d = g({
      top: "0px",
      left: "0px"
    });
    function y() {
      i.value = !i.value, i.value && ve(c);
    }
    function c() {
      if (!u.value) return;
      const _ = u.value.getBoundingClientRect(), k = 260, $ = 320, C = 8;
      let B = _.bottom + 6, V = _.left, R = "top left";
      V + k > window.innerWidth - C && (V = _.right - k, R = "top right"), V = Math.max(C, V), B + $ > window.innerHeight - C && (B = _.top - $ - 6, R = R.includes("right") ? "bottom right" : "bottom left"), B = Math.max(C, B), d.value = {
        top: `${B + window.scrollY}px`,
        left: `${V + window.scrollX}px`,
        transformOrigin: R
      };
    }
    function b(_) {
      if (!i.value) return;
      const k = _.target;
      u.value?.contains(k) || k.closest(".fu-color-popover") || (i.value = !1);
    }
    he(() => {
      window.addEventListener("mousedown", b), window.addEventListener("resize", c);
    }), _e(() => {
      window.removeEventListener("mousedown", b), window.removeEventListener("resize", c);
    });
    const f = g(0), m = g(100), w = g(100), M = g(""), r = g(!1);
    function h(_, k, $) {
      k /= 100, $ /= 100;
      const C = $ * k, B = C * (1 - Math.abs(_ / 60 % 2 - 1)), V = $ - C;
      let R = 0, X = 0, Q = 0;
      return _ < 60 ? [R, X, Q] = [C, B, 0] : _ < 120 ? [R, X, Q] = [B, C, 0] : _ < 180 ? [R, X, Q] = [0, C, B] : _ < 240 ? [R, X, Q] = [0, B, C] : _ < 300 ? [R, X, Q] = [B, 0, C] : [R, X, Q] = [C, 0, B], {
        r: Math.round((R + V) * 255),
        g: Math.round((X + V) * 255),
        b: Math.round((Q + V) * 255)
      };
    }
    function z(_, k, $) {
      _ /= 255, k /= 255, $ /= 255;
      const C = Math.max(_, k, $), B = Math.min(_, k, $), V = C - B;
      let R = 0;
      return V && (C === _ ? R = (k - $) / V % 6 : C === k ? R = ($ - _) / V + 2 : R = (_ - k) / V + 4, R *= 60, R < 0 && (R += 360)), {
        h: Math.round(R),
        s: Math.round((C === 0 ? 0 : V / C) * 100),
        v: Math.round(C * 100)
      };
    }
    function W(_, k, $) {
      return "#" + [_, k, $].map((C) => C.toString(16).padStart(2, "0")).join("").toUpperCase();
    }
    function D(_, k, $) {
      return `rgb(${_}, ${k}, ${$})`;
    }
    const Y = H(() => h(f.value, m.value, w.value)), O = H(
      () => W(Y.value.r, Y.value.g, Y.value.b)
    ), E = H(() => ({
      background: `
    linear-gradient(to top, black, transparent),
    linear-gradient(to right, white, hsl(${f.value}, 100%, 50%))
  `
    }));
    function P() {
      const { r: _, g: k, b: $ } = Y.value;
      s(
        "update:modelValue",
        l.value === "rgb" ? D(_, k, $) : O.value
      );
    }
    function N(_) {
      const k = _.trim().replace(/;$/, "");
      let $ = null;
      /^#([0-9a-f]{6})$/i.test(k) && (l.value = "hex", $ = {
        r: parseInt(k.slice(1, 3), 16),
        g: parseInt(k.slice(3, 5), 16),
        b: parseInt(k.slice(5, 7), 16)
      });
      const C = k.match(
        /^rgba?\((\d{1,3}),\s*(\d{1,3}),\s*(\d{1,3})/
      );
      if (C && (l.value = "rgb", $ = {
        r: +C[1],
        g: +C[2],
        b: +C[3]
      }), !$) return;
      const B = z($.r, $.g, $.b);
      f.value = B.h, m.value = B.s, w.value = B.v, P();
    }
    function ne(_) {
      r.value = !0, M.value = _.target.value;
    }
    function I() {
      r.value = !1, N(M.value);
    }
    function F(_) {
      _.key === "Enter" && I();
    }
    function L(_) {
      l.value = "hex";
      const $ = _.currentTarget.getBoundingClientRect(), C = Math.min(Math.max(0, _.clientX - $.left), $.width), B = Math.min(Math.max(0, _.clientY - $.top), $.height);
      m.value = Math.round(C / $.width * 100), w.value = Math.round(100 - B / $.height * 100), P();
    }
    return he(() => {
      n.modelValue && (M.value = n.modelValue, N(n.modelValue));
    }), fe(() => n.modelValue, (_) => {
      _ && (M.value = _, N(_));
    }), (_, k) => (t(), o(U, null, [
      a("div", {
        ref_key: "triggerRef",
        ref: u,
        class: "fu-color-trigger",
        style: oe({ backgroundColor: O.value }),
        role: "button",
        tabindex: "0",
        onClick: y,
        onKeydown: [
          De(ue(y, ["prevent"]), ["enter"]),
          De(ue(y, ["prevent"]), ["space"])
        ]
      }, null, 44, Vo),
      (t(), K(be, { to: "body" }, [
        i.value ? (t(), o("div", {
          key: 0,
          class: "fu-color-popover",
          style: oe(d.value)
        }, [
          a("div", {
            class: "fu-saturation",
            style: oe(E.value),
            onPointerdown: L,
            onPointermove: k[0] || (k[0] = ($) => $.buttons === 1 && L($))
          }, [
            a("div", {
              class: "fu-cursor",
              style: oe({ left: m.value + "%", top: 100 - w.value + "%" })
            }, null, 4)
          ], 36),
          a("div", To, [
            a("div", {
              class: "fu-preview",
              style: oe({ backgroundColor: O.value })
            }, null, 4),
            a("div", Fo, [
              Te(a("input", {
                type: "range",
                min: "0",
                max: "360",
                "onUpdate:modelValue": k[1] || (k[1] = ($) => f.value = $),
                class: "fu-hue"
              }, null, 512), [
                [ot, f.value]
              ])
            ])
          ]),
          a("input", {
            class: "fu-output",
            value: M.value,
            onInput: ne,
            onBlur: I,
            onKeydown: F,
            placeholder: "#RRGGBB or rgb(...)"
          }, null, 40, Bo)
        ], 4)) : S("", !0)
      ]))
    ], 64));
  }
}), Eo = /* @__PURE__ */ G(Io, [["__scopeId", "data-v-568b3b3c"]]), Lo = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Eo
}, Symbol.toStringTag, { value: "Module" })), Ao = { class: "fu-combobox__control" }, jo = ["value", "placeholder", "disabled"], Po = {
  key: 0,
  class: "fu-combobox__dropdown scrollbar__control customScrollBar"
}, Ro = { class: "fu-combobox__group-title" }, Wo = ["onClick"], Ho = { class: "fu-combobox__option-left" }, qo = { class: "fu-combobox__option-right" }, No = {
  key: 1,
  class: "fu-combobox__empty"
}, Uo = /* @__PURE__ */ ee({
  __name: "FuCombobox",
  props: {
    options: {},
    modelValue: {},
    placeholder: {},
    disabled: { type: Boolean }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: v }) {
    const n = e, s = v, l = g(!1), i = g(""), u = g(null), d = g(null), y = H(() => {
      if (!i.value || u.value && i.value.toLowerCase() === u.value.label.toLowerCase())
        return c(n.options);
      const M = n.options.filter(
        (r) => r.label.toLowerCase().includes(i.value.toLowerCase())
      );
      return c(M);
    });
    function c(M) {
      const r = {};
      return M.forEach((h) => {
        const z = h.group || "Options";
        r[z] || (r[z] = []), r[z].push(h);
      }), Object.entries(r).map(([h, z]) => ({ title: h, items: z }));
    }
    fe(
      () => n.modelValue,
      (M) => {
        u.value = n.options.find((r) => r.value === M) || null, !l.value && u.value && (i.value = u.value.label);
      },
      { immediate: !0 }
    );
    function b(M) {
      i.value = M.target.value;
    }
    function f(M) {
      u.value = M, i.value = M.label, s("update:modelValue", M.value), l.value = !1;
    }
    function m() {
      l.value = !l.value;
    }
    function w(M) {
      d.value && !d.value.contains(M.target) && (l.value = !1, u.value && (i.value = u.value.label));
    }
    return he(() => {
      document.addEventListener("click", w);
    }), _e(() => {
      document.removeEventListener("click", w);
    }), (M, r) => (t(), o("div", {
      class: q(["fu-combobox", { "fu-combobox--disabled": e.disabled }]),
      ref_key: "comboboxRef",
      ref: d
    }, [
      a("div", Ao, [
        a("input", {
          type: "text",
          value: l.value ? i.value : u.value?.label || "",
          placeholder: e.placeholder,
          class: "fu-combobox__input",
          disabled: e.disabled,
          onInput: b,
          onFocus: r[0] || (r[0] = (h) => !e.disabled && (l.value = !0))
        }, null, 40, jo),
        a("span", {
          class: "fu-combobox__icon",
          onClick: ue(m, ["stop"])
        }, [
          A(Z($e), {
            size: 18,
            "stroke-width": 1
          })
        ])
      ]),
      l.value && !e.disabled ? (t(), o("div", Po, [
        y.value.length > 0 ? (t(!0), o(U, { key: 0 }, te(y.value, (h) => (t(), o("div", {
          key: h.title,
          class: "fu-combobox__group"
        }, [
          a("div", Ro, x(h.title), 1),
          (t(!0), o(U, null, te(h.items, (z) => (t(), o("div", {
            key: z.value,
            class: q(["fu-combobox__option", {
              "fu-combobox__option--selected": z.value === u.value?.value
            }]),
            onClick: (W) => f(z)
          }, [
            a("div", Ho, [
              J(M.$slots, "option", { option: z }, () => [
                z.icon ? (t(), K(ce(z.icon), {
                  key: 0,
                  class: "fu-combobox__option-icon"
                })) : S("", !0),
                a("span", null, x(z.label), 1)
              ], !0)
            ]),
            a("div", qo, [
              z.value === u.value?.value ? (t(), K(Z(bt), {
                key: 0,
                class: "fu-combobox__check"
              })) : S("", !0)
            ])
          ], 10, Wo))), 128))
        ]))), 128)) : (t(), o("div", No, "No results found"))
      ])) : S("", !0)
    ], 2));
  }
}), Ko = /* @__PURE__ */ G(Uo, [["__scopeId", "data-v-8ca05e69"]]), Xo = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Ko
}, Symbol.toStringTag, { value: "Module" }));
function Mt(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Ne = { exports: {} }, Jo = Ne.exports, dt;
function Zo() {
  return dt || (dt = 1, (function(e, v) {
    (function(n, s) {
      e.exports = s();
    })(Jo, (function() {
      var n = 1e3, s = 6e4, l = 36e5, i = "millisecond", u = "second", d = "minute", y = "hour", c = "day", b = "week", f = "month", m = "quarter", w = "year", M = "date", r = "Invalid Date", h = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/, z = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g, W = { name: "en", weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"), ordinal: function(k) {
        var $ = ["th", "st", "nd", "rd"], C = k % 100;
        return "[" + k + ($[(C - 20) % 10] || $[C] || $[0]) + "]";
      } }, D = function(k, $, C) {
        var B = String(k);
        return !B || B.length >= $ ? k : "" + Array($ + 1 - B.length).join(C) + k;
      }, Y = { s: D, z: function(k) {
        var $ = -k.utcOffset(), C = Math.abs($), B = Math.floor(C / 60), V = C % 60;
        return ($ <= 0 ? "+" : "-") + D(B, 2, "0") + ":" + D(V, 2, "0");
      }, m: function k($, C) {
        if ($.date() < C.date()) return -k(C, $);
        var B = 12 * (C.year() - $.year()) + (C.month() - $.month()), V = $.clone().add(B, f), R = C - V < 0, X = $.clone().add(B + (R ? -1 : 1), f);
        return +(-(B + (C - V) / (R ? V - X : X - V)) || 0);
      }, a: function(k) {
        return k < 0 ? Math.ceil(k) || 0 : Math.floor(k);
      }, p: function(k) {
        return { M: f, y: w, w: b, d: c, D: M, h: y, m: d, s: u, ms: i, Q: m }[k] || String(k || "").toLowerCase().replace(/s$/, "");
      }, u: function(k) {
        return k === void 0;
      } }, O = "en", E = {};
      E[O] = W;
      var P = "$isDayjsObject", N = function(k) {
        return k instanceof L || !(!k || !k[P]);
      }, ne = function k($, C, B) {
        var V;
        if (!$) return O;
        if (typeof $ == "string") {
          var R = $.toLowerCase();
          E[R] && (V = R), C && (E[R] = C, V = R);
          var X = $.split("-");
          if (!V && X.length > 1) return k(X[0]);
        } else {
          var Q = $.name;
          E[Q] = $, V = Q;
        }
        return !B && V && (O = V), V || !B && O;
      }, I = function(k, $) {
        if (N(k)) return k.clone();
        var C = typeof $ == "object" ? $ : {};
        return C.date = k, C.args = arguments, new L(C);
      }, F = Y;
      F.l = ne, F.i = N, F.w = function(k, $) {
        return I(k, { locale: $.$L, utc: $.$u, x: $.$x, $offset: $.$offset });
      };
      var L = (function() {
        function k(C) {
          this.$L = ne(C.locale, null, !0), this.parse(C), this.$x = this.$x || C.x || {}, this[P] = !0;
        }
        var $ = k.prototype;
        return $.parse = function(C) {
          this.$d = (function(B) {
            var V = B.date, R = B.utc;
            if (V === null) return /* @__PURE__ */ new Date(NaN);
            if (F.u(V)) return /* @__PURE__ */ new Date();
            if (V instanceof Date) return new Date(V);
            if (typeof V == "string" && !/Z$/i.test(V)) {
              var X = V.match(h);
              if (X) {
                var Q = X[2] - 1 || 0, re = (X[7] || "0").substring(0, 3);
                return R ? new Date(Date.UTC(X[1], Q, X[3] || 1, X[4] || 0, X[5] || 0, X[6] || 0, re)) : new Date(X[1], Q, X[3] || 1, X[4] || 0, X[5] || 0, X[6] || 0, re);
              }
            }
            return new Date(V);
          })(C), this.init();
        }, $.init = function() {
          var C = this.$d;
          this.$y = C.getFullYear(), this.$M = C.getMonth(), this.$D = C.getDate(), this.$W = C.getDay(), this.$H = C.getHours(), this.$m = C.getMinutes(), this.$s = C.getSeconds(), this.$ms = C.getMilliseconds();
        }, $.$utils = function() {
          return F;
        }, $.isValid = function() {
          return this.$d.toString() !== r;
        }, $.isSame = function(C, B) {
          var V = I(C);
          return this.startOf(B) <= V && V <= this.endOf(B);
        }, $.isAfter = function(C, B) {
          return I(C) < this.startOf(B);
        }, $.isBefore = function(C, B) {
          return this.endOf(B) < I(C);
        }, $.$g = function(C, B, V) {
          return F.u(C) ? this[B] : this.set(V, C);
        }, $.unix = function() {
          return Math.floor(this.valueOf() / 1e3);
        }, $.valueOf = function() {
          return this.$d.getTime();
        }, $.startOf = function(C, B) {
          var V = this, R = !!F.u(B) || B, X = F.p(C), Q = function(Me, p) {
            var T = F.w(V.$u ? Date.UTC(V.$y, p, Me) : new Date(V.$y, p, Me), V);
            return R ? T : T.endOf(c);
          }, re = function(Me, p) {
            return F.w(V.toDate()[Me].apply(V.toDate("s"), (R ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(p)), V);
          }, de = this.$W, pe = this.$M, ye = this.$D, Ce = "set" + (this.$u ? "UTC" : "");
          switch (X) {
            case w:
              return R ? Q(1, 0) : Q(31, 11);
            case f:
              return R ? Q(1, pe) : Q(0, pe + 1);
            case b:
              var we = this.$locale().weekStart || 0, ze = (de < we ? de + 7 : de) - we;
              return Q(R ? ye - ze : ye + (6 - ze), pe);
            case c:
            case M:
              return re(Ce + "Hours", 0);
            case y:
              return re(Ce + "Minutes", 1);
            case d:
              return re(Ce + "Seconds", 2);
            case u:
              return re(Ce + "Milliseconds", 3);
            default:
              return this.clone();
          }
        }, $.endOf = function(C) {
          return this.startOf(C, !1);
        }, $.$set = function(C, B) {
          var V, R = F.p(C), X = "set" + (this.$u ? "UTC" : ""), Q = (V = {}, V[c] = X + "Date", V[M] = X + "Date", V[f] = X + "Month", V[w] = X + "FullYear", V[y] = X + "Hours", V[d] = X + "Minutes", V[u] = X + "Seconds", V[i] = X + "Milliseconds", V)[R], re = R === c ? this.$D + (B - this.$W) : B;
          if (R === f || R === w) {
            var de = this.clone().set(M, 1);
            de.$d[Q](re), de.init(), this.$d = de.set(M, Math.min(this.$D, de.daysInMonth())).$d;
          } else Q && this.$d[Q](re);
          return this.init(), this;
        }, $.set = function(C, B) {
          return this.clone().$set(C, B);
        }, $.get = function(C) {
          return this[F.p(C)]();
        }, $.add = function(C, B) {
          var V, R = this;
          C = Number(C);
          var X = F.p(B), Q = function(pe) {
            var ye = I(R);
            return F.w(ye.date(ye.date() + Math.round(pe * C)), R);
          };
          if (X === f) return this.set(f, this.$M + C);
          if (X === w) return this.set(w, this.$y + C);
          if (X === c) return Q(1);
          if (X === b) return Q(7);
          var re = (V = {}, V[d] = s, V[y] = l, V[u] = n, V)[X] || 1, de = this.$d.getTime() + C * re;
          return F.w(de, this);
        }, $.subtract = function(C, B) {
          return this.add(-1 * C, B);
        }, $.format = function(C) {
          var B = this, V = this.$locale();
          if (!this.isValid()) return V.invalidDate || r;
          var R = C || "YYYY-MM-DDTHH:mm:ssZ", X = F.z(this), Q = this.$H, re = this.$m, de = this.$M, pe = V.weekdays, ye = V.months, Ce = V.meridiem, we = function(p, T, j, le) {
            return p && (p[T] || p(B, R)) || j[T].slice(0, le);
          }, ze = function(p) {
            return F.s(Q % 12 || 12, p, "0");
          }, Me = Ce || function(p, T, j) {
            var le = p < 12 ? "AM" : "PM";
            return j ? le.toLowerCase() : le;
          };
          return R.replace(z, (function(p, T) {
            return T || (function(j) {
              switch (j) {
                case "YY":
                  return String(B.$y).slice(-2);
                case "YYYY":
                  return F.s(B.$y, 4, "0");
                case "M":
                  return de + 1;
                case "MM":
                  return F.s(de + 1, 2, "0");
                case "MMM":
                  return we(V.monthsShort, de, ye, 3);
                case "MMMM":
                  return we(ye, de);
                case "D":
                  return B.$D;
                case "DD":
                  return F.s(B.$D, 2, "0");
                case "d":
                  return String(B.$W);
                case "dd":
                  return we(V.weekdaysMin, B.$W, pe, 2);
                case "ddd":
                  return we(V.weekdaysShort, B.$W, pe, 3);
                case "dddd":
                  return pe[B.$W];
                case "H":
                  return String(Q);
                case "HH":
                  return F.s(Q, 2, "0");
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
                  return F.s(re, 2, "0");
                case "s":
                  return String(B.$s);
                case "ss":
                  return F.s(B.$s, 2, "0");
                case "SSS":
                  return F.s(B.$ms, 3, "0");
                case "Z":
                  return X;
              }
              return null;
            })(p) || X.replace(":", "");
          }));
        }, $.utcOffset = function() {
          return 15 * -Math.round(this.$d.getTimezoneOffset() / 15);
        }, $.diff = function(C, B, V) {
          var R, X = this, Q = F.p(B), re = I(C), de = (re.utcOffset() - this.utcOffset()) * s, pe = this - re, ye = function() {
            return F.m(X, re);
          };
          switch (Q) {
            case w:
              R = ye() / 12;
              break;
            case f:
              R = ye();
              break;
            case m:
              R = ye() / 3;
              break;
            case b:
              R = (pe - de) / 6048e5;
              break;
            case c:
              R = (pe - de) / 864e5;
              break;
            case y:
              R = pe / l;
              break;
            case d:
              R = pe / s;
              break;
            case u:
              R = pe / n;
              break;
            default:
              R = pe;
          }
          return V ? R : F.a(R);
        }, $.daysInMonth = function() {
          return this.endOf(f).$D;
        }, $.$locale = function() {
          return E[this.$L];
        }, $.locale = function(C, B) {
          if (!C) return this.$L;
          var V = this.clone(), R = ne(C, B, !0);
          return R && (V.$L = R), V;
        }, $.clone = function() {
          return F.w(this.$d, this);
        }, $.toDate = function() {
          return new Date(this.valueOf());
        }, $.toJSON = function() {
          return this.isValid() ? this.toISOString() : null;
        }, $.toISOString = function() {
          return this.$d.toISOString();
        }, $.toString = function() {
          return this.$d.toUTCString();
        }, k;
      })(), _ = L.prototype;
      return I.prototype = _, [["$ms", i], ["$s", u], ["$m", d], ["$H", y], ["$W", c], ["$M", f], ["$y", w], ["$D", M]].forEach((function(k) {
        _[k[1]] = function($) {
          return this.$g($, k[0], k[1]);
        };
      })), I.extend = function(k, $) {
        return k.$i || (k($, L, I), k.$i = !0), I;
      }, I.locale = ne, I.isDayjs = N, I.unix = function(k) {
        return I(1e3 * k);
      }, I.en = E[O], I.Ls = E, I.p = {}, I;
    }));
  })(Ne)), Ne.exports;
}
var Go = Zo();
const se = /* @__PURE__ */ Mt(Go);
var Ue = { exports: {} }, Qo = Ue.exports, ct;
function ea() {
  return ct || (ct = 1, (function(e, v) {
    (function(n, s) {
      e.exports = s();
    })(Qo, (function() {
      var n = { LTS: "h:mm:ss A", LT: "h:mm A", L: "MM/DD/YYYY", LL: "MMMM D, YYYY", LLL: "MMMM D, YYYY h:mm A", LLLL: "dddd, MMMM D, YYYY h:mm A" }, s = /(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|Q|YYYY|YY?|ww?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g, l = /\d/, i = /\d\d/, u = /\d\d?/, d = /\d*[^-_:/,()\s\d]+/, y = {}, c = function(h) {
        return (h = +h) + (h > 68 ? 1900 : 2e3);
      }, b = function(h) {
        return function(z) {
          this[h] = +z;
        };
      }, f = [/[+-]\d\d:?(\d\d)?|Z/, function(h) {
        (this.zone || (this.zone = {})).offset = (function(z) {
          if (!z || z === "Z") return 0;
          var W = z.match(/([+-]|\d\d)/g), D = 60 * W[1] + (+W[2] || 0);
          return D === 0 ? 0 : W[0] === "+" ? -D : D;
        })(h);
      }], m = function(h) {
        var z = y[h];
        return z && (z.indexOf ? z : z.s.concat(z.f));
      }, w = function(h, z) {
        var W, D = y.meridiem;
        if (D) {
          for (var Y = 1; Y <= 24; Y += 1) if (h.indexOf(D(Y, 0, z)) > -1) {
            W = Y > 12;
            break;
          }
        } else W = h === (z ? "pm" : "PM");
        return W;
      }, M = { A: [d, function(h) {
        this.afternoon = w(h, !1);
      }], a: [d, function(h) {
        this.afternoon = w(h, !0);
      }], Q: [l, function(h) {
        this.month = 3 * (h - 1) + 1;
      }], S: [l, function(h) {
        this.milliseconds = 100 * +h;
      }], SS: [i, function(h) {
        this.milliseconds = 10 * +h;
      }], SSS: [/\d{3}/, function(h) {
        this.milliseconds = +h;
      }], s: [u, b("seconds")], ss: [u, b("seconds")], m: [u, b("minutes")], mm: [u, b("minutes")], H: [u, b("hours")], h: [u, b("hours")], HH: [u, b("hours")], hh: [u, b("hours")], D: [u, b("day")], DD: [i, b("day")], Do: [d, function(h) {
        var z = y.ordinal, W = h.match(/\d+/);
        if (this.day = W[0], z) for (var D = 1; D <= 31; D += 1) z(D).replace(/\[|\]/g, "") === h && (this.day = D);
      }], w: [u, b("week")], ww: [i, b("week")], M: [u, b("month")], MM: [i, b("month")], MMM: [d, function(h) {
        var z = m("months"), W = (m("monthsShort") || z.map((function(D) {
          return D.slice(0, 3);
        }))).indexOf(h) + 1;
        if (W < 1) throw new Error();
        this.month = W % 12 || W;
      }], MMMM: [d, function(h) {
        var z = m("months").indexOf(h) + 1;
        if (z < 1) throw new Error();
        this.month = z % 12 || z;
      }], Y: [/[+-]?\d+/, b("year")], YY: [i, function(h) {
        this.year = c(h);
      }], YYYY: [/\d{4}/, b("year")], Z: f, ZZ: f };
      function r(h) {
        var z, W;
        z = h, W = y && y.formats;
        for (var D = (h = z.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g, (function(I, F, L) {
          var _ = L && L.toUpperCase();
          return F || W[L] || n[L] || W[_].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g, (function(k, $, C) {
            return $ || C.slice(1);
          }));
        }))).match(s), Y = D.length, O = 0; O < Y; O += 1) {
          var E = D[O], P = M[E], N = P && P[0], ne = P && P[1];
          D[O] = ne ? { regex: N, parser: ne } : E.replace(/^\[|\]$/g, "");
        }
        return function(I) {
          for (var F = {}, L = 0, _ = 0; L < Y; L += 1) {
            var k = D[L];
            if (typeof k == "string") _ += k.length;
            else {
              var $ = k.regex, C = k.parser, B = I.slice(_), V = $.exec(B)[0];
              C.call(F, V), I = I.replace(V, "");
            }
          }
          return (function(R) {
            var X = R.afternoon;
            if (X !== void 0) {
              var Q = R.hours;
              X ? Q < 12 && (R.hours += 12) : Q === 12 && (R.hours = 0), delete R.afternoon;
            }
          })(F), F;
        };
      }
      return function(h, z, W) {
        W.p.customParseFormat = !0, h && h.parseTwoDigitYear && (c = h.parseTwoDigitYear);
        var D = z.prototype, Y = D.parse;
        D.parse = function(O) {
          var E = O.date, P = O.utc, N = O.args;
          this.$u = P;
          var ne = N[1];
          if (typeof ne == "string") {
            var I = N[2] === !0, F = N[3] === !0, L = I || F, _ = N[2];
            F && (_ = N[2]), y = this.$locale(), !I && _ && (y = W.Ls[_]), this.$d = (function(B, V, R, X) {
              try {
                if (["x", "X"].indexOf(V) > -1) return new Date((V === "X" ? 1e3 : 1) * B);
                var Q = r(V)(B), re = Q.year, de = Q.month, pe = Q.day, ye = Q.hours, Ce = Q.minutes, we = Q.seconds, ze = Q.milliseconds, Me = Q.zone, p = Q.week, T = /* @__PURE__ */ new Date(), j = pe || (re || de ? 1 : T.getDate()), le = re || T.getFullYear(), Se = 0;
                re && !de || (Se = de > 0 ? de - 1 : T.getMonth());
                var Ve, Oe = ye || 0, Xe = Ce || 0, Je = we || 0, Ze = ze || 0;
                return Me ? new Date(Date.UTC(le, Se, j, Oe, Xe, Je, Ze + 60 * Me.offset * 1e3)) : R ? new Date(Date.UTC(le, Se, j, Oe, Xe, Je, Ze)) : (Ve = new Date(le, Se, j, Oe, Xe, Je, Ze), p && (Ve = X(Ve).week(p).toDate()), Ve);
              } catch {
                return /* @__PURE__ */ new Date("");
              }
            })(E, ne, P, W), this.init(), _ && _ !== !0 && (this.$L = this.locale(_).$L), L && E != this.format(ne) && (this.$d = /* @__PURE__ */ new Date("")), y = {};
          } else if (ne instanceof Array) for (var k = ne.length, $ = 1; $ <= k; $ += 1) {
            N[1] = ne[$ - 1];
            var C = W.apply(this, N);
            if (C.isValid()) {
              this.$d = C.$d, this.$L = C.$L, this.init();
              break;
            }
            $ === k && (this.$d = /* @__PURE__ */ new Date(""));
          }
          else Y.call(this, O);
        };
      };
    }));
  })(Ue)), Ue.exports;
}
var ta = ea();
const Ct = /* @__PURE__ */ Mt(ta), na = { class: "calendar-header" }, oa = { class: "flex flex--gap-sm" }, aa = { key: 0 }, la = { class: "calendar-weekdays" }, sa = { class: "calendar-days" }, ia = ["onClick"], ua = {
  key: 1,
  class: "calendar-months"
}, ra = ["onClick"], da = {
  key: 2,
  class: "calendar-years"
}, ca = ["onClick"], fa = { class: "flex flex--space flex--gap-md px-2 pb-2" }, va = {
  key: 0,
  class: "flex flex--gap-sm"
}, ma = { key: 1 }, pa = {
  key: 3,
  class: "calendar-time"
}, ha = { class: "fu-time-input-wrapper" }, _a = {
  key: 0,
  class: "fu-time-dropdown customScrollBar"
}, ya = ["onMousedown"], Be = 12, ga = {
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
  setup(e, { emit: v }) {
    se.extend(Ct);
    const n = e, s = g(!1), l = v, i = g(!1), u = g(null), d = g(null), y = g(null), c = g(se().startOf("month")), b = g(null), f = g({ start: null, end: null }), m = g("00:00"), w = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"], M = [
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
    ), z = H(() => h.value + Be - 1), W = H(
      () => Array.from({ length: Be }, (p, T) => h.value + T)
    ), D = H(() => {
      const p = c.value.startOf("month").startOf("week"), T = c.value.endOf("month").endOf("week"), j = [];
      let le = p.clone();
      for (; le.isBefore(T) || le.isSame(T, "day"); )
        j.push({
          date: le.clone(),
          isCurrentMonth: le.month() === c.value.month()
        }), le = le.add(1, "day");
      return j;
    });
    function Y(p) {
      return !!(n.min && p.isBefore(se(n.min), "day") || n.max && p.isAfter(se(n.max), "day"));
    }
    function O(p) {
      return n.variant === "date-range" ? f.value.start && p.isSame(f.value.start, "day") || f.value.end && p.isSame(f.value.end, "day") : b.value && p.isSame(b.value, "day");
    }
    function E(p) {
      return n.variant === "date-range" && f.value.start && f.value.end && p.isAfter(f.value.start, "day") && p.isBefore(f.value.end, "day");
    }
    function P(p) {
      if (!Y(p)) {
        if (n.variant === "date-range") {
          !f.value.start || u.value === "start" ? (f.value.start = p.clone(), f.value.end = null, u.value = "end") : p.isBefore(f.value.start, "day") ? (f.value.end = f.value.start.clone(), f.value.start = p.clone()) : f.value.end = p.clone();
          return;
        }
        b.value = p.clone(), l(
          "update:modelValue",
          n.variant === "date-time" ? b.value.format("YYYY-MM-DDTHH:mm") : b.value.format("YYYY-MM-DD")
        ), I();
      }
    }
    function N() {
      f.value.start && f.value.end && (l("update:modelValue", {
        start: f.value.start.format("YYYY-MM-DD"),
        end: f.value.end.format("YYYY-MM-DD")
      }), I());
    }
    function ne(p = null) {
      u.value = p, i.value = !0, n.variant === "date-range" ? f.value.start ? c.value = f.value.start.startOf("month") : c.value = se().startOf("month") : b.value ? c.value = b.value.startOf("month") : c.value = se().startOf("month"), ve(() => {
        _(), window.addEventListener("resize", _), window.addEventListener("click", F);
      });
    }
    function I() {
      i.value = !1, window.removeEventListener("resize", _), window.removeEventListener("click", F);
    }
    function F(p) {
      !d.value?.contains(p.target) && !y.value?.contains(p.target) && I();
    }
    const L = g({
      position: "absolute",
      top: "0px",
      left: "0px",
      zIndex: 9999
    });
    function _() {
      if (!d.value || !y.value) return;
      const p = d.value.getBoundingClientRect(), T = y.value.getBoundingClientRect(), j = window.innerHeight - p.bottom, le = p.top, Se = window.scrollY || window.pageYOffset, Ve = window.scrollX || window.pageXOffset;
      let Oe;
      j < T.height && le > T.height ? Oe = p.top + Se - T.height - 6 : Oe = p.bottom + Se + 6, L.value = {
        position: "absolute",
        top: `${Oe}px`,
        left: `${p.left + Ve}px`,
        zIndex: 9999
      };
    }
    const k = H(() => b.value ? n.variant === "date-time" ? b.value.format("YYYY-MM-DD HH:mm") : b.value.format("YYYY-MM-DD") : ""), $ = H(() => n.variant !== "date-range" ? "" : f.value.start && f.value.end ? `${f.value.start.format(
      "YYYY-MM-DD"
    )} to ${f.value.end.format("YYYY-MM-DD")}` : f.value.start ? `${f.value.start.format("YYYY-MM-DD")} to ...` : ""), C = H(() => `fu-date-picker--${n.variant}`);
    fe(
      () => n.modelValue,
      (p) => {
        if (n.variant !== "date-range") {
          if (typeof p == "string" && p) {
            const T = se(p);
            if (T.isValid()) {
              b.value = T, c.value = T.startOf("month"), n.variant === "date-time" ? m.value = T.format("h:mm A") : m.value = "00:00";
              return;
            }
          }
          (p === null || p === "") && (b.value = null, f.value = { start: null, end: null }, m.value = "00:00");
        }
      },
      { immediate: !0 }
    );
    function B() {
      r.value === "days" ? r.value = "months" : r.value === "months" ? r.value = "years" : r.value = "days";
    }
    function V() {
      r.value === "days" ? c.value = c.value.subtract(1, "month") : r.value === "months" ? c.value = c.value.subtract(1, "year") : c.value = c.value.subtract(Be, "year");
    }
    function R() {
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
      n.variant === "date-range" ? f.value = { start: p.clone(), end: p.clone() } : (b.value = p.clone(), l(
        "update:modelValue",
        n.variant === "date-time" ? p.format("YYYY-MM-DDTHH:mm") : p.format("YYYY-MM-DD")
      ), I());
    }
    function de() {
      const p = se().add(1, "day");
      n.variant === "date-range" ? f.value = { start: p.clone(), end: p.clone() } : (b.value = p.clone(), l(
        "update:modelValue",
        n.variant === "date-time" ? p.format("YYYY-MM-DDTHH:mm") : p.format("YYYY-MM-DD")
      ), I());
    }
    function pe() {
      b.value = null, f.value = { start: null, end: null }, l(
        "update:modelValue",
        n.variant === "date-range" ? { start: null, end: null } : null
      ), I();
    }
    const ye = H(() => {
      const p = [];
      for (let T = 0; T < 24; T++)
        for (let j = 0; j < 60; j += 15)
          p.push(se().hour(T).minute(j).format("h:mm A"));
      return p;
    }), Ce = H(() => {
      if (!m.value) return ye.value;
      const p = m.value.toLowerCase().replace(/\s+/g, "");
      return ye.value.filter(
        (T) => T.toLowerCase().replace(/\s+/g, "").startsWith(p)
      );
    });
    function we() {
      if (!b.value || !m.value) return;
      const p = String(m.value).trim().toLowerCase(), T = se(
        p,
        ["h:mm a", "h:mma", "ha", "h a", "hh:mm a", "H:mm", "HH:mm", "H"],
        !0
      );
      if (!T.isValid()) {
        s.value = !1;
        return;
      }
      b.value = b.value.hour(T.hour()).minute(T.minute()), m.value = b.value.format("h:mm A"), l("update:modelValue", b.value.format("YYYY-MM-DDTHH:mm")), s.value = !1;
    }
    function ze(p) {
      m.value = p, we();
    }
    function Me() {
      setTimeout(() => {
        we(), s.value = !1;
      }, 120);
    }
    return _e(() => {
      window.removeEventListener("resize", _), window.removeEventListener("click", F);
    }), (p, T) => (t(), o("div", {
      class: q(["fu-date-picker", C.value]),
      ref_key: "pickerRef",
      ref: d,
      style: oe({ width: e.formWrapperWidth })
    }, [
      e.variant !== "date-range" ? (t(), K(xe, {
        key: 0,
        type: "text",
        modelValue: k.value,
        placeholder: "Select date",
        readonly: "",
        onClick: ne,
        formWrapperWidth: e.formWrapperWidth,
        size: e.size,
        error: e.error,
        required: e.required,
        label: e.label,
        disabled: e.disabled
      }, {
        right: ae(() => [
          A(Z($e))
        ]),
        _: 1
      }, 8, ["modelValue", "formWrapperWidth", "size", "error", "required", "label", "disabled"])) : (t(), K(xe, {
        key: 1,
        type: "text",
        modelValue: $.value,
        placeholder: "Select date range",
        onClick: ne,
        readonly: "",
        formWrapperWidth: e.formWrapperWidth,
        size: e.size,
        error: e.error,
        required: e.required,
        disabled: e.disabled
      }, {
        right: ae(() => [
          A(Z($e))
        ]),
        _: 1
      }, 8, ["modelValue", "formWrapperWidth", "size", "error", "required", "disabled"])),
      (t(), K(be, { to: "body" }, [
        i.value ? (t(), o("div", {
          key: 0,
          class: "fu-date-picker__calendar-overlay",
          onClick: ue(I, ["self"])
        }, [
          a("div", {
            class: "fu-date-picker__calendar",
            style: oe(L.value),
            ref_key: "calendarRef",
            ref: y,
            onClick: T[2] || (T[2] = ue(() => {
            }, ["stop"]))
          }, [
            a("div", na, [
              A(ge, {
                variant: "ghost",
                size: "sm",
                icon: Z($e),
                onClick: B
              }, {
                default: ae(() => [
                  r.value === "days" ? (t(), o(U, { key: 0 }, [
                    ie(x(c.value.format("MMMM YYYY")), 1)
                  ], 64)) : r.value === "months" ? (t(), o(U, { key: 1 }, [
                    ie(x(c.value.year()), 1)
                  ], 64)) : (t(), o(U, { key: 2 }, [
                    ie(x(h.value) + " - " + x(z.value), 1)
                  ], 64))
                ]),
                _: 1
              }, 8, ["icon"]),
              a("div", oa, [
                A(ke, {
                  icon: Z(Pe),
                  size: "sm",
                  onClick: V
                }, null, 8, ["icon"]),
                A(ke, {
                  icon: Z(Re),
                  size: "sm",
                  onClick: R
                }, null, 8, ["icon"])
              ])
            ]),
            r.value === "days" ? (t(), o("div", aa, [
              a("div", la, [
                (t(), o(U, null, te(w, (j) => a("div", {
                  key: j,
                  class: "calendar-weekday"
                }, x(j), 1)), 64))
              ]),
              a("div", sa, [
                (t(!0), o(U, null, te(D.value, (j) => (t(), o("div", {
                  key: j.date.toString(),
                  class: q(["calendar-day", {
                    "calendar-day--other-month": !j.isCurrentMonth,
                    "calendar-day--selected": O(j.date),
                    "calendar-day--in-range": E(j.date),
                    "calendar-day--disabled": Y(j.date)
                  }]),
                  onClick: (le) => P(j.date)
                }, x(j.date.date()), 11, ia))), 128))
              ])
            ])) : r.value === "months" ? (t(), o("div", ua, [
              (t(), o(U, null, te(M, (j, le) => a("div", {
                key: j,
                class: q(["calendar-month", { "calendar-month--selected": le === c.value.month() }]),
                onClick: (Se) => X(le)
              }, x(j), 11, ra)), 64))
            ])) : (t(), o("div", da, [
              (t(!0), o(U, null, te(W.value, (j) => (t(), o("div", {
                key: j,
                class: q(["calendar-year", { "calendar-year--selected": j === c.value.year() }]),
                onClick: (le) => Q(j)
              }, x(j), 11, ca))), 128))
            ])),
            T[7] || (T[7] = a("hr", null, null, -1)),
            a("div", fa, [
              e.variant !== "date-range" ? (t(), o("div", va, [
                A(ge, {
                  variant: "outline",
                  onClick: re
                }, {
                  default: ae(() => [...T[3] || (T[3] = [
                    ie("Today", -1)
                  ])]),
                  _: 1
                }),
                A(ge, {
                  variant: "outline",
                  onClick: de
                }, {
                  default: ae(() => [...T[4] || (T[4] = [
                    ie("Tomorrow", -1)
                  ])]),
                  _: 1
                })
              ])) : S("", !0),
              e.variant === "date-range" ? (t(), o("div", ma, [
                A(ge, {
                  variant: "outline",
                  onClick: N
                }, {
                  default: ae(() => [...T[5] || (T[5] = [
                    ie("Apply", -1)
                  ])]),
                  _: 1
                })
              ])) : S("", !0),
              A(ge, {
                variant: "outline",
                onClick: pe
              }, {
                default: ae(() => [...T[6] || (T[6] = [
                  ie("Clear", -1)
                ])]),
                _: 1
              })
            ]),
            e.variant === "date-time" ? (t(), o("div", pa, [
              a("div", ha, [
                A(xe, {
                  type: "text",
                  modelValue: m.value,
                  "onUpdate:modelValue": T[0] || (T[0] = (j) => m.value = j),
                  placeholder: "HH:mm or 4:30pm",
                  onFocus: T[1] || (T[1] = (j) => s.value = !0),
                  onKeydown: De(ue(we, ["prevent"]), ["enter"]),
                  onBlur: Me,
                  formWrapperWidth: "100%"
                }, {
                  right: ae(() => [
                    A(Z($e))
                  ]),
                  _: 1
                }, 8, ["modelValue", "onKeydown"]),
                s.value ? (t(), o("div", _a, [
                  (t(!0), o(U, null, te(Ce.value, (j) => (t(), o("div", {
                    key: j,
                    class: "fu-time-option",
                    onMousedown: ue((le) => ze(j), ["prevent"])
                  }, x(j), 41, ya))), 128))
                ])) : S("", !0)
              ])
            ])) : S("", !0)
          ], 4)
        ])) : S("", !0)
      ]))
    ], 6));
  }
}, ba = /* @__PURE__ */ G(ga, [["__scopeId", "data-v-41bea5ec"]]), wa = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: ba
}, Symbol.toStringTag, { value: "Module" })), ka = { class: "calendar-header" }, $a = { class: "flex flex--gap-sm" }, Ma = { key: 0 }, Ca = { class: "calendar-weekdays" }, Sa = { class: "calendar-days" }, xa = ["onClick"], za = {
  key: 1,
  class: "calendar-months"
}, Oa = ["onClick"], Da = {
  key: 2,
  class: "calendar-years"
}, Ya = ["onClick"], Va = { class: "flex flex--space flex--gap-md px-2 pb-2" }, Ta = {
  key: 0,
  class: "flex flex--gap-sm"
}, Fa = { key: 1 }, Ba = {
  key: 3,
  class: "calendar-time"
}, Ia = { class: "fu-time-input-wrapper" }, Ea = {
  key: 0,
  class: "fu-time-dropdown customScrollBar"
}, La = ["onMousedown"], Ie = 12, Aa = {
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
  setup(e, { emit: v }) {
    se.extend(Ct);
    const n = e, s = g(!1), l = v, i = g(!1), u = g(null), d = g(null), y = g(null), c = g(se().startOf("month")), b = g(null), f = g({ start: null, end: null }), m = g("00:00"), w = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"], M = [
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
    ), z = H(() => h.value + Ie - 1), W = H(
      () => Array.from({ length: Ie }, (p, T) => h.value + T)
    ), D = H(() => {
      const p = c.value.startOf("month").startOf("week"), T = c.value.endOf("month").endOf("week"), j = [];
      let le = p.clone();
      for (; le.isBefore(T) || le.isSame(T, "day"); )
        j.push({
          date: le.clone(),
          isCurrentMonth: le.month() === c.value.month()
        }), le = le.add(1, "day");
      return j;
    });
    function Y(p) {
      return !!(n.min && p.isBefore(se(n.min), "day") || n.max && p.isAfter(se(n.max), "day"));
    }
    function O(p) {
      return n.variant === "date-range" ? f.value.start && p.isSame(f.value.start, "day") || f.value.end && p.isSame(f.value.end, "day") : b.value && p.isSame(b.value, "day");
    }
    function E(p) {
      return n.variant === "date-range" && f.value.start && f.value.end && p.isAfter(f.value.start, "day") && p.isBefore(f.value.end, "day");
    }
    function P(p) {
      if (!Y(p)) {
        if (n.variant === "date-range") {
          !f.value.start || u.value === "start" ? (f.value.start = p.clone(), f.value.end = null, u.value = "end") : p.isBefore(f.value.start, "day") ? (f.value.end = f.value.start.clone(), f.value.start = p.clone()) : f.value.end = p.clone();
          return;
        }
        b.value = p.clone(), l(
          "update:modelValue",
          n.variant === "date-time" ? b.value.format("YYYY-MM-DDTHH:mm") : b.value.format("YYYY-MM-DD")
        ), I();
      }
    }
    function N() {
      f.value.start && f.value.end && (l("update:modelValue", {
        start: f.value.start.format("YYYY-MM-DD"),
        end: f.value.end.format("YYYY-MM-DD")
      }), I());
    }
    function ne(p = null) {
      u.value = p, i.value = !0, n.variant === "date-range" ? f.value.start ? c.value = f.value.start.startOf("month") : c.value = se().startOf("month") : b.value ? c.value = b.value.startOf("month") : c.value = se().startOf("month"), ve(() => {
        _(), window.addEventListener("resize", _), window.addEventListener("click", F);
      });
    }
    function I() {
      i.value = !1, window.removeEventListener("resize", _), window.removeEventListener("click", F);
    }
    function F(p) {
      !d.value?.contains(p.target) && !y.value?.contains(p.target) && I();
    }
    const L = g({
      position: "absolute",
      top: "0px",
      left: "0px",
      zIndex: 9999
    });
    function _() {
      if (!d.value || !y.value) return;
      const p = d.value.getBoundingClientRect(), T = y.value.getBoundingClientRect(), j = window.innerHeight - p.bottom, le = p.top, Se = window.scrollY || window.pageYOffset, Ve = window.scrollX || window.pageXOffset;
      let Oe;
      j < T.height && le > T.height ? Oe = p.top + Se - T.height - 6 : Oe = p.bottom + Se + 6, L.value = {
        position: "absolute",
        top: `${Oe}px`,
        left: `${p.left + Ve}px`,
        zIndex: 9999
      };
    }
    const k = H(() => b.value ? n.variant === "date-time" ? b.value.format("YYYY-MM-DD HH:mm") : b.value.format("YYYY-MM-DD") : ""), $ = H(() => n.variant !== "date-range" ? "" : f.value.start && f.value.end ? `${f.value.start.format(
      "YYYY-MM-DD"
    )} to ${f.value.end.format("YYYY-MM-DD")}` : f.value.start ? `${f.value.start.format("YYYY-MM-DD")} to ...` : ""), C = H(() => `fu-date-picker--${n.variant}`);
    fe(
      () => n.modelValue,
      (p) => {
        if (n.variant !== "date-range") {
          if (typeof p == "string" && p) {
            const T = se(p);
            if (T.isValid()) {
              b.value = T, c.value = T.startOf("month"), n.variant === "date-time" ? m.value = T.format("h:mm A") : m.value = "00:00";
              return;
            }
          }
          (p === null || p === "") && (b.value = null, f.value = { start: null, end: null }, m.value = "00:00");
        }
      },
      { immediate: !0 }
    );
    function B() {
      r.value === "days" ? r.value = "months" : r.value === "months" ? r.value = "years" : r.value = "days";
    }
    function V() {
      r.value === "days" ? c.value = c.value.subtract(1, "month") : r.value === "months" ? c.value = c.value.subtract(1, "year") : c.value = c.value.subtract(Ie, "year");
    }
    function R() {
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
      n.variant === "date-range" ? f.value = { start: p.clone(), end: p.clone() } : (b.value = p.clone(), l(
        "update:modelValue",
        n.variant === "date-time" ? p.format("YYYY-MM-DDTHH:mm") : p.format("YYYY-MM-DD")
      ), I());
    }
    function de() {
      const p = se().add(1, "day");
      n.variant === "date-range" ? f.value = { start: p.clone(), end: p.clone() } : (b.value = p.clone(), l(
        "update:modelValue",
        n.variant === "date-time" ? p.format("YYYY-MM-DDTHH:mm") : p.format("YYYY-MM-DD")
      ), I());
    }
    function pe() {
      b.value = null, f.value = { start: null, end: null }, l(
        "update:modelValue",
        n.variant === "date-range" ? { start: null, end: null } : null
      ), I();
    }
    const ye = H(() => {
      const p = [];
      for (let T = 0; T < 24; T++)
        for (let j = 0; j < 60; j += 15)
          p.push(se().hour(T).minute(j).format("h:mm A"));
      return p;
    }), Ce = H(() => {
      if (!m.value) return ye.value;
      const p = m.value.toLowerCase().replace(/\s+/g, "");
      return ye.value.filter(
        (T) => T.toLowerCase().replace(/\s+/g, "").startsWith(p)
      );
    });
    function we() {
      if (!b.value || !m.value) return;
      const p = String(m.value).trim().toLowerCase(), T = se(
        p,
        ["h:mm a", "h:mma", "ha", "h a", "hh:mm a", "H:mm", "HH:mm", "H"],
        !0
      );
      if (!T.isValid()) {
        s.value = !1;
        return;
      }
      b.value = b.value.hour(T.hour()).minute(T.minute()), m.value = b.value.format("h:mm A"), l("update:modelValue", b.value.format("YYYY-MM-DDTHH:mm")), s.value = !1;
    }
    function ze(p) {
      m.value = p, we();
    }
    function Me() {
      setTimeout(() => {
        we(), s.value = !1;
      }, 120);
    }
    return _e(() => {
      window.removeEventListener("resize", _), window.removeEventListener("click", F);
    }), (p, T) => (t(), o("div", {
      class: q(["fu-date-picker", C.value]),
      ref_key: "pickerRef",
      ref: d,
      style: oe({ width: e.formWrapperWidth })
    }, [
      e.variant !== "date-range" ? (t(), K(xe, {
        key: 0,
        type: "text",
        modelValue: k.value,
        placeholder: "Select date",
        readonly: "",
        onClick: ne,
        formWrapperWidth: e.formWrapperWidth,
        size: e.size,
        error: e.error,
        required: e.required,
        label: e.label,
        disabled: e.disabled
      }, {
        right: ae(() => [
          A(Z($e))
        ]),
        _: 1
      }, 8, ["modelValue", "formWrapperWidth", "size", "error", "required", "label", "disabled"])) : (t(), K(xe, {
        key: 1,
        type: "text",
        modelValue: $.value,
        placeholder: "Select date range",
        onClick: ne,
        readonly: "",
        formWrapperWidth: e.formWrapperWidth,
        size: e.size,
        error: e.error,
        required: e.required,
        disabled: e.disabled
      }, {
        right: ae(() => [
          A(Z($e))
        ]),
        _: 1
      }, 8, ["modelValue", "formWrapperWidth", "size", "error", "required", "disabled"])),
      (t(), K(be, { to: "body" }, [
        i.value ? (t(), o("div", {
          key: 0,
          class: "fu-date-picker__calendar-overlay",
          onClick: ue(I, ["self"])
        }, [
          a("div", {
            class: "fu-date-picker__calendar",
            style: oe(L.value),
            ref_key: "calendarRef",
            ref: y,
            onClick: T[2] || (T[2] = ue(() => {
            }, ["stop"]))
          }, [
            a("div", ka, [
              A(ge, {
                variant: "ghost",
                size: "sm",
                onClick: B
              }, {
                default: ae(() => [
                  r.value === "days" ? (t(), o(U, { key: 0 }, [
                    ie(x(c.value.format("MMMM YYYY")), 1)
                  ], 64)) : r.value === "months" ? (t(), o(U, { key: 1 }, [
                    ie(x(c.value.year()), 1)
                  ], 64)) : (t(), o(U, { key: 2 }, [
                    ie(x(h.value) + " - " + x(z.value), 1)
                  ], 64))
                ]),
                _: 1
              }),
              a("div", $a, [
                A(ke, {
                  icon: Z(Pe),
                  size: "sm",
                  onClick: V
                }, null, 8, ["icon"]),
                A(ke, {
                  icon: Z(Re),
                  size: "sm",
                  onClick: R
                }, null, 8, ["icon"])
              ])
            ]),
            r.value === "days" ? (t(), o("div", Ma, [
              a("div", Ca, [
                (t(), o(U, null, te(w, (j) => a("div", {
                  key: j,
                  class: "calendar-weekday"
                }, x(j), 1)), 64))
              ]),
              a("div", Sa, [
                (t(!0), o(U, null, te(D.value, (j) => (t(), o("div", {
                  key: j.date.toString(),
                  class: q(["calendar-day", {
                    "calendar-day--other-month": !j.isCurrentMonth,
                    "calendar-day--selected": O(j.date),
                    "calendar-day--in-range": E(j.date),
                    "calendar-day--disabled": Y(j.date)
                  }]),
                  onClick: (le) => P(j.date)
                }, x(j.date.date()), 11, xa))), 128))
              ])
            ])) : r.value === "months" ? (t(), o("div", za, [
              (t(), o(U, null, te(M, (j, le) => a("div", {
                key: j,
                class: q(["calendar-month", { "calendar-month--selected": le === c.value.month() }]),
                onClick: (Se) => X(le)
              }, x(j), 11, Oa)), 64))
            ])) : (t(), o("div", Da, [
              (t(!0), o(U, null, te(W.value, (j) => (t(), o("div", {
                key: j,
                class: q(["calendar-year", { "calendar-year--selected": j === c.value.year() }]),
                onClick: (le) => Q(j)
              }, x(j), 11, Ya))), 128))
            ])),
            T[7] || (T[7] = a("hr", null, null, -1)),
            a("div", Va, [
              e.variant !== "date-range" ? (t(), o("div", Ta, [
                A(ge, {
                  variant: "outline",
                  onClick: re
                }, {
                  default: ae(() => [...T[3] || (T[3] = [
                    ie("Today", -1)
                  ])]),
                  _: 1
                }),
                A(ge, {
                  variant: "outline",
                  onClick: de
                }, {
                  default: ae(() => [...T[4] || (T[4] = [
                    ie("Tomorrow", -1)
                  ])]),
                  _: 1
                })
              ])) : S("", !0),
              e.variant === "date-range" ? (t(), o("div", Fa, [
                A(ge, {
                  variant: "outline",
                  onClick: N
                }, {
                  default: ae(() => [...T[5] || (T[5] = [
                    ie("Apply", -1)
                  ])]),
                  _: 1
                })
              ])) : S("", !0),
              A(ge, {
                variant: "outline",
                onClick: pe
              }, {
                default: ae(() => [...T[6] || (T[6] = [
                  ie("Clear", -1)
                ])]),
                _: 1
              })
            ]),
            e.variant === "date-time" ? (t(), o("div", Ba, [
              a("div", Ia, [
                A(xe, {
                  type: "text",
                  modelValue: m.value,
                  "onUpdate:modelValue": T[0] || (T[0] = (j) => m.value = j),
                  placeholder: "HH:mm or 4:30pm",
                  onFocus: T[1] || (T[1] = (j) => s.value = !0),
                  onKeydown: De(ue(we, ["prevent"]), ["enter"]),
                  onBlur: Me,
                  formWrapperWidth: "100%"
                }, {
                  right: ae(() => [
                    A(Z($e))
                  ]),
                  _: 1
                }, 8, ["modelValue", "onKeydown"]),
                s.value ? (t(), o("div", Ea, [
                  (t(!0), o(U, null, te(Ce.value, (j) => (t(), o("div", {
                    key: j,
                    class: "fu-time-option",
                    onMousedown: ue((le) => ze(j), ["prevent"])
                  }, x(j), 41, La))), 128))
                ])) : S("", !0)
              ])
            ])) : S("", !0)
          ], 4)
        ])) : S("", !0)
      ]))
    ], 6));
  }
}, ja = /* @__PURE__ */ G(Aa, [["__scopeId", "data-v-7bb6d1f9"]]), Pa = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: ja
}, Symbol.toStringTag, { value: "Module" })), Ra = { class: "calendar-header" }, Wa = { class: "flex flex--gap-sm" }, Ha = {
  key: 0,
  class: "calendar-months"
}, qa = ["onClick"], Na = {
  key: 1,
  class: "calendar-years"
}, Ua = ["onClick"], Ka = { class: "flex flex--space flex--gap-md px-2 pb-2" }, He = 12, Xa = {
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
  setup(e, { emit: v }) {
    const n = e, s = v, l = g(!1), i = g(null), u = g(null), d = g("months"), y = g(se().year()), c = [
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
    ], b = H(
      () => y.value - y.value % He
    ), f = H(() => b.value + He - 1), m = H(() => {
      const _ = b.value;
      return Array.from({ length: He }, (k, $) => _ + $);
    }), w = H(() => {
      if (!n.modelValue) return null;
      const _ = se(n.modelValue, "YYYY-MM", !0);
      return _.isValid() ? _ : null;
    });
    function M(_) {
      return w.value ? w.value.month() === _ && w.value.year() === y.value : !1;
    }
    function r(_) {
      const k = se(
        `${y.value}-${(_ + 1).toString().padStart(2, "0")}`,
        "YYYY-MM"
      );
      return !!(n.min && k.isBefore(se(n.min, "YYYY-MM"), "month") || n.max && k.isAfter(se(n.max, "YYYY-MM"), "month"));
    }
    function h(_) {
      y.value = _, d.value = "months";
    }
    function z(_) {
      if (r(_)) return;
      const k = se(
        `${y.value}-${(_ + 1).toString().padStart(2, "0")}`,
        "YYYY-MM"
      );
      s("update:modelValue", k.format("MMM, YYYY")), l.value = !1;
    }
    function W() {
      const _ = se();
      y.value = _.year(), s("update:modelValue", _.format("MMM, YYYY")), l.value = !1;
    }
    function D() {
      n.disabled || (l.value = !l.value, l.value ? (w.value && (y.value = w.value.year()), ve(() => {
        P(), window.addEventListener("resize", P), window.addEventListener("click", O);
      })) : (window.removeEventListener("resize", P), window.removeEventListener("click", O)));
    }
    function Y() {
      l.value = !1, window.removeEventListener("resize", P), window.removeEventListener("click", O);
    }
    function O(_) {
      !i.value?.contains(_.target) && !u.value?.contains(_.target) && Y();
    }
    const E = g({
      position: "absolute",
      top: "0px",
      left: "0px",
      zIndex: 9999
    });
    function P() {
      if (!i.value || !u.value) return;
      const _ = i.value.getBoundingClientRect(), k = u.value.getBoundingClientRect(), $ = window.innerHeight - _.bottom, C = _.top, B = window.scrollY || window.pageYOffset, V = window.scrollX || window.pageXOffset;
      let R;
      $ < k.height && C > k.height ? R = _.top + B - k.height - 6 : R = _.bottom + B + 6, E.value = {
        position: "absolute",
        top: `${R}px`,
        left: `${_.left + V}px`,
        zIndex: 9999
      };
    }
    function N() {
      d.value = d.value === "months" ? "years" : "months";
    }
    function ne() {
      d.value === "months" ? y.value-- : y.value = Math.max(b.value - He, 0);
    }
    function I() {
      d.value === "months" ? y.value++ : y.value = f.value + 1;
    }
    function F() {
      s("update:modelValue", null), l.value = !1;
    }
    const L = H(() => n.modelValue || "");
    return _e(() => {
      window.removeEventListener("resize", P), window.removeEventListener("click", O);
    }), (_, k) => (t(), o("div", {
      class: "fu-month-picker",
      ref_key: "pickerRef",
      ref: i,
      style: oe({ width: e.formWrapperWidth })
    }, [
      A(xe, {
        type: "text",
        modelValue: L.value,
        placeholder: "Select month",
        readonly: "",
        onClick: [
          D,
          ue(Y, ["self"])
        ],
        formWrapperWidth: e.formWrapperWidth,
        size: e.size,
        error: e.error,
        required: e.required,
        label: e.label,
        disabled: e.disabled
      }, {
        right: ae(() => [
          A(Z($e))
        ]),
        _: 1
      }, 8, ["modelValue", "formWrapperWidth", "size", "error", "required", "label", "disabled"]),
      (t(), K(be, { to: "body" }, [
        l.value ? (t(), o("div", {
          key: 0,
          class: "fu-month-picker__calendar-overlay",
          onClick: ue(Y, ["self"])
        }, [
          a("div", {
            class: "fu-month-picker__calendar",
            style: oe(E.value),
            ref_key: "calendarRef",
            ref: u,
            onClick: k[0] || (k[0] = ue(() => {
            }, ["stop"]))
          }, [
            a("div", Ra, [
              A(ge, {
                variant: "ghost",
                size: "sm",
                onClick: N,
                icon: Z($e)
              }, {
                default: ae(() => [
                  d.value === "months" ? (t(), o(U, { key: 0 }, [
                    ie(x(y.value), 1)
                  ], 64)) : (t(), o(U, { key: 1 }, [
                    ie(x(b.value) + " - " + x(f.value), 1)
                  ], 64))
                ]),
                _: 1
              }, 8, ["icon"]),
              a("div", Wa, [
                A(ke, {
                  icon: Z(Pe),
                  size: "sm",
                  onClick: ne
                }, null, 8, ["icon"]),
                A(ke, {
                  icon: Z(Re),
                  size: "sm",
                  onClick: I
                }, null, 8, ["icon"])
              ])
            ]),
            d.value === "months" ? (t(), o("div", Ha, [
              (t(), o(U, null, te(c, ($, C) => a("div", {
                key: $,
                class: q(["calendar-month", {
                  "calendar-month--selected": M(C),
                  "calendar-month--disabled": r(C)
                }]),
                onClick: (B) => z(C)
              }, x($), 11, qa)), 64))
            ])) : (t(), o("div", Na, [
              (t(!0), o(U, null, te(m.value, ($) => (t(), o("div", {
                key: $,
                class: q(["calendar-year", { "calendar-year--selected": $ === y.value }]),
                onClick: (C) => h($)
              }, x($), 11, Ua))), 128))
            ])),
            k[3] || (k[3] = a("hr", null, null, -1)),
            a("div", Ka, [
              A(ge, {
                variant: "outline",
                onClick: W
              }, {
                default: ae(() => [...k[1] || (k[1] = [
                  ie(" This Month ", -1)
                ])]),
                _: 1
              }),
              A(ge, {
                variant: "outline",
                onClick: F
              }, {
                default: ae(() => [...k[2] || (k[2] = [
                  ie(" Clear ", -1)
                ])]),
                _: 1
              })
            ])
          ], 4)
        ])) : S("", !0)
      ]))
    ], 4));
  }
}, Ja = /* @__PURE__ */ G(Xa, [["__scopeId", "data-v-7377986b"]]), Za = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Ja
}, Symbol.toStringTag, { value: "Module" })), Ga = { class: "calendar-header" }, Qa = { class: "flex flex--gap-sm" }, el = { key: 0 }, tl = { class: "calendar-weekdays" }, nl = { class: "calendar-days" }, ol = ["onClick"], al = {
  key: 1,
  class: "calendar-months"
}, ll = ["onClick"], sl = {
  key: 2,
  class: "calendar-years"
}, il = ["onClick"], ul = {
  key: 3,
  class: "calendar-time"
}, rl = {
  key: 0,
  class: "fu-time-dropdown customScrollBar"
}, dl = ["onMousedown"], qe = 12, cl = {
  __name: "FusionPlainDatePicker",
  props: {
    modelValue: String,
    variant: { type: String, default: "date" },
    // "date" or "date-time"
    formWrapperWidth: String
  },
  emits: ["update:modelValue"],
  setup(e, { emit: v }) {
    const n = e, s = v, l = g(se().startOf("month")), i = g(null), u = g("00:00"), d = g("days"), y = g(!1), c = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"], b = [
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
    ], f = H(
      () => Math.floor(l.value.year() / qe) * qe
    ), m = H(() => f.value + qe - 1), w = H(
      () => Array.from({ length: qe }, (F, L) => f.value + L)
    ), M = H(() => {
      const F = l.value.startOf("month").startOf("week"), L = l.value.endOf("month").endOf("week"), _ = [];
      let k = F.clone();
      for (; k.isBefore(L) || k.isSame(L, "day"); )
        _.push({
          date: k.clone(),
          isCurrentMonth: k.month() === l.value.month()
        }), k = k.add(1, "day");
      return _;
    }), r = H(() => {
      const F = [];
      for (let L = 0; L < 24; L++)
        for (let _ = 0; _ < 60; _ += 15)
          F.push(se().hour(L).minute(_).format("h:mm A"));
      return F;
    }), h = H(() => r.value), z = () => !1, W = (F) => i.value && F.isSame(i.value, "day");
    function D(F) {
      if (i.value = F.clone(), n.variant === "date-time") {
        const L = se(
          `${i.value.format("YYYY-MM-DD")} ${u.value}`,
          "YYYY-MM-DD HH:mm"
        );
        s("update:modelValue", L.format("YYYY-MM-DDTHH:mm"));
      } else
        s("update:modelValue", i.value.format("YYYY-MM-DD"));
    }
    const Y = () => l.value = l.value.subtract(1, "month"), O = () => l.value = l.value.add(1, "month"), E = () => d.value = d.value === "days" ? "months" : d.value === "months" ? "years" : "days", P = (F) => {
      l.value = l.value.month(F), d.value = "days";
    }, N = (F) => {
      l.value = l.value.year(F), d.value = "months";
    };
    function ne() {
      if (!i.value) return;
      const F = se(`${i.value.format("YYYY-MM-DD")} ${u.value}`, [
        "YYYY-MM-DD HH:mm",
        "YYYY-MM-DD h:mm A"
      ]);
      F.isValid() && (u.value = F.format("HH:mm"), s("update:modelValue", F.format("YYYY-MM-DDTHH:mm")), y.value = !1);
    }
    function I(F) {
      if (!i.value) return;
      u.value = se(F, "h:mm A").format("HH:mm");
      const L = se(
        `${i.value.format("YYYY-MM-DD")} ${u.value}`,
        "YYYY-MM-DD HH:mm"
      );
      s("update:modelValue", L.format("YYYY-MM-DDTHH:mm")), y.value = !1;
    }
    return fe(
      () => n.modelValue,
      (F) => {
        if (!F) {
          i.value = null;
          return;
        }
        const L = se(F);
        L.isValid() && (i.value = L, l.value = L.startOf("month"), n.variant === "date-time" && (u.value = L.format("HH:mm")));
      },
      { immediate: !0 }
    ), (F, L) => (t(), o("div", {
      class: "fu-date-picker fu-date-picker--plain",
      style: oe({ width: e.formWrapperWidth })
    }, [
      a("div", {
        class: "fu-date-picker",
        style: oe({ width: e.formWrapperWidth })
      }, [
        a("div", Ga, [
          a("button", { onClick: E }, [
            d.value === "days" ? (t(), o(U, { key: 0 }, [
              ie(x(l.value.format("MMMM YYYY")), 1)
            ], 64)) : d.value === "months" ? (t(), o(U, { key: 1 }, [
              ie(x(l.value.year()), 1)
            ], 64)) : (t(), o(U, { key: 2 }, [
              ie(x(f.value) + " - " + x(m.value), 1)
            ], 64))
          ]),
          a("div", Qa, [
            a("button", { onClick: Y }, [
              A(Z(Pe), {
                size: 16,
                color: "var(--fu-color-text)"
              })
            ]),
            a("button", { onClick: O }, [
              A(Z(Re), { size: 16 })
            ])
          ])
        ]),
        d.value === "days" ? (t(), o("div", el, [
          a("div", tl, [
            (t(), o(U, null, te(c, (_) => a("div", {
              key: _,
              class: "calendar-weekday"
            }, x(_), 1)), 64))
          ]),
          a("div", nl, [
            (t(!0), o(U, null, te(M.value, (_) => (t(), o("div", {
              key: _.date.toString(),
              class: q(["calendar-day", {
                "calendar-day--other-month": !_.isCurrentMonth,
                "calendar-day--selected": W(_.date),
                "calendar-day--disabled": z(_.date)
              }]),
              onClick: (k) => D(_.date)
            }, x(_.date.date()), 11, ol))), 128))
          ])
        ])) : d.value === "months" ? (t(), o("div", al, [
          (t(), o(U, null, te(b, (_, k) => a("div", {
            key: _,
            class: q(["calendar-month", { "calendar-month--selected": k === l.value.month() }]),
            onClick: ($) => P(k)
          }, x(_), 11, ll)), 64))
        ])) : (t(), o("div", sl, [
          (t(!0), o(U, null, te(w.value, (_) => (t(), o("div", {
            key: _,
            class: q(["calendar-year", { "calendar-year--selected": _ === l.value.year() }]),
            onClick: (k) => N(_)
          }, x(_), 11, il))), 128))
        ])),
        e.variant === "date-time" ? (t(), o("div", ul, [
          A(xe, {
            type: "text",
            modelValue: u.value,
            "onUpdate:modelValue": L[0] || (L[0] = (_) => u.value = _),
            placeholder: "HH:mm or 4:30pm",
            onFocus: L[1] || (L[1] = (_) => y.value = !0),
            onKeydown: De(ue(ne, ["prevent"]), ["enter"]),
            formWrapperWidth: "100%"
          }, {
            right: ae(() => [
              A(Z($e))
            ]),
            _: 1
          }, 8, ["modelValue", "onKeydown"]),
          y.value ? (t(), o("div", rl, [
            (t(!0), o(U, null, te(h.value, (_) => (t(), o("div", {
              key: _,
              class: "fu-time-option",
              onMousedown: ue((k) => I(_), ["prevent"])
            }, x(_), 41, dl))), 128))
          ])) : S("", !0)
        ])) : S("", !0)
      ], 4)
    ], 4));
  }
}, fl = /* @__PURE__ */ G(cl, [["__scopeId", "data-v-4161642e"]]), vl = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: fl
}, Symbol.toStringTag, { value: "Module" })), ml = ["onMousedown"], ft = 240, pl = {
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
  setup(e, { emit: v }) {
    const n = e, s = v, l = g(n.modelValue || ""), i = g(!1), u = g(!1), d = g(null), y = g(null), c = g({ left: 0, top: 0, bottom: 0, width: 0 }), b = g(null), f = H(() => {
      const E = [];
      for (let P = 0; P < 24; P++)
        for (let N = 0; N < 60; N += n.interval) {
          const ne = /* @__PURE__ */ new Date();
          ne.setHours(P, N, 0), E.push({
            label: ne.toLocaleTimeString([], {
              hour: "numeric",
              minute: "2-digit",
              hour12: !0
            }),
            value: `${String(P).padStart(2, "0")}:${String(N).padStart(2, "0")}`
          });
        }
      return E;
    }), m = H(
      () => l.value ? f.value.filter(
        (E) => E.label.toLowerCase().includes(l.value.toLowerCase())
      ) : f.value
    ), w = H(
      () => m.value.length ? m.value : f.value
    ), M = (E) => {
      let P = E.target.value.toLowerCase();
      P = P.replace(/[^0-9:apm]/g, "");
      const N = E.target;
      if (/^\d{2}$/.test(P)) {
        P += ":", l.value = P, ve(() => N.setSelectionRange(3, 3));
        return;
      }
      l.value = P;
    }, r = (E) => {
      if (!E) return null;
      const P = E.trim().toLowerCase().match(/^(\d{1,2})(?::(\d{2}))?\s?(am|pm)?$/);
      if (!P) return null;
      let N = parseInt(P[1], 10);
      const ne = parseInt(P[2] || "00", 10), I = P[3];
      if (I === "pm" && N < 12 && (N += 12), I === "am" && N === 12 && (N = 0), N > 23 || ne > 59) return null;
      const F = N % 12 || 12, L = N < 12 ? "am" : "pm";
      return `${String(F).padStart(2, "0")}:${String(ne).padStart(
        2,
        "0"
      )}${L}`;
    }, h = () => {
      if (!d.value) return;
      const E = d.value.getBoundingClientRect();
      c.value = {
        left: E.left,
        top: E.top,
        bottom: E.bottom,
        width: E.width
      };
      const P = window.innerHeight - E.bottom, N = E.top;
      u.value = P < ft && N > P;
    }, z = (E, P) => {
      P === 0 && E && (b.value = E);
    }, W = (E) => {
      l.value = E, s("update:modelValue", E), s("change", E), i.value = !1;
    }, D = () => {
      const E = r(l.value);
      E && (l.value = E, s("update:modelValue", E), s("change", E), i.value = !1);
    }, Y = () => setTimeout(() => {
      D(), i.value = !1;
    }, 120);
    fe(
      () => n.modelValue,
      (E) => l.value = E || ""
    ), fe(l, async () => {
      await ve(), b.value && b.value.scrollIntoView({ behavior: "smooth", block: "nearest" });
    });
    const O = () => h();
    return he(() => {
      window.addEventListener("resize", O), ve(h);
    }), _e(() => window.removeEventListener("resize", O)), (E, P) => (t(), o("div", {
      class: "fu-time-picker",
      ref_key: "inputRef",
      ref: d
    }, [
      A(xe, {
        type: "text",
        modelValue: l.value,
        "onUpdate:modelValue": P[0] || (P[0] = (N) => l.value = N),
        placeholder: "HH:mm or 4:30pm",
        onFocus: P[1] || (P[1] = (N) => {
          i.value = !0, h();
        }),
        onInput: M,
        onKeydown: De(ue(D, ["prevent"]), ["enter"]),
        onBlur: Y,
        label: e.label,
        error: e.error,
        required: e.required,
        disabled: e.disabled,
        size: e.size,
        formWrapperWidth: e.formWrapperWidth
      }, {
        right: ae(() => [
          A(Z($e))
        ]),
        _: 1
      }, 8, ["modelValue", "onKeydown", "label", "error", "required", "disabled", "size", "formWrapperWidth"]),
      (t(), K(be, { to: "body" }, [
        i.value ? (t(), o("div", {
          key: 0,
          ref_key: "dropdownRef",
          ref: y,
          class: q(["fu-time-dropdown customScrollBar", { "open-up": u.value }]),
          style: oe({
            left: c.value.left + "px",
            width: c.value.width + "px",
            top: u.value ? c.value.top - ft + "px" : c.value.bottom + "px"
          })
        }, [
          (t(!0), o(U, null, te(w.value, (N, ne) => (t(), o("div", {
            key: N.value,
            class: "fu-time-option",
            ref_for: !0,
            ref: (I) => z(I, ne),
            onMousedown: ue((I) => W(N.value), ["prevent"])
          }, x(N.label), 41, ml))), 128))
        ], 6)) : S("", !0)
      ]))
    ], 512));
  }
}, hl = /* @__PURE__ */ G(pl, [["__scopeId", "data-v-de0d9c0d"]]), _l = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: hl
}, Symbol.toStringTag, { value: "Module" })), yl = {
  key: 0,
  class: "fu-drawer"
}, gl = { class: "fu-drawer__header-content" }, bl = {
  key: 0,
  class: "fu-drawer__header-actions"
}, wl = { class: "fu-drawer__body" }, kl = { class: "fu-drawer__footer" }, $l = /* @__PURE__ */ ee({
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
  setup(e, { emit: v }) {
    const n = e, s = v;
    function l(i) {
      i.key === "Escape" && n.open && s("close");
    }
    return he(() => window.addEventListener("keydown", l)), _e(() => window.removeEventListener("keydown", l)), (i, u) => (t(), K(Ye, { name: "drawer-fade" }, {
      default: ae(() => [
        e.open ? (t(), o("div", yl, [
          a("div", {
            class: "fu-drawer__backdrop",
            onClick: u[0] || (u[0] = (d) => i.$emit("close"))
          }),
          a("div", {
            class: q(["fu-drawer__panel", [
              `fu-drawer__panel--${e.position}`,
              `fu-drawer__panel--${e.size}`,
              { "fu-drawer__panel--with-controls": e.showControls }
            ]])
          }, [
            i.$slots.header || e.showControls ? (t(), o("div", {
              key: 0,
              class: q(["fu-drawer__header", { "border-bottom-0": e.hideHeaderBorder }])
            }, [
              a("div", gl, [
                J(i.$slots, "header", {}, void 0, !0)
              ]),
              e.showControls ? (t(), o("div", bl, [
                A(ke, {
                  size: "sm",
                  variant: "subtle",
                  icon: Z(We),
                  onClick: u[1] || (u[1] = (d) => i.$emit("close"))
                }, null, 8, ["icon"])
              ])) : S("", !0)
            ], 2)) : S("", !0),
            a("div", wl, [
              J(i.$slots, "default", { class: "slot-body" }, void 0, !0)
            ]),
            a("div", {
              class: q(["fu-drawer__nav", [
                e.position === "right" ? "fu-drawer__nav--left" : "",
                e.position === "left" ? "fu-drawer__nav--right" : "",
                e.position === "bottom" ? "fu-drawer__nav--center" : ""
              ]])
            }, [
              e.canPrev ? (t(), K(ke, {
                key: 0,
                size: "sm",
                variant: "subtle",
                icon: Z(Lt),
                onClick: u[2] || (u[2] = (d) => i.$emit("prev"))
              }, null, 8, ["icon"])) : S("", !0),
              e.canNext ? (t(), K(ke, {
                key: 1,
                size: "sm",
                variant: "subtle",
                icon: Z($e),
                onClick: u[3] || (u[3] = (d) => i.$emit("next"))
              }, null, 8, ["icon"])) : S("", !0)
            ], 2),
            a("div", kl, [
              J(i.$slots, "footer", {}, void 0, !0)
            ])
          ], 2)
        ])) : S("", !0)
      ]),
      _: 3
    }));
  }
}), Ml = /* @__PURE__ */ G($l, [["__scopeId", "data-v-37927fd4"]]), Cl = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Ml
}, Symbol.toStringTag, { value: "Module" })), Sl = ["onClick"], xl = /* @__PURE__ */ ee({
  __name: "FusionDropdownButton",
  props: {
    buttonText: {},
    buttonIcon: {},
    actions: {},
    align: { default: "right" }
  },
  setup(e) {
    const v = e, n = g(!1), s = g(null), l = g(null), i = g({});
    let u = null;
    function d() {
      if (n.value = !n.value, n.value) {
        if (u && u !== s.value) {
          const m = new CustomEvent("close-other-dropdowns");
          document.dispatchEvent(m);
        }
        u = s.value, ve(y);
      }
    }
    function y() {
      const m = s.value?.querySelector("button");
      if (!m || !l.value) return;
      const w = m.getBoundingClientRect(), M = l.value.offsetWidth, r = {
        left: `${w.left}px`,
        top: `${w.bottom + 4}px`
      };
      v.align === "right" ? r.left = `${w.right - M}px` : v.align === "center" && (r.left = `${w.left + w.width / 2 - M / 2}px`), i.value = {
        position: "absolute",
        ...r,
        zIndex: "1000"
      };
    }
    function c(m) {
      m.onClick?.(), n.value = !1;
    }
    function b(m) {
      s.value && !s.value.contains(m.target) && l.value && !l.value.contains(m.target) && (n.value = !1);
    }
    function f() {
      n.value = !1;
    }
    return he(() => {
      document.addEventListener("click", b), document.addEventListener("close-other-dropdowns", f);
    }), _e(() => {
      document.removeEventListener("click", b), document.removeEventListener("close-other-dropdowns", f);
    }), (m, w) => (t(), o("div", {
      class: "fu-dropdown",
      ref_key: "dropdown",
      ref: s
    }, [
      a("button", {
        class: "fu-dropdown__button",
        onClick: d
      }, [
        ie(x(e.buttonText) + " ", 1),
        e.buttonIcon ? (t(), K(ce(e.buttonIcon), {
          key: 0,
          class: "fu-dropdown__icon"
        })) : S("", !0)
      ]),
      (t(), K(be, { to: "body" }, [
        n.value ? (t(), o("ul", {
          key: 0,
          class: q(["fu-dropdown__menu", [`fu-dropdown__menu--${e.align}`, { show: n.value }]]),
          style: oe(i.value),
          ref_key: "menuRef",
          ref: l
        }, [
          (t(!0), o(U, null, te(e.actions, (M) => (t(), o("li", {
            key: M.label
          }, [
            a("a", {
              class: "fu-dropdown__item",
              onClick: (r) => c(M)
            }, [
              M.icon ? (t(), K(ce(M.icon), {
                key: 0,
                class: "fu-dropdown__icon"
              })) : S("", !0),
              ie(" " + x(M.label), 1)
            ], 8, Sl)
          ]))), 128))
        ], 6)) : S("", !0)
      ]))
    ], 512));
  }
}), zl = /* @__PURE__ */ G(xl, [["__scopeId", "data-v-478aec9e"]]), Ol = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: zl
}, Symbol.toStringTag, { value: "Module" })), Dl = { class: "fu-dropdown-inline__wrapper" }, Yl = ["value", "placeholder"], Vl = ["onMousedown"], Tl = /* @__PURE__ */ ee({
  __name: "FusionDropdownInline",
  props: {
    modelValue: {},
    options: {},
    placeholder: {},
    isOpen: { type: Boolean }
  },
  emits: ["update:modelValue", "open", "close"],
  setup(e, { emit: v }) {
    const n = e, s = v, l = g(null), i = g(null), u = g(n.modelValue || null), d = g(!1), y = g({});
    fe(
      () => n.modelValue,
      (w) => u.value = w
    ), fe(
      () => n.isOpen,
      (w) => {
        d.value = !!w, w && m();
      }
    );
    function c() {
      d.value || s("open"), d.value = !0, m();
    }
    function b(w) {
      u.value = w, s("update:modelValue", w), s("close"), d.value = !1, i.value?.blur();
    }
    function f(w) {
      l.value && !l.value.contains(w.target) && (d.value && s("close"), d.value = !1);
    }
    function m() {
      const w = l.value;
      if (!w) return;
      const M = w.getBoundingClientRect();
      y.value = {
        position: "absolute",
        top: `${M.bottom + 4}px`,
        left: `${M.left}px`,
        width: `${M.width}px`,
        zIndex: "9999"
      };
    }
    return he(() => {
      window.addEventListener("click", f), window.addEventListener("resize", m);
    }), _e(() => {
      window.removeEventListener("click", f), window.removeEventListener("resize", m);
    }), (w, M) => (t(), o("div", {
      class: "fu-dropdown-inline",
      ref_key: "inlineRef",
      ref: l
    }, [
      a("div", Dl, [
        u.value ? (t(), o("span", {
          key: 0,
          class: "fu-dropdown-inline__dot",
          style: oe({ backgroundColor: u.value.color })
        }, null, 4)) : S("", !0),
        a("input", {
          ref_key: "inputRef",
          ref: i,
          type: "text",
          class: "fu-dropdown-inline__input",
          value: u.value?.label || "",
          placeholder: e.placeholder,
          readonly: "",
          onFocus: c
        }, null, 40, Yl)
      ]),
      (t(), K(be, { to: "body" }, [
        d.value ? (t(), o("ul", {
          key: 0,
          class: "fu-dropdown-inline__menu",
          style: oe(y.value)
        }, [
          (t(!0), o(U, null, te(e.options, (r) => (t(), o("li", {
            key: r.label,
            class: "fu-dropdown-inline__item",
            onMousedown: ue((h) => b(r), ["prevent"])
          }, [
            a("span", {
              class: "fu-dropdown-inline__dot",
              style: oe({ backgroundColor: r.color })
            }, null, 4),
            ie(" " + x(r.label), 1)
          ], 40, Vl))), 128))
        ], 4)) : S("", !0)
      ]))
    ], 512));
  }
}), Fl = /* @__PURE__ */ G(Tl, [["__scopeId", "data-v-2181a04e"]]), Bl = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Fl
}, Symbol.toStringTag, { value: "Module" })), Il = {
  key: 0,
  class: "content"
}, El = ["onClick"], Ll = /* @__PURE__ */ ee({
  __name: "DropdownMenu",
  props: {
    actions: {},
    align: { default: "right" },
    content: { type: Boolean, default: !1 },
    isOpen: { type: Boolean, default: void 0 },
    closeOnSelect: { type: Boolean, default: !1 }
  },
  emits: ["open", "close", "update:isOpen"],
  setup(e, { emit: v }) {
    const n = v, s = e, l = g(!1), i = g(null), u = g(null), d = g({
      top: "0px",
      left: "0px"
    });
    fe(
      () => s.isOpen,
      (r) => {
        typeof r == "boolean" && (l.value = r);
      }
    );
    function y(r) {
      r?.stopPropagation();
      const h = !l.value;
      h && document.dispatchEvent(new CustomEvent("close-all-dropdowns")), l.value = h, n(h ? "open" : "close"), n("update:isOpen", h), h && ve(c);
    }
    function c() {
      if (!i.value || !u.value) return;
      const r = i.value.getBoundingClientRect(), h = r.bottom + window.scrollY + 6, z = u.value.offsetWidth;
      let W = r.left + window.scrollX;
      s.align === "center" ? W += r.width / 2 - z / 2 : s.align === "right" && (W = r.right - z + window.scrollX), d.value = {
        position: "absolute",
        top: `${h}px`,
        left: `${W}px`,
        zIndex: "2000"
      };
    }
    function b(r, h) {
      r.onClick?.(), w();
    }
    function f(r) {
      l.value && i.value && !i.value.contains(r.target) && u.value && !u.value.contains(r.target) && w();
    }
    function m() {
      l.value && w();
    }
    function w() {
      l.value = !1, n("close"), n("update:isOpen", !1);
    }
    function M() {
      w();
    }
    return he(() => {
      document.addEventListener("click", f), window.addEventListener("resize", m), document.addEventListener("close-all-dropdowns", M);
    }), _e(() => {
      document.removeEventListener("click", f), window.removeEventListener("resize", m), document.removeEventListener("close-all-dropdowns", M);
    }), (r, h) => (t(), o("div", {
      class: "fu-dropdown",
      ref_key: "dropdown",
      ref: i
    }, [
      a("div", {
        class: "fu-dropdown__trigger",
        onClick: y
      }, [
        J(r.$slots, "trigger", {}, void 0, !0)
      ]),
      (t(), K(be, { to: "body" }, [
        A(Ye, { name: "fade" }, {
          default: ae(() => [
            l.value ? (t(), o("div", {
              key: 0,
              class: q(["fu-dropdown__menu", [`fu-dropdown__menu--${e.align}`]]),
              style: oe(d.value),
              ref_key: "menuRef",
              ref: u
            }, [
              e.content ? (t(), o("div", Il, [
                J(r.$slots, "content", {}, void 0, !0)
              ])) : S("", !0),
              (t(!0), o(U, null, te(e.actions, (z) => (t(), o("div", {
                class: "flex w-100",
                key: z.label
              }, [
                a("a", {
                  class: "fu-dropdown__item",
                  onClick: (W) => b(z)
                }, [
                  z.icon ? (t(), K(ce(z.icon), {
                    key: 0,
                    class: "fu-dropdown__icon"
                  })) : S("", !0),
                  ie(" " + x(z.label), 1)
                ], 8, El)
              ]))), 128))
            ], 6)) : S("", !0)
          ]),
          _: 3
        })
      ]))
    ], 512));
  }
}), Ke = /* @__PURE__ */ G(Ll, [["__scopeId", "data-v-d9e510d8"]]), Al = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Ke
}, Symbol.toStringTag, { value: "Module" })), jl = {
  key: 0,
  class: "efw-read"
}, Pl = {
  key: 1,
  class: "efw-edit"
}, Rl = { class: "efw-footer" }, Wl = { class: "efw-read" }, Hl = { class: "efw-footer" }, ql = /* @__PURE__ */ ee({
  __name: "EditableFieldWrapper",
  props: {
    modelValue: { default: () => ({}) },
    mode: { default: "inline" },
    teleportTo: { default: "body" },
    align: { default: "right" },
    disableOutsideClose: { type: Boolean, default: !1 }
  },
  setup(e, { expose: v }) {
    const n = e, s = g(!1), l = g(null), i = _t({ top: 0, left: 0 }), u = g(null), d = g(null);
    function y(M) {
      if (M === null || typeof M != "object") return M;
      const r = Ot(M);
      return Array.isArray(r) ? [...r] : r.constructor === Object ? { ...r } : r;
    }
    function c() {
      document.dispatchEvent(new CustomEvent("close-all-editors")), l.value = y(n.modelValue), s.value = !0;
    }
    function b(M) {
      if (s.value) {
        f();
        return;
      }
      document.dispatchEvent(new CustomEvent("close-all-editors")), l.value = y(n.modelValue), ve(() => {
        s.value = !0, ve(() => {
          const r = M?.currentTarget;
          if (!r || !d.value) return;
          const h = r.getBoundingClientRect(), z = d.value.offsetWidth;
          i.top = h.bottom + 6 + window.scrollY, n.align === "left" ? i.left = h.left + window.scrollX : n.align === "center" ? i.left = h.left + h.width / 2 - z / 2 + window.scrollX : i.left = h.right - z + window.scrollX;
        });
      });
    }
    function f() {
      s.value = !1;
    }
    function m() {
      s.value && f();
    }
    function w(M) {
      if (!s.value || n.disableOutsideClose) return;
      const r = M.target;
      r.closest(
        ".fu-status-dropdown, .fu-status-dropdown__menu, .fu-autocomplete-dropdown, .fu-select-dropdown, .fu-datepicker-dropdown"
      ) || (n.mode === "inline" ? u.value && !u.value.contains(r) && f() : d.value && !d.value.contains(r) && f());
    }
    return he(() => {
      document.addEventListener("close-all-editors", m), document.addEventListener("ew-close", f), document.addEventListener("pointerdown", w), window.addEventListener("resize", f);
    }), _e(() => {
      document.removeEventListener("close-all-editors", m), document.removeEventListener("ew-close", f), document.removeEventListener("pointerdown", w), window.removeEventListener("resize", f);
    }), v({
      startEditing: c,
      openTeleport: b,
      closeEditor: f
    }), (M, r) => e.mode === "inline" ? (t(), o("div", {
      key: 0,
      class: "efw-wrapper",
      ref_key: "inlineRef",
      ref: u
    }, [
      s.value ? (t(), o("div", Pl, [
        J(M.$slots, "edit", { model: l.value }, void 0, !0),
        a("div", Rl, [
          J(M.$slots, "actions", {}, void 0, !0)
        ])
      ])) : (t(), o("div", jl, [
        J(M.$slots, "read", {}, void 0, !0)
      ]))
    ], 512)) : (t(), o(U, { key: 1 }, [
      a("div", Wl, [
        J(M.$slots, "read", {}, void 0, !0)
      ]),
      (t(), K(be, { to: e.teleportTo }, [
        s.value ? (t(), o("div", {
          key: 0,
          class: "efw-teleport-card",
          ref_key: "teleportRef",
          ref: d,
          style: oe({ top: i.top + "px", left: i.left + "px" })
        }, [
          J(M.$slots, "edit", { model: l.value }, void 0, !0),
          a("div", Hl, [
            J(M.$slots, "actions", {}, void 0, !0)
          ])
        ], 4)) : S("", !0)
      ], 8, ["to"]))
    ], 64));
  }
}), Nl = /* @__PURE__ */ G(ql, [["__scopeId", "data-v-90094e16"]]), Ul = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Nl
}, Symbol.toStringTag, { value: "Module" })), Kl = { class: "fu-upload__content" }, Xl = {
  key: 0,
  class: "fu-upload__previews"
}, Jl = ["onClick"], Zl = ["src"], Gl = {
  key: 1,
  class: "fu-upload__file-fallback"
}, Ql = {
  key: 1,
  class: "fu-upload__prompt"
}, es = ["multiple", "accept"], ts = /* @__PURE__ */ ee({
  __name: "FusionUpload",
  props: {
    multiple: { type: Boolean, default: !1 },
    accept: { type: String, default: "*" },
    maxFiles: { type: Number, default: 1 / 0 },
    maxFileSizeMB: { type: Number, default: 1 / 0 }
  },
  emits: ["filesSelected", "uploadError"],
  setup(e, { emit: v }) {
    const n = e, s = v, l = g(!1), i = g(null), u = g([]), d = g([]);
    function y() {
      return typeof crypto < "u" && crypto.randomUUID ? crypto.randomUUID() : `file_${Date.now()}_${Math.random().toString(36).slice(2, 9)}`;
    }
    function c() {
      i.value?.click();
    }
    function b(M) {
      const r = M.target;
      r.files?.length && (m(r.files), r.value = "");
    }
    function f(M) {
      l.value = !1;
      const r = M.dataTransfer?.files;
      r?.length && m(r);
    }
    function m(M) {
      const r = Array.from(M);
      n.multiple || (u.value = [], d.value = []);
      for (const h of r) {
        const z = n.maxFileSizeMB * 1024 * 1024;
        if (h.size > z) {
          const Y = `File "${h.name}" exceeds max size of ${n.maxFileSizeMB} MB.`;
          s("uploadError", Y);
          continue;
        }
        if (u.value.length >= n.maxFiles) {
          const Y = `Maximum of ${n.maxFiles} files allowed.`;
          s("uploadError", Y);
          break;
        }
        u.value.push(h);
        const W = y();
        if (h.type.startsWith("image/")) {
          const Y = new FileReader();
          Y.onload = (O) => {
            d.value.push({
              id: W,
              src: O.target?.result,
              file: h,
              isImage: !0
            });
          }, Y.readAsDataURL(h);
        } else
          d.value.push({
            id: W,
            src: "",
            file: h,
            isImage: !1
          });
      }
      s("filesSelected", u.value);
    }
    function w(M) {
      u.value.splice(M, 1), d.value.splice(M, 1), s("filesSelected", u.value);
    }
    return (M, r) => (t(), o("div", {
      class: q(["fu-upload", { dragging: l.value }]),
      onClick: c,
      onDragover: r[0] || (r[0] = ue((h) => l.value = !0, ["prevent"])),
      onDragleave: r[1] || (r[1] = ue((h) => l.value = !1, ["prevent"])),
      onDrop: ue(f, ["prevent"])
    }, [
      a("div", Kl, [
        d.value.length ? (t(), o("div", Xl, [
          (t(!0), o(U, null, te(d.value, (h, z) => (t(), o("div", {
            key: h.id,
            class: "fu-upload__preview-item"
          }, [
            a("button", {
              class: "fu-upload__remove",
              onClick: ue((W) => w(z), ["stop"])
            }, " ✕ ", 8, Jl),
            h.isImage ? (t(), o("img", {
              key: 0,
              src: h.src,
              class: "fu-upload__preview-img",
              alt: "Preview"
            }, null, 8, Zl)) : (t(), o("div", Gl, [
              A(Z(rt), { size: 20 }),
              a("span", null, x(h.file.name), 1)
            ]))
          ]))), 128))
        ])) : (t(), o("div", Ql, [
          A(Z(rt), {
            class: "fu-upload__icon",
            size: 22
          }),
          J(M.$slots, "description", {}, () => [
            r[2] || (r[2] = a("p", { class: "fu-upload__text" }, " Drag & drop files or click to browse ", -1))
          ], !0)
        ])),
        a("input", {
          ref_key: "fileInput",
          ref: i,
          type: "file",
          class: "fu-upload__input",
          multiple: e.multiple,
          accept: e.accept,
          onChange: b
        }, null, 40, es)
      ])
    ], 34));
  }
}), ns = /* @__PURE__ */ G(ts, [["__scopeId", "data-v-1b1249ff"]]), os = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: ns
}, Symbol.toStringTag, { value: "Module" })), as = {
  key: 0,
  class: "fu-filter-dropdown__header"
}, ls = { class: "fu-filter-dropdown__title" }, ss = { class: "fu-filter-dropdown__body" }, is = { class: "fu-filter-dropdown__footer" }, us = /* @__PURE__ */ ee({
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
  setup(e, { emit: v }) {
    const n = e, s = v, l = g(!1), i = g(null), u = g(null), d = g({
      top: "0px",
      left: "0px"
    }), y = H(() => ({
      width: typeof n.width == "number" ? `${n.width}px` : n.width,
      maxWidth: typeof n.maxWidth == "number" ? `${n.maxWidth}px` : n.maxWidth
    }));
    fe(
      () => n.isOpen,
      (h) => {
        typeof h == "boolean" && (l.value = h, h ? (s("open"), ve(w)) : s("close"));
      }
    );
    function c(h) {
      h?.stopPropagation();
      const z = !l.value;
      z && document.dispatchEvent(new CustomEvent("close-all-dropdowns")), l.value = z, s("update:isOpen", z), z ? (s("open"), ve(w)) : s("close");
    }
    function b() {
      s("apply", n.payload), m();
    }
    function f() {
      s("cancel"), m();
    }
    function m() {
      l.value && (l.value = !1, s("update:isOpen", !1), s("close"));
    }
    function w() {
      if (!i.value || !u.value) return;
      const h = i.value.getBoundingClientRect(), z = h.bottom + window.scrollY + 8;
      let W = h.left + window.scrollX;
      n.align === "center" && (W += h.width / 2 - u.value.offsetWidth / 2), n.align === "right" && (W = h.right - u.value.offsetWidth + window.scrollX), d.value = {
        position: "absolute",
        top: `${z}px`,
        left: `${W}px`,
        zIndex: 2e3
      };
    }
    function M(h) {
      l.value && i.value && !i.value.contains(h.target) && u.value && !u.value.contains(h.target) && m();
    }
    function r() {
      m();
    }
    return he(() => {
    }), _e(() => {
      document.removeEventListener("click", M), document.removeEventListener("close-all-dropdowns", r);
    }), (h, z) => (t(), o("div", {
      class: "fu-filter-dropdown",
      ref_key: "dropdown",
      ref: i
    }, [
      a("div", {
        class: "fu-filter-dropdown__trigger",
        onClick: c
      }, [
        J(h.$slots, "trigger", {}, void 0, !0)
      ]),
      (t(), K(be, { to: "body" }, [
        A(Ye, { name: "fade" }, {
          default: ae(() => [
            l.value ? (t(), o("div", {
              key: 0,
              ref_key: "menuRef",
              ref: u,
              class: q(["fu-filter-dropdown__menu", [`fu-filter-dropdown__menu--${e.align}`]]),
              style: oe([d.value, y.value])
            }, [
              e.title ? (t(), o("div", as, [
                a("span", ls, x(e.title), 1),
                A(ke, {
                  size: "sm",
                  variant: "subtle",
                  icon: Z(We),
                  onClick: m
                }, null, 8, ["icon"])
              ])) : S("", !0),
              a("div", ss, [
                J(h.$slots, "content", {}, void 0, !0)
              ]),
              a("div", is, [
                J(h.$slots, "footer", {}, () => [
                  A(ge, {
                    variant: "subtle",
                    size: "sm",
                    text: "Cancel",
                    onClick: f
                  }),
                  A(ge, {
                    variant: "solid",
                    size: "sm",
                    text: "Apply",
                    onClick: b
                  })
                ], !0)
              ])
            ], 6)) : S("", !0)
          ]),
          _: 3
        })
      ]))
    ], 512));
  }
}), rs = /* @__PURE__ */ G(us, [["__scopeId", "data-v-6439f409"]]), ds = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: rs
}, Symbol.toStringTag, { value: "Module" })), cs = {}, fs = { class: "fu-smart-header" };
function vs(e, v) {
  return t(), o("header", fs, [
    J(e.$slots, "default", {}, void 0, !0)
  ]);
}
const ms = /* @__PURE__ */ G(cs, [["render", vs], ["__scopeId", "data-v-317a0cd5"]]), ps = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: ms
}, Symbol.toStringTag, { value: "Module" })), hs = { class: "fu-trash-icon" }, _s = /* @__PURE__ */ ee({
  __name: "FusionTrashIcon",
  setup(e) {
    return (v, n) => (t(), o("div", hs, [
      A(Z(lt), { size: 18 })
    ]));
  }
}), ys = /* @__PURE__ */ G(_s, [["__scopeId", "data-v-7cafc569"]]), gs = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: ys
}, Symbol.toStringTag, { value: "Module" })), bs = { class: "fu-activity-item" }, ws = { class: "fu-activity-icon" }, ks = { class: "fu-activity-content" }, $s = { class: "fu-activity-header" }, Ms = { class: "fu-activity-title" }, Cs = { class: "fu-activity-status" }, Ss = { class: "fu-activity-text" }, xs = { class: "fu-activity-subtitle" }, zs = { class: "fu-activity-footer" }, Os = { class: "fu-activity-timestamp" }, Ds = { class: "fu-activity-user" }, Ys = /* @__PURE__ */ ee({
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
  setup(e, { emit: v }) {
    const n = e, s = v;
    function l() {
      n.clickable && s("click");
    }
    return (i, u) => (t(), o("div", bs, [
      a("div", ws, [
        (t(), K(ce(e.icon), {
          class: "fu-activity-icon__svg",
          size: 18
        }))
      ]),
      u[0] || (u[0] = a("div", { class: "fu-activity-line" }, null, -1)),
      a("div", ks, [
        a("div", {
          class: q(["fu-activity-card", { "is-clickable": e.clickable }]),
          onClick: l
        }, [
          a("div", $s, [
            a("div", Ms, [
              a("span", Cs, [
                A(Z(wt), {
                  class: "fu-activity-status__icon",
                  size: 16
                })
              ]),
              a("p", Ss, x(e.title), 1)
            ])
          ]),
          a("p", xs, x(e.fileName), 1),
          a("div", zs, [
            a("span", Os, x(e.timestamp), 1),
            a("div", Ds, [
              A(Le, {
                src: e.userAvatar || void 0,
                name: e.userName,
                alt: e.userName,
                size: "xs",
                "show-status": !1
              }, null, 8, ["src", "name", "alt"])
            ])
          ])
        ], 2)
      ])
    ]));
  }
}), Vs = /* @__PURE__ */ G(Ys, [["__scopeId", "data-v-3de71024"]]), Ts = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Vs
}, Symbol.toStringTag, { value: "Module" })), Fs = { class: "fu-attachment-left flex flex--gap-md flex--align-center" }, Bs = { class: "fu-attachment-preview" }, Is = ["src", "alt"], Es = { class: "fu-attachment-info flex flex--column" }, Ls = { class: "fu-attachment-title" }, As = { class: "fu-attachment-meta" }, js = { class: "fu-attachment-right flex flex--align-center flex--gap-md" }, Ps = { class: "flex flex--column flex--align-center" }, Rs = { class: "fu-attachment-time" }, Ws = /* @__PURE__ */ ee({
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
  setup(e, { emit: v }) {
    const n = e, s = v;
    function l() {
      s("click", n.id);
    }
    const i = H(() => /\.(png|jpe?g|gif|webp|svg)$/i.test(n.fileName)), u = H(() => /\.(mp4|mov|avi|webm)$/i.test(n.fileName));
    return (d, y) => (t(), o("div", {
      class: "fu-attachment-item",
      role: "button",
      tabindex: "0",
      onClick: l,
      onKeypress: De(l, ["enter"])
    }, [
      a("div", Fs, [
        a("div", Bs, [
          i.value ? (t(), o("img", {
            key: 0,
            src: e.fileUrl,
            alt: e.fileName,
            class: "fu-attachment-thumbnail"
          }, null, 8, Is)) : u.value ? (t(), K(Z(Kt), {
            key: 1,
            class: "fu-attachment-icon",
            size: 20
          })) : (t(), K(Z(Ht), {
            key: 2,
            class: "fu-attachment-icon",
            size: 20
          }))
        ]),
        a("div", Es, [
          a("span", Ls, x(e.fileName), 1),
          a("span", As, x(e.fileSize), 1)
        ])
      ]),
      a("div", js, [
        a("div", Ps, [
          A(Le, {
            src: e.userAvatar || void 0,
            name: e.userName,
            alt: e.userName,
            size: "xs",
            "show-status": !1
          }, null, 8, ["src", "name", "alt"]),
          a("span", Rs, x(e.timestamp), 1)
        ]),
        e.actions?.length ? (t(), o("div", {
          key: 0,
          class: "fu-attachment-actions",
          onClick: y[0] || (y[0] = ue(() => {
          }, ["stop"]))
        }, [
          A(Ke, {
            actions: e.actions,
            align: "right"
          }, {
            trigger: ae(() => [
              A(ke, {
                icon: Z(at),
                variant: "ghost",
                size: "sm"
              }, null, 8, ["icon"])
            ]),
            _: 1
          }, 8, ["actions"])
        ])) : S("", !0)
      ])
    ], 32));
  }
}), Hs = /* @__PURE__ */ G(Ws, [["__scopeId", "data-v-c5d821de"]]), qs = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Hs
}, Symbol.toStringTag, { value: "Module" })), Ns = { class: "fu-note-header" }, Us = { class: "fu-note-title" }, Ks = ["innerHTML"], Xs = { class: "fu-note-actions" }, Js = { class: "fu-note-footer" }, Zs = { class: "fu-note-owner" }, Gs = { class: "fu-note-date" }, Qs = /* @__PURE__ */ ee({
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
    const v = g(!1);
    return (n, s) => (t(), o("div", {
      class: "fu-note-card",
      onMouseenter: s[0] || (s[0] = (l) => v.value = !0),
      onMouseleave: s[1] || (s[1] = (l) => v.value = !1),
      onClick: s[2] || (s[2] = (l) => n.$emit("open", e.id))
    }, [
      a("div", Ns, [
        a("div", Us, [
          a("h4", null, x(e.title), 1),
          e.content ? (t(), o("div", {
            key: 0,
            class: "fu-note-content",
            innerHTML: e.content
          }, null, 8, Ks)) : S("", !0)
        ]),
        a("div", Xs, [
          A(Ke, {
            actions: e.actions,
            align: "right"
          }, {
            trigger: ae(() => [
              A(ke, {
                icon: Z(at),
                variant: "ghost",
                size: "sm",
                class: "fu-action-trigger"
              }, null, 8, ["icon"])
            ]),
            _: 1
          }, 8, ["actions"])
        ])
      ]),
      a("div", Js, [
        a("div", Zs, [
          A(Le, {
            src: e.ownerAvatar || void 0,
            name: e.ownerName,
            alt: e.ownerName,
            size: "xs",
            "show-status": !1
          }, null, 8, ["src", "name", "alt"])
        ]),
        a("span", Gs, x(e.date), 1)
      ])
    ], 32));
  }
}), ei = /* @__PURE__ */ G(Qs, [["__scopeId", "data-v-2819a085"]]), ti = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: ei
}, Symbol.toStringTag, { value: "Module" })), ni = { class: "fu-task-list" }, oi = { class: "fu-task-left flex flex--gap-xl flex--align-center" }, ai = { class: "flex flex--column flex--gap-lg w-100" }, li = { class: "fu-task-title" }, si = { class: "fu-task-meta" }, ii = { class: "fu-task-priority" }, ui = { class: "fu-priority-label" }, ri = { class: "fu-task-owner" }, di = { class: "fu-task-actions" }, ci = /* @__PURE__ */ ee({
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
  setup(e, { emit: v }) {
    const n = e, s = v, l = H(() => [
      {
        label: "Edit Task",
        icon: kt,
        onClick: () => s("edit", n.id)
      },
      {
        label: "Delete Task",
        icon: lt,
        onClick: () => s("delete", n.id)
      }
    ]);
    return (i, u) => (t(), o("div", ni, [
      a("div", oi, [
        a("div", ai, [
          a("div", li, x(e.title), 1),
          a("div", si, [
            a("div", ii, [
              a("span", {
                class: "fu-priority-dot",
                style: oe({ backgroundColor: e.priorityColor || "#999" })
              }, null, 4),
              a("span", ui, x(e.priorityLabel), 1)
            ]),
            u[0] || (u[0] = a("span", { class: "fu-dot" }, null, -1)),
            a("div", ri, [
              A(Le, {
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
      a("div", di, [
        A(Ke, {
          actions: l.value,
          content: !1,
          align: "right"
        }, {
          trigger: ae(() => [
            A(ke, {
              icon: Z(at),
              variant: "subtle",
              size: "sm"
            }, null, 8, ["icon"])
          ]),
          _: 1
        }, 8, ["actions"])
      ])
    ]));
  }
}), fi = /* @__PURE__ */ G(ci, [["__scopeId", "data-v-36cc95a2"]]), vi = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: fi
}, Symbol.toStringTag, { value: "Module" })), mi = { class: "fu-kanban scrollbar__control customScrollBar" }, pi = ["draggable", "onDragstart", "onDrop"], hi = { class: "fu-kanban__column-header" }, _i = { class: "flex flex--center flex--space" }, yi = { class: "fu-kanban__column-title" }, gi = ["title"], bi = { class: "fu-kanban__header-right" }, wi = ["title", "onClick"], ki = { class: "flex flex--center flex--gap-sm" }, $i = { class: "fu-kanban__count" }, Mi = {
  key: 0,
  class: "fu-kanban__edit-body"
}, Ci = ["onDragover", "onDrop"], Si = ["onDragstart", "onDrop", "onClick"], xi = { class: "fu-kanban__card-header" }, zi = { class: "fu-kanban__card-body" }, Oi = {
  key: 0,
  class: "fu-kanban__empty"
}, Di = ["onClick"], Yi = /* @__PURE__ */ ee({
  __name: "Kanban",
  props: {
    columns: {},
    editMode: { type: Boolean },
    addItemButtonText: {},
    addColumnButtonText: {},
    noItemtext: {}
  },
  emits: ["update:columns", "update:items", "card-click", "add-item"],
  setup(e, { emit: v }) {
    const n = e, s = v, l = n.addItemButtonText || "+ Add Item", i = n.addColumnButtonText || "+ Add Stage", u = g(JSON.parse(JSON.stringify(n.columns || []))), d = g(null), y = g(null), c = g(null);
    fe(
      () => n.columns,
      (D) => {
        u.value = JSON.parse(JSON.stringify(D));
      },
      { deep: !0 }
    );
    function b(D, Y) {
      d.value = { fromColumnId: D, item: Y };
    }
    function f(D) {
      c.value = D;
    }
    function m() {
      c.value = null;
    }
    function w(D, Y) {
      const O = d.value;
      if (!O) return;
      const E = u.value.find((N) => N.id === O.fromColumnId), P = u.value.find((N) => N.id === D);
      !E || !P || (E.items = E.items.filter((N) => N.id !== O.item.id), Y === null ? P.items.push(O.item) : P.items.splice(Y, 0, O.item), s("update:items", u.value), d.value = null, c.value = null);
    }
    function M(D) {
      n.editMode && (y.value = D);
    }
    function r(D) {
      if (!n.editMode) return;
      const Y = y.value;
      if (Y === null || Y === D) return;
      const O = [...u.value], [E] = O.splice(Y, 1);
      O.splice(D, 0, E), u.value = O.map((P, N) => ({ ...P, position: N + 1 })), s("update:columns", u.value), y.value = null;
    }
    function h() {
      const D = {
        id: `col-${u.value.length + 1}`,
        title: `Stage ${u.value.length + 1}`,
        color: "#8B5CF6",
        position: u.value.length + 1,
        items: []
      };
      u.value.push(D), s("update:columns", u.value);
    }
    function z(D, Y) {
      s("add-item", { column: D, index: Y });
    }
    function W(D, Y) {
      s("card-click", { id: D.id, item: D, column: Y });
    }
    return (D, Y) => (t(), o("div", mi, [
      a("div", {
        class: "fu-kanban__columns",
        onDragover: Y[1] || (Y[1] = ue(() => {
        }, ["prevent"]))
      }, [
        (t(!0), o(U, null, te(u.value, (O, E) => (t(), o("div", {
          key: O.id,
          class: q(["fu-kanban__column", { "fu-kanban__column--drag": e.editMode }]),
          draggable: e.editMode,
          onDragstart: (P) => M(E),
          onDrop: (P) => r(E),
          onDragover: Y[0] || (Y[0] = ue(() => {
          }, ["prevent"]))
        }, [
          a("header", hi, [
            a("div", _i, [
              a("div", yi, [
                a("span", {
                  class: "fu-kanban__dot",
                  style: oe({ background: O.color || "#9ca3af" })
                }, null, 4),
                a("span", {
                  class: "fu-kanban__column-name",
                  title: O.title
                }, x(O.title), 9, gi)
              ]),
              a("div", bi, [
                a("button", {
                  class: "fu-kanban__add-item-btn",
                  title: Z(l),
                  onClick: ue((P) => z(O, E), ["stop"])
                }, " + ", 8, wi)
              ])
            ]),
            a("div", ki, [
              J(D.$slots, "column-header", {}, void 0, !0),
              a("span", $i, x(O.items.length), 1)
            ])
          ]),
          e.editMode ? (t(), o("div", Mi, [
            J(D.$slots, "edit-column", {
              column: O,
              index: E
            }, void 0, !0)
          ])) : (t(), o(U, { key: 1 }, [
            a("div", {
              class: q(["fu-kanban__cards scrollbar__control customScrollBar", { "fu-kanban__cards--hover": c.value === O.id }]),
              onDragover: ue((P) => f(O.id), ["prevent"]),
              onDragleave: m,
              onDrop: (P) => w(O.id, null)
            }, [
              (t(!0), o(U, null, te(O.items, (P, N) => (t(), o("div", {
                key: P.id,
                class: "fu-kanban__card",
                draggable: "true",
                onDragstart: (ne) => b(O.id, P),
                onDrop: (ne) => w(O.id, N),
                onClick: (ne) => W(P, O)
              }, [
                a("header", xi, [
                  a("strong", null, x(P.title), 1)
                ]),
                a("div", zi, [
                  J(D.$slots, "card-body", {
                    item: P,
                    column: O
                  }, void 0, !0)
                ])
              ], 40, Si))), 128)),
              O.items.length ? S("", !0) : (t(), o("div", Oi, x(e.noItemtext), 1))
            ], 42, Ci),
            a("button", {
              class: "fu-kanban__add-card",
              onClick: (P) => z(O, E)
            }, x(Z(l)), 9, Di)
          ], 64))
        ], 42, pi))), 128)),
        e.editMode ? (t(), o("div", {
          key: 0,
          class: "fu-kanban__add-column",
          onClick: h
        }, x(Z(i)), 1)) : S("", !0)
      ], 32)
    ]));
  }
}), Vi = /* @__PURE__ */ G(Yi, [["__scopeId", "data-v-11abb07b"]]), Ti = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Vi
}, Symbol.toStringTag, { value: "Module" })), Fi = { class: "fu-modal__header" }, Bi = { class: "fu-modal__title" }, Ii = { class: "fu-modal__body" }, Ei = {
  key: 0,
  class: "fu-modal__footer"
}, Li = /* @__PURE__ */ ee({
  __name: "FusionModal",
  props: {
    isVisible: { type: Boolean },
    title: {},
    size: { default: "md" },
    showFooter: { type: Boolean, default: !0 }
  },
  emits: ["close", "cancel", "confirm"],
  setup(e, { emit: v }) {
    const n = v, s = () => n("close");
    function l(i) {
      (i.key === "Escape" || i.key === "Esc") && s();
    }
    return he(() => {
      window.addEventListener("keydown", l);
    }), _e(() => {
      window.removeEventListener("keydown", l);
    }), (i, u) => (t(), K(be, { to: "body" }, [
      e.isVisible ? (t(), o("div", {
        key: 0,
        class: "fu-modal__backdrop",
        onClick: ue(s, ["self"])
      }, [
        a("div", {
          class: q(["fu-modal", `fu-modal--${e.size}`])
        }, [
          a("div", Fi, [
            a("h3", Bi, x(e.title), 1),
            A(ke, {
              text: " ",
              icon: Z(We),
              class: "fu-modal__close",
              onClick: s,
              variant: "ghost",
              size: "sm"
            }, null, 8, ["icon"])
          ]),
          a("div", Ii, [
            J(i.$slots, "default", {}, () => [
              u[0] || (u[0] = ie(" Default modal content. ", -1))
            ], !0)
          ]),
          e.showFooter ? (t(), o("div", Ei, [
            J(i.$slots, "footer", {}, void 0, !0)
          ])) : S("", !0)
        ], 2)
      ])) : S("", !0)
    ]));
  }
}), St = /* @__PURE__ */ G(Li, [["__scopeId", "data-v-4d75747a"]]), Ai = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: St
}, Symbol.toStringTag, { value: "Module" })), ji = { class: "app-container" }, Pi = { class: "app-shell" }, Ri = { class: "fu-topbar" }, Wi = { class: "fu-topbar-l" }, Hi = { class: "fu-topbar-c" }, qi = { class: "fu-topbar-r" }, Ni = { class: "fu-main-area" }, Ui = { class: "fu-sidebar" }, Ki = { class: "fu-menu" }, Xi = { class: "ai-panel-body" }, Ji = { class: "ai-header-actions" }, Zi = { class: "ai-content" }, Ge = 991, vt = "fu-app-ai-panel", mt = 340, Gi = 500, Qi = {
  __name: "AppShell",
  props: {
    listenToToggleEvent: { type: Boolean, default: !0 }
  },
  setup(e) {
    const v = g(!1), n = g(!0), s = g(!1), l = g(340), i = g(!1), u = g(typeof window < "u" ? window.innerWidth : 1200);
    let d = !1;
    const y = g(!1), c = e;
    function b() {
      u.value <= Ge ? (v.value = !v.value, n.value = !0) : n.value = !n.value;
    }
    function f() {
      if (u.value <= Ge) {
        y.value = !0, s.value = !1, W();
        return;
      }
      s.value = !s.value, W(), s.value && window.dispatchEvent(new Event("open-ai"));
    }
    function m() {
      l.value = i.value ? mt : Gi, i.value = !i.value, W();
    }
    function w(Y) {
      d = !0, document.body.style.cursor = "col-resize", window.addEventListener("mousemove", M), window.addEventListener("mouseup", r);
    }
    function M(Y) {
      if (!d) return;
      const O = window.innerWidth - Y.clientX;
      O > 280 && O < 600 && (l.value = O, W());
    }
    function r() {
      d = !1, document.body.style.cursor = "default", window.removeEventListener("mousemove", M), window.removeEventListener("mouseup", r);
    }
    function h() {
      u.value = window.innerWidth;
    }
    function z() {
      u.value <= Ge && v.value && (v.value = !1);
    }
    function W() {
      const Y = {
        open: s.value,
        width: l.value,
        maximized: i.value
      };
      localStorage.setItem(vt, JSON.stringify(Y));
    }
    function D() {
      const Y = localStorage.getItem(vt);
      if (Y)
        try {
          const { open: O, width: E, maximized: P } = JSON.parse(Y);
          s.value = !!O, l.value = E || mt, i.value = !!P;
        } catch (O) {
          console.warn("Failed to restore AI panel state:", O);
        }
    }
    return he(() => {
      if (D(), window.addEventListener("resize", h), c.listenToToggleEvent && window.addEventListener("toggle-ai", f), s.value) {
        const Y = () => {
          window.removeEventListener("tabs-ready", Y), ve(() => {
            s.value = !0, window.dispatchEvent(new Event("open-ai"));
          });
        };
        window.addEventListener("tabs-ready", Y);
      }
    }), (Y, O) => {
      const E = gt("FusionActionButton");
      return t(), o("div", ji, [
        a("div", Pi, [
          a("div", Ri, [
            a("div", Wi, [
              a("button", {
                class: "fu-menu-toggle",
                onClick: b
              }, [...O[2] || (O[2] = [
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
              J(Y.$slots, "brand-logo", {}, () => [
                O[3] || (O[3] = a("img", {
                  src: "https://storage.googleapis.com/skkido/logo-assets/skkido-logo-white.svg",
                  class: "fu-brand-logo",
                  alt: "Logo"
                }, null, -1))
              ])
            ]),
            a("div", Hi, [
              J(Y.$slots, "header")
            ]),
            a("div", qi, [
              J(Y.$slots, "header-right")
            ])
          ]),
          a("div", Ni, [
            a("div", {
              class: q(["fu-nav-panel", { open: v.value }])
            }, [
              a("section", Ui, [
                J(Y.$slots, "modules-sidebar")
              ]),
              Te(a("section", Ki, [
                J(Y.$slots, "module-menu")
              ], 512), [
                [nt, n.value]
              ])
            ], 2),
            a("div", {
              class: q(["fu-body-area", { "ai-open": s.value }])
            }, [
              a("div", {
                onClick: z,
                class: "fu-body-slot"
              }, [
                J(Y.$slots, "default")
              ]),
              A(Ye, { name: "slide-left" }, {
                default: ae(() => [
                  s.value ? (t(), o("div", {
                    key: 0,
                    class: "ai-panel",
                    style: oe({ width: l.value + "px" })
                  }, [
                    a("div", {
                      class: "ai-resize-handle",
                      onMousedown: w
                    }, null, 32),
                    a("div", Xi, [
                      a("header", null, [
                        O[4] || (O[4] = a("h3", null, "Àdisa", -1)),
                        a("div", Ji, [
                          A(E, {
                            icon: i.value ? Z(Nt) : Z(qt),
                            variant: "ghost",
                            size: "sm",
                            onClick: m
                          }, null, 8, ["icon"]),
                          A(E, {
                            icon: Z(We),
                            variant: "ghost",
                            size: "sm",
                            onClick: f
                          }, null, 8, ["icon"])
                        ])
                      ]),
                      a("div", Zi, [
                        J(Y.$slots, "ai-content")
                      ])
                    ])
                  ], 4)) : S("", !0)
                ]),
                _: 3
              })
            ], 2)
          ])
        ]),
        y.value ? (t(), K(St, {
          key: 0,
          isVisible: y.value,
          title: "Adisa",
          size: "sm",
          onClose: O[0] || (O[0] = (P) => y.value = !1),
          onCancel: O[1] || (O[1] = (P) => y.value = !1)
        }, {
          default: ae(() => [...O[5] || (O[5] = [
            ie(" Downlaod Skkido to use Adisa on Mobile ", -1)
          ])]),
          _: 1
        }, 8, ["isVisible"])) : S("", !0)
      ]);
    };
  }
}, eu = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Qi
}, Symbol.toStringTag, { value: "Module" })), tu = { key: 0 }, nu = {
  key: 0,
  class: "fu-listview__th fu-listview__th--checkbox"
}, ou = ["role", "tabindex", "onClick", "onKeydown"], au = { class: "fu-listview__th-label" }, lu = {
  key: 1,
  class: "fu-listview__sort-indicator"
}, su = ["onMousedown"], iu = ["onClick"], uu = { class: "fu-listview__cell" }, ru = /* @__PURE__ */ ee({
  __name: "FusionListView",
  props: {
    columns: {},
    rows: {},
    rowKey: {},
    showHeader: { type: Boolean },
    sort: {},
    options: {}
  },
  emits: ["row-selected", "row-clicked", "sort-change"],
  setup(e, { emit: v }) {
    const n = e, s = v, l = g(
      n.columns.map((I) => ({
        ...I,
        width: I.width || "150px",
        textAlign: I.textAlign || "justify",
        sortable: !!I.sortable
      }))
    ), i = g(!1), u = g(null), d = g(null), y = g(null), c = g("asc"), b = H(() => !!n.sort), f = H(
      () => b.value ? n.sort?.key ?? null : y.value
    ), m = H(
      () => b.value ? n.sort?.direction ?? "asc" : c.value
    ), w = n.showHeader ?? !0, M = () => n.options?.sortable !== !1;
    function r(I) {
      return n.options?.selectable ? n.options?.isRowSelectable ? n.options.isRowSelectable(I) : !0 : !1;
    }
    function h() {
      const I = n.rows.filter((F) => F.__selected && r(F));
      s("row-selected", I);
    }
    fe(i, (I) => {
      n.options?.selectable && (n.rows.forEach((F) => {
        r(F) && (F.__selected = I);
      }), h());
    });
    function z(I) {
      if (!M() || !I.sortable) return;
      const F = f.value, L = m.value;
      let _ = "asc";
      F === I.key && (_ = L === "asc" ? "desc" : "asc"), b.value || (y.value = I.key, c.value = _), s("sort-change", {
        key: I.key,
        direction: _
      });
    }
    function W(I) {
      s("row-clicked", I), n.options?.onRowClick?.(I);
    }
    let D = null, Y = 0, O = 0;
    function E(I, F) {
      n.options?.resizeColumn && (D = F, Y = I.clientX, O = parseInt(l.value[F].width, 10), document.addEventListener("mousemove", P), document.addEventListener("mouseup", N));
    }
    function P(I) {
      if (D === null) return;
      const F = I.clientX - Y;
      l.value[D].width = `${Math.max(60, O + F)}px`;
    }
    function N() {
      D = null, document.removeEventListener("mousemove", P), document.removeEventListener("mouseup", N);
    }
    function ne() {
      const I = d.value;
      I && (I.style.overflowY = "hidden", requestAnimationFrame(() => {
        I.style.overflowY = "auto";
      }));
    }
    return he(() => {
      ne(), window.addEventListener("resize", ne);
    }), _e(() => {
      window.removeEventListener("resize", ne), document.removeEventListener("mousemove", P), document.removeEventListener("mouseup", N);
    }), (I, F) => (t(), o("div", {
      class: "fu-listview",
      ref_key: "listviewRef",
      ref: u
    }, [
      a("div", {
        class: "fu-listview__table-wrapper customScrollBar",
        ref_key: "tableWrapper",
        ref: d
      }, [
        a("table", null, [
          Z(w) ? (t(), o("thead", tu, [
            a("tr", null, [
              e.options?.selectable ? (t(), o("th", nu, [
                A(et, {
                  modelValue: i.value,
                  "onUpdate:modelValue": F[0] || (F[0] = (L) => i.value = L),
                  size: "sm"
                }, null, 8, ["modelValue"])
              ])) : S("", !0),
              (t(!0), o(U, null, te(l.value, (L, _) => (t(), o("th", {
                key: L.key,
                style: oe({ width: L.width || "auto" }),
                class: q(["fu-listview__th", `align-${L.textAlign || "justify"}`])
              }, [
                a("div", {
                  class: q(["fu-listview__th-content", `align-${L.textAlign || "justify"}`])
                }, [
                  a("div", {
                    class: q(["fu-listview__th-sortable", {
                      "is-sortable": !!L.sortable,
                      "is-active": f.value === L.key
                    }]),
                    role: L.sortable ? "button" : void 0,
                    tabindex: L.sortable ? 0 : -1,
                    onClick: (k) => z(L),
                    onKeydown: [
                      De(ue((k) => z(L), ["prevent"]), ["enter"]),
                      De(ue((k) => z(L), ["prevent"]), ["space"])
                    ]
                  }, [
                    L.icon ? (t(), K(ce(L.icon), {
                      key: 0,
                      class: "fu-listview__th-icon"
                    })) : S("", !0),
                    a("span", au, x(L.label), 1),
                    L.sortable && f.value === L.key ? (t(), o("span", lu, x(m.value === "asc" ? "▲" : "▼"), 1)) : S("", !0)
                  ], 42, ou),
                  e.options?.resizeColumn ? (t(), o("span", {
                    key: 0,
                    class: "fu-listview__resize-handle",
                    onMousedown: ue((k) => E(k, _), ["stop"])
                  }, null, 40, su)) : S("", !0)
                ], 2)
              ], 6))), 128))
            ])
          ])) : S("", !0),
          a("tbody", null, [
            (t(!0), o(U, null, te(e.rows, (L) => (t(), o("tr", {
              key: L[e.rowKey],
              class: "fu-listview__row",
              onClick: (_) => W(L)
            }, [
              e.options?.selectable ? (t(), o("td", {
                key: 0,
                class: "fu-listview__td fu-listview__td--checkbox",
                onClick: F[1] || (F[1] = ue(() => {
                }, ["stop"]))
              }, [
                A(et, {
                  modelValue: L.__selected,
                  "onUpdate:modelValue": (_) => L.__selected = _,
                  onChange: h,
                  size: "sm",
                  disabled: !r(L)
                }, null, 8, ["modelValue", "onUpdate:modelValue", "disabled"])
              ])) : S("", !0),
              J(I.$slots, "tableRow", { row: L }, () => [
                (t(!0), o(U, null, te(l.value, (_) => (t(), o("td", {
                  key: _.key,
                  class: q(["fu-listview__td", `align-${_.textAlign || "justify"}`]),
                  style: oe({ width: _.width })
                }, [
                  J(I.$slots, `cell-${_.key}`, {
                    row: L,
                    col: _
                  }, () => [
                    a("span", uu, x(L[_.key]), 1)
                  ], !0)
                ], 6))), 128))
              ], !0)
            ], 8, iu))), 128))
          ])
        ])
      ], 512)
    ], 512));
  }
}), du = /* @__PURE__ */ G(ru, [["__scopeId", "data-v-9ba04eb3"]]), cu = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: du
}, Symbol.toStringTag, { value: "Module" })), fu = { class: "fu-confirm__body" }, vu = { class: "fu-confirm__icon" }, mu = { class: "fu-confirm__title" }, pu = { class: "fu-confirm__message" }, hu = { class: "fu-confirm__footer" }, _u = /* @__PURE__ */ ee({
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
  setup(e, { emit: v }) {
    const n = e, s = v, l = () => s("cancel"), i = () => s("confirm"), u = H(() => n.variant === "delete" ? lt : n.variant === "warning" ? Ut : wt), d = H(() => n.variant === "delete" || n.variant === "warning" ? "danger" : "solid"), y = (c) => {
      n.isVisible && (c.key === "Enter" && (c.preventDefault(), i()), c.key === "Escape" && l());
    };
    return he(() => {
      window.addEventListener("keydown", y);
    }), _e(() => {
      window.removeEventListener("keydown", y);
    }), (c, b) => (t(), K(be, { to: "body" }, [
      e.isVisible ? (t(), o("div", {
        key: 0,
        class: "fu-modal__backdrop",
        onClick: ue(l, ["self"])
      }, [
        a("div", {
          class: q(["fu-confirm", `fu-confirm--${e.variant}`])
        }, [
          a("div", fu, [
            a("div", vu, [
              (t(), K(ce(u.value)))
            ]),
            a("h3", mu, x(e.title), 1),
            a("p", pu, x(e.message), 1)
          ]),
          a("div", hu, [
            A(ge, {
              variant: "outline",
              buttonWidth: "100%",
              onClick: l
            }, {
              default: ae(() => [
                ie(x(e.cancelText), 1)
              ]),
              _: 1
            }),
            A(ge, {
              variant: d.value,
              buttonWidth: "100%",
              onClick: i
            }, {
              default: ae(() => [
                ie(x(e.confirmText), 1)
              ]),
              _: 1
            }, 8, ["variant"])
          ])
        ], 2)
      ])) : S("", !0)
    ]));
  }
}), yu = /* @__PURE__ */ G(_u, [["__scopeId", "data-v-ea4f0f2e"]]), gu = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: yu
}, Symbol.toStringTag, { value: "Module" })), bu = {
  key: 0,
  class: "fu-preview-backdrop"
}, wu = { class: "fu-preview-modal" }, ku = { class: "fu-preview-header" }, $u = { class: "fu-preview-header__left" }, Mu = { class: "fu-preview-header__right" }, Cu = { class: "fu-preview-subheader" }, Su = { class: "fu-preview-body" }, xu = /* @__PURE__ */ ee({
  __name: "FusionPreviewModal",
  props: {
    isVisible: { type: Boolean }
  },
  emits: ["close"],
  setup(e, { emit: v }) {
    const n = e, s = v, l = () => s("close");
    fe(
      () => n.isVisible,
      (u) => {
        document.body.style.overflow = u ? "hidden" : "";
      },
      { immediate: !0 }
    );
    function i(u) {
      u.key === "Escape" && l();
    }
    return he(() => {
      window.addEventListener("keydown", i);
    }), _e(() => {
      window.removeEventListener("keydown", i), document.body.style.overflow = "";
    }), (u, d) => (t(), K(be, { to: "body" }, [
      e.isVisible ? (t(), o("div", bu, [
        a("div", wu, [
          a("header", ku, [
            a("div", $u, [
              J(u.$slots, "header-left", {}, void 0, !0)
            ]),
            a("div", Mu, [
              J(u.$slots, "header-right", {}, () => [
                A(ge, {
                  variant: "subtle",
                  size: "sm",
                  text: "Close preview",
                  onClick: l
                })
              ], !0)
            ])
          ]),
          a("header", Cu, [
            J(u.$slots, "subheader", {}, void 0, !0)
          ]),
          a("main", Su, [
            J(u.$slots, "default", {}, void 0, !0)
          ])
        ])
      ])) : S("", !0)
    ]));
  }
}), zu = /* @__PURE__ */ G(xu, [["__scopeId", "data-v-fa20d496"]]), Ou = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: zu
}, Symbol.toStringTag, { value: "Module" })), Du = { class: "fu-module-menu-wrapper scrollbar__control customScrollBar" }, Yu = { class: "fu-module-menu-wrapper__list" }, Vu = {
  key: 0,
  class: "fu-module-menu-empty"
}, Tu = /* @__PURE__ */ ee({
  __name: "FusionModuleMenu",
  props: {
    items: {},
    activePath: {}
  },
  setup(e) {
    return (v, n) => {
      const s = gt("router-link");
      return t(), o("div", Du, [
        a("ul", Yu, [
          (t(!0), o(U, null, te(e.items, (l) => (t(), o("li", {
            key: l.path,
            class: q({ active: e.activePath && e.activePath.startsWith(l.path) })
          }, [
            A(s, {
              class: "fu-module-menu-link",
              to: l.path
            }, {
              default: ae(() => [
                l.icon ? (t(), K(ce(l.icon), {
                  key: 0,
                  size: 15,
                  class: "fu-module-menu-icon"
                })) : S("", !0),
                a("span", null, x(l.label), 1)
              ]),
              _: 2
            }, 1032, ["to"])
          ], 2))), 128)),
          !e.items || !e.items.length ? (t(), o("li", Vu, " No menu items ")) : S("", !0)
        ])
      ]);
    };
  }
}), Fu = /* @__PURE__ */ G(Tu, [["__scopeId", "data-v-7631f4b6"]]), Bu = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Fu
}, Symbol.toStringTag, { value: "Module" })), Iu = { class: "fu-bell-icon" }, Eu = {
  key: 2,
  class: "fu-badge"
}, Lu = /* @__PURE__ */ ee({
  __name: "FuNotification",
  props: {
    unreadCount: { default: 0 },
    bellIcon: { default: void 0 },
    align: { default: "right" },
    bellClass: { default: "" },
    bellStyle: { default: "light" }
  },
  setup(e) {
    const v = e, n = g(!1), s = g(null), l = g(null), i = g({}), u = () => {
      if (n.value = !n.value, n.value && s.value) {
        const y = s.value.getBoundingClientRect();
        let c = y.left + window.scrollX;
        v.align === "right" ? c = y.right + window.scrollX - 300 : v.align === "center" && (c = y.left + window.scrollX - 160 + y.width / 2), i.value = {
          top: `${y.bottom + window.scrollY + 8}px`,
          left: `${Math.max(c, 8)}px`,
          position: "absolute",
          zIndex: "2000"
        };
      }
    }, d = (y) => {
      const c = y.target;
      n.value && s.value && !s.value.contains(c) && (!l.value || !l.value.contains(c)) && (n.value = !1);
    };
    return he(() => document.addEventListener("click", d)), _e(() => document.removeEventListener("click", d)), (y, c) => (t(), o("div", {
      class: "fu-notification-dropdown",
      ref_key: "dropdown",
      ref: s
    }, [
      a("div", {
        class: "fu-notification__trigger",
        onClick: u
      }, [
        a("div", Iu, [
          e.bellIcon ? (t(), K(ce(e.bellIcon), {
            key: 0,
            "stroke-width": 1.5,
            class: "fu-bell-svg"
          })) : (t(), K(Z(Et), {
            key: 1,
            class: q(["fu-bell-svg", [v.bellStyle, v.bellClass]])
          }, null, 8, ["class"])),
          e.unreadCount > 0 ? (t(), o("span", Eu, x(e.unreadCount), 1)) : S("", !0)
        ])
      ]),
      (t(), K(be, { to: "body" }, [
        A(Ye, { name: "fade" }, {
          default: ae(() => [
            n.value ? (t(), o("div", {
              key: 0,
              ref_key: "panelEl",
              ref: l,
              class: "fu-notification__panel",
              style: oe(i.value)
            }, [
              J(y.$slots, "default", {}, () => [
                c[0] || (c[0] = a("div", { class: "fu-empty" }, [
                  a("h4", null, "No Content"),
                  a("p", null, "Use the default slot to pass custom dropdown body.")
                ], -1))
              ], !0)
            ], 4)) : S("", !0)
          ]),
          _: 3
        })
      ]))
    ], 512));
  }
}), Au = /* @__PURE__ */ G(Lu, [["__scopeId", "data-v-b710a214"]]), ju = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Au
}, Symbol.toStringTag, { value: "Module" })), Pu = {
  key: 0,
  class: "fu-alert__icon"
}, Ru = { class: "fu-alert__content" }, Wu = {
  key: 1,
  class: "fu-alert__actions"
}, Hu = {
  key: 2,
  class: "fu-alert__close"
}, qu = /* @__PURE__ */ ee({
  __name: "FuAlert",
  props: {
    variant: {},
    icon: { type: Boolean },
    border: { type: Boolean },
    dismissible: { type: Boolean }
  },
  setup(e) {
    const v = g(!0);
    return (n, s) => v.value ? (t(), o("div", {
      key: 0,
      class: q(["fu-alert", `fu-alert--${e.variant}`, { "fu-alert--bordered": e.border }])
    }, [
      e.icon ? (t(), o("div", Pu, [
        J(n.$slots, "icon", {}, () => [
          A(Z(At))
        ], !0)
      ])) : S("", !0),
      a("div", Ru, [
        J(n.$slots, "default", {}, void 0, !0)
      ]),
      n.$slots.actions ? (t(), o("div", Wu, [
        J(n.$slots, "actions", {}, void 0, !0)
      ])) : S("", !0),
      e.dismissible ? (t(), o("div", Hu, [
        A(ke, {
          icon: Z(We),
          size: "sm",
          variant: "ghost",
          onClick: s[0] || (s[0] = (l) => v.value = !1)
        }, null, 8, ["icon"])
      ])) : S("", !0)
    ], 2)) : S("", !0);
  }
}), Nu = /* @__PURE__ */ G(qu, [["__scopeId", "data-v-7cd3e248"]]), Uu = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Nu
}, Symbol.toStringTag, { value: "Module" })), Ku = { class: "fu-toast__content" }, Xu = { class: "fu-toast__message" }, Ju = /* @__PURE__ */ ee({
  __name: "FusionToast",
  props: {
    message: {},
    type: { default: "info" },
    duration: { default: 3500 }
  },
  setup(e) {
    const v = e, n = g(!1), s = {
      success: jt,
      error: Pt,
      info: ut,
      dark: ut
    };
    he(() => {
      n.value = !0, setTimeout(() => n.value = !1, v.duration);
    });
    function l() {
      n.value = !1;
    }
    return (i, u) => (t(), K(be, { to: "body" }, [
      A(Ye, { name: "fu-toast-fade" }, {
        default: ae(() => [
          n.value ? (t(), o("div", {
            key: 0,
            class: q(["fu-toast", [`fu-toast--${e.type}`]]),
            role: "alert"
          }, [
            a("div", Ku, [
              (t(), K(ce(s[e.type]), { class: "fu-toast__icon" })),
              a("span", Xu, x(e.message), 1),
              a("button", {
                class: "fu-toast__close",
                onClick: l
              }, "×")
            ])
          ], 2)) : S("", !0)
        ]),
        _: 1
      })
    ]));
  }
}), xt = /* @__PURE__ */ G(Ju, [["__scopeId", "data-v-9f423b9f"]]), Zu = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: xt
}, Symbol.toStringTag, { value: "Module" })), Gu = { class: "fu-pagination" }, Qu = { class: "fu-pagination__left" }, er = {
  key: 0,
  class: "fu-pagination__info"
}, tr = { class: "fu-pagination__controls" }, nr = ["disabled"], or = ["disabled", "onClick"], ar = ["disabled"], lr = /* @__PURE__ */ ee({
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
  setup(e, { emit: v }) {
    const n = e, s = v, l = H(
      () => n.pageSizeOptions.map((m) => ({
        label: String(m),
        value: m
      }))
    ), i = H({
      get() {
        return l.value.find((m) => m.value === n.pageSize) || l.value[0];
      },
      set(m) {
        s("update:pageSize", m.value), s("update:page", 1);
      }
    }), u = H(() => Math.max(1, Math.ceil(n.total / n.pageSize))), d = H(
      () => n.total === 0 ? 0 : (n.page - 1) * n.pageSize + 1
    ), y = H(() => Math.min(n.page * n.pageSize, n.total));
    function c(m) {
      m < 1 || m > u.value || s("update:page", m);
    }
    function b(m) {
      m && c(m);
    }
    const f = H(() => {
      const m = [], w = u.value, M = n.page, r = n.siblingCount, h = Math.max(2, M - r), z = Math.min(w - 1, M + r);
      m.push({ key: "p-1", label: "1", page: 1 }), h > 2 && m.push({ key: "e-left", label: "…", ellipsis: !0 });
      for (let W = h; W <= z; W++)
        m.push({ key: `p-${W}`, label: String(W), page: W });
      return z < w - 1 && m.push({ key: "e-right", label: "…", ellipsis: !0 }), w > 1 && m.push({ key: `p-${w}`, label: String(w), page: w }), m;
    });
    return (m, w) => (t(), o("div", Gu, [
      a("div", Qu, [
        e.showInfo ? (t(), o("div", er, x(d.value) + "–" + x(y.value) + " of " + x(e.total), 1)) : S("", !0),
        e.showPageSize ? (t(), K($t, {
          key: 1,
          modelValue: i.value,
          "onUpdate:modelValue": w[0] || (w[0] = (M) => i.value = M),
          options: l.value,
          align: "left",
          size: "sm"
        }, null, 8, ["modelValue", "options"])) : S("", !0)
      ]),
      a("div", tr, [
        a("button", {
          class: "fu-pagination__btn",
          disabled: e.page <= 1,
          onClick: w[1] || (w[1] = (M) => c(e.page - 1)),
          "aria-label": "Previous page"
        }, [
          A(Z(Pe), { class: "fu-pagination__icon" })
        ], 8, nr),
        e.variant !== "simple" ? (t(!0), o(U, { key: 0 }, te(f.value, (M) => (t(), o("button", {
          key: M.key,
          class: q(["fu-pagination__btn", { active: M.page === e.page, ellipsis: M.ellipsis }]),
          disabled: !!M.ellipsis,
          onClick: (r) => b(M.page)
        }, x(M.label), 11, or))), 128)) : S("", !0),
        a("button", {
          class: "fu-pagination__btn",
          disabled: e.page >= u.value,
          onClick: w[2] || (w[2] = (M) => c(e.page + 1)),
          "aria-label": "Next page"
        }, [
          A(Z(Re), { class: "fu-pagination__icon" })
        ], 8, ar)
      ])
    ]));
  }
}), sr = /* @__PURE__ */ G(lr, [["__scopeId", "data-v-209f4783"]]), ir = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: sr
}, Symbol.toStringTag, { value: "Module" })), ur = {
  key: 0,
  class: "fu-panel__header px-2"
}, rr = {
  key: 0,
  class: "fu-panel__title"
}, dr = {
  key: 1,
  class: "fu-panel__actions"
}, cr = { class: "fu-panel__body-wrapper" }, fr = { class: "fu-panel__body scrollbar__control customScrollBar px-2" }, vr = /* @__PURE__ */ ee({
  __name: "FuPanel",
  props: {
    title: {},
    basis: {}
  },
  setup(e) {
    const v = e, n = H(() => v.basis ? typeof v.basis == "number" ? `${v.basis}px` : v.basis : "300px");
    return (s, l) => (t(), o("div", {
      class: "fu-panel",
      style: oe({ flexBasis: n.value })
    }, [
      e.title || s.$slots.actions ? (t(), o("div", ur, [
        e.title ? (t(), o("h3", rr, x(e.title), 1)) : S("", !0),
        s.$slots.actions ? (t(), o("div", dr, [
          J(s.$slots, "actions")
        ])) : S("", !0)
      ])) : S("", !0),
      a("div", cr, [
        a("div", fr, [
          J(s.$slots, "default")
        ])
      ])
    ], 4));
  }
}), mr = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: vr
}, Symbol.toStringTag, { value: "Module" })), pr = {
  key: 0,
  class: "fu-input-label"
}, hr = {
  key: 0,
  class: "fu-input-required"
}, _r = ["type", "placeholder", "disabled", "required"], yr = {
  key: 1,
  class: "fu-input-error"
}, gr = /* @__PURE__ */ ee({
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
  setup(e, { emit: v }) {
    const n = e, s = v, l = g(n.modelValue), i = g(!1), u = () => {
      i.value = !i.value;
    };
    return fe(l, (d) => s("update:modelValue", d)), fe(() => n.modelValue, (d) => l.value = d), (d, y) => (t(), o("div", {
      class: "fu-input-wrapper",
      style: oe({ width: e.formWrapperWidth })
    }, [
      e.label ? (t(), o("label", pr, [
        ie(x(e.label) + " ", 1),
        e.required ? (t(), o("span", hr, "*")) : S("", !0)
      ])) : S("", !0),
      a("div", {
        class: q(["fu-input-container", [
          `fu-input--${e.size}`,
          `fu-input--${e.variant}`,
          { "fu-input--error": e.error }
        ]])
      }, [
        Te(a("input", tt(d.$attrs, {
          class: "fu-input",
          type: i.value ? "text" : "password",
          placeholder: e.placeholder,
          disabled: e.disabled,
          required: e.required,
          "onUpdate:modelValue": y[0] || (y[0] = (c) => l.value = c)
        }), null, 16, _r), [
          [yt, l.value]
        ]),
        a("button", {
          type: "button",
          class: "fu-password-toggle",
          onClick: u
        }, [
          (t(), K(ce(i.value ? Z(Rt) : Z(Wt)), { class: "fu-password-icon" }))
        ])
      ], 2),
      e.error ? (t(), o("span", yr, x(e.error), 1)) : S("", !0)
    ], 4));
  }
}), br = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: gr
}, Symbol.toStringTag, { value: "Module" })), wr = { class: "fu-progress-stepper" }, kr = { class: "fu-progress-bar" }, $r = {
  key: 0,
  class: "fu-step-labels"
}, Mr = ["onClick"], Cr = { class: "circle" }, Sr = { class: "label" }, xr = /* @__PURE__ */ ee({
  __name: "FusionProgressStepper",
  props: {
    currentStep: {},
    totalSteps: {},
    showLabels: { type: Boolean },
    steps: {}
  },
  emits: ["step-click"],
  setup(e, { emit: v }) {
    const n = e, s = v, l = H(
      () => `${(n.currentStep + 1) / n.totalSteps * 100}%`
    ), i = (u) => s("step-click", u);
    return (u, d) => (t(), o("div", wr, [
      a("div", kr, [
        a("div", {
          class: "fu-progress-fill",
          style: oe({ width: l.value })
        }, null, 4)
      ]),
      e.showLabels && e.steps ? (t(), o("div", $r, [
        (t(!0), o(U, null, te(e.steps, (y, c) => (t(), o("div", {
          key: c,
          class: q(["fu-step-label", { active: e.currentStep === c }]),
          onClick: (b) => i(c)
        }, [
          a("div", Cr, x(c + 1), 1),
          a("div", Sr, x(y.title), 1)
        ], 10, Mr))), 128))
      ])) : S("", !0)
    ]));
  }
}), zr = /* @__PURE__ */ G(xr, [["__scopeId", "data-v-6ac0e869"]]), Or = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: zr
}, Symbol.toStringTag, { value: "Module" })), Dr = ["value", "disabled", "checked"], Yr = { class: "fu-radio__control" }, Vr = {
  key: 0,
  class: "fu-radio__dot"
}, Tr = {
  key: 0,
  class: "fu-radio__label"
}, Fr = /* @__PURE__ */ ee({
  __name: "FusionRadio",
  props: {
    modelValue: {},
    value: {},
    size: { default: "md" },
    disabled: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: v }) {
    const n = e, s = v, l = H({
      get: () => n.modelValue,
      set: (u) => s("update:modelValue", u)
    }), i = H(() => l.value === n.value);
    return (u, d) => (t(), o("label", {
      class: q(["fu-radio", [`fu-radio--${e.size}`, { "is-checked": i.value, "is-disabled": e.disabled }]])
    }, [
      a("input", {
        type: "radio",
        class: "fu-radio__input",
        value: e.value,
        disabled: e.disabled,
        checked: i.value,
        onChange: d[0] || (d[0] = (y) => s("update:modelValue", e.value))
      }, null, 40, Dr),
      a("span", Yr, [
        i.value ? (t(), o("span", Vr)) : S("", !0)
      ]),
      u.$slots.default ? (t(), o("span", Tr, [
        J(u.$slots, "default", {}, void 0, !0)
      ])) : S("", !0)
    ], 2));
  }
}), Br = /* @__PURE__ */ G(Fr, [["__scopeId", "data-v-3c5ecc5b"]]), Ir = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Br
}, Symbol.toStringTag, { value: "Module" })), Er = { class: "fu-range-control" }, Lr = {
  key: 0,
  class: "fu-range-label"
}, Ar = { class: "fu-range-track" }, jr = ["min", "max", "step", "value"], Pr = { class: "fu-range-value" }, Rr = /* @__PURE__ */ ee({
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
  setup(e, { emit: v }) {
    const n = e, s = v;
    function l(u) {
      const d = u.target, y = Number(d.value);
      s("update:modelValue", y), s("change", y);
    }
    const i = H(
      () => n.unit ? `${n.modelValue}${n.unit}` : String(n.modelValue)
    );
    return (u, d) => (t(), o("div", Er, [
      e.label ? (t(), o("label", Lr, x(e.label), 1)) : S("", !0),
      a("div", Ar, [
        a("input", {
          type: "range",
          min: e.min,
          max: e.max,
          step: e.step,
          value: e.modelValue,
          onInput: l
        }, null, 40, jr),
        a("span", Pr, x(i.value), 1)
      ])
    ]));
  }
}), Wr = /* @__PURE__ */ G(Rr, [["__scopeId", "data-v-9c1e4c91"]]), Hr = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Wr
}, Symbol.toStringTag, { value: "Module" })), qr = {}, Nr = { class: "fu-section-header" }, Ur = { class: "fu-section-header__left" }, Kr = { class: "fu-section-header__right" };
function Xr(e, v) {
  return t(), o("div", Nr, [
    a("div", Ur, [
      J(e.$slots, "left", {}, void 0, !0)
    ]),
    a("div", Kr, [
      J(e.$slots, "right", {}, void 0, !0)
    ])
  ]);
}
const Jr = /* @__PURE__ */ G(qr, [["render", Xr], ["__scopeId", "data-v-b7f6e763"]]), Zr = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Jr
}, Symbol.toStringTag, { value: "Module" })), Gr = { class: "fu-sidebar__list" }, Qr = ["onClick"], ed = { class: "fu-sidebar__icon-wrapper" }, td = {
  key: 0,
  class: "fu-sidebar__badge"
}, nd = { class: "fu-sidebar__label" }, od = /* @__PURE__ */ ee({
  __name: "FusionSidebar",
  props: {
    modules: {},
    activeModule: {},
    backgroundColor: {},
    borderRadius: {}
  },
  emits: ["select"],
  setup(e) {
    const v = e, n = H(() => ({
      "--fu-sidebar-bg": v.backgroundColor ?? "var(--fu-brand-background)",
      "--fu-sidebar-radius": v.borderRadius ?? "0px"
    }));
    return (s, l) => (t(), o("nav", {
      class: "fu-sidebar",
      style: oe(n.value)
    }, [
      a("ul", Gr, [
        (t(!0), o(U, null, te(e.modules, (i) => (t(), o("li", {
          key: i.name,
          class: q({ active: e.activeModule === i.name })
        }, [
          a("div", {
            class: "fu-sidebar__item",
            onClick: (u) => s.$emit("select", i)
          }, [
            a("div", ed, [
              (t(), K(ce(i.icon), {
                class: "fu-sidebar__icon",
                size: 20
              })),
              i.count ? (t(), o("span", td, x(i.count > 99 ? "99+" : i.count), 1)) : S("", !0)
            ]),
            a("span", nd, x(i.label), 1)
          ], 8, Qr)
        ], 2))), 128))
      ])
    ], 4));
  }
}), ad = /* @__PURE__ */ G(od, [["__scopeId", "data-v-dfe88081"]]), ld = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: ad
}, Symbol.toStringTag, { value: "Module" })), sd = ["disabled", "aria-expanded"], id = ["aria-expanded", "disabled"], ud = ["onClick"], rd = ["src"], dd = { class: "fu-split-button__option-label" }, cd = /* @__PURE__ */ ee({
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
  setup(e, { emit: v }) {
    const n = e, s = v, l = g(!1), i = g(null), u = g(null), d = H(() => n.align ?? "right"), y = g({}), c = H(() => `fu-split-button--${n.size ?? "sm"}`), b = H(() => `fu-split-button--${n.variant ?? "solid"}`), f = H(() => ({
      ...n.color ? { "--fu-split-bg": n.color } : {},
      ...n.buttonWidth ? { width: n.buttonWidth } : {}
    }));
    function m() {
      n.disabled || (l.value = !l.value, l.value && ve(() => {
        w(), window.addEventListener("click", M), window.addEventListener("resize", w);
      }));
    }
    function w() {
      if (!u.value || !i.value) return;
      const z = u.value.getBoundingClientRect(), W = i.value.offsetWidth, D = {
        top: `${z.bottom + window.scrollY + 4}px`,
        left: `${z.left + window.scrollX}px`
      };
      d.value === "right" ? D.left = `${z.right - W + window.scrollX}px` : d.value === "center" && (D.left = `${z.left + z.width / 2 - W / 2 + window.scrollX}px`), y.value = {
        position: "absolute",
        ...D,
        zIndex: "1000"
      };
    }
    function M(z) {
      u.value?.contains(z.target) || i.value?.contains(z.target) || (l.value = !1, window.removeEventListener("click", M), window.removeEventListener("resize", w));
    }
    function r() {
      n.disabled || s("main-action");
    }
    function h(z) {
      s("select", z), l.value = !1;
    }
    return he(() => {
      _e(() => {
        window.removeEventListener("click", M), window.removeEventListener("resize", w);
      });
    }), (z, W) => (t(), o("div", {
      class: q(["fu-split-button", [c.value, b.value]]),
      style: oe(f.value),
      ref_key: "splitButtonRef",
      ref: u
    }, [
      a("button", {
        class: "fu-split-button__main",
        disabled: e.disabled,
        onClick: r,
        type: "button",
        "aria-haspopup": "true",
        "aria-expanded": l.value
      }, [
        e.icon ? (t(), K(ce(e.icon), {
          key: 0,
          class: "fu-split-button__icon"
        })) : S("", !0),
        a("span", null, [
          J(z.$slots, "default", {}, void 0, !0)
        ])
      ], 8, sd),
      a("button", {
        class: "fu-split-button__toggle",
        onClick: m,
        "aria-expanded": l.value,
        disabled: e.disabled,
        type: "button",
        "aria-label": "Toggle dropdown"
      }, [
        A(Z($e))
      ], 8, id),
      (t(), K(be, { to: "body" }, [
        A(Ye, { name: "fade" }, {
          default: ae(() => [
            l.value ? (t(), o("div", {
              key: 0,
              class: q(["fu-split-button__dropdown", [`fu-split-button__dropdown--${d.value}`]]),
              ref_key: "dropdownRef",
              ref: i,
              style: oe(y.value)
            }, [
              (t(!0), o(U, null, te(e.options, (D) => (t(), o("div", {
                key: D.value,
                class: "fu-split-button__option",
                onClick: (Y) => h(D)
              }, [
                D.type === "icon" ? (t(), K(ce(D.icon), {
                  key: 0,
                  class: "fu-split-button__option-icon"
                })) : D.type === "image" ? (t(), o("img", {
                  key: 1,
                  src: D.imageUrl,
                  class: "fu-split-button__option-image",
                  alt: ""
                }, null, 8, rd)) : S("", !0),
                a("span", dd, x(D.label), 1)
              ], 8, ud))), 128))
            ], 6)) : S("", !0)
          ]),
          _: 1
        })
      ]))
    ], 6));
  }
}), fd = /* @__PURE__ */ G(cd, [["__scopeId", "data-v-c4af5250"]]), vd = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: fd
}, Symbol.toStringTag, { value: "Module" })), md = ["aria-checked", "disabled"], pd = /* @__PURE__ */ ee({
  __name: "FusionSwitch",
  props: {
    modelValue: { type: Boolean },
    disabled: { type: Boolean },
    size: {}
  },
  emits: ["update:modelValue"],
  setup(e, { emit: v }) {
    const n = e, s = v;
    function l() {
      n.disabled || s("update:modelValue", !n.modelValue);
    }
    const i = H(() => {
      switch (n.size) {
        case "sm":
          return "fu-switch--sm";
        case "lg":
          return "fu-switch--lg";
        default:
          return "fu-switch--md";
      }
    });
    return (u, d) => (t(), o("button", {
      type: "button",
      class: q(["fu-switch", [{ "fu-switch--checked": e.modelValue, disabled: e.disabled }, i.value]]),
      role: "switch",
      "aria-checked": e.modelValue,
      disabled: e.disabled,
      onClick: l
    }, [...d[0] || (d[0] = [
      a("span", { class: "fu-switch__thumb" }, null, -1)
    ])], 10, md));
  }
}), hd = /* @__PURE__ */ G(pd, [["__scopeId", "data-v-c8285d1a"]]), _d = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: hd
}, Symbol.toStringTag, { value: "Module" })), yd = { class: "fu-tabs" }, gd = { class: "fu-tabs__header-wrapper" }, bd = { class: "fu-tabs-buttons scrollbar__control customScrollBar" }, wd = ["onClick", "disabled"], kd = {
  key: 0,
  class: "fu-tab__avatar"
}, $d = ["src"], Md = {
  key: 1,
  class: "fu-tab__avatar-fallback"
}, Cd = {
  key: 2,
  class: "fu-tab__title"
}, Sd = {
  key: 3,
  class: "fu-tab__count"
}, xd = { class: "fu-tabs__content-wrapper" }, zd = {
  key: 0,
  class: "fu-tabs__footer"
}, Od = {
  __name: "FusionTab",
  props: {
    tabs: Array,
    defaultActiveDesktop: String,
    defaultActiveMobile: String
  },
  emits: ["tab-change"],
  setup(e, { expose: v, emit: n }) {
    const s = e, l = n, i = g(window.innerWidth <= 768), u = g(""), d = g(null), y = H(
      () => s.tabs.filter((w) => !w.mobileOnly || i.value)
    );
    function c() {
      const w = d.value;
      w && (w.style.overflowY = "hidden", requestAnimationFrame(() => {
        w.style.overflowY = "auto";
      }));
    }
    function b(w) {
      const M = s.tabs.find((r) => r.key === w);
      !M || M.disabled || (u.value = w, l("tab-change", w), ve(() => {
        const r = d.value;
        r && (r.scrollTop = 0, c());
      }));
    }
    function f() {
      const w = s.tabs[0]?.key, M = i.value ? s.defaultActiveMobile || w : s.defaultActiveDesktop || w;
      u.value = M;
    }
    function m() {
      const w = i.value;
      i.value = window.innerWidth <= 768, w !== i.value && ve(f);
    }
    return he(() => {
      m(), f(), c(), window.addEventListener("resize", m);
    }), _e(() => {
      window.removeEventListener("resize", m);
    }), v({ setActive: b }), (w, M) => (t(), o("div", yd, [
      a("div", gd, [
        a("div", bd, [
          (t(!0), o(U, null, te(y.value, (r) => (t(), o("button", {
            key: r.key,
            onClick: (h) => b(r.key),
            class: q(["fu-tab", { "fu-tab--active": u.value === r.key }]),
            disabled: r.disabled
          }, [
            r.avatarSrc || r.avatarText ? (t(), o("div", kd, [
              r.avatarSrc ? (t(), o("img", {
                key: 0,
                src: r.avatarSrc,
                class: "fu-tab__avatar-img",
                alt: "avatar"
              }, null, 8, $d)) : (t(), o("div", Md, x(r.avatarText?.charAt(0)?.toUpperCase()), 1))
            ])) : r.icon ? (t(), K(ce(r.icon), {
              key: 1,
              size: 16,
              class: "fu-tab__icon"
            })) : S("", !0),
            !r.avatarSrc && !r.avatarText && r.title ? (t(), o("span", Cd, x(r.title), 1)) : S("", !0),
            typeof r.count == "number" ? (t(), o("span", Sd, x(r.count), 1)) : S("", !0)
          ], 10, wd))), 128))
        ])
      ]),
      a("div", xd, [
        a("div", {
          class: "fu-tabs__body scrollbar__control customScrollBar",
          ref_key: "tabBody",
          ref: d
        }, [
          (t(), K(Dt, null, [
            (t(!0), o(U, null, te(y.value, (r) => Te((t(), o("div", {
              key: r.key,
              class: "fu-tab-panel"
            }, [
              J(w.$slots, r.key, {}, void 0, !0)
            ])), [
              [nt, u.value === r.key]
            ])), 128))
          ], 1024))
        ], 512),
        w.$slots.footer ? (t(), o("div", zd, [
          J(w.$slots, "footer", {}, void 0, !0)
        ])) : S("", !0)
      ])
    ]));
  }
}, Dd = /* @__PURE__ */ G(Od, [["__scopeId", "data-v-b6516c96"]]), Yd = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Dd
}, Symbol.toStringTag, { value: "Module" })), Vd = { class: "fu-textarea-wrapper" }, Td = {
  key: 0,
  class: "fu-textarea-label"
}, Fd = {
  key: 0,
  class: "fu-textarea-required"
}, Bd = ["placeholder", "disabled", "rows", "required"], Id = {
  key: 1,
  class: "fu-textarea-error"
}, Ed = /* @__PURE__ */ ee({
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
  setup(e, { emit: v }) {
    const n = e, s = v, l = g(n.modelValue);
    return fe(l, (i) => s("update:modelValue", i)), fe(
      () => n.modelValue,
      (i) => l.value = i
    ), (i, u) => (t(), o("div", Vd, [
      e.label ? (t(), o("label", Td, [
        ie(x(e.label) + " ", 1),
        e.required ? (t(), o("span", Fd, "*")) : S("", !0)
      ])) : S("", !0),
      Te(a("textarea", tt(i.$attrs, {
        class: ["fu-textarea fu-form-control", [
          `fu-textarea--${e.size}`,
          { "fu-textarea--error": e.error },
          e.variant ? `fu-textarea--${e.variant}` : null
        ]],
        placeholder: e.placeholder,
        disabled: e.disabled,
        rows: e.rows,
        required: e.required,
        "onUpdate:modelValue": u[0] || (u[0] = (d) => l.value = d)
      }), null, 16, Bd), [
        [ot, l.value]
      ]),
      e.error ? (t(), o("span", Id, x(e.error), 1)) : S("", !0)
    ]));
  }
}), Ld = /* @__PURE__ */ G(Ed, [["__scopeId", "data-v-3beafd95"]]), Ad = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Ld
}, Symbol.toStringTag, { value: "Module" })), jd = { class: "fu-theme-selector" }, Pd = { class: "fu-theme-grid" }, Rd = ["onClick"], Wd = {
  key: 0,
  class: "fu-theme-check"
}, Hd = { class: "fu-theme-label" }, qd = /* @__PURE__ */ ee({
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
  setup(e, { emit: v }) {
    const n = v;
    function s(l) {
      n("update:modelValue", l);
    }
    return (l, i) => (t(), o("div", jd, [
      a("div", Pd, [
        (t(!0), o(U, null, te(e.themes, (u) => (t(), o("div", {
          key: u.key,
          class: q(["fu-theme-card", { "is-active": e.modelValue === u.key }]),
          onClick: (d) => s(u.key),
          tabindex: "0",
          role: "button"
        }, [
          a("div", {
            class: q(["fu-theme-preview", `fu-theme-preview--${u.key}`])
          }, [
            i[0] || (i[0] = a("div", { class: "fu-theme-header" }, null, -1)),
            i[1] || (i[1] = a("div", { class: "fu-theme-body" }, null, -1)),
            i[2] || (i[2] = a("div", { class: "fu-theme-footer" }, null, -1)),
            e.modelValue === u.key ? (t(), o("div", Wd, [
              A(Z(bt), { class: "fu-check-icon" })
            ])) : S("", !0)
          ], 2),
          a("span", Hd, x(u.name), 1)
        ], 10, Rd))), 128))
      ])
    ]));
  }
}), Nd = /* @__PURE__ */ G(qd, [["__scopeId", "data-v-43c6ff7c"]]), Ud = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Nd
}, Symbol.toStringTag, { value: "Module" })), Kd = { class: "fu-toolbar__left" }, Xd = { class: "fu-toolbar__actions" }, Jd = /* @__PURE__ */ ee({
  __name: "FusionToolbar",
  props: {
    wrap: { type: Boolean, default: !0 },
    gap: { type: String, default: "md" },
    align: { type: String, default: "center" }
  },
  setup(e) {
    const v = e, n = H(() => ({
      "flex--wrap": v.wrap,
      [`flex--gap-${v.gap}`]: !!v.gap,
      [`align--${v.align}`]: !!v.align
    }));
    return (s, l) => (t(), o("div", {
      class: q(["fu-toolbar", n.value])
    }, [
      a("div", Kd, [
        J(s.$slots, "left", {}, void 0, !0)
      ]),
      a("div", Xd, [
        J(s.$slots, "right", {}, void 0, !0)
      ])
    ], 2));
  }
}), Zd = /* @__PURE__ */ G(Jd, [["__scopeId", "data-v-aa44a495"]]), Gd = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Zd
}, Symbol.toStringTag, { value: "Module" }));
function pt() {
  return ({ message: e, type: v = "info", duration: n = 3500 }) => {
    const s = document.createElement("div");
    document.body.appendChild(s);
    const l = Yt(xt, { message: e, type: v, duration: n });
    l.mount(s), setTimeout(() => {
      l.unmount(), document.body.removeChild(s);
    }, n + 500);
  };
}
const zt = localStorage.getItem("theme") || "auto", Fe = g(zt);
function Qd() {
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}
function je(e, v = !1) {
  const n = e === "auto" ? Qd() : e;
  if (v) {
    document.documentElement.setAttribute("data-theme", n);
    return;
  }
  document.documentElement.setAttribute("data-theme", n), localStorage.setItem("theme", e);
}
je(zt, !0);
const ec = window.matchMedia("(prefers-color-scheme: dark)");
ec.addEventListener("change", () => {
  Fe.value === "auto" && je("auto");
});
Vt(() => {
  je(Fe.value);
});
function oc() {
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
const ht = /* @__PURE__ */ Object.assign({ "./components/StatusDropdown/FusionStatusDropdown.vue": en, "./components/TextInput/EditableDisplayField.vue": fn, "./components/TextInput/FusionTextInput.vue": bn, "./components/accordion/FusionAccordion.vue": Sn, "./components/actionButton/FusionActionButton.vue": ln, "./components/autocomplete/FusionAutocomplete.vue": Hn, "./components/avatar/FuAvatar.vue": Xn, "./components/avatar/FuAvatarGroup.vue": Gn, "./components/badge/FusionBadge.vue": to, "./components/button/FusionButton.vue": io, "./components/cards/FusionStatCard.vue": go, "./components/checkbox/FusionCheckbox.vue": Mo, "./components/codeInput/FusionCodeInput.vue": Yo, "./components/colourPallet/FuColorPopover.vue": Lo, "./components/combobox/FuCombobox.vue": Xo, "./components/datePicker/dateField/FusionDatePicker.vue": wa, "./components/datePicker/datePickerBackup.vue": Pa, "./components/datePicker/monthPicker/FusionMonthPicker.vue": Za, "./components/datePicker/plainDate/FusionPlainDatePicker.vue": vl, "./components/datePicker/time/FusionTimePicker.vue": _l, "./components/drawer/FusionDrawer.vue": Cl, "./components/dropdown/FusionDropdownButton.vue": Ol, "./components/dropdownInline/FusionDropdownInline.vue": Bl, "./components/dropdownMenu/DropdownMenu.vue": Al, "./components/editWrapper/EditableFieldWrapper.vue": Ul, "./components/fileUploader/FusionUpload.vue": os, "./components/filterDropdown/FusionFilterDropdown.vue": ds, "./components/floatingHeader/FusionSmartHeader.vue": ps, "./components/icons/FusionTrashIcon.vue": gs, "./components/items/activity/FusionActivityItem.vue": Ts, "./components/items/attachments/FusionAttachment.vue": qs, "./components/items/notes/FusionNoteCard.vue": ti, "./components/items/task/FusionTaskItem.vue": vi, "./components/kanban/Kanban.vue": Ti, "./components/layout/AppShell.vue": eu, "./components/list/FusionListView.vue": cu, "./components/modal/FusionConfirmDialog.vue": gu, "./components/modal/FusionModal.vue": Ai, "./components/modal/FusionPreviewModal.vue": Ou, "./components/modulemenu/FusionModuleMenu.vue": Bu, "./components/notification/FuNotification.vue": ju, "./components/notifications/FuAlert.vue": Uu, "./components/notifications/FusionToast.vue": Zu, "./components/pagination/FusionPagination.vue": ir, "./components/panel/FuPanel.vue": mr, "./components/password/FusionPasswordInput.vue": br, "./components/progress/FusionProgressStepper.vue": Or, "./components/radio/FusionRadio.vue": Ir, "./components/rangeControl/FusionRangeControl.vue": Hr, "./components/section/FuSectionHeader.vue": Zr, "./components/sidebarmenu/FusionSidebar.vue": ld, "./components/splitButton/FusionSplitButton.vue": vd, "./components/switch/FusionSwitch.vue": _d, "./components/tabs/FusionTab.vue": Yd, "./components/textArea/FusionTextArea.vue": Ad, "./components/theme/FuThemeSelector.vue": Ud, "./components/toolbar/FusionToolbar.vue": Gd }), ac = {
  install(e) {
    for (const v in ht) {
      const n = ht[v].default, s = n.name || v.split("/").pop()?.replace(".vue", "");
      e.component(s, n);
    }
    e.config.globalProperties.FusionToast = (v) => {
      pt()(v);
    }, typeof window < "u" && (window.FusionToast = (v) => {
      pt()(v);
    });
  }
};
export {
  Le as FuAvatar,
  Ee as UserStatus,
  ac as default,
  oc as useTheme,
  pt as useToast
};
//# sourceMappingURL=fusion-binary-ui.es.js.map
