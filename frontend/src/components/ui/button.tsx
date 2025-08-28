import { ButtonHTMLAttributes } from 'react'
import { cn } from '@/lib/utils'

export default function Button({ className, ...props }: ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      className={cn(
        'inline-flex items-center justify-center rounded-2xl px-4 py-2 text-sm font-medium shadow-sm',
        'bg-brand-600 text-white hover:bg-brand-700 focus:outline-none focus:ring-2 focus:ring-brand-400',
        'disabled:opacity-60 disabled:cursor-not-allowed',
        className
      )}
      {...props}
    />
  )
}
