"use client";

import { motion } from "framer-motion";
import { EASE } from "@/lib/motion";

type Props = { lines: string[]; as?: "h1" | "h2"; className?: string; delay?: number; testId?: string };

/** Headline whose lines slide up from behind a mask, one after another. */
export function MaskedLines({ lines, as = "h1", className = "", delay = 0, testId }: Props) {
    const Tag = as;
    return (
        <Tag className={className} data-testid={testId}>
            {lines.map((line, i) => (
                <span key={`${line}-${i}`} className="block overflow-hidden pb-[0.12em] -mb-[0.12em]">
                    <motion.span
                        className="block"
                        initial={{ y: "110%" }}
                        animate={{ y: "0%" }}
                        transition={{ duration: 1.4, delay: delay + i * 0.14, ease: EASE }}
                    >
                        {line}
                    </motion.span>
                </span>
            ))}
        </Tag>
    );
}
