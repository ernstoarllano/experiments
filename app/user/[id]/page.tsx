import { ChevronLeft } from 'lucide-react'
import Link from 'next/link'

import { Follower } from '@/types/follower'
import { Organization } from '@/types/organization'
import { Repo } from '@/types/repo'
import { User } from '@/types/user'

import { Button } from '@/app/components/ui/button'
import { Followers } from '@/app/components/user/followers'
import { Organizations } from '@/app/components/user/organizations'
import { Profile } from '@/app/components/user/profile'
import { Repos } from '@/app/components/user/repos'

import { fetchData } from '@/lib/fetch'

/**
 * Get the user data
 *
 * @param user The user name
 * @returns The user data
 */
async function getUser(user: string): Promise<User> {
  const data = await fetchData<User>(`https://api.github.com/users/${user}`)

  return data
}

/**
 * Get the user followers
 *
 * @param user The user name
 * @returns The user followers
 */
async function getFollowers(user: string): Promise<Follower[]> {
  const data = await fetchData<Follower[]>(
    `https://api.github.com/users/${user}/followers`
  )

  return data
}

/**
 * Get the user organizations
 *
 * @param {string} user The user name
 * @returns The user organizations
 */
async function getOrganizations(user: string): Promise<Organization[]> {
  const data = await fetchData<Organization[]>(
    `https://api.github.com/users/${user}/orgs`
  )

  return data
}

/**
 * Get the user repos
 *
 * @param {string} user The user name
 * @returns The user repos
 */
async function getRepos(user: string): Promise<Repo[]> {
  const data = await fetchData<Repo[]>(
    `https://api.github.com/users/${user}/repos`
  )

  return data
}

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
