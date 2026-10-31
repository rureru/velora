import type { Locale } from "@/config/types";
import { en, type UIStrings } from "./en";
import { fr } from "./fr";

export const dictionaries: Record<Locale, UIStrings> = { en, fr };
export type { UIStrings };
