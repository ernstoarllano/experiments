'use client'

import { ChevronLeft } from 'lucide-react'
import Link from 'next/link'

import { Alert, AlertDescription, AlertTitle } from '@/app/components/ui/alert'
import { Button } from '@/app/components/ui/button'

/**
 * Component for displaying an error when a user is not found.
 *
 * @returns {JSX.Element} The user error.
 */
export default function UserError() {
  return (
    <div className="p-8 space-y-16">
      <Button asChild>
        <Link href="/">
          <ChevronLeft className="mr-2" />
          Back
        </Link>
      </Button>
      <Alert className="space-y-3">
        <AlertTitle className="font-bold">Whoops!</AlertTitle>
        <AlertDescription>No user found.</AlertDescription>
      </Alert>
    </div>
  )
}
