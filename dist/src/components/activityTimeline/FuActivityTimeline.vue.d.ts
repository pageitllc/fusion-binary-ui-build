import { Component } from 'vue';
export interface FuTimelineEvent {
    id: string;
    type: string;
    icon: Component;
    description: string;
    date: string;
    version?: string | number;
    note?: string | null;
}
type __VLS_Props = {
    events: FuTimelineEvent[];
};
declare function __VLS_template(): {
    attrs: Partial<{}>;
    slots: {
        empty?(_: {}): any;
    };
    refs: {};
    rootEl: HTMLUListElement;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: import('vue').DefineComponent<__VLS_Props, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<__VLS_Props> & Readonly<{}>, {}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, HTMLUListElement>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
