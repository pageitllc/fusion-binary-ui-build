import { Component } from 'vue';
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
    /** CSS colour for the group's square, shown with `groupStyle` "plain-color" or "band-color". */
    color?: string;
    /** The group's real number of tasks, shown in the header instead of the rows loaded so far (lazy groups). */
    total?: number;
    /** The group is loading: the header shimmers and the group shows placeholder rows. */
    loading?: boolean;
    /** Placeholder rows while `loading` (defaults to the table's `skeletonRows`). */
    skeletonRows?: number;
    /** A muted line after the title, for example "BR · 1,000 tasks". */
    meta?: string;
    /** Rows shown and the group's total, for a "Show more" row at the end of the group (lazy groups). Null when all are shown. */
    more?: {
        shown: number;
        total: number;
    } | null;
    /** The next rows are loading: the "Show more" row becomes placeholder rows. */
    loadingMore?: boolean;
    /** Set to false for a group that starts closed (the others follow `groupStartOpen`). */
    open?: boolean;
    /** A logo or initials before the title: `src`, else initials from `name` on `bg`. Takes the colour square's place. */
    avatar?: {
        src?: string;
        name?: string;
        bg?: string;
    } | null;
    [extra: string]: any;
}
/**
 * How group headers look:
 * - plain: on the table's background, like the rows (default)
 * - plain-color: plain, plus a square in the group's `color`
 * - band: a light grey band across the full width, with a line above and below
 * - band-color: band, plus the colour square
 */
export type TreeTableGroupStyle = "plain" | "plain-color" | "band" | "band-color";
export interface TreeTableSort {
    key: string;
    dir: "asc" | "desc";
}
/** FusionTreeTable's props. */
export interface TreeTableProps {
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
    /** A last row in each group for typing a new task's title, like Productive. Enter emits `create-task` with { groupId, title } and keeps the field ready for the next one. The row isn't data: it can't be selected, dragged, sorted or counted. */
    groupAddRow?: boolean;
    groupAddRowPlaceholder?: string;
    /** "Show more" row text; `{n}` is how many the next click loads. */
    groupMoreLabel?: string;
    /** Rows one "Show more" loads, used for its text and for the placeholder rows while they load. */
    groupMoreSize?: number;
    /** Shape of the group avatars (`group.avatar`). Company logos read better as rounded squares. Switching it is CSS only. */
    groupAvatarShape?: "circle" | "square";
    /** Width of the group details card (`#group-details` slot). */
    groupDetailsWidth?: string;
    /** Which edge of the title the details card lines up with. */
    groupDetailsAlign?: "left" | "right";
    /** Show a "+" in each group bar. Emits `add-task`. */
    groupAdd?: boolean;
    groupAddLabel?: string;
    /** The group's colour square can be clicked to pick a new colour (it shows in every groupStyle, as an empty square when a group has no colour). Emits `group-color-change`; the parent saves it and updates `groups`. */
    groupColorEditable?: boolean;
    /** Colours offered in the group colour picker, for example your workspace palette. */
    groupColors?: string[];
    /** Colour of the small square before each task's name, worked out from the row: for example its status colour, `(row) => statusColors[row.status]`. Return nothing for no square. */
    rowColor?: (row: Record<string, any>) => string | null | undefined;
    /** Which tasks are complete: `(row) => true` strikes through the task's name and greys it, like Productive. Map your own statuses, for example `(row) => closedStatuses.includes(row.status)`. Cell slots also get `completed` in their props. */
    rowCompleted?: (row: Record<string, any>) => boolean;
    /** Turns the row colour squares on and off (default on). Switching it is CSS only: the table isn't rebuilt. */
    showRowColor?: boolean;
    /** Look of the group headers: "plain" (default), "plain-color", "band" or "band-color". Changing it restyles the headers without rebuilding the table. */
    groupStyle?: TreeTableGroupStyle;
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
    /** "local" (default): header clicks sort the loaded rows. "remote": header clicks only show the arrow and emit `sort-change`; rows keep the order you give them (the server's order). */
    sortMode?: "local" | "remote";
    /** The current sort, so the arrow shows (and survives a rebuild). `sort-change` isn't emitted when this prop changes. */
    sort?: TreeTableSort | null;
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
}
/** The props that have a default, so they're always set inside the table. */
export type TreeTableDefaultedProp = "idField" | "childrenField" | "stickyHeader" | "stickyOffset" | "pinTreeColumn" | "groupStartOpen" | "groupAdd" | "groupAddLabel" | "groupAddRow" | "groupAddRowPlaceholder" | "groupMoreLabel" | "groupMoreSize" | "groupAvatarShape" | "groupDetailsWidth" | "groupDetailsAlign" | "sortMode" | "groupStyle" | "groupColorEditable" | "showRowColor" | "selectable" | "selectedIds" | "propagateSelection" | "startExpanded" | "movableColumns" | "resizableColumns" | "sortable" | "draggableRows" | "indent" | "loading" | "skeletonRows" | "emptyText";
/** The props as the table sees them, after defaults. */
export type TreeTableResolvedProps = TreeTableProps & Required<Pick<TreeTableProps, TreeTableDefaultedProp>>;
