import { Component } from 'vue';
interface Registry {
    components: Record<string, Component>;
    resolve: (type: string) => Component | null;
}
export declare const widgetRegistry: Registry;
export {};
