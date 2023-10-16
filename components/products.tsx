'use client'

import { Product } from '@prisma/client'
import Image from 'next/image'
import Link from 'next/link'

import { formatCurrency } from '@/lib/utils'

interface ProductsProps {
  products: Product[]
}

export function Products({ products }: ProductsProps) {
  const formatParam = (id: string) => `?product=${id}`

  return (
    <div className="grid grid-cols-2 gap-8">
      {products.map((product) => (
        <Link key={product.id} href={formatParam(product.id)} scroll={false}>
          <div className="flex flex-col">
            <Image
              className="block mb-4 object-fit aspect-video"
              src={product.image as string}
              width={600}
              height={600}
              alt={product.name}
            />
            <h3 className="font-bold">{product.name}</h3>
            <p>{product.description}</p>
            <span>{formatCurrency(product.price)}</span>
          </div>
        </Link>
      ))}
    </div>
  )
}
