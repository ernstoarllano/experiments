'use client'

import { Episode } from '@prisma/client'
import Image from 'next/image'

import { Alert, AlertDescription } from '@/app/components/ui/alert'

type ShowEpisodesProps = {
  episodes: Episode[]
}

/**
 * Component for displaying the episodes of a show.
 *
 * @param {ShowEpisodesProps} props - The props for the component
 * @returns {JSX.Element} The episodes of the show.
 */
export function ShowEpisodes({ episodes }: ShowEpisodesProps) {
  if (!episodes.length) {
    return (
      <Alert>
        <AlertDescription>
          There are no episodes for this show.
        </AlertDescription>
      </Alert>
    )
  }

  return (
    <div className="grid grid-cols-3 lg:grid-cols-4 gap-6">
      {episodes.map((episode) => (
        <div key={episode.id}>
          <Image
            className="block mb-4 object-fit aspect-video rounded-xl"
            src={episode.image as string}
            width={400}
            height={225}
            alt={episode.name}
          />
          <h5 className="text-sm">{episode.name}</h5>
          <p className="text-xs line-clamp-3">{episode.description}</p>
        </div>
      ))}
    </div>
  )
}
