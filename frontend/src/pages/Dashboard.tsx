import { useEffect, useState } from 'react'
import { analytics } from '@/lib/api'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import TrafficChart from '@/components/charts/TrafficChart'

export default function Dashboard(){
  const [data, setData] = useState<{ traffic: Array<{date: string, visits: number}>, totals: { vendors: number, requests: number } } | null>(null)
  useEffect(()=>{ analytics().then(setData).catch(()=>setData({traffic:[], totals:{vendors:0, requests:0}})) },[])

  return (
    <section className="container py-10">
      <h2 className="text-2xl font-semibold">Analytics</h2>
      <p className="text-gray-600">Key metrics at a glance.</p>
      <div className="mt-6 grid md:grid-cols-3 gap-6">
        <Card className="md:col-span-2">
          <CardHeader><CardTitle>Traffic (last 14 days)</CardTitle></CardHeader>
          <CardContent>{data && <TrafficChart data={data.traffic} />}</CardContent>
        </Card>
        <div className="grid gap-6">
          <Card>
            <CardHeader><CardTitle>Total Vendors</CardTitle></CardHeader>
            <CardContent className="text-3xl font-semibold">{data?.totals.vendors ?? '–'}</CardContent>
          </Card>
          <Card>
            <CardHeader><CardTitle>Total Requests</CardTitle></CardHeader>
            <CardContent className="text-3xl font-semibold">{data?.totals.requests ?? '–'}</CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
