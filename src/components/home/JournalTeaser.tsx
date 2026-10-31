"use client";

import { useSite } from "@/lib/site-context";
import { Reveal } from "@/components/ui/Reveal";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { JournalCard } from "@/components/ui/JournalCard";

export function JournalTeaser() {
    const { preset, ui } = useSite();
    const posts = [...preset.journal].sort((a, b) => b.date.localeCompare(a.date)).slice(0, 3);
    if (!posts.length) return null;

    return (
        <section className="section container" data-testid="home-journal-teaser">
            <Reveal className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
                <div>
                    <p className="eyebrow text-accent">No. 06 — {ui.home.journalLabel}</p>
                    <h2 className="mt-8 text-4xl leading-[1.05] md:text-6xl">{ui.home.journalTitle}</h2>
                </div>
                <ButtonLink href="/journal" variant="line" testId="home-journal-view-all">
                    {ui.common.viewAll}
                </ButtonLink>
            </Reveal>
            <div className="mt-16 grid gap-16 md:mt-20 md:grid-cols-3 md:gap-8">
                {posts.map((p, i) => (
                    <Reveal key={p.slug} delay={i * 0.12} className={i === 1 ? "md:mt-16" : ""}>
                        <JournalCard post={p} aspect={i === 1 ? "aspect-[3/4]" : "aspect-[4/3]"} />
                    </Reveal>
                ))}
            </div>
        </section>
    );
}
