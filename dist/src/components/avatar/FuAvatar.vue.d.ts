import { UserStatus } from './UserStatus';
type __VLS_Props = {
    src?: string;
    alt?: string;
    name?: string;
    size?: "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl";
    status?: UserStatus | number;
    showStatus?: boolean;
};
declare const _default: import('vue').DefineComponent<__VLS_Props, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {} & {
    click: () => any;
}, string, import('vue').PublicProps, Readonly<__VLS_Props> & Readonly<{
    onClick?: (() => any) | undefined;
}>, {
    size: "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl";
    showStatus: boolean;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, HTMLDivElement>;
export default _default;
