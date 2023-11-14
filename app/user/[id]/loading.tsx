import { Skeleton } from '@/app/components/ui/skeleton'

/**
 * Component for displaying a loading state for a user.
 *
 * @returns {JSX.Element} The component.
 */
export default function Loading() {
  return (
    <div className="p-8 space-y-16">
      <Skeleton className="w-24 h-10" />
      <div className="space-y-6">
        <div className="flex items-center space-x-6">
          <Skeleton className="w-[100px] h-[100px] rounded-full" />
          <Skeleton className="w-[200px] h-[40px]" />
        </div>
        <div className="flex flex-col justify-center space-y-3">
          <Skeleton className="w-28 h-7" />
          <div className="flex items-center space-x-3">
            <Skeleton className="w-[40px] h-[40px] rounded-full" />
            <Skeleton className="w-[40px] h-[40px] rounded-full" />
            <Skeleton className="w-[40px] h-[40px] rounded-full" />
            <Skeleton className="w-[40px] h-[40px] rounded-full" />
            <Skeleton className="w-[40px] h-[40px] rounded-full" />
          </div>
        </div>
      </div>
      <div className="grid lg:grid-cols-4 gap-4">
        <Skeleton className="w-full h-56" />
        <Skeleton className="w-full h-56" />
        <Skeleton className="w-full h-56" />
        <Skeleton className="w-full h-56" />
      </div>
    </div>
  )
}
