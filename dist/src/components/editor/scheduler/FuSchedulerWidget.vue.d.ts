export interface FuSlot {
    id: string;
    start: string;
    end: string;
}
export interface FuSchedulerStyle {
    bgColor?: string;
    bgOpacity?: number;
    borderRadius?: number;
    shadow?: number;
    dayColor?: string;
    dayShape?: "circle" | "square";
}
export interface FuSchedulerUpdatePayload {
    bookedSlot: FuSlot;
}
export interface FuDateSelectPayload {
    date: string;
}
export interface FuMonthChangePayload {
    year: number;
    month: number;
}
type __VLS_Props = {
    widgetId?: string | number;
    eventTypeId?: string | number;
    eventTypeName?: string;
    description?: string;
    timezone?: string;
    style?: FuSchedulerStyle;
    availableDates?: string[];
    slots?: FuSlot[];
    slotsLoading?: boolean;
};
declare const _default: import('vue').DefineComponent<__VLS_Props, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {} & {
    update: (payload: FuSchedulerUpdatePayload) => any;
    "date-select": (payload: FuDateSelectPayload) => any;
    "month-change": (payload: FuMonthChangePayload) => any;
}, string, import('vue').PublicProps, Readonly<__VLS_Props> & Readonly<{
    onUpdate?: ((payload: FuSchedulerUpdatePayload) => any) | undefined;
    "onDate-select"?: ((payload: FuDateSelectPayload) => any) | undefined;
    "onMonth-change"?: ((payload: FuMonthChangePayload) => any) | undefined;
}>, {}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {
    tzRoot: HTMLDivElement;
    tzInput: HTMLInputElement;
    tzList: HTMLUListElement;
    calRef: import('vue').CreateComponentPublicInstanceWithMixins<Readonly<import('vue').ExtractPropTypes<{
        options: import('vue').PropType<import('@fullcalendar/core/index.js').CalendarOptions>;
    }>> & Readonly<{}>, {}, {
        renderId: number;
        customRenderingMap: Map<string, import('@fullcalendar/core/internal').CustomRendering<any>>;
    }, {}, {
        getApi(): import('@fullcalendar/core/index.js').Calendar;
        buildOptions(suppliedOptions: import('@fullcalendar/core/index.js').CalendarOptions | undefined): import('@fullcalendar/core/index.js').CalendarOptions;
    }, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, import('vue').PublicProps, {}, true, {}, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, {}, any, import('vue').ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<import('vue').ExtractPropTypes<{
        options: import('vue').PropType<import('@fullcalendar/core/index.js').CalendarOptions>;
    }>> & Readonly<{}>, {}, {
        renderId: number;
        customRenderingMap: Map<string, import('@fullcalendar/core/internal').CustomRendering<any>>;
    }, {}, {
        getApi(): import('@fullcalendar/core/index.js').Calendar;
        buildOptions(suppliedOptions: import('@fullcalendar/core/index.js').CalendarOptions | undefined): import('@fullcalendar/core/index.js').CalendarOptions;
    }, {}> | null;
}, HTMLDivElement>;
export default _default;
