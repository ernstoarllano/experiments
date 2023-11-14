import { Skeleton } from '@/app/components/ui/skeleton'

/**
 * Component for displaying a loading state when loading episodes.
 *
 * @returns {JSX.Element} The episodes loading.
 */
export default function EpisodesLoading() {
  return (
    <div className="p-8 space-y-4">
      <Skeleton className="w-24 h-8" />
      <div className="grid grid-cols-3 lg:grid-cols-4 gap-6">
        <Skeleton className="h-40" />
        <Skeleton className="h-40" />
        <Skeleton className="h-40" />
        <Skeleton className="h-40" />
      </div>
    </div>
  )
}
