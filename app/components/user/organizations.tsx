import Image from 'next/image'

import { Organization } from '@/types/organization'

type OrganizationsProps = {
  /**
   * The organizations array
   */
  organizations: Organization[]
}

/**
 * Component for displaying the organizations.
 *
 * @param {OrganizationsProps} props The props.
 * @returns {JSX.Element} The organizations.
 */
export function Organizations({ organizations }: OrganizationsProps) {
  const totalOrganizations = organizations.length

  return (
    <div className="flex flex-col justify-center space-y-3">
      <h3 className="text-md font-bold">
        Organizations ({totalOrganizations})
      </h3>
      <div className="flex items-center space-x-3">
        {organizations && organizations.length > 0 ? (
          organizations.map((organization) => (
            <div key={organization.id} className="flex items-center space-x-6">
              <a
                href={`https://github.com/${organization.login}`}
                target="_blank"
              >
                <Image
                  className="rounded-full"
                  src={organization.avatar_url}
                  width={40}
                  height={40}
                  alt={organization.login}
                />
              </a>
            </div>
          ))
        ) : (
          <p className="text-sm">No organizations found.</p>
        )}
      </div>
    </div>
  )
}
