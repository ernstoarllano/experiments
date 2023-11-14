'use client'

import { useFormStatus } from 'react-dom'

import { Button } from '@/app/components/ui/button'

export function CreateUserButton() {
  const { pending } = useFormStatus()

  return (
    <Button type="submit" disabled={pending}>
      {pending ? 'Creating User...' : 'Create User'}
    </Button>
  )
}
