"use client"

import { Heading, Text } from "@medusajs/ui"

const DiscoverJoySection = () => {
  return (
    <section className="py-20 small:py-24 medium:py-32 bg-beemax-neutral-100">
      <div className="content-container">
        {/* Main Header */}
        <div className="text-center mb-16 small:mb-20">
          <Heading className="text-4xl small:text-5xl medium:text-6xl font-serif text-beemax-deep-brown mb-6">
            Discover the Joy of Sweet Food
          </Heading>
          <Text className="text-lg text-beemax-text-secondary uppercase tracking-wider">
            Our Commitment
          </Text>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 medium:grid-cols-2 gap-12 medium:gap-16 max-w-6xl mx-auto">
          {/* Left Column - Main Content */}
          <div className="space-y-8">
            <div>
              <Text className="text-lg text-beemax-text-secondary leading-relaxed">
                <span className="font-medium text-beemax-text-primary">Always Fresh, Always Quality:</span> At Beemax, we work with trusted farmers and producers to bring you pure, fresh honey and snacks you can feel good about.
              </Text>
            </div>

            <div>
              <Text className="text-lg text-beemax-text-secondary leading-relaxed">
                <span className="font-medium text-beemax-text-primary">Convenient and Delicious:</span> Whether you're on the go or relaxing at home, our snacks and honey are made to add a little sweetness and flavor to your day.
              </Text>
            </div>

            <div>
              <Text className="text-lg text-beemax-text-secondary leading-relaxed">
                <span className="font-medium text-beemax-text-primary">You Come First:</span> Your happiness means everything to us. We're here to make sure your experience with Beemax is always a great one.
              </Text>
            </div>
          </div>

          {/* Right Column - Why BeeMax */}
          <div className="bg-white p-8 small:p-10">
            <Heading className="text-2xl small:text-3xl font-serif text-beemax-deep-brown mb-8">
              Why BeeMax?
            </Heading>

            <div className="space-y-6">
              <div>
                <Text className="text-lg text-beemax-text-secondary leading-relaxed">
                  <span className="font-medium text-beemax-text-primary">Something for Everyone:</span> From tasty, energy-packed snacks to our rich, natural honey, we've got options to fit every taste and lifestyle.
                </Text>
              </div>

              <div>
                <Text className="text-lg text-beemax-text-secondary leading-relaxed">
                  <span className="font-medium text-beemax-text-primary">Easy Shopping, Fast Delivery:</span> With our simple online store, finding what you need and getting it delivered is quick and hassle-free.
                </Text>
              </div>

              <div>
                <Text className="text-lg text-beemax-text-secondary leading-relaxed">
                  <span className="font-medium text-beemax-text-primary">We Care About Community:</span> By supporting local farmers and beekeepers, we're not just bringing you great products—we're helping to build a better, stronger community.
                </Text>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16 small:mt-20">
          <Text className="text-xl text-beemax-text-primary font-light italic max-w-3xl mx-auto">
            Choose Beemax and enjoy the natural, simple goodness you deserve. Let us bring a little sweetness to your day!
          </Text>
        </div>
      </div>
    </section>
  )
}

export default DiscoverJoySection