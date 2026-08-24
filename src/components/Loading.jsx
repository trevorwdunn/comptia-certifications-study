export default function Loading({ label = 'Loading…' }) {
  return (
    <div className="flex items-center justify-center py-20 text-ink-5 text-sm gap-2">
      <span className="w-4 h-4 border-2 border-line-3 border-t-ink-4 rounded-full animate-spin" />
      {label}
    </div>
  )
}
