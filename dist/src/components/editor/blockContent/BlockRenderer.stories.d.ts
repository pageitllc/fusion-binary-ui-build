import { Meta, StoryObj } from '@storybook/vue3';
import { default as BlockRenderer } from './BlockRenderer.vue';
export declare const widgetRegistry: {
    text: {
        render: ({ widget }: any) => import('vue').VNode<import('vue').RendererNode, import('vue').RendererElement, {
            [key: string]: any;
        }>;
    };
    image: {
        render: ({ widget }: any) => import('vue').VNode<import('vue').RendererNode, import('vue').RendererElement, {
            [key: string]: any;
        }>;
    };
    divider: {
        render: ({ widget }: any) => import('vue').VNode<import('vue').RendererNode, import('vue').RendererElement, {
            [key: string]: any;
        }>;
    };
    service: {
        render: ({ widget }: any) => import('vue').VNode<import('vue').RendererNode, import('vue').RendererElement, {
            [key: string]: any;
        }>;
    };
};
declare const meta: Meta<typeof BlockRenderer>;
export default meta;
type Story = StoryObj<typeof BlockRenderer>;
export declare const OneColumn: Story;
export declare const TwoColumns: Story;
export declare const FullWidth: Story;
