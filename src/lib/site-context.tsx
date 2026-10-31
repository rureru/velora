"use client";

import { createContext, useCallback, useContext, useEffect, useMemo, useState, type ReactNode } from "react";
import { MotionConfig } from "framer-motion";
import { siteConfig } from "@/config/site";
import { presets } from "@/config/presets";
import type { L, Locale, Preset, PresetId } from "@/config/types";
import { dictionaries, type UIStrings } from "@/locales";
import { applyTheme } from "./theme";

type SiteContextValue = {
    locale: Locale;
    setLocale: (l: Locale) => void;
    preset: Preset;
    setPresetId: (id: PresetId) => void;
    ui: UIStrings;
    t: (text: L) => string;
    price: (amount: number) => string;
    date: (iso: string) => string;
};

const SiteContext = createContext<SiteContextValue | null>(null);

export function SiteProvider({ children }: { children: ReactNode }) {
    const [locale, setLocaleState] = useState<Locale>(siteConfig.defaultLocale);
    const [presetId, setPresetIdState] = useState<PresetId>(siteConfig.activePreset);

    useEffect(() => {
        const savedLocale = localStorage.getItem("velora-locale") as Locale | null;
        if (savedLocale && siteConfig.locales.includes(savedLocale)) setLocaleState(savedLocale);
        const savedPreset = localStorage.getItem("velora-preset") as PresetId | null;
        if (siteConfig.showPresetSwitcher && savedPreset && savedPreset in presets) setPresetIdState(savedPreset);
    }, []);

    const preset = presets[presetId];

    useEffect(() => {
        applyTheme(preset.theme);
    }, [preset]);

    useEffect(() => {
        document.documentElement.lang = locale;
    }, [locale]);

    const setLocale = useCallback((l: Locale) => {
        setLocaleState(l);
        localStorage.setItem("velora-locale", l);
    }, []);

    const setPresetId = useCallback((id: PresetId) => {
        setPresetIdState(id);
        localStorage.setItem("velora-preset", id);
    }, []);

    const value = useMemo<SiteContextValue>(() => {
        const fmt = new Intl.NumberFormat(locale, { style: "currency", currency: preset.booking.currency, maximumFractionDigits: 0 });
        const dateFmt = new Intl.DateTimeFormat(locale, { day: "numeric", month: "long", year: "numeric", timeZone: "UTC" });
        return {
            locale,
            setLocale,
            preset,
            setPresetId,
            ui: dictionaries[locale],
            t: (text) => text?.[locale] ?? text?.[siteConfig.defaultLocale] ?? "",
            price: (amount) => fmt.format(amount),
            date: (iso) => dateFmt.format(new Date(`${iso}T12:00:00Z`)),
        };
    }, [locale, preset, setLocale, setPresetId]);

    return (
        <SiteContext.Provider value={value}>
            <MotionConfig reducedMotion="user">{children}</MotionConfig>
        </SiteContext.Provider>
    );
}

export function useSite() {
    const ctx = useContext(SiteContext);
    if (!ctx) throw new Error("useSite must be used inside <SiteProvider>");
    return ctx;
}
