"use client";

import { useEffect, useState } from "react";
import { siteConfig } from "@/config/site";
import { useSite } from "./site-context";

/** Offers that haven't ended yet (all offers during server render, filtered after mount). */
export function useCurrentOffers() {
    const { preset } = useSite();
    const [today, setToday] = useState<string | null>(null);

    useEffect(() => {
        setToday(new Date().toISOString().slice(0, 10));
    }, []);

    return preset.offers.filter((o) => !siteConfig.hideExpiredOffers || !today || o.validTo >= today);
}
