export type TreeTableDropPosition = "before" | "after" | "inside";
export type TreeTableId = string | number;
/**
 * What the table reports when a task is dropped. The hierarchy is:
 *   group  ->  top level task (has `group_id`, no parent)  ->  subtask (has `parent_id`, no group)
 */
export interface TreeTableMove {
    /** The task that was dragged. */
    id: TreeTableId;
    /** The task it was dropped on. null when dropped on a group bar. */
    targetId: TreeTableId | null;
    position: TreeTableDropPosition;
    /** Parent before the move (null = it was a top level task). */
    fromParentId: TreeTableId | null;
    /** Parent after the move (null = it is now a top level task). */
    toParentId: TreeTableId | null;
    /** Group after the move. Only when the table is grouped. Dropping on a group bar puts the task first in that group. */
    toGroupId?: TreeTableId | null;
}
type Row = Record<string, any>;
type MoveInput = Pick<TreeTableMove, "id" | "targetId" | "position"> & {
    toGroupId?: TreeTableId | null;
};
/**
 * Nested rows (`children` arrays). Returns a new array. Does not mutate the input.
 * Only top level tasks carry the group id; a task moved inside another loses it.
 * Returns the original rows if the move is not allowed (onto itself, or into its own subtasks).
 */
export declare function moveTreeRow(rows: Row[], move: MoveInput, opts?: {
    idField?: string;
    childrenField?: string;
    groupField?: string;
}): Row[];
/**
 * Flat rows, shaped like a database table:
 *   top level task:  { id, group_id: 3, parent_id: null }
 *   subtask:         { id, group_id: null, parent_id: 12 }
 * Pair it with the table's `parentField` and `groupField` props. Returns a new array: only the moved
 * task changes (its `parent_id` / `group_id`), plus the array order, which is the order of siblings.
 * Returns the original rows if the move is not allowed.
 */
export declare function moveFlatRow(rows: Row[], move: MoveInput, opts: {
    idField?: string;
    parentField: string;
    groupField?: string;
}): Row[];
export {};
