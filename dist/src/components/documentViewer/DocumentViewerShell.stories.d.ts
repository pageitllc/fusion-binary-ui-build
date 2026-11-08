import { Meta, StoryObj } from '@storybook/vue3';
import { default as DocumentViewerShell } from './DocumentViewerShell.vue';
declare const meta: Meta<typeof DocumentViewerShell>;
export default meta;
type Story = StoryObj<typeof DocumentViewerShell>;
/** Active signing — required bar visible, Start auto-advances through fields,
 *  Finish disabled until all required fields are filled. */
export declare const SigningActive: Story;
/** Read-only reviewer view — no Finish bar, fields non-interactive. */
export declare const ReadOnly: Story;
/** Accepted — green lifecycle notice replaces the required-fields bar. */
export declare const Accepted: Story;
/** Declined — red lifecycle notice. */
export declare const Declined: Story;
/** No fields — plain content viewer, Finish immediately enabled. */
export declare const NoFields: Story;
