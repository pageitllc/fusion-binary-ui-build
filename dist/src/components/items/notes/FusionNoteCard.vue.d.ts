interface Action {
    label: string;
    icon?: any;
    onClick?: () => void;
}
interface Props {
    id: string | number;
    title: string;
    content?: string;
    ownerName: string;
    ownerAvatar?: string | null;
    date: string;
    actions?: Action[];
}
declare const _default: import('vue').DefineComponent<Props, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {} & {
    open: (id: string | number) => any;
}, string, import('vue').PublicProps, Readonly<Props> & Readonly<{
    onOpen?: ((id: string | number) => any) | undefined;
}>, {
    actions: Action[];
    content: string;
    ownerAvatar: string | null;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, HTMLDivElement>;
export default _default;
