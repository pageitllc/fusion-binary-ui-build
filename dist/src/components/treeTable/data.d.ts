import { RowComponent } from 'tabulator-tables';
import { TreeTableContext } from './context';
import { TreeTableGroup } from './types';
export type PhantomKind = "skeleton" | "more" | "add";
export declare const phantomOf: (data: Record<string, any> | undefined | null) => PhantomKind | undefined;
export declare const isPhantom: (data: Record<string, any> | undefined | null) => boolean;
export declare const isAddRow: (data: Record<string, any> | undefined | null) => boolean;
/** Index of a placeholder row in its group (from its id), for its bar widths. */
export declare function phantomIndex(ctx: TreeTableContext, data: Record<string, any>): number;
/** How many rows the next "Show more" loads. */
export declare function nextMoreCount(ctx: TreeTableContext, g: TreeTableGroup): number;
/** The rows handed to Tabulator: the parent's rows, plus each group's added rows. */
export declare function tableData(ctx: TreeTableContext): Record<string, any>[];
/** What the added rows look like now; when it changes, the table's data is swapped. */
export declare function phantomSignatureOf(ctx: TreeTableContext): string;
/**
 * Sorting keeps each group's added rows last (placeholders, then "Show more", then the title row),
 * whichever way the column is sorted. With sortMode "remote" the rows keep the order they were given.
 */
export declare function createSorter(ctx: TreeTableContext): (a: any, b: any, aRow: RowComponent, bRow: RowComponent, _col: any, dir: string) => number;
