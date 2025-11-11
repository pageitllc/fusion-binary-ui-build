interface Props {
    id: string | number;
    fileName: string;
    fileUrl: string;
    fileSize?: string;
    timestamp: string;
    userName: string;
    userAvatar?: string | null;
}
declare const _default: import('vue').DefineComponent<Props, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {} & {
    click: (id: string | number) => any;
}, string, import('vue').PublicProps, Readonly<Props> & Readonly<{
    onClick?: ((id: string | number) => any) | undefined;
}>, {
    userAvatar: string | null;
    fileSize: string;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, HTMLDivElement>;
export default _default;
