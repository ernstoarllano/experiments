import { prisma } from '@/lib/prisma';

/**
 * Hook to get a show
 * 
 * @param {string} id
 * @returns {Promise<[show]>}
 */
export const useShow = async (id: string) => {
  const show = await prisma.show.findUnique({
    where: {
      id,
    },
  })

  return {
    show,
  }
}