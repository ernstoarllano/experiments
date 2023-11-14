import { prisma } from '@/lib/prisma';

/**
 * Hook to get a shows episodes
 * 
 * @param {string} showId
 * @returns {Promise<[episodes]>}
 */
export const useEpisodes = async (showId: string) => {
  const episodes = await prisma.episode.findMany({
    where: {
      showId,
    },
  })

  return {
    episodes,
  }
}