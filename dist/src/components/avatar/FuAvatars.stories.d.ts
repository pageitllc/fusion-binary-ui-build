import { Meta, StoryObj } from '@storybook/vue3';
import { default as FuAvatar } from './FuAvatar.vue';
import { default as FuAvatarGroup } from './FuAvatarGroup.vue';
declare const meta: Meta<typeof FuAvatar>;
export default meta;
type Story = StoryObj<typeof FuAvatar>;
/**
 * Single Avatar (with image + name)
 */
export declare const WithName: Story;
/**
 *  Single Avatar (image only)
 */
export declare const ImageOnly: Story;
/**
 * Single Avatar (with status indicator)
 */
export declare const WithStatus: Story;
/**
 * 👥 Avatar Group (with max = 3)
 */
export declare const Group: StoryObj<typeof FuAvatarGroup>;
