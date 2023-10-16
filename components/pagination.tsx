'use client'

import Link from 'next/link'
import { usePathname, useSearchParams } from 'next/navigation'
import { useCallback, useMemo } from 'react'

import { cn } from '@/lib/utils'

interface PaginationProps {
  pages: number
  activePage: number
  showPagination: boolean
}

export function Pagination({
  pages,
  activePage,
  showPagination,
}: PaginationProps) {
  if (!showPagination) return null

  const pathname = usePathname()
  const parentPath = pathname.replace(/\/\d+$/, '')

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

  const setLink = (pageNumber: number) =>
    category
      ? `${parentPath}/${pageNumber}?${setParam('category', category)}`
      : `${parentPath}/${pageNumber}`

  return (
    <div className="flex justify-center mt-8">
      {[...Array(pages).keys()].map((page) => {
        const pageNumber = page + 1

        const className = cn(
          'px-4 py-2 mx-1 text-sm font-medium text-gray-700 rounded-md hover:bg-gray-200 focus:outline-none focus:bg-gray-200',
          {
            'bg-gray-200 pointer-events-none': pageNumber === activePage,
          }
        )

        return (
          <Link
            className={className}
            key={pageNumber}
            href={setLink(pageNumber)}
          >
            {pageNumber}
          </Link>
        )
      })}
    </div>
  )
}
