# Customisation guide

Everything a client sees comes from a handful of files. You should never need to edit components to rebrand the site.

| What | Where |
| --- | --- |
| Active preset, languages, form endpoint, demo switcher | `src/config/site.ts` |
| Brand, colours, contact, booking links, social, images, all property copy, rooms, experiences, team, quotes | `src/config/presets/<preset>.ts` |
| Interface text (buttons, labels, navigation) | `src/locales/<lang>.ts` |
| Fonts | `src/app/layout.tsx` |
| Favicon | `src/app/icon.svg` |

---

## 1. Choose a starting preset

Open `src/config/site.ts`:

```ts
activePreset: "forest",        // or "desert"
showPresetSwitcher: true,      // set to false for a client site
```

The footer preset switcher exists only for template demos. **Turn it off for production.**

The simplest workflow is to pick the preset closest to your property and edit that file in place. To create a new preset, duplicate `forest.ts`, rename the export and `id`, add the id to `PresetId` in `src/config/types.ts` and register it in `src/config/presets/index.ts`.

## 2. Branding

In your preset file:

```ts
brand: {
  name: "Velora",                                   // shown in header, footer, page titles
  descriptor: { en: "Forest & Mountain Lodge", fr: "…" },
  logo: "",                                         // e.g. "/logo.svg" — empty = built-in VELORA mark
},
```

To use your own logo, put the file in `/public` (create the folder if needed) and set `logo: "/logo.svg"`. An SVG or a transparent PNG about 36 px high works best.
Replace the favicon by editing or swapping `src/app/icon.svg` (any square SVG/PNG named `icon.*` works).

## 3. Colours

Each preset has a `theme` block. Use hex values; they are turned into CSS variables automatically.

| Token | Used for |
| --- | --- |
| `bg` | Page background |
| `surface` | Alternate section background, cards |
| `ink` | Main text, primary buttons |
| `muted` | Secondary text (keep ≥ 4.5:1 contrast with `bg`) |
| `accent` | Labels, active states, hover colour |
| `line` | Hairline borders |
| `deep` | Dark sections (marquee, footer, sustainability, mobile menu) |
| `onDeep` | Text on `deep` |
| `deepMuted` | Secondary text on `deep` |

Tip: check contrast at <https://webaim.org/resources/contrastchecker/>.

## 4. Fonts

Fonts are set in `src/app/layout.tsx` with `next/font/google`:

```ts
const serif = Cormorant_Garamond({ … variable: "--font-serif" });
const sans  = Manrope({ … variable: "--font-sans" });
```

Swap them for any Google Font (e.g. `Fraunces`, `Playfair_Display`, `DM_Sans`) — keep the same `variable` names and everything updates.

## 5. Contact details & map

```ts
contact: {
  address: ["Street 1", "Town, Postcode", "Country"],   // one line per entry
  phone: "+33 4 00 00 00 00",
  email: "stay@your-hotel.com",
  hours: { en: "…", fr: "…" },
  coordinates: { lat: 45.9237, lng: 6.8694 },          // drives the map pin
},
```

Find coordinates by right-clicking your location on Google Maps or OpenStreetMap.

## 6. Booking links

VELORA does not process bookings — every "Reserve" button opens your booking engine in a new tab.

- `booking.mainUrl` — header, hero and closing call-to-action buttons
- `rooms[].bookingUrl` — the Reserve button on each room page (deep-link to that room if your engine supports it)
- `booking.currency` — ISO code (`EUR`, `USD`, `GBP`, `CHF`, `MAD`…) used to format "from" prices
- `booking.priceNote` — small print shown under the price

Works with any engine that has a public URL: Cloudbeds, SiteMinder, Mews, Little Hotelier, Booking.com, Airbnb, a WhatsApp link, etc.

## 7. Rooms

Each item in `rooms`:

```ts
{
  slug: "larch-suite",            // URL: /accommodations/larch-suite (lowercase, hyphens)
  type: "suite",                  // must match an id in roomTypes (used by the filters)
  name: { en, fr }, tagline: { en, fr }, description: { en, fr },
  size: 48,                       // m²
  guests: 3,
  beds: { en, fr }, view: { en, fr },
  priceFrom: 420,                 // number, formatted with booking.currency
  images: ["…", "…", "…"],        // first image = card cover; all appear in the gallery
  amenities: [{ en, fr }, …],
  bookingUrl: "https://…",
  featured: true,                 // first three featured rooms appear on the home page
}
```

`roomTypes` defines the filter buttons on the Accommodations page. Types with no rooms are hidden automatically.

## 8. Experiences, team, quotes

- `experiences[]` — title, category, summary, duration, season and image. The first five populate the home-page bento grid.
- `team[]` — name, role and portrait (portraits display in black & white and colour on hover).
- `testimonials[]` — quote, author and origin.

## 9. Page copy

All headlines and paragraphs live in `copy` inside the preset: `hero`, `intro`, `marquee`, `location`, `cta`, `accommodations`, `experiences`, `about`, `contact`.
`hero.lines` is an array — each entry is one line of the animated headline (2–3 short lines look best).

## 10. Images

Every image is a plain URL string. To use your own photos:

1. Put them in `/public/images/` (e.g. `/public/images/hero.jpg`).
2. Reference them as `"/images/hero.jpg"` in the preset.

Recommended sizes: hero and full-bleed images 2400 px wide; portraits and cards 1600 px; team 900 px. Export as WebP or high-quality JPEG (≈ 300–500 KB each).
Remove the `unsplash(…)` / `pexels(…)` helpers once all demo images are replaced.

## 11. Languages

Text that belongs to the property is written as `{ en: "…", fr: "…" }` in the preset. Interface text lives in `src/locales/`.

**Change the second language** (e.g. to German):
1. Rename `fr.ts` to `de.ts`, translate it and export `de`.
2. In `src/config/types.ts` change `Locale = "en" | "fr"` to `"en" | "de"`.
3. In `src/locales/index.ts` register `de`.
4. In `src/config/site.ts` update `locales` and `localeLabels`.
5. TypeScript will now flag every `fr:` key in your preset — rename them to `de:`.

**Add a third language**: same steps, but add rather than replace (`Locale = "en" | "fr" | "de"`).

**Single language only**: set `locales: ["en"]` — the switcher hides the extra option. (Keep the type as-is or remove `fr` everywhere.)

The visitor's choice is remembered in their browser.

## 12. Contact form

By default the form opens the visitor's email app with a pre-filled message to `contact.email` — no setup required.

To receive messages directly:
1. Create a free form at <https://formspree.io> (or Getform, Basin, FormSubmit — any service that accepts a POST).
2. Paste its endpoint into `src/config/site.ts`:
   ```ts
   formEndpoint: "https://formspree.io/f/abcdwxyz",
   ```
Fields sent: `name`, `email`, `arrival`, `guests`, `message` (plus a hidden `_gotcha` spam trap).

## 13. Metadata / SEO basics

Page titles and the default description come from the active preset (`brand.name`, `brand.descriptor`, `copy.hero.sub`). Set `siteConfig.siteUrl` to your live domain so social previews resolve correctly.

## 14. Motion

Motion values live in components and `src/lib/motion.ts` (`EASE`). Visitors with "reduce motion" enabled get no smooth scrolling, no parallax transforms, no marquee animation and no custom cursor. To slow the marquee, edit `.marquee-track` in `src/app/globals.css`.
