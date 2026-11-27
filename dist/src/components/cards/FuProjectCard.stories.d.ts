import { Meta, StoryObj } from '@storybook/vue3';
import { default as FuProjectCard } from './FuProjectCard.vue';
declare const meta: Meta<typeof FuProjectCard>;
export default meta;
type Story = StoryObj<typeof FuProjectCard>;
/**
 * Default card showing a project that needs the client.
 */
export declare const Default: Story;
/**
 * Nothing needed from the client.
 */
export declare const NothingNeeded: Story;
/**
 * Whole card is a link.
 */
export declare const AsLink: Story;
/**
 * Three cards in a row, as on the portal home page.
 */
export declare const Row: Story;
