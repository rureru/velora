# Demo content — replace before launch

Everything below is **fictional demo content** included to show the template working. Replace all of it with your client's real information.

## Fictional data (both presets)

| Item | Location in preset file |
| --- | --- |
| Property descriptor, all headlines and paragraphs | `brand.descriptor`, `copy.*` |
| Addresses ("Route des Mélèzes 14, Val Serein" / "Erg Amaya, Piste du Puits 3") | `contact.address` |
| Phone numbers (`+33 4 00 00 00 00`, `+212 5 00 00 00 00`) | `contact.phone` |
| Emails (`*.example` domains) | `contact.email` |
| Opening hours | `contact.hours` |
| Map coordinates | `contact.coordinates` |
| Booking links (`https://booking.example.com/…`) | `booking.mainUrl`, `rooms[].bookingUrl` |
| Prices and currency | `rooms[].priceFrom`, `booking.currency`, `booking.priceNote` |
| Social links (generic platform home pages) | `social` |
| Room names, sizes, beds, amenities | `rooms` |
| Experiences, durations, seasons | `experiences` |
| Team names and roles (Élise Marchand, Julien Arnaud, Inès Morel, Yasmine Alaoui, Karim Benali, Salma Idrissi) | `team` |
| Guest quotes and names | `testimonials` |
| Facts and figures (altitude, hectares, distances) | `copy.intro.facts`, `copy.location.facts` |
| Brand name "Velora" | `brand.name` |

Also review: `siteConfig.siteUrl` (`https://www.example.com`), `siteConfig.showPresetSwitcher` (set to `false`).

## Demo photography

Demo photos are **not bundled** — they load from Unsplash / Pexels for preview only. Their licences allow use on a website but not redistribution as part of a template, so every one must be replaced with the client's own photography (or images the client licenses directly).

People shown in the team section are stock models, not real staff.

### Forest & Mountain Lodge (`src/config/presets/forest.ts`)

| Slot | Source ID |
| --- | --- |
| Hero | Unsplash `photo-1527971179697-13dce75dfbd0` |
| Intro (arch) | Unsplash `photo-1627750168257-9a7d3965ef8b` |
| Intro (inset) | Unsplash `photo-1734599505058-6653a0d8d3ff` |
| Location | Unsplash `photo-1675458349418-b6e8215f1d6b` |
| Reservation CTA | Unsplash `photo-1531057228999-37933ba12c52` |
| Accommodations hero | Unsplash `photo-1727706572437-4fcda0cbd66f` |
| Experiences hero | Unsplash `photo-1758438919146-f3f59a6d2544` |
| About hero | Unsplash `photo-1453130141570-619edbe7af2a` |
| About architecture | Pexels `30708768` |
| About sustainability | Unsplash `photo-1769766160718-efc12335c588` |
| Contact hero | Unsplash `photo-1603109613299-ed3680959d26` |
| Rooms | Unsplash `photo-1734599511415-cb4a52aea2fe`, `photo-1789930153790-6ccf207aed1d`, Pexels `9890650`, plus images above |
| Experiences | Unsplash `photo-1660735698223-23a4edefa264`, `photo-1562050344-f7ad946cee35`, `photo-1509773896068-7fd415d91e2e`, `photo-1674883045511-244d45898fa2`, `photo-1758438919146-f3f59a6d2544` |
| Team | Unsplash `photo-1544005313-94ddf0286df2`, `photo-1616235931438-f67c5caed868`, `photo-1614204424926-196a80bf0be8` |

### Desert Eco-Resort (`src/config/presets/desert.ts`)

| Slot | Source ID |
| --- | --- |
| Hero | Unsplash `photo-1506147854445-5a3f534191f8` |
| Intro (arch) | Unsplash `photo-1760261799672-2469a6c4c6f3` |
| Intro (inset) | Unsplash `photo-1512432298996-6c5c15577db5` |
| Location | Unsplash `photo-1757438059025-7cc2c86107c1` |
| Reservation CTA | Unsplash `photo-1548272475-4a32d90e4f91` |
| Accommodations hero | Unsplash `photo-1783696177820-a0f8d10065b6` |
| Experiences hero | Unsplash `photo-1776319967759-2a6484370b94` |
| About hero | Unsplash `photo-1621795307430-3ff25aa08945` |
| About architecture | Unsplash `photo-1573691257041-9da551a70522` |
| About sustainability | Unsplash `photo-1685432780037-c174342e6a40` |
| Contact hero | Unsplash `photo-1611522135886-a632d94ff6ae` |
| Rooms | Unsplash `photo-1688999991151-d797021df975`, `photo-1762255121620-3ca4c551404c`, `photo-1783696521772-e3ba2c4ef0b5`, `photo-1787660916580-8e7d22040d45`, `photo-1768657659255-492a2d151115`, `photo-1786809614359-19ea5dc3ac01`, `photo-1523131082769-56577f690b57` |
| Experiences | Unsplash `photo-1488866022504-f2584929ca5f`, `photo-1688437307687-fe226bddfab1`, `photo-1780070955946-0936c858688e`, plus images above |
| Team | Unsplash `photo-1506863530036-1efeddceb993`, `photo-1649354680299-ed0d7c3cb786`, `photo-1674932668403-33398b81c92f` |

View any Unsplash image at `https://unsplash.com/photos/<id without "photo-">` and Pexels at `https://www.pexels.com/photo/<id>/`.

## Original assets included (safe to redistribute)

- VELORA logo mark (`src/components/ui/Logo.tsx`) and favicon (`src/app/icon.svg`)
- All source code, layouts and copywriting structure
