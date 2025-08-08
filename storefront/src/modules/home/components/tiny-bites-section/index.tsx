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
    <>
      {/* Hero Section */}
      <section className="relative bg-white">
        {/* Background Image Container - Aspect ratio based on 3406x1270 */}
        <div className="relative w-full" style={{ aspectRatio: '3406/1270' }}>
          <Image
            src="/home-hero.png"
            alt="BeeMax Premium Products"
            fill
            priority
            className="object-contain object-center"
            quality={100}
            sizes="100vw"
          />
        </div>
      </section>

      {/* Product Cards Section */}
      <section className="py-16 small:py-20 bg-white">
        <div className="content-container">

          {/* Product Cards Grid */}
          <div className="grid grid-cols-1 small:grid-cols-2 medium:grid-cols-4 gap-6 mb-12 max-w-6xl mx-auto">
            {products.map((product, index) => (
              <div 
                key={product.id}
                className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
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

          {/* Joy in every crunch section */}
          <div className="text-center">
            <Text className="text-2xl small:text-3xl text-beemax-text-primary font-light italic mb-5">
              Joy in every crunch.
            </Text>
            <LocalizedClientLink href="/categories/wafflecones">
              <button className="bg-[#4A2C2A] text-white hover:bg-[#3A1C1A] hover:scale-105 min-w-[200px] px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 font-bold text-base">
                Buy Now
              </button>
            </LocalizedClientLink>
          </div>
        </div>
      </section>
    </>
  )
}

export default TinyBitesSection