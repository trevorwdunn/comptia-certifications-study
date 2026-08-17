export default function Loading({ label = 'Loading…' }) {
  return (
    <div className="flex items-center justify-center py-20 text-slate-500 text-sm gap-2">
      <span className="w-4 h-4 border-2 border-slate-600 border-t-slate-300 rounded-full animate-spin" />
      {label}
    </div>
  )
}
