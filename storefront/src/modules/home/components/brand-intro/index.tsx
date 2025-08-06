import { Heading, Text } from "@medusajs/ui"
import { 
  Package, 
  Sparkles, 
  Award 
} from "@medusajs/icons"

const BrandIntro = () => {
  const features = [
    {
      icon: Package,
      title: "Real Belgian Chocolate",
      description: "Milk, Dark, White, Salted Caramel, S'mores..."
    },
    {
      icon: Sparkles,
      title: "Natural, additive-free ingredients",
      description: "No artificial flavors or preservatives"
    },
    {
      icon: Award,
      title: "Traditional recipes with modern innovation",
      description: "Time-tested methods, contemporary taste"
    }
  ]

  return (
    <section className="py-16 small:py-24 bg-white">
      <div className="content-container">
        <div className="text-center mb-12 max-w-4xl mx-auto">
          <Heading level="h2" className="text-3xl small:text-4xl text-[#4A2C2A] font-serif mb-6">
            Discover the BeeMax Difference
          </Heading>
          <Text className="text-lg text-[#5A5A5A] leading-relaxed">
            BeeMax was born in 2021 amid a search for simple comfort. We blend centuries-old 
            tradition with natural honey from the Aegean and Mediterranean, plus real Belgian 
            chocolate to deliver compact bites of pure pleasure.
          </Text>
        </div>
        
        <div className="grid grid-cols-1 medium:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#F8F3EE] mb-4">
                  <Icon className="w-8 h-8 text-[#E0B25C]" />
                </div>
                <Text className="font-semibold text-[#4A2C2A] mb-2">
                  {feature.title}
                </Text>
                <Text className="text-sm text-[#5A5A5A]">
                  {feature.description}
                </Text>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default BrandIntro