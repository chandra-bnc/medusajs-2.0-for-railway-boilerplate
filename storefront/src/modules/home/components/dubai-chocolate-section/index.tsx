"use client"

import { Heading, Text } from "@medusajs/ui"
import Image from "next/image"
import LocalizedClientLink from "@/modules/common/components/localized-client-link"
import { ArrowRight } from "@medusajs/icons"

const DubaiChocolateSection = () => {
  return (
    <section className="relative py-16 small:py-24 overflow-hidden bg-gradient-to-b from-[#3D2817] to-[#2C1810]">

      {/* Content */}
      <div className="relative z-10 content-container">
        <div className="grid grid-cols-1 medium:grid-cols-2 gap-8 medium:gap-12 items-center">
          
          {/* Left Column - YouTube Video */}
          <div className="order-2 medium:order-1">
            {/* Floating Video Container */}
            <div className="relative">
              {/* Mobile-safe video wrapper with modern shadow */}
              <div className="relative aspect-[9/16] max-w-sm mx-auto medium:mx-0 rounded-2xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.4)]">
                <iframe 
                  width="501" 
                  height="891" 
                  src="https://www.youtube.com/embed/acw5Vq-OLkU?autoplay=1&mute=1&loop=1&playlist=acw5Vq-OLkU&controls=0&modestbranding=1&showinfo=0" 
                  title="TRYING THE VIRAL DUBAI CHOCOLATE BAR" 
                  frameBorder="0" 
                  allow="autoplay; encrypted-media; picture-in-picture" 
                  allowFullScreen
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Right Column - Product Info */}
          <div className="order-1 medium:order-2 text-center medium:text-left">
            {/* NEW Badge */}
            <div className="inline-block mb-6">
              <Text className="text-sm uppercase tracking-[0.2em] text-beemax-gold">
                New Exclusive Creation
              </Text>
            </div>

            {/* Section Label */}
            <Text className="text-sm uppercase tracking-[0.2em] text-beemax-gold mb-4">
              As Seen on YouTube
            </Text>
            
            {/* Main Heading */}
            <Heading className="text-4xl small:text-5xl medium:text-6xl font-serif text-white mb-6">
              Dubai Chocolate
            </Heading>
            
            {/* Description */}
            <Text className="text-xl small:text-2xl text-white/90 mb-8 font-light">
              Try the viral chocolate bar with pistachio cream.
            </Text>


            {/* Extended Description */}
            <Text className="text-lg text-white/80 mb-8 leading-relaxed max-w-xl mx-auto medium:mx-0">
              Indulge in layers of crispy kataifi, smooth pistachio cream, 
              and premium Belgian chocolate. Each bar is handcrafted with 
              the finest ingredients for an unforgettable taste experience.
            </Text>

            {/* Product Options */}
            <div className="bg-black/20 backdrop-blur-sm rounded-2xl p-6 mb-8">
              <Text className="text-sm text-beemax-gold mb-3 font-semibold">
                AVAILABLE IN:
              </Text>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 text-center">
                  <Text className="text-white font-semibold">Single Bar</Text>
                  <Text className="text-white/70 text-sm">150g</Text>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 text-center">
                  <Text className="text-white font-semibold">Gift Box</Text>
                  <Text className="text-white/70 text-sm">3 x 150g</Text>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col small:flex-row gap-4 justify-center medium:justify-start">
              <LocalizedClientLink href="/store">
                <button className="bg-white text-black hover:bg-gray-100 px-8 py-4 rounded-full font-medium text-lg transition-all duration-300 shadow-xl hover:shadow-2xl w-full small:w-auto">
                  Order Now
                  <ArrowRight className="inline-block w-5 h-5 ml-2" />
                </button>
              </LocalizedClientLink>
              <button className="bg-transparent border-2 border-beemax-gold text-beemax-gold hover:bg-beemax-gold hover:text-beemax-deep-brown px-8 py-4 rounded-full font-medium text-lg transition-all duration-300">
                Watch Full Video
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Subtle gradient accents */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-beemax-gold/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-beemax-gold/5 rounded-full blur-3xl" />
    </section>
  )
}

export default DubaiChocolateSection