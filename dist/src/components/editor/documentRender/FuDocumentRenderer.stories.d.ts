import { Meta, StoryObj } from '@storybook/vue3';
import { default as DocumentRenderer } from './FuDocumentRenderer.vue';
declare const meta: Meta<typeof DocumentRenderer>;
export default meta;
type Story = StoryObj<typeof DocumentRenderer>;
export declare const Default: Story;
export declare const Empty: Story;
export declare const LiveWithEventLog: Story;
