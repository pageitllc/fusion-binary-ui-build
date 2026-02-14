import { UserStatus } from './UserStatus';
type __VLS_Props = {
    src?: string;
    alt?: string;
    name?: string;
    size?: "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl";
    status?: UserStatus | number;
    showStatus?: boolean;
    editable?: boolean;
    allowRemove?: boolean;
};
declare const _default: import('vue').DefineComponent<__VLS_Props, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {} & {
    "update:src": (value: string) => any;
    remove: () => any;
}, string, import('vue').PublicProps, Readonly<__VLS_Props> & Readonly<{
    "onUpdate:src"?: ((value: string) => any) | undefined;
    onRemove?: (() => any) | undefined;
}>, {
    size: "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl";
    showStatus: boolean;
    editable: boolean;
    allowRemove: boolean;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {
    fileInput: HTMLInputElement;
}, HTMLDivElement>;
export default _default;
