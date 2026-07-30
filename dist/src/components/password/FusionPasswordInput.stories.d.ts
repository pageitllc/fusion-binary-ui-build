import { Meta, StoryObj } from '@storybook/vue3';
import { default as FusionPasswordInput } from './FusionPasswordInput.vue';
declare const meta: Meta<typeof FusionPasswordInput>;
export default meta;
type Story = StoryObj<typeof FusionPasswordInput>;
export declare const Default: Story;
export declare const WithError: Story;
export declare const SmallPasswordField: Story;
