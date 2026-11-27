import { Tabulator } from 'tabulator-tables';
import { TreeTableId, TreeTableProps, TreeTableSort } from './types';
import { TreeTableMove } from './treeTableUtils';
export type { TreeTableColumn, TreeTableId, TreeTableGroupAction, TreeTableGroup, TreeTableGroupStyle, TreeTableSort, TreeTableProps, } from './types';
export type { TreeTableDropPosition, TreeTableMove } from './treeTableUtils';
declare function __VLS_template(): {
    attrs: Partial<{}>;
    slots: {
        'group-details'?(_: {
            group: import('./types').TreeTableGroup;
            close: () => void;
        }): any;
        footer?(_: {}): any;
    };
    refs: {
        host: HTMLDivElement;
        detailsRef: HTMLDivElement;
    };
    rootEl: HTMLDivElement;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: import('vue').DefineComponent<TreeTableProps, {
    /** Sets the sort as if the person clicked the header (emits `sort-change`). Pass no key to clear it. */
    setSort: (key?: string | null, dir?: "asc" | "desc") => void;
    expandAll(): void;
    collapseAll(): void;
    clearSelection(): void;
    redraw(force?: boolean): void;
    getTable: () => Tabulator | null;
}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {} & {
    "create-task": (payload: {
        groupId: TreeTableId;
        title: string;
    }) => any;
    "group-load-more": (payload: {
        groupId: TreeTableId;
    }) => any;
    "group-details-open": (payload: {
        groupId: TreeTableId;
    }) => any;
    "group-details-close": (payload: {
        groupId: TreeTableId;
    }) => any;
    "add-task": (payload: {
        groupId: TreeTableId;
    }) => any;
    "group-action": (payload: {
        groupId: TreeTableId;
        action: string;
    }) => any;
    "group-color-change": (payload: {
        groupId: TreeTableId;
        color: string;
    }) => any;
    "row-move": (move: TreeTableMove) => any;
    "update:selectedIds": (keys: TreeTableId[]) => any;
    "sort-change": (sort: TreeTableSort | null) => any;
    "group-toggle": (payload: {
        groupId: TreeTableId;
        open: boolean;
    }) => any;
    "row-click": (row: Record<string, any>) => any;
    "columns-reordered": (keys: string[]) => any;
    "column-resized": (payload: {
        key: string;
        width: number;
    }) => any;
    "row-expanded": (row: Record<string, any>) => any;
    "row-collapsed": (row: Record<string, any>) => any;
}, string, import('vue').PublicProps, Readonly<TreeTableProps> & Readonly<{
    "onCreate-task"?: ((payload: {
        groupId: TreeTableId;
        title: string;
    }) => any) | undefined;
    "onGroup-load-more"?: ((payload: {
        groupId: TreeTableId;
    }) => any) | undefined;
    "onGroup-details-open"?: ((payload: {
        groupId: TreeTableId;
    }) => any) | undefined;
    "onGroup-details-close"?: ((payload: {
        groupId: TreeTableId;
    }) => any) | undefined;
    "onAdd-task"?: ((payload: {
        groupId: TreeTableId;
    }) => any) | undefined;
    "onGroup-action"?: ((payload: {
        groupId: TreeTableId;
        action: string;
    }) => any) | undefined;
    "onGroup-color-change"?: ((payload: {
        groupId: TreeTableId;
        color: string;
    }) => any) | undefined;
    "onRow-move"?: ((move: TreeTableMove) => any) | undefined;
    "onUpdate:selectedIds"?: ((keys: TreeTableId[]) => any) | undefined;
    "onSort-change"?: ((sort: TreeTableSort | null) => any) | undefined;
    "onGroup-toggle"?: ((payload: {
        groupId: TreeTableId;
        open: boolean;
    }) => any) | undefined;
    "onRow-click"?: ((row: Record<string, any>) => any) | undefined;
    "onColumns-reordered"?: ((keys: string[]) => any) | undefined;
    "onColumn-resized"?: ((payload: {
        key: string;
        width: number;
    }) => any) | undefined;
    "onRow-expanded"?: ((row: Record<string, any>) => any) | undefined;
    "onRow-collapsed"?: ((row: Record<string, any>) => any) | undefined;
}>, {
    sort: TreeTableSort | null;
    loading: boolean;
    skeletonRows: number;
    idField: string;
    childrenField: string;
    stickyHeader: boolean;
    stickyOffset: number;
    pinTreeColumn: boolean;
    groupStartOpen: boolean;
    groupAdd: boolean;
    groupAddLabel: string;
    groupAddRow: boolean;
    groupAddRowPlaceholder: string;
    groupMoreLabel: string;
    groupMoreSize: number;
    groupAvatarShape: "circle" | "square";
    groupDetailsWidth: string;
    groupDetailsAlign: "left" | "right";
    sortMode: "local" | "remote";
    groupStyle: import('./types').TreeTableGroupStyle;
    groupColorEditable: boolean;
    showRowColor: boolean;
    selectable: boolean;
    selectedIds: TreeTableId[];
    propagateSelection: boolean;
    startExpanded: boolean;
    movableColumns: boolean;
    resizableColumns: boolean;
    sortable: boolean;
    draggableRows: boolean;
    indent: number;
    emptyText: string;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {
    host: HTMLDivElement;
    detailsRef: HTMLDivElement;
}, HTMLDivElement>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
