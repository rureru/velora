import type { Config } from "tailwindcss";

const c = (v: string) => `rgb(var(${v}) / <alpha-value>)`;

const config: Config = {
    content: ["./src/**/*.{ts,tsx}"],
    theme: {
        container: { center: true, padding: { DEFAULT: "1.5rem", md: "3rem" }, screens: { "2xl": "1440px" } },
        extend: {
            colors: {
                bg: c("--c-bg"),
                surface: c("--c-surface"),
                ink: c("--c-ink"),
                muted: c("--c-muted"),
                accent: c("--c-accent"),
                line: c("--c-line"),
                deep: c("--c-deep"),
                ondeep: c("--c-ondeep"),
                deepmuted: c("--c-deepmuted"),
            },
            fontFamily: {
                serif: ["var(--font-serif)", "Georgia", "serif"],
                sans: ["var(--font-sans)", "system-ui", "sans-serif"],
            },
            letterSpacing: { caps: "0.22em" },
            transitionTimingFunction: { lux: "cubic-bezier(0.16, 1, 0.3, 1)" },
            borderRadius: { arch: "999px 999px 0 0" },
        },
    },
    plugins: [],
};

export default config;
