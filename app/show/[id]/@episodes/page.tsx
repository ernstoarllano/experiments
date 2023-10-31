import { ShowEpisodes } from '@/components/show-episodes'

import { useEpisodes } from '@/hooks/use-episodes'

interface PageProps {
  params: {
    id: string
  }
}

export default async function Page({ params }: PageProps) {
  const { id: showId } = params

  const { episodes } = await useEpisodes(showId)

  return (
    <div className="p-8 space-y-4">
      <h4 className="text-xl font-bold">Episodes</h4>
      <ShowEpisodes episodes={episodes} />
    </div>
  )
}
