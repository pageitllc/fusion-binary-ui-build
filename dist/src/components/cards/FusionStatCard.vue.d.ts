import { FunctionalComponent } from 'vue';
export interface FusionStatCardProps {
    variant?: "icon-left" | "title-top";
    title: string;
    value?: string | number;
    subtitle?: string;
    icon?: FunctionalComponent | object | string | null;
    bordered?: boolean;
    shadow?: boolean;
    loading?: boolean;
    /** Makes the whole card a link (an <a>). Click handlers still work through @click. */
    href?: string;
}
declare const _default: import('vue').DefineComponent<FusionStatCardProps, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<FusionStatCardProps> & Readonly<{}>, {
    href: string;
    bordered: boolean;
    loading: boolean;
    variant: "icon-left" | "title-top";
    value: string | number;
    icon: FunctionalComponent | object | string | null;
    subtitle: string;
    shadow: boolean;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, any>;
export default _default;
