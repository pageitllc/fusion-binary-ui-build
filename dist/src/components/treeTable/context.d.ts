import { AppContext, ComputedRef, Ref, Slots, VNode } from 'vue';
import { Tabulator } from 'tabulator-tables';
import { TreeTableColumn, TreeTableGroup, TreeTableId, TreeTableResolvedProps } from './types';
export type TreeTableEmit = (event: any, ...args: any[]) => void;
/** A group header element, carrying its group's key (used when a task is dropped on a group). */
export type GroupEl = HTMLElement & {
    __fuGroupId?: TreeTableId;
};
export interface TreeTableState {
    table: Tabulator | null;
    /** Tabulator has finished building (its API is safe to call). */
    built: boolean;
    /** Tabulator's scrolling box. */
    holderEl: HTMLElement | null;
    /** The table is changing the selection itself (not the person), so it isn't reported. */
    syncingSelection: boolean;
}
export interface TreeTableContext {
    props: TreeTableResolvedProps;
    emit: TreeTableEmit;
    slots: Slots;
    appContext: AppContext | null;
    host: Ref<HTMLElement | null>;
    state: TreeTableState;
    mounted: Set<HTMLElement>;
    visibleColumns: ComputedRef<TreeTableColumn[]>;
    /** The column with the expand arrow. */
    treeKey: ComputedRef<string | undefined>;
    idOf(row: Record<string, any>): TreeTableId;
    groupById(id: TreeTableId): TreeTableGroup | undefined;
    /** Draws a Vue node into an element Tabulator owns, with the app's plugins, and keeps track of it. */
    mountVue(el: HTMLElement, vnode: VNode, track?: boolean): void;
}
export declare function createMountVue(appContext: AppContext | null, mounted: Set<HTMLElement>): (el: HTMLElement, vnode: VNode, track?: boolean) => void;
