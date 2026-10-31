import { Meta, StoryObj } from '@storybook/vue3';
import { default as PlainDatePicker } from './FusionPlainDatePicker.vue';
declare const meta: Meta<typeof PlainDatePicker>;
export default meta;
type Story = StoryObj<typeof PlainDatePicker>;
export declare const Default: Story;
export declare const MultiSelect: Story;
export declare const MultiSelectWithDisabled: Story;
export declare const WithTimePicker: Story;
