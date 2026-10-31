"use client";

import { useState, type FormEvent } from "react";
import { siteConfig } from "@/config/site";
import { useSite } from "@/lib/site-context";

type Status = "idle" | "sending" | "sent" | "error" | "mailto";

const field =
    "w-full border-0 border-b border-line bg-transparent px-0 py-4 text-base text-ink placeholder:text-muted/80 transition-colors duration-300 focus:border-ink focus:outline-none focus:ring-0";

/** Posts to `siteConfig.formEndpoint` (e.g. Formspree). Without an endpoint, opens the visitor's email app. */
export function ContactForm() {
    const { ui, preset } = useSite();
    const [status, setStatus] = useState<Status>("idle");

    const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const form = e.currentTarget;
        const data = new FormData(form);

        if (!siteConfig.formEndpoint) {
            const body = [
                `${ui.contact.name}: ${data.get("name")}`,
                `${ui.contact.yourEmail}: ${data.get("email")}`,
                data.get("arrival") ? `${ui.contact.arrival}: ${data.get("arrival")}` : "",
                data.get("guests") ? `${ui.contact.guests}: ${data.get("guests")}` : "",
                "",
                String(data.get("message") ?? ""),
            ]
                .filter((l) => l !== null)
                .join("\n");
            window.location.href = `mailto:${preset.contact.email}?subject=${encodeURIComponent(ui.contact.subject)}&body=${encodeURIComponent(body)}`;
            setStatus("mailto");
            return;
        }

        setStatus("sending");
        try {
            const res = await fetch(siteConfig.formEndpoint, { method: "POST", body: data, headers: { Accept: "application/json" } });
            if (!res.ok) throw new Error(String(res.status));
            form.reset();
            setStatus("sent");
        } catch {
            setStatus("error");
        }
    };

    const message = { sent: ui.contact.sent, error: ui.contact.error, mailto: ui.contact.mailto }[status as "sent" | "error" | "mailto"];

    return (
        <form onSubmit={onSubmit} className="grid gap-2 sm:grid-cols-2 sm:gap-x-8" data-testid="contact-form" noValidate={false}>
            <label className="block">
                <span className="sr-only">{ui.contact.name}</span>
                <input name="name" required autoComplete="name" placeholder={ui.contact.name} className={field} data-testid="contact-name-input" />
            </label>
            <label className="block">
                <span className="sr-only">{ui.contact.yourEmail}</span>
                <input name="email" type="email" required autoComplete="email" placeholder={ui.contact.yourEmail} className={field} data-testid="contact-email-input" />
            </label>
            <label className="block">
                <span className="block pt-4 text-xs uppercase tracking-caps text-muted">{ui.contact.arrival}</span>
                <input name="arrival" type="date" className={`${field} !pt-2`} data-testid="contact-arrival-input" />
            </label>
            <label className="block">
                <span className="block pt-4 text-xs uppercase tracking-caps text-muted">{ui.contact.guests}</span>
                <input name="guests" type="number" min={1} max={20} inputMode="numeric" className={`${field} !pt-2`} data-testid="contact-guests-input" />
            </label>
            <label className="block sm:col-span-2">
                <span className="sr-only">{ui.contact.message}</span>
                <textarea name="message" required rows={5} placeholder={ui.contact.message} className={`${field} resize-none`} data-testid="contact-message-input" />
            </label>
            <input type="text" name="_gotcha" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden />
            <div className="mt-8 flex flex-col gap-6 sm:col-span-2 sm:flex-row sm:items-center sm:justify-between">
                <button
                    type="submit"
                    disabled={status === "sending"}
                    className="inline-flex items-center justify-center bg-ink px-8 py-4 text-xs font-medium uppercase tracking-caps text-bg transition-colors duration-500 hover:bg-accent disabled:opacity-60"
                    data-testid="contact-submit-button"
                >
                    {status === "sending" ? ui.contact.sending : ui.contact.send}
                </button>
                {message && (
                    <p role="status" className={`text-sm ${status === "error" ? "text-red-800" : "text-accent"}`} data-testid="contact-form-status">
                        {message}
                    </p>
                )}
            </div>
        </form>
    );
}
