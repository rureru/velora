"use client";

import { useCallback, useRef, useState } from "react";
import { AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight, Expand } from "lucide-react";
import { useSite } from "@/lib/site-context";
import { Img } from "@/components/ui/Img";
import { Reveal } from "@/components/ui/Reveal";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Lightbox } from "@/components/ui/LightBox";

/** Swipeable photo band; each photo opens the full-screen viewer. */
export function GalleryBand() {
    const { preset, t, ui } = useSite();
    const images = preset.gallery.images.slice(0, 10);
    const [open, setOpen] = useState<number | null>(null);
    const trackRef = useRef<HTMLDivElement>(null);
    const close = useCallback(() => setOpen(null), []);
    if (!images.length) return null;

    const scroll = (dir: number) => {
        const el = trackRef.current;
        if (el) el.scrollBy({ left: dir * el.clientWidth * 0.7, behavior: "smooth" });
    };

    return (
        <section className="py-20 md:py-28" data-testid="home-gallery-band">
            <div className="container">
                <Reveal className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
                    <div>
                        <p className="eyebrow text-accent">{ui.home.galleryLabel}</p>
                        <h2 className="mt-6 text-4xl leading-[1.05] md:text-5xl">{ui.home.galleryTitle}</h2>
                    </div>
                    <div className="flex items-center gap-6">
                        <div className="hidden gap-2 md:flex">
                            {[-1, 1].map((d) => {
                                const Icon = d < 0 ? ArrowLeft : ArrowRight;
                                return (
                                    <button
                                        key={d}
                                        type="button"
                                        onClick={() => scroll(d)}
                                        aria-label={d < 0 ? ui.gallery.prev : ui.gallery.next}
                                        className="flex h-11 w-11 items-center justify-center border border-line transition-colors duration-500 hover:border-ink hover:bg-ink hover:text-bg"
                                        data-testid={`gallery-band-${d < 0 ? "prev" : "next"}`}
                                    >
                                        <Icon className="h-4 w-4" strokeWidth={1.4} aria-hidden />
                                    </button>
                                );
                            })}
                        </div>
                        <ButtonLink href="/gallery" variant="line" testId="gallery-band-view-all">
                            {ui.common.viewAll}
                        </ButtonLink>
                    </div>
                </Reveal>
            </div>
            <div
                ref={trackRef}
                className="mt-12 flex snap-x snap-mandatory scroll-px-6 gap-4 overflow-x-auto px-6 pb-4 [scrollbar-width:none] md:gap-5 [&::-webkit-scrollbar]:hidden"
                data-testid="gallery-band-track"
            >
                {images.map((img, i) => (
                    <button
                        key={img.src + i}
                        type="button"
                        onClick={() => setOpen(i)}
                        aria-label={`${ui.gallery.open}: ${t(img.alt)}`}
                        className={`group relative h-[260px] shrink-0 snap-start overflow-hidden bg-surface md:h-[420px] ${img.tall ? "aspect-[3/4]" : "aspect-[4/3]"} ${i % 4 === 0 ? "rounded-t-[999px]" : ""}`}
                        data-testid={`gallery-band-item-${i}`}
                    >
                        <Img src={img.src} alt={t(img.alt)} zoom />
                        <span className="shade-bottom absolute inset-0 opacity-0 transition-opacity duration-700 group-hover:opacity-100" aria-hidden />
                        <span className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-5 text-left text-white opacity-0 transition-opacity duration-700 group-hover:opacity-100 group-focus-visible:opacity-100">
                            <span className="font-serif text-lg italic">{t(img.alt)}</span>
                            <Expand className="h-4 w-4 shrink-0" strokeWidth={1.4} aria-hidden />
                        </span>
                    </button>
                ))}
            </div>
            <AnimatePresence>{open !== null && <Lightbox images={images} index={open} onIndex={setOpen} onClose={close} />}</AnimatePresence>
        </section>
    );
}
