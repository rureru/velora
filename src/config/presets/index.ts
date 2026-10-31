import type { Preset, PresetId } from "../types";
import { forest } from "./forest";
import { desert } from "./desert";
import { coastal } from "./coastal";

export const presets: Record<PresetId, Preset> = { forest, desert, coastal };
