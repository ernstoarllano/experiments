import Image from 'next/image'

import { Episode } from '@prisma/client'

interface ShowEpisodesProps {
  episodes: Episode[]
}

export default function ShowEpisodes({ episodes }: ShowEpisodesProps) {
  return (
    <div className="grid grid-cols-3 lg:grid-cols-5 gap-6">
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
          <p>{episode.description}</p>
        </div>
      ))}
    </div>
  )
}
