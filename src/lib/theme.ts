import type { Theme } from "@/config/types";

const rgb = (hex: string) => {
    const h = hex.replace("#", "");
    const n = parseInt(h.length === 3 ? h.split("").map((c) => c + c).join("") : h, 16);
    return `${(n >> 16) & 255} ${(n >> 8) & 255} ${n & 255}`;
};

const map: Record<keyof Theme, string> = {
    bg: "--c-bg",
    surface: "--c-surface",
    ink: "--c-ink",
    muted: "--c-muted",
    accent: "--c-accent",
    line: "--c-line",
    deep: "--c-deep",
    onDeep: "--c-ondeep",
    deepMuted: "--c-deepmuted",
};

export const themeVars = (theme: Theme) =>
    Object.fromEntries(Object.entries(map).map(([k, v]) => [v, rgb(theme[k as keyof Theme])])) as Record<string, string>;

export const applyTheme = (theme: Theme) => {
    const root = document.documentElement;
    Object.entries(themeVars(theme)).forEach(([k, v]) => root.style.setProperty(k, v));
};
