import { listCategories } from "@/lib/data/categories"
import { listCollections } from "@/lib/data/collections"
import { Text, clx } from "@medusajs/ui"
import Image from "next/image"

import LocalizedClientLink from "@/modules/common/components/localized-client-link"
import BoxNCaseCTA from "@/modules/layout/components/medusa-cta"
import NewsletterSignup from "@/modules/layout/components/newsletter-signup"

export default async function Footer() {
  const { collections } = await listCollections({
    offset: "0",
    limit: "6",
  })
  const product_categories = await listCategories({
    offset: 0,
    limit: 6,
  })

  return (
    <footer className="border-t border-ui-border-base w-full">
      <div className="content-container flex flex-col w-full">
        <div className="flex flex-col gap-y-8 small:gap-y-6 small:flex-row items-start justify-between py-12 small:py-20 medium:py-40">
          <div className="w-full small:w-auto">
            <LocalizedClientLink
              href="/"
              className="flex items-center gap-3"
            >
              <Text className="text-2xl font-serif text-[#4A2C2A]">BeeMax</Text>
            </LocalizedClientLink>
          </div>
          <div className="text-small-regular gap-6 small:gap-10 medium:gap-x-16 grid grid-cols-1 xsmall:grid-cols-2 small:grid-cols-3 w-full small:w-auto">
            {product_categories && product_categories?.length > 0 && (
              <div className="flex flex-col gap-y-2">
                <span className="txt-small-plus txt-ui-fg-base">
                  Categories
                </span>
                <ul
                  className="grid grid-cols-1 gap-2"
                  data-testid="footer-categories"
                >
                  {product_categories?.slice(0, 6).map((c) => {
                    if (c.parent_category) {
                      return
                    }

                    const children =
                      c.category_children?.map((child) => ({
                        name: child.name,
                        handle: child.handle,
                        id: child.id,
                      })) || null

                    return (
                      <li
                        className="flex flex-col gap-2 text-ui-fg-subtle txt-small"
                        key={c.id}
                      >
                        <LocalizedClientLink
                          className={clx(
                            "hover:text-ui-fg-base",
                            children && "txt-small-plus"
                          )}
                          href={`/categories/${c.handle}`}
                          data-testid="category-link"
                        >
                          {c.name}
                        </LocalizedClientLink>
                        {children && (
                          <ul className="grid grid-cols-1 ml-3 gap-2">
                            {children &&
                              children.map((child) => (
                                <li key={child.id}>
                                  <LocalizedClientLink
                                    className="hover:text-ui-fg-base"
                                    href={`/categories/${child.handle}`}
                                    data-testid="category-link"
                                  >
                                    {child.name}
                                  </LocalizedClientLink>
                                </li>
                              ))}
                          </ul>
                        )}
                      </li>
                    )
                  })}
                </ul>
              </div>
            )}
            {collections && collections.length > 0 && (
              <div className="flex flex-col gap-y-2">
                <span className="txt-small-plus txt-ui-fg-base">
                  Collections
                </span>
                <ul
                  className={clx(
                    "grid grid-cols-1 gap-2 text-ui-fg-subtle txt-small",
                    {
                      "grid-cols-2": (collections?.length || 0) > 3,
                    }
                  )}
                >
                  {collections?.slice(0, 6).map((c) => (
                    <li key={c.id}>
                      <LocalizedClientLink
                        className="hover:text-ui-fg-base"
                        href={`/collections/${c.handle}`}
                      >
                        {c.title}
                      </LocalizedClientLink>
                    </li>
                  ))}
                </ul>
              </div>
            )}
            <div className="flex flex-col gap-y-2">
              <span className="txt-small-plus txt-ui-fg-base">Customer Support</span>
              <ul className="grid grid-cols-1 gap-y-2 text-ui-fg-subtle txt-small">
                <li>
                  <a
                    href="tel:+16467500990"
                    className="hover:text-ui-fg-base"
                  >
                    +1 646-750-0990
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:sales@beemax.us"
                    className="hover:text-ui-fg-base"
                  >
                    sales@beemax.us
                  </a>
                </li>
                <li>
                  <LocalizedClientLink
                    href="/faq"
                    className="hover:text-ui-fg-base"
                  >
                    FAQs
                  </LocalizedClientLink>
                </li>
                <li>
                  <LocalizedClientLink
                    href="/shipping"
                    className="hover:text-ui-fg-base"
                  >
                    Shipping
                  </LocalizedClientLink>
                </li>
                <li>
                  <LocalizedClientLink
                    href="/returns"
                    className="hover:text-ui-fg-base"
                  >
                    Returns & Refunds
                  </LocalizedClientLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-8 mb-8 small:mb-16">
          {/* Newsletter Signup */}
          <NewsletterSignup />
          
          {/* Copyright and Links */}
          <div className="flex flex-col small:flex-row w-full gap-4 small:gap-0 small:justify-between text-ui-fg-muted items-center">
            <Text className="txt-compact-small text-center small:text-left">
              © {new Date().getFullYear()} BeeMax. All rights reserved. 267 5th Ave, New York, NY
            </Text>
            <div className="flex gap-6 txt-compact-small">
              <LocalizedClientLink href="/about" className="hover:text-ui-fg-base">
                About Us
              </LocalizedClientLink>
              <LocalizedClientLink href="/contact" className="hover:text-ui-fg-base">
                Contact
              </LocalizedClientLink>
              <LocalizedClientLink href="/privacy" className="hover:text-ui-fg-base">
                Privacy Policy
              </LocalizedClientLink>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
