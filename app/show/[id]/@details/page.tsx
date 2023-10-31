import ShowDetails from '@/components/show-details'

import { useShow } from '@/hooks/use-show'

interface PageProps {
  params: {
    id: string
  }
}

export default async function Page({ params }: PageProps) {
  const { id } = params

  const { show } = await useShow(id)

  return (
    <>
      <ShowDetails show={show} />
    </>
  )
}
