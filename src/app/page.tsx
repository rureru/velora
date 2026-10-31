import { Hero } from "@/components/home/Hero";
import { Intro } from "@/components/home/Intro";
import { FeaturedRooms } from "@/components/home/FeaturedRooms";
import { ExperiencesBento } from "@/components/home/ExperiencesBento";
import { OffersStrip } from "@/components/home/OffersStrip";
import { Testimonials } from "@/components/home/Testimonials";
import { GalleryBand } from "@/components/home/GalleryBand";
import { Location } from "@/components/home/Location";
import { JournalTeaser } from "@/components/home/JournalTeaser";
import { ReserveCTA } from "@/components/home/ReserveCTA";
import { Marquee } from "@/components/ui/Marquee";

export default function HomePage() {
    return (
        <>
            <Hero />
            <Intro />
            <FeaturedRooms />
            <Marquee />
            <ExperiencesBento />
            <OffersStrip />
            <Testimonials />
            <GalleryBand />
            <Location />
            <JournalTeaser />
            <ReserveCTA />
        </>
    );
}
