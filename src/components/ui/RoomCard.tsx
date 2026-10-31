"use client";

import Link from "next/link";
import type { Room } from "@/config/types";
import { useSite } from "@/lib/site-context";
import { Img } from "./Img";

type Props = { room: Room; aspect?: string; arch?: boolean; index?: number };

export function RoomCard({ room, aspect = "aspect-[4/5]", arch = false, index }: Props) {
    const { t, ui, price, preset } = useSite();
    const typeLabel = preset.roomTypes.find((r) => r.id === room.type)?.label;
    return (
        <Link href={`/accommodations/${room.slug}`} className="group block" data-testid={`room-card-${room.slug}`}>
            <div className={`relative overflow-hidden bg-surface ${aspect} ${arch ? "rounded-arch" : ""}`}>
                <Img src={room.images[0]} alt={t(room.name)} zoom />
                {index !== undefined && (
                    <span className="absolute left-5 top-5 font-serif text-sm italic text-white/90 [text-shadow:0_1px_8px_rgb(0_0_0/0.5)]">
                        {String(index + 1).padStart(2, "0")}
                    </span>
                )}
            </div>
            <div className="mt-6 flex items-start justify-between gap-6">
                <div>
                    {typeLabel && <p className="text-xs font-medium uppercase tracking-caps text-muted">{t(typeLabel)}</p>}
                    <h3 className="mt-2 text-3xl leading-tight transition-colors duration-500 group-hover:text-accent">{t(room.name)}</h3>
                    <p className="mt-2 text-sm text-muted">
                        {room.size} m² · {ui.common.upToGuests} {room.guests} {ui.common.guests.toLowerCase()}
                    </p>
                </div>
                <p className="shrink-0 pt-1 text-right text-sm">
                    <span className="block text-xs uppercase tracking-caps text-muted">{ui.common.from}</span>
                    <span className="font-serif text-2xl">{price(room.priceFrom)}</span>
                </p>
            </div>
        </Link>
    );
}
