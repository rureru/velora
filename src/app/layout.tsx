import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/config/site";
import { presets } from "@/config/presets";
import { themeVars } from "@/lib/theme";
import { SiteProvider } from "@/lib/site-context";
import { Header } from "@/components/layouts/Header";
import { Footer } from "@/components/layouts/Footer";
import { SmoothScroll } from "@/components/layouts/SmoothScroll";
import { lodgingJsonLd, pageMeta } from "@/lib/seo";

const serif = Cormorant_Garamond({
    subsets: ["latin"],
    weight: ["300", "400", "500"],
    style: ["normal", "italic"],
    variable: "--font-serif",
    display: "swap",
});

const sans = Manrope({
    subsets: ["latin"],
    weight: ["300", "400", "500", "600"],
    variable: "--font-sans",
    display: "swap",
});

const preset = presets[siteConfig.activePreset];
const locale = siteConfig.defaultLocale;

export const metadata: Metadata = {
    ...pageMeta(),
    metadataBase: new URL(siteConfig.siteUrl),
    title: {
        default: preset.seo.title[locale],
        template: `%s — ${preset.brand.name}`,
    },
};

export const viewport: Viewport = {
    themeColor: preset.theme.bg,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang={locale} className={`${serif.variable} ${sans.variable}`} style={themeVars(preset.theme)}>
            <body className="grain">
                <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(lodgingJsonLd()) }} />
                <SiteProvider>
                    <SmoothScroll />
                    <Header />
                    <main id="main">{children}</main>
                    <Footer />
                </SiteProvider>
            </body>
        </html>
    );
}
