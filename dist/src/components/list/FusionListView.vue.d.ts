export type SortDirection = "asc" | "desc";
export interface ListColumn {
    label: string;
    key: string;
    width?: string;
    icon?: any;
    textAlign?: "start" | "center" | "end" | "justify";
    /**
     * If true, this header can be clicked to emit `sort-change`.
     * Sorting is handled by the parent (server-side or client-side).
     */
    sortable?: boolean;
}
type __VLS_Props = {
    columns: ListColumn[];
    rows: Record<string, any>[];
    rowKey: string;
    showHeader?: boolean;
    options?: {
        onRowClick?: (row: any) => void;
        selectable?: boolean;
        resizeColumn?: boolean;
        /**
         * Optional global kill-switch:
         * even if a column has sortable:true, sorting won't trigger if this is false.
         * Defaults to true.
         */
        sortable?: boolean;
    };
};
declare function __VLS_template(): {
    attrs: Partial<{}>;
    slots: Partial<Record<`cell-${string}`, (_: {
        row: Record<string, any>;
        col: {
            width: string;
            textAlign: "center" | "end" | "start" | "justify";
            sortable: boolean;
            label: string;
            key: string;
            icon?: any;
        };
    }) => any>> & {
        tableRow?(_: {
            row: Record<string, any>;
        }): any;
    };
    refs: {
        listviewRef: HTMLDivElement;
        tableWrapper: HTMLDivElement;
    };
    rootEl: HTMLDivElement;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: import('vue').DefineComponent<__VLS_Props, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {} & {
    "row-selected": (selectedRows: any[]) => any;
    "row-clicked": (clickedRow: any) => any;
    "sort-change": (payload: {
        key: string;
        direction: SortDirection;
    }) => any;
}, string, import('vue').PublicProps, Readonly<__VLS_Props> & Readonly<{
    "onRow-selected"?: ((selectedRows: any[]) => any) | undefined;
    "onRow-clicked"?: ((clickedRow: any) => any) | undefined;
    "onSort-change"?: ((payload: {
        key: string;
        direction: SortDirection;
    }) => any) | undefined;
}>, {}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {
    listviewRef: HTMLDivElement;
    tableWrapper: HTMLDivElement;
}, HTMLDivElement>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
