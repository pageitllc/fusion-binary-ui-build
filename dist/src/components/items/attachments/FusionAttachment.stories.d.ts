import { default as FusionAttachment } from './FusionAttachment.vue';
import { Meta, StoryObj } from '@storybook/vue3';
declare const meta: Meta<typeof FusionAttachment>;
export default meta;
type Story = StoryObj<typeof FusionAttachment>;
/** Default Example - Image File */
export declare const ImageAttachment: Story;
/** Document File Example */
export declare const DocumentAttachment: Story;
/** Video File Example */
export declare const VideoAttachment: Story;
/** Clickable Interaction Example */
export declare const ClickableAttachment: Story;
/** Multiple Attachments Example */
export declare const AttachmentList: Story;
