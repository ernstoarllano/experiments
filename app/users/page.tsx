import { columns } from '@/app/components/users/columns'
import { DataTable } from '@/app/components/users/data-table'
import { Search } from '@/app/components/users/search'

import { getUsers } from '@/app/db/queries'

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
