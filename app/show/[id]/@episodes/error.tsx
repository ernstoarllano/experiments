'use client'

import { Alert, AlertDescription } from '@/components/ui/alert'

export default function Error() {
  return (
    <div className="p-8">
      <Alert>
        <AlertDescription>
          There was an error loading the episodes.
        </AlertDescription>
      </Alert>
    </div>
  )
}
