"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import type { JournalBlock, JournalPost } from "@/config/types";
import { useSite } from "@/lib/site-context";
import { Img } from "@/components/ui/Img";
import { Reveal } from "@/components/ui/Reveal";
import { MaskedLines } from "@/components/ui/MaskedLines";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { JournalCard } from "@/components/ui/JournalCard";

export function JournalPostView({ slug }: { slug: string }) {
    const { preset, ui } = useSite();
    const post = preset.journal.find((p) => p.slug === slug);
    if (!post) {
        return (
            <section className="container flex min-h-[70svh] flex-col items-start justify-center gap-8 pt-32" data-testid="journal-not-found">
                <h1 className="text-4xl md:text-6xl">{ui.journal.notFound}</h1>
                <ButtonLink href="/journal" testId="journal-not-found-back">
                    {ui.journal.back}
                </ButtonLink>
            </section>
        );
    }
    return <Post post={post} key={post.slug} />;
}

function Post({ post }: { post: JournalPost }) {
    const { preset, t, ui, date } = useSite();
    const more = preset.journal.filter((p) => p.slug !== post.slug).slice(0, 2);
    let firstParagraph = true;

    return (
        <article data-testid={`journal-post-${post.slug}`}>
            <header className="container pt-32 md:pt-40">
                <Link href="/journal" className="link-line text-muted" data-testid="journal-back-link">
                    <ArrowLeft className="h-3.5 w-3.5" strokeWidth={1.5} aria-hidden /> {ui.journal.back}
                </Link>
                <div className="mt-12 max-w-5xl">
                    <p className="text-xs font-medium uppercase tracking-caps text-muted">
                        <span className="text-accent">{t(post.category)}</span> · <time dateTime={post.date}>{date(post.date)}</time> · {post.readMinutes} {ui.journal.minRead}
                    </p>
                    <MaskedLines lines={[t(post.title)]} className="display mt-6 text-5xl sm:text-6xl lg:text-7xl" testId="journal-post-title" />
                    <p className="mt-8 max-w-2xl font-serif text-2xl italic leading-snug text-muted">{t(post.excerpt)}</p>
                    <p className="mt-6 text-xs uppercase tracking-caps">
                        {ui.journal.by} {post.author}
                    </p>
                </div>
            </header>

            <div className="container py-14 md:py-20">
                <div className="aspect-[4/5] overflow-hidden bg-surface sm:aspect-[16/9]">
                    <Img src={post.cover} alt={t(post.title)} eager />
                </div>
            </div>

            <div className="container grid pb-24 md:grid-cols-12 md:pb-36">
                <div className="space-y-8 md:col-span-7 md:col-start-4" data-testid="journal-post-body">
                    {post.body.map((block, i) => {
                        const isFirst = block.type === "p" && firstParagraph;
                        if (block.type === "p") firstParagraph = false;
                        return (
                            <Reveal key={i}>
                                <Block block={block} dropCap={isFirst} />
                            </Reveal>
                        );
                    })}
                </div>
            </div>

            {more.length > 0 && (
                <section className="section border-t border-line bg-surface">
                    <div className="container">
                        <h2 className="text-4xl md:text-5xl">{ui.journal.more}</h2>
                        <div className="mt-16 grid gap-16 md:grid-cols-2 md:gap-10">
                            {more.map((p) => (
                                <JournalCard key={p.slug} post={p} />
                            ))}
                        </div>
                    </div>
                </section>
            )}
        </article>
    );
}

function Block({ block, dropCap }: { block: JournalBlock; dropCap: boolean }) {
    const { t } = useSite();
    switch (block.type) {
        case "h":
            return <h2 className="pt-6 text-3xl md:text-4xl">{t(block.text)}</h2>;
        case "quote":
            return (
                <blockquote className="border-l border-accent py-2 pl-8 font-serif text-3xl font-light italic leading-snug text-ink md:text-4xl">
                    “{t(block.text)}”
                </blockquote>
            );
        case "image":
            return (
                <figure className="md:-mx-24">
                    <div className="aspect-[4/3] overflow-hidden bg-surface">
                        <Img src={block.src} alt={block.caption ? t(block.caption) : ""} />
                    </div>
                    {block.caption && <figcaption className="mt-3 text-xs uppercase tracking-caps text-muted">{t(block.caption)}</figcaption>}
                </figure>
            );
        default:
            return (
                <p
                    className={`text-lg leading-relaxed text-ink/90 ${dropCap ? "first-letter:float-left first-letter:mr-3 first-letter:font-serif first-letter:text-7xl first-letter:leading-[0.8] first-letter:text-accent" : ""
                        }`}
                >
                    {t(block.text)}
                </p>
            );
    }
}
