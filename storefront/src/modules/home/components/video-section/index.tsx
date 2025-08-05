"use client"

import { Heading, Text } from "@medusajs/ui"
import { PlaySolid } from "@medusajs/icons"

const VideoSection = () => {
  return (
    <section className="py-16 small:py-20 bg-white">
      <div className="content-container">
        <div className="text-center mb-12">
          <Text className="text-[#8B7355] uppercase tracking-wider text-sm mb-4">
            Watch & Learn
          </Text>
          <Heading level="h2" className="text-3xl small:text-4xl text-[#2C2C2C] font-light">
            THE MONTY'S EFFECT
          </Heading>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Video Embed */}
          <div className="relative aspect-video bg-[#FFF8F3] rounded-lg overflow-hidden">
            <video
              src="https://cdn.shopify.com/videos/c/o/v/3c807f6da0ba402cb67c0ed1068b5344.mp4"
              title="The Monty's Effect"
              controls
              autoPlay
              muted
              loop
              className="absolute inset-0 w-full h-full object-cover"
            >
              Your browser does not support the video tag.
            </video>
          </div>

          <div className="mt-8 text-center">
            <Text className="text-[#5A5A5A] max-w-2xl mx-auto">
              Discover how we craft the cleanest, most delicious plant-based dairy alternatives 
              using traditional fermentation methods and only the finest ingredients.
            </Text>
          </div>
        </div>
      </div>
    </section>
  )
}

export default VideoSection