type __VLS_Props = {
    service: any;
    layout: string;
    widgetDisplay: any;
    pricingStyle: any;
    itemStyle: any;
    selected: boolean;
    selectionMode: "view" | "single" | "multiple";
    selectionRequired: boolean;
};
declare const _default: import('vue').DefineComponent<__VLS_Props, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    "toggle-select": (...args: any[]) => void;
}, string, import('vue').PublicProps, Readonly<__VLS_Props> & Readonly<{
    "onToggle-select"?: ((...args: any[]) => any) | undefined;
}>, {}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, HTMLDivElement>;
export default _default;
