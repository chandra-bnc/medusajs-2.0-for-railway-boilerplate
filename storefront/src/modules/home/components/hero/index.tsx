"use client"

import { ArrowRight } from "@medusajs/icons"
import { Heading, Text } from "@medusajs/ui"
import Button from "@/modules/common/components/button"
import LocalizedClientLink from "@/modules/common/components/localized-client-link"
import Image from "next/image"

const Hero = () => {
  return (
    <div className="relative w-full">
      {/* Main Hero Section */}
      <div className="h-[70vh] small:h-[80vh] w-full relative bg-[#FFF8F3]">
        <div className="absolute inset-0 z-1 flex flex-col justify-center items-center text-center p-6 small:p-16 medium:p-32 gap-6">
          <div className="max-w-4xl">
            <Text className="text-xs small:text-sm uppercase tracking-wider text-[#8B7355] mb-4">
              WE ARE PURE PLANT-BASED
            </Text>
            
            <Heading
              level="h1"
              className="text-4xl small:text-5xl medium:text-7xl leading-tight text-[#2C2C2C] font-light mb-6"
            >
              DAIRY-FREE ESSENTIALS
            </Heading>
            
            <Text className="text-lg small:text-xl medium:text-2xl text-[#5A5A5A] font-light max-w-2xl mx-auto mb-8">
              The cleanest ingredient cashew cream cheese & butter made with real ingredients for really living.
            </Text>

            <div className="flex flex-col small:flex-row gap-4 justify-center items-center">
              <LocalizedClientLink href="/store">
                <Button variant="primary" className="rounded-full px-8 py-3 text-base bg-[#8B7355] hover:bg-[#6D5A44]">
                  Shop Wholesale
                </Button>
              </LocalizedClientLink>
              <LocalizedClientLink href="/account">
                <Button variant="secondary" className="rounded-full px-8 py-3 text-base border-[#8B7355] text-[#8B7355]">
                  <ArrowRight className="w-5 h-5 mr-2" />
                  Sign In To Order
                </Button>
              </LocalizedClientLink>
            </div>
          </div>

          {/* Cashew Badge */}
          <div className="absolute right-8 top-1/2 -translate-y-1/2 hidden medium:block">
            <div className="text-[#8B7355] text-sm tracking-[0.3em] vertical-text">
              MADE FROM CASHEWS
            </div>
          </div>
        </div>
      </div>

      {/* Philosophy Quote */}
      <div className="bg-white py-12 small:py-16 px-6 text-center">
        <Text className="text-2xl small:text-3xl text-[#2C2C2C] font-light italic max-w-3xl mx-auto">
          "Simplicity is the ultimate sophistication."
        </Text>
      </div>
    </div>
  )
}

export default Hero