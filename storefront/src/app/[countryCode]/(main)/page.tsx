import { listRegions } from "@/lib/data/regions"
import FeaturedProducts from "@/modules/home/components/featured-products"
import HeroEnhanced from "@/modules/home/components/hero-enhanced"
import TinyBitesSection from "@/modules/home/components/tiny-bites-section"
import DiscoverJoySection from "@/modules/home/components/discover-joy-section"
import DubaiChocolateSection from "@/modules/home/components/dubai-chocolate-section"
import CompanyPresentation from "@/modules/home/components/company-presentation"
import SkeletonFeaturedProducts from "@/modules/skeletons/templates/skeleton-featured-products"
import { Metadata } from "next"
import { Suspense } from "react"

export const dynamicParams = true

export const metadata: Metadata = {
  title: "BeeMax - Premium Belgian Chocolate & Natural Honey Products",
  description:
    "Discover BeeMax's premium Belgian chocolate waffle cones and natural honey products. Real Belgian chocolate, natural ingredients, maximum flavor.",
}

export async function generateStaticParams() {
  const countryCodes = await listRegions().then(
    (regions) =>
      regions
        ?.map((r) => r.countries?.map((c) => c.iso_2))
        .flat()
        .filter(Boolean) as string[]
  )
  return countryCodes.map((countryCode) => ({ countryCode }))
}

export default async function Home(props: {
  params: Promise<{ countryCode: string }>
}) {
  const params = await props.params

  const { countryCode } = params

  return (
    <div className="flex flex-col">
      <HeroEnhanced />
      <TinyBitesSection />
      <DiscoverJoySection />
      <DubaiChocolateSection />
      <CompanyPresentation />
      <Suspense fallback={<SkeletonFeaturedProducts />}>
        <FeaturedProducts countryCode={countryCode} />
      </Suspense>
    </div>
  )
}