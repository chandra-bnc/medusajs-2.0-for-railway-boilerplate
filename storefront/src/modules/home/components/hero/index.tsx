"use client"

import { ArrowRight } from "@medusajs/icons"
import { Heading, Text } from "@medusajs/ui"
import Button from "@/modules/common/components/button"
import LocalizedClientLink from "@/modules/common/components/localized-client-link"
import Image from "next/image"

const Hero = () => {
  return (
    <div className="relative w-full">
      {/* Main Hero Section with new image */}
      <div className="h-[70vh] small:h-[80vh] w-full relative">
        {/* Background Image */}
        <Image
          src="/montys-hero-bg.jpg"
          alt="Monty's Pure Plant-Based Cream Cheese and Butter"
          fill
          priority
          className="object-cover object-center"
        />
        
        {/* Content Overlay - Buttons positioned at bottom */}
        <div className="absolute inset-0 z-10 flex flex-col justify-end items-center pb-12 small:pb-16">
          <div className="flex flex-col small:flex-row gap-4 justify-center items-center">
            <LocalizedClientLink href="/store">
              <Button 
                variant="primary" 
                className="rounded-full px-8 py-3 text-base bg-white text-[#2C2C2C] hover:bg-gray-100 shadow-lg"
              >
                Shop Wholesale
              </Button>
            </LocalizedClientLink>
            <LocalizedClientLink href="/account">
              <Button 
                variant="secondary" 
                className="rounded-full px-8 py-3 text-base bg-transparent border-2 border-white text-white hover:bg-white hover:text-[#2C2C2C] transition-all"
              >
                <ArrowRight className="w-5 h-5 mr-2" />
                Sign In To Order
              </Button>
            </LocalizedClientLink>
          </div>
        </div>
      </div>

      {/* Philosophy Quote - Optional, can be removed if not needed */}
      <div className="bg-[#FFF8F3] py-12 small:py-16 px-6 text-center">
        <Text className="text-2xl small:text-3xl text-[#2C2C2C] font-light italic max-w-3xl mx-auto">
          "Simplicity is the ultimate sophistication."
        </Text>
      </div>
    </div>
  )
}

export default Hero