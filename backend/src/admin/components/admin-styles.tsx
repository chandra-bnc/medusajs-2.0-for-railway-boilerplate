import { useEffect } from "react"

export const AdminCustomStyles = () => {
  useEffect(() => {
    // Inject custom CSS to hide unwanted elements
    const style = document.createElement('style')
    style.textContent = `
      /* Hide Documentation and Changelog menu items */
      [role="menuitem"]:has(a[href*="docs.medusajs.com"]),
      [role="menuitem"]:has(a[href*="github.com/medusajs/medusa/releases"]),
      a[href*="docs.medusajs.com"],
      a[href*="github.com/medusajs/medusa/releases"],
      li:has(a[href*="docs.medusajs.com"]),
      li:has(a[href*="github.com/medusajs/medusa/releases"]) {
        display: none !important;
      }

      /* Hide menu items by text content */
      [role="menuitem"]:has-text("Documentation"),
      [role="menuitem"]:has-text("Changelog"),
      li:has-text("Documentation"),
      li:has-text("Changelog") {
        display: none !important;
      }

      /* More aggressive hiding based on common patterns */
      [data-testid*="documentation"],
      [data-testid*="changelog"],
      [id*="documentation"],
      [id*="changelog"],
      [class*="documentation"],
      [class*="changelog"] {
        display: none !important;
      }
    `
    document.head.appendChild(style)

    // JavaScript-based hiding as fallback
    const hideMenuItems = () => {
      // Find and hide by href
      const docLinks = document.querySelectorAll('a[href*="docs.medusajs.com"], a[href*="github.com/medusajs/medusa/releases"]')
      docLinks.forEach(link => {
        // Hide the link itself
        ;(link as HTMLElement).style.display = 'none'
        
        // Hide parent menu items
        const menuItem = link.closest('[role="menuitem"]') || link.closest('li') || link.closest('div')
        if (menuItem) {
          ;(menuItem as HTMLElement).style.display = 'none'
        }
      })

      // Find and hide by text content
      const allElements = document.querySelectorAll('*')
      allElements.forEach(element => {
        const text = element.textContent?.trim().toLowerCase()
        if (text === 'documentation' || text === 'changelog') {
          const menuItem = element.closest('[role="menuitem"]') || element.closest('li') || element
          ;(menuItem as HTMLElement).style.display = 'none'
        }
      })

      // Replace "Welcome to Medusa" text
      const walker = document.createTreeWalker(
        document.body,
        NodeFilter.SHOW_TEXT,
        null,
        false
      )

      const textNodes: Text[] = []
      let node: Node | null
      
      while ((node = walker.nextNode())) {
        if (node.textContent?.includes("Welcome to Medusa")) {
          textNodes.push(node as Text)
        }
      }

      textNodes.forEach((textNode) => {
        if (textNode.textContent) {
          textNode.textContent = textNode.textContent.replace(
            "Welcome to Medusa",
            "Welcome to myBoxNCase"
          )
        }
      })
    }

    // Run immediately
    hideMenuItems()

    // Run after a delay to catch dynamically loaded content
    setTimeout(hideMenuItems, 1000)
    setTimeout(hideMenuItems, 3000)
    setTimeout(hideMenuItems, 5000)

    // Set up mutation observer for dynamic content
    const observer = new MutationObserver(() => {
      hideMenuItems()
    })

    observer.observe(document.body, {
      childList: true,
      subtree: true,
      characterData: true,
    })

    // Cleanup
    return () => {
      observer.disconnect()
      if (style.parentNode) {
        style.parentNode.removeChild(style)
      }
    }
  }, [])

  return null
}

export default AdminCustomStyles