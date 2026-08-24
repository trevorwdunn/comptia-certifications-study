import { useTheme } from '../context/ThemeContext'

const OPTIONS = [
  { value: 'light',  icon: '☀', label: 'Light'  },
  { value: 'dark',   icon: '☾', label: 'Dark'   },
  { value: 'system', icon: '⌂', label: 'System' },
]

// Segmented light/dark/system control. `compact` is the sidebar footer version —
// icons only, sized to sit beside the other footer rows.
export default function ThemeToggle({ compact = false }) {
  const { preference, setTheme } = useTheme()

  return (
    <div
      role="radiogroup"
      aria-label="Color theme"
      className={`flex bg-sunken rounded-lg p-0.5 ${compact ? 'gap-0.5' : 'gap-1'}`}
    >
      {OPTIONS.map(({ value, icon, label }) => {
        const active = preference === value
        return (
          <button
            key={value}
            role="radio"
            aria-checked={active}
            aria-label={label}
            title={label}
            onClick={() => setTheme(value)}
            className={`flex-1 flex items-center justify-center gap-1.5 rounded-md transition-colors ${
              compact ? 'py-1.5 lg:py-1 text-sm' : 'py-1.5 px-3 text-sm'
            } ${
              active
                ? 'bg-surface dark:bg-raised text-ink shadow-sm ring-1 ring-line-2'
                : 'text-ink-5 hover:text-ink-3'
            }`}
          >
            <span aria-hidden="true">{icon}</span>
            {!compact && <span className="font-medium">{label}</span>}
          </button>
        )
      })}
    </div>
  )
}
