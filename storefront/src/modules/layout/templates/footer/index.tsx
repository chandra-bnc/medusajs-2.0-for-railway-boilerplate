import { listCategories } from "@/lib/data/categories"
import { listCollections } from "@/lib/data/collections"
import { Text, clx } from "@medusajs/ui"
import Image from "next/image"

import LocalizedClientLink from "@/modules/common/components/localized-client-link"
import BoxNCaseCTA from "@/modules/layout/components/medusa-cta"

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
              <Image
                src="https://cdn.shopify.com/s/files/1/0279/6991/2877/files/MontysLogo.png?v=1732648144"
                alt="Monty's Logo"
                width={120}
                height={40}
                className="h-10 w-auto"
              />
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
              <span className="txt-small-plus txt-ui-fg-base">BoxNCase B2B</span>
              <ul className="grid grid-cols-1 gap-y-2 text-ui-fg-subtle txt-small">
                <li>
                  <a
                    href="https://boxncase.com"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-ui-fg-base"
                  >
                    Visit BoxNCase.com
                  </a>
                </li>
                <li>
                  <a
                    href="https://boxncase.com/montys"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-ui-fg-base"
                  >
                    Shop Montys at BoxNCase
                  </a>
                </li>
                <li>
                  <LocalizedClientLink
                    href="/account"
                    className="hover:text-ui-fg-base"
                  >
                    Login/Create Account
                  </LocalizedClientLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-8 mb-8 small:mb-16">
          {/* Light.svg taking 1/3 of footer */}
          <div className="flex justify-center">
            <a
              href="https://boxncase.com"
              target="_blank"
              rel="noreferrer"
              className="hover:opacity-80 transition-opacity block w-full max-w-xs small:max-w-sm"
            >
              <Image
                src="/light.svg"
                alt="BoxNCase"
                width={400}
                height={400}
                className="w-full h-auto"
              />
            </a>
          </div>
          
          {/* Copyright and CTA */}
          <div className="flex flex-col small:flex-row w-full gap-4 small:gap-0 small:justify-between text-ui-fg-muted items-center">
            <Text className="txt-compact-small text-center small:text-left">
              © {new Date().getFullYear()} Monty's B2B Portal powered by BoxNCase. All rights reserved.
            </Text>
            <BoxNCaseCTA />
          </div>
        </div>
      </div>
    </footer>
  )
}
