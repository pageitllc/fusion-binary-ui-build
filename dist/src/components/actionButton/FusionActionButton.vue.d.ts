import { Component } from 'vue';
interface Props {
    disabled?: boolean;
    size?: "sm" | "md" | "lg";
    variant?: "solid" | "subtle" | "outline" | "ghost" | "danger";
    tooltip?: string | null;
    /** Name for screen readers. Icon-only buttons need one; falls back to the tooltip text. */
    ariaLabel?: string;
    loading?: boolean;
    icon?: Component | null;
    /** A number or text shown on the button's top corner, or `true` for a small dot. Nothing shows for 0, empty, null or false. */
    badge?: number | string | boolean | null;
    badgeTone?: "default" | "danger";
    /** Counts above this show as "99+" */
    badgeMax?: number;
}
declare const _default: import('vue').DefineComponent<Props, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {} & {
    click: (ev: MouseEvent) => any;
}, string, import('vue').PublicProps, Readonly<Props> & Readonly<{
    onClick?: ((ev: MouseEvent) => any) | undefined;
}>, {
    disabled: boolean;
    size: "sm" | "md" | "lg";
    variant: "solid" | "subtle" | "outline" | "ghost" | "danger";
    tooltip: string | null;
    loading: boolean;
    icon: Component | null;
    badge: number | string | boolean | null;
    badgeTone: "default" | "danger";
    badgeMax: number;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, HTMLDivElement>;
export default _default;
