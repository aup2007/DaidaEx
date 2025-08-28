import logoUrl from '@/assets/gfg.jpeg'

export default function Logo({
  withText = true,
  size = 64,
  ring = true,
  textclass = 'text-3xl md:text-4xl leading-none',
  className = '',
}: { withText?: boolean; size?: number; ring?: boolean; className?: string; textclass?:string }) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <img
        src={logoUrl}
        alt="DaidaEx"
        className={`h-8 w-8 object-cover rounded ${ring ? 'bg-white ring-1 ring-black/10' : ''}`}
        width={size}
        height={size}
        loading="eager"
        decoding="async"
      />
      {withText && <span className="font-semibold tracking-tight ${textClass}">DaidaEx</span>}
    </div>
  )
}
