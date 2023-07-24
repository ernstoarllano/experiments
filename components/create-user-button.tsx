'use client'

import { experimental_useFormStatus as useFormState } from 'react-dom'

import { Button } from '@/components/ui/button'

export default function CreateUserButton() {
  const { pending } = useFormState()

  return (
    <Button type="submit" disabled={pending}>
      {pending ? 'Creating User...' : 'Create User'}
    </Button>
  )
}
