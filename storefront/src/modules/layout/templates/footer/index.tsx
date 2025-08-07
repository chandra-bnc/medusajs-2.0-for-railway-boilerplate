import { listCategories } from "@/lib/data/categories"
import { listCollections } from "@/lib/data/collections"
import { Text } from "@medusajs/ui"
import LocalizedClientLink from "@/modules/common/components/localized-client-link"
import BeemaxLogo from "@/modules/common/components/beemax-logo"

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
    <footer className="bg-beemax-neutral-100 border-t border-beemax-neutral-300">
      <div className="content-container">
        {/* Main Footer Content */}
        <div className="py-16 small:py-20 medium:py-24">
          <div className="grid grid-cols-1 small:grid-cols-2 medium:grid-cols-4 gap-8 medium:gap-12">
            {/* Brand Section */}
            <div className="col-span-1 small:col-span-2 medium:col-span-1">
              <LocalizedClientLink href="/" className="inline-block mb-6">
                <BeemaxLogo className="h-10 w-auto" />
              </LocalizedClientLink>
              <Text className="text-sm text-beemax-text-secondary leading-relaxed mb-6">
                Premium Belgian chocolates and natural honey products. 
                Crafted for wholesale excellence.
              </Text>
              <div className="space-y-2">
                <Text className="text-sm font-medium text-beemax-text-primary">
                  Contact Wholesale
                </Text>
                <Text className="text-sm text-beemax-text-secondary">
                  +1 (800) BEEMAX
                </Text>
                <Text className="text-sm text-beemax-text-secondary">
                  wholesale@beemax.us
                </Text>
              </div>
            </div>

            {/* Products */}
            {product_categories && product_categories?.length > 0 && (
              <div>
                <h3 className="text-sm font-medium text-beemax-text-primary uppercase tracking-wider mb-6">
                  Products
                </h3>
                <ul className="space-y-3">
                  {product_categories?.slice(0, 6).map((c) => {
                    if (c.parent_category) return null
                    return (
                      <li key={c.id}>
                        <LocalizedClientLink
                          className="text-sm text-beemax-text-secondary hover:text-beemax-gold transition-colors duration-200"
                          href={`/categories/${c.handle}`}
                        >
                          {c.name}
                        </LocalizedClientLink>
                      </li>
                    )
                  })}
                </ul>
              </div>
            )}

            {/* Collections */}
            {collections && collections.length > 0 && (
              <div>
                <h3 className="text-sm font-medium text-beemax-text-primary uppercase tracking-wider mb-6">
                  Collections
                </h3>
                <ul className="space-y-3">
                  {collections?.slice(0, 6).map((c) => (
                    <li key={c.id}>
                      <LocalizedClientLink
                        className="text-sm text-beemax-text-secondary hover:text-beemax-gold transition-colors duration-200"
                        href={`/collections/${c.handle}`}
                      >
                        {c.title}
                      </LocalizedClientLink>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Business */}
            <div>
              <h3 className="text-sm font-medium text-beemax-text-primary uppercase tracking-wider mb-6">
                Business
              </h3>
              <ul className="space-y-3">
                <li>
                  <LocalizedClientLink
                    href="/wholesale"
                    className="text-sm text-beemax-text-secondary hover:text-beemax-gold transition-colors duration-200"
                  >
                    Wholesale Program
                  </LocalizedClientLink>
                </li>
                <li>
                  <LocalizedClientLink
                    href="/account"
                    className="text-sm text-beemax-text-secondary hover:text-beemax-gold transition-colors duration-200"
                  >
                    B2B Portal
                  </LocalizedClientLink>
                </li>
                <li>
                  <a
                    href="https://boxncase.com"
                    target="_blank"
                    rel="noreferrer"
                    className="text-sm text-beemax-text-secondary hover:text-beemax-gold transition-colors duration-200"
                  >
                    BoxNCase Platform
                  </a>
                </li>
                <li>
                  <LocalizedClientLink
                    href="/terms"
                    className="text-sm text-beemax-text-secondary hover:text-beemax-gold transition-colors duration-200"
                  >
                    Terms & Conditions
                  </LocalizedClientLink>
                </li>
                <li>
                  <LocalizedClientLink
                    href="/privacy"
                    className="text-sm text-beemax-text-secondary hover:text-beemax-gold transition-colors duration-200"
                  >
                    Privacy Policy
                  </LocalizedClientLink>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-beemax-neutral-300 py-6">
          <div className="flex flex-col small:flex-row justify-between items-center gap-4">
            <Text className="text-xs text-beemax-text-muted tracking-wide">
              © {new Date().getFullYear()} BeeMax. All rights reserved.
            </Text>
            <div className="flex items-center gap-1">
              <Text className="text-xs text-beemax-text-muted">
                Powered by
              </Text>
              <a
                href="https://boxncase.com"
                target="_blank"
                rel="noreferrer"
                className="text-xs text-beemax-text-secondary hover:text-beemax-gold transition-colors duration-200 font-medium"
              >
                BoxNCase
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}