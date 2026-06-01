export interface FuSlot {
    id: string;
    date: string;
}
export interface FuAvailConfig {
    day: number;
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
type __VLS_Props = {
    widgetId?: string | number;
    resourceId?: string;
    eventTypeId?: string | number;
    eventTypeName?: string;
    duration?: number;
    description?: string;
    timezone?: string;
    availability?: FuAvailConfig[];
    slots?: FuSlot[];
    style?: FuSchedulerStyle;
};
declare const _default: import('vue').DefineComponent<__VLS_Props, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {} & {
    update: (payload: FuSchedulerUpdatePayload) => any;
}, string, import('vue').PublicProps, Readonly<__VLS_Props> & Readonly<{
    onUpdate?: ((payload: FuSchedulerUpdatePayload) => any) | undefined;
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
