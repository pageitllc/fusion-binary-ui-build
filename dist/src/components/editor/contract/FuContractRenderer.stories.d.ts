import { Meta, StoryObj } from '@storybook/vue3';
import { default as FuContractViewer } from './FuContractRenderer.vue';
declare const meta: Meta<typeof FuContractViewer>;
export default meta;
type Story = StoryObj<typeof FuContractViewer>;
export declare const UnsignedDraft: Story;
export declare const FullyExecuted: Story;
export declare const InvalidatedByEdit: Story;
export declare const InteractiveSigning: Story;
