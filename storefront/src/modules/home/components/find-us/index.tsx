import { Heading, Text } from "@medusajs/ui"
import { MapPin } from "@medusajs/icons"
import Image from "next/image"

const FindUs = () => {
  const locations = [
    {
      category: "RETAIL STORES",
      description: "IN RETAIL STORES ACROSS NY & LA",
      examples: ["Erewhon", "Whole Foods", "Bristol Farms"]
    },
    {
      category: "RESTAURANTS",
      description: "ACROSS ALL LA KREATION LOCATIONS",
      examples: ["Kreation Organic", "Maury's", "Yeastie Boy Bagels", "Bagel + Slice"]
    },
    {
      category: "CAFÉS & BAKERIES",
      description: "VARIOUS BAGEL SHOPS THROUGHOUT LA",
      examples: ["Over 50 menu items featuring Monty's"]
    }
  ]

  return (
    <section className="py-16 small:py-20 bg-[#FFF8F3]">
      <div className="content-container">
        <div className="text-center mb-12">
          <Text className="text-[#8B7355] uppercase tracking-wider text-sm mb-4">
            Where to Buy
          </Text>
          <Heading level="h2" className="text-3xl small:text-4xl text-[#2C2C2C] font-light mb-2">
            FIND US AT
          </Heading>
        </div>

        <div className="grid grid-cols-1 medium:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {locations.map((location, index) => (
            <div key={index} className="text-center p-6">
              <MapPin className="w-8 h-8 mx-auto mb-4 text-[#8B7355]" />
              <Text className="font-semibold text-[#2C2C2C] mb-2">
                {location.category}
              </Text>
              <Text className="text-sm text-[#5A5A5A] mb-4">
                {location.description}
              </Text>
              <div className="space-y-1">
                {location.examples.map((example, idx) => (
                  <Text key={idx} className="text-xs text-[#8B7355]">
                    {example}
                  </Text>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        {/* Retailers Map Image */}
        <div className="mt-12 relative h-64 small:h-96 max-w-4xl mx-auto rounded-lg overflow-hidden">
          <Image
            src="/retail-locations.jpg"
            alt="Monty's Retail Locations Map"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </section>
  )
}

export default FindUs