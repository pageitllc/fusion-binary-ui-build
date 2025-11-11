interface Option {
    label: string;
    color: string;
}
interface Props {
    modelValue: Option | null;
    options: Option[];
    align?: "left" | "center" | "right";
    label?: string;
}
declare const _default: import('vue').DefineComponent<Props, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {} & {
    "update:modelValue": (value: Option) => any;
}, string, import('vue').PublicProps, Readonly<Props> & Readonly<{
    "onUpdate:modelValue"?: ((value: Option) => any) | undefined;
}>, {
    label: string;
    align: "left" | "center" | "right";
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {
    dropdown: HTMLDivElement;
    menuRef: HTMLUListElement;
}, HTMLDivElement>;
export default _default;
