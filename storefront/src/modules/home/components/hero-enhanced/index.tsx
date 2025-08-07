"use client"

import { ArrowRight } from "@medusajs/icons"
import { Heading, Text } from "@medusajs/ui"
import LocalizedClientLink from "@/modules/common/components/localized-client-link"
import Image from "next/image"

const HeroEnhanced = () => {
  return (
    <section className="relative w-full h-[70vh] small:h-[80vh] medium:h-[90vh] overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/home-hero.png"
          alt="BeeMax Premium Products"
          fill
          priority
          className="object-cover object-center"
          quality={100}
        />
        {/* Premium gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/10 to-black/30" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 h-full flex items-end">
        <div className="content-container w-full pb-12 small:pb-16 medium:pb-20">
          <div className="max-w-4xl">
            {/* Small logo signature */}
            <div className="mb-8">
              <Image
                src="/beemax.jpg"
                alt="BeeMax"
                width={120}
                height={40}
                className="h-8 w-auto object-contain opacity-90"
              />
            </div>

            {/* Main Content */}
            <div className="space-y-8">
              {/* CTA Buttons */}
              <div className="flex flex-col small:flex-row gap-4">
                <LocalizedClientLink href="/store">
                  <button className="bg-white text-beemax-deep-brown hover:bg-gray-100 flex items-center justify-center gap-2 min-w-[200px] px-8 py-4 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 font-medium text-base">
                    Browse Catalog
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </LocalizedClientLink>
                <LocalizedClientLink href="/wholesale">
                  <button className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-beemax-deep-brown min-w-[200px] px-8 py-4 rounded-full transition-all duration-300 font-medium text-base">
                    Wholesale Program
                  </button>
                </LocalizedClientLink>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Subtle scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-px h-12 bg-white/30" />
      </div>
    </section>
  )
}

export default HeroEnhanced