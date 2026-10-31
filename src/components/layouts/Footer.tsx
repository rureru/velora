"use client";

import Link from "next/link";
import { useSite } from "@/lib/site-context";
import { siteConfig } from "@/config/site";
import { presets } from "@/config/presets";
import type { PresetId } from "@/config/types";
import { LogoMark } from "@/components/ui/Logo";
import { useNavLinks, useSecondaryLinks } from "./Header";

export function Footer() {
    const { preset, ui, t } = useSite();
    const links = [...useNavLinks(), ...useSecondaryLinks()];
    const { contact } = preset;
    const year = new Date().getFullYear();

    return (
        <footer className="bg-deep text-ondeep" data-testid="site-footer">
            <div className="container pb-10 pt-24 md:pt-32">
                <div className="grid gap-16 md:grid-cols-12">
                    <div className="md:col-span-4">
                        <LogoMark className="h-14 w-12 text-ondeep/80" />
                        <p className="mt-8 font-serif text-4xl font-light leading-tight md:text-5xl">{ui.footer.tagline}</p>
                        <p className="mt-4 text-sm text-deepmuted">
                            {preset.brand.name} — {t(preset.brand.descriptor)}
                        </p>
                    </div>
                    <FooterCol title={ui.footer.explore} className="md:col-span-2 md:col-start-6">
                        {links.map((l) => (
                            <li key={l.href}>
                                <Link href={l.href} className="link-line normal-case tracking-normal text-sm" data-testid={`footer-link-${l.id}`}>
                                    {l.label}
                                </Link>
                            </li>
                        ))}
                    </FooterCol>
                    <FooterCol title={ui.footer.visit} className="md:col-span-3">
                        <li className="text-sm leading-relaxed text-ondeep/90">
                            {contact.address.map((line) => (
                                <span key={line} className="block">
                                    {line}
                                </span>
                            ))}
                        </li>
                        <li>
                            <a href={`tel:${contact.phone.replace(/\s/g, "")}`} className="text-sm hover:text-white" data-testid="footer-phone">
                                {contact.phone}
                            </a>
                        </li>
                        <li>
                            <a href={`mailto:${contact.email}`} className="text-sm hover:text-white" data-testid="footer-email">
                                {contact.email}
                            </a>
                        </li>
                    </FooterCol>
                    <FooterCol title={ui.contact.follow} className="md:col-span-2">
                        {preset.social.map((s) => (
                            <li key={s.label}>
                                <a href={s.url} target="_blank" rel="noopener noreferrer" className="link-line normal-case tracking-normal text-sm" data-testid={`footer-social-${s.label.toLowerCase()}`}>
                                    {s.label}
                                </a>
                            </li>
                        ))}
                    </FooterCol>
                </div>
                <div className="mt-24 select-none overflow-hidden" aria-hidden>
                    <p className="font-serif text-[22vw] font-light uppercase leading-[0.8] tracking-[0.04em] text-ondeep/[0.07]">{preset.brand.name}</p>
                </div>
                <div className="mt-6 flex flex-col gap-6 border-t border-ondeep/15 pt-8 text-xs text-deepmuted md:flex-row md:items-center md:justify-between">
                    <p>
                        © {year} {preset.brand.name}. {ui.footer.rights}
                    </p>
                    {siteConfig.showPresetSwitcher && <PresetSwitcher />}
                    <p>{ui.footer.madeWith}</p>
                </div>
            </div>
        </footer>
    );
}

function FooterCol({ title, className, children }: { title: string; className?: string; children: React.ReactNode }) {
    return (
        <div className={className}>
            <p className="text-xs font-medium uppercase tracking-caps text-deepmuted">{title}</p>
            <ul className="mt-6 space-y-3">{children}</ul>
        </div>
    );
}

function PresetSwitcher() {
    const { preset, setPresetId, ui } = useSite();
    return (
        <div className="flex flex-wrap items-center gap-3" role="group" aria-label={ui.footer.demoPreset} data-testid="preset-switcher">
            <span className="uppercase tracking-caps">{ui.footer.demoPreset}</span>
            {(Object.keys(presets) as PresetId[]).map((id) => (
                <button
                    key={id}
                    type="button"
                    onClick={() => setPresetId(id)}
                    aria-pressed={preset.id === id}
                    data-testid={`preset-switch-${id}`}
                    className={`border px-3 py-1.5 transition-colors duration-300 ${preset.id === id ? "border-ondeep bg-ondeep text-deep" : "border-ondeep/30 text-ondeep hover:border-ondeep"
                        }`}
                >
                    {presets[id].label}
                </button>
            ))}
        </div>
    );
}
