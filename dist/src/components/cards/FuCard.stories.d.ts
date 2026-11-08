import { Meta, StoryObj } from '@storybook/vue3';
import { default as FuCard } from './FuCard.vue';
declare const meta: Meta<typeof FuCard>;
export default meta;
type Story = StoryObj<typeof FuCard>;
/**
 * Default card with a title and body content.
 */
export declare const Default: Story;
/**
 * No title, body content only.
 */
export declare const WithoutTitle: Story;
/**
 * Actions slot places controls on the right of the header.
 */
export declare const WithActions: Story;
/**
 * Without a border, for use inside another bordered surface.
 */
export declare const NoBorder: Story;
/**
 * Whole card is a link with a hover state.
 */
export declare const AsLink: Story;
