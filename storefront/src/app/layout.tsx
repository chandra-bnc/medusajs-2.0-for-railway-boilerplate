import { getBaseURL } from "@/lib/util/env"
import { Toaster } from "@medusajs/ui"
import { Analytics } from "@vercel/analytics/next"
import { Metadata } from "next"
import "@/styles/globals.css"

export const metadata: Metadata = {
  metadataBase: new URL(getBaseURL()),
  title: {
    default: "BeeMax - Premium Belgian Chocolate & Natural Honey Products",
    template: "%s | BeeMax"
  },
  description: "Discover BeeMax's premium Belgian chocolate waffle cones and natural honey products. Real Belgian chocolate, natural ingredients, maximum flavor.",
  openGraph: {
    title: "BeeMax - Premium Belgian Chocolate & Natural Honey Products",
    description: "Discover BeeMax's premium Belgian chocolate waffle cones and natural honey products. Real Belgian chocolate, natural ingredients, maximum flavor.",
    url: getBaseURL(),
    siteName: "BeeMax",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "BeeMax Belgian Chocolate Waffle Cones and Honey Products",
      }
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "BeeMax - Premium Belgian Chocolate & Natural Honey Products",
    description: "Discover BeeMax's premium Belgian chocolate waffle cones and natural honey products.",
    images: ["/og-image.png"],
  },
}

export default function RootLayout(props: { children: React.ReactNode }) {
  return (
    <html lang="en" data-mode="light">
      <body>
        <main className="relative">{props.children}</main>
        <Toaster className="z-[99999]" position="bottom-left" />
        <Analytics />
      </body>
    </html>
  )
}
