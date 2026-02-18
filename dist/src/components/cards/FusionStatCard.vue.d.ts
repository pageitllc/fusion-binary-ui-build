import { FunctionalComponent } from 'vue';
export interface FusionStatCardProps {
    variant?: "icon-left" | "title-top";
    title: string;
    value?: string | number;
    subtitle?: string;
    icon?: FunctionalComponent | object | string | null;
    bordered?: boolean;
    shadow?: boolean;
}
declare const _default: import('vue').DefineComponent<FusionStatCardProps, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<FusionStatCardProps> & Readonly<{}>, {
    icon: FunctionalComponent | object | string | null;
    variant: "icon-left" | "title-top";
    value: string | number;
    subtitle: string;
    bordered: boolean;
    shadow: boolean;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, HTMLDivElement>;
export default _default;
