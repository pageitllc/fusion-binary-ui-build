import { Component } from 'vue';
/** One item in the split button's menu. */
export interface SplitButtonItem {
    label: string;
    /** Emitted with `select`. */
    value?: string | number;
    /** A Lucide (or any) icon component. */
    icon?: Component | any;
    /** Legacy: `"image"` shows `imageUrl` as an avatar. `"icon"` is no longer needed. */
    type?: "icon" | "image";
    imageUrl?: string;
    /** Muted second line under the label. */
    description?: string;
    /** Shows a check mark. Setting it (true or false) makes the item a `menuitemradio`. */
    selected?: boolean;
    disabled?: boolean;
    onClick?: () => void;
}
/** A labelled section of the menu. Leave `label` out for a section with no heading. */
export interface SplitButtonGroup {
    label?: string;
    actions: SplitButtonItem[];
}
declare const _default: __VLS_WithTemplateSlots<import('vue').DefineComponent<{
    /** Flat list of options. Ignored when `groups` is given. */
    options?: SplitButtonItem[];
    /** Labelled sections with dividers between them. Used instead of `options`. */
    groups?: SplitButtonGroup[];
    disabled?: boolean;
    size?: "sm" | "md" | "lg";
    variant?: "solid" | "subtle" | "outline" | "ghost" | "danger";
    color?: string;
    icon?: any;
    align?: "left" | "center" | "right";
    buttonWidth?: string;
    /** Accessible name for the toggle and the menu. */
    ariaLabel?: string;
}, {
    open: (focus?: "first" | "last" | "selected") => Promise<void>;
    close: ({ focusToggle }?: {
        focusToggle?: boolean | undefined;
    }) => void;
}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {} & {
    select: (option: SplitButtonItem) => any;
    "main-action": () => any;
}, string, import('vue').PublicProps, Readonly<{
    /** Flat list of options. Ignored when `groups` is given. */
    options?: SplitButtonItem[];
    /** Labelled sections with dividers between them. Used instead of `options`. */
    groups?: SplitButtonGroup[];
    disabled?: boolean;
    size?: "sm" | "md" | "lg";
    variant?: "solid" | "subtle" | "outline" | "ghost" | "danger";
    color?: string;
    icon?: any;
    align?: "left" | "center" | "right";
    buttonWidth?: string;
    /** Accessible name for the toggle and the menu. */
    ariaLabel?: string;
}> & Readonly<{
    onSelect?: ((option: SplitButtonItem) => any) | undefined;
    "onMain-action"?: (() => any) | undefined;
}>, {
    size: "sm" | "md" | "lg";
    variant: "solid" | "subtle" | "outline" | "ghost" | "danger";
    ariaLabel: string;
    groups: SplitButtonGroup[];
    align: "left" | "center" | "right";
    options: SplitButtonItem[];
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {
    splitButtonRef: HTMLDivElement;
    toggleRef: HTMLButtonElement;
    dropdownRef: HTMLDivElement;
}, HTMLDivElement>, Readonly<{
    /** Main button label. */
    default?(): any;
    /** Replaces the whole main button content (label + badge). */
    main?(props: {
        open: boolean;
    }): any;
    /** Small badge or dot shown after the label, e.g. "unsaved changes". */
    badge?(): any;
}> & {
    /** Main button label. */
    default?(): any;
    /** Replaces the whole main button content (label + badge). */
    main?(props: {
        open: boolean;
    }): any;
    /** Small badge or dot shown after the label, e.g. "unsaved changes". */
    badge?(): any;
}>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
