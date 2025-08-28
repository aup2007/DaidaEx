import Hero from '@/components/Hero'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'

export default function Home(){
  return (
    <>
      <Hero />
      <section className="container py-12 grid md:grid-cols-3 gap-6">
        {[
          { title: 'Smarter Sourcing', desc: 'AI ranks vendors by fit, budget, availability, and track record.' },
          { title: 'Verified Vendors', desc: 'Structured profiles, specialties, and ratings help you choose with confidence.' },
          { title: 'Frictionless Workflow', desc: 'Submit once, compare matches, and kick off projects in clicks.' },
        ].map((f)=> (
          <Card key={f.title}>
            <CardHeader><CardTitle>{f.title}</CardTitle><CardDescription>{f.desc}</CardDescription></CardHeader>
            <CardContent>
              <div className="h-24 rounded-xl bg-gradient-to-br from-gray-50 to-gray-100 border border-gray-200" />
            </CardContent>
          </Card>
        ))}
      </section>
    </>
  )
}
