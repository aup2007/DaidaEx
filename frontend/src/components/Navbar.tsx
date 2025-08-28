import { Link, NavLink } from 'react-router-dom'
import { Menu } from 'lucide-react'
import { useState } from 'react'
import Logo from './Logo'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const nav = (
    <div className="flex flex-col gap-3 md:flex-row md:items-center">
      {[
        { to: '/', label: 'Home' },
        { to: '/marketplace', label: 'Marketplace' },
        { to: '/request', label: 'Submit Request' },
        { to: '/dashboard', label: 'Dashboard' },
        { to: '/admin', label: 'Admin' },
      ].map((item) => (
        <NavLink
          key={item.to}
          to={item.to}
          className={({ isActive }) =>
            `px-2 py-1 rounded-lg ${isActive ? 'bg-brand-100 text-brand-800' : 'text-gray-700 hover:text-brand-700'}`
          }
          end={item.to === '/'}
        >
          {item.label}
        </NavLink>
      ))}
    </div>
  )
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/80 backdrop-blur">
      <div className="container flex h-16 items-center justify-between">
        {/* <Link to="/" className="flex items-center gap-2 font-semibold">
          <span className="inline-block h-8 w-8 rounded-lg bg-brand-600" />
          DaidaEx
        </Link> */}
        <Link to="/" className="flex items-center gap-2 font-semibold">
          <Logo />   {/* ring-shaped logo + text */}
        </Link>
        <nav className="hidden md:block">{nav}</nav>
        <div className="md:hidden">
          <button onClick={() => setOpen((v) => !v)} className="p-2 rounded-lg hover:bg-gray-100" aria-label="Toggle menu">
            <Menu />
          </button>
        </div>
      </div>
      {open && <div className="md:hidden border-t bg-white"><div className="container py-3">{nav}</div></div>}
    </header>
  )
}
