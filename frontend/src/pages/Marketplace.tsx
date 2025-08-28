import { useEffect, useState } from 'react'
import { listVendors, Vendor } from '@/lib/api'
import VendorCard from '@/components/VendorCard'

export default function Marketplace(){
  const [vendors, setVendors] = useState<Vendor[]>([])
  useEffect(()=>{ listVendors().then(setVendors).catch(()=>setVendors([])) },[])

  return (
    <section className="container py-10">
      <h2 className="text-2xl font-semibold">Marketplace</h2>
      <p className="text-gray-600">Browse verified construction vendors.</p>
      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {vendors.map(v=> <VendorCard key={v.id} vendor={v} />)}
      </div>
    </section>
  )
}
