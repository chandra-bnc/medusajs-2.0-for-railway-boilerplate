'use client'

import { useEffect } from 'react'
import { Text, Heading } from '@medusajs/ui'
import Button from '@/modules/common/components/button'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error('Page error:', error)
  }, [error])

  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] p-8">
      <Heading className="text-2xl mb-4">Something went wrong!</Heading>
      <Text className="text-ui-fg-subtle mb-6 text-center max-w-md">
        We apologize for the inconvenience. The page encountered an error while loading.
      </Text>
      {process.env.NODE_ENV === 'development' && (
        <Text className="text-sm text-ui-fg-muted mb-4 font-mono bg-ui-bg-subtle p-2 rounded">
          {error.message}
        </Text>
      )}
      <Button
        onClick={() => reset()}
        variant="primary"
        className="rounded-full px-6 py-2"
      >
        Try again
      </Button>
    </div>
  )
}