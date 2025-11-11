import { Component } from 'vue';
interface Props {
    icon: Component;
    title: string;
    fileName: string;
    timestamp: string;
    userName: string;
    userAvatar?: string | null | undefined;
}
declare const _default: import('vue').DefineComponent<Props, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<Props> & Readonly<{}>, {
    userAvatar: string | null;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, HTMLDivElement>;
export default _default;
