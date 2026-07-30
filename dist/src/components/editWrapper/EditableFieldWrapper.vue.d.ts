interface EditableWrapperProps<T = any> {
    modelValue: T;
    mode?: "inline" | "teleport";
    teleportTo?: string;
    align?: "left" | "center" | "right";
    disableOutsideClose?: boolean;
}
type __VLS_Props = EditableWrapperProps;
declare function startEditing(): void;
declare function openTeleport(event?: MouseEvent): void;
declare function closeEditor(): void;
declare function __VLS_template(): {
    attrs: Partial<{}>;
    slots: {
        read?(_: {}): any;
        read?(_: {}): any;
        edit?(_: {
            model: any;
        }): any;
        edit?(_: {
            model: any;
        }): any;
        actions?(_: {}): any;
        actions?(_: {}): any;
    };
    refs: {
        inlineRef: HTMLDivElement;
        teleportRef: HTMLDivElement;
    };
    rootEl: any;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: import('vue').DefineComponent<__VLS_Props, {
    startEditing: typeof startEditing;
    openTeleport: typeof openTeleport;
    closeEditor: typeof closeEditor;
}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<__VLS_Props> & Readonly<{}>, {
    mode: "inline" | "teleport";
    modelValue: any;
    align: "left" | "center" | "right";
    teleportTo: string;
    disableOutsideClose: boolean;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {
    inlineRef: HTMLDivElement;
    teleportRef: HTMLDivElement;
}, any>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
