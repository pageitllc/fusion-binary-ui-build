import { Meta, StoryObj } from '@storybook/vue3';
import { default as FuThemeSelector } from './FuThemeSelector.vue';
declare const meta: Meta<typeof FuThemeSelector>;
export default meta;
type Story = StoryObj<typeof FuThemeSelector>;
export declare const Default: Story;
export declare const SelectedLight: Story;
export declare const SelectedDark: Story;
export declare const CustomThemes: Story;
