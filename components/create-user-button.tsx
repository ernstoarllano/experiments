'use client'

import { experimental_useFormStatus as useFormStatus } from 'react-dom'

import { Button } from '@/components/ui/button'

export function CreateUserButton() {
  const { pending } = useFormStatus()

  return (
    <Button type="submit" disabled={pending}>
      {pending ? 'Creating User...' : 'Create User'}
    </Button>
  )
}
