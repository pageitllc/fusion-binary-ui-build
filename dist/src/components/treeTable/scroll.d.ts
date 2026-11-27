/**
 * Keeping the scroll position while the table redraws. Tabulator empties the table for a moment when it
 * swaps data or groups again; the page gets shorter and the browser jumps.
 */
export type SavedScroll = [Element, number, number][];
/** Everything that scrolls around the table (and the table's own holder), with where it is now. */
export declare function scrollPositions(host: HTMLElement | null, holderEl: HTMLElement | null): SavedScroll;
/**
 * Puts scroll positions back without animation. A container with `scroll-behavior: smooth` (FusionTab's
 * body, for one) would otherwise animate up from 0, and a change saved mid-animation would keep 0.
 */
export declare function restoreScroll(saved: SavedScroll): void;
