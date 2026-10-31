"use client";

import { useSite } from "@/lib/site-context";

export function Marquee() {
    const { preset, t } = useSite();
    const words = preset.copy.marquee.map(t);
    const row = (hidden: boolean) => (
        <div className="flex shrink-0 items-center" aria-hidden={hidden || undefined}>
            {words.map((w, i) => (
                <span key={`${w}-${i}`} className="flex items-center">
                    <span className="px-10 font-serif text-4xl font-light italic md:px-16 md:text-6xl">{w}</span>
                    <svg viewBox="0 0 10 10" className="h-2 w-2 opacity-60" aria-hidden>
                        <circle cx="5" cy="5" r="4" fill="currentColor" />
                    </svg>
                </span>
            ))}
        </div>
    );
    return (
        <section className="overflow-hidden border-y border-ondeep/10 bg-deep py-10 text-ondeep md:py-14" data-testid="marquee-band">
            <p className="sr-only">{words.join(" — ")}</p>
            <div className="marquee-track flex w-max" aria-hidden>
                {row(false)}
                {row(true)}
            </div>
        </section>
    );
}
