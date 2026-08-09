import { Check, Circle, Flame, Rocket, TrendingUp } from 'lucide-react'
import type { ReactNode } from 'react'

interface StatusItemProps {
  label: string
  done: boolean
}

export function StatusItem({ label, done }: StatusItemProps) {
  return (
    <div className="flex items-center gap-2.5">
      <span
        className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-xs ${
          done ? 'bg-success-soft text-success' : 'bg-canvas text-ink-muted'
        }`}
        aria-hidden
      >
        {done ? <Check className="h-3 w-3" strokeWidth={3} /> : <Circle className="h-3 w-3" />}
      </span>
      <span className={`text-sm ${done ? 'text-ink' : 'text-ink-secondary'}`}>{label}</span>
      <span className="sr-only">{done ? 'Submitted' : 'Not submitted'}</span>
    </div>
  )
}

interface BadgeProps {
  children: ReactNode
  variant?: 'default' | 'accent' | 'success' | 'warning'
}

export function Badge({ children, variant = 'default' }: BadgeProps) {
  const styles = {
    default: 'bg-canvas text-ink-secondary border-border',
    accent: 'bg-accent-soft text-accent border-accent/20',
    success: 'bg-success-soft text-success border-success/20',
    warning: 'bg-warning-soft text-warning border-warning/20',
  }

  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-xs font-medium ${styles[variant]}`}
    >
      {children}
    </span>
  )
}

const achievementIcons = {
  streak: Flame,
  builds: Rocket,
  consistency: TrendingUp,
}

interface AchievementBadgeProps {
  icon: keyof typeof achievementIcons
  label: string
}

export function AchievementBadge({ icon, label }: AchievementBadgeProps) {
  const Icon = achievementIcons[icon]
  return (
    <div className="flex items-center gap-2.5 rounded-xl border border-border bg-surface px-3.5 py-3">
      <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-accent-soft text-accent">
        <Icon className="h-4 w-4" />
      </span>
      <span className="text-sm font-medium text-ink">{label}</span>
    </div>
  )
}
