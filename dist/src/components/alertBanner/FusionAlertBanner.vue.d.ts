export interface AlertItem {
    /** Unique id — also used as the localStorage key when `storageKey` is absent */
    id: string;
    /** Visual type driving colour */
    type: "info" | "warning" | "outage" | "trial";
    /** Main message line */
    message: string;
    /** Optional secondary line */
    sub?: string;
    /**
     * Whether the user can dismiss this alert.
     * Defaults to true. Set to false for critical outages that must stay
     * until the source (CMS / store) removes the alert from the list.
     */
    dismissible?: boolean;
    /**
     * Optional call-to-action button.
     * Provide `href` for a link or `action` for a callback (or both).
     */
    cta?: {
        label: string;
        href?: string;
        action?: () => void;
    };
    /**
     * Whether the dismissal persists across page loads.
     *
     * - `true` (default for CMS alerts) → saved in `localStorage`.
     *   The alert stays hidden until you change its `id` or the user clears storage.
     * - `false` (recommended for trial alerts) → saved in `sessionStorage`.
     *   The alert reappears every new browser session, reminding the user each time
     *   they open the app — without being permanently ignorable.
     */
    persistent?: boolean;
    /**
     * Override the storage key. Defaults to `fu-alert-dismissed-${id}`.
     */
    storageKey?: string;
}
type __VLS_Props = {
    alerts: AlertItem[];
};
declare const _default: import('vue').DefineComponent<__VLS_Props, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<__VLS_Props> & Readonly<{}>, {}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, any>;
export default _default;
