"use client"

import { Heading, Text } from "@medusajs/ui"
import Image from "next/image"
import LocalizedClientLink from "@/modules/common/components/localized-client-link"
import { ArrowRight } from "@medusajs/icons"

const DubaiChocolateSection = () => {
  return (
    <section className="relative py-16 small:py-24 overflow-hidden bg-gradient-to-br from-[#4A2C2A] via-[#6B4423] to-[#4A2C2A]">
      {/* Gold foil texture overlay */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 gold-foil" />
      </div>

      {/* Diagonal pattern overlay */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `repeating-linear-gradient(
            45deg,
            transparent,
            transparent 10px,
            rgba(255, 215, 0, 0.1) 10px,
            rgba(255, 215, 0, 0.1) 20px
          )`
        }}
      />

      {/* Content */}
      <div className="relative z-10 content-container">
        <div className="grid grid-cols-1 medium:grid-cols-2 gap-8 medium:gap-12 items-center">
          
          {/* Left Column - YouTube Video */}
          <div className="order-2 medium:order-1">
            {/* Floating Video Container */}
            <div className="relative">
              {/* Mobile-safe video wrapper */}
              <div className="relative aspect-[9/16] max-w-sm mx-auto medium:mx-0 rounded-2xl overflow-hidden shadow-2xl">
                <iframe
                  src="https://www.youtube.com/embed/YOUR_VIDEO_ID?autoplay=1&mute=1&loop=1&playlist=YOUR_VIDEO_ID&controls=0&modestbranding=1&showinfo=0"
                  title="Dubai Chocolate Viral Video"
                  className="absolute inset-0 w-full h-full"
                  allow="autoplay; encrypted-media"
                  allowFullScreen
                />
              </div>
              
              {/* "As Seen on YouTube" Badge */}
              <div className="absolute -top-4 -right-4 bg-[#FF0000] text-white px-4 py-2 rounded-full shadow-lg transform rotate-12 animate-pulse">
                <Text className="text-sm font-bold flex items-center gap-2">
                  <span>▶</span> As Seen on YouTube
                </Text>
              </div>
              
              {/* View count callout */}
              <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 bg-white/95 backdrop-blur-sm px-6 py-3 rounded-full shadow-xl">
                <Text className="text-sm font-semibold text-[#4A2C2A]">
                  10M+ Views
                </Text>
              </div>
            </div>
          </div>

          {/* Right Column - Product Info */}
          <div className="order-1 medium:order-2 text-center medium:text-left">
            {/* NEW Badge */}
            <div className="inline-block bg-[#90EE90] text-[#4A2C2A] px-6 py-2 rounded-full mb-6 shadow-lg">
              <Text className="text-sm font-bold tracking-wider">
                ✨ NEW EXCLUSIVE CREATION ✨
              </Text>
            </div>

            {/* Main Heading */}
            <Heading className="text-5xl small:text-6xl medium:text-7xl font-serif text-[#FFD700] mb-4 drop-shadow-lg showcase-heading">
              Dubai Style
            </Heading>
            
            {/* Tagline */}
            <Text className="text-2xl small:text-3xl text-[#F4E4C1] mb-8 font-light italic showcase-subheading">
              Luxury in every layer.
            </Text>

            {/* Product Features */}
            <div className="flex flex-wrap gap-3 mb-8 justify-center medium:justify-start">
              {[
                "🍫 Belgian Chocolate",
                "🥜 Premium Pistachios",
                "🍯 Real Honey",
                "✨ Gold Dusted"
              ].map((feature, index) => (
                <span 
                  key={index}
                  className="bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm"
                >
                  {feature}
                </span>
              ))}
            </div>

            {/* Description */}
            <Text className="text-lg text-white/90 mb-8 leading-relaxed max-w-xl mx-auto medium:mx-0">
              Experience the viral sensation that's taking the world by storm. 
              Our Dubai-style chocolate bar features layers of crispy kataifi, 
              smooth pistachio cream, and premium Belgian chocolate - 
              all finished with a touch of edible gold.
            </Text>

            {/* Product Options */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 mb-8">
              <Text className="text-sm text-[#FFD700] mb-3 font-semibold">
                AVAILABLE IN:
              </Text>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white/10 rounded-lg p-3 text-center">
                  <Text className="text-white font-semibold">Single Bar</Text>
                  <Text className="text-[#F4E4C1] text-sm">150g</Text>
                </div>
                <div className="bg-white/10 rounded-lg p-3 text-center">
                  <Text className="text-white font-semibold">Gift Box</Text>
                  <Text className="text-[#F4E4C1] text-sm">3 x 150g</Text>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col small:flex-row gap-4 justify-center medium:justify-start">
              <LocalizedClientLink href="/store">
                <button className="bg-[#FFD700] text-[#4A2C2A] hover:bg-[#FFC700] px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105 w-full small:w-auto">
                  Order Now
                  <ArrowRight className="inline-block w-5 h-5 ml-2" />
                </button>
              </LocalizedClientLink>
              <button className="bg-transparent border-2 border-[#FFD700] text-[#FFD700] hover:bg-[#FFD700] hover:text-[#4A2C2A] px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300">
                Watch Full Video
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-10 left-10 text-6xl opacity-20 animate-float">
        🍃
      </div>
      <div className="absolute bottom-10 right-10 text-6xl opacity-20 animate-float animation-delay-2000">
        🍃
      </div>
      <div className="absolute top-1/2 right-1/4 w-32 h-32 bg-[#FFD700] rounded-full opacity-10 blur-xl animate-pulse" />
    </section>
  )
}

export default DubaiChocolateSection