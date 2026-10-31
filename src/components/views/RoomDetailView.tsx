"use client";

import Link from "next/link";
import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import { ArrowLeft, Check, Expand } from "lucide-react";
import { useSite } from "@/lib/site-context";
import { Img } from "@/components/ui/Img";
import { Reveal } from "@/components/ui/Reveal";
import { MaskedLines } from "@/components/ui/MaskedLines";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { RoomCard } from "@/components/ui/RoomCard";
import { Lightbox } from "@/components/ui/LightBox";
import type { L, Room } from "@/config/types";

export function RoomDetailView({ slug }: { slug: string }) {
    const { preset, ui } = useSite();
    const room = preset.rooms.find((r) => r.slug === slug);

    if (!room) {
        return (
            <section className="container flex min-h-[70svh] flex-col items-start justify-center gap-8 pt-32" data-testid="room-not-found">
                <h1 className="text-4xl md:text-6xl">{ui.rooms.notFound}</h1>
                <ButtonLink href="/accommodations" testId="room-not-found-back">
                    {ui.rooms.back}
                </ButtonLink>
            </section>
        );
    }
    return <RoomDetail room={room} key={room.slug} />;
}

function RoomDetail({ room }: { room: Room }) {
    const { preset, t, ui, price } = useSite();
    const typeLabel = preset.roomTypes.find((r) => r.id === room.type)?.label;
    const others = preset.rooms.filter((r) => r.slug !== room.slug).slice(0, 3);
    const facts = [
        { label: ui.common.size, value: `${room.size} m²` },
        { label: ui.common.guests, value: `${ui.common.upToGuests} ${room.guests}` },
        { label: ui.common.beds, value: t(room.beds) },
        { label: ui.common.view, value: t(room.view) },
    ];

    return (
        <article data-testid={`room-detail-${room.slug}`}>
            <header className="container pt-32 md:pt-40">
                <Link href="/accommodations" className="link-line text-muted" data-testid="room-back-link">
                    <ArrowLeft className="h-3.5 w-3.5" strokeWidth={1.5} aria-hidden /> {ui.rooms.back}
                </Link>
                <div className="mt-12 grid gap-8 md:grid-cols-12 md:items-end">
                    <div className="md:col-span-8">
                        {typeLabel && <p className="eyebrow text-accent">{t(typeLabel)}</p>}
                        <MaskedLines lines={[t(room.name)]} className="display mt-6 text-5xl sm:text-6xl lg:text-8xl" testId="room-title" />
                    </div>
                    <p className="font-serif text-2xl italic leading-snug text-muted md:col-span-4">{t(room.tagline)}</p>
                </div>
            </header>

            <Gallery room={room} />

            <section className="container grid gap-16 pb-24 md:grid-cols-12 md:gap-8 md:pb-36">
                <div className="md:col-span-7">
                    <Reveal>
                        <p className="eyebrow text-accent">{ui.rooms.details}</p>
                        <p className="mt-8 font-serif text-2xl leading-snug md:text-3xl">{t(room.description)}</p>
                    </Reveal>
                    <Reveal delay={0.1}>
                        <dl className="mt-14 grid grid-cols-2 border-t border-line">
                            {facts.map((f) => (
                                <div key={f.label} className="flex flex-col border-b border-line py-6 pr-4">
                                    <dt className="order-2 mt-2 text-xs uppercase tracking-caps text-muted">{f.label}</dt>
                                    <dd className="order-1 font-serif text-2xl md:text-3xl">{f.value}</dd>
                                </div>
                            ))}
                        </dl>
                    </Reveal>
                    <Reveal delay={0.15}>
                        <h2 className="mt-16 text-3xl">{ui.rooms.amenities}</h2>
                        <ul className="mt-8 grid gap-4 sm:grid-cols-2" data-testid="room-amenities">
                            {room.amenities.map((a) => (
                                <li key={t(a)} className="flex items-center gap-3 text-base text-ink">
                                    <Check className="h-4 w-4 text-accent" strokeWidth={1.5} aria-hidden />
                                    {t(a)}
                                </li>
                            ))}
                        </ul>
                    </Reveal>
                </div>
                <aside className="md:col-span-4 md:col-start-9">
                    <div className="border border-line bg-surface p-8 md:sticky md:top-28 md:p-10" data-testid="room-reserve-panel">
                        <p className="text-xs uppercase tracking-caps text-muted">{ui.common.from}</p>
                        <p className="mt-2 font-serif text-5xl" data-testid="room-price">
                            {price(room.priceFrom)} <span className="text-lg text-muted">{ui.common.perNight}</span>
                        </p>
                        <p className="mt-6 text-sm leading-relaxed text-muted">{t(preset.booking.priceNote)}</p>
                        <ButtonLink href={room.bookingUrl} external className="mt-8 w-full" testId="room-reserve-button">
                            {ui.nav.reserve}
                        </ButtonLink>
                        <ButtonLink href="/contact" variant="line" className="mt-6" testId="room-contact-link">
                            {ui.nav.contact}
                        </ButtonLink>
                    </div>
                </aside>
            </section>

            {others.length > 0 && (
                <section className="section border-t border-line bg-surface">
                    <div className="container">
                        <h2 className="text-4xl md:text-5xl">{ui.rooms.otherRooms}</h2>
                        <div className="mt-16 grid gap-16 md:grid-cols-3 md:gap-8">
                            {others.map((r, i) => (
                                <Reveal key={r.slug} delay={i * 0.1}>
                                    <RoomCard room={r} />
                                </Reveal>
                            ))}
                        </div>
                    </div>
                </section>
            )}
        </article>
    );
}

function Gallery({ room }: { room: Room }) {
    const { t, ui } = useSite();
    const [active, setActive] = useState(0);
    const [viewer, setViewer] = useState(false);
    const name = t(room.name);
    const slides = room.images.map((src, i) => ({
        src,
        alt: Object.fromEntries(Object.entries(room.name).map(([k, v]) => [k, `${v} — ${i + 1}`])) as L,
        category: "",
    }));
    return (
        <section className="container py-14 md:py-20" aria-label={ui.rooms.gallery} data-testid="room-gallery">
            <div className="group relative aspect-[4/5] overflow-hidden bg-surface sm:aspect-[16/10]">
                <button
                    type="button"
                    onClick={() => setViewer(true)}
                    aria-label={`${ui.rooms.fullscreen}: ${name}`}
                    className="absolute inset-0 z-10 cursor-zoom-in"
                    data-testid="room-gallery-open"
                />
                {room.images.map((src, i) => (
                    <div
                        key={src + i}
                        className={`absolute inset-0 transition-opacity duration-[1200ms] ease-lux ${i === active ? "opacity-100" : "opacity-0"}`}
                        aria-hidden={i !== active}
                    >
                        <Img src={src} alt={`${t(room.name)} — ${i + 1}`} eager={i === 0} />
                    </div>
                ))}
                <span className="pointer-events-none absolute bottom-5 left-5 z-20 flex items-center gap-2 bg-bg/85 px-3 py-1.5 text-xs uppercase tracking-caps text-ink backdrop-blur transition-colors duration-500 group-hover:bg-bg">
                    <Expand className="h-3.5 w-3.5" strokeWidth={1.5} aria-hidden />
                    {ui.rooms.fullscreen}
                </span>
                <span className="pointer-events-none absolute bottom-5 right-5 z-20 bg-bg/85 px-3 py-1.5 text-xs tracking-caps text-ink backdrop-blur" data-testid="gallery-counter">
                    {String(active + 1).padStart(2, "0")} / {String(room.images.length).padStart(2, "0")}
                </span>
            </div>
            <div className="mt-4 grid grid-cols-3 gap-4 md:w-1/2">
                {room.images.map((src, i) => (
                    <button
                        key={src + i}
                        type="button"
                        onClick={() => setActive(i)}
                        aria-label={`${ui.rooms.showImage} ${i + 1}`}
                        aria-pressed={i === active}
                        data-testid={`gallery-thumb-${i}`}
                        className={`aspect-[4/3] overflow-hidden transition-opacity duration-500 ${i === active ? "opacity-100 ring-1 ring-ink ring-offset-2 ring-offset-bg" : "opacity-60 hover:opacity-100"}`}
                    >
                        <Img src={src} alt="" />
                    </button>
                ))}
            </div>
            <AnimatePresence>
                {viewer && <Lightbox images={slides} index={active} onIndex={setActive} onClose={() => setViewer(false)} />}
            </AnimatePresence>
        </section>
    );
}
