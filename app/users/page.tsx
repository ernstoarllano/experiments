import { SearchUser, User } from '@/types/user'

import { columns } from '@/app/components/users/columns'
import { DataTable } from '@/app/components/users/data-table'
import { Search } from '@/app/components/users/search'

import { fetchData } from '@/lib/fetch'

/**
 * Get the users
 *
 * @param {string} search - The search query (optional)
 * @returns {Promise<User[]>} The users
 */
async function getUsers(search: string | undefined): Promise<User[]> {
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

type UserPageProps = {
  /**
   * The searchParams object is populated with the dynamic route parameters
   */
  searchParams: {
    /**
     * The user name
     */
    user: string
  }
}

/**
 * Component for the users page.
 *
 * @param {UserPageProps} props - The props for the component
 * @returns {JSX.Element} The users page.
 */
export default async function UsersPage({ searchParams }: UserPageProps) {
  const users = await getUsers(searchParams.user)

  return (
    <div className="p-8 space-y-16">
      <Search />
      <DataTable columns={columns} data={users} />
    </div>
  )
}
