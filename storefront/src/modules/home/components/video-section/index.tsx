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
            THE MONTY'S STORY
          </Heading>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Video Embed Placeholder */}
          <div className="relative aspect-video bg-[#FFF8F3] rounded-lg overflow-hidden">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-[#8B7355] flex items-center justify-center cursor-pointer hover:bg-[#6D5A44] transition-colors">
                  <PlaySolid className="w-8 h-8 text-white ml-1" />
                </div>
                <Text className="text-[#8B7355]">
                  [Embed Monty's brand video here]
                </Text>
                <Text className="text-sm text-[#5A5A5A] mt-2">
                  Replace with YouTube/Vimeo embed code
                </Text>
              </div>
            </div>
            {/* Uncomment and add your video embed code here */}
            {/* <iframe
              src="https://www.youtube.com/embed/YOUR_VIDEO_ID"
              title="Monty's Brand Story"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="absolute inset-0 w-full h-full"
            ></iframe> */}
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