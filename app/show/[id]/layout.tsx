type ShowLayoutLayoutProps = {
  details: React.ReactNode
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
