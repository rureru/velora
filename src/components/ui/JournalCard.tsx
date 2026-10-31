"use client";

import Link from "next/link";
import type { JournalPost } from "@/config/types";
import { useSite } from "@/lib/site-context";
import { Img } from "./Img";

type Props = { post: JournalPost; aspect?: string; large?: boolean };

export function JournalCard({ post, aspect = "aspect-[4/3]", large = false }: Props) {
    const { t, ui, date } = useSite();
    return (
        <Link
            href={`/journal/${post.slug}`}
            className={`group grid gap-8 ${large ? "md:grid-cols-12 md:items-center" : ""}`}
            data-testid={`journal-card-${post.slug}`}
        >
            <div className={`overflow-hidden bg-surface ${aspect} ${large ? "md:col-span-7" : ""}`}>
                <Img src={post.cover} alt={t(post.title)} zoom />
            </div>
            <div className={large ? "md:col-span-4 md:col-start-9" : ""}>
                <p className="text-xs font-medium uppercase tracking-caps text-muted">
                    <span className="text-accent">{t(post.category)}</span> · {date(post.date)} · {post.readMinutes} {ui.journal.minRead}
                </p>
                <h3 className={`mt-4 leading-[1.08] transition-colors duration-500 group-hover:text-accent ${large ? "text-4xl md:text-6xl" : "text-3xl md:text-4xl"}`}>
                    {t(post.title)}
                </h3>
                <p className="mt-4 text-base leading-relaxed text-muted">{t(post.excerpt)}</p>
                <span className="link-line mt-6">{ui.journal.read}</span>
            </div>
        </Link>
    );
}
