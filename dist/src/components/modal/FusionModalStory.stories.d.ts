import { Meta, StoryObj } from '@storybook/vue3';
import { default as FusionModal } from './FusionModal.vue';
declare const meta: Meta<typeof FusionModal>;
export default meta;
type Story = StoryObj<typeof FusionModal>;
/**
 *  Small Modal — Default Footer
 */
export declare const SmallModal: Story;
/**
 * Medium Modal — Form Example
 */
export declare const MediumFormModal: Story;
/**
 *  Large Modal — Custom Footer (e.g., Delete Confirmation)
 */
export declare const LargeModal: Story;
/**
 *  Modal Without Footer
 */
export declare const WithoutFooter: Story;
