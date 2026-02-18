interface Option {
    label: string;
    value: string | number;
    type?: "icon" | "image";
    icon?: any;
    imageUrl?: string;
}
type __VLS_Props = {
    options: Option[];
    disabled?: boolean;
    size?: "sm" | "md" | "lg";
    variant?: "solid" | "subtle" | "outline" | "ghost" | "danger";
    color?: string;
    icon?: any;
    align?: "left" | "center" | "right";
    buttonWidth?: string;
};
declare function __VLS_template(): {
    attrs: Partial<{}>;
    slots: {
        default?(_: {}): any;
    };
    refs: {
        splitButtonRef: HTMLDivElement;
        dropdownRef: HTMLDivElement;
    };
    rootEl: HTMLDivElement;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: import('vue').DefineComponent<__VLS_Props, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {} & {
    select: (option: Option) => any;
    "main-action": () => any;
}, string, import('vue').PublicProps, Readonly<__VLS_Props> & Readonly<{
    onSelect?: ((option: Option) => any) | undefined;
    "onMain-action"?: (() => any) | undefined;
}>, {}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {
    splitButtonRef: HTMLDivElement;
    dropdownRef: HTMLDivElement;
}, HTMLDivElement>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
