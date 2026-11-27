import { Component } from 'vue';
export interface PickerItem {
    key: string | number;
    /** The row in the list. */
    label: string;
    icon?: Component;
    /** Bigger heading in the preview. Defaults to `label`. */
    title?: string;
    /** A line or two under the heading in the preview. */
    description?: string;
    /** Picture for the preview. Without one, the item's icon is shown large on a soft panel. */
    image?: string;
    disabled?: boolean;
}
type __VLS_Props = {
    items: PickerItem[];
    /** Small heading above the list, for example "Views". */
    heading?: string;
    /** Label of the button in the preview. */
    actionLabel?: string;
    /** Width of the whole popover. */
    width?: string;
    /** A fixed height, so the popover never changes size as the preview changes. The list and preview scroll inside it. */
    height?: string;
    align?: "left" | "right" | "center";
    /** Close the popover after the button is pressed. */
    closeOnAction?: boolean;
    emptyText?: string;
};
declare function __VLS_template(): {
    attrs: Partial<{}>;
    slots: {
        trigger?(_: {}): any;
        preview?(_: {
            item: PickerItem;
        }): any;
    };
    refs: {
        popover: ({
            $: import('vue').ComponentInternalInstance;
            $data: {};
            $props: {
                readonly align?: import('../popover/FuPopover.vue').FuPopoverAlign | undefined;
                readonly side?: import('../popover/FuPopover.vue').FuPopoverSide | undefined;
                readonly offset?: number | undefined;
                readonly width?: string | undefined;
                readonly maxHeight?: string | undefined;
                readonly stickyHeader?: boolean | undefined;
                readonly stickyFooter?: boolean | undefined;
                readonly onClose?: (() => any) | undefined;
                readonly onOpen?: (() => any) | undefined;
            } & import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps;
            $attrs: {
                [x: string]: unknown;
            };
            $refs: {
                [x: string]: unknown;
            } & {
                triggerRef: HTMLDivElement;
                popoverRef: HTMLDivElement;
            };
            $slots: Readonly<{
                [name: string]: import('vue').Slot<any> | undefined;
            }>;
            $root: import('vue').ComponentPublicInstance | null;
            $parent: import('vue').ComponentPublicInstance | null;
            $host: Element | null;
            $emit: ((event: "close") => void) & ((event: "open") => void);
            $el: any;
            $options: import('vue').ComponentOptionsBase<Readonly<{
                align?: import('../popover/FuPopover.vue').FuPopoverAlign;
                side?: import('../popover/FuPopover.vue').FuPopoverSide;
                offset?: number;
                width?: string;
                maxHeight?: string;
                stickyHeader?: boolean;
                stickyFooter?: boolean;
            }> & Readonly<{
                onClose?: (() => any) | undefined;
                onOpen?: (() => any) | undefined;
            }>, {
                open: () => void;
                close: () => void;
            }, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {} & {
                close: () => any;
                open: () => any;
            }, string, {}, {}, string, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, import('vue').ComponentProvideOptions> & {
                beforeCreate?: (() => void) | (() => void)[];
                created?: (() => void) | (() => void)[];
                beforeMount?: (() => void) | (() => void)[];
                mounted?: (() => void) | (() => void)[];
                beforeUpdate?: (() => void) | (() => void)[];
                updated?: (() => void) | (() => void)[];
                activated?: (() => void) | (() => void)[];
                deactivated?: (() => void) | (() => void)[];
                beforeDestroy?: (() => void) | (() => void)[];
                beforeUnmount?: (() => void) | (() => void)[];
                destroyed?: (() => void) | (() => void)[];
                unmounted?: (() => void) | (() => void)[];
                renderTracked?: ((e: import('vue').DebuggerEvent) => void) | ((e: import('vue').DebuggerEvent) => void)[];
                renderTriggered?: ((e: import('vue').DebuggerEvent) => void) | ((e: import('vue').DebuggerEvent) => void)[];
                errorCaptured?: ((err: unknown, instance: import('vue').ComponentPublicInstance | null, info: string) => boolean | void) | ((err: unknown, instance: import('vue').ComponentPublicInstance | null, info: string) => boolean | void)[];
            };
            $forceUpdate: () => void;
            $nextTick: typeof import('vue').nextTick;
            $watch<T extends string | ((...args: any) => any)>(source: T, cb: T extends (...args: any) => infer R ? (...args: [R, R, import('@vue/reactivity').OnCleanup]) => any : (...args: [any, any, import('@vue/reactivity').OnCleanup]) => any, options?: import('vue').WatchOptions): import('vue').WatchStopHandle;
        } & Readonly<{}> & Omit<Readonly<{
            align?: import('../popover/FuPopover.vue').FuPopoverAlign;
            side?: import('../popover/FuPopover.vue').FuPopoverSide;
            offset?: number;
            width?: string;
            maxHeight?: string;
            stickyHeader?: boolean;
            stickyFooter?: boolean;
        }> & Readonly<{
            onClose?: (() => any) | undefined;
            onOpen?: (() => any) | undefined;
        }>, "close" | "open"> & import('vue').ShallowUnwrapRef<{
            open: () => void;
            close: () => void;
        }> & {} & import('vue').ComponentCustomProperties & {} & {
            $slots: {
                trigger?(_: {}): any;
                header?(_: {}): any;
                default?(_: {}): any;
                footer?(_: {}): any;
            };
        }) | null;
    };
    rootEl: any;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: import('vue').DefineComponent<__VLS_Props, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {} & {
    select: (item: PickerItem) => any;
    action: (item: PickerItem) => any;
}, string, import('vue').PublicProps, Readonly<__VLS_Props> & Readonly<{
    onSelect?: ((item: PickerItem) => any) | undefined;
    onAction?: ((item: PickerItem) => any) | undefined;
}>, {
    height: string;
    width: string;
    emptyText: string;
    align: "left" | "right" | "center";
    heading: string;
    actionLabel: string;
    closeOnAction: boolean;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {
    popover: ({
        $: import('vue').ComponentInternalInstance;
        $data: {};
        $props: {
            readonly align?: import('../popover/FuPopover.vue').FuPopoverAlign | undefined;
            readonly side?: import('../popover/FuPopover.vue').FuPopoverSide | undefined;
            readonly offset?: number | undefined;
            readonly width?: string | undefined;
            readonly maxHeight?: string | undefined;
            readonly stickyHeader?: boolean | undefined;
            readonly stickyFooter?: boolean | undefined;
            readonly onClose?: (() => any) | undefined;
            readonly onOpen?: (() => any) | undefined;
        } & import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps;
        $attrs: {
            [x: string]: unknown;
        };
        $refs: {
            [x: string]: unknown;
        } & {
            triggerRef: HTMLDivElement;
            popoverRef: HTMLDivElement;
        };
        $slots: Readonly<{
            [name: string]: import('vue').Slot<any> | undefined;
        }>;
        $root: import('vue').ComponentPublicInstance | null;
        $parent: import('vue').ComponentPublicInstance | null;
        $host: Element | null;
        $emit: ((event: "close") => void) & ((event: "open") => void);
        $el: any;
        $options: import('vue').ComponentOptionsBase<Readonly<{
            align?: import('../popover/FuPopover.vue').FuPopoverAlign;
            side?: import('../popover/FuPopover.vue').FuPopoverSide;
            offset?: number;
            width?: string;
            maxHeight?: string;
            stickyHeader?: boolean;
            stickyFooter?: boolean;
        }> & Readonly<{
            onClose?: (() => any) | undefined;
            onOpen?: (() => any) | undefined;
        }>, {
            open: () => void;
            close: () => void;
        }, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {} & {
            close: () => any;
            open: () => any;
        }, string, {}, {}, string, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, import('vue').ComponentProvideOptions> & {
            beforeCreate?: (() => void) | (() => void)[];
            created?: (() => void) | (() => void)[];
            beforeMount?: (() => void) | (() => void)[];
            mounted?: (() => void) | (() => void)[];
            beforeUpdate?: (() => void) | (() => void)[];
            updated?: (() => void) | (() => void)[];
            activated?: (() => void) | (() => void)[];
            deactivated?: (() => void) | (() => void)[];
            beforeDestroy?: (() => void) | (() => void)[];
            beforeUnmount?: (() => void) | (() => void)[];
            destroyed?: (() => void) | (() => void)[];
            unmounted?: (() => void) | (() => void)[];
            renderTracked?: ((e: import('vue').DebuggerEvent) => void) | ((e: import('vue').DebuggerEvent) => void)[];
            renderTriggered?: ((e: import('vue').DebuggerEvent) => void) | ((e: import('vue').DebuggerEvent) => void)[];
            errorCaptured?: ((err: unknown, instance: import('vue').ComponentPublicInstance | null, info: string) => boolean | void) | ((err: unknown, instance: import('vue').ComponentPublicInstance | null, info: string) => boolean | void)[];
        };
        $forceUpdate: () => void;
        $nextTick: typeof import('vue').nextTick;
        $watch<T extends string | ((...args: any) => any)>(source: T, cb: T extends (...args: any) => infer R ? (...args: [R, R, import('@vue/reactivity').OnCleanup]) => any : (...args: [any, any, import('@vue/reactivity').OnCleanup]) => any, options?: import('vue').WatchOptions): import('vue').WatchStopHandle;
    } & Readonly<{}> & Omit<Readonly<{
        align?: import('../popover/FuPopover.vue').FuPopoverAlign;
        side?: import('../popover/FuPopover.vue').FuPopoverSide;
        offset?: number;
        width?: string;
        maxHeight?: string;
        stickyHeader?: boolean;
        stickyFooter?: boolean;
    }> & Readonly<{
        onClose?: (() => any) | undefined;
        onOpen?: (() => any) | undefined;
    }>, "close" | "open"> & import('vue').ShallowUnwrapRef<{
        open: () => void;
        close: () => void;
    }> & {} & import('vue').ComponentCustomProperties & {} & {
        $slots: {
            trigger?(_: {}): any;
            header?(_: {}): any;
            default?(_: {}): any;
            footer?(_: {}): any;
        };
    }) | null;
}, any>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
