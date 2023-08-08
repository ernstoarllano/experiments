import { prisma } from '@/lib/prisma'

import Modal from '@/components/modal'
import Product from '@/components/product'
import ProductSelect from '@/components/product-select'
import Products from '@/components/products'
import { Alert, AlertDescription } from '@/components/ui/alert'

interface PageProps {
  searchParams: {
    category: string
    product: string
  }
}

export default async function Page({ searchParams }: PageProps) {
  const categories = await prisma.product.findMany({
    select: {
      id: true,
      category: true,
    },
    distinct: ['category'],
  })
  const products = await prisma.product.findMany({
    where: {
      category: searchParams.category,
    },
  })
  const hasProduct = !!searchParams.product

  return (
    <div className="w-5/6 mx-auto py-8">
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
      </div>
      {hasProduct && (
        <Modal open={hasProduct} closeHref="/fetch-based-on-select">
          <Product id={searchParams.product} />
        </Modal>
      )}
    </div>
  )
}
