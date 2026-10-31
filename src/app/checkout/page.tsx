import type { Metadata } from "next";
import { CheckoutFlow } from "@/components/booking/BookingFlow";
export const metadata: Metadata = { title: "Checkout Preview | VELORA", description: "A frontend-only checkout experience demonstration." };
export default function CheckoutPage(){return <CheckoutFlow/>;}
