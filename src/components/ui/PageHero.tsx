"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { EASE } from "@/lib/motion";
import { Img } from "./Img";
import { MaskedLines } from "./MaskedLines";

type Props = { eyebrow: string; title: string; intro: string; image: string; testId: string };

/** Hero used on inner pages: tall photograph, masked title, intro paragraph below. */
export function PageHero({ eyebrow, title, intro, image, testId }: Props) {
    const ref = useRef<HTMLElement>(null);
    const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
    const y = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

    return (
        <>
            <section ref={ref} className="relative h-[78svh] min-h-[520px] overflow-hidden bg-deep text-ondeep" data-testid={testId}>
                <motion.div style={{ y }} className="absolute inset-0 scale-110">
                    <Img src={image} alt="" eager />
                </motion.div>
                <div className="vignette absolute inset-0" aria-hidden />
                <div className="container relative z-10 flex h-full flex-col justify-end pb-14 md:pb-20">
                    <motion.p
                        className="eyebrow mb-6 text-ondeep/90"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, ease: EASE }}
                    >
                        {eyebrow}
                    </motion.p>
                    <MaskedLines lines={[title]} className="display max-w-5xl text-5xl sm:text-6xl lg:text-8xl" delay={0.1} />
                </div>
            </section>
            <section className="container grid gap-8 pt-16 md:grid-cols-12 md:pt-24">
                <p className="font-serif text-2xl leading-snug text-ink md:col-span-7 md:col-start-6 md:text-3xl">{intro}</p>
            </section>
        </>
    );
}
