declare const _default: import('vue').DefineComponent<import('vue').ExtractPropTypes<{
    color: {
        type: StringConstructor;
        default: string;
    };
    swatches: {
        type: () => string[];
        default: () => never[];
    };
    label: {
        type: StringConstructor;
        default: string;
    };
}>, () => import('vue').VNode<import('vue').RendererNode, import('vue').RendererElement, {
    [key: string]: any;
}>, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, "change"[], "change", import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<{
    color: {
        type: StringConstructor;
        default: string;
    };
    swatches: {
        type: () => string[];
        default: () => never[];
    };
    label: {
        type: StringConstructor;
        default: string;
    };
}>> & Readonly<{
    onChange?: ((...args: any[]) => any) | undefined;
}>, {
    label: string;
    color: string;
    swatches: string[];
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, true, {}, any>;
export default _default;
