"use client";

import Link from "next/link";
import { useSite } from "@/lib/site-context";
import { useCurrentOffers } from "@/lib/offers";
import { Img } from "@/components/ui/Img";
import { Reveal } from "@/components/ui/Reveal";
import { ButtonLink } from "@/components/ui/ButtonLink";

export function OffersStrip() {
    const { t, ui, price, date } = useSite();
    const offers = useCurrentOffers().slice(0, 3);
    if (!offers.length) return null;

    return (
        <section className="border-y border-line bg-surface py-20 md:py-28" data-testid="home-offers-strip">
            <div className="container">
                <Reveal className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
                    <div>
                        <p className="eyebrow text-accent">{ui.home.offersLabel}</p>
                        <h2 className="mt-6 text-4xl leading-[1.05] md:text-5xl">{ui.home.offersTitle}</h2>
                    </div>
                    <ButtonLink href="/offers" variant="line" testId="home-offers-view-all">
                        {ui.common.viewAll}
                    </ButtonLink>
                </Reveal>
            </div>
            <div className="mt-12 flex snap-x snap-mandatory scroll-px-6 gap-5 overflow-x-auto px-6 pb-4 md:container md:grid md:grid-cols-3 md:gap-8 md:overflow-visible md:pb-0">
                {offers.map((o) => (
                    <div key={o.slug} className="w-[82%] shrink-0 snap-start sm:w-[60%] md:w-auto">
                        <Link href={`/offers#${o.slug}`} className="group block" data-testid={`home-offer-${o.slug}`}>
                            <div className="relative aspect-[4/3] overflow-hidden bg-bg">
                                <Img src={o.image} alt={t(o.title)} zoom />
                                <span className="absolute left-4 top-4 bg-bg/90 px-3 py-1 text-xs font-medium uppercase tracking-caps text-ink backdrop-blur">{t(o.tag)}</span>
                            </div>
                            <h3 className="mt-5 text-3xl leading-tight transition-colors duration-500 group-hover:text-accent">{t(o.title)}</h3>
                            <p className="mt-2 text-sm text-muted">
                                {date(o.validFrom)} – {date(o.validTo)}
                            </p>
                            <p className="mt-3 text-sm">
                                <span className="text-xs uppercase tracking-caps text-muted">{ui.common.from}</span>{" "}
                                <span className="font-serif text-2xl">{price(o.price)}</span> <span className="text-muted">{t(o.priceLabel)}</span>
                            </p>
                        </Link>
                    </div>
                ))}
            </div>
        </section>
    );
}
