import { Vendor } from '@/lib/api'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from './ui/card'
import Badge from './ui/badge'

export default function VendorCard({ vendor }: { vendor: Vendor }){
  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle>{vendor.name}</CardTitle>
        <CardDescription>{vendor.location}</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-gray-700 line-clamp-3">{vendor.description}</p>
        <div className="mt-3 flex flex-wrap gap-2">
          {vendor.specialties.map((s, i)=> <Badge key={i}>{s}</Badge>)}
        </div>
        <div className="mt-4 text-sm text-gray-600">Rating: {vendor.rating.toFixed(1)} / 5</div>
      </CardContent>
    </Card>
  )
}
