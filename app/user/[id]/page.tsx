import { ChevronLeft } from 'lucide-react'
import Link from 'next/link'

import { Button } from '@/app/components/ui/button'
import { Followers } from '@/app/components/user/followers'
import { Organizations } from '@/app/components/user/organizations'
import { Profile } from '@/app/components/user/profile'
import { Repos } from '@/app/components/user/repos'

import {
  getFollowers,
  getOrganizations,
  getRepos,
  getUser,
} from '@/app/db/queries'

type UserPageProps = {
  /**
   * The params object is populated with the dynamic route parameters
   */
  params: {
    /**
     * The user id
     */
    id: string
  }
}

/**
 * Component for the user page.
 *
 * @param {UserPageProps} props - The props for the component
 * @returns {JSX.Element} The user page.
 */
export default async function UserPage({ params }: UserPageProps) {
  const user = await getUser(params.id)
  const followers = await getFollowers(params.id)
  const organizations = await getOrganizations(params.id)
  const repos = await getRepos(params.id)

  const { login, avatar_url } = { ...user }

  return (
    <div className="p-8 space-y-16">
      <Button asChild>
        <Link href="/users">
          <ChevronLeft className="mr-2" />
          Back
        </Link>
      </Button>
      <div className="space-y-6">
        <Profile userName={login} image={avatar_url} />
        <div className="flex flex-col lg:flex-row lg:items-center lg:space-x-12 space-y-8 lg:space-y-0">
          <Followers followers={followers} />
          <Organizations organizations={organizations} />
        </div>
      </div>
      <Repos repos={repos} />
    </div>
  )
}
