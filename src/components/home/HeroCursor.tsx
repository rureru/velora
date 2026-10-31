"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useState, type RefObject } from "react";

/** Soft ring cursor shown only inside the hero on mouse devices. */
export function HeroCursor({ targetRef, label }: { targetRef: RefObject<HTMLElement | null>; label: string }) {
    const [enabled, setEnabled] = useState(false);
    const [visible, setVisible] = useState(false);
    const x = useMotionValue(-200);
    const y = useMotionValue(-200);
    const sx = useSpring(x, { stiffness: 140, damping: 22, mass: 0.6 });
    const sy = useSpring(y, { stiffness: 140, damping: 22, mass: 0.6 });

    useEffect(() => {
        const fine = window.matchMedia("(pointer: fine)").matches;
        const calm = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        setEnabled(fine && !calm);
    }, []);

    useEffect(() => {
        const el = targetRef.current;
        if (!el || !enabled) return;
        el.style.cursor = "none";
        const move = (e: MouseEvent) => {
            const r = el.getBoundingClientRect();
            x.set(e.clientX - r.left);
            y.set(e.clientY - r.top);
        };
        const enter = () => setVisible(true);
        const leave = () => setVisible(false);
        el.addEventListener("mousemove", move);
        el.addEventListener("mouseenter", enter);
        el.addEventListener("mouseleave", leave);
        return () => {
            el.style.cursor = "";
            el.removeEventListener("mousemove", move);
            el.removeEventListener("mouseenter", enter);
            el.removeEventListener("mouseleave", leave);
        };
    }, [enabled, targetRef, x, y]);

    if (!enabled) return null;
    return (
        <motion.div
            aria-hidden
            style={{ x: sx, y: sy }}
            animate={{ opacity: visible ? 1 : 0, scale: visible ? 1 : 0.6 }}
            transition={{ duration: 0.5 }}
            className="pointer-events-none absolute left-0 top-0 z-30 -ml-12 -mt-12 flex h-24 w-24 items-center justify-center rounded-full border border-white/70 bg-white/10 text-[10px] font-medium uppercase tracking-caps text-white backdrop-blur-[2px]"
        >
            {label}
        </motion.div>
    );
}
