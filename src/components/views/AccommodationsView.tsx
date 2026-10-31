"use client";

import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useSite } from "@/lib/site-context";
import { EASE } from "@/lib/motion";
import { PageHero } from "@/components/ui/PageHero";
import { RoomCard } from "@/components/ui/RoomCard";

export function AccommodationsView() {
    const { preset, t, ui } = useSite();
    const [filter, setFilter] = useState("all");
    const types = preset.roomTypes.filter((rt) => preset.rooms.some((r) => r.type === rt.id));
    const activeFilter = filter === "all" || types.some((x) => x.id === filter) ? filter : "all";
    const rooms = useMemo(
        () => (activeFilter === "all" ? preset.rooms : preset.rooms.filter((r) => r.type === activeFilter)),
        [activeFilter, preset.rooms]
    );

    return (
        <>
            <PageHero
                testId="accommodations-hero"
                eyebrow={ui.nav.accommodations}
                title={t(preset.copy.accommodations.title)}
                intro={t(preset.copy.accommodations.intro)}
                image={preset.images.accommodationsHero}
            />
            <section className="section container !pt-16 md:!pt-24">
                <div className="flex flex-col gap-6 border-b border-line pb-6 md:flex-row md:items-center md:justify-between">
                    <div role="group" aria-label={ui.rooms.filterLabel} className="flex flex-wrap gap-2" data-testid="room-filters">
                        {[{ id: "all", label: null }, ...types].map((f) => {
                            const active = activeFilter === f.id;
                            return (
                                <button
                                    key={f.id}
                                    type="button"
                                    onClick={() => setFilter(f.id)}
                                    aria-pressed={active}
                                    data-testid={`room-filter-${f.id}`}
                                    className={`border px-5 py-2.5 text-xs font-medium uppercase tracking-caps transition-colors duration-500 ${active ? "border-ink bg-ink text-bg" : "border-line text-ink hover:border-ink"
                                        }`}
                                >
                                    {f.label ? t(f.label) : ui.rooms.all}
                                </button>
                            );
                        })}
                    </div>
                    <p className="text-xs uppercase tracking-caps text-muted" data-testid="room-count">
                        {String(rooms.length).padStart(2, "0")} {ui.rooms.count}
                    </p>
                </div>

                <motion.div layout className="mt-16 grid gap-x-8 gap-y-20 md:grid-cols-2 lg:grid-cols-3">
                    <AnimatePresence initial={false}>
                        {rooms.map((room, i) => (
                            <motion.div
                                key={room.slug}
                                layout
                                initial={{ opacity: 0, y: 24 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.8, ease: EASE }}
                                className={i % 3 === 1 ? "lg:mt-24" : ""}
                            >
                                <RoomCard room={room} arch={i % 3 === 0} />
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>
            </section>
        </>
    );
}
