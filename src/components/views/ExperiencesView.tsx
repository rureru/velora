"use client";

import { useSite } from "@/lib/site-context";
import { PageHero } from "@/components/ui/PageHero";
import { Img } from "@/components/ui/Img";
import { Reveal } from "@/components/ui/Reveal";
import { ButtonLink } from "@/components/ui/ButtonLink";

export function ExperiencesView() {
    const { preset, t, ui } = useSite();
    return (
        <>
            <PageHero
                testId="experiences-hero"
                eyebrow={ui.nav.experiences}
                title={t(preset.copy.experiences.title)}
                intro={t(preset.copy.experiences.intro)}
                image={preset.images.experiencesHero}
            />
            <section className="section container space-y-28 md:space-y-44">
                {preset.experiences.map((x, i) => {
                    const flip = i % 2 === 1;
                    return (
                        <article key={x.slug} id={x.slug} className="grid scroll-mt-32 gap-10 md:grid-cols-12 md:items-center md:gap-8" data-testid={`experience-${x.slug}`}>
                            <Reveal className={`md:col-span-6 ${flip ? "md:order-2 md:col-start-7" : ""}`}>
                                <div className={`group overflow-hidden bg-surface ${i % 3 === 0 ? "aspect-[4/5] rounded-arch" : "aspect-[4/5]"}`}>
                                    <Img src={x.image} alt={t(x.title)} zoom />
                                </div>
                            </Reveal>
                            <Reveal className={`md:col-span-5 ${flip ? "md:order-1 md:col-start-1" : "md:col-start-8"}`} delay={0.1}>
                                <p className="font-serif text-6xl font-light italic text-accent md:text-7xl">{String(i + 1).padStart(2, "0")}</p>
                                <p className="eyebrow mt-8 text-muted">{t(x.category)}</p>
                                <h2 className="mt-5 text-4xl leading-[1.05] md:text-5xl">{t(x.title)}</h2>
                                <p className="mt-6 text-base leading-relaxed text-muted md:text-lg">{t(x.summary)}</p>
                                <dl className="mt-10 grid grid-cols-2 border-y border-line">
                                    <div className="flex flex-col py-5 pr-4">
                                        <dt className="order-2 mt-1 text-xs uppercase tracking-caps text-muted">{ui.common.duration}</dt>
                                        <dd className="order-1 font-serif text-2xl">{t(x.duration)}</dd>
                                    </div>
                                    <div className="flex flex-col border-l border-line py-5 pl-6">
                                        <dt className="order-2 mt-1 text-xs uppercase tracking-caps text-muted">{ui.common.season}</dt>
                                        <dd className="order-1 font-serif text-2xl">{t(x.season)}</dd>
                                    </div>
                                </dl>
                                <ButtonLink href="/contact" variant="line" className="mt-8" testId={`experience-enquire-${x.slug}`}>
                                    {ui.experiences.enquire}
                                </ButtonLink>
                            </Reveal>
                        </article>
                    );
                })}
            </section>
        </>
    );
}
