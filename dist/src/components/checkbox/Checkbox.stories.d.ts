import { Meta, StoryObj } from '@storybook/vue3';
import { default as FuCheckbox } from './FusionCheckbox.vue';
declare const meta: Meta<typeof FuCheckbox>;
export default meta;
type Story = StoryObj<typeof FuCheckbox>;
/**
 * With label (default)
 */
export declare const WithLabel: Story;
/**
 * Without label
 */
export declare const WithoutLabel: Story;
/**
 * Small size
 */
export declare const Small: Story;
/**
 * Medium size (default)
 */
export declare const Medium: Story;
/**
 * Checked by default
 */
export declare const Checked: Story;
/**
 * Disabled
 */
export declare const Disabled: Story;
