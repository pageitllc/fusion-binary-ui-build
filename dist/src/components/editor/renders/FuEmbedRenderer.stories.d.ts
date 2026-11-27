import { Meta, StoryObj } from '@storybook/vue3';
import { default as FuEmbedRenderer } from './FuEmbedRenderer.vue';
declare const meta: Meta<typeof FuEmbedRenderer>;
export default meta;
type Story = StoryObj<typeof FuEmbedRenderer>;
/**
 * Scheduler only — no question widgets anywhere in the document.
 * Submit button appears immediately after slot confirm.
 */
export declare const SchedulerOnly: Story;
/**
 * Standard case — name + email required, one optional single choice.
 */
export declare const WithBasicQuestions: Story;
/**
 * Conditional logic — date picker only appears when "Yes" is selected.
 * Uses the exact same condition schema as the full document renderer.
 */
export declare const WithConditionalQuestion: Story;
/**
 * Questions scattered across pages — one in the hero, one in an about section,
 * two after the scheduler. Proves the embed renderer flattens everything
 * regardless of where the editor user placed the widgets.
 */
export declare const QuestionsScatteredAcrossPages: Story;
/**
 * Indigo brand — verifies brandColor flows to submit button + success state.
 */
export declare const IndigoBrand: Story;
/**
 * Live payload inspector — pick a slot, fill the form, confirm,
 * and watch the @submit payload build in the panel on the right.
 */
export declare const LivePayloadInspector: Story;
