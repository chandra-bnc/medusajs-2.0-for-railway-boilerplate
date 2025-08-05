import { Heading, Text } from "@medusajs/ui"
import { MapPin } from "@medusajs/icons"

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

        <div className="mt-12 p-8 bg-white rounded-lg shadow-sm max-w-2xl mx-auto">
          <Text className="text-center text-[#2C2C2C] font-light">
            <span className="font-semibold">Special Items:</span> Vegan GF Walnut Chocolate Chip Cookie • Vegan GF Brownie
          </Text>
        </div>
      </div>
    </section>
  )
}

export default FindUs