import { Card, CardContent, CardHeader, CardTitle } from './ui/card'

export default function MatchResults({ results }: { results: Array<{ vendor: any, score: number }> | null }){
  if (!results) return (
    <Card>
      <CardHeader><CardTitle>AI Match Results</CardTitle></CardHeader>
      <CardContent>
        <p className="text-sm text-gray-600">Submit your project to see ranked matches.</p>
      </CardContent>
    </Card>
  )

  return (
    <Card>
      <CardHeader><CardTitle>AI Match Results</CardTitle></CardHeader>
      <CardContent>
        <ul className="space-y-3">
          {results.map((r, idx)=> (
            <li key={r.vendor.id} className="flex items-start gap-3">
              <div className="mt-1 text-sm text-gray-500 w-6">#{idx+1}</div>
              <div className="flex-1">
                <div className="font-medium">{r.vendor.name}</div>
                <div className="text-sm text-gray-600">Score: {r.score.toFixed(3)} — {r.vendor.location}</div>
                <div className="text-sm text-gray-700 line-clamp-2">{r.vendor.description}</div>
              </div>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  )
}
