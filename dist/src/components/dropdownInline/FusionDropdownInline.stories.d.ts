import { Meta, StoryObj } from '@storybook/vue3';
import { default as FusionDropdownInline } from './FusionDropdownInline.vue';
declare const meta: Meta<typeof FusionDropdownInline>;
export default meta;
type Story = StoryObj<typeof FusionDropdownInline>;
/**
 * Default example showing inline dropdown behavior
 */
export declare const Default: Story;
/**
 * Disabled state — the dropdown is fully non-interactive and visually dimmed.
 * Use when the field should be read-only in context (e.g. insufficient permissions).
 */
export declare const Disabled: Story;
/**
 * Disabled with no selection — shows how the placeholder renders in a disabled state.
 */
export declare const DisabledEmpty: Story;
/**
 * Readonly state — the current value is displayed normally but the dropdown cannot be opened.
 * Use when the field is intentionally non-editable but should still look active
 * (e.g. view-only mode, locked rows, or insufficient permissions without visual penalty).
 */
export declare const Readonly: Story;
/**
 * Readonly with no selection — shows how the placeholder renders in a readonly state.
 */
export declare const ReadonlyEmpty: Story;
