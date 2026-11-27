import { CellComponent } from 'tabulator-tables';
import { TreeTableContext } from './context';
export declare const CHEVRON_SIZE = 20;
/** Draws the tree connector lines (vertical guides plus the curved elbow) for one row. */
export declare function drawGuides(ctx: TreeTableContext, cell: CellComponent): void;
/**
 * Draws the guide lines again on the rows that are on the page. Rows that aren't (scrolled away with a
 * fixed height, or in a closed group) are skipped: asking one for its cell makes Tabulator build the
 * whole row, cell slots included, and they get their lines when they're drawn anyway.
 */
export declare function refreshGuides(ctx: TreeTableContext): void;
