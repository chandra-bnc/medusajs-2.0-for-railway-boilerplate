import { listRegions } from "@/lib/data/regions"
import FeaturedProducts from "@/modules/home/components/featured-products"
import Hero from "@/modules/home/components/hero"
// import BrandIntro from "@/modules/home/components/brand-intro"
// import FeaturedCollections from "@/modules/home/components/featured-collections"
// import Testimonials from "@/modules/home/components/testimonials"
// import ValuesSection from "@/modules/home/components/values-section"
import SkeletonFeaturedProducts from "@/modules/skeletons/templates/skeleton-featured-products"
import { Metadata } from "next"
import { Suspense } from "react"

export const dynamicParams = true

export const metadata: Metadata = {
  title: "BeeMax - Premium Belgian Chocolate & Natural Honey Products",
  description:
    "Discover BeeMax's premium Belgian chocolate waffle cones and natural honey products. Real Belgian chocolate, natural ingredients, maximum flavor. Shop now!",
}

export async function generateStaticParams() {
  try {
    const countryCodes = await listRegions().then(
      (regions) =>
        regions
          ?.map((r) => r.countries?.map((c) => c.iso_2))
          .flat()
          .filter(Boolean) as string[]
    )
    return countryCodes.map((countryCode) => ({ countryCode }))
  } catch (error) {
    console.error("Error in generateStaticParams:", error)
    return []
  }
}

export default async function Home(props: {
  params: Promise<{ countryCode: string }>
}) {
  try {
    const params = await props.params
    const { countryCode } = params

    return (
      <div className="flex flex-col">
        <Hero />
        {/* <BrandIntro />
        <FeaturedCollections />
        <Testimonials />
        <ValuesSection /> */}
        <div className="py-16 bg-gray-50">
          <div className="content-container">
            <h2 className="text-2xl font-bold mb-4">Welcome to BeeMax</h2>
            <p>Premium Belgian Chocolate & Natural Honey Products</p>
          </div>
        </div>
        <Suspense fallback={<SkeletonFeaturedProducts />}>
          <FeaturedProducts countryCode={countryCode} />
        </Suspense>
      </div>
    )
  } catch (error) {
    console.error("Error in Home component:", error)
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] p-8">
        <h1 className="text-2xl mb-4">Error loading page</h1>
        <p className="text-gray-600">Please try refreshing the page</p>
      </div>
    )
  }
}
