import { Component } from 'vue';
interface MenuItem {
    label: string;
    path: string;
    icon?: Component;
    /** Count or label shown in a badge at the end of the item (e.g. 2, "4", "99+") */
    badge?: string | number;
    /** FusionBadge themeClass used to colour the badge, e.g. "fu-badge--danger-subtle" | "fu-badge--warning-subtle" */
    badgeTheme?: string;
}
interface MenuGroup {
    /** Optional section label rendered above the group, e.g. "DESK" or "ATTENTION STATES" */
    title?: string;
    /**
     * Show a horizontal rule above this group. Defaults to true when the group has a
     * title (and it isn't the first group) — set to false to show just the label with no rule.
     */
    divider?: boolean;
    items: MenuItem[];
}
type __VLS_Props = {
    /** Flat list of menu items — ignored when `groups` is provided */
    items?: MenuItem[];
    /** Sectioned menu items, each with an optional title and divider */
    groups?: MenuGroup[];
    activePath?: string;
};
declare function __VLS_template(): {
    attrs: Partial<{}>;
    slots: {
        default?(_: {}): any;
    };
    refs: {};
    rootEl: HTMLDivElement;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: import('vue').DefineComponent<__VLS_Props, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<__VLS_Props> & Readonly<{}>, {}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, HTMLDivElement>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
