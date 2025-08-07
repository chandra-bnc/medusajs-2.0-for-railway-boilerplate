import { Heading, Text } from "@medusajs/ui"
import { 
  Phone, 
  Envelope,
  BuildingStorefront,
  ArrowUturnLeft,
  QuestionMarkCircle,
  Truck
} from "@medusajs/icons"
import LocalizedClientLink from "@/modules/common/components/localized-client-link"

const SupportContact = () => {
  const contactItems = [
    {
      icon: Phone,
      title: "Call Us",
      content: "+1 646-750-0990",
      href: "tel:+16467500990"
    },
    {
      icon: Envelope,
      title: "Email Us",
      content: "sales@beemax.us",
      href: "mailto:sales@beemax.us"
    },
    {
      icon: BuildingStorefront,
      title: "Visit Us",
      content: "267 5th Ave, New York, NY",
      href: null
    }
  ]

  const quickLinks = [
    {
      icon: QuestionMarkCircle,
      title: "FAQs",
      href: "/faq"
    },
    {
      icon: Truck,
      title: "Shipping",
      href: "/shipping"
    },
    {
      icon: ArrowUturnLeft,
      title: "Returns & Refunds",
      subtitle: "30-day policy",
      href: "/returns"
    }
  ]

  return (
    <section className="py-16 small:py-24 bg-white border-t border-gray-100">
      <div className="content-container">
        <div className="text-center mb-12">
          <Heading level="h2" className="text-3xl small:text-4xl text-[#4A2C2A] font-serif mb-4">
            We're Here to Help
          </Heading>
          <Text className="text-lg text-[#5A5A5A]">
            Questions? Contact our friendly team
          </Text>
        </div>

        <div className="grid grid-cols-1 medium:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Information */}
          <div>
            <Heading level="h3" className="text-xl text-[#4A2C2A] font-semibold mb-6">
              Get in Touch
            </Heading>
            <div className="space-y-4">
              {contactItems.map((item, index) => {
                const Icon = item.icon
                const content = item.href ? (
                  <a 
                    href={item.href}
                    className="text-[#E0B25C] hover:text-[#d4a04f] transition-colors"
                  >
                    {item.content}
                  </a>
                ) : (
                  <Text className="text-[#5A5A5A]">{item.content}</Text>
                )

                return (
                  <div key={index} className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#F8F3EE] flex items-center justify-center">
                      <Icon className="w-5 h-5 text-[#E0B25C]" />
                    </div>
                    <div>
                      <Text className="font-semibold text-[#4A2C2A] text-sm mb-1">
                        {item.title}
                      </Text>
                      {content}
                    </div>
                  </div>
                )
              })}
              
              <div className="mt-6 pt-6 border-t border-gray-100">
                <Text className="text-sm text-[#5A5A5A] mb-2">
                  <span className="font-semibold">Warehouse:</span> New Jersey
                </Text>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <Heading level="h3" className="text-xl text-[#4A2C2A] font-semibold mb-6">
              Quick Links
            </Heading>
            <div className="grid grid-cols-1 small:grid-cols-3 gap-4">
              {quickLinks.map((link, index) => {
                const Icon = link.icon
                return (
                  <LocalizedClientLink
                    key={index}
                    href={link.href}
                    className="group"
                  >
                    <div className="border border-gray-200 rounded-lg p-4 text-center hover:border-[#E0B25C] hover:bg-[#F8F3EE] transition-all">
                      <Icon className="w-8 h-8 text-[#E0B25C] mx-auto mb-2" />
                      <Text className="font-semibold text-[#4A2C2A] group-hover:text-[#E0B25C] transition-colors">
                        {link.title}
                      </Text>
                      {link.subtitle && (
                        <Text className="text-xs text-[#5A5A5A] mt-1">
                          {link.subtitle}
                        </Text>
                      )}
                    </div>
                  </LocalizedClientLink>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SupportContact