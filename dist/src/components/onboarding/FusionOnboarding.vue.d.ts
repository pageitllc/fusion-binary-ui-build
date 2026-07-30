type StepType = "pill-single" | "pill-multi" | "tag-input" | "text" | "select" | "transition";
interface Option {
    value: string | number;
    label: string;
    icon?: any;
}
interface Step {
    id: string;
    type: StepType;
    question: string;
    options?: Option[];
    searchable?: boolean;
    placeholder?: string;
    multiple?: boolean;
    hint?: string;
    helperText?: string;
    validate?: "email" | ((value: string) => boolean);
    /** Auto-advance to the next step the instant an answer is given.
        Defaults to true for pill-single, false for everything else. */
    autoAdvance?: boolean;
    /** transition steps only — ms to wait before auto-advancing. Default 1500. */
    duration?: number;
    /** Overrides the Next button's label just for this step (e.g. "Invite", "Finish") */
    nextLabel?: string;
    /** Defaults to true. Set false to let Next stay enabled even with no answer —
        e.g. the "invite people" step shouldn't block someone who wants to skip it.
        When the user advances past a required:false step with no answer, the
        `skip` event fires so the app can react (e.g. show a "you can always
        invite teammates later" modal) without blocking the wizard itself. */
    required?: boolean;
}
interface Props {
    steps: Step[];
    step?: number;
    answers?: Record<string, any>;
    footerNote?: string;
    color?: string;
    /** Optional full-page background image URL, painted behind a dark scrim
        so the card content stays readable — same look as the reference flow's
        backdrop, but this is real page content, not a fixed modal overlay. */
    backdropImage?: string;
}
declare function __VLS_template(): {
    attrs: Partial<{}>;
    slots: {
        transition?(_: {
            step: Step;
        }): any;
    };
    refs: {};
    rootEl: HTMLDivElement;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: import('vue').DefineComponent<Props, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {} & {
    close: () => any;
    "update:step": (value: number) => any;
    "update:answers": (value: Record<string, any>) => any;
    complete: (answers: Record<string, any>) => any;
    skip: (payload: {
        id: string;
        type: StepType;
    }) => any;
}, string, import('vue').PublicProps, Readonly<Props> & Readonly<{
    onClose?: (() => any) | undefined;
    "onUpdate:step"?: ((value: number) => any) | undefined;
    "onUpdate:answers"?: ((value: Record<string, any>) => any) | undefined;
    onComplete?: ((answers: Record<string, any>) => any) | undefined;
    onSkip?: ((payload: {
        id: string;
        type: StepType;
    }) => any) | undefined;
}>, {
    color: string;
    step: number;
    answers: Record<string, any>;
    footerNote: string;
    backdropImage: string;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, HTMLDivElement>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
