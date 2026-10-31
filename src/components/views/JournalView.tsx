"use client";

import { useSite } from "@/lib/site-context";
import { PageHero } from "@/components/ui/PageHero";
import { Reveal } from "@/components/ui/Reveal";
import { JournalCard } from "@/components/ui/JournalCard";

export function JournalView() {
    const { preset, t, ui } = useSite();
    const posts = [...preset.journal].sort((a, b) => b.date.localeCompare(a.date));
    const [first, ...rest] = posts;

    return (
        <>
            <PageHero testId="journal-hero" eyebrow={ui.nav.journal} title={t(preset.copy.journal.title)} intro={t(preset.copy.journal.intro)} image={preset.images.journalHero} />
            <section className="section container">
                {first && (
                    <Reveal>
                        <JournalCard post={first} large aspect="aspect-[4/3] md:aspect-[6/5]" />
                    </Reveal>
                )}
                {rest.length > 0 && (
                    <div className="mt-24 grid gap-20 border-t border-line pt-20 md:mt-32 md:grid-cols-2 md:gap-x-10">
                        {rest.map((p, i) => (
                            <Reveal key={p.slug} delay={(i % 2) * 0.12} className={i % 2 === 1 ? "md:mt-24" : ""}>
                                <JournalCard post={p} />
                            </Reveal>
                        ))}
                    </div>
                )}
            </section>
        </>
    );
}
