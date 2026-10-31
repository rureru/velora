"use client";

import { useCallback, useState } from "react";
import { AnimatePresence } from "framer-motion";
import { Expand } from "lucide-react";
import { useSite } from "@/lib/site-context";
import { PageHero } from "@/components/ui/PageHero";
import { Img } from "@/components/ui/Img";
import { Reveal } from "@/components/ui/Reveal";
import { Lightbox } from "@/components/ui/LightBox";

export function GalleryView() {
    const { preset, t, ui } = useSite();
    const { categories, images } = preset.gallery;
    const [filter, setFilter] = useState("all");
    const [open, setOpen] = useState<number | null>(null);
    const active = filter === "all" || categories.some((c) => c.id === filter) ? filter : "all";
    const shown = active === "all" ? images : images.filter((i) => i.category === active);
    const close = useCallback(() => setOpen(null), []);

    return (
        <>
            <PageHero testId="gallery-hero" eyebrow={ui.nav.gallery} title={t(preset.copy.gallery.title)} intro={t(preset.copy.gallery.intro)} image={preset.images.galleryHero} />
            <section className="section container !pt-16 md:!pt-24">
                <div className="flex flex-col gap-6 border-b border-line pb-6 md:flex-row md:items-center md:justify-between">
                    <div role="group" aria-label={ui.gallery.filterLabel} className="flex flex-wrap gap-2" data-testid="gallery-filters">
                        {[{ id: "all", label: null }, ...categories].map((c) => (
                            <button
                                key={c.id}
                                type="button"
                                onClick={() => setFilter(c.id)}
                                aria-pressed={active === c.id}
                                data-testid={`gallery-filter-${c.id}`}
                                className={`border px-5 py-2.5 text-xs font-medium uppercase tracking-caps transition-colors duration-500 ${active === c.id ? "border-ink bg-ink text-bg" : "border-line text-ink hover:border-ink"
                                    }`}
                            >
                                {c.label ? t(c.label) : ui.gallery.all}
                            </button>
                        ))}
                    </div>
                    <p className="text-xs uppercase tracking-caps text-muted" data-testid="gallery-count">
                        {String(shown.length).padStart(2, "0")} {ui.gallery.count}
                    </p>
                </div>

                <div className="mt-14 columns-1 gap-5 sm:columns-2 lg:columns-3" key={active}>
                    {shown.map((img, i) => (
                        <Reveal key={img.src + i} className="mb-5 break-inside-avoid" delay={(i % 3) * 0.08}>
                            <button
                                type="button"
                                onClick={() => setOpen(i)}
                                aria-label={`${ui.gallery.open}: ${t(img.alt)}`}
                                className={`group relative block w-full overflow-hidden bg-surface ${img.tall ? "aspect-[3/4]" : "aspect-[4/3]"}`}
                                data-testid={`gallery-item-${i}`}
                            >
                                <Img src={img.src} alt={t(img.alt)} zoom />
                                <span className="shade-bottom absolute inset-0 opacity-0 transition-opacity duration-700 group-hover:opacity-100" aria-hidden />
                                <span className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-5 text-left text-white opacity-0 transition-opacity duration-700 group-hover:opacity-100 group-focus-visible:opacity-100">
                                    <span className="font-serif text-xl italic">{t(img.alt)}</span>
                                    <Expand className="h-4 w-4 shrink-0" strokeWidth={1.4} aria-hidden />
                                </span>
                            </button>
                        </Reveal>
                    ))}
                </div>
            </section>
            <AnimatePresence>{open !== null && <Lightbox images={shown} index={open} onIndex={setOpen} onClose={close} />}</AnimatePresence>
        </>
    );
}
