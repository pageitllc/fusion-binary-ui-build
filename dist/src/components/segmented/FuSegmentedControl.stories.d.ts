import { Meta, StoryObj } from '@storybook/vue3';
import { default as FuSegmentedControl } from './FuSegmentedControl.vue';
declare const meta: Meta<typeof FuSegmentedControl>;
export default meta;
type Story = StoryObj<typeof FuSegmentedControl>;
/**
 * Default control with three text options.
 */
export declare const Default: Story;
/**
 * Options with icons.
 */
export declare const WithIcons: Story;
/**
 * Three sizes.
 */
export declare const Sizes: Story;
/**
 * Full width with equal segments.
 */
export declare const Block: Story;
/**
 * One option disabled.
 */
export declare const DisabledOption: Story;
/**
 * The whole control disabled.
 */
export declare const Disabled: Story;
