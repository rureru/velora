import type { Metadata } from "next";
import { BookingFlow } from "@/components/booking/BookingFlow";
export const metadata: Metadata = { title: "Plan Your Stay | VELORA", description: "Explore accommodation and dates in the VELORA booking interface demo." };
export default function BookingPage(){return <BookingFlow/>;}
