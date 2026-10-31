"use client";

import { useSite } from "@/lib/site-context";
import { ButtonLink } from "@/components/ui/ButtonLink";

export default function NotFound() {
    const { ui } = useSite();
    return (
        <section className="container flex min-h-[80svh] flex-col items-start justify-center gap-8 pt-32" data-testid="not-found-page">
            <p className="font-serif text-8xl italic text-accent">404</p>
            <h1 className="text-5xl md:text-7xl">{ui.notFound.title}</h1>
            <p className="text-lg text-muted">{ui.notFound.body}</p>
            <ButtonLink href="/" testId="not-found-home-link">
                {ui.notFound.back}
            </ButtonLink>
        </section>
    );
}
