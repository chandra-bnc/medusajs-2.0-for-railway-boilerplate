import { Container, Heading, Text } from "@medusajs/ui"

const BoxNCaseAIPage = () => {
  return (
    <Container>
      <div className="flex flex-col gap-y-2">
        <Heading level="h1">BoxNCaseAI Marketer</Heading>
        <Text className="text-ui-fg-subtle">
          Request access to BoxNCaseAI Marketer features
        </Text>
      </div>
      
      <div className="mt-8">
        <div className="bg-ui-bg-subtle rounded-lg p-6">
          <Heading level="h2" className="mb-4">Coming Soon</Heading>
          <Text>
            BoxNCaseAI Marketer integration is coming soon. This will provide AI-powered 
            marketing tools and automation for your B2B e-commerce platform.
          </Text>
          <Text className="mt-4">
            Contact your administrator for early access to this feature.
          </Text>
        </div>
      </div>
    </Container>
  )
}

export default BoxNCaseAIPage