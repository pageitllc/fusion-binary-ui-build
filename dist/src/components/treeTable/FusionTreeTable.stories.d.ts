import { Meta, StoryObj } from '@storybook/vue3';
import { default as FusionTreeTable } from './FusionTreeTable.vue';
declare const meta: Meta<typeof FusionTreeTable>;
export default meta;
type Story = StoryObj<typeof FusionTreeTable>;
export declare const Default: Story;
export declare const TaskLists: Story;
export declare const GroupStyles: Story;
export declare const TaskListsFlat: Story;
export declare const StickyHeader: Story;
export declare const PlainText: Story;
export declare const Collapsed: Story;
export declare const NoSelection: Story;
export declare const FixedHeight: Story;
export declare const Empty: Story;
export declare const Loading: Story;
export declare const ColumnOrderStored: Story;
/**
 * Changes to `groups` (add, rename, recolour, move, remove) only redraw the group headers: every cell
 * keeps its slot content, every group keeps its title row, closed groups stay closed and the page
 * doesn't scroll. Built from the repro page in the bug report.
 */
export declare const GroupsChange: Story;
/**
 * Inside a FusionTab whose body scrolls (with smooth scrolling). Adding tasks from a list near the bottom
 * keeps the tab where it was, with the title row in view: scroll positions are put back without animation.
 */
export declare const InScrollingTab: Story;
/**
 * Groups load first, rows per group: headers show the real totals, an open group loads its first page,
 * "Show more" loads the next, and a closed group loads nothing until it's opened.
 */
export declare const LazyGroups: Story;
/** Remote sort: the table only shows the arrow and reports the click; the "server" returns the rows in order. */
export declare const RemoteSort: Story;
/** Group avatars: logos, initials, a broken image, every group style, circle and square. */
export declare const GroupAvatars: Story;
/** Group details: the title opens a card about the group; the chevron still opens and closes it. */
export declare const GroupDetails: Story;
/** Fixed height with 2,000 rows and cell slots: only the rows on screen are drawn. */
export declare const FixedHeightManyRows: Story;
