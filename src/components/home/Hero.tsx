"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { useSite } from "@/lib/site-context";
import { EASE } from "@/lib/motion";
import { Img } from "@/components/ui/Img";
import { MaskedLines } from "@/components/ui/MaskedLines";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { HeroCursor } from "./HeroCursor";

export function Hero() {
    const { preset, t, ui } = useSite();
    const ref = useRef<HTMLElement>(null);
    const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
    const y = useTransform(scrollYProgress, [0, 1], ["0%", "22%"]);
    const scale = useTransform(scrollYProgress, [0, 1], [1.06, 1.16]);
    const copy = preset.copy.hero;

    return (
        <section ref={ref} className="relative h-[100svh] min-h-[640px] overflow-hidden bg-deep text-white" data-testid="hero-section">
            <motion.div style={{ y, scale }} className="absolute inset-0">
                <Img src={preset.images.hero} alt="" eager />
            </motion.div>
            <div className="vignette absolute inset-0" aria-hidden />

            <div className="container relative z-10 flex h-full flex-col justify-end pb-14 pt-32 md:pb-20">
                <motion.p
                    className="eyebrow mb-8 text-white/90"
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.2, delay: 0.1, ease: EASE }}
                >
                    {t(copy.eyebrow)}
                </motion.p>
                <MaskedLines
                    lines={copy.lines.map(t)}
                    className="display text-[clamp(3.2rem,9vw,9.5rem)] [text-shadow:0_2px_30px_rgb(0_0_0/0.25)]"
                    delay={0.25}
                    testId="hero-title"
                />
                <motion.div
                    className="mt-10 flex flex-col gap-8 md:mt-14 md:flex-row md:items-end md:justify-between"
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.2, delay: 0.9, ease: EASE }}
                >
                    <p className="max-w-md text-base leading-relaxed text-white/90 md:text-lg">{t(copy.sub)}</p>
                    <div className="flex flex-wrap items-center gap-8">
                        <ButtonLink href="/booking" external tone="light" testId="hero-reserve-button">
                            {ui.common.reserveNow}
                        </ButtonLink>
                        <ButtonLink href="/accommodations" variant="line" tone="light" testId="hero-explore-link" className="!text-white">
                            {ui.common.discover}
                        </ButtonLink>
                    </div>
                </motion.div>
            </div>

            <div className="absolute bottom-0 right-6 z-10 hidden flex-col items-center gap-4 pb-8 md:flex md:right-12" aria-hidden>
                <span className="text-[10px] uppercase tracking-caps text-white/80 [writing-mode:vertical-rl]">{ui.common.scroll}</span>
                <span className="block h-16 w-px overflow-hidden bg-white/20">
                    <span className="scroll-line block h-full w-full bg-white" />
                </span>
            </div>

            <HeroCursor targetRef={ref} label={ui.common.explore} />
        </section>
    );
}
