import { Component } from 'vue';
interface Props {
    icon: Component;
    title: string;
    fileName: string;
    timestamp: string;
    userName: string;
    userAvatar?: string | null;
    clickable?: boolean;
}
declare const _default: import('vue').DefineComponent<Props, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {} & {
    click: () => any;
}, string, import('vue').PublicProps, Readonly<Props> & Readonly<{
    onClick?: (() => any) | undefined;
}>, {
    userAvatar: string | null;
    clickable: boolean;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, HTMLDivElement>;
export default _default;
