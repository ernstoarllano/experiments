import { ShowDetails } from '@/app/components/show/show-details'

import { useShow } from '@/hooks/use-show'

type DetailsPageProps = {
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
 * Component for the show details page.
 *
 * @param {PageProps} props - The props for the component
 * @returns {JSX.Element} The show details page.
 */
export default async function DetailsPage({ params }: DetailsPageProps) {
  const { id } = params

  const { show } = await useShow(id)

  return <ShowDetails show={show} />
}
