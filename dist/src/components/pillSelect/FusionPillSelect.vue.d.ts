type Size = "xs" | "sm" | "md" | "lg";
interface Option {
    value: string | number;
    label: string;
    /** A Lucide icon component, OR an image URL string — both are supported. */
    icon?: any;
    /** This pill cannot be chosen (the rest still can). */
    disabled?: boolean;
    /** Shown as a tooltip on a disabled pill. */
    disabledReason?: string;
}
interface Props {
    modelValue?: string | number | null;
    options: Option[];
    /** xs 24px (default) · sm 36px · md 44px · lg 52px */
    size?: Size;
    disabled?: boolean;
    readonly?: boolean;
    /** outline: a thin border, the chosen pill keeps it. filled: the chosen pill is solid dark. */
    variant?: "outline" | "filled";
    /** Let the pills wrap onto more lines. Turn off for one scrolling line. */
    wrap?: boolean;
    /** Name of the group for screen readers. */
    ariaLabel?: string;
    font?: string;
    fontSize?: string;
    color?: string;
}
declare const _default: import('vue').DefineComponent<Props, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {} & {
    "update:modelValue": (value: string | number) => any;
}, string, import('vue').PublicProps, Readonly<Props> & Readonly<{
    "onUpdate:modelValue"?: ((value: string | number) => any) | undefined;
}>, {
    disabled: boolean;
    size: Size;
    color: string;
    variant: "outline" | "filled";
    font: string;
    ariaLabel: string;
    fontSize: string;
    wrap: boolean;
    modelValue: string | number | null;
    readonly: boolean;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, HTMLDivElement>;
export default _default;
