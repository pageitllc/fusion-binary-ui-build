import { Component } from 'vue';
interface Module {
    name: string;
    label: string;
    link: string;
    icon?: Component;
    count?: number;
}
type __VLS_Props = {
    modules: Module[];
    activeModule?: string;
};
declare const _default: import('vue').DefineComponent<__VLS_Props, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<__VLS_Props> & Readonly<{}>, {}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, HTMLElement>;
export default _default;
