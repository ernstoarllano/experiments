type ShowLayoutLayoutProps = {
  /**
   * The details component
   */
  details: React.ReactNode
  /**
   * The episodes component
   */
  episodes: React.ReactNode
}

/**
 * Component for the show layout.
 *
 * @param {ShowLayoutLayoutProps} props - The props for the component
 * @returns {JSX.Element} The show layout.
 */
export default function ShowLayout({
  details,
  episodes,
}: ShowLayoutLayoutProps) {
  return (
    <>
      {details}
      {episodes}
    </>
  )
}
