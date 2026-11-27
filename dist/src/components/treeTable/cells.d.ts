import { ColumnDefinition } from 'tabulator-tables';
import { TreeTableContext } from './context';
import { TreeTableId } from './types';
type RenderAddedCell = (wrap: HTMLElement, groupId: TreeTableId, onRendered: (fn: () => void) => void) => void;
/** The expand/collapse arrow for rows with children. */
export declare function chevron(open: boolean): HTMLElement;
export declare function useCells(ctx: TreeTableContext, added: {
    renderAddCell: RenderAddedCell;
    renderMoreCell: RenderAddedCell;
}): {
    buildColumns: () => ColumnDefinition[];
    pruneDetached: () => void;
    unmountAllCells: () => void;
};
export {};
