import { Meta, StoryObj } from '@storybook/vue3';
import { default as FuCommentItem } from './FuCommentItem.vue';
declare const meta: Meta<typeof FuCommentItem>;
export default meta;
type Story = StoryObj<typeof FuCommentItem>;
export declare const Note: Story;
export declare const Comment: Story;
export declare const Edited: Story;
