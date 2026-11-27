import { Component } from 'vue';
import { GroupComponent } from 'tabulator-tables';
import { TreeTableContext } from './context';
import { TreeTableId } from './types';
export declare const CHEVRON_SVG = "<svg viewBox=\"0 0 16 16\" width=\"14\" height=\"14\"><path d=\"M6 3.5 10.5 8 6 12.5\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/></svg>";
export declare function useGroupHeader(ctx: TreeTableContext, GroupDetailsTrigger: Component): {
    groupHeader: (key: TreeTableId, count: number, group: GroupComponent) => HTMLElement;
    unmountRemovedHeaders: () => void;
    unmountAllHeaders: () => void;
};
