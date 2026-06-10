import { h as vt, defineComponent as oe, ref as N, reactive as fr, watch as ve, onMounted as Te, onBeforeUnmount as Ce, openBlock as u, createElementBlock as f, normalizeClass as Y, toDisplayString as S, createCommentVNode as w, createElementVNode as m, createBlock as K, resolveDynamicComponent as be, normalizeStyle as ne, createVNode as G, unref as ie, Teleport as ke, Transition as He, withCtx as ce, Fragment as B, renderList as ae, nextTick as ye, computed as P, withModifiers as ue, createTextVNode as de, renderSlot as re, withDirectives as je, mergeProps as Ot, vModelDynamic as mr, vShow as Ca, createStaticVNode as hr, withKeys as ze, vModelText as nt, toRaw as Ts, defineAsyncComponent as Je, toHandlers as ks, useCssVars as Es, shallowRef as Ms, resolveComponent as vr, KeepAlive as Ns, createApp as Ds, watchEffect as Is } from "vue";
/**
 * @license lucide-vue-next v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Za = (t) => t.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), Os = (t) => t.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (e, n, a) => a ? a.toUpperCase() : n.toLowerCase()
), Rs = (t) => {
  const e = Os(t);
  return e.charAt(0).toUpperCase() + e.slice(1);
}, xs = (...t) => t.filter((e, n, a) => !!e && e.trim() !== "" && a.indexOf(e) === n).join(" ").trim(), Ja = (t) => t === "";
/**
 * @license lucide-vue-next v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var zt = {
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
const Ps = ({
  name: t,
  iconNode: e,
  absoluteStrokeWidth: n,
  "absolute-stroke-width": a,
  strokeWidth: i,
  "stroke-width": r,
  size: o = zt.width,
  color: s = zt.stroke,
  ...l
}, { slots: c }) => vt(
  "svg",
  {
    ...zt,
    ...l,
    width: o,
    height: o,
    stroke: s,
    "stroke-width": Ja(n) || Ja(a) || n === !0 || a === !0 ? Number(i || r || zt["stroke-width"]) * 24 / Number(o) : i || r || zt["stroke-width"],
    class: xs(
      "lucide",
      l.class,
      ...t ? [`lucide-${Za(Rs(t))}-icon`, `lucide-${Za(t)}`] : ["lucide-icon"]
    )
  },
  [...e.map((d) => vt(...d)), ...c.default ? [c.default()] : []]
);
/**
 * @license lucide-vue-next v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const we = (t, e) => (n, { slots: a, attrs: i }) => vt(
  Ps,
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
const $s = we("bell", [
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
const pr = we("check", [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]]);
/**
 * @license lucide-vue-next v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Le = we("chevron-down", [
  ["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]
]);
/**
 * @license lucide-vue-next v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const qt = we("chevron-left", [
  ["path", { d: "m15 18-6-6 6-6", key: "1wnfg3" }]
]);
/**
 * @license lucide-vue-next v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Qt = we("chevron-right", [
  ["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }]
]);
/**
 * @license lucide-vue-next v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Fs = we("chevron-up", [
  ["path", { d: "m18 15-6-6-6 6", key: "153udz" }]
]);
/**
 * @license lucide-vue-next v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Bs = we("circle-alert", [
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
const gr = we("circle-check-big", [
  ["path", { d: "M21.801 10A10 10 0 1 1 17 3.335", key: "yps3ct" }],
  ["path", { d: "m9 11 3 3L22 4", key: "1pflzl" }]
]);
/**
 * @license lucide-vue-next v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const zs = we("circle-check", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "m9 12 2 2 4-4", key: "dzmm74" }]
]);
/**
 * @license lucide-vue-next v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ls = we("circle-x", [
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
const wa = we("ellipsis-vertical", [
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
const Hs = we("eye-off", [
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
const Vs = we("eye", [
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
const js = we("file-text", [
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
const Us = we("image", [
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
const Xa = we("info", [
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
const Ws = we("maximize-2", [
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
const Ys = we("minimize-2", [
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
const ei = we("monitor-smartphone", [
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
const Gs = we("search", [
  ["path", { d: "m21 21-4.34-4.34", key: "14j7rj" }],
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }]
]);
/**
 * @license lucide-vue-next v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const yr = we("square-pen", [
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
const _a = we("trash-2", [
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
const Ks = we("triangle-alert", [
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
const br = we("video", [
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
const Zt = we("x", [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
]), qs = {
  key: 0,
  class: "fu-status-dropdown__label-text"
}, Qs = ["disabled"], Zs = { key: 0 }, Js = ["onClick"], Xs = { class: "fu-status-dropdown__item-label" }, el = /* @__PURE__ */ oe({
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
    const n = t, a = e, i = N(!1), r = N(null), o = N(null), s = N(n.modelValue || null), l = fr({
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
      const g = r.value.getBoundingClientRect(), b = o.value.getBoundingClientRect(), C = window.innerHeight - g.bottom, E = g.top, M = C < b.height && E > C;
      let k = g.left + window.scrollX, F = "none";
      n.align === "center" && (k += g.width / 2, F = "translateX(-50%)"), n.align === "right" && (k = g.right + window.scrollX, F = "translateX(-100%)"), l.left = `${k}px`, l.transform = F, l.minWidth = `${g.width}px`, M ? l.top = `${g.top + window.scrollY - b.height - 6}px` : l.top = `${g.bottom + window.scrollY + 6}px`, l.visibility = "visible", l.opacity = "1";
    }
    const d = async () => {
      n.disabled || n.readonly || (i.value = !i.value, i.value && (await ye(), c(), await ye(), c()));
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
    return Te(() => {
      document.addEventListener("click", p), window.addEventListener("resize", v), window.addEventListener("scroll", v, !0), document.addEventListener("keydown", y);
    }), Ce(() => {
      document.removeEventListener("click", p), window.removeEventListener("resize", v), window.removeEventListener("scroll", v, !0), document.removeEventListener("keydown", y);
    }), (g, b) => (u(), f("div", {
      class: Y(["fu-status-dropdown", {
        "fu-status-dropdown--disabled": t.disabled,
        "fu-status-dropdown--readonly": t.readonly
      }]),
      ref_key: "dropdown",
      ref: r
    }, [
      t.label ? (u(), f("div", qs, S(t.label), 1)) : w("", !0),
      m("button", {
        class: "fu-status-dropdown__button",
        onClick: d,
        disabled: t.disabled
      }, [
        s.value ? (u(), f("span", Zs, [
          s.value.icon ? (u(), K(be(s.value.icon), {
            key: 0,
            class: "fu-status-dropdown__icon"
          })) : s.value.color ? (u(), f("span", {
            key: 1,
            class: "fu-status-dropdown__dot",
            style: ne({ backgroundColor: s.value.color })
          }, null, 4)) : w("", !0)
        ])) : w("", !0),
        m("span", {
          class: Y(["fu-status-dropdown__label", { "fu-status-dropdown__placeholder": !s.value }])
        }, S(s.value?.label || t.placeholder), 3),
        G(ie(Le), { class: "fu-status-dropdown__chevron" })
      ], 8, Qs),
      (u(), K(ke, { to: "body" }, [
        G(He, { name: "fade" }, {
          default: ce(() => [
            i.value ? (u(), f("ul", {
              key: 0,
              ref_key: "menuRef",
              ref: o,
              class: "fu-status-dropdown__menu",
              style: ne(l)
            }, [
              (u(!0), f(B, null, ae(t.options, (A) => (u(), f("li", {
                key: A.label,
                class: "fu-status-dropdown__item",
                onClick: (C) => h(A)
              }, [
                A.icon ? (u(), K(be(A.icon), {
                  key: 0,
                  class: "fu-status-dropdown__icon"
                })) : A.color ? (u(), f("span", {
                  key: 1,
                  class: "fu-status-dropdown__dot",
                  style: ne({ backgroundColor: A.color })
                }, null, 4)) : w("", !0),
                m("span", Xs, S(A.label), 1)
              ], 8, Js))), 128))
            ], 4)) : w("", !0)
          ]),
          _: 1
        })
      ]))
    ], 2));
  }
}), X = (t, e) => {
  const n = t.__vccOpts || t;
  for (const [a, i] of e)
    n[a] = i;
  return n;
}, Sa = /* @__PURE__ */ X(el, [["__scopeId", "data-v-8259c9bf"]]), tl = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Sa
}, Symbol.toStringTag, { value: "Module" })), nl = ["disabled"], al = {
  key: 0,
  class: "fu-spinner"
}, il = /* @__PURE__ */ oe({
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
    return (r, o) => (u(), f("div", {
      class: "fu-action-btn-wrapper",
      onMouseenter: a,
      onMouseleave: i
    }, [
      m("button", {
        class: Y(["fu-action-btn", [
          `fu-action-btn--${t.size}`,
          `fu-action-btn--${t.variant}`,
          { "is-loading": t.loading }
        ]]),
        disabled: t.disabled || t.loading,
        onClick: o[0] || (o[0] = (s) => t.loading ? null : r.$emit("click", s))
      }, [
        t.loading ? (u(), f("span", al)) : t.icon ? (u(), K(be(t.icon), {
          key: 1,
          class: "fu-action-btn__icon",
          size: 20
        })) : w("", !0)
      ], 10, nl),
      (u(), K(ke, { to: "body" }, [
        t.tooltip && e.value ? (u(), f("span", {
          key: 0,
          class: "fu-tooltip",
          style: ne(n.value)
        }, S(t.tooltip), 5)) : w("", !0)
      ]))
    ], 32));
  }
}), $e = /* @__PURE__ */ X(il, [["__scopeId", "data-v-b726044f"]]), rl = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: $e
}, Symbol.toStringTag, { value: "Module" }));
var kt = /* @__PURE__ */ ((t) => (t[t.Offline = 0] = "Offline", t[t.Active = 1] = "Active", t[t.Away = 2] = "Away", t[t.Busy = 3] = "Busy", t[t.DoNotDisturb = 4] = "DoNotDisturb", t[t.Invisible = 5] = "Invisible", t))(kt || {});
const ol = ["src", "alt"], sl = {
  key: 1,
  class: "fu-avatar__placeholder"
}, ll = {
  key: 2,
  class: "fu-avatar__edit-overlay"
}, ul = /* @__PURE__ */ oe({
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
    const n = t, a = e, i = N(null), r = P(
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
    }, l = () => {
      a("remove");
    }, c = P(() => {
      switch (n.status) {
        case kt.Active:
        case 1:
          return "fu-status-dot--active";
        case kt.Away:
        case 2:
          return "fu-status-dot--away";
        case kt.Busy:
        case 3:
          return "fu-status-dot--busy";
        case kt.DoNotDisturb:
        case 4:
          return "fu-status-dot--dnd";
        case kt.Invisible:
        case 5:
          return "fu-status-dot--invisible";
        default:
          return "fu-status-dot--offline";
      }
    });
    return (d, h) => (u(), f("div", {
      class: Y(["fu-avatar", [`fu-avatar--${t.size}`, { "fu-avatar--editable": t.editable }]])
    }, [
      m("div", {
        class: "fu-avatar__wrapper",
        onClick: o
      }, [
        t.src ? (u(), f("img", {
          key: 0,
          src: t.src,
          alt: t.alt,
          class: "fu-avatar__image"
        }, null, 8, ol)) : (u(), f("span", sl, S(r.value), 1)),
        t.editable ? (u(), f("span", ll, " Edit ")) : w("", !0),
        t.editable && t.src && t.allowRemove ? (u(), f("button", {
          key: 3,
          class: "fu-avatar__remove",
          onClick: ue(l, ["stop"]),
          "aria-label": "Remove photo"
        }, " × ")) : w("", !0),
        t.showStatus && t.status !== void 0 ? (u(), f("span", {
          key: 4,
          class: Y(["fu-status-dot", c.value])
        }, null, 2)) : w("", !0),
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
}), Qe = /* @__PURE__ */ X(ul, [["__scopeId", "data-v-51778eaa"]]), cl = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Qe
}, Symbol.toStringTag, { value: "Module" })), dl = { class: "edf-container" }, fl = {
  key: 0,
  class: "edf-label"
}, ml = { class: "edf-text" }, hl = /* @__PURE__ */ oe({
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
    return (r, o) => (u(), f("div", dl, [
      t.label ? (u(), f("label", fl, S(t.label), 1)) : w("", !0),
      m("div", {
        class: Y(["edf-wrapper", [`edf--${t.variant}`]]),
        onMouseenter: o[0] || (o[0] = (s) => a.value = !0),
        onMouseleave: o[1] || (o[1] = (s) => a.value = !1),
        ref: "container"
      }, [
        t.avatarSrc || t.avatarName ? (u(), K(Qe, {
          key: 0,
          src: t.avatarSrc,
          name: t.avatarName,
          size: "xs",
          "show-status": !1,
          class: "edf-avatar"
        }, null, 8, ["src", "name"])) : w("", !0),
        m("span", ml, S(t.text), 1),
        a.value ? (u(), K($e, {
          key: 1,
          class: "edf-edit-btn",
          icon: ie(yr),
          size: "sm",
          variant: "subtle",
          onClick: i
        }, null, 8, ["icon"])) : w("", !0)
      ], 34)
    ]));
  }
}), vl = /* @__PURE__ */ X(hl, [["__scopeId", "data-v-f0200fd3"]]), pl = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: vl
}, Symbol.toStringTag, { value: "Module" })), gl = ["for"], yl = {
  key: 0,
  class: "fu-input-required"
}, bl = {
  key: 0,
  class: "fu-input-icon fu-input-icon--left"
}, Al = {
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
}, Cl = ["id", "name", "type", "placeholder", "disabled", "required", "aria-invalid", "aria-describedby", "inputmode", "min", "max", "step"], wl = {
  key: 2,
  class: "fu-input-icon fu-input-icon--right"
}, _l = ["id"], Sl = /* @__PURE__ */ oe({
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
  setup(t, { emit: e }) {
    const n = t, a = e, i = P(() => n.type === "search");
    function r() {
      p.value = "", a("update:modelValue", "");
    }
    const o = `fu-input-${Math.random().toString(36).slice(2, 9)}`, s = P(() => n.id || o), l = P(() => n.name || s.value), c = P(() => {
      if (n.mask === "phone" || n.mask === "card") return "numeric";
      if (n.mask === "currency") return "decimal";
      if (n.type === "number") return "numeric";
    });
    function d(v) {
      if (!n.mask) return v;
      switch (n.mask) {
        case "phone":
          return v.replace(/\D/g, "").slice(0, 11).replace(/^(\d{5})(\d{0,6})$/, (g, b, A) => A ? `${b} ${A}` : b);
        case "card":
          return v.replace(/\D/g, "").slice(0, 16).replace(/(\d{4})(?=\d)/g, "$1 ");
        case "currency": {
          const g = v.replace(/[^\d.]/g, "").split("."), b = g[0] || "", A = g.length > 1 ? "." + g[1].slice(0, 2) : "";
          return (b ? new Intl.NumberFormat("en-GB").format(Number(b)) : "") + A;
        }
        case "custom": {
          if (!n.maskPattern) return v;
          const y = v.replace(/\D/g, "");
          let g = 0;
          return n.maskPattern.replace(/#/g, () => y[g++] || "");
        }
        default:
          return v;
      }
    }
    function h(v) {
      return n.mask ? n.mask === "currency" ? v.replace(/[^\d.]/g, "") : v.replace(/\D/g, "") : v;
    }
    const p = N(d(String(n.modelValue ?? "")));
    return ve(
      () => n.modelValue,
      (v) => {
        const y = d(String(v ?? ""));
        y !== p.value && (p.value = y);
      }
    ), ve(p, (v) => {
      const y = d(String(v));
      if (y !== v) {
        p.value = y;
        return;
      }
      a("update:modelValue", h(y));
    }), (v, y) => (u(), f("div", {
      class: "fu-input-wrapper",
      style: ne({ width: t.formWrapperWidth })
    }, [
      t.label ? (u(), f("label", {
        key: 0,
        class: "fu-input-label",
        for: s.value
      }, [
        de(S(t.label) + " ", 1),
        t.required ? (u(), f("span", yl, "*")) : w("", !0)
      ], 8, gl)) : w("", !0),
      m("div", {
        class: Y(["fu-input-container", [`fu-input--${t.size}`, `fu-input--${t.variant}`, { "fu-input--error": t.error }]])
      }, [
        v.$slots.left || i.value ? (u(), f("div", bl, [
          v.$slots.left ? re(v.$slots, "left", { key: 0 }, void 0, !0) : (u(), f("svg", Al, [...y[1] || (y[1] = [
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
        ])) : w("", !0),
        je(m("input", Ot(v.$attrs, {
          class: "fu-input",
          id: s.value,
          name: l.value,
          type: i.value ? "text" : t.type,
          placeholder: t.placeholder,
          disabled: t.disabled,
          required: t.required,
          "aria-invalid": !!t.error,
          "aria-describedby": t.error ? `${s.value}-error` : void 0,
          inputmode: c.value,
          min: t.type === "number" ? t.min : void 0,
          max: t.type === "number" ? t.max : void 0,
          step: t.type === "number" ? t.step : void 0,
          "onUpdate:modelValue": y[0] || (y[0] = (g) => p.value = g)
        }), null, 16, Cl), [
          [mr, p.value]
        ]),
        i.value && p.value ? (u(), f("div", {
          key: 1,
          class: "fu-input-icon fu-input-icon--right fu-input-clear",
          onClick: r
        }, [...y[2] || (y[2] = [
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
        ])])) : v.$slots.right ? (u(), f("div", wl, [
          re(v.$slots, "right", {}, void 0, !0)
        ])) : w("", !0)
      ], 2),
      t.error ? (u(), f("span", {
        key: 1,
        class: "fu-input-error",
        id: `${s.value}-error`
      }, S(t.error), 9, _l)) : w("", !0)
    ], 4));
  }
}), Ie = /* @__PURE__ */ X(Sl, [["__scopeId", "data-v-896e14b9"]]), Tl = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Ie
}, Symbol.toStringTag, { value: "Module" })), kl = ["onClick", "disabled"], El = { class: "fu-accordion__header-content" }, Ml = { class: "fu-accordion__body" }, Nl = /* @__PURE__ */ oe({
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
    return (r, o) => (u(), f("div", {
      class: Y(["fu-accordion", [`fu-accordion--${t.theme}`]])
    }, [
      (u(!0), f(B, null, ae(t.items, (s) => (u(), f("div", {
        key: s.key,
        class: "fu-accordion__item"
      }, [
        m("button", {
          class: Y(["fu-accordion__header", {
            "is-open": a(s.key),
            "is-disabled": s.disabled
          }]),
          onClick: (l) => i(s.key),
          disabled: s.disabled
        }, [
          m("div", El, [
            s.icon ? (u(), K(be(s.icon), {
              key: 0,
              size: 16,
              class: "fu-accordion__icon"
            })) : w("", !0),
            m("span", null, S(s.title), 1)
          ]),
          (u(), f("svg", {
            class: Y(["fu-accordion__chevron", { "is-open": a(s.key) }]),
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
        ], 10, kl),
        je(m("div", Ml, [
          re(r.$slots, s.key, {}, void 0, !0)
        ], 512), [
          [Ca, a(s.key)]
        ])
      ]))), 128))
    ], 2));
  }
}), Dl = /* @__PURE__ */ X(Nl, [["__scopeId", "data-v-f069f986"]]), Il = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Dl
}, Symbol.toStringTag, { value: "Module" })), Ol = {
  key: 0,
  class: "fu-status-dropdown__label-text"
}, Rl = { key: 1 }, xl = {
  key: 0,
  class: "flex"
}, Pl = ["onClick"], $l = {
  key: 1,
  class: "fu-placeholder"
}, Fl = {
  key: 1,
  class: "flex flex--center flex--gap-md"
}, Bl = {
  key: 2,
  class: "fu-status-dropdown__input-trigger"
}, zl = {
  key: 0,
  class: "fu-search-wrapper"
}, Ll = {
  key: 1,
  class: "fu-options-scroll scrollbar__control customScrollBar"
}, Hl = ["onClick"], Vl = { class: "fu-item-content" }, jl = { class: "fu-item-label" }, Ul = {
  key: 0,
  class: "fu-item-meta"
}, Wl = {
  key: 2,
  class: "fu-status-dropdown__empty"
}, Yl = {
  key: 3,
  class: "fu-input-error"
}, Gl = /* @__PURE__ */ oe({
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
    loading: { type: Boolean, default: !1 },
    meta: { default: "" }
  },
  emits: ["update:modelValue", "search"],
  setup(t, { emit: e }) {
    const n = t, a = e, i = N(!1), r = N(""), o = N(null), s = N(null), l = N(null), c = N(null), d = N({}), h = N(null), p = N([]), v = P(() => n.async === !0);
    ve(
      () => n.modelValue,
      (k) => {
        n.multiple && Array.isArray(k) ? p.value = k : h.value = k;
      },
      { immediate: !0 }
    ), ve(r, (k) => {
      v.value && (k.length < n.minSearchLength || a("search", k));
    });
    const y = P(() => v.value || !r.value ? n.options : n.options.filter(
      (k) => k.label.toLowerCase().includes(r.value.toLowerCase())
    ));
    function g() {
      const k = o.value?.querySelector("button, input");
      if (!k) return;
      const F = k.getBoundingClientRect();
      d.value = {
        position: "fixed",
        top: `${F.bottom + 4}px`,
        left: `${F.left}px`,
        width: `${F.width}px`,
        zIndex: "9999"
      };
    }
    function b() {
      i.value = !i.value, i.value && ye(() => {
        g(), n.searchable && ye(() => {
          const k = c.value?.$el?.querySelector("input") || s.value?.querySelector("input");
          k?.focus(), k?.select();
        });
      });
    }
    function A(k) {
      if (n.multiple) {
        const F = p.value.find((O) => O.value === k.value);
        p.value = F ? p.value.filter((O) => O.value !== k.value) : [...p.value, k], a("update:modelValue", p.value);
      } else
        h.value = k, a("update:modelValue", k), i.value = !1;
    }
    function C(k) {
      p.value = p.value.filter((F) => F.value !== k.value), a("update:modelValue", p.value);
    }
    function E(k) {
      o.value?.contains(k.target) || s.value?.contains(k.target) || (i.value = !1);
    }
    function M(k) {
      if (!i.value) return;
      const F = k.target;
      s.value?.contains(F) || s.value === F || (i.value = !1);
    }
    return Te(() => {
      document.addEventListener("click", E), window.addEventListener("scroll", M, { passive: !0 });
    }), Ce(() => {
      document.removeEventListener("click", E), window.removeEventListener("scroll", M);
    }), (k, F) => (u(), f("div", {
      class: "fu-status-dropdown",
      ref_key: "dropdownRef",
      ref: o
    }, [
      t.label ? (u(), f("div", Ol, S(t.label), 1)) : w("", !0),
      t.variant === "button" ? (u(), f("div", Rl, [
        m("button", {
          class: Y(["fu-status-dropdown__button", [`fu-input--${t.size}`, { "fu-input--error": t.error }]]),
          onClick: b
        }, [
          t.multiple ? (u(), f("div", xl, [
            p.value.length ? (u(!0), f(B, { key: 0 }, ae(p.value, (O) => (u(), f("span", {
              key: O.value,
              class: "fu-tag"
            }, [
              O.type === "icon" ? (u(), K(be(O.icon), {
                key: 0,
                size: "14"
              })) : O.type === "image" ? (u(), K(Qe, {
                key: 1,
                src: O.imageUrl,
                name: O.label,
                size: "xs"
              }, null, 8, ["src", "name"])) : w("", !0),
              de(" " + S(O.label) + " ", 1),
              m("span", {
                class: "fu-tag__remove",
                onClick: ue((j) => C(O), ["stop"])
              }, "×", 8, Pl)
            ]))), 128)) : (u(), f("span", $l, S(t.placeholder), 1))
          ])) : (u(), f("div", Fl, [
            h.value?.type === "icon" ? (u(), K(be(h.value.icon), {
              key: 0,
              size: "16"
            })) : h.value?.type === "image" ? (u(), K(Qe, {
              key: 1,
              src: h.value.imageUrl,
              name: h.value.label,
              size: "xs"
            }, null, 8, ["src", "name"])) : w("", !0),
            m("span", null, S(h.value?.label || t.placeholder), 1)
          ])),
          F[2] || (F[2] = m("svg", {
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
      ])) : (u(), f("div", Bl, [
        G(Ie, {
          size: t.size,
          readonly: "",
          variant: "outline",
          formWrapperWidth: t.formWrapperWidth,
          placeholder: h.value?.label || t.placeholder,
          onFocus: b,
          onClick: b
        }, null, 8, ["size", "formWrapperWidth", "placeholder"])
      ])),
      (u(), K(ke, { to: "body" }, [
        G(He, { name: "fade" }, {
          default: ce(() => [
            i.value ? (u(), f("div", {
              key: 0,
              class: "fu-status-dropdown__menu",
              style: ne(d.value),
              ref_key: "menuRef",
              ref: s
            }, [
              t.searchable ? (u(), f("div", zl, [
                G(Ie, {
                  ref_key: "searchInputRef",
                  ref: c,
                  modelValue: r.value,
                  "onUpdate:modelValue": F[1] || (F[1] = (O) => r.value = O),
                  type: "text",
                  placeholder: t.searchPlaceholder,
                  size: t.size,
                  formWrapperWidth: "100%"
                }, {
                  right: ce(() => [
                    m("button", {
                      class: "fu-search-clear",
                      onClick: F[0] || (F[0] = (O) => r.value ? r.value = "" : i.value = !1)
                    }, " × ")
                  ]),
                  _: 1
                }, 8, ["modelValue", "placeholder", "size"])
              ])) : w("", !0),
              y.value.length ? (u(), f("div", Ll, [
                (u(!0), f(B, null, ae(y.value, (O) => (u(), f("div", {
                  key: O.value,
                  class: "fu-status-dropdown__item",
                  onClick: (j) => A(O)
                }, [
                  O.type === "icon" ? (u(), K(be(O.icon), {
                    key: 0,
                    size: "16"
                  })) : O.type === "image" ? (u(), K(Qe, {
                    key: 1,
                    src: O.imageUrl,
                    name: O.label,
                    size: "xs"
                  }, null, 8, ["src", "name"])) : w("", !0),
                  m("div", Vl, [
                    m("span", jl, S(O.label), 1),
                    t.meta && O[t.meta] ? (u(), f("span", Ul, S(O[t.meta]), 1)) : w("", !0)
                  ])
                ], 8, Hl))), 128)),
                m("div", {
                  class: "fu-status-dropdown__slot-actions",
                  ref_key: "actionsRef",
                  ref: l
                }, [
                  re(k.$slots, "actions")
                ], 512)
              ])) : (u(), f("div", Wl, S(t.noResultsText), 1))
            ], 4)) : w("", !0)
          ]),
          _: 3
        })
      ])),
      t.error ? (u(), f("span", Yl, S(t.error), 1)) : w("", !0)
    ], 512));
  }
}), Kl = /* @__PURE__ */ X(Gl, [["__scopeId", "data-v-acde5031"]]), ql = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Kl
}, Symbol.toStringTag, { value: "Module" })), Ql = /* @__PURE__ */ oe({
  __name: "FuAvatarGroup",
  props: {
    users: {},
    max: {},
    size: {}
  },
  emits: ["click"],
  setup(t) {
    const e = t, n = e.max ?? 3, a = e.users.slice(0, n), i = e.users.length - n;
    return (r, o) => (u(), f("div", {
      class: "fu-avatar-group",
      onClick: o[0] || (o[0] = (s) => r.$emit("click"))
    }, [
      (u(!0), f(B, null, ae(ie(a), (s, l) => (u(), K(Qe, {
        key: s.id || l,
        src: s.src,
        name: s.name,
        alt: s.alt,
        size: t.size
      }, null, 8, ["src", "name", "alt", "size"]))), 128)),
      i > 0 ? (u(), f("div", {
        key: 0,
        class: Y(["fu-avatar fu-avatar--more", `fu-avatar--${t.size}`])
      }, " +" + S(i), 2)) : w("", !0)
    ]));
  }
}), Zl = /* @__PURE__ */ X(Ql, [["__scopeId", "data-v-d339fd2f"]]), Jl = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Zl
}, Symbol.toStringTag, { value: "Module" })), Xl = /* @__PURE__ */ oe({
  __name: "FusionBadge",
  props: {
    text: { default: "Badge" },
    size: { default: "md" },
    variant: { default: "solid" },
    themeClass: { default: "" }
  },
  setup(t) {
    return (e, n) => (u(), f("span", {
      class: Y(["fu-badge", [`fu-badge--${t.variant}`, `fu-badge--${t.size}`, t.themeClass]])
    }, [
      re(e.$slots, "default", {}, () => [
        de(S(t.text), 1)
      ], !0)
    ], 2));
  }
}), eu = /* @__PURE__ */ X(Xl, [["__scopeId", "data-v-b42fd659"]]), tu = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: eu
}, Symbol.toStringTag, { value: "Module" })), nu = {
  key: 0,
  class: "fu-spinner"
}, au = { key: 2 }, iu = { key: 3 }, ru = /* @__PURE__ */ oe({
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
    return (r, o) => (u(), f("div", {
      class: Y(["fu-btn-wrapper", { "has-tooltip": t.tooltip }]),
      style: ne(t.buttonWidth ? { width: t.buttonWidth } : {}),
      onMouseenter: a,
      onMouseleave: i
    }, [
      (u(), K(be(t.link ? "a" : "button"), {
        class: Y(["fu-btn", [`fu-btn--${t.variant}`, `fu-btn--${t.size}`, { "is-loading": t.loading }]]),
        href: t.link || void 0,
        target: t.link ? t.target : void 0,
        rel: t.link && t.target === "_blank" ? "noopener noreferrer" : void 0,
        disabled: !t.link && (t.disabled || t.loading),
        onClick: o[0] || (o[0] = (s) => !t.link && !t.loading ? r.$emit("click", s) : null),
        style: ne(t.buttonWidth ? { width: t.buttonWidth } : {})
      }, {
        default: ce(() => [
          t.loading ? (u(), f("span", nu)) : w("", !0),
          t.icon ? (u(), K(be(t.icon), {
            key: 1,
            class: "fu-btn-icon",
            size: 16
          })) : w("", !0),
          t.loading ? (u(), f("span", au, S(t.loadingText || "Loading..."), 1)) : (u(), f("span", iu, [
            re(r.$slots, "default", {}, () => [
              de(S(t.text), 1)
            ], !0)
          ]))
        ]),
        _: 3
      }, 8, ["class", "href", "target", "rel", "disabled", "style"])),
      (u(), K(ke, { to: "body" }, [
        t.tooltip && e.value ? (u(), f("span", {
          key: 0,
          class: "fu-btn-tooltip",
          style: ne(n.value)
        }, S(t.tooltip), 5)) : w("", !0)
      ]))
    ], 38));
  }
}), De = /* @__PURE__ */ X(ru, [["__scopeId", "data-v-d6df7556"]]), ou = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: De
}, Symbol.toStringTag, { value: "Module" })), su = {
  key: 0,
  class: "icon-box"
}, lu = { class: "content" }, uu = { class: "value" }, cu = { class: "subtitle" }, du = {
  key: 0,
  class: "caption"
}, fu = { class: "title" }, mu = { class: "value" }, hu = {
  key: 0,
  class: "caption"
}, vu = /* @__PURE__ */ oe({
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
    return (e, n) => (u(), f("div", {
      class: Y(["fu-stat-card", [
        `variant-${t.variant}`,
        t.bordered ? "bordered" : "",
        t.shadow ? "shadow" : "",
        t.loading ? "is-loading" : ""
      ]])
    }, [
      t.loading ? (u(), f(B, { key: 0 }, [
        t.variant === "icon-left" ? (u(), f(B, { key: 0 }, [
          n[0] || (n[0] = hr('<div class="skeleton-icon" data-v-5fd69633></div><div class="skeleton-content" data-v-5fd69633><div class="skeleton-line skeleton-value" data-v-5fd69633></div><div class="skeleton-line skeleton-subtitle" data-v-5fd69633></div><div class="skeleton-line skeleton-caption" data-v-5fd69633></div></div>', 2))
        ], 64)) : (u(), f(B, { key: 1 }, [
          n[1] || (n[1] = m("div", { class: "skeleton-line skeleton-title" }, null, -1)),
          n[2] || (n[2] = m("div", { class: "skeleton-line skeleton-value--lg" }, null, -1)),
          n[3] || (n[3] = m("div", { class: "skeleton-line skeleton-caption" }, null, -1))
        ], 64))
      ], 64)) : t.variant === "icon-left" ? (u(), f(B, { key: 1 }, [
        t.icon ? (u(), f("div", su, [
          (u(), K(be(t.icon), { class: "fu-icon" }))
        ])) : w("", !0),
        m("div", lu, [
          m("div", uu, S(t.value), 1),
          m("div", cu, S(t.title), 1),
          t.subtitle ? (u(), f("div", du, S(t.subtitle), 1)) : w("", !0)
        ])
      ], 64)) : (u(), f(B, { key: 2 }, [
        m("div", fu, S(t.title), 1),
        m("div", mu, S(t.value), 1),
        t.subtitle ? (u(), f("div", hu, S(t.subtitle), 1)) : w("", !0)
      ], 64))
    ], 2));
  }
}), pu = /* @__PURE__ */ X(vu, [["__scopeId", "data-v-5fd69633"]]), gu = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: pu
}, Symbol.toStringTag, { value: "Module" })), yu = ["for"], bu = ["id", "checked", "disabled"], Au = {
  key: 0,
  class: "fu-checkbox__label"
}, Cu = /* @__PURE__ */ oe({
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
    return (e, n) => (u(), f("label", {
      class: Y(["fu-checkbox", [`fu-checkbox--${t.size}`, { "fu-checkbox--disabled": t.disabled }]]),
      for: t.id
    }, [
      m("input", {
        type: "checkbox",
        class: "fu-checkbox__input",
        id: t.id,
        checked: t.modelValue,
        disabled: t.disabled,
        onChange: n[0] || (n[0] = (a) => e.$emit("update:modelValue", a.target.checked))
      }, null, 40, bu),
      n[1] || (n[1] = m("span", { class: "fu-checkbox__box" }, null, -1)),
      t.label ? (u(), f("span", Au, S(t.label), 1)) : w("", !0)
    ], 10, yu));
  }
}), Rt = /* @__PURE__ */ X(Cu, [["__scopeId", "data-v-42f5b26b"]]), wu = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Rt
}, Symbol.toStringTag, { value: "Module" })), _u = {
  key: 0,
  class: "fu-input-label"
}, Su = {
  key: 0,
  class: "fu-input-required"
}, Tu = ["onUpdate:modelValue", "onInput", "onKeydown", "disabled"], ku = {
  key: 1,
  class: "fu-input-error"
}, Eu = /* @__PURE__ */ oe({
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
      i.value[c] = p, p && c < n.length - 1 && ye(() => r.value[c + 1]?.focus());
    }
    function s(c) {
      !i.value[c] && c > 0 && ye(() => r.value[c - 1]?.focus());
    }
    function l(c) {
      c.preventDefault();
      const h = (c.clipboardData?.getData("text") || "").replace(/\D/g, "").slice(0, n.length).split("");
      if (h.length !== 0) {
        h.forEach((p, v) => {
          i.value[v] = p;
        });
        for (let p = h.length; p < n.length; p++)
          i.value[p] = "";
        ye(() => {
          const p = Math.min(h.length - 1, n.length - 1);
          r.value[p]?.focus();
        });
      }
    }
    return (c, d) => (u(), f("div", {
      class: "fu-input-wrapper",
      style: ne({ width: t.formWrapperWidth })
    }, [
      t.label ? (u(), f("label", _u, [
        de(S(t.label) + " ", 1),
        t.required ? (u(), f("span", Su, "*")) : w("", !0)
      ])) : w("", !0),
      m("div", {
        class: Y(["fu-code-container", [`fu-input--${t.size}`, `fu-input--${t.variant}`, { "fu-input--error": t.error }]])
      }, [
        (u(!0), f(B, null, ae(i.value, (h, p) => je((u(), f("input", {
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
          onKeydown: ze((v) => s(p), ["backspace"]),
          onPaste: l,
          disabled: t.disabled
        }, null, 40, Tu)), [
          [nt, i.value[p]]
        ])), 128))
      ], 2),
      t.error ? (u(), f("span", ku, S(t.error), 1)) : w("", !0)
    ], 4));
  }
}), Mu = /* @__PURE__ */ X(Eu, [["__scopeId", "data-v-aa788ef2"]]), Nu = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Mu
}, Symbol.toStringTag, { value: "Module" })), Du = ["onKeydown"], Iu = { class: "fu-controls" }, Ou = { class: "fu-sliders" }, Ru = ["value"], xu = /* @__PURE__ */ oe({
  __name: "FuColorPopover",
  props: {
    modelValue: {},
    size: {}
  },
  emits: ["update:modelValue"],
  setup(t, { emit: e }) {
    const n = t, a = e, i = P(() => n.size ?? "md"), r = N(!1), o = N(null), s = N({ top: "0px", left: "0px" });
    function l() {
      r.value = !r.value, r.value && ye(c);
    }
    function c() {
      if (!o.value) return;
      const _ = o.value.getBoundingClientRect(), T = 260, D = 320, H = 8;
      let V = _.bottom + 6, J = _.left, ee = "top left";
      J + T > window.innerWidth - H && (J = _.right - T, ee = "top right"), J = Math.max(H, J), V + D > window.innerHeight - H && (V = _.top - D - 6, ee = ee.includes("right") ? "bottom right" : "bottom left"), V = Math.max(H, V), s.value = {
        top: `${V + window.scrollY}px`,
        left: `${J + window.scrollX}px`,
        transformOrigin: ee
      };
    }
    function d(_) {
      if (!r.value) return;
      const T = _.target;
      o.value?.contains(T) || T.closest(".fu-color-popover") || (r.value = !1);
    }
    Te(() => {
      window.addEventListener("mousedown", d), window.addEventListener("resize", c), n.modelValue && (g.value = n.modelValue, te(n.modelValue));
    }), Ce(() => {
      window.removeEventListener("mousedown", d), window.removeEventListener("resize", c);
    });
    const h = N("hex"), p = N(0), v = N(100), y = N(100), g = N(""), b = N(!1);
    function A(_, T, D) {
      T /= 100, D /= 100;
      const H = D * T, V = H * (1 - Math.abs(_ / 60 % 2 - 1)), J = D - H;
      let ee = 0, z = 0, q = 0;
      return _ < 60 ? [ee, z, q] = [H, V, 0] : _ < 120 ? [ee, z, q] = [V, H, 0] : _ < 180 ? [ee, z, q] = [0, H, V] : _ < 240 ? [ee, z, q] = [0, V, H] : _ < 300 ? [ee, z, q] = [V, 0, H] : [ee, z, q] = [H, 0, V], {
        r: Math.round((ee + J) * 255),
        g: Math.round((z + J) * 255),
        b: Math.round((q + J) * 255)
      };
    }
    function C(_, T, D) {
      _ /= 255, T /= 255, D /= 255;
      const H = Math.max(_, T, D), V = Math.min(_, T, D), J = H - V;
      let ee = 0;
      return J && (H === _ ? ee = (T - D) / J % 6 : H === T ? ee = (D - _) / J + 2 : ee = (_ - T) / J + 4, ee *= 60, ee < 0 && (ee += 360)), {
        h: Math.round(ee),
        s: Math.round((H === 0 ? 0 : J / H) * 100),
        v: Math.round(H * 100)
      };
    }
    function E(_, T, D) {
      return "#" + [_, T, D].map((H) => H.toString(16).padStart(2, "0")).join("").toUpperCase();
    }
    function M(_, T, D) {
      return `rgb(${_}, ${T}, ${D})`;
    }
    const k = P(() => A(p.value, v.value, y.value)), F = P(() => E(k.value.r, k.value.g, k.value.b)), O = P(() => ({
      background: `linear-gradient(to top, black, transparent), linear-gradient(to right, white, hsl(${p.value}, 100%, 50%))`
    }));
    function j() {
      const { r: _, g: T, b: D } = k.value;
      a(
        "update:modelValue",
        h.value === "rgb" ? M(_, T, D) : F.value
      );
    }
    function te(_) {
      const T = _.trim().replace(/;$/, "");
      let D = null;
      /^#([0-9a-f]{6})$/i.test(T) && (h.value = "hex", D = {
        r: parseInt(T.slice(1, 3), 16),
        g: parseInt(T.slice(3, 5), 16),
        b: parseInt(T.slice(5, 7), 16)
      });
      const H = T.match(/^rgba?\((\d{1,3}),\s*(\d{1,3}),\s*(\d{1,3})/);
      if (H && (h.value = "rgb", D = { r: +H[1], g: +H[2], b: +H[3] }), !D) return;
      const V = C(D.r, D.g, D.b);
      p.value = V.h, v.value = V.s, y.value = V.v, j();
    }
    function U(_) {
      b.value = !0, g.value = _.target.value;
    }
    function Z() {
      b.value = !1, te(g.value);
    }
    function L(_) {
      _.key === "Enter" && Z();
    }
    function I(_) {
      h.value = "hex";
      const D = _.currentTarget.getBoundingClientRect();
      v.value = Math.round(
        Math.min(Math.max(0, _.clientX - D.left), D.width) / D.width * 100
      ), y.value = Math.round(
        100 - Math.min(Math.max(0, _.clientY - D.top), D.height) / D.height * 100
      ), j();
    }
    return ve(
      () => n.modelValue,
      (_) => {
        _ && (g.value = _, te(_));
      }
    ), (_, T) => (u(), f(B, null, [
      m("div", {
        ref_key: "triggerRef",
        ref: o,
        class: Y(["fu-color-trigger", `fu-color-trigger--${i.value}`]),
        style: ne({ backgroundColor: F.value }),
        role: "button",
        tabindex: "0",
        onClick: l,
        onKeydown: [
          ze(ue(l, ["prevent"]), ["enter"]),
          ze(ue(l, ["prevent"]), ["space"])
        ]
      }, [
        re(_.$slots, "trigger", {}, void 0, !0)
      ], 46, Du),
      (u(), K(ke, { to: "body" }, [
        r.value ? (u(), f("div", {
          key: 0,
          class: "fu-color-popover",
          style: ne(s.value)
        }, [
          m("div", {
            class: "fu-saturation",
            style: ne(O.value),
            onPointerdown: I,
            onPointermove: T[0] || (T[0] = (D) => D.buttons === 1 && I(D))
          }, [
            m("div", {
              class: "fu-cursor",
              style: ne({ left: v.value + "%", top: 100 - y.value + "%" })
            }, null, 4)
          ], 36),
          m("div", Iu, [
            m("div", {
              class: "fu-preview",
              style: ne({ backgroundColor: F.value })
            }, null, 4),
            m("div", Ou, [
              je(m("input", {
                type: "range",
                min: "0",
                max: "360",
                "onUpdate:modelValue": T[1] || (T[1] = (D) => p.value = D),
                class: "fu-hue"
              }, null, 512), [
                [nt, p.value]
              ])
            ])
          ]),
          m("input", {
            class: "fu-output",
            value: g.value,
            onInput: U,
            onBlur: Z,
            onKeydown: L,
            placeholder: "#RRGGBB or rgb(...)"
          }, null, 40, Ru)
        ], 4)) : w("", !0)
      ]))
    ], 64));
  }
}), Pu = /* @__PURE__ */ X(xu, [["__scopeId", "data-v-40795315"]]), $u = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Pu
}, Symbol.toStringTag, { value: "Module" })), Fu = { class: "fu-combobox__control" }, Bu = ["value", "placeholder", "disabled"], zu = {
  key: 0,
  class: "fu-combobox__dropdown scrollbar__control customScrollBar"
}, Lu = { class: "fu-combobox__group-title" }, Hu = ["onClick"], Vu = { class: "fu-combobox__option-left" }, ju = { class: "fu-combobox__option-right" }, Uu = {
  key: 1,
  class: "fu-combobox__empty"
}, Wu = /* @__PURE__ */ oe({
  __name: "FuCombobox",
  props: {
    options: {},
    modelValue: {},
    placeholder: {},
    disabled: { type: Boolean }
  },
  emits: ["update:modelValue"],
  setup(t, { emit: e }) {
    const n = t, a = e, i = N(!1), r = N(""), o = N(null), s = N(null), l = P(() => {
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
        const A = b.group || "Options";
        g[A] || (g[A] = []), g[A].push(b);
      }), Object.entries(g).map(([b, A]) => ({ title: b, items: A }));
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
    return Te(() => {
      document.addEventListener("click", v);
    }), Ce(() => {
      document.removeEventListener("click", v);
    }), (y, g) => (u(), f("div", {
      class: Y(["fu-combobox", { "fu-combobox--disabled": t.disabled }]),
      ref_key: "comboboxRef",
      ref: s
    }, [
      m("div", Fu, [
        m("input", {
          type: "text",
          value: i.value ? r.value : o.value?.label || "",
          placeholder: t.placeholder,
          class: "fu-combobox__input",
          disabled: t.disabled,
          onInput: d,
          onFocus: g[0] || (g[0] = (b) => !t.disabled && (i.value = !0))
        }, null, 40, Bu),
        m("span", {
          class: "fu-combobox__icon",
          onClick: ue(p, ["stop"])
        }, [
          G(ie(Le), {
            size: 18,
            "stroke-width": 1
          })
        ])
      ]),
      i.value && !t.disabled ? (u(), f("div", zu, [
        l.value.length > 0 ? (u(!0), f(B, { key: 0 }, ae(l.value, (b) => (u(), f("div", {
          key: b.title,
          class: "fu-combobox__group"
        }, [
          m("div", Lu, S(b.title), 1),
          (u(!0), f(B, null, ae(b.items, (A) => (u(), f("div", {
            key: A.value,
            class: Y(["fu-combobox__option", {
              "fu-combobox__option--selected": A.value === o.value?.value
            }]),
            onClick: (C) => h(A)
          }, [
            m("div", Vu, [
              re(y.$slots, "option", { option: A }, () => [
                A.icon ? (u(), K(be(A.icon), {
                  key: 0,
                  class: "fu-combobox__option-icon"
                })) : w("", !0),
                m("span", null, S(A.label), 1)
              ], !0)
            ]),
            m("div", ju, [
              A.value === o.value?.value ? (u(), K(ie(pr), {
                key: 0,
                class: "fu-combobox__check"
              })) : w("", !0)
            ])
          ], 10, Hu))), 128))
        ]))), 128)) : (u(), f("div", Uu, "No results found"))
      ])) : w("", !0)
    ], 2));
  }
}), Yu = /* @__PURE__ */ X(Wu, [["__scopeId", "data-v-e8069cc4"]]), Gu = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Yu
}, Symbol.toStringTag, { value: "Module" }));
function Ar(t) {
  return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t;
}
var dn = { exports: {} }, Ku = dn.exports, ti;
function qu() {
  return ti || (ti = 1, (function(t, e) {
    (function(n, a) {
      t.exports = a();
    })(Ku, (function() {
      var n = 1e3, a = 6e4, i = 36e5, r = "millisecond", o = "second", s = "minute", l = "hour", c = "day", d = "week", h = "month", p = "quarter", v = "year", y = "date", g = "Invalid Date", b = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/, A = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g, C = { name: "en", weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"), ordinal: function(_) {
        var T = ["th", "st", "nd", "rd"], D = _ % 100;
        return "[" + _ + (T[(D - 20) % 10] || T[D] || T[0]) + "]";
      } }, E = function(_, T, D) {
        var H = String(_);
        return !H || H.length >= T ? _ : "" + Array(T + 1 - H.length).join(D) + _;
      }, M = { s: E, z: function(_) {
        var T = -_.utcOffset(), D = Math.abs(T), H = Math.floor(D / 60), V = D % 60;
        return (T <= 0 ? "+" : "-") + E(H, 2, "0") + ":" + E(V, 2, "0");
      }, m: function _(T, D) {
        if (T.date() < D.date()) return -_(D, T);
        var H = 12 * (D.year() - T.year()) + (D.month() - T.month()), V = T.clone().add(H, h), J = D - V < 0, ee = T.clone().add(H + (J ? -1 : 1), h);
        return +(-(H + (D - V) / (J ? V - ee : ee - V)) || 0);
      }, a: function(_) {
        return _ < 0 ? Math.ceil(_) || 0 : Math.floor(_);
      }, p: function(_) {
        return { M: h, y: v, w: d, d: c, D: y, h: l, m: s, s: o, ms: r, Q: p }[_] || String(_ || "").toLowerCase().replace(/s$/, "");
      }, u: function(_) {
        return _ === void 0;
      } }, k = "en", F = {};
      F[k] = C;
      var O = "$isDayjsObject", j = function(_) {
        return _ instanceof L || !(!_ || !_[O]);
      }, te = function _(T, D, H) {
        var V;
        if (!T) return k;
        if (typeof T == "string") {
          var J = T.toLowerCase();
          F[J] && (V = J), D && (F[J] = D, V = J);
          var ee = T.split("-");
          if (!V && ee.length > 1) return _(ee[0]);
        } else {
          var z = T.name;
          F[z] = T, V = z;
        }
        return !H && V && (k = V), V || !H && k;
      }, U = function(_, T) {
        if (j(_)) return _.clone();
        var D = typeof T == "object" ? T : {};
        return D.date = _, D.args = arguments, new L(D);
      }, Z = M;
      Z.l = te, Z.i = j, Z.w = function(_, T) {
        return U(_, { locale: T.$L, utc: T.$u, x: T.$x, $offset: T.$offset });
      };
      var L = (function() {
        function _(D) {
          this.$L = te(D.locale, null, !0), this.parse(D), this.$x = this.$x || D.x || {}, this[O] = !0;
        }
        var T = _.prototype;
        return T.parse = function(D) {
          this.$d = (function(H) {
            var V = H.date, J = H.utc;
            if (V === null) return /* @__PURE__ */ new Date(NaN);
            if (Z.u(V)) return /* @__PURE__ */ new Date();
            if (V instanceof Date) return new Date(V);
            if (typeof V == "string" && !/Z$/i.test(V)) {
              var ee = V.match(b);
              if (ee) {
                var z = ee[2] - 1 || 0, q = (ee[7] || "0").substring(0, 3);
                return J ? new Date(Date.UTC(ee[1], z, ee[3] || 1, ee[4] || 0, ee[5] || 0, ee[6] || 0, q)) : new Date(ee[1], z, ee[3] || 1, ee[4] || 0, ee[5] || 0, ee[6] || 0, q);
              }
            }
            return new Date(V);
          })(D), this.init();
        }, T.init = function() {
          var D = this.$d;
          this.$y = D.getFullYear(), this.$M = D.getMonth(), this.$D = D.getDate(), this.$W = D.getDay(), this.$H = D.getHours(), this.$m = D.getMinutes(), this.$s = D.getSeconds(), this.$ms = D.getMilliseconds();
        }, T.$utils = function() {
          return Z;
        }, T.isValid = function() {
          return this.$d.toString() !== g;
        }, T.isSame = function(D, H) {
          var V = U(D);
          return this.startOf(H) <= V && V <= this.endOf(H);
        }, T.isAfter = function(D, H) {
          return U(D) < this.startOf(H);
        }, T.isBefore = function(D, H) {
          return this.endOf(H) < U(D);
        }, T.$g = function(D, H, V) {
          return Z.u(D) ? this[H] : this.set(V, D);
        }, T.unix = function() {
          return Math.floor(this.valueOf() / 1e3);
        }, T.valueOf = function() {
          return this.$d.getTime();
        }, T.startOf = function(D, H) {
          var V = this, J = !!Z.u(H) || H, ee = Z.p(D), z = function(Oe, R) {
            var W = Z.w(V.$u ? Date.UTC(V.$y, R, Oe) : new Date(V.$y, R, Oe), V);
            return J ? W : W.endOf(c);
          }, q = function(Oe, R) {
            return Z.w(V.toDate()[Oe].apply(V.toDate("s"), (J ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(R)), V);
          }, se = this.$W, fe = this.$M, Ae = this.$D, Pe = "set" + (this.$u ? "UTC" : "");
          switch (ee) {
            case v:
              return J ? z(1, 0) : z(31, 11);
            case h:
              return J ? z(1, fe) : z(0, fe + 1);
            case d:
              var Me = this.$locale().weekStart || 0, Fe = (se < Me ? se + 7 : se) - Me;
              return z(J ? Ae - Fe : Ae + (6 - Fe), fe);
            case c:
            case y:
              return q(Pe + "Hours", 0);
            case l:
              return q(Pe + "Minutes", 1);
            case s:
              return q(Pe + "Seconds", 2);
            case o:
              return q(Pe + "Milliseconds", 3);
            default:
              return this.clone();
          }
        }, T.endOf = function(D) {
          return this.startOf(D, !1);
        }, T.$set = function(D, H) {
          var V, J = Z.p(D), ee = "set" + (this.$u ? "UTC" : ""), z = (V = {}, V[c] = ee + "Date", V[y] = ee + "Date", V[h] = ee + "Month", V[v] = ee + "FullYear", V[l] = ee + "Hours", V[s] = ee + "Minutes", V[o] = ee + "Seconds", V[r] = ee + "Milliseconds", V)[J], q = J === c ? this.$D + (H - this.$W) : H;
          if (J === h || J === v) {
            var se = this.clone().set(y, 1);
            se.$d[z](q), se.init(), this.$d = se.set(y, Math.min(this.$D, se.daysInMonth())).$d;
          } else z && this.$d[z](q);
          return this.init(), this;
        }, T.set = function(D, H) {
          return this.clone().$set(D, H);
        }, T.get = function(D) {
          return this[Z.p(D)]();
        }, T.add = function(D, H) {
          var V, J = this;
          D = Number(D);
          var ee = Z.p(H), z = function(fe) {
            var Ae = U(J);
            return Z.w(Ae.date(Ae.date() + Math.round(fe * D)), J);
          };
          if (ee === h) return this.set(h, this.$M + D);
          if (ee === v) return this.set(v, this.$y + D);
          if (ee === c) return z(1);
          if (ee === d) return z(7);
          var q = (V = {}, V[s] = a, V[l] = i, V[o] = n, V)[ee] || 1, se = this.$d.getTime() + D * q;
          return Z.w(se, this);
        }, T.subtract = function(D, H) {
          return this.add(-1 * D, H);
        }, T.format = function(D) {
          var H = this, V = this.$locale();
          if (!this.isValid()) return V.invalidDate || g;
          var J = D || "YYYY-MM-DDTHH:mm:ssZ", ee = Z.z(this), z = this.$H, q = this.$m, se = this.$M, fe = V.weekdays, Ae = V.months, Pe = V.meridiem, Me = function(R, W, Q, me) {
            return R && (R[W] || R(H, J)) || Q[W].slice(0, me);
          }, Fe = function(R) {
            return Z.s(z % 12 || 12, R, "0");
          }, Oe = Pe || function(R, W, Q) {
            var me = R < 12 ? "AM" : "PM";
            return Q ? me.toLowerCase() : me;
          };
          return J.replace(A, (function(R, W) {
            return W || (function(Q) {
              switch (Q) {
                case "YY":
                  return String(H.$y).slice(-2);
                case "YYYY":
                  return Z.s(H.$y, 4, "0");
                case "M":
                  return se + 1;
                case "MM":
                  return Z.s(se + 1, 2, "0");
                case "MMM":
                  return Me(V.monthsShort, se, Ae, 3);
                case "MMMM":
                  return Me(Ae, se);
                case "D":
                  return H.$D;
                case "DD":
                  return Z.s(H.$D, 2, "0");
                case "d":
                  return String(H.$W);
                case "dd":
                  return Me(V.weekdaysMin, H.$W, fe, 2);
                case "ddd":
                  return Me(V.weekdaysShort, H.$W, fe, 3);
                case "dddd":
                  return fe[H.$W];
                case "H":
                  return String(z);
                case "HH":
                  return Z.s(z, 2, "0");
                case "h":
                  return Fe(1);
                case "hh":
                  return Fe(2);
                case "a":
                  return Oe(z, q, !0);
                case "A":
                  return Oe(z, q, !1);
                case "m":
                  return String(q);
                case "mm":
                  return Z.s(q, 2, "0");
                case "s":
                  return String(H.$s);
                case "ss":
                  return Z.s(H.$s, 2, "0");
                case "SSS":
                  return Z.s(H.$ms, 3, "0");
                case "Z":
                  return ee;
              }
              return null;
            })(R) || ee.replace(":", "");
          }));
        }, T.utcOffset = function() {
          return 15 * -Math.round(this.$d.getTimezoneOffset() / 15);
        }, T.diff = function(D, H, V) {
          var J, ee = this, z = Z.p(H), q = U(D), se = (q.utcOffset() - this.utcOffset()) * a, fe = this - q, Ae = function() {
            return Z.m(ee, q);
          };
          switch (z) {
            case v:
              J = Ae() / 12;
              break;
            case h:
              J = Ae();
              break;
            case p:
              J = Ae() / 3;
              break;
            case d:
              J = (fe - se) / 6048e5;
              break;
            case c:
              J = (fe - se) / 864e5;
              break;
            case l:
              J = fe / i;
              break;
            case s:
              J = fe / a;
              break;
            case o:
              J = fe / n;
              break;
            default:
              J = fe;
          }
          return V ? J : Z.a(J);
        }, T.daysInMonth = function() {
          return this.endOf(h).$D;
        }, T.$locale = function() {
          return F[this.$L];
        }, T.locale = function(D, H) {
          if (!D) return this.$L;
          var V = this.clone(), J = te(D, H, !0);
          return J && (V.$L = J), V;
        }, T.clone = function() {
          return Z.w(this.$d, this);
        }, T.toDate = function() {
          return new Date(this.valueOf());
        }, T.toJSON = function() {
          return this.isValid() ? this.toISOString() : null;
        }, T.toISOString = function() {
          return this.$d.toISOString();
        }, T.toString = function() {
          return this.$d.toUTCString();
        }, _;
      })(), I = L.prototype;
      return U.prototype = I, [["$ms", r], ["$s", o], ["$m", s], ["$H", l], ["$W", c], ["$M", h], ["$y", v], ["$D", y]].forEach((function(_) {
        I[_[1]] = function(T) {
          return this.$g(T, _[0], _[1]);
        };
      })), U.extend = function(_, T) {
        return _.$i || (_(T, L, U), _.$i = !0), U;
      }, U.locale = te, U.isDayjs = j, U.unix = function(_) {
        return U(1e3 * _);
      }, U.en = F[k], U.Ls = F, U.p = {}, U;
    }));
  })(dn)), dn.exports;
}
var Qu = qu();
const he = /* @__PURE__ */ Ar(Qu);
var fn = { exports: {} }, Zu = fn.exports, ni;
function Ju() {
  return ni || (ni = 1, (function(t, e) {
    (function(n, a) {
      t.exports = a();
    })(Zu, (function() {
      var n = { LTS: "h:mm:ss A", LT: "h:mm A", L: "MM/DD/YYYY", LL: "MMMM D, YYYY", LLL: "MMMM D, YYYY h:mm A", LLLL: "dddd, MMMM D, YYYY h:mm A" }, a = /(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|Q|YYYY|YY?|ww?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g, i = /\d/, r = /\d\d/, o = /\d\d?/, s = /\d*[^-_:/,()\s\d]+/, l = {}, c = function(b) {
        return (b = +b) + (b > 68 ? 1900 : 2e3);
      }, d = function(b) {
        return function(A) {
          this[b] = +A;
        };
      }, h = [/[+-]\d\d:?(\d\d)?|Z/, function(b) {
        (this.zone || (this.zone = {})).offset = (function(A) {
          if (!A || A === "Z") return 0;
          var C = A.match(/([+-]|\d\d)/g), E = 60 * C[1] + (+C[2] || 0);
          return E === 0 ? 0 : C[0] === "+" ? -E : E;
        })(b);
      }], p = function(b) {
        var A = l[b];
        return A && (A.indexOf ? A : A.s.concat(A.f));
      }, v = function(b, A) {
        var C, E = l.meridiem;
        if (E) {
          for (var M = 1; M <= 24; M += 1) if (b.indexOf(E(M, 0, A)) > -1) {
            C = M > 12;
            break;
          }
        } else C = b === (A ? "pm" : "PM");
        return C;
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
        var A = l.ordinal, C = b.match(/\d+/);
        if (this.day = C[0], A) for (var E = 1; E <= 31; E += 1) A(E).replace(/\[|\]/g, "") === b && (this.day = E);
      }], w: [o, d("week")], ww: [r, d("week")], M: [o, d("month")], MM: [r, d("month")], MMM: [s, function(b) {
        var A = p("months"), C = (p("monthsShort") || A.map((function(E) {
          return E.slice(0, 3);
        }))).indexOf(b) + 1;
        if (C < 1) throw new Error();
        this.month = C % 12 || C;
      }], MMMM: [s, function(b) {
        var A = p("months").indexOf(b) + 1;
        if (A < 1) throw new Error();
        this.month = A % 12 || A;
      }], Y: [/[+-]?\d+/, d("year")], YY: [r, function(b) {
        this.year = c(b);
      }], YYYY: [/\d{4}/, d("year")], Z: h, ZZ: h };
      function g(b) {
        var A, C;
        A = b, C = l && l.formats;
        for (var E = (b = A.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g, (function(U, Z, L) {
          var I = L && L.toUpperCase();
          return Z || C[L] || n[L] || C[I].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g, (function(_, T, D) {
            return T || D.slice(1);
          }));
        }))).match(a), M = E.length, k = 0; k < M; k += 1) {
          var F = E[k], O = y[F], j = O && O[0], te = O && O[1];
          E[k] = te ? { regex: j, parser: te } : F.replace(/^\[|\]$/g, "");
        }
        return function(U) {
          for (var Z = {}, L = 0, I = 0; L < M; L += 1) {
            var _ = E[L];
            if (typeof _ == "string") I += _.length;
            else {
              var T = _.regex, D = _.parser, H = U.slice(I), V = T.exec(H)[0];
              D.call(Z, V), U = U.replace(V, "");
            }
          }
          return (function(J) {
            var ee = J.afternoon;
            if (ee !== void 0) {
              var z = J.hours;
              ee ? z < 12 && (J.hours += 12) : z === 12 && (J.hours = 0), delete J.afternoon;
            }
          })(Z), Z;
        };
      }
      return function(b, A, C) {
        C.p.customParseFormat = !0, b && b.parseTwoDigitYear && (c = b.parseTwoDigitYear);
        var E = A.prototype, M = E.parse;
        E.parse = function(k) {
          var F = k.date, O = k.utc, j = k.args;
          this.$u = O;
          var te = j[1];
          if (typeof te == "string") {
            var U = j[2] === !0, Z = j[3] === !0, L = U || Z, I = j[2];
            Z && (I = j[2]), l = this.$locale(), !U && I && (l = C.Ls[I]), this.$d = (function(H, V, J, ee) {
              try {
                if (["x", "X"].indexOf(V) > -1) return new Date((V === "X" ? 1e3 : 1) * H);
                var z = g(V)(H), q = z.year, se = z.month, fe = z.day, Ae = z.hours, Pe = z.minutes, Me = z.seconds, Fe = z.milliseconds, Oe = z.zone, R = z.week, W = /* @__PURE__ */ new Date(), Q = fe || (q || se ? 1 : W.getDate()), me = q || W.getFullYear(), We = 0;
                q && !se || (We = se > 0 ? se - 1 : W.getMonth());
                var tt, Ye = Ae || 0, Vn = Pe || 0, jn = Me || 0, Un = Fe || 0;
                return Oe ? new Date(Date.UTC(me, We, Q, Ye, Vn, jn, Un + 60 * Oe.offset * 1e3)) : J ? new Date(Date.UTC(me, We, Q, Ye, Vn, jn, Un)) : (tt = new Date(me, We, Q, Ye, Vn, jn, Un), R && (tt = ee(tt).week(R).toDate()), tt);
              } catch {
                return /* @__PURE__ */ new Date("");
              }
            })(F, te, O, C), this.init(), I && I !== !0 && (this.$L = this.locale(I).$L), L && F != this.format(te) && (this.$d = /* @__PURE__ */ new Date("")), l = {};
          } else if (te instanceof Array) for (var _ = te.length, T = 1; T <= _; T += 1) {
            j[1] = te[T - 1];
            var D = C.apply(this, j);
            if (D.isValid()) {
              this.$d = D.$d, this.$L = D.$L, this.init();
              break;
            }
            T === _ && (this.$d = /* @__PURE__ */ new Date(""));
          }
          else M.call(this, k);
        };
      };
    }));
  })(fn)), fn.exports;
}
var Xu = Ju();
const Cr = /* @__PURE__ */ Ar(Xu), ec = { class: "calendar-header" }, tc = { class: "flex flex--gap-sm" }, nc = { key: 0 }, ac = { class: "calendar-weekdays" }, ic = { class: "calendar-days" }, rc = ["onClick"], oc = {
  key: 1,
  class: "calendar-months"
}, sc = ["onClick"], lc = {
  key: 2,
  class: "calendar-years"
}, uc = ["onClick"], cc = { class: "flex flex--space flex--gap-md px-2 pb-2" }, dc = {
  key: 0,
  class: "flex flex--gap-sm"
}, fc = { key: 1 }, mc = {
  key: 3,
  class: "calendar-time"
}, hc = { class: "fu-time-input-wrapper" }, vc = {
  key: 0,
  class: "fu-time-dropdown customScrollBar"
}, pc = ["onMousedown"], St = 12, gc = {
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
    he.extend(Cr);
    const n = t, a = N(!1), i = e, r = N(!1), o = N(null), s = N(null), l = N(null), c = N(he().startOf("month")), d = N(null), h = N({ start: null, end: null }), p = N("00:00"), v = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"], y = [
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
    ], g = N("days"), b = P(
      () => Math.floor(c.value.year() / St) * St
    ), A = P(() => b.value + St - 1), C = P(
      () => Array.from({ length: St }, (R, W) => b.value + W)
    ), E = P(() => {
      const R = c.value.startOf("month").startOf("week"), W = c.value.endOf("month").endOf("week"), Q = [];
      let me = R.clone();
      for (; me.isBefore(W) || me.isSame(W, "day"); )
        Q.push({
          date: me.clone(),
          isCurrentMonth: me.month() === c.value.month()
        }), me = me.add(1, "day");
      return Q;
    });
    function M(R) {
      return !!(n.min && R.isBefore(he(n.min), "day") || n.max && R.isAfter(he(n.max), "day"));
    }
    function k(R) {
      return n.variant === "date-range" ? h.value.start && R.isSame(h.value.start, "day") || h.value.end && R.isSame(h.value.end, "day") : d.value && R.isSame(d.value, "day");
    }
    function F(R) {
      return n.variant === "date-range" && h.value.start && h.value.end && R.isAfter(h.value.start, "day") && R.isBefore(h.value.end, "day");
    }
    function O(R) {
      if (!M(R)) {
        if (n.variant === "date-range") {
          !h.value.start || o.value === "start" ? (h.value.start = R.clone(), h.value.end = null, o.value = "end") : R.isBefore(h.value.start, "day") ? (h.value.end = h.value.start.clone(), h.value.start = R.clone()) : h.value.end = R.clone();
          return;
        }
        d.value = R.clone(), i(
          "update:modelValue",
          n.variant === "date-time" ? d.value.format("YYYY-MM-DDTHH:mm") : d.value.format("YYYY-MM-DD")
        ), U();
      }
    }
    function j() {
      h.value.start && h.value.end && (i("update:modelValue", {
        start: h.value.start.format("YYYY-MM-DD"),
        end: h.value.end.format("YYYY-MM-DD")
      }), U());
    }
    function te(R = null) {
      o.value = R, r.value = !0, n.variant === "date-range" ? h.value.start ? c.value = h.value.start.startOf("month") : c.value = he().startOf("month") : d.value ? c.value = d.value.startOf("month") : c.value = he().startOf("month"), ye(() => {
        I(), window.addEventListener("resize", I), window.addEventListener("click", Z);
      });
    }
    function U() {
      r.value = !1, window.removeEventListener("resize", I), window.removeEventListener("click", Z);
    }
    function Z(R) {
      !s.value?.contains(R.target) && !l.value?.contains(R.target) && U();
    }
    const L = N({
      position: "absolute",
      top: "0px",
      left: "0px",
      zIndex: 9999
    });
    function I() {
      if (!s.value || !l.value) return;
      const R = s.value.getBoundingClientRect(), W = l.value.getBoundingClientRect(), Q = window.innerHeight - R.bottom, me = R.top, We = window.scrollY || window.pageYOffset, tt = window.scrollX || window.pageXOffset;
      let Ye;
      Q < W.height && me > W.height ? Ye = R.top + We - W.height - 6 : Ye = R.bottom + We + 6, L.value = {
        position: "absolute",
        top: `${Ye}px`,
        left: `${R.left + tt}px`,
        zIndex: 9999
      };
    }
    const _ = P(() => d.value ? n.variant === "date-time" ? d.value.format("YYYY-MM-DD HH:mm") : d.value.format("YYYY-MM-DD") : ""), T = P(() => n.variant !== "date-range" ? "" : h.value.start && h.value.end ? `${h.value.start.format(
      "YYYY-MM-DD"
    )} to ${h.value.end.format("YYYY-MM-DD")}` : h.value.start ? `${h.value.start.format("YYYY-MM-DD")} to ...` : ""), D = P(() => `fu-date-picker--${n.variant}`);
    ve(
      () => n.modelValue,
      (R) => {
        if (n.variant !== "date-range") {
          if (typeof R == "string" && R) {
            const W = he(R);
            if (W.isValid()) {
              d.value = W, c.value = W.startOf("month"), n.variant === "date-time" ? p.value = W.format("h:mm A") : p.value = "00:00";
              return;
            }
          }
          (R === null || R === "") && (d.value = null, h.value = { start: null, end: null }, p.value = "00:00");
        }
      },
      { immediate: !0 }
    );
    function H() {
      g.value === "days" ? g.value = "months" : g.value === "months" ? g.value = "years" : g.value = "days";
    }
    function V() {
      g.value === "days" ? c.value = c.value.subtract(1, "month") : g.value === "months" ? c.value = c.value.subtract(1, "year") : c.value = c.value.subtract(St, "year");
    }
    function J() {
      g.value === "days" ? c.value = c.value.add(1, "month") : g.value === "months" ? c.value = c.value.add(1, "year") : c.value = c.value.add(St, "year");
    }
    function ee(R) {
      c.value = c.value.month(R), g.value = "days";
    }
    function z(R) {
      c.value = c.value.year(R), g.value = "months";
    }
    function q() {
      const R = he();
      n.variant === "date-range" ? h.value = { start: R.clone(), end: R.clone() } : (d.value = R.clone(), i(
        "update:modelValue",
        n.variant === "date-time" ? R.format("YYYY-MM-DDTHH:mm") : R.format("YYYY-MM-DD")
      ), U());
    }
    function se() {
      const R = he().add(1, "day");
      n.variant === "date-range" ? h.value = { start: R.clone(), end: R.clone() } : (d.value = R.clone(), i(
        "update:modelValue",
        n.variant === "date-time" ? R.format("YYYY-MM-DDTHH:mm") : R.format("YYYY-MM-DD")
      ), U());
    }
    function fe() {
      d.value = null, h.value = { start: null, end: null }, i(
        "update:modelValue",
        n.variant === "date-range" ? { start: null, end: null } : null
      ), U();
    }
    const Ae = P(() => {
      const R = [];
      for (let W = 0; W < 24; W++)
        for (let Q = 0; Q < 60; Q += 15)
          R.push(he().hour(W).minute(Q).format("h:mm A"));
      return R;
    }), Pe = P(() => {
      if (!p.value) return Ae.value;
      const R = p.value.toLowerCase().replace(/\s+/g, "");
      return Ae.value.filter(
        (W) => W.toLowerCase().replace(/\s+/g, "").startsWith(R)
      );
    });
    function Me() {
      if (!d.value || !p.value) return;
      const R = String(p.value).trim().toLowerCase(), W = he(
        R,
        ["h:mm a", "h:mma", "ha", "h a", "hh:mm a", "H:mm", "HH:mm", "H"],
        !0
      );
      if (!W.isValid()) {
        a.value = !1;
        return;
      }
      d.value = d.value.hour(W.hour()).minute(W.minute()), p.value = d.value.format("h:mm A"), i("update:modelValue", d.value.format("YYYY-MM-DDTHH:mm")), a.value = !1;
    }
    function Fe(R) {
      p.value = R, Me();
    }
    function Oe() {
      setTimeout(() => {
        Me(), a.value = !1;
      }, 120);
    }
    return Ce(() => {
      window.removeEventListener("resize", I), window.removeEventListener("click", Z);
    }), (R, W) => (u(), f("div", {
      class: Y(["fu-date-picker", D.value]),
      ref_key: "pickerRef",
      ref: s,
      style: ne({ width: t.formWrapperWidth })
    }, [
      t.variant !== "date-range" ? (u(), K(Ie, {
        key: 0,
        type: "text",
        modelValue: _.value,
        placeholder: "Select date",
        readonly: "",
        onClick: te,
        formWrapperWidth: t.formWrapperWidth,
        size: t.size,
        error: t.error,
        required: t.required,
        label: t.label,
        disabled: t.disabled
      }, {
        right: ce(() => [
          G(ie(Le))
        ]),
        _: 1
      }, 8, ["modelValue", "formWrapperWidth", "size", "error", "required", "label", "disabled"])) : (u(), K(Ie, {
        key: 1,
        type: "text",
        modelValue: T.value,
        placeholder: "Select date range",
        onClick: te,
        readonly: "",
        formWrapperWidth: t.formWrapperWidth,
        size: t.size,
        error: t.error,
        required: t.required,
        disabled: t.disabled
      }, {
        right: ce(() => [
          G(ie(Le))
        ]),
        _: 1
      }, 8, ["modelValue", "formWrapperWidth", "size", "error", "required", "disabled"])),
      (u(), K(ke, { to: "body" }, [
        r.value ? (u(), f("div", {
          key: 0,
          class: "fu-date-picker__calendar-overlay",
          onClick: ue(U, ["self"])
        }, [
          m("div", {
            class: "fu-date-picker__calendar",
            style: ne(L.value),
            ref_key: "calendarRef",
            ref: l,
            onClick: W[2] || (W[2] = ue(() => {
            }, ["stop"]))
          }, [
            m("div", ec, [
              G(De, {
                variant: "ghost",
                size: "sm",
                icon: ie(Le),
                onClick: H
              }, {
                default: ce(() => [
                  g.value === "days" ? (u(), f(B, { key: 0 }, [
                    de(S(c.value.format("MMMM YYYY")), 1)
                  ], 64)) : g.value === "months" ? (u(), f(B, { key: 1 }, [
                    de(S(c.value.year()), 1)
                  ], 64)) : (u(), f(B, { key: 2 }, [
                    de(S(b.value) + " - " + S(A.value), 1)
                  ], 64))
                ]),
                _: 1
              }, 8, ["icon"]),
              m("div", tc, [
                G($e, {
                  icon: ie(qt),
                  size: "sm",
                  onClick: V
                }, null, 8, ["icon"]),
                G($e, {
                  icon: ie(Qt),
                  size: "sm",
                  onClick: J
                }, null, 8, ["icon"])
              ])
            ]),
            g.value === "days" ? (u(), f("div", nc, [
              m("div", ac, [
                (u(), f(B, null, ae(v, (Q) => m("div", {
                  key: Q,
                  class: "calendar-weekday"
                }, S(Q), 1)), 64))
              ]),
              m("div", ic, [
                (u(!0), f(B, null, ae(E.value, (Q) => (u(), f("div", {
                  key: Q.date.toString(),
                  class: Y(["calendar-day", {
                    "calendar-day--other-month": !Q.isCurrentMonth,
                    "calendar-day--selected": k(Q.date),
                    "calendar-day--in-range": F(Q.date),
                    "calendar-day--disabled": M(Q.date)
                  }]),
                  onClick: (me) => O(Q.date)
                }, S(Q.date.date()), 11, rc))), 128))
              ])
            ])) : g.value === "months" ? (u(), f("div", oc, [
              (u(), f(B, null, ae(y, (Q, me) => m("div", {
                key: Q,
                class: Y(["calendar-month", { "calendar-month--selected": me === c.value.month() }]),
                onClick: (We) => ee(me)
              }, S(Q), 11, sc)), 64))
            ])) : (u(), f("div", lc, [
              (u(!0), f(B, null, ae(C.value, (Q) => (u(), f("div", {
                key: Q,
                class: Y(["calendar-year", { "calendar-year--selected": Q === c.value.year() }]),
                onClick: (me) => z(Q)
              }, S(Q), 11, uc))), 128))
            ])),
            W[7] || (W[7] = m("hr", null, null, -1)),
            m("div", cc, [
              t.variant !== "date-range" ? (u(), f("div", dc, [
                G(De, {
                  variant: "outline",
                  onClick: q
                }, {
                  default: ce(() => [...W[3] || (W[3] = [
                    de("Today", -1)
                  ])]),
                  _: 1
                }),
                G(De, {
                  variant: "outline",
                  onClick: se
                }, {
                  default: ce(() => [...W[4] || (W[4] = [
                    de("Tomorrow", -1)
                  ])]),
                  _: 1
                })
              ])) : w("", !0),
              t.variant === "date-range" ? (u(), f("div", fc, [
                G(De, {
                  variant: "outline",
                  onClick: j
                }, {
                  default: ce(() => [...W[5] || (W[5] = [
                    de("Apply", -1)
                  ])]),
                  _: 1
                })
              ])) : w("", !0),
              G(De, {
                variant: "outline",
                onClick: fe
              }, {
                default: ce(() => [...W[6] || (W[6] = [
                  de("Clear", -1)
                ])]),
                _: 1
              })
            ]),
            t.variant === "date-time" ? (u(), f("div", mc, [
              m("div", hc, [
                G(Ie, {
                  type: "text",
                  modelValue: p.value,
                  "onUpdate:modelValue": W[0] || (W[0] = (Q) => p.value = Q),
                  placeholder: "HH:mm or 4:30pm",
                  onFocus: W[1] || (W[1] = (Q) => a.value = !0),
                  onKeydown: ze(ue(Me, ["prevent"]), ["enter"]),
                  onBlur: Oe,
                  formWrapperWidth: "100%"
                }, {
                  right: ce(() => [
                    G(ie(Le))
                  ]),
                  _: 1
                }, 8, ["modelValue", "onKeydown"]),
                a.value ? (u(), f("div", vc, [
                  (u(!0), f(B, null, ae(Pe.value, (Q) => (u(), f("div", {
                    key: Q,
                    class: "fu-time-option",
                    onMousedown: ue((me) => Fe(Q), ["prevent"])
                  }, S(Q), 41, pc))), 128))
                ])) : w("", !0)
              ])
            ])) : w("", !0)
          ], 4)
        ])) : w("", !0)
      ]))
    ], 6));
  }
}, wr = /* @__PURE__ */ X(gc, [["__scopeId", "data-v-41bea5ec"]]), yc = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: wr
}, Symbol.toStringTag, { value: "Module" })), bc = { class: "calendar-header" }, Ac = { class: "flex flex--gap-sm" }, Cc = { key: 0 }, wc = { class: "calendar-weekdays" }, _c = { class: "calendar-days" }, Sc = ["onClick"], Tc = {
  key: 1,
  class: "calendar-months"
}, kc = ["onClick"], Ec = {
  key: 2,
  class: "calendar-years"
}, Mc = ["onClick"], Nc = { class: "flex flex--space flex--gap-md px-2 pb-2" }, Dc = {
  key: 0,
  class: "flex flex--gap-sm"
}, Ic = { key: 1 }, Oc = {
  key: 3,
  class: "calendar-time"
}, Rc = { class: "fu-time-input-wrapper" }, xc = {
  key: 0,
  class: "fu-time-dropdown customScrollBar"
}, Pc = ["onMousedown"], Tt = 12, $c = {
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
    he.extend(Cr);
    const n = t, a = N(!1), i = e, r = N(!1), o = N(null), s = N(null), l = N(null), c = N(he().startOf("month")), d = N(null), h = N({ start: null, end: null }), p = N("00:00"), v = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"], y = [
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
    ], g = N("days"), b = P(
      () => Math.floor(c.value.year() / Tt) * Tt
    ), A = P(() => b.value + Tt - 1), C = P(
      () => Array.from({ length: Tt }, (R, W) => b.value + W)
    ), E = P(() => {
      const R = c.value.startOf("month").startOf("week"), W = c.value.endOf("month").endOf("week"), Q = [];
      let me = R.clone();
      for (; me.isBefore(W) || me.isSame(W, "day"); )
        Q.push({
          date: me.clone(),
          isCurrentMonth: me.month() === c.value.month()
        }), me = me.add(1, "day");
      return Q;
    });
    function M(R) {
      return !!(n.min && R.isBefore(he(n.min), "day") || n.max && R.isAfter(he(n.max), "day"));
    }
    function k(R) {
      return n.variant === "date-range" ? h.value.start && R.isSame(h.value.start, "day") || h.value.end && R.isSame(h.value.end, "day") : d.value && R.isSame(d.value, "day");
    }
    function F(R) {
      return n.variant === "date-range" && h.value.start && h.value.end && R.isAfter(h.value.start, "day") && R.isBefore(h.value.end, "day");
    }
    function O(R) {
      if (!M(R)) {
        if (n.variant === "date-range") {
          !h.value.start || o.value === "start" ? (h.value.start = R.clone(), h.value.end = null, o.value = "end") : R.isBefore(h.value.start, "day") ? (h.value.end = h.value.start.clone(), h.value.start = R.clone()) : h.value.end = R.clone();
          return;
        }
        d.value = R.clone(), i(
          "update:modelValue",
          n.variant === "date-time" ? d.value.format("YYYY-MM-DDTHH:mm") : d.value.format("YYYY-MM-DD")
        ), U();
      }
    }
    function j() {
      h.value.start && h.value.end && (i("update:modelValue", {
        start: h.value.start.format("YYYY-MM-DD"),
        end: h.value.end.format("YYYY-MM-DD")
      }), U());
    }
    function te(R = null) {
      o.value = R, r.value = !0, n.variant === "date-range" ? h.value.start ? c.value = h.value.start.startOf("month") : c.value = he().startOf("month") : d.value ? c.value = d.value.startOf("month") : c.value = he().startOf("month"), ye(() => {
        I(), window.addEventListener("resize", I), window.addEventListener("click", Z);
      });
    }
    function U() {
      r.value = !1, window.removeEventListener("resize", I), window.removeEventListener("click", Z);
    }
    function Z(R) {
      !s.value?.contains(R.target) && !l.value?.contains(R.target) && U();
    }
    const L = N({
      position: "absolute",
      top: "0px",
      left: "0px",
      zIndex: 9999
    });
    function I() {
      if (!s.value || !l.value) return;
      const R = s.value.getBoundingClientRect(), W = l.value.getBoundingClientRect(), Q = window.innerHeight - R.bottom, me = R.top, We = window.scrollY || window.pageYOffset, tt = window.scrollX || window.pageXOffset;
      let Ye;
      Q < W.height && me > W.height ? Ye = R.top + We - W.height - 6 : Ye = R.bottom + We + 6, L.value = {
        position: "absolute",
        top: `${Ye}px`,
        left: `${R.left + tt}px`,
        zIndex: 9999
      };
    }
    const _ = P(() => d.value ? n.variant === "date-time" ? d.value.format("YYYY-MM-DD HH:mm") : d.value.format("YYYY-MM-DD") : ""), T = P(() => n.variant !== "date-range" ? "" : h.value.start && h.value.end ? `${h.value.start.format(
      "YYYY-MM-DD"
    )} to ${h.value.end.format("YYYY-MM-DD")}` : h.value.start ? `${h.value.start.format("YYYY-MM-DD")} to ...` : ""), D = P(() => `fu-date-picker--${n.variant}`);
    ve(
      () => n.modelValue,
      (R) => {
        if (n.variant !== "date-range") {
          if (typeof R == "string" && R) {
            const W = he(R);
            if (W.isValid()) {
              d.value = W, c.value = W.startOf("month"), n.variant === "date-time" ? p.value = W.format("h:mm A") : p.value = "00:00";
              return;
            }
          }
          (R === null || R === "") && (d.value = null, h.value = { start: null, end: null }, p.value = "00:00");
        }
      },
      { immediate: !0 }
    );
    function H() {
      g.value === "days" ? g.value = "months" : g.value === "months" ? g.value = "years" : g.value = "days";
    }
    function V() {
      g.value === "days" ? c.value = c.value.subtract(1, "month") : g.value === "months" ? c.value = c.value.subtract(1, "year") : c.value = c.value.subtract(Tt, "year");
    }
    function J() {
      g.value === "days" ? c.value = c.value.add(1, "month") : g.value === "months" ? c.value = c.value.add(1, "year") : c.value = c.value.add(Tt, "year");
    }
    function ee(R) {
      c.value = c.value.month(R), g.value = "days";
    }
    function z(R) {
      c.value = c.value.year(R), g.value = "months";
    }
    function q() {
      const R = he();
      n.variant === "date-range" ? h.value = { start: R.clone(), end: R.clone() } : (d.value = R.clone(), i(
        "update:modelValue",
        n.variant === "date-time" ? R.format("YYYY-MM-DDTHH:mm") : R.format("YYYY-MM-DD")
      ), U());
    }
    function se() {
      const R = he().add(1, "day");
      n.variant === "date-range" ? h.value = { start: R.clone(), end: R.clone() } : (d.value = R.clone(), i(
        "update:modelValue",
        n.variant === "date-time" ? R.format("YYYY-MM-DDTHH:mm") : R.format("YYYY-MM-DD")
      ), U());
    }
    function fe() {
      d.value = null, h.value = { start: null, end: null }, i(
        "update:modelValue",
        n.variant === "date-range" ? { start: null, end: null } : null
      ), U();
    }
    const Ae = P(() => {
      const R = [];
      for (let W = 0; W < 24; W++)
        for (let Q = 0; Q < 60; Q += 15)
          R.push(he().hour(W).minute(Q).format("h:mm A"));
      return R;
    }), Pe = P(() => {
      if (!p.value) return Ae.value;
      const R = p.value.toLowerCase().replace(/\s+/g, "");
      return Ae.value.filter(
        (W) => W.toLowerCase().replace(/\s+/g, "").startsWith(R)
      );
    });
    function Me() {
      if (!d.value || !p.value) return;
      const R = String(p.value).trim().toLowerCase(), W = he(
        R,
        ["h:mm a", "h:mma", "ha", "h a", "hh:mm a", "H:mm", "HH:mm", "H"],
        !0
      );
      if (!W.isValid()) {
        a.value = !1;
        return;
      }
      d.value = d.value.hour(W.hour()).minute(W.minute()), p.value = d.value.format("h:mm A"), i("update:modelValue", d.value.format("YYYY-MM-DDTHH:mm")), a.value = !1;
    }
    function Fe(R) {
      p.value = R, Me();
    }
    function Oe() {
      setTimeout(() => {
        Me(), a.value = !1;
      }, 120);
    }
    return Ce(() => {
      window.removeEventListener("resize", I), window.removeEventListener("click", Z);
    }), (R, W) => (u(), f("div", {
      class: Y(["fu-date-picker", D.value]),
      ref_key: "pickerRef",
      ref: s,
      style: ne({ width: t.formWrapperWidth })
    }, [
      t.variant !== "date-range" ? (u(), K(Ie, {
        key: 0,
        type: "text",
        modelValue: _.value,
        placeholder: "Select date",
        readonly: "",
        onClick: te,
        formWrapperWidth: t.formWrapperWidth,
        size: t.size,
        error: t.error,
        required: t.required,
        label: t.label,
        disabled: t.disabled
      }, {
        right: ce(() => [
          G(ie(Le))
        ]),
        _: 1
      }, 8, ["modelValue", "formWrapperWidth", "size", "error", "required", "label", "disabled"])) : (u(), K(Ie, {
        key: 1,
        type: "text",
        modelValue: T.value,
        placeholder: "Select date range",
        onClick: te,
        readonly: "",
        formWrapperWidth: t.formWrapperWidth,
        size: t.size,
        error: t.error,
        required: t.required,
        disabled: t.disabled
      }, {
        right: ce(() => [
          G(ie(Le))
        ]),
        _: 1
      }, 8, ["modelValue", "formWrapperWidth", "size", "error", "required", "disabled"])),
      (u(), K(ke, { to: "body" }, [
        r.value ? (u(), f("div", {
          key: 0,
          class: "fu-date-picker__calendar-overlay",
          onClick: ue(U, ["self"])
        }, [
          m("div", {
            class: "fu-date-picker__calendar",
            style: ne(L.value),
            ref_key: "calendarRef",
            ref: l,
            onClick: W[2] || (W[2] = ue(() => {
            }, ["stop"]))
          }, [
            m("div", bc, [
              G(De, {
                variant: "ghost",
                size: "sm",
                onClick: H
              }, {
                default: ce(() => [
                  g.value === "days" ? (u(), f(B, { key: 0 }, [
                    de(S(c.value.format("MMMM YYYY")), 1)
                  ], 64)) : g.value === "months" ? (u(), f(B, { key: 1 }, [
                    de(S(c.value.year()), 1)
                  ], 64)) : (u(), f(B, { key: 2 }, [
                    de(S(b.value) + " - " + S(A.value), 1)
                  ], 64))
                ]),
                _: 1
              }),
              m("div", Ac, [
                G($e, {
                  icon: ie(qt),
                  size: "sm",
                  onClick: V
                }, null, 8, ["icon"]),
                G($e, {
                  icon: ie(Qt),
                  size: "sm",
                  onClick: J
                }, null, 8, ["icon"])
              ])
            ]),
            g.value === "days" ? (u(), f("div", Cc, [
              m("div", wc, [
                (u(), f(B, null, ae(v, (Q) => m("div", {
                  key: Q,
                  class: "calendar-weekday"
                }, S(Q), 1)), 64))
              ]),
              m("div", _c, [
                (u(!0), f(B, null, ae(E.value, (Q) => (u(), f("div", {
                  key: Q.date.toString(),
                  class: Y(["calendar-day", {
                    "calendar-day--other-month": !Q.isCurrentMonth,
                    "calendar-day--selected": k(Q.date),
                    "calendar-day--in-range": F(Q.date),
                    "calendar-day--disabled": M(Q.date)
                  }]),
                  onClick: (me) => O(Q.date)
                }, S(Q.date.date()), 11, Sc))), 128))
              ])
            ])) : g.value === "months" ? (u(), f("div", Tc, [
              (u(), f(B, null, ae(y, (Q, me) => m("div", {
                key: Q,
                class: Y(["calendar-month", { "calendar-month--selected": me === c.value.month() }]),
                onClick: (We) => ee(me)
              }, S(Q), 11, kc)), 64))
            ])) : (u(), f("div", Ec, [
              (u(!0), f(B, null, ae(C.value, (Q) => (u(), f("div", {
                key: Q,
                class: Y(["calendar-year", { "calendar-year--selected": Q === c.value.year() }]),
                onClick: (me) => z(Q)
              }, S(Q), 11, Mc))), 128))
            ])),
            W[7] || (W[7] = m("hr", null, null, -1)),
            m("div", Nc, [
              t.variant !== "date-range" ? (u(), f("div", Dc, [
                G(De, {
                  variant: "outline",
                  onClick: q
                }, {
                  default: ce(() => [...W[3] || (W[3] = [
                    de("Today", -1)
                  ])]),
                  _: 1
                }),
                G(De, {
                  variant: "outline",
                  onClick: se
                }, {
                  default: ce(() => [...W[4] || (W[4] = [
                    de("Tomorrow", -1)
                  ])]),
                  _: 1
                })
              ])) : w("", !0),
              t.variant === "date-range" ? (u(), f("div", Ic, [
                G(De, {
                  variant: "outline",
                  onClick: j
                }, {
                  default: ce(() => [...W[5] || (W[5] = [
                    de("Apply", -1)
                  ])]),
                  _: 1
                })
              ])) : w("", !0),
              G(De, {
                variant: "outline",
                onClick: fe
              }, {
                default: ce(() => [...W[6] || (W[6] = [
                  de("Clear", -1)
                ])]),
                _: 1
              })
            ]),
            t.variant === "date-time" ? (u(), f("div", Oc, [
              m("div", Rc, [
                G(Ie, {
                  type: "text",
                  modelValue: p.value,
                  "onUpdate:modelValue": W[0] || (W[0] = (Q) => p.value = Q),
                  placeholder: "HH:mm or 4:30pm",
                  onFocus: W[1] || (W[1] = (Q) => a.value = !0),
                  onKeydown: ze(ue(Me, ["prevent"]), ["enter"]),
                  onBlur: Oe,
                  formWrapperWidth: "100%"
                }, {
                  right: ce(() => [
                    G(ie(Le))
                  ]),
                  _: 1
                }, 8, ["modelValue", "onKeydown"]),
                a.value ? (u(), f("div", xc, [
                  (u(!0), f(B, null, ae(Pe.value, (Q) => (u(), f("div", {
                    key: Q,
                    class: "fu-time-option",
                    onMousedown: ue((me) => Fe(Q), ["prevent"])
                  }, S(Q), 41, Pc))), 128))
                ])) : w("", !0)
              ])
            ])) : w("", !0)
          ], 4)
        ])) : w("", !0)
      ]))
    ], 6));
  }
}, Fc = /* @__PURE__ */ X($c, [["__scopeId", "data-v-7bb6d1f9"]]), Bc = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Fc
}, Symbol.toStringTag, { value: "Module" })), zc = { class: "calendar-header" }, Lc = { class: "flex flex--gap-sm" }, Hc = {
  key: 0,
  class: "calendar-months"
}, Vc = ["onClick"], jc = {
  key: 1,
  class: "calendar-years"
}, Uc = ["onClick"], Wc = { class: "flex flex--space flex--gap-md px-2 pb-2" }, tn = 12, Yc = {
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
    const n = t, a = e, i = N(!1), r = N(null), o = N(null), s = N("months"), l = N(he().year()), c = [
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
    ], d = P(
      () => l.value - l.value % tn
    ), h = P(() => d.value + tn - 1), p = P(() => {
      const I = d.value;
      return Array.from({ length: tn }, (_, T) => I + T);
    }), v = P(() => {
      if (!n.modelValue) return null;
      const I = he(n.modelValue, "YYYY-MM", !0);
      return I.isValid() ? I : null;
    });
    function y(I) {
      return v.value ? v.value.month() === I && v.value.year() === l.value : !1;
    }
    function g(I) {
      const _ = he(
        `${l.value}-${(I + 1).toString().padStart(2, "0")}`,
        "YYYY-MM"
      );
      return !!(n.min && _.isBefore(he(n.min, "YYYY-MM"), "month") || n.max && _.isAfter(he(n.max, "YYYY-MM"), "month"));
    }
    function b(I) {
      l.value = I, s.value = "months";
    }
    function A(I) {
      if (g(I)) return;
      const _ = he(
        `${l.value}-${(I + 1).toString().padStart(2, "0")}`,
        "YYYY-MM"
      );
      a("update:modelValue", _.format("MMM, YYYY")), i.value = !1;
    }
    function C() {
      const I = he();
      l.value = I.year(), a("update:modelValue", I.format("MMM, YYYY")), i.value = !1;
    }
    function E() {
      n.disabled || (i.value = !i.value, i.value ? (v.value && (l.value = v.value.year()), ye(() => {
        O(), window.addEventListener("resize", O), window.addEventListener("click", k);
      })) : (window.removeEventListener("resize", O), window.removeEventListener("click", k)));
    }
    function M() {
      i.value = !1, window.removeEventListener("resize", O), window.removeEventListener("click", k);
    }
    function k(I) {
      !r.value?.contains(I.target) && !o.value?.contains(I.target) && M();
    }
    const F = N({
      position: "absolute",
      top: "0px",
      left: "0px",
      zIndex: 9999
    });
    function O() {
      if (!r.value || !o.value) return;
      const I = r.value.getBoundingClientRect(), _ = o.value.getBoundingClientRect(), T = window.innerHeight - I.bottom, D = I.top, H = window.scrollY || window.pageYOffset, V = window.scrollX || window.pageXOffset;
      let J;
      T < _.height && D > _.height ? J = I.top + H - _.height - 6 : J = I.bottom + H + 6, F.value = {
        position: "absolute",
        top: `${J}px`,
        left: `${I.left + V}px`,
        zIndex: 9999
      };
    }
    function j() {
      s.value = s.value === "months" ? "years" : "months";
    }
    function te() {
      s.value === "months" ? l.value-- : l.value = Math.max(d.value - tn, 0);
    }
    function U() {
      s.value === "months" ? l.value++ : l.value = h.value + 1;
    }
    function Z() {
      a("update:modelValue", null), i.value = !1;
    }
    const L = P(() => n.modelValue || "");
    return Ce(() => {
      window.removeEventListener("resize", O), window.removeEventListener("click", k);
    }), (I, _) => (u(), f("div", {
      class: "fu-month-picker",
      ref_key: "pickerRef",
      ref: r,
      style: ne({ width: t.formWrapperWidth })
    }, [
      G(Ie, {
        type: "text",
        modelValue: L.value,
        placeholder: "Select month",
        readonly: "",
        onClick: [
          E,
          ue(M, ["self"])
        ],
        formWrapperWidth: t.formWrapperWidth,
        size: t.size,
        error: t.error,
        required: t.required,
        label: t.label,
        disabled: t.disabled
      }, {
        right: ce(() => [
          G(ie(Le))
        ]),
        _: 1
      }, 8, ["modelValue", "formWrapperWidth", "size", "error", "required", "label", "disabled"]),
      (u(), K(ke, { to: "body" }, [
        i.value ? (u(), f("div", {
          key: 0,
          class: "fu-month-picker__calendar-overlay",
          onClick: ue(M, ["self"])
        }, [
          m("div", {
            class: "fu-month-picker__calendar",
            style: ne(F.value),
            ref_key: "calendarRef",
            ref: o,
            onClick: _[0] || (_[0] = ue(() => {
            }, ["stop"]))
          }, [
            m("div", zc, [
              G(De, {
                variant: "ghost",
                size: "sm",
                onClick: j,
                icon: ie(Le)
              }, {
                default: ce(() => [
                  s.value === "months" ? (u(), f(B, { key: 0 }, [
                    de(S(l.value), 1)
                  ], 64)) : (u(), f(B, { key: 1 }, [
                    de(S(d.value) + " - " + S(h.value), 1)
                  ], 64))
                ]),
                _: 1
              }, 8, ["icon"]),
              m("div", Lc, [
                G($e, {
                  icon: ie(qt),
                  size: "sm",
                  onClick: te
                }, null, 8, ["icon"]),
                G($e, {
                  icon: ie(Qt),
                  size: "sm",
                  onClick: U
                }, null, 8, ["icon"])
              ])
            ]),
            s.value === "months" ? (u(), f("div", Hc, [
              (u(), f(B, null, ae(c, (T, D) => m("div", {
                key: T,
                class: Y(["calendar-month", {
                  "calendar-month--selected": y(D),
                  "calendar-month--disabled": g(D)
                }]),
                onClick: (H) => A(D)
              }, S(T), 11, Vc)), 64))
            ])) : (u(), f("div", jc, [
              (u(!0), f(B, null, ae(p.value, (T) => (u(), f("div", {
                key: T,
                class: Y(["calendar-year", { "calendar-year--selected": T === l.value }]),
                onClick: (D) => b(T)
              }, S(T), 11, Uc))), 128))
            ])),
            _[3] || (_[3] = m("hr", null, null, -1)),
            m("div", Wc, [
              G(De, {
                variant: "outline",
                onClick: C
              }, {
                default: ce(() => [..._[1] || (_[1] = [
                  de(" This Month ", -1)
                ])]),
                _: 1
              }),
              G(De, {
                variant: "outline",
                onClick: Z
              }, {
                default: ce(() => [..._[2] || (_[2] = [
                  de(" Clear ", -1)
                ])]),
                _: 1
              })
            ])
          ], 4)
        ])) : w("", !0)
      ]))
    ], 4));
  }
}, Gc = /* @__PURE__ */ X(Yc, [["__scopeId", "data-v-7377986b"]]), Kc = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Gc
}, Symbol.toStringTag, { value: "Module" })), qc = { class: "calendar-header" }, Qc = { class: "flex flex--gap-sm" }, Zc = { key: 0 }, Jc = { class: "calendar-weekdays" }, Xc = { class: "calendar-days" }, ed = ["onClick"], td = {
  key: 1,
  class: "calendar-months"
}, nd = ["onClick"], ad = {
  key: 2,
  class: "calendar-years"
}, id = ["onClick"], rd = {
  key: 3,
  class: "calendar-multi-summary"
}, od = {
  key: 4,
  class: "calendar-time"
}, sd = {
  key: 0,
  class: "fu-time-dropdown customScrollBar"
}, ld = ["onMousedown"], nn = 12, ud = {
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
    const n = t, a = e, i = N(he().startOf("month")), r = N("days"), o = N("00:00"), s = N(!1), l = N(null), c = N([]), d = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"], h = [
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
    ], p = P(
      () => Math.floor(i.value.year() / nn) * nn
    ), v = P(() => p.value + nn - 1), y = P(
      () => Array.from({ length: nn }, (I, _) => p.value + _)
    ), g = P(() => {
      const I = i.value.startOf("month").startOf("week"), _ = i.value.endOf("month").endOf("week"), T = [];
      let D = I.clone();
      for (; D.isBefore(_) || D.isSame(_, "day"); )
        T.push({
          date: D.clone(),
          isCurrentMonth: D.month() === i.value.month()
        }), D = D.add(1, "day");
      return T;
    }), b = P(() => {
      const I = [];
      for (let _ = 0; _ < 24; _++)
        for (let T = 0; T < 60; T += 15)
          I.push(he().hour(_).minute(T).format("h:mm A"));
      return I;
    }), A = P(() => b.value), C = (I) => n.disabledDates.includes(I.format("YYYY-MM-DD"));
    function E(I) {
      return n.mode === "multi" ? c.value.includes(I.format("YYYY-MM-DD")) : l.value && I.isSame(l.value, "day");
    }
    function M(I) {
      if (!C(I))
        if (n.mode === "multi") {
          const _ = I.format("YYYY-MM-DD");
          c.value.indexOf(_) === -1 ? c.value = [...c.value, _] : c.value = c.value.filter((D) => D !== _), c.value = [...c.value].sort(), a("update:modelValue", [...c.value]);
        } else if (l.value = I.clone(), n.variant === "date-time") {
          const _ = he(
            `${l.value.format("YYYY-MM-DD")} ${o.value}`,
            "YYYY-MM-DD HH:mm"
          );
          a("update:modelValue", _.format("YYYY-MM-DDTHH:mm"));
        } else
          a("update:modelValue", l.value.format("YYYY-MM-DD"));
    }
    function k() {
      c.value = [], a("update:modelValue", []);
    }
    const F = () => i.value = i.value.subtract(1, "month"), O = () => i.value = i.value.add(1, "month"), j = () => r.value = r.value === "days" ? "months" : r.value === "months" ? "years" : "days", te = (I) => {
      i.value = i.value.month(I), r.value = "days";
    }, U = (I) => {
      i.value = i.value.year(I), r.value = "months";
    };
    function Z() {
      if (!l.value) return;
      const I = he(`${l.value.format("YYYY-MM-DD")} ${o.value}`, [
        "YYYY-MM-DD HH:mm",
        "YYYY-MM-DD h:mm A"
      ]);
      I.isValid() && (o.value = I.format("HH:mm"), a("update:modelValue", I.format("YYYY-MM-DDTHH:mm")), s.value = !1);
    }
    function L(I) {
      if (!l.value) return;
      o.value = he(I, "h:mm A").format("HH:mm");
      const _ = he(
        `${l.value.format("YYYY-MM-DD")} ${o.value}`,
        "YYYY-MM-DD HH:mm"
      );
      a("update:modelValue", _.format("YYYY-MM-DDTHH:mm")), s.value = !1;
    }
    return ve(
      () => n.modelValue,
      (I) => {
        if (n.mode === "multi")
          c.value = Array.isArray(I) ? [...I] : [];
        else {
          if (!I) {
            l.value = null;
            return;
          }
          const _ = he(I);
          _.isValid() && (l.value = _, i.value = _.startOf("month"), n.variant === "date-time" && (o.value = _.format("HH:mm")));
        }
      },
      { immediate: !0 }
    ), (I, _) => (u(), f("div", {
      class: "fu-date-picker fu-date-picker--plain",
      style: ne({ width: t.formWrapperWidth, fontSize: t.fontSize })
    }, [
      m("div", {
        class: "fu-date-picker",
        style: ne({ width: t.formWrapperWidth })
      }, [
        m("div", qc, [
          m("button", { onClick: j }, [
            r.value === "days" ? (u(), f(B, { key: 0 }, [
              de(S(i.value.format("MMMM YYYY")), 1)
            ], 64)) : r.value === "months" ? (u(), f(B, { key: 1 }, [
              de(S(i.value.year()), 1)
            ], 64)) : (u(), f(B, { key: 2 }, [
              de(S(p.value) + " - " + S(v.value), 1)
            ], 64))
          ]),
          m("div", Qc, [
            m("button", { onClick: F }, [
              G(ie(qt), {
                size: 16,
                color: "var(--fu-color-text)"
              })
            ]),
            m("button", { onClick: O }, [
              G(ie(Qt), { size: 16 })
            ])
          ])
        ]),
        r.value === "days" ? (u(), f("div", Zc, [
          m("div", Jc, [
            (u(), f(B, null, ae(d, (T) => m("div", {
              key: T,
              class: "calendar-weekday"
            }, S(T), 1)), 64))
          ]),
          m("div", Xc, [
            (u(!0), f(B, null, ae(g.value, (T) => (u(), f("div", {
              key: T.date.toString(),
              class: Y(["calendar-day", {
                "calendar-day--other-month": !T.isCurrentMonth,
                "calendar-day--selected": E(T.date),
                "calendar-day--disabled": C(T.date)
              }]),
              onClick: (D) => M(T.date)
            }, S(T.date.date()), 11, ed))), 128))
          ])
        ])) : r.value === "months" ? (u(), f("div", td, [
          (u(), f(B, null, ae(h, (T, D) => m("div", {
            key: T,
            class: Y(["calendar-month", { "calendar-month--selected": D === i.value.month() }]),
            onClick: (H) => te(D)
          }, S(T), 11, nd)), 64))
        ])) : (u(), f("div", ad, [
          (u(!0), f(B, null, ae(y.value, (T) => (u(), f("div", {
            key: T,
            class: Y(["calendar-year", { "calendar-year--selected": T === i.value.year() }]),
            onClick: (D) => U(T)
          }, S(T), 11, id))), 128))
        ])),
        t.mode === "multi" && c.value.length ? (u(), f("div", rd, [
          m("span", null, S(c.value.length) + " date" + S(c.value.length > 1 ? "s" : "") + " selected", 1),
          m("button", {
            class: "calendar-multi-clear",
            onClick: k
          }, "Clear all")
        ])) : w("", !0),
        t.variant === "date-time" ? (u(), f("div", od, [
          G(Ie, {
            type: "text",
            modelValue: o.value,
            "onUpdate:modelValue": _[0] || (_[0] = (T) => o.value = T),
            placeholder: "HH:mm or 4:30pm",
            onFocus: _[1] || (_[1] = (T) => s.value = !0),
            onKeydown: ze(ue(Z, ["prevent"]), ["enter"]),
            formWrapperWidth: "100%"
          }, {
            right: ce(() => [
              G(ie(Le))
            ]),
            _: 1
          }, 8, ["modelValue", "onKeydown"]),
          s.value ? (u(), f("div", sd, [
            (u(!0), f(B, null, ae(A.value, (T) => (u(), f("div", {
              key: T,
              class: "fu-time-option",
              onMousedown: ue((D) => L(T), ["prevent"])
            }, S(T), 41, ld))), 128))
          ])) : w("", !0)
        ])) : w("", !0)
      ], 4)
    ], 4));
  }
}, cd = /* @__PURE__ */ X(ud, [["__scopeId", "data-v-edb78133"]]), dd = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: cd
}, Symbol.toStringTag, { value: "Module" })), fd = ["onMousedown"], ai = 240, md = {
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
    const n = t, a = e, i = N(""), r = N(n.modelValue || ""), o = N(""), s = N(!1), l = N(!1), c = N(null), d = N(null), h = N({ left: 0, top: 0, bottom: 0, width: 0 }), p = N(null), v = (L) => {
      if (!L || !/^\d{2}:\d{2}$/.test(L)) return L || "";
      const [I, _] = L.split(":").map(Number);
      if (n.displayFormat === "24")
        return `${String(I).padStart(2, "0")}:${String(_).padStart(2, "0")}`;
      const T = I < 12 ? "am" : "pm", D = I % 12 || 12;
      return `${String(D).padStart(2, "0")}:${String(_).padStart(2, "0")} ${T}`;
    }, y = (L) => {
      if (!L) return null;
      const I = L.trim().toLowerCase();
      if (n.displayFormat === "24") {
        const V = I.match(/^(\d{1,2}):(\d{2})$/);
        if (!V) return null;
        const J = parseInt(V[1], 10), ee = parseInt(V[2], 10);
        return J > 23 || ee > 59 ? null : `${String(J).padStart(2, "0")}:${String(ee).padStart(2, "0")}`;
      }
      const _ = I.match(/^(\d{1,2})(?::(\d{2}))?\s*(am|pm)$/);
      if (!_) return null;
      let T = parseInt(_[1], 10);
      const D = parseInt(_[2] || "00", 10), H = _[3];
      return T < 1 || T > 12 || D > 59 ? null : (H === "pm" && T !== 12 && (T += 12), H === "am" && T === 12 && (T = 0), `${String(T).padStart(2, "0")}:${String(D).padStart(2, "0")}`);
    };
    i.value = v(n.modelValue), ve(
      () => n.modelValue,
      (L) => {
        r.value = L || "", document.activeElement !== c.value?.querySelector("input") && (i.value = v(L));
      }
    ), ve(
      () => n.displayFormat,
      () => {
        i.value = v(r.value);
      }
    );
    const g = P(() => {
      n.displayFormat;
      const L = [];
      for (let I = 0; I < 24; I++)
        for (let _ = 0; _ < 60; _ += n.interval) {
          const T = `${String(I).padStart(2, "0")}:${String(_).padStart(2, "0")}`;
          L.push({ label: v(T), value: T });
        }
      return L;
    }), b = P(
      () => o.value ? g.value.filter(
        (L) => L.label.toLowerCase().includes(o.value.toLowerCase())
      ) : g.value
    ), A = P(
      () => b.value.length ? b.value : g.value
    ), C = (L) => {
      const I = L.target;
      let _ = I.value;
      if (n.displayFormat === "24") {
        if (_ = _.replace(/[^0-9:]/g, "").slice(0, 5), /^\d{2}$/.test(_)) {
          _ += ":", i.value = _, o.value = _, ye(() => I.setSelectionRange(3, 3));
          return;
        }
        /^\d{2}:\d/.test(_) && parseInt(_.slice(0, 2), 10) > 23 && (_ = "23:" + _.slice(3)), /^\d{2}:\d{2}$/.test(_) && parseInt(_.slice(3), 10) > 59 && (_ = _.slice(0, 3) + "59");
      } else {
        if (_ = _.replace(/[^0-9: apm]/g, ""), _ = _.replace(/([ap])m*([ap])/g, "$1").replace(/(am|pm).+/, "$1").slice(0, 8), /^\d{2}$/.test(_)) {
          _ += ":", i.value = _, o.value = _, ye(() => I.setSelectionRange(3, 3));
          return;
        }
        if (/^\d{2}/.test(_)) {
          const T = parseInt(_.slice(0, 2), 10);
          T > 12 && (_ = "12" + _.slice(2)), T === 0 && (_ = "01" + _.slice(2));
        }
        /^\d{2}:\d{2}/.test(_) && parseInt(_.slice(3, 5), 10) > 59 && (_ = _.slice(0, 3) + "59" + _.slice(5));
      }
      i.value = _, o.value = _;
    }, E = () => {
      const L = y(i.value);
      if (!L) {
        i.value = v(r.value), o.value = "", s.value = !1;
        return;
      }
      r.value = L, i.value = v(L), o.value = "", a("update:modelValue", L), a("change", L), s.value = !1;
    }, M = () => {
      if (!c.value) return;
      const L = c.value.getBoundingClientRect();
      h.value = {
        left: L.left,
        top: L.top,
        bottom: L.bottom,
        width: L.width
      };
      const I = window.innerHeight - L.bottom;
      l.value = I < ai && L.top > I;
    }, k = (L, I) => {
      I === 0 && L && (p.value = L);
    }, F = (L) => {
      r.value = L, i.value = v(L), o.value = "", a("update:modelValue", L), a("change", L), s.value = !1;
    }, O = () => {
      i.value = v(r.value), o.value = "", s.value = !0, M();
    }, j = () => setTimeout(() => {
      E(), s.value = !1;
    }, 120), te = (L) => {
      c.value && !c.value.contains(L.target) && d.value && !d.value.contains(L.target) && (s.value = !1);
    };
    ve(o, async () => {
      await ye(), p.value && p.value.scrollIntoView({ behavior: "smooth", block: "nearest" });
    });
    const U = () => M();
    Te(() => {
      window.addEventListener("resize", U), document.addEventListener("mousedown", te), ye(M);
    }), Ce(() => {
      window.removeEventListener("resize", U), document.removeEventListener("mousedown", te);
    });
    const Z = () => {
      n.disabled || (s.value ? s.value = !1 : (i.value = v(r.value), o.value = "", s.value = !0, M()));
    };
    return (L, I) => (u(), f("div", {
      class: "fu-time-picker",
      ref_key: "inputRef",
      ref: c
    }, [
      G(Ie, {
        type: "text",
        modelValue: i.value,
        "onUpdate:modelValue": I[0] || (I[0] = (_) => i.value = _),
        placeholder: t.displayFormat === "12" ? "hh:mm am/pm" : "HH:mm",
        onFocus: O,
        onInput: C,
        onKeydown: ze(ue(E, ["prevent"]), ["enter"]),
        onBlur: j,
        label: t.label,
        error: t.error,
        required: t.required,
        disabled: t.disabled,
        size: t.size,
        formWrapperWidth: t.formWrapperWidth
      }, {
        right: ce(() => [
          G(ie(Le), {
            style: { cursor: "pointer" },
            onMousedown: ue(Z, ["prevent"])
          })
        ]),
        _: 1
      }, 8, ["modelValue", "placeholder", "onKeydown", "label", "error", "required", "disabled", "size", "formWrapperWidth"]),
      (u(), K(ke, { to: "body" }, [
        s.value ? (u(), f("div", {
          key: 0,
          ref_key: "dropdownRef",
          ref: d,
          class: Y(["fu-time-dropdown customScrollBar", { "open-up": l.value }]),
          style: ne({
            left: h.value.left + "px",
            width: h.value.width + "px",
            top: l.value ? h.value.top - ai + "px" : h.value.bottom + "px"
          })
        }, [
          (u(!0), f(B, null, ae(A.value, (_, T) => (u(), f("div", {
            key: _.value,
            class: "fu-time-option",
            ref_for: !0,
            ref: (D) => k(D, T),
            onMousedown: ue((D) => F(_.value), ["prevent"])
          }, S(_.label), 41, fd))), 128))
        ], 6)) : w("", !0)
      ]))
    ], 512));
  }
}, hd = /* @__PURE__ */ X(md, [["__scopeId", "data-v-72c32689"]]), vd = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: hd
}, Symbol.toStringTag, { value: "Module" })), pd = {
  key: 0,
  class: "fu-drawer"
}, gd = { class: "fu-drawer__header-content" }, yd = {
  key: 0,
  class: "fu-drawer__header-actions"
}, bd = { class: "fu-drawer__body" }, Ad = { class: "fu-drawer__footer" }, Cd = /* @__PURE__ */ oe({
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
    return Te(() => window.addEventListener("keydown", i)), Ce(() => window.removeEventListener("keydown", i)), (r, o) => (u(), K(He, { name: "drawer-fade" }, {
      default: ce(() => [
        t.open ? (u(), f("div", pd, [
          m("div", {
            class: "fu-drawer__backdrop",
            onClick: o[0] || (o[0] = (s) => r.$emit("close"))
          }),
          m("div", {
            class: Y(["fu-drawer__panel", [
              `fu-drawer__panel--${t.position}`,
              `fu-drawer__panel--${t.size}`,
              { "fu-drawer__panel--with-controls": t.showControls }
            ]])
          }, [
            r.$slots.header || t.showControls ? (u(), f("div", {
              key: 0,
              class: Y(["fu-drawer__header", { "border-bottom-0": t.hideHeaderBorder }])
            }, [
              m("div", gd, [
                re(r.$slots, "header", {}, void 0, !0)
              ]),
              t.showControls ? (u(), f("div", yd, [
                G($e, {
                  size: "sm",
                  variant: "subtle",
                  icon: ie(Zt),
                  onClick: o[1] || (o[1] = (s) => r.$emit("close"))
                }, null, 8, ["icon"])
              ])) : w("", !0)
            ], 2)) : w("", !0),
            m("div", bd, [
              re(r.$slots, "default", { class: "slot-body" }, void 0, !0)
            ]),
            m("div", {
              class: Y(["fu-drawer__nav", [
                t.position === "right" ? "fu-drawer__nav--left" : "",
                t.position === "left" ? "fu-drawer__nav--right" : "",
                t.position === "bottom" ? "fu-drawer__nav--center" : ""
              ]])
            }, [
              t.canPrev ? (u(), K($e, {
                key: 0,
                size: "sm",
                variant: "subtle",
                icon: ie(Fs),
                onClick: o[2] || (o[2] = (s) => r.$emit("prev"))
              }, null, 8, ["icon"])) : w("", !0),
              t.canNext ? (u(), K($e, {
                key: 1,
                size: "sm",
                variant: "subtle",
                icon: ie(Le),
                onClick: o[3] || (o[3] = (s) => r.$emit("next"))
              }, null, 8, ["icon"])) : w("", !0)
            ], 2),
            m("div", Ad, [
              re(r.$slots, "footer", {}, void 0, !0)
            ])
          ], 2)
        ])) : w("", !0)
      ]),
      _: 3
    }));
  }
}), wd = /* @__PURE__ */ X(Cd, [["__scopeId", "data-v-37927fd4"]]), _d = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: wd
}, Symbol.toStringTag, { value: "Module" })), Sd = ["onClick"], Td = /* @__PURE__ */ oe({
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
        o = a.value, ye(l);
      }
    }
    function l() {
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
    return Te(() => {
      document.addEventListener("click", d), document.addEventListener("close-other-dropdowns", h);
    }), Ce(() => {
      document.removeEventListener("click", d), document.removeEventListener("close-other-dropdowns", h);
    }), (p, v) => (u(), f("div", {
      class: "fu-dropdown",
      ref_key: "dropdown",
      ref: a
    }, [
      m("button", {
        class: "fu-dropdown__button",
        onClick: s
      }, [
        de(S(t.buttonText) + " ", 1),
        t.buttonIcon ? (u(), K(be(t.buttonIcon), {
          key: 0,
          class: "fu-dropdown__icon"
        })) : w("", !0)
      ]),
      (u(), K(ke, { to: "body" }, [
        n.value ? (u(), f("ul", {
          key: 0,
          class: Y(["fu-dropdown__menu", [`fu-dropdown__menu--${t.align}`, { show: n.value }]]),
          style: ne(r.value),
          ref_key: "menuRef",
          ref: i
        }, [
          (u(!0), f(B, null, ae(t.actions, (y) => (u(), f("li", {
            key: y.label
          }, [
            m("a", {
              class: "fu-dropdown__item",
              onClick: (g) => c(y)
            }, [
              y.icon ? (u(), K(be(y.icon), {
                key: 0,
                class: "fu-dropdown__icon"
              })) : w("", !0),
              de(" " + S(y.label), 1)
            ], 8, Sd)
          ]))), 128))
        ], 6)) : w("", !0)
      ]))
    ], 512));
  }
}), kd = /* @__PURE__ */ X(Td, [["__scopeId", "data-v-478aec9e"]]), Ed = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: kd
}, Symbol.toStringTag, { value: "Module" })), Md = { class: "fu-dropdown-inline__wrapper" }, Nd = ["value", "placeholder", "disabled"], Dd = ["onMousedown"], Id = /* @__PURE__ */ oe({
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
    const n = t, a = e, i = N(null), r = N(null), o = N(n.modelValue || null), s = N(!1), l = N({});
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
      l.value = {
        position: "absolute",
        top: `${y.bottom + 4}px`,
        left: `${y.left}px`,
        width: `${y.width}px`,
        zIndex: "9999"
      };
    }
    return Te(() => {
      window.addEventListener("click", h), window.addEventListener("resize", p);
    }), Ce(() => {
      window.removeEventListener("click", h), window.removeEventListener("resize", p);
    }), (v, y) => (u(), f("div", {
      class: Y(["fu-dropdown-inline", {
        "fu-dropdown-inline--disabled": t.disabled,
        "fu-dropdown-inline--readonly": t.readonly
      }]),
      ref_key: "inlineRef",
      ref: i
    }, [
      m("div", Md, [
        o.value ? (u(), f("span", {
          key: 0,
          class: "fu-dropdown-inline__dot",
          style: ne({ backgroundColor: o.value.color })
        }, null, 4)) : w("", !0),
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
        }, null, 40, Nd)
      ]),
      (u(), K(ke, { to: "body" }, [
        s.value ? (u(), f("ul", {
          key: 0,
          class: "fu-dropdown-inline__menu",
          style: ne(l.value)
        }, [
          (u(!0), f(B, null, ae(t.options, (g) => (u(), f("li", {
            key: g.label,
            class: "fu-dropdown-inline__item",
            onMousedown: ue((b) => d(g), ["prevent"])
          }, [
            m("span", {
              class: "fu-dropdown-inline__dot",
              style: ne({ backgroundColor: g.color })
            }, null, 4),
            de(" " + S(g.label), 1)
          ], 40, Dd))), 128))
        ], 4)) : w("", !0)
      ]))
    ], 2));
  }
}), Od = /* @__PURE__ */ X(Id, [["__scopeId", "data-v-cf4bb282"]]), Rd = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Od
}, Symbol.toStringTag, { value: "Module" })), xd = {
  key: 0,
  class: "content"
}, Pd = {
  key: 0,
  class: "fu-dropdown__group-label"
}, $d = {
  key: 0,
  class: "fu-dropdown__divider"
}, Fd = {
  key: 1,
  class: "flex w-100"
}, Bd = ["onClick"], zd = {
  key: 1,
  class: "fu-dropdown__divider"
}, Ld = {
  key: 0,
  class: "fu-dropdown__divider"
}, Hd = {
  key: 1,
  class: "flex w-100"
}, Vd = ["onClick"], jd = /* @__PURE__ */ oe({
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
    function l(g) {
      g?.stopPropagation();
      const b = !i.value;
      b && document.dispatchEvent(new CustomEvent("close-all-dropdowns")), i.value = b, n(b ? "open" : "close"), n("update:isOpen", b), b && ye(c);
    }
    function c() {
      if (!r.value || !o.value) return;
      const g = r.value.getBoundingClientRect(), b = g.bottom + window.scrollY + 6, A = o.value.offsetWidth;
      let C = g.left + window.scrollX;
      a.align === "center" ? C += g.width / 2 - A / 2 : a.align === "right" && (C = g.right - A + window.scrollX), s.value = {
        position: "absolute",
        top: `${b}px`,
        left: `${C}px`,
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
    return Te(() => {
      document.addEventListener("click", p), window.addEventListener("resize", v), document.addEventListener("close-all-dropdowns", y);
    }), Ce(() => {
      document.removeEventListener("click", p), window.removeEventListener("resize", v), document.removeEventListener("close-all-dropdowns", y);
    }), (g, b) => (u(), f("div", {
      class: "fu-dropdown",
      ref_key: "dropdown",
      ref: r
    }, [
      m("div", {
        class: "fu-dropdown__trigger",
        onClick: l
      }, [
        re(g.$slots, "trigger", {}, void 0, !0)
      ]),
      (u(), K(ke, { to: "body" }, [
        G(He, { name: "fade" }, {
          default: ce(() => [
            i.value ? (u(), f("div", {
              key: 0,
              class: Y(["fu-dropdown__menu", [`fu-dropdown__menu--${t.align}`]]),
              style: ne(s.value),
              ref_key: "menuRef",
              ref: o
            }, [
              t.content ? (u(), f("div", xd, [
                re(g.$slots, "content", {}, void 0, !0)
              ])) : w("", !0),
              t.groups?.length ? (u(!0), f(B, { key: 1 }, ae(t.groups, (A, C) => (u(), f("div", { key: C }, [
                A.label ? (u(), f("div", Pd, S(A.label), 1)) : w("", !0),
                (u(!0), f(B, null, ae(A.actions, (E, M) => (u(), f(B, {
                  key: E.type === "divider" ? `divider-${C}-${M}` : `action-${E.label}-${C}-${M}`
                }, [
                  E.type === "divider" ? (u(), f("div", $d)) : (u(), f("div", Fd, [
                    m("a", {
                      class: Y(["fu-dropdown__item", { "fu-dropdown__item--disabled": E.disabled }]),
                      onClick: (k) => !E.disabled && d(E)
                    }, [
                      E.icon ? (u(), K(be(E.icon), {
                        key: 0,
                        class: "fu-dropdown__icon"
                      })) : w("", !0),
                      de(" " + S(E.label), 1)
                    ], 10, Bd)
                  ]))
                ], 64))), 128)),
                C !== t.groups.length - 1 ? (u(), f("div", zd)) : w("", !0)
              ]))), 128)) : (u(!0), f(B, { key: 2 }, ae(t.actions, (A, C) => (u(), f(B, {
                key: A.type === "divider" ? `divider-${C}` : `action-${A.label}-${C}`
              }, [
                A.type === "divider" ? (u(), f("div", Ld)) : (u(), f("div", Hd, [
                  m("a", {
                    class: Y(["fu-dropdown__item", { "fu-dropdown__item--disabled": A.disabled }]),
                    onClick: (E) => !A.disabled && d(A)
                  }, [
                    A.icon ? (u(), K(be(A.icon), {
                      key: 0,
                      class: "fu-dropdown__icon"
                    })) : w("", !0),
                    de(" " + S(A.label), 1)
                  ], 10, Vd)
                ]))
              ], 64))), 128))
            ], 6)) : w("", !0)
          ]),
          _: 3
        })
      ]))
    ], 512));
  }
}), On = /* @__PURE__ */ X(jd, [["__scopeId", "data-v-2b0079db"]]), Ud = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: On
}, Symbol.toStringTag, { value: "Module" })), Wd = {
  key: 0,
  class: "efw-read"
}, Yd = {
  key: 1,
  class: "efw-edit"
}, Gd = { class: "efw-footer" }, Kd = { class: "efw-read" }, qd = { class: "efw-footer" }, Qd = /* @__PURE__ */ oe({
  __name: "EditableFieldWrapper",
  props: {
    modelValue: { default: () => ({}) },
    mode: { default: "inline" },
    teleportTo: { default: "body" },
    align: { default: "right" },
    disableOutsideClose: { type: Boolean, default: !1 }
  },
  setup(t, { expose: e }) {
    const n = t, a = N(!1), i = N(null), r = fr({ top: 0, left: 0 }), o = N(null), s = N(null);
    function l(y) {
      if (y === null || typeof y != "object") return y;
      const g = Ts(y);
      return Array.isArray(g) ? [...g] : g.constructor === Object ? { ...g } : g;
    }
    function c() {
      document.dispatchEvent(new CustomEvent("close-all-editors")), i.value = l(n.modelValue), a.value = !0;
    }
    function d(y) {
      if (a.value) {
        h();
        return;
      }
      document.dispatchEvent(new CustomEvent("close-all-editors")), i.value = l(n.modelValue), ye(() => {
        a.value = !0, ye(() => {
          const g = y?.currentTarget;
          if (!g || !s.value) return;
          const b = g.getBoundingClientRect(), A = s.value.offsetWidth;
          r.top = b.bottom + 6 + window.scrollY, n.align === "left" ? r.left = b.left + window.scrollX : n.align === "center" ? r.left = b.left + b.width / 2 - A / 2 + window.scrollX : r.left = b.right - A + window.scrollX;
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
    return Te(() => {
      document.addEventListener("close-all-editors", p), document.addEventListener("ew-close", h), document.addEventListener("pointerdown", v), window.addEventListener("resize", h);
    }), Ce(() => {
      document.removeEventListener("close-all-editors", p), document.removeEventListener("ew-close", h), document.removeEventListener("pointerdown", v), window.removeEventListener("resize", h);
    }), e({
      startEditing: c,
      openTeleport: d,
      closeEditor: h
    }), (y, g) => t.mode === "inline" ? (u(), f("div", {
      key: 0,
      class: "efw-wrapper",
      ref_key: "inlineRef",
      ref: o
    }, [
      a.value ? (u(), f("div", Yd, [
        re(y.$slots, "edit", { model: i.value }, void 0, !0),
        m("div", Gd, [
          re(y.$slots, "actions", {}, void 0, !0)
        ])
      ])) : (u(), f("div", Wd, [
        re(y.$slots, "read", {}, void 0, !0)
      ]))
    ], 512)) : (u(), f(B, { key: 1 }, [
      m("div", Kd, [
        re(y.$slots, "read", {}, void 0, !0)
      ]),
      (u(), K(ke, { to: t.teleportTo }, [
        a.value ? (u(), f("div", {
          key: 0,
          class: "efw-teleport-card",
          ref_key: "teleportRef",
          ref: s,
          style: ne({ top: r.top + "px", left: r.left + "px" })
        }, [
          re(y.$slots, "edit", { model: i.value }, void 0, !0),
          m("div", qd, [
            re(y.$slots, "actions", {}, void 0, !0)
          ])
        ], 4)) : w("", !0)
      ], 8, ["to"]))
    ], 64));
  }
}), Zd = /* @__PURE__ */ X(Qd, [["__scopeId", "data-v-90094e16"]]), Jd = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Zd
}, Symbol.toStringTag, { value: "Module" })), Xd = {
  components: {
    text: Je(() => Promise.resolve().then(() => As)),
    image: Je(() => Promise.resolve().then(() => Mr)),
    video: Je(() => Promise.resolve().then(() => Cs)),
    divider: Je(() => Promise.resolve().then(() => kr)),
    service: Je(() => Promise.resolve().then(() => bs)),
    question: Je(() => Promise.resolve().then(() => xr)),
    scheduler: Je(() => Promise.resolve().then(() => gs)),
    invoice: Je(() => Promise.resolve().then(() => Nr)),
    contract: Je(() => Promise.resolve().then(() => Tr))
  },
  resolve(t) {
    const e = this.components[t];
    return e || (console.warn(`⚠️ Widget type "${t}" not registered.`), null);
  }
}, ii = 24, ef = /* @__PURE__ */ oe({
  __name: "BlockRenderer",
  props: {
    block: {}
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
      const d = ii * (n.block.columns.length - 1) / n.block.columns.length;
      return {
        width: `calc(${c}% - ${d}px)`
      };
    }
    const o = P(() => ({
      maxWidth: {
        sm: "560px",
        md: "816px",
        lg: "1024px",
        full: "100%"
      }[n.block.contentWidth ?? "md"],
      margin: "0 auto",
      width: "100%"
    })), s = P(() => ({
      paddingTop: `${n.block.paddingTop ?? 60}px`,
      paddingBottom: `${n.block.paddingBottom ?? 60}px`,
      backgroundColor: n.block.backgroundColor || "transparent",
      opacity: n.block.backgroundOpacity !== void 0 ? n.block.backgroundOpacity / 100 : 1
    })), l = P(() => ({
      display: "flex",
      flexWrap: "wrap",
      gap: `${ii}px`,
      width: "100%",
      alignItems: "stretch"
    }));
    return (c, d) => (u(), f("div", {
      class: "block-content",
      style: ne(s.value)
    }, [
      m("div", {
        class: "inner",
        style: ne(o.value)
      }, [
        m("div", {
          class: "columns",
          style: ne(l.value)
        }, [
          (u(!0), f(B, null, ae(t.block.columns, (h, p) => (u(), f("div", {
            key: p,
            class: "column",
            style: ne(r(h.width))
          }, [
            (u(!0), f(B, null, ae(h.widgets, (v) => (u(), K(be(ie(Xd).resolve(v.type)), Ot({
              key: v.id
            }, { ref_for: !0 }, v.props, {
              widget: v,
              widgetId: v.id
            }, ks(i(v.id))), null, 16, ["widget", "widgetId"]))), 128))
          ], 4))), 128))
        ], 4)
      ], 4)
    ], 4));
  }
}), _r = /* @__PURE__ */ X(ef, [["__scopeId", "data-v-2a17f04e"]]), tf = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _r
}, Symbol.toStringTag, { value: "Module" })), nf = { class: "fu-signature-wrapper" }, af = {
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
    Te(() => {
      const y = i.value;
      if (r.value = y.getContext("2d"), s(), window.addEventListener("resize", s), n.image) {
        const g = new Image();
        g.onload = () => r.value.drawImage(g, 0, 0), g.src = n.image;
      }
    }), Ce(() => {
      window.removeEventListener("resize", s);
    });
    const s = () => {
      const y = i.value, g = y.getBoundingClientRect(), b = window.devicePixelRatio || 1;
      y.width = g.width * b, y.height = g.height * b, r.value.setTransform(1, 0, 0, 1, 0, 0), r.value.scale(b, b), r.value.strokeStyle = n.color, r.value.lineWidth = n.lineWidth, r.value.lineCap = "round", r.value.lineJoin = "round";
    }, l = (y) => {
      const g = i.value.getBoundingClientRect(), b = y.clientX || y.touches && y.touches[0].clientX, A = y.clientY || y.touches && y.touches[0].clientY;
      return {
        x: b - g.left,
        y: A - g.top
      };
    }, c = (y) => {
      o.value = !0;
      const { x: g, y: b } = l(y);
      r.value.beginPath(), r.value.moveTo(g, b);
    }, d = (y) => {
      if (!o.value) return;
      const { x: g, y: b } = l(y);
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
    return (y, g) => (u(), f("div", nf, [
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
}, Sr = /* @__PURE__ */ X(af, [["__scopeId", "data-v-9055b31b"]]), rf = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Sr
}, Symbol.toStringTag, { value: "Module" })), of = { class: "fcv-wrap" }, sf = { class: "fcv-a4" }, lf = ["innerHTML"], uf = { class: "fcv-sigs" }, cf = { class: "fcv-sigs__grid" }, df = ["src"], ff = { class: "fcv-sig__footer" }, mf = { class: "fcv-sig__footer-left" }, hf = { class: "fcv-sig__name" }, vf = {
  key: 0,
  class: "fcv-sig__role"
}, pf = {
  key: 1,
  class: "fcv-sig__company"
}, gf = { class: "fcv-sig__footer-right" }, yf = { class: "fcv-sig__date" }, bf = ["onClick"], Af = {
  key: 1,
  class: "fcv-sigpad"
}, Cf = { class: "fcv-sigpad__tabs" }, wf = {
  key: 0,
  class: "fcv-sigpad__type-panel"
}, _f = { class: "fcv-sigpad__type-preview" }, Sf = { class: "fcv-sigpad__cursive" }, Tf = { class: "fcv-sigpad__font-row" }, kf = ["onClick"], Ef = {
  key: 1,
  class: "fcv-sigpad__draw-panel"
}, Mf = { class: "fcv-sigpad__details" }, Nf = { class: "fcv-sigpad__actions" }, Df = ["disabled", "onClick"], If = {
  __name: "FuContractRenderer",
  props: {
    widgetId: { type: [String, Number], default: null },
    content: { type: String, default: "" },
    signatures: { type: Array, default: () => [] }
  },
  emits: ["update"],
  setup(t, { emit: e }) {
    Es((E) => ({
      v80ff0bba: c.value
    }));
    const n = P(() => {
      if (!a.content) return "";
      const M = new DOMParser().parseFromString(a.content, "text/html");
      return M.querySelectorAll("span[fieldtype='smart']").forEach((k) => {
        const F = k.getAttribute("content") || "";
        k.replaceWith(F);
      }), M.body.innerHTML;
    }), a = t, i = e, r = N(JSON.parse(JSON.stringify(a.signatures))), o = N(null), s = N("type"), l = N(""), c = N("'Caveat', cursive"), d = N(null), h = N({ signerName: "", signerRole: "", signerCompany: "" }), p = [
      { label: "Caveat", value: "'Caveat', cursive" },
      { label: "Dancing", value: "'Dancing Script', cursive" },
      { label: "Pacifico", value: "'Pacifico', cursive" },
      { label: "Satisfy", value: "'Satisfy', cursive" }
    ], v = P(() => h.value.signerName.trim() ? s.value === "type" ? !!l.value.trim() : !!d.value : !1);
    function y(E) {
      o.value = E, s.value = "type", d.value = null, l.value = "";
    }
    function g() {
      o.value = null;
    }
    function b(E) {
      return !!E.signedOn && !!E.signatureData;
    }
    function A(E, M) {
      let k = null, F = s.value;
      if (s.value === "type") {
        const j = `<svg xmlns="http://www.w3.org/2000/svg" width="320" height="80" viewBox="0 0 320 80">
      <text x="160" y="54" text-anchor="middle" font-family="${c.value}" font-size="38" fill="#111827">${l.value}</text>
    </svg>`;
        k = "data:image/svg+xml;base64," + btoa(unescape(encodeURIComponent(j)));
      } else
        k = d.value;
      const O = {
        ...E,
        ...h.value,
        signatureType: F,
        signatureData: k,
        signedOn: (/* @__PURE__ */ new Date()).toISOString()
      };
      r.value[M] = O, o.value = null, i("update", {
        widgetId: a.widgetId,
        signatures: JSON.parse(JSON.stringify(r.value)),
        updatedSig: O,
        sigIndex: M
      });
    }
    function C(E) {
      return E ? new Date(E).toLocaleString("en-GB", {
        day: "numeric",
        month: "short",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        hour12: !1
      }) : "";
    }
    return (E, M) => (u(), f("div", of, [
      m("div", sf, [
        m("div", {
          class: "fcv-body",
          innerHTML: n.value
        }, null, 8, lf),
        m("div", uf, [
          M[10] || (M[10] = m("div", { class: "fcv-sigs__label" }, "Signatures", -1)),
          M[11] || (M[11] = m("div", { class: "fcv-sigs__rule" }, null, -1)),
          m("div", cf, [
            (u(!0), f(B, null, ae(r.value, (k, F) => (u(), f("div", {
              key: k.id,
              class: Y(["fcv-sig", {
                "fcv-sig--signed": b(k),
                "fcv-sig--required": k.required && !b(k),
                "fcv-sig--active": o.value === k.id && !b(k),
                "fcv-sig--invalidated": !!k.invalidatedOn
              }])
            }, [
              b(k) ? (u(), f(B, { key: 0 }, [
                m("div", {
                  class: Y(["fcv-sig__box fcv-sig__box--done", { "fcv-sig__box--void": k.invalidatedOn }])
                }, [
                  k.signatureData ? (u(), f("img", {
                    key: 0,
                    src: k.signatureData,
                    class: "fcv-sig__img",
                    alt: "Signature"
                  }, null, 8, df)) : w("", !0)
                ], 2),
                m("div", ff, [
                  m("div", mf, [
                    m("span", hf, S(k.signerName || "—"), 1),
                    k.signerRole ? (u(), f("span", vf, S(k.signerRole), 1)) : w("", !0),
                    k.signerCompany ? (u(), f("span", pf, S(k.signerCompany), 1)) : w("", !0)
                  ]),
                  m("div", gf, [
                    M[8] || (M[8] = m("span", { class: "fcv-sig__badge fcv-sig__badge--signed" }, "✓ Signed", -1)),
                    m("span", yf, S(C(k.signedOn)), 1)
                  ])
                ])
              ], 64)) : (u(), f(B, { key: 1 }, [
                o.value !== k.id ? (u(), f("div", {
                  key: 0,
                  class: "fcv-sig__box fcv-sig__box--unsigned",
                  onClick: (O) => y(k.id)
                }, [...M[9] || (M[9] = [
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
                ])], 8, bf)) : (u(), f("div", Af, [
                  m("div", Cf, [
                    m("button", {
                      class: Y(["fcv-sigpad__tab", { "fcv-sigpad__tab--active": s.value === "type" }]),
                      onClick: M[0] || (M[0] = (O) => s.value = "type")
                    }, " Type name ", 2),
                    m("button", {
                      class: Y(["fcv-sigpad__tab", { "fcv-sigpad__tab--active": s.value === "draw" }]),
                      onClick: M[1] || (M[1] = (O) => s.value = "draw")
                    }, " Draw ", 2)
                  ]),
                  s.value === "type" ? (u(), f("div", wf, [
                    je(m("input", {
                      "onUpdate:modelValue": M[2] || (M[2] = (O) => l.value = O),
                      class: "fcv-sigpad__name-input",
                      placeholder: "Your full name",
                      onInput: M[3] || (M[3] = (O) => h.value.signerName = l.value)
                    }, null, 544), [
                      [nt, l.value]
                    ]),
                    m("div", _f, [
                      m("span", Sf, S(l.value || "Your Signature"), 1)
                    ]),
                    m("div", Tf, [
                      (u(), f(B, null, ae(p, (O) => m("button", {
                        key: O.value,
                        class: "fcv-sigpad__font-btn",
                        style: ne({ fontFamily: O.value }),
                        onClick: (j) => c.value = O.value
                      }, " Aa ", 12, kf)), 64))
                    ])
                  ])) : w("", !0),
                  s.value === "draw" ? (u(), f("div", Ef, [
                    G(Sr, {
                      image: d.value,
                      "onUpdate:image": M[4] || (M[4] = (O) => d.value = O),
                      class: "fcv-sigpad__canvas-wrap"
                    }, null, 8, ["image"])
                  ])) : w("", !0),
                  m("div", Mf, [
                    je(m("input", {
                      "onUpdate:modelValue": M[5] || (M[5] = (O) => h.value.signerName = O),
                      class: "fcv-sigpad__field",
                      placeholder: "Full name *"
                    }, null, 512), [
                      [nt, h.value.signerName]
                    ]),
                    je(m("input", {
                      "onUpdate:modelValue": M[6] || (M[6] = (O) => h.value.signerRole = O),
                      class: "fcv-sigpad__field",
                      placeholder: "Role / title"
                    }, null, 512), [
                      [nt, h.value.signerRole]
                    ]),
                    je(m("input", {
                      "onUpdate:modelValue": M[7] || (M[7] = (O) => h.value.signerCompany = O),
                      class: "fcv-sigpad__field",
                      placeholder: "Company"
                    }, null, 512), [
                      [nt, h.value.signerCompany]
                    ])
                  ]),
                  m("div", Nf, [
                    m("button", {
                      class: "fcv-sigpad__cancel",
                      onClick: g
                    }, "Cancel"),
                    m("button", {
                      class: "fcv-sigpad__submit",
                      disabled: !v.value,
                      onClick: (O) => A(k, F)
                    }, " Sign document ", 8, Df)
                  ])
                ]))
              ], 64))
            ], 2))), 128))
          ])
        ])
      ])
    ]));
  }
}, Of = /* @__PURE__ */ X(If, [["__scopeId", "data-v-dcf50def"]]), Tr = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Of
}, Symbol.toStringTag, { value: "Module" })), Rf = {
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
      marginBottom: l
    } = e.widget, c = P(() => {
      let d = "center";
      return o === "left" ? d = "flex-start" : o === "right" && (d = "flex-end"), {
        display: "flex",
        justifyContent: d,
        width: "100%",
        marginTop: s + "px",
        marginBottom: l + "px",
        "--divider-color": n || "#CBD5E1",
        "--divider-thickness": a + "px" || "1px",
        "--divider-style": r || "solid"
      };
    });
    return (d, h) => (u(), f("div", {
      class: "divider-widget",
      style: ne(c.value)
    }, null, 4));
  }
}, xf = /* @__PURE__ */ X(Rf, [["__scopeId", "data-v-51711f98"]]), kr = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: xf
}, Symbol.toStringTag, { value: "Module" })), Er = /* @__PURE__ */ oe({
  __name: "PageRenderer",
  props: {
    page: {}
  },
  emits: ["action"],
  setup(t, { emit: e }) {
    const n = t, a = P(() => ({
      backgroundColor: n.page.styles?.backgroundColor || "transparent",
      backgroundImage: n.page.styles?.backgroundImage ? `url(${n.page.styles.backgroundImage})` : "none",
      backgroundSize: "cover",
      minHeight: "100vh",
      width: "100%"
    }));
    return (i, r) => (u(), f("section", {
      class: "page-renderer",
      style: ne(a.value)
    }, [
      (u(!0), f(B, null, ae(t.page.blocks, (o) => (u(), K(_r, {
        key: o.id,
        block: o,
        onAction: r[0] || (r[0] = (s) => i.$emit("action", s))
      }, null, 8, ["block"]))), 128))
    ], 4));
  }
}), Pf = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Er
}, Symbol.toStringTag, { value: "Module" })), $f = { class: "document-root" }, Ff = /* @__PURE__ */ oe({
  __name: "FuDocumentRenderer",
  props: {
    document: {}
  },
  emits: ["action"],
  setup(t) {
    return (e, n) => (u(), f("div", $f, [
      (u(!0), f(B, null, ae(t.document.pages, (a) => (u(), K(Er, {
        key: a.id,
        page: a,
        onAction: n[0] || (n[0] = (i) => e.$emit("action", i))
      }, null, 8, ["page"]))), 128))
    ]));
  }
}), Bf = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Ff
}, Symbol.toStringTag, { value: "Module" })), zf = {
  key: 0,
  class: "fu-empty-state"
}, Lf = ["src", "alt"], Hf = /* @__PURE__ */ oe({
  __name: "ImageRenderer",
  props: {
    widget: {}
  },
  setup(t) {
    const e = t, n = P(() => e.widget?.props ?? {}), a = P(() => n.value.src ?? ""), i = P(() => n.value.alt ?? "Image"), r = P(() => n.value.alignment ?? "center"), o = P(() => n.value.imageWidth), s = P(() => n.value.opacity ?? 100), l = P(() => n.value.borderRadius ?? 8), c = P(() => `is-${r.value}`), d = P(() => ({
      width: "100%",
      display: "flex",
      justifyContent: r.value === "left" ? "flex-start" : r.value === "right" ? "flex-end" : "center"
    })), h = P(() => ({
      width: r.value === "stretch" ? "100%" : o.value ? `${o.value}px` : "auto",
      maxWidth: "100%"
    })), p = P(() => ({
      width: "100%",
      height: "auto",
      display: "block",
      opacity: s.value / 100,
      borderRadius: `${l.value}px`
    }));
    return (v, y) => (u(), f("div", {
      class: Y(["fu-image-widget", c.value]),
      style: ne(d.value)
    }, [
      a.value ? (u(), f("div", {
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
        }, null, 12, Lf)
      ], 4)) : (u(), f("div", zf, [
        G(ie(Us), { size: 32 }),
        y[0] || (y[0] = m("span", null, "Image", -1))
      ]))
    ], 6));
  }
}), Vf = /* @__PURE__ */ X(Hf, [["__scopeId", "data-v-fae8ea9f"]]), Mr = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Vf
}, Symbol.toStringTag, { value: "Module" })), jf = { class: "fip-wrap" }, Uf = { class: "fip-header-inner" }, Wf = { class: "fip-header-left" }, Yf = {
  key: 0,
  class: "fip-logo-wrap"
}, Gf = ["src"], Kf = {
  key: 1,
  class: "fip-from"
}, qf = { class: "fip-from-name" }, Qf = {
  key: 0,
  class: "fip-from-detail"
}, Zf = {
  key: 1,
  class: "fip-from-detail"
}, Jf = {
  key: 2,
  class: "fip-from-detail"
}, Xf = { class: "fip-header-right" }, em = {
  key: 0,
  class: "fip-title"
}, tm = { class: "fip-meta-grid" }, nm = { class: "fip-meta-val" }, am = { class: "fip-meta-val" }, im = { class: "fip-meta-val" }, rm = { class: "fip-meta-val" }, om = {
  key: 0,
  class: "fip-bill-to"
}, sm = { class: "fip-billto-name" }, lm = {
  key: 0,
  class: "fip-client-detail"
}, um = {
  key: 1,
  class: "fip-client-detail"
}, cm = {
  key: 2,
  class: "fip-client-detail"
}, dm = { class: "fip-header fip-header--minimal" }, fm = { class: "fip-header-inner fip-header-inner--minimal" }, mm = { class: "fip-header-left" }, hm = {
  key: 0,
  class: "fip-from"
}, vm = { class: "fip-from-name fip-from-name--minimal" }, pm = {
  key: 0,
  class: "fip-from-detail"
}, gm = {
  key: 1,
  class: "fip-from-detail"
}, ym = { class: "fip-header-right" }, bm = {
  key: 0,
  class: "fip-title fip-title--minimal"
}, Am = { class: "fip-meta-grid fip-meta-grid--minimal" }, Cm = { class: "fip-meta-val" }, wm = { class: "fip-meta-val" }, _m = { class: "fip-meta-val" }, Sm = {
  key: 0,
  class: "fip-bill-to fip-bill-to--minimal"
}, Tm = { class: "fip-billto-name" }, km = {
  key: 0,
  class: "fip-client-detail"
}, Em = {
  key: 1,
  class: "fip-client-detail"
}, Mm = {
  key: 2,
  class: "fip-client-detail"
}, Nm = { class: "fip-modern-band-left" }, Dm = ["src"], Im = {
  key: 1,
  class: "fip-from fip-from--modern"
}, Om = { class: "fip-from-name" }, Rm = {
  key: 0,
  class: "fip-from-detail"
}, xm = {
  key: 1,
  class: "fip-from-detail"
}, Pm = { class: "fip-modern-band-right" }, $m = {
  key: 0,
  class: "fip-title fip-title--modern"
}, Fm = { class: "fip-meta-grid" }, Bm = { class: "fip-meta-val fip-meta-val--modern" }, zm = { class: "fip-meta-val fip-meta-val--modern" }, Lm = { class: "fip-meta-val fip-meta-val--modern" }, Hm = { class: "fip-meta-val fip-meta-val--modern" }, Vm = {
  key: 0,
  class: "fip-bill-to fip-bill-to--modern"
}, jm = { class: "fip-billto-name" }, Um = {
  key: 0,
  class: "fip-client-detail"
}, Wm = {
  key: 1,
  class: "fip-client-detail"
}, Ym = {
  key: 2,
  class: "fip-client-detail"
}, Gm = { class: "fip-header-inner fip-header-inner--detailed" }, Km = { class: "fip-header-left fip-header-left--detailed" }, qm = ["src"], Qm = {
  key: 1,
  class: "fip-from fip-from--detailed"
}, Zm = { class: "fip-from-name fip-from-name--detailed" }, Jm = {
  key: 0,
  class: "fip-from-detail"
}, Xm = {
  key: 1,
  class: "fip-from-detail"
}, eh = {
  key: 2,
  class: "fip-from-detail"
}, th = { class: "fip-header-right fip-header-right--detailed" }, nh = {
  key: 0,
  class: "fip-title fip-title--detailed"
}, ah = { class: "fip-detail-table" }, ih = { key: 0 }, rh = { class: "fip-dt-val" }, oh = { key: 1 }, sh = { class: "fip-dt-val" }, lh = { key: 2 }, uh = { class: "fip-dt-val" }, ch = { key: 3 }, dh = { class: "fip-dt-val" }, fh = {
  key: 0,
  class: "fip-bill-to fip-bill-to--detailed"
}, mh = { class: "fip-billto-name" }, hh = {
  key: 0,
  class: "fip-client-detail"
}, vh = {
  key: 1,
  class: "fip-client-detail"
}, ph = {
  key: 2,
  class: "fip-client-detail"
}, gh = { class: "fip-col-headers" }, yh = {
  key: 0,
  class: "fip-col-qty"
}, bh = {
  key: 1,
  class: "fip-col-unit"
}, Ah = {
  key: 2,
  class: "fip-col-price"
}, Ch = {
  key: 3,
  class: "fip-col-tax"
}, wh = { class: "fip-row fip-row--main" }, _h = { class: "fip-col-name fip-name-cell" }, Sh = ["src"], Th = { class: "fip-name-text" }, kh = { class: "fip-svc-name" }, Eh = {
  key: 0,
  class: "fip-svc-desc"
}, Mh = {
  key: 0,
  class: "fip-col-qty fip-num"
}, Nh = {
  key: 1,
  class: "fip-col-unit fip-unit"
}, Dh = {
  key: 2,
  class: "fip-col-price fip-num"
}, Ih = {
  key: 3,
  class: "fip-col-tax"
}, Oh = { class: "fip-col-total fip-row-total" }, Rh = {
  key: 0,
  class: "fip-tax-hint"
}, xh = { class: "fip-col-name fip-name-cell fip-name-cell--sub" }, Ph = { class: "fip-svc-name fip-svc-name--sub" }, $h = {
  key: 0,
  class: "fip-col-qty fip-num"
}, Fh = {
  key: 1,
  class: "fip-col-unit fip-unit"
}, Bh = {
  key: 2,
  class: "fip-col-price fip-num"
}, zh = {
  key: 3,
  class: "fip-col-tax"
}, Lh = { class: "fip-col-total fip-row-total" }, Hh = {
  key: 0,
  class: "fip-tax-hint"
}, Vh = { class: "fip-summary" }, jh = { class: "fip-sum-row" }, Uh = { class: "fip-sum-val" }, Wh = { class: "fip-sum-row" }, Yh = { class: "fip-sum-key" }, Gh = { class: "fip-sum-val fip-sum-val--discount" }, Kh = { class: "fip-sum-row" }, qh = { class: "fip-sum-key" }, Qh = { class: "fip-sum-val" }, Zh = { class: "fip-sum-key" }, Jh = { class: "fip-sum-val" }, Xh = {
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
    }), a = P(() => {
      const A = e.footer?.currency || "GBP";
      return A === "USD" ? "$" : A === "EUR" ? "€" : "£";
    });
    function i(A) {
      return `${a.value}${(A || 0).toLocaleString("en-GB", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
      })}`;
    }
    function r(A) {
      return (A.qty || 0) * (A.price || 0);
    }
    const o = P(
      () => (e.serviceBlocks || []).reduce((A, C) => (A += r(C), (C.subItems || []).forEach((E) => A += r(E)), A), 0)
    ), s = P(
      () => (e.serviceBlocks || []).reduce((A, C) => (C.taxable && (A += r(C)), (C.subItems || []).forEach((E) => {
        E.taxable && (A += r(E));
      }), A), 0)
    ), l = P(() => {
      const A = e.footer?.taxes;
      return Array.isArray(A) && A.length ? A[0] : { label: "Tax", rate: 0 };
    }), c = P(
      () => (e.footer?.discounts || []).reduce(
        (A, C) => A + o.value * (C.percent || 0) / 100,
        0
      )
    ), d = P(
      () => s.value * (l.value.rate || 0) / 100
    ), h = P(() => o.value - c.value + d.value), p = P(() => {
      const A = {};
      return e.header?.bgColor && (A.backgroundColor = e.header.bgColor), e.header?.borderColor && (A.borderBottomColor = e.header.borderColor), A;
    }), v = P(
      () => e.header?.borderColor ? { background: e.header.borderColor } : {}
    ), y = P(
      () => e.header?.bgColor ? { background: e.header.bgColor } : { background: "#111827" }
    ), g = P(
      () => e.variant === "modern" && e.header?.bgColor ? { background: e.header.bgColor } : {}
    ), b = P(() => ({ "--fip-cols": [
      "1fr",
      e.showQty ? "60px" : null,
      e.showUnit ? "68px" : null,
      e.showPrice ? "80px" : null,
      e.showTax ? "32px" : null,
      "88px"
    ].filter(Boolean).join(" ") }));
    return (A, C) => (u(), f("div", jf, [
      m("div", {
        class: Y(["fip-a4", `fip-a4--${t.variant}`])
      }, [
        t.variant === "classic" ? (u(), f(B, { key: 0 }, [
          m("div", {
            class: "fip-header fip-header--classic",
            style: ne(p.value)
          }, [
            m("div", Uf, [
              m("div", Wf, [
                t.header.showLogo && t.header.logoUrl ? (u(), f("div", Yf, [
                  m("img", {
                    src: t.header.logoUrl,
                    class: "fip-logo",
                    alt: "Logo"
                  }, null, 8, Gf)
                ])) : w("", !0),
                t.header.showCompany ? (u(), f("div", Kf, [
                  m("p", qf, S(t.header.companyName || ""), 1),
                  t.header.companyEmail ? (u(), f("p", Qf, S(t.header.companyEmail), 1)) : w("", !0),
                  t.header.companyPhone ? (u(), f("p", Zf, S(t.header.companyPhone), 1)) : w("", !0),
                  t.header.companyAddress ? (u(), f("p", Jf, S(t.header.companyAddress), 1)) : w("", !0)
                ])) : w("", !0)
              ]),
              m("div", Xf, [
                t.header.showTitle ? (u(), f("h1", em, S(t.header.invoiceTitle || "INVOICE"), 1)) : w("", !0),
                m("div", tm, [
                  t.header.showInvoiceNumber ? (u(), f(B, { key: 0 }, [
                    C[0] || (C[0] = m("span", { class: "fip-meta-key" }, "Invoice #", -1)),
                    m("span", nm, S(t.header.invoiceNumber || "INV-001"), 1)
                  ], 64)) : w("", !0),
                  t.header.showDate ? (u(), f(B, { key: 1 }, [
                    C[1] || (C[1] = m("span", { class: "fip-meta-key" }, "Date", -1)),
                    m("span", am, S(t.header.invoiceDate || ie(n)), 1)
                  ], 64)) : w("", !0),
                  t.header.showDueDate ? (u(), f(B, { key: 2 }, [
                    C[2] || (C[2] = m("span", { class: "fip-meta-key" }, "Due", -1)),
                    m("span", im, S(t.header.dueDate || "—"), 1)
                  ], 64)) : w("", !0),
                  t.header.showPO ? (u(), f(B, { key: 3 }, [
                    C[3] || (C[3] = m("span", { class: "fip-meta-key" }, "PO #", -1)),
                    m("span", rm, S(t.header.poNumber || "—"), 1)
                  ], 64)) : w("", !0)
                ])
              ])
            ]),
            t.header.showBillTo ? (u(), f("div", om, [
              C[4] || (C[4] = m("p", { class: "fip-section-label" }, "Bill To", -1)),
              m("p", sm, S(t.header.clientName || "—"), 1),
              t.header.clientEmail ? (u(), f("p", lm, S(t.header.clientEmail), 1)) : w("", !0),
              t.header.clientPhone ? (u(), f("p", um, S(t.header.clientPhone), 1)) : w("", !0),
              t.header.clientAddress ? (u(), f("p", cm, S(t.header.clientAddress), 1)) : w("", !0)
            ])) : w("", !0)
          ], 4),
          m("div", {
            class: "fip-divider fip-divider--classic",
            style: ne(v.value)
          }, null, 4)
        ], 64)) : t.variant === "minimal" ? (u(), f(B, { key: 1 }, [
          m("div", dm, [
            m("div", fm, [
              m("div", mm, [
                t.header.showCompany ? (u(), f("div", hm, [
                  m("p", vm, S(t.header.companyName || ""), 1),
                  t.header.companyEmail ? (u(), f("p", pm, S(t.header.companyEmail), 1)) : w("", !0),
                  t.header.companyPhone ? (u(), f("p", gm, S(t.header.companyPhone), 1)) : w("", !0)
                ])) : w("", !0)
              ]),
              m("div", ym, [
                t.header.showTitle ? (u(), f("h1", bm, S(t.header.invoiceTitle || "INVOICE"), 1)) : w("", !0),
                m("div", Am, [
                  t.header.showInvoiceNumber ? (u(), f(B, { key: 0 }, [
                    C[5] || (C[5] = m("span", { class: "fip-meta-key" }, "#", -1)),
                    m("span", Cm, S(t.header.invoiceNumber || "INV-001"), 1)
                  ], 64)) : w("", !0),
                  t.header.showDate ? (u(), f(B, { key: 1 }, [
                    C[6] || (C[6] = m("span", { class: "fip-meta-key" }, "Date", -1)),
                    m("span", wm, S(t.header.invoiceDate || ie(n)), 1)
                  ], 64)) : w("", !0),
                  t.header.showDueDate ? (u(), f(B, { key: 2 }, [
                    C[7] || (C[7] = m("span", { class: "fip-meta-key" }, "Due", -1)),
                    m("span", _m, S(t.header.dueDate || "—"), 1)
                  ], 64)) : w("", !0)
                ])
              ])
            ]),
            t.header.showBillTo ? (u(), f("div", Sm, [
              m("p", Tm, S(t.header.clientName || "—"), 1),
              t.header.clientEmail ? (u(), f("p", km, S(t.header.clientEmail), 1)) : w("", !0),
              t.header.clientPhone ? (u(), f("p", Em, S(t.header.clientPhone), 1)) : w("", !0),
              t.header.clientAddress ? (u(), f("p", Mm, S(t.header.clientAddress), 1)) : w("", !0)
            ])) : w("", !0)
          ]),
          C[8] || (C[8] = m("div", { class: "fip-divider fip-divider--minimal" }, null, -1))
        ], 64)) : t.variant === "modern" ? (u(), f(B, { key: 2 }, [
          m("div", {
            class: "fip-modern-band",
            style: ne(y.value)
          }, [
            m("div", Nm, [
              t.header.showLogo && t.header.logoUrl ? (u(), f("img", {
                key: 0,
                src: t.header.logoUrl,
                class: "fip-logo fip-logo--modern",
                alt: "Logo"
              }, null, 8, Dm)) : w("", !0),
              t.header.showCompany ? (u(), f("div", Im, [
                m("p", Om, S(t.header.companyName || ""), 1),
                t.header.companyEmail ? (u(), f("p", Rm, S(t.header.companyEmail), 1)) : w("", !0),
                t.header.companyPhone ? (u(), f("p", xm, S(t.header.companyPhone), 1)) : w("", !0)
              ])) : w("", !0)
            ]),
            m("div", Pm, [
              t.header.showTitle ? (u(), f("h1", $m, S(t.header.invoiceTitle || "INVOICE"), 1)) : w("", !0),
              m("div", Fm, [
                t.header.showInvoiceNumber ? (u(), f(B, { key: 0 }, [
                  C[9] || (C[9] = m("span", { class: "fip-meta-key fip-meta-key--modern" }, "Invoice #", -1)),
                  m("span", Bm, S(t.header.invoiceNumber || "INV-001"), 1)
                ], 64)) : w("", !0),
                t.header.showDate ? (u(), f(B, { key: 1 }, [
                  C[10] || (C[10] = m("span", { class: "fip-meta-key fip-meta-key--modern" }, "Date", -1)),
                  m("span", zm, S(t.header.invoiceDate || ie(n)), 1)
                ], 64)) : w("", !0),
                t.header.showDueDate ? (u(), f(B, { key: 2 }, [
                  C[11] || (C[11] = m("span", { class: "fip-meta-key fip-meta-key--modern" }, "Due", -1)),
                  m("span", Lm, S(t.header.dueDate || "—"), 1)
                ], 64)) : w("", !0),
                t.header.showPO ? (u(), f(B, { key: 3 }, [
                  C[12] || (C[12] = m("span", { class: "fip-meta-key fip-meta-key--modern" }, "PO #", -1)),
                  m("span", Hm, S(t.header.poNumber || "—"), 1)
                ], 64)) : w("", !0)
              ])
            ])
          ], 4),
          C[14] || (C[14] = m("div", { class: "fip-modern-strip" }, null, -1)),
          t.header.showBillTo ? (u(), f("div", Vm, [
            C[13] || (C[13] = m("p", { class: "fip-section-label" }, "Bill To", -1)),
            m("p", jm, S(t.header.clientName || "—"), 1),
            t.header.clientEmail ? (u(), f("p", Um, S(t.header.clientEmail), 1)) : w("", !0),
            t.header.clientPhone ? (u(), f("p", Wm, S(t.header.clientPhone), 1)) : w("", !0),
            t.header.clientAddress ? (u(), f("p", Ym, S(t.header.clientAddress), 1)) : w("", !0)
          ])) : w("", !0)
        ], 64)) : t.variant === "detailed" ? (u(), f(B, { key: 3 }, [
          m("div", {
            class: "fip-header fip-header--detailed",
            style: ne(p.value)
          }, [
            m("div", Gm, [
              m("div", Km, [
                t.header.showLogo && t.header.logoUrl ? (u(), f("img", {
                  key: 0,
                  src: t.header.logoUrl,
                  class: "fip-logo fip-logo--detailed",
                  alt: "Logo"
                }, null, 8, qm)) : w("", !0),
                t.header.showCompany ? (u(), f("div", Qm, [
                  m("p", Zm, S(t.header.companyName || ""), 1),
                  t.header.companyEmail ? (u(), f("p", Jm, S(t.header.companyEmail), 1)) : w("", !0),
                  t.header.companyPhone ? (u(), f("p", Xm, S(t.header.companyPhone), 1)) : w("", !0),
                  t.header.companyAddress ? (u(), f("p", eh, S(t.header.companyAddress), 1)) : w("", !0)
                ])) : w("", !0)
              ]),
              m("div", th, [
                t.header.showTitle ? (u(), f("h1", nh, S(t.header.invoiceTitle || "INVOICE"), 1)) : w("", !0),
                m("table", ah, [
                  t.header.showInvoiceNumber ? (u(), f("tr", ih, [
                    C[15] || (C[15] = m("td", { class: "fip-dt-key" }, "Invoice No.", -1)),
                    m("td", rh, S(t.header.invoiceNumber || "INV-001"), 1)
                  ])) : w("", !0),
                  t.header.showDate ? (u(), f("tr", oh, [
                    C[16] || (C[16] = m("td", { class: "fip-dt-key" }, "Date", -1)),
                    m("td", sh, S(t.header.invoiceDate || ie(n)), 1)
                  ])) : w("", !0),
                  t.header.showDueDate ? (u(), f("tr", lh, [
                    C[17] || (C[17] = m("td", { class: "fip-dt-key" }, "Payment Due", -1)),
                    m("td", uh, S(t.header.dueDate || "—"), 1)
                  ])) : w("", !0),
                  t.header.showPO ? (u(), f("tr", ch, [
                    C[18] || (C[18] = m("td", { class: "fip-dt-key" }, "PO Number", -1)),
                    m("td", dh, S(t.header.poNumber || "—"), 1)
                  ])) : w("", !0)
                ])
              ])
            ]),
            t.header.showBillTo ? (u(), f("div", fh, [
              C[19] || (C[19] = m("p", { class: "fip-section-label" }, "Bill To", -1)),
              m("p", mh, S(t.header.clientName || "—"), 1),
              t.header.clientEmail ? (u(), f("p", hh, S(t.header.clientEmail), 1)) : w("", !0),
              t.header.clientPhone ? (u(), f("p", vh, S(t.header.clientPhone), 1)) : w("", !0),
              t.header.clientAddress ? (u(), f("p", ph, S(t.header.clientAddress), 1)) : w("", !0)
            ])) : w("", !0)
          ], 4),
          C[20] || (C[20] = m("div", { class: "fip-divider fip-divider--detailed" }, null, -1))
        ], 64)) : w("", !0),
        m("div", {
          class: "fip-items",
          style: ne(b.value)
        }, [
          m("div", gh, [
            C[21] || (C[21] = m("span", { class: "fip-col-name" }, "Service", -1)),
            t.showQty ? (u(), f("span", yh, "Qty")) : w("", !0),
            t.showUnit ? (u(), f("span", bh, "Unit")) : w("", !0),
            t.showPrice ? (u(), f("span", Ah, "Price")) : w("", !0),
            t.showTax ? (u(), f("span", Ch, "Tax")) : w("", !0),
            C[22] || (C[22] = m("span", { class: "fip-col-total" }, "Total", -1))
          ]),
          (u(!0), f(B, null, ae(t.serviceBlocks, (E) => (u(), f(B, {
            key: E.id
          }, [
            m("div", wh, [
              m("div", _h, [
                t.showServiceImages && E.imageUrl ? (u(), f("img", {
                  key: 0,
                  src: E.imageUrl,
                  class: "fip-svc-img",
                  alt: ""
                }, null, 8, Sh)) : w("", !0),
                m("div", Th, [
                  m("span", kh, S(E.name || "—"), 1),
                  E.description ? (u(), f("span", Eh, S(E.description), 1)) : w("", !0)
                ])
              ]),
              t.showQty ? (u(), f("span", Mh, S(E.qty ?? "—"), 1)) : w("", !0),
              t.showUnit ? (u(), f("span", Nh, S(E.unit || "—"), 1)) : w("", !0),
              t.showPrice ? (u(), f("span", Dh, S(E.price != null ? i(E.price) : "—"), 1)) : w("", !0),
              t.showTax ? (u(), f("div", Ih, [
                m("span", {
                  class: Y(["fip-tax-dot", { "fip-tax-dot--on": E.taxable }])
                }, null, 2)
              ])) : w("", !0),
              m("div", Oh, [
                m("span", null, S(i(r(E))), 1),
                t.showTax && E.taxable && l.value.rate ? (u(), f("span", Rh, " +" + S(i(r(E) * l.value.rate / 100)) + " tax ", 1)) : w("", !0)
              ])
            ]),
            (u(!0), f(B, null, ae(E.subItems || [], (M) => (u(), f("div", {
              key: M.id,
              class: "fip-row fip-row--sub"
            }, [
              m("div", xh, [
                m("span", Ph, S(M.name || "—"), 1)
              ]),
              t.showQty ? (u(), f("span", $h, S(M.qty ?? "—"), 1)) : w("", !0),
              t.showUnit ? (u(), f("span", Fh, S(M.unit || "—"), 1)) : w("", !0),
              t.showPrice ? (u(), f("span", Bh, S(M.price != null ? i(M.price) : "—"), 1)) : w("", !0),
              t.showTax ? (u(), f("div", zh, [
                m("span", {
                  class: Y(["fip-tax-dot", { "fip-tax-dot--on": M.taxable }])
                }, null, 2)
              ])) : w("", !0),
              m("div", Lh, [
                m("span", null, S(i(r(M))), 1),
                t.showTax && M.taxable && l.value.rate ? (u(), f("span", Hh, " +" + S(i(r(M) * l.value.rate / 100)) + " tax ", 1)) : w("", !0)
              ])
            ]))), 128)),
            C[23] || (C[23] = m("div", { class: "fip-block-rule" }, null, -1))
          ], 64))), 128))
        ], 4),
        m("div", {
          class: Y(["fip-summary-zone", `fip-summary-zone--${t.variant}`])
        }, [
          m("div", Vh, [
            m("div", jh, [
              C[24] || (C[24] = m("span", { class: "fip-sum-key" }, "Subtotal", -1)),
              m("span", Uh, S(i(o.value)), 1)
            ]),
            (u(!0), f(B, null, ae(t.footer.discounts || [], (E, M) => (u(), f(B, {
              key: "d" + M
            }, [
              C[25] || (C[25] = m("div", { class: "fip-sum-rule--light" }, null, -1)),
              m("div", Wh, [
                m("span", Yh, S(E.label || "Discount") + " (" + S(E.percent || 0) + "%)", 1),
                m("span", Gh, "− " + S(i(o.value * E.percent / 100)), 1)
              ])
            ], 64))), 128)),
            C[26] || (C[26] = m("div", { class: "fip-sum-rule--light" }, null, -1)),
            m("div", Kh, [
              m("span", qh, S(l.value.label || "Tax") + " (" + S(l.value.rate || 0) + "%)", 1),
              m("span", Qh, S(i(d.value)), 1)
            ]),
            C[27] || (C[27] = m("div", { class: "fip-sum-rule--heavy" }, null, -1)),
            m("div", {
              class: "fip-sum-row fip-sum-row--total",
              style: ne(g.value)
            }, [
              m("span", Zh, "Total (" + S(t.footer.currency || "GBP") + ")", 1),
              m("span", Jh, S(i(h.value)), 1)
            ], 4)
          ])
        ], 2)
      ], 2)
    ]));
  }
}, ev = /* @__PURE__ */ X(Xh, [["__scopeId", "data-v-47ff44b0"]]), Nr = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: ev
}, Symbol.toStringTag, { value: "Module" })), tv = { class: "fu-textarea-wrapper" }, nv = {
  key: 0,
  class: "fu-textarea-label"
}, av = {
  key: 0,
  class: "fu-textarea-required"
}, iv = ["placeholder", "disabled", "rows", "required"], rv = {
  key: 1,
  class: "fu-textarea-error"
}, ov = /* @__PURE__ */ oe({
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
  setup(t, { emit: e }) {
    const n = t, a = e, i = N(n.modelValue);
    return ve(i, (r) => a("update:modelValue", r)), ve(
      () => n.modelValue,
      (r) => i.value = r
    ), (r, o) => (u(), f("div", tv, [
      t.label ? (u(), f("label", nv, [
        de(S(t.label) + " ", 1),
        t.required ? (u(), f("span", av, "*")) : w("", !0)
      ])) : w("", !0),
      je(m("textarea", Ot(r.$attrs, {
        class: ["fu-textarea fu-form-control", [
          `fu-textarea--${t.size}`,
          { "fu-textarea--error": t.error },
          t.variant ? `fu-textarea--${t.variant}` : null
        ]],
        placeholder: t.placeholder,
        disabled: t.disabled,
        rows: t.rows,
        required: t.required,
        "onUpdate:modelValue": o[0] || (o[0] = (s) => i.value = s)
      }), null, 16, iv), [
        [nt, i.value]
      ]),
      t.error ? (u(), f("span", rv, S(t.error), 1)) : w("", !0)
    ]));
  }
}), Dr = /* @__PURE__ */ X(ov, [["__scopeId", "data-v-b711a3bb"]]), sv = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Dr
}, Symbol.toStringTag, { value: "Module" })), lv = ["value", "disabled", "checked"], uv = { class: "fu-radio__control" }, cv = {
  key: 0,
  class: "fu-radio__dot"
}, dv = {
  key: 0,
  class: "fu-radio__label"
}, fv = /* @__PURE__ */ oe({
  __name: "FusionRadio",
  props: {
    modelValue: {},
    value: {},
    size: { default: "md" },
    disabled: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue"],
  setup(t, { emit: e }) {
    const n = t, a = e, i = P({
      get: () => n.modelValue,
      set: (o) => a("update:modelValue", o)
    }), r = P(() => i.value === n.value);
    return (o, s) => (u(), f("label", {
      class: Y(["fu-radio", [`fu-radio--${t.size}`, { "is-checked": r.value, "is-disabled": t.disabled }]])
    }, [
      m("input", {
        type: "radio",
        class: "fu-radio__input",
        value: t.value,
        disabled: t.disabled,
        checked: r.value,
        onChange: s[0] || (s[0] = (l) => a("update:modelValue", t.value))
      }, null, 40, lv),
      m("span", uv, [
        r.value ? (u(), f("span", cv)) : w("", !0)
      ]),
      o.$slots.default ? (u(), f("span", dv, [
        re(o.$slots, "default", {}, void 0, !0)
      ])) : w("", !0)
    ], 2));
  }
}), Ir = /* @__PURE__ */ X(fv, [["__scopeId", "data-v-3c5ecc5b"]]), mv = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Ir
}, Symbol.toStringTag, { value: "Module" })), hv = { class: "fu-upload__content" }, vv = {
  key: 0,
  class: "fu-upload__previews"
}, pv = ["onClick"], gv = ["src"], yv = {
  key: 1,
  class: "fu-upload__file-fallback"
}, bv = {
  key: 1,
  class: "fu-upload__prompt"
}, Av = ["multiple", "accept"], Cv = /* @__PURE__ */ oe({
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
    function l() {
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
        const A = n.maxFileSizeMB * 1024 * 1024;
        if (b.size > A) {
          const M = `File "${b.name}" exceeds max size of ${n.maxFileSizeMB} MB.`;
          a("uploadError", M);
          continue;
        }
        if (o.value.length >= n.maxFiles) {
          const M = `Maximum of ${n.maxFiles} files allowed.`;
          a("uploadError", M);
          break;
        }
        o.value.push(b);
        const C = l();
        if (b.type.startsWith("image/")) {
          const M = new FileReader();
          M.onload = (k) => {
            s.value.push({
              id: C,
              src: k.target?.result,
              file: b,
              isImage: !0
            });
          }, M.readAsDataURL(b);
        } else
          s.value.push({
            id: C,
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
    return (y, g) => (u(), f("div", {
      class: Y(["fu-upload", { dragging: i.value }]),
      onClick: c,
      onDragover: g[0] || (g[0] = ue((b) => i.value = !0, ["prevent"])),
      onDragleave: g[1] || (g[1] = ue((b) => i.value = !1, ["prevent"])),
      onDrop: ue(h, ["prevent"])
    }, [
      m("div", hv, [
        s.value.length ? (u(), f("div", vv, [
          (u(!0), f(B, null, ae(s.value, (b, A) => (u(), f("div", {
            key: b.id,
            class: "fu-upload__preview-item"
          }, [
            m("button", {
              class: "fu-upload__remove",
              onClick: ue((C) => v(A), ["stop"])
            }, " ✕ ", 8, pv),
            b.isImage ? (u(), f("img", {
              key: 0,
              src: b.src,
              class: "fu-upload__preview-img",
              alt: "Preview"
            }, null, 8, gv)) : (u(), f("div", yv, [
              G(ie(ei), { size: 20 }),
              m("span", null, S(b.file.name), 1)
            ]))
          ]))), 128))
        ])) : (u(), f("div", bv, [
          G(ie(ei), {
            class: "fu-upload__icon",
            size: 22
          }),
          re(y.$slots, "description", {}, () => [
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
        }, null, 40, Av)
      ])
    ], 34));
  }
}), Or = /* @__PURE__ */ X(Cv, [["__scopeId", "data-v-1b1249ff"]]), wv = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Or
}, Symbol.toStringTag, { value: "Module" })), _v = ["data-widget-id"], Sv = { class: "qu-label-row" }, Tv = ["innerHTML"], kv = {
  key: 0,
  class: "qu-required"
}, Ev = { class: "qu-input-area" }, Mv = {
  key: 6,
  class: "qu-choices"
}, Nv = {
  key: 7,
  class: "qu-choices"
}, Dv = {
  key: 9,
  class: "qu-contact"
}, Iv = { class: "qu-contact-grid" }, Ov = /* @__PURE__ */ oe({
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
    contactFields: { default: () => ({ email: !0, phone: !0 }) }
  },
  emits: ["update"],
  setup(t, { emit: e }) {
    const n = t, a = e, i = N(
      n.questionType === "multiple_choice" ? Array.isArray(n.value) ? [...n.value] : [] : n.questionType === "contact_details" ? null : n.value ?? ""
    ), r = () => ({
      firstName: "",
      lastName: "",
      email: "",
      phone: ""
    }), o = N(
      n.value && typeof n.value == "object" ? { ...r(), ...n.value } : r()
    ), s = P(() => n.label ? n.label.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, "") : ""), l = P(
      () => n.options.map((b) => ({ label: b.text, _id: b.id }))
    ), c = P({
      get() {
        return l.value.find((b) => b._id === i.value) || null;
      },
      set(b) {
        i.value = b?._id ?? null;
      }
    });
    ve(
      () => n.value,
      (b) => {
        n.questionType === "contact_details" ? o.value = b && typeof b == "object" ? { ...r(), ...b } : r() : i.value = n.questionType === "multiple_choice" ? Array.isArray(b) ? [...b] : [] : b ?? "";
      }
    ), ve(
      () => n.isVisible,
      (b) => {
        if (!b)
          if (n.questionType === "contact_details")
            o.value = r(), a("update", { value: r() });
          else {
            const A = n.questionType === "multiple_choice" ? [] : null;
            i.value = A, a("update", { value: A });
          }
      }
    );
    function d() {
      a("update", { value: i.value });
    }
    function h() {
      a("update", { value: { ...o.value } });
    }
    function p(b) {
      i.value = b?._id ?? null, d();
    }
    function v(b) {
      i.value = b, d();
    }
    function y(b) {
      return Array.isArray(i.value) && i.value.includes(b);
    }
    function g(b) {
      const A = Array.isArray(i.value) ? [...i.value] : [], C = A.indexOf(b);
      C === -1 ? A.push(b) : A.splice(C, 1), i.value = A, d();
    }
    return (b, A) => t.isVisible ? (u(), f("div", {
      key: 0,
      class: "qu-widget",
      "data-widget-id": t.widgetId
    }, [
      m("div", Sv, [
        m("div", {
          class: "qu-label-render",
          innerHTML: s.value
        }, null, 8, Tv),
        t.required ? (u(), f("span", kv, "*")) : w("", !0)
      ]),
      m("div", Ev, [
        t.questionType === "short_text" ? (u(), K(Ie, {
          key: 0,
          modelValue: i.value,
          "onUpdate:modelValue": [
            A[0] || (A[0] = (C) => i.value = C),
            d
          ],
          placeholder: t.placeholder,
          variant: "outline",
          formWrapperWidth: "100%",
          size: "md"
        }, null, 8, ["modelValue", "placeholder"])) : t.questionType === "long_text" ? (u(), K(Dr, {
          key: 1,
          modelValue: i.value,
          "onUpdate:modelValue": [
            A[1] || (A[1] = (C) => i.value = C),
            d
          ],
          placeholder: t.placeholder,
          variant: "outline",
          formWrapperWidth: "100%"
        }, null, 8, ["modelValue", "placeholder"])) : t.questionType === "number" ? (u(), K(Ie, {
          key: 2,
          type: "number",
          modelValue: i.value,
          "onUpdate:modelValue": [
            A[2] || (A[2] = (C) => i.value = C),
            d
          ],
          placeholder: t.placeholder,
          variant: "outline",
          formWrapperWidth: "100%",
          size: "md"
        }, null, 8, ["modelValue", "placeholder"])) : t.questionType === "link" ? (u(), K(Ie, {
          key: 3,
          type: "url",
          modelValue: i.value,
          "onUpdate:modelValue": [
            A[3] || (A[3] = (C) => i.value = C),
            d
          ],
          placeholder: t.placeholder,
          variant: "outline",
          formWrapperWidth: "100%",
          size: "md"
        }, null, 8, ["modelValue", "placeholder"])) : t.questionType === "date" ? (u(), K(wr, {
          key: 4,
          modelValue: i.value,
          "onUpdate:modelValue": [
            A[4] || (A[4] = (C) => i.value = C),
            d
          ],
          variant: "date",
          placeholder: t.placeholder,
          size: "md",
          formWrapperWidth: "100%"
        }, null, 8, ["modelValue", "placeholder"])) : t.questionType === "dropdown" ? (u(), K(Sa, {
          key: 5,
          modelValue: c.value,
          "onUpdate:modelValue": [
            A[5] || (A[5] = (C) => c.value = C),
            p
          ],
          options: l.value,
          placeholder: t.placeholder,
          align: "left",
          size: "md"
        }, null, 8, ["modelValue", "options", "placeholder"])) : t.questionType === "single_choice" ? (u(), f("div", Mv, [
          (u(!0), f(B, null, ae(t.options, (C) => (u(), K(Ir, {
            key: C.id,
            modelValue: i.value,
            "onUpdate:modelValue": [
              A[6] || (A[6] = (E) => i.value = E),
              d
            ],
            value: C.id,
            name: `qu-${t.widgetId}`
          }, {
            default: ce(() => [
              de(S(C.text), 1)
            ]),
            _: 2
          }, 1032, ["modelValue", "value", "name"]))), 128))
        ])) : t.questionType === "multiple_choice" ? (u(), f("div", Nv, [
          (u(!0), f(B, null, ae(t.options, (C) => (u(), K(Rt, {
            key: C.id,
            modelValue: y(C.id),
            label: C.text,
            "onUpdate:modelValue": (E) => g(C.id)
          }, null, 8, ["modelValue", "label", "onUpdate:modelValue"]))), 128))
        ])) : t.questionType === "upload" ? (u(), K(Or, {
          key: 8,
          accept: ".jpg,.jpeg,.png,.gif,.pdf,.doc,.docx",
          maxFiles: 10,
          maxFileSizeMB: 15,
          multiple: "",
          "onUpdate:modelValue": v
        })) : t.questionType === "contact_details" ? (u(), f("div", Dv, [
          m("div", Iv, [
            G(Ie, {
              modelValue: o.value.firstName,
              "onUpdate:modelValue": [
                A[7] || (A[7] = (C) => o.value.firstName = C),
                h
              ],
              placeholder: "First name",
              variant: "outline",
              formWrapperWidth: "100%",
              size: "md"
            }, null, 8, ["modelValue"]),
            G(Ie, {
              modelValue: o.value.lastName,
              "onUpdate:modelValue": [
                A[8] || (A[8] = (C) => o.value.lastName = C),
                h
              ],
              placeholder: "Last name",
              variant: "outline",
              formWrapperWidth: "100%",
              size: "md"
            }, null, 8, ["modelValue"])
          ]),
          t.contactFields?.email !== !1 ? (u(), K(Ie, {
            key: 0,
            modelValue: o.value.email,
            "onUpdate:modelValue": [
              A[9] || (A[9] = (C) => o.value.email = C),
              h
            ],
            type: "email",
            placeholder: "Email address",
            variant: "outline",
            formWrapperWidth: "100%",
            size: "md"
          }, null, 8, ["modelValue"])) : w("", !0),
          t.contactFields?.phone !== !1 ? (u(), K(Ie, {
            key: 1,
            modelValue: o.value.phone,
            "onUpdate:modelValue": [
              A[10] || (A[10] = (C) => o.value.phone = C),
              h
            ],
            type: "tel",
            placeholder: "Phone number",
            variant: "outline",
            formWrapperWidth: "100%",
            size: "md"
          }, null, 8, ["modelValue"])) : w("", !0)
        ])) : w("", !0)
      ])
    ], 8, _v)) : w("", !0);
  }
}), Rr = /* @__PURE__ */ X(Ov, [["__scopeId", "data-v-8a9cb987"]]), xr = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Rr
}, Symbol.toStringTag, { value: "Module" }));
var Rn, le, Pr, $r, xt, mt, ri, Fr, Br, yn = {}, zr = [], Rv = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function at(t, e) {
  for (var n in e) t[n] = e[n];
  return t;
}
function Lr(t) {
  var e = t.parentNode;
  e && e.removeChild(t);
}
function $(t, e, n) {
  var a, i, r, o = {};
  for (r in e) r == "key" ? a = e[r] : r == "ref" ? i = e[r] : o[r] = e[r];
  if (arguments.length > 2 && (o.children = arguments.length > 3 ? Rn.call(arguments, 2) : n), typeof t == "function" && t.defaultProps != null) for (r in t.defaultProps) o[r] === void 0 && (o[r] = t.defaultProps[r]);
  return mn(t, o, a, i, null);
}
function mn(t, e, n, a, i) {
  var r = { type: t, props: e, key: n, ref: a, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: i ?? ++Pr };
  return i == null && le.vnode != null && le.vnode(r), r;
}
function Xe() {
  return { current: null };
}
function Ne(t) {
  return t.children;
}
function xv(t, e, n, a, i) {
  var r;
  for (r in n) r === "children" || r === "key" || r in e || bn(t, r, null, n[r], a);
  for (r in e) i && typeof e[r] != "function" || r === "children" || r === "key" || r === "value" || r === "checked" || n[r] === e[r] || bn(t, r, e[r], n[r], a);
}
function oi(t, e, n) {
  e[0] === "-" ? t.setProperty(e, n ?? "") : t[e] = n == null ? "" : typeof n != "number" || Rv.test(e) ? n : n + "px";
}
function bn(t, e, n, a, i) {
  var r;
  e: if (e === "style") if (typeof n == "string") t.style.cssText = n;
  else {
    if (typeof a == "string" && (t.style.cssText = a = ""), a) for (e in a) n && e in n || oi(t.style, e, "");
    if (n) for (e in n) a && n[e] === a[e] || oi(t.style, e, n[e]);
  }
  else if (e[0] === "o" && e[1] === "n") r = e !== (e = e.replace(/Capture$/, "")), e = e.toLowerCase() in t ? e.toLowerCase().slice(2) : e.slice(2), t.l || (t.l = {}), t.l[e + r] = n, n ? a || t.addEventListener(e, r ? li : si, r) : t.removeEventListener(e, r ? li : si, r);
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
function si(t) {
  xt = !0;
  try {
    return this.l[t.type + !1](le.event ? le.event(t) : t);
  } finally {
    xt = !1;
  }
}
function li(t) {
  xt = !0;
  try {
    return this.l[t.type + !0](le.event ? le.event(t) : t);
  } finally {
    xt = !1;
  }
}
function Ue(t, e) {
  this.props = t, this.context = e;
}
function Wt(t, e) {
  if (e == null) return t.__ ? Wt(t.__, t.__.__k.indexOf(t) + 1) : null;
  for (var n; e < t.__k.length; e++) if ((n = t.__k[e]) != null && n.__e != null) return n.__e;
  return typeof t.type == "function" ? Wt(t) : null;
}
function Hr(t) {
  var e, n;
  if ((t = t.__) != null && t.__c != null) {
    for (t.__e = t.__c.base = null, e = 0; e < t.__k.length; e++) if ((n = t.__k[e]) != null && n.__e != null) {
      t.__e = t.__c.base = n.__e;
      break;
    }
    return Hr(t);
  }
}
function Pv(t) {
  xt ? setTimeout(t) : Fr(t);
}
function ua(t) {
  (!t.__d && (t.__d = !0) && mt.push(t) && !An.__r++ || ri !== le.debounceRendering) && ((ri = le.debounceRendering) || Pv)(An);
}
function An() {
  var t, e, n, a, i, r, o, s;
  for (mt.sort(function(l, c) {
    return l.__v.__b - c.__v.__b;
  }); t = mt.shift(); ) t.__d && (e = mt.length, a = void 0, i = void 0, o = (r = (n = t).__v).__e, (s = n.__P) && (a = [], (i = at({}, r)).__v = r.__v + 1, Ta(s, r, i, n.__n, s.ownerSVGElement !== void 0, r.__h != null ? [o] : null, a, o ?? Wt(r), r.__h), Yr(a, r), r.__e != o && Hr(r)), mt.length > e && mt.sort(function(l, c) {
    return l.__v.__b - c.__v.__b;
  }));
  An.__r = 0;
}
function Vr(t, e, n, a, i, r, o, s, l, c) {
  var d, h, p, v, y, g, b, A = a && a.__k || zr, C = A.length;
  for (n.__k = [], d = 0; d < e.length; d++) if ((v = n.__k[d] = (v = e[d]) == null || typeof v == "boolean" ? null : typeof v == "string" || typeof v == "number" || typeof v == "bigint" ? mn(null, v, null, null, v) : Array.isArray(v) ? mn(Ne, { children: v }, null, null, null) : v.__b > 0 ? mn(v.type, v.props, v.key, v.ref ? v.ref : null, v.__v) : v) != null) {
    if (v.__ = n, v.__b = n.__b + 1, (p = A[d]) === null || p && v.key == p.key && v.type === p.type) A[d] = void 0;
    else for (h = 0; h < C; h++) {
      if ((p = A[h]) && v.key == p.key && v.type === p.type) {
        A[h] = void 0;
        break;
      }
      p = null;
    }
    Ta(t, v, p = p || yn, i, r, o, s, l, c), y = v.__e, (h = v.ref) && p.ref != h && (b || (b = []), p.ref && b.push(p.ref, null, v), b.push(h, v.__c || y, v)), y != null ? (g == null && (g = y), typeof v.type == "function" && v.__k === p.__k ? v.__d = l = jr(v, l, t) : l = Ur(t, v, p, A, y, l), typeof n.type == "function" && (n.__d = l)) : l && p.__e == l && l.parentNode != t && (l = Wt(p));
  }
  for (n.__e = g, d = C; d--; ) A[d] != null && (typeof n.type == "function" && A[d].__e != null && A[d].__e == n.__d && (n.__d = Wr(a).nextSibling), Kr(A[d], A[d]));
  if (b) for (d = 0; d < b.length; d++) Gr(b[d], b[++d], b[++d]);
}
function jr(t, e, n) {
  for (var a, i = t.__k, r = 0; i && r < i.length; r++) (a = i[r]) && (a.__ = t, e = typeof a.type == "function" ? jr(a, e, n) : Ur(n, a, a, i, a.__e, e));
  return e;
}
function Cn(t, e) {
  return e = e || [], t == null || typeof t == "boolean" || (Array.isArray(t) ? t.some(function(n) {
    Cn(n, e);
  }) : e.push(t)), e;
}
function Ur(t, e, n, a, i, r) {
  var o, s, l;
  if (e.__d !== void 0) o = e.__d, e.__d = void 0;
  else if (n == null || i != r || i.parentNode == null) e: if (r == null || r.parentNode !== t) t.appendChild(i), o = null;
  else {
    for (s = r, l = 0; (s = s.nextSibling) && l < a.length; l += 1) if (s == i) break e;
    t.insertBefore(i, r), o = r;
  }
  return o !== void 0 ? o : i.nextSibling;
}
function Wr(t) {
  var e, n, a;
  if (t.type == null || typeof t.type == "string") return t.__e;
  if (t.__k) {
    for (e = t.__k.length - 1; e >= 0; e--) if ((n = t.__k[e]) && (a = Wr(n))) return a;
  }
  return null;
}
function Ta(t, e, n, a, i, r, o, s, l) {
  var c, d, h, p, v, y, g, b, A, C, E, M, k, F, O, j = e.type;
  if (e.constructor !== void 0) return null;
  n.__h != null && (l = n.__h, s = e.__e = n.__e, e.__h = null, r = [s]), (c = le.__b) && c(e);
  try {
    e: if (typeof j == "function") {
      if (b = e.props, A = (c = j.contextType) && a[c.__c], C = c ? A ? A.props.value : c.__ : a, n.__c ? g = (d = e.__c = n.__c).__ = d.__E : ("prototype" in j && j.prototype.render ? e.__c = d = new j(b, C) : (e.__c = d = new Ue(b, C), d.constructor = j, d.render = Fv), A && A.sub(d), d.props = b, d.state || (d.state = {}), d.context = C, d.__n = a, h = d.__d = !0, d.__h = [], d._sb = []), d.__s == null && (d.__s = d.state), j.getDerivedStateFromProps != null && (d.__s == d.state && (d.__s = at({}, d.__s)), at(d.__s, j.getDerivedStateFromProps(b, d.__s))), p = d.props, v = d.state, d.__v = e, h) j.getDerivedStateFromProps == null && d.componentWillMount != null && d.componentWillMount(), d.componentDidMount != null && d.__h.push(d.componentDidMount);
      else {
        if (j.getDerivedStateFromProps == null && b !== p && d.componentWillReceiveProps != null && d.componentWillReceiveProps(b, C), !d.__e && d.shouldComponentUpdate != null && d.shouldComponentUpdate(b, d.__s, C) === !1 || e.__v === n.__v) {
          for (e.__v !== n.__v && (d.props = b, d.state = d.__s, d.__d = !1), e.__e = n.__e, e.__k = n.__k, e.__k.forEach(function(te) {
            te && (te.__ = e);
          }), E = 0; E < d._sb.length; E++) d.__h.push(d._sb[E]);
          d._sb = [], d.__h.length && o.push(d);
          break e;
        }
        d.componentWillUpdate != null && d.componentWillUpdate(b, d.__s, C), d.componentDidUpdate != null && d.__h.push(function() {
          d.componentDidUpdate(p, v, y);
        });
      }
      if (d.context = C, d.props = b, d.__P = t, M = le.__r, k = 0, "prototype" in j && j.prototype.render) {
        for (d.state = d.__s, d.__d = !1, M && M(e), c = d.render(d.props, d.state, d.context), F = 0; F < d._sb.length; F++) d.__h.push(d._sb[F]);
        d._sb = [];
      } else do
        d.__d = !1, M && M(e), c = d.render(d.props, d.state, d.context), d.state = d.__s;
      while (d.__d && ++k < 25);
      d.state = d.__s, d.getChildContext != null && (a = at(at({}, a), d.getChildContext())), h || d.getSnapshotBeforeUpdate == null || (y = d.getSnapshotBeforeUpdate(p, v)), O = c != null && c.type === Ne && c.key == null ? c.props.children : c, Vr(t, Array.isArray(O) ? O : [O], e, n, a, i, r, o, s, l), d.base = e.__e, e.__h = null, d.__h.length && o.push(d), g && (d.__E = d.__ = null), d.__e = !1;
    } else r == null && e.__v === n.__v ? (e.__k = n.__k, e.__e = n.__e) : e.__e = $v(n.__e, e, n, a, i, r, o, l);
    (c = le.diffed) && c(e);
  } catch (te) {
    e.__v = null, (l || r != null) && (e.__e = s, e.__h = !!l, r[r.indexOf(s)] = null), le.__e(te, e, n);
  }
}
function Yr(t, e) {
  le.__c && le.__c(e, t), t.some(function(n) {
    try {
      t = n.__h, n.__h = [], t.some(function(a) {
        a.call(n);
      });
    } catch (a) {
      le.__e(a, n.__v);
    }
  });
}
function $v(t, e, n, a, i, r, o, s) {
  var l, c, d, h = n.props, p = e.props, v = e.type, y = 0;
  if (v === "svg" && (i = !0), r != null) {
    for (; y < r.length; y++) if ((l = r[y]) && "setAttribute" in l == !!v && (v ? l.localName === v : l.nodeType === 3)) {
      t = l, r[y] = null;
      break;
    }
  }
  if (t == null) {
    if (v === null) return document.createTextNode(p);
    t = i ? document.createElementNS("http://www.w3.org/2000/svg", v) : document.createElement(v, p.is && p), r = null, s = !1;
  }
  if (v === null) h === p || s && t.data === p || (t.data = p);
  else {
    if (r = r && Rn.call(t.childNodes), c = (h = n.props || yn).dangerouslySetInnerHTML, d = p.dangerouslySetInnerHTML, !s) {
      if (r != null) for (h = {}, y = 0; y < t.attributes.length; y++) h[t.attributes[y].name] = t.attributes[y].value;
      (d || c) && (d && (c && d.__html == c.__html || d.__html === t.innerHTML) || (t.innerHTML = d && d.__html || ""));
    }
    if (xv(t, p, h, i, s), d) e.__k = [];
    else if (y = e.props.children, Vr(t, Array.isArray(y) ? y : [y], e, n, a, i && v !== "foreignObject", r, o, r ? r[0] : n.__k && Wt(n, 0), s), r != null) for (y = r.length; y--; ) r[y] != null && Lr(r[y]);
    s || ("value" in p && (y = p.value) !== void 0 && (y !== t.value || v === "progress" && !y || v === "option" && y !== h.value) && bn(t, "value", y, h.value, !1), "checked" in p && (y = p.checked) !== void 0 && y !== t.checked && bn(t, "checked", y, h.checked, !1));
  }
  return t;
}
function Gr(t, e, n) {
  try {
    typeof t == "function" ? t(e) : t.current = e;
  } catch (a) {
    le.__e(a, n);
  }
}
function Kr(t, e, n) {
  var a, i;
  if (le.unmount && le.unmount(t), (a = t.ref) && (a.current && a.current !== t.__e || Gr(a, null, e)), (a = t.__c) != null) {
    if (a.componentWillUnmount) try {
      a.componentWillUnmount();
    } catch (r) {
      le.__e(r, e);
    }
    a.base = a.__P = null, t.__c = void 0;
  }
  if (a = t.__k) for (i = 0; i < a.length; i++) a[i] && Kr(a[i], e, n || typeof t.type != "function");
  n || t.__e == null || Lr(t.__e), t.__ = t.__e = t.__d = void 0;
}
function Fv(t, e, n) {
  return this.constructor(t, n);
}
function Yt(t, e, n) {
  var a, i, r;
  le.__ && le.__(t, e), i = (a = !1) ? null : e.__k, r = [], Ta(e, t = e.__k = $(Ne, null, [t]), i || yn, yn, e.ownerSVGElement !== void 0, i ? null : e.firstChild ? Rn.call(e.childNodes) : null, r, i ? i.__e : e.firstChild, a), Yr(r, t);
}
function Bv(t, e) {
  var n = { __c: e = "__cC" + Br++, __: t, Consumer: function(a, i) {
    return a.children(i);
  }, Provider: function(a) {
    var i, r;
    return this.getChildContext || (i = [], (r = {})[e] = this, this.getChildContext = function() {
      return r;
    }, this.shouldComponentUpdate = function(o) {
      this.props.value !== o.value && i.some(function(s) {
        s.__e = !0, ua(s);
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
Rn = zr.slice, le = { __e: function(t, e, n, a) {
  for (var i, r, o; e = e.__; ) if ((i = e.__c) && !i.__) try {
    if ((r = i.constructor) && r.getDerivedStateFromError != null && (i.setState(r.getDerivedStateFromError(t)), o = i.__d), i.componentDidCatch != null && (i.componentDidCatch(t, a || {}), o = i.__d), o) return i.__E = i;
  } catch (s) {
    t = s;
  }
  throw t;
} }, Pr = 0, $r = function(t) {
  return t != null && t.constructor === void 0;
}, xt = !1, Ue.prototype.setState = function(t, e) {
  var n;
  n = this.__s != null && this.__s !== this.state ? this.__s : this.__s = at({}, this.state), typeof t == "function" && (t = t(at({}, n), this.props)), t && at(n, t), t != null && this.__v && (e && this._sb.push(e), ua(this));
}, Ue.prototype.forceUpdate = function(t) {
  this.__v && (this.__e = !0, t && this.__h.push(t), ua(this));
}, Ue.prototype.render = Ne, mt = [], Fr = typeof Promise == "function" ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, An.__r = 0, Br = 0;
var qe, Wn, ui, qr = [], Yn = [], ci = le.__b, di = le.__r, fi = le.diffed, mi = le.__c, hi = le.unmount;
function zv() {
  for (var t; t = qr.shift(); ) if (t.__P && t.__H) try {
    t.__H.__h.forEach(hn), t.__H.__h.forEach(ca), t.__H.__h = [];
  } catch (e) {
    t.__H.__h = [], le.__e(e, t.__v);
  }
}
le.__b = function(t) {
  qe = null, ci && ci(t);
}, le.__r = function(t) {
  di && di(t);
  var e = (qe = t.__c).__H;
  e && (Wn === qe ? (e.__h = [], qe.__h = [], e.__.forEach(function(n) {
    n.__N && (n.__ = n.__N), n.__V = Yn, n.__N = n.i = void 0;
  })) : (e.__h.forEach(hn), e.__h.forEach(ca), e.__h = [])), Wn = qe;
}, le.diffed = function(t) {
  fi && fi(t);
  var e = t.__c;
  e && e.__H && (e.__H.__h.length && (qr.push(e) !== 1 && ui === le.requestAnimationFrame || ((ui = le.requestAnimationFrame) || Lv)(zv)), e.__H.__.forEach(function(n) {
    n.i && (n.__H = n.i), n.__V !== Yn && (n.__ = n.__V), n.i = void 0, n.__V = Yn;
  })), Wn = qe = null;
}, le.__c = function(t, e) {
  e.some(function(n) {
    try {
      n.__h.forEach(hn), n.__h = n.__h.filter(function(a) {
        return !a.__ || ca(a);
      });
    } catch (a) {
      e.some(function(i) {
        i.__h && (i.__h = []);
      }), e = [], le.__e(a, n.__v);
    }
  }), mi && mi(t, e);
}, le.unmount = function(t) {
  hi && hi(t);
  var e, n = t.__c;
  n && n.__H && (n.__H.__.forEach(function(a) {
    try {
      hn(a);
    } catch (i) {
      e = i;
    }
  }), n.__H = void 0, e && le.__e(e, n.__v));
};
var vi = typeof requestAnimationFrame == "function";
function Lv(t) {
  var e, n = function() {
    clearTimeout(a), vi && cancelAnimationFrame(e), setTimeout(t);
  }, a = setTimeout(n, 100);
  vi && (e = requestAnimationFrame(n));
}
function hn(t) {
  var e = qe, n = t.__c;
  typeof n == "function" && (t.__c = void 0, n()), qe = e;
}
function ca(t) {
  var e = qe;
  t.__c = t.__(), qe = e;
}
function Hv(t, e) {
  for (var n in e) t[n] = e[n];
  return t;
}
function pi(t, e) {
  for (var n in t) if (n !== "__source" && !(n in e)) return !0;
  for (var a in e) if (a !== "__source" && t[a] !== e[a]) return !0;
  return !1;
}
function gi(t) {
  this.props = t;
}
(gi.prototype = new Ue()).isPureReactComponent = !0, gi.prototype.shouldComponentUpdate = function(t, e) {
  return pi(this.props, t) || pi(this.state, e);
};
var yi = le.__b;
le.__b = function(t) {
  t.type && t.type.__f && t.ref && (t.props.ref = t.ref, t.ref = null), yi && yi(t);
};
var Vv = le.__e;
le.__e = function(t, e, n, a) {
  if (t.then) {
    for (var i, r = e; r = r.__; ) if ((i = r.__c) && i.__c) return e.__e == null && (e.__e = n.__e, e.__k = n.__k), i.__c(t, e);
  }
  Vv(t, e, n, a);
};
var bi = le.unmount;
function Qr(t, e, n) {
  return t && (t.__c && t.__c.__H && (t.__c.__H.__.forEach(function(a) {
    typeof a.__c == "function" && a.__c();
  }), t.__c.__H = null), (t = Hv({}, t)).__c != null && (t.__c.__P === n && (t.__c.__P = e), t.__c = null), t.__k = t.__k && t.__k.map(function(a) {
    return Qr(a, e, n);
  })), t;
}
function Zr(t, e, n) {
  return t && (t.__v = null, t.__k = t.__k && t.__k.map(function(a) {
    return Zr(a, e, n);
  }), t.__c && t.__c.__P === e && (t.__e && n.insertBefore(t.__e, t.__d), t.__c.__e = !0, t.__c.__P = n)), t;
}
function Gn() {
  this.__u = 0, this.t = null, this.__b = null;
}
function Jr(t) {
  var e = t.__.__c;
  return e && e.__a && e.__a(t);
}
function an() {
  this.u = null, this.o = null;
}
le.unmount = function(t) {
  var e = t.__c;
  e && e.__R && e.__R(), e && t.__h === !0 && (t.type = null), bi && bi(t);
}, (Gn.prototype = new Ue()).__c = function(t, e) {
  var n = e.__c, a = this;
  a.t == null && (a.t = []), a.t.push(n);
  var i = Jr(a.__v), r = !1, o = function() {
    r || (r = !0, n.__R = null, i ? i(s) : s());
  };
  n.__R = o;
  var s = function() {
    if (!--a.__u) {
      if (a.state.__a) {
        var c = a.state.__a;
        a.__v.__k[0] = Zr(c, c.__c.__P, c.__c.__O);
      }
      var d;
      for (a.setState({ __a: a.__b = null }); d = a.t.pop(); ) d.forceUpdate();
    }
  }, l = e.__h === !0;
  a.__u++ || l || a.setState({ __a: a.__b = a.__v.__k[0] }), t.then(o, o);
}, Gn.prototype.componentWillUnmount = function() {
  this.t = [];
}, Gn.prototype.render = function(t, e) {
  if (this.__b) {
    if (this.__v.__k) {
      var n = document.createElement("div"), a = this.__v.__k[0].__c;
      this.__v.__k[0] = Qr(this.__b, n, a.__O = a.__P);
    }
    this.__b = null;
  }
  var i = e.__a && $(Ne, null, t.fallback);
  return i && (i.__h = null), [$(Ne, null, e.__a ? null : t.children), i];
};
var Ai = function(t, e, n) {
  if (++n[1] === n[0] && t.o.delete(e), t.props.revealOrder && (t.props.revealOrder[0] !== "t" || !t.o.size)) for (n = t.u; n; ) {
    for (; n.length > 3; ) n.pop()();
    if (n[1] < n[0]) break;
    t.u = n = n[2];
  }
};
function jv(t) {
  return this.getChildContext = function() {
    return t.context;
  }, t.children;
}
function Uv(t) {
  var e = this, n = t.i;
  e.componentWillUnmount = function() {
    Yt(null, e.l), e.l = null, e.i = null;
  }, e.i && e.i !== n && e.componentWillUnmount(), t.__v ? (e.l || (e.i = n, e.l = { nodeType: 1, parentNode: n, childNodes: [], appendChild: function(a) {
    this.childNodes.push(a), e.i.appendChild(a);
  }, insertBefore: function(a, i) {
    this.childNodes.push(a), e.i.appendChild(a);
  }, removeChild: function(a) {
    this.childNodes.splice(this.childNodes.indexOf(a) >>> 1, 1), e.i.removeChild(a);
  } }), Yt($(jv, { context: e.context }, t.__v), e.l)) : e.l && e.componentWillUnmount();
}
function Wv(t, e) {
  var n = $(Uv, { __v: t, i: e });
  return n.containerInfo = e, n;
}
(an.prototype = new Ue()).__a = function(t) {
  var e = this, n = Jr(e.__v), a = e.o.get(t);
  return a[0]++, function(i) {
    var r = function() {
      e.props.revealOrder ? (a.push(i), Ai(e, t, a)) : i();
    };
    n ? n(r) : r();
  };
}, an.prototype.render = function(t) {
  this.u = null, this.o = /* @__PURE__ */ new Map();
  var e = Cn(t.children);
  t.revealOrder && t.revealOrder[0] === "b" && e.reverse();
  for (var n = e.length; n--; ) this.o.set(e[n], this.u = [1, 0, this.u]);
  return t.children;
}, an.prototype.componentDidUpdate = an.prototype.componentDidMount = function() {
  var t = this;
  this.o.forEach(function(e, n) {
    Ai(t, n, e);
  });
};
var Yv = typeof Symbol < "u" && Symbol.for && Symbol.for("react.element") || 60103, Gv = /^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/, Kv = typeof document < "u", qv = function(t) {
  return (typeof Symbol < "u" && typeof Symbol() == "symbol" ? /fil|che|rad/i : /fil|che|ra/i).test(t);
};
Ue.prototype.isReactComponent = {}, ["componentWillMount", "componentWillReceiveProps", "componentWillUpdate"].forEach(function(t) {
  Object.defineProperty(Ue.prototype, t, { configurable: !0, get: function() {
    return this["UNSAFE_" + t];
  }, set: function(e) {
    Object.defineProperty(this, t, { configurable: !0, writable: !0, value: e });
  } });
});
var Ci = le.event;
function Qv() {
}
function Zv() {
  return this.cancelBubble;
}
function Jv() {
  return this.defaultPrevented;
}
le.event = function(t) {
  return Ci && (t = Ci(t)), t.persist = Qv, t.isPropagationStopped = Zv, t.isDefaultPrevented = Jv, t.nativeEvent = t;
};
var wi = { configurable: !0, get: function() {
  return this.class;
} }, _i = le.vnode;
le.vnode = function(t) {
  var e = t.type, n = t.props, a = n;
  if (typeof e == "string") {
    var i = e.indexOf("-") === -1;
    for (var r in a = {}, n) {
      var o = n[r];
      Kv && r === "children" && e === "noscript" || r === "value" && "defaultValue" in n && o == null || (r === "defaultValue" && "value" in n && n.value == null ? r = "value" : r === "download" && o === !0 ? o = "" : /ondoubleclick/i.test(r) ? r = "ondblclick" : /^onchange(textarea|input)/i.test(r + e) && !qv(n.type) ? r = "oninput" : /^onfocus$/i.test(r) ? r = "onfocusin" : /^onblur$/i.test(r) ? r = "onfocusout" : /^on(Ani|Tra|Tou|BeforeInp|Compo)/.test(r) ? r = r.toLowerCase() : i && Gv.test(r) ? r = r.replace(/[A-Z0-9]/g, "-$&").toLowerCase() : o === null && (o = void 0), /^oninput$/i.test(r) && (r = r.toLowerCase(), a[r] && (r = "oninputCapture")), a[r] = o);
    }
    e == "select" && a.multiple && Array.isArray(a.value) && (a.value = Cn(n.children).forEach(function(s) {
      s.props.selected = a.value.indexOf(s.props.value) != -1;
    })), e == "select" && a.defaultValue != null && (a.value = Cn(n.children).forEach(function(s) {
      s.props.selected = a.multiple ? a.defaultValue.indexOf(s.props.value) != -1 : a.defaultValue == s.props.value;
    })), t.props = a, n.class != n.className && (wi.enumerable = "className" in n, n.className != null && (a.class = n.className), Object.defineProperty(a, "className", wi));
  }
  t.$$typeof = Yv, _i && _i(t);
};
var Si = le.__r;
le.__r = function(t) {
  Si && Si(t), t.__c;
};
const Xr = [], da = /* @__PURE__ */ new Map();
function eo(t) {
  Xr.push(t), da.forEach((e) => {
    no(e, t);
  });
}
function Xv(t) {
  t.isConnected && // sometimes true if SSR system simulates DOM
  t.getRootNode && to(t.getRootNode());
}
function to(t) {
  let e = da.get(t);
  if (!e || !e.isConnected) {
    if (e = t.querySelector("style[data-fullcalendar]"), !e) {
      e = document.createElement("style"), e.setAttribute("data-fullcalendar", "");
      const n = tp();
      n && (e.nonce = n);
      const a = t === document ? document.head : t, i = t === document ? a.querySelector("script,link[rel=stylesheet],link[as=style],style") : a.firstChild;
      a.insertBefore(e, i);
    }
    da.set(t, e), ep(e);
  }
}
function ep(t) {
  for (const e of Xr)
    no(t, e);
}
function no(t, e) {
  const { sheet: n } = t, a = n.cssRules.length;
  e.split("}").forEach((i, r) => {
    i = i.trim(), i && n.insertRule(i + "}", a + r);
  });
}
let Kn;
function tp() {
  return Kn === void 0 && (Kn = np()), Kn;
}
function np() {
  const t = document.querySelector('meta[name="csp-nonce"]');
  if (t && t.hasAttribute("content"))
    return t.getAttribute("content");
  const e = document.querySelector("script[nonce]");
  return e && e.nonce || "";
}
typeof document < "u" && to(document);
var ap = ':root{--fc-small-font-size:.85em;--fc-page-bg-color:#fff;--fc-neutral-bg-color:hsla(0,0%,82%,.3);--fc-neutral-text-color:grey;--fc-border-color:#ddd;--fc-button-text-color:#fff;--fc-button-bg-color:#2c3e50;--fc-button-border-color:#2c3e50;--fc-button-hover-bg-color:#1e2b37;--fc-button-hover-border-color:#1a252f;--fc-button-active-bg-color:#1a252f;--fc-button-active-border-color:#151e27;--fc-event-bg-color:#3788d8;--fc-event-border-color:#3788d8;--fc-event-text-color:#fff;--fc-event-selected-overlay-color:rgba(0,0,0,.25);--fc-more-link-bg-color:#d0d0d0;--fc-more-link-text-color:inherit;--fc-event-resizer-thickness:8px;--fc-event-resizer-dot-total-width:8px;--fc-event-resizer-dot-border-width:1px;--fc-non-business-color:hsla(0,0%,84%,.3);--fc-bg-event-color:#8fdf82;--fc-bg-event-opacity:0.3;--fc-highlight-color:rgba(188,232,241,.3);--fc-today-bg-color:rgba(255,220,40,.15);--fc-now-indicator-color:red}.fc-not-allowed,.fc-not-allowed .fc-event{cursor:not-allowed}.fc{display:flex;flex-direction:column;font-size:1em}.fc,.fc *,.fc :after,.fc :before{box-sizing:border-box}.fc table{border-collapse:collapse;border-spacing:0;font-size:1em}.fc th{text-align:center}.fc td,.fc th{padding:0;vertical-align:top}.fc a[data-navlink]{cursor:pointer}.fc a[data-navlink]:hover{text-decoration:underline}.fc-direction-ltr{direction:ltr;text-align:left}.fc-direction-rtl{direction:rtl;text-align:right}.fc-theme-standard td,.fc-theme-standard th{border:1px solid var(--fc-border-color)}.fc-liquid-hack td,.fc-liquid-hack th{position:relative}@font-face{font-family:fcicons;font-style:normal;font-weight:400;src:url("data:application/x-font-ttf;charset=utf-8;base64,AAEAAAALAIAAAwAwT1MvMg8SBfAAAAC8AAAAYGNtYXAXVtKNAAABHAAAAFRnYXNwAAAAEAAAAXAAAAAIZ2x5ZgYydxIAAAF4AAAFNGhlYWQUJ7cIAAAGrAAAADZoaGVhB20DzAAABuQAAAAkaG10eCIABhQAAAcIAAAALGxvY2ED4AU6AAAHNAAAABhtYXhwAA8AjAAAB0wAAAAgbmFtZXsr690AAAdsAAABhnBvc3QAAwAAAAAI9AAAACAAAwPAAZAABQAAApkCzAAAAI8CmQLMAAAB6wAzAQkAAAAAAAAAAAAAAAAAAAABEAAAAAAAAAAAAAAAAAAAAABAAADpBgPA/8AAQAPAAEAAAAABAAAAAAAAAAAAAAAgAAAAAAADAAAAAwAAABwAAQADAAAAHAADAAEAAAAcAAQAOAAAAAoACAACAAIAAQAg6Qb//f//AAAAAAAg6QD//f//AAH/4xcEAAMAAQAAAAAAAAAAAAAAAQAB//8ADwABAAAAAAAAAAAAAgAANzkBAAAAAAEAAAAAAAAAAAACAAA3OQEAAAAAAQAAAAAAAAAAAAIAADc5AQAAAAABAWIAjQKeAskAEwAAJSc3NjQnJiIHAQYUFwEWMjc2NCcCnuLiDQ0MJAz/AA0NAQAMJAwNDcni4gwjDQwM/wANIwz/AA0NDCMNAAAAAQFiAI0CngLJABMAACUBNjQnASYiBwYUHwEHBhQXFjI3AZ4BAA0N/wAMJAwNDeLiDQ0MJAyNAQAMIw0BAAwMDSMM4uINIwwNDQAAAAIA4gC3Ax4CngATACcAACUnNzY0JyYiDwEGFB8BFjI3NjQnISc3NjQnJiIPAQYUHwEWMjc2NCcB87e3DQ0MIw3VDQ3VDSMMDQ0BK7e3DQ0MJAzVDQ3VDCQMDQ3zuLcMJAwNDdUNIwzWDAwNIwy4twwkDA0N1Q0jDNYMDA0jDAAAAgDiALcDHgKeABMAJwAAJTc2NC8BJiIHBhQfAQcGFBcWMjchNzY0LwEmIgcGFB8BBwYUFxYyNwJJ1Q0N1Q0jDA0Nt7cNDQwjDf7V1Q0N1QwkDA0Nt7cNDQwkDLfWDCMN1Q0NDCQMt7gMIw0MDNYMIw3VDQ0MJAy3uAwjDQwMAAADAFUAAAOrA1UAMwBoAHcAABMiBgcOAQcOAQcOARURFBYXHgEXHgEXHgEzITI2Nz4BNz4BNz4BNRE0JicuAScuAScuASMFITIWFx4BFx4BFx4BFREUBgcOAQcOAQcOASMhIiYnLgEnLgEnLgE1ETQ2Nz4BNz4BNz4BMxMhMjY1NCYjISIGFRQWM9UNGAwLFQkJDgUFBQUFBQ4JCRULDBgNAlYNGAwLFQkJDgUFBQUFBQ4JCRULDBgN/aoCVgQIBAQHAwMFAQIBAQIBBQMDBwQECAT9qgQIBAQHAwMFAQIBAQIBBQMDBwQECASAAVYRGRkR/qoRGRkRA1UFBAUOCQkVDAsZDf2rDRkLDBUJCA4FBQUFBQUOCQgVDAsZDQJVDRkLDBUJCQ4FBAVVAgECBQMCBwQECAX9qwQJAwQHAwMFAQICAgIBBQMDBwQDCQQCVQUIBAQHAgMFAgEC/oAZEhEZGRESGQAAAAADAFUAAAOrA1UAMwBoAIkAABMiBgcOAQcOAQcOARURFBYXHgEXHgEXHgEzITI2Nz4BNz4BNz4BNRE0JicuAScuAScuASMFITIWFx4BFx4BFx4BFREUBgcOAQcOAQcOASMhIiYnLgEnLgEnLgE1ETQ2Nz4BNz4BNz4BMxMzFRQWMzI2PQEzMjY1NCYrATU0JiMiBh0BIyIGFRQWM9UNGAwLFQkJDgUFBQUFBQ4JCRULDBgNAlYNGAwLFQkJDgUFBQUFBQ4JCRULDBgN/aoCVgQIBAQHAwMFAQIBAQIBBQMDBwQECAT9qgQIBAQHAwMFAQIBAQIBBQMDBwQECASAgBkSEhmAERkZEYAZEhIZgBEZGREDVQUEBQ4JCRUMCxkN/asNGQsMFQkIDgUFBQUFBQ4JCBUMCxkNAlUNGQsMFQkJDgUEBVUCAQIFAwIHBAQIBf2rBAkDBAcDAwUBAgICAgEFAwMHBAMJBAJVBQgEBAcCAwUCAQL+gIASGRkSgBkSERmAEhkZEoAZERIZAAABAOIAjQMeAskAIAAAExcHBhQXFjI/ARcWMjc2NC8BNzY0JyYiDwEnJiIHBhQX4uLiDQ0MJAzi4gwkDA0N4uINDQwkDOLiDCQMDQ0CjeLiDSMMDQ3h4Q0NDCMN4uIMIw0MDOLiDAwNIwwAAAABAAAAAQAAa5n0y18PPPUACwQAAAAAANivOVsAAAAA2K85WwAAAAADqwNVAAAACAACAAAAAAAAAAEAAAPA/8AAAAQAAAAAAAOrAAEAAAAAAAAAAAAAAAAAAAALBAAAAAAAAAAAAAAAAgAAAAQAAWIEAAFiBAAA4gQAAOIEAABVBAAAVQQAAOIAAAAAAAoAFAAeAEQAagCqAOoBngJkApoAAQAAAAsAigADAAAAAAACAAAAAAAAAAAAAAAAAAAAAAAAAA4ArgABAAAAAAABAAcAAAABAAAAAAACAAcAYAABAAAAAAADAAcANgABAAAAAAAEAAcAdQABAAAAAAAFAAsAFQABAAAAAAAGAAcASwABAAAAAAAKABoAigADAAEECQABAA4ABwADAAEECQACAA4AZwADAAEECQADAA4APQADAAEECQAEAA4AfAADAAEECQAFABYAIAADAAEECQAGAA4AUgADAAEECQAKADQApGZjaWNvbnMAZgBjAGkAYwBvAG4Ac1ZlcnNpb24gMS4wAFYAZQByAHMAaQBvAG4AIAAxAC4AMGZjaWNvbnMAZgBjAGkAYwBvAG4Ac2ZjaWNvbnMAZgBjAGkAYwBvAG4Ac1JlZ3VsYXIAUgBlAGcAdQBsAGEAcmZjaWNvbnMAZgBjAGkAYwBvAG4Ac0ZvbnQgZ2VuZXJhdGVkIGJ5IEljb01vb24uAEYAbwBuAHQAIABnAGUAbgBlAHIAYQB0AGUAZAAgAGIAeQAgAEkAYwBvAE0AbwBvAG4ALgAAAAMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA=") format("truetype")}.fc-icon{speak:none;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;display:inline-block;font-family:fcicons!important;font-style:normal;font-variant:normal;font-weight:400;height:1em;line-height:1;text-align:center;text-transform:none;-webkit-user-select:none;-moz-user-select:none;user-select:none;width:1em}.fc-icon-chevron-left:before{content:"\\e900"}.fc-icon-chevron-right:before{content:"\\e901"}.fc-icon-chevrons-left:before{content:"\\e902"}.fc-icon-chevrons-right:before{content:"\\e903"}.fc-icon-minus-square:before{content:"\\e904"}.fc-icon-plus-square:before{content:"\\e905"}.fc-icon-x:before{content:"\\e906"}.fc .fc-button{border-radius:0;font-family:inherit;font-size:inherit;line-height:inherit;margin:0;overflow:visible;text-transform:none}.fc .fc-button:focus{outline:1px dotted;outline:5px auto -webkit-focus-ring-color}.fc .fc-button{-webkit-appearance:button}.fc .fc-button:not(:disabled){cursor:pointer}.fc .fc-button{background-color:transparent;border:1px solid transparent;border-radius:.25em;display:inline-block;font-size:1em;font-weight:400;line-height:1.5;padding:.4em .65em;text-align:center;-webkit-user-select:none;-moz-user-select:none;user-select:none;vertical-align:middle}.fc .fc-button:hover{text-decoration:none}.fc .fc-button:focus{box-shadow:0 0 0 .2rem rgba(44,62,80,.25);outline:0}.fc .fc-button:disabled{opacity:.65}.fc .fc-button-primary{background-color:var(--fc-button-bg-color);border-color:var(--fc-button-border-color);color:var(--fc-button-text-color)}.fc .fc-button-primary:hover{background-color:var(--fc-button-hover-bg-color);border-color:var(--fc-button-hover-border-color);color:var(--fc-button-text-color)}.fc .fc-button-primary:disabled{background-color:var(--fc-button-bg-color);border-color:var(--fc-button-border-color);color:var(--fc-button-text-color)}.fc .fc-button-primary:focus{box-shadow:0 0 0 .2rem rgba(76,91,106,.5)}.fc .fc-button-primary:not(:disabled).fc-button-active,.fc .fc-button-primary:not(:disabled):active{background-color:var(--fc-button-active-bg-color);border-color:var(--fc-button-active-border-color);color:var(--fc-button-text-color)}.fc .fc-button-primary:not(:disabled).fc-button-active:focus,.fc .fc-button-primary:not(:disabled):active:focus{box-shadow:0 0 0 .2rem rgba(76,91,106,.5)}.fc .fc-button .fc-icon{font-size:1.5em;vertical-align:middle}.fc .fc-button-group{display:inline-flex;position:relative;vertical-align:middle}.fc .fc-button-group>.fc-button{flex:1 1 auto;position:relative}.fc .fc-button-group>.fc-button.fc-button-active,.fc .fc-button-group>.fc-button:active,.fc .fc-button-group>.fc-button:focus,.fc .fc-button-group>.fc-button:hover{z-index:1}.fc-direction-ltr .fc-button-group>.fc-button:not(:first-child){border-bottom-left-radius:0;border-top-left-radius:0;margin-left:-1px}.fc-direction-ltr .fc-button-group>.fc-button:not(:last-child){border-bottom-right-radius:0;border-top-right-radius:0}.fc-direction-rtl .fc-button-group>.fc-button:not(:first-child){border-bottom-right-radius:0;border-top-right-radius:0;margin-right:-1px}.fc-direction-rtl .fc-button-group>.fc-button:not(:last-child){border-bottom-left-radius:0;border-top-left-radius:0}.fc .fc-toolbar{align-items:center;display:flex;justify-content:space-between}.fc .fc-toolbar.fc-header-toolbar{margin-bottom:1.5em}.fc .fc-toolbar.fc-footer-toolbar{margin-top:1.5em}.fc .fc-toolbar-title{font-size:1.75em;margin:0}.fc-direction-ltr .fc-toolbar>*>:not(:first-child){margin-left:.75em}.fc-direction-rtl .fc-toolbar>*>:not(:first-child){margin-right:.75em}.fc-direction-rtl .fc-toolbar-ltr{flex-direction:row-reverse}.fc .fc-scroller{-webkit-overflow-scrolling:touch;position:relative}.fc .fc-scroller-liquid{height:100%}.fc .fc-scroller-liquid-absolute{bottom:0;left:0;position:absolute;right:0;top:0}.fc .fc-scroller-harness{direction:ltr;overflow:hidden;position:relative}.fc .fc-scroller-harness-liquid{height:100%}.fc-direction-rtl .fc-scroller-harness>.fc-scroller{direction:rtl}.fc-theme-standard .fc-scrollgrid{border:1px solid var(--fc-border-color)}.fc .fc-scrollgrid,.fc .fc-scrollgrid table{table-layout:fixed;width:100%}.fc .fc-scrollgrid table{border-left-style:hidden;border-right-style:hidden;border-top-style:hidden}.fc .fc-scrollgrid{border-bottom-width:0;border-collapse:separate;border-right-width:0}.fc .fc-scrollgrid-liquid{height:100%}.fc .fc-scrollgrid-section,.fc .fc-scrollgrid-section table,.fc .fc-scrollgrid-section>td{height:1px}.fc .fc-scrollgrid-section-liquid>td{height:100%}.fc .fc-scrollgrid-section>*{border-left-width:0;border-top-width:0}.fc .fc-scrollgrid-section-footer>*,.fc .fc-scrollgrid-section-header>*{border-bottom-width:0}.fc .fc-scrollgrid-section-body table,.fc .fc-scrollgrid-section-footer table{border-bottom-style:hidden}.fc .fc-scrollgrid-section-sticky>*{background:var(--fc-page-bg-color);position:sticky;z-index:3}.fc .fc-scrollgrid-section-header.fc-scrollgrid-section-sticky>*{top:0}.fc .fc-scrollgrid-section-footer.fc-scrollgrid-section-sticky>*{bottom:0}.fc .fc-scrollgrid-sticky-shim{height:1px;margin-bottom:-1px}.fc-sticky{position:sticky}.fc .fc-view-harness{flex-grow:1;position:relative}.fc .fc-view-harness-active>.fc-view{bottom:0;left:0;position:absolute;right:0;top:0}.fc .fc-col-header-cell-cushion{display:inline-block;padding:2px 4px}.fc .fc-bg-event,.fc .fc-highlight,.fc .fc-non-business{bottom:0;left:0;position:absolute;right:0;top:0}.fc .fc-non-business{background:var(--fc-non-business-color)}.fc .fc-bg-event{background:var(--fc-bg-event-color);opacity:var(--fc-bg-event-opacity)}.fc .fc-bg-event .fc-event-title{font-size:var(--fc-small-font-size);font-style:italic;margin:.5em}.fc .fc-highlight{background:var(--fc-highlight-color)}.fc .fc-cell-shaded,.fc .fc-day-disabled{background:var(--fc-neutral-bg-color)}a.fc-event,a.fc-event:hover{text-decoration:none}.fc-event.fc-event-draggable,.fc-event[href]{cursor:pointer}.fc-event .fc-event-main{position:relative;z-index:2}.fc-event-dragging:not(.fc-event-selected){opacity:.75}.fc-event-dragging.fc-event-selected{box-shadow:0 2px 7px rgba(0,0,0,.3)}.fc-event .fc-event-resizer{display:none;position:absolute;z-index:4}.fc-event-selected .fc-event-resizer,.fc-event:hover .fc-event-resizer{display:block}.fc-event-selected .fc-event-resizer{background:var(--fc-page-bg-color);border-color:inherit;border-radius:calc(var(--fc-event-resizer-dot-total-width)/2);border-style:solid;border-width:var(--fc-event-resizer-dot-border-width);height:var(--fc-event-resizer-dot-total-width);width:var(--fc-event-resizer-dot-total-width)}.fc-event-selected .fc-event-resizer:before{bottom:-20px;content:"";left:-20px;position:absolute;right:-20px;top:-20px}.fc-event-selected,.fc-event:focus{box-shadow:0 2px 5px rgba(0,0,0,.2)}.fc-event-selected:before,.fc-event:focus:before{bottom:0;content:"";left:0;position:absolute;right:0;top:0;z-index:3}.fc-event-selected:after,.fc-event:focus:after{background:var(--fc-event-selected-overlay-color);bottom:-1px;content:"";left:-1px;position:absolute;right:-1px;top:-1px;z-index:1}.fc-h-event{background-color:var(--fc-event-bg-color);border:1px solid var(--fc-event-border-color);display:block}.fc-h-event .fc-event-main{color:var(--fc-event-text-color)}.fc-h-event .fc-event-main-frame{display:flex}.fc-h-event .fc-event-time{max-width:100%;overflow:hidden}.fc-h-event .fc-event-title-container{flex-grow:1;flex-shrink:1;min-width:0}.fc-h-event .fc-event-title{display:inline-block;left:0;max-width:100%;overflow:hidden;right:0;vertical-align:top}.fc-h-event.fc-event-selected:before{bottom:-10px;top:-10px}.fc-direction-ltr .fc-daygrid-block-event:not(.fc-event-start),.fc-direction-rtl .fc-daygrid-block-event:not(.fc-event-end){border-bottom-left-radius:0;border-left-width:0;border-top-left-radius:0}.fc-direction-ltr .fc-daygrid-block-event:not(.fc-event-end),.fc-direction-rtl .fc-daygrid-block-event:not(.fc-event-start){border-bottom-right-radius:0;border-right-width:0;border-top-right-radius:0}.fc-h-event:not(.fc-event-selected) .fc-event-resizer{bottom:0;top:0;width:var(--fc-event-resizer-thickness)}.fc-direction-ltr .fc-h-event:not(.fc-event-selected) .fc-event-resizer-start,.fc-direction-rtl .fc-h-event:not(.fc-event-selected) .fc-event-resizer-end{cursor:w-resize;left:calc(var(--fc-event-resizer-thickness)*-.5)}.fc-direction-ltr .fc-h-event:not(.fc-event-selected) .fc-event-resizer-end,.fc-direction-rtl .fc-h-event:not(.fc-event-selected) .fc-event-resizer-start{cursor:e-resize;right:calc(var(--fc-event-resizer-thickness)*-.5)}.fc-h-event.fc-event-selected .fc-event-resizer{margin-top:calc(var(--fc-event-resizer-dot-total-width)*-.5);top:50%}.fc-direction-ltr .fc-h-event.fc-event-selected .fc-event-resizer-start,.fc-direction-rtl .fc-h-event.fc-event-selected .fc-event-resizer-end{left:calc(var(--fc-event-resizer-dot-total-width)*-.5)}.fc-direction-ltr .fc-h-event.fc-event-selected .fc-event-resizer-end,.fc-direction-rtl .fc-h-event.fc-event-selected .fc-event-resizer-start{right:calc(var(--fc-event-resizer-dot-total-width)*-.5)}.fc .fc-popover{box-shadow:0 2px 6px rgba(0,0,0,.15);position:absolute;z-index:9999}.fc .fc-popover-header{align-items:center;display:flex;flex-direction:row;justify-content:space-between;padding:3px 4px}.fc .fc-popover-title{margin:0 2px}.fc .fc-popover-close{cursor:pointer;font-size:1.1em;opacity:.65}.fc-theme-standard .fc-popover{background:var(--fc-page-bg-color);border:1px solid var(--fc-border-color)}.fc-theme-standard .fc-popover-header{background:var(--fc-neutral-bg-color)}';
eo(ap);
class ka {
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
function Ea(t) {
  t.parentNode && t.parentNode.removeChild(t);
}
function Be(t, e) {
  if (t.closest)
    return t.closest(e);
  if (!document.documentElement.contains(t))
    return null;
  do {
    if (ip(t, e))
      return t;
    t = t.parentElement || t.parentNode;
  } while (t !== null && t.nodeType === 1);
  return null;
}
function ip(t, e) {
  return (t.matches || t.matchesSelector || t.msMatchesSelector).call(t, e);
}
function rp(t, e) {
  let n = t instanceof HTMLElement ? [t] : t, a = [];
  for (let i = 0; i < n.length; i += 1) {
    let r = n[i].querySelectorAll(e);
    for (let o = 0; o < r.length; o += 1)
      a.push(r[o]);
  }
  return a;
}
const op = /(top|left|right|bottom|width|height)$/i;
function Lt(t, e) {
  for (let n in e)
    ao(t, n, e[n]);
}
function ao(t, e, n) {
  n == null ? t.style[e] = "" : typeof n == "number" && op.test(e) ? t.style[e] = `${n}px` : t.style[e] = n;
}
function io(t) {
  var e, n;
  return (n = (e = t.composedPath) === null || e === void 0 ? void 0 : e.call(t)[0]) !== null && n !== void 0 ? n : t.target;
}
let Ti = 0;
function xn() {
  return Ti += 1, "fc-dom-" + Ti;
}
function Pn(t) {
  t.preventDefault();
}
function sp(t, e) {
  return (n) => {
    let a = Be(n.target, t);
    a && e.call(a, n, a);
  };
}
function ro(t, e, n, a) {
  let i = sp(n, a);
  return t.addEventListener(e, i), () => {
    t.removeEventListener(e, i);
  };
}
function lp(t, e, n, a) {
  let i;
  return ro(t, "mouseover", e, (r, o) => {
    if (o !== i) {
      i = o, n(r, o);
      let s = (l) => {
        i = null, a(l, o), o.removeEventListener("mouseleave", s);
      };
      o.addEventListener("mouseleave", s);
    }
  });
}
const ki = [
  "webkitTransitionEnd",
  "otransitionend",
  "oTransitionEnd",
  "msTransitionEnd",
  "transitionend"
];
function up(t, e) {
  let n = (a) => {
    e(a), ki.forEach((i) => {
      t.removeEventListener(i, n);
    });
  };
  ki.forEach((a) => {
    t.addEventListener(a, n);
  });
}
function oo(t) {
  return Object.assign({ onClick: t }, so(t));
}
function so(t) {
  return {
    tabIndex: 0,
    onKeyDown(e) {
      (e.key === "Enter" || e.key === " ") && (t(e), e.preventDefault());
    }
  };
}
let Ei = 0;
function bt() {
  return Ei += 1, String(Ei);
}
function Ma() {
  document.body.classList.add("fc-not-allowed");
}
function Na() {
  document.body.classList.remove("fc-not-allowed");
}
function cp(t) {
  t.style.userSelect = "none", t.style.webkitUserSelect = "none", t.addEventListener("selectstart", Pn);
}
function dp(t) {
  t.style.userSelect = "", t.style.webkitUserSelect = "", t.removeEventListener("selectstart", Pn);
}
function fp(t) {
  t.addEventListener("contextmenu", Pn);
}
function mp(t) {
  t.removeEventListener("contextmenu", Pn);
}
function hp(t) {
  let e = [], n = [], a, i;
  for (typeof t == "string" ? n = t.split(/\s*,\s*/) : typeof t == "function" ? n = [t] : Array.isArray(t) && (n = t), a = 0; a < n.length; a += 1)
    i = n[a], typeof i == "string" ? e.push(i.charAt(0) === "-" ? { field: i.substring(1), order: -1 } : { field: i, order: 1 }) : typeof i == "function" && e.push({ func: i });
  return e;
}
function vp(t, e, n) {
  let a, i;
  for (a = 0; a < n.length; a += 1)
    if (i = pp(t, e, n[a]), i)
      return i;
  return 0;
}
function pp(t, e, n) {
  return n.func ? n.func(t, e) : gp(t[n.field], e[n.field]) * (n.order || 1);
}
function gp(t, e) {
  return !t && !e ? 0 : e == null ? -1 : t == null ? 1 : typeof t == "string" || typeof e == "string" ? String(t).localeCompare(String(e)) : t - e;
}
function qn(t, e) {
  let n = String(t);
  return "000".substr(0, e - n.length) + n;
}
function Ht(t, e, n) {
  return typeof t == "function" ? t(...e) : typeof t == "string" ? e.reduce((a, i, r) => a.replace("$" + r, i || ""), t) : n;
}
function yp(t, e) {
  return t - e;
}
function Qn(t) {
  return t % 1 === 0;
}
function bp(t) {
  let e = t.querySelector(".fc-scrollgrid-shrink-frame"), n = t.querySelector(".fc-scrollgrid-shrink-cushion");
  if (!e)
    throw new Error("needs fc-scrollgrid-shrink-frame className");
  if (!n)
    throw new Error("needs fc-scrollgrid-shrink-cushion className");
  return t.getBoundingClientRect().width - e.getBoundingClientRect().width + // the cell padding+border
  n.getBoundingClientRect().width;
}
const Ap = /^(-?)(?:(\d+)\.)?(\d+):(\d\d)(?::(\d\d)(?:\.(\d\d\d))?)?/;
function ge(t, e) {
  return typeof t == "string" ? Cp(t) : typeof t == "object" && t ? Mi(t) : typeof t == "number" ? Mi({ [e || "milliseconds"]: t }) : null;
}
function Cp(t) {
  let e = Ap.exec(t);
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
function Mi(t) {
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
function wp(t, e) {
  return t.years === e.years && t.months === e.months && t.days === e.days && t.milliseconds === e.milliseconds;
}
function _p(t, e) {
  return {
    years: t.years - e.years,
    months: t.months - e.months,
    days: t.days - e.days,
    milliseconds: t.milliseconds - e.milliseconds
  };
}
function Sp(t) {
  return Dt(t) / 365;
}
function Tp(t) {
  return Dt(t) / 30;
}
function Dt(t) {
  return Gt(t) / 864e5;
}
function Gt(t) {
  return t.years * (365 * 864e5) + t.months * (30 * 864e5) + t.days * 864e5 + t.milliseconds;
}
function fa(t) {
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
function st(t, e, n) {
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
const kp = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"];
function Ni(t, e) {
  let n = it(t);
  return n[2] += e * 7, Ve(n);
}
function xe(t, e) {
  let n = it(t);
  return n[2] += e, Ve(n);
}
function lt(t, e) {
  let n = it(t);
  return n[6] += e, Ve(n);
}
function Ep(t, e) {
  return Ft(t, e) / 7;
}
function Ft(t, e) {
  return (e.valueOf() - t.valueOf()) / (1e3 * 60 * 60 * 24);
}
function Mp(t, e) {
  return (e.valueOf() - t.valueOf()) / (1e3 * 60 * 60);
}
function Np(t, e) {
  return (e.valueOf() - t.valueOf()) / (1e3 * 60);
}
function Dp(t, e) {
  return (e.valueOf() - t.valueOf()) / 1e3;
}
function Ip(t, e) {
  let n = _e(t), a = _e(e);
  return {
    years: 0,
    months: 0,
    days: Math.round(Ft(n, a)),
    milliseconds: e.valueOf() - a.valueOf() - (t.valueOf() - n.valueOf())
  };
}
function Op(t, e) {
  let n = wn(t, e);
  return n !== null && n % 7 === 0 ? n / 7 : null;
}
function wn(t, e) {
  return rt(t) === rt(e) ? Math.round(Ft(t, e)) : null;
}
function _e(t) {
  return Ve([
    t.getUTCFullYear(),
    t.getUTCMonth(),
    t.getUTCDate()
  ]);
}
function Rp(t) {
  return Ve([
    t.getUTCFullYear(),
    t.getUTCMonth(),
    t.getUTCDate(),
    t.getUTCHours()
  ]);
}
function xp(t) {
  return Ve([
    t.getUTCFullYear(),
    t.getUTCMonth(),
    t.getUTCDate(),
    t.getUTCHours(),
    t.getUTCMinutes()
  ]);
}
function Pp(t) {
  return Ve([
    t.getUTCFullYear(),
    t.getUTCMonth(),
    t.getUTCDate(),
    t.getUTCHours(),
    t.getUTCMinutes(),
    t.getUTCSeconds()
  ]);
}
function $p(t, e, n) {
  let a = t.getUTCFullYear(), i = Zn(t, a, e, n);
  if (i < 1)
    return Zn(t, a - 1, e, n);
  let r = Zn(t, a + 1, e, n);
  return r >= 1 ? Math.min(i, r) : i;
}
function Zn(t, e, n, a) {
  let i = Ve([e, 0, 1 + Fp(e, n, a)]), r = _e(t), o = Math.round(Ft(i, r));
  return Math.floor(o / 7) + 1;
}
function Fp(t, e, n) {
  let a = 7 + e - n;
  return -((7 + Ve([t, 0, a]).getUTCDay() - e) % 7) + a - 1;
}
function Di(t) {
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
function Ii(t) {
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
function Ve(t) {
  return t.length === 1 && (t = t.concat([0])), new Date(Date.UTC(...t));
}
function lo(t) {
  return !isNaN(t.valueOf());
}
function rt(t) {
  return t.getUTCHours() * 1e3 * 60 * 60 + t.getUTCMinutes() * 1e3 * 60 + t.getUTCSeconds() * 1e3 + t.getUTCMilliseconds();
}
function Bp(t, e, n = !1) {
  let a = t.toISOString();
  return a = a.replace(".000", ""), n && (a = a.replace("T00:00:00Z", "")), a.length > 10 && (e == null ? a = a.replace("Z", "") : e !== 0 && (a = a.replace("Z", Ia(e, !0)))), a;
}
function Da(t) {
  return t.toISOString().replace(/T.*$/, "");
}
function zp(t) {
  return t.toISOString().match(/^\d{4}-\d{2}/)[0];
}
function Ia(t, e = !1) {
  let n = t < 0 ? "-" : "+", a = Math.abs(t), i = Math.floor(a / 60), r = Math.round(a % 60);
  return e ? `${n + qn(i, 2)}:${qn(r, 2)}` : `GMT${n}${i}${r ? `:${qn(r, 2)}` : ""}`;
}
function pe(t, e, n) {
  let a, i;
  return function(...r) {
    if (!a)
      i = t.apply(this, r);
    else if (!st(a, r)) {
      let o = t.apply(this, r);
      (!e || !e(o, i)) && (i = o);
    }
    return a = r, i;
  };
}
function vn(t, e, n) {
  let a, i;
  return (r) => (a ? Ke(a, r) || (i = t.call(this, r)) : i = t.call(this, r), a = r, i);
}
const Jn = {
  week: 3,
  separator: 9,
  omitZeroMinute: 9,
  meridiem: 9,
  omitCommas: 9
}, _n = {
  timeZoneName: 7,
  era: 6,
  year: 5,
  month: 4,
  day: 2,
  weekday: 2,
  hour: 1,
  minute: 1,
  second: 1
}, rn = /\s*([ap])\.?m\.?/i, Lp = /,/g, Hp = /\s+/g, Vp = /\u200e/g, jp = /UTC|GMT/;
class Up {
  constructor(e) {
    let n = {}, a = {}, i = 9;
    for (let r in e)
      r in Jn ? (a[r] = e[r], Jn[r] < 9 && (i = Math.min(Jn[r], i))) : (n[r] = e[r], r in _n && (i = Math.min(_n[r], i)));
    this.standardDateProps = n, this.extendedSettings = a, this.smallestUnitNum = i, this.buildFormattingFunc = pe(Oi);
  }
  format(e, n) {
    return this.buildFormattingFunc(this.standardDateProps, this.extendedSettings, n)(e);
  }
  formatRange(e, n, a, i) {
    let { standardDateProps: r, extendedSettings: o } = this, s = Qp(e.marker, n.marker, a.calendarSystem);
    if (!s)
      return this.format(e, a);
    let l = s;
    l > 1 && // the two dates are different in a way that's larger scale than time
    (r.year === "numeric" || r.year === "2-digit") && (r.month === "numeric" || r.month === "2-digit") && (r.day === "numeric" || r.day === "2-digit") && (l = 1);
    let c = this.format(e, a), d = this.format(n, a);
    if (c === d)
      return c;
    let h = Zp(r, l), p = Oi(h, o, a), v = p(e), y = p(n), g = Jp(c, v, d, y), b = o.separator || i || a.defaultSeparator || "";
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
function Oi(t, e, n) {
  let a = Object.keys(t).length;
  return a === 1 && t.timeZoneName === "short" ? (i) => Ia(i.timeZoneOffset) : a === 0 && e.week ? (i) => qp(n.computeWeekNumber(i.marker), n.weekText, n.weekTextLong, n.locale, e.week) : Wp(t, e, n);
}
function Wp(t, e, n) {
  t = Object.assign({}, t), e = Object.assign({}, e), Yp(t, e), t.timeZone = "UTC";
  let a = new Intl.DateTimeFormat(n.locale.codes, t), i;
  if (e.omitZeroMinute) {
    let r = Object.assign({}, t);
    delete r.minute, i = new Intl.DateTimeFormat(n.locale.codes, r);
  }
  return (r) => {
    let { marker: o } = r, s;
    i && !o.getUTCMinutes() ? s = i : s = a;
    let l = s.format(o);
    return Gp(l, r, t, e, n);
  };
}
function Yp(t, e) {
  t.timeZoneName && (t.hour || (t.hour = "2-digit"), t.minute || (t.minute = "2-digit")), t.timeZoneName === "long" && (t.timeZoneName = "short"), e.omitZeroMinute && (t.second || t.millisecond) && delete e.omitZeroMinute;
}
function Gp(t, e, n, a, i) {
  return t = t.replace(Vp, ""), n.timeZoneName === "short" && (t = Kp(t, i.timeZone === "UTC" || e.timeZoneOffset == null ? "UTC" : (
    // important to normalize for IE, which does "GMT"
    Ia(e.timeZoneOffset)
  ))), a.omitCommas && (t = t.replace(Lp, "").trim()), a.omitZeroMinute && (t = t.replace(":00", "")), a.meridiem === !1 ? t = t.replace(rn, "").trim() : a.meridiem === "narrow" ? t = t.replace(rn, (r, o) => o.toLocaleLowerCase()) : a.meridiem === "short" ? t = t.replace(rn, (r, o) => `${o.toLocaleLowerCase()}m`) : a.meridiem === "lowercase" && (t = t.replace(rn, (r) => r.toLocaleLowerCase())), t = t.replace(Hp, " "), t = t.trim(), t;
}
function Kp(t, e) {
  let n = !1;
  return t = t.replace(jp, () => (n = !0, e)), n || (t += ` ${e}`), t;
}
function qp(t, e, n, a, i) {
  let r = [];
  return i === "long" ? r.push(n) : (i === "short" || i === "narrow") && r.push(e), (i === "long" || i === "short") && r.push(" "), r.push(a.simpleNumberFormat.format(t)), a.options.direction === "rtl" && r.reverse(), r.join("");
}
function Qp(t, e, n) {
  return n.getMarkerYear(t) !== n.getMarkerYear(e) ? 5 : n.getMarkerMonth(t) !== n.getMarkerMonth(e) ? 4 : n.getMarkerDay(t) !== n.getMarkerDay(e) ? 2 : rt(t) !== rt(e) ? 1 : 0;
}
function Zp(t, e) {
  let n = {};
  for (let a in t)
    (!(a in _n) || // not a date part prop (like timeZone)
    _n[a] <= e) && (n[a] = t[a]);
  return n;
}
function Jp(t, e, n, a) {
  let i = 0;
  for (; i < t.length; ) {
    let r = t.indexOf(e, i);
    if (r === -1)
      break;
    let o = t.substr(0, r);
    i = r + e.length;
    let s = t.substr(i), l = 0;
    for (; l < n.length; ) {
      let c = n.indexOf(a, l);
      if (c === -1)
        break;
      let d = n.substr(0, c);
      l = c + a.length;
      let h = n.substr(l);
      if (o === d && s === h)
        return {
          before: o,
          after: s
        };
    }
  }
  return null;
}
function Ri(t, e) {
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
  let i = Ri(t, n.calendarSystem), r = e ? Ri(e, n.calendarSystem) : null;
  return {
    date: i,
    start: i,
    end: r,
    timeZone: n.timeZone,
    localeCodes: n.locale.codes,
    defaultSeparator: a || n.defaultSeparator
  };
}
class Xp {
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
class eg {
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
function Re(t) {
  return typeof t == "object" && t ? new Up(t) : typeof t == "string" ? new Xp(t) : typeof t == "function" ? new eg(t) : null;
}
const xi = {
  navLinkDayClick: x,
  navLinkWeekClick: x,
  duration: ge,
  bootstrapFontAwesome: x,
  buttonIcons: x,
  customButtons: x,
  defaultAllDayEventDuration: ge,
  defaultTimedEventDuration: ge,
  nextDayThreshold: ge,
  scrollTime: ge,
  scrollTimeReset: Boolean,
  slotMinTime: ge,
  slotMaxTime: ge,
  dayPopoverFormat: Re,
  slotDuration: ge,
  snapDuration: ge,
  headerToolbar: x,
  footerToolbar: x,
  defaultRangeSeparator: String,
  titleRangeSeparator: String,
  forceEventDuration: Boolean,
  dayHeaders: Boolean,
  dayHeaderFormat: Re,
  dayHeaderClassNames: x,
  dayHeaderContent: x,
  dayHeaderDidMount: x,
  dayHeaderWillUnmount: x,
  dayCellClassNames: x,
  dayCellContent: x,
  dayCellDidMount: x,
  dayCellWillUnmount: x,
  initialView: String,
  aspectRatio: Number,
  weekends: Boolean,
  weekNumberCalculation: x,
  weekNumbers: Boolean,
  weekNumberClassNames: x,
  weekNumberContent: x,
  weekNumberDidMount: x,
  weekNumberWillUnmount: x,
  editable: Boolean,
  viewClassNames: x,
  viewDidMount: x,
  viewWillUnmount: x,
  nowIndicator: Boolean,
  nowIndicatorSnap: x,
  nowIndicatorClassNames: x,
  nowIndicatorContent: x,
  nowIndicatorDidMount: x,
  nowIndicatorWillUnmount: x,
  showNonCurrentDates: Boolean,
  lazyFetching: Boolean,
  startParam: String,
  endParam: String,
  timeZoneParam: String,
  timeZone: String,
  locales: x,
  locale: x,
  themeSystem: String,
  dragRevertDuration: Number,
  dragScroll: Boolean,
  allDayMaintainDuration: Boolean,
  unselectAuto: Boolean,
  dropAccept: x,
  eventOrder: hp,
  eventOrderStrict: Boolean,
  handleWindowResize: Boolean,
  windowResizeDelay: Number,
  longPressDelay: Number,
  eventDragMinDistance: Number,
  expandRows: Boolean,
  height: x,
  contentHeight: x,
  direction: String,
  weekNumberFormat: Re,
  eventResizableFromStart: Boolean,
  displayEventTime: Boolean,
  displayEventEnd: Boolean,
  weekText: String,
  weekTextLong: String,
  progressiveEventRendering: Boolean,
  businessHours: x,
  initialDate: x,
  now: x,
  eventDataTransform: x,
  stickyHeaderDates: x,
  stickyFooterScrollbar: x,
  viewHeight: x,
  defaultAllDay: Boolean,
  eventSourceFailure: x,
  eventSourceSuccess: x,
  eventDisplay: String,
  eventStartEditable: Boolean,
  eventDurationEditable: Boolean,
  eventOverlap: x,
  eventConstraint: x,
  eventAllow: x,
  eventBackgroundColor: String,
  eventBorderColor: String,
  eventTextColor: String,
  eventColor: String,
  eventClassNames: x,
  eventContent: x,
  eventDidMount: x,
  eventWillUnmount: x,
  selectConstraint: x,
  selectOverlap: x,
  selectAllow: x,
  droppable: Boolean,
  unselectCancel: String,
  slotLabelFormat: x,
  slotLaneClassNames: x,
  slotLaneContent: x,
  slotLaneDidMount: x,
  slotLaneWillUnmount: x,
  slotLabelClassNames: x,
  slotLabelContent: x,
  slotLabelDidMount: x,
  slotLabelWillUnmount: x,
  dayMaxEvents: x,
  dayMaxEventRows: x,
  dayMinWidth: Number,
  slotLabelInterval: ge,
  allDayText: String,
  allDayClassNames: x,
  allDayContent: x,
  allDayDidMount: x,
  allDayWillUnmount: x,
  slotMinWidth: Number,
  navLinks: Boolean,
  eventTimeFormat: Re,
  rerenderDelay: Number,
  moreLinkText: x,
  moreLinkHint: x,
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
  plugins: x,
  firstDay: Number,
  dayCount: Number,
  dateAlignment: String,
  dateIncrement: ge,
  hiddenDays: x,
  fixedWeekCount: Boolean,
  validRange: x,
  visibleRange: x,
  titleFormat: x,
  eventInteractive: Boolean,
  // only used by list-view, but languages define the value, so we need it in base options
  noEventsText: String,
  viewHint: x,
  navLinkHint: x,
  closeHint: String,
  timeHint: String,
  eventHint: String,
  moreLinkClick: x,
  moreLinkClassNames: x,
  moreLinkContent: x,
  moreLinkDidMount: x,
  moreLinkWillUnmount: x,
  monthStartFormat: Re,
  // for connectors
  // (can't be part of plugin system b/c must be provided at runtime)
  handleCustomRendering: x,
  customRenderingMetaMap: x,
  customRenderingReplaces: Boolean
}, Vt = {
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
}, Pi = {
  datesSet: x,
  eventsSet: x,
  eventAdd: x,
  eventChange: x,
  eventRemove: x,
  windowResize: x,
  eventClick: x,
  eventMouseEnter: x,
  eventMouseLeave: x,
  select: x,
  unselect: x,
  loading: x,
  // internal
  _unmount: x,
  _beforeprint: x,
  _afterprint: x,
  _noEventDrop: x,
  _noEventResize: x,
  _resize: x,
  _scrollRequest: x
}, $i = {
  buttonText: x,
  buttonHints: x,
  views: x,
  plugins: x,
  initialEvents: x,
  events: x,
  eventSources: x
}, dt = {
  headerToolbar: ft,
  footerToolbar: ft,
  buttonText: ft,
  buttonHints: ft,
  buttonIcons: ft,
  dateIncrement: ft,
  plugins: on,
  events: on,
  eventSources: on,
  resources: on
};
function ft(t, e) {
  return typeof t == "object" && typeof e == "object" && t && e ? Ke(t, e) : t === e;
}
function on(t, e) {
  return Array.isArray(t) && Array.isArray(e) ? st(t, e) : t === e;
}
const tg = {
  type: String,
  component: x,
  buttonText: String,
  buttonTextKey: String,
  dateProfileGeneratorClass: x,
  usesMinMaxTime: Boolean,
  classNames: x,
  content: x,
  didMount: x,
  willUnmount: x
};
function Xn(t) {
  return Ra(t, dt);
}
function Oa(t, e) {
  let n = {}, a = {};
  for (let i in e)
    i in t && (n[i] = e[i](t[i]));
  for (let i in t)
    i in e || (a[i] = t[i]);
  return { refined: n, extra: a };
}
function x(t) {
  return t;
}
const { hasOwnProperty: Tn } = Object.prototype;
function Ra(t, e) {
  let n = {};
  if (e) {
    for (let a in e)
      if (e[a] === ft) {
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
        i.length && (n[a] = Ra(i));
      }
  }
  for (let a = t.length - 1; a >= 0; a -= 1) {
    let i = t[a];
    for (let r in i)
      r in n || (n[r] = i[r]);
  }
  return n;
}
function gt(t, e) {
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
function uo(t) {
  let e = {};
  for (let n of t)
    e[n] = !0;
  return e;
}
function xa(t) {
  let e = [];
  for (let n in t)
    e.push(t[n]);
  return e;
}
function Ke(t, e) {
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
const ng = /^on[A-Z]/;
function ag(t, e) {
  const n = ig(t, e);
  for (let a of n)
    if (!ng.test(a))
      return !1;
  return !0;
}
function ig(t, e) {
  let n = [];
  for (let a in t)
    Tn.call(t, a) && (a in e || n.push(a));
  for (let a in e)
    Tn.call(e, a) && t[a] !== e[a] && n.push(a);
  return n;
}
function ea(t, e, n = {}) {
  if (t === e)
    return !0;
  for (let a in e)
    if (!(a in t && rg(t[a], e[a], n[a]))) return !1;
  for (let a in t)
    if (!(a in e))
      return !1;
  return !0;
}
function rg(t, e, n) {
  return t === e || n === !0 ? !0 : n ? n(t, e) : !1;
}
function og(t, e = 0, n, a = 1) {
  let i = [];
  n == null && (n = Object.keys(t).length);
  for (let r = e; r < n; r += a) {
    let o = t[r];
    o !== void 0 && i.push(o);
  }
  return i;
}
let co = {};
function sg(t, e) {
  co[t] = e;
}
function lg(t) {
  return new co[t]();
}
class ug {
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
    return Ve(e);
  }
  markerToArray(e) {
    return it(e);
  }
}
sg("gregory", ug);
const cg = /^\s*(\d{4})(-?(\d{2})(-?(\d{2})([T ](\d{2}):?(\d{2})(:?(\d{2})(\.(\d+))?)?(Z|(([-+])(\d{2})(:?(\d{2}))?))?)?)?)?$/;
function dg(t) {
  let e = cg.exec(t);
  if (e) {
    let n = new Date(Date.UTC(Number(e[1]), e[3] ? Number(e[3]) - 1 : 0, Number(e[5] || 1), Number(e[7] || 0), Number(e[8] || 0), Number(e[10] || 0), e[12] ? +`0.${e[12]}` * 1e3 : 0));
    if (lo(n)) {
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
class fg {
  constructor(e) {
    let n = this.timeZone = e.timeZone, a = n !== "local" && n !== "UTC";
    e.namedTimeZoneImpl && a && (this.namedTimeZoneImpl = new e.namedTimeZoneImpl(n)), this.canComputeOffset = !!(!a || this.namedTimeZoneImpl), this.calendarSystem = lg(e.calendarSystem), this.locale = e.locale, this.weekDow = e.locale.week.dow, this.weekDoy = e.locale.week.doy, e.weekNumberCalculation === "ISO" && (this.weekDow = 1, this.weekDoy = 4), typeof e.firstDay == "number" && (this.weekDow = e.firstDay), typeof e.weekNumberCalculation == "function" && (this.weekNumberFunc = e.weekNumberCalculation), this.weekText = e.weekText != null ? e.weekText : e.locale.options.weekText, this.weekTextLong = (e.weekTextLong != null ? e.weekTextLong : e.locale.options.weekTextLong) || this.weekText, this.cmdFormatter = e.cmdFormatter, this.defaultSeparator = e.defaultSeparator;
  }
  // Creating / Parsing
  createMarker(e) {
    let n = this.createMarkerMeta(e);
    return n === null ? null : n.marker;
  }
  createNowMarker() {
    return this.canComputeOffset ? this.timestampToMarker((/* @__PURE__ */ new Date()).valueOf()) : Ve(Di(/* @__PURE__ */ new Date()));
  }
  createMarkerMeta(e) {
    if (typeof e == "string")
      return this.parse(e);
    let n = null;
    return typeof e == "number" ? n = this.timestampToMarker(e) : e instanceof Date ? (e = e.valueOf(), isNaN(e) || (n = this.timestampToMarker(e))) : Array.isArray(e) && (n = Ve(e)), n === null || !lo(n) ? null : { marker: n, isTimeUnspecified: !1, forcedTzo: null };
  }
  parse(e) {
    let n = dg(e);
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
    return a !== null ? { unit: "year", value: a } : (a = this.diffWholeMonths(e, n), a !== null ? { unit: "month", value: a } : (a = Op(e, n), a !== null ? { unit: "week", value: a } : (a = wn(e, n), a !== null ? { unit: "day", value: a } : (a = Mp(e, n), Qn(a) ? { unit: "hour", value: a } : (a = Np(e, n), Qn(a) ? { unit: "minute", value: a } : (a = Dp(e, n), Qn(a) ? { unit: "second", value: a } : { unit: "millisecond", value: n.valueOf() - e.valueOf() }))))));
  }
  countDurationsBetween(e, n, a) {
    let i;
    return a.years && (i = this.diffWholeYears(e, n), i !== null) ? i / Sp(a) : a.months && (i = this.diffWholeMonths(e, n), i !== null) ? i / Tp(a) : a.days && (i = wn(e, n), i !== null) ? i / Dt(a) : (n.valueOf() - e.valueOf()) / Gt(a);
  }
  // Start-Of
  // these DON'T return zoned-dates. only UTC start-of dates
  startOf(e, n) {
    return n === "year" ? this.startOfYear(e) : n === "month" ? this.startOfMonth(e) : n === "week" ? this.startOfWeek(e) : n === "day" ? _e(e) : n === "hour" ? Rp(e) : n === "minute" ? xp(e) : n === "second" ? Pp(e) : null;
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
    return this.weekNumberFunc ? this.weekNumberFunc(this.toDate(e)) : $p(e, this.weekDow, this.weekDoy);
  }
  // TODO: choke on timeZoneName: long
  format(e, n, a = {}) {
    return n.format({
      marker: e,
      timeZoneOffset: a.forcedTzo != null ? a.forcedTzo : this.offsetForMarker(e)
    }, this);
  }
  formatRange(e, n, a, i = {}) {
    return i.isEndExclusive && (n = lt(n, -1)), a.formatRange({
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
    return n.omitTimeZoneOffset || (n.forcedTzo != null ? a = n.forcedTzo : a = this.offsetForMarker(e)), Bp(e, a, n.omitTime);
  }
  // TimeZone
  timestampToMarker(e) {
    return this.timeZone === "local" ? Ve(Di(new Date(e))) : this.timeZone === "UTC" || !this.namedTimeZoneImpl ? new Date(e) : Ve(this.namedTimeZoneImpl.timestampToArray(e));
  }
  offsetForMarker(e) {
    return this.timeZone === "local" ? -Ii(it(e)).getTimezoneOffset() : this.timeZone === "UTC" ? 0 : this.namedTimeZoneImpl ? this.namedTimeZoneImpl.offsetForArray(it(e)) : null;
  }
  // Conversion
  toDate(e, n) {
    return this.timeZone === "local" ? Ii(it(e)) : this.timeZone === "UTC" ? new Date(e.valueOf()) : this.namedTimeZoneImpl ? new Date(e.valueOf() - this.namedTimeZoneImpl.offsetForArray(it(e)) * 1e3 * 60) : new Date(e.valueOf() - (n || 0));
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
function kn(t) {
  t();
  let e = le.debounceRendering, n = [];
  function a(i) {
    n.push(i);
  }
  for (le.debounceRendering = a, Yt($(mg, {}), document.createElement("div")); n.length; )
    n.shift()();
  le.debounceRendering = e;
}
class mg extends Ue {
  render() {
    return $("div", {});
  }
  componentDidMount() {
    this.setState({});
  }
}
function fo(t) {
  let e = Bv(t), n = e.Provider;
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
class hg {
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
const Ct = fo({});
function vg(t, e, n, a, i, r, o, s, l, c, d, h, p, v) {
  return {
    dateEnv: i,
    nowManager: r,
    options: n,
    pluginHooks: s,
    emitter: d,
    dispatch: l,
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
      return new hg(y, d, ge(n.scrollTime), n.scrollTimeReset);
    },
    registerInteractiveComponent: p,
    unregisterInteractiveComponent: v
  };
}
class wt extends Ue {
  // debug: boolean
  shouldComponentUpdate(e, n) {
    return !ea(
      this.props,
      e,
      this.propEquality
      /*, this.debug */
    ) || !ea(
      this.state,
      n,
      this.stateEquality
      /*, this.debug */
    );
  }
  // HACK for freakin' React StrictMode
  safeSetState(e) {
    ea(this.state, Object.assign(Object.assign({}, this.state), e), this.stateEquality) || this.setState(e);
  }
}
wt.addPropsEquality = pg;
wt.addStateEquality = gg;
wt.contextType = Ct;
wt.prototype.propEquality = {};
wt.prototype.stateEquality = {};
class Ee extends wt {
}
Ee.contextType = Ct;
function pg(t) {
  let e = Object.create(this.prototype.propEquality);
  Object.assign(e, t), this.prototype.propEquality = e;
}
function gg(t) {
  let e = Object.create(this.prototype.stateEquality);
  Object.assign(e, t), this.prototype.stateEquality = e;
}
function Ze(t, e) {
  typeof t == "function" ? t(e) : t && (t.current = e);
}
class Pa extends Ee {
  constructor() {
    super(...arguments), this.id = bt(), this.queuedDomNodes = [], this.currentDomNodes = [], this.handleEl = (e) => {
      const { options: n } = this.context, { generatorName: a } = this.props;
      (!n.customRenderingReplaces || !ma(a, n)) && this.updateElRef(e);
    }, this.updateElRef = (e) => {
      this.props.elRef && Ze(this.props.elRef, e);
    };
  }
  render() {
    const { props: e, context: n } = this, { options: a } = n, { customGenerator: i, defaultGenerator: r, renderProps: o } = e, s = mo(e, [], this.handleEl);
    let l = !1, c, d = [], h;
    if (i != null) {
      const p = typeof i == "function" ? i(o, $) : i;
      if (p === !0)
        l = !0;
      else {
        const v = p && typeof p == "object";
        v && "html" in p ? s.dangerouslySetInnerHTML = { __html: p.html } : v && "domNodes" in p ? d = Array.prototype.slice.call(p.domNodes) : (v ? $r(p) : typeof p != "function") ? c = p : h = p;
      }
    } else
      l = !ma(e.generatorName, a);
    return l && r && (c = r(o)), this.queuedDomNodes = d, this.currentGeneratorMeta = h, $(e.elTag, s, c);
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
      }, a), { elClasses: (a.elClasses || []).filter(yg) }));
    }
  }
  applyQueueudDomNodes() {
    const { queuedDomNodes: e, currentDomNodes: n } = this, a = this.base;
    if (!st(e, n)) {
      n.forEach(Ea);
      for (let i of e)
        a.appendChild(i);
      this.currentDomNodes = e;
    }
  }
}
Pa.addPropsEquality({
  elClasses: st,
  elStyle: Ke,
  elAttrs: ag,
  renderProps: Ke
});
function ma(t, e) {
  var n;
  return !!(e.handleCustomRendering && t && (!((n = e.customRenderingMetaMap) === null || n === void 0) && n[t]));
}
function mo(t, e, n) {
  const a = Object.assign(Object.assign({}, t.elAttrs), { ref: n });
  return (t.elClasses || e) && (a.className = (t.elClasses || []).concat(e || []).concat(a.className || []).filter(Boolean).join(" ")), t.elStyle && (a.style = t.elStyle), a;
}
function yg(t) {
  return !!t;
}
const ho = fo(0);
class et extends Ue {
  constructor() {
    super(...arguments), this.InnerContent = bg.bind(void 0, this), this.handleEl = (e) => {
      this.el = e, this.props.elRef && (Ze(this.props.elRef, e), e && this.didMountMisfire && this.componentDidMount());
    };
  }
  render() {
    const { props: e } = this, n = Ag(e.classNameGenerator, e.renderProps);
    if (e.children) {
      const a = mo(e, n, this.handleEl), i = e.children(this.InnerContent, e.renderProps, a);
      return e.elTag ? $(e.elTag, a, i) : i;
    } else
      return $(Pa, Object.assign(Object.assign({}, e), { elRef: this.handleEl, elTag: e.elTag || "div", elClasses: (e.elClasses || []).concat(n), renderId: this.context }));
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
et.contextType = ho;
function bg(t, e) {
  const n = t.props;
  return $(Pa, Object.assign({ renderProps: n.renderProps, generatorName: n.generatorName, customGenerator: n.customGenerator, defaultGenerator: n.defaultGenerator, renderId: t.context }, e));
}
function Ag(t, e) {
  const n = typeof t == "function" ? t(e) : t || [];
  return typeof n == "string" ? [n] : n;
}
class Fi extends Ee {
  render() {
    let { props: e, context: n } = this, { options: a } = n, i = { view: n.viewApi };
    return $(et, { elRef: e.elRef, elTag: e.elTag || "div", elAttrs: e.elAttrs, elClasses: [
      ...vo(e.viewSpec),
      ...e.elClasses || []
    ], elStyle: e.elStyle, renderProps: i, classNameGenerator: a.viewClassNames, generatorName: void 0, didMount: a.viewDidMount, willUnmount: a.viewWillUnmount }, () => e.children);
  }
}
function vo(t) {
  return [
    `fc-${t.type}-view`,
    "fc-view"
  ];
}
function Cg(t, e) {
  let n = null, a = null;
  return t.start && (n = e.createMarker(t.start)), t.end && (a = e.createMarker(t.end)), !n && !a || n && a && a < n ? null : { start: n, end: a };
}
function Bi(t, e) {
  let n = [], { start: a } = e, i, r;
  for (t.sort(wg), i = 0; i < t.length; i += 1)
    r = t[i], r.start > a && n.push({ start: a, end: r.start }), r.end > a && (a = r.end);
  return a < e.end && n.push({ start: a, end: e.end }), n;
}
function wg(t, e) {
  return t.start.valueOf() - e.start.valueOf();
}
function Pt(t, e) {
  let { start: n, end: a } = t, i = null;
  return e.start !== null && (n === null ? n = e.start : n = new Date(Math.max(n.valueOf(), e.start.valueOf()))), e.end != null && (a === null ? a = e.end : a = new Date(Math.min(a.valueOf(), e.end.valueOf()))), (n === null || a === null || n < a) && (i = { start: n, end: a }), i;
}
function _g(t, e) {
  return (t.start === null ? null : t.start.valueOf()) === (e.start === null ? null : e.start.valueOf()) && (t.end === null ? null : t.end.valueOf()) === (e.end === null ? null : e.end.valueOf());
}
function $a(t, e) {
  return (t.end === null || e.start === null || t.end > e.start) && (t.start === null || e.end === null || t.start < e.end);
}
function $n(t, e) {
  return (t.start === null || e.start !== null && e.start >= t.start) && (t.end === null || e.end !== null && e.end <= t.end);
}
function ot(t, e) {
  return (t.start === null || e >= t.start) && (t.end === null || e < t.end);
}
function Sg(t, e) {
  return e.start != null && t < e.start ? e.start : e.end != null && t >= e.end ? new Date(e.end.valueOf() - 1) : t;
}
function po(t) {
  let e = Math.floor(Ft(t.start, t.end)) || 1, n = _e(t.start), a = xe(n, e);
  return { start: n, end: a };
}
function go(t, e = ge(0)) {
  let n = null, a = null;
  if (t.end) {
    a = _e(t.end);
    let i = t.end.valueOf() - a.valueOf();
    i && i >= Gt(e) && (a = xe(a, 1));
  }
  return t.start && (n = _e(t.start), a && a <= n && (a = xe(n, 1))), { start: n, end: a };
}
function Mt(t, e, n, a) {
  return a === "year" ? ge(n.diffWholeYears(t, e), "year") : a === "month" ? ge(n.diffWholeMonths(t, e), "month") : Ip(t, e);
}
class yo {
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
    let { props: i } = this, r, o, s, l, c, d;
    return r = this.buildValidRange(), r = this.trimHiddenDays(r), a && (e = Sg(e, r)), o = this.buildCurrentRangeInfo(e, n), s = /^(year|month|week|day)$/.test(o.unit), l = this.buildRenderRange(this.trimHiddenDays(o.range), o.unit, s), l = this.trimHiddenDays(l), c = l, i.showNonCurrentDates || (c = Pt(c, o.range)), c = this.adjustActiveRange(c), c = Pt(c, r), d = $a(o.range, r), ot(l, e) || (e = l.start), {
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
      renderRange: l,
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
    return a.duration ? (i = a.duration, r = a.durationUnit, o = this.buildRangeFromDuration(e, n, i, r)) : (s = this.props.dayCount) ? (r = "day", o = this.buildRangeFromDayCount(e, n, s)) : (o = this.buildCustomVisibleRange(e)) ? r = a.dateEnv.greatestWholeUnit(o.start, o.end).unit : (i = this.getFallbackDuration(), r = fa(i).unit, o = this.buildRangeFromDuration(e, n, i, r)), { duration: i, unit: r, range: o };
  }
  getFallbackDuration() {
    return ge({ day: 1 });
  }
  // Returns a new activeRange to have time values (un-ambiguate)
  // slotMinTime or slotMaxTime causes the range to expand.
  adjustActiveRange(e) {
    let { dateEnv: n, usesMinMaxTime: a, slotMinTime: i, slotMaxTime: r } = this.props, { start: o, end: s } = e;
    return a && (Dt(i) < 0 && (o = _e(o), o = n.add(o, i)), Dt(r) > 1 && (s = _e(s), s = xe(s, -1), s = n.add(s, r))), { start: o, end: s };
  }
  // Builds the "current" range when it is specified as an explicit duration.
  // `unit` is the already-computed greatestDurationDenominator unit of duration.
  buildRangeFromDuration(e, n, a, i) {
    let { dateEnv: r, dateAlignment: o } = this.props, s, l, c;
    if (!o) {
      let { dateIncrement: h } = this.props;
      h && Gt(h) < Gt(a) ? o = fa(h).unit : o = i;
    }
    Dt(a) <= 1 && this.isHiddenDay(s) && (s = this.skipHiddenDays(s, n), s = _e(s));
    function d() {
      s = r.startOf(e, o), l = r.add(s, a), c = { start: s, end: l };
    }
    return d(), this.trimHiddenDays(c) || (e = this.skipHiddenDays(e, n), d()), c;
  }
  // Builds the "current" range when a dayCount is specified.
  buildRangeFromDayCount(e, n, a) {
    let { dateEnv: i, dateAlignment: r } = this.props, o = 0, s = e, l;
    r && (s = i.startOf(s, r)), s = _e(s), s = this.skipHiddenDays(s, n), l = s;
    do
      l = xe(l, 1), this.isHiddenDay(l) || (o += 1);
    while (o < a);
    return { start: s, end: l };
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
    return n || ((a = this.props.dateAlignment) ? ge(1, a) : e || ge({ days: 1 }));
  }
  refineRange(e) {
    if (e) {
      let n = Cg(e, this.props.dateEnv);
      return n && (n = go(n)), n;
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
      e = xe(e, n);
    return e;
  }
}
function Fa(t, e, n, a) {
  return {
    instanceId: bt(),
    defId: t,
    range: e,
    forcedStartTzo: n ?? null,
    forcedEndTzo: a ?? null
  };
}
function Tg(t, e, n, a) {
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
function yt(t, e, n) {
  let { dateEnv: a, pluginHooks: i, options: r } = n, { defs: o, instances: s } = t;
  s = gt(s, (l) => !o[l.defId].recurringDef);
  for (let l in o) {
    let c = o[l];
    if (c.recurringDef) {
      let { duration: d } = c.recurringDef;
      d || (d = c.allDay ? r.defaultAllDayEventDuration : r.defaultTimedEventDuration);
      let h = kg(c, d, e, a, i.recurringTypes);
      for (let p of h) {
        let v = Fa(l, {
          start: p,
          end: a.add(p, d)
        });
        s[v.instanceId] = v;
      }
    }
  }
  return { defs: o, instances: s };
}
function kg(t, e, n, a, i) {
  let o = i[t.recurringDef.typeId].expand(t.recurringDef.typeData, {
    start: a.subtract(n.start, e),
    end: n.end
  }, a);
  return t.allDay && (o = o.map(_e)), o;
}
const pn = {
  id: String,
  groupId: String,
  title: String,
  url: String,
  interactive: Boolean
}, bo = {
  start: x,
  end: x,
  date: x,
  allDay: Boolean
}, Eg = Object.assign(Object.assign(Object.assign({}, pn), bo), { extendedProps: x });
function Ao(t, e, n, a, i = Ba(n), r, o) {
  let { refined: s, extra: l } = Co(t, n, i), c = Ng(e, n), d = Tg(s, c, n.dateEnv, n.pluginHooks.recurringTypes);
  if (d) {
    let p = ha(s, l, e ? e.sourceId : "", d.allDay, !!d.duration, n, r);
    return p.recurringDef = {
      typeId: d.typeId,
      typeData: d.typeData,
      duration: d.duration
    }, { def: p, instance: null };
  }
  let h = Mg(s, c, n, a);
  if (h) {
    let p = ha(s, l, e ? e.sourceId : "", h.allDay, h.hasEnd, n, r), v = Fa(p.defId, h.range, h.forcedStartTzo, h.forcedEndTzo);
    return o && p.publicId && o[p.publicId] && (v.instanceId = o[p.publicId]), { def: p, instance: v };
  }
  return null;
}
function Co(t, e, n = Ba(e)) {
  return Oa(t, n);
}
function Ba(t) {
  return Object.assign(Object.assign(Object.assign({}, En), Eg), t.pluginHooks.eventRefiners);
}
function ha(t, e, n, a, i, r, o) {
  let s = {
    title: t.title || "",
    groupId: t.groupId || "",
    publicId: t.id || "",
    url: t.url || "",
    recurringDef: null,
    defId: (o && t.id ? o[t.id] : "") || bt(),
    sourceId: n,
    allDay: a,
    hasEnd: i,
    interactive: t.interactive,
    ui: Mn(t, r),
    extendedProps: Object.assign(Object.assign({}, t.extendedProps || {}), e)
  };
  for (let l of r.pluginHooks.eventDefMemberAdders)
    Object.assign(s, l(t));
  return Object.freeze(s.ui.classNames), Object.freeze(s.extendedProps), s;
}
function Mg(t, e, n, a) {
  let { allDay: i } = t, r, o = null, s = !1, l, c = null, d = t.start != null ? t.start : t.date;
  if (r = n.dateEnv.createMarkerMeta(d), r)
    o = r.marker;
  else if (!a)
    return null;
  return t.end != null && (l = n.dateEnv.createMarkerMeta(t.end)), i == null && (e != null ? i = e : i = (!r || r.isTimeUnspecified) && (!l || l.isTimeUnspecified)), i && o && (o = _e(o)), l && (c = l.marker, i && (c = _e(c)), o && c <= o && (c = null)), c ? s = !0 : a || (s = n.options.forceEventDuration || !1, c = n.dateEnv.add(o, i ? n.options.defaultAllDayEventDuration : n.options.defaultTimedEventDuration)), {
    allDay: i,
    hasEnd: s,
    range: { start: o, end: c },
    forcedStartTzo: r ? r.forcedTzo : null,
    forcedEndTzo: l ? l.forcedTzo : null
  };
}
function Ng(t, e) {
  let n = null;
  return t && (n = t.defaultAllDay), n == null && (n = e.options.defaultAllDay), n;
}
function Kt(t, e, n, a, i, r) {
  let o = Ge(), s = Ba(n);
  for (let l of t) {
    let c = Ao(l, e, n, a, s, i, r);
    c && va(c, o);
  }
  return o;
}
function va(t, e = Ge()) {
  return e.defs[t.def.defId] = t.def, t.instance && (e.instances[t.instance.instanceId] = t.instance), e;
}
function za(t, e) {
  let n = t.instances[e];
  if (n) {
    let a = t.defs[n.defId], i = Fn(t, (r) => Dg(a, r));
    return i.defs[a.defId] = a, i.instances[n.instanceId] = n, i;
  }
  return Ge();
}
function Dg(t, e) {
  return !!(t.groupId && t.groupId === e.groupId);
}
function Ge() {
  return { defs: {}, instances: {} };
}
function La(t, e) {
  return {
    defs: Object.assign(Object.assign({}, t.defs), e.defs),
    instances: Object.assign(Object.assign({}, t.instances), e.instances)
  };
}
function Fn(t, e) {
  let n = gt(t.defs, e), a = gt(t.instances, (i) => n[i.defId]);
  return { defs: n, instances: a };
}
function Ig(t, e) {
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
function Og(t, e) {
  return Array.isArray(t) ? Kt(t, null, e, !0) : typeof t == "object" && t ? Kt([t], null, e, !0) : t != null ? String(t) : null;
}
function zi(t) {
  return Array.isArray(t) ? t : typeof t == "string" ? t.split(/\s+/) : [];
}
const En = {
  display: String,
  editable: Boolean,
  startEditable: Boolean,
  durationEditable: Boolean,
  constraint: x,
  overlap: x,
  allow: x,
  className: zi,
  classNames: zi,
  color: String,
  backgroundColor: String,
  borderColor: String,
  textColor: String
}, Rg = {
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
function Mn(t, e) {
  let n = Og(t.constraint, e);
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
function xg(t) {
  return t.reduce(Pg, Rg);
}
function Pg(t, e) {
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
const $g = {
  id: String,
  defaultAllDay: Boolean,
  url: String,
  format: String,
  events: x,
  eventDataTransform: x,
  // for any network-related sources
  success: x,
  failure: x
};
function wo(t, e, n = _o(e)) {
  let a;
  if (typeof t == "string" ? a = { url: t } : typeof t == "function" || Array.isArray(t) ? a = { events: t } : typeof t == "object" && t && (a = t), a) {
    let { refined: i, extra: r } = Oa(a, n), o = Fg(i, e);
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
        sourceId: bt(),
        sourceDefId: o.sourceDefId,
        meta: o.meta,
        ui: Mn(i, e),
        extendedProps: r
      };
  }
  return null;
}
function _o(t) {
  return Object.assign(Object.assign(Object.assign({}, En), $g), t.pluginHooks.eventSourceRefiners);
}
function Fg(t, e) {
  let n = e.pluginHooks.eventSourceDefs;
  for (let a = n.length - 1; a >= 0; a -= 1) {
    let r = n[a].parseMeta(t);
    if (r)
      return { sourceDefId: a, meta: r };
  }
  return null;
}
function Bg(t, e, n, a, i) {
  switch (e.type) {
    case "RECEIVE_EVENTS":
      return zg(t, n[e.sourceId], e.fetchId, e.fetchRange, e.rawEvents, i);
    case "RESET_RAW_EVENTS":
      return Lg(t, n[e.sourceId], e.rawEvents, a.activeRange, i);
    case "ADD_EVENTS":
      return Hg(
        t,
        e.eventStore,
        // new ones
        a ? a.activeRange : null,
        i
      );
    case "RESET_EVENTS":
      return e.eventStore;
    case "MERGE_EVENTS":
      return La(t, e.eventStore);
    case "PREV":
    // TODO: how do we track all actions that affect dateProfile :(
    case "NEXT":
    case "CHANGE_DATE":
    case "CHANGE_VIEW_TYPE":
      return a ? yt(t, a.activeRange, i) : t;
    case "REMOVE_EVENTS":
      return Ig(t, e.eventStore);
    case "REMOVE_EVENT_SOURCE":
      return To(t, e.sourceId);
    case "REMOVE_ALL_EVENT_SOURCES":
      return Fn(t, (r) => !r.sourceId);
    case "REMOVE_ALL_EVENTS":
      return Ge();
    default:
      return t;
  }
}
function zg(t, e, n, a, i, r) {
  if (e && // not already removed
  n === e.latestFetchId) {
    let o = Kt(So(i, e, r), e, r);
    return a && (o = yt(o, a, r)), La(To(t, e.sourceId), o);
  }
  return t;
}
function Lg(t, e, n, a, i) {
  const { defIdMap: r, instanceIdMap: o } = jg(t);
  let s = Kt(So(n, e, i), e, i, !1, r, o);
  return yt(s, a, i);
}
function So(t, e, n) {
  let a = n.options.eventDataTransform, i = e ? e.eventDataTransform : null;
  return i && (t = Li(t, i)), a && (t = Li(t, a)), t;
}
function Li(t, e) {
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
function Hg(t, e, n, a) {
  return n && (e = yt(e, n, a)), La(t, e);
}
function Hi(t, e, n) {
  let { defs: a } = t, i = At(t.instances, (r) => a[r.defId].allDay ? r : Object.assign(Object.assign({}, r), { range: {
    start: n.createMarker(e.toDate(r.range.start, r.forcedStartTzo)),
    end: n.createMarker(e.toDate(r.range.end, r.forcedEndTzo))
  }, forcedStartTzo: n.canComputeOffset ? null : r.forcedStartTzo, forcedEndTzo: n.canComputeOffset ? null : r.forcedEndTzo }));
  return { defs: a, instances: i };
}
function To(t, e) {
  return Fn(t, (n) => n.sourceId !== e);
}
function Vg(t, e) {
  return {
    defs: t.defs,
    instances: gt(t.instances, (n) => !e[n.instanceId])
  };
}
function jg(t) {
  const { defs: e, instances: n } = t, a = {}, i = {};
  for (let r in e) {
    const o = e[r], { publicId: s } = o;
    s && (a[s] = r);
  }
  for (let r in n) {
    const o = n[r], s = e[o.defId], { publicId: l } = s;
    l && (i[l] = r);
  }
  return { defIdMap: a, instanceIdMap: i };
}
class Bn {
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
    Ug(this.handlers, e, n);
  }
  off(e, n) {
    Wg(this.handlers, e, n);
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
function Ug(t, e, n) {
  (t[e] || (t[e] = [])).push(n);
}
function Wg(t, e, n) {
  n ? t[e] && (t[e] = t[e].filter((a) => a !== n)) : delete t[e];
}
const Yg = {
  startTime: "09:00",
  endTime: "17:00",
  daysOfWeek: [1, 2, 3, 4, 5],
  display: "inverse-background",
  classNames: "fc-non-business",
  groupId: "_businessHours"
  // so multiple defs get grouped
};
function Gg(t, e) {
  return Kt(Kg(t), null, e);
}
function Kg(t) {
  let e;
  return t === !0 ? e = [{}] : Array.isArray(t) ? e = t.filter((n) => n.daysOfWeek) : typeof t == "object" && t ? e = [t] : e = [], e = e.map((n) => Object.assign(Object.assign({}, Yg), n)), e;
}
function ko(t, e, n) {
  n.emitter.trigger("select", Object.assign(Object.assign({}, Ha(t, n)), { jsEvent: e ? e.origEvent : null, view: n.viewApi || n.calendarApi.view }));
}
function qg(t, e) {
  e.emitter.trigger("unselect", {
    jsEvent: t ? t.origEvent : null,
    view: e.viewApi || e.calendarApi.view
  });
}
function Ha(t, e) {
  let n = {};
  for (let a of e.pluginHooks.dateSpanTransforms)
    Object.assign(n, a(t, e));
  return Object.assign(n, cy(t, e.dateEnv)), n;
}
function Vi(t, e, n) {
  let { dateEnv: a, options: i } = n, r = e;
  return t ? (r = _e(r), r = a.add(r, i.defaultAllDayEventDuration)) : r = a.add(r, i.defaultTimedEventDuration), r;
}
function Va(t, e, n, a) {
  let i = Nn(t.defs, e), r = Ge();
  for (let o in t.defs) {
    let s = t.defs[o];
    r.defs[o] = Qg(s, i[o], n, a);
  }
  for (let o in t.instances) {
    let s = t.instances[o], l = r.defs[s.defId];
    r.instances[o] = Zg(s, l, i[s.defId], n, a);
  }
  return r;
}
function Qg(t, e, n, a) {
  let i = n.standardProps || {};
  i.hasEnd == null && e.durationEditable && (n.startDelta || n.endDelta) && (i.hasEnd = !0);
  let r = Object.assign(Object.assign(Object.assign({}, t), i), { ui: Object.assign(Object.assign({}, t.ui), i.ui) });
  n.extendedProps && (r.extendedProps = Object.assign(Object.assign({}, r.extendedProps), n.extendedProps));
  for (let o of a.pluginHooks.eventDefMutationAppliers)
    o(r, n, a);
  return !r.hasEnd && a.options.forceEventDuration && (r.hasEnd = !0), r;
}
function Zg(t, e, n, a, i) {
  let { dateEnv: r } = i, o = a.standardProps && a.standardProps.allDay === !0, s = a.standardProps && a.standardProps.hasEnd === !1, l = Object.assign({}, t);
  return o && (l.range = po(l.range)), a.datesDelta && n.startEditable && (l.range = {
    start: r.add(l.range.start, a.datesDelta),
    end: r.add(l.range.end, a.datesDelta)
  }), a.startDelta && n.durationEditable && (l.range = {
    start: r.add(l.range.start, a.startDelta),
    end: l.range.end
  }), a.endDelta && n.durationEditable && (l.range = {
    start: l.range.start,
    end: r.add(l.range.end, a.endDelta)
  }), s && (l.range = {
    start: l.range.start,
    end: Vi(e.allDay, l.range.start, i)
  }), e.allDay && (l.range = {
    start: _e(l.range.start),
    end: _e(l.range.end)
  }), l.range.end < l.range.start && (l.range.end = Vi(e.allDay, l.range.start, i)), l;
}
class Et {
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
class Se {
  // instance will be null if expressing a recurring event that has no current instances,
  // OR if trying to validate an incoming external event that has no dates assigned
  constructor(e, n, a) {
    this._context = e, this._def = n, this._instance = a || null;
  }
  /*
  TODO: make event struct more responsible for this
  */
  setProp(e, n) {
    if (e in bo)
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
    else if (e in En) {
      let a = En[e](n);
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
      let r = this._instance.range, o = Mt(r.start, i, a, n.granularity);
      n.maintainDuration ? this.mutate({ datesDelta: o }) : this.mutate({ startDelta: o });
    }
  }
  setEnd(e, n = {}) {
    let { dateEnv: a } = this._context, i;
    if (!(e != null && (i = a.createMarker(e), !i)) && this._instance)
      if (i) {
        let r = Mt(this._instance.range.end, i, a, n.granularity);
        this.mutate({ endDelta: r });
      } else
        this.mutate({ standardProps: { hasEnd: !1 } });
  }
  setDates(e, n, a = {}) {
    let { dateEnv: i } = this._context, r = { allDay: a.allDay }, o = i.createMarker(e), s;
    if (o && !(n != null && (s = i.createMarker(n), !s)) && this._instance) {
      let l = this._instance.range;
      a.allDay === !0 && (l = po(l));
      let c = Mt(l.start, o, i, a.granularity);
      if (s) {
        let d = Mt(l.end, s, i, a.granularity);
        wp(c, d) ? this.mutate({ datesDelta: c, standardProps: r }) : this.mutate({ startDelta: c, endDelta: d, standardProps: r });
      } else
        r.hasEnd = !1, this.mutate({ datesDelta: c, standardProps: r });
    }
  }
  moveStart(e) {
    let n = ge(e);
    n && this.mutate({ startDelta: n });
  }
  moveEnd(e) {
    let n = ge(e);
    n && this.mutate({ endDelta: n });
  }
  moveDates(e) {
    let n = ge(e);
    n && this.mutate({ datesDelta: n });
  }
  setAllDay(e, n = {}) {
    let a = { allDay: e }, { maintainDuration: i } = n;
    i == null && (i = this._context.options.allDayMaintainDuration), this._def.allDay !== e && (a.hasEnd = i), this.mutate({ standardProps: a });
  }
  formatRange(e) {
    let { dateEnv: n } = this._context, a = this._instance, i = Re(e);
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
      let a = this._def, i = this._context, { eventStore: r } = i.getCurrentData(), o = za(r, n.instanceId);
      o = Va(o, {
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
      let l = new Se(i, a, n);
      this._def = o.defs[a.defId], this._instance = o.instances[n.instanceId], i.dispatch({
        type: "MERGE_EVENTS",
        eventStore: o
      }), i.emitter.trigger("eventChange", {
        oldEvent: l,
        event: this,
        relatedEvents: pt(o, i, n),
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
    let e = this._context, n = Eo(this);
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
    return e ? new Et(this._context, this._context.getCurrentData().eventSources[e]) : null;
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
function Eo(t) {
  let e = t._def, n = t._instance;
  return {
    defs: { [e.defId]: e },
    instances: n ? { [n.instanceId]: n } : {}
  };
}
function pt(t, e, n) {
  let { defs: a, instances: i } = t, r = [], o = n ? n.instanceId : "";
  for (let s in i) {
    let l = i[s], c = a[l.defId];
    l.instanceId !== o && r.push(new Se(e, c, l));
  }
  return r;
}
function ji(t, e, n, a) {
  let i = {}, r = {}, o = {}, s = [], l = [], c = Nn(t.defs, e);
  for (let d in t.defs) {
    let h = t.defs[d];
    c[h.defId].display === "inverse-background" && (h.groupId ? (i[h.groupId] = [], o[h.groupId] || (o[h.groupId] = h)) : r[d] = []);
  }
  for (let d in t.instances) {
    let h = t.instances[d], p = t.defs[h.defId], v = c[p.defId], y = h.range, g = !p.allDay && a ? go(y, a) : y, b = Pt(g, n);
    b && (v.display === "inverse-background" ? p.groupId ? i[p.groupId].push(b) : r[h.defId].push(b) : v.display !== "none" && (v.display === "background" ? s : l).push({
      def: p,
      ui: v,
      instance: h,
      range: b,
      isStart: g.start && g.start.valueOf() === b.start.valueOf(),
      isEnd: g.end && g.end.valueOf() === b.end.valueOf()
    }));
  }
  for (let d in i) {
    let h = i[d], p = Bi(h, n);
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
    let h = r[d], p = Bi(h, n);
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
  return { bg: s, fg: l };
}
function Ui(t, e) {
  t.fcSeg = e;
}
function $t(t) {
  return t.fcSeg || t.parentNode.fcSeg || // for the harness
  null;
}
function Nn(t, e) {
  return At(t, (n) => Mo(n, e));
}
function Mo(t, e) {
  let n = [];
  return e[""] && n.push(e[""]), e[t.defId] && n.push(e[t.defId]), n.push(t.ui), xg(n);
}
function Jg(t, e) {
  let n = t.map(Xg);
  return n.sort((a, i) => vp(a, i, e)), n.map((a) => a._seg);
}
function Xg(t) {
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
function ey(t, e) {
  let { pluginHooks: n } = e, a = n.isDraggableTransformers, { def: i, ui: r } = t.eventRange, o = r.startEditable;
  for (let s of a)
    o = s(o, i, r, e);
  return o;
}
function ty(t, e) {
  return t.isStart && t.eventRange.ui.durationEditable && e.options.eventResizableFromStart;
}
function ny(t, e) {
  return t.isEnd && t.eventRange.ui.durationEditable;
}
function No(t, e, n, a, i, r, o) {
  let { dateEnv: s, options: l } = n, { displayEventTime: c, displayEventEnd: d } = l, h = t.eventRange.def, p = t.eventRange.instance;
  c == null && (c = a !== !1), d == null && (d = i !== !1);
  let v = p.range.start, y = p.range.end, g = t.start || t.eventRange.range.start, b = t.end || t.eventRange.range.end, A = _e(v).valueOf() === _e(g).valueOf(), C = _e(lt(y, -1)).valueOf() === _e(lt(b, -1)).valueOf();
  return c && !h.allDay && (A || C) ? (g = A ? v : g, b = C ? y : b, d && h.hasEnd ? s.formatRange(g, b, e, {
    forcedStartTzo: p.forcedStartTzo,
    forcedEndTzo: p.forcedEndTzo
  }) : s.format(g, e, {
    forcedTzo: p.forcedStartTzo
    // nooooo, same
  })) : "";
}
function jt(t, e, n) {
  let a = t.eventRange.range;
  return {
    isPast: a.end <= e.start,
    isFuture: a.start >= e.end,
    isToday: e && ot(e, a.start)
  };
}
function ay(t) {
  let e = ["fc-event"];
  return t.isMirror && e.push("fc-event-mirror"), t.isDraggable && e.push("fc-event-draggable"), (t.isStartResizable || t.isEndResizable) && e.push("fc-event-resizable"), t.isDragging && e.push("fc-event-dragging"), t.isResizing && e.push("fc-event-resizing"), t.isSelected && e.push("fc-event-selected"), t.isStart && e.push("fc-event-start"), t.isEnd && e.push("fc-event-end"), t.isPast && e.push("fc-event-past"), t.isToday && e.push("fc-event-today"), t.isFuture && e.push("fc-event-future"), e;
}
function iy(t) {
  return t.instance ? t.instance.instanceId : `${t.def.defId}:${t.range.start.toISOString()}`;
}
function Do(t, e) {
  let { def: n, instance: a } = t.eventRange, { url: i } = n;
  if (i)
    return { href: i };
  let { emitter: r, options: o } = e, { eventInteractive: s } = o;
  return s == null && (s = n.interactive, s == null && (s = !!r.hasHandlers("eventClick"))), s ? so((l) => {
    r.trigger("eventClick", {
      el: l.target,
      event: new Se(e, n, a),
      jsEvent: l,
      view: e.viewApi
    });
  }) : {};
}
const ry = {
  start: x,
  end: x,
  allDay: Boolean
};
function oy(t, e, n) {
  let a = sy(t, e), { range: i } = a;
  if (!i.start)
    return null;
  if (!i.end) {
    if (n == null)
      return null;
    i.end = e.add(i.start, n);
  }
  return a;
}
function sy(t, e) {
  let { refined: n, extra: a } = Oa(t, ry), i = n.start ? e.createMarkerMeta(n.start) : null, r = n.end ? e.createMarkerMeta(n.end) : null, { allDay: o } = n;
  return o == null && (o = i && i.isTimeUnspecified && (!r || r.isTimeUnspecified)), Object.assign({ range: {
    start: i ? i.marker : null,
    end: r ? r.marker : null
  }, allDay: o }, a);
}
function ly(t, e) {
  return _g(t.range, e.range) && t.allDay === e.allDay && uy(t, e);
}
function uy(t, e) {
  for (let n in e)
    if (n !== "range" && n !== "allDay" && t[n] !== e[n])
      return !1;
  for (let n in t)
    if (!(n in e))
      return !1;
  return !0;
}
function cy(t, e) {
  return Object.assign(Object.assign({}, Oo(t.range, e, t.allDay)), { allDay: t.allDay });
}
function Io(t, e, n) {
  return Object.assign(Object.assign({}, Oo(t, e, n)), { timeZone: e.timeZone });
}
function Oo(t, e, n) {
  return {
    start: e.toDate(t.start),
    end: e.toDate(t.end),
    startStr: e.formatIso(t.start, { omitTime: n }),
    endStr: e.formatIso(t.end, { omitTime: n })
  };
}
function dy(t, e, n) {
  let a = Co({ editable: !1 }, n), i = ha(
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
    ui: Mo(i, e),
    instance: Fa(i.defId, t.range),
    range: t.range,
    isStart: !0,
    isEnd: !0
  };
}
function fy(t, e, n) {
  let a = !1, i = function(s) {
    a || (a = !0, e(s));
  }, r = function(s) {
    a || (a = !0, n(s));
  }, o = t(i, r);
  o && typeof o.then == "function" && o.then(i, r);
}
class Wi extends Error {
  constructor(e, n) {
    super(e), this.response = n;
  }
}
function my(t, e, n) {
  t = t.toUpperCase();
  const a = {
    method: t
  };
  return t === "GET" ? e += (e.indexOf("?") === -1 ? "?" : "&") + new URLSearchParams(n) : (a.body = new URLSearchParams(n), a.headers = {
    "Content-Type": "application/x-www-form-urlencoded"
  }), fetch(e, a).then((i) => {
    if (i.ok)
      return i.json().then((r) => [r, i], () => {
        throw new Wi("Failure parsing JSON", i);
      });
    throw new Wi("Request failed", i);
  });
}
let ta;
function Ro() {
  return ta == null && (ta = hy()), ta;
}
function hy() {
  if (typeof document > "u")
    return !0;
  let t = document.createElement("div");
  t.style.position = "absolute", t.style.top = "0px", t.style.left = "0px", t.innerHTML = "<table><tr><td><div></div></td></tr></table>", t.querySelector("table").style.height = "100px", t.querySelector("div").style.height = "100%", document.body.appendChild(t);
  let n = t.querySelector("div").offsetHeight > 0;
  return document.body.removeChild(t), n;
}
class vy extends Ee {
  constructor() {
    super(...arguments), this.state = {
      forPrint: !1
    }, this.handleBeforePrint = () => {
      kn(() => {
        this.setState({ forPrint: !0 });
      });
    }, this.handleAfterPrint = () => {
      kn(() => {
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
    return Ro() || o.push("fc-liquid-hack"), e.children(o, r, i, a);
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
class Bt {
  constructor(e) {
    this.component = e.component, this.isHitComboAllowed = e.isHitComboAllowed || null;
  }
  destroy() {
  }
}
function py(t, e) {
  return {
    component: t,
    el: e.el,
    useEventCenter: e.useEventCenter != null ? e.useEventCenter : !0,
    isHitComboAllowed: e.isHitComboAllowed || null
  };
}
function ja(t) {
  return {
    [t.component.uid]: t
  };
}
const pa = {};
class zn extends Ue {
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
    return i ? (r = n.dateEnv.startOf(a, e.unit), o = n.dateEnv.add(r, ge(1, e.unit)).valueOf() - a.valueOf()) : (r = a, o = 1e3 * 60), o = Math.min(1e3 * 60 * 60 * 24, o), {
      state: { nowDate: r, todayRange: gy(r) },
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
zn.contextType = Ct;
function gy(t) {
  let e = _e(t), n = xe(e, 1);
  return { start: e, end: n };
}
class yy {
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
    let n = this.getCurrentData(), a = ge(e);
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
    return a.format(a.createMarker(e), Re(n));
  }
  // `settings` is for formatter AND isEndExclusive
  formatRange(e, n, a) {
    let { dateEnv: i } = this.getCurrentData();
    return i.formatRange(i.createMarker(e), i.createMarker(n), Re(a), a);
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
    let i = this.getCurrentData(), r = oy(a, i.dateEnv, ge({ days: 1 }));
    r && (this.dispatch({ type: "SELECT_DATES", selection: r }), ko(r, null, i));
  }
  unselect(e) {
    let n = this.getCurrentData();
    n.dateSelection && (this.dispatch({ type: "UNSELECT_DATES" }), qg(e, n));
  }
  // Public Events API
  // -----------------------------------------------------------------------------------------------------------------
  addEvent(e, n) {
    if (e instanceof Se) {
      let o = e._def, s = e._instance;
      return this.getCurrentData().eventStore.defs[o.defId] || (this.dispatch({
        type: "ADD_EVENTS",
        eventStore: va({ def: o, instance: s })
        // TODO: better util for two args?
      }), this.triggerEventAdd(e)), e;
    }
    let a = this.getCurrentData(), i;
    if (n instanceof Et)
      i = n.internalEventSource;
    else if (typeof n == "boolean")
      n && ([i] = xa(a.eventSources));
    else if (n != null) {
      let o = this.getEventSourceById(n);
      if (!o)
        return console.warn(`Could not find an event source with ID "${n}"`), null;
      i = o.internalEventSource;
    }
    let r = Ao(e, i, a, !1);
    if (r) {
      let o = new Se(a, r.def, r.def.recurringDef ? null : r.instance);
      return this.dispatch({
        type: "ADD_EVENTS",
        eventStore: va(r)
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
          eventStore: Eo(e)
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
          return new Se(n, o, null);
        for (let s in i) {
          let l = i[s];
          if (l.defId === o.defId)
            return new Se(n, o, l);
        }
      }
    }
    return null;
  }
  getEvents() {
    let e = this.getCurrentData();
    return pt(e.eventStore, e);
  }
  removeAllEvents() {
    this.dispatch({ type: "REMOVE_ALL_EVENTS" });
  }
  // Public Event Sources API
  // -----------------------------------------------------------------------------------------------------------------
  getEventSources() {
    let e = this.getCurrentData(), n = e.eventSources, a = [];
    for (let i in n)
      a.push(new Et(e, n[i]));
    return a;
  }
  getEventSourceById(e) {
    let n = this.getCurrentData(), a = n.eventSources;
    e = String(e);
    for (let i in a)
      if (a[i].publicId === e)
        return new Et(n, a[i]);
    return null;
  }
  addEventSource(e) {
    let n = this.getCurrentData();
    if (e instanceof Et)
      return n.eventSources[e.internalEventSource.sourceId] || this.dispatch({
        type: "ADD_EVENT_SOURCES",
        sources: [e.internalEventSource]
      }), e;
    let a = wo(e, n);
    return a ? (this.dispatch({ type: "ADD_EVENT_SOURCES", sources: [a] }), new Et(n, a)) : null;
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
    let n = ge(e);
    n && this.trigger("_scrollRequest", { time: n });
  }
}
function by(t, e) {
  return t.left >= e.left && t.left < e.right && t.top >= e.top && t.top < e.bottom;
}
function xo(t, e) {
  let n = {
    left: Math.max(t.left, e.left),
    right: Math.min(t.right, e.right),
    top: Math.max(t.top, e.top),
    bottom: Math.min(t.bottom, e.bottom)
  };
  return n.left < n.right && n.top < n.bottom ? n : !1;
}
function Ay(t, e) {
  return {
    left: Math.min(Math.max(t.left, e.left), e.right),
    top: Math.min(Math.max(t.top, e.top), e.bottom)
  };
}
function Cy(t) {
  return {
    left: (t.left + t.right) / 2,
    top: (t.top + t.bottom) / 2
  };
}
function wy(t, e) {
  return {
    left: t.left - e.left,
    top: t.top - e.top
  };
}
function Po(t, e, n, a) {
  return {
    dow: t.getUTCDay(),
    isDisabled: !!(a && (!a.activeRange || !ot(a.activeRange, t))),
    isOther: !!(a && !ot(a.currentRange, t)),
    isToday: !!(e && ot(e, t)),
    isPast: !!(e && t < e.start),
    isFuture: !!(e && t >= e.end)
  };
}
function Ua(t, e) {
  let n = [
    "fc-day",
    `fc-day-${kp[t.dow]}`
  ];
  return t.isDisabled ? n.push("fc-day-disabled") : (t.isToday && (n.push("fc-day-today"), n.push(e.getClass("today"))), t.isPast && n.push("fc-day-past"), t.isFuture && n.push("fc-day-future"), t.isOther && n.push("fc-day-other")), n;
}
const _y = Re({ year: "numeric", month: "long", day: "numeric" }), Sy = Re({ week: "long" });
function ga(t, e, n = "day", a = !0) {
  const { dateEnv: i, options: r, calendarApi: o } = t;
  let s = i.format(e, n === "week" ? Sy : _y);
  if (r.navLinks) {
    let l = i.toDate(e);
    const c = (d) => {
      let h = n === "day" ? r.navLinkDayClick : n === "week" ? r.navLinkWeekClick : null;
      typeof h == "function" ? h.call(o, i.toDate(e), d) : (typeof h == "string" && (n = h), o.zoomTo(e, n));
    };
    return Object.assign({ title: Ht(r.navLinkHint, [s, l], s), "data-navlink": "" }, a ? oo(c) : { onClick: c });
  }
  return { "aria-label": s };
}
let na = null;
function Ty() {
  return na === null && (na = ky()), na;
}
function ky() {
  let t = document.createElement("div");
  Lt(t, {
    position: "absolute",
    top: -1e3,
    left: 0,
    border: 0,
    padding: 0,
    overflow: "scroll",
    direction: "rtl"
  }), t.innerHTML = "<div></div>", document.body.appendChild(t);
  let n = t.firstChild.getBoundingClientRect().left > t.getBoundingClientRect().left;
  return Ea(t), n;
}
let aa;
function Ey() {
  return aa || (aa = My()), aa;
}
function My() {
  let t = document.createElement("div");
  t.style.overflow = "scroll", t.style.position = "absolute", t.style.top = "-9999px", t.style.left = "-9999px", document.body.appendChild(t);
  let e = $o(t);
  return document.body.removeChild(t), e;
}
function $o(t) {
  return {
    x: t.offsetHeight - t.clientHeight,
    y: t.offsetWidth - t.clientWidth
  };
}
function Ny(t, e = !1) {
  let n = window.getComputedStyle(t), a = parseInt(n.borderLeftWidth, 10) || 0, i = parseInt(n.borderRightWidth, 10) || 0, r = parseInt(n.borderTopWidth, 10) || 0, o = parseInt(n.borderBottomWidth, 10) || 0, s = $o(t), l = s.y - a - i, c = s.x - r - o, d = {
    borderLeft: a,
    borderRight: i,
    borderTop: r,
    borderBottom: o,
    scrollbarBottom: c,
    scrollbarLeft: 0,
    scrollbarRight: 0
  };
  return Ty() && n.direction === "rtl" ? d.scrollbarLeft = l : d.scrollbarRight = l, e && (d.paddingLeft = parseInt(n.paddingLeft, 10) || 0, d.paddingRight = parseInt(n.paddingRight, 10) || 0, d.paddingTop = parseInt(n.paddingTop, 10) || 0, d.paddingBottom = parseInt(n.paddingBottom, 10) || 0), d;
}
function Dy(t, e = !1, n) {
  let a = Wa(t), i = Ny(t, e), r = {
    left: a.left + i.borderLeft + i.scrollbarLeft,
    right: a.right - i.borderRight - i.scrollbarRight,
    top: a.top + i.borderTop,
    bottom: a.bottom - i.borderBottom - i.scrollbarBottom
  };
  return e && (r.left += i.paddingLeft, r.right -= i.paddingRight, r.top += i.paddingTop, r.bottom -= i.paddingBottom), r;
}
function Wa(t) {
  let e = t.getBoundingClientRect();
  return {
    left: e.left + window.scrollX,
    top: e.top + window.scrollY,
    right: e.right + window.scrollX,
    bottom: e.bottom + window.scrollY
  };
}
function Iy(t) {
  let e = Fo(t), n = t.getBoundingClientRect();
  for (let a of e) {
    let i = xo(n, a.getBoundingClientRect());
    if (i)
      n = i;
    else
      return null;
  }
  return n;
}
function Fo(t) {
  let e = [];
  for (; t instanceof HTMLElement; ) {
    let n = window.getComputedStyle(t);
    if (n.position === "fixed")
      break;
    /(auto|scroll)/.test(n.overflow + n.overflowY + n.overflowX) && e.push(t), t = t.parentNode;
  }
  return e;
}
class Dn {
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
class Ya {
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
class Oy extends Ya {
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
class Ry extends Ya {
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
class _t extends Ee {
  constructor() {
    super(...arguments), this.uid = bt();
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
    !Be(e, ".fc-event-mirror");
  }
  isValidDateDownEl(e) {
    return !Be(e, ".fc-event:not(.fc-bg-event)") && !Be(e, ".fc-more-link") && // a "more.." link
    !Be(e, "a[data-navlink]") && // a clickable nav link
    !Be(e, ".fc-popover");
  }
}
class xy {
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
      const i = Object.assign(Object.assign({}, n), { span: Bo(n.span, e.touchingEntry.span) });
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
    n.lateral === -1 ? (ia(i, n.level, n.levelCoord), ia(a, n.level, [e])) : ia(a[n.level], n.lateral, e), this.stackCnts[Ut(e)] = n.stackCnt;
  }
  /*
  does not care about limits
  */
  findInsertion(e) {
    let { levelCoords: n, entriesByLevel: a, strictOrder: i, stackCnts: r } = this, o = n.length, s = 0, l = -1, c = -1, d = null, h = 0;
    for (let y = 0; y < o; y += 1) {
      const g = n[y];
      if (!i && g >= s + this.getEntryThickness(e))
        break;
      let b = a[y], A, C = Gi(b, e.span.start, Yi), E = C[0] + C[1];
      for (
        ;
        // loop through entries that horizontally intersect
        (A = b[E]) && // but not past the whole entry list
        A.span.start < e.span.end;
      ) {
        let M = g + this.getEntryThickness(A);
        M > s && (s = M, d = A, l = y, c = E), M === s && (h = Math.max(h, r[Ut(A)] + 1)), E += 1;
      }
    }
    let p = 0;
    if (d)
      for (p = l + 1; p < o && n[p] < s; )
        p += 1;
    let v = -1;
    return p < o && n[p] === s && (v = Gi(a[p], e.span.end, Yi)[0]), {
      touchingLevel: l,
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
      for (let l of o)
        i.push(Object.assign(Object.assign({}, l), { thickness: this.getEntryThickness(l), levelCoord: s }));
    }
    return i;
  }
}
function Yi(t) {
  return t.span.end;
}
function Ut(t) {
  return t.index + ":" + t.span.start;
}
function Bo(t, e) {
  let n = Math.max(t.start, e.start), a = Math.min(t.end, e.end);
  return n < a ? { start: n, end: a } : null;
}
function ia(t, e, n) {
  t.splice(e, 0, n);
}
function Gi(t, e, n) {
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
class Py {
  constructor(e, n) {
    this.emitter = new Bn();
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
const Ga = {};
function $y(t, e) {
  return !t || e > 10 ? Re({ weekday: "short" }) : e > 1 ? Re({ weekday: "short", month: "numeric", day: "numeric", omitCommas: !0 }) : Re({ weekday: "long" });
}
const zo = "fc-col-header-cell";
function Lo(t) {
  return t.text;
}
class Fy extends Ee {
  render() {
    let { dateEnv: e, options: n, theme: a, viewApi: i } = this.context, { props: r } = this, { date: o, dateProfile: s } = r, l = Po(o, r.todayRange, null, s), c = [zo].concat(Ua(l, a)), d = e.format(o, r.dayHeaderFormat), h = !l.isDisabled && r.colCnt > 1 ? ga(this.context, o) : {}, p = e.toDate(o);
    e.namedTimeZoneImpl && (p = lt(p, 36e5));
    let v = Object.assign(Object.assign(Object.assign({ date: p, view: i }, r.extraRenderProps), { text: d }), l);
    return $(et, { elTag: "th", elClasses: c, elAttrs: Object.assign({ role: "columnheader", colSpan: r.colSpan, "data-date": l.isDisabled ? void 0 : Da(o) }, r.extraDataAttrs), renderProps: v, generatorName: "dayHeaderContent", customGenerator: n.dayHeaderContent, defaultGenerator: Lo, classNameGenerator: n.dayHeaderClassNames, didMount: n.dayHeaderDidMount, willUnmount: n.dayHeaderWillUnmount }, (y) => $("div", { className: "fc-scrollgrid-sync-inner" }, !l.isDisabled && $(y, { elTag: "a", elAttrs: h, elClasses: [
      "fc-col-header-cell-cushion",
      r.isSticky && "fc-sticky"
    ] })));
  }
}
const By = Re({ weekday: "long" });
class zy extends Ee {
  render() {
    let { props: e } = this, { dateEnv: n, theme: a, viewApi: i, options: r } = this.context, o = xe(/* @__PURE__ */ new Date(2592e5), e.dow), s = {
      dow: e.dow,
      isDisabled: !1,
      isFuture: !1,
      isPast: !1,
      isToday: !1,
      isOther: !1
    }, l = n.format(o, e.dayHeaderFormat), c = Object.assign(Object.assign(Object.assign(Object.assign({
      // TODO: make this public?
      date: o
    }, s), { view: i }), e.extraRenderProps), { text: l });
    return $(et, { elTag: "th", elClasses: [
      zo,
      ...Ua(s, a),
      ...e.extraClassNames || []
    ], elAttrs: Object.assign({ role: "columnheader", colSpan: e.colSpan }, e.extraDataAttrs), renderProps: c, generatorName: "dayHeaderContent", customGenerator: r.dayHeaderContent, defaultGenerator: Lo, classNameGenerator: r.dayHeaderClassNames, didMount: r.dayHeaderDidMount, willUnmount: r.dayHeaderWillUnmount }, (d) => $(
      "div",
      { className: "fc-scrollgrid-sync-inner" },
      $(d, { elTag: "a", elClasses: [
        "fc-col-header-cell-cushion",
        e.isSticky && "fc-sticky"
      ], elAttrs: {
        "aria-label": n.format(o, By)
      } })
    ));
  }
}
class Ly extends Ee {
  constructor() {
    super(...arguments), this.createDayHeaderFormatter = pe(Hy);
  }
  render() {
    let { context: e } = this, { dates: n, dateProfile: a, datesRepDistinctDays: i, renderIntro: r } = this.props, o = this.createDayHeaderFormatter(e.options.dayHeaderFormat, i, n.length);
    return $(zn, { unit: "day" }, (s, l) => $(
      "tr",
      { role: "row" },
      r && r("day"),
      n.map((c) => i ? $(Fy, { key: c.toISOString(), date: c, dateProfile: a, todayRange: l, colCnt: n.length, dayHeaderFormat: o }) : $(zy, { key: c.getUTCDay(), dow: c.getUTCDay(), dayHeaderFormat: o }))
    ));
  }
}
function Hy(t, e, n) {
  return t || $y(e, n);
}
class Vy {
  constructor(e, n) {
    let a = e.start, { end: i } = e, r = [], o = [], s = -1;
    for (; a < i; )
      n.isHiddenDay(a) ? r.push(s + 0.5) : (s += 1, r.push(s), o.push(a)), a = xe(a, 1);
    this.dates = o, this.indices = r, this.cnt = o.length;
  }
  sliceRange(e) {
    let n = this.getDateDayIndex(e.start), a = this.getDateDayIndex(xe(e.end, -1)), i = Math.max(0, n), r = Math.min(this.cnt - 1, a);
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
    let { indices: n } = this, a = Math.floor(Ft(this.dates[0], e));
    return a < 0 ? n[0] - 1 : a >= n.length ? n[n.length - 1] + 1 : n[a];
  }
}
class jy {
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
        let l = Math.floor(s / n), c = Math.min((l + 1) * n, o + 1);
        i.push({
          row: l,
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
class Uy {
  constructor() {
    this.sliceBusinessHours = pe(this._sliceBusinessHours), this.sliceDateSelection = pe(this._sliceDateSpan), this.sliceEventStore = pe(this._sliceEventStore), this.sliceEventDrag = pe(this._sliceInteraction), this.sliceEventResize = pe(this._sliceInteraction), this.forceDayIfListItem = !1;
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
      { range: { start: e, end: lt(e, 1) }, allDay: !1 },
      // add 1 ms, protect against null range
      n,
      a,
      {},
      i,
      ...r
    );
  }
  _sliceBusinessHours(e, n, a, i, ...r) {
    return e ? this._sliceEventStore(yt(e, ln(n, !!a), i), {}, n, a, ...r).bg : [];
  }
  _sliceEventStore(e, n, a, i, ...r) {
    if (e) {
      let o = ji(e, n, ln(a, !!i), i);
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
    let o = ji(e.mutatedEvents, n, ln(a, !!i), i);
    return {
      segs: this.sliceEventRanges(o.fg, r),
      affectedInstances: e.affectedEvents.instances,
      isEvent: e.isEvent
    };
  }
  _sliceDateSpan(e, n, a, i, r, ...o) {
    if (!e)
      return [];
    let s = ln(n, !!a), l = Pt(e.range, s);
    if (l) {
      e = Object.assign(Object.assign({}, e), { range: l });
      let c = dy(e, i, r), d = this.sliceRange(e.range, ...o);
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
      end: xe(a.start, 1)
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
    start: lt(n.start, t.slotMinTime.milliseconds),
    end: lt(n.end, t.slotMaxTime.milliseconds - 864e5)
    // 864e5 = ms in a day
  };
}
function Ho(t, e, n) {
  let { instances: a } = t.mutatedEvents;
  for (let i in a)
    if (!$n(e.validRange, a[i].range))
      return !1;
  return Vo({ eventDrag: t }, n);
}
function Wy(t, e, n) {
  return $n(e.validRange, t.range) ? Vo({ dateSelection: t }, n) : !1;
}
function Vo(t, e) {
  let n = e.getCurrentData(), a = Object.assign({ businessHours: n.businessHours, dateSelection: "", eventStore: n.eventStore, eventUiBases: n.eventUiBases, eventSelection: "", eventDrag: null, eventResize: null }, t);
  return (e.pluginHooks.isPropsValid || Yy)(a, e);
}
function Yy(t, e, n = {}, a) {
  return !(t.eventDrag && !Gy(t, e, n, a) || t.dateSelection && !Ky(t, e, n, a));
}
function Gy(t, e, n, a) {
  let i = e.getCurrentData(), r = t.eventDrag, o = r.mutatedEvents, s = o.defs, l = o.instances, c = Nn(s, r.isEvent ? t.eventUiBases : { "": i.selectionConfig });
  a && (c = At(c, a));
  let d = Vg(t.eventStore, r.affectedEvents.instances), h = d.defs, p = d.instances, v = Nn(h, t.eventUiBases);
  for (let y in l) {
    let g = l[y], b = g.range, A = c[g.defId], C = s[g.defId];
    if (!jo(A.constraints, b, d, t.businessHours, e))
      return !1;
    let { eventOverlap: E } = e.options, M = typeof E == "function" ? E : null;
    for (let F in p) {
      let O = p[F];
      if ($a(b, O.range) && (v[O.defId].overlap === !1 && r.isEvent || A.overlap === !1 || M && !M(
        new Se(e, h[O.defId], O),
        // still event
        new Se(e, C, g)
      )))
        return !1;
    }
    let k = i.eventStore;
    for (let F of A.allows) {
      let O = Object.assign(Object.assign({}, n), { range: g.range, allDay: C.allDay }), j = k.defs[C.defId], te = k.instances[y], U;
      if (j ? U = new Se(e, j, te) : U = new Se(e, C), !F(Ha(O, e), U))
        return !1;
    }
  }
  return !0;
}
function Ky(t, e, n, a) {
  let i = t.eventStore, r = i.defs, o = i.instances, s = t.dateSelection, l = s.range, { selectionConfig: c } = e.getCurrentData();
  if (a && (c = a(c)), !jo(c.constraints, l, i, t.businessHours, e))
    return !1;
  let { selectOverlap: d } = e.options, h = typeof d == "function" ? d : null;
  for (let p in o) {
    let v = o[p];
    if ($a(l, v.range) && (c.overlap === !1 || h && !h(new Se(e, r[v.defId], v), null)))
      return !1;
  }
  for (let p of c.allows) {
    let v = Object.assign(Object.assign({}, n), s);
    if (!p(Ha(v, e), null))
      return !1;
  }
  return !0;
}
function jo(t, e, n, a, i) {
  for (let r of t)
    if (!Qy(qy(r, e, n, a, i), e))
      return !1;
  return !0;
}
function qy(t, e, n, a, i) {
  return t === "businessHours" ? ra(yt(a, e, i)) : typeof t == "string" ? ra(Fn(n, (r) => r.groupId === t)) : typeof t == "object" && t ? ra(yt(t, e, i)) : [];
}
function ra(t) {
  let { instances: e } = t, n = [];
  for (let a in e)
    n.push(e[a].range);
  return n;
}
function Qy(t, e) {
  for (let n of t)
    if ($n(n, e))
      return !0;
  return !1;
}
const un = /^(visible|hidden)$/;
class Zy extends Ee {
  constructor() {
    super(...arguments), this.handleEl = (e) => {
      this.el = e, Ze(this.props.elRef, e);
    };
  }
  render() {
    let { props: e } = this, { liquid: n, liquidIsAbsolute: a } = e, i = n && a, r = ["fc-scroller"];
    return n && (a ? r.push("fc-scroller-liquid-absolute") : r.push("fc-scroller-liquid")), $("div", { ref: this.handleEl, className: r.join(" "), style: {
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
class ht {
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
    return og(this.currentMap, e, n, a);
  }
  getAll() {
    return xa(this.currentMap);
  }
}
function Jy(t) {
  let e = rp(t, ".fc-scrollgrid-shrink"), n = 0;
  for (let a of e)
    n = Math.max(n, bp(a));
  return Math.ceil(n);
}
function Uo(t, e) {
  return t.liquid && e.liquid;
}
function Xy(t, e) {
  return e.maxHeight != null || // if its possible for the height to max out, we might need scrollbars
  Uo(t, e);
}
function eb(t, e, n, a) {
  let { expandRows: i } = n;
  return typeof e.content == "function" ? e.content(n) : $("table", {
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
  }, n.tableColGroupNode, $(a ? "thead" : "tbody", {
    role: "presentation"
  }, typeof e.rowContent == "function" ? e.rowContent(n) : e.rowContent));
}
function tb(t, e) {
  return st(t, e, Ke);
}
function nb(t, e) {
  let n = [];
  for (let a of t) {
    let i = a.span || 1;
    for (let r = 0; r < i; r += 1)
      n.push($("col", { style: {
        width: a.width === "shrink" ? ab(e) : a.width || "",
        minWidth: a.minWidth || ""
      } }));
  }
  return $("colgroup", {}, ...n);
}
function ab(t) {
  return t ?? 4;
}
function ib(t) {
  for (let e of t)
    if (e.width === "shrink")
      return !0;
  return !1;
}
function rb(t, e) {
  let n = [
    "fc-scrollgrid",
    e.theme.getClass("table")
  ];
  return t && n.push("fc-scrollgrid-liquid"), n;
}
function ob(t, e) {
  let n = [
    "fc-scrollgrid-section",
    `fc-scrollgrid-section-${t.type}`,
    t.className
    // used?
  ];
  return e && t.liquid && t.maxHeight == null && n.push("fc-scrollgrid-section-liquid"), t.isSticky && n.push("fc-scrollgrid-section-sticky"), n;
}
function sb(t) {
  return $("div", { className: "fc-scrollgrid-sticky-shim", style: {
    width: t.clientWidth,
    minWidth: t.tableMinWidth
  } });
}
function Ki(t) {
  let { stickyHeaderDates: e } = t;
  return (e == null || e === "auto") && (e = t.height === "auto" || t.viewHeight === "auto"), e;
}
function lb(t) {
  let { stickyFooterScrollbar: e } = t;
  return (e == null || e === "auto") && (e = t.height === "auto" || t.viewHeight === "auto"), e;
}
class Wo extends Ee {
  constructor() {
    super(...arguments), this.processCols = pe((e) => e, tb), this.renderMicroColGroup = pe(nb), this.scrollerRefs = new ht(), this.scrollerElRefs = new ht(this._handleScrollerEl.bind(this)), this.state = {
      shrinkWidth: null,
      forceYScrollbars: !1,
      scrollerClientWidths: {},
      scrollerClientHeights: {}
    }, this.handleSizing = () => {
      this.safeSetState(Object.assign({ shrinkWidth: this.computeShrinkWidth() }, this.computeScrollerDims()));
    };
  }
  render() {
    let { props: e, state: n, context: a } = this, i = e.sections || [], r = this.processCols(e.cols), o = this.renderMicroColGroup(r, n.shrinkWidth), s = rb(e.liquid, a);
    e.collapsibleWidth && s.push("fc-scrollgrid-collapsible");
    let l = i.length, c = 0, d, h = [], p = [], v = [];
    for (; c < l && (d = i[c]).type === "header"; )
      h.push(this.renderSection(d, o, !0)), c += 1;
    for (; c < l && (d = i[c]).type === "body"; )
      p.push(this.renderSection(d, o, !1)), c += 1;
    for (; c < l && (d = i[c]).type === "footer"; )
      v.push(this.renderSection(d, o, !0)), c += 1;
    let y = !Ro();
    const g = { role: "rowgroup" };
    return $("table", {
      role: "grid",
      className: s.join(" "),
      style: { height: e.height }
    }, !!(!y && h.length) && $("thead", g, ...h), !!(!y && p.length) && $("tbody", g, ...p), !!(!y && v.length) && $("tfoot", g, ...v), y && $("tbody", g, ...h, ...p, ...v));
  }
  renderSection(e, n, a) {
    return "outerContent" in e ? $(Ne, { key: e.key }, e.outerContent) : $("tr", { key: e.key, role: "presentation", className: ob(e, this.props.liquid).join(" ") }, this.renderChunkTd(e, n, e.chunk, a));
  }
  renderChunkTd(e, n, a, i) {
    if ("outerContent" in a)
      return a.outerContent;
    let { props: r } = this, { forceYScrollbars: o, scrollerClientWidths: s, scrollerClientHeights: l } = this.state, c = Xy(r, e), d = Uo(r, e), h = r.liquid ? o ? "scroll" : c ? "auto" : "hidden" : "visible", p = e.key, v = eb(e, a, {
      tableColGroupNode: n,
      tableMinWidth: "",
      clientWidth: !r.collapsibleWidth && s[p] !== void 0 ? s[p] : null,
      clientHeight: l[p] !== void 0 ? l[p] : null,
      expandRows: e.expandRows,
      syncRowHeights: !1,
      rowSyncHeights: [],
      reportRowHeightChange: () => {
      }
    }, i);
    return $(i ? "th" : "td", {
      ref: a.elRef,
      role: "presentation"
    }, $(
      "div",
      { className: `fc-scroller-harness${d ? " fc-scroller-harness-liquid" : ""}` },
      $(Zy, { ref: this.scrollerRefs.createRef(p), elRef: this.scrollerElRefs.createRef(p), overflowY: h, overflowX: r.liquid ? "hidden" : "visible", maxHeight: e.maxHeight, liquid: d, liquidIsAbsolute: !0 }, v)
    ));
  }
  _handleScrollerEl(e, n) {
    let a = ub(this.props.sections, n);
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
    return ib(this.props.cols) ? Jy(this.scrollerElRefs.getAll()) : 0;
  }
  computeScrollerDims() {
    let e = Ey(), { scrollerRefs: n, scrollerElRefs: a } = this, i = !1, r = {}, o = {};
    for (let s in n.currentMap) {
      let l = n.currentMap[s];
      if (l && l.needsYScrolling()) {
        i = !0;
        break;
      }
    }
    for (let s of this.props.sections) {
      let l = s.key, c = a.currentMap[l];
      if (c) {
        let d = c.parentNode;
        r[l] = Math.floor(d.getBoundingClientRect().width - (i ? e.y : 0)), o[l] = Math.floor(d.getBoundingClientRect().height);
      }
    }
    return { forceYScrollbars: i, scrollerClientWidths: r, scrollerClientHeights: o };
  }
}
Wo.addStateEquality({
  scrollerClientWidths: Ke,
  scrollerClientHeights: Ke
});
function ub(t, e) {
  for (let n of t)
    if (n.key === e)
      return n;
  return null;
}
class Ka extends Ee {
  constructor() {
    super(...arguments), this.buildPublicEvent = pe((e, n, a) => new Se(e, n, a)), this.handleEl = (e) => {
      this.el = e, Ze(this.props.elRef, e), e && Ui(e, this.props.seg);
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
      isDraggable: !e.disableDragging && ey(i, n),
      isStartResizable: !e.disableResizing && ty(i, n),
      isEndResizable: !e.disableResizing && ny(i),
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
    return $(et, { elRef: this.handleEl, elTag: e.elTag, elAttrs: e.elAttrs, elClasses: [
      ...ay(s),
      ...i.eventRange.ui.classNames,
      ...e.elClasses || []
    ], elStyle: e.elStyle, renderProps: s, generatorName: "eventContent", customGenerator: a.eventContent, defaultGenerator: e.defaultGenerator, classNameGenerator: a.eventClassNames, didMount: a.eventDidMount, willUnmount: a.eventWillUnmount }, e.children);
  }
  componentDidUpdate(e) {
    this.el && this.props.seg !== e.seg && Ui(this.el, this.props.seg);
  }
}
class Yo extends Ee {
  render() {
    let { props: e, context: n } = this, { options: a } = n, { seg: i } = e, { ui: r } = i.eventRange, o = a.eventTimeFormat || e.defaultTimeFormat, s = No(i, o, n, e.defaultDisplayEventTime, e.defaultDisplayEventEnd);
    return $(Ka, Object.assign({}, e, { elTag: "a", elStyle: {
      borderColor: r.borderColor,
      backgroundColor: r.backgroundColor
    }, elAttrs: Do(i, n), defaultGenerator: cb, timeText: s }), (l, c) => $(
      Ne,
      null,
      $(l, { elTag: "div", elClasses: ["fc-event-main"], elStyle: { color: c.textColor } }),
      !!c.isStartResizable && $("div", { className: "fc-event-resizer fc-event-resizer-start" }),
      !!c.isEndResizable && $("div", { className: "fc-event-resizer fc-event-resizer-end" })
    ));
  }
}
Yo.addPropsEquality({
  seg: Ke
});
function cb(t) {
  return $(
    "div",
    { className: "fc-event-main-frame" },
    t.timeText && $("div", { className: "fc-event-time" }, t.timeText),
    $(
      "div",
      { className: "fc-event-title-container" },
      $("div", { className: "fc-event-title fc-sticky" }, t.event.title || $(Ne, null, " "))
    )
  );
}
const db = Re({ day: "numeric" });
class Go extends Ee {
  constructor() {
    super(...arguments), this.refineRenderProps = vn(fb);
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
    return $(et, { elRef: e.elRef, elTag: e.elTag, elAttrs: Object.assign(Object.assign({}, e.elAttrs), i.isDisabled ? {} : { "data-date": Da(e.date) }), elClasses: [
      ...Ua(i, n.theme),
      ...e.elClasses || []
    ], elStyle: e.elStyle, renderProps: i, generatorName: "dayCellContent", customGenerator: a.dayCellContent, defaultGenerator: e.defaultGenerator, classNameGenerator: (
      // don't use custom classNames if disabled
      i.isDisabled ? void 0 : a.dayCellClassNames
    ), didMount: a.dayCellDidMount, willUnmount: a.dayCellWillUnmount }, e.children);
  }
}
function Ko(t) {
  return !!(t.dayCellContent || ma("dayCellContent", t));
}
function fb(t) {
  let { date: e, dateEnv: n, dateProfile: a, isMonthStart: i } = t, r = Po(e, t.todayRange, null, a), o = t.showDayNumber ? n.format(e, i ? t.monthStartFormat : db) : "";
  return Object.assign(Object.assign(Object.assign({ date: n.toDate(e), view: t.viewApi }, r), {
    isMonthStart: i,
    dayNumberText: o
  }), t.extraRenderProps);
}
class mb extends Ee {
  render() {
    let { props: e } = this, { seg: n } = e;
    return $(Ka, { elTag: "div", elClasses: ["fc-bg-event"], elStyle: { backgroundColor: n.eventRange.ui.backgroundColor }, defaultGenerator: hb, seg: n, timeText: "", isDragging: !1, isResizing: !1, isDateSelecting: !1, isSelected: !1, isPast: e.isPast, isFuture: e.isFuture, isToday: e.isToday, disableDragging: !0, disableResizing: !0 });
  }
}
function hb(t) {
  let { title: e } = t.event;
  return e && $("div", { className: "fc-event-title" }, t.event.title);
}
function vb(t) {
  return $("div", { className: `fc-${t}` });
}
const pb = (t) => $(Ct.Consumer, null, (e) => {
  let { dateEnv: n, options: a } = e, { date: i } = t, r = a.weekNumberFormat || t.defaultFormat, o = n.computeWeekNumber(i), s = n.format(i, r), l = { num: o, text: s, date: i };
  return $(
    et,
    { elRef: t.elRef, elTag: t.elTag, elAttrs: t.elAttrs, elClasses: t.elClasses, elStyle: t.elStyle, renderProps: l, generatorName: "weekNumberContent", customGenerator: a.weekNumberContent, defaultGenerator: gb, classNameGenerator: a.weekNumberClassNames, didMount: a.weekNumberDidMount, willUnmount: a.weekNumberWillUnmount },
    t.children
  );
});
function gb(t) {
  return t.text;
}
const oa = 10;
class yb extends Ee {
  constructor() {
    super(...arguments), this.state = {
      titleId: xn()
    }, this.handleRootEl = (e) => {
      this.rootEl = e, this.props.elRef && Ze(this.props.elRef, e);
    }, this.handleDocumentMouseDown = (e) => {
      const n = io(e);
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
    return Wv($(
      "div",
      Object.assign({}, a.extraAttrs, { id: a.id, className: r.join(" "), "aria-labelledby": i.titleId, ref: this.handleRootEl }),
      $(
        "div",
        { className: "fc-popover-header " + e.getClass("popoverHeader") },
        $("span", { className: "fc-popover-title", id: i.titleId }, a.title),
        $("span", { className: "fc-popover-close " + e.getIconClass("close"), title: n.closeHint, onClick: this.handleCloseClick })
      ),
      $("div", { className: "fc-popover-body " + e.getClass("popoverContent") }, a.children)
    ), a.parentEl);
  }
  componentDidMount() {
    document.addEventListener("mousedown", this.handleDocumentMouseDown), document.addEventListener("keydown", this.handleDocumentKeyDown), this.updateSize();
  }
  componentWillUnmount() {
    document.removeEventListener("mousedown", this.handleDocumentMouseDown), document.removeEventListener("keydown", this.handleDocumentKeyDown);
  }
  updateSize() {
    let { isRtl: e } = this.context, { alignmentEl: n, alignGridTop: a } = this.props, { rootEl: i } = this, r = Iy(n);
    if (r) {
      let o = i.getBoundingClientRect(), s = a ? Be(n, ".fc-scrollgrid").getBoundingClientRect().top : r.top, l = e ? r.right - o.width : r.left;
      s = Math.max(s, oa), l = Math.min(l, document.documentElement.clientWidth - oa - o.width), l = Math.max(l, oa);
      let c = i.offsetParent.getBoundingClientRect();
      Lt(i, {
        top: s - c.top,
        left: l - c.left
      });
    }
  }
}
class bb extends _t {
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
    return $(Go, { elRef: this.handleRootEl, date: i, dateProfile: o, todayRange: r }, (l, c, d) => $(
      yb,
      { elRef: d.ref, id: a.id, title: s, extraClassNames: ["fc-more-popover"].concat(d.className || []), extraAttrs: d, parentEl: a.parentEl, alignmentEl: a.alignmentEl, alignGridTop: a.alignGridTop, onClose: a.onClose },
      Ko(e) && $(l, { elTag: "div", elClasses: ["fc-more-popover-misc"] }),
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
class Ab extends Ee {
  constructor() {
    super(...arguments), this.state = {
      isPopoverOpen: !1,
      popoverId: xn()
    }, this.handleLinkEl = (e) => {
      this.linkEl = e, this.props.elRef && Ze(this.props.elRef, e);
    }, this.handleClick = (e) => {
      let { props: n, context: a } = this, { moreLinkClick: i } = a.options, r = qi(n).start;
      function o(s) {
        let { def: l, instance: c, range: d } = s.eventRange;
        return {
          event: new Se(a, l, c),
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
    return $(Ct.Consumer, null, (a) => {
      let { viewApi: i, options: r, calendarApi: o } = a, { moreLinkText: s } = r, { moreCnt: l } = e, c = qi(e), d = typeof s == "function" ? s.call(o, l) : `+${l} ${s}`, h = Ht(r.moreLinkHint, [l], d), p = {
        num: l,
        shortText: `+${l}`,
        text: d,
        view: i
      };
      return $(
        Ne,
        null,
        !!e.moreCnt && $(et, { elTag: e.elTag || "a", elRef: this.handleLinkEl, elClasses: [
          ...e.elClasses || [],
          "fc-more-link"
        ], elStyle: e.elStyle, elAttrs: Object.assign(Object.assign(Object.assign({}, e.elAttrs), oo(this.handleClick)), { title: h, "aria-expanded": n.isPopoverOpen, "aria-controls": n.isPopoverOpen ? n.popoverId : "" }), renderProps: p, generatorName: "moreLinkContent", customGenerator: r.moreLinkContent, defaultGenerator: e.defaultGenerator || Cb, classNameGenerator: r.moreLinkClassNames, didMount: r.moreLinkDidMount, willUnmount: r.moreLinkWillUnmount }, e.children),
        n.isPopoverOpen && $(bb, { id: n.popoverId, startDate: c.start, endDate: c.end, dateProfile: e.dateProfile, todayRange: e.todayRange, extraDateSpan: e.extraDateSpan, parentEl: this.parentEl, alignmentEl: e.alignmentElRef ? e.alignmentElRef.current : this.linkEl, alignGridTop: e.alignGridTop, forceTimed: e.forceTimed, onClose: this.handlePopoverClose }, e.popoverContent())
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
    this.linkEl && (this.parentEl = Be(this.linkEl, ".fc-view-harness"));
  }
}
function Cb(t) {
  return t.text;
}
function qi(t) {
  if (t.allDayDate)
    return {
      start: t.allDayDate,
      end: xe(t.allDayDate, 1)
    };
  let { hiddenSegs: e } = t;
  return {
    start: wb(e),
    end: Sb(e)
  };
}
function wb(t) {
  return t.reduce(_b).eventRange.range.start;
}
function _b(t, e) {
  return t.eventRange.range.start < e.eventRange.range.start ? t : e;
}
function Sb(t) {
  return t.reduce(Tb).eventRange.range.end;
}
function Tb(t, e) {
  return t.eventRange.range.end > e.eventRange.range.end ? t : e;
}
class kb {
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
class Eb extends kb {
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
const Mb = [], qo = {
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
}, Qo = Object.assign(Object.assign({}, qo), {
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
function Nb(t) {
  let e = t.length > 0 ? t[0].code : "en", n = Mb.concat(t), a = {
    en: Qo
  };
  for (let i of n)
    a[i.code] = i;
  return {
    map: a,
    defaultCode: e
  };
}
function Zo(t, e) {
  return typeof t == "object" && !Array.isArray(t) ? Jo(t.code, [t.code], t) : Db(t, e);
}
function Db(t, e) {
  let n = [].concat(t || []), a = Ib(n, e) || Qo;
  return Jo(t, n, a);
}
function Ib(t, e) {
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
function Jo(t, e, n) {
  let a = Ra([qo, n], ["buttonText"]);
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
function ut(t) {
  return {
    id: bt(),
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
function Ob(t, e) {
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
      const s = o.name, l = n[s];
      l === void 0 ? (n[s] = o.id, i(o.deps), a = xb(a, o)) : l !== o.id && console.warn(`Duplicate plugin '${s}'`);
    }
  }
  return t && i(t), i(e), a;
}
function Rb() {
  let t = [], e = [], n;
  return (a, i) => ((!n || !st(a, t) || !st(i, e)) && (n = Ob(a, i)), t = a, e = i, n);
}
function xb(t, e) {
  return {
    premiumReleaseDate: Pb(t.premiumReleaseDate, e.premiumReleaseDate),
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
function Pb(t, e) {
  return t === void 0 ? e : e === void 0 ? t : new Date(Math.max(t.valueOf(), e.valueOf()));
}
class ct extends Jt {
}
ct.prototype.classes = {
  root: "fc-theme-standard",
  tableCellShaded: "fc-cell-shaded",
  buttonGroup: "fc-button-group",
  button: "fc-button fc-button-primary",
  buttonActive: "fc-button-active"
};
ct.prototype.baseIconClass = "fc-icon";
ct.prototype.iconClasses = {
  close: "fc-icon-x",
  prev: "fc-icon-chevron-left",
  next: "fc-icon-chevron-right",
  prevYear: "fc-icon-chevrons-left",
  nextYear: "fc-icon-chevrons-right"
};
ct.prototype.rtlIconClasses = {
  prev: "fc-icon-chevron-right",
  next: "fc-icon-chevron-left",
  prevYear: "fc-icon-chevrons-right",
  nextYear: "fc-icon-chevrons-left"
};
ct.prototype.iconOverrideOption = "buttonIcons";
ct.prototype.iconOverrideCustomButtonOption = "icon";
ct.prototype.iconOverridePrefix = "fc-icon-";
function $b(t, e) {
  let n = {}, a;
  for (a in t)
    ya(a, n, t, e);
  for (a in e)
    ya(a, n, t, e);
  return n;
}
function ya(t, e, n, a) {
  if (e[t])
    return e[t];
  let i = Fb(t, e, n, a);
  return i && (e[t] = i), i;
}
function Fb(t, e, n, a) {
  let i = n[t], r = a[t], o = (d) => i && i[d] !== null ? i[d] : r && r[d] !== null ? r[d] : null, s = o("component"), l = o("superType"), c = null;
  if (l) {
    if (l === t)
      throw new Error("Can't have a custom view type that references itself");
    c = ya(l, e, n, a);
  }
  return !s && c && (s = c.component), s ? {
    type: t,
    component: s,
    defaults: Object.assign(Object.assign({}, c ? c.defaults : {}), i ? i.rawOptions : {}),
    overrides: Object.assign(Object.assign({}, c ? c.overrides : {}), r ? r.rawOptions : {})
  } : null;
}
function Qi(t) {
  return At(t, Bb);
}
function Bb(t) {
  let e = typeof t == "function" ? { component: t } : t, { component: n } = e;
  return e.content ? n = Zi(e) : n && !(n.prototype instanceof Ee) && (n = Zi(Object.assign(Object.assign({}, e), { content: n }))), {
    superType: e.type,
    component: n,
    rawOptions: e
    // includes type and component too :(
  };
}
function Zi(t) {
  return (e) => $(Ct.Consumer, null, (n) => $(et, { elTag: "div", elClasses: vo(n.viewSpec), renderProps: Object.assign(Object.assign({}, e), { nextDayThreshold: n.options.nextDayThreshold }), generatorName: void 0, customGenerator: t.content, classNameGenerator: t.classNames, didMount: t.didMount, willUnmount: t.willUnmount }));
}
function zb(t, e, n, a) {
  let i = Qi(t), r = Qi(e.views), o = $b(i, r);
  return At(o, (s) => Lb(s, r, e, n, a));
}
function Lb(t, e, n, a, i) {
  let r = t.overrides.duration || t.defaults.duration || a.duration || n.duration, o = null, s = "", l = "", c = {};
  if (r && (o = Hb(r), o)) {
    let p = fa(o);
    s = p.unit, p.value === 1 && (l = s, c = e[s] ? e[s].rawOptions : {});
  }
  let d = (p) => {
    let v = p.buttonText || {}, y = t.defaults.buttonTextKey;
    return y != null && v[y] != null ? v[y] : v[t.type] != null ? v[t.type] : v[l] != null ? v[l] : null;
  }, h = (p) => {
    let v = p.buttonHints || {}, y = t.defaults.buttonTextKey;
    return y != null && v[y] != null ? v[y] : v[t.type] != null ? v[t.type] : v[l] != null ? v[l] : null;
  };
  return {
    type: t.type,
    component: t.component,
    duration: o,
    durationUnit: s,
    singleUnit: l,
    optionDefaults: t.defaults,
    optionOverrides: Object.assign(Object.assign({}, c), t.overrides),
    buttonTextOverride: d(a) || d(n) || // constructor-specified buttonText lookup hash takes precedence
    t.overrides.buttonText,
    buttonTextDefault: d(i) || t.defaults.buttonText || d(Vt) || t.type,
    // not DRY
    buttonTitleOverride: h(a) || h(n) || t.overrides.buttonHint,
    buttonTitleDefault: h(i) || t.defaults.buttonHint || h(Vt)
    // will eventually fall back to buttonText
  };
}
let Ji = {};
function Hb(t) {
  let e = JSON.stringify(t), n = Ji[e];
  return n === void 0 && (n = ge(t), Ji[e] = n), n;
}
function Vb(t, e) {
  switch (e.type) {
    case "CHANGE_VIEW_TYPE":
      t = e.viewType;
  }
  return t;
}
function jb(t, e) {
  switch (e.type) {
    case "CHANGE_DATE":
      return e.dateMarker;
    default:
      return t;
  }
}
function Ub(t, e, n) {
  let a = t.initialDate;
  return a != null ? e.createMarker(a) : n.getDateMarker();
}
function Wb(t, e) {
  switch (e.type) {
    case "SET_OPTION":
      return Object.assign(Object.assign({}, t), { [e.optionName]: e.rawOptionValue });
    default:
      return t;
  }
}
function Yb(t, e, n, a) {
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
function Gb(t, e, n) {
  let a = e ? e.activeRange : null;
  return es({}, e0(t, n), a, n);
}
function Kb(t, e, n, a) {
  let i = n ? n.activeRange : null;
  switch (e.type) {
    case "ADD_EVENT_SOURCES":
      return es(t, e.sources, i, a);
    case "REMOVE_EVENT_SOURCE":
      return Qb(t, e.sourceId);
    case "PREV":
    // TODO: how do we track all actions that affect dateProfile :(
    case "NEXT":
    case "CHANGE_DATE":
    case "CHANGE_VIEW_TYPE":
      return n ? ts(t, i, a) : t;
    case "FETCH_EVENT_SOURCES":
      return qa(t, e.sourceIds ? (
        // why no type?
        uo(e.sourceIds)
      ) : ns(t, a), i, e.isRefetch || !1, a);
    case "RECEIVE_EVENTS":
    case "RECEIVE_EVENT_ERROR":
      return Xb(t, e.sourceId, e.fetchId, e.fetchRange);
    case "REMOVE_ALL_EVENT_SOURCES":
      return {};
    default:
      return t;
  }
}
function qb(t, e, n) {
  let a = e ? e.activeRange : null;
  return qa(t, ns(t, n), a, !0, n);
}
function Xo(t) {
  for (let e in t)
    if (t[e].isFetching)
      return !0;
  return !1;
}
function es(t, e, n, a) {
  let i = {};
  for (let r of e)
    i[r.sourceId] = r;
  return n && (i = ts(i, n, a)), Object.assign(Object.assign({}, t), i);
}
function Qb(t, e) {
  return gt(t, (n) => n.sourceId !== e);
}
function ts(t, e, n) {
  return qa(t, gt(t, (a) => Zb(a, e, n)), e, !1, n);
}
function Zb(t, e, n) {
  return as(t, n) ? !n.options.lazyFetching || !t.fetchRange || t.isFetching || // always cancel outdated in-progress fetches
  e.start < t.fetchRange.start || e.end > t.fetchRange.end : !t.latestFetchId;
}
function qa(t, e, n, a, i) {
  let r = {};
  for (let o in t) {
    let s = t[o];
    e[o] ? r[o] = Jb(s, n, a, i) : r[o] = s;
  }
  return r;
}
function Jb(t, e, n, a) {
  let { options: i, calendarApi: r } = a, o = a.pluginHooks.eventSourceDefs[t.sourceDefId], s = bt();
  return o.fetch({
    eventSource: t,
    range: e,
    isRefetch: n,
    context: a
  }, (l) => {
    let { rawEvents: c } = l;
    i.eventSourceSuccess && (c = i.eventSourceSuccess.call(r, c, l.response) || c), t.success && (c = t.success.call(r, c, l.response) || c), a.dispatch({
      type: "RECEIVE_EVENTS",
      sourceId: t.sourceId,
      fetchId: s,
      fetchRange: e,
      rawEvents: c
    });
  }, (l) => {
    let c = !1;
    i.eventSourceFailure && (i.eventSourceFailure.call(r, l), c = !0), t.failure && (t.failure(l), c = !0), c || console.warn(l.message, l), a.dispatch({
      type: "RECEIVE_EVENT_ERROR",
      sourceId: t.sourceId,
      fetchId: s,
      fetchRange: e,
      error: l
    });
  }), Object.assign(Object.assign({}, t), { isFetching: !0, latestFetchId: s });
}
function Xb(t, e, n, a) {
  let i = t[e];
  return i && // not already removed
  n === i.latestFetchId ? Object.assign(Object.assign({}, t), { [e]: Object.assign(Object.assign({}, i), { isFetching: !1, fetchRange: a }) }) : t;
}
function ns(t, e) {
  return gt(t, (n) => as(n, e));
}
function e0(t, e) {
  let n = _o(e), a = [].concat(t.eventSources || []), i = [];
  t.initialEvents && a.unshift(t.initialEvents), t.events && a.unshift(t.events);
  for (let r of a) {
    let o = wo(r, e, n);
    o && i.push(o);
  }
  return i;
}
function as(t, e) {
  return !e.pluginHooks.eventSourceDefs[t.sourceDefId].ignoreRange;
}
function t0(t, e) {
  switch (e.type) {
    case "UNSELECT_DATES":
      return null;
    case "SELECT_DATES":
      return e.selection;
    default:
      return t;
  }
}
function n0(t, e) {
  switch (e.type) {
    case "UNSELECT_EVENT":
      return "";
    case "SELECT_EVENT":
      return e.eventInstanceId;
    default:
      return t;
  }
}
function a0(t, e) {
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
function i0(t, e) {
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
function r0(t, e, n, a, i) {
  let r = t.headerToolbar ? Xi(t.headerToolbar, t, e, n, a, i) : null, o = t.footerToolbar ? Xi(t.footerToolbar, t, e, n, a, i) : null;
  return { header: r, footer: o };
}
function Xi(t, e, n, a, i, r) {
  let o = {}, s = [], l = !1;
  for (let c in t) {
    let d = t[c], h = o0(d, e, n, a, i, r);
    o[c] = h.widgets, s.push(...h.viewsWithButtons), l = l || h.hasTitle;
  }
  return { sectionWidgets: o, viewsWithButtons: s, hasTitle: l };
}
function o0(t, e, n, a, i, r) {
  let o = e.direction === "rtl", s = e.customButtons || {}, l = n.buttonText || {}, c = e.buttonText || {}, d = n.buttonHints || {}, h = e.buttonHints || {}, p = t ? t.split(" ") : [], v = [], y = !1;
  return { widgets: p.map((b) => b.split(",").map((A) => {
    if (A === "title")
      return y = !0, { buttonName: A };
    let C, E, M, k, F, O;
    if (C = s[A])
      M = (j) => {
        C.click && C.click.call(j.target, j, j.target);
      }, (k = a.getCustomButtonIconClass(C)) || (k = a.getIconClass(A, o)) || (F = C.text), O = C.hint || C.text;
    else if (E = i[A]) {
      v.push(A), M = () => {
        r.changeView(A);
      }, (F = E.buttonTextOverride) || (k = a.getIconClass(A, o)) || (F = E.buttonTextDefault);
      let j = E.buttonTextOverride || E.buttonTextDefault;
      O = Ht(
        E.buttonTitleOverride || E.buttonTitleDefault || e.viewHint,
        [j, A],
        // view-name = buttonName
        j
      );
    } else if (r[A])
      if (M = () => {
        r[A]();
      }, (F = l[A]) || (k = a.getIconClass(A, o)) || (F = c[A]), A === "prevYear" || A === "nextYear") {
        let j = A === "prevYear" ? "prev" : "next";
        O = Ht(d[j] || h[j], [
          c.year || "year",
          "year"
        ], c[A]);
      } else
        O = (j) => Ht(d[A] || h[A], [
          c[j] || j,
          j
        ], c[A]);
    return { buttonName: A, buttonClick: M, buttonIcon: k, buttonText: F, buttonHint: O };
  })), viewsWithButtons: v, hasTitle: y };
}
class s0 {
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
let l0 = {
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
const u0 = ut({
  name: "array-event-source",
  eventSourceDefs: [l0]
});
let c0 = {
  parseMeta(t) {
    return typeof t.events == "function" ? t.events : null;
  },
  fetch(t, e, n) {
    const { dateEnv: a } = t.context, i = t.eventSource.meta;
    fy(i.bind(null, Io(t.range, a)), (r) => e({ rawEvents: r }), n);
  }
};
const d0 = ut({
  name: "func-event-source",
  eventSourceDefs: [c0]
}), f0 = {
  method: String,
  extraParams: x,
  startParam: String,
  endParam: String,
  timeZoneParam: String
};
let m0 = {
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
    const { meta: a } = t.eventSource, i = v0(a, t.range, t.context);
    my(a.method, a.url, i).then(([r, o]) => {
      e({ rawEvents: r, response: o });
    }, n);
  }
};
const h0 = ut({
  name: "json-event-source",
  eventSourceRefiners: f0,
  eventSourceDefs: [m0]
});
function v0(t, e, n) {
  let { dateEnv: a, options: i } = n, r, o, s, l, c = {};
  return r = t.startParam, r == null && (r = i.startParam), o = t.endParam, o == null && (o = i.endParam), s = t.timeZoneParam, s == null && (s = i.timeZoneParam), typeof t.extraParams == "function" ? l = t.extraParams() : l = t.extraParams || {}, Object.assign(c, l), c[r] = a.formatIso(e.start), c[o] = a.formatIso(e.end), a.timeZone !== "local" && (c[s] = a.timeZone), c;
}
const p0 = {
  daysOfWeek: x,
  startTime: ge,
  endTime: ge,
  duration: ge,
  startRecur: x,
  endRecur: x
};
let g0 = {
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
      return t.duration && (a = t.duration), !a && t.startTime && t.endTime && (a = _p(t.endTime, t.startTime)), {
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
    return a ? b0(t.daysOfWeek, t.startTime, t.dateEnv, n, a) : [];
  }
};
const y0 = ut({
  name: "simple-recurring-event",
  recurringTypes: [g0],
  eventRefiners: p0
});
function b0(t, e, n, a, i) {
  let r = t ? uo(t) : null, o = _e(i.start), s = i.end, l = [];
  for (e && (e.milliseconds < 0 ? s = xe(s, 1) : e.milliseconds >= 1e3 * 60 * 60 * 24 && (o = xe(o, -1))); o < s; ) {
    let c;
    (!r || r[o.getUTCDay()]) && (e ? c = a.add(o, e) : c = o, l.push(a.createMarker(n.toDate(c)))), o = xe(o, 1);
  }
  return l;
}
const A0 = ut({
  name: "change-handler",
  optionChangeHandlers: {
    events(t, e) {
      er([t], e);
    },
    eventSources: er
  }
});
function er(t, e) {
  let n = xa(e.getCurrentData().eventSources);
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
function C0(t, e) {
  e.emitter.trigger("datesSet", Object.assign(Object.assign({}, Io(t.activeRange, e.dateEnv)), { view: e.viewApi }));
}
function w0(t, e) {
  let { emitter: n } = e;
  n.hasHandlers("eventsSet") && n.trigger("eventsSet", pt(t, e));
}
const _0 = [
  u0,
  d0,
  h0,
  y0,
  A0,
  ut({
    name: "misc",
    isLoadingFuncs: [
      (t) => Xo(t.eventSources)
    ],
    propSetHandlers: {
      dateProfile: C0,
      eventStore: w0
    }
  })
];
class S0 {
  constructor(e, n) {
    this.runTaskOption = e, this.drainedOption = n, this.queue = [], this.delayedRunner = new ka(this.drain.bind(this));
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
function T0(t, e, n) {
  let a;
  return /^(year|month)$/.test(t.currentRangeUnit) ? a = t.currentRange : a = t.activeRange, n.formatRange(a.start, a.end, Re(e.titleFormat || k0(t)), {
    isEndExclusive: t.isRangeAllDay,
    defaultSeparator: e.titleRangeSeparator
  });
}
function k0(t) {
  let { currentRangeUnit: e } = t;
  if (e === "year")
    return { year: "numeric" };
  if (e === "month")
    return { year: "numeric", month: "long" };
  let n = wn(t.currentRange.start, t.currentRange.end);
  return n !== null && n > 1 ? { year: "numeric", month: "short", day: "numeric" } : { year: "numeric", month: "long", day: "numeric" };
}
class tr {
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
class E0 {
  constructor(e) {
    this.computeCurrentViewData = pe(this._computeCurrentViewData), this.organizeRawLocales = pe(Nb), this.buildLocale = pe(Zo), this.buildPluginHooks = Rb(), this.buildDateEnv = pe(M0), this.buildTheme = pe(N0), this.parseToolbars = pe(r0), this.buildViewSpecs = pe(zb), this.buildDateProfileGenerator = vn(D0), this.buildViewApi = pe(I0), this.buildViewUiProps = vn(x0), this.buildEventUiBySource = pe(O0, Ke), this.buildEventUiBases = pe(R0), this.parseContextBusinessHours = vn(P0), this.buildTitle = pe(T0), this.nowManager = new tr(), this.emitter = new Bn(), this.actionRunner = new S0(this._handleAction.bind(this), this.updateData.bind(this)), this.currentCalendarOptionsInput = {}, this.currentCalendarOptionsRefined = {}, this.currentViewOptionsInput = {}, this.currentViewOptionsRefined = {}, this.currentCalendarOptionsRefiners = {}, this.optionsForRefining = [], this.optionsForHandling = [], this.getCurrentData = () => this.data, this.dispatch = (p) => {
      this.actionRunner.request(p);
    }, this.props = e, this.actionRunner.pause(), this.nowManager = new tr();
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
    }, s = Ub(a.calendarOptions, a.dateEnv, this.nowManager), l = r.dateProfileGenerator.build(s);
    ot(l.activeRange, s) || (s = l.currentRange.start);
    for (let p of a.pluginHooks.contextInit)
      p(o);
    let c = Gb(a.calendarOptions, l, o), d = {
      dynamicOptionOverrides: n,
      currentViewType: i,
      currentDate: s,
      dateProfile: l,
      businessHours: this.parseContextBusinessHours(o),
      eventSources: c,
      eventUiBases: {},
      eventStore: Ge(),
      renderableEventStore: Ge(),
      dateSelection: null,
      eventSelection: "",
      eventDrag: null,
      eventResize: null,
      selectionConfig: this.buildViewUiProps(o).selectionConfig
    }, h = Object.assign(Object.assign({}, o), d);
    for (let p of a.pluginHooks.reducers)
      Object.assign(d, p(null, null, h));
    sa(d, o) && this.emitter.trigger("loading", !0), this.state = d, this.updateData(), this.actionRunner.resume();
  }
  resetOptions(e, n) {
    let { props: a } = this;
    n === void 0 ? a.optionOverrides = e : (a.optionOverrides = Object.assign(Object.assign({}, a.optionOverrides || {}), e), this.optionsForRefining.push(...n)), (n === void 0 || n.length) && this.actionRunner.request({
      type: "NOTHING"
    });
  }
  _handleAction(e) {
    let { props: n, state: a, emitter: i } = this, r = Wb(a.dynamicOptionOverrides, e), o = this.computeOptionsData(n.optionOverrides, r, n.calendarApi), s = Vb(a.currentViewType, e), l = this.computeCurrentViewData(s, o, n.optionOverrides, r);
    n.calendarApi.currentDataManager = this, i.setThisContext(n.calendarApi), i.setOptions(l.options);
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
    this.data && this.data.dateProfileGenerator !== l.dateProfileGenerator && (h = l.dateProfileGenerator.build(d)), d = jb(d, e), h = Yb(h, e, d, l.dateProfileGenerator), (e.type === "PREV" || // TODO: move this logic into DateProfileGenerator
    e.type === "NEXT" || // "
    !ot(h.currentRange, d)) && (d = h.currentRange.start);
    let p = Kb(a.eventSources, e, h, c), v = Bg(a.eventStore, e, p, h, c), g = Xo(p) && !l.options.progressiveEventRendering && a.renderableEventStore || v, { eventUiSingleBase: b, selectionConfig: A } = this.buildViewUiProps(c), C = this.buildEventUiBySource(p), E = this.buildEventUiBases(g.defs, b, C), M = {
      dynamicOptionOverrides: r,
      currentViewType: s,
      currentDate: d,
      dateProfile: h,
      eventSources: p,
      eventStore: v,
      renderableEventStore: g,
      selectionConfig: A,
      eventUiBases: E,
      businessHours: this.parseContextBusinessHours(c),
      dateSelection: t0(a.dateSelection, e),
      eventSelection: n0(a.eventSelection, e),
      eventDrag: a0(a.eventDrag, e),
      eventResize: i0(a.eventResize, e)
    }, k = Object.assign(Object.assign({}, c), M);
    for (let j of o.pluginHooks.reducers)
      Object.assign(M, j(a, e, k));
    let F = sa(a, c), O = sa(M, c);
    !F && O ? i.trigger("loading", !0) : F && !O && i.trigger("loading", !1), this.state = M, n.onAction && n.onAction(e);
  }
  updateData() {
    let { props: e, state: n } = this, a = this.data, i = this.computeOptionsData(e.optionOverrides, n.dynamicOptionOverrides, e.calendarApi), r = this.computeCurrentViewData(n.currentViewType, i, e.optionOverrides, n.dynamicOptionOverrides), o = this.data = Object.assign(Object.assign(Object.assign({ nowManager: this.nowManager, viewTitle: this.buildTitle(n.dateProfile, r.options, i.dateEnv), calendarApi: e.calendarApi, dispatch: this.dispatch, emitter: this.emitter, getCurrentData: this.getCurrentData }, i), r), n), s = i.pluginHooks.optionChangeHandlers, l = a && a.calendarOptions, c = i.calendarOptions;
    if (l && l !== c) {
      l.timeZone !== c.timeZone && (n.eventSources = o.eventSources = qb(o.eventSources, n.dateProfile, o), n.eventStore = o.eventStore = Hi(o.eventStore, a.dateEnv, o.dateEnv), n.renderableEventStore = o.renderableEventStore = Hi(o.renderableEventStore, a.dateEnv, o.dateEnv));
      for (let d in s)
        (this.optionsForHandling.indexOf(d) !== -1 || l[d] !== c[d]) && s[d](c[d], o);
    }
    this.optionsForHandling = [], e.onData && e.onData(o);
  }
  computeOptionsData(e, n, a) {
    if (!this.optionsForRefining.length && e === this.stableOptionOverrides && n === this.stableDynamicOptionOverrides)
      return this.stableCalendarOptionsData;
    let { refinedOptions: i, pluginHooks: r, localeDefaults: o, availableLocaleData: s, extra: l } = this.processRawCalendarOptions(e, n);
    nr(l);
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
    let { locales: a, locale: i } = Xn([
      Vt,
      e,
      n
    ]), r = this.organizeRawLocales(a), o = r.map, s = this.buildLocale(i || r.defaultCode, o).options, l = this.buildPluginHooks(e.plugins || [], _0), c = this.currentCalendarOptionsRefiners = Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, xi), Pi), $i), l.listenerRefiners), l.optionRefiners), d = {}, h = Xn([
      Vt,
      s,
      e,
      n
    ]), p = {}, v = this.currentCalendarOptionsInput, y = this.currentCalendarOptionsRefined, g = !1;
    for (let b in h)
      this.optionsForRefining.indexOf(b) === -1 && (h[b] === v[b] || dt[b] && b in v && dt[b](v[b], h[b])) ? p[b] = y[b] : c[b] ? (p[b] = c[b](h[b]), g = !0) : d[b] = v[b];
    return g && (this.currentCalendarOptionsInput = h, this.currentCalendarOptionsRefined = p, this.stableOptionOverrides = e, this.stableDynamicOptionOverrides = n), this.optionsForHandling.push(...this.optionsForRefining), this.optionsForRefining = [], {
      rawOptions: this.currentCalendarOptionsInput,
      refinedOptions: this.currentCalendarOptionsRefined,
      pluginHooks: l,
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
    nr(s), this.nowManager.handleInput(n.dateEnv, o.now);
    let l = this.buildDateProfileGenerator({
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
    return { viewSpec: r, options: o, dateProfileGenerator: l, viewApi: c };
  }
  processRawViewOptions(e, n, a, i, r) {
    let o = Xn([
      Vt,
      e.optionDefaults,
      a,
      i,
      e.optionOverrides,
      r
    ]), s = Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, xi), Pi), $i), tg), n.listenerRefiners), n.optionRefiners), l = {}, c = this.currentViewOptionsInput, d = this.currentViewOptionsRefined, h = !1, p = {};
    for (let v in o)
      o[v] === c[v] || dt[v] && dt[v](o[v], c[v]) ? l[v] = d[v] : (o[v] === this.currentCalendarOptionsInput[v] || dt[v] && dt[v](o[v], this.currentCalendarOptionsInput[v]) ? v in this.currentCalendarOptionsRefined && (l[v] = this.currentCalendarOptionsRefined[v]) : s[v] ? l[v] = s[v](o[v]) : p[v] = o[v], h = !0);
    return h && (this.currentViewOptionsInput = o, this.currentViewOptionsRefined = l), {
      rawOptions: this.currentViewOptionsInput,
      refinedOptions: this.currentViewOptionsRefined,
      extra: p
    };
  }
}
function M0(t, e, n, a, i, r, o, s) {
  let l = Zo(e || o.defaultCode, o.map);
  return new fg({
    calendarSystem: "gregory",
    timeZone: t,
    namedTimeZoneImpl: r.namedTimeZonedImpl,
    locale: l,
    weekNumberCalculation: n,
    firstDay: a,
    weekText: i,
    cmdFormatter: r.cmdFormatter,
    defaultSeparator: s
  });
}
function N0(t, e) {
  let n = e.themeClasses[t.themeSystem] || ct;
  return new n(t);
}
function D0(t) {
  let e = t.dateProfileGeneratorClass || yo;
  return new e(t);
}
function I0(t, e, n) {
  return new s0(t, e, n);
}
function O0(t) {
  return At(t, (e) => e.ui);
}
function R0(t, e, n) {
  let a = { "": e };
  for (let i in t) {
    let r = t[i];
    r.sourceId && n[r.sourceId] && (a[i] = n[r.sourceId]);
  }
  return a;
}
function x0(t) {
  let { options: e } = t;
  return {
    eventUiSingleBase: Mn({
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
    selectionConfig: Mn({
      constraint: e.selectConstraint,
      overlap: typeof e.selectOverlap == "boolean" ? e.selectOverlap : void 0,
      allow: e.selectAllow
    }, t)
  };
}
function sa(t, e) {
  for (let n of e.pluginHooks.isLoadingFuncs)
    if (n(t))
      return !0;
  return !1;
}
function P0(t) {
  return Gg(t.options.businessHours, t);
}
function nr(t, e) {
  for (let n in t)
    console.warn(`Unknown option '${n}'`);
}
class $0 extends Ee {
  render() {
    let e = this.props.widgetGroups.map((n) => this.renderWidgetGroup(n));
    return $("div", { className: "fc-toolbar-chunk" }, ...e);
  }
  renderWidgetGroup(e) {
    let { props: n } = this, { theme: a } = this.context, i = [], r = !0;
    for (let o of e) {
      let { buttonName: s, buttonClick: l, buttonText: c, buttonIcon: d, buttonHint: h } = o;
      if (s === "title")
        r = !1, i.push($("h2", { className: "fc-toolbar-title", id: n.titleId }, n.title));
      else {
        let p = s === n.activeButton, v = !n.isTodayEnabled && s === "today" || !n.isPrevEnabled && s === "prev" || !n.isNextEnabled && s === "next", y = [`fc-${s}-button`, a.getClass("button")];
        p && y.push(a.getClass("buttonActive")), i.push($("button", { type: "button", title: typeof h == "function" ? h(n.navUnit) : h, disabled: v, "aria-pressed": p, className: y.join(" "), onClick: l }, c || (d ? $("span", { className: d, role: "img" }) : "")));
      }
    }
    if (i.length > 1) {
      let o = r && a.getClass("buttonGroup") || "";
      return $("div", { className: o }, ...i);
    }
    return i[0];
  }
}
class ar extends Ee {
  render() {
    let { model: e, extraClassName: n } = this.props, a = !1, i, r, o = e.sectionWidgets, s = o.center;
    return o.left ? (a = !0, i = o.left) : i = o.start, o.right ? (a = !0, r = o.right) : r = o.end, $(
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
    return $($0, { key: e, widgetGroups: n, title: a.title, navUnit: a.navUnit, activeButton: a.activeButton, isTodayEnabled: a.isTodayEnabled, isPrevEnabled: a.isPrevEnabled, isNextEnabled: a.isNextEnabled, titleId: a.titleId });
  }
}
class F0 extends Ee {
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
    return a ? n.availableWidth !== null ? r = n.availableWidth / a : o = `${1 / a * 100}%` : r = e.height || "", $("div", { "aria-labelledby": e.labeledById, ref: this.handleEl, className: i.join(" "), style: { height: r, paddingBottom: o } }, e.children);
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
class B0 extends Bt {
  constructor(e) {
    super(e), this.handleSegClick = (n, a) => {
      let { component: i } = this, { context: r } = i, o = $t(a);
      if (o && // might be the <div> surrounding the more link
      i.isValidSegDownEl(n.target)) {
        let s = Be(n.target, ".fc-event-forced-url"), l = s ? s.querySelector("a[href]").href : "";
        r.emitter.trigger("eventClick", {
          el: a,
          event: new Se(i.context, o.eventRange.def, o.eventRange.instance),
          jsEvent: n,
          view: r.viewApi
        }), l && !n.defaultPrevented && (window.location.href = l);
      }
    }, this.destroy = ro(
      e.el,
      "click",
      ".fc-event",
      // on both fg and bg events
      this.handleSegClick
    );
  }
}
class z0 extends Bt {
  constructor(e) {
    super(e), this.handleEventElRemove = (n) => {
      n === this.currentSegEl && this.handleSegLeave(null, this.currentSegEl);
    }, this.handleSegEnter = (n, a) => {
      $t(a) && (this.currentSegEl = a, this.triggerEvent("eventMouseEnter", n, a));
    }, this.handleSegLeave = (n, a) => {
      this.currentSegEl && (this.currentSegEl = null, this.triggerEvent("eventMouseLeave", n, a));
    }, this.removeHoverListeners = lp(
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
    let { component: i } = this, { context: r } = i, o = $t(a);
    (!n || i.isValidSegDownEl(n.target)) && r.emitter.trigger(e, {
      el: a,
      event: new Se(r, o.eventRange.def, o.eventRange.instance),
      jsEvent: n,
      view: r.viewApi
    });
  }
}
class L0 extends wt {
  constructor() {
    super(...arguments), this.buildViewContext = pe(vg), this.buildViewPropTransformers = pe(V0), this.buildToolbarProps = pe(H0), this.headerRef = Xe(), this.footerRef = Xe(), this.interactionsStore = {}, this.state = {
      viewLabelId: xn()
    }, this.registerInteractiveComponent = (e, n) => {
      let a = py(e, n), o = [
        B0,
        z0
      ].concat(this.props.pluginHooks.componentInteractions).map((s) => new s(a));
      this.interactionsStore[e.uid] = o, pa[e.uid] = a;
    }, this.unregisterInteractiveComponent = (e) => {
      let n = this.interactionsStore[e.uid];
      if (n) {
        for (let a of n)
          a.destroy();
        delete this.interactionsStore[e.uid];
      }
      delete pa[e.uid];
    }, this.resizeRunner = new ka(() => {
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
    let s = this.buildViewContext(e.viewSpec, e.viewApi, e.options, e.dateProfileGenerator, e.dateEnv, e.nowManager, e.theme, e.pluginHooks, e.dispatch, e.getCurrentData, e.emitter, e.calendarApi, this.registerInteractiveComponent, this.unregisterInteractiveComponent), l = n.header && n.header.hasTitle ? this.state.viewLabelId : void 0;
    return $(
      Ct.Provider,
      { value: s },
      $(zn, { unit: "day" }, (c) => {
        let d = this.buildToolbarProps(e.viewSpec, e.dateProfile, e.dateProfileGenerator, e.currentDate, c, e.viewTitle);
        return $(
          Ne,
          null,
          n.header && $(ar, Object.assign({ ref: this.headerRef, extraClassName: "fc-header-toolbar", model: n.header, titleId: l }, d)),
          $(
            F0,
            { liquid: i, height: r, aspectRatio: o, labeledById: l },
            this.renderView(e),
            this.buildAppendContent()
          ),
          n.footer && $(ar, Object.assign({ ref: this.footerRef, extraClassName: "fc-footer-toolbar", model: n.footer, titleId: "" }, d))
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
    return $(Ne, {}, ...n);
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
    return $(o, Object.assign({}, i));
  }
}
function H0(t, e, n, a, i, r) {
  let o = n.build(i, void 0, !1), s = n.buildPrev(e, a, !1), l = n.buildNext(e, a, !1);
  return {
    title: r,
    activeButton: t.type,
    navUnit: t.singleUnit,
    isTodayEnabled: o.isValid && !ot(e.currentRange, i),
    isPrevEnabled: s.isValid,
    isNextEnabled: l.isValid
  };
}
function V0(t) {
  return t.map((e) => new e());
}
class j0 extends yy {
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
        kn(() => {
          Yt($(vy, { options: a.calendarOptions, theme: a.theme, emitter: a.emitter }, (i, r, o, s) => (this.setClassNames(i), this.setHeight(r), $(
            ho.Provider,
            { value: this.customContentRenderId },
            $(L0, Object.assign({ isHeightAuto: o, forPrint: s }, a))
          ))), this.el);
        });
      } else this.isRendered && (this.isRendered = !1, Yt(null, this.el), this.setClassNames([]), this.setHeight(""));
    }, Xv(e), this.el = e, this.renderRunner = new ka(this.handleRenderRequest), new E0({
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
    kn(() => {
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
    if (!st(e, this.currentClassNames)) {
      let { classList: n } = this.el;
      for (let a of this.currentClassNames)
        n.remove(a);
      for (let a of e)
        n.add(a);
      this.currentClassNames = e;
    }
  }
  setHeight(e) {
    ao(this.el, "height", e);
  }
}
const U0 = {
  headerToolbar: !0,
  footerToolbar: !0,
  events: !0,
  eventSources: !0,
  resources: !0
}, W0 = oe({
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
        customRenderingMetaMap: K0(this.$slots),
        handleCustomRendering: this.handleCustomRendering
      };
    }
  },
  render() {
    const t = [];
    for (const e of this.customRenderingMap.values())
      t.push(vt(Y0, {
        key: e.id,
        customRendering: e
      }));
    return vt("div", {
      // when renderId is changed, Vue will trigger a real-DOM async rerender, calling beforeUpdate/updated
      attrs: { "data-fc-render-id": this.renderId }
    }, vt(B, t));
  },
  mounted() {
    const t = new Eb();
    this.handleCustomRendering = t.handle.bind(t);
    const e = this.buildOptions(this.options), n = new j0(this.$el, e);
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
  watch: G0()
}), Y0 = oe({
  props: {
    customRendering: Object
  },
  render() {
    const t = this.customRendering, e = typeof t.generatorMeta == "function" ? t.generatorMeta(t.renderProps) : (
      // vue-normalized slot function
      t.generatorMeta
    );
    return vt(ke, { to: t.containerEl }, e);
  }
});
function G0() {
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
  for (let e in U0)
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
function K0(t) {
  const e = {};
  for (const n in t)
    e[q0(n)] = t[n];
  return e;
}
function q0(t) {
  return t.split("-").map((e, n) => n ? Q0(e) : e).join("");
}
function Q0(t) {
  return t.charAt(0).toUpperCase() + t.slice(1);
}
class Z0 extends _t {
  constructor() {
    super(...arguments), this.headerElRef = Xe();
  }
  renderSimpleLayout(e, n) {
    let { props: a, context: i } = this, r = [], o = Ki(i.options);
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
    }), $(
      Fi,
      { elClasses: ["fc-daygrid"], viewSpec: i.viewSpec },
      $(Wo, { liquid: !a.isHeightAuto && !a.forPrint, collapsibleWidth: a.forPrint, cols: [], sections: r })
    );
  }
  renderHScrollLayout(e, n, a, i) {
    let r = this.context.pluginHooks.scrollGridImpl;
    if (!r)
      throw new Error("No ScrollGrid implementation");
    let { props: o, context: s } = this, l = !o.forPrint && Ki(s.options), c = !o.forPrint && lb(s.options), d = [];
    return e && d.push({
      type: "header",
      key: "header",
      isSticky: l,
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
        content: sb
      }]
    }), $(
      Fi,
      { elClasses: ["fc-daygrid"], viewSpec: s.viewSpec },
      $(r, { liquid: !o.isHeightAuto && !o.forPrint, forPrint: o.forPrint, collapsibleWidth: o.forPrint, colGroups: [{ cols: [{ span: a, minWidth: i }] }], sections: d })
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
function ir(t, e) {
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
const is = Re({
  hour: "numeric",
  minute: "2-digit",
  omitZeroMinute: !0,
  meridiem: "narrow"
});
function rs(t) {
  let { display: e } = t.eventRange.ui;
  return e === "list-item" || e === "auto" && !t.eventRange.def.allDay && t.firstCol === t.lastCol && // can't be multi-day
  t.isStart && // "
  t.isEnd;
}
class os extends Ee {
  render() {
    let { props: e } = this;
    return $(Yo, Object.assign({}, e, { elClasses: ["fc-daygrid-event", "fc-daygrid-block-event", "fc-h-event"], defaultTimeFormat: is, defaultDisplayEventEnd: e.defaultDisplayEventEnd, disableResizing: !e.seg.eventRange.def.allDay }));
  }
}
class ss extends Ee {
  render() {
    let { props: e, context: n } = this, { options: a } = n, { seg: i } = e, r = a.eventTimeFormat || is, o = No(i, r, n, !0, e.defaultDisplayEventEnd);
    return $(Ka, Object.assign({}, e, { elTag: "a", elClasses: ["fc-daygrid-event", "fc-daygrid-dot-event"], elAttrs: Do(e.seg, n), defaultGenerator: J0, timeText: o, isResizing: !1, isDateSelecting: !1 }));
  }
}
function J0(t) {
  return $(
    Ne,
    null,
    $("div", { className: "fc-daygrid-event-dot", style: { borderColor: t.borderColor || t.backgroundColor } }),
    t.timeText && $("div", { className: "fc-event-time" }, t.timeText),
    $("div", { className: "fc-event-title" }, t.event.title || $(Ne, null, " "))
  );
}
class X0 extends Ee {
  constructor() {
    super(...arguments), this.compileSegs = pe(eA);
  }
  render() {
    let { props: e } = this, { allSegs: n, invisibleSegs: a } = this.compileSegs(e.singlePlacements);
    return $(Ab, { elClasses: ["fc-daygrid-more-link"], dateProfile: e.dateProfile, todayRange: e.todayRange, allDayDate: e.allDayDate, moreCnt: e.moreCnt, allSegs: n, hiddenSegs: a, alignmentElRef: e.alignmentElRef, alignGridTop: e.alignGridTop, extraDateSpan: e.extraDateSpan, popoverContent: () => {
      let i = (e.eventDrag ? e.eventDrag.affectedInstances : null) || (e.eventResize ? e.eventResize.affectedInstances : null) || {};
      return $(Ne, null, n.map((r) => {
        let o = r.eventRange.instance.instanceId;
        return $("div", { className: "fc-daygrid-event-harness", key: o, style: {
          visibility: i[o] ? "hidden" : ""
        } }, rs(r) ? $(ss, Object.assign({ seg: r, isDragging: !1, isSelected: o === e.eventSelection, defaultDisplayEventEnd: !1 }, jt(r, e.todayRange))) : $(os, Object.assign({ seg: r, isDragging: !1, isResizing: !1, isDateSelecting: !1, isSelected: o === e.eventSelection, defaultDisplayEventEnd: !1 }, jt(r, e.todayRange))));
      }));
    } });
  }
}
function eA(t) {
  let e = [], n = [];
  for (let a of t)
    e.push(a.seg), a.isVisible || n.push(a.seg);
  return { allSegs: e, invisibleSegs: n };
}
const tA = Re({ week: "narrow" });
class nA extends _t {
  constructor() {
    super(...arguments), this.rootElRef = Xe(), this.state = {
      dayNumberId: xn()
    }, this.handleRootEl = (e) => {
      Ze(this.rootElRef, e), Ze(this.props.elRef, e);
    };
  }
  render() {
    let { context: e, props: n, state: a, rootElRef: i } = this, { options: r, dateEnv: o } = e, { date: s, dateProfile: l } = n;
    const c = n.showDayNumber && iA(s, l.currentRange, o);
    return $(Go, { elTag: "td", elRef: this.handleRootEl, elClasses: [
      "fc-daygrid-day",
      ...n.extraClassNames || []
    ], elAttrs: Object.assign(Object.assign(Object.assign({}, n.extraDataAttrs), n.showDayNumber ? { "aria-labelledby": a.dayNumberId } : {}), { role: "gridcell" }), defaultGenerator: aA, date: s, dateProfile: l, todayRange: n.todayRange, showDayNumber: n.showDayNumber, isMonthStart: c, extraRenderProps: n.extraRenderProps }, (d, h) => $(
      "div",
      { ref: n.innerElRef, className: "fc-daygrid-day-frame fc-scrollgrid-sync-inner", style: { minHeight: n.minHeight } },
      n.showWeekNumber && $(pb, { elTag: "a", elClasses: ["fc-daygrid-week-number"], elAttrs: ga(e, s, "week"), date: s, defaultFormat: tA }),
      !h.isDisabled && (n.showDayNumber || Ko(r) || n.forceDayTop) ? $(
        "div",
        { className: "fc-daygrid-day-top" },
        $(d, { elTag: "a", elClasses: [
          "fc-daygrid-day-number",
          c && "fc-daygrid-month-start"
        ], elAttrs: Object.assign(Object.assign({}, ga(e, s)), { id: a.dayNumberId }) })
      ) : n.showDayNumber ? (
        // for creating correct amount of space (see issue #7162)
        $(
          "div",
          { className: "fc-daygrid-day-top", style: { visibility: "hidden" } },
          $("a", { className: "fc-daygrid-day-number" }, " ")
        )
      ) : void 0,
      $(
        "div",
        { className: "fc-daygrid-day-events", ref: n.fgContentElRef },
        n.fgContent,
        $(
          "div",
          { className: "fc-daygrid-day-bottom", style: { marginTop: n.moreMarginTop } },
          $(X0, { allDayDate: s, singlePlacements: n.singlePlacements, moreCnt: n.moreCnt, alignmentElRef: i, alignGridTop: !n.showDayNumber, extraDateSpan: n.extraDateSpan, dateProfile: n.dateProfile, eventSelection: n.eventSelection, eventDrag: n.eventDrag, eventResize: n.eventResize, todayRange: n.todayRange })
        )
      ),
      $("div", { className: "fc-daygrid-day-bg" }, n.bgContent)
    ));
  }
}
function aA(t) {
  return t.dayNumberText || $(Ne, null, " ");
}
function iA(t, e, n) {
  const { start: a, end: i } = e, r = lt(i, -1), o = n.getYear(a), s = n.getMonth(a), l = n.getYear(r), c = n.getMonth(r);
  return !(o === l && s === c) && // first date in current view?
  (t.valueOf() === a.valueOf() || // a month-start that's within the current range?
  n.getDay(t) === 1 && t.valueOf() < i.valueOf());
}
function ls(t) {
  return t.eventRange.instance.instanceId + ":" + t.firstCol;
}
function us(t) {
  return ls(t) + ":" + t.lastCol;
}
function rA(t, e, n, a, i, r, o) {
  let s = new lA((A) => {
    let C = t[A.index].eventRange.instance.instanceId + ":" + A.span.start + ":" + (A.span.end - 1);
    return i[C] || 1;
  });
  s.allowReslicing = !0, s.strictOrder = a, e === !0 || n === !0 ? (s.maxCoord = r, s.hiddenConsumes = !0) : typeof e == "number" ? s.maxStackCnt = e : typeof n == "number" && (s.maxStackCnt = n, s.hiddenConsumes = !0);
  let l = [], c = [];
  for (let A = 0; A < t.length; A += 1) {
    let C = t[A], E = us(C);
    i[E] != null ? l.push({
      index: A,
      span: {
        start: C.firstCol,
        end: C.lastCol + 1
      }
    }) : c.push(C);
  }
  let d = s.addSegs(l), h = s.toRects(), { singleColPlacements: p, multiColPlacements: v, leftoverMargins: y } = oA(h, t, o), g = [], b = [];
  for (let A of c) {
    v[A.firstCol].push({
      seg: A,
      isVisible: !1,
      isAbsolute: !0,
      absoluteTop: 0,
      marginTop: 0
    });
    for (let C = A.firstCol; C <= A.lastCol; C += 1)
      p[C].push({
        seg: It(A, C, C + 1, o),
        isVisible: !1,
        isAbsolute: !1,
        absoluteTop: 0,
        marginTop: 0
      });
  }
  for (let A = 0; A < o.length; A += 1)
    g.push(0);
  for (let A of d) {
    let C = t[A.index], E = A.span;
    v[E.start].push({
      seg: It(C, E.start, E.end, o),
      isVisible: !1,
      isAbsolute: !0,
      absoluteTop: 0,
      marginTop: 0
    });
    for (let M = E.start; M < E.end; M += 1)
      g[M] += 1, p[M].push({
        seg: It(C, M, M + 1, o),
        isVisible: !1,
        isAbsolute: !1,
        absoluteTop: 0,
        marginTop: 0
      });
  }
  for (let A = 0; A < o.length; A += 1)
    b.push(y[A]);
  return { singleColPlacements: p, multiColPlacements: v, moreCnts: g, moreMarginTops: b };
}
function oA(t, e, n) {
  let a = sA(t, n.length), i = [], r = [], o = [];
  for (let s = 0; s < n.length; s += 1) {
    let l = a[s], c = [], d = 0, h = 0;
    for (let v of l) {
      let y = e[v.index];
      c.push({
        seg: It(y, s, s + 1, n),
        isVisible: !0,
        isAbsolute: !1,
        absoluteTop: v.levelCoord,
        marginTop: v.levelCoord - d
      }), d = v.levelCoord + v.thickness;
    }
    let p = [];
    d = 0, h = 0;
    for (let v of l) {
      let y = e[v.index], g = v.span.end - v.span.start > 1, b = v.span.start === s;
      h += v.levelCoord - d, d = v.levelCoord + v.thickness, g ? (h += v.thickness, b && p.push({
        seg: It(y, v.span.start, v.span.end, n),
        isVisible: !0,
        isAbsolute: !0,
        absoluteTop: v.levelCoord,
        marginTop: 0
      })) : b && (p.push({
        seg: It(y, v.span.start, v.span.end, n),
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
function sA(t, e) {
  let n = [];
  for (let a = 0; a < e; a += 1)
    n.push([]);
  for (let a of t)
    for (let i = a.span.start; i < a.span.end; i += 1)
      n[i].push(a);
  return n;
}
function It(t, e, n, a) {
  if (t.firstCol === e && t.lastCol === n - 1)
    return t;
  let i = t.eventRange, r = i.range, o = Pt(r, {
    start: a[e].date,
    end: xe(a[n - 1].date, 1)
  });
  return Object.assign(Object.assign({}, t), { firstCol: e, lastCol: n - 1, eventRange: {
    def: i.def,
    ui: Object.assign(Object.assign({}, i.ui), { durationEditable: !1 }),
    instance: i.instance,
    range: o
  }, isStart: t.isStart && o.start.valueOf() === r.start.valueOf(), isEnd: t.isEnd && o.end.valueOf() === r.end.valueOf() });
}
class lA extends xy {
  constructor() {
    super(...arguments), this.hiddenConsumes = !1, this.forceHidden = {};
  }
  addSegs(e) {
    const n = super.addSegs(e), { entriesByLevel: a } = this, i = (r) => !this.forceHidden[Ut(r)];
    for (let r = 0; r < a.length; r += 1)
      a[r] = a[r].filter(i);
    return n;
  }
  handleInvalidInsertion(e, n, a) {
    const { entriesByLevel: i, forceHidden: r } = this, { touchingEntry: o, touchingLevel: s, touchingLateral: l } = e;
    if (this.hiddenConsumes && o) {
      const c = Ut(o);
      if (!r[c])
        if (this.allowReslicing) {
          const d = Object.assign(Object.assign({}, o), { span: Bo(o.span, n.span) }), h = Ut(d);
          r[h] = !0, i[s][l] = d, a.push(d), this.splitEntry(o, n, a);
        } else
          r[c] = !0, a.push(o);
    }
    super.handleInvalidInsertion(e, n, a);
  }
}
class cs extends _t {
  constructor() {
    super(...arguments), this.cellElRefs = new ht(), this.frameElRefs = new ht(), this.fgElRefs = new ht(), this.segHarnessRefs = new ht(), this.rootElRef = Xe(), this.state = {
      framePositions: null,
      maxContentHeight: null,
      segHeights: {}
    }, this.handleResize = (e) => {
      e && this.updateSizing(!0);
    };
  }
  render() {
    let { props: e, state: n, context: a } = this, { options: i } = a, r = e.cells.length, o = cn(e.businessHourSegs, r), s = cn(e.bgEventSegs, r), l = cn(this.getHighlightSegs(), r), c = cn(this.getMirrorSegs(), r), { singleColPlacements: d, multiColPlacements: h, moreCnts: p, moreMarginTops: v } = rA(Jg(e.fgEventSegs, i.eventOrder), e.dayMaxEvents, e.dayMaxEventRows, i.eventOrderStrict, n.segHeights, n.maxContentHeight, e.cells), y = (
      // TODO: messy way to compute this
      e.eventDrag && e.eventDrag.affectedInstances || e.eventResize && e.eventResize.affectedInstances || {}
    );
    return $(
      "tr",
      { ref: this.rootElRef, role: "row" },
      e.renderIntro && e.renderIntro(),
      e.cells.map((g, b) => {
        let A = this.renderFgSegs(b, e.forPrint ? d[b] : h[b], e.todayRange, y), C = this.renderFgSegs(b, uA(c[b], h), e.todayRange, {}, !!e.eventDrag, !!e.eventResize, !1);
        return $(nA, { key: g.key, elRef: this.cellElRefs.createRef(g.key), innerElRef: this.frameElRefs.createRef(g.key), dateProfile: e.dateProfile, date: g.date, showDayNumber: e.showDayNumbers, showWeekNumber: e.showWeekNumbers && b === 0, forceDayTop: e.showWeekNumbers, todayRange: e.todayRange, eventSelection: e.eventSelection, eventDrag: e.eventDrag, eventResize: e.eventResize, extraRenderProps: g.extraRenderProps, extraDataAttrs: g.extraDataAttrs, extraClassNames: g.extraClassNames, extraDateSpan: g.extraDateSpan, moreCnt: p[b], moreMarginTop: v[b], singlePlacements: d[b], fgContentElRef: this.fgElRefs.createRef(g.key), fgContent: (
          // Fragment scopes the keys
          $(
            Ne,
            null,
            $(Ne, null, A),
            $(Ne, null, C)
          )
        ), bgContent: (
          // Fragment scopes the keys
          $(
            Ne,
            null,
            this.renderFillSegs(l[b], "highlight"),
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
    this.updateSizing(!Ke(e, a));
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
    let { context: l } = this, { eventSelection: c } = this.props, { framePositions: d } = this.state, h = this.props.cells.length === 1, p = r || o || s, v = [];
    if (d)
      for (let y of n) {
        let { seg: g } = y, { instanceId: b } = g.eventRange.instance, A = y.isVisible && !i[b], C = y.isAbsolute, E = "", M = "";
        C && (l.isRtl ? (M = 0, E = d.lefts[g.lastCol] - d.lefts[g.firstCol]) : (E = 0, M = d.rights[g.firstCol] - d.rights[g.lastCol])), v.push($("div", { className: "fc-daygrid-event-harness" + (C ? " fc-daygrid-event-harness-abs" : ""), key: ls(g), ref: p ? null : this.segHarnessRefs.createRef(us(g)), style: {
          visibility: A ? "" : "hidden",
          marginTop: C ? "" : y.marginTop,
          top: C ? y.absoluteTop : "",
          left: E,
          right: M
        } }, rs(g) ? $(ss, Object.assign({ seg: g, isDragging: r, isSelected: b === c, defaultDisplayEventEnd: h }, jt(g, a))) : $(os, Object.assign({ seg: g, isDragging: r, isResizing: o, isDateSelecting: s, isSelected: b === c, defaultDisplayEventEnd: h }, jt(g, a)))));
      }
    return v;
  }
  renderFillSegs(e, n) {
    let { isRtl: a } = this.context, { todayRange: i } = this.props, { framePositions: r } = this.state, o = [];
    if (r)
      for (let s of e) {
        let l = a ? {
          right: 0,
          left: r.lefts[s.lastCol] - r.lefts[s.firstCol]
        } : {
          left: 0,
          right: r.rights[s.firstCol] - r.rights[s.lastCol]
        };
        o.push($("div", { key: iy(s.eventRange), className: "fc-daygrid-bg-harness", style: l }, n === "bg-event" ? $(mb, Object.assign({ seg: s }, jt(s, i))) : vb(n)));
      }
    return $(Ne, {}, ...o);
  }
  updateSizing(e) {
    let { props: n, state: a, frameElRefs: i } = this;
    if (!n.forPrint && n.clientWidth !== null) {
      if (e) {
        let l = n.cells.map((c) => i.currentMap[c.key]);
        if (l.length) {
          let c = this.rootElRef.current, d = new Dn(
            c,
            l,
            !0,
            // isHorizontal
            !1
          );
          (!a.framePositions || !a.framePositions.similarTo(d)) && this.setState({
            framePositions: new Dn(
              c,
              l,
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
cs.addStateEquality({
  segHeights: Ke
});
function uA(t, e) {
  if (!t.length)
    return [];
  let n = cA(e);
  return t.map((a) => ({
    seg: a,
    isVisible: !0,
    isAbsolute: !0,
    absoluteTop: n[a.eventRange.instance.instanceId],
    marginTop: 0
  }));
}
function cA(t) {
  let e = {};
  for (let n of t)
    for (let a of n)
      e[a.seg.eventRange.instance.instanceId] = a.absoluteTop;
  return e;
}
class dA extends _t {
  constructor() {
    super(...arguments), this.splitBusinessHourSegs = pe(gn), this.splitBgEventSegs = pe(fA), this.splitFgEventSegs = pe(gn), this.splitDateSelectionSegs = pe(gn), this.splitEventDrag = pe(ir), this.splitEventResize = pe(ir), this.rowRefs = new ht();
  }
  render() {
    let { props: e, context: n } = this, a = e.cells.length, i = this.splitBusinessHourSegs(e.businessHourSegs, a), r = this.splitBgEventSegs(e.bgEventSegs, a), o = this.splitFgEventSegs(e.fgEventSegs, a), s = this.splitDateSelectionSegs(e.dateSelectionSegs, a), l = this.splitEventDrag(e.eventDrag, a), c = this.splitEventResize(e.eventResize, a), d = a >= 7 && e.clientWidth ? e.clientWidth / n.options.aspectRatio / 6 : null;
    return $(zn, { unit: "day" }, (h, p) => $(Ne, null, e.cells.map((v, y) => $(cs, {
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
      eventDrag: l[y],
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
    this.rowPositions = new Dn(
      this.rootEl,
      this.rowRefs.collect().map((e) => e.getCellEls()[0]),
      // first cell el in each row. TODO: not optimal
      !1,
      !0
    ), this.colPositions = new Dn(
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
    let a = this.props.cells[e][n].date, i = xe(a, 1);
    return { start: a, end: i };
  }
}
function fA(t, e) {
  return gn(t.filter(mA), e);
}
function mA(t) {
  return t.eventRange.def.allDay;
}
class hA extends _t {
  constructor() {
    super(...arguments), this.elRef = Xe(), this.needsScrollReset = !1;
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
    return $(
      "div",
      { ref: this.elRef, className: o.join(" "), style: {
        // these props are important to give this wrapper correct dimensions for interactions
        // TODO: if we set it here, can we avoid giving to inner tables?
        width: e.clientWidth,
        minWidth: e.tableMinWidth
      } },
      $(
        "table",
        { role: "presentation", className: "fc-scrollgrid-sync-table", style: {
          width: e.clientWidth,
          minWidth: e.tableMinWidth,
          height: i ? e.clientHeight : ""
        } },
        e.colGroupNode,
        $(
          "tbody",
          { role: "presentation" },
          $(dA, { dateProfile: e.dateProfile, cells: e.cells, renderRowIntro: e.renderRowIntro, showWeekNumbers: e.showWeekNumbers, clientWidth: e.clientWidth, clientHeight: e.clientHeight, businessHourSegs: e.businessHourSegs, bgEventSegs: e.bgEventSegs, fgEventSegs: e.fgEventSegs, dateSelectionSegs: e.dateSelectionSegs, eventSelection: e.eventSelection, eventDrag: e.eventDrag, eventResize: e.eventResize, dayMaxEvents: a, dayMaxEventRows: n, forPrint: e.forPrint, isHitComboAllowed: e.isHitComboAllowed })
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
      const e = vA(this.elRef.current, this.props.dateProfile);
      if (e) {
        const n = e.closest(".fc-daygrid-body"), a = n.closest(".fc-scroller"), i = e.getBoundingClientRect().top - n.getBoundingClientRect().top;
        a.scrollTop = i ? i + 1 : 0;
      }
      this.needsScrollReset = !1;
    }
  }
}
function vA(t, e) {
  let n;
  return e.currentRangeUnit.match(/year|month/) && (n = t.querySelector(`[data-date="${zp(e.currentDate)}-01"]`)), n || (n = t.querySelector(`[data-date="${Da(e.currentDate)}"]`)), n;
}
class pA extends Uy {
  constructor() {
    super(...arguments), this.forceDayIfListItem = !0;
  }
  sliceRange(e, n) {
    return n.sliceRange(e);
  }
}
class gA extends _t {
  constructor() {
    super(...arguments), this.slicer = new pA(), this.tableRef = Xe();
  }
  render() {
    let { props: e, context: n } = this;
    return $(hA, Object.assign({ ref: this.tableRef }, this.slicer.sliceProps(e, e.dateProfile, e.nextDayThreshold, n, e.dayTableModel), { dateProfile: e.dateProfile, cells: e.dayTableModel.cells, colGroupNode: e.colGroupNode, tableMinWidth: e.tableMinWidth, renderRowIntro: e.renderRowIntro, dayMaxEvents: e.dayMaxEvents, dayMaxEventRows: e.dayMaxEventRows, showWeekNumbers: e.showWeekNumbers, expandRows: e.expandRows, headerAlignElRef: e.headerAlignElRef, clientWidth: e.clientWidth, clientHeight: e.clientHeight, forPrint: e.forPrint }));
  }
}
class yA extends Z0 {
  constructor() {
    super(...arguments), this.buildDayTableModel = pe(bA), this.headerRef = Xe(), this.tableRef = Xe();
  }
  render() {
    let { options: e, dateProfileGenerator: n } = this.context, { props: a } = this, i = this.buildDayTableModel(a.dateProfile, n), r = e.dayHeaders && $(Ly, { ref: this.headerRef, dateProfile: a.dateProfile, dates: i.headerDates, datesRepDistinctDays: i.rowCnt === 1 }), o = (s) => $(gA, { ref: this.tableRef, dateProfile: a.dateProfile, dayTableModel: i, businessHours: a.businessHours, dateSelection: a.dateSelection, eventStore: a.eventStore, eventUiBases: a.eventUiBases, eventSelection: a.eventSelection, eventDrag: a.eventDrag, eventResize: a.eventResize, nextDayThreshold: e.nextDayThreshold, colGroupNode: s.tableColGroupNode, tableMinWidth: s.tableMinWidth, dayMaxEvents: e.dayMaxEvents, dayMaxEventRows: e.dayMaxEventRows, showWeekNumbers: e.weekNumbers, expandRows: !a.isHeightAuto, headerAlignElRef: this.headerElRef, clientWidth: s.clientWidth, clientHeight: s.clientHeight, forPrint: a.forPrint });
    return e.dayMinWidth ? this.renderHScrollLayout(r, o, i.colCnt, e.dayMinWidth) : this.renderSimpleLayout(r, o);
  }
}
function bA(t, e) {
  let n = new Vy(t.renderRange, e);
  return new jy(n, /year|month|week/.test(t.currentRangeUnit));
}
class AA extends yo {
  // Computes the date range that will be rendered
  buildRenderRange(e, n, a) {
    let i = super.buildRenderRange(e, n, a), { props: r } = this;
    return CA({
      currentRange: i,
      snapToWeek: /^(year|month)$/.test(n),
      fixedWeekCount: r.fixedWeekCount,
      dateEnv: r.dateEnv
    });
  }
}
function CA(t) {
  let { dateEnv: e, currentRange: n } = t, { start: a, end: i } = n, r;
  if (t.snapToWeek && (a = e.startOfWeek(a), r = e.startOfWeek(i), r.valueOf() !== i.valueOf() && (i = Ni(r, 1))), t.fixedWeekCount) {
    let o = e.startOfWeek(e.startOfMonth(xe(n.end, -1))), s = Math.ceil(
      // could be partial weeks due to hiddenDays
      Ep(o, i)
    );
    i = Ni(i, 6 - s);
  }
  return { start: a, end: i };
}
var wA = ':root{--fc-daygrid-event-dot-width:8px}.fc-daygrid-day-events:after,.fc-daygrid-day-events:before,.fc-daygrid-day-frame:after,.fc-daygrid-day-frame:before,.fc-daygrid-event-harness:after,.fc-daygrid-event-harness:before{clear:both;content:"";display:table}.fc .fc-daygrid-body{position:relative;z-index:1}.fc .fc-daygrid-day.fc-day-today{background-color:var(--fc-today-bg-color)}.fc .fc-daygrid-day-frame{min-height:100%;position:relative}.fc .fc-daygrid-day-top{display:flex;flex-direction:row-reverse}.fc .fc-day-other .fc-daygrid-day-top{opacity:.3}.fc .fc-daygrid-day-number{padding:4px;position:relative;z-index:4}.fc .fc-daygrid-month-start{font-size:1.1em;font-weight:700}.fc .fc-daygrid-day-events{margin-top:1px}.fc .fc-daygrid-body-balanced .fc-daygrid-day-events{left:0;position:absolute;right:0}.fc .fc-daygrid-body-unbalanced .fc-daygrid-day-events{min-height:2em;position:relative}.fc .fc-daygrid-body-natural .fc-daygrid-day-events{margin-bottom:1em}.fc .fc-daygrid-event-harness{position:relative}.fc .fc-daygrid-event-harness-abs{left:0;position:absolute;right:0;top:0}.fc .fc-daygrid-bg-harness{bottom:0;position:absolute;top:0}.fc .fc-daygrid-day-bg .fc-non-business{z-index:1}.fc .fc-daygrid-day-bg .fc-bg-event{z-index:2}.fc .fc-daygrid-day-bg .fc-highlight{z-index:3}.fc .fc-daygrid-event{margin-top:1px;z-index:6}.fc .fc-daygrid-event.fc-event-mirror{z-index:7}.fc .fc-daygrid-day-bottom{font-size:.85em;margin:0 2px}.fc .fc-daygrid-day-bottom:after,.fc .fc-daygrid-day-bottom:before{clear:both;content:"";display:table}.fc .fc-daygrid-more-link{border-radius:3px;cursor:pointer;line-height:1;margin-top:1px;max-width:100%;overflow:hidden;padding:2px;position:relative;white-space:nowrap;z-index:4}.fc .fc-daygrid-more-link:hover{background-color:rgba(0,0,0,.1)}.fc .fc-daygrid-week-number{background-color:var(--fc-neutral-bg-color);color:var(--fc-neutral-text-color);min-width:1.5em;padding:2px;position:absolute;text-align:center;top:0;z-index:5}.fc .fc-more-popover .fc-popover-body{min-width:220px;padding:10px}.fc-direction-ltr .fc-daygrid-event.fc-event-start,.fc-direction-rtl .fc-daygrid-event.fc-event-end{margin-left:2px}.fc-direction-ltr .fc-daygrid-event.fc-event-end,.fc-direction-rtl .fc-daygrid-event.fc-event-start{margin-right:2px}.fc-direction-ltr .fc-daygrid-more-link{float:left}.fc-direction-ltr .fc-daygrid-week-number{border-radius:0 0 3px 0;left:0}.fc-direction-rtl .fc-daygrid-more-link{float:right}.fc-direction-rtl .fc-daygrid-week-number{border-radius:0 0 0 3px;right:0}.fc-liquid-hack .fc-daygrid-day-frame{position:static}.fc-daygrid-event{border-radius:3px;font-size:var(--fc-small-font-size);position:relative;white-space:nowrap}.fc-daygrid-block-event .fc-event-time{font-weight:700}.fc-daygrid-block-event .fc-event-time,.fc-daygrid-block-event .fc-event-title{padding:1px}.fc-daygrid-dot-event{align-items:center;display:flex;padding:2px 0}.fc-daygrid-dot-event .fc-event-title{flex-grow:1;flex-shrink:1;font-weight:700;min-width:0;overflow:hidden}.fc-daygrid-dot-event.fc-event-mirror,.fc-daygrid-dot-event:hover{background:rgba(0,0,0,.1)}.fc-daygrid-dot-event.fc-event-selected:before{bottom:-10px;top:-10px}.fc-daygrid-event-dot{border:calc(var(--fc-daygrid-event-dot-width)/2) solid var(--fc-event-border-color);border-radius:calc(var(--fc-daygrid-event-dot-width)/2);box-sizing:content-box;height:0;margin:0 4px;width:0}.fc-direction-ltr .fc-daygrid-event .fc-event-time{margin-right:3px}.fc-direction-rtl .fc-daygrid-event .fc-event-time{margin-left:3px}';
eo(wA);
var _A = ut({
  name: "@fullcalendar/daygrid",
  initialView: "dayGridMonth",
  views: {
    dayGrid: {
      component: yA,
      dateProfileGeneratorClass: AA
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
Ga.touchMouseIgnoreWait = 500;
let ba = 0, In = 0, Aa = !1;
class ds {
  constructor(e) {
    this.subjectEl = null, this.selector = "", this.handleSelector = "", this.shouldIgnoreMove = !1, this.shouldWatchScroll = !0, this.isDragging = !1, this.isTouchDragging = !1, this.wasTouchScroll = !1, this.handleMouseDown = (n) => {
      if (!this.shouldIgnoreMouse() && SA(n) && this.tryStart(n)) {
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
        a.removeEventListener("touchmove", this.handleTouchMove), a.removeEventListener("touchend", this.handleTouchEnd), a.removeEventListener("touchcancel", this.handleTouchEnd), window.removeEventListener("scroll", this.handleTouchScroll, !0), this.emitter.trigger("pointerup", this.createEventFromTouch(n)), this.cleanup(), this.isTouchDragging = !1, TA();
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
    }, this.containerEl = e, this.emitter = new Bn(), e.addEventListener("mousedown", this.handleMouseDown), e.addEventListener("touchstart", this.handleTouchStart, { passive: !0 }), kA();
  }
  destroy() {
    this.containerEl.removeEventListener("mousedown", this.handleMouseDown), this.containerEl.removeEventListener("touchstart", this.handleTouchStart, { passive: !0 }), EA();
  }
  tryStart(e) {
    let n = this.querySubjectEl(e), a = e.target;
    return n && (!this.handleSelector || Be(a, this.handleSelector)) ? (this.subjectEl = n, this.isDragging = !0, this.wasTouchScroll = !1, !0) : !1;
  }
  cleanup() {
    Aa = !1, this.isDragging = !1, this.subjectEl = null, this.destroyScrollWatch();
  }
  querySubjectEl(e) {
    return this.selector ? Be(e.target, this.selector) : this.containerEl;
  }
  shouldIgnoreMouse() {
    return ba || this.isTouchDragging;
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
function SA(t) {
  return t.button === 0 && !t.ctrlKey;
}
function TA() {
  ba += 1, setTimeout(() => {
    ba -= 1;
  }, Ga.touchMouseIgnoreWait);
}
function kA() {
  In += 1, In === 1 && window.addEventListener("touchmove", fs, { passive: !1 });
}
function EA() {
  In -= 1, In || window.removeEventListener("touchmove", fs, { passive: !1 });
}
function fs(t) {
  Aa && t.preventDefault();
}
class MA {
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
    a.style.transition = "top " + n + "ms,left " + n + "ms", Lt(a, {
      left: i.left,
      top: i.top
    }), up(a, () => {
      a.style.transition = "", e();
    });
  }
  cleanup() {
    this.mirrorEl && (Ea(this.mirrorEl), this.mirrorEl = null), this.sourceEl = null;
  }
  updateElPosition() {
    this.sourceEl && this.isVisible && Lt(this.getMirrorEl(), {
      left: this.sourceElRect.left + this.deltaX,
      top: this.sourceElRect.top + this.deltaY
    });
  }
  getMirrorEl() {
    let e = this.sourceElRect, n = this.mirrorEl;
    return n || (n = this.mirrorEl = this.sourceEl.cloneNode(!0), n.style.userSelect = "none", n.style.webkitUserSelect = "none", n.style.pointerEvents = "none", n.classList.add("fc-event-dragging"), Lt(n, {
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
class ms extends Ya {
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
class hs extends ms {
  constructor(e, n) {
    super(new Oy(e), n);
  }
  getEventTarget() {
    return this.scrollController.el;
  }
  computeClientRect() {
    return Dy(this.scrollController.el);
  }
}
class NA extends ms {
  constructor(e) {
    super(new Ry(), e);
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
const rr = typeof performance == "function" ? performance.now : Date.now;
class DA {
  constructor() {
    this.isEnabled = !0, this.scrollQuery = [window, ".fc-scroller"], this.edgeThreshold = 50, this.maxVelocity = 300, this.pointerScreenX = null, this.pointerScreenY = null, this.isAnimating = !1, this.scrollCaches = null, this.everMovedUp = !1, this.everMovedDown = !1, this.everMovedLeft = !1, this.everMovedRight = !1, this.animate = () => {
      if (this.isAnimating) {
        let e = this.computeBestEdge(this.pointerScreenX + window.scrollX, this.pointerScreenY + window.scrollY);
        if (e) {
          let n = rr();
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
      r < 0 ? this.everMovedUp = !0 : r > 0 && (this.everMovedDown = !0), o < 0 ? this.everMovedLeft = !0 : o > 0 && (this.everMovedRight = !0), this.pointerScreenX = a, this.pointerScreenY = i, this.isAnimating || (this.isAnimating = !0, this.requestAnimation(rr()));
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
      let s = o.clientRect, l = e - s.left, c = s.right - e, d = n - s.top, h = s.bottom - n;
      l >= 0 && c >= 0 && d >= 0 && h >= 0 && (d <= a && this.everMovedUp && o.canScrollUp() && (!i || i.distance > d) && (i = { scrollCache: o, name: "top", distance: d }), h <= a && this.everMovedDown && o.canScrollDown() && (!i || i.distance > h) && (i = { scrollCache: o, name: "bottom", distance: h }), l <= a && this.everMovedLeft && o.canScrollLeft() && (!i || i.distance > l) && (i = { scrollCache: o, name: "left", distance: l }), c <= a && this.everMovedRight && o.canScrollRight() && (!i || i.distance > c) && (i = { scrollCache: o, name: "right", distance: c }));
    }
    return i;
  }
  buildCaches(e) {
    return this.queryScrollEls(e).map((n) => n === window ? new NA(!1) : new hs(n, !1));
  }
  queryScrollEls(e) {
    let n = [];
    for (let a of this.scrollQuery)
      typeof a == "object" ? n.push(a) : n.push(...Array.prototype.slice.call(e.getRootNode().querySelectorAll(a)));
    return n;
  }
}
class Xt extends Py {
  constructor(e, n) {
    super(e), this.containerEl = e, this.delay = null, this.minDistance = 0, this.touchScrollAllowed = !0, this.mirrorNeedsRevert = !1, this.isInteracting = !1, this.isDragging = !1, this.isDelayEnded = !1, this.isDistanceSurpassed = !1, this.delayTimeoutId = null, this.onPointerDown = (i) => {
      this.isDragging || (this.isInteracting = !0, this.isDelayEnded = !1, this.isDistanceSurpassed = !1, cp(document.body), fp(document.body), i.isTouch || i.origEvent.preventDefault(), this.emitter.trigger("pointerdown", i), this.isInteracting && // not destroyed via pointerdown handler
      !this.pointer.shouldIgnoreMove && (this.mirror.setIsVisible(!1), this.mirror.start(i.subjectEl, i.pageX, i.pageY), this.startDelay(i), this.minDistance || this.handleDistanceSurpassed(i)));
    }, this.onPointerMove = (i) => {
      if (this.isInteracting) {
        if (this.emitter.trigger("pointermove", i), !this.isDistanceSurpassed) {
          let r = this.minDistance, o, { deltaX: s, deltaY: l } = i;
          o = s * s + l * l, o >= r * r && this.handleDistanceSurpassed(i);
        }
        this.isDragging && (i.origEvent.type !== "scroll" && (this.mirror.handleMove(i.pageX, i.pageY), this.autoScroller.handleMove(i.pageX, i.pageY)), this.emitter.trigger("dragmove", i));
      }
    }, this.onPointerUp = (i) => {
      this.isInteracting && (this.isInteracting = !1, dp(document.body), mp(document.body), this.emitter.trigger("pointerup", i), this.isDragging && (this.autoScroller.stop(), this.tryStopDrag(i)), this.delayTimeoutId && (clearTimeout(this.delayTimeoutId), this.delayTimeoutId = null));
    };
    let a = this.pointer = new ds(e);
    a.emitter.on("pointerdown", this.onPointerDown), a.emitter.on("pointermove", this.onPointerMove), a.emitter.on("pointerup", this.onPointerUp), n && (a.selector = n), this.mirror = new MA(), this.autoScroller = new DA();
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
class IA {
  constructor(e) {
    this.el = e, this.origRect = Wa(e), this.scrollCaches = Fo(e).map((n) => new hs(n, !0));
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
      if (!OA(i.getEventTarget()) && !by(a, i.clientRect))
        return !1;
    return !0;
  }
}
function OA(t) {
  let e = t.tagName;
  return e === "HTML" || e === "BODY";
}
class Ln {
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
    }, this.droppableStore = n, e.emitter.on("pointerdown", this.handlePointerDown), e.emitter.on("dragstart", this.handleDragStart), e.emitter.on("dragmove", this.handleDragMove), e.emitter.on("pointerup", this.handlePointerUp), e.emitter.on("dragend", this.handleDragEnd), this.dragging = e, this.emitter = new Bn();
  }
  // sets initialHit
  // sets coordAdjust
  processFirstCoord(e) {
    let n = { left: e.pageX, top: e.pageY }, a = n, i = e.subjectEl, r;
    i instanceof HTMLElement && (r = Wa(i), a = Ay(a, r));
    let o = this.initialHit = this.queryHitForOffset(a.left, a.top);
    if (o) {
      if (this.useSubjectCenter && r) {
        let s = xo(r, o.rect);
        s && (a = Cy(s));
      }
      this.coordAdjust = wy(a, n);
    } else
      this.coordAdjust = { left: 0, top: 0 };
  }
  handleMove(e, n) {
    let a = this.queryHitForOffset(e.pageX + this.coordAdjust.left, e.pageY + this.coordAdjust.top);
    (n || !Hn(this.movingHit, a)) && (this.movingHit = a, this.emitter.trigger("hitupdate", a, !1, e));
  }
  prepareHits() {
    this.offsetTrackers = At(this.droppableStore, (e) => (e.component.prepareHits(), new IA(e.el)));
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
      let s = a[o].component, l = i[o];
      if (l && // wasn't destroyed mid-drag
      l.isWithinClipping(e, n)) {
        let c = l.computeLeft(), d = l.computeTop(), h = e - c, p = n - d, { origRect: v } = l, y = v.right - v.left, g = v.bottom - v.top;
        if (
          // must be within the element's bounds
          h >= 0 && h < y && p >= 0 && p < g
        ) {
          let b = s.queryHit(h, p, y, g);
          b && // make sure the hit is within activeRange, meaning it's not a dead cell
          $n(b.dateProfile.activeRange, b.dateSpan.range) && // Ensure the component we are querying for the hit is accessibly my the pointer
          // Prevents obscured calendars (ex: under a modal dialog) from accepting hit
          // https://github.com/fullcalendar/fullcalendar/issues/5026
          (this.disablePointCheck || l.el.contains(l.el.getRootNode().elementFromPoint(
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
function Hn(t, e) {
  return !t && !e ? !0 : !!t != !!e ? !1 : ly(t.dateSpan, e.dateSpan);
}
function vs(t, e) {
  let n = {};
  for (let a of e.pluginHooks.datePointTransforms)
    Object.assign(n, a(t, e));
  return Object.assign(n, RA(t, e.dateEnv)), n;
}
function RA(t, e) {
  return {
    date: e.toDate(t.range.start),
    dateStr: e.formatIso(t.range.start, { omitTime: t.allDay }),
    allDay: t.allDay
  };
}
class xA extends Bt {
  constructor(e) {
    super(e), this.handlePointerDown = (a) => {
      let { dragging: i } = this, r = a.origEvent.target;
      i.setIgnoreMove(!this.component.isValidDateDownEl(r));
    }, this.handleDragEnd = (a) => {
      let { component: i } = this, { pointer: r } = this.dragging;
      if (!r.wasTouchScroll) {
        let { initialHit: o, finalHit: s } = this.hitDragging;
        if (o && s && Hn(o, s)) {
          let { context: l } = i, c = Object.assign(Object.assign({}, vs(o.dateSpan, l)), { dayEl: o.dayEl, jsEvent: a.origEvent, view: l.viewApi || l.calendarApi.view });
          l.emitter.trigger("dateClick", c);
        }
      }
    }, this.dragging = new Xt(e.el), this.dragging.autoScroller.isEnabled = !1;
    let n = this.hitDragging = new Ln(this.dragging, ja(e));
    n.emitter.on("pointerdown", this.handlePointerDown), n.emitter.on("dragend", this.handleDragEnd);
  }
  destroy() {
    this.dragging.destroy();
  }
}
class PA extends Bt {
  constructor(e) {
    super(e), this.dragSelection = null, this.handlePointerDown = (o) => {
      let { component: s, dragging: l } = this, { options: c } = s.context, d = c.selectable && s.isValidDateDownEl(o.origEvent.target);
      l.setIgnoreMove(!d), l.delay = o.isTouch ? $A(s) : null;
    }, this.handleDragStart = (o) => {
      this.component.context.calendarApi.unselect(o);
    }, this.handleHitUpdate = (o, s) => {
      let { context: l } = this.component, c = null, d = !1;
      if (o) {
        let h = this.hitDragging.initialHit;
        o.componentId === h.componentId && this.isHitComboAllowed && !this.isHitComboAllowed(h, o) || (c = FA(h, o, l.pluginHooks.dateSelectionTransformers)), (!c || !Wy(c, o.dateProfile, l)) && (d = !0, c = null);
      }
      c ? l.dispatch({ type: "SELECT_DATES", selection: c }) : s || l.dispatch({ type: "UNSELECT_DATES" }), d ? Ma() : Na(), s || (this.dragSelection = c);
    }, this.handlePointerUp = (o) => {
      this.dragSelection && (ko(this.dragSelection, o, this.component.context), this.dragSelection = null);
    };
    let { component: n } = e, { options: a } = n.context, i = this.dragging = new Xt(e.el);
    i.touchScrollAllowed = !1, i.minDistance = a.selectMinDistance || 0, i.autoScroller.isEnabled = a.dragScroll;
    let r = this.hitDragging = new Ln(this.dragging, ja(e));
    r.emitter.on("pointerdown", this.handlePointerDown), r.emitter.on("dragstart", this.handleDragStart), r.emitter.on("hitupdate", this.handleHitUpdate), r.emitter.on("pointerup", this.handlePointerUp);
  }
  destroy() {
    this.dragging.destroy();
  }
}
function $A(t) {
  let { options: e } = t.context, n = e.selectLongPressDelay;
  return n == null && (n = e.longPressDelay), n;
}
function FA(t, e, n) {
  let a = t.dateSpan, i = e.dateSpan, r = [
    a.range.start,
    a.range.end,
    i.range.start,
    i.range.end
  ];
  r.sort(yp);
  let o = {};
  for (let s of n) {
    let l = s(t, e);
    if (l === !1)
      return null;
    l && Object.assign(o, l);
  }
  return o.range = { start: r[0], end: r[3] }, o.allDay = a.allDay, o;
}
class en extends Bt {
  constructor(e) {
    super(e), this.subjectEl = null, this.subjectSeg = null, this.isDragging = !1, this.eventRange = null, this.relevantEvents = null, this.receivingContext = null, this.validMutation = null, this.mutatedRelevantEvents = null, this.handlePointerDown = (o) => {
      let s = o.origEvent.target, { component: l, dragging: c } = this, { mirror: d } = c, { options: h } = l.context, p = l.context;
      this.subjectEl = o.subjectEl;
      let v = this.subjectSeg = $t(o.subjectEl), g = (this.eventRange = v.eventRange).instance.instanceId;
      this.relevantEvents = za(p.getCurrentData().eventStore, g), c.minDistance = o.isTouch ? 0 : h.eventDragMinDistance, c.delay = // only do a touch delay if touch and this event hasn't been selected yet
      o.isTouch && g !== l.props.eventSelection ? zA(l) : null, h.fixedMirrorParent ? d.parentNode = h.fixedMirrorParent : d.parentNode = Be(s, ".fc"), d.revertDuration = h.dragRevertDuration;
      let b = l.isValidSegDownEl(s) && !Be(s, ".fc-event-resizer");
      c.setIgnoreMove(!b), this.isDragging = b && o.subjectEl.classList.contains("fc-event-draggable");
    }, this.handleDragStart = (o) => {
      let s = this.component.context, l = this.eventRange, c = l.instance.instanceId;
      o.isTouch ? c !== this.component.props.eventSelection && s.dispatch({ type: "SELECT_EVENT", eventInstanceId: c }) : s.dispatch({ type: "UNSELECT_EVENT" }), this.isDragging && (s.calendarApi.unselect(o), s.emitter.trigger("eventDragStart", {
        el: this.subjectEl,
        event: new Se(s, l.def, l.instance),
        jsEvent: o.origEvent,
        view: s.viewApi
      }));
    }, this.handleHitUpdate = (o, s) => {
      if (!this.isDragging)
        return;
      let l = this.relevantEvents, c = this.hitDragging.initialHit, d = this.component.context, h = null, p = null, v = null, y = !1, g = {
        affectedEvents: l,
        mutatedEvents: Ge(),
        isEvent: !0
      };
      if (o) {
        h = o.context;
        let b = h.options;
        d === h || b.editable && b.droppable ? (p = BA(c, o, this.eventRange.instance.range.start, h.getCurrentData().pluginHooks.eventDragMutationMassagers), p && (v = Va(l, h.getCurrentData().eventUiBases, p, h), g.mutatedEvents = v, Ho(g, o.dateProfile, h) || (y = !0, p = null, v = null, g.mutatedEvents = Ge()))) : h = null;
      }
      this.displayDrag(h, g), y ? Ma() : Na(), s || (d === h && // TODO: write test for this
      Hn(c, o) && (p = null), this.dragging.setMirrorNeedsRevert(!p), this.dragging.setMirrorIsVisible(!o || !this.subjectEl.getRootNode().querySelector(".fc-event-mirror")), this.receivingContext = h, this.validMutation = p, this.mutatedRelevantEvents = v);
    }, this.handlePointerUp = () => {
      this.isDragging || this.cleanup();
    }, this.handleDragEnd = (o) => {
      if (this.isDragging) {
        let s = this.component.context, l = s.viewApi, { receivingContext: c, validMutation: d } = this, h = this.eventRange.def, p = this.eventRange.instance, v = new Se(s, h, p), y = this.relevantEvents, g = this.mutatedRelevantEvents, { finalHit: b } = this.hitDragging;
        if (this.clearDrag(), s.emitter.trigger("eventDragStop", {
          el: this.subjectEl,
          event: v,
          jsEvent: o.origEvent,
          view: l
        }), d) {
          if (c === s) {
            let A = new Se(s, g.defs[h.defId], p ? g.instances[p.instanceId] : null);
            s.dispatch({
              type: "MERGE_EVENTS",
              eventStore: g
            });
            let C = {
              oldEvent: v,
              event: A,
              relatedEvents: pt(g, s, p),
              revert() {
                s.dispatch({
                  type: "MERGE_EVENTS",
                  eventStore: y
                  // the pre-change data
                });
              }
            }, E = {};
            for (let M of s.getCurrentData().pluginHooks.eventDropTransformers)
              Object.assign(E, M(d, s));
            s.emitter.trigger("eventDrop", Object.assign(Object.assign(Object.assign({}, C), E), { el: o.subjectEl, delta: d.datesDelta, jsEvent: o.origEvent, view: l })), s.emitter.trigger("eventChange", C);
          } else if (c) {
            let A = {
              event: v,
              relatedEvents: pt(y, s, p),
              revert() {
                s.dispatch({
                  type: "MERGE_EVENTS",
                  eventStore: y
                });
              }
            };
            s.emitter.trigger("eventLeave", Object.assign(Object.assign({}, A), { draggedEl: o.subjectEl, view: l })), s.dispatch({
              type: "REMOVE_EVENTS",
              eventStore: y
            }), s.emitter.trigger("eventRemove", A);
            let C = g.defs[h.defId], E = g.instances[p.instanceId], M = new Se(c, C, E);
            c.dispatch({
              type: "MERGE_EVENTS",
              eventStore: g
            });
            let k = {
              event: M,
              relatedEvents: pt(g, c, E),
              revert() {
                c.dispatch({
                  type: "REMOVE_EVENTS",
                  eventStore: g
                });
              }
            };
            c.emitter.trigger("eventAdd", k), o.isTouch && c.dispatch({
              type: "SELECT_EVENT",
              eventInstanceId: p.instanceId
            }), c.emitter.trigger("drop", Object.assign(Object.assign({}, vs(b.dateSpan, c)), { draggedEl: o.subjectEl, jsEvent: o.origEvent, view: b.context.viewApi })), c.emitter.trigger("eventReceive", Object.assign(Object.assign({}, k), { draggedEl: o.subjectEl, view: b.context.viewApi }));
          }
        } else
          s.emitter.trigger("_noEventDrop");
      }
      this.cleanup();
    };
    let { component: n } = this, { options: a } = n.context, i = this.dragging = new Xt(e.el);
    i.pointer.selector = en.SELECTOR, i.touchScrollAllowed = !1, i.autoScroller.isEnabled = a.dragScroll;
    let r = this.hitDragging = new Ln(this.dragging, pa);
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
        mutatedEvents: Ge(),
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
function BA(t, e, n, a) {
  let i = t.dateSpan, r = e.dateSpan, o = i.range.start, s = r.range.start, l = {};
  i.allDay !== r.allDay && (l.allDay = r.allDay, l.hasEnd = e.context.options.allDayMaintainDuration, r.allDay ? o = _e(n) : o = n);
  let c = Mt(o, s, t.context.dateEnv, t.componentId === e.componentId ? t.largeUnit : null);
  c.milliseconds && (l.allDay = !1);
  let d = {
    datesDelta: c,
    standardProps: l
  };
  for (let h of a)
    h(d, t, e);
  return d;
}
function zA(t) {
  let { options: e } = t.context, n = e.eventLongPressDelay;
  return n == null && (n = e.longPressDelay), n;
}
class LA extends Bt {
  constructor(e) {
    super(e), this.draggingSegEl = null, this.draggingSeg = null, this.eventRange = null, this.relevantEvents = null, this.validMutation = null, this.mutatedRelevantEvents = null, this.handlePointerDown = (r) => {
      let { component: o } = this, s = this.querySegEl(r), l = $t(s), c = this.eventRange = l.eventRange;
      this.dragging.minDistance = o.context.options.eventDragMinDistance, this.dragging.setIgnoreMove(!this.component.isValidSegDownEl(r.origEvent.target) || r.isTouch && this.component.props.eventSelection !== c.instance.instanceId);
    }, this.handleDragStart = (r) => {
      let { context: o } = this.component, s = this.eventRange;
      this.relevantEvents = za(o.getCurrentData().eventStore, this.eventRange.instance.instanceId);
      let l = this.querySegEl(r);
      this.draggingSegEl = l, this.draggingSeg = $t(l), o.calendarApi.unselect(), o.emitter.trigger("eventResizeStart", {
        el: l,
        event: new Se(o, s.def, s.instance),
        jsEvent: r.origEvent,
        view: o.viewApi
      });
    }, this.handleHitUpdate = (r, o, s) => {
      let { context: l } = this.component, c = this.relevantEvents, d = this.hitDragging.initialHit, h = this.eventRange.instance, p = null, v = null, y = !1, g = {
        affectedEvents: c,
        mutatedEvents: Ge(),
        isEvent: !0
      };
      r && (r.componentId === d.componentId && this.isHitComboAllowed && !this.isHitComboAllowed(d, r) || (p = HA(d, r, s.subjectEl.classList.contains("fc-event-resizer-start"), h.range))), p && (v = Va(c, l.getCurrentData().eventUiBases, p, l), g.mutatedEvents = v, Ho(g, r.dateProfile, l) || (y = !0, p = null, v = null, g.mutatedEvents = null)), v ? l.dispatch({
        type: "SET_EVENT_RESIZE",
        state: g
      }) : l.dispatch({ type: "UNSET_EVENT_RESIZE" }), y ? Ma() : Na(), o || (p && Hn(d, r) && (p = null), this.validMutation = p, this.mutatedRelevantEvents = v);
    }, this.handleDragEnd = (r) => {
      let { context: o } = this.component, s = this.eventRange.def, l = this.eventRange.instance, c = new Se(o, s, l), d = this.relevantEvents, h = this.mutatedRelevantEvents;
      if (o.emitter.trigger("eventResizeStop", {
        el: this.draggingSegEl,
        event: c,
        jsEvent: r.origEvent,
        view: o.viewApi
      }), this.validMutation) {
        let p = new Se(o, h.defs[s.defId], l ? h.instances[l.instanceId] : null);
        o.dispatch({
          type: "MERGE_EVENTS",
          eventStore: h
        });
        let v = {
          oldEvent: c,
          event: p,
          relatedEvents: pt(h, o, l),
          revert() {
            o.dispatch({
              type: "MERGE_EVENTS",
              eventStore: d
              // the pre-change events
            });
          }
        };
        o.emitter.trigger("eventResize", Object.assign(Object.assign({}, v), { el: this.draggingSegEl, startDelta: this.validMutation.startDelta || ge(0), endDelta: this.validMutation.endDelta || ge(0), jsEvent: r.origEvent, view: o.viewApi })), o.emitter.trigger("eventChange", v);
      } else
        o.emitter.trigger("_noEventResize");
      this.draggingSeg = null, this.relevantEvents = null, this.validMutation = null;
    };
    let { component: n } = e, a = this.dragging = new Xt(e.el);
    a.pointer.selector = ".fc-event-resizer", a.touchScrollAllowed = !1, a.autoScroller.isEnabled = n.context.options.dragScroll;
    let i = this.hitDragging = new Ln(this.dragging, ja(e));
    i.emitter.on("pointerdown", this.handlePointerDown), i.emitter.on("dragstart", this.handleDragStart), i.emitter.on("hitupdate", this.handleHitUpdate), i.emitter.on("dragend", this.handleDragEnd);
  }
  destroy() {
    this.dragging.destroy();
  }
  querySegEl(e) {
    return Be(e.subjectEl, ".fc-event");
  }
}
function HA(t, e, n, a) {
  let i = t.context.dateEnv, r = t.dateSpan.range.start, o = e.dateSpan.range.start, s = Mt(r, o, i, t.largeUnit);
  if (n) {
    if (i.add(a.start, s) < a.end)
      return { startDelta: s };
  } else if (i.add(a.end, s) > a.start)
    return { endDelta: s };
  return null;
}
class VA {
  constructor(e) {
    this.context = e, this.isRecentPointerDateSelect = !1, this.matchesCancel = !1, this.matchesEvent = !1, this.onSelect = (a) => {
      a.jsEvent && (this.isRecentPointerDateSelect = !0);
    }, this.onDocumentPointerDown = (a) => {
      let i = this.context.options.unselectCancel, r = io(a.origEvent);
      this.matchesCancel = !!Be(r, i), this.matchesEvent = !!Be(r, en.SELECTOR);
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
    let n = this.documentPointer = new ds(document);
    n.shouldIgnoreMove = !0, n.shouldWatchScroll = !1, n.emitter.on("pointerdown", this.onDocumentPointerDown), n.emitter.on("pointerup", this.onDocumentPointerUp), e.emitter.on("select", this.onSelect);
  }
  destroy() {
    this.context.emitter.off("select", this.onSelect), this.documentPointer.destroy();
  }
}
const jA = {
  fixedMirrorParent: x
}, UA = {
  dateClick: x,
  eventDragStart: x,
  eventDragStop: x,
  eventDrop: x,
  eventResizeStart: x,
  eventResizeStop: x,
  eventResize: x,
  drop: x,
  eventReceive: x,
  eventLeave: x
};
Ga.dataAttrPrefix = "";
var WA = ut({
  name: "@fullcalendar/interaction",
  componentInteractions: [xA, PA, en, LA],
  calendarInteractions: [VA],
  elementDraggingImpl: Xt,
  optionRefiners: jA,
  listenerRefiners: UA
});
const YA = /* @__PURE__ */ JSON.parse(`[{"name":"Pacific/Midway","alternativeName":"American Samoa Time","group":["Pacific/Midway"],"continentCode":"OC","continentName":"Oceania","countryName":"United States Minor Outlying Islands","countryCode":"UM","mainCities":["Midway"],"rawOffsetInMinutes":-660,"abbreviation":"GMT-11","rawFormat":"-11:00 American Samoa Time - Midway"},{"name":"Pacific/Pago_Pago","alternativeName":"American Samoa Time","group":["Pacific/Pago_Pago","US/Samoa","Pacific/Samoa","Pacific/Midway"],"continentCode":"OC","continentName":"Oceania","countryName":"American Samoa","countryCode":"AS","mainCities":["Pago Pago"],"rawOffsetInMinutes":-660,"abbreviation":"GMT-11","rawFormat":"-11:00 American Samoa Time - Pago Pago"},{"name":"Pacific/Niue","alternativeName":"Niue Time","group":["Pacific/Niue"],"continentCode":"OC","continentName":"Oceania","countryName":"Niue","countryCode":"NU","mainCities":["Alofi"],"rawOffsetInMinutes":-660,"abbreviation":"NUT","rawFormat":"-11:00 Niue Time - Alofi"},{"name":"Pacific/Rarotonga","alternativeName":"Cook Islands Time","group":["Pacific/Rarotonga"],"continentCode":"OC","continentName":"Oceania","countryName":"Cook Islands","countryCode":"CK","mainCities":["Avarua"],"rawOffsetInMinutes":-600,"abbreviation":"CKT","rawFormat":"-10:00 Cook Islands Time - Avarua"},{"name":"America/Adak","alternativeName":"Hawaii-Aleutian Time","group":["America/Adak","US/Aleutian","America/Atka"],"continentCode":"NA","continentName":"North America","countryName":"United States","countryCode":"US","mainCities":["Adak"],"rawOffsetInMinutes":-600,"abbreviation":"HAST","rawFormat":"-10:00 Hawaii-Aleutian Time - Adak"},{"name":"Pacific/Honolulu","alternativeName":"Hawaii-Aleutian Time","group":["Pacific/Honolulu","US/Hawaii","Pacific/Johnston","HST"],"continentCode":"NA","continentName":"North America","countryName":"United States","countryCode":"US","mainCities":["Honolulu","East Honolulu","Pearl City","Makakilo / Kapolei / Honokai Hale"],"rawOffsetInMinutes":-600,"abbreviation":"HAST","rawFormat":"-10:00 Hawaii-Aleutian Time - Honolulu, East Honolulu, Pearl City, Makakilo / Kapolei / Honokai Hale"},{"name":"Pacific/Tahiti","alternativeName":"Tahiti Time","group":["Pacific/Tahiti"],"continentCode":"OC","continentName":"Oceania","countryName":"French Polynesia","countryCode":"PF","mainCities":["Faaa","Papeete","Punaauia"],"rawOffsetInMinutes":-600,"abbreviation":"TAHT","rawFormat":"-10:00 Tahiti Time - Faaa, Papeete, Punaauia"},{"name":"Pacific/Marquesas","alternativeName":"Marquesas Time","group":["Pacific/Marquesas"],"continentCode":"OC","continentName":"Oceania","countryName":"French Polynesia","countryCode":"PF","mainCities":["Marquesas"],"rawOffsetInMinutes":-570,"abbreviation":"MART","rawFormat":"-09:30 Marquesas Time - Marquesas"},{"name":"America/Anchorage","alternativeName":"Alaska Time","group":["America/Anchorage","America/Juneau","America/Metlakatla","America/Nome","America/Sitka","America/Yakutat","US/Alaska"],"continentCode":"NA","continentName":"North America","countryName":"United States","countryCode":"US","mainCities":["Anchorage","Fairbanks","Juneau","Eagle River"],"rawOffsetInMinutes":-540,"abbreviation":"AKST","rawFormat":"-09:00 Alaska Time - Anchorage, Fairbanks, Juneau, Eagle River"},{"name":"Pacific/Gambier","alternativeName":"Gambier Time","group":["Pacific/Gambier"],"continentCode":"OC","continentName":"Oceania","countryName":"French Polynesia","countryCode":"PF","mainCities":["Gambier"],"rawOffsetInMinutes":-540,"abbreviation":"GAMT","rawFormat":"-09:00 Gambier Time - Gambier"},{"name":"America/Los_Angeles","alternativeName":"Pacific Time","group":["America/Los_Angeles","US/Pacific","PST8PDT"],"continentCode":"NA","continentName":"North America","countryName":"United States","countryCode":"US","mainCities":["Los Angeles","San Diego","San Jose","San Francisco"],"rawOffsetInMinutes":-480,"abbreviation":"PST","rawFormat":"-08:00 Pacific Time - Los Angeles, San Diego, San Jose, San Francisco"},{"name":"America/Tijuana","alternativeName":"Pacific Time","group":["America/Tijuana","Mexico/BajaNorte","America/Ensenada","America/Santa_Isabel"],"continentCode":"NA","continentName":"North America","countryName":"Mexico","countryCode":"MX","mainCities":["Tijuana","Mexicali","Ensenada","Rosarito"],"rawOffsetInMinutes":-480,"abbreviation":"PST","rawFormat":"-08:00 Pacific Time - Tijuana, Mexicali, Ensenada, Rosarito"},{"name":"America/Vancouver","alternativeName":"Pacific Time","group":["America/Vancouver","Canada/Pacific"],"continentCode":"NA","continentName":"North America","countryName":"Canada","countryCode":"CA","mainCities":["Vancouver","Surrey","Victoria","Burnaby"],"rawOffsetInMinutes":-480,"abbreviation":"PST","rawFormat":"-08:00 Pacific Time - Vancouver, Surrey, Victoria, Burnaby"},{"name":"Pacific/Pitcairn","alternativeName":"Pitcairn Time","group":["Pacific/Pitcairn"],"continentCode":"OC","continentName":"Oceania","countryName":"Pitcairn","countryCode":"PN","mainCities":["Adamstown"],"rawOffsetInMinutes":-480,"abbreviation":"PST","rawFormat":"-08:00 Pitcairn Time - Adamstown"},{"name":"America/Hermosillo","alternativeName":"Mexican Pacific Time","group":["America/Hermosillo","America/Mazatlan","Mexico/BajaSur"],"continentCode":"NA","continentName":"North America","countryName":"Mexico","countryCode":"MX","mainCities":["Hermosillo","Culiacán","Mazatlán","Tepic"],"rawOffsetInMinutes":-420,"abbreviation":"GMT-7","rawFormat":"-07:00 Mexican Pacific Time - Hermosillo, Culiacán, Mazatlán, Tepic"},{"name":"America/Edmonton","alternativeName":"Mountain Time","group":["America/Cambridge_Bay","America/Edmonton","America/Inuvik","Canada/Mountain","America/Yellowknife"],"continentCode":"NA","continentName":"North America","countryName":"Canada","countryCode":"CA","mainCities":["Calgary","Edmonton","Lethbridge","Red Deer"],"rawOffsetInMinutes":-420,"abbreviation":"MST","rawFormat":"-07:00 Mountain Time - Calgary, Edmonton, Lethbridge, Red Deer"},{"name":"America/Ciudad_Juarez","alternativeName":"Mountain Time","group":["America/Ciudad_Juarez"],"continentCode":"NA","continentName":"North America","countryName":"Mexico","countryCode":"MX","mainCities":["Ciudad Juárez"],"rawOffsetInMinutes":-420,"abbreviation":"MST","rawFormat":"-07:00 Mountain Time - Ciudad Juárez"},{"name":"America/Denver","alternativeName":"Mountain Time","group":["America/Boise","America/Denver","MST7MDT","Navajo","US/Mountain","America/Shiprock"],"continentCode":"NA","continentName":"North America","countryName":"United States","countryCode":"US","mainCities":["Denver","El Paso","Albuquerque","Colorado Springs"],"rawOffsetInMinutes":-420,"abbreviation":"MST","rawFormat":"-07:00 Mountain Time - Denver, El Paso, Albuquerque, Colorado Springs"},{"name":"America/Phoenix","alternativeName":"Mountain Time","group":["America/Phoenix","MST","US/Arizona","America/Creston"],"continentCode":"NA","continentName":"North America","countryName":"United States","countryCode":"US","mainCities":["Phoenix","Tucson","Mesa","Chandler"],"rawOffsetInMinutes":-420,"abbreviation":"MST","rawFormat":"-07:00 Mountain Time - Phoenix, Tucson, Mesa, Chandler"},{"name":"America/Whitehorse","alternativeName":"Yukon Time","group":["America/Creston","America/Dawson","America/Dawson_Creek","America/Fort_Nelson","America/Whitehorse","Canada/Yukon"],"continentCode":"NA","continentName":"North America","countryName":"Canada","countryCode":"CA","mainCities":["Whitehorse","Fort St. John","Creston","Dawson"],"rawOffsetInMinutes":-420,"abbreviation":"YT","rawFormat":"-07:00 Yukon Time - Whitehorse, Fort St. John, Creston, Dawson"},{"name":"America/Belize","alternativeName":"Central Time","group":["America/Belize"],"continentCode":"NA","continentName":"North America","countryName":"Belize","countryCode":"BZ","mainCities":["Belize City","San Pedro","Orange Walk","Belmopan"],"rawOffsetInMinutes":-360,"abbreviation":"CST","rawFormat":"-06:00 Central Time - Belize City, San Pedro, Orange Walk, Belmopan"},{"name":"America/Chicago","alternativeName":"Central Time","group":["America/Chicago","America/Indiana/Knox","America/Indiana/Tell_City","America/Menominee","America/North_Dakota/Beulah","America/North_Dakota/Center","America/North_Dakota/New_Salem","CST6CDT","US/Central","US/Indiana-Starke","America/Knox_IN"],"continentCode":"NA","continentName":"North America","countryName":"United States","countryCode":"US","mainCities":["Chicago","Houston","San Antonio","Dallas"],"rawOffsetInMinutes":-360,"abbreviation":"CST","rawFormat":"-06:00 Central Time - Chicago, Houston, San Antonio, Dallas"},{"name":"America/Guatemala","alternativeName":"Central Time","group":["America/Guatemala"],"continentCode":"NA","continentName":"North America","countryName":"Guatemala","countryCode":"GT","mainCities":["Guatemala City","Villa Nueva","Mixco","Cobán"],"rawOffsetInMinutes":-360,"abbreviation":"CST","rawFormat":"-06:00 Central Time - Guatemala City, Villa Nueva, Mixco, Cobán"},{"name":"America/Managua","alternativeName":"Central Time","group":["America/Managua"],"continentCode":"NA","continentName":"North America","countryName":"Nicaragua","countryCode":"NI","mainCities":["Managua","León","Masaya","Chinandega"],"rawOffsetInMinutes":-360,"abbreviation":"CST","rawFormat":"-06:00 Central Time - Managua, León, Masaya, Chinandega"},{"name":"America/Mexico_City","alternativeName":"Central Time","group":["America/Bahia_Banderas","America/Chihuahua","America/Merida","America/Mexico_City","America/Monterrey","Mexico/General"],"continentCode":"NA","continentName":"North America","countryName":"Mexico","countryCode":"MX","mainCities":["Mexico City","Iztapalapa","Puebla","Ecatepec de Morelos"],"rawOffsetInMinutes":-360,"abbreviation":"CST","rawFormat":"-06:00 Central Time - Mexico City, Iztapalapa, Puebla, Ecatepec de Morelos"},{"name":"America/Matamoros","alternativeName":"Central Time","group":["America/Matamoros","America/Ojinaga"],"continentCode":"NA","continentName":"North America","countryName":"Mexico","countryCode":"MX","mainCities":["Reynosa","Heroica Matamoros","Nuevo Laredo","Ciudad Acuña"],"rawOffsetInMinutes":-360,"abbreviation":"CST","rawFormat":"-06:00 Central Time - Reynosa, Heroica Matamoros, Nuevo Laredo, Ciudad Acuña"},{"name":"America/Costa_Rica","alternativeName":"Central Time","group":["America/Costa_Rica"],"continentCode":"NA","continentName":"North America","countryName":"Costa Rica","countryCode":"CR","mainCities":["San José","Limón","San Francisco","Alajuela"],"rawOffsetInMinutes":-360,"abbreviation":"CST","rawFormat":"-06:00 Central Time - San José, Limón, San Francisco, Alajuela"},{"name":"America/El_Salvador","alternativeName":"Central Time","group":["America/El_Salvador"],"continentCode":"NA","continentName":"North America","countryName":"El Salvador","countryCode":"SV","mainCities":["San Salvador","Soyapango","San Miguel","Santa Ana"],"rawOffsetInMinutes":-360,"abbreviation":"CST","rawFormat":"-06:00 Central Time - San Salvador, Soyapango, San Miguel, Santa Ana"},{"name":"America/Regina","alternativeName":"Central Time","group":["America/Regina","America/Swift_Current","Canada/Saskatchewan"],"continentCode":"NA","continentName":"North America","countryName":"Canada","countryCode":"CA","mainCities":["Saskatoon","Regina","Prince Albert","Moose Jaw"],"rawOffsetInMinutes":-360,"abbreviation":"CST","rawFormat":"-06:00 Central Time - Saskatoon, Regina, Prince Albert, Moose Jaw"},{"name":"America/Tegucigalpa","alternativeName":"Central Time","group":["America/Tegucigalpa"],"continentCode":"NA","continentName":"North America","countryName":"Honduras","countryCode":"HN","mainCities":["Tegucigalpa","San Pedro Sula","La Ceiba","Choloma"],"rawOffsetInMinutes":-360,"abbreviation":"CST","rawFormat":"-06:00 Central Time - Tegucigalpa, San Pedro Sula, La Ceiba, Choloma"},{"name":"America/Winnipeg","alternativeName":"Central Time","group":["America/Rankin_Inlet","America/Resolute","America/Winnipeg","Canada/Central","America/Rainy_River"],"continentCode":"NA","continentName":"North America","countryName":"Canada","countryCode":"CA","mainCities":["Winnipeg","Brandon","Steinbach","Kenora"],"rawOffsetInMinutes":-360,"abbreviation":"CST","rawFormat":"-06:00 Central Time - Winnipeg, Brandon, Steinbach, Kenora"},{"name":"Pacific/Easter","alternativeName":"Easter Island Time","group":["Pacific/Easter","Chile/EasterIsland"],"continentCode":"SA","continentName":"South America","countryName":"Chile","countryCode":"CL","mainCities":["Easter"],"rawOffsetInMinutes":-360,"abbreviation":"EAST","rawFormat":"-06:00 Easter Island Time - Easter"},{"name":"Pacific/Galapagos","alternativeName":"Galapagos Time","group":["Pacific/Galapagos"],"continentCode":"SA","continentName":"South America","countryName":"Ecuador","countryCode":"EC","mainCities":["Galapagos"],"rawOffsetInMinutes":-360,"abbreviation":"GALT","rawFormat":"-06:00 Galapagos Time - Galapagos"},{"name":"America/Rio_Branco","alternativeName":"Acre Time","group":["America/Eirunepe","America/Rio_Branco","Brazil/Acre","America/Porto_Acre"],"continentCode":"SA","continentName":"South America","countryName":"Brazil","countryCode":"BR","mainCities":["Rio Branco","Cruzeiro do Sul","Tarauacá","Sena Madureira"],"rawOffsetInMinutes":-300,"abbreviation":"ACT","rawFormat":"-05:00 Acre Time - Rio Branco, Cruzeiro do Sul, Tarauacá, Sena Madureira"},{"name":"America/Bogota","alternativeName":"Colombia Time","group":["America/Bogota"],"continentCode":"SA","continentName":"South America","countryName":"Colombia","countryCode":"CO","mainCities":["Bogotá","Cali","Medellín","Barranquilla"],"rawOffsetInMinutes":-300,"abbreviation":"COT","rawFormat":"-05:00 Colombia Time - Bogotá, Cali, Medellín, Barranquilla"},{"name":"America/Havana","alternativeName":"Cuba Time","group":["America/Havana","Cuba"],"continentCode":"NA","continentName":"North America","countryName":"Cuba","countryCode":"CU","mainCities":["Havana","Santiago de Cuba","Camagüey","Holguín"],"rawOffsetInMinutes":-300,"abbreviation":"CST","rawFormat":"-05:00 Cuba Time - Havana, Santiago de Cuba, Camagüey, Holguín"},{"name":"America/Atikokan","alternativeName":"Eastern Time","group":["America/Atikokan"],"continentCode":"NA","continentName":"North America","countryName":"Canada","countryCode":"CA","mainCities":["Atikokan"],"rawOffsetInMinutes":-300,"abbreviation":"EST","rawFormat":"-05:00 Eastern Time - Atikokan"},{"name":"America/Cancun","alternativeName":"Eastern Time","group":["America/Cancun"],"continentCode":"NA","continentName":"North America","countryName":"Mexico","countryCode":"MX","mainCities":["Cancún","Chetumal","Playa del Carmen","Cozumel"],"rawOffsetInMinutes":-300,"abbreviation":"EST","rawFormat":"-05:00 Eastern Time - Cancún, Chetumal, Playa del Carmen, Cozumel"},{"name":"America/Cayman","alternativeName":"Eastern Time","group":["America/Cayman"],"continentCode":"NA","continentName":"North America","countryName":"Cayman Islands","countryCode":"KY","mainCities":["George Town","West Bay"],"rawOffsetInMinutes":-300,"abbreviation":"EST","rawFormat":"-05:00 Eastern Time - George Town, West Bay"},{"name":"America/Jamaica","alternativeName":"Eastern Time","group":["America/Jamaica","Jamaica"],"continentCode":"NA","continentName":"North America","countryName":"Jamaica","countryCode":"JM","mainCities":["Kingston","New Kingston","Spanish Town","Portmore"],"rawOffsetInMinutes":-300,"abbreviation":"EST","rawFormat":"-05:00 Eastern Time - Kingston, New Kingston, Spanish Town, Portmore"},{"name":"America/Nassau","alternativeName":"Eastern Time","group":["America/Nassau"],"continentCode":"NA","continentName":"North America","countryName":"Bahamas","countryCode":"BS","mainCities":["Nassau","Lucaya","Freeport","Killarney"],"rawOffsetInMinutes":-300,"abbreviation":"EST","rawFormat":"-05:00 Eastern Time - Nassau, Lucaya, Freeport, Killarney"},{"name":"America/New_York","alternativeName":"Eastern Time","group":["America/Detroit","America/Indiana/Indianapolis","America/Indiana/Marengo","America/Indiana/Petersburg","America/Indiana/Vevay","America/Indiana/Vincennes","America/Indiana/Winamac","America/Kentucky/Louisville","America/Kentucky/Monticello","America/New_York","US/Michigan","US/East-Indiana","America/Indianapolis","America/Fort_Wayne","America/Louisville","EST5EDT","US/Eastern"],"continentCode":"NA","continentName":"North America","countryName":"United States","countryCode":"US","mainCities":["New York City","Brooklyn","Queens","Philadelphia"],"rawOffsetInMinutes":-300,"abbreviation":"EST","rawFormat":"-05:00 Eastern Time - New York City, Brooklyn, Queens, Philadelphia"},{"name":"America/Panama","alternativeName":"Eastern Time","group":["America/Panama","EST","America/Atikokan","America/Cayman","America/Coral_Harbour"],"continentCode":"NA","continentName":"North America","countryName":"Panama","countryCode":"PA","mainCities":["Panamá","San Miguelito","Juan Díaz","David"],"rawOffsetInMinutes":-300,"abbreviation":"EST","rawFormat":"-05:00 Eastern Time - Panamá, San Miguelito, Juan Díaz, David"},{"name":"America/Port-au-Prince","alternativeName":"Eastern Time","group":["America/Port-au-Prince"],"continentCode":"NA","continentName":"North America","countryName":"Haiti","countryCode":"HT","mainCities":["Port-au-Prince","Carrefour","Delmas","Port-de-Paix"],"rawOffsetInMinutes":-300,"abbreviation":"EST","rawFormat":"-05:00 Eastern Time - Port-au-Prince, Carrefour, Delmas, Port-de-Paix"},{"name":"America/Grand_Turk","alternativeName":"Eastern Time","group":["America/Grand_Turk"],"continentCode":"NA","continentName":"North America","countryName":"Turks and Caicos Islands","countryCode":"TC","mainCities":["Providenciales","Cockburn Town"],"rawOffsetInMinutes":-300,"abbreviation":"EST","rawFormat":"-05:00 Eastern Time - Providenciales, Cockburn Town"},{"name":"America/Toronto","alternativeName":"Eastern Time","group":["America/Iqaluit","America/Toronto","America/Pangnirtung","Canada/Eastern","America/Nassau","America/Montreal","America/Nipigon","America/Thunder_Bay"],"continentCode":"NA","continentName":"North America","countryName":"Canada","countryCode":"CA","mainCities":["Toronto","Montréal","Ottawa","Mississauga"],"rawOffsetInMinutes":-300,"abbreviation":"EST","rawFormat":"-05:00 Eastern Time - Toronto, Montréal, Ottawa, Mississauga"},{"name":"America/Guayaquil","alternativeName":"Ecuador Time","group":["America/Guayaquil"],"continentCode":"SA","continentName":"South America","countryName":"Ecuador","countryCode":"EC","mainCities":["Quito","Guayaquil","Cuenca","Santo Domingo de los Colorados"],"rawOffsetInMinutes":-300,"abbreviation":"ECT","rawFormat":"-05:00 Ecuador Time - Quito, Guayaquil, Cuenca, Santo Domingo de los Colorados"},{"name":"America/Lima","alternativeName":"Peru Time","group":["America/Lima"],"continentCode":"SA","continentName":"South America","countryName":"Peru","countryCode":"PE","mainCities":["Lima","Callao","Arequipa","Trujillo"],"rawOffsetInMinutes":-300,"abbreviation":"PET","rawFormat":"-05:00 Peru Time - Lima, Callao, Arequipa, Trujillo"},{"name":"America/Manaus","alternativeName":"Amazon Time","group":["America/Boa_Vista","America/Campo_Grande","America/Cuiaba","America/Manaus","America/Porto_Velho","Brazil/West"],"continentCode":"SA","continentName":"South America","countryName":"Brazil","countryCode":"BR","mainCities":["Manaus","Campo Grande","Cuiabá","Porto Velho"],"rawOffsetInMinutes":-240,"abbreviation":"AMT","rawFormat":"-04:00 Amazon Time - Manaus, Campo Grande, Cuiabá, Porto Velho"},{"name":"America/St_Kitts","alternativeName":"Atlantic Time","group":["America/St_Kitts"],"continentCode":"NA","continentName":"North America","countryName":"Saint Kitts and Nevis","countryCode":"KN","mainCities":["Basseterre"],"rawOffsetInMinutes":-240,"abbreviation":"AST","rawFormat":"-04:00 Atlantic Time - Basseterre"},{"name":"America/Blanc-Sablon","alternativeName":"Atlantic Time","group":["America/Blanc-Sablon"],"continentCode":"NA","continentName":"North America","countryName":"Canada","countryCode":"CA","mainCities":["Blanc-Sablon"],"rawOffsetInMinutes":-240,"abbreviation":"AST","rawFormat":"-04:00 Atlantic Time - Blanc-Sablon"},{"name":"America/Montserrat","alternativeName":"Atlantic Time","group":["America/Montserrat"],"continentCode":"NA","continentName":"North America","countryName":"Montserrat","countryCode":"MS","mainCities":["Brades","Plymouth"],"rawOffsetInMinutes":-240,"abbreviation":"AST","rawFormat":"-04:00 Atlantic Time - Brades, Plymouth"},{"name":"America/Barbados","alternativeName":"Atlantic Time","group":["America/Barbados"],"continentCode":"NA","continentName":"North America","countryName":"Barbados","countryCode":"BB","mainCities":["Bridgetown"],"rawOffsetInMinutes":-240,"abbreviation":"AST","rawFormat":"-04:00 Atlantic Time - Bridgetown"},{"name":"America/Port_of_Spain","alternativeName":"Atlantic Time","group":["America/Port_of_Spain"],"continentCode":"NA","continentName":"North America","countryName":"Trinidad and Tobago","countryCode":"TT","mainCities":["Chaguanas","Mon Repos","San Fernando","Port of Spain"],"rawOffsetInMinutes":-240,"abbreviation":"AST","rawFormat":"-04:00 Atlantic Time - Chaguanas, Mon Repos, San Fernando, Port of Spain"},{"name":"America/Martinique","alternativeName":"Atlantic Time","group":["America/Martinique"],"continentCode":"NA","continentName":"North America","countryName":"Martinique","countryCode":"MQ","mainCities":["Fort-de-France","Le Lamentin","Le Robert","Sainte-Marie"],"rawOffsetInMinutes":-240,"abbreviation":"AST","rawFormat":"-04:00 Atlantic Time - Fort-de-France, Le Lamentin, Le Robert, Sainte-Marie"},{"name":"America/St_Lucia","alternativeName":"Atlantic Time","group":["America/St_Lucia"],"continentCode":"NA","continentName":"North America","countryName":"Saint Lucia","countryCode":"LC","mainCities":["Gros Islet","Castries"],"rawOffsetInMinutes":-240,"abbreviation":"AST","rawFormat":"-04:00 Atlantic Time - Gros Islet, Castries"},{"name":"America/St_Barthelemy","alternativeName":"Atlantic Time","group":["America/St_Barthelemy"],"continentCode":"NA","continentName":"North America","countryName":"Saint Barthelemy","countryCode":"BL","mainCities":["Gustavia"],"rawOffsetInMinutes":-240,"abbreviation":"AST","rawFormat":"-04:00 Atlantic Time - Gustavia"},{"name":"America/Halifax","alternativeName":"Atlantic Time","group":["America/Glace_Bay","America/Goose_Bay","America/Halifax","America/Moncton","Canada/Atlantic"],"continentCode":"NA","continentName":"North America","countryName":"Canada","countryCode":"CA","mainCities":["Halifax","Sydney","Dartmouth","Moncton"],"rawOffsetInMinutes":-240,"abbreviation":"AST","rawFormat":"-04:00 Atlantic Time - Halifax, Sydney, Dartmouth, Moncton"},{"name":"Atlantic/Bermuda","alternativeName":"Atlantic Time","group":["Atlantic/Bermuda"],"continentCode":"NA","continentName":"North America","countryName":"Bermuda","countryCode":"BM","mainCities":["Hamilton"],"rawOffsetInMinutes":-240,"abbreviation":"AST","rawFormat":"-04:00 Atlantic Time - Hamilton"},{"name":"America/St_Vincent","alternativeName":"Atlantic Time","group":["America/St_Vincent"],"continentCode":"NA","continentName":"North America","countryName":"Saint Vincent and the Grenadines","countryCode":"VC","mainCities":["Kingstown","Calliaqua"],"rawOffsetInMinutes":-240,"abbreviation":"AST","rawFormat":"-04:00 Atlantic Time - Kingstown, Calliaqua"},{"name":"America/Kralendijk","alternativeName":"Atlantic Time","group":["America/Kralendijk"],"continentCode":"NA","continentName":"North America","countryName":"Bonaire, Saint Eustatius and Saba ","countryCode":"BQ","mainCities":["Kralendijk"],"rawOffsetInMinutes":-240,"abbreviation":"AST","rawFormat":"-04:00 Atlantic Time - Kralendijk"},{"name":"America/Guadeloupe","alternativeName":"Atlantic Time","group":["America/Guadeloupe"],"continentCode":"NA","continentName":"North America","countryName":"Guadeloupe","countryCode":"GP","mainCities":["Les Abymes","Baie-Mahault","Le Gosier","Petit-Bourg"],"rawOffsetInMinutes":-240,"abbreviation":"AST","rawFormat":"-04:00 Atlantic Time - Les Abymes, Baie-Mahault, Le Gosier, Petit-Bourg"},{"name":"America/Marigot","alternativeName":"Atlantic Time","group":["America/Marigot"],"continentCode":"NA","continentName":"North America","countryName":"Saint Martin","countryCode":"MF","mainCities":["Marigot"],"rawOffsetInMinutes":-240,"abbreviation":"AST","rawFormat":"-04:00 Atlantic Time - Marigot"},{"name":"America/Aruba","alternativeName":"Atlantic Time","group":["America/Aruba"],"continentCode":"NA","continentName":"North America","countryName":"Aruba","countryCode":"AW","mainCities":["Oranjestad","Noord","Tanki Leendert","San Nicolas"],"rawOffsetInMinutes":-240,"abbreviation":"AST","rawFormat":"-04:00 Atlantic Time - Oranjestad, Noord, Tanki Leendert, San Nicolas"},{"name":"America/Lower_Princes","alternativeName":"Atlantic Time","group":["America/Lower_Princes"],"continentCode":"NA","continentName":"North America","countryName":"Sint Maarten","countryCode":"SX","mainCities":["Philipsburg"],"rawOffsetInMinutes":-240,"abbreviation":"AST","rawFormat":"-04:00 Atlantic Time - Philipsburg"},{"name":"America/Tortola","alternativeName":"Atlantic Time","group":["America/Tortola"],"continentCode":"NA","continentName":"North America","countryName":"British Virgin Islands","countryCode":"VG","mainCities":["Road Town"],"rawOffsetInMinutes":-240,"abbreviation":"AST","rawFormat":"-04:00 Atlantic Time - Road Town"},{"name":"America/Dominica","alternativeName":"Atlantic Time","group":["America/Dominica"],"continentCode":"NA","continentName":"North America","countryName":"Dominica","countryCode":"DM","mainCities":["Roseau"],"rawOffsetInMinutes":-240,"abbreviation":"AST","rawFormat":"-04:00 Atlantic Time - Roseau"},{"name":"America/St_Thomas","alternativeName":"Atlantic Time","group":["America/St_Thomas"],"continentCode":"NA","continentName":"North America","countryName":"U.S. Virgin Islands","countryCode":"VI","mainCities":["Saint Croix","Charlotte Amalie"],"rawOffsetInMinutes":-240,"abbreviation":"AST","rawFormat":"-04:00 Atlantic Time - Saint Croix, Charlotte Amalie"},{"name":"America/Grenada","alternativeName":"Atlantic Time","group":["America/Grenada"],"continentCode":"NA","continentName":"North America","countryName":"Grenada","countryCode":"GD","mainCities":["Saint George's"],"rawOffsetInMinutes":-240,"abbreviation":"AST","rawFormat":"-04:00 Atlantic Time - Saint George's"},{"name":"America/Antigua","alternativeName":"Atlantic Time","group":["America/Antigua"],"continentCode":"NA","continentName":"North America","countryName":"Antigua and Barbuda","countryCode":"AG","mainCities":["Saint John’s"],"rawOffsetInMinutes":-240,"abbreviation":"AST","rawFormat":"-04:00 Atlantic Time - Saint John’s"},{"name":"America/Puerto_Rico","alternativeName":"Atlantic Time","group":["America/Puerto_Rico","America/Virgin","America/Anguilla","America/Antigua","America/Aruba","America/Blanc-Sablon","America/Curacao","America/Dominica","America/Grenada","America/Guadeloupe","America/Kralendijk","America/Lower_Princes","America/Marigot","America/Montserrat","America/Port_of_Spain","America/St_Barthelemy","America/St_Kitts","America/St_Lucia","America/St_Thomas","America/St_Vincent","America/Tortola"],"continentCode":"NA","continentName":"North America","countryName":"Puerto Rico","countryCode":"PR","mainCities":["San Juan","Bayamón","Carolina","Ponce"],"rawOffsetInMinutes":-240,"abbreviation":"AST","rawFormat":"-04:00 Atlantic Time - San Juan, Bayamón, Carolina, Ponce"},{"name":"America/Santo_Domingo","alternativeName":"Atlantic Time","group":["America/Santo_Domingo"],"continentCode":"NA","continentName":"North America","countryName":"Dominican Republic","countryCode":"DO","mainCities":["Santo Domingo","Santiago de los Caballeros","Santo Domingo Oeste","Santo Domingo Este"],"rawOffsetInMinutes":-240,"abbreviation":"AST","rawFormat":"-04:00 Atlantic Time - Santo Domingo, Santiago de los Caballeros, Santo Domingo Oeste, Santo Domingo Este"},{"name":"America/Anguilla","alternativeName":"Atlantic Time","group":["America/Anguilla"],"continentCode":"NA","continentName":"North America","countryName":"Anguilla","countryCode":"AI","mainCities":["The Valley"],"rawOffsetInMinutes":-240,"abbreviation":"AST","rawFormat":"-04:00 Atlantic Time - The Valley"},{"name":"America/Thule","alternativeName":"Atlantic Time","group":["America/Thule"],"continentCode":"NA","continentName":"North America","countryName":"Greenland","countryCode":"GL","mainCities":["Thule"],"rawOffsetInMinutes":-240,"abbreviation":"AST","rawFormat":"-04:00 Atlantic Time - Thule"},{"name":"America/Curacao","alternativeName":"Atlantic Time","group":["America/Curacao"],"continentCode":"NA","continentName":"North America","countryName":"Curacao","countryCode":"CW","mainCities":["Willemstad","Bandariba"],"rawOffsetInMinutes":-240,"abbreviation":"AST","rawFormat":"-04:00 Atlantic Time - Willemstad, Bandariba"},{"name":"America/La_Paz","alternativeName":"Bolivia Time","group":["America/La_Paz"],"continentCode":"SA","continentName":"South America","countryName":"Bolivia","countryCode":"BO","mainCities":["La Paz","Santa Cruz de la Sierra","Cochabamba","Sucre"],"rawOffsetInMinutes":-240,"abbreviation":"BOT","rawFormat":"-04:00 Bolivia Time - La Paz, Santa Cruz de la Sierra, Cochabamba, Sucre"},{"name":"America/Santiago","alternativeName":"Chile Time","group":["America/Santiago","Chile/Continental"],"continentCode":"SA","continentName":"South America","countryName":"Chile","countryCode":"CL","mainCities":["Santiago","Puente Alto","Maipú","Antofagasta"],"rawOffsetInMinutes":-240,"abbreviation":"CLT","rawFormat":"-04:00 Chile Time - Santiago, Puente Alto, Maipú, Antofagasta"},{"name":"America/Guyana","alternativeName":"Guyana Time","group":["America/Guyana"],"continentCode":"SA","continentName":"South America","countryName":"Guyana","countryCode":"GY","mainCities":["Georgetown","Linden","New Amsterdam"],"rawOffsetInMinutes":-240,"abbreviation":"GYT","rawFormat":"-04:00 Guyana Time - Georgetown, Linden, New Amsterdam"},{"name":"America/Caracas","alternativeName":"Venezuela Time","group":["America/Caracas"],"continentCode":"SA","continentName":"South America","countryName":"Venezuela","countryCode":"VE","mainCities":["Caracas","Maracaibo","Valencia","Barquisimeto"],"rawOffsetInMinutes":-240,"abbreviation":"VET","rawFormat":"-04:00 Venezuela Time - Caracas, Maracaibo, Valencia, Barquisimeto"},{"name":"America/St_Johns","alternativeName":"Newfoundland Time","group":["America/St_Johns","Canada/Newfoundland"],"continentCode":"NA","continentName":"North America","countryName":"Canada","countryCode":"CA","mainCities":["St. John's","Mount Pearl","Paradise","Corner Brook"],"rawOffsetInMinutes":-210,"abbreviation":"NST","rawFormat":"-03:30 Newfoundland Time - St. John's, Mount Pearl, Paradise, Corner Brook"},{"name":"America/Argentina/Buenos_Aires","alternativeName":"Argentina Time","group":["America/Argentina/Buenos_Aires","America/Argentina/Catamarca","America/Argentina/Cordoba","America/Argentina/Jujuy","America/Argentina/La_Rioja","America/Argentina/Mendoza","America/Argentina/Rio_Gallegos","America/Argentina/Salta","America/Argentina/San_Juan","America/Argentina/San_Luis","America/Argentina/Tucuman","America/Argentina/Ushuaia","America/Buenos_Aires","America/Catamarca","America/Argentina/ComodRivadavia","America/Cordoba","America/Rosario","America/Jujuy","America/Mendoza"],"continentCode":"SA","continentName":"South America","countryName":"Argentina","countryCode":"AR","mainCities":["Buenos Aires","Córdoba","Rosario","Mar del Plata"],"rawOffsetInMinutes":-180,"abbreviation":"ART","rawFormat":"-03:00 Argentina Time - Buenos Aires, Córdoba, Rosario, Mar del Plata"},{"name":"America/Sao_Paulo","alternativeName":"Brasilia Time","group":["America/Araguaina","America/Bahia","America/Belem","America/Fortaleza","America/Maceio","America/Recife","America/Santarem","America/Sao_Paulo","Brazil/East"],"continentCode":"SA","continentName":"South America","countryName":"Brazil","countryCode":"BR","mainCities":["São Paulo","Rio de Janeiro","Belo Horizonte","Salvador"],"rawOffsetInMinutes":-180,"abbreviation":"BRT","rawFormat":"-03:00 Brasilia Time - São Paulo, Rio de Janeiro, Belo Horizonte, Salvador"},{"name":"Antarctica/Palmer","alternativeName":"Chile Time","group":["Antarctica/Palmer","Antarctica/Rothera"],"continentCode":"AN","continentName":"Antarctica","countryName":"Antarctica","countryCode":"AQ","mainCities":["Palmer","Rothera"],"rawOffsetInMinutes":-180,"abbreviation":"CLT","rawFormat":"-03:00 Chile Time - Palmer, Rothera"},{"name":"America/Punta_Arenas","alternativeName":"Chile Time","group":["America/Coyhaique","America/Punta_Arenas"],"continentCode":"SA","continentName":"South America","countryName":"Chile","countryCode":"CL","mainCities":["Punta Arenas","Coyhaique","Puerto Natales","Puerto Aysén"],"rawOffsetInMinutes":-180,"abbreviation":"CLT","rawFormat":"-03:00 Chile Time - Punta Arenas, Coyhaique, Puerto Natales, Puerto Aysén"},{"name":"Atlantic/Stanley","alternativeName":"Falkland Islands Time","group":["Atlantic/Stanley"],"continentCode":"SA","continentName":"South America","countryName":"Falkland Islands","countryCode":"FK","mainCities":["Stanley"],"rawOffsetInMinutes":-180,"abbreviation":"FKST","rawFormat":"-03:00 Falkland Islands Time - Stanley"},{"name":"America/Cayenne","alternativeName":"French Guiana Time","group":["America/Cayenne"],"continentCode":"SA","continentName":"South America","countryName":"French Guiana","countryCode":"GF","mainCities":["Cayenne","Matoury","Saint-Laurent-du-Maroni","Kourou"],"rawOffsetInMinutes":-180,"abbreviation":"GFT","rawFormat":"-03:00 French Guiana Time - Cayenne, Matoury, Saint-Laurent-du-Maroni, Kourou"},{"name":"America/Asuncion","alternativeName":"Paraguay Time","group":["America/Asuncion"],"continentCode":"SA","continentName":"South America","countryName":"Paraguay","countryCode":"PY","mainCities":["Asunción","Ciudad del Este","San Lorenzo","Capiatá"],"rawOffsetInMinutes":-180,"abbreviation":"PYT","rawFormat":"-03:00 Paraguay Time - Asunción, Ciudad del Este, San Lorenzo, Capiatá"},{"name":"America/Miquelon","alternativeName":"St. Pierre & Miquelon Time","group":["America/Miquelon"],"continentCode":"NA","continentName":"North America","countryName":"Saint Pierre and Miquelon","countryCode":"PM","mainCities":["Saint-Pierre"],"rawOffsetInMinutes":-180,"abbreviation":"PM","rawFormat":"-03:00 St. Pierre & Miquelon Time - Saint-Pierre"},{"name":"America/Paramaribo","alternativeName":"Suriname Time","group":["America/Paramaribo"],"continentCode":"SA","continentName":"South America","countryName":"Suriname","countryCode":"SR","mainCities":["Paramaribo","Blauwgrond","Rainville","Flora"],"rawOffsetInMinutes":-180,"abbreviation":"SRT","rawFormat":"-03:00 Suriname Time - Paramaribo, Blauwgrond, Rainville, Flora"},{"name":"America/Montevideo","alternativeName":"Uruguay Time","group":["America/Montevideo"],"continentCode":"SA","continentName":"South America","countryName":"Uruguay","countryCode":"UY","mainCities":["Montevideo","Salto","Paysandú","Las Piedras"],"rawOffsetInMinutes":-180,"abbreviation":"UYT","rawFormat":"-03:00 Uruguay Time - Montevideo, Salto, Paysandú, Las Piedras"},{"name":"America/Noronha","alternativeName":"Fernando de Noronha Time","group":["America/Noronha","Brazil/DeNoronha"],"continentCode":"SA","continentName":"South America","countryName":"Brazil","countryCode":"BR","mainCities":["Noronha"],"rawOffsetInMinutes":-120,"abbreviation":"FNT","rawFormat":"-02:00 Fernando de Noronha Time - Noronha"},{"name":"America/Nuuk","alternativeName":"Greenland Time","group":["America/Nuuk","America/Scoresbysund","America/Godthab"],"continentCode":"NA","continentName":"North America","countryName":"Greenland","countryCode":"GL","mainCities":["Nuuk","Scoresbysund"],"rawOffsetInMinutes":-120,"abbreviation":"GMT-2","rawFormat":"-02:00 Greenland Time - Nuuk, Scoresbysund"},{"name":"Atlantic/South_Georgia","alternativeName":"South Georgia Time","group":["Atlantic/South_Georgia"],"continentCode":"AN","continentName":"Antarctica","countryName":"South Georgia and the South Sandwich Islands","countryCode":"GS","mainCities":["Grytviken"],"rawOffsetInMinutes":-120,"abbreviation":"GST","rawFormat":"-02:00 South Georgia Time - Grytviken"},{"name":"Atlantic/Azores","alternativeName":"Azores Time","group":["Atlantic/Azores"],"continentCode":"EU","continentName":"Europe","countryName":"Portugal","countryCode":"PT","mainCities":["Ponta Delgada"],"rawOffsetInMinutes":-60,"abbreviation":"AZOT","rawFormat":"-01:00 Azores Time - Ponta Delgada"},{"name":"Atlantic/Cape_Verde","alternativeName":"Cape Verde Time","group":["Atlantic/Cape_Verde"],"continentCode":"AF","continentName":"Africa","countryName":"Cabo Verde","countryCode":"CV","mainCities":["Praia","Mindelo","Espargos","Assomada"],"rawOffsetInMinutes":-60,"abbreviation":"CVT","rawFormat":"-01:00 Cape Verde Time - Praia, Mindelo, Espargos, Assomada"},{"name":"Africa/Abidjan","alternativeName":"Greenwich Mean Time","group":["Africa/Abidjan","Iceland","Africa/Accra","Africa/Bamako","Africa/Banjul","Africa/Conakry","Africa/Dakar","Africa/Freetown","Africa/Lome","Africa/Nouakchott","Africa/Ouagadougou","Atlantic/Reykjavik","Atlantic/St_Helena","Africa/Timbuktu"],"continentCode":"AF","continentName":"Africa","countryName":"Ivory Coast","countryCode":"CI","mainCities":["Abidjan","Abobo","Bouaké","Korhogo"],"rawOffsetInMinutes":0,"abbreviation":"GMT","rawFormat":"+00:00 Greenwich Mean Time - Abidjan, Abobo, Bouaké, Korhogo"},{"name":"Africa/Bamako","alternativeName":"Greenwich Mean Time","group":["Africa/Bamako"],"continentCode":"AF","continentName":"Africa","countryName":"Mali","countryCode":"ML","mainCities":["Bamako","Sikasso","Koutiala","Ségou"],"rawOffsetInMinutes":0,"abbreviation":"GMT","rawFormat":"+00:00 Greenwich Mean Time - Bamako, Sikasso, Koutiala, Ségou"},{"name":"Africa/Bissau","alternativeName":"Greenwich Mean Time","group":["Africa/Bissau"],"continentCode":"AF","continentName":"Africa","countryName":"Guinea-Bissau","countryCode":"GW","mainCities":["Bissau","Gabú","Bafatá","Xitole"],"rawOffsetInMinutes":0,"abbreviation":"GMT","rawFormat":"+00:00 Greenwich Mean Time - Bissau, Gabú, Bafatá, Xitole"},{"name":"Africa/Conakry","alternativeName":"Greenwich Mean Time","group":["Africa/Conakry"],"continentCode":"AF","continentName":"Africa","countryName":"Guinea","countryCode":"GN","mainCities":["Conakry","Camayenne","Nzérékoré","Kankan"],"rawOffsetInMinutes":0,"abbreviation":"GMT","rawFormat":"+00:00 Greenwich Mean Time - Conakry, Camayenne, Nzérékoré, Kankan"},{"name":"Africa/Dakar","alternativeName":"Greenwich Mean Time","group":["Africa/Dakar"],"continentCode":"AF","continentName":"Africa","countryName":"Senegal","countryCode":"SN","mainCities":["Dakar","Touba","Pikine","Guédiawaye"],"rawOffsetInMinutes":0,"abbreviation":"GMT","rawFormat":"+00:00 Greenwich Mean Time - Dakar, Touba, Pikine, Guédiawaye"},{"name":"America/Danmarkshavn","alternativeName":"Greenwich Mean Time","group":["America/Danmarkshavn"],"continentCode":"NA","continentName":"North America","countryName":"Greenland","countryCode":"GL","mainCities":["Danmarkshavn"],"rawOffsetInMinutes":0,"abbreviation":"GMT","rawFormat":"+00:00 Greenwich Mean Time - Danmarkshavn"},{"name":"Europe/Isle_of_Man","alternativeName":"Greenwich Mean Time","group":["Europe/Isle_of_Man"],"continentCode":"EU","continentName":"Europe","countryName":"Isle of Man","countryCode":"IM","mainCities":["Douglas"],"rawOffsetInMinutes":0,"abbreviation":"GMT","rawFormat":"+00:00 Greenwich Mean Time - Douglas"},{"name":"Europe/Dublin","alternativeName":"Greenwich Mean Time","group":["Europe/Dublin","Eire"],"continentCode":"EU","continentName":"Europe","countryName":"Ireland","countryCode":"IE","mainCities":["Dublin","South Dublin","Cork","Limerick"],"rawOffsetInMinutes":0,"abbreviation":"GMT","rawFormat":"+00:00 Greenwich Mean Time - Dublin, South Dublin, Cork, Limerick"},{"name":"Africa/Freetown","alternativeName":"Greenwich Mean Time","group":["Africa/Freetown"],"continentCode":"AF","continentName":"Africa","countryName":"Sierra Leone","countryCode":"SL","mainCities":["Freetown","Bo","Kenema","Koidu"],"rawOffsetInMinutes":0,"abbreviation":"GMT","rawFormat":"+00:00 Greenwich Mean Time - Freetown, Bo, Kenema, Koidu"},{"name":"Atlantic/St_Helena","alternativeName":"Greenwich Mean Time","group":["Atlantic/St_Helena"],"continentCode":"AF","continentName":"Africa","countryName":"Saint Helena","countryCode":"SH","mainCities":["Jamestown"],"rawOffsetInMinutes":0,"abbreviation":"GMT","rawFormat":"+00:00 Greenwich Mean Time - Jamestown"},{"name":"Africa/Accra","alternativeName":"Greenwich Mean Time","group":["Africa/Accra"],"continentCode":"AF","continentName":"Africa","countryName":"Ghana","countryCode":"GH","mainCities":["Kumasi","Accra","Tamale","Takoradi"],"rawOffsetInMinutes":0,"abbreviation":"GMT","rawFormat":"+00:00 Greenwich Mean Time - Kumasi, Accra, Tamale, Takoradi"},{"name":"Africa/Lome","alternativeName":"Greenwich Mean Time","group":["Africa/Lome"],"continentCode":"AF","continentName":"Africa","countryName":"Togo","countryCode":"TG","mainCities":["Lomé","Sokodé","Kara","Atakpamé"],"rawOffsetInMinutes":0,"abbreviation":"GMT","rawFormat":"+00:00 Greenwich Mean Time - Lomé, Sokodé, Kara, Atakpamé"},{"name":"Europe/London","alternativeName":"Greenwich Mean Time","group":["Europe/London","GB","GB-Eire","Europe/Guernsey","Europe/Isle_of_Man","Europe/Jersey","Europe/Belfast"],"continentCode":"EU","continentName":"Europe","countryName":"United Kingdom","countryCode":"GB","mainCities":["London","Birmingham","Glasgow","Manchester"],"rawOffsetInMinutes":0,"abbreviation":"GMT","rawFormat":"+00:00 Greenwich Mean Time - London, Birmingham, Glasgow, Manchester"},{"name":"Africa/Monrovia","alternativeName":"Greenwich Mean Time","group":["Africa/Monrovia"],"continentCode":"AF","continentName":"Africa","countryName":"Liberia","countryCode":"LR","mainCities":["Monrovia","Gbarnga","Buchanan","Ganta"],"rawOffsetInMinutes":0,"abbreviation":"GMT","rawFormat":"+00:00 Greenwich Mean Time - Monrovia, Gbarnga, Buchanan, Ganta"},{"name":"Africa/Nouakchott","alternativeName":"Greenwich Mean Time","group":["Africa/Nouakchott"],"continentCode":"AF","continentName":"Africa","countryName":"Mauritania","countryCode":"MR","mainCities":["Nouakchott","Nouadhibou","Kiffa","Dar Naim"],"rawOffsetInMinutes":0,"abbreviation":"GMT","rawFormat":"+00:00 Greenwich Mean Time - Nouakchott, Nouadhibou, Kiffa, Dar Naim"},{"name":"Africa/Ouagadougou","alternativeName":"Greenwich Mean Time","group":["Africa/Ouagadougou"],"continentCode":"AF","continentName":"Africa","countryName":"Burkina Faso","countryCode":"BF","mainCities":["Ouagadougou","Bobo-Dioulasso","Koudougou","Saaba"],"rawOffsetInMinutes":0,"abbreviation":"GMT","rawFormat":"+00:00 Greenwich Mean Time - Ouagadougou, Bobo-Dioulasso, Koudougou, Saaba"},{"name":"Atlantic/Reykjavik","alternativeName":"Greenwich Mean Time","group":["Atlantic/Reykjavik"],"continentCode":"EU","continentName":"Europe","countryName":"Iceland","countryCode":"IS","mainCities":["Reykjavík","Kópavogur","Hafnarfjörður","Reykjanesbær"],"rawOffsetInMinutes":0,"abbreviation":"GMT","rawFormat":"+00:00 Greenwich Mean Time - Reykjavík, Kópavogur, Hafnarfjörður, Reykjanesbær"},{"name":"Europe/Jersey","alternativeName":"Greenwich Mean Time","group":["Europe/Jersey"],"continentCode":"EU","continentName":"Europe","countryName":"Jersey","countryCode":"JE","mainCities":["Saint Helier"],"rawOffsetInMinutes":0,"abbreviation":"GMT","rawFormat":"+00:00 Greenwich Mean Time - Saint Helier"},{"name":"Europe/Guernsey","alternativeName":"Greenwich Mean Time","group":["Europe/Guernsey"],"continentCode":"EU","continentName":"Europe","countryName":"Guernsey","countryCode":"GG","mainCities":["Saint Peter Port"],"rawOffsetInMinutes":0,"abbreviation":"GMT","rawFormat":"+00:00 Greenwich Mean Time - Saint Peter Port"},{"name":"Africa/Banjul","alternativeName":"Greenwich Mean Time","group":["Africa/Banjul"],"continentCode":"AF","continentName":"Africa","countryName":"Gambia","countryCode":"GM","mainCities":["Serekunda","Brikama","Bununka Kunda","Sukuta"],"rawOffsetInMinutes":0,"abbreviation":"GMT","rawFormat":"+00:00 Greenwich Mean Time - Serekunda, Brikama, Bununka Kunda, Sukuta"},{"name":"Africa/Sao_Tome","alternativeName":"Greenwich Mean Time","group":["Africa/Sao_Tome"],"continentCode":"AF","continentName":"Africa","countryName":"Sao Tome and Principe","countryCode":"ST","mainCities":["São Tomé"],"rawOffsetInMinutes":0,"abbreviation":"GMT","rawFormat":"+00:00 Greenwich Mean Time - São Tomé"},{"name":"Antarctica/Troll","alternativeName":"Greenwich Mean Time","group":["Antarctica/Troll"],"continentCode":"AN","continentName":"Antarctica","countryName":"Antarctica","countryCode":"AQ","mainCities":["Troll"],"rawOffsetInMinutes":0,"abbreviation":"GMT","rawFormat":"+00:00 Greenwich Mean Time - Troll"},{"name":"Africa/Casablanca","alternativeName":"Western European Time","group":["Africa/Casablanca"],"continentCode":"AF","continentName":"Africa","countryName":"Morocco","countryCode":"MA","mainCities":["Casablanca","Rabat","Fes","Tangier"],"rawOffsetInMinutes":0,"abbreviation":"WET","rawFormat":"+00:00 Western European Time - Casablanca, Rabat, Fes, Tangier"},{"name":"Africa/El_Aaiun","alternativeName":"Western European Time","group":["Africa/El_Aaiun"],"continentCode":"AF","continentName":"Africa","countryName":"Western Sahara","countryCode":"EH","mainCities":["Laayoune","Dakhla","Boujdour"],"rawOffsetInMinutes":0,"abbreviation":"WET","rawFormat":"+00:00 Western European Time - Laayoune, Dakhla, Boujdour"},{"name":"Atlantic/Canary","alternativeName":"Western European Time","group":["Atlantic/Canary"],"continentCode":"EU","continentName":"Europe","countryName":"Spain","countryCode":"ES","mainCities":["Las Palmas de Gran Canaria","Santa Cruz de Tenerife","La Laguna","Telde"],"rawOffsetInMinutes":0,"abbreviation":"WET","rawFormat":"+00:00 Western European Time - Las Palmas de Gran Canaria, Santa Cruz de Tenerife, La Laguna, Telde"},{"name":"Europe/Lisbon","alternativeName":"Western European Time","group":["Atlantic/Madeira","Europe/Lisbon","Portugal","WET"],"continentCode":"EU","continentName":"Europe","countryName":"Portugal","countryCode":"PT","mainCities":["Lisbon","Porto","Amadora","Braga"],"rawOffsetInMinutes":0,"abbreviation":"WET","rawFormat":"+00:00 Western European Time - Lisbon, Porto, Amadora, Braga"},{"name":"Atlantic/Faroe","alternativeName":"Western European Time","group":["Atlantic/Faroe","Atlantic/Faeroe"],"continentCode":"EU","continentName":"Europe","countryName":"Faroe Islands","countryCode":"FO","mainCities":["Tórshavn"],"rawOffsetInMinutes":0,"abbreviation":"WET","rawFormat":"+00:00 Western European Time - Tórshavn"},{"name":"Africa/Windhoek","alternativeName":"Central Africa Time","group":["Africa/Windhoek"],"continentCode":"AF","continentName":"Africa","countryName":"Namibia","countryCode":"NA","mainCities":["Windhoek","Rundu","Walvis Bay","Swakopmund"],"rawOffsetInMinutes":60,"abbreviation":"CAT","rawFormat":"+01:00 Central Africa Time - Windhoek, Rundu, Walvis Bay, Swakopmund"},{"name":"Africa/Algiers","alternativeName":"Central European Time","group":["Africa/Algiers"],"continentCode":"AF","continentName":"Africa","countryName":"Algeria","countryCode":"DZ","mainCities":["Algiers","Oran","Constantine","Annaba"],"rawOffsetInMinutes":60,"abbreviation":"CET","rawFormat":"+01:00 Central European Time - Algiers, Oran, Constantine, Annaba"},{"name":"Europe/Andorra","alternativeName":"Central European Time","group":["Europe/Andorra"],"continentCode":"EU","continentName":"Europe","countryName":"Andorra","countryCode":"AD","mainCities":["Andorra la Vella","les Escaldes"],"rawOffsetInMinutes":60,"abbreviation":"CET","rawFormat":"+01:00 Central European Time - Andorra la Vella, les Escaldes"},{"name":"Europe/Belgrade","alternativeName":"Central European Time","group":["Europe/Belgrade","Europe/Ljubljana","Europe/Podgorica","Europe/Sarajevo","Europe/Skopje","Europe/Zagreb"],"continentCode":"EU","continentName":"Europe","countryName":"Serbia","countryCode":"RS","mainCities":["Belgrade","Niš","Novi Sad","Zemun"],"rawOffsetInMinutes":60,"abbreviation":"CET","rawFormat":"+01:00 Central European Time - Belgrade, Niš, Novi Sad, Zemun"},{"name":"Europe/Berlin","alternativeName":"Central European Time","group":["Europe/Berlin","Europe/Busingen","Arctic/Longyearbyen","Europe/Copenhagen","Europe/Oslo","Europe/Stockholm","Atlantic/Jan_Mayen"],"continentCode":"EU","continentName":"Europe","countryName":"Germany","countryCode":"DE","mainCities":["Berlin","Hamburg","Munich","Köln"],"rawOffsetInMinutes":60,"abbreviation":"CET","rawFormat":"+01:00 Central European Time - Berlin, Hamburg, Munich, Köln"},{"name":"Europe/Bratislava","alternativeName":"Central European Time","group":["Europe/Bratislava"],"continentCode":"EU","continentName":"Europe","countryName":"Slovakia","countryCode":"SK","mainCities":["Bratislava","Košice","Petržalka","Nitra"],"rawOffsetInMinutes":60,"abbreviation":"CET","rawFormat":"+01:00 Central European Time - Bratislava, Košice, Petržalka, Nitra"},{"name":"Europe/Brussels","alternativeName":"Central European Time","group":["Europe/Brussels","CET","MET","Europe/Amsterdam","Europe/Luxembourg"],"continentCode":"EU","continentName":"Europe","countryName":"Belgium","countryCode":"BE","mainCities":["Brussels","Antwerpen","Gent","Charleroi"],"rawOffsetInMinutes":60,"abbreviation":"CET","rawFormat":"+01:00 Central European Time - Brussels, Antwerpen, Gent, Charleroi"},{"name":"Europe/Budapest","alternativeName":"Central European Time","group":["Europe/Budapest"],"continentCode":"EU","continentName":"Europe","countryName":"Hungary","countryCode":"HU","mainCities":["Budapest","Debrecen","Szeged","Miskolc"],"rawOffsetInMinutes":60,"abbreviation":"CET","rawFormat":"+01:00 Central European Time - Budapest, Debrecen, Szeged, Miskolc"},{"name":"Europe/Copenhagen","alternativeName":"Central European Time","group":["Europe/Copenhagen"],"continentCode":"EU","continentName":"Europe","countryName":"Denmark","countryCode":"DK","mainCities":["Copenhagen","Århus","Odense","Aalborg"],"rawOffsetInMinutes":60,"abbreviation":"CET","rawFormat":"+01:00 Central European Time - Copenhagen, Århus, Odense, Aalborg"},{"name":"Europe/Gibraltar","alternativeName":"Central European Time","group":["Europe/Gibraltar"],"continentCode":"EU","continentName":"Europe","countryName":"Gibraltar","countryCode":"GI","mainCities":["Gibraltar"],"rawOffsetInMinutes":60,"abbreviation":"CET","rawFormat":"+01:00 Central European Time - Gibraltar"},{"name":"Europe/Ljubljana","alternativeName":"Central European Time","group":["Europe/Ljubljana"],"continentCode":"EU","continentName":"Europe","countryName":"Slovenia","countryCode":"SI","mainCities":["Ljubljana","Maribor","Celje","Kranj"],"rawOffsetInMinutes":60,"abbreviation":"CET","rawFormat":"+01:00 Central European Time - Ljubljana, Maribor, Celje, Kranj"},{"name":"Arctic/Longyearbyen","alternativeName":"Central European Time","group":["Arctic/Longyearbyen"],"continentCode":"EU","continentName":"Europe","countryName":"Svalbard and Jan Mayen","countryCode":"SJ","mainCities":["Longyearbyen"],"rawOffsetInMinutes":60,"abbreviation":"CET","rawFormat":"+01:00 Central European Time - Longyearbyen"},{"name":"Europe/Luxembourg","alternativeName":"Central European Time","group":["Europe/Luxembourg"],"continentCode":"EU","continentName":"Europe","countryName":"Luxembourg","countryCode":"LU","mainCities":["Luxembourg","Esch-sur-Alzette","Dudelange"],"rawOffsetInMinutes":60,"abbreviation":"CET","rawFormat":"+01:00 Central European Time - Luxembourg, Esch-sur-Alzette, Dudelange"},{"name":"Europe/Madrid","alternativeName":"Central European Time","group":["Africa/Ceuta","Europe/Madrid"],"continentCode":"EU","continentName":"Europe","countryName":"Spain","countryCode":"ES","mainCities":["Madrid","Barcelona","Valencia","Zaragoza"],"rawOffsetInMinutes":60,"abbreviation":"CET","rawFormat":"+01:00 Central European Time - Madrid, Barcelona, Valencia, Zaragoza"},{"name":"Europe/Monaco","alternativeName":"Central European Time","group":["Europe/Monaco"],"continentCode":"EU","continentName":"Europe","countryName":"Monaco","countryCode":"MC","mainCities":["Monaco","Monte-Carlo"],"rawOffsetInMinutes":60,"abbreviation":"CET","rawFormat":"+01:00 Central European Time - Monaco, Monte-Carlo"},{"name":"Europe/Oslo","alternativeName":"Central European Time","group":["Europe/Oslo"],"continentCode":"EU","continentName":"Europe","countryName":"Norway","countryCode":"NO","mainCities":["Oslo","Bergen","Trondheim","Stavanger"],"rawOffsetInMinutes":60,"abbreviation":"CET","rawFormat":"+01:00 Central European Time - Oslo, Bergen, Trondheim, Stavanger"},{"name":"Europe/Paris","alternativeName":"Central European Time","group":["Europe/Paris","Europe/Monaco"],"continentCode":"EU","continentName":"Europe","countryName":"France","countryCode":"FR","mainCities":["Paris","Marseille","Lyon","Toulouse"],"rawOffsetInMinutes":60,"abbreviation":"CET","rawFormat":"+01:00 Central European Time - Paris, Marseille, Lyon, Toulouse"},{"name":"Europe/Podgorica","alternativeName":"Central European Time","group":["Europe/Podgorica"],"continentCode":"EU","continentName":"Europe","countryName":"Montenegro","countryCode":"ME","mainCities":["Podgorica","Nikšić","Herceg Novi","Pljevlja"],"rawOffsetInMinutes":60,"abbreviation":"CET","rawFormat":"+01:00 Central European Time - Podgorica, Nikšić, Herceg Novi, Pljevlja"},{"name":"Europe/Prague","alternativeName":"Central European Time","group":["Europe/Prague","Europe/Bratislava"],"continentCode":"EU","continentName":"Europe","countryName":"Czechia","countryCode":"CZ","mainCities":["Prague","Brno","Ostrava","Pilsen"],"rawOffsetInMinutes":60,"abbreviation":"CET","rawFormat":"+01:00 Central European Time - Prague, Brno, Ostrava, Pilsen"},{"name":"Europe/Rome","alternativeName":"Central European Time","group":["Europe/Rome","Europe/San_Marino","Europe/Vatican"],"continentCode":"EU","continentName":"Europe","countryName":"Italy","countryCode":"IT","mainCities":["Rome","Milan","Naples","Turin"],"rawOffsetInMinutes":60,"abbreviation":"CET","rawFormat":"+01:00 Central European Time - Rome, Milan, Naples, Turin"},{"name":"Europe/Amsterdam","alternativeName":"Central European Time","group":["Europe/Amsterdam"],"continentCode":"EU","continentName":"Europe","countryName":"The Netherlands","countryCode":"NL","mainCities":["Rotterdam","Amsterdam","The Hague","Utrecht"],"rawOffsetInMinutes":60,"abbreviation":"CET","rawFormat":"+01:00 Central European Time - Rotterdam, Amsterdam, The Hague, Utrecht"},{"name":"Europe/San_Marino","alternativeName":"Central European Time","group":["Europe/San_Marino"],"continentCode":"EU","continentName":"Europe","countryName":"San Marino","countryCode":"SM","mainCities":["San Marino"],"rawOffsetInMinutes":60,"abbreviation":"CET","rawFormat":"+01:00 Central European Time - San Marino"},{"name":"Europe/Malta","alternativeName":"Central European Time","group":["Europe/Malta"],"continentCode":"EU","continentName":"Europe","countryName":"Malta","countryCode":"MT","mainCities":["San Pawl il-Baħar","Birkirkara","Mosta","Sliema"],"rawOffsetInMinutes":60,"abbreviation":"CET","rawFormat":"+01:00 Central European Time - San Pawl il-Baħar, Birkirkara, Mosta, Sliema"},{"name":"Europe/Sarajevo","alternativeName":"Central European Time","group":["Europe/Sarajevo"],"continentCode":"EU","continentName":"Europe","countryName":"Bosnia and Herzegovina","countryCode":"BA","mainCities":["Sarajevo","Banja Luka","Zenica","Tuzla"],"rawOffsetInMinutes":60,"abbreviation":"CET","rawFormat":"+01:00 Central European Time - Sarajevo, Banja Luka, Zenica, Tuzla"},{"name":"Europe/Skopje","alternativeName":"Central European Time","group":["Europe/Skopje"],"continentCode":"EU","continentName":"Europe","countryName":"North Macedonia","countryCode":"MK","mainCities":["Skopje","Kumanovo","Prilep","Bitola"],"rawOffsetInMinutes":60,"abbreviation":"CET","rawFormat":"+01:00 Central European Time - Skopje, Kumanovo, Prilep, Bitola"},{"name":"Europe/Stockholm","alternativeName":"Central European Time","group":["Europe/Stockholm"],"continentCode":"EU","continentName":"Europe","countryName":"Sweden","countryCode":"SE","mainCities":["Stockholm","Göteborg","Malmö","Uppsala"],"rawOffsetInMinutes":60,"abbreviation":"CET","rawFormat":"+01:00 Central European Time - Stockholm, Göteborg, Malmö, Uppsala"},{"name":"Europe/Tirane","alternativeName":"Central European Time","group":["Europe/Tirane"],"continentCode":"EU","continentName":"Europe","countryName":"Albania","countryCode":"AL","mainCities":["Tirana","Durrës","Vlorë","Elbasan"],"rawOffsetInMinutes":60,"abbreviation":"CET","rawFormat":"+01:00 Central European Time - Tirana, Durrës, Vlorë, Elbasan"},{"name":"Africa/Tunis","alternativeName":"Central European Time","group":["Africa/Tunis"],"continentCode":"AF","continentName":"Africa","countryName":"Tunisia","countryCode":"TN","mainCities":["Tunis","Sfax","Sousse","Kairouan"],"rawOffsetInMinutes":60,"abbreviation":"CET","rawFormat":"+01:00 Central European Time - Tunis, Sfax, Sousse, Kairouan"},{"name":"Europe/Vaduz","alternativeName":"Central European Time","group":["Europe/Vaduz"],"continentCode":"EU","continentName":"Europe","countryName":"Liechtenstein","countryCode":"LI","mainCities":["Vaduz"],"rawOffsetInMinutes":60,"abbreviation":"CET","rawFormat":"+01:00 Central European Time - Vaduz"},{"name":"Europe/Vatican","alternativeName":"Central European Time","group":["Europe/Vatican"],"continentCode":"EU","continentName":"Europe","countryName":"Vatican","countryCode":"VA","mainCities":["Vatican City"],"rawOffsetInMinutes":60,"abbreviation":"CET","rawFormat":"+01:00 Central European Time - Vatican City"},{"name":"Europe/Vienna","alternativeName":"Central European Time","group":["Europe/Vienna"],"continentCode":"EU","continentName":"Europe","countryName":"Austria","countryCode":"AT","mainCities":["Vienna","Graz","Linz","Favoriten"],"rawOffsetInMinutes":60,"abbreviation":"CET","rawFormat":"+01:00 Central European Time - Vienna, Graz, Linz, Favoriten"},{"name":"Europe/Warsaw","alternativeName":"Central European Time","group":["Europe/Warsaw","Poland"],"continentCode":"EU","continentName":"Europe","countryName":"Poland","countryCode":"PL","mainCities":["Warsaw","Łódź","Kraków","Wrocław"],"rawOffsetInMinutes":60,"abbreviation":"CET","rawFormat":"+01:00 Central European Time - Warsaw, Łódź, Kraków, Wrocław"},{"name":"Europe/Zagreb","alternativeName":"Central European Time","group":["Europe/Zagreb"],"continentCode":"EU","continentName":"Europe","countryName":"Croatia","countryCode":"HR","mainCities":["Zagreb","Split","Rijeka","Osijek"],"rawOffsetInMinutes":60,"abbreviation":"CET","rawFormat":"+01:00 Central European Time - Zagreb, Split, Rijeka, Osijek"},{"name":"Europe/Zurich","alternativeName":"Central European Time","group":["Europe/Zurich","Europe/Busingen","Europe/Vaduz"],"continentCode":"EU","continentName":"Europe","countryName":"Switzerland","countryCode":"CH","mainCities":["Zürich","Genève","Basel","Lausanne"],"rawOffsetInMinutes":60,"abbreviation":"CET","rawFormat":"+01:00 Central European Time - Zürich, Genève, Basel, Lausanne"},{"name":"Africa/Bangui","alternativeName":"West Africa Time","group":["Africa/Bangui"],"continentCode":"AF","continentName":"Africa","countryName":"Central African Republic","countryCode":"CF","mainCities":["Bangui","Bimbo","Bégoua","Carnot"],"rawOffsetInMinutes":60,"abbreviation":"WAT","rawFormat":"+01:00 West Africa Time - Bangui, Bimbo, Bégoua, Carnot"},{"name":"Africa/Malabo","alternativeName":"West Africa Time","group":["Africa/Malabo"],"continentCode":"AF","continentName":"Africa","countryName":"Equatorial Guinea","countryCode":"GQ","mainCities":["Bata","Malabo","Ebebiyin"],"rawOffsetInMinutes":60,"abbreviation":"WAT","rawFormat":"+01:00 West Africa Time - Bata, Malabo, Ebebiyin"},{"name":"Africa/Brazzaville","alternativeName":"West Africa Time","group":["Africa/Brazzaville"],"continentCode":"AF","continentName":"Africa","countryName":"Republic of the Congo","countryCode":"CG","mainCities":["Brazzaville","Pointe-Noire","Dolisie","Nkayi"],"rawOffsetInMinutes":60,"abbreviation":"WAT","rawFormat":"+01:00 West Africa Time - Brazzaville, Pointe-Noire, Dolisie, Nkayi"},{"name":"Africa/Porto-Novo","alternativeName":"West Africa Time","group":["Africa/Porto-Novo"],"continentCode":"AF","continentName":"Africa","countryName":"Benin","countryCode":"BJ","mainCities":["Cotonou","Abomey-Calavi","Porto-Novo","Parakou"],"rawOffsetInMinutes":60,"abbreviation":"WAT","rawFormat":"+01:00 West Africa Time - Cotonou, Abomey-Calavi, Porto-Novo, Parakou"},{"name":"Africa/Douala","alternativeName":"West Africa Time","group":["Africa/Douala"],"continentCode":"AF","continentName":"Africa","countryName":"Cameroon","countryCode":"CM","mainCities":["Douala","Yaoundé","Bamenda","Bafoussam"],"rawOffsetInMinutes":60,"abbreviation":"WAT","rawFormat":"+01:00 West Africa Time - Douala, Yaoundé, Bamenda, Bafoussam"},{"name":"Africa/Kinshasa","alternativeName":"West Africa Time","group":["Africa/Kinshasa"],"continentCode":"AF","continentName":"Africa","countryName":"Democratic Republic of the Congo","countryCode":"CD","mainCities":["Kinshasa","Kikwit","Masina","Mbandaka"],"rawOffsetInMinutes":60,"abbreviation":"WAT","rawFormat":"+01:00 West Africa Time - Kinshasa, Kikwit, Masina, Mbandaka"},{"name":"Africa/Lagos","alternativeName":"West Africa Time","group":["Africa/Lagos","Africa/Bangui","Africa/Brazzaville","Africa/Douala","Africa/Kinshasa","Africa/Libreville","Africa/Luanda","Africa/Malabo","Africa/Niamey","Africa/Porto-Novo"],"continentCode":"AF","continentName":"Africa","countryName":"Nigeria","countryCode":"NG","mainCities":["Lagos","Kano","Ibadan","Abuja"],"rawOffsetInMinutes":60,"abbreviation":"WAT","rawFormat":"+01:00 West Africa Time - Lagos, Kano, Ibadan, Abuja"},{"name":"Africa/Libreville","alternativeName":"West Africa Time","group":["Africa/Libreville"],"continentCode":"AF","continentName":"Africa","countryName":"Gabon","countryCode":"GA","mainCities":["Libreville","Port-Gentil","Franceville","Owendo"],"rawOffsetInMinutes":60,"abbreviation":"WAT","rawFormat":"+01:00 West Africa Time - Libreville, Port-Gentil, Franceville, Owendo"},{"name":"Africa/Luanda","alternativeName":"West Africa Time","group":["Africa/Luanda"],"continentCode":"AF","continentName":"Africa","countryName":"Angola","countryCode":"AO","mainCities":["Luanda","Lubango","Huambo","Benguela"],"rawOffsetInMinutes":60,"abbreviation":"WAT","rawFormat":"+01:00 West Africa Time - Luanda, Lubango, Huambo, Benguela"},{"name":"Africa/Ndjamena","alternativeName":"West Africa Time","group":["Africa/Ndjamena"],"continentCode":"AF","continentName":"Africa","countryName":"Chad","countryCode":"TD","mainCities":["N'Djamena","Moundou","Abéché","Sarh"],"rawOffsetInMinutes":60,"abbreviation":"WAT","rawFormat":"+01:00 West Africa Time - N'Djamena, Moundou, Abéché, Sarh"},{"name":"Africa/Niamey","alternativeName":"West Africa Time","group":["Africa/Niamey"],"continentCode":"AF","continentName":"Africa","countryName":"Niger","countryCode":"NE","mainCities":["Niamey","Maradi","Zinder","Tahoua"],"rawOffsetInMinutes":60,"abbreviation":"WAT","rawFormat":"+01:00 West Africa Time - Niamey, Maradi, Zinder, Tahoua"},{"name":"Africa/Bujumbura","alternativeName":"Central Africa Time","group":["Africa/Bujumbura"],"continentCode":"AF","continentName":"Africa","countryName":"Burundi","countryCode":"BI","mainCities":["Bujumbura","Gitega","Ngozi","Rumonge"],"rawOffsetInMinutes":120,"abbreviation":"CAT","rawFormat":"+02:00 Central Africa Time - Bujumbura, Gitega, Ngozi, Rumonge"},{"name":"Africa/Gaborone","alternativeName":"Central Africa Time","group":["Africa/Gaborone"],"continentCode":"AF","continentName":"Africa","countryName":"Botswana","countryCode":"BW","mainCities":["Gaborone","Francistown","Mogoditshane","Maun"],"rawOffsetInMinutes":120,"abbreviation":"CAT","rawFormat":"+02:00 Central Africa Time - Gaborone, Francistown, Mogoditshane, Maun"},{"name":"Africa/Harare","alternativeName":"Central Africa Time","group":["Africa/Harare"],"continentCode":"AF","continentName":"Africa","countryName":"Zimbabwe","countryCode":"ZW","mainCities":["Harare","Bulawayo","Chitungwiza","Mutare"],"rawOffsetInMinutes":120,"abbreviation":"CAT","rawFormat":"+02:00 Central Africa Time - Harare, Bulawayo, Chitungwiza, Mutare"},{"name":"Africa/Juba","alternativeName":"Central Africa Time","group":["Africa/Juba"],"continentCode":"AF","continentName":"Africa","countryName":"South Sudan","countryCode":"SS","mainCities":["Juba","Winejok","Yei","Malakal"],"rawOffsetInMinutes":120,"abbreviation":"CAT","rawFormat":"+02:00 Central Africa Time - Juba, Winejok, Yei, Malakal"},{"name":"Africa/Khartoum","alternativeName":"Central Africa Time","group":["Africa/Khartoum"],"continentCode":"AF","continentName":"Africa","countryName":"Sudan","countryCode":"SD","mainCities":["Khartoum","Omdurman","Khartoum North","Nyala"],"rawOffsetInMinutes":120,"abbreviation":"CAT","rawFormat":"+02:00 Central Africa Time - Khartoum, Omdurman, Khartoum North, Nyala"},{"name":"Africa/Kigali","alternativeName":"Central Africa Time","group":["Africa/Kigali"],"continentCode":"AF","continentName":"Africa","countryName":"Rwanda","countryCode":"RW","mainCities":["Kigali","Gisenyi","Musanze","Nyagatare"],"rawOffsetInMinutes":120,"abbreviation":"CAT","rawFormat":"+02:00 Central Africa Time - Kigali, Gisenyi, Musanze, Nyagatare"},{"name":"Africa/Blantyre","alternativeName":"Central Africa Time","group":["Africa/Blantyre"],"continentCode":"AF","continentName":"Africa","countryName":"Malawi","countryCode":"MW","mainCities":["Lilongwe","Blantyre","Mzuzu","Zomba"],"rawOffsetInMinutes":120,"abbreviation":"CAT","rawFormat":"+02:00 Central Africa Time - Lilongwe, Blantyre, Mzuzu, Zomba"},{"name":"Africa/Lubumbashi","alternativeName":"Central Africa Time","group":["Africa/Lubumbashi"],"continentCode":"AF","continentName":"Africa","countryName":"Democratic Republic of the Congo","countryCode":"CD","mainCities":["Lubumbashi","Mbuji-Mayi","Kananga","Kisangani"],"rawOffsetInMinutes":120,"abbreviation":"CAT","rawFormat":"+02:00 Central Africa Time - Lubumbashi, Mbuji-Mayi, Kananga, Kisangani"},{"name":"Africa/Lusaka","alternativeName":"Central Africa Time","group":["Africa/Lusaka"],"continentCode":"AF","continentName":"Africa","countryName":"Zambia","countryCode":"ZM","mainCities":["Lusaka","Kitwe","Ndola","Chipata"],"rawOffsetInMinutes":120,"abbreviation":"CAT","rawFormat":"+02:00 Central Africa Time - Lusaka, Kitwe, Ndola, Chipata"},{"name":"Africa/Maputo","alternativeName":"Central Africa Time","group":["Africa/Maputo","Africa/Blantyre","Africa/Bujumbura","Africa/Gaborone","Africa/Harare","Africa/Kigali","Africa/Lubumbashi","Africa/Lusaka"],"continentCode":"AF","continentName":"Africa","countryName":"Mozambique","countryCode":"MZ","mainCities":["Maputo","Matola","Nampula","Beira"],"rawOffsetInMinutes":120,"abbreviation":"CAT","rawFormat":"+02:00 Central Africa Time - Maputo, Matola, Nampula, Beira"},{"name":"Europe/Athens","alternativeName":"Eastern European Time","group":["Europe/Athens","EET"],"continentCode":"EU","continentName":"Europe","countryName":"Greece","countryCode":"GR","mainCities":["Athens","Thessaloníki","Pátra","Piraeus"],"rawOffsetInMinutes":120,"abbreviation":"EET","rawFormat":"+02:00 Eastern European Time - Athens, Thessaloníki, Pátra, Piraeus"},{"name":"Asia/Beirut","alternativeName":"Eastern European Time","group":["Asia/Beirut"],"continentCode":"AS","continentName":"Asia","countryName":"Lebanon","countryCode":"LB","mainCities":["Beirut","Ra’s Bayrūt","Tripoli","Sidon"],"rawOffsetInMinutes":120,"abbreviation":"EET","rawFormat":"+02:00 Eastern European Time - Beirut, Ra’s Bayrūt, Tripoli, Sidon"},{"name":"Europe/Bucharest","alternativeName":"Eastern European Time","group":["Europe/Bucharest"],"continentCode":"EU","continentName":"Europe","countryName":"Romania","countryCode":"RO","mainCities":["Bucharest","Sector 3","Iaşi","Sector 6"],"rawOffsetInMinutes":120,"abbreviation":"EET","rawFormat":"+02:00 Eastern European Time - Bucharest, Sector 3, Iaşi, Sector 6"},{"name":"Africa/Cairo","alternativeName":"Eastern European Time","group":["Africa/Cairo","Egypt"],"continentCode":"AF","continentName":"Africa","countryName":"Egypt","countryCode":"EG","mainCities":["Cairo","Alexandria","Giza","Shubrā al Khaymah"],"rawOffsetInMinutes":120,"abbreviation":"EET","rawFormat":"+02:00 Eastern European Time - Cairo, Alexandria, Giza, Shubrā al Khaymah"},{"name":"Europe/Chisinau","alternativeName":"Eastern European Time","group":["Europe/Chisinau","Europe/Tiraspol"],"continentCode":"EU","continentName":"Europe","countryName":"Moldova","countryCode":"MD","mainCities":["Chisinau","Tiraspol","Bălţi","Bender"],"rawOffsetInMinutes":120,"abbreviation":"EET","rawFormat":"+02:00 Eastern European Time - Chisinau, Tiraspol, Bălţi, Bender"},{"name":"Asia/Hebron","alternativeName":"Eastern European Time","group":["Asia/Gaza","Asia/Hebron"],"continentCode":"AS","continentName":"Asia","countryName":"Palestinian Territory","countryCode":"PS","mainCities":["East Jerusalem","Gaza","Khān Yūnis","Jabālyā"],"rawOffsetInMinutes":120,"abbreviation":"EET","rawFormat":"+02:00 Eastern European Time - East Jerusalem, Gaza, Khān Yūnis, Jabālyā"},{"name":"Europe/Helsinki","alternativeName":"Eastern European Time","group":["Europe/Helsinki","Europe/Mariehamn"],"continentCode":"EU","continentName":"Europe","countryName":"Finland","countryCode":"FI","mainCities":["Helsinki","Espoo","Tampere","Vantaa"],"rawOffsetInMinutes":120,"abbreviation":"EET","rawFormat":"+02:00 Eastern European Time - Helsinki, Espoo, Tampere, Vantaa"},{"name":"Europe/Kaliningrad","alternativeName":"Eastern European Time","group":["Europe/Kaliningrad"],"continentCode":"EU","continentName":"Europe","countryName":"Russia","countryCode":"RU","mainCities":["Kaliningrad","Chernyakhovsk","Sovetsk","Baltiysk"],"rawOffsetInMinutes":120,"abbreviation":"EET","rawFormat":"+02:00 Eastern European Time - Kaliningrad, Chernyakhovsk, Sovetsk, Baltiysk"},{"name":"Europe/Kyiv","alternativeName":"Eastern European Time","group":["Europe/Kyiv","Europe/Uzhgorod","Europe/Zaporozhye","Europe/Kiev"],"continentCode":"EU","continentName":"Europe","countryName":"Ukraine","countryCode":"UA","mainCities":["Kyiv","Kharkiv","Odesa","Dnipro"],"rawOffsetInMinutes":120,"abbreviation":"EET","rawFormat":"+02:00 Eastern European Time - Kyiv, Kharkiv, Odesa, Dnipro"},{"name":"Europe/Mariehamn","alternativeName":"Eastern European Time","group":["Europe/Mariehamn"],"continentCode":"EU","continentName":"Europe","countryName":"Aland Islands","countryCode":"AX","mainCities":["Mariehamn"],"rawOffsetInMinutes":120,"abbreviation":"EET","rawFormat":"+02:00 Eastern European Time - Mariehamn"},{"name":"Asia/Nicosia","alternativeName":"Eastern European Time","group":["Asia/Famagusta","Asia/Nicosia","Europe/Nicosia"],"continentCode":"EU","continentName":"Europe","countryName":"Cyprus","countryCode":"CY","mainCities":["Nicosia","Limassol","Larnaca","Stróvolos"],"rawOffsetInMinutes":120,"abbreviation":"EET","rawFormat":"+02:00 Eastern European Time - Nicosia, Limassol, Larnaca, Stróvolos"},{"name":"Europe/Riga","alternativeName":"Eastern European Time","group":["Europe/Riga"],"continentCode":"EU","continentName":"Europe","countryName":"Latvia","countryCode":"LV","mainCities":["Riga","Daugavpils","Liepāja","Jelgava"],"rawOffsetInMinutes":120,"abbreviation":"EET","rawFormat":"+02:00 Eastern European Time - Riga, Daugavpils, Liepāja, Jelgava"},{"name":"Europe/Sofia","alternativeName":"Eastern European Time","group":["Europe/Sofia"],"continentCode":"EU","continentName":"Europe","countryName":"Bulgaria","countryCode":"BG","mainCities":["Sofia","Plovdiv","Varna","Burgas"],"rawOffsetInMinutes":120,"abbreviation":"EET","rawFormat":"+02:00 Eastern European Time - Sofia, Plovdiv, Varna, Burgas"},{"name":"Europe/Tallinn","alternativeName":"Eastern European Time","group":["Europe/Tallinn"],"continentCode":"EU","continentName":"Europe","countryName":"Estonia","countryCode":"EE","mainCities":["Tallinn","Tartu","Narva","Pärnu"],"rawOffsetInMinutes":120,"abbreviation":"EET","rawFormat":"+02:00 Eastern European Time - Tallinn, Tartu, Narva, Pärnu"},{"name":"Africa/Tripoli","alternativeName":"Eastern European Time","group":["Africa/Tripoli","Libya"],"continentCode":"AF","continentName":"Africa","countryName":"Libya","countryCode":"LY","mainCities":["Tripoli","Benghazi","Misratah","Zliten"],"rawOffsetInMinutes":120,"abbreviation":"EET","rawFormat":"+02:00 Eastern European Time - Tripoli, Benghazi, Misratah, Zliten"},{"name":"Europe/Vilnius","alternativeName":"Eastern European Time","group":["Europe/Vilnius"],"continentCode":"EU","continentName":"Europe","countryName":"Lithuania","countryCode":"LT","mainCities":["Vilnius","Kaunas","Klaipėda","Šiauliai"],"rawOffsetInMinutes":120,"abbreviation":"EET","rawFormat":"+02:00 Eastern European Time - Vilnius, Kaunas, Klaipėda, Šiauliai"},{"name":"Asia/Jerusalem","alternativeName":"Israel Time","group":["Asia/Jerusalem","Israel","Asia/Tel_Aviv"],"continentCode":"AS","continentName":"Asia","countryName":"Israel","countryCode":"IL","mainCities":["Jerusalem","Tel Aviv","West Jerusalem","Haifa"],"rawOffsetInMinutes":120,"abbreviation":"IST","rawFormat":"+02:00 Israel Time - Jerusalem, Tel Aviv, West Jerusalem, Haifa"},{"name":"Africa/Johannesburg","alternativeName":"South Africa Time","group":["Africa/Johannesburg","Africa/Maseru","Africa/Mbabane"],"continentCode":"AF","continentName":"Africa","countryName":"South Africa","countryCode":"ZA","mainCities":["Johannesburg","Cape Town","Durban","Pretoria"],"rawOffsetInMinutes":120,"abbreviation":"SAST","rawFormat":"+02:00 South Africa Time - Johannesburg, Cape Town, Durban, Pretoria"},{"name":"Africa/Mbabane","alternativeName":"South Africa Time","group":["Africa/Mbabane"],"continentCode":"AF","continentName":"Africa","countryName":"Eswatini","countryCode":"SZ","mainCities":["Manzini","Mbabane","Lobamba"],"rawOffsetInMinutes":120,"abbreviation":"SAST","rawFormat":"+02:00 South Africa Time - Manzini, Mbabane, Lobamba"},{"name":"Africa/Maseru","alternativeName":"South Africa Time","group":["Africa/Maseru"],"continentCode":"AF","continentName":"Africa","countryName":"Lesotho","countryCode":"LS","mainCities":["Maseru","Maputsoe","Mohale's Hoek","Mafeteng"],"rawOffsetInMinutes":120,"abbreviation":"SAST","rawFormat":"+02:00 South Africa Time - Maseru, Maputsoe, Mohale's Hoek, Mafeteng"},{"name":"Asia/Kuwait","alternativeName":"Arabian Time","group":["Asia/Kuwait"],"continentCode":"AS","continentName":"Asia","countryName":"Kuwait","countryCode":"KW","mainCities":["Al Aḩmadī","Ḩawallī","As Sālimīyah","Şabāḩ as Sālim"],"rawOffsetInMinutes":180,"abbreviation":"AST","rawFormat":"+03:00 Arabian Time - Al Aḩmadī, Ḩawallī, As Sālimīyah, Şabāḩ as Sālim"},{"name":"Asia/Bahrain","alternativeName":"Arabian Time","group":["Asia/Bahrain"],"continentCode":"AS","continentName":"Asia","countryName":"Bahrain","countryCode":"BH","mainCities":["Al Muharraq","Manama","Madīnat Ḩamad","Ar Rifā‘"],"rawOffsetInMinutes":180,"abbreviation":"AST","rawFormat":"+03:00 Arabian Time - Al Muharraq, Manama, Madīnat Ḩamad, Ar Rifā‘"},{"name":"Asia/Baghdad","alternativeName":"Arabian Time","group":["Asia/Baghdad"],"continentCode":"AS","continentName":"Asia","countryName":"Iraq","countryCode":"IQ","mainCities":["Baghdad","Al Mawşil al Jadīdah","Al Başrah al Qadīmah","Mosul"],"rawOffsetInMinutes":180,"abbreviation":"AST","rawFormat":"+03:00 Arabian Time - Baghdad, Al Mawşil al Jadīdah, Al Başrah al Qadīmah, Mosul"},{"name":"Asia/Qatar","alternativeName":"Arabian Time","group":["Asia/Qatar","Asia/Bahrain"],"continentCode":"AS","continentName":"Asia","countryName":"Qatar","countryCode":"QA","mainCities":["Doha","Ar Rayyān","Al Maţār al ‘Atīq","Al Manşūrah"],"rawOffsetInMinutes":180,"abbreviation":"AST","rawFormat":"+03:00 Arabian Time - Doha, Ar Rayyān, Al Maţār al ‘Atīq, Al Manşūrah"},{"name":"Asia/Riyadh","alternativeName":"Arabian Time","group":["Asia/Riyadh","Antarctica/Syowa","Asia/Aden","Asia/Kuwait"],"continentCode":"AS","continentName":"Asia","countryName":"Saudi Arabia","countryCode":"SA","mainCities":["Jeddah","Riyadh","Makkah","Madinah"],"rawOffsetInMinutes":180,"abbreviation":"AST","rawFormat":"+03:00 Arabian Time - Jeddah, Riyadh, Makkah, Madinah"},{"name":"Asia/Aden","alternativeName":"Arabian Time","group":["Asia/Aden"],"continentCode":"AS","continentName":"Asia","countryName":"Yemen","countryCode":"YE","mainCities":["Sanaa","Aden","Taiz","Ibb"],"rawOffsetInMinutes":180,"abbreviation":"AST","rawFormat":"+03:00 Arabian Time - Sanaa, Aden, Taiz, Ibb"},{"name":"Asia/Amman","alternativeName":"Asia/Amman","group":["Asia/Amman"],"continentCode":"AS","continentName":"Asia","countryName":"Jordan","countryCode":"JO","mainCities":["Amman","Zarqa","Irbid","Russeifa"],"rawOffsetInMinutes":180,"abbreviation":"GMT+3","rawFormat":"+03:00 Asia/Amman - Amman, Zarqa, Irbid, Russeifa"},{"name":"Asia/Damascus","alternativeName":"Asia/Damascus","group":["Asia/Damascus"],"continentCode":"AS","continentName":"Asia","countryName":"Syria","countryCode":"SY","mainCities":["Aleppo","Damascus","Homs","Latakia"],"rawOffsetInMinutes":180,"abbreviation":"GMT+3","rawFormat":"+03:00 Asia/Damascus - Aleppo, Damascus, Homs, Latakia"},{"name":"Africa/Addis_Ababa","alternativeName":"East Africa Time","group":["Africa/Addis_Ababa"],"continentCode":"AF","continentName":"Africa","countryName":"Ethiopia","countryCode":"ET","mainCities":["Addis Ababa","Jijiga","Gonder","Mek'ele"],"rawOffsetInMinutes":180,"abbreviation":"EAT","rawFormat":"+03:00 East Africa Time - Addis Ababa, Jijiga, Gonder, Mek'ele"},{"name":"Indian/Antananarivo","alternativeName":"East Africa Time","group":["Indian/Antananarivo"],"continentCode":"AF","continentName":"Africa","countryName":"Madagascar","countryCode":"MG","mainCities":["Antananarivo","Toamasina","Antsirabe","Mahajanga"],"rawOffsetInMinutes":180,"abbreviation":"EAT","rawFormat":"+03:00 East Africa Time - Antananarivo, Toamasina, Antsirabe, Mahajanga"},{"name":"Africa/Asmara","alternativeName":"East Africa Time","group":["Africa/Asmara"],"continentCode":"AF","continentName":"Africa","countryName":"Eritrea","countryCode":"ER","mainCities":["Asmara","Keren","Himora","Massawa"],"rawOffsetInMinutes":180,"abbreviation":"EAT","rawFormat":"+03:00 East Africa Time - Asmara, Keren, Himora, Massawa"},{"name":"Africa/Dar_es_Salaam","alternativeName":"East Africa Time","group":["Africa/Dar_es_Salaam"],"continentCode":"AF","continentName":"Africa","countryName":"Tanzania","countryCode":"TZ","mainCities":["Dar es Salaam","Mwanza","Dodoma","Zanzibar"],"rawOffsetInMinutes":180,"abbreviation":"EAT","rawFormat":"+03:00 East Africa Time - Dar es Salaam, Mwanza, Dodoma, Zanzibar"},{"name":"Africa/Djibouti","alternativeName":"East Africa Time","group":["Africa/Djibouti"],"continentCode":"AF","continentName":"Africa","countryName":"Djibouti","countryCode":"DJ","mainCities":["Djibouti","Ali Sabih","Dikhil","Tadjoura"],"rawOffsetInMinutes":180,"abbreviation":"EAT","rawFormat":"+03:00 East Africa Time - Djibouti, Ali Sabih, Dikhil, Tadjoura"},{"name":"Africa/Kampala","alternativeName":"East Africa Time","group":["Africa/Kampala"],"continentCode":"AF","continentName":"Africa","countryName":"Uganda","countryCode":"UG","mainCities":["Kampala","Nansana","Kira","Bunamwaya"],"rawOffsetInMinutes":180,"abbreviation":"EAT","rawFormat":"+03:00 East Africa Time - Kampala, Nansana, Kira, Bunamwaya"},{"name":"Indian/Mayotte","alternativeName":"East Africa Time","group":["Indian/Mayotte"],"continentCode":"AF","continentName":"Africa","countryName":"Mayotte","countryCode":"YT","mainCities":["Mamoudzou","Koungou","Labattoir","Kaouéni"],"rawOffsetInMinutes":180,"abbreviation":"EAT","rawFormat":"+03:00 East Africa Time - Mamoudzou, Koungou, Labattoir, Kaouéni"},{"name":"Africa/Mogadishu","alternativeName":"East Africa Time","group":["Africa/Mogadishu"],"continentCode":"AF","continentName":"Africa","countryName":"Somalia","countryCode":"SO","mainCities":["Mogadishu","Borama","Hargeysa","Berbera"],"rawOffsetInMinutes":180,"abbreviation":"EAT","rawFormat":"+03:00 East Africa Time - Mogadishu, Borama, Hargeysa, Berbera"},{"name":"Indian/Comoro","alternativeName":"East Africa Time","group":["Indian/Comoro"],"continentCode":"AF","continentName":"Africa","countryName":"Comoros","countryCode":"KM","mainCities":["Moroni","Moutsamoudou","Fomboni"],"rawOffsetInMinutes":180,"abbreviation":"EAT","rawFormat":"+03:00 East Africa Time - Moroni, Moutsamoudou, Fomboni"},{"name":"Africa/Nairobi","alternativeName":"East Africa Time","group":["Africa/Nairobi","Africa/Addis_Ababa","Africa/Asmara","Africa/Dar_es_Salaam","Africa/Djibouti","Africa/Kampala","Africa/Mogadishu","Indian/Antananarivo","Indian/Comoro","Indian/Mayotte","Africa/Asmera"],"continentCode":"AF","continentName":"Africa","countryName":"Kenya","countryCode":"KE","mainCities":["Nairobi","Kakamega","Mombasa","Nakuru"],"rawOffsetInMinutes":180,"abbreviation":"EAT","rawFormat":"+03:00 East Africa Time - Nairobi, Kakamega, Mombasa, Nakuru"},{"name":"Europe/Minsk","alternativeName":"Moscow Time","group":["Europe/Minsk"],"continentCode":"EU","continentName":"Europe","countryName":"Belarus","countryCode":"BY","mainCities":["Minsk","Homyel'","Hrodna","Vitebsk"],"rawOffsetInMinutes":180,"abbreviation":"MSK","rawFormat":"+03:00 Moscow Time - Minsk, Homyel', Hrodna, Vitebsk"},{"name":"Europe/Moscow","alternativeName":"Moscow Time","group":["Europe/Kirov","Europe/Moscow","Europe/Volgograd","W-SU"],"continentCode":"EU","continentName":"Europe","countryName":"Russia","countryCode":"RU","mainCities":["Moscow","Saint Petersburg","Nizhniy Novgorod","Kazan"],"rawOffsetInMinutes":180,"abbreviation":"MSK","rawFormat":"+03:00 Moscow Time - Moscow, Saint Petersburg, Nizhniy Novgorod, Kazan"},{"name":"Europe/Simferopol","alternativeName":"Moscow Time","group":["Europe/Simferopol"],"continentCode":"EU","continentName":"Europe","countryName":"Ukraine","countryCode":"UA","mainCities":["Sevastopol","Simferopol","Kerch","Yevpatoriya"],"rawOffsetInMinutes":180,"abbreviation":"MSK","rawFormat":"+03:00 Moscow Time - Sevastopol, Simferopol, Kerch, Yevpatoriya"},{"name":"Antarctica/Syowa","alternativeName":"Syowa Time","group":["Antarctica/Syowa"],"continentCode":"AN","continentName":"Antarctica","countryName":"Antarctica","countryCode":"AQ","mainCities":["Syowa"],"rawOffsetInMinutes":180,"abbreviation":"SYOT","rawFormat":"+03:00 Syowa Time - Syowa"},{"name":"Europe/Istanbul","alternativeName":"Turkey Time","group":["Europe/Istanbul","Turkey","Asia/Istanbul"],"continentCode":"AS","continentName":"Asia","countryName":"Turkey","countryCode":"TR","mainCities":["Istanbul","Ankara","Bursa","İzmir"],"rawOffsetInMinutes":180,"abbreviation":"TRT","rawFormat":"+03:00 Turkey Time - Istanbul, Ankara, Bursa, İzmir"},{"name":"Asia/Tehran","alternativeName":"Iran Time","group":["Asia/Tehran","Iran"],"continentCode":"AS","continentName":"Asia","countryName":"Iran","countryCode":"IR","mainCities":["Tehran","Mashhad","Isfahan","Karaj"],"rawOffsetInMinutes":210,"abbreviation":"IRST","rawFormat":"+03:30 Iran Time - Tehran, Mashhad, Isfahan, Karaj"},{"name":"Asia/Yerevan","alternativeName":"Armenia Time","group":["Asia/Yerevan"],"continentCode":"AS","continentName":"Asia","countryName":"Armenia","countryCode":"AM","mainCities":["Yerevan","Malatia-Sebastia","Shengavit","Nor Nork"],"rawOffsetInMinutes":240,"abbreviation":"AMT","rawFormat":"+04:00 Armenia Time - Yerevan, Malatia-Sebastia, Shengavit, Nor Nork"},{"name":"Asia/Baku","alternativeName":"Azerbaijan Time","group":["Asia/Baku"],"continentCode":"AS","continentName":"Asia","countryName":"Azerbaijan","countryCode":"AZ","mainCities":["Baku","Sumqayıt","Ganja","Lankaran"],"rawOffsetInMinutes":240,"abbreviation":"AZT","rawFormat":"+04:00 Azerbaijan Time - Baku, Sumqayıt, Ganja, Lankaran"},{"name":"Asia/Tbilisi","alternativeName":"Georgia Time","group":["Asia/Tbilisi"],"continentCode":"AS","continentName":"Asia","countryName":"Georgia","countryCode":"GE","mainCities":["Tbilisi","Batumi","Kutaisi","Rustavi"],"rawOffsetInMinutes":240,"abbreviation":"GET","rawFormat":"+04:00 Georgia Time - Tbilisi, Batumi, Kutaisi, Rustavi"},{"name":"Asia/Dubai","alternativeName":"Gulf Time","group":["Asia/Dubai","Asia/Muscat","Indian/Mahe","Indian/Reunion"],"continentCode":"AS","continentName":"Asia","countryName":"United Arab Emirates","countryCode":"AE","mainCities":["Dubai","Abu Dhabi","Sharjah","Al Ain City"],"rawOffsetInMinutes":240,"abbreviation":"GST","rawFormat":"+04:00 Gulf Time - Dubai, Abu Dhabi, Sharjah, Al Ain City"},{"name":"Asia/Muscat","alternativeName":"Gulf Time","group":["Asia/Muscat"],"continentCode":"AS","continentName":"Asia","countryName":"Oman","countryCode":"OM","mainCities":["Muscat","Seeb","Bawshar","‘Ibrī"],"rawOffsetInMinutes":240,"abbreviation":"GST","rawFormat":"+04:00 Gulf Time - Muscat, Seeb, Bawshar, ‘Ibrī"},{"name":"Indian/Mauritius","alternativeName":"Mauritius Time","group":["Indian/Mauritius"],"continentCode":"AF","continentName":"Africa","countryName":"Mauritius","countryCode":"MU","mainCities":["Port Louis","Vacoas","Beau Bassin-Rose Hill","Curepipe"],"rawOffsetInMinutes":240,"abbreviation":"MUT","rawFormat":"+04:00 Mauritius Time - Port Louis, Vacoas, Beau Bassin-Rose Hill, Curepipe"},{"name":"Indian/Reunion","alternativeName":"Réunion Time","group":["Indian/Reunion"],"continentCode":"AF","continentName":"Africa","countryName":"Reunion","countryCode":"RE","mainCities":["Saint-Denis","Saint-Paul","Saint-Pierre","Le Tampon"],"rawOffsetInMinutes":240,"abbreviation":"RET","rawFormat":"+04:00 Réunion Time - Saint-Denis, Saint-Paul, Saint-Pierre, Le Tampon"},{"name":"Europe/Samara","alternativeName":"Samara Time","group":["Europe/Astrakhan","Europe/Samara","Europe/Saratov","Europe/Ulyanovsk"],"continentCode":"EU","continentName":"Europe","countryName":"Russia","countryCode":"RU","mainCities":["Samara","Saratov","Tolyatti","Izhevsk"],"rawOffsetInMinutes":240,"abbreviation":"SAMT","rawFormat":"+04:00 Samara Time - Samara, Saratov, Tolyatti, Izhevsk"},{"name":"Indian/Mahe","alternativeName":"Seychelles Time","group":["Indian/Mahe"],"continentCode":"AF","continentName":"Africa","countryName":"Seychelles","countryCode":"SC","mainCities":["Victoria"],"rawOffsetInMinutes":240,"abbreviation":"SCT","rawFormat":"+04:00 Seychelles Time - Victoria"},{"name":"Asia/Kabul","alternativeName":"Afghanistan Time","group":["Asia/Kabul"],"continentCode":"AS","continentName":"Asia","countryName":"Afghanistan","countryCode":"AF","mainCities":["Kabul","Herāt","Mazār-e Sharīf","Kandahār"],"rawOffsetInMinutes":270,"abbreviation":"AFT","rawFormat":"+04:30 Afghanistan Time - Kabul, Herāt, Mazār-e Sharīf, Kandahār"},{"name":"Indian/Kerguelen","alternativeName":"French Southern & Antarctic Time","group":["Indian/Kerguelen"],"continentCode":"AN","continentName":"Antarctica","countryName":"French Southern Territories","countryCode":"TF","mainCities":["Port-aux-Français"],"rawOffsetInMinutes":300,"abbreviation":"FSAT","rawFormat":"+05:00 French Southern & Antarctic Time - Port-aux-Français"},{"name":"Asia/Almaty","alternativeName":"Kazakhstan Time","group":["Asia/Almaty","Asia/Aqtau","Asia/Aqtobe","Asia/Atyrau","Asia/Oral","Asia/Qostanay","Asia/Qyzylorda"],"continentCode":"AS","continentName":"Asia","countryName":"Kazakhstan","countryCode":"KZ","mainCities":["Almaty","Shymkent","Aktobe","Karagandy"],"rawOffsetInMinutes":300,"abbreviation":"GMT+5","rawFormat":"+05:00 Kazakhstan Time - Almaty, Shymkent, Aktobe, Karagandy"},{"name":"Indian/Maldives","alternativeName":"Maldives Time","group":["Indian/Maldives","Indian/Kerguelen"],"continentCode":"AS","continentName":"Asia","countryName":"Maldives","countryCode":"MV","mainCities":["Male"],"rawOffsetInMinutes":300,"abbreviation":"MVT","rawFormat":"+05:00 Maldives Time - Male"},{"name":"Antarctica/Mawson","alternativeName":"Mawson Time","group":["Antarctica/Mawson","Antarctica/Vostok"],"continentCode":"AN","continentName":"Antarctica","countryName":"Antarctica","countryCode":"AQ","mainCities":["Mawson","Vostok"],"rawOffsetInMinutes":300,"abbreviation":"MAWT","rawFormat":"+05:00 Mawson Time - Mawson, Vostok"},{"name":"Asia/Karachi","alternativeName":"Pakistan Time","group":["Asia/Karachi"],"continentCode":"AS","continentName":"Asia","countryName":"Pakistan","countryCode":"PK","mainCities":["Lahore","Karachi","Peshawar","Faisalabad"],"rawOffsetInMinutes":300,"abbreviation":"PKT","rawFormat":"+05:00 Pakistan Time - Lahore, Karachi, Peshawar, Faisalabad"},{"name":"Asia/Dushanbe","alternativeName":"Tajikistan Time","group":["Asia/Dushanbe"],"continentCode":"AS","continentName":"Asia","countryName":"Tajikistan","countryCode":"TJ","mainCities":["Dushanbe","Isfara","Istaravshan","Kŭlob"],"rawOffsetInMinutes":300,"abbreviation":"TJT","rawFormat":"+05:00 Tajikistan Time - Dushanbe, Isfara, Istaravshan, Kŭlob"},{"name":"Asia/Ashgabat","alternativeName":"Turkmenistan Time","group":["Asia/Ashgabat","Asia/Ashkhabad"],"continentCode":"AS","continentName":"Asia","countryName":"Turkmenistan","countryCode":"TM","mainCities":["Ashgabat","Türkmenabat","Daşoguz","Mary"],"rawOffsetInMinutes":300,"abbreviation":"TMT","rawFormat":"+05:00 Turkmenistan Time - Ashgabat, Türkmenabat, Daşoguz, Mary"},{"name":"Asia/Tashkent","alternativeName":"Uzbekistan Time","group":["Asia/Samarkand","Asia/Tashkent"],"continentCode":"AS","continentName":"Asia","countryName":"Uzbekistan","countryCode":"UZ","mainCities":["Tashkent","Andijon","Namangan","Samarkand"],"rawOffsetInMinutes":300,"abbreviation":"UZT","rawFormat":"+05:00 Uzbekistan Time - Tashkent, Andijon, Namangan, Samarkand"},{"name":"Asia/Yekaterinburg","alternativeName":"Yekaterinburg Time","group":["Asia/Yekaterinburg"],"continentCode":"EU","continentName":"Europe","countryName":"Russia","countryCode":"RU","mainCities":["Yekaterinburg","Chelyabinsk","Ufa","Perm"],"rawOffsetInMinutes":300,"abbreviation":"YEKT","rawFormat":"+05:00 Yekaterinburg Time - Yekaterinburg, Chelyabinsk, Ufa, Perm"},{"name":"Asia/Colombo","alternativeName":"India Time","group":["Asia/Colombo"],"continentCode":"AS","continentName":"Asia","countryName":"Sri Lanka","countryCode":"LK","mainCities":["Colombo","Dehiwala-Mount Lavinia","Maharagama","Jaffna"],"rawOffsetInMinutes":330,"abbreviation":"IST","rawFormat":"+05:30 India Time - Colombo, Dehiwala-Mount Lavinia, Maharagama, Jaffna"},{"name":"Asia/Kolkata","alternativeName":"India Time","group":["Asia/Kolkata","Asia/Calcutta"],"continentCode":"AS","continentName":"Asia","countryName":"India","countryCode":"IN","mainCities":["Mumbai","Delhi","Bengaluru","Hyderabad"],"rawOffsetInMinutes":330,"abbreviation":"IST","rawFormat":"+05:30 India Time - Mumbai, Delhi, Bengaluru, Hyderabad"},{"name":"Asia/Kathmandu","alternativeName":"Nepal Time","group":["Asia/Kathmandu","Asia/Katmandu"],"continentCode":"AS","continentName":"Asia","countryName":"Nepal","countryCode":"NP","mainCities":["Kathmandu","Pokhara","Bharatpur","Pātan"],"rawOffsetInMinutes":345,"abbreviation":"NPT","rawFormat":"+05:45 Nepal Time - Kathmandu, Pokhara, Bharatpur, Pātan"},{"name":"Asia/Dhaka","alternativeName":"Bangladesh Time","group":["Asia/Dhaka","Asia/Dacca"],"continentCode":"AS","continentName":"Asia","countryName":"Bangladesh","countryCode":"BD","mainCities":["Dhaka","Chattogram","Gazipur","Khulna"],"rawOffsetInMinutes":360,"abbreviation":"BST","rawFormat":"+06:00 Bangladesh Time - Dhaka, Chattogram, Gazipur, Khulna"},{"name":"Asia/Thimphu","alternativeName":"Bhutan Time","group":["Asia/Thimphu","Asia/Thimbu"],"continentCode":"AS","continentName":"Asia","countryName":"Bhutan","countryCode":"BT","mainCities":["Thimphu","Phuntsholing","Tsirang","Punākha"],"rawOffsetInMinutes":360,"abbreviation":"BTT","rawFormat":"+06:00 Bhutan Time - Thimphu, Phuntsholing, Tsirang, Punākha"},{"name":"Asia/Urumqi","alternativeName":"China Time","group":["Asia/Urumqi","Asia/Kashgar"],"continentCode":"AS","continentName":"Asia","countryName":"China","countryCode":"CN","mainCities":["Ürümqi","Shihezi","Korla","Aqsu"],"rawOffsetInMinutes":360,"abbreviation":"CST","rawFormat":"+06:00 China Time - Ürümqi, Shihezi, Korla, Aqsu"},{"name":"Indian/Chagos","alternativeName":"Indian Ocean Time","group":["Indian/Chagos"],"continentCode":"AS","continentName":"Asia","countryName":"British Indian Ocean Territory","countryCode":"IO","mainCities":["Chagos"],"rawOffsetInMinutes":360,"abbreviation":"IOT","rawFormat":"+06:00 Indian Ocean Time - Chagos"},{"name":"Asia/Bishkek","alternativeName":"Kyrgyzstan Time","group":["Asia/Bishkek"],"continentCode":"AS","continentName":"Asia","countryName":"Kyrgyzstan","countryCode":"KG","mainCities":["Bishkek","Osh","Jalal-Abad","Karakol"],"rawOffsetInMinutes":360,"abbreviation":"KGT","rawFormat":"+06:00 Kyrgyzstan Time - Bishkek, Osh, Jalal-Abad, Karakol"},{"name":"Asia/Omsk","alternativeName":"Omsk Time","group":["Asia/Omsk"],"continentCode":"EU","continentName":"Europe","countryName":"Russia","countryCode":"RU","mainCities":["Omsk","Tara","Kalachinsk","Isil’kul’"],"rawOffsetInMinutes":360,"abbreviation":"OMST","rawFormat":"+06:00 Omsk Time - Omsk, Tara, Kalachinsk, Isil’kul’"},{"name":"Indian/Cocos","alternativeName":"Cocos Islands Time","group":["Indian/Cocos"],"continentCode":"AS","continentName":"Asia","countryName":"Cocos Islands","countryCode":"CC","mainCities":["West Island"],"rawOffsetInMinutes":390,"abbreviation":"CCT","rawFormat":"+06:30 Cocos Islands Time - West Island"},{"name":"Asia/Yangon","alternativeName":"Myanmar Time","group":["Asia/Yangon","Indian/Cocos","Asia/Rangoon"],"continentCode":"AS","continentName":"Asia","countryName":"Myanmar","countryCode":"MM","mainCities":["Yangon","Mandalay","Nay Pyi Taw","Hlaingthaya Township"],"rawOffsetInMinutes":390,"abbreviation":"MMT","rawFormat":"+06:30 Myanmar Time - Yangon, Mandalay, Nay Pyi Taw, Hlaingthaya Township"},{"name":"Indian/Christmas","alternativeName":"Christmas Island Time","group":["Indian/Christmas"],"continentCode":"OC","continentName":"Oceania","countryName":"Christmas Island","countryCode":"CX","mainCities":["Flying Fish Cove"],"rawOffsetInMinutes":420,"abbreviation":"CXT","rawFormat":"+07:00 Christmas Island Time - Flying Fish Cove"},{"name":"Antarctica/Davis","alternativeName":"Davis Time","group":["Antarctica/Davis"],"continentCode":"AN","continentName":"Antarctica","countryName":"Antarctica","countryCode":"AQ","mainCities":["Davis"],"rawOffsetInMinutes":420,"abbreviation":"DAVT","rawFormat":"+07:00 Davis Time - Davis"},{"name":"Asia/Hovd","alternativeName":"Hovd Time","group":["Asia/Hovd"],"continentCode":"AS","continentName":"Asia","countryName":"Mongolia","countryCode":"MN","mainCities":["Ulaangom","Khovd","Ölgii","Altai"],"rawOffsetInMinutes":420,"abbreviation":"HOVT","rawFormat":"+07:00 Hovd Time - Ulaangom, Khovd, Ölgii, Altai"},{"name":"Asia/Bangkok","alternativeName":"Indochina Time","group":["Asia/Bangkok","Asia/Phnom_Penh","Asia/Vientiane","Indian/Christmas"],"continentCode":"AS","continentName":"Asia","countryName":"Thailand","countryCode":"TH","mainCities":["Bangkok","Samut Prakan","Mueang Nonthaburi","Chon Buri"],"rawOffsetInMinutes":420,"abbreviation":"ICT","rawFormat":"+07:00 Indochina Time - Bangkok, Samut Prakan, Mueang Nonthaburi, Chon Buri"},{"name":"Asia/Ho_Chi_Minh","alternativeName":"Indochina Time","group":["Asia/Ho_Chi_Minh","Asia/Saigon"],"continentCode":"AS","continentName":"Asia","countryName":"Vietnam","countryCode":"VN","mainCities":["Ho Chi Minh City","Cần Thơ","Da Nang","Biên Hòa"],"rawOffsetInMinutes":420,"abbreviation":"ICT","rawFormat":"+07:00 Indochina Time - Ho Chi Minh City, Cần Thơ, Da Nang, Biên Hòa"},{"name":"Asia/Phnom_Penh","alternativeName":"Indochina Time","group":["Asia/Phnom_Penh"],"continentCode":"AS","continentName":"Asia","countryName":"Cambodia","countryCode":"KH","mainCities":["Phnom Penh","Takeo","Siem Reap","Battambang"],"rawOffsetInMinutes":420,"abbreviation":"ICT","rawFormat":"+07:00 Indochina Time - Phnom Penh, Takeo, Siem Reap, Battambang"},{"name":"Asia/Vientiane","alternativeName":"Indochina Time","group":["Asia/Vientiane"],"continentCode":"AS","continentName":"Asia","countryName":"Laos","countryCode":"LA","mainCities":["Vientiane","Savannakhet","Pakse","Thakhèk"],"rawOffsetInMinutes":420,"abbreviation":"ICT","rawFormat":"+07:00 Indochina Time - Vientiane, Savannakhet, Pakse, Thakhèk"},{"name":"Asia/Novosibirsk","alternativeName":"Novosibirsk Time","group":["Asia/Barnaul","Asia/Krasnoyarsk","Asia/Novokuznetsk","Asia/Novosibirsk","Asia/Tomsk"],"continentCode":"EU","continentName":"Europe","countryName":"Russia","countryCode":"RU","mainCities":["Novosibirsk","Krasnoyarsk","Barnaul","Tomsk"],"rawOffsetInMinutes":420,"abbreviation":"NOVT","rawFormat":"+07:00 Novosibirsk Time - Novosibirsk, Krasnoyarsk, Barnaul, Tomsk"},{"name":"Asia/Jakarta","alternativeName":"Western Indonesia Time","group":["Asia/Jakarta","Asia/Pontianak"],"continentCode":"AS","continentName":"Asia","countryName":"Indonesia","countryCode":"ID","mainCities":["Jakarta","Surabaya","Bekasi","Bandung"],"rawOffsetInMinutes":420,"abbreviation":"WIB","rawFormat":"+07:00 Western Indonesia Time - Jakarta, Surabaya, Bekasi, Bandung"},{"name":"Antarctica/Casey","alternativeName":"Australian Western Time","group":["Antarctica/Casey"],"continentCode":"AN","continentName":"Antarctica","countryName":"Antarctica","countryCode":"AQ","mainCities":["Casey"],"rawOffsetInMinutes":480,"abbreviation":"AWST","rawFormat":"+08:00 Australian Western Time - Casey"},{"name":"Australia/Perth","alternativeName":"Australian Western Time","group":["Australia/Perth","Australia/West"],"continentCode":"OC","continentName":"Oceania","countryName":"Australia","countryCode":"AU","mainCities":["Perth","Mandurah","Bunbury","Geraldton"],"rawOffsetInMinutes":480,"abbreviation":"AWST","rawFormat":"+08:00 Australian Western Time - Perth, Mandurah, Bunbury, Geraldton"},{"name":"Asia/Brunei","alternativeName":"Brunei Time","group":["Asia/Brunei"],"continentCode":"AS","continentName":"Asia","countryName":"Brunei","countryCode":"BN","mainCities":["Bandar Seri Begawan","Sengkurong","Mentiri","Kuala Belait"],"rawOffsetInMinutes":480,"abbreviation":"GMT+8","rawFormat":"+08:00 Brunei Time - Bandar Seri Begawan, Sengkurong, Mentiri, Kuala Belait"},{"name":"Asia/Makassar","alternativeName":"Central Indonesia Time","group":["Asia/Makassar","Asia/Ujung_Pandang"],"continentCode":"AS","continentName":"Asia","countryName":"Indonesia","countryCode":"ID","mainCities":["Makassar","Samarinda","Denpasar","Balikpapan"],"rawOffsetInMinutes":480,"abbreviation":"WITA","rawFormat":"+08:00 Central Indonesia Time - Makassar, Samarinda, Denpasar, Balikpapan"},{"name":"Asia/Macau","alternativeName":"China Time","group":["Asia/Macau","Asia/Macao"],"continentCode":"AS","continentName":"Asia","countryName":"Macao","countryCode":"MO","mainCities":["Macau","Taipa","Sé","Luhuan"],"rawOffsetInMinutes":480,"abbreviation":"CST","rawFormat":"+08:00 China Time - Macau, Taipa, Sé, Luhuan"},{"name":"Asia/Shanghai","alternativeName":"China Time","group":["Asia/Shanghai","PRC","Asia/Chongqing","Asia/Harbin","Asia/Chungking"],"continentCode":"AS","continentName":"Asia","countryName":"China","countryCode":"CN","mainCities":["Shanghai","Beijing","Shenzhen","Guangzhou"],"rawOffsetInMinutes":480,"abbreviation":"CST","rawFormat":"+08:00 China Time - Shanghai, Beijing, Shenzhen, Guangzhou"},{"name":"Asia/Hong_Kong","alternativeName":"Hong Kong Time","group":["Asia/Hong_Kong","Hongkong"],"continentCode":"AS","continentName":"Asia","countryName":"Hong Kong","countryCode":"HK","mainCities":["Hong Kong","New Territories","Kowloon","Hong Kong Island"],"rawOffsetInMinutes":480,"abbreviation":"HKT","rawFormat":"+08:00 Hong Kong Time - Hong Kong, New Territories, Kowloon, Hong Kong Island"},{"name":"Asia/Irkutsk","alternativeName":"Irkutsk Time","group":["Asia/Irkutsk"],"continentCode":"EU","continentName":"Europe","countryName":"Russia","countryCode":"RU","mainCities":["Irkutsk","Ulan-Ude","Bratsk","Angarsk"],"rawOffsetInMinutes":480,"abbreviation":"IRKT","rawFormat":"+08:00 Irkutsk Time - Irkutsk, Ulan-Ude, Bratsk, Angarsk"},{"name":"Asia/Kuala_Lumpur","alternativeName":"Malaysia Time","group":["Asia/Kuala_Lumpur","Asia/Kuching","Asia/Brunei"],"continentCode":"AS","continentName":"Asia","countryName":"Malaysia","countryCode":"MY","mainCities":["Kuala Lumpur","Johor Bahru","Kampung Baru Subang","Petaling Jaya"],"rawOffsetInMinutes":480,"abbreviation":"MYT","rawFormat":"+08:00 Malaysia Time - Kuala Lumpur, Johor Bahru, Kampung Baru Subang, Petaling Jaya"},{"name":"Asia/Manila","alternativeName":"Philippine Time","group":["Asia/Manila"],"continentCode":"AS","continentName":"Asia","countryName":"Philippines","countryCode":"PH","mainCities":["Quezon City","Davao","Caloocan City","Manila"],"rawOffsetInMinutes":480,"abbreviation":"PHT","rawFormat":"+08:00 Philippine Time - Quezon City, Davao, Caloocan City, Manila"},{"name":"Asia/Singapore","alternativeName":"Singapore Time","group":["Asia/Singapore","Singapore","Asia/Kuala_Lumpur"],"continentCode":"AS","continentName":"Asia","countryName":"Singapore","countryCode":"SG","mainCities":["Singapore","Ulu Bedok","Bedok New Town","Tampines Estate"],"rawOffsetInMinutes":480,"abbreviation":"SGT","rawFormat":"+08:00 Singapore Time - Singapore, Ulu Bedok, Bedok New Town, Tampines Estate"},{"name":"Asia/Taipei","alternativeName":"Taiwan Time","group":["Asia/Taipei","ROC"],"continentCode":"AS","continentName":"Asia","countryName":"Taiwan","countryCode":"TW","mainCities":["Taipei","New Taipei City","Taichung","Kaohsiung"],"rawOffsetInMinutes":480,"abbreviation":"GMT+8","rawFormat":"+08:00 Taiwan Time - Taipei, New Taipei City, Taichung, Kaohsiung"},{"name":"Asia/Ulaanbaatar","alternativeName":"Ulaanbaatar Time","group":["Asia/Ulaanbaatar","Asia/Choibalsan","Asia/Ulan_Bator"],"continentCode":"AS","continentName":"Asia","countryName":"Mongolia","countryCode":"MN","mainCities":["Ulan Bator","Erdenet","Darhan","Choibalsan"],"rawOffsetInMinutes":480,"abbreviation":"ULAT","rawFormat":"+08:00 Ulaanbaatar Time - Ulan Bator, Erdenet, Darhan, Choibalsan"},{"name":"Australia/Eucla","alternativeName":"Australian Central Western Time","group":["Australia/Eucla"],"continentCode":"OC","continentName":"Oceania","countryName":"Australia","countryCode":"AU","mainCities":["Eucla"],"rawOffsetInMinutes":525,"abbreviation":"ACWST","rawFormat":"+08:45 Australian Central Western Time - Eucla"},{"name":"Asia/Jayapura","alternativeName":"Eastern Indonesia Time","group":["Asia/Jayapura"],"continentCode":"AS","continentName":"Asia","countryName":"Indonesia","countryCode":"ID","mainCities":["Jayapura","Ambon","Sorong","Ternate"],"rawOffsetInMinutes":540,"abbreviation":"WIT","rawFormat":"+09:00 Eastern Indonesia Time - Jayapura, Ambon, Sorong, Ternate"},{"name":"Asia/Tokyo","alternativeName":"Japan Time","group":["Asia/Tokyo","Japan"],"continentCode":"AS","continentName":"Asia","countryName":"Japan","countryCode":"JP","mainCities":["Tokyo","Yokohama","Osaka","Nagoya"],"rawOffsetInMinutes":540,"abbreviation":"JST","rawFormat":"+09:00 Japan Time - Tokyo, Yokohama, Osaka, Nagoya"},{"name":"Asia/Pyongyang","alternativeName":"Korean Time","group":["Asia/Pyongyang"],"continentCode":"AS","continentName":"Asia","countryName":"North Korea","countryCode":"KP","mainCities":["Pyongyang","Hamhŭng","Namp’o","Sunch’ŏn"],"rawOffsetInMinutes":540,"abbreviation":"KST","rawFormat":"+09:00 Korean Time - Pyongyang, Hamhŭng, Namp’o, Sunch’ŏn"},{"name":"Asia/Seoul","alternativeName":"Korean Time","group":["Asia/Seoul","ROK"],"continentCode":"AS","continentName":"Asia","countryName":"South Korea","countryCode":"KR","mainCities":["Seoul","Busan","Incheon","Daegu"],"rawOffsetInMinutes":540,"abbreviation":"KST","rawFormat":"+09:00 Korean Time - Seoul, Busan, Incheon, Daegu"},{"name":"Pacific/Palau","alternativeName":"Palau Time","group":["Pacific/Palau"],"continentCode":"OC","continentName":"Oceania","countryName":"Palau","countryCode":"PW","mainCities":["Ngerulmud"],"rawOffsetInMinutes":540,"abbreviation":"PWT","rawFormat":"+09:00 Palau Time - Ngerulmud"},{"name":"Asia/Dili","alternativeName":"Timor-Leste Time","group":["Asia/Dili"],"continentCode":"OC","continentName":"Oceania","countryName":"Timor Leste","countryCode":"TL","mainCities":["Dili","Maliana","Suai","Likisá"],"rawOffsetInMinutes":540,"abbreviation":"GMT+9","rawFormat":"+09:00 Timor-Leste Time - Dili, Maliana, Suai, Likisá"},{"name":"Asia/Chita","alternativeName":"Yakutsk Time","group":["Asia/Chita","Asia/Khandyga","Asia/Yakutsk"],"continentCode":"EU","continentName":"Europe","countryName":"Russia","countryCode":"RU","mainCities":["Chita","Yakutsk","Blagoveshchensk","Belogorsk"],"rawOffsetInMinutes":540,"abbreviation":"YAKT","rawFormat":"+09:00 Yakutsk Time - Chita, Yakutsk, Blagoveshchensk, Belogorsk"},{"name":"Australia/Adelaide","alternativeName":"Australian Central Time","group":["Australia/Adelaide","Australia/Broken_Hill","Australia/South","Australia/Yancowinna"],"continentCode":"OC","continentName":"Oceania","countryName":"Australia","countryCode":"AU","mainCities":["Adelaide","Adelaide Hills","Mount Gambier","Morphett Vale"],"rawOffsetInMinutes":570,"abbreviation":"ACST","rawFormat":"+09:30 Australian Central Time - Adelaide, Adelaide Hills, Mount Gambier, Morphett Vale"},{"name":"Australia/Darwin","alternativeName":"Australian Central Time","group":["Australia/Darwin","Australia/North"],"continentCode":"OC","continentName":"Oceania","countryName":"Australia","countryCode":"AU","mainCities":["Darwin","Palmerston","Alice Springs"],"rawOffsetInMinutes":570,"abbreviation":"ACST","rawFormat":"+09:30 Australian Central Time - Darwin, Palmerston, Alice Springs"},{"name":"Australia/Brisbane","alternativeName":"Australian Eastern Time","group":["Australia/Brisbane","Australia/Lindeman","Australia/Queensland"],"continentCode":"OC","continentName":"Oceania","countryName":"Australia","countryCode":"AU","mainCities":["Brisbane","Gold Coast","Sunshine Coast","Logan City"],"rawOffsetInMinutes":600,"abbreviation":"AEST","rawFormat":"+10:00 Australian Eastern Time - Brisbane, Gold Coast, Sunshine Coast, Logan City"},{"name":"Australia/Sydney","alternativeName":"Australian Eastern Time","group":["Antarctica/Macquarie","Australia/Hobart","Australia/Melbourne","Australia/Sydney","Australia/Tasmania","Australia/Currie","Australia/Victoria","Australia/ACT","Australia/NSW","Australia/Canberra"],"continentCode":"OC","continentName":"Oceania","countryName":"Australia","countryCode":"AU","mainCities":["Sydney","Melbourne","Newcastle","Canberra"],"rawOffsetInMinutes":600,"abbreviation":"AEST","rawFormat":"+10:00 Australian Eastern Time - Sydney, Melbourne, Newcastle, Canberra"},{"name":"Pacific/Guam","alternativeName":"Chamorro Time","group":["Pacific/Guam","Pacific/Saipan"],"continentCode":"OC","continentName":"Oceania","countryName":"Guam","countryCode":"GU","mainCities":["Dededo Village","Yigo Village","Tamuning-Tumon-Harmon Village","Tamuning"],"rawOffsetInMinutes":600,"abbreviation":"ChST","rawFormat":"+10:00 Chamorro Time - Dededo Village, Yigo Village, Tamuning-Tumon-Harmon Village, Tamuning"},{"name":"Pacific/Saipan","alternativeName":"Chamorro Time","group":["Pacific/Saipan"],"continentCode":"OC","continentName":"Oceania","countryName":"Northern Mariana Islands","countryCode":"MP","mainCities":["Saipan"],"rawOffsetInMinutes":600,"abbreviation":"ChST","rawFormat":"+10:00 Chamorro Time - Saipan"},{"name":"Pacific/Chuuk","alternativeName":"Chuuk Time","group":["Pacific/Chuuk"],"continentCode":"OC","continentName":"Oceania","countryName":"Micronesia","countryCode":"FM","mainCities":["Chuuk"],"rawOffsetInMinutes":600,"abbreviation":"CHUT","rawFormat":"+10:00 Chuuk Time - Chuuk"},{"name":"Antarctica/DumontDUrville","alternativeName":"Dumont d’Urville Time","group":["Antarctica/DumontDUrville"],"continentCode":"AN","continentName":"Antarctica","countryName":"Antarctica","countryCode":"AQ","mainCities":["DumontDUrville"],"rawOffsetInMinutes":600,"abbreviation":"GMT+10","rawFormat":"+10:00 Dumont d’Urville Time - DumontDUrville"},{"name":"Pacific/Port_Moresby","alternativeName":"Papua New Guinea Time","group":["Pacific/Port_Moresby","Antarctica/DumontDUrville","Pacific/Chuuk","Pacific/Yap","Pacific/Truk"],"continentCode":"OC","continentName":"Oceania","countryName":"Papua New Guinea","countryCode":"PG","mainCities":["Port Moresby","Lae","Mount Hagen","Popondetta"],"rawOffsetInMinutes":600,"abbreviation":"PGT","rawFormat":"+10:00 Papua New Guinea Time - Port Moresby, Lae, Mount Hagen, Popondetta"},{"name":"Asia/Vladivostok","alternativeName":"Vladivostok Time","group":["Asia/Ust-Nera","Asia/Vladivostok"],"continentCode":"EU","continentName":"Europe","countryName":"Russia","countryCode":"RU","mainCities":["Khabarovsk","Vladivostok","Khabarovsk Vtoroy","Komsomolsk-on-Amur"],"rawOffsetInMinutes":600,"abbreviation":"VLAT","rawFormat":"+10:00 Vladivostok Time - Khabarovsk, Vladivostok, Khabarovsk Vtoroy, Komsomolsk-on-Amur"},{"name":"Australia/Lord_Howe","alternativeName":"Lord Howe Time","group":["Australia/Lord_Howe","Australia/LHI"],"continentCode":"OC","continentName":"Oceania","countryName":"Australia","countryCode":"AU","mainCities":["Lord Howe"],"rawOffsetInMinutes":630,"abbreviation":"LHST","rawFormat":"+10:30 Lord Howe Time - Lord Howe"},{"name":"Pacific/Bougainville","alternativeName":"Bougainville Time","group":["Pacific/Bougainville"],"continentCode":"OC","continentName":"Oceania","countryName":"Papua New Guinea","countryCode":"PG","mainCities":["Arawa"],"rawOffsetInMinutes":660,"abbreviation":"BST","rawFormat":"+11:00 Bougainville Time - Arawa"},{"name":"Pacific/Kosrae","alternativeName":"Kosrae Time","group":["Pacific/Kosrae","Pacific/Pohnpei"],"continentCode":"OC","continentName":"Oceania","countryName":"Micronesia","countryCode":"FM","mainCities":["Kosrae","Palikir"],"rawOffsetInMinutes":660,"abbreviation":"KOST","rawFormat":"+11:00 Kosrae Time - Kosrae, Palikir"},{"name":"Pacific/Noumea","alternativeName":"New Caledonia Time","group":["Pacific/Noumea"],"continentCode":"OC","continentName":"Oceania","countryName":"New Caledonia","countryCode":"NC","mainCities":["Nouméa","Mont-Dore","Dumbéa"],"rawOffsetInMinutes":660,"abbreviation":"NCT","rawFormat":"+11:00 New Caledonia Time - Nouméa, Mont-Dore, Dumbéa"},{"name":"Pacific/Norfolk","alternativeName":"Norfolk Island Time","group":["Pacific/Norfolk"],"continentCode":"OC","continentName":"Oceania","countryName":"Norfolk Island","countryCode":"NF","mainCities":["Kingston"],"rawOffsetInMinutes":660,"abbreviation":"NFT","rawFormat":"+11:00 Norfolk Island Time - Kingston"},{"name":"Asia/Sakhalin","alternativeName":"Sakhalin Time","group":["Asia/Magadan","Asia/Sakhalin","Asia/Srednekolymsk"],"continentCode":"EU","continentName":"Europe","countryName":"Russia","countryCode":"RU","mainCities":["Yuzhno-Sakhalinsk","Magadan","Korsakov","Kholmsk"],"rawOffsetInMinutes":660,"abbreviation":"SAKT","rawFormat":"+11:00 Sakhalin Time - Yuzhno-Sakhalinsk, Magadan, Korsakov, Kholmsk"},{"name":"Pacific/Guadalcanal","alternativeName":"Solomon Islands Time","group":["Pacific/Guadalcanal","Pacific/Pohnpei","Pacific/Ponape"],"continentCode":"OC","continentName":"Oceania","countryName":"Solomon Islands","countryCode":"SB","mainCities":["Honiara","Panatina","Nggosi","Tandai"],"rawOffsetInMinutes":660,"abbreviation":"SBT","rawFormat":"+11:00 Solomon Islands Time - Honiara, Panatina, Nggosi, Tandai"},{"name":"Pacific/Efate","alternativeName":"Vanuatu Time","group":["Pacific/Efate"],"continentCode":"OC","continentName":"Oceania","countryName":"Vanuatu","countryCode":"VU","mainCities":["Port-Vila"],"rawOffsetInMinutes":660,"abbreviation":"VUT","rawFormat":"+11:00 Vanuatu Time - Port-Vila"},{"name":"Pacific/Fiji","alternativeName":"Fiji Time","group":["Pacific/Fiji"],"continentCode":"OC","continentName":"Oceania","countryName":"Fiji","countryCode":"FJ","mainCities":["Nasinu","Suva","Lautoka","Nadi"],"rawOffsetInMinutes":720,"abbreviation":"FJT","rawFormat":"+12:00 Fiji Time - Nasinu, Suva, Lautoka, Nadi"},{"name":"Pacific/Tarawa","alternativeName":"Gilbert Islands Time","group":["Pacific/Tarawa","Pacific/Funafuti","Pacific/Majuro","Pacific/Wake","Pacific/Wallis"],"continentCode":"OC","continentName":"Oceania","countryName":"Kiribati","countryCode":"KI","mainCities":["Tarawa"],"rawOffsetInMinutes":720,"abbreviation":"GILT","rawFormat":"+12:00 Gilbert Islands Time - Tarawa"},{"name":"Asia/Kamchatka","alternativeName":"Kamchatka Time","group":["Asia/Anadyr","Asia/Kamchatka"],"continentCode":"EU","continentName":"Europe","countryName":"Russia","countryCode":"RU","mainCities":["Petropavlovsk-Kamchatsky","Yelizovo","Vilyuchinsk","Anadyr"],"rawOffsetInMinutes":720,"abbreviation":"PETT","rawFormat":"+12:00 Kamchatka Time - Petropavlovsk-Kamchatsky, Yelizovo, Vilyuchinsk, Anadyr"},{"name":"Pacific/Majuro","alternativeName":"Marshall Islands Time","group":["Pacific/Kwajalein","Pacific/Majuro","Kwajalein"],"continentCode":"OC","continentName":"Oceania","countryName":"Marshall Islands","countryCode":"MH","mainCities":["Majuro","Kwajalein"],"rawOffsetInMinutes":720,"abbreviation":"MHT","rawFormat":"+12:00 Marshall Islands Time - Majuro, Kwajalein"},{"name":"Pacific/Nauru","alternativeName":"Nauru Time","group":["Pacific/Nauru"],"continentCode":"OC","continentName":"Oceania","countryName":"Nauru","countryCode":"NR","mainCities":["Yaren"],"rawOffsetInMinutes":720,"abbreviation":"NRT","rawFormat":"+12:00 Nauru Time - Yaren"},{"name":"Pacific/Auckland","alternativeName":"New Zealand Time","group":["Pacific/Auckland","NZ","Antarctica/McMurdo","Antarctica/South_Pole"],"continentCode":"OC","continentName":"Oceania","countryName":"New Zealand","countryCode":"NZ","mainCities":["Auckland","Christchurch","Wellington","Manukau City"],"rawOffsetInMinutes":720,"abbreviation":"NZST","rawFormat":"+12:00 New Zealand Time - Auckland, Christchurch, Wellington, Manukau City"},{"name":"Antarctica/McMurdo","alternativeName":"New Zealand Time","group":["Antarctica/McMurdo"],"continentCode":"AN","continentName":"Antarctica","countryName":"Antarctica","countryCode":"AQ","mainCities":["McMurdo"],"rawOffsetInMinutes":720,"abbreviation":"NZST","rawFormat":"+12:00 New Zealand Time - McMurdo"},{"name":"Pacific/Funafuti","alternativeName":"Tuvalu Time","group":["Pacific/Funafuti"],"continentCode":"OC","continentName":"Oceania","countryName":"Tuvalu","countryCode":"TV","mainCities":["Funafuti"],"rawOffsetInMinutes":720,"abbreviation":"TVT","rawFormat":"+12:00 Tuvalu Time - Funafuti"},{"name":"Pacific/Wake","alternativeName":"Wake Island Time","group":["Pacific/Wake"],"continentCode":"OC","continentName":"Oceania","countryName":"United States Minor Outlying Islands","countryCode":"UM","mainCities":["Wake"],"rawOffsetInMinutes":720,"abbreviation":"WAKT","rawFormat":"+12:00 Wake Island Time - Wake"},{"name":"Pacific/Wallis","alternativeName":"Wallis & Futuna Time","group":["Pacific/Wallis"],"continentCode":"OC","continentName":"Oceania","countryName":"Wallis and Futuna","countryCode":"WF","mainCities":["Mata-Utu"],"rawOffsetInMinutes":720,"abbreviation":"WFT","rawFormat":"+12:00 Wallis & Futuna Time - Mata-Utu"},{"name":"Pacific/Chatham","alternativeName":"Chatham Time","group":["Pacific/Chatham","NZ-CHAT"],"continentCode":"OC","continentName":"Oceania","countryName":"New Zealand","countryCode":"NZ","mainCities":["Chatham"],"rawOffsetInMinutes":765,"abbreviation":"CHAST","rawFormat":"+12:45 Chatham Time - Chatham"},{"name":"Pacific/Kanton","alternativeName":"Phoenix Islands Time","group":["Pacific/Kanton","Pacific/Enderbury"],"continentCode":"OC","continentName":"Oceania","countryName":"Kiribati","countryCode":"KI","mainCities":["Kanton"],"rawOffsetInMinutes":780,"abbreviation":"PHOT","rawFormat":"+13:00 Phoenix Islands Time - Kanton"},{"name":"Pacific/Apia","alternativeName":"Samoa Time","group":["Pacific/Apia"],"continentCode":"OC","continentName":"Oceania","countryName":"Samoa","countryCode":"WS","mainCities":["Apia"],"rawOffsetInMinutes":780,"abbreviation":"SST","rawFormat":"+13:00 Samoa Time - Apia"},{"name":"Pacific/Fakaofo","alternativeName":"Tokelau Time","group":["Pacific/Fakaofo"],"continentCode":"OC","continentName":"Oceania","countryName":"Tokelau","countryCode":"TK","mainCities":["Fakaofo"],"rawOffsetInMinutes":780,"abbreviation":"TKT","rawFormat":"+13:00 Tokelau Time - Fakaofo"},{"name":"Pacific/Tongatapu","alternativeName":"Tonga Time","group":["Pacific/Tongatapu"],"continentCode":"OC","continentName":"Oceania","countryName":"Tonga","countryCode":"TO","mainCities":["Nuku‘alofa"],"rawOffsetInMinutes":780,"abbreviation":"TOT","rawFormat":"+13:00 Tonga Time - Nuku‘alofa"},{"name":"Pacific/Kiritimati","alternativeName":"Line Islands Time","group":["Pacific/Kiritimati"],"continentCode":"OC","continentName":"Oceania","countryName":"Kiribati","countryCode":"KI","mainCities":["Kiritimati"],"rawOffsetInMinutes":840,"abbreviation":"LINT","rawFormat":"+14:00 Line Islands Time - Kiritimati"}]`);
function GA({
  alternativeName: t,
  mainCities: e,
  rawOffsetInMinutes: n,
  currentTimeOffsetInMinutes: a
}, { useCurrentOffset: i = !1 } = {}) {
  return `${or(i ? a : n).padStart(
    6,
    "+"
  )} ${t} - ${e.join(", ")}`;
}
function or(t) {
  const e = Math.abs(t), [n, a] = [
    Math.floor(e / 60),
    e % 60
  ].map((r) => r.toString().padStart(2, "0")), i = `${n}:${a}`;
  return `${t >= 0 ? "+" : "-"}${i}`;
}
const KA = /^[A-Za-z_+-]{1,256}(:?\/[A-Za-z_+-]{1,256}(\/[A-Za-z_+-]{1,256})?)?$/, qA = {
  year: 0,
  month: 1,
  day: 2,
  hour: 3,
  minute: 4,
  second: 5
};
function QA(t) {
  return !!(t && t.match(KA));
}
function ZA(t, e) {
  const n = t.format(e).replace(/\u200E/g, ""), a = /(\d+)\/(\d+)\/(\d+),? (\d+):(\d+):(\d+)/.exec(n), [, i, r, o, s, l, c] = a;
  return [o, i, r, s, l, c];
}
function JA(t, e) {
  const n = t.formatToParts(e), a = [];
  for (let i = 0; i < n.length; i++) {
    const { type: r, value: o } = n[i], s = qA[r];
    typeof s < "u" && (a[s] = parseInt(o, 10));
  }
  return a;
}
function XA(t) {
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
function eC(t) {
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
function tC(t) {
  if (!QA(t))
    return !1;
  const e = new Date(Date.now());
  let n;
  try {
    n = XA(t);
  } catch {
    return !1;
  }
  const [a, i, r, o, s, l] = n.formatToParts ? JA(n, e) : ZA(n, e), c = eC({
    year: a,
    month: i,
    day: r,
    hour: o,
    minute: s,
    second: l,
    millisecond: 0
  });
  let d = +e;
  const h = d % 1e3;
  return d -= h >= 0 ? h : 1e3 + h, (c - d) / (60 * 1e3);
}
function nC(t) {
  return YA.reduce(
    function(e, n) {
      const a = n.name, i = tC(a);
      if (i === !1)
        return e;
      const r = {
        ...n,
        currentTimeOffsetInMinutes: i
      };
      return e.push({
        ...r,
        currentTimeFormat: GA(r, {
          useCurrentOffset: !0
        })
      }), e;
    },
    []
  ).sort((e, n) => aC(e, n) || sr(e.alternativeName, n.alternativeName) || sr(e.mainCities[0], n.mainCities[0]));
}
function aC(t, e) {
  return t.currentTimeOffsetInMinutes - e.currentTimeOffsetInMinutes;
}
function sr(t, e) {
  return typeof t == "string" && typeof e == "string" ? t.localeCompare(e) : 0;
}
const iC = ["data-widget-id"], rC = {
  key: 0,
  class: "fu-empty"
}, oC = {
  key: 1,
  class: "fu-layout"
}, sC = { class: "fu-info" }, lC = { class: "fu-info__name" }, uC = {
  key: 0,
  class: "fu-info__meta"
}, cC = {
  key: 1,
  class: "fu-info__desc"
}, dC = ["aria-expanded"], fC = { class: "fu-tz__label" }, mC = {
  key: 0,
  class: "fu-tz__dropdown"
}, hC = { class: "fu-tz__search-wrap" }, vC = { class: "fu-tz__search-icon" }, pC = {
  key: 0,
  class: "fu-tz__no-results"
}, gC = ["onMouseenter", "onMousedown"], yC = { class: "fu-tz__opt-offset" }, bC = { class: "fu-tz__opt-name" }, AC = { class: "fu-tz__opt-country" }, CC = {
  key: 0,
  class: "fu-selected"
}, wC = { class: "fu-selected__time" }, _C = { class: "fu-selected__time" }, SC = { class: "fu-right" }, TC = {
  key: 0,
  class: "fu-slots"
}, kC = { class: "fu-slots__header" }, EC = { class: "fu-slots__heading" }, MC = {
  key: 0,
  class: "fu-slots__loading"
}, NC = {
  key: 1,
  class: "fu-slots__list"
}, DC = ["onClick"], IC = {
  key: 2,
  class: "fu-slots__empty"
}, OC = /* @__PURE__ */ oe({
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
    const n = t, a = e, i = P(
      () => nC().map((z) => {
        const q = z.mainCities?.[0] || z.name.split("/").pop()?.replace(/_/g, " ") || z.name, se = z.rawOffsetInMinutes ?? 0, fe = se >= 0 ? "+" : "-", Ae = Math.abs(se), Pe = String(Math.floor(Ae / 60)).padStart(2, "0"), Me = String(Ae % 60).padStart(2, "0"), Fe = `UTC${fe}${Pe}:${Me}`;
        return {
          value: z.name,
          offset: Fe,
          city: q,
          country: "",
          searchIndex: [z.name, z.abbreviation, q, z.group, Fe].join(" ").toLowerCase()
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
    const o = N(r()), s = N(!1), l = N(""), c = N(0), d = N(null), h = N(null), p = N(null), v = P(() => {
      const z = i.value.find((q) => q.value === o.value);
      return z ? `${z.offset} · ${z.city}` : o.value;
    }), y = P(() => {
      const z = l.value.trim().toLowerCase();
      return z ? i.value.filter((q) => q.searchIndex.includes(z)) : i.value;
    });
    async function g() {
      s.value = !s.value, s.value && (l.value = "", c.value = Math.max(
        0,
        y.value.findIndex((z) => z.value === o.value)
      ), await ye(), h.value?.focus(), C());
    }
    function b(z) {
      z && (o.value = z.value, s.value = !1, l.value = "");
    }
    function A(z) {
      const q = y.value.length;
      q && (c.value = (c.value + z + q) % q, C());
    }
    function C() {
      ye(() => {
        p.value?.children[c.value]?.scrollIntoView({ block: "nearest" });
      });
    }
    ve(y, () => {
      c.value = 0;
    });
    function E(z) {
      d.value && !d.value.contains(z.target) && (s.value = !1);
    }
    Te(() => document.addEventListener("mousedown", E)), Ce(() => document.removeEventListener("mousedown", E));
    const M = P(() => {
      const z = n.style || {}, q = z.bgColor || "#ffffff", se = (z.bgOpacity ?? 100) / 100, fe = (W) => {
        const Q = parseInt(W, 16);
        return isNaN(Q) ? 255 : Q;
      }, Ae = fe(q.slice(1, 3)), Pe = fe(q.slice(3, 5)), Me = fe(q.slice(5, 7)), Fe = [
        "none",
        "0 1px 4px rgba(0,0,0,0.07)",
        "0 2px 12px rgba(0,0,0,0.10)",
        "0 4px 20px rgba(0,0,0,0.13)",
        "0 8px 32px rgba(0,0,0,0.16)"
      ], Oe = z.dayColor || "#4f46e5", R = (z.dayShape || "circle") === "circle";
      return {
        backgroundColor: `rgba(${Ae},${Pe},${Me},${se})`,
        "--widget-bg": `rgba(${Ae},${Pe},${Me},${se})`,
        borderRadius: `${z.borderRadius ?? 12}px`,
        boxShadow: Fe[Math.min(z.shadow ?? 2, 4)],
        "--sch-day-color": Oe,
        "--sch-day-color-light": Oe + "22",
        "--sch-day-color-mid": Oe + "44",
        "--sch-day-radius": R ? "50%" : "10px",
        "--sch-day-size": R ? "32px" : "40px"
      };
    }), k = P(
      () => new Set(n.availableDates ?? [])
    ), F = P(
      () => [...k.value].map((z) => ({
        id: `dot-${z}`,
        date: z,
        display: "background",
        classNames: ["sch-avail-bg"]
      }))
    );
    function O() {
      return (/* @__PURE__ */ new Date()).toLocaleDateString("en-CA");
    }
    const j = N(null), te = N(null), U = N(null), Z = N(null), L = P(() => `cal-${n.eventTypeId}`);
    ve(j, () => {
      te.value = null;
    }), ve(
      () => n.slots,
      () => {
        te.value = null;
      }
    ), ve(
      () => n.eventTypeId,
      () => {
        j.value = null, te.value = null, o.value = r();
      }
    );
    function I() {
      j.value = null, te.value = null, setTimeout(() => Z.value?.getApi?.()?.updateSize(), 260);
    }
    const _ = P(() => ({
      plugins: [_A, WA],
      initialView: "dayGridMonth",
      headerToolbar: { left: "prev", center: "title", right: "next" },
      height: "auto",
      fixedWeekCount: !1,
      showNonCurrentDates: !1,
      events: F.value,
      datesSet({ view: z }) {
        const q = z.currentStart;
        a("month-change", { year: q.getFullYear(), month: q.getMonth() + 1 });
      },
      dayCellClassNames({ date: z }) {
        const q = [
          z.getFullYear(),
          String(z.getMonth() + 1).padStart(2, "0"),
          String(z.getDate()).padStart(2, "0")
        ].join("-"), se = q < O(), fe = [];
        return k.value.has(q) ? fe.push(se ? "sch-day--past" : "sch-day--available") : fe.push("sch-day--past"), q === j.value && fe.push("sch-day--selected"), fe;
      },
      dateClick({ dateStr: z }) {
        z < O() || k.value.has(z) && (j.value = z, a("date-select", { date: z }), setTimeout(() => Z.value?.getApi?.()?.updateSize(), 260));
      },
      selectable: !1,
      editable: !1
    }));
    function T() {
      te.value && (U.value = te.value, a("update", { bookedSlot: te.value }));
    }
    function D(z) {
      if (!z) return "";
      const [q, se, fe] = z.split("-").map(Number);
      return new Date(q, se - 1, fe).toLocaleDateString("en-GB", {
        weekday: "long",
        day: "numeric",
        month: "long"
      });
    }
    const H = P(() => te.value?.start ? new Date(te.value.start).toLocaleDateString("en-GB", {
      weekday: "long",
      day: "numeric",
      month: "long"
    }) : D(j.value || ""));
    function V(z, q) {
      if (!z) return "";
      try {
        return new Date(z).toLocaleTimeString("en-US", {
          timeZone: q || "UTC",
          hour: "numeric",
          minute: "2-digit",
          hour12: !0
        });
      } catch {
        return "";
      }
    }
    function J(z) {
      return z?.start ? V(z.start, o.value) : "";
    }
    function ee(z) {
      return z?.end ? V(z.end, o.value) : "";
    }
    return (z, q) => (u(), f("div", {
      class: "fu-widget",
      "data-widget-id": t.widgetId,
      style: ne(M.value)
    }, [
      t.eventTypeId ? (u(), f("div", oC, [
        m("div", sC, [
          m("p", lC, S(t.eventTypeName || "Event"), 1),
          t.timezone ? (u(), f("div", uC, [
            q[6] || (q[6] = m("span", { class: "fu-info__icon" }, "🌐", -1)),
            m("span", null, S(t.timezone), 1)
          ])) : w("", !0),
          t.description ? (u(), f("p", cC, S(t.description), 1)) : w("", !0),
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
              q[7] || (q[7] = m("span", { class: "fu-tz__globe" }, "🌐", -1)),
              m("span", fC, S(v.value), 1),
              m("span", {
                class: Y(["fu-tz__caret", { "fu-tz__caret--open": s.value }])
              }, "▾", 2)
            ], 8, dC),
            G(He, { name: "fu-tz-pop" }, {
              default: ce(() => [
                s.value ? (u(), f("div", mC, [
                  m("div", hC, [
                    m("span", vC, [
                      G(ie(Gs), { size: 14 })
                    ]),
                    je(m("input", {
                      ref_key: "tzInput",
                      ref: h,
                      "onUpdate:modelValue": q[0] || (q[0] = (se) => l.value = se),
                      class: "fu-tz__search",
                      placeholder: "Search city or country…",
                      autocomplete: "off",
                      spellcheck: "false",
                      onKeydown: [
                        q[1] || (q[1] = ze(ue((se) => A(1), ["prevent"]), ["down"])),
                        q[2] || (q[2] = ze(ue((se) => A(-1), ["prevent"]), ["up"])),
                        q[3] || (q[3] = ze(ue((se) => b(y.value[c.value]), ["prevent"]), ["enter"])),
                        q[4] || (q[4] = ze((se) => s.value = !1, ["esc"]))
                      ]
                    }, null, 544), [
                      [nt, l.value]
                    ])
                  ]),
                  m("ul", {
                    class: "fu-tz__list",
                    ref_key: "tzList",
                    ref: p
                  }, [
                    y.value.length ? w("", !0) : (u(), f("li", pC, "No results")),
                    (u(!0), f(B, null, ae(y.value, (se, fe) => (u(), f("li", {
                      key: se.value,
                      class: Y(["fu-tz__option", {
                        "fu-tz__option--active": se.value === o.value,
                        "fu-tz__option--hi": fe === c.value
                      }]),
                      onMouseenter: (Ae) => c.value = fe,
                      onMousedown: ue((Ae) => b(se), ["prevent"])
                    }, [
                      m("span", yC, S(se.offset), 1),
                      m("span", bC, S(se.city), 1),
                      m("span", AC, S(se.country), 1)
                    ], 42, gC))), 128))
                  ], 512)
                ])) : w("", !0)
              ]),
              _: 1
            })
          ], 512),
          G(He, { name: "fu-slide" }, {
            default: ce(() => [
              te.value ? (u(), f("div", CC, [
                q[10] || (q[10] = m("div", { class: "fu-selected__label" }, "Selected time", -1)),
                m("div", wC, [
                  q[8] || (q[8] = m("span", null, "📅", -1)),
                  m("span", null, S(H.value), 1)
                ]),
                m("div", _C, [
                  q[9] || (q[9] = m("span", null, "🕐", -1)),
                  m("span", null, S(J(te.value)) + " – " + S(ee(te.value)), 1)
                ])
              ])) : w("", !0)
            ]),
            _: 1
          })
        ]),
        m("div", SC, [
          (u(), K(ie(W0), {
            key: L.value,
            ref_key: "calRef",
            ref: Z,
            options: _.value,
            class: "fu-fc"
          }, null, 8, ["options"])),
          G(He, { name: "fu-slide-right" }, {
            default: ce(() => [
              j.value ? (u(), f("div", TC, [
                m("div", kC, [
                  m("p", EC, S(D(j.value)), 1),
                  m("button", {
                    class: "fu-slots__close",
                    onClick: ue(I, ["stop"])
                  }, "✕")
                ]),
                t.slotsLoading ? (u(), f("div", MC, [...q[11] || (q[11] = [
                  m("span", { class: "fu-slots__spinner" }, null, -1)
                ])])) : t.slots && t.slots.length ? (u(), f("div", NC, [
                  (u(!0), f(B, null, ae(t.slots, (se) => (u(), f("div", {
                    key: se.id,
                    class: "fu-slot"
                  }, [
                    m("button", {
                      class: Y(["fu-slot__time", { "fu-slot__time--chosen": te.value?.id === se.id }]),
                      onClick: ue((fe) => te.value = se, ["stop"])
                    }, S(J(se)), 11, DC),
                    G(He, { name: "fu-confirm-pop" }, {
                      default: ce(() => [
                        te.value?.id === se.id ? (u(), f("button", {
                          key: 0,
                          class: Y(["fu-slot__confirm", { "fu-slot__confirm--done": U.value?.id === se.id }]),
                          onClick: ue(T, ["stop"])
                        }, S(U.value?.id === se.id ? "✓ Selected" : "Confirm"), 3)) : w("", !0)
                      ]),
                      _: 2
                    }, 1024)
                  ]))), 128))
                ])) : (u(), f("p", IC, "No availability"))
              ])) : w("", !0)
            ]),
            _: 1
          })
        ])
      ])) : (u(), f("div", rC, [...q[5] || (q[5] = [
        m("span", { class: "fu-empty__icon" }, "📅", -1),
        m("p", { class: "fu-empty__title" }, "No event type selected", -1),
        m("p", { class: "fu-empty__sub" }, "Select an event type from the settings panel", -1)
      ])]))
    ], 12, iC));
  }
}), ps = /* @__PURE__ */ X(OC, [["__scopeId", "data-v-54e3bb3e"]]), gs = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: ps
}, Symbol.toStringTag, { value: "Module" })), RC = {
  key: 0,
  class: "fu-embed-error-state"
}, xC = {
  key: 0,
  class: "fu-embed-success"
}, PC = { class: "fu-embed-success__sub" }, $C = {
  key: 1,
  class: "fu-panel"
}, FC = {
  key: 2,
  class: "fu-panel"
}, BC = { class: "fu-form-slot-bar" }, zC = { class: "fu-form-slot-bar__date" }, LC = { class: "fu-embed-questions" }, HC = {
  key: 0,
  class: "fu-embed-error"
}, VC = ["disabled"], jC = { key: 0 }, UC = {
  key: 1,
  class: "fu-embed-submit__spinner"
}, WC = /* @__PURE__ */ oe({
  __name: "FuEmbedRenderer",
  props: {
    document: {}
  },
  emits: ["submit"],
  setup(t, { emit: e }) {
    const n = t, a = e;
    function i(k) {
      const F = [];
      for (const O of k?.pages ?? [])
        for (const j of O?.blocks ?? [])
          for (const te of j?.columns ?? [])
            for (const U of te?.widgets ?? []) F.push(U);
      return F;
    }
    const r = P(() => i(n.document)), o = P(
      () => r.value.find((k) => k.type === "scheduler")
    ), s = P(
      () => r.value.filter((k) => k.type === "question")
    ), l = N("idle"), c = Ms(null);
    function d(k) {
      c.value = k.bookedSlot, l.value = s.value.length ? "form" : "submitted";
    }
    function h() {
      l.value = "idle", p.value = {}, g.value = /* @__PURE__ */ new Set();
    }
    const p = N({});
    function v(k, F) {
      p.value = { ...p.value, [k]: F.value }, g.value.delete(k);
    }
    function y(k) {
      const F = k.props.conditions ?? [];
      if (!F.length) return !0;
      const O = k.props.conditionLogic ?? "all", j = F.map((te) => {
        const U = p.value[te.sourceWidgetId];
        switch (te.operator) {
          case "equals":
            return U === te.value;
          case "not_equals":
            return U !== te.value;
          case "contains":
            return Array.isArray(U) ? U.includes(te.value) : String(U ?? "").includes(te.value);
          default:
            return !0;
        }
      });
      return O === "all" ? j.every(Boolean) : j.some(Boolean);
    }
    const g = N(/* @__PURE__ */ new Set());
    function b() {
      const k = /* @__PURE__ */ new Set();
      for (const F of s.value) {
        if (!y(F) || !F.props.required) continue;
        const O = p.value[F.id];
        (O == null || O === "" || Array.isArray(O) && !O.length) && k.add(F.id);
      }
      return g.value = k, k.size === 0;
    }
    const A = N(!1);
    async function C() {
      if (!(!c.value || !b())) {
        A.value = !0;
        try {
          a("submit", { slot: c.value, answers: p.value }), l.value = "submitted";
        } finally {
          A.value = !1;
        }
      }
    }
    const E = P(() => c.value?.date ? new Date(c.value.date).toLocaleString("en-GB", {
      weekday: "long",
      day: "numeric",
      month: "long",
      hour: "numeric",
      minute: "2-digit",
      hour12: !0
    }) : ""), M = P(() => {
      const k = n.document?.meta?.theme?.brandColor ?? "#4f46e5";
      return {
        "--embed-brand": k,
        "--embed-brand-light": k + "18",
        "--embed-brand-mid": k + "44"
      };
    });
    return (k, F) => (u(), f("div", {
      class: "fu-embed",
      style: ne(M.value)
    }, [
      o.value ? (u(), f(B, { key: 1 }, [
        l.value === "submitted" ? (u(), f("div", xC, [
          F[1] || (F[1] = m("div", { class: "fu-embed-success__icon" }, "✓", -1)),
          F[2] || (F[2] = m("p", { class: "fu-embed-success__title" }, "You're booked in", -1)),
          m("p", PC, S(E.value), 1)
        ])) : l.value === "idle" ? (u(), f("div", $C, [
          G(ps, Ot(o.value.props, {
            widgetId: o.value.id,
            onUpdate: d
          }), null, 16, ["widgetId"])
        ])) : l.value === "form" ? (u(), f("div", FC, [
          m("div", BC, [
            m("button", {
              class: "fu-form-slot-bar__back",
              onClick: h
            }, [...F[3] || (F[3] = [
              m("span", null, "←", -1),
              de(" Change time ", -1)
            ])]),
            m("span", zC, S(E.value), 1)
          ]),
          m("div", LC, [
            (u(!0), f(B, null, ae(s.value, (O) => (u(), f(B, {
              key: O.id
            }, [
              G(Rr, Ot({ ref_for: !0 }, O.props, {
                widgetId: O.id,
                isVisible: y(O),
                class: { "fu-embed-question--error": g.value.has(O.id) },
                onUpdate: (j) => v(O.id, j)
              }), null, 16, ["widgetId", "isVisible", "class", "onUpdate"]),
              g.value.has(O.id) ? (u(), f("p", HC, "This field is required")) : w("", !0)
            ], 64))), 128))
          ]),
          m("button", {
            class: "fu-embed-submit",
            disabled: A.value,
            onClick: C
          }, [
            A.value ? (u(), f("span", UC)) : (u(), f("span", jC, "Confirm booking"))
          ], 8, VC)
        ])) : w("", !0)
      ], 64)) : (u(), f("div", RC, [...F[0] || (F[0] = [
        m("div", { class: "fu-embed-error-state__icon" }, "📅", -1),
        m("p", { class: "fu-embed-error-state__title" }, "No scheduler found", -1),
        m("p", { class: "fu-embed-error-state__sub" }, " This document doesn't contain a booking widget. ", -1)
      ])]))
    ], 4));
  }
}), YC = /* @__PURE__ */ X(WC, [["__scopeId", "data-v-50151cce"]]), GC = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: YC
}, Symbol.toStringTag, { value: "Module" })), KC = {
  key: 0,
  class: "service-card__image"
}, qC = ["src"], QC = { class: "service-card__content" }, ZC = ["innerHTML"], JC = ["innerHTML"], XC = { key: 0 }, ew = { key: 1 }, tw = {
  key: 2,
  class: "service-card__footer"
}, nw = /* @__PURE__ */ oe({
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
    const n = e, a = t, i = P(() => a.selectionMode !== "view"), r = P(() => i.value && a.widgetDisplay?.showServicePrice !== !1), o = P(() => {
      const d = String(a.service.unitPrice || "£").match(/[^0-9.,]/)?.[0] ?? "£", h = parseFloat(a.service.quantity) || 0, p = parseFloat(String(a.service.unitPrice || "").replace(/[^0-9.]/g, "")) || 0;
      return `${d}${(h * p).toLocaleString()}`;
    }), s = P(() => {
      const d = a.itemStyle ?? {};
      return {
        background: d.bgColor ?? "#fff",
        borderRadius: `${d.borderRadius ?? 12}px`,
        boxShadow: d.shadow ? `0 ${d.shadow / 2}px ${d.shadow}px rgba(0,0,0,0.12)` : void 0
      };
    }), l = P(() => ({
      fontFamily: a.pricingStyle?.fontFamily,
      fontSize: a.pricingStyle?.fontSize ? `${a.pricingStyle.fontSize}px` : void 0,
      color: a.pricingStyle?.color,
      fontWeight: a.pricingStyle?.bold ? "700" : void 0
    }));
    function c() {
      i.value && n("toggle-select", a.service._id);
    }
    return (d, h) => (u(), f("div", {
      class: Y(["service-card", `service-card--${t.layout}`]),
      style: ne(s.value)
    }, [
      t.widgetDisplay.showImage !== !1 ? (u(), f("div", KC, [
        t.service.image ? (u(), f("img", {
          key: 0,
          src: t.service.image
        }, null, 8, qC)) : w("", !0)
      ])) : w("", !0),
      m("div", QC, [
        m("div", {
          class: "service-card__title",
          innerHTML: t.service.name
        }, null, 8, ZC),
        t.widgetDisplay.showDescription !== !1 ? (u(), f("div", {
          key: 0,
          class: "service-card__desc",
          innerHTML: t.service.description
        }, null, 8, JC)) : w("", !0),
        t.widgetDisplay.showQuantity !== !1 || t.widgetDisplay.showUnitPrice !== !1 ? (u(), f("div", {
          key: 1,
          class: "service-card__pricing",
          style: ne(l.value)
        }, [
          t.widgetDisplay.showQuantity !== !1 ? (u(), f("span", XC, S(t.service.quantity) + " " + S(t.service.unit), 1)) : w("", !0),
          t.widgetDisplay.showUnitPrice !== !1 ? (u(), f("span", ew, S(t.service.unitPrice), 1)) : w("", !0)
        ], 4)) : w("", !0),
        t.widgetDisplay.showServicePrice !== !1 ? (u(), f("div", tw, [
          m("div", {
            class: "service-card__total",
            style: ne(l.value)
          }, S(o.value), 5),
          r.value ? (u(), f("button", {
            key: 0,
            class: Y(["service-card__button", { "service-card__button--selected": t.selected }]),
            onClick: c
          }, S(t.selected ? t.service.selectedButtonText || "Selected" : t.service.buttonText || "Select"), 3)) : w("", !0)
        ])) : w("", !0)
      ])
    ], 6));
  }
}), ys = /* @__PURE__ */ X(nw, [["__scopeId", "data-v-636b3791"]]), aw = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: ys
}, Symbol.toStringTag, { value: "Module" })), iw = /* @__PURE__ */ oe({
  __name: "ServiceRenderer",
  props: {
    widget: {}
  },
  emits: ["action"],
  setup(t, { emit: e }) {
    const n = e, a = t, i = P(() => a.widget.props.layout ?? "row"), r = P(() => a.widget.props.services ?? []), o = P(() => a.widget.props.widgetDisplay ?? {}), s = P(() => a.widget.props.pricingStyle ?? {}), l = P(() => a.widget.props.itemStyle ?? {}), c = P(() => a.widget.props.selectionMode ?? "view"), d = P(() => a.widget.props.selectionRequired ?? !1), h = P(() => a.widget.props.selectedServiceIds ?? []);
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
    return (v, y) => (u(), f("div", {
      class: Y(["service-renderer", `service-renderer--${i.value}`])
    }, [
      (u(!0), f(B, null, ae(r.value, (g) => (u(), K(ys, {
        key: g._id,
        service: g,
        layout: i.value,
        widgetDisplay: o.value,
        pricingStyle: s.value,
        itemStyle: l.value,
        selected: h.value.includes(g._id),
        selectionMode: c.value,
        selectionRequired: d.value,
        onToggleSelect: p
      }, null, 8, ["service", "layout", "widgetDisplay", "pricingStyle", "itemStyle", "selected", "selectionMode", "selectionRequired"]))), 128))
    ], 2));
  }
}), rw = /* @__PURE__ */ X(iw, [["__scopeId", "data-v-d67ca331"]]), bs = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: rw
}, Symbol.toStringTag, { value: "Module" })), ow = ["innerHTML"], sw = /* @__PURE__ */ oe({
  __name: "TextRenderer",
  props: {
    content: {}
  },
  setup(t) {
    return (e, n) => (u(), f("div", {
      class: "fu-text-widget",
      innerHTML: t.content
    }, null, 8, ow));
  }
}), lw = /* @__PURE__ */ X(sw, [["__scopeId", "data-v-25719c05"]]), As = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: lw
}, Symbol.toStringTag, { value: "Module" })), uw = {
  key: 0,
  class: "fu-empty-state"
}, cw = ["src"], dw = /* @__PURE__ */ oe({
  __name: "FuVideoRenderer",
  props: {
    src: {},
    aspectRatio: {},
    contentWidth: {},
    borderRadius: {},
    backgroundColor: {}
  },
  setup(t) {
    const e = t, n = P(() => {
      if (!e.src) return "";
      let r = e.src.trim();
      return /^https?:\/\//.test(r) || (r = "https://" + r), r.includes("youtu.be/") ? `https://www.youtube.com/embed/${r.split("youtu.be/")[1]?.split("?")[0]}` : r.includes("youtube.com/watch?v=") ? `https://www.youtube.com/embed/${new URL(r).searchParams.get("v")}` : r.includes("vimeo.com/") ? `https://player.vimeo.com/video/${r.split("vimeo.com/")[1]?.split("?")[0]}` : r.includes("loom.com/share/") ? `https://www.loom.com/embed/${r.split("loom.com/share/")[1]?.split("?")[0]}` : r;
    }), a = P(() => ({
      backgroundColor: n.value ? "transparent" : e.backgroundColor || "#f5f7ff",
      borderRadius: `${e.borderRadius ?? 8}px`,
      border: "1px solid #e5e7eb",
      width: e.contentWidth === "sm" ? "60%" : e.contentWidth === "md" ? "80%" : (e.contentWidth === "lg", "100%"),
      margin: "0 auto",
      overflow: "hidden"
    })), i = P(() => {
      const r = e.aspectRatio || "16:9", [o, s] = r.split(":").map(Number);
      return {
        position: "relative",
        width: "100%",
        paddingTop: `${o && s ? s / o * 100 : 56.25}%`
      };
    });
    return (r, o) => (u(), f("div", {
      class: "fu-video-widget",
      style: ne(a.value)
    }, [
      n.value ? (u(), f("div", {
        key: 1,
        class: "fu-video-frame",
        style: ne(i.value)
      }, [
        m("iframe", {
          src: n.value,
          frameborder: "0",
          allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen",
          allowfullscreen: ""
        }, null, 8, cw)
      ], 4)) : (u(), f("div", uw, [
        G(ie(br), { size: 28 }),
        o[0] || (o[0] = m("span", null, "No video available", -1))
      ]))
    ], 4));
  }
}), fw = /* @__PURE__ */ X(dw, [["__scopeId", "data-v-f6e4e3fe"]]), Cs = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: fw
}, Symbol.toStringTag, { value: "Module" })), mw = {
  key: 0,
  class: "fu-filter-dropdown__header"
}, hw = { class: "fu-filter-dropdown__title" }, vw = { class: "fu-filter-dropdown__body" }, pw = { class: "fu-filter-dropdown__footer" }, gw = /* @__PURE__ */ oe({
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
    }), l = P(() => ({
      width: typeof n.width == "number" ? `${n.width}px` : n.width,
      maxWidth: typeof n.maxWidth == "number" ? `${n.maxWidth}px` : n.maxWidth
    }));
    ve(
      () => n.isOpen,
      (b) => {
        typeof b == "boolean" && (i.value = b, b ? (a("open"), ye(v)) : a("close"));
      }
    );
    function c(b) {
      b?.stopPropagation();
      const A = !i.value;
      A && document.dispatchEvent(new CustomEvent("close-all-dropdowns")), i.value = A, a("update:isOpen", A), A ? (a("open"), ye(v)) : a("close");
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
      const b = r.value.getBoundingClientRect(), A = b.bottom + window.scrollY + 8;
      let C = b.left + window.scrollX;
      n.align === "center" && (C += b.width / 2 - o.value.offsetWidth / 2), n.align === "right" && (C = b.right - o.value.offsetWidth + window.scrollX), s.value = {
        position: "absolute",
        top: `${A}px`,
        left: `${C}px`,
        zIndex: 2e3
      };
    }
    function y(b) {
      i.value && r.value && !r.value.contains(b.target) && o.value && !o.value.contains(b.target) && p();
    }
    function g() {
      p();
    }
    return Te(() => {
    }), Ce(() => {
      document.removeEventListener("click", y), document.removeEventListener("close-all-dropdowns", g);
    }), (b, A) => (u(), f("div", {
      class: "fu-filter-dropdown",
      ref_key: "dropdown",
      ref: r
    }, [
      m("div", {
        class: "fu-filter-dropdown__trigger",
        onClick: c
      }, [
        re(b.$slots, "trigger", {}, void 0, !0)
      ]),
      (u(), K(ke, { to: "body" }, [
        G(He, { name: "fade" }, {
          default: ce(() => [
            i.value ? (u(), f("div", {
              key: 0,
              ref_key: "menuRef",
              ref: o,
              class: Y(["fu-filter-dropdown__menu", [`fu-filter-dropdown__menu--${t.align}`]]),
              style: ne([s.value, l.value])
            }, [
              t.title ? (u(), f("div", mw, [
                m("span", hw, S(t.title), 1),
                G($e, {
                  size: "sm",
                  variant: "subtle",
                  icon: ie(Zt),
                  onClick: p
                }, null, 8, ["icon"])
              ])) : w("", !0),
              m("div", vw, [
                re(b.$slots, "content", {}, void 0, !0)
              ]),
              m("div", pw, [
                re(b.$slots, "footer", {}, () => [
                  G(De, {
                    variant: "subtle",
                    size: "sm",
                    text: "Cancel",
                    onClick: h
                  }),
                  G(De, {
                    variant: "solid",
                    size: "sm",
                    text: "Apply",
                    onClick: d
                  })
                ], !0)
              ])
            ], 6)) : w("", !0)
          ]),
          _: 3
        })
      ]))
    ], 512));
  }
}), yw = /* @__PURE__ */ X(gw, [["__scopeId", "data-v-6439f409"]]), bw = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: yw
}, Symbol.toStringTag, { value: "Module" })), Aw = {}, Cw = { class: "fu-smart-header" };
function ww(t, e) {
  return u(), f("header", Cw, [
    re(t.$slots, "default", {}, void 0, !0)
  ]);
}
const _w = /* @__PURE__ */ X(Aw, [["render", ww], ["__scopeId", "data-v-317a0cd5"]]), Sw = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _w
}, Symbol.toStringTag, { value: "Module" })), Tw = { class: "fu-trash-icon" }, kw = /* @__PURE__ */ oe({
  __name: "FusionTrashIcon",
  setup(t) {
    return (e, n) => (u(), f("div", Tw, [
      G(ie(_a), { size: 18 })
    ]));
  }
}), Ew = /* @__PURE__ */ X(kw, [["__scopeId", "data-v-7cafc569"]]), Mw = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Ew
}, Symbol.toStringTag, { value: "Module" })), Nw = { class: "fu-activity-item" }, Dw = { class: "fu-activity-icon" }, Iw = { class: "fu-activity-content" }, Ow = { class: "fu-activity-header" }, Rw = { class: "fu-activity-title" }, xw = { class: "fu-activity-status" }, Pw = { class: "fu-activity-text" }, $w = { class: "fu-activity-subtitle" }, Fw = { class: "fu-activity-footer" }, Bw = { class: "fu-activity-timestamp" }, zw = { class: "fu-activity-user" }, Lw = /* @__PURE__ */ oe({
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
    return (r, o) => (u(), f("div", Nw, [
      m("div", Dw, [
        (u(), K(be(t.icon), {
          class: "fu-activity-icon__svg",
          size: 18
        }))
      ]),
      o[0] || (o[0] = m("div", { class: "fu-activity-line" }, null, -1)),
      m("div", Iw, [
        m("div", {
          class: Y(["fu-activity-card", { "is-clickable": t.clickable }]),
          onClick: i
        }, [
          m("div", Ow, [
            m("div", Rw, [
              m("span", xw, [
                G(ie(gr), {
                  class: "fu-activity-status__icon",
                  size: 16
                })
              ]),
              m("p", Pw, S(t.title), 1)
            ])
          ]),
          m("p", $w, S(t.fileName), 1),
          m("div", Fw, [
            m("span", Bw, S(t.timestamp), 1),
            m("div", zw, [
              G(Qe, {
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
}), Hw = /* @__PURE__ */ X(Lw, [["__scopeId", "data-v-3de71024"]]), Vw = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Hw
}, Symbol.toStringTag, { value: "Module" })), jw = { class: "fu-attachment-left flex flex--gap-md flex--align-center" }, Uw = { class: "fu-attachment-preview" }, Ww = ["src", "alt"], Yw = { class: "fu-attachment-info flex flex--column" }, Gw = { class: "fu-attachment-title" }, Kw = { class: "fu-attachment-meta" }, qw = { class: "fu-attachment-right flex flex--align-center flex--gap-md" }, Qw = { class: "flex flex--column flex--align-center" }, Zw = { class: "fu-attachment-time" }, Jw = /* @__PURE__ */ oe({
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
    const r = P(() => /\.(png|jpe?g|gif|webp|svg)$/i.test(n.fileName)), o = P(() => /\.(mp4|mov|avi|webm)$/i.test(n.fileName));
    return (s, l) => (u(), f("div", {
      class: "fu-attachment-item",
      role: "button",
      tabindex: "0",
      onClick: i,
      onKeypress: ze(i, ["enter"])
    }, [
      m("div", jw, [
        m("div", Uw, [
          r.value ? (u(), f("img", {
            key: 0,
            src: t.fileUrl,
            alt: t.fileName,
            class: "fu-attachment-thumbnail"
          }, null, 8, Ww)) : o.value ? (u(), K(ie(br), {
            key: 1,
            class: "fu-attachment-icon",
            size: 20
          })) : (u(), K(ie(js), {
            key: 2,
            class: "fu-attachment-icon",
            size: 20
          }))
        ]),
        m("div", Yw, [
          m("span", Gw, S(t.fileName), 1),
          m("span", Kw, S(t.fileSize), 1)
        ])
      ]),
      m("div", qw, [
        m("div", Qw, [
          G(Qe, {
            src: t.userAvatar || void 0,
            name: t.userName,
            alt: t.userName,
            size: "xs",
            "show-status": !1
          }, null, 8, ["src", "name", "alt"]),
          m("span", Zw, S(t.timestamp), 1)
        ]),
        t.actions?.length ? (u(), f("div", {
          key: 0,
          class: "fu-attachment-actions",
          onClick: l[0] || (l[0] = ue(() => {
          }, ["stop"]))
        }, [
          G(On, {
            actions: t.actions,
            align: "right"
          }, {
            trigger: ce(() => [
              G($e, {
                icon: ie(wa),
                variant: "ghost",
                size: "sm"
              }, null, 8, ["icon"])
            ]),
            _: 1
          }, 8, ["actions"])
        ])) : w("", !0)
      ])
    ], 32));
  }
}), Xw = /* @__PURE__ */ X(Jw, [["__scopeId", "data-v-c5d821de"]]), e_ = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Xw
}, Symbol.toStringTag, { value: "Module" })), t_ = { class: "fu-note-header" }, n_ = { class: "fu-note-title" }, a_ = ["innerHTML"], i_ = { class: "fu-note-actions" }, r_ = { class: "fu-note-footer" }, o_ = { class: "fu-note-owner" }, s_ = { class: "fu-note-date" }, l_ = /* @__PURE__ */ oe({
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
    return (n, a) => (u(), f("div", {
      class: "fu-note-card",
      onMouseenter: a[0] || (a[0] = (i) => e.value = !0),
      onMouseleave: a[1] || (a[1] = (i) => e.value = !1),
      onClick: a[2] || (a[2] = (i) => n.$emit("open", t.id))
    }, [
      m("div", t_, [
        m("div", n_, [
          m("h4", null, S(t.title), 1),
          t.content ? (u(), f("div", {
            key: 0,
            class: "fu-note-content",
            innerHTML: t.content
          }, null, 8, a_)) : w("", !0)
        ]),
        m("div", i_, [
          G(On, {
            actions: t.actions,
            align: "right"
          }, {
            trigger: ce(() => [
              G($e, {
                icon: ie(wa),
                variant: "ghost",
                size: "sm",
                class: "fu-action-trigger"
              }, null, 8, ["icon"])
            ]),
            _: 1
          }, 8, ["actions"])
        ])
      ]),
      m("div", r_, [
        m("div", o_, [
          G(Qe, {
            src: t.ownerAvatar || void 0,
            name: t.ownerName,
            alt: t.ownerName,
            size: "xs",
            "show-status": !1
          }, null, 8, ["src", "name", "alt"])
        ]),
        m("span", s_, S(t.date), 1)
      ])
    ], 32));
  }
}), u_ = /* @__PURE__ */ X(l_, [["__scopeId", "data-v-5f4f6caa"]]), c_ = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: u_
}, Symbol.toStringTag, { value: "Module" })), d_ = { class: "fu-task-list" }, f_ = { class: "fu-task-left flex flex--gap-xl flex--align-center" }, m_ = { class: "flex flex--column flex--gap-lg w-100" }, h_ = { class: "fu-task-title" }, v_ = { class: "fu-task-meta" }, p_ = { class: "fu-task-priority" }, g_ = { class: "fu-priority-label" }, y_ = { class: "fu-task-owner" }, b_ = { class: "fu-task-actions" }, A_ = /* @__PURE__ */ oe({
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
    const n = t, a = e, i = P(() => [
      {
        label: "Edit Task",
        icon: yr,
        onClick: () => a("edit", n.id)
      },
      {
        label: "Delete Task",
        icon: _a,
        onClick: () => a("delete", n.id)
      }
    ]);
    return (r, o) => (u(), f("div", d_, [
      m("div", f_, [
        m("div", m_, [
          m("div", h_, S(t.title), 1),
          m("div", v_, [
            m("div", p_, [
              m("span", {
                class: "fu-priority-dot",
                style: ne({ backgroundColor: t.priorityColor || "#999" })
              }, null, 4),
              m("span", g_, S(t.priorityLabel), 1)
            ]),
            o[0] || (o[0] = m("span", { class: "fu-dot" }, null, -1)),
            m("div", y_, [
              G(Qe, {
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
      m("div", b_, [
        G(On, {
          actions: i.value,
          content: !1,
          align: "right"
        }, {
          trigger: ce(() => [
            G($e, {
              icon: ie(wa),
              variant: "subtle",
              size: "sm"
            }, null, 8, ["icon"])
          ]),
          _: 1
        }, 8, ["actions"])
      ])
    ]));
  }
}), C_ = /* @__PURE__ */ X(A_, [["__scopeId", "data-v-36cc95a2"]]), w_ = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: C_
}, Symbol.toStringTag, { value: "Module" })), __ = { class: "fu-kanban scrollbar__control customScrollBar" }, S_ = ["draggable", "onDragstart", "onDrop"], T_ = { class: "fu-kanban__column-header" }, k_ = { class: "flex flex--center flex--space" }, E_ = { class: "fu-kanban__column-title" }, M_ = ["title"], N_ = { class: "fu-kanban__header-right" }, D_ = ["title", "onClick"], I_ = { class: "flex flex--center flex--gap-sm" }, O_ = { class: "fu-kanban__count" }, R_ = {
  key: 0,
  class: "fu-kanban__edit-body"
}, x_ = ["onDragover", "onDrop"], P_ = ["onDragstart", "onDrop", "onClick"], $_ = { class: "fu-kanban__card-header" }, F_ = { class: "fu-kanban__card-body" }, B_ = {
  key: 0,
  class: "fu-kanban__empty"
}, z_ = ["onClick"], L_ = /* @__PURE__ */ oe({
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
    const n = t, a = e, i = n.addItemButtonText || "+ Add Item", r = n.addColumnButtonText || "+ Add Stage", o = N(JSON.parse(JSON.stringify(n.columns || []))), s = N(null), l = N(null), c = N(null);
    ve(
      () => n.columns,
      (E) => {
        o.value = JSON.parse(JSON.stringify(E));
      },
      { deep: !0 }
    );
    function d(E, M) {
      s.value = { fromColumnId: E, item: M };
    }
    function h(E) {
      c.value = E;
    }
    function p() {
      c.value = null;
    }
    function v(E, M) {
      const k = s.value;
      if (!k) return;
      const F = o.value.find((j) => j.id === k.fromColumnId), O = o.value.find((j) => j.id === E);
      !F || !O || (F.items = F.items.filter((j) => j.id !== k.item.id), M === null ? O.items.push(k.item) : O.items.splice(M, 0, k.item), a("update:items", o.value), s.value = null, c.value = null);
    }
    function y(E) {
      n.editMode && (l.value = E);
    }
    function g(E) {
      if (!n.editMode) return;
      const M = l.value;
      if (M === null || M === E) return;
      const k = [...o.value], [F] = k.splice(M, 1);
      k.splice(E, 0, F), o.value = k.map((O, j) => ({ ...O, position: j + 1 })), a("update:columns", o.value), l.value = null;
    }
    function b() {
      const E = {
        id: `col-${o.value.length + 1}`,
        title: `Stage ${o.value.length + 1}`,
        color: "#8B5CF6",
        position: o.value.length + 1,
        items: []
      };
      o.value.push(E), a("update:columns", o.value);
    }
    function A(E, M) {
      a("add-item", { column: E, index: M });
    }
    function C(E, M) {
      a("card-click", { id: E.id, item: E, column: M });
    }
    return (E, M) => (u(), f("div", __, [
      m("div", {
        class: "fu-kanban__columns",
        onDragover: M[1] || (M[1] = ue(() => {
        }, ["prevent"]))
      }, [
        (u(!0), f(B, null, ae(o.value, (k, F) => (u(), f("div", {
          key: k.id,
          class: Y(["fu-kanban__column", { "fu-kanban__column--drag": t.editMode }]),
          draggable: t.editMode,
          onDragstart: (O) => y(F),
          onDrop: (O) => g(F),
          onDragover: M[0] || (M[0] = ue(() => {
          }, ["prevent"]))
        }, [
          m("header", T_, [
            m("div", k_, [
              m("div", E_, [
                m("span", {
                  class: "fu-kanban__dot",
                  style: ne({ background: k.color || "#9ca3af" })
                }, null, 4),
                m("span", {
                  class: "fu-kanban__column-name",
                  title: k.title
                }, S(k.title), 9, M_)
              ]),
              m("div", N_, [
                m("button", {
                  class: "fu-kanban__add-item-btn",
                  title: ie(i),
                  onClick: ue((O) => A(k, F), ["stop"])
                }, " + ", 8, D_)
              ])
            ]),
            m("div", I_, [
              re(E.$slots, "column-header", {}, void 0, !0),
              m("span", O_, S(k.items.length), 1)
            ])
          ]),
          t.editMode ? (u(), f("div", R_, [
            re(E.$slots, "edit-column", {
              column: k,
              index: F
            }, void 0, !0)
          ])) : (u(), f(B, { key: 1 }, [
            m("div", {
              class: Y(["fu-kanban__cards scrollbar__control customScrollBar", { "fu-kanban__cards--hover": c.value === k.id }]),
              onDragover: ue((O) => h(k.id), ["prevent"]),
              onDragleave: p,
              onDrop: (O) => v(k.id, null)
            }, [
              (u(!0), f(B, null, ae(k.items, (O, j) => (u(), f("div", {
                key: O.id,
                class: "fu-kanban__card",
                draggable: "true",
                onDragstart: (te) => d(k.id, O),
                onDrop: (te) => v(k.id, j),
                onClick: (te) => C(O, k)
              }, [
                m("header", $_, [
                  m("strong", null, S(O.title), 1)
                ]),
                m("div", F_, [
                  re(E.$slots, "card-body", {
                    item: O,
                    column: k
                  }, void 0, !0)
                ])
              ], 40, P_))), 128)),
              k.items.length ? w("", !0) : (u(), f("div", B_, S(t.noItemtext), 1))
            ], 42, x_),
            m("button", {
              class: "fu-kanban__add-card",
              onClick: (O) => A(k, F)
            }, S(ie(i)), 9, z_)
          ], 64))
        ], 42, S_))), 128)),
        t.editMode ? (u(), f("div", {
          key: 0,
          class: "fu-kanban__add-column",
          onClick: b
        }, S(ie(r)), 1)) : w("", !0)
      ], 32)
    ]));
  }
}), H_ = /* @__PURE__ */ X(L_, [["__scopeId", "data-v-11abb07b"]]), V_ = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: H_
}, Symbol.toStringTag, { value: "Module" })), j_ = { class: "fu-modal__header" }, U_ = { class: "fu-modal__title" }, W_ = { class: "fu-modal__body" }, Y_ = {
  key: 0,
  class: "fu-modal__footer"
}, G_ = /* @__PURE__ */ oe({
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
    return Te(() => {
      window.addEventListener("keydown", i);
    }), Ce(() => {
      window.removeEventListener("keydown", i);
    }), (r, o) => (u(), K(ke, { to: "body" }, [
      t.isVisible ? (u(), f("div", {
        key: 0,
        class: "fu-modal__backdrop",
        onClick: ue(a, ["self"])
      }, [
        m("div", {
          class: Y(["fu-modal", [`fu-modal--${t.size}`, { "fu-modal--fixed-height": t.fixedHeight }]])
        }, [
          m("div", j_, [
            m("h3", U_, S(t.title), 1),
            G($e, {
              text: " ",
              icon: ie(Zt),
              class: "fu-modal__close",
              onClick: a,
              variant: "ghost",
              size: "sm"
            }, null, 8, ["icon"])
          ]),
          m("div", W_, [
            re(r.$slots, "default", {}, () => [
              o[0] || (o[0] = de(" Default modal content. ", -1))
            ], !0)
          ]),
          t.showFooter ? (u(), f("div", Y_, [
            re(r.$slots, "footer", {}, void 0, !0)
          ])) : w("", !0)
        ], 2)
      ])) : w("", !0)
    ]));
  }
}), ws = /* @__PURE__ */ X(G_, [["__scopeId", "data-v-9804bf15"]]), K_ = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: ws
}, Symbol.toStringTag, { value: "Module" })), q_ = { class: "app-container" }, Q_ = { class: "app-shell" }, Z_ = { class: "fu-topbar" }, J_ = { class: "fu-topbar-l" }, X_ = { class: "fu-topbar-c" }, eS = { class: "fu-topbar-r" }, tS = { class: "fu-main-area" }, nS = { class: "fu-sidebar" }, aS = { class: "fu-menu" }, iS = { class: "ai-panel-body" }, rS = { class: "ai-header-actions" }, oS = { class: "ai-content" }, la = 991, lr = "fu-app-ai-panel", ur = 340, sS = 500, lS = {
  __name: "AppShell",
  props: {
    listenToToggleEvent: { type: Boolean, default: !0 }
  },
  setup(t) {
    const e = N(!1), n = N(!0), a = N(!1), i = N(340), r = N(!1), o = N(typeof window < "u" ? window.innerWidth : 1200);
    let s = !1;
    const l = N(!1), c = t;
    function d() {
      o.value <= la ? (e.value = !e.value, n.value = !0) : n.value = !n.value;
    }
    function h() {
      if (o.value <= la) {
        l.value = !0, a.value = !1, C();
        return;
      }
      a.value = !a.value, C(), a.value && window.dispatchEvent(new Event("open-ai"));
    }
    function p() {
      i.value = r.value ? ur : sS, r.value = !r.value, C();
    }
    function v(M) {
      s = !0, document.body.style.cursor = "col-resize", window.addEventListener("mousemove", y), window.addEventListener("mouseup", g);
    }
    function y(M) {
      if (!s) return;
      const k = window.innerWidth - M.clientX;
      k > 280 && k < 600 && (i.value = k, C());
    }
    function g() {
      s = !1, document.body.style.cursor = "default", window.removeEventListener("mousemove", y), window.removeEventListener("mouseup", g);
    }
    function b() {
      o.value = window.innerWidth;
    }
    function A() {
      o.value <= la && e.value && (e.value = !1);
    }
    function C() {
      const M = {
        open: a.value,
        width: i.value,
        maximized: r.value
      };
      localStorage.setItem(lr, JSON.stringify(M));
    }
    function E() {
      const M = localStorage.getItem(lr);
      if (M)
        try {
          const { open: k, width: F, maximized: O } = JSON.parse(M);
          a.value = !!k, i.value = F || ur, r.value = !!O;
        } catch (k) {
          console.warn("Failed to restore AI panel state:", k);
        }
    }
    return Te(() => {
      if (E(), window.addEventListener("resize", b), c.listenToToggleEvent && window.addEventListener("toggle-ai", h), a.value) {
        const M = () => {
          window.removeEventListener("tabs-ready", M), ye(() => {
            a.value = !0, window.dispatchEvent(new Event("open-ai"));
          });
        };
        window.addEventListener("tabs-ready", M);
      }
    }), (M, k) => {
      const F = vr("FusionActionButton");
      return u(), f("div", q_, [
        m("div", Q_, [
          m("div", Z_, [
            m("div", J_, [
              m("button", {
                class: "fu-menu-toggle",
                onClick: d
              }, [...k[2] || (k[2] = [
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
              re(M.$slots, "brand-logo")
            ]),
            m("div", X_, [
              re(M.$slots, "header")
            ]),
            m("div", eS, [
              re(M.$slots, "header-right")
            ])
          ]),
          m("div", tS, [
            m("div", {
              class: Y(["fu-nav-panel", { open: e.value }])
            }, [
              m("section", nS, [
                re(M.$slots, "modules-sidebar")
              ]),
              je(m("section", aS, [
                re(M.$slots, "module-menu")
              ], 512), [
                [Ca, n.value]
              ])
            ], 2),
            m("div", {
              class: Y(["fu-body-area", { "ai-open": a.value }])
            }, [
              m("div", {
                onClick: A,
                class: "fu-body-slot"
              }, [
                re(M.$slots, "default")
              ]),
              G(He, { name: "slide-left" }, {
                default: ce(() => [
                  a.value ? (u(), f("div", {
                    key: 0,
                    class: "ai-panel",
                    style: ne({ width: i.value + "px" })
                  }, [
                    m("div", {
                      class: "ai-resize-handle",
                      onMousedown: v
                    }, null, 32),
                    m("div", iS, [
                      m("header", null, [
                        k[3] || (k[3] = m("h3", null, "Àdisa", -1)),
                        m("div", rS, [
                          G(F, {
                            icon: r.value ? ie(Ys) : ie(Ws),
                            variant: "ghost",
                            size: "sm",
                            onClick: p
                          }, null, 8, ["icon"]),
                          G(F, {
                            icon: ie(Zt),
                            variant: "ghost",
                            size: "sm",
                            onClick: h
                          }, null, 8, ["icon"])
                        ])
                      ]),
                      m("div", oS, [
                        re(M.$slots, "ai-content")
                      ])
                    ])
                  ], 4)) : w("", !0)
                ]),
                _: 3
              })
            ], 2)
          ])
        ]),
        l.value ? (u(), K(ws, {
          key: 0,
          isVisible: l.value,
          title: "Adisa",
          size: "sm",
          onClose: k[0] || (k[0] = (O) => l.value = !1),
          onCancel: k[1] || (k[1] = (O) => l.value = !1)
        }, {
          default: ce(() => [...k[4] || (k[4] = [
            de(" Downlaod Skkido to use Adisa on Mobile ", -1)
          ])]),
          _: 1
        }, 8, ["isVisible"])) : w("", !0)
      ]);
    };
  }
}, uS = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: lS
}, Symbol.toStringTag, { value: "Module" })), cS = { key: 0 }, dS = {
  key: 0,
  class: "fu-listview__th fu-listview__th--checkbox"
}, fS = {
  key: 0,
  class: "fu-skeleton-cell fu-skeleton-cell--checkbox"
}, mS = {
  key: 0,
  class: "fu-skeleton-cell fu-skeleton-cell--header"
}, hS = ["role", "tabindex", "onClick", "onKeydown"], vS = { class: "fu-listview__th-label" }, pS = {
  key: 1,
  class: "fu-listview__sort-indicator"
}, gS = ["onMousedown"], yS = { key: 1 }, bS = {
  key: 0,
  class: "fu-listview__td fu-listview__td--checkbox"
}, AS = { key: 2 }, CS = ["onClick"], wS = { class: "fu-listview__cell" }, _S = /* @__PURE__ */ oe({
  __name: "FusionListView",
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
    function r(I, _) {
      const T = n.columns.findIndex((D) => D.key === _) % 5;
      return i[(I - 1) % i.length][T];
    }
    const o = P(() => n.skeletonRows ?? 8), s = N(
      n.columns.map((I) => ({
        ...I,
        width: I.width || "150px",
        textAlign: I.textAlign || "justify",
        sortable: !!I.sortable
      }))
    ), l = N(!1), c = N(null), d = N(null), h = N(null), p = N("asc"), v = P(() => !!n.sort), y = P(
      () => v.value ? n.sort?.key ?? null : h.value
    ), g = P(
      () => v.value ? n.sort?.direction ?? "asc" : p.value
    ), b = n.showHeader ?? !0, A = () => n.options?.sortable !== !1;
    function C(I) {
      return n.options?.selectable ? n.options?.isRowSelectable ? n.options.isRowSelectable(I) : !0 : !1;
    }
    function E() {
      const I = n.rows.filter((_) => _.__selected && C(_));
      a("row-selected", I);
    }
    ve(l, (I) => {
      n.options?.selectable && (n.rows.forEach((_) => {
        C(_) && (_.__selected = I);
      }), E());
    });
    function M(I) {
      if (!A() || !I.sortable) return;
      const _ = y.value, T = g.value;
      let D = "asc";
      _ === I.key && (D = T === "asc" ? "desc" : "asc"), v.value || (h.value = I.key, p.value = D), a("sort-change", { key: I.key, direction: D });
    }
    function k(I) {
      a("row-clicked", I), n.options?.onRowClick?.(I);
    }
    let F = null, O = 0, j = 0;
    function te(I, _) {
      n.options?.resizeColumn && (F = _, O = I.clientX, j = parseInt(s.value[_].width, 10), document.addEventListener("mousemove", U), document.addEventListener("mouseup", Z));
    }
    function U(I) {
      if (F === null) return;
      const _ = I.clientX - O;
      s.value[F].width = `${Math.max(60, j + _)}px`;
    }
    function Z() {
      F = null, document.removeEventListener("mousemove", U), document.removeEventListener("mouseup", Z);
    }
    function L() {
      const I = d.value;
      I && (I.style.overflowY = "hidden", requestAnimationFrame(() => {
        I.style.overflowY = "auto";
      }));
    }
    return Te(() => {
      L(), window.addEventListener("resize", L);
    }), Ce(() => {
      window.removeEventListener("resize", L), document.removeEventListener("mousemove", U), document.removeEventListener("mouseup", Z);
    }), (I, _) => (u(), f("div", {
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
          ie(b) ? (u(), f("thead", cS, [
            m("tr", null, [
              t.options?.selectable ? (u(), f("th", dS, [
                t.loading ? (u(), f("div", fS)) : (u(), K(Rt, {
                  key: 1,
                  modelValue: l.value,
                  "onUpdate:modelValue": _[0] || (_[0] = (T) => l.value = T),
                  size: "sm"
                }, null, 8, ["modelValue"]))
              ])) : w("", !0),
              (u(!0), f(B, null, ae(s.value, (T, D) => (u(), f("th", {
                key: T.key,
                style: ne({ width: T.width || "auto" }),
                class: Y(["fu-listview__th", `align-${T.textAlign || "justify"}`])
              }, [
                m("div", {
                  class: Y(["fu-listview__th-content", `align-${T.textAlign || "justify"}`])
                }, [
                  t.loading ? (u(), f("div", mS)) : (u(), f("div", {
                    key: 1,
                    class: Y(["fu-listview__th-sortable", {
                      "is-sortable": !!T.sortable,
                      "is-active": y.value === T.key
                    }]),
                    role: T.sortable ? "button" : void 0,
                    tabindex: T.sortable ? 0 : -1,
                    onClick: (H) => M(T),
                    onKeydown: [
                      ze(ue((H) => M(T), ["prevent"]), ["enter"]),
                      ze(ue((H) => M(T), ["prevent"]), ["space"])
                    ]
                  }, [
                    T.icon ? (u(), K(be(T.icon), {
                      key: 0,
                      class: "fu-listview__th-icon"
                    })) : w("", !0),
                    m("span", vS, S(T.label), 1),
                    T.sortable ? (u(), f("span", pS, [
                      y.value === T.key ? (u(), f(B, { key: 0 }, [
                        de(S(g.value === "asc" ? "▲" : "▼"), 1)
                      ], 64)) : (u(), f(B, { key: 1 }, [
                        de("⇅")
                      ], 64))
                    ])) : w("", !0)
                  ], 42, hS)),
                  t.options?.resizeColumn && !t.loading ? (u(), f("span", {
                    key: 2,
                    class: "fu-listview__resize-handle",
                    onMousedown: ue((H) => te(H, D), ["stop"])
                  }, null, 40, gS)) : w("", !0)
                ], 2)
              ], 6))), 128))
            ])
          ])) : w("", !0),
          t.loading ? (u(), f("tbody", yS, [
            (u(!0), f(B, null, ae(o.value, (T) => (u(), f("tr", {
              key: `skeleton-${T}`,
              class: "fu-listview__row fu-listview__row--skeleton"
            }, [
              t.options?.selectable ? (u(), f("td", bS, [..._[2] || (_[2] = [
                m("div", { class: "fu-skeleton-cell fu-skeleton-cell--checkbox" }, null, -1)
              ])])) : w("", !0),
              (u(!0), f(B, null, ae(s.value, (D) => (u(), f("td", {
                key: `skeleton-${T}-${D.key}`,
                class: "fu-listview__td",
                style: ne({ width: D.width })
              }, [
                m("div", {
                  class: "fu-skeleton-cell",
                  style: ne({ width: r(T, D.key) })
                }, null, 4)
              ], 4))), 128))
            ]))), 128))
          ])) : (u(), f("tbody", AS, [
            (u(!0), f(B, null, ae(t.rows, (T) => (u(), f("tr", {
              key: T[t.rowKey],
              class: "fu-listview__row",
              onClick: (D) => k(T)
            }, [
              t.options?.selectable ? (u(), f("td", {
                key: 0,
                class: "fu-listview__td fu-listview__td--checkbox",
                onClick: _[1] || (_[1] = ue(() => {
                }, ["stop"]))
              }, [
                G(Rt, {
                  modelValue: T.__selected,
                  "onUpdate:modelValue": (D) => T.__selected = D,
                  onChange: E,
                  size: "sm",
                  disabled: !C(T)
                }, null, 8, ["modelValue", "onUpdate:modelValue", "disabled"])
              ])) : w("", !0),
              re(I.$slots, "tableRow", { row: T }, () => [
                (u(!0), f(B, null, ae(s.value, (D) => (u(), f("td", {
                  key: D.key,
                  class: Y(["fu-listview__td", `align-${D.textAlign || "justify"}`]),
                  style: ne({ width: D.width })
                }, [
                  re(I.$slots, `cell-${D.key}`, {
                    row: T,
                    col: D
                  }, () => [
                    m("span", wS, S(T[D.key]), 1)
                  ], !0)
                ], 6))), 128))
              ], !0)
            ], 8, CS))), 128))
          ]))
        ])
      ], 512)
    ], 512));
  }
}), SS = /* @__PURE__ */ X(_S, [["__scopeId", "data-v-b16e76a9"]]), TS = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: SS
}, Symbol.toStringTag, { value: "Module" })), kS = { key: 0 }, ES = {
  key: 0,
  class: "fu-listview__th fu-listview__th--checkbox"
}, MS = ["role", "tabindex", "onClick", "onKeydown"], NS = { class: "fu-listview__th-label" }, DS = {
  key: 1,
  class: "fu-listview__sort-indicator"
}, IS = ["onMousedown"], OS = ["onClick"], RS = { class: "fu-listview__cell" }, xS = /* @__PURE__ */ oe({
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
      n.columns.map((U) => ({
        ...U,
        width: U.width || "150px",
        textAlign: U.textAlign || "justify",
        sortable: !!U.sortable
      }))
    ), r = N(!1), o = N(null), s = N(null), l = N(null), c = N("asc"), d = P(() => !!n.sort), h = P(
      () => d.value ? n.sort?.key ?? null : l.value
    ), p = P(
      () => d.value ? n.sort?.direction ?? "asc" : c.value
    ), v = n.showHeader ?? !0, y = () => n.options?.sortable !== !1;
    function g(U) {
      return n.options?.selectable ? n.options?.isRowSelectable ? n.options.isRowSelectable(U) : !0 : !1;
    }
    function b() {
      const U = n.rows.filter((Z) => Z.__selected && g(Z));
      a("row-selected", U);
    }
    ve(r, (U) => {
      n.options?.selectable && (n.rows.forEach((Z) => {
        g(Z) && (Z.__selected = U);
      }), b());
    });
    function A(U) {
      if (!y() || !U.sortable) return;
      const Z = h.value, L = p.value;
      let I = "asc";
      Z === U.key && (I = L === "asc" ? "desc" : "asc"), d.value || (l.value = U.key, c.value = I), a("sort-change", {
        key: U.key,
        direction: I
      });
    }
    function C(U) {
      a("row-clicked", U), n.options?.onRowClick?.(U);
    }
    let E = null, M = 0, k = 0;
    function F(U, Z) {
      n.options?.resizeColumn && (E = Z, M = U.clientX, k = parseInt(i.value[Z].width, 10), document.addEventListener("mousemove", O), document.addEventListener("mouseup", j));
    }
    function O(U) {
      if (E === null) return;
      const Z = U.clientX - M;
      i.value[E].width = `${Math.max(60, k + Z)}px`;
    }
    function j() {
      E = null, document.removeEventListener("mousemove", O), document.removeEventListener("mouseup", j);
    }
    function te() {
      const U = s.value;
      U && (U.style.overflowY = "hidden", requestAnimationFrame(() => {
        U.style.overflowY = "auto";
      }));
    }
    return Te(() => {
      te(), window.addEventListener("resize", te);
    }), Ce(() => {
      window.removeEventListener("resize", te), document.removeEventListener("mousemove", O), document.removeEventListener("mouseup", j);
    }), (U, Z) => (u(), f("div", {
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
          ie(v) ? (u(), f("thead", kS, [
            m("tr", null, [
              t.options?.selectable ? (u(), f("th", ES, [
                G(Rt, {
                  modelValue: r.value,
                  "onUpdate:modelValue": Z[0] || (Z[0] = (L) => r.value = L),
                  size: "sm"
                }, null, 8, ["modelValue"])
              ])) : w("", !0),
              (u(!0), f(B, null, ae(i.value, (L, I) => (u(), f("th", {
                key: L.key,
                style: ne({ width: L.width || "auto" }),
                class: Y(["fu-listview__th", `align-${L.textAlign || "justify"}`])
              }, [
                m("div", {
                  class: Y(["fu-listview__th-content", `align-${L.textAlign || "justify"}`])
                }, [
                  m("div", {
                    class: Y(["fu-listview__th-sortable", {
                      "is-sortable": !!L.sortable,
                      "is-active": h.value === L.key
                    }]),
                    role: L.sortable ? "button" : void 0,
                    tabindex: L.sortable ? 0 : -1,
                    onClick: (_) => A(L),
                    onKeydown: [
                      ze(ue((_) => A(L), ["prevent"]), ["enter"]),
                      ze(ue((_) => A(L), ["prevent"]), ["space"])
                    ]
                  }, [
                    L.icon ? (u(), K(be(L.icon), {
                      key: 0,
                      class: "fu-listview__th-icon"
                    })) : w("", !0),
                    m("span", NS, S(L.label), 1),
                    L.sortable && h.value === L.key ? (u(), f("span", DS, S(p.value === "asc" ? "▲" : "▼"), 1)) : w("", !0)
                  ], 42, MS),
                  t.options?.resizeColumn ? (u(), f("span", {
                    key: 0,
                    class: "fu-listview__resize-handle",
                    onMousedown: ue((_) => F(_, I), ["stop"])
                  }, null, 40, IS)) : w("", !0)
                ], 2)
              ], 6))), 128))
            ])
          ])) : w("", !0),
          m("tbody", null, [
            (u(!0), f(B, null, ae(t.rows, (L) => (u(), f("tr", {
              key: L[t.rowKey],
              class: "fu-listview__row",
              onClick: (I) => C(L)
            }, [
              t.options?.selectable ? (u(), f("td", {
                key: 0,
                class: "fu-listview__td fu-listview__td--checkbox",
                onClick: Z[1] || (Z[1] = ue(() => {
                }, ["stop"]))
              }, [
                G(Rt, {
                  modelValue: L.__selected,
                  "onUpdate:modelValue": (I) => L.__selected = I,
                  onChange: b,
                  size: "sm",
                  disabled: !g(L)
                }, null, 8, ["modelValue", "onUpdate:modelValue", "disabled"])
              ])) : w("", !0),
              re(U.$slots, "tableRow", { row: L }, () => [
                (u(!0), f(B, null, ae(i.value, (I) => (u(), f("td", {
                  key: I.key,
                  class: Y(["fu-listview__td", `align-${I.textAlign || "justify"}`]),
                  style: ne({ width: I.width })
                }, [
                  re(U.$slots, `cell-${I.key}`, {
                    row: L,
                    col: I
                  }, () => [
                    m("span", RS, S(L[I.key]), 1)
                  ], !0)
                ], 6))), 128))
              ], !0)
            ], 8, OS))), 128))
          ])
        ])
      ], 512)
    ], 512));
  }
}), PS = /* @__PURE__ */ X(xS, [["__scopeId", "data-v-17f611f9"]]), $S = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: PS
}, Symbol.toStringTag, { value: "Module" })), FS = { class: "fu-confirm__body" }, BS = { class: "fu-confirm__icon" }, zS = { class: "fu-confirm__title" }, LS = { class: "fu-confirm__message" }, HS = { class: "fu-confirm__footer" }, VS = /* @__PURE__ */ oe({
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
    }, s = P(() => n.variant === "delete" ? _a : n.variant === "warning" ? Ks : gr), l = P(() => n.variant === "delete" || n.variant === "warning" ? "danger" : "solid"), c = (d) => {
      n.isVisible && (n.loading || (d.key === "Enter" && (d.preventDefault(), r()), d.key === "Escape" && i()));
    };
    return Te(() => {
      window.addEventListener("keydown", c);
    }), Ce(() => {
      window.removeEventListener("keydown", c);
    }), (d, h) => (u(), K(ke, { to: "body" }, [
      t.isVisible ? (u(), f("div", {
        key: 0,
        class: "fu-modal__backdrop",
        onClick: ue(o, ["self"])
      }, [
        m("div", {
          class: Y(["fu-confirm", `fu-confirm--${t.variant}`])
        }, [
          m("div", FS, [
            m("div", BS, [
              (u(), K(be(s.value)))
            ]),
            m("h3", zS, S(t.title), 1),
            m("p", LS, S(t.message), 1)
          ]),
          m("div", HS, [
            G(De, {
              variant: "outline",
              buttonWidth: "100%",
              disabled: t.loading,
              onClick: i
            }, {
              default: ce(() => [
                de(S(t.cancelText), 1)
              ]),
              _: 1
            }, 8, ["disabled"]),
            G(De, {
              variant: l.value,
              buttonWidth: "100%",
              loading: t.loading,
              disabled: t.loading,
              onClick: r
            }, {
              default: ce(() => [
                de(S(t.confirmText), 1)
              ]),
              _: 1
            }, 8, ["variant", "loading", "disabled"])
          ])
        ], 2)
      ])) : w("", !0)
    ]));
  }
}), jS = /* @__PURE__ */ X(VS, [["__scopeId", "data-v-094e1d3b"]]), US = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: jS
}, Symbol.toStringTag, { value: "Module" })), WS = {
  key: 0,
  class: "fu-preview-backdrop"
}, YS = { class: "fu-preview-modal" }, GS = { class: "fu-preview-header" }, KS = { class: "fu-preview-header__left" }, qS = { class: "fu-preview-header__right" }, QS = { class: "fu-preview-body" }, ZS = /* @__PURE__ */ oe({
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
    return Te(() => {
      window.addEventListener("keydown", r);
    }), Ce(() => {
      window.removeEventListener("keydown", r), document.body.style.overflow = "";
    }), (o, s) => (u(), K(ke, { to: "body" }, [
      t.isVisible ? (u(), f("div", WS, [
        m("div", YS, [
          m("header", GS, [
            m("div", KS, [
              re(o.$slots, "header-left", {}, void 0, !0)
            ]),
            m("div", qS, [
              re(o.$slots, "header-right", {}, () => [
                G(De, {
                  variant: "subtle",
                  size: "sm",
                  text: "Close preview",
                  onClick: i
                })
              ], !0)
            ])
          ]),
          re(o.$slots, "subheader", {}, () => [
            s[0] || (s[0] = m("header", { class: "fu-preview-subheader" }, null, -1))
          ], !0),
          m("main", QS, [
            re(o.$slots, "default", {}, void 0, !0)
          ])
        ])
      ])) : w("", !0)
    ]));
  }
}), JS = /* @__PURE__ */ X(ZS, [["__scopeId", "data-v-d53784c5"]]), XS = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: JS
}, Symbol.toStringTag, { value: "Module" })), eT = { class: "fu-module-menu-wrapper scrollbar__control customScrollBar" }, tT = { class: "fu-module-menu-wrapper__list" }, nT = {
  key: 0,
  class: "fu-module-menu-empty"
}, aT = /* @__PURE__ */ oe({
  __name: "FusionModuleMenu",
  props: {
    items: {},
    activePath: {}
  },
  setup(t) {
    return (e, n) => {
      const a = vr("router-link");
      return u(), f("div", eT, [
        m("ul", tT, [
          (u(!0), f(B, null, ae(t.items, (i) => (u(), f("li", {
            key: i.path,
            class: Y({ active: t.activePath && t.activePath.startsWith(i.path) })
          }, [
            G(a, {
              class: "fu-module-menu-link",
              to: i.path
            }, {
              default: ce(() => [
                i.icon ? (u(), K(be(i.icon), {
                  key: 0,
                  size: 15,
                  class: "fu-module-menu-icon"
                })) : w("", !0),
                m("span", null, S(i.label), 1)
              ]),
              _: 2
            }, 1032, ["to"])
          ], 2))), 128)),
          !t.items || !t.items.length ? (u(), f("li", nT, "No menu items")) : w("", !0)
        ]),
        re(e.$slots, "default", {}, void 0, !0)
      ]);
    };
  }
}), iT = /* @__PURE__ */ X(aT, [["__scopeId", "data-v-7ff3c35c"]]), rT = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: iT
}, Symbol.toStringTag, { value: "Module" })), oT = { class: "fu-bell-icon" }, sT = {
  key: 2,
  class: "fu-badge"
}, lT = /* @__PURE__ */ oe({
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
        const l = a.value.getBoundingClientRect();
        let c = l.left + window.scrollX;
        e.align === "right" ? c = l.right + window.scrollX - 300 : e.align === "center" && (c = l.left + window.scrollX - 160 + l.width / 2), r.value = {
          top: `${l.bottom + window.scrollY + 8}px`,
          left: `${Math.max(c, 8)}px`,
          position: "absolute",
          zIndex: "2000"
        };
      }
    }, s = (l) => {
      const c = l.target;
      n.value && a.value && !a.value.contains(c) && (!i.value || !i.value.contains(c)) && (n.value = !1);
    };
    return Te(() => document.addEventListener("click", s)), Ce(() => document.removeEventListener("click", s)), (l, c) => (u(), f("div", {
      class: "fu-notification-dropdown",
      ref_key: "dropdown",
      ref: a
    }, [
      m("div", {
        class: "fu-notification__trigger",
        onClick: o
      }, [
        m("div", oT, [
          t.bellIcon ? (u(), K(be(t.bellIcon), {
            key: 0,
            "stroke-width": 1.5,
            class: "fu-bell-svg"
          })) : (u(), K(ie($s), {
            key: 1,
            class: Y(["fu-bell-svg", [e.bellStyle, e.bellClass]])
          }, null, 8, ["class"])),
          t.unreadCount > 0 ? (u(), f("span", sT, S(t.unreadCount), 1)) : w("", !0)
        ])
      ]),
      (u(), K(ke, { to: "body" }, [
        G(He, { name: "fade" }, {
          default: ce(() => [
            n.value ? (u(), f("div", {
              key: 0,
              ref_key: "panelEl",
              ref: i,
              class: "fu-notification__panel",
              style: ne(r.value)
            }, [
              re(l.$slots, "default", {}, () => [
                c[0] || (c[0] = m("div", { class: "fu-empty" }, [
                  m("h4", null, "No Content"),
                  m("p", null, "Use the default slot to pass custom dropdown body.")
                ], -1))
              ], !0)
            ], 4)) : w("", !0)
          ]),
          _: 3
        })
      ]))
    ], 512));
  }
}), uT = /* @__PURE__ */ X(lT, [["__scopeId", "data-v-b710a214"]]), cT = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: uT
}, Symbol.toStringTag, { value: "Module" })), dT = {
  key: 0,
  class: "fu-alert__icon"
}, fT = { class: "fu-alert__content" }, mT = {
  key: 1,
  class: "fu-alert__actions"
}, hT = {
  key: 2,
  class: "fu-alert__close"
}, vT = /* @__PURE__ */ oe({
  __name: "FuAlert",
  props: {
    variant: {},
    icon: { type: Boolean },
    border: { type: Boolean },
    dismissible: { type: Boolean }
  },
  setup(t) {
    const e = N(!0);
    return (n, a) => e.value ? (u(), f("div", {
      key: 0,
      class: Y(["fu-alert", `fu-alert--${t.variant}`, { "fu-alert--bordered": t.border }])
    }, [
      t.icon ? (u(), f("div", dT, [
        re(n.$slots, "icon", {}, () => [
          G(ie(Bs))
        ], !0)
      ])) : w("", !0),
      m("div", fT, [
        re(n.$slots, "default", {}, void 0, !0)
      ]),
      n.$slots.actions ? (u(), f("div", mT, [
        re(n.$slots, "actions", {}, void 0, !0)
      ])) : w("", !0),
      t.dismissible ? (u(), f("div", hT, [
        G($e, {
          icon: ie(Zt),
          size: "sm",
          variant: "ghost",
          onClick: a[0] || (a[0] = (i) => e.value = !1)
        }, null, 8, ["icon"])
      ])) : w("", !0)
    ], 2)) : w("", !0);
  }
}), pT = /* @__PURE__ */ X(vT, [["__scopeId", "data-v-7cd3e248"]]), gT = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: pT
}, Symbol.toStringTag, { value: "Module" })), yT = { class: "fu-toast__content" }, bT = { class: "fu-toast__message" }, AT = /* @__PURE__ */ oe({
  __name: "FusionToast",
  props: {
    message: {},
    type: { default: "info" },
    duration: { default: 3500 }
  },
  setup(t) {
    const e = t, n = N(!1), a = {
      success: zs,
      error: Ls,
      info: Xa,
      dark: Xa
    };
    Te(() => {
      n.value = !0, setTimeout(() => n.value = !1, e.duration);
    });
    function i() {
      n.value = !1;
    }
    return (r, o) => (u(), K(ke, { to: "body" }, [
      G(He, { name: "fu-toast-fade" }, {
        default: ce(() => [
          n.value ? (u(), f("div", {
            key: 0,
            class: Y(["fu-toast", [`fu-toast--${t.type}`]]),
            role: "alert"
          }, [
            m("div", yT, [
              (u(), K(be(a[t.type]), { class: "fu-toast__icon" })),
              m("span", bT, S(t.message), 1),
              m("button", {
                class: "fu-toast__close",
                onClick: i
              }, "×")
            ])
          ], 2)) : w("", !0)
        ]),
        _: 1
      })
    ]));
  }
}), _s = /* @__PURE__ */ X(AT, [["__scopeId", "data-v-9f423b9f"]]), CT = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _s
}, Symbol.toStringTag, { value: "Module" })), wT = { class: "fu-pagination" }, _T = { class: "fu-pagination__left" }, ST = {
  key: 0,
  class: "fu-pagination__info"
}, TT = {
  key: 0,
  class: "fu-skeleton-cell fu-skeleton-cell--info"
}, kT = { class: "fu-pagination__controls" }, ET = ["disabled"], MT = ["disabled", "onClick"], NT = ["disabled"], DT = /* @__PURE__ */ oe({
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
    const n = t, a = e, i = P(
      () => n.pageSizeOptions.map((p) => ({ label: String(p), value: p }))
    ), r = P({
      get() {
        return i.value.find((p) => p.value === n.pageSize) || i.value[0];
      },
      set(p) {
        a("update:pageSize", p.value), a("update:page", 1);
      }
    }), o = P(() => Math.max(1, Math.ceil(n.total / n.pageSize))), s = P(
      () => n.total === 0 ? 0 : (n.page - 1) * n.pageSize + 1
    ), l = P(() => Math.min(n.page * n.pageSize, n.total));
    function c(p) {
      p < 1 || p > o.value || a("update:page", p);
    }
    function d(p) {
      p && c(p);
    }
    const h = P(() => {
      const p = [], v = o.value, y = n.page, g = n.siblingCount, b = Math.max(2, y - g), A = Math.min(v - 1, y + g);
      p.push({ key: "p-1", label: "1", page: 1 }), b > 2 && p.push({ key: "e-left", label: "…", ellipsis: !0 });
      for (let C = b; C <= A; C++)
        p.push({ key: `p-${C}`, label: String(C), page: C });
      return A < v - 1 && p.push({ key: "e-right", label: "…", ellipsis: !0 }), v > 1 && p.push({ key: `p-${v}`, label: String(v), page: v }), p;
    });
    return (p, v) => (u(), f("div", wT, [
      m("div", _T, [
        t.showInfo ? (u(), f("div", ST, [
          t.loading ? (u(), f("div", TT)) : (u(), f(B, { key: 1 }, [
            de(S(s.value) + "–" + S(l.value) + " of " + S(t.total), 1)
          ], 64))
        ])) : w("", !0),
        t.showPageSize ? (u(), K(Sa, {
          key: 1,
          modelValue: r.value,
          "onUpdate:modelValue": v[0] || (v[0] = (y) => r.value = y),
          options: i.value,
          align: "left",
          size: "sm",
          disabled: t.loading
        }, null, 8, ["modelValue", "options", "disabled"])) : w("", !0)
      ]),
      m("div", kT, [
        m("button", {
          class: "fu-pagination__btn",
          disabled: t.page <= 1 || t.loading,
          onClick: v[1] || (v[1] = (y) => c(t.page - 1)),
          "aria-label": "Previous page"
        }, [
          G(ie(qt), { class: "fu-pagination__icon" })
        ], 8, ET),
        t.loading ? (u(), f(B, { key: 0 }, ae(5, (y) => m("div", {
          key: `skel-${y}`,
          class: "fu-skeleton-cell fu-skeleton-cell--page"
        })), 64)) : t.variant !== "simple" ? (u(!0), f(B, { key: 1 }, ae(h.value, (y) => (u(), f("button", {
          key: y.key,
          class: Y(["fu-pagination__btn", { active: y.page === t.page, ellipsis: y.ellipsis }]),
          disabled: !!y.ellipsis,
          onClick: (g) => d(y.page)
        }, S(y.label), 11, MT))), 128)) : w("", !0),
        m("button", {
          class: "fu-pagination__btn",
          disabled: t.page >= o.value || t.loading,
          onClick: v[2] || (v[2] = (y) => c(t.page + 1)),
          "aria-label": "Next page"
        }, [
          G(ie(Qt), { class: "fu-pagination__icon" })
        ], 8, NT)
      ])
    ]));
  }
}), IT = /* @__PURE__ */ X(DT, [["__scopeId", "data-v-ef948ad4"]]), OT = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: IT
}, Symbol.toStringTag, { value: "Module" })), RT = {
  key: 0,
  class: "fu-panel__header px-2"
}, xT = {
  key: 0,
  class: "fu-panel__title-skeleton"
}, PT = {
  key: 1,
  class: "fu-panel__title"
}, $T = {
  key: 2,
  class: "fu-panel__actions"
}, FT = { class: "fu-panel__body-wrapper" }, BT = { class: "fu-panel__body scrollbar__control customScrollBar px-2" }, zT = {
  key: 0,
  class: "fu-panel__skeleton-body"
}, LT = /* @__PURE__ */ oe({
  __name: "FuPanel",
  props: {
    title: {},
    basis: {},
    loading: { type: Boolean }
  },
  setup(t) {
    const e = t, n = P(() => e.basis ? typeof e.basis == "number" ? `${e.basis}px` : e.basis : "300px");
    return (a, i) => (u(), f("div", {
      class: "fu-panel",
      style: ne({ flexBasis: n.value })
    }, [
      t.title || a.$slots.actions ? (u(), f("div", RT, [
        t.loading ? (u(), f("div", xT)) : t.title ? (u(), f("h3", PT, S(t.title), 1)) : w("", !0),
        a.$slots.actions && !t.loading ? (u(), f("div", $T, [
          re(a.$slots, "actions")
        ])) : w("", !0)
      ])) : w("", !0),
      m("div", FT, [
        m("div", BT, [
          t.loading ? (u(), f("div", zT, [...i[0] || (i[0] = [
            hr('<div class="skeleton-line" style="width:60%;height:14px;"></div><div class="skeleton-line" style="width:85%;height:14px;"></div><div class="skeleton-line" style="width:45%;height:14px;"></div><div class="skeleton-line" style="width:70%;height:14px;"></div><div class="skeleton-line" style="width:55%;height:14px;"></div>', 5)
          ])])) : re(a.$slots, "default", { key: 1 })
        ])
      ])
    ], 4));
  }
}), HT = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: LT
}, Symbol.toStringTag, { value: "Module" })), VT = {
  key: 0,
  class: "fu-input-label"
}, jT = {
  key: 0,
  class: "fu-input-required"
}, UT = ["type", "placeholder", "disabled", "required"], WT = {
  key: 1,
  class: "fu-input-error"
}, YT = /* @__PURE__ */ oe({
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
    ), (s, l) => (u(), f("div", {
      class: "fu-input-wrapper",
      style: ne({ width: t.formWrapperWidth })
    }, [
      t.label ? (u(), f("label", VT, [
        de(S(t.label) + " ", 1),
        t.required ? (u(), f("span", jT, "*")) : w("", !0)
      ])) : w("", !0),
      m("div", {
        class: Y(["fu-input-container", [`fu-input--${t.size}`, `fu-input--${t.variant}`, { "fu-input--error": t.error }]])
      }, [
        je(m("input", Ot(s.$attrs, {
          class: "fu-input",
          type: r.value ? "text" : "password",
          placeholder: t.placeholder,
          disabled: t.disabled,
          required: t.required,
          "onUpdate:modelValue": l[0] || (l[0] = (c) => i.value = c)
        }), null, 16, UT), [
          [mr, i.value]
        ]),
        m("button", {
          type: "button",
          class: "fu-password-toggle",
          onClick: o
        }, [
          (u(), K(be(r.value ? ie(Hs) : ie(Vs)), { class: "fu-password-icon" }))
        ])
      ], 2),
      t.error ? (u(), f("span", WT, S(t.error), 1)) : w("", !0)
    ], 4));
  }
}), GT = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: YT
}, Symbol.toStringTag, { value: "Module" })), KT = { class: "fu-popover__body customScrollBar" }, qT = /* @__PURE__ */ oe({
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
    const a = t, i = n, r = N(!1), o = N(null), s = N(null), l = N({
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
      l.value = {
        position: "fixed",
        visibility: "hidden",
        top: "-9999px",
        left: "-9999px",
        width: a.width ?? "auto",
        zIndex: 9999,
        maxHeight: a.maxHeight ?? "none"
      }, r.value = !0, i("open"), ye(
        () => requestAnimationFrame(
          () => requestAnimationFrame(() => {
            y(), ye(() => {
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
      const b = o.value.getBoundingClientRect(), A = s.value.getBoundingClientRect(), C = 8, E = a.offset ?? 6, M = window.innerHeight - b.bottom - C, k = b.top - C;
      let F = a.side ?? "bottom";
      F === "bottom" && A.height > M && k > M ? F = "top" : F === "top" && A.height > k && M > k && (F = "bottom");
      let O = F === "top" ? b.top - A.height - E : b.bottom + E, j = a.align === "right" ? b.right - A.width : a.align === "center" ? b.left + b.width / 2 - A.width / 2 : b.left;
      j = Math.max(C, Math.min(j, window.innerWidth - A.width - C)), O = Math.max(C, Math.min(O, window.innerHeight - A.height - C)), l.value = {
        position: "fixed",
        top: `${O}px`,
        left: `${j}px`,
        width: a.width ?? "auto",
        maxHeight: a.maxHeight ?? "none",
        zIndex: 9999,
        visibility: "visible"
      };
    }
    function g(b) {
      if (!r.value) return;
      const A = b.target;
      o.value?.contains(A) || s.value?.contains(A) || v();
    }
    return Te(() => {
      window.addEventListener("mousedown", g), window.addEventListener("resize", y), window.addEventListener("scroll", y, !0);
    }), Ce(() => {
      window.removeEventListener("mousedown", g), window.removeEventListener("resize", y), window.removeEventListener("scroll", y, !0);
    }), e({ open: p, close: v }), (b, A) => (u(), f(B, null, [
      m("div", {
        ref_key: "triggerRef",
        ref: o,
        class: "fu-popover-wrap",
        onClick: h
      }, [
        re(b.$slots, "trigger", {}, void 0, !0)
      ], 512),
      (u(), K(ke, { to: "body" }, [
        G(He, { name: "fu-popover" }, {
          default: ce(() => [
            r.value ? (u(), f("div", {
              key: 0,
              ref_key: "popoverRef",
              ref: s,
              class: "fu-popover",
              style: ne(l.value),
              tabindex: "-1",
              onClick: A[0] || (A[0] = ue(() => {
              }, ["stop"]))
            }, [
              b.$slots.header ? (u(), f("div", {
                key: 0,
                class: Y(["fu-popover__header", { "is-sticky": ie(c) }])
              }, [
                re(b.$slots, "header", {}, void 0, !0)
              ], 2)) : w("", !0),
              m("div", KT, [
                re(b.$slots, "default", {}, void 0, !0)
              ]),
              b.$slots.footer ? (u(), f("div", {
                key: 1,
                class: Y(["fu-popover__footer", { "is-sticky": ie(d) }])
              }, [
                re(b.$slots, "footer", {}, void 0, !0)
              ], 2)) : w("", !0)
            ], 4)) : w("", !0)
          ]),
          _: 3
        })
      ]))
    ], 64));
  }
}), QT = /* @__PURE__ */ X(qT, [["__scopeId", "data-v-a55195d8"]]), ZT = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: QT
}, Symbol.toStringTag, { value: "Module" })), JT = { class: "fu-progress-stepper" }, XT = { class: "fu-progress-bar" }, ek = {
  key: 0,
  class: "fu-step-labels"
}, tk = ["onClick"], nk = { class: "circle" }, ak = { class: "label" }, ik = /* @__PURE__ */ oe({
  __name: "FusionProgressStepper",
  props: {
    currentStep: {},
    totalSteps: {},
    showLabels: { type: Boolean },
    steps: {}
  },
  emits: ["step-click"],
  setup(t, { emit: e }) {
    const n = t, a = e, i = P(
      () => `${(n.currentStep + 1) / n.totalSteps * 100}%`
    ), r = (o) => a("step-click", o);
    return (o, s) => (u(), f("div", JT, [
      m("div", XT, [
        m("div", {
          class: "fu-progress-fill",
          style: ne({ width: i.value })
        }, null, 4)
      ]),
      t.showLabels && t.steps ? (u(), f("div", ek, [
        (u(!0), f(B, null, ae(t.steps, (l, c) => (u(), f("div", {
          key: c,
          class: Y(["fu-step-label", { active: t.currentStep === c }]),
          onClick: (d) => r(c)
        }, [
          m("div", nk, S(c + 1), 1),
          m("div", ak, S(l.title), 1)
        ], 10, tk))), 128))
      ])) : w("", !0)
    ]));
  }
}), rk = /* @__PURE__ */ X(ik, [["__scopeId", "data-v-6ac0e869"]]), ok = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: rk
}, Symbol.toStringTag, { value: "Module" })), sk = { class: "fu-range-control" }, lk = {
  key: 0,
  class: "fu-range-label"
}, uk = { class: "fu-range-track" }, ck = ["min", "max", "step", "value"], dk = { class: "fu-range-value" }, fk = /* @__PURE__ */ oe({
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
      const s = o.target, l = Number(s.value);
      a("update:modelValue", l), a("change", l);
    }
    const r = P(
      () => n.unit ? `${n.modelValue}${n.unit}` : String(n.modelValue)
    );
    return (o, s) => (u(), f("div", sk, [
      t.label ? (u(), f("label", lk, S(t.label), 1)) : w("", !0),
      m("div", uk, [
        m("input", {
          type: "range",
          min: t.min,
          max: t.max,
          step: t.step,
          value: t.modelValue,
          onInput: i
        }, null, 40, ck),
        m("span", dk, S(r.value), 1)
      ])
    ]));
  }
}), mk = /* @__PURE__ */ X(fk, [["__scopeId", "data-v-9c1e4c91"]]), hk = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: mk
}, Symbol.toStringTag, { value: "Module" })), vk = {};
function pk(t, e) {
  return null;
}
const gk = /* @__PURE__ */ X(vk, [["render", pk]]), yk = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: gk
}, Symbol.toStringTag, { value: "Module" })), bk = {};
function Ak(t, e) {
  return null;
}
const Ck = /* @__PURE__ */ X(bk, [["render", Ak]]), wk = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Ck
}, Symbol.toStringTag, { value: "Module" })), _k = {};
function Sk(t, e) {
  return null;
}
const Tk = /* @__PURE__ */ X(_k, [["render", Sk]]), kk = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Tk
}, Symbol.toStringTag, { value: "Module" })), Ek = {};
function Mk(t, e) {
  return null;
}
const Nk = /* @__PURE__ */ X(Ek, [["render", Mk]]), Dk = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Nk
}, Symbol.toStringTag, { value: "Module" })), Ik = {};
function Ok(t, e) {
  return null;
}
const Rk = /* @__PURE__ */ X(Ik, [["render", Ok]]), xk = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Rk
}, Symbol.toStringTag, { value: "Module" })), Pk = {};
function $k(t, e) {
  return null;
}
const Fk = /* @__PURE__ */ X(Pk, [["render", $k]]), Bk = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Fk
}, Symbol.toStringTag, { value: "Module" })), zk = {}, Lk = { class: "fu-section-header" }, Hk = { class: "fu-section-header__left" }, Vk = { class: "fu-section-header__right" };
function jk(t, e) {
  return u(), f("div", Lk, [
    m("div", Hk, [
      re(t.$slots, "left", {}, void 0, !0)
    ]),
    m("div", Vk, [
      re(t.$slots, "right", {}, void 0, !0)
    ])
  ]);
}
const Uk = /* @__PURE__ */ X(zk, [["render", jk], ["__scopeId", "data-v-b7f6e763"]]), Wk = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Uk
}, Symbol.toStringTag, { value: "Module" })), Yk = { class: "fu-sidebar__list" }, Gk = ["onClick", "onMouseenter"], Kk = { class: "fu-sidebar__icon-wrapper" }, qk = {
  key: 0,
  class: "fu-sidebar__badge"
}, Qk = {
  key: 0,
  class: "fu-sidebar__label"
}, Zk = /* @__PURE__ */ oe({
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
    const n = N(null), a = N({}), i = P(() => ({
      "--fu-sidebar-bg": e.backgroundColor ?? "var(--fu-brand-background)",
      "--fu-sidebar-radius": e.borderRadius ?? "0px",
      width: e.hideLabels ? "54px" : "70px"
    }));
    function r(s, l) {
      if (!e.hideLabels) return;
      const c = e.modules.find((h) => h.name === l);
      n.value = c?.label ?? l;
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
    return (s, l) => (u(), f("nav", {
      class: "fu-sidebar",
      style: ne(i.value)
    }, [
      m("ul", Yk, [
        (u(!0), f(B, null, ae(t.modules, (c) => (u(), f("li", {
          key: c.name,
          class: Y({ active: t.activeModule === c.name })
        }, [
          m("div", {
            class: Y(["fu-sidebar__item", { "fu-sidebar__item--collapsed": t.hideLabels }]),
            onClick: (d) => s.$emit("select", c),
            onMouseenter: (d) => r(d, c.name),
            onMouseleave: o
          }, [
            m("div", Kk, [
              (u(), K(be(c.icon), {
                class: "fu-sidebar__icon",
                size: 20
              })),
              c.count ? (u(), f("span", qk, S(c.count > 99 ? "99+" : c.count), 1)) : w("", !0)
            ]),
            t.hideLabels ? w("", !0) : (u(), f("span", Qk, S(c.label), 1))
          ], 42, Gk)
        ], 2))), 128))
      ]),
      (u(), K(ke, { to: "body" }, [
        t.hideLabels && n.value ? (u(), f("span", {
          key: 0,
          class: "fu-sidebar__tooltip",
          style: ne(a.value)
        }, S(n.value), 5)) : w("", !0)
      ]))
    ], 4));
  }
}), Jk = /* @__PURE__ */ X(Zk, [["__scopeId", "data-v-3af597f2"]]), Xk = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Jk
}, Symbol.toStringTag, { value: "Module" })), eE = ["disabled", "aria-expanded"], tE = ["aria-expanded", "disabled"], nE = ["onClick"], aE = ["src"], iE = { class: "fu-split-button__option-label" }, rE = /* @__PURE__ */ oe({
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
    const n = t, a = e, i = N(!1), r = N(null), o = N(null), s = P(() => n.align ?? "right"), l = N({}), c = P(() => `fu-split-button--${n.size ?? "sm"}`), d = P(() => `fu-split-button--${n.variant ?? "solid"}`), h = P(() => ({
      ...n.color ? { "--fu-split-bg": n.color } : {},
      ...n.buttonWidth ? { width: n.buttonWidth } : {}
    }));
    function p() {
      n.disabled || (i.value = !i.value, i.value && ye(() => {
        v(), window.addEventListener("click", y), window.addEventListener("resize", v);
      }));
    }
    function v() {
      if (!o.value || !r.value) return;
      const A = o.value.getBoundingClientRect(), C = r.value.offsetWidth, E = {
        top: `${A.bottom + window.scrollY + 4}px`,
        left: `${A.left + window.scrollX}px`
      };
      s.value === "right" ? E.left = `${A.right - C + window.scrollX}px` : s.value === "center" && (E.left = `${A.left + A.width / 2 - C / 2 + window.scrollX}px`), l.value = {
        position: "absolute",
        ...E,
        zIndex: "1000"
      };
    }
    function y(A) {
      o.value?.contains(A.target) || r.value?.contains(A.target) || (i.value = !1, window.removeEventListener("click", y), window.removeEventListener("resize", v));
    }
    function g() {
      n.disabled || a("main-action");
    }
    function b(A) {
      A.onClick && A.onClick(), a("select", A), i.value = !1, window.removeEventListener("click", y), window.removeEventListener("resize", v);
    }
    return Te(() => {
      Ce(() => {
        window.removeEventListener("click", y), window.removeEventListener("resize", v);
      });
    }), (A, C) => (u(), f("div", {
      class: Y(["fu-split-button", [c.value, d.value]]),
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
        t.icon ? (u(), K(be(t.icon), {
          key: 0,
          class: "fu-split-button__icon"
        })) : w("", !0),
        m("span", null, [
          re(A.$slots, "default", {}, void 0, !0)
        ])
      ], 8, eE),
      m("button", {
        class: "fu-split-button__toggle",
        onClick: p,
        "aria-expanded": i.value,
        disabled: t.disabled,
        type: "button",
        "aria-label": "Toggle dropdown"
      }, [
        G(ie(Le))
      ], 8, tE),
      (u(), K(ke, { to: "body" }, [
        G(He, { name: "fade" }, {
          default: ce(() => [
            i.value ? (u(), f("div", {
              key: 0,
              class: Y(["fu-split-button__dropdown", [`fu-split-button__dropdown--${s.value}`]]),
              ref_key: "dropdownRef",
              ref: r,
              style: ne(l.value)
            }, [
              (u(!0), f(B, null, ae(t.options, (E) => (u(), f("div", {
                key: E.value,
                class: "fu-split-button__option",
                onClick: (M) => b(E)
              }, [
                E.type === "icon" ? (u(), K(be(E.icon), {
                  key: 0,
                  class: "fu-split-button__option-icon"
                })) : E.type === "image" ? (u(), f("img", {
                  key: 1,
                  src: E.imageUrl,
                  class: "fu-split-button__option-image",
                  alt: ""
                }, null, 8, aE)) : w("", !0),
                m("span", iE, S(E.label), 1)
              ], 8, nE))), 128))
            ], 6)) : w("", !0)
          ]),
          _: 1
        })
      ]))
    ], 6));
  }
}), oE = /* @__PURE__ */ X(rE, [["__scopeId", "data-v-569e263d"]]), sE = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: oE
}, Symbol.toStringTag, { value: "Module" })), lE = {
  key: 0,
  class: "fu-empty__visual"
}, uE = ["src", "alt"], cE = { class: "fu-empty__body" }, dE = { class: "fu-empty__title" }, fE = {
  key: 0,
  class: "fu-empty__description"
}, mE = {
  key: 1,
  class: "fu-empty__actions"
}, hE = /* @__PURE__ */ oe({
  __name: "FusionEmpty",
  props: {
    title: {},
    description: {},
    visual: {},
    primaryAction: {},
    secondaryActions: {},
    size: { default: "md" },
    variant: { default: "default" }
  },
  setup(t) {
    return (e, n) => (u(), f("div", {
      class: Y(["fu-empty", [`fu-empty--${t.size}`, `fu-empty--${t.variant}`]])
    }, [
      t.visual && t.visual.type !== "none" ? (u(), f("div", lE, [
        t.visual.type === "icon" ? (u(), K(be(t.visual.value), {
          key: 0,
          class: "fu-empty__icon"
        })) : t.visual.type === "image" ? (u(), f("img", {
          key: 1,
          src: t.visual.src,
          alt: t.visual.alt,
          class: "fu-empty__image"
        }, null, 8, uE)) : w("", !0)
      ])) : w("", !0),
      m("div", cE, [
        m("p", dE, S(t.title), 1),
        t.description ? (u(), f("p", fE, S(t.description), 1)) : w("", !0)
      ]),
      t.primaryAction || t.secondaryActions?.length ? (u(), f("div", mE, [
        t.primaryAction ? (u(), K(De, {
          key: 0,
          text: t.primaryAction.label,
          buttonWidth: "fit-content",
          onClick: n[0] || (n[0] = (a) => t.primaryAction.onClick?.())
        }, null, 8, ["text"])) : w("", !0),
        (u(!0), f(B, null, ae(t.secondaryActions, (a) => (u(), K(De, {
          key: a.label,
          text: a.label,
          buttonWidth: "fit-content",
          variant: "subtle",
          onClick: (i) => a.onClick?.()
        }, null, 8, ["text", "onClick"]))), 128))
      ])) : w("", !0)
    ], 2));
  }
}), vE = /* @__PURE__ */ X(hE, [["__scopeId", "data-v-625fa32d"]]), pE = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: vE
}, Symbol.toStringTag, { value: "Module" })), gE = ["aria-checked", "disabled"], yE = /* @__PURE__ */ oe({
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
    const r = P(() => {
      switch (n.size) {
        case "sm":
          return "fu-switch--sm";
        case "lg":
          return "fu-switch--lg";
        default:
          return "fu-switch--md";
      }
    });
    return (o, s) => (u(), f("button", {
      type: "button",
      class: Y(["fu-switch", [{ "fu-switch--checked": t.modelValue, disabled: t.disabled }, r.value]]),
      role: "switch",
      "aria-checked": t.modelValue,
      disabled: t.disabled,
      onClick: i
    }, [...s[0] || (s[0] = [
      m("span", { class: "fu-switch__thumb" }, null, -1)
    ])], 10, gE));
  }
}), bE = /* @__PURE__ */ X(yE, [["__scopeId", "data-v-c8285d1a"]]), AE = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: bE
}, Symbol.toStringTag, { value: "Module" })), CE = { class: "fu-tabs" }, wE = { class: "fu-tabs__header-wrapper" }, _E = { class: "fu-tabs-buttons scrollbar__control customScrollBar" }, SE = ["onClick", "disabled"], TE = {
  key: 0,
  class: "fu-tab__avatar"
}, kE = ["src"], EE = {
  key: 1,
  class: "fu-tab__avatar-fallback"
}, ME = {
  key: 2,
  class: "fu-tab__title"
}, NE = {
  key: 3,
  class: "fu-tab__count"
}, DE = { class: "fu-tabs__content-wrapper" }, IE = {
  key: 0,
  class: "fu-tabs__footer"
}, OE = {
  __name: "FusionTab",
  props: {
    tabs: Array,
    defaultActiveDesktop: String,
    defaultActiveMobile: String
  },
  emits: ["tab-change"],
  setup(t, { expose: e, emit: n }) {
    const a = t, i = n, r = N(window.innerWidth <= 768), o = N(""), s = N(null), l = P(
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
      !y || y.disabled || (o.value = v, i("tab-change", v), ye(() => {
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
      r.value = window.innerWidth <= 768, v !== r.value && ye(h);
    }
    return Te(() => {
      p(), h(), c(), window.addEventListener("resize", p);
    }), Ce(() => {
      window.removeEventListener("resize", p);
    }), e({ setActive: d }), (v, y) => (u(), f("div", CE, [
      m("div", wE, [
        m("div", _E, [
          (u(!0), f(B, null, ae(l.value, (g) => (u(), f("button", {
            key: g.key,
            onClick: (b) => d(g.key),
            class: Y(["fu-tab", { "fu-tab--active": o.value === g.key }]),
            disabled: g.disabled
          }, [
            g.avatarSrc || g.avatarText ? (u(), f("div", TE, [
              g.avatarSrc ? (u(), f("img", {
                key: 0,
                src: g.avatarSrc,
                class: "fu-tab__avatar-img",
                alt: "avatar"
              }, null, 8, kE)) : (u(), f("div", EE, S(g.avatarText?.charAt(0)?.toUpperCase()), 1))
            ])) : g.icon ? (u(), K(be(g.icon), {
              key: 1,
              size: 16,
              class: "fu-tab__icon"
            })) : w("", !0),
            !g.avatarSrc && !g.avatarText && g.title ? (u(), f("span", ME, S(g.title), 1)) : w("", !0),
            typeof g.count == "number" ? (u(), f("span", NE, S(g.count), 1)) : w("", !0)
          ], 10, SE))), 128))
        ])
      ]),
      m("div", DE, [
        m("div", {
          class: "fu-tabs__body scrollbar__control customScrollBar",
          ref_key: "tabBody",
          ref: s
        }, [
          (u(), K(Ns, null, [
            (u(!0), f(B, null, ae(l.value, (g) => je((u(), f("div", {
              key: g.key,
              class: "fu-tab-panel"
            }, [
              re(v.$slots, g.key, {}, void 0, !0)
            ])), [
              [Ca, o.value === g.key]
            ])), 128))
          ], 1024))
        ], 512),
        v.$slots.footer ? (u(), f("div", IE, [
          re(v.$slots, "footer", {}, void 0, !0)
        ])) : w("", !0)
      ])
    ]));
  }
}, RE = /* @__PURE__ */ X(OE, [["__scopeId", "data-v-6151e991"]]), xE = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: RE
}, Symbol.toStringTag, { value: "Module" })), PE = { class: "fu-theme-selector" }, $E = { class: "fu-theme-grid" }, FE = ["onClick"], BE = {
  key: 0,
  class: "fu-theme-check"
}, zE = { class: "fu-theme-label" }, LE = /* @__PURE__ */ oe({
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
    return (i, r) => (u(), f("div", PE, [
      m("div", $E, [
        (u(!0), f(B, null, ae(t.themes, (o) => (u(), f("div", {
          key: o.key,
          class: Y(["fu-theme-card", { "is-active": t.modelValue === o.key }]),
          onClick: (s) => a(o.key),
          tabindex: "0",
          role: "button"
        }, [
          m("div", {
            class: Y(["fu-theme-preview", `fu-theme-preview--${o.key}`])
          }, [
            r[0] || (r[0] = m("div", { class: "fu-theme-header" }, null, -1)),
            r[1] || (r[1] = m("div", { class: "fu-theme-body" }, null, -1)),
            r[2] || (r[2] = m("div", { class: "fu-theme-footer" }, null, -1)),
            t.modelValue === o.key ? (u(), f("div", BE, [
              G(ie(pr), { class: "fu-check-icon" })
            ])) : w("", !0)
          ], 2),
          m("span", zE, S(o.name), 1)
        ], 10, FE))), 128))
      ])
    ]));
  }
}), HE = /* @__PURE__ */ X(LE, [["__scopeId", "data-v-405e1dba"]]), VE = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: HE
}, Symbol.toStringTag, { value: "Module" })), jE = { class: "fu-toolbar__left" }, UE = { class: "fu-toolbar__actions" }, WE = /* @__PURE__ */ oe({
  __name: "FusionToolbar",
  props: {
    wrap: { type: Boolean, default: !0 },
    gap: { type: String, default: "md" },
    align: { type: String, default: "center" }
  },
  setup(t) {
    const e = t, n = P(() => ({
      "flex--wrap": e.wrap,
      [`flex--gap-${e.gap}`]: !!e.gap,
      [`align--${e.align}`]: !!e.align
    }));
    return (a, i) => (u(), f("div", {
      class: Y(["fu-toolbar", n.value])
    }, [
      m("div", jE, [
        re(a.$slots, "left", {}, void 0, !0)
      ]),
      m("div", UE, [
        re(a.$slots, "right", {}, void 0, !0)
      ])
    ], 2));
  }
}), YE = /* @__PURE__ */ X(WE, [["__scopeId", "data-v-aa44a495"]]), GE = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: YE
}, Symbol.toStringTag, { value: "Module" })), KE = {
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
}, qE = { class: "fu-under-construction" }, QE = { class: "fu-under-construction__inner" }, ZE = ["src", "alt"], JE = { class: "fu-under-construction__content" }, XE = { class: "fu-under-construction__title" }, e1 = { class: "fu-under-construction__subtitle" };
function t1(t, e, n, a, i, r) {
  return u(), f("div", qE, [
    m("div", QE, [
      m("img", {
        class: "fu-under-construction__image",
        src: n.imageSrc,
        alt: n.imageAlt
      }, null, 8, ZE),
      m("div", JE, [
        m("h1", XE, S(n.title), 1),
        m("p", e1, S(n.subtitle), 1),
        re(t.$slots, "default")
      ])
    ])
  ]);
}
const n1 = /* @__PURE__ */ X(KE, [["render", t1]]), a1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: n1
}, Symbol.toStringTag, { value: "Module" }));
function cr() {
  return ({ message: t, type: e = "info", duration: n = 3500 }) => {
    const a = document.createElement("div");
    document.body.appendChild(a);
    const i = Ds(_s, { message: t, type: e, duration: n });
    i.mount(a), setTimeout(() => {
      i.unmount(), document.body.removeChild(a);
    }, n + 500);
  };
}
const Ss = localStorage.getItem("theme") || "auto", Nt = N(Ss);
function i1() {
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}
function Qa(t) {
  const e = t === "auto" ? i1() : t;
  document.documentElement.setAttribute("data-theme", e), localStorage.setItem("theme", t);
}
Qa(Ss);
window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", () => {
  Nt.value === "auto" && Qa("auto");
});
Is(() => Qa(Nt.value));
function s1() {
  return {
    theme: Nt,
    setTheme: (t) => {
      Nt.value = t;
    },
    toggleTheme: () => {
      Nt.value = Nt.value === "dark" ? "light" : "dark";
    }
  };
}
const dr = /* @__PURE__ */ Object.assign({ "./components/StatusDropdown/FusionStatusDropdown.vue": tl, "./components/TextInput/EditableDisplayField.vue": pl, "./components/TextInput/FusionTextInput.vue": Tl, "./components/accordion/FusionAccordion.vue": Il, "./components/actionButton/FusionActionButton.vue": rl, "./components/autocomplete/FusionAutocomplete.vue": ql, "./components/avatar/FuAvatar.vue": cl, "./components/avatar/FuAvatarGroup.vue": Jl, "./components/badge/FusionBadge.vue": tu, "./components/button/FusionButton.vue": ou, "./components/cards/FusionStatCard.vue": gu, "./components/checkbox/FusionCheckbox.vue": wu, "./components/codeInput/FusionCodeInput.vue": Nu, "./components/colourPallet/FuColorPopover.vue": $u, "./components/combobox/FuCombobox.vue": Gu, "./components/datePicker/dateField/FusionDatePicker.vue": yc, "./components/datePicker/datePickerBackup.vue": Bc, "./components/datePicker/monthPicker/FusionMonthPicker.vue": Kc, "./components/datePicker/plainDate/FusionPlainDatePicker.vue": dd, "./components/datePicker/time/FusionTimePicker.vue": vd, "./components/drawer/FusionDrawer.vue": _d, "./components/dropdown/FusionDropdownButton.vue": Ed, "./components/dropdownInline/FusionDropdownInline.vue": Rd, "./components/dropdownMenu/DropdownMenu.vue": Ud, "./components/editWrapper/EditableFieldWrapper.vue": Jd, "./components/editor/blockContent/BlockRenderer.vue": tf, "./components/editor/contract/FuContractRenderer.vue": Tr, "./components/editor/contract/FuSignaturePad.vue": rf, "./components/editor/dividerRender/DividerRenderer.vue": kr, "./components/editor/documentRender/FuDocumentRenderer.vue": Bf, "./components/editor/imageRender/ImageRenderer.vue": Mr, "./components/editor/invoiceRender/FuinvoicePreview.vue": Nr, "./components/editor/pageRender/PageRenderer.vue": Pf, "./components/editor/questionRender/FuQuestionRenderer.vue": xr, "./components/editor/renders/FuEmbedRenderer.vue": GC, "./components/editor/scheduler/FuSchedulerWidget.vue": gs, "./components/editor/serviceRender/ServiceCard.vue": aw, "./components/editor/serviceRender/ServiceRenderer.vue": bs, "./components/editor/textRender/TextRenderer.vue": As, "./components/editor/videoRender/FuVideoRenderer.vue": Cs, "./components/fileUploader/FusionUpload.vue": wv, "./components/filterDropdown/FusionFilterDropdown.vue": bw, "./components/floatingHeader/FusionSmartHeader.vue": Sw, "./components/icons/FusionTrashIcon.vue": Mw, "./components/items/activity/FusionActivityItem.vue": Vw, "./components/items/attachments/FusionAttachment.vue": e_, "./components/items/notes/FusionNoteCard.vue": c_, "./components/items/task/FusionTaskItem.vue": w_, "./components/kanban/Kanban.vue": V_, "./components/layout/AppShell.vue": uS, "./components/list/FusionListView.vue": TS, "./components/list/TableBackup.vue": $S, "./components/modal/FusionConfirmDialog.vue": US, "./components/modal/FusionModal.vue": K_, "./components/modal/FusionPreviewModal.vue": XS, "./components/modulemenu/FusionModuleMenu.vue": rT, "./components/notification/FuNotification.vue": cT, "./components/notifications/FuAlert.vue": gT, "./components/notifications/FusionToast.vue": CT, "./components/pagination/FusionPagination.vue": OT, "./components/panel/FuPanel.vue": HT, "./components/password/FusionPasswordInput.vue": GT, "./components/popover/FuPopover.vue": ZT, "./components/progress/FusionProgressStepper.vue": ok, "./components/radio/FusionRadio.vue": mv, "./components/rangeControl/FusionRangeControl.vue": hk, "./components/renderer/DocumentRenderer.vue": yk, "./components/renderer/widgets/DividerWidget.vue": wk, "./components/renderer/widgets/ImageWidget.vue": kk, "./components/renderer/widgets/ServiceWidget.vue": Dk, "./components/renderer/widgets/TextWidget.vue": xk, "./components/renderer/widgets/VideoWidget.vue": Bk, "./components/section/FuSectionHeader.vue": Wk, "./components/sidebarmenu/FusionSidebar.vue": Xk, "./components/splitButton/FusionSplitButton.vue": sE, "./components/states/FusionEmpty.vue": pE, "./components/switch/FusionSwitch.vue": AE, "./components/tabs/FusionTab.vue": xE, "./components/textArea/FusionTextArea.vue": sv, "./components/theme/FuThemeSelector.vue": VE, "./components/toolbar/FusionToolbar.vue": GE, "./components/utilities/Fuunderconstruction.vue": a1 }), l1 = {
  install(t) {
    for (const e in dr) {
      const n = dr[e].default, a = n.name || e.split("/").pop()?.replace(".vue", "");
      t.component(a, n);
    }
    t.config.globalProperties.FusionToast = (e) => {
      cr()(e);
    }, typeof window < "u" && (window.FusionToast = (e) => {
      cr()(e);
    });
  }
};
export {
  Qe as FuAvatar,
  kt as UserStatus,
  l1 as default,
  s1 as useTheme,
  cr as useToast
};
//# sourceMappingURL=fusion-binary-ui.es.js.map
