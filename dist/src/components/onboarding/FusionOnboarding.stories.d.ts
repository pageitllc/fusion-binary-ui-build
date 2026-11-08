import { Meta, StoryObj } from '@storybook/vue3';
import { default as FusionOnboarding } from './FusionOnboarding.vue';
/**
 * Storybook metadata
 */
declare const meta: Meta<typeof FusionOnboarding>;
export default meta;
type Story = StoryObj<typeof meta>;
export declare const FullFlow: Story;
export declare const FullFlowWithServerValidation: Story;
export declare const WithBackdropImage: Story;
export declare const Minimal: Story;
export declare const ReorderedSteps: Story;
export declare const SkippableStep: Story;
export declare const PillIconsAsImages: Story;
export declare const PillSelectStandalone: Story;
export declare const TagInputStandalone: Story;
export declare const CountrySelectStep: Story;
