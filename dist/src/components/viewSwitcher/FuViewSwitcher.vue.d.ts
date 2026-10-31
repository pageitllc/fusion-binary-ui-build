import { Component } from 'vue';
export interface FuView {
    /** Unique key, this is what `v-model` holds */
    key: string;
    /** Menu label */
    label: string;
    /** Trigger label, falls back to `label` */
    title?: string;
    /** Lucide icon component */
    icon?: Component;
    /** Icon colour, any CSS colour */
    color?: string;
    /** Hidden when null/undefined */
    count?: number | null;
    /** Muted second line in the menu */
    description?: string;
    disabled?: boolean;
}
type __VLS_Props = {
    views: FuView[];
    modelValue?: string | null;
    disabled?: boolean;
    align?: "left" | "right";
    heading?: string;
    placeholder?: string;
    ariaLabel?: string;
    /** Hide the count when it is 0 */
    hideZeroCounts?: boolean;
};
declare function openMenu(focusIndex?: number | null): Promise<void>;
declare function close({ focusTrigger }?: {
    focusTrigger?: boolean | undefined;
}): void;
declare function __VLS_template(): {
    attrs: Partial<{}>;
    slots: Readonly<{
        /** Extra menu items under a divider, e.g. saved views */
        footer?(props: {
            close: () => void;
        }): any;
    }> & {
        /** Extra menu items under a divider, e.g. saved views */
        footer?(props: {
            close: () => void;
        }): any;
    };
    refs: {
        rootRef: HTMLDivElement;
        triggerRef: HTMLButtonElement;
    };
    rootEl: HTMLDivElement;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: import('vue').DefineComponent<__VLS_Props, {
    open: typeof openMenu;
    close: typeof close;
}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {} & {
    change: (view: FuView) => any;
    "update:modelValue": (key: string) => any;
}, string, import('vue').PublicProps, Readonly<__VLS_Props> & Readonly<{
    onChange?: ((view: FuView) => any) | undefined;
    "onUpdate:modelValue"?: ((key: string) => any) | undefined;
}>, {
    disabled: boolean;
    placeholder: string;
    modelValue: string | null;
    align: "left" | "right";
    ariaLabel: string;
    heading: string;
    hideZeroCounts: boolean;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {
    rootRef: HTMLDivElement;
    triggerRef: HTMLButtonElement;
}, HTMLDivElement>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
