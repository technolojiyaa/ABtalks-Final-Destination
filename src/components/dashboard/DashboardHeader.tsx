import { getGreeting } from '../../utils/helpers'
import { ProgressBar } from '../ui/ProgressBar'
import { TOTAL_DAYS } from '../../data/mockData'
import { getProgressPercent } from '../../utils/helpers'
import { useAuth } from '../../context/AuthContext'

export function DashboardHeader() {
  const { student } = useAuth()
  const percent = getProgressPercent(student.completedDays, TOTAL_DAYS)

  return (
    <div>
      <p className="text-sm text-ink-secondary">
        {getGreeting()}, {student.firstName}.
      </p>
      <h1 className="mt-1 text-2xl font-bold tracking-tight text-ink">
        Day {student.currentDay} of {TOTAL_DAYS}
      </h1>
      <div className="mt-4">
        <div className="mb-2 flex items-center justify-between text-sm">
          <span className="text-ink-secondary">
            {student.completedDays} days completed
          </span>
          <span className="font-semibold tabular-nums text-accent">{percent}%</span>
        </div>
        <ProgressBar value={student.completedDays} max={TOTAL_DAYS} animate />
      </div>
    </div>
  )
}
