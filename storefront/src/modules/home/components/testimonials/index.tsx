"use client"

import { Text } from "@medusajs/ui"
import { Star } from "@medusajs/icons"

const Testimonials = () => {
  const testimonials = [
    {
      quote: "This is becoming a problem for me. They are soooo delicious.",
      author: "Alyssa Abramson",
      rating: 5
    },
    {
      quote: "Very delicious and addictive… crunchy with the waffle.",
      author: "Amazon Customer",
      rating: 5
    }
  ]

  return (
    <section className="py-16 small:py-24 bg-white">
      <div className="content-container">
        <div className="grid grid-cols-1 medium:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="bg-[#F8F3EE] rounded-lg p-8 text-center"
            >
              <div className="flex justify-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-[#E0B25C] fill-current" />
                ))}
              </div>
              <Text className="text-lg text-[#4A2C2A] mb-4 italic">
                "{testimonial.quote}"
              </Text>
              <Text className="text-sm text-[#5A5A5A] font-semibold">
                — {testimonial.author}
              </Text>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials