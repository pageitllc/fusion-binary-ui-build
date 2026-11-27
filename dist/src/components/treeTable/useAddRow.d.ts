import { TreeTableContext } from './context';
import { TreeTableId } from './types';
export declare function useAddRow(ctx: TreeTableContext): {
    focusAddRow: (reveal?: boolean) => void;
    renderAddCell: (wrap: HTMLElement, groupId: TreeTableId, onRendered: (fn: () => void) => void) => void;
};
