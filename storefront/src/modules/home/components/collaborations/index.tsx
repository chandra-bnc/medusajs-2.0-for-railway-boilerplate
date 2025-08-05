import { Heading, Text } from "@medusajs/ui"
import Image from "next/image"

const Collaborations = () => {
  const collabs = [
    {
      partner: "CHEF BAE X MONTY'S",
      title: "Carrot Cake in a Jar",
      description: "It's an absolute dream of a carrot cake in a jar, with an unreal, naturally-sweetened Monty's maple cream cheese frosting... and you guessed it, everything is GF, DF, and RSF. Created by Chef Bae (Brooke Baevsky) and Lauren Montgomery of Monty's, you know this treat is one you can feel SO good about spoonful after spoonful all season long!",
      image: "/chef-bae-collab.jpg",
      imagePlaceholder: "[Add Chef Bae collaboration image]"
    },
    {
      partner: "KNEAD LOVE X MONTY'S", 
      title: "Frosted Cinnamon Bun",
      description: "Monty's and Knead Love all in one jar. It's a frosted cinny bun dream, made with Knead Love's much-loved recipe (with a base of hand-milled sourdough & regional whole grains) and frosted with Monty's cultured cashew cream cheese, all naturally sweetened and made with REAL HIGH VIBE ingredients, because that's what we're both about!",
      image: "/knead-love-collab.jpg",
      imagePlaceholder: "[Add Knead Love collaboration image]"
    }
  ]

  return (
    <section className="py-16 small:py-20 bg-white">
      <div className="content-container">
        <div className="text-center mb-12">
          <Text className="text-[#8B7355] uppercase tracking-wider text-sm mb-4">
            Partnerships
          </Text>
          <Heading level="h2" className="text-3xl small:text-4xl text-[#2C2C2C] font-light mb-6">
            DELICIOUS COLLABS
          </Heading>
          <Text className="text-[#5A5A5A] max-w-2xl mx-auto">
            WITH OUR FAVORITE CHEFS & BAKERS
          </Text>
        </div>

        <div className="space-y-16 max-w-5xl mx-auto">
          {collabs.map((collab, index) => (
            <div key={index} className={`grid grid-cols-1 medium:grid-cols-2 gap-8 items-center ${index % 2 === 1 ? 'medium:flex-row-reverse' : ''}`}>
              <div className={`relative h-64 small:h-80 ${index % 2 === 1 ? 'medium:order-2' : ''}`}>
                <Image
                  src={collab.image}
                  alt={collab.title}
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
              
              <div className={`space-y-4 ${index % 2 === 1 ? 'medium:order-1' : ''}`}>
                <div>
                  <Text className="text-[#8B7355] font-semibold text-sm uppercase tracking-wider">
                    {collab.partner}
                  </Text>
                  <Heading level="h3" className="text-2xl small:text-3xl text-[#2C2C2C] font-light mt-2">
                    {collab.title}
                  </Heading>
                </div>
                
                <Text className="text-[#5A5A5A] leading-relaxed">
                  {collab.description}
                </Text>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Collaborations