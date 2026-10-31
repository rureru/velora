"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, X } from "lucide-react";
import { useSite } from "@/lib/site-context";
import { EASE } from "@/lib/motion";
import type { Gallery } from "@/config/types";

type Props = {
    images: Gallery["images"];
    index: number;
    onIndex: (i: number) => void;
    onClose: () => void;
};

const large = (src: string) => (src.includes("images.unsplash.com") ? src.replace(/w=\d+/, "w=2400") : src);

/** Full-screen image viewer: arrows, keyboard (← → Esc) and swipe. Loops endlessly. */
export function Lightbox({ images, index, onIndex, onClose }: Props) {
    const { t, ui, preset } = useSite();
    const closeRef = useRef<HTMLButtonElement>(null);
    const touchX = useRef<number | null>(null);
    const total = images.length;
    const img = images[index];
    const go = (d: number) => onIndex((index + d + total) % total);
    const category = preset.gallery.categories.find((c) => c.id === img?.category);

    useEffect(() => {
        const previous = document.activeElement as HTMLElement | null;
        closeRef.current?.focus();
        document.body.style.overflow = "hidden";
        return () => {
            document.body.style.overflow = "";
            previous?.focus();
        };
    }, []);

    useEffect(() => {
        const onKey = (e: KeyboardEvent) => {
            if (e.key === "Escape") onClose();
            if (e.key === "ArrowRight") onIndex((index + 1) % total);
            if (e.key === "ArrowLeft") onIndex((index - 1 + total) % total);
        };
        window.addEventListener("keydown", onKey);
        return () => window.removeEventListener("keydown", onKey);
    }, [index, total, onClose, onIndex]);

    if (!img) return null;

    return (
        <motion.div
            role="dialog"
            aria-modal="true"
            aria-label={ui.gallery.viewer}
            data-lenis-prevent
            className="fixed inset-0 z-[90] flex flex-col bg-deep text-ondeep"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: EASE }}
            onTouchStart={(e) => {
                touchX.current = e.touches[0]?.clientX ?? null;
            }}
            onTouchEnd={(e) => {
                const start = touchX.current;
                const end = e.changedTouches[0]?.clientX;
                if (start !== null && end !== undefined && Math.abs(end - start) > 50) go(end < start ? 1 : -1);
                touchX.current = null;
            }}
            data-testid="gallery-lightbox"
        >
            <div className="container flex items-center justify-between py-5">
                <p className="text-xs uppercase tracking-caps text-deepmuted" data-testid="lightbox-counter">
                    {String(index + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
                </p>
                <button ref={closeRef} type="button" onClick={onClose} className="flex items-center gap-2 text-xs font-medium uppercase tracking-caps" data-testid="lightbox-close">
                    <X className="h-5 w-5" strokeWidth={1.4} aria-hidden />
                    {ui.gallery.close}
                </button>
            </div>

            <div className="relative flex flex-1 items-center justify-center px-4 md:px-24" onClick={onClose}>
                <motion.img
                    key={img.src}
                    src={large(img.src)}
                    alt={t(img.alt)}
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, ease: EASE }}
                    className="max-h-[calc(100svh-180px)] max-w-full object-contain"
                    onClick={(e) => e.stopPropagation()}
                    data-testid="lightbox-image"
                />
                {total > 1 && (
                    <>
                        <NavButton side="left" label={ui.gallery.prev} onClick={() => go(-1)} />
                        <NavButton side="right" label={ui.gallery.next} onClick={() => go(1)} />
                    </>
                )}
            </div>

            <div className="container flex flex-col gap-1 py-6 md:flex-row md:items-baseline md:gap-4">
                {category && <span className="text-xs uppercase tracking-caps text-deepmuted">{t(category.label)}</span>}
                <p className="font-serif text-xl italic" data-testid="lightbox-caption">
                    {t(img.alt)}
                </p>
            </div>
        </motion.div>
    );
}

function NavButton({ side, label, onClick }: { side: "left" | "right"; label: string; onClick: () => void }) {
    const Icon = side === "left" ? ArrowLeft : ArrowRight;
    return (
        <button
            type="button"
            aria-label={label}
            onClick={(e) => {
                e.stopPropagation();
                onClick();
            }}
            className={`absolute top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center border border-ondeep/30 bg-deep/60 backdrop-blur transition-colors duration-500 hover:bg-ondeep hover:text-deep ${side === "left" ? "left-3 md:left-8" : "right-3 md:right-8"
                }`}
            data-testid={`lightbox-${side === "left" ? "prev" : "next"}`}
        >
            <Icon className="h-4 w-4" strokeWidth={1.4} aria-hidden />
        </button>
    );
}
