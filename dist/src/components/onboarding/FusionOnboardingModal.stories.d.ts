import { Meta, StoryObj } from '@storybook/vue3';
import { default as FusionOnboardingModal } from './FusionOnboardingModal.vue';
declare const meta: Meta<typeof FusionOnboardingModal>;
export default meta;
type Story = StoryObj<typeof FusionOnboardingModal>;
/** Picture below the words, panel on the right: the layout from the design. */
export declare const Default: Story;
/** Picture first, then the words. */
export declare const ImageOnTop: Story;
/** A dark panel on the left. */
export declare const DarkPanelOnLeft: Story;
/** No panel: a plain single-column modal. */
export declare const WithoutPanel: Story;
