"use client";

import { useSite } from "@/lib/site-context";

/** Built-in VELORA mark: an arch framing a valley. Replace via `brand.logo` in your preset. */
export function LogoMark({ className = "h-8 w-7" }: { className?: string }) {
    return (
        <svg viewBox="0 0 36 40" className={className} aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 37V17a13 13 0 0 1 26 0v20" />
            <path d="M11.5 17.5 18 31l6.5-13.5" />
            <path d="M1.5 37h33" />
        </svg>
    );
}

export function Logo({ className = "" }: { className?: string }) {
    const { preset } = useSite();
    if (preset.brand.logo) {
        return <img src={preset.brand.logo} alt={preset.brand.name} className={`h-9 w-auto ${className}`} />;
    }
    return (
        <span className={`inline-flex items-center gap-3 ${className}`}>
            <LogoMark />
            <span className="font-serif text-[1.65rem] font-normal uppercase leading-none tracking-[0.18em]">{preset.brand.name}</span>
        </span>
    );
}
