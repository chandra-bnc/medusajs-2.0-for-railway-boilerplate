"use client"

import { useCart } from "@/lib/context/cart-context"
import { HttpTypes } from "@medusajs/types"
import Button from "@/modules/common/components/button"
import { RequestQuoteConfirmation } from "@/modules/quotes/components/request-quote-confirmation"
import { RequestQuotePrompt } from "@/modules/quotes/components/request-quote-prompt"
import LocalizedClientLink from "@/modules/common/components/localized-client-link"
import { Text } from "@medusajs/ui"
import { useRouter } from "next/navigation"
import { useState } from "react"
import { B2BCustomer } from "@/types"

type B2BActionsProps = {
  product: HttpTypes.StoreProduct
  variant?: HttpTypes.StoreProductVariant
  disabled?: boolean
  isAdding?: boolean
  handleAddToCart: () => Promise<void>
  customer: B2BCustomer | null
}

export default function B2BActions({
  product,
  variant,
  disabled,
  isAdding,
  handleAddToCart,
  customer,
}: B2BActionsProps) {
  const { cart } = useCart()
  const router = useRouter()
  const [isAddingAndQuote, setIsAddingAndQuote] = useState(false)
  const [isAddingAndCheckout, setIsAddingAndCheckout] = useState(false)

  const handleAddToCartAndQuote = async () => {
    if (!customer) {
      router.push("/account")
      return
    }
    
    setIsAddingAndQuote(true)
    try {
      await handleAddToCart()
      // Small delay to ensure cart is updated
      setTimeout(() => {
        const quoteButton = document.querySelector('[data-quote-trigger]') as HTMLButtonElement
        if (quoteButton) {
          quoteButton.click()
        }
      }, 500)
    } finally {
      setIsAddingAndQuote(false)
    }
  }

  const handleBuyNow = async () => {
    if (!customer) {
      router.push("/account")
      return
    }
    
    setIsAddingAndCheckout(true)
    try {
      await handleAddToCart()
      // Small delay to ensure cart is updated
      setTimeout(() => {
        router.push("/checkout")
      }, 500)
    } finally {
      setIsAddingAndCheckout(false)
    }
  }

  if (!customer) {
    return (
      <div className="flex flex-col gap-2">
        <LocalizedClientLink href="/account">
          <Button className="w-full h-10 rounded-full shadow-borders-base">
            Log in to Purchase
          </Button>
        </LocalizedClientLink>
        <Text className="text-sm text-center text-ui-fg-subtle">
          B2B customers must log in to view pricing and place orders
        </Text>
      </div>
    )
  }

  return (
    <div className="flex flex-col gap-3">
      <div className="grid grid-cols-2 gap-2">
        {/* Add to Cart & Request Quote Button */}
        <Button
          onClick={handleAddToCartAndQuote}
          disabled={disabled || !variant || isAddingAndQuote}
          variant="secondary"
          className="h-10 rounded-full shadow-borders-base text-sm"
          isLoading={isAddingAndQuote}
        >
          {!variant ? "Select Options" : "Request Quote"}
        </Button>

        {/* Buy Now Button */}
        <Button
          onClick={handleBuyNow}
          disabled={disabled || !variant || isAddingAndCheckout}
          className="h-10 rounded-full shadow-none text-sm"
          isLoading={isAddingAndCheckout}
        >
          {!variant ? "Select Options" : "Buy Now"}
        </Button>
      </div>

      {/* Hidden Quote Trigger */}
      {customer && cart?.items && cart.items.length > 0 ? (
        <RequestQuoteConfirmation>
          <button
            data-quote-trigger
            className="hidden"
            aria-hidden="true"
          />
        </RequestQuoteConfirmation>
      ) : (
        <RequestQuotePrompt>
          <button
            data-quote-trigger
            className="hidden"
            aria-hidden="true"
          />
        </RequestQuotePrompt>
      )}

      <Text className="text-xs text-center text-ui-fg-muted">
        Request a quote for bulk orders or buy now with instant checkout
      </Text>
    </div>
  )
}