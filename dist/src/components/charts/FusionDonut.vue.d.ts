export interface DonutSegment {
    label: string;
    value: number;
    /** Any CSS colour. Defaults to the next colour in the palette. */
    color?: string;
}
type __VLS_Props = {
    segments: DonutSegment[];
    /** Diameter in px. */
    size?: number;
    /** Ring thickness in px. */
    thickness?: number;
    centerValue?: string | number;
    centerLabel?: string;
    legend?: "right" | "bottom" | "none";
    /** Show each value as a percentage in the legend. */
    showPercent?: boolean;
    formatValue?: (n: number) => string;
    emptyText?: string;
};
declare function __VLS_template(): {
    attrs: Partial<{}>;
    slots: {
        center?(_: {
            total: number;
        }): any;
    };
    refs: {};
    rootEl: HTMLElement;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: import('vue').DefineComponent<__VLS_Props, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {} & {
    hover: (segment: DonutSegment | null) => any;
}, string, import('vue').PublicProps, Readonly<__VLS_Props> & Readonly<{
    onHover?: ((segment: DonutSegment | null) => any) | undefined;
}>, {
    legend: "right" | "bottom" | "none";
    size: number;
    emptyText: string;
    thickness: number;
    showPercent: boolean;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, HTMLElement>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
