import { Heading, Text } from "@medusajs/ui"

const IngredientsProcess = () => {
  const process = [
    { step: "1", title: "Cashews", description: "Premium quality, ethically sourced" },
    { step: "2", title: "Sea Salt", description: "Natural mineral-rich" },
    { step: "3", title: "Cultures", description: "Live probiotics" },
    { step: "→", title: "Blend", description: "Small batch crafted" },
    { step: "→", title: "Ferment", description: "Traditional methods" },
    { step: "=", title: "Patience", description: "Time is our secret ingredient" }
  ]

  const noIngredients = [
    "No Gums",
    "No Thickeners", 
    "No Preservatives",
    "No Seed Oils",
    "No Lecithins",
    "No Natural Flavoring",
    "No Starches"
  ]

  return (
    <section className="py-16 small:py-20 bg-[#FFF8F3]">
      <div className="content-container">
        <div className="text-center mb-12">
          <Heading level="h2" className="text-3xl small:text-4xl text-[#2C2C2C] font-light mb-6">
            PURITY OF INGREDIENTS.<br />
            PURITY OF PROCESS.<br />
            PATIENCE.
          </Heading>
        </div>

        {/* Process Flow */}
        <div className="max-w-5xl mx-auto mb-16">
          <div className="grid grid-cols-2 small:grid-cols-3 medium:grid-cols-6 gap-4">
            {process.map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 mx-auto mb-3 rounded-full bg-white flex items-center justify-center">
                  <Text className="text-2xl font-light text-[#8B7355]">{item.step}</Text>
                </div>
                <Text className="font-semibold text-[#2C2C2C] text-sm">{item.title}</Text>
                <Text className="text-xs text-[#5A5A5A]">{item.description}</Text>
              </div>
            ))}
          </div>
        </div>

        {/* What We Don't Use */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg p-8 shadow-sm">
            <Heading level="h3" className="text-2xl text-[#2C2C2C] font-light text-center mb-8">
              Absolutely Nothing But The Best
            </Heading>
            
            <div className="grid grid-cols-1 small:grid-cols-2 medium:grid-cols-3 gap-4">
              {noIngredients.map((item, index) => (
                <div key={index} className="flex items-center gap-2">
                  <span className="w-5 h-5 text-red-500 flex items-center justify-center">✕</span>
                  <Text className="text-[#2C2C2C]">{item}</Text>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Testimonial */}
        <div className="mt-16 text-center">
          <Text className="text-2xl small:text-3xl text-[#2C2C2C] font-light italic max-w-3xl mx-auto">
            "The hype is real. Beloved by many for their incredible taste, simplicity & immaculate ingredient label..."
          </Text>
        </div>
      </div>
    </section>
  )
}

export default IngredientsProcess