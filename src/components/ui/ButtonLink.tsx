"use client";

import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import type { ReactNode } from "react";
import { useSite } from "@/lib/site-context";

type Variant = "solid" | "outline" | "line";
type Tone = "dark" | "light";

type Props = {
    href: string;
    children: ReactNode;
    variant?: Variant;
    tone?: Tone;
    external?: boolean;
    testId?: string;
    className?: string;
};

const styles: Record<Variant, Record<Tone, string>> = {
    solid: {
        dark: "bg-ink text-bg hover:bg-accent",
        light: "bg-ondeep text-deep hover:bg-white",
    },
    outline: {
        dark: "border border-ink/70 text-ink hover:bg-ink hover:text-bg",
        light: "border border-ondeep/70 text-ondeep hover:bg-ondeep hover:text-deep",
    },
    line: { dark: "text-ink", light: "text-ondeep" },
};

export function ButtonLink({ href, children, variant = "solid", tone = "dark", external, testId, className = "" }: Props) {
    const { ui } = useSite();
    const Icon = external ? ArrowUpRight : ArrowRight;
    const base =
        variant === "line"
            ? "link-line"
            : "group/btn inline-flex items-center justify-center gap-3 px-7 py-4 text-xs font-medium uppercase tracking-caps transition-colors duration-500";
    const cls = `${base} ${styles[variant][tone]} ${className}`;
    const inner = (
        <>
            <span>{children}</span>
            <Icon className="h-3.5 w-3.5 transition-transform duration-500 group-hover/btn:translate-x-1" strokeWidth={1.5} aria-hidden />
            {external && <span className="sr-only">{ui.common.opensNewTab}</span>}
        </>
    );
    if (external) {
        return (
            <a href={href} target="_blank" rel="noopener noreferrer" className={cls} data-testid={testId}>
                {inner}
            </a>
        );
    }
    return (
        <Link href={href} className={cls} data-testid={testId}>
            {inner}
        </Link>
    );
}
