import { retrieveCart } from "@/lib/data/cart"
import { retrieveCustomer } from "@/lib/data/customer"
import { listRegions } from "@/lib/data/regions"
import AccountButton from "@/modules/account/components/account-button"
import CartButton from "@/modules/cart/components/cart-button"
import LocalizedClientLink from "@/modules/common/components/localized-client-link"
import BeemaxLogo from "@/modules/common/components/beemax-logo"
import FilePlus from "@/modules/common/icons/file-plus"
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
    <div className="sticky top-0 inset-x-0 bg-white z-50 border-b border-neutral-200">
      <header className="relative">
        {/* Top bar for premium messaging */}
        <div className="bg-beemax-neutral-100 border-b border-neutral-200 hidden small:block">
          <div className="content-container py-2 flex justify-between items-center">
            <p className="text-xs tracking-wider text-beemax-text-secondary uppercase">
              Premium Belgian Chocolates & Natural Honey
            </p>
            <p className="text-xs tracking-wider text-beemax-text-secondary">
              Wholesale Orders: +1 (800) BEEMAX
            </p>
          </div>
        </div>

        {/* Main navigation */}
        <div className="content-container">
          <div className="flex items-center justify-between h-16 small:h-20">
            {/* Logo and Navigation */}
            <div className="flex items-center">
              {/* Mobile Menu */}
              <div className="small:hidden mr-4">
                <SideMenu regions={regions} />
              </div>

              {/* Logo */}
              <LocalizedClientLink href="/" className="flex items-center">
                <BeemaxLogo className="h-8 small:h-10 w-auto" />
              </LocalizedClientLink>

              {/* Desktop Navigation */}
              <nav className="hidden small:flex items-center ml-12">
                <Suspense fallback={<SkeletonMegaMenu />}>
                  <MegaMenuWrapper />
                </Suspense>
                <div className="flex items-center space-x-8 ml-8">
                  <LocalizedClientLink 
                    href="/collections" 
                    className="text-sm font-medium text-beemax-text-primary hover:text-beemax-gold transition-colors duration-200 tracking-wide uppercase"
                  >
                    Collections
                  </LocalizedClientLink>
                  <LocalizedClientLink 
                    href="/about" 
                    className="text-sm font-medium text-beemax-text-primary hover:text-beemax-gold transition-colors duration-200 tracking-wide uppercase"
                  >
                    About
                  </LocalizedClientLink>
                  <LocalizedClientLink 
                    href="/wholesale" 
                    className="text-sm font-medium text-beemax-text-primary hover:text-beemax-gold transition-colors duration-200 tracking-wide uppercase"
                  >
                    Wholesale
                  </LocalizedClientLink>
                </div>
              </nav>
            </div>

            {/* Right side actions */}
            <div className="flex items-center space-x-4">
              {/* Quote Button - Premium styling */}
              {customer && cart?.items && cart.items.length > 0 ? (
                <RequestQuoteConfirmation>
                  <button className="hidden small:flex items-center space-x-2 text-sm font-medium text-beemax-text-primary hover:text-beemax-gold transition-colors duration-200 uppercase tracking-wide">
                    <FilePlus className="w-4 h-4" />
                    <span>Request Quote</span>
                  </button>
                </RequestQuoteConfirmation>
              ) : (
                <RequestQuotePrompt>
                  <button className="hidden small:flex items-center space-x-2 text-sm font-medium text-beemax-text-primary hover:text-beemax-gold transition-colors duration-200 uppercase tracking-wide">
                    <FilePlus className="w-4 h-4" />
                    <span>Request Quote</span>
                  </button>
                </RequestQuotePrompt>
              )}

              {/* Divider */}
              <div className="hidden small:block w-px h-6 bg-neutral-300" />

              {/* Account */}
              <Suspense fallback={<SkeletonAccountButton />}>
                <AccountButton customer={customer} />
              </Suspense>

              {/* Cart */}
              <Suspense fallback={<SkeletonCartButton />}>
                <CartButton />
              </Suspense>
            </div>
          </div>
        </div>
      </header>
    </div>
  )
}