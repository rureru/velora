"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { EASE } from "@/lib/motion";

type Props = { children: ReactNode; className?: string; delay?: number; y?: number; as?: "div" | "li" | "article" };

/** Fades content up once it scrolls into view. */
export function Reveal({ children, className, delay = 0, y = 28, as = "div" }: Props) {
    const Comp = motion[as];
    return (
        <Comp
            className={className}
            initial={{ opacity: 0, y }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.12 }}
            transition={{ duration: 1.1, delay, ease: EASE }}
        >
            {children}
        </Comp>
    );
}
