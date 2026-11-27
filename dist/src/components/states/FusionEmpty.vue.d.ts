import { Component } from 'vue';
interface Action {
    label: string;
    onClick?: () => void;
    href?: string;
}
interface EmptyCardItem {
    title: string;
    description?: string;
    image?: string;
    initial?: string;
    color?: string;
    onClick?: () => void;
}
interface EmptyStateProps {
    title: string;
    description?: string;
    visual?: {
        type: "icon";
        value: Component;
    } | {
        type: "image";
        src: string;
        alt: string;
    } | {
        type: "none";
    };
    primaryAction?: Action;
    secondaryActions?: Action[];
    /** Optional list of picker cards rendered below the actions (see `FusionInfoCard`) */
    cards?: EmptyCardItem[];
    size?: "sm" | "md" | "lg";
    variant?: "default" | "subtle" | "minimal";
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
declare const __VLS_component: import('vue').DefineComponent<EmptyStateProps, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<EmptyStateProps> & Readonly<{}>, {
    size: "sm" | "md" | "lg";
    variant: "default" | "subtle" | "minimal";
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, HTMLDivElement>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
