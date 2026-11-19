export interface ClientSignalBadge {
    /** e.g. "No reply · 14 days" */
    text: string;
    /** FusionBadge themeClass, e.g. "fu-badge--danger-subtle" | "fu-badge--warning-subtle". Defaults to danger-subtle. */
    theme?: string;
}
export interface ClientStatusBadge {
    /** e.g. "At risk", "Needs attention", "Active" */
    text: string;
    /** FusionBadge themeClass. Defaults to danger-subtle. */
    theme?: string;
}
export interface FusionClientStateCardProps {
    /** Client/company name — also the source for the auto-derived initials when no `initial` is given */
    name: string;
    /** Overrides the auto-derived (first letter of each word) initials shown in the avatar */
    initial?: string;
    /** Avatar circle background color */
    avatarBg?: string;
    /** Avatar initials text color */
    avatarColor?: string;
    /** Connected signal sources this client is read from, e.g. ["CRM", "Stripe", "Gmail"] */
    sources?: string[];
    /** Specific attention signals read from those sources, e.g. "Invoice overdue · 7 days" */
    signals?: ClientSignalBadge[];
    /** Overall attention state shown on the right, e.g. "At risk" */
    status?: ClientStatusBadge;
    /** Renders as a `<button>` with hover/focus affordance and emits `click` */
    clickable?: boolean;
}
declare const _default: import('vue').DefineComponent<FusionClientStateCardProps, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {} & {
    click: () => any;
}, string, import('vue').PublicProps, Readonly<FusionClientStateCardProps> & Readonly<{
    onClick?: (() => any) | undefined;
}>, {
    clickable: boolean;
    avatarBg: string;
    avatarColor: string;
    sources: string[];
    signals: ClientSignalBadge[];
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, any>;
export default _default;
