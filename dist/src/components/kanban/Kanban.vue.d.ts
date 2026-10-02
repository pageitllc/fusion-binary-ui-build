export interface KanbanItem {
    id: string;
    title: string;
    position: number;
    [key: string]: any;
}
export interface KanbanColumn {
    id: string;
    title: string;
    color?: string;
    probability?: number;
    position: number;
    items: KanbanItem[];
}
type __VLS_Props = {
    columns: KanbanColumn[];
    editMode?: boolean;
    addItemButtonText?: string;
    addColumnButtonText?: string;
    noItemtext?: string;
};
declare function __VLS_template(): {
    attrs: Partial<{}>;
    slots: {
        'column-header'?(_: {}): any;
        'edit-column'?(_: {
            column: {
                id: string;
                title: string;
                color?: string | undefined;
                probability?: number | undefined;
                position: number;
                items: {
                    [x: string]: any;
                    id: string;
                    title: string;
                    position: number;
                }[];
            };
            index: number;
        }): any;
        'card-body'?(_: {
            item: {
                [x: string]: any;
                id: string;
                title: string;
                position: number;
            };
            column: {
                id: string;
                title: string;
                color?: string | undefined;
                probability?: number | undefined;
                position: number;
                items: {
                    [x: string]: any;
                    id: string;
                    title: string;
                    position: number;
                }[];
            };
        }): any;
    };
    refs: {};
    rootEl: HTMLDivElement;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: import('vue').DefineComponent<__VLS_Props, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    "update:columns": (columns: KanbanColumn[]) => any;
    "update:items": (columns: KanbanColumn[]) => any;
    "card-click": (payload: {
        id: string;
        item: KanbanItem;
        column: KanbanColumn;
    }) => any;
    "add-item": (payload: {
        column: KanbanColumn;
        index: number;
    }) => any;
}, string, import('vue').PublicProps, Readonly<__VLS_Props> & Readonly<{
    "onUpdate:columns"?: ((columns: KanbanColumn[]) => any) | undefined;
    "onUpdate:items"?: ((columns: KanbanColumn[]) => any) | undefined;
    "onCard-click"?: ((payload: {
        id: string;
        item: KanbanItem;
        column: KanbanColumn;
    }) => any) | undefined;
    "onAdd-item"?: ((payload: {
        column: KanbanColumn;
        index: number;
    }) => any) | undefined;
}>, {}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, HTMLDivElement>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
