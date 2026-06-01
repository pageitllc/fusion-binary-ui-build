import { Component } from 'vue';
interface Props {
    disabled?: boolean;
    size?: "sm" | "md" | "lg";
    variant?: "solid" | "subtle" | "outline" | "ghost" | "danger";
    tooltip?: string | null;
    loading?: boolean;
    icon?: Component | null;
}
declare const _default: import('vue').DefineComponent<Props, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {} & {
    click: (ev: MouseEvent) => any;
}, string, import('vue').PublicProps, Readonly<Props> & Readonly<{
    onClick?: ((ev: MouseEvent) => any) | undefined;
}>, {
    disabled: boolean;
    size: "sm" | "md" | "lg";
    icon: Component | null;
    variant: "solid" | "subtle" | "outline" | "ghost" | "danger";
    tooltip: string | null;
    loading: boolean;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, HTMLDivElement>;
export default _default;
