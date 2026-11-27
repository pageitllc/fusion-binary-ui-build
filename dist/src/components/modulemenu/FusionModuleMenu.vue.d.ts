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
    /** Show a search input at the top of the menu */
    searchable?: boolean;
    /** Current search query. Use with `v-model:search` */
    search?: string;
    /** Placeholder text, also used as the input's aria-label */
    searchPlaceholder?: string;
    /** Key that focuses the search from anywhere on the page. `null` turns it off */
    searchShortcut?: string | null;
    /** Hide the item list (e.g. when the app renders its own search in the `header` slot) */
    hideItems?: boolean;
};
declare function focusSearch(): void;
declare function __VLS_template(): {
    attrs: Partial<{}>;
    slots: Readonly<{
        default?(): any;
        header?(): any;
        "search-results"?(props: {
            query: string;
        }): any;
    }> & {
        default?(): any;
        header?(): any;
        "search-results"?(props: {
            query: string;
        }): any;
    };
    refs: {
        headerRef: HTMLDivElement;
    };
    rootEl: HTMLDivElement;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: import('vue').DefineComponent<__VLS_Props, {
    focusSearch: typeof focusSearch;
}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {} & {
    "update:search": (value: string) => any;
    "search-keydown": (event: KeyboardEvent) => any;
}, string, import('vue').PublicProps, Readonly<__VLS_Props> & Readonly<{
    "onUpdate:search"?: ((value: string) => any) | undefined;
    "onSearch-keydown"?: ((event: KeyboardEvent) => any) | undefined;
}>, {
    search: string;
    searchable: boolean;
    searchPlaceholder: string;
    searchShortcut: string | null;
    hideItems: boolean;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {
    headerRef: HTMLDivElement;
}, HTMLDivElement>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
