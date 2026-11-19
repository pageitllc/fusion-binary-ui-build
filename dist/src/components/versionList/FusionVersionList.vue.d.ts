export type VersionTone = "neutral" | "info" | "success" | "warning" | "danger";
export interface VersionSentItem {
    /** The task or subtask. */
    name: string;
    /** What was shown, for example "Figma frames". */
    type: string;
    /** For example "2 frames". */
    count: string;
}
export interface VersionFeedback {
    text: string;
    /** For example "Fixed in v3", "To fix", "Approved". */
    state: string;
    tone?: VersionTone;
}
export interface VersionItem {
    id: string | number;
    /** "v2" */
    label: string;
    /** For example "Sent 10 Nov by Faris Ansari". */
    sentText: string;
    /** One line under the title, for example "4 frames · 2 updated". */
    summary?: string;
    /** Small grey tag next to the label, for example "Latest sent". */
    tag?: string;
    /** The client's answer for this version. */
    answer?: {
        text: string;
        tone?: VersionTone;
    };
    sent?: VersionSentItem[];
    email?: {
        subject: string;
    };
    feedback?: VersionFeedback[];
    /** Text for the empty feedback line, for example "Waiting for the client." */
    feedbackEmpty?: string;
    /** Label of the compare link, for example "Compare with v1". Hidden when empty. */
    compareLabel?: string;
}
type __VLS_Props = {
    versions: VersionItem[];
    /** Ids of open versions (v-model:open). When omitted the list manages it and opens the first one. */
    open?: (string | number)[];
    /** Open every version to start. */
    startAllOpen?: boolean;
    emptyText?: string;
};
declare function __VLS_template(): {
    attrs: Partial<{}>;
    slots: {
        body?(_: {
            version: VersionItem;
        }): any;
    };
    refs: {};
    rootEl: HTMLDivElement;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: import('vue').DefineComponent<__VLS_Props, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {} & {
    "update:open": (ids: (string | number)[]) => any;
    compare: (id: string | number) => any;
    "open-email": (id: string | number) => any;
}, string, import('vue').PublicProps, Readonly<__VLS_Props> & Readonly<{
    "onUpdate:open"?: ((ids: (string | number)[]) => any) | undefined;
    onCompare?: ((id: string | number) => any) | undefined;
    "onOpen-email"?: ((id: string | number) => any) | undefined;
}>, {
    emptyText: string;
    startAllOpen: boolean;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, HTMLDivElement>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
