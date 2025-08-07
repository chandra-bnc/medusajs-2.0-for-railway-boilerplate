"use client"

import { Heading, Text } from "@medusajs/ui"
import Image from "next/image"
import LocalizedClientLink from "@/modules/common/components/localized-client-link"
import { ArrowRight } from "@medusajs/icons"

const TinyBitesSection = () => {
  const products = [
    {
      id: 1,
      flavor: "Milk Chocolate",
      description: "Creamy Belgian milk chocolate in a crispy cone",
      color: "#D2691E",
      image: "/milk-chocolate-cone.png"
    },
    {
      id: 2,
      flavor: "Dark Chocolate",
      description: "Rich 70% dark chocolate for true connoisseurs",
      color: "#3B2414",
      image: "/dark-chocolate-cone.png"
    },
    {
      id: 3,
      flavor: "White Chocolate",
      description: "Smooth vanilla-infused white chocolate delight",
      color: "#FFF8DC",
      image: "/white-chocolate-cone.png"
    },
    {
      id: 4,
      flavor: "Salted Caramel",
      description: "Sweet caramel with a hint of sea salt",
      color: "#D2691E",
      image: "/salted-caramel-cone.png"
    }
  ]

  return (
    <section className="relative py-16 small:py-24 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <Image
          src="/hero-image.jpg"
          alt="Tiny Bites Background"
          fill
          className="object-cover object-center"
        />
        {/* Dark gradient overlay for text visibility */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/70 to-black/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 content-container">
        {/* Callout Box */}
        <div className="text-center mb-12 small:mb-16">
          <div className="inline-block bg-[#E0B25C]/90 backdrop-blur-sm rounded-full px-8 py-4 shadow-2xl mb-8">
            <Text className="text-2xl small:text-3xl font-serif text-[#4A2C2A] font-bold">
              Big Flavor. Tiny Cones.
            </Text>
          </div>
          
          <Heading className="text-4xl small:text-5xl medium:text-6xl font-serif text-white mb-4">
            Tiny Bites Collection
          </Heading>
          <Text className="text-xl text-white/80 max-w-2xl mx-auto">
            Perfectly portioned waffle cones filled with premium Belgian chocolate
          </Text>
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 small:grid-cols-2 medium:grid-cols-4 gap-6 mb-12">
          {products.map((product, index) => (
            <div 
              key={product.id}
              className="group bg-white/95 backdrop-blur-sm rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              style={{
                animationDelay: `${index * 100}ms`
              }}
            >
              {/* Cone Image */}
              <div 
                className="relative h-48 small:h-56 bg-gradient-to-br from-white to-gray-100 overflow-hidden"
              >
                <Image
                  src={product.image}
                  alt={`${product.flavor} Cone`}
                  fill
                  className="object-contain p-4 group-hover:scale-110 transition-transform duration-300"
                />
                
                {/* Color accent bar */}
                <div 
                  className="absolute bottom-0 left-0 right-0 h-2 transition-all duration-300 group-hover:h-3"
                  style={{ backgroundColor: product.color }}
                />
              </div>

              {/* Product Info */}
              <div className="p-6">
                <Heading level="h3" className="text-xl font-bold text-[#4A2C2A] mb-2">
                  {product.flavor}
                </Heading>
                <Text className="text-sm text-gray-600 mb-4">
                  {product.description}
                </Text>
                
                {/* View More - appears on hover */}
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <LocalizedClientLink 
                    href="/store"
                    className="inline-flex items-center text-[#E0B25C] hover:text-[#d4a04f] font-semibold"
                  >
                    View More
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </LocalizedClientLink>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Section CTA */}
        <div className="text-center">
          <LocalizedClientLink href="/store">
            <button className="bg-white text-[#4A2C2A] hover:bg-[#E0B25C] hover:text-[#4A2C2A] px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105">
              Explore Full Collection
            </button>
          </LocalizedClientLink>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-[#E0B25C] rounded-full opacity-10 animate-pulse" />
      <div className="absolute bottom-10 right-10 w-32 h-32 bg-[#FFD700] rounded-full opacity-10 animate-pulse animation-delay-2000" />
    </section>
  )
}

export default TinyBitesSection