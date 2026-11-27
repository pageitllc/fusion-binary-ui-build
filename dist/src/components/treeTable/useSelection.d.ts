import { Ref } from 'vue';
import { RowComponent } from 'tabulator-tables';
import { TreeTableContext } from './context';
export declare function useSelection(ctx: TreeTableContext): {
    selectedCount: Ref<number, number>;
    applySelection: () => void;
    onSelectionChanged: (data: any[], rows: RowComponent[]) => void;
};
