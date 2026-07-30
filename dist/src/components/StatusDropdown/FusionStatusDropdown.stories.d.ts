import { Meta, StoryObj } from '@storybook/vue3';
import { default as FusionStatusDropdown } from './FusionStatusDropdown.vue';
declare const meta: Meta<typeof FusionStatusDropdown>;
export default meta;
type Story = StoryObj<typeof FusionStatusDropdown>;
/**
 * Default color-dot dropdown — interactive, left-aligned.
 */
export declare const ColorBased: Story;
/**
 * Disabled state — visually dimmed, fully non-interactive.
 * Use when the field is unavailable (e.g. insufficient permissions).
 */
export declare const ColorBasedDisabled: Story;
/**
 * Disabled with no selection — shows placeholder rendering in a disabled state.
 */
export declare const ColorBasedDisabledEmpty: Story;
/**
 * Readonly state — value is visible and normal-looking, but the menu cannot be opened.
 * The chevron is hidden to signal non-interactivity without the dimmed appearance.
 */
export declare const ColorBasedReadonly: Story;
/**
 * Readonly with no selection — shows placeholder rendering in a readonly state.
 */
export declare const ColorBasedReadonlyEmpty: Story;
/**
 * Icon-based dropdown — interactive, center-aligned.
 */
export declare const IconBased: Story;
/**
 * Icon-based, disabled.
 */
export declare const IconBasedDisabled: Story;
/**
 * Icon-based, readonly.
 */
export declare const IconBasedReadonly: Story;
/**
 * Mixed color + icon options, right-aligned.
 */
export declare const Mixed: Story;
/**
 * Mixed, disabled.
 */
export declare const MixedDisabled: Story;
/**
 * Mixed, readonly.
 */
export declare const MixedReadonly: Story;
