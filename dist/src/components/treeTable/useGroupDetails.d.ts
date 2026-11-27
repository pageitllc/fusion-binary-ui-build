import { TreeTableContext } from './context';
export declare function useGroupDetails(ctx: TreeTableContext): {
    detailsRef: import('vue').Ref<HTMLElement | null, HTMLElement | null>;
    detailsStyle: import('vue').Ref<Record<string, string>, Record<string, string>>;
    detailsGroup: import('vue').ComputedRef<import('./types').TreeTableGroup | null>;
    closeDetails: (refocus?: boolean) => void;
    repositionAfterRender: () => void;
    GroupDetailsTrigger: import('vue').DefineComponent<import('vue').ExtractPropTypes<{
        groupKey: {
            type: (NumberConstructor | StringConstructor)[];
            required: true;
        };
        label: {
            type: StringConstructor;
            default: string;
        };
    }>, () => import('vue').VNode<import('vue').RendererNode, import('vue').RendererElement, {
        [key: string]: any;
    }>, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<{
        groupKey: {
            type: (NumberConstructor | StringConstructor)[];
            required: true;
        };
        label: {
            type: StringConstructor;
            default: string;
        };
    }>> & Readonly<{}>, {
        label: string;
    }, {}, {}, {}, string, import('vue').ComponentProvideOptions, true, {}, any>;
};
