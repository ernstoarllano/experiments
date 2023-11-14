import Image from 'next/image'
import Link from 'next/link'

import { Follower } from '@/types/follower'

type FollowersProps = {
  /**
   * The followers array
   */
  followers: Follower[]
}

/**
 * Component for displaying the followers.
 *
 * @param {FollowersProps} props The props.
 * @returns {JSX.Element} The followers.
 */
export function Followers({ followers }: FollowersProps) {
  const totalFollowers = followers.length
  const firstFiveFollowers = followers.slice(0, 5)

  return (
    <div className="flex flex-col justify-center space-y-3">
      <h3 className="text-md font-bold">Followers ({totalFollowers})</h3>
      <div className="flex items-center space-x-3">
        {firstFiveFollowers && firstFiveFollowers.length > 0 ? (
          firstFiveFollowers.map((follower) => (
            <div key={follower.id} className="flex items-center space-x-6">
              <Link href={`/user/${follower.login}`}>
                <Image
                  className="rounded-full"
                  src={follower.avatar_url}
                  width={40}
                  height={40}
                  alt={follower.login}
                />
              </Link>
            </div>
          ))
        ) : (
          <p className="text-sm">No followers found.</p>
        )}
      </div>
    </div>
  )
}
