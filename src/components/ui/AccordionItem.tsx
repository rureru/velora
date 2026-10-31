"use client";

import { useId, useState } from "react";
import { Plus } from "lucide-react";

type Props = { question: string; answer: string; testId: string };

/** Expandable question; the panel height animates via grid rows. */
export function AccordionItem({ question, answer, testId }: Props) {
    const [open, setOpen] = useState(false);
    const id = useId();
    return (
        <div className="border-b border-line" data-testid={testId}>
            <h3 className="font-sans">
                <button
                    type="button"
                    id={`${id}-btn`}
                    aria-expanded={open}
                    aria-controls={`${id}-panel`}
                    onClick={() => setOpen((o) => !o)}
                    className="flex w-full items-center justify-between gap-6 py-6 text-left"
                    data-testid={`${testId}-toggle`}
                >
                    <span className="font-serif text-2xl leading-snug md:text-[1.7rem]">{question}</span>
                    <span className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-line transition-[transform,background-color,color] duration-500 ease-lux ${open ? "rotate-45 bg-ink text-bg" : ""}`}>
                        <Plus className="h-4 w-4" strokeWidth={1.4} aria-hidden />
                    </span>
                </button>
            </h3>
            <div
                id={`${id}-panel`}
                role="region"
                aria-labelledby={`${id}-btn`}
                className={`grid transition-[grid-template-rows,opacity] duration-700 ease-lux ${open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}
            >
                <div className="overflow-hidden" inert={!open}>
                    <p className="max-w-2xl pb-8 text-base leading-relaxed text-muted md:text-lg" data-testid={`${testId}-answer`}>
                        {answer}
                    </p>
                </div>
            </div>
        </div>
    );
}
