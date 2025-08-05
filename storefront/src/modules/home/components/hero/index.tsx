"use client"

import { ArrowRight } from "@medusajs/icons"
import { Heading } from "@medusajs/ui"
import Button from "@/modules/common/components/button"
import LocalizedClientLink from "@/modules/common/components/localized-client-link"
import Image from "next/image"

const Hero = () => {
  return (
    <div className="h-[60vh] small:h-[75vh] w-full border-b border-ui-border-base relative bg-neutral-100">
      <Image
        src="/hero-image.jpg"
        alt="Hero background"
        layout="fill"
        quality={100}
        priority
        className="object-cover"
      />
      <div className="absolute inset-0 z-1 flex flex-col justify-center items-center text-center p-6 small:p-16 medium:p-32 gap-4 small:gap-6">
        <span className="max-w-3xl">
          <p className="text-neutral-600 text-xs small:text-sm uppercase">
            As Good As It Looks
          </p>

          <Heading
            level="h1"
            className="text-3xl small:text-4xl medium:text-6xl leading-tight small:leading-10 text-ui-fg-base font-normal mt-4 small:mt-10 mb-3 small:mb-5"
          >
            Pure Plant Based Ingredients
          </Heading>

          <p className="leading-6 small:leading-10 text-ui-fg-subtle font-normal text-sm small:text-lg">
            The New Standard Of Plant Based Dairy
          </p>
        </span>
        <LocalizedClientLink href="/account">
          <Button variant="secondary" className="rounded-2xl text-sm small:text-base">
            <ArrowRight className="w-4 h-4 small:w-5 small:h-5" />
            <span className="hidden xsmall:inline">Sign In To Shop</span>
            <span className="xsmall:hidden">Sign In</span>
          </Button>
        </LocalizedClientLink>
      </div>
    </div>
  )
}

export default Hero
