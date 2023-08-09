import Feature from '@/components/feature'
import ThemeSwitcher from '@/components/theme-switcher'
import { Button } from '@/components/ui/button'

export default function Home() {
  return (
    <main className="relative">
      <div className="flex flex-col items-center justify-center min-h-screen">
        <span className="block mb-4 px-3 py-1 text-xs rounded-full dark:bg-gray-900">
          Work In Progress
        </span>
        <h1 className="max-w-4xl text-6xl font-bold text-center tracking-tighter">
          An example app built using Next.js 13 server components
        </h1>
        <p className="mt-6 font-light dark:text-gray-400">
          I'm building a web app with Next.js 13 and open sourcing everything.
        </p>
        <div className="mt-8 space-x-4">
          <Button variant="outline">
            <a
              href="https://github.com/ernstoarllano/experiments"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </Button>
        </div>
      </div>
      <div className="w-full">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="mb-4 text-4xl font-bold">Features</h2>
          <p className="font-light dark:text-gray-400">
            This project is an experiment to see how a modern app with features
            like auth, subscriptions, API routes and static pages would work in
            Next.js 13 app dir.
          </p>
        </div>
        <div className="grid grid-cols-3 gap-4 max-w-6xl mt-6 mx-auto">
          <Feature
            title="Next.js 13"
            description="App dir, Routing, Layouts, Loading UI"
          />
          <Feature
            title="React 18"
            description="Server and Client components"
          />
          <Feature
            title="Database"
            description="ORM using Prisma and deployed on Railway"
          />
          <Feature
            title="Auth"
            description="Authentication using NextAuth.js"
          />
          <Feature
            title="Next Theme"
            description="Light and Dark mode using Next Theme"
          />
        </div>
      </div>
      <ThemeSwitcher />
    </main>
  )
}
