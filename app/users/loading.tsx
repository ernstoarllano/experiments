import { Skeleton } from '@/app/components/ui/skeleton'

/**
 * Component for displaying a loading state for the users page.
 */
export default function Loading() {
  return (
    <div className="p-8 space-y-16">
      <div className="flex items-center max-w-xs space-x-3">
        <Skeleton className="w-[237px] h-10" />
        <Skeleton className="w-[70px] h-10" />
      </div>
      <Skeleton className="w-full h-screen" />
    </div>
  )
}
