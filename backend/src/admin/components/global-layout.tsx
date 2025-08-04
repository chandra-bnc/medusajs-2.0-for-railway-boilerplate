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
        element.remove()
        
        // Hide parent containers
        let parent = element.parentElement
        while (parent && parent !== document.body) {
          if (parent.getAttribute('role') === 'menuitem' || 
              parent.tagName.toLowerCase() === 'li' ||
              parent.tagName.toLowerCase() === 'button') {
            parent.style.display = 'none'
            parent.remove()
            break
          }
          parent = parent.parentElement
        }
      })

      // More aggressive text-based search
      const allElements = Array.from(document.querySelectorAll('*'))
      allElements.forEach(element => {
        const text = element.textContent?.trim().toLowerCase() || ''
        const innerHTML = element.innerHTML?.toLowerCase() || ''
        
        // Check for documentation/changelog in text or HTML
        if (text.includes('documentation') || text.includes('changelog') ||
            innerHTML.includes('documentation') || innerHTML.includes('changelog') ||
            text === 'documentation' || text === 'changelog') {
          
          const htmlElement = element as HTMLElement
          htmlElement.style.display = 'none'
          
          // Try to remove parent menu structures
          let parent = element.parentElement
          let depth = 0
          while (parent && parent !== document.body && depth < 10) {
            const parentText = parent.textContent?.trim().toLowerCase() || ''
            if (parentText === 'documentation' || parentText === 'changelog' ||
                parent.getAttribute('role') === 'menuitem' ||
                parent.tagName.toLowerCase() === 'li' ||
                parent.classList.contains('menu-item')) {
              parent.style.display = 'none'
              try {
                parent.remove()
              } catch (e) {
                // Ignore removal errors
              }
              break
            }
            parent = parent.parentElement
            depth++
          }
          
          // Try to remove the element itself
          try {
            htmlElement.remove()
          } catch (e) {
            // Ignore removal errors
          }
        }
      })

      // Additional targeted removal for common menu patterns
      const menuSelectors = [
        '[data-testid="documentation"]',
        '[data-testid="changelog"]', 
        '[aria-label*="documentation" i]',
        '[aria-label*="changelog" i]',
        'a[title*="documentation" i]',
        'a[title*="changelog" i]',
        'button[title*="documentation" i]',
        'button[title*="changelog" i]'
      ]
      
      menuSelectors.forEach(selector => {
        const elements = document.querySelectorAll(selector)
        elements.forEach(el => {
          const htmlEl = el as HTMLElement
          htmlEl.style.display = 'none'
          try {
            htmlEl.remove()
          } catch (e) {
            // Ignore removal errors
          }
        })
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