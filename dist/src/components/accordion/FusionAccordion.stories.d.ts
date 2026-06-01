import { Meta, StoryObj } from '@storybook/vue3';
import { default as Accordion } from './FusionAccordion.vue';
declare const meta: Meta<typeof Accordion>;
export default meta;
type Story = StoryObj<typeof Accordion>;
export declare const Default: Story;
export declare const SingleOpen: Story;
export declare const TextOnly: Story;
export declare const WithDisabled: Story;
