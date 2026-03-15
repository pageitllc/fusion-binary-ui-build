import { Meta, StoryObj } from '@storybook/vue3';
import { default as FusionListView } from './FusionListView.vue';
declare const meta: Meta<typeof FusionListView>;
export default meta;
type Story = StoryObj<typeof FusionListView>;
export declare const WithAvatar: Story;
export declare const WithPagination: Story;
export declare const WithSorting: Story;
export declare const WithDisabledRows: Story;
