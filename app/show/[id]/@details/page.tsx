import { prisma } from '@/lib/prisma'

import ShowDetails from '@/components/show-details'

interface PageProps {
  params: {
    id: string
  }
}

export default async function Page({ params }: PageProps) {
  const { id } = params

  const show = await prisma.show.findUnique({
    where: {
      id,
    },
  })

  return (
    <>
      <ShowDetails show={show} />
    </>
  )
}
