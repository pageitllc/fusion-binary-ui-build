import { Component } from 'vue';
import { Tabulator } from 'tabulator-tables';
import { TreeTableMove } from './treeTableUtils';
export type { TreeTableDropPosition, TreeTableMove } from './treeTableUtils';
export interface TreeTableColumn {
    /** Field name on each row object. Also the slot suffix: `cell-<key>`. */
    key: string;
    label: string;
    /** Pixel width. Omit for flexible. */
    width?: number;
    minWidth?: number;
    textAlign?: "left" | "center" | "right";
    sortable?: boolean;
    visible?: boolean;
    resizable?: boolean;
}
export type TreeTableId = string | number;
export interface TreeTableGroupAction {
    /** Sent back in `group-action`. */
    key: string;
    label: string;
    icon?: Component;
    disabled?: boolean;
    /** Draw a divider line above this action. */
    dividerBefore?: boolean;
}
export interface TreeTableGroup {
    id: TreeTableId;
    label: string;
    [extra: string]: any;
}
export interface TreeTableSort {
    key: string;
    dir: "asc" | "desc";
}
type __VLS_Props = {
    columns: TreeTableColumn[];
    rows: Record<string, any>[];
    /** Unique id field on every row, including children. */
    idField?: string;
    /** Field holding each row's parent id (for example "parent_id"; null on top level tasks). Set it when your rows are flat, with no nested children. The table builds the tree itself. */
    parentField?: string;
    /** Field holding the child rows. */
    childrenField?: string;
    /** Field on each TOP LEVEL row that holds its group's id (for example "group_id"). Subtasks don't carry it: they only have a parent. Turns on full width group bars. */
    groupField?: string;
    /** The groups, in order. Lets empty groups show. Each `id` matches the value in the `groupField` of its top level tasks. */
    groups?: TreeTableGroup[];
    groupStartOpen?: boolean;
    /** Actions in each group bar's "..." menu. A group can hide some with `hiddenActions: ['archive']` in its own data. */
    groupActions?: TreeTableGroupAction[];
    /** Show a "+" in each group bar. Emits `add-task`. */
    groupAdd?: boolean;
    groupAddLabel?: string;
    /** Column that shows the expand/collapse arrow. Defaults to the first visible column. */
    treeColumn?: string;
    /** Keep the tree column first and in place (it stays visible while scrolling sideways). Other columns can still be moved. */
    pinTreeColumn?: boolean;
    selectable?: boolean;
    /** Selected row keys (v-model). */
    selectedIds?: TreeTableId[];
    /** Selecting a parent also selects its children. */
    propagateSelection?: boolean;
    startExpanded?: boolean;
    movableColumns?: boolean;
    resizableColumns?: boolean;
    sortable?: boolean;
    /** Rows can be dragged by the grip to reorder or nest. Emits `row-move`; the parent updates its rows. */
    draggableRows?: boolean;
    /** Indent per tree level in px. */
    indent?: number;
    /** Keep the column header in view while the page (or the scrolling area around the table) scrolls. Not needed with a fixed `height`, where the header never leaves. */
    stickyHeader?: boolean;
    /** Gap from the top for the sticky header, in px. Use it to clear a fixed top bar. */
    stickyOffset?: number;
    /** Fixed height (px number or CSS string). Omit to grow with content. */
    height?: number | string;
    loading?: boolean;
    /** Number of placeholder rows shown while loading. */
    skeletonRows?: number;
    emptyText?: string;
};
declare function __VLS_template(): {
    attrs: Partial<{}>;
    slots: {
        footer?(_: {}): any;
    };
    refs: {
        host: HTMLDivElement;
    };
    rootEl: HTMLDivElement;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: import('vue').DefineComponent<__VLS_Props, {
    expandAll(): void;
    collapseAll(): void;
    clearSelection(): void;
    redraw(force?: boolean): void;
    getTable: () => Tabulator | null;
}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {} & {
    "update:selectedIds": (keys: TreeTableId[]) => any;
    "row-click": (row: Record<string, any>) => any;
    "columns-reordered": (keys: string[]) => any;
    "column-resized": (payload: {
        key: string;
        width: number;
    }) => any;
    "sort-change": (sort: TreeTableSort | null) => any;
    "row-move": (move: TreeTableMove) => any;
    "group-action": (payload: {
        groupId: TreeTableId;
        action: string;
    }) => any;
    "add-task": (payload: {
        groupId: TreeTableId;
    }) => any;
    "row-expanded": (row: Record<string, any>) => any;
    "row-collapsed": (row: Record<string, any>) => any;
}, string, import('vue').PublicProps, Readonly<__VLS_Props> & Readonly<{
    "onUpdate:selectedIds"?: ((keys: TreeTableId[]) => any) | undefined;
    "onRow-click"?: ((row: Record<string, any>) => any) | undefined;
    "onColumns-reordered"?: ((keys: string[]) => any) | undefined;
    "onColumn-resized"?: ((payload: {
        key: string;
        width: number;
    }) => any) | undefined;
    "onSort-change"?: ((sort: TreeTableSort | null) => any) | undefined;
    "onRow-move"?: ((move: TreeTableMove) => any) | undefined;
    "onGroup-action"?: ((payload: {
        groupId: TreeTableId;
        action: string;
    }) => any) | undefined;
    "onAdd-task"?: ((payload: {
        groupId: TreeTableId;
    }) => any) | undefined;
    "onRow-expanded"?: ((row: Record<string, any>) => any) | undefined;
    "onRow-collapsed"?: ((row: Record<string, any>) => any) | undefined;
}>, {
    loading: boolean;
    idField: string;
    childrenField: string;
    groupStartOpen: boolean;
    groupAdd: boolean;
    groupAddLabel: string;
    pinTreeColumn: boolean;
    selectable: boolean;
    selectedIds: TreeTableId[];
    propagateSelection: boolean;
    startExpanded: boolean;
    movableColumns: boolean;
    resizableColumns: boolean;
    sortable: boolean;
    draggableRows: boolean;
    indent: number;
    stickyHeader: boolean;
    stickyOffset: number;
    skeletonRows: number;
    emptyText: string;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {
    host: HTMLDivElement;
}, HTMLDivElement>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
