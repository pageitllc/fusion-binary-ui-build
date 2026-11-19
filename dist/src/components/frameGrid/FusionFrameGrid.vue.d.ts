import { Component } from 'vue';
export interface FrameItem {
    id: string | number;
    name: string;
    /** Small text next to the name, for example "Desktop" or "Mobile". */
    kind?: string;
    /** Image URL. Without one a plain wireframe placeholder is drawn. */
    thumbnail?: string;
    /** A line under the card, for example "On: Hero section". */
    badge?: string;
    badgeTone?: "success" | "warning" | "muted";
    /** Names behind a short badge like "On 3 tasks". Shown in a small list when the badge is hovered or focused. */
    badgeList?: string[];
    /** Cannot be ticked or attached. */
    disabled?: boolean;
}
export interface FrameAttachTarget {
    id: string | number;
    label: string;
    /** Indent level, for subtasks. */
    level?: number;
    icon?: Component;
}
type __VLS_Props = {
    items: FrameItem[];
    /** Ticked ids (v-model:selectedIds). */
    selectedIds?: (string | number)[];
    /** Where a frame can be attached. Shows the "Attach to" menu on each card. */
    attachTargets?: FrameAttachTarget[];
    /** Which targets each frame is already attached to, by frame id. Ticks them in the menu. */
    attachedTo?: Record<string | number, (string | number)[]>;
    columns?: number;
    selectable?: boolean;
    loading?: boolean;
    attachLabel?: string;
    /** Show a search box in the "Attach to" menu. "auto" turns it on when there are more than 5 targets. */
    attachSearch?: boolean | "auto";
    attachSearchPlaceholder?: string;
    emptyText?: string;
};
declare function __VLS_template(): {
    attrs: Partial<{}>;
    slots: {
        thumb?(_: {
            item: FrameItem;
        }): any;
        empty?(_: {}): any;
    };
    refs: {};
    rootEl: HTMLDivElement;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: import('vue').DefineComponent<__VLS_Props, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {} & {
    open: (item: FrameItem) => any;
    "update:selectedIds": (ids: (string | number)[]) => any;
    attach: (payload: {
        itemId: string | number;
        targetId: string | number;
        attached: boolean;
    }) => any;
}, string, import('vue').PublicProps, Readonly<__VLS_Props> & Readonly<{
    onOpen?: ((item: FrameItem) => any) | undefined;
    "onUpdate:selectedIds"?: ((ids: (string | number)[]) => any) | undefined;
    onAttach?: ((payload: {
        itemId: string | number;
        targetId: string | number;
        attached: boolean;
    }) => any) | undefined;
}>, {
    loading: boolean;
    columns: number;
    selectable: boolean;
    selectedIds: (string | number)[];
    emptyText: string;
    attachTargets: FrameAttachTarget[];
    attachedTo: Record<string | number, (string | number)[]>;
    attachLabel: string;
    attachSearch: boolean | "auto";
    attachSearchPlaceholder: string;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, HTMLDivElement>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
