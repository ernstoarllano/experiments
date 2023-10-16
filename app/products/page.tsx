import { ProductSelect } from '@/components/forms/product-select'
import { Modal } from '@/components/modal'
import { Pagination } from '@/components/pagination'
import { Product } from '@/components/product'
import { Products } from '@/components/products'
import { Alert, AlertDescription } from '@/components/ui/alert'

import { useProducts } from '@/hooks/use-products'

import { formatPagination } from '@/lib/utils'

interface PageProps {
  searchParams: {
    category: string
    product: string
  }
}

export default async function Page({ searchParams }: PageProps) {
  /**
   * Default pagination values
   */
  const take = 1
  const skip = 0

  const { categories, products, total } = await useProducts(
    searchParams.category,
    take,
    skip
  )

  const hasPagination = products.length < total
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
          pages={formatPagination(total, take)}
          activePage={1}
          showPagination={hasPagination}
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