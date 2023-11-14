import { Skeleton } from '@/app/components/ui/skeleton'

/**
 * Component for displaying a loading state when loading show details.
 *
 * @returns {JSX.Element} The show details loading.
 */
export default function DetailsLoading() {
  return (
    <div className="relative">
      <div className="w-auto h-screen">
        <Skeleton className="w-full h-full opacity-50" />
      </div>
      <div className="flex flex-col absolute top-0 bottom-0 left-0 right-0 p-8">
        <Skeleton className="w-64 h-8 mb-4" />
        <div className="grid grid-cols-12 gap-8 mt-auto mb-0">
          <div className="col-span-3 space-y-2">
            <Skeleton className="w-full h-10" />
            <Skeleton className="w-64 h-4 mx-auto" />
          </div>
          <div className="col-span-9 space-y-2">
            <Skeleton className="w-full h-14" />
            <Skeleton className="w-24 h-4" />
          </div>
        </div>
      </div>
    </div>
  )
}
