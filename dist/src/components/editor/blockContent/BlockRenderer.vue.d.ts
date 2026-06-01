export interface Widget {
    id: string;
    type: string;
    props: Record<string, any>;
}
export interface Column {
    width: number;
    widgets: Widget[];
}
export interface Block {
    id: string;
    columns: Column[];
    backgroundColor?: string;
    backgroundOpacity?: number;
    contentWidth?: "sm" | "md" | "lg" | "full";
    paddingTop?: number;
    paddingBottom?: number;
}
type __VLS_Props = {
    block: Block;
};
declare const _default: import('vue').DefineComponent<__VLS_Props, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {} & {
    action: (payload: any) => any;
}, string, import('vue').PublicProps, Readonly<__VLS_Props> & Readonly<{
    onAction?: ((payload: any) => any) | undefined;
}>, {}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, HTMLDivElement>;
export default _default;
