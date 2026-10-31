"use client";

import { useSite } from "@/lib/site-context";
import { PageHero } from "@/components/ui/PageHero";
import { Reveal } from "@/components/ui/Reveal";
import { AccordionItem } from "@/components/ui/AccordionItem";
import { ButtonLink } from "@/components/ui/ButtonLink";

export function FaqView() {
    const { preset, t, ui } = useSite();
    const { categories, items } = preset.faq;
    const groups = categories.map((c) => ({ ...c, items: items.filter((i) => i.category === c.id) })).filter((g) => g.items.length);

    return (
        <>
            <PageHero testId="faq-hero" eyebrow={ui.nav.faq} title={t(preset.copy.faq.title)} intro={t(preset.copy.faq.intro)} image={preset.images.faqHero} />
            <section className="section container grid gap-14 md:grid-cols-12 md:gap-8">
                <nav aria-label={ui.faq.topics} className="md:col-span-3">
                    <div className="md:sticky md:top-32">
                        <p className="eyebrow text-accent">{ui.faq.topics}</p>
                        <ul className="mt-6 flex flex-wrap gap-2 md:flex-col md:gap-3">
                            {groups.map((g, i) => (
                                <li key={g.id}>
                                    <a href={`#faq-${g.id}`} className="group flex items-baseline gap-3 border border-line px-4 py-2 text-sm md:border-0 md:p-0" data-testid={`faq-topic-${g.id}`}>
                                        <span className="hidden font-serif italic text-muted md:inline">{String(i + 1).padStart(2, "0")}</span>
                                        <span className="transition-colors duration-300 group-hover:text-accent">{t(g.label)}</span>
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </nav>
                <div className="space-y-20 md:col-span-8 md:col-start-5">
                    {groups.map((g, gi) => (
                        <Reveal key={g.id}>
                            <section id={`faq-${g.id}`} className="scroll-mt-32" data-testid={`faq-group-${g.id}`}>
                                <p className="font-serif text-lg italic text-accent">{String(gi + 1).padStart(2, "0")}</p>
                                <h2 className="mt-2 border-b border-ink/30 pb-6 text-4xl md:text-5xl">{t(g.label)}</h2>
                                {g.items.map((item, i) => (
                                    <AccordionItem key={i} question={t(item.question)} answer={t(item.answer)} testId={`faq-item-${g.id}-${i}`} />
                                ))}
                            </section>
                        </Reveal>
                    ))}
                    <Reveal>
                        <div className="flex flex-col gap-8 border border-line bg-surface p-8 md:flex-row md:items-center md:justify-between md:p-12" data-testid="faq-contact-box">
                            <div>
                                <h2 className="text-3xl md:text-4xl">{ui.faq.stillTitle}</h2>
                                <p className="mt-3 text-base text-muted">{ui.faq.stillBody}</p>
                                <p className="mt-4 text-sm">
                                    <a href={`mailto:${preset.contact.email}`} className="hover:text-accent">{preset.contact.email}</a>
                                    <span className="mx-3 text-muted">·</span>
                                    <a href={`tel:${preset.contact.phone.replace(/\s/g, "")}`} className="hover:text-accent">{preset.contact.phone}</a>
                                </p>
                            </div>
                            <ButtonLink href="/contact" testId="faq-contact-button" className="shrink-0">
                                {ui.faq.contact}
                            </ButtonLink>
                        </div>
                    </Reveal>
                </div>
            </section>
        </>
    );
}
