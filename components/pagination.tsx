'use client'

import Link from 'next/link'

import { cn } from '@/lib/utils'

interface PaginationProps {
  pages: number
  activePage?: number
}

export default function Pagination({ pages, activePage }: PaginationProps) {
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
            href={`/pagination/${pageNumber}`}
          >
            {pageNumber}
          </Link>
        )
      })}
    </div>
  )
}
