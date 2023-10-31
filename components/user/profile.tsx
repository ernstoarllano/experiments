import Image from 'next/image'

interface ProfileProps {
  /**
   * The user name
   */
  userName: string
  /**
   * The user image
   */
  image: string
}

/**
 * Component for displaying the profile.
 *
 * @param {ProfileProps} props The props.
 * @returns {JSX.Element} The profile.
 */
export function Profile({ userName, image }: ProfileProps) {
  return (
    <div className="flex items-center space-x-6">
      <Image
        className="rounded-full"
        src={image}
        width={100}
        height={100}
        alt={userName}
      />
      <h1 className="text-4xl text-bold">{userName}</h1>
    </div>
  )
}
