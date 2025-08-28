const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:4000'

export async function api<T>(path: string, options?: RequestInit): Promise<T> {
  const res = await fetch(`${API_URL}${path}`, {
    headers: { 'Content-Type': 'application/json' },
    ...options,
  })
  if (!res.ok) throw new Error(await res.text())
  return res.json()
}

export type Vendor = {
  id: number
  name: string
  location: string
  specialties: string[]
  description: string
  rating: number
}

export type ProjectRequest = {
  id?: number
  name: string
  email: string
  location: string
  budget: number
  timeline: string
  description: string
}

export async function listVendors() { return api<Vendor[]>('/api/vendors') }
export async function createVendor(v: Omit<Vendor,'id'|'rating'> & {rating?: number}) { return api<Vendor>('/api/vendors', { method: 'POST', body: JSON.stringify(v) }) }
export async function submitRequest(pr: ProjectRequest) { return api<ProjectRequest>('/api/requests', { method: 'POST', body: JSON.stringify(pr) }) }
export async function matchVendors(input: { needText: string }) { return api<{ ranked: Array<{vendor: Vendor, score: number}> }>('/api/match', { method: 'POST', body: JSON.stringify(input) }) }
export async function analytics() { return api<{ traffic: Array<{date: string, visits: number}>, totals: { vendors: number, requests: number } }>('/api/analytics') }
