'use client'

import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { useCallback, useMemo } from 'react'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

export function Search() {
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()

  const user = useMemo(() => searchParams.get('user') || '', [searchParams])

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams({
        user,
      })
      params.set(name, value)

      return params.toString()
    },
    [user]
  )

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    router.push(pathname + '?' + createQueryString('user', e.target.value))
  }

  const handleClear = () => {
    router.push(pathname)
  }

  return (
    <div className="flex items-center max-w-xs space-x-3">
      <Input value={user} onChange={handleSearch} placeholder="Search users" />
      <Button onClick={handleClear}>Reset</Button>
    </div>
  )
}
