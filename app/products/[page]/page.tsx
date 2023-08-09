import { prisma } from '@/lib/prisma'

import Modal from '@/components/modal'
import Pagination from '@/components/pagination'
import Product from '@/components/product'
import ProductSelect from '@/components/product-select'
import Products from '@/components/products'
import { Alert, AlertDescription } from '@/components/ui/alert'

interface PageProps {
  params: {
    page: string
  }
  searchParams: {
    category: string
    product: string
  }
}

export default async function Page({ params, searchParams }: PageProps) {
  const { page } = params

  const take = 2
  const skip = (Number(page) - 1) * take

  const query = await prisma.$transaction([
    prisma.product.findMany({
      select: {
        id: true,
        category: true,
      },
      distinct: ['category'],
    }),
    prisma.product.count(),
    prisma.product.findMany({
      where: {
        category: searchParams.category,
      },
      take,
      skip,
    }),
  ])
  const categories = query[0]
  const total = query[1]
  const products = query[2]

  const hasProduct = !!searchParams.product

  return (
    <>
      <ProductSelect options={categories} />
      <div className="mt-8">
        {products && products.length > 0 ? (
          <Products products={products} />
        ) : (
          <Alert>
            <AlertDescription>
              There are no products in the database yet.
            </AlertDescription>
          </Alert>
        )}
        <Pagination
          pages={Math.ceil(total / take)}
          activePage={parseInt(page)}
        />
      </div>
      {hasProduct && (
        <Modal open={hasProduct} closeHref="/products">
          <Product id={searchParams.product} />
        </Modal>
      )}
    </>
  )
}
