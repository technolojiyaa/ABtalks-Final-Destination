import { Award } from 'lucide-react'
import { AchievementBadge } from '../ui/Badge'
import { Card } from '../ui/Card'
import { useAuth } from '../../context/AuthContext'

export function Achievements() {
  const { student } = useAuth()
  const hasAchievements = student.achievements.length > 0

  return (
    <Card>
      <h3 className="text-sm font-semibold text-ink">Your standing</h3>
      {hasAchievements ? (
        <div className="mt-4 space-y-2.5">
          {student.achievements.map((a) => (
            <AchievementBadge key={a.id} icon={a.icon} label={a.label} />
          ))}
        </div>
      ) : (
        <div className="mt-4 flex items-center gap-2.5 rounded-xl border border-dashed border-border bg-canvas px-3.5 py-3">
          <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-accent-soft text-accent">
            <Award className="h-4 w-4" />
          </span>
          <span className="text-sm font-medium text-ink-secondary">
            Your first achievement is waiting.
          </span>
        </div>
      )}
    </Card>
  )
}
