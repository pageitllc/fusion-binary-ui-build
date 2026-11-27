import { Meta, StoryObj } from '@storybook/vue3';
import { default as FusionListView } from './FusionListView.vue';
declare const meta: Meta<typeof FusionListView>;
export default meta;
type Story = StoryObj<typeof FusionListView>;
export declare const WithAvatar: Story;
export declare const Loading: Story;
export declare const LoadingTransition: Story;
export declare const WithPagination: Story;
export declare const WithSorting: Story;
export declare const WithDisabledRows: Story;
export declare const WithHiddenColumns: Story;
export declare const DragToReorderColumns: Story;
/**
 * Rows move by a handle: put `data-row-drag-handle` on any element in a cell and set
 * `options.rowDraggable`. The whole row lifts and the row it will land above or below is marked.
 * The list only reports what was dropped where (row-drag-start, row-drop); the parent moves it,
 * so a row can also go from one list to another, like the two sections here.
 */
export declare const DragToReorderRows: Story;
export declare const RowStates: Story;
