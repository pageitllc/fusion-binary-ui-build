interface User {
    id?: string | number;
    src: string;
    alt?: string;
    name?: string;
}
type __VLS_Props = {
    users: User[];
    max?: number;
    size?: "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl";
};
declare const _default: import('vue').DefineComponent<__VLS_Props, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {} & {
    click: () => any;
}, string, import('vue').PublicProps, Readonly<__VLS_Props> & Readonly<{
    onClick?: (() => any) | undefined;
}>, {}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, HTMLDivElement>;
export default _default;
