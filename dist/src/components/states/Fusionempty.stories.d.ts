import { Meta, StoryObj } from '@storybook/vue3';
import { default as FusionEmpty } from './FusionEmpty.vue';
declare const meta: Meta<typeof FusionEmpty>;
export default meta;
type Story = StoryObj<typeof FusionEmpty>;
/**
 * Default empty state with an icon visual and both action types.
 */
export declare const WithIcon: Story;
/**
 * Icon empty state without a description.
 */
export declare const WithIconNoDescription: Story;
/**
 * No results found — typical search empty state.
 */
export declare const SearchEmpty: Story;
/**
 * Error-style empty state using the AlertCircle icon.
 */
export declare const ErrorState: Story;
/**
 * Empty state with an image illustration.
 */
export declare const WithImage: Story;
/**
 * No visual — text and actions only.
 */
export declare const NoVisual: Story;
export declare const SizeSmall: Story;
export declare const SizeMedium: Story;
export declare const SizeLarge: Story;
/**
 * Subtle — transparent background, slightly dimmed content.
 * Use inside cards or panels that already have a background.
 */
export declare const VariantSubtle: Story;
/**
 * Minimal — no visual, compact padding, heavily dimmed text.
 * Use for small containers like sidebars or table cells.
 */
export declare const VariantMinimal: Story;
/**
 * `cards` renders a list of `FusionInfoCard` rows below the actions —
 * a picker-style empty state, e.g. "you have no active workspace, pick one".
 */
export declare const WithCards: Story;
/**
 * The default slot accepts arbitrary custom content — here, a details
 * card and an info callout that don't fit the title/description shape.
 */
export declare const WithCustomContent: Story;
