import type { Metadata } from "next";
import { presets } from "@/config/presets";
import { RoomDetailView } from "@/components/views/RoomDetailView";
import { pageMeta, seoLocale, seoPreset } from "@/lib/seo";

type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
    return Object.values(presets).flatMap((p) => p.rooms.map((r) => ({ slug: r.slug })));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
    const { slug } = await params;
    const room = seoPreset.rooms.find((r) => r.slug === slug);
    if (!room) return pageMeta({ title: "Accommodation", path: `/accommodations/${slug}` });
    return pageMeta({
        title: room.name[seoLocale],
        description: `${room.tagline[seoLocale]}. ${room.description[seoLocale]}`.slice(0, 200),
        image: room.images[0],
        path: `/accommodations/${slug}`,
    });
}

export default async function RoomPage({ params }: Params) {
    const { slug } = await params;
    return <RoomDetailView slug={slug} />;
}
