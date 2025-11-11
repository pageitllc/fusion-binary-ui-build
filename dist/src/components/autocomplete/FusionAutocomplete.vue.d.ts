interface Option {
    label: string;
    value: string | number;
    type?: "icon" | "image";
    icon?: any;
    imageUrl?: string;
}
interface Props {
    options: Option[];
    modelValue?: Option | Option[] | null;
    multiple?: boolean;
    placeholder?: string;
    searchable?: boolean;
    noResultsText?: string;
    searchPlaceholder?: string;
    label?: string;
    variant?: "button" | "input";
    size?: "sm" | "md" | "lg";
    formWrapperWidth?: string;
}
declare function __VLS_template(): {
    attrs: Partial<{}>;
    slots: {
        actions?(_: {}): any;
    };
    refs: {
        dropdownRef: HTMLDivElement;
        menuRef: HTMLDivElement;
        actionsRef: HTMLDivElement;
    };
    rootEl: HTMLDivElement;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: import('vue').DefineComponent<Props, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    "update:modelValue": (...args: any[]) => void;
}, string, import('vue').PublicProps, Readonly<Props> & Readonly<{
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
}>, {
    placeholder: string;
    label: string;
    size: "sm" | "md" | "lg";
    modelValue: Option | Option[] | null;
    variant: "button" | "input";
    formWrapperWidth: string;
    multiple: boolean;
    searchable: boolean;
    noResultsText: string;
    searchPlaceholder: string;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {
    dropdownRef: HTMLDivElement;
    menuRef: HTMLDivElement;
    actionsRef: HTMLDivElement;
}, HTMLDivElement>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
