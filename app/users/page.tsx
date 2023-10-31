import { SearchUser, User } from '@/types/user'

import { columns } from '@/components/users/columns'
import { DataTable } from '@/components/users/data-table'
import { Search } from '@/components/users/search'

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

interface HomeProps {
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
 * @returns {JSX.Element} The component.
 */
export default async function UserPage({ searchParams }: HomeProps) {
  const users = await getUsers(searchParams.user)

  return (
    <div className="w-5/6 mx-auto space-y-6">
      <Search />
      <DataTable columns={columns} data={users} />
    </div>
  )
}
