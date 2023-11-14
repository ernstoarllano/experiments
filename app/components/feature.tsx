import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/app/components/ui/card'

type FeatureProps = {
  title: string
  description: string
}

export default function Feature({ title, description }: FeatureProps) {
  return (
    <Card>
      <CardHeader className="space-y-3">
        <CardTitle className="text-md font-bold">{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
    </Card>
  )
}
