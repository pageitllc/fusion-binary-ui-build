type Option = {
    id: string | number;
    text: string;
};
type QuestionType = "short_text" | "long_text" | "number" | "link" | "date" | "dropdown" | "single_choice" | "multiple_choice" | "upload" | "contact_details";
type __VLS_Props = {
    widgetId: string | number;
    questionType?: QuestionType;
    label?: string;
    placeholder?: string;
    required?: boolean;
    options?: Option[];
    value?: any;
    isVisible?: boolean;
    contactFields?: {
        email?: boolean;
        phone?: boolean;
    };
};
declare const _default: import('vue').DefineComponent<__VLS_Props, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {} & {
    update: (payload: {
        value: any;
    }) => any;
}, string, import('vue').PublicProps, Readonly<__VLS_Props> & Readonly<{
    onUpdate?: ((payload: {
        value: any;
    }) => any) | undefined;
}>, {
    required: boolean;
    placeholder: string;
    label: string;
    options: Option[];
    value: any;
    questionType: QuestionType;
    isVisible: boolean;
    contactFields: {
        email?: boolean;
        phone?: boolean;
    };
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, any>;
export default _default;
