import { Meta, StoryObj } from '@storybook/vue3';
import { default as Kanban } from './Kanban.vue';
declare const meta: Meta<typeof Kanban>;
export default meta;
type Story = StoryObj<typeof Kanban>;
export declare const Default: Story;
export declare const EditMode: Story;
export declare const AddItemEvent: Story;
