'use client'

import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { useCallback } from 'react'

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

interface Option {
  id: string | null
  category: string | null
}

interface ProductSelectProps {
  options: Option[] | null
}

export default function ProductSelect({ options }: ProductSelectProps) {
  const pathname = usePathname()
  const router = useRouter()
  const searchParams = useSearchParams()

  const category = searchParams.get('category') as string

  const setParam = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams({
        category,
      })
      params.set(name, value)

      return params.toString()
    },
    [searchParams]
  )

  return (
    <Select
      onValueChange={(value) => {
        router.push(pathname + '?' + setParam('category', value))
      }}
    >
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Category" />
      </SelectTrigger>
      <SelectContent>
        {options &&
          options.map((option) => (
            <SelectItem key={option.id} value={option.category as string}>
              {option.category}
            </SelectItem>
          ))}
      </SelectContent>
    </Select>
  )
}
