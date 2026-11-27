import { TreeTableContext } from './context';
import { TreeTableId } from './types';
export declare function useMoreRow(ctx: TreeTableContext): {
    focusMoreRow: () => void;
    renderMoreCell: (wrap: HTMLElement, groupId: TreeTableId, onRendered: (fn: () => void) => void) => void;
};
