import { Component } from 'vue';
interface Props {
    text?: string;
    disabled?: boolean;
    size?: "sm" | "md" | "lg";
    variant?: "solid" | "subtle" | "outline" | "ghost" | "danger";
    tooltip?: string | null;
    loading?: boolean;
    loadingText?: string | null;
    link?: string | null;
    icon?: Component | null;
    target?: "_parent" | "_blank";
}
declare function __VLS_template(): {
    attrs: Partial<{}>;
    slots: {
        default?(_: {}): any;
    };
    refs: {};
    rootEl: HTMLDivElement;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: import('vue').DefineComponent<Props, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {} & {
    click: (ev: MouseEvent) => any;
}, string, import('vue').PublicProps, Readonly<Props> & Readonly<{
    onClick?: ((ev: MouseEvent) => any) | undefined;
}>, {
    disabled: boolean;
    target: "_parent" | "_blank";
    link: string | null;
    text: string;
    size: "sm" | "md" | "lg";
    variant: "solid" | "subtle" | "outline" | "ghost" | "danger";
    tooltip: string | null;
    loading: boolean;
    icon: Component | null;
    loadingText: string | null;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, HTMLDivElement>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
