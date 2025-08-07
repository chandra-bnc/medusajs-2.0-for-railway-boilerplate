"use client"

import { ArrowRight } from "@medusajs/icons"
import { Heading, Text } from "@medusajs/ui"
import Button from "@/modules/common/components/button"
import LocalizedClientLink from "@/modules/common/components/localized-client-link"
import Image from "next/image"

const HeroEnhanced = () => {
  return (
    <div className="relative w-full">
      {/* Main Hero Section */}
      <div className="h-[80vh] small:h-[90vh] w-full relative overflow-hidden">
        {/* Background Image */}
        <Image
          src="/home-hero.png"
          alt="BeeMax Premium Products"
          fill
          priority
          className="object-cover object-center"
        />
        
        {/* Subtle gradient overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/40" />
        
        {/* Logo positioned top-left */}
        <div className="absolute top-8 left-8 small:top-12 small:left-12 z-20">
          <div className="flex items-center gap-3 bg-white/90 backdrop-blur-sm rounded-full px-4 py-2 shadow-lg">
            <div className="w-10 h-10 small:w-12 small:h-12 bg-[#E0B25C] rounded-full flex items-center justify-center">
              <span className="text-[#4A2C2A] text-xl small:text-2xl">🐝</span>
            </div>
            <Text className="text-xl small:text-2xl font-serif text-[#4A2C2A] font-bold">
              BeeMax
            </Text>
          </div>
        </div>
        
        {/* Content Overlay - Bottom aligned for product-forward approach */}
        <div className="absolute inset-x-0 bottom-0 z-10 px-6 pb-12 small:pb-20">
          <div className="content-container">
            <div className="max-w-3xl">
              {/* Main Headline */}
              <Heading className="text-4xl small:text-5xl medium:text-6xl font-serif text-white mb-4 drop-shadow-lg">
                From Honey to Chocolate –
                <br />
                <span className="text-[#FFD700]">Discover BeeMax</span>
              </Heading>
              
              {/* Subheader */}
              <Text className="text-xl small:text-2xl text-white/90 mb-8 font-light drop-shadow-md">
                Made for Wholesale. Loved by All.
              </Text>
              
              {/* CTA Buttons */}
              <div className="flex flex-col small:flex-row gap-4">
                <LocalizedClientLink href="/store">
                  <Button 
                    variant="primary" 
                    className="w-full small:w-auto rounded-full px-8 py-4 text-lg bg-[#E0B25C] text-[#4A2C2A] hover:bg-[#d4a04f] shadow-xl font-semibold transition-all transform hover:scale-105 hover:shadow-2xl"
                  >
                    Browse Catalog
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </LocalizedClientLink>
                <LocalizedClientLink href="/account">
                  <Button 
                    variant="secondary" 
                    className="w-full small:w-auto rounded-full px-8 py-4 text-lg bg-white/20 backdrop-blur-sm border-2 border-white text-white hover:bg-white hover:text-[#4A2C2A] transition-all"
                  >
                    Wholesale Login
                  </Button>
                </LocalizedClientLink>
              </div>
            </div>
          </div>
        </div>
        
        {/* Decorative element - animated honey drip */}
        <div className="absolute top-1/2 right-10 hidden medium:block">
          <div className="w-20 h-32 opacity-20">
            <svg viewBox="0 0 80 128" className="w-full h-full animate-pulse">
              <path d="M40 0 Q40 80 40 100 Q40 128 20 110 Q0 100 0 80 Q0 60 20 50 Q40 40 60 50 Q80 60 80 80 Q80 100 60 110 Q40 128 40 100" 
                    fill="#FFD700" 
                    opacity="0.6"/>
            </svg>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroEnhanced