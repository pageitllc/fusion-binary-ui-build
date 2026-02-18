type __VLS_Props = {
    text: string;
    label?: string;
    variant?: "solid" | "outline" | "ghost";
};
declare const _default: import('vue').DefineComponent<__VLS_Props, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {} & {
    edit: (event: MouseEvent) => any;
}, string, import('vue').PublicProps, Readonly<__VLS_Props> & Readonly<{
    onEdit?: ((event: MouseEvent) => any) | undefined;
}>, {
    label: string;
    variant: "solid" | "outline" | "ghost";
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {
    container: HTMLDivElement;
}, HTMLDivElement>;
export default _default;
