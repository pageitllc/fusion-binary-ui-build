import { RowComponent } from 'tabulator-tables';
import { TreeTableContext } from './context';
export type RowEl = HTMLElement & {
    __fuRow?: RowComponent;
};
export declare function useRows(ctx: TreeTableContext): {
    decorateRow: (row: RowComponent) => void;
    refreshRowState: () => void;
    applyMovedHighlight: () => void;
    bindDnd: () => void;
    unbindDnd: () => void;
};
