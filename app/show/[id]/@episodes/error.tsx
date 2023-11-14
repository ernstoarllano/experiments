'use client'

import { Alert, AlertDescription } from '@/app/components/ui/alert'

/**
 * Component for displaying an error when loading episodes.
 *
 * @returns {JSX.Element} The episodes error.
 */
export default function EpisodesError() {
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
