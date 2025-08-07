import { Heading, Text } from "@medusajs/ui"
import Image from "next/image"

const Founder = () => {
  return (
    <section className="py-16 small:py-20 bg-white">
      <div className="content-container">
        <div className="grid grid-cols-1 medium:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
          <div className="relative h-[400px] small:h-[500px]">
            <Image
              src="/montys-founder.jpg"
              alt="BeeMax Founder"
              fill
              className="object-cover rounded-lg"
            />
          </div>
          
          <div className="space-y-6">
            <div>
              <Text className="text-[#8B7355] uppercase tracking-wider text-sm mb-4">
                Our Story
              </Text>
              <Heading level="h2" className="text-3xl small:text-4xl text-[#2C2C2C] font-light mb-4">
                The BeeMax Journey
              </Heading>
            </div>

            <div className="space-y-4">
              <Text className="text-[#5A5A5A] leading-relaxed">
                BeeMax was founded in 2021 during the pandemic—a time when people were seeking warmth 
                and comfort in the simplest things. We blend centuries-old tradition with honey sourced 
                from the Aegean and Mediterranean and real Belgian chocolate to deliver compact bites 
                of pure pleasure.
              </Text>
              
              <div>
                <Text className="font-semibold text-[#2C2C2C] text-lg">
                  BEEMAX TEAM
                </Text>
                <Text className="text-[#8B7355] text-sm">
                  CRAFTING NATURE'S SWEETNESS SINCE 2021
                </Text>
              </div>
            </div>

            <div className="pt-6 border-t border-gray-200">
              <Text className="text-[#2C2C2C] font-light italic text-lg">
                "Nature's Sweetness, Perfectly Crafted"
              </Text>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Founder