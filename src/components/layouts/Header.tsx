"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useSite } from "@/lib/site-context";
import { EASE } from "@/lib/motion";
import { Logo } from "@/components/ui/Logo";
import { LanguageSwitcher } from "@/components/ui/LanguageSwitcher";
import { ButtonLink } from "@/components/ui/ButtonLink";

export function useNavLinks() {
    const { ui } = useSite();
    return [
        { href: "/accommodations", label: ui.nav.accommodations, id: "accommodations" },
        { href: "/experiences", label: ui.nav.experiences, id: "experiences" },
        { href: "/offers", label: ui.nav.offers, id: "offers" },
        { href: "/journal", label: ui.nav.journal, id: "journal" },
        { href: "/about", label: ui.nav.about, id: "about" },
        { href: "/contact", label: ui.nav.contact, id: "contact" },
    ];
}

export function useSecondaryLinks() {
    const { ui } = useSite();
    return [
        { href: "/gallery", label: ui.nav.gallery, id: "gallery" },
        { href: "/faq", label: ui.nav.faq, id: "faq" },
    ];
}

export function Header() {
    const { ui, preset } = useSite();
    const pathname = usePathname();
    const links = useNavLinks();
    const [open, setOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 40);
        onScroll();
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    useEffect(() => {
        setOpen(false);
    }, [pathname]);

    useEffect(() => {
        document.body.style.overflow = open ? "hidden" : "";
        return () => {
            document.body.style.overflow = "";
        };
    }, [open]);

    return (
        <>
            <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[80] focus:bg-ink focus:px-4 focus:py-2 focus:text-bg">
                {ui.nav.skip}
            </a>
            <header
                className={`fixed inset-x-0 top-0 z-50 border-b border-line/60 bg-bg/85 backdrop-blur-xl transition-[padding] duration-500 ${scrolled ? "py-3" : "py-5"}`}
                data-testid="site-header"
            >
                <div className="container flex items-center justify-between gap-6">
                    <Link href="/" aria-label={`${preset.brand.name} — ${ui.nav.home}`} data-testid="header-logo-link" className="text-ink">
                        <Logo />
                    </Link>
                    <nav aria-label="Main" className="hidden items-center gap-8 xl:flex">
                        {links.map((l) => {
                            const active = pathname.startsWith(l.href);
                            return (
                                <Link
                                    key={l.href}
                                    href={l.href}
                                    data-testid={`nav-link-${l.id}`}
                                    aria-current={active ? "page" : undefined}
                                    className={`link-line ${active ? "text-accent after:!scale-x-100" : "text-ink"}`}
                                >
                                    {l.label}
                                </Link>
                            );
                        })}
                    </nav>
                    <div className="flex items-center gap-5">
                        <LanguageSwitcher className="hidden text-ink sm:flex" />
                        <ButtonLink href="/booking" external testId="header-reserve-button" className="hidden !px-5 !py-3 md:inline-flex">
                            {ui.nav.reserve}
                        </ButtonLink>
                        <button
                            type="button"
                            onClick={() => setOpen(true)}
                            className="flex items-center gap-2 text-xs font-medium uppercase tracking-caps xl:hidden"
                            aria-expanded={open}
                            aria-controls="mobile-menu"
                            data-testid="mobile-menu-open"
                        >
                            <Menu className="h-5 w-5" strokeWidth={1.4} aria-hidden />
                            <span>{ui.nav.menu}</span>
                        </button>
                    </div>
                </div>
            </header>
            <AnimatePresence>
                {open && <MobileMenu onClose={() => setOpen(false)} links={links} />}
            </AnimatePresence>
        </>
    );
}

function MobileMenu({ onClose, links }: { onClose: () => void; links: ReturnType<typeof useNavLinks> }) {
    const { ui, preset, t } = useSite();
    const secondary = useSecondaryLinks();
    useEffect(() => {
        const onKey = (e: KeyboardEvent) => {
            if (e.key === "Escape") onClose();
        };
        window.addEventListener("keydown", onKey);
        return () => window.removeEventListener("keydown", onKey);
    }, [onClose]);

    return (
        <motion.div
            id="mobile-menu"
            role="dialog"
            aria-modal="true"
            aria-label={ui.nav.menu}
            className="fixed inset-0 z-[70] flex flex-col bg-deep text-ondeep"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: EASE }}
            data-testid="mobile-menu"
        >
            <div className="container flex items-center justify-between py-5">
                <Logo />
                <button type="button" onClick={onClose} className="flex items-center gap-2 text-xs font-medium uppercase tracking-caps" data-testid="mobile-menu-close">
                    <X className="h-5 w-5" strokeWidth={1.4} aria-hidden />
                    {ui.nav.close}
                </button>
            </div>
            <nav aria-label="Mobile" className="container mt-8 flex flex-col gap-2">
                {[{ href: "/", label: ui.nav.home, id: "home" }, ...links].map((l, i) => (
                    <motion.div key={l.href} initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.08 * i, ease: EASE }}>
                        <Link href={l.href} onClick={onClose} className="font-serif text-[2.6rem] font-light leading-tight" data-testid={`mobile-nav-link-${l.id}`}>
                            {l.label}
                        </Link>
                    </motion.div>
                ))}
            </nav>
            <motion.div
                className="container mt-6 flex gap-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.6, ease: EASE }}
            >
                {secondary.map((l) => (
                    <Link key={l.href} href={l.href} onClick={onClose} className="link-line text-ondeep" data-testid={`mobile-nav-link-${l.id}`}>
                        {l.label}
                    </Link>
                ))}
            </motion.div>
            <div className="container mt-auto flex flex-col gap-8 pb-10">
                <p className="text-sm text-deepmuted">{t(preset.brand.descriptor)}</p>
                <div className="flex flex-wrap items-center justify-between gap-6">
                    <LanguageSwitcher idPrefix="mobile-lang-switch" />
                    <ButtonLink href="/booking" external tone="light" testId="mobile-reserve-button">
                        {ui.nav.reserve}
                    </ButtonLink>
                </div>
            </div>
        </motion.div>
    );
}
