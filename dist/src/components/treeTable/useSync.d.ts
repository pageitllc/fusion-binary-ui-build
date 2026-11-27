import { ColumnDefinition, GroupComponent } from 'tabulator-tables';
import { TreeTableContext } from './context';
interface SyncDeps {
    buildColumns(): ColumnDefinition[];
    applySelection(): void;
    applyMovedHighlight(): void;
    refreshRowState(): void;
    focusAddRow(reveal?: boolean): void;
    focusMoreRow(): void;
    unmountRemovedHeaders(): void;
}
export declare function useSync(ctx: TreeTableContext, deps: SyncDeps): {
    onGroupVisibilityChanged: (group: GroupComponent, visible: boolean) => void;
};
export {};
