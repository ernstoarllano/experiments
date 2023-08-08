import { prisma } from '@/lib/prisma'

import Modal from '@/components/modal'
import Product from '@/components/product'
import Products from '@/components/products'
import { Alert, AlertDescription } from '@/components/ui/alert'

interface PageProps {
  searchParams: {
    product: string
  }
}

export default async function Page({ searchParams }: PageProps) {
  const products = await prisma.product.findMany()
  const hasProduct = !!searchParams.product

  return (
    <div className="w-5/6 mx-auto py-8">
      {products && products.length > 0 ? (
        <Products products={products} />
      ) : (
        <Alert>
          <AlertDescription>
            There are no products in the database yet.
          </AlertDescription>
        </Alert>
      )}
      {hasProduct && (
        <Modal open={hasProduct} closeHref="/modal">
          <Product id={searchParams.product} />
        </Modal>
      )}
    </div>
  )
}
