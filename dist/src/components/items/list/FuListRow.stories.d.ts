import { Meta, StoryObj } from '@storybook/vue3';
import { default as FuListRow } from './FuListRow.vue';
declare const meta: Meta<typeof FuListRow>;
export default meta;
type Story = StoryObj<typeof FuListRow>;
/**
 * Default row with a title and subtitle.
 */
export declare const Default: Story;
/**
 * Row with a trailing action button.
 */
export declare const WithAction: Story;
/**
 * Avatar in the leading slot with rich text in the title.
 */
export declare const WithAvatar: Story;
/**
 * Several rows in a flush card. Dividers appear only between rows.
 */
export declare const InACard: Story;
/**
 * Dividers turned off.
 */
export declare const WithoutDividers: Story;
/**
 * Whole row as a link.
 */
export declare const AsLink: Story;
