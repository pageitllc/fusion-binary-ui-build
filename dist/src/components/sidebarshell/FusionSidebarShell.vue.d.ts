import { Component } from 'vue';
export interface SidebarShellLink {
    label: string;
    /** Used for the href and active-state matching, e.g. "/admin/users" */
    path: string;
    icon?: Component;
    /** Muted count shown at the end of the row, e.g. 756 */
    count?: number | string;
}
export interface SidebarShellGroup {
    /** Small heading above the group, e.g. "Customers" */
    title?: string;
    /** Optional icon button next to the heading (e.g. sort) */
    action?: {
        label: string;
        icon: Component;
        onClick?: () => void;
    };
    items: SidebarShellLink[];
}
export interface SidebarShellSection {
    name: string;
    /** Tooltip / accessible name of the rail button */
    label: string;
    icon: Component;
    /** Small pill on the rail icon (e.g. open tickets) */
    badge?: number | string;
    /** Panel heading — defaults to `label` */
    title?: string;
    /** Muted line under the heading, e.g. "756 users · 654 workspaces" */
    summary?: string;
    groups?: SidebarShellGroup[];
}
export interface SidebarShellAction {
    name: string;
    label: string;
    icon: Component;
    onClick?: () => void;
}
type __VLS_Props = {
    sections: SidebarShellSection[];
    /** Links shown at the top of every section's panel (e.g. Dashboard) */
    pinned?: SidebarShellLink[];
    /** Name of the active section. If omitted it is derived from `activePath`. */
    activeSection?: string;
    /** Current location path, used to highlight the active link */
    activePath?: string;
    /** Icon buttons at the bottom of the rail (search, settings…) */
    bottomActions?: SidebarShellAction[];
    /** Image for the logo at the top of the rail (e.g. your brand mark). Overridden by the `logo` slot. */
    logoSrc?: string;
    logoAlt?: string;
    /** Letter(s) shown in a tile when there is no `logoSrc` or `logo` slot */
    logoText?: string;
    searchable?: boolean;
    searchPlaceholder?: string;
    /** Hint shown in the search box. Cmd/Ctrl+K also emits `search` when set to "⌘K". */
    searchShortcut?: string;
    /** Small text at the bottom of the panel, e.g. "HQ v1.0.0" */
    footer?: string;
    /** Lets people hide the panel so only the icon rail stays. Use `v-model:collapsed` to control/persist it. */
    collapsible?: boolean;
    collapsed?: boolean;
    railWidth?: string;
    panelWidth?: string;
};
declare function __VLS_template(): {
    attrs: Partial<{}>;
    slots: {
        logo?(_: {}): any;
        user?(_: {}): any;
        'panel-header'?(_: {
            section: SidebarShellSection;
        }): any;
        'panel-header-action'?(_: {
            section: SidebarShellSection;
        }): any;
        search?(_: {}): any;
        default?(_: {}): any;
        footer?(_: {}): any;
    };
    refs: {};
    rootEl: HTMLElement;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: import('vue').DefineComponent<__VLS_Props, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {} & {
    search: () => any;
    "select-section": (section: SidebarShellSection) => any;
    navigate: (item: SidebarShellLink) => any;
    "update:collapsed": (value: boolean) => any;
}, string, import('vue').PublicProps, Readonly<__VLS_Props> & Readonly<{
    onSearch?: (() => any) | undefined;
    "onSelect-section"?: ((section: SidebarShellSection) => any) | undefined;
    onNavigate?: ((item: SidebarShellLink) => any) | undefined;
    "onUpdate:collapsed"?: ((value: boolean) => any) | undefined;
}>, {
    pinned: SidebarShellLink[];
    bottomActions: SidebarShellAction[];
    logoAlt: string;
    logoText: string;
    searchable: boolean;
    searchPlaceholder: string;
    searchShortcut: string;
    collapsible: boolean;
    collapsed: boolean;
    railWidth: string;
    panelWidth: string;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, HTMLElement>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
