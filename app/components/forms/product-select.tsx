'use client'

import { useRouter, useSearchParams } from 'next/navigation'
import { useCallback, useMemo } from 'react'

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/app/components/ui/select'

type Option = {
  id: string | null
  category: string | null
}

type ProductSelectProps = {
  options: Option[] | null
}

export function ProductSelect({ options }: ProductSelectProps) {
  const router = useRouter()
  const searchParams = useSearchParams()

  const category = useMemo(
    () => searchParams.get('category') as string,
    [searchParams]
  )

  const setParam = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams({
        category,
      })
      params.set(name, value)

      return params.toString()
    },
    [category]
  )

  return (
    <Select
      defaultValue={category || ''}
      onValueChange={(value) => {
        router.push('/products' + '?' + setParam('category', value))
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
