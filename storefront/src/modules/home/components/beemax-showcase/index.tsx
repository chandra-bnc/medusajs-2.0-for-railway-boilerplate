"use client"

import { Heading, Text } from "@medusajs/ui"
import Image from "next/image"
import LocalizedClientLink from "@/modules/common/components/localized-client-link"

const BeemaxShowcase = () => {
  return (
    <>
      {/* Dubai Chocolate Section - Now First */}
      <section className="relative py-24 overflow-hidden bg-gradient-to-br from-[#D4A574] via-[#F4E4C1] to-[#D4A574]">
        {/* Textured Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 35px, #8B4513 35px, #8B4513 70px)`,
          }}></div>
        </div>
        
        {/* Cocoa Leaf Accents */}
        <div className="absolute top-10 left-10 w-32 h-32 opacity-10">
          <Text className="text-8xl transform -rotate-45">🍃</Text>
        </div>
        <div className="absolute bottom-10 right-10 w-32 h-32 opacity-10">
          <Text className="text-8xl transform rotate-45">🍃</Text>
        </div>

        <div className="content-container relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            <Text className="text-[#4A2C2A] uppercase tracking-[0.3em] text-sm font-bold mb-4">
              EXCLUSIVE CREATION
            </Text>
            <Heading className="text-6xl lg:text-7xl font-bold text-[#4A2C2A] mb-6">
              Dubai Style
            </Heading>
            <Text className="text-3xl text-[#8B4513] font-light italic mb-8">
              Luxury in every layer.
            </Text>
            
            <div className="grid lg:grid-cols-2 gap-12 items-center mt-16">
              {/* Product Display */}
              <div className="relative">
                <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-2xl">
                  <div className="w-full h-80 bg-gradient-to-br from-[#4A2C2A] to-[#8B4513] rounded-2xl flex items-center justify-center">
                    <Text className="text-white/50">Product Image 600x400</Text>
                  </div>
                </div>
                {/* Floating accent */}
                <div className="absolute -top-6 -right-6 w-24 h-24 bg-[#90EE90] rounded-full flex items-center justify-center shadow-lg">
                  <Text className="text-white font-bold">NEW</Text>
                </div>
              </div>
              
              {/* Product Info */}
              <div className="text-left space-y-6">
                <Heading level="h2" className="text-4xl font-bold text-[#4A2C2A]">
                  Kadayif & Pistachio Cream
                </Heading>
                <Text className="text-lg text-[#5A5A5A] leading-relaxed">
                  Experience the essence of Middle Eastern luxury with our Dubai-inspired chocolate bar. 
                  Crispy kadayif meets velvety pistachio cream, all enveloped in premium Belgian chocolate.
                </Text>
                <div className="flex flex-wrap gap-4 pt-4">
                  <div className="bg-[#90EE90]/20 px-6 py-3 rounded-full">
                    <Text className="text-[#4A2C2A] font-semibold">Premium Belgian Chocolate</Text>
                  </div>
                  <div className="bg-[#90EE90]/20 px-6 py-3 rounded-full">
                    <Text className="text-[#4A2C2A] font-semibold">Authentic Kadayif</Text>
                  </div>
                  <div className="bg-[#90EE90]/20 px-6 py-3 rounded-full">
                    <Text className="text-[#4A2C2A] font-semibold">Turkish Pistachios</Text>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: BeeMax Honey */}
      <section className="relative py-20 overflow-hidden bg-gradient-to-b from-[#FFE4B5] via-white to-[#FFF8DC]">
        {/* Hexagonal Pattern Background */}
        <div className="absolute inset-0 opacity-5">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <pattern id="hexagons" width="50" height="43.4" patternUnits="userSpaceOnUse" patternTransform="scale(0.5)">
              <polygon points="25,0 50,14.4 50,43.4 25,57.7 0,43.4 0,14.4" fill="none" stroke="#D4A574" strokeWidth="0.5"/>
            </pattern>
            <rect width="100%" height="100%" fill="url(#hexagons)" />
          </svg>
        </div>

        <div className="content-container relative z-10">
          <div className="text-center mb-16">
            <Text className="text-[#D4A574] uppercase tracking-[0.2em] text-sm font-bold mb-3">
              PURE & NATURAL
            </Text>
            <Heading className="text-5xl font-bold text-[#4A2C2A] mb-4">
              BeeMax Honey
            </Heading>
            <Text className="text-2xl text-[#8B4513] font-light italic">
              From hive to table.
            </Text>
          </div>

          {/* Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              { 
                name: "Raw Honey Jar", 
                size: "500g / 1kg", 
                description: "Pure, unprocessed honey from Turkish highlands",
                icon: "🍯"
              },
              { 
                name: "Honey Squeeze", 
                size: "350g", 
                description: "Convenient squeeze bottle for easy drizzling",
                icon: "🍶"
              },
              { 
                name: "Bulk Honey", 
                size: "5kg / 10kg", 
                description: "Perfect for commercial kitchens and bakeries",
                icon: "🪣"
              }
            ].map((product, index) => (
              <div key={index} className="group">
                <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-3">
                  {/* Hexagonal frame for image */}
                  <div className="relative mx-auto w-48 h-48 mb-6">
                    <div className="absolute inset-0 bg-gradient-to-br from-[#FFD700] to-[#FFA500] opacity-20 rounded-full"></div>
                    <div className="absolute inset-2 bg-white rounded-full flex items-center justify-center">
                      <Text className="text-6xl">{product.icon}</Text>
                    </div>
                    {/* Image placeholder */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Text className="text-xs text-gray-400">400x400</Text>
                    </div>
                  </div>
                  
                  <Heading level="h3" className="text-2xl font-bold text-[#4A2C2A] mb-2 text-center">
                    {product.name}
                  </Heading>
                  <Text className="text-[#D4A574] font-semibold text-center mb-3">
                    {product.size}
                  </Text>
                  <Text className="text-sm text-[#5A5A5A] text-center">
                    {product.description}
                  </Text>
                  
                  {/* Honeycomb accent on hover */}
                  <div className="mt-6 flex justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="flex gap-1">
                      <div className="w-4 h-4 bg-[#FFD700] transform rotate-45"></div>
                      <div className="w-4 h-4 bg-[#FFA500] transform rotate-45"></div>
                      <div className="w-4 h-4 bg-[#FFD700] transform rotate-45"></div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default BeemaxShowcase