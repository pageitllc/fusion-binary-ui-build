type __VLS_Props = {
    running?: boolean;
    /** Running time, for example "00:42:17". Shown while running. */
    elapsed?: string;
    /** For the dark top bar. */
    onDark?: boolean;
    ariaLabel?: string;
    expanded?: boolean;
};
declare const _default: import('vue').DefineComponent<__VLS_Props, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {} & {
    click: (ev: MouseEvent) => any;
}, string, import('vue').PublicProps, Readonly<__VLS_Props> & Readonly<{
    onClick?: ((ev: MouseEvent) => any) | undefined;
}>, {
    ariaLabel: string;
    running: boolean;
    expanded: boolean;
    elapsed: string;
    onDark: boolean;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, HTMLButtonElement>;
export default _default;
