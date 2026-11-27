export type SortDirection = "asc" | "desc";
/** Library-styled row states (see the `rowTone` prop). */
export type ListRowTone = "muted" | "highlight" | "danger";
/** Anything Vue's :class accepts. */
export type ListRowClass = string | string[] | Record<string, boolean> | null | undefined;
export interface ListColumn {
    label: string;
    key: string;
    width?: string;
    icon?: any;
    textAlign?: "start" | "center" | "end" | "justify";
    sortable?: boolean;
    visible?: boolean;
    orderPosition?: number;
}
type __VLS_Props = {
    columns: ListColumn[];
    rows: Record<string, any>[];
    rowKey: string;
    showHeader?: boolean;
    loading?: boolean;
    skeletonRows?: number;
    editMode?: boolean;
    /**
     * Extra classes for a row's <tr>, worked out from the row (string, array or object, like :class).
     * Added next to `fu-listview__row`, so the app can style e.g. `:deep(.fu-listview__row.is-read)`.
     */
    rowClass?: (row: Record<string, any>) => ListRowClass;
    /**
     * A named state the library styles itself, including hover and selected on top of it:
     * - `muted`: faint grey background, secondary text (read, archived)
     * - `highlight`: soft accent background (new, open in a side panel)
     * - `danger`: soft red background (overdue, failed to import)
     * Return nothing for a normal row.
     */
    rowTone?: (row: Record<string, any>) => ListRowTone | null | undefined | false;
    sort?: {
        key: string | null;
        direction: SortDirection;
    } | null;
    options?: {
        onRowClick?: (row: any) => void;
        selectable?: boolean;
        resizeColumn?: boolean;
        sortable?: boolean;
        isRowSelectable?: (row: any) => boolean;
        /**
         * Rows can be dragged by a handle: any element in a cell with the attribute
         * `data-row-drag-handle`. The whole row lifts and the row it will land above or below is marked.
         * Emits row-drag-start(row) and row-drop({ row, position }); the parent does the move, so a row
         * can also be dropped into another list (each section of a table, for example).
         */
        rowDraggable?: boolean;
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
            visible: boolean;
            orderPosition: number;
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
    "sort-change": (payload: {
        key: string;
        direction: SortDirection;
    }) => any;
    "columns-reordered": (columns: {
        key: string;
        orderPosition: number;
    }[]) => any;
    "row-selected": (selectedRows: any[]) => any;
    "row-clicked": (clickedRow: any) => any;
    "row-drag-start": (row: any) => any;
    "row-drop": (payload: {
        row: any;
        position: "before" | "after";
    }) => any;
}, string, import('vue').PublicProps, Readonly<__VLS_Props> & Readonly<{
    "onSort-change"?: ((payload: {
        key: string;
        direction: SortDirection;
    }) => any) | undefined;
    "onColumns-reordered"?: ((columns: {
        key: string;
        orderPosition: number;
    }[]) => any) | undefined;
    "onRow-selected"?: ((selectedRows: any[]) => any) | undefined;
    "onRow-clicked"?: ((clickedRow: any) => any) | undefined;
    "onRow-drag-start"?: ((row: any) => any) | undefined;
    "onRow-drop"?: ((payload: {
        row: any;
        position: "before" | "after";
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
