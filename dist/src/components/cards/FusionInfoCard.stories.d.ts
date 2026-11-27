import { Meta, StoryObj } from '@storybook/vue3';
import { default as FusionInfoCard } from './FusionInfoCard.vue';
declare const meta: Meta<typeof FusionInfoCard>;
export default meta;
type Story = StoryObj<typeof FusionInfoCard>;
/**
 * Default — colored initial square, title, and description.
 */
export declare const Default: Story;
/**
 * With an image instead of an initial square.
 */
export declare const WithImage: Story;
/**
 * Static, non-interactive row — no hover/focus affordance, no click emitted.
 */
export declare const NotClickable: Story;
/**
 * A list of cards, as used in a workspace picker.
 */
export declare const List: Story;
