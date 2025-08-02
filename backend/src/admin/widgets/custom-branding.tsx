import { defineWidgetConfig } from "@medusajs/admin-sdk"
import { Container } from "@medusajs/ui"
import { useEffect } from "react"

const CustomBrandingWidget = () => {
  useEffect(() => {
    // Apply custom branding after component mounts
    const applyBranding = () => {
      // Replace "Welcome to Medusa" with "Welcome to myBoxNCase"
      const welcomeElements = document.querySelectorAll('*')
      welcomeElements.forEach(element => {
        if (element.textContent === 'Welcome to Medusa') {
          element.textContent = 'Welcome to myBoxNCase'
        }
      })

      // Use a more specific approach for text replacement
      const walker = document.createTreeWalker(
        document.body,
        NodeFilter.SHOW_TEXT,
        null,
        false
      )

      const textNodes: Text[] = []
      let node: Node | null
      while (node = walker.nextNode()) {
        if (node.textContent?.includes('Welcome to Medusa')) {
          textNodes.push(node as Text)
        }
      }

      textNodes.forEach(textNode => {
        if (textNode.textContent) {
          textNode.textContent = textNode.textContent.replace('Welcome to Medusa', 'Welcome to myBoxNCase')
        }
      })
    }

    // Apply branding immediately and also set up observer for dynamic content
    applyBranding()

    // Set up mutation observer to catch dynamically loaded content
    const observer = new MutationObserver(() => {
      applyBranding()
    })

    observer.observe(document.body, {
      childList: true,
      subtree: true,
      characterData: true
    })

    return () => {
      observer.disconnect()
    }
  }, [])

  return null // This widget doesn't render anything visible
}

export const config = defineWidgetConfig({
  zone: "login.before"
})

export default CustomBrandingWidget