import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import Button from './ui/button'

export default function Hero(){
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-brand-50 via-white to-white" />
      <div className="container relative py-16 md:py-24 grid md:grid-cols-2 gap-10 items-center">
        <motion.div initial={{opacity:0, y:20}} animate={{opacity:1, y:0}} transition={{duration:0.6}}>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
            Match your <span className="text-brand-700">construction needs</span> with the right vendors — instantly.
          </h1>
          <p className="mt-4 text-gray-600 text-lg">AI-powered sourcing that cuts guesswork, saves budget, and keeps projects on schedule.</p>
          <div className="mt-6 flex gap-3">
            <Link to="/request"><Button>Get Matched</Button></Link>
            <Link to="/marketplace"><Button className="bg-white text-brand-700 ring-1 ring-brand-200 hover:bg-brand-50">Explore Vendors</Button></Link>
          </div>
        </motion.div>
        <motion.div initial={{opacity:0, scale:0.95}} animate={{opacity:1, scale:1}} transition={{duration:0.6, delay:0.1}} className="relative">
          <div className="aspect-[4/3] rounded-3xl bg-white shadow-xl ring-1 ring-black/5 p-6 grid grid-cols-6 gap-3">
            {Array.from({length:12}).map((_,i)=> (
              <div key={i} className="h-16 rounded-2xl bg-gradient-to-br from-gray-50 to-gray-100 border border-gray-200" />
            ))}
          </div>
          <div className="absolute -bottom-6 -left-6 h-24 w-24 rounded-full bg-brand-200 blur-3xl opacity-50" />
          <div className="absolute -top-6 -right-6 h-24 w-24 rounded-full bg-brand-300 blur-3xl opacity-50" />
        </motion.div>
      </div>
    </section>
  )
}
