import { Component } from 'vue';
interface Action {
    label: string;
    onClick?: () => void;
    href?: string;
}
interface EmptyStateProps {
    title: string;
    description?: string;
    visual?: {
        type: "icon";
        value: Component;
    } | {
        type: "image";
        src: string;
        alt: string;
    } | {
        type: "none";
    };
    primaryAction?: Action;
    secondaryActions?: Action[];
    size?: "sm" | "md" | "lg";
    variant?: "default" | "subtle" | "minimal";
}
declare const _default: import('vue').DefineComponent<EmptyStateProps, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<EmptyStateProps> & Readonly<{}>, {
    size: "sm" | "md" | "lg";
    variant: "default" | "subtle" | "minimal";
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, HTMLDivElement>;
export default _default;
