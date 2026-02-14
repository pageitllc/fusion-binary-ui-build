import { Meta, StoryObj } from '@storybook/vue3';
import { default as EditableFieldWrapper } from './EditableFieldWrapper.vue';
declare const meta: Meta<typeof EditableFieldWrapper>;
export default meta;
type Story = StoryObj<typeof EditableFieldWrapper>;
export declare const Inline_TextInput: Story;
export declare const Inline_Autocomplete: Story;
export declare const Teleport_TextInput_Table: Story;
export declare const Teleport_Autocomplete_Table: Story;
