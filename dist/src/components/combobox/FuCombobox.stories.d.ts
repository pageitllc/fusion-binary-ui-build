import { Meta, StoryObj } from '@storybook/vue3';
import { default as FuCombobox } from './FuCombobox.vue';
declare const meta: Meta<typeof FuCombobox>;
export default meta;
type Story = StoryObj<typeof FuCombobox>;
/**
 * Basic Combobox with placeholder and simple options
 */
export declare const Basic: Story;
/**
 * Combobox with icons for options
 */
export declare const WithIcons: Story;
/**
 * Custom Slot for rendering options (e.g. icons + styled labels)
 */
export declare const CustomSlot: Story;
/**
 * Grouped options
 */
export declare const Grouped: Story;
/**
 * Disabled Combobox
 */
export declare const Disabled: Story;
