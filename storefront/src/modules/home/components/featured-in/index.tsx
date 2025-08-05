import { Heading, Text } from "@medusajs/ui"
import Image from "next/image"

const FeaturedIn = () => {
  return (
    <section className="py-16 small:py-20 bg-white">
      <div className="content-container">
        <div className="text-center mb-12">
          <Text className="text-[#8B7355] uppercase tracking-wider text-sm mb-4">
            As Seen In
          </Text>
          <Heading level="h2" className="text-3xl small:text-4xl text-[#2C2C2C] font-light">
            FEATURED IN
          </Heading>
        </div>
        
        <div className="relative h-24 small:h-32 max-w-4xl mx-auto">
          <Image
            src="/featured-media-logos.jpg"
            alt="Featured media outlets"
            fill
            className="object-contain"
          />
        </div>
      </div>
    </section>
  )
}

export default FeaturedIn