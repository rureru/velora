"use client";

import { useSite } from "@/lib/site-context";
import { Img } from "@/components/ui/Img";
import { Reveal } from "@/components/ui/Reveal";
import { ButtonLink } from "@/components/ui/ButtonLink";
import type { Fact } from "@/config/types";

export function FactRow({ facts, className = "" }: { facts: Fact[]; className?: string }) {
    const { t } = useSite();
    return (
        <dl className={`grid grid-cols-3 divide-x divide-line border-y border-line ${className}`}>
            {facts.map((f) => (
                <div key={t(f.label)} className="flex flex-col px-3 py-6 first:pl-0 md:px-6">
                    <dt className="order-2 mt-2 text-xs uppercase tracking-caps text-muted">{t(f.label)}</dt>
                    <dd className="order-1 font-serif text-2xl md:text-4xl">{t(f.value)}</dd>
                </div>
            ))}
        </dl>
    );
}

export function Intro() {
    const { preset, t, ui } = useSite();
    const { intro } = preset.copy;
    return (
        <section className="section container" data-testid="intro-section">
            <div className="grid gap-16 md:grid-cols-12 md:gap-8">
                <Reveal className="relative md:col-span-5">
                    <div className="aspect-[3/4] overflow-hidden rounded-arch bg-surface">
                        <Img src={preset.images.intro} alt={t(preset.brand.descriptor)} />
                    </div>
                    <div className="absolute -bottom-10 -right-4 w-[44%] overflow-hidden border-[10px] border-bg bg-surface md:-right-16 md:w-1/2">
                        <div className="aspect-[4/5]">
                            <Img src={preset.images.introSecondary} alt="" />
                        </div>
                    </div>
                </Reveal>
                <div className="flex flex-col justify-center pt-8 md:col-span-6 md:col-start-7 md:pt-0">
                    <Reveal>
                        <p className="eyebrow text-accent">No. 01 — {ui.home.introLabel}</p>
                        <h2 className="mt-8 text-4xl leading-[1.05] md:text-6xl">{t(intro.title)}</h2>
                    </Reveal>
                    <Reveal delay={0.1}>
                        <p className="mt-8 max-w-xl text-base leading-relaxed text-muted md:text-lg">{t(intro.body)}</p>
                    </Reveal>
                    <Reveal delay={0.2}>
                        <FactRow facts={intro.facts} className="mt-12" />
                        <ButtonLink href="/about" variant="line" className="mt-10" testId="intro-about-link">
                            {ui.nav.about}
                        </ButtonLink>
                    </Reveal>
                </div>
            </div>
        </section>
    );
}
