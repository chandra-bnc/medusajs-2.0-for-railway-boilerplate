import { retrieveCart } from "@/lib/data/cart"
import { retrieveCustomer } from "@/lib/data/customer"
import { listRegions } from "@/lib/data/regions"
import AccountButton from "@/modules/account/components/account-button"
import CartButton from "@/modules/cart/components/cart-button"
import LocalizedClientLink from "@/modules/common/components/localized-client-link"
import FilePlus from "@/modules/common/icons/file-plus"
import BoxNCaseLogo from "@/modules/common/icons/boxncase-logo"
import { MegaMenuWrapper } from "@/modules/layout/components/mega-menu"
import SideMenu from "@/modules/layout/components/side-menu"
import { RequestQuoteConfirmation } from "@/modules/quotes/components/request-quote-confirmation"
import { RequestQuotePrompt } from "@/modules/quotes/components/request-quote-prompt"
import SkeletonAccountButton from "@/modules/skeletons/components/skeleton-account-button"
import SkeletonCartButton from "@/modules/skeletons/components/skeleton-cart-button"
import SkeletonMegaMenu from "@/modules/skeletons/components/skeleton-mega-menu"
import { Suspense } from "react"

export async function NavigationHeader() {
  const customer = await retrieveCustomer().catch(() => null)
  const cart = await retrieveCart()
  const regions = await listRegions().catch(() => null)

  return (
    <div className="sticky top-0 inset-x-0 group bg-white text-zinc-900 small:p-4 p-2 text-sm border-b duration-200 border-ui-border-base z-50">
      <header className="flex w-full content-container relative small:mx-auto justify-between">
        <div className="small:mx-auto flex justify-between items-center min-w-full">
          <div className="flex items-center small:space-x-4">
            {/* Mobile Menu Button - Only visible on mobile */}
            <div className="small:hidden mr-2">
              <SideMenu regions={regions} />
            </div>

            <div className="flex items-center gap-2">
              <a
                href="https://boxncase.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-80 transition-opacity"
                title="Visit BoxNCase.com"
              >
                <BoxNCaseLogo className="w-6 h-6" />
              </a>
              <LocalizedClientLink
                className="hover:text-ui-fg-base flex items-center w-fit"
                href="/"
              >
                <h1 className="small:text-base text-sm font-medium flex items-center">
                  <span className="hidden xsmall:inline">Monty's B2B Portal</span>
                  <span className="xsmall:hidden">Monty's</span>
                </h1>
              </LocalizedClientLink>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden small:block">
              <ul className="space-x-4 flex">
                <li>
                  <Suspense fallback={<SkeletonMegaMenu />}>
                    <MegaMenuWrapper />
                  </Suspense>
                </li>
              </ul>
            </nav>
          </div>
          <div className="flex justify-end items-center gap-1 small:gap-2">
            {/* Search - Desktop only */}
            <div className="relative mr-2 hidden small:inline-flex">
              <input
                disabled
                type="text"
                placeholder="Search for products"
                className="bg-gray-100 text-zinc-900 px-4 py-2 rounded-full pr-10 shadow-borders-base hover:cursor-not-allowed"
                title="Install a search provider to enable product search"
              />
            </div>

            <div className="h-4 w-px bg-neutral-300 hidden small:block" />

            {/* Quote Button - More compact on mobile */}
            {customer && cart?.items && cart.items.length > 0 ? (
              <RequestQuoteConfirmation>
                <button
                  className="flex gap-1 small:gap-1.5 items-center rounded-2xl bg-none shadow-none border-none hover:bg-neutral-100 px-1 small:px-2 py-1"
                  // disabled={isPendingApproval}
                >
                  <FilePlus className="w-4 h-4 small:w-5 small:h-5" />
                  <span className="hidden small:inline-block">Quote</span>
                </button>
              </RequestQuoteConfirmation>
            ) : (
              <RequestQuotePrompt>
                <button className="flex gap-1 small:gap-1.5 items-center rounded-2xl bg-none shadow-none border-none hover:bg-neutral-100 px-1 small:px-2 py-1">
                  <FilePlus className="w-4 h-4 small:w-5 small:h-5" />
                  <span className="hidden small:inline-block">Quote</span>
                </button>
              </RequestQuotePrompt>
            )}

            {/* Account Button */}
            <Suspense fallback={<SkeletonAccountButton />}>
              <AccountButton customer={customer} />
            </Suspense>

            {/* Cart Button */}
            <Suspense fallback={<SkeletonCartButton />}>
              <CartButton />
            </Suspense>
          </div>
        </div>
      </header>
    </div>
  )
}
