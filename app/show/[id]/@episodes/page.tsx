import { ShowEpisodes } from '@/app/components/show/show-episodes'

import { useEpisodes } from '@/hooks/use-episodes'

type EpisodesPageProps = {
  /**
   * The params object is populated with the dynamic route parameters
   */
  params: {
    /**
     * The show id
     */
    id: string
  }
}

/**
 * Component for the show episodes page.
 *
 * @param {PageProps} props - The props for the component
 * @returns {JSX.Element} The show episodes page.
 */
export default async function EpisodesPage({ params }: EpisodesPageProps) {
  const { id } = params

  const { episodes } = await useEpisodes(id)

  return (
    <div className="p-8 space-y-4">
      <h4 className="text-xl font-bold">Episodes</h4>
      <ShowEpisodes episodes={episodes} />
    </div>
  )
}
