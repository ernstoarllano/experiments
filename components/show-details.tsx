import { Show } from '@prisma/client'
import Image from 'next/image'

interface ShowDetailsProps {
  show: Show | null
}

export default function ShowDetails({ show }: ShowDetailsProps) {
  if (!show) return null

  return (
    <div className="flex flex-col lg:flex-row gap-8 p-8">
      <div className="shrink-0">
        <Image
          src={show?.image as string}
          width={200}
          height={200}
          alt={show?.name as string}
        />
      </div>
      <div className="flex-grow space-y-4">
        <h3 className="text-3xl font-bold">{show?.name}</h3>
        <p>{show?.description}</p>
      </div>
    </div>
  )
}
