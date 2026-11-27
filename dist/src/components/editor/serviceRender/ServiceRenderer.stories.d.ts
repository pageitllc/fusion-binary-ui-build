import { Meta, StoryObj } from '@storybook/vue3';
import { default as ServiceRenderer } from './ServiceRenderer.vue';
declare const meta: Meta<typeof ServiceRenderer>;
export default meta;
type Story = StoryObj<typeof ServiceRenderer>;
export declare const ViewOnly: Story;
export declare const SingleSelect: Story;
export declare const RowLayout: Story;
export declare const MultiSelectLive: Story;
