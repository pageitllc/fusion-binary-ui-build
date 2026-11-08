export type ThemeMode = "light" | "dark" | "auto";
export declare function useTheme(): {
    theme: import('vue').Ref<ThemeMode, ThemeMode>;
    setTheme: (mode: ThemeMode) => void;
    toggleTheme: () => void;
};
