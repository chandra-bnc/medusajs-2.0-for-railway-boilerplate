"use client"

import { ArrowRight } from "@medusajs/icons"
import { Heading, Text } from "@medusajs/ui"
import Button from "@/modules/common/components/button"
import LocalizedClientLink from "@/modules/common/components/localized-client-link"
import Image from "next/image"

const Hero = () => {
  return (
    <div className="relative w-full">
      {/* Main Hero Section with BeeMax branding */}
      <div className="h-[75vh] small:h-[85vh] w-full relative overflow-hidden">
        {/* Background Image */}
        <Image
          src="/home-hero.png"
          alt="BeeMax Belgian Chocolate Waffle Cones and Honey Products"
          fill
          priority
          className="object-cover object-center"
        />
        
        {/* Dark overlay for better text visibility */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
        
        {/* Content Overlay */}
        <div className="absolute inset-0 z-10 flex flex-col justify-center items-center text-center px-6">
          {/* Logo/Brand Name */}
          <Heading className="text-5xl small:text-7xl font-serif text-white mb-4 drop-shadow-lg">
            BeeMax
          </Heading>
          
          {/* Tagline */}
          <Text className="text-xl small:text-2xl text-white mb-6 font-light drop-shadow-md">
            Nature's Sweetness, Perfectly Crafted
          </Text>
          
          {/* Sub-tagline */}
          <Text className="text-base small:text-lg text-white/90 mb-12 max-w-2xl drop-shadow-md">
            Real Belgian Chocolate. Natural Ingredients. Maximum Flavor.
          </Text>
          
          {/* CTA Button */}
          <LocalizedClientLink href="/store">
            <Button 
              variant="primary" 
              className="rounded-full px-10 py-4 text-lg bg-[#E0B25C] text-[#4A2C2C] hover:bg-[#d4a04f] shadow-xl font-semibold transition-all transform hover:scale-105"
            >
              Shop Now
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </LocalizedClientLink>
        </div>
      </div>
    </div>
  )
}

export default Hero