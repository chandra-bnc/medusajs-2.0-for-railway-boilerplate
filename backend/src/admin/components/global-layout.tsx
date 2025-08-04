import { useEffect } from "react"

export const GlobalAdminStyles = () => {
  useEffect(() => {
    // Create and inject custom CSS
    const styleId = 'medusa-admin-custom-styles'
    
    // Remove existing style if it exists
    const existingStyle = document.getElementById(styleId)
    if (existingStyle) {
      existingStyle.remove()
    }

    const style = document.createElement('style')
    style.id = styleId
    style.textContent = `
      /* Hide Documentation and Changelog menu items - comprehensive approach */
      [role="menuitem"]:has(a[href*="docs.medusajs.com"]),
      [role="menuitem"]:has(a[href*="github.com/medusajs/medusa/releases"]),
      a[href*="docs.medusajs.com"],
      a[href*="github.com/medusajs/medusa/releases"],
      li:has(a[href*="docs.medusajs.com"]),
      li:has(a[href*="github.com/medusajs/medusa/releases"]),
      [data-testid*="documentation"],
      [data-testid*="changelog"],
      [id*="documentation"],
      [id*="changelog"],
      [class*="documentation"],
      [class*="changelog"] {
        display: none !important;
        visibility: hidden !important;
        opacity: 0 !important;
        height: 0 !important;
        width: 0 !important;
        overflow: hidden !important;
        position: absolute !important;
        left: -9999px !important;
      }

      /* Target menu items containing Documentation or Changelog text */
      [role="menuitem"]:contains("Documentation"),
      [role="menuitem"]:contains("Changelog"),
      li:contains("Documentation"),
      li:contains("Changelog"),
      button:contains("Documentation"),
      button:contains("Changelog"),
      a:contains("Documentation"),
      a:contains("Changelog") {
        display: none !important;
      }
    `
    document.head.appendChild(style)

    // Aggressive JavaScript-based hiding
    const hideMenuItems = () => {
      // Find and hide by href patterns
      const docLinks = document.querySelectorAll('a[href*="docs.medusajs.com"], a[href*="github.com/medusajs/medusa/releases"]')
      docLinks.forEach(link => {
        const element = link as HTMLElement
        element.style.display = 'none'
        
        // Hide parent containers
        let parent = element.parentElement
        while (parent && parent !== document.body) {
          if (parent.getAttribute('role') === 'menuitem' || 
              parent.tagName.toLowerCase() === 'li' ||
              parent.tagName.toLowerCase() === 'button') {
            parent.style.display = 'none'
            break
          }
          parent = parent.parentElement
        }
      })

      // Find and hide by text content
      const walker = document.createTreeWalker(
        document.body,
        NodeFilter.SHOW_ELEMENT,
        {
          acceptNode: (node) => {
            const element = node as Element
            const text = element.textContent?.trim().toLowerCase()
            if (text === 'documentation' || text === 'changelog') {
              return NodeFilter.FILTER_ACCEPT
            }
            return NodeFilter.FILTER_SKIP
          }
        }
      )

      const elementsToHide: Element[] = []
      let node: Node | null
      while ((node = walker.nextNode())) {
        elementsToHide.push(node as Element)
      }

      elementsToHide.forEach(element => {
        const htmlElement = element as HTMLElement
        htmlElement.style.display = 'none'
        
        // Also hide parent menu item if applicable
        const menuItem = element.closest('[role="menuitem"]') || element.closest('li')
        if (menuItem) {
          ;(menuItem as HTMLElement).style.display = 'none'
        }
      })

      // Replace "Welcome to Medusa" text
      const textWalker = document.createTreeWalker(
        document.body,
        NodeFilter.SHOW_TEXT,
        null,
        false
      )

      const textNodes: Text[] = []
      let textNode: Node | null
      
      while ((textNode = textWalker.nextNode())) {
        if (textNode.textContent?.includes("Welcome to Medusa")) {
          textNodes.push(textNode as Text)
        }
      }

      textNodes.forEach((node) => {
        if (node.textContent) {
          node.textContent = node.textContent.replace(
            /Welcome to Medusa/g,
            "Welcome to myBoxNCase"
          )
        }
      })
    }

    // Run hiding function multiple times to catch dynamic content
    hideMenuItems()
    setTimeout(hideMenuItems, 500)
    setTimeout(hideMenuItems, 1000)
    setTimeout(hideMenuItems, 2000)
    setTimeout(hideMenuItems, 5000)

    // Set up mutation observer for dynamic content
    const observer = new MutationObserver((mutations) => {
      let shouldRun = false
      mutations.forEach(mutation => {
        if (mutation.type === 'childList' && mutation.addedNodes.length > 0) {
          shouldRun = true
        }
      })
      if (shouldRun) {
        setTimeout(hideMenuItems, 100)
      }
    })

    observer.observe(document.body, {
      childList: true,
      subtree: true,
      characterData: true,
    })

    // Cleanup function
    return () => {
      observer.disconnect()
      const styleElement = document.getElementById(styleId)
      if (styleElement) {
        styleElement.remove()
      }
    }
  }, [])

  return null
}

export default GlobalAdminStyles