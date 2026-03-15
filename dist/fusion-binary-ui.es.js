import { h as Qe, defineComponent as ee, ref as w, reactive as _t, watch as fe, onMounted as he, onBeforeUnmount as _e, createElementBlock as o, openBlock as t, createCommentVNode as x, createElementVNode as a, createBlock as U, toDisplayString as S, createVNode as L, resolveDynamicComponent as ce, normalizeStyle as oe, normalizeClass as q, unref as G, Teleport as be, Transition as Te, withCtx as ae, Fragment as X, renderList as te, nextTick as ve, computed as H, withModifiers as ue, createTextVNode as ie, withDirectives as Fe, renderSlot as Z, mergeProps as tt, vModelDynamic as gt, vShow as nt, withKeys as Ye, vModelText as ot, toRaw as Ot, resolveComponent as yt, KeepAlive as Dt, createApp as Yt, watchEffect as Tt } from "vue";
/**
 * @license lucide-vue-next v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const st = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), Vt = (e) => e.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (v, n, s) => s ? s.toUpperCase() : n.toLowerCase()
), Ft = (e) => {
  const v = Vt(e);
  return v.charAt(0).toUpperCase() + v.slice(1);
}, Bt = (...e) => e.filter((v, n, s) => !!v && v.trim() !== "" && s.indexOf(v) === n).join(" ").trim(), it = (e) => e === "";
/**
 * @license lucide-vue-next v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var Pe = {
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
  size: u = Pe.width,
  color: c = Pe.stroke,
  ...b
}, { slots: f }) => Qe(
  "svg",
  {
    ...Pe,
    ...b,
    width: u,
    height: u,
    stroke: c,
    "stroke-width": it(n) || it(s) || n === !0 || s === !0 ? Number(l || i || Pe["stroke-width"]) * 24 / Number(u) : l || i || Pe["stroke-width"],
    class: Bt(
      "lucide",
      b.class,
      ...e ? [`lucide-${st(Ft(e))}-icon`, `lucide-${st(e)}`] : ["lucide-icon"]
    )
  },
  [...v.map((g) => Qe(...g)), ...f.default ? [f.default()] : []]
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
const jt = me("bell", [
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
const Ae = me("chevron-left", [
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
const Pt = me("circle-alert", [
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
const Lt = me("circle-check", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "m9 12 2 2 4-4", key: "dzmm74" }]
]);
/**
 * @license lucide-vue-next v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const At = me("circle-x", [
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
const Wt = me("eye-off", [
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
const Rt = me("eye", [
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
const Re = me("x", [
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
    const n = e, s = v, l = w(!1), i = w(null), u = w(null), c = w(n.modelValue || null), b = _t({
      position: "absolute",
      visibility: "hidden",
      opacity: "0",
      zIndex: "9999"
    });
    fe(
      () => n.modelValue,
      (r) => c.value = r
    );
    function f() {
      if (!i.value || !u.value) return;
      const r = i.value.getBoundingClientRect(), p = u.value.getBoundingClientRect(), R = window.innerHeight - r.bottom, B = r.top, E = R < p.height && B > R;
      let C = r.left + window.scrollX, Y = "none";
      n.align === "center" && (C += r.width / 2, Y = "translateX(-50%)"), n.align === "right" && (C = r.right + window.scrollX, Y = "translateX(-100%)"), b.left = `${C}px`, b.transform = Y, b.minWidth = `${r.width}px`, E ? b.top = `${r.top + window.scrollY - p.height - 6}px` : b.top = `${r.bottom + window.scrollY + 6}px`, b.visibility = "visible", b.opacity = "1";
    }
    const g = async () => {
      l.value = !l.value, l.value && (await ve(), f(), await ve(), f());
    }, d = (r) => {
      c.value = r, s("update:modelValue", r), l.value = !1;
    }, m = (r) => {
      const p = r.target;
      l.value && i.value && u.value && !i.value.contains(p) && !u.value.contains(p) && (l.value = !1);
    }, y = () => {
      l.value && (l.value = !1);
    }, k = (r) => {
      r.key === "Escape" && (l.value = !1);
    };
    return he(() => {
      document.addEventListener("click", m), window.addEventListener("resize", y), window.addEventListener("scroll", y, !0), document.addEventListener("keydown", k);
    }), _e(() => {
      document.removeEventListener("click", m), window.removeEventListener("resize", y), window.removeEventListener("scroll", y, !0), document.removeEventListener("keydown", k);
    }), (r, p) => (t(), o("div", {
      class: "fu-status-dropdown",
      ref_key: "dropdown",
      ref: i
    }, [
      e.label ? (t(), o("div", Xt, S(e.label), 1)) : x("", !0),
      a("button", {
        class: "fu-status-dropdown__button",
        onClick: g
      }, [
        c.value ? (t(), o("span", Jt, [
          c.value.icon ? (t(), U(ce(c.value.icon), {
            key: 0,
            class: "fu-status-dropdown__icon"
          })) : c.value.color ? (t(), o("span", {
            key: 1,
            class: "fu-status-dropdown__dot",
            style: oe({ backgroundColor: c.value.color })
          }, null, 4)) : x("", !0)
        ])) : x("", !0),
        a("span", {
          class: q(["fu-status-dropdown__label", { "fu-status-dropdown__placeholder": !c.value }])
        }, S(c.value?.label || e.placeholder), 3),
        L(G($e), { class: "fu-status-dropdown__chevron" })
      ]),
      (t(), U(be, { to: "body" }, [
        L(Te, { name: "fade" }, {
          default: ae(() => [
            l.value ? (t(), o("ul", {
              key: 0,
              ref_key: "menuRef",
              ref: u,
              class: "fu-status-dropdown__menu",
              style: oe(b)
            }, [
              (t(!0), o(X, null, te(e.options, (O) => (t(), o("li", {
                key: O.label,
                class: "fu-status-dropdown__item",
                onClick: (R) => d(O)
              }, [
                O.icon ? (t(), U(ce(O.icon), {
                  key: 0,
                  class: "fu-status-dropdown__icon"
                })) : O.color ? (t(), o("span", {
                  key: 1,
                  class: "fu-status-dropdown__dot",
                  style: oe({ backgroundColor: O.color })
                }, null, 4)) : x("", !0),
                a("span", Gt, S(O.label), 1)
              ], 8, Zt))), 128))
            ], 4)) : x("", !0)
          ]),
          _: 1
        })
      ]))
    ], 512));
  }
}), K = (e, v) => {
  const n = e.__vccOpts || e;
  for (const [s, l] of v)
    n[s] = l;
  return n;
}, $t = /* @__PURE__ */ K(Qt, [["__scopeId", "data-v-7725b140"]]), en = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
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
        class: q(["fu-action-btn", [
          `fu-action-btn--${e.size}`,
          `fu-action-btn--${e.variant}`,
          { "is-loading": e.loading }
        ]]),
        disabled: e.disabled || e.loading,
        onClick: n[0] || (n[0] = (s) => e.loading ? null : v.$emit("click", s))
      }, [
        e.loading ? (t(), o("span", nn)) : e.icon ? (t(), U(ce(e.icon), {
          key: 1,
          class: "fu-action-btn__icon",
          size: 20
        })) : x("", !0)
      ], 10, tn),
      e.tooltip ? (t(), o("span", on, S(e.tooltip), 1)) : x("", !0)
    ], 2));
  }
}), ke = /* @__PURE__ */ K(an, [["__scopeId", "data-v-32ffc0ad"]]), ln = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: ke
}, Symbol.toStringTag, { value: "Module" }));
var Ee = /* @__PURE__ */ ((e) => (e[e.Offline = 0] = "Offline", e[e.Active = 1] = "Active", e[e.Away = 2] = "Away", e[e.Busy = 3] = "Busy", e[e.DoNotDisturb = 4] = "DoNotDisturb", e[e.Invisible = 5] = "Invisible", e))(Ee || {});
const sn = ["src", "alt"], un = {
  key: 1,
  class: "fu-avatar__placeholder"
}, rn = {
  key: 2,
  class: "fu-avatar__edit-overlay"
}, dn = /* @__PURE__ */ ee({
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
    const n = e, s = v, l = w(null), i = H(
      () => n.name ? n.name.split(" ").map((g) => g[0]).join("").slice(0, 2).toUpperCase() : ""
    ), u = () => {
      n.editable && l.value?.click();
    }, c = (g) => {
      const d = g.target?.files?.[0];
      if (!d) return;
      const m = new FileReader();
      m.onload = () => {
        s("update:src", m.result);
      }, m.readAsDataURL(d);
    }, b = () => {
      s("remove");
    }, f = H(() => {
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
    return (g, d) => (t(), o("div", {
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
        }, null, 8, sn)) : (t(), o("span", un, S(i.value), 1)),
        e.editable ? (t(), o("span", rn, " Edit ")) : x("", !0),
        e.editable && e.src && e.allowRemove ? (t(), o("button", {
          key: 3,
          class: "fu-avatar__remove",
          onClick: ue(b, ["stop"]),
          "aria-label": "Remove photo"
        }, " × ")) : x("", !0),
        e.showStatus && e.status !== void 0 ? (t(), o("span", {
          key: 4,
          class: q(["fu-status-dot", f.value])
        }, null, 2)) : x("", !0),
        a("input", {
          ref_key: "fileInput",
          ref: l,
          type: "file",
          accept: "image/*",
          class: "fu-avatar__file-input",
          onChange: c
        }, null, 544)
      ])
    ], 2));
  }
}), De = /* @__PURE__ */ K(dn, [["__scopeId", "data-v-51778eaa"]]), cn = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: De
}, Symbol.toStringTag, { value: "Module" })), fn = { class: "edf-container" }, vn = {
  key: 0,
  class: "edf-label"
}, mn = { class: "edf-text" }, pn = /* @__PURE__ */ ee({
  __name: "EditableDisplayField",
  props: {
    text: {},
    label: { default: "" },
    variant: { default: "solid" },
    avatarSrc: {},
    avatarName: {}
  },
  emits: ["edit"],
  setup(e, { emit: v }) {
    const n = v, s = w(!1);
    function l(i) {
      n("edit", i);
    }
    return (i, u) => (t(), o("div", fn, [
      e.label ? (t(), o("label", vn, S(e.label), 1)) : x("", !0),
      a("div", {
        class: q(["edf-wrapper", [`edf--${e.variant}`]]),
        onMouseenter: u[0] || (u[0] = (c) => s.value = !0),
        onMouseleave: u[1] || (u[1] = (c) => s.value = !1),
        ref: "container"
      }, [
        e.avatarSrc || e.avatarName ? (t(), U(De, {
          key: 0,
          src: e.avatarSrc,
          name: e.avatarName,
          size: "xs",
          "show-status": !1,
          class: "edf-avatar"
        }, null, 8, ["src", "name"])) : x("", !0),
        a("span", mn, S(e.text), 1),
        s.value ? (t(), U(ke, {
          key: 1,
          class: "edf-edit-btn",
          icon: G(kt),
          size: "sm",
          variant: "subtle",
          onClick: l
        }, null, 8, ["icon"])) : x("", !0)
      ], 34)
    ]));
  }
}), hn = /* @__PURE__ */ K(pn, [["__scopeId", "data-v-f0200fd3"]]), _n = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: hn
}, Symbol.toStringTag, { value: "Module" })), gn = ["for"], yn = {
  key: 0,
  class: "fu-input-required"
}, bn = {
  key: 0,
  class: "fu-input-icon fu-input-icon--left"
}, wn = ["id", "name", "type", "placeholder", "disabled", "required", "aria-invalid", "aria-describedby", "inputmode", "min", "max", "step"], kn = {
  key: 1,
  class: "fu-input-icon fu-input-icon--right"
}, $n = ["id"], Mn = /* @__PURE__ */ ee({
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
    id: { default: void 0 },
    name: { default: void 0 },
    mask: { default: null },
    maskPattern: { default: "" }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: v }) {
    const n = e, s = v, l = `fu-input-${Math.random().toString(36).slice(2, 9)}`, i = H(() => n.id || l), u = H(() => n.name || i.value), c = H(() => {
      if (n.mask === "phone" || n.mask === "card") return "numeric";
      if (n.mask === "currency") return "decimal";
      if (n.type === "number") return "numeric";
    });
    function b(d) {
      if (!n.mask) return d;
      switch (n.mask) {
        case "phone":
          return d.replace(/\D/g, "").slice(0, 11).replace(/^(\d{5})(\d{0,6})$/, (y, k, r) => r ? `${k} ${r}` : k);
        case "card":
          return d.replace(/\D/g, "").slice(0, 16).replace(/(\d{4})(?=\d)/g, "$1 ");
        case "currency": {
          const y = d.replace(/[^\d.]/g, "").split("."), k = y[0] || "", r = y.length > 1 ? "." + y[1].slice(0, 2) : "";
          return (k ? new Intl.NumberFormat("en-GB").format(Number(k)) : "") + r;
        }
        case "custom": {
          if (!n.maskPattern) return d;
          const m = d.replace(/\D/g, "");
          let y = 0;
          return n.maskPattern.replace(/#/g, () => m[y++] || "");
        }
        default:
          return d;
      }
    }
    function f(d) {
      return n.mask ? n.mask === "currency" ? d.replace(/[^\d.]/g, "") : d.replace(/\D/g, "") : d;
    }
    const g = w(b(String(n.modelValue ?? "")));
    return fe(
      () => n.modelValue,
      (d) => {
        const m = b(String(d ?? ""));
        m !== g.value && (g.value = m);
      }
    ), fe(g, (d) => {
      const m = b(String(d));
      if (m !== d) {
        g.value = m;
        return;
      }
      s("update:modelValue", f(m));
    }), (d, m) => (t(), o("div", {
      class: "fu-input-wrapper",
      style: oe({ width: e.formWrapperWidth })
    }, [
      e.label ? (t(), o("label", {
        key: 0,
        class: "fu-input-label",
        for: i.value
      }, [
        ie(S(e.label) + " ", 1),
        e.required ? (t(), o("span", yn, "*")) : x("", !0)
      ], 8, gn)) : x("", !0),
      a("div", {
        class: q(["fu-input-container", [`fu-input--${e.size}`, `fu-input--${e.variant}`, { "fu-input--error": e.error }]])
      }, [
        d.$slots.left ? (t(), o("div", bn, [
          Z(d.$slots, "left", {}, void 0, !0)
        ])) : x("", !0),
        Fe(a("input", tt(d.$attrs, {
          class: "fu-input",
          id: i.value,
          name: u.value,
          type: e.type,
          placeholder: e.placeholder,
          disabled: e.disabled,
          required: e.required,
          "aria-invalid": !!e.error,
          "aria-describedby": e.error ? `${i.value}-error` : void 0,
          inputmode: c.value,
          min: e.type === "number" ? e.min : void 0,
          max: e.type === "number" ? e.max : void 0,
          step: e.type === "number" ? e.step : void 0,
          "onUpdate:modelValue": m[0] || (m[0] = (y) => g.value = y)
        }), null, 16, wn), [
          [gt, g.value]
        ]),
        d.$slots.right ? (t(), o("div", kn, [
          Z(d.$slots, "right", {}, void 0, !0)
        ])) : x("", !0)
      ], 2),
      e.error ? (t(), o("span", {
        key: 1,
        class: "fu-input-error",
        id: `${i.value}-error`
      }, S(e.error), 9, $n)) : x("", !0)
    ], 4));
  }
}), xe = /* @__PURE__ */ K(Mn, [["__scopeId", "data-v-000d0773"]]), Cn = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: xe
}, Symbol.toStringTag, { value: "Module" })), Sn = ["onClick", "disabled"], xn = { class: "fu-accordion__header-content" }, zn = { class: "fu-accordion__body" }, On = /* @__PURE__ */ ee({
  __name: "FusionAccordion",
  props: {
    items: {},
    defaultOpen: {},
    type: {},
    theme: {}
  },
  setup(e) {
    const v = e, n = w(v.defaultOpen || []);
    function s(i) {
      return n.value.includes(i);
    }
    function l(i) {
      const u = s(i);
      v.type === "single" ? n.value = u ? [] : [i] : u ? n.value = n.value.filter((c) => c !== i) : n.value.push(i);
    }
    return (i, u) => (t(), o("div", {
      class: q(["fu-accordion", [`fu-accordion--${e.theme}`]])
    }, [
      (t(!0), o(X, null, te(e.items, (c) => (t(), o("div", {
        key: c.key,
        class: "fu-accordion__item"
      }, [
        a("button", {
          class: q(["fu-accordion__header", {
            "is-open": s(c.key),
            "is-disabled": c.disabled
          }]),
          onClick: (b) => l(c.key),
          disabled: c.disabled
        }, [
          a("div", xn, [
            c.icon ? (t(), U(ce(c.icon), {
              key: 0,
              size: 16,
              class: "fu-accordion__icon"
            })) : x("", !0),
            a("span", null, S(c.title), 1)
          ]),
          (t(), o("svg", {
            class: q(["fu-accordion__chevron", { "is-open": s(c.key) }]),
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
        ], 10, Sn),
        Fe(a("div", zn, [
          Z(i.$slots, c.key, {}, void 0, !0)
        ], 512), [
          [nt, s(c.key)]
        ])
      ]))), 128))
    ], 2));
  }
}), Dn = /* @__PURE__ */ K(On, [["__scopeId", "data-v-f069f986"]]), Yn = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Dn
}, Symbol.toStringTag, { value: "Module" })), Tn = {
  key: 0,
  class: "fu-status-dropdown__label-text"
}, Vn = { key: 1 }, Fn = {
  key: 0,
  class: "flex"
}, Bn = ["onClick"], In = {
  key: 1,
  class: "fu-placeholder"
}, jn = {
  key: 1,
  class: "flex flex--center flex--gap-md"
}, En = {
  key: 2,
  class: "fu-status-dropdown__input-trigger"
}, Pn = {
  key: 0,
  class: "fu-search-wrapper"
}, Ln = {
  key: 1,
  class: "fu-options-scroll scrollbar__control customScrollBar"
}, An = ["onClick"], Wn = {
  key: 2,
  class: "fu-status-dropdown__empty"
}, Rn = {
  key: 3,
  class: "fu-input-error"
}, Hn = /* @__PURE__ */ ee({
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
    const n = e, s = v, l = w(!1), i = w(""), u = w(null), c = w(null), b = w(null), f = w(null), g = w({}), d = w(null), m = w([]), y = H(() => n.async === !0);
    fe(
      () => n.modelValue,
      (C) => {
        n.multiple && Array.isArray(C) ? m.value = C : d.value = C;
      },
      { immediate: !0 }
    ), fe(i, (C) => {
      y.value && (C.length < n.minSearchLength || s("search", C));
    });
    const k = H(() => y.value || !i.value ? n.options : n.options.filter(
      (C) => C.label.toLowerCase().includes(i.value.toLowerCase())
    ));
    function r() {
      const C = u.value?.querySelector("button, input");
      if (!C) return;
      const Y = C.getBoundingClientRect();
      g.value = {
        position: "fixed",
        top: `${Y.bottom + 4}px`,
        left: `${Y.left}px`,
        width: `${Y.width}px`,
        zIndex: "9999"
      };
    }
    function p() {
      l.value = !l.value, l.value && ve(() => {
        r(), n.searchable && ve(() => {
          const C = f.value?.$el?.querySelector("input") || c.value?.querySelector("input");
          C?.focus(), C?.select();
        });
      });
    }
    function O(C) {
      if (n.multiple) {
        const Y = m.value.find((D) => D.value === C.value);
        m.value = Y ? m.value.filter((D) => D.value !== C.value) : [...m.value, C], s("update:modelValue", m.value);
      } else
        d.value = C, s("update:modelValue", C), l.value = !1;
    }
    function R(C) {
      m.value = m.value.filter((Y) => Y.value !== C.value), s("update:modelValue", m.value);
    }
    function B(C) {
      u.value?.contains(C.target) || c.value?.contains(C.target) || (l.value = !1);
    }
    function E(C) {
      if (!l.value) return;
      const Y = C.target;
      c.value?.contains(Y) || c.value === Y || (l.value = !1);
    }
    return he(() => {
      document.addEventListener("click", B), window.addEventListener("scroll", E, { passive: !0 });
    }), _e(() => {
      document.removeEventListener("click", B), window.removeEventListener("scroll", E);
    }), (C, Y) => (t(), o("div", {
      class: "fu-status-dropdown",
      ref_key: "dropdownRef",
      ref: u
    }, [
      e.label ? (t(), o("div", Tn, S(e.label), 1)) : x("", !0),
      e.variant === "button" ? (t(), o("div", Vn, [
        a("button", {
          class: q(["fu-status-dropdown__button", [`fu-input--${e.size}`, { "fu-input--error": e.error }]]),
          onClick: p
        }, [
          e.multiple ? (t(), o("div", Fn, [
            m.value.length ? (t(!0), o(X, { key: 0 }, te(m.value, (D) => (t(), o("span", {
              key: D.value,
              class: "fu-tag"
            }, [
              D.type === "icon" ? (t(), U(ce(D.icon), {
                key: 0,
                size: "14"
              })) : D.type === "image" ? (t(), U(De, {
                key: 1,
                src: D.imageUrl,
                name: D.label,
                size: "xs"
              }, null, 8, ["src", "name"])) : x("", !0),
              ie(" " + S(D.label) + " ", 1),
              a("span", {
                class: "fu-tag__remove",
                onClick: ue((N) => R(D), ["stop"])
              }, "×", 8, Bn)
            ]))), 128)) : (t(), o("span", In, S(e.placeholder), 1))
          ])) : (t(), o("div", jn, [
            d.value?.type === "icon" ? (t(), U(ce(d.value.icon), {
              key: 0,
              size: "16"
            })) : d.value?.type === "image" ? (t(), U(De, {
              key: 1,
              src: d.value.imageUrl,
              name: d.value.label,
              size: "xs"
            }, null, 8, ["src", "name"])) : x("", !0),
            a("span", null, S(d.value?.label || e.placeholder), 1)
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
      ])) : (t(), o("div", En, [
        L(xe, {
          size: e.size,
          readonly: "",
          variant: "outline",
          formWrapperWidth: e.formWrapperWidth,
          placeholder: d.value?.label || e.placeholder,
          onFocus: p,
          onClick: p
        }, null, 8, ["size", "formWrapperWidth", "placeholder"])
      ])),
      (t(), U(be, { to: "body" }, [
        L(Te, { name: "fade" }, {
          default: ae(() => [
            l.value ? (t(), o("div", {
              key: 0,
              class: "fu-status-dropdown__menu",
              style: oe(g.value),
              ref_key: "menuRef",
              ref: c
            }, [
              e.searchable ? (t(), o("div", Pn, [
                L(xe, {
                  ref_key: "searchInputRef",
                  ref: f,
                  modelValue: i.value,
                  "onUpdate:modelValue": Y[1] || (Y[1] = (D) => i.value = D),
                  type: "text",
                  placeholder: e.searchPlaceholder,
                  size: e.size,
                  formWrapperWidth: "100%"
                }, {
                  right: ae(() => [
                    a("button", {
                      class: "fu-search-clear",
                      onClick: Y[0] || (Y[0] = (D) => i.value = "")
                    }, "×")
                  ]),
                  _: 1
                }, 8, ["modelValue", "placeholder", "size"])
              ])) : x("", !0),
              k.value.length ? (t(), o("div", Ln, [
                (t(!0), o(X, null, te(k.value, (D) => (t(), o("div", {
                  key: D.value,
                  class: "fu-status-dropdown__item",
                  onClick: (N) => O(D)
                }, [
                  D.type === "icon" ? (t(), U(ce(D.icon), {
                    key: 0,
                    size: "16"
                  })) : D.type === "image" ? (t(), U(De, {
                    key: 1,
                    src: D.imageUrl,
                    name: D.label,
                    size: "xs"
                  }, null, 8, ["src", "name"])) : x("", !0),
                  a("span", null, S(D.label), 1)
                ], 8, An))), 128)),
                a("div", {
                  class: "fu-status-dropdown__slot-actions",
                  ref_key: "actionsRef",
                  ref: b
                }, [
                  Z(C.$slots, "actions")
                ], 512)
              ])) : (t(), o("div", Wn, S(e.noResultsText), 1))
            ], 4)) : x("", !0)
          ]),
          _: 3
        })
      ])),
      e.error ? (t(), o("span", Rn, S(e.error), 1)) : x("", !0)
    ], 512));
  }
}), qn = /* @__PURE__ */ K(Hn, [["__scopeId", "data-v-2e7058c3"]]), Nn = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: qn
}, Symbol.toStringTag, { value: "Module" })), Un = /* @__PURE__ */ ee({
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
      onClick: u[0] || (u[0] = (c) => i.$emit("click"))
    }, [
      (t(!0), o(X, null, te(G(s), (c, b) => (t(), U(De, {
        key: c.id || b,
        src: c.src,
        name: c.name,
        alt: c.alt,
        size: e.size
      }, null, 8, ["src", "name", "alt", "size"]))), 128)),
      l > 0 ? (t(), o("div", {
        key: 0,
        class: q(["fu-avatar fu-avatar--more", `fu-avatar--${e.size}`])
      }, " +" + S(l), 2)) : x("", !0)
    ]));
  }
}), Kn = /* @__PURE__ */ K(Un, [["__scopeId", "data-v-d339fd2f"]]), Xn = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Kn
}, Symbol.toStringTag, { value: "Module" })), Jn = /* @__PURE__ */ ee({
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
      Z(v.$slots, "default", {}, () => [
        ie(S(e.text), 1)
      ], !0)
    ], 2));
  }
}), Zn = /* @__PURE__ */ K(Jn, [["__scopeId", "data-v-3281b175"]]), Gn = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Zn
}, Symbol.toStringTag, { value: "Module" })), Qn = {
  key: 0,
  class: "fu-spinner"
}, eo = { key: 2 }, to = { key: 3 }, no = {
  key: 0,
  class: "fu-tooltip"
}, oo = /* @__PURE__ */ ee({
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
      (t(), U(ce(e.link ? "a" : "button"), {
        class: q(["fu-btn", [`fu-btn--${e.variant}`, `fu-btn--${e.size}`, { "is-loading": e.loading }]]),
        href: e.link || void 0,
        target: e.link ? e.target : void 0,
        rel: e.link && e.target === "_blank" ? "noopener noreferrer" : void 0,
        disabled: !e.link && (e.disabled || e.loading),
        onClick: n[0] || (n[0] = (s) => !e.link && !e.loading ? v.$emit("click", s) : null),
        style: oe(e.buttonWidth ? { width: e.buttonWidth } : {})
      }, {
        default: ae(() => [
          e.loading ? (t(), o("span", Qn)) : x("", !0),
          e.icon ? (t(), U(ce(e.icon), {
            key: 1,
            class: "fu-btn-icon",
            size: 16
          })) : x("", !0),
          e.loading ? (t(), o("span", eo, S(e.loadingText || "Loading..."), 1)) : (t(), o("span", to, [
            Z(v.$slots, "default", {}, () => [
              ie(S(e.text), 1)
            ], !0)
          ]))
        ]),
        _: 3
      }, 8, ["class", "href", "target", "rel", "disabled", "style"])),
      e.tooltip ? (t(), o("span", no, S(e.tooltip), 1)) : x("", !0)
    ], 6));
  }
}), ye = /* @__PURE__ */ K(oo, [["__scopeId", "data-v-3fcdd099"]]), ao = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: ye
}, Symbol.toStringTag, { value: "Module" })), lo = {
  key: 0,
  class: "icon-box"
}, so = { class: "content" }, io = { class: "value" }, uo = { class: "subtitle" }, ro = {
  key: 0,
  class: "caption"
}, co = { class: "title" }, fo = { class: "value" }, vo = {
  key: 0,
  class: "caption"
}, mo = /* @__PURE__ */ ee({
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
      e.variant === "icon-left" ? (t(), o(X, { key: 0 }, [
        e.icon ? (t(), o("div", lo, [
          (t(), U(ce(e.icon), { class: "fu-icon" }))
        ])) : x("", !0),
        a("div", so, [
          a("div", io, S(e.value), 1),
          a("div", uo, S(e.title), 1),
          e.subtitle ? (t(), o("div", ro, S(e.subtitle), 1)) : x("", !0)
        ])
      ], 64)) : (t(), o(X, { key: 1 }, [
        a("div", co, S(e.title), 1),
        a("div", fo, S(e.value), 1),
        e.subtitle ? (t(), o("div", vo, S(e.subtitle), 1)) : x("", !0)
      ], 64))
    ], 2));
  }
}), po = /* @__PURE__ */ K(mo, [["__scopeId", "data-v-805e7e96"]]), ho = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: po
}, Symbol.toStringTag, { value: "Module" })), _o = ["for"], go = ["id", "checked", "disabled"], yo = {
  key: 0,
  class: "fu-checkbox__label"
}, bo = /* @__PURE__ */ ee({
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
      }, null, 40, go),
      n[1] || (n[1] = a("span", { class: "fu-checkbox__box" }, null, -1)),
      e.label ? (t(), o("span", yo, S(e.label), 1)) : x("", !0)
    ], 10, _o));
  }
}), et = /* @__PURE__ */ K(bo, [["__scopeId", "data-v-3ee76c20"]]), wo = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: et
}, Symbol.toStringTag, { value: "Module" })), ko = {
  key: 0,
  class: "fu-input-label"
}, $o = {
  key: 0,
  class: "fu-input-required"
}, Mo = ["onUpdate:modelValue", "onInput", "onKeydown", "disabled"], Co = {
  key: 1,
  class: "fu-input-error"
}, So = /* @__PURE__ */ ee({
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
    const n = e, s = v, l = w(Array(n.length).fill("")), i = w([]);
    fe(
      () => n.modelValue,
      (f) => {
        if (!f) {
          l.value = Array(n.length).fill("");
          return;
        }
        const g = f.split("").slice(0, n.length);
        for (; g.length < n.length; ) g.push("");
        l.value = g;
      },
      { immediate: !0 }
    ), fe(
      l,
      () => {
        s("update:modelValue", l.value.join(""));
      },
      { deep: !0 }
    );
    function u(f, g) {
      const m = g.target.value.replace(/\D/g, "");
      l.value[f] = m, m && f < n.length - 1 && ve(() => i.value[f + 1]?.focus());
    }
    function c(f) {
      !l.value[f] && f > 0 && ve(() => i.value[f - 1]?.focus());
    }
    function b(f) {
      f.preventDefault();
      const d = (f.clipboardData?.getData("text") || "").replace(/\D/g, "").slice(0, n.length).split("");
      if (d.length !== 0) {
        d.forEach((m, y) => {
          l.value[y] = m;
        });
        for (let m = d.length; m < n.length; m++)
          l.value[m] = "";
        ve(() => {
          const m = Math.min(d.length - 1, n.length - 1);
          i.value[m]?.focus();
        });
      }
    }
    return (f, g) => (t(), o("div", {
      class: "fu-input-wrapper",
      style: oe({ width: e.formWrapperWidth })
    }, [
      e.label ? (t(), o("label", ko, [
        ie(S(e.label) + " ", 1),
        e.required ? (t(), o("span", $o, "*")) : x("", !0)
      ])) : x("", !0),
      a("div", {
        class: q(["fu-code-container", [
          `fu-input--${e.size}`,
          `fu-input--${e.variant}`,
          { "fu-input--error": e.error }
        ]])
      }, [
        (t(!0), o(X, null, te(l.value, (d, m) => Fe((t(), o("input", {
          key: m,
          ref_for: !0,
          ref: (y) => i.value[m] = y,
          type: "text",
          maxlength: "1",
          inputmode: "numeric",
          pattern: "[0-9]*",
          class: "fu-code-box fu-input-container",
          "onUpdate:modelValue": (y) => l.value[m] = y,
          onInput: (y) => u(m, y),
          onKeydown: Ye((y) => c(m), ["backspace"]),
          onPaste: b,
          disabled: e.disabled
        }, null, 40, Mo)), [
          [ot, l.value[m]]
        ])), 128))
      ], 2),
      e.error ? (t(), o("span", Co, S(e.error), 1)) : x("", !0)
    ], 4));
  }
}), xo = /* @__PURE__ */ K(So, [["__scopeId", "data-v-8582d137"]]), zo = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: xo
}, Symbol.toStringTag, { value: "Module" })), Oo = ["onKeydown"], Do = { class: "fu-controls" }, Yo = { class: "fu-sliders" }, To = ["value"], Vo = /* @__PURE__ */ ee({
  __name: "FuColorPopover",
  props: {
    modelValue: {}
  },
  emits: ["update:modelValue"],
  setup(e, { emit: v }) {
    const n = e, s = v, l = w("hex"), i = w(!1), u = w(null), c = w({
      top: "0px",
      left: "0px"
    });
    function b() {
      i.value = !i.value, i.value && ve(f);
    }
    function f() {
      if (!u.value) return;
      const _ = u.value.getBoundingClientRect(), $ = 260, M = 320, z = 8;
      let I = _.bottom + 6, T = _.left, W = "top left";
      T + $ > window.innerWidth - z && (T = _.right - $, W = "top right"), T = Math.max(z, T), I + M > window.innerHeight - z && (I = _.top - M - 6, W = W.includes("right") ? "bottom right" : "bottom left"), I = Math.max(z, I), c.value = {
        top: `${I + window.scrollY}px`,
        left: `${T + window.scrollX}px`,
        transformOrigin: W
      };
    }
    function g(_) {
      if (!i.value) return;
      const $ = _.target;
      u.value?.contains($) || $.closest(".fu-color-popover") || (i.value = !1);
    }
    he(() => {
      window.addEventListener("mousedown", g), window.addEventListener("resize", f);
    }), _e(() => {
      window.removeEventListener("mousedown", g), window.removeEventListener("resize", f);
    });
    const d = w(0), m = w(100), y = w(100), k = w(""), r = w(!1);
    function p(_, $, M) {
      $ /= 100, M /= 100;
      const z = M * $, I = z * (1 - Math.abs(_ / 60 % 2 - 1)), T = M - z;
      let W = 0, J = 0, Q = 0;
      return _ < 60 ? [W, J, Q] = [z, I, 0] : _ < 120 ? [W, J, Q] = [I, z, 0] : _ < 180 ? [W, J, Q] = [0, z, I] : _ < 240 ? [W, J, Q] = [0, I, z] : _ < 300 ? [W, J, Q] = [I, 0, z] : [W, J, Q] = [z, 0, I], {
        r: Math.round((W + T) * 255),
        g: Math.round((J + T) * 255),
        b: Math.round((Q + T) * 255)
      };
    }
    function O(_, $, M) {
      _ /= 255, $ /= 255, M /= 255;
      const z = Math.max(_, $, M), I = Math.min(_, $, M), T = z - I;
      let W = 0;
      return T && (z === _ ? W = ($ - M) / T % 6 : z === $ ? W = (M - _) / T + 2 : W = (_ - $) / T + 4, W *= 60, W < 0 && (W += 360)), {
        h: Math.round(W),
        s: Math.round((z === 0 ? 0 : T / z) * 100),
        v: Math.round(z * 100)
      };
    }
    function R(_, $, M) {
      return "#" + [_, $, M].map((z) => z.toString(16).padStart(2, "0")).join("").toUpperCase();
    }
    function B(_, $, M) {
      return `rgb(${_}, ${$}, ${M})`;
    }
    const E = H(() => p(d.value, m.value, y.value)), C = H(
      () => R(E.value.r, E.value.g, E.value.b)
    ), Y = H(() => ({
      background: `
    linear-gradient(to top, black, transparent),
    linear-gradient(to right, white, hsl(${d.value}, 100%, 50%))
  `
    }));
    function D() {
      const { r: _, g: $, b: M } = E.value;
      s(
        "update:modelValue",
        l.value === "rgb" ? B(_, $, M) : C.value
      );
    }
    function N(_) {
      const $ = _.trim().replace(/;$/, "");
      let M = null;
      /^#([0-9a-f]{6})$/i.test($) && (l.value = "hex", M = {
        r: parseInt($.slice(1, 3), 16),
        g: parseInt($.slice(3, 5), 16),
        b: parseInt($.slice(5, 7), 16)
      });
      const z = $.match(
        /^rgba?\((\d{1,3}),\s*(\d{1,3}),\s*(\d{1,3})/
      );
      if (z && (l.value = "rgb", M = {
        r: +z[1],
        g: +z[2],
        b: +z[3]
      }), !M) return;
      const I = O(M.r, M.g, M.b);
      d.value = I.h, m.value = I.s, y.value = I.v, D();
    }
    function ne(_) {
      r.value = !0, k.value = _.target.value;
    }
    function j() {
      r.value = !1, N(k.value);
    }
    function F(_) {
      _.key === "Enter" && j();
    }
    function P(_) {
      l.value = "hex";
      const M = _.currentTarget.getBoundingClientRect(), z = Math.min(Math.max(0, _.clientX - M.left), M.width), I = Math.min(Math.max(0, _.clientY - M.top), M.height);
      m.value = Math.round(z / M.width * 100), y.value = Math.round(100 - I / M.height * 100), D();
    }
    return he(() => {
      n.modelValue && (k.value = n.modelValue, N(n.modelValue));
    }), fe(() => n.modelValue, (_) => {
      _ && (k.value = _, N(_));
    }), (_, $) => (t(), o(X, null, [
      a("div", {
        ref_key: "triggerRef",
        ref: u,
        class: "fu-color-trigger",
        style: oe({ backgroundColor: C.value }),
        role: "button",
        tabindex: "0",
        onClick: b,
        onKeydown: [
          Ye(ue(b, ["prevent"]), ["enter"]),
          Ye(ue(b, ["prevent"]), ["space"])
        ]
      }, null, 44, Oo),
      (t(), U(be, { to: "body" }, [
        i.value ? (t(), o("div", {
          key: 0,
          class: "fu-color-popover",
          style: oe(c.value)
        }, [
          a("div", {
            class: "fu-saturation",
            style: oe(Y.value),
            onPointerdown: P,
            onPointermove: $[0] || ($[0] = (M) => M.buttons === 1 && P(M))
          }, [
            a("div", {
              class: "fu-cursor",
              style: oe({ left: m.value + "%", top: 100 - y.value + "%" })
            }, null, 4)
          ], 36),
          a("div", Do, [
            a("div", {
              class: "fu-preview",
              style: oe({ backgroundColor: C.value })
            }, null, 4),
            a("div", Yo, [
              Fe(a("input", {
                type: "range",
                min: "0",
                max: "360",
                "onUpdate:modelValue": $[1] || ($[1] = (M) => d.value = M),
                class: "fu-hue"
              }, null, 512), [
                [ot, d.value]
              ])
            ])
          ]),
          a("input", {
            class: "fu-output",
            value: k.value,
            onInput: ne,
            onBlur: j,
            onKeydown: F,
            placeholder: "#RRGGBB or rgb(...)"
          }, null, 40, To)
        ], 4)) : x("", !0)
      ]))
    ], 64));
  }
}), Fo = /* @__PURE__ */ K(Vo, [["__scopeId", "data-v-568b3b3c"]]), Bo = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Fo
}, Symbol.toStringTag, { value: "Module" })), Io = { class: "fu-combobox__control" }, jo = ["value", "placeholder", "disabled"], Eo = {
  key: 0,
  class: "fu-combobox__dropdown scrollbar__control customScrollBar"
}, Po = { class: "fu-combobox__group-title" }, Lo = ["onClick"], Ao = { class: "fu-combobox__option-left" }, Wo = { class: "fu-combobox__option-right" }, Ro = {
  key: 1,
  class: "fu-combobox__empty"
}, Ho = /* @__PURE__ */ ee({
  __name: "FuCombobox",
  props: {
    options: {},
    modelValue: {},
    placeholder: {},
    disabled: { type: Boolean }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: v }) {
    const n = e, s = v, l = w(!1), i = w(""), u = w(null), c = w(null), b = H(() => {
      if (!i.value || u.value && i.value.toLowerCase() === u.value.label.toLowerCase())
        return f(n.options);
      const k = n.options.filter(
        (r) => r.label.toLowerCase().includes(i.value.toLowerCase())
      );
      return f(k);
    });
    function f(k) {
      const r = {};
      return k.forEach((p) => {
        const O = p.group || "Options";
        r[O] || (r[O] = []), r[O].push(p);
      }), Object.entries(r).map(([p, O]) => ({ title: p, items: O }));
    }
    fe(
      () => n.modelValue,
      (k) => {
        u.value = n.options.find((r) => r.value === k) || null, !l.value && u.value && (i.value = u.value.label);
      },
      { immediate: !0 }
    );
    function g(k) {
      i.value = k.target.value;
    }
    function d(k) {
      u.value = k, i.value = k.label, s("update:modelValue", k.value), l.value = !1;
    }
    function m() {
      l.value = !l.value;
    }
    function y(k) {
      c.value && !c.value.contains(k.target) && (l.value = !1, u.value && (i.value = u.value.label));
    }
    return he(() => {
      document.addEventListener("click", y);
    }), _e(() => {
      document.removeEventListener("click", y);
    }), (k, r) => (t(), o("div", {
      class: q(["fu-combobox", { "fu-combobox--disabled": e.disabled }]),
      ref_key: "comboboxRef",
      ref: c
    }, [
      a("div", Io, [
        a("input", {
          type: "text",
          value: l.value ? i.value : u.value?.label || "",
          placeholder: e.placeholder,
          class: "fu-combobox__input",
          disabled: e.disabled,
          onInput: g,
          onFocus: r[0] || (r[0] = (p) => !e.disabled && (l.value = !0))
        }, null, 40, jo),
        a("span", {
          class: "fu-combobox__icon",
          onClick: ue(m, ["stop"])
        }, [
          L(G($e), {
            size: 18,
            "stroke-width": 1
          })
        ])
      ]),
      l.value && !e.disabled ? (t(), o("div", Eo, [
        b.value.length > 0 ? (t(!0), o(X, { key: 0 }, te(b.value, (p) => (t(), o("div", {
          key: p.title,
          class: "fu-combobox__group"
        }, [
          a("div", Po, S(p.title), 1),
          (t(!0), o(X, null, te(p.items, (O) => (t(), o("div", {
            key: O.value,
            class: q(["fu-combobox__option", {
              "fu-combobox__option--selected": O.value === u.value?.value
            }]),
            onClick: (R) => d(O)
          }, [
            a("div", Ao, [
              Z(k.$slots, "option", { option: O }, () => [
                O.icon ? (t(), U(ce(O.icon), {
                  key: 0,
                  class: "fu-combobox__option-icon"
                })) : x("", !0),
                a("span", null, S(O.label), 1)
              ], !0)
            ]),
            a("div", Wo, [
              O.value === u.value?.value ? (t(), U(G(bt), {
                key: 0,
                class: "fu-combobox__check"
              })) : x("", !0)
            ])
          ], 10, Lo))), 128))
        ]))), 128)) : (t(), o("div", Ro, "No results found"))
      ])) : x("", !0)
    ], 2));
  }
}), qo = /* @__PURE__ */ K(Ho, [["__scopeId", "data-v-8ca05e69"]]), No = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: qo
}, Symbol.toStringTag, { value: "Module" }));
function Mt(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Ne = { exports: {} }, Uo = Ne.exports, dt;
function Ko() {
  return dt || (dt = 1, (function(e, v) {
    (function(n, s) {
      e.exports = s();
    })(Uo, (function() {
      var n = 1e3, s = 6e4, l = 36e5, i = "millisecond", u = "second", c = "minute", b = "hour", f = "day", g = "week", d = "month", m = "quarter", y = "year", k = "date", r = "Invalid Date", p = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/, O = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g, R = { name: "en", weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"), ordinal: function($) {
        var M = ["th", "st", "nd", "rd"], z = $ % 100;
        return "[" + $ + (M[(z - 20) % 10] || M[z] || M[0]) + "]";
      } }, B = function($, M, z) {
        var I = String($);
        return !I || I.length >= M ? $ : "" + Array(M + 1 - I.length).join(z) + $;
      }, E = { s: B, z: function($) {
        var M = -$.utcOffset(), z = Math.abs(M), I = Math.floor(z / 60), T = z % 60;
        return (M <= 0 ? "+" : "-") + B(I, 2, "0") + ":" + B(T, 2, "0");
      }, m: function $(M, z) {
        if (M.date() < z.date()) return -$(z, M);
        var I = 12 * (z.year() - M.year()) + (z.month() - M.month()), T = M.clone().add(I, d), W = z - T < 0, J = M.clone().add(I + (W ? -1 : 1), d);
        return +(-(I + (z - T) / (W ? T - J : J - T)) || 0);
      }, a: function($) {
        return $ < 0 ? Math.ceil($) || 0 : Math.floor($);
      }, p: function($) {
        return { M: d, y, w: g, d: f, D: k, h: b, m: c, s: u, ms: i, Q: m }[$] || String($ || "").toLowerCase().replace(/s$/, "");
      }, u: function($) {
        return $ === void 0;
      } }, C = "en", Y = {};
      Y[C] = R;
      var D = "$isDayjsObject", N = function($) {
        return $ instanceof P || !(!$ || !$[D]);
      }, ne = function $(M, z, I) {
        var T;
        if (!M) return C;
        if (typeof M == "string") {
          var W = M.toLowerCase();
          Y[W] && (T = W), z && (Y[W] = z, T = W);
          var J = M.split("-");
          if (!T && J.length > 1) return $(J[0]);
        } else {
          var Q = M.name;
          Y[Q] = M, T = Q;
        }
        return !I && T && (C = T), T || !I && C;
      }, j = function($, M) {
        if (N($)) return $.clone();
        var z = typeof M == "object" ? M : {};
        return z.date = $, z.args = arguments, new P(z);
      }, F = E;
      F.l = ne, F.i = N, F.w = function($, M) {
        return j($, { locale: M.$L, utc: M.$u, x: M.$x, $offset: M.$offset });
      };
      var P = (function() {
        function $(z) {
          this.$L = ne(z.locale, null, !0), this.parse(z), this.$x = this.$x || z.x || {}, this[D] = !0;
        }
        var M = $.prototype;
        return M.parse = function(z) {
          this.$d = (function(I) {
            var T = I.date, W = I.utc;
            if (T === null) return /* @__PURE__ */ new Date(NaN);
            if (F.u(T)) return /* @__PURE__ */ new Date();
            if (T instanceof Date) return new Date(T);
            if (typeof T == "string" && !/Z$/i.test(T)) {
              var J = T.match(p);
              if (J) {
                var Q = J[2] - 1 || 0, re = (J[7] || "0").substring(0, 3);
                return W ? new Date(Date.UTC(J[1], Q, J[3] || 1, J[4] || 0, J[5] || 0, J[6] || 0, re)) : new Date(J[1], Q, J[3] || 1, J[4] || 0, J[5] || 0, J[6] || 0, re);
              }
            }
            return new Date(T);
          })(z), this.init();
        }, M.init = function() {
          var z = this.$d;
          this.$y = z.getFullYear(), this.$M = z.getMonth(), this.$D = z.getDate(), this.$W = z.getDay(), this.$H = z.getHours(), this.$m = z.getMinutes(), this.$s = z.getSeconds(), this.$ms = z.getMilliseconds();
        }, M.$utils = function() {
          return F;
        }, M.isValid = function() {
          return this.$d.toString() !== r;
        }, M.isSame = function(z, I) {
          var T = j(z);
          return this.startOf(I) <= T && T <= this.endOf(I);
        }, M.isAfter = function(z, I) {
          return j(z) < this.startOf(I);
        }, M.isBefore = function(z, I) {
          return this.endOf(I) < j(z);
        }, M.$g = function(z, I, T) {
          return F.u(z) ? this[I] : this.set(T, z);
        }, M.unix = function() {
          return Math.floor(this.valueOf() / 1e3);
        }, M.valueOf = function() {
          return this.$d.getTime();
        }, M.startOf = function(z, I) {
          var T = this, W = !!F.u(I) || I, J = F.p(z), Q = function(Me, h) {
            var V = F.w(T.$u ? Date.UTC(T.$y, h, Me) : new Date(T.$y, h, Me), T);
            return W ? V : V.endOf(f);
          }, re = function(Me, h) {
            return F.w(T.toDate()[Me].apply(T.toDate("s"), (W ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(h)), T);
          }, de = this.$W, pe = this.$M, ge = this.$D, Ce = "set" + (this.$u ? "UTC" : "");
          switch (J) {
            case y:
              return W ? Q(1, 0) : Q(31, 11);
            case d:
              return W ? Q(1, pe) : Q(0, pe + 1);
            case g:
              var we = this.$locale().weekStart || 0, ze = (de < we ? de + 7 : de) - we;
              return Q(W ? ge - ze : ge + (6 - ze), pe);
            case f:
            case k:
              return re(Ce + "Hours", 0);
            case b:
              return re(Ce + "Minutes", 1);
            case c:
              return re(Ce + "Seconds", 2);
            case u:
              return re(Ce + "Milliseconds", 3);
            default:
              return this.clone();
          }
        }, M.endOf = function(z) {
          return this.startOf(z, !1);
        }, M.$set = function(z, I) {
          var T, W = F.p(z), J = "set" + (this.$u ? "UTC" : ""), Q = (T = {}, T[f] = J + "Date", T[k] = J + "Date", T[d] = J + "Month", T[y] = J + "FullYear", T[b] = J + "Hours", T[c] = J + "Minutes", T[u] = J + "Seconds", T[i] = J + "Milliseconds", T)[W], re = W === f ? this.$D + (I - this.$W) : I;
          if (W === d || W === y) {
            var de = this.clone().set(k, 1);
            de.$d[Q](re), de.init(), this.$d = de.set(k, Math.min(this.$D, de.daysInMonth())).$d;
          } else Q && this.$d[Q](re);
          return this.init(), this;
        }, M.set = function(z, I) {
          return this.clone().$set(z, I);
        }, M.get = function(z) {
          return this[F.p(z)]();
        }, M.add = function(z, I) {
          var T, W = this;
          z = Number(z);
          var J = F.p(I), Q = function(pe) {
            var ge = j(W);
            return F.w(ge.date(ge.date() + Math.round(pe * z)), W);
          };
          if (J === d) return this.set(d, this.$M + z);
          if (J === y) return this.set(y, this.$y + z);
          if (J === f) return Q(1);
          if (J === g) return Q(7);
          var re = (T = {}, T[c] = s, T[b] = l, T[u] = n, T)[J] || 1, de = this.$d.getTime() + z * re;
          return F.w(de, this);
        }, M.subtract = function(z, I) {
          return this.add(-1 * z, I);
        }, M.format = function(z) {
          var I = this, T = this.$locale();
          if (!this.isValid()) return T.invalidDate || r;
          var W = z || "YYYY-MM-DDTHH:mm:ssZ", J = F.z(this), Q = this.$H, re = this.$m, de = this.$M, pe = T.weekdays, ge = T.months, Ce = T.meridiem, we = function(h, V, A, le) {
            return h && (h[V] || h(I, W)) || A[V].slice(0, le);
          }, ze = function(h) {
            return F.s(Q % 12 || 12, h, "0");
          }, Me = Ce || function(h, V, A) {
            var le = h < 12 ? "AM" : "PM";
            return A ? le.toLowerCase() : le;
          };
          return W.replace(O, (function(h, V) {
            return V || (function(A) {
              switch (A) {
                case "YY":
                  return String(I.$y).slice(-2);
                case "YYYY":
                  return F.s(I.$y, 4, "0");
                case "M":
                  return de + 1;
                case "MM":
                  return F.s(de + 1, 2, "0");
                case "MMM":
                  return we(T.monthsShort, de, ge, 3);
                case "MMMM":
                  return we(ge, de);
                case "D":
                  return I.$D;
                case "DD":
                  return F.s(I.$D, 2, "0");
                case "d":
                  return String(I.$W);
                case "dd":
                  return we(T.weekdaysMin, I.$W, pe, 2);
                case "ddd":
                  return we(T.weekdaysShort, I.$W, pe, 3);
                case "dddd":
                  return pe[I.$W];
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
                  return String(I.$s);
                case "ss":
                  return F.s(I.$s, 2, "0");
                case "SSS":
                  return F.s(I.$ms, 3, "0");
                case "Z":
                  return J;
              }
              return null;
            })(h) || J.replace(":", "");
          }));
        }, M.utcOffset = function() {
          return 15 * -Math.round(this.$d.getTimezoneOffset() / 15);
        }, M.diff = function(z, I, T) {
          var W, J = this, Q = F.p(I), re = j(z), de = (re.utcOffset() - this.utcOffset()) * s, pe = this - re, ge = function() {
            return F.m(J, re);
          };
          switch (Q) {
            case y:
              W = ge() / 12;
              break;
            case d:
              W = ge();
              break;
            case m:
              W = ge() / 3;
              break;
            case g:
              W = (pe - de) / 6048e5;
              break;
            case f:
              W = (pe - de) / 864e5;
              break;
            case b:
              W = pe / l;
              break;
            case c:
              W = pe / s;
              break;
            case u:
              W = pe / n;
              break;
            default:
              W = pe;
          }
          return T ? W : F.a(W);
        }, M.daysInMonth = function() {
          return this.endOf(d).$D;
        }, M.$locale = function() {
          return Y[this.$L];
        }, M.locale = function(z, I) {
          if (!z) return this.$L;
          var T = this.clone(), W = ne(z, I, !0);
          return W && (T.$L = W), T;
        }, M.clone = function() {
          return F.w(this.$d, this);
        }, M.toDate = function() {
          return new Date(this.valueOf());
        }, M.toJSON = function() {
          return this.isValid() ? this.toISOString() : null;
        }, M.toISOString = function() {
          return this.$d.toISOString();
        }, M.toString = function() {
          return this.$d.toUTCString();
        }, $;
      })(), _ = P.prototype;
      return j.prototype = _, [["$ms", i], ["$s", u], ["$m", c], ["$H", b], ["$W", f], ["$M", d], ["$y", y], ["$D", k]].forEach((function($) {
        _[$[1]] = function(M) {
          return this.$g(M, $[0], $[1]);
        };
      })), j.extend = function($, M) {
        return $.$i || ($(M, P, j), $.$i = !0), j;
      }, j.locale = ne, j.isDayjs = N, j.unix = function($) {
        return j(1e3 * $);
      }, j.en = Y[C], j.Ls = Y, j.p = {}, j;
    }));
  })(Ne)), Ne.exports;
}
var Xo = Ko();
const se = /* @__PURE__ */ Mt(Xo);
var Ue = { exports: {} }, Jo = Ue.exports, ct;
function Zo() {
  return ct || (ct = 1, (function(e, v) {
    (function(n, s) {
      e.exports = s();
    })(Jo, (function() {
      var n = { LTS: "h:mm:ss A", LT: "h:mm A", L: "MM/DD/YYYY", LL: "MMMM D, YYYY", LLL: "MMMM D, YYYY h:mm A", LLLL: "dddd, MMMM D, YYYY h:mm A" }, s = /(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|Q|YYYY|YY?|ww?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g, l = /\d/, i = /\d\d/, u = /\d\d?/, c = /\d*[^-_:/,()\s\d]+/, b = {}, f = function(p) {
        return (p = +p) + (p > 68 ? 1900 : 2e3);
      }, g = function(p) {
        return function(O) {
          this[p] = +O;
        };
      }, d = [/[+-]\d\d:?(\d\d)?|Z/, function(p) {
        (this.zone || (this.zone = {})).offset = (function(O) {
          if (!O || O === "Z") return 0;
          var R = O.match(/([+-]|\d\d)/g), B = 60 * R[1] + (+R[2] || 0);
          return B === 0 ? 0 : R[0] === "+" ? -B : B;
        })(p);
      }], m = function(p) {
        var O = b[p];
        return O && (O.indexOf ? O : O.s.concat(O.f));
      }, y = function(p, O) {
        var R, B = b.meridiem;
        if (B) {
          for (var E = 1; E <= 24; E += 1) if (p.indexOf(B(E, 0, O)) > -1) {
            R = E > 12;
            break;
          }
        } else R = p === (O ? "pm" : "PM");
        return R;
      }, k = { A: [c, function(p) {
        this.afternoon = y(p, !1);
      }], a: [c, function(p) {
        this.afternoon = y(p, !0);
      }], Q: [l, function(p) {
        this.month = 3 * (p - 1) + 1;
      }], S: [l, function(p) {
        this.milliseconds = 100 * +p;
      }], SS: [i, function(p) {
        this.milliseconds = 10 * +p;
      }], SSS: [/\d{3}/, function(p) {
        this.milliseconds = +p;
      }], s: [u, g("seconds")], ss: [u, g("seconds")], m: [u, g("minutes")], mm: [u, g("minutes")], H: [u, g("hours")], h: [u, g("hours")], HH: [u, g("hours")], hh: [u, g("hours")], D: [u, g("day")], DD: [i, g("day")], Do: [c, function(p) {
        var O = b.ordinal, R = p.match(/\d+/);
        if (this.day = R[0], O) for (var B = 1; B <= 31; B += 1) O(B).replace(/\[|\]/g, "") === p && (this.day = B);
      }], w: [u, g("week")], ww: [i, g("week")], M: [u, g("month")], MM: [i, g("month")], MMM: [c, function(p) {
        var O = m("months"), R = (m("monthsShort") || O.map((function(B) {
          return B.slice(0, 3);
        }))).indexOf(p) + 1;
        if (R < 1) throw new Error();
        this.month = R % 12 || R;
      }], MMMM: [c, function(p) {
        var O = m("months").indexOf(p) + 1;
        if (O < 1) throw new Error();
        this.month = O % 12 || O;
      }], Y: [/[+-]?\d+/, g("year")], YY: [i, function(p) {
        this.year = f(p);
      }], YYYY: [/\d{4}/, g("year")], Z: d, ZZ: d };
      function r(p) {
        var O, R;
        O = p, R = b && b.formats;
        for (var B = (p = O.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g, (function(j, F, P) {
          var _ = P && P.toUpperCase();
          return F || R[P] || n[P] || R[_].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g, (function($, M, z) {
            return M || z.slice(1);
          }));
        }))).match(s), E = B.length, C = 0; C < E; C += 1) {
          var Y = B[C], D = k[Y], N = D && D[0], ne = D && D[1];
          B[C] = ne ? { regex: N, parser: ne } : Y.replace(/^\[|\]$/g, "");
        }
        return function(j) {
          for (var F = {}, P = 0, _ = 0; P < E; P += 1) {
            var $ = B[P];
            if (typeof $ == "string") _ += $.length;
            else {
              var M = $.regex, z = $.parser, I = j.slice(_), T = M.exec(I)[0];
              z.call(F, T), j = j.replace(T, "");
            }
          }
          return (function(W) {
            var J = W.afternoon;
            if (J !== void 0) {
              var Q = W.hours;
              J ? Q < 12 && (W.hours += 12) : Q === 12 && (W.hours = 0), delete W.afternoon;
            }
          })(F), F;
        };
      }
      return function(p, O, R) {
        R.p.customParseFormat = !0, p && p.parseTwoDigitYear && (f = p.parseTwoDigitYear);
        var B = O.prototype, E = B.parse;
        B.parse = function(C) {
          var Y = C.date, D = C.utc, N = C.args;
          this.$u = D;
          var ne = N[1];
          if (typeof ne == "string") {
            var j = N[2] === !0, F = N[3] === !0, P = j || F, _ = N[2];
            F && (_ = N[2]), b = this.$locale(), !j && _ && (b = R.Ls[_]), this.$d = (function(I, T, W, J) {
              try {
                if (["x", "X"].indexOf(T) > -1) return new Date((T === "X" ? 1e3 : 1) * I);
                var Q = r(T)(I), re = Q.year, de = Q.month, pe = Q.day, ge = Q.hours, Ce = Q.minutes, we = Q.seconds, ze = Q.milliseconds, Me = Q.zone, h = Q.week, V = /* @__PURE__ */ new Date(), A = pe || (re || de ? 1 : V.getDate()), le = re || V.getFullYear(), Se = 0;
                re && !de || (Se = de > 0 ? de - 1 : V.getMonth());
                var Ve, Oe = ge || 0, Xe = Ce || 0, Je = we || 0, Ze = ze || 0;
                return Me ? new Date(Date.UTC(le, Se, A, Oe, Xe, Je, Ze + 60 * Me.offset * 1e3)) : W ? new Date(Date.UTC(le, Se, A, Oe, Xe, Je, Ze)) : (Ve = new Date(le, Se, A, Oe, Xe, Je, Ze), h && (Ve = J(Ve).week(h).toDate()), Ve);
              } catch {
                return /* @__PURE__ */ new Date("");
              }
            })(Y, ne, D, R), this.init(), _ && _ !== !0 && (this.$L = this.locale(_).$L), P && Y != this.format(ne) && (this.$d = /* @__PURE__ */ new Date("")), b = {};
          } else if (ne instanceof Array) for (var $ = ne.length, M = 1; M <= $; M += 1) {
            N[1] = ne[M - 1];
            var z = R.apply(this, N);
            if (z.isValid()) {
              this.$d = z.$d, this.$L = z.$L, this.init();
              break;
            }
            M === $ && (this.$d = /* @__PURE__ */ new Date(""));
          }
          else E.call(this, C);
        };
      };
    }));
  })(Ue)), Ue.exports;
}
var Go = Zo();
const Ct = /* @__PURE__ */ Mt(Go), Qo = { class: "calendar-header" }, ea = { class: "flex flex--gap-sm" }, ta = { key: 0 }, na = { class: "calendar-weekdays" }, oa = { class: "calendar-days" }, aa = ["onClick"], la = {
  key: 1,
  class: "calendar-months"
}, sa = ["onClick"], ia = {
  key: 2,
  class: "calendar-years"
}, ua = ["onClick"], ra = { class: "flex flex--space flex--gap-md px-2 pb-2" }, da = {
  key: 0,
  class: "flex flex--gap-sm"
}, ca = { key: 1 }, fa = {
  key: 3,
  class: "calendar-time"
}, va = { class: "fu-time-input-wrapper" }, ma = {
  key: 0,
  class: "fu-time-dropdown customScrollBar"
}, pa = ["onMousedown"], Ie = 12, ha = {
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
    const n = e, s = w(!1), l = v, i = w(!1), u = w(null), c = w(null), b = w(null), f = w(se().startOf("month")), g = w(null), d = w({ start: null, end: null }), m = w("00:00"), y = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"], k = [
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
    ], r = w("days"), p = H(
      () => Math.floor(f.value.year() / Ie) * Ie
    ), O = H(() => p.value + Ie - 1), R = H(
      () => Array.from({ length: Ie }, (h, V) => p.value + V)
    ), B = H(() => {
      const h = f.value.startOf("month").startOf("week"), V = f.value.endOf("month").endOf("week"), A = [];
      let le = h.clone();
      for (; le.isBefore(V) || le.isSame(V, "day"); )
        A.push({
          date: le.clone(),
          isCurrentMonth: le.month() === f.value.month()
        }), le = le.add(1, "day");
      return A;
    });
    function E(h) {
      return !!(n.min && h.isBefore(se(n.min), "day") || n.max && h.isAfter(se(n.max), "day"));
    }
    function C(h) {
      return n.variant === "date-range" ? d.value.start && h.isSame(d.value.start, "day") || d.value.end && h.isSame(d.value.end, "day") : g.value && h.isSame(g.value, "day");
    }
    function Y(h) {
      return n.variant === "date-range" && d.value.start && d.value.end && h.isAfter(d.value.start, "day") && h.isBefore(d.value.end, "day");
    }
    function D(h) {
      if (!E(h)) {
        if (n.variant === "date-range") {
          !d.value.start || u.value === "start" ? (d.value.start = h.clone(), d.value.end = null, u.value = "end") : h.isBefore(d.value.start, "day") ? (d.value.end = d.value.start.clone(), d.value.start = h.clone()) : d.value.end = h.clone();
          return;
        }
        g.value = h.clone(), l(
          "update:modelValue",
          n.variant === "date-time" ? g.value.format("YYYY-MM-DDTHH:mm") : g.value.format("YYYY-MM-DD")
        ), j();
      }
    }
    function N() {
      d.value.start && d.value.end && (l("update:modelValue", {
        start: d.value.start.format("YYYY-MM-DD"),
        end: d.value.end.format("YYYY-MM-DD")
      }), j());
    }
    function ne(h = null) {
      u.value = h, i.value = !0, n.variant === "date-range" ? d.value.start ? f.value = d.value.start.startOf("month") : f.value = se().startOf("month") : g.value ? f.value = g.value.startOf("month") : f.value = se().startOf("month"), ve(() => {
        _(), window.addEventListener("resize", _), window.addEventListener("click", F);
      });
    }
    function j() {
      i.value = !1, window.removeEventListener("resize", _), window.removeEventListener("click", F);
    }
    function F(h) {
      !c.value?.contains(h.target) && !b.value?.contains(h.target) && j();
    }
    const P = w({
      position: "absolute",
      top: "0px",
      left: "0px",
      zIndex: 9999
    });
    function _() {
      if (!c.value || !b.value) return;
      const h = c.value.getBoundingClientRect(), V = b.value.getBoundingClientRect(), A = window.innerHeight - h.bottom, le = h.top, Se = window.scrollY || window.pageYOffset, Ve = window.scrollX || window.pageXOffset;
      let Oe;
      A < V.height && le > V.height ? Oe = h.top + Se - V.height - 6 : Oe = h.bottom + Se + 6, P.value = {
        position: "absolute",
        top: `${Oe}px`,
        left: `${h.left + Ve}px`,
        zIndex: 9999
      };
    }
    const $ = H(() => g.value ? n.variant === "date-time" ? g.value.format("YYYY-MM-DD HH:mm") : g.value.format("YYYY-MM-DD") : ""), M = H(() => n.variant !== "date-range" ? "" : d.value.start && d.value.end ? `${d.value.start.format(
      "YYYY-MM-DD"
    )} to ${d.value.end.format("YYYY-MM-DD")}` : d.value.start ? `${d.value.start.format("YYYY-MM-DD")} to ...` : ""), z = H(() => `fu-date-picker--${n.variant}`);
    fe(
      () => n.modelValue,
      (h) => {
        if (n.variant !== "date-range") {
          if (typeof h == "string" && h) {
            const V = se(h);
            if (V.isValid()) {
              g.value = V, f.value = V.startOf("month"), n.variant === "date-time" ? m.value = V.format("h:mm A") : m.value = "00:00";
              return;
            }
          }
          (h === null || h === "") && (g.value = null, d.value = { start: null, end: null }, m.value = "00:00");
        }
      },
      { immediate: !0 }
    );
    function I() {
      r.value === "days" ? r.value = "months" : r.value === "months" ? r.value = "years" : r.value = "days";
    }
    function T() {
      r.value === "days" ? f.value = f.value.subtract(1, "month") : r.value === "months" ? f.value = f.value.subtract(1, "year") : f.value = f.value.subtract(Ie, "year");
    }
    function W() {
      r.value === "days" ? f.value = f.value.add(1, "month") : r.value === "months" ? f.value = f.value.add(1, "year") : f.value = f.value.add(Ie, "year");
    }
    function J(h) {
      f.value = f.value.month(h), r.value = "days";
    }
    function Q(h) {
      f.value = f.value.year(h), r.value = "months";
    }
    function re() {
      const h = se();
      n.variant === "date-range" ? d.value = { start: h.clone(), end: h.clone() } : (g.value = h.clone(), l(
        "update:modelValue",
        n.variant === "date-time" ? h.format("YYYY-MM-DDTHH:mm") : h.format("YYYY-MM-DD")
      ), j());
    }
    function de() {
      const h = se().add(1, "day");
      n.variant === "date-range" ? d.value = { start: h.clone(), end: h.clone() } : (g.value = h.clone(), l(
        "update:modelValue",
        n.variant === "date-time" ? h.format("YYYY-MM-DDTHH:mm") : h.format("YYYY-MM-DD")
      ), j());
    }
    function pe() {
      g.value = null, d.value = { start: null, end: null }, l(
        "update:modelValue",
        n.variant === "date-range" ? { start: null, end: null } : null
      ), j();
    }
    const ge = H(() => {
      const h = [];
      for (let V = 0; V < 24; V++)
        for (let A = 0; A < 60; A += 15)
          h.push(se().hour(V).minute(A).format("h:mm A"));
      return h;
    }), Ce = H(() => {
      if (!m.value) return ge.value;
      const h = m.value.toLowerCase().replace(/\s+/g, "");
      return ge.value.filter(
        (V) => V.toLowerCase().replace(/\s+/g, "").startsWith(h)
      );
    });
    function we() {
      if (!g.value || !m.value) return;
      const h = String(m.value).trim().toLowerCase(), V = se(
        h,
        ["h:mm a", "h:mma", "ha", "h a", "hh:mm a", "H:mm", "HH:mm", "H"],
        !0
      );
      if (!V.isValid()) {
        s.value = !1;
        return;
      }
      g.value = g.value.hour(V.hour()).minute(V.minute()), m.value = g.value.format("h:mm A"), l("update:modelValue", g.value.format("YYYY-MM-DDTHH:mm")), s.value = !1;
    }
    function ze(h) {
      m.value = h, we();
    }
    function Me() {
      setTimeout(() => {
        we(), s.value = !1;
      }, 120);
    }
    return _e(() => {
      window.removeEventListener("resize", _), window.removeEventListener("click", F);
    }), (h, V) => (t(), o("div", {
      class: q(["fu-date-picker", z.value]),
      ref_key: "pickerRef",
      ref: c,
      style: oe({ width: e.formWrapperWidth })
    }, [
      e.variant !== "date-range" ? (t(), U(xe, {
        key: 0,
        type: "text",
        modelValue: $.value,
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
          L(G($e))
        ]),
        _: 1
      }, 8, ["modelValue", "formWrapperWidth", "size", "error", "required", "label", "disabled"])) : (t(), U(xe, {
        key: 1,
        type: "text",
        modelValue: M.value,
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
          L(G($e))
        ]),
        _: 1
      }, 8, ["modelValue", "formWrapperWidth", "size", "error", "required", "disabled"])),
      (t(), U(be, { to: "body" }, [
        i.value ? (t(), o("div", {
          key: 0,
          class: "fu-date-picker__calendar-overlay",
          onClick: ue(j, ["self"])
        }, [
          a("div", {
            class: "fu-date-picker__calendar",
            style: oe(P.value),
            ref_key: "calendarRef",
            ref: b,
            onClick: V[2] || (V[2] = ue(() => {
            }, ["stop"]))
          }, [
            a("div", Qo, [
              L(ye, {
                variant: "ghost",
                size: "sm",
                icon: G($e),
                onClick: I
              }, {
                default: ae(() => [
                  r.value === "days" ? (t(), o(X, { key: 0 }, [
                    ie(S(f.value.format("MMMM YYYY")), 1)
                  ], 64)) : r.value === "months" ? (t(), o(X, { key: 1 }, [
                    ie(S(f.value.year()), 1)
                  ], 64)) : (t(), o(X, { key: 2 }, [
                    ie(S(p.value) + " - " + S(O.value), 1)
                  ], 64))
                ]),
                _: 1
              }, 8, ["icon"]),
              a("div", ea, [
                L(ke, {
                  icon: G(Ae),
                  size: "sm",
                  onClick: T
                }, null, 8, ["icon"]),
                L(ke, {
                  icon: G(We),
                  size: "sm",
                  onClick: W
                }, null, 8, ["icon"])
              ])
            ]),
            r.value === "days" ? (t(), o("div", ta, [
              a("div", na, [
                (t(), o(X, null, te(y, (A) => a("div", {
                  key: A,
                  class: "calendar-weekday"
                }, S(A), 1)), 64))
              ]),
              a("div", oa, [
                (t(!0), o(X, null, te(B.value, (A) => (t(), o("div", {
                  key: A.date.toString(),
                  class: q(["calendar-day", {
                    "calendar-day--other-month": !A.isCurrentMonth,
                    "calendar-day--selected": C(A.date),
                    "calendar-day--in-range": Y(A.date),
                    "calendar-day--disabled": E(A.date)
                  }]),
                  onClick: (le) => D(A.date)
                }, S(A.date.date()), 11, aa))), 128))
              ])
            ])) : r.value === "months" ? (t(), o("div", la, [
              (t(), o(X, null, te(k, (A, le) => a("div", {
                key: A,
                class: q(["calendar-month", { "calendar-month--selected": le === f.value.month() }]),
                onClick: (Se) => J(le)
              }, S(A), 11, sa)), 64))
            ])) : (t(), o("div", ia, [
              (t(!0), o(X, null, te(R.value, (A) => (t(), o("div", {
                key: A,
                class: q(["calendar-year", { "calendar-year--selected": A === f.value.year() }]),
                onClick: (le) => Q(A)
              }, S(A), 11, ua))), 128))
            ])),
            V[7] || (V[7] = a("hr", null, null, -1)),
            a("div", ra, [
              e.variant !== "date-range" ? (t(), o("div", da, [
                L(ye, {
                  variant: "outline",
                  onClick: re
                }, {
                  default: ae(() => [...V[3] || (V[3] = [
                    ie("Today", -1)
                  ])]),
                  _: 1
                }),
                L(ye, {
                  variant: "outline",
                  onClick: de
                }, {
                  default: ae(() => [...V[4] || (V[4] = [
                    ie("Tomorrow", -1)
                  ])]),
                  _: 1
                })
              ])) : x("", !0),
              e.variant === "date-range" ? (t(), o("div", ca, [
                L(ye, {
                  variant: "outline",
                  onClick: N
                }, {
                  default: ae(() => [...V[5] || (V[5] = [
                    ie("Apply", -1)
                  ])]),
                  _: 1
                })
              ])) : x("", !0),
              L(ye, {
                variant: "outline",
                onClick: pe
              }, {
                default: ae(() => [...V[6] || (V[6] = [
                  ie("Clear", -1)
                ])]),
                _: 1
              })
            ]),
            e.variant === "date-time" ? (t(), o("div", fa, [
              a("div", va, [
                L(xe, {
                  type: "text",
                  modelValue: m.value,
                  "onUpdate:modelValue": V[0] || (V[0] = (A) => m.value = A),
                  placeholder: "HH:mm or 4:30pm",
                  onFocus: V[1] || (V[1] = (A) => s.value = !0),
                  onKeydown: Ye(ue(we, ["prevent"]), ["enter"]),
                  onBlur: Me,
                  formWrapperWidth: "100%"
                }, {
                  right: ae(() => [
                    L(G($e))
                  ]),
                  _: 1
                }, 8, ["modelValue", "onKeydown"]),
                s.value ? (t(), o("div", ma, [
                  (t(!0), o(X, null, te(Ce.value, (A) => (t(), o("div", {
                    key: A,
                    class: "fu-time-option",
                    onMousedown: ue((le) => ze(A), ["prevent"])
                  }, S(A), 41, pa))), 128))
                ])) : x("", !0)
              ])
            ])) : x("", !0)
          ], 4)
        ])) : x("", !0)
      ]))
    ], 6));
  }
}, _a = /* @__PURE__ */ K(ha, [["__scopeId", "data-v-41bea5ec"]]), ga = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _a
}, Symbol.toStringTag, { value: "Module" })), ya = { class: "calendar-header" }, ba = { class: "flex flex--gap-sm" }, wa = { key: 0 }, ka = { class: "calendar-weekdays" }, $a = { class: "calendar-days" }, Ma = ["onClick"], Ca = {
  key: 1,
  class: "calendar-months"
}, Sa = ["onClick"], xa = {
  key: 2,
  class: "calendar-years"
}, za = ["onClick"], Oa = { class: "flex flex--space flex--gap-md px-2 pb-2" }, Da = {
  key: 0,
  class: "flex flex--gap-sm"
}, Ya = { key: 1 }, Ta = {
  key: 3,
  class: "calendar-time"
}, Va = { class: "fu-time-input-wrapper" }, Fa = {
  key: 0,
  class: "fu-time-dropdown customScrollBar"
}, Ba = ["onMousedown"], je = 12, Ia = {
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
    const n = e, s = w(!1), l = v, i = w(!1), u = w(null), c = w(null), b = w(null), f = w(se().startOf("month")), g = w(null), d = w({ start: null, end: null }), m = w("00:00"), y = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"], k = [
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
    ], r = w("days"), p = H(
      () => Math.floor(f.value.year() / je) * je
    ), O = H(() => p.value + je - 1), R = H(
      () => Array.from({ length: je }, (h, V) => p.value + V)
    ), B = H(() => {
      const h = f.value.startOf("month").startOf("week"), V = f.value.endOf("month").endOf("week"), A = [];
      let le = h.clone();
      for (; le.isBefore(V) || le.isSame(V, "day"); )
        A.push({
          date: le.clone(),
          isCurrentMonth: le.month() === f.value.month()
        }), le = le.add(1, "day");
      return A;
    });
    function E(h) {
      return !!(n.min && h.isBefore(se(n.min), "day") || n.max && h.isAfter(se(n.max), "day"));
    }
    function C(h) {
      return n.variant === "date-range" ? d.value.start && h.isSame(d.value.start, "day") || d.value.end && h.isSame(d.value.end, "day") : g.value && h.isSame(g.value, "day");
    }
    function Y(h) {
      return n.variant === "date-range" && d.value.start && d.value.end && h.isAfter(d.value.start, "day") && h.isBefore(d.value.end, "day");
    }
    function D(h) {
      if (!E(h)) {
        if (n.variant === "date-range") {
          !d.value.start || u.value === "start" ? (d.value.start = h.clone(), d.value.end = null, u.value = "end") : h.isBefore(d.value.start, "day") ? (d.value.end = d.value.start.clone(), d.value.start = h.clone()) : d.value.end = h.clone();
          return;
        }
        g.value = h.clone(), l(
          "update:modelValue",
          n.variant === "date-time" ? g.value.format("YYYY-MM-DDTHH:mm") : g.value.format("YYYY-MM-DD")
        ), j();
      }
    }
    function N() {
      d.value.start && d.value.end && (l("update:modelValue", {
        start: d.value.start.format("YYYY-MM-DD"),
        end: d.value.end.format("YYYY-MM-DD")
      }), j());
    }
    function ne(h = null) {
      u.value = h, i.value = !0, n.variant === "date-range" ? d.value.start ? f.value = d.value.start.startOf("month") : f.value = se().startOf("month") : g.value ? f.value = g.value.startOf("month") : f.value = se().startOf("month"), ve(() => {
        _(), window.addEventListener("resize", _), window.addEventListener("click", F);
      });
    }
    function j() {
      i.value = !1, window.removeEventListener("resize", _), window.removeEventListener("click", F);
    }
    function F(h) {
      !c.value?.contains(h.target) && !b.value?.contains(h.target) && j();
    }
    const P = w({
      position: "absolute",
      top: "0px",
      left: "0px",
      zIndex: 9999
    });
    function _() {
      if (!c.value || !b.value) return;
      const h = c.value.getBoundingClientRect(), V = b.value.getBoundingClientRect(), A = window.innerHeight - h.bottom, le = h.top, Se = window.scrollY || window.pageYOffset, Ve = window.scrollX || window.pageXOffset;
      let Oe;
      A < V.height && le > V.height ? Oe = h.top + Se - V.height - 6 : Oe = h.bottom + Se + 6, P.value = {
        position: "absolute",
        top: `${Oe}px`,
        left: `${h.left + Ve}px`,
        zIndex: 9999
      };
    }
    const $ = H(() => g.value ? n.variant === "date-time" ? g.value.format("YYYY-MM-DD HH:mm") : g.value.format("YYYY-MM-DD") : ""), M = H(() => n.variant !== "date-range" ? "" : d.value.start && d.value.end ? `${d.value.start.format(
      "YYYY-MM-DD"
    )} to ${d.value.end.format("YYYY-MM-DD")}` : d.value.start ? `${d.value.start.format("YYYY-MM-DD")} to ...` : ""), z = H(() => `fu-date-picker--${n.variant}`);
    fe(
      () => n.modelValue,
      (h) => {
        if (n.variant !== "date-range") {
          if (typeof h == "string" && h) {
            const V = se(h);
            if (V.isValid()) {
              g.value = V, f.value = V.startOf("month"), n.variant === "date-time" ? m.value = V.format("h:mm A") : m.value = "00:00";
              return;
            }
          }
          (h === null || h === "") && (g.value = null, d.value = { start: null, end: null }, m.value = "00:00");
        }
      },
      { immediate: !0 }
    );
    function I() {
      r.value === "days" ? r.value = "months" : r.value === "months" ? r.value = "years" : r.value = "days";
    }
    function T() {
      r.value === "days" ? f.value = f.value.subtract(1, "month") : r.value === "months" ? f.value = f.value.subtract(1, "year") : f.value = f.value.subtract(je, "year");
    }
    function W() {
      r.value === "days" ? f.value = f.value.add(1, "month") : r.value === "months" ? f.value = f.value.add(1, "year") : f.value = f.value.add(je, "year");
    }
    function J(h) {
      f.value = f.value.month(h), r.value = "days";
    }
    function Q(h) {
      f.value = f.value.year(h), r.value = "months";
    }
    function re() {
      const h = se();
      n.variant === "date-range" ? d.value = { start: h.clone(), end: h.clone() } : (g.value = h.clone(), l(
        "update:modelValue",
        n.variant === "date-time" ? h.format("YYYY-MM-DDTHH:mm") : h.format("YYYY-MM-DD")
      ), j());
    }
    function de() {
      const h = se().add(1, "day");
      n.variant === "date-range" ? d.value = { start: h.clone(), end: h.clone() } : (g.value = h.clone(), l(
        "update:modelValue",
        n.variant === "date-time" ? h.format("YYYY-MM-DDTHH:mm") : h.format("YYYY-MM-DD")
      ), j());
    }
    function pe() {
      g.value = null, d.value = { start: null, end: null }, l(
        "update:modelValue",
        n.variant === "date-range" ? { start: null, end: null } : null
      ), j();
    }
    const ge = H(() => {
      const h = [];
      for (let V = 0; V < 24; V++)
        for (let A = 0; A < 60; A += 15)
          h.push(se().hour(V).minute(A).format("h:mm A"));
      return h;
    }), Ce = H(() => {
      if (!m.value) return ge.value;
      const h = m.value.toLowerCase().replace(/\s+/g, "");
      return ge.value.filter(
        (V) => V.toLowerCase().replace(/\s+/g, "").startsWith(h)
      );
    });
    function we() {
      if (!g.value || !m.value) return;
      const h = String(m.value).trim().toLowerCase(), V = se(
        h,
        ["h:mm a", "h:mma", "ha", "h a", "hh:mm a", "H:mm", "HH:mm", "H"],
        !0
      );
      if (!V.isValid()) {
        s.value = !1;
        return;
      }
      g.value = g.value.hour(V.hour()).minute(V.minute()), m.value = g.value.format("h:mm A"), l("update:modelValue", g.value.format("YYYY-MM-DDTHH:mm")), s.value = !1;
    }
    function ze(h) {
      m.value = h, we();
    }
    function Me() {
      setTimeout(() => {
        we(), s.value = !1;
      }, 120);
    }
    return _e(() => {
      window.removeEventListener("resize", _), window.removeEventListener("click", F);
    }), (h, V) => (t(), o("div", {
      class: q(["fu-date-picker", z.value]),
      ref_key: "pickerRef",
      ref: c,
      style: oe({ width: e.formWrapperWidth })
    }, [
      e.variant !== "date-range" ? (t(), U(xe, {
        key: 0,
        type: "text",
        modelValue: $.value,
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
          L(G($e))
        ]),
        _: 1
      }, 8, ["modelValue", "formWrapperWidth", "size", "error", "required", "label", "disabled"])) : (t(), U(xe, {
        key: 1,
        type: "text",
        modelValue: M.value,
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
          L(G($e))
        ]),
        _: 1
      }, 8, ["modelValue", "formWrapperWidth", "size", "error", "required", "disabled"])),
      (t(), U(be, { to: "body" }, [
        i.value ? (t(), o("div", {
          key: 0,
          class: "fu-date-picker__calendar-overlay",
          onClick: ue(j, ["self"])
        }, [
          a("div", {
            class: "fu-date-picker__calendar",
            style: oe(P.value),
            ref_key: "calendarRef",
            ref: b,
            onClick: V[2] || (V[2] = ue(() => {
            }, ["stop"]))
          }, [
            a("div", ya, [
              L(ye, {
                variant: "ghost",
                size: "sm",
                onClick: I
              }, {
                default: ae(() => [
                  r.value === "days" ? (t(), o(X, { key: 0 }, [
                    ie(S(f.value.format("MMMM YYYY")), 1)
                  ], 64)) : r.value === "months" ? (t(), o(X, { key: 1 }, [
                    ie(S(f.value.year()), 1)
                  ], 64)) : (t(), o(X, { key: 2 }, [
                    ie(S(p.value) + " - " + S(O.value), 1)
                  ], 64))
                ]),
                _: 1
              }),
              a("div", ba, [
                L(ke, {
                  icon: G(Ae),
                  size: "sm",
                  onClick: T
                }, null, 8, ["icon"]),
                L(ke, {
                  icon: G(We),
                  size: "sm",
                  onClick: W
                }, null, 8, ["icon"])
              ])
            ]),
            r.value === "days" ? (t(), o("div", wa, [
              a("div", ka, [
                (t(), o(X, null, te(y, (A) => a("div", {
                  key: A,
                  class: "calendar-weekday"
                }, S(A), 1)), 64))
              ]),
              a("div", $a, [
                (t(!0), o(X, null, te(B.value, (A) => (t(), o("div", {
                  key: A.date.toString(),
                  class: q(["calendar-day", {
                    "calendar-day--other-month": !A.isCurrentMonth,
                    "calendar-day--selected": C(A.date),
                    "calendar-day--in-range": Y(A.date),
                    "calendar-day--disabled": E(A.date)
                  }]),
                  onClick: (le) => D(A.date)
                }, S(A.date.date()), 11, Ma))), 128))
              ])
            ])) : r.value === "months" ? (t(), o("div", Ca, [
              (t(), o(X, null, te(k, (A, le) => a("div", {
                key: A,
                class: q(["calendar-month", { "calendar-month--selected": le === f.value.month() }]),
                onClick: (Se) => J(le)
              }, S(A), 11, Sa)), 64))
            ])) : (t(), o("div", xa, [
              (t(!0), o(X, null, te(R.value, (A) => (t(), o("div", {
                key: A,
                class: q(["calendar-year", { "calendar-year--selected": A === f.value.year() }]),
                onClick: (le) => Q(A)
              }, S(A), 11, za))), 128))
            ])),
            V[7] || (V[7] = a("hr", null, null, -1)),
            a("div", Oa, [
              e.variant !== "date-range" ? (t(), o("div", Da, [
                L(ye, {
                  variant: "outline",
                  onClick: re
                }, {
                  default: ae(() => [...V[3] || (V[3] = [
                    ie("Today", -1)
                  ])]),
                  _: 1
                }),
                L(ye, {
                  variant: "outline",
                  onClick: de
                }, {
                  default: ae(() => [...V[4] || (V[4] = [
                    ie("Tomorrow", -1)
                  ])]),
                  _: 1
                })
              ])) : x("", !0),
              e.variant === "date-range" ? (t(), o("div", Ya, [
                L(ye, {
                  variant: "outline",
                  onClick: N
                }, {
                  default: ae(() => [...V[5] || (V[5] = [
                    ie("Apply", -1)
                  ])]),
                  _: 1
                })
              ])) : x("", !0),
              L(ye, {
                variant: "outline",
                onClick: pe
              }, {
                default: ae(() => [...V[6] || (V[6] = [
                  ie("Clear", -1)
                ])]),
                _: 1
              })
            ]),
            e.variant === "date-time" ? (t(), o("div", Ta, [
              a("div", Va, [
                L(xe, {
                  type: "text",
                  modelValue: m.value,
                  "onUpdate:modelValue": V[0] || (V[0] = (A) => m.value = A),
                  placeholder: "HH:mm or 4:30pm",
                  onFocus: V[1] || (V[1] = (A) => s.value = !0),
                  onKeydown: Ye(ue(we, ["prevent"]), ["enter"]),
                  onBlur: Me,
                  formWrapperWidth: "100%"
                }, {
                  right: ae(() => [
                    L(G($e))
                  ]),
                  _: 1
                }, 8, ["modelValue", "onKeydown"]),
                s.value ? (t(), o("div", Fa, [
                  (t(!0), o(X, null, te(Ce.value, (A) => (t(), o("div", {
                    key: A,
                    class: "fu-time-option",
                    onMousedown: ue((le) => ze(A), ["prevent"])
                  }, S(A), 41, Ba))), 128))
                ])) : x("", !0)
              ])
            ])) : x("", !0)
          ], 4)
        ])) : x("", !0)
      ]))
    ], 6));
  }
}, ja = /* @__PURE__ */ K(Ia, [["__scopeId", "data-v-7bb6d1f9"]]), Ea = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: ja
}, Symbol.toStringTag, { value: "Module" })), Pa = { class: "calendar-header" }, La = { class: "flex flex--gap-sm" }, Aa = {
  key: 0,
  class: "calendar-months"
}, Wa = ["onClick"], Ra = {
  key: 1,
  class: "calendar-years"
}, Ha = ["onClick"], qa = { class: "flex flex--space flex--gap-md px-2 pb-2" }, He = 12, Na = {
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
    const n = e, s = v, l = w(!1), i = w(null), u = w(null), c = w("months"), b = w(se().year()), f = [
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
    ], g = H(
      () => b.value - b.value % He
    ), d = H(() => g.value + He - 1), m = H(() => {
      const _ = g.value;
      return Array.from({ length: He }, ($, M) => _ + M);
    }), y = H(() => {
      if (!n.modelValue) return null;
      const _ = se(n.modelValue, "YYYY-MM", !0);
      return _.isValid() ? _ : null;
    });
    function k(_) {
      return y.value ? y.value.month() === _ && y.value.year() === b.value : !1;
    }
    function r(_) {
      const $ = se(
        `${b.value}-${(_ + 1).toString().padStart(2, "0")}`,
        "YYYY-MM"
      );
      return !!(n.min && $.isBefore(se(n.min, "YYYY-MM"), "month") || n.max && $.isAfter(se(n.max, "YYYY-MM"), "month"));
    }
    function p(_) {
      b.value = _, c.value = "months";
    }
    function O(_) {
      if (r(_)) return;
      const $ = se(
        `${b.value}-${(_ + 1).toString().padStart(2, "0")}`,
        "YYYY-MM"
      );
      s("update:modelValue", $.format("MMM, YYYY")), l.value = !1;
    }
    function R() {
      const _ = se();
      b.value = _.year(), s("update:modelValue", _.format("MMM, YYYY")), l.value = !1;
    }
    function B() {
      n.disabled || (l.value = !l.value, l.value ? (y.value && (b.value = y.value.year()), ve(() => {
        D(), window.addEventListener("resize", D), window.addEventListener("click", C);
      })) : (window.removeEventListener("resize", D), window.removeEventListener("click", C)));
    }
    function E() {
      l.value = !1, window.removeEventListener("resize", D), window.removeEventListener("click", C);
    }
    function C(_) {
      !i.value?.contains(_.target) && !u.value?.contains(_.target) && E();
    }
    const Y = w({
      position: "absolute",
      top: "0px",
      left: "0px",
      zIndex: 9999
    });
    function D() {
      if (!i.value || !u.value) return;
      const _ = i.value.getBoundingClientRect(), $ = u.value.getBoundingClientRect(), M = window.innerHeight - _.bottom, z = _.top, I = window.scrollY || window.pageYOffset, T = window.scrollX || window.pageXOffset;
      let W;
      M < $.height && z > $.height ? W = _.top + I - $.height - 6 : W = _.bottom + I + 6, Y.value = {
        position: "absolute",
        top: `${W}px`,
        left: `${_.left + T}px`,
        zIndex: 9999
      };
    }
    function N() {
      c.value = c.value === "months" ? "years" : "months";
    }
    function ne() {
      c.value === "months" ? b.value-- : b.value = Math.max(g.value - He, 0);
    }
    function j() {
      c.value === "months" ? b.value++ : b.value = d.value + 1;
    }
    function F() {
      s("update:modelValue", null), l.value = !1;
    }
    const P = H(() => n.modelValue || "");
    return _e(() => {
      window.removeEventListener("resize", D), window.removeEventListener("click", C);
    }), (_, $) => (t(), o("div", {
      class: "fu-month-picker",
      ref_key: "pickerRef",
      ref: i,
      style: oe({ width: e.formWrapperWidth })
    }, [
      L(xe, {
        type: "text",
        modelValue: P.value,
        placeholder: "Select month",
        readonly: "",
        onClick: [
          B,
          ue(E, ["self"])
        ],
        formWrapperWidth: e.formWrapperWidth,
        size: e.size,
        error: e.error,
        required: e.required,
        label: e.label,
        disabled: e.disabled
      }, {
        right: ae(() => [
          L(G($e))
        ]),
        _: 1
      }, 8, ["modelValue", "formWrapperWidth", "size", "error", "required", "label", "disabled"]),
      (t(), U(be, { to: "body" }, [
        l.value ? (t(), o("div", {
          key: 0,
          class: "fu-month-picker__calendar-overlay",
          onClick: ue(E, ["self"])
        }, [
          a("div", {
            class: "fu-month-picker__calendar",
            style: oe(Y.value),
            ref_key: "calendarRef",
            ref: u,
            onClick: $[0] || ($[0] = ue(() => {
            }, ["stop"]))
          }, [
            a("div", Pa, [
              L(ye, {
                variant: "ghost",
                size: "sm",
                onClick: N,
                icon: G($e)
              }, {
                default: ae(() => [
                  c.value === "months" ? (t(), o(X, { key: 0 }, [
                    ie(S(b.value), 1)
                  ], 64)) : (t(), o(X, { key: 1 }, [
                    ie(S(g.value) + " - " + S(d.value), 1)
                  ], 64))
                ]),
                _: 1
              }, 8, ["icon"]),
              a("div", La, [
                L(ke, {
                  icon: G(Ae),
                  size: "sm",
                  onClick: ne
                }, null, 8, ["icon"]),
                L(ke, {
                  icon: G(We),
                  size: "sm",
                  onClick: j
                }, null, 8, ["icon"])
              ])
            ]),
            c.value === "months" ? (t(), o("div", Aa, [
              (t(), o(X, null, te(f, (M, z) => a("div", {
                key: M,
                class: q(["calendar-month", {
                  "calendar-month--selected": k(z),
                  "calendar-month--disabled": r(z)
                }]),
                onClick: (I) => O(z)
              }, S(M), 11, Wa)), 64))
            ])) : (t(), o("div", Ra, [
              (t(!0), o(X, null, te(m.value, (M) => (t(), o("div", {
                key: M,
                class: q(["calendar-year", { "calendar-year--selected": M === b.value }]),
                onClick: (z) => p(M)
              }, S(M), 11, Ha))), 128))
            ])),
            $[3] || ($[3] = a("hr", null, null, -1)),
            a("div", qa, [
              L(ye, {
                variant: "outline",
                onClick: R
              }, {
                default: ae(() => [...$[1] || ($[1] = [
                  ie(" This Month ", -1)
                ])]),
                _: 1
              }),
              L(ye, {
                variant: "outline",
                onClick: F
              }, {
                default: ae(() => [...$[2] || ($[2] = [
                  ie(" Clear ", -1)
                ])]),
                _: 1
              })
            ])
          ], 4)
        ])) : x("", !0)
      ]))
    ], 4));
  }
}, Ua = /* @__PURE__ */ K(Na, [["__scopeId", "data-v-7377986b"]]), Ka = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Ua
}, Symbol.toStringTag, { value: "Module" })), Xa = { class: "calendar-header" }, Ja = { class: "flex flex--gap-sm" }, Za = { key: 0 }, Ga = { class: "calendar-weekdays" }, Qa = { class: "calendar-days" }, el = ["onClick"], tl = {
  key: 1,
  class: "calendar-months"
}, nl = ["onClick"], ol = {
  key: 2,
  class: "calendar-years"
}, al = ["onClick"], ll = {
  key: 3,
  class: "calendar-time"
}, sl = {
  key: 0,
  class: "fu-time-dropdown customScrollBar"
}, il = ["onMousedown"], qe = 12, ul = {
  __name: "FusionPlainDatePicker",
  props: {
    modelValue: String,
    variant: { type: String, default: "date" },
    // "date" or "date-time"
    formWrapperWidth: String
  },
  emits: ["update:modelValue"],
  setup(e, { emit: v }) {
    const n = e, s = v, l = w(se().startOf("month")), i = w(null), u = w("00:00"), c = w("days"), b = w(!1), f = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"], g = [
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
    ], d = H(
      () => Math.floor(l.value.year() / qe) * qe
    ), m = H(() => d.value + qe - 1), y = H(
      () => Array.from({ length: qe }, (F, P) => d.value + P)
    ), k = H(() => {
      const F = l.value.startOf("month").startOf("week"), P = l.value.endOf("month").endOf("week"), _ = [];
      let $ = F.clone();
      for (; $.isBefore(P) || $.isSame(P, "day"); )
        _.push({
          date: $.clone(),
          isCurrentMonth: $.month() === l.value.month()
        }), $ = $.add(1, "day");
      return _;
    }), r = H(() => {
      const F = [];
      for (let P = 0; P < 24; P++)
        for (let _ = 0; _ < 60; _ += 15)
          F.push(se().hour(P).minute(_).format("h:mm A"));
      return F;
    }), p = H(() => r.value), O = () => !1, R = (F) => i.value && F.isSame(i.value, "day");
    function B(F) {
      if (i.value = F.clone(), n.variant === "date-time") {
        const P = se(
          `${i.value.format("YYYY-MM-DD")} ${u.value}`,
          "YYYY-MM-DD HH:mm"
        );
        s("update:modelValue", P.format("YYYY-MM-DDTHH:mm"));
      } else
        s("update:modelValue", i.value.format("YYYY-MM-DD"));
    }
    const E = () => l.value = l.value.subtract(1, "month"), C = () => l.value = l.value.add(1, "month"), Y = () => c.value = c.value === "days" ? "months" : c.value === "months" ? "years" : "days", D = (F) => {
      l.value = l.value.month(F), c.value = "days";
    }, N = (F) => {
      l.value = l.value.year(F), c.value = "months";
    };
    function ne() {
      if (!i.value) return;
      const F = se(`${i.value.format("YYYY-MM-DD")} ${u.value}`, [
        "YYYY-MM-DD HH:mm",
        "YYYY-MM-DD h:mm A"
      ]);
      F.isValid() && (u.value = F.format("HH:mm"), s("update:modelValue", F.format("YYYY-MM-DDTHH:mm")), b.value = !1);
    }
    function j(F) {
      if (!i.value) return;
      u.value = se(F, "h:mm A").format("HH:mm");
      const P = se(
        `${i.value.format("YYYY-MM-DD")} ${u.value}`,
        "YYYY-MM-DD HH:mm"
      );
      s("update:modelValue", P.format("YYYY-MM-DDTHH:mm")), b.value = !1;
    }
    return fe(
      () => n.modelValue,
      (F) => {
        if (!F) {
          i.value = null;
          return;
        }
        const P = se(F);
        P.isValid() && (i.value = P, l.value = P.startOf("month"), n.variant === "date-time" && (u.value = P.format("HH:mm")));
      },
      { immediate: !0 }
    ), (F, P) => (t(), o("div", {
      class: "fu-date-picker fu-date-picker--plain",
      style: oe({ width: e.formWrapperWidth })
    }, [
      a("div", {
        class: "fu-date-picker",
        style: oe({ width: e.formWrapperWidth })
      }, [
        a("div", Xa, [
          a("button", { onClick: Y }, [
            c.value === "days" ? (t(), o(X, { key: 0 }, [
              ie(S(l.value.format("MMMM YYYY")), 1)
            ], 64)) : c.value === "months" ? (t(), o(X, { key: 1 }, [
              ie(S(l.value.year()), 1)
            ], 64)) : (t(), o(X, { key: 2 }, [
              ie(S(d.value) + " - " + S(m.value), 1)
            ], 64))
          ]),
          a("div", Ja, [
            a("button", { onClick: E }, [
              L(G(Ae), {
                size: 16,
                color: "var(--fu-color-text)"
              })
            ]),
            a("button", { onClick: C }, [
              L(G(We), { size: 16 })
            ])
          ])
        ]),
        c.value === "days" ? (t(), o("div", Za, [
          a("div", Ga, [
            (t(), o(X, null, te(f, (_) => a("div", {
              key: _,
              class: "calendar-weekday"
            }, S(_), 1)), 64))
          ]),
          a("div", Qa, [
            (t(!0), o(X, null, te(k.value, (_) => (t(), o("div", {
              key: _.date.toString(),
              class: q(["calendar-day", {
                "calendar-day--other-month": !_.isCurrentMonth,
                "calendar-day--selected": R(_.date),
                "calendar-day--disabled": O(_.date)
              }]),
              onClick: ($) => B(_.date)
            }, S(_.date.date()), 11, el))), 128))
          ])
        ])) : c.value === "months" ? (t(), o("div", tl, [
          (t(), o(X, null, te(g, (_, $) => a("div", {
            key: _,
            class: q(["calendar-month", { "calendar-month--selected": $ === l.value.month() }]),
            onClick: (M) => D($)
          }, S(_), 11, nl)), 64))
        ])) : (t(), o("div", ol, [
          (t(!0), o(X, null, te(y.value, (_) => (t(), o("div", {
            key: _,
            class: q(["calendar-year", { "calendar-year--selected": _ === l.value.year() }]),
            onClick: ($) => N(_)
          }, S(_), 11, al))), 128))
        ])),
        e.variant === "date-time" ? (t(), o("div", ll, [
          L(xe, {
            type: "text",
            modelValue: u.value,
            "onUpdate:modelValue": P[0] || (P[0] = (_) => u.value = _),
            placeholder: "HH:mm or 4:30pm",
            onFocus: P[1] || (P[1] = (_) => b.value = !0),
            onKeydown: Ye(ue(ne, ["prevent"]), ["enter"]),
            formWrapperWidth: "100%"
          }, {
            right: ae(() => [
              L(G($e))
            ]),
            _: 1
          }, 8, ["modelValue", "onKeydown"]),
          b.value ? (t(), o("div", sl, [
            (t(!0), o(X, null, te(p.value, (_) => (t(), o("div", {
              key: _,
              class: "fu-time-option",
              onMousedown: ue(($) => j(_), ["prevent"])
            }, S(_), 41, il))), 128))
          ])) : x("", !0)
        ])) : x("", !0)
      ], 4)
    ], 4));
  }
}, rl = /* @__PURE__ */ K(ul, [["__scopeId", "data-v-4161642e"]]), dl = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: rl
}, Symbol.toStringTag, { value: "Module" })), cl = ["onMousedown"], ft = 240, fl = {
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
    const n = e, s = v, l = w(n.modelValue || ""), i = w(!1), u = w(!1), c = w(null), b = w(null), f = w({ left: 0, top: 0, bottom: 0, width: 0 }), g = w(null), d = H(() => {
      const Y = [];
      for (let D = 0; D < 24; D++)
        for (let N = 0; N < 60; N += n.interval) {
          const ne = /* @__PURE__ */ new Date();
          ne.setHours(D, N, 0), Y.push({
            label: ne.toLocaleTimeString([], {
              hour: "numeric",
              minute: "2-digit",
              hour12: !0
            }),
            value: `${String(D).padStart(2, "0")}:${String(N).padStart(2, "0")}`
          });
        }
      return Y;
    }), m = H(
      () => l.value ? d.value.filter(
        (Y) => Y.label.toLowerCase().includes(l.value.toLowerCase())
      ) : d.value
    ), y = H(
      () => m.value.length ? m.value : d.value
    ), k = (Y) => {
      let D = Y.target.value.toLowerCase();
      D = D.replace(/[^0-9:apm]/g, "");
      const N = Y.target;
      if (/^\d{2}$/.test(D)) {
        D += ":", l.value = D, ve(() => N.setSelectionRange(3, 3));
        return;
      }
      l.value = D;
    }, r = (Y) => {
      if (!Y) return null;
      const D = Y.trim().toLowerCase().match(/^(\d{1,2})(?::(\d{2}))?\s?(am|pm)?$/);
      if (!D) return null;
      let N = parseInt(D[1], 10);
      const ne = parseInt(D[2] || "00", 10), j = D[3];
      if (j === "pm" && N < 12 && (N += 12), j === "am" && N === 12 && (N = 0), N > 23 || ne > 59) return null;
      const F = N % 12 || 12, P = N < 12 ? "am" : "pm";
      return `${String(F).padStart(2, "0")}:${String(ne).padStart(
        2,
        "0"
      )}${P}`;
    }, p = () => {
      if (!c.value) return;
      const Y = c.value.getBoundingClientRect();
      f.value = {
        left: Y.left,
        top: Y.top,
        bottom: Y.bottom,
        width: Y.width
      };
      const D = window.innerHeight - Y.bottom, N = Y.top;
      u.value = D < ft && N > D;
    }, O = (Y, D) => {
      D === 0 && Y && (g.value = Y);
    }, R = (Y) => {
      l.value = Y, s("update:modelValue", Y), s("change", Y), i.value = !1;
    }, B = () => {
      const Y = r(l.value);
      Y && (l.value = Y, s("update:modelValue", Y), s("change", Y), i.value = !1);
    }, E = () => setTimeout(() => {
      B(), i.value = !1;
    }, 120);
    fe(
      () => n.modelValue,
      (Y) => l.value = Y || ""
    ), fe(l, async () => {
      await ve(), g.value && g.value.scrollIntoView({ behavior: "smooth", block: "nearest" });
    });
    const C = () => p();
    return he(() => {
      window.addEventListener("resize", C), ve(p);
    }), _e(() => window.removeEventListener("resize", C)), (Y, D) => (t(), o("div", {
      class: "fu-time-picker",
      ref_key: "inputRef",
      ref: c
    }, [
      L(xe, {
        type: "text",
        modelValue: l.value,
        "onUpdate:modelValue": D[0] || (D[0] = (N) => l.value = N),
        placeholder: "HH:mm or 4:30pm",
        onFocus: D[1] || (D[1] = (N) => {
          i.value = !0, p();
        }),
        onInput: k,
        onKeydown: Ye(ue(B, ["prevent"]), ["enter"]),
        onBlur: E,
        label: e.label,
        error: e.error,
        required: e.required,
        disabled: e.disabled,
        size: e.size,
        formWrapperWidth: e.formWrapperWidth
      }, {
        right: ae(() => [
          L(G($e))
        ]),
        _: 1
      }, 8, ["modelValue", "onKeydown", "label", "error", "required", "disabled", "size", "formWrapperWidth"]),
      (t(), U(be, { to: "body" }, [
        i.value ? (t(), o("div", {
          key: 0,
          ref_key: "dropdownRef",
          ref: b,
          class: q(["fu-time-dropdown customScrollBar", { "open-up": u.value }]),
          style: oe({
            left: f.value.left + "px",
            width: f.value.width + "px",
            top: u.value ? f.value.top - ft + "px" : f.value.bottom + "px"
          })
        }, [
          (t(!0), o(X, null, te(y.value, (N, ne) => (t(), o("div", {
            key: N.value,
            class: "fu-time-option",
            ref_for: !0,
            ref: (j) => O(j, ne),
            onMousedown: ue((j) => R(N.value), ["prevent"])
          }, S(N.label), 41, cl))), 128))
        ], 6)) : x("", !0)
      ]))
    ], 512));
  }
}, vl = /* @__PURE__ */ K(fl, [["__scopeId", "data-v-de0d9c0d"]]), ml = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: vl
}, Symbol.toStringTag, { value: "Module" })), pl = {
  key: 0,
  class: "fu-drawer"
}, hl = { class: "fu-drawer__header-content" }, _l = {
  key: 0,
  class: "fu-drawer__header-actions"
}, gl = { class: "fu-drawer__body" }, yl = { class: "fu-drawer__footer" }, bl = /* @__PURE__ */ ee({
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
    return he(() => window.addEventListener("keydown", l)), _e(() => window.removeEventListener("keydown", l)), (i, u) => (t(), U(Te, { name: "drawer-fade" }, {
      default: ae(() => [
        e.open ? (t(), o("div", pl, [
          a("div", {
            class: "fu-drawer__backdrop",
            onClick: u[0] || (u[0] = (c) => i.$emit("close"))
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
              a("div", hl, [
                Z(i.$slots, "header", {}, void 0, !0)
              ]),
              e.showControls ? (t(), o("div", _l, [
                L(ke, {
                  size: "sm",
                  variant: "subtle",
                  icon: G(Re),
                  onClick: u[1] || (u[1] = (c) => i.$emit("close"))
                }, null, 8, ["icon"])
              ])) : x("", !0)
            ], 2)) : x("", !0),
            a("div", gl, [
              Z(i.$slots, "default", { class: "slot-body" }, void 0, !0)
            ]),
            a("div", {
              class: q(["fu-drawer__nav", [
                e.position === "right" ? "fu-drawer__nav--left" : "",
                e.position === "left" ? "fu-drawer__nav--right" : "",
                e.position === "bottom" ? "fu-drawer__nav--center" : ""
              ]])
            }, [
              e.canPrev ? (t(), U(ke, {
                key: 0,
                size: "sm",
                variant: "subtle",
                icon: G(Et),
                onClick: u[2] || (u[2] = (c) => i.$emit("prev"))
              }, null, 8, ["icon"])) : x("", !0),
              e.canNext ? (t(), U(ke, {
                key: 1,
                size: "sm",
                variant: "subtle",
                icon: G($e),
                onClick: u[3] || (u[3] = (c) => i.$emit("next"))
              }, null, 8, ["icon"])) : x("", !0)
            ], 2),
            a("div", yl, [
              Z(i.$slots, "footer", {}, void 0, !0)
            ])
          ], 2)
        ])) : x("", !0)
      ]),
      _: 3
    }));
  }
}), wl = /* @__PURE__ */ K(bl, [["__scopeId", "data-v-37927fd4"]]), kl = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: wl
}, Symbol.toStringTag, { value: "Module" })), $l = ["onClick"], Ml = /* @__PURE__ */ ee({
  __name: "FusionDropdownButton",
  props: {
    buttonText: {},
    buttonIcon: {},
    actions: {},
    align: { default: "right" }
  },
  setup(e) {
    const v = e, n = w(!1), s = w(null), l = w(null), i = w({});
    let u = null;
    function c() {
      if (n.value = !n.value, n.value) {
        if (u && u !== s.value) {
          const m = new CustomEvent("close-other-dropdowns");
          document.dispatchEvent(m);
        }
        u = s.value, ve(b);
      }
    }
    function b() {
      const m = s.value?.querySelector("button");
      if (!m || !l.value) return;
      const y = m.getBoundingClientRect(), k = l.value.offsetWidth, r = {
        left: `${y.left}px`,
        top: `${y.bottom + 4}px`
      };
      v.align === "right" ? r.left = `${y.right - k}px` : v.align === "center" && (r.left = `${y.left + y.width / 2 - k / 2}px`), i.value = {
        position: "absolute",
        ...r,
        zIndex: "1000"
      };
    }
    function f(m) {
      m.onClick?.(), n.value = !1;
    }
    function g(m) {
      s.value && !s.value.contains(m.target) && l.value && !l.value.contains(m.target) && (n.value = !1);
    }
    function d() {
      n.value = !1;
    }
    return he(() => {
      document.addEventListener("click", g), document.addEventListener("close-other-dropdowns", d);
    }), _e(() => {
      document.removeEventListener("click", g), document.removeEventListener("close-other-dropdowns", d);
    }), (m, y) => (t(), o("div", {
      class: "fu-dropdown",
      ref_key: "dropdown",
      ref: s
    }, [
      a("button", {
        class: "fu-dropdown__button",
        onClick: c
      }, [
        ie(S(e.buttonText) + " ", 1),
        e.buttonIcon ? (t(), U(ce(e.buttonIcon), {
          key: 0,
          class: "fu-dropdown__icon"
        })) : x("", !0)
      ]),
      (t(), U(be, { to: "body" }, [
        n.value ? (t(), o("ul", {
          key: 0,
          class: q(["fu-dropdown__menu", [`fu-dropdown__menu--${e.align}`, { show: n.value }]]),
          style: oe(i.value),
          ref_key: "menuRef",
          ref: l
        }, [
          (t(!0), o(X, null, te(e.actions, (k) => (t(), o("li", {
            key: k.label
          }, [
            a("a", {
              class: "fu-dropdown__item",
              onClick: (r) => f(k)
            }, [
              k.icon ? (t(), U(ce(k.icon), {
                key: 0,
                class: "fu-dropdown__icon"
              })) : x("", !0),
              ie(" " + S(k.label), 1)
            ], 8, $l)
          ]))), 128))
        ], 6)) : x("", !0)
      ]))
    ], 512));
  }
}), Cl = /* @__PURE__ */ K(Ml, [["__scopeId", "data-v-478aec9e"]]), Sl = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Cl
}, Symbol.toStringTag, { value: "Module" })), xl = { class: "fu-dropdown-inline__wrapper" }, zl = ["value", "placeholder"], Ol = ["onMousedown"], Dl = /* @__PURE__ */ ee({
  __name: "FusionDropdownInline",
  props: {
    modelValue: {},
    options: {},
    placeholder: {},
    isOpen: { type: Boolean }
  },
  emits: ["update:modelValue", "open", "close"],
  setup(e, { emit: v }) {
    const n = e, s = v, l = w(null), i = w(null), u = w(n.modelValue || null), c = w(!1), b = w({});
    fe(
      () => n.modelValue,
      (y) => u.value = y
    ), fe(
      () => n.isOpen,
      (y) => {
        c.value = !!y, y && m();
      }
    );
    function f() {
      c.value || s("open"), c.value = !0, m();
    }
    function g(y) {
      u.value = y, s("update:modelValue", y), s("close"), c.value = !1, i.value?.blur();
    }
    function d(y) {
      l.value && !l.value.contains(y.target) && (c.value && s("close"), c.value = !1);
    }
    function m() {
      const y = l.value;
      if (!y) return;
      const k = y.getBoundingClientRect();
      b.value = {
        position: "absolute",
        top: `${k.bottom + 4}px`,
        left: `${k.left}px`,
        width: `${k.width}px`,
        zIndex: "9999"
      };
    }
    return he(() => {
      window.addEventListener("click", d), window.addEventListener("resize", m);
    }), _e(() => {
      window.removeEventListener("click", d), window.removeEventListener("resize", m);
    }), (y, k) => (t(), o("div", {
      class: "fu-dropdown-inline",
      ref_key: "inlineRef",
      ref: l
    }, [
      a("div", xl, [
        u.value ? (t(), o("span", {
          key: 0,
          class: "fu-dropdown-inline__dot",
          style: oe({ backgroundColor: u.value.color })
        }, null, 4)) : x("", !0),
        a("input", {
          ref_key: "inputRef",
          ref: i,
          type: "text",
          class: "fu-dropdown-inline__input",
          value: u.value?.label || "",
          placeholder: e.placeholder,
          readonly: "",
          onFocus: f
        }, null, 40, zl)
      ]),
      (t(), U(be, { to: "body" }, [
        c.value ? (t(), o("ul", {
          key: 0,
          class: "fu-dropdown-inline__menu",
          style: oe(b.value)
        }, [
          (t(!0), o(X, null, te(e.options, (r) => (t(), o("li", {
            key: r.label,
            class: "fu-dropdown-inline__item",
            onMousedown: ue((p) => g(r), ["prevent"])
          }, [
            a("span", {
              class: "fu-dropdown-inline__dot",
              style: oe({ backgroundColor: r.color })
            }, null, 4),
            ie(" " + S(r.label), 1)
          ], 40, Ol))), 128))
        ], 4)) : x("", !0)
      ]))
    ], 512));
  }
}), Yl = /* @__PURE__ */ K(Dl, [["__scopeId", "data-v-2181a04e"]]), Tl = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Yl
}, Symbol.toStringTag, { value: "Module" })), Vl = {
  key: 0,
  class: "content"
}, Fl = ["onClick"], Bl = /* @__PURE__ */ ee({
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
    const n = v, s = e, l = w(!1), i = w(null), u = w(null), c = w({
      top: "0px",
      left: "0px"
    });
    fe(
      () => s.isOpen,
      (r) => {
        typeof r == "boolean" && (l.value = r);
      }
    );
    function b(r) {
      r?.stopPropagation();
      const p = !l.value;
      p && document.dispatchEvent(new CustomEvent("close-all-dropdowns")), l.value = p, n(p ? "open" : "close"), n("update:isOpen", p), p && ve(f);
    }
    function f() {
      if (!i.value || !u.value) return;
      const r = i.value.getBoundingClientRect(), p = r.bottom + window.scrollY + 6, O = u.value.offsetWidth;
      let R = r.left + window.scrollX;
      s.align === "center" ? R += r.width / 2 - O / 2 : s.align === "right" && (R = r.right - O + window.scrollX), c.value = {
        position: "absolute",
        top: `${p}px`,
        left: `${R}px`,
        zIndex: "2000"
      };
    }
    function g(r, p) {
      r.onClick?.(), y();
    }
    function d(r) {
      l.value && i.value && !i.value.contains(r.target) && u.value && !u.value.contains(r.target) && y();
    }
    function m() {
      l.value && y();
    }
    function y() {
      l.value = !1, n("close"), n("update:isOpen", !1);
    }
    function k() {
      y();
    }
    return he(() => {
      document.addEventListener("click", d), window.addEventListener("resize", m), document.addEventListener("close-all-dropdowns", k);
    }), _e(() => {
      document.removeEventListener("click", d), window.removeEventListener("resize", m), document.removeEventListener("close-all-dropdowns", k);
    }), (r, p) => (t(), o("div", {
      class: "fu-dropdown",
      ref_key: "dropdown",
      ref: i
    }, [
      a("div", {
        class: "fu-dropdown__trigger",
        onClick: b
      }, [
        Z(r.$slots, "trigger", {}, void 0, !0)
      ]),
      (t(), U(be, { to: "body" }, [
        L(Te, { name: "fade" }, {
          default: ae(() => [
            l.value ? (t(), o("div", {
              key: 0,
              class: q(["fu-dropdown__menu", [`fu-dropdown__menu--${e.align}`]]),
              style: oe(c.value),
              ref_key: "menuRef",
              ref: u
            }, [
              e.content ? (t(), o("div", Vl, [
                Z(r.$slots, "content", {}, void 0, !0)
              ])) : x("", !0),
              (t(!0), o(X, null, te(e.actions, (O) => (t(), o("div", {
                class: "flex w-100",
                key: O.label
              }, [
                a("a", {
                  class: "fu-dropdown__item",
                  onClick: (R) => g(O)
                }, [
                  O.icon ? (t(), U(ce(O.icon), {
                    key: 0,
                    class: "fu-dropdown__icon"
                  })) : x("", !0),
                  ie(" " + S(O.label), 1)
                ], 8, Fl)
              ]))), 128))
            ], 6)) : x("", !0)
          ]),
          _: 3
        })
      ]))
    ], 512));
  }
}), Ke = /* @__PURE__ */ K(Bl, [["__scopeId", "data-v-d9e510d8"]]), Il = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Ke
}, Symbol.toStringTag, { value: "Module" })), jl = {
  key: 0,
  class: "efw-read"
}, El = {
  key: 1,
  class: "efw-edit"
}, Pl = { class: "efw-footer" }, Ll = { class: "efw-read" }, Al = { class: "efw-footer" }, Wl = /* @__PURE__ */ ee({
  __name: "EditableFieldWrapper",
  props: {
    modelValue: { default: () => ({}) },
    mode: { default: "inline" },
    teleportTo: { default: "body" },
    align: { default: "right" },
    disableOutsideClose: { type: Boolean, default: !1 }
  },
  setup(e, { expose: v }) {
    const n = e, s = w(!1), l = w(null), i = _t({ top: 0, left: 0 }), u = w(null), c = w(null);
    function b(k) {
      if (k === null || typeof k != "object") return k;
      const r = Ot(k);
      return Array.isArray(r) ? [...r] : r.constructor === Object ? { ...r } : r;
    }
    function f() {
      document.dispatchEvent(new CustomEvent("close-all-editors")), l.value = b(n.modelValue), s.value = !0;
    }
    function g(k) {
      if (s.value) {
        d();
        return;
      }
      document.dispatchEvent(new CustomEvent("close-all-editors")), l.value = b(n.modelValue), ve(() => {
        s.value = !0, ve(() => {
          const r = k?.currentTarget;
          if (!r || !c.value) return;
          const p = r.getBoundingClientRect(), O = c.value.offsetWidth;
          i.top = p.bottom + 6 + window.scrollY, n.align === "left" ? i.left = p.left + window.scrollX : n.align === "center" ? i.left = p.left + p.width / 2 - O / 2 + window.scrollX : i.left = p.right - O + window.scrollX;
        });
      });
    }
    function d() {
      s.value = !1;
    }
    function m() {
      s.value && d();
    }
    function y(k) {
      if (!s.value || n.disableOutsideClose) return;
      const r = k.target;
      r.closest(
        ".fu-status-dropdown, .fu-status-dropdown__menu, .fu-autocomplete-dropdown, .fu-select-dropdown, .fu-datepicker-dropdown"
      ) || (n.mode === "inline" ? u.value && !u.value.contains(r) && d() : c.value && !c.value.contains(r) && d());
    }
    return he(() => {
      document.addEventListener("close-all-editors", m), document.addEventListener("ew-close", d), document.addEventListener("pointerdown", y), window.addEventListener("resize", d);
    }), _e(() => {
      document.removeEventListener("close-all-editors", m), document.removeEventListener("ew-close", d), document.removeEventListener("pointerdown", y), window.removeEventListener("resize", d);
    }), v({
      startEditing: f,
      openTeleport: g,
      closeEditor: d
    }), (k, r) => e.mode === "inline" ? (t(), o("div", {
      key: 0,
      class: "efw-wrapper",
      ref_key: "inlineRef",
      ref: u
    }, [
      s.value ? (t(), o("div", El, [
        Z(k.$slots, "edit", { model: l.value }, void 0, !0),
        a("div", Pl, [
          Z(k.$slots, "actions", {}, void 0, !0)
        ])
      ])) : (t(), o("div", jl, [
        Z(k.$slots, "read", {}, void 0, !0)
      ]))
    ], 512)) : (t(), o(X, { key: 1 }, [
      a("div", Ll, [
        Z(k.$slots, "read", {}, void 0, !0)
      ]),
      (t(), U(be, { to: e.teleportTo }, [
        s.value ? (t(), o("div", {
          key: 0,
          class: "efw-teleport-card",
          ref_key: "teleportRef",
          ref: c,
          style: oe({ top: i.top + "px", left: i.left + "px" })
        }, [
          Z(k.$slots, "edit", { model: l.value }, void 0, !0),
          a("div", Al, [
            Z(k.$slots, "actions", {}, void 0, !0)
          ])
        ], 4)) : x("", !0)
      ], 8, ["to"]))
    ], 64));
  }
}), Rl = /* @__PURE__ */ K(Wl, [["__scopeId", "data-v-90094e16"]]), Hl = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Rl
}, Symbol.toStringTag, { value: "Module" })), ql = { class: "fu-upload__content" }, Nl = {
  key: 0,
  class: "fu-upload__previews"
}, Ul = ["onClick"], Kl = ["src"], Xl = {
  key: 1,
  class: "fu-upload__file-fallback"
}, Jl = {
  key: 1,
  class: "fu-upload__prompt"
}, Zl = ["multiple", "accept"], Gl = /* @__PURE__ */ ee({
  __name: "FusionUpload",
  props: {
    multiple: { type: Boolean, default: !1 },
    accept: { type: String, default: "*" },
    maxFiles: { type: Number, default: 1 / 0 },
    maxFileSizeMB: { type: Number, default: 1 / 0 }
  },
  emits: ["filesSelected", "uploadError"],
  setup(e, { emit: v }) {
    const n = e, s = v, l = w(!1), i = w(null), u = w([]), c = w([]);
    function b() {
      return typeof crypto < "u" && crypto.randomUUID ? crypto.randomUUID() : `file_${Date.now()}_${Math.random().toString(36).slice(2, 9)}`;
    }
    function f() {
      i.value?.click();
    }
    function g(k) {
      const r = k.target;
      r.files?.length && (m(r.files), r.value = "");
    }
    function d(k) {
      l.value = !1;
      const r = k.dataTransfer?.files;
      r?.length && m(r);
    }
    function m(k) {
      const r = Array.from(k);
      n.multiple || (u.value = [], c.value = []);
      for (const p of r) {
        const O = n.maxFileSizeMB * 1024 * 1024;
        if (p.size > O) {
          const E = `File "${p.name}" exceeds max size of ${n.maxFileSizeMB} MB.`;
          s("uploadError", E);
          continue;
        }
        if (u.value.length >= n.maxFiles) {
          const E = `Maximum of ${n.maxFiles} files allowed.`;
          s("uploadError", E);
          break;
        }
        u.value.push(p);
        const R = b();
        if (p.type.startsWith("image/")) {
          const E = new FileReader();
          E.onload = (C) => {
            c.value.push({
              id: R,
              src: C.target?.result,
              file: p,
              isImage: !0
            });
          }, E.readAsDataURL(p);
        } else
          c.value.push({
            id: R,
            src: "",
            file: p,
            isImage: !1
          });
      }
      s("filesSelected", u.value);
    }
    function y(k) {
      u.value.splice(k, 1), c.value.splice(k, 1), s("filesSelected", u.value);
    }
    return (k, r) => (t(), o("div", {
      class: q(["fu-upload", { dragging: l.value }]),
      onClick: f,
      onDragover: r[0] || (r[0] = ue((p) => l.value = !0, ["prevent"])),
      onDragleave: r[1] || (r[1] = ue((p) => l.value = !1, ["prevent"])),
      onDrop: ue(d, ["prevent"])
    }, [
      a("div", ql, [
        c.value.length ? (t(), o("div", Nl, [
          (t(!0), o(X, null, te(c.value, (p, O) => (t(), o("div", {
            key: p.id,
            class: "fu-upload__preview-item"
          }, [
            a("button", {
              class: "fu-upload__remove",
              onClick: ue((R) => y(O), ["stop"])
            }, " ✕ ", 8, Ul),
            p.isImage ? (t(), o("img", {
              key: 0,
              src: p.src,
              class: "fu-upload__preview-img",
              alt: "Preview"
            }, null, 8, Kl)) : (t(), o("div", Xl, [
              L(G(rt), { size: 20 }),
              a("span", null, S(p.file.name), 1)
            ]))
          ]))), 128))
        ])) : (t(), o("div", Jl, [
          L(G(rt), {
            class: "fu-upload__icon",
            size: 22
          }),
          Z(k.$slots, "description", {}, () => [
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
          onChange: g
        }, null, 40, Zl)
      ])
    ], 34));
  }
}), Ql = /* @__PURE__ */ K(Gl, [["__scopeId", "data-v-1b1249ff"]]), es = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Ql
}, Symbol.toStringTag, { value: "Module" })), ts = {
  key: 0,
  class: "fu-filter-dropdown__header"
}, ns = { class: "fu-filter-dropdown__title" }, os = { class: "fu-filter-dropdown__body" }, as = { class: "fu-filter-dropdown__footer" }, ls = /* @__PURE__ */ ee({
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
    const n = e, s = v, l = w(!1), i = w(null), u = w(null), c = w({
      top: "0px",
      left: "0px"
    }), b = H(() => ({
      width: typeof n.width == "number" ? `${n.width}px` : n.width,
      maxWidth: typeof n.maxWidth == "number" ? `${n.maxWidth}px` : n.maxWidth
    }));
    fe(
      () => n.isOpen,
      (p) => {
        typeof p == "boolean" && (l.value = p, p ? (s("open"), ve(y)) : s("close"));
      }
    );
    function f(p) {
      p?.stopPropagation();
      const O = !l.value;
      O && document.dispatchEvent(new CustomEvent("close-all-dropdowns")), l.value = O, s("update:isOpen", O), O ? (s("open"), ve(y)) : s("close");
    }
    function g() {
      s("apply", n.payload), m();
    }
    function d() {
      s("cancel"), m();
    }
    function m() {
      l.value && (l.value = !1, s("update:isOpen", !1), s("close"));
    }
    function y() {
      if (!i.value || !u.value) return;
      const p = i.value.getBoundingClientRect(), O = p.bottom + window.scrollY + 8;
      let R = p.left + window.scrollX;
      n.align === "center" && (R += p.width / 2 - u.value.offsetWidth / 2), n.align === "right" && (R = p.right - u.value.offsetWidth + window.scrollX), c.value = {
        position: "absolute",
        top: `${O}px`,
        left: `${R}px`,
        zIndex: 2e3
      };
    }
    function k(p) {
      l.value && i.value && !i.value.contains(p.target) && u.value && !u.value.contains(p.target) && m();
    }
    function r() {
      m();
    }
    return he(() => {
    }), _e(() => {
      document.removeEventListener("click", k), document.removeEventListener("close-all-dropdowns", r);
    }), (p, O) => (t(), o("div", {
      class: "fu-filter-dropdown",
      ref_key: "dropdown",
      ref: i
    }, [
      a("div", {
        class: "fu-filter-dropdown__trigger",
        onClick: f
      }, [
        Z(p.$slots, "trigger", {}, void 0, !0)
      ]),
      (t(), U(be, { to: "body" }, [
        L(Te, { name: "fade" }, {
          default: ae(() => [
            l.value ? (t(), o("div", {
              key: 0,
              ref_key: "menuRef",
              ref: u,
              class: q(["fu-filter-dropdown__menu", [`fu-filter-dropdown__menu--${e.align}`]]),
              style: oe([c.value, b.value])
            }, [
              e.title ? (t(), o("div", ts, [
                a("span", ns, S(e.title), 1),
                L(ke, {
                  size: "sm",
                  variant: "subtle",
                  icon: G(Re),
                  onClick: m
                }, null, 8, ["icon"])
              ])) : x("", !0),
              a("div", os, [
                Z(p.$slots, "content", {}, void 0, !0)
              ]),
              a("div", as, [
                Z(p.$slots, "footer", {}, () => [
                  L(ye, {
                    variant: "subtle",
                    size: "sm",
                    text: "Cancel",
                    onClick: d
                  }),
                  L(ye, {
                    variant: "solid",
                    size: "sm",
                    text: "Apply",
                    onClick: g
                  })
                ], !0)
              ])
            ], 6)) : x("", !0)
          ]),
          _: 3
        })
      ]))
    ], 512));
  }
}), ss = /* @__PURE__ */ K(ls, [["__scopeId", "data-v-6439f409"]]), is = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: ss
}, Symbol.toStringTag, { value: "Module" })), us = {}, rs = { class: "fu-smart-header" };
function ds(e, v) {
  return t(), o("header", rs, [
    Z(e.$slots, "default", {}, void 0, !0)
  ]);
}
const cs = /* @__PURE__ */ K(us, [["render", ds], ["__scopeId", "data-v-317a0cd5"]]), fs = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: cs
}, Symbol.toStringTag, { value: "Module" })), vs = { class: "fu-trash-icon" }, ms = /* @__PURE__ */ ee({
  __name: "FusionTrashIcon",
  setup(e) {
    return (v, n) => (t(), o("div", vs, [
      L(G(lt), { size: 18 })
    ]));
  }
}), ps = /* @__PURE__ */ K(ms, [["__scopeId", "data-v-7cafc569"]]), hs = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: ps
}, Symbol.toStringTag, { value: "Module" })), _s = { class: "fu-activity-item" }, gs = { class: "fu-activity-icon" }, ys = { class: "fu-activity-content" }, bs = { class: "fu-activity-header" }, ws = { class: "fu-activity-title" }, ks = { class: "fu-activity-status" }, $s = { class: "fu-activity-text" }, Ms = { class: "fu-activity-subtitle" }, Cs = { class: "fu-activity-footer" }, Ss = { class: "fu-activity-timestamp" }, xs = { class: "fu-activity-user" }, zs = /* @__PURE__ */ ee({
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
    return (i, u) => (t(), o("div", _s, [
      a("div", gs, [
        (t(), U(ce(e.icon), {
          class: "fu-activity-icon__svg",
          size: 18
        }))
      ]),
      u[0] || (u[0] = a("div", { class: "fu-activity-line" }, null, -1)),
      a("div", ys, [
        a("div", {
          class: q(["fu-activity-card", { "is-clickable": e.clickable }]),
          onClick: l
        }, [
          a("div", bs, [
            a("div", ws, [
              a("span", ks, [
                L(G(wt), {
                  class: "fu-activity-status__icon",
                  size: 16
                })
              ]),
              a("p", $s, S(e.title), 1)
            ])
          ]),
          a("p", Ms, S(e.fileName), 1),
          a("div", Cs, [
            a("span", Ss, S(e.timestamp), 1),
            a("div", xs, [
              L(De, {
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
}), Os = /* @__PURE__ */ K(zs, [["__scopeId", "data-v-3de71024"]]), Ds = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Os
}, Symbol.toStringTag, { value: "Module" })), Ys = { class: "fu-attachment-left flex flex--gap-md flex--align-center" }, Ts = { class: "fu-attachment-preview" }, Vs = ["src", "alt"], Fs = { class: "fu-attachment-info flex flex--column" }, Bs = { class: "fu-attachment-title" }, Is = { class: "fu-attachment-meta" }, js = { class: "fu-attachment-right flex flex--align-center flex--gap-md" }, Es = { class: "flex flex--column flex--align-center" }, Ps = { class: "fu-attachment-time" }, Ls = /* @__PURE__ */ ee({
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
    return (c, b) => (t(), o("div", {
      class: "fu-attachment-item",
      role: "button",
      tabindex: "0",
      onClick: l,
      onKeypress: Ye(l, ["enter"])
    }, [
      a("div", Ys, [
        a("div", Ts, [
          i.value ? (t(), o("img", {
            key: 0,
            src: e.fileUrl,
            alt: e.fileName,
            class: "fu-attachment-thumbnail"
          }, null, 8, Vs)) : u.value ? (t(), U(G(Kt), {
            key: 1,
            class: "fu-attachment-icon",
            size: 20
          })) : (t(), U(G(Ht), {
            key: 2,
            class: "fu-attachment-icon",
            size: 20
          }))
        ]),
        a("div", Fs, [
          a("span", Bs, S(e.fileName), 1),
          a("span", Is, S(e.fileSize), 1)
        ])
      ]),
      a("div", js, [
        a("div", Es, [
          L(De, {
            src: e.userAvatar || void 0,
            name: e.userName,
            alt: e.userName,
            size: "xs",
            "show-status": !1
          }, null, 8, ["src", "name", "alt"]),
          a("span", Ps, S(e.timestamp), 1)
        ]),
        e.actions?.length ? (t(), o("div", {
          key: 0,
          class: "fu-attachment-actions",
          onClick: b[0] || (b[0] = ue(() => {
          }, ["stop"]))
        }, [
          L(Ke, {
            actions: e.actions,
            align: "right"
          }, {
            trigger: ae(() => [
              L(ke, {
                icon: G(at),
                variant: "ghost",
                size: "sm"
              }, null, 8, ["icon"])
            ]),
            _: 1
          }, 8, ["actions"])
        ])) : x("", !0)
      ])
    ], 32));
  }
}), As = /* @__PURE__ */ K(Ls, [["__scopeId", "data-v-c5d821de"]]), Ws = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: As
}, Symbol.toStringTag, { value: "Module" })), Rs = { class: "fu-note-header" }, Hs = { class: "fu-note-title" }, qs = ["innerHTML"], Ns = { class: "fu-note-actions" }, Us = { class: "fu-note-footer" }, Ks = { class: "fu-note-owner" }, Xs = { class: "fu-note-date" }, Js = /* @__PURE__ */ ee({
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
    const v = w(!1);
    return (n, s) => (t(), o("div", {
      class: "fu-note-card",
      onMouseenter: s[0] || (s[0] = (l) => v.value = !0),
      onMouseleave: s[1] || (s[1] = (l) => v.value = !1),
      onClick: s[2] || (s[2] = (l) => n.$emit("open", e.id))
    }, [
      a("div", Rs, [
        a("div", Hs, [
          a("h4", null, S(e.title), 1),
          e.content ? (t(), o("div", {
            key: 0,
            class: "fu-note-content",
            innerHTML: e.content
          }, null, 8, qs)) : x("", !0)
        ]),
        a("div", Ns, [
          L(Ke, {
            actions: e.actions,
            align: "right"
          }, {
            trigger: ae(() => [
              L(ke, {
                icon: G(at),
                variant: "ghost",
                size: "sm",
                class: "fu-action-trigger"
              }, null, 8, ["icon"])
            ]),
            _: 1
          }, 8, ["actions"])
        ])
      ]),
      a("div", Us, [
        a("div", Ks, [
          L(De, {
            src: e.ownerAvatar || void 0,
            name: e.ownerName,
            alt: e.ownerName,
            size: "xs",
            "show-status": !1
          }, null, 8, ["src", "name", "alt"])
        ]),
        a("span", Xs, S(e.date), 1)
      ])
    ], 32));
  }
}), Zs = /* @__PURE__ */ K(Js, [["__scopeId", "data-v-2819a085"]]), Gs = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Zs
}, Symbol.toStringTag, { value: "Module" })), Qs = { class: "fu-task-list" }, ei = { class: "fu-task-left flex flex--gap-xl flex--align-center" }, ti = { class: "flex flex--column flex--gap-lg w-100" }, ni = { class: "fu-task-title" }, oi = { class: "fu-task-meta" }, ai = { class: "fu-task-priority" }, li = { class: "fu-priority-label" }, si = { class: "fu-task-owner" }, ii = { class: "fu-task-actions" }, ui = /* @__PURE__ */ ee({
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
    return (i, u) => (t(), o("div", Qs, [
      a("div", ei, [
        a("div", ti, [
          a("div", ni, S(e.title), 1),
          a("div", oi, [
            a("div", ai, [
              a("span", {
                class: "fu-priority-dot",
                style: oe({ backgroundColor: e.priorityColor || "#999" })
              }, null, 4),
              a("span", li, S(e.priorityLabel), 1)
            ]),
            u[0] || (u[0] = a("span", { class: "fu-dot" }, null, -1)),
            a("div", si, [
              L(De, {
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
      a("div", ii, [
        L(Ke, {
          actions: l.value,
          content: !1,
          align: "right"
        }, {
          trigger: ae(() => [
            L(ke, {
              icon: G(at),
              variant: "subtle",
              size: "sm"
            }, null, 8, ["icon"])
          ]),
          _: 1
        }, 8, ["actions"])
      ])
    ]));
  }
}), ri = /* @__PURE__ */ K(ui, [["__scopeId", "data-v-36cc95a2"]]), di = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: ri
}, Symbol.toStringTag, { value: "Module" })), ci = { class: "fu-kanban scrollbar__control customScrollBar" }, fi = ["draggable", "onDragstart", "onDrop"], vi = { class: "fu-kanban__column-header" }, mi = { class: "flex flex--center flex--space" }, pi = { class: "fu-kanban__column-title" }, hi = ["title"], _i = { class: "fu-kanban__header-right" }, gi = ["title", "onClick"], yi = { class: "flex flex--center flex--gap-sm" }, bi = { class: "fu-kanban__count" }, wi = {
  key: 0,
  class: "fu-kanban__edit-body"
}, ki = ["onDragover", "onDrop"], $i = ["onDragstart", "onDrop", "onClick"], Mi = { class: "fu-kanban__card-header" }, Ci = { class: "fu-kanban__card-body" }, Si = {
  key: 0,
  class: "fu-kanban__empty"
}, xi = ["onClick"], zi = /* @__PURE__ */ ee({
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
    const n = e, s = v, l = n.addItemButtonText || "+ Add Item", i = n.addColumnButtonText || "+ Add Stage", u = w(JSON.parse(JSON.stringify(n.columns || []))), c = w(null), b = w(null), f = w(null);
    fe(
      () => n.columns,
      (B) => {
        u.value = JSON.parse(JSON.stringify(B));
      },
      { deep: !0 }
    );
    function g(B, E) {
      c.value = { fromColumnId: B, item: E };
    }
    function d(B) {
      f.value = B;
    }
    function m() {
      f.value = null;
    }
    function y(B, E) {
      const C = c.value;
      if (!C) return;
      const Y = u.value.find((N) => N.id === C.fromColumnId), D = u.value.find((N) => N.id === B);
      !Y || !D || (Y.items = Y.items.filter((N) => N.id !== C.item.id), E === null ? D.items.push(C.item) : D.items.splice(E, 0, C.item), s("update:items", u.value), c.value = null, f.value = null);
    }
    function k(B) {
      n.editMode && (b.value = B);
    }
    function r(B) {
      if (!n.editMode) return;
      const E = b.value;
      if (E === null || E === B) return;
      const C = [...u.value], [Y] = C.splice(E, 1);
      C.splice(B, 0, Y), u.value = C.map((D, N) => ({ ...D, position: N + 1 })), s("update:columns", u.value), b.value = null;
    }
    function p() {
      const B = {
        id: `col-${u.value.length + 1}`,
        title: `Stage ${u.value.length + 1}`,
        color: "#8B5CF6",
        position: u.value.length + 1,
        items: []
      };
      u.value.push(B), s("update:columns", u.value);
    }
    function O(B, E) {
      s("add-item", { column: B, index: E });
    }
    function R(B, E) {
      s("card-click", { id: B.id, item: B, column: E });
    }
    return (B, E) => (t(), o("div", ci, [
      a("div", {
        class: "fu-kanban__columns",
        onDragover: E[1] || (E[1] = ue(() => {
        }, ["prevent"]))
      }, [
        (t(!0), o(X, null, te(u.value, (C, Y) => (t(), o("div", {
          key: C.id,
          class: q(["fu-kanban__column", { "fu-kanban__column--drag": e.editMode }]),
          draggable: e.editMode,
          onDragstart: (D) => k(Y),
          onDrop: (D) => r(Y),
          onDragover: E[0] || (E[0] = ue(() => {
          }, ["prevent"]))
        }, [
          a("header", vi, [
            a("div", mi, [
              a("div", pi, [
                a("span", {
                  class: "fu-kanban__dot",
                  style: oe({ background: C.color || "#9ca3af" })
                }, null, 4),
                a("span", {
                  class: "fu-kanban__column-name",
                  title: C.title
                }, S(C.title), 9, hi)
              ]),
              a("div", _i, [
                a("button", {
                  class: "fu-kanban__add-item-btn",
                  title: G(l),
                  onClick: ue((D) => O(C, Y), ["stop"])
                }, " + ", 8, gi)
              ])
            ]),
            a("div", yi, [
              Z(B.$slots, "column-header", {}, void 0, !0),
              a("span", bi, S(C.items.length), 1)
            ])
          ]),
          e.editMode ? (t(), o("div", wi, [
            Z(B.$slots, "edit-column", {
              column: C,
              index: Y
            }, void 0, !0)
          ])) : (t(), o(X, { key: 1 }, [
            a("div", {
              class: q(["fu-kanban__cards scrollbar__control customScrollBar", { "fu-kanban__cards--hover": f.value === C.id }]),
              onDragover: ue((D) => d(C.id), ["prevent"]),
              onDragleave: m,
              onDrop: (D) => y(C.id, null)
            }, [
              (t(!0), o(X, null, te(C.items, (D, N) => (t(), o("div", {
                key: D.id,
                class: "fu-kanban__card",
                draggable: "true",
                onDragstart: (ne) => g(C.id, D),
                onDrop: (ne) => y(C.id, N),
                onClick: (ne) => R(D, C)
              }, [
                a("header", Mi, [
                  a("strong", null, S(D.title), 1)
                ]),
                a("div", Ci, [
                  Z(B.$slots, "card-body", {
                    item: D,
                    column: C
                  }, void 0, !0)
                ])
              ], 40, $i))), 128)),
              C.items.length ? x("", !0) : (t(), o("div", Si, S(e.noItemtext), 1))
            ], 42, ki),
            a("button", {
              class: "fu-kanban__add-card",
              onClick: (D) => O(C, Y)
            }, S(G(l)), 9, xi)
          ], 64))
        ], 42, fi))), 128)),
        e.editMode ? (t(), o("div", {
          key: 0,
          class: "fu-kanban__add-column",
          onClick: p
        }, S(G(i)), 1)) : x("", !0)
      ], 32)
    ]));
  }
}), Oi = /* @__PURE__ */ K(zi, [["__scopeId", "data-v-11abb07b"]]), Di = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Oi
}, Symbol.toStringTag, { value: "Module" })), Yi = { class: "fu-modal__header" }, Ti = { class: "fu-modal__title" }, Vi = { class: "fu-modal__body" }, Fi = {
  key: 0,
  class: "fu-modal__footer"
}, Bi = /* @__PURE__ */ ee({
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
    }), (i, u) => (t(), U(be, { to: "body" }, [
      e.isVisible ? (t(), o("div", {
        key: 0,
        class: "fu-modal__backdrop",
        onClick: ue(s, ["self"])
      }, [
        a("div", {
          class: q(["fu-modal", `fu-modal--${e.size}`])
        }, [
          a("div", Yi, [
            a("h3", Ti, S(e.title), 1),
            L(ke, {
              text: " ",
              icon: G(Re),
              class: "fu-modal__close",
              onClick: s,
              variant: "ghost",
              size: "sm"
            }, null, 8, ["icon"])
          ]),
          a("div", Vi, [
            Z(i.$slots, "default", {}, () => [
              u[0] || (u[0] = ie(" Default modal content. ", -1))
            ], !0)
          ]),
          e.showFooter ? (t(), o("div", Fi, [
            Z(i.$slots, "footer", {}, void 0, !0)
          ])) : x("", !0)
        ], 2)
      ])) : x("", !0)
    ]));
  }
}), St = /* @__PURE__ */ K(Bi, [["__scopeId", "data-v-4d75747a"]]), Ii = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: St
}, Symbol.toStringTag, { value: "Module" })), ji = { class: "app-container" }, Ei = { class: "app-shell" }, Pi = { class: "fu-topbar" }, Li = { class: "fu-topbar-l" }, Ai = { class: "fu-topbar-c" }, Wi = { class: "fu-topbar-r" }, Ri = { class: "fu-main-area" }, Hi = { class: "fu-sidebar" }, qi = { class: "fu-menu" }, Ni = { class: "ai-panel-body" }, Ui = { class: "ai-header-actions" }, Ki = { class: "ai-content" }, Ge = 991, vt = "fu-app-ai-panel", mt = 340, Xi = 500, Ji = {
  __name: "AppShell",
  props: {
    listenToToggleEvent: { type: Boolean, default: !0 }
  },
  setup(e) {
    const v = w(!1), n = w(!0), s = w(!1), l = w(340), i = w(!1), u = w(typeof window < "u" ? window.innerWidth : 1200);
    let c = !1;
    const b = w(!1), f = e;
    function g() {
      u.value <= Ge ? (v.value = !v.value, n.value = !0) : n.value = !n.value;
    }
    function d() {
      if (u.value <= Ge) {
        b.value = !0, s.value = !1, R();
        return;
      }
      s.value = !s.value, R(), s.value && window.dispatchEvent(new Event("open-ai"));
    }
    function m() {
      l.value = i.value ? mt : Xi, i.value = !i.value, R();
    }
    function y(E) {
      c = !0, document.body.style.cursor = "col-resize", window.addEventListener("mousemove", k), window.addEventListener("mouseup", r);
    }
    function k(E) {
      if (!c) return;
      const C = window.innerWidth - E.clientX;
      C > 280 && C < 600 && (l.value = C, R());
    }
    function r() {
      c = !1, document.body.style.cursor = "default", window.removeEventListener("mousemove", k), window.removeEventListener("mouseup", r);
    }
    function p() {
      u.value = window.innerWidth;
    }
    function O() {
      u.value <= Ge && v.value && (v.value = !1);
    }
    function R() {
      const E = {
        open: s.value,
        width: l.value,
        maximized: i.value
      };
      localStorage.setItem(vt, JSON.stringify(E));
    }
    function B() {
      const E = localStorage.getItem(vt);
      if (E)
        try {
          const { open: C, width: Y, maximized: D } = JSON.parse(E);
          s.value = !!C, l.value = Y || mt, i.value = !!D;
        } catch (C) {
          console.warn("Failed to restore AI panel state:", C);
        }
    }
    return he(() => {
      if (B(), window.addEventListener("resize", p), f.listenToToggleEvent && window.addEventListener("toggle-ai", d), s.value) {
        const E = () => {
          window.removeEventListener("tabs-ready", E), ve(() => {
            s.value = !0, window.dispatchEvent(new Event("open-ai"));
          });
        };
        window.addEventListener("tabs-ready", E);
      }
    }), (E, C) => {
      const Y = yt("FusionActionButton");
      return t(), o("div", ji, [
        a("div", Ei, [
          a("div", Pi, [
            a("div", Li, [
              a("button", {
                class: "fu-menu-toggle",
                onClick: g
              }, [...C[2] || (C[2] = [
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
              Z(E.$slots, "brand-logo", {}, () => [
                C[3] || (C[3] = a("img", {
                  src: "https://storage.googleapis.com/skkido/logo-assets/skkido-logo-white.svg",
                  class: "fu-brand-logo",
                  alt: "Logo"
                }, null, -1))
              ])
            ]),
            a("div", Ai, [
              Z(E.$slots, "header")
            ]),
            a("div", Wi, [
              Z(E.$slots, "header-right")
            ])
          ]),
          a("div", Ri, [
            a("div", {
              class: q(["fu-nav-panel", { open: v.value }])
            }, [
              a("section", Hi, [
                Z(E.$slots, "modules-sidebar")
              ]),
              Fe(a("section", qi, [
                Z(E.$slots, "module-menu")
              ], 512), [
                [nt, n.value]
              ])
            ], 2),
            a("div", {
              class: q(["fu-body-area", { "ai-open": s.value }])
            }, [
              a("div", {
                onClick: O,
                class: "fu-body-slot"
              }, [
                Z(E.$slots, "default")
              ]),
              L(Te, { name: "slide-left" }, {
                default: ae(() => [
                  s.value ? (t(), o("div", {
                    key: 0,
                    class: "ai-panel",
                    style: oe({ width: l.value + "px" })
                  }, [
                    a("div", {
                      class: "ai-resize-handle",
                      onMousedown: y
                    }, null, 32),
                    a("div", Ni, [
                      a("header", null, [
                        C[4] || (C[4] = a("h3", null, "Àdisa", -1)),
                        a("div", Ui, [
                          L(Y, {
                            icon: i.value ? G(Nt) : G(qt),
                            variant: "ghost",
                            size: "sm",
                            onClick: m
                          }, null, 8, ["icon"]),
                          L(Y, {
                            icon: G(Re),
                            variant: "ghost",
                            size: "sm",
                            onClick: d
                          }, null, 8, ["icon"])
                        ])
                      ]),
                      a("div", Ki, [
                        Z(E.$slots, "ai-content")
                      ])
                    ])
                  ], 4)) : x("", !0)
                ]),
                _: 3
              })
            ], 2)
          ])
        ]),
        b.value ? (t(), U(St, {
          key: 0,
          isVisible: b.value,
          title: "Adisa",
          size: "sm",
          onClose: C[0] || (C[0] = (D) => b.value = !1),
          onCancel: C[1] || (C[1] = (D) => b.value = !1)
        }, {
          default: ae(() => [...C[5] || (C[5] = [
            ie(" Downlaod Skkido to use Adisa on Mobile ", -1)
          ])]),
          _: 1
        }, 8, ["isVisible"])) : x("", !0)
      ]);
    };
  }
}, Zi = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Ji
}, Symbol.toStringTag, { value: "Module" })), Gi = { key: 0 }, Qi = {
  key: 0,
  class: "fu-listview__th fu-listview__th--checkbox"
}, eu = ["role", "tabindex", "onClick", "onKeydown"], tu = { class: "fu-listview__th-label" }, nu = {
  key: 1,
  class: "fu-listview__sort-indicator"
}, ou = ["onMousedown"], au = ["onClick"], lu = { class: "fu-listview__cell" }, su = /* @__PURE__ */ ee({
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
    const n = e, s = v, l = w(
      n.columns.map((j) => ({
        ...j,
        width: j.width || "150px",
        textAlign: j.textAlign || "justify",
        sortable: !!j.sortable
      }))
    ), i = w(!1), u = w(null), c = w(null), b = w(null), f = w("asc"), g = H(() => !!n.sort), d = H(
      () => g.value ? n.sort?.key ?? null : b.value
    ), m = H(
      () => g.value ? n.sort?.direction ?? "asc" : f.value
    ), y = n.showHeader ?? !0, k = () => n.options?.sortable !== !1;
    function r(j) {
      return n.options?.selectable ? n.options?.isRowSelectable ? n.options.isRowSelectable(j) : !0 : !1;
    }
    function p() {
      const j = n.rows.filter((F) => F.__selected && r(F));
      s("row-selected", j);
    }
    fe(i, (j) => {
      n.options?.selectable && (n.rows.forEach((F) => {
        r(F) && (F.__selected = j);
      }), p());
    });
    function O(j) {
      if (!k() || !j.sortable) return;
      const F = d.value, P = m.value;
      let _ = "asc";
      F === j.key && (_ = P === "asc" ? "desc" : "asc"), g.value || (b.value = j.key, f.value = _), s("sort-change", {
        key: j.key,
        direction: _
      });
    }
    function R(j) {
      s("row-clicked", j), n.options?.onRowClick?.(j);
    }
    let B = null, E = 0, C = 0;
    function Y(j, F) {
      n.options?.resizeColumn && (B = F, E = j.clientX, C = parseInt(l.value[F].width, 10), document.addEventListener("mousemove", D), document.addEventListener("mouseup", N));
    }
    function D(j) {
      if (B === null) return;
      const F = j.clientX - E;
      l.value[B].width = `${Math.max(60, C + F)}px`;
    }
    function N() {
      B = null, document.removeEventListener("mousemove", D), document.removeEventListener("mouseup", N);
    }
    function ne() {
      const j = c.value;
      j && (j.style.overflowY = "hidden", requestAnimationFrame(() => {
        j.style.overflowY = "auto";
      }));
    }
    return he(() => {
      ne(), window.addEventListener("resize", ne);
    }), _e(() => {
      window.removeEventListener("resize", ne), document.removeEventListener("mousemove", D), document.removeEventListener("mouseup", N);
    }), (j, F) => (t(), o("div", {
      class: "fu-listview",
      ref_key: "listviewRef",
      ref: u
    }, [
      a("div", {
        class: "fu-listview__table-wrapper customScrollBar",
        ref_key: "tableWrapper",
        ref: c
      }, [
        a("table", null, [
          G(y) ? (t(), o("thead", Gi, [
            a("tr", null, [
              e.options?.selectable ? (t(), o("th", Qi, [
                L(et, {
                  modelValue: i.value,
                  "onUpdate:modelValue": F[0] || (F[0] = (P) => i.value = P),
                  size: "sm"
                }, null, 8, ["modelValue"])
              ])) : x("", !0),
              (t(!0), o(X, null, te(l.value, (P, _) => (t(), o("th", {
                key: P.key,
                style: oe({ width: P.width || "auto" }),
                class: q(["fu-listview__th", `align-${P.textAlign || "justify"}`])
              }, [
                a("div", {
                  class: q(["fu-listview__th-content", `align-${P.textAlign || "justify"}`])
                }, [
                  a("div", {
                    class: q(["fu-listview__th-sortable", {
                      "is-sortable": !!P.sortable,
                      "is-active": d.value === P.key
                    }]),
                    role: P.sortable ? "button" : void 0,
                    tabindex: P.sortable ? 0 : -1,
                    onClick: ($) => O(P),
                    onKeydown: [
                      Ye(ue(($) => O(P), ["prevent"]), ["enter"]),
                      Ye(ue(($) => O(P), ["prevent"]), ["space"])
                    ]
                  }, [
                    P.icon ? (t(), U(ce(P.icon), {
                      key: 0,
                      class: "fu-listview__th-icon"
                    })) : x("", !0),
                    a("span", tu, S(P.label), 1),
                    P.sortable && d.value === P.key ? (t(), o("span", nu, S(m.value === "asc" ? "▲" : "▼"), 1)) : x("", !0)
                  ], 42, eu),
                  e.options?.resizeColumn ? (t(), o("span", {
                    key: 0,
                    class: "fu-listview__resize-handle",
                    onMousedown: ue(($) => Y($, _), ["stop"])
                  }, null, 40, ou)) : x("", !0)
                ], 2)
              ], 6))), 128))
            ])
          ])) : x("", !0),
          a("tbody", null, [
            (t(!0), o(X, null, te(e.rows, (P) => (t(), o("tr", {
              key: P[e.rowKey],
              class: "fu-listview__row",
              onClick: (_) => R(P)
            }, [
              e.options?.selectable ? (t(), o("td", {
                key: 0,
                class: "fu-listview__td fu-listview__td--checkbox",
                onClick: F[1] || (F[1] = ue(() => {
                }, ["stop"]))
              }, [
                L(et, {
                  modelValue: P.__selected,
                  "onUpdate:modelValue": (_) => P.__selected = _,
                  onChange: p,
                  size: "sm",
                  disabled: !r(P)
                }, null, 8, ["modelValue", "onUpdate:modelValue", "disabled"])
              ])) : x("", !0),
              Z(j.$slots, "tableRow", { row: P }, () => [
                (t(!0), o(X, null, te(l.value, (_) => (t(), o("td", {
                  key: _.key,
                  class: q(["fu-listview__td", `align-${_.textAlign || "justify"}`]),
                  style: oe({ width: _.width })
                }, [
                  Z(j.$slots, `cell-${_.key}`, {
                    row: P,
                    col: _
                  }, () => [
                    a("span", lu, S(P[_.key]), 1)
                  ], !0)
                ], 6))), 128))
              ], !0)
            ], 8, au))), 128))
          ])
        ])
      ], 512)
    ], 512));
  }
}), iu = /* @__PURE__ */ K(su, [["__scopeId", "data-v-9ba04eb3"]]), uu = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: iu
}, Symbol.toStringTag, { value: "Module" })), ru = { class: "fu-confirm__body" }, du = { class: "fu-confirm__icon" }, cu = { class: "fu-confirm__title" }, fu = { class: "fu-confirm__message" }, vu = { class: "fu-confirm__footer" }, mu = /* @__PURE__ */ ee({
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
  setup(e, { emit: v }) {
    const n = e, s = v, l = () => {
      n.loading || s("cancel");
    }, i = () => {
      n.loading || s("confirm");
    }, u = () => {
      n.loading || s("cancel");
    }, c = H(() => n.variant === "delete" ? lt : n.variant === "warning" ? Ut : wt), b = H(() => n.variant === "delete" || n.variant === "warning" ? "danger" : "solid"), f = (g) => {
      n.isVisible && (n.loading || (g.key === "Enter" && (g.preventDefault(), i()), g.key === "Escape" && l()));
    };
    return he(() => {
      window.addEventListener("keydown", f);
    }), _e(() => {
      window.removeEventListener("keydown", f);
    }), (g, d) => (t(), U(be, { to: "body" }, [
      e.isVisible ? (t(), o("div", {
        key: 0,
        class: "fu-modal__backdrop",
        onClick: ue(u, ["self"])
      }, [
        a("div", {
          class: q(["fu-confirm", `fu-confirm--${e.variant}`])
        }, [
          a("div", ru, [
            a("div", du, [
              (t(), U(ce(c.value)))
            ]),
            a("h3", cu, S(e.title), 1),
            a("p", fu, S(e.message), 1)
          ]),
          a("div", vu, [
            L(ye, {
              variant: "outline",
              buttonWidth: "100%",
              disabled: e.loading,
              onClick: l
            }, {
              default: ae(() => [
                ie(S(e.cancelText), 1)
              ]),
              _: 1
            }, 8, ["disabled"]),
            L(ye, {
              variant: b.value,
              buttonWidth: "100%",
              loading: e.loading,
              disabled: e.loading,
              onClick: i
            }, {
              default: ae(() => [
                ie(S(e.confirmText), 1)
              ]),
              _: 1
            }, 8, ["variant", "loading", "disabled"])
          ])
        ], 2)
      ])) : x("", !0)
    ]));
  }
}), pu = /* @__PURE__ */ K(mu, [["__scopeId", "data-v-094e1d3b"]]), hu = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: pu
}, Symbol.toStringTag, { value: "Module" })), _u = {
  key: 0,
  class: "fu-preview-backdrop"
}, gu = { class: "fu-preview-modal" }, yu = { class: "fu-preview-header" }, bu = { class: "fu-preview-header__left" }, wu = { class: "fu-preview-header__right" }, ku = { class: "fu-preview-subheader" }, $u = { class: "fu-preview-body" }, Mu = /* @__PURE__ */ ee({
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
    }), (u, c) => (t(), U(be, { to: "body" }, [
      e.isVisible ? (t(), o("div", _u, [
        a("div", gu, [
          a("header", yu, [
            a("div", bu, [
              Z(u.$slots, "header-left", {}, void 0, !0)
            ]),
            a("div", wu, [
              Z(u.$slots, "header-right", {}, () => [
                L(ye, {
                  variant: "subtle",
                  size: "sm",
                  text: "Close preview",
                  onClick: l
                })
              ], !0)
            ])
          ]),
          a("header", ku, [
            Z(u.$slots, "subheader", {}, void 0, !0)
          ]),
          a("main", $u, [
            Z(u.$slots, "default", {}, void 0, !0)
          ])
        ])
      ])) : x("", !0)
    ]));
  }
}), Cu = /* @__PURE__ */ K(Mu, [["__scopeId", "data-v-fa20d496"]]), Su = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Cu
}, Symbol.toStringTag, { value: "Module" })), xu = { class: "fu-module-menu-wrapper scrollbar__control customScrollBar" }, zu = { class: "fu-module-menu-wrapper__list" }, Ou = {
  key: 0,
  class: "fu-module-menu-empty"
}, Du = /* @__PURE__ */ ee({
  __name: "FusionModuleMenu",
  props: {
    items: {},
    activePath: {}
  },
  setup(e) {
    return (v, n) => {
      const s = yt("router-link");
      return t(), o("div", xu, [
        a("ul", zu, [
          (t(!0), o(X, null, te(e.items, (l) => (t(), o("li", {
            key: l.path,
            class: q({ active: e.activePath && e.activePath.startsWith(l.path) })
          }, [
            L(s, {
              class: "fu-module-menu-link",
              to: l.path
            }, {
              default: ae(() => [
                l.icon ? (t(), U(ce(l.icon), {
                  key: 0,
                  size: 15,
                  class: "fu-module-menu-icon"
                })) : x("", !0),
                a("span", null, S(l.label), 1)
              ]),
              _: 2
            }, 1032, ["to"])
          ], 2))), 128)),
          !e.items || !e.items.length ? (t(), o("li", Ou, "No menu items")) : x("", !0)
        ]),
        Z(v.$slots, "default", {}, void 0, !0)
      ]);
    };
  }
}), Yu = /* @__PURE__ */ K(Du, [["__scopeId", "data-v-7ff3c35c"]]), Tu = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Yu
}, Symbol.toStringTag, { value: "Module" })), Vu = { class: "fu-bell-icon" }, Fu = {
  key: 2,
  class: "fu-badge"
}, Bu = /* @__PURE__ */ ee({
  __name: "FuNotification",
  props: {
    unreadCount: { default: 0 },
    bellIcon: { default: void 0 },
    align: { default: "right" },
    bellClass: { default: "" },
    bellStyle: { default: "light" }
  },
  setup(e) {
    const v = e, n = w(!1), s = w(null), l = w(null), i = w({}), u = () => {
      if (n.value = !n.value, n.value && s.value) {
        const b = s.value.getBoundingClientRect();
        let f = b.left + window.scrollX;
        v.align === "right" ? f = b.right + window.scrollX - 300 : v.align === "center" && (f = b.left + window.scrollX - 160 + b.width / 2), i.value = {
          top: `${b.bottom + window.scrollY + 8}px`,
          left: `${Math.max(f, 8)}px`,
          position: "absolute",
          zIndex: "2000"
        };
      }
    }, c = (b) => {
      const f = b.target;
      n.value && s.value && !s.value.contains(f) && (!l.value || !l.value.contains(f)) && (n.value = !1);
    };
    return he(() => document.addEventListener("click", c)), _e(() => document.removeEventListener("click", c)), (b, f) => (t(), o("div", {
      class: "fu-notification-dropdown",
      ref_key: "dropdown",
      ref: s
    }, [
      a("div", {
        class: "fu-notification__trigger",
        onClick: u
      }, [
        a("div", Vu, [
          e.bellIcon ? (t(), U(ce(e.bellIcon), {
            key: 0,
            "stroke-width": 1.5,
            class: "fu-bell-svg"
          })) : (t(), U(G(jt), {
            key: 1,
            class: q(["fu-bell-svg", [v.bellStyle, v.bellClass]])
          }, null, 8, ["class"])),
          e.unreadCount > 0 ? (t(), o("span", Fu, S(e.unreadCount), 1)) : x("", !0)
        ])
      ]),
      (t(), U(be, { to: "body" }, [
        L(Te, { name: "fade" }, {
          default: ae(() => [
            n.value ? (t(), o("div", {
              key: 0,
              ref_key: "panelEl",
              ref: l,
              class: "fu-notification__panel",
              style: oe(i.value)
            }, [
              Z(b.$slots, "default", {}, () => [
                f[0] || (f[0] = a("div", { class: "fu-empty" }, [
                  a("h4", null, "No Content"),
                  a("p", null, "Use the default slot to pass custom dropdown body.")
                ], -1))
              ], !0)
            ], 4)) : x("", !0)
          ]),
          _: 3
        })
      ]))
    ], 512));
  }
}), Iu = /* @__PURE__ */ K(Bu, [["__scopeId", "data-v-b710a214"]]), ju = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Iu
}, Symbol.toStringTag, { value: "Module" })), Eu = {
  key: 0,
  class: "fu-alert__icon"
}, Pu = { class: "fu-alert__content" }, Lu = {
  key: 1,
  class: "fu-alert__actions"
}, Au = {
  key: 2,
  class: "fu-alert__close"
}, Wu = /* @__PURE__ */ ee({
  __name: "FuAlert",
  props: {
    variant: {},
    icon: { type: Boolean },
    border: { type: Boolean },
    dismissible: { type: Boolean }
  },
  setup(e) {
    const v = w(!0);
    return (n, s) => v.value ? (t(), o("div", {
      key: 0,
      class: q(["fu-alert", `fu-alert--${e.variant}`, { "fu-alert--bordered": e.border }])
    }, [
      e.icon ? (t(), o("div", Eu, [
        Z(n.$slots, "icon", {}, () => [
          L(G(Pt))
        ], !0)
      ])) : x("", !0),
      a("div", Pu, [
        Z(n.$slots, "default", {}, void 0, !0)
      ]),
      n.$slots.actions ? (t(), o("div", Lu, [
        Z(n.$slots, "actions", {}, void 0, !0)
      ])) : x("", !0),
      e.dismissible ? (t(), o("div", Au, [
        L(ke, {
          icon: G(Re),
          size: "sm",
          variant: "ghost",
          onClick: s[0] || (s[0] = (l) => v.value = !1)
        }, null, 8, ["icon"])
      ])) : x("", !0)
    ], 2)) : x("", !0);
  }
}), Ru = /* @__PURE__ */ K(Wu, [["__scopeId", "data-v-7cd3e248"]]), Hu = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Ru
}, Symbol.toStringTag, { value: "Module" })), qu = { class: "fu-toast__content" }, Nu = { class: "fu-toast__message" }, Uu = /* @__PURE__ */ ee({
  __name: "FusionToast",
  props: {
    message: {},
    type: { default: "info" },
    duration: { default: 3500 }
  },
  setup(e) {
    const v = e, n = w(!1), s = {
      success: Lt,
      error: At,
      info: ut,
      dark: ut
    };
    he(() => {
      n.value = !0, setTimeout(() => n.value = !1, v.duration);
    });
    function l() {
      n.value = !1;
    }
    return (i, u) => (t(), U(be, { to: "body" }, [
      L(Te, { name: "fu-toast-fade" }, {
        default: ae(() => [
          n.value ? (t(), o("div", {
            key: 0,
            class: q(["fu-toast", [`fu-toast--${e.type}`]]),
            role: "alert"
          }, [
            a("div", qu, [
              (t(), U(ce(s[e.type]), { class: "fu-toast__icon" })),
              a("span", Nu, S(e.message), 1),
              a("button", {
                class: "fu-toast__close",
                onClick: l
              }, "×")
            ])
          ], 2)) : x("", !0)
        ]),
        _: 1
      })
    ]));
  }
}), xt = /* @__PURE__ */ K(Uu, [["__scopeId", "data-v-9f423b9f"]]), Ku = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: xt
}, Symbol.toStringTag, { value: "Module" })), Xu = { class: "fu-pagination" }, Ju = { class: "fu-pagination__left" }, Zu = {
  key: 0,
  class: "fu-pagination__info"
}, Gu = { class: "fu-pagination__controls" }, Qu = ["disabled"], er = ["disabled", "onClick"], tr = ["disabled"], nr = /* @__PURE__ */ ee({
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
    }), u = H(() => Math.max(1, Math.ceil(n.total / n.pageSize))), c = H(
      () => n.total === 0 ? 0 : (n.page - 1) * n.pageSize + 1
    ), b = H(() => Math.min(n.page * n.pageSize, n.total));
    function f(m) {
      m < 1 || m > u.value || s("update:page", m);
    }
    function g(m) {
      m && f(m);
    }
    const d = H(() => {
      const m = [], y = u.value, k = n.page, r = n.siblingCount, p = Math.max(2, k - r), O = Math.min(y - 1, k + r);
      m.push({ key: "p-1", label: "1", page: 1 }), p > 2 && m.push({ key: "e-left", label: "…", ellipsis: !0 });
      for (let R = p; R <= O; R++)
        m.push({ key: `p-${R}`, label: String(R), page: R });
      return O < y - 1 && m.push({ key: "e-right", label: "…", ellipsis: !0 }), y > 1 && m.push({ key: `p-${y}`, label: String(y), page: y }), m;
    });
    return (m, y) => (t(), o("div", Xu, [
      a("div", Ju, [
        e.showInfo ? (t(), o("div", Zu, S(c.value) + "–" + S(b.value) + " of " + S(e.total), 1)) : x("", !0),
        e.showPageSize ? (t(), U($t, {
          key: 1,
          modelValue: i.value,
          "onUpdate:modelValue": y[0] || (y[0] = (k) => i.value = k),
          options: l.value,
          align: "left",
          size: "sm"
        }, null, 8, ["modelValue", "options"])) : x("", !0)
      ]),
      a("div", Gu, [
        a("button", {
          class: "fu-pagination__btn",
          disabled: e.page <= 1,
          onClick: y[1] || (y[1] = (k) => f(e.page - 1)),
          "aria-label": "Previous page"
        }, [
          L(G(Ae), { class: "fu-pagination__icon" })
        ], 8, Qu),
        e.variant !== "simple" ? (t(!0), o(X, { key: 0 }, te(d.value, (k) => (t(), o("button", {
          key: k.key,
          class: q(["fu-pagination__btn", { active: k.page === e.page, ellipsis: k.ellipsis }]),
          disabled: !!k.ellipsis,
          onClick: (r) => g(k.page)
        }, S(k.label), 11, er))), 128)) : x("", !0),
        a("button", {
          class: "fu-pagination__btn",
          disabled: e.page >= u.value,
          onClick: y[2] || (y[2] = (k) => f(e.page + 1)),
          "aria-label": "Next page"
        }, [
          L(G(We), { class: "fu-pagination__icon" })
        ], 8, tr)
      ])
    ]));
  }
}), or = /* @__PURE__ */ K(nr, [["__scopeId", "data-v-209f4783"]]), ar = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: or
}, Symbol.toStringTag, { value: "Module" })), lr = {
  key: 0,
  class: "fu-panel__header px-2"
}, sr = {
  key: 0,
  class: "fu-panel__title"
}, ir = {
  key: 1,
  class: "fu-panel__actions"
}, ur = { class: "fu-panel__body-wrapper" }, rr = { class: "fu-panel__body scrollbar__control customScrollBar px-2" }, dr = /* @__PURE__ */ ee({
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
      e.title || s.$slots.actions ? (t(), o("div", lr, [
        e.title ? (t(), o("h3", sr, S(e.title), 1)) : x("", !0),
        s.$slots.actions ? (t(), o("div", ir, [
          Z(s.$slots, "actions")
        ])) : x("", !0)
      ])) : x("", !0),
      a("div", ur, [
        a("div", rr, [
          Z(s.$slots, "default")
        ])
      ])
    ], 4));
  }
}), cr = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: dr
}, Symbol.toStringTag, { value: "Module" })), fr = {
  key: 0,
  class: "fu-input-label"
}, vr = {
  key: 0,
  class: "fu-input-required"
}, mr = ["type", "placeholder", "disabled", "required"], pr = {
  key: 1,
  class: "fu-input-error"
}, hr = /* @__PURE__ */ ee({
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
    const n = e, s = v, l = w(n.modelValue), i = w(!1), u = () => {
      i.value = !i.value;
    };
    return fe(l, (c) => s("update:modelValue", c)), fe(() => n.modelValue, (c) => l.value = c), (c, b) => (t(), o("div", {
      class: "fu-input-wrapper",
      style: oe({ width: e.formWrapperWidth })
    }, [
      e.label ? (t(), o("label", fr, [
        ie(S(e.label) + " ", 1),
        e.required ? (t(), o("span", vr, "*")) : x("", !0)
      ])) : x("", !0),
      a("div", {
        class: q(["fu-input-container", [
          `fu-input--${e.size}`,
          `fu-input--${e.variant}`,
          { "fu-input--error": e.error }
        ]])
      }, [
        Fe(a("input", tt(c.$attrs, {
          class: "fu-input",
          type: i.value ? "text" : "password",
          placeholder: e.placeholder,
          disabled: e.disabled,
          required: e.required,
          "onUpdate:modelValue": b[0] || (b[0] = (f) => l.value = f)
        }), null, 16, mr), [
          [gt, l.value]
        ]),
        a("button", {
          type: "button",
          class: "fu-password-toggle",
          onClick: u
        }, [
          (t(), U(ce(i.value ? G(Wt) : G(Rt)), { class: "fu-password-icon" }))
        ])
      ], 2),
      e.error ? (t(), o("span", pr, S(e.error), 1)) : x("", !0)
    ], 4));
  }
}), _r = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: hr
}, Symbol.toStringTag, { value: "Module" })), gr = { class: "fu-progress-stepper" }, yr = { class: "fu-progress-bar" }, br = {
  key: 0,
  class: "fu-step-labels"
}, wr = ["onClick"], kr = { class: "circle" }, $r = { class: "label" }, Mr = /* @__PURE__ */ ee({
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
    return (u, c) => (t(), o("div", gr, [
      a("div", yr, [
        a("div", {
          class: "fu-progress-fill",
          style: oe({ width: l.value })
        }, null, 4)
      ]),
      e.showLabels && e.steps ? (t(), o("div", br, [
        (t(!0), o(X, null, te(e.steps, (b, f) => (t(), o("div", {
          key: f,
          class: q(["fu-step-label", { active: e.currentStep === f }]),
          onClick: (g) => i(f)
        }, [
          a("div", kr, S(f + 1), 1),
          a("div", $r, S(b.title), 1)
        ], 10, wr))), 128))
      ])) : x("", !0)
    ]));
  }
}), Cr = /* @__PURE__ */ K(Mr, [["__scopeId", "data-v-6ac0e869"]]), Sr = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Cr
}, Symbol.toStringTag, { value: "Module" })), xr = ["value", "disabled", "checked"], zr = { class: "fu-radio__control" }, Or = {
  key: 0,
  class: "fu-radio__dot"
}, Dr = {
  key: 0,
  class: "fu-radio__label"
}, Yr = /* @__PURE__ */ ee({
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
    return (u, c) => (t(), o("label", {
      class: q(["fu-radio", [`fu-radio--${e.size}`, { "is-checked": i.value, "is-disabled": e.disabled }]])
    }, [
      a("input", {
        type: "radio",
        class: "fu-radio__input",
        value: e.value,
        disabled: e.disabled,
        checked: i.value,
        onChange: c[0] || (c[0] = (b) => s("update:modelValue", e.value))
      }, null, 40, xr),
      a("span", zr, [
        i.value ? (t(), o("span", Or)) : x("", !0)
      ]),
      u.$slots.default ? (t(), o("span", Dr, [
        Z(u.$slots, "default", {}, void 0, !0)
      ])) : x("", !0)
    ], 2));
  }
}), Tr = /* @__PURE__ */ K(Yr, [["__scopeId", "data-v-3c5ecc5b"]]), Vr = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Tr
}, Symbol.toStringTag, { value: "Module" })), Fr = { class: "fu-range-control" }, Br = {
  key: 0,
  class: "fu-range-label"
}, Ir = { class: "fu-range-track" }, jr = ["min", "max", "step", "value"], Er = { class: "fu-range-value" }, Pr = /* @__PURE__ */ ee({
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
      const c = u.target, b = Number(c.value);
      s("update:modelValue", b), s("change", b);
    }
    const i = H(
      () => n.unit ? `${n.modelValue}${n.unit}` : String(n.modelValue)
    );
    return (u, c) => (t(), o("div", Fr, [
      e.label ? (t(), o("label", Br, S(e.label), 1)) : x("", !0),
      a("div", Ir, [
        a("input", {
          type: "range",
          min: e.min,
          max: e.max,
          step: e.step,
          value: e.modelValue,
          onInput: l
        }, null, 40, jr),
        a("span", Er, S(i.value), 1)
      ])
    ]));
  }
}), Lr = /* @__PURE__ */ K(Pr, [["__scopeId", "data-v-9c1e4c91"]]), Ar = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Lr
}, Symbol.toStringTag, { value: "Module" })), Wr = {};
function Rr(e, v) {
  return null;
}
const Hr = /* @__PURE__ */ K(Wr, [["render", Rr]]), qr = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Hr
}, Symbol.toStringTag, { value: "Module" })), Nr = {};
function Ur(e, v) {
  return null;
}
const Kr = /* @__PURE__ */ K(Nr, [["render", Ur]]), Xr = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Kr
}, Symbol.toStringTag, { value: "Module" })), Jr = {};
function Zr(e, v) {
  return null;
}
const Gr = /* @__PURE__ */ K(Jr, [["render", Zr]]), Qr = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Gr
}, Symbol.toStringTag, { value: "Module" })), ed = {};
function td(e, v) {
  return null;
}
const nd = /* @__PURE__ */ K(ed, [["render", td]]), od = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: nd
}, Symbol.toStringTag, { value: "Module" })), ad = {};
function ld(e, v) {
  return null;
}
const sd = /* @__PURE__ */ K(ad, [["render", ld]]), id = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: sd
}, Symbol.toStringTag, { value: "Module" })), ud = {};
function rd(e, v) {
  return null;
}
const dd = /* @__PURE__ */ K(ud, [["render", rd]]), cd = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: dd
}, Symbol.toStringTag, { value: "Module" })), fd = {}, vd = { class: "fu-section-header" }, md = { class: "fu-section-header__left" }, pd = { class: "fu-section-header__right" };
function hd(e, v) {
  return t(), o("div", vd, [
    a("div", md, [
      Z(e.$slots, "left", {}, void 0, !0)
    ]),
    a("div", pd, [
      Z(e.$slots, "right", {}, void 0, !0)
    ])
  ]);
}
const _d = /* @__PURE__ */ K(fd, [["render", hd], ["__scopeId", "data-v-b7f6e763"]]), gd = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _d
}, Symbol.toStringTag, { value: "Module" })), yd = { class: "fu-sidebar__list" }, bd = ["onClick"], wd = { class: "fu-sidebar__icon-wrapper" }, kd = {
  key: 0,
  class: "fu-sidebar__badge"
}, $d = { class: "fu-sidebar__label" }, Md = /* @__PURE__ */ ee({
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
      a("ul", yd, [
        (t(!0), o(X, null, te(e.modules, (i) => (t(), o("li", {
          key: i.name,
          class: q({ active: e.activeModule === i.name })
        }, [
          a("div", {
            class: "fu-sidebar__item",
            onClick: (u) => s.$emit("select", i)
          }, [
            a("div", wd, [
              (t(), U(ce(i.icon), {
                class: "fu-sidebar__icon",
                size: 20
              })),
              i.count ? (t(), o("span", kd, S(i.count > 99 ? "99+" : i.count), 1)) : x("", !0)
            ]),
            a("span", $d, S(i.label), 1)
          ], 8, bd)
        ], 2))), 128))
      ])
    ], 4));
  }
}), Cd = /* @__PURE__ */ K(Md, [["__scopeId", "data-v-dfe88081"]]), Sd = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Cd
}, Symbol.toStringTag, { value: "Module" })), xd = ["disabled", "aria-expanded"], zd = ["aria-expanded", "disabled"], Od = ["onClick"], Dd = ["src"], Yd = { class: "fu-split-button__option-label" }, Td = /* @__PURE__ */ ee({
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
    const n = e, s = v, l = w(!1), i = w(null), u = w(null), c = H(() => n.align ?? "right"), b = w({}), f = H(() => `fu-split-button--${n.size ?? "sm"}`), g = H(() => `fu-split-button--${n.variant ?? "solid"}`), d = H(() => ({
      ...n.color ? { "--fu-split-bg": n.color } : {},
      ...n.buttonWidth ? { width: n.buttonWidth } : {}
    }));
    function m() {
      n.disabled || (l.value = !l.value, l.value && ve(() => {
        y(), window.addEventListener("click", k), window.addEventListener("resize", y);
      }));
    }
    function y() {
      if (!u.value || !i.value) return;
      const O = u.value.getBoundingClientRect(), R = i.value.offsetWidth, B = {
        top: `${O.bottom + window.scrollY + 4}px`,
        left: `${O.left + window.scrollX}px`
      };
      c.value === "right" ? B.left = `${O.right - R + window.scrollX}px` : c.value === "center" && (B.left = `${O.left + O.width / 2 - R / 2 + window.scrollX}px`), b.value = {
        position: "absolute",
        ...B,
        zIndex: "1000"
      };
    }
    function k(O) {
      u.value?.contains(O.target) || i.value?.contains(O.target) || (l.value = !1, window.removeEventListener("click", k), window.removeEventListener("resize", y));
    }
    function r() {
      n.disabled || s("main-action");
    }
    function p(O) {
      O.onClick && O.onClick(), s("select", O), l.value = !1, window.removeEventListener("click", k), window.removeEventListener("resize", y);
    }
    return he(() => {
      _e(() => {
        window.removeEventListener("click", k), window.removeEventListener("resize", y);
      });
    }), (O, R) => (t(), o("div", {
      class: q(["fu-split-button", [f.value, g.value]]),
      style: oe(d.value),
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
        e.icon ? (t(), U(ce(e.icon), {
          key: 0,
          class: "fu-split-button__icon"
        })) : x("", !0),
        a("span", null, [
          Z(O.$slots, "default", {}, void 0, !0)
        ])
      ], 8, xd),
      a("button", {
        class: "fu-split-button__toggle",
        onClick: m,
        "aria-expanded": l.value,
        disabled: e.disabled,
        type: "button",
        "aria-label": "Toggle dropdown"
      }, [
        L(G($e))
      ], 8, zd),
      (t(), U(be, { to: "body" }, [
        L(Te, { name: "fade" }, {
          default: ae(() => [
            l.value ? (t(), o("div", {
              key: 0,
              class: q(["fu-split-button__dropdown", [`fu-split-button__dropdown--${c.value}`]]),
              ref_key: "dropdownRef",
              ref: i,
              style: oe(b.value)
            }, [
              (t(!0), o(X, null, te(e.options, (B) => (t(), o("div", {
                key: B.value,
                class: "fu-split-button__option",
                onClick: (E) => p(B)
              }, [
                B.type === "icon" ? (t(), U(ce(B.icon), {
                  key: 0,
                  class: "fu-split-button__option-icon"
                })) : B.type === "image" ? (t(), o("img", {
                  key: 1,
                  src: B.imageUrl,
                  class: "fu-split-button__option-image",
                  alt: ""
                }, null, 8, Dd)) : x("", !0),
                a("span", Yd, S(B.label), 1)
              ], 8, Od))), 128))
            ], 6)) : x("", !0)
          ]),
          _: 1
        })
      ]))
    ], 6));
  }
}), Vd = /* @__PURE__ */ K(Td, [["__scopeId", "data-v-569e263d"]]), Fd = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Vd
}, Symbol.toStringTag, { value: "Module" })), Bd = ["aria-checked", "disabled"], Id = /* @__PURE__ */ ee({
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
    return (u, c) => (t(), o("button", {
      type: "button",
      class: q(["fu-switch", [{ "fu-switch--checked": e.modelValue, disabled: e.disabled }, i.value]]),
      role: "switch",
      "aria-checked": e.modelValue,
      disabled: e.disabled,
      onClick: l
    }, [...c[0] || (c[0] = [
      a("span", { class: "fu-switch__thumb" }, null, -1)
    ])], 10, Bd));
  }
}), jd = /* @__PURE__ */ K(Id, [["__scopeId", "data-v-c8285d1a"]]), Ed = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: jd
}, Symbol.toStringTag, { value: "Module" })), Pd = { class: "fu-tabs" }, Ld = { class: "fu-tabs__header-wrapper" }, Ad = { class: "fu-tabs-buttons scrollbar__control customScrollBar" }, Wd = ["onClick", "disabled"], Rd = {
  key: 0,
  class: "fu-tab__avatar"
}, Hd = ["src"], qd = {
  key: 1,
  class: "fu-tab__avatar-fallback"
}, Nd = {
  key: 2,
  class: "fu-tab__title"
}, Ud = {
  key: 3,
  class: "fu-tab__count"
}, Kd = { class: "fu-tabs__content-wrapper" }, Xd = {
  key: 0,
  class: "fu-tabs__footer"
}, Jd = {
  __name: "FusionTab",
  props: {
    tabs: Array,
    defaultActiveDesktop: String,
    defaultActiveMobile: String
  },
  emits: ["tab-change"],
  setup(e, { expose: v, emit: n }) {
    const s = e, l = n, i = w(window.innerWidth <= 768), u = w(""), c = w(null), b = H(
      () => s.tabs.filter((y) => !y.mobileOnly || i.value)
    );
    function f() {
      const y = c.value;
      y && (y.style.overflowY = "hidden", requestAnimationFrame(() => {
        y.style.overflowY = "auto";
      }));
    }
    function g(y) {
      const k = s.tabs.find((r) => r.key === y);
      !k || k.disabled || (u.value = y, l("tab-change", y), ve(() => {
        const r = c.value;
        r && (r.scrollTop = 0, f());
      }));
    }
    function d() {
      const y = s.tabs[0]?.key, k = i.value ? s.defaultActiveMobile || y : s.defaultActiveDesktop || y;
      u.value = k;
    }
    function m() {
      const y = i.value;
      i.value = window.innerWidth <= 768, y !== i.value && ve(d);
    }
    return he(() => {
      m(), d(), f(), window.addEventListener("resize", m);
    }), _e(() => {
      window.removeEventListener("resize", m);
    }), v({ setActive: g }), (y, k) => (t(), o("div", Pd, [
      a("div", Ld, [
        a("div", Ad, [
          (t(!0), o(X, null, te(b.value, (r) => (t(), o("button", {
            key: r.key,
            onClick: (p) => g(r.key),
            class: q(["fu-tab", { "fu-tab--active": u.value === r.key }]),
            disabled: r.disabled
          }, [
            r.avatarSrc || r.avatarText ? (t(), o("div", Rd, [
              r.avatarSrc ? (t(), o("img", {
                key: 0,
                src: r.avatarSrc,
                class: "fu-tab__avatar-img",
                alt: "avatar"
              }, null, 8, Hd)) : (t(), o("div", qd, S(r.avatarText?.charAt(0)?.toUpperCase()), 1))
            ])) : r.icon ? (t(), U(ce(r.icon), {
              key: 1,
              size: 16,
              class: "fu-tab__icon"
            })) : x("", !0),
            !r.avatarSrc && !r.avatarText && r.title ? (t(), o("span", Nd, S(r.title), 1)) : x("", !0),
            typeof r.count == "number" ? (t(), o("span", Ud, S(r.count), 1)) : x("", !0)
          ], 10, Wd))), 128))
        ])
      ]),
      a("div", Kd, [
        a("div", {
          class: "fu-tabs__body scrollbar__control customScrollBar",
          ref_key: "tabBody",
          ref: c
        }, [
          (t(), U(Dt, null, [
            (t(!0), o(X, null, te(b.value, (r) => Fe((t(), o("div", {
              key: r.key,
              class: "fu-tab-panel"
            }, [
              Z(y.$slots, r.key, {}, void 0, !0)
            ])), [
              [nt, u.value === r.key]
            ])), 128))
          ], 1024))
        ], 512),
        y.$slots.footer ? (t(), o("div", Xd, [
          Z(y.$slots, "footer", {}, void 0, !0)
        ])) : x("", !0)
      ])
    ]));
  }
}, Zd = /* @__PURE__ */ K(Jd, [["__scopeId", "data-v-b6516c96"]]), Gd = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Zd
}, Symbol.toStringTag, { value: "Module" })), Qd = { class: "fu-textarea-wrapper" }, ec = {
  key: 0,
  class: "fu-textarea-label"
}, tc = {
  key: 0,
  class: "fu-textarea-required"
}, nc = ["placeholder", "disabled", "rows", "required"], oc = {
  key: 1,
  class: "fu-textarea-error"
}, ac = /* @__PURE__ */ ee({
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
    const n = e, s = v, l = w(n.modelValue);
    return fe(l, (i) => s("update:modelValue", i)), fe(
      () => n.modelValue,
      (i) => l.value = i
    ), (i, u) => (t(), o("div", Qd, [
      e.label ? (t(), o("label", ec, [
        ie(S(e.label) + " ", 1),
        e.required ? (t(), o("span", tc, "*")) : x("", !0)
      ])) : x("", !0),
      Fe(a("textarea", tt(i.$attrs, {
        class: ["fu-textarea fu-form-control", [
          `fu-textarea--${e.size}`,
          { "fu-textarea--error": e.error },
          e.variant ? `fu-textarea--${e.variant}` : null
        ]],
        placeholder: e.placeholder,
        disabled: e.disabled,
        rows: e.rows,
        required: e.required,
        "onUpdate:modelValue": u[0] || (u[0] = (c) => l.value = c)
      }), null, 16, nc), [
        [ot, l.value]
      ]),
      e.error ? (t(), o("span", oc, S(e.error), 1)) : x("", !0)
    ]));
  }
}), lc = /* @__PURE__ */ K(ac, [["__scopeId", "data-v-3beafd95"]]), sc = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: lc
}, Symbol.toStringTag, { value: "Module" })), ic = { class: "fu-theme-selector" }, uc = { class: "fu-theme-grid" }, rc = ["onClick"], dc = {
  key: 0,
  class: "fu-theme-check"
}, cc = { class: "fu-theme-label" }, fc = /* @__PURE__ */ ee({
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
    return (l, i) => (t(), o("div", ic, [
      a("div", uc, [
        (t(!0), o(X, null, te(e.themes, (u) => (t(), o("div", {
          key: u.key,
          class: q(["fu-theme-card", { "is-active": e.modelValue === u.key }]),
          onClick: (c) => s(u.key),
          tabindex: "0",
          role: "button"
        }, [
          a("div", {
            class: q(["fu-theme-preview", `fu-theme-preview--${u.key}`])
          }, [
            i[0] || (i[0] = a("div", { class: "fu-theme-header" }, null, -1)),
            i[1] || (i[1] = a("div", { class: "fu-theme-body" }, null, -1)),
            i[2] || (i[2] = a("div", { class: "fu-theme-footer" }, null, -1)),
            e.modelValue === u.key ? (t(), o("div", dc, [
              L(G(bt), { class: "fu-check-icon" })
            ])) : x("", !0)
          ], 2),
          a("span", cc, S(u.name), 1)
        ], 10, rc))), 128))
      ])
    ]));
  }
}), vc = /* @__PURE__ */ K(fc, [["__scopeId", "data-v-43c6ff7c"]]), mc = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: vc
}, Symbol.toStringTag, { value: "Module" })), pc = { class: "fu-toolbar__left" }, hc = { class: "fu-toolbar__actions" }, _c = /* @__PURE__ */ ee({
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
      a("div", pc, [
        Z(s.$slots, "left", {}, void 0, !0)
      ]),
      a("div", hc, [
        Z(s.$slots, "right", {}, void 0, !0)
      ])
    ], 2));
  }
}), gc = /* @__PURE__ */ K(_c, [["__scopeId", "data-v-aa44a495"]]), yc = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: gc
}, Symbol.toStringTag, { value: "Module" })), bc = {
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
}, wc = { class: "fu-under-construction" }, kc = { class: "fu-under-construction__inner" }, $c = ["src", "alt"], Mc = { class: "fu-under-construction__content" }, Cc = { class: "fu-under-construction__title" }, Sc = { class: "fu-under-construction__subtitle" };
function xc(e, v, n, s, l, i) {
  return t(), o("div", wc, [
    a("div", kc, [
      a("img", {
        class: "fu-under-construction__image",
        src: n.imageSrc,
        alt: n.imageAlt
      }, null, 8, $c),
      a("div", Mc, [
        a("h1", Cc, S(n.title), 1),
        a("p", Sc, S(n.subtitle), 1),
        Z(e.$slots, "default")
      ])
    ])
  ]);
}
const zc = /* @__PURE__ */ K(bc, [["render", xc]]), Oc = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: zc
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
const zt = localStorage.getItem("theme") || "auto", Be = w(zt);
function Dc() {
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}
function Le(e, v = !1) {
  const n = e === "auto" ? Dc() : e;
  if (v) {
    document.documentElement.setAttribute("data-theme", n);
    return;
  }
  document.documentElement.setAttribute("data-theme", n), localStorage.setItem("theme", e);
}
Le(zt, !0);
const Yc = window.matchMedia("(prefers-color-scheme: dark)");
Yc.addEventListener("change", () => {
  Be.value === "auto" && Le("auto");
});
Tt(() => {
  Le(Be.value);
});
function Fc() {
  return {
    theme: Be,
    setTheme: (e) => {
      Be.value = e, Le(e);
    },
    toggleTheme: () => {
      Be.value = Be.value === "dark" ? "light" : "dark", Le(Be.value);
    }
  };
}
const ht = /* @__PURE__ */ Object.assign({ "./components/StatusDropdown/FusionStatusDropdown.vue": en, "./components/TextInput/EditableDisplayField.vue": _n, "./components/TextInput/FusionTextInput.vue": Cn, "./components/accordion/FusionAccordion.vue": Yn, "./components/actionButton/FusionActionButton.vue": ln, "./components/autocomplete/FusionAutocomplete.vue": Nn, "./components/avatar/FuAvatar.vue": cn, "./components/avatar/FuAvatarGroup.vue": Xn, "./components/badge/FusionBadge.vue": Gn, "./components/button/FusionButton.vue": ao, "./components/cards/FusionStatCard.vue": ho, "./components/checkbox/FusionCheckbox.vue": wo, "./components/codeInput/FusionCodeInput.vue": zo, "./components/colourPallet/FuColorPopover.vue": Bo, "./components/combobox/FuCombobox.vue": No, "./components/datePicker/dateField/FusionDatePicker.vue": ga, "./components/datePicker/datePickerBackup.vue": Ea, "./components/datePicker/monthPicker/FusionMonthPicker.vue": Ka, "./components/datePicker/plainDate/FusionPlainDatePicker.vue": dl, "./components/datePicker/time/FusionTimePicker.vue": ml, "./components/drawer/FusionDrawer.vue": kl, "./components/dropdown/FusionDropdownButton.vue": Sl, "./components/dropdownInline/FusionDropdownInline.vue": Tl, "./components/dropdownMenu/DropdownMenu.vue": Il, "./components/editWrapper/EditableFieldWrapper.vue": Hl, "./components/fileUploader/FusionUpload.vue": es, "./components/filterDropdown/FusionFilterDropdown.vue": is, "./components/floatingHeader/FusionSmartHeader.vue": fs, "./components/icons/FusionTrashIcon.vue": hs, "./components/items/activity/FusionActivityItem.vue": Ds, "./components/items/attachments/FusionAttachment.vue": Ws, "./components/items/notes/FusionNoteCard.vue": Gs, "./components/items/task/FusionTaskItem.vue": di, "./components/kanban/Kanban.vue": Di, "./components/layout/AppShell.vue": Zi, "./components/list/FusionListView.vue": uu, "./components/modal/FusionConfirmDialog.vue": hu, "./components/modal/FusionModal.vue": Ii, "./components/modal/FusionPreviewModal.vue": Su, "./components/modulemenu/FusionModuleMenu.vue": Tu, "./components/notification/FuNotification.vue": ju, "./components/notifications/FuAlert.vue": Hu, "./components/notifications/FusionToast.vue": Ku, "./components/pagination/FusionPagination.vue": ar, "./components/panel/FuPanel.vue": cr, "./components/password/FusionPasswordInput.vue": _r, "./components/progress/FusionProgressStepper.vue": Sr, "./components/radio/FusionRadio.vue": Vr, "./components/rangeControl/FusionRangeControl.vue": Ar, "./components/renderer/DocumentRenderer.vue": qr, "./components/renderer/widgets/DividerWidget.vue": Xr, "./components/renderer/widgets/ImageWidget.vue": Qr, "./components/renderer/widgets/ServiceWidget.vue": od, "./components/renderer/widgets/TextWidget.vue": id, "./components/renderer/widgets/VideoWidget.vue": cd, "./components/section/FuSectionHeader.vue": gd, "./components/sidebarmenu/FusionSidebar.vue": Sd, "./components/splitButton/FusionSplitButton.vue": Fd, "./components/switch/FusionSwitch.vue": Ed, "./components/tabs/FusionTab.vue": Gd, "./components/textArea/FusionTextArea.vue": sc, "./components/theme/FuThemeSelector.vue": mc, "./components/toolbar/FusionToolbar.vue": yc, "./components/utilities/Fuunderconstruction.vue": Oc }), Bc = {
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
  De as FuAvatar,
  Ee as UserStatus,
  Bc as default,
  Fc as useTheme,
  pt as useToast
};
//# sourceMappingURL=fusion-binary-ui.es.js.map
