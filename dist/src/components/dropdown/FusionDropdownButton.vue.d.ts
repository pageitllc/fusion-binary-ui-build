import { Component } from 'vue';
interface Action {
    label: string;
    icon?: Component;
    onClick?: () => void;
}
interface Props {
    buttonText: string;
    buttonIcon?: Component;
    actions: Action[];
    align?: "left" | "center" | "right";
}
declare const _default: import('vue').DefineComponent<Props, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<Props> & Readonly<{}>, {
    align: "left" | "center" | "right";
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {
    dropdown: HTMLDivElement;
    menuRef: HTMLUListElement;
}, HTMLDivElement>;
export default _default;
