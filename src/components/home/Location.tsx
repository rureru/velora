"use client";

import { useSite } from "@/lib/site-context";
import { Img } from "@/components/ui/Img";
import { Reveal } from "@/components/ui/Reveal";
import { ButtonLink } from "@/components/ui/ButtonLink";

export function Location() {
    const { preset, t, ui } = useSite();
    const { location } = preset.copy;

    return (
        <section className="section border-t border-line bg-surface" data-testid="location-section">
            <div className="container grid gap-16 md:grid-cols-12 md:gap-8">
                <Reveal className="md:col-span-5 md:col-start-1">
                    <p className="eyebrow text-accent">No. 05 — {ui.home.locationLabel}</p>
                    <h2 className="mt-8 text-4xl leading-[1.05] md:text-6xl">{t(location.title)}</h2>
                    <p className="mt-8 text-base leading-relaxed text-muted first-letter:float-left first-letter:mr-3 first-letter:font-serif first-letter:text-6xl first-letter:leading-[0.85] first-letter:text-ink md:text-lg">
                        {t(location.body)}
                    </p>
                    <dl className="mt-12 divide-y divide-line border-y border-line">
                        {location.facts.map((f) => (
                            <div key={t(f.label)} className="flex items-baseline justify-between gap-6 py-5">
                                <dt className="text-sm text-muted">{t(f.label)}</dt>
                                <dd className="font-serif text-2xl">{t(f.value)}</dd>
                            </div>
                        ))}
                    </dl>
                    <ButtonLink href="/contact" variant="line" className="mt-10" testId="location-contact-link">
                        {ui.home.howToFind}
                    </ButtonLink>
                </Reveal>
                <Reveal className="md:col-span-6 md:col-start-7" delay={0.15}>
                    <figure>
                        <div className="aspect-[4/5] overflow-hidden bg-bg md:aspect-[5/6]">
                            <Img src={preset.images.location} alt={t(location.title)} />
                        </div>
                        <figcaption className="mt-4 flex justify-between text-xs uppercase tracking-caps text-muted">
                            <span>Fig. 05</span>
                            <span>
                                {preset.contact.coordinates.lat.toFixed(2)}° N, {Math.abs(preset.contact.coordinates.lng).toFixed(2)}° {preset.contact.coordinates.lng >= 0 ? "E" : "W"}
                            </span>
                        </figcaption>
                    </figure>
                </Reveal>
            </div>
        </section>
    );
}
