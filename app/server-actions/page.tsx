import { prisma } from '@/lib/prisma'

import { CreateUserButton } from '@/app/components/create-user-button'
import { Alert, AlertDescription } from '@/app/components/ui/alert'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/app/components/ui/table'

import { createUser } from '@/app/db/actions'

export default async function ServerActions() {
  const users = await prisma.user.findMany()

  return (
    <div className="w-5/6 mx-auto">
      <form className="mb-8 py-8 text-right" action={createUser}>
        <CreateUserButton />
      </form>
      {users && users.length > 0 ? (
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Email</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {users.map((user) => (
              <TableRow key={user.id}>
                <TableCell>{user.name}</TableCell>
                <TableCell>{user.email}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      ) : (
        <Alert>
          <AlertDescription>
            There are no users in the database yet.
          </AlertDescription>
        </Alert>
      )}
    </div>
  )
}
