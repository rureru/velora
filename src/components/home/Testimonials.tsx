"use client";

import { useEffect, useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useSite } from "@/lib/site-context";
import { Reveal } from "@/components/ui/Reveal";

export function Testimonials() {
    const { preset, t, ui } = useSite();
    const quotes = preset.testimonials;
    const [active, setActive] = useState(0);
    const [paused, setPaused] = useState(false);
    const total = quotes.length;

    useEffect(() => {
        if (paused || total < 2) return;
        const id = setInterval(() => setActive((a) => (a + 1) % total), 8000);
        return () => clearInterval(id);
    }, [paused, total]);

    useEffect(() => {
        setActive(0);
    }, [preset.id]);

    if (!total) return null;
    const go = (d: number) => setActive((a) => (a + d + total) % total);

    return (
        <section
            className="section container"
            data-testid="testimonials-section"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
            onFocus={() => setPaused(true)}
            onBlur={() => setPaused(false)}
        >
            <Reveal className="grid gap-12 md:grid-cols-12">
                <div className="flex flex-col justify-between gap-10 md:col-span-3">
                    <p className="eyebrow text-accent">No. 04 — {ui.home.quotesLabel}</p>
                    <div className="flex items-center gap-6">
                        <span className="font-serif text-2xl" data-testid="testimonial-counter">
                            {String(active + 1).padStart(2, "0")} <span className="text-muted">/ {String(total).padStart(2, "0")}</span>
                        </span>
                        <div className="flex gap-2">
                            <button type="button" onClick={() => go(-1)} aria-label="Previous" className="flex h-11 w-11 items-center justify-center border border-line transition-colors duration-500 hover:border-ink hover:bg-ink hover:text-bg" data-testid="testimonial-prev">
                                <ArrowLeft className="h-4 w-4" strokeWidth={1.4} aria-hidden />
                            </button>
                            <button type="button" onClick={() => go(1)} aria-label="Next" className="flex h-11 w-11 items-center justify-center border border-line transition-colors duration-500 hover:border-ink hover:bg-ink hover:text-bg" data-testid="testimonial-next">
                                <ArrowRight className="h-4 w-4" strokeWidth={1.4} aria-hidden />
                            </button>
                        </div>
                    </div>
                </div>
                <div className="grid md:col-span-8 md:col-start-5" aria-live="polite">
                    {quotes.map((q, i) => (
                        <figure
                            key={q.author}
                            className={`col-start-1 row-start-1 transition-[opacity,transform] duration-[1200ms] ease-lux ${i === active ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-4 opacity-0"
                                }`}
                            aria-hidden={i !== active}
                            data-testid={`testimonial-${i}`}
                        >
                            <blockquote className="font-serif text-3xl font-light italic leading-[1.2] md:text-5xl">“{t(q.quote)}”</blockquote>
                            <figcaption className="mt-10 text-xs font-medium uppercase tracking-caps text-muted">
                                {q.author} — {t(q.origin)}
                            </figcaption>
                        </figure>
                    ))}
                </div>
            </Reveal>
        </section>
    );
}
