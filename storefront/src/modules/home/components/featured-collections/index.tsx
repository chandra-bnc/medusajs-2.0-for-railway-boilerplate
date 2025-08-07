"use client"

import { Heading, Text } from "@medusajs/ui"
import Image from "next/image"
import Button from "@/modules/common/components/button"
import LocalizedClientLink from "@/modules/common/components/localized-client-link"

const FeaturedCollections = () => {
  const collections = [
    {
      title: "Tiny Bites Waffle Mini Cones",
      description: "Bite-sized Belgian chocolate treats (milk, dark, white, sea salt caramel)",
      image: "/montys-cream-cheese.jpg",
      href: "/store"
    },
    {
      title: "Honey Spoon",
      description: "Portable raw honey spoons, perfect for snacking on the go",
      image: "/montys-butter.jpg",
      href: "/store"
    },
    {
      title: "Raw & Acacia Honey Jars",
      description: "Full-jar natural honey from Turkey, traceable and quality-certified",
      image: "/montys-process.jpg",
      href: "/store"
    }
  ]

  return (
    <section className="py-16 small:py-24 bg-[#F8F3EE]">
      <div className="content-container">
        <div className="text-center mb-12">
          <Heading level="h2" className="text-3xl small:text-4xl text-[#4A2C2A] font-serif mb-4">
            Featured Collections
          </Heading>
          <Text className="text-lg text-[#5A5A5A]">
            Natural sweetness meets Belgian craftsmanship
          </Text>
        </div>

        <div className="grid grid-cols-1 medium:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {collections.map((collection, index) => (
            <div key={index} className="group cursor-pointer">
              <LocalizedClientLink href={collection.href}>
                <div className="bg-white rounded-lg overflow-hidden shadow-md transition-all duration-300 group-hover:shadow-xl">
                  <div className="relative h-64 small:h-72 overflow-hidden">
                    <Image
                      src={collection.image}
                      alt={collection.title}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  
                  <div className="p-6">
                    <Heading level="h3" className="text-xl text-[#4A2C2A] font-serif mb-3 group-hover:text-[#E0B25C] transition-colors">
                      {collection.title}
                    </Heading>
                    <Text className="text-[#5A5A5A] leading-relaxed mb-4">
                      {collection.description}
                    </Text>
                    <Button 
                      variant="secondary" 
                      className="text-[#E0B25C] border-[#E0B25C] hover:bg-[#E0B25C] hover:text-white transition-all"
                    >
                      Shop Gallery
                    </Button>
                  </div>
                </div>
              </LocalizedClientLink>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FeaturedCollections