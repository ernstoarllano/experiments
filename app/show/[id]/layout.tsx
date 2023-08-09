interface LayoutProps {
  details: React.ReactNode
  episodes: React.ReactNode
}

export default function Layout({ details, episodes }: LayoutProps) {
  return (
    <>
      {details}
      {episodes}
    </>
  )
}
