import "./globals.css";
import type { Metadata } from "next";
import { poppins } from "@/app/fonts";
import { PageLayout } from "@/components/PageLayout";
import { OverscrollFillerBottom } from "@/components/OverscrollFillerBottom";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";

export const metadata: Metadata = {
  title: "juiceo.me",
  description: "Juuso's personal website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <SpeedInsights />
        <Analytics />
        <PageLayout>{children}</PageLayout>
        <OverscrollFillerBottom />
      </body>
    </html>
  );
}
