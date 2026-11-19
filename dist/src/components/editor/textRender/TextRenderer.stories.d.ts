import { Meta, StoryObj } from '@storybook/vue3';
import { default as TextRenderer } from './TextRenderer.vue';
declare const meta: Meta<typeof TextRenderer>;
export default meta;
type Story = StoryObj<typeof TextRenderer>;
export declare const HeroText: Story;
export declare const Paragraph: Story;
export declare const MixedContent: Story;
export declare const OnDarkBackground: Story;
