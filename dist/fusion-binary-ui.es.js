import { h as ue, defineComponent as O, ref as y, reactive as Be, watch as N, onMounted as W, onBeforeUnmount as Y, createElementBlock as l, openBlock as t, createCommentVNode as m, createElementVNode as n, createBlock as z, toDisplayString as _, createVNode as T, normalizeStyle as P, unref as A, Teleport as J, Transition as Q, withCtx as q, Fragment as j, renderList as L, nextTick as Z, createTextVNode as K, normalizeClass as S, withDirectives as G, renderSlot as V, mergeProps as de, vModelDynamic as xe, resolveDynamicComponent as D, vShow as re, computed as U, withModifiers as H, withKeys as Se, vModelText as ze, resolveComponent as Me, vModelCheckbox as _e, KeepAlive as Ee, createApp as Ae, watchEffect as Le } from "vue";
/**
 * @license lucide-vue-next v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const pe = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), De = (e) => e.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (c, o, s) => s ? s.toUpperCase() : o.toLowerCase()
), Pe = (e) => {
  const c = De(e);
  return c.charAt(0).toUpperCase() + c.slice(1);
}, Re = (...e) => e.filter((c, o, s) => !!c && c.trim() !== "" && s.indexOf(c) === o).join(" ").trim(), be = (e) => e === "";
/**
 * @license lucide-vue-next v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var le = {
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
const Ne = ({
  name: e,
  iconNode: c,
  absoluteStrokeWidth: o,
  "absolute-stroke-width": s,
  strokeWidth: a,
  "stroke-width": i,
  size: u = le.width,
  color: r = le.stroke,
  ...d
}, { slots: k }) => ue(
  "svg",
  {
    ...le,
    ...d,
    width: u,
    height: u,
    stroke: r,
    "stroke-width": be(o) || be(s) || o === !0 || s === !0 ? Number(a || i || le["stroke-width"]) * 24 / Number(u) : a || i || le["stroke-width"],
    class: Re(
      "lucide",
      d.class,
      ...e ? [`lucide-${pe(Pe(e))}-icon`, `lucide-${pe(e)}`] : ["lucide-icon"]
    )
  },
  [...c.map((F) => ue(...F)), ...k.default ? [k.default()] : []]
);
/**
 * @license lucide-vue-next v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const R = (e, c) => (o, { slots: s, attrs: a }) => ue(
  Ne,
  {
    ...a,
    ...o,
    iconNode: c,
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
const qe = R("bell", [
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
const Oe = R("check", [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]]);
/**
 * @license lucide-vue-next v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const fe = R("chevron-down", [
  ["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]
]);
/**
 * @license lucide-vue-next v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const We = R("chevron-up", [
  ["path", { d: "m18 15-6-6-6 6", key: "153udz" }]
]);
/**
 * @license lucide-vue-next v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const He = R("circle-check-big", [
  ["path", { d: "M21.801 10A10 10 0 1 1 17 3.335", key: "yps3ct" }],
  ["path", { d: "m9 11 3 3L22 4", key: "1pflzl" }]
]);
/**
 * @license lucide-vue-next v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ke = R("circle-check", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "m9 12 2 2 4-4", key: "dzmm74" }]
]);
/**
 * @license lucide-vue-next v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ue = R("circle-x", [
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
const Fe = R("ellipsis-vertical", [
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
const Xe = R("eye-off", [
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
const Ye = R("eye", [
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
const Ze = R("file-text", [
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
const he = R("info", [
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
const Ge = R("maximize-2", [
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
const Je = R("minimize-2", [
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
const ye = R("monitor-smartphone", [
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
const Qe = R("square-pen", [
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
const et = R("trash-2", [
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
const tt = R("video", [
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
const ve = R("x", [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
]), ot = {
  key: 0,
  class: "fu-status-dropdown__label-text"
}, nt = { class: "fu-status-dropdown__label" }, lt = ["onClick"], at = { class: "fu-status-dropdown__item-label" }, st = /* @__PURE__ */ O({
  __name: "FusionStatusDropdown",
  props: {
    modelValue: {},
    options: {},
    align: { default: "left" },
    label: { default: "" }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: c }) {
    const o = e, s = c, a = y(!1), i = y(null), u = y(null), r = y(o.modelValue || null), d = Be({
      visibility: "hidden",
      opacity: "0"
    });
    N(
      () => o.modelValue,
      (h) => r.value = h
    );
    function k() {
      if (!i.value) return;
      const h = i.value.getBoundingClientRect();
      d.position = "absolute", d.zIndex = "9999", d.top = `${h.bottom + window.scrollY - 2}px`, o.align === "center" ? (d.left = `${h.left + window.scrollX + h.width / 2}px`, d.transform = "translateX(-50%)") : o.align === "right" ? (d.left = `${h.right + window.scrollX}px`, d.transform = "translateX(-100%)") : (d.left = `${h.left + window.scrollX}px`, d.transform = "none"), d.minWidth = `${h.width}px`;
    }
    const F = async () => {
      a.value = !a.value, a.value && (k(), await Z(), k(), d.visibility = "visible", d.opacity = "1");
    }, w = (h) => {
      r.value = h, s("update:modelValue", h), a.value = !1;
    }, b = (h) => {
      const I = h.target;
      a.value && i.value && u.value && !i.value.contains(I) && !u.value.contains(I) && (a.value = !1);
    }, f = () => {
      a.value && (a.value = !1);
    }, g = (h) => {
      h.key === "Escape" && a.value && (a.value = !1);
    };
    return W(() => {
      document.addEventListener("click", b), window.addEventListener("resize", f), window.addEventListener("scroll", f, !0), document.addEventListener("keydown", g);
    }), Y(() => {
      document.removeEventListener("click", b), window.removeEventListener("resize", f), window.removeEventListener("scroll", f, !0), document.removeEventListener("keydown", g);
    }), (h, I) => (t(), l("div", {
      class: "fu-status-dropdown",
      ref_key: "dropdown",
      ref: i
    }, [
      e.label ? (t(), l("div", ot, _(e.label), 1)) : m("", !0),
      n("button", {
        class: "fu-status-dropdown__button",
        onClick: F
      }, [
        r.value?.color ? (t(), l("span", {
          key: 0,
          class: "fu-status-dropdown__dot",
          style: P({ backgroundColor: r.value.color })
        }, null, 4)) : m("", !0),
        n("span", nt, _(r.value?.label || "Select Status"), 1),
        T(A(fe), { class: "fu-status-dropdown__chevron" })
      ]),
      (t(), z(J, { to: "body" }, [
        T(Q, { name: "fade" }, {
          default: q(() => [
            a.value ? (t(), l("ul", {
              key: 0,
              ref_key: "menuRef",
              ref: u,
              class: "fu-status-dropdown__menu",
              style: P(d)
            }, [
              (t(!0), l(j, null, L(e.options, ($) => (t(), l("li", {
                key: $.label,
                class: "fu-status-dropdown__item",
                onClick: (B) => w($)
              }, [
                $.color ? (t(), l("span", {
                  key: 0,
                  class: "fu-status-dropdown__dot",
                  style: P({ backgroundColor: $.color })
                }, null, 4)) : m("", !0),
                n("span", at, _($.label), 1)
              ], 8, lt))), 128))
            ], 4)) : m("", !0)
          ]),
          _: 1
        })
      ]))
    ], 512));
  }
}), M = (e, c) => {
  const o = e.__vccOpts || e;
  for (const [s, a] of c)
    o[s] = a;
  return o;
}, it = /* @__PURE__ */ M(st, [["__scopeId", "data-v-408ca4c3"]]), ut = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: it
}, Symbol.toStringTag, { value: "Module" })), ct = {
  key: 0,
  class: "fu-input-label"
}, dt = {
  key: 0,
  class: "fu-input-required"
}, rt = {
  key: 0,
  class: "fu-input-icon fu-input-icon--left"
}, ft = ["type", "placeholder", "disabled", "required", "inputmode", "pattern", "min", "max", "step"], vt = {
  key: 1,
  class: "fu-input-icon fu-input-icon--right"
}, mt = {
  key: 1,
  class: "fu-input-error"
}, _t = /* @__PURE__ */ O({
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
  setup(e, { emit: c }) {
    const o = e, s = c, a = y(o.modelValue);
    return N(a, (i) => s("update:modelValue", i)), N(
      () => o.modelValue,
      (i) => a.value = i
    ), (i, u) => (t(), l("div", {
      class: "fu-input-wrapper",
      style: P({ width: e.formWrapperWidth })
    }, [
      e.label ? (t(), l("label", ct, [
        K(_(e.label) + " ", 1),
        e.required ? (t(), l("span", dt, "*")) : m("", !0)
      ])) : m("", !0),
      n("div", {
        class: S(["fu-input-container", [`fu-input--${e.size}`, `fu-input--${e.variant}`, { "fu-input--error": e.error }]])
      }, [
        i.$slots.left ? (t(), l("div", rt, [
          V(i.$slots, "left", {}, void 0, !0)
        ])) : m("", !0),
        G(n("input", de(i.$attrs, {
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
          "onUpdate:modelValue": u[0] || (u[0] = (r) => a.value = r)
        }), null, 16, ft), [
          [xe, a.value]
        ]),
        i.$slots.right ? (t(), l("div", vt, [
          V(i.$slots, "right", {}, void 0, !0)
        ])) : m("", !0)
      ], 2),
      e.error ? (t(), l("span", mt, _(e.error), 1)) : m("", !0)
    ], 4));
  }
}), ce = /* @__PURE__ */ M(_t, [["__scopeId", "data-v-5c409c4d"]]), pt = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: ce
}, Symbol.toStringTag, { value: "Module" })), bt = ["onClick", "disabled"], ht = { class: "fu-accordion__header-content" }, yt = { class: "fu-accordion__body" }, gt = /* @__PURE__ */ O({
  __name: "FusionAccordion",
  props: {
    items: {},
    defaultOpen: {},
    type: {},
    theme: {}
  },
  setup(e) {
    const c = e, o = y(c.defaultOpen || []);
    function s(i) {
      return o.value.includes(i);
    }
    function a(i) {
      const u = s(i);
      c.type === "single" ? o.value = u ? [] : [i] : u ? o.value = o.value.filter((r) => r !== i) : o.value.push(i);
    }
    return (i, u) => (t(), l("div", {
      class: S(["fu-accordion", [`fu-accordion--${e.theme}`]])
    }, [
      (t(!0), l(j, null, L(e.items, (r) => (t(), l("div", {
        key: r.key,
        class: "fu-accordion__item"
      }, [
        n("button", {
          class: S(["fu-accordion__header", {
            "is-open": s(r.key),
            "is-disabled": r.disabled
          }]),
          onClick: (d) => a(r.key),
          disabled: r.disabled
        }, [
          n("div", ht, [
            r.icon ? (t(), z(D(r.icon), {
              key: 0,
              size: 16,
              class: "fu-accordion__icon"
            })) : m("", !0),
            n("span", null, _(r.title), 1)
          ]),
          (t(), l("svg", {
            class: S(["fu-accordion__chevron", { "is-open": s(r.key) }]),
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            viewBox: "0 0 24 24",
            stroke: "currentColor"
          }, [...u[0] || (u[0] = [
            n("path", {
              "stroke-linecap": "round",
              "stroke-linejoin": "round",
              "stroke-width": "2",
              d: "M6 9l6 6 6-6"
            }, null, -1)
          ])], 2))
        ], 10, bt),
        G(n("div", yt, [
          V(i.$slots, r.key, {}, void 0, !0)
        ], 512), [
          [re, s(r.key)]
        ])
      ]))), 128))
    ], 2));
  }
}), kt = /* @__PURE__ */ M(gt, [["__scopeId", "data-v-7a4ed33d"]]), wt = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: kt
}, Symbol.toStringTag, { value: "Module" })), $t = ["disabled"], Ct = {
  key: 0,
  class: "fu-spinner"
}, xt = {
  key: 0,
  class: "fu-tooltip"
}, St = /* @__PURE__ */ O({
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
    return (c, o) => (t(), l("div", {
      class: S(["fu-action-btn-wrapper", { "has-tooltip": e.tooltip }])
    }, [
      n("button", {
        class: S(["fu-action-btn", [`fu-action-btn--${e.size}`, `fu-action-btn--${e.variant}`, { "is-loading": e.loading }]]),
        disabled: e.disabled || e.loading,
        onClick: o[0] || (o[0] = (s) => e.loading ? null : c.$emit("click", s))
      }, [
        e.loading ? (t(), l("span", Ct)) : e.icon ? (t(), z(D(e.icon), {
          key: 1,
          class: "fu-action-btn__icon",
          size: 20
        })) : m("", !0)
      ], 10, $t),
      e.tooltip ? (t(), l("span", xt, _(e.tooltip), 1)) : m("", !0)
    ], 2));
  }
}), oe = /* @__PURE__ */ M(St, [["__scopeId", "data-v-ca61cb3a"]]), zt = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: oe
}, Symbol.toStringTag, { value: "Module" })), Mt = {
  key: 0,
  class: "fu-status-dropdown__label-text"
}, Ot = { key: 1 }, Ft = { key: 0 }, Vt = ["src"], Tt = ["onClick"], It = {
  key: 1,
  class: "fu-placeholder"
}, jt = {
  key: 1,
  class: "flex flex--center flex--gap-md"
}, Bt = ["src"], Et = {
  key: 2,
  class: "fu-status-dropdown__input-trigger"
}, At = {
  key: 0,
  class: "fu-search-wrapper"
}, Lt = {
  key: 1,
  class: "fu-options-scroll scrollbar__control customScrollBar"
}, Dt = ["onClick"], Pt = ["src"], Rt = {
  key: 2,
  class: "fu-status-dropdown__empty"
}, Nt = /* @__PURE__ */ O({
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
    formWrapperWidth: { default: "" }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: c }) {
    const o = e, s = c, a = y(!1), i = y(""), u = y(null), r = y(null), d = y(null), k = y({}), F = y(null), w = y([]);
    N(
      () => o.modelValue,
      (v) => {
        o.multiple && Array.isArray(v) ? w.value = v : F.value = v;
      },
      { immediate: !0 }
    );
    function b() {
      a.value = !a.value, a.value && Z(() => {
        const v = r.value?.querySelector("button, input"), p = d.value;
        if (v && p) {
          const C = v.getBoundingClientRect(), E = window.innerHeight;
          let X = C.bottom + window.scrollY;
          E - C.bottom < 200 && C.top > 200 && (X = C.top + window.scrollY - p.offsetHeight - 8), k.value = {
            position: "absolute",
            top: `${X}px`,
            left: `${C.left + window.scrollX}px`,
            width: `${C.width}px`,
            zIndex: "9999"
          };
        }
        o.searchable && Z(() => {
          const C = d.value?.querySelector("input[type='text']");
          C && (C.focus(), C.select());
        });
      });
    }
    function f(v) {
      if (o.multiple) {
        const p = w.value.find((C) => C.value === v.value);
        w.value = p ? w.value.filter((C) => C.value !== v.value) : [...w.value, v], s("update:modelValue", w.value);
      } else
        F.value = v, s("update:modelValue", v), a.value = !1;
    }
    function g(v) {
      w.value = w.value.filter((p) => p.value !== v.value), s("update:modelValue", w.value);
    }
    const h = U(() => i.value ? o.options.filter(
      (v) => v.label.toLowerCase().includes(i.value.toLowerCase())
    ) : o.options), I = (v) => {
      v.stopPropagation(), v.preventDefault(), a.value = !1, requestAnimationFrame(() => {
        v.target?.dispatchEvent(new Event("click", { bubbles: !0 }));
      });
    };
    function $() {
      setTimeout(() => {
        const v = document.activeElement;
        !r.value?.contains(v) && !d.value?.contains(v) && (a.value = !1);
      }, 80);
    }
    function B(v) {
      const p = v.target;
      r.value?.contains(p) || d.value?.contains(p) || (a.value = !1);
    }
    function x() {
      a.value && (a.value = !1);
    }
    return W(() => {
      document.addEventListener("click", B), document.addEventListener("focusin", $), document.addEventListener("focusout", $), window.addEventListener("resize", x), u.value && u.value.addEventListener("click", I, !0);
    }), Y(() => {
      document.removeEventListener("click", B), document.removeEventListener("focusin", $), document.removeEventListener("focusout", $), window.removeEventListener("resize", x), u.value && u.value.removeEventListener("click", I);
    }), (v, p) => (t(), l("div", {
      class: "fu-status-dropdown",
      ref_key: "dropdownRef",
      ref: r
    }, [
      e.label ? (t(), l("div", Mt, _(e.label), 1)) : m("", !0),
      e.variant === "button" ? (t(), l("div", Ot, [
        n("button", {
          class: "fu-status-dropdown__button",
          onClick: b
        }, [
          e.multiple ? (t(), l("div", Ft, [
            w.value.length ? (t(!0), l(j, { key: 0 }, L(w.value, (C) => (t(), l("span", {
              key: C.value,
              class: "fu-tag"
            }, [
              C.type === "icon" ? (t(), z(D(C.icon), {
                key: 0,
                size: "14"
              })) : C.type === "image" ? (t(), l("img", {
                key: 1,
                src: C.imageUrl,
                class: "fu-option-image",
                alt: "User Image"
              }, null, 8, Vt)) : m("", !0),
              K(" " + _(C.label) + " ", 1),
              n("span", {
                class: "fu-tag__remove",
                onClick: H((E) => g(C), ["stop"])
              }, "×", 8, Tt)
            ]))), 128)) : (t(), l("span", It, _(e.placeholder), 1))
          ])) : (t(), l("div", jt, [
            F.value?.type === "icon" ? (t(), z(D(F.value.icon), {
              key: 0,
              size: "16"
            })) : F.value?.type === "image" ? (t(), l("img", {
              key: 1,
              src: F.value.imageUrl,
              class: "fu-option-image",
              alt: "User Image"
            }, null, 8, Bt)) : m("", !0),
            n("span", null, _(F.value?.label || e.placeholder), 1)
          ])),
          p[2] || (p[2] = n("svg", {
            class: "fu-status-dropdown__chevron",
            viewBox: "0 0 20 20",
            fill: "none"
          }, [
            n("path", {
              d: "M6 8l4 4 4-4",
              stroke: "currentColor",
              "stroke-width": "1.5"
            })
          ], -1))
        ])
      ])) : (t(), l("div", Et, [
        T(ce, {
          size: e.size,
          readonly: !0,
          variant: "outline",
          formWrapperWidth: e.formWrapperWidth,
          placeholder: F.value?.label || e.placeholder,
          onFocus: b,
          onClick: b
        }, null, 8, ["size", "formWrapperWidth", "placeholder"])
      ])),
      (t(), z(J, { to: "body" }, [
        T(Q, { name: "fade" }, {
          default: q(() => [
            a.value ? (t(), l("div", {
              key: 0,
              class: "fu-status-dropdown__menu",
              style: P(k.value),
              ref_key: "menuRef",
              ref: d
            }, [
              e.searchable ? (t(), l("div", At, [
                T(ce, {
                  class: "fu-search-input",
                  type: "text",
                  modelValue: i.value,
                  "onUpdate:modelValue": p[1] || (p[1] = (C) => i.value = C),
                  placeholder: e.searchPlaceholder,
                  size: e.size,
                  formWrapperWidth: "100%"
                }, {
                  right: q(() => [
                    n("button", {
                      class: "fu-search-clear",
                      onClick: p[0] || (p[0] = (C) => i.value = "")
                    }, "×")
                  ]),
                  _: 1
                }, 8, ["modelValue", "placeholder", "size"])
              ])) : m("", !0),
              h.value.length ? (t(), l("div", Lt, [
                (t(!0), l(j, null, L(h.value, (C) => (t(), l("div", {
                  key: C.value,
                  class: "fu-status-dropdown__item",
                  onClick: (E) => f(C)
                }, [
                  C.type === "icon" ? (t(), z(D(C.icon), {
                    key: 0,
                    size: "16"
                  })) : C.type === "image" ? (t(), l("img", {
                    key: 1,
                    src: C.imageUrl,
                    class: "fu-option-image",
                    alt: ""
                  }, null, 8, Pt)) : m("", !0),
                  n("span", null, _(C.label), 1)
                ], 8, Dt))), 128)),
                n("div", {
                  class: "fu-status-dropdown__slot-actions",
                  ref_key: "actionsRef",
                  ref: u
                }, [
                  V(v.$slots, "actions")
                ], 512)
              ])) : (t(), l("div", Rt, _(e.noResultsText), 1))
            ], 4)) : m("", !0)
          ]),
          _: 3
        })
      ]))
    ], 512));
  }
}), qt = /* @__PURE__ */ M(Nt, [["__scopeId", "data-v-297882b6"]]), Wt = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: qt
}, Symbol.toStringTag, { value: "Module" }));
var ee = /* @__PURE__ */ ((e) => (e[e.Offline = 0] = "Offline", e[e.Active = 1] = "Active", e[e.Away = 2] = "Away", e[e.Busy = 3] = "Busy", e[e.DoNotDisturb = 4] = "DoNotDisturb", e[e.Invisible = 5] = "Invisible", e))(ee || {});
const Ht = { class: "fu-avatar__wrapper" }, Kt = ["src", "alt"], Ut = {
  key: 1,
  class: "fu-avatar__placeholder"
}, Xt = {
  key: 0,
  class: "fu-avatar__name"
}, Yt = /* @__PURE__ */ O({
  __name: "FuAvatar",
  props: {
    src: {},
    alt: {},
    name: {},
    size: { default: "md" },
    status: {},
    showStatus: { type: Boolean, default: !0 }
  },
  emits: ["click"],
  setup(e) {
    const c = e, o = U(
      () => c.name ? c.name.split(" ").map((a) => a[0]).join("").slice(0, 2).toUpperCase() : ""
    ), s = U(() => {
      switch (c.status) {
        case ee.Active:
        case 1:
          return "fu-status-dot--active";
        case ee.Away:
        case 2:
          return "fu-status-dot--away";
        case ee.Busy:
        case 3:
          return "fu-status-dot--busy";
        case ee.DoNotDisturb:
        case 4:
          return "fu-status-dot--dnd";
        case ee.Invisible:
        case 5:
          return "fu-status-dot--invisible";
        case ee.Offline:
        case 0:
        default:
          return "fu-status-dot--offline";
      }
    });
    return (a, i) => (t(), l("div", {
      class: S(["fu-avatar", `fu-avatar--${e.size}`]),
      onClick: i[0] || (i[0] = (u) => a.$emit("click"))
    }, [
      n("div", Ht, [
        e.src ? (t(), l("img", {
          key: 0,
          src: e.src,
          alt: e.alt,
          class: "fu-avatar__image"
        }, null, 8, Kt)) : (t(), l("span", Ut, _(o.value), 1)),
        e.showStatus && e.status !== void 0 ? (t(), l("span", {
          key: 2,
          class: S(["fu-status-dot", s.value])
        }, null, 2)) : m("", !0)
      ]),
      e.name ? (t(), l("span", Xt, _(e.name), 1)) : m("", !0)
    ], 2));
  }
}), ne = /* @__PURE__ */ M(Yt, [["__scopeId", "data-v-09964ded"]]), Zt = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: ne
}, Symbol.toStringTag, { value: "Module" })), Gt = /* @__PURE__ */ O({
  __name: "FuAvatarGroup",
  props: {
    users: {},
    max: {},
    size: {}
  },
  emits: ["click"],
  setup(e) {
    const c = e, o = c.max ?? 3, s = c.users.slice(0, o), a = c.users.length - o;
    return (i, u) => (t(), l("div", {
      class: "fu-avatar-group",
      onClick: u[0] || (u[0] = (r) => i.$emit("click"))
    }, [
      (t(!0), l(j, null, L(A(s), (r, d) => (t(), z(ne, {
        key: r.id || d,
        src: r.src,
        alt: r.alt,
        size: e.size
      }, null, 8, ["src", "alt", "size"]))), 128)),
      a > 0 ? (t(), l("div", {
        key: 0,
        class: S(["fu-avatar fu-avatar--more", `fu-avatar--${e.size}`])
      }, " +" + _(a), 2)) : m("", !0)
    ]));
  }
}), Jt = /* @__PURE__ */ M(Gt, [["__scopeId", "data-v-a10ba7ff"]]), Qt = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Jt
}, Symbol.toStringTag, { value: "Module" })), eo = /* @__PURE__ */ O({
  __name: "FusionBadge",
  props: {
    text: { default: "Badge" },
    size: { default: "md" },
    variant: { default: "solid" },
    themeClass: { default: "" }
  },
  setup(e) {
    return (c, o) => (t(), l("span", {
      class: S(["fu-badge", [
        `fu-badge--${e.variant}`,
        `fu-badge--${e.size}`,
        e.themeClass
      ]])
    }, [
      V(c.$slots, "default", {}, () => [
        K(_(e.text), 1)
      ], !0)
    ], 2));
  }
}), to = /* @__PURE__ */ M(eo, [["__scopeId", "data-v-3281b175"]]), oo = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: to
}, Symbol.toStringTag, { value: "Module" })), no = {
  key: 0,
  class: "fu-spinner"
}, lo = { key: 2 }, ao = { key: 3 }, so = {
  key: 0,
  class: "fu-tooltip"
}, io = /* @__PURE__ */ O({
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
    target: { default: "_parent" }
  },
  emits: ["click"],
  setup(e) {
    return (c, o) => (t(), l("div", {
      class: S(["fu-btn-wrapper", { "has-tooltip": e.tooltip }])
    }, [
      (t(), z(D(e.link ? "a" : "button"), {
        class: S(["fu-btn", [`fu-btn--${e.variant}`, `fu-btn--${e.size}`, { "is-loading": e.loading }]]),
        href: e.link || void 0,
        target: e.link ? e.target : void 0,
        rel: e.link && e.target === "_blank" ? "noopener noreferrer" : void 0,
        disabled: !e.link && (e.disabled || e.loading),
        onClick: o[0] || (o[0] = (s) => !e.link && !e.loading ? c.$emit("click", s) : null)
      }, {
        default: q(() => [
          e.loading ? (t(), l("span", no)) : m("", !0),
          e.icon ? (t(), z(D(e.icon), {
            key: 1,
            class: "fu-btn-icon",
            size: 16
          })) : m("", !0),
          e.loading ? (t(), l("span", lo, _(e.loadingText || "Loading..."), 1)) : (t(), l("span", ao, [
            V(c.$slots, "default", {}, () => [
              K(_(e.text), 1)
            ], !0)
          ]))
        ]),
        _: 3
      }, 8, ["class", "href", "target", "rel", "disabled"])),
      e.tooltip ? (t(), l("span", so, _(e.tooltip), 1)) : m("", !0)
    ], 2));
  }
}), uo = /* @__PURE__ */ M(io, [["__scopeId", "data-v-205aac7e"]]), co = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: uo
}, Symbol.toStringTag, { value: "Module" })), ro = {
  key: 0,
  class: "icon-box"
}, fo = { class: "content" }, vo = { class: "value" }, mo = { class: "subtitle" }, _o = {
  key: 0,
  class: "caption"
}, po = { class: "title" }, bo = { class: "value" }, ho = {
  key: 0,
  class: "caption"
}, yo = /* @__PURE__ */ O({
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
    return (c, o) => (t(), l("div", {
      class: S(["fu-stat-card", [`variant-${e.variant}`, e.bordered ? "bordered" : "", e.shadow ? "shadow" : ""]])
    }, [
      e.variant === "icon-left" ? (t(), l(j, { key: 0 }, [
        e.icon ? (t(), l("div", ro, [
          (t(), z(D(e.icon), { class: "fu-icon" }))
        ])) : m("", !0),
        n("div", fo, [
          n("div", vo, _(e.value), 1),
          n("div", mo, _(e.title), 1),
          e.subtitle ? (t(), l("div", _o, _(e.subtitle), 1)) : m("", !0)
        ])
      ], 64)) : (t(), l(j, { key: 1 }, [
        n("div", po, _(e.title), 1),
        n("div", bo, _(e.value), 1),
        e.subtitle ? (t(), l("div", ho, _(e.subtitle), 1)) : m("", !0)
      ], 64))
    ], 2));
  }
}), go = /* @__PURE__ */ M(yo, [["__scopeId", "data-v-a52997b8"]]), ko = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: go
}, Symbol.toStringTag, { value: "Module" })), wo = ["for"], $o = ["id", "checked", "disabled"], Co = {
  key: 0,
  class: "fu-checkbox__label"
}, xo = /* @__PURE__ */ O({
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
    return (c, o) => (t(), l("label", {
      class: S(["fu-checkbox", [`fu-checkbox--${e.size}`, { "fu-checkbox--disabled": e.disabled }]]),
      for: e.id
    }, [
      n("input", {
        type: "checkbox",
        class: "fu-checkbox__input",
        id: e.id,
        checked: e.modelValue,
        disabled: e.disabled,
        onChange: o[0] || (o[0] = (s) => c.$emit("update:modelValue", s.target.checked))
      }, null, 40, $o),
      o[1] || (o[1] = n("span", { class: "fu-checkbox__box" }, null, -1)),
      e.label ? (t(), l("span", Co, _(e.label), 1)) : m("", !0)
    ], 10, wo));
  }
}), So = /* @__PURE__ */ M(xo, [["__scopeId", "data-v-0753ce68"]]), zo = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: So
}, Symbol.toStringTag, { value: "Module" })), Mo = {
  key: 0,
  class: "fu-input-label"
}, Oo = {
  key: 0,
  class: "fu-input-required"
}, Fo = ["onUpdate:modelValue", "onInput", "onKeydown", "disabled"], Vo = {
  key: 1,
  class: "fu-input-error"
}, To = /* @__PURE__ */ O({
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
  setup(e, { emit: c }) {
    const o = e, s = c, a = y(Array(o.length).fill("")), i = y([]);
    N(
      () => o.modelValue,
      (d) => {
        d && d.length === o.length && (a.value = d.split(""));
      }
    ), N(a, () => {
      s("update:modelValue", a.value.join(""));
    });
    function u(d, k) {
      const F = k.target.value.replace(/\D/g, "");
      a.value[d] = F, F && d < o.length - 1 && Z(() => i.value[d + 1]?.focus());
    }
    function r(d) {
      !a.value[d] && d > 0 && Z(() => i.value[d - 1]?.focus());
    }
    return (d, k) => (t(), l("div", {
      class: "fu-input-wrapper",
      style: P({ width: e.formWrapperWidth })
    }, [
      e.label ? (t(), l("label", Mo, [
        K(_(e.label) + " ", 1),
        e.required ? (t(), l("span", Oo, "*")) : m("", !0)
      ])) : m("", !0),
      n("div", {
        class: S(["fu-code-container", [
          `fu-input--${e.size}`,
          `fu-input--${e.variant}`,
          { "fu-input--error": e.error }
        ]])
      }, [
        (t(!0), l(j, null, L(a.value, (F, w) => G((t(), l("input", {
          key: w,
          ref_for: !0,
          ref_key: "inputs",
          ref: i,
          type: "text",
          maxlength: "1",
          inputmode: "numeric",
          pattern: "[0-9]*",
          class: "fu-code-box fu-input-container",
          "onUpdate:modelValue": (b) => a.value[w] = b,
          onInput: (b) => u(w, b),
          onKeydown: Se((b) => r(w), ["backspace"]),
          disabled: e.disabled
        }, null, 40, Fo)), [
          [ze, a.value[w]]
        ])), 128))
      ], 2),
      e.error ? (t(), l("span", Vo, _(e.error), 1)) : m("", !0)
    ], 4));
  }
}), Io = /* @__PURE__ */ M(To, [["__scopeId", "data-v-8a5c5958"]]), jo = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Io
}, Symbol.toStringTag, { value: "Module" })), Bo = /* @__PURE__ */ O({
  __name: "FusionColour",
  props: {
    modelValue: {}
  },
  emits: ["update:modelValue", "change"],
  setup(e, { emit: c }) {
    const o = e, s = c, a = y(!1), i = y(o.modelValue || "#000000"), u = y(null), r = y(null), d = y({ top: 0, left: 0 }), k = U(() => ({
      top: d.value.top + "px",
      left: d.value.left + "px"
    }));
    function F() {
      if (a.value) {
        a.value = !1;
        return;
      }
      Z(() => {
        if (u.value) {
          const f = u.value.getBoundingClientRect();
          d.value = {
            top: f.bottom + window.scrollY + 6,
            left: f.left + window.scrollX
          }, a.value = !0;
        }
      });
    }
    N(
      () => o.modelValue,
      (f) => {
        f && f !== i.value && (i.value = f);
      }
    );
    function w(f) {
      s("update:modelValue", f), s("change", f);
    }
    function b(f) {
      a.value && r.value && !r.value.contains(f.target) && !u.value?.contains(f.target) && (a.value = !1);
    }
    return W(() => document.addEventListener("click", b)), Y(() => document.removeEventListener("click", b)), (f, g) => (t(), l("div", {
      class: "fu-color-popover-wrapper",
      ref_key: "triggerRef",
      ref: u
    }, [
      V(f.$slots, "trigger", { open: F }, void 0, !0),
      (t(), z(J, { to: "body" }, [
        T(Q, { name: "fade" }, {
          default: q(() => [
            a.value ? (t(), l("div", {
              key: 0,
              class: "fu-color-popover",
              style: P(k.value),
              ref_key: "popoverRef",
              ref: r,
              onClick: g[1] || (g[1] = H(() => {
              }, ["stop"]))
            }, [
              T(Ve, {
                modelValue: i.value,
                "onUpdate:modelValue": g[0] || (g[0] = (h) => i.value = h),
                onChange: w
              }, null, 8, ["modelValue"])
            ], 4)) : m("", !0)
          ]),
          _: 1
        })
      ]))
    ], 512));
  }
}), Ve = /* @__PURE__ */ M(Bo, [["__scopeId", "data-v-3e7d92b3"]]), Eo = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Ve
}, Symbol.toStringTag, { value: "Module" })), Ao = { class: "fu-combobox__control" }, Lo = ["value", "placeholder", "disabled"], Do = {
  key: 0,
  class: "fu-combobox__dropdown scrollbar__control customScrollBar"
}, Po = { class: "fu-combobox__group-title" }, Ro = ["onClick"], No = { class: "fu-combobox__option-left" }, qo = { class: "fu-combobox__option-right" }, Wo = {
  key: 1,
  class: "fu-combobox__empty"
}, Ho = /* @__PURE__ */ O({
  __name: "FuCombobox",
  props: {
    options: {},
    modelValue: {},
    placeholder: {},
    disabled: { type: Boolean }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: c }) {
    const o = e, s = c, a = y(!1), i = y(""), u = y(null), r = y(null), d = U(() => {
      if (!i.value || u.value && i.value.toLowerCase() === u.value.label.toLowerCase())
        return k(o.options);
      const g = o.options.filter(
        (h) => h.label.toLowerCase().includes(i.value.toLowerCase())
      );
      return k(g);
    });
    function k(g) {
      const h = {};
      return g.forEach((I) => {
        const $ = I.group || "Options";
        h[$] || (h[$] = []), h[$].push(I);
      }), Object.entries(h).map(([I, $]) => ({ title: I, items: $ }));
    }
    N(
      () => o.modelValue,
      (g) => {
        u.value = o.options.find((h) => h.value === g) || null, !a.value && u.value && (i.value = u.value.label);
      },
      { immediate: !0 }
    );
    function F(g) {
      i.value = g.target.value;
    }
    function w(g) {
      u.value = g, i.value = g.label, s("update:modelValue", g.value), a.value = !1;
    }
    function b() {
      a.value = !a.value;
    }
    function f(g) {
      r.value && !r.value.contains(g.target) && (a.value = !1, u.value && (i.value = u.value.label));
    }
    return W(() => {
      document.addEventListener("click", f);
    }), Y(() => {
      document.removeEventListener("click", f);
    }), (g, h) => (t(), l("div", {
      class: S(["fu-combobox", { "fu-combobox--disabled": e.disabled }]),
      ref_key: "comboboxRef",
      ref: r
    }, [
      n("div", Ao, [
        n("input", {
          type: "text",
          value: a.value ? i.value : u.value?.label || "",
          placeholder: e.placeholder,
          class: "fu-combobox__input",
          disabled: e.disabled,
          onInput: F,
          onFocus: h[0] || (h[0] = (I) => !e.disabled && (a.value = !0))
        }, null, 40, Lo),
        n("span", {
          class: "fu-combobox__icon",
          onClick: H(b, ["stop"])
        }, [
          T(A(fe), {
            size: 18,
            "stroke-width": 1
          })
        ])
      ]),
      a.value && !e.disabled ? (t(), l("div", Do, [
        d.value.length > 0 ? (t(!0), l(j, { key: 0 }, L(d.value, (I) => (t(), l("div", {
          key: I.title,
          class: "fu-combobox__group"
        }, [
          n("div", Po, _(I.title), 1),
          (t(!0), l(j, null, L(I.items, ($) => (t(), l("div", {
            key: $.value,
            class: S(["fu-combobox__option", {
              "fu-combobox__option--selected": $.value === u.value?.value
            }]),
            onClick: (B) => w($)
          }, [
            n("div", No, [
              V(g.$slots, "option", { option: $ }, () => [
                $.icon ? (t(), z(D($.icon), {
                  key: 0,
                  class: "fu-combobox__option-icon"
                })) : m("", !0),
                n("span", null, _($.label), 1)
              ], !0)
            ]),
            n("div", qo, [
              $.value === u.value?.value ? (t(), z(A(Oe), {
                key: 0,
                class: "fu-combobox__check"
              })) : m("", !0)
            ])
          ], 10, Ro))), 128))
        ]))), 128)) : (t(), l("div", Wo, "No results found"))
      ])) : m("", !0)
    ], 2));
  }
}), Ko = /* @__PURE__ */ M(Ho, [["__scopeId", "data-v-8ca05e69"]]), Uo = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Ko
}, Symbol.toStringTag, { value: "Module" })), Xo = {
  key: 0,
  class: "fu-drawer"
}, Yo = { class: "fu-drawer__header-content" }, Zo = {
  key: 0,
  class: "fu-drawer__header-actions"
}, Go = { class: "fu-drawer__body" }, Jo = /* @__PURE__ */ O({
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
  setup(e, { emit: c }) {
    const o = e, s = c;
    function a(i) {
      i.key === "Escape" && o.open && s("close");
    }
    return W(() => window.addEventListener("keydown", a)), Y(() => window.removeEventListener("keydown", a)), (i, u) => (t(), z(Q, { name: "drawer-fade" }, {
      default: q(() => [
        e.open ? (t(), l("div", Xo, [
          n("div", {
            class: "fu-drawer__backdrop",
            onClick: u[0] || (u[0] = (r) => i.$emit("close"))
          }),
          n("div", {
            class: S(["fu-drawer__panel", [
              `fu-drawer__panel--${e.position}`,
              `fu-drawer__panel--${e.size}`,
              { "fu-drawer__panel--with-controls": e.showControls }
            ]])
          }, [
            i.$slots.header || e.showControls ? (t(), l("div", {
              key: 0,
              class: S(["fu-drawer__header", { "border-bottom-0": e.hideHeaderBorder }])
            }, [
              n("div", Yo, [
                V(i.$slots, "header", {}, void 0, !0)
              ]),
              e.showControls ? (t(), l("div", Zo, [
                T(oe, {
                  size: "sm",
                  variant: "subtle",
                  icon: A(ve),
                  onClick: u[1] || (u[1] = (r) => i.$emit("close"))
                }, null, 8, ["icon"])
              ])) : m("", !0)
            ], 2)) : m("", !0),
            n("div", Go, [
              V(i.$slots, "default", { class: "slot-body" }, void 0, !0)
            ]),
            n("div", {
              class: S(["fu-drawer__nav", [
                e.position === "right" ? "fu-drawer__nav--left" : "",
                e.position === "left" ? "fu-drawer__nav--right" : "",
                e.position === "bottom" ? "fu-drawer__nav--center" : ""
              ]])
            }, [
              e.canPrev ? (t(), z(oe, {
                key: 0,
                size: "sm",
                variant: "subtle",
                icon: A(We),
                onClick: u[2] || (u[2] = (r) => i.$emit("prev"))
              }, null, 8, ["icon"])) : m("", !0),
              e.canNext ? (t(), z(oe, {
                key: 1,
                size: "sm",
                variant: "subtle",
                icon: A(fe),
                onClick: u[3] || (u[3] = (r) => i.$emit("next"))
              }, null, 8, ["icon"])) : m("", !0)
            ], 2)
          ], 2)
        ])) : m("", !0)
      ]),
      _: 3
    }));
  }
}), Qo = /* @__PURE__ */ M(Jo, [["__scopeId", "data-v-3d4f1a2c"]]), en = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Qo
}, Symbol.toStringTag, { value: "Module" })), tn = ["onClick"], on = /* @__PURE__ */ O({
  __name: "FusionDropdownButton",
  props: {
    buttonText: {},
    buttonIcon: {},
    actions: {},
    align: { default: "right" }
  },
  setup(e) {
    const c = y(!1), o = y(null), s = () => {
      c.value = !c.value;
    }, a = (u) => {
      u.onClick?.(), c.value = !1;
    }, i = (u) => {
      o.value && !o.value.contains(u.target) && (c.value = !1);
    };
    return W(() => {
      document.addEventListener("click", i);
    }), Y(() => {
      document.removeEventListener("click", i);
    }), (u, r) => (t(), l("div", {
      class: "fu-dropdown",
      ref_key: "dropdown",
      ref: o
    }, [
      n("button", {
        class: "fu-dropdown__button",
        onClick: s
      }, [
        K(_(e.buttonText) + " ", 1),
        e.buttonIcon ? (t(), z(D(e.buttonIcon), {
          key: 0,
          class: "fu-dropdown__icon"
        })) : m("", !0)
      ]),
      n("ul", {
        class: S(["fu-dropdown__menu", [{ show: c.value }, `fu-dropdown__menu--${e.align}`]])
      }, [
        (t(!0), l(j, null, L(e.actions, (d) => (t(), l("li", {
          key: d.label
        }, [
          n("a", {
            class: "fu-dropdown__item",
            onClick: (k) => a(d)
          }, [
            d.icon ? (t(), z(D(d.icon), {
              key: 0,
              class: "fu-dropdown__icon"
            })) : m("", !0),
            K(" " + _(d.label), 1)
          ], 8, tn)
        ]))), 128))
      ], 2)
    ], 512));
  }
}), nn = /* @__PURE__ */ M(on, [["__scopeId", "data-v-feab6d60"]]), ln = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: nn
}, Symbol.toStringTag, { value: "Module" })), an = { class: "fu-dropdown-inline__wrapper" }, sn = ["value", "placeholder"], un = ["onMousedown"], cn = /* @__PURE__ */ O({
  __name: "FusionDropdownInline",
  props: {
    modelValue: {},
    options: {},
    placeholder: {},
    isOpen: { type: Boolean }
  },
  emits: ["update:modelValue", "open", "close"],
  setup(e, { emit: c }) {
    const o = e, s = c, a = y(null), i = y(null), u = y(o.modelValue || null), r = y(!1), d = y({});
    N(
      () => o.modelValue,
      (f) => u.value = f
    ), N(
      () => o.isOpen,
      (f) => {
        r.value = !!f, f && b();
      }
    );
    function k() {
      r.value || s("open"), r.value = !0, b();
    }
    function F(f) {
      u.value = f, s("update:modelValue", f), s("close"), r.value = !1, i.value?.blur();
    }
    function w(f) {
      a.value && !a.value.contains(f.target) && (r.value && s("close"), r.value = !1);
    }
    function b() {
      const f = a.value;
      if (!f) return;
      const g = f.getBoundingClientRect();
      d.value = {
        position: "absolute",
        top: `${g.bottom + 4}px`,
        left: `${g.left}px`,
        width: `${g.width}px`,
        zIndex: "9999"
      };
    }
    return W(() => {
      window.addEventListener("click", w), window.addEventListener("resize", b);
    }), Y(() => {
      window.removeEventListener("click", w), window.removeEventListener("resize", b);
    }), (f, g) => (t(), l("div", {
      class: "fu-dropdown-inline",
      ref_key: "inlineRef",
      ref: a
    }, [
      n("div", an, [
        u.value ? (t(), l("span", {
          key: 0,
          class: "fu-dropdown-inline__dot",
          style: P({ backgroundColor: u.value.color })
        }, null, 4)) : m("", !0),
        n("input", {
          ref_key: "inputRef",
          ref: i,
          type: "text",
          class: "fu-dropdown-inline__input",
          value: u.value?.label || "",
          placeholder: e.placeholder,
          readonly: "",
          onFocus: k
        }, null, 40, sn)
      ]),
      (t(), z(J, { to: "body" }, [
        r.value ? (t(), l("ul", {
          key: 0,
          class: "fu-dropdown-inline__menu",
          style: P(d.value)
        }, [
          (t(!0), l(j, null, L(e.options, (h) => (t(), l("li", {
            key: h.label,
            class: "fu-dropdown-inline__item",
            onMousedown: H((I) => F(h), ["prevent"])
          }, [
            n("span", {
              class: "fu-dropdown-inline__dot",
              style: P({ backgroundColor: h.color })
            }, null, 4),
            K(" " + _(h.label), 1)
          ], 40, un))), 128))
        ], 4)) : m("", !0)
      ]))
    ], 512));
  }
}), dn = /* @__PURE__ */ M(cn, [["__scopeId", "data-v-2181a04e"]]), rn = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: dn
}, Symbol.toStringTag, { value: "Module" })), fn = {
  key: 0,
  class: "content"
}, vn = ["onClick"], mn = /* @__PURE__ */ O({
  __name: "DropdownMenu",
  props: {
    actions: {},
    align: { default: "right" },
    content: { type: Boolean, default: !1 },
    isOpen: { type: Boolean, default: void 0 },
    closeOnSelect: { type: Boolean, default: !1 }
  },
  emits: ["open", "close", "update:isOpen"],
  setup(e, { emit: c }) {
    const o = c, s = e, a = y(!1), i = y(null), u = y({
      top: "0px",
      left: "0px"
    });
    N(
      () => s.isOpen,
      (b) => {
        typeof b == "boolean" && (a.value = b);
      }
    );
    function r() {
      if (!a.value || !i.value) return;
      const b = i.value.getBoundingClientRect(), f = b.bottom + window.scrollY + 6;
      let g = b.left + window.scrollX;
      s.align === "center" ? (g += b.width / 2, u.value.transform = "translateX(-50%)") : s.align === "right" ? (g = b.right + window.scrollX, u.value.transform = "translateX(-100%)") : u.value.transform = "", u.value = {
        top: `${f}px`,
        left: `${g}px`,
        position: "absolute",
        zIndex: "2000",
        transform: u.value.transform
      };
    }
    function d(b) {
      b?.stopPropagation(), a.value = !a.value, o(a.value ? "open" : "close"), o("update:isOpen", a.value), a.value && r();
    }
    function k(b) {
      b.onClick?.(), s.closeOnSelect && (a.value = !1, o("close"), o("update:isOpen", !1));
    }
    function F(b) {
      a.value && i.value && !i.value.contains(b.target) && (a.value = !1, o("close"), o("update:isOpen", !1));
    }
    function w() {
      a.value && (a.value = !1, o("close"), o("update:isOpen", !1));
    }
    return W(() => {
      document.addEventListener("click", F), window.addEventListener("resize", w);
    }), Y(() => {
      document.removeEventListener("click", F), window.removeEventListener("resize", w);
    }), (b, f) => (t(), l("div", {
      class: "fu-dropdown",
      ref_key: "dropdown",
      ref: i
    }, [
      n("div", {
        class: "fu-dropdown__trigger",
        onClick: d
      }, [
        V(b.$slots, "trigger", {}, void 0, !0)
      ]),
      (t(), z(J, { to: "body" }, [
        T(Q, { name: "fade" }, {
          default: q(() => [
            a.value ? (t(), l("div", {
              key: 0,
              class: S(["fu-dropdown__menu", [`fu-dropdown__menu--${e.align}`]]),
              style: P(u.value)
            }, [
              e.content ? (t(), l("div", fn, [
                V(b.$slots, "content", {}, void 0, !0)
              ])) : m("", !0),
              (t(!0), l(j, null, L(e.actions, (g) => (t(), l("div", {
                key: g.label
              }, [
                n("a", {
                  class: "fu-dropdown__item",
                  onClick: (h) => k(g)
                }, [
                  g.icon ? (t(), z(D(g.icon), {
                    key: 0,
                    class: "fu-dropdown__icon"
                  })) : m("", !0),
                  K(" " + _(g.label), 1)
                ], 8, vn)
              ]))), 128))
            ], 6)) : m("", !0)
          ]),
          _: 3
        })
      ]))
    ], 512));
  }
}), me = /* @__PURE__ */ M(mn, [["__scopeId", "data-v-0addccc5"]]), _n = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: me
}, Symbol.toStringTag, { value: "Module" })), pn = { class: "fu-upload__content" }, bn = {
  key: 0,
  class: "fu-upload__previews"
}, hn = ["src"], yn = {
  key: 1,
  class: "fu-upload__file-fallback"
}, gn = {
  key: 1,
  class: "fu-upload__prompt"
}, kn = ["multiple", "accept"], wn = /* @__PURE__ */ O({
  __name: "FusionUpload",
  props: {
    multiple: { type: Boolean, default: !1 },
    accept: { type: String, default: "*" }
  },
  emits: ["filesSelected"],
  setup(e, { emit: c }) {
    const o = y(!1), s = y([]), a = y(null), i = c;
    function u() {
      a.value?.click();
    }
    function r(w) {
      const b = w.target;
      b.files?.length && (i("filesSelected", b.files), k(b.files));
    }
    function d(w) {
      o.value = !1;
      const b = w.dataTransfer?.files;
      b?.length && (i("filesSelected", b), k(b));
    }
    function k(w) {
      s.value = [], Array.from(w).forEach((b) => {
        if (b.type.startsWith("image/")) {
          const f = new FileReader();
          f.onload = (g) => {
            typeof g.target?.result == "string" && s.value.push(g.target.result);
          }, f.readAsDataURL(b);
        } else
          s.value.push("non-image");
      });
    }
    function F(w) {
      return w.startsWith("data:image") || w.startsWith("http");
    }
    return (w, b) => (t(), l("div", {
      class: S(["fu-upload", { dragging: o.value }]),
      onClick: u,
      onDragover: b[0] || (b[0] = H((f) => o.value = !0, ["prevent"])),
      onDragleave: b[1] || (b[1] = H((f) => o.value = !1, ["prevent"])),
      onDrop: H(d, ["prevent"])
    }, [
      n("div", pn, [
        s.value.length ? (t(), l("div", bn, [
          (t(!0), l(j, null, L(s.value, (f, g) => (t(), l("div", {
            key: g,
            class: "fu-upload__preview-item"
          }, [
            F(f) ? (t(), l("img", {
              key: 0,
              src: f,
              class: "fu-upload__preview-img",
              alt: "Preview"
            }, null, 8, hn)) : (t(), l("div", yn, [
              T(A(ye), { size: 20 }),
              n("span", null, "File " + _(g + 1), 1)
            ]))
          ]))), 128))
        ])) : (t(), l("div", gn, [
          T(A(ye), {
            class: "fu-upload__icon",
            size: 22
          }),
          V(w.$slots, "description", {}, () => [
            b[2] || (b[2] = n("p", { class: "fu-upload__text" }, "Drag & drop files or click to browse", -1))
          ], !0)
        ])),
        n("input", {
          ref_key: "fileInput",
          ref: a,
          type: "file",
          class: "fu-upload__input",
          multiple: e.multiple,
          accept: e.accept,
          onChange: r
        }, null, 40, kn)
      ])
    ], 34));
  }
}), $n = /* @__PURE__ */ M(wn, [["__scopeId", "data-v-49e0100b"]]), Cn = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: $n
}, Symbol.toStringTag, { value: "Module" })), xn = {}, Sn = { class: "fu-smart-header" };
function zn(e, c) {
  return t(), l("header", Sn, [
    V(e.$slots, "default", {}, void 0, !0)
  ]);
}
const Mn = /* @__PURE__ */ M(xn, [["render", zn], ["__scopeId", "data-v-317a0cd5"]]), On = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Mn
}, Symbol.toStringTag, { value: "Module" })), Fn = { class: "fu-activity-item" }, Vn = { class: "fu-activity-icon" }, Tn = { class: "fu-activity-content" }, In = { class: "fu-activity-card" }, jn = { class: "fu-activity-header" }, Bn = { class: "fu-activity-title" }, En = { class: "fu-activity-status" }, An = { class: "fu-activity-text" }, Ln = { class: "fu-activity-subtitle" }, Dn = { class: "fu-activity-footer" }, Pn = { class: "fu-activity-timestamp" }, Rn = { class: "fu-activity-user" }, Nn = /* @__PURE__ */ O({
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
    return (c, o) => (t(), l("div", Fn, [
      n("div", Vn, [
        (t(), z(D(e.icon), {
          class: "fu-activity-icon__svg",
          size: 18
        }))
      ]),
      o[0] || (o[0] = n("div", { class: "fu-activity-line" }, null, -1)),
      n("div", Tn, [
        n("div", In, [
          n("div", jn, [
            n("div", Bn, [
              n("span", En, [
                T(A(He), {
                  class: "fu-activity-status__icon",
                  size: 16
                })
              ]),
              n("p", An, _(e.title), 1)
            ])
          ]),
          n("p", Ln, _(e.fileName), 1),
          n("div", Dn, [
            n("span", Pn, _(e.timestamp), 1),
            n("div", Rn, [
              T(ne, {
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
}), qn = /* @__PURE__ */ M(Nn, [["__scopeId", "data-v-cefa8c96"]]), Wn = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: qn
}, Symbol.toStringTag, { value: "Module" })), Hn = { class: "fu-attachment-left flex flex--gap-md flex--align-center" }, Kn = { class: "fu-attachment-preview" }, Un = ["src", "alt"], Xn = { class: "fu-attachment-info flex flex--column" }, Yn = { class: "fu-attachment-title" }, Zn = { class: "fu-attachment-meta" }, Gn = { class: "fu-attachment-right flex flex--column flex--align-center flex--gap-md" }, Jn = { class: "fu-attachment-time" }, Qn = /* @__PURE__ */ O({
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
  setup(e, { emit: c }) {
    const o = e, s = c;
    function a() {
      s("click", o.id);
    }
    const i = U(() => /\.(png|jpe?g|gif|webp|svg)$/i.test(o.fileName)), u = U(() => /\.(mp4|mov|avi|webm)$/i.test(o.fileName));
    return (r, d) => (t(), l("div", {
      class: "fu-attachment-item",
      role: "button",
      tabindex: "0",
      onClick: a,
      onKeypress: Se(a, ["enter"])
    }, [
      n("div", Hn, [
        n("div", Kn, [
          i.value ? (t(), l("img", {
            key: 0,
            src: e.fileUrl,
            alt: e.fileName,
            class: "fu-attachment-thumbnail"
          }, null, 8, Un)) : u.value ? (t(), z(A(tt), {
            key: 1,
            class: "fu-attachment-icon",
            size: 20
          })) : (t(), z(A(Ze), {
            key: 2,
            class: "fu-attachment-icon",
            size: 20
          }))
        ]),
        n("div", Xn, [
          n("span", Yn, _(e.fileName), 1),
          n("span", Zn, _(e.fileSize), 1)
        ])
      ]),
      n("div", Gn, [
        T(ne, {
          src: e.userAvatar || void 0,
          name: e.userName,
          alt: e.userName,
          size: "xs",
          "show-status": !1
        }, null, 8, ["src", "name", "alt"]),
        n("span", Jn, _(e.timestamp), 1)
      ])
    ], 32));
  }
}), el = /* @__PURE__ */ M(Qn, [["__scopeId", "data-v-3301bbcd"]]), tl = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: el
}, Symbol.toStringTag, { value: "Module" })), ol = { class: "fu-note-header" }, nl = { class: "fu-note-title" }, ll = ["innerHTML"], al = { class: "fu-note-actions" }, sl = { class: "fu-note-footer" }, il = { class: "fu-note-owner" }, ul = { class: "fu-note-date" }, cl = /* @__PURE__ */ O({
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
    const c = y(!1);
    return (o, s) => (t(), l("div", {
      class: "fu-note-card",
      onMouseenter: s[0] || (s[0] = (a) => c.value = !0),
      onMouseleave: s[1] || (s[1] = (a) => c.value = !1),
      onClick: s[2] || (s[2] = (a) => o.$emit("open", e.id))
    }, [
      n("div", ol, [
        n("div", nl, [
          n("h4", null, _(e.title), 1),
          e.content ? (t(), l("div", {
            key: 0,
            class: "fu-note-content",
            innerHTML: e.content
          }, null, 8, ll)) : m("", !0)
        ]),
        n("div", al, [
          T(me, {
            actions: e.actions,
            align: "right"
          }, {
            trigger: q(() => [
              T(oe, {
                icon: A(Fe),
                variant: "ghost",
                size: "sm",
                class: "fu-action-trigger"
              }, null, 8, ["icon"])
            ]),
            _: 1
          }, 8, ["actions"])
        ])
      ]),
      n("div", sl, [
        n("div", il, [
          T(ne, {
            src: e.ownerAvatar || void 0,
            name: e.ownerName,
            alt: e.ownerName,
            size: "xs",
            "show-status": !1
          }, null, 8, ["src", "name", "alt"])
        ]),
        n("span", ul, _(e.date), 1)
      ])
    ], 32));
  }
}), dl = /* @__PURE__ */ M(cl, [["__scopeId", "data-v-eb334bae"]]), rl = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: dl
}, Symbol.toStringTag, { value: "Module" })), fl = { class: "fu-task-list" }, vl = { class: "fu-task-left flex flex--gap-xl flex--align-center" }, ml = { class: "flex flex--column flex--gap-lg w-100" }, _l = { class: "fu-task-title" }, pl = { class: "fu-task-meta" }, bl = { class: "fu-task-priority" }, hl = { class: "fu-priority-label" }, yl = { class: "fu-task-owner" }, gl = { class: "fu-task-actions" }, kl = /* @__PURE__ */ O({
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
  setup(e, { emit: c }) {
    const o = e, s = c, a = U(() => [
      {
        label: "Edit Task",
        icon: Qe,
        onClick: () => s("edit", o.id)
      },
      {
        label: "Delete Task",
        icon: et,
        onClick: () => s("delete", o.id)
      }
    ]);
    return (i, u) => (t(), l("div", fl, [
      n("div", vl, [
        n("div", ml, [
          n("div", _l, _(e.title), 1),
          n("div", pl, [
            n("div", bl, [
              n("span", {
                class: "fu-priority-dot",
                style: P({ backgroundColor: e.priorityColor || "#999" })
              }, null, 4),
              n("span", hl, _(e.priorityLabel), 1)
            ]),
            u[0] || (u[0] = n("span", { class: "fu-dot" }, null, -1)),
            n("div", yl, [
              T(ne, {
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
      n("div", gl, [
        T(me, {
          actions: a.value,
          content: !1,
          align: "right"
        }, {
          trigger: q(() => [
            T(oe, {
              icon: A(Fe),
              variant: "subtle",
              size: "sm"
            }, null, 8, ["icon"])
          ]),
          _: 1
        }, 8, ["actions"])
      ])
    ]));
  }
}), wl = /* @__PURE__ */ M(kl, [["__scopeId", "data-v-36cc95a2"]]), $l = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: wl
}, Symbol.toStringTag, { value: "Module" })), Cl = { class: "fu-kanban scrollbar__control customScrollBar" }, xl = ["draggable", "onDragstart", "onDrop"], Sl = { class: "fu-kanban__column-header" }, zl = { class: "flex flex--center flex--space" }, Ml = { class: "fu-kanban__column-title" }, Ol = ["title"], Fl = { class: "fu-kanban__header-right" }, Vl = ["title", "onClick"], Tl = { class: "flex flex--center flex--gap-sm" }, Il = { class: "fu-kanban__count" }, jl = {
  key: 0,
  class: "fu-kanban__edit-body"
}, Bl = ["onDragover", "onDrop"], El = ["onDragstart", "onDrop", "onClick"], Al = { class: "fu-kanban__card-header" }, Ll = { class: "fu-kanban__card-body" }, Dl = {
  key: 0,
  class: "fu-kanban__empty"
}, Pl = ["onClick"], Rl = /* @__PURE__ */ O({
  __name: "Kanban",
  props: {
    columns: {},
    editMode: { type: Boolean },
    addItemButtonText: {},
    addColumnButtonText: {},
    noItemtext: {}
  },
  emits: ["update:columns", "update:items", "card-click", "add-item"],
  setup(e, { emit: c }) {
    const o = e, s = c, a = o.addItemButtonText || "+ Add Item", i = o.addColumnButtonText || "+ Add Stage", u = y(JSON.parse(JSON.stringify(o.columns || []))), r = y(null), d = y(null), k = y(null);
    N(
      () => o.columns,
      (x) => {
        u.value = JSON.parse(JSON.stringify(x));
      },
      { deep: !0 }
    );
    function F(x, v) {
      r.value = { fromColumnId: x, item: v };
    }
    function w(x) {
      k.value = x;
    }
    function b() {
      k.value = null;
    }
    function f(x, v) {
      const p = r.value;
      if (!p) return;
      const C = u.value.find((X) => X.id === p.fromColumnId), E = u.value.find((X) => X.id === x);
      !C || !E || (C.items = C.items.filter((X) => X.id !== p.item.id), v === null ? E.items.push(p.item) : E.items.splice(v, 0, p.item), s("update:items", u.value), r.value = null, k.value = null);
    }
    function g(x) {
      o.editMode && (d.value = x);
    }
    function h(x) {
      if (!o.editMode) return;
      const v = d.value;
      if (v === null || v === x) return;
      const p = [...u.value], [C] = p.splice(v, 1);
      p.splice(x, 0, C), u.value = p.map((E, X) => ({ ...E, position: X + 1 })), s("update:columns", u.value), d.value = null;
    }
    function I() {
      const x = {
        id: `col-${u.value.length + 1}`,
        title: `Stage ${u.value.length + 1}`,
        color: "#8B5CF6",
        position: u.value.length + 1,
        items: []
      };
      u.value.push(x), s("update:columns", u.value);
    }
    function $(x, v) {
      s("add-item", { column: x, index: v });
    }
    function B(x, v) {
      s("card-click", { id: x.id, item: x, column: v });
    }
    return (x, v) => (t(), l("div", Cl, [
      n("div", {
        class: "fu-kanban__columns",
        onDragover: v[1] || (v[1] = H(() => {
        }, ["prevent"]))
      }, [
        (t(!0), l(j, null, L(u.value, (p, C) => (t(), l("div", {
          key: p.id,
          class: S(["fu-kanban__column", { "fu-kanban__column--drag": e.editMode }]),
          draggable: e.editMode,
          onDragstart: (E) => g(C),
          onDrop: (E) => h(C),
          onDragover: v[0] || (v[0] = H(() => {
          }, ["prevent"]))
        }, [
          n("header", Sl, [
            n("div", zl, [
              n("div", Ml, [
                n("span", {
                  class: "fu-kanban__dot",
                  style: P({ background: p.color || "#9ca3af" })
                }, null, 4),
                n("span", {
                  class: "fu-kanban__column-name",
                  title: p.title
                }, _(p.title), 9, Ol)
              ]),
              n("div", Fl, [
                n("button", {
                  class: "fu-kanban__add-item-btn",
                  title: A(a),
                  onClick: H((E) => $(p, C), ["stop"])
                }, " + ", 8, Vl)
              ])
            ]),
            n("div", Tl, [
              V(x.$slots, "column-header", {}, void 0, !0),
              n("span", Il, _(p.items.length), 1)
            ])
          ]),
          e.editMode ? (t(), l("div", jl, [
            V(x.$slots, "edit-column", {
              column: p,
              index: C
            }, void 0, !0)
          ])) : (t(), l(j, { key: 1 }, [
            n("div", {
              class: S(["fu-kanban__cards scrollbar__control customScrollBar", { "fu-kanban__cards--hover": k.value === p.id }]),
              onDragover: H((E) => w(p.id), ["prevent"]),
              onDragleave: b,
              onDrop: (E) => f(p.id, null)
            }, [
              (t(!0), l(j, null, L(p.items, (E, X) => (t(), l("div", {
                key: E.id,
                class: "fu-kanban__card",
                draggable: "true",
                onDragstart: (se) => F(p.id, E),
                onDrop: (se) => f(p.id, X),
                onClick: (se) => B(E, p)
              }, [
                n("header", Al, [
                  n("strong", null, _(E.title), 1)
                ]),
                n("div", Ll, [
                  V(x.$slots, "card-body", {
                    item: E,
                    column: p
                  }, void 0, !0)
                ])
              ], 40, El))), 128)),
              p.items.length ? m("", !0) : (t(), l("div", Dl, _(e.noItemtext), 1))
            ], 42, Bl),
            n("button", {
              class: "fu-kanban__add-card",
              onClick: (E) => $(p, C)
            }, _(A(a)), 9, Pl)
          ], 64))
        ], 42, xl))), 128)),
        e.editMode ? (t(), l("div", {
          key: 0,
          class: "fu-kanban__add-column",
          onClick: I
        }, _(A(i)), 1)) : m("", !0)
      ], 32)
    ]));
  }
}), Nl = /* @__PURE__ */ M(Rl, [["__scopeId", "data-v-11abb07b"]]), ql = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Nl
}, Symbol.toStringTag, { value: "Module" })), Wl = { class: "fu-modal__header" }, Hl = { class: "fu-modal__title" }, Kl = { class: "fu-modal__body" }, Ul = {
  key: 0,
  class: "fu-modal__footer"
}, Xl = /* @__PURE__ */ O({
  __name: "FusionModal",
  props: {
    isVisible: { type: Boolean },
    title: {},
    size: { default: "md" },
    showFooter: { type: Boolean, default: !0 }
  },
  emits: ["close", "cancel", "confirm"],
  setup(e, { emit: c }) {
    const o = c, s = () => o("close");
    function a(i) {
      (i.key === "Escape" || i.key === "Esc") && s();
    }
    return W(() => {
      window.addEventListener("keydown", a);
    }), Y(() => {
      window.removeEventListener("keydown", a);
    }), (i, u) => (t(), z(J, { to: "body" }, [
      e.isVisible ? (t(), l("div", {
        key: 0,
        class: "fu-modal__backdrop",
        onClick: H(s, ["self"])
      }, [
        n("div", {
          class: S(["fu-modal", `fu-modal--${e.size}`])
        }, [
          n("div", Wl, [
            n("h3", Hl, _(e.title), 1),
            T(oe, {
              text: " ",
              icon: A(ve),
              class: "fu-modal__close",
              onClick: s,
              variant: "ghost",
              size: "sm"
            }, null, 8, ["icon"])
          ]),
          n("div", Kl, [
            V(i.$slots, "default", {}, () => [
              u[0] || (u[0] = K(" Default modal content. ", -1))
            ], !0)
          ]),
          e.showFooter ? (t(), l("div", Ul, [
            V(i.$slots, "footer", {}, void 0, !0)
          ])) : m("", !0)
        ], 2)
      ])) : m("", !0)
    ]));
  }
}), Te = /* @__PURE__ */ M(Xl, [["__scopeId", "data-v-dbf14e0e"]]), Yl = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Te
}, Symbol.toStringTag, { value: "Module" })), Zl = { class: "app-container" }, Gl = { class: "app-shell" }, Jl = { class: "fu-topbar" }, Ql = { class: "fu-topbar-l" }, ea = { class: "fu-topbar-c" }, ta = { class: "fu-topbar-r" }, oa = { class: "fu-main-area" }, na = { class: "fu-sidebar" }, la = { class: "fu-menu" }, aa = { class: "ai-panel-body" }, sa = { class: "ai-header-actions" }, ia = { class: "ai-content" }, ie = 991, ge = "fu-app-ai-panel", ke = 340, ua = 500, ca = {
  __name: "AppShell",
  props: {
    listenToToggleEvent: { type: Boolean, default: !0 }
  },
  setup(e) {
    const c = y(!1), o = y(!0), s = y(!1), a = y(340), i = y(!1), u = y(typeof window < "u" ? window.innerWidth : 1200);
    let r = !1;
    const d = y(!1), k = e;
    function F() {
      u.value <= ie ? (c.value = !c.value, o.value = !0) : o.value = !o.value;
    }
    function w() {
      if (u.value <= ie) {
        d.value = !0, s.value = !1, B();
        return;
      }
      s.value = !s.value, B(), s.value && window.dispatchEvent(new Event("open-ai"));
    }
    function b() {
      a.value = i.value ? ke : ua, i.value = !i.value, B();
    }
    function f(v) {
      r = !0, document.body.style.cursor = "col-resize", window.addEventListener("mousemove", g), window.addEventListener("mouseup", h);
    }
    function g(v) {
      if (!r) return;
      const p = window.innerWidth - v.clientX;
      p > 280 && p < 600 && (a.value = p, B());
    }
    function h() {
      r = !1, document.body.style.cursor = "default", window.removeEventListener("mousemove", g), window.removeEventListener("mouseup", h);
    }
    function I() {
      u.value = window.innerWidth;
    }
    function $() {
      u.value <= ie && c.value && (c.value = !1);
    }
    function B() {
      const v = {
        open: s.value,
        width: a.value,
        maximized: i.value
      };
      localStorage.setItem(ge, JSON.stringify(v));
    }
    function x() {
      const v = localStorage.getItem(ge);
      if (v)
        try {
          const { open: p, width: C, maximized: E } = JSON.parse(v);
          s.value = !!p, a.value = C || ke, i.value = !!E;
        } catch (p) {
          console.warn("Failed to restore AI panel state:", p);
        }
    }
    return W(() => {
      if (x(), window.addEventListener("resize", I), k.listenToToggleEvent && window.addEventListener("toggle-ai", w), s.value) {
        const v = () => {
          window.removeEventListener("tabs-ready", v), Z(() => {
            s.value = !0, window.dispatchEvent(new Event("open-ai"));
          });
        };
        window.addEventListener("tabs-ready", v);
      }
    }), (v, p) => {
      const C = Me("FusionActionButton");
      return t(), l("div", Zl, [
        n("div", Gl, [
          n("div", Jl, [
            n("div", Ql, [
              n("button", {
                class: "fu-menu-toggle",
                onClick: F
              }, [...p[2] || (p[2] = [
                n("svg", {
                  class: "fu-icon fu-icon--grid",
                  width: "16",
                  height: "17",
                  viewBox: "0 0 16 17",
                  fill: "none",
                  xmlns: "http://www.w3.org/2000/svg"
                }, [
                  n("path", {
                    d: "M1 13H3C3.27614 13 3.5 13.2238 3.5 13.5V15.5C3.5 15.7762 3.27614 16 3 16H1C0.723856 16 0.5 15.7762 0.5 15.5V13.5C0.5 13.2238 0.723856 13 1 13ZM7 13H9C9.27616 13 9.5 13.2238 9.5 13.5V15.5C9.5 15.7762 9.27616 16 9 16H7C6.72384 16 6.5 15.7762 6.5 15.5V13.5C6.5 13.2238 6.72384 13 7 13ZM13 13H15C15.2762 13 15.5 13.2238 15.5 13.5V15.5C15.5 15.7762 15.2762 16 15 16H13C12.7238 16 12.5 15.7762 12.5 15.5V13.5C12.5 13.2238 12.7238 13 13 13ZM1 7H3C3.27614 7 3.5 7.22385 3.5 7.5V9.5C3.5 9.77615 3.27614 10 3 10H1C0.723856 10 0.5 9.77615 0.5 9.5V7.5C0.5 7.22385 0.723856 7 1 7ZM7 7H9C9.27616 7 9.5 7.22384 9.5 7.5V9.5C9.5 9.77616 9.27616 10 9 10H7C6.72384 10 6.5 9.77616 6.5 9.5V7.5C6.5 7.22384 6.72384 7 7 7ZM13 7H15C15.2762 7 15.5 7.22384 15.5 7.5V9.5C15.5 9.77616 15.2762 10 15 10H13C12.7238 10 12.5 9.77616 12.5 9.5V7.5C12.5 7.22384 12.7238 7 13 7ZM1 1H3C3.27614 1 3.5 1.22386 3.5 1.5V3.5C3.5 3.77614 3.27614 4 3 4H1C0.723862 4 0.5 3.77614 0.5 3.5V1.5C0.5 1.22386 0.723862 1 1 1ZM7 1H9C9.27615 1 9.5 1.22386 9.5 1.5V3.5C9.5 3.77614 9.27615 4 9 4H7C6.72385 4 6.5 3.77614 6.5 3.5V1.5C6.5 1.22386 6.72385 1 7 1ZM13 1H15C15.2762 1 15.5 1.22386 15.5 1.5V3.5C15.5 3.77614 15.2762 4 15 4H13C12.7238 4 12.5 3.77614 12.5 3.5V1.5C12.5 1.22386 12.7238 1 13 1Z",
                    stroke: "currentColor"
                  })
                ], -1)
              ])]),
              V(v.$slots, "brand-logo", {}, () => [
                p[3] || (p[3] = n("img", {
                  src: "https://storage.googleapis.com/skkido/logo-assets/skkido-logo-white.svg",
                  class: "fu-brand-logo",
                  alt: "Logo"
                }, null, -1))
              ])
            ]),
            n("div", ea, [
              V(v.$slots, "header")
            ]),
            n("div", ta, [
              V(v.$slots, "header-right")
            ])
          ]),
          n("div", oa, [
            n("div", {
              class: S(["fu-nav-panel", { open: c.value }])
            }, [
              n("section", na, [
                V(v.$slots, "modules-sidebar")
              ]),
              G(n("section", la, [
                V(v.$slots, "module-menu")
              ], 512), [
                [re, o.value]
              ])
            ], 2),
            n("div", {
              class: S(["fu-body-area", { "ai-open": s.value }])
            }, [
              n("div", {
                onClick: $,
                class: "fu-body-slot"
              }, [
                V(v.$slots, "default")
              ]),
              T(Q, { name: "slide-left" }, {
                default: q(() => [
                  s.value ? (t(), l("div", {
                    key: 0,
                    class: "ai-panel",
                    style: P({ width: a.value + "px" })
                  }, [
                    n("div", {
                      class: "ai-resize-handle",
                      onMousedown: f
                    }, null, 32),
                    n("div", aa, [
                      n("header", null, [
                        p[4] || (p[4] = n("h3", null, "Àdisa", -1)),
                        n("div", sa, [
                          T(C, {
                            icon: i.value ? A(Je) : A(Ge),
                            variant: "ghost",
                            size: "sm",
                            onClick: b
                          }, null, 8, ["icon"]),
                          T(C, {
                            icon: A(ve),
                            variant: "ghost",
                            size: "sm",
                            onClick: w
                          }, null, 8, ["icon"])
                        ])
                      ]),
                      n("div", ia, [
                        V(v.$slots, "ai-content")
                      ])
                    ])
                  ], 4)) : m("", !0)
                ]),
                _: 3
              })
            ], 2)
          ])
        ]),
        d.value ? (t(), z(Te, {
          key: 0,
          isVisible: d.value,
          title: "Adisa",
          size: "sm",
          onClose: p[0] || (p[0] = (E) => d.value = !1),
          onCancel: p[1] || (p[1] = (E) => d.value = !1)
        }, {
          default: q(() => [...p[5] || (p[5] = [
            K(" Downlaod Skkido to use Adisa on Mobile ", -1)
          ])]),
          _: 1
        }, 8, ["isVisible"])) : m("", !0)
      ]);
    };
  }
}, da = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: ca
}, Symbol.toStringTag, { value: "Module" })), ra = {
  key: 0,
  class: "fu-listview__th fu-listview__th--checkbox"
}, fa = { class: "fu-listview__th-content" }, va = ["onMousedown"], ma = ["onClick"], _a = ["onUpdate:modelValue"], pa = { class: "fu-listview__cell" }, ba = /* @__PURE__ */ O({
  __name: "FusionListView",
  props: {
    columns: {},
    rows: {},
    rowKey: {},
    options: {}
  },
  emits: ["row-selected", "row-clicked"],
  setup(e, { emit: c }) {
    const o = e, s = c, a = y(
      o.columns.map(($) => ({
        ...$,
        width: $.width || "150px"
      }))
    ), i = y(!1), u = y(null), r = y(null);
    function d() {
      const $ = r.value;
      $ && ($.style.overflowY = "hidden", requestAnimationFrame(() => {
        $.style.overflowY = "auto";
      }));
    }
    function k() {
      const $ = o.rows.filter((B) => B.__selected);
      s("row-selected", $);
    }
    N(i, ($) => {
      o.options?.selectable && (o.rows.forEach((B) => B.__selected = $), k());
    });
    function F($) {
      s("row-clicked", $), o.options?.onRowClick && o.options.onRowClick($);
    }
    let w = null, b = 0, f = 0;
    function g($, B) {
      o.options?.resizeColumn && (w = B, b = $.clientX, f = parseInt(a.value[B].width, 10), document.addEventListener("mousemove", h), document.addEventListener("mouseup", I));
    }
    function h($) {
      if (w === null) return;
      const B = $.clientX - b, x = Math.max(3, f + B);
      a.value[w].width = `${x}px`;
    }
    function I() {
      w = null, document.removeEventListener("mousemove", h), document.removeEventListener("mouseup", I);
    }
    return W(() => {
      d(), window.addEventListener("resize", d);
    }), Y(() => {
      window.removeEventListener("resize", d), document.removeEventListener("mousemove", h), document.removeEventListener("mouseup", I);
    }), ($, B) => (t(), l("div", {
      class: "fu-listview",
      ref_key: "listviewRef",
      ref: u
    }, [
      n("div", {
        class: "fu-listview__table-wrapper customScrollBar",
        ref_key: "tableWrapper",
        ref: r
      }, [
        n("table", null, [
          n("thead", null, [
            n("tr", null, [
              e.options?.selectable ? (t(), l("th", ra, [
                G(n("input", {
                  type: "checkbox",
                  "onUpdate:modelValue": B[0] || (B[0] = (x) => i.value = x)
                }, null, 512), [
                  [_e, i.value]
                ])
              ])) : m("", !0),
              (t(!0), l(j, null, L(a.value, (x, v) => (t(), l("th", {
                key: x.key,
                style: P({ width: x.width || "auto" }),
                class: "fu-listview__th"
              }, [
                n("div", fa, [
                  x.icon ? (t(), z(D(x.icon), {
                    key: 0,
                    class: "fu-listview__th-icon"
                  })) : m("", !0),
                  n("span", null, _(x.label), 1),
                  e.options?.resizeColumn ? (t(), l("span", {
                    key: 1,
                    class: "fu-listview__resize-handle",
                    onMousedown: (p) => g(p, v)
                  }, null, 40, va)) : m("", !0)
                ])
              ], 4))), 128))
            ])
          ]),
          n("tbody", null, [
            (t(!0), l(j, null, L(e.rows, (x) => (t(), l("tr", {
              key: x[e.rowKey],
              class: "fu-listview__row",
              onClick: (v) => F(x)
            }, [
              e.options?.selectable ? (t(), l("td", {
                key: 0,
                class: "fu-listview__td fu-listview__td--checkbox",
                onClick: B[1] || (B[1] = H(() => {
                }, ["stop"]))
              }, [
                G(n("input", {
                  type: "checkbox",
                  "onUpdate:modelValue": (v) => x.__selected = v,
                  onChange: k
                }, null, 40, _a), [
                  [_e, x.__selected]
                ])
              ])) : m("", !0),
              V($.$slots, "tableRow", { row: x }, () => [
                (t(!0), l(j, null, L(a.value, (v) => (t(), l("td", {
                  key: v.key,
                  class: "fu-listview__td",
                  style: P({ width: v.width })
                }, [
                  V($.$slots, `cell-${v.key}`, {
                    row: x,
                    col: v
                  }, () => [
                    n("span", pa, _(x[v.key]), 1)
                  ], !0)
                ], 4))), 128))
              ], !0)
            ], 8, ma))), 128))
          ])
        ])
      ], 512)
    ], 512));
  }
}), ha = /* @__PURE__ */ M(ba, [["__scopeId", "data-v-67ab1a89"]]), ya = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: ha
}, Symbol.toStringTag, { value: "Module" })), ga = { class: "fu-module-menu-wrapper scrollbar__control customScrollBar" }, ka = { class: "fu-module-menu-wrapper__list" }, wa = {
  key: 0,
  class: "fu-module-menu-empty"
}, $a = /* @__PURE__ */ O({
  __name: "FusionModuleMenu",
  props: {
    items: {},
    activePath: {}
  },
  setup(e) {
    return (c, o) => {
      const s = Me("router-link");
      return t(), l("div", ga, [
        n("ul", ka, [
          (t(!0), l(j, null, L(e.items, (a) => (t(), l("li", {
            key: a.path,
            class: S({ active: e.activePath && e.activePath.startsWith(a.path) })
          }, [
            T(s, {
              class: "fu-module-menu-link",
              to: a.path
            }, {
              default: q(() => [
                a.icon ? (t(), z(D(a.icon), {
                  key: 0,
                  size: 15,
                  class: "fu-module-menu-icon"
                })) : m("", !0),
                n("span", null, _(a.label), 1)
              ]),
              _: 2
            }, 1032, ["to"])
          ], 2))), 128)),
          !e.items || !e.items.length ? (t(), l("li", wa, " No menu items ")) : m("", !0)
        ])
      ]);
    };
  }
}), Ca = /* @__PURE__ */ M($a, [["__scopeId", "data-v-7631f4b6"]]), xa = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Ca
}, Symbol.toStringTag, { value: "Module" })), Sa = { class: "fu-bell-icon" }, za = {
  key: 2,
  class: "fu-badge"
}, Ma = /* @__PURE__ */ O({
  __name: "FuNotification",
  props: {
    unreadCount: { default: 0 },
    bellIcon: { default: void 0 },
    align: { default: "right" }
  },
  setup(e) {
    const c = e, o = y(!1), s = y(null), a = y(null), i = y({}), u = () => {
      if (o.value = !o.value, o.value && s.value) {
        const d = s.value.getBoundingClientRect();
        let k = d.left + window.scrollX;
        c.align === "right" ? k = d.right + window.scrollX - 300 : c.align === "center" && (k = d.left + window.scrollX - 160 + d.width / 2), i.value = {
          top: `${d.bottom + window.scrollY + 8}px`,
          left: `${Math.max(k, 8)}px`,
          position: "absolute",
          zIndex: "2000"
        };
      }
    }, r = (d) => {
      const k = d.target;
      o.value && s.value && !s.value.contains(k) && (!a.value || !a.value.contains(k)) && (o.value = !1);
    };
    return W(() => document.addEventListener("click", r)), Y(() => document.removeEventListener("click", r)), (d, k) => (t(), l("div", {
      class: "fu-notification-dropdown",
      ref_key: "dropdown",
      ref: s
    }, [
      n("div", {
        class: "fu-notification__trigger",
        onClick: u
      }, [
        n("div", Sa, [
          e.bellIcon ? (t(), z(D(e.bellIcon), {
            key: 0,
            "stroke-width": 1.5,
            class: "fu-bell-svg"
          })) : (t(), z(A(qe), {
            key: 1,
            class: "fu-bell-svg"
          })),
          e.unreadCount > 0 ? (t(), l("span", za, _(e.unreadCount), 1)) : m("", !0)
        ])
      ]),
      (t(), z(J, { to: "body" }, [
        T(Q, { name: "fade" }, {
          default: q(() => [
            o.value ? (t(), l("div", {
              key: 0,
              ref_key: "panelEl",
              ref: a,
              class: "fu-notification__panel",
              style: P(i.value)
            }, [
              V(d.$slots, "default", {}, () => [
                k[0] || (k[0] = n("div", { class: "fu-empty" }, [
                  n("h4", null, "No Content"),
                  n("p", null, "Use the default slot to pass custom dropdown body.")
                ], -1))
              ], !0)
            ], 4)) : m("", !0)
          ]),
          _: 3
        })
      ]))
    ], 512));
  }
}), Oa = /* @__PURE__ */ M(Ma, [["__scopeId", "data-v-32f377b6"]]), Fa = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Oa
}, Symbol.toStringTag, { value: "Module" })), Va = { class: "fu-toast__content" }, Ta = { class: "fu-toast__message" }, Ia = /* @__PURE__ */ O({
  __name: "FusionToast",
  props: {
    message: {},
    type: { default: "info" },
    duration: { default: 3500 }
  },
  setup(e) {
    const c = e, o = y(!1), s = {
      success: Ke,
      error: Ue,
      info: he,
      dark: he
    };
    W(() => {
      o.value = !0, setTimeout(() => o.value = !1, c.duration);
    });
    function a() {
      o.value = !1;
    }
    return (i, u) => (t(), z(J, { to: "body" }, [
      T(Q, { name: "fu-toast-fade" }, {
        default: q(() => [
          o.value ? (t(), l("div", {
            key: 0,
            class: S(["fu-toast", [`fu-toast--${e.type}`]]),
            role: "alert"
          }, [
            n("div", Va, [
              (t(), z(D(s[e.type]), { class: "fu-toast__icon" })),
              n("span", Ta, _(e.message), 1),
              n("button", {
                class: "fu-toast__close",
                onClick: a
              }, "×")
            ])
          ], 2)) : m("", !0)
        ]),
        _: 1
      })
    ]));
  }
}), Ie = /* @__PURE__ */ M(Ia, [["__scopeId", "data-v-ac436970"]]), ja = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Ie
}, Symbol.toStringTag, { value: "Module" })), Ba = {
  key: 0,
  class: "fu-input-label"
}, Ea = {
  key: 0,
  class: "fu-input-required"
}, Aa = ["type", "placeholder", "disabled", "required"], La = {
  key: 1,
  class: "fu-input-error"
}, Da = /* @__PURE__ */ O({
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
  setup(e, { emit: c }) {
    const o = e, s = c, a = y(o.modelValue), i = y(!1), u = () => {
      i.value = !i.value;
    };
    return N(a, (r) => s("update:modelValue", r)), N(() => o.modelValue, (r) => a.value = r), (r, d) => (t(), l("div", {
      class: "fu-input-wrapper",
      style: P({ width: e.formWrapperWidth })
    }, [
      e.label ? (t(), l("label", Ba, [
        K(_(e.label) + " ", 1),
        e.required ? (t(), l("span", Ea, "*")) : m("", !0)
      ])) : m("", !0),
      n("div", {
        class: S(["fu-input-container", [
          `fu-input--${e.size}`,
          `fu-input--${e.variant}`,
          { "fu-input--error": e.error }
        ]])
      }, [
        G(n("input", de(r.$attrs, {
          class: "fu-input",
          type: i.value ? "text" : "password",
          placeholder: e.placeholder,
          disabled: e.disabled,
          required: e.required,
          "onUpdate:modelValue": d[0] || (d[0] = (k) => a.value = k)
        }), null, 16, Aa), [
          [xe, a.value]
        ]),
        n("button", {
          type: "button",
          class: "fu-password-toggle",
          onClick: u
        }, [
          (t(), z(D(i.value ? A(Xe) : A(Ye)), { class: "fu-password-icon" }))
        ])
      ], 2),
      e.error ? (t(), l("span", La, _(e.error), 1)) : m("", !0)
    ], 4));
  }
}), Pa = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Da
}, Symbol.toStringTag, { value: "Module" })), Ra = { class: "fu-progress-stepper" }, Na = { class: "fu-progress-bar" }, qa = {
  key: 0,
  class: "fu-step-labels"
}, Wa = ["onClick"], Ha = { class: "circle" }, Ka = { class: "label" }, Ua = /* @__PURE__ */ O({
  __name: "FusionProgressStepper",
  props: {
    currentStep: {},
    totalSteps: {},
    showLabels: { type: Boolean },
    steps: {}
  },
  emits: ["step-click"],
  setup(e, { emit: c }) {
    const o = e, s = c, a = U(
      () => `${(o.currentStep + 1) / o.totalSteps * 100}%`
    ), i = (u) => s("step-click", u);
    return (u, r) => (t(), l("div", Ra, [
      n("div", Na, [
        n("div", {
          class: "fu-progress-fill",
          style: P({ width: a.value })
        }, null, 4)
      ]),
      e.showLabels && e.steps ? (t(), l("div", qa, [
        (t(!0), l(j, null, L(e.steps, (d, k) => (t(), l("div", {
          key: k,
          class: S(["fu-step-label", { active: e.currentStep === k }]),
          onClick: (F) => i(k)
        }, [
          n("div", Ha, _(k + 1), 1),
          n("div", Ka, _(d.title), 1)
        ], 10, Wa))), 128))
      ])) : m("", !0)
    ]));
  }
}), Xa = /* @__PURE__ */ M(Ua, [["__scopeId", "data-v-6ac0e869"]]), Ya = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Xa
}, Symbol.toStringTag, { value: "Module" })), Za = { class: "fu-range-control" }, Ga = {
  key: 0,
  class: "fu-range-label"
}, Ja = { class: "fu-range-track" }, Qa = ["min", "max", "step", "value"], es = { class: "fu-range-value" }, ts = /* @__PURE__ */ O({
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
  setup(e, { emit: c }) {
    const o = e, s = c;
    function a(u) {
      const r = u.target, d = Number(r.value);
      s("update:modelValue", d), s("change", d);
    }
    const i = U(
      () => o.unit ? `${o.modelValue}${o.unit}` : String(o.modelValue)
    );
    return (u, r) => (t(), l("div", Za, [
      e.label ? (t(), l("label", Ga, _(e.label), 1)) : m("", !0),
      n("div", Ja, [
        n("input", {
          type: "range",
          min: e.min,
          max: e.max,
          step: e.step,
          value: e.modelValue,
          onInput: a
        }, null, 40, Qa),
        n("span", es, _(i.value), 1)
      ])
    ]));
  }
}), os = /* @__PURE__ */ M(ts, [["__scopeId", "data-v-28c66abf"]]), ns = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: os
}, Symbol.toStringTag, { value: "Module" })), ls = { class: "fu-side-menu-wrapper" }, as = { class: "fu-side-menu-wrapper__list" }, ss = ["href"], is = {
  key: 0,
  class: "fu-side-menu-badge"
}, us = /* @__PURE__ */ O({
  __name: "FusionSidebar",
  props: {
    modules: {},
    activeModule: {}
  },
  setup(e) {
    return (c, o) => (t(), l("nav", ls, [
      n("ul", as, [
        (t(!0), l(j, null, L(e.modules, (s) => (t(), l("li", {
          key: s.name,
          class: S({ active: e.activeModule === s.name })
        }, [
          n("a", {
            href: s.link
          }, [
            n("div", {
              class: S([
                "fu-side-menu-wrapper__list__module",
                { active: e.activeModule === s.name }
              ])
            }, [
              (t(), z(D(s.icon), { size: 16 })),
              s.count ? (t(), l("span", is, _(s.count > 99 ? "99+" : s.count), 1)) : m("", !0)
            ], 2),
            n("span", null, _(s.label), 1)
          ], 8, ss)
        ], 2))), 128))
      ])
    ]));
  }
}), cs = /* @__PURE__ */ M(us, [["__scopeId", "data-v-1f8750fc"]]), ds = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: cs
}, Symbol.toStringTag, { value: "Module" })), rs = ["aria-checked", "disabled"], fs = /* @__PURE__ */ O({
  __name: "FusionSwitch",
  props: {
    modelValue: { type: Boolean },
    disabled: { type: Boolean },
    size: {}
  },
  emits: ["update:modelValue"],
  setup(e, { emit: c }) {
    const o = e, s = c;
    function a() {
      o.disabled || s("update:modelValue", !o.modelValue);
    }
    const i = U(() => {
      switch (o.size) {
        case "sm":
          return "fu-switch--sm";
        case "lg":
          return "fu-switch--lg";
        default:
          return "fu-switch--md";
      }
    });
    return (u, r) => (t(), l("button", {
      type: "button",
      class: S(["fu-switch", [{ "fu-switch--checked": e.modelValue, disabled: e.disabled }, i.value]]),
      role: "switch",
      "aria-checked": e.modelValue,
      disabled: e.disabled,
      onClick: a
    }, [...r[0] || (r[0] = [
      n("span", { class: "fu-switch__thumb" }, null, -1)
    ])], 10, rs));
  }
}), vs = /* @__PURE__ */ M(fs, [["__scopeId", "data-v-c8285d1a"]]), ms = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: vs
}, Symbol.toStringTag, { value: "Module" })), _s = { class: "fu-tabs" }, ps = { class: "fu-tabs__header-wrapper" }, bs = { class: "fu-tabs-buttons scrollbar__control customScrollBar" }, hs = ["onClick", "disabled"], ys = { class: "fu-tab__title" }, gs = { class: "fu-tabs__content-wrapper" }, ks = {
  key: 0,
  class: "fu-tabs__footer"
}, we = "fusiontab-active", ws = {
  __name: "FusionTab",
  props: {
    tabs: Array,
    defaultActiveDesktop: String,
    defaultActiveMobile: String,
    contextKey: { type: String, default: "" }
  },
  emits: ["tab-change"],
  setup(e, { emit: c }) {
    const o = e, s = c, a = y(window.innerWidth <= 768), i = y(""), u = y(null), r = U(
      () => o.tabs.filter((f) => !f.mobileOnly || a.value)
    );
    function d() {
      const f = u.value;
      f && (f.style.overflowY = "hidden", requestAnimationFrame(() => {
        f.style.overflowY = "auto";
      }));
    }
    function k() {
      return o.contextKey ? `${we}-${o.contextKey}` : we;
    }
    function F(f) {
      const g = o.tabs.find((h) => h.key === f);
      !g || g.disabled || (i.value = f, localStorage.setItem(k(), f), s("tab-change", f), Z(() => {
        const h = u.value;
        h && (h.scrollTop = 0, d());
      }));
    }
    function w() {
      const f = o.tabs[0]?.key, h = localStorage.getItem(k()) || (a.value ? o.defaultActiveMobile || f : o.defaultActiveDesktop || f);
      i.value = h;
    }
    function b() {
      const f = a.value;
      a.value = window.innerWidth <= 768, f !== a.value && Z(w);
    }
    return N(
      () => o.contextKey,
      () => {
        localStorage.removeItem(k()), w(), d();
      }
    ), W(() => {
      b(), w(), d(), window.addEventListener("resize", b);
    }), Y(() => {
      window.removeEventListener("resize", b);
    }), (f, g) => (t(), l("div", _s, [
      n("div", ps, [
        n("div", bs, [
          (t(!0), l(j, null, L(r.value, (h) => (t(), l("button", {
            key: h.key,
            onClick: (I) => F(h.key),
            class: S(["fu-tab", { "fu-tab--active": i.value === h.key }]),
            disabled: h.disabled
          }, [
            h.icon ? (t(), z(D(h.icon), {
              key: 0,
              size: 16,
              class: "fu-tab__icon"
            })) : m("", !0),
            n("span", ys, _(h.title), 1)
          ], 10, hs))), 128))
        ])
      ]),
      n("div", gs, [
        n("div", {
          class: "fu-tabs__body scrollbar__control customScrollBar",
          ref_key: "tabBody",
          ref: u
        }, [
          (t(), z(Ee, null, [
            (t(!0), l(j, null, L(r.value, (h) => G((t(), l("div", {
              key: h.key,
              class: "fu-tab-panel"
            }, [
              V(f.$slots, h.key, {}, void 0, !0)
            ])), [
              [re, i.value === h.key]
            ])), 128))
          ], 1024))
        ], 512),
        f.$slots.footer ? (t(), l("div", ks, [
          V(f.$slots, "footer", {}, void 0, !0)
        ])) : m("", !0)
      ])
    ]));
  }
}, $s = /* @__PURE__ */ M(ws, [["__scopeId", "data-v-00f19252"]]), Cs = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: $s
}, Symbol.toStringTag, { value: "Module" })), xs = { class: "fu-textarea-wrapper" }, Ss = {
  key: 0,
  class: "fu-textarea-label"
}, zs = {
  key: 0,
  class: "fu-textarea-required"
}, Ms = ["placeholder", "disabled", "rows", "required"], Os = {
  key: 1,
  class: "fu-textarea-error"
}, Fs = /* @__PURE__ */ O({
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
  setup(e, { emit: c }) {
    const o = e, s = c, a = y(o.modelValue);
    return N(a, (i) => s("update:modelValue", i)), N(
      () => o.modelValue,
      (i) => a.value = i
    ), (i, u) => (t(), l("div", xs, [
      e.label ? (t(), l("label", Ss, [
        K(_(e.label) + " ", 1),
        e.required ? (t(), l("span", zs, "*")) : m("", !0)
      ])) : m("", !0),
      G(n("textarea", de(i.$attrs, {
        class: ["fu-textarea fu-form-control", [
          `fu-textarea--${e.size}`,
          { "fu-textarea--error": e.error },
          e.variant ? `fu-textarea--${e.variant}` : null
        ]],
        placeholder: e.placeholder,
        disabled: e.disabled,
        rows: e.rows,
        required: e.required,
        "onUpdate:modelValue": u[0] || (u[0] = (r) => a.value = r)
      }), null, 16, Ms), [
        [ze, a.value]
      ]),
      e.error ? (t(), l("span", Os, _(e.error), 1)) : m("", !0)
    ]));
  }
}), Vs = /* @__PURE__ */ M(Fs, [["__scopeId", "data-v-3beafd95"]]), Ts = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Vs
}, Symbol.toStringTag, { value: "Module" })), Is = { class: "fu-theme-selector" }, js = { class: "fu-theme-grid" }, Bs = ["onClick"], Es = {
  key: 0,
  class: "fu-theme-check"
}, As = { class: "fu-theme-label" }, Ls = /* @__PURE__ */ O({
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
  setup(e, { emit: c }) {
    const o = c;
    function s(a) {
      o("update:modelValue", a);
    }
    return (a, i) => (t(), l("div", Is, [
      n("div", js, [
        (t(!0), l(j, null, L(e.themes, (u) => (t(), l("div", {
          key: u.key,
          class: S(["fu-theme-card", { "is-active": e.modelValue === u.key }]),
          onClick: (r) => s(u.key),
          tabindex: "0",
          role: "button"
        }, [
          n("div", {
            class: S(["fu-theme-preview", `fu-theme-preview--${u.key}`])
          }, [
            i[0] || (i[0] = n("div", { class: "fu-theme-header" }, null, -1)),
            i[1] || (i[1] = n("div", { class: "fu-theme-body" }, null, -1)),
            i[2] || (i[2] = n("div", { class: "fu-theme-footer" }, null, -1)),
            e.modelValue === u.key ? (t(), l("div", Es, [
              T(A(Oe), { class: "fu-check-icon" })
            ])) : m("", !0)
          ], 2),
          n("span", As, _(u.name), 1)
        ], 10, Bs))), 128))
      ])
    ]));
  }
}), Ds = /* @__PURE__ */ M(Ls, [["__scopeId", "data-v-43c6ff7c"]]), Ps = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Ds
}, Symbol.toStringTag, { value: "Module" })), Rs = { class: "fu-toolbar__left" }, Ns = { class: "fu-toolbar__actions" }, qs = /* @__PURE__ */ O({
  __name: "FusionToolbar",
  props: {
    wrap: { type: Boolean, default: !0 },
    gap: { type: String, default: "md" },
    align: { type: String, default: "center" }
  },
  setup(e) {
    const c = e, o = U(() => ({
      "flex--wrap": c.wrap,
      [`flex--gap-${c.gap}`]: !!c.gap,
      [`align--${c.align}`]: !!c.align
    }));
    return (s, a) => (t(), l("div", {
      class: S(["fu-toolbar", o.value])
    }, [
      n("div", Rs, [
        V(s.$slots, "left", {}, void 0, !0)
      ]),
      n("div", Ns, [
        V(s.$slots, "right", {}, void 0, !0)
      ])
    ], 2));
  }
}), Ws = /* @__PURE__ */ M(qs, [["__scopeId", "data-v-6c7399ba"]]), Hs = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Ws
}, Symbol.toStringTag, { value: "Module" }));
function $e() {
  return ({ message: e, type: c = "info", duration: o = 3500 }) => {
    const s = document.createElement("div");
    document.body.appendChild(s);
    const a = Ae(Ie, { message: e, type: c, duration: o });
    a.mount(s), setTimeout(() => {
      a.unmount(), document.body.removeChild(s);
    }, o + 500);
  };
}
const je = localStorage.getItem("theme") || "auto", te = y(je);
function Ks() {
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}
function ae(e, c = !1) {
  const o = e === "auto" ? Ks() : e;
  if (c) {
    document.documentElement.setAttribute("data-theme", o);
    return;
  }
  document.documentElement.setAttribute("data-theme", o), localStorage.setItem("theme", e);
}
ae(je, !0);
const Us = window.matchMedia("(prefers-color-scheme: dark)");
Us.addEventListener("change", () => {
  te.value === "auto" && ae("auto");
});
Le(() => {
  ae(te.value);
});
function Zs() {
  return {
    theme: te,
    setTheme: (e) => {
      te.value = e, ae(e);
    },
    toggleTheme: () => {
      te.value = te.value === "dark" ? "light" : "dark", ae(te.value);
    }
  };
}
const Ce = /* @__PURE__ */ Object.assign({ "./components/StatusDropdown/FusionStatusDropdown.vue": ut, "./components/TextInput/FusionTextInput.vue": pt, "./components/accordion/FusionAccordion.vue": wt, "./components/actionButton/FusionActionButton.vue": zt, "./components/autocomplete/FusionAutocomplete.vue": Wt, "./components/avatar/FuAvatar.vue": Zt, "./components/avatar/FuAvatarGroup.vue": Qt, "./components/badge/FusionBadge.vue": oo, "./components/button/FusionButton.vue": co, "./components/cards/FusionStatCard.vue": ko, "./components/checkbox/FusionCheckbox.vue": zo, "./components/codeInput/FusionCodeInput.vue": jo, "./components/colourPallet/FusionColour.vue": Eo, "./components/combobox/FuCombobox.vue": Uo, "./components/drawer/FusionDrawer.vue": en, "./components/dropdown/FusionDropdownButton.vue": ln, "./components/dropdownInline/FusionDropdownInline.vue": rn, "./components/dropdownMenu/DropdownMenu.vue": _n, "./components/fileUploader/FusionUpload.vue": Cn, "./components/floatingHeader/FusionSmartHeader.vue": On, "./components/items/activity/FusionActivityItem.vue": Wn, "./components/items/attachments/FusionAttachment.vue": tl, "./components/items/notes/FusionNoteCard.vue": rl, "./components/items/task/FusionTaskItem.vue": $l, "./components/kanban/Kanban.vue": ql, "./components/layout/AppShell.vue": da, "./components/list/FusionListView.vue": ya, "./components/modal/FusionModal.vue": Yl, "./components/modulemenu/FusionModuleMenu.vue": xa, "./components/notification/FuNotification.vue": Fa, "./components/notifications/FusionToast.vue": ja, "./components/password/FusionPasswordInput.vue": Pa, "./components/progress/FusionProgressStepper.vue": Ya, "./components/rangeControl/FusionRangeControl.vue": ns, "./components/sidebarmenu/FusionSidebar.vue": ds, "./components/switch/FusionSwitch.vue": ms, "./components/tabs/FusionTab.vue": Cs, "./components/textArea/FusionTextArea.vue": Ts, "./components/theme/FuThemeSelector.vue": Ps, "./components/toolbar/FusionToolbar.vue": Hs }), Gs = {
  install(e) {
    for (const c in Ce) {
      const o = Ce[c].default, s = o.name || c.split("/").pop()?.replace(".vue", "");
      console.log(" ✅ Registering component:", s), e.component(s, o);
    }
    e.config.globalProperties.FusionToast = (c) => {
      $e()(c);
    }, typeof window < "u" && (window.FusionToast = (c) => {
      $e()(c);
    });
  }
};
export {
  ne as FuAvatar,
  ee as UserStatus,
  Gs as default,
  Zs as useTheme,
  $e as useToast
};
//# sourceMappingURL=fusion-binary-ui.es.js.map
