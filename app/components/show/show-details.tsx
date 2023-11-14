'use client'

import { Show } from '@prisma/client'
import Image from 'next/image'

import { Button } from '@/app/components/ui/button'

type ShowDetailsProps = {
  show: Show | null
}

/**
 * Component for displaying the details of a show.
 *
 * @param {ShowDetailsProps} props - The props for the component
 * @returns {JSX.Element} The details of the show.
 */
export function ShowDetails({ show }: ShowDetailsProps) {
  if (!show) return null

  return (
    <div className="relative">
      <div className="w-auto h-screen">
        <Image
          src={show?.image as string}
          alt={show?.name as string}
          layout="fill"
          className="object-cover"
        />
      </div>
      <div className="flex flex-col absolute top-0 bottom-0 left-0 p-8">
        <h3 className="self-start text-3xl font-bold">{show?.name}</h3>
        <div className="grid grid-cols-12 gap-8 mt-auto mb-0">
          <div className="col-span-3 space-y-2">
            <Button className="w-full">Watch on Apple TV</Button>
            <span className="block text-xs text-center">
              Available on Prime Video, iTunes, Hulu, Max
            </span>
          </div>
          <div className="col-span-9 space-y-2">
            <p className="text-md">{show?.description}</p>
            <span className="block text-xs">{show?.genre}</span>
          </div>
        </div>
      </div>
    </div>
  )
}
