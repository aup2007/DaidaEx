import { useEffect, useState } from 'react'
import { createVendor, listVendors, Vendor } from '@/lib/api'
import Input from '@/components/ui/input'
import Textarea from '@/components/ui/textarea'
import Button from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export default function Admin(){
  const [vendors, setVendors] = useState<Vendor[]>([])
  const [form, setForm] = useState({ name:'', location:'', specialties:'concrete, plumbing', description:'', rating:4.6 })
  async function refresh(){ try { setVendors(await listVendors()) } catch { setVendors([]) } }
  useEffect(()=>{ refresh() },[])

  async function onSubmit(e: React.FormEvent){
    e.preventDefault()
    await createVendor({
      name: form.name,
      location: form.location,
      specialties: form.specialties.split(',').map(s=>s.trim()).filter(Boolean),
      description: form.description,
      rating: Number(form.rating)
    }).catch(()=>{})
    setForm({ name:'', location:'', specialties:'', description:'', rating:4.5 })
    refresh()
  }

  return (
    <section className="container py-10">
      <h2 className="text-2xl font-semibold">Admin</h2>
      <div className="grid md:grid-cols-2 gap-8 mt-6">
        <Card>
          <CardHeader><CardTitle>Add Vendor</CardTitle></CardHeader>
          <CardContent>
            <form onSubmit={onSubmit} className="space-y-3">
              <Input placeholder="Vendor name" value={form.name} onChange={e=>setForm({...form, name:e.target.value})} required />
              <Input placeholder="Location" value={form.location} onChange={e=>setForm({...form, location:e.target.value})} required />
              <Input placeholder="Specialties (comma-separated)" value={form.specialties} onChange={e=>setForm({...form, specialties:e.target.value})} />
              <Textarea placeholder="Description" rows={4} value={form.description} onChange={e=>setForm({...form, description:e.target.value})} />
              <Input type="number" min={1} max={5} step={0.1} placeholder="Rating" value={form.rating} onChange={e=>setForm({...form, rating:Number(e.target.value)})} />
              <Button type="submit">Save Vendor</Button>
            </form>
          </CardContent>
        </Card>

        <Card>
          <CardHeader><CardTitle>Vendors ({vendors.length})</CardTitle></CardHeader>
          <CardContent>
            <ul className="space-y-2 text-sm">
              {vendors.map(v=> (
                <li key={v.id} className="flex items-center justify-between border rounded-xl px-3 py-2">
                  <span className="font-medium">{v.name}</span>
                  <span className="text-gray-600">{v.location}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
