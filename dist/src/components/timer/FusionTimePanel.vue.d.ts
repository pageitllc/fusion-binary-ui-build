import { TreePickerNode } from '../treePicker/FusionTreePicker.vue';
export interface TimeShortcut {
    id: string | number;
    title: string;
    subtitle?: string;
    /** Two letters in the coloured tile. */
    initials?: string;
    /** Tile colour, any CSS colour. */
    color?: string;
}
type __VLS_Props = {
    /** Day shown in the header, for example "Nov 14". */
    dateLabel: string;
    /** Running or entered time, for example "00:42:17". */
    elapsed?: string;
    running?: boolean;
    /** Clients with their budgets underneath. Only budgets (leaves) can be picked. */
    budgetNodes: TreePickerNode[];
    budgetId?: string | number | null;
    /** Tasks of the chosen budget, as a tree. */
    taskNodes?: TreePickerNode[];
    taskId?: string | number | null;
    pinned?: TimeShortcut[];
    scheduled?: TimeShortcut[];
    recent?: TimeShortcut[];
    note?: string;
    billable?: boolean;
    /** Text under the Billable switch. */
    billableText?: string;
    /** Shown in the timer card when nothing is chosen. */
    emptyTitle?: string;
    emptyText?: string;
    /** For example "5h 12m". Shown in the footer with the week total. */
    todayTotal?: string;
    weekTotal?: string;
    timesheetLabel?: string;
};
declare function __VLS_template(): {
    attrs: Partial<{}>;
    slots: {
        'entry-footer'?(_: {}): any;
    };
    refs: {};
    rootEl: HTMLDivElement;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: import('vue').DefineComponent<__VLS_Props, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {} & {
    close: () => any;
    stop: () => any;
    start: () => any;
    pick: (id: string | number) => any;
    "update:budgetId": (id: string | number) => any;
    "update:taskId": (id: string | number) => any;
    "update:note": (value: string) => any;
    "update:billable": (value: boolean) => any;
    "prev-day": () => any;
    "next-day": () => any;
    today: () => any;
    timesheet: () => any;
}, string, import('vue').PublicProps, Readonly<__VLS_Props> & Readonly<{
    onClose?: (() => any) | undefined;
    onStop?: (() => any) | undefined;
    onStart?: (() => any) | undefined;
    onPick?: ((id: string | number) => any) | undefined;
    "onUpdate:budgetId"?: ((id: string | number) => any) | undefined;
    "onUpdate:taskId"?: ((id: string | number) => any) | undefined;
    "onUpdate:note"?: ((value: string) => any) | undefined;
    "onUpdate:billable"?: ((value: boolean) => any) | undefined;
    "onPrev-day"?: (() => any) | undefined;
    "onNext-day"?: (() => any) | undefined;
    onToday?: (() => any) | undefined;
    onTimesheet?: (() => any) | undefined;
}>, {
    running: boolean;
    emptyText: string;
    elapsed: string;
    budgetId: string | number | null;
    taskNodes: TreePickerNode[];
    taskId: string | number | null;
    pinned: TimeShortcut[];
    scheduled: TimeShortcut[];
    recent: TimeShortcut[];
    note: string;
    billable: boolean;
    billableText: string;
    emptyTitle: string;
    todayTotal: string;
    weekTotal: string;
    timesheetLabel: string;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, HTMLDivElement>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
