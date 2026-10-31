"use client";

import { useSite } from "@/lib/site-context";
import { PageHero } from "@/components/ui/PageHero";
import { Reveal } from "@/components/ui/Reveal";
import { ContactForm } from "@/components/ui/ContactForm";

export function ContactView() {
    const { preset, t, ui } = useSite();
    const { contact } = preset;
    const { lat, lng } = contact.coordinates;
    const d = 0.06;
    const mapSrc = `https://www.openstreetmap.org/export/embed.html?bbox=${lng - d}%2C${lat - d / 2}%2C${lng + d}%2C${lat + d / 2}&layer=mapnik&marker=${lat}%2C${lng}`;

    const rows = [
        { label: ui.contact.address, content: contact.address.map((l) => <span key={l} className="block">{l}</span>) },
        { label: ui.contact.phone, content: <a href={`tel:${contact.phone.replace(/\s/g, "")}`} className="hover:text-accent" data-testid="contact-phone-link">{contact.phone}</a> },
        { label: ui.contact.email, content: <a href={`mailto:${contact.email}`} className="break-all hover:text-accent" data-testid="contact-email-link">{contact.email}</a> },
        { label: ui.contact.hours, content: t(contact.hours) },
    ];

    return (
        <>
            <PageHero testId="contact-hero" eyebrow={ui.nav.contact} title={t(preset.copy.contact.title)} intro={t(preset.copy.contact.intro)} image={preset.images.contactHero} />
            <section className="section container grid gap-20 md:grid-cols-12 md:gap-8">
                <Reveal className="md:col-span-4">
                    <p className="eyebrow text-accent">{ui.contact.detailsLabel}</p>
                    <dl className="mt-10 divide-y divide-line border-y border-line" data-testid="contact-details">
                        {rows.map((r) => (
                            <div key={r.label} className="py-6">
                                <dt className="text-xs uppercase tracking-caps text-muted">{r.label}</dt>
                                <dd className="mt-3 font-serif text-2xl leading-snug">{r.content}</dd>
                            </div>
                        ))}
                    </dl>
                    <div className="mt-8 flex flex-wrap gap-6">
                        {preset.social.map((s) => (
                            <a key={s.label} href={s.url} target="_blank" rel="noopener noreferrer" className="link-line" data-testid={`contact-social-${s.label.toLowerCase()}`}>
                                {s.label}
                            </a>
                        ))}
                    </div>
                </Reveal>
                <Reveal className="md:col-span-7 md:col-start-6" delay={0.1}>
                    <p className="eyebrow text-accent">{ui.contact.formLabel}</p>
                    <div className="mt-6">
                        <ContactForm />
                    </div>
                </Reveal>
            </section>
            <section className="container pb-24 md:pb-36">
                <div className="relative h-[420px] overflow-hidden border border-line bg-surface md:h-[520px]">
                    <iframe
                        title={ui.contact.mapTitle}
                        src={mapSrc}
                        loading="lazy"
                        className="h-full w-full grayscale-[0.85] sepia-[0.15]"
                        data-testid="contact-map"
                    />
                </div>
            </section>
        </>
    );
}
