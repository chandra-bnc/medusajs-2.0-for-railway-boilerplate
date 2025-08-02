import { defineWidgetConfig } from "@medusajs/admin-sdk"
import { useEffect } from "react"

const GlobalBrandingWidget = () => {
  useEffect(() => {
    // Inject custom styles to hide unwanted elements and override branding
    const style = document.createElement('style')
    style.textContent = `
      /* Hide Medusa logos and avatars */
      [data-testid="avatar-box"],
      [data-testid="logo-box"] {
        display: none !important;
      }
      
      /* Hide documentation and changelog links */
      a[href*="docs.medusajs.com"],
      a[href*="github.com/medusajs/medusa/releases"] {
        display: none !important;
      }
    `
    document.head.appendChild(style)

    // Text replacement function
    const replaceText = () => {
      const walker = document.createTreeWalker(
        document.body,
        NodeFilter.SHOW_TEXT,
        {
          acceptNode: (node) => {
            return node.textContent && node.textContent.includes('Welcome to Medusa')
              ? NodeFilter.FILTER_ACCEPT
              : NodeFilter.FILTER_REJECT
          }
        },
        false
      )

      const textNodes: Text[] = []
      let node: Node | null
      while (node = walker.nextNode()) {
        textNodes.push(node as Text)
      }

      textNodes.forEach(textNode => {
        if (textNode.textContent) {
          textNode.textContent = textNode.textContent.replace(/Welcome to Medusa/g, 'Welcome to myBoxNCase')
        }
      })
    }

    // Apply text replacement immediately and on content changes
    replaceText()

    const observer = new MutationObserver(() => {
      replaceText()
    })

    observer.observe(document.body, {
      childList: true,
      subtree: true,
      characterData: true
    })

    return () => {
      observer.disconnect()
      if (style.parentNode) {
        style.parentNode.removeChild(style)
      }
    }
  }, [])

  return null
}

export const config = defineWidgetConfig({
  zone: "login.before"
})

export default GlobalBrandingWidget