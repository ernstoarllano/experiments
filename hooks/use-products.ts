import { prisma } from '@/lib/prisma';

/**
 * Hook to get products
 * 
 * @param {string} category
 * @param {number} take
 * @param {number} skip
 * @returns {Promise<[categories, products, total]>}
 */
export const useProducts = async (category: string, take: number = 4, skip: number = 0) => {
  /**
   * Query for categories, products and total
   * 
   * @returns {Promise<[categories, products, total]>}
   */
  const [categories, products, total] = await prisma.$transaction([
    prisma.product.findMany({
      select: {
        id: true,
        category: true,
      },
      distinct: ['category'],
    }),
    prisma.product.findMany({
      where: {
        ...(category ? { category } : {}),
      },
      take,
      skip,
    }),
    prisma.product.count({
      where: {
        ...(category ? { category } : {}),
      },
    }),
  ])

  return {
    categories,
    products,
    total
  }
};