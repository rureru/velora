"use client";

import { useSite } from "@/lib/site-context";
import { siteConfig } from "@/config/site";

export function LanguageSwitcher({ className = "", idPrefix = "lang-switch" }: { className?: string; idPrefix?: string }) {
    const { locale, setLocale, ui } = useSite();
    return (
        <div role="group" aria-label={ui.nav.language} className={`flex items-center gap-1 text-xs font-medium tracking-caps ${className}`}>
            {siteConfig.locales.map((l, i) => (
                <span key={l} className="flex items-center gap-1">
                    {i > 0 && <span aria-hidden className="opacity-40">/</span>}
                    <button
                        type="button"
                        onClick={() => setLocale(l)}
                        aria-pressed={locale === l}
                        data-testid={`${idPrefix}-${l}`}
                        className={`px-1 py-1 transition-opacity duration-300 ${locale === l ? "opacity-100" : "opacity-50 hover:opacity-100"}`}
                    >
                        {siteConfig.localeLabels[l]}
                    </button>
                </span>
            ))}
        </div>
    );
}
