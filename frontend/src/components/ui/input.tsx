import { InputHTMLAttributes } from 'react'
import { cn } from '@/lib/utils'

export default function Input({ className, ...props }: InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      className={cn(
        'w-full rounded-xl border border-gray-200 bg-white px-3 py-2 text-sm shadow-sm',
        'focus:outline-none focus:ring-2 focus:ring-brand-400',
        className
      )}
      {...props}
    />
  )
}
