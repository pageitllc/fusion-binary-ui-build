import { TreeTableContext } from './context';
export declare function useSort(ctx: TreeTableContext): {
    onDataSorted: (sorters: {
        field: string;
        dir: string;
    }[]) => void;
    setSort: (key?: string | null, dir?: "asc" | "desc") => void;
    initialSort: () => {
        initialSort: {
            column: string;
            dir: "desc" | "asc";
        }[];
    } | {
        initialSort?: undefined;
    };
};
