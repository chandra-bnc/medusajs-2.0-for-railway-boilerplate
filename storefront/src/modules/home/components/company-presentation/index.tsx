"use client"

import { Heading, Text } from "@medusajs/ui"

const CompanyPresentation = () => {
  return (
    <section className="py-20 small:py-24 medium:py-32 bg-white">
      <div className="content-container">
        {/* Header */}
        <div className="text-center mb-16 small:mb-20">
          <Text className="text-sm uppercase tracking-[0.2em] text-beemax-text-secondary mb-4">
            BEEMAX COMPANY PRESENTATION
          </Text>
          <Heading className="text-4xl small:text-5xl medium:text-6xl font-serif text-beemax-deep-brown">
            About Us
          </Heading>
        </div>

        {/* Content Container */}
        <div className="max-w-5xl mx-auto space-y-16">
          {/* Founded Story */}
          <div className="text-center">
            <Text className="text-lg small:text-xl text-beemax-text-secondary leading-relaxed">
              BEE-MAX was founded in 2021 during the pandemic—a time when people were seeking warmth 
              and comfort in the simplest things. It was then that our founder decided to bring a piece 
              of sweet happiness to people by producing unique waffle cones, specifically their most 
              delicious part—filled with real Belgian chocolate.
            </Text>
          </div>

          {/* Philosophy Section */}
          <div className="bg-beemax-neutral-100 p-8 small:p-12">
            <Heading className="text-2xl small:text-3xl font-serif text-beemax-deep-brown mb-6 text-center">
              Our Philosophy
            </Heading>
            <Text className="text-lg text-beemax-text-secondary leading-relaxed text-center">
              The name BEEMAX represents our commitment to nature and our dedication to the highest quality. 
              "BEE" symbolizes our focus on natural products, such as honey, which we source from the finest 
              beekeepers in the Aegean and Mediterranean regions. "MAX" stands for maximum flavor, maximum 
              quality, and maximum enjoyment in every waffle and every piece of chocolate.
            </Text>
          </div>

          {/* What Makes Us Special */}
          <div>
            <Heading className="text-2xl small:text-3xl font-serif text-beemax-deep-brown mb-8 text-center">
              What Makes BEE-MAX Special?
            </Heading>
            
            <div className="grid grid-cols-1 medium:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div>
                  <Text className="font-medium text-beemax-text-primary text-lg mb-3">
                    Real Belgian Chocolate
                  </Text>
                  <Text className="text-beemax-text-secondary leading-relaxed">
                    We use only the finest varieties of Belgian chocolate, including: 
                    Milk Chocolate, Dark Belgian Chocolate, Salted Caramel, S'mores, 
                    Peppermint, Mint, Pumpkin, and more.
                  </Text>
                </div>

                <div>
                  <Text className="font-medium text-beemax-text-primary text-lg mb-3">
                    Natural Ingredients
                  </Text>
                  <Text className="text-beemax-text-secondary leading-relaxed">
                    No artificial additives, only carefully selected natural components.
                  </Text>
                </div>
              </div>

              <div>
                <Text className="font-medium text-beemax-text-primary text-lg mb-3">
                  A Fusion of Tradition and Innovation
                </Text>
                <Text className="text-beemax-text-secondary leading-relaxed">
                  Our recipes are based on centuries-old traditions, enhanced with 
                  modern technology to achieve the perfect taste.
                </Text>
              </div>
            </div>
          </div>

          {/* Our Products */}
          <div className="text-center">
            <Heading className="text-2xl small:text-3xl font-serif text-beemax-deep-brown mb-8">
              Our Products
            </Heading>
            
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              {[
                "Waffle cones with chocolate filling",
                "Chocolate waffles",
                "Natural honey from the Aegean and Mediterranean regions"
              ].map((product, index) => (
                <div key={index} className="px-6 py-3 border border-beemax-gold/30 text-beemax-text-primary">
                  {product}
                </div>
              ))}
            </div>

            <Text className="text-lg text-beemax-text-secondary italic mb-8">
              We don't just create desserts—we create an atmosphere of warmth, comfort, and indulgence.
            </Text>
          </div>

          {/* Closing Statement */}
          <div className="text-center border-t border-beemax-neutral-300 pt-12">
            <Text className="text-xl small:text-2xl font-serif text-beemax-deep-brown mb-4">
              BEEMAX – Natural ingredients, traditions, and maximum flavor in every bite!
            </Text>
            <Text className="text-lg text-beemax-text-secondary">
              We look forward to new partnerships and exciting opportunities.
            </Text>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CompanyPresentation