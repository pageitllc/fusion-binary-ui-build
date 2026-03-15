import { Component } from 'vue';
interface Action {
    label: string;
    icon?: Component;
    onClick?: () => void;
}
interface Props {
    actions: Action[];
    align?: "left" | "center" | "right";
    content?: boolean;
    isOpen?: boolean;
    closeOnSelect?: boolean;
}
declare function __VLS_template(): {
    attrs: Partial<{}>;
    slots: {
        trigger?(_: {}): any;
        content?(_: {}): any;
    };
    refs: {
        dropdown: HTMLDivElement;
        menuRef: HTMLDivElement;
    };
    rootEl: HTMLDivElement;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: import('vue').DefineComponent<Props, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    close: (...args: any[]) => void;
    open: (...args: any[]) => void;
    "update:isOpen": (...args: any[]) => void;
}, string, import('vue').PublicProps, Readonly<Props> & Readonly<{
    onClose?: ((...args: any[]) => any) | undefined;
    onOpen?: ((...args: any[]) => any) | undefined;
    "onUpdate:isOpen"?: ((...args: any[]) => any) | undefined;
}>, {
    align: "left" | "center" | "right";
    isOpen: boolean;
    content: boolean;
    closeOnSelect: boolean;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {
    dropdown: HTMLDivElement;
    menuRef: HTMLDivElement;
}, HTMLDivElement>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
