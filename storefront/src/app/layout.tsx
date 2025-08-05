import { getBaseURL } from "@/lib/util/env"
import { Toaster } from "@medusajs/ui"
import { Analytics } from "@vercel/analytics/next"
import { GeistSans } from "geist/font/sans"
import { Metadata } from "next"
import "@/styles/globals.css"

export const metadata: Metadata = {
  metadataBase: new URL(getBaseURL()),
  title: {
    default: "Monty's B2B Portal - Pure Plant-Based Dairy Essentials",
    template: "%s | Monty's B2B Portal"
  },
  description: "Shop wholesale pure plant-based cream cheese & butter made with cashews. The cleanest ingredients for really living.",
  openGraph: {
    title: "Monty's B2B Portal - Pure Plant-Based Dairy Essentials",
    description: "Shop wholesale pure plant-based cream cheese & butter made with cashews. The cleanest ingredients for really living.",
    url: getBaseURL(),
    siteName: "Monty's B2B Portal",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Monty's Pure Plant-Based Cream Cheese and Butter",
      }
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Monty's B2B Portal - Pure Plant-Based Dairy Essentials",
    description: "Shop wholesale pure plant-based cream cheese & butter made with cashews.",
    images: ["/og-image.png"],
  },
}

export default function RootLayout(props: { children: React.ReactNode }) {
  return (
    <html lang="en" data-mode="light" className={GeistSans.variable}>
      <body>
        <main className="relative">{props.children}</main>
        <Toaster className="z-[99999]" position="bottom-left" />
        <Analytics />
      </body>
    </html>
  )
}
