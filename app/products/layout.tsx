interface LayoutProps {
  children: React.ReactNode
}

export default function Layout({ children }: LayoutProps) {
  return <div className="w-5/6 mx-auto py-8">{children}</div>
}
