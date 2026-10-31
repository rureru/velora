"use client";

import Link from "next/link";
import { useSite } from "@/lib/site-context";
import { Img } from "@/components/ui/Img";
import { Reveal } from "@/components/ui/Reveal";
import { ButtonLink } from "@/components/ui/ButtonLink";

const spans = [
    "md:col-span-7 md:row-span-2",
    "md:col-span-5",
    "md:col-span-5 md:row-span-2",
    "md:col-span-4",
    "md:col-span-3",
];

export function ExperiencesBento() {
    const { preset, t, ui } = useSite();
    const items = preset.experiences.slice(0, 5);

    return (
        <section className="section container" data-testid="experiences-bento-section">
            <Reveal className="grid gap-8 md:grid-cols-12">
                <div className="md:col-span-6">
                    <p className="eyebrow text-accent">No. 03 — {ui.home.experiencesLabel}</p>
                    <h2 className="mt-8 text-4xl leading-[1.05] md:text-6xl">{ui.home.experiencesTitle}</h2>
                </div>
                <div className="flex flex-col justify-end gap-8 md:col-span-5 md:col-start-8">
                    <p className="text-base leading-relaxed text-muted md:text-lg">{t(preset.copy.experiences.intro)}</p>
                    <ButtonLink href="/experiences" variant="line" testId="bento-view-all">
                        {ui.common.viewAll}
                    </ButtonLink>
                </div>
            </Reveal>

            <div className="mt-16 grid auto-rows-[340px] grid-cols-1 gap-4 md:mt-24 md:auto-rows-[280px] md:grid-cols-12 md:gap-5">
                {items.map((x, i) => (
                    <Reveal key={x.slug} className={spans[i] ?? "md:col-span-4"} delay={(i % 3) * 0.1}>
                        <Link
                            href={`/experiences#${x.slug}`}
                            className="group relative block h-full overflow-hidden bg-surface"
                            data-testid={`bento-item-${x.slug}`}
                        >
                            <Img src={x.image} alt={t(x.title)} zoom />
                            <div className="shade-bottom absolute inset-0" aria-hidden />
                            <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-6 p-6 text-white md:p-8">
                                <div>
                                    <p className="text-xs font-medium uppercase tracking-caps text-white/85">{t(x.category)}</p>
                                    <h3 className={`mt-2 leading-tight ${i === 0 ? "text-4xl md:text-5xl" : "text-3xl"}`}>{t(x.title)}</h3>
                                </div>
                                <p className="shrink-0 text-xs uppercase tracking-caps text-white/85">{t(x.duration)}</p>
                            </div>
                        </Link>
                    </Reveal>
                ))}
            </div>
        </section>
    );
}
