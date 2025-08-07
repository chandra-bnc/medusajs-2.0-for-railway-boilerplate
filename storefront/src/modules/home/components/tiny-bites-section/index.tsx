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
      {/* Hero Section with Tiny Bites Header */}
      <section className="relative h-[70vh] small:h-[80vh] medium:h-[90vh] overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <Image
            src="/home-hero.png"
            alt="BeeMax Premium Products"
            fill
            priority
            className="object-cover object-center"
            quality={100}
          />
          {/* Dark gradient overlay for text visibility */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/40 to-black/60" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 h-full flex items-center justify-center">
          <div className="content-container text-center">
            <Heading className="text-5xl small:text-6xl medium:text-7xl font-serif text-white mb-4 drop-shadow-lg">
              Tiny Bites
            </Heading>
            <Text className="text-2xl small:text-3xl font-serif text-white/90 mb-6 font-light italic">
              Big Flavor. Tiny Cones.
            </Text>
            <Text className="text-xl text-white/80 max-w-2xl mx-auto font-light">
              Perfectly portioned waffle cones filled with premium Belgian chocolate
            </Text>
          </div>
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

          {/* Section CTA */}
          <div className="text-center">
            <LocalizedClientLink href="/store">
              <button className="bg-beemax-deep-brown text-white hover:bg-beemax-neutral-800 min-w-[250px] px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 font-medium text-base">
                Explore Full Collection
              </button>
            </LocalizedClientLink>
          </div>
        </div>
      </section>
    </>
  )
}

export default TinyBitesSection