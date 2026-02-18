import { Component } from 'vue';
interface Module {
    name: string;
    label: string;
    icon: Component;
    count?: number;
}
type __VLS_Props = {
    modules: Module[];
    activeModule?: string;
    backgroundColor?: string;
    borderRadius?: string;
};
declare const _default: import('vue').DefineComponent<__VLS_Props, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    select: (...args: any[]) => void;
}, string, import('vue').PublicProps, Readonly<__VLS_Props> & Readonly<{
    onSelect?: ((...args: any[]) => any) | undefined;
}>, {}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, HTMLElement>;
export default _default;
