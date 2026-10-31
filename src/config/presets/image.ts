/** DEMO IMAGE HELPERS — demo photos load from Unsplash / Pexels and are not bundled. Replace with your own. */
export const unsplash = (id: string, w = 1800) =>
    `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=80`;

/** 1200×630 crop for link previews. */
export const unsplashOg = (id: string) =>
    `https://images.unsplash.com/${id}?auto=format&fit=crop&w=1200&h=630&q=80`;

export const pexels = (id: number, w = 1600) =>
    `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=${w}`;
