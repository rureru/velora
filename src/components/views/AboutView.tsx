"use client";

import { useSite } from "@/lib/site-context";
import { PageHero } from "@/components/ui/PageHero";
import { Img } from "@/components/ui/Img";
import { Reveal } from "@/components/ui/Reveal";

export function AboutView() {
    const { preset, t, ui } = useSite();
    const { about } = preset.copy;

    return (
        <>
            <PageHero testId="about-hero" eyebrow={ui.nav.about} title={t(about.title)} intro={t(about.intro)} image={preset.images.aboutHero} />

            <section className="section container grid gap-12 md:grid-cols-12" data-testid="about-story">
                <Reveal className="md:col-span-3">
                    <p className="eyebrow text-accent md:sticky md:top-32">{ui.about.storyLabel}</p>
                </Reveal>
                <div className="space-y-8 md:col-span-7 md:col-start-5">
                    {about.story.map((p, i) => (
                        <Reveal key={i} delay={i * 0.1}>
                            <p className={i === 0 ? "font-serif text-3xl leading-snug md:text-4xl" : "text-base leading-relaxed text-muted md:text-lg"}>{t(p)}</p>
                        </Reveal>
                    ))}
                </div>
            </section>

            <section className="border-y border-line bg-surface py-24 md:py-32" data-testid="about-principles">
                <div className="container">
                    <p className="eyebrow text-accent">{ui.about.principlesLabel}</p>
                    <div className="mt-14 grid gap-12 md:grid-cols-3 md:gap-10">
                        {about.principles.map((p, i) => (
                            <Reveal key={i} delay={i * 0.12} className="border-t border-ink/30 pt-8">
                                <p className="font-serif text-xl italic text-accent">{String(i + 1).padStart(2, "0")}</p>
                                <h3 className="mt-6 text-3xl md:text-4xl">{t(p.title)}</h3>
                                <p className="mt-4 text-base leading-relaxed text-muted">{t(p.body)}</p>
                            </Reveal>
                        ))}
                    </div>
                </div>
            </section>

            <section className="section container grid gap-12 md:grid-cols-12 md:items-end md:gap-8" data-testid="about-architecture">
                <Reveal className="md:col-span-7">
                    <div className="aspect-[4/5] overflow-hidden bg-surface md:aspect-[6/5]">
                        <Img src={preset.images.aboutArchitecture} alt={t(about.architecture.title)} />
                    </div>
                </Reveal>
                <Reveal className="md:col-span-4 md:col-start-9" delay={0.1}>
                    <p className="eyebrow text-accent">{ui.about.architectureLabel}</p>
                    <h2 className="mt-8 text-4xl leading-[1.05] md:text-5xl">{t(about.architecture.title)}</h2>
                    <p className="mt-6 text-base leading-relaxed text-muted md:text-lg">{t(about.architecture.body)}</p>
                </Reveal>
            </section>

            <section className="bg-deep py-24 text-ondeep md:py-36" data-testid="about-sustainability">
                <div className="container grid gap-14 md:grid-cols-12 md:gap-8">
                    <Reveal className="md:col-span-5">
                        <div className="aspect-[3/4] overflow-hidden rounded-arch bg-ondeep/10">
                            <Img src={preset.images.aboutSustainability} alt={t(about.sustainability.title)} />
                        </div>
                    </Reveal>
                    <div className="flex flex-col justify-center md:col-span-6 md:col-start-7">
                        <Reveal>
                            <p className="eyebrow text-deepmuted">{ui.about.sustainabilityLabel}</p>
                            <h2 className="mt-8 text-4xl leading-[1.05] md:text-6xl">{t(about.sustainability.title)}</h2>
                        </Reveal>
                        <ul className="mt-12 divide-y divide-ondeep/15 border-y border-ondeep/15">
                            {about.sustainability.points.map((p, i) => (
                                <Reveal as="li" key={i} delay={i * 0.08} className="flex gap-6 py-6">
                                    <span className="font-serif text-lg italic text-deepmuted">{String(i + 1).padStart(2, "0")}</span>
                                    <span className="text-base leading-relaxed text-ondeep/90 md:text-lg">{t(p)}</span>
                                </Reveal>
                            ))}
                        </ul>
                    </div>
                </div>
            </section>

            <section className="section container" data-testid="about-team">
                <Reveal>
                    <p className="eyebrow text-accent">{ui.about.teamLabel}</p>
                    <h2 className="mt-8 text-4xl md:text-6xl">{ui.about.teamTitle}</h2>
                </Reveal>
                <div className="mt-16 grid gap-12 sm:grid-cols-2 md:grid-cols-3 md:gap-8">
                    {preset.team.map((m, i) => (
                        <Reveal key={m.name} delay={i * 0.12} className={i === 1 ? "md:mt-20" : ""}>
                            <figure className="group" data-testid={`team-member-${i}`}>
                                <div className="aspect-[3/4] overflow-hidden bg-surface">
                                    <Img src={m.image} alt={m.name} zoom className="grayscale transition-[filter] duration-700 group-hover:grayscale-0" />
                                </div>
                                <figcaption className="mt-6">
                                    <p className="font-serif text-3xl">{m.name}</p>
                                    <p className="mt-1 text-xs uppercase tracking-caps text-muted">{t(m.role)}</p>
                                </figcaption>
                            </figure>
                        </Reveal>
                    ))}
                </div>
            </section>
        </>
    );
}
