import { Card } from '../ui/Card'
import { DayProgressGrid } from '../ui/ProgressBar'
import { TOTAL_DAYS } from '../../data/mockData'
import { getProgressPercent } from '../../utils/helpers'
import { useAuth } from '../../context/AuthContext'

export function ChallengeProgress() {
  const { student } = useAuth()
  const percent = getProgressPercent(student.completedDays, TOTAL_DAYS)

  return (
    <Card>
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="text-sm font-semibold text-ink">Challenge progress</h3>
          <p className="mt-2 text-2xl font-bold tabular-nums text-ink">
            {student.completedDays}
            <span className="text-base font-medium text-ink-muted"> / {TOTAL_DAYS}</span>
          </p>
          <p className="mt-1 text-xs text-ink-muted">days completed</p>
        </div>
        <div className="text-right">
          <p className="text-3xl font-bold tabular-nums text-accent">{percent}%</p>
        </div>
      </div>
      <div className="mt-5">
        <DayProgressGrid
          completedDays={student.completedDays}
          currentDay={student.currentDay}
          compact
        />
      </div>
    </Card>
  )
}
