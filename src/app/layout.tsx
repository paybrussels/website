import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { LanguageProvider } from "@/components/language-provider";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://pay.brussels"),
  title: {
    default: "Pay for Brussels — A coffee for someone you haven’t met yet",
    template: "%s · Pay for Brussels",
  },
  description:
    "Pay for Brussels brings the café suspendu into the digital age. Donations go into a shared, public account that people in need spend at neighborhood shops, with dignity.",
  openGraph: {
    title: "Pay for Brussels",
    description:
      "The café suspendu, city-wide. A shared, public donation account for Brussels.",
    url: "https://pay.brussels",
    siteName: "Pay for Brussels",
    locale: "en_BE",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={poppins.variable}>
      <body className="font-sans">
        <LanguageProvider>
          <div className="flex min-h-screen flex-col">
            <SiteHeader />
            <main className="flex-1">{children}</main>
            <SiteFooter />
          </div>
        </LanguageProvider>
      </body>
    </html>
  );
}
