import { Meta, StoryObj } from '@storybook/vue3';
import { default as FuQuestionRenderer } from './FuQuestionRenderer.vue';
declare const meta: Meta<typeof FuQuestionRenderer>;
export default meta;
type Story = StoryObj<typeof FuQuestionRenderer>;
export declare const ShortText: Story;
export declare const MultipleChoice: Story;
export declare const LiveLogicScenario: Story;
