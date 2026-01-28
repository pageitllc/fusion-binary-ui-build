interface Props {
    page: number;
    pageSize: number;
    total: number;
    variant?: "default" | "simple";
    showInfo?: boolean;
    siblingCount?: number;
    showPageSize?: boolean;
    pageSizeOptions?: number[];
}
declare const _default: import('vue').DefineComponent<Props, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {} & {
    "update:page": (page: number) => any;
    "update:pageSize": (size: number) => any;
}, string, import('vue').PublicProps, Readonly<Props> & Readonly<{
    "onUpdate:page"?: ((page: number) => any) | undefined;
    "onUpdate:pageSize"?: ((size: number) => any) | undefined;
}>, {
    variant: "default" | "simple";
    showInfo: boolean;
    siblingCount: number;
    showPageSize: boolean;
    pageSizeOptions: number[];
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, HTMLDivElement>;
export default _default;
