import { RowComponent } from 'tabulator-tables';
import { TreeTableId } from './types';
/** The row's tree parent, or null while Tabulator is still setting up its tree data */
export declare function treeParentOf(row: RowComponent): RowComponent | null;
/** The row's tree children, or none while Tabulator is still setting up its tree data */
export declare function treeChildrenOf(row: RowComponent): RowComponent[];
/** Calls `fn` on every row, children included. */
export declare function walk(rows: RowComponent[], fn: (r: RowComponent) => void): void;
export declare function levelOf(row: RowComponent): number;
export declare function siblingsOf(row: RowComponent): RowComponent[];
export declare function hasNextSibling(row: RowComponent, idOf: (r: Record<string, any>) => TreeTableId): boolean;
/** Whether `candidate` is `ancestor` or sits somewhere under it. */
export declare function isInside(candidate: RowComponent, ancestor: RowComponent, idOf: (r: Record<string, any>) => TreeTableId): boolean;
/** The group of a row: its top-level ancestor's `groupField` (subtasks don't carry it). */
export declare function groupOfRow(row: RowComponent, groupField?: string): TreeTableId | null;
