import Image from 'next/image'
import { Suspense } from 'react'

import { prisma } from '@/lib/prisma'
import { formatCurrency } from '@/lib/utils'

import { Skeleton } from '@/components/ui/skeleton'

interface ProductProps {
  id: string
}

const ProductSkeleton = () => (
  <>
    <Skeleton className="w-full h-52 mb-4" />
    <Skeleton className="w-52 h-8 mb-4" />
    <Skeleton className="w-28 h-8 mb-4" />
  </>
)

export async function Product({ id }: ProductProps) {
  const product = await prisma.product.findUnique({
    where: {
      id,
    },
  })

  if (!product) return null

  return (
    <Suspense fallback={<ProductSkeleton />}>
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
    </Suspense>
  )
}
