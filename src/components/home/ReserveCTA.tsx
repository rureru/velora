"use client";

import { useSite } from "@/lib/site-context";
import { Img } from "@/components/ui/Img";
import { Reveal } from "@/components/ui/Reveal";
import { ButtonLink } from "@/components/ui/ButtonLink";

export function ReserveCTA() {
    const { preset, t, ui } = useSite();
    const { cta } = preset.copy;
    return (
        <section className="relative min-h-[86svh] overflow-hidden bg-deep text-white" data-testid="reserve-cta-section">
            <div className="absolute inset-0">
                <Img src={preset.images.cta} alt="" />
            </div>
            <div className="vignette absolute inset-0" aria-hidden />
            <div className="container relative z-10 flex min-h-[86svh] flex-col justify-end py-20 md:py-28">
                <Reveal className="max-w-4xl">
                    <p className="eyebrow text-white/90">{ui.home.ctaLabel}</p>
                    <h2 className="display mt-8 text-5xl sm:text-6xl lg:text-8xl">{t(cta.title)}</h2>
                    <p className="mt-8 max-w-lg text-base leading-relaxed text-white/90 md:text-lg">{t(cta.body)}</p>
                    <div className="mt-12 flex flex-wrap items-center gap-8">
                        <ButtonLink href="/booking" external tone="light" testId="cta-reserve-button">
                            {ui.common.reserveNow}
                        </ButtonLink>
                        <ButtonLink href="/contact" variant="line" tone="light" className="!text-white" testId="cta-contact-link">
                            {ui.nav.contact}
                        </ButtonLink>
                    </div>
                </Reveal>
            </div>
        </section>
    );
}
