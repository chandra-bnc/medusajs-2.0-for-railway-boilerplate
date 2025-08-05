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
              alt="Lauren Montgomery - Monty"
              fill
              className="object-cover rounded-lg"
            />
          </div>
          
          <div className="space-y-6">
            <div>
              <Text className="text-[#8B7355] uppercase tracking-wider text-sm mb-4">
                Meet the Founder
              </Text>
              <Heading level="h2" className="text-3xl small:text-4xl text-[#2C2C2C] font-light mb-4">
                Who is Monty?
              </Heading>
            </div>

            <div className="space-y-4">
              <Text className="text-[#5A5A5A] leading-relaxed">
                I am a NYC/LA based, health supportive chef with an affinity for raw foods and fermentation. 
                My mission is to spread health and higher awareness through my food, and to create a community 
                of conscious consumers without making any sacrifices.
              </Text>
              
              <div>
                <Text className="font-semibold text-[#2C2C2C] text-lg">
                  LAUREN MONTGOMERY "MONTY"
                </Text>
                <Text className="text-[#8B7355] text-sm">
                  FOUNDER • HEALTH SUPPORTIVE CHEF • COACH
                </Text>
              </div>
            </div>

            <div className="pt-6 border-t border-gray-200">
              <Text className="text-[#2C2C2C] font-light italic text-lg">
                "Food is medicine. Food is life. Food is beauty."
              </Text>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Founder