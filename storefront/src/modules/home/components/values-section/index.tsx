import { Heading, Text } from "@medusajs/ui"
import { MapPin, CheckCircle } from "@medusajs/icons"
import Image from "next/image"

const ValuesSection = () => {
  return (
    <section className="py-16 small:py-24 bg-[#F8F3EE]">
      <div className="content-container">
        <div className="grid grid-cols-1 medium:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <div>
            <Heading level="h2" className="text-3xl small:text-4xl text-[#4A2C2A] font-serif mb-6">
              Sourcing with Integrity
            </Heading>
            <Text className="text-lg text-[#5A5A5A] leading-relaxed mb-8">
              We partner with trusted farmers and beekeepers in Turkey's Aegean and 
              Mediterranean regions. Every product is traceable and certified by 
              independent labs.
            </Text>
            
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-[#E0B25C] flex-shrink-0 mt-0.5" />
                <div>
                  <Text className="font-semibold text-[#4A2C2A] mb-1">
                    Traceable Origins
                  </Text>
                  <Text className="text-sm text-[#5A5A5A]">
                    Every jar can be traced back to its source
                  </Text>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-[#E0B25C] flex-shrink-0 mt-0.5" />
                <div>
                  <Text className="font-semibold text-[#4A2C2A] mb-1">
                    Lab Certified
                  </Text>
                  <Text className="text-sm text-[#5A5A5A]">
                    Independent quality verification for every batch
                  </Text>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <MapPin className="w-6 h-6 text-[#E0B25C] flex-shrink-0 mt-0.5" />
                <div>
                  <Text className="font-semibold text-[#4A2C2A] mb-1">
                    Aegean & Mediterranean Regions
                  </Text>
                  <Text className="text-sm text-[#5A5A5A]">
                    Sourced from Turkey's finest honey-producing areas
                  </Text>
                </div>
              </div>
            </div>
          </div>
          
          <div className="relative h-96 rounded-lg overflow-hidden">
            <Image
              src="/beemax-beekeepers.jpg"
              alt="BeeMax beekeepers and honey production"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default ValuesSection