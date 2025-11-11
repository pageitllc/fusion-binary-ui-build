import { Meta, StoryObj } from '@storybook/vue3';
import { default as FusionButton } from './FusionButton.vue';
declare const meta: Meta<typeof FusionButton>;
export default meta;
type Story = StoryObj<typeof FusionButton>;
/**
 * Default solid button
 */
export declare const Solid: Story;
/**
 * Outline button with icon
 */
export declare const OutlineWithIcon: Story;
/**
 * Subtle variant with tooltip
 */
export declare const SubtleWithTooltip: Story;
/**
 * Ghost button
 */
export declare const Ghost: Story;
/**
 * Danger button
 */
export declare const Danger: Story;
/**
 * Loading state
 */
export declare const Loading: Story;
/**
 * Disabled state
 */
export declare const Disabled: Story;
/**
 * Link button
 */
export declare const AsLink: Story;
