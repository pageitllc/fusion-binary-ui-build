import { TreeTableContext } from './context';
export declare function useColumnDrag(ctx: TreeTableContext): {
    watchColumnDrag: () => void;
    stopColumnDrag: () => void;
};
