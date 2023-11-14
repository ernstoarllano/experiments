import { Repo } from '@/types/repo'

import { Button } from '@/app/components/ui/button'
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from '@/app/components/ui/card'

type ReposProps = {
  /**
   * The repos array
   */
  repos: Repo[]
}

/**
 * Component for displaying the repos.
 *
 * @param {ReposProps} props The component props
 * @returns {JSX.Element} The repos.
 */
export function Repos({ repos }: ReposProps) {
  return (
    <div className="grid lg:grid-cols-4 gap-4">
      {repos && repos.length > 0 ? (
        repos.map((repo) => (
          <Card className="flex flex-col" key={repo.id}>
            <CardHeader>
              <h3 className="text-xl font-bold break-words">{repo.name}</h3>
            </CardHeader>
            <CardContent>
              <p className="text-sm">
                {repo.description ? repo.description : 'No description'}
              </p>
            </CardContent>
            <CardFooter className="mt-auto mb-0">
              <Button asChild>
                <a href={repo.html_url} target="_blank">
                  View Repo
                </a>
              </Button>
            </CardFooter>
          </Card>
        ))
      ) : (
        <p className="text-sm">No repos found.</p>
      )}
    </div>
  )
}
