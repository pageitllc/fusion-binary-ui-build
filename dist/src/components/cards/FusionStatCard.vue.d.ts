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
    variant: "icon-left" | "title-top";
    loading: boolean;
    icon: FunctionalComponent | object | string | null;
    value: string | number;
    subtitle: string;
    bordered: boolean;
    shadow: boolean;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, any>;
export default _default;
