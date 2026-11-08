export interface FuProjectCardProps {
    /** Project name */
    name: string;
    /** Current stage, e.g. "Design stage" */
    stage?: string;
    /** What is needed next, shown in the accent colour, e.g. "we need your feedback" */
    highlight?: string;
    /** Small footer line, e.g. "Step 2 of 4" */
    meta?: string;
    href?: string;
    clickable?: boolean;
}
declare const _default: import('vue').DefineComponent<FuProjectCardProps, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {} & {
    click: (ev: MouseEvent) => any;
}, string, import('vue').PublicProps, Readonly<FuProjectCardProps> & Readonly<{
    onClick?: ((ev: MouseEvent) => any) | undefined;
}>, {
    clickable: boolean;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, any>;
export default _default;
