"use client"

import { Heading, Text } from "@medusajs/ui"
import Image from "next/image"
import Button from "@/modules/common/components/button"
import LocalizedClientLink from "@/modules/common/components/localized-client-link"

const ProductShowcase = () => {
  const products = [
    {
      title: "WAFFLE CONES",
      subtitle: "TINY BITES",
      description: "Belgian chocolate-filled waffle mini cones in milk, dark, white, and sea salt caramel flavors.",
      image: "/montys-cream-cheese.jpg",
      imagePlaceholder: "[Add Waffle Cones product image]",
      features: ["Belgian Chocolate", "Natural Ingredients", "Bite-sized"]
    },
    {
      title: "HONEY PRODUCTS",
      subtitle: "HONEY SPOONS & JARS",
      description: "Raw honey spoons for on-the-go snacking and full jars of natural honey from Turkey.",
      image: "/montys-butter.jpg", 
      imagePlaceholder: "[Add Honey products image]",
      features: ["Raw Honey", "Traceable", "Quality-certified"],
      size: "Various"
    }
  ]

  return (
    <section className="py-16 small:py-20 bg-[#FFF8F3]">
      <div className="content-container">
        <div className="text-center mb-12">
          <Heading level="h2" className="text-3xl small:text-4xl text-[#2C2C2C] font-light mb-2">
            PREMIUM BELGIAN CHOCOLATE & HONEY
          </Heading>
        </div>

        <div className="grid grid-cols-1 medium:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {products.map((product, index) => (
            <div key={index} className="bg-white rounded-lg overflow-hidden shadow-sm">
              <div className="relative h-64 small:h-80">
                <Image
                  src={product.image}
                  alt={product.title}
                  fill
                  className="object-cover"
                />
                {product.size && (
                  <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full">
                    <Text className="text-[#8B7355] font-semibold text-sm">{product.size}</Text>
                  </div>
                )}
              </div>
              
              <div className="p-6 space-y-4">
                <div>
                  <Text className="text-[#8B7355] text-sm uppercase tracking-wider">
                    {product.title}
                  </Text>
                  <Heading level="h3" className="text-2xl text-[#2C2C2C] font-light">
                    {product.subtitle}
                  </Heading>
                </div>
                
                <Text className="text-[#5A5A5A] leading-relaxed">
                  {product.description}
                </Text>
                
                <div className="flex gap-2 flex-wrap">
                  {product.features.map((feature, idx) => (
                    <span key={idx} className="text-xs bg-[#FFF8F3] text-[#8B7355] px-3 py-1 rounded-full">
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <LocalizedClientLink href="/store">
            <Button variant="primary" className="rounded-full px-8 py-3 bg-[#8B7355] hover:bg-[#6D5A44]">
              View Full Product Line
            </Button>
          </LocalizedClientLink>
        </div>
      </div>
    </section>
  )
}

export default ProductShowcase