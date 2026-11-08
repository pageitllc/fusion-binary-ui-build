import { Component } from 'vue';
type __VLS_Props = {
    name: string;
    /** The small grey line under the name, e.g. "Email and replies" */
    description?: string;
    /** Logo or picture for the tile. If both `image` and `icon` are missing, a plug icon is shown. */
    image?: string;
    /** A Lucide icon to use in the tile when there is no image */
    icon?: Component | null;
    /**
     * - `available`: shows the Connect button
     * - `connected`: shows the green "Connected" flag and a green tile
     * - `coming-soon`: greys the row out and shows the "Coming soon" tag
     */
    status?: "available" | "connected" | "coming-soon";
    connectLabel?: string;
    connectedLabel?: string;
    comingSoonLabel?: string;
    /** Spinner on the Connect button, while the connection is being set up */
    loading?: boolean;
    disabled?: boolean;
};
declare function __VLS_template(): {
    attrs: Partial<{}>;
    slots: {
        action?(_: {
            status: "available" | "connected" | "coming-soon";
        }): any;
    };
    refs: {};
    rootEl: HTMLDivElement;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: import('vue').DefineComponent<__VLS_Props, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {} & {
    connect: () => any;
}, string, import('vue').PublicProps, Readonly<__VLS_Props> & Readonly<{
    onConnect?: (() => any) | undefined;
}>, {
    disabled: boolean;
    image: string;
    status: "available" | "connected" | "coming-soon";
    description: string;
    loading: boolean;
    icon: Component | null;
    connectLabel: string;
    connectedLabel: string;
    comingSoonLabel: string;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, HTMLDivElement>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
