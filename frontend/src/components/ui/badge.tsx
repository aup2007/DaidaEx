import { HTMLAttributes } from 'react'
import { cn } from '@/lib/utils'

export default function Badge({ className, ...props }: HTMLAttributes<HTMLSpanElement>) {
  return <span className={cn('inline-flex items-center rounded-full border px-2 py-0.5 text-xs border-brand-200 text-brand-800 bg-brand-50', className)} {...props} />
}
