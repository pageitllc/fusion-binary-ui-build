export interface ProgressSegment {
    value: number;
    label?: string;
    tone?: "default" | "success" | "info" | "warning" | "danger" | "muted";
    /** Any CSS colour. Wins over tone. */
    color?: string;
}
type __VLS_Props = {
    /** Current amount. Use with `max`. */
    value?: number;
    max?: number;
    /** Several parts of one whole instead of a single value. */
    segments?: ProgressSegment[];
    label?: string;
    /** Text on the right, for example "14.5 of 20 h". Defaults to the percentage. */
    valueText?: string;
    showValue?: boolean;
    size?: "sm" | "md" | "lg";
    /** default: one colour. auto: grows amber at warnAt and red at dangerAt. */
    tone?: "default" | "success" | "warning" | "danger" | "auto";
    warnAt?: number;
    dangerAt?: number;
    /** Show a legend under a segmented bar. */
    legend?: boolean;
    indeterminate?: boolean;
    /** One line: the bar, then the value on its right. For table cells. No label is shown. */
    inline?: boolean;
};
declare const _default: import('vue').DefineComponent<__VLS_Props, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<__VLS_Props> & Readonly<{}>, {
    legend: boolean;
    size: "sm" | "md" | "lg";
    max: number;
    value: number;
    showValue: boolean;
    tone: "default" | "success" | "warning" | "danger" | "auto";
    warnAt: number;
    dangerAt: number;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, HTMLDivElement>;
export default _default;
