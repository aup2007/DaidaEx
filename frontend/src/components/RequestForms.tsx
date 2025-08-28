import Input from './ui/input'
import Textarea from './ui/textarea'
import Button from './ui/button'
import { useState } from 'react'
import { submitRequest, matchVendors } from '@/lib/api'
import MatchResults from './MatchResult'

export default function RequestForm(){
  const [form, setForm] = useState({ name:'', email:'', location:'', budget: 10000, timeline:'4-8 weeks', description:'' })
  const [results, setResults] = useState<any[] | null>(null)
  const [loading, setLoading] = useState(false)

  async function onSubmit(e: React.FormEvent){
    e.preventDefault()
    setLoading(true)
    setResults(null)
    try {
      await submitRequest({ ...form, budget: Number(form.budget) })
    } catch {}
    try {
      const r = await matchVendors({ needText: `${form.description} ${form.location} budget:${form.budget}` })
      setResults(r.ranked)
    } catch { setResults([]) }
    setLoading(false)
  }

  return (
    <div className="grid md:grid-cols-2 gap-8">
      <form onSubmit={onSubmit} className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Input placeholder="Your name" value={form.name} onChange={e=>setForm({...form, name:e.target.value})} required />
          <Input placeholder="Email" type="email" value={form.email} onChange={e=>setForm({...form, email:e.target.value})} required />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Input placeholder="Location (City, State)" value={form.location} onChange={e=>setForm({...form, location:e.target.value})} required />
          <Input placeholder="Budget (USD)" type="number" min={0} value={form.budget} onChange={e=>setForm({...form, budget:Number(e.target.value)})} required />
        </div>
        <Input placeholder="Timeline (e.g., 6-10 weeks)" value={form.timeline} onChange={e=>setForm({...form, timeline:e.target.value})} />
        <Textarea placeholder="Describe your project (scope, materials, constraints, etc.)" rows={6} value={form.description} onChange={e=>setForm({...form, description:e.target.value})} required />
        <Button disabled={loading}>{loading? 'Matching…' : 'Submit & Get Matches'}</Button>
      </form>

      <div>
        <MatchResults results={results} />
      </div>
    </div>
  )
}
