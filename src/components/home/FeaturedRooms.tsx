"use client";

import { useSite } from "@/lib/site-context";
import { Reveal } from "@/components/ui/Reveal";
import { RoomCard } from "@/components/ui/RoomCard";
import { ButtonLink } from "@/components/ui/ButtonLink";

const layout = [
    { col: "md:col-span-5", aspect: "aspect-[3/4]", arch: true },
    { col: "md:col-span-3 md:col-start-7 md:mt-48", aspect: "aspect-[3/4]", arch: false },
    { col: "md:col-span-3 md:col-start-10 md:mt-16", aspect: "aspect-[4/5]", arch: false },
];

export function FeaturedRooms() {
    const { preset, ui } = useSite();
    const featured = preset.rooms.filter((r) => r.featured).slice(0, 3);
    const rooms = featured.length ? featured : preset.rooms.slice(0, 3);

    return (
        <section className="section bg-surface" data-testid="featured-rooms-section">
            <div className="container">
                <Reveal className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
                    <div>
                        <p className="eyebrow text-accent">No. 02 — {ui.home.roomsLabel}</p>
                        <h2 className="mt-8 max-w-2xl text-4xl leading-[1.05] md:text-6xl">{ui.home.roomsTitle}</h2>
                    </div>
                    <ButtonLink href="/accommodations" variant="line" testId="featured-rooms-view-all">
                        {ui.common.viewAll}
                    </ButtonLink>
                </Reveal>
                <div className="mt-16 grid gap-16 md:mt-24 md:grid-cols-12 md:gap-x-8 md:gap-y-0">
                    {rooms.map((room, i) => (
                        <Reveal key={room.slug} className={layout[i]?.col} delay={i * 0.12}>
                            <RoomCard room={room} aspect={layout[i]?.aspect} arch={layout[i]?.arch} index={i} />
                        </Reveal>
                    ))}
                </div>
            </div>
        </section>
    );
}
