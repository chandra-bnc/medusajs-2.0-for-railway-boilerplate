"use client"

import { Text } from "@medusajs/ui"
import { useState } from "react"

const NewsletterSignup = () => {
  const [email, setEmail] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // TODO: Implement newsletter signup logic
    console.log("Newsletter signup:", email)
    setEmail("")
  }

  return (
    <div className="bg-[#F8F3EE] rounded-lg p-8 max-w-2xl mx-auto w-full text-center">
      <Text className="txt-large txt-ui-fg-base mb-2">Be the first to know</Text>
      <Text className="txt-small text-ui-fg-subtle mb-6">
        Subscribe to get special offers, new product announcements, and exclusive deals
      </Text>
      <form onSubmit={handleSubmit} className="flex flex-col small:flex-row gap-3 max-w-md mx-auto">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          className="flex-1 px-4 py-2 rounded-full border border-ui-border-base focus:outline-none focus:border-[#E0B25C]"
          required
        />
        <button
          type="submit"
          className="px-6 py-2 bg-[#E0B25C] text-white rounded-full hover:bg-[#d4a04f] transition-colors"
        >
          Subscribe
        </button>
      </form>
    </div>
  )
}

export default NewsletterSignup