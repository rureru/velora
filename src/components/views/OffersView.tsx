"use client";

import { CalendarDays, Check, Moon } from "lucide-react";
import { useCurrentOffers } from "@/lib/offers";
import { useSite } from "@/lib/site-context";
import { PageHero } from "@/components/ui/PageHero";
import { Img } from "@/components/ui/Img";
import { Reveal } from "@/components/ui/Reveal";
import { ButtonLink } from "@/components/ui/ButtonLink";

export function OffersView() {
    const { preset, t, ui, price, date } = useSite();
    const offers = useCurrentOffers();

    return (
        <>
            <PageHero testId="offers-hero" eyebrow={ui.nav.offers} title={t(preset.copy.offers.title)} intro={t(preset.copy.offers.intro)} image={preset.images.offersHero} />
            <section className="section container">
                {offers.length === 0 && (
                    <p className="border-y border-line py-16 font-serif text-3xl text-muted" data-testid="offers-empty">
                        {ui.offers.none}
                    </p>
                )}
                <div className="space-y-28 md:space-y-40">
                    {offers.map((o, i) => {
                        const flip = i % 2 === 1;
                        return (
                            <article key={o.slug} id={o.slug} className="grid scroll-mt-32 gap-10 md:grid-cols-12 md:gap-8" data-testid={`offer-${o.slug}`}>
                                <Reveal className={`md:col-span-6 ${flip ? "md:order-2 md:col-start-7" : ""}`}>
                                    <div className={`group relative aspect-[4/5] overflow-hidden bg-surface ${i % 3 === 0 ? "rounded-arch" : ""}`}>
                                        <Img src={o.image} alt={t(o.title)} zoom />
                                        <span className="absolute left-5 top-5 bg-bg/90 px-3 py-1.5 text-xs font-medium uppercase tracking-caps text-ink backdrop-blur md:left-auto md:right-5">
                                            {t(o.tag)}
                                        </span>
                                    </div>
                                </Reveal>
                                <Reveal className={`flex flex-col justify-center md:col-span-5 ${flip ? "md:order-1 md:col-start-1" : "md:col-start-8"}`} delay={0.1}>
                                    <p className="font-serif text-6xl font-light italic text-accent md:text-7xl">{String(i + 1).padStart(2, "0")}</p>
                                    <h2 className="mt-6 text-4xl leading-[1.05] md:text-5xl">{t(o.title)}</h2>
                                    <p className="mt-6 text-base leading-relaxed text-muted md:text-lg">{t(o.summary)}</p>
                                    <dl className="mt-10 grid gap-4 border-y border-line py-6 text-sm sm:grid-cols-2">
                                        <div className="flex items-start gap-3">
                                            <CalendarDays className="mt-0.5 h-4 w-4 shrink-0 text-accent" strokeWidth={1.5} aria-hidden />
                                            <div>
                                                <dt className="text-xs uppercase tracking-caps text-muted">{ui.offers.valid}</dt>
                                                <dd className="mt-1" data-testid={`offer-dates-${o.slug}`}>
                                                    {date(o.validFrom)} – {date(o.validTo)}
                                                </dd>
                                            </div>
                                        </div>
                                        <div className="flex items-start gap-3">
                                            <Moon className="mt-0.5 h-4 w-4 shrink-0 text-accent" strokeWidth={1.5} aria-hidden />
                                            <div>
                                                <dt className="text-xs uppercase tracking-caps text-muted">{ui.offers.minStay}</dt>
                                                <dd className="mt-1">
                                                    {o.minNights} {ui.offers.nights}
                                                </dd>
                                            </div>
                                        </div>
                                    </dl>
                                    <p className="mt-8 text-xs uppercase tracking-caps text-muted">{ui.offers.includes}</p>
                                    <ul className="mt-4 space-y-3" data-testid={`offer-inclusions-${o.slug}`}>
                                        {o.inclusions.map((inc) => (
                                            <li key={t(inc)} className="flex items-start gap-3 text-base">
                                                <Check className="mt-1 h-4 w-4 shrink-0 text-accent" strokeWidth={1.5} aria-hidden />
                                                {t(inc)}
                                            </li>
                                        ))}
                                    </ul>
                                    <div className="mt-10 flex flex-wrap items-end justify-between gap-6">
                                        <p>
                                            <span className="block text-xs uppercase tracking-caps text-muted">{ui.common.from}</span>
                                            <span className="font-serif text-4xl">{price(o.price)}</span>{" "}
                                            <span className="text-sm text-muted">{t(o.priceLabel)}</span>
                                        </p>
                                        <ButtonLink href={o.bookingUrl} external testId={`offer-book-${o.slug}`}>
                                            {ui.offers.book}
                                        </ButtonLink>
                                    </div>
                                </Reveal>
                            </article>
                        );
                    })}
                </div>
            </section>
        </>
    );
}
