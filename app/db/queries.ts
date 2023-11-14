import { Follower } from '@/types/follower'
import { Organization } from '@/types/organization'
import { Repo } from '@/types/repo'
import { SearchUser, User } from '@/types/user'

import { fetchData } from '@/lib/fetch'

/**
 * Get the users
 *
 * @param {string} search - The search query (optional)
 * @returns {Promise<User[]>} The users
 */
export async function getUsers(search: string | undefined): Promise<User[]> {
  let url

  if (search) {
    url = `https://api.github.com/search/users?q=${search}`
  } else {
    url = 'https://api.github.com/users'
  }

  const data = await fetchData<User[] | SearchUser>(url)

  if (search) return (data as SearchUser).items

  return data as User[]
}

/**
 * Get the user data
 *
 * @param user The user name
 * @returns The user data
 */
export async function getUser(user: string): Promise<User> {
  const data = await fetchData<User>(`https://api.github.com/users/${user}`)

  return data
}

/**
 * Get the user followers
 *
 * @param user The user name
 * @returns The user followers
 */
export async function getFollowers(user: string): Promise<Follower[]> {
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
export async function getOrganizations(user: string): Promise<Organization[]> {
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
export async function getRepos(user: string): Promise<Repo[]> {
  const data = await fetchData<Repo[]>(
    `https://api.github.com/users/${user}/repos`
  )

  return data
}