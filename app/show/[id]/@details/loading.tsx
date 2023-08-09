import { Skeleton } from '@/components/ui/skeleton'

export default function Loading() {
  return (
    <div className="flex flex-col lg:flex-row gap-8 p-8">
      <div className="shrink-0">
        <Skeleton className="w-52 h-64" />
      </div>
      <div className="flex-grow items-stretch space-y-4">
        <Skeleton className="w-40 h-11" />
        <Skeleton className="h-48" />
      </div>
    </div>
  )
}
