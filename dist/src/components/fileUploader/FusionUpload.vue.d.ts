declare function __VLS_template(): {
    attrs: Partial<{}>;
    slots: {
        description?(_: {}): any;
    };
    refs: {
        fileInput: HTMLInputElement;
    };
    rootEl: HTMLDivElement;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: import('vue').DefineComponent<import('vue').ExtractPropTypes<{
    multiple: {
        type: BooleanConstructor;
        default: boolean;
    };
    accept: {
        type: StringConstructor;
        default: string;
    };
    maxFiles: {
        type: NumberConstructor;
        default: number;
    };
    maxFileSizeMB: {
        type: NumberConstructor;
        default: number;
    };
}>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {} & {
    filesSelected: (files: File[]) => any;
    uploadError: (message: string) => any;
}, string, import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<{
    multiple: {
        type: BooleanConstructor;
        default: boolean;
    };
    accept: {
        type: StringConstructor;
        default: string;
    };
    maxFiles: {
        type: NumberConstructor;
        default: number;
    };
    maxFileSizeMB: {
        type: NumberConstructor;
        default: number;
    };
}>> & Readonly<{
    onFilesSelected?: ((files: File[]) => any) | undefined;
    onUploadError?: ((message: string) => any) | undefined;
}>, {
    accept: string;
    multiple: boolean;
    maxFiles: number;
    maxFileSizeMB: number;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, true, {
    fileInput: HTMLInputElement;
}, HTMLDivElement>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
