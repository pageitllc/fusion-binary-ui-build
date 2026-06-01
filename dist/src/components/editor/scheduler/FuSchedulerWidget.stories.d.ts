import { Meta, StoryObj } from '@storybook/vue3';
import { default as FuSchedulerWidget } from './FuSchedulerWidget.vue';
declare const meta: Meta<typeof FuSchedulerWidget>;
export default meta;
type Story = StoryObj<typeof FuSchedulerWidget>;
export declare const BlockIntegratedScheduler: Story;
export declare const BackendControlled: Story;
export declare const RuleBasedGeneration: Story;
