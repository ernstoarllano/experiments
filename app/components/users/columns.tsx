'use client'

import { ColumnDef } from '@tanstack/react-table'
import { BuildingIcon, GithubIcon, UserIcon } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

import { User } from '@/types/user'

/**
 * The columns for the users table.
 *
 * @type {ColumnDef<User>[]} The columns.
 */
export const columns: ColumnDef<User>[] = [
  {
    header: 'User',
    cell: ({ row: { original } }) => {
      const { login, avatar_url } = { ...original }

      return (
        <Link className="flex items-center space-x-6" href={`/user/${login}`}>
          <Image
            className="rounded-full"
            src={avatar_url}
            width={30}
            height={30}
            alt={login}
          />
          <span className="min-w-[100px] font-semibold">{login}</span>
        </Link>
      )
    },
  },
  {
    header: 'GitHub',
    cell: ({ row: { original } }) => {
      const { html_url } = { ...original }

      return (
        <a href={html_url} target="_blank">
          <GithubIcon size={16} />
        </a>
      )
    },
  },
  {
    header: 'Type',
    cell: ({ row: { original } }) => {
      const { type } = { ...original }

      return (
        <span>
          {type === 'User' ? (
            <UserIcon size={16} />
          ) : (
            <BuildingIcon size={16} />
          )}
        </span>
      )
    },
  },
]
