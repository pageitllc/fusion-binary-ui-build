export interface BarSeries {
    name: string;
    values: number[];
    /** Any CSS colour. Defaults to the next colour in the palette. */
    color?: string;
}
type __VLS_Props = {
    categories: string[];
    series: BarSeries[];
    orientation?: "vertical" | "horizontal";
    stacked?: boolean;
    /** Plot height in px (vertical only). */
    height?: number;
    /** Top of the scale. By default it rounds the biggest value up to a tidy number. */
    max?: number;
    showValues?: boolean;
    showGrid?: boolean;
    legend?: boolean;
    formatValue?: (n: number) => string;
    loading?: boolean;
    emptyText?: string;
};
declare const _default: import('vue').DefineComponent<__VLS_Props, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {} & {
    select: (payload: {
        category: string;
        series: string;
        value: number;
    }) => any;
}, string, import('vue').PublicProps, Readonly<__VLS_Props> & Readonly<{
    onSelect?: ((payload: {
        category: string;
        series: string;
        value: number;
    }) => any) | undefined;
}>, {
    legend: boolean;
    height: number;
    orientation: "vertical" | "horizontal";
    loading: boolean;
    emptyText: string;
    stacked: boolean;
    showValues: boolean;
    showGrid: boolean;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, HTMLElement>;
export default _default;
