import { Meta, StoryObj } from '@storybook/vue3';
import { default as FusionIntegrationRow } from './FusionIntegrationRow.vue';
declare const meta: Meta<typeof FusionIntegrationRow>;
export default meta;
type Story = StoryObj<typeof FusionIntegrationRow>;
/** The three states in a list, as in the design. */
export declare const List: Story;
/** With a Lucide icon instead of a logo. */
export declare const WithIcons: Story;
/** A connected row with its own Disconnect button. */
export declare const CustomAction: Story;
/** Play with the props. */
export declare const Playground: Story;
